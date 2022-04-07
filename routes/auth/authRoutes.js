const express = require('express');
const { login } = require('../../controllers/auth/AuthController');

const routes = express.Router();

routes.post('/login', login)

module.exports = routes