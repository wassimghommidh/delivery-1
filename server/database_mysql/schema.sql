DROP DATABASE IF EXISTS delivery;

CREATE DATABASE delivery;

USE delivery;
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255),
  lastName varchar(255),
  email varchar(255),
  password varchar(255),
  phoneNumber int ,
  points int ,
  profilePicture varchar(255),

  
  PRIMARY KEY (ID)
);
CREATE TABLE restaurant (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),     
  password varchar(64),
  picture  varchar(255),
  description varchar(255),
    menu varchar(255),
  
  PRIMARY KEY (ID)
);
/* excute schema  */
/* mysql -u root -p <server/database_mysql/schema.sql */

