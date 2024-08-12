import {
  Component,
  DEFAULT_ENTRY_NAME,
  ErrorFactory,
  Logger,
  SDK_VERSION,
  _addComponent,
  _addOrOverwriteComponent,
  _registerComponent,
  contains,
  createSubscribe,
  deepExtend,
  deleteApp,
  index_esm2017_exports,
  initializeApp,
  isBrowser,
  onLog,
  registerVersion,
  setLogLevel
} from "./chunk-BCTW7SII.js";

// node_modules/@firebase/app-compat/dist/esm/index.esm2017.js
var FirebaseAppImpl = class {
  constructor(_delegate, firebase2) {
    this._delegate = _delegate;
    this.firebase = firebase2;
    _addComponent(_delegate, new Component(
      "app-compat",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
    this.container = _delegate.container;
  }
  get automaticDataCollectionEnabled() {
    return this._delegate.automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this._delegate.automaticDataCollectionEnabled = val;
  }
  get name() {
    return this._delegate.name;
  }
  get options() {
    return this._delegate.options;
  }
  delete() {
    return new Promise((resolve) => {
      this._delegate.checkDestroyed();
      resolve();
    }).then(() => {
      this.firebase.INTERNAL.removeApp(this.name);
      return deleteApp(this._delegate);
    });
  }
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */
  _getService(name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    var _a;
    this._delegate.checkDestroyed();
    const provider = this._delegate.container.getProvider(name2);
    if (!provider.isInitialized() && ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT") {
      provider.initialize();
    }
    return provider.getImmediate({
      identifier: instanceIdentifier
    });
  }
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get it again.
   *
   * NOTE: currently only firestore uses this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */
  _removeServiceInstance(name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    this._delegate.container.getProvider(name2).clearInstance(instanceIdentifier);
  }
  /**
   * @param component the component being added to this app's container
   * @internal
   */
  _addComponent(component) {
    _addComponent(this._delegate, component);
  }
  _addOrOverwriteComponent(component) {
    _addOrOverwriteComponent(this._delegate, component);
  }
  toJSON() {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  }
};
var ERRORS = {
  [
    "no-app"
    /* AppError.NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  [
    "invalid-app-argument"
    /* AppError.INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance."
};
var ERROR_FACTORY = new ErrorFactory("app-compat", "Firebase", ERRORS);
function createFirebaseNamespaceCore(firebaseAppImpl) {
  const apps = {};
  const namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeAppCompat,
    // @ts-ignore
    app,
    registerVersion,
    setLogLevel,
    onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION,
    INTERNAL: {
      registerComponent: registerComponentCompat,
      removeApp,
      useAsService,
      modularAPIs: index_esm2017_exports
    }
  };
  namespace["default"] = namespace;
  Object.defineProperty(namespace, "apps", {
    get: getApps
  });
  function removeApp(name2) {
    delete apps[name2];
  }
  function app(name2) {
    name2 = name2 || DEFAULT_ENTRY_NAME;
    if (!contains(apps, name2)) {
      throw ERROR_FACTORY.create("no-app", {
        appName: name2
      });
    }
    return apps[name2];
  }
  app["App"] = firebaseAppImpl;
  function initializeAppCompat(options, rawConfig = {}) {
    const app2 = initializeApp(options, rawConfig);
    if (contains(apps, app2.name)) {
      return apps[app2.name];
    }
    const appCompat = new firebaseAppImpl(app2, namespace);
    apps[app2.name] = appCompat;
    return appCompat;
  }
  function getApps() {
    return Object.keys(apps).map((name2) => apps[name2]);
  }
  function registerComponentCompat(component) {
    const componentName = component.name;
    const componentNameWithoutCompat = componentName.replace("-compat", "");
    if (_registerComponent(component) && component.type === "PUBLIC") {
      const serviceNamespace = (appArg = app()) => {
        if (typeof appArg[componentNameWithoutCompat] !== "function") {
          throw ERROR_FACTORY.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentNameWithoutCompat]();
      };
      if (component.serviceProps !== void 0) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentNameWithoutCompat] = serviceNamespace;
      firebaseAppImpl.prototype[componentNameWithoutCompat] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
      // option added to the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function(...args) {
        const serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    return component.type === "PUBLIC" ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentNameWithoutCompat]
    ) : null;
  }
  function useAsService(app2, name2) {
    if (name2 === "serverAuth") {
      return null;
    }
    const useService = name2;
    return useService;
  }
  return namespace;
}
function createFirebaseNamespace() {
  const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = Object.assign(Object.assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
var firebase$1 = createFirebaseNamespace();
var logger = new Logger("@firebase/app-compat");
var name = "@firebase/app-compat";
var version = "0.2.38";
function registerCoreComponents(variant) {
  registerVersion(name, version, variant);
}
if (isBrowser() && window.firebase !== void 0) {
  logger.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);
  const sdkVersion = window.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
    logger.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `);
  }
}
var firebase = firebase$1;
registerCoreComponents();

export {
  firebase
};
/*! Bundled license information:

@firebase/app-compat/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-MN2UFJNX.js.map
