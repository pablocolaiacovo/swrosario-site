/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "react-bootstrap/Nav"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialLinks {
              icon
              url
            }
            footerLinks {
              url
              text
            }
          }
        }
      }
    `
  )

  return (
    <footer
      className="py-3"
      sx={{
        backgroundColor: "primary",
      }}
    >
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Nav as="ul" className="m-1">
              {data.site.siteMetadata.footerLinks.map((l, i) => {
                return (
                  <Nav.Item as="li" key={i}>
                    <Nav.Link href={l.url} className="text-white">
                      {l.text}
                    </Nav.Link>
                  </Nav.Item>
                )
              })}
            </Nav>
          </div>
          <div className="col-md-6">
            <ul className="nav justify-content-around justify-content-md-end text-white m-0">
              {data.site.siteMetadata.socialLinks.map((l, i) => {
                return (
                  <li className="nav-item social-icon m-1" key={i}>
                    <a href={l.url} className="text-white">
                      <i className={`fab fa-3x ${l.icon}`}></i>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
