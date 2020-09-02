import React from "react";

import { Container, Row, Form, Button, Col } from "react-bootstrap";

const Registration = props => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group as={Row} controlId="formGroupFirstName">
                            <Form.Label column="lg" lg={4}>
                                First Name
                            </Form.Label>
                            <Col lg={8}>
                                <Form.Control type="text" size="lg" placeholder="Type your first name" />
                                <Form.Text className="text-muted">
                                    ***This will be a validation***
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Button variant="outline-primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Registration;