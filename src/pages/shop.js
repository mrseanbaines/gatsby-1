import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    <BackgroundSection title="Shop." styleClass="shop" />
    <Menu products={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "backgroundHome.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulMycotownProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          images {
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ShopPage