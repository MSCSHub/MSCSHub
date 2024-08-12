import {
  firebase
} from "./chunk-MN2UFJNX.js";
import {
  VERSION as VERSION2
} from "./chunk-WZ3FA4EX.js";
import {
  Inject,
  InjectionToken,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  VERSION,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-O52VBTXF.js";

// node_modules/@angular/fire/fesm2022/angular-fire-compat.mjs
var noopFunctions = ["ngOnDestroy"];
var ɵlazySDKProxy = (klass, observable, zone, options = {}) => {
  return new Proxy(klass, {
    get: (_, name) => zone.runOutsideAngular(() => {
      if (klass[name]) {
        if (options?.spy?.get) {
          options.spy.get(name, klass[name]);
        }
        return klass[name];
      }
      if (noopFunctions.indexOf(name) > -1) {
        return () => void 0;
      }
      const promise = observable.toPromise().then((mod) => {
        const ret = mod?.[name];
        if (typeof ret === "function") {
          return ret.bind(mod);
        } else if (ret?.then) {
          return ret.then((res) => zone.run(() => res));
        } else {
          return zone.run(() => ret);
        }
      });
      return new Proxy(() => void 0, {
        get: (_2, name2) => promise[name2],
        // TODO handle callbacks as transparently as I can
        apply: (self, _2, args) => promise.then((it) => {
          const res = it?.(...args);
          if (options?.spy?.apply) {
            options.spy.apply(name, args, res);
          }
          return res;
        })
      });
    })
  });
};
var ɵapplyMixins = (derivedCtor, constructors) => {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype || baseCtor).forEach((name) => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype || baseCtor, name));
    });
  });
};
var FirebaseApp = class {
  constructor(app) {
    return app;
  }
};
var FIREBASE_OPTIONS = new InjectionToken("angularfire2.app.options");
var FIREBASE_APP_NAME = new InjectionToken("angularfire2.app.name");
function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
  const name = typeof nameOrConfig === "string" && nameOrConfig || "[DEFAULT]";
  const config = typeof nameOrConfig === "object" && nameOrConfig || {};
  config.name = config.name || name;
  const existingApp = firebase.apps.filter((app2) => app2 && app2.name === config.name)[0];
  const app = existingApp || zone.runOutsideAngular(() => firebase.initializeApp(options, config));
  try {
    if (JSON.stringify(options) !== JSON.stringify(app.options)) {
      const hmr = !!module.hot;
      log$1("error", `${app.name} Firebase App already initialized with different options${hmr ? ", you may need to reload as Firebase is not HMR aware." : "."}`);
    }
  } catch (e) {
  }
  return new FirebaseApp(app);
}
var log$1 = (level, ...args) => {
  if (isDevMode() && typeof console !== "undefined") {
    console[level](...args);
  }
};
var FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: ɵfirebaseAppFactory,
  deps: [FIREBASE_OPTIONS, NgZone, [new Optional(), FIREBASE_APP_NAME]]
};
var AngularFireModule = class _AngularFireModule {
  static initializeApp(options, nameOrConfig) {
    return {
      ngModule: _AngularFireModule,
      providers: [{
        provide: FIREBASE_OPTIONS,
        useValue: options
      }, {
        provide: FIREBASE_APP_NAME,
        useValue: nameOrConfig
      }]
    };
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(platformId) {
    firebase.registerVersion("angularfire", VERSION2.full, "core");
    firebase.registerVersion("angularfire", VERSION2.full, "app-compat");
    firebase.registerVersion("angular", VERSION.full, platformId.toString());
  }
  static ɵfac = function AngularFireModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularFireModule)(ɵɵinject(PLATFORM_ID));
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AngularFireModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [FIREBASE_APP_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularFireModule, [{
    type: NgModule,
    args: [{
      providers: [FIREBASE_APP_PROVIDER]
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function ɵcacheInstance(cacheKey, moduleName, appName, fn, deps) {
  const [, instance, cachedDeps] = globalThis.ɵAngularfireInstanceCache.find((it) => it[0] === cacheKey) || [];
  if (instance) {
    if (!matchDep(deps, cachedDeps)) {
      log("error", `${moduleName} was already initialized on the ${appName} Firebase App with different settings.${IS_HMR ? " You may need to reload as Firebase is not HMR aware." : ""}`);
      log("warn", {
        is: deps,
        was: cachedDeps
      });
    }
    return instance;
  } else {
    const newInstance = fn();
    globalThis.ɵAngularfireInstanceCache.push([cacheKey, newInstance, deps]);
    return newInstance;
  }
}
function matchDep(a, b) {
  try {
    return a.toString() === b.toString();
  } catch (_) {
    return a === b;
  }
}
var IS_HMR = typeof module !== "undefined" && !!module.hot;
var log = (level, ...args) => {
  if (isDevMode() && typeof console !== "undefined") {
    console[level](...args);
  }
};
globalThis.ɵAngularfireInstanceCache ||= [];

export {
  ɵlazySDKProxy,
  ɵapplyMixins,
  FirebaseApp,
  FIREBASE_OPTIONS,
  FIREBASE_APP_NAME,
  ɵfirebaseAppFactory,
  AngularFireModule,
  ɵcacheInstance
};
//# sourceMappingURL=chunk-T3LQLOGT.js.map
