import React from 'react'
import {Form, Wrapper} from "../components"
function Signin() {
    return (
        <Wrapper>
            <Form.Wrapper>
                <Form.Text>Sign up to NoteCloud</Form.Text>
                <Form.Wrapper>
                    <Form.Button>Sign up with Google</Form.Button>
                </Form.Wrapper>
            </Form.Wrapper>
        </Wrapper>
    )
}

export default Signin
