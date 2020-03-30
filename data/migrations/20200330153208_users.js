
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
  
      //primary key column
      tbl.increments()
  
      //username column
      tbl
      .string('username', 128)
      .notNullable()
      .unique()
 
  
      //password column
      tbl
      .string('password', 128)
      .notNullable()
    })
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.destroyTableIfExists('users');
  };
  