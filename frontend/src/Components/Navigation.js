import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
class Navigation extends Component{
    render(){
        return(
            <div >
                <Navbar bg="light"  variant="light" fixed="top">
                    <Navbar.Brand href="/">Online Quiz</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Registration</Nav.Link>
                    <Nav.Link href="/quiz">Quiz</Nav.Link>
                    </Nav>
                   
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
                
        );
    }
}

export default Navigation;