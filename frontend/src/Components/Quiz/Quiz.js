import React, { Component } from 'react';
import { Container,Form,Button,Col,Row } from 'react-bootstrap';
import AddQuiz from './AddQuiz';
import GiveQuiz from './GiveQuiz';
import axios from 'axios';
class Quiz extends Component {
    state={
        createquiz:{
            quizcode:'',user:parseInt(localStorage.getItem('uid')),topic:'',time:''
        },
        showdiv: false,
        isadmin: false,
        getquestion:[
            { question:'what is the sum of 5 and 3',option1:'3',option2:'5',option3:'7',option4:'8',answer:'8',quiztype:'mcq' },
            { question:'what is the capital of Bangladesh',option1:'chittagong',option2:'dhaka',option3:'khulna',option4:'barishal',answer:'dhaka',quiztype:'mcq' },
            { question:'what is the capital of Bangladesh',option1:'',option2:'',option3:'',option4:'',answer:'',quiztype:'writeontextbox' },
            { question:'what is the capital of india',option1:'',option2:'',option3:'',option4:'',answer:'',quiztype:'fileupload' }
        ]
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            this.setState({isadmin:true});
        }
    }
    inputChangecreatequiz = e =>{
        const cred = this.state.createquiz;
        cred[e.target.name] = e.target.value;
        this.setState({createquiz:cred});
    }

    buttonclick=()=>{
        if(this.state.createquiz.quizcode === ''){
            alert('Please insert a code first');
        }else{
            this.setState({showdiv:!this.state.showdiv});
            
        }
    }
    generatebuttonclick=()=>{
        if(this.state.createquiz.quizcode === ''){
            alert('Please insert a code first');
        }else{
            
            axios.post('http://127.0.0.1:8000/quiz/quizinfo/',this.state.createquiz,{
                headers:{
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                }
            }).then(res => {alert("Quiz Room Created");this.setState({showdiv:!this.state.showdiv});}).catch(err => alert(err));
            
            //console.log(this.state.createquiz);
        }
    }
    
    render() {
        
        return (
            <Container>
                

                <React.Fragment>
                    <br />
                    <br />
                    <br />
                    <Form.Group controlId="formGridAddress1">
                        <center><Form.Label>Create Quiz Code</Form.Label></center>
                        <Form.Control placeholder="Code" value={this.state.createquiz.quizcode} name="quizcode" onChange={this.inputChangecreatequiz} />
                        <br/>
                        {this.state.isadmin && 
                            <Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            
                            <Form.Control type="text" placeholder="Quiz topic" name="topic" value={this.state.createquiz.topic} onChange={this.inputChangecreatequiz}  />
                            
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            
                            <Form.Control type="text" placeholder="time in minute" name="time" value={this.state.createquiz.time} onChange={this.inputChangecreatequiz} />
                            
                            </Form.Group>
                        </Row>
                        }
                        <br/>
                        {this.state.isadmin && <Button variant="primary" onClick={this.generatebuttonclick}>Generate</Button> }
                        {!this.state.isadmin && <Button variant="success" onClick={this.buttonclick}>Give Quiz</Button>}
                    </Form.Group>
                    {this.state.showdiv && this.state.isadmin && <AddQuiz code={this.state.createquiz.quizcode} />}
                    {this.state.showdiv && !this.state.isadmin && <GiveQuiz question={this.state.getquestion} />}
                </React.Fragment>
            </Container>
        );
    }
}

export default Quiz;