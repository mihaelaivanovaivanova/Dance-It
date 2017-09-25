var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

const port = 8000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    require('openurl').open(`http://localhost:${port}`);
    console.log('Server is running at port ' + port);
});


