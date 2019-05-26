
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', t => {
    t.increments();
    t.string('item');
    t.integer('quantity');
    t.boolean('gotten');
    t.decimal('price');
    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};
