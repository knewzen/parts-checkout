import React, {Component} from 'react'
import Login from '../Login'
import Home from '../Home'
import Signup from '../Signup'

import { Switch, Route } from 'react-router-dom'

class Main extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
            </Switch>

        )
    }
}

export default Main
