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
              <div className="imageBox">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam corrupti iste, earum nulla ut! Dignissimos accusamus dolorum omnis, aperiam distinctio maiores commodi officia. Rerum quaerat deleniti culpa eius dolor.</p>
              </div>
            </div>
            {/* This might not be needed */}
            <div className="formBody">
              <CardTitle tag="h3" id="login">
                Login
              </CardTitle>
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