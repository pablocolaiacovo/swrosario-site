import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import NewsContainer from "../components/newsContainer"
import OrganizersContainer from "../components/organizersContainer"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <NewsContainer />
    <OrganizersContainer />
  </Layout>
)

export default IndexPage
