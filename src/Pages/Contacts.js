import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./contacts.css"

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '100%'}}>
        <h1 className='text-center'>Contact us</h1>
        <Form>
          <Form.Group className='mt-5'  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text> We'll not share yout email with anyone else</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter your appeal in the text field</Form.Label>
            <Form.Control as="textarea" rows="3" />            
          </Form.Group>
          <Form.Group controlId="formBasicPassword">           
            <Form.Check type="checkbox" label="Check me out" />            
          </Form.Group>          
          <Button variant="primery" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
