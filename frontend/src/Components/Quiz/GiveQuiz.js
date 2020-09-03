import React, { Component } from 'react';
import { Form,Container,Button,Col,Row } from 'react-bootstrap';

import axios from 'axios';
class GiveQuiz extends Component {
    
    render() {
        
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <center><h2>Quiz</h2></center>
                <br />

                <React.Fragment>
                <Form>
                <Form.Group controlId="formGridAddress1">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control placeholder="Question" disabled />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Check type="checkbox" label="Option1" />
                        <Form.Control type="email" placeholder="Option1" />
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Check type="checkbox" label="Option2" />
                        <Form.Control type="email" placeholder="Option2" />
                        
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Check type="checkbox" label="Option3" />
                        <Form.Control type="email" placeholder="Option3" />
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Check type="checkbox" label="Option4" />
                        <Form.Control type="email" placeholder="Option4" />
                        
                        </Form.Group>
                    </Form.Row>

                    
                    

                <Row>
                    <Col>
                        <Button variant="primary">Submit</Button>
                    </Col>
                    <Col>
                        <Button variant="success">Add</Button>
                    </Col>
                </Row>   

                    
                </Form>
                </React.Fragment>
            </Container>
        );
    }
}

export default GiveQuiz;