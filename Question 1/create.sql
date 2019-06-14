CREATE DATABASE library;

USE library;

CREATE TABLE IF NOT EXISTS book(
    book_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL DEFAULT '',
    publisher_name VARCHAR(100) NOT NULL DEFAULT '',
    FOREIGN KEY(publisher_name) REFERENCES publisher(name)
);

CREATE TABLE IF NOT EXISTS book_authors(
    book_id INT UNSIGNED,
    author_name VARCHAR(100) NOT NULL DEFAULT '',
    FOREIGN KEY(book_id) REFERENCES book(book_id)
);

CREATE TABLE IF NOT EXISTS publisher(
    name VARCHAR(100) NOT NULL PRIMARY KEY,
    address VARCHAR(100) DEFAULT '',
    phone INT(15)  DEFAULT 0000000000

);

CREATE TABLE IF NOT EXISTS book_copies(
    book_id INT UNSIGNED NOT NULL,
    branch_id INT UNSIGNED NOT NULL,
    no_of_copies INT UNSIGNED NOT NULL DEFAULT 0,
    FOREIGN KEY(book_id) REFERENCES book(book_id),
    FOREIGN KEY(branch_id) REFERENCES library_branch(branch_id)
);

CREATE TABLE IF NOT EXISTS book_loans(
    book_id INT UNSIGNED NOT NULL,
    branch_id INT UNSIGNED NOT NULL,
    card_no INT UNSIGNED NOT NULL,
    date_out DATE NOT NULL DEFAULT '0000-00-00',
    due_date DATE NOT NULL DEFAULT '0000-00-00',
    FOREIGN KEY(book_id) REFERENCES book(book_id),
    FOREIGN KEY(branch_id) REFERENCES library_branch(branch_id),
    FOREIGN KEY(card_no) REFERENCES borrower(card_no)
);

CREATE TABLE IF NOT EXISTS library_branch(
    branch_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    branch_name VARCHAR(100) NOT NULL DEFAULT '',
    address VARCHAR(100) NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS borrower(
    card_no INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL DEFAULT '',
    address VARCHAR(100) NOT NULL DEFAULT '',
    phone VARCHAR(15) NOT NULL DEFAULT 0000000000
);

