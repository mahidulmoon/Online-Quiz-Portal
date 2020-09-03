import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddQuiz from './AddQuiz';
import GiveQuiz from './GiveQuiz';
class Quiz extends Component {
    
    render() {
        
        return (
            <Container>
                

                <React.Fragment>
                    <AddQuiz />
                    <GiveQuiz />
                </React.Fragment>
            </Container>
        );
    }
}

export default Quiz;