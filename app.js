const http = require('http');

// add express
const express = require('express');

const app = express();

// handle middlewares
app.use('/add-product', (request, response, next) => {
	console.log('in another middleware');
	// send allows us to send a response back
	response.send('<h1>The add product page</h1>');
});

app.use('/', (request, response, next) => {
	console.log('in the middleware');
	// next allows us to move to the next middleware in line
	response.send('<h1>The default index</h1>');
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
