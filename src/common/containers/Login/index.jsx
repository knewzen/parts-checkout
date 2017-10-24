import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {LOGIN_AUTH, LOGIN_AUTH_PENDING, AUTH_CLEAR_ERRORS} from 'actions'
import LoginComponent from './components'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    render () {
        const {login, errors, isLoggedIn} = this.props
        const props = {login, errors}

        return (
            isLoggedIn ? (
                <Redirect to='/' />
            ) : (
                <LoginComponent {...props} />
            ))
    }

    componentWillUnmount () {
        const {clearErrors} = this.props
        clearErrors()
    }
}

function mapStateToProps (state) {
    const { errors, isLoggedIn } = state.me.auth

    return {
        errors,
        isLoggedIn
    }
}

function mapDispatchToProps (dispatch) {
    return {
        login: async data => {
            dispatch({type: LOGIN_AUTH_PENDING})
            const result = await LOGIN_AUTH(data)
            return dispatch(result)
        },
        clearErrors: async () => {
            dispatch({type: AUTH_CLEAR_ERRORS})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
