import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <p>{postData.id}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // We will add the post data fetching here next
  return {
    props: {
      postData: {
        id: params.id,
        title: 'Blog Post',
        date: '2020-01-01',
      },
    },
  };
}