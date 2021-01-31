import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NavbarMenu = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand>Henry Web Dev</Navbar.Brand>
    <Nav>
      <Link href='/posts' passHref>
        {/* Because the children is a wrapper for HTML a tag */}
        <Nav.Link>Posts</Nav.Link>
      </Link>
      <Link href='/jokes/random' passHref>
        <Nav.Link>Joke</Nav.Link>
      </Link>
      <Link href='/about' passHref>
        <Nav.Link>About</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
)

export default NavbarMenu
