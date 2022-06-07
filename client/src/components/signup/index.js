import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../signup/signup.css';

import { Card, CardBody, CardTitle, Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';



const Signup = () => {

    return (
        <>
        <section className="holds-everything-form">
          <Card className="card-margin-top">
            <CardBody className="cardBody">
              <div className="bodyItems">
                <div className="loginLogo">
                  <div className="imageBox">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
                  </div>
                </div>
                {/* This might not be needed */}
                <div className="formBody">
                  <CardTitle tag="h3" id="login">
                    Sign Up
                  </CardTitle>
                  <Form>
                    <Row>
                      <div className="inputRow">
                          {/* Email Input */}
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
                        {/* Password Input */}
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
                        {/* First Name Input */}
                        <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label className="labels" for="firstName">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              type="firstName"
                            />
                          </FormGroup>
                        </Col>
                        {/* Last Name Input */}
                        <Col md={6}>
                          <FormGroup>
                            <Label className="labels" for="lastName">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              type="lastName"
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        {/* About Me Input */}
                        <Col md={12}>
                          <FormGroup>
                            <Label className="labels" for="aboutMe">
                              About Me
                            </Label>
                            <Input
                              id="aboutMe"
                              name="aboutMe"
                              placeholder="Type here..."
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </div>
                    </Row>
                  </Form>
                  <button className="card-button">Get Started</button>
                    <div className="loginLink"><p>Already have an account?</p>
                    <a href={'login'}>Click here!</a>
                    </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
        </>
      )
}

export default Signup;