
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('name', 100).notNullable();
      users.string('email', 255);  
  })
  .createTable('experiences', experiences => {
    experiences.increments();
    experiences.text('event_name', 255).notNullable();
    experiences.text('location', 255).notNullable();
    experiences.text('date_time', 100).notNullable();
    experiences.integer('cost', 100)
    // experiences.integer('user_id')
    //   .unsigned()
    //   .references('id')
    //   .inTable('users')
    //   .onUpdate('CASCADE')
    //   .onDelete('CASCADE');
    experiences.text('category', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('experiences')
};
