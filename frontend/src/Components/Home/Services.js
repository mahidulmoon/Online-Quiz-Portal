import React,{Component} from 'react';
import { Row,Col,Container,Card,Button } from 'react-bootstrap';
class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Container>
                <center><h2>Our Services</h2></center>
            <Row>
                <Col  xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="limitedtime.webp" />
                        <Card.Body>
                            <Card.Title>Time Limited MCQ</Card.Title>
                            <Card.Text>
                            In this portion the rules are to answer according to the question within the limited time(20sec).
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col  xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="form.png" />
                        <Card.Body>
                            <Card.Title>Write On Given Form</Card.Title>
                            <Card.Text>
                            In this process User have to answer according to the question into the given Form Fields.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col  xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="handwrite.jfif" />
                        <Card.Body>
                            <Card.Title>Upload Exercise Image</Card.Title>
                            <Card.Text>
                            So if teacher wants to see your and handwriten answer sheets than you can upload through this process.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Home;