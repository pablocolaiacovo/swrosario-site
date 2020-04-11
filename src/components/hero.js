/** @jsx jsx */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import "./hero.module.scss"

const Hero = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      calendar: file(relativePath: { eq: "fecha-sw-woman.png" }) {
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
      background: file(relativePath: { eq: "sw-all-2.jpg" }) {
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
      className="jumbotron mb-0 vh-100"
    ></BackgroundImage>
  )
}

export default Hero
