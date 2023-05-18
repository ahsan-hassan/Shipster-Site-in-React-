import React, { Component } from 'react';
import {Form, Button, NavLink } from 'react-bootstrap';

export class Login_form extends Component {
    render() {
        return (
            <div className="Login">
                <Form className="Loginform">
                    <h4>Log In</h4>

                    <Form.Group controlId="formBasicMobileNo">
                        <Form.Label>Mobile Number or Email</Form.Label>
                        <Form.Control type="MobileNo" placeholder="Enter MobileNo or Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <NavLink style={{color:'white'}} to="/pages/Signup">Not a member yet? Sign Up</NavLink>
                    </Form.Group>

                    <Button className="formsubmit" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login_form
