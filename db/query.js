const cTable = require('console.table');
const mysql = require('mysql2'); // per instructions

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'moon5stars',
    database: 'employee_db',
}); 

console.clear();
console.log('What information are we looking for today?');
//can this be done elsewhere? 