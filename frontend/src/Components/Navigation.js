import React,{Component} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import axios from 'axios';
class Navigation extends Component{
    state = {
        loginuser:{
            username:''
        },
        islogin:false
    }
    componentDidMount(){
        if(localStorage.getItem('uid')){
            axios.get(`http://127.0.0.1:8000/user/userinfo/${parseInt(localStorage.getItem('uid'))}/`,{
                headers:{
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                }
            }).then(res=> this.setState({loginuser:{username:res.data.username},islogin:true}));
        }
    }
    logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        window.location.reload(false);
       
    }
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
                        Signed in as: <a href="#login">{this.state.loginuser.username}</a>
                        </Navbar.Text>
                        {this.state.islogin && <Nav.Link onClick={e =>this.logout(e)}>LogOut</Nav.Link>} 
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
                
        );
    }
}

export default Navigation;