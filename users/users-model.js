const db = require('../data/db');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password');
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