import React from 'react'
import Login from '../pages/login';
import Home from '../pages/Home';
import Signup from '../pages/singUp';
import ProductDetails from '../pages/ProductDetails';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Signup' component={Signup}/>
                    <Route exact path='/ProductDetails' component={ProductDetails}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
