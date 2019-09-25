const db = require('../data/db');

module.exports = {
  find,
  findById,
  findBy,
  add,
  remove,
  findExperiences
};

function find() {
  return db('users');
}

function remove(id) {
  return db('users').where({ id }).del();
}


function findBy(filter) {
  return db('users').where(filter);
}

// async function add(user) {
//   const [id] = await db('users').insert(user);
// console.log(user)
//   return findById(id);
// }

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      const [id] = ids;
      console.log('ids', id)
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

// find experiences by user id
function findExperiences(user_id) {
  return db('experiences')
    .join('users', 'users.id', 'experiences.user_id')
    .select('experiences.id', 'experiences.name', 'users.username')
    .where({ user_id });
}