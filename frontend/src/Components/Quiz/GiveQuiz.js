import React, { Component } from 'react';
import { Form,Container,Button,Col,Row } from 'react-bootstrap';


class GiveQuiz extends Component {
    
    checkboxclick = (e,option,answer) =>{
        if(option === answer){
            //alert("success");
        }else{
            //alert('worng');
        }
    }
    
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
                {this.props.question.map(singlequestion =>
                    
                    <React.Fragment>
                        <Form.Group controlId="formGridAddress1">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control placeholder={singlequestion.question} disabled />
                    </Form.Group>
                    {singlequestion.quiztype === 'mcq' && 
                        <React.Fragment>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Check type="checkbox" onClick={ e => this.checkboxclick(e,singlequestion.option1,singlequestion.answer)} label={singlequestion.option1} />
                                
                                
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Check type="checkbox" onClick={ e => this.checkboxclick(e,singlequestion.option2,singlequestion.answer)} label={singlequestion.option2} />
                                
                                
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Check type="checkbox" onClick={ e => this.checkboxclick(e,singlequestion.option3,singlequestion.answer)} label={singlequestion.option3} />
                                
                                
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Check type="checkbox" label={singlequestion.option4} onClick={ e => this.checkboxclick(e,singlequestion.option4,singlequestion.answer)} />
                                
                                
                                </Form.Group>
                            </Form.Row>
                        </React.Fragment>
                    }

                    
                    {singlequestion.quiztype ==='writeontextbox' && 
                        <React.Fragment>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write your Answer</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            
                        </React.Fragment>
                    }

                    {singlequestion.quiztype ==='fileupload' && 
                        <React.Fragment>
                            
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Insert Your file" />
                            </Form.Group>
                        </React.Fragment>
                    }
                    </React.Fragment>    
                )}
                    

                <Row>
                    <Col>
                        <Button variant="primary">Submit</Button>
                    </Col>
                    
                </Row>   

                    
                </Form>
                <br/>
                </React.Fragment>
            </Container>
        );
    }
}

export default GiveQuiz;