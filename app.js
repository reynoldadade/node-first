// add bodyparser
const bodyparser = require('body-parser');
// add express
const express = require('express');
// define your app
const app = express();
//import your routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// pass request body parsing
app.use(bodyparser.urlencoded({ extended: false }));

// use your imported routes inside your main app
app.use('/admin', adminRoutes); // for admin related actions
app.use(shopRoutes);

// if you want to catch all other routes
app.use((request, response, next) => {
	// so that it goes to the next middleware
	response.status(404).send('<h1>Page not found </h1>');
});
// server.listen(3000);
app.listen(3333);
