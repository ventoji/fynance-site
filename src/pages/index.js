import React from 'react'
// import {Link} from "gatsby"
// import Post from '../components/Post'
import Content from '../components/Content'
import {graphql} from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
 import SEO from '../components/SEO'
//   

export default ({data}) => {

   //console.log(data);

  return (
    <div >
    <SEO />
    <PrimaryLayout>
    {data.allMarkdownRemark.nodes.map(
      (node,i) => (
        <Content
          key={i} 
          title={node.frontmatter.title} 
          html={node.html}
          image={node.frontmatter.image}
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
