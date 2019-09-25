
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users.string('username', 255).notNullable();
      users.string('password', 255).notNullable();
      users.string('name', 100).notNullable();
      users.string('email', 255).notNullable();  
  })
  .createTable('experience', experience => {
    experience.increments();
    experience.string('event name', 255).notNullable();
    experience.string('location', 255).notNullable();
    experience.string('date/time', 100).notNullable();
    experience.integer('cost', 100).notNullable();
    experience.string('category', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('experience')
};
