#!/usr/bin/env node
'use strict';

const express = require('express');
const app = express();
const port = 3000;
const staticPath = `${__dirname}/public/`;

app.use(express.static(staticPath));

app.get('/', (request, response) => {
	response.sendFile('index.html');
});

app.listen(port, () => {
	console.log(`Server listening on: http://localhost:${port}`);
});
