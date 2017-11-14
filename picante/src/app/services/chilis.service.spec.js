"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var chilis_service_1 = require("./chilis.service");
describe('ChilisService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [chilis_service_1.ChilisService]
        });
    });
    it('should be created', testing_1.inject([chilis_service_1.ChilisService], function (service) {
        expect(service).toBeTruthy();
    }));
});
