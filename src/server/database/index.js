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

    authUser ({username}) {
        console.log(`Ath user ${username}`)
        console.log(JSON.stringify({username}))
        return knex('user').where({
            username
        }).select('id', 'hash').first()
    }

}
