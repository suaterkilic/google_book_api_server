const express = require('express');
const authRoutes = require('./auth/authRoutes');
const bookMarkRoutes = require('./bookmark/bookMarkRoutes');

const app = express();

app.use('/auth', authRoutes);
app.use('/bookmark', bookMarkRoutes);

module.exports = app;