//strict mode
'use strict';

let db = require('../database');

//REGISTER ROUTE
//NEW route - shows the register form
function getRegisterRoute(req, res) {
	res.render('authentication/register', {
		email  : req.session.email,
		pageId : 'register',
		title  : 'Tickets | Register'
	});
}

// POST route - adds user to the database
function postRegisterRoute(req, res) {
	let query = 'INSERT INTO users(name, email, password) VALUES(?, ?, ?)';
	db.query(query, [ req.body.name, req.body.email, req.body.password ], (registrationInfo) => {
		req.session.email = req.body.email;
		res.redirect('/tickets');
	});
}

module.exports = { get: getRegisterRoute, post: postRegisterRoute };
