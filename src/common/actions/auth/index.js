import {
	loginAPI,
	signupAPI,
	setLocalToken,
	resetLocalToken,
	resultOK
} from 'api'
import util from 'util'

export const LOGIN_AUTH_PENDING = 'LOGIN_AUTH_PENDING'
export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS'
export const LOGIN_AUTH_FAIL = 'LOGIN_AUTH_FAIL'

export const SIGNUP_AUTH_PENDING = 'SIGNUP_AUTH_PENDING'

export const LOGOUT_AUTH_SUCCESS = 'LOGOUT_AUTH_SUCCESS'

export const LOGIN_AUTH = async data => {
	console.log(data)
	console.log('Loggin in ' + JSON.stringify(data))
	const result = await loginAPI(data)
	if (!resultOK(result)) {
		return {type: LOGIN_AUTH_FAIL, errors: result.data}
	}
	setLocalToken(result.data.token)
	return {type: LOGIN_AUTH_SUCCESS, result: result.data}
}

export const SIGNUP_AUTH = async data => {
	console.log('WHAAAAAT')
	console.log(data.username)
	console.log(data.password)
	console.log(data.password2)
	console.log('Signing up' + util.inspect(data, {showHidden: false, depth: null}))
	const result = await signupAPI(data)
	console.log(JSON.stringify(result))
	if (!resultOK(result)) {
		return {type: LOGIN_AUTH_FAIL, errors: result.data}
	}
	setLocalToken(result.data.token)
	return {type: LOGIN_AUTH_SUCCESS, result: result.data}
}

export const LOGOUT_AUTH = () => {
	resetLocalToken()
	return {type: LOGOUT_AUTH_SUCCESS}
}
