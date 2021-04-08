const express = require('express');
const app = express();
// handle ALL requests
app.all('/*', function (req, res) {
// send this to client
res.send("Hello World!");
});
// listen to port 3000
const server = app.listen(3000);