import React, { Component } from 'react';
import { Form,Container,Button,Col,Row,Modal } from 'react-bootstrap';


class GiveQuiz extends Component {
    state = {
        show: true,
        modalform:{
            name:'',id:'',contact:''
        },
        time: '',
    }
    
    checkboxclick = (e,option,answer) =>{
        if(option === answer){
            //alert("success");
        }else{
            //alert('worng');
        }
    }
    handleClose = (event) =>{
        this.setState({ show: false });
    }
    modalinputchange = e =>{
        const cred = this.state.modalform;
        cred[ e.target.name ] = e.target.value;
        this.setState({ modalform: cred });
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
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Complainer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.modalinputchange} value={this.state.modalform.name} />
                        </Form.Group>
                        
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>ID:</Form.Label>
                            <Form.Control type="text" placeholder="id" name="id" onChange={this.modalinputchange} value={this.state.modalform.id} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Phone" name="contact" onChange={this.modalinputchange} value={this.state.modalform.contact} />
                        </Form.Group>
                        
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                <center>
                <div class="container">
                    <h1>Countdown to Quiz End:</h1>
                    <ul>
                        
                        <li><span id="minutes"></span>Minutes</li>
                        <li><span id="seconds"></span>Seconds</li>
                    </ul>
                </div>
                </center>
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
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                            
                        </React.Fragment>
                    }

                    {singlequestion.quiztype ==='fileupload' && 
                        <React.Fragment>
                            
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Insert Your file" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                            Submit
                            </Button>
                            <br/>
                            <br/>
                            <br/>
                        </React.Fragment>
                    }
                    </React.Fragment>    
                )}
                    

                <Row>
                    
                    <Col>
                        <Button variant="success" >Submit Answer</Button>
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