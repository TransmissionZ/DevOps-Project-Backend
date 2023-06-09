const express = require('express');
const app = express();
const port = 3000;

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
