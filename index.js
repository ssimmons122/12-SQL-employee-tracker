const cTable = require('console.table'); //per instructions
const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./db/query.js');

// CLI questions
const questions = [{
    type: 'list',
    name: 'options',
    message: 'Please select from the following:',
    choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add A Department',
        'Add A Role',
        'Add An Employee',
        'Update',
        'Exit'
    ]
}];

// Init funct 
function initList () {
    inquirer.prompt(questions)
    .then(answer => {
        console.log(answer)

        switch(answer.options){
            case 'View All Departments':
                viewAllDepts();
                break;

            case 'View All Roles':
                viewAllRoles();
                break;

            case 'View All Employees':
                viewAllEmployees();
                break;

            case 'Add New Employee':
                addEmp();
                break;

            case 'Add New Role':
                addRole();
                break;

            case 'Add New Department':
                addDept();
                break;

            case 'Update':
                update();
                break;

            case 'Remove Employee':
                deleteEmp();
                break;

            case 'Exit':
                query.end();
                break;
        }
    })
};

const queryEmpls = 'SELECT * FROM employee;';
const queryPosition = 'SELECT * FROM position;';
const queryDepts = 'SELECT * FROM department;';