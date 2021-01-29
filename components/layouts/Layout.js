import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Layout = ({ children }) => (
  <Container>
    <Head>
      <title>My Next Ultimate App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <header>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Henry Web Dev</Navbar.Brand>
        <Nav>
          <Nav.Link>Posts</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
      </Navbar>
    </header>

    <main>{children}</main>
  </Container>
)

export default Layout
