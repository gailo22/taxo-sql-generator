webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>{{title}}</mat-toolbar>\n\n<mat-tab-group>\n  <mat-tab label=\"Classified\">\n    <app-classified></app-classified>\n  </mat-tab>\n  <mat-tab label=\"Not Classified\">\n    <app-notclassified></app-notclassified>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Taxo SQL generator';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__classified_classified_component__ = __webpack_require__("../../../../../src/app/classified/classified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notclassified_notclassified_component__ = __webpack_require__("../../../../../src/app/notclassified/notclassified.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__display_display_component__ = __webpack_require__("../../../../../src/app/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fileupload_service__ = __webpack_require__("../../../../../src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__display_service__ = __webpack_require__("../../../../../src/app/display.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FlexLayoutModule } from '@angular/flex-layout'















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__classified_classified_component__["a" /* ClassifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__notclassified_notclassified_component__["a" /* NotclassifiedComponent */],
                __WEBPACK_IMPORTED_MODULE_16__display_display_component__["a" /* DisplayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_clipboard__["a" /* ClipboardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__fileupload_service__["a" /* FileuploadService */], __WEBPACK_IMPORTED_MODULE_18__display_service__["a" /* DisplayService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/classified/classified.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/classified/classified.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <input type=\"file\" id=\"input-file-before\"\n  (change)=\"fileEvent($event)\">\n  <button mat-raised-button\n  (click)=\"uploadFile()\">Upload</button>\n  <button mat-raised-button\n  (click)=\"reset()\">Reset</button>\n</mat-card>\n\n<mat-card>\n  <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>    \n  <app-display *ngIf=\"!showSpinner\"></app-display>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/classified/classified.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload_service__ = __webpack_require__("../../../../../src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_service__ = __webpack_require__("../../../../../src/app/display.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassifiedComponent = (function () {
    function ClassifiedComponent(fileuploadService, displayService) {
        this.fileuploadService = fileuploadService;
        this.displayService = displayService;
        this.showSpinner = false;
    }
    ClassifiedComponent.prototype.ngOnInit = function () {
    };
    ClassifiedComponent.prototype.fileEvent = function ($event) {
        this.fileSelected = $event.target.files[0];
    };
    ClassifiedComponent.prototype.uploadFile = function () {
        var _this = this;
        this.showSpinner = true;
        setTimeout(function () {
            _this.showSpinner = false;
            console.log(_this.fileSelected);
            _this.fileuploadService.uploadClassifiedFile(_this.fileSelected)
                .subscribe(function (response) {
                console.log('set any success actions...');
                _this.displayService.setResult(response.data);
                return response;
            }, function (error) {
                console.log('set any error actions...');
                _this.displayService.setResult(error.message);
            });
        }, 2000);
    };
    ClassifiedComponent.prototype.reset = function () {
        console.log('reset');
        this.displayService.setResult('');
    };
    ClassifiedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-classified',
            template: __webpack_require__("../../../../../src/app/classified/classified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/classified/classified.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_2__display_service__["a" /* DisplayService */]])
    ], ClassifiedComponent);
    return ClassifiedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayService = (function () {
    function DisplayService() {
        this.listners = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DisplayService.prototype.listen = function () {
        return this.listners.asObservable();
    };
    DisplayService.prototype.setResult = function (result) {
        this.listners.next(result);
    };
    DisplayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DisplayService);
    return DisplayService;
}());



/***/ }),

/***/ "../../../../../src/app/display/display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-icon {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-icon class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\"\n(click)=\"copyToClipboard()\"  \nngxClipboard  [cbContent]=\"response\" \n>content_copy</mat-icon>\n\n<p>\n  {{response}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_service__ = __webpack_require__("../../../../../src/app/display.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayComponent = (function () {
    function DisplayComponent(displayService, snackBar) {
        var _this = this;
        this.displayService = displayService;
        this.snackBar = snackBar;
        this.response = '';
        this.displayService.listen().subscribe(function (m) {
            _this.response = m;
        });
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent.prototype.copyToClipboard = function () {
        this.snackBar.open('Copied', '', {
            duration: 2000,
        });
    };
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("../../../../../src/app/display/display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__display_service__["a" /* DisplayService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatSnackBar */]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fileupload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileuploadService = (function () {
    function FileuploadService(http) {
        this.http = http;
        this.classifiedUrl = '/api/v1/classified';
        this.notClassifiedUrl = '/api/v1/notclassified';
    }
    FileuploadService.prototype.uploadClassifiedFile = function (fileToUpload) {
        var _formData = new FormData();
        _formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post(this.classifiedUrl, _formData);
    };
    FileuploadService.prototype.uploadNotClassifiedFile = function (fileToUpload) {
        var _formData = new FormData();
        _formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post(this.notClassifiedUrl, _formData);
    };
    FileuploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FileuploadService);
    return FileuploadService;
}());



/***/ }),

/***/ "../../../../../src/app/notclassified/notclassified.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notclassified/notclassified.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <input type=\"file\" id=\"input-file-before\"\n    (change)=\"fileEvent($event)\">\n    <button mat-raised-button\n    (click)=\"uploadFile()\">Upload</button>\n    <button mat-raised-button\n    (click)=\"reset()\">Reset</button>\n  </mat-card>\n\n<mat-card>\n  <mat-spinner *ngIf=\"showSpinner\"></mat-spinner>    \n  <app-display *ngIf=\"!showSpinner\"></app-display>\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/notclassified/notclassified.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotclassifiedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload_service__ = __webpack_require__("../../../../../src/app/fileupload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_service__ = __webpack_require__("../../../../../src/app/display.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotclassifiedComponent = (function () {
    function NotclassifiedComponent(fileuploadService, displayService) {
        this.fileuploadService = fileuploadService;
        this.displayService = displayService;
        this.showSpinner = false;
    }
    NotclassifiedComponent.prototype.ngOnInit = function () {
    };
    NotclassifiedComponent.prototype.fileEvent = function ($event) {
        this.fileSelected = $event.target.files[0];
    };
    NotclassifiedComponent.prototype.uploadFile = function ($event) {
        var _this = this;
        this.showSpinner = true;
        setTimeout(function () {
            _this.showSpinner = false;
            console.log(_this.fileSelected);
            _this.fileuploadService.uploadNotClassifiedFile(_this.fileSelected)
                .subscribe(function (response) {
                console.log('set any success actions...');
                _this.displayService.setResult(response.data);
                return response;
            }, function (error) {
                console.log('set any error actions...');
                _this.displayService.setResult(error.message);
            });
        }, 2000);
    };
    NotclassifiedComponent.prototype.reset = function () {
        console.log('reset');
        this.displayService.setResult('');
    };
    NotclassifiedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-notclassified',
            template: __webpack_require__("../../../../../src/app/notclassified/notclassified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notclassified/notclassified.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fileupload_service__["a" /* FileuploadService */],
            __WEBPACK_IMPORTED_MODULE_2__display_service__["a" /* DisplayService */]])
    ], NotclassifiedComponent);
    return NotclassifiedComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map