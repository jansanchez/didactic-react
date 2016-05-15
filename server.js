#!/usr/bin/env node
'use strict';

const express = require('express');
const app = express();
const port = 3000;
const publicPath = `${__dirname}/public/`;

app.use(express.static(publicPath));
app.use(express.static(`${publicPath}/static/js/`));
app.use(express.static(`${publicPath}/static/css/`));

app.get('/', (request, response) => {
	response.sendFile('index.html');
});

app.listen(port, () => {
	console.log(`Server listening on: http://localhost:${port}`);
});
