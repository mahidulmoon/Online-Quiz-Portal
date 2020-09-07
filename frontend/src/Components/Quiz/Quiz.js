import React, { Component } from 'react';
import { Container,Form,Button } from 'react-bootstrap';
import AddQuiz from './AddQuiz';
import GiveQuiz from './GiveQuiz';
class Quiz extends Component {
    state={
        quizcode:'',
        showdiv: false,
        isadmin: true,
    }
    buttonclick=()=>{
        if(this.state.quizcode === ''){
            alert('Please insert a code first');
        }else{
            this.setState({showdiv:!this.state.showdiv});
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
                        <Form.Control placeholder="Code" value={this.state.quizcode} onChange={(e)=>this.setState({quizcode:e.target.value})} />
                        <br/>
                        <Button variant="primary" onClick={this.buttonclick}>Generate</Button> &nbsp;
                        <Button variant="success" onClick={this.buttonclick}>Give Quiz</Button>
                    </Form.Group>
                    {this.state.showdiv && this.state.isadmin && <AddQuiz code={this.state.quizcode} />}
                    {this.state.showdiv && !this.state.isadmin && <GiveQuiz />}
                </React.Fragment>
            </Container>
        );
    }
}

export default Quiz;