"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Procedures
var procedures_1 = require("../procedures/procedures");
var procedures_2 = require("../procedures/procedures");
var procedures_3 = require("../procedures/procedures");
var procedures_4 = require("../procedures/procedures");
var procedures_5 = require("../procedures/procedures");
//Midlewares
var id_1 = require("../middlewares/id");
var router = express_1.Router();
router
    .get('/', procedures_2.all)
    .get('/:id', procedures_1.oneChili)
    .post('/', id_1.ranID, procedures_3.create)
    .delete('/:id', procedures_4.destroy)
    .put('/:id', procedures_5.update);
exports.default = router;
