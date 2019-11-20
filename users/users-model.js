// const db = require('../database/db.Config');

// module.exports = {
//     register,
//     find,
//     findBy,
//     addUsers,
//     findByUser,
//     findLoggedIn
// }

// async function register(user) {
//     const [id] = await db('users').insert(user);

//     return findById(id);
// }


// function find() {
//     return db('users').select('id', 'username', 'password');
// }

// function findBy(id) {
//     return db('users')
//         .where({ id })
// }

// function addUsers(user) {
//     return db('users')
//         .insert(user)
//         .then(ids => {
//             const id = ids[0];
//             return findBy(id);
//         })
// }

// function findByUser(user) {
//     return db('users')
//         .where(user)
// }

// function findLoggedIn(id) {
//     return db('users')
//         .where({ id })
//         .first()
// }

const db = require('../database/db.Config');

module.exports = {
    find,
    findBy,
    addUsers,
    findByUser,
    findLoggedIn
}

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(id) {
    return db('users')
        .where({ id })
}

function addUsers(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            const id = ids[0];
            return findBy(id);
        })
}

function findByUser(user) {
    return db('users')
        .where(user)
}

function findLoggedIn(id) {
    return db('users')
        .where({ id })
        .first()
}