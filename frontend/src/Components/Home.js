import React,{Component} from 'react';
import Carouseldiv from './Home/Carousel';
import Services from './Home/Services';
import Contact from './Home/Contact';
class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Carouseldiv />
                <br/>
                <Services />
                <br/>
                <br/>
                <Contact />
            </React.Fragment>
        );
    }
}

export default Home;