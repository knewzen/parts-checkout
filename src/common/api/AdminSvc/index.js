import {post} from 'api/utils'

export async function AdminAPI (data) {
    return post('/admin', data)
}
