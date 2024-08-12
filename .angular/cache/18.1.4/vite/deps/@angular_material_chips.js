import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl
} from "./chunk-6VNY3NVW.js";
import "./chunk-CCUPMWI5.js";
import "./chunk-WSLF4FY5.js";
import {
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
  Validators
} from "./chunk-BSPNSL6G.js";
import {
  BACKSPACE,
  DELETE,
  DOWN_ARROW,
  ENTER,
  ErrorStateMatcher,
  FocusKeyManager,
  FocusMonitor,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRippleLoader,
  MatRippleModule,
  SPACE,
  TAB,
  UP_ARROW,
  _ErrorStateTracker,
  hasModifierKey
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import {
  Directionality
} from "./chunk-4H2MIMVP.js";
import {
  DOCUMENT
} from "./chunk-YJAHL4QH.js";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Self,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-O52VBTXF.js";
import {
  merge
} from "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  Subject,
  startWith,
  switchMap,
  takeUntil
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/material/fesm2022/chips.mjs
var _c0 = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c1 = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChip_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
function MatChip_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function MatChipOption_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵprojection(1, 1);
    ɵɵelementStart(2, "span", 8);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 9);
    ɵɵelement(4, "path", 10);
    ɵɵelementEnd()()();
  }
}
function MatChipOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
var _c2 = '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color)}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font);line-height:var(--mdc-chip-label-text-line-height);font-size:var(--mdc-chip-label-text-size);font-weight:var(--mdc-chip-label-text-weight);letter-spacing:var(--mdc-chip-label-text-tracking)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color);--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color);--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color);--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color)}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color)}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color);opacity:var(--mdc-chip-hover-state-layer-opacity)}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color);opacity:var(--mdc-chip-selected-hover-state-layer-opacity)}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color);opacity:var(--mdc-chip-focus-state-layer-opacity)}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color);opacity:var(--mdc-chip-selected-focus-state-layer-opacity)}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color)}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color)}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity)}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity)}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color)}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}';
var _c3 = [[["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]];
var _c4 = ["mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function MatChipRow_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
}
function MatChipRow_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
function MatChipRow_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function MatChipRow_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
}
function MatChipRow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatChipRow_Conditional_4_Conditional_0_Template, 1, 0)(1, MatChipRow_Conditional_4_Conditional_1_Template, 1, 0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.contentEditInput ? 0 : 1);
  }
}
function MatChipRow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function MatChipRow_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
}
var _c5 = ["*"];
var _c6 = ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}";
var MAT_CHIPS_DEFAULT_OPTIONS = new InjectionToken("mat-chips-default-options", {
  providedIn: "root",
  factory: () => ({
    separatorKeyCodes: [ENTER]
  })
});
var MAT_CHIP_AVATAR = new InjectionToken("MatChipAvatar");
var MAT_CHIP_TRAILING_ICON = new InjectionToken("MatChipTrailingIcon");
var MAT_CHIP_REMOVE = new InjectionToken("MatChipRemove");
var MAT_CHIP = new InjectionToken("MatChip");
var _MatChipAction = class _MatChipAction {
  /** Whether the action is disabled. */
  get disabled() {
    return this._disabled || this._parentChip.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /**
   * Determine the value of the disabled attribute for this chip action.
   */
  _getDisabledAttribute() {
    return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
  }
  /**
   * Determine the value of the tabindex attribute for this chip action.
   */
  _getTabindex() {
    return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString();
  }
  constructor(_elementRef, _parentChip) {
    this._elementRef = _elementRef;
    this._parentChip = _parentChip;
    this.isInteractive = true;
    this._isPrimary = true;
    this._disabled = false;
    this.tabIndex = -1;
    this._allowFocusWhenDisabled = false;
    if (_elementRef.nativeElement.nodeName === "BUTTON") {
      _elementRef.nativeElement.setAttribute("type", "button");
    }
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
  _handleClick(event) {
    if (!this.disabled && this.isInteractive && this._isPrimary) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing) {
      event.preventDefault();
      this._parentChip._handlePrimaryActionInteraction();
    }
  }
};
_MatChipAction.ɵfac = function MatChipAction_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipAction)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_CHIP));
};
_MatChipAction.ɵdir = ɵɵdefineDirective({
  type: _MatChipAction,
  selectors: [["", "matChipAction", ""]],
  hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
  hostVars: 9,
  hostBindings: function MatChipAction_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatChipAction_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("keydown", function MatChipAction_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx._getTabindex())("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx.disabled);
      ɵɵclassProp("mdc-evolution-chip__action--primary", ctx._isPrimary)("mdc-evolution-chip__action--presentational", !ctx.isInteractive)("mdc-evolution-chip__action--trailing", !ctx._isPrimary);
    }
  },
  inputs: {
    isInteractive: "isInteractive",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? -1 : numberAttribute(value)],
    _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var MatChipAction = _MatChipAction;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAction, [{
    type: Directive,
    args: [{
      selector: "[matChipAction]",
      host: {
        "class": "mdc-evolution-chip__action mat-mdc-chip-action",
        "[class.mdc-evolution-chip__action--primary]": "_isPrimary",
        "[class.mdc-evolution-chip__action--presentational]": "!isInteractive",
        "[class.mdc-evolution-chip__action--trailing]": "!_isPrimary",
        "[attr.tabindex]": "_getTabindex()",
        "[attr.disabled]": "_getDisabledAttribute()",
        "[attr.aria-disabled]": "disabled",
        "(click)": "_handleClick($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_CHIP]
    }]
  }], {
    isInteractive: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? -1 : numberAttribute(value)
      }]
    }],
    _allowFocusWhenDisabled: [{
      type: Input
    }]
  });
})();
var _MatChipAvatar = class _MatChipAvatar {
};
_MatChipAvatar.ɵfac = function MatChipAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipAvatar)();
};
_MatChipAvatar.ɵdir = ɵɵdefineDirective({
  type: _MatChipAvatar,
  selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
  hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_AVATAR,
    useExisting: _MatChipAvatar
  }])]
});
var MatChipAvatar = _MatChipAvatar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipAvatar, [{
    type: Directive,
    args: [{
      selector: "mat-chip-avatar, [matChipAvatar]",
      host: {
        "class": "mat-mdc-chip-avatar mdc-evolution-chip__icon mdc-evolution-chip__icon--primary",
        "role": "img"
      },
      providers: [{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatChipTrailingIcon = class _MatChipTrailingIcon extends MatChipAction {
  constructor() {
    super(...arguments);
    this.isInteractive = false;
    this._isPrimary = false;
  }
};
_MatChipTrailingIcon.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatChipTrailingIcon_BaseFactory;
  return function MatChipTrailingIcon_Factory(__ngFactoryType__) {
    return (ɵMatChipTrailingIcon_BaseFactory || (ɵMatChipTrailingIcon_BaseFactory = ɵɵgetInheritedFactory(_MatChipTrailingIcon)))(__ngFactoryType__ || _MatChipTrailingIcon);
  };
})();
_MatChipTrailingIcon.ɵdir = ɵɵdefineDirective({
  type: _MatChipTrailingIcon,
  selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
  hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_TRAILING_ICON,
    useExisting: _MatChipTrailingIcon
  }]), ɵɵInheritDefinitionFeature]
});
var MatChipTrailingIcon = _MatChipTrailingIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipTrailingIcon, [{
    type: Directive,
    args: [{
      selector: "mat-chip-trailing-icon, [matChipTrailingIcon]",
      host: {
        "class": "mat-mdc-chip-trailing-icon mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "aria-hidden": "true"
      },
      providers: [{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }],
      standalone: true
    }]
  }], null, null);
})();
var _MatChipRemove = class _MatChipRemove extends MatChipAction {
  constructor() {
    super(...arguments);
    this._isPrimary = false;
  }
  _handleClick(event) {
    if (!this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      this._parentChip.remove();
    }
  }
};
_MatChipRemove.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatChipRemove_BaseFactory;
  return function MatChipRemove_Factory(__ngFactoryType__) {
    return (ɵMatChipRemove_BaseFactory || (ɵMatChipRemove_BaseFactory = ɵɵgetInheritedFactory(_MatChipRemove)))(__ngFactoryType__ || _MatChipRemove);
  };
})();
_MatChipRemove.ɵdir = ɵɵdefineDirective({
  type: _MatChipRemove,
  selectors: [["", "matChipRemove", ""]],
  hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-mdc-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"],
  hostVars: 1,
  hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", null);
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP_REMOVE,
    useExisting: _MatChipRemove
  }]), ɵɵInheritDefinitionFeature]
});
var MatChipRemove = _MatChipRemove;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRemove, [{
    type: Directive,
    args: [{
      selector: "[matChipRemove]",
      host: {
        "class": "mat-mdc-chip-remove mat-mdc-chip-trailing-icon mat-mdc-focus-indicator mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing",
        "role": "button",
        "[attr.aria-hidden]": "null"
      },
      providers: [{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }],
      standalone: true
    }]
  }], null, null);
})();
var uid = 0;
var _MatChip = class _MatChip {
  _hasFocus() {
    return this._hasFocusInternal;
  }
  /**
   * The value of the chip. Defaults to the content inside
   * the `mat-mdc-chip-action-label` element.
   */
  get value() {
    return this._value !== void 0 ? this._value : this._textElement.textContent.trim();
  }
  set value(value) {
    this._value = value;
  }
  /**
   * Reference to the MatRipple instance of the chip.
   * @deprecated Considered an implementation detail. To be removed.
   * @breaking-change 17.0.0
   */
  get ripple() {
    return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
  }
  set ripple(v) {
    this._rippleLoader?.attachRipple(this._elementRef.nativeElement, v);
  }
  constructor(_changeDetectorRef, _elementRef, _ngZone, _focusMonitor, _document, animationMode, _globalRippleOptions) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._focusMonitor = _focusMonitor;
    this._globalRippleOptions = _globalRippleOptions;
    this._onFocus = new Subject();
    this._onBlur = new Subject();
    this.role = null;
    this._hasFocusInternal = false;
    this.id = `mat-mdc-chip-${uid++}`;
    this.ariaLabel = null;
    this.ariaDescription = null;
    this._ariaDescriptionId = `${this.id}-aria-description`;
    this.removable = true;
    this.highlighted = false;
    this.disableRipple = false;
    this.disabled = false;
    this.removed = new EventEmitter();
    this.destroyed = new EventEmitter();
    this.basicChipAttrName = "mat-basic-chip";
    this._rippleLoader = inject(MatRippleLoader);
    this._injector = inject(Injector);
    this._document = _document;
    this._animationsDisabled = animationMode === "NoopAnimations";
    this._monitorFocus();
    this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
      className: "mat-mdc-chip-ripple",
      disabled: this._isRippleDisabled()
    });
  }
  ngOnInit() {
    const element = this._elementRef.nativeElement;
    this._isBasicChip = element.hasAttribute(this.basicChipAttrName) || element.tagName.toLowerCase() === this.basicChipAttrName;
  }
  ngAfterViewInit() {
    this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label");
    if (this._pendingFocus) {
      this._pendingFocus = false;
      this.focus();
    }
  }
  ngAfterContentInit() {
    this._actionChanges = merge(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  ngDoCheck() {
    this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled());
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    this._actionChanges?.unsubscribe();
    this.destroyed.emit({
      chip: this
    });
    this.destroyed.complete();
  }
  /**
   * Allows for programmatic removal of the chip.
   *
   * Informs any listeners of the removal request. Does not remove the chip from the DOM.
   */
  remove() {
    if (this.removable) {
      this.removed.emit({
        chip: this
      });
    }
  }
  /** Whether or not the ripple should be disabled. */
  _isRippleDisabled() {
    return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !!this._globalRippleOptions?.disabled;
  }
  /** Returns whether the chip has a trailing icon. */
  _hasTrailingIcon() {
    return !!(this.trailingIcon || this.removeIcon);
  }
  /** Handles keyboard events on the chip. */
  _handleKeydown(event) {
    if (event.keyCode === BACKSPACE && !event.repeat || event.keyCode === DELETE) {
      event.preventDefault();
      this.remove();
    }
  }
  /** Allows for programmatic focusing of the chip. */
  focus() {
    if (!this.disabled) {
      if (this.primaryAction) {
        this.primaryAction.focus();
      } else {
        this._pendingFocus = true;
      }
    }
  }
  /** Gets the action that contains a specific target node. */
  _getSourceAction(target) {
    return this._getActions().find((action) => {
      const element = action._elementRef.nativeElement;
      return element === target || element.contains(target);
    });
  }
  /** Gets all of the actions within the chip. */
  _getActions() {
    const result = [];
    if (this.primaryAction) {
      result.push(this.primaryAction);
    }
    if (this.removeIcon) {
      result.push(this.removeIcon);
    }
    if (this.trailingIcon) {
      result.push(this.trailingIcon);
    }
    return result;
  }
  /** Handles interactions with the primary action of the chip. */
  _handlePrimaryActionInteraction() {
  }
  /** Starts the focus monitoring process on the chip. */
  _monitorFocus() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const hasFocus = origin !== null;
      if (hasFocus !== this._hasFocusInternal) {
        this._hasFocusInternal = hasFocus;
        if (hasFocus) {
          this._onFocus.next({
            chip: this
          });
        } else {
          afterNextRender(() => this._ngZone.run(() => this._onBlur.next({
            chip: this
          })), {
            injector: this._injector
          });
        }
      }
    });
  }
};
_MatChip.ɵfac = function MatChip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChip)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8));
};
_MatChip.ɵcmp = ɵɵdefineComponent({
  type: _MatChip,
  selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
  contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MAT_CHIP_AVATAR, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_TRAILING_ICON, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_REMOVE, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_AVATAR, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_TRAILING_ICON, 5);
      ɵɵcontentQuery(dirIndex, MAT_CHIP_REMOVE, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.leadingIcon = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trailingIcon = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.removeIcon = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allLeadingIcons = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allTrailingIcons = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._allRemoveIcons = _t);
    }
  },
  viewQuery: function MatChip_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatChipAction, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.primaryAction = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-chip"],
  hostVars: 31,
  hostBindings: function MatChip_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MatChip_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("role", ctx.role)("aria-label", ctx.ariaLabel);
      ɵɵclassMap("mat-" + (ctx.color || "primary"));
      ɵɵclassProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-basic-chip", ctx._isBasicChip)("mat-mdc-standard-chip", !ctx._isBasicChip)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon())("_mat-animation-noopable", ctx._animationsDisabled);
    }
  },
  inputs: {
    role: "role",
    id: "id",
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaDescription: [0, "aria-description", "ariaDescription"],
    value: "value",
    color: "color",
    removable: [2, "removable", "removable", booleanAttribute],
    highlighted: [2, "highlighted", "highlighted", booleanAttribute],
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    removed: "removed",
    destroyed: "destroyed"
  },
  exportAs: ["matChip"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_CHIP,
    useExisting: _MatChip
  }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 8,
  vars: 3,
  consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", 3, "isInteractive"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
  template: function MatChip_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelement(0, "span", 0);
      ɵɵelementStart(1, "span", 1)(2, "span", 2);
      ɵɵtemplate(3, MatChip_Conditional_3_Template, 2, 0, "span", 3);
      ɵɵelementStart(4, "span", 4);
      ɵɵprojection(5);
      ɵɵelement(6, "span", 5);
      ɵɵelementEnd()()();
      ɵɵtemplate(7, MatChip_Conditional_7_Template, 2, 0, "span", 6);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("isInteractive", false);
      ɵɵadvance();
      ɵɵconditional(ctx.leadingIcon ? 3 : -1);
      ɵɵadvance(4);
      ɵɵconditional(ctx._hasTrailingIcon() ? 7 : -1);
    }
  },
  dependencies: [MatChipAction],
  styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color)}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font);line-height:var(--mdc-chip-label-text-line-height);font-size:var(--mdc-chip-label-text-size);font-weight:var(--mdc-chip-label-text-weight);letter-spacing:var(--mdc-chip-label-text-tracking)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color);--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color);--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color);--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color)}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color)}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color);opacity:var(--mdc-chip-hover-state-layer-opacity)}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color);opacity:var(--mdc-chip-selected-hover-state-layer-opacity)}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color);opacity:var(--mdc-chip-focus-state-layer-opacity)}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color);opacity:var(--mdc-chip-selected-focus-state-layer-opacity)}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color)}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color)}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity)}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity)}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color)}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatChip = _MatChip;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChip, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
      exportAs: "matChip",
      host: {
        "class": "mat-mdc-chip",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-basic-chip]": "_isBasicChip",
        "[class.mat-mdc-standard-chip]": "!_isBasicChip",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[id]": "id",
        "[attr.role]": "role",
        "[attr.aria-label]": "ariaLabel",
        "(keydown)": "_handleKeydown($event)"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_CHIP,
        useExisting: MatChip
      }],
      standalone: true,
      imports: [MatChipAction],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <span matChipAction [isInteractive]="false">\n    @if (leadingIcon) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-mdc-focus-indicator"></span>\n    </span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n',
      styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color)}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font);line-height:var(--mdc-chip-label-text-line-height);font-size:var(--mdc-chip-label-text-size);font-weight:var(--mdc-chip-label-text-weight);letter-spacing:var(--mdc-chip-label-text-tracking)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color);--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color);--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color);--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color)}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color)}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color);opacity:var(--mdc-chip-hover-state-layer-opacity)}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color);opacity:var(--mdc-chip-selected-hover-state-layer-opacity)}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color);opacity:var(--mdc-chip-focus-state-layer-opacity)}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color);opacity:var(--mdc-chip-selected-focus-state-layer-opacity)}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color)}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color)}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity)}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity)}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color)}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }], {
    role: [{
      type: Input
    }],
    _allLeadingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_AVATAR, {
        descendants: true
      }]
    }],
    _allTrailingIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_TRAILING_ICON, {
        descendants: true
      }]
    }],
    _allRemoveIcons: [{
      type: ContentChildren,
      args: [MAT_CHIP_REMOVE, {
        descendants: true
      }]
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaDescription: [{
      type: Input,
      args: ["aria-description"]
    }],
    value: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlighted: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removed: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    leadingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_AVATAR]
    }],
    trailingIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: ContentChild,
      args: [MAT_CHIP_REMOVE]
    }],
    primaryAction: [{
      type: ViewChild,
      args: [MatChipAction]
    }]
  });
})();
var MatChipSelectionChange = class {
  constructor(source, selected, isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }
};
var _MatChipOption = class _MatChipOption extends MatChip {
  constructor() {
    super(...arguments);
    this._defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
      optional: true
    });
    this.chipListSelectable = true;
    this._chipListMultiple = false;
    this._chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    this._selectable = true;
    this._selected = false;
    this.basicChipAttrName = "mat-basic-chip-option";
    this.selectionChange = new EventEmitter();
  }
  /**
   * Whether or not the chip is selectable.
   *
   * When a chip is not selectable, changes to its selected state are always
   * ignored. By default an option chip is selectable, and it becomes
   * non-selectable if its parent chip list is not selectable.
   */
  get selectable() {
    return this._selectable && this.chipListSelectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the chip is selected. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._setSelectedState(value, false, true);
  }
  /**
   * The ARIA selected applied to the chip. Conforms to WAI ARIA best practices for listbox
   * interaction patterns.
   *
   * From [WAI ARIA Listbox authoring practices guide](
   * https://www.w3.org/WAI/ARIA/apg/patterns/listbox/):
   *  "If any options are selected, each selected option has either aria-selected or aria-checked
   *  set to true. All options that are selectable but not selected have either aria-selected or
   *  aria-checked set to false."
   *
   * Set `aria-selected="false"` on not-selected listbox options that are selectable to fix
   * VoiceOver reading every option as "selected" (#25736).
   */
  get ariaSelected() {
    return this.selectable ? this.selected.toString() : null;
  }
  ngOnInit() {
    super.ngOnInit();
    this.role = "presentation";
  }
  /** Selects the chip. */
  select() {
    this._setSelectedState(true, false, true);
  }
  /** Deselects the chip. */
  deselect() {
    this._setSelectedState(false, false, true);
  }
  /** Selects this chip and emits userInputSelection event */
  selectViaInteraction() {
    this._setSelectedState(true, true, true);
  }
  /** Toggles the current selected state of this chip. */
  toggleSelected(isUserInput = false) {
    this._setSelectedState(!this.selected, isUserInput, true);
    return this.selected;
  }
  _handlePrimaryActionInteraction() {
    if (!this.disabled) {
      this.focus();
      if (this.selectable) {
        this.toggleSelected(true);
      }
    }
  }
  _hasLeadingGraphic() {
    if (this.leadingIcon) {
      return true;
    }
    return !this._chipListHideSingleSelectionIndicator || this._chipListMultiple;
  }
  _setSelectedState(isSelected, isUserInput, emitEvent) {
    if (isSelected !== this.selected) {
      this._selected = isSelected;
      if (emitEvent) {
        this.selectionChange.emit({
          source: this,
          isUserInput,
          selected: this.selected
        });
      }
      this._changeDetectorRef.markForCheck();
    }
  }
};
_MatChipOption.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatChipOption_BaseFactory;
  return function MatChipOption_Factory(__ngFactoryType__) {
    return (ɵMatChipOption_BaseFactory || (ɵMatChipOption_BaseFactory = ɵɵgetInheritedFactory(_MatChipOption)))(__ngFactoryType__ || _MatChipOption);
  };
})();
_MatChipOption.ɵcmp = ɵɵdefineComponent({
  type: _MatChipOption,
  selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]],
  hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"],
  hostVars: 37,
  hostBindings: function MatChipOption_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("tabindex", null)("aria-label", null)("aria-description", null)("role", ctx.role);
      ɵɵclassProp("mdc-evolution-chip", !ctx._isBasicChip)("mdc-evolution-chip--filter", !ctx._isBasicChip)("mdc-evolution-chip--selectable", !ctx._isBasicChip)("mat-mdc-chip-selected", ctx.selected)("mat-mdc-chip-multiple", ctx._chipListMultiple)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--selected", ctx.selected)("mdc-evolution-chip--selecting", !ctx._animationsDisabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-primary-graphic", ctx._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
    }
  },
  inputs: {
    selectable: [2, "selectable", "selectable", booleanAttribute],
    selected: [2, "selected", "selected", booleanAttribute]
  },
  outputs: {
    selectionChange: "selectionChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MatChip,
    useExisting: _MatChipOption
  }, {
    provide: MAT_CHIP,
    useExisting: _MatChipOption
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 10,
  vars: 8,
  consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]],
  template: function MatChipOption_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelement(0, "span", 0);
      ɵɵelementStart(1, "span", 1)(2, "button", 2);
      ɵɵtemplate(3, MatChipOption_Conditional_3_Template, 5, 0, "span", 3);
      ɵɵelementStart(4, "span", 4);
      ɵɵprojection(5);
      ɵɵelement(6, "span", 5);
      ɵɵelementEnd()()();
      ɵɵtemplate(7, MatChipOption_Conditional_7_Template, 2, 0, "span", 6);
      ɵɵelementStart(8, "span", 7);
      ɵɵtext(9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("_allowFocusWhenDisabled", true);
      ɵɵattribute("aria-selected", ctx.ariaSelected)("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
      ɵɵadvance();
      ɵɵconditional(ctx._hasLeadingGraphic() ? 3 : -1);
      ɵɵadvance(4);
      ɵɵconditional(ctx._hasTrailingIcon() ? 7 : -1);
      ɵɵadvance();
      ɵɵproperty("id", ctx._ariaDescriptionId);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.ariaDescription);
    }
  },
  dependencies: [MatChipAction],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});
var MatChipOption = _MatChipOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipOption, [{
    type: Component,
    args: [{
      selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-option",
        "[class.mdc-evolution-chip]": "!_isBasicChip",
        "[class.mdc-evolution-chip--filter]": "!_isBasicChip",
        "[class.mdc-evolution-chip--selectable]": "!_isBasicChip",
        "[class.mat-mdc-chip-selected]": "selected",
        "[class.mat-mdc-chip-multiple]": "_chipListMultiple",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--selected]": "selected",
        // This class enables the transition on the checkmark. Usually MDC adds it when selection
        // starts and removes it once the animation is finished. We don't need to go through all
        // the trouble, because we only care about the selection animation. MDC needs to do it,
        // because they also have an exit animation that we don't care about.
        "[class.mdc-evolution-chip--selecting]": "!_animationsDisabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-graphic]": "_hasLeadingGraphic()",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "[id]": "id"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipOption
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipOption
      }],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatChipAction],
      template: '<span class="mat-mdc-chip-focus-overlay"></span>\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary">\n  <button\n    matChipAction\n    [_allowFocusWhenDisabled]="true"\n    [attr.aria-selected]="ariaSelected"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId"\n    role="option">\n    @if (_hasLeadingGraphic()) {\n      <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n        <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n        <span class="mdc-evolution-chip__checkmark">\n          <svg\n            class="mdc-evolution-chip__checkmark-svg"\n            viewBox="-2 -3 30 30"\n            focusable="false"\n            aria-hidden="true">\n            <path class="mdc-evolution-chip__checkmark-path"\n                  fill="none" stroke="currentColor" d="M1.73,12.91 8.1,19.28 22.79,4.59" />\n          </svg>\n        </span>\n      </span>\n    }\n    <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n      <ng-content></ng-content>\n      <span class="mat-mdc-chip-primary-focus-indicator mat-mdc-focus-indicator"></span>\n    </span>\n  </button>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n',
      styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color)}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font);line-height:var(--mdc-chip-label-text-line-height);font-size:var(--mdc-chip-label-text-size);font-weight:var(--mdc-chip-label-text-weight);letter-spacing:var(--mdc-chip-label-text-tracking)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color);--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color);--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color);--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color)}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color)}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color);opacity:var(--mdc-chip-hover-state-layer-opacity)}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color);opacity:var(--mdc-chip-selected-hover-state-layer-opacity)}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color);opacity:var(--mdc-chip-focus-state-layer-opacity)}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color);opacity:var(--mdc-chip-selected-focus-state-layer-opacity)}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color)}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color)}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity)}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity)}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color)}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], null, {
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }]
  });
})();
var _MatChipEditInput = class _MatChipEditInput {
  constructor(_elementRef, _document) {
    this._elementRef = _elementRef;
    this._document = _document;
  }
  initialize(initialValue) {
    this.getNativeElement().focus();
    this.setValue(initialValue);
  }
  getNativeElement() {
    return this._elementRef.nativeElement;
  }
  setValue(value) {
    this.getNativeElement().textContent = value;
    this._moveCursorToEndOfInput();
  }
  getValue() {
    return this.getNativeElement().textContent || "";
  }
  _moveCursorToEndOfInput() {
    const range = this._document.createRange();
    range.selectNodeContents(this.getNativeElement());
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
};
_MatChipEditInput.ɵfac = function MatChipEditInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipEditInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT));
};
_MatChipEditInput.ɵdir = ɵɵdefineDirective({
  type: _MatChipEditInput,
  selectors: [["span", "matChipEditInput", ""]],
  hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"],
  standalone: true
});
var MatChipEditInput = _MatChipEditInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipEditInput, [{
    type: Directive,
    args: [{
      selector: "span[matChipEditInput]",
      host: {
        "class": "mat-chip-edit-input",
        "role": "textbox",
        "tabindex": "-1",
        "contenteditable": "true"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _MatChipRow = class _MatChipRow extends MatChip {
  constructor(changeDetectorRef, elementRef, ngZone, focusMonitor, _document, animationMode, globalRippleOptions, tabIndex) {
    super(changeDetectorRef, elementRef, ngZone, focusMonitor, _document, animationMode, globalRippleOptions);
    this.basicChipAttrName = "mat-basic-chip-row";
    this._editStartPending = false;
    this.editable = false;
    this.edited = new EventEmitter();
    this._isEditing = false;
    this.role = "row";
    this._onBlur.pipe(takeUntil(this.destroyed)).subscribe(() => {
      if (this._isEditing && !this._editStartPending) {
        this._onEditFinish();
      }
    });
  }
  _hasTrailingIcon() {
    return !this._isEditing && super._hasTrailingIcon();
  }
  /** Sends focus to the first gridcell when the user clicks anywhere inside the chip. */
  _handleFocus() {
    if (!this._isEditing && !this.disabled) {
      this.focus();
    }
  }
  _handleKeydown(event) {
    if (event.keyCode === ENTER && !this.disabled) {
      if (this._isEditing) {
        event.preventDefault();
        this._onEditFinish();
      } else if (this.editable) {
        this._startEditing(event);
      }
    } else if (this._isEditing) {
      event.stopPropagation();
    } else {
      super._handleKeydown(event);
    }
  }
  _handleDoubleclick(event) {
    if (!this.disabled && this.editable) {
      this._startEditing(event);
    }
  }
  _startEditing(event) {
    if (!this.primaryAction || this.removeIcon && this._getSourceAction(event.target) === this.removeIcon) {
      return;
    }
    const value = this.value;
    this._isEditing = this._editStartPending = true;
    afterNextRender(() => {
      this._getEditInput().initialize(value);
      this._editStartPending = false;
    }, {
      injector: this._injector
    });
  }
  _onEditFinish() {
    this._isEditing = this._editStartPending = false;
    this.edited.emit({
      chip: this,
      value: this._getEditInput().getValue()
    });
    if (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) {
      this.primaryAction.focus();
    }
  }
  _isRippleDisabled() {
    return super._isRippleDisabled() || this._isEditing;
  }
  /**
   * Gets the projected chip edit input, or the default input if none is projected in. One of these
   * two values is guaranteed to be defined.
   */
  _getEditInput() {
    return this.contentEditInput || this.defaultEditInput;
  }
};
_MatChipRow.ɵfac = function MatChipRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipRow)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), ɵɵinjectAttribute("tabindex"));
};
_MatChipRow.ɵcmp = ɵɵdefineComponent({
  type: _MatChipRow,
  selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]],
  contentQueries: function MatChipRow_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatChipEditInput, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentEditInput = _t.first);
    }
  },
  viewQuery: function MatChipRow_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatChipEditInput, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultEditInput = _t.first);
    }
  },
  hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"],
  hostVars: 27,
  hostBindings: function MatChipRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatChipRow_focus_HostBindingHandler($event) {
        return ctx._handleFocus($event);
      })("dblclick", function MatChipRow_dblclick_HostBindingHandler($event) {
        return ctx._handleDoubleclick($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", ctx.role);
      ɵɵclassProp("mat-mdc-chip-with-avatar", ctx.leadingIcon)("mat-mdc-chip-disabled", ctx.disabled)("mat-mdc-chip-editing", ctx._isEditing)("mat-mdc-chip-editable", ctx.editable)("mdc-evolution-chip--disabled", ctx.disabled)("mdc-evolution-chip--with-trailing-action", ctx._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", ctx.leadingIcon)("mdc-evolution-chip--with-primary-icon", ctx.leadingIcon)("mdc-evolution-chip--with-avatar", ctx.leadingIcon)("mat-mdc-chip-highlighted", ctx.highlighted)("mat-mdc-chip-with-trailing-icon", ctx._hasTrailingIcon());
    }
  },
  inputs: {
    editable: "editable"
  },
  outputs: {
    edited: "edited"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MatChip,
    useExisting: _MatChipRow
  }, {
    provide: MAT_CHIP,
    useExisting: _MatChipRow
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 10,
  vars: 9,
  consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-mdc-focus-indicator"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "cdk-visually-hidden", 3, "id"], ["matChipEditInput", ""]],
  template: function MatChipRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵtemplate(0, MatChipRow_Conditional_0_Template, 1, 0, "span", 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵtemplate(2, MatChipRow_Conditional_2_Template, 2, 0, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵtemplate(4, MatChipRow_Conditional_4_Template, 2, 1)(5, MatChipRow_Conditional_5_Template, 1, 0);
      ɵɵelement(6, "span", 4);
      ɵɵelementEnd()();
      ɵɵtemplate(7, MatChipRow_Conditional_7_Template, 2, 0, "span", 5);
      ɵɵelementStart(8, "span", 6);
      ɵɵtext(9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(!ctx._isEditing ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.disabled);
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-describedby", ctx._ariaDescriptionId);
      ɵɵadvance();
      ɵɵconditional(ctx.leadingIcon ? 2 : -1);
      ɵɵadvance(2);
      ɵɵconditional(ctx._isEditing ? 4 : 5);
      ɵɵadvance(3);
      ɵɵconditional(ctx._hasTrailingIcon() ? 7 : -1);
      ɵɵadvance();
      ɵɵproperty("id", ctx._ariaDescriptionId);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.ariaDescription);
    }
  },
  dependencies: [MatChipAction, MatChipEditInput],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});
var MatChipRow = _MatChipRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipRow, [{
    type: Component,
    args: [{
      selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]",
      host: {
        "class": "mat-mdc-chip mat-mdc-chip-row mdc-evolution-chip",
        "[class.mat-mdc-chip-with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-disabled]": "disabled",
        "[class.mat-mdc-chip-editing]": "_isEditing",
        "[class.mat-mdc-chip-editable]": "editable",
        "[class.mdc-evolution-chip--disabled]": "disabled",
        "[class.mdc-evolution-chip--with-trailing-action]": "_hasTrailingIcon()",
        "[class.mdc-evolution-chip--with-primary-graphic]": "leadingIcon",
        "[class.mdc-evolution-chip--with-primary-icon]": "leadingIcon",
        "[class.mdc-evolution-chip--with-avatar]": "leadingIcon",
        "[class.mat-mdc-chip-highlighted]": "highlighted",
        "[class.mat-mdc-chip-with-trailing-icon]": "_hasTrailingIcon()",
        "[id]": "id",
        // Has to have a negative tabindex in order to capture
        // focus and redirect it to the primary action.
        "[attr.tabindex]": "disabled ? null : -1",
        "[attr.aria-label]": "null",
        "[attr.aria-description]": "null",
        "[attr.role]": "role",
        "(focus)": "_handleFocus($event)",
        "(dblclick)": "_handleDoubleclick($event)"
      },
      providers: [{
        provide: MatChip,
        useExisting: MatChipRow
      }, {
        provide: MAT_CHIP,
        useExisting: MatChipRow
      }],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatChipAction, MatChipEditInput],
      template: '@if (!_isEditing) {\n  <span class="mat-mdc-chip-focus-overlay"></span>\n}\n\n<span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell"\n    matChipAction\n    [disabled]="disabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-describedby]="_ariaDescriptionId">\n  @if (leadingIcon) {\n    <span class="mdc-evolution-chip__graphic mat-mdc-chip-graphic">\n      <ng-content select="mat-chip-avatar, [matChipAvatar]"></ng-content>\n    </span>\n  }\n\n  <span class="mdc-evolution-chip__text-label mat-mdc-chip-action-label">\n    @if (_isEditing) {\n      @if (contentEditInput) {\n        <ng-content select="[matChipEditInput]"></ng-content>\n      } @else {\n        <span matChipEditInput></span>\n      }\n    } @else {\n      <ng-content></ng-content>\n    }\n\n    <span class="mat-mdc-chip-primary-focus-indicator mat-mdc-focus-indicator" aria-hidden="true"></span>\n  </span>\n</span>\n\n@if (_hasTrailingIcon()) {\n  <span\n    class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"\n    role="gridcell">\n    <ng-content select="mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"></ng-content>\n  </span>\n}\n\n<span class="cdk-visually-hidden" [id]="_ariaDescriptionId">{{ariaDescription}}</span>\n',
      styles: ['.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color)}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font);line-height:var(--mdc-chip-label-text-line-height);font-size:var(--mdc-chip-label-text-size);font-weight:var(--mdc-chip-label-text-weight);letter-spacing:var(--mdc-chip-label-text-tracking)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color)}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color);--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color);--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color);--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color)}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color)}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color);opacity:var(--mdc-chip-hover-state-layer-opacity)}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color);opacity:var(--mdc-chip-selected-hover-state-layer-opacity)}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color);opacity:var(--mdc-chip-focus-state-layer-opacity)}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color);opacity:var(--mdc-chip-selected-focus-state-layer-opacity)}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color)}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color)}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity)}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity)}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color)}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    editable: [{
      type: Input
    }],
    edited: [{
      type: Output
    }],
    defaultEditInput: [{
      type: ViewChild,
      args: [MatChipEditInput]
    }],
    contentEditInput: [{
      type: ContentChild,
      args: [MatChipEditInput]
    }]
  });
})();
var _MatChipSet = class _MatChipSet {
  /** Combined stream of all of the child chips' focus events. */
  get chipFocusChanges() {
    return this._getChipStream((chip) => chip._onFocus);
  }
  /** Combined stream of all of the child chips' destroy events. */
  get chipDestroyedChanges() {
    return this._getChipStream((chip) => chip.destroyed);
  }
  /** Combined stream of all of the child chips' remove events. */
  get chipRemovedChanges() {
    return this._getChipStream((chip) => chip.removed);
  }
  /** Whether the chip set is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
  }
  /** Whether the chip list contains chips or not. */
  get empty() {
    return !this._chips || this._chips.length === 0;
  }
  /** The ARIA role applied to the chip set. */
  get role() {
    if (this._explicitRole) {
      return this._explicitRole;
    }
    return this.empty ? null : this._defaultRole;
  }
  set role(value) {
    this._explicitRole = value;
  }
  /** Whether any of the chips inside of this chip-set has focus. */
  get focused() {
    return this._hasFocusedChip();
  }
  constructor(_elementRef, _changeDetectorRef, _dir) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._lastDestroyedFocusedChipIndex = null;
    this._destroyed = new Subject();
    this._defaultRole = "presentation";
    this._disabled = false;
    this.tabIndex = 0;
    this._explicitRole = null;
    this._chipActions = new QueryList();
  }
  ngAfterViewInit() {
    this._setUpFocusManagement();
    this._trackChipSetChanges();
    this._trackDestroyedFocusedChip();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._chipActions.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Checks whether any of the chips is focused. */
  _hasFocusedChip() {
    return this._chips && this._chips.some((chip) => chip._hasFocus());
  }
  /** Syncs the chip-set's state with the individual chips. */
  _syncChipsState() {
    if (this._chips) {
      this._chips.forEach((chip) => {
        chip.disabled = this._disabled;
        chip._changeDetectorRef.markForCheck();
      });
    }
  }
  /** Dummy method for subclasses to override. Base chip set cannot be focused. */
  focus() {
  }
  /** Handles keyboard events on the chip set. */
  _handleKeydown(event) {
    if (this._originatesFromChip(event)) {
      this._keyManager.onKeydown(event);
    }
  }
  /**
   * Utility to ensure all indexes are valid.
   *
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of chips.
   */
  _isValidIndex(index) {
    return index >= 0 && index < this._chips.length;
  }
  /**
   * Removes the `tabindex` from the chip set and resets it back afterwards, allowing the
   * user to tab out of it. This prevents the set from capturing focus and redirecting
   * it back to the first chip, creating a focus trap, if it user tries to tab away.
   */
  _allowFocusEscape() {
    if (this.tabIndex !== -1) {
      const previousTabIndex = this.tabIndex;
      this.tabIndex = -1;
      this._changeDetectorRef.markForCheck();
      setTimeout(() => {
        this.tabIndex = previousTabIndex;
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Gets a stream of events from all the chips within the set.
   * The stream will automatically incorporate any newly-added chips.
   */
  _getChipStream(mappingFunction) {
    return this._chips.changes.pipe(startWith(null), switchMap(() => merge(...this._chips.map(mappingFunction))));
  }
  /** Checks whether an event comes from inside a chip element. */
  _originatesFromChip(event) {
    let currentElement = event.target;
    while (currentElement && currentElement !== this._elementRef.nativeElement) {
      if (currentElement.classList.contains("mat-mdc-chip")) {
        return true;
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }
  /** Sets up the chip set's focus management logic. */
  _setUpFocusManagement() {
    this._chips.changes.pipe(startWith(this._chips)).subscribe((chips) => {
      const actions = [];
      chips.forEach((chip) => chip._getActions().forEach((action) => actions.push(action)));
      this._chipActions.reset(actions);
      this._chipActions.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate((action) => this._skipPredicate(action));
    this.chipFocusChanges.pipe(takeUntil(this._destroyed)).subscribe(({
      chip
    }) => {
      const action = chip._getSourceAction(document.activeElement);
      if (action) {
        this._keyManager.updateActiveItem(action);
      }
    });
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
  }
  /**
   * Determines if key manager should avoid putting a given chip action in the tab index. Skip
   * non-interactive and disabled actions since the user can't do anything with them.
   */
  _skipPredicate(action) {
    return !action.isInteractive || action.disabled;
  }
  /** Listens to changes in the chip set and syncs up the state of the individual chips. */
  _trackChipSetChanges() {
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      if (this.disabled) {
        Promise.resolve().then(() => this._syncChipsState());
      }
      this._redirectDestroyedChipFocus();
    });
  }
  /** Starts tracking the destroyed chips in order to capture the focused one. */
  _trackDestroyedFocusedChip() {
    this.chipDestroyedChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      const chipArray = this._chips.toArray();
      const chipIndex = chipArray.indexOf(event.chip);
      if (this._isValidIndex(chipIndex) && event.chip._hasFocus()) {
        this._lastDestroyedFocusedChipIndex = chipIndex;
      }
    });
  }
  /**
   * Finds the next appropriate chip to move focus to,
   * if the currently-focused chip is destroyed.
   */
  _redirectDestroyedChipFocus() {
    if (this._lastDestroyedFocusedChipIndex == null) {
      return;
    }
    if (this._chips.length) {
      const newIndex = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1);
      const chipToFocus = this._chips.toArray()[newIndex];
      if (chipToFocus.disabled) {
        if (this._chips.length === 1) {
          this.focus();
        } else {
          this._keyManager.setPreviousItemActive();
        }
      } else {
        chipToFocus.focus();
      }
    } else {
      this.focus();
    }
    this._lastDestroyedFocusedChipIndex = null;
  }
};
_MatChipSet.ɵfac = function MatChipSet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipSet)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_MatChipSet.ɵcmp = ɵɵdefineComponent({
  type: _MatChipSet,
  selectors: [["mat-chip-set"]],
  contentQueries: function MatChipSet_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatChip, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._chips = _t);
    }
  },
  hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
  hostVars: 1,
  hostBindings: function MatChipSet_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MatChipSet_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
    }
  },
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    role: "role",
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 2,
  vars: 0,
  consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
  template: function MatChipSet_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatChipSet = _MatChipSet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipSet, [{
    type: Component,
    args: [{
      selector: "mat-chip-set",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mdc-evolution-chip-set",
        "(keydown)": "_handleKeydown($event)",
        "[attr.role]": "role"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    role: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var MatChipListboxChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatChipListbox),
  multi: true
};
var _MatChipListbox = class _MatChipListbox extends MatChipSet {
  constructor() {
    super(...arguments);
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this._defaultRole = "listbox";
    this._defaultOptions = inject(MAT_CHIPS_DEFAULT_OPTIONS, {
      optional: true
    });
    this._multiple = false;
    this.ariaOrientation = "horizontal";
    this._selectable = true;
    this.compareWith = (o1, o2) => o1 === o2;
    this.required = false;
    this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.change = new EventEmitter();
    this._chips = void 0;
  }
  /** Whether the user should be allowed to select multiple chips. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._syncListboxProperties();
  }
  /** The array of selected chips inside the chip listbox. */
  get selected() {
    const selectedChips = this._chips.toArray().filter((chip) => chip.selected);
    return this.multiple ? selectedChips : selectedChips[0];
  }
  /**
   * Whether or not this chip listbox is selectable.
   *
   * When a chip listbox is not selectable, the selected states for all
   * the chips inside the chip listbox are always ignored.
   */
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = value;
    this._syncListboxProperties();
  }
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncListboxProperties();
  }
  /** Combined stream of all of the child chips' selection change events. */
  get chipSelectionChanges() {
    return this._getChipStream((chip) => chip.selectionChange);
  }
  /** Combined stream of all of the child chips' blur events. */
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  /** The value of the listbox, which is the combined value of the selected chips. */
  get value() {
    return this._value;
  }
  set value(value) {
    this.writeValue(value);
    this._value = value;
  }
  ngAfterContentInit() {
    if (this._pendingInitialValue !== void 0) {
      Promise.resolve().then(() => {
        this._setSelectionByValue(this._pendingInitialValue, false);
        this._pendingInitialValue = void 0;
      });
    }
    this._chips.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => {
      this._syncListboxProperties();
    });
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._blur());
    this.chipSelectionChanges.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      if (!this.multiple) {
        this._chips.forEach((chip) => {
          if (chip !== event.source) {
            chip._setSelectedState(false, false, false);
          }
        });
      }
      if (event.isUserInput) {
        this._propagateChanges();
      }
    });
  }
  /**
   * Focuses the first selected chip in this chip listbox, or the first non-disabled chip when there
   * are no selected chips.
   */
  focus() {
    if (this.disabled) {
      return;
    }
    const firstSelectedChip = this._getFirstSelectedChip();
    if (firstSelectedChip && !firstSelectedChip.disabled) {
      firstSelectedChip.focus();
    } else if (this._chips.length > 0) {
      this._keyManager.setFirstItemActive();
    } else {
      this._elementRef.nativeElement.focus();
    }
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  writeValue(value) {
    if (this._chips) {
      this._setSelectionByValue(value, false);
    } else if (value != null) {
      this._pendingInitialValue = value;
    }
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Selects all chips with value. */
  _setSelectionByValue(value, isUserInput = true) {
    this._clearSelection();
    if (Array.isArray(value)) {
      value.forEach((currentValue) => this._selectValue(currentValue, isUserInput));
    } else {
      this._selectValue(value, isUserInput);
    }
  }
  /** When blurred, marks the field as touched when focus moved outside the chip listbox. */
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._markAsTouched();
        }
      });
    }
  }
  _keydown(event) {
    if (event.keyCode === TAB) {
      super._allowFocusEscape();
    }
  }
  /** Marks the field as touched */
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
  }
  /** Emits change event to set the model value. */
  _propagateChanges() {
    let valueToEmit = null;
    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map((chip) => chip.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : void 0;
    }
    this._value = valueToEmit;
    this.change.emit(new MatChipListboxChange(this, valueToEmit));
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Deselects every chip in the listbox.
   * @param skip Chip that should not be deselected.
   */
  _clearSelection(skip) {
    this._chips.forEach((chip) => {
      if (chip !== skip) {
        chip.deselect();
      }
    });
  }
  /**
   * Finds and selects the chip based on its value.
   * @returns Chip that has the corresponding value.
   */
  _selectValue(value, isUserInput) {
    const correspondingChip = this._chips.find((chip) => {
      return chip.value != null && this.compareWith(chip.value, value);
    });
    if (correspondingChip) {
      isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
    }
    return correspondingChip;
  }
  /** Syncs the chip-listbox selection state with the individual chips. */
  _syncListboxProperties() {
    if (this._chips) {
      Promise.resolve().then(() => {
        this._chips.forEach((chip) => {
          chip._chipListMultiple = this.multiple;
          chip.chipListSelectable = this._selectable;
          chip._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator;
          chip._changeDetectorRef.markForCheck();
        });
      });
    }
  }
  /** Returns the first selected chip in this listbox, or undefined if no chips are selected. */
  _getFirstSelectedChip() {
    if (Array.isArray(this.selected)) {
      return this.selected.length ? this.selected[0] : void 0;
    } else {
      return this.selected;
    }
  }
  /**
   * Determines if key manager should avoid putting a given chip action in the tab index. Skip
   * non-interactive actions since the user can't do anything with them.
   */
  _skipPredicate(action) {
    return !action.isInteractive;
  }
};
_MatChipListbox.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatChipListbox_BaseFactory;
  return function MatChipListbox_Factory(__ngFactoryType__) {
    return (ɵMatChipListbox_BaseFactory || (ɵMatChipListbox_BaseFactory = ɵɵgetInheritedFactory(_MatChipListbox)))(__ngFactoryType__ || _MatChipListbox);
  };
})();
_MatChipListbox.ɵcmp = ɵɵdefineComponent({
  type: _MatChipListbox,
  selectors: [["mat-chip-listbox"]],
  contentQueries: function MatChipListbox_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatChipOption, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._chips = _t);
    }
  },
  hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"],
  hostVars: 11,
  hostBindings: function MatChipListbox_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatChipListbox_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChipListbox_blur_HostBindingHandler() {
        return ctx._blur();
      })("keydown", function MatChipListbox_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", ctx.disabled || ctx.empty ? -1 : ctx.tabIndex);
      ɵɵattribute("role", ctx.role)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-multiselectable", ctx.multiple)("aria-orientation", ctx.ariaOrientation);
      ɵɵclassProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-required", ctx.required);
    }
  },
  inputs: {
    multiple: [2, "multiple", "multiple", booleanAttribute],
    ariaOrientation: [0, "aria-orientation", "ariaOrientation"],
    selectable: [2, "selectable", "selectable", booleanAttribute],
    compareWith: "compareWith",
    required: [2, "required", "required", booleanAttribute],
    hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
    value: "value"
  },
  outputs: {
    change: "change"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 2,
  vars: 0,
  consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
  template: function MatChipListbox_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  styles: [_c6],
  encapsulation: 2,
  changeDetection: 0
});
var MatChipListbox = _MatChipListbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipListbox, [{
    type: Component,
    args: [{
      selector: "mat-chip-listbox",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mdc-evolution-chip-set mat-mdc-chip-listbox",
        "[attr.role]": "role",
        "[tabIndex]": "(disabled || empty) ? -1 : tabIndex",
        // TODO: replace this binding with use of AriaDescriber
        "[attr.aria-describedby]": "_ariaDescribedby || null",
        "[attr.aria-required]": "role ? required : null",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-multiselectable]": "multiple",
        "[attr.aria-orientation]": "ariaOrientation",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()",
        "(keydown)": "_keydown($event)"
      },
      providers: [MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}"]
    }]
  }], null, {
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaOrientation: [{
      type: Input,
      args: ["aria-orientation"]
    }],
    selectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipOption, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var MatChipGridChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var _MatChipGrid = class _MatChipGrid extends MatChipSet {
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._syncChipsState();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._chipInput.id;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get placeholder() {
    return this._chipInput ? this._chipInput.placeholder : this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether any chips or the matChipInput inside of this chip-grid has focus. */
  get focused() {
    return this._chipInput.focused || this._hasFocusedChip();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Combined stream of all of the child chips' blur events. */
  get chipBlurChanges() {
    return this._getChipStream((chip) => chip._onBlur);
  }
  /** Whether the chip grid is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(elementRef, changeDetectorRef, dir, parentForm, parentFormGroup, defaultErrorStateMatcher, ngControl) {
    super(elementRef, changeDetectorRef, dir);
    this.ngControl = ngControl;
    this.controlType = "mat-chip-grid";
    this._defaultRole = "grid";
    this._ariaDescribedbyIds = [];
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this._value = [];
    this.change = new EventEmitter();
    this.valueChange = new EventEmitter();
    this._chips = void 0;
    this.stateChanges = new Subject();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
  }
  ngAfterContentInit() {
    this.chipBlurChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._blur();
      this.stateChanges.next();
    });
    merge(this.chipFocusChanges, this._chips.changes).pipe(takeUntil(this._destroyed)).subscribe(() => this.stateChanges.next());
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (!this._chipInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("mat-chip-grid must be used in combination with matChipInputFor.");
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.stateChanges.complete();
  }
  /** Associates an HTML input element with this chip grid. */
  registerInput(inputElement) {
    this._chipInput = inputElement;
    this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick(event) {
    if (!this.disabled && !this._originatesFromChip(event)) {
      this.focus();
    }
  }
  /**
   * Focuses the first chip in this chip grid, or the associated input when there
   * are no eligible chips.
   */
  focus() {
    if (this.disabled || this._chipInput.focused) {
      return;
    }
    if (!this._chips.length || this._chips.first.disabled) {
      Promise.resolve().then(() => this._chipInput.focus());
    } else if (this._chips.length && this._keyManager.activeItemIndex !== 0) {
      this._keyManager.setFirstItemActive();
    }
    this.stateChanges.next();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedbyIds = ids;
    this._chipInput?.setDescribedByIds(ids);
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  writeValue(value) {
    this._value = value;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Implemented as part of ControlValueAccessor.
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  /** Refreshes the error state of the chip grid. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** When blurred, mark the field as touched when focus moved outside the chip grid. */
  _blur() {
    if (!this.disabled) {
      setTimeout(() => {
        if (!this.focused) {
          this._propagateChanges();
          this._markAsTouched();
        }
      });
    }
  }
  /**
   * Removes the `tabindex` from the chip grid and resets it back afterwards, allowing the
   * user to tab out of it. This prevents the grid from capturing focus and redirecting
   * it back to the first chip, creating a focus trap, if it user tries to tab away.
   */
  _allowFocusEscape() {
    if (!this._chipInput.focused) {
      super._allowFocusEscape();
    }
  }
  /** Handles custom keyboard events. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const activeItem = this._keyManager.activeItem;
    if (keyCode === TAB) {
      if (this._chipInput.focused && hasModifierKey(event, "shiftKey") && this._chips.length && !this._chips.last.disabled) {
        event.preventDefault();
        if (activeItem) {
          this._keyManager.setActiveItem(activeItem);
        } else {
          this._focusLastChip();
        }
      } else {
        super._allowFocusEscape();
      }
    } else if (!this._chipInput.focused) {
      if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && activeItem) {
        const eligibleActions = this._chipActions.filter((action) => action._isPrimary === activeItem._isPrimary && !this._skipPredicate(action));
        const currentIndex = eligibleActions.indexOf(activeItem);
        const delta = event.keyCode === UP_ARROW ? -1 : 1;
        event.preventDefault();
        if (currentIndex > -1 && this._isValidIndex(currentIndex + delta)) {
          this._keyManager.setActiveItem(eligibleActions[currentIndex + delta]);
        }
      } else {
        super._handleKeydown(event);
      }
    }
    this.stateChanges.next();
  }
  _focusLastChip() {
    if (this._chips.length) {
      this._chips.last.focus();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges() {
    const valueToEmit = this._chips.length ? this._chips.toArray().map((chip) => chip.value) : [];
    this._value = valueToEmit;
    this.change.emit(new MatChipGridChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this._changeDetectorRef.markForCheck();
  }
  /** Mark the field as touched */
  _markAsTouched() {
    this._onTouched();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
};
_MatChipGrid.ɵfac = function MatChipGrid_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipGrid)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(ErrorStateMatcher), ɵɵdirectiveInject(NgControl, 10));
};
_MatChipGrid.ɵcmp = ɵɵdefineComponent({
  type: _MatChipGrid,
  selectors: [["mat-chip-grid"]],
  contentQueries: function MatChipGrid_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatChipRow, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._chips = _t);
    }
  },
  hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"],
  hostVars: 10,
  hostBindings: function MatChipGrid_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function MatChipGrid_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChipGrid_blur_HostBindingHandler() {
        return ctx._blur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("tabindex", ctx.disabled || ctx._chips && ctx._chips.length === 0 ? -1 : ctx.tabIndex)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState);
      ɵɵclassProp("mat-mdc-chip-list-disabled", ctx.disabled)("mat-mdc-chip-list-invalid", ctx.errorState)("mat-mdc-chip-list-required", ctx.required);
    }
  },
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    placeholder: "placeholder",
    required: [2, "required", "required", booleanAttribute],
    value: "value",
    errorStateMatcher: "errorStateMatcher"
  },
  outputs: {
    change: "change",
    valueChange: "valueChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatChipGrid
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 2,
  vars: 0,
  consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
  template: function MatChipGrid_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  styles: [_c6],
  encapsulation: 2,
  changeDetection: 0
});
var MatChipGrid = _MatChipGrid;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipGrid, [{
    type: Component,
    args: [{
      selector: "mat-chip-grid",
      template: `
    <div class="mdc-evolution-chip-set__chips" role="presentation">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "class": "mat-mdc-chip-set mat-mdc-chip-grid mdc-evolution-chip-set",
        "[attr.role]": "role",
        "[attr.tabindex]": "(disabled || (_chips && _chips.length === 0)) ? -1 : tabIndex",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[class.mat-mdc-chip-list-disabled]": "disabled",
        "[class.mat-mdc-chip-list-invalid]": "errorState",
        "[class.mat-mdc-chip-list-required]": "required",
        "(focus)": "focus()",
        "(blur)": "_blur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatChipGrid
      }],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ErrorStateMatcher
  }, {
    type: NgControl,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    _chips: [{
      type: ContentChildren,
      args: [MatChipRow, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var nextUniqueId = 0;
var _MatChipInput = class _MatChipInput {
  /** Register input for chip list */
  get chipGrid() {
    return this._chipGrid;
  }
  set chipGrid(value) {
    if (value) {
      this._chipGrid = value;
      this._chipGrid.registerInput(this);
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._disabled || this._chipGrid && this._chipGrid.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether the input is empty. */
  get empty() {
    return !this.inputElement.value;
  }
  constructor(_elementRef, defaultOptions, formField) {
    this._elementRef = _elementRef;
    this.focused = false;
    this.addOnBlur = false;
    this.chipEnd = new EventEmitter();
    this.placeholder = "";
    this.id = `mat-mdc-chip-list-input-${nextUniqueId++}`;
    this._disabled = false;
    this.inputElement = this._elementRef.nativeElement;
    this.separatorKeyCodes = defaultOptions.separatorKeyCodes;
    if (formField) {
      this.inputElement.classList.add("mat-mdc-form-field-input-control");
    }
  }
  ngOnChanges() {
    this._chipGrid.stateChanges.next();
  }
  ngOnDestroy() {
    this.chipEnd.complete();
  }
  /** Utility method to make host definition/tests more clear. */
  _keydown(event) {
    if (this.empty && event.keyCode === BACKSPACE) {
      if (!event.repeat) {
        this._chipGrid._focusLastChip();
      }
      event.preventDefault();
    } else {
      this._emitChipEnd(event);
    }
  }
  /** Checks to see if the blur should emit the (chipEnd) event. */
  _blur() {
    if (this.addOnBlur) {
      this._emitChipEnd();
    }
    this.focused = false;
    if (!this._chipGrid.focused) {
      this._chipGrid._blur();
    }
    this._chipGrid.stateChanges.next();
  }
  _focus() {
    this.focused = true;
    this._chipGrid.stateChanges.next();
  }
  /** Checks to see if the (chipEnd) event needs to be emitted. */
  _emitChipEnd(event) {
    if (!event || this._isSeparatorKey(event)) {
      this.chipEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value,
        chipInput: this
      });
      event?.preventDefault();
    }
  }
  _onInput() {
    this._chipGrid.stateChanges.next();
  }
  /** Focuses the input. */
  focus() {
    this.inputElement.focus();
  }
  /** Clears the input */
  clear() {
    this.inputElement.value = "";
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  /** Checks whether a keycode is one of the configured separators. */
  _isSeparatorKey(event) {
    return !hasModifierKey(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
  }
};
_MatChipInput.ɵfac = function MatChipInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipInput)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MAT_CHIPS_DEFAULT_OPTIONS), ɵɵdirectiveInject(MAT_FORM_FIELD, 8));
};
_MatChipInput.ɵdir = ɵɵdefineDirective({
  type: _MatChipInput,
  selectors: [["input", "matChipInputFor", ""]],
  hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"],
  hostVars: 6,
  hostBindings: function MatChipInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      })("blur", function MatChipInput_blur_HostBindingHandler() {
        return ctx._blur();
      })("focus", function MatChipInput_focus_HostBindingHandler() {
        return ctx._focus();
      })("input", function MatChipInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipGrid && ctx._chipGrid.ngControl ? ctx._chipGrid.ngControl.invalid : null)("aria-required", ctx._chipGrid && ctx._chipGrid.required || null)("required", ctx._chipGrid && ctx._chipGrid.required || null);
    }
  },
  inputs: {
    chipGrid: [0, "matChipInputFor", "chipGrid"],
    addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", booleanAttribute],
    separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
    placeholder: "placeholder",
    id: "id",
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    chipEnd: "matChipInputTokenEnd"
  },
  exportAs: ["matChipInput", "matChipInputFor"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var MatChipInput = _MatChipInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipInput, [{
    type: Directive,
    args: [{
      selector: "input[matChipInputFor]",
      exportAs: "matChipInput, matChipInputFor",
      host: {
        // TODO: eventually we should remove `mat-input-element` from here since it comes from the
        // non-MDC version of the input. It's currently being kept for backwards compatibility, because
        // the MDC chips were landed initially with it.
        "class": "mat-mdc-chip-input mat-mdc-input-element mdc-text-field__input mat-input-element",
        "(keydown)": "_keydown($event)",
        "(blur)": "_blur()",
        "(focus)": "_focus()",
        "(input)": "_onInput()",
        "[id]": "id",
        "[attr.disabled]": "disabled || null",
        "[attr.placeholder]": "placeholder || null",
        "[attr.aria-invalid]": "_chipGrid && _chipGrid.ngControl ? _chipGrid.ngControl.invalid : null",
        "[attr.aria-required]": "_chipGrid && _chipGrid.required || null",
        "[attr.required]": "_chipGrid && _chipGrid.required || null"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_CHIPS_DEFAULT_OPTIONS]
    }]
  }, {
    type: MatFormField,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_FORM_FIELD]
    }]
  }], {
    chipGrid: [{
      type: Input,
      args: ["matChipInputFor"]
    }],
    addOnBlur: [{
      type: Input,
      args: [{
        alias: "matChipInputAddOnBlur",
        transform: booleanAttribute
      }]
    }],
    separatorKeyCodes: [{
      type: Input,
      args: ["matChipInputSeparatorKeyCodes"]
    }],
    chipEnd: [{
      type: Output,
      args: ["matChipInputTokenEnd"]
    }],
    placeholder: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CHIP_DECLARATIONS = [MatChip, MatChipAvatar, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon];
var _MatChipsModule = class _MatChipsModule {
};
_MatChipsModule.ɵfac = function MatChipsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatChipsModule)();
};
_MatChipsModule.ɵmod = ɵɵdefineNgModule({
  type: _MatChipsModule,
  imports: [MatCommonModule, MatRippleModule, MatChipAction, MatChip, MatChipAvatar, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon],
  exports: [MatCommonModule, MatChip, MatChipAvatar, MatChipEditInput, MatChipGrid, MatChipInput, MatChipListbox, MatChipOption, MatChipRemove, MatChipRow, MatChipSet, MatChipTrailingIcon]
});
_MatChipsModule.ɵinj = ɵɵdefineInjector({
  providers: [ErrorStateMatcher, {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER]
    }
  }],
  imports: [MatCommonModule, MatRippleModule, MatCommonModule]
});
var MatChipsModule = _MatChipsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatChipsModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatChipAction, CHIP_DECLARATIONS],
      exports: [MatCommonModule, CHIP_DECLARATIONS],
      providers: [ErrorStateMatcher, {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
          separatorKeyCodes: [ENTER]
        }
      }]
    }]
  }], null, null);
})();
export {
  MAT_CHIP,
  MAT_CHIPS_DEFAULT_OPTIONS,
  MAT_CHIP_AVATAR,
  MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR,
  MAT_CHIP_REMOVE,
  MAT_CHIP_TRAILING_ICON,
  MatChip,
  MatChipAvatar,
  MatChipEditInput,
  MatChipGrid,
  MatChipGridChange,
  MatChipInput,
  MatChipListbox,
  MatChipListboxChange,
  MatChipOption,
  MatChipRemove,
  MatChipRow,
  MatChipSelectionChange,
  MatChipSet,
  MatChipTrailingIcon,
  MatChipsModule
};
//# sourceMappingURL=@angular_material_chips.js.map
