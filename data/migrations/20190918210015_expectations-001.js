
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
      users.text('first name', 100).notNullable().unique();
      users.text('last name', 100).notNullable().unique();
      users.string('email', 255).notNullable().unique();  
  })
  .createTable('experience', experience => {
    experience.increments();
    experience.string('event name', 255).notNullable();
    experience.string('location', 255).notNullable().unique();
    experience.string('date/time', 100).notNullable().unique();
    experience.string('attendees', 100).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('experience')
};
