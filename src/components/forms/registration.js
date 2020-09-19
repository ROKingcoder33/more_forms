import React from "react";

import { Container, Row, Form, Button, Col } from "react-bootstrap";

const Registration = props => {
    return (
        <>
            <Container>
                <Row className="justify-content-center pt-5">
                    <Form>
                        <Form.Group as={Row} controlId="formGroupFirstName">
                            <Form.Label column="lg" lg={4}>
                                First Name
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your first name" />
                                <Form.Text className="text-muted">
                                    First Name must be at least 2 characters 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupLastName">
                            <Form.Label column="lg" lg={4}>
                                Last Name
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your last name" />
                                <Form.Text className="text-muted">
                                    Last Name must be at least 2 characters 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail">
                            <Form.Label column="lg" lg={4}>
                                Email
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your Email" />
                                <Form.Text className="text-muted">
                                    Email must be at least 5 characters 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupPassword">
                            <Form.Label column="lg" lg={4}>
                                Password
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your Password" />
                                <Form.Text className="text-muted">
                                    Password must be at least 8 characters 
                                </Form.Text>
                                <Form.Text className="text-muted">
                                    Passwords must match 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupConfirmPassword">
                            <Form.Label column="lg" lg={4}>
                                Confirm Password
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Registration;