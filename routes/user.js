const express = require('express');
const router = express.Router();

const { withAuth } = require('../middlewares/auth');
const { basicData } = require('../controllers/user');

router.get('/basic', withAuth, basicData);

module.exports = router;
