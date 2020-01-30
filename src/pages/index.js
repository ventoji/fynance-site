import React from 'react'
// import {Link} from "gatsby"
// import Post from '../components/Post'
import Content from '../components/Content'
import {graphql} from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
 import SEO from '../components/SEO'
 import ImageParallax from "../components/ImageParallax"
// import MainContent from "../layouts/MainContent",     <MainContent />
 import Intro from "../pages/intro"
 import ContactForm from "../components/ContactForm"


export default ({data}) => {

   //console.log(data);

  return (
    <div >
    <SEO />
    <PrimaryLayout>
    <Intro />
    <div style={{display: "none"}}>
    <ContactForm />
    </div>
    

    {data.allMarkdownRemark.nodes.map(
      (node,i) => (
        <div  key={i} >
        {node.frontmatter.image && <ImageParallax image={node.frontmatter.image}/> }
        <Content
          title={node.frontmatter.title} 
          html={node.html}
          />
          </div>
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
