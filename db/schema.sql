DROP DATABASE IF EXISTS pizzas_db;

CREATE DATABASE pizzas_db;

USE pizzas_db;

CREATE TABLE pizza (
    id INTEGER(3) AUTO_INCREMENT NOT NULL,
    pizza_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);