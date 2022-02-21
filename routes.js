const fs = require('fs');
const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write(
			"<html><title>Enter Message</title><body><form action='/message' method='POST'><input type='text' value='' name='message'/><button type='submit'>Submit</button></form></body></html>"
		);
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			// console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.txt', message, (err) => {
				res.writeHead(302, { Location: '/' });
				return res.end();
			});
		});
		return;
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<h1>Hello World</h1>');
	res.end();
};

module.exports = requestHandler;
