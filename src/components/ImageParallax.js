import React from "react"
// import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import ImageTest from "./ImageTest"

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

const ImageParallax = ({image, text='', height='80vh'}) => {


const DivImage = styled.div`
  background: url( ${image} );
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${height};
`

  //console.log(image)
 // const urlImage = `${image}`
 // console.log(urlImage)
 const top = height === '30vh' ? '130px' : '480px';

  return (
     <DivImage> <Link to="/" > {text && <ImageTest top={top} />}  </Link> </DivImage>
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
