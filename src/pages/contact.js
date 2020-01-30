import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import ContactForm from "../components/ContactForm"
// import ContactForm2 from "../components/ContactForm2"
import ImageTest from "../components/ImageTest"

const Contact = () => (
  <PrimaryLayout>
  <ImageTest />
    <div style={{ marginTop: "80px", padding: "40px" }}>
      <div className="row">
        <div className="col-sm">
          <h1> Contact</h1>
        </div>
        <div className="col-sm">
          <ContactForm />
        </div>
      </div>
    </div>

  </PrimaryLayout>
)

export default Contact
