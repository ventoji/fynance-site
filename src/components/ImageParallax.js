import React from "react"
import { css } from '@emotion/core'

const ImageParallax = ({image}) => {

  //console.log(image)
  const urlImage = `${image}`
  console.log(urlImage)

  return <div css={css`
  background: url( ${image} );
  background-attachment: "fixed";
  background-position: "center";
  background-repeat: "no-repeat";
  background-size: "cover"
`} />

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
