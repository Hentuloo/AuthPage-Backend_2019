const passport = require('passport');
const withAuth = (req, res, next) => {
    passport.authenticate('jwt', { session: false })(req, res, next);
};

module.exports = { withAuth };
