const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'login_form',
	user : 'root',
	password : 'password'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;