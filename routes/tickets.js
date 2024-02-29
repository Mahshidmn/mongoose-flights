const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');

// GET /flights/:id/tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketsController.new);
// POST /flights/:id/tickets (create functionality)
router.post('/flights/:id/tickets', ticketsController.create);

module.exports = router;