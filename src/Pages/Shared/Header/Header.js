import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../../images/logo.jpg';
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="home">
                <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
                <CustomLink className="ms-2 me-1 nav-link-item" to="home">Home</CustomLink>
                <CustomLink className="nav-link-item" to="allproducts">All Products</CustomLink>
            </Nav>

            <Nav>
                {
                  user && <>
                    <NavDropdown className="dropdown-title" title="Inventories" id="collasible-nav-dropdown">
                      <Link className="ps-2 dropdown_item" to="manageitems">Manage</Link>
                      <Link className="ps-2 dropdown_item" to="additems">Add Items</Link>
                      <Link className="ps-2 dropdown_item" to="myitems">My Items</Link>
                    </NavDropdown>
                  </>
                }
            </Nav>

            <Nav>
              <CustomLink className="me-1 nav-link-item" to="services">Services</CustomLink>
              <CustomLink className="me-1 nav-link-item" to="blogs">Blogs</CustomLink>
              <CustomLink className="me-1 nav-link-item" to="about">About</CustomLink>
              <CustomLink className="me-1 nav-link-item" to="team">Team</CustomLink>
              <CustomLink className="me-1 nav-link-item" to="contact">Contact</CustomLink>

              {
                  user ?
                  <button className="btn text-white sign-out-btn" onClick={handleSignOut}> Sign Out</button> :
                  <CustomLink className="me-1 nav-link-item" to="login">Sign In</CustomLink>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
