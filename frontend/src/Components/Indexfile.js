import React,{Component} from 'react';
import Navigation from './Navigation';
import Footer from './FooterFile';
import BodyPage from './BodyPage';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Quiz from './Quiz/Quiz';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
class IndexFile extends Component{
    render(){
        return(
            <React.Fragment>
                <Navigation />
                
                    <Router>
                        <BodyPage>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/login' exact component={Login} />
                                <Route path='/register' exact component={Registration} />
                                <Route path='/quiz' exact component={Quiz} />
                            </Switch>
                        </BodyPage>
                    </Router>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default IndexFile;