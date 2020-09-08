const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: true
}));

// using port 8080 to listening
app.listen(8080, () => {
    console.log('App listening on port 8080');
});

// Tugas no 1
app.get('/home', (request, response) => {
    response.send('Welcome to my first backend!');
});

// Tugas no 2
app.post('/data', (request, response) => {
    console.log(request.body);
    response.sendStatus(200);
})

let data = {
    name: 'Jane',
    batch: '17.2',
    email: 'janedoe@gmail.com'
};

app.route('/profile')
    // Tugas no 3
    .post((request, response) => {
        response.send(request.body);
    })
    // Tugas no 4
    .patch((request, response) => {
        data = {
            ...data,
            ...request.body
        };

        response.send(data);
    })
    //Tugas no 5
    .put((request, response) => {
        const isValid = Object.keys(data).every(el => Object.keys(request.body).includes(el));

        if (isValid) {
            data = {
                ...data,
                ...request.body
            };

            response.send(data);
        } else {
            response.send('Error! Incomplete key entry...');
        }
    })