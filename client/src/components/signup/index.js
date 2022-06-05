import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../signup/signup.css';

import { Card, CardBody, CardTitle } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';


const Signup = () => {

    return (
        <section className="holds-everything-form">
            <Card className="card-margin-top">
                <CardBody>
                    <CardTitle tag="h5" className="form-card-signup">
                        Signup
                    </CardTitle>
                    {/* This might not be needed */}
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="signupEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="signupEmail"
                                        name="email"
                                        placeholder="John@gmail.com"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="signupPassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="signupPassword"
                                        name="password"
                                        placeholder="Password123"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <button className="card-button">Signup</button>
                </CardBody>
            </Card>
        </section>
    )
}

export default Signup;