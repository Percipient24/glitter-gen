webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.color = 'ffffff';
        this.selected = null;
    }
    AppComponent.prototype.ngOnChanges = function (changes) {
        var colorChange = changes.color;
        if (changes.color && changes.color.currentValue && changes.color.currentValue.length === 6) {
            this.selected = null;
        }
    };
    AppComponent.prototype.selectOption = function (el) {
        this.selected = el;
    };
    AppComponent.prototype.downloadCanvas = function () {
        this.download.nativeElement.href = this.glFinal.canvasRef.nativeElement.toDataURL();
        this.download.nativeElement.download = this.color + ".png";
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl0'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "gl0", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl1'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], AppComponent.prototype, "gl1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl2'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
], AppComponent.prototype, "gl2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl3'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
], AppComponent.prototype, "gl3", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl4'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _e || Object)
], AppComponent.prototype, "gl4", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gl5'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _f || Object)
], AppComponent.prototype, "gl5", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('glFinal'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _g || Object)
], AppComponent.prototype, "glFinal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('download'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _h || Object)
], AppComponent.prototype, "download", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "\n    <div class=\"box\">\n        <h1>Glitter Gen</h1>\n        <input [(ngModel)]=\"color\" appInputFilter=\"aAbBcCdDeEfF0123456789\" />\n    </div>\n    <div class=\"swatch\" [ngClass]=\"{ show: color.length === 6 }\" [ngStyle]=\"{ backgroundColor: '#' + color }\">\n        <app-glitter\n                #gl0\n                (click)=\"selectOption(gl0)\"\n                class=\"sample\"\n                [blendMode]=\"multiply\"\n                [color]=\"color\"\n                [hasSparkles]=\"true\"\n        ></app-glitter>\n        <app-glitter\n                #gl1\n                (click)=\"selectOption(gl1)\"\n                class=\"sample\"\n                [blendMode]=\"color-burn\"\n                [color]=\"color\"\n                [hasSparkles]=\"true\"\n        ></app-glitter>\n        <app-glitter\n                #gl2\n                (click)=\"selectOption(gl2)\"\n                class=\"sample\"\n                [blendMode]=\"linear-burn\"\n                [color]=\"color\"\n                [hasSparkles]=\"true\"\n        ></app-glitter>\n        <app-glitter\n                #gl3\n                (click)=\"selectOption(gl3)\"\n                class=\"sample\"\n                [blendMode]=\"multiply\"\n                [color]=\"color\"\n                [hasSparkles]=\"false\"\n        ></app-glitter>\n        <app-glitter\n                #gl4\n                (click)=\"selectOption(gl4)\"\n                class=\"sample\"\n                [blendMode]=\"color-burn\"\n                [color]=\"color\"\n                [hasSparkles]=\"false\"\n        ></app-glitter>\n        <app-glitter\n                #gl5\n                (click)=\"selectOption(gl5)\"\n                class=\"sample\"\n                [blendMode]=\"linear-burn\"\n                [color]=\"color\"\n                [hasSparkles]=\"false\"\n        ></app-glitter>\n    </div>\n    <div class=\"final\" [ngClass]=\"{ show: selected !== null }\">\n          <app-glitter\n                  #glFinal\n                  [blendMode]=\"selected?.blendMode\"\n                  [color]=\"color\"\n                  [hasSparkles]=\"selected?.hasSparkles\"\n                  [width]=\"3600\"\n                  [height]=\"3600\"\n                  [fullRes]=\"true\"\n          ></app-glitter>\n        <a #download class=\"download\" (click)=\"downloadCanvas()\">Download</a>\n    </div>\n  ",
        styles: []
    })
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_filter_directive__ = __webpack_require__("../../../../../src/app/input-filter.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__glitter_glitter_component__ = __webpack_require__("../../../../../src/app/glitter/glitter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__input_filter_directive__["a" /* InputFilterDirective */],
            __WEBPACK_IMPORTED_MODULE_5__glitter_glitter_component__["a" /* GlitterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/glitter/glitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlitterComponent = (function () {
    function GlitterComponent() {
        this.width = 300;
        this.height = 200;
    }
    GlitterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bg = document.createElement('img');
        this.bg.src = this.fullRes ? 'assets/bg-full.png' : 'assets/bg-sample.png';
        this.bg.onload = function () { _this.updateColor(); };
        this.sparkle = document.createElement('img');
        this.sparkle.src = this.fullRes ? 'assets/sparkle-full.png' : 'assets/sparkle-sample.png';
        this.sparkle.onload = function () { _this.updateColor(); };
    };
    GlitterComponent.prototype.ngAfterViewInit = function () {
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
    };
    GlitterComponent.prototype.ngOnChanges = function (changes) {
        var colorChange = changes.color;
        this.updateColor();
    };
    GlitterComponent.prototype.updateColor = function () {
        if (this.ctx && this.color.length === 6) {
            // draw the bg, obliterate everything
            this.ctx.globalCompositeOperation = 'source-over';
            this.ctx.drawImage(this.bg, 0, 0);
            // draw different blending modes
            switch (this.blendMode) {
                case 'multiply':
                    this.ctx.globalCompositeOperation = 'multiply';
                    this.ctx.fillStyle = "#" + this.color;
                    this.ctx.fillRect(0, 0, this.width, this.height);
                    break;
                case 'color-burn':
                    this.ctx.globalCompositeOperation = 'color-burn';
                    this.ctx.fillStyle = "#" + this.color;
                    this.ctx.fillRect(0, 0, this.width, this.height);
                    break;
                default:
                    this.ctx.globalCompositeOperation = 'multiply';
                    this.ctx.fillStyle = "#" + this.color;
                    this.ctx.fillRect(0, 0, this.width, this.height);
                    break;
            }
            if (this.hasSparkles) {
                this.ctx.globalCompositeOperation = 'source-over';
                this.ctx.drawImage(this.sparkle, 0, 0);
            }
        }
    };
    return GlitterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], GlitterComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], GlitterComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], GlitterComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], GlitterComponent.prototype, "blendMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], GlitterComponent.prototype, "hasSparkles", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], GlitterComponent.prototype, "fullRes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], GlitterComponent.prototype, "canvasRef", void 0);
GlitterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-glitter',
        template: "\n    <canvas #canvas [attr.width]=\"width\" [attr.height]=\"height\"></canvas>\n  ",
        styles: [],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default
    }),
    __metadata("design:paramtypes", [])
], GlitterComponent);

var _a;
//# sourceMappingURL=glitter.component.js.map

/***/ }),

/***/ "../../../../../src/app/input-filter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFilterDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputFilterDirective = (function () {
    function InputFilterDirective(el) {
        this.el = el;
        this.whitelist = [];
        this.commands = [8, 16, 17, 18, 37, 39, 91];
    }
    InputFilterDirective.prototype.ngOnInit = function () {
        console.log(this.appInputFilter);
        this.whitelist = this.appInputFilter.split('');
    };
    InputFilterDirective.prototype.onKeyDown = function (event) {
        var e = event;
        var value = this.el.nativeElement.value;
        var isCopy = (e.ctrlKey || e.metaKey) && e.key === 'c';
        var isPaste = (e.ctrlKey || e.metaKey) && e.key === 'v';
        if (isCopy || isPaste) {
            return;
        }
        var isAllowed = this.whitelist.some(function (value) {
            return e.keyCode === value.charCodeAt(0);
        });
        var isMeta = this.commands.some(function (value) {
            return e.keyCode === value;
        });
        var selectSize = this.el.nativeElement.selectionEnd - this.el.nativeElement.selectionStart;
        if (value.length >= 6 && isAllowed && selectSize === 0) {
            e.preventDefault();
        }
        if (!isAllowed && !isMeta) {
            e.preventDefault();
        }
    };
    /**
     * Cheat on paste, and only allow valid characters, up to a limit of 6 chars.
     */
    InputFilterDirective.prototype.onPaste = function (event) {
        var _this = this;
        setTimeout(function () {
            var value = _this.el.nativeElement.value;
            var count = 0;
            var result = '';
            var _loop_1 = function (i) {
                var char = value.charAt(i);
                var allowed = _this.whitelist.some(function (v) {
                    return char === v;
                });
                if (allowed) {
                    result += char;
                }
                if (result.length === 6) {
                    _this.el.nativeElement.value = result;
                    return { value: void 0 };
                }
            };
            for (var i = 0; i < value.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            _this.el.nativeElement.value = result;
        }, 1);
    };
    return InputFilterDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], InputFilterDirective.prototype, "appInputFilter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InputFilterDirective.prototype, "onKeyDown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('paste', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InputFilterDirective.prototype, "onPaste", null);
InputFilterDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appInputFilter]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], InputFilterDirective);

var _a;
//# sourceMappingURL=input-filter.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map