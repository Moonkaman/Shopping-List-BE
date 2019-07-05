
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_houses', t => {
    t.increments();
    t.integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');

    t.integer('house_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('house')
    .onDelete('CASCADE');

    t.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_houses');
};
