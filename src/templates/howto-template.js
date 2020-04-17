import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Template = ({ data }) => {
  return <h1>{data.posts.title}</h1>
}
/* const {
    title,
    text: { json },
  } = data.post

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>

          <AniLink fade to="/how-to" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

*/

export const query = graphql`
  query($slug: String!) {
    posts: contentfulHowToPost(slug: { eq: $slug }) {
      title
      text {
        json
      }
      image {
        fluid {
          src
        }
      }
    }
  }
`

export default Template
