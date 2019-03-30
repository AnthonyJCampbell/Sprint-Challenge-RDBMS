
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_id: 1,
          action_desc: 'Write chapter 1', 
          project_id: 1, 
          notes: 'Better write a long one!'},
        {action_id: 2, 
          action_desc: 'Do that thing', 
          project_id: 1, 
          notes: 'Do it well'},
        {action_id: 3, 
          action_desc: 'Somethin ', 
          project_id: 2, 
          notes: ''},
        {action_id: 4, 
          action_desc: 'Maybe start doing a dance?', 
          project_id: 4, 
          notes: ''},
        {action_id: 5, 
          action_desc: 'sadsadasdsda', 
          project_id: 2, 
          notes: 'I really dont know what to put here'},
        {action_id: 6, 
          action_desc: 'asdasdssadsa', 
          project_id: 3, 
          notes: 'Nor in this one'},
      ]);
    });
};
