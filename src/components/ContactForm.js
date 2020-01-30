import React,{useState} from 'react';
import { Form, Button } from "react-bootstrap"

const ContactForm = (props) => {

const [validated, setValidated] = useState(false);

const [values, setValues] = useState({
  email: '',
  name: '',
  subject: '',
  textarea: '',
})
const {email, name,subject, textarea } = values;

const handleChange = name => event => {
  // HOF
  setValues({...values, [name]: event.target.value})

}

const handleSubmit = e => {
 // e.preventDefault();
  const form = e.currentTarget;
  //console.log(values);
  //alert(values);
  
  if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
  }
  setValidated(true);
}
 
   return (
        <Form 
          noValidate 
          validated={validated} 
          onSubmit={handleSubmit} 
          method="POST" data-netlify="true"
        >
          <Form.Group controlId="contactForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              required 
              type="text" 
              placeholder="name" 
              value={name}
              onChange={handleChange('name')} 
            />
            <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
            </Form.Group>
          <Form.Group controlId="contactForm.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              required 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={handleChange('email')} 
              />
            <Form.Control.Feedback type="invalid">
            Please provide a valid Email address.
          </Form.Control.Feedback>
            </Form.Group>
          <Form.Group controlId="contactForm.Subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              required 
              type="text" 
              placeholder="subject"
              value={subject}
              onChange={handleChange('subject')}  
              />
            <Form.Control.Feedback type="invalid">
            Please provide a subject.
          </Form.Control.Feedback>
            </Form.Group>
          <Form.Group controlId="contactForm.Message">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control 
              required 
              as="textarea" 
              rows="3" 
              value={textarea}
              onChange={handleChange('textarea')} 
              />
            <Form.Control.Feedback type="invalid">
            Please provide a valid content.
          </Form.Control.Feedback>
            </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}
export default ContactForm;