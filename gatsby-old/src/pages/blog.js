import React from 'react';
import {graphql, Link} from 'gatsby';

export default function Blog  (props) {
  const posts = props.data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
  console.log('posts', posts)
  return (
    <div>
      Blog

      <ul>
        {posts.map(post => (
          <li key={post.permalink}>
            <h3><Link to={post.permalink}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              permalink
              excerpt
            }
          }
        }
      }
    }
`;

