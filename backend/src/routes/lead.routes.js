const express = require('express');
const router = express.Router();
// const leadController = require('../controllers/lead.controller');

// Dummy route for future contact form integrations (if ever needed outside of Telegram/WA/Teams direct clicks)
router.post('/', (req, res) => {
    // leadController.createLead(req, res);
    res.status(200).json({ success: true, message: 'Lead endpoint ready.' });
});

module.exports = router;