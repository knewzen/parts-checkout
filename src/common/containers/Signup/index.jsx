import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {SIGNUP_AUTH, SIGNUP_AUTH_PENDING, AUTH_CLEAR_ERRORS} from 'actions'
import SignupComponent from './components'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        isLoggedIn: PropTypes.bool.isRequired,
        signup: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    render () {
        const {signup, errors, isLoggedIn} = this.props
        const props = {signup, errors}

        return (
            isLoggedIn ? (
                <Redirect to='/' />
            ) : (
                <SignupComponent {...props} />
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
        signup: async data => {
            dispatch({type: SIGNUP_AUTH_PENDING})
            const result = await SIGNUP_AUTH(data)
            return dispatch(result)
        },
        clearErrors: async () => {
            dispatch({type: AUTH_CLEAR_ERRORS})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
