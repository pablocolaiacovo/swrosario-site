import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"


import "./jumbotron.module.scss"

const Jumbotron = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      calendar: file(relativePath: { eq: "fecha-sw-2022.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
            presentationWidth
          }
        }
      }
      hashtags: site {
        siteMetadata {
          hashtags
        }
      }
      background: file(relativePath: { eq: "Foto_Cosmos.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const imageData = data.background.childImageSharp.fluid

  return (
    <BackgroundImage
      fluid={imageData}
      backgroundColor={`#4c19af`}
      className="jumbotron mb-0"
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
            style={{color: '#4C19AF'}}
            className="btn rounded-pill text-uppercase bg-white mx-auto"
            href="https://tswkrosario2022.sched.com/"
          >
            ¡Mirá la agenda!
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Jumbotron
