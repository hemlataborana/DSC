function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/details/details.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _apply_apply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./apply/apply.component */
    "./src/app/apply/apply.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'dsc';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_5__["ApplyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/pricing/pricing.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/details/details.component.ts");
    /* harmony import */


    var _topbutton_topbutton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./topbutton/topbutton.component */
    "./src/app/topbutton/topbutton.component.ts");
    /* harmony import */


    var _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./apply/apply.component */
    "./src/app/apply/apply.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"], _topbutton_topbutton_component__WEBPACK_IMPORTED_MODULE_8__["TopbuttonComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__["ApplyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"], _topbutton_topbutton_component__WEBPACK_IMPORTED_MODULE_8__["TopbuttonComponent"], _apply_apply_component__WEBPACK_IMPORTED_MODULE_9__["ApplyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/apply/apply.component.ts":
  /*!******************************************!*\
    !*** ./src/app/apply/apply.component.ts ***!
    \******************************************/

  /*! exports provided: ApplyComponent */

  /***/
  function srcAppApplyApplyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplyComponent", function () {
      return ApplyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplyComponent = /*#__PURE__*/function () {
      function ApplyComponent() {
        _classCallCheck(this, ApplyComponent);
      }

      _createClass(ApplyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplyComponent;
    }();

    ApplyComponent.ɵfac = function ApplyComponent_Factory(t) {
      return new (t || ApplyComponent)();
    };

    ApplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplyComponent,
      selectors: [["app-apply"]],
      decls: 69,
      vars: 0,
      consts: [["id", "applysection"], [1, "container", 2, "text-align", "center", "margin-top", "2vw"], [1, "theme-title"], ["data-wow-offset", "50", "data-wow-delay", "0.3s", 1, "wow", "bounceIn", "animated", 2, "visibility", "visible", "animation-delay", "0.3s", "animation-name", "bounceIn"], ["id", "new"], [2, "padding", "30px"], [1, "row"], [1, "col-lg-12"], [1, "timeline"], [1, "timeline-image"], [1, "timeline-panel"], [1, "timeline-heading"], [1, "subheading"], [1, "timeline-body"], [1, "text-muted"], [1, "timeline-inverted"], [2, "padding", "20px"]],
      template: function ApplyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How To Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We would like you to take a tour of our majestic journey, and want to share how we use our culture to impact our clients and community.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Step 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choose Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The year we established and strengthen our peers in Jhunjhunu city.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Step 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Form Filling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "We established as a registered firm by the name \"Choudhary Battery House\" which initially meant to have only a retail business of Exide batteries for all type of vehicles and Inverter Batteries ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Step 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Complete Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Step 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "DSC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ready!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".timeline[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 0;\r\n    list-style: none; }\r\n.timeline[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 40px;\r\n    width: 2px;\r\n    margin-left: -1.5px;\r\n    content: '';\r\n    background-color: #e9ecef; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 50px;\r\n    margin-bottom: 50px; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\r\n    display: table;\r\n    content: ' '; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    clear: both; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    float: right;\r\n    width: 100%;\r\n    padding: 0 20px 0 100px;\r\n    text-align: left; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%]:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%]:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: 100;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-left: 0;\r\n    text-align: center;\r\n    color: white;\r\n    border: 7px solid #e9ecef;\r\n    border-radius: 100%;\r\n    background-color: #6ab04c; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    line-height: 14px;\r\n    margin-top: 12px; }\r\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0 20px 0 100px;\r\n    text-align: left; }\r\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0; }\r\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0; }\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0; }\r\n.timeline[_ngcontent-%COMP%]   .timeline-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    color: inherit; }\r\n.timeline[_ngcontent-%COMP%]   .timeline-heading[_ngcontent-%COMP%]   h4.subheading[_ngcontent-%COMP%] {\r\n    text-transform: none; }\r\n.timeline[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   .timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0; }\r\n@media (min-width: 768px) {\r\n    .timeline[_ngcontent-%COMP%]:before {\r\n        left: 50%; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n        min-height: 100px;\r\n        margin-bottom: 100px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 41%;\r\n        padding: 0 20px 20px 30px;\r\n        text-align: right; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\r\n        left: 50%;\r\n        width: 100px;\r\n        height: 100px;\r\n        margin-left: -50px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        line-height: 18px;\r\n        margin-top: 16px; }\r\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n        float: right;\r\n        padding: 0 30px 20px 20px;\r\n        text-align: left; } }\r\n@media (min-width: 992px) {\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n        min-height: 150px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\r\n        padding: 0 20px 20px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\r\n        width: 150px;\r\n        height: 150px;\r\n        margin-left: -75px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        line-height: 26px;\r\n        margin-top: 30px; }\r\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n        padding: 0 20px 20px; } }\r\n@media (min-width: 1200px) {\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n        min-height: 170px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-panel[_ngcontent-%COMP%] {\r\n        padding: 0 20px 20px 100px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%] {\r\n        width: 170px;\r\n        height: 170px;\r\n        margin-left: -85px; }\r\n    .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .timeline-image[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        margin-top: 40px; }\r\n    .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n        padding: 0 100px 20px 20px; } }\r\n.theme-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 95px 0 0 0;\r\n}\r\n.theme-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.theme-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  width: 25px;\r\n  height: 3px;\r\n  position: absolute;\r\n  bottom: -25px;\r\n  left: 50%;\r\n  margin-left: -12px;\r\n}\r\n.theme-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 75%;\r\n  margin: 60px auto 0 auto;\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n  width: 2.5vw;\r\n  background-color: #6ab04c;\r\n  color: #6ab04c;\r\n  block-size: .3vw;\r\n}\r\n.img-circle[_ngcontent-%COMP%]{\r\n  border-radius: 50%;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQixFQUFFO0FBQ3RCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QixFQUFFO0FBQy9CO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBRTtBQUN6QjtJQUNJLGNBQWM7SUFDZCxZQUFZLEVBQUU7QUFDbEI7SUFDSSxXQUFXLEVBQUU7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCLEVBQUU7QUFDdEI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixvQkFBb0IsRUFBRTtBQUMxQjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQixFQUFFO0FBQzFCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFFO0FBQy9CO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBRTtBQUN0QjtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCLEVBQUU7QUFDdEI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixvQkFBb0IsRUFBRTtBQUMxQjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQixFQUFFO0FBQzFCO0lBQ0ksZ0JBQWdCLEVBQUU7QUFDdEI7SUFDSSxhQUFhO0lBQ2IsY0FBYyxFQUFFO0FBQ3BCO0lBQ0ksb0JBQW9CLEVBQUU7QUFDMUI7O0lBRUksZ0JBQWdCLEVBQUU7QUFFdEI7SUFDSTtRQUNJLFNBQVMsRUFBRTtJQUNmO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQixFQUFFO0lBQzFCO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsaUJBQWlCLEVBQUU7SUFDdkI7UUFDSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0IsRUFBRTtJQUN4QjtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUU7SUFDdEI7UUFDSSxZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLGdCQUFnQixFQUFFLEVBQUU7QUFFNUI7SUFDSTtRQUNJLGlCQUFpQixFQUFFO0lBQ3ZCO1FBQ0ksb0JBQW9CLEVBQUU7SUFDMUI7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQixFQUFFO0lBQ3hCO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBRTtJQUN0QjtRQUNJLG9CQUFvQixFQUFFLEVBQUU7QUFFaEM7SUFDSTtRQUNJLGlCQUFpQixFQUFFO0lBQ3ZCO1FBQ0ksMEJBQTBCLEVBQUU7SUFDaEM7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQixFQUFFO0lBQ3hCO1FBQ0ksZ0JBQWdCLEVBQUU7SUFDdEI7UUFDSSwwQkFBMEIsRUFBRSxFQUFFO0FBRWxDO0VBQ0Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQjs7Ozs7dUJBS3FCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC50aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxyXG4udGltZWxpbmU6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjsgfVxyXG4udGltZWxpbmUgPiBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxyXG4udGltZWxpbmUgPiBsaTphZnRlciwgLnRpbWVsaW5lID4gbGk6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY29udGVudDogJyAnOyB9XHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoOyB9XHJcbi50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4udGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDsgfVxyXG4udGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMTRweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwOyB9XHJcbi50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YzsgfVxyXG4udGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4OyB9XHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMTVweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwOyB9XHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE0cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDsgfVxyXG4udGltZWxpbmUgPiBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuLnRpbWVsaW5lIC50aW1lbGluZS1oZWFkaW5nIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWhlYWRpbmcgaDQuc3ViaGVhZGluZyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxyXG4udGltZWxpbmUgLnRpbWVsaW5lLWJvZHkgPiB1bCxcclxuLnRpbWVsaW5lIC50aW1lbGluZS1ib2R5ID4gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC50aW1lbGluZTpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDUwJTsgfVxyXG4gICAgLnRpbWVsaW5lID4gbGkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4OyB9XHJcbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA0MSU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHggMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01MHB4OyB9XHJcbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4OyB9XHJcbiAgICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfSB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC50aW1lbGluZSA+IGxpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDsgfVxyXG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDsgfVxyXG4gICAgLnRpbWVsaW5lID4gbGkgLnRpbWVsaW5lLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTc1cHg7IH1cclxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7IH1cclxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDsgfSB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAudGltZWxpbmUgPiBsaSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTcwcHg7IH1cclxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHggMTAwcHg7IH1cclxuICAgIC50aW1lbGluZSA+IGxpIC50aW1lbGluZS1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04NXB4OyB9XHJcbiAgICAudGltZWxpbmUgPiBsaSAudGltZWxpbmUtaW1hZ2UgaDQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cclxuICAgIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwMHB4IDIwcHggMjBweDsgfSB9XHJcblxyXG4gICAgLnRoZW1lLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA5NXB4IDAgMCAwO1xyXG59XHJcbi50aGVtZS10aXRsZSBoMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50aGVtZS10aXRsZSBoMjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0yNXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTEycHg7XHJcbn1cclxuLnRoZW1lLXRpdGxlIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogNjBweCBhdXRvIDAgYXV0bztcclxufVxyXG5ocntcclxuICB3aWR0aDogMi41dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YztcclxuICBjb2xvcjogIzZhYjA0YztcclxuICBibG9jay1zaXplOiAuM3Z3O1xyXG59XHJcbi5pbWctY2lyY2xle1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvKiB6LWluZGV4OiA5MDtcclxuICBsZWZ0OiAxO1xyXG4gIHdpZHRoOiAxNzAgdnc7XHJcbiAgaGVpZ2h0OiAxMC4xdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMC4wNXZ3OyAqL1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-apply',
          templateUrl: './apply.component.html',
          styleUrls: ['./apply.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/details/details.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/details/details.component.ts ***!
    \**********************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DetailsComponent = /*#__PURE__*/function () {
      function DetailsComponent() {
        _classCallCheck(this, DetailsComponent);
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
      return new (t || DetailsComponent)();
    };

    DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailsComponent,
      selectors: [["app-details"]],
      decls: 88,
      vars: 0,
      consts: [["id", "about-section"], [1, "container", 2, "text-align", "center", "margin-top", "2vw"], [1, "theme-title"], [1, "bounceIn", "animated", "heading-style"], [2, "padding", "20px"], [1, "row"], [1, "col-sm-4"], [1, "team-member", 2, "border", "1vw"], [1, "text-muted"], [1, "list-inline", "social-buttons"], [1, "list-inline-item"], ["href", "#"], [1, "fa", "fa-twitter"], [1, "fa", "fa-facebook"], [1, "fa", "fa-linkedin"], [1, "team-member"]],
      template: function DetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Digital Signature Certificate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Meet our team who is working hard day in day out to make Life better for the society since 1987.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Certificate Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " DSC can only be used for signing documents. The most popular usage of is signing the PDF file for Tax Returns, MCA and other websites.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Encrypt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " DSC can only be used to encrypt a document, it is mainly used in the tender portal. Encrypt DSC is fit for e-commerce documents, legal documentation and sharing documents that are highly confidential and contains information that needs to be protected. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign & Encrypt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " DSC can be used for both signing and encrypting. It is convenient for users who need to authenticate and maintain the confidentiality of the information shared. Its usage includes filing government form and application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Certificate Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Class 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " It is used in various ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "form-filling, online registration, email attestation, income tax filing, LLP registration, IE code registration, Form 16,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "etc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Class 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " it is more secure in comparison to class 2 certificate, This is the safest of all certificates. It is used in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " E-tendering, Patent and trademark e-filing, Customs e-filing, E-procurement, E-biding E-auction,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "etc ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Certificate User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Individuals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Organization ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Foreign Individuals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Foreign Organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Import Export Certificates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%] {\r\n    margin: 60px 0 0 0;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%] {\r\n    width: 33.333333333%;\r\n    padding: 0 15px;\r\n    overflow: hidden;\r\n    margin-bottom: 30px;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(230,230,230,0.9);\r\n    padding: 55px 0 20px 0;\r\n    opacity: 0;\r\n    transform: scale(1,0);  \r\n    transform-origin: 0% 0%;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color:#696f78;\r\n    text-transform: capitalize;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    line-height: 40px;\r\n    padding: 0 18px;\r\n    border-width: 1px;\r\n    display: inline-block;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    display: block;\r\n    margin: 22px 0 15px 0;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #373a3f;\r\n    padding: 0 40px;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    opacity: 0; \r\n    transition-delay: 0.2s;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\r\n    background: #e6e6e6;\r\n    overflow: hidden;\r\n    position: relative;\r\n    min-height: 70px;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n    color:#696f78;\r\n    margin-top: 12px;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color:#373a3f;\r\n    margin: 5px 0 8px 0;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .member-name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]:hover   .member-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    transform: translate3D(0,-100px,0);\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: 13px;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 47px;\r\n    line-height: 45px;\r\n    font-size: 18px;\r\n    margin: 0 7px;\r\n    border:1px solid transparent;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%], .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\r\n    color: #677fb5;\r\n    border-color:#677fb5;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%], .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n    color: #70c2e9;\r\n    border-color:#70c2e9;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%], .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n    color: #d8545d;\r\n    border-color:#d8545d;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%], .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n    color: #007ab9;\r\n    border-color:#007ab9;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]:hover, .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover {\r\n    background: #677fb5;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover, .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:hover {\r\n    background: #70c2e9;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:hover, .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:hover {\r\n    background: #d8545d;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:hover, .blog-details-post-wrapper[_ngcontent-%COMP%]   .post-share-area[_ngcontent-%COMP%]   .share-icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:hover {\r\n    background: #007ab9;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color:#fff !important;\r\n  }\r\n  #team-section[_ngcontent-%COMP%]   .team-member-wrapper[_ngcontent-%COMP%]   .single-team-member[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    top:0;\r\n    left: 0;\r\n    transform: translate3D(0,100px,0);\r\n  }\r\n  .team-member[_ngcontent-%COMP%] {\r\n      margin-bottom: 50px;\r\n      text-align: center; }\r\n  .team-member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 250px;\r\n      height: 250px;\r\n      border: 8px solid #dfdfdf; }\r\n  .team-member[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n      margin-top: 25px;\r\n      margin-bottom: 0;\r\n      text-transform: none; }\r\n  .team-member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      margin-top: 10px;}\r\n  ul.social-buttons[_ngcontent-%COMP%] {\r\n      margin-bottom: 0;\r\n      margin-top: 10px;}\r\n  ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      font-size: 20px;\r\n      line-height: 40px;\r\n      display: block;\r\n      width: 40px;\r\n      height: 40px;\r\n      transition: all 0.3s;\r\n      color: white;\r\n      border-radius: 100%;\r\n      outline: none;\r\n      background-color: #212529; }\r\n  ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, ul.social-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      background-color: #6ab04c; }\r\n  .mx-auto[_ngcontent-%COMP%]{margin-right:auto!important}\r\n  .mx-auto[_ngcontent-%COMP%]{margin-left:auto!important}\r\n  .rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}\r\n  hr[_ngcontent-%COMP%]{\r\n    width: 2.5vw;\r\n    background-color: #6ab04c;\r\n    color: #6ab04c;\r\n    block-size: .3vw;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsVUFBVTtJQUtGLHFCQUFxQixFQUNBLFNBQVMsRUFDTCwwQkFBMEI7SUFDM0QsdUJBQXVCO0VBQ3pCO0VBQ0E7O0lBRUUsYUFBYTtJQUNiLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7OztJQUdFLFVBQVUsRUFDc0IsV0FBVztJQUMzQyxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7SUFLRixtQkFBbUI7RUFDN0I7RUFDQTs7O0lBR0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBS1Ysa0NBQWtDO0VBQzVDO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsNEJBQTRCO0VBQzlCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLG9CQUFvQjtFQUN0QjtFQUNBOztJQUVFLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7RUFDQTs7SUFFRSxjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLG9CQUFvQjtFQUN0QjtFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLEtBQUs7SUFDTCxPQUFPO0lBS0MsaUNBQWlDO0VBQzNDO0VBR0E7TUFDSSxtQkFBbUI7TUFDbkIsa0JBQWtCLEVBQUU7RUFDeEI7TUFDSSxZQUFZO01BQ1osYUFBYTtNQUNiLHlCQUF5QixFQUFFO0VBQy9CO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixvQkFBb0IsRUFBRTtFQUMxQjtNQUNJLGdCQUFnQixDQUFDO0VBRXJCO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQixDQUFDO0VBQ3JCO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsV0FBVztNQUNYLFlBQVk7TUFHWixvQkFBb0I7TUFDcEIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IseUJBQXlCLEVBQUU7RUFDL0I7TUFDSSx5QkFBeUIsRUFBRTtFQUUvQixTQUFTLDJCQUEyQjtFQUNwQyxTQUFTLDBCQUEwQjtFQUVuQyxnQkFBZ0IsMkJBQTJCO0VBQzNDO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuZmxvYXQtbGVmdCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzJTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIsXHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5pbWcge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5pbWcgLm9wYWNpdHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLDIzMCwyMzAsMC45KTtcclxuICAgIHBhZGRpbmc6IDU1cHggMCAyMHB4IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsMCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLDApO1xyXG4gICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEsMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwwKTtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTsgLyogSUUgOSAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5pbWcgLm9wYWNpdHkgaDQsXHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5pbWcgLm9wYWNpdHkgc3BhbiB7XHJcbiAgICBjb2xvcjojNjk2Zjc4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAuaW1nIC5vcGFjaXR5IGg0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMCAxOHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAuaW1nIC5vcGFjaXR5IHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMnB4IDAgMTVweCAwO1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLmltZyAub3BhY2l0eSBwIHtcclxuICAgIGNvbG9yOiAjMzczYTNmO1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLmltZyAub3BhY2l0eSBoNCxcclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLmltZyAub3BhY2l0eSBzcGFuLFxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAuaW1nIC5vcGFjaXR5IHAge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4yczsgLyogU2FmYXJpICovXHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXI6aG92ZXIgLmltZyAub3BhY2l0eSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXI6aG92ZXIgLmltZyAub3BhY2l0eSBoNCxcclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXI6aG92ZXIgLmltZyAub3BhY2l0eSBzcGFuLFxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlcjpob3ZlciAuaW1nIC5vcGFjaXR5IHAge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAubWVtYmVyLW5hbWUgaDYge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjojNjk2Zjc4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSBwIHtcclxuICAgIGNvbG9yOiMzNzNhM2Y7XHJcbiAgICBtYXJnaW46IDVweCAwIDhweCAwO1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXI6aG92ZXIgLm1lbWJlci1uYW1lIGg2LFxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlcjpob3ZlciAubWVtYmVyLW5hbWUgcCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwtMTAwcHgsMCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwtMTAwcHgsMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwtMTAwcHgsMCk7XHJcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwtMTAwcHgsMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwtMTAwcHgsMCk7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAubWVtYmVyLW5hbWUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSB1bCBsaSBhIHtcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDAgN3B4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSB1bCBsaTpudGgtY2hpbGQoMSkgYSxcclxuICAuYmxvZy1kZXRhaWxzLXBvc3Qtd3JhcHBlciAucG9zdC1zaGFyZS1hcmVhIC5zaGFyZS1pY29uIGxpOm50aC1jaGlsZCgyKSBhIHtcclxuICAgIGNvbG9yOiAjNjc3ZmI1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiM2NzdmYjU7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAubWVtYmVyLW5hbWUgdWwgbGk6bnRoLWNoaWxkKDIpIGEsXHJcbiAgLmJsb2ctZGV0YWlscy1wb3N0LXdyYXBwZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc2hhcmUtaWNvbiBsaTpudGgtY2hpbGQoMykgYSB7XHJcbiAgICBjb2xvcjogIzcwYzJlOTtcclxuICAgIGJvcmRlci1jb2xvcjojNzBjMmU5O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLm1lbWJlci1uYW1lIHVsIGxpOm50aC1jaGlsZCgzKSBhLFxyXG4gIC5ibG9nLWRldGFpbHMtcG9zdC13cmFwcGVyIC5wb3N0LXNoYXJlLWFyZWEgLnNoYXJlLWljb24gbGk6bnRoLWNoaWxkKDQpIGEge1xyXG4gICAgY29sb3I6ICNkODU0NWQ7XHJcbiAgICBib3JkZXItY29sb3I6I2Q4NTQ1ZDtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSB1bCBsaTpudGgtY2hpbGQoNCkgYSxcclxuICAuYmxvZy1kZXRhaWxzLXBvc3Qtd3JhcHBlciAucG9zdC1zaGFyZS1hcmVhIC5zaGFyZS1pY29uIGxpOm50aC1jaGlsZCg1KSBhIHtcclxuICAgIGNvbG9yOiAjMDA3YWI5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiMwMDdhYjk7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAubWVtYmVyLW5hbWUgdWwgbGk6bnRoLWNoaWxkKDEpIGE6aG92ZXIsXHJcbiAgLmJsb2ctZGV0YWlscy1wb3N0LXdyYXBwZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc2hhcmUtaWNvbiBsaTpudGgtY2hpbGQoMikgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjc3ZmI1O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLm1lbWJlci1uYW1lIHVsIGxpOm50aC1jaGlsZCgyKSBhOmhvdmVyLFxyXG4gIC5ibG9nLWRldGFpbHMtcG9zdC13cmFwcGVyIC5wb3N0LXNoYXJlLWFyZWEgLnNoYXJlLWljb24gbGk6bnRoLWNoaWxkKDMpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzcwYzJlOTtcclxuICB9XHJcbiAgI3RlYW0tc2VjdGlvbiAudGVhbS1tZW1iZXItd3JhcHBlciAuc2luZ2xlLXRlYW0tbWVtYmVyIC5tZW1iZXItbmFtZSB1bCBsaTpudGgtY2hpbGQoMykgYTpob3ZlcixcclxuICAuYmxvZy1kZXRhaWxzLXBvc3Qtd3JhcHBlciAucG9zdC1zaGFyZS1hcmVhIC5zaGFyZS1pY29uIGxpOm50aC1jaGlsZCg0KSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkODU0NWQ7XHJcbiAgfVxyXG4gICN0ZWFtLXNlY3Rpb24gLnRlYW0tbWVtYmVyLXdyYXBwZXIgLnNpbmdsZS10ZWFtLW1lbWJlciAubWVtYmVyLW5hbWUgdWwgbGk6bnRoLWNoaWxkKDQpIGE6aG92ZXIsXHJcbiAgLmJsb2ctZGV0YWlscy1wb3N0LXdyYXBwZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc2hhcmUtaWNvbiBsaTpudGgtY2hpbGQoNSkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YWI5O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLm1lbWJlci1uYW1lIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjdGVhbS1zZWN0aW9uIC50ZWFtLW1lbWJlci13cmFwcGVyIC5zaW5nbGUtdGVhbS1tZW1iZXIgLm1lbWJlci1uYW1lIHVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsMTAwcHgsMCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwxMDBweCwwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLDEwMHB4LDApO1xyXG4gICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsMTAwcHgsMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwxMDBweCwwKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRlYW0tbWVtYmVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiAgLnRlYW0tbWVtYmVyIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgYm9yZGVyOiA4cHggc29saWQgI2RmZGZkZjsgfVxyXG4gIC50ZWFtLW1lbWJlciBoNCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XHJcbiAgLnRlYW0tbWVtYmVyIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O31cclxuICBcclxuICB1bC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7fVxyXG4gIHVsLnNvY2lhbC1idXR0b25zIGxpIGEge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTsgfVxyXG4gIHVsLnNvY2lhbC1idXR0b25zIGxpIGE6YWN0aXZlLCB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmZvY3VzLCB1bC5zb2NpYWwtYnV0dG9ucyBsaSBhOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YzsgfVxyXG4gIFxyXG4gIC5teC1hdXRve21hcmdpbi1yaWdodDphdXRvIWltcG9ydGFudH1cclxuICAubXgtYXV0b3ttYXJnaW4tbGVmdDphdXRvIWltcG9ydGFudH1cclxuICBcclxuICAucm91bmRlZC1jaXJjbGV7Ym9yZGVyLXJhZGl1czo1MCUhaW1wb3J0YW50fVxyXG4gIGhye1xyXG4gICAgd2lkdGg6IDIuNXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhYjA0YztcclxuICAgIGNvbG9yOiAjNmFiMDRjO1xyXG4gICAgYmxvY2stc2l6ZTogLjN2dztcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-details',
          templateUrl: './details.component.html',
          styleUrls: ['./details.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 27,
      vars: 0,
      consts: [["id", "contactsection"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "footer", 2, "background-color", "black"], [1, "container"], [1, "row", "align-items-center"], [2, "text-align", "center", "margin-top", "5vw"], [1, "icon-bar", 2, "text-align", "center"], ["href", "#", 1, "facebook"], [1, "fa", "fa-facebook"], ["href", "#", 1, "twitter"], [1, "fa", "fa-twitter"], ["href", "#", 1, "google"], [1, "fa", "fa-google"], ["href", "#", 1, "linkedin"], [1, "fa", "fa-linkedin"], ["href", "#", 1, "youtube"], [1, "fa", "fa-youtube"], [2, "text-align", "center", "margin-top", "3vw"], [1, "list-inline", "quicklinks"], [1, "list-inline-item"], ["href", "#"], [1, "copyright", 2, "color", "white"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Terms of Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Copyright \xA9 Accounting 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: circle;\r\n  text-align: center;\r\n  padding: 16px;\r\n  transition: all 0.3s ease;\r\n  color: white;\r\n  font-size: 20px;\r\n  \r\n}\r\n\r\n\r\n\r\n.icon-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #000;\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%] {\r\n  background: #3B5998;\r\n  color: white;\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%] {\r\n  background: #55ACEE;\r\n  color: white;\r\n}\r\n\r\n.google[_ngcontent-%COMP%] {\r\n  background: #dd4b39;\r\n  color: white;\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%] {\r\n  background: #007bb5;\r\n  color: white;\r\n}\r\n\r\n.youtube[_ngcontent-%COMP%] {\r\n  background: #bb0000;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBLHlEQUF5RDs7QUFDekQ7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJhciBhIHtcclxuICBkaXNwbGF5OiBjaXJjbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLyogU3R5bGUgdGhlIHNvY2lhbCBtZWRpYSBpY29ucyB3aXRoIGNvbG9yLCBpZiB5b3Ugd2FudCAqL1xyXG4uaWNvbi1iYXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnR3aXR0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtlZGluIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnlvdXR1YmUge1xyXG4gIGJhY2tncm91bmQ6ICNiYjAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topbutton_topbutton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../topbutton/topbutton.component */
    "./src/app/topbutton/topbutton.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 13,
      vars: 0,
      consts: [["id", "hero", 1, "d-flex", "justify-cntent-center", "align-items-center"], ["id", "heroCarousel", "data-ride", "carousel", 1, "container", "carousel", "carousel-fade"], [1, "carousel-item", "active", 2, "margin-top", "7vw"], [1, "carousel-container"], [1, "animated", "fadeInUp"], ["href", "#about-section", 1, "btn-get-started", "animated", "fadeInUp", "scrollto"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accounting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Digital Signature Certificates or DSC or Digital Signature are being adopted by various government agencies and now is a statutory requirement in various applications.There are various Type and Class of DSC, the information below would help you to arrive to the right certificate for your needs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-topbutton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_topbutton_topbutton_component__WEBPACK_IMPORTED_MODULE_1__["TopbuttonComponent"]],
      styles: ["#hero[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 70vh;\r\n    overflow: hidden;\r\n    position: relative;\r\n    background: black;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    padding-top: 70px;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    margin-bottom: 30px;\r\n    font-size: 48px;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n    margin: 0 auto 30px auto;\r\n    color: #fff;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n    color: #6ab04c;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   .carousel-control-next-icon[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-prev-icon[_ngcontent-%COMP%] {\r\n    \r\n    font-size: 48px;\r\n    line-height: 1;\r\n    width: auto;\r\n    height: auto;\r\n    color: #6ab04c;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%] {\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    display: inline-block;\r\n    padding: 12px 32px;\r\n    border-radius: 50px;\r\n    transition: 0.5s;\r\n    line-height: 1;\r\n    margin: 10px;\r\n    color: #fff;\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n    border: 2px solid #6ab04c;\r\n  }\r\n  \r\n  #hero[_ngcontent-%COMP%]   .btn-get-started[_ngcontent-%COMP%]:hover {\r\n    background: #6ab04c;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  @media (min-width: 1024px) {\r\n    #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      width: 60%;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%], #hero[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%] {\r\n      width: 5%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    #hero[_ngcontent-%COMP%] {\r\n      height: 80vh;\r\n    }\r\n    #hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      font-size: 28px;\r\n    }\r\n  }\r\n  \r\n  .hero-waves[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    position: relative;\r\n    background: #2a2c39;\r\n  }\r\n  \r\n  .hero-waves[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .hero-waves[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%]    + .wave[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBR0M7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsU0FBUztJQUNYO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG5cclxuICNoZXJvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAjaGVybyAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAjaGVybyBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAjaGVybyBwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHggYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAjaGVybyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAjaGVybyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBjb2xvcjogIzZhYjA0YztcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLCAjaGVybyAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4gICAgLyogYmFja2dyb3VuZDogbm9uZTsgKi9cclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzZhYjA0YztcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi1nZXQtc3RhcnRlZCB7XHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHggMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzZhYjA0YztcclxuICB9XHJcbiAgXHJcbiAgI2hlcm8gLmJ0bi1nZXQtc3RhcnRlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmFiMDRjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICNoZXJvIHAge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtcHJldiwgI2hlcm8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjaGVybyB7XHJcbiAgICAgIGhlaWdodDogODB2aDtcclxuICAgIH1cclxuICAgICNoZXJvIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaGVyby13YXZlcyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzJhMmMzOTtcclxuICB9XHJcbiAgXHJcbiAgLmhlcm8td2F2ZXMgLndhdmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmhlcm8td2F2ZXMgLndhdmUgKyAud2F2ZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 22,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], [1, "navbar", "navbar-inverse", "navbar-fixed-top"], [1, "container-fluid", 2, "background-color", "black"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand", 2, "color", "#6ab04c"], [1, "nav", "navbar-nav"], ["href", "#", 1, "nav-link"], ["href", "#about-section", 1, "nav-link"], ["href", "#pricing", 1, "nav-link"], ["href", "#applysection", 1, "nav-link"], ["href", "#contactsection", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Accounting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".social-part[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\r\n    padding-right:20px;\r\n    \r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-right: 20px;\r\n    color: #6ab04c;\r\n    \r\n   \r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    margin-right: 20px;\r\n    color: white\r\n    \r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7OztBQUdsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCOzs7QUFHSjtBQUlBLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtcGFydCAuZmF7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICBcclxufVxyXG51bCBsaSBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2YWIwNGM7XHJcbiAgICBcclxuICAgXHJcbn0gXHJcbnVsIGxpIGE6aG92ZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIFxyXG4gICBcclxufSBcclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pricing/pricing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pricing/pricing.component.ts ***!
    \**********************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    PricingComponent.ɵfac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 80,
      vars: 0,
      consts: [["id", "pricing"], [1, "container", 2, "text-align", "center", "margin-top", "2vw"], [1, "pricing"], [1, "plan"], [1, "price"], [1, "features"], [1, "fas", "fa-check-circle"], ["onclick", "window.location.href = 'https://www.e-mudhra.com/portal/PaperlessDSC/Index.aspx?X=R0tYakNOdGdjTXFhVTBHUVNWeitoVyttYUNoVkE0NFM=&Y=TE85RTNtRmZLOTA9';"], ["onclick", "window.location.href = 'https://www.e-mudhra.com/RA/PublicIndex.aspx?x=MW9UWUcrTUFZT2ZMWGFiZ1oxd2hQUGZockRkNDYyaUM=';"], [1, "plan", "popular"], ["onclick", "window.location.href = 'https://www.e-mudhra.com/RA/PublicIndex.aspx?x=MW9UWUcrTUFZT2MwUi9LTkRUS09XalpVWk9sWTNCN0E=';"], ["onclick", "window.location.href = 'https://www.e-mudhra.com/RA/PublicIndex.aspx?x=ZDJUOHRHVFhoYURwL2crUXdENHVDV293eDdrVnkzUDI=';"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose the plan that fits for your need ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Class 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(Certficate only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u20B9 2200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Validity 2 yrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " incl. GST charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " incl. Token charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " incl. Delivery Charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Individual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Organisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Most Popular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Class 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(Certficate only)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u20B9 600 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Validity 2 yrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " incl. GST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " incl. Token charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " incl. Delivery Charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Individual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Organisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Class 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "(Certficate with Encyption)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u20B9 2600");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Validity 2 yrs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " incl. GST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " incl. Token charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " incl. Delivery Charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Individual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Organisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Source Sans Pro\", sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #dff9fb;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.pricing[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.plan[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 2.5rem;\r\n    margin: 12px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n      font-size: 22px;\r\n      margin-bottom: 0.1rem;\r\n    }\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n      margin-bottom: 1rem;\r\n      font-size: 30px;\r\n    }\r\n\r\nul.features[_ngcontent-%COMP%] {\r\n      list-style-type: none;\r\n      text-align: center;}\r\n\r\nli[_ngcontent-%COMP%] {\r\n        margin: 8px;}\r\n\r\n.fas[_ngcontent-%COMP%] {\r\n          margin-right: 4px;\r\n        }\r\n\r\n.fa-check-circle[_ngcontent-%COMP%] {\r\n          color: #6ab04c;\r\n        }\r\n\r\n.fa-times-circle[_ngcontent-%COMP%] {\r\n          color: #eb4d4b;\r\n        }\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\r\n      border: none;\r\n      width: 60%;\r\n      padding: 12px 35px;\r\n      margin-top: 1rem;\r\n      background-color: #6ab04c;\r\n      color: #fff;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      font-size: 16px;\r\n    }\r\n\r\n.popular[_ngcontent-%COMP%] {\r\n      border: 2px solid #6ab04c;\r\n      position: relative;\r\n      transform: scale(1.08);\r\n    }\r\n\r\nspan[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: -20px;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        background-color: #6ab04c;\r\n        color: #fff;\r\n        padding: 4px 20px;\r\n        font-size: 18px;\r\n        border-radius: 5px;\r\n      }\r\n\r\n[_ngcontent-%COMP%]:hover {\r\n      box-shadow: 5px 7px 67px -28px rgba(0, 0, 0, 0.37);\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUZBQW1GOztBQUVuRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDSTtNQUNFLGVBQWU7TUFDZixxQkFBcUI7SUFDdkI7O0FBQ0o7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNJO01BQ0UsbUJBQW1CO01BQ25CLGVBQWU7SUFDakI7O0FBRUE7TUFDRSxxQkFBcUI7TUFDckIsa0JBQWtCLENBQUM7O0FBQ25CO1FBQ0UsV0FBVyxDQUFDOztBQUNaO1VBQ0UsaUJBQWlCO1FBQ25COztBQUNBO1VBQ0UsY0FBYztRQUNoQjs7QUFDQTtVQUNFLGNBQWM7UUFDaEI7O0FBSUo7O01BRUUsWUFBWTtNQUNaLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztBQUVBO01BQ0UseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixzQkFBc0I7SUFDeEI7O0FBQ0U7UUFDRSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtNQUNwQjs7QUFDRjtNQUNFLGtEQUFrRDtJQUNwRCIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjlmYjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbi5wcmljaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucGxhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgIH1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwuZmVhdHVyZXMge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDhweDt9XHJcbiAgICAgICAgLmZhcyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWNoZWNrLWNpcmNsZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzZhYjA0YztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ViNGQ0YjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgYnV0dG9uIHtcclxuXHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogMTJweCAzNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiMDRjO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdWxhciB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2YWIwNGM7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiMDRjO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIDpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDVweCA3cHggNjdweCAtMjhweCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pricing',
          templateUrl: './pricing.component.html',
          styleUrls: ['./pricing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/topbutton/topbutton.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/topbutton/topbutton.component.ts ***!
    \**************************************************/

  /*! exports provided: TopbuttonComponent */

  /***/
  function srcAppTopbuttonTopbuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbuttonComponent", function () {
      return TopbuttonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show-scroll": a0
      };
    };

    var TopbuttonComponent = /*#__PURE__*/function () {
      function TopbuttonComponent() {
        _classCallCheck(this, TopbuttonComponent);

        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
      }

      _createClass(TopbuttonComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
          } else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 5);
            }
          })();
        }
      }]);

      return TopbuttonComponent;
    }();

    TopbuttonComponent.ɵfac = function TopbuttonComponent_Factory(t) {
      return new (t || TopbuttonComponent)();
    };

    TopbuttonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbuttonComponent,
      selectors: [["app-topbutton"]],
      hostBindings: function TopbuttonComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TopbuttonComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[1, "scroll-to-top", 3, "ngClass", "click"]],
      template: function TopbuttonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbuttonComponent_Template_button_click_0_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Top ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showScroll));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    background: #6ab04c;;\r\n    color: white;\r\n    padding: 20px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    ;\r\n  }\r\n  \r\n  .scroll-to-top[_ngcontent-%COMP%] {\r\n      position: fixed;\r\n      bottom: 15px;\r\n      right: 15px;\r\n      opacity: 0;\r\n      transition: all .2s ease-in-out;\r\n  }\r\n  \r\n  .show-scroll[_ngcontent-%COMP%] {\r\n      opacity: 1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYnV0dG9uL3RvcGJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjs7RUFFcEI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsWUFBWTtNQUNaLFdBQVc7TUFDWCxVQUFVO01BQ1YsK0JBQStCO0VBQ25DOztFQUVBO01BQ0ksVUFBVTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdG9wYnV0dG9uL3RvcGJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzZhYjA0Yzs7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgO1xyXG4gIH1cclxuICBcclxuICAuc2Nyb2xsLXRvLXRvcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnNob3ctc2Nyb2xsIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbuttonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbutton',
          templateUrl: './topbutton.component.html',
          styleUrls: ['./topbutton.component.css']
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HEMLATA\DSC\DSC\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map