var express = require('express');
var app = express();
var port = 8080;

app.listen(port);
console.log('Listening on port ' + port);

app.get('/stooges/:name?', function(req, res, next) {
    var name = req.params.name;

    switch (name ? name.toLowerCase() : '') {
        case 'larry':
        case 'curly':
        case 'moe':
            res.send(name + ' is my favorite stooge.');
            break;
        default:
            next();
    }
});

app.get('/stooges/*?', function(req, res) {
    res.send('no stooges listed');
});

app.get('/?', function(req, res) {
    res.send('Hello World!');
});
