const express = require('express');

const app = express();

// using port 8080 to listening
app.listen(8080, () => {
    console.log('App listening on port 8080');
});

// Tugas no 1
app.get('/home', (request, response) => {
    response.send('Welcome to my first backend!');
});