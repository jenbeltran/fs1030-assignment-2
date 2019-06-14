INSERT INTO book VALUES
(1, 'The Power of Habit', 'Random House'),
(2, 'Harry Potter and the Chamber of Secrets', 'Bloomsbury Publishing'),
(3, 'Twilight', 'Little, Brown and Company');

INSERT INTO book_authors VALUES
(1, 'Charles Duhigg'),
(2,	'JK Rowling'),
(3,	'Stephanie Meyer');

INSERT INTO publisher VALUES
('Random House', 'Random House Tower, New York City, New York, United States', 18007333000),
('Bloomsbury Publishing', '50 Bedford Square, London England WC1B 3DP', 442076315600),
('Little, Brown and Company', '1290 6th Ave, New York, NY 10104, USA', 12123641100);

INSERT INTO library_branch VALUES
(1, 'Robarts Library', '130 St George St, Toronto, ON M5S 1A5'),
(2, 'Toronto Public Library - Toronto Reference Library', '789 Yonge St, Toronto, ON M4W 2G8'),
(3, 'Toronto Public Library - St. Lawrence Branch', '171 Front St E, Toronto, ON M5A 4H3');

INSERT INTO borrower VALUES
(1, 'Jen Beltran', '123 York Street ,Toronto, ON M3C 1C9', 4169671111),
(2, 'John Snow', '70 York Street, Toronto, ON M5J 1S9', 6471231234),
(3, 'Nick Jonas', '647 Central Way, North York, ON M3M 2J8', 4160987654);

INSERT INTO book_loans VALUES
(1, 2, 1, '2019-06-11', '2019-07-01'),
(2, 3, 3, '2019-06-13', '2019-07-03'),
(3, 3, 3, '2019-06-13', '2019-07-03');

INSERT INTO book_copies VALUES
(1, 2, 6),
(2, 3, 12),
(3, 3, 6);