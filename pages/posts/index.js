import Layout from '../../components/layouts/Layout'
import Card from 'react-bootstrap/Card'
import { getPosts } from '../../lib/post'

const Posts = ({ posts }) => (
  <Layout>
    {posts.map(post => (
      <Card key={post.id} className='my-3 shadow'>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </Layout>
)

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default Posts
