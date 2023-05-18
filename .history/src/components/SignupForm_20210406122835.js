import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';

export class SignupForm extends Component {
    render() {
        return (
            <div className="Login">
                <Form className="Sigupform">
                    <h4>Sign Up</h4>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="FirstName" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="LastName" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Mobile Number or Email</Form.Label>
                        <Form.Control type="MobileNo" placeholder="Enter MobileNo or Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="formsubmit" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SignupForm
