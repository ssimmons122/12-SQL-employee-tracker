DROP DATABASE IF EXISTS employee_db; 

CREATE DATABASE employee_db; 
USE employee_db;

CREATE TABLE department (
    id INT NOT NULL auto_increment primary,
    department VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE position (
    id INT NOT NULL auto_increment primary,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department
);

CREATE TABLE employee (
    id INT NOT NULL auto_increment primary,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT NOT NULL,
    role_id INT NOT NULL,
    manager_id INT, 
    is_manager BOOLEAN,
    PRIMARY KEY (id),
    --FOREIGN KEY (department_id) REFERENCES department -- merr look here << 
);