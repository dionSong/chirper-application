"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Services
var chilis_service_1 = require("./services/chilis.service");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var shared_module_1 = require("./modules/shared.module");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
// Personal Components
var single_component_1 = require("./components/single/single.component");
var chilis_component_1 = require("./components/chilis/chilis.component");
var chili_form_component_1 = require("./components/chili-form/chili-form.component");
var appRoutes = [
    {
        path: 'chilis',
        component: chilis_component_1.ChilisComponent
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                single_component_1.SingleComponent,
                chilis_component_1.ChilisComponent,
                chili_form_component_1.ChiliFormComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes),
            ],
            providers: [chilis_service_1.ChilisService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
