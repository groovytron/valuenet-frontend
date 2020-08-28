import React, {useContext, useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import {QuestionContext} from "../context/QuestionContext";
import SpeechToTextButton from "./SpeechToTextButton";
import Jumbotron from "react-bootstrap/Jumbotron";


const Question = () => {

    // we have an internal state for the question, independent if it gets written manually or dictated by speech-to-text
    // this is the value we then submit to the API
    const [questionManualOrSpeechToText, setQuestionManualOrSpeechToText] = useState('')

    const {poseQuestion} = useContext(QuestionContext)

    const handleTranscriptChanged = (newTranscriptValue) => {
        setQuestionManualOrSpeechToText(newTranscriptValue)
        console.log(`Question changed by speech-to-text: ${newTranscriptValue}`);
    }

    const handleQuestionChanged = (event) => {
        setQuestionManualOrSpeechToText(event.target.value);
        console.log(`Question changed manually: ${event.target.value}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formElements = event.target.elements
        poseQuestion(questionManualOrSpeechToText, formElements.apiKey.value)
    }

    return (
        <Jumbotron>
            <h1>Talk to your database</h1>
            <Form id="question" onSubmit={handleSubmit}>
                <Form.Group controlId="formApiKey">
                    <Form.Control name="apiKey"
                                  size="sm"
                                  type="text"
                                  placeholder="API Key"
                                  required/>
                    <Form.Text className="text-muted">
                        This key is necessary to avoid unnecessary traffic to the service. Please ask the creators of
                        the app for an API Key.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formQuestion">
                    <InputGroup>
                        {/*// with the onChange-handler and the value-binding we basically create a two-way-binding on the*/}
                        {/*// questionManualOrSpeechToText variable*/}
                        <Form.Control name="question"
                                      size="lg"
                                      type="text"
                                      placeholder="Enter your question here or use the text-to-speech button to the right."
                                      onChange={handleQuestionChanged}
                                      value={questionManualOrSpeechToText} required/>
                        <InputGroup.Append>
                            <SpeechToTextButton onTranscriptChanged={handleTranscriptChanged}/>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                {/*TODO: create an auto-submit when speech-to-text ends*/}
                {/*<Form.Group id="formSubmit">*/}
                {/*    <Form.Check type="checkbox" label="Auto-submit when speech-to-text ends"/>*/}
                {/*</Form.Group>*/}
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Jumbotron>
    );
}

export default Question
