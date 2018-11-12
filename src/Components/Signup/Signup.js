import React from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import "./Signup.css";

function Signup() {
    return (
        <div className="Signup">
            <row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Label for="username" size="lg">Username</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input id="username" name="username" placeholder="Pick a username" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Label for="email" size="lg">Email</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input id="email" name="email" placeholder="Email address" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 2, offset: 1 }}>
                                            <Label for="password" size="lg"> Password </Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input type="password" id="password" name="password" placeholder="Choose a password" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Label for="password" size="lg">Verify Password</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input type="password" id="confirm_password" name="confirm_password" placeholder="Re-type password" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Button size="lg" block color="primary">Signup</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <row>
                                <Col sm={{ size: 6, offset: 3 }}>
                                    <row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Label for="username">Already a member?</Label>
                                            <Button size="sm" color="link">Login</Button>
                                        </Col>
                                    </row>
                                </Col>
                            </row>
                        </CardFooter>
                    </Card>
                </Col>
            </row>
        </div>
    )
}

export default Signup;