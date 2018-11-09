import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

function Login() {
    return (
        <Form>
            <FormGroup>
                <Row>
                    <Col xs={{size: 5, offset: 4}} sm={{size: 3, offset: 4}}>
                        <Label for="username">Username</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{size:5, offset: 4}} sm={{size: 3, offset: 4}}>
                        <Input id="username" name="username" placeholder="Username"/>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col xs={{size: 5, offset: 4}} sm={{size: 3, offset: 4}}>
                        <Label for="password"> Password </Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{size: 5, offset: 4}} sm={{size: 3, offset: 4}}>
                        <Input type="password" id ="password" name="password" placeholder="Password"/>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col xs={{size: 5, offset: 4}} sm={{size: 3, offset: 4}}>
                        <Button>Submit</Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    )
}

export default Login;