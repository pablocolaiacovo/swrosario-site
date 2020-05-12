/** @jsx jsx */
import { useStaticQuery, graphql, Link } from "gatsby"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logoDesktop: file(relativePath: { eq: "sw-logo-white.png" }) {
        childImageSharp {
          fixed(width: 235, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      logoMobile: file(relativePath: { eq: "sw-logo-white.png" }) {
        childImageSharp {
          fixed(width: 215, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  const source = [
    data.logoMobile.childImageSharp.fixed,
    {
      ...data.logoDesktop.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sx={{
        backgroundColor: "primary",
      }}
    >
      <Link className="navbar-brand" to="/">
        <Img fixed={source} />
      </Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="text-white border-white"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto text-white text-center">
          <Nav.Link
            href="https://www.eventbrite.com/e/entradas-techstars-global-startup-weekend-rosario-women-66478730673?aff=eprofsaved"
            className="btn rounded-pill text-uppercase bg-white px-3"
            sx={{
              fontWeight: "bold",
            }}
            style={{ color: "#0db14b" }}
          >
            ¡Conseguí tu entrada!
          </Nav.Link>
          {/* <Nav.Link className="text-white">Noticias</Nav.Link>
          <Nav.Link className="text-white">Ediciones Pasadas</Nav.Link>
          <Nav.Link className="text-white">Quienes Somos</Nav.Link>
          <Nav.Link className="text-white">Contacto</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
