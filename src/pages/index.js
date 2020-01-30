import React from "react"
import Content from "../components/Content"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import SEO from "../components/SEO"
import ImageParallax from "../components/ImageParallax"
import Intro from "../pages/intro"

export default ({ data }) => {
  return (
    <div>
      <SEO />
      <PrimaryLayout>
        <Intro />
        {data.allMarkdownRemark.nodes.map((node, i) => (
          <div key={i}>
            {node.frontmatter.image && (
              <ImageParallax image={node.frontmatter.image} />
            )}
            <Content title={node.frontmatter.title} html={node.html} />
          </div>
        ))}
      </PrimaryLayout>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content-pages)/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
