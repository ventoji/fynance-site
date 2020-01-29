import React from 'react';
import {graphql} from 'gatsby'

//const MainContent = ({data}) => {
export default ({data}) => {
    console.log(data);
    return (
    <div>
  
      </div>
    );
}

// export default MainContent;

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {title: {eq:"Fynance" }}}) {
      nodes {
           frontmatter{
          title
          date
          keywords
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }`