import React from "react"
// import {Link} from "gatsby"
import Post from '../components/Post'
import {graphql} from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
 import SEO from '../components/SEO'
//   

export default ({data}) => {

  // console.log(data);

  return (
    <div>
    <SEO />
    <PrimaryLayout>

        {data.allMarkdownRemark.nodes.map(
          (node,i) => (
            <Post
              key={i} 
              title={node.frontmatter.title} 
              excerpt={node.excerpt}
              image={node.frontmatter.image}
              readMore={node.fields.slug}
              />
          )
        )}
    </PrimaryLayout>
  </div>
  )

}


export const query = graphql`
{
  allMarkdownRemark{
    nodes{ 
      frontmatter{
        title
        date
        keywords
        image
      }
      excerpt
      html
      fields{
        slug
      }
      }
    }
  }
`
