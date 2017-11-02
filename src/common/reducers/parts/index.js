import {
    LOCATION_CHANGE,
    GET_PARTS_SUCCESS,
    GET_PARTS_PENDING,
    GET_PARTS_FAIL
} from 'actions'
import {normalizeArrayOfItems} from 'api/utils'

export const initialState = {
    entities: [
        {name: 'arduino', quantity: 10},
        {name: 'arduino uno', quantity: 15},
        {name: 'empty', quantity: 0}
    ],
    fetchStatus: 'none',
    isLoading: false,
    isLoaded: false,
    count: 3

}

export function parts (state = initialState, action) {
    switch (action.type) {
    case LOCATION_CHANGE: {
        const {pathname} = action.payload
        if (pathname !== '/') {
            return initialState
        }
        return state
    }
    case GET_PARTS_PENDING: {
        return {
            ...state,
            errors: {},
            isLoaded: false,
            isLoading: true,
            fetchStatus: 'loading'
        }
    }
    case GET_PARTS_SUCCESS:
        const {result} = action
        // @Metnew:
        // result may be an object, if it was request with params
        // `normalizeArrayOfItems` normalize only arrays of items!
        const {count, entities} = normalizeArrayOfItems([result])
        return {
            isLoaded: true,
            isLoading: false,
            fetchStatus: 'loaded',
            errors: {},
            count,
            entities
        }
    case GET_PARTS_FAIL:
        return {
            ...state,
            isLoaded: true,
            isLoading: false,
            fetchStatus: 'loaded',
            errors: action.errors
        }
    default:
        return state
    }
}
