DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    Name VARCHAR(30),
    Department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);