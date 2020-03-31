// Update with your config settings.
const dbConnection = process.env.DATABASE_URL

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { //declaring where we want data file appear when created
      filename: './data/usersData.db3'
    },
    useNullAsDefault: true,
    migrations: { //declaring where we want migrations folder to appear when created
      directory: './data/migrations',
    },
    seeds: { //declaring where we want seeds folder when created 
      directory: './data/seeds',
    }

  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: dbConnection,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }

};
