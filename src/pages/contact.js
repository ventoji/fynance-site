import React from "react"
import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Contact = () => (
  <div>
  <Header height='30vh'/>
    <div style={{padding: "80px" }}>
      <div className="row">
        <div className="col-sm">
          <h1 className="entry-title"> Contact</h1>
        </div>
        <div className="col-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  <Footer />
  </div>
)

export default Contact
