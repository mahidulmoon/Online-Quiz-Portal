import React,{Component} from 'react';

class BodyPage extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default BodyPage;