
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_items', t => {
    t.increments();
    t.integer('list_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('lists')
    .onDelete('CASCADE');

    t.integer('item_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('items')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_items');
};

