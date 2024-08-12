import {
  AuthInstances
} from "./chunk-KBASI4YR.js";
import {
  AbstractUserDataWriter,
  AggregateField,
  AggregateQuerySnapshot,
  ByteString,
  Bytes,
  CollectionReference,
  DatabaseId,
  DocumentKey,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldPath$1,
  FieldValue,
  FirestoreError,
  GeoPoint,
  LoadBundleTask,
  PersistentCacheIndexManager,
  Query,
  QueryCompositeFilterConstraint,
  QueryConstraint,
  QueryDocumentSnapshot,
  QueryEndAtConstraint,
  QueryFieldFilterConstraint,
  QueryLimitConstraint,
  QueryOrderByConstraint,
  QuerySnapshot,
  QueryStartAtConstraint,
  Se,
  SnapshotMetadata,
  TestingHooks,
  Timestamp,
  Transaction,
  WriteBatch,
  __PRIVATE_AutoId,
  __PRIVATE_EmptyAppCheckTokenProvider,
  __PRIVATE_EmptyAuthCredentialsProvider,
  __PRIVATE_cast,
  __PRIVATE_debugAssert,
  __PRIVATE_isBase64Available,
  __PRIVATE_logWarn,
  __PRIVATE_validateIsNotUsedTogether,
  _internalAggregationQueryToProtoRunAggregationQueryRequest,
  _internalQueryToProtoQueryTarget,
  addDoc,
  aggregateFieldEqual,
  aggregateQuerySnapshotEqual,
  and,
  arrayRemove,
  arrayUnion,
  average,
  clearIndexedDbPersistence,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  count,
  deleteAllPersistentCacheIndexes,
  deleteDoc,
  deleteField,
  disableNetwork,
  disablePersistentCacheIndexAutoCreation,
  doc,
  documentId,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  enableNetwork,
  enablePersistentCacheIndexAutoCreation,
  endAt,
  endBefore,
  ensureFirestoreConfigured,
  executeWrite,
  getAggregateFromServer,
  getCountFromServer,
  getDoc,
  getDocFromCache,
  getDocFromServer,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  getFirestore,
  getPersistentCacheIndexManager,
  increment,
  initializeFirestore,
  limit,
  limitToLast,
  loadBundle,
  memoryEagerGarbageCollector,
  memoryLocalCache,
  memoryLruGarbageCollector,
  namedQuery,
  onSnapshot,
  onSnapshotsInSync,
  or,
  orderBy,
  persistentLocalCache,
  persistentMultipleTabManager,
  persistentSingleTabManager,
  query,
  queryEqual,
  refEqual,
  runTransaction,
  serverTimestamp,
  setDoc,
  setIndexConfiguration,
  setLogLevel,
  snapshotEqual,
  startAfter,
  startAt,
  sum,
  terminate,
  updateDoc,
  waitForPendingWrites,
  where,
  writeBatch
} from "./chunk-FB6SVY76.js";
import "./chunk-U4JTSIC3.js";
import {
  FirebaseApp,
  FirebaseApps
} from "./chunk-FMARJTRA.js";
import {
  VERSION,
  ɵAngularFireSchedulers,
  ɵAppCheckInstances,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-WZ3FA4EX.js";
import {
  registerVersion
} from "./chunk-BCTW7SII.js";
import {
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-O52VBTXF.js";
import "./chunk-ORNLS2RR.js";
import "./chunk-7KUA62RY.js";
import {
  Observable,
  concatMap,
  distinct,
  distinctUntilChanged,
  filter,
  from,
  map,
  pairwise,
  pipe,
  scan,
  startWith,
  timer
} from "./chunk-D4JAG7AO.js";
import "./chunk-WCSART4P.js";
import "./chunk-35ENWJA4.js";

// node_modules/rxfire/firestore/index.esm.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
var DEFAULT_OPTIONS = {
  includeMetadataChanges: false
};
function fromRef(ref, options) {
  if (options === void 0) {
    options = DEFAULT_OPTIONS;
  }
  return new Observable(function(subscriber) {
    var unsubscribe = onSnapshot(ref, options, {
      next: subscriber.next.bind(subscriber),
      error: subscriber.error.bind(subscriber),
      complete: subscriber.complete.bind(subscriber)
    });
    return {
      unsubscribe
    };
  });
}
function doc2(ref) {
  return fromRef(ref, {
    includeMetadataChanges: true
  });
}
function docData(ref, options) {
  if (options === void 0) {
    options = {};
  }
  return doc2(ref).pipe(map(function(snap) {
    return snapToData(snap, options);
  }));
}
function snapToData(snapshot, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var data = snapshot.data(options);
  if (!snapshot.exists() || typeof data !== "object" || data === null || !options.idField) {
    return data;
  }
  return __assign(__assign({}, data), (_a = {}, _a[options.idField] = snapshot.id, _a));
}
var ALL_EVENTS = ["added", "modified", "removed"];
var filterEvents = function(events) {
  return filter(function(changes) {
    var hasChange = false;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      if (events && events.indexOf(change.type) >= 0) {
        hasChange = true;
        break;
      }
    }
    return hasChange;
  });
};
function sliceAndSplice(original, start, deleteCount) {
  var args = [];
  for (var _i = 3; _i < arguments.length; _i++) {
    args[_i - 3] = arguments[_i];
  }
  var returnArray = original.slice();
  returnArray.splice.apply(returnArray, __spreadArray([start, deleteCount], args, false));
  return returnArray;
}
function processIndividualChange(combined, change) {
  switch (change.type) {
    case "added":
      if (combined[change.newIndex] && refEqual(combined[change.newIndex].doc.ref, change.doc.ref)) ;
      else {
        return sliceAndSplice(combined, change.newIndex, 0, change);
      }
      break;
    case "modified":
      if (combined[change.oldIndex] == null || refEqual(combined[change.oldIndex].doc.ref, change.doc.ref)) {
        if (change.oldIndex !== change.newIndex) {
          var copiedArray = combined.slice();
          copiedArray.splice(change.oldIndex, 1);
          copiedArray.splice(change.newIndex, 0, change);
          return copiedArray;
        } else {
          return sliceAndSplice(combined, change.newIndex, 1, change);
        }
      }
      break;
    case "removed":
      if (combined[change.oldIndex] && refEqual(combined[change.oldIndex].doc.ref, change.doc.ref)) {
        return sliceAndSplice(combined, change.oldIndex, 1);
      }
      break;
  }
  return combined;
}
function processDocumentChanges(current, changes, events) {
  if (events === void 0) {
    events = ALL_EVENTS;
  }
  changes.forEach(function(change) {
    if (events.indexOf(change.type) > -1) {
      current = processIndividualChange(current, change);
    }
  });
  return current;
}
var windowwise = function() {
  return pipe(startWith(void 0), pairwise());
};
var metaDataEquals = function(a, b) {
  return JSON.stringify(a.metadata) === JSON.stringify(b.metadata);
};
var filterEmptyUnlessFirst = function() {
  return pipe(windowwise(), filter(function(_a) {
    var prior = _a[0], current = _a[1];
    return current.length > 0 || prior === void 0;
  }), map(function(_a) {
    var current = _a[1];
    return current;
  }));
};
function collectionChanges(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return fromRef(query3, {
    includeMetadataChanges: true
  }).pipe(windowwise(), map(function(_a) {
    var priorSnapshot = _a[0], currentSnapshot = _a[1];
    var docChanges = currentSnapshot.docChanges();
    if (priorSnapshot && !metaDataEquals(priorSnapshot, currentSnapshot)) {
      currentSnapshot.docs.forEach(function(currentDocSnapshot, currentIndex) {
        var currentDocChange = docChanges.find(function(c) {
          return refEqual(c.doc.ref, currentDocSnapshot.ref);
        });
        if (currentDocChange) {
          if (metaDataEquals(currentDocChange.doc, currentDocSnapshot)) {
            return;
          }
        } else {
          var priorDocSnapshot = priorSnapshot === null || priorSnapshot === void 0 ? void 0 : priorSnapshot.docs.find(function(d) {
            return refEqual(d.ref, currentDocSnapshot.ref);
          });
          if (priorDocSnapshot && metaDataEquals(priorDocSnapshot, currentDocSnapshot)) {
            return;
          }
        }
        docChanges.push({
          oldIndex: currentIndex,
          newIndex: currentIndex,
          type: "modified",
          doc: currentDocSnapshot
        });
      });
    }
    return docChanges;
  }), filterEvents(options.events || ALL_EVENTS), filterEmptyUnlessFirst());
}
function collection2(query3) {
  return fromRef(query3, {
    includeMetadataChanges: true
  }).pipe(map(function(changes) {
    return changes.docs;
  }));
}
function sortedChanges(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collectionChanges(query3, options).pipe(scan(function(current, changes) {
    return processDocumentChanges(current, changes, options.events);
  }, []), distinctUntilChanged());
}
function auditTrail(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collectionChanges(query3, options).pipe(scan(function(current, action) {
    return __spreadArray(__spreadArray([], current, true), action, true);
  }, []));
}
function collectionData(query3, options) {
  if (options === void 0) {
    options = {};
  }
  return collection2(query3).pipe(map(function(arr) {
    return arr.map(function(snap) {
      return snapToData(snap, options);
    });
  }));
}
function collectionCountSnap(query3) {
  return from(getCountFromServer(query3));
}
function collectionCount(query3) {
  return collectionCountSnap(query3).pipe(map(function(snap) {
    return snap.data().count;
  }));
}

// node_modules/@angular/fire/fesm2022/angular-fire-firestore.mjs
var Firestore = class {
  constructor(firestore) {
    return firestore;
  }
};
var FIRESTORE_PROVIDER_NAME = "firestore";
var FirestoreInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(FIRESTORE_PROVIDER_NAME);
  }
};
var firestoreInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(FIRESTORE_PROVIDER_NAME))), distinct());
var PROVIDED_FIRESTORE_INSTANCES = new InjectionToken("angularfire2.firestore-instances");
function defaultFirestoreInstanceFactory(provided, defaultApp) {
  const defaultFirestore = ɵgetDefaultInstanceOf(FIRESTORE_PROVIDER_NAME, provided, defaultApp);
  return defaultFirestore && new Firestore(defaultFirestore);
}
function firestoreInstanceFactory(fn) {
  return (zone, injector) => {
    const firestore = zone.runOutsideAngular(() => fn(injector));
    return new Firestore(firestore);
  };
}
var FIRESTORE_INSTANCES_PROVIDER = {
  provide: FirestoreInstances,
  deps: [[new Optional(), PROVIDED_FIRESTORE_INSTANCES]]
};
var DEFAULT_FIRESTORE_INSTANCE_PROVIDER = {
  provide: Firestore,
  useFactory: defaultFirestoreInstanceFactory,
  deps: [[new Optional(), PROVIDED_FIRESTORE_INSTANCES], FirebaseApp]
};
var FirestoreModule = class _FirestoreModule {
  constructor() {
    registerVersion("angularfire", VERSION.full, "fst");
  }
  static ɵfac = function FirestoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirestoreModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FirestoreModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirestoreModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER]
    }]
  }], () => [], null);
})();
function provideFirestore(fn, ...deps) {
  registerVersion("angularfire", VERSION.full, "fst");
  return makeEnvironmentProviders([DEFAULT_FIRESTORE_INSTANCE_PROVIDER, FIRESTORE_INSTANCES_PROVIDER, {
    provide: PROVIDED_FIRESTORE_INSTANCES,
    useFactory: firestoreInstanceFactory(fn),
    multi: true,
    deps: [
      NgZone,
      Injector,
      ɵAngularFireSchedulers,
      FirebaseApps,
      // Firestore+Auth work better if Auth is loaded first
      [new Optional(), AuthInstances],
      [new Optional(), ɵAppCheckInstances],
      ...deps
    ]
  }]);
}
var collectionChanges2 = ɵzoneWrap(collectionChanges, true);
var collectionSnapshots = ɵzoneWrap(collection2, true);
var sortedChanges2 = ɵzoneWrap(sortedChanges, true);
var auditTrail2 = ɵzoneWrap(auditTrail, true);
var collectionData2 = ɵzoneWrap(collectionData, true);
var collectionCountSnap2 = ɵzoneWrap(collectionCountSnap, true);
var collectionCount2 = ɵzoneWrap(collectionCount, true);
var docSnapshots = ɵzoneWrap(doc2, true);
var docData2 = ɵzoneWrap(docData, true);
var snapToData2 = ɵzoneWrap(snapToData, true);
var fromRef2 = ɵzoneWrap(fromRef, true);
var addDoc2 = ɵzoneWrap(addDoc, true);
var aggregateFieldEqual2 = ɵzoneWrap(aggregateFieldEqual, true);
var aggregateQuerySnapshotEqual2 = ɵzoneWrap(aggregateQuerySnapshotEqual, true);
var and2 = ɵzoneWrap(and, true);
var arrayRemove2 = ɵzoneWrap(arrayRemove, true);
var arrayUnion2 = ɵzoneWrap(arrayUnion, true);
var average2 = ɵzoneWrap(average, true);
var clearIndexedDbPersistence2 = ɵzoneWrap(clearIndexedDbPersistence, true);
var collection3 = ɵzoneWrap(collection, true);
var collectionGroup2 = ɵzoneWrap(collectionGroup, true);
var connectFirestoreEmulator2 = ɵzoneWrap(connectFirestoreEmulator, true);
var count2 = ɵzoneWrap(count, true);
var deleteAllPersistentCacheIndexes2 = ɵzoneWrap(deleteAllPersistentCacheIndexes, true);
var deleteDoc2 = ɵzoneWrap(deleteDoc, true);
var deleteField2 = ɵzoneWrap(deleteField, true);
var disableNetwork2 = ɵzoneWrap(disableNetwork, true);
var disablePersistentCacheIndexAutoCreation2 = ɵzoneWrap(disablePersistentCacheIndexAutoCreation, true);
var doc3 = ɵzoneWrap(doc, true);
var documentId2 = ɵzoneWrap(documentId, true);
var enableIndexedDbPersistence2 = ɵzoneWrap(enableIndexedDbPersistence, true);
var enableMultiTabIndexedDbPersistence2 = ɵzoneWrap(enableMultiTabIndexedDbPersistence, true);
var enableNetwork2 = ɵzoneWrap(enableNetwork, true);
var enablePersistentCacheIndexAutoCreation2 = ɵzoneWrap(enablePersistentCacheIndexAutoCreation, true);
var endAt2 = ɵzoneWrap(endAt, true);
var endBefore2 = ɵzoneWrap(endBefore, true);
var getAggregateFromServer2 = ɵzoneWrap(getAggregateFromServer, true);
var getCountFromServer2 = ɵzoneWrap(getCountFromServer, true);
var getDoc2 = ɵzoneWrap(getDoc, true);
var getDocFromCache2 = ɵzoneWrap(getDocFromCache, true);
var getDocFromServer2 = ɵzoneWrap(getDocFromServer, true);
var getDocs2 = ɵzoneWrap(getDocs, true);
var getDocsFromCache2 = ɵzoneWrap(getDocsFromCache, true);
var getDocsFromServer2 = ɵzoneWrap(getDocsFromServer, true);
var getFirestore2 = ɵzoneWrap(getFirestore, true);
var getPersistentCacheIndexManager2 = ɵzoneWrap(getPersistentCacheIndexManager, true);
var increment2 = ɵzoneWrap(increment, true);
var initializeFirestore2 = ɵzoneWrap(initializeFirestore, true);
var limit2 = ɵzoneWrap(limit, true);
var limitToLast2 = ɵzoneWrap(limitToLast, true);
var loadBundle2 = ɵzoneWrap(loadBundle, true);
var memoryEagerGarbageCollector2 = ɵzoneWrap(memoryEagerGarbageCollector, true);
var memoryLocalCache2 = ɵzoneWrap(memoryLocalCache, true);
var memoryLruGarbageCollector2 = ɵzoneWrap(memoryLruGarbageCollector, true);
var namedQuery2 = ɵzoneWrap(namedQuery, true);
var onSnapshot2 = ɵzoneWrap(onSnapshot, true);
var onSnapshotsInSync2 = ɵzoneWrap(onSnapshotsInSync, true);
var or2 = ɵzoneWrap(or, true);
var orderBy2 = ɵzoneWrap(orderBy, true);
var persistentLocalCache2 = ɵzoneWrap(persistentLocalCache, true);
var persistentMultipleTabManager2 = ɵzoneWrap(persistentMultipleTabManager, true);
var persistentSingleTabManager2 = ɵzoneWrap(persistentSingleTabManager, true);
var query2 = ɵzoneWrap(query, true);
var queryEqual2 = ɵzoneWrap(queryEqual, true);
var refEqual2 = ɵzoneWrap(refEqual, true);
var runTransaction2 = ɵzoneWrap(runTransaction, true);
var serverTimestamp2 = ɵzoneWrap(serverTimestamp, true);
var setDoc2 = ɵzoneWrap(setDoc, true);
var setIndexConfiguration2 = ɵzoneWrap(setIndexConfiguration, true);
var setLogLevel2 = ɵzoneWrap(setLogLevel, true);
var snapshotEqual2 = ɵzoneWrap(snapshotEqual, true);
var startAfter2 = ɵzoneWrap(startAfter, true);
var startAt2 = ɵzoneWrap(startAt, true);
var sum2 = ɵzoneWrap(sum, true);
var terminate2 = ɵzoneWrap(terminate, true);
var updateDoc2 = ɵzoneWrap(updateDoc, true);
var waitForPendingWrites2 = ɵzoneWrap(waitForPendingWrites, true);
var where2 = ɵzoneWrap(where, true);
var writeBatch2 = ɵzoneWrap(writeBatch, true);
export {
  AbstractUserDataWriter,
  AggregateField,
  AggregateQuerySnapshot,
  Bytes,
  Se as CACHE_SIZE_UNLIMITED,
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldValue,
  Firestore,
  FirestoreError,
  FirestoreInstances,
  FirestoreModule,
  GeoPoint,
  LoadBundleTask,
  PersistentCacheIndexManager,
  Query,
  QueryCompositeFilterConstraint,
  QueryConstraint,
  QueryDocumentSnapshot,
  QueryEndAtConstraint,
  QueryFieldFilterConstraint,
  QueryLimitConstraint,
  QueryOrderByConstraint,
  QuerySnapshot,
  QueryStartAtConstraint,
  SnapshotMetadata,
  Timestamp,
  Transaction,
  WriteBatch,
  __PRIVATE_AutoId as _AutoId,
  ByteString as _ByteString,
  DatabaseId as _DatabaseId,
  DocumentKey as _DocumentKey,
  __PRIVATE_EmptyAppCheckTokenProvider as _EmptyAppCheckTokenProvider,
  __PRIVATE_EmptyAuthCredentialsProvider as _EmptyAuthCredentialsProvider,
  FieldPath$1 as _FieldPath,
  TestingHooks as _TestingHooks,
  __PRIVATE_cast as _cast,
  __PRIVATE_debugAssert as _debugAssert,
  _internalAggregationQueryToProtoRunAggregationQueryRequest,
  _internalQueryToProtoQueryTarget,
  __PRIVATE_isBase64Available as _isBase64Available,
  __PRIVATE_logWarn as _logWarn,
  __PRIVATE_validateIsNotUsedTogether as _validateIsNotUsedTogether,
  addDoc2 as addDoc,
  aggregateFieldEqual2 as aggregateFieldEqual,
  aggregateQuerySnapshotEqual2 as aggregateQuerySnapshotEqual,
  and2 as and,
  arrayRemove2 as arrayRemove,
  arrayUnion2 as arrayUnion,
  auditTrail2 as auditTrail,
  average2 as average,
  clearIndexedDbPersistence2 as clearIndexedDbPersistence,
  collection3 as collection,
  collectionChanges2 as collectionChanges,
  collectionCount2 as collectionCount,
  collectionCountSnap2 as collectionCountSnap,
  collectionData2 as collectionData,
  collectionGroup2 as collectionGroup,
  collectionSnapshots,
  connectFirestoreEmulator2 as connectFirestoreEmulator,
  count2 as count,
  deleteAllPersistentCacheIndexes2 as deleteAllPersistentCacheIndexes,
  deleteDoc2 as deleteDoc,
  deleteField2 as deleteField,
  disableNetwork2 as disableNetwork,
  disablePersistentCacheIndexAutoCreation2 as disablePersistentCacheIndexAutoCreation,
  doc3 as doc,
  docData2 as docData,
  docSnapshots,
  documentId2 as documentId,
  enableIndexedDbPersistence2 as enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence2 as enableMultiTabIndexedDbPersistence,
  enableNetwork2 as enableNetwork,
  enablePersistentCacheIndexAutoCreation2 as enablePersistentCacheIndexAutoCreation,
  endAt2 as endAt,
  endBefore2 as endBefore,
  ensureFirestoreConfigured,
  executeWrite,
  firestoreInstance$,
  fromRef2 as fromRef,
  getAggregateFromServer2 as getAggregateFromServer,
  getCountFromServer2 as getCountFromServer,
  getDoc2 as getDoc,
  getDocFromCache2 as getDocFromCache,
  getDocFromServer2 as getDocFromServer,
  getDocs2 as getDocs,
  getDocsFromCache2 as getDocsFromCache,
  getDocsFromServer2 as getDocsFromServer,
  getFirestore2 as getFirestore,
  getPersistentCacheIndexManager2 as getPersistentCacheIndexManager,
  increment2 as increment,
  initializeFirestore2 as initializeFirestore,
  limit2 as limit,
  limitToLast2 as limitToLast,
  loadBundle2 as loadBundle,
  memoryEagerGarbageCollector2 as memoryEagerGarbageCollector,
  memoryLocalCache2 as memoryLocalCache,
  memoryLruGarbageCollector2 as memoryLruGarbageCollector,
  namedQuery2 as namedQuery,
  onSnapshot2 as onSnapshot,
  onSnapshotsInSync2 as onSnapshotsInSync,
  or2 as or,
  orderBy2 as orderBy,
  persistentLocalCache2 as persistentLocalCache,
  persistentMultipleTabManager2 as persistentMultipleTabManager,
  persistentSingleTabManager2 as persistentSingleTabManager,
  provideFirestore,
  query2 as query,
  queryEqual2 as queryEqual,
  refEqual2 as refEqual,
  runTransaction2 as runTransaction,
  serverTimestamp2 as serverTimestamp,
  setDoc2 as setDoc,
  setIndexConfiguration2 as setIndexConfiguration,
  setLogLevel2 as setLogLevel,
  snapToData2 as snapToData,
  snapshotEqual2 as snapshotEqual,
  sortedChanges2 as sortedChanges,
  startAfter2 as startAfter,
  startAt2 as startAt,
  sum2 as sum,
  terminate2 as terminate,
  updateDoc2 as updateDoc,
  waitForPendingWrites2 as waitForPendingWrites,
  where2 as where,
  writeBatch2 as writeBatch
};
/*! Bundled license information:

rxfire/firestore/index.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
   * Copyright 2023 Google LLC
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
//# sourceMappingURL=@angular_fire_firestore.js.map
