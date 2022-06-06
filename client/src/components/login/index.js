import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login.css';

import { Card, CardBody, CardTitle } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';


const Loginpage = () => {

    return (
        <section className="holds-everything-form">
            <Card className="card-margin-top">
                <CardBody className="cardBody">
                    <div className="bodyItems">
                    <div className="loginLogo">
                    <CardTitle tag="h5" className="form-card-login">
                        Login
                    </CardTitle>
                    <div className="imageBox">
                        <p>LogoHere</p>
                    </div>
                    </div>
                    {/* This might not be needed */}
                    <div className="formBody">
                    <Form>
                        <Row>
                        <div className="inputRow">
                            <Col md={12}>
                                <FormGroup >
                                    <Label className="labels" for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email Address"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label className="labels" for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                            </div>
                        </Row>
                    </Form>
                    <button className="card-button">Login</button>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </section>
    )
}

export default Loginpage;