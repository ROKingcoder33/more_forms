import React, { useState } from "react";

import { Container, Row, Form, Col } from "react-bootstrap";

const Registration = props => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fNameError, setFirstNameError] = useState("");
    const [lNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const fNameInput = (e) => {
        setFName(e.target.value);
        if(e.target.name === "fName") {
            if(e.target.value.length < 2) { 
                setFirstNameError("First Name must be at least 2 characters")
            } else {
                setFirstNameError('');
            }
        } 
    }
    const lNameInput = (e) => {
        setLName(e.target.value);
        if(e.target.name === "lName") {
            if(e.target.value.length < 2) {
                setLastNameError("Last Name must be at least 2 characters")
            } else {
                setLastNameError('');
            }
        }
    }
    const emailInput = (e) => {
        setEmail(e.target.value)
        if(e.target.name === "email") {
            if(e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters")
            } else {
                setEmailError('');
            }
        }
    }
    const passwordInput = (e) => {
        setPassword(e.target.value);
        if(e.target.name === "password") {
            if(e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters")
            } else {
                setPasswordError('');
            }
        }
    }
    const confirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        } else {
            setConfirmPasswordError('');
        }

    }


    return (
        <>
            <Container>
                <Row className="justify-content-center pt-5">
                    <Form>
                        <Form.Group as={Row} controlId="formGroupFirstName">
                            <Form.Label column="lg" lg={4} htmlFor="fName">
                                First Name
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your first name" name="fName" onChange={ fNameInput } />
                                <Form.Text className="text-muted">
                                    { fNameError }
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupLastName">
                            <Form.Label column="lg" lg={4} htmlFor="lName">
                                Last Name
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your last name" name="lName" onChange={lNameInput} />
                                <Form.Text className="text-muted">
                                    { lNameError } 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail">
                            <Form.Label column="lg" lg={4} htmlFor="email">
                                Email
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your Email" name="email" onChange={ emailInput } />
                                <Form.Text className="text-muted">
                                    { emailError } 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupPassword">
                            <Form.Label column="lg" lg={4} htmlFor="password">
                                Password
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="password" size="lg" placeholder="Type your Password" name="password" onChange={ passwordInput } />
                                <Form.Text className="text-muted">
                                    { passwordError }
                                </Form.Text>
                                <Form.Text className="text-muted">
                                    { confirmPasswordError } 
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupConfirmPassword">
                            <Form.Label column="lg" lg={4} htmlFor="confirmPassword">
                                Confirm Password
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="password" size="lg" placeholder="Type your Password" name="confirmPassword" onChange={confirmPasswordInput} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Registration;