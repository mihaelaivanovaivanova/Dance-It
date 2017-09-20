const express = require('express');
const bodyParser = require('body-parser');

// var db = lowdb('./data/data.json');
// db._.mixin(require('underscore-db'));

const app = express();

const port = 3000;

app.listen(port, function() {
    require('openurl').open(`http://localhost:${port}/index.html`);
    console.log('Server is running at port ' + port);
});
