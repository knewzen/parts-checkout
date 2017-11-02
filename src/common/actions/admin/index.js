import {
    adminAPI,
    setLocalToken,
    resultOK
} from 'api'

export const ADMIN_FETCH_PENDING = 'ADMIN_FETCH_PENDING'
export const ADMIN_FETCH_SUCCESS = 'ADMIN_FETCH_SUCCESS'
export const ADMIN_FETCH_FAIL = 'ADMIN_FETCH_FAIL'

export const ADMIN_FETCH = async data => {
    const result = await adminAPI(data)
    if (!resultOK(result)) {
        return {type: ADMIN_FETCH_FAIL, errors: result.data}
    }
    setLocalToken(result.data.token)
    return {type: ADMIN_FETCH_SUCCESS, result: result.data}
}
