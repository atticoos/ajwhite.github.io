export default function BlogPost (props) {
  console.log(props)
  return (
    <h1>Hello, { props.post }</h1>
  )
}

export async function getStaticProps({ params }) {
  console.log('gsp', params)
  return {
    props: {
      post: params.post
    }
  };
}

export async function getStaticPaths() {
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


  return {
    paths: [{
      params: {
        post: '1'
      }
    }],
    fallback: 'blocking'
  }
}
