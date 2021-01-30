import { getPostById, getPostIds } from '../../lib/post'

const Post = ({ post }) => {
  return <div>{post.title}</div>
}

export const getStaticPaths = async () => {
  const paths = await getPostIds()
  console.log(paths)
  return {
    paths,
    fallback: false // any paths not returned by getStaticPaths will result in a 404 page
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id)
  return {
    props: {
      post
    }
  }
}

export default Post
