
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', t => {
    t.increments();
    t.string('list_name', 256);
    t.boolean('completed').defaultTo(false);
    t.decimal('total_price').defaultTo(0);
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lists');
};
