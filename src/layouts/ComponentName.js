import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
console.log(data);
  return (<pre>{JSON.stringify(data, null, 4)}</pre>)


}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Fynance"}}}) {
      nodes {
        frontmatter {
          title
          date
          keywords
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

export default ComponentName