//strict mode
'use strict';

var db = require('../database');

//SEE TICKET DETAILS AND COMMENTS
//SHOW route
function showTicketDetailsRoute(req, res, next) {
	let query1 = 'SELECT id, subject FROM ticket_info WHERE ticket_info.id=?';
	let query2 =
		'SELECT ticket_id, details, date_created, name FROM ticket_details, ticket_info, users WHERE ticket_info.user_id=users.id AND ticket_details.ticket_id=? AND ticket_info.id=?';
	db.query(query1, [ req.params.id ], (error, ticketDetails1, fields) => {
		db.query(query2, [ req.params.id, req.params.id ], (error, ticketDetails2, fields) => {
			res.render('tickets/showTicketDetails', {
				email          : req.session.email,
				pageId         : 'showTicketDetails',
				title          : 'Tickets | Ticket Details',
				ticketDetails1 : ticketDetails1,
				ticketDetails2 : ticketDetails2
			});
		});
	});
}

//CREATE route - creates a comment and redirects to the ticket details page
function createNewCommentRoute(req, res, next) {
	console.log(req.body.comment);
	let query = 'INSERT INTO ticket_details(ticket_id, details, date_created) VALUES(?, ?, NOW())';
	db.query(query, [ req.params.id, req.body.comment ], () => {
		res.redirect(`/tickets/${req.params.id}`);
	});
}

module.exports = { get: showTicketDetailsRoute, post: createNewCommentRoute };
