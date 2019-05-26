
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_lists', t => {
    t.increments();
    t.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');

    t.integer('list_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('lists')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_lists');
};
