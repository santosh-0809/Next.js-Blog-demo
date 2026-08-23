import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />

      <div
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml,
        }}
      />
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
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}