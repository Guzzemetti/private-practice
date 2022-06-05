import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login.css';

import { Card, CardBody, CardTitle } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';


const Login = () => {

    return (
        <section className="holds-everything-form">
            <Card className="card-margin-top">
                <CardBody>
                    <CardTitle tag="h5" className="form-card-login">
                        Login
                    </CardTitle>
                    {/* This might not be needed */}
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="John@gmail.com"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Password123"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <button className="card-button">Login</button>
                </CardBody>
            </Card>
        </section>
    )
}

export default Login;