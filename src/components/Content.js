import React from "react"
import { Row, Col, Image } from "react-bootstrap"
// import ImageParallax from "../components/ImageParallax"
//    {props.image && <ImageParallax image={props.image}/> }
const Content = props => {


  return (
    <div className="home-content container">
        <Row>
         
       
          {props.image && <Image className="img-pages" src={props.image} /> }

          <Col sm={4}>
            <h1> {props.title}</h1>
          </Col>
          <Col sm={8}>
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
          </Col>
        </Row>
    </div>
  )
}

export default Content
