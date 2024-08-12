import {
  DOCUMENT,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-YJAHL4QH.js";
import {
  APP_BOOTSTRAP_LISTENER,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-O52VBTXF.js";
import {
  asapScheduler,
  fromEvent,
  merge
} from "./chunk-ORNLS2RR.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-D4JAG7AO.js";
import {
  __spreadValues
} from "./chunk-35ENWJA4.js";

// node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs
function applyCssPrefixes(target) {
  for (let key in target) {
    let value = target[key] ?? "";
    switch (key) {
      case "display":
        if (value === "flex") {
          target["display"] = ["-webkit-flex", "flex"];
        } else if (value === "inline-flex") {
          target["display"] = ["-webkit-inline-flex", "inline-flex"];
        } else {
          target["display"] = value;
        }
        break;
      case "align-items":
      case "align-self":
      case "align-content":
      case "flex":
      case "flex-basis":
      case "flex-flow":
      case "flex-grow":
      case "flex-shrink":
      case "flex-wrap":
      case "justify-content":
        target["-webkit-" + key] = value;
        break;
      case "flex-direction":
        target["-webkit-flex-direction"] = value;
        target["flex-direction"] = value;
        break;
      case "order":
        target["order"] = target["-webkit-" + key] = isNaN(+value) ? "0" : value;
        break;
    }
  }
  return target;
}
var INLINE = "inline";
var LAYOUT_VALUES = ["row", "column", "row-reverse", "column-reverse"];
function buildLayoutCSS(value) {
  let [direction, wrap, isInline] = validateValue(value);
  return buildCSS(direction, wrap, isInline);
}
function validateValue(value) {
  value = value?.toLowerCase() ?? "";
  let [direction, wrap, inline] = value.split(" ");
  if (!LAYOUT_VALUES.find((x) => x === direction)) {
    direction = LAYOUT_VALUES[0];
  }
  if (wrap === INLINE) {
    wrap = inline !== INLINE ? inline : "";
    inline = INLINE;
  }
  return [direction, validateWrapValue(wrap), !!inline];
}
function isFlowHorizontal(value) {
  let [flow] = validateValue(value);
  return flow.indexOf("row") > -1;
}
function validateWrapValue(value) {
  if (!!value) {
    switch (value.toLowerCase()) {
      case "reverse":
      case "wrap-reverse":
      case "reverse-wrap":
        value = "wrap-reverse";
        break;
      case "no":
      case "none":
      case "nowrap":
        value = "nowrap";
        break;
      default:
        value = "wrap";
        break;
    }
  }
  return value;
}
function buildCSS(direction, wrap = null, inline = false) {
  return {
    display: inline ? "inline-flex" : "flex",
    "box-sizing": "border-box",
    "flex-direction": direction,
    "flex-wrap": wrap || null
  };
}
function extendObject(dest, ...sources) {
  if (dest == null) {
    throw TypeError("Cannot convert undefined or null to object");
  }
  for (let source of sources) {
    if (source != null) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }
  return dest;
}

// node_modules/@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs
function removeStyles(_document, platformId) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      const elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`));
      const classRegex = /\bflex-layout-.+?\b/g;
      elements.forEach((el) => {
        el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, "");
      });
    }
  };
}
var BROWSER_PROVIDER = {
  provide: APP_BOOTSTRAP_LISTENER,
  useFactory: removeStyles,
  deps: [DOCUMENT, PLATFORM_ID],
  multi: true
};
var CLASS_NAME = "flex-layout-";
var CoreModule = class {
};
CoreModule.ɵfac = function CoreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CoreModule)();
};
CoreModule.ɵmod = ɵɵdefineNgModule({
  type: CoreModule
});
CoreModule.ɵinj = ɵɵdefineInjector({
  providers: [BROWSER_PROVIDER]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreModule, [{
    type: NgModule,
    args: [{
      providers: [BROWSER_PROVIDER]
    }]
  }], null, null);
})();
var MediaChange = class _MediaChange {
  /**
   * @param matches whether the mediaQuery is currently activated
   * @param mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
   * @param mqAlias e.g. gt-sm, md, gt-lg
   * @param suffix e.g. GtSM, Md, GtLg
   * @param priority the priority of activation for the given breakpoint
   */
  constructor(matches = false, mediaQuery = "all", mqAlias = "", suffix = "", priority = 0) {
    this.matches = matches;
    this.mediaQuery = mediaQuery;
    this.mqAlias = mqAlias;
    this.suffix = suffix;
    this.priority = priority;
    this.property = "";
  }
  /** Create an exact copy of the MediaChange */
  clone() {
    return new _MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
  }
};
var StylesheetMap = class {
  constructor() {
    this.stylesheet = /* @__PURE__ */ new Map();
  }
  /**
   * Add an individual style to an HTML element
   */
  addStyleToElement(element, style, value) {
    const stylesheet = this.stylesheet.get(element);
    if (stylesheet) {
      stylesheet.set(style, value);
    } else {
      this.stylesheet.set(element, /* @__PURE__ */ new Map([[style, value]]));
    }
  }
  /**
   * Clear the virtual stylesheet
   */
  clearStyles() {
    this.stylesheet.clear();
  }
  /**
   * Retrieve a given style for an HTML element
   */
  getStyleForElement(el, styleName) {
    const styles = this.stylesheet.get(el);
    let value = "";
    if (styles) {
      const style = styles.get(styleName);
      if (typeof style === "number" || typeof style === "string") {
        value = style + "";
      }
    }
    return value;
  }
};
StylesheetMap.ɵfac = function StylesheetMap_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StylesheetMap)();
};
StylesheetMap.ɵprov = ɵɵdefineInjectable({
  token: StylesheetMap,
  factory: StylesheetMap.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StylesheetMap, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DEFAULT_CONFIG = {
  addFlexToParent: true,
  addOrientationBps: false,
  disableDefaultBps: false,
  disableVendorPrefixes: false,
  serverLoaded: false,
  useColumnBasisZero: true,
  printWithBreakpoints: [],
  mediaTriggerAutoRestore: true,
  ssrObserveBreakpoints: [],
  // This is disabled by default because otherwise the multiplier would
  // run for all users, regardless of whether they're using this feature.
  // Instead, we disable it by default, which requires this ugly cast.
  multiplier: void 0,
  defaultUnit: "px",
  detectLayoutDisplay: false
};
var LAYOUT_CONFIG = new InjectionToken("Flex Layout token, config options for the library", {
  providedIn: "root",
  factory: () => DEFAULT_CONFIG
});
var SERVER_TOKEN = new InjectionToken("FlexLayoutServerLoaded", {
  providedIn: "root",
  factory: () => false
});
var BREAKPOINT = new InjectionToken("Flex Layout token, collect all breakpoints into one provider", {
  providedIn: "root",
  factory: () => null
});
function mergeAlias(dest, source) {
  dest = dest?.clone() ?? new MediaChange();
  if (source) {
    dest.mqAlias = source.alias;
    dest.mediaQuery = source.mediaQuery;
    dest.suffix = source.suffix;
    dest.priority = source.priority;
  }
  return dest;
}
var StyleBuilder = class {
  constructor() {
    this.shouldCache = true;
  }
  /**
   * Run a side effect computation given the input string and the computed styles
   * from the build task and the host configuration object
   * NOTE: This should be a no-op unless an algorithm is provided in a subclass
   */
  sideEffect(_input, _styles, _parent) {
  }
};
var StyleUtils = class {
  constructor(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
    this._serverStylesheet = _serverStylesheet;
    this._serverModuleLoaded = _serverModuleLoaded;
    this._platformId = _platformId;
    this.layoutConfig = layoutConfig;
  }
  /**
   * Applies styles given via string pair or object map to the directive element
   */
  applyStyleToElement(element, style, value = null) {
    let styles = {};
    if (typeof style === "string") {
      styles[style] = value;
      style = styles;
    }
    styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
    this._applyMultiValueStyleToElement(styles, element);
  }
  /**
   * Applies styles given via string pair or object map to the directive's element
   */
  applyStyleToElements(style, elements = []) {
    const styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
    elements.forEach((el) => {
      this._applyMultiValueStyleToElement(styles, el);
    });
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction)
   *
   * Check inline style first then check computed (stylesheet) style
   */
  getFlowDirection(target) {
    const query = "flex-direction";
    let value = this.lookupStyle(target, query);
    const hasInlineValue = this.lookupInlineStyle(target, query) || isPlatformServer(this._platformId) && this._serverModuleLoaded ? value : "";
    return [value || "row", hasInlineValue];
  }
  hasWrap(target) {
    const query = "flex-wrap";
    return this.lookupStyle(target, query) === "wrap";
  }
  /**
   * Find the DOM element's raw attribute value (if any)
   */
  lookupAttributeValue(element, attribute) {
    return element.getAttribute(attribute) ?? "";
  }
  /**
   * Find the DOM element's inline style value (if any)
   */
  lookupInlineStyle(element, styleName) {
    return isPlatformBrowser(this._platformId) ? element.style.getPropertyValue(styleName) : getServerStyle(element, styleName);
  }
  /**
   * Determine the inline or inherited CSS style
   * NOTE: platform-server has no implementation for getComputedStyle
   */
  lookupStyle(element, styleName, inlineOnly = false) {
    let value = "";
    if (element) {
      let immediateValue = value = this.lookupInlineStyle(element, styleName);
      if (!immediateValue) {
        if (isPlatformBrowser(this._platformId)) {
          if (!inlineOnly) {
            value = getComputedStyle(element).getPropertyValue(styleName);
          }
        } else {
          if (this._serverModuleLoaded) {
            value = this._serverStylesheet.getStyleForElement(element, styleName);
          }
        }
      }
    }
    return value ? value.trim() : "";
  }
  /**
   * Applies the styles to the element. The styles object map may contain an array of values
   * Each value will be added as element style
   * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
   */
  _applyMultiValueStyleToElement(styles, element) {
    Object.keys(styles).sort().forEach((key) => {
      const el = styles[key];
      const values = Array.isArray(el) ? el : [el];
      values.sort();
      for (let value of values) {
        value = value ? value + "" : "";
        if (isPlatformBrowser(this._platformId) || !this._serverModuleLoaded) {
          isPlatformBrowser(this._platformId) ? element.style.setProperty(key, value) : setServerStyle(element, key, value);
        } else {
          this._serverStylesheet.addStyleToElement(element, key, value);
        }
      }
    });
  }
};
StyleUtils.ɵfac = function StyleUtils_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || StyleUtils)(ɵɵinject(StylesheetMap), ɵɵinject(SERVER_TOKEN), ɵɵinject(PLATFORM_ID), ɵɵinject(LAYOUT_CONFIG));
};
StyleUtils.ɵprov = ɵɵdefineInjectable({
  token: StyleUtils,
  factory: StyleUtils.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleUtils, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: StylesheetMap
    }, {
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
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LAYOUT_CONFIG]
      }]
    }];
  }, null);
})();
function getServerStyle(element, styleName) {
  const styleMap = readStyleAttribute(element);
  return styleMap[styleName] ?? "";
}
function setServerStyle(element, styleName, styleValue) {
  styleName = styleName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const styleMap = readStyleAttribute(element);
  styleMap[styleName] = styleValue ?? "";
  writeStyleAttribute(element, styleMap);
}
function writeStyleAttribute(element, styleMap) {
  let styleAttrValue = "";
  for (const key in styleMap) {
    const newValue = styleMap[key];
    if (newValue) {
      styleAttrValue += `${key}:${styleMap[key]};`;
    }
  }
  element.setAttribute("style", styleAttrValue);
}
function readStyleAttribute(element) {
  const styleMap = {};
  const styleAttribute = element.getAttribute("style");
  if (styleAttribute) {
    const styleList = styleAttribute.split(/;+/g);
    for (let i = 0; i < styleList.length; i++) {
      const style = styleList[i].trim();
      if (style.length > 0) {
        const colonIndex = style.indexOf(":");
        if (colonIndex === -1) {
          throw new Error(`Invalid CSS style: ${style}`);
        }
        const name = style.substr(0, colonIndex).trim();
        styleMap[name] = style.substr(colonIndex + 1).trim();
      }
    }
  }
  return styleMap;
}
function sortDescendingPriority(a, b) {
  const priorityA = a ? a.priority || 0 : 0;
  const priorityB = b ? b.priority || 0 : 0;
  return priorityB - priorityA;
}
function sortAscendingPriority(a, b) {
  const pA = a.priority || 0;
  const pB = b.priority || 0;
  return pA - pB;
}
var MatchMedia = class {
  constructor(_zone, _platformId, _document) {
    this._zone = _zone;
    this._platformId = _platformId;
    this._document = _document;
    this.source = new BehaviorSubject(new MediaChange(true));
    this.registry = /* @__PURE__ */ new Map();
    this.pendingRemoveListenerFns = [];
    this._observable$ = this.source.asObservable();
  }
  /**
   * Publish list of all current activations
   */
  get activations() {
    const results = [];
    this.registry.forEach((mql, key) => {
      if (mql.matches) {
        results.push(key);
      }
    });
    return results;
  }
  /**
   * For the specified mediaQuery?
   */
  isActive(mediaQuery) {
    const mql = this.registry.get(mediaQuery);
    return mql?.matches ?? this.registerQuery(mediaQuery).some((m) => m.matches);
  }
  /**
   * External observers can watch for all (or a specific) mql changes.
   * Typically used by the MediaQueryAdaptor; optionally available to components
   * who wish to use the MediaMonitor as mediaMonitor$ observable service.
   *
   * Use deferred registration process to register breakpoints only on subscription
   * This logic also enforces logic to register all mediaQueries BEFORE notify
   * subscribers of notifications.
   */
  observe(mqList, filterOthers = false) {
    if (mqList && mqList.length) {
      const matchMedia$ = this._observable$.pipe(filter((change) => !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1));
      const registration$ = new Observable((observer) => {
        const matches = this.registerQuery(mqList);
        if (matches.length) {
          const lastChange = matches.pop();
          matches.forEach((e) => {
            observer.next(e);
          });
          this.source.next(lastChange);
        }
        observer.complete();
      });
      return merge(registration$, matchMedia$);
    }
    return this._observable$;
  }
  /**
   * Based on the BreakPointRegistry provider, register internal listeners for each unique
   * mediaQuery. Each listener emits specific MediaChange data to observers
   */
  registerQuery(mediaQuery) {
    const list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
    const matches = [];
    buildQueryCss(list, this._document);
    list.forEach((query) => {
      const onMQLEvent = (e) => {
        this._zone.run(() => this.source.next(new MediaChange(e.matches, query)));
      };
      let mql = this.registry.get(query);
      if (!mql) {
        mql = this.buildMQL(query);
        mql.addListener(onMQLEvent);
        this.pendingRemoveListenerFns.push(() => mql.removeListener(onMQLEvent));
        this.registry.set(query, mql);
      }
      if (mql.matches) {
        matches.push(new MediaChange(true, query));
      }
    });
    return matches;
  }
  ngOnDestroy() {
    let fn;
    while (fn = this.pendingRemoveListenerFns.pop()) {
      fn();
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */
  buildMQL(query) {
    return constructMql(query, isPlatformBrowser(this._platformId));
  }
};
MatchMedia.ɵfac = function MatchMedia_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatchMedia)(ɵɵinject(NgZone), ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT));
};
MatchMedia.ɵprov = ɵɵdefineInjectable({
  token: MatchMedia,
  factory: MatchMedia.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchMedia, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var ALL_STYLES = {};
function buildQueryCss(mediaQueries, _document) {
  const list = mediaQueries.filter((it) => !ALL_STYLES[it]);
  if (list.length > 0) {
    const query = list.join(", ");
    try {
      const styleEl = _document.createElement("style");
      styleEl.setAttribute("type", "text/css");
      if (!styleEl.styleSheet) {
        const cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
        styleEl.appendChild(_document.createTextNode(cssText));
      }
      _document.head.appendChild(styleEl);
      list.forEach((mq) => ALL_STYLES[mq] = styleEl);
    } catch (e) {
      console.error(e);
    }
  }
}
function buildMockMql(query) {
  const et = new EventTarget();
  et.matches = query === "all" || query === "";
  et.media = query;
  et.addListener = () => {
  };
  et.removeListener = () => {
  };
  et.addEventListener = () => {
  };
  et.dispatchEvent = () => false;
  et.onchange = null;
  return et;
}
function constructMql(query, isBrowser) {
  const canListen = isBrowser && !!window.matchMedia("all").addListener;
  return canListen ? window.matchMedia(query) : buildMockMql(query);
}
var DEFAULT_BREAKPOINTS = [{
  alias: "xs",
  mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)",
  priority: 1e3
}, {
  alias: "sm",
  mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)",
  priority: 900
}, {
  alias: "md",
  mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)",
  priority: 800
}, {
  alias: "lg",
  mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)",
  priority: 700
}, {
  alias: "xl",
  mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)",
  priority: 600
}, {
  alias: "lt-sm",
  overlapping: true,
  mediaQuery: "screen and (max-width: 599.98px)",
  priority: 950
}, {
  alias: "lt-md",
  overlapping: true,
  mediaQuery: "screen and (max-width: 959.98px)",
  priority: 850
}, {
  alias: "lt-lg",
  overlapping: true,
  mediaQuery: "screen and (max-width: 1279.98px)",
  priority: 750
}, {
  alias: "lt-xl",
  overlapping: true,
  priority: 650,
  mediaQuery: "screen and (max-width: 1919.98px)"
}, {
  alias: "gt-xs",
  overlapping: true,
  mediaQuery: "screen and (min-width: 600px)",
  priority: -950
}, {
  alias: "gt-sm",
  overlapping: true,
  mediaQuery: "screen and (min-width: 960px)",
  priority: -850
}, {
  alias: "gt-md",
  overlapping: true,
  mediaQuery: "screen and (min-width: 1280px)",
  priority: -750
}, {
  alias: "gt-lg",
  overlapping: true,
  mediaQuery: "screen and (min-width: 1920px)",
  priority: -650
}];
var HANDSET_PORTRAIT = "(orientation: portrait) and (max-width: 599.98px)";
var HANDSET_LANDSCAPE = "(orientation: landscape) and (max-width: 959.98px)";
var TABLET_PORTRAIT = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)";
var TABLET_LANDSCAPE = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)";
var WEB_PORTRAIT = "(orientation: portrait) and (min-width: 840px)";
var WEB_LANDSCAPE = "(orientation: landscape) and (min-width: 1280px)";
var ScreenTypes = {
  "HANDSET": `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
  "TABLET": `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
  "WEB": `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
  "HANDSET_PORTRAIT": `${HANDSET_PORTRAIT}`,
  "TABLET_PORTRAIT": `${TABLET_PORTRAIT} `,
  "WEB_PORTRAIT": `${WEB_PORTRAIT}`,
  "HANDSET_LANDSCAPE": `${HANDSET_LANDSCAPE}`,
  "TABLET_LANDSCAPE": `${TABLET_LANDSCAPE}`,
  "WEB_LANDSCAPE": `${WEB_LANDSCAPE}`
};
var ORIENTATION_BREAKPOINTS = [{
  "alias": "handset",
  priority: 2e3,
  "mediaQuery": ScreenTypes.HANDSET
}, {
  "alias": "handset.landscape",
  priority: 2e3,
  "mediaQuery": ScreenTypes.HANDSET_LANDSCAPE
}, {
  "alias": "handset.portrait",
  priority: 2e3,
  "mediaQuery": ScreenTypes.HANDSET_PORTRAIT
}, {
  "alias": "tablet",
  priority: 2100,
  "mediaQuery": ScreenTypes.TABLET
}, {
  "alias": "tablet.landscape",
  priority: 2100,
  "mediaQuery": ScreenTypes.TABLET_LANDSCAPE
}, {
  "alias": "tablet.portrait",
  priority: 2100,
  "mediaQuery": ScreenTypes.TABLET_PORTRAIT
}, {
  "alias": "web",
  priority: 2200,
  "mediaQuery": ScreenTypes.WEB,
  overlapping: true
}, {
  "alias": "web.landscape",
  priority: 2200,
  "mediaQuery": ScreenTypes.WEB_LANDSCAPE,
  overlapping: true
}, {
  "alias": "web.portrait",
  priority: 2200,
  "mediaQuery": ScreenTypes.WEB_PORTRAIT,
  overlapping: true
}];
var ALIAS_DELIMITERS = /(\.|-|_)/g;
function firstUpperCase(part) {
  let first = part.length > 0 ? part.charAt(0) : "";
  let remainder = part.length > 1 ? part.slice(1) : "";
  return first.toUpperCase() + remainder;
}
function camelCase(name) {
  return name.replace(ALIAS_DELIMITERS, "|").split("|").map(firstUpperCase).join("");
}
function validateSuffixes(list) {
  list.forEach((bp) => {
    if (!bp.suffix) {
      bp.suffix = camelCase(bp.alias);
      bp.overlapping = !!bp.overlapping;
    }
  });
  return list;
}
function mergeByAlias(defaults, custom = []) {
  const dict = {};
  defaults.forEach((bp) => {
    dict[bp.alias] = bp;
  });
  custom.forEach((bp) => {
    if (dict[bp.alias]) {
      extendObject(dict[bp.alias], bp);
    } else {
      dict[bp.alias] = bp;
    }
  });
  return validateSuffixes(Object.keys(dict).map((k) => dict[k]));
}
var BREAKPOINTS = new InjectionToken("Token (@angular/flex-layout) Breakpoints", {
  providedIn: "root",
  factory: () => {
    const breakpoints = inject(BREAKPOINT);
    const layoutConfig = inject(LAYOUT_CONFIG);
    const bpFlattenArray = [].concat.apply([], (breakpoints || []).map((v) => Array.isArray(v) ? v : [v]));
    const builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
    return mergeByAlias(builtIns, bpFlattenArray);
  }
});
var BreakPointRegistry = class {
  constructor(list) {
    this.findByMap = /* @__PURE__ */ new Map();
    this.items = [...list].sort(sortAscendingPriority);
  }
  /**
   * Search breakpoints by alias (e.g. gt-xs)
   */
  findByAlias(alias) {
    return !alias ? null : this.findWithPredicate(alias, (bp) => bp.alias === alias);
  }
  findByQuery(query) {
    return this.findWithPredicate(query, (bp) => bp.mediaQuery === query);
  }
  /**
   * Get all the breakpoints whose ranges could overlapping `normal` ranges;
   * e.g. gt-sm overlaps md, lg, and xl
   */
  get overlappings() {
    return this.items.filter((it) => it.overlapping);
  }
  /**
   * Get list of all registered (non-empty) breakpoint aliases
   */
  get aliases() {
    return this.items.map((it) => it.alias);
  }
  /**
   * Aliases are mapped to properties using suffixes
   * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
   * for property layoutGtSM.
   */
  get suffixes() {
    return this.items.map((it) => it?.suffix ?? "");
  }
  /**
   * Memoized lookup using custom predicate function
   */
  findWithPredicate(key, searchFn) {
    let response = this.findByMap.get(key);
    if (!response) {
      response = this.items.find(searchFn) ?? null;
      this.findByMap.set(key, response);
    }
    return response ?? null;
  }
};
BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BreakPointRegistry)(ɵɵinject(BREAKPOINTS));
};
BreakPointRegistry.ɵprov = ɵɵdefineInjectable({
  token: BreakPointRegistry,
  factory: BreakPointRegistry.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakPointRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [BREAKPOINTS]
      }]
    }];
  }, null);
})();
var PRINT = "print";
var BREAKPOINT_PRINT = {
  alias: PRINT,
  mediaQuery: PRINT,
  priority: 1e3
};
var PrintHook = class {
  constructor(breakpoints, layoutConfig, _document) {
    this.breakpoints = breakpoints;
    this.layoutConfig = layoutConfig;
    this._document = _document;
    this.registeredBeforeAfterPrintHooks = false;
    this.isPrintingBeforeAfterEvent = false;
    this.beforePrintEventListeners = [];
    this.afterPrintEventListeners = [];
    this.formerActivations = null;
    this.isPrinting = false;
    this.queue = new PrintQueue();
    this.deactivations = [];
  }
  /** Add 'print' mediaQuery: to listen for matchMedia activations */
  withPrintQuery(queries) {
    return [...queries, PRINT];
  }
  /** Is the MediaChange event for any 'print' @media */
  isPrintEvent(e) {
    return e.mediaQuery.startsWith(PRINT);
  }
  /** What is the desired mqAlias to use while printing? */
  get printAlias() {
    return [...this.layoutConfig.printWithBreakpoints ?? []];
  }
  /** Lookup breakpoints associated with print aliases. */
  get printBreakPoints() {
    return this.printAlias.map((alias) => this.breakpoints.findByAlias(alias)).filter((bp) => bp !== null);
  }
  /** Lookup breakpoint associated with mediaQuery */
  getEventBreakpoints({
    mediaQuery
  }) {
    const bp = this.breakpoints.findByQuery(mediaQuery);
    const list = bp ? [...this.printBreakPoints, bp] : this.printBreakPoints;
    return list.sort(sortDescendingPriority);
  }
  /** Update event with printAlias mediaQuery information */
  updateEvent(event) {
    let bp = this.breakpoints.findByQuery(event.mediaQuery);
    if (this.isPrintEvent(event)) {
      bp = this.getEventBreakpoints(event)[0];
      event.mediaQuery = bp?.mediaQuery ?? "";
    }
    return mergeAlias(event, bp);
  }
  // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
  // trigger print styles synchronously and apply proper layout styles.
  // It is a noop if the hooks have already been registered or if the document's
  // `defaultView` is not available.
  registerBeforeAfterPrintHooks(target) {
    if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
      return;
    }
    this.registeredBeforeAfterPrintHooks = true;
    const beforePrintListener = () => {
      if (!this.isPrinting) {
        this.isPrintingBeforeAfterEvent = true;
        this.startPrinting(target, this.getEventBreakpoints(new MediaChange(true, PRINT)));
        target.updateStyles();
      }
    };
    const afterPrintListener = () => {
      this.isPrintingBeforeAfterEvent = false;
      if (this.isPrinting) {
        this.stopPrinting(target);
        target.updateStyles();
      }
    };
    this._document.defaultView.addEventListener("beforeprint", beforePrintListener);
    this._document.defaultView.addEventListener("afterprint", afterPrintListener);
    this.beforePrintEventListeners.push(beforePrintListener);
    this.afterPrintEventListeners.push(afterPrintListener);
  }
  /**
   * Prepare RxJS tap operator with partial application
   * @return pipeable tap predicate
   */
  interceptEvents(target) {
    return (event) => {
      if (this.isPrintEvent(event)) {
        if (event.matches && !this.isPrinting) {
          this.startPrinting(target, this.getEventBreakpoints(event));
          target.updateStyles();
        } else if (!event.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent) {
          this.stopPrinting(target);
          target.updateStyles();
        }
        return;
      }
      this.collectActivations(target, event);
    };
  }
  /** Stop mediaChange event propagation in event streams */
  blockPropagation() {
    return (event) => {
      return !(this.isPrinting || this.isPrintEvent(event));
    };
  }
  /**
   * Save current activateBreakpoints (for later restore)
   * and substitute only the printAlias breakpoint
   */
  startPrinting(target, bpList) {
    this.isPrinting = true;
    this.formerActivations = target.activatedBreakpoints;
    target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
  }
  /** For any print de-activations, reset the entire print queue */
  stopPrinting(target) {
    target.activatedBreakpoints = this.deactivations;
    this.deactivations = [];
    this.formerActivations = null;
    this.queue.clear();
    this.isPrinting = false;
  }
  /**
   * To restore pre-Print Activations, we must capture the proper
   * list of breakpoint activations BEFORE print starts. OnBeforePrint()
   * is supported; so 'print' mediaQuery activations are used as a fallback
   * in browsers without `beforeprint` support.
   *
   * >  But activated breakpoints are deactivated BEFORE 'print' activation.
   *
   * Let's capture all de-activations using the following logic:
   *
   *  When not printing:
   *    - clear cache when activating non-print breakpoint
   *    - update cache (and sort) when deactivating
   *
   *  When printing:
   *    - sort and save when starting print
   *    - restore as activatedTargets and clear when stop printing
   */
  collectActivations(target, event) {
    if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
      if (!this.isPrintingBeforeAfterEvent) {
        this.deactivations = [];
        return;
      }
      if (!event.matches) {
        const bp = this.breakpoints.findByQuery(event.mediaQuery);
        if (bp) {
          const hasFormerBp = this.formerActivations && this.formerActivations.includes(bp);
          const wasActivated = !this.formerActivations && target.activatedBreakpoints.includes(bp);
          const shouldDeactivate = hasFormerBp || wasActivated;
          if (shouldDeactivate) {
            this.deactivations.push(bp);
            this.deactivations.sort(sortDescendingPriority);
          }
        }
      }
    }
  }
  /** Teardown logic for the service. */
  ngOnDestroy() {
    if (this._document.defaultView) {
      this.beforePrintEventListeners.forEach((l) => this._document.defaultView.removeEventListener("beforeprint", l));
      this.afterPrintEventListeners.forEach((l) => this._document.defaultView.removeEventListener("afterprint", l));
    }
  }
};
PrintHook.ɵfac = function PrintHook_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PrintHook)(ɵɵinject(BreakPointRegistry), ɵɵinject(LAYOUT_CONFIG), ɵɵinject(DOCUMENT));
};
PrintHook.ɵprov = ɵɵdefineInjectable({
  token: PrintHook,
  factory: PrintHook.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintHook, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: BreakPointRegistry
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var PrintQueue = class {
  constructor() {
    this.printBreakpoints = [];
  }
  addPrintBreakpoints(bpList) {
    bpList.push(BREAKPOINT_PRINT);
    bpList.sort(sortDescendingPriority);
    bpList.forEach((bp) => this.addBreakpoint(bp));
    return this.printBreakpoints;
  }
  /** Add Print breakpoint to queue */
  addBreakpoint(bp) {
    if (!!bp) {
      const bpInList = this.printBreakpoints.find((it) => it.mediaQuery === bp.mediaQuery);
      if (bpInList === void 0) {
        this.printBreakpoints = isPrintBreakPoint(bp) ? [bp, ...this.printBreakpoints] : [...this.printBreakpoints, bp];
      }
    }
  }
  /** Restore original activated breakpoints and clear internal caches */
  clear() {
    this.printBreakpoints = [];
  }
};
function isPrintBreakPoint(bp) {
  return bp?.mediaQuery.startsWith(PRINT) ?? false;
}
var MediaMarshaller = class {
  constructor(matchMedia, breakpoints, hook) {
    this.matchMedia = matchMedia;
    this.breakpoints = breakpoints;
    this.hook = hook;
    this._useFallbacks = true;
    this._activatedBreakpoints = [];
    this.elementMap = /* @__PURE__ */ new Map();
    this.elementKeyMap = /* @__PURE__ */ new WeakMap();
    this.watcherMap = /* @__PURE__ */ new WeakMap();
    this.updateMap = /* @__PURE__ */ new WeakMap();
    this.clearMap = /* @__PURE__ */ new WeakMap();
    this.subject = new Subject();
    this.observeActivations();
  }
  get activatedAlias() {
    return this.activatedBreakpoints[0]?.alias ?? "";
  }
  set activatedBreakpoints(bps) {
    this._activatedBreakpoints = [...bps];
  }
  get activatedBreakpoints() {
    return [...this._activatedBreakpoints];
  }
  set useFallbacks(value) {
    this._useFallbacks = value;
  }
  /**
   * Update styles on breakpoint activates or deactivates
   * @param mc
   */
  onMediaChange(mc) {
    const bp = this.findByQuery(mc.mediaQuery);
    if (bp) {
      mc = mergeAlias(mc, bp);
      const bpIndex = this.activatedBreakpoints.indexOf(bp);
      if (mc.matches && bpIndex === -1) {
        this._activatedBreakpoints.push(bp);
        this._activatedBreakpoints.sort(sortDescendingPriority);
        this.updateStyles();
      } else if (!mc.matches && bpIndex !== -1) {
        this._activatedBreakpoints.splice(bpIndex, 1);
        this._activatedBreakpoints.sort(sortDescendingPriority);
        this.updateStyles();
      }
    }
  }
  /**
   * initialize the marshaller with necessary elements for delegation on an element
   * @param element
   * @param key
   * @param updateFn optional callback so that custom bp directives don't have to re-provide this
   * @param clearFn optional callback so that custom bp directives don't have to re-provide this
   * @param extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
   */
  init(element, key, updateFn, clearFn, extraTriggers = []) {
    initBuilderMap(this.updateMap, element, key, updateFn);
    initBuilderMap(this.clearMap, element, key, clearFn);
    this.buildElementKeyMap(element, key);
    this.watchExtraTriggers(element, key, extraTriggers);
  }
  /**
   * get the value for an element and key and optionally a given breakpoint
   * @param element
   * @param key
   * @param bp
   */
  getValue(element, key, bp) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const values = bp !== void 0 ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);
      if (values) {
        return values.get(key);
      }
    }
    return void 0;
  }
  /**
   * whether the element has values for a given key
   * @param element
   * @param key
   */
  hasValue(element, key) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const values = this.getActivatedValues(bpMap, key);
      if (values) {
        return values.get(key) !== void 0 || false;
      }
    }
    return false;
  }
  /**
   * Set the value for an input on a directive
   * @param element the element in question
   * @param key the type of the directive (e.g. flex, layout-gap, etc)
   * @param bp the breakpoint suffix (empty string = default)
   * @param val the value for the breakpoint
   */
  setValue(element, key, val, bp) {
    let bpMap = this.elementMap.get(element);
    if (!bpMap) {
      bpMap = (/* @__PURE__ */ new Map()).set(bp, (/* @__PURE__ */ new Map()).set(key, val));
      this.elementMap.set(element, bpMap);
    } else {
      const values = (bpMap.get(bp) ?? /* @__PURE__ */ new Map()).set(key, val);
      bpMap.set(bp, values);
      this.elementMap.set(element, bpMap);
    }
    const value = this.getValue(element, key);
    if (value !== void 0) {
      this.updateElement(element, key, value);
    }
  }
  /** Track element value changes for a specific key */
  trackValue(element, key) {
    return this.subject.asObservable().pipe(filter((v) => v.element === element && v.key === key));
  }
  /** update all styles for all elements on the current breakpoint */
  updateStyles() {
    this.elementMap.forEach((bpMap, el) => {
      const keyMap = new Set(this.elementKeyMap.get(el));
      let valueMap = this.getActivatedValues(bpMap);
      if (valueMap) {
        valueMap.forEach((v, k) => {
          this.updateElement(el, k, v);
          keyMap.delete(k);
        });
      }
      keyMap.forEach((k) => {
        valueMap = this.getActivatedValues(bpMap, k);
        if (valueMap) {
          const value = valueMap.get(k);
          this.updateElement(el, k, value);
        } else {
          this.clearElement(el, k);
        }
      });
    });
  }
  /**
   * clear the styles for a given element
   * @param element
   * @param key
   */
  clearElement(element, key) {
    const builders = this.clearMap.get(element);
    if (builders) {
      const clearFn = builders.get(key);
      if (!!clearFn) {
        clearFn();
        this.subject.next({
          element,
          key,
          value: ""
        });
      }
    }
  }
  /**
   * update a given element with the activated values for a given key
   * @param element
   * @param key
   * @param value
   */
  updateElement(element, key, value) {
    const builders = this.updateMap.get(element);
    if (builders) {
      const updateFn = builders.get(key);
      if (!!updateFn) {
        updateFn(value);
        this.subject.next({
          element,
          key,
          value
        });
      }
    }
  }
  /**
   * release all references to a given element
   * @param element
   */
  releaseElement(element) {
    const watcherMap = this.watcherMap.get(element);
    if (watcherMap) {
      watcherMap.forEach((s) => s.unsubscribe());
      this.watcherMap.delete(element);
    }
    const elementMap = this.elementMap.get(element);
    if (elementMap) {
      elementMap.forEach((_, s) => elementMap.delete(s));
      this.elementMap.delete(element);
    }
  }
  /**
   * trigger an update for a given element and key (e.g. layout)
   * @param element
   * @param key
   */
  triggerUpdate(element, key) {
    const bpMap = this.elementMap.get(element);
    if (bpMap) {
      const valueMap = this.getActivatedValues(bpMap, key);
      if (valueMap) {
        if (key) {
          this.updateElement(element, key, valueMap.get(key));
        } else {
          valueMap.forEach((v, k) => this.updateElement(element, k, v));
        }
      }
    }
  }
  /** Cross-reference for HTMLElement with directive key */
  buildElementKeyMap(element, key) {
    let keyMap = this.elementKeyMap.get(element);
    if (!keyMap) {
      keyMap = /* @__PURE__ */ new Set();
      this.elementKeyMap.set(element, keyMap);
    }
    keyMap.add(key);
  }
  /**
   * Other triggers that should force style updates:
   * - directionality
   * - layout changes
   * - mutationobserver updates
   */
  watchExtraTriggers(element, key, triggers) {
    if (triggers && triggers.length) {
      let watchers = this.watcherMap.get(element);
      if (!watchers) {
        watchers = /* @__PURE__ */ new Map();
        this.watcherMap.set(element, watchers);
      }
      const subscription = watchers.get(key);
      if (!subscription) {
        const newSubscription = merge(...triggers).subscribe(() => {
          const currentValue = this.getValue(element, key);
          this.updateElement(element, key, currentValue);
        });
        watchers.set(key, newSubscription);
      }
    }
  }
  /** Breakpoint locator by mediaQuery */
  findByQuery(query) {
    return this.breakpoints.findByQuery(query);
  }
  /**
   * get the fallback breakpoint for a given element, starting with the current breakpoint
   * @param bpMap
   * @param key
   */
  getActivatedValues(bpMap, key) {
    for (let i = 0; i < this.activatedBreakpoints.length; i++) {
      const activatedBp = this.activatedBreakpoints[i];
      const valueMap = bpMap.get(activatedBp.alias);
      if (valueMap) {
        if (key === void 0 || valueMap.has(key) && valueMap.get(key) != null) {
          return valueMap;
        }
      }
    }
    if (!this._useFallbacks) {
      return void 0;
    }
    const lastHope = bpMap.get("");
    return key === void 0 || lastHope && lastHope.has(key) ? lastHope : void 0;
  }
  /**
   * Watch for mediaQuery breakpoint activations
   */
  observeActivations() {
    const queries = this.breakpoints.items.map((bp) => bp.mediaQuery);
    this.hook.registerBeforeAfterPrintHooks(this);
    this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(tap(this.hook.interceptEvents(this)), filter(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
  }
};
MediaMarshaller.ɵfac = function MediaMarshaller_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MediaMarshaller)(ɵɵinject(MatchMedia), ɵɵinject(BreakPointRegistry), ɵɵinject(PrintHook));
};
MediaMarshaller.ɵprov = ɵɵdefineInjectable({
  token: MediaMarshaller,
  factory: MediaMarshaller.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMarshaller, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: MatchMedia
    }, {
      type: BreakPointRegistry
    }, {
      type: PrintHook
    }];
  }, null);
})();
function initBuilderMap(map2, element, key, input) {
  if (input !== void 0) {
    const oldMap = map2.get(element) ?? /* @__PURE__ */ new Map();
    oldMap.set(key, input);
    map2.set(element, oldMap);
  }
}
var BaseDirective2 = class {
  constructor(elementRef, styleBuilder, styler, marshal) {
    this.elementRef = elementRef;
    this.styleBuilder = styleBuilder;
    this.styler = styler;
    this.marshal = marshal;
    this.DIRECTIVE_KEY = "";
    this.inputs = [];
    this.mru = {};
    this.destroySubject = new Subject();
    this.styleCache = /* @__PURE__ */ new Map();
  }
  /** Access to host element's parent DOM node */
  get parentElement() {
    return this.elementRef.nativeElement.parentElement;
  }
  /** Access to the HTMLElement for the directive */
  get nativeElement() {
    return this.elementRef.nativeElement;
  }
  /** Access to the activated value for the directive */
  get activatedValue() {
    return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
  }
  set activatedValue(value) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
  }
  /** For @Input changes */
  ngOnChanges(changes) {
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        const bp = key.split(".").slice(1).join(".");
        const val = changes[key].currentValue;
        this.setValue(val, bp);
      }
    });
  }
  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
    this.marshal.releaseElement(this.nativeElement);
  }
  /** Register with central marshaller service */
  init(extraTriggers = []) {
    this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
  }
  /** Add styles to the element using predefined style builder */
  addStyles(input, parent) {
    const builder = this.styleBuilder;
    const useCache = builder.shouldCache;
    let genStyles = this.styleCache.get(input);
    if (!genStyles || !useCache) {
      genStyles = builder.buildStyles(input, parent);
      if (useCache) {
        this.styleCache.set(input, genStyles);
      }
    }
    this.mru = __spreadValues({}, genStyles);
    this.applyStyleToElement(genStyles);
    builder.sideEffect(input, genStyles, parent);
  }
  /** Remove generated styles from an element using predefined style builder */
  clearStyles() {
    Object.keys(this.mru).forEach((k) => {
      this.mru[k] = "";
    });
    this.applyStyleToElement(this.mru);
    this.mru = {};
    this.currentValue = void 0;
  }
  /** Force trigger style updates on DOM element */
  triggerUpdate() {
    this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
  }
  /**
   * Determine the DOM element's Flexbox flow (flex-direction).
   *
   * Check inline style first then check computed (stylesheet) style.
   * And optionally add the flow value to element's inline style.
   */
  getFlexFlowDirection(target, addIfMissing = false) {
    if (target) {
      const [value, hasInlineValue] = this.styler.getFlowDirection(target);
      if (!hasInlineValue && addIfMissing) {
        const style = buildLayoutCSS(value);
        const elements = [target];
        this.styler.applyStyleToElements(style, elements);
      }
      return value.trim();
    }
    return "row";
  }
  hasWrap(target) {
    return this.styler.hasWrap(target);
  }
  /** Applies styles given via string pair or object map to the directive element */
  applyStyleToElement(style, value, element = this.nativeElement) {
    this.styler.applyStyleToElement(element, style, value);
  }
  setValue(val, bp) {
    this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
  }
  updateWithValue(input) {
    if (this.currentValue !== input) {
      this.addStyles(input);
      this.currentValue = input;
    }
  }
};
BaseDirective2.ɵfac = function BaseDirective2_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BaseDirective2)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller));
};
BaseDirective2.ɵdir = ɵɵdefineDirective({
  type: BaseDirective2,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseDirective2, [{
    type: Directive
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: StyleBuilder
    }, {
      type: StyleUtils
    }, {
      type: MediaMarshaller
    }];
  }, null);
})();
var MockMatchMedia = class extends MatchMedia {
  constructor(_zone, _platformId, _document, _breakpoints) {
    super(_zone, _platformId, _document);
    this._breakpoints = _breakpoints;
    this.autoRegisterQueries = true;
    this.useOverlaps = false;
  }
  /** Easy method to clear all listeners for all mediaQueries */
  clearAll() {
    this.registry.forEach((mql) => {
      mql.destroy();
    });
    this.registry.clear();
    this.useOverlaps = false;
  }
  /** Feature to support manual, simulated activation of a mediaQuery. */
  activate(mediaQuery, useOverlaps = this.useOverlaps) {
    mediaQuery = this._validateQuery(mediaQuery);
    if (useOverlaps || !this.isActive(mediaQuery)) {
      this._deactivateAll();
      this._registerMediaQuery(mediaQuery);
      this._activateWithOverlaps(mediaQuery, useOverlaps);
    }
    return this.hasActivated;
  }
  /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
  _validateQuery(queryOrAlias) {
    const bp = this._breakpoints.findByAlias(queryOrAlias);
    return bp?.mediaQuery ?? queryOrAlias;
  }
  /**
   * Manually onMediaChange any overlapping mediaQueries to simulate
   * similar functionality in the window.matchMedia()
   */
  _activateWithOverlaps(mediaQuery, useOverlaps) {
    if (useOverlaps) {
      const bp = this._breakpoints.findByQuery(mediaQuery);
      const alias = bp?.alias ?? "unknown";
      switch (alias) {
        case "lg":
          this._activateByAlias(["lt-xl"]);
          break;
        case "md":
          this._activateByAlias(["lt-xl", "lt-lg"]);
          break;
        case "sm":
          this._activateByAlias(["lt-xl", "lt-lg", "lt-md"]);
          break;
        case "xs":
          this._activateByAlias(["lt-xl", "lt-lg", "lt-md", "lt-sm"]);
          break;
      }
      switch (alias) {
        case "xl":
          this._activateByAlias(["gt-lg", "gt-md", "gt-sm", "gt-xs"]);
          break;
        case "lg":
          this._activateByAlias(["gt-md", "gt-sm", "gt-xs"]);
          break;
        case "md":
          this._activateByAlias(["gt-sm", "gt-xs"]);
          break;
        case "sm":
          this._activateByAlias(["gt-xs"]);
          break;
      }
    }
    return this._activateByQuery(mediaQuery);
  }
  /**
   *
   */
  _activateByAlias(aliases) {
    const activate = (alias) => {
      const bp = this._breakpoints.findByAlias(alias);
      this._activateByQuery(bp?.mediaQuery ?? alias);
    };
    aliases.forEach(activate);
  }
  /**
   *
   */
  _activateByQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this._registerMediaQuery(mediaQuery);
    }
    const mql = this.registry.get(mediaQuery);
    if (mql && !this.isActive(mediaQuery)) {
      this.registry.set(mediaQuery, mql.activate());
    }
    return this.hasActivated;
  }
  /** Deactivate all current MQLs and reset the buffer */
  _deactivateAll() {
    this.registry.forEach((it) => {
      it.deactivate();
    });
    return this;
  }
  /** Insure the mediaQuery is registered with MatchMedia */
  _registerMediaQuery(mediaQuery) {
    if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
      this.registerQuery(mediaQuery);
    }
  }
  /**
   * Call window.matchMedia() to build a MediaQueryList; which
   * supports 0..n listeners for activation/deactivation
   */
  buildMQL(query) {
    return new MockMediaQueryList(query);
  }
  get hasActivated() {
    return this.activations.length > 0;
  }
};
MockMatchMedia.ɵfac = function MockMatchMedia_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MockMatchMedia)(ɵɵinject(NgZone), ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT), ɵɵinject(BreakPointRegistry));
};
MockMatchMedia.ɵprov = ɵɵdefineInjectable({
  token: MockMatchMedia,
  factory: MockMatchMedia.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockMatchMedia, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: BreakPointRegistry
    }];
  }, null);
})();
var MockMediaQueryList = class extends EventTarget {
  constructor(_mediaQuery) {
    super();
    this._mediaQuery = _mediaQuery;
    this._isActive = false;
    this._listeners = [];
    this.onchange = null;
  }
  get matches() {
    return this._isActive;
  }
  get media() {
    return this._mediaQuery;
  }
  /**
   * Destroy the current list by deactivating the
   * listeners and clearing the internal list
   */
  destroy() {
    this.deactivate();
    this._listeners = [];
  }
  /** Notify all listeners that 'matches === TRUE' */
  activate() {
    if (!this._isActive) {
      this._isActive = true;
      this._listeners.forEach((callback) => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }
    return this;
  }
  /** Notify all listeners that 'matches === false' */
  deactivate() {
    if (this._isActive) {
      this._isActive = false;
      this._listeners.forEach((callback) => {
        const cb = callback;
        cb.call(this, {
          matches: this.matches,
          media: this.media
        });
      });
    }
    return this;
  }
  /** Add a listener to our internal list to activate later */
  addListener(listener) {
    if (this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener);
    }
    if (this._isActive) {
      const cb = listener;
      cb.call(this, {
        matches: this.matches,
        media: this.media
      });
    }
  }
  /** Don't need to remove listeners in the testing environment */
  removeListener(_) {
  }
  dispatchEvent(_) {
    return false;
  }
};
var MockMatchMediaProvider = {
  provide: MatchMedia,
  useClass: MockMatchMedia
};
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var MediaObserver = class {
  constructor(breakpoints, matchMedia, hook) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.hook = hook;
    this.filterOverlaps = false;
    this.destroyed$ = new Subject();
    this._media$ = this.watchActivations();
  }
  /**
   * Completes the active subject, signalling to all complete for all
   * MediaObserver subscribers
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  // ************************************************
  // Public Methods
  // ************************************************
  /**
   * Observe changes to current activation 'list'
   */
  asObservable() {
    return this._media$;
  }
  /**
   * Allow programmatic query to determine if one or more media query/alias match
   * the current viewport size.
   * @param value One or more media queries (or aliases) to check.
   * @returns Whether any of the media queries match.
   */
  isActive(value) {
    const aliases = splitQueries(coerceArray(value));
    return aliases.some((alias) => {
      const query = toMediaQuery(alias, this.breakpoints);
      return query !== null && this.matchMedia.isActive(query);
    });
  }
  // ************************************************
  // Internal Methods
  // ************************************************
  /**
   * Register all the mediaQueries registered in the BreakPointRegistry
   * This is needed so subscribers can be auto-notified of all standard, registered
   * mediaQuery activations
   */
  watchActivations() {
    const queries = this.breakpoints.items.map((bp) => bp.mediaQuery);
    return this.buildObservable(queries);
  }
  /**
   * Only pass/announce activations (not de-activations)
   *
   * Since multiple-mediaQueries can be activation in a cycle,
   * gather all current activations into a single list of changes to observers
   *
   * Inject associated (if any) alias information into the MediaChange event
   * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
   * - Exclude print activations that do not have an associated mediaQuery
   *
   * NOTE: the raw MediaChange events [from MatchMedia] do not
   *       contain important alias information; as such this info
   *       must be injected into the MediaChange
   */
  buildObservable(mqList) {
    const hasChanges = (changes) => {
      const isValidQuery = (change) => change.mediaQuery.length > 0;
      return changes.filter(isValidQuery).length > 0;
    };
    const excludeOverlaps = (changes) => {
      return !this.filterOverlaps ? changes : changes.filter((change) => {
        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return bp?.overlapping ?? true;
      });
    };
    const ignoreDuplicates = (previous, current) => {
      if (previous.length !== current.length) {
        return false;
      }
      const previousMqs = previous.map((mc) => mc.mediaQuery);
      const currentMqs = new Set(current.map((mc) => mc.mediaQuery));
      const difference = new Set(previousMqs.filter((mq) => !currentMqs.has(mq)));
      return difference.size === 0;
    };
    return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(filter((change) => change.matches), debounceTime(0, asapScheduler), switchMap((_) => of(this.findAllActivations())), map(excludeOverlaps), filter(hasChanges), distinctUntilChanged(ignoreDuplicates), takeUntil(this.destroyed$));
  }
  /**
   * Find all current activations and prepare single list of activations
   * sorted by descending priority.
   */
  findAllActivations() {
    const mergeMQAlias = (change) => {
      const bp = this.breakpoints.findByQuery(change.mediaQuery);
      return mergeAlias(change, bp);
    };
    const replaceWithPrintAlias = (change) => this.hook.isPrintEvent(change) ? this.hook.updateEvent(change) : change;
    return this.matchMedia.activations.map((query) => new MediaChange(true, query)).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
  }
};
MediaObserver.ɵfac = function MediaObserver_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MediaObserver)(ɵɵinject(BreakPointRegistry), ɵɵinject(MatchMedia), ɵɵinject(PrintHook));
};
MediaObserver.ɵprov = ɵɵdefineInjectable({
  token: MediaObserver,
  factory: MediaObserver.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: PrintHook
    }];
  }, null);
})();
function toMediaQuery(query, locator) {
  const bp = locator.findByAlias(query) ?? locator.findByQuery(query);
  return bp?.mediaQuery ?? null;
}
function splitQueries(queries) {
  return queries.flatMap((query) => query.split(",")).map((query) => query.trim());
}
var MediaTrigger = class {
  constructor(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
    this.breakpoints = breakpoints;
    this.matchMedia = matchMedia;
    this.layoutConfig = layoutConfig;
    this._platformId = _platformId;
    this._document = _document;
    this.hasCachedRegistryMatches = false;
    this.originalActivations = [];
    this.originalRegistry = /* @__PURE__ */ new Map();
  }
  /**
   * Manually activate range of breakpoints
   * @param list array of mediaQuery or alias strings
   */
  activate(list) {
    list = list.map((it) => it.trim());
    this.saveActivations();
    this.deactivateAll();
    this.setActivations(list);
    this.prepareAutoRestore();
  }
  /**
   * Restore original, 'real' breakpoints and emit events
   * to trigger stream notification
   */
  restore() {
    if (this.hasCachedRegistryMatches) {
      const extractQuery = (change) => change.mediaQuery;
      const list = this.originalActivations.map(extractQuery);
      try {
        this.deactivateAll();
        this.restoreRegistryMatches();
        this.setActivations(list);
      } finally {
        this.originalActivations = [];
        if (this.resizeSubscription) {
          this.resizeSubscription.unsubscribe();
        }
      }
    }
  }
  // ************************************************
  // Internal Methods
  // ************************************************
  /**
   * Whenever window resizes, immediately auto-restore original
   * activations (if we are simulating activations)
   */
  prepareAutoRestore() {
    const isBrowser = isPlatformBrowser(this._platformId) && this._document;
    const enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;
    if (enableAutoRestore) {
      const resize$ = fromEvent(window, "resize").pipe(take(1));
      this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
    }
  }
  /**
   * Notify all matchMedia subscribers of de-activations
   *
   * Note: we must force 'matches' updates for
   *       future matchMedia::activation lookups
   */
  deactivateAll() {
    const list = this.currentActivations;
    this.forceRegistryMatches(list, false);
    this.simulateMediaChanges(list, false);
  }
  /**
   * Cache current activations as sorted, prioritized list of MediaChanges
   */
  saveActivations() {
    if (!this.hasCachedRegistryMatches) {
      const toMediaChange = (query) => new MediaChange(true, query);
      const mergeMQAlias = (change) => {
        const bp = this.breakpoints.findByQuery(change.mediaQuery);
        return mergeAlias(change, bp);
      };
      this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
      this.cacheRegistryMatches();
    }
  }
  /**
   * Force set manual activations for specified mediaQuery list
   */
  setActivations(list) {
    if (!!this.originalRegistry) {
      this.forceRegistryMatches(list, true);
    }
    this.simulateMediaChanges(list);
  }
  /**
   * For specified mediaQuery list manually simulate activations or deactivations
   */
  simulateMediaChanges(queries, matches = true) {
    const toMediaQuery2 = (query) => {
      const locator = this.breakpoints;
      const bp = locator.findByAlias(query) || locator.findByQuery(query);
      return bp ? bp.mediaQuery : query;
    };
    const emitChangeEvent = (query) => this.emitChangeEvent(matches, query);
    queries.map(toMediaQuery2).forEach(emitChangeEvent);
  }
  /**
   * Replace current registry with simulated registry...
   * Note: this is required since MediaQueryList::matches is 'readOnly'
   */
  forceRegistryMatches(queries, matches) {
    const registry = /* @__PURE__ */ new Map();
    queries.forEach((query) => {
      registry.set(query, {
        matches
      });
    });
    this.matchMedia.registry = registry;
  }
  /**
   * Save current MatchMedia::registry items.
   */
  cacheRegistryMatches() {
    const target = this.originalRegistry;
    target.clear();
    this.matchMedia.registry.forEach((value, key) => {
      target.set(key, value);
    });
    this.hasCachedRegistryMatches = true;
  }
  /**
   * Restore original, 'true' registry
   */
  restoreRegistryMatches() {
    const target = this.matchMedia.registry;
    target.clear();
    this.originalRegistry.forEach((value, key) => {
      target.set(key, value);
    });
    this.originalRegistry.clear();
    this.hasCachedRegistryMatches = false;
  }
  /**
   * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
   */
  emitChangeEvent(matches, query) {
    this.matchMedia.source.next(new MediaChange(matches, query));
  }
  get currentActivations() {
    return this.matchMedia.activations;
  }
};
MediaTrigger.ɵfac = function MediaTrigger_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MediaTrigger)(ɵɵinject(BreakPointRegistry), ɵɵinject(MatchMedia), ɵɵinject(LAYOUT_CONFIG), ɵɵinject(PLATFORM_ID), ɵɵinject(DOCUMENT));
};
MediaTrigger.ɵprov = ɵɵdefineInjectable({
  token: MediaTrigger,
  factory: MediaTrigger.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaTrigger, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: BreakPointRegistry
    }, {
      type: MatchMedia
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LAYOUT_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
function validateBasis(basis, grow = "1", shrink = "1") {
  let parts = [grow, shrink, basis];
  let j = basis.indexOf("calc");
  if (j > 0) {
    parts[2] = _validateCalcValue(basis.substring(j).trim());
    let matches = basis.substr(0, j).trim().split(" ");
    if (matches.length == 2) {
      parts[0] = matches[0];
      parts[1] = matches[1];
    }
  } else if (j == 0) {
    parts[2] = _validateCalcValue(basis.trim());
  } else {
    let matches = basis.split(" ");
    parts = matches.length === 3 ? matches : [grow, shrink, basis];
  }
  return parts;
}
function _validateCalcValue(calc) {
  return calc.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& ");
}
var MULTIPLIER_SUFFIX = "x";
function multiply(value, multiplier) {
  if (multiplier === void 0) {
    return value;
  }
  const transformValue = (possibleValue) => {
    const numberValue = +possibleValue.slice(0, -MULTIPLIER_SUFFIX.length);
    if (value.endsWith(MULTIPLIER_SUFFIX) && !isNaN(numberValue)) {
      return `${numberValue * multiplier.value}${multiplier.unit}`;
    }
    return value;
  };
  return value.includes(" ") ? value.split(" ").map(transformValue).join(" ") : transformValue(value);
}

export {
  LAYOUT_VALUES,
  buildLayoutCSS,
  isFlowHorizontal,
  extendObject,
  removeStyles,
  BROWSER_PROVIDER,
  CLASS_NAME,
  CoreModule,
  MediaChange,
  StylesheetMap,
  DEFAULT_CONFIG,
  LAYOUT_CONFIG,
  SERVER_TOKEN,
  BREAKPOINT,
  mergeAlias,
  StyleBuilder,
  StyleUtils,
  sortDescendingPriority,
  sortAscendingPriority,
  MatchMedia,
  DEFAULT_BREAKPOINTS,
  ScreenTypes,
  ORIENTATION_BREAKPOINTS,
  BREAKPOINTS,
  BreakPointRegistry,
  BREAKPOINT_PRINT,
  PrintHook,
  MediaMarshaller,
  BaseDirective2,
  MockMatchMedia,
  MockMatchMediaProvider,
  coerceArray,
  MediaObserver,
  MediaTrigger,
  validateBasis,
  multiply
};
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-G6WC67WO.js.map
