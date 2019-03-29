
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments('project_id');

    table.string('project_name', 255).notNullable();

    table.string('project_desc', 255).notNullable();

    table.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
