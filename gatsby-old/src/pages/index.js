import React from 'react'
import Home from '../PageComponents/Home';
import {graphql} from 'gatsby'

export default props => <Home {...props} />;

export const pageQuery = graphql`
  {
    smartMirrorPost: markdownRemark(frontmatter: {permalink: {eq: "/blog/react-native-smart-mirror-lab" }}) {
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm:ss")
        permalink
        title
      }
    }
  }
`;
