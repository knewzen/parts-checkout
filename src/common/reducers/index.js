import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import {layout} from './layout'
import {posts} from './posts'
import {users} from './users'
import {auth} from './auth'
import {parts} from './parts'

// Root reducer
export default combineReducers({
    layout,
    me: combineReducers({auth}),
    entities: combineReducers({
        posts,
        users,
        parts
    }),
    routing: routerReducer
})
