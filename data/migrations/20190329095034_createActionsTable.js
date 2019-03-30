
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments('action_id');

    table.string('action_desc', 255).notNullable().unique();

    table.integer('project_id')
      .unsigned()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      
    table.string('notes', 255);

    table.string('completed').defaultTo('false')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
