const db = require('../data/db');

module.exports = {
    add,
    find,
    findById,
    update,
    remove,
    // findExperiences
};

function find() {
    console.log('hit')
    return db('experiences')
}

function findById(id) {
    return db('experiences').where({ id }).first();
}

function add(experience) {
    console.log(experience)
    return db('experiences')
      .insert(experience)
      .then(ids => {
        const [id] = ids;
        console.log('ids', id)
        return findById(id);
      });
}




