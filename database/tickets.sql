CREATE DATABASE tickets;

USE tickets;

CREATE TABLE IF NOT EXISTS users(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL DEFAULT '',
    email VARCHAR(100) NOT NULL DEFAULT '',
    password TEXT NOT NULL,
    isSupport BOOLEAN DEFAULT 0
);

CREATE TABLE IF NOT EXISTS ticket_info(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    status CHAR(10) NOT NULL DEFAULT 'Open',
    subject VARCHAR(100),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS ticket_details(
    ticket_id INT UNSIGNED NOT NULL,
    details TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(ticket_id) REFERENCES ticket_info(id)
);

INSERT INTO users VALUES
(1, 'Jen Beltran', 'jen@yorku.ca', 'jen', 0),
(2, 'Priyanka Chopra', 'priyanka@yorku.ca', 'jen', 0),
(3, 'Nick Jonas', 'nick@yorku.ca', 'jen', 0);

INSERT INTO ticket_info VALUES
(1, 1, 'Open', 'Laptop software will not open'),
(2, 2, 'Open', 'Computer dropped and broken'),
(3, 3, 'Open', 'Conference projector broken');

INSERT INTO ticket_details VALUES
(1, 'ClientConnect software is not opening, please help', '2019-06-02'),
(2, 'I dropped my computer and the screen cracked, please send me a new laptop', '2019-06-10'),
(3, 'Please fix the projector, it is not working', '2019-06-12');