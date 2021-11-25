DROP DATABASE IF EXISTS expense_tracker_db;

CREATE DATABASE expense_tracker_db;

CREATE TABLE user_info (
    user_first_name VARCHAR(45) NOT NULL;
    user_last_name VARCHAR(45) NOT NULL;
    user_create_date DATE NOT NULL;
    user_email VARCHAR(45) NOT NULL;
    user_password VARCHAR(45) NOT NULL;
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL;
)

CREATE TABLE expense_transaction (
    tx_date DATETIME NOT NULL;
    tx_type ENUM('expense', 'income', '') DEFAULT '';
    tx_description VARCHAR(255) NOT NULL;
    tx_amount DECIMAL(5,2) DEFAULT '0.00';
    tx_from_user FOREIGN KEY (user_id) references user_info(user_id) ON DELETE SET NULL;
)