import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {LOGIN_AUTH, LOGIN_AUTH_PENDING} from 'actions'
import Login from '../Login'
import Home from '../Home'

import { Switch, Route } from 'react-router-dom'

class Main extends Component {
	render () {
		// const {login, errors} = this.props
		// const props = {login, errors}
		// return <LoginComponent {...props} />
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>j
					<Route exact path='/login' component={Login}/>j
				</Switch>
			</main>
		)
	}
}

function mapStateToProps (state) {
	const {errors} = state.me.auth
	return {
		errors
	}
}

function mapDispatchToProps (dispatch) {
	return {
		login: async data => {
			dispatch({type: LOGIN_AUTH_PENDING})
			const result = await LOGIN_AUTH(data)
			return dispatch(result)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
