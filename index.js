const express = require('express');
const { config } = require('./config/envServer');
// const { booksGQL } = require('./routes/routes');
const apollo = require('./routes/routes');

const app = express();
app.use(express.json());

// booksGQL(app);
apollo.applyMiddleware({ app });

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});