
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', t => {
    t.increments();
    t.string('list_name', 256);
    t.boolean('completed');
    t.decimal('total_price');
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lists');
};
