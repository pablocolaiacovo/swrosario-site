import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-sw-woman.png" }) {
        childImageSharp {
          fixed(width: 235) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section style={{ backgroundColor: "#d5363c" }}>
      <Container fluid="true">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Link
            className="mr-md-auto mx-auto mx-md-0 navbar-brand text-center"
            to="/"
          >
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="https://www.eventbrite.com/e/entradas-techstars-global-startup-weekend-rosario-women-66478730673?aff=eprofsaved"
                className="btn rounded-pill text-uppercase bg-white text-danger"
              >
                ¡Conseguí tu entrada!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
