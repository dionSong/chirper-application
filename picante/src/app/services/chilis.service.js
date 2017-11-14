"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//rxjs
require("rxjs/add/operator/map");
var ChilisService = /** @class */ (function () {
    function ChilisService(http) {
        this.http = http;
    }
    ChilisService_1 = ChilisService;
    ChilisService.prototype.getChilis = function () {
        return this.http
            .get(ChilisService_1.api)
            .map(function (r) { return r.json(); });
    };
    ChilisService.prototype.getChili = function (id) {
        return this.http
            .get(ChilisService_1.api + "/" + id)
            .map(function (r) { return r.json(); });
    };
    ChilisService.api = 'http://localhost:3000/api/chilis';
    ChilisService = ChilisService_1 = __decorate([
        core_1.Injectable()
    ], ChilisService);
    return ChilisService;
    var ChilisService_1;
}());
exports.ChilisService = ChilisService;
