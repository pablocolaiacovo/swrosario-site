import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/scss/brands.scss"

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
    <footer className="py-3" style={{ backgroundColor: "#4C19AF" }}>
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled m-0 mb-2 text-center text-md-left">
              {data.site.siteMetadata.footerLinks.map((l, i) => {
                return (
                  <li className="mb-0" key={i}>
                    <a href={l.url} className="text-white">
                      {l.text}
                    </a>
                  </li>
                )
              })}
            </ul>
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
