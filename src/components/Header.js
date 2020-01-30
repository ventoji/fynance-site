import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'gatsby'
 // import ImageTest from './ImageTest'
 //   <ImageTest />
 import ImageParallax from './ImageParallax'
// 
 import logo from "../../static/images/header.jpg" 


// import headerStyles from './header.module.css'
// <Navbar.Brand > <Link to="/"> Fynance</Link></Navbar.Brand>

export default ({height}) => (
  <header>
  <ImageParallax image={logo} text={'Fynance'} height={height}/>
  <Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center">
      <Nav.Link as={Link} to="/about-us">
         About Us
      </Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link to="/advertising-services"> Advertising Services</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/career-oportunities">Career Oportunities</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/business-information">Business Information </Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/job-placement">Job Placements</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item ><Link to="/charitable-services">Charitable services</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/personnel-recruitment">Job Placement</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/ecommerce-serices">E-commerce services</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/profesional-networking">Profesional networking oportunities</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/crowdfunding-and-investments">Crowdfunding and investments</Link></NavDropdown.Item>
     
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
  </header>

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