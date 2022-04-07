const express = require('express');

const { 
  save,
  fetch,
  destroy
 } = require('../../controllers/bookmark/BookMarkController');


 const routes = express.Router();

 routes.post('/save', save);
 routes.get('/:id', fetch);
 routes.post('/destroy/:id', destroy);

 module.exports = routes;