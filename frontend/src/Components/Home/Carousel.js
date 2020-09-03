import React,{Component} from 'react';
import { Image,Carousel } from 'react-bootstrap';
class Carouseldiv extends Component{
    render(){
        return(
            <React.Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="navigation.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>No partiality</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="navigation2.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Easy to access</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    </Carousel>
            </React.Fragment>
        );
    }
}

export default Carouseldiv;