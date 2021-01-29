import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import NavbarMenu from './NavbarMenu'

const Layout = ({ children }) => (
  <Container>
    <Head>
      <title>My Next Ultimate App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <header>
      <NavbarMenu />
    </header>

    <main>{children}</main>
  </Container>
)

export default Layout
