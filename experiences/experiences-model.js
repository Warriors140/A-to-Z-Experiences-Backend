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

function update(changes, id) {
    return db('experiences')
        .where({ id })
        .update(changes)
        .then(count => findById(id))
}

async function remove(id) {
    const experience = await findById(id);
    const count = await db('experiences').where({ id }).del();
    return count ? experience : null;
}


