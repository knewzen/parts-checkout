require('dotenv').config()

// Docs: http://knexjs.org/
// Tutorial: https://hackernoon.com/setting-up-node-js-with-a-database-part-1-3f2461bdd77f

module.exports = {
	client: 'mysql',
	connection: {
		user: 'root',
		password: process.env.DATABASE_PASSWORD,
		database: 'hardware_checkout'
	}
}
