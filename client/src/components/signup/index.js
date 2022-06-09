import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../signup/signup.css';

import { Card, CardBody, CardTitle, Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    aboutMe: ''
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      aboutMe: ''
    })

  };

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
              {data ? (
                <p>
                  success
                </p>
              ) : (
                <div className="formBody">
                  <CardTitle tag="h3" id="login">
                    Sign Up
                  </CardTitle>
                  <Form onSubmit={handleFormSubmit}>
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
                              // value={formState.email}
                              onChange={handleChange}
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
                              placeholder="******"
                              type="password"
                              // value={formState.password}
                              onChange={handleChange}
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
                                name="firstname"
                                placeholder="First Name"
                                type="textarea"
                                // value={formState.firstname}
                                onChange={handleChange}
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
                                name="lastname"
                                placeholder="Last Name"
                                type="textarea"
                                // value={formState.lastname}
                                onChange={handleChange}
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
                              placeholder="Type Here..."
                              type="textarea"
                              // value={formState.aboutMe}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <button className="card-button" type="submit">Get Started</button>
                      </div>
                    </Row>
                    
                  </Form>
                  <div className="loginLink"><p>Already have an account?</p>
                    <a href={'login'} className="loginButton">Click here!</a>
                  </div>
                </div>
              )}
              {error && (
                <div className="">
                  {error.message}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default Signup;