var express = require('express');
var router = express.Router();
const contact_controller = require('../controllers/contact');

router.get('/contact', contact_controller.contactView);

module.exports = router;
