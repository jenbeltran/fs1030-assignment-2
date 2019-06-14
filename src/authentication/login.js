//strict mode
'use strict';

let db = require('../database');

// LOGIN ROUTE
//NEW route - shows the login form
function getLoginRoute(req, res) {
	res.render('authentication/login', {
		email  : req.session.email,
		pageId : 'login',
		title  : 'Tickets | Login'
	});
}

//POST ROUTE - checks to make sure  user is already in the database
function postLoginRoute(req, res) {
	let query = 'SELECT email FROM users WHERE email =?';
	db.query(query, [ req.body.email ], (error, dbEmail, fields) => {
		if (req.body.email !== dbEmail[0].email) {
			res.redirect('/');
		} else {
			let query = 'SELECT password FROM users WHERE email =?';
			db.query(query, [ req.body.email ], (error, dbPassword, fields) => {
				if (req.body.password !== dbPassword[0].password) {
					res.redirect('/');
				} else {
					req.session.email = req.body.email;
					res.redirect('/tickets');
				}
			});
		}
	});
}

module.exports = { get: getLoginRoute, post: postLoginRoute };
