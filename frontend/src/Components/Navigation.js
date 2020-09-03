import React,{Component} from 'react';
import { Navbar,Form,Nav,Button,FormControl } from 'react-bootstrap';
class Navigation extends Component{
    render(){
        return(
            <div >
                <Navbar bg="light"  variant="light" fixed="top">
                    <Navbar.Brand href="/">Online Quiz</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Registration</Nav.Link>
                    </Nav>
                   
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Toggle />
                    &nbsp;
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
                
        );
    }
}

export default Navigation;