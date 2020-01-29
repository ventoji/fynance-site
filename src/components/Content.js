import React from "react"
import { Row, Col} from "react-bootstrap"
//   
//   {props.image && <Image className="img-pages" src={props.image} /> }
const Content = props => {


  return (
    <div className="home-content">
        <Row>
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
