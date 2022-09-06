const express = require('express');
const randomColor = require('randomcolor');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/colour', (req, res) => res.send(`${randomColor()}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))