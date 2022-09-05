// import express
const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
	// next allows us to move to the next middleware in line
	response.send('<h1>The default index</h1>');
});

// export your mini router app
module.exports = router;
