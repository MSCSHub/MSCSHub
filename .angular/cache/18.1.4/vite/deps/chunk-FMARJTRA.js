import {
  VERSION as VERSION2,
  ɵAngularFireSchedulers,
  ɵzoneWrap
} from "./chunk-WZ3FA4EX.js";
import {
  deleteApp,
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  onLog,
  registerVersion,
  setLogLevel
} from "./chunk-BCTW7SII.js";
import {
  Inject,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  VERSION,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-O52VBTXF.js";
import {
  concatMap,
  distinct,
  from,
  timer
} from "./chunk-D4JAG7AO.js";

// node_modules/@angular/fire/fesm2022/angular-fire-app.mjs
var FirebaseApp = class {
  constructor(app) {
    return app;
  }
};
var FirebaseApps = class {
  constructor() {
    return getApps();
  }
};
var firebaseApp$ = timer(0, 300).pipe(concatMap(() => from(getApps())), distinct());
function defaultFirebaseAppFactory(provided) {
  if (provided && provided.length === 1) {
    return provided[0];
  }
  return new FirebaseApp(getApp());
}
var PROVIDED_FIREBASE_APPS = new InjectionToken("angularfire2._apps");
var DEFAULT_FIREBASE_APP_PROVIDER = {
  provide: FirebaseApp,
  useFactory: defaultFirebaseAppFactory,
  deps: [[new Optional(), PROVIDED_FIREBASE_APPS]]
};
var FIREBASE_APPS_PROVIDER = {
  provide: FirebaseApps,
  deps: [[new Optional(), PROVIDED_FIREBASE_APPS]]
};
function firebaseAppFactory(fn) {
  return (zone, injector) => {
    const platformId = injector.get(PLATFORM_ID);
    registerVersion("angularfire", VERSION2.full, "core");
    registerVersion("angularfire", VERSION2.full, "app");
    registerVersion("angular", VERSION.full, platformId.toString());
    const app = zone.runOutsideAngular(() => fn(injector));
    return new FirebaseApp(app);
  };
}
var FirebaseAppModule = class _FirebaseAppModule {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(platformId) {
    registerVersion("angularfire", VERSION2.full, "core");
    registerVersion("angularfire", VERSION2.full, "app");
    registerVersion("angular", VERSION.full, platformId.toString());
  }
  static ɵfac = function FirebaseAppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirebaseAppModule)(ɵɵinject(PLATFORM_ID));
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FirebaseAppModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirebaseAppModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER]
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function provideFirebaseApp(fn, ...deps) {
  return makeEnvironmentProviders([DEFAULT_FIREBASE_APP_PROVIDER, FIREBASE_APPS_PROVIDER, {
    provide: PROVIDED_FIREBASE_APPS,
    useFactory: firebaseAppFactory(fn),
    multi: true,
    deps: [NgZone, Injector, ɵAngularFireSchedulers, ...deps]
  }]);
}
var deleteApp2 = ɵzoneWrap(deleteApp, true);
var getApp2 = ɵzoneWrap(getApp, true);
var getApps2 = ɵzoneWrap(getApps, true);
var initializeApp2 = ɵzoneWrap(initializeApp, true);
var initializeServerApp2 = ɵzoneWrap(initializeServerApp, true);
var onLog2 = ɵzoneWrap(onLog, true);
var registerVersion2 = ɵzoneWrap(registerVersion, true);
var setLogLevel2 = ɵzoneWrap(setLogLevel, true);

export {
  FirebaseApp,
  FirebaseApps,
  firebaseApp$,
  FirebaseAppModule,
  provideFirebaseApp,
  deleteApp2 as deleteApp,
  getApp2 as getApp,
  getApps2 as getApps,
  initializeApp2 as initializeApp,
  initializeServerApp2 as initializeServerApp,
  onLog2 as onLog,
  registerVersion2 as registerVersion,
  setLogLevel2 as setLogLevel
};
//# sourceMappingURL=chunk-FMARJTRA.js.map
