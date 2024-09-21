const { Pool } = require('pg')

const pool = new Pool({
 connectionString: "postgres://postgres:volcon2014@localhost:5432/node_postgress",
})

async function query (queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

module.exports = {query}