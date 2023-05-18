import React, { Component } from 'react';
import {Form, FormControl, FormGroup, FormLabel , Button } from 'react-bootstrap';

export class Login_form extends Component {
    render() {
        return (
            <div className="Login">
                <Form className="Loginform">
                    <h4>Sign Up</h4>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMobileNo">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="formsubmit" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login_form
