import {
  firebase
} from "./chunk-MN2UFJNX.js";
import {
  ActionCodeOperation,
  AuthCredential,
  AuthEventManager,
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  OAuthProvider,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  ProviderId,
  RecaptchaVerifier,
  SAMLAuthCredential,
  SAMLAuthProvider,
  TwitterAuthProvider,
  _assert,
  _castAuth,
  _clearRedirectOutcomes,
  _createError,
  _fail,
  _generateEventId,
  _getInstance,
  _getProjectConfig,
  _getRedirectResult,
  _getRedirectUrl,
  _isAndroid,
  _isIOS,
  _isIOS7Or8,
  _overrideRedirectResult,
  _persistenceKeyName,
  applyActionCode,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  checkActionCode,
  confirmPasswordReset,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  debugAssert,
  debugErrorMap,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getMultiFactorResolver,
  getRedirectResult,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  isSignInWithEmailLink,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  multiFactor,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  unlink,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode
} from "./chunk-U4JTSIC3.js";
import {
  Component,
  FirebaseError,
  getUA,
  isBrowserExtension,
  isIE,
  isIndexedDBAvailable,
  isNode,
  isReactNative,
  querystringDecode
} from "./chunk-BCTW7SII.js";
import {
  __async
} from "./chunk-35ENWJA4.js";

// node_modules/@firebase/auth/dist/esm2017/internal.js
function _cordovaWindow() {
  return window;
}
var REDIRECT_TIMEOUT_MS = 2e3;
function _generateHandlerUrl(auth, event, provider) {
  return __async(this, null, function* () {
    var _a;
    const {
      BuildInfo
    } = _cordovaWindow();
    debugAssert(event.sessionId, "AuthEvent did not contain a session ID");
    const sessionDigest = yield computeSha256(event.sessionId);
    const additionalParams = {};
    if (_isIOS()) {
      additionalParams["ibi"] = BuildInfo.packageName;
    } else if (_isAndroid()) {
      additionalParams["apn"] = BuildInfo.packageName;
    } else {
      _fail(
        auth,
        "operation-not-supported-in-this-environment"
        /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    }
    if (BuildInfo.displayName) {
      additionalParams["appDisplayName"] = BuildInfo.displayName;
    }
    additionalParams["sessionId"] = sessionDigest;
    return _getRedirectUrl(auth, provider, event.type, void 0, (_a = event.eventId) !== null && _a !== void 0 ? _a : void 0, additionalParams);
  });
}
function _validateOrigin(auth) {
  return __async(this, null, function* () {
    const {
      BuildInfo
    } = _cordovaWindow();
    const request = {};
    if (_isIOS()) {
      request.iosBundleId = BuildInfo.packageName;
    } else if (_isAndroid()) {
      request.androidPackageName = BuildInfo.packageName;
    } else {
      _fail(
        auth,
        "operation-not-supported-in-this-environment"
        /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    }
    yield _getProjectConfig(auth, request);
  });
}
function _performRedirect(handlerUrl) {
  const {
    cordova
  } = _cordovaWindow();
  return new Promise((resolve) => {
    cordova.plugins.browsertab.isAvailable((browserTabIsAvailable) => {
      let iabRef = null;
      if (browserTabIsAvailable) {
        cordova.plugins.browsertab.openUrl(handlerUrl);
      } else {
        iabRef = cordova.InAppBrowser.open(handlerUrl, _isIOS7Or8() ? "_blank" : "_system", "location=yes");
      }
      resolve(iabRef);
    });
  });
}
function _waitForAppResume(auth, eventListener, iabRef) {
  return __async(this, null, function* () {
    const {
      cordova
    } = _cordovaWindow();
    let cleanup = () => {
    };
    try {
      yield new Promise((resolve, reject) => {
        let onCloseTimer = null;
        function authEventSeen() {
          var _a;
          resolve();
          const closeBrowserTab = (_a = cordova.plugins.browsertab) === null || _a === void 0 ? void 0 : _a.close;
          if (typeof closeBrowserTab === "function") {
            closeBrowserTab();
          }
          if (typeof (iabRef === null || iabRef === void 0 ? void 0 : iabRef.close) === "function") {
            iabRef.close();
          }
        }
        function resumed() {
          if (onCloseTimer) {
            return;
          }
          onCloseTimer = window.setTimeout(() => {
            reject(_createError(
              auth,
              "redirect-cancelled-by-user"
              /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
            ));
          }, REDIRECT_TIMEOUT_MS);
        }
        function visibilityChanged() {
          if ((document === null || document === void 0 ? void 0 : document.visibilityState) === "visible") {
            resumed();
          }
        }
        eventListener.addPassiveListener(authEventSeen);
        document.addEventListener("resume", resumed, false);
        if (_isAndroid()) {
          document.addEventListener("visibilitychange", visibilityChanged, false);
        }
        cleanup = () => {
          eventListener.removePassiveListener(authEventSeen);
          document.removeEventListener("resume", resumed, false);
          document.removeEventListener("visibilitychange", visibilityChanged, false);
          if (onCloseTimer) {
            window.clearTimeout(onCloseTimer);
          }
        };
      });
    } finally {
      cleanup();
    }
  });
}
function _checkCordovaConfiguration(auth) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
  const win = _cordovaWindow();
  _assert(typeof ((_a = win === null || win === void 0 ? void 0 : win.universalLinks) === null || _a === void 0 ? void 0 : _a.subscribe) === "function", auth, "invalid-cordova-configuration", {
    missingPlugin: "cordova-universal-links-plugin-fix"
  });
  _assert(typeof ((_b = win === null || win === void 0 ? void 0 : win.BuildInfo) === null || _b === void 0 ? void 0 : _b.packageName) !== "undefined", auth, "invalid-cordova-configuration", {
    missingPlugin: "cordova-plugin-buildInfo"
  });
  _assert(typeof ((_e = (_d = (_c = win === null || win === void 0 ? void 0 : win.cordova) === null || _c === void 0 ? void 0 : _c.plugins) === null || _d === void 0 ? void 0 : _d.browsertab) === null || _e === void 0 ? void 0 : _e.openUrl) === "function", auth, "invalid-cordova-configuration", {
    missingPlugin: "cordova-plugin-browsertab"
  });
  _assert(typeof ((_h = (_g = (_f = win === null || win === void 0 ? void 0 : win.cordova) === null || _f === void 0 ? void 0 : _f.plugins) === null || _g === void 0 ? void 0 : _g.browsertab) === null || _h === void 0 ? void 0 : _h.isAvailable) === "function", auth, "invalid-cordova-configuration", {
    missingPlugin: "cordova-plugin-browsertab"
  });
  _assert(typeof ((_k = (_j = win === null || win === void 0 ? void 0 : win.cordova) === null || _j === void 0 ? void 0 : _j.InAppBrowser) === null || _k === void 0 ? void 0 : _k.open) === "function", auth, "invalid-cordova-configuration", {
    missingPlugin: "cordova-plugin-inappbrowser"
  });
}
function computeSha256(sessionId) {
  return __async(this, null, function* () {
    const bytes = stringToArrayBuffer(sessionId);
    const buf = yield crypto.subtle.digest("SHA-256", bytes);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map((num) => num.toString(16).padStart(2, "0")).join("");
  });
}
function stringToArrayBuffer(str) {
  debugAssert(/[0-9a-zA-Z]+/.test(str), "Can only convert alpha-numeric strings");
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(str);
  }
  const buff = new ArrayBuffer(str.length);
  const view = new Uint8Array(buff);
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }
  return view;
}
var SESSION_ID_LENGTH = 20;
var CordovaAuthEventManager = class extends AuthEventManager {
  constructor() {
    super(...arguments);
    this.passiveListeners = /* @__PURE__ */ new Set();
    this.initPromise = new Promise((resolve) => {
      this.resolveInitialized = resolve;
    });
  }
  addPassiveListener(cb) {
    this.passiveListeners.add(cb);
  }
  removePassiveListener(cb) {
    this.passiveListeners.delete(cb);
  }
  // In a Cordova environment, this manager can live through multiple redirect
  // operations
  resetRedirect() {
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
  }
  /** Override the onEvent method */
  onEvent(event) {
    this.resolveInitialized();
    this.passiveListeners.forEach((cb) => cb(event));
    return super.onEvent(event);
  }
  initialized() {
    return __async(this, null, function* () {
      yield this.initPromise;
    });
  }
};
function _generateNewEvent(auth, type, eventId = null) {
  return {
    type,
    eventId,
    urlResponse: null,
    sessionId: generateSessionId(),
    postBody: null,
    tenantId: auth.tenantId,
    error: _createError(
      auth,
      "no-auth-event"
      /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}
function _savePartialEvent(auth, event) {
  return storage()._set(persistenceKey(auth), event);
}
function _getAndRemoveEvent(auth) {
  return __async(this, null, function* () {
    const event = yield storage()._get(persistenceKey(auth));
    if (event) {
      yield storage()._remove(persistenceKey(auth));
    }
    return event;
  });
}
function _eventFromPartialAndUrl(partialEvent, url) {
  var _a, _b;
  const callbackUrl = _getDeepLinkFromCallback(url);
  if (callbackUrl.includes("/__/auth/callback")) {
    const params = searchParamsOrEmpty(callbackUrl);
    const errorObject = params["firebaseError"] ? parseJsonOrNull(decodeURIComponent(params["firebaseError"])) : null;
    const code = (_b = (_a = errorObject === null || errorObject === void 0 ? void 0 : errorObject["code"]) === null || _a === void 0 ? void 0 : _a.split("auth/")) === null || _b === void 0 ? void 0 : _b[1];
    const error = code ? _createError(code) : null;
    if (error) {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        error,
        urlResponse: null,
        sessionId: null,
        postBody: null
      };
    } else {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        sessionId: partialEvent.sessionId,
        urlResponse: callbackUrl,
        postBody: null
      };
    }
  }
  return null;
}
function generateSessionId() {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < SESSION_ID_LENGTH; i++) {
    const idx = Math.floor(Math.random() * allowedChars.length);
    chars.push(allowedChars.charAt(idx));
  }
  return chars.join("");
}
function storage() {
  return _getInstance(browserLocalPersistence);
}
function persistenceKey(auth) {
  return _persistenceKeyName("authEvent", auth.config.apiKey, auth.name);
}
function parseJsonOrNull(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}
function _getDeepLinkFromCallback(url) {
  const params = searchParamsOrEmpty(url);
  const link = params["link"] ? decodeURIComponent(params["link"]) : void 0;
  const doubleDeepLink = searchParamsOrEmpty(link)["link"];
  const iOSDeepLink = params["deep_link_id"] ? decodeURIComponent(params["deep_link_id"]) : void 0;
  const iOSDoubleDeepLink = searchParamsOrEmpty(iOSDeepLink)["link"];
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
function searchParamsOrEmpty(url) {
  if (!(url === null || url === void 0 ? void 0 : url.includes("?"))) {
    return {};
  }
  const [_, ...rest] = url.split("?");
  return querystringDecode(rest.join("?"));
}
var INITIAL_EVENT_TIMEOUT_MS = 500;
var CordovaPopupRedirectResolver = class {
  constructor() {
    this._redirectPersistence = browserSessionPersistence;
    this._shouldInitProactively = true;
    this.eventManagers = /* @__PURE__ */ new Map();
    this.originValidationPromises = {};
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  _initialize(auth) {
    return __async(this, null, function* () {
      const key = auth._key();
      let manager = this.eventManagers.get(key);
      if (!manager) {
        manager = new CordovaAuthEventManager(auth);
        this.eventManagers.set(key, manager);
        this.attachCallbackListeners(auth, manager);
      }
      return manager;
    });
  }
  _openPopup(auth) {
    _fail(
      auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }
  _openRedirect(auth, provider, authType, eventId) {
    return __async(this, null, function* () {
      _checkCordovaConfiguration(auth);
      const manager = yield this._initialize(auth);
      yield manager.initialized();
      manager.resetRedirect();
      _clearRedirectOutcomes();
      yield this._originValidation(auth);
      const event = _generateNewEvent(auth, authType, eventId);
      yield _savePartialEvent(auth, event);
      const url = yield _generateHandlerUrl(auth, event, provider);
      const iabRef = yield _performRedirect(url);
      return _waitForAppResume(auth, manager, iabRef);
    });
  }
  _isIframeWebStorageSupported(_auth, _cb) {
    throw new Error("Method not implemented.");
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  attachCallbackListeners(auth, manager) {
    const {
      universalLinks,
      handleOpenURL,
      BuildInfo
    } = _cordovaWindow();
    const noEventTimeout = setTimeout(() => __async(this, null, function* () {
      yield _getAndRemoveEvent(auth);
      manager.onEvent(generateNoEvent());
    }), INITIAL_EVENT_TIMEOUT_MS);
    const universalLinksCb = (eventData) => __async(this, null, function* () {
      clearTimeout(noEventTimeout);
      const partialEvent = yield _getAndRemoveEvent(auth);
      let finalEvent = null;
      if (partialEvent && (eventData === null || eventData === void 0 ? void 0 : eventData["url"])) {
        finalEvent = _eventFromPartialAndUrl(partialEvent, eventData["url"]);
      }
      manager.onEvent(finalEvent || generateNoEvent());
    });
    if (typeof universalLinks !== "undefined" && typeof universalLinks.subscribe === "function") {
      universalLinks.subscribe(null, universalLinksCb);
    }
    const existingHandleOpenURL = handleOpenURL;
    const packagePrefix = `${BuildInfo.packageName.toLowerCase()}://`;
    _cordovaWindow().handleOpenURL = (url) => __async(this, null, function* () {
      if (url.toLowerCase().startsWith(packagePrefix)) {
        universalLinksCb({
          url
        });
      }
      if (typeof existingHandleOpenURL === "function") {
        try {
          existingHandleOpenURL(url);
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
};
var cordovaPopupRedirectResolver = CordovaPopupRedirectResolver;
function generateNoEvent() {
  return {
    type: "unknown",
    eventId: null,
    sessionId: null,
    urlResponse: null,
    postBody: null,
    tenantId: null,
    error: _createError(
      "no-auth-event"
      /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}
function addFrameworkForLogging(auth, framework) {
  _castAuth(auth)._logFramework(framework);
}

// node_modules/@firebase/auth-compat/dist/index.esm2017.js
var name = "@firebase/auth-compat";
var version = "0.5.11";
var CORDOVA_ONDEVICEREADY_TIMEOUT_MS = 1e3;
function _getCurrentScheme() {
  var _a;
  return ((_a = self === null || self === void 0 ? void 0 : self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _isAndroidOrIosCordovaScheme(ua = getUA()) {
  return !!((_getCurrentScheme() === "file:" || _getCurrentScheme() === "ionic:" || _getCurrentScheme() === "capacitor:") && ua.toLowerCase().match(/iphone|ipad|ipod|android/));
}
function _isNativeEnvironment() {
  return isReactNative() || isNode();
}
function _isIe11() {
  return isIE() && (document === null || document === void 0 ? void 0 : document.documentMode) === 11;
}
function _isEdge(ua = getUA()) {
  return /Edge\/\d+/.test(ua);
}
function _isLocalStorageNotSynchronized(ua = getUA()) {
  return _isIe11() || _isEdge(ua);
}
function _isWebStorageSupported() {
  try {
    const storage2 = self.localStorage;
    const key = _generateEventId();
    if (storage2) {
      storage2["setItem"](key, "1");
      storage2["removeItem"](key);
      if (_isLocalStorageNotSynchronized()) {
        return isIndexedDBAvailable();
      }
      return true;
    }
  } catch (e) {
    return _isWorker() && isIndexedDBAvailable();
  }
  return false;
}
function _isWorker() {
  return typeof global !== "undefined" && "WorkerGlobalScope" in global && "importScripts" in global;
}
function _isPopupRedirectSupported() {
  return (_isHttpOrHttps() || isBrowserExtension() || _isAndroidOrIosCordovaScheme()) && // React Native with remote debugging reports its location.protocol as
  // http.
  !_isNativeEnvironment() && // Local storage has to be supported for browser popup and redirect
  // operations to work.
  _isWebStorageSupported() && // DOM, popups and redirects are not supported within a worker.
  !_isWorker();
}
function _isLikelyCordova() {
  return _isAndroidOrIosCordovaScheme() && typeof document !== "undefined";
}
function _isCordova() {
  return __async(this, null, function* () {
    if (!_isLikelyCordova()) {
      return false;
    }
    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve(false);
      }, CORDOVA_ONDEVICEREADY_TIMEOUT_MS);
      document.addEventListener("deviceready", () => {
        clearTimeout(timeoutId);
        resolve(true);
      });
    });
  });
}
function _getSelfWindow() {
  return typeof window !== "undefined" ? window : null;
}
var Persistence = {
  LOCAL: "local",
  NONE: "none",
  SESSION: "session"
};
var _assert$3 = _assert;
var PERSISTENCE_KEY = "persistence";
function _validatePersistenceArgument(auth, persistence) {
  _assert$3(
    Object.values(Persistence).includes(persistence),
    auth,
    "invalid-persistence-type"
    /* exp.AuthErrorCode.INVALID_PERSISTENCE */
  );
  if (isReactNative()) {
    _assert$3(
      persistence !== Persistence.SESSION,
      auth,
      "unsupported-persistence-type"
      /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );
    return;
  }
  if (isNode()) {
    _assert$3(
      persistence === Persistence.NONE,
      auth,
      "unsupported-persistence-type"
      /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );
    return;
  }
  if (_isWorker()) {
    _assert$3(
      persistence === Persistence.NONE || persistence === Persistence.LOCAL && isIndexedDBAvailable(),
      auth,
      "unsupported-persistence-type"
      /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );
    return;
  }
  _assert$3(
    persistence === Persistence.NONE || _isWebStorageSupported(),
    auth,
    "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
  );
}
function _savePersistenceForRedirect(auth) {
  return __async(this, null, function* () {
    yield auth._initializationPromise;
    const session = getSessionStorageIfAvailable();
    const key = _persistenceKeyName(PERSISTENCE_KEY, auth.config.apiKey, auth.name);
    if (session) {
      session.setItem(key, auth._getPersistence());
    }
  });
}
function _getPersistencesFromRedirect(apiKey, appName) {
  const session = getSessionStorageIfAvailable();
  if (!session) {
    return [];
  }
  const key = _persistenceKeyName(PERSISTENCE_KEY, apiKey, appName);
  const persistence = session.getItem(key);
  switch (persistence) {
    case Persistence.NONE:
      return [inMemoryPersistence];
    case Persistence.LOCAL:
      return [indexedDBLocalPersistence, browserSessionPersistence];
    case Persistence.SESSION:
      return [browserSessionPersistence];
    default:
      return [];
  }
}
function getSessionStorageIfAvailable() {
  var _a;
  try {
    return ((_a = _getSelfWindow()) === null || _a === void 0 ? void 0 : _a.sessionStorage) || null;
  } catch (e) {
    return null;
  }
}
var _assert$2 = _assert;
var CompatPopupRedirectResolver = class {
  constructor() {
    this.browserResolver = _getInstance(browserPopupRedirectResolver);
    this.cordovaResolver = _getInstance(cordovaPopupRedirectResolver);
    this.underlyingResolver = null;
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  _initialize(auth) {
    return __async(this, null, function* () {
      yield this.selectUnderlyingResolver();
      return this.assertedUnderlyingResolver._initialize(auth);
    });
  }
  _openPopup(auth, provider, authType, eventId) {
    return __async(this, null, function* () {
      yield this.selectUnderlyingResolver();
      return this.assertedUnderlyingResolver._openPopup(auth, provider, authType, eventId);
    });
  }
  _openRedirect(auth, provider, authType, eventId) {
    return __async(this, null, function* () {
      yield this.selectUnderlyingResolver();
      return this.assertedUnderlyingResolver._openRedirect(auth, provider, authType, eventId);
    });
  }
  _isIframeWebStorageSupported(auth, cb) {
    this.assertedUnderlyingResolver._isIframeWebStorageSupported(auth, cb);
  }
  _originValidation(auth) {
    return this.assertedUnderlyingResolver._originValidation(auth);
  }
  get _shouldInitProactively() {
    return _isLikelyCordova() || this.browserResolver._shouldInitProactively;
  }
  get assertedUnderlyingResolver() {
    _assert$2(
      this.underlyingResolver,
      "internal-error"
      /* exp.AuthErrorCode.INTERNAL_ERROR */
    );
    return this.underlyingResolver;
  }
  selectUnderlyingResolver() {
    return __async(this, null, function* () {
      if (this.underlyingResolver) {
        return;
      }
      const isCordova = yield _isCordova();
      this.underlyingResolver = isCordova ? this.cordovaResolver : this.browserResolver;
    });
  }
};
function unwrap(object) {
  return object.unwrap();
}
function wrapped(object) {
  return object.wrapped();
}
function credentialFromResponse(userCredential) {
  return credentialFromObject(userCredential);
}
function attachExtraErrorFields(auth, e) {
  var _a;
  const response = (_a = e.customData) === null || _a === void 0 ? void 0 : _a._tokenResponse;
  if ((e === null || e === void 0 ? void 0 : e.code) === "auth/multi-factor-auth-required") {
    const mfaErr = e;
    mfaErr.resolver = new MultiFactorResolver(auth, getMultiFactorResolver(auth, e));
  } else if (response) {
    const credential = credentialFromObject(e);
    const credErr = e;
    if (credential) {
      credErr.credential = credential;
      credErr.tenantId = response.tenantId || void 0;
      credErr.email = response.email || void 0;
      credErr.phoneNumber = response.phoneNumber || void 0;
    }
  }
}
function credentialFromObject(object) {
  const {
    _tokenResponse
  } = object instanceof FirebaseError ? object.customData : object;
  if (!_tokenResponse) {
    return null;
  }
  if (!(object instanceof FirebaseError)) {
    if ("temporaryProof" in _tokenResponse && "phoneNumber" in _tokenResponse) {
      return PhoneAuthProvider.credentialFromResult(object);
    }
  }
  const providerId = _tokenResponse.providerId;
  if (!providerId || providerId === ProviderId.PASSWORD) {
    return null;
  }
  let provider;
  switch (providerId) {
    case ProviderId.GOOGLE:
      provider = GoogleAuthProvider;
      break;
    case ProviderId.FACEBOOK:
      provider = FacebookAuthProvider;
      break;
    case ProviderId.GITHUB:
      provider = GithubAuthProvider;
      break;
    case ProviderId.TWITTER:
      provider = TwitterAuthProvider;
      break;
    default:
      const {
        oauthIdToken,
        oauthAccessToken,
        oauthTokenSecret,
        pendingToken,
        nonce
      } = _tokenResponse;
      if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
        return null;
      }
      if (pendingToken) {
        if (providerId.startsWith("saml.")) {
          return SAMLAuthCredential._create(providerId, pendingToken);
        } else {
          return OAuthCredential._fromParams({
            providerId,
            signInMethod: providerId,
            pendingToken,
            idToken: oauthIdToken,
            accessToken: oauthAccessToken
          });
        }
      }
      return new OAuthProvider(providerId).credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        rawNonce: nonce
      });
  }
  return object instanceof FirebaseError ? provider.credentialFromError(object) : provider.credentialFromResult(object);
}
function convertCredential(auth, credentialPromise) {
  return credentialPromise.catch((e) => {
    if (e instanceof FirebaseError) {
      attachExtraErrorFields(auth, e);
    }
    throw e;
  }).then((credential) => {
    const operationType = credential.operationType;
    const user = credential.user;
    return {
      operationType,
      credential: credentialFromResponse(credential),
      additionalUserInfo: getAdditionalUserInfo(credential),
      user: User.getOrCreate(user)
    };
  });
}
function convertConfirmationResult(auth, confirmationResultPromise) {
  return __async(this, null, function* () {
    const confirmationResultExp = yield confirmationResultPromise;
    return {
      verificationId: confirmationResultExp.verificationId,
      confirm: (verificationCode) => convertCredential(auth, confirmationResultExp.confirm(verificationCode))
    };
  });
}
var MultiFactorResolver = class {
  constructor(auth, resolver) {
    this.resolver = resolver;
    this.auth = wrapped(auth);
  }
  get session() {
    return this.resolver.session;
  }
  get hints() {
    return this.resolver.hints;
  }
  resolveSignIn(assertion) {
    return convertCredential(unwrap(this.auth), this.resolver.resolveSignIn(assertion));
  }
};
var User = class _User {
  constructor(_delegate) {
    this._delegate = _delegate;
    this.multiFactor = multiFactor(_delegate);
  }
  static getOrCreate(user) {
    if (!_User.USER_MAP.has(user)) {
      _User.USER_MAP.set(user, new _User(user));
    }
    return _User.USER_MAP.get(user);
  }
  delete() {
    return this._delegate.delete();
  }
  reload() {
    return this._delegate.reload();
  }
  toJSON() {
    return this._delegate.toJSON();
  }
  getIdTokenResult(forceRefresh) {
    return this._delegate.getIdTokenResult(forceRefresh);
  }
  getIdToken(forceRefresh) {
    return this._delegate.getIdToken(forceRefresh);
  }
  linkAndRetrieveDataWithCredential(credential) {
    return this.linkWithCredential(credential);
  }
  linkWithCredential(credential) {
    return __async(this, null, function* () {
      return convertCredential(this.auth, linkWithCredential(this._delegate, credential));
    });
  }
  linkWithPhoneNumber(phoneNumber, applicationVerifier) {
    return __async(this, null, function* () {
      return convertConfirmationResult(this.auth, linkWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
    });
  }
  linkWithPopup(provider) {
    return __async(this, null, function* () {
      return convertCredential(this.auth, linkWithPopup(this._delegate, provider, CompatPopupRedirectResolver));
    });
  }
  linkWithRedirect(provider) {
    return __async(this, null, function* () {
      yield _savePersistenceForRedirect(_castAuth(this.auth));
      return linkWithRedirect(this._delegate, provider, CompatPopupRedirectResolver);
    });
  }
  reauthenticateAndRetrieveDataWithCredential(credential) {
    return this.reauthenticateWithCredential(credential);
  }
  reauthenticateWithCredential(credential) {
    return __async(this, null, function* () {
      return convertCredential(this.auth, reauthenticateWithCredential(this._delegate, credential));
    });
  }
  reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
    return convertConfirmationResult(this.auth, reauthenticateWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
  }
  reauthenticateWithPopup(provider) {
    return convertCredential(this.auth, reauthenticateWithPopup(this._delegate, provider, CompatPopupRedirectResolver));
  }
  reauthenticateWithRedirect(provider) {
    return __async(this, null, function* () {
      yield _savePersistenceForRedirect(_castAuth(this.auth));
      return reauthenticateWithRedirect(this._delegate, provider, CompatPopupRedirectResolver);
    });
  }
  sendEmailVerification(actionCodeSettings) {
    return sendEmailVerification(this._delegate, actionCodeSettings);
  }
  unlink(providerId) {
    return __async(this, null, function* () {
      yield unlink(this._delegate, providerId);
      return this;
    });
  }
  updateEmail(newEmail) {
    return updateEmail(this._delegate, newEmail);
  }
  updatePassword(newPassword) {
    return updatePassword(this._delegate, newPassword);
  }
  updatePhoneNumber(phoneCredential) {
    return updatePhoneNumber(this._delegate, phoneCredential);
  }
  updateProfile(profile) {
    return updateProfile(this._delegate, profile);
  }
  verifyBeforeUpdateEmail(newEmail, actionCodeSettings) {
    return verifyBeforeUpdateEmail(this._delegate, newEmail, actionCodeSettings);
  }
  get emailVerified() {
    return this._delegate.emailVerified;
  }
  get isAnonymous() {
    return this._delegate.isAnonymous;
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get phoneNumber() {
    return this._delegate.phoneNumber;
  }
  get providerData() {
    return this._delegate.providerData;
  }
  get refreshToken() {
    return this._delegate.refreshToken;
  }
  get tenantId() {
    return this._delegate.tenantId;
  }
  get displayName() {
    return this._delegate.displayName;
  }
  get email() {
    return this._delegate.email;
  }
  get photoURL() {
    return this._delegate.photoURL;
  }
  get providerId() {
    return this._delegate.providerId;
  }
  get uid() {
    return this._delegate.uid;
  }
  get auth() {
    return this._delegate.auth;
  }
};
User.USER_MAP = /* @__PURE__ */ new WeakMap();
var _assert$1 = _assert;
var Auth = class {
  constructor(app, provider) {
    this.app = app;
    if (provider.isInitialized()) {
      this._delegate = provider.getImmediate();
      this.linkUnderlyingAuth();
      return;
    }
    const {
      apiKey
    } = app.options;
    _assert$1(apiKey, "invalid-api-key", {
      appName: app.name
    });
    _assert$1(apiKey, "invalid-api-key", {
      appName: app.name
    });
    const resolver = typeof window !== "undefined" ? CompatPopupRedirectResolver : void 0;
    this._delegate = provider.initialize({
      options: {
        persistence: buildPersistenceHierarchy(apiKey, app.name),
        popupRedirectResolver: resolver
      }
    });
    this._delegate._updateErrorMap(debugErrorMap);
    this.linkUnderlyingAuth();
  }
  get emulatorConfig() {
    return this._delegate.emulatorConfig;
  }
  get currentUser() {
    if (!this._delegate.currentUser) {
      return null;
    }
    return User.getOrCreate(this._delegate.currentUser);
  }
  get languageCode() {
    return this._delegate.languageCode;
  }
  set languageCode(languageCode) {
    this._delegate.languageCode = languageCode;
  }
  get settings() {
    return this._delegate.settings;
  }
  get tenantId() {
    return this._delegate.tenantId;
  }
  set tenantId(tid) {
    this._delegate.tenantId = tid;
  }
  useDeviceLanguage() {
    this._delegate.useDeviceLanguage();
  }
  signOut() {
    return this._delegate.signOut();
  }
  useEmulator(url, options) {
    connectAuthEmulator(this._delegate, url, options);
  }
  applyActionCode(code) {
    return applyActionCode(this._delegate, code);
  }
  checkActionCode(code) {
    return checkActionCode(this._delegate, code);
  }
  confirmPasswordReset(code, newPassword) {
    return confirmPasswordReset(this._delegate, code, newPassword);
  }
  createUserWithEmailAndPassword(email, password) {
    return __async(this, null, function* () {
      return convertCredential(this._delegate, createUserWithEmailAndPassword(this._delegate, email, password));
    });
  }
  fetchProvidersForEmail(email) {
    return this.fetchSignInMethodsForEmail(email);
  }
  fetchSignInMethodsForEmail(email) {
    return fetchSignInMethodsForEmail(this._delegate, email);
  }
  isSignInWithEmailLink(emailLink) {
    return isSignInWithEmailLink(this._delegate, emailLink);
  }
  getRedirectResult() {
    return __async(this, null, function* () {
      _assert$1(
        _isPopupRedirectSupported(),
        this._delegate,
        "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
      const credential = yield getRedirectResult(this._delegate, CompatPopupRedirectResolver);
      if (!credential) {
        return {
          credential: null,
          user: null
        };
      }
      return convertCredential(this._delegate, Promise.resolve(credential));
    });
  }
  // This function should only be called by frameworks (e.g. FirebaseUI-web) to log their usage.
  // It is not intended for direct use by developer apps. NO jsdoc here to intentionally leave it
  // out of autogenerated documentation pages to reduce accidental misuse.
  addFrameworkForLogging(framework) {
    addFrameworkForLogging(this._delegate, framework);
  }
  onAuthStateChanged(nextOrObserver, errorFn, completed) {
    const {
      next,
      error,
      complete
    } = wrapObservers(nextOrObserver, errorFn, completed);
    return this._delegate.onAuthStateChanged(next, error, complete);
  }
  onIdTokenChanged(nextOrObserver, errorFn, completed) {
    const {
      next,
      error,
      complete
    } = wrapObservers(nextOrObserver, errorFn, completed);
    return this._delegate.onIdTokenChanged(next, error, complete);
  }
  sendSignInLinkToEmail(email, actionCodeSettings) {
    return sendSignInLinkToEmail(this._delegate, email, actionCodeSettings);
  }
  sendPasswordResetEmail(email, actionCodeSettings) {
    return sendPasswordResetEmail(this._delegate, email, actionCodeSettings || void 0);
  }
  setPersistence(persistence) {
    return __async(this, null, function* () {
      _validatePersistenceArgument(this._delegate, persistence);
      let converted;
      switch (persistence) {
        case Persistence.SESSION:
          converted = browserSessionPersistence;
          break;
        case Persistence.LOCAL:
          const isIndexedDBFullySupported = yield _getInstance(indexedDBLocalPersistence)._isAvailable();
          converted = isIndexedDBFullySupported ? indexedDBLocalPersistence : browserLocalPersistence;
          break;
        case Persistence.NONE:
          converted = inMemoryPersistence;
          break;
        default:
          return _fail("argument-error", {
            appName: this._delegate.name
          });
      }
      return this._delegate.setPersistence(converted);
    });
  }
  signInAndRetrieveDataWithCredential(credential) {
    return this.signInWithCredential(credential);
  }
  signInAnonymously() {
    return convertCredential(this._delegate, signInAnonymously(this._delegate));
  }
  signInWithCredential(credential) {
    return convertCredential(this._delegate, signInWithCredential(this._delegate, credential));
  }
  signInWithCustomToken(token) {
    return convertCredential(this._delegate, signInWithCustomToken(this._delegate, token));
  }
  signInWithEmailAndPassword(email, password) {
    return convertCredential(this._delegate, signInWithEmailAndPassword(this._delegate, email, password));
  }
  signInWithEmailLink(email, emailLink) {
    return convertCredential(this._delegate, signInWithEmailLink(this._delegate, email, emailLink));
  }
  signInWithPhoneNumber(phoneNumber, applicationVerifier) {
    return convertConfirmationResult(this._delegate, signInWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
  }
  signInWithPopup(provider) {
    return __async(this, null, function* () {
      _assert$1(
        _isPopupRedirectSupported(),
        this._delegate,
        "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
      return convertCredential(this._delegate, signInWithPopup(this._delegate, provider, CompatPopupRedirectResolver));
    });
  }
  signInWithRedirect(provider) {
    return __async(this, null, function* () {
      _assert$1(
        _isPopupRedirectSupported(),
        this._delegate,
        "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
      yield _savePersistenceForRedirect(this._delegate);
      return signInWithRedirect(this._delegate, provider, CompatPopupRedirectResolver);
    });
  }
  updateCurrentUser(user) {
    return this._delegate.updateCurrentUser(user);
  }
  verifyPasswordResetCode(code) {
    return verifyPasswordResetCode(this._delegate, code);
  }
  unwrap() {
    return this._delegate;
  }
  _delete() {
    return this._delegate._delete();
  }
  linkUnderlyingAuth() {
    this._delegate.wrapped = () => this;
  }
};
Auth.Persistence = Persistence;
function wrapObservers(nextOrObserver, error, complete) {
  let next = nextOrObserver;
  if (typeof nextOrObserver !== "function") {
    ({
      next,
      error,
      complete
    } = nextOrObserver);
  }
  const oldNext = next;
  const newNext = (user) => oldNext(user && User.getOrCreate(user));
  return {
    next: newNext,
    error,
    complete
  };
}
function buildPersistenceHierarchy(apiKey, appName) {
  const persistences = _getPersistencesFromRedirect(apiKey, appName);
  if (typeof self !== "undefined" && !persistences.includes(indexedDBLocalPersistence)) {
    persistences.push(indexedDBLocalPersistence);
  }
  if (typeof window !== "undefined") {
    for (const persistence of [browserLocalPersistence, browserSessionPersistence]) {
      if (!persistences.includes(persistence)) {
        persistences.push(persistence);
      }
    }
  }
  if (!persistences.includes(inMemoryPersistence)) {
    persistences.push(inMemoryPersistence);
  }
  return persistences;
}
var PhoneAuthProvider2 = class {
  constructor() {
    this.providerId = "phone";
    this._delegate = new PhoneAuthProvider(unwrap(firebase.auth()));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthProvider.credential(verificationId, verificationCode);
  }
  verifyPhoneNumber(phoneInfoOptions, applicationVerifier) {
    return this._delegate.verifyPhoneNumber(
      // The implementation matches but the types are subtly incompatible
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      phoneInfoOptions,
      applicationVerifier
    );
  }
  unwrap() {
    return this._delegate;
  }
};
PhoneAuthProvider2.PHONE_SIGN_IN_METHOD = PhoneAuthProvider.PHONE_SIGN_IN_METHOD;
PhoneAuthProvider2.PROVIDER_ID = PhoneAuthProvider.PROVIDER_ID;
var _assert2 = _assert;
var RecaptchaVerifier2 = class {
  constructor(container, parameters, app = firebase.app()) {
    var _a;
    _assert2((_a = app.options) === null || _a === void 0 ? void 0 : _a.apiKey, "invalid-api-key", {
      appName: app.name
    });
    this._delegate = new RecaptchaVerifier(
      // TODO: remove ts-ignore when moving types from auth-types to auth-compat
      // @ts-ignore
      app.auth(),
      container,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parameters
    );
    this.type = this._delegate.type;
  }
  clear() {
    this._delegate.clear();
  }
  render() {
    return this._delegate.render();
  }
  verify() {
    return this._delegate.verify();
  }
};
var AUTH_TYPE = "auth-compat";
function registerAuthCompat(instance) {
  instance.INTERNAL.registerComponent(new Component(
    AUTH_TYPE,
    (container) => {
      const app = container.getProvider("app-compat").getImmediate();
      const authProvider = container.getProvider("auth");
      return new Auth(app, authProvider);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setServiceProps({
    ActionCodeInfo: {
      Operation: {
        EMAIL_SIGNIN: ActionCodeOperation.EMAIL_SIGNIN,
        PASSWORD_RESET: ActionCodeOperation.PASSWORD_RESET,
        RECOVER_EMAIL: ActionCodeOperation.RECOVER_EMAIL,
        REVERT_SECOND_FACTOR_ADDITION: ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION,
        VERIFY_AND_CHANGE_EMAIL: ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL,
        VERIFY_EMAIL: ActionCodeOperation.VERIFY_EMAIL
      }
    },
    EmailAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    OAuthProvider,
    SAMLAuthProvider,
    PhoneAuthProvider: PhoneAuthProvider2,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier: RecaptchaVerifier2,
    TwitterAuthProvider,
    Auth,
    AuthCredential,
    Error: FirebaseError
  }).setInstantiationMode(
    "LAZY"
    /* InstantiationMode.LAZY */
  ).setMultipleInstances(false));
  instance.registerVersion(name, version);
}
registerAuthCompat(firebase);
/*! Bundled license information:

@firebase/auth/dist/esm2017/internal.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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
   * Copyright 2017 Google LLC
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

@firebase/auth-compat/dist/index.esm2017.js:
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
*/
//# sourceMappingURL=chunk-2DQLHJO4.js.map
