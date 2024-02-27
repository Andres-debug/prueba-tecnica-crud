-- to create a new database
CREATE DATABASE customersdb;

-- to use database
use customersdb;

-- creating a new table
CREATE TABLE productos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,  2)
);

CREATE TABLE grupos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT
);

CREATE TABLE grupo_producto (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  grupo_id INT(6) UNSIGNED,
  producto_id INT(6) UNSIGNED,
  FOREIGN KEY (grupo_id) REFERENCES grupos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  birthdate DATE,
  email VARCHAR(100),
  gender ENUM('Male', 'Female', 'Other'),
  additional_info TEXT
);



-- to show all tables
show tables;

-- to describe table
describe customer;