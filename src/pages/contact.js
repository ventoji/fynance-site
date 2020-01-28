import React from "react"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Contact = () => (
  <PrimaryLayout>
    <div style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-sm">
          <h1> Contact</h1>
        </div>

        <div className="col-sm">
          <Form>
            <Form.Group controlId="contactForm.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group controlId="contactForm.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="contactForm.Subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="subject" />
            </Form.Group>
            <Form.Group controlId="contactForm.Message">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </PrimaryLayout>
)

export default Contact
