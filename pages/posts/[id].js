import Layout from '../../components/layouts/Layout'
import { getPostById, getPostIds } from '../../lib/post'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()

  // If the page is not yet generated, isFallback is always `true`
  // and this Loading... will be displayed
  // initially until getStaticProps() finishes running (for the first time)
  // When finished, Next adds this page to list of prerendered page (kinda cache) for any subsequent requests
  if (router.isFallback) {
    return (
      <Spinner animation='border' role='status' variant='dark'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    )
  }

  // Render post
  return (
    <Layout>
      <Card className='my-3 shadow'>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href='/posts'>
            <Button variant='dark'>Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostIds(5)
  // console.log(paths)
  return {
    paths,
    // fallback: false // any paths not returned by getStaticPaths will result in a 404 page
    fallback: true // show spinner first and wait for getStaticProps to finish
    // in web, you may have to refresh the posts/<not-prerendered-id> to see the spinner
  }
}

// argument here is context { params: ...}
export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id)
  return {
    props: {
      post
    },
    revalidate: 1
  }
}

export default Post
