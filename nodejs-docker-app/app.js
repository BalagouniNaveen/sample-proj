// app.js

const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World! This is a basic Node.js API.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
