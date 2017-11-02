
exports.up = function (knex, Promise) {
    return knex.schema.createTable('parts', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.integer('quantity').notNullable()
    })
}
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('parts')
}
