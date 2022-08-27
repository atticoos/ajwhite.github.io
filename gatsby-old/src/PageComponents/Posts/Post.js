import React from 'react';
import styled from '@emotion/styled'
import {graphql} from 'gatsby';
import Layout from 'Components/layout'
import PostHeader from './PostHeader'
import MarkdownHTML from './MarkdownHTML'

export default function Post (props) {
  const meta = props.data.markdownRemark.frontmatter;
  let {html} = props.data.markdownRemark
  html = html.replace(/src="\//g, 'src="https://atticuswhite.com/')
  console.log('meta', meta)
  return (
    <Layout>
      <PostHeader
        title={meta.title}
        tags={meta.tags}
        date={meta.date}
        project={meta.project}
      />
      <Container>
        <MarkdownHTML>
          {html}
        </MarkdownHTML>
      </Container>
    </Layout>
  )
}

const Container = styled.div({
  maxWidth: 980,
  margin: '42px auto'
})

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {permalink: {eq: $path }}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm:ss")
        permalink
        title
        tags
        project
        seo_title
        seo_description
        disqus_id
      }
    }
  }
`;
