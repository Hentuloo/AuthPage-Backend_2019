const basicData = (req, res) => {
    const { firstName, lastName, email } = req.user;
    res.send({ status: 'success', firstName, lastName, email });
};

module.exports = { basicData };
