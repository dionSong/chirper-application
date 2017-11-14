"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var chilis_1 = require("./chilis");
var router = express_1.Router();
router.use('/chilis', chilis_1.default);
exports.default = router;
