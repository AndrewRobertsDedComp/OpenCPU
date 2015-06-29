/**
 * Created by andrew on 6/16/15.
 */

var express = require('express');
var multer = require('multer');
var ocpu = require('opencpu');

var app = express();
app.use(multer({ dest: './uploads/'}));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + 'index.html');
});

app.post('/upload', function(req, res) {
    console.log('Did it work?');
    var files = req.files;
    var authKey = req.body.authKey;
    if (authKey && authKey === 'DEDCOMP1234') {
        ocpu.rCall('/library/stats/R/rnorm/json', {
            n: 42,
            mean: 10,
            sd: 10
        }, function(err, data) {
           if (!err) {
               console.log(data.length);
           } else {
               console.log("failure to launch");
           }
        });

    }


})

//app.

var server = app.listen(3000);


