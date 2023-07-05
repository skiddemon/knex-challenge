require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const connectionString = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'postgresql',
    connection: connectionString,
  },

  staging: {
    client: 'postgresql',
    connection: {
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
    connection: {
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
