import {
  getApps,
  registerVersion
} from "./chunk-BCTW7SII.js";
import {
  Injectable,
  NgZone,
  Version,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O52VBTXF.js";
import {
  queueScheduler
} from "./chunk-ORNLS2RR.js";
import {
  Observable,
  asyncScheduler,
  observeOn,
  subscribeOn,
  tap
} from "./chunk-D4JAG7AO.js";

// node_modules/firebase/app/dist/esm/index.esm.js
var name = "firebase";
var version = "10.12.5";
registerVersion(name, version, "app");

// node_modules/@angular/fire/fesm2022/angular-fire.mjs
var VERSION = new Version("ANGULARFIRE2_VERSION");
var ɵisSupportedError = (module) => `The APP_INITIALIZER that is "making" isSupported() sync for the sake of convenient DI has not resolved in this
context. Rather than injecting ${module} in the constructor, first ensure that ${module} is supported by calling
\`await isSupported()\`, then retrieve the instance from the injector manually \`injector.get(${module})\`.`;
function ɵgetDefaultInstanceOf(identifier, provided, defaultApp) {
  if (provided) {
    if (provided.length === 1) {
      return provided[0];
    }
    const providedUsingDefaultApp = provided.filter((it) => it.app === defaultApp);
    if (providedUsingDefaultApp.length === 1) {
      return providedUsingDefaultApp[0];
    }
  }
  const defaultAppWithContainer = defaultApp;
  const provider = defaultAppWithContainer.container.getProvider(identifier);
  return provider.getImmediate({
    optional: true
  });
}
var ɵgetAllInstancesOf = (identifier, app) => {
  const apps = app ? [app] : getApps();
  const instances = [];
  apps.forEach((app2) => {
    const provider = app2.container.getProvider(identifier);
    provider.instances.forEach((instance) => {
      if (!instances.includes(instance)) {
        instances.push(instance);
      }
    });
  });
  return instances;
};
var ɵAppCheckInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(ɵAPP_CHECK_PROVIDER_NAME);
  }
};
var ɵAPP_CHECK_PROVIDER_NAME = "app-check";
function noop() {
}
var ɵZoneScheduler = class {
  zone;
  delegate;
  constructor(zone, delegate = queueScheduler) {
    this.zone = zone;
    this.delegate = delegate;
  }
  now() {
    return this.delegate.now();
  }
  schedule(work, delay, state) {
    const targetZone = this.zone;
    const workInZone = function(state2) {
      targetZone.runGuarded(() => {
        work.apply(this, [state2]);
      });
    };
    return this.delegate.schedule(workInZone, delay, state);
  }
};
var BlockUntilFirstOperator = class {
  zone;
  // @ts-ignore
  task = null;
  constructor(zone) {
    this.zone = zone;
  }
  call(subscriber, source) {
    const unscheduleTask = this.unscheduleTask.bind(this);
    this.task = this.zone.run(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", noop, {}, noop, noop));
    return source.pipe(tap({
      next: unscheduleTask,
      complete: unscheduleTask,
      error: unscheduleTask
    })).subscribe(subscriber).add(unscheduleTask);
  }
  unscheduleTask() {
    setTimeout(() => {
      if (this.task != null && this.task.state === "scheduled") {
        this.task.invoke();
        this.task = null;
      }
    }, 10);
  }
};
var ɵAngularFireSchedulers = class _ɵAngularFireSchedulers {
  ngZone;
  outsideAngular;
  insideAngular;
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.outsideAngular = ngZone.runOutsideAngular(() => new ɵZoneScheduler(Zone.current));
    this.insideAngular = ngZone.run(() => new ɵZoneScheduler(Zone.current, asyncScheduler));
    globalThis.ɵAngularFireScheduler ||= this;
  }
  static ɵfac = function ɵAngularFireSchedulers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ɵAngularFireSchedulers)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ɵAngularFireSchedulers,
    factory: _ɵAngularFireSchedulers.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵAngularFireSchedulers, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
function getSchedulers() {
  const schedulers = globalThis.ɵAngularFireScheduler;
  if (!schedulers) {
    throw new Error(`Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using
provideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).`);
  }
  return schedulers;
}
function runOutsideAngular(fn) {
  return getSchedulers().ngZone.runOutsideAngular(() => fn());
}
function run(fn) {
  return getSchedulers().ngZone.run(() => fn());
}
function keepUnstableUntilFirst(obs$) {
  return ɵkeepUnstableUntilFirstFactory(getSchedulers())(obs$);
}
function ɵkeepUnstableUntilFirstFactory(schedulers) {
  return function keepUnstableUntilFirst2(obs$) {
    obs$ = obs$.lift(new BlockUntilFirstOperator(schedulers.ngZone));
    return obs$.pipe(
      // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
      subscribeOn(schedulers.outsideAngular),
      // Run operators inside the angular zone (e.g. side effects via tap())
      observeOn(schedulers.insideAngular)
      // INVESTIGATE https://github.com/angular/angularfire/pull/2315
      // share()
    );
  };
}
var zoneWrapFn = (it, macrotask) => {
  const _this = void 0;
  return function() {
    const _arguments = arguments;
    if (macrotask) {
      setTimeout(() => {
        if (macrotask.state === "scheduled") {
          macrotask.invoke();
        }
      }, 10);
    }
    return run(() => it.apply(_this, _arguments));
  };
};
var ɵzoneWrap = (it, blockUntilFirst) => {
  return function() {
    let macrotask;
    const _arguments = arguments;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof _arguments[i] === "function") {
        if (blockUntilFirst) {
          macrotask ||= run(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", noop, {}, noop, noop));
        }
        _arguments[i] = zoneWrapFn(_arguments[i], macrotask);
      }
    }
    const ret = runOutsideAngular(() => it.apply(this, _arguments));
    if (!blockUntilFirst) {
      if (ret instanceof Observable) {
        const schedulers = getSchedulers();
        return ret.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular));
      } else {
        return run(() => ret);
      }
    }
    if (ret instanceof Observable) {
      return ret.pipe(keepUnstableUntilFirst);
    } else if (ret instanceof Promise) {
      return run(() => new Promise((resolve, reject) => ret.then((it2) => run(() => resolve(it2)), (reason) => run(() => reject(reason)))));
    } else if (typeof ret === "function" && macrotask) {
      return function() {
        setTimeout(() => {
          if (macrotask && macrotask.state === "scheduled") {
            macrotask.invoke();
          }
        }, 10);
        return ret.apply(this, arguments);
      };
    } else {
      return run(() => ret);
    }
  };
};

export {
  VERSION,
  ɵisSupportedError,
  ɵgetDefaultInstanceOf,
  ɵgetAllInstancesOf,
  ɵAppCheckInstances,
  ɵAPP_CHECK_PROVIDER_NAME,
  ɵAngularFireSchedulers,
  keepUnstableUntilFirst,
  ɵzoneWrap
};
/*! Bundled license information:

firebase/app/dist/esm/index.esm.js:
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
//# sourceMappingURL=chunk-WZ3FA4EX.js.map
