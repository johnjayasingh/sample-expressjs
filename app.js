const express = require('express');
const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


// Routes
const walletRoutes = require('./routes/wallet');

app.use('/wallet', walletRoutes);

module.exports = app;