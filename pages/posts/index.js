import Layout from '../../components/layouts/Layout'
import Card from 'react-bootstrap/Card'

const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'My Post 1 body'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'My Post 2 body'
  }
]
const Posts = () => (
  <Layout>
    {posts.map(post => (
      <Card key={post.id}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </Layout>
)

export default Posts
