import React from 'react';
import {Link} from 'gatsby'
 import logo from "../../static/images/fynance_logo_r.png" 

const ImageTest = ({top='480px', left='80px'}) => {

return  <div className="site-branding"> <div className="wrap" style={{ top: top,
    left: left}}>
<Link to="/" >  <img src={`${logo}`} alt="logo" />  </Link>
    </div>
    </div>

};

export default ImageTest;

/*
<Link to="/" >   </Link>
  return  <div style={{
        background: "url(" +` ${logo}`+")"
    }}>
    
    </div>
*/