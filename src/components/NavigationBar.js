import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; };
    right-padding:10px;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
  export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Company Name</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <i class="fas fa-database"> </i><Nav.Item><Nav.Link  href="/">Data Library</Nav.Link></Nav.Item> 
        <i class="fab fa-stack-overflow"></i> <Nav.Item><Nav.Link >Workflows</Nav.Link></Nav.Item>
        <i class="far fa-play-circle"></i>  <Nav.Item><Nav.Link >Scheduler</Nav.Link></Nav.Item>
        <i class="fas fa-bug"></i> <Nav.Item><Nav.Link >Error Manager</Nav.Link></Nav.Item>
        <i class="far fa-comment-dots"></i><Nav.Item><Nav.Link >Notifications</Nav.Link></Nav.Item>
        <i class="fas fa-chart-line"></i>  <Nav.Item><Nav.Link >Reports</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)