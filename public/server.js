const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const dbURI = process.env.DATABASE;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/welcome.html'));
});

app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Server started on port ${PORT}`);
});