import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';

export class Login_form extends Component {
    render() {
        return (
            <div className="Login">
                <Form className="Loginform">
                    <h4>Sign Up</h4>

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
                        <Link style={{color:'white'}} to='/pages/Signup'>
                        <p>Not a member yet? Sign up</p>
                        </Link>
                    </Form.Group>

                    <Button className="formsubmit" type="submit">
                        Log In
                    </Button>
                </Form>
                <Route path="/pages/Signup">
                            <Signup/>
                </Route>
            </div>
            </Router>
        )
    }
}

export default Login_form
