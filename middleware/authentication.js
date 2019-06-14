'use strict';

/**
 *
 */
//check if a user is logged in
module.exports = function isLoggedIn(req, res, next) {
	if (!req.session.email) {
		res.redirect('/');
	} else {
		next();
	}
};
