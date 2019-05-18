
exports.up = function(knex, Promise) {
  return knex.schema.createTable('house_lists', t => {
    t.increments();
    t.integer('house_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('house')
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
  return knex.schema.dropTableIfExists('house_lists');
};
