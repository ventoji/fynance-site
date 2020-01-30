import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import SEO from '../components/SEO'
import {Link} from 'gatsby'

export default () => (
  <PrimaryLayout>
    <SEO title="404: Not found"  />
    <div className="container" style={{
        marginTop: '80px',
        padding: '40px',
        border: 'solid 2px black',
        marginBottom: '20px'
    }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p> Try going <span> <Link to="/"> home </Link>  </span></p>
     

    </div>
  </PrimaryLayout>
);