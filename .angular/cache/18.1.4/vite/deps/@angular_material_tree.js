import {
  DataSource,
  isDataSource
} from "./chunk-DWTH4YG3.js";
import {
  MatCommonModule
} from "./chunk-TGD3FD3I.js";
import "./chunk-6XVBT7Y7.js";
import {
  Directionality
} from "./chunk-4H2MIMVP.js";
import "./chunk-YJAHL4QH.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  Optional,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵgetInheritedFactory,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-O52VBTXF.js";
import {
  isObservable,
  merge
} from "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  BehaviorSubject,
  Subject,
  distinctUntilChanged,
  map,
  of,
  take,
  takeUntil
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/@angular/cdk/fesm2022/tree.mjs
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var _CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
};
_CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeNodeOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
};
_CdkTreeNodeOutlet.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeOutlet,
  selectors: [["", "cdkTreeNodeOutlet", ""]],
  standalone: true
});
var CdkTreeNodeOutlet = _CdkTreeNodeOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var CdkTreeNodeOutletContext = class {
  constructor(data) {
    this.$implicit = data;
  }
};
var _CdkTreeNodeDef = class _CdkTreeNodeDef {
  /** @docs-private */
  constructor(template) {
    this.template = template;
  }
};
_CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeNodeDef)(ɵɵdirectiveInject(TemplateRef));
};
_CdkTreeNodeDef.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeDef,
  selectors: [["", "cdkTreeNodeDef", ""]],
  inputs: {
    when: [0, "cdkTreeNodeDefWhen", "when"]
  },
  standalone: true
});
var CdkTreeNodeDef = _CdkTreeNodeDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control for the tree.`);
}
function getTreeControlFunctionsMissingError() {
  return Error(`Could not find functions for nested/flat tree in tree control.`);
}
var _CdkTree = class _CdkTree {
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  constructor(_differs, _changeDetectorRef) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._onDestroy = new Subject();
    this._levels = /* @__PURE__ */ new Map();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
  }
  ngOnInit() {
    this._dataDiffer = this._differs.find([]).create(this.trackBy);
    if (!this.treeControl && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlMissingError();
    }
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
  }
  ngAfterContentChecked() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
    if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
      this._observeRenderChanges();
    }
  }
  // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
  //     and nested trees.
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._observeRenderChanges();
    }
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (dataStream) {
      this._dataSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => this.renderNodeChanges(data));
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTreeNoValidDataSourceError();
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes) {
      return;
    }
    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
        this._levels.delete(item.item);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    this._changeDetectorRef.detectChanges();
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */
  insertNode(nodeData, index, viewContainer, parentData) {
    const node = this._getNodeDef(nodeData, index);
    const context = new CdkTreeNodeOutletContext(nodeData);
    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
    } else if (typeof parentData !== "undefined" && this._levels.has(parentData)) {
      context.level = this._levels.get(parentData) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(nodeData, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
};
_CdkTree.ɵfac = function CdkTree_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTree)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef));
};
_CdkTree.ɵcmp = ɵɵdefineComponent({
  type: _CdkTree,
  selectors: [["cdk-tree"]],
  contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkTreeNodeDef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeDefs = _t);
    }
  },
  viewQuery: function CdkTree_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkTreeNodeOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "cdk-tree"],
  inputs: {
    dataSource: "dataSource",
    treeControl: "treeControl",
    trackBy: "trackBy"
  },
  exportAs: ["cdkTree"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function CdkTree_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkTreeNodeOutlet],
  encapsulation: 2
});
var CdkTree = _CdkTree;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree"
      },
      encapsulation: ViewEncapsulation$1.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkTreeNodeOutlet]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }], {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var _CdkTreeNode = class _CdkTreeNode {
  /**
   * The role of the tree node.
   * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
   *   removed in a future version.
   * @breaking-change 12.0.0 Remove this input
   */
  get role() {
    return "treeitem";
  }
  set role(_role) {
    this._elementRef.nativeElement.setAttribute("role", _role);
  }
  /** The tree node's data. */
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._setRoleFromData();
      this._dataChanges.next();
    }
  }
  get isExpanded() {
    return this._tree.treeControl.isExpanded(this._data);
  }
  get level() {
    return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
  }
  constructor(_elementRef, _tree) {
    this._elementRef = _elementRef;
    this._tree = _tree;
    this._destroyed = new Subject();
    this._dataChanges = new Subject();
    this._changeDetectorRef = inject(ChangeDetectorRef);
    _CdkTreeNode.mostRecentTreeNode = this;
    this.role = "treeitem";
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._elementRef.nativeElement.setAttribute("aria-level", `${this.level + 1}`);
    this._tree.treeControl.expansionModel.changed.pipe(map(() => this.isExpanded), distinctUntilChanged()).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Focuses the menu item. Implements for FocusableOption. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  // TODO: role should eventually just be set in the component host
  _setRoleFromData() {
    if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }
    this.role = "treeitem";
  }
};
_CdkTreeNode.mostRecentTreeNode = null;
_CdkTreeNode.ɵfac = function CdkTreeNode_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree));
};
_CdkTreeNode.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNode,
  selectors: [["cdk-tree-node"]],
  hostAttrs: [1, "cdk-tree-node"],
  hostVars: 1,
  hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.isExpanded);
    }
  },
  inputs: {
    role: "role"
  },
  exportAs: ["cdkTreeNode"],
  standalone: true
});
var CdkTreeNode = _CdkTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "isExpanded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }], {
    role: [{
      type: Input
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var _CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, _differs) {
    super(elementRef, tree);
    this._differs = _differs;
  }
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    if (!this._tree.treeControl.getChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }
    const childrenNodes = this._tree.treeControl.getChildren(this.data);
    if (Array.isArray(childrenNodes)) {
      this.updateChildrenNodes(childrenNodes);
    } else if (isObservable(childrenNodes)) {
      childrenNodes.pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    }
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
};
_CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkNestedTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(IterableDiffers));
};
_CdkNestedTreeNode.ɵdir = ɵɵdefineDirective({
  type: _CdkNestedTreeNode,
  selectors: [["cdk-nested-tree-node"]],
  contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkTreeNodeOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeOutlet = _t);
    }
  },
  hostAttrs: [1, "cdk-nested-tree-node"],
  exportAs: ["cdkNestedTreeNode"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNode,
    useExisting: _CdkNestedTreeNode
  }, {
    provide: CDK_TREE_NODE_OUTLET_NODE,
    useExisting: _CdkNestedTreeNode
  }]), ɵɵInheritDefinitionFeature]
});
var CdkNestedTreeNode = _CdkNestedTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: IterableDiffers
  }], {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var _CdkTreeNodePadding = class _CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  constructor(_treeNode, _tree, _element, _dir) {
    this._treeNode = _treeNode;
    this._tree = _tree;
    this._element = _element;
    this._dir = _dir;
    this._destroyed = new Subject();
    this.indentUnits = "px";
    this._indent = 40;
    this._setPadding();
    if (_dir) {
      _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    }
    _treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent() {
    const nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
};
_CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeNodePadding)(ɵɵdirectiveInject(CdkTreeNode), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_CdkTreeNodePadding.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodePadding,
  selectors: [["", "cdkTreeNodePadding", ""]],
  inputs: {
    level: [2, "cdkTreeNodePadding", "level", numberAttribute],
    indent: [0, "cdkTreeNodePaddingIndent", "indent"]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkTreeNodePadding = _CdkTreeNodePadding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]",
      standalone: true
    }]
  }], () => [{
    type: CdkTreeNode
  }, {
    type: CdkTree
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var _CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  constructor(_tree, _treeNode) {
    this._tree = _tree;
    this._treeNode = _treeNode;
    this.recursive = false;
  }
  _toggle(event) {
    this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
    event.stopPropagation();
  }
};
_CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeNodeToggle)(ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(CdkTreeNode));
};
_CdkTreeNodeToggle.ɵdir = ɵɵdefineDirective({
  type: _CdkTreeNodeToggle,
  selectors: [["", "cdkTreeNodeToggle", ""]],
  hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
        return ctx._toggle($event);
      });
    }
  },
  inputs: {
    recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkTreeNodeToggle = _CdkTreeNodeToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle($event)"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkTree
  }, {
    type: CdkTreeNode
  }], {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var _CdkTreeModule = class _CdkTreeModule {
};
_CdkTreeModule.ɵfac = function CdkTreeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTreeModule)();
};
_CdkTreeModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkTreeModule,
  imports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet],
  exports: [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet]
});
_CdkTreeModule.ɵinj = ɵɵdefineInjector({});
var CdkTreeModule = _CdkTreeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tree.mjs
var _MatTreeNode = class _MatTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, tabIndex) {
    super(elementRef, tree);
    this.disabled = false;
    this.tabIndex = Number(tabIndex) || 0;
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
};
_MatTreeNode.ɵfac = function MatTreeNode_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵinjectAttribute("tabindex"));
};
_MatTreeNode.ɵdir = ɵɵdefineDirective({
  type: _MatTreeNode,
  selectors: [["mat-tree-node"]],
  hostAttrs: [1, "mat-tree-node"],
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
  },
  exportAs: ["matTreeNode"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNode,
    useExisting: _MatTreeNode
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatTreeNode = _MatTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-tree-node",
      exportAs: "matTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: MatTreeNode
      }],
      host: {
        "class": "mat-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var _MatTreeNodeDef = class _MatTreeNodeDef extends CdkTreeNodeDef {
};
_MatTreeNodeDef.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTreeNodeDef_BaseFactory;
  return function MatTreeNodeDef_Factory(__ngFactoryType__) {
    return (ɵMatTreeNodeDef_BaseFactory || (ɵMatTreeNodeDef_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodeDef)))(__ngFactoryType__ || _MatTreeNodeDef);
  };
})();
_MatTreeNodeDef.ɵdir = ɵɵdefineDirective({
  type: _MatTreeNodeDef,
  selectors: [["", "matTreeNodeDef", ""]],
  inputs: {
    when: [0, "matTreeNodeDefWhen", "when"],
    data: [0, "matTreeNode", "data"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeDef,
    useExisting: _MatTreeNodeDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatTreeNodeDef = _MatTreeNodeDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "matTreeNodeDefWhen"
      }],
      providers: [{
        provide: CdkTreeNodeDef,
        useExisting: MatTreeNodeDef
      }],
      standalone: true
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["matTreeNode"]
    }]
  });
})();
var _MatNestedTreeNode = class _MatNestedTreeNode extends CdkNestedTreeNode {
  /** Tabindex for the node. */
  get tabIndex() {
    return this.disabled ? -1 : this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value != null ? value : 0;
  }
  constructor(elementRef, tree, differs, tabIndex) {
    super(elementRef, tree, differs);
    this.disabled = false;
    this.tabIndex = Number(tabIndex) || 0;
  }
  // This is a workaround for https://github.com/angular/angular/issues/19145
  // In aot mode, the lifecycle hooks from parent class are not called.
  // TODO(tinayuangao): Remove when the angular issue #19145 is fixed
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
};
_MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatNestedTreeNode)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CdkTree), ɵɵdirectiveInject(IterableDiffers), ɵɵinjectAttribute("tabindex"));
};
_MatNestedTreeNode.ɵdir = ɵɵdefineDirective({
  type: _MatNestedTreeNode,
  selectors: [["mat-nested-tree-node"]],
  hostAttrs: [1, "mat-nested-tree-node"],
  inputs: {
    node: [0, "matNestedTreeNode", "node"],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tabIndex: "tabIndex"
  },
  exportAs: ["matNestedTreeNode"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkNestedTreeNode,
    useExisting: _MatNestedTreeNode
  }, {
    provide: CdkTreeNode,
    useExisting: _MatNestedTreeNode
  }, {
    provide: CDK_TREE_NODE_OUTLET_NODE,
    useExisting: _MatNestedTreeNode
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatNestedTreeNode = _MatNestedTreeNode;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-nested-tree-node",
      exportAs: "matNestedTreeNode",
      providers: [{
        provide: CdkNestedTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CdkTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: MatNestedTreeNode
      }],
      host: {
        "class": "mat-nested-tree-node"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CdkTree
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    node: [{
      type: Input,
      args: ["matNestedTreeNode"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input
    }]
  });
})();
var _MatTreeNodePadding = class _MatTreeNodePadding extends CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
};
_MatTreeNodePadding.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTreeNodePadding_BaseFactory;
  return function MatTreeNodePadding_Factory(__ngFactoryType__) {
    return (ɵMatTreeNodePadding_BaseFactory || (ɵMatTreeNodePadding_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodePadding)))(__ngFactoryType__ || _MatTreeNodePadding);
  };
})();
_MatTreeNodePadding.ɵdir = ɵɵdefineDirective({
  type: _MatTreeNodePadding,
  selectors: [["", "matTreeNodePadding", ""]],
  inputs: {
    level: [2, "matTreeNodePadding", "level", numberAttribute],
    indent: [0, "matTreeNodePaddingIndent", "indent"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodePadding,
    useExisting: _MatTreeNodePadding
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var MatTreeNodePadding = _MatTreeNodePadding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodePadding]",
      providers: [{
        provide: CdkTreeNodePadding,
        useExisting: MatTreeNodePadding
      }],
      standalone: true
    }]
  }], null, {
    level: [{
      type: Input,
      args: [{
        alias: "matTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["matTreeNodePaddingIndent"]
    }]
  });
})();
var _MatTreeNodeOutlet = class _MatTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }
};
_MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTreeNodeOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8));
};
_MatTreeNodeOutlet.ɵdir = ɵɵdefineDirective({
  type: _MatTreeNodeOutlet,
  selectors: [["", "matTreeNodeOutlet", ""]],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeOutlet,
    useExisting: _MatTreeNodeOutlet
  }])]
});
var MatTreeNodeOutlet = _MatTreeNodeOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeOutlet]",
      providers: [{
        provide: CdkTreeNodeOutlet,
        useExisting: MatTreeNodeOutlet
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TREE_NODE_OUTLET_NODE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _MatTree = class _MatTree extends CdkTree {
  constructor() {
    super(...arguments);
    this._nodeOutlet = void 0;
  }
};
_MatTree.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTree_BaseFactory;
  return function MatTree_Factory(__ngFactoryType__) {
    return (ɵMatTree_BaseFactory || (ɵMatTree_BaseFactory = ɵɵgetInheritedFactory(_MatTree)))(__ngFactoryType__ || _MatTree);
  };
})();
_MatTree.ɵcmp = ɵɵdefineComponent({
  type: _MatTree,
  selectors: [["mat-tree"]],
  viewQuery: function MatTree_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(MatTreeNodeOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "mat-tree"],
  exportAs: ["matTree"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTree,
    useExisting: _MatTree
  }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 0,
  consts: [["matTreeNodeOutlet", ""]],
  template: function MatTree_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [MatTreeNodeOutlet],
  styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color)}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color);font-family:var(--mat-tree-node-text-font);font-size:var(--mat-tree-node-text-size);font-weight:var(--mat-tree-node-text-weight)}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"],
  encapsulation: 2
});
var MatTree = _MatTree;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTree, [{
    type: Component,
    args: [{
      selector: "mat-tree",
      exportAs: "matTree",
      template: `<ng-container matTreeNodeOutlet></ng-container>`,
      host: {
        "class": "mat-tree",
        "role": "tree"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: CdkTree,
        useExisting: MatTree
      }],
      standalone: true,
      imports: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color)}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color);font-family:var(--mat-tree-node-text-font);font-size:var(--mat-tree-node-text-size);font-weight:var(--mat-tree-node-text-weight)}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height)}.mat-nested-tree-node{border-bottom-width:0}"]
    }]
  }], null, {
    _nodeOutlet: [{
      type: ViewChild,
      args: [MatTreeNodeOutlet, {
        static: true
      }]
    }]
  });
})();
var _MatTreeNodeToggle = class _MatTreeNodeToggle extends CdkTreeNodeToggle {
};
_MatTreeNodeToggle.ɵfac = /* @__PURE__ */ (() => {
  let ɵMatTreeNodeToggle_BaseFactory;
  return function MatTreeNodeToggle_Factory(__ngFactoryType__) {
    return (ɵMatTreeNodeToggle_BaseFactory || (ɵMatTreeNodeToggle_BaseFactory = ɵɵgetInheritedFactory(_MatTreeNodeToggle)))(__ngFactoryType__ || _MatTreeNodeToggle);
  };
})();
_MatTreeNodeToggle.ɵdir = ɵɵdefineDirective({
  type: _MatTreeNodeToggle,
  selectors: [["", "matTreeNodeToggle", ""]],
  inputs: {
    recursive: [0, "matTreeNodeToggleRecursive", "recursive"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: CdkTreeNodeToggle,
    useExisting: _MatTreeNodeToggle
  }]), ɵɵInheritDefinitionFeature]
});
var MatTreeNodeToggle = _MatTreeNodeToggle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeToggle]",
      providers: [{
        provide: CdkTreeNodeToggle,
        useExisting: MatTreeNodeToggle
      }],
      inputs: [{
        name: "recursive",
        alias: "matTreeNodeToggleRecursive"
      }],
      standalone: true
    }]
  }], null, null);
})();
var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
var _MatTreeModule = class _MatTreeModule {
};
_MatTreeModule.ɵfac = function MatTreeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatTreeModule)();
};
_MatTreeModule.ɵmod = ɵɵdefineNgModule({
  type: _MatTreeModule,
  imports: [CdkTreeModule, MatCommonModule, MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet],
  exports: [MatCommonModule, MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet]
});
_MatTreeModule.ɵinj = ɵɵdefineInjector({
  imports: [CdkTreeModule, MatCommonModule, MatCommonModule]
});
var MatTreeModule = _MatTreeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeModule, [{
    type: NgModule,
    args: [{
      imports: [CdkTreeModule, MatCommonModule, ...MAT_TREE_DIRECTIVES],
      exports: [MatCommonModule, MAT_TREE_DIRECTIVES]
    }]
  }], null, null);
})();
var MatTreeFlattener = class {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }
  _flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);
    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);
      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe(take(1)).subscribe((children) => {
            this._flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }
    return resultNodes;
  }
  _flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      let childParentMap = parentMap.slice();
      childParentMap.push(index != children.length - 1);
      this._flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */
  flattenNodes(structuredData) {
    let resultNodes = [];
    structuredData.forEach((node) => this._flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */
  expandFlattenedNodes(nodes, treeControl) {
    let results = [];
    let currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }
};
var MatTreeFlatDataSource = class extends DataSource {
  get data() {
    return this._data.value;
  }
  set data(value) {
    this._data.next(value);
    this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
    this._treeControl.dataNodes = this._flattenedData.value;
  }
  constructor(_treeControl, _treeFlattener, initialData) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    this._flattenedData = new BehaviorSubject([]);
    this._expandedData = new BehaviorSubject([]);
    this._data = new BehaviorSubject([]);
    if (initialData) {
      this.data = initialData;
    }
  }
  connect(collectionViewer) {
    return merge(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe(map(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
      return this._expandedData.value;
    }));
  }
  disconnect() {
  }
};
var MatTreeNestedDataSource = class extends DataSource {
  constructor() {
    super(...arguments);
    this._data = new BehaviorSubject([]);
  }
  /**
   * Data for the nested tree
   */
  get data() {
    return this._data.value;
  }
  set data(value) {
    this._data.next(value);
  }
  connect(collectionViewer) {
    return merge(...[collectionViewer.viewChange, this._data]).pipe(map(() => this.data));
  }
  disconnect() {
  }
};
export {
  MatNestedTreeNode,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodePadding,
  MatTreeNodeToggle
};
//# sourceMappingURL=@angular_material_tree.js.map
