import {
  CdkPortalOutlet,
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
import {
  UniqueSelectionDispatcher
} from "./chunk-DWTH4YG3.js";
import {
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  SPACE,
  hasModifierKey
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
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
  Host,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  QueryList,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-O52VBTXF.js";
import {
  merge
} from "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  EMPTY,
  Subject,
  Subscription,
  filter,
  startWith,
  take
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var nextId$1 = 0;
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var _CdkAccordion = class _CdkAccordion {
  constructor() {
    this._stateChanges = new Subject();
    this._openCloseAllActions = new Subject();
    this.id = `cdk-accordion-${nextId$1++}`;
    this.multi = false;
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
};
_CdkAccordion.ɵfac = function CdkAccordion_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAccordion)();
};
_CdkAccordion.ɵdir = ɵɵdefineDirective({
  type: _CdkAccordion,
  selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
  inputs: {
    multi: [2, "multi", "multi", booleanAttribute]
  },
  exportAs: ["cdkAccordion"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CDK_ACCORDION,
    useExisting: _CdkAccordion
  }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkAccordion = _CdkAccordion;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }],
      standalone: true
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var nextId = 0;
var _CdkAccordionItem = class _CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    this._openCloseAllSubscription = Subscription.EMPTY;
    this.closed = new EventEmitter();
    this.opened = new EventEmitter();
    this.destroyed = new EventEmitter();
    this.expandedChange = new EventEmitter();
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this.disabled = false;
    this._removeUniqueSelectionListener = () => {
    };
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
};
_CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAccordionItem)(ɵɵdirectiveInject(CDK_ACCORDION, 12), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(UniqueSelectionDispatcher));
};
_CdkAccordionItem.ɵdir = ɵɵdefineDirective({
  type: _CdkAccordionItem,
  selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
  inputs: {
    expanded: [2, "expanded", "expanded", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    closed: "closed",
    opened: "opened",
    destroyed: "destroyed",
    expandedChange: "expandedChange"
  },
  exportAs: ["cdkAccordionItem"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
    // registering to the same accordion.
    {
      provide: CDK_ACCORDION,
      useValue: void 0
    }
  ]), ɵɵInputTransformsFeature]
});
var CdkAccordionItem = _CdkAccordionItem;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ],
      standalone: true
    }]
  }], () => [{
    type: CdkAccordion,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_ACCORDION]
    }, {
      type: SkipSelf
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: UniqueSelectionDispatcher
  }], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
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
    }]
  });
})();
var _CdkAccordionModule = class _CdkAccordionModule {
};
_CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAccordionModule)();
};
_CdkAccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkAccordionModule,
  imports: [CdkAccordion, CdkAccordionItem],
  exports: [CdkAccordion, CdkAccordionItem]
});
_CdkAccordionModule.ɵinj = ɵɵdefineInjector({});
var CdkAccordionModule = _CdkAccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c0 = ["body"];
var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {
}
var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c4 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 2);
    ɵɵelement(2, "path", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var EXPANSION_PANEL_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";
var matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: trigger("indicatorRotate", [state("collapsed, void", style({
    transform: "rotate(0deg)"
  })), state("expanded", style({
    transform: "rotate(180deg)"
  })), transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: trigger("bodyExpansion", [
    state("collapsed, void", style({
      height: "0px",
      visibility: "hidden"
    })),
    // Clear the `visibility` while open, otherwise the content will be visible when placed in
    // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
    // that have a `visibility` of their own (see #27436).
    state("expanded", style({
      height: "*",
      visibility: ""
    })),
    transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))
  ])
};
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var _MatExpansionPanelContent = class _MatExpansionPanelContent {
  constructor(_template, _expansionPanel) {
    this._template = _template;
    this._expansionPanel = _expansionPanel;
  }
};
_MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanelContent)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(MAT_EXPANSION_PANEL, 8));
};
_MatExpansionPanelContent.ɵdir = ɵɵdefineDirective({
  type: _MatExpansionPanelContent,
  selectors: [["ng-template", "matExpansionPanelContent", ""]],
  standalone: true
});
var MatExpansionPanelContent = _MatExpansionPanelContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_EXPANSION_PANEL]
    }, {
      type: Optional
    }]
  }], null);
})();
var uniqueId = 0;
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var _MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    this.afterExpand = new EventEmitter();
    this.afterCollapse = new EventEmitter();
    this._inputChanges = new Subject();
    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    this.accordion = accordion;
    this._document = _document;
    this._animationsDisabled = _animationMode === "NoopAnimations";
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  /** Called when the expansion animation has started. */
  _animationStarted(event) {
    if (!isInitialAnimation(event) && !this._animationsDisabled && this._body) {
      this._body?.nativeElement.setAttribute("inert", "");
    }
  }
  /** Called when the expansion animation has finished. */
  _animationDone(event) {
    if (!isInitialAnimation(event)) {
      if (event.toState === "expanded") {
        this.afterExpand.emit();
      } else if (event.toState === "collapsed") {
        this.afterCollapse.emit();
      }
      if (!this._animationsDisabled && this._body) {
        this._body.nativeElement.removeAttribute("inert");
      }
    }
  }
};
_MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanel)(ɵɵdirectiveInject(MAT_ACCORDION, 12), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(UniqueSelectionDispatcher), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵdirectiveInject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
};
_MatExpansionPanel.ɵcmp = ɵɵdefineComponent({
  type: _MatExpansionPanel,
  selectors: [["mat-expansion-panel"]],
  contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatExpansionPanelContent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
    }
  },
  viewQuery: function MatExpansionPanel_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._body = _t.first);
    }
  },
  hostAttrs: [1, "mat-expansion-panel"],
  hostVars: 6,
  hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationsDisabled)("mat-expansion-panel-spacing", ctx._hasSpacing());
    }
  },
  inputs: {
    hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
    togglePosition: "togglePosition"
  },
  outputs: {
    afterExpand: "afterExpand",
    afterCollapse: "afterCollapse"
  },
  exportAs: ["matExpansionPanel"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
    // to the same accordion.
    {
      provide: MAT_ACCORDION,
      useValue: void 0
    },
    {
      provide: MAT_EXPANSION_PANEL,
      useExisting: _MatExpansionPanel
    }
  ]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [["body", ""], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
  template: function MatExpansionPanel_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c1);
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 1, 0);
      ɵɵlistener("@bodyExpansion.start", function MatExpansionPanel_Template_div_animation_bodyExpansion_start_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._animationStarted($event));
      })("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx._animationDone($event));
      });
      ɵɵelementStart(3, "div", 2);
      ɵɵprojection(4, 1);
      ɵɵtemplate(5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
      ɵɵelementEnd();
      ɵɵprojection(6, 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
      ɵɵattribute("aria-labelledby", ctx._headerId);
      ɵɵadvance(4);
      ɵɵproperty("cdkPortalOutlet", ctx._portal);
    }
  },
  dependencies: [CdkPortalOutlet],
  styles: ['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.bodyExpansion]
  },
  changeDetection: 0
});
var MatExpansionPanel = _MatExpansionPanel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      standalone: true,
      imports: [CdkPortalOutlet],
      template: '<ng-content select="mat-expansion-panel-header"></ng-content>\n<div class="mat-expansion-panel-content"\n     role="region"\n     [@bodyExpansion]="_getExpandedState()"\n     (@bodyExpansion.start)="_animationStarted($event)"\n     (@bodyExpansion.done)="_animationDone($event)"\n     [attr.aria-labelledby]="_headerId"\n     [id]="id"\n     #body>\n  <div class="mat-expansion-panel-body">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n  </div>\n  <ng-content select="mat-action-row"></ng-content>\n</div>\n',
      styles: ['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [MAT_ACCORDION]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: ViewContainerRef
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
      type: Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: Optional
    }]
  }], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }]
  });
})();
function isInitialAnimation(event) {
  return event.fromState === "void";
}
var _MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
};
_MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
};
_MatExpansionPanelActionRow.ɵdir = ɵɵdefineDirective({
  type: _MatExpansionPanelActionRow,
  selectors: [["mat-action-row"]],
  hostAttrs: [1, "mat-action-row"],
  standalone: true
});
var MatExpansionPanelActionRow = _MatExpansionPanelActionRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = Subscription.EMPTY;
    this.tabIndex = 0;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
};
_MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanelHeader)(ɵɵdirectiveInject(MatExpansionPanel, 1), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8), ɵɵinjectAttribute("tabindex"));
};
_MatExpansionPanelHeader.ɵcmp = ɵɵdefineComponent({
  type: _MatExpansionPanelHeader,
  selectors: [["mat-expansion-panel-header"]],
  hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
  hostVars: 15,
  hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
        return ctx._toggle();
      })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
      ɵɵstyleProp("height", ctx._getHeaderHeight());
      ɵɵclassProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    expandedHeight: "expandedHeight",
    collapsedHeight: "collapsedHeight",
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 3,
  consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
  template: function MatExpansionPanelHeader_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵprojection(2, 1);
      ɵɵprojection(3, 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 1, "span", 1);
    }
    if (rf & 2) {
      ɵɵclassProp("mat-content-hide-toggle", !ctx._showToggle());
      ɵɵadvance(4);
      ɵɵconditional(ctx._showToggle() ? 4 : -1);
    }
  },
  styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.indicatorRotate]
  },
  changeDetection: 0
});
var MatExpansionPanelHeader = _MatExpansionPanelHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"',
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      standalone: true,
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span [@indicatorRotate]="_getExpandedState()" class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}']
    }]
  }], () => [{
    type: MatExpansionPanel,
    decorators: [{
      type: Host
    }]
  }, {
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
    }, {
      type: Optional
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
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var _MatExpansionPanelDescription = class _MatExpansionPanelDescription {
};
_MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
};
_MatExpansionPanelDescription.ɵdir = ɵɵdefineDirective({
  type: _MatExpansionPanelDescription,
  selectors: [["mat-panel-description"]],
  hostAttrs: [1, "mat-expansion-panel-header-description"],
  standalone: true
});
var MatExpansionPanelDescription = _MatExpansionPanelDescription;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatExpansionPanelTitle = class _MatExpansionPanelTitle {
};
_MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
};
_MatExpansionPanelTitle.ɵdir = ɵɵdefineDirective({
  type: _MatExpansionPanelTitle,
  selectors: [["mat-panel-title"]],
  hostAttrs: [1, "mat-expansion-panel-header-title"],
  standalone: true
});
var MatExpansionPanelTitle = _MatExpansionPanelTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatAccordion = class _MatAccordion extends CdkAccordion {
  constructor() {
    super(...arguments);
    this._ownHeaders = new QueryList();
    this.hideToggle = false;
    this.displayMode = "default";
    this.togglePosition = "after";
  }
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
};
_MatAccordion.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatAccordion_BaseFactory;
  return function MatAccordion_Factory(__ngFactoryType__) {
    return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = ɵɵgetInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
  };
})();
_MatAccordion.ɵdir = ɵɵdefineDirective({
  type: _MatAccordion,
  selectors: [["mat-accordion"]],
  contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, MatExpansionPanelHeader, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headers = _t);
    }
  },
  hostAttrs: [1, "mat-accordion"],
  hostVars: 2,
  hostBindings: function MatAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mat-accordion-multi", ctx.multi);
    }
  },
  inputs: {
    hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
    displayMode: "displayMode",
    togglePosition: "togglePosition"
  },
  exportAs: ["matAccordion"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: MAT_ACCORDION,
    useExisting: _MatAccordion
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatAccordion = _MatAccordion;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      },
      standalone: true
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var _MatExpansionModule = class _MatExpansionModule {
};
_MatExpansionModule.ɵfac = function MatExpansionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatExpansionModule)();
};
_MatExpansionModule.ɵmod = ɵɵdefineNgModule({
  type: _MatExpansionModule,
  imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
  exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
});
_MatExpansionModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, CdkAccordionModule, PortalModule]
});
var MatExpansionModule = _MatExpansionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();
export {
  EXPANSION_PANEL_ANIMATION_TIMING,
  MAT_ACCORDION,
  MAT_EXPANSION_PANEL,
  MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelContent,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  matExpansionAnimations
};
//# sourceMappingURL=@angular_material_expansion.js.map
