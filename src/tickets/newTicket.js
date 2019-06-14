//strict mode
'use strict';

var db = require('../database');

//ADD A NEW TICKET
//NEW route - shows the new ticket form
function addNewTicketRoute(req, res) {
	res.render('tickets/newTicketForm', {
		email  : req.session.email,
		pageId : 'newTicket',
		title  : 'Tickets | Create a Ticket'
	});
}

//CREATE route - creates the new ticket and redirects to all tickets page
function createNewTicketRoute(req, res, next) {
	let query1 = 'SELECT id from users where email =?';
	let query2 = 'INSERT INTO ticket_info(user_id, subject) VALUES(?, ?)';
	let query3 = 'INSERT INTO ticket_details(ticket_id, details, date_created) VALUES(LAST_INSERT_ID(), ?, NOW())';
	db.query(query1, [ req.session.email ], (error, userID, fields) => {
		db.query(query2, [ userID[0].id, req.body.subject ], () => {
			db.query(query3, [ req.body.details ], () => {
				res.redirect('/tickets');
			});
		});
	});
}

module.exports = { get: addNewTicketRoute, post: createNewTicketRoute };
