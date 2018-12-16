import React from 'react';
import {graphql} from 'gatsby';

export default function Post (props) {
  console.log('das props', props)
  return (
    <div>
      Hello World

      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {permalink: {eq: $path }}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm:ss")
        permalink
        title
      }
    }
  }
`;
