const express = require('express');

// this router is a basically a mini express app that plugs into the main app.js
const router = express.Router();

router.get('/add-product', (request, response, next) => {
	// send allows us to send a response back
	// in case i want to display a form
	response.send(
		'<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Submit </button></form>'
	);
});
// when user comes to /product page
router.post('/add-product', (request, response, next) => {
	console.log(request.body);
	response.redirect('/');
});

module.exports = router;
