import { getRandomJoke } from '../../lib/joke'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className='my-3 shadow'>
        <Card.Body>
          <Card.Title>Here's your random joke</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href='/'>
            <Button variant='dark'>Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const joke = await getRandomJoke()
  // let joke = await getRandomJoke()
  // joke = false

  if (!joke)
    return {
      notFound: true // allow the page to return a 404 status and page
    }

  // or redirect user to other route
  // return {
  //   redirect: {
  //     destination: '/posts',
  //     permanent: false
  //   }
  // }

  return {
    props: {
      joke
    }
  }
}

export default Random
