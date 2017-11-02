
exports.up = function (knex, Promise) {
    return knex.schema.table('user', function (t) {
        t.boolean('is_admin').notNullable().defaultTo(false)
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.table('user', function (t) {
        t.dropColumn('is_admin')
    })
}
