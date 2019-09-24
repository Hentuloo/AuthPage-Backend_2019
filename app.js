const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

require('dotenv').config();
require('./settings/database');
require('./settings/passport');

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'] }));

app.use('/auth', authRoutes);
app.use('/data', userRoutes);

app.listen(process.env.PORT, function() {
    console.log(`app running on port ${process.env.PORT}`);
});
