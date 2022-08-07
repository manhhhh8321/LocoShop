const express = require('express');
const router = express.Router();

const homepage_controller = require('../controllers/homepage');

router.get('/', homepage_controller.homepageView);

module.exports = router;
