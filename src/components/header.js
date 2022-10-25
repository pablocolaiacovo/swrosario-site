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
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 235) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section style={{ backgroundColor: "#4c19af" }}>
      <Container>
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
                style={{color: '#4c19af'}}
                href="https://tswkrosario2022.sched.com/"
                className="btn rounded-pill text-uppercase bg-white"
              >
                ¡Mirá la agenda!
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
