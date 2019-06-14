//strict mode
'use strict';

let db = require('../database');

//SEE ALL TICKETS
//INDEX route
function getAllTicketsRoute(req, res, next) {
	if (!req.session.email) {
		res.redirect('/');
	} else {
		let query1 = 'SELECT id from users where email =?';
		let query2 = 'SELECT id, subject, status FROM ticket_info WHERE user_id=? GROUP BY id ORDER BY id DESC';
		db.query(query1, [ req.session.email ], (error, userID, fields) => {
			console.log(userID[0].id);
			db.query(query2, [ userID[0].id ], (error, ticketInfo, fields) => {
				console.log(ticketInfo);
				res.render('tickets/tickets', {
					email      : req.session.email,
					pageId     : 'tickets',
					title      : 'Tickets | All Tickets',
					ticketInfo : ticketInfo
				});
			});
		});
	}
}

module.exports = { get: getAllTicketsRoute };
