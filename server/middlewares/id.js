"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shortid = require("shortid");
exports.ranID = function (req, res, next) {
    if (!req.body) {
        throw new Error;
    }
    req.body.id = shortid.generate();
    next();
};
