import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    <BackgroundSection title="Shop." styleClass="shop" />
    */}
    <Info />
  </Layout>
)

{
  /*export const query = graphql`
  {
    img: file(relativePath: { eq: "backgroundHome.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`*/
}

export default ShopPage
