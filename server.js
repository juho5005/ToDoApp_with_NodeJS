// Basic NodeJs Server prerequisites
const express = require('express');
const app = express();

// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));


// Open Server on 8080 port
app.listen(8080, function() {
    console.log('listening on 8080');
});

// Main Page 
// Routing with index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

// Write Page
// Routing with write.html
app.get('/write', function(req, res) {
    res.sendFile(__dirname + '/write.html');
})

// Add page
// POST with write Page
app.post('/add', (req, res) => {
    res.send('전송완료');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.date);
})