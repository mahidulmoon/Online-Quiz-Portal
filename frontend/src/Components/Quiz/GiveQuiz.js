import React, { Component } from 'react';
import { Form,Container,Button,Col,Row } from 'react-bootstrap';


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
                        
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Check type="checkbox" label="Option2" />
                        
                        
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Check type="checkbox" label="Option3" />
                        
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Check type="checkbox" label="Option4" />
                        
                        
                        </Form.Group>
                    </Form.Row>

                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your Answer</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Insert Your file" />
                    </Form.Group>
                    

                <Row>
                    <Col>
                        <Button variant="primary">Submit</Button>
                    </Col>
                    
                </Row>   

                    
                </Form>
                </React.Fragment>
            </Container>
        );
    }
}

export default GiveQuiz;