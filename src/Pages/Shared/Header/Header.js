import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo.jpg';
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';

const Header = () => {
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
                <CustomLink className="ms-5 nav-link-item" to="home">Home</CustomLink>
            </Nav>

            <Nav>
              <CustomLink className="me-5 nav-link-item" to="blogs">Blogs</CustomLink>
              <CustomLink className="me-5 nav-link-item" to="news">News</CustomLink>
              <CustomLink className="me-5 nav-link-item" to="about">About</CustomLink>
              <CustomLink className="me-5 nav-link-item" to="contact">Contact</CustomLink>
              <CustomLink className="me-5 nav-link-item" to="login">Sign In</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
