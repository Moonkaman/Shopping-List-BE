
exports.up = function(knex, Promise) {
  return knex.schema.createTable('house', t => {
    t.increments()
    t.string('house_name', 128);
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('house');
};
