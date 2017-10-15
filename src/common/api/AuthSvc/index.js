import {post} from 'api/utils'

export async function loginAPI (data) {
	return post('/auth', data)
}

export async function signupAPI (data) {
	return post('/signup', data)
}
