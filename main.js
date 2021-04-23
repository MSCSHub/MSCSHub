(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(route, router, formBuilder, auth) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = '/';
        this.error = '';
        this.auth.isLoggedIn.subscribe(isLoggedIn => {
            if (isLoggedIn) {
                this.router.navigate(['/']);
            }
        });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        var _a;
        return (_a = this.loginForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    onSubmit() {
        var _a;
        this.submitted = true;
        if ((_a = this.loginForm) === null || _a === void 0 ? void 0 : _a.invalid) {
            return;
        }
        this.loading = true;
        this.auth.signIn(this.f.email.value, this.f.password.value)
            .then(() => { this.loading = false; })
            .catch(error => {
            this.loading = false;
            this.processError(error);
        });
    }
    processError(error) {
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
            this.error = "Your account information was entered incorrectly.";
            // } else if(error.code === "auth/wrong-password") {
        }
        else {
            this.error = error.message;
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 10, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "login-form", 3, "formGroup", "ngSubmit"], [1, "form-field-full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 3, "ngClass"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", 3, "ngClass"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert", 4, "ngIf"], ["routerLink", "/passwordReset", 1, "forgot"], [1, "my-divider"], [1, "forgot"], ["mat-flat-button", "", "color", "primary", "routerLink", "/register", 1, "btn-create"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Create New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".my-divider[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 1px solid #dadde1;\n  display: flex;\n  margin: 20px 0px;\n  text-align: center;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  color: #3972ea;\n  font-weight: 500;\n}\n\n.btn-create[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #65b543;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 12px;\n  font-size: 17px;\n  line-height: 1.23536;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\n  background-clip: padding-box;\n  padding: 0.70588rem 0.94118rem;\n  margin-bottom: 17px;\n  margin-top: 17px;\n  color: #1d1d1f;\n  border: 1px solid #d2d2d7;\n  background-color: rgba(0, 0, 0, 0.02);\n  border-color: rgba(227, 0, 0, 0.4);\n  background-color: #fff2f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9GQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1kaXZpZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkZGUxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3Jnb3Qge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoNTcsMTE0LDIzNCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bi1jcmVhdGUge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsMTgxLDY3KTtcbn1cblxuLmJ0bi1ibG9ja3tcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5hbGVydCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjIzNTM2O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDIyZW07XG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0LFNGIFBybyBJY29ucyxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHBhZGRpbmc6IC43MDU4OHJlbSAuOTQxMThyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIGNvbG9yOiAjMWQxZDFmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMjcsMCwwLC40KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMmY0O1xufSJdfQ== */"] });


/***/ }),

/***/ "/g3p":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/dialog/not-logged-in/dialog-not-logged-in.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DialogNotLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNotLoggedIn", function() { return DialogNotLoggedIn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogNotLoggedIn {
}
DialogNotLoggedIn.ɵfac = function DialogNotLoggedIn_Factory(t) { return new (t || DialogNotLoggedIn)(); };
DialogNotLoggedIn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogNotLoggedIn, selectors: [["dialog-not-logged-in-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogNotLoggedIn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Logged In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please log in before contributing to the site. This helps us ensure that only UT students are able to submit course reviews and edit course information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eric/Projects/MSCSHub/src/main.ts */"zUnb");


/***/ }),

/***/ "3a9W":
/*!*********************************************!*\
  !*** ./src/app/user/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function EditComponent_div_8_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 9);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r1.value.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", item_r1.value.name);
} }
function EditComponent_div_8_ng_template_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const semester_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", semester_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", semester_r7, " ");
} }
function EditComponent_div_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_8_ng_template_5_mat_option_1_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.Semesters);
} }
function EditComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditComponent_div_8_input_4_Template, 1, 2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditComponent_div_8_ng_template_5_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.value.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.value.is_input)("ngIfElse", _r3);
} }
class EditComponent {
    constructor(auth, formBuilder) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.userInfo = {
            a_firstName: { name: "firstName", displayName: "First Name", value: "Test Name", is_input: true },
            b_lastName: { name: "lastName", displayName: "Last Name", value: "Name Test", is_input: true },
            c_firstSemester: { name: "firstSemester", displayName: "First Semester", value: "Fall 2020", is_input: false }
        };
        this.Semesters = [
            'Fall 2019',
            'Spring 2020',
            'Fall 2020',
            'Spring 2021'
        ];
    }
    ngOnInit() {
        this.editUserDataForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            firstSemester: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.auth.userData.subscribe(user => {
            this.userData = user;
            this.userInfo.a_firstName.value = user.firstName || 'null';
            this.userInfo.b_lastName.value = user.lastName || 'null';
            this.userInfo.c_firstSemester.value = user.firstSemester || 'null';
            this.f.firstName.setValue(user.firstName);
            this.f.lastName.setValue(user.lastName);
            this.f.firstSemester.setValue(user.firstSemester);
        });
    }
    get f() {
        var _a;
        return (_a = this.editUserDataForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    onSubmit() {
        if (this.f.invalid) {
            return;
        }
        this.auth.updateUserExtraData(this.f.firstName.value, this.f.lastName.value, this.f.firstSemester.value);
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 12, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [2, "text-align", "center"], [1, "user-edit-form", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary"], [1, "form-field-full-width"], ["type", "text", "matInput", "", "placeholder", "First Name", 3, "value", "formControlName", 4, "ngIf", "ngIfElse"], ["semesterBlock", ""], ["type", "text", "matInput", "", "placeholder", "First Name", 3, "value", "formControlName"], ["formControlName", "firstSemester"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit User Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditComponent_div_8_Template, 7, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editUserDataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 2, ctx.userInfo));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "7eFX":
/*!**************************************************************!*\
  !*** ./src/app/courses/course-grid/course-grid.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function CourseGridComponent_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseGridComponent_mat_chip_6_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const category_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleSelection(category_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.isSelected(category_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, category_r3), " ");
} }
function CourseGridComponent_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseGridComponent_mat_chip_11_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const language_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleSelection(language_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.isSelected(language_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r6, " ");
} }
function CourseGridComponent_mat_card_13_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, class_r9.category));
} }
function CourseGridComponent_mat_card_13_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r13);
} }
const _c0 = function (a1) { return ["/courses/", a1]; };
function CourseGridComponent_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CourseGridComponent_mat_card_13_mat_chip_9_Template, 3, 3, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseGridComponent_mat_card_13_mat_chip_10_Template, 2, 1, "mat-chip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, class_r9.ClassName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](class_r9.ClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](class_r9.CourseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", class_r9.GraphicThumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", class_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", class_r9.languages);
} }
class CourseGridComponent {
    constructor(courses) {
        this.courses = courses;
        this.classes = [];
        this.categories = ["Applications", "Systems", "Theory", "Elective"];
        this.languages = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"];
        this.selected = [];
        this.visibleClasses = [];
        this.visibleClassesSet = new Set();
        if (this.courses.website == "dataScience") {
            this.categories = ["foundations", "elective"];
            this.languages = ['Python', 'R', 'No Code'];
        }
    }
    ngOnInit() {
        this.courses.classes.subscribe(data => {
            this.classes = data.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1);
            this.filterItems();
        });
        document.getElementsByClassName("mat-drawer-content")[0].scroll(0, 0);
    }
    isSelected(item) {
        return this.selected.includes(item);
    }
    toggleSelection(item) {
        if (this.selected.includes(item)) {
            this.selected.splice(this.selected.indexOf(item), 1);
        }
        else {
            this.selected.push(item);
        }
        this.filterItems();
    }
    filterItems() {
        // this.visibleClasses = []
        this.visibleClassesSet.clear();
        let selectedLangs = [];
        let selectedCats = [];
        if (this.selected.length === 0) {
            this.classes.forEach(data => {
                this.visibleClassesSet.add(data);
            });
        }
        else {
            for (var i = 0; i < this.selected.length; i++) {
                let item = this.selected[i];
                if (this.categories.includes(item)) {
                    this.classes.filter(x => x.category === item).forEach(data => {
                        this.visibleClassesSet.add(data);
                    });
                }
                else {
                    this.classes.filter(x => { var _a; return (_a = x.languages) === null || _a === void 0 ? void 0 : _a.includes(item); }).forEach(data => {
                        this.visibleClassesSet.add(data);
                    });
                }
            }
            if (selectedLangs.length === 0 || selectedCats.length === 0) {
                selectedCats.forEach(data => {
                    this.visibleClassesSet.add(data);
                });
            }
            else {
                selectedLangs.filter(x => selectedCats.includes(x)).forEach(data => {
                    this.visibleClassesSet.add(data);
                });
            }
        }
        this.visibleClasses = Array.from(this.visibleClassesSet);
        this.visibleClasses.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1);
    }
}
CourseGridComponent.ɵfac = function CourseGridComponent_Factory(t) { return new (t || CourseGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"])); };
CourseGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseGridComponent, selectors: [["app-course-grid"]], decls: 14, vars: 3, consts: [[1, "content"], [1, "filter-cards"], ["multiple", ""], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "course-grid-container"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "selected", "click"], [3, "routerLink"], [3, "src"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function CourseGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter by Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CourseGridComponent_mat_chip_6_Template, 3, 4, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter by Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseGridComponent_mat_chip_11_Template, 2, 2, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CourseGridComponent_mat_card_13_Template, 11, 8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleClasses);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".filter-cards[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: space-evenly;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 15px;\n  padding-bottom: 0px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: aquamarine;\n}\n\n.course-grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  overflow: hidden;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-flow: dense;\n  justify-content: center;\n  align-content: center;\n  padding-top: 20px;\n}\n\n.course-grid-container[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%], .course-grid-container[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%], .course-grid-container[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.course-grid-container[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.course-grid-container[_ngcontent-%COMP%]   .mat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.course-grid-container[_ngcontent-%COMP%]   .mat-chip-list-wrapper[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.course-grid-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 0;\n  width: 100%;\n  height: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n  justify-content: center;\n  max-width: 1180px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUU7RUFDRSx1QkFBQTtBQUZKOztBQUtFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSkYiLCJmaWxlIjoiY291cnNlLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLmNvdXJzZS1ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgLm1hdC1jYXJkLWhlYWRlciwgLm1hdC1jYXJkLXRpdGxlLCAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cblxuICAubWF0LWNoaXAtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTE4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "7usI":
/*!*******************************************************!*\
  !*** ./src/app/misc/sad-panda/sad-panda.component.ts ***!
  \*******************************************************/
/*! exports provided: SadPandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SadPandaComponent", function() { return SadPandaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panda-party/panda-party.component */ "y23b");


class SadPandaComponent {
    constructor() {
        this.title = "It's ok... we understand :)";
        // Source - https://www.teeturtle.com/products/sad-panda
        this.source = "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880787/Sad-Panda_800x800_SEPS-1000x1000.jpg";
    }
}
SadPandaComponent.ɵfac = function SadPandaComponent_Factory(t) { return new (t || SadPandaComponent)(); };
SadPandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SadPandaComponent, selectors: [["app-sad-panda"]], decls: 1, vars: 2, consts: [[3, "title", "src"]], template: function SadPandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panda-party", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.source);
    } }, directives: [_panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__["PandaPartyComponent"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 30px;\n}\n\n.sad-panda[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NhZC1wYW5kYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNhZC1wYW5kYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uc2FkLXBhbmRhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_review_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/review/review */ "KoHv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AuthService {
    constructor(afs, afAuth, router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this._userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.userData = this._userData.asObservable();
        this._isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.isLoggedIn = this._isLoggedIn.asObservable();
        this._isVerified = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.isVerified = this._isVerified.asObservable();
        this.afs.firestore.enablePersistence().catch(err => console.error("Persistence failed to enable, error:", err));
        let localData = localStorage.getItem('user');
        if (localData != 'null' && localData) {
            this._isLoggedIn.next(true);
            let parsedData = JSON.parse(localData);
            this._userData.next(parsedData);
            this._isVerified.next(parsedData.emailVerified);
        }
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.setUserData(user);
                this._isLoggedIn.next(true);
                this._isVerified.next(user.emailVerified);
            }
            else {
                this._isLoggedIn.next(false);
                this._isVerified.next(false);
                this._userData.next(undefined);
                localStorage.setItem('user', JSON.stringify(null));
            }
        });
    }
    setUserData(user) {
        if (!user) {
            localStorage.setItem('user', JSON.stringify(null));
            return;
        }
        const userRef = this.afs.doc(`users/${user.uid}`);
        var docRef = this.afs.collection("UserExtraData").doc(user === null || user === void 0 ? void 0 : user.uid);
        docRef.get().subscribe(doc => {
            const data = doc.data();
            user.firstSemester = data === null || data === void 0 ? void 0 : data.firstSemester;
            user.firstName = data === null || data === void 0 ? void 0 : data.firstName;
            user.lastName = data === null || data === void 0 ? void 0 : data.lastName;
            user.slackId = data === null || data === void 0 ? void 0 : data.slackId;
            user.reviewFeedback = data === null || data === void 0 ? void 0 : data.reviewFeedback;
            localStorage.setItem('user', JSON.stringify(user));
            this._userData.next(user);
        });
    }
    signIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            this.setUserData(result.user);
        });
    }
    signUp(email, password, firstName, lastName, firstSemester) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
            var _a, _b, _c, _d;
            this.setUserData(userCredential.user);
            (_a = userCredential.user) === null || _a === void 0 ? void 0 : _a.sendEmailVerification();
            (_b = userCredential.user) === null || _b === void 0 ? void 0 : _b.updateProfile({ displayName: `${firstName} ${lastName}` });
            this.afs.collection("UserExtraData").doc((_c = userCredential.user) === null || _c === void 0 ? void 0 : _c.uid).set({
                uid: (_d = userCredential.user) === null || _d === void 0 ? void 0 : _d.uid,
                slackId: null,
                firstSemester: firstSemester,
                firstName: firstName,
                lastName: lastName,
                reviewFeedback: new Map()
            });
            this.router.navigate(['verifyEmail']);
        });
    }
    logout() {
        return this.afAuth.signOut().then(() => {
            this.setUserData(null);
            this._isLoggedIn.next(false);
            this._userData.next(undefined);
        }).then(_ => {
            this.router.navigate(['logout']);
        })
            .catch((error) => { console.error("Auth: logout - ", error); });
    }
    forgotPassword(email) {
        return this.afAuth.sendPasswordResetEmail(email)
            .then(_ => {
            window.alert('Password reset email has been sent. Check your email inbox to proceed.');
            this.router.navigate(['login']);
        })
            .catch(error => { window.alert(error); });
    }
    updateUserExtraData(firstName, lastName, firstSemester) {
        const displayName = `${firstName} ${lastName}`;
        this.afAuth.currentUser.then((user) => {
            user === null || user === void 0 ? void 0 : user.updateProfile({ displayName: displayName });
            this.afs.collection("UserExtraData").doc(user === null || user === void 0 ? void 0 : user.uid).update({
                firstSemester: firstSemester,
                firstName: firstName,
                lastName: lastName
            });
            this.setUserData(user);
            this.router.navigate(['settings']);
        });
        return;
    }
    resendVerification() {
        return this.afAuth.currentUser.then((user) => {
            user === null || user === void 0 ? void 0 : user.sendEmailVerification();
        });
    }
    undoOldVote(reviewId, oldVote, helpful) {
        if (oldVote === true)
            helpful.positive -= 1;
        else if (oldVote === false)
            helpful.negative -= 1;
        return helpful;
    }
    reviewFeedback(reviewId, vote) {
        return this.afAuth.currentUser.then((user) => {
            if (!user || !(user === null || user === void 0 ? void 0 : user.emailVerified))
                return false;
            if (!user.reviewFeedback)
                user.reviewFeedback = {};
            let helpful = { positive: 0, negative: 0 };
            let oldVal = (reviewId in user.reviewFeedback) ? user.reviewFeedback[reviewId] : undefined;
            if (oldVal != undefined)
                helpful = this.undoOldVote(reviewId, oldVal, helpful);
            if (vote === src_app_shared_review_review__WEBPACK_IMPORTED_MODULE_2__["reviewFeedbackType"].positive) {
                helpful.positive += 1;
                user.reviewFeedback[reviewId] = true;
            }
            else if (vote === src_app_shared_review_review__WEBPACK_IMPORTED_MODULE_2__["reviewFeedbackType"].negative) {
                helpful.negative += 1;
                user.reviewFeedback[reviewId] = false;
            }
            else {
                delete user.reviewFeedback[reviewId];
            }
            this.afs.collection("UserExtraData").doc(user.uid).update({ reviewFeedback: user.reviewFeedback });
            this.afs.collection("Reviews").doc(reviewId).update({
                'helpfulPositive': firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.increment(helpful.positive),
                'helpfulNegative': firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue.increment(helpful.negative),
            });
            return true;
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    algolia: "6639432e69f6e88a1b0feb7208ffacf4",
    algoliaIndex: "MSCSHUB",
    website: "computerScience",
    firebase: {
        apiKey: "AIzaSyB8rANSR3HoQdSprafHYjKw_wI5WOazlgQ",
        authDomain: "utmcs-1bcf2.firebaseapp.com",
        databaseURL: "https://utmcs-1bcf2-default-rtdb.firebaseio.com",
        projectId: "utmcs-1bcf2",
        storageBucket: "utmcs-1bcf2.appspot.com",
        messagingSenderId: "669197706574",
        appId: "1:669197706574:web:e972d2e24776573d60aa1f",
        measurementId: "G-2LNR16P8J4"
    }
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

/***/ "CUl5":
/*!******************************************************************************************!*\
  !*** ./src/app/reviews/review-detail/review-helpfulness/review-helpfulness.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReviewHelpfulnessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHelpfulnessComponent", function() { return ReviewHelpfulnessComponent; });
/* harmony import */ var src_app_shared_review_review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/review/review */ "KoHv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");





class ReviewHelpfulnessComponent {
    constructor(auth) {
        this.auth = auth;
        this.isLoggedIn = false;
        this.reviewId = "";
        this.positive = 0;
        this.negative = 0;
    }
    sendReviewFeedback(event) {
        if (this.value[0] === "yes" && this.positive != undefined)
            this.positive -= 1;
        else if (this.value[0] === "no" && this.negative != undefined)
            this.negative -= 1;
        let toggle = event.source;
        if (toggle) {
            let group = toggle.buttonToggleGroup;
            if (event.value.some((item) => item == toggle.value)) {
                group.value = [toggle.value];
                if (toggle.value === "yes")
                    this.positive != undefined ? this.positive += 1 : this.positive = 1;
                else if (toggle.value === "no")
                    this.negative != undefined ? this.negative += 1 : this.negative = 1;
            }
            if (this.reviewId) {
                this.auth.reviewFeedback(this.reviewId, group.value[0]);
            }
        }
        else if (this.reviewId)
            this.auth.reviewFeedback(this.reviewId, src_app_shared_review_review__WEBPACK_IMPORTED_MODULE_0__["reviewFeedbackType"].undoFeedback);
    }
}
ReviewHelpfulnessComponent.ɵfac = function ReviewHelpfulnessComponent_Factory(t) { return new (t || ReviewHelpfulnessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ReviewHelpfulnessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewHelpfulnessComponent, selectors: [["app-review-helpfulness"]], inputs: { isLoggedIn: "isLoggedIn", reviewId: "reviewId", value: "value", positive: "positive", negative: "negative" }, decls: 17, vars: 6, consts: [[1, "helpful-container"], [1, "helpful-label"], [1, "helpful-vote-container"], [1, "helpful-vote-positive"], [1, "helpful-vote-negative"], ["name", "helpful", "aria-label", "Helpful", "matTooltip", "Must be logged in.", 3, "multiple", "disabled", "matTooltipDisabled", "value", "change"], ["value", "yes"], ["value", "no"]], template: function ReviewHelpfulnessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Was this review helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "( ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-button-toggle-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ReviewHelpfulnessComponent_Template_mat_button_toggle_group_change_12_listener($event) { return ctx.sendReviewFeedback($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx.positive, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx.negative, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true)("disabled", !ctx.isLoggedIn)("matTooltipDisabled", ctx.isLoggedIn)("value", ctx.value);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"]], styles: [".helpful-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.helpful-container[_ngcontent-%COMP%]   .helpful-label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.helpful-container[_ngcontent-%COMP%]   .helpful-label[_ngcontent-%COMP%]   .helpful-vote-container[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.helpful-container[_ngcontent-%COMP%]   .helpful-label[_ngcontent-%COMP%]   .helpful-vote-container[_ngcontent-%COMP%]   .helpful-vote-positive[_ngcontent-%COMP%] {\n  color: green;\n}\n.helpful-container[_ngcontent-%COMP%]   .helpful-label[_ngcontent-%COMP%]   .helpful-vote-container[_ngcontent-%COMP%]   .helpful-vote-negative[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jldmlldy1oZWxwZnVsbmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTjtBQUNNO0VBQ0UsWUFBQTtBQUNSO0FBRU07RUFDRSxVQUFBO0FBQVIiLCJmaWxlIjoicmV2aWV3LWhlbHBmdWxuZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlbHBmdWwtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5oZWxwZnVsLWxhYmVsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmhlbHBmdWwtdm90ZS1jb250YWluZXIge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAuaGVscGZ1bC12b3RlLXBvc2l0aXZlIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgfVxuXG4gICAgICAuaGVscGZ1bC12b3RlLW5lZ2F0aXZlIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "GrNO":
/*!**********************************************************!*\
  !*** ./src/app/navigation/navbar/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





const _c0 = function (a0) { return { selected: a0 }; };
function MenuComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentUrl === ctx_r0.navInfo.settings.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.navInfo.settings.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.navInfo.settings.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.navInfo.settings.title);
} }
function MenuComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_18_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.currentUrl === ctx_r1.navInfo.logout.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.navInfo.logout.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.navInfo.logout.title);
} }
function MenuComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r2.navInfo.login.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.navInfo.login.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.navInfo.login.title);
} }
class MenuComponent {
    constructor(router, location, auth) {
        this.router = router;
        this.location = location;
        this.auth = auth;
        this.currentUrl = '';
        this.isLoggedIn = false;
        this.navInfo = {
            reviews: { title: 'Reviews', url: '/reviews' },
            courses: { title: 'Courses', url: '/courses' },
            login: { title: 'Login', url: '/login' },
            logout: { title: 'Log Out', url: '/logout' },
            settings: { title: 'User Profile', url: '/settings' },
            home: { title: 'Home', url: '/home' },
            register: { title: 'Register', url: '/register' },
            createReview: { title: 'Create Review', url: '/createReview' },
        };
    }
    ngOnInit() {
        this.router.events.subscribe((val) => {
            this.currentUrl = this.location.path();
        });
        this.auth.isLoggedIn.subscribe(state => {
            this.isLoggedIn = state;
        });
    }
    logout() {
        this.auth.logout();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-nav-nodes"]], decls: 20, vars: 27, consts: [["role", "navigation"], ["fxShow", "", "fxHide.lt-md", "", 3, "ngClass"], [1, "nav-link", 3, "routerLink", "title"], [1, "nav-link-inner"], ["fxShow", "", "fxHide.lt-xs", "", 3, "ngClass"], ["fxShow", "", "fxHide.lt-lg", "", 3, "ngClass", 4, "ngIf"], ["fxShow", "", "fxHide.xs", "", 4, "ngIf"], ["fxShow", "", "fxHide.lt-lg", "", 3, "ngClass"], [1, "nav-link", 3, "title", "click"], ["fxShow", "", "fxHide.xs", ""]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuComponent_li_17_Template, 4, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_li_18_Template, 4, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_li_19_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.currentUrl === ctx.navInfo.home.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navInfo.home.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.navInfo.home.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navInfo.home.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.currentUrl === ctx.navInfo.courses.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navInfo.courses.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.navInfo.courses.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navInfo.courses.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.currentUrl === ctx.navInfo.reviews.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navInfo.reviews.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.navInfo.reviews.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navInfo.reviews.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.currentUrl === ctx.navInfo.createReview.url));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navInfo.createReview.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.navInfo.createReview.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navInfo.createReview.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IBUy":
/*!***************************************************!*\
  !*** ./src/app/services/classes/class.service.ts ***!
  \***************************************************/
/*! exports provided: ClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassService", function() { return ClassService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class ClassService {
    constructor(afs) {
        this.afs = afs;
        this._classes = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.classes = this._classes.asObservable();
        // private _website: ReplaySubject<string> = new ReplaySubject()
        this.website = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].website;
        this.degreeName = this.website === "computerScience" ? "Computer Science" : "Data Science";
        this.websiteName = this.website === "computerScience" ? "MSCSHub" : "MSDSHub";
        this.properName = this.website === "computerScience" ? "MSCS Hub" : "MSDS Hub";
        this.socialName = this.website === "computerScience" ? "Slack #MSCSHub" : "Discord";
        this.socialURL = this.website === "computerScience" ? "https://utmscso.slack.com/archives/C01QM0A19QR" : "https://discord.gg/SDh57AHQu3";
        this.redditName = this.website === "computerScience" ? "/r/MSCSO" : "/r/MSDSO";
        this.redditURL = this.website === "computerScience" ? "https://www.reddit.com/r/mscso" : "https://www.reddit.com/r/msdso";
        this.updateCourseData();
    }
    updateCourseData() {
        let courseListener = this.afs.collection('Class')
            .valueChanges({ idField: 'courseId' })
            .subscribe(data => {
            if (this.website == "computerScience") {
                data = data.filter(course => course.computerScience.isComputerScience);
                data.forEach(course => course.category = course.computerScience.category || course.category);
            }
            else if (this.website == "dataScience") {
                data = data.filter(course => course.dataScience.isDataScience);
                data.forEach(course => course.category = course.dataScience.category || course.category);
            }
            else {
                data = [];
                window.alert("The application is misconfigured. Contact the website admins if this problem persists.");
            }
            this._classes.next(data);
            if (data.length > 0)
                courseListener.unsubscribe();
        });
    }
}
ClassService.ɵfac = function ClassService_Factory(t) { return new (t || ClassService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClassService, factory: ClassService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IPWI":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/dialog/send-feedback/dialog-send-feedback.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DialogSendFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSendFeedback", function() { return DialogSendFeedback; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogSendFeedback {
}
DialogSendFeedback.ɵfac = function DialogSendFeedback_Factory(t) { return new (t || DialogSendFeedback)(); };
DialogSendFeedback.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogSendFeedback, selectors: [["dialog-send-feedback-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogSendFeedback_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Logged In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The best way to give us feedback is to create an issue on Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "JbV0":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialog/review-delete/dialog-on-delete.component.ts ***!
  \***************************************************************************/
/*! exports provided: DialogOnDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOnDelete", function() { return DialogOnDelete; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogOnDelete {
}
DialogOnDelete.ɵfac = function DialogOnDelete_Factory(t) { return new (t || DialogOnDelete)(); };
DialogOnDelete.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOnDelete, selectors: [["dialog-on-delete-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOnDelete_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure you want to delete this review? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "KoHv":
/*!*****************************************!*\
  !*** ./src/app/shared/review/review.ts ***!
  \*****************************************/
/*! exports provided: reviewFeedbackType, degreeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewFeedbackType", function() { return reviewFeedbackType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreeProgram", function() { return degreeProgram; });
var reviewFeedbackType;
(function (reviewFeedbackType) {
    reviewFeedbackType["positive"] = "yes";
    reviewFeedbackType["negative"] = "no";
    reviewFeedbackType["undoFeedback"] = "";
})(reviewFeedbackType || (reviewFeedbackType = {}));
var degreeProgram;
(function (degreeProgram) {
    degreeProgram[degreeProgram["none"] = 0] = "none";
    degreeProgram[degreeProgram["computerScience"] = 1] = "computerScience";
    degreeProgram[degreeProgram["dataScience"] = 2] = "dataScience";
    degreeProgram[degreeProgram["both"] = 3] = "both";
})(degreeProgram || (degreeProgram = {}));


/***/ }),

/***/ "PMFN":
/*!****************************************************************************!*\
  !*** ./src/app/courses/course-detail/course-card/course-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: CourseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCardComponent", function() { return CourseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



function CourseCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.value ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, item_r1.value, "1.0-2") : "N/A", " ");
} }
class CourseCardComponent {
    constructor() {
        this.title = "";
        this.subtitle = "";
        this.value = 0;
    }
}
CourseCardComponent.ɵfac = function CourseCardComponent_Factory(t) { return new (t || CourseCardComponent)(); };
CourseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseCardComponent, selectors: [["app-course-card"]], inputs: { title: "title", subtitle: "subtitle", value: "value", data: "data" }, decls: 2, vars: 1, consts: [[1, "grid-container"], [4, "ngFor", "ngForOf"]], template: function CourseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseCardComponent_div_1_Template, 10, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: [".mat-card-header[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 21px;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 -15px;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  overflow: hidden;\n  grid-auto-flow: dense;\n  justify-content: center;\n  padding-top: 20px;\n}\n\n@media (min-width: 970px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n\n@media (max-width: 969px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvdXJzZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBT0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBSEU7RUFKRjtJQUtJLHNDQUFBO0VBTUY7QUFDRjs7QUFMRTtFQVBGO0lBUUksNERBQUE7RUFRRjtBQUNGIiwiZmlsZSI6ImNvdXJzZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWhlYWRlciwgLm1hdC1jYXJkLXRpdGxlLCAubWF0LWNhcmQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMCAtMTVweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NzBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjlweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE3MHB4LCAxZnIpKTtcbiAgfVxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "PPJd":
/*!*************************************************************!*\
  !*** ./src/app/misc/nothing-here/nothing-here.component.ts ***!
  \*************************************************************/
/*! exports provided: NothingHereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NothingHereComponent", function() { return NothingHereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panda-party/panda-party.component */ "y23b");


class NothingHereComponent {
    constructor() {
        this.title = "You look lost...";
        this.subtitle = "Mr. Panda is here to help you get home";
        this.sources = [
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/cant-adult-today-t-shirt-teeturtle-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881257/Say-No-to-Doing-Things_800x800_SEPS2-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881068/Im-Having-So-Much-Fun_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881245/Food-First-Things-Later_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880493/Boba-Panda_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880980/Hurts-So-Good_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/panda-hug-t-shirt-teeturtle-1000x1000.jpg",
        ];
        this.randomSource = "";
    }
    ngOnInit() {
        this.randomSource = this.sources[this.randomInt(this.sources.length)];
    }
    randomInt(max, min = 0) {
        return Math.floor(Math.random() * max);
    }
}
NothingHereComponent.ɵfac = function NothingHereComponent_Factory(t) { return new (t || NothingHereComponent)(); };
NothingHereComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NothingHereComponent, selectors: [["app-nothing-here"]], decls: 1, vars: 3, consts: [[3, "title", "src", "subtitle"]], template: function NothingHereComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panda-party", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.randomSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("subtitle", ctx.subtitle);
    } }, directives: [_panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__["PandaPartyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RoaW5nLWhlcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../courses/course-list/course-list.component */ "cviW");







class DashboardComponent {
    constructor(courseService) {
        this.courseService = courseService;
        this.scale = 7;
        this.logoUrl = this.courseService.website === "computerScience" ? "assets/images/logos/Colorwheel/TheHubMSCS-128.png" : "assets/images/logos/Colorwheel/TheHubMSDS-128.png";
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 24, vars: 8, consts: [[1, "dashboard-header"], ["id", "big-image", 1, "dashboard-item", "dash-image"], [3, "src"], [1, "dashboard-item"], [1, "feedback-container"], ["mat-button", "", "href", "https://github.com/MSCSHub/MSCSHub/issues", "color", "primary", 1, "feedback-button"], ["fxHide", "", "fxShow.lt-md", "", 1, "center-text"], [1, "radio-container"], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "cl-container"], [3, "scale"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Found a bug? Want a new feature?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u27F5 Scroll to see more \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_mat_radio_group_ngModelChange_15_listener($event) { return ctx.scale = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scale of 1-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Scale of 1-7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scale of 1-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-course-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.courseService.websiteName, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This is the unofficial site for the University of Texas at Austin Masters of ", ctx.courseService.degreeName, ". Here you can find reviews for classes and add your own. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scale);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scale", ctx.scale);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_6__["CourseListComponent"]], styles: [".cl-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n@media (min-width: 1600px) {\n  .cl-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  margin: 20px;\n  flex-direction: column;\n  text-align: center;\n}\n.dashboard-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n.dash-image[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.feedback-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.feedback-button[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  max-width: 250px;\n  line-height: 1.75;\n}\n.center-text[_ngcontent-%COMP%], .radio-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 10px;\n}\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUZGO0lBR0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBR0Y7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUdGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2wtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgQG1lZGlhKG1pbi13aWR0aDoxNjAwcHgpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uZGFzaGJvYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGFzaC1pbWFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mZWVkYmFjay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZlZWRiYWNrLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAvLyBjb2xvcjogcmdiKDU3LDExNCwyMzQpO1xufVxuXG4uY2VudGVyLXRleHQsIC5yYWRpby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"] });


/***/ }),

/***/ "R1Dt":
/*!*****************************************!*\
  !*** ./src/app/user/authguard.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _shared_dialog_not_logged_in_dialog_not_logged_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/dialog/not-logged-in/dialog-not-logged-in.component */ "/g3p");
/* harmony import */ var _shared_dialog_not_verified_dialog_not_verified_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dialog/not-verified/dialog-not-verified.component */ "rwyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






class AuthguardGuard {
    constructor(auth, router, dialog) {
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.isLoggedIn = false;
        this.isVerified = false;
        this.auth.isLoggedIn.subscribe(state => { this.isLoggedIn = state; });
        this.auth.userData.subscribe(data => { this.userData = data; });
        this.auth.isVerified.subscribe(state => this.isVerified = state);
    }
    canActivate(route, state) {
        console.debug("AuthGuard: CanActivate? - emailVerified?", this.isLoggedIn, this.isVerified);
        if (this.isLoggedIn && this.isVerified) {
            return true;
        }
        else {
            if (!this.isLoggedIn) {
                this.openLoginDialog();
            }
            else if (!this.isVerified) {
                this.openVerifyDialog();
            }
            return false;
        }
    }
    openLoginDialog() {
        const dialogRef = this.dialog.open(_shared_dialog_not_logged_in_dialog_not_logged_in_component__WEBPACK_IMPORTED_MODULE_0__["DialogNotLoggedIn"]);
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['login']);
        });
    }
    openVerifyDialog() {
        const dialogRef = this.dialog.open(_shared_dialog_not_verified_dialog_not_verified_component__WEBPACK_IMPORTED_MODULE_1__["DialogNotVerified"]);
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['verifyEmail']);
        });
    }
}
AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) { return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthguardGuard, factory: AuthguardGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RU+s":
/*!*************************************************!*\
  !*** ./src/app/user/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class LogoutComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.timeRemaining = 3;
    }
    ngOnInit() {
        this.auth.logout();
        setTimeout(() => { this.timeRemaining = 2; }, 1000);
        setTimeout(() => { this.timeRemaining = 1; }, 2000);
        setTimeout(() => { if (this.router.url == '/logout')
            this.router.navigate(['home']); }, 3000);
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 11, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [2, "text-align", "center"], ["routerLink", "/home", "mat-button", "", 1, "go-home-btn"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logged Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You have been successfully logged out.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This page will automatically redirect to the home page in ", ctx.timeRemaining, " seconds.");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".go-home-btn[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  line-height: 1.5;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvLWhvbWUtYnRuIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navbar/navbar.component */ "hBAp");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "jccf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






class AppComponent {
    constructor() {
        this.title = 'The Hub';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[3, "menuClicked"], ["autosize", "", 1, "sidemenu-container"], ["mode", "side", 1, "sidemenu-sidenav"], ["drawer", ""], [3, "routeSelected"], [1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuClicked", function AppComponent_Template_app_navbar_menuClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sidenav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("routeSelected", function AppComponent_Template_app_sidenav_routeSelected_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.sidemenu-sidenav[_ngcontent-%COMP%] {\n  padding-top: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRUo7QUFDRTs7Ozs7O0VBTUUsYUFBQTtBQUVKO0FBQ0U7RUFDRSxTQUFBO0FBRUo7QUFDRTtFQUNFLE9BQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFSjtBQUNFO0VBQ0UsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsVUFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0FBRUo7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBRUo7QUFDRTtFQUNFLGVBQUE7QUFFSjtBQUNFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0FBRUo7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFSjtBQUNFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0U7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0U7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQ0U7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FBRUo7QUFDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQUVKO0FBQ0U7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKO0FBRUUsc0JBQUE7QUFDQTtFQUVFOztJQUVFLFdBQUE7RUFBSjs7RUFHRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBQUo7O0VBR0U7SUFDRSxpQkFBQTtFQUFKOztFQUdFO0lBQ0UsWUFBQTtJQUNBLHdCQUFBO0VBQUo7QUFDRjtBQUdFO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFESjtBQUNGO0FBSUE7RUFDRSxpQkFBQTtBQUZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAudG9vbGJhciBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiAjODg4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMHB4O1xuICAgIHRvcDogLTI0cHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbi5zaWRlbWVudS1zaWRlbmF2IHtcbiAgcGFkZGluZy10b3A6IDY1cHg7XG59Il19 */"] });


/***/ }),

/***/ "T3Tc":
/*!******************************************************************!*\
  !*** ./src/app/reviews/review-detail/review-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ReviewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDetailComponent", function() { return ReviewDetailComponent; });
/* harmony import */ var src_app_shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/dialog/review-delete/dialog-on-delete.component */ "JbV0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../star-rating/star-rating.component */ "gPcw");
/* harmony import */ var _review_helpfulness_review_helpfulness_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./review-helpfulness/review-helpfulness.component */ "CUl5");
















function ReviewDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No reviews exist for this class yet. Be the first to leave one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReviewDetailComponent_mat_card_3_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewDetailComponent_mat_card_3_div_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.removeReview(review_r2.reviewId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/review/edit/", review_r2.reviewId, "");
} }
function ReviewDetailComponent_mat_card_3_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.bookUsefulness);
} }
function ReviewDetailComponent_mat_card_3_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.lectureQuality);
} }
function ReviewDetailComponent_mat_card_3_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.professorQuality);
} }
function ReviewDetailComponent_mat_card_3_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.piazzaCommunity);
} }
function ReviewDetailComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewDetailComponent_mat_card_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const review_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.openSnackBar("Link copied to clipboard.", review_r2.reviewId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "add_link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ReviewDetailComponent_mat_card_3_div_14_Template, 7, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Textbook: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ReviewDetailComponent_mat_card_3_span_27_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Lectures: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ReviewDetailComponent_mat_card_3_span_32_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Professor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ReviewDetailComponent_mat_card_3_span_37_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Piazza: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ReviewDetailComponent_mat_card_3_span_42_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "app-star-rating", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Workload:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Review:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "app-review-helpfulness", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", review_r2.course, " - ", review_r2.semester, " ", review_r2.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 25, review_r2.timestamp.toMillis(), "M/d/yyyy h:mm a z"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r2.userId === (ctx_r1.userData == null ? null : ctx_r1.userData.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rating: ", review_r2.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Difficulty: ", review_r2.difficulty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r2.bookUsefulness > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.bookUsefulness);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r2.lectureQuality > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.lectureQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r2.professorQuality > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.professorQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", review_r2.piazzaCommunity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedValue", review_r2.piazzaCommunity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r2.workload, " hours per week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r2.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLoggedIn", ctx_r1.isLoggedIn)("reviewId", review_r2.reviewId)("value", ctx_r1.getFeedbackValue(review_r2.reviewId))("positive", review_r2.helpfulPositive)("negative", review_r2.helpfulNegative);
} }
class ReviewDetailComponent {
    constructor(route, afs, auth, _snackBar, clipboard, dialog) {
        this.route = route;
        this.afs = afs;
        this.auth = auth;
        this._snackBar = _snackBar;
        this.clipboard = clipboard;
        this.dialog = dialog;
        this.reviewId = "";
        this.author = "";
        this.class = "";
        this.pageNumber = 0;
        this.query = "";
        this.pageLength = 5;
        this.reviewData = [];
        this.dataLength = 0;
        this.isLoggedIn = false;
        this.durationInSeconds = 3;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    ngOnInit() {
        this.auth.isLoggedIn.subscribe(status => { this.isLoggedIn = status; });
        this.auth.userData.subscribe(data => {
            this.userData = data;
        });
        this.reviewId = this.route.snapshot.paramMap.get('id') || this.reviewId;
        if (this.reviewId != "") {
            this.getSingleReview(this.reviewId);
        }
    }
    getSingleReview(reviewId) {
        this.afs.collection("Reviews").doc(reviewId).get().subscribe(doc => {
            const review = doc.data();
            review.reviewId = doc.id;
            this.reviewData.push(review);
        });
    }
    openSnackBar(message, reviewId, action = "Dismiss") {
        this.clipboard.copy(`${window.location.host}/review/${reviewId}`);
        this._snackBar.open(message, action, {
            duration: this.durationInSeconds * 1000,
        });
    }
    removeReview(reviewId) {
        if (!reviewId)
            return;
        this.openDialog(reviewId);
    }
    openDialog(reviewId) {
        const dialogRef = this.dialog.open(src_app_shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_0__["DialogOnDelete"]);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.afs.collection("Reviews").doc(reviewId).delete();
                let index = this.reviewData.findIndex(x => x.reviewId == reviewId);
                this.reviewData.splice(index, 1);
            }
        });
    }
    getFeedbackValue(reviewId) {
        var _a, _b, _c;
        if (!((_a = this.userData) === null || _a === void 0 ? void 0 : _a.reviewFeedback))
            return [""];
        if (reviewId in ((_b = this.userData) === null || _b === void 0 ? void 0 : _b.reviewFeedback)) {
            let feedback = (_c = this.userData) === null || _c === void 0 ? void 0 : _c.reviewFeedback[reviewId];
            if (feedback)
                return ["yes"];
            else
                return ["no"];
        }
        return [""];
    }
}
ReviewDetailComponent.ɵfac = function ReviewDetailComponent_Factory(t) { return new (t || ReviewDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ReviewDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewDetailComponent, selectors: [["app-review-detail"]], inputs: { reviewId: "reviewId", author: "author", class: "class", pageNumber: "pageNumber", query: "query", pageLength: "pageLength", reviewData: "reviewData", dataLength: "dataLength" }, decls: 5, vars: 6, consts: [[1, "content"], [1, "review-container"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["fxFlex", ""], [1, "review-detail-buttons"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "Copy link to review"], ["class", "review-detail-owner-buttons", 4, "ngIf"], [1, "rating-grid"], [3, "selectedValue"], [2, "white-space", "pre-line"], [3, "isLoggedIn", "reviewId", "value", "positive", "negative"], [1, "review-detail-owner-buttons"], ["mat-icon-button", "", 3, "routerLink"], ["matTooltip", "Edit review"]], template: function ReviewDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReviewDetailComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReviewDetailComponent_mat_card_3_Template, 57, 28, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reviewData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 2, ctx.reviewData, ctx.pageNumber * ctx.pageLength, (ctx.pageNumber + 1) * ctx.pageLength));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_14__["StarRatingComponent"], _review_helpfulness_review_helpfulness_component__WEBPACK_IMPORTED_MODULE_15__["ReviewHelpfulnessComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".content[_ngcontent-%COMP%] {\n  color: #545454;\n  font-family: \"Libre Franklin\", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  box-sizing: border-box;\n  padding: 0;\n  justify-content: center;\n  max-width: 1180px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  margin: 0px 16px 50px 16px;\n}\n\n.rating-grid[_ngcontent-%COMP%] {\n  display: grid;\n  padding-top: 10px;\n}\n\n@media (min-width: 575px) {\n  .rating-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 100px 150px 100px 150px;\n    grid-auto-rows: 30px;\n  }\n}\n\n@media (max-width: 575px) {\n  .rating-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 150px 150px;\n    grid-auto-rows: 30px;\n  }\n}\n\n.review-detail-buttons[_ngcontent-%COMP%], .review-detail-owner-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 600px) {\n  .review-detail-buttons[_ngcontent-%COMP%], .review-detail-owner-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jldmlldy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFTQSxpQkFBQTtBQVBGOztBQURFO0VBRkY7SUFHSSw4Q0FBQTtJQUNBLG9CQUFBO0VBSUY7QUFDRjs7QUFIRTtFQU5GO0lBT0ksa0NBQUE7SUFDQSxvQkFBQTtFQU1GO0FBQ0Y7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBSkU7RUFGRjtJQUdJLHNCQUFBO0VBT0Y7QUFDRiIsImZpbGUiOiJyZXZpZXctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgRnJhbmtsaW5cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudHtcbiAgbWFyZ2luOiAwcHggMTZweCA1MHB4IDE2cHg7XG59XG5cbi5yYXRpbmctZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTUwcHggMTAwcHggMTUwcHg7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxNTBweDtcbiAgICBncmlkLWF1dG8tcm93czogMzBweDtcbiAgfVxuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnJldmlldy1kZXRhaWwtYnV0dG9ucywgLnJldmlldy1kZXRhaWwtb3duZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIEBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "U728":
/*!*************************************************************!*\
  !*** ./src/app/shared/custom-icons/custom-icon-registry.ts ***!
  \*************************************************************/
/*! exports provided: SVG_ICONS, CustomIconRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_ICONS", function() { return SVG_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIconRegistry", function() { return CustomIconRegistry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
// Original source code for this snippet comes from https://github.com/angular/angular/blob/a6971ba89adc253bfa4260036ee4a1e0bd76159f/aio/src/app/shared/custom-icon-registry.ts







/**
 * Use SVG_ICONS (and SvgIconInfo) as "multi" providers to provide the SVG source
 * code for the icons that you wish to have preloaded in the `CustomIconRegistry`
 * For compatibility with the MdIconComponent, please ensure that the SVG source has
 * the following attributes:
 *
 * * `xmlns="http://www.w3.org/2000/svg"`
 * * `focusable="false"` (disable IE11 default behavior to make SVGs focusable)
 * * `height="100%"` (the default)
 * * `width="100%"` (the default)
 * * `preserveAspectRatio="xMidYMid meet"` (the default)
 *
 */
const SVG_ICONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SvgIcons');
const DEFAULT_NS = '$$default';
/**
 * A custom replacement for Angular Material's `MdIconRegistry`, which allows
 * us to provide preloaded icon SVG sources.
 */
class CustomIconRegistry extends _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] {
    constructor(http, sanitizer, document, errorHandler, svgIcons) {
        super(http, sanitizer, document, errorHandler);
        this.svgIcons = svgIcons;
        this.cachedSvgElements = { [DEFAULT_NS]: {} };
    }
    getNamedSvgIcon(iconName, namespace) {
        const nsIconMap = this.cachedSvgElements[namespace || DEFAULT_NS];
        let preloadedElement = nsIconMap && nsIconMap[iconName];
        if (!preloadedElement) {
            preloadedElement = this.loadSvgElement(iconName, namespace);
        }
        return preloadedElement
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(preloadedElement.cloneNode(true))
            : super.getNamedSvgIcon(iconName, namespace);
    }
    loadSvgElement(iconName, namespace) {
        const svgIcon = this.svgIcons.find(icon => {
            return namespace
                ? icon.name === iconName && icon.namespace === namespace
                : icon.name === iconName;
        });
        if (!svgIcon) {
            return;
        }
        const ns = svgIcon.namespace || DEFAULT_NS;
        const nsIconMap = this.cachedSvgElements[ns] || (this.cachedSvgElements[ns] = {});
        // Creating a new `<div>` per icon is necessary for the SVGs to work correctly in IE11.
        const div = document.createElement('DIV');
        // SECURITY: the source for the SVG icons is provided in code by trusted developers
        div.innerHTML = svgIcon.svgSource;
        const svgElement = div.querySelector('svg');
        nsIconMap[svgIcon.name] = svgElement;
        return svgElement;
    }
}
CustomIconRegistry.ɵfac = function CustomIconRegistry_Factory(t) { return new (t || CustomIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SVG_ICONS)); };
CustomIconRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomIconRegistry, factory: CustomIconRegistry.ɵfac });


/***/ }),

/***/ "WThg":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/dialog/review-submission/dialog-review-submission.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DialogReviewSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogReviewSubmission", function() { return DialogReviewSubmission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogReviewSubmission {
}
DialogReviewSubmission.ɵfac = function DialogReviewSubmission_Factory(t) { return new (t || DialogReviewSubmission)(); };
DialogReviewSubmission.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogReviewSubmission, selectors: [["dialog-review-sumission-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogReviewSubmission_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank You!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your review has been saved! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "Wj4Q":
/*!************************************************************************************!*\
  !*** ./src/app/courses/course-grid/course-grid-card/course-grid-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: CourseGridCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridCardComponent", function() { return CourseGridCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CourseGridCardComponent_div_9_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r2.key));
} }
function CourseGridCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseGridCardComponent_div_9_mat_chip_1_Template, 3, 3, "mat-chip", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.value);
} }
function CourseGridCardComponent_mat_chip_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r5);
} }
class CourseGridCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseGridCardComponent.ɵfac = function CourseGridCardComponent_Factory(t) { return new (t || CourseGridCardComponent)(); };
CourseGridCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseGridCardComponent, selectors: [["app-course-grid-card"]], inputs: { course: "course" }, decls: 12, vars: 7, consts: [[3, "src"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function CourseGridCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CourseGridCardComponent_div_9_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseGridCardComponent_mat_chip_11_Template, 2, 1, "mat-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.ClassName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.CourseNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.course.GraphicThumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.course.meta));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course.languages);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".mat-card-header[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.mat-chip-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvdXJzZS1ncmlkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImNvdXJzZS1ncmlkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaGVhZGVyLCAubWF0LWNhcmQtdGl0bGUsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5tYXQtY2hpcC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navbar/navbar.component */ "hBAp");
/* harmony import */ var _search_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search-input/search-input.component */ "Zebc");
/* harmony import */ var _navigation_navbar_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navbar/menu/menu.component */ "GrNO");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/settings/settings.component */ "rTL2");
/* harmony import */ var _user_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/admin/admin.component */ "m6Oi");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reviews/reviews.component */ "bZw7");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _courses_course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses/course-detail/course-detail.component */ "hK/H");
/* harmony import */ var _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reviews/review-detail/review-detail.component */ "T3Tc");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/register/register.component */ "cEwO");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "gr6c");
/* harmony import */ var _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/verify-email/verify-email.component */ "gsZg");
/* harmony import */ var _courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./courses/course-list/course-list.component */ "cviW");
/* harmony import */ var _courses_course_detail_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./courses/course-detail/course-card/course-card.component */ "PMFN");
/* harmony import */ var _courses_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./courses/course-grid/course-grid.component */ "7eFX");
/* harmony import */ var _courses_course_grid_course_grid_card_course_grid_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./courses/course-grid/course-grid-card/course-grid-card.component */ "Wj4Q");
/* harmony import */ var _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/logout/logout.component */ "RU+s");
/* harmony import */ var _reviews_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reviews/create-review/create-review.component */ "p69Z");
/* harmony import */ var _shared_dialog_not_logged_in_dialog_not_logged_in_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/dialog/not-logged-in/dialog-not-logged-in.component */ "/g3p");
/* harmony import */ var _shared_dialog_not_verified_dialog_not_verified_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/dialog/not-verified/dialog-not-verified.component */ "rwyB");
/* harmony import */ var _shared_dialog_send_feedback_dialog_send_feedback_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/dialog/send-feedback/dialog-send-feedback.component */ "IPWI");
/* harmony import */ var _shared_dialog_review_submission_dialog_review_submission_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/dialog/review-submission/dialog-review-submission.component */ "WThg");
/* harmony import */ var _shared_dialog_review_too_short_dialog_review_too_short_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/dialog/review-too-short/dialog-review-too-short.component */ "gRJU");
/* harmony import */ var _shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/dialog/review-delete/dialog-on-delete.component */ "JbV0");
/* harmony import */ var _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user/edit/edit.component */ "3a9W");
/* harmony import */ var _user_view_user_reviews_view_user_reviews_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/view-user-reviews/view-user-reviews.component */ "e1MI");
/* harmony import */ var _courses_course_detail_edit_course_metadata_edit_course_metadata_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./courses/course-detail/edit-course-metadata/edit-course-metadata.component */ "iqPS");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "jccf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _misc_sad_panda_sad_panda_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./misc/sad-panda/sad-panda.component */ "7usI");
/* harmony import */ var _misc_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./misc/thankyou/thankyou.component */ "eYhB");
/* harmony import */ var _misc_nothing_here_nothing_here_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./misc/nothing-here/nothing-here.component */ "PPJd");
/* harmony import */ var _misc_panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./misc/panda-party/panda-party.component */ "y23b");
/* harmony import */ var _reviews_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./reviews/star-rating/star-rating.component */ "gPcw");
/* harmony import */ var _reviews_review_detail_review_helpfulness_review_helpfulness_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./reviews/review-detail/review-helpfulness/review-helpfulness.component */ "CUl5");
/* harmony import */ var _courses_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./courses/create-course/create-course.component */ "yuGV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// Firebase




































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({ providers: [
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__["ScreenTrackingService"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__["UserTrackingService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__["AngularFireAnalyticsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _navigation_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _search_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__["SearchInputComponent"],
        _navigation_navbar_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _user_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
        _user_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
        _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_15__["ReviewsComponent"],
        _courses_course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_21__["CourseDetailComponent"],
        _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_22__["ReviewDetailComponent"],
        _shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_37__["DialogOnDelete"],
        _user_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
        _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordComponent"],
        _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_25__["VerifyEmailComponent"],
        _courses_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_26__["CourseListComponent"],
        _courses_course_detail_course_card_course_card_component__WEBPACK_IMPORTED_MODULE_27__["CourseCardComponent"],
        _courses_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_28__["CourseGridComponent"],
        _courses_course_grid_course_grid_card_course_grid_card_component__WEBPACK_IMPORTED_MODULE_29__["CourseGridCardComponent"],
        _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__["LogoutComponent"],
        _reviews_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_31__["CreateReviewComponent"],
        _shared_dialog_review_submission_dialog_review_submission_component__WEBPACK_IMPORTED_MODULE_35__["DialogReviewSubmission"],
        _shared_dialog_review_too_short_dialog_review_too_short_component__WEBPACK_IMPORTED_MODULE_36__["DialogReviewTooShort"],
        _shared_dialog_not_logged_in_dialog_not_logged_in_component__WEBPACK_IMPORTED_MODULE_32__["DialogNotLoggedIn"],
        _shared_dialog_not_verified_dialog_not_verified_component__WEBPACK_IMPORTED_MODULE_33__["DialogNotVerified"],
        _shared_dialog_send_feedback_dialog_send_feedback_component__WEBPACK_IMPORTED_MODULE_34__["DialogSendFeedback"],
        _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_38__["EditComponent"],
        _user_view_user_reviews_view_user_reviews_component__WEBPACK_IMPORTED_MODULE_39__["ViewUserReviewsComponent"],
        _courses_course_detail_edit_course_metadata_edit_course_metadata_component__WEBPACK_IMPORTED_MODULE_40__["EditCourseMetadataComponent"],
        _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_41__["SidenavComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_42__["FooterComponent"],
        _misc_sad_panda_sad_panda_component__WEBPACK_IMPORTED_MODULE_43__["SadPandaComponent"],
        _misc_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_44__["ThankyouComponent"],
        _misc_nothing_here_nothing_here_component__WEBPACK_IMPORTED_MODULE_45__["NothingHereComponent"],
        _misc_panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_46__["PandaPartyComponent"],
        _reviews_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_47__["StarRatingComponent"],
        _reviews_review_detail_review_helpfulness_review_helpfulness_component__WEBPACK_IMPORTED_MODULE_48__["ReviewHelpfulnessComponent"],
        _courses_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_49__["CreateCourseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__["AngularFireAnalyticsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "Zebc":
/*!***************************************************************!*\
  !*** ./src/app/search/search-input/search-input.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










function SearchInputComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", class_r3.ClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", class_r3.ClassName, " ");
} }
class SearchInputComponent {
    constructor(classService, router) {
        this.classService = classService;
        this.router = router;
        this.classes = [];
        this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ngOnInit() {
        this.classService.classes.subscribe(classData => {
            this.classes = classData;
        });
        this.filteredOptions = this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(val => val.length >= 1 ? this.filter(val) : []));
    }
    filter(val) {
        return this.classes.filter(option => option.ClassName.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    doSearch() {
        if (-1 != this.classes.map(value => value.ClassName).indexOf(`${this.searchControl.value}`)) {
            // this.router.navigate([`courses/${this.myControl.value}`])
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([`courses/${this.searchControl.value}`]);
                this.searchControl.setValue("");
            });
        }
    }
}
SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) { return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchInputComponent, selectors: [["app-search-input"]], decls: 6, vars: 5, consts: [["type", "search", "aria-label", "search", "placeholder", "Search courses", 3, "formControl", "matAutocomplete", "input", "keyup"], ["searchBox", ""], ["autoActiveFirstOption", "", 1, "search-container", 3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function SearchInputComponent_Template_input_input_0_listener() { return ctx.doSearch(); })("keyup", function SearchInputComponent_Template_input_keyup_0_listener() { return ctx.doSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-autocomplete", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function SearchInputComponent_Template_mat_autocomplete_optionSelected_2_listener() { return ctx.doSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SearchInputComponent_mat_option_4_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, ctx.filteredOptions));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".mat-autocomplete-panel {\n  border-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVse1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "bZw7":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./review-detail/review-detail.component */ "T3Tc");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function ReviewsComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", course_r5.courseId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r5.ClassName, " ");
} }
function ReviewsComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r6.key, " ");
} }
function ReviewsComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const operation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", operation_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", operation_r7, " ");
} }
function ReviewsComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Sort by ", option_r8.displayText, " ");
} }
function ReviewsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Could not find any Reviews using input parameters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Please try a different search.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ReviewsComponent {
    constructor(afs, auth, classService, formBuilder) {
        this.afs = afs;
        this.auth = auth;
        this.classService = classService;
        this.formBuilder = formBuilder;
        this.reviewData = [];
        this.reviewDataStack = [];
        this.pageNumber = 0;
        this.pageLength = 5;
        this.disableNext = false;
        this.disablePrev = false;
        this.maxLength = 99999;
        this.isLoggedIn = false;
        this.categories = {
            Rating: "rating",
            Difficulty: "difficulty",
            Workload: "workload",
            "Book Usefulness": 'bookUsefulness'
        };
        this.operations = ["==", "!=", "<", ">", "<=", ">="];
        this.courses = [];
        this.courseId = '';
        this.queryValid = false;
        this.nothingHere = false;
        this.orderByOptions = [
            { displayText: "Most Helpful", field: "wilsonScore", order: "desc" },
            { displayText: "Least Helpful", field: "wilsonScore", order: "asc" },
            { displayText: "Newest", field: "timestamp", order: "desc" },
            { displayText: "Oldest", field: "timestamp", order: "asc" },
        ];
        this.selectedSort = this.orderByOptions[2];
        this.websiteFilter = this.classService.website === "computerScience" ? "isComputerScience" : "isDataScience";
    }
    ngOnInit() {
        this.queryForm = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            operation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            inputValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.auth.isLoggedIn.subscribe(state => { this.isLoggedIn = state; });
        this.classService.classes.subscribe(data => { this.courses = data; });
        this.getFirstPage();
    }
    getFirstPage() {
        this.pageNumber = 0;
        this.disablePrev = true;
        this.disableNext = false;
        this.nothingHere = false;
        this.afs.collection('Reviews', ref => {
            let query = ref.limit(this.pageLength);
            if (this.courseId) {
                query = query.where("classId", "==", this.courseId);
            }
            query = query.where(this.websiteFilter, "==", true);
            if (this.queryValid) {
                query = query.where(this.f['category'].value, this.f['operation'].value, this.f['inputValue'].value);
                if (this.f['operation'].value != "==") {
                    query = query.orderBy(this.f['category'].value, "desc");
                }
            }
            // return query.orderBy('timestamp', 'desc')
            return query.orderBy(this.selectedSort.field, this.selectedSort.order);
        }).get().subscribe(response => {
            if (!response.docs.length) {
                console.warn("Reviews: No reviews exist");
                this.disableNext = true;
                this.disablePrev = true;
                this.reviewData = [];
                this.nothingHere = true;
                return;
            }
            this.reviewData = [];
            for (let item of response.docs) {
                const review = item.data();
                review.reviewId = item.id;
                this.reviewData.push(review);
            }
            this.reviewDataStack.push(response);
            this.pageNumber = 0;
            if (this.reviewData.length < 5) {
                this.disableNext = true;
                this.maxLength = this.reviewData.length;
            }
        }, error => { console.error("Reviews:", error); });
    }
    nextPage() {
        this.disablePrev = false;
        this.nothingHere = false;
        const lastReview = this.reviewDataStack[this.reviewDataStack.length - 1].docs[this.pageLength - 1];
        this.afs.collection('Reviews', ref => {
            let query = ref.limit(this.pageLength);
            if (this.courseId) {
                query = query.where("classId", "==", this.courseId);
            }
            // TODO - query = query.where("appliesTo", "!=", this.reviewExclusionEnum) 
            if (this.queryValid) {
                query = query.where(this.f['category'].value, this.f['operation'].value, this.f['inputValue'].value);
                if (this.f['operation'].value != "==") {
                    query = query.orderBy(this.f['category'].value, "desc");
                }
            }
            return query.orderBy('timestamp', 'desc').startAfter(lastReview);
        }).get().subscribe(response => {
            if (!response.docs.length) {
                console.warn("Reviews:", "No reviews exist");
                //TODO Add something to let the user know that there are no reviews
                this.disableNext = true;
                return;
            }
            for (let item of response.docs) {
                const review = item.data();
                review.reviewId = item.id;
                this.reviewData.push(review);
            }
            this.pageNumber++;
            this.reviewDataStack.push(response);
            if (response.docs.length < 5) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
                this.disableNext = true;
                this.maxLength = this.reviewData.length;
            }
        }, error => { console.error("Reviews:", error); });
    }
    getPrevPage() {
        this.pageNumber--;
        this.disableNext = false;
        this.goToLocation("review-spacer");
    }
    getNextPage() {
        if ((this.pageNumber + 1) * this.pageLength >= this.reviewData.length) {
            this.nextPage();
        }
        else {
            this.pageNumber++;
        }
        if ((this.pageNumber + 1) * this.pageLength >= this.maxLength) {
            this.disableNext = true;
        }
        this.goToLocation("review-spacer");
    }
    onCourseChange(value) {
        this.courseId = value;
        this.getFirstPage();
    }
    get f() {
        return this.queryForm.controls;
    }
    onQuerySubmit() {
        if (this.queryForm.valid) {
            this.queryValid = true;
            this.getFirstPage();
        }
    }
    goToLocation(location) {
        window.location.hash = "";
        window.location.hash = location;
        let x = document.getElementsByClassName("mat-drawer-content")[0];
        x.scroll(0, x.scrollTop - 80);
    }
    newSort(event) {
        this.getFirstPage();
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], decls: 56, vars: 17, consts: [[1, "content"], [1, "filter-grid", 3, "formGroup"], [1, "query-card"], [2, "width", "100%"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "category-width"], ["formControlName", "category"], [1, "op-width"], ["formControlName", "operation"], [1, "input-width"], ["matInput", "", "formControlName", "inputValue", "type", "number"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["id", "review-spacer", 1, "review-spacer", "review-controller"], [1, "next-prev-container"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], ["appearance", "fill", 1, "order-dropdown"], [3, "value", "valueChange", "selectionChange"], [1, "review-container"], ["class", "center", 4, "ngIf"], [3, "reviewData", "pageNumber"], [1, "review-footer", "review-controller"], [3, "value"], [1, "center"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filter Reviews By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Filter by Class Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ReviewsComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.onCourseChange($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReviewsComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Filter By Query");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ReviewsComponent_mat_option_21_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Op.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ReviewsComponent_mat_option_27_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_32_listener() { return ctx.onQuerySubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Course Reviews:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_39_listener() { return ctx.getPrevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_41_listener() { return ctx.getNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ReviewsComponent_Template_mat_select_valueChange_44_listener($event) { return ctx.selectedSort = $event; })("selectionChange", function ReviewsComponent_Template_mat_select_selectionChange_44_listener($event) { return ctx.newSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ReviewsComponent_mat_option_45_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ReviewsComponent_div_47_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "app-review-detail", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_52_listener() { return ctx.getPrevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReviewsComponent_Template_button_click_54_listener() { return ctx.getNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.queryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 15, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.operations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Page ", ctx.pageNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disablePrev || ctx.pageNumber === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableNext);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedSort);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderByOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nothingHere);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reviewData", ctx.reviewData)("pageNumber", ctx.pageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Page ", ctx.pageNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disablePrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableNext);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_11__["ReviewDetailComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]], styles: [".filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 15px;\n  padding-bottom: 0px;\n}\n\n.query-card[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.query-card[_ngcontent-%COMP%]   .category-width[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n\n.query-card[_ngcontent-%COMP%]   .op-width[_ngcontent-%COMP%] {\n  max-width: 55px;\n}\n\n.query-card[_ngcontent-%COMP%]   .input-width[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  max-width: 100px;\n}\n\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2), 0px 0px 0px 1px rgba(0, 0, 0, 0.14), 1px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.review-spacer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  margin: 40px 0px 16px 5px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  margin: 0px 15px 50px 15px;\n}\n\n.review-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.content[_ngcontent-%COMP%] {\n  color: #545454;\n  font-family: \"Libre Franklin\", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  box-sizing: border-box;\n  padding: 0;\n  justify-content: center;\n  max-width: 1180px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n\n.order-dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-infix {\n  border-top: 0.5em solid transparent;\n  max-width: 150px;\n}\n\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-top: 0px !important;\n  border: 1px solid rgba(0, 0, 0, 0.26);\n  border-radius: 4px 4px 4px 4px !important;\n}\n\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-underline {\n  width: 0px !important;\n}\n\n.review-controller[_ngcontent-%COMP%]     .mat-select-arrow-wrapper {\n  vertical-align: bottom !important;\n}\n\n.review-controller[_ngcontent-%COMP%]   .page-label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 9px;\n}\n\n.review-controller[_ngcontent-%COMP%]   .next-prev-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  padding: 0.16rem 0rem 0.16rem 0rem;\n}\n\n@media (max-width: 400px) {\n  .review-controller[_ngcontent-%COMP%]   .next-prev-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 53px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9BO0VBQ0Usd0hBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDBCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFTRTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTRTtFQUNFLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtBQVBKOztBQVVFO0VBQ0UscUJBQUE7QUFSSjs7QUFXRTtFQUNFLGlDQUFBO0FBVEo7O0FBWUU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBVko7O0FBYUU7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBWEo7O0FBWUk7RUFIRjtJQUlJLGVBQUE7RUFUSjtBQUNGIiwiZmlsZSI6InJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5xdWVyeS1jYXJkIHtcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY2F0ZWdvcnktd2lkdGgge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cblxuICAub3Atd2lkdGgge1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgfVxuXG4gIC5pbnB1dC13aWR0aCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbn1cblxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDFweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ucmV2aWV3LXNwYWNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDQwcHggMHB4IDE2cHggNXB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudHtcbiAgbWFyZ2luOiAwcHggMTVweCA1MHB4IDE1cHg7XG59XG5cbi5yZXZpZXctZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRlbnQge1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgRnJhbmtsaW5cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub3JkZXItZHJvcGRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZXZpZXctY29udHJvbGxlciB7XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIGJvcmRlci10b3A6IDAuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGFnZS1sYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxuXG4gIC5uZXh0LXByZXYtY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZzogMC4xNnJlbSAwcmVtIDAuMTZyZW0gMHJlbTtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA0MDBweCl7XG4gICAgICBtaW4td2lkdGg6IDUzcHg7XG4gICAgfVxuICB9ICBcbn0iXX0= */"] });


/***/ }),

/***/ "cEwO":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function RegisterComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You must include your first name. This will never be shown publicly. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You must include your last name. This will never be shown publicly. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Must provide a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "@utexas.edu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " in length. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const semester_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", semester_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", semester_r7, " ");
} }
function RegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You must select a semester. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.error);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(auth, formBuilder, route) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = '/';
        this.error = '';
        this.emailRegex = "^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?utexas\.edu";
        this.Semesters = [
            'Fall 2019',
            'Spring 2020',
            'Fall 2020',
            'Spring 2021'
        ];
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailRegex)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            firstSemester: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/verifyEmail';
    }
    get f() {
        var _a;
        return (_a = this.registerForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    onSubmit() {
        var _a;
        this.submitted = true;
        if ((_a = this.registerForm) === null || _a === void 0 ? void 0 : _a.invalid) {
            return;
        }
        this.loading = true;
        this.auth.signUp(this.f.email.value, this.f.password.value, this.f.firstName.value, this.f.lastName.value, this.f.firstSemester.value)
            .then(() => { this.loading = false; })
            .catch(error => {
            this.loading = false;
            this.error = error;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 28, vars: 20, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "form-field-full-width"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstName", 3, "ngClass"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName", 3, "ngClass"], ["matInput", "", "placeholder", "UTexas Email", "formControlName", "email", 3, "ngClass"], ["matInput", "", "type", "password", "formControlName", "password", "placeholder", "Password", 3, "ngClass"], ["formControlName", "firstSemester"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "accent", 1, "btn-block"], ["class", "alert", 4, "ngIf"], [3, "value"], [1, "alert"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_mat_error_12_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterComponent_mat_error_15_Template, 5, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegisterComponent_mat_error_18_Template, 5, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "What was your first semester in the program?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_mat_option_23_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_mat_error_24_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Semesters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.firstSemester.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 12px;\n  font-size: 17px;\n  line-height: 1.23536;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\n  background-clip: padding-box;\n  padding: 0.70588rem 0.94118rem;\n  margin-bottom: 17px;\n  margin-top: 17px;\n  color: #1d1d1f;\n  border: 1px solid #d2d2d7;\n  background-color: rgba(0, 0, 0, 0.02);\n  border-color: rgba(227, 0, 0, 0.4);\n  background-color: #fff2f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0ZBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uYWxlcnQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMS4yMzUzNjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjAyMmVtO1xuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gVGV4dCxTRiBQcm8gSWNvbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBwYWRkaW5nOiAuNzA1ODhyZW0gLjk0MTE4cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICBjb2xvcjogIzFkMWQxZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjI3LDAsMCwuNCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjJmNDtcbn0iXX0= */"] });


/***/ }),

/***/ "cviW":
/*!**************************************************************!*\
  !*** ./src/app/courses/course-list/course-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










function CourseListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Course Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r18.CourseNumber);
} }
function CourseListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r19.ClassName);
} }
function CourseListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r20.RatingCount);
} }
function CourseListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r21.RatingCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, class_r21.RatingAvg * ctx_r7.scale / 7, "1.0-1") : "--");
} }
function CourseListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r22 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r22.RatingCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, class_r22.DifficultyAvg * ctx_r9.scale / 7, "1.0-1") : "--");
} }
function CourseListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Workload (hrs/wk)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r23.RatingCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, class_r23.WorkloadAvg, "1.0-1") : "--");
} }
function CourseListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Textbook");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](class_r24.RatingCount && class_r24.BookUsefulnessCount ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, class_r24.BookUsefulnessAvg * ctx_r25.scale / 7, "1.0-1") : "--");
} }
function CourseListComponent_td_21_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "No Book");
} }
function CourseListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CourseListComponent_td_21_div_1_Template, 3, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CourseListComponent_td_21_ng_template_2_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r24 = ctx.$implicit;
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", class_r24.Textbook)("ngIfElse", _r26);
} }
function CourseListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Semester");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseListComponent_td_24_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 30);
} }
function CourseListComponent_td_24_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 31);
} }
function CourseListComponent_td_24_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 32);
} }
function CourseListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CourseListComponent_td_24_mat_icon_1_Template, 1, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CourseListComponent_td_24_mat_icon_2_Template, 1, 0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CourseListComponent_td_24_mat_icon_3_Template, 1, 0, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r29 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r15.objectKeys(class_r29.semesters).toString().split(",").join("\n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltipPosition", "below");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", class_r29.season.spring);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", class_r29.season.summer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", class_r29.season.fall);
} }
function CourseListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 33);
} }
const _c0 = function (a1) { return ["/courses", a1]; };
function CourseListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 34);
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, row_r33.ClassName));
} }
class CourseListComponent {
    constructor(courses) {
        this.courses = courses;
        this.scale = 7;
        this.classes = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = [
            'CourseNumber',
            'ClassName',
            'RatingCount',
            'RatingAvg',
            'DifficultyAvg',
            'WorkloadAvg',
            'BookUsefulnessAvg',
            'Semester',
        ];
        this.objectKeys = Object.keys;
    }
    ngAfterViewInit() {
        this.courses.classes.subscribe(data => {
            this.classes = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.classes);
            this.dataSource.sort = this.sort;
        });
    }
    trackById(index, item) {
        return item.ClassName;
    }
}
CourseListComponent.ɵfac = function CourseListComponent_Factory(t) { return new (t || CourseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"])); };
CourseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CourseListComponent, selectors: [["app-course-list"]], viewQuery: function CourseListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { scale: "scale" }, decls: 27, vars: 4, consts: [["mat-table", "", "matSort", "", "matSortActive", "ClassName", "matSortDirection", "asc", 1, "mat-elevation-z8", 3, "dataSource", "trackBy"], ["matColumnDef", "CourseNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ClassName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "RatingCount"], ["matColumnDef", "RatingAvg"], ["matColumnDef", "DifficultyAvg"], ["matColumnDef", "WorkloadAvg"], ["mat-header-cell", "", "mat-sort-header", "", "matTooltip", "Hours spent per week", 4, "matHeaderCellDef"], ["matColumnDef", "BookUsefulnessAvg"], ["mat-header-cell", "", "mat-sort-header", "", "matTooltip", "How useful is the textbook?", 4, "matHeaderCellDef"], ["matColumnDef", "Semester"], ["mat-header-cell", "", "class", "center", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "center", 3, "matTooltip", "matTooltipPosition", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-cell", "", "mat-sort-header", "", "matTooltip", "Hours spent per week"], ["mat-header-cell", "", "mat-sort-header", "", "matTooltip", "How useful is the textbook?"], [4, "ngIf", "ngIfElse"], ["noTextbook", ""], ["mat-header-cell", "", 1, "center"], ["mat-cell", "", 1, "center", 3, "matTooltip", "matTooltipPosition"], ["svgIcon", "icons:spring", 4, "ngIf"], ["svgIcon", "icons:summer", 4, "ngIf"], ["svgIcon", "icons:fall", 4, "ngIf"], ["svgIcon", "icons:spring"], ["svgIcon", "icons:summer"], ["svgIcon", "icons:fall"], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"]], template: function CourseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CourseListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CourseListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CourseListComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CourseListComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CourseListComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CourseListComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CourseListComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CourseListComponent_td_12_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CourseListComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CourseListComponent_td_15_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CourseListComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CourseListComponent_td_18_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CourseListComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CourseListComponent_td_21_Template, 4, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CourseListComponent_th_23_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CourseListComponent_td_24_Template, 4, 5, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CourseListComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CourseListComponent_tr_26_Template, 1, 3, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource)("trackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".mat-cell,   .mat-header-cell {\n  word-wrap: initial;\n  display: table-cell;\n  padding: 0px 5px !important;\n  line-break: unset;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 1600px) {\n  table[_ngcontent-%COMP%] {\n    width: 1600px;\n  }\n}\n\nth[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n  .mat-tooltip {\n  white-space: pre-line !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.my-chips[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-height: 20px;\n  margin: 1px !important;\n  padding: 2px 8px;\n}\n\n.th[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.constrain-width[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  border-radius: 50%;\n  font-size: 12px;\n  color: #fff;\n  text-align: center;\n  display: inline-block;\n  margin: 3px;\n}\n\n.summer[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ebbc00;\n}\n\n.spring[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #00c261;\n}\n\n.fall[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #98482b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQUU7RUFGRjtJQUdJLGFBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdDQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBR0YiLCJmaWxlIjoiY291cnNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jZWxsLFxuOjpuZy1kZWVwIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHdvcmQtd3JhcDogaW5pdGlhbDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWJyZWFrOiB1bnNldDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgd2lkdGg6IDE2MDBweDtcbiAgfVxuIH1cblxudGgge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCAge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5teS1jaGlwcyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOjFweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggOHB4O1xufVxuXG4udGggLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY29uc3RyYWluLXdpZHRoIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDNweDtcbn1cblxuLnN1bW1lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZWJiYzAwO1xufVxuXG4uc3ByaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMGMyNjE7XG59XG5cbi5mYWxsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM5ODQ4MmI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "e1MI":
/*!***********************************************************************!*\
  !*** ./src/app/user/view-user-reviews/view-user-reviews.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewUserReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserReviewsComponent", function() { return ViewUserReviewsComponent; });
/* harmony import */ var src_app_shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/dialog/review-delete/dialog-on-delete.component */ "JbV0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function ViewUserReviewsComponent_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "You haven't created any reviews yet. Click here to get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewUserReviewsComponent_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewUserReviewsComponent_mat_list_item_8_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewUserReviewsComponent_mat_list_item_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openSnackBar("Link copied to clipboard."); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add_link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewUserReviewsComponent_mat_list_item_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const review_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.removeReview(review_r2.reviewId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/review/", review_r2.reviewId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", review_r2.course, "\u00A0 \u2014 \u00A0", review_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/review/edit/", review_r2.reviewId, "");
} }
class ViewUserReviewsComponent {
    constructor(auth, afs, clipboard, _snackBar, dialog) {
        this.auth = auth;
        this.afs = afs;
        this.clipboard = clipboard;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.reviewData = [];
        this.durationInSeconds = 3;
    }
    ngOnInit() {
        this.auth.userData.subscribe(data => {
            this.userData = data;
            this.getUserReviews();
        });
    }
    getUserReviews() {
        this.afs.collection('Reviews', ref => { var _a; return ref.where("userId", '==', (_a = this.userData) === null || _a === void 0 ? void 0 : _a.uid); }).get().subscribe(response => {
            if (!response.docs.length) {
                console.warn("View User Reviews: getUserReviews - No reviews exist");
                return;
            }
            this.reviewData = [];
            for (let item of response.docs) {
                const review = item.data();
                review.reviewId = item.id;
                this.reviewData.push(review);
            }
        }, error => { console.error("View User Reviews: getUserReviews - ", error); });
    }
    openSnackBar(message, action = "Dismiss") {
        this.clipboard.copy(window.location.host);
        this._snackBar.open(message, action, {
            duration: this.durationInSeconds * 1000,
        });
    }
    removeReview(reviewId) {
        if (!reviewId)
            return;
        this.openDialog(reviewId);
    }
    openDialog(reviewId) {
        const dialogRef = this.dialog.open(src_app_shared_dialog_review_delete_dialog_on_delete_component__WEBPACK_IMPORTED_MODULE_0__["DialogOnDelete"]);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.afs.collection("Reviews").doc(reviewId).delete();
                let index = this.reviewData.findIndex(x => x.reviewId == reviewId);
                this.reviewData.splice(index, 1);
            }
        });
    }
}
ViewUserReviewsComponent.ɵfac = function ViewUserReviewsComponent_Factory(t) { return new (t || ViewUserReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ViewUserReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewUserReviewsComponent, selectors: [["app-view-user-reviews"]], decls: 9, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "user-reviews-card-content"], ["routerLink", "/createReview", "class", "view-own-reviews-nothing-here", 4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/createReview", 1, "view-own-reviews-nothing-here"], ["matLine", ""], [3, "routerLink"], [1, "list-buttons", 3, "click"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "routerLink"]], template: function ViewUserReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewUserReviewsComponent_mat_list_item_7_Template, 3, 0, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewUserReviewsComponent_mat_list_item_8_Template, 13, 4, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reviewData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviewData);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"]], styles: ["@media (min-width: 600px) {\n  .mat-card[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n@media (max-width: 600px) {\n  .mat-card[_ngcontent-%COMP%] {\n    padding: 45px 10px 55px;\n  }\n}\n.list-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.user-reviews-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.view-own-reviews-nothing-here[_ngcontent-%COMP%]     .mat-line {\n  white-space: pre-wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZpZXctdXNlci1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBREo7SUFFUSxnQkFBQTtFQUNOO0FBQ0Y7QUFBSTtFQUpKO0lBS1EsdUJBQUE7RUFHTjtBQUNGO0FBQUE7RUFDSSxhQUFBO0FBR0o7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFBQTtFQUNJLGdDQUFBO0FBR0oiLCJmaWxlIjoidmlldy11c2VyLXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIEBtZWRpYShtaW4td2lkdGg6IDYwMHB4KXtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMTBweCA1NXB4O1xuICAgIH1cbn1cblxuLmxpc3QtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnVzZXItcmV2aWV3cy1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZpZXctb3duLXJldmlld3Mtbm90aGluZy1oZXJlIDo6bmctZGVlcCAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "eYhB":
/*!*****************************************************!*\
  !*** ./src/app/misc/thankyou/thankyou.component.ts ***!
  \*****************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panda-party/panda-party.component */ "y23b");


class ThankyouComponent {
    constructor() {
        this.title = "Thank you!!!";
        this.subtitle = "You are an amazing human being. From the bottom of our hearts, we want to say thanks for supporting this site. It wouldn't be possible without people like you.";
        this.source = "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880604/Happy-Dance_800x800_SEPS-2-1000x1000.jpg";
        this.sources = [
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880604/Happy-Dance_800x800_SEPS-2-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880312/Cuddling-Kitties_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880534/Powered-By-Coffee-and-Love_800x800_SEPS-1000x1000.jpg",
            "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881250/Paw-Painting-Corgi_800x800_SEPS-1000x1000.jpg"
        ];
        this.altText = "You are amazing!";
    }
    ngOnInit() {
    }
}
ThankyouComponent.ɵfac = function ThankyouComponent_Factory(t) { return new (t || ThankyouComponent)(); };
ThankyouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankyouComponent, selectors: [["app-thankyou"]], decls: 1, vars: 4, consts: [[3, "title", "src", "subtitle", "altText"]], template: function ThankyouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panda-party", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("altText", ctx.altText);
    } }, directives: [_panda_party_panda_party_component__WEBPACK_IMPORTED_MODULE_1__["PandaPartyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3lvdS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/classes/class.service */ "IBUy");


class FooterComponent {
    constructor(courseService) {
        this.courseService = courseService;
        this.currentYear = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_classes_class_service__WEBPACK_IMPORTED_MODULE_1__["ClassService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 18, vars: 7, consts: [[1, "footer"], ["href", "mailto:mscshub@gmail.com"], ["href", "https://mscshub.github.io/MSCSHub-documentation/"], [1, "footer-links"], ["href", "https://www.cs.utexas.edu/graduate-program/masters-program/online-option"], [3, "href"], ["href", "https://github.com/MSCSHub/MSCSHub"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Created by Eric Pryzant and Eric Straw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "mscshub@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Official UT Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A9 ", ctx.currentYear, " ", ctx.courseService.properName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.courseService.websiteName, " Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.courseService.socialURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.courseService.socialName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.courseService.redditURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.courseService.redditName);
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-style: italic;\n  color: #696767;\n  min-height: 50px;\n  padding-top: 15px;\n}\n\n.footer-links[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBRUE7RUFDSSx1Q0FBQTtVQUFBLCtCQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOnJnYigxMDUsIDEwMywgMTAzKTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uZm9vdGVyLWxpbmtzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59Il19 */"] });


/***/ }),

/***/ "gPcw":
/*!**************************************************************!*\
  !*** ./src/app/reviews/star-rating/star-rating.component.ts ***!
  \**************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



const _c0 = function (a0) { return { "selected": a0 }; };
function StarRatingComponent_div_0_pz_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pz", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, star_r4 <= ctx_r3.selectedValue));
} }
function StarRatingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_div_0_pz_1_Template, 2, 3, "pz", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.stars);
} }
function StarRatingComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Textbook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StarRatingComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Reviewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StarRatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StarRatingComponent_ng_template_1_div_0_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_ng_template_1_div_1_Template, 2, 0, "div", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedValue == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedValue < 0);
} }
class StarRatingComponent {
    constructor() {
        this.stars = [1, 2, 3, 4, 5, 6, 7];
        this.selectedValue = 0;
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { selectedValue: "selectedValue" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [4, "ngIf"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StarRatingComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedValue > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], styles: [".rating-list[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXItcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSiIsImZpbGUiOiJzdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRpbmctbGlzdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjZmZkNzAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "gRJU":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/dialog/review-too-short/dialog-review-too-short.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogReviewTooShort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogReviewTooShort", function() { return DialogReviewTooShort; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogReviewTooShort {
    constructor() {
        this.content = `
    Hi, thanks for taking the time to write a review, though are you sure you wrote enough?
    Most students typically write over 200 words, and it looks like you wrote less than 100.

    Would you please consider going back and adding some more detail? Your classmates would appreciate it!
  `;
    }
}
DialogReviewTooShort.ɵfac = function DialogReviewTooShort_Factory(t) { return new (t || DialogReviewTooShort)(); };
DialogReviewTooShort.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogReviewTooShort, selectors: [["dialog-review-too-short-dialog"]], decls: 9, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [2, "white-space", "pre-line", 3, "innerHtml"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "primary", 3, "mat-dialog-close"]], template: function DialogReviewTooShort_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Review is too short");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit it anyway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "gr6c":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function ForgotPasswordComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
} }
function ForgotPasswordComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.error);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ForgotPasswordComponent {
    constructor(auth, formBuilder, router) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.resetForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    onSubmit() {
        this.auth.forgotPassword(this.resetForm.controls['email'].value);
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 13, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "reset-form", 3, "formGroup", "ngSubmit"], [1, "form-field-full-width"], ["matInput", "", "placeholder", "Email", "formControlName", "email", 3, "ngClass"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ForgotPasswordComponent_span_10_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ForgotPasswordComponent_div_12_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  border-radius: 12px;\n  font-size: 17px;\n  line-height: 1.23536;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\n  background-clip: padding-box;\n  padding: 0.70588rem 0.94118rem;\n  margin-bottom: 17px;\n  margin-top: 17px;\n  color: #1d1d1f;\n  border: 1px solid #d2d2d7;\n  background-color: rgba(0, 0, 0, 0.02);\n  border-color: rgba(227, 0, 0, 0.4);\n  background-color: #fff2f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9GQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5hbGVydCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjIzNTM2O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDIyZW07XG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBUZXh0LFNGIFBybyBJY29ucyxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHBhZGRpbmc6IC43MDU4OHJlbSAuOTQxMThyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIGNvbG9yOiAjMWQxZDFmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMjcsMCwwLC40KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMmY0O1xufSJdfQ== */"] });


/***/ }),

/***/ "gsZg":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class VerifyEmailComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    resendVerification() {
        this.auth.resendVerification();
        window.alert("The request to resend the verification email has been received. Please check your email.");
        this.router.navigate(['/']);
    }
}
VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) { return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VerifyEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerifyEmailComponent, selectors: [["app-verify-email"]], decls: 13, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], ["mat-stroked-button", "", "color", "primary", "href", "https://mail.google.com/a/utexas.edu"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function VerifyEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Verify Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The last step is to verify your email before you start posting reviews.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Open UT Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_a_click_11_listener() { return ctx.resendVerification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Resend Verification Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"]], styles: [".mat-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mat-card-content[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUiIsImZpbGUiOiJ2ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "hBAp":
/*!*******************************************************!*\
  !*** ./src/app/navigation/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "GrNO");
/* harmony import */ var _search_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../search/search-input/search-input.component */ "Zebc");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");










class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.menuClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentUrl = '';
        this.menuStatus = false;
        this.website = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].website;
        this.logoUrl = this.website === "computerScience" ? "assets/images/logos/Colorwheel/Colorwheel-40-bcs.png" : "assets/images/logos/Colorwheel/TheHubMSDS-128.png";
        this.degreeName = this.website === "computerScience" ? "Computer Science" : "Data Science";
        this.websiteName = this.website === "computerScience" ? "MSCSHub" : "MSDSHub";
        this.properName = this.website === "computerScience" ? "MSCSO" : "MSDSO";
        this.socialName = this.website === "computerScience" ? "Slack" : "Discord";
        this.socialURL = this.website === "computerScience" ? "https://utmscso.slack.com/archives/C01QM0A19QR" : "https://discord.gg/SDh57AHQu3";
        this.socialLogo = this.website === "computerScience" ? "logos:slack" : "logos:discord";
        this.redditURL = this.website === "computerScience" ? "https://www.reddit.com/r/mscso" : "https://www.reddit.com/r/msdso";
    }
    ngOnInit() {
        this.currentUrl = this.router.url;
    }
    doSearch(event) {
        alert(this.currentUrl);
    }
    doMenuClick() {
        this.menuClicked.emit();
    }
    donateLink() {
        window.location.href = "https://www.paypal.com/donate?hosted_button_id=8HUJHWGZD4MUG";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { drawerFunc: "drawerFunc" }, outputs: { menuClicked: "menuClicked" }, decls: 18, vars: 8, consts: [["color", "primary", 1, "app-toolbar", "no-print"], ["mat-button", "", 1, "hamburger", 3, "click"], ["svgIcon", "menu"], ["routerLink", "/", "fragment", "big-image", 1, "nav-link", "home"], ["width", "45", "height", "45", "title", "Home", "alt", "Home", 3, "src"], ["fxHide.lt-sm", "", "fxShow", "", 1, "search-container", 3, "onSearch", "onFocus"], ["searchBox", ""], ["fxHide.lt-md", "", "mat-raised-button", "", 1, "donate", 3, "click"], ["fxHide.lt-md", "", "fxShow", "", 1, "toolbar-external-icons-container"], [3, "href", "title"], [3, "svgIcon"], ["href", "https://github.com/MSCSHub/MSCSHub", "title", "GitHub", "aria-label", "UT MSCSO on GitHub"], ["svgIcon", "logos:github"], ["title", "Reddit", 3, "href"], ["svgIcon", "logos:reddit"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.doMenuClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-nav-nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-search-input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function NavbarComponent_Template_app_search_input_onSearch_7_listener($event) { return ctx.doSearch($event); })("onFocus", function NavbarComponent_Template_app_search_input_onFocus_7_listener($event) { return ctx.doSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.donateLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.socialName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate2"]("aria-label", "UT ", ctx.properName, " on ", ctx.socialName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("svgIcon", ctx.socialLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.redditURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("aria-label", "UT ", ctx.properName, " on Reddit");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _search_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_7__["SearchInputComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"]], styles: [".header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 60px;\n}\n\n.header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n\n.header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n\n.homepage-promo[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.homepage-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 400;\n  margin: 0 0 16px 0;\n  padding: 0;\n}\n\n.homepage-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0 0 24px 0;\n  padding: 0;\n}\n\n.homepage-row[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 920px;\n  margin: 60px 0;\n}\n\n.homepage-row[_ngcontent-%COMP%]   .svg-image[_ngcontent-%COMP%] {\n  max-width: 90%;\n}\n\n.homepage-reverse-row[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.header-start[_ngcontent-%COMP%], .homepage-bottom-start[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 60px 0;\n}\n\n.homepage-promo-img[_ngcontent-%COMP%], .homepage-promo-desc[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.homepage-promo-img[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.homepage-promo-desc[_ngcontent-%COMP%] {\n  line-height: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n\n\n@media (max-width: 720px) {\n  .header-section[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .header-start[_ngcontent-%COMP%], .homepage-bottom-start[_ngcontent-%COMP%] {\n    margin: 15px 0;\n  }\n\n  .homepage-row[_ngcontent-%COMP%] {\n    margin: 15px 0;\n  }\n}\n\n.homepage-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-column-gap: 1vh;\n  grid-row-gap: 1vh;\n  width: 100%;\n}\n\n@media (min-width: 620px) {\n  .homepage-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-column-gap: 1vh;\n    grid-row-gap: 1vh;\n    width: 100%;\n  }\n}\n\n@media (min-width: 960px) {\n  .homepage-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 1vh;\n    grid-row-gap: 1vh;\n    width: 100%;\n  }\n}\n\n.space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.donate[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQVQwQjtBQU01Qjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTko7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtBQVJGOztBQVdBO0VBQ0UsMkJBQUE7QUFSRjs7QUFXQTs7RUFFRSxrQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTs7RUFFRSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUkY7O0FBV0E7O0dBQUE7O0FBR0E7RUFDRTtJQUNFLGlCQTFGOEI7RUFrRmhDOztFQVdBOztJQUVFLGNBQUE7RUFSRjs7RUFXQTtJQUNFLGNBQUE7RUFSRjtBQUNGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDREQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUFURjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EscUNBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQVZGO0FBQ0Y7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbWFyZ2luIGJldHdlZW4gdHdvIHNlY3Rpb25zXG4kbWFyZ2luLXByb21vdGlvbi1zZWN0aW9uczogNjBweDtcbiRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zLXNtYWxsOiAxNXB4O1xuXG4uaGVhZGVyLWJhY2tncm91bmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucztcbn1cblxuLmhlYWRlci1oZWFkbGluZSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDU2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDE1cHggNXB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMTVweCAwIDI1cHggMDtcbiAgfVxufVxuXG4uaG9tZXBhZ2UtcHJvbW8ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMCAwIDI0cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5ob21lcGFnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDkyMHB4O1xuICBtYXJnaW46ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zIDA7XG59XG5cbi5ob21lcGFnZS1yb3cgLnN2Zy1pbWFnZSB7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaG9tZXBhZ2UtcmV2ZXJzZS1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5oZWFkZXItc3RhcnQsXG4uaG9tZXBhZ2UtYm90dG9tLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zIDA7XG59XG5cbi5ob21lcGFnZS1wcm9tby1pbWcsXG4uaG9tZXBhZ2UtcHJvbW8tZGVzYyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5ob21lcGFnZS1wcm9tby1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lcGFnZS1wcm9tby1kZXNjIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKipcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxuICAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5oZWFkZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zLXNtYWxsO1xuICB9XG5cbiAgLmhlYWRlci1zdGFydCxcbiAgLmhvbWVwYWdlLWJvdHRvbS1zdGFydCB7XG4gICAgbWFyZ2luOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucy1zbWFsbCAwO1xuICB9XG5cbiAgLmhvbWVwYWdlLXJvdyB7XG4gICAgbWFyZ2luOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucy1zbWFsbCAwO1xuICB9XG59XG5cbi5ob21lcGFnZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBncmlkLWNvbHVtbi1nYXA6IDF2aDtcbiAgZ3JpZC1yb3ctZ2FwOiAxdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjIwcHgpIHtcbiAgLmhvbWVwYWdlLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMXZoO1xuICAgIGdyaWQtcm93LWdhcDogMXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuaG9tZXBhZ2UtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMXZoO1xuICAgIGdyaWQtcm93LWdhcDogMXZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZG9uYXRlIHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "hK/H":
/*!******************************************************************!*\
  !*** ./src/app/courses/course-detail/course-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: CourseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailComponent", function() { return CourseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-card/course-card.component */ "PMFN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../reviews/review-detail/review-detail.component */ "T3Tc");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















const _c0 = ["imageContainer"];
const _c1 = ["gradientContainer"];
function CourseDetailComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Textbook: ", ctx_r2.course == null ? null : ctx_r2.course.TextbookName, "");
} }
function CourseDetailComponent_div_26_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_div_26_mat_chip_1_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r9.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", item_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, item_r7.key), "\u00A0");
} }
function CourseDetailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailComponent_div_26_mat_chip_1_Template, 6, 4, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.value);
} }
function CourseDetailComponent_mat_chip_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lang_r13, "\u00A0");
} }
function CourseDetailComponent_div_29_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_div_29_mat_chip_1_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r16.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r15.semesterMatch(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, season_r14.key), ctx_r15.objectKeys(ctx_r15.course.semesters)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, season_r14.key), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("svgIcon", "icons:", season_r14.key, "");
} }
function CourseDetailComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailComponent_div_29_mat_chip_1_Template, 6, 7, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", season_r14.value);
} }
function CourseDetailComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sort by ", option_r20.displayText, " ");
} }
class CourseDetailComponent {
    constructor(route, afs, auth, renderer, classService) {
        this.route = route;
        this.afs = afs;
        this.auth = auth;
        this.renderer = renderer;
        this.classService = classService;
        this.courseName = "";
        this.courseNumber = "";
        this.cards = [
            { title: 'Reviews', subtitle: 'Total Count', value: 0 },
            { title: 'Rating', subtitle: 'On a Scale of 1-7', value: 0 },
            { title: 'Difficulty', subtitle: 'On a Scale of 1-7', value: 0 },
            { title: 'Workload', subtitle: 'Hours Per Week', value: 0 },
            { title: 'Textbook', subtitle: 'On a Scale of 1-7', value: 0 },
            { title: 'Lectures', subtitle: 'On a Scale of 1-7', value: 0 },
            { title: 'Professor', subtitle: 'On a Scale of 1-7', value: 0 },
            { title: 'Piazza Support', subtitle: 'On a Scale of 1-7', value: 0 },
        ];
        this.orderByOptions = [
            { displayText: "Most Helpful", field: "wilsonScore", order: "desc" },
            { displayText: "Least Helpful", field: "wilsonScore", order: "asc" },
            { displayText: "Newest", field: "timestamp", order: "desc" },
            { displayText: "Oldest", field: "timestamp", order: "asc" },
        ];
        this.reviewDataStack = [];
        this.reviewData = [];
        this.pageNumber = 0;
        this.disableNext = false;
        this.disablePrev = false;
        this.pageLength = 5;
        this.maxLength = 99999;
        this.isLoggedIn = false;
        this.selectedSort = this.orderByOptions[0];
        this.objectKeys = Object.keys;
    }
    ngAfterViewInit() {
        this.updateGraphicStyles();
    }
    ngOnInit() {
        this.courseName = this.route.snapshot.paramMap.get('courseId') || "";
        this.auth.isLoggedIn.subscribe(state => { this.isLoggedIn = state; });
        this.getClassData();
        this.getFirstPage();
        document.getElementsByClassName("mat-drawer-content")[0].scroll(0, 0); // Ensures that we start from the top
    }
    getClassData() {
        this.classService.classes.subscribe(data => {
            this.course = data.find(x => x.ClassName == this.courseName);
            this.courseNumber = this.course.CourseNumber;
            this.updateCards(this.course);
            this.updateGraphicStyles();
        });
    }
    updateGraphicStyles() {
        var _a, _b, _c, _d, _e;
        if ((_a = this.gradientContainer) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.renderer.setStyle((_b = this.gradientContainer) === null || _b === void 0 ? void 0 : _b.nativeElement, 'background', (_c = this.course) === null || _c === void 0 ? void 0 : _c.GraphicColor);
            this.renderer.setStyle((_d = this.imageContainer) === null || _d === void 0 ? void 0 : _d.nativeElement, 'background-image', (_e = this.course) === null || _e === void 0 ? void 0 : _e.GraphicUrl);
        }
    }
    getFirstPage() {
        this.pageNumber = 0;
        this.disablePrev = true;
        this.disableNext = false;
        this.reviewDataStack = [];
        this.afs.collection('Reviews', ref => ref
            .where("course", '==', this.courseName)
            .limit(this.pageLength)
            .orderBy(this.selectedSort.field, this.selectedSort.order)).get().subscribe(response => {
            this.reviewData = [];
            if (!response.docs.length) {
                console.warn("Course Detail: No reviews exist");
                this.disableNext = true;
                this.disablePrev = true;
                return;
            }
            for (let item of response.docs) {
                const review = item.data();
                review.reviewId = item.id;
                this.reviewData.push(review);
            }
            this.reviewDataStack.push(response);
            this.pageNumber = 0;
            if (response.docs.length < 5) {
                this.disableNext = true;
                this.maxLength = this.reviewData.length;
            }
        }, error => { console.error("Course Detail: getFirstPage - ", error); });
    }
    nextPage() {
        this.disablePrev = false;
        const lastReview = this.reviewDataStack[this.reviewDataStack.length - 1].docs[this.pageLength - 1];
        this.afs.collection('Reviews', ref => ref
            .where("course", '==', this.courseName)
            .limit(this.pageLength)
            .orderBy(this.selectedSort.field, this.selectedSort.order)
            .startAfter(lastReview)).get().subscribe(response => {
            if (!response.docs.length) {
                console.warn("Course Detail: No reviews exist");
                this.disableNext = true;
                return;
            }
            for (let item of response.docs) {
                const review = item.data();
                review.reviewId = item.id;
                this.reviewData.push(review);
            }
            this.reviewDataStack.push(response);
            this.pageNumber++;
            if (response.docs.length < 5 || this.reviewData.length >= this.course.RatingCount) {
                this.disableNext = true;
                this.maxLength = this.reviewData.length;
            }
        }, error => { console.error("Course Detail: nextPage -", error); });
    }
    getPrevPage() {
        this.pageNumber--;
        this.disableNext = false;
        if (this.pageNumber === 0) {
            this.disablePrev = true;
        }
        this.goToLocation("review-spacer");
    }
    getNextPage() {
        this.disablePrev = false;
        if ((this.pageNumber + 1) * this.pageLength >= this.reviewData.length) {
            this.nextPage();
        }
        else {
            this.pageNumber++;
        }
        if ((this.pageNumber + 1) * this.pageLength >= this.maxLength) {
            this.disableNext = true;
        }
        this.goToLocation("review-spacer");
    }
    goToLocation(location) {
        window.location.hash = "";
        window.location.hash = location;
        let x = document.getElementsByClassName("mat-drawer-content")[0];
        x.scroll(0, x.scrollTop - 40);
    }
    updateCards(course) {
        this.cards[0].value = course.RatingCount;
        this.cards[1].value = course.RatingAvg;
        this.cards[2].value = course.DifficultyAvg;
        this.cards[3].value = course.WorkloadAvg;
        this.cards[4].value = course.Textbook ? course.BookUsefulnessAvg : 0;
        this.cards[5].value = course.LectureQualityAvg;
        this.cards[6].value = course.ProfessorQualityAvg;
        this.cards[7].value = course.PiazzaCommunityAvg;
    }
    semesterMatch(season, semesters) {
        return semesters.filter(function (k) { return ~k.indexOf(season); }).toString().split(',').join('\n');
    }
    newSort(event) {
        this.getFirstPage();
    }
}
CourseDetailComponent.ɵfac = function CourseDetailComponent_Factory(t) { return new (t || CourseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"])); };
CourseDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDetailComponent, selectors: [["app-course-detail"]], viewQuery: function CourseDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gradientContainer = _t.first);
    } }, decls: 55, vars: 28, consts: [[1, "content"], [1, "image-container"], ["imageContainer", ""], [1, "gradient-container"], ["gradientContainer", ""], ["fxFlex", ""], [1, "edit-chip", 3, "routerLink"], ["matTooltip", "Edit course details", 1, "tab"], [1, "padded-cell", "white"], [1, "flat-bottom"], [1, "white"], [4, "ngIf"], ["svgIcon", "icons:check"], [4, "ngFor", "ngForOf"], [3, "data"], ["id", "review-spacer", 1, "review-spacer"], [1, "review-controller"], [1, "next-prev-container"], [1, "page-label"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], ["appearance", "fill", 1, "order-dropdown"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "review-container"], [3, "reviewData", "pageNumber"], [1, "review-footer"], [3, "matTooltip", "click", 4, "ngIf"], [3, "matTooltip", "click"], ["tooltip", "matTooltip"], [3, "svgIcon"], [3, "value"]], template: function CourseDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-chip", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "mode_edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CourseDetailComponent_span_20_Template, 3, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CourseDetailComponent_div_26_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CourseDetailComponent_mat_chip_28_Template, 3, 1, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CourseDetailComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-course-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Course Reviews:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_Template_button_click_39_listener() { return ctx.getPrevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_Template_button_click_41_listener() { return ctx.getNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CourseDetailComponent_Template_mat_select_valueChange_44_listener($event) { return ctx.selectedSort = $event; })("selectionChange", function CourseDetailComponent_Template_mat_select_selectionChange_44_listener($event) { return ctx.newSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CourseDetailComponent_mat_option_45_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-review-detail", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_Template_button_click_51_listener() { return ctx.getPrevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailComponent_Template_button_click_53_listener() { return ctx.getNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/edit/", ctx.courseName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.courseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.courseNumber, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Professor: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 20, ctx.course == null ? null : ctx.course.Teacher), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course == null ? null : ctx.course.Textbook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, ctx.course == null ? null : ctx.course.category), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 24, ctx.course == null ? null : ctx.course.meta));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.course == null ? null : ctx.course.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 26, ctx.course == null ? null : ctx.course.season));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Page ", ctx.pageNumber + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablePrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableNext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedSort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderByOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviewData", ctx.reviewData)("pageNumber", ctx.pageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Page ", ctx.pageNumber + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablePrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableNext);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _course_card_course_card_component__WEBPACK_IMPORTED_MODULE_10__["CourseCardComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_14__["ReviewDetailComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"]], styles: ["h2[_ngcontent-%COMP%] {\n  line-height: 5rem;\n  font-weight: 900;\n  text-shadow: 1px 1px 1px rgba(51, 63, 72, 0.4);\n  text-transform: uppercase;\n  color: #ffffff;\n  margin-top: 0.75em;\n}\n@media (min-width: 500px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 5rem;\n  }\n}\n@media (max-width: 500px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  line-height: 2.75rem;\n  font-weight: 700;\n  margin-top: 1em;\n  margin-bottom: 0px;\n  padding-bottom: 10px;\n  letter-spacing: -0.025rem;\n}\n.review-spacer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.review-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.next-prev-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  padding: 0.16rem 0rem 0.16rem 0rem;\n}\n.mat-card[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  margin: 0px 15px 50px 15px;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  overflow: hidden;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-auto-flow: dense;\n  justify-content: center;\n  padding-top: 20px;\n}\n.padded-cell[_ngcontent-%COMP%] {\n  padding: 8% 3%;\n}\n.white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.content[_ngcontent-%COMP%] {\n  color: #545454;\n  font-family: \"Libre Franklin\", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  box-sizing: border-box;\n  padding: 0;\n  justify-content: center;\n  max-width: 1180px;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n.image-container[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-position: 90% 50%;\n  background-repeat: no-repeat;\n  background-attachment: local;\n  background-color: #005f86;\n}\n.gradient-container[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  background-size: cover;\n}\n  .mat-tooltip, .semesters-chip[_ngcontent-%COMP%] {\n  white-space: pre-line !important;\n}\n.tab[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.edit-chip[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-top: 15px;\n  margin-bottom: -15px;\n}\n.order-dropdown[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.review-controller[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  margin: 0 0 -16px;\n}\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-infix {\n  border-top: 0.5em solid transparent;\n  max-width: 150px;\n}\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-top: 0px !important;\n  border: 1px solid rgba(0, 0, 0, 0.26);\n  border-radius: 4px 4px 4px 4px !important;\n}\n.review-controller[_ngcontent-%COMP%]     .mat-form-field-underline {\n  width: 0px !important;\n}\n.review-controller[_ngcontent-%COMP%]     .mat-select-arrow-wrapper {\n  vertical-align: bottom !important;\n}\n.review-controller[_ngcontent-%COMP%]   .page-label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 9px;\n}\n.review-controller[_ngcontent-%COMP%]   .next-prev-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 55px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdXJzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFPRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxGO0FBTkU7RUFERjtJQUVJLGVBQUE7RUFTRjtBQUNGO0FBUkU7RUFKRjtJQUtJLGlCQUFBO0VBV0Y7QUFDRjtBQUZBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUtGO0FBRkE7RUFDRSxhQUFBO0FBS0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUtGO0FBRkE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0FBS0Y7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFGQTtFQUNFLDBCQUFBO0FBS0Y7QUFGQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0REFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUtGO0FBRkE7RUFDRSxjQUFBO0FBS0Y7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7QUFGQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUZBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUtGO0FBRkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBS0Y7QUFGQTtFQUNFLGdDQUFBO0FBS0Y7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUtGO0FBREE7RUFDRSxlQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUlGO0FBRkU7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0FBSUo7QUFERTtFQUNFLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtBQUdKO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKO0FBRUU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJjb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG4gIGxpbmUtaGVpZ2h0OiA1cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSg1MSwgNjMsIDcyLCAwLjQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMC43NWVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBsaW5lLWhlaWdodDogMi43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDI1cmVtO1xufVxuXG4ucmV2aWV3LXNwYWNlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5yZXZpZXctZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm5leHQtcHJldi1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmc6IDAuMTZyZW0gMHJlbSAwLjE2cmVtIDByZW07XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50e1xuICBtYXJnaW46IDBweCAxNXB4IDUwcHggMTVweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5wYWRkZWQtY2VsbCB7XG4gIHBhZGRpbmc6IDglIDMlO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudCB7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDkwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogbG9jYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVmODY7XG59XG5cbi5ncmFkaWVudC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2x0aXAsIC5zZW1lc3RlcnMtY2hpcHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi50YWIge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmVkaXQtY2hpcCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cblxuLm9yZGVyLWRyb3Bkb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmV2aWV3LWNvbnRyb2xsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDAgLTE2cHg7XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBib3JkZXItdG9wOiAwLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2UtbGFiZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIH1cbiAgLm5leHQtcHJldi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDU1cHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: svgIconProviders, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgIconProviders", function() { return svgIconProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/custom-icons/custom-icon-registry */ "U728");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");






































// These are the hardcoded inline svg sources to be used by the `<mat-icon>` component.
// tslint:disable: max-line-length
const svgIconProviders = [
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            name: 'close',
            svgSource: '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />' +
                '<path d="M0 0h24v24H0z" fill="none" />' +
                '</svg>',
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            name: 'insert_comment',
            svgSource: '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />' +
                '<path d="M0 0h24v24H0z" fill="none" />' +
                '</svg>',
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            name: 'keyboard_arrow_right',
            svgSource: '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />' +
                '</svg>',
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            name: 'menu',
            svgSource: '<svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />' +
                '</svg>',
        },
        multi: true,
    },
    // Namespace: logos
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'logos',
            name: 'github',
            svgSource: '<svg focusable="false" viewBox="0 0 51.8 50.4" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M25.9,0.2C11.8,0.2,0.3,11.7,0.3,25.8c0,11.3,7.3,20.9,17.5,24.3c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.6,0-4.8' +
                'c-7.1,1.5-8.6-3-8.6-3c-1.2-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6c2.6,0.2,3.9,2.6,3.9,2.6c2.3,3.9,6,2.8,7.5,2.1' +
                'c0.2-1.7,0.9-2.8,1.6-3.4c-5.7-0.6-11.7-2.8-11.7-12.7c0-2.8,1-5.1,2.6-6.9c-0.3-0.7-1.1-3.3,0.3-6.8c0,0,2.1-0.7,7,2.6' +
                'c2-0.6,4.2-0.9,6.4-0.9c2.2,0,4.4,0.3,6.4,0.9c4.9-3.3,7-2.6,7-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.6,1.8,2.6,4.1,2.6,6.9' +
                'c0,9.8-6,12-11.7,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.2-3.4,17.5-13,17.5-24.3' +
                'C51.5,11.7,40.1,0.2,25.9,0.2z" />' +
                '</svg>',
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'logos',
            name: 'twitter',
            svgSource: '<svg focusable="false" viewBox="0 0 50 59" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M50,9.3c-1.8,0.8-3.8,1.4-5.9,1.6c2.1-1.3,3.7-3.3,4.5-5.7c-2,1.2-4.2,2-6.5,2.5c-1.9-2-4.5-3.2-7.5-3.2' +
                'c-5.7,0-10.3,4.6-10.3,10.3c0,0.8,0.1,1.6,0.3,2.3C16.1,16.7,8.5,12.6,3.5,6.4c-0.9,1.5-1.4,3.3-1.4,5.2c0,3.6,1.8,6.7,4.6,8.5' +
                'C5,20,3.4,19.6,2,18.8c0,0,0,0.1,0,0.1c0,5,3.5,9.1,8.2,10.1c-0.9,0.2-1.8,0.4-2.7,0.4c-0.7,0-1.3-0.1-1.9-0.2' +
                'c1.3,4.1,5.1,7,9.6,7.1c-3.5,2.8-7.9,4.4-12.7,4.4c-0.8,0-1.6,0-2.4-0.1c4.5,2.9,9.9,4.6,15.7,4.6c18.9,0,29.2-15.6,29.2-29.2' +
                'c0-0.4,0-0.9,0-1.3C46.9,13.2,48.6,11.4,50,9.3z" />' +
                '</svg>',
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'logos',
            name: 'slack',
            svgSource: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"' +
                'aria-hidden="true" focusable="false">' +
                '<path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 ' +
                '0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 ' +
                '1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 ' +
                '0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 ' +
                '1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z"/>' +
                '</svg>'
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'logos',
            name: 'reddit',
            svgSource: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"/></svg>`
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'icons',
            name: 'summer',
            svgSource: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 512 512">
          <g>
            <path d="M377.139 259.492c0 66.637-54.020 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658 0-66.637 54.020-120.658 120.658-120.658 66.637 0 120.658 54.020 120.658 120.658z" fill="#ebbc00"/>
            <path d="M228.352 100.669l30.27-77.906 25.979 77.906z" fill="#ebbc00"/>
            <path d="M228.352 411.341l30.27 77.895 25.979-77.895z" fill="#ebbc00"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M100.659 287.601l-77.895-30.29 77.895-25.959z" fill="#ebbc00"/>
            <path d="M411.361 287.601l77.875-30.29-77.875-25.959z" fill="#ebbc00"/>
            <path d="M126.597 165.703l-33.659-76.472 73.442 36.7z" fill="#ebbc00"/>
            <path d="M346.276 385.423l76.524 33.639-36.741-73.442z" fill="#ebbc00"/>
            <path d="M168.499 388.199l-76.493 33.639 36.72-73.442z" fill="#ebbc00"/>
            <path d="M388.199 168.499l33.618-76.513-73.4 36.751z" fill="#ebbc00"/>
          </g>
        </svg>
        `
        },
        multi: true,
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'icons',
            name: 'spring',
            svgSource: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="24" height="24">
          <defs>
            <style>
              .cls-1 {
                fill: #7ba60d;
              }

              .cls-2 {
                fill: #9cc925;
              }

              .cls-3 {
                fill: #ffa400;
              }

              .cls-4 {
                fill: #ffd900;
              }
            </style>
          </defs>
          <title>orange-flower</title>
          <g id="orange-flower">
            <path class="cls-1"
              d="M63.09,55.21a1.6,1.6,0,0,0-2.27,0l-6.06,5.79a2.06,2.06,0,0,0-.13.18c-.06,0-.12.07-.17.12l-9,9.24-9-9.24a1.24,1.24,0,0,0-.17-.12,1.43,1.43,0,0,0-.13-.18l-6.05-5.79a1.61,1.61,0,1,0-2.22,2.32L34,63.27a1.42,1.42,0,0,0,.14.09,1.05,1.05,0,0,0,.09.13l9.32,9.59a1.59,1.59,0,0,0,1.15.48,1.61,1.61,0,0,0,.82-.26,1.57,1.57,0,0,0,.81.26,1.59,1.59,0,0,0,1.15-.48l9.33-9.59a.68.68,0,0,0,.08-.13.82.82,0,0,0,.14-.08L63,57.48A1.61,1.61,0,0,0,63.09,55.21Z" />
            <path class="cls-1" d="M43.86,37.53V83.39a1.6,1.6,0,1,0,3.21,0V37.53Z" />
            <path class="cls-2"
              d="M21.17,49.05S21.35,67.13,33,67.14a6.65,6.65,0,0,0,6.64-6.64C39.61,50.6,21.17,49.05,21.17,49.05Z" />
            <path class="cls-2"
              d="M50.39,60.49A6.65,6.65,0,0,0,57,67.14c11.62,0,11.8-18.09,11.8-18.09S50.39,50.6,50.39,60.49Z" />
            <path class="cls-3"
              d="M69.17,27.15c-.23-7.56-11.55-7.27-11.55-7.27s6.74-8.7-.52-13.63S45,12.61,45,12.61,40.83,1.94,33,6.25s-.52,13.63-.52,13.63-12.62-2-11.54,7.27,11.54,7.27,11.54,7.27S25.7,43.12,33,48.05,45,41.69,45,41.69s4.21,10.67,12.07,6.36.52-13.63.52-13.63S69.4,34.72,69.17,27.15Z" />
            <circle class="cls-4" cx="45" cy="27.15" r="8.53" />
          </g>
        </svg>
        `
        },
        multi: true
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'icons',
            name: 'fall',
            svgSource: `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24" height="24"
            viewBox="0 0 1182.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#98482b" stroke="none">
              <path
                d="M5630 12278 c-150 -282 -386 -722 -522 -978 -271 -506 -290 -534 -386 -570 -134 -50 -200 -28 -707 235 -227 118 -415 215 -417 215 -2 0 10 -78 28 -172 51 -267 428 -2277 490 -2603 58 -313 65 -403 38 -495 -32 -107 -122 -162 -228 -140 -115 24 -113 22 -840 838 -373 419 -681 761 -683 759 -2 -2 -53 -177 -113 -388 -65 -225 -119 -397 -133 -416 -31 -47 -99 -90 -161 -103 -63 -13 -7 -23 -994 185 -409 86 -745 155 -747 153 -2 -2 21 -94 51 -203 408 -1487 441 -1609 454 -1689 20 -123 -14 -194 -115 -244 -22 -11 -173 -82 -335 -158 -162 -76 -298 -140 -301 -143 -4 -3 632 -526 1413 -1161 781 -635 1438 -1174 1460 -1198 22 -24 52 -69 66 -100 23 -48 27 -71 27 -142 -1 -77 -8 -108 -79 -340 -122 -397 -175 -574 -173 -576 1 -1 639 72 1417 162 778 90 1430 162 1448 159 18 -4 47 -19 65 -34 28 -26 32 -35 35 -97 2 -38 -6 -226 -17 -419 -23 -383 -65 -1112 -111 -1920 -16 -286 -32 -559 -36 -607 l-6 -88 392 0 392 0 -6 87 c-4 49 -20 324 -36 613 -47 825 -88 1535 -111 1915 -11 193 -19 381 -17 419 3 62 7 71 35 97 18 15 47 30 65 34 18 3 670 -69 1448 -159 778 -90 1416 -163 1417 -162 2 2 -51 179 -173 576 -71 232 -78 263 -79 340 0 71 4 94 27 142 14 31 44 76 66 100 22 24 679 563 1460 1198 781 635 1417 1158 1413 1161 -3 3 -139 67 -301 143 -162 76 -313 147 -335 158 -101 50 -135 121 -115 244 13 80 46 202 454 1689 30 109 53 201 51 203 -2 2 -338 -67 -747 -153 -987 -208 -931 -198 -994 -185 -62 13 -130 56 -161 103 -14 19 -68 191 -133 416 -60 211 -111 386 -113 388 -2 2 -310 -340 -683 -759 -727 -816 -725 -814 -840 -838 -71 -15 -127 1 -175 49 -73 73 -86 194 -45 422 20 108 381 2033 519 2762 18 97 31 177 29 177 -2 0 -190 -97 -417 -215 -451 -234 -519 -261 -630 -253 -72 6 -126 32 -177 85 -32 32 -397 706 -1038 1911 -24 45 -47 82 -50 82 -3 0 -129 -231 -280 -512z" />
            </g>
          </svg>
        `
        },
        multi: true
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'icons',
            name: 'check',
            svgSource: `
          <svg version="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
            <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"/>
          </svg>
        `
        },
        multi: true
    },
    {
        provide: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["SVG_ICONS"],
        useValue: {
            namespace: 'logos',
            name: 'discord',
            svgSource: `
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 245 240" width="24" height="24"><style>.st0{fill:#FFFFFF;}</style>
            <path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 
            103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 
            20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 
            19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 
            3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 
            8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 
            5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 
            0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
          </svg>
        `
        },
        multi: true
    }
];
// tslint:enable: max-line-length
class MaterialModule {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
    }
    static forRoot() {
        return {
            ngModule: MaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]]
        };
    }
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"])); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], useClass: _shared_custom_icons_custom_icon_registry__WEBPACK_IMPORTED_MODULE_33__["CustomIconRegistry"] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MAT_DATE_LOCALE"], useValue: 'en-US' },
        svgIconProviders
    ], imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "iqPS":
/*!**********************************************************************************************!*\
  !*** ./src/app/courses/course-detail/edit-course-metadata/edit-course-metadata.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditCourseMetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseMetadataComponent", function() { return EditCourseMetadataComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function EditCourseMetadataComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", cat_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cat_r3);
} }
function EditCourseMetadataComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, field_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("formControlName", "", field_r4, "Bool");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 6, field_r4), " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", field_r4);
} }
function EditCourseMetadataComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](language_r5);
} }
class EditCourseMetadataComponent {
    constructor(formBuilder, route, courseService, afs, router, tc) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.courseService = courseService;
        this.afs = afs;
        this.router = router;
        this.tc = tc;
        this.courseName = "";
        this.fields = ["exams", "homework", "projects", "proofs", "peer reviewed", "textbook"];
        this.languages = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"];
        this.categories = ["Applications", "Systems", "Theory", "Elective"];
        if (this.courseService.website == "dataScience") {
            this.categories = ["foundations", "elective"];
            this.languages = ['Python', 'R', 'No Code'];
        }
    }
    ngOnInit() {
        this.courseName = this.route.snapshot.paramMap.get('courseId') || "";
        this.courseMetadataForm = this.formBuilder.group({
            exams: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            examsBool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            homework: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            homeworkBool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            professor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            projects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            projectsBool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            proofs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            proofsBool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "peer reviewed": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            "peer reviewedBool": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            textbook: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            textbookBool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            textbookName: [''],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            languages: ['']
        });
        this.courseService.classes.subscribe(data => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            this.courseData = data.find(x => x.ClassName == this.courseName);
            this.setFieldData(this.f.exams, this.f.examsBool, (_a = this.courseData) === null || _a === void 0 ? void 0 : _a.meta.exams);
            this.setFieldData(this.f.homework, this.f.homeworkBool, (_b = this.courseData) === null || _b === void 0 ? void 0 : _b.meta.homework);
            this.setFieldData(this.f.projects, this.f.projectsBool, (_c = this.courseData) === null || _c === void 0 ? void 0 : _c.meta.projects);
            this.setFieldData(this.f.proofs, this.f.proofsBool, (_d = this.courseData) === null || _d === void 0 ? void 0 : _d.meta.proofs);
            this.setFieldData(this.f["peer reviewed"], this.f["peer reviewedBool"], (_e = this.courseData) === null || _e === void 0 ? void 0 : _e.meta['peer reviewed'].toString());
            this.setFieldData(this.f.textbook, this.f.textbookBool, (_f = this.courseData) === null || _f === void 0 ? void 0 : _f.TextbookName);
            this.f.category.setValue((_g = this.courseData) === null || _g === void 0 ? void 0 : _g.category);
            this.f.languages.setValue((_h = this.courseData) === null || _h === void 0 ? void 0 : _h.languages);
            this.f.professor.setValue((_j = this.courseData) === null || _j === void 0 ? void 0 : _j.Teacher);
        });
    }
    get f() {
        var _a;
        return (_a = this.courseMetadataForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    setFieldData(field, fieldBool, fieldValue) {
        fieldValue ? field.setValue(fieldValue) : "";
        fieldValue ? fieldBool.setValue("true") : fieldBool.setValue("false");
        fieldValue ? field.enable() : field.disable();
        fieldBool.valueChanges.subscribe(val => { val == "true" ? field.enable() : field.disable(); });
    }
    onSubmit() {
        var _a;
        this.afs
            .collection("Class")
            .doc((_a = this.courseData) === null || _a === void 0 ? void 0 : _a.courseId)
            .update({
            category: this.f.category.value,
            meta: {
                exams: this.f.examsBool.value === "true" ? this.f.exams.value : "",
                homework: this.f.homeworkBool.value === "true" ? this.f.homework.value : "",
                projects: this.f.projectsBool.value === "true" ? this.f.projects.value : "",
                proofs: this.f.proofsBool.value === "true" ? this.f.proofs.value : "",
                "peer reviewed": this.f["peer reviewedBool"].value === "true" ? this.f["peer reviewed"].value : "",
            },
            languages: this.f.languages.value,
            Teacher: this.tc.transform(this.f.professor.value),
            Textbook: this.f.textbookBool.value === "true" ? true : false,
            TextbookName: this.tc.transform(this.f.textbook.value),
        }).then(() => {
            this.courseService.updateCourseData();
            this.router.navigate([`courses/${this.courseName}`]);
        });
    }
}
EditCourseMetadataComponent.ɵfac = function EditCourseMetadataComponent_Factory(t) { return new (t || EditCourseMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"])); };
EditCourseMetadataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCourseMetadataComponent, selectors: [["app-edit-course-metadata"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]])], decls: 28, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [2, "text-align", "center"], [1, "user-edit-form", 3, "formGroup", "ngSubmit"], [1, "form-field-full-width"], ["type", "boolean", "formControlName", "category", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Professor Name", "formControlName", "professor"], [4, "ngFor", "ngForOf"], ["formControlName", "languages", "multiple", ""], ["mat-stroked-button", "", "color", "primary"], [3, "value"], ["type", "boolean", "required", "", 3, "formControlName"], ["value", "true"], ["value", "false"], ["matInput", "", "type", "textarea", "rows", "3", 3, "placeholder", "formControlName"]], template: function EditCourseMetadataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditCourseMetadataComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditCourseMetadataComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "What type of credit is this course?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Separate professor names with an ampersand ' & '.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, EditCourseMetadataComponent_div_19_Template, 13, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EditCourseMetadataComponent_mat_option_24_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.courseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.courseMetadataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtY291cnNlLW1ldGFkYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJlZGl0LWNvdXJzZS1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "jccf":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function SidenavComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_div_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.closeDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.value.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.value.title);
} }
function SidenavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r1.value.show);
} }
class SidenavComponent {
    constructor(auth) {
        this.auth = auth;
        this.routeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.isLoggedIn = false;
        this.links = {
            a_home: { title: "Home", link: "/", show: true },
            b_courses: { title: "Courses", link: "/courses", show: true },
            c_reviews: { title: "Reviews", link: "/reviews", show: true },
            d_create: { title: "Create Review", link: "/createReview", show: true },
            e_settings: { title: "User Profile", link: "/settings", show: this.isLoggedIn },
            f_myReviews: { title: "My Reviews", link: "/user/reviews", show: this.isLoggedIn },
            g_logout: { title: "Log Out", link: "/logout", show: this.isLoggedIn },
            h_login: { title: "Log In", link: "/login", show: !this.isLoggedIn },
        };
    }
    ngOnInit() {
        this.auth.isLoggedIn.subscribe(state => {
            this.isLoggedIn = state;
            this.updateLinkStatus();
        });
    }
    updateLinkStatus() {
        this.links.e_settings.show = this.isLoggedIn;
        this.links.f_myReviews.show = this.isLoggedIn;
        this.links.g_logout.show = this.isLoggedIn;
        this.links.h_login.show = !this.isLoggedIn;
    }
    closeDrawer() {
        this.routeSelected.emit();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], outputs: { routeSelected: "routeSelected" }, decls: 3, vars: 3, consts: [[4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink", "click", 4, "ngIf"], ["mat-list-item", "", 3, "routerLink", "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.links));
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "m6Oi":
/*!***********************************************!*\
  !*** ./src/app/user/admin/admin.component.ts ***!
  \***********************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "p69Z":
/*!******************************************************************!*\
  !*** ./src/app/reviews/create-review/create-review.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReviewComponent", function() { return CreateReviewComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_dialog_review_submission_dialog_review_submission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dialog/review-submission/dialog-review-submission.component */ "WThg");
/* harmony import */ var src_app_shared_dialog_review_too_short_dialog_review_too_short_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dialog/review-too-short/dialog-review-too-short.component */ "gRJU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function CreateReviewComponent_div_13_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", course_r7.ClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", course_r7.ClassName, " ");
} }
function CreateReviewComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateReviewComponent_div_13_mat_option_1_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.reviewId || !ctx_r0.completedReviews.includes(course_r7.ClassName));
} }
function CreateReviewComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const semester_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", semester_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", semester_r10, " ");
} }
function CreateReviewComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", year_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", year_r11, " ");
} }
function CreateReviewComponent_mat_form_field_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", field_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", field_r12.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("min", field_r12.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("formControlName", field_r12.formName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](field_r12.hint);
} }
function CreateReviewComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 22);
} }
function CreateReviewComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.error);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateReviewComponent {
    constructor(courseService, formBuilder, auth, dialog, afs, router, route) {
        this.courseService = courseService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.dialog = dialog;
        this.afs = afs;
        this.router = router;
        this.route = route;
        this.headerText = "Create New Review";
        this.reviewId = "";
        this.loading = false;
        this.submitted = false;
        this.pros = ["test"];
        this.cons = [];
        this.semesters = ["Spring", "Summer", "Fall"];
        this.currentYear = (new Date()).getFullYear();
        this.years = [this.currentYear, this.currentYear - 1, this.currentYear - 2];
        this.reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.completedReviews = [];
        this.scaleTooltip = `
    You know how people say: "on a scale of 1-10"?\n
    I've used the principle of Millers law to start asking people to measure on a scale of 1-7.\n
    Universally, people balk at the scale. But I explain to them that most people can't tell the difference between 2 and 3 or a 6 and 7 on a ten point scale. If you can't articulate a difference, there's no use in the measurement.\n
    Seven is great because you get more than the simplicity of 1-5 and can be a better reflection of your true evaluation.
  `;
        this.fields = [
            { formName: "workload", title: "Workload", min: "1", max: "50", hint: "How many hours per week did this class require?" },
            { formName: "rating", title: "Rating", min: "1", max: "7", hint: "Rate the class overall on a scale of 1-7" },
            { formName: "difficulty", title: "Difficulty", min: "1", max: "7", hint: "How difficult was this class on a scale of 1-7? 1 = Easiest, 7 = Hardest" },
            { formName: "bookUsefulness", title: "Textbook Usefulness", min: "0", max: "7", hint: "How usefull was the textbook on a scale of 1-7? Use 0 if there was no textbook." },
            { formName: "lectureQuality", title: "Lecture Quality", min: "1", max: "7", hint: "Rate the quality of the lectures on a scale of 1-7" },
            { formName: "professorQuality", title: "Professor Quality", min: "1", max: "7", hint: "Rate the aggregate quality of the professor(s) on a scale of 1-7" },
            { formName: "piazzaCommunity", title: "Piazza Support", min: "1", max: "7", hint: "Rate your experience with piazza community for this class on a scale of 1-7" },
        ];
        this.recommendedWordCount = 100;
        this.wordCountEnforced = true;
    }
    ngOnInit() {
        this.reviewId = this.route.snapshot.paramMap.get('id') || "";
        this.courseService.classes.subscribe(data => {
            this.courses = data;
            this.courses.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1);
        });
        this.auth.userData.subscribe(data => {
            this.userData = data;
            this.getUserReviews();
        });
        this.initializeReviewForm();
        this.loadReview();
    }
    loadReview() {
        if (this.reviewId) {
            this.headerText = "Edit Review";
            this.afs.collection("Reviews").doc(this.reviewId).get().subscribe(doc => {
                this.reviewForm.setValue(doc.data());
            });
            this.f.course.disable();
        }
    }
    getUserReviews() {
        this.afs.collection('Reviews', ref => { var _a; return ref.where("userId", '==', (_a = this.userData) === null || _a === void 0 ? void 0 : _a.uid); }).get().subscribe(response => {
            if (!response.docs.length)
                return;
            this.completedReviews = [];
            for (let item of response.docs) {
                const review = item.data();
                this.completedReviews.push(review.course);
            }
        }, error => { console.error("Create Review:", error); });
    }
    initializeReviewForm() {
        this.reviewForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            semester: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(2099), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(2019)]],
            review: ['Pros:\n1. \n2. \n3. \n\nCons:\n1. \n2. \n3. \n\nDetailed Review:\n', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            rating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            difficulty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            workload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            bookUsefulness: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]],
            lectureQuality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            professorQuality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            piazzaCommunity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]],
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            timestamp: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            classId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            helpfulPositive: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            helpfulNegative: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            wilsonScore: [0.8, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastUpdated: [''],
            degreeProgram: [''],
            isComputerScience: [this.courseService.website === "computerScience" ? true : false],
            isDataScience: [this.courseService.website === "dataScience" ? true : false]
        });
        this.reviewForm.controls['timestamp'].setValue(new Date());
        this.auth.userData.subscribe(user => {
            this.reviewForm.controls['userId'].setValue(user.uid);
        });
    }
    get f() {
        var _a;
        return (_a = this.reviewForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    addCourseDegreeType(courseName) {
        var _a;
        let reviewedCourse = (_a = this.courses) === null || _a === void 0 ? void 0 : _a.filter(course => course.ClassName === courseName);
        if (!(reviewedCourse === null || reviewedCourse === void 0 ? void 0 : reviewedCourse.length))
            return;
        let course = reviewedCourse[0];
        this.f.isComputerScience.setValue(course.computerScience.isComputerScience);
        this.f.isDataScience.setValue(course.dataScience.isDataScience);
        if (course.dataScience.isDataScience && course.computerScience.isComputerScience)
            this.f.degreeProgram.setValue(3);
        else if (course.dataScience.isDataScience)
            this.f.degreeProgram.setValue(2);
        else if (course.computerScience.isComputerScience)
            this.f.degreeProgram.setValue(1);
        else
            this.f.degreeProgram.setValue(0);
    }
    countWords(s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
        s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function (str) { return str != ""; }).length;
    }
    onSubmit() {
        var _a, _b, _c;
        const courseName = this.reviewForm.controls['course'].value;
        const classId = (_b = (_a = this.courses) === null || _a === void 0 ? void 0 : _a.find(item => item.ClassName === courseName)) === null || _b === void 0 ? void 0 : _b.courseId;
        this.reviewForm.controls['classId'].setValue(classId);
        this.submitted = true;
        if ((_c = this.reviewForm) === null || _c === void 0 ? void 0 : _c.invalid) {
            this.error = this.reviewForm.errors;
            return;
        }
        this.addCourseDegreeType(courseName);
        if (this.wordCountEnforced && this.countWords(this.f.review.value) < this.recommendedWordCount) {
            this.openShortReviewDialog();
            return;
        }
        this.loading = true;
        if (this.reviewId) {
            this.afs.collection('Reviews')
                .doc(this.reviewId)
                .update(this.reviewForm.value)
                .then(result => {
                this.loading = false;
                this.openSubmittedDialog();
            }, error => {
                console.error("Create Review: Submission failed - ", error);
                this.loading = false;
                this.error = error.message;
            });
        }
        else {
            this.afs.collection('Reviews')
                .add(this.reviewForm.value)
                .then(result => {
                this.loading = false;
                this.openSubmittedDialog();
            }, error => {
                console.error("Create Review: Submission failed -", error);
                this.loading = false;
                this.error = error.message;
            });
        }
    }
    openSubmittedDialog() {
        this.courseService.updateCourseData();
        const dialogRef = this.dialog.open(src_app_shared_dialog_review_submission_dialog_review_submission_component__WEBPACK_IMPORTED_MODULE_1__["DialogReviewSubmission"]);
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['courses', this.reviewForm.controls['course'].value]);
        });
    }
    openShortReviewDialog() {
        const dialogRef = this.dialog.open(src_app_shared_dialog_review_too_short_dialog_review_too_short_component__WEBPACK_IMPORTED_MODULE_2__["DialogReviewTooShort"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.wordCountEnforced = result;
            if (result) {
                window.location.hash = "";
                window.location.hash = "reviewTooShort";
            }
        });
    }
}
CreateReviewComponent.ɵfac = function CreateReviewComponent_Factory(t) { return new (t || CreateReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
CreateReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateReviewComponent, selectors: [["app-create-review"]], decls: 45, vars: 20, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "login-form", 3, "formGroup", "ngSubmit"], [1, "form-field-full-width"], ["formControlName", "course", "required", ""], [4, "ngFor", "ngForOf"], ["formControlName", "semester", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "reviewTooShort", 1, "form-field-full-width"], ["formControlName", "year", "required", "", 3, "ngClass"], ["matInput", "", "placeholder", "Review Title", "formControlName", "title", "required", "", 3, "ngClass"], ["matInput", "", "type", "textarea", "rows", "20", "formControlName", "review", "required", "", "placeholder", "Review", 3, "ngClass"], [1, "review-spacer"], [3, "matTooltip", "matTooltipClass", "click"], ["tooltip", "matTooltip"], ["class", "form-field-full-width", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [3, "value", 4, "ngIf"], [3, "value"], ["matInput", "", "type", "number", "required", "", 3, "placeholder", "max", "min", "formControlName"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function CreateReviewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Share what your experience was in your classes. To help structure your reviews, try listing what you liked (pros), what you disliked (cons), and then talk about your experience in the class overall. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreateReviewComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CreateReviewComponent_div_13_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Semester");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CreateReviewComponent_mat_option_18_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CreateReviewComponent_mat_option_23_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Course Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Please rate the following on a scale of 1-7\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateReviewComponent_Template_mat_icon_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34); return _r3.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "1 - The Worst, 2 - Bad, 3 - Below Average, 4 - Average, 5 - Above Average, 6 - Good, 7 - The Best");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Difficulty Rating: 1 - Easiest Thing Ever, 7 - Makes You Want To Cry");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CreateReviewComponent_mat_form_field_40_Template, 4, 5, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, CreateReviewComponent_span_42_Template, 1, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CreateReviewComponent_div_44_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.headerText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.semesters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx.scaleTooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltipClass", "multiline-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.review-spacer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15px;\n}\n\n.review-spacer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n  .mat-tooltip {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NyZWF0ZS1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBRVI7O0FBQ0E7RUFDSSxnQ0FBQTtBQUVKIiwiZmlsZSI6ImNyZWF0ZS1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5yZXZpZXctc3BhY2VyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgaDMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG46Om5nLWRlZXAgLm1hdC10b29sdGlwICB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5yZXZpZXctc2xpZGVyLWNvbnRhaW5lciB7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4vLyB9XG5cbi8vIC5yZXZpZXctbGFiZWwge1xuLy8gICAgIG1pbi13aWR0aDogMTAwcHg7XG4vLyB9XG5cbi8vIC5yZXZpZXctc2xpZGVyIHtcbi8vICAgICAvLyBtaW4td2lkdGg6IDMwMHB4O1xuLy8gfSJdfQ== */"] });


/***/ }),

/***/ "rTL2":
/*!*****************************************************!*\
  !*** ./src/app/user/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function SettingsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.value.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r2.value.value);
} }
function SettingsComponent_mat_list_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.key);
} }
class SettingsComponent {
    constructor(auth) {
        this.auth = auth;
        this.links = {
            "Edit my information": "/user/edit",
            "View my reviews": "/user/reviews"
        };
        this.userInfo = {
            a_email: { name: "email", displayName: "Email", value: "test@test.com" },
            b_firstName: { name: "firstName", displayName: "First Name", value: "Test Name" },
            c_lastName: { name: "lastName", displayName: "Last Name", value: "Name Test" },
            d_firstSemester: { name: "firstSemester", displayName: "First Semester", value: "Fall 2020" }
        };
    }
    ngOnInit() {
        this.auth.userData.subscribe(user => {
            this.userData = user;
            this.userInfo.a_email.value = user.email || 'null',
                this.userInfo.b_firstName.value = user.firstName || 'null';
            this.userInfo.c_lastName.value = user.lastName || 'null';
            this.userInfo.d_firstSemester.value = user.firstSemester || 'null';
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 13, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [2, "text-align", "center"], [1, "user-edit-form"], [4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "form-field-full-width"], ["type", "text", "matInput", "", "disabled", "", "placeholder", "First Name", 1, "font-override", 3, "value"], [3, "routerLink"], ["matLine", "", "color", "primary"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SettingsComponent_div_8_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingsComponent_mat_list_item_11_Template, 3, 2, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.userInfo));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.links));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: [".font-override[_ngcontent-%COMP%] {\n  color: #262626;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtb3ZlcnJpZGUge1xuICAgIGNvbG9yOiAjMjYyNjI2O1xufSJdfQ== */"] });


/***/ }),

/***/ "rwyB":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialog/not-verified/dialog-not-verified.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DialogNotVerified */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogNotVerified", function() { return DialogNotVerified; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DialogNotVerified {
}
DialogNotVerified.ɵfac = function DialogNotVerified_Factory(t) { return new (t || DialogNotVerified)(); };
DialogNotVerified.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogNotVerified, selectors: [["dialog-not-verified-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogNotVerified_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We noticed that you haven't verified your email yet. Please verify your email first before trying to access this feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _courses_course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses/course-detail/course-detail.component */ "hK/H");
/* harmony import */ var _courses_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses/course-grid/course-grid.component */ "7eFX");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews/review-detail/review-detail.component */ "T3Tc");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews/reviews.component */ "bZw7");
/* harmony import */ var _reviews_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews/create-review/create-review.component */ "p69Z");
/* harmony import */ var _user_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/admin/admin.component */ "m6Oi");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "gr6c");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/register/register.component */ "cEwO");
/* harmony import */ var _user_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/settings/settings.component */ "rTL2");
/* harmony import */ var _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/verify-email/verify-email.component */ "gsZg");
/* harmony import */ var _user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/authguard.guard */ "R1Dt");
/* harmony import */ var _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/logout/logout.component */ "RU+s");
/* harmony import */ var _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/edit/edit.component */ "3a9W");
/* harmony import */ var _user_view_user_reviews_view_user_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/view-user-reviews/view-user-reviews.component */ "e1MI");
/* harmony import */ var _courses_course_detail_edit_course_metadata_edit_course_metadata_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./courses/course-detail/edit-course-metadata/edit-course-metadata.component */ "iqPS");
/* harmony import */ var _misc_sad_panda_sad_panda_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./misc/sad-panda/sad-panda.component */ "7usI");
/* harmony import */ var _misc_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./misc/thankyou/thankyou.component */ "eYhB");
/* harmony import */ var _misc_nothing_here_nothing_here_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./misc/nothing-here/nothing-here.component */ "PPJd");
/* harmony import */ var _courses_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses/create-course/create-course.component */ "yuGV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");
























const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'courses', component: _courses_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_2__["CourseGridComponent"] },
    { path: 'courses/create', component: _courses_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_21__["CreateCourseComponent"] },
    { path: 'courses/:courseId', component: _courses_course_detail_course_detail_component__WEBPACK_IMPORTED_MODULE_1__["CourseDetailComponent"] },
    { path: 'courses/edit/:courseId', component: _courses_course_detail_edit_course_metadata_edit_course_metadata_component__WEBPACK_IMPORTED_MODULE_17__["EditCourseMetadataComponent"], canActivate: [_user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]] },
    { path: 'reviews', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"] },
    { path: 'review/:id', component: _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_4__["ReviewDetailComponent"] },
    { path: 'review/edit/:id', component: _reviews_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_6__["CreateReviewComponent"] },
    { path: 'settings', component: _user_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], canActivate: [_user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'logout', component: _user_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"] },
    { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'passwordReset', component: _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"] },
    { path: 'verifyEmail', component: _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__["VerifyEmailComponent"] },
    { path: 'admin', component: _user_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
    { path: 'createReview', component: _reviews_create_review_create_review_component__WEBPACK_IMPORTED_MODULE_6__["CreateReviewComponent"], canActivate: [_user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]] },
    { path: 'user/edit', component: _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"], canActivate: [_user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]] },
    { path: 'user/reviews', component: _user_view_user_reviews_view_user_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ViewUserReviewsComponent"], canActivate: [_user_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]] },
    { path: 'sadPanda', component: _misc_sad_panda_sad_panda_component__WEBPACK_IMPORTED_MODULE_18__["SadPandaComponent"] },
    { path: 'thankyou', component: _misc_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_19__["ThankyouComponent"] },
    { path: '**', component: _misc_nothing_here_nothing_here_component__WEBPACK_IMPORTED_MODULE_20__["NothingHereComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "y23b":
/*!***********************************************************!*\
  !*** ./src/app/misc/panda-party/panda-party.component.ts ***!
  \***********************************************************/
/*! exports provided: PandaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PandaPartyComponent", function() { return PandaPartyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class PandaPartyComponent {
    constructor() {
        this.title = "";
        this.src = "";
        this.altText = "";
        this.link = "/home";
        this.subtitle = "";
    }
}
PandaPartyComponent.ɵfac = function PandaPartyComponent_Factory(t) { return new (t || PandaPartyComponent)(); };
PandaPartyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PandaPartyComponent, selectors: [["app-panda-party"]], inputs: { title: "title", src: "src", altText: "altText", link: "link", subtitle: "subtitle" }, decls: 8, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "box"], [1, "panda-party", 3, "alt", "src", "routerLink"]], template: function PandaPartyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.altText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.link);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 30px;\n}\n.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n}\n.panda-party[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhbmRhLXBhcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InBhbmRhLXBhcnR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgLm1hdC1jYXJkLWhlYWRlcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5wYW5kYS1wYXJ0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "yuGV":
/*!******************************************************************!*\
  !*** ./src/app/courses/create-course/create-course.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function() { return CreateCourseComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classes/class.service */ "IBUy");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













function CreateCourseComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", field_r1.display);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", field_r1.field);
} }
class CreateCourseComponent {
    constructor(formBuilder, route, courseService, afs, router, tc) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.courseService = courseService;
        this.afs = afs;
        this.router = router;
        this.tc = tc;
        this.courseName = "";
        this.fields = ["exams", "homework", "projects", "proofs", "peer reviewed", "textbook"];
        this.languages = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"];
        this.categories = ["Applications", "Systems", "Theory", "Elective"];
        this.classFields = [
            { field: 'ClassName', display: 'Class Name' },
            { field: 'CourseNumber', display: 'Course Number' },
            { field: 'GraphicThumbnail', display: 'Graphic Thumbnail (from main grid)' },
            { field: 'GraphicColor', display: 'Graphic Color (from course page - lienar-gradient...)' },
            { field: 'GraphicUrl', display: 'Graphic URL (from course page - url(https://...) )' },
            { field: 'Teacher', display: 'Teacher (separated by &)' },
            { field: 'category', display: 'Category (if dataScience only this does not get used)' },
            { field: 'csIsComputerScience', display: 'is Computer Science? boolean true or false' },
            { field: 'csCategory', display: 'CS category' },
            { field: 'dsIsDataScience', display: 'is Data Science? boolean true or false' },
            { field: 'dsCategory', display: 'DS category' },
        ];
        if (this.courseService.website == "dataScience") {
            this.categories = ["foundations", "elective"];
            this.languages = ['Python', 'R', 'No Code'];
        }
    }
    ngOnInit() {
        this.courseMetadataForm = this.formBuilder.group({
            BookUsefulnessAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            BookUsefulnessCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ClassName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            CourseNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            DifficultyAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            DifficultyCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            GraphicThumbnail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            GraphicColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            GraphicUrl: ['url(https://www.cs.utexas.edu', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            LectureQualityAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            LectureQualityCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            PiazzaCommunityAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            PiazzaCommunityCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ProfessorQualityAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ProfessorQualityCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            RatingAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            RatingCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Teacher: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Textbook: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            TextbookName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            WorkloadAvg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            WorkloadCount: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            csIsComputerScience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            csCategory: [''],
            dsIsDataScience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            dsCategory: [''],
            languages: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            // lastUpdated: ['', Validators.required],
            metaExams: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            metaHomework: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            metaPeerReviewed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            metaProjects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            metaProofs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            seasonSpring: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            seasonSummer: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            seasonFall: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    get f() {
        var _a;
        return (_a = this.courseMetadataForm) === null || _a === void 0 ? void 0 : _a.controls;
    }
    setFieldData(field, fieldBool, fieldValue) {
        fieldValue ? field.setValue(fieldValue) : "";
        fieldValue ? fieldBool.setValue("true") : fieldBool.setValue("false");
        fieldValue ? field.enable() : field.disable();
        fieldBool.valueChanges.subscribe(val => { val == "true" ? field.enable() : field.disable(); });
    }
    onSubmit() {
        this.afs.collection('Class')
            // .add(this.courseMetadataForm.value)
            .add({
            BookUsefulnessAvg: this.f.BookUsefulnessAvg.value,
            BookUsefulnessCount: this.f.BookUsefulnessCount.value,
            ClassName: this.f.ClassName.value,
            CourseNumber: this.f.CourseNumber.value,
            DifficultyAvg: this.f.DifficultyAvg.value,
            DifficultyCount: this.f.DifficultyCount.value,
            GraphicThumbnail: this.f.GraphicThumbnail.value,
            GraphicColor: this.f.GraphicColor.value,
            GraphicUrl: this.f.GraphicUrl.value,
            LectureQualityAvg: this.f.LectureQualityAvg.value,
            LectureQualityCount: this.f.LectureQualityCount.value,
            PiazzaCommunityAvg: this.f.PiazzaCommunityAvg.value,
            PiazzaCommunityCount: this.f.PiazzaCommunityCount.value,
            ProfessorQualityAvg: this.f.ProfessorQualityAvg.value,
            ProfessorQualityCount: this.f.ProfessorQualityCount.value,
            RatingAvg: this.f.RatingAvg.value,
            RatingCount: this.f.RatingCount.value,
            Teacher: this.f.Teacher.value,
            Textbook: this.f.Textbook.value === "true" ? true : false,
            TextbookName: this.f.TextbookName.value,
            WorkloadAvg: this.f.WorkloadAvg.value,
            WorkloadCount: this.f.WorkloadCount.value,
            category: this.f.category.value,
            computerScience: {
                isComputerScience: this.f.csIsComputerScience.value === "true" ? true : false,
                category: this.f.csCategory.value,
            },
            dataScience: {
                isDataScience: this.f.dsIsDataScience.value === "true" ? true : false,
                category: this.f.dsCategory.value,
            },
            languages: [],
            meta: {
                exams: this.f.metaExams.value,
                homework: this.f.metaHomework.value,
                "peer reviewed": this.f.metaPeerReviewed.value,
                projects: this.f.metaProjects.value,
                proofs: this.f.metaProofs.value,
            },
            season: {
                spring: this.f.seasonSpring.value === "true" ? true : false,
                summer: this.f.seasonSummer.value === "true" ? true : false,
                fall: this.f.seasonFall.value === "true" ? true : false,
            },
            semesters: {},
        })
            .then(result => {
            window.alert("Added! Reload the window to add another one.");
            location.reload();
        }, error => {
            console.error("Create Review: Submission failed -", error);
            window.alert("Error! See the console for more.");
        });
    }
}
CreateCourseComponent.ɵfac = function CreateCourseComponent_Factory(t) { return new (t || CreateCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_classes_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"])); };
CreateCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateCourseComponent, selectors: [["app-create-course"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]])], decls: 12, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [2, "text-align", "center"], [1, "user-edit-form", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary"], [1, "form-field-full-width"], ["matInput", "", 3, "placeholder", "formControlName"]], template: function CreateCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create a new course!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateCourseComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateCourseComponent_div_8_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.courseMetadataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.classFields);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map