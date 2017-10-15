import {isLoggedIn, getLocalToken} from 'api'
import {
	LOGIN_AUTH_PENDING,
	LOGIN_AUTH_FAIL,
	LOGIN_AUTH_SUCCESS,
	SIGNUP_AUTH_PENDING,
	LOGOUT_AUTH_SUCCESS,
	APPLICATION_INIT
} from 'actions'

export const initialState = {
	isLoggedIn: isLoggedIn(),
	token: getLocalToken(),
	errors: {}
}

export function auth (state = initialState, action) {
	switch (action.type) {
	case APPLICATION_INIT:
		return {...initialState, ...state}
	case LOGOUT_AUTH_SUCCESS: {
		return {
			isLoggedIn: false,
			token: null,
			errors: {}
		}
	}
	case LOGIN_AUTH_FAIL: {
		return {
			isLoggedIn: false,
			token: null,
			errors: action.errors
		}
	}
	case LOGIN_AUTH_SUCCESS: {
		const {token} = action.result
		return {
			...state,
			isLoggedIn: true,
			token
		}
	}

	case LOGIN_AUTH_PENDING:
	case SIGNUP_AUTH_PENDING:
	default:
		return state
	}
}
