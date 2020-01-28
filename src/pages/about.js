import React from "react"
// import {navigate} from "gatsby"
import { Image } from "react-bootstrap"
import PrimaryLayout from '../layouts/PrimaryLayout'

const About = () => (
    <PrimaryLayout>
    <div className="container">
      <Image className="img-pages" src="images/about-us.png" fluid />

      <div style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-sm">
            <h1> About Us</h1>
          </div>
          <div className="col-sm">
            <h2>Financial Concierge Services</h2>
            <p>
              <strong>Our mission&nbsp;</strong>is to be your point person on
              any financial matter you may face – a&nbsp;
              <strong>fiduciary</strong>&nbsp;, as someone who, in a very
              intimate way, understands your wants, needs and concerns, and will
              truly look for what is in your best interest.
            </p>
            <h2>Financial &amp; Business Coaching</h2>
            <p>
              We assist and guide you in the development and implementation of
              your life and business plans.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PrimaryLayout>
)

export default About
