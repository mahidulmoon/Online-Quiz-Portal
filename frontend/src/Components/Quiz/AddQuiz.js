import React, { Component } from 'react';
import { Form,Container,Button,Col,Row } from 'react-bootstrap';
import axios from 'axios';
class AddQuiz extends Component {
    state = {
        addquiz:{
            quizcode: this.props.code , question: '',option1:'',option2:'',option3:'',option4:'',answer:'',quiztype:''
        }
    }
    inputChange = e =>{
        const cred = this.state.addquiz;
        cred[ e.target.name ] = e.target.value;
        this.setState({ addquiz:cred });
    }
    addButton = e =>{
        //console.log(this.state.addquiz);
        axios.post('http://127.0.0.1:8000/quiz/addquizquestion/',this.state.addquiz,{
            headers:{
                'Authorization': `Token ${localStorage.getItem('token')}`,
            }
        }).then(res => alert("Question added")).catch(err=> alert(err));

    }
    
    render() {
        
        return (
            <Container>
                <br/>
                <br/>
                <br/>
                <center><h2>ADD Quiz</h2></center>
                <br />

                <React.Fragment>
                <Form>
                <Form.Group controlId="formGridAddress1">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control placeholder="Question" name="question" value={this.state.addquiz.question} onChange={this.inputChange}  />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        
                        <Form.Control type="text" name="option1" value={this.state.addquiz.option1} onChange={this.inputChange} placeholder="Option1" />
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        
                        <Form.Control type="text" placeholder="Option2" name="option2" value={this.state.addquiz.option2} onChange={this.inputChange} />
                        
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        
                        <Form.Control type="text" placeholder="Option3" name="option3" value={this.state.addquiz.option3} onChange={this.inputChange} />
                        
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        
                        <Form.Control type="text" placeholder="Option4" name="option4" value={this.state.addquiz.option4} onChange={this.inputChange} />
                        
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Answer:</Form.Label>
                        <Form.Control placeholder="Answer" name="answer" value={this.state.addquiz.answer} onChange={this.inputChange}  />
                    </Form.Group>
                    <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            name="quiztype"
                            onChange={this.inputChange}
                            custom
                        >
                            <option value="0">Choose Complaint Type...</option>
                            <option value="mcq">MCQ</option>
                            <option value="writeontextbox">Write on TextBox</option>
                            <option value="fileupload">File Upload</option>
                            
                    </Form.Control>
                    <br/>

                    
                    

                <Row>
                    
                    <Col>
                        <Button variant="success" onClick={this.addButton}>Add</Button>
                    </Col>
                </Row>   

                    
                </Form>
                </React.Fragment>
            </Container>
        );
    }
}

export default AddQuiz;