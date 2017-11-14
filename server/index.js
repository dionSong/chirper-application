"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var bp = require("body-parser");
//Routes
var api_1 = require("./routes/api");
var app = express();
//Paths
exports.pathVar = path.join(__dirname, 'data.json');
var distPath = path.join(__dirname, '..', 'picante', 'dist');
console.log(distPath);
app
    .use(bp.json())
    .use(bp.urlencoded({ extended: true }))
    .use('/api', api_1.default)
    .use('/', express.static(distPath, { redirect: false }))
    .get('/*', function (req, res) {
    res.sendFile(path.join(distPath, 'index.html'));
})
    .listen(3000, function () {
    console.log('listening on port 3000');
});
