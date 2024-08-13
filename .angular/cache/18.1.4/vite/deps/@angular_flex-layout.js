import {
  ClassDirective,
  DefaultClassDirective,
  DefaultImgSrcDirective,
  DefaultShowHideDirective,
  DefaultStyleDirective,
  ExtendedModule,
  ImgSrcDirective,
  ImgSrcStyleBuilder,
  ShowHideDirective,
  ShowHideStyleBuilder,
  StyleDirective
} from "./chunk-KJY7LQDI.js";
import {
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder
} from "./chunk-AETUND26.js";
import {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  LAYOUT_CONFIG,
  MatchMedia,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  MockMatchMedia,
  MockMatchMediaProvider,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  StyleBuilder,
  StyleUtils,
  StylesheetMap,
  coerceArray,
  mergeAlias,
  multiply,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis
} from "./chunk-G6WC67WO.js";
import {
  coerceBooleanProperty
} from "./chunk-6XVBT7Y7.js";
import "./chunk-4H2MIMVP.js";
import "./chunk-4RSL5AP2.js";
import "./chunk-MSK6WRJL.js";
import {
  isPlatformServer
} from "./chunk-YJAHL4QH.js";
import {
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  NgModule,
  PLATFORM_ID,
  Version,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import {
  __spreadValues
} from "./chunk-35ENWJA4.js";

// node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs
var ROW_DEFAULT = "stretch";
var COL_DEFAULT = "stretch";
var GridAlignStyleBuilder = class extends StyleBuilder {
  buildStyles(input) {
    return buildCss$2(input || ROW_DEFAULT);
  }
};
GridAlignStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAlignStyleBuilder_BaseFactory;
  return function GridAlignStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridAlignStyleBuilder_BaseFactory || (ɵGridAlignStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridAlignStyleBuilder)))(__ngFactoryType__ || GridAlignStyleBuilder);
  };
})();
GridAlignStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridAlignStyleBuilder,
  factory: GridAlignStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align";
    this.styleCache = alignCache;
    this.init();
  }
};
GridAlignDirective.ɵfac = function GridAlignDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAlignDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridAlignDirective.ɵdir = ɵɵdefineDirective({
  type: GridAlignDirective,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridAlignStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
var alignCache = /* @__PURE__ */ new Map();
var inputs$a = ["gdGridAlign", "gdGridAlign.xs", "gdGridAlign.sm", "gdGridAlign.md", "gdGridAlign.lg", "gdGridAlign.xl", "gdGridAlign.lt-sm", "gdGridAlign.lt-md", "gdGridAlign.lt-lg", "gdGridAlign.lt-xl", "gdGridAlign.gt-xs", "gdGridAlign.gt-sm", "gdGridAlign.gt-md", "gdGridAlign.gt-lg"];
var selector$a = `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
`;
var DefaultGridAlignDirective = class extends GridAlignDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$a;
  }
};
DefaultGridAlignDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAlignDirective_BaseFactory;
  return function DefaultGridAlignDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAlignDirective_BaseFactory || (ɵDefaultGridAlignDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAlignDirective)))(__ngFactoryType__ || DefaultGridAlignDirective);
  };
})();
DefaultGridAlignDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAlignDirective,
  selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
  inputs: {
    gdGridAlign: "gdGridAlign",
    "gdGridAlign.xs": "gdGridAlign.xs",
    "gdGridAlign.sm": "gdGridAlign.sm",
    "gdGridAlign.md": "gdGridAlign.md",
    "gdGridAlign.lg": "gdGridAlign.lg",
    "gdGridAlign.xl": "gdGridAlign.xl",
    "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
    "gdGridAlign.lt-md": "gdGridAlign.lt-md",
    "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
    "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
    "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
    "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
    "gdGridAlign.gt-md": "gdGridAlign.gt-md",
    "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignDirective, [{
    type: Directive,
    args: [{
      selector: selector$a,
      inputs: inputs$a
    }]
  }], null, null);
})();
function buildCss$2(align = "") {
  const css = {}, [rowAxis, columnAxis] = align.split(" ");
  switch (rowAxis) {
    case "end":
      css["justify-self"] = "end";
      break;
    case "center":
      css["justify-self"] = "center";
      break;
    case "stretch":
      css["justify-self"] = "stretch";
      break;
    case "start":
      css["justify-self"] = "start";
      break;
    default:
      css["justify-self"] = ROW_DEFAULT;
      break;
  }
  switch (columnAxis) {
    case "end":
      css["align-self"] = "end";
      break;
    case "center":
      css["align-self"] = "center";
      break;
    case "stretch":
      css["align-self"] = "stretch";
      break;
    case "start":
      css["align-self"] = "start";
      break;
    default:
      css["align-self"] = COL_DEFAULT;
      break;
  }
  return css;
}
var DEFAULT_MAIN$1 = "start";
var DEFAULT_CROSS$1 = "stretch";
var GridAlignColumnsStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    return buildCss$1(input || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, parent.inline);
  }
};
GridAlignColumnsStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAlignColumnsStyleBuilder_BaseFactory;
  return function GridAlignColumnsStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridAlignColumnsStyleBuilder_BaseFactory || (ɵGridAlignColumnsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridAlignColumnsStyleBuilder)))(__ngFactoryType__ || GridAlignColumnsStyleBuilder);
  };
})();
GridAlignColumnsStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridAlignColumnsStyleBuilder,
  factory: GridAlignColumnsStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignColumnsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignColumnsDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align-columns";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAlignColumnsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignColumnsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridAlignColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: GridAlignColumnsDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignColumnsDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridAlignColumnsStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var alignColumnsCache = /* @__PURE__ */ new Map();
var alignColumnsInlineCache = /* @__PURE__ */ new Map();
var inputs$9 = ["gdAlignColumns", "gdAlignColumns.xs", "gdAlignColumns.sm", "gdAlignColumns.md", "gdAlignColumns.lg", "gdAlignColumns.xl", "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg"];
var selector$9 = `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
`;
var DefaultGridAlignColumnsDirective = class extends GridAlignColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$9;
  }
};
DefaultGridAlignColumnsDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAlignColumnsDirective_BaseFactory;
  return function DefaultGridAlignColumnsDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAlignColumnsDirective_BaseFactory || (ɵDefaultGridAlignColumnsDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAlignColumnsDirective)))(__ngFactoryType__ || DefaultGridAlignColumnsDirective);
  };
})();
DefaultGridAlignColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAlignColumnsDirective,
  selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
  inputs: {
    gdAlignColumns: "gdAlignColumns",
    "gdAlignColumns.xs": "gdAlignColumns.xs",
    "gdAlignColumns.sm": "gdAlignColumns.sm",
    "gdAlignColumns.md": "gdAlignColumns.md",
    "gdAlignColumns.lg": "gdAlignColumns.lg",
    "gdAlignColumns.xl": "gdAlignColumns.xl",
    "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
    "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
    "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
    "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
    "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
    "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
    "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
    "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignColumnsDirective, [{
    type: Directive,
    args: [{
      selector: selector$9,
      inputs: inputs$9
    }]
  }], null, null);
})();
function buildCss$1(align, inline) {
  const css = {}, [mainAxis, crossAxis] = align.split(" ");
  switch (mainAxis) {
    case "center":
      css["align-content"] = "center";
      break;
    case "space-around":
      css["align-content"] = "space-around";
      break;
    case "space-between":
      css["align-content"] = "space-between";
      break;
    case "space-evenly":
      css["align-content"] = "space-evenly";
      break;
    case "end":
      css["align-content"] = "end";
      break;
    case "start":
      css["align-content"] = "start";
      break;
    case "stretch":
      css["align-content"] = "stretch";
      break;
    default:
      css["align-content"] = DEFAULT_MAIN$1;
      break;
  }
  switch (crossAxis) {
    case "start":
      css["align-items"] = "start";
      break;
    case "center":
      css["align-items"] = "center";
      break;
    case "end":
      css["align-items"] = "end";
      break;
    case "stretch":
      css["align-items"] = "stretch";
      break;
    default:
      css["align-items"] = DEFAULT_CROSS$1;
      break;
  }
  css["display"] = inline ? "inline-grid" : "grid";
  return css;
}
var DEFAULT_MAIN = "start";
var DEFAULT_CROSS = "stretch";
var GridAlignRowsStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    return buildCss(input || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, parent.inline);
  }
};
GridAlignRowsStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAlignRowsStyleBuilder_BaseFactory;
  return function GridAlignRowsStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridAlignRowsStyleBuilder_BaseFactory || (ɵGridAlignRowsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridAlignRowsStyleBuilder)))(__ngFactoryType__ || GridAlignRowsStyleBuilder);
  };
})();
GridAlignRowsStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridAlignRowsStyleBuilder,
  factory: GridAlignRowsStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignRowsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAlignRowsDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-align-rows";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAlignRowsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAlignRowsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridAlignRowsDirective.ɵdir = ɵɵdefineDirective({
  type: GridAlignRowsDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAlignRowsDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridAlignRowsStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var alignRowsCache = /* @__PURE__ */ new Map();
var alignRowsInlineCache = /* @__PURE__ */ new Map();
var inputs$8 = ["gdAlignRows", "gdAlignRows.xs", "gdAlignRows.sm", "gdAlignRows.md", "gdAlignRows.lg", "gdAlignRows.xl", "gdAlignRows.lt-sm", "gdAlignRows.lt-md", "gdAlignRows.lt-lg", "gdAlignRows.lt-xl", "gdAlignRows.gt-xs", "gdAlignRows.gt-sm", "gdAlignRows.gt-md", "gdAlignRows.gt-lg"];
var selector$8 = `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
`;
var DefaultGridAlignRowsDirective = class extends GridAlignRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$8;
  }
};
DefaultGridAlignRowsDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAlignRowsDirective_BaseFactory;
  return function DefaultGridAlignRowsDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAlignRowsDirective_BaseFactory || (ɵDefaultGridAlignRowsDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAlignRowsDirective)))(__ngFactoryType__ || DefaultGridAlignRowsDirective);
  };
})();
DefaultGridAlignRowsDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAlignRowsDirective,
  selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
  inputs: {
    gdAlignRows: "gdAlignRows",
    "gdAlignRows.xs": "gdAlignRows.xs",
    "gdAlignRows.sm": "gdAlignRows.sm",
    "gdAlignRows.md": "gdAlignRows.md",
    "gdAlignRows.lg": "gdAlignRows.lg",
    "gdAlignRows.xl": "gdAlignRows.xl",
    "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
    "gdAlignRows.lt-md": "gdAlignRows.lt-md",
    "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
    "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
    "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
    "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
    "gdAlignRows.gt-md": "gdAlignRows.gt-md",
    "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAlignRowsDirective, [{
    type: Directive,
    args: [{
      selector: selector$8,
      inputs: inputs$8
    }]
  }], null, null);
})();
function buildCss(align, inline) {
  const css = {}, [mainAxis, crossAxis] = align.split(" ");
  switch (mainAxis) {
    case "center":
    case "space-around":
    case "space-between":
    case "space-evenly":
    case "end":
    case "start":
    case "stretch":
      css["justify-content"] = mainAxis;
      break;
    default:
      css["justify-content"] = DEFAULT_MAIN;
      break;
  }
  switch (crossAxis) {
    case "start":
    case "center":
    case "end":
    case "stretch":
      css["justify-items"] = crossAxis;
      break;
    default:
      css["justify-items"] = DEFAULT_CROSS;
      break;
  }
  css["display"] = inline ? "inline-grid" : "grid";
  return css;
}
var DEFAULT_VALUE$7 = "auto";
var GridAreaStyleBuilder = class extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-area": input || DEFAULT_VALUE$7
    };
  }
};
GridAreaStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAreaStyleBuilder_BaseFactory;
  return function GridAreaStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridAreaStyleBuilder_BaseFactory || (ɵGridAreaStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridAreaStyleBuilder)))(__ngFactoryType__ || GridAreaStyleBuilder);
  };
})();
GridAreaStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridAreaStyleBuilder,
  factory: GridAreaStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreaStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAreaDirective = class extends BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-area";
    this.styleCache = gridAreaCache;
    this.init();
  }
};
GridAreaDirective.ɵfac = function GridAreaDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAreaDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridAreaStyleBuilder), ɵɵdirectiveInject(MediaMarshaller));
};
GridAreaDirective.ɵdir = ɵɵdefineDirective({
  type: GridAreaDirective,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreaDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: StyleUtils
    }, {
      type: GridAreaStyleBuilder
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
var gridAreaCache = /* @__PURE__ */ new Map();
var inputs$7 = ["gdArea", "gdArea.xs", "gdArea.sm", "gdArea.md", "gdArea.lg", "gdArea.xl", "gdArea.lt-sm", "gdArea.lt-md", "gdArea.lt-lg", "gdArea.lt-xl", "gdArea.gt-xs", "gdArea.gt-sm", "gdArea.gt-md", "gdArea.gt-lg"];
var selector$7 = `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
`;
var DefaultGridAreaDirective = class extends GridAreaDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$7;
  }
};
DefaultGridAreaDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAreaDirective_BaseFactory;
  return function DefaultGridAreaDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAreaDirective_BaseFactory || (ɵDefaultGridAreaDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAreaDirective)))(__ngFactoryType__ || DefaultGridAreaDirective);
  };
})();
DefaultGridAreaDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAreaDirective,
  selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
  inputs: {
    gdArea: "gdArea",
    "gdArea.xs": "gdArea.xs",
    "gdArea.sm": "gdArea.sm",
    "gdArea.md": "gdArea.md",
    "gdArea.lg": "gdArea.lg",
    "gdArea.xl": "gdArea.xl",
    "gdArea.lt-sm": "gdArea.lt-sm",
    "gdArea.lt-md": "gdArea.lt-md",
    "gdArea.lt-lg": "gdArea.lt-lg",
    "gdArea.lt-xl": "gdArea.lt-xl",
    "gdArea.gt-xs": "gdArea.gt-xs",
    "gdArea.gt-sm": "gdArea.gt-sm",
    "gdArea.gt-md": "gdArea.gt-md",
    "gdArea.gt-lg": "gdArea.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAreaDirective, [{
    type: Directive,
    args: [{
      selector: selector$7,
      inputs: inputs$7
    }]
  }], null, null);
})();
var DEFAULT_VALUE$6 = "none";
var DELIMETER = "|";
var GridAreasStyleBuiler = class extends StyleBuilder {
  buildStyles(input, parent) {
    const areas = (input || DEFAULT_VALUE$6).split(DELIMETER).map((v) => `"${v.trim()}"`);
    return {
      "display": parent.inline ? "inline-grid" : "grid",
      "grid-template-areas": areas.join(" ")
    };
  }
};
GridAreasStyleBuiler.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAreasStyleBuiler_BaseFactory;
  return function GridAreasStyleBuiler_Factory(__ngFactoryType__) {
    return (ɵGridAreasStyleBuiler_BaseFactory || (ɵGridAreasStyleBuiler_BaseFactory = ɵɵgetInheritedFactory(GridAreasStyleBuiler)))(__ngFactoryType__ || GridAreasStyleBuiler);
  };
})();
GridAreasStyleBuiler.ɵprov = ɵɵdefineInjectable({
  token: GridAreasStyleBuiler,
  factory: GridAreasStyleBuiler.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreasStyleBuiler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAreasDirective = class extends BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-areas";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? areasInlineCache : areasCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridAreasDirective.ɵfac = function GridAreasDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAreasDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridAreasStyleBuiler), ɵɵdirectiveInject(MediaMarshaller));
};
GridAreasDirective.ɵdir = ɵɵdefineDirective({
  type: GridAreasDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAreasDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: StyleUtils
    }, {
      type: GridAreasStyleBuiler
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var areasCache = /* @__PURE__ */ new Map();
var areasInlineCache = /* @__PURE__ */ new Map();
var inputs$6 = ["gdAreas", "gdAreas.xs", "gdAreas.sm", "gdAreas.md", "gdAreas.lg", "gdAreas.xl", "gdAreas.lt-sm", "gdAreas.lt-md", "gdAreas.lt-lg", "gdAreas.lt-xl", "gdAreas.gt-xs", "gdAreas.gt-sm", "gdAreas.gt-md", "gdAreas.gt-lg"];
var selector$6 = `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
`;
var DefaultGridAreasDirective = class extends GridAreasDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$6;
  }
};
DefaultGridAreasDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAreasDirective_BaseFactory;
  return function DefaultGridAreasDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAreasDirective_BaseFactory || (ɵDefaultGridAreasDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAreasDirective)))(__ngFactoryType__ || DefaultGridAreasDirective);
  };
})();
DefaultGridAreasDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAreasDirective,
  selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
  inputs: {
    gdAreas: "gdAreas",
    "gdAreas.xs": "gdAreas.xs",
    "gdAreas.sm": "gdAreas.sm",
    "gdAreas.md": "gdAreas.md",
    "gdAreas.lg": "gdAreas.lg",
    "gdAreas.xl": "gdAreas.xl",
    "gdAreas.lt-sm": "gdAreas.lt-sm",
    "gdAreas.lt-md": "gdAreas.lt-md",
    "gdAreas.lt-lg": "gdAreas.lt-lg",
    "gdAreas.lt-xl": "gdAreas.lt-xl",
    "gdAreas.gt-xs": "gdAreas.gt-xs",
    "gdAreas.gt-sm": "gdAreas.gt-sm",
    "gdAreas.gt-md": "gdAreas.gt-md",
    "gdAreas.gt-lg": "gdAreas.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAreasDirective, [{
    type: Directive,
    args: [{
      selector: selector$6,
      inputs: inputs$6
    }]
  }], null, null);
})();
var DEFAULT_VALUE$5 = "initial";
var GridAutoStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    let [direction, dense] = (input || DEFAULT_VALUE$5).split(" ");
    if (direction !== "column" && direction !== "row" && direction !== "dense") {
      direction = "row";
    }
    dense = dense === "dense" && direction !== "dense" ? " dense" : "";
    return {
      "display": parent.inline ? "inline-grid" : "grid",
      "grid-auto-flow": direction + dense
    };
  }
};
GridAutoStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridAutoStyleBuilder_BaseFactory;
  return function GridAutoStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridAutoStyleBuilder_BaseFactory || (ɵGridAutoStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridAutoStyleBuilder)))(__ngFactoryType__ || GridAutoStyleBuilder);
  };
})();
GridAutoStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridAutoStyleBuilder,
  factory: GridAutoStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAutoStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridAutoDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this._inline = false;
    this.DIRECTIVE_KEY = "grid-auto";
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? autoInlineCache : autoCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridAutoDirective.ɵfac = function GridAutoDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridAutoDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridAutoStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridAutoDirective.ɵdir = ɵɵdefineDirective({
  type: GridAutoDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridAutoDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridAutoStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var autoCache = /* @__PURE__ */ new Map();
var autoInlineCache = /* @__PURE__ */ new Map();
var inputs$5 = ["gdAuto", "gdAuto.xs", "gdAuto.sm", "gdAuto.md", "gdAuto.lg", "gdAuto.xl", "gdAuto.lt-sm", "gdAuto.lt-md", "gdAuto.lt-lg", "gdAuto.lt-xl", "gdAuto.gt-xs", "gdAuto.gt-sm", "gdAuto.gt-md", "gdAuto.gt-lg"];
var selector$5 = `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
`;
var DefaultGridAutoDirective = class extends GridAutoDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$5;
  }
};
DefaultGridAutoDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridAutoDirective_BaseFactory;
  return function DefaultGridAutoDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridAutoDirective_BaseFactory || (ɵDefaultGridAutoDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridAutoDirective)))(__ngFactoryType__ || DefaultGridAutoDirective);
  };
})();
DefaultGridAutoDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridAutoDirective,
  selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
  inputs: {
    gdAuto: "gdAuto",
    "gdAuto.xs": "gdAuto.xs",
    "gdAuto.sm": "gdAuto.sm",
    "gdAuto.md": "gdAuto.md",
    "gdAuto.lg": "gdAuto.lg",
    "gdAuto.xl": "gdAuto.xl",
    "gdAuto.lt-sm": "gdAuto.lt-sm",
    "gdAuto.lt-md": "gdAuto.lt-md",
    "gdAuto.lt-lg": "gdAuto.lt-lg",
    "gdAuto.lt-xl": "gdAuto.lt-xl",
    "gdAuto.gt-xs": "gdAuto.gt-xs",
    "gdAuto.gt-sm": "gdAuto.gt-sm",
    "gdAuto.gt-md": "gdAuto.gt-md",
    "gdAuto.gt-lg": "gdAuto.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridAutoDirective, [{
    type: Directive,
    args: [{
      selector: selector$5,
      inputs: inputs$5
    }]
  }], null, null);
})();
var DEFAULT_VALUE$4 = "auto";
var GridColumnStyleBuilder = class extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-column": input || DEFAULT_VALUE$4
    };
  }
};
GridColumnStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridColumnStyleBuilder_BaseFactory;
  return function GridColumnStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridColumnStyleBuilder_BaseFactory || (ɵGridColumnStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridColumnStyleBuilder)))(__ngFactoryType__ || GridColumnStyleBuilder);
  };
})();
GridColumnStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridColumnStyleBuilder,
  factory: GridColumnStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridColumnDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-column";
    this.styleCache = columnCache;
    this.init();
  }
};
GridColumnDirective.ɵfac = function GridColumnDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridColumnDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridColumnStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridColumnDirective.ɵdir = ɵɵdefineDirective({
  type: GridColumnDirective,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridColumnStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
var columnCache = /* @__PURE__ */ new Map();
var inputs$4 = ["gdColumn", "gdColumn.xs", "gdColumn.sm", "gdColumn.md", "gdColumn.lg", "gdColumn.xl", "gdColumn.lt-sm", "gdColumn.lt-md", "gdColumn.lt-lg", "gdColumn.lt-xl", "gdColumn.gt-xs", "gdColumn.gt-sm", "gdColumn.gt-md", "gdColumn.gt-lg"];
var selector$4 = `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
`;
var DefaultGridColumnDirective = class extends GridColumnDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$4;
  }
};
DefaultGridColumnDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridColumnDirective_BaseFactory;
  return function DefaultGridColumnDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridColumnDirective_BaseFactory || (ɵDefaultGridColumnDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridColumnDirective)))(__ngFactoryType__ || DefaultGridColumnDirective);
  };
})();
DefaultGridColumnDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridColumnDirective,
  selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
  inputs: {
    gdColumn: "gdColumn",
    "gdColumn.xs": "gdColumn.xs",
    "gdColumn.sm": "gdColumn.sm",
    "gdColumn.md": "gdColumn.md",
    "gdColumn.lg": "gdColumn.lg",
    "gdColumn.xl": "gdColumn.xl",
    "gdColumn.lt-sm": "gdColumn.lt-sm",
    "gdColumn.lt-md": "gdColumn.lt-md",
    "gdColumn.lt-lg": "gdColumn.lt-lg",
    "gdColumn.lt-xl": "gdColumn.lt-xl",
    "gdColumn.gt-xs": "gdColumn.gt-xs",
    "gdColumn.gt-sm": "gdColumn.gt-sm",
    "gdColumn.gt-md": "gdColumn.gt-md",
    "gdColumn.gt-lg": "gdColumn.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridColumnDirective, [{
    type: Directive,
    args: [{
      selector: selector$4,
      inputs: inputs$4
    }]
  }], null, null);
})();
var DEFAULT_VALUE$3 = "none";
var AUTO_SPECIFIER$1 = "!";
var GridColumnsStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE$3;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER$1)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
      auto = true;
    }
    const css = {
      "display": parent.inline ? "inline-grid" : "grid",
      "grid-auto-columns": "",
      "grid-template-columns": ""
    };
    const key = auto ? "grid-auto-columns" : "grid-template-columns";
    css[key] = input;
    return css;
  }
};
GridColumnsStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridColumnsStyleBuilder_BaseFactory;
  return function GridColumnsStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridColumnsStyleBuilder_BaseFactory || (ɵGridColumnsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridColumnsStyleBuilder)))(__ngFactoryType__ || GridColumnsStyleBuilder);
  };
})();
GridColumnsStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridColumnsStyleBuilder,
  factory: GridColumnsStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridColumnsDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-columns";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? columnsInlineCache : columnsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridColumnsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridColumnsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: GridColumnsDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridColumnsDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridColumnsStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var columnsCache = /* @__PURE__ */ new Map();
var columnsInlineCache = /* @__PURE__ */ new Map();
var inputs$3 = ["gdColumns", "gdColumns.xs", "gdColumns.sm", "gdColumns.md", "gdColumns.lg", "gdColumns.xl", "gdColumns.lt-sm", "gdColumns.lt-md", "gdColumns.lt-lg", "gdColumns.lt-xl", "gdColumns.gt-xs", "gdColumns.gt-sm", "gdColumns.gt-md", "gdColumns.gt-lg"];
var selector$3 = `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
`;
var DefaultGridColumnsDirective = class extends GridColumnsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
};
DefaultGridColumnsDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridColumnsDirective_BaseFactory;
  return function DefaultGridColumnsDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridColumnsDirective_BaseFactory || (ɵDefaultGridColumnsDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridColumnsDirective)))(__ngFactoryType__ || DefaultGridColumnsDirective);
  };
})();
DefaultGridColumnsDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridColumnsDirective,
  selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
  inputs: {
    gdColumns: "gdColumns",
    "gdColumns.xs": "gdColumns.xs",
    "gdColumns.sm": "gdColumns.sm",
    "gdColumns.md": "gdColumns.md",
    "gdColumns.lg": "gdColumns.lg",
    "gdColumns.xl": "gdColumns.xl",
    "gdColumns.lt-sm": "gdColumns.lt-sm",
    "gdColumns.lt-md": "gdColumns.lt-md",
    "gdColumns.lt-lg": "gdColumns.lt-lg",
    "gdColumns.lt-xl": "gdColumns.lt-xl",
    "gdColumns.gt-xs": "gdColumns.gt-xs",
    "gdColumns.gt-sm": "gdColumns.gt-sm",
    "gdColumns.gt-md": "gdColumns.gt-md",
    "gdColumns.gt-lg": "gdColumns.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridColumnsDirective, [{
    type: Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
var DEFAULT_VALUE$2 = "0";
var GridGapStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    return {
      "display": parent.inline ? "inline-grid" : "grid",
      "grid-gap": input || DEFAULT_VALUE$2
    };
  }
};
GridGapStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridGapStyleBuilder_BaseFactory;
  return function GridGapStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridGapStyleBuilder_BaseFactory || (ɵGridGapStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridGapStyleBuilder)))(__ngFactoryType__ || GridGapStyleBuilder);
  };
})();
GridGapStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridGapStyleBuilder,
  factory: GridGapStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridGapStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridGapDirective = class extends BaseDirective2 {
  constructor(elRef, styleUtils, styleBuilder, marshal) {
    super(elRef, styleBuilder, styleUtils, marshal);
    this.DIRECTIVE_KEY = "grid-gap";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? gapInlineCache : gapCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridGapDirective.ɵfac = function GridGapDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridGapDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(GridGapStyleBuilder), ɵɵdirectiveInject(MediaMarshaller));
};
GridGapDirective.ɵdir = ɵɵdefineDirective({
  type: GridGapDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridGapDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: StyleUtils
    }, {
      type: GridGapStyleBuilder
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var gapCache = /* @__PURE__ */ new Map();
var gapInlineCache = /* @__PURE__ */ new Map();
var inputs$2 = ["gdGap", "gdGap.xs", "gdGap.sm", "gdGap.md", "gdGap.lg", "gdGap.xl", "gdGap.lt-sm", "gdGap.lt-md", "gdGap.lt-lg", "gdGap.lt-xl", "gdGap.gt-xs", "gdGap.gt-sm", "gdGap.gt-md", "gdGap.gt-lg"];
var selector$2 = `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
`;
var DefaultGridGapDirective = class extends GridGapDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
};
DefaultGridGapDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridGapDirective_BaseFactory;
  return function DefaultGridGapDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridGapDirective_BaseFactory || (ɵDefaultGridGapDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridGapDirective)))(__ngFactoryType__ || DefaultGridGapDirective);
  };
})();
DefaultGridGapDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridGapDirective,
  selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
  inputs: {
    gdGap: "gdGap",
    "gdGap.xs": "gdGap.xs",
    "gdGap.sm": "gdGap.sm",
    "gdGap.md": "gdGap.md",
    "gdGap.lg": "gdGap.lg",
    "gdGap.xl": "gdGap.xl",
    "gdGap.lt-sm": "gdGap.lt-sm",
    "gdGap.lt-md": "gdGap.lt-md",
    "gdGap.lt-lg": "gdGap.lt-lg",
    "gdGap.lt-xl": "gdGap.lt-xl",
    "gdGap.gt-xs": "gdGap.gt-xs",
    "gdGap.gt-sm": "gdGap.gt-sm",
    "gdGap.gt-md": "gdGap.gt-md",
    "gdGap.gt-lg": "gdGap.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridGapDirective, [{
    type: Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
var DEFAULT_VALUE$1 = "auto";
var GridRowStyleBuilder = class extends StyleBuilder {
  buildStyles(input) {
    return {
      "grid-row": input || DEFAULT_VALUE$1
    };
  }
};
GridRowStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridRowStyleBuilder_BaseFactory;
  return function GridRowStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridRowStyleBuilder_BaseFactory || (ɵGridRowStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridRowStyleBuilder)))(__ngFactoryType__ || GridRowStyleBuilder);
  };
})();
GridRowStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridRowStyleBuilder,
  factory: GridRowStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridRowDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-row";
    this.styleCache = rowCache;
    this.init();
  }
};
GridRowDirective.ɵfac = function GridRowDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridRowStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridRowDirective.ɵdir = ɵɵdefineDirective({
  type: GridRowDirective,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridRowStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
var rowCache = /* @__PURE__ */ new Map();
var inputs$1 = ["gdRow", "gdRow.xs", "gdRow.sm", "gdRow.md", "gdRow.lg", "gdRow.xl", "gdRow.lt-sm", "gdRow.lt-md", "gdRow.lt-lg", "gdRow.lt-xl", "gdRow.gt-xs", "gdRow.gt-sm", "gdRow.gt-md", "gdRow.gt-lg"];
var selector$1 = `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
`;
var DefaultGridRowDirective = class extends GridRowDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
};
DefaultGridRowDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridRowDirective_BaseFactory;
  return function DefaultGridRowDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridRowDirective_BaseFactory || (ɵDefaultGridRowDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridRowDirective)))(__ngFactoryType__ || DefaultGridRowDirective);
  };
})();
DefaultGridRowDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridRowDirective,
  selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
  inputs: {
    gdRow: "gdRow",
    "gdRow.xs": "gdRow.xs",
    "gdRow.sm": "gdRow.sm",
    "gdRow.md": "gdRow.md",
    "gdRow.lg": "gdRow.lg",
    "gdRow.xl": "gdRow.xl",
    "gdRow.lt-sm": "gdRow.lt-sm",
    "gdRow.lt-md": "gdRow.lt-md",
    "gdRow.lt-lg": "gdRow.lt-lg",
    "gdRow.lt-xl": "gdRow.lt-xl",
    "gdRow.gt-xs": "gdRow.gt-xs",
    "gdRow.gt-sm": "gdRow.gt-sm",
    "gdRow.gt-md": "gdRow.gt-md",
    "gdRow.gt-lg": "gdRow.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridRowDirective, [{
    type: Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
var DEFAULT_VALUE = "none";
var AUTO_SPECIFIER = "!";
var GridRowsStyleBuilder = class extends StyleBuilder {
  buildStyles(input, parent) {
    input = input || DEFAULT_VALUE;
    let auto = false;
    if (input.endsWith(AUTO_SPECIFIER)) {
      input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
      auto = true;
    }
    const css = {
      "display": parent.inline ? "inline-grid" : "grid",
      "grid-auto-rows": "",
      "grid-template-rows": ""
    };
    const key = auto ? "grid-auto-rows" : "grid-template-rows";
    css[key] = input;
    return css;
  }
};
GridRowsStyleBuilder.ɵfac = /* @__PURE__ */ (() => {
  let ɵGridRowsStyleBuilder_BaseFactory;
  return function GridRowsStyleBuilder_Factory(__ngFactoryType__) {
    return (ɵGridRowsStyleBuilder_BaseFactory || (ɵGridRowsStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(GridRowsStyleBuilder)))(__ngFactoryType__ || GridRowsStyleBuilder);
  };
})();
GridRowsStyleBuilder.ɵprov = ɵɵdefineInjectable({
  token: GridRowsStyleBuilder,
  factory: GridRowsStyleBuilder.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowsStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var GridRowsDirective = class extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal) {
    super(elementRef, styleBuilder, styler, marshal);
    this.DIRECTIVE_KEY = "grid-rows";
    this._inline = false;
    this.init();
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = coerceBooleanProperty(val);
  }
  // *********************************************
  // Protected methods
  // *********************************************
  updateWithValue(value) {
    this.styleCache = this.inline ? rowsInlineCache : rowsCache;
    this.addStyles(value, {
      inline: this.inline
    });
  }
};
GridRowsDirective.ɵfac = function GridRowsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridRowsDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GridRowsStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
GridRowsDirective.ɵdir = ɵɵdefineDirective({
  type: GridRowsDirective,
  inputs: {
    inline: [0, "gdInline", "inline"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridRowsDirective, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GridRowsStyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, {
    inline: [{
      type: Input,
      args: ["gdInline"]
    }]
  });
})();
var rowsCache = /* @__PURE__ */ new Map();
var rowsInlineCache = /* @__PURE__ */ new Map();
var inputs = ["gdRows", "gdRows.xs", "gdRows.sm", "gdRows.md", "gdRows.lg", "gdRows.xl", "gdRows.lt-sm", "gdRows.lt-md", "gdRows.lt-lg", "gdRows.lt-xl", "gdRows.gt-xs", "gdRows.gt-sm", "gdRows.gt-md", "gdRows.gt-lg"];
var selector = `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
`;
var DefaultGridRowsDirective = class extends GridRowsDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
};
DefaultGridRowsDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵDefaultGridRowsDirective_BaseFactory;
  return function DefaultGridRowsDirective_Factory(__ngFactoryType__) {
    return (ɵDefaultGridRowsDirective_BaseFactory || (ɵDefaultGridRowsDirective_BaseFactory = ɵɵgetInheritedFactory(DefaultGridRowsDirective)))(__ngFactoryType__ || DefaultGridRowsDirective);
  };
})();
DefaultGridRowsDirective.ɵdir = ɵɵdefineDirective({
  type: DefaultGridRowsDirective,
  selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
  inputs: {
    gdRows: "gdRows",
    "gdRows.xs": "gdRows.xs",
    "gdRows.sm": "gdRows.sm",
    "gdRows.md": "gdRows.md",
    "gdRows.lg": "gdRows.lg",
    "gdRows.xl": "gdRows.xl",
    "gdRows.lt-sm": "gdRows.lt-sm",
    "gdRows.lt-md": "gdRows.lt-md",
    "gdRows.lt-lg": "gdRows.lt-lg",
    "gdRows.lt-xl": "gdRows.lt-xl",
    "gdRows.gt-xs": "gdRows.gt-xs",
    "gdRows.gt-sm": "gdRows.gt-sm",
    "gdRows.gt-md": "gdRows.gt-md",
    "gdRows.gt-lg": "gdRows.gt-lg"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultGridRowsDirective, [{
    type: Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
var GridModule = class {
};
GridModule.ɵfac = function GridModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GridModule)();
};
GridModule.ɵmod = ɵɵdefineNgModule({
  type: GridModule,
  declarations: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective],
  imports: [CoreModule],
  exports: [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective]
});
GridModule.ɵinj = ɵɵdefineInjector({
  imports: [CoreModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule],
      declarations: [...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/@angular/flex-layout/fesm2020/angular-flex-layout.mjs
var VERSION = new Version("15.0.0-beta.42");
var FlexLayoutModule = class _FlexLayoutModule {
  constructor(serverModuleLoaded, platformId) {
    if (isPlatformServer(platformId) && !serverModuleLoaded) {
      console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule");
    }
  }
  /**
   * Initialize the FlexLayoutModule with a set of config options,
   * which sets the corresponding tokens accordingly
   */
  static withConfig(configOptions, breakpoints = []) {
    return {
      ngModule: _FlexLayoutModule,
      providers: configOptions.serverLoaded ? [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }, {
        provide: SERVER_TOKEN,
        useValue: true
      }] : [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }]
    };
  }
};
FlexLayoutModule.ɵfac = function FlexLayoutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FlexLayoutModule)(ɵɵinject(SERVER_TOKEN), ɵɵinject(PLATFORM_ID));
};
FlexLayoutModule.ɵmod = ɵɵdefineNgModule({
  type: FlexLayoutModule,
  imports: [FlexModule, ExtendedModule, GridModule],
  exports: [FlexModule, ExtendedModule, GridModule]
});
FlexLayoutModule.ɵinj = ɵɵdefineInjector({
  imports: [FlexModule, ExtendedModule, GridModule, FlexModule, ExtendedModule, GridModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [FlexModule, ExtendedModule, GridModule],
      exports: [FlexModule, ExtendedModule, GridModule]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SERVER_TOKEN]
      }]
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
export {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  ClassDirective,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  DefaultClassDirective,
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultGridAlignColumnsDirective,
  DefaultGridAlignDirective,
  DefaultGridAlignRowsDirective,
  DefaultGridAreaDirective,
  DefaultGridAreasDirective,
  DefaultGridAutoDirective,
  DefaultGridColumnDirective,
  DefaultGridColumnsDirective,
  DefaultGridGapDirective,
  DefaultGridRowDirective,
  DefaultGridRowsDirective,
  DefaultImgSrcDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  DefaultShowHideDirective,
  DefaultStyleDirective,
  ExtendedModule,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexLayoutModule,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  GridAlignColumnsDirective,
  GridAlignColumnsStyleBuilder,
  GridAlignDirective,
  GridAlignRowsDirective,
  GridAlignRowsStyleBuilder,
  GridAlignStyleBuilder,
  GridAreaDirective,
  GridAreaStyleBuilder,
  GridAreasDirective,
  GridAreasStyleBuiler,
  GridAutoDirective,
  GridAutoStyleBuilder,
  GridColumnDirective,
  GridColumnStyleBuilder,
  GridColumnsDirective,
  GridColumnsStyleBuilder,
  GridGapDirective,
  GridGapStyleBuilder,
  GridModule,
  GridRowDirective,
  GridRowStyleBuilder,
  GridRowsDirective,
  GridRowsStyleBuilder,
  ImgSrcDirective,
  ImgSrcStyleBuilder,
  LAYOUT_CONFIG,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  ShowHideDirective,
  ShowHideStyleBuilder,
  StyleBuilder,
  StyleDirective,
  StyleUtils,
  StylesheetMap,
  VERSION,
  coerceArray,
  mergeAlias,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis,
  MatchMedia as ɵMatchMedia,
  MockMatchMedia as ɵMockMatchMedia,
  MockMatchMediaProvider as ɵMockMatchMediaProvider,
  multiply as ɵmultiply
};
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@angular_flex-layout.js.map
