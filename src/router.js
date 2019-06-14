//strict mode
'use strict';

//Adding Express
let express = require('express');

// Create instance of an express router
let router = express.Router();

//Adding authentication route functions
let loginRoute = require('./authentication/login');
let logoutRoute = require('./authentication/logout');
let registerRoute = require('./authentication/register');

//Adding book route functions
let allTicketsRoute = require('./tickets/tickets');
let newTicketRoute = require('./tickets/newTicket');
let showTicketDetailsRoute = require('./tickets/showTicketDetails');

/**
 * Define routes
 */

// Login Page
router.get('/', loginRoute.get);
router.post('/', loginRoute.post);

// Logout
router.get('/logout', logoutRoute.get);

// Register Page
router.get('/register', registerRoute.get);
router.post('/register', registerRoute.post);

// See All Tickets
router.get('/tickets', allTicketsRoute.get);

// Add new ticket to the database
router.get('/tickets/new', newTicketRoute.get);
router.post('/tickets', newTicketRoute.post);

// See ticket details
router.get('/tickets/:id', showTicketDetailsRoute.get);
router.post('/tickets/:id', showTicketDetailsRoute.post);

module.exports = router;
