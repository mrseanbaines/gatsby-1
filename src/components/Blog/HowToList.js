import React from "react"
import HowToCard from "./HowToCard"
import Title from "../Globals/Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulHowToPost {
      edges {
        node {
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const HowToList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="Explore By Topic" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <HowToCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default HowToList
