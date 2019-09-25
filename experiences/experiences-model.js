const db = require('../data/db');

module.exports = {
    add,
    find,
    findby,
    findbyid,
};

function find() {
    return db('experiences').select('category');
}

function findby(filter) {
    return db('experiences').where(filter);
}

function add(experiences) {
    return db('experiences')
      .insert(user)
      .then(ids => {
        const [id] = ids;
        console.log('ids', id)
        return findById(id);
      });
}

function findById(id) {
    return db('experiences')
    .where({id})
    .first()
}