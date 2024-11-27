const { query } =  require('./index')

const custumerModelDatabase = async () => {
 await query(
  `CREATE TABLE IF NOT EXISTS custumer(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   e_mail VARCHAR(255) NOT NULL
  );`
 )

 console.log('Create "custumer" sucessfully')
 process.exit(1)
}

custumerModelDatabase()