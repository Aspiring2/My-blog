import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./Untitled.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Articles from "../Pages/Articles";
// import Resume from "../Pages/Resume";
import Projects from "../Pages/Projects";
import Contacts from "../Pages/Contacts"

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img style={{marginRight: '10px'}}
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
                
              />
              Daniil Rusanov
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/articles">Articles</Nav.Link>
                {/* <Nav.Link href="/resume">Resume</Nav.Link> */}
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
            {/* <Route path="/resume" component={Resume} /> */}
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </>
    );
  }
}
