const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const newUser = new User({ email, firstName, lastName });

        await User.register(newUser, password);
        res.send({ status: 'success' });
    } catch (err) {
        res.status(400).send(err);
    }
};
const login = (req, res) => {
    try {
        const token = jwt.sign({ id: req.user._id }, process.env.SECRET, {
            expiresIn: 60 * 60,
        });
        res.send({ status: 'success', token });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = { register, login };
