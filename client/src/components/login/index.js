import React, { useState } from "react";
import { Card, CardBody, CardTitle, Label, Input, Row, Col, FormGroup, Form  } from 'reactstrap';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login.css';
import logo from '../../assets/PrivatePractice.png';

const Loginpage = (props) => {
  // state for login
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section className="holds-everything-form">
      <Card className="card-margin-top">
        <CardBody className="cardBody">
          <div className="bodyItems">
            <div className="loginLogo">
              <div className="imageBox">
                <img src={logo} alt="logo"></img>
                <p>Welcome back.</p>
              </div>
            </div>
            {/* This might not be needed */}
            {data ? (
              <p>
                Success!
              </p>
            ) : (
              <div className="formBody">
                <CardTitle tag="h3" id="login">
                  Login
                </CardTitle>
                <Form onSubmit={handleFormSubmit}>
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </div>
                  </Row>
                  <button className="card-button" type="submit">Login</button>
                </Form>
                <div className="loginLink"><p>Don't have an account?
                  <a href={'signup'} className="loginButton">Click here!</a></p>
                </div>
              </div>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </section>
  )
}

export default Loginpage;