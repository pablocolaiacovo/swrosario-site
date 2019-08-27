import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
  </Layout>
)

export default IndexPage
