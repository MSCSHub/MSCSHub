import {
  MatButton,
  MatButtonModule
} from "./chunk-47UKXHGF.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-WJEZ55NT.js";
import "./chunk-IL6XGKYA.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-T65TP4KO.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-WSLF4FY5.js";
import "./chunk-DWTH4YG3.js";
import {
  BreakpointObserver,
  Breakpoints,
  LiveAnnouncer,
  MatCommonModule,
  Platform
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
import {
  DOCUMENT
} from "./chunk-YJAHL4QH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  Subject,
  takeUntil
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import {
  __spreadValues
} from "./chunk-35ENWJA4.js";

// node_modules/@angular/material/fesm2022/snack-bar.mjs
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "button", 2);
    ɵɵlistener("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.action());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.data.action, " ");
  }
}
var _c0 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {
}
var MAX_TIMEOUT = Math.pow(2, 31) - 1;
var MatSnackBarRef = class {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    this._afterDismissed = new Subject();
    this._afterOpened = new Subject();
    this._onAction = new Subject();
    this._dismissedByAction = false;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
};
var MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
var MatSnackBarConfig = class {
  constructor() {
    this.politeness = "assertive";
    this.announcementMessage = "";
    this.duration = 0;
    this.data = null;
    this.horizontalPosition = "center";
    this.verticalPosition = "bottom";
  }
};
var _MatSnackBarLabel = class _MatSnackBarLabel {
};
_MatSnackBarLabel.ɵfac = function MatSnackBarLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBarLabel)();
};
_MatSnackBarLabel.ɵdir = ɵɵdefineDirective({
  type: _MatSnackBarLabel,
  selectors: [["", "matSnackBarLabel", ""]],
  hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
  standalone: true
});
var MatSnackBarLabel = _MatSnackBarLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarLabel, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      standalone: true,
      host: {
        "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
      }
    }]
  }], null, null);
})();
var _MatSnackBarActions = class _MatSnackBarActions {
};
_MatSnackBarActions.ɵfac = function MatSnackBarActions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBarActions)();
};
_MatSnackBarActions.ɵdir = ɵɵdefineDirective({
  type: _MatSnackBarActions,
  selectors: [["", "matSnackBarActions", ""]],
  hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
  standalone: true
});
var MatSnackBarActions = _MatSnackBarActions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarActions, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      standalone: true,
      host: {
        "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
      }
    }]
  }], null, null);
})();
var _MatSnackBarAction = class _MatSnackBarAction {
};
_MatSnackBarAction.ɵfac = function MatSnackBarAction_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBarAction)();
};
_MatSnackBarAction.ɵdir = ɵɵdefineDirective({
  type: _MatSnackBarAction,
  selectors: [["", "matSnackBarAction", ""]],
  hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
  standalone: true
});
var MatSnackBarAction = _MatSnackBarAction;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarAction, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      standalone: true,
      host: {
        "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
      }
    }]
  }], null, null);
})();
var _SimpleSnackBar = class _SimpleSnackBar {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
};
_SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SimpleSnackBar)(ɵɵdirectiveInject(MatSnackBarRef), ɵɵdirectiveInject(MAT_SNACK_BAR_DATA));
};
_SimpleSnackBar.ɵcmp = ɵɵdefineComponent({
  type: _SimpleSnackBar,
  selectors: [["simple-snack-bar"]],
  hostAttrs: [1, "mat-mdc-simple-snack-bar"],
  exportAs: ["matSnackBar"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
  template: function SimpleSnackBar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.data.message, "\n");
      ɵɵadvance();
      ɵɵconditional(ctx.hasAction ? 2 : -1);
    }
  },
  dependencies: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  styles: [".mat-mdc-simple-snack-bar{display:flex}"],
  encapsulation: 2,
  changeDetection: 0
});
var SimpleSnackBar = _SimpleSnackBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSnackBar, [{
    type: Component,
    args: [{
      selector: "simple-snack-bar",
      exportAs: "matSnackBar",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      standalone: true,
      host: {
        "class": "mat-mdc-simple-snack-bar"
      },
      template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button mat-button matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n',
      styles: [".mat-mdc-simple-snack-bar{display:flex}"]
    }]
  }], () => [{
    type: MatSnackBarRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_SNACK_BAR_DATA]
    }]
  }], null);
})();
var matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: trigger("state", [state("void, hidden", style({
    transform: "scale(0.8)",
    opacity: 0
  })), state("visible", style({
    transform: "scale(1)",
    opacity: 1
  })), transition("* => visible", animate("150ms cubic-bezier(0, 0, 0.2, 1)")), transition("* => void, * => hidden", animate("75ms cubic-bezier(0.4, 0.0, 1, 1)", style({
    opacity: 0
  })))])
};
var uniqueId = 0;
var _MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
  constructor(_ngZone, _elementRef, _changeDetectorRef, _platform, snackBarConfig) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._platform = _platform;
    this.snackBarConfig = snackBarConfig;
    this._document = inject(DOCUMENT);
    this._trackedModals = /* @__PURE__ */ new Set();
    this._announceDelay = 150;
    this._destroyed = false;
    this._onAnnounce = new Subject();
    this._onExit = new Subject();
    this._onEnter = new Subject();
    this._animationState = "void";
    this._liveElementId = `mat-snack-bar-container-live-${uniqueId++}`;
    this.attachDomPortal = (portal) => {
      this._assertNotAttached();
      const result = this._portalOutlet.attachDomPortal(portal);
      this._afterPortalAttached();
      return result;
    };
    if (snackBarConfig.politeness === "assertive" && !snackBarConfig.announcementMessage) {
      this._live = "assertive";
    } else if (snackBarConfig.politeness === "off") {
      this._live = "off";
    } else {
      this._live = "polite";
    }
    if (this._platform.FIREFOX) {
      if (this._live === "polite") {
        this._role = "status";
      }
      if (this._live === "assertive") {
        this._role = "alert";
      }
    }
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(event) {
    const {
      fromState,
      toState
    } = event;
    if (toState === "void" && fromState !== "void" || toState === "hidden") {
      this._completeExit();
    }
    if (toState === "visible") {
      const onEnter = this._onEnter;
      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    this._ngZone.run(() => {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      clearTimeout(this._announceTimeoutId);
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
  }
  /**
   * Removes the element in a microtask. Helps prevent errors where we end up
   * removing an element which is in the middle of an animation.
   */
  _completeExit() {
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  /**
   * Called after the portal contents have been attached. Can be
   * used to modify the DOM once it's guaranteed to be in place.
   */
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        panelClasses.forEach((cssClass) => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    const label = this._label.nativeElement;
    const labelClass = "mdc-snackbar__label";
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  /**
   * Some browsers won't expose the accessibility node of the live element if there is an
   * `aria-modal` and the live element is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live element.
   */
  _exposeToModals() {
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  /** Clears the references to the live element from any modals it was added to. */
  _clearFromModals() {
    this._trackedModals.forEach((modal) => {
      const ariaOwns = modal.getAttribute("aria-owns");
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, "").trim();
        if (newValue.length > 0) {
          modal.setAttribute("aria-owns", newValue);
        } else {
          modal.removeAttribute("aria-owns");
        }
      }
    });
    this._trackedModals.clear();
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempting to attach snack bar content after content is already attached");
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (!this._announceTimeoutId) {
      this._ngZone.runOutsideAngular(() => {
        this._announceTimeoutId = setTimeout(() => {
          const inertElement = this._elementRef.nativeElement.querySelector("[aria-hidden]");
          const liveElement = this._elementRef.nativeElement.querySelector("[aria-live]");
          if (inertElement && liveElement) {
            let focusedElement = null;
            if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
              focusedElement = document.activeElement;
            }
            inertElement.removeAttribute("aria-hidden");
            liveElement.appendChild(inertElement);
            focusedElement?.focus();
            this._onAnnounce.next();
            this._onAnnounce.complete();
          }
        }, this._announceDelay);
      });
    }
  }
};
_MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBarContainer)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(MatSnackBarConfig));
};
_MatSnackBarContainer.ɵcmp = ɵɵdefineComponent({
  type: _MatSnackBarContainer,
  selectors: [["mat-snack-bar-container"]],
  viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkPortalOutlet, 7);
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
  hostVars: 1,
  hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵsyntheticHostListener("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
        return ctx.onAnimationEnd($event);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@state", ctx._animationState);
    }
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 3,
  consts: [["label", ""], [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
  template: function MatSnackBarContainer_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
      ɵɵtemplate(4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
      ɵɵelementEnd();
      ɵɵelement(5, "div");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵattribute("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: [".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color);border-radius:var(--mdc-snackbar-container-shape);background-color:var(--mdc-snackbar-container-color)}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font);font-size:var(--mdc-snackbar-supporting-text-size);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],
  encapsulation: 2,
  data: {
    animation: [matSnackBarAnimations.snackBarState]
  }
});
var MatSnackBarContainer = _MatSnackBarContainer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarContainer, [{
    type: Component,
    args: [{
      selector: "mat-snack-bar-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      animations: [matSnackBarAnimations.snackBarState],
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[@state]": "_animationState",
        "(@state.done)": "onAnimationEnd($event)"
      },
      template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color);border-radius:var(--mdc-snackbar-container-shape);background-color:var(--mdc-snackbar-container-color)}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font);font-size:var(--mdc-snackbar-supporting-text-size);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }, {
    type: MatSnackBarConfig
  }], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: ViewChild,
      args: ["label", {
        static: true
      }]
    }]
  });
})();
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
var MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
  providedIn: "root",
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
var _MatSnackBar = class _MatSnackBar {
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
    this._overlay = _overlay;
    this._live = _live;
    this._injector = _injector;
    this._breakpointObserver = _breakpointObserver;
    this._parentSnackBar = _parentSnackBar;
    this._defaultConfig = _defaultConfig;
    this._snackBarRefAtThisLevel = null;
    this.simpleSnackBarComponent = SimpleSnackBar;
    this.snackBarContainerComponent = MatSnackBarContainer;
    this.handsetCssClass = "mat-mdc-snack-bar-handset";
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = "", config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    _config.data = {
      message,
      action
    };
    if (_config.announcementMessage === message) {
      _config.announcementMessage = void 0;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new ComponentPortal(content, void 0, injector);
      const contentRef = container.attachComponentPortal(portal);
      snackBarRef.instance = contentRef.instance;
    }
    this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(takeUntil(overlayRef.detachments())).subscribe((state2) => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state2.matches);
    });
    if (config.announcementMessage) {
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      snackBarRef.containerInstance.enter();
    }
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    const isRtl = config.direction === "rtl";
    const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== "center";
    if (isLeft) {
      positionStrategy.left("0");
    } else if (isRight) {
      positionStrategy.right("0");
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === "top") {
      positionStrategy.top("0");
    } else {
      positionStrategy.bottom("0");
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
};
_MatSnackBar.ɵfac = function MatSnackBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBar)(ɵɵinject(Overlay), ɵɵinject(LiveAnnouncer), ɵɵinject(Injector), ɵɵinject(BreakpointObserver), ɵɵinject(_MatSnackBar, 12), ɵɵinject(MAT_SNACK_BAR_DEFAULT_OPTIONS));
};
_MatSnackBar.ɵprov = ɵɵdefineInjectable({
  token: _MatSnackBar,
  factory: _MatSnackBar.ɵfac,
  providedIn: "root"
});
var MatSnackBar = _MatSnackBar;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: LiveAnnouncer
  }, {
    type: Injector
  }, {
    type: BreakpointObserver
  }, {
    type: MatSnackBar,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: MatSnackBarConfig,
    decorators: [{
      type: Inject,
      args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
var _MatSnackBarModule = class _MatSnackBarModule {
};
_MatSnackBarModule.ɵfac = function MatSnackBarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatSnackBarModule)();
};
_MatSnackBarModule.ɵmod = ɵɵdefineNgModule({
  type: _MatSnackBarModule,
  imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  exports: [MatCommonModule, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction]
});
_MatSnackBarModule.ɵinj = ɵɵdefineInjector({
  providers: [MatSnackBar],
  imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, MatCommonModule]
});
var MatSnackBarModule = _MatSnackBarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, MatButtonModule, MatCommonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();
export {
  MAT_SNACK_BAR_DATA,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarConfig,
  MatSnackBarContainer,
  MatSnackBarLabel,
  MatSnackBarModule,
  MatSnackBarRef,
  SimpleSnackBar,
  matSnackBarAnimations
};
//# sourceMappingURL=@angular_material_snack-bar.js.map
