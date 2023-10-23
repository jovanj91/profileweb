const express = require('express')

const app = express();
app.use(express.static('public'));

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);