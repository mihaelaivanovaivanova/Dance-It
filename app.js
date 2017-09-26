const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = 8000;
app.listen(port, function() {
    require('openurl').open(`http://localhost:${port}`);
    console.log('Server is running at port ' + port);
});


