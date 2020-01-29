import React from "react"
// import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

//  <Button> my componet </Button>
/*  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`*/

const ImageParallax = ({image, text=''}) => {


const DivImage = styled.div`
  background: url( ${image} );
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
`

  //console.log(image)
 // const urlImage = `${image}`
 // console.log(urlImage)

  return (
    <DivImage> <Link to="/" > <span className="brand-text"> {text}  </span> </Link> </DivImage> 
)

}

export default ImageParallax

/* <div css={css`
  width: 10rem;
  height: 10rem;
  background: url( ... );
`} />

<div style={sectionStyle}>
  
  </div>
*/
