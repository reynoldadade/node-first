//import path
const path = require('path');
// import express
const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
	// next allows us to move to the next middleware in line
	// __dirname allows you find the correct absolute path to your current folder
	response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

// export your mini router app
module.exports = router;
