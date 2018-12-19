import React from 'react';
import "./Login.css";
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Login(props) {
    return (
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default Login;