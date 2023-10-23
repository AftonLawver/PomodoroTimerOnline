const mysql = require('mysql2');

require('dotenv').config({path: 'Z:/PomodoroTimerOnline/.env'});
console.log(process.env.MYSQL_HOST);

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
    } else {
        console.log('Query results:', results);
    }
    connection.end(); // Close the database connection when done.
});