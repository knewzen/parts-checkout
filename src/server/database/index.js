const knex = require('knex')(require('../../../knexfile'))

module.exports = {
    createUser ({username, hash}) {
        console.log(`Add user ${username} with hash ${hash}`)
        console.log(JSON.stringify({username, hash}))
        return knex('user').insert({
            username,
            hash
        })
    },

    authUser ({username, password}) {
        console.log(`Add user ${username} with password ${password}`)
        console.log(JSON.stringify({username, password}))
        return knex('user').insert({
            username,
            password
        })
    }
}
