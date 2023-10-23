const express = require('express')
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));


// const HOST = '0.0.0.0';
// const PORT = process.env.PORT || 8080;

// app.listen(PORT, HOST)
// console.log(`Running on http://${HOST}:${PORT}`);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});