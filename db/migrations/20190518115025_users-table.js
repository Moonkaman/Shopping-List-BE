
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.string('username').notNullable().unique();
    t.string('password');
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
