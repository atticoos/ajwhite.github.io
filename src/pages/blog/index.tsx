import type { NextPage } from 'next'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

const ResponsiveImage = (props) => <Image alt={props.alt} layout="responsive" {...props} />;

const mdxComponents = {
  img: ResponsiveImage
};

const BlogPage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Atticus White - Blog</title>
        <meta name="description" content="Atticus White - Software Engineer at Robin Powered, Inc." />
      </Head>
      <h2>Blog</h2>
      <MDXProvider components={mdxComponents}>
        <main {...props} />
      </MDXProvider>
    </div>
  )
}

export default BlogPage;
