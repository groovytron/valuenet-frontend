import React, {useContext} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {QuestionContext} from "../context/QuestionContext";

const Question = () => {

    const {poseQuestion} = useContext(QuestionContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formElements = event.target.elements
        poseQuestion(formElements.question.value, formElements.apiKey.value)
    }

    return (
        <Form id="question" onSubmit={handleSubmit}>
            <Form.Group controlId="formApiKey">
                <Form.Label>API Key</Form.Label>
                <Form.Control name="apiKey" type="text" placeholder="XN33" required />
                <Form.Text className="text-muted">
                    This key is necessary to avoid unnecessary traffic to the service. Please ask the creators of the app for an API Key.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formQuestion">
                <Form.Label>Question</Form.Label>
                <Form.Control name="question" type="text" placeholder="How many countries contribute in more than one project?" required />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Question
