import React, {Component} from 'react'
import Login from '../Login'
import Home from '../Home'

import { Switch, Route } from 'react-router-dom'

class Main extends Component {
	render () {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/login' component={Login}/>
			</Switch>

		)
	}
}

export default Main
