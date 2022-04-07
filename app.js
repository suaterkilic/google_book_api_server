const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const cors = require('cors');


/**
 * REST API config
 */
app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.use(cors())

/**
 * Routes
 */

app.use(routes);

/**
 * Server
 */
app.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
})