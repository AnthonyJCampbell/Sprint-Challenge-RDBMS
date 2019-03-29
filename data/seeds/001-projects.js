
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1,
          project_name: 'write a book', 
          project_desc: 'A very boring one'},
        {project_id: 2,
          project_name: 'make a course', 
          project_desc: 'A very boring one'},
        {project_id: 3,
          project_name: 'buy a yacht', 
          project_desc: 'Im on a boat!'},
        {project_id: 4,
          project_name: 'become king', 
          project_desc: 'Look at me!'},
        {project_id: 5,
          project_name: 'do the schmoney dance', 
          project_desc: 'awwww yeah'},
        {project_id: 6,
          project_name: 'get ripped', 
          project_desc: 'gainz'}
      ]);
    });
};
