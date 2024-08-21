const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const PORT = process.env.PORT || 8080;

app.use(compression());
 
app.use(express.static(__dirname + '/dist'));

// PathLocationStrategy
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Web listening on PORT", PORT);
});