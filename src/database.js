require('dotenv').config();

//mysql db
const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : process.env.DB_HOST,
	user     : process.env.DB_USER,
	password : process.env.DB_PASSWORD,
	database : process.env.DB_NAME
});

connection.connect((err) => {
	if (err) {
		console.log('db connection failed');
		console.log(err);
	}
});

module.exports = connection;
