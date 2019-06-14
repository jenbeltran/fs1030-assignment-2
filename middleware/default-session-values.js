'use strict';

/**
 * Applies default session values
 */
module.exports = function loginMiddleware(req, res, next) {
	console.log(req.session);
	// If the email is undefined, we can assume the session has not been set at all
	if (req.session.email === undefined) {
		req.session.email = null;
	}

	// Move onto next middleware (defined with app.use)
	next();
};
