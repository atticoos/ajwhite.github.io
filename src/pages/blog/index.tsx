import type { NextPage } from 'next';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import { getPosts } from '../../utils/getPosts';
import Link from 'next/link';

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const mdxComponents = {
  img: ResponsiveImage,
};

export const getStaticProps = async () => {
  const posts = getPosts();
  const postObjects = await Promise.all(
    posts.map((post) => require(`./${post}`))
  );
  const postMeta = postObjects.map((post) => post.meta);
  return {
    props: {
      posts: postMeta,
    },
  };
};

const BlogPage: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Atticus White - Blog</title>
        <meta
          name="description"
          content="Atticus White - Software Engineer at Robin Powered, Inc."
        />
      </Head>
      <h2>Blog</h2>
      <MDXProvider components={mdxComponents}>
        <ul>
          {props.posts?.map((post: any) => (
            <li key={post.permalink}>
              <Link href={post.permalink}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <main {...props} />
      </MDXProvider>
    </div>
  );
};

export default BlogPage;
