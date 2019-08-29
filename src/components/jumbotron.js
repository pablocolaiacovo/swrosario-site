import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import backgroundImage from "../images/foto-index2019-woman.jpg"

const Jumbotron = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      calendar: file(relativePath: { eq: "fecha-sw-woman.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      hashtags: site {
        siteMetadata {
          hashtags
        }
      }
    }
  `)

  return (
    <div
      className="jumbotron mb-0"
      style={{
        background: `url(${backgroundImage}) no-repeat center`,
        backgroundSize: "cover",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          {data.hashtags.siteMetadata.hashtags.map((h, i) => {
            return (
              <a
                href={`https://www.instagram.com/explore/tags/${h}`}
                key={i}
                className="pr-1 text-white"
              >
                #{h}
              </a>
            )
          })}
        </div>
        <Img
          fluid={data.calendar.childImageSharp.fluid}
          style={{
            maxWidth: data.calendar.childImageSharp.fluid.presentationWidth,
          }}
          className="mx-auto"
        />
        <div className="row">
          <a
            className="btn rounded-pill text-uppercase bg-white text-danger mx-auto"
            href="https://www.eventbrite.com/e/entradas-techstars-global-startup-weekend-rosario-women-66478730673?aff=eprofsaved"
          >
            ¡Conseguí tu entrada!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
