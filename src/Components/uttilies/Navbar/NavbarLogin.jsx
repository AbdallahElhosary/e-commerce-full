import "./NavbarLogin.scss";
import logo from "../../../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarSearchHook from "../../../hook/search/navbar-search-hook";
const NavbarLogin = () => {
  const [onChangeWord, searchedWord] = NavbarSearchHook();
  let word = ""
  if (sessionStorage.getItem("searchedWord") !== null) {
    word = sessionStorage.getItem("searchedWord");
  }

  

  return (
    <div className="dark">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo Navbae" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="d-flex">
                <Form.Control
                  value={word}
                  onChange={onChangeWord}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Nav className="me-auto">
                <Nav.Link href="/login">
                  <FaUser />
                  <span>Log In</span>
                </Nav.Link>
                <Nav.Link href="/cart">
                  <AiOutlineShoppingCart />
                  <span>Cart</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavbarLogin