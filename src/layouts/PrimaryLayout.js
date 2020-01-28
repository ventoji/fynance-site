import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrimaryLayout = props => (
  <div>
    <Header />
    <div className="container">
        {props.children}
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
