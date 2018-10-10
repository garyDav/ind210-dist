(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>IND 210 </h1>\n\n<div class=\"example-container\">\n  <h3>F/P -> (F/P, i%, n)</h3>\n  <mat-form-field>\n    <input #p01 matInput placeholder=\"Presente (P)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #i01 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #n01 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res1 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"cs_futuro_p(p01.value, i01.value, n01.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>P/F -> (P/F,i,n)</h3>\n  <mat-form-field>\n    <input #f01 matInput placeholder=\"Futuro (F)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #i02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #n02 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res2 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"cs_presente_f(f01.value, i02.value, n02.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>P/A -> (P/A,i,n)</h3>\n  <mat-form-field>\n    <input #p1aram01 matInput placeholder=\"Anualidad (A)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p1aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p1aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res3 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"su_presente_a(p1aram01.value, p1aram02.value, p1aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>A/P -> (A/P,i,n)</h3>\n  <mat-form-field>\n    <input #p2aram01 matInput placeholder=\"Presente (P)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p2aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p2aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res4 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"su_anualidad_p(p2aram01.value, p2aram02.value, p2aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>F/A -> (F/A,i,n)</h3>\n  <mat-form-field>\n    <input #p3aram01 matInput placeholder=\"Anualidad (A)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p3aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p3aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res5 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"su_futuro_a(p3aram01.value, p3aram02.value, p3aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>A/F -> (A/F,i,n)</h3>\n  <mat-form-field>\n    <input #p4aram01 matInput placeholder=\"Futuro (F)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p4aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p4aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res6 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"su_anualidad_f(p4aram01.value, p4aram02.value, p4aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Pg/G -> (P/G,i,n)</h3>\n  <mat-form-field>\n    <input #p5aram01 matInput placeholder=\"Gradiente (G)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p5aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p5aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res7 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"ga_presente_g(p5aram01.value, p5aram02.value, p5aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Ag/G -> (A/G,i,n)</h3>\n  <mat-form-field>\n    <input #p6aram01 matInput placeholder=\"Gradiente (G)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p6aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p6aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res8 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"ga_anualidad_g(p6aram01.value, p6aram02.value, p6aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Fg/G -> (Fg/G,i,n)</h3>\n  <mat-form-field>\n    <input #p7aram01 matInput placeholder=\"Gradiente (G)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p7aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p7aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res9 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"ga_futuro_g(p7aram01.value, p7aram02.value, p7aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>G/(Aumento y n)</h3>\n  <mat-form-field>\n    <input #p8aram01 matInput placeholder=\"Aumento (Au)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p8aram02 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res10 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"ga_gradiente_a(p8aram01.value, p8aram02.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Flujo efectivo CFn: CFn = Cantidad base(CB) + (n-1)*G</h3>\n  <mat-form-field>\n    <input #p9aram01 matInput placeholder=\"Cantidad base (CB)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p9aram02 matInput placeholder=\"Gradiente (G)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p9aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res11 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"ga_flujo_efectivo(p9aram01.value, p9aram02.value, p9aram03.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Gradiente Geométrico: Pg/A1 Si g!=i</h3>\n  <mat-form-field>\n    <input #p10aram01 matInput placeholder=\"Aumento (A1)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p10aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p10aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p10aram04 matInput placeholder=\"Gradiente (g)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res12 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"gg_presente_g_i(p10aram01.value, p10aram02.value, p10aram03.value, p10aram04.value);\">\n    Aceptar\n  </button>\n\n  <hr>\n\n  <h3>Gradiente Geométrico: Pg/A1 y g Si g==i</h3>\n  <mat-form-field>\n    <input #p11aram01 matInput placeholder=\"Aumento (A1)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p11aram02 matInput placeholder=\"Impuesto decimal (i)\">\n  </mat-form-field>\n  <mat-form-field>\n    <input #p11aram03 matInput placeholder=\"Número de periodo (n)\">\n  </mat-form-field>\n  <h4>Resultado: {{ res13 }}</h4>\n  <button mat-flat-button color=\"primary\" (click)=\"gg_presente_gi(p11aram01.value, p11aram02.value, p11aram03.value);\">\n    Aceptar\n  </button>\n\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // Cantidad Sencilla (Encontrar/Dado) | punto 0, P(flecha abajo)...punto n, F(flecha arriba)
    // F/P | (F/P,i,n)=(1+i)^n | F=P(F/P,i,n)
    // F=P*(1+i)^n
    AppComponent.prototype.cs_futuro_p = function (P, i, n) {
        P = +P;
        i = +i;
        n = +n;
        this.res1 = (P * Math.pow(i + 1, n)).toFixed(4);
    };
    // P/F | (P/F,i,n)=[1/(1+i)^n] | P=F*(P/F,i,n)
    // P=[F/(1+i)^n]
    AppComponent.prototype.cs_presente_f = function (F, i, n) {
        F = +F;
        i = +i;
        n = +n;
        this.res2 = F / Math.pow(i + 1, n);
    };
    // Series uniformes (A cte)
    // punto 0, P(flecha abajo)... A(flecha arriba) ...punto n, A(flecha arriba)
    // P/A | (P/A,i,n)={[(1+i)^n-1]/[i(1+i)^n]} | P=A*(P/A,i,n)
    // P = [A*(1+i)^n - 1] / i*(1+i)^n
    AppComponent.prototype.su_presente_a = function (A, i, n) {
        A = +A;
        i = +i;
        n = +n;
        this.res3 = (A * (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n)));
    };
    // A/P | (A/P,i,n)=[i*(1+i)^n]/[(1+i)^n-1] | A=P*(A/P,i,n)
    // A = P*[i*(i+1)^n] / [(i+1)^n - 1]
    AppComponent.prototype.su_anualidad_p = function (P, i, n) {
        P = +P;
        i = +i;
        n = +n;
        this.res4 = (P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
    };
    // punto 0... A(flecha abajo) ...punto n, A(flecha abajo), F(flecha arriba)
    // F/A | (F/A,i,n)=[(1+i)^n-1]/i | F=A(F/A,i,n)
    // F = A*((1+i)^n - 1) / i
    AppComponent.prototype.su_futuro_a = function (A, i, n) {
        A = +A;
        i = +i;
        n = +n;
        this.res5 = (A * (Math.pow(1 + i, n) - 1) / i);
    };
    // A/F | (A/F,i,n)=i/[(1+i)^n-1] | A=F(A/F,i,n)
    // A = F*i / ((1+i)^n - 1)
    AppComponent.prototype.su_anualidad_f = function (F, i, n) {
        F = +F;
        i = +i;
        n = +n;
        this.res6 = (F * i / (Math.pow(1 + i, n) - 1));
    };
    // Gradiente Aritmético (punto 0, Pg flecha arriba; punto 1...n, Ag flechas arriba...; punto 2, G (flecha abajo); punto 3, 2G; punto...n, n-1G)
    // Pg/G | (P/G,i,n)=[(1+i)^n-i*n-1]/[i^2(1+i)^n] | Pg=G(P/G,i,n)
    // Pg = G*[(1+i)^n-i*n-1]/[i^2(1+i)^n]
    AppComponent.prototype.ga_presente_g = function (G, i, n) {
        G = +G;
        i = +i;
        n = +n;
        this.res7 = G * (Math.pow(1 + i, n) - (i * n) - 1) / (Math.pow(i, 2) * Math.pow(1 + i, n));
    };
    // Ag/G | (A/G,i,n)=(1/i)-[n/(1+i)^n-1] | Ag=G(A/G,i,n)
    // Ag = (G/i)-{(G*n)/[(1+i)^n-1]}
    AppComponent.prototype.ga_anualidad_g = function (G, i, n) {
        G = +G;
        i = +i;
        n = +n;
        this.res8 = (G / i) - ((G * n) / (Math.pow(1 + i, n) - 1));
    };
    // Fg/G
    // Fg = (G/i)*{[ (1+i)^n-1 / i]-n}
    AppComponent.prototype.ga_futuro_g = function (G, i, n) {
        G = +G;
        i = +i;
        n = +n;
        this.res9 = (G / i) * (((Math.pow(1 + i, n) - 1) / i) - n);
    };
    // G/(Aumento y n)
    AppComponent.prototype.ga_gradiente_a = function (Au, n) {
        Au = +Au;
        n = +n;
        this.res10 = Au / (n - 1);
    };
    // Flujo efectivo CFn
    // CFn = Cantidad base(CB) + (n-1)*G
    AppComponent.prototype.ga_flujo_efectivo = function (CB, G, n) {
        CB = +CB;
        G = +G;
        n = +n;
        this.res11 = CB + (n - 1) * G;
    };
    // Gradiente Geométrico (punto 0, Pg(flecha abajo); punto 1 A1(flecha arriba); punto 2 A1(1+g); ... ; punto n A1(1+g)^(n-1))
    // Pg/A1 y g | Pg={A1*[1-(1+g/1+i)^n]}/(i-g) ; g!=i
    AppComponent.prototype.gg_presente_g_i = function (A1, i, n, g) {
        A1 = +A1;
        i = +i;
        n = +n;
        g = +g;
        var base = (1 + g) / (1 + i);
        this.res12 = (A1 * (1 - Math.pow(base, n))) / (i - g);
    };
    // Pg/A1 y g | Pg=(A1*n)/(1+i) ; g==i
    AppComponent.prototype.gg_presente_gi = function (A1, i, n) {
        A1 = +A1;
        i = +i;
        n = +n;
        this.res13 = (A1 * n) / (1 + i);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Material Angular



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gary/Proyectos/ind210/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map