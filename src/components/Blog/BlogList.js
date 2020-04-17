import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Globals/Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulBlogPost {
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
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <Title title="Blog" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
