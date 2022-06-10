import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './createModal.css'
import { Button, Modal, ModalBody, ModalFooter, InputGroup } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form, InputGroupText } from 'reactstrap';


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
          <h3 id="modal-header">Create a Lesson</h3>
          <ModalBody className="modal-body">
            {/* The below form is the form that is held within the modal */}
          <div>
            <Form>
              <Row>
                <div className="inputRow">
                  {/* Title name input */}
                  <Col md={12}>
                    <FormGroup >
                      <Label className="labels" for="lessonTitle">
                        Lesson Title
                      </Label>
                      <Input
                        id="lessonTitle"
                        name="lessonName"
                        placeholder="Lesson name"
                        type="title"
                      />
                    </FormGroup>
                  </Col>
                  {/* Description input */}
                  <Col md={12}>
                    <FormGroup>
                      <Label className="labels" for="lessonDescription">
                        Description
                      </Label>
                      <Input
                        id="lessonDescription"
                        name="lessonDesc"
                        placeholder="Enter a brief description for this lesson"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                  {/* Drop-down to select the Category */}
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label className="labels" for="categoryDrop">
                          Category
                        </Label>
                        <Input
                          id="categoryDrop"
                          name="catDrop"
                          placeholder="Select a Category"
                          type="select">
                          <option>RPGs</option>
                          <option>MOBAs</option>
                          <option>MMOs</option>
                          <option>FPS</option>
                          <option>Cooking</option>
                          <option>DIY Projects</option>
                          <option>Gardening</option>
                          <option>Maintenance</option>
                          <option>Fitness</option>
                          <option>Fashion</option>
                          <option>Self-Care</option>
                          <option>Life Coaching</option>
                          <option>Computer Learning</option>
                          <option>Programming</option>
                          <option>IT</option>
                          <option>Streaming</option>
                          <option>Misc</option>
                          <option>Other(Gaming)</option>
                          <option>Other(Home)</option>
                          <option>Other(Lifestyle)</option>
                          <option>Other(Tech)</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    {/* Dropdown to select Sub Category */}
                    <Col md={6}>
                      <FormGroup>
                        <Label className="labels" for="subcatDrop">
                          Sub-Category
                        </Label>
                        <Input
                          id="subcatDrop"
                          name="subDrop"
                          placeholder="Select a Sub-Category"
                          type="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* Price Input */}
                  <Col md={12}>
                    <FormGroup>
                      <Label className="labels" for="priceInput">
                        Pricing
                      </Label>
                      <InputGroup id="priceInput">
                        <Input placeholder="Enter price" type="number" />
                        <InputGroupText>
                          .00
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  {/* <button className="card-button" type="submit">Create Lesson!</button> */}
                </div>
              </Row>
            </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button className="buttonColor" onClick={this.toggle}>Create Lesson!</Button>{' '}
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
