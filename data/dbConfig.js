
//importing knex from depenencies
const knex = require('knex')

//importing knex file
const config = require('../knexfile.js')

//setting envrionemnt to the development object if not declared by global connected environment
const environment = process.env.DB_ENV || 'development';

module.exports = knex(config[environment]);
