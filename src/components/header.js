import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-sw-woman.png" }) {
        childImageSharp {
          fixed(width: 235) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header style={{ backgroundColor: "#d5363c" }}>
      <nav className="navbar navbar-dark">
        <section className="container justify-content-center justify-content-md-end">
          <Link
            className="mr-md-auto mx-auto mx-md-0 navbar-brand text-center"
            to="/"
          >
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </Link>
          <a
            className="btn rounded-pill text-uppercase bg-white text-danger"
            href="https://www.eventbrite.com/e/entradas-techstars-global-startup-weekend-rosario-women-66478730673?aff=eprofsaved"
          >
            ¡Conseguí tu entrada!
          </a>
        </section>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
