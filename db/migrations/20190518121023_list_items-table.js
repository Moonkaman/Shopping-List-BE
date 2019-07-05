
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

    t.integer('quantity').defaultTo(1);

    t.boolean('gotten').defaultTo(false);

    t.decimal('price').defaultTo(0.00);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_items');
};

