import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'gatsby'

// import headerStyles from './header.module.css'

export default () => (
  <div>

  <Navbar bg="light" expand="lg">
  <Navbar.Brand > <Link to="/"> Fynance</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/about-us">
         About Us
      </Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item >Advertising Services</NavDropdown.Item>
        <NavDropdown.Item >Career Oportunities</NavDropdown.Item>
        <NavDropdown.Item >Business Information</NavDropdown.Item>
        <NavDropdown.Item >Job Placements</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/financial-planning">
        Financial Planning
      </Nav.Link>
      <Nav.Link as={Link} to="/building-business-relationships">
         Building Business Relationships
      </Nav.Link>
      <Nav.Link as={Link} to="/human-resources-consulting">
      Human Resources Consulting
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>

)

/* export default () => (
    <div>
        <h1 className={headerStyles.example}> Fynance</h1>
    </div>
) */

/* export default (props) => (
    <div>
        <h1> {props.title} Fynance</h1>
    </div>
) 
 <Header title="provided title" />
*/