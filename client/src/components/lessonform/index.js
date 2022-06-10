import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../lessonform/style.css'
// import { Card, CardBody, CardTitle } from 'reactstrap';
import { Label, Input, Row, Col, FormGroup, Form } from 'reactstrap';

import { useMutation } from '@apollo/client';
import { ADD_LESSON } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LessonForm = (props) => {

    const [formState, setFormState] = useState(
        {
            title: '',
            description: '',
            price: 50,
            subcategory: '',
            coach: `"${Auth.getProfile().data._id}"`
        }
    );
    const [lesson, { error, data }] = useMutation(ADD_LESSON);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(formState);
        
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await lesson({
                variables: { ...formState },
            });

            Auth.loggedIn(data.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            title: '',
            description: '',
            subcategory: ''
        });
    };

    return (
        <section className="holds-everything-form-lesson">
            <div>
                <h4> Create a lesson!</h4>
            </div>
            <div className="holds-lesson-form">
                <Form onSubmit={handleFormSubmit}>
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
                                        name="title"
                                        placeholder="Lesson name"
                                        type="title"
                                        onChange={handleChange}
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
                                        name="description"
                                        placeholder="Enter a brief description for this lesson"
                                        type="textarea"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            {/* Drop-down to select the Category */}
                            <Row>
                                {/* Dropdown to select Sub Category */}
                                <Col md={12}>
                                    <FormGroup>
                                        <Label className="labels" for="subcatDrop">
                                            Sub-Category
                                        </Label>
                                        <Input
                                            id="subcatDrop"
                                            name="subcategory"
                                            placeholder="Select a Sub-Category"
                                            type="select"
                                            onChange={handleChange}>
                                            <option></option>
                                            <option onChange={handleChange} >RPG</option>
                                            <option onChange={handleChange} >FPS</option>
                                            {/*  */}
                                            <option onChange={handleChange} value="62a0e8bfd8d0493694d0b72a">Other Gaming Category</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* Price Input */}
                            {/* <Col md={12}>
                                <FormGroup>
                                    <Label className="labels" for="priceInput">
                                        Pricing
                                    </Label>
                                    <InputGroup id="priceInput">
                                        <Input placeholder="Enter price" name="price" type="number" onChange={handleChange} />
                                        <InputGroupText>
                                            .00
                                        </InputGroupText>
                                    </InputGroup>
                                </FormGroup>
                            </Col> */}
                            <button className="card-button" type="submit">Create Lesson!</button>
                        </div>
                    </Row>
                </Form>
            </div>
        </section>
    )
}

export default LessonForm;