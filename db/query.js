//const cTable = require('console.table'); 
const mysql = require('mysql2'); // per instructions

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'moon5stars',
    database: 'employee_db',
}); 

console.clear();
console.log('Connected to the employee database.');
//can this be done elsewhere? 

module.exports = connect;