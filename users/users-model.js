const db = require('../data/dbConfig.js') //imports dbConfig file rather than having to import all the knex imports
// const Posts = require('../posts/posts-model.js') //importing Posts
module.exports = {
    find,
    findBy,
    findById,
    findUsers, 
    add,
    remove,
    findAll
}

function findUsers(department) { //returns users table and selects id, username, and password columns to return
    return db('users').where({department: department}).select('id', 'email', 'password')
}

function find() { //returns users table and selects id, username, and password columns to return
    return db('users').select('id', 'email', 'password')
}

function findAll() { //returns users table and selects id, username, and password columns to return
    return db('users').select('id', 'email', 'password')
}

function findBy(filter) { //returns users where the username = username
    return db('users').where(filter)
}

function findById(id) {
    let users = db('users');

 if (id) {
   users.where('users.id', id).first();

   const promises = [users, Posts.connect(id)]; // [ users, posts ] returning users then posts in an array

   return Promise.all(promises).then(function(results) { //return all data
      let [user, posts] = results; //let results == array of data

     if (user) { //if user data is found
      user.posts = posts; //set posts key in users = to posts table

       return user; //pass user data to userToBody Function to convert bool
     } else {
       return null;
     }
   });
 }

}

async function add(storeUser) {
    await db('users').insert(storeUser); //inserts user and sets it == to id
  
    return findBy({email: storeUser.email}); //returns the user that was created 
  }

  function remove(id) {
     db('users').where({id: id}).del()
   
}