const express = require('express');
const router = express.Router();
const passport = require('passport');

const { register, login } = require('../controllers/auth');

router.post('/register', register);
router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    login,
);

module.exports = router;
