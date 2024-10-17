"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                toolbar_component_1.ToolbarComponent,
                sidebar_component_1.SidebarComponent
            ],
            imports: [
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
                common_1.CommonModule
            ],
            exports: [
                toolbar_component_1.ToolbarComponent,
                sidebar_component_1.SidebarComponent
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
exports.SharedComponentsModule = SharedComponentsModule;
