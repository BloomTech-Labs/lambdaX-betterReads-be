
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      //primary key columns
      tbl.increments()
  
      //username column
      tbl
      .string('email', 128)
      .notNullable()
      .unique()
 
  
      //password columns
      tbl
      .string('password', 128)
      .notNullable()
    })
  };
  exports.down = function(knex, Promise) {
    return knex.schema.destroyTableIfExists('users');
  };
  