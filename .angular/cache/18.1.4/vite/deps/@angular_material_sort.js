import {
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-WSLF4FY5.js";
import {
  AnimationCurves,
  AnimationDurations,
  AriaDescriber,
  ENTER,
  FocusMonitor,
  MatCommonModule,
  SPACE
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
import "./chunk-YJAHL4QH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  SkipSelf,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-O52VBTXF.js";
import {
  merge
} from "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  ReplaySubject,
  Subject
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/material/fesm2022/sort.mjs
var _c0 = ["mat-sort-header", ""];
var _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("@arrowPosition.start", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_start_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_done_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._disableViewStateAnimation = false);
    });
    ɵɵelement(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵelement(3, "div", 5)(4, "div", 6)(5, "div", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@arrowOpacity", ctx_r1._getArrowViewState())("@arrowPosition", ctx_r1._getArrowViewState())("@allowChildren", ctx_r1._getArrowDirectionState());
    ɵɵadvance(2);
    ɵɵproperty("@indicator", ctx_r1._getArrowDirectionState());
    ɵɵadvance();
    ɵɵproperty("@leftPointer", ctx_r1._getArrowDirectionState());
    ɵɵadvance();
    ɵɵproperty("@rightPointer", ctx_r1._getArrowDirectionState());
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var _MatSort = class _MatSort {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
    this._initializedStream = new ReplaySubject(1);
    this.sortables = /* @__PURE__ */ new Map();
    this._stateChanges = new Subject();
    this.start = "asc";
    this._direction = "";
    this.disabled = false;
    this.sortChange = new EventEmitter();
    this.initialized = this._initializedStream;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
};
_MatSort.ɵfac = function MatSort_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSort)(ɵɵdirectiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
};
_MatSort.ɵdir = ɵɵdefineDirective({
  type: _MatSort,
  selectors: [["", "matSort", ""]],
  hostAttrs: [1, "mat-sort"],
  inputs: {
    active: [0, "matSortActive", "active"],
    start: [0, "matSortStart", "start"],
    direction: [0, "matSortDirection", "direction"],
    disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
    disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
  },
  outputs: {
    sortChange: "matSortChange"
  },
  exportAs: ["matSort"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var MatSort = _MatSort;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      },
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var SORT_ANIMATION_TRANSITION = AnimationDurations.ENTERING + " " + AnimationCurves.STANDARD_CURVE;
var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: trigger("indicator", [
    state("active-asc, asc", style({
      transform: "translateY(0px)"
    })),
    // 10px is the height of the sort indicator, minus the width of the pointers
    state("active-desc, desc", style({
      transform: "translateY(10px)"
    })),
    transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: trigger("leftPointer", [state("active-asc, asc", style({
    transform: "rotate(-45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: trigger("rightPointer", [state("active-asc, asc", style({
    transform: "rotate(45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(-45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: trigger("arrowOpacity", [
    state("desc-to-active, asc-to-active, active", style({
      opacity: 1
    })),
    state("desc-to-hint, asc-to-hint, hint", style({
      opacity: 0.54
    })),
    state("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void", style({
      opacity: 0
    })),
    // Transition between all states except for immediate transitions
    transition("* => asc, * => desc, * => active, * => hint, * => void", animate("0ms")),
    transition("* <=> *", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: trigger("arrowPosition", [
    // Hidden Above => Hint Center
    transition("* => desc-to-hint, * => desc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(-25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Below
    transition("* => hint-to-desc, * => active-to-desc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(25%)"
    })]))),
    // Hidden Below => Hint Center
    transition("* => asc-to-hint, * => asc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Above
    transition("* => hint-to-asc, * => active-to-asc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(-25%)"
    })]))),
    state("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active", style({
      transform: "translateY(0)"
    })),
    state("hint-to-desc, active-to-desc, desc", style({
      transform: "translateY(-25%)"
    })),
    state("hint-to-asc, active-to-asc, asc", style({
      transform: "translateY(25%)"
    }))
  ]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: trigger("allowChildren", [transition("* <=> *", [query("@*", animateChild(), {
    optional: true
  })])])
};
var _MatSortHeaderIntl = class _MatSortHeaderIntl {
  constructor() {
    this.changes = new Subject();
  }
};
_MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSortHeaderIntl)();
};
_MatSortHeaderIntl.ɵprov = ɵɵdefineInjectable({
  token: _MatSortHeaderIntl,
  factory: _MatSortHeaderIntl.ɵfac,
  providedIn: "root"
});
var MatSortHeaderIntl = _MatSortHeaderIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var _MatSortHeader = class _MatSortHeader {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  constructor(_intl, _changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef, _ariaDescriber, defaultOptions) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._showIndicatorHint = false;
    this._viewState = {};
    this._arrowDirection = "";
    this._disableViewStateAnimation = false;
    this.arrowPosition = "after";
    this.disabled = false;
    this._sortActionDescription = "Sort";
    if (!_sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? "active" : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "hint"
        });
      } else {
        this._setAnimationTransitionState({
          fromState: "hint",
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === SPACE || event.keyCode === ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? "active-" : ""}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : "") + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "active"
        });
        this._showIndicatorHint = false;
      }
      if (!this._isSorted() && this._viewState && this._viewState.toState === "active") {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: "active",
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
};
_MatSortHeader.ɵfac = function MatSortHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSortHeader)(ɵɵdirectiveInject(MatSortHeaderIntl), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MatSort, 8), ɵɵdirectiveInject("MAT_SORT_HEADER_COLUMN_DEF", 8), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AriaDescriber, 8), ɵɵdirectiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
};
_MatSortHeader.ɵcmp = ɵɵdefineComponent({
  type: _MatSortHeader,
  selectors: [["", "mat-sort-header", ""]],
  hostAttrs: [1, "mat-sort-header"],
  hostVars: 3,
  hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatSortHeader_click_HostBindingHandler() {
        return ctx._handleClick();
      })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(true);
      })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(false);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-sort", ctx._getAriaSortAttribute());
      ɵɵclassProp("mat-sort-header-disabled", ctx._isDisabled());
    }
  },
  inputs: {
    id: [0, "mat-sort-header", "id"],
    arrowPosition: "arrowPosition",
    start: "start",
    disabled: [2, "disabled", "disabled", booleanAttribute],
    sortActionDescription: "sortActionDescription",
    disableClear: [2, "disableClear", "disableClear", booleanAttribute]
  },
  exportAs: ["matSortHeader"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 7,
  consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
  template: function MatSortHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, MatSortHeader_Conditional_3_Template, 6, 6, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
      ɵɵattribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
      ɵɵadvance(3);
      ɵɵconditional(ctx._renderArrow() ? 3 : -1);
    }
  },
  styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
  encapsulation: 2,
  data: {
    animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
  },
  changeDetection: 0
});
var MatSortHeader = _MatSortHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_handleClick()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseenter)": "_setIndicatorHintVisible(true)",
        "(mouseleave)": "_setIndicatorHintVisible(false)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      standalone: true,
      template: '<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button\'s `aria-label`\n  will be read out as the user is navigating the table\'s cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class="mat-sort-header-container mat-focus-indicator"\n     [class.mat-sort-header-sorted]="_isSorted()"\n     [class.mat-sort-header-position-before]="arrowPosition === \'before\'"\n     [attr.tabindex]="_isDisabled() ? null : 0"\n     [attr.role]="_isDisabled() ? null : \'button\'">\n\n  <!--\n    TODO(crisbeto): this div isn\'t strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn\'t visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class="mat-sort-header-content">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class="mat-sort-header-arrow"\n        [@arrowOpacity]="_getArrowViewState()"\n        [@arrowPosition]="_getArrowViewState()"\n        [@allowChildren]="_getArrowDirectionState()"\n        (@arrowPosition.start)="_disableViewStateAnimation = true"\n        (@arrowPosition.done)="_disableViewStateAnimation = false">\n      <div class="mat-sort-header-stem"></div>\n      <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">\n        <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-middle"></div>\n      </div>\n    </div>\n  }\n</div>\n',
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], () => [{
    type: MatSortHeaderIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatSort,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: ["MAT_SORT_HEADER_COLUMN_DEF"]
    }, {
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatSortModule = class _MatSortModule {
};
_MatSortModule.ɵfac = function MatSortModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSortModule)();
};
_MatSortModule.ɵmod = ɵɵdefineNgModule({
  type: _MatSortModule,
  imports: [MatCommonModule, MatSort, MatSortHeader],
  exports: [MatSort, MatSortHeader]
});
_MatSortModule.ɵinj = ɵɵdefineInjector({
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
  imports: [MatCommonModule]
});
var MatSortModule = _MatSortModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();
export {
  MAT_SORT_DEFAULT_OPTIONS,
  MAT_SORT_HEADER_INTL_PROVIDER,
  MAT_SORT_HEADER_INTL_PROVIDER_FACTORY,
  MatSort,
  MatSortHeader,
  MatSortHeaderIntl,
  MatSortModule,
  matSortAnimations
};
//# sourceMappingURL=@angular_material_sort.js.map
