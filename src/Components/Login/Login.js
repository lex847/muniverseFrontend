import React from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Label for="username" size="lg">Username or Email address</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input id="username" name="username" placeholder="Username" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 2, offset: 1 }}>
                                            <Label for="password" size="lg"> Password </Label>
                                        </Col>
                                        <Col sm={{ size: 4, offset: 4 }}>
                                            <Button color="link" size="sm">Forgot your password?</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Input type="password" id="password" name="password" placeholder="Password" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={{ size: 10, offset: 1 }}>
                                            <Button size="lg" block color="primary">Login</Button>
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
                                            <Label for="username">New to Muniverse?</Label>
                                            <Button size="sm" color="link">Signup</Button>
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

export default Login;