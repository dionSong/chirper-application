"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var index_1 = require("../index");
exports.all = function (req, res) {
    fs.readFile(index_1.pathVar, 'utf-8', function (err, file) {
        var pP = JSON.parse(file);
        res.json(pP);
    });
};
exports.oneChili = function (req, res) {
    fs.readFile(index_1.pathVar, 'utf-8', function (err, file) {
        var parsedArray = JSON.parse(file);
        var found = parsedArray.filter(function (chili) { return chili.id === req.params.id; });
        var chili = found[0];
        res.send(chili).end();
    });
};
exports.create = function (req, res) {
    fs.readFile(index_1.pathVar, 'utf-8', function (err, file) {
        var parsedFile = JSON.parse(file);
        var chili = req.body;
        parsedFile.push(chili);
        fs.writeFile(index_1.pathVar, JSON.stringify(parsedFile), function (err) {
            if (err)
                throw err;
            res.status(201).send(chili).end();
        });
    });
};
exports.destroy = function (req, res) {
    fs.readFile(index_1.pathVar, 'utf-8', function (err, file) {
        var fileParsed = JSON.parse(file);
        var foundIndex = -1;
        fileParsed.map(function (chili, i) {
            if (chili.id === req.params.id) {
                foundIndex = i;
            }
        });
        if (foundIndex === -1) {
            res.status(404).end();
            return;
        }
        fileParsed.splice(foundIndex, 1);
        fs.writeFile(index_1.pathVar, JSON.stringify(fileParsed), 'utf-8', function (err) {
            if (err)
                throw err;
            res.status(202).end();
        });
    });
};
exports.update = function (req, res) {
    fs.readFile(index_1.pathVar, 'utf-8', function (err, file) {
        var parsedArray = JSON.parse(file);
        var found = parsedArray.filter(function (chili) { return chili.id === req.params.id; });
        var chili = found[0];
        console.log(found[0]);
        var definitiveId = found[0].id;
        var foundIndex = -1;
        parsedArray.map(function (chili, i) {
            if (chili.id === req.params.id) {
                foundIndex = i;
            }
        });
        if (foundIndex === -1) {
            res.status(404).end();
            "";
            return;
        }
        parsedArray.splice(foundIndex, 1);
        var newchili = req.body;
        chili = newchili;
        chili.id = definitiveId;
        parsedArray.push(chili);
        fs.writeFile(index_1.pathVar, JSON.stringify(parsedArray), function (err) {
            if (err)
                throw err;
        });
        res.send(chili).end();
    });
};
