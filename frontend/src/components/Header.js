import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
  return<header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'>Sign In</i></Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
  </header>
}

export default Header