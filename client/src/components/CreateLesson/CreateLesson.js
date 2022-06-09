import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './createModal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
        <div>
        <Button className="buttonColor" onClick={this.toggle}>{this.props.buttonLabel}Create Lesson</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
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
                              placeholder="******"
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
                                name="firstname"
                                placeholder="First Name"
                                type="textarea"
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
                            />
                          </FormGroup>
                        </Col>
                        <button className="card-button" type="submit">Get Started</button>
                      </div>
                    </Row>
                    
                  </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


// Do props need to be passed in?
const CreateLesson = () => {
    return (
      <>
          <ModalExample />  
      </>
    )
  }
  
  export default CreateLesson;
