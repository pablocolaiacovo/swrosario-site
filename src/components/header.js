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
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <section className="container">
          <Link className="navbar-brand mr-auto" to="/">
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
          </Link>
          <a
            className="btn btn-primary rounded-pill text-uppercase"
            href="https://www.eventbrite.com/e/entradas-techstars-global-startup-weekend-rosario-women-66478730673?aff=eprofsaved"
            target="_blank"
          >
            ¡Conseguí tu entrada!
          </a>
        </section>
      </nav>
    </header>

    // <header
    //   style={{
    //     background: `rebeccapurple`,
    //     marginBottom: `1.45rem`,
    //   }}
    // >
    //   <div
    //     style={{
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `1.45rem 1.0875rem`,
    //     }}
    //   >
    //     <h1 style={{ margin: 0 }}>
    //       <Link
    //         to="/"
    //         style={{
    //           color: `white`,
    //           textDecoration: `none`,
    //         }}
    //       >
    //         {siteTitle}
    //       </Link>
    //     </h1>
    //   </div>
    // </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
