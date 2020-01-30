import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container, Row, Col, Image } from "react-bootstrap"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const ContentpageLayout = ({ data }) => {
   const post = data.markdownRemark
  //  console.log(post)
  return (
    <div>
      <SEO title={post.frontmatter.title} image={post.frontmatter.image} keywords={post.frontmatter.keywords}/>
      <Header />
      <Container>
        <Row>
          <Image className="img-pages" src={post.frontmatter.image} fluid />
          <Col sm={4}>
            <h1> {post.frontmatter.title}</h1>
          </Col>
          <Col sm={8}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default ContentpageLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        keywords
      }
    }
  }
`
