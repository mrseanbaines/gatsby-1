import React from "react"
import { Link } from "gatsby"
import { FaShoppingCart } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaShoppingCart />
  </Layout>
)

export default IndexPage
