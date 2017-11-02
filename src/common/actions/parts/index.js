import {getPostsAPI, resultOK} from 'api'

// Define action types
export const GET_PARTS_SUCCESS = 'GET_PARTS_SUCCESS'
export const GET_PARTS_FAIL = 'GET_PARTS_FAIL'
export const GET_PARTS_PENDING = 'GET_PARTS_PENDING'

export const GET_PARTS = async () => {
    const result = await getPostsAPI()
    if (!resultOK(result)) {
        return {type: GET_PARTS_FAIL, errors: result.data}
    }
    return {type: GET_PARTS_SUCCESS, result: result.data}
}
