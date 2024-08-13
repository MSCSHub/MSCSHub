import {
  Component,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  _getProvider,
  _registerComponent,
  _removeServiceInstance,
  createMockUserToken,
  deepEqual,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  getUA,
  isIndexedDBAvailable,
  isSafari,
  registerVersion
} from "./chunk-BCTW7SII.js";
import {
  __async,
  __superGet
} from "./chunk-35ENWJA4.js";

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bloom_blob_es2018 = {};
var Integer;
var Md5;
(function() {
  var h;
  function k2(f, a) {
    function c() {
    }
    c.prototype = a.prototype;
    f.D = a.prototype;
    f.prototype = new c();
    f.prototype.constructor = f;
    f.C = function(d, e, g) {
      for (var b2 = Array(arguments.length - 2), r = 2; r < arguments.length; r++) b2[r - 2] = arguments[r];
      return a.prototype[e].apply(d, b2);
    };
  }
  function l() {
    this.blockSize = -1;
  }
  function m() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.B = Array(this.blockSize);
    this.o = this.h = 0;
    this.s();
  }
  k2(m, l);
  m.prototype.s = function() {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  function n(f, a, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof a) for (var e = 0; 16 > e; ++e) d[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
    else for (e = 0; 16 > e; ++e) d[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
    a = f.g[0];
    c = f.g[1];
    e = f.g[2];
    var g = f.g[3];
    var b2 = a + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + d[2] + 606105819 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + d[3] + 3250441966 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + d[6] + 2821735955 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + d[7] + 4249261313 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + d[10] + 4294925233 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + d[11] + 2304563134 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + d[14] + 2792965006 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + d[15] + 1236535329 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + d[6] + 3225465664 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + d[11] + 643717713 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + d[0] + 3921069994 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + d[10] + 38016083 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + d[15] + 3634488961 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + d[4] + 3889429448 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + d[14] + 3275163606 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + d[3] + 4107603335 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + d[8] + 1163531501 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + d[2] + 4243563512 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + d[7] + 1735328473 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + d[12] + 2368359562 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + d[11] + 1839030562 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + d[14] + 4259657740 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + d[7] + 4139469664 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + d[10] + 3200236656 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + d[3] + 3572445317 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + d[6] + 76029189 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + d[12] + 3873151461 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + d[15] + 530742520 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + d[2] + 3299628645 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + d[7] + 1126891415 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + d[5] + 4237533241 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + d[3] + 2399980690 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + d[1] + 2240044497 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + d[15] + 4264355552 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + d[13] + 1309151649 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + d[11] + 3174756917 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + d[9] + 3951481745 & 4294967295;
    f.g[0] = f.g[0] + a & 4294967295;
    f.g[1] = f.g[1] + (e + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
    f.g[2] = f.g[2] + e & 4294967295;
    f.g[3] = f.g[3] + g & 4294967295;
  }
  m.prototype.u = function(f, a) {
    void 0 === a && (a = f.length);
    for (var c = a - this.blockSize, d = this.B, e = this.h, g = 0; g < a; ) {
      if (0 == e) for (; g <= c; ) n(this, f, g), g += this.blockSize;
      if ("string" === typeof f) for (; g < a; ) {
        if (d[e++] = f.charCodeAt(g++), e == this.blockSize) {
          n(this, d);
          e = 0;
          break;
        }
      }
      else for (; g < a; ) if (d[e++] = f[g++], e == this.blockSize) {
        n(this, d);
        e = 0;
        break;
      }
    }
    this.h = e;
    this.o += a;
  };
  m.prototype.v = function() {
    var f = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    f[0] = 128;
    for (var a = 1; a < f.length - 8; ++a) f[a] = 0;
    var c = 8 * this.o;
    for (a = f.length - 8; a < f.length; ++a) f[a] = c & 255, c /= 256;
    this.u(f);
    f = Array(16);
    for (a = c = 0; 4 > a; ++a) for (var d = 0; 32 > d; d += 8) f[c++] = this.g[a] >>> d & 255;
    return f;
  };
  function p(f, a) {
    var c = q2;
    return Object.prototype.hasOwnProperty.call(c, f) ? c[f] : c[f] = a(f);
  }
  function t(f, a) {
    this.h = a;
    for (var c = [], d = true, e = f.length - 1; 0 <= e; e--) {
      var g = f[e] | 0;
      d && g == a || (c[e] = g, d = false);
    }
    this.g = c;
  }
  var q2 = {};
  function u(f) {
    return -128 <= f && 128 > f ? p(f, function(a) {
      return new t([a | 0], 0 > a ? -1 : 0);
    }) : new t([f | 0], 0 > f ? -1 : 0);
  }
  function v2(f) {
    if (isNaN(f) || !isFinite(f)) return w;
    if (0 > f) return x2(v2(-f));
    for (var a = [], c = 1, d = 0; f >= c; d++) a[d] = f / c | 0, c *= 4294967296;
    return new t(a, 0);
  }
  function y(f, a) {
    if (0 == f.length) throw Error("number format error: empty string");
    a = a || 10;
    if (2 > a || 36 < a) throw Error("radix out of range: " + a);
    if ("-" == f.charAt(0)) return x2(y(f.substring(1), a));
    if (0 <= f.indexOf("-")) throw Error('number format error: interior "-" character');
    for (var c = v2(Math.pow(a, 8)), d = w, e = 0; e < f.length; e += 8) {
      var g = Math.min(8, f.length - e), b2 = parseInt(f.substring(e, e + g), a);
      8 > g ? (g = v2(Math.pow(a, g)), d = d.j(g).add(v2(b2))) : (d = d.j(c), d = d.add(v2(b2)));
    }
    return d;
  }
  var w = u(0), z2 = u(1), A = u(16777216);
  h = t.prototype;
  h.m = function() {
    if (B2(this)) return -x2(this).m();
    for (var f = 0, a = 1, c = 0; c < this.g.length; c++) {
      var d = this.i(c);
      f += (0 <= d ? d : 4294967296 + d) * a;
      a *= 4294967296;
    }
    return f;
  };
  h.toString = function(f) {
    f = f || 10;
    if (2 > f || 36 < f) throw Error("radix out of range: " + f);
    if (C2(this)) return "0";
    if (B2(this)) return "-" + x2(this).toString(f);
    for (var a = v2(Math.pow(f, 6)), c = this, d = ""; ; ) {
      var e = D2(c, a).g;
      c = F2(c, e.j(a));
      var g = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(f);
      c = e;
      if (C2(c)) return g + d;
      for (; 6 > g.length; ) g = "0" + g;
      d = g + d;
    }
  };
  h.i = function(f) {
    return 0 > f ? 0 : f < this.g.length ? this.g[f] : this.h;
  };
  function C2(f) {
    if (0 != f.h) return false;
    for (var a = 0; a < f.g.length; a++) if (0 != f.g[a]) return false;
    return true;
  }
  function B2(f) {
    return -1 == f.h;
  }
  h.l = function(f) {
    f = F2(this, f);
    return B2(f) ? -1 : C2(f) ? 0 : 1;
  };
  function x2(f) {
    for (var a = f.g.length, c = [], d = 0; d < a; d++) c[d] = ~f.g[d];
    return new t(c, ~f.h).add(z2);
  }
  h.abs = function() {
    return B2(this) ? x2(this) : this;
  };
  h.add = function(f) {
    for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0, e = 0; e <= a; e++) {
      var g = d + (this.i(e) & 65535) + (f.i(e) & 65535), b2 = (g >>> 16) + (this.i(e) >>> 16) + (f.i(e) >>> 16);
      d = b2 >>> 16;
      g &= 65535;
      b2 &= 65535;
      c[e] = b2 << 16 | g;
    }
    return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
  };
  function F2(f, a) {
    return f.add(x2(a));
  }
  h.j = function(f) {
    if (C2(this) || C2(f)) return w;
    if (B2(this)) return B2(f) ? x2(this).j(x2(f)) : x2(x2(this).j(f));
    if (B2(f)) return x2(this.j(x2(f)));
    if (0 > this.l(A) && 0 > f.l(A)) return v2(this.m() * f.m());
    for (var a = this.g.length + f.g.length, c = [], d = 0; d < 2 * a; d++) c[d] = 0;
    for (d = 0; d < this.g.length; d++) for (var e = 0; e < f.g.length; e++) {
      var g = this.i(d) >>> 16, b2 = this.i(d) & 65535, r = f.i(e) >>> 16, E = f.i(e) & 65535;
      c[2 * d + 2 * e] += b2 * E;
      G2(c, 2 * d + 2 * e);
      c[2 * d + 2 * e + 1] += g * E;
      G2(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 1] += b2 * r;
      G2(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 2] += g * r;
      G2(c, 2 * d + 2 * e + 2);
    }
    for (d = 0; d < a; d++) c[d] = c[2 * d + 1] << 16 | c[2 * d];
    for (d = a; d < 2 * a; d++) c[d] = 0;
    return new t(c, 0);
  };
  function G2(f, a) {
    for (; (f[a] & 65535) != f[a]; ) f[a + 1] += f[a] >>> 16, f[a] &= 65535, a++;
  }
  function H2(f, a) {
    this.g = f;
    this.h = a;
  }
  function D2(f, a) {
    if (C2(a)) throw Error("division by zero");
    if (C2(f)) return new H2(w, w);
    if (B2(f)) return a = D2(x2(f), a), new H2(x2(a.g), x2(a.h));
    if (B2(a)) return a = D2(f, x2(a)), new H2(x2(a.g), a.h);
    if (30 < f.g.length) {
      if (B2(f) || B2(a)) throw Error("slowDivide_ only works with positive integers.");
      for (var c = z2, d = a; 0 >= d.l(f); ) c = I(c), d = I(d);
      var e = J2(c, 1), g = J2(d, 1);
      d = J2(d, 2);
      for (c = J2(c, 2); !C2(d); ) {
        var b2 = g.add(d);
        0 >= b2.l(f) && (e = e.add(c), g = b2);
        d = J2(d, 1);
        c = J2(c, 1);
      }
      a = F2(f, e.j(a));
      return new H2(e, a);
    }
    for (e = w; 0 <= f.l(a); ) {
      c = Math.max(1, Math.floor(f.m() / a.m()));
      d = Math.ceil(Math.log(c) / Math.LN2);
      d = 48 >= d ? 1 : Math.pow(2, d - 48);
      g = v2(c);
      for (b2 = g.j(a); B2(b2) || 0 < b2.l(f); ) c -= d, g = v2(c), b2 = g.j(a);
      C2(g) && (g = z2);
      e = e.add(g);
      f = F2(f, b2);
    }
    return new H2(e, f);
  }
  h.A = function(f) {
    return D2(this, f).h;
  };
  h.and = function(f) {
    for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) & f.i(d);
    return new t(c, this.h & f.h);
  };
  h.or = function(f) {
    for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) | f.i(d);
    return new t(c, this.h | f.h);
  };
  h.xor = function(f) {
    for (var a = Math.max(this.g.length, f.g.length), c = [], d = 0; d < a; d++) c[d] = this.i(d) ^ f.i(d);
    return new t(c, this.h ^ f.h);
  };
  function I(f) {
    for (var a = f.g.length + 1, c = [], d = 0; d < a; d++) c[d] = f.i(d) << 1 | f.i(d - 1) >>> 31;
    return new t(c, f.h);
  }
  function J2(f, a) {
    var c = a >> 5;
    a %= 32;
    for (var d = f.g.length - c, e = [], g = 0; g < d; g++) e[g] = 0 < a ? f.i(g + c) >>> a | f.i(g + c + 1) << 32 - a : f.i(g + c);
    return new t(e, f.h);
  }
  m.prototype.digest = m.prototype.v;
  m.prototype.reset = m.prototype.s;
  m.prototype.update = m.prototype.u;
  Md5 = bloom_blob_es2018.Md5 = m;
  t.prototype.add = t.prototype.add;
  t.prototype.multiply = t.prototype.j;
  t.prototype.modulo = t.prototype.A;
  t.prototype.compare = t.prototype.l;
  t.prototype.toNumber = t.prototype.m;
  t.prototype.toString = t.prototype.toString;
  t.prototype.getBits = t.prototype.i;
  t.fromNumber = v2;
  t.fromString = y;
  Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var webchannel_blob_es2018 = {};
var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
  var h, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b2, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b2] = c.value;
    return a;
  };
  function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal2 && commonjsGlobal2];
    for (var b2 = 0; b2 < a.length; ++b2) {
      var c = a[b2];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a, b2) {
    if (b2) a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b2 = b2(d);
      b2 != d && null != b2 && aa(c, a, {
        configurable: true,
        writable: true,
        value: b2
      });
    }
  }
  function ea(a, b2) {
    a instanceof String && (a += "");
    var c = 0, d = false, e = {
      next: function() {
        if (!d && c < a.length) {
          var f = c++;
          return {
            value: b2(f, a[f]),
            done: false
          };
        }
        d = true;
        return {
          done: true,
          value: void 0
        };
      }
    };
    e[Symbol.iterator] = function() {
      return e;
    };
    return e;
  }
  da("Array.prototype.values", function(a) {
    return a ? a : function() {
      return ea(this, function(b2, c) {
        return c;
      });
    };
  });
  var fa = fa || {}, k2 = this || self;
  function ha(a) {
    var b2 = typeof a;
    b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
    return "array" == b2 || "object" == b2 && "number" == typeof a.length;
  }
  function n(a) {
    var b2 = typeof a;
    return "object" == b2 && null != a || "function" == b2;
  }
  function ia(a, b2, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ja(a, b2, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b2, e);
      };
    }
    return function() {
      return a.apply(b2, arguments);
    };
  }
  function p(a, b2, c) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return p.apply(null, arguments);
  }
  function ka(a, b2) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function r(a, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a.aa = b2.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Qb = function(d, e, f) {
      for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++) g[m - 2] = arguments[m];
      return b2.prototype[e].apply(d, g);
    };
  }
  function la(a) {
    const b2 = a.length;
    if (0 < b2) {
      const c = Array(b2);
      for (let d = 0; d < b2; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function ma(a, b2) {
    for (let c = 1; c < arguments.length; c++) {
      const d = arguments[c];
      if (ha(d)) {
        const e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (let g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  class na {
    constructor(a, b2) {
      this.i = a;
      this.j = b2;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a;
      0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
      return a;
    }
  }
  function t(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function u() {
    var a = k2.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function oa(a) {
    oa[" "](a);
    return a;
  }
  oa[" "] = function() {
  };
  var pa = -1 != u().indexOf("Gecko") && !(-1 != u().toLowerCase().indexOf("webkit") && -1 == u().indexOf("Edge")) && !(-1 != u().indexOf("Trident") || -1 != u().indexOf("MSIE")) && -1 == u().indexOf("Edge");
  function qa(a, b2, c) {
    for (const d in a) b2.call(c, a[d], d, a);
  }
  function ra(a, b2) {
    for (const c in a) b2.call(void 0, a[c], c, a);
  }
  function sa(a) {
    const b2 = {};
    for (const c in a) b2[c] = a[c];
    return b2;
  }
  const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function ua(a, b2) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < ta.length; f++) c = ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function va(a) {
    var b2 = 1;
    a = a.split(":");
    const c = [];
    for (; 0 < b2 && a.length; ) c.push(a.shift()), b2--;
    a.length && c.push(a.join(":"));
    return c;
  }
  function wa(a) {
    k2.setTimeout(() => {
      throw a;
    }, 0);
  }
  function xa() {
    var a = za;
    let b2 = null;
    a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
    return b2;
  }
  class Aa {
    constructor() {
      this.h = this.g = null;
    }
    add(a, b2) {
      const c = Ba.get();
      c.set(a, b2);
      this.h ? this.h.next = c : this.g = c;
      this.h = c;
    }
  }
  var Ba = new na(() => new Ca(), (a) => a.reset());
  class Ca {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a, b2) {
      this.h = a;
      this.g = b2;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let x2, y = false, za = new Aa(), Ea = () => {
    const a = k2.Promise.resolve(void 0);
    x2 = () => {
      a.then(Da);
    };
  };
  var Da = () => {
    for (var a; a = xa(); ) {
      try {
        a.h.call(a.g);
      } catch (c) {
        wa(c);
      }
      var b2 = Ba;
      b2.j(a);
      100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
    }
    y = false;
  };
  function z2() {
    this.s = this.s;
    this.C = this.C;
  }
  z2.prototype.s = false;
  z2.prototype.ma = function() {
    this.s || (this.s = true, this.N());
  };
  z2.prototype.N = function() {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function A(a, b2) {
    this.type = a;
    this.g = this.target = b2;
    this.defaultPrevented = false;
  }
  A.prototype.h = function() {
    this.defaultPrevented = true;
  };
  var Fa = function() {
    if (!k2.addEventListener || !Object.defineProperty) return false;
    var a = false, b2 = Object.defineProperty({}, "passive", {
      get: function() {
        a = true;
      }
    });
    try {
      const c = () => {
      };
      k2.addEventListener("test", c, b2);
      k2.removeEventListener("test", c, b2);
    } catch (c) {
    }
    return a;
  }();
  function C2(a, b2) {
    A.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.g = b2;
      if (b2 = a.relatedTarget) {
        if (pa) {
          a: {
            try {
              oa(b2.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b2 = null);
        }
      } else "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
      this.relatedTarget = b2;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && C2.aa.h.call(this);
    }
  }
  r(C2, A);
  var Ga = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  C2.prototype.h = function() {
    C2.aa.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var D2 = "closure_listenable_" + (1e6 * Math.random() | 0);
  var Ha = 0;
  function Ia(a, b2, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b2;
    this.type = c;
    this.capture = !!d;
    this.ha = e;
    this.key = ++Ha;
    this.da = this.fa = false;
  }
  function Ja(a) {
    a.da = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.ha = null;
  }
  function Ka(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  Ka.prototype.add = function(a, b2, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var g = La(a, b2, d, e);
    -1 < g ? (b2 = a[g], c || (b2.fa = false)) : (b2 = new Ia(b2, this.src, f, !!d, e), b2.fa = c, a.push(b2));
    return b2;
  };
  function Ma(a, b2) {
    var c = b2.type;
    if (c in a.g) {
      var d = a.g[c], e = Array.prototype.indexOf.call(d, b2, void 0), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (Ja(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
    }
  }
  function La(a, b2, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.da && f.listener == b2 && f.capture == !!c && f.ha == d) return e;
    }
    return -1;
  }
  var Na = "closure_lm_" + (1e6 * Math.random() | 0), Oa = {};
  function Qa(a, b2, c, d, e) {
    if (d && d.once) return Ra(a, b2, c, d, e);
    if (Array.isArray(b2)) {
      for (var f = 0; f < b2.length; f++) Qa(a, b2[f], c, d, e);
      return null;
    }
    c = Sa(c);
    return a && a[D2] ? a.K(b2, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b2, c, false, d, e);
  }
  function Ta(a, b2, c, d, e, f) {
    if (!b2) throw Error("Invalid event type");
    var g = n(e) ? !!e.capture : !!e, m = Ua(a);
    m || (a[Na] = m = new Ka(a));
    c = m.add(b2, c, d, g, f);
    if (c.proxy) return c;
    d = Va();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Fa || (e = g), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Wa(b2.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return c;
  }
  function Va() {
    function a(c) {
      return b2.call(a.src, a.listener, c);
    }
    const b2 = Xa;
    return a;
  }
  function Ra(a, b2, c, d, e) {
    if (Array.isArray(b2)) {
      for (var f = 0; f < b2.length; f++) Ra(a, b2[f], c, d, e);
      return null;
    }
    c = Sa(c);
    return a && a[D2] ? a.L(b2, c, n(d) ? !!d.capture : !!d, e) : Ta(a, b2, c, true, d, e);
  }
  function Ya(a, b2, c, d, e) {
    if (Array.isArray(b2)) for (var f = 0; f < b2.length; f++) Ya(a, b2[f], c, d, e);
    else (d = n(d) ? !!d.capture : !!d, c = Sa(c), a && a[D2]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f = a.g[b2], c = La(f, c, d, e), -1 < c && (Ja(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b2], a.h--)))) : a && (a = Ua(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = La(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && Za(c));
  }
  function Za(a) {
    if ("number" !== typeof a && a && !a.da) {
      var b2 = a.src;
      if (b2 && b2[D2]) Ma(b2.i, a);
      else {
        var c = a.type, d = a.proxy;
        b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(Wa(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c = Ua(b2)) ? (Ma(c, a), 0 == c.h && (c.src = null, b2[Na] = null)) : Ja(a);
      }
    }
  }
  function Wa(a) {
    return a in Oa ? Oa[a] : Oa[a] = "on" + a;
  }
  function Xa(a, b2) {
    if (a.da) a = true;
    else {
      b2 = new C2(b2, this);
      var c = a.listener, d = a.ha || a.src;
      a.fa && Za(a);
      a = c.call(d, b2);
    }
    return a;
  }
  function Ua(a) {
    a = a[Na];
    return a instanceof Ka ? a : null;
  }
  var $a = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function Sa(a) {
    if ("function" === typeof a) return a;
    a[$a] || (a[$a] = function(b2) {
      return a.handleEvent(b2);
    });
    return a[$a];
  }
  function E() {
    z2.call(this);
    this.i = new Ka(this);
    this.M = this;
    this.F = null;
  }
  r(E, z2);
  E.prototype[D2] = true;
  E.prototype.removeEventListener = function(a, b2, c, d) {
    Ya(this, a, b2, c, d);
  };
  function F2(a, b2) {
    var c, d = a.F;
    if (d) for (c = []; d; d = d.F) c.push(d);
    a = a.M;
    d = b2.type || b2;
    if ("string" === typeof b2) b2 = new A(b2, a);
    else if (b2 instanceof A) b2.target = b2.target || a;
    else {
      var e = b2;
      b2 = new A(d, a);
      ua(b2, e);
    }
    e = true;
    if (c) for (var f = c.length - 1; 0 <= f; f--) {
      var g = b2.g = c[f];
      e = ab(g, d, true, b2) && e;
    }
    g = b2.g = a;
    e = ab(g, d, true, b2) && e;
    e = ab(g, d, false, b2) && e;
    if (c) for (f = 0; f < c.length; f++) g = b2.g = c[f], e = ab(g, d, false, b2) && e;
  }
  E.prototype.N = function() {
    E.aa.N.call(this);
    if (this.i) {
      var a = this.i, c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) Ja(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.F = null;
  };
  E.prototype.K = function(a, b2, c, d) {
    return this.i.add(String(a), b2, false, c, d);
  };
  E.prototype.L = function(a, b2, c, d) {
    return this.i.add(String(a), b2, true, c, d);
  };
  function ab(a, b2, c, d) {
    b2 = a.i.g[String(b2)];
    if (!b2) return true;
    b2 = b2.concat();
    for (var e = true, f = 0; f < b2.length; ++f) {
      var g = b2[f];
      if (g && !g.da && g.capture == c) {
        var m = g.listener, q2 = g.ha || g.src;
        g.fa && Ma(a.i, g);
        e = false !== m.call(q2, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function bb(a, b2, c) {
    if ("function" === typeof a) c && (a = p(a, c));
    else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b2) ? -1 : k2.setTimeout(a, b2 || 0);
  }
  function cb(a) {
    a.g = bb(() => {
      a.g = null;
      a.i && (a.i = false, cb(a));
    }, a.l);
    const b2 = a.h;
    a.h = null;
    a.m.apply(null, b2);
  }
  class eb extends z2 {
    constructor(a, b2) {
      super();
      this.m = a;
      this.l = b2;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    j(a) {
      this.h = arguments;
      this.g ? this.i = true : cb(this);
    }
    N() {
      super.N();
      this.g && (k2.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
    }
  }
  function G2(a) {
    z2.call(this);
    this.h = a;
    this.g = {};
  }
  r(G2, z2);
  var fb = [];
  function gb(a) {
    qa(a.g, function(b2, c) {
      this.g.hasOwnProperty(c) && Za(b2);
    }, a);
    a.g = {};
  }
  G2.prototype.N = function() {
    G2.aa.N.call(this);
    gb(this);
  };
  G2.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var hb = k2.JSON.stringify;
  var ib = k2.JSON.parse;
  var jb = class {
    stringify(a) {
      return k2.JSON.stringify(a, void 0);
    }
    parse(a) {
      return k2.JSON.parse(a, void 0);
    }
  };
  function kb() {
  }
  kb.prototype.h = null;
  function lb(a) {
    return a.h || (a.h = a.i());
  }
  function mb() {
  }
  var H2 = {
    OPEN: "a",
    kb: "b",
    Ja: "c",
    wb: "d"
  };
  function nb() {
    A.call(this, "d");
  }
  r(nb, A);
  function ob() {
    A.call(this, "c");
  }
  r(ob, A);
  var I = {}, pb = null;
  function qb() {
    return pb = pb || new E();
  }
  I.La = "serverreachability";
  function rb(a) {
    A.call(this, I.La, a);
  }
  r(rb, A);
  function J2(a) {
    const b2 = qb();
    F2(b2, new rb(b2));
  }
  I.STAT_EVENT = "statevent";
  function sb(a, b2) {
    A.call(this, I.STAT_EVENT, a);
    this.stat = b2;
  }
  r(sb, A);
  function K2(a) {
    const b2 = qb();
    F2(b2, new sb(b2, a));
  }
  I.Ma = "timingevent";
  function tb(a, b2) {
    A.call(this, I.Ma, a);
    this.size = b2;
  }
  r(tb, A);
  function ub(a, b2) {
    if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
    return k2.setTimeout(function() {
      a();
    }, b2);
  }
  function vb() {
    this.g = true;
  }
  vb.prototype.xa = function() {
    this.g = false;
  };
  function wb(a, b2, c, d, e, f) {
    a.info(function() {
      if (a.g) {
        if (f) {
          var g = "";
          for (var m = f.split("&"), q2 = 0; q2 < m.length; q2++) {
            var l = m[q2].split("=");
            if (1 < l.length) {
              var v2 = l[0];
              l = l[1];
              var w = v2.split("_");
              g = 2 <= w.length && "type" == w[1] ? g + (v2 + "=" + l + "&") : g + (v2 + "=redacted&");
            }
          }
        } else g = null;
      } else g = f;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + g;
    });
  }
  function xb(a, b2, c, d, e, f, g) {
    a.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + g;
    });
  }
  function L2(a, b2, c, d) {
    a.info(function() {
      return "XMLHTTP TEXT (" + b2 + "): " + yb(a, c) + (d ? " " + d : "");
    });
  }
  function zb(a, b2) {
    a.info(function() {
      return "TIMEOUT: " + b2;
    });
  }
  vb.prototype.info = function() {
  };
  function yb(a, b2) {
    if (!a.g) return b2;
    if (!b2) return null;
    try {
      var c = JSON.parse(b2);
      if (c) {
        for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if ("noop" != f && "stop" != f && "close" != f) for (var g = 1; g < e.length; g++) e[g] = "";
            }
          }
        }
      }
      return hb(c);
    } catch (m) {
      return b2;
    }
  }
  var Ab = {
    NO_ERROR: 0,
    gb: 1,
    tb: 2,
    sb: 3,
    nb: 4,
    rb: 5,
    ub: 6,
    Ia: 7,
    TIMEOUT: 8,
    xb: 9
  };
  var Bb = {
    lb: "complete",
    Hb: "success",
    Ja: "error",
    Ia: "abort",
    zb: "ready",
    Ab: "readystatechange",
    TIMEOUT: "timeout",
    vb: "incrementaldata",
    yb: "progress",
    ob: "downloadprogress",
    Pb: "uploadprogress"
  };
  var Cb;
  function Db() {
  }
  r(Db, kb);
  Db.prototype.g = function() {
    return new XMLHttpRequest();
  };
  Db.prototype.i = function() {
    return {};
  };
  Cb = new Db();
  function M2(a, b2, c, d) {
    this.j = a;
    this.i = b2;
    this.l = c;
    this.R = d || 1;
    this.U = new G2(this);
    this.I = 45e3;
    this.H = null;
    this.o = false;
    this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
    this.D = [];
    this.g = null;
    this.C = 0;
    this.s = this.u = null;
    this.X = -1;
    this.J = false;
    this.O = 0;
    this.M = null;
    this.W = this.K = this.T = this.P = false;
    this.h = new Eb();
  }
  function Eb() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var Fb = {}, Gb = {};
  function Hb(a, b2, c) {
    a.L = 1;
    a.v = Ib(N2(b2));
    a.m = c;
    a.P = true;
    Jb(a, null);
  }
  function Jb(a, b2) {
    a.F = Date.now();
    Kb(a);
    a.A = N2(a.v);
    var c = a.A, d = a.R;
    Array.isArray(d) || (d = [String(d)]);
    Lb(c.i, "t", d);
    a.C = 0;
    c = a.j.J;
    a.h = new Eb();
    a.g = Mb(a.j, c ? b2 : null, !a.m);
    0 < a.O && (a.M = new eb(p(a.Y, a, a.g), a.O));
    b2 = a.U;
    c = a.g;
    d = a.ca;
    var e = "readystatechange";
    Array.isArray(e) || (e && (fb[0] = e.toString()), e = fb);
    for (var f = 0; f < e.length; f++) {
      var g = Qa(c, e[f], d || b2.handleEvent, false, b2.h || b2);
      if (!g) break;
      b2.g[g.key] = g;
    }
    b2 = a.H ? sa(a.H) : {};
    a.m ? (a.u || (a.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.A, a.u, a.m, b2)) : (a.u = "GET", a.g.ea(a.A, a.u, null, b2));
    J2();
    wb(a.i, a.u, a.A, a.l, a.R, a.m);
  }
  M2.prototype.ca = function(a) {
    a = a.target;
    const b2 = this.M;
    b2 && 3 == P(a) ? b2.j() : this.Y(a);
  };
  M2.prototype.Y = function(a) {
    try {
      if (a == this.g) a: {
        const w = P(this.g);
        var b2 = this.g.Ba();
        const O2 = this.g.Z();
        if (!(3 > w) && (3 != w || this.g && (this.h.h || this.g.oa() || Nb(this.g)))) {
          this.J || 4 != w || 7 == b2 || (8 == b2 || 0 >= O2 ? J2(3) : J2(2));
          Ob(this);
          var c = this.g.Z();
          this.X = c;
          b: if (Pb(this)) {
            var d = Nb(this.g);
            a = "";
            var e = d.length, f = 4 == P(this.g);
            if (!this.h.i) {
              if ("undefined" === typeof TextDecoder) {
                Q2(this);
                Qb(this);
                var g = "";
                break b;
              }
              this.h.i = new k2.TextDecoder();
            }
            for (b2 = 0; b2 < e; b2++) this.h.h = true, a += this.h.i.decode(d[b2], {
              stream: !(f && b2 == e - 1)
            });
            d.length = 0;
            this.h.g += a;
            this.C = 0;
            g = this.h.g;
          } else g = this.g.oa();
          this.o = 200 == c;
          xb(this.i, this.u, this.A, this.l, this.R, w, c);
          if (this.o) {
            if (this.T && !this.K) {
              b: {
                if (this.g) {
                  var m, q2 = this.g;
                  if ((m = q2.g ? q2.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !t(m)) {
                    var l = m;
                    break b;
                  }
                }
                l = null;
              }
              if (c = l) L2(this.i, this.l, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, Rb(this, c);
              else {
                this.o = false;
                this.s = 3;
                K2(12);
                Q2(this);
                Qb(this);
                break a;
              }
            }
            if (this.P) {
              c = true;
              let B2;
              for (; !this.J && this.C < g.length; ) if (B2 = Sb(this, g), B2 == Gb) {
                4 == w && (this.s = 4, K2(14), c = false);
                L2(this.i, this.l, null, "[Incomplete Response]");
                break;
              } else if (B2 == Fb) {
                this.s = 4;
                K2(15);
                L2(this.i, this.l, g, "[Invalid Chunk]");
                c = false;
                break;
              } else L2(this.i, this.l, B2, null), Rb(this, B2);
              Pb(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0);
              4 != w || 0 != g.length || this.h.h || (this.s = 1, K2(16), c = false);
              this.o = this.o && c;
              if (!c) L2(this.i, this.l, g, "[Invalid Chunked Response]"), Q2(this), Qb(this);
              else if (0 < g.length && !this.W) {
                this.W = true;
                var v2 = this.j;
                v2.g == this && v2.ba && !v2.M && (v2.j.info("Great, no buffering proxy detected. Bytes received: " + g.length), Tb(v2), v2.M = true, K2(11));
              }
            } else L2(this.i, this.l, g, null), Rb(this, g);
            4 == w && Q2(this);
            this.o && !this.J && (4 == w ? Ub(this.j, this) : (this.o = false, Kb(this)));
          } else Vb(this.g), 400 == c && 0 < g.indexOf("Unknown SID") ? (this.s = 3, K2(12)) : (this.s = 0, K2(13)), Q2(this), Qb(this);
        }
      }
    } catch (w) {
    } finally {
    }
  };
  function Pb(a) {
    return a.g ? "GET" == a.u && 2 != a.L && a.j.Ca : false;
  }
  function Sb(a, b2) {
    var c = a.C, d = b2.indexOf("\n", c);
    if (-1 == d) return Gb;
    c = Number(b2.substring(c, d));
    if (isNaN(c)) return Fb;
    d += 1;
    if (d + c > b2.length) return Gb;
    b2 = b2.slice(d, d + c);
    a.C = d + c;
    return b2;
  }
  M2.prototype.cancel = function() {
    this.J = true;
    Q2(this);
  };
  function Kb(a) {
    a.S = Date.now() + a.I;
    Wb(a, a.I);
  }
  function Wb(a, b2) {
    if (null != a.B) throw Error("WatchDog timer not null");
    a.B = ub(p(a.ba, a), b2);
  }
  function Ob(a) {
    a.B && (k2.clearTimeout(a.B), a.B = null);
  }
  M2.prototype.ba = function() {
    this.B = null;
    const a = Date.now();
    0 <= a - this.S ? (zb(this.i, this.A), 2 != this.L && (J2(), K2(17)), Q2(this), this.s = 2, Qb(this)) : Wb(this, this.S - a);
  };
  function Qb(a) {
    0 == a.j.G || a.J || Ub(a.j, a);
  }
  function Q2(a) {
    Ob(a);
    var b2 = a.M;
    b2 && "function" == typeof b2.ma && b2.ma();
    a.M = null;
    gb(a.U);
    a.g && (b2 = a.g, a.g = null, b2.abort(), b2.ma());
  }
  function Rb(a, b2) {
    try {
      var c = a.j;
      if (0 != c.G && (c.g == a || Xb(c.h, a))) {
        if (!a.K && Xb(c.h, a) && 3 == c.G) {
          try {
            var d = c.Da.g.parse(b2);
          } catch (l) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0]) a: {
              if (!c.u) {
                if (c.g) if (c.g.F + 3e3 < a.F) Yb(c), Zb(c);
                else break a;
                $b(c);
                K2(18);
              }
            }
            else c.za = e[1], 0 < c.za - c.T && 37500 > e[2] && c.F && 0 == c.v && !c.C && (c.C = ub(p(c.Za, c), 6e3));
            if (1 >= ac(c.h) && c.ca) {
              try {
                c.ca();
              } catch (l) {
              }
              c.ca = void 0;
            }
          } else R(c, 11);
        } else if ((a.K || c.g == a) && Yb(c), !t(b2)) for (e = c.Da.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
          let l = e[b2];
          c.T = l[0];
          l = l[1];
          if (2 == c.G) {
            if ("c" == l[0]) {
              c.K = l[1];
              c.ia = l[2];
              const v2 = l[3];
              null != v2 && (c.la = v2, c.j.info("VER=" + c.la));
              const w = l[4];
              null != w && (c.Aa = w, c.j.info("SVER=" + c.Aa));
              const O2 = l[5];
              null != O2 && "number" === typeof O2 && 0 < O2 && (d = 1.5 * O2, c.L = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const B2 = a.g;
              if (B2) {
                const ya = B2.g ? B2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (ya) {
                  var f = d.h;
                  f.g || -1 == ya.indexOf("spdy") && -1 == ya.indexOf("quic") && -1 == ya.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (bc(f, f.h), f.h = null));
                }
                if (d.D) {
                  const db = B2.g ? B2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  db && (d.ya = db, S2(d.I, d.D, db));
                }
              }
              c.G = 3;
              c.l && c.l.ua();
              c.ba && (c.R = Date.now() - a.F, c.j.info("Handshake RTT: " + c.R + "ms"));
              d = c;
              var g = a;
              d.qa = cc(d, d.J ? d.ia : null, d.W);
              if (g.K) {
                dc(d.h, g);
                var m = g, q2 = d.L;
                q2 && (m.I = q2);
                m.B && (Ob(m), Kb(m));
                d.g = g;
              } else ec(d);
              0 < c.i.length && fc(c);
            } else "stop" != l[0] && "close" != l[0] || R(c, 7);
          } else 3 == c.G && ("stop" == l[0] || "close" == l[0] ? "stop" == l[0] ? R(c, 7) : gc(c) : "noop" != l[0] && c.l && c.l.ta(l), c.v = 0);
        }
      }
      J2(4);
    } catch (l) {
    }
  }
  var hc = class {
    constructor(a, b2) {
      this.g = a;
      this.map = b2;
    }
  };
  function ic(a) {
    this.l = a || 10;
    k2.PerformanceNavigationTiming ? (a = k2.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k2.chrome && k2.chrome.loadTimes && k2.chrome.loadTimes() && k2.chrome.loadTimes().wasFetchedViaSpdy);
    this.j = a ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = /* @__PURE__ */ new Set());
    this.h = null;
    this.i = [];
  }
  function jc(a) {
    return a.h ? true : a.g ? a.g.size >= a.j : false;
  }
  function ac(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function Xb(a, b2) {
    return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
  }
  function bc(a, b2) {
    a.g ? a.g.add(b2) : a.h = b2;
  }
  function dc(a, b2) {
    a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
  }
  ic.prototype.cancel = function() {
    this.i = kc(this);
    if (this.h) this.h.cancel(), this.h = null;
    else if (this.g && 0 !== this.g.size) {
      for (const a of this.g.values()) a.cancel();
      this.g.clear();
    }
  };
  function kc(a) {
    if (null != a.h) return a.i.concat(a.h.D);
    if (null != a.g && 0 !== a.g.size) {
      let b2 = a.i;
      for (const c of a.g.values()) b2 = b2.concat(c.D);
      return b2;
    }
    return la(a.i);
  }
  function lc(a) {
    if (a.V && "function" == typeof a.V) return a.V();
    if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
    if ("string" === typeof a) return a.split("");
    if (ha(a)) {
      for (var b2 = [], c = a.length, d = 0; d < c; d++) b2.push(a[d]);
      return b2;
    }
    b2 = [];
    c = 0;
    for (d in a) b2[c++] = a[d];
    return b2;
  }
  function mc(a) {
    if (a.na && "function" == typeof a.na) return a.na();
    if (!a.V || "function" != typeof a.V) {
      if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (ha(a) || "string" === typeof a) {
          var b2 = [];
          a = a.length;
          for (var c = 0; c < a; c++) b2.push(c);
          return b2;
        }
        b2 = [];
        c = 0;
        for (const d in a) b2[c++] = d;
        return b2;
      }
    }
  }
  function nc(a, b2) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b2, void 0);
    else if (ha(a) || "string" === typeof a) Array.prototype.forEach.call(a, b2, void 0);
    else for (var c = mc(a), d = lc(a), e = d.length, f = 0; f < e; f++) b2.call(void 0, d[f], c && c[f], a);
  }
  var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function pc(a, b2) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function T(a) {
    this.g = this.o = this.j = "";
    this.s = null;
    this.m = this.l = "";
    this.h = false;
    if (a instanceof T) {
      this.h = a.h;
      qc(this, a.j);
      this.o = a.o;
      this.g = a.g;
      rc(this, a.s);
      this.l = a.l;
      var b2 = a.i;
      var c = new sc();
      c.i = b2.i;
      b2.g && (c.g = new Map(b2.g), c.h = b2.h);
      tc(this, c);
      this.m = a.m;
    } else a && (b2 = String(a).match(oc)) ? (this.h = false, qc(this, b2[1] || "", true), this.o = uc(b2[2] || ""), this.g = uc(b2[3] || "", true), rc(this, b2[4]), this.l = uc(b2[5] || "", true), tc(this, b2[6] || "", true), this.m = uc(b2[7] || "")) : (this.h = false, this.i = new sc(null, this.h));
  }
  T.prototype.toString = function() {
    var a = [], b2 = this.j;
    b2 && a.push(vc(b2, wc, true), ":");
    var c = this.g;
    if (c || "file" == b2) a.push("//"), (b2 = this.o) && a.push(vc(b2, wc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
    if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(vc(c, "/" == c.charAt(0) ? xc : yc, true));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.m) && a.push("#", vc(c, zc));
    return a.join("");
  };
  function N2(a) {
    return new T(a);
  }
  function qc(a, b2, c) {
    a.j = c ? uc(b2, true) : b2;
    a.j && (a.j = a.j.replace(/:$/, ""));
  }
  function rc(a, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || 0 > b2) throw Error("Bad port number " + b2);
      a.s = b2;
    } else a.s = null;
  }
  function tc(a, b2, c) {
    b2 instanceof sc ? (a.i = b2, Ac(a.i, a.h)) : (c || (b2 = vc(b2, Bc)), a.i = new sc(b2, a.h));
  }
  function S2(a, b2, c) {
    a.i.set(b2, c);
  }
  function Ib(a) {
    S2(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
    return a;
  }
  function uc(a, b2) {
    return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function vc(a, b2, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b2, Cc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function Cc(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var wc = /[#\/\?@]/g, yc = /[#\?:]/g, xc = /[#\?]/g, Bc = /[#\?@]/g, zc = /#/g;
  function sc(a, b2) {
    this.h = this.g = null;
    this.i = a || null;
    this.j = !!b2;
  }
  function U2(a) {
    a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && pc(a.i, function(b2, c) {
      a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
    }));
  }
  h = sc.prototype;
  h.add = function(a, b2) {
    U2(this);
    this.i = null;
    a = V(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b2);
    this.h += 1;
    return this;
  };
  function Dc(a, b2) {
    U2(a);
    b2 = V(a, b2);
    a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
  }
  function Ec(a, b2) {
    U2(a);
    b2 = V(a, b2);
    return a.g.has(b2);
  }
  h.forEach = function(a, b2) {
    U2(this);
    this.g.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b2, e, d, this);
      }, this);
    }, this);
  };
  h.na = function() {
    U2(this);
    const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
    for (let d = 0; d < b2.length; d++) {
      const e = a[d];
      for (let f = 0; f < e.length; f++) c.push(b2[d]);
    }
    return c;
  };
  h.V = function(a) {
    U2(this);
    let b2 = [];
    if ("string" === typeof a) Ec(this, a) && (b2 = b2.concat(this.g.get(V(this, a))));
    else {
      a = Array.from(this.g.values());
      for (let c = 0; c < a.length; c++) b2 = b2.concat(a[c]);
    }
    return b2;
  };
  h.set = function(a, b2) {
    U2(this);
    this.i = null;
    a = V(this, a);
    Ec(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b2]);
    this.h += 1;
    return this;
  };
  h.get = function(a, b2) {
    if (!a) return b2;
    a = this.V(a);
    return 0 < a.length ? String(a[0]) : b2;
  };
  function Lb(a, b2, c) {
    Dc(a, b2);
    0 < c.length && (a.i = null, a.g.set(V(a, b2), la(c)), a.h += c.length);
  }
  h.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a = [], b2 = Array.from(this.g.keys());
    for (var c = 0; c < b2.length; c++) {
      var d = b2[c];
      const f = encodeURIComponent(String(d)), g = this.V(d);
      for (d = 0; d < g.length; d++) {
        var e = f;
        "" !== g[d] && (e += "=" + encodeURIComponent(String(g[d])));
        a.push(e);
      }
    }
    return this.i = a.join("&");
  };
  function V(a, b2) {
    b2 = String(b2);
    a.j && (b2 = b2.toLowerCase());
    return b2;
  }
  function Ac(a, b2) {
    b2 && !a.j && (U2(a), a.i = null, a.g.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (Dc(this, d), Lb(this, e, c));
    }, a));
    a.j = b2;
  }
  function Fc(a, b2) {
    const c = new vb();
    if (k2.Image) {
      const d = new Image();
      d.onload = ka(W2, c, "TestLoadImage: loaded", true, b2, d);
      d.onerror = ka(W2, c, "TestLoadImage: error", false, b2, d);
      d.onabort = ka(W2, c, "TestLoadImage: abort", false, b2, d);
      d.ontimeout = ka(W2, c, "TestLoadImage: timeout", false, b2, d);
      k2.setTimeout(function() {
        if (d.ontimeout) d.ontimeout();
      }, 1e4);
      d.src = a;
    } else b2(false);
  }
  function Gc(a, b2) {
    const c = new vb(), d = new AbortController(), e = setTimeout(() => {
      d.abort();
      W2(c, "TestPingServer: timeout", false, b2);
    }, 1e4);
    fetch(a, {
      signal: d.signal
    }).then((f) => {
      clearTimeout(e);
      f.ok ? W2(c, "TestPingServer: ok", true, b2) : W2(c, "TestPingServer: server error", false, b2);
    }).catch(() => {
      clearTimeout(e);
      W2(c, "TestPingServer: error", false, b2);
    });
  }
  function W2(a, b2, c, d, e) {
    try {
      e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
    } catch (f) {
    }
  }
  function Hc() {
    this.g = new jb();
  }
  function Ic(a, b2, c) {
    const d = c || "";
    try {
      nc(a, function(e, f) {
        let g = e;
        n(e) && (g = hb(e));
        b2.push(d + f + "=" + encodeURIComponent(g));
      });
    } catch (e) {
      throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
    }
  }
  function Jc(a) {
    this.l = a.Ub || null;
    this.j = a.eb || false;
  }
  r(Jc, kb);
  Jc.prototype.g = function() {
    return new Kc(this.l, this.j);
  };
  Jc.prototype.i = /* @__PURE__ */ function(a) {
    return function() {
      return a;
    };
  }({});
  function Kc(a, b2) {
    E.call(this);
    this.D = a;
    this.o = b2;
    this.m = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.u = new Headers();
    this.h = null;
    this.B = "GET";
    this.A = "";
    this.g = false;
    this.v = this.j = this.l = null;
  }
  r(Kc, E);
  h = Kc.prototype;
  h.open = function(a, b2) {
    if (0 != this.readyState) throw this.abort(), Error("Error reopening a connection");
    this.B = a;
    this.A = b2;
    this.readyState = 1;
    Lc(this);
  };
  h.send = function(a) {
    if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
    this.g = true;
    const b2 = {
      headers: this.u,
      method: this.B,
      credentials: this.m,
      cache: void 0
    };
    a && (b2.body = a);
    (this.D || k2).fetch(new Request(this.A, b2)).then(this.Sa.bind(this), this.ga.bind(this));
  };
  h.abort = function() {
    this.response = this.responseText = "";
    this.u = new Headers();
    this.status = 0;
    this.j && this.j.cancel("Request was aborted.").catch(() => {
    });
    1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, Mc(this));
    this.readyState = 0;
  };
  h.Sa = function(a) {
    if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Lc(this)), this.g && (this.readyState = 3, Lc(this), this.g))) if ("arraybuffer" === this.responseType) a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
    else if ("undefined" !== typeof k2.ReadableStream && "body" in a) {
      this.j = a.body.getReader();
      if (this.o) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else this.response = this.responseText = "", this.v = new TextDecoder();
      Nc(this);
    } else a.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function Nc(a) {
    a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a));
  }
  h.Pa = function(a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value);
      else if (!this.o) {
        var b2 = a.value ? a.value : new Uint8Array(0);
        if (b2 = this.v.decode(b2, {
          stream: !a.done
        })) this.response = this.responseText += b2;
      }
      a.done ? Mc(this) : Lc(this);
      3 == this.readyState && Nc(this);
    }
  };
  h.Ra = function(a) {
    this.g && (this.response = this.responseText = a, Mc(this));
  };
  h.Qa = function(a) {
    this.g && (this.response = a, Mc(this));
  };
  h.ga = function() {
    this.g && Mc(this);
  };
  function Mc(a) {
    a.readyState = 4;
    a.l = null;
    a.j = null;
    a.v = null;
    Lc(a);
  }
  h.setRequestHeader = function(a, b2) {
    this.u.append(a, b2);
  };
  h.getResponseHeader = function(a) {
    return this.h ? this.h.get(a.toLowerCase()) || "" : "";
  };
  h.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const a = [], b2 = this.h.entries();
    for (var c = b2.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
    return a.join("\r\n");
  };
  function Lc(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(Kc.prototype, "withCredentials", {
    get: function() {
      return "include" === this.m;
    },
    set: function(a) {
      this.m = a ? "include" : "same-origin";
    }
  });
  function Oc(a) {
    let b2 = "";
    qa(a, function(c, d) {
      b2 += d;
      b2 += ":";
      b2 += c;
      b2 += "\r\n";
    });
    return b2;
  }
  function Pc(a, b2, c) {
    a: {
      for (d in c) {
        var d = false;
        break a;
      }
      d = true;
    }
    d || (c = Oc(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : S2(a, b2, c));
  }
  function X2(a) {
    E.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.o = a || null;
    this.h = false;
    this.v = this.g = null;
    this.D = "";
    this.m = 0;
    this.l = "";
    this.j = this.B = this.u = this.A = false;
    this.I = null;
    this.H = "";
    this.J = false;
  }
  r(X2, E);
  var Qc = /^https?$/i, Rc = ["POST", "PUT"];
  h = X2.prototype;
  h.Ha = function(a) {
    this.J = a;
  };
  h.ea = function(a, b2, c, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
    b2 = b2 ? b2.toUpperCase() : "GET";
    this.D = a;
    this.l = "";
    this.m = 0;
    this.A = false;
    this.h = true;
    this.g = this.o ? this.o.g() : Cb.g();
    this.v = this.o ? lb(this.o) : lb(Cb);
    this.g.onreadystatechange = p(this.Ea, this);
    try {
      this.B = true, this.g.open(b2, String(a), true), this.B = false;
    } catch (f) {
      Sc(this, f);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d) if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
    else if ("function" === typeof d.keys && "function" === typeof d.get) for (const f of d.keys()) c.set(f, d.get(f));
    else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
    e = k2.FormData && a instanceof k2.FormData;
    !(0 <= Array.prototype.indexOf.call(Rc, b2, void 0)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [f, g] of c) this.g.setRequestHeader(f, g);
    this.H && (this.g.responseType = this.H);
    "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Tc(this), this.u = true, this.g.send(a), this.u = false;
    } catch (f) {
      Sc(this, f);
    }
  };
  function Sc(a, b2) {
    a.h = false;
    a.g && (a.j = true, a.g.abort(), a.j = false);
    a.l = b2;
    a.m = 5;
    Uc(a);
    Vc(a);
  }
  function Uc(a) {
    a.A || (a.A = true, F2(a, "complete"), F2(a, "error"));
  }
  h.abort = function(a) {
    this.g && this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false, this.m = a || 7, F2(this, "complete"), F2(this, "abort"), Vc(this));
  };
  h.N = function() {
    this.g && (this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false), Vc(this, true));
    X2.aa.N.call(this);
  };
  h.Ea = function() {
    this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
  };
  h.bb = function() {
    Wc(this);
  };
  function Wc(a) {
    if (a.h && "undefined" != typeof fa && (!a.v[1] || 4 != P(a) || 2 != a.Z())) {
      if (a.u && 4 == P(a)) bb(a.Ea, 0, a);
      else if (F2(a, "readystatechange"), 4 == P(a)) {
        a.h = false;
        try {
          const g = a.Z();
          a: switch (g) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b2 = true;
              break a;
            default:
              b2 = false;
          }
          var c;
          if (!(c = b2)) {
            var d;
            if (d = 0 === g) {
              var e = String(a.D).match(oc)[1] || null;
              !e && k2.self && k2.self.location && (e = k2.self.location.protocol.slice(0, -1));
              d = !Qc.test(e ? e.toLowerCase() : "");
            }
            c = d;
          }
          if (c) F2(a, "complete"), F2(a, "success");
          else {
            a.m = 6;
            try {
              var f = 2 < P(a) ? a.g.statusText : "";
            } catch (m) {
              f = "";
            }
            a.l = f + " [" + a.Z() + "]";
            Uc(a);
          }
        } finally {
          Vc(a);
        }
      }
    }
  }
  function Vc(a, b2) {
    if (a.g) {
      Tc(a);
      const c = a.g, d = a.v[0] ? () => {
      } : null;
      a.g = null;
      a.v = null;
      b2 || F2(a, "ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
      }
    }
  }
  function Tc(a) {
    a.I && (k2.clearTimeout(a.I), a.I = null);
  }
  h.isActive = function() {
    return !!this.g;
  };
  function P(a) {
    return a.g ? a.g.readyState : 0;
  }
  h.Z = function() {
    try {
      return 2 < P(this) ? this.g.status : -1;
    } catch (a) {
      return -1;
    }
  };
  h.oa = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a) {
      return "";
    }
  };
  h.Oa = function(a) {
    if (this.g) {
      var b2 = this.g.responseText;
      a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
      return ib(b2);
    }
  };
  function Nb(a) {
    try {
      if (!a.g) return null;
      if ("response" in a.g) return a.g.response;
      switch (a.H) {
        case "":
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b2) {
      return null;
    }
  }
  function Vb(a) {
    const b2 = {};
    a = (a.g && 2 <= P(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
    for (let d = 0; d < a.length; d++) {
      if (t(a[d])) continue;
      var c = va(a[d]);
      const e = c[0];
      c = c[1];
      if ("string" !== typeof c) continue;
      c = c.trim();
      const f = b2[e] || [];
      b2[e] = f;
      f.push(c);
    }
    ra(b2, function(d) {
      return d.join(", ");
    });
  }
  h.Ba = function() {
    return this.m;
  };
  h.Ka = function() {
    return "string" === typeof this.l ? this.l : String(this.l);
  };
  function Xc(a, b2, c) {
    return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
  }
  function Yc(a) {
    this.Aa = 0;
    this.i = [];
    this.j = new vb();
    this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null;
    this.Ya = this.U = 0;
    this.Va = Xc("failFast", false, a);
    this.F = this.C = this.u = this.s = this.l = null;
    this.X = true;
    this.za = this.T = -1;
    this.Y = this.v = this.B = 0;
    this.Ta = Xc("baseRetryDelayMs", 5e3, a);
    this.cb = Xc("retryDelaySeedMs", 1e4, a);
    this.Wa = Xc("forwardChannelMaxRetries", 2, a);
    this.wa = Xc("forwardChannelRequestTimeoutMs", 2e4, a);
    this.pa = a && a.xmlHttpFactory || void 0;
    this.Xa = a && a.Tb || void 0;
    this.Ca = a && a.useFetchStreams || false;
    this.L = void 0;
    this.J = a && a.supportsCrossDomainXhr || false;
    this.K = "";
    this.h = new ic(a && a.concurrentRequestLimit);
    this.Da = new Hc();
    this.P = a && a.fastHandshake || false;
    this.O = a && a.encodeInitMessageHeaders || false;
    this.P && this.O && (this.O = false);
    this.Ua = a && a.Rb || false;
    a && a.xa && this.j.xa();
    a && a.forceLongPolling && (this.X = false);
    this.ba = !this.P && this.X && a && a.detectBufferingProxy || false;
    this.ja = void 0;
    a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.ja = a.longPollingTimeout);
    this.ca = void 0;
    this.R = 0;
    this.M = false;
    this.ka = this.A = null;
  }
  h = Yc.prototype;
  h.la = 8;
  h.G = 1;
  h.connect = function(a, b2, c, d) {
    K2(0);
    this.W = a;
    this.H = b2 || {};
    c && void 0 !== d && (this.H.OSID = c, this.H.OAID = d);
    this.F = this.X;
    this.I = cc(this, null, this.W);
    fc(this);
  };
  function gc(a) {
    Zc(a);
    if (3 == a.G) {
      var b2 = a.U++, c = N2(a.I);
      S2(c, "SID", a.K);
      S2(c, "RID", b2);
      S2(c, "TYPE", "terminate");
      $c(a, c);
      b2 = new M2(a, a.j, b2);
      b2.L = 2;
      b2.v = Ib(N2(c));
      c = false;
      if (k2.navigator && k2.navigator.sendBeacon) try {
        c = k2.navigator.sendBeacon(b2.v.toString(), "");
      } catch (d) {
      }
      !c && k2.Image && (new Image().src = b2.v, c = true);
      c || (b2.g = Mb(b2.j, null), b2.g.ea(b2.v));
      b2.F = Date.now();
      Kb(b2);
    }
    ad(a);
  }
  function Zb(a) {
    a.g && (Tb(a), a.g.cancel(), a.g = null);
  }
  function Zc(a) {
    Zb(a);
    a.u && (k2.clearTimeout(a.u), a.u = null);
    Yb(a);
    a.h.cancel();
    a.s && ("number" === typeof a.s && k2.clearTimeout(a.s), a.s = null);
  }
  function fc(a) {
    if (!jc(a.h) && !a.s) {
      a.s = true;
      var b2 = a.Ga;
      x2 || Ea();
      y || (x2(), y = true);
      za.add(b2, a);
      a.B = 0;
    }
  }
  function bd(a, b2) {
    if (ac(a.h) >= a.h.j - (a.s ? 1 : 0)) return false;
    if (a.s) return a.i = b2.D.concat(a.i), true;
    if (1 == a.G || 2 == a.G || a.B >= (a.Va ? 0 : a.Wa)) return false;
    a.s = ub(p(a.Ga, a, b2), cd(a, a.B));
    a.B++;
    return true;
  }
  h.Ga = function(a) {
    if (this.s) if (this.s = null, 1 == this.G) {
      if (!a) {
        this.U = Math.floor(1e5 * Math.random());
        a = this.U++;
        const e = new M2(this, this.j, a);
        let f = this.o;
        this.S && (f ? (f = sa(f), ua(f, this.S)) : f = this.S);
        null !== this.m || this.O || (e.H = f, f = null);
        if (this.P) a: {
          var b2 = 0;
          for (var c = 0; c < this.i.length; c++) {
            b: {
              var d = this.i[c];
              if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
                d = d.length;
                break b;
              }
              d = void 0;
            }
            if (void 0 === d) break;
            b2 += d;
            if (4096 < b2) {
              b2 = c;
              break a;
            }
            if (4096 === b2 || c === this.i.length - 1) {
              b2 = c + 1;
              break a;
            }
          }
          b2 = 1e3;
        }
        else b2 = 1e3;
        b2 = dd(this, e, b2);
        c = N2(this.I);
        S2(c, "RID", a);
        S2(c, "CVER", 22);
        this.D && S2(c, "X-HTTP-Session-Id", this.D);
        $c(this, c);
        f && (this.O ? b2 = "headers=" + encodeURIComponent(String(Oc(f))) + "&" + b2 : this.m && Pc(c, this.m, f));
        bc(this.h, e);
        this.Ua && S2(c, "TYPE", "init");
        this.P ? (S2(c, "$req", b2), S2(c, "SID", "null"), e.T = true, Hb(e, c, null)) : Hb(e, c, b2);
        this.G = 2;
      }
    } else 3 == this.G && (a ? ed(this, a) : 0 == this.i.length || jc(this.h) || ed(this));
  };
  function ed(a, b2) {
    var c;
    b2 ? c = b2.l : c = a.U++;
    const d = N2(a.I);
    S2(d, "SID", a.K);
    S2(d, "RID", c);
    S2(d, "AID", a.T);
    $c(a, d);
    a.m && a.o && Pc(d, a.m, a.o);
    c = new M2(a, a.j, c, a.B + 1);
    null === a.m && (c.H = a.o);
    b2 && (a.i = b2.D.concat(a.i));
    b2 = dd(a, c, 1e3);
    c.I = Math.round(0.5 * a.wa) + Math.round(0.5 * a.wa * Math.random());
    bc(a.h, c);
    Hb(c, d, b2);
  }
  function $c(a, b2) {
    a.H && qa(a.H, function(c, d) {
      S2(b2, d, c);
    });
    a.l && nc({}, function(c, d) {
      S2(b2, d, c);
    });
  }
  function dd(a, b2, c) {
    c = Math.min(a.i.length, c);
    var d = a.l ? p(a.l.Na, a.l, a) : null;
    a: {
      var e = a.i;
      let f = -1;
      for (; ; ) {
        const g = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].g, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
        let m = true;
        for (let q2 = 0; q2 < c; q2++) {
          let l = e[q2].g;
          const v2 = e[q2].map;
          l -= f;
          if (0 > l) f = Math.max(0, e[q2].g - 100), m = false;
          else try {
            Ic(v2, g, "req" + l + "_");
          } catch (w) {
            d && d(v2);
          }
        }
        if (m) {
          d = g.join("&");
          break a;
        }
      }
    }
    a = a.i.splice(0, c);
    b2.D = a;
    return d;
  }
  function ec(a) {
    if (!a.g && !a.u) {
      a.Y = 1;
      var b2 = a.Fa;
      x2 || Ea();
      y || (x2(), y = true);
      za.add(b2, a);
      a.v = 0;
    }
  }
  function $b(a) {
    if (a.g || a.u || 3 <= a.v) return false;
    a.Y++;
    a.u = ub(p(a.Fa, a), cd(a, a.v));
    a.v++;
    return true;
  }
  h.Fa = function() {
    this.u = null;
    fd(this);
    if (this.ba && !(this.M || null == this.g || 0 >= this.R)) {
      var a = 2 * this.R;
      this.j.info("BP detection timer enabled: " + a);
      this.A = ub(p(this.ab, this), a);
    }
  };
  h.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = false, this.M = true, K2(10), Zb(this), fd(this));
  };
  function Tb(a) {
    null != a.A && (k2.clearTimeout(a.A), a.A = null);
  }
  function fd(a) {
    a.g = new M2(a, a.j, "rpc", a.Y);
    null === a.m && (a.g.H = a.o);
    a.g.O = 0;
    var b2 = N2(a.qa);
    S2(b2, "RID", "rpc");
    S2(b2, "SID", a.K);
    S2(b2, "AID", a.T);
    S2(b2, "CI", a.F ? "0" : "1");
    !a.F && a.ja && S2(b2, "TO", a.ja);
    S2(b2, "TYPE", "xmlhttp");
    $c(a, b2);
    a.m && a.o && Pc(b2, a.m, a.o);
    a.L && (a.g.I = a.L);
    var c = a.g;
    a = a.ia;
    c.L = 1;
    c.v = Ib(N2(b2));
    c.m = null;
    c.P = true;
    Jb(c, a);
  }
  h.Za = function() {
    null != this.C && (this.C = null, Zb(this), $b(this), K2(19));
  };
  function Yb(a) {
    null != a.C && (k2.clearTimeout(a.C), a.C = null);
  }
  function Ub(a, b2) {
    var c = null;
    if (a.g == b2) {
      Yb(a);
      Tb(a);
      a.g = null;
      var d = 2;
    } else if (Xb(a.h, b2)) c = b2.D, dc(a.h, b2), d = 1;
    else return;
    if (0 != a.G) {
      if (b2.o) {
        if (1 == d) {
          c = b2.m ? b2.m.length : 0;
          b2 = Date.now() - b2.F;
          var e = a.B;
          d = qb();
          F2(d, new tb(d, c));
          fc(a);
        } else ec(a);
      } else if (e = b2.s, 3 == e || 0 == e && 0 < b2.X || !(1 == d && bd(a, b2) || 2 == d && $b(a))) switch (c && 0 < c.length && (b2 = a.h, b2.i = b2.i.concat(c)), e) {
        case 1:
          R(a, 5);
          break;
        case 4:
          R(a, 10);
          break;
        case 3:
          R(a, 6);
          break;
        default:
          R(a, 2);
      }
    }
  }
  function cd(a, b2) {
    let c = a.Ta + Math.floor(Math.random() * a.cb);
    a.isActive() || (c *= 2);
    return c * b2;
  }
  function R(a, b2) {
    a.j.info("Error code " + b2);
    if (2 == b2) {
      var c = p(a.fb, a), d = a.Xa;
      const e = !d;
      d = new T(d || "//www.google.com/images/cleardot.gif");
      k2.location && "http" == k2.location.protocol || qc(d, "https");
      Ib(d);
      e ? Fc(d.toString(), c) : Gc(d.toString(), c);
    } else K2(2);
    a.G = 0;
    a.l && a.l.sa(b2);
    ad(a);
    Zc(a);
  }
  h.fb = function(a) {
    a ? (this.j.info("Successfully pinged google.com"), K2(2)) : (this.j.info("Failed to ping google.com"), K2(1));
  };
  function ad(a) {
    a.G = 0;
    a.ka = [];
    if (a.l) {
      const b2 = kc(a.h);
      if (0 != b2.length || 0 != a.i.length) ma(a.ka, b2), ma(a.ka, a.i), a.h.i.length = 0, la(a.i), a.i.length = 0;
      a.l.ra();
    }
  }
  function cc(a, b2, c) {
    var d = c instanceof T ? N2(c) : new T(c);
    if ("" != d.g) b2 && (d.g = b2 + "." + d.g), rc(d, d.s);
    else {
      var e = k2.location;
      d = e.protocol;
      b2 = b2 ? b2 + "." + e.hostname : e.hostname;
      e = +e.port;
      var f = new T(null);
      d && qc(f, d);
      b2 && (f.g = b2);
      e && rc(f, e);
      c && (f.l = c);
      d = f;
    }
    c = a.D;
    b2 = a.ya;
    c && b2 && S2(d, c, b2);
    S2(d, "VER", a.la);
    $c(a, d);
    return d;
  }
  function Mb(a, b2, c) {
    if (b2 && !a.J) throw Error("Can't create secondary domain capable XhrIo object.");
    b2 = a.Ca && !a.pa ? new X2(new Jc({
      eb: c
    })) : new X2(a.pa);
    b2.Ha(a.J);
    return b2;
  }
  h.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function gd() {
  }
  h = gd.prototype;
  h.ua = function() {
  };
  h.ta = function() {
  };
  h.sa = function() {
  };
  h.ra = function() {
  };
  h.isActive = function() {
    return true;
  };
  h.Na = function() {
  };
  function hd() {
  }
  hd.prototype.g = function(a, b2) {
    return new Y2(a, b2);
  };
  function Y2(a, b2) {
    E.call(this);
    this.g = new Yc(b2);
    this.l = a;
    this.h = b2 && b2.messageUrlParams || null;
    a = b2 && b2.messageHeaders || null;
    b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
      "X-Client-Protocol": "webchannel"
    });
    this.g.o = a;
    a = b2 && b2.initMessageHeaders || null;
    b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = {
      "X-WebChannel-Content-Type": b2.messageContentType
    });
    b2 && b2.va && (a ? a["X-WebChannel-Client-Profile"] = b2.va : a = {
      "X-WebChannel-Client-Profile": b2.va
    });
    this.g.S = a;
    (a = b2 && b2.Sb) && !t(a) && (this.g.m = a);
    this.v = b2 && b2.supportsCrossDomainXhr || false;
    this.u = b2 && b2.sendRawJson || false;
    (b2 = b2 && b2.httpSessionIdParam) && !t(b2) && (this.g.D = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
    this.j = new Z2(this);
  }
  r(Y2, E);
  Y2.prototype.m = function() {
    this.g.l = this.j;
    this.v && (this.g.J = true);
    this.g.connect(this.l, this.h || void 0);
  };
  Y2.prototype.close = function() {
    gc(this.g);
  };
  Y2.prototype.o = function(a) {
    var b2 = this.g;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.u && (c = {}, c.__data__ = hb(a), a = c);
    b2.i.push(new hc(b2.Ya++, a));
    3 == b2.G && fc(b2);
  };
  Y2.prototype.N = function() {
    this.g.l = null;
    delete this.j;
    gc(this.g);
    delete this.g;
    Y2.aa.N.call(this);
  };
  function id(a) {
    nb.call(this);
    a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
    var b2 = a.__sm__;
    if (b2) {
      a: {
        for (const c in b2) {
          a = c;
          break a;
        }
        a = void 0;
      }
      if (this.i = a) a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
      this.data = b2;
    } else this.data = a;
  }
  r(id, nb);
  function jd() {
    ob.call(this);
    this.status = 1;
  }
  r(jd, ob);
  function Z2(a) {
    this.g = a;
  }
  r(Z2, gd);
  Z2.prototype.ua = function() {
    F2(this.g, "a");
  };
  Z2.prototype.ta = function(a) {
    F2(this.g, new id(a));
  };
  Z2.prototype.sa = function(a) {
    F2(this.g, new jd());
  };
  Z2.prototype.ra = function() {
    F2(this.g, "b");
  };
  hd.prototype.createWebChannel = hd.prototype.g;
  Y2.prototype.send = Y2.prototype.o;
  Y2.prototype.open = Y2.prototype.m;
  Y2.prototype.close = Y2.prototype.close;
  createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
    return new hd();
  };
  getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
    return qb();
  };
  Event = webchannel_blob_es2018.Event = I;
  Stat = webchannel_blob_es2018.Stat = {
    mb: 0,
    pb: 1,
    qb: 2,
    Jb: 3,
    Ob: 4,
    Lb: 5,
    Mb: 6,
    Kb: 7,
    Ib: 8,
    Nb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Gb: 12,
    Cb: 13,
    Db: 14,
    Bb: 15,
    Eb: 16,
    Fb: 17,
    ib: 18,
    hb: 19,
    jb: 20
  };
  Ab.NO_ERROR = 0;
  Ab.TIMEOUT = 8;
  Ab.HTTP_ERROR = 6;
  ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
  Bb.COMPLETE = "complete";
  EventType = webchannel_blob_es2018.EventType = Bb;
  mb.EventType = H2;
  H2.OPEN = "a";
  H2.CLOSE = "b";
  H2.ERROR = "c";
  H2.MESSAGE = "d";
  E.prototype.listen = E.prototype.K;
  WebChannel = webchannel_blob_es2018.WebChannel = mb;
  FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
  X2.prototype.listenOnce = X2.prototype.L;
  X2.prototype.getLastError = X2.prototype.Ka;
  X2.prototype.getLastErrorCode = X2.prototype.Ba;
  X2.prototype.getStatus = X2.prototype.Z;
  X2.prototype.getResponseJson = X2.prototype.Oa;
  X2.prototype.getResponseText = X2.prototype.oa;
  X2.prototype.send = X2.prototype.ea;
  X2.prototype.setWithCredentials = X2.prototype.Ha;
  XhrIo = webchannel_blob_es2018.XhrIo = X2;
}).apply(typeof commonjsGlobal2 !== "undefined" ? commonjsGlobal2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/firestore/dist/index.esm2017.js
var S = "@firebase/firestore";
var User = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
var b = "10.12.5";
var D = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
  return D.logLevel;
}
function setLogLevel(e) {
  D.setLogLevel(e);
}
function __PRIVATE_logDebug(e, ...t) {
  if (D.logLevel <= LogLevel.DEBUG) {
    const n = t.map(__PRIVATE_argToString);
    D.debug(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_logError(e, ...t) {
  if (D.logLevel <= LogLevel.ERROR) {
    const n = t.map(__PRIVATE_argToString);
    D.error(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_logWarn(e, ...t) {
  if (D.logLevel <= LogLevel.WARN) {
    const n = t.map(__PRIVATE_argToString);
    D.warn(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_argToString(e) {
  if ("string" == typeof e) return e;
  try {
    return function __PRIVATE_formatJSON(e2) {
      return JSON.stringify(e2);
    }(e);
  } catch (t) {
    return e;
  }
}
function fail(e = "Unexpected state") {
  const t = `FIRESTORE (${b}) INTERNAL ASSERTION FAILED: ` + e;
  throw __PRIVATE_logError(t), new Error(t);
}
function __PRIVATE_hardAssert(e, t) {
  e || fail();
}
function __PRIVATE_debugAssert(e, t) {
  e || fail();
}
function __PRIVATE_debugCast(e, t) {
  return e;
}
var C = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var FirestoreError = class extends FirebaseError {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var __PRIVATE_Deferred = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
};
var __PRIVATE_OAuthToken = class {
  constructor(e, t) {
    this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
};
var __PRIVATE_EmptyAuthCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
    e.enqueueRetryable(() => t(User.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var __PRIVATE_EmulatorAuthCredentialsProvider = class {
  constructor(e) {
    this.token = e, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(e, t) {
    this.changeListener = t, // Fire with initial user.
    e.enqueueRetryable(() => t(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var __PRIVATE_FirebaseAuthCredentialsProvider = class {
  constructor(e) {
    this.t = e, /** Tracks the current User. */
    this.currentUser = User.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(e, t) {
    let n = this.i;
    const __PRIVATE_guardedChangeListener = (e2) => this.i !== n ? (n = this.i, t(e2)) : Promise.resolve();
    let r = new __PRIVATE_Deferred();
    this.o = () => {
      this.i++, this.currentUser = this.u(), r.resolve(), r = new __PRIVATE_Deferred(), e.enqueueRetryable(() => __PRIVATE_guardedChangeListener(this.currentUser));
    };
    const __PRIVATE_awaitNextToken = () => {
      const t2 = r;
      e.enqueueRetryable(() => __async(this, null, function* () {
        yield t2.promise, yield __PRIVATE_guardedChangeListener(this.currentUser);
      }));
    }, __PRIVATE_registerAuth = (e2) => {
      __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e2, this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken();
    };
    this.t.onInit((e2) => __PRIVATE_registerAuth(e2)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const e2 = this.t.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAuth(e2) : (
          // If auth is still not available, proceed with `null` user
          (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r.resolve(), r = new __PRIVATE_Deferred())
        );
      }
    }, 0), __PRIVATE_awaitNextToken();
  }
  getToken() {
    const e = this.i, t = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(t).then((t2) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t2 ? (__PRIVATE_hardAssert("string" == typeof t2.accessToken), new __PRIVATE_OAuthToken(t2.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const e = this.auth && this.auth.getUid();
    return __PRIVATE_hardAssert(null === e || "string" == typeof e), new User(e);
  }
};
var __PRIVATE_FirstPartyToken = class {
  constructor(e, t, n) {
    this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
  constructor(e, t, n) {
    this.l = e, this.h = t, this.P = n;
  }
  getToken() {
    return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l, this.h, this.P));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(User.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var AppCheckToken = class {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var __PRIVATE_FirebaseAppCheckTokenProvider = class {
  constructor(e) {
    this.A = e, this.forceRefresh = false, this.appCheck = null, this.R = null;
  }
  start(e, t) {
    const onTokenChanged = (e2) => {
      null != e2.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e2.error.message}`);
      const n = e2.token !== this.R;
      return this.R = e2.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e2.token) : Promise.resolve();
    };
    this.o = (t2) => {
      e.enqueueRetryable(() => onTokenChanged(t2));
    };
    const __PRIVATE_registerAppCheck = (e2) => {
      __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e2, this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((e2) => __PRIVATE_registerAppCheck(e2)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const e2 = this.A.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAppCheck(e2) : (
          // If AppCheck is still not available, proceed without it.
          __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e).then((e2) => e2 ? (__PRIVATE_hardAssert("string" == typeof e2.token), this.R = e2.token, new AppCheckToken(e2.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
};
var __PRIVATE_EmptyAppCheckTokenProvider = class {
  getToken() {
    return Promise.resolve(new AppCheckToken(""));
  }
  invalidateToken() {
  }
  start(e, t) {
  }
  shutdown() {
  }
};
function __PRIVATE_randomBytes(e) {
  const t = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(e);
  if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
  else
    for (let t2 = 0; t2 < e; t2++) n[t2] = Math.floor(256 * Math.random());
  return n;
}
var __PRIVATE_AutoId = class {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length;
    let n = "";
    for (; n.length < 20; ) {
      const r = __PRIVATE_randomBytes(40);
      for (let i = 0; i < r.length; ++i)
        n.length < 20 && r[i] < t && (n += e.charAt(r[i] % e.length));
    }
    return n;
  }
};
function __PRIVATE_primitiveComparator(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function __PRIVATE_arrayEquals(e, t, n) {
  return e.length === t.length && e.every((e2, r) => n(e2, t[r]));
}
function __PRIVATE_immediateSuccessor(e) {
  return e + "\0";
}
var Timestamp = class _Timestamp {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t) {
    if (this.seconds = e, this.nanoseconds = t, t < 0) throw new FirestoreError(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (t >= 1e9) throw new FirestoreError(C.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (e < -62135596800) throw new FirestoreError(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800) throw new FirestoreError(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return _Timestamp.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return _Timestamp.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t = Math.floor(e / 1e3), n = Math.floor(1e6 * (e - 1e3 * t));
    return new _Timestamp(t, n);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
var SnapshotVersion = class _SnapshotVersion {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new _SnapshotVersion(e);
  }
  static min() {
    return new _SnapshotVersion(new Timestamp(0, 0));
  }
  static max() {
    return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var BasePath = class _BasePath {
  constructor(e, t, n) {
    void 0 === t ? t = 0 : t > e.length && fail(), void 0 === n ? n = e.length - t : n > e.length - t && fail(), this.segments = e, this.offset = t, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return 0 === _BasePath.comparator(this, e);
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return e instanceof _BasePath ? e.forEach((e2) => {
      t.push(e2);
    }) : t.push(e), this.construct(t);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  forEach(e) {
    for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t) {
    const n = Math.min(e.length, t.length);
    for (let r = 0; r < n; r++) {
      const n2 = e.get(r), i = t.get(r);
      if (n2 < i) return -1;
      if (n2 > i) return 1;
    }
    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
  }
};
var ResourcePath = class _ResourcePath extends BasePath {
  construct(e, t, n) {
    return new _ResourcePath(e, t, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t = [];
    for (const n of e) {
      if (n.indexOf("//") >= 0) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      t.push(...n.split("/").filter((e2) => e2.length > 0));
    }
    return new _ResourcePath(t);
  }
  static emptyPath() {
    return new _ResourcePath([]);
  }
};
var v = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var FieldPath$1 = class _FieldPath$1 extends BasePath {
  construct(e, t, n) {
    return new _FieldPath$1(e, t, n);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return v.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new _FieldPath$1(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t = [];
    let n = "", r = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (0 === n.length) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t.push(n), n = "";
    };
    let i = false;
    for (; r < e.length; ) {
      const t2 = e[r];
      if ("\\" === t2) {
        if (r + 1 === e.length) throw new FirestoreError(C.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const t3 = e[r + 1];
        if ("\\" !== t3 && "." !== t3 && "`" !== t3) throw new FirestoreError(C.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        n += t3, r += 2;
      } else "`" === t2 ? (i = !i, r++) : "." !== t2 || i ? (n += t2, r++) : (__PRIVATE_addCurrentSegment(), r++);
    }
    if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(C.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new _FieldPath$1(t);
  }
  static emptyPath() {
    return new _FieldPath$1([]);
  }
};
var DocumentKey = class _DocumentKey {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new _DocumentKey(ResourcePath.fromString(e));
  }
  static fromName(e) {
    return new _DocumentKey(ResourcePath.fromString(e).popFirst(5));
  }
  static empty() {
    return new _DocumentKey(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return ResourcePath.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new _DocumentKey(new ResourcePath(e.slice()));
  }
};
var FieldIndex = class {
  constructor(e, t, n, r) {
    this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r;
  }
};
function __PRIVATE_fieldIndexGetArraySegment(e) {
  return e.fields.find((e2) => 2 === e2.kind);
}
function __PRIVATE_fieldIndexGetDirectionalSegments(e) {
  return e.fields.filter((e2) => 2 !== e2.kind);
}
function __PRIVATE_fieldIndexSemanticComparator(e, t) {
  let n = __PRIVATE_primitiveComparator(e.collectionGroup, t.collectionGroup);
  if (0 !== n) return n;
  for (let r = 0; r < Math.min(e.fields.length, t.fields.length); ++r) if (n = __PRIVATE_indexSegmentComparator(e.fields[r], t.fields[r]), 0 !== n) return n;
  return __PRIVATE_primitiveComparator(e.fields.length, t.fields.length);
}
FieldIndex.UNKNOWN_ID = -1;
var IndexSegment = class {
  constructor(e, t) {
    this.fieldPath = e, this.kind = t;
  }
};
function __PRIVATE_indexSegmentComparator(e, t) {
  const n = FieldPath$1.comparator(e.fieldPath, t.fieldPath);
  return 0 !== n ? n : __PRIVATE_primitiveComparator(e.kind, t.kind);
}
var IndexState = class _IndexState {
  constructor(e, t) {
    this.sequenceNumber = e, this.offset = t;
  }
  /** The state of an index that has not yet been backfilled. */
  static empty() {
    return new _IndexState(0, IndexOffset.min());
  }
};
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
  const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1, i = SnapshotVersion.fromTimestamp(1e9 === r ? new Timestamp(n + 1, 0) : new Timestamp(n, r));
  return new IndexOffset(i, DocumentKey.empty(), t);
}
function __PRIVATE_newIndexOffsetFromDocument(e) {
  return new IndexOffset(e.readTime, e.key, -1);
}
var IndexOffset = class _IndexOffset {
  constructor(e, t, n) {
    this.readTime = e, this.documentKey = t, this.largestBatchId = n;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new _IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new _IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
  }
};
function __PRIVATE_indexOffsetComparator(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return 0 !== n ? n : (n = DocumentKey.comparator(e.documentKey, t.documentKey), 0 !== n ? n : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId));
}
var F = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var PersistenceTransaction = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
};
function __PRIVATE_ignoreIfPrimaryLeaseLoss(e) {
  return __async(this, null, function* () {
    if (e.code !== C.FAILED_PRECONDITION || e.message !== F) throw e;
    __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
  });
}
var PersistencePromise = class _PersistencePromise {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = false, e((e2) => {
      this.isDone = true, this.result = e2, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(e2);
    }, (e2) => {
      this.isDone = true, this.error = e2, this.catchCallback && this.catchCallback(e2);
    });
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return this.callbackAttached && fail(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new _PersistencePromise((n, r) => {
      this.nextCallback = (t2) => {
        this.wrapSuccess(e, t2).next(n, r);
      }, this.catchCallback = (e2) => {
        this.wrapFailure(t, e2).next(n, r);
      };
    });
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof _PersistencePromise ? t : _PersistencePromise.resolve(t);
    } catch (e2) {
      return _PersistencePromise.reject(e2);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.reject(t);
  }
  static resolve(e) {
    return new _PersistencePromise((t, n) => {
      t(e);
    });
  }
  static reject(e) {
    return new _PersistencePromise((t, n) => {
      n(e);
    });
  }
  static waitFor(e) {
    return new _PersistencePromise((t, n) => {
      let r = 0, i = 0, s = false;
      e.forEach((e2) => {
        ++r, e2.next(() => {
          ++i, s && i === r && t();
        }, (e3) => n(e3));
      }), s = true, i === r && t();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(e) {
    let t = _PersistencePromise.resolve(false);
    for (const n of e) t = t.next((e2) => e2 ? _PersistencePromise.resolve(e2) : n());
    return t;
  }
  static forEach(e, t) {
    const n = [];
    return e.forEach((e2, r) => {
      n.push(t.call(this, e2, r));
    }), this.waitFor(n);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(e, t) {
    return new _PersistencePromise((n, r) => {
      const i = e.length, s = new Array(i);
      let o = 0;
      for (let _ = 0; _ < i; _++) {
        const a = _;
        t(e[a]).next((e2) => {
          s[a] = e2, ++o, o === i && n(s);
        }, (e2) => r(e2));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(e, t) {
    return new _PersistencePromise((n, r) => {
      const process2 = () => {
        true === e() ? t().next(() => {
          process2();
        }, r) : n();
      };
      process2();
    });
  }
};
var __PRIVATE_SimpleDbTransaction = class ___PRIVATE_SimpleDbTransaction {
  constructor(e, t) {
    this.action = e, this.transaction = t, this.aborted = false, /**
     * A `Promise` that resolves with the result of the IndexedDb transaction.
     */
    this.V = new __PRIVATE_Deferred(), this.transaction.oncomplete = () => {
      this.V.resolve();
    }, this.transaction.onabort = () => {
      t.error ? this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, t.error)) : this.V.resolve();
    }, this.transaction.onerror = (t2) => {
      const n = __PRIVATE_checkForAndReportiOSError(t2.target.error);
      this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, n));
    };
  }
  static open(e, t, n, r) {
    try {
      return new ___PRIVATE_SimpleDbTransaction(t, e.transaction(r, n));
    } catch (e2) {
      throw new __PRIVATE_IndexedDbTransactionError(t, e2);
    }
  }
  get m() {
    return this.V.promise;
  }
  abort(e) {
    e && this.V.reject(e), this.aborted || (__PRIVATE_logDebug("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }
  g() {
    const e = this.transaction;
    this.aborted || "function" != typeof e.commit || e.commit();
  }
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  store(e) {
    const t = this.transaction.objectStore(e);
    return new __PRIVATE_SimpleDbStore(t);
  }
};
var __PRIVATE_SimpleDb = class ___PRIVATE_SimpleDb {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  constructor(e, t, n) {
    this.name = e, this.version = t, this.p = n;
    12.2 === ___PRIVATE_SimpleDb.S(getUA()) && __PRIVATE_logError("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */
  static delete(e) {
    return __PRIVATE_logDebug("SimpleDb", "Removing database:", e), __PRIVATE_wrapRequest(window.indexedDB.deleteDatabase(e)).toPromise();
  }
  /** Returns true if IndexedDB is available in the current environment. */
  static D() {
    if (!isIndexedDBAvailable()) return false;
    if (___PRIVATE_SimpleDb.C()) return true;
    const e = getUA(), t = ___PRIVATE_SimpleDb.S(e), n = 0 < t && t < 10, r = __PRIVATE_getAndroidVersion(e), i = 0 < r && r < 4.5;
    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || n || i);
  }
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  static C() {
    var e;
    return "undefined" != typeof process && "YES" === (null === (e = process.__PRIVATE_env) || void 0 === e ? void 0 : e.v);
  }
  /** Helper to get a typed SimpleDbStore from a transaction. */
  static F(e, t) {
    return e.store(t);
  }
  // visible for testing
  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  static S(e) {
    const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  M(e) {
    return __async(this, null, function* () {
      return this.db || (__PRIVATE_logDebug("SimpleDb", "Opening database:", this.name), this.db = yield new Promise((t, n) => {
        const r = indexedDB.open(this.name, this.version);
        r.onsuccess = (e2) => {
          const n2 = e2.target.result;
          t(n2);
        }, r.onblocked = () => {
          n(new __PRIVATE_IndexedDbTransactionError(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
        }, r.onerror = (t2) => {
          const r2 = t2.target.error;
          "VersionError" === r2.name ? n(new FirestoreError(C.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === r2.name ? n(new FirestoreError(C.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + r2)) : n(new __PRIVATE_IndexedDbTransactionError(e, r2));
        }, r.onupgradeneeded = (e2) => {
          __PRIVATE_logDebug("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', e2.oldVersion);
          const t2 = e2.target.result;
          this.p.O(t2, r.transaction, e2.oldVersion, this.version).next(() => {
            __PRIVATE_logDebug("SimpleDb", "Database upgrade to version " + this.version + " complete");
          });
        };
      })), this.N && (this.db.onversionchange = (e2) => this.N(e2)), this.db;
    });
  }
  L(e) {
    this.N = e, this.db && (this.db.onversionchange = (t) => e(t));
  }
  runTransaction(e, t, n, r) {
    return __async(this, null, function* () {
      const i = "readonly" === t;
      let s = 0;
      for (; ; ) {
        ++s;
        try {
          this.db = yield this.M(e);
          const t2 = __PRIVATE_SimpleDbTransaction.open(this.db, e, i ? "readonly" : "readwrite", n), s2 = r(t2).next((e2) => (t2.g(), e2)).catch((e2) => (
            // Abort the transaction if there was an error.
            (t2.abort(e2), PersistencePromise.reject(e2))
          )).toPromise();
          return s2.catch(() => {
          }), // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
          // fire), but still return the original transactionFnResult back to the
          // caller.
          yield t2.m, s2;
        } catch (e2) {
          const t2 = e2, n2 = "FirebaseError" !== t2.name && s < 3;
          if (__PRIVATE_logDebug("SimpleDb", "Transaction failed with error:", t2.message, "Retrying:", n2), this.close(), !n2) return Promise.reject(t2);
        }
      }
    });
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
};
function __PRIVATE_getAndroidVersion(e) {
  const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
var __PRIVATE_IterationController = class {
  constructor(e) {
    this.B = e, this.k = false, this.q = null;
  }
  get isDone() {
    return this.k;
  }
  get K() {
    return this.q;
  }
  set cursor(e) {
    this.B = e;
  }
  /**
   * This function can be called to stop iteration at any point.
   */
  done() {
    this.k = true;
  }
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  $(e) {
    this.q = e;
  }
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  delete() {
    return __PRIVATE_wrapRequest(this.B.delete());
  }
};
var __PRIVATE_IndexedDbTransactionError = class extends FirestoreError {
  constructor(e, t) {
    super(C.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`), this.name = "IndexedDbTransactionError";
  }
};
function __PRIVATE_isIndexedDbTransactionError(e) {
  return "IndexedDbTransactionError" === e.name;
}
var __PRIVATE_SimpleDbStore = class {
  constructor(e) {
    this.store = e;
  }
  put(e, t) {
    let n;
    return void 0 !== t ? (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), __PRIVATE_wrapRequest(n);
  }
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value - The object to write.
   * @returns The key of the value to add.
   */
  add(e) {
    __PRIVATE_logDebug("SimpleDb", "ADD", this.store.name, e, e);
    return __PRIVATE_wrapRequest(this.store.add(e));
  }
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @returns The object with the specified key or null if no object exists.
   */
  get(e) {
    return __PRIVATE_wrapRequest(this.store.get(e)).next((t) => (
      // Normalize nonexistence to null.
      (void 0 === t && (t = null), __PRIVATE_logDebug("SimpleDb", "GET", this.store.name, e, t), t)
    ));
  }
  delete(e) {
    __PRIVATE_logDebug("SimpleDb", "DELETE", this.store.name, e);
    return __PRIVATE_wrapRequest(this.store.delete(e));
  }
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  count() {
    __PRIVATE_logDebug("SimpleDb", "COUNT", this.store.name);
    return __PRIVATE_wrapRequest(this.store.count());
  }
  U(e, t) {
    const n = this.options(e, t), r = n.index ? this.store.index(n.index) : this.store;
    if ("function" == typeof r.getAll) {
      const e2 = r.getAll(n.range);
      return new PersistencePromise((t2, n2) => {
        e2.onerror = (e3) => {
          n2(e3.target.error);
        }, e2.onsuccess = (e3) => {
          t2(e3.target.result);
        };
      });
    }
    {
      const e2 = this.cursor(n), t2 = [];
      return this.W(e2, (e3, n2) => {
        t2.push(n2);
      }).next(() => t2);
    }
  }
  /**
   * Loads the first `count` elements from the provided index range. Loads all
   * elements if no limit is provided.
   */
  G(e, t) {
    const n = this.store.getAll(e, null === t ? void 0 : t);
    return new PersistencePromise((e2, t2) => {
      n.onerror = (e3) => {
        t2(e3.target.error);
      }, n.onsuccess = (t3) => {
        e2(t3.target.result);
      };
    });
  }
  j(e, t) {
    __PRIVATE_logDebug("SimpleDb", "DELETE ALL", this.store.name);
    const n = this.options(e, t);
    n.H = false;
    const r = this.cursor(n);
    return this.W(r, (e2, t2, n2) => n2.delete());
  }
  J(e, t) {
    let n;
    t ? n = e : (n = {}, t = e);
    const r = this.cursor(n);
    return this.W(r, t);
  }
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  Y(e) {
    const t = this.cursor({});
    return new PersistencePromise((n, r) => {
      t.onerror = (e2) => {
        const t2 = __PRIVATE_checkForAndReportiOSError(e2.target.error);
        r(t2);
      }, t.onsuccess = (t2) => {
        const r2 = t2.target.result;
        r2 ? e(r2.primaryKey, r2.value).next((e2) => {
          e2 ? r2.continue() : n();
        }) : n();
      };
    });
  }
  W(e, t) {
    const n = [];
    return new PersistencePromise((r, i) => {
      e.onerror = (e2) => {
        i(e2.target.error);
      }, e.onsuccess = (e2) => {
        const i2 = e2.target.result;
        if (!i2) return void r();
        const s = new __PRIVATE_IterationController(i2), o = t(i2.primaryKey, i2.value, s);
        if (o instanceof PersistencePromise) {
          const e3 = o.catch((e4) => (s.done(), PersistencePromise.reject(e4)));
          n.push(e3);
        }
        s.isDone ? r() : null === s.K ? i2.continue() : i2.continue(s.K);
      };
    }).next(() => PersistencePromise.waitFor(n));
  }
  options(e, t) {
    let n;
    return void 0 !== e && ("string" == typeof e ? n = e : t = e), {
      index: n,
      range: t
    };
  }
  cursor(e) {
    let t = "next";
    if (e.reverse && (t = "prev"), e.index) {
      const n = this.store.index(e.index);
      return e.H ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t);
    }
    return this.store.openCursor(e.range, t);
  }
};
function __PRIVATE_wrapRequest(e) {
  return new PersistencePromise((t, n) => {
    e.onsuccess = (e2) => {
      const n2 = e2.target.result;
      t(n2);
    }, e.onerror = (e2) => {
      const t2 = __PRIVATE_checkForAndReportiOSError(e2.target.error);
      n(t2);
    };
  });
}
var M = false;
function __PRIVATE_checkForAndReportiOSError(e) {
  const t = __PRIVATE_SimpleDb.S(getUA());
  if (t >= 12.2 && t < 13) {
    const t2 = "An internal error was encountered in the Indexed Database server";
    if (e.message.indexOf(t2) >= 0) {
      const e2 = new FirestoreError("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return M || (M = true, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(() => {
        throw e2;
      }, 0)), e2;
    }
  }
  return e;
}
var __PRIVATE_IndexBackfillerScheduler = class {
  constructor(e, t) {
    this.asyncQueue = e, this.Z = t, this.task = null;
  }
  start() {
    this.X(15e3);
  }
  stop() {
    this.task && (this.task.cancel(), this.task = null);
  }
  get started() {
    return null !== this.task;
  }
  X(e) {
    __PRIVATE_logDebug("IndexBackfiller", `Scheduled in ${e}ms`), this.task = this.asyncQueue.enqueueAfterDelay("index_backfill", e, () => __async(this, null, function* () {
      this.task = null;
      try {
        __PRIVATE_logDebug("IndexBackfiller", `Documents written: ${yield this.Z.ee()}`);
      } catch (e2) {
        __PRIVATE_isIndexedDbTransactionError(e2) ? __PRIVATE_logDebug("IndexBackfiller", "Ignoring IndexedDB error during index backfill: ", e2) : yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
      }
      yield this.X(6e4);
    }));
  }
};
var __PRIVATE_IndexBackfiller = class {
  constructor(e, t) {
    this.localStore = e, this.persistence = t;
  }
  ee(e = 50) {
    return __async(this, null, function* () {
      return this.persistence.runTransaction("Backfill Indexes", "readwrite-primary", (t) => this.te(t, e));
    });
  }
  /** Writes index entries until the cap is reached. Returns the number of documents processed. */
  te(e, t) {
    const n = /* @__PURE__ */ new Set();
    let r = t, i = true;
    return PersistencePromise.doWhile(() => true === i && r > 0, () => this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t2) => {
      if (null !== t2 && !n.has(t2)) return __PRIVATE_logDebug("IndexBackfiller", `Processing collection: ${t2}`), this.ne(e, t2, r).next((e2) => {
        r -= e2, n.add(t2);
      });
      i = false;
    })).next(() => t - r);
  }
  /**
   * Writes entries for the provided collection group. Returns the number of documents processed.
   */
  ne(e, t, n) {
    return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e, t).next((r) => this.localStore.localDocuments.getNextDocuments(e, t, r, n).next((n2) => {
      const i = n2.changes;
      return this.localStore.indexManager.updateIndexEntries(e, i).next(() => this.re(r, n2)).next((n3) => (__PRIVATE_logDebug("IndexBackfiller", `Updating offset: ${n3}`), this.localStore.indexManager.updateCollectionGroup(e, t, n3))).next(() => i.size);
    }));
  }
  /** Returns the next offset based on the provided documents. */
  re(e, t) {
    let n = e;
    return t.changes.forEach((e2, t2) => {
      const r = __PRIVATE_newIndexOffsetFromDocument(t2);
      __PRIVATE_indexOffsetComparator(r, n) > 0 && (n = r);
    }), new IndexOffset(n.readTime, n.documentKey, Math.max(t.batchId, e.largestBatchId));
  }
};
var __PRIVATE_ListenSequence = class {
  constructor(e, t) {
    this.previousValue = e, t && (t.sequenceNumberHandler = (e2) => this.ie(e2), this.se = (e2) => t.writeSequenceNumber(e2));
  }
  ie(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.se && this.se(e), e;
  }
};
__PRIVATE_ListenSequence.oe = -1;
function __PRIVATE_isNullOrUndefined(e) {
  return null == e;
}
function __PRIVATE_isNegativeZero(e) {
  return 0 === e && 1 / e == -1 / 0;
}
function isSafeInteger(e) {
  return "number" == typeof e && Number.isInteger(e) && !__PRIVATE_isNegativeZero(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
}
function __PRIVATE_encodeResourcePath(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t.length > 0 && (t = __PRIVATE_encodeSeparator(t)), t = __PRIVATE_encodeSegment(e.get(n), t);
  return __PRIVATE_encodeSeparator(t);
}
function __PRIVATE_encodeSegment(e, t) {
  let n = t;
  const r = e.length;
  for (let t2 = 0; t2 < r; t2++) {
    const r2 = e.charAt(t2);
    switch (r2) {
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += r2;
    }
  }
  return n;
}
function __PRIVATE_encodeSeparator(e) {
  return e + "";
}
function __PRIVATE_decodeResourcePath(e) {
  const t = e.length;
  if (__PRIVATE_hardAssert(t >= 2), 2 === t) return __PRIVATE_hardAssert("" === e.charAt(0) && "" === e.charAt(1)), ResourcePath.emptyPath();
  const __PRIVATE_lastReasonableEscapeIndex = t - 2, n = [];
  let r = "";
  for (let i = 0; i < t; ) {
    const t2 = e.indexOf("", i);
    (t2 < 0 || t2 > __PRIVATE_lastReasonableEscapeIndex) && fail();
    switch (e.charAt(t2 + 1)) {
      case "":
        const s = e.substring(i, t2);
        let o;
        0 === r.length ? (
          // Avoid copying for the common case of a segment that excludes \0
          // and \001
          o = s
        ) : (r += s, o = r, r = ""), n.push(o);
        break;
      case "":
        r += e.substring(i, t2), r += "\0";
        break;
      case "":
        r += e.substring(i, t2 + 1);
        break;
      default:
        fail();
    }
    i = t2 + 2;
  }
  return new ResourcePath(n);
}
var x = ["userId", "batchId"];
function __PRIVATE_newDbDocumentMutationPrefixForPath(e, t) {
  return [e, __PRIVATE_encodeResourcePath(t)];
}
function __PRIVATE_newDbDocumentMutationKey(e, t, n) {
  return [e, __PRIVATE_encodeResourcePath(t), n];
}
var O = {};
var N = ["prefixPath", "collectionGroup", "readTime", "documentId"];
var L = ["prefixPath", "collectionGroup", "documentId"];
var B = ["collectionGroup", "readTime", "prefixPath", "documentId"];
var k = ["canonicalId", "targetId"];
var q = ["targetId", "path"];
var Q = ["path", "targetId"];
var K = ["collectionId", "parent"];
var $ = ["indexId", "uid"];
var U = ["uid", "sequenceNumber"];
var W = ["indexId", "uid", "arrayValue", "directionalValue", "orderedDocumentKey", "documentKey"];
var G = ["indexId", "uid", "orderedDocumentKey"];
var z = ["userId", "collectionPath", "documentId"];
var j = ["userId", "collectionPath", "largestBatchId"];
var H = ["userId", "collectionGroup", "largestBatchId"];
var J = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
var Y = [...J, "documentOverlays"];
var Z = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
var X = Z;
var ee = [...X, "indexConfiguration", "indexState", "indexEntries"];
var te = ee;
var ne = [...ee, "globals"];
var __PRIVATE_IndexedDbTransaction = class extends PersistenceTransaction {
  constructor(e, t) {
    super(), this._e = e, this.currentSequenceNumber = t;
  }
};
function __PRIVATE_getStore(e, t) {
  const n = __PRIVATE_debugCast(e);
  return __PRIVATE_SimpleDb.F(n._e, t);
}
function __PRIVATE_objectSize(e) {
  let t = 0;
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function forEach(e, t) {
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function __PRIVATE_mapToArray(e, t) {
  const n = [];
  for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && n.push(t(e[r], r, e));
  return n;
}
function isEmpty(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return false;
  return true;
}
var SortedMap = class _SortedMap {
  constructor(e, t) {
    this.comparator = e, this.root = t || LLRBNode.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t) {
    return new _SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new _SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const n = this.comparator(e, t.key);
      if (0 === n) return t.value;
      n < 0 ? t = t.left : n > 0 && (t = t.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (0 === r) return t + n.left.size;
      r < 0 ? n = n.left : (
        // Count all nodes left of the node plus the node itself
        (t += n.left.size + 1, n = n.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, n) => (e(t, n), false));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), false)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(e, t, n, r) {
    this.isReverse = r, this.nodeStack = [];
    let i = 1;
    for (; !e.isEmpty(); ) if (i = t ? n(e.key, t) : 1, // flip the comparison if we're going in reverse
    t && r && (i *= -1), i < 0)
      e = this.isReverse ? e.left : e.right;
    else {
      if (0 === i) {
        this.nodeStack.push(e);
        break;
      }
      this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
    }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), e = e.right;
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), e = e.left;
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
};
var LLRBNode = class _LLRBNode {
  constructor(e, t, n, r, i) {
    this.key = e, this.value = t, this.color = null != n ? n : _LLRBNode.RED, this.left = null != r ? r : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t, n, r, i) {
    return new _LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t, n) {
    let r = this;
    const i = n(e, r.key);
    return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return _LLRBNode.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t) {
    let n, r = this;
    if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
    else {
      if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
        if (r.right.isEmpty()) return _LLRBNode.EMPTY;
        n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
      }
      r = r.copy(null, null, null, null, r.right.remove(e, t));
    }
    return r.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed()) throw fail();
    if (this.right.isRed()) throw fail();
    const e = this.left.check();
    if (e !== this.right.check()) throw fail();
    return e + (this.isRed() ? 0 : 1);
  }
};
LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail();
  }
  get value() {
    throw fail();
  }
  get color() {
    throw fail();
  }
  get left() {
    throw fail();
  }
  get right() {
    throw fail();
  }
  // Returns a copy of the current node.
  copy(e, t, n, r, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t, n) {
    return new LLRBNode(e, t);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e) {
    return false;
  }
  reverseTraversal(e) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var SortedSet = class _SortedSet {
  constructor(e) {
    this.comparator = e, this.data = new SortedMap(this.comparator);
  }
  has(e) {
    return null !== this.data.get(e);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((t, n) => (e(t), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t) {
    const n = this.data.getIteratorFrom(e[0]);
    for (; n.hasNext(); ) {
      const r = n.getNext();
      if (this.comparator(r.key, e[1]) >= 0) return;
      t(r.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t) {
    let n;
    for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); ) {
      if (!e(n.getNext().key)) return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new SortedSetIterator(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, true));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return t.size < e.size && (t = e, e = this), e.forEach((e2) => {
      t = t.add(e2);
    }), t;
  }
  isEqual(e) {
    if (!(e instanceof _SortedSet)) return false;
    if (this.size !== e.size) return false;
    const t = this.data.getIterator(), n = e.data.getIterator();
    for (; t.hasNext(); ) {
      const e2 = t.getNext().key, r = n.getNext().key;
      if (0 !== this.comparator(e2, r)) return false;
    }
    return true;
  }
  toArray() {
    const e = [];
    return this.forEach((t) => {
      e.push(t);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t = new _SortedSet(this.comparator);
    return t.data = e, t;
  }
};
var SortedSetIterator = class {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
function __PRIVATE_advanceIterator(e) {
  return e.hasNext() ? e.getNext() : void 0;
}
var FieldMask = class _FieldMask {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(FieldPath$1.comparator);
  }
  static empty() {
    return new _FieldMask([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t = new SortedSet(FieldPath$1.comparator);
    for (const e2 of this.fields) t = t.add(e2);
    for (const n of e) t = t.add(n);
    return new _FieldMask(t.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return true;
    return false;
  }
  isEqual(e) {
    return __PRIVATE_arrayEquals(this.fields, e.fields, (e2, t) => e2.isEqual(t));
  }
};
var __PRIVATE_Base64DecodeError = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
function __PRIVATE_isBase64Available() {
  return "undefined" != typeof atob;
}
var ByteString = class _ByteString {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = function __PRIVATE_decodeBase64(e2) {
      try {
        return atob(e2);
      } catch (e3) {
        throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
      }
    }(e);
    return new _ByteString(t);
  }
  static fromUint8Array(e) {
    const t = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function __PRIVATE_binaryStringFromUint8Array(e2) {
        let t2 = "";
        for (let n = 0; n < e2.length; ++n) t2 += String.fromCharCode(e2[n]);
        return t2;
      }(e)
    );
    return new _ByteString(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return function __PRIVATE_encodeBase64(e) {
      return btoa(e);
    }(this.binaryString);
  }
  toUint8Array() {
    return function __PRIVATE_uint8ArrayFromBinaryString(e) {
      const t = new Uint8Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var re = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(e) {
  if (__PRIVATE_hardAssert(!!e), "string" == typeof e) {
    let t = 0;
    const n = re.exec(e);
    if (__PRIVATE_hardAssert(!!n), n[1]) {
      let e2 = n[1];
      e2 = (e2 + "000000000").substr(0, 9), t = Number(e2);
    }
    const r = new Date(e);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e.seconds),
    nanos: __PRIVATE_normalizeNumber(e.nanos)
  };
}
function __PRIVATE_normalizeNumber(e) {
  return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
function __PRIVATE_normalizeByteString(e) {
  return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
function __PRIVATE_isServerTimestamp(e) {
  var t, n;
  return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
function __PRIVATE_getPreviousValue(e) {
  const t = e.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
}
function __PRIVATE_getLocalWriteTime(e) {
  const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Timestamp(t.seconds, t.nanos);
}
var DatabaseInfo = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, t, n, r, i, s, o, _, a) {
    this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = _, this.useFetchStreams = a;
  }
};
var DatabaseId = class _DatabaseId {
  constructor(e, t) {
    this.projectId = e, this.database = t || "(default)";
  }
  static empty() {
    return new _DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(e) {
    return e instanceof _DatabaseId && e.projectId === this.projectId && e.database === this.database;
  }
};
var ie = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
var se = {
  nullValue: "NULL_VALUE"
};
function __PRIVATE_typeOrder(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : 10 : fail();
}
function __PRIVATE_valueEquals(e, t) {
  if (e === t) return true;
  const n = __PRIVATE_typeOrder(e);
  if (n !== __PRIVATE_typeOrder(t)) return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
    case 3:
      return function __PRIVATE_timestampEquals(e2, t2) {
        if ("string" == typeof e2.timestampValue && "string" == typeof t2.timestampValue && e2.timestampValue.length === t2.timestampValue.length)
          return e2.timestampValue === t2.timestampValue;
        const n2 = __PRIVATE_normalizeTimestamp(e2.timestampValue), r = __PRIVATE_normalizeTimestamp(t2.timestampValue);
        return n2.seconds === r.seconds && n2.nanos === r.nanos;
      }(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return function __PRIVATE_blobEquals(e2, t2) {
        return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t2.bytesValue));
      }(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return function __PRIVATE_geoPointEquals(e2, t2) {
        return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.longitude);
      }(e, t);
    case 2:
      return function __PRIVATE_numberEquals(e2, t2) {
        if ("integerValue" in e2 && "integerValue" in t2) return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t2.integerValue);
        if ("doubleValue" in e2 && "doubleValue" in t2) {
          const n2 = __PRIVATE_normalizeNumber(e2.doubleValue), r = __PRIVATE_normalizeNumber(t2.doubleValue);
          return n2 === r ? __PRIVATE_isNegativeZero(n2) === __PRIVATE_isNegativeZero(r) : isNaN(n2) && isNaN(r);
        }
        return false;
      }(e, t);
    case 9:
      return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], __PRIVATE_valueEquals);
    case 10:
      return function __PRIVATE_objectEquals(e2, t2) {
        const n2 = e2.mapValue.fields || {}, r = t2.mapValue.fields || {};
        if (__PRIVATE_objectSize(n2) !== __PRIVATE_objectSize(r)) return false;
        for (const e3 in n2) if (n2.hasOwnProperty(e3) && (void 0 === r[e3] || !__PRIVATE_valueEquals(n2[e3], r[e3]))) return false;
        return true;
      }(e, t);
    default:
      return fail();
  }
}
function __PRIVATE_arrayValueContains(e, t) {
  return void 0 !== (e.values || []).find((e2) => __PRIVATE_valueEquals(e2, t));
}
function __PRIVATE_valueCompare(e, t) {
  if (e === t) return 0;
  const n = __PRIVATE_typeOrder(e), r = __PRIVATE_typeOrder(t);
  if (n !== r) return __PRIVATE_primitiveComparator(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
    case 2:
      return function __PRIVATE_compareNumbers(e2, t2) {
        const n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), r2 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue);
        return n2 < r2 ? -1 : n2 > r2 ? 1 : n2 === r2 ? 0 : (
          // one or both are NaN.
          isNaN(n2) ? isNaN(r2) ? 0 : -1 : 1
        );
      }(e, t);
    case 3:
      return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
    case 5:
      return __PRIVATE_primitiveComparator(e.stringValue, t.stringValue);
    case 6:
      return function __PRIVATE_compareBlobs(e2, t2) {
        const n2 = __PRIVATE_normalizeByteString(e2), r2 = __PRIVATE_normalizeByteString(t2);
        return n2.compareTo(r2);
      }(e.bytesValue, t.bytesValue);
    case 7:
      return function __PRIVATE_compareReferences(e2, t2) {
        const n2 = e2.split("/"), r2 = t2.split("/");
        for (let e3 = 0; e3 < n2.length && e3 < r2.length; e3++) {
          const t3 = __PRIVATE_primitiveComparator(n2[e3], r2[e3]);
          if (0 !== t3) return t3;
        }
        return __PRIVATE_primitiveComparator(n2.length, r2.length);
      }(e.referenceValue, t.referenceValue);
    case 8:
      return function __PRIVATE_compareGeoPoints(e2, t2) {
        const n2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t2.latitude));
        if (0 !== n2) return n2;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t2.longitude));
      }(e.geoPointValue, t.geoPointValue);
    case 9:
      return function __PRIVATE_compareArrays(e2, t2) {
        const n2 = e2.values || [], r2 = t2.values || [];
        for (let e3 = 0; e3 < n2.length && e3 < r2.length; ++e3) {
          const t3 = __PRIVATE_valueCompare(n2[e3], r2[e3]);
          if (t3) return t3;
        }
        return __PRIVATE_primitiveComparator(n2.length, r2.length);
      }(e.arrayValue, t.arrayValue);
    case 10:
      return function __PRIVATE_compareMaps(e2, t2) {
        if (e2 === ie.mapValue && t2 === ie.mapValue) return 0;
        if (e2 === ie.mapValue) return 1;
        if (t2 === ie.mapValue) return -1;
        const n2 = e2.fields || {}, r2 = Object.keys(n2), i = t2.fields || {}, s = Object.keys(i);
        r2.sort(), s.sort();
        for (let e3 = 0; e3 < r2.length && e3 < s.length; ++e3) {
          const t3 = __PRIVATE_primitiveComparator(r2[e3], s[e3]);
          if (0 !== t3) return t3;
          const o = __PRIVATE_valueCompare(n2[r2[e3]], i[s[e3]]);
          if (0 !== o) return o;
        }
        return __PRIVATE_primitiveComparator(r2.length, s.length);
      }(e.mapValue, t.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_compareTimestamps(e, t) {
  if ("string" == typeof e && "string" == typeof t && e.length === t.length) return __PRIVATE_primitiveComparator(e, t);
  const n = __PRIVATE_normalizeTimestamp(e), r = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(n.seconds, r.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(n.nanos, r.nanos);
}
function canonicalId(e) {
  return __PRIVATE_canonifyValue(e);
}
function __PRIVATE_canonifyValue(e) {
  return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function __PRIVATE_canonifyTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return `time(${t.seconds},${t.nanos})`;
  }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function __PRIVATE_canonifyByteString(e2) {
    return __PRIVATE_normalizeByteString(e2).toBase64();
  }(e.bytesValue) : "referenceValue" in e ? function __PRIVATE_canonifyReference(e2) {
    return DocumentKey.fromName(e2).toString();
  }(e.referenceValue) : "geoPointValue" in e ? function __PRIVATE_canonifyGeoPoint(e2) {
    return `geo(${e2.latitude},${e2.longitude})`;
  }(e.geoPointValue) : "arrayValue" in e ? function __PRIVATE_canonifyArray(e2) {
    let t = "[", n = true;
    for (const r of e2.values || []) n ? n = false : t += ",", t += __PRIVATE_canonifyValue(r);
    return t + "]";
  }(e.arrayValue) : "mapValue" in e ? function __PRIVATE_canonifyMap(e2) {
    const t = Object.keys(e2.fields || {}).sort();
    let n = "{", r = true;
    for (const i of t) r ? r = false : n += ",", n += `${i}:${__PRIVATE_canonifyValue(e2.fields[i])}`;
    return n + "}";
  }(e.mapValue) : fail();
}
function __PRIVATE_estimateByteSize(e) {
  switch (__PRIVATE_typeOrder(e)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t = __PRIVATE_getPreviousValue(e);
      return t ? 16 + __PRIVATE_estimateByteSize(t) : 16;
    case 5:
      return 2 * e.stringValue.length;
    case 6:
      return __PRIVATE_normalizeByteString(e.bytesValue).approximateByteSize();
    case 7:
      return e.referenceValue.length;
    case 9:
      return function __PRIVATE_estimateArrayByteSize(e2) {
        return (e2.values || []).reduce((e3, t2) => e3 + __PRIVATE_estimateByteSize(t2), 0);
      }(e.arrayValue);
    case 10:
      return function __PRIVATE_estimateMapByteSize(e2) {
        let t2 = 0;
        return forEach(e2.fields, (e3, n) => {
          t2 += e3.length + __PRIVATE_estimateByteSize(n);
        }), t2;
      }(e.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_refValue(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
  };
}
function isInteger(e) {
  return !!e && "integerValue" in e;
}
function isArray(e) {
  return !!e && "arrayValue" in e;
}
function __PRIVATE_isNullValue(e) {
  return !!e && "nullValue" in e;
}
function __PRIVATE_isNanValue(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function __PRIVATE_isMapValue(e) {
  return !!e && "mapValue" in e;
}
function __PRIVATE_deepClone(e) {
  if (e.geoPointValue) return {
    geoPointValue: Object.assign({}, e.geoPointValue)
  };
  if (e.timestampValue && "object" == typeof e.timestampValue) return {
    timestampValue: Object.assign({}, e.timestampValue)
  };
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return forEach(e.mapValue.fields, (e2, n) => t.mapValue.fields[e2] = __PRIVATE_deepClone(n)), t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = __PRIVATE_deepClone(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
function __PRIVATE_isMaxValue(e) {
  return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
function __PRIVATE_valuesGetLowerBound(e) {
  return "nullValue" in e ? se : "booleanValue" in e ? {
    booleanValue: false
  } : "integerValue" in e || "doubleValue" in e ? {
    doubleValue: NaN
  } : "timestampValue" in e ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "stringValue" in e ? {
    stringValue: ""
  } : "bytesValue" in e ? {
    bytesValue: ""
  } : "referenceValue" in e ? __PRIVATE_refValue(DatabaseId.empty(), DocumentKey.empty()) : "geoPointValue" in e ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "arrayValue" in e ? {
    arrayValue: {}
  } : "mapValue" in e ? {
    mapValue: {}
  } : fail();
}
function __PRIVATE_valuesGetUpperBound(e) {
  return "nullValue" in e ? {
    booleanValue: false
  } : "booleanValue" in e ? {
    doubleValue: NaN
  } : "integerValue" in e || "doubleValue" in e ? {
    timestampValue: {
      seconds: Number.MIN_SAFE_INTEGER
    }
  } : "timestampValue" in e ? {
    stringValue: ""
  } : "stringValue" in e ? {
    bytesValue: ""
  } : "bytesValue" in e ? __PRIVATE_refValue(DatabaseId.empty(), DocumentKey.empty()) : "referenceValue" in e ? {
    geoPointValue: {
      latitude: -90,
      longitude: -180
    }
  } : "geoPointValue" in e ? {
    arrayValue: {}
  } : "arrayValue" in e ? {
    mapValue: {}
  } : "mapValue" in e ? ie : fail();
}
function __PRIVATE_lowerBoundCompare(e, t) {
  const n = __PRIVATE_valueCompare(e.value, t.value);
  return 0 !== n ? n : e.inclusive && !t.inclusive ? -1 : !e.inclusive && t.inclusive ? 1 : 0;
}
function __PRIVATE_upperBoundCompare(e, t) {
  const n = __PRIVATE_valueCompare(e.value, t.value);
  return 0 !== n ? n : e.inclusive && !t.inclusive ? 1 : !e.inclusive && t.inclusive ? -1 : 0;
}
var ObjectValue = class _ObjectValue {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new _ObjectValue({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let n = 0; n < e.length - 1; ++n) if (t = (t.mapValue.fields || {})[e.get(n)], !__PRIVATE_isMapValue(t)) return null;
      return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t = FieldPath$1.emptyPath(), n = {}, r = [];
    e.forEach((e2, i2) => {
      if (!t.isImmediateParentOf(i2)) {
        const e3 = this.getFieldsMap(t);
        this.applyChanges(e3, n, r), n = {}, r = [], t = i2.popLast();
      }
      e2 ? n[i2.lastSegment()] = __PRIVATE_deepClone(e2) : r.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(t);
    this.applyChanges(i, n, r);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t = this.field(e.popLast());
    __PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return __PRIVATE_valueEquals(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = {
      fields: {}
    });
    for (let n = 0; n < e.length; ++n) {
      let r = t.mapValue.fields[e.get(n)];
      __PRIVATE_isMapValue(r) && r.mapValue.fields || (r = {
        mapValue: {
          fields: {}
        }
      }, t.mapValue.fields[e.get(n)] = r), t = r;
    }
    return t.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t, n) {
    forEach(t, (t2, n2) => e[t2] = n2);
    for (const t2 of n) delete e[t2];
  }
  clone() {
    return new _ObjectValue(__PRIVATE_deepClone(this.value));
  }
};
function __PRIVATE_extractFieldMask(e) {
  const t = [];
  return forEach(e.fields, (e2, n) => {
    const r = new FieldPath$1([e2]);
    if (__PRIVATE_isMapValue(n)) {
      const e3 = __PRIVATE_extractFieldMask(n.mapValue).fields;
      if (0 === e3.length)
        t.push(r);
      else
        for (const n2 of e3) t.push(r.child(n2));
    } else
      t.push(r);
  }), new FieldMask(t);
}
var MutableDocument = class _MutableDocument {
  constructor(e, t, n, r, i, s, o) {
    this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = s, this.documentState = o;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new _MutableDocument(
      e,
      0,
      /* version */
      SnapshotVersion.min(),
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t, n, r) {
    return new _MutableDocument(
      e,
      1,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      n,
      r,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t) {
    return new _MutableDocument(
      e,
      2,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t) {
    return new _MutableDocument(
      e,
      3,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t) {
    return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = SnapshotVersion.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(e) {
    return e instanceof _MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var Bound = class {
  constructor(e, t) {
    this.position = e, this.inclusive = t;
  }
};
function __PRIVATE_boundCompareToDocument(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s = t[i], o = e.position[i];
    if (s.field.isKeyField()) r = DocumentKey.comparator(DocumentKey.fromName(o.referenceValue), n.key);
    else {
      r = __PRIVATE_valueCompare(o, n.data.field(s.field));
    }
    if ("desc" === s.dir && (r *= -1), 0 !== r) break;
  }
  return r;
}
function __PRIVATE_boundEquals(e, t) {
  if (null === e) return null === t;
  if (null === t) return false;
  if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return false;
  for (let n = 0; n < e.position.length; n++) {
    if (!__PRIVATE_valueEquals(e.position[n], t.position[n])) return false;
  }
  return true;
}
var OrderBy = class {
  constructor(e, t = "asc") {
    this.field = e, this.dir = t;
  }
};
function __PRIVATE_orderByEquals(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
var Filter = class {
};
var FieldFilter = class _FieldFilter extends Filter {
  constructor(e, t, n) {
    super(), this.field = e, this.op = t, this.value = n;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t, n) {
    return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new __PRIVATE_KeyFieldFilter(e, t, n) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, n) : "in" === t ? new __PRIVATE_InFilter(e, n) : "not-in" === t ? new __PRIVATE_NotInFilter(e, n) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, n) : new _FieldFilter(e, t, n);
  }
  static createKeyFieldInFilter(e, t, n) {
    return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, n) : new __PRIVATE_KeyFieldNotInFilter(e, n);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return "!=" === this.op ? null !== t && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return 0 === e;
      case "!=":
        return 0 !== e;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return fail();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var CompositeFilter = class _CompositeFilter extends Filter {
  constructor(e, t) {
    super(), this.filters = e, this.op = t, this.ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t) {
    return new _CompositeFilter(e, t);
  }
  matches(e) {
    return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find((t) => !t.matches(e)) : void 0 !== this.filters.find((t) => t.matches(e));
  }
  getFlattenedFilters() {
    return null !== this.ae || (this.ae = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function __PRIVATE_compositeFilterIsConjunction(e) {
  return "and" === e.op;
}
function __PRIVATE_compositeFilterIsDisjunction(e) {
  return "or" === e.op;
}
function __PRIVATE_compositeFilterIsFlatConjunction(e) {
  return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
}
function __PRIVATE_compositeFilterIsFlat(e) {
  for (const t of e.filters) if (t instanceof CompositeFilter) return false;
  return true;
}
function __PRIVATE_canonifyFilter(e) {
  if (e instanceof FieldFilter)
    return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
  if (__PRIVATE_compositeFilterIsFlatConjunction(e))
    return e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
  {
    const t = e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
    return `${e.op}(${t})`;
  }
}
function __PRIVATE_filterEquals(e, t) {
  return e instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(e2, t2) {
    return t2 instanceof FieldFilter && e2.op === t2.op && e2.field.isEqual(t2.field) && __PRIVATE_valueEquals(e2.value, t2.value);
  }(e, t) : e instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(e2, t2) {
    if (t2 instanceof CompositeFilter && e2.op === t2.op && e2.filters.length === t2.filters.length) {
      return e2.filters.reduce((e3, n, r) => e3 && __PRIVATE_filterEquals(n, t2.filters[r]), true);
    }
    return false;
  }(e, t) : void fail();
}
function __PRIVATE_compositeFilterWithAddedFilters(e, t) {
  const n = e.filters.concat(t);
  return CompositeFilter.create(n, e.op);
}
function __PRIVATE_stringifyFilter(e) {
  return e instanceof FieldFilter ? function __PRIVATE_stringifyFieldFilter(e2) {
    return `${e2.field.canonicalString()} ${e2.op} ${canonicalId(e2.value)}`;
  }(e) : e instanceof CompositeFilter ? function __PRIVATE_stringifyCompositeFilter(e2) {
    return e2.op.toString() + " {" + e2.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
  }(e) : "Filter";
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
  constructor(e, t, n) {
    super(e, t, n), this.key = DocumentKey.fromName(n.referenceValue);
  }
  matches(e) {
    const t = DocumentKey.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
};
var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
};
var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
};
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
  var n;
  return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e2) => DocumentKey.fromName(e2.referenceValue));
}
var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
  }
};
var __PRIVATE_InFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_NotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return false;
    const t = e.data.field(this.field);
    return null !== t && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2));
  }
};
var __PRIVATE_TargetImpl = class {
  constructor(e, t = null, n = [], r = [], i = null, s = null, o = null) {
    this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = s, this.endAt = o, this.ue = null;
  }
};
function __PRIVATE_newTarget(e, t = null, n = [], r = [], i = null, s = null, o = null) {
  return new __PRIVATE_TargetImpl(e, t, n, r, i, s, o);
}
function __PRIVATE_canonifyTarget(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.ue) {
    let e2 = t.path.canonicalString();
    null !== t.collectionGroup && (e2 += "|cg:" + t.collectionGroup), e2 += "|f:", e2 += t.filters.map((e3) => __PRIVATE_canonifyFilter(e3)).join(","), e2 += "|ob:", e2 += t.orderBy.map((e3) => function __PRIVATE_canonifyOrderBy(e4) {
      return e4.field.canonicalString() + e4.dir;
    }(e3)).join(","), __PRIVATE_isNullOrUndefined(t.limit) || (e2 += "|l:", e2 += t.limit), t.startAt && (e2 += "|lb:", e2 += t.startAt.inclusive ? "b:" : "a:", e2 += t.startAt.position.map((e3) => canonicalId(e3)).join(",")), t.endAt && (e2 += "|ub:", e2 += t.endAt.inclusive ? "a:" : "b:", e2 += t.endAt.position.map((e3) => canonicalId(e3)).join(",")), t.ue = e2;
  }
  return t.ue;
}
function __PRIVATE_targetEquals(e, t) {
  if (e.limit !== t.limit) return false;
  if (e.orderBy.length !== t.orderBy.length) return false;
  for (let n = 0; n < e.orderBy.length; n++) if (!__PRIVATE_orderByEquals(e.orderBy[n], t.orderBy[n])) return false;
  if (e.filters.length !== t.filters.length) return false;
  for (let n = 0; n < e.filters.length; n++) if (!__PRIVATE_filterEquals(e.filters[n], t.filters[n])) return false;
  return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!__PRIVATE_boundEquals(e.startAt, t.startAt) && __PRIVATE_boundEquals(e.endAt, t.endAt);
}
function __PRIVATE_targetIsDocumentTarget(e) {
  return DocumentKey.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length;
}
function __PRIVATE_targetGetFieldFiltersForPath(e, t) {
  return e.filters.filter((e2) => e2 instanceof FieldFilter && e2.field.isEqual(t));
}
function __PRIVATE_targetGetAscendingBound(e, t, n) {
  let r = se, i = true;
  for (const n2 of __PRIVATE_targetGetFieldFiltersForPath(e, t)) {
    let e2 = se, t2 = true;
    switch (n2.op) {
      case "<":
      case "<=":
        e2 = __PRIVATE_valuesGetLowerBound(n2.value);
        break;
      case "==":
      case "in":
      case ">=":
        e2 = n2.value;
        break;
      case ">":
        e2 = n2.value, t2 = false;
        break;
      case "!=":
      case "not-in":
        e2 = se;
    }
    __PRIVATE_lowerBoundCompare({
      value: r,
      inclusive: i
    }, {
      value: e2,
      inclusive: t2
    }) < 0 && (r = e2, i = t2);
  }
  if (null !== n) for (let s = 0; s < e.orderBy.length; ++s) {
    if (e.orderBy[s].field.isEqual(t)) {
      const e2 = n.position[s];
      __PRIVATE_lowerBoundCompare({
        value: r,
        inclusive: i
      }, {
        value: e2,
        inclusive: n.inclusive
      }) < 0 && (r = e2, i = n.inclusive);
      break;
    }
  }
  return {
    value: r,
    inclusive: i
  };
}
function __PRIVATE_targetGetDescendingBound(e, t, n) {
  let r = ie, i = true;
  for (const n2 of __PRIVATE_targetGetFieldFiltersForPath(e, t)) {
    let e2 = ie, t2 = true;
    switch (n2.op) {
      case ">=":
      case ">":
        e2 = __PRIVATE_valuesGetUpperBound(n2.value), t2 = false;
        break;
      case "==":
      case "in":
      case "<=":
        e2 = n2.value;
        break;
      case "<":
        e2 = n2.value, t2 = false;
        break;
      case "!=":
      case "not-in":
        e2 = ie;
    }
    __PRIVATE_upperBoundCompare({
      value: r,
      inclusive: i
    }, {
      value: e2,
      inclusive: t2
    }) > 0 && (r = e2, i = t2);
  }
  if (null !== n) for (let s = 0; s < e.orderBy.length; ++s) {
    if (e.orderBy[s].field.isEqual(t)) {
      const e2 = n.position[s];
      __PRIVATE_upperBoundCompare({
        value: r,
        inclusive: i
      }, {
        value: e2,
        inclusive: n.inclusive
      }) > 0 && (r = e2, i = n.inclusive);
      break;
    }
  }
  return {
    value: r,
    inclusive: i
  };
}
var __PRIVATE_QueryImpl = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t = null, n = [], r = [], i = null, s = "F", o = null, _ = null) {
    this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = _, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.he = null, this.startAt, this.endAt;
  }
};
function __PRIVATE_newQuery(e, t, n, r, i, s, o, _) {
  return new __PRIVATE_QueryImpl(e, t, n, r, i, s, o, _);
}
function __PRIVATE_newQueryForPath(e) {
  return new __PRIVATE_QueryImpl(e);
}
function __PRIVATE_queryMatchesAllDocuments(e) {
  return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
}
function __PRIVATE_isCollectionGroupQuery(e) {
  return null !== e.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.ce) {
    t.ce = [];
    const e2 = /* @__PURE__ */ new Set();
    for (const n2 of t.explicitOrderBy) t.ce.push(n2), e2.add(n2.field.canonicalString());
    const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", r = function __PRIVATE_getInequalityFilterFields(e3) {
      let t2 = new SortedSet(FieldPath$1.comparator);
      return e3.filters.forEach((e4) => {
        e4.getFlattenedFilters().forEach((e5) => {
          e5.isInequality() && (t2 = t2.add(e5.field));
        });
      }), t2;
    }(t);
    r.forEach((r2) => {
      e2.has(r2.canonicalString()) || r2.isKeyField() || t.ce.push(new OrderBy(r2, n));
    }), // Add the document key field to the last if it is not explicitly ordered.
    e2.has(FieldPath$1.keyField().canonicalString()) || t.ce.push(new OrderBy(FieldPath$1.keyField(), n));
  }
  return t.ce;
}
function __PRIVATE_queryToTarget(e) {
  const t = __PRIVATE_debugCast(e);
  return t.le || (t.le = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.le;
}
function __PRIVATE_queryToAggregateTarget(e) {
  const t = __PRIVATE_debugCast(e);
  return t.he || // Do not include implicit order-bys for aggregate queries.
  (t.he = __PRIVATE__queryToTarget(t, e.explicitOrderBy)), t.he;
}
function __PRIVATE__queryToTarget(e, t) {
  if ("F" === e.limitType) return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
  {
    t = t.map((e2) => {
      const t2 = "desc" === e2.dir ? "asc" : "desc";
      return new OrderBy(e2.field, t2);
    });
    const n = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function __PRIVATE_queryWithAddedFilter(e, t) {
  const n = e.filters.concat([t]);
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function __PRIVATE_queryWithLimit(e, t, n) {
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t) {
  return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
}
function __PRIVATE_canonifyQuery(e) {
  return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
}
function __PRIVATE_stringifyQuery(e) {
  return `Query(target=${function __PRIVATE_stringifyTarget(e2) {
    let t = e2.path.canonicalString();
    return null !== e2.collectionGroup && (t += " collectionGroup=" + e2.collectionGroup), e2.filters.length > 0 && (t += `, filters: [${e2.filters.map((e3) => __PRIVATE_stringifyFilter(e3)).join(", ")}]`), __PRIVATE_isNullOrUndefined(e2.limit) || (t += ", limit: " + e2.limit), e2.orderBy.length > 0 && (t += `, orderBy: [${e2.orderBy.map((e3) => function __PRIVATE_stringifyOrderBy(e4) {
      return `${e4.field.canonicalString()} (${e4.dir})`;
    }(e3)).join(", ")}]`), e2.startAt && (t += ", startAt: ", t += e2.startAt.inclusive ? "b:" : "a:", t += e2.startAt.position.map((e3) => canonicalId(e3)).join(",")), e2.endAt && (t += ", endAt: ", t += e2.endAt.inclusive ? "a:" : "b:", t += e2.endAt.position.map((e3) => canonicalId(e3)).join(",")), `Target(${t})`;
  }(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
}
function __PRIVATE_queryMatches(e, t) {
  return t.isFoundDocument() && function __PRIVATE_queryMatchesPathAndCollectionGroup(e2, t2) {
    const n = t2.key.path;
    return null !== e2.collectionGroup ? t2.key.hasCollectionId(e2.collectionGroup) && e2.path.isPrefixOf(n) : DocumentKey.isDocumentKey(e2.path) ? e2.path.isEqual(n) : e2.path.isImmediateParentOf(n);
  }(e, t) && function __PRIVATE_queryMatchesOrderBy(e2, t2) {
    for (const n of __PRIVATE_queryNormalizedOrderBy(e2))
      if (!n.field.isKeyField() && null === t2.data.field(n.field)) return false;
    return true;
  }(e, t) && function __PRIVATE_queryMatchesFilters(e2, t2) {
    for (const n of e2.filters) if (!n.matches(t2)) return false;
    return true;
  }(e, t) && function __PRIVATE_queryMatchesBounds(e2, t2) {
    if (e2.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function __PRIVATE_boundSortsBeforeDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r <= 0 : r < 0;
    }(e2.startAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    if (e2.endAt && !function __PRIVATE_boundSortsAfterDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r >= 0 : r > 0;
    }(e2.endAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    return true;
  }(e, t);
}
function __PRIVATE_queryCollectionGroup(e) {
  return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
}
function __PRIVATE_newQueryComparator(e) {
  return (t, n) => {
    let r = false;
    for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
      const e2 = __PRIVATE_compareDocs(i, t, n);
      if (0 !== e2) return e2;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function __PRIVATE_compareDocs(e, t, n) {
  const r = e.field.isKeyField() ? DocumentKey.comparator(t.key, n.key) : function __PRIVATE_compareDocumentsByField(e2, t2, n2) {
    const r2 = t2.data.field(e2), i = n2.data.field(e2);
    return null !== r2 && null !== i ? __PRIVATE_valueCompare(r2, i) : fail();
  }(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return fail();
  }
}
var ObjectMap = class {
  constructor(e, t) {
    this.mapKeyFn = e, this.equalsFn = t, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(e) {
    const t = this.mapKeyFn(e), n = this.inner[t];
    if (void 0 !== n) {
      for (const [t2, r] of n) if (this.equalsFn(t2, e)) return r;
    }
  }
  has(e) {
    return void 0 !== this.get(e);
  }
  /** Put this key and value in the map. */
  set(e, t) {
    const n = this.mapKeyFn(e), r = this.inner[n];
    if (void 0 === r) return this.inner[n] = [[e, t]], void this.innerSize++;
    for (let n2 = 0; n2 < r.length; n2++) if (this.equalsFn(r[n2][0], e))
      return void (r[n2] = [e, t]);
    r.push([e, t]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(e) {
    const t = this.mapKeyFn(e), n = this.inner[t];
    if (void 0 === n) return false;
    for (let r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, true;
    return false;
  }
  forEach(e) {
    forEach(this.inner, (t, n) => {
      for (const [t2, r] of n) e(t2, r);
    });
  }
  isEmpty() {
    return isEmpty(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var oe = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
  return oe;
}
var _e = new SortedMap(DocumentKey.comparator);
function documentMap(...e) {
  let t = _e;
  for (const n of e) t = t.insert(n.key, n);
  return t;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
  let t = _e;
  return e.forEach((e2, n) => t = t.insert(e2, n.overlayedDocument)), t;
}
function __PRIVATE_newOverlayMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
  return new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t));
}
var ae = new SortedMap(DocumentKey.comparator);
var ue = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...e) {
  let t = ue;
  for (const n of e) t = t.add(n);
  return t;
}
var ce = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
  return ce;
}
function __PRIVATE_toDouble(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return {
      doubleValue: "NaN"
    };
    if (t === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (t === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t
  };
}
function __PRIVATE_toInteger(e) {
  return {
    integerValue: "" + e
  };
}
function toNumber(e, t) {
  return isSafeInteger(t) ? __PRIVATE_toInteger(t) : __PRIVATE_toDouble(e, t);
}
var TransformOperation = class {
  constructor() {
    this._ = void 0;
  }
};
function __PRIVATE_applyTransformOperationToLocalView(e, t, n) {
  return e instanceof __PRIVATE_ServerTimestampTransform ? function serverTimestamp$1(e2, t2) {
    const n2 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: e2.seconds,
            nanos: e2.nanoseconds
          }
        }
      }
    };
    return t2 && __PRIVATE_isServerTimestamp(t2) && (t2 = __PRIVATE_getPreviousValue(t2)), t2 && (n2.fields.__previous_value__ = t2), {
      mapValue: n2
    };
  }(n, t) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e2, t2) {
    const n2 = __PRIVATE_computeTransformOperationBaseValue(e2, t2), r = asNumber(n2) + asNumber(e2.Pe);
    return isInteger(n2) && isInteger(e2.Pe) ? __PRIVATE_toInteger(r) : __PRIVATE_toDouble(e2.serializer, r);
  }(e, t);
}
function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, n) {
  return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : n;
}
function __PRIVATE_computeTransformOperationBaseValue(e, t) {
  return e instanceof __PRIVATE_NumericIncrementTransformOperation ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function __PRIVATE_isNumber(e2) {
      return isInteger(e2) || function __PRIVATE_isDouble(e3) {
        return !!e3 && "doubleValue" in e3;
      }(e2);
    }(t) ? t : {
      integerValue: 0
    }
  ) : null;
}
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
};
var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
  const n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n.some((e2) => __PRIVATE_valueEquals(e2, t2)) || n.push(t2);
  return {
    arrayValue: {
      values: n
    }
  };
}
var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
  let n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n = n.filter((e2) => !__PRIVATE_valueEquals(e2, t2));
  return {
    arrayValue: {
      values: n
    }
  };
}
var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
  constructor(e, t) {
    super(), this.serializer = e, this.Pe = t;
  }
};
function asNumber(e) {
  return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e) {
  return isArray(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
var FieldTransform = class {
  constructor(e, t) {
    this.field = e, this.transform = t;
  }
};
function __PRIVATE_fieldTransformEquals(e, t) {
  return e.field.isEqual(t.field) && function __PRIVATE_transformOperationEquals(e2, t2) {
    return e2 instanceof __PRIVATE_ArrayUnionTransformOperation && t2 instanceof __PRIVATE_ArrayUnionTransformOperation || e2 instanceof __PRIVATE_ArrayRemoveTransformOperation && t2 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e2.elements, t2.elements, __PRIVATE_valueEquals) : e2 instanceof __PRIVATE_NumericIncrementTransformOperation && t2 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e2.Pe, t2.Pe) : e2 instanceof __PRIVATE_ServerTimestampTransform && t2 instanceof __PRIVATE_ServerTimestampTransform;
  }(e.transform, t.transform);
}
var MutationResult = class {
  constructor(e, t) {
    this.version = e, this.transformResults = t;
  }
};
var Precondition = class _Precondition {
  constructor(e, t) {
    this.updateTime = e, this.exists = t;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new _Precondition();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new _Precondition(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new _Precondition(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
};
function __PRIVATE_preconditionIsValidForDocument(e, t) {
  return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument();
}
var Mutation = class {
};
function __PRIVATE_calculateOverlayMutation(e, t) {
  if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
  if (null === t) return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
  {
    const n = e.data, r = ObjectValue.empty();
    let i = new SortedSet(FieldPath$1.comparator);
    for (let e2 of t.fields) if (!i.has(e2)) {
      let t2 = n.field(e2);
      null === t2 && e2.length > 1 && (e2 = e2.popLast(), t2 = n.field(e2)), null === t2 ? r.delete(e2) : r.set(e2, t2), i = i.add(e2);
    }
    return new __PRIVATE_PatchMutation(e.key, r, new FieldMask(i.toArray()), Precondition.none());
  }
}
function __PRIVATE_mutationApplyToRemoteDocument(e, t, n) {
  e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToRemoteDocument(e2, t2, n2) {
    const r = e2.value.clone(), i = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults);
    r.setAll(i), t2.convertToFoundDocument(n2.version, r).setHasCommittedMutations();
  }(e, t, n) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToRemoteDocument(e2, t2, n2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return void t2.convertToUnknownDocument(n2.version);
    const r = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults), i = t2.data;
    i.setAll(__PRIVATE_getPatch(e2)), i.setAll(r), t2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  }(e, t, n) : function __PRIVATE_deleteMutationApplyToRemoteDocument(e2, t2, n2) {
    t2.convertToNoDocument(n2.version).setHasCommittedMutations();
  }(0, t, n);
}
function __PRIVATE_mutationApplyToLocalView(e, t, n, r) {
  return e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return n2;
    const i = e2.value.clone(), s = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2);
    return i.setAll(s), t2.convertToFoundDocument(t2.version, i).setHasLocalMutations(), null;
  }(e, t, n, r) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return n2;
    const i = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2), s = t2.data;
    if (s.setAll(__PRIVATE_getPatch(e2)), s.setAll(i), t2.convertToFoundDocument(t2.version, s).setHasLocalMutations(), null === n2) return null;
    return n2.unionWith(e2.fieldMask.fields).unionWith(e2.fieldTransforms.map((e3) => e3.field));
  }(e, t, n, r) : function __PRIVATE_deleteMutationApplyToLocalView(e2, t2, n2) {
    if (__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return t2.convertToNoDocument(t2.version).setHasLocalMutations(), null;
    return n2;
  }(e, t, n);
}
function __PRIVATE_mutationExtractBaseValue(e, t) {
  let n = null;
  for (const r of e.fieldTransforms) {
    const e2 = t.data.field(r.field), i = __PRIVATE_computeTransformOperationBaseValue(r.transform, e2 || null);
    null != i && (null === n && (n = ObjectValue.empty()), n.set(r.field, i));
  }
  return n || null;
}
function __PRIVATE_mutationEquals(e, t) {
  return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function __PRIVATE_fieldTransformsAreEqual(e2, t2) {
    return void 0 === e2 && void 0 === t2 || !(!e2 || !t2) && __PRIVATE_arrayEquals(e2, t2, (e3, t3) => __PRIVATE_fieldTransformEquals(e3, t3));
  }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
var __PRIVATE_SetMutation = class extends Mutation {
  constructor(e, t, n, r = []) {
    super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_PatchMutation = class extends Mutation {
  constructor(e, t, n, r, i = []) {
    super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function __PRIVATE_getPatch(e) {
  const t = /* @__PURE__ */ new Map();
  return e.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const r = e.data.field(n);
      t.set(n, r);
    }
  }), t;
}
function __PRIVATE_serverTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  __PRIVATE_hardAssert(e.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = e[i], o = s.transform, _ = t.data.field(s.field);
    r.set(s.field, __PRIVATE_applyTransformOperationToRemoteDocument(o, _, n[i]));
  }
  return r;
}
function __PRIVATE_localTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of e) {
    const e2 = i.transform, s = n.data.field(i.field);
    r.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e2, s, t));
  }
  return r;
}
var __PRIVATE_DeleteMutation = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_VerifyMutation = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var MutationBatch = class {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(e, t, n, r) {
    this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(e, t) {
    const n = t.mutationResults;
    for (let t2 = 0; t2 < this.mutations.length; t2++) {
      const r = this.mutations[t2];
      if (r.key.isEqual(e.key)) {
        __PRIVATE_mutationApplyToRemoteDocument(r, e, n[t2]);
      }
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(e, t) {
    for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
    for (const n of this.mutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
    return t;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(e, t) {
    const n = __PRIVATE_newMutationMap();
    return this.mutations.forEach((r) => {
      const i = e.get(r.key), s = i.overlayedDocument;
      let o = this.applyToLocalView(s, i.mutatedFields);
      o = t.has(r.key) ? null : o;
      const _ = __PRIVATE_calculateOverlayMutation(s, o);
      null !== _ && n.set(r.key, _), s.isValidDocument() || s.convertToNoDocument(SnapshotVersion.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), __PRIVATE_documentKeySet());
  }
  isEqual(e) {
    return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, (e2, t) => __PRIVATE_mutationEquals(e2, t)) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e2, t) => __PRIVATE_mutationEquals(e2, t));
  }
};
var MutationBatchResult = class _MutationBatchResult {
  constructor(e, t, n, r) {
    this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(e, t, n) {
    __PRIVATE_hardAssert(e.mutations.length === n.length);
    let r = /* @__PURE__ */ function __PRIVATE_documentVersionMap() {
      return ae;
    }();
    const i = e.mutations;
    for (let e2 = 0; e2 < i.length; e2++) r = r.insert(i[e2].key, n[e2].version);
    return new _MutationBatchResult(e, t, n, r);
  }
};
var Overlay = class {
  constructor(e, t) {
    this.largestBatchId = e, this.mutation = t;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return null !== e && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var __PRIVATE_AggregateImpl = class {
  constructor(e, t, n) {
    this.alias = e, this.aggregateType = t, this.fieldPath = n;
  }
};
var ExistenceFilter = class {
  constructor(e, t) {
    this.count = e, this.unchangedNames = t;
  }
};
var le;
var he;
function __PRIVATE_isPermanentError(e) {
  switch (e) {
    default:
      return fail();
    case C.CANCELLED:
    case C.UNKNOWN:
    case C.DEADLINE_EXCEEDED:
    case C.RESOURCE_EXHAUSTED:
    case C.INTERNAL:
    case C.UNAVAILABLE:
    case C.UNAUTHENTICATED:
      return false;
    case C.INVALID_ARGUMENT:
    case C.NOT_FOUND:
    case C.ALREADY_EXISTS:
    case C.PERMISSION_DENIED:
    case C.FAILED_PRECONDITION:
    case C.ABORTED:
    case C.OUT_OF_RANGE:
    case C.UNIMPLEMENTED:
    case C.DATA_LOSS:
      return true;
  }
}
function __PRIVATE_mapCodeFromRpcCode(e) {
  if (void 0 === e)
    return __PRIVATE_logError("GRPC error has no .code"), C.UNKNOWN;
  switch (e) {
    case le.OK:
      return C.OK;
    case le.CANCELLED:
      return C.CANCELLED;
    case le.UNKNOWN:
      return C.UNKNOWN;
    case le.DEADLINE_EXCEEDED:
      return C.DEADLINE_EXCEEDED;
    case le.RESOURCE_EXHAUSTED:
      return C.RESOURCE_EXHAUSTED;
    case le.INTERNAL:
      return C.INTERNAL;
    case le.UNAVAILABLE:
      return C.UNAVAILABLE;
    case le.UNAUTHENTICATED:
      return C.UNAUTHENTICATED;
    case le.INVALID_ARGUMENT:
      return C.INVALID_ARGUMENT;
    case le.NOT_FOUND:
      return C.NOT_FOUND;
    case le.ALREADY_EXISTS:
      return C.ALREADY_EXISTS;
    case le.PERMISSION_DENIED:
      return C.PERMISSION_DENIED;
    case le.FAILED_PRECONDITION:
      return C.FAILED_PRECONDITION;
    case le.ABORTED:
      return C.ABORTED;
    case le.OUT_OF_RANGE:
      return C.OUT_OF_RANGE;
    case le.UNIMPLEMENTED:
      return C.UNIMPLEMENTED;
    case le.DATA_LOSS:
      return C.DATA_LOSS;
    default:
      return fail();
  }
}
(he = le || (le = {}))[he.OK = 0] = "OK", he[he.CANCELLED = 1] = "CANCELLED", he[he.UNKNOWN = 2] = "UNKNOWN", he[he.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", he[he.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", he[he.NOT_FOUND = 5] = "NOT_FOUND", he[he.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", he[he.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", he[he.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", he[he.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", he[he.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", he[he.ABORTED = 10] = "ABORTED", he[he.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", he[he.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", he[he.INTERNAL = 13] = "INTERNAL", he[he.UNAVAILABLE = 14] = "UNAVAILABLE", he[he.DATA_LOSS = 15] = "DATA_LOSS";
var Pe = null;
function __PRIVATE_newTextEncoder() {
  return new TextEncoder();
}
var Ie = new Integer([4294967295, 4294967295], 0);
function __PRIVATE_getMd5HashValue(e) {
  const t = __PRIVATE_newTextEncoder().encode(e), n = new Md5();
  return n.update(t), new Uint8Array(n.digest());
}
function __PRIVATE_get64BitUints(e) {
  const t = new DataView(e.buffer), n = t.getUint32(
    0,
    /* littleEndian= */
    true
  ), r = t.getUint32(
    4,
    /* littleEndian= */
    true
  ), i = t.getUint32(
    8,
    /* littleEndian= */
    true
  ), s = t.getUint32(
    12,
    /* littleEndian= */
    true
  );
  return [new Integer([n, r], 0), new Integer([i, s], 0)];
}
var BloomFilter = class _BloomFilter {
  constructor(e, t, n) {
    if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8) throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t}`);
    if (n < 0) throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
    if (e.length > 0 && 0 === this.hashCount)
      throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
    if (0 === e.length && 0 !== t)
      throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t}`);
    this.Ie = 8 * e.length - t, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Te = Integer.fromNumber(this.Ie);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  Ee(e, t, n) {
    let r = e.add(t.multiply(Integer.fromNumber(n)));
    return 1 === r.compare(Ie) && (r = new Integer([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.Te).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  de(e) {
    return 0 != (this.bitmap[Math.floor(e / 8)] & 1 << e % 8);
  }
  mightContain(e) {
    if (0 === this.Ie) return false;
    const t = __PRIVATE_getMd5HashValue(e), [n, r] = __PRIVATE_get64BitUints(t);
    for (let e2 = 0; e2 < this.hashCount; e2++) {
      const t2 = this.Ee(n, r, e2);
      if (!this.de(t2)) return false;
    }
    return true;
  }
  /** Create bloom filter for testing purposes only. */
  static create(e, t, n) {
    const r = e % 8 == 0 ? 0 : 8 - e % 8, i = new Uint8Array(Math.ceil(e / 8)), s = new _BloomFilter(i, r, t);
    return n.forEach((e2) => s.insert(e2)), s;
  }
  insert(e) {
    if (0 === this.Ie) return;
    const t = __PRIVATE_getMd5HashValue(e), [n, r] = __PRIVATE_get64BitUints(t);
    for (let e2 = 0; e2 < this.hashCount; e2++) {
      const t2 = this.Ee(n, r, e2);
      this.Ae(t2);
    }
  }
  Ae(e) {
    const t = Math.floor(e / 8), n = e % 8;
    this.bitmap[t] |= 1 << n;
  }
};
var __PRIVATE_BloomFilterError = class extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
};
var RemoteEvent = class _RemoteEvent {
  constructor(e, t, n, r, i) {
    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
    const r = /* @__PURE__ */ new Map();
    return r.set(e, TargetChange.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new _RemoteEvent(SnapshotVersion.min(), r, new SortedMap(__PRIVATE_primitiveComparator), __PRIVATE_mutableDocumentMap(), __PRIVATE_documentKeySet());
  }
};
var TargetChange = class _TargetChange {
  constructor(e, t, n, r, i) {
    this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
    return new _TargetChange(n, t, __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet());
  }
};
var __PRIVATE_DocumentWatchChange = class {
  constructor(e, t, n, r) {
    this.Re = e, this.removedTargetIds = t, this.key = n, this.Ve = r;
  }
};
var __PRIVATE_ExistenceFilterChange = class {
  constructor(e, t) {
    this.targetId = e, this.me = t;
  }
};
var __PRIVATE_WatchTargetChange = class {
  constructor(e, t, n = ByteString.EMPTY_BYTE_STRING, r = null) {
    this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r;
  }
};
var __PRIVATE_TargetState = class {
  constructor() {
    this.fe = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.ge = __PRIVATE_snapshotChangesMap(), /** See public getters for explanations of these fields. */
    this.pe = ByteString.EMPTY_BYTE_STRING, this.ye = false, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.we = true;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.ye;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.pe;
  }
  /** Whether this target has pending target adds or target removes. */
  get Se() {
    return 0 !== this.fe;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get be() {
    return this.we;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  De(e) {
    e.approximateByteSize() > 0 && (this.we = true, this.pe = e);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  Ce() {
    let e = __PRIVATE_documentKeySet(), t = __PRIVATE_documentKeySet(), n = __PRIVATE_documentKeySet();
    return this.ge.forEach((r, i) => {
      switch (i) {
        case 0:
          e = e.add(r);
          break;
        case 2:
          t = t.add(r);
          break;
        case 1:
          n = n.add(r);
          break;
        default:
          fail();
      }
    }), new TargetChange(this.pe, this.ye, e, t, n);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  ve() {
    this.we = false, this.ge = __PRIVATE_snapshotChangesMap();
  }
  Fe(e, t) {
    this.we = true, this.ge = this.ge.insert(e, t);
  }
  Me(e) {
    this.we = true, this.ge = this.ge.remove(e);
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    this.fe -= 1, __PRIVATE_hardAssert(this.fe >= 0);
  }
  Ne() {
    this.we = true, this.ye = true;
  }
};
var __PRIVATE_WatchChangeAggregator = class {
  constructor(e) {
    this.Le = e, /** The internal state of all tracked targets. */
    this.Be = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.ke = __PRIVATE_mutableDocumentMap(), /** A mapping of document keys to their set of target IDs. */
    this.qe = __PRIVATE_documentTargetMap(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Qe = new SortedMap(__PRIVATE_primitiveComparator);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Ke(e) {
    for (const t of e.Re) e.Ve && e.Ve.isFoundDocument() ? this.$e(t, e.Ve) : this.Ue(t, e.key, e.Ve);
    for (const t of e.removedTargetIds) this.Ue(t, e.key, e.Ve);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  We(e) {
    this.forEachTarget(e, (t) => {
      const n = this.Ge(t);
      switch (e.state) {
        case 0:
          this.ze(t) && n.De(e.resumeToken);
          break;
        case 1:
          n.Oe(), n.Se || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          n.ve(), n.De(e.resumeToken);
          break;
        case 2:
          n.Oe(), n.Se || this.removeTarget(t);
          break;
        case 3:
          this.ze(t) && (n.Ne(), n.De(e.resumeToken));
          break;
        case 4:
          this.ze(t) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.je(t), n.De(e.resumeToken));
          break;
        default:
          fail();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(e, t) {
    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach((e2, n) => {
      this.ze(n) && t(n);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  He(e) {
    const t = e.targetId, n = e.me.count, r = this.Je(t);
    if (r) {
      const i = r.target;
      if (__PRIVATE_targetIsDocumentTarget(i)) {
        if (0 === n) {
          const e2 = new DocumentKey(i.path);
          this.Ue(t, e2, MutableDocument.newNoDocument(e2, SnapshotVersion.min()));
        } else __PRIVATE_hardAssert(1 === n);
      } else {
        const r2 = this.Ye(t);
        if (r2 !== n) {
          const n2 = this.Ze(e), i2 = n2 ? this.Xe(n2, e, r2) : 1;
          if (0 !== i2) {
            this.je(t);
            const e2 = 2 === i2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(t, e2);
          }
          null == Pe || Pe.et(function __PRIVATE_createExistenceFilterMismatchInfoForTestingHooks(e2, t2, n3, r3, i3) {
            var s, o, _, a, u, c;
            const l = {
              localCacheCount: e2,
              existenceFilterCount: t2.count,
              databaseId: n3.database,
              projectId: n3.projectId
            }, h = t2.unchangedNames;
            h && (l.bloomFilter = {
              applied: 0 === i3,
              hashCount: null !== (s = null == h ? void 0 : h.hashCount) && void 0 !== s ? s : 0,
              bitmapLength: null !== (a = null === (_ = null === (o = null == h ? void 0 : h.bits) || void 0 === o ? void 0 : o.bitmap) || void 0 === _ ? void 0 : _.length) && void 0 !== a ? a : 0,
              padding: null !== (c = null === (u = null == h ? void 0 : h.bits) || void 0 === u ? void 0 : u.padding) && void 0 !== c ? c : 0,
              mightContain: (e3) => {
                var t3;
                return null !== (t3 = null == r3 ? void 0 : r3.mightContain(e3)) && void 0 !== t3 && t3;
              }
            });
            return l;
          }(r2, e.me, this.Le.tt(), n2, i2));
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  Ze(e) {
    const t = e.me.unchangedNames;
    if (!t || !t.bits) return null;
    const {
      bits: {
        bitmap: n = "",
        padding: r = 0
      },
      hashCount: i = 0
    } = t;
    let s, o;
    try {
      s = __PRIVATE_normalizeByteString(n).toUint8Array();
    } catch (e2) {
      if (e2 instanceof __PRIVATE_Base64DecodeError) return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed (" + e2.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw e2;
    }
    try {
      o = new BloomFilter(s, r, i);
    } catch (e2) {
      return __PRIVATE_logWarn(e2 instanceof __PRIVATE_BloomFilterError ? "BloomFilter error: " : "Applying bloom filter failed: ", e2), null;
    }
    return 0 === o.Ie ? null : o;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  Xe(e, t, n) {
    return t.me.count === n - this.nt(e, t.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  nt(e, t) {
    const n = this.Le.getRemoteKeysForTarget(t);
    let r = 0;
    return n.forEach((n2) => {
      const i = this.Le.tt(), s = `projects/${i.projectId}/databases/${i.database}/documents/${n2.path.canonicalString()}`;
      e.mightContain(s) || (this.Ue(
        t,
        n2,
        /*updatedDocument=*/
        null
      ), r++);
    }), r;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  rt(e) {
    const t = /* @__PURE__ */ new Map();
    this.Be.forEach((n2, r2) => {
      const i = this.Je(r2);
      if (i) {
        if (n2.current && __PRIVATE_targetIsDocumentTarget(i.target)) {
          const t2 = new DocumentKey(i.target.path);
          null !== this.ke.get(t2) || this.it(r2, t2) || this.Ue(r2, t2, MutableDocument.newNoDocument(t2, e));
        }
        n2.be && (t.set(r2, n2.Ce()), n2.ve());
      }
    });
    let n = __PRIVATE_documentKeySet();
    this.qe.forEach((e2, t2) => {
      let r2 = true;
      t2.forEachWhile((e3) => {
        const t3 = this.Je(e3);
        return !t3 || "TargetPurposeLimboResolution" === t3.purpose || (r2 = false, false);
      }), r2 && (n = n.add(e2));
    }), this.ke.forEach((t2, n2) => n2.setReadTime(e));
    const r = new RemoteEvent(e, t, this.Qe, this.ke, n);
    return this.ke = __PRIVATE_mutableDocumentMap(), this.qe = __PRIVATE_documentTargetMap(), this.Qe = new SortedMap(__PRIVATE_primitiveComparator), r;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  $e(e, t) {
    if (!this.ze(e)) return;
    const n = this.it(e, t.key) ? 2 : 0;
    this.Ge(e).Fe(t.key, n), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  Ue(e, t, n) {
    if (!this.ze(e)) return;
    const r = this.Ge(e);
    this.it(e, t) ? r.Fe(
      t,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      r.Me(t)
    ), this.qe = this.qe.insert(t, this.st(t).delete(e)), n && (this.ke = this.ke.insert(t, n));
  }
  removeTarget(e) {
    this.Be.delete(e);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  Ye(e) {
    const t = this.Ge(e).Ce();
    return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  xe(e) {
    this.Ge(e).xe();
  }
  Ge(e) {
    let t = this.Be.get(e);
    return t || (t = new __PRIVATE_TargetState(), this.Be.set(e, t)), t;
  }
  st(e) {
    let t = this.qe.get(e);
    return t || (t = new SortedSet(__PRIVATE_primitiveComparator), this.qe = this.qe.insert(e, t)), t;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  ze(e) {
    const t = null !== this.Je(e);
    return t || __PRIVATE_logDebug("WatchChangeAggregator", "Detected inactive target", e), t;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Je(e) {
    const t = this.Be.get(e);
    return t && t.Se ? null : this.Le.ot(e);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  je(e) {
    this.Be.set(e, new __PRIVATE_TargetState());
    this.Le.getRemoteKeysForTarget(e).forEach((t) => {
      this.Ue(
        e,
        t,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  it(e, t) {
    return this.Le.getRemoteKeysForTarget(e).has(t);
  }
};
function __PRIVATE_documentTargetMap() {
  return new SortedMap(DocumentKey.comparator);
}
function __PRIVATE_snapshotChangesMap() {
  return new SortedMap(DocumentKey.comparator);
}
var Te = /* @__PURE__ */ (() => {
  const e = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return e;
})();
var Ee = /* @__PURE__ */ (() => {
  const e = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return e;
})();
var de = /* @__PURE__ */ (() => {
  const e = {
    and: "AND",
    or: "OR"
  };
  return e;
})();
var JsonProtoSerializer = class {
  constructor(e, t) {
    this.databaseId = e, this.useProto3Json = t;
  }
};
function __PRIVATE_toInt32Proto(e, t) {
  return e.useProto3Json || __PRIVATE_isNullOrUndefined(t) ? t : {
    value: t
  };
}
function toTimestamp(e, t) {
  if (e.useProto3Json) {
    return `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + t.seconds,
    nanos: t.nanoseconds
  };
}
function __PRIVATE_toBytes(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function __PRIVATE_toVersion(e, t) {
  return toTimestamp(e, t.toTimestamp());
}
function __PRIVATE_fromVersion(e) {
  return __PRIVATE_hardAssert(!!e), SnapshotVersion.fromTimestamp(function fromTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return new Timestamp(t.seconds, t.nanos);
  }(e));
}
function __PRIVATE_toResourceName(e, t) {
  return __PRIVATE_toResourcePath(e, t).canonicalString();
}
function __PRIVATE_toResourcePath(e, t) {
  const n = function __PRIVATE_fullyQualifiedPrefixPath(e2) {
    return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
  }(e).child("documents");
  return void 0 === t ? n : n.child(t);
}
function __PRIVATE_fromResourceName(e) {
  const t = ResourcePath.fromString(e);
  return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t)), t;
}
function __PRIVATE_toName(e, t) {
  return __PRIVATE_toResourceName(e.databaseId, t.path);
}
function fromName(e, t) {
  const n = __PRIVATE_fromResourceName(t);
  if (n.get(1) !== e.databaseId.projectId) throw new FirestoreError(C.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
  if (n.get(3) !== e.databaseId.database) throw new FirestoreError(C.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
  return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(n));
}
function __PRIVATE_toQueryPath(e, t) {
  return __PRIVATE_toResourceName(e.databaseId, t);
}
function __PRIVATE_fromQueryPath(e) {
  const t = __PRIVATE_fromResourceName(e);
  return 4 === t.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t);
}
function __PRIVATE_getEncodedDatabaseId(e) {
  return new ResourcePath(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString();
}
function __PRIVATE_extractLocalPathFromResourceName(e) {
  return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
}
function __PRIVATE_toMutationDocument(e, t, n) {
  return {
    name: __PRIVATE_toName(e, t),
    fields: n.value.mapValue.fields
  };
}
function __PRIVATE_fromDocument(e, t, n) {
  const r = fromName(e, t.name), i = __PRIVATE_fromVersion(t.updateTime), s = t.createTime ? __PRIVATE_fromVersion(t.createTime) : SnapshotVersion.min(), o = new ObjectValue({
    mapValue: {
      fields: t.fields
    }
  }), _ = MutableDocument.newFoundDocument(r, i, s, o);
  return n && _.setHasCommittedMutations(), n ? _.setHasCommittedMutations() : _;
}
function __PRIVATE_fromBatchGetDocumentsResponse(e, t) {
  return "found" in t ? function __PRIVATE_fromFound(e2, t2) {
    __PRIVATE_hardAssert(!!t2.found), t2.found.name, t2.found.updateTime;
    const n = fromName(e2, t2.found.name), r = __PRIVATE_fromVersion(t2.found.updateTime), i = t2.found.createTime ? __PRIVATE_fromVersion(t2.found.createTime) : SnapshotVersion.min(), s = new ObjectValue({
      mapValue: {
        fields: t2.found.fields
      }
    });
    return MutableDocument.newFoundDocument(n, r, i, s);
  }(e, t) : "missing" in t ? function __PRIVATE_fromMissing(e2, t2) {
    __PRIVATE_hardAssert(!!t2.missing), __PRIVATE_hardAssert(!!t2.readTime);
    const n = fromName(e2, t2.missing), r = __PRIVATE_fromVersion(t2.readTime);
    return MutableDocument.newNoDocument(n, r);
  }(e, t) : fail();
}
function __PRIVATE_fromWatchChange(e, t) {
  let n;
  if ("targetChange" in t) {
    t.targetChange;
    const r = function __PRIVATE_fromWatchTargetChangeState(e2) {
      return "NO_CHANGE" === e2 ? 0 : "ADD" === e2 ? 1 : "REMOVE" === e2 ? 2 : "CURRENT" === e2 ? 3 : "RESET" === e2 ? 4 : fail();
    }(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], s = function __PRIVATE_fromBytes(e2, t2) {
      return e2.useProto3Json ? (__PRIVATE_hardAssert(void 0 === t2 || "string" == typeof t2), ByteString.fromBase64String(t2 || "")) : (__PRIVATE_hardAssert(void 0 === t2 || // Check if the value is an instance of both Buffer and Uint8Array,
      // despite the fact that Buffer extends Uint8Array. In some
      // environments, such as jsdom, the prototype chain of Buffer
      // does not indicate that it extends Uint8Array.
      t2 instanceof Buffer || t2 instanceof Uint8Array), ByteString.fromUint8Array(t2 || new Uint8Array()));
    }(e, t.targetChange.resumeToken), o = t.targetChange.cause, _ = o && function __PRIVATE_fromRpcStatus(e2) {
      const t2 = void 0 === e2.code ? C.UNKNOWN : __PRIVATE_mapCodeFromRpcCode(e2.code);
      return new FirestoreError(t2, e2.message || "");
    }(o);
    n = new __PRIVATE_WatchTargetChange(r, i, s, _ || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = fromName(e, r.document.name), s = __PRIVATE_fromVersion(r.document.updateTime), o = r.document.createTime ? __PRIVATE_fromVersion(r.document.createTime) : SnapshotVersion.min(), _ = new ObjectValue({
      mapValue: {
        fields: r.document.fields
      }
    }), a = MutableDocument.newFoundDocument(i, s, o, _), u = r.targetIds || [], c = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange(u, c, a.key, a);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const i = fromName(e, r.document), s = r.readTime ? __PRIVATE_fromVersion(r.readTime) : SnapshotVersion.min(), o = MutableDocument.newNoDocument(i, s), _ = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange([], _, o.key, o);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const i = fromName(e, r.document), s = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange([], s, i, null);
  } else {
    if (!("filter" in t)) return fail();
    {
      t.filter;
      const e2 = t.filter;
      e2.targetId;
      const {
        count: r = 0,
        unchangedNames: i
      } = e2, s = new ExistenceFilter(r, i), o = e2.targetId;
      n = new __PRIVATE_ExistenceFilterChange(o, s);
    }
  }
  return n;
}
function toMutation(e, t) {
  let n;
  if (t instanceof __PRIVATE_SetMutation) n = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.value)
  };
  else if (t instanceof __PRIVATE_DeleteMutation) n = {
    delete: __PRIVATE_toName(e, t.key)
  };
  else if (t instanceof __PRIVATE_PatchMutation) n = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.data),
    updateMask: __PRIVATE_toDocumentMask(t.fieldMask)
  };
  else {
    if (!(t instanceof __PRIVATE_VerifyMutation)) return fail();
    n = {
      verify: __PRIVATE_toName(e, t.key)
    };
  }
  return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e2) => function __PRIVATE_toFieldTransform(e3, t2) {
    const n2 = t2.transform;
    if (n2 instanceof __PRIVATE_ServerTimestampTransform) return {
      fieldPath: t2.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (n2 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      appendMissingElements: {
        values: n2.elements
      }
    };
    if (n2 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      removeAllFromArray: {
        values: n2.elements
      }
    };
    if (n2 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      increment: n2.Pe
    };
    throw fail();
  }(0, e2))), t.precondition.isNone || (n.currentDocument = function __PRIVATE_toPrecondition(e2, t2) {
    return void 0 !== t2.updateTime ? {
      updateTime: __PRIVATE_toVersion(e2, t2.updateTime)
    } : void 0 !== t2.exists ? {
      exists: t2.exists
    } : fail();
  }(e, t.precondition)), n;
}
function __PRIVATE_fromMutation(e, t) {
  const n = t.currentDocument ? function __PRIVATE_fromPrecondition(e2) {
    return void 0 !== e2.updateTime ? Precondition.updateTime(__PRIVATE_fromVersion(e2.updateTime)) : void 0 !== e2.exists ? Precondition.exists(e2.exists) : Precondition.none();
  }(t.currentDocument) : Precondition.none(), r = t.updateTransforms ? t.updateTransforms.map((t2) => function __PRIVATE_fromFieldTransform(e2, t3) {
    let n2 = null;
    if ("setToServerValue" in t3) __PRIVATE_hardAssert("REQUEST_TIME" === t3.setToServerValue), n2 = new __PRIVATE_ServerTimestampTransform();
    else if ("appendMissingElements" in t3) {
      const e3 = t3.appendMissingElements.values || [];
      n2 = new __PRIVATE_ArrayUnionTransformOperation(e3);
    } else if ("removeAllFromArray" in t3) {
      const e3 = t3.removeAllFromArray.values || [];
      n2 = new __PRIVATE_ArrayRemoveTransformOperation(e3);
    } else "increment" in t3 ? n2 = new __PRIVATE_NumericIncrementTransformOperation(e2, t3.increment) : fail();
    const r2 = FieldPath$1.fromServerFormat(t3.fieldPath);
    return new FieldTransform(r2, n2);
  }(e, t2)) : [];
  if (t.update) {
    t.update.name;
    const i = fromName(e, t.update.name), s = new ObjectValue({
      mapValue: {
        fields: t.update.fields
      }
    });
    if (t.updateMask) {
      const e2 = function __PRIVATE_fromDocumentMask(e3) {
        const t2 = e3.fieldPaths || [];
        return new FieldMask(t2.map((e4) => FieldPath$1.fromServerFormat(e4)));
      }(t.updateMask);
      return new __PRIVATE_PatchMutation(i, s, e2, n, r);
    }
    return new __PRIVATE_SetMutation(i, s, n, r);
  }
  if (t.delete) {
    const r2 = fromName(e, t.delete);
    return new __PRIVATE_DeleteMutation(r2, n);
  }
  if (t.verify) {
    const r2 = fromName(e, t.verify);
    return new __PRIVATE_VerifyMutation(r2, n);
  }
  return fail();
}
function __PRIVATE_fromWriteResults(e, t) {
  return e && e.length > 0 ? (__PRIVATE_hardAssert(void 0 !== t), e.map((e2) => function __PRIVATE_fromWriteResult(e3, t2) {
    let n = e3.updateTime ? __PRIVATE_fromVersion(e3.updateTime) : __PRIVATE_fromVersion(t2);
    return n.isEqual(SnapshotVersion.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (n = __PRIVATE_fromVersion(t2)), new MutationResult(n, e3.transformResults || []);
  }(e2, t))) : [];
}
function __PRIVATE_toDocumentsTarget(e, t) {
  return {
    documents: [__PRIVATE_toQueryPath(e, t.path)]
  };
}
function __PRIVATE_toQueryTarget(e, t) {
  const n = {
    structuredQuery: {}
  }, r = t.path;
  let i;
  null !== t.collectionGroup ? (i = r, n.structuredQuery.from = [{
    collectionId: t.collectionGroup,
    allDescendants: true
  }]) : (i = r.popLast(), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), n.parent = __PRIVATE_toQueryPath(e, i);
  const s = function __PRIVATE_toFilters(e2) {
    if (0 === e2.length) return;
    return __PRIVATE_toFilter(CompositeFilter.create(
      e2,
      "and"
      /* CompositeOperator.AND */
    ));
  }(t.filters);
  s && (n.structuredQuery.where = s);
  const o = function __PRIVATE_toOrder(e2) {
    if (0 === e2.length) return;
    return e2.map((e3) => (
      // visible for testing
      function __PRIVATE_toPropertyOrder(e4) {
        return {
          field: __PRIVATE_toFieldPathReference(e4.field),
          direction: __PRIVATE_toDirection(e4.dir)
        };
      }(e3)
    ));
  }(t.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const _ = __PRIVATE_toInt32Proto(e, t.limit);
  return null !== _ && (n.structuredQuery.limit = _), t.startAt && (n.structuredQuery.startAt = function __PRIVATE_toStartAtCursor(e2) {
    return {
      before: e2.inclusive,
      values: e2.position
    };
  }(t.startAt)), t.endAt && (n.structuredQuery.endAt = function __PRIVATE_toEndAtCursor(e2) {
    return {
      before: !e2.inclusive,
      values: e2.position
    };
  }(t.endAt)), {
    _t: n,
    parent: i
  };
}
function __PRIVATE_toRunAggregationQueryRequest(e, t, n, r) {
  const {
    _t: i,
    parent: s
  } = __PRIVATE_toQueryTarget(e, t), o = {}, _ = [];
  let a = 0;
  return n.forEach((e2) => {
    const t2 = r ? e2.alias : "aggregate_" + a++;
    o[t2] = e2.alias, "count" === e2.aggregateType ? _.push({
      alias: t2,
      count: {}
    }) : "avg" === e2.aggregateType ? _.push({
      alias: t2,
      avg: {
        field: __PRIVATE_toFieldPathReference(e2.fieldPath)
      }
    }) : "sum" === e2.aggregateType && _.push({
      alias: t2,
      sum: {
        field: __PRIVATE_toFieldPathReference(e2.fieldPath)
      }
    });
  }), {
    request: {
      structuredAggregationQuery: {
        aggregations: _,
        structuredQuery: i.structuredQuery
      },
      parent: i.parent
    },
    ut: o,
    parent: s
  };
}
function __PRIVATE_convertQueryTargetToQuery(e) {
  let t = __PRIVATE_fromQueryPath(e.parent);
  const n = e.structuredQuery, r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    __PRIVATE_hardAssert(1 === r);
    const e2 = n.from[0];
    e2.allDescendants ? i = e2.collectionId : t = t.child(e2.collectionId);
  }
  let s = [];
  n.where && (s = function __PRIVATE_fromFilters(e2) {
    const t2 = __PRIVATE_fromFilter(e2);
    if (t2 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t2)) return t2.getFilters();
    return [t2];
  }(n.where));
  let o = [];
  n.orderBy && (o = function __PRIVATE_fromOrder(e2) {
    return e2.map((e3) => function __PRIVATE_fromPropertyOrder(e4) {
      return new OrderBy(
        __PRIVATE_fromFieldPathReference(e4.field),
        // visible for testing
        function __PRIVATE_fromDirection(e5) {
          switch (e5) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(e4.direction)
      );
    }(e3));
  }(n.orderBy));
  let _ = null;
  n.limit && (_ = function __PRIVATE_fromInt32Proto(e2) {
    let t2;
    return t2 = "object" == typeof e2 ? e2.value : e2, __PRIVATE_isNullOrUndefined(t2) ? null : t2;
  }(n.limit));
  let a = null;
  n.startAt && (a = function __PRIVATE_fromStartAtCursor(e2) {
    const t2 = !!e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  }(n.startAt));
  let u = null;
  return n.endAt && (u = function __PRIVATE_fromEndAtCursor(e2) {
    const t2 = !e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  }(n.endAt)), __PRIVATE_newQuery(t, i, o, s, _, "F", a, u);
}
function __PRIVATE_toListenRequestLabels(e, t) {
  const n = function __PRIVATE_toLabel(e2) {
    switch (e2) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return fail();
    }
  }(t.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function __PRIVATE_fromFilter(e) {
  return void 0 !== e.unaryFilter ? function __PRIVATE_fromUnaryFilter(e2) {
    switch (e2.unaryFilter.op) {
      case "IS_NAN":
        const t = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(t, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const r = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(r, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return fail();
    }
  }(e) : void 0 !== e.fieldFilter ? function __PRIVATE_fromFieldFilter(e2) {
    return FieldFilter.create(__PRIVATE_fromFieldPathReference(e2.fieldFilter.field), function __PRIVATE_fromOperatorName(e3) {
      switch (e3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return fail();
      }
    }(e2.fieldFilter.op), e2.fieldFilter.value);
  }(e) : void 0 !== e.compositeFilter ? function __PRIVATE_fromCompositeFilter(e2) {
    return CompositeFilter.create(e2.compositeFilter.filters.map((e3) => __PRIVATE_fromFilter(e3)), function __PRIVATE_fromCompositeOperatorName(e3) {
      switch (e3) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return fail();
      }
    }(e2.compositeFilter.op));
  }(e) : fail();
}
function __PRIVATE_toDirection(e) {
  return Te[e];
}
function __PRIVATE_toOperatorName(e) {
  return Ee[e];
}
function __PRIVATE_toCompositeOperatorName(e) {
  return de[e];
}
function __PRIVATE_toFieldPathReference(e) {
  return {
    fieldPath: e.canonicalString()
  };
}
function __PRIVATE_fromFieldPathReference(e) {
  return FieldPath$1.fromServerFormat(e.fieldPath);
}
function __PRIVATE_toFilter(e) {
  return e instanceof FieldFilter ? function __PRIVATE_toUnaryOrFieldFilter(e2) {
    if ("==" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NULL"
        }
      };
    } else if ("!=" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: __PRIVATE_toFieldPathReference(e2.field),
        op: __PRIVATE_toOperatorName(e2.op),
        value: e2.value
      }
    };
  }(e) : e instanceof CompositeFilter ? function __PRIVATE_toCompositeFilter(e2) {
    const t = e2.getFilters().map((e3) => __PRIVATE_toFilter(e3));
    if (1 === t.length) return t[0];
    return {
      compositeFilter: {
        op: __PRIVATE_toCompositeOperatorName(e2.op),
        filters: t
      }
    };
  }(e) : fail();
}
function __PRIVATE_toDocumentMask(e) {
  const t = [];
  return e.fields.forEach((e2) => t.push(e2.canonicalString())), {
    fieldPaths: t
  };
}
function __PRIVATE_isValidResourceName(e) {
  return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
var TargetData = class _TargetData {
  constructor(e, t, n, r, i = SnapshotVersion.min(), s = SnapshotVersion.min(), o = ByteString.EMPTY_BYTE_STRING, _ = null) {
    this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = s, this.resumeToken = o, this.expectedCount = _;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(e, t) {
    return new _TargetData(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount);
  }
};
var __PRIVATE_LocalSerializer = class {
  constructor(e) {
    this.ct = e;
  }
};
function __PRIVATE_fromDbRemoteDocument(e, t) {
  let n;
  if (t.document) n = __PRIVATE_fromDocument(e.ct, t.document, !!t.hasCommittedMutations);
  else if (t.noDocument) {
    const e2 = DocumentKey.fromSegments(t.noDocument.path), r = __PRIVATE_fromDbTimestamp(t.noDocument.readTime);
    n = MutableDocument.newNoDocument(e2, r), t.hasCommittedMutations && n.setHasCommittedMutations();
  } else {
    if (!t.unknownDocument) return fail();
    {
      const e2 = DocumentKey.fromSegments(t.unknownDocument.path), r = __PRIVATE_fromDbTimestamp(t.unknownDocument.version);
      n = MutableDocument.newUnknownDocument(e2, r);
    }
  }
  return t.readTime && n.setReadTime(function __PRIVATE_fromDbTimestampKey(e2) {
    const t2 = new Timestamp(e2[0], e2[1]);
    return SnapshotVersion.fromTimestamp(t2);
  }(t.readTime)), n;
}
function __PRIVATE_toDbRemoteDocument(e, t) {
  const n = t.key, r = {
    prefixPath: n.getCollectionPath().popLast().toArray(),
    collectionGroup: n.collectionGroup,
    documentId: n.path.lastSegment(),
    readTime: __PRIVATE_toDbTimestampKey(t.readTime),
    hasCommittedMutations: t.hasCommittedMutations
  };
  if (t.isFoundDocument()) r.document = function __PRIVATE_toDocument(e2, t2) {
    return {
      name: __PRIVATE_toName(e2, t2.key),
      fields: t2.data.value.mapValue.fields,
      updateTime: toTimestamp(e2, t2.version.toTimestamp()),
      createTime: toTimestamp(e2, t2.createTime.toTimestamp())
    };
  }(e.ct, t);
  else if (t.isNoDocument()) r.noDocument = {
    path: n.path.toArray(),
    readTime: __PRIVATE_toDbTimestamp(t.version)
  };
  else {
    if (!t.isUnknownDocument()) return fail();
    r.unknownDocument = {
      path: n.path.toArray(),
      version: __PRIVATE_toDbTimestamp(t.version)
    };
  }
  return r;
}
function __PRIVATE_toDbTimestampKey(e) {
  const t = e.toTimestamp();
  return [t.seconds, t.nanoseconds];
}
function __PRIVATE_toDbTimestamp(e) {
  const t = e.toTimestamp();
  return {
    seconds: t.seconds,
    nanoseconds: t.nanoseconds
  };
}
function __PRIVATE_fromDbTimestamp(e) {
  const t = new Timestamp(e.seconds, e.nanoseconds);
  return SnapshotVersion.fromTimestamp(t);
}
function __PRIVATE_fromDbMutationBatch(e, t) {
  const n = (t.baseMutations || []).map((t2) => __PRIVATE_fromMutation(e.ct, t2));
  for (let e2 = 0; e2 < t.mutations.length - 1; ++e2) {
    const n2 = t.mutations[e2];
    if (e2 + 1 < t.mutations.length && void 0 !== t.mutations[e2 + 1].transform) {
      const r2 = t.mutations[e2 + 1];
      n2.updateTransforms = r2.transform.fieldTransforms, t.mutations.splice(e2 + 1, 1), ++e2;
    }
  }
  const r = t.mutations.map((t2) => __PRIVATE_fromMutation(e.ct, t2)), i = Timestamp.fromMillis(t.localWriteTimeMs);
  return new MutationBatch(t.batchId, i, n, r);
}
function __PRIVATE_fromDbTarget(e) {
  const t = __PRIVATE_fromDbTimestamp(e.readTime), n = void 0 !== e.lastLimboFreeSnapshotVersion ? __PRIVATE_fromDbTimestamp(e.lastLimboFreeSnapshotVersion) : SnapshotVersion.min();
  let r;
  return r = /**
  * A helper function for figuring out what kind of query has been stored.
  */
  function __PRIVATE_isDocumentQuery(e2) {
    return void 0 !== e2.documents;
  }(e.query) ? function __PRIVATE_fromDocumentsTarget(e2) {
    return __PRIVATE_hardAssert(1 === e2.documents.length), __PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(__PRIVATE_fromQueryPath(e2.documents[0])));
  }(e.query) : function __PRIVATE_fromQueryTarget(e2) {
    return __PRIVATE_queryToTarget(__PRIVATE_convertQueryTargetToQuery(e2));
  }(e.query), new TargetData(r, e.targetId, "TargetPurposeListen", e.lastListenSequenceNumber, t, n, ByteString.fromBase64String(e.resumeToken));
}
function __PRIVATE_toDbTarget(e, t) {
  const n = __PRIVATE_toDbTimestamp(t.snapshotVersion), r = __PRIVATE_toDbTimestamp(t.lastLimboFreeSnapshotVersion);
  let i;
  i = __PRIVATE_targetIsDocumentTarget(t.target) ? __PRIVATE_toDocumentsTarget(e.ct, t.target) : __PRIVATE_toQueryTarget(e.ct, t.target)._t;
  const s = t.resumeToken.toBase64();
  return {
    targetId: t.targetId,
    canonicalId: __PRIVATE_canonifyTarget(t.target),
    readTime: n,
    resumeToken: s,
    lastListenSequenceNumber: t.sequenceNumber,
    lastLimboFreeSnapshotVersion: r,
    query: i
  };
}
function __PRIVATE_fromBundledQuery(e) {
  const t = __PRIVATE_convertQueryTargetToQuery({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(
    t,
    t.limit,
    "L"
    /* LimitType.Last */
  ) : t;
}
function __PRIVATE_fromDbDocumentOverlay(e, t) {
  return new Overlay(t.largestBatchId, __PRIVATE_fromMutation(e.ct, t.overlayMutation));
}
function __PRIVATE_toDbDocumentOverlayKey(e, t) {
  const n = t.path.lastSegment();
  return [e, __PRIVATE_encodeResourcePath(t.path.popLast()), n];
}
function __PRIVATE_toDbIndexState(e, t, n, r) {
  return {
    indexId: e,
    uid: t,
    sequenceNumber: n,
    readTime: __PRIVATE_toDbTimestamp(r.readTime),
    documentKey: __PRIVATE_encodeResourcePath(r.documentKey.path),
    largestBatchId: r.largestBatchId
  };
}
var __PRIVATE_IndexedDbBundleCache = class {
  getBundleMetadata(e, t) {
    return __PRIVATE_bundlesStore(e).get(t).next((e2) => {
      if (e2) return function __PRIVATE_fromDbBundle(e3) {
        return {
          id: e3.bundleId,
          createTime: __PRIVATE_fromDbTimestamp(e3.createTime),
          version: e3.version
        };
      }(e2);
    });
  }
  saveBundleMetadata(e, t) {
    return __PRIVATE_bundlesStore(e).put(function __PRIVATE_toDbBundle(e2) {
      return {
        bundleId: e2.id,
        createTime: __PRIVATE_toDbTimestamp(__PRIVATE_fromVersion(e2.createTime)),
        version: e2.version
      };
    }(t));
  }
  getNamedQuery(e, t) {
    return __PRIVATE_namedQueriesStore(e).get(t).next((e2) => {
      if (e2) return function __PRIVATE_fromDbNamedQuery(e3) {
        return {
          name: e3.name,
          query: __PRIVATE_fromBundledQuery(e3.bundledQuery),
          readTime: __PRIVATE_fromDbTimestamp(e3.readTime)
        };
      }(e2);
    });
  }
  saveNamedQuery(e, t) {
    return __PRIVATE_namedQueriesStore(e).put(function __PRIVATE_toDbNamedQuery(e2) {
      return {
        name: e2.name,
        readTime: __PRIVATE_toDbTimestamp(__PRIVATE_fromVersion(e2.readTime)),
        bundledQuery: e2.bundledQuery
      };
    }(t));
  }
};
function __PRIVATE_bundlesStore(e) {
  return __PRIVATE_getStore(e, "bundles");
}
function __PRIVATE_namedQueriesStore(e) {
  return __PRIVATE_getStore(e, "namedQueries");
}
var __PRIVATE_IndexedDbDocumentOverlayCache = class ___PRIVATE_IndexedDbDocumentOverlayCache {
  /**
   * @param serializer - The document serializer.
   * @param userId - The userId for which we are accessing overlays.
   */
  constructor(e, t) {
    this.serializer = e, this.userId = t;
  }
  static lt(e, t) {
    const n = t.uid || "";
    return new ___PRIVATE_IndexedDbDocumentOverlayCache(e, n);
  }
  getOverlay(e, t) {
    return __PRIVATE_documentOverlayStore(e).get(__PRIVATE_toDbDocumentOverlayKey(this.userId, t)).next((e2) => e2 ? __PRIVATE_fromDbDocumentOverlay(this.serializer, e2) : null);
  }
  getOverlays(e, t) {
    const n = __PRIVATE_newOverlayMap();
    return PersistencePromise.forEach(t, (t2) => this.getOverlay(e, t2).next((e2) => {
      null !== e2 && n.set(t2, e2);
    })).next(() => n);
  }
  saveOverlays(e, t, n) {
    const r = [];
    return n.forEach((n2, i) => {
      const s = new Overlay(t, i);
      r.push(this.ht(e, s));
    }), PersistencePromise.waitFor(r);
  }
  removeOverlaysForBatchId(e, t, n) {
    const r = /* @__PURE__ */ new Set();
    t.forEach((e2) => r.add(__PRIVATE_encodeResourcePath(e2.getCollectionPath())));
    const i = [];
    return r.forEach((t2) => {
      const r2 = IDBKeyRange.bound(
        [this.userId, t2, n],
        [this.userId, t2, n + 1],
        /*lowerOpen=*/
        false,
        /*upperOpen=*/
        true
      );
      i.push(__PRIVATE_documentOverlayStore(e).j("collectionPathOverlayIndex", r2));
    }), PersistencePromise.waitFor(i);
  }
  getOverlaysForCollection(e, t, n) {
    const r = __PRIVATE_newOverlayMap(), i = __PRIVATE_encodeResourcePath(t), s = IDBKeyRange.bound(
      [this.userId, i, n],
      [this.userId, i, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return __PRIVATE_documentOverlayStore(e).U("collectionPathOverlayIndex", s).next((e2) => {
      for (const t2 of e2) {
        const e3 = __PRIVATE_fromDbDocumentOverlay(this.serializer, t2);
        r.set(e3.getKey(), e3);
      }
      return r;
    });
  }
  getOverlaysForCollectionGroup(e, t, n, r) {
    const i = __PRIVATE_newOverlayMap();
    let s;
    const o = IDBKeyRange.bound(
      [this.userId, t, n],
      [this.userId, t, Number.POSITIVE_INFINITY],
      /*lowerOpen=*/
      true
    );
    return __PRIVATE_documentOverlayStore(e).J({
      index: "collectionGroupOverlayIndex",
      range: o
    }, (e2, t2, n2) => {
      const o2 = __PRIVATE_fromDbDocumentOverlay(this.serializer, t2);
      i.size() < r || o2.largestBatchId === s ? (i.set(o2.getKey(), o2), s = o2.largestBatchId) : n2.done();
    }).next(() => i);
  }
  ht(e, t) {
    return __PRIVATE_documentOverlayStore(e).put(function __PRIVATE_toDbDocumentOverlay(e2, t2, n) {
      const [r, i, s] = __PRIVATE_toDbDocumentOverlayKey(t2, n.mutation.key);
      return {
        userId: t2,
        collectionPath: i,
        documentId: s,
        collectionGroup: n.mutation.key.getCollectionGroup(),
        largestBatchId: n.largestBatchId,
        overlayMutation: toMutation(e2.ct, n.mutation)
      };
    }(this.serializer, this.userId, t));
  }
};
function __PRIVATE_documentOverlayStore(e) {
  return __PRIVATE_getStore(e, "documentOverlays");
}
var __PRIVATE_IndexedDbGlobalsCache = class {
  Pt(e) {
    return __PRIVATE_getStore(e, "globals");
  }
  getSessionToken(e) {
    return this.Pt(e).get("sessionToken").next((e2) => {
      const t = null == e2 ? void 0 : e2.value;
      return t ? ByteString.fromUint8Array(t) : ByteString.EMPTY_BYTE_STRING;
    });
  }
  setSessionToken(e, t) {
    return this.Pt(e).put({
      name: "sessionToken",
      value: t.toUint8Array()
    });
  }
};
var __PRIVATE_FirestoreIndexValueWriter = class {
  constructor() {
  }
  // The write methods below short-circuit writing terminators for values
  // containing a (terminating) truncated value.
  // As an example, consider the resulting encoding for:
  // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
  // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
  // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
  /** Writes an index value.  */
  It(e, t) {
    this.Tt(e, t), // Write separator to split index values
    // (see go/firestore-storage-format#encodings).
    t.Et();
  }
  Tt(e, t) {
    if ("nullValue" in e) this.dt(t, 5);
    else if ("booleanValue" in e) this.dt(t, 10), t.At(e.booleanValue ? 1 : 0);
    else if ("integerValue" in e) this.dt(t, 15), t.At(__PRIVATE_normalizeNumber(e.integerValue));
    else if ("doubleValue" in e) {
      const n = __PRIVATE_normalizeNumber(e.doubleValue);
      isNaN(n) ? this.dt(t, 13) : (this.dt(t, 15), __PRIVATE_isNegativeZero(n) ? (
        // -0.0, 0 and 0.0 are all considered the same
        t.At(0)
      ) : t.At(n));
    } else if ("timestampValue" in e) {
      let n = e.timestampValue;
      this.dt(t, 20), "string" == typeof n && (n = __PRIVATE_normalizeTimestamp(n)), t.Rt(`${n.seconds || ""}`), t.At(n.nanos || 0);
    } else if ("stringValue" in e) this.Vt(e.stringValue, t), this.ft(t);
    else if ("bytesValue" in e) this.dt(t, 30), t.gt(__PRIVATE_normalizeByteString(e.bytesValue)), this.ft(t);
    else if ("referenceValue" in e) this.yt(e.referenceValue, t);
    else if ("geoPointValue" in e) {
      const n = e.geoPointValue;
      this.dt(t, 45), t.At(n.latitude || 0), t.At(n.longitude || 0);
    } else "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.dt(t, Number.MAX_SAFE_INTEGER) : (this.wt(e.mapValue, t), this.ft(t)) : "arrayValue" in e ? (this.St(e.arrayValue, t), this.ft(t)) : fail();
  }
  Vt(e, t) {
    this.dt(t, 25), this.bt(e, t);
  }
  bt(e, t) {
    t.Rt(e);
  }
  wt(e, t) {
    const n = e.fields || {};
    this.dt(t, 55);
    for (const e2 of Object.keys(n)) this.Vt(e2, t), this.Tt(n[e2], t);
  }
  St(e, t) {
    const n = e.values || [];
    this.dt(t, 50);
    for (const e2 of n) this.Tt(e2, t);
  }
  yt(e, t) {
    this.dt(t, 37);
    DocumentKey.fromName(e).path.forEach((e2) => {
      this.dt(t, 60), this.bt(e2, t);
    });
  }
  dt(e, t) {
    e.At(t);
  }
  ft(e) {
    e.At(2);
  }
};
__PRIVATE_FirestoreIndexValueWriter.Dt = new __PRIVATE_FirestoreIndexValueWriter();
function __PRIVATE_numberOfLeadingZerosInByte(e) {
  if (0 === e) return 8;
  let t = 0;
  return e >> 4 == 0 && // Test if the first four bits are zero.
  (t += 4, e <<= 4), e >> 6 == 0 && // Test if the first two (or next two) bits are zero.
  (t += 2, e <<= 2), e >> 7 == 0 && // Test if the remaining bit is zero.
  (t += 1), t;
}
function __PRIVATE_unsignedNumLength(e) {
  const t = 64 - function __PRIVATE_numberOfLeadingZeros(e2) {
    let t2 = 0;
    for (let n = 0; n < 8; ++n) {
      const r = __PRIVATE_numberOfLeadingZerosInByte(255 & e2[n]);
      if (t2 += r, 8 !== r) break;
    }
    return t2;
  }(e);
  return Math.ceil(t / 8);
}
var __PRIVATE_OrderedCodeWriter = class {
  constructor() {
    this.buffer = new Uint8Array(1024), this.position = 0;
  }
  Ct(e) {
    const t = e[Symbol.iterator]();
    let n = t.next();
    for (; !n.done; ) this.vt(n.value), n = t.next();
    this.Ft();
  }
  Mt(e) {
    const t = e[Symbol.iterator]();
    let n = t.next();
    for (; !n.done; ) this.xt(n.value), n = t.next();
    this.Ot();
  }
  /** Writes utf8 bytes into this byte sequence, ascending. */
  Nt(e) {
    for (const t of e) {
      const e2 = t.charCodeAt(0);
      if (e2 < 128) this.vt(e2);
      else if (e2 < 2048) this.vt(960 | e2 >>> 6), this.vt(128 | 63 & e2);
      else if (t < "\uD800" || "\uDBFF" < t) this.vt(480 | e2 >>> 12), this.vt(128 | 63 & e2 >>> 6), this.vt(128 | 63 & e2);
      else {
        const e3 = t.codePointAt(0);
        this.vt(240 | e3 >>> 18), this.vt(128 | 63 & e3 >>> 12), this.vt(128 | 63 & e3 >>> 6), this.vt(128 | 63 & e3);
      }
    }
    this.Ft();
  }
  /** Writes utf8 bytes into this byte sequence, descending */
  Lt(e) {
    for (const t of e) {
      const e2 = t.charCodeAt(0);
      if (e2 < 128) this.xt(e2);
      else if (e2 < 2048) this.xt(960 | e2 >>> 6), this.xt(128 | 63 & e2);
      else if (t < "\uD800" || "\uDBFF" < t) this.xt(480 | e2 >>> 12), this.xt(128 | 63 & e2 >>> 6), this.xt(128 | 63 & e2);
      else {
        const e3 = t.codePointAt(0);
        this.xt(240 | e3 >>> 18), this.xt(128 | 63 & e3 >>> 12), this.xt(128 | 63 & e3 >>> 6), this.xt(128 | 63 & e3);
      }
    }
    this.Ot();
  }
  Bt(e) {
    const t = this.kt(e), n = __PRIVATE_unsignedNumLength(t);
    this.qt(1 + n), this.buffer[this.position++] = 255 & n;
    for (let e2 = t.length - n; e2 < t.length; ++e2) this.buffer[this.position++] = 255 & t[e2];
  }
  Qt(e) {
    const t = this.kt(e), n = __PRIVATE_unsignedNumLength(t);
    this.qt(1 + n), this.buffer[this.position++] = ~(255 & n);
    for (let e2 = t.length - n; e2 < t.length; ++e2) this.buffer[this.position++] = ~(255 & t[e2]);
  }
  /**
   * Writes the "infinity" byte sequence that sorts after all other byte
   * sequences written in ascending order.
   */
  Kt() {
    this.$t(255), this.$t(255);
  }
  /**
   * Writes the "infinity" byte sequence that sorts before all other byte
   * sequences written in descending order.
   */
  Ut() {
    this.Wt(255), this.Wt(255);
  }
  /**
   * Resets the buffer such that it is the same as when it was newly
   * constructed.
   */
  reset() {
    this.position = 0;
  }
  seed(e) {
    this.qt(e.length), this.buffer.set(e, this.position), this.position += e.length;
  }
  /** Makes a copy of the encoded bytes in this buffer.  */
  Gt() {
    return this.buffer.slice(0, this.position);
  }
  /**
   * Encodes `val` into an encoding so that the order matches the IEEE 754
   * floating-point comparison results with the following exceptions:
   *   -0.0 < 0.0
   *   all non-NaN < NaN
   *   NaN = NaN
   */
  kt(e) {
    const t = (
      /** Converts a JavaScript number to a byte array (using big endian encoding). */
      function __PRIVATE_doubleToLongBits(e2) {
        const t2 = new DataView(new ArrayBuffer(8));
        return t2.setFloat64(
          0,
          e2,
          /* littleEndian= */
          false
        ), new Uint8Array(t2.buffer);
      }(e)
    ), n = 0 != (128 & t[0]);
    t[0] ^= n ? 255 : 128;
    for (let e2 = 1; e2 < t.length; ++e2) t[e2] ^= n ? 255 : 0;
    return t;
  }
  /** Writes a single byte ascending to the buffer. */
  vt(e) {
    const t = 255 & e;
    0 === t ? (this.$t(0), this.$t(255)) : 255 === t ? (this.$t(255), this.$t(0)) : this.$t(t);
  }
  /** Writes a single byte descending to the buffer.  */
  xt(e) {
    const t = 255 & e;
    0 === t ? (this.Wt(0), this.Wt(255)) : 255 === t ? (this.Wt(255), this.Wt(0)) : this.Wt(e);
  }
  Ft() {
    this.$t(0), this.$t(1);
  }
  Ot() {
    this.Wt(0), this.Wt(1);
  }
  $t(e) {
    this.qt(1), this.buffer[this.position++] = e;
  }
  Wt(e) {
    this.qt(1), this.buffer[this.position++] = ~e;
  }
  qt(e) {
    const t = e + this.position;
    if (t <= this.buffer.length) return;
    let n = 2 * this.buffer.length;
    n < t && (n = t);
    const r = new Uint8Array(n);
    r.set(this.buffer), // copy old data
    this.buffer = r;
  }
};
var __PRIVATE_AscendingIndexByteEncoder = class {
  constructor(e) {
    this.zt = e;
  }
  gt(e) {
    this.zt.Ct(e);
  }
  Rt(e) {
    this.zt.Nt(e);
  }
  At(e) {
    this.zt.Bt(e);
  }
  Et() {
    this.zt.Kt();
  }
};
var __PRIVATE_DescendingIndexByteEncoder = class {
  constructor(e) {
    this.zt = e;
  }
  gt(e) {
    this.zt.Mt(e);
  }
  Rt(e) {
    this.zt.Lt(e);
  }
  At(e) {
    this.zt.Qt(e);
  }
  Et() {
    this.zt.Ut();
  }
};
var __PRIVATE_IndexByteEncoder = class {
  constructor() {
    this.zt = new __PRIVATE_OrderedCodeWriter(), this.jt = new __PRIVATE_AscendingIndexByteEncoder(this.zt), this.Ht = new __PRIVATE_DescendingIndexByteEncoder(this.zt);
  }
  seed(e) {
    this.zt.seed(e);
  }
  Jt(e) {
    return 0 === e ? this.jt : this.Ht;
  }
  Gt() {
    return this.zt.Gt();
  }
  reset() {
    this.zt.reset();
  }
};
var __PRIVATE_IndexEntry = class ___PRIVATE_IndexEntry {
  constructor(e, t, n, r) {
    this.indexId = e, this.documentKey = t, this.arrayValue = n, this.directionalValue = r;
  }
  /**
   * Returns an IndexEntry entry that sorts immediately after the current
   * directional value.
   */
  Yt() {
    const e = this.directionalValue.length, t = 0 === e || 255 === this.directionalValue[e - 1] ? e + 1 : e, n = new Uint8Array(t);
    return n.set(this.directionalValue, 0), t !== e ? n.set([0], this.directionalValue.length) : ++n[n.length - 1], new ___PRIVATE_IndexEntry(this.indexId, this.documentKey, this.arrayValue, n);
  }
};
function __PRIVATE_indexEntryComparator(e, t) {
  let n = e.indexId - t.indexId;
  return 0 !== n ? n : (n = __PRIVATE_compareByteArrays(e.arrayValue, t.arrayValue), 0 !== n ? n : (n = __PRIVATE_compareByteArrays(e.directionalValue, t.directionalValue), 0 !== n ? n : DocumentKey.comparator(e.documentKey, t.documentKey)));
}
function __PRIVATE_compareByteArrays(e, t) {
  for (let n = 0; n < e.length && n < t.length; ++n) {
    const r = e[n] - t[n];
    if (0 !== r) return r;
  }
  return e.length - t.length;
}
var __PRIVATE_TargetIndexMatcher = class {
  constructor(e) {
    this.Zt = new SortedSet((e2, t) => FieldPath$1.comparator(e2.field, t.field)), this.collectionId = null != e.collectionGroup ? e.collectionGroup : e.path.lastSegment(), this.Xt = e.orderBy, this.en = [];
    for (const t of e.filters) {
      const e2 = t;
      e2.isInequality() ? this.Zt = this.Zt.add(e2) : this.en.push(e2);
    }
  }
  get tn() {
    return this.Zt.size > 1;
  }
  /**
   * Returns whether the index can be used to serve the TargetIndexMatcher's
   * target.
   *
   * An index is considered capable of serving the target when:
   * - The target uses all index segments for its filters and orderBy clauses.
   *   The target can have additional filter and orderBy clauses, but not
   *   fewer.
   * - If an ArrayContains/ArrayContainsAnyfilter is used, the index must also
   *   have a corresponding `CONTAINS` segment.
   * - All directional index segments can be mapped to the target as a series of
   *   equality filters, a single inequality filter and a series of orderBy
   *   clauses.
   * - The segments that represent the equality filters may appear out of order.
   * - The optional segment for the inequality filter must appear after all
   *   equality segments.
   * - The segments that represent that orderBy clause of the target must appear
   *   in order after all equality and inequality segments. Single orderBy
   *   clauses cannot be skipped, but a continuous orderBy suffix may be
   *   omitted.
   */
  nn(e) {
    if (__PRIVATE_hardAssert(e.collectionGroup === this.collectionId), this.tn)
      return false;
    const t = __PRIVATE_fieldIndexGetArraySegment(e);
    if (void 0 !== t && !this.rn(t)) return false;
    const n = __PRIVATE_fieldIndexGetDirectionalSegments(e);
    let r = /* @__PURE__ */ new Set(), i = 0, s = 0;
    for (; i < n.length && this.rn(n[i]); ++i) r = r.add(n[i].fieldPath.canonicalString());
    if (i === n.length) return true;
    if (this.Zt.size > 0) {
      const e2 = this.Zt.getIterator().getNext();
      if (!r.has(e2.field.canonicalString())) {
        const t2 = n[i];
        if (!this.sn(e2, t2) || !this.on(this.Xt[s++], t2)) return false;
      }
      ++i;
    }
    for (; i < n.length; ++i) {
      const e2 = n[i];
      if (s >= this.Xt.length || !this.on(this.Xt[s++], e2)) return false;
    }
    return true;
  }
  /**
   * Returns a full matched field index for this target. Currently multiple
   * inequality query is not supported so function returns null.
   */
  _n() {
    if (this.tn) return null;
    let e = new SortedSet(FieldPath$1.comparator);
    const t = [];
    for (const n of this.en) {
      if (n.field.isKeyField()) continue;
      if ("array-contains" === n.op || "array-contains-any" === n.op) t.push(new IndexSegment(
        n.field,
        2
        /* IndexKind.CONTAINS */
      ));
      else {
        if (e.has(n.field)) continue;
        e = e.add(n.field), t.push(new IndexSegment(
          n.field,
          0
          /* IndexKind.ASCENDING */
        ));
      }
    }
    for (const n of this.Xt)
      n.field.isKeyField() || e.has(n.field) || (e = e.add(n.field), t.push(new IndexSegment(
        n.field,
        "asc" === n.dir ? 0 : 1
        /* IndexKind.DESCENDING */
      )));
    return new FieldIndex(FieldIndex.UNKNOWN_ID, this.collectionId, t, IndexState.empty());
  }
  rn(e) {
    for (const t of this.en) if (this.sn(t, e)) return true;
    return false;
  }
  sn(e, t) {
    if (void 0 === e || !e.field.isEqual(t.fieldPath)) return false;
    const n = "array-contains" === e.op || "array-contains-any" === e.op;
    return 2 === t.kind === n;
  }
  on(e, t) {
    return !!e.field.isEqual(t.fieldPath) && (0 === t.kind && "asc" === e.dir || 1 === t.kind && "desc" === e.dir);
  }
};
function __PRIVATE_computeInExpansion(e) {
  var t, n;
  if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) {
    if (e instanceof __PRIVATE_InFilter) {
      const r2 = (null === (n = null === (t = e.value.arrayValue) || void 0 === t ? void 0 : t.values) || void 0 === n ? void 0 : n.map((t2) => FieldFilter.create(e.field, "==", t2))) || [];
      return CompositeFilter.create(
        r2,
        "or"
        /* CompositeOperator.OR */
      );
    }
    return e;
  }
  const r = e.filters.map((e2) => __PRIVATE_computeInExpansion(e2));
  return CompositeFilter.create(r, e.op);
}
function __PRIVATE_getDnfTerms(e) {
  if (0 === e.getFilters().length) return [];
  const t = __PRIVATE_computeDistributedNormalForm(__PRIVATE_computeInExpansion(e));
  return __PRIVATE_hardAssert(__PRIVATE_isDisjunctiveNormalForm(t)), __PRIVATE_isSingleFieldFilter(t) || __PRIVATE_isFlatConjunction(t) ? [t] : t.getFilters();
}
function __PRIVATE_isSingleFieldFilter(e) {
  return e instanceof FieldFilter;
}
function __PRIVATE_isFlatConjunction(e) {
  return e instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(e);
}
function __PRIVATE_isDisjunctiveNormalForm(e) {
  return __PRIVATE_isSingleFieldFilter(e) || __PRIVATE_isFlatConjunction(e) || /**
  * Returns true if the given filter is the disjunction of one or more "flat conjunctions" and
  * field filters. e.g. (a == 10) || (b==20 && c==30)
  */
  function __PRIVATE_isDisjunctionOfFieldFiltersAndFlatConjunctions(e2) {
    if (e2 instanceof CompositeFilter && __PRIVATE_compositeFilterIsDisjunction(e2)) {
      for (const t of e2.getFilters()) if (!__PRIVATE_isSingleFieldFilter(t) && !__PRIVATE_isFlatConjunction(t)) return false;
      return true;
    }
    return false;
  }(e);
}
function __PRIVATE_computeDistributedNormalForm(e) {
  if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) return e;
  if (1 === e.filters.length) return __PRIVATE_computeDistributedNormalForm(e.filters[0]);
  const t = e.filters.map((e2) => __PRIVATE_computeDistributedNormalForm(e2));
  let n = CompositeFilter.create(t, e.op);
  return n = __PRIVATE_applyAssociation(n), __PRIVATE_isDisjunctiveNormalForm(n) ? n : (__PRIVATE_hardAssert(n instanceof CompositeFilter), __PRIVATE_hardAssert(__PRIVATE_compositeFilterIsConjunction(n)), __PRIVATE_hardAssert(n.filters.length > 1), n.filters.reduce((e2, t2) => __PRIVATE_applyDistribution(e2, t2)));
}
function __PRIVATE_applyDistribution(e, t) {
  let n;
  return __PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), __PRIVATE_hardAssert(t instanceof FieldFilter || t instanceof CompositeFilter), // FieldFilter FieldFilter
  n = e instanceof FieldFilter ? t instanceof FieldFilter ? function __PRIVATE_applyDistributionFieldFilters(e2, t2) {
    return CompositeFilter.create(
      [e2, t2],
      "and"
      /* CompositeOperator.AND */
    );
  }(e, t) : __PRIVATE_applyDistributionFieldAndCompositeFilters(e, t) : t instanceof FieldFilter ? __PRIVATE_applyDistributionFieldAndCompositeFilters(t, e) : function __PRIVATE_applyDistributionCompositeFilters(e2, t2) {
    if (__PRIVATE_hardAssert(e2.filters.length > 0 && t2.filters.length > 0), __PRIVATE_compositeFilterIsConjunction(e2) && __PRIVATE_compositeFilterIsConjunction(t2)) return __PRIVATE_compositeFilterWithAddedFilters(e2, t2.getFilters());
    const n2 = __PRIVATE_compositeFilterIsDisjunction(e2) ? e2 : t2, r = __PRIVATE_compositeFilterIsDisjunction(e2) ? t2 : e2, i = n2.filters.map((e3) => __PRIVATE_applyDistribution(e3, r));
    return CompositeFilter.create(
      i,
      "or"
      /* CompositeOperator.OR */
    );
  }(e, t), __PRIVATE_applyAssociation(n);
}
function __PRIVATE_applyDistributionFieldAndCompositeFilters(e, t) {
  if (__PRIVATE_compositeFilterIsConjunction(t))
    return __PRIVATE_compositeFilterWithAddedFilters(t, e.getFilters());
  {
    const n = t.filters.map((t2) => __PRIVATE_applyDistribution(e, t2));
    return CompositeFilter.create(
      n,
      "or"
      /* CompositeOperator.OR */
    );
  }
}
function __PRIVATE_applyAssociation(e) {
  if (__PRIVATE_hardAssert(e instanceof FieldFilter || e instanceof CompositeFilter), e instanceof FieldFilter) return e;
  const t = e.getFilters();
  if (1 === t.length) return __PRIVATE_applyAssociation(t[0]);
  if (__PRIVATE_compositeFilterIsFlat(e)) return e;
  const n = t.map((e2) => __PRIVATE_applyAssociation(e2)), r = [];
  return n.forEach((t2) => {
    t2 instanceof FieldFilter ? r.push(t2) : t2 instanceof CompositeFilter && (t2.op === e.op ? (
      // compositeFilter: (A | (B | C))
      // compositeSubfilter: (B | C)
      // Result: (A | B | C)
      r.push(...t2.filters)
    ) : (
      // compositeFilter: (A | (B & C))
      // compositeSubfilter: (B & C)
      // Result: (A | (B & C))
      r.push(t2)
    ));
  }), 1 === r.length ? r[0] : CompositeFilter.create(r, e.op);
}
var __PRIVATE_MemoryIndexManager = class {
  constructor() {
    this.an = new __PRIVATE_MemoryCollectionParentIndex();
  }
  addToCollectionParentIndex(e, t) {
    return this.an.add(t), PersistencePromise.resolve();
  }
  getCollectionParents(e, t) {
    return PersistencePromise.resolve(this.an.getEntries(t));
  }
  addFieldIndex(e, t) {
    return PersistencePromise.resolve();
  }
  deleteFieldIndex(e, t) {
    return PersistencePromise.resolve();
  }
  deleteAllFieldIndexes(e) {
    return PersistencePromise.resolve();
  }
  createTargetIndexes(e, t) {
    return PersistencePromise.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return PersistencePromise.resolve(null);
  }
  getIndexType(e, t) {
    return PersistencePromise.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(e, t) {
    return PersistencePromise.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return PersistencePromise.resolve(null);
  }
  getMinOffset(e, t) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  updateCollectionGroup(e, t, n) {
    return PersistencePromise.resolve();
  }
  updateIndexEntries(e, t) {
    return PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryCollectionParentIndex = class {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(e) {
    const t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new SortedSet(ResourcePath.comparator), i = !r.has(n);
    return this.index[t] = r.add(n), i;
  }
  has(e) {
    const t = e.lastSegment(), n = e.popLast(), r = this.index[t];
    return r && r.has(n);
  }
  getEntries(e) {
    return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
  }
};
var Ae = new Uint8Array(0);
var __PRIVATE_IndexedDbIndexManager = class {
  constructor(e, t) {
    this.databaseId = t, /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be
     * used to satisfy reads.
     */
    this.un = new __PRIVATE_MemoryCollectionParentIndex(), /**
     * Maps from a target to its equivalent list of sub-targets. Each sub-target
     * contains only one term from the target's disjunctive normal form (DNF).
     */
    this.cn = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), (e2, t2) => __PRIVATE_targetEquals(e2, t2)), this.uid = e.uid || "";
  }
  /**
   * Adds a new entry to the collection parent index.
   *
   * Repeated calls for the same collectionPath should be avoided within a
   * transaction as IndexedDbIndexManager only caches writes once a transaction
   * has been committed.
   */
  addToCollectionParentIndex(e, t) {
    if (!this.un.has(t)) {
      const n = t.lastSegment(), r = t.popLast();
      e.addOnCommittedListener(() => {
        this.un.add(t);
      });
      const i = {
        collectionId: n,
        parent: __PRIVATE_encodeResourcePath(r)
      };
      return __PRIVATE_collectionParentsStore(e).put(i);
    }
    return PersistencePromise.resolve();
  }
  getCollectionParents(e, t) {
    const n = [], r = IDBKeyRange.bound(
      [t, ""],
      [__PRIVATE_immediateSuccessor(t), ""],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return __PRIVATE_collectionParentsStore(e).U(r).next((e2) => {
      for (const r2 of e2) {
        if (r2.collectionId !== t) break;
        n.push(__PRIVATE_decodeResourcePath(r2.parent));
      }
      return n;
    });
  }
  addFieldIndex(e, t) {
    const n = __PRIVATE_indexConfigurationStore(e), r = function __PRIVATE_toDbIndexConfiguration(e2) {
      return {
        indexId: e2.indexId,
        collectionGroup: e2.collectionGroup,
        fields: e2.fields.map((e3) => [e3.fieldPath.canonicalString(), e3.kind])
      };
    }(t);
    delete r.indexId;
    const i = n.add(r);
    if (t.indexState) {
      const n2 = __PRIVATE_indexStateStore(e);
      return i.next((e2) => {
        n2.put(__PRIVATE_toDbIndexState(e2, this.uid, t.indexState.sequenceNumber, t.indexState.offset));
      });
    }
    return i.next();
  }
  deleteFieldIndex(e, t) {
    const n = __PRIVATE_indexConfigurationStore(e), r = __PRIVATE_indexStateStore(e), i = __PRIVATE_indexEntriesStore(e);
    return n.delete(t.indexId).next(() => r.delete(IDBKeyRange.bound(
      [t.indexId],
      [t.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ))).next(() => i.delete(IDBKeyRange.bound(
      [t.indexId],
      [t.indexId + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    )));
  }
  deleteAllFieldIndexes(e) {
    const t = __PRIVATE_indexConfigurationStore(e), n = __PRIVATE_indexEntriesStore(e), r = __PRIVATE_indexStateStore(e);
    return t.j().next(() => n.j()).next(() => r.j());
  }
  createTargetIndexes(e, t) {
    return PersistencePromise.forEach(this.ln(t), (t2) => this.getIndexType(e, t2).next((n) => {
      if (0 === n || 1 === n) {
        const n2 = new __PRIVATE_TargetIndexMatcher(t2)._n();
        if (null != n2) return this.addFieldIndex(e, n2);
      }
    }));
  }
  getDocumentsMatchingTarget(e, t) {
    const n = __PRIVATE_indexEntriesStore(e);
    let r = true;
    const i = /* @__PURE__ */ new Map();
    return PersistencePromise.forEach(this.ln(t), (t2) => this.hn(e, t2).next((e2) => {
      r && (r = !!e2), i.set(t2, e2);
    })).next(() => {
      if (r) {
        let e2 = __PRIVATE_documentKeySet();
        const r2 = [];
        return PersistencePromise.forEach(i, (i2, s) => {
          __PRIVATE_logDebug("IndexedDbIndexManager", `Using index ${function __PRIVATE_fieldIndexToString(e3) {
            return `id=${e3.indexId}|cg=${e3.collectionGroup}|f=${e3.fields.map((e4) => `${e4.fieldPath}:${e4.kind}`).join(",")}`;
          }(i2)} to execute ${__PRIVATE_canonifyTarget(t)}`);
          const o = function __PRIVATE_targetGetArrayValues(e3, t2) {
            const n2 = __PRIVATE_fieldIndexGetArraySegment(t2);
            if (void 0 === n2) return null;
            for (const t3 of __PRIVATE_targetGetFieldFiltersForPath(e3, n2.fieldPath)) switch (t3.op) {
              case "array-contains-any":
                return t3.value.arrayValue.values || [];
              case "array-contains":
                return [t3.value];
            }
            return null;
          }(s, i2), _ = function __PRIVATE_targetGetNotInValues(e3, t2) {
            const n2 = /* @__PURE__ */ new Map();
            for (const r3 of __PRIVATE_fieldIndexGetDirectionalSegments(t2)) for (const t3 of __PRIVATE_targetGetFieldFiltersForPath(e3, r3.fieldPath)) switch (t3.op) {
              case "==":
              case "in":
                n2.set(r3.fieldPath.canonicalString(), t3.value);
                break;
              case "not-in":
              case "!=":
                return n2.set(r3.fieldPath.canonicalString(), t3.value), Array.from(n2.values());
            }
            return null;
          }(s, i2), a = function __PRIVATE_targetGetLowerBound(e3, t2) {
            const n2 = [];
            let r3 = true;
            for (const i3 of __PRIVATE_fieldIndexGetDirectionalSegments(t2)) {
              const t3 = 0 === i3.kind ? __PRIVATE_targetGetAscendingBound(e3, i3.fieldPath, e3.startAt) : __PRIVATE_targetGetDescendingBound(e3, i3.fieldPath, e3.startAt);
              n2.push(t3.value), r3 && (r3 = t3.inclusive);
            }
            return new Bound(n2, r3);
          }(s, i2), u = function __PRIVATE_targetGetUpperBound(e3, t2) {
            const n2 = [];
            let r3 = true;
            for (const i3 of __PRIVATE_fieldIndexGetDirectionalSegments(t2)) {
              const t3 = 0 === i3.kind ? __PRIVATE_targetGetDescendingBound(e3, i3.fieldPath, e3.endAt) : __PRIVATE_targetGetAscendingBound(e3, i3.fieldPath, e3.endAt);
              n2.push(t3.value), r3 && (r3 = t3.inclusive);
            }
            return new Bound(n2, r3);
          }(s, i2), c = this.Pn(i2, s, a), l = this.Pn(i2, s, u), h = this.In(i2, s, _), P = this.Tn(i2.indexId, o, c, a.inclusive, l, u.inclusive, h);
          return PersistencePromise.forEach(P, (i3) => n.G(i3, t.limit).next((t2) => {
            t2.forEach((t3) => {
              const n2 = DocumentKey.fromSegments(t3.documentKey);
              e2.has(n2) || (e2 = e2.add(n2), r2.push(n2));
            });
          }));
        }).next(() => r2);
      }
      return PersistencePromise.resolve(null);
    });
  }
  ln(e) {
    let t = this.cn.get(e);
    if (t) return t;
    if (0 === e.filters.length) t = [e];
    else {
      t = __PRIVATE_getDnfTerms(CompositeFilter.create(
        e.filters,
        "and"
        /* CompositeOperator.AND */
      )).map((t2) => __PRIVATE_newTarget(e.path, e.collectionGroup, e.orderBy, t2.getFilters(), e.limit, e.startAt, e.endAt));
    }
    return this.cn.set(e, t), t;
  }
  /**
   * Constructs a key range query on `DbIndexEntryStore` that unions all
   * bounds.
   */
  Tn(e, t, n, r, i, s, o) {
    const _ = (null != t ? t.length : 1) * Math.max(n.length, i.length), a = _ / (null != t ? t.length : 1), u = [];
    for (let c = 0; c < _; ++c) {
      const _2 = t ? this.En(t[c / a]) : Ae, l = this.dn(e, _2, n[c % a], r), h = this.An(e, _2, i[c % a], s), P = o.map((t2) => this.dn(
        e,
        _2,
        t2,
        /* inclusive= */
        true
      ));
      u.push(...this.createRange(l, h, P));
    }
    return u;
  }
  /** Generates the lower bound for `arrayValue` and `directionalValue`. */
  dn(e, t, n, r) {
    const i = new __PRIVATE_IndexEntry(e, DocumentKey.empty(), t, n);
    return r ? i : i.Yt();
  }
  /** Generates the upper bound for `arrayValue` and `directionalValue`. */
  An(e, t, n, r) {
    const i = new __PRIVATE_IndexEntry(e, DocumentKey.empty(), t, n);
    return r ? i.Yt() : i;
  }
  hn(e, t) {
    const n = new __PRIVATE_TargetIndexMatcher(t), r = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment();
    return this.getFieldIndexes(e, r).next((e2) => {
      let t2 = null;
      for (const r2 of e2) {
        n.nn(r2) && (!t2 || r2.fields.length > t2.fields.length) && (t2 = r2);
      }
      return t2;
    });
  }
  getIndexType(e, t) {
    let n = 2;
    const r = this.ln(t);
    return PersistencePromise.forEach(r, (t2) => this.hn(e, t2).next((e2) => {
      e2 ? 0 !== n && e2.fields.length < function __PRIVATE_targetGetSegmentCount(e3) {
        let t3 = new SortedSet(FieldPath$1.comparator), n2 = false;
        for (const r2 of e3.filters) for (const e4 of r2.getFlattenedFilters())
          e4.field.isKeyField() || // ARRAY_CONTAINS or ARRAY_CONTAINS_ANY filters must be counted separately.
          // For instance, it is possible to have an index for "a ARRAY a ASC". Even
          // though these are on the same field, they should be counted as two
          // separate segments in an index.
          ("array-contains" === e4.op || "array-contains-any" === e4.op ? n2 = true : t3 = t3.add(e4.field));
        for (const n3 of e3.orderBy)
          n3.field.isKeyField() || (t3 = t3.add(n3.field));
        return t3.size + (n2 ? 1 : 0);
      }(t2) && (n = 1) : n = 0;
    })).next(() => (
      // OR queries have more than one sub-target (one sub-target per DNF term). We currently consider
      // OR queries that have a `limit` to have a partial index. For such queries we perform sorting
      // and apply the limit in memory as a post-processing step.
      function __PRIVATE_targetHasLimit(e2) {
        return null !== e2.limit;
      }(t) && r.length > 1 && 2 === n ? 1 : n
    ));
  }
  /**
   * Returns the byte encoded form of the directional values in the field index.
   * Returns `null` if the document does not have all fields specified in the
   * index.
   */
  Rn(e, t) {
    const n = new __PRIVATE_IndexByteEncoder();
    for (const r of __PRIVATE_fieldIndexGetDirectionalSegments(e)) {
      const e2 = t.data.field(r.fieldPath);
      if (null == e2) return null;
      const i = n.Jt(r.kind);
      __PRIVATE_FirestoreIndexValueWriter.Dt.It(e2, i);
    }
    return n.Gt();
  }
  /** Encodes a single value to the ascending index format. */
  En(e) {
    const t = new __PRIVATE_IndexByteEncoder();
    return __PRIVATE_FirestoreIndexValueWriter.Dt.It(e, t.Jt(
      0
      /* IndexKind.ASCENDING */
    )), t.Gt();
  }
  /**
   * Returns an encoded form of the document key that sorts based on the key
   * ordering of the field index.
   */
  Vn(e, t) {
    const n = new __PRIVATE_IndexByteEncoder();
    return __PRIVATE_FirestoreIndexValueWriter.Dt.It(__PRIVATE_refValue(this.databaseId, t), n.Jt(function __PRIVATE_fieldIndexGetKeyOrder(e2) {
      const t2 = __PRIVATE_fieldIndexGetDirectionalSegments(e2);
      return 0 === t2.length ? 0 : t2[t2.length - 1].kind;
    }(e))), n.Gt();
  }
  /**
   * Encodes the given field values according to the specification in `target`.
   * For IN queries, a list of possible values is returned.
   */
  In(e, t, n) {
    if (null === n) return [];
    let r = [];
    r.push(new __PRIVATE_IndexByteEncoder());
    let i = 0;
    for (const s of __PRIVATE_fieldIndexGetDirectionalSegments(e)) {
      const e2 = n[i++];
      for (const n2 of r) if (this.mn(t, s.fieldPath) && isArray(e2)) r = this.fn(r, s, e2);
      else {
        const t2 = n2.Jt(s.kind);
        __PRIVATE_FirestoreIndexValueWriter.Dt.It(e2, t2);
      }
    }
    return this.gn(r);
  }
  /**
   * Encodes the given bounds according to the specification in `target`. For IN
   * queries, a list of possible values is returned.
   */
  Pn(e, t, n) {
    return this.In(e, t, n.position);
  }
  /** Returns the byte representation for the provided encoders. */
  gn(e) {
    const t = [];
    for (let n = 0; n < e.length; ++n) t[n] = e[n].Gt();
    return t;
  }
  /**
   * Creates a separate encoder for each element of an array.
   *
   * The method appends each value to all existing encoders (e.g. filter("a",
   * "==", "a1").filter("b", "in", ["b1", "b2"]) becomes ["a1,b1", "a1,b2"]). A
   * list of new encoders is returned.
   */
  fn(e, t, n) {
    const r = [...e], i = [];
    for (const e2 of n.arrayValue.values || []) for (const n2 of r) {
      const r2 = new __PRIVATE_IndexByteEncoder();
      r2.seed(n2.Gt()), __PRIVATE_FirestoreIndexValueWriter.Dt.It(e2, r2.Jt(t.kind)), i.push(r2);
    }
    return i;
  }
  mn(e, t) {
    return !!e.filters.find((e2) => e2 instanceof FieldFilter && e2.field.isEqual(t) && ("in" === e2.op || "not-in" === e2.op));
  }
  getFieldIndexes(e, t) {
    const n = __PRIVATE_indexConfigurationStore(e), r = __PRIVATE_indexStateStore(e);
    return (t ? n.U("collectionGroupIndex", IDBKeyRange.bound(t, t)) : n.U()).next((e2) => {
      const t2 = [];
      return PersistencePromise.forEach(e2, (e3) => r.get([e3.indexId, this.uid]).next((n2) => {
        t2.push(function __PRIVATE_fromDbIndexConfiguration(e4, t3) {
          const n3 = t3 ? new IndexState(t3.sequenceNumber, new IndexOffset(__PRIVATE_fromDbTimestamp(t3.readTime), new DocumentKey(__PRIVATE_decodeResourcePath(t3.documentKey)), t3.largestBatchId)) : IndexState.empty(), r2 = e4.fields.map(([e5, t4]) => new IndexSegment(FieldPath$1.fromServerFormat(e5), t4));
          return new FieldIndex(e4.indexId, e4.collectionGroup, r2, n3);
        }(e3, n2));
      })).next(() => t2);
    });
  }
  getNextCollectionGroupToUpdate(e) {
    return this.getFieldIndexes(e).next((e2) => 0 === e2.length ? null : (e2.sort((e3, t) => {
      const n = e3.indexState.sequenceNumber - t.indexState.sequenceNumber;
      return 0 !== n ? n : __PRIVATE_primitiveComparator(e3.collectionGroup, t.collectionGroup);
    }), e2[0].collectionGroup));
  }
  updateCollectionGroup(e, t, n) {
    const r = __PRIVATE_indexConfigurationStore(e), i = __PRIVATE_indexStateStore(e);
    return this.pn(e).next((e2) => r.U("collectionGroupIndex", IDBKeyRange.bound(t, t)).next((t2) => PersistencePromise.forEach(t2, (t3) => i.put(__PRIVATE_toDbIndexState(t3.indexId, this.uid, e2, n)))));
  }
  updateIndexEntries(e, t) {
    const n = /* @__PURE__ */ new Map();
    return PersistencePromise.forEach(t, (t2, r) => {
      const i = n.get(t2.collectionGroup);
      return (i ? PersistencePromise.resolve(i) : this.getFieldIndexes(e, t2.collectionGroup)).next((i2) => (n.set(t2.collectionGroup, i2), PersistencePromise.forEach(i2, (n2) => this.yn(e, t2, n2).next((t3) => {
        const i3 = this.wn(r, n2);
        return t3.isEqual(i3) ? PersistencePromise.resolve() : this.Sn(e, r, n2, t3, i3);
      }))));
    });
  }
  bn(e, t, n, r) {
    return __PRIVATE_indexEntriesStore(e).put({
      indexId: r.indexId,
      uid: this.uid,
      arrayValue: r.arrayValue,
      directionalValue: r.directionalValue,
      orderedDocumentKey: this.Vn(n, t.key),
      documentKey: t.key.path.toArray()
    });
  }
  Dn(e, t, n, r) {
    return __PRIVATE_indexEntriesStore(e).delete([r.indexId, this.uid, r.arrayValue, r.directionalValue, this.Vn(n, t.key), t.key.path.toArray()]);
  }
  yn(e, t, n) {
    const r = __PRIVATE_indexEntriesStore(e);
    let i = new SortedSet(__PRIVATE_indexEntryComparator);
    return r.J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only([n.indexId, this.uid, this.Vn(n, t)])
    }, (e2, r2) => {
      i = i.add(new __PRIVATE_IndexEntry(n.indexId, t, r2.arrayValue, r2.directionalValue));
    }).next(() => i);
  }
  /** Creates the index entries for the given document. */
  wn(e, t) {
    let n = new SortedSet(__PRIVATE_indexEntryComparator);
    const r = this.Rn(t, e);
    if (null == r) return n;
    const i = __PRIVATE_fieldIndexGetArraySegment(t);
    if (null != i) {
      const s = e.data.field(i.fieldPath);
      if (isArray(s)) for (const i2 of s.arrayValue.values || []) n = n.add(new __PRIVATE_IndexEntry(t.indexId, e.key, this.En(i2), r));
    } else n = n.add(new __PRIVATE_IndexEntry(t.indexId, e.key, Ae, r));
    return n;
  }
  /**
   * Updates the index entries for the provided document by deleting entries
   * that are no longer referenced in `newEntries` and adding all newly added
   * entries.
   */
  Sn(e, t, n, r, i) {
    __PRIVATE_logDebug("IndexedDbIndexManager", "Updating index entries for document '%s'", t.key);
    const s = [];
    return function __PRIVATE_diffSortedSets(e2, t2, n2, r2, i2) {
      const s2 = e2.getIterator(), o = t2.getIterator();
      let _ = __PRIVATE_advanceIterator(s2), a = __PRIVATE_advanceIterator(o);
      for (; _ || a; ) {
        let e3 = false, t3 = false;
        if (_ && a) {
          const r3 = n2(_, a);
          r3 < 0 ? (
            // The element was removed if the next element in our ordered
            // walkthrough is only in `before`.
            t3 = true
          ) : r3 > 0 && // The element was added if the next element in our ordered walkthrough
          // is only in `after`.
          (e3 = true);
        } else null != _ ? t3 = true : e3 = true;
        e3 ? (r2(a), a = __PRIVATE_advanceIterator(o)) : t3 ? (i2(_), _ = __PRIVATE_advanceIterator(s2)) : (_ = __PRIVATE_advanceIterator(s2), a = __PRIVATE_advanceIterator(o));
      }
    }(
      r,
      i,
      __PRIVATE_indexEntryComparator,
      /* onAdd= */
      (r2) => {
        s.push(this.bn(e, t, n, r2));
      },
      /* onRemove= */
      (r2) => {
        s.push(this.Dn(e, t, n, r2));
      }
    ), PersistencePromise.waitFor(s);
  }
  pn(e) {
    let t = 1;
    return __PRIVATE_indexStateStore(e).J({
      index: "sequenceNumberIndex",
      reverse: true,
      range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
    }, (e2, n, r) => {
      r.done(), t = n.sequenceNumber + 1;
    }).next(() => t);
  }
  /**
   * Returns a new set of IDB ranges that splits the existing range and excludes
   * any values that match the `notInValue` from these ranges. As an example,
   * '[foo > 2 && foo != 3]` becomes  `[foo > 2 && < 3, foo > 3]`.
   */
  createRange(e, t, n) {
    n = n.sort((e2, t2) => __PRIVATE_indexEntryComparator(e2, t2)).filter((e2, t2, n2) => !t2 || 0 !== __PRIVATE_indexEntryComparator(e2, n2[t2 - 1]));
    const r = [];
    r.push(e);
    for (const i2 of n) {
      const n2 = __PRIVATE_indexEntryComparator(i2, e), s = __PRIVATE_indexEntryComparator(i2, t);
      if (0 === n2)
        r[0] = e.Yt();
      else if (n2 > 0 && s < 0)
        r.push(i2), r.push(i2.Yt());
      else if (s > 0)
        break;
    }
    r.push(t);
    const i = [];
    for (let e2 = 0; e2 < r.length; e2 += 2) {
      if (this.Cn(r[e2], r[e2 + 1])) return [];
      const t2 = [r[e2].indexId, this.uid, r[e2].arrayValue, r[e2].directionalValue, Ae, []], n2 = [r[e2 + 1].indexId, this.uid, r[e2 + 1].arrayValue, r[e2 + 1].directionalValue, Ae, []];
      i.push(IDBKeyRange.bound(t2, n2));
    }
    return i;
  }
  Cn(e, t) {
    return __PRIVATE_indexEntryComparator(e, t) > 0;
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return this.getFieldIndexes(e, t).next(__PRIVATE_getMinOffsetFromFieldIndexes);
  }
  getMinOffset(e, t) {
    return PersistencePromise.mapArray(this.ln(t), (t2) => this.hn(e, t2).next((e2) => e2 || fail())).next(__PRIVATE_getMinOffsetFromFieldIndexes);
  }
};
function __PRIVATE_collectionParentsStore(e) {
  return __PRIVATE_getStore(e, "collectionParents");
}
function __PRIVATE_indexEntriesStore(e) {
  return __PRIVATE_getStore(e, "indexEntries");
}
function __PRIVATE_indexConfigurationStore(e) {
  return __PRIVATE_getStore(e, "indexConfiguration");
}
function __PRIVATE_indexStateStore(e) {
  return __PRIVATE_getStore(e, "indexState");
}
function __PRIVATE_getMinOffsetFromFieldIndexes(e) {
  __PRIVATE_hardAssert(0 !== e.length);
  let t = e[0].indexState.offset, n = t.largestBatchId;
  for (let r = 1; r < e.length; r++) {
    const i = e[r].indexState.offset;
    __PRIVATE_indexOffsetComparator(i, t) < 0 && (t = i), n < i.largestBatchId && (n = i.largestBatchId);
  }
  return new IndexOffset(t.readTime, t.documentKey, n);
}
var Re = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var LruParams = class _LruParams {
  constructor(e, t, n) {
    this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
  }
  static withCacheSize(e) {
    return new _LruParams(e, _LruParams.DEFAULT_COLLECTION_PERCENTILE, _LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
function removeMutationBatch(e, t, n) {
  const r = e.store("mutations"), i = e.store("documentMutations"), s = [], o = IDBKeyRange.only(n.batchId);
  let _ = 0;
  const a = r.J({
    range: o
  }, (e2, t2, n2) => (_++, n2.delete()));
  s.push(a.next(() => {
    __PRIVATE_hardAssert(1 === _);
  }));
  const u = [];
  for (const e2 of n.mutations) {
    const r2 = __PRIVATE_newDbDocumentMutationKey(t, e2.key.path, n.batchId);
    s.push(i.delete(r2)), u.push(e2.key);
  }
  return PersistencePromise.waitFor(s).next(() => u);
}
function __PRIVATE_dbDocumentSize(e) {
  if (!e) return 0;
  let t;
  if (e.document) t = e.document;
  else if (e.unknownDocument) t = e.unknownDocument;
  else {
    if (!e.noDocument) throw fail();
    t = e.noDocument;
  }
  return JSON.stringify(t).length;
}
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(41943040, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
var __PRIVATE_IndexedDbMutationQueue = class ___PRIVATE_IndexedDbMutationQueue {
  constructor(e, t, n, r) {
    this.userId = e, this.serializer = t, this.indexManager = n, this.referenceDelegate = r, /**
     * Caches the document keys for pending mutation batches. If the mutation
     * has been removed from IndexedDb, the cached value may continue to
     * be used to retrieve the batch's document keys. To remove a cached value
     * locally, `removeCachedMutationKeys()` should be invoked either directly
     * or through `removeMutationBatches()`.
     *
     * With multi-tab, when the primary client acknowledges or rejects a mutation,
     * this cache is used by secondary clients to invalidate the local
     * view of the documents that were previously affected by the mutation.
     */
    // PORTING NOTE: Multi-tab only.
    this.vn = {};
  }
  /**
   * Creates a new mutation queue for the given user.
   * @param user - The user for which to create a mutation queue.
   * @param serializer - The serializer to use when persisting to IndexedDb.
   */
  static lt(e, t, n, r) {
    __PRIVATE_hardAssert("" !== e.uid);
    const i = e.isAuthenticated() ? e.uid : "";
    return new ___PRIVATE_IndexedDbMutationQueue(i, t, n, r);
  }
  checkEmpty(e) {
    let t = true;
    const n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return __PRIVATE_mutationsStore(e).J({
      index: "userMutationsIndex",
      range: n
    }, (e2, n2, r) => {
      t = false, r.done();
    }).next(() => t);
  }
  addMutationBatch(e, t, n, r) {
    const i = __PRIVATE_documentMutationsStore(e), s = __PRIVATE_mutationsStore(e);
    return s.add({}).next((o) => {
      __PRIVATE_hardAssert("number" == typeof o);
      const _ = new MutationBatch(o, t, n, r), a = function __PRIVATE_toDbMutationBatch(e2, t2, n2) {
        const r2 = n2.baseMutations.map((t3) => toMutation(e2.ct, t3)), i2 = n2.mutations.map((t3) => toMutation(e2.ct, t3));
        return {
          userId: t2,
          batchId: n2.batchId,
          localWriteTimeMs: n2.localWriteTime.toMillis(),
          baseMutations: r2,
          mutations: i2
        };
      }(this.serializer, this.userId, _), u = [];
      let c = new SortedSet((e2, t2) => __PRIVATE_primitiveComparator(e2.canonicalString(), t2.canonicalString()));
      for (const e2 of r) {
        const t2 = __PRIVATE_newDbDocumentMutationKey(this.userId, e2.key.path, o);
        c = c.add(e2.key.path.popLast()), u.push(s.put(a)), u.push(i.put(t2, O));
      }
      return c.forEach((t2) => {
        u.push(this.indexManager.addToCollectionParentIndex(e, t2));
      }), e.addOnCommittedListener(() => {
        this.vn[o] = _.keys();
      }), PersistencePromise.waitFor(u).next(() => _);
    });
  }
  lookupMutationBatch(e, t) {
    return __PRIVATE_mutationsStore(e).get(t).next((e2) => e2 ? (__PRIVATE_hardAssert(e2.userId === this.userId), __PRIVATE_fromDbMutationBatch(this.serializer, e2)) : null);
  }
  /**
   * Returns the document keys for the mutation batch with the given batchId.
   * For primary clients, this method returns `null` after
   * `removeMutationBatches()` has been called. Secondary clients return a
   * cached result until `removeCachedMutationKeys()` is invoked.
   */
  // PORTING NOTE: Multi-tab only.
  Fn(e, t) {
    return this.vn[t] ? PersistencePromise.resolve(this.vn[t]) : this.lookupMutationBatch(e, t).next((e2) => {
      if (e2) {
        const n = e2.keys();
        return this.vn[t] = n, n;
      }
      return null;
    });
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const n = t + 1, r = IDBKeyRange.lowerBound([this.userId, n]);
    let i = null;
    return __PRIVATE_mutationsStore(e).J({
      index: "userMutationsIndex",
      range: r
    }, (e2, t2, r2) => {
      t2.userId === this.userId && (__PRIVATE_hardAssert(t2.batchId >= n), i = __PRIVATE_fromDbMutationBatch(this.serializer, t2)), r2.done();
    }).next(() => i);
  }
  getHighestUnacknowledgedBatchId(e) {
    const t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]);
    let n = -1;
    return __PRIVATE_mutationsStore(e).J({
      index: "userMutationsIndex",
      range: t,
      reverse: true
    }, (e2, t2, r) => {
      n = t2.batchId, r.done();
    }).next(() => n);
  }
  getAllMutationBatches(e) {
    const t = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return __PRIVATE_mutationsStore(e).U("userMutationsIndex", t).next((e2) => e2.map((e3) => __PRIVATE_fromDbMutationBatch(this.serializer, e3)));
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const n = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, t.path), r = IDBKeyRange.lowerBound(n), i = [];
    return __PRIVATE_documentMutationsStore(e).J({
      range: r
    }, (n2, r2, s) => {
      const [o, _, a] = n2, u = __PRIVATE_decodeResourcePath(_);
      if (o === this.userId && t.path.isEqual(u))
        return __PRIVATE_mutationsStore(e).get(a).next((e2) => {
          if (!e2) throw fail();
          __PRIVATE_hardAssert(e2.userId === this.userId), i.push(__PRIVATE_fromDbMutationBatch(this.serializer, e2));
        });
      s.done();
    }).next(() => i);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let n = new SortedSet(__PRIVATE_primitiveComparator);
    const r = [];
    return t.forEach((t2) => {
      const i = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, t2.path), s = IDBKeyRange.lowerBound(i), o = __PRIVATE_documentMutationsStore(e).J({
        range: s
      }, (e2, r2, i2) => {
        const [s2, o2, _] = e2, a = __PRIVATE_decodeResourcePath(o2);
        s2 === this.userId && t2.path.isEqual(a) ? n = n.add(_) : i2.done();
      });
      r.push(o);
    }), PersistencePromise.waitFor(r).next(() => this.Mn(e, n));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const n = t.path, r = n.length + 1, i = __PRIVATE_newDbDocumentMutationPrefixForPath(this.userId, n), s = IDBKeyRange.lowerBound(i);
    let o = new SortedSet(__PRIVATE_primitiveComparator);
    return __PRIVATE_documentMutationsStore(e).J({
      range: s
    }, (e2, t2, i2) => {
      const [s2, _, a] = e2, u = __PRIVATE_decodeResourcePath(_);
      s2 === this.userId && n.isPrefixOf(u) ? (
        // Rows with document keys more than one segment longer than the
        // query path can't be matches. For example, a query on 'rooms'
        // can't match the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        u.length === r && (o = o.add(a))
      ) : i2.done();
    }).next(() => this.Mn(e, o));
  }
  Mn(e, t) {
    const n = [], r = [];
    return t.forEach((t2) => {
      r.push(__PRIVATE_mutationsStore(e).get(t2).next((e2) => {
        if (null === e2) throw fail();
        __PRIVATE_hardAssert(e2.userId === this.userId), n.push(__PRIVATE_fromDbMutationBatch(this.serializer, e2));
      }));
    }), PersistencePromise.waitFor(r).next(() => n);
  }
  removeMutationBatch(e, t) {
    return removeMutationBatch(e._e, this.userId, t).next((n) => (e.addOnCommittedListener(() => {
      this.xn(t.batchId);
    }), PersistencePromise.forEach(n, (t2) => this.referenceDelegate.markPotentiallyOrphaned(e, t2))));
  }
  /**
   * Clears the cached keys for a mutation batch. This method should be
   * called by secondary clients after they process mutation updates.
   *
   * Note that this method does not have to be called from primary clients as
   * the corresponding cache entries are cleared when an acknowledged or
   * rejected batch is removed from the mutation queue.
   */
  // PORTING NOTE: Multi-tab only
  xn(e) {
    delete this.vn[e];
  }
  performConsistencyCheck(e) {
    return this.checkEmpty(e).next((t) => {
      if (!t) return PersistencePromise.resolve();
      const n = IDBKeyRange.lowerBound(
        /**
        * Creates a [userId] key for use in the DbDocumentMutations index to iterate
        * over all of a user's document mutations.
        */
        /* @__PURE__ */ function __PRIVATE_newDbDocumentMutationPrefixForUser(e2) {
          return [e2];
        }(this.userId)
      ), r = [];
      return __PRIVATE_documentMutationsStore(e).J({
        range: n
      }, (e2, t2, n2) => {
        if (e2[0] === this.userId) {
          const t3 = __PRIVATE_decodeResourcePath(e2[1]);
          r.push(t3);
        } else n2.done();
      }).next(() => {
        __PRIVATE_hardAssert(0 === r.length);
      });
    });
  }
  containsKey(e, t) {
    return __PRIVATE_mutationQueueContainsKey(e, this.userId, t);
  }
  // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
  /** Returns the mutation queue's metadata from IndexedDb. */
  On(e) {
    return __PRIVATE_mutationQueuesStore(e).get(this.userId).next((e2) => e2 || {
      userId: this.userId,
      lastAcknowledgedBatchId: -1,
      lastStreamToken: ""
    });
  }
};
function __PRIVATE_mutationQueueContainsKey(e, t, n) {
  const r = __PRIVATE_newDbDocumentMutationPrefixForPath(t, n.path), i = r[1], s = IDBKeyRange.lowerBound(r);
  let o = false;
  return __PRIVATE_documentMutationsStore(e).J({
    range: s,
    H: true
  }, (e2, n2, r2) => {
    const [
      s2,
      _,
      /*batchID*/
      a
    ] = e2;
    s2 === t && _ === i && (o = true), r2.done();
  }).next(() => o);
}
function __PRIVATE_mutationsStore(e) {
  return __PRIVATE_getStore(e, "mutations");
}
function __PRIVATE_documentMutationsStore(e) {
  return __PRIVATE_getStore(e, "documentMutations");
}
function __PRIVATE_mutationQueuesStore(e) {
  return __PRIVATE_getStore(e, "mutationQueues");
}
var __PRIVATE_TargetIdGenerator = class ___PRIVATE_TargetIdGenerator {
  constructor(e) {
    this.Nn = e;
  }
  next() {
    return this.Nn += 2, this.Nn;
  }
  static Ln() {
    return new ___PRIVATE_TargetIdGenerator(0);
  }
  static Bn() {
    return new ___PRIVATE_TargetIdGenerator(-1);
  }
};
var __PRIVATE_IndexedDbTargetCache = class {
  constructor(e, t) {
    this.referenceDelegate = e, this.serializer = t;
  }
  // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.
  allocateTargetId(e) {
    return this.kn(e).next((t) => {
      const n = new __PRIVATE_TargetIdGenerator(t.highestTargetId);
      return t.highestTargetId = n.next(), this.qn(e, t).next(() => t.highestTargetId);
    });
  }
  getLastRemoteSnapshotVersion(e) {
    return this.kn(e).next((e2) => SnapshotVersion.fromTimestamp(new Timestamp(e2.lastRemoteSnapshotVersion.seconds, e2.lastRemoteSnapshotVersion.nanoseconds)));
  }
  getHighestSequenceNumber(e) {
    return this.kn(e).next((e2) => e2.highestListenSequenceNumber);
  }
  setTargetsMetadata(e, t, n) {
    return this.kn(e).next((r) => (r.highestListenSequenceNumber = t, n && (r.lastRemoteSnapshotVersion = n.toTimestamp()), t > r.highestListenSequenceNumber && (r.highestListenSequenceNumber = t), this.qn(e, r)));
  }
  addTargetData(e, t) {
    return this.Qn(e, t).next(() => this.kn(e).next((n) => (n.targetCount += 1, this.Kn(t, n), this.qn(e, n))));
  }
  updateTargetData(e, t) {
    return this.Qn(e, t);
  }
  removeTargetData(e, t) {
    return this.removeMatchingKeysForTargetId(e, t.targetId).next(() => __PRIVATE_targetsStore(e).delete(t.targetId)).next(() => this.kn(e)).next((t2) => (__PRIVATE_hardAssert(t2.targetCount > 0), t2.targetCount -= 1, this.qn(e, t2)));
  }
  /**
   * Drops any targets with sequence number less than or equal to the upper bound, excepting those
   * present in `activeTargetIds`. Document associations for the removed targets are also removed.
   * Returns the number of targets removed.
   */
  removeTargets(e, t, n) {
    let r = 0;
    const i = [];
    return __PRIVATE_targetsStore(e).J((s, o) => {
      const _ = __PRIVATE_fromDbTarget(o);
      _.sequenceNumber <= t && null === n.get(_.targetId) && (r++, i.push(this.removeTargetData(e, _)));
    }).next(() => PersistencePromise.waitFor(i)).next(() => r);
  }
  /**
   * Call provided function with each `TargetData` that we have cached.
   */
  forEachTarget(e, t) {
    return __PRIVATE_targetsStore(e).J((e2, n) => {
      const r = __PRIVATE_fromDbTarget(n);
      t(r);
    });
  }
  kn(e) {
    return __PRIVATE_globalTargetStore(e).get("targetGlobalKey").next((e2) => (__PRIVATE_hardAssert(null !== e2), e2));
  }
  qn(e, t) {
    return __PRIVATE_globalTargetStore(e).put("targetGlobalKey", t);
  }
  Qn(e, t) {
    return __PRIVATE_targetsStore(e).put(__PRIVATE_toDbTarget(this.serializer, t));
  }
  /**
   * In-place updates the provided metadata to account for values in the given
   * TargetData. Saving is done separately. Returns true if there were any
   * changes to the metadata.
   */
  Kn(e, t) {
    let n = false;
    return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId, n = true), e.sequenceNumber > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = e.sequenceNumber, n = true), n;
  }
  getTargetCount(e) {
    return this.kn(e).next((e2) => e2.targetCount);
  }
  getTargetData(e, t) {
    const n = __PRIVATE_canonifyTarget(t), r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]);
    let i = null;
    return __PRIVATE_targetsStore(e).J({
      range: r,
      index: "queryTargetsIndex"
    }, (e2, n2, r2) => {
      const s = __PRIVATE_fromDbTarget(n2);
      __PRIVATE_targetEquals(t, s.target) && (i = s, r2.done());
    }).next(() => i);
  }
  addMatchingKeys(e, t, n) {
    const r = [], i = __PRIVATE_documentTargetStore(e);
    return t.forEach((t2) => {
      const s = __PRIVATE_encodeResourcePath(t2.path);
      r.push(i.put({
        targetId: n,
        path: s
      })), r.push(this.referenceDelegate.addReference(e, n, t2));
    }), PersistencePromise.waitFor(r);
  }
  removeMatchingKeys(e, t, n) {
    const r = __PRIVATE_documentTargetStore(e);
    return PersistencePromise.forEach(t, (t2) => {
      const i = __PRIVATE_encodeResourcePath(t2.path);
      return PersistencePromise.waitFor([r.delete([n, i]), this.referenceDelegate.removeReference(e, n, t2)]);
    });
  }
  removeMatchingKeysForTargetId(e, t) {
    const n = __PRIVATE_documentTargetStore(e), r = IDBKeyRange.bound(
      [t],
      [t + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    return n.delete(r);
  }
  getMatchingKeysForTargetId(e, t) {
    const n = IDBKeyRange.bound(
      [t],
      [t + 1],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    ), r = __PRIVATE_documentTargetStore(e);
    let i = __PRIVATE_documentKeySet();
    return r.J({
      range: n,
      H: true
    }, (e2, t2, n2) => {
      const r2 = __PRIVATE_decodeResourcePath(e2[1]), s = new DocumentKey(r2);
      i = i.add(s);
    }).next(() => i);
  }
  containsKey(e, t) {
    const n = __PRIVATE_encodeResourcePath(t.path), r = IDBKeyRange.bound(
      [n],
      [__PRIVATE_immediateSuccessor(n)],
      /*lowerOpen=*/
      false,
      /*upperOpen=*/
      true
    );
    let i = 0;
    return __PRIVATE_documentTargetStore(e).J({
      index: "documentTargetsIndex",
      H: true,
      range: r
    }, ([e2, t2], n2, r2) => {
      0 !== e2 && (i++, r2.done());
    }).next(() => i > 0);
  }
  /**
   * Looks up a TargetData entry by target ID.
   *
   * @param targetId - The target ID of the TargetData entry to look up.
   * @returns The cached TargetData entry, or null if the cache has no entry for
   * the target.
   */
  // PORTING NOTE: Multi-tab only.
  ot(e, t) {
    return __PRIVATE_targetsStore(e).get(t).next((e2) => e2 ? __PRIVATE_fromDbTarget(e2) : null);
  }
};
function __PRIVATE_targetsStore(e) {
  return __PRIVATE_getStore(e, "targets");
}
function __PRIVATE_globalTargetStore(e) {
  return __PRIVATE_getStore(e, "targetGlobal");
}
function __PRIVATE_documentTargetStore(e) {
  return __PRIVATE_getStore(e, "targetDocuments");
}
function __PRIVATE_bufferEntryComparator([e, t], [n, r]) {
  const i = __PRIVATE_primitiveComparator(e, n);
  return 0 === i ? __PRIVATE_primitiveComparator(t, r) : i;
}
var __PRIVATE_RollingSequenceNumberBuffer = class {
  constructor(e) {
    this.$n = e, this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator), this.Un = 0;
  }
  Wn() {
    return ++this.Un;
  }
  Gn(e) {
    const t = [e, this.Wn()];
    if (this.buffer.size < this.$n) this.buffer = this.buffer.add(t);
    else {
      const e2 = this.buffer.last();
      __PRIVATE_bufferEntryComparator(t, e2) < 0 && (this.buffer = this.buffer.delete(e2).add(t));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var __PRIVATE_LruScheduler = class {
  constructor(e, t, n) {
    this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.zn = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.jn(6e4);
  }
  stop() {
    this.zn && (this.zn.cancel(), this.zn = null);
  }
  get started() {
    return null !== this.zn;
  }
  jn(e) {
    __PRIVATE_logDebug("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.zn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, () => __async(this, null, function* () {
      this.zn = null;
      try {
        yield this.localStore.collectGarbage(this.garbageCollector);
      } catch (e2) {
        __PRIVATE_isIndexedDbTransactionError(e2) ? __PRIVATE_logDebug("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e2) : yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
      }
      yield this.jn(3e5);
    }));
  }
};
var __PRIVATE_LruGarbageCollectorImpl = class {
  constructor(e, t) {
    this.Hn = e, this.params = t;
  }
  calculateTargetCount(e, t) {
    return this.Hn.Jn(e).next((e2) => Math.floor(t / 100 * e2));
  }
  nthSequenceNumber(e, t) {
    if (0 === t) return PersistencePromise.resolve(__PRIVATE_ListenSequence.oe);
    const n = new __PRIVATE_RollingSequenceNumberBuffer(t);
    return this.Hn.forEachTarget(e, (e2) => n.Gn(e2.sequenceNumber)).next(() => this.Hn.Yn(e, (e2) => n.Gn(e2))).next(() => n.maxValue);
  }
  removeTargets(e, t, n) {
    return this.Hn.removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    return this.Hn.removeOrphanedDocuments(e, t);
  }
  collect(e, t) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", "Garbage collection skipped; disabled"), PersistencePromise.resolve(Re)) : this.getCacheSize(e).next((n) => n < this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), Re) : this.Zn(e, t));
  }
  getCacheSize(e) {
    return this.Hn.getCacheSize(e);
  }
  Zn(e, t) {
    let n, r, i, s, o, a, u;
    const c = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect).next((t2) => (
      // Cap at the configured max
      (t2 > this.params.maximumSequenceNumbersToCollect ? (__PRIVATE_logDebug("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t2}`), r = this.params.maximumSequenceNumbersToCollect) : r = t2, s = Date.now(), this.nthSequenceNumber(e, r))
    )).next((r2) => (n = r2, o = Date.now(), this.removeTargets(e, n, t))).next((t2) => (i = t2, a = Date.now(), this.removeOrphanedDocuments(e, n))).next((e2) => {
      if (u = Date.now(), __PRIVATE_getLogLevel() <= LogLevel.DEBUG) {
        __PRIVATE_logDebug("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${s - c}ms
	Determined least recently used ${r} in ` + (o - s) + `ms
	Removed ${i} targets in ` + (a - o) + `ms
	Removed ${e2} documents in ` + (u - a) + `ms
Total Duration: ${u - c}ms`);
      }
      return PersistencePromise.resolve({
        didRun: true,
        sequenceNumbersCollected: r,
        targetsRemoved: i,
        documentsRemoved: e2
      });
    });
  }
};
function __PRIVATE_newLruGarbageCollector(e, t) {
  return new __PRIVATE_LruGarbageCollectorImpl(e, t);
}
var __PRIVATE_IndexedDbLruDelegateImpl = class {
  constructor(e, t) {
    this.db = e, this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t);
  }
  Jn(e) {
    const t = this.Xn(e);
    return this.db.getTargetCache().getTargetCount(e).next((e2) => t.next((t2) => e2 + t2));
  }
  Xn(e) {
    let t = 0;
    return this.Yn(e, (e2) => {
      t++;
    }).next(() => t);
  }
  forEachTarget(e, t) {
    return this.db.getTargetCache().forEachTarget(e, t);
  }
  Yn(e, t) {
    return this.er(e, (e2, n) => t(n));
  }
  addReference(e, t, n) {
    return __PRIVATE_writeSentinelKey(e, n);
  }
  removeReference(e, t, n) {
    return __PRIVATE_writeSentinelKey(e, n);
  }
  removeTargets(e, t, n) {
    return this.db.getTargetCache().removeTargets(e, t, n);
  }
  markPotentiallyOrphaned(e, t) {
    return __PRIVATE_writeSentinelKey(e, t);
  }
  /**
   * Returns true if anything would prevent this document from being garbage
   * collected, given that the document in question is not present in any
   * targets and has a sequence number less than or equal to the upper bound for
   * the collection run.
   */
  tr(e, t) {
    return function __PRIVATE_mutationQueuesContainKey(e2, t2) {
      let n = false;
      return __PRIVATE_mutationQueuesStore(e2).Y((r) => __PRIVATE_mutationQueueContainsKey(e2, r, t2).next((e3) => (e3 && (n = true), PersistencePromise.resolve(!e3)))).next(() => n);
    }(e, t);
  }
  removeOrphanedDocuments(e, t) {
    const n = this.db.getRemoteDocumentCache().newChangeBuffer(), r = [];
    let i = 0;
    return this.er(e, (s, o) => {
      if (o <= t) {
        const t2 = this.tr(e, s).next((t3) => {
          if (!t3)
            return i++, n.getEntry(e, s).next(() => (n.removeEntry(s, SnapshotVersion.min()), __PRIVATE_documentTargetStore(e).delete(function __PRIVATE_sentinelKey$1(e2) {
              return [0, __PRIVATE_encodeResourcePath(e2.path)];
            }(s))));
        });
        r.push(t2);
      }
    }).next(() => PersistencePromise.waitFor(r)).next(() => n.apply(e)).next(() => i);
  }
  removeTarget(e, t) {
    const n = t.withSequenceNumber(e.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(e, n);
  }
  updateLimboDocument(e, t) {
    return __PRIVATE_writeSentinelKey(e, t);
  }
  /**
   * Call provided function for each document in the cache that is 'orphaned'. Orphaned
   * means not a part of any target, so the only entry in the target-document index for
   * that document will be the sentinel row (targetId 0), which will also have the sequence
   * number for the last time the document was accessed.
   */
  er(e, t) {
    const n = __PRIVATE_documentTargetStore(e);
    let r, i = __PRIVATE_ListenSequence.oe;
    return n.J({
      index: "documentTargetsIndex"
    }, ([e2, n2], {
      path: s,
      sequenceNumber: o
    }) => {
      0 === e2 ? (
        // if nextToReport is valid, report it, this is a new key so the
        // last one must not be a member of any targets.
        (i !== __PRIVATE_ListenSequence.oe && t(new DocumentKey(__PRIVATE_decodeResourcePath(r)), i), // set nextToReport to be this sequence number. It's the next one we
        // might report, if we don't find any targets for this document.
        // Note that the sequence number must be defined when the targetId
        // is 0.
        i = o, r = s)
      ) : (
        // set nextToReport to be invalid, we know we don't need to report
        // this one since we found a target for it.
        i = __PRIVATE_ListenSequence.oe
      );
    }).next(() => {
      i !== __PRIVATE_ListenSequence.oe && t(new DocumentKey(__PRIVATE_decodeResourcePath(r)), i);
    });
  }
  getCacheSize(e) {
    return this.db.getRemoteDocumentCache().getSize(e);
  }
};
function __PRIVATE_writeSentinelKey(e, t) {
  return __PRIVATE_documentTargetStore(e).put(function __PRIVATE_sentinelRow(e2, t2) {
    return {
      targetId: 0,
      path: __PRIVATE_encodeResourcePath(e2.path),
      sequenceNumber: t2
    };
  }(t, e.currentSequenceNumber));
}
var RemoteDocumentChangeBuffer = class {
  constructor() {
    this.changes = new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = false;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(e, t) {
    this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(e, t) {
    this.assertNotApplied();
    const n = this.changes.get(t);
    return void 0 !== n ? PersistencePromise.resolve(n) : this.getFromCache(e, t);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
};
var __PRIVATE_IndexedDbRemoteDocumentCacheImpl = class {
  constructor(e) {
    this.serializer = e;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entries to the cache.
   *
   * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  addEntry(e, t, n) {
    return __PRIVATE_remoteDocumentsStore(e).put(n);
  }
  /**
   * Removes a document from the cache.
   *
   * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  removeEntry(e, t, n) {
    return __PRIVATE_remoteDocumentsStore(e).delete(
      /**
      * Returns a key that can be used for document lookups via the primary key of
      * the DbRemoteDocument object store.
      */
      function __PRIVATE_dbReadTimeKey(e2, t2) {
        const n2 = e2.path.toArray();
        return [
          /* prefix path */
          n2.slice(0, n2.length - 2),
          /* collection id */
          n2[n2.length - 2],
          __PRIVATE_toDbTimestampKey(t2),
          /* document id */
          n2[n2.length - 1]
        ];
      }(t, n)
    );
  }
  /**
   * Updates the current cache size.
   *
   * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
   * cache's metadata.
   */
  updateMetadata(e, t) {
    return this.getMetadata(e).next((n) => (n.byteSize += t, this.nr(e, n)));
  }
  getEntry(e, t) {
    let n = MutableDocument.newInvalidDocument(t);
    return __PRIVATE_remoteDocumentsStore(e).J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(__PRIVATE_dbKey(t))
    }, (e2, r) => {
      n = this.rr(t, r);
    }).next(() => n);
  }
  /**
   * Looks up an entry in the cache.
   *
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document entry and its size.
   */
  ir(e, t) {
    let n = {
      size: 0,
      document: MutableDocument.newInvalidDocument(t)
    };
    return __PRIVATE_remoteDocumentsStore(e).J({
      index: "documentKeyIndex",
      range: IDBKeyRange.only(__PRIVATE_dbKey(t))
    }, (e2, r) => {
      n = {
        document: this.rr(t, r),
        size: __PRIVATE_dbDocumentSize(r)
      };
    }).next(() => n);
  }
  getEntries(e, t) {
    let n = __PRIVATE_mutableDocumentMap();
    return this.sr(e, t, (e2, t2) => {
      const r = this.rr(e2, t2);
      n = n.insert(e2, r);
    }).next(() => n);
  }
  /**
   * Looks up several entries in the cache.
   *
   * @param documentKeys - The set of keys entries to look up.
   * @returns A map of documents indexed by key and a map of sizes indexed by
   *     key (zero if the document does not exist).
   */
  _r(e, t) {
    let n = __PRIVATE_mutableDocumentMap(), r = new SortedMap(DocumentKey.comparator);
    return this.sr(e, t, (e2, t2) => {
      const i = this.rr(e2, t2);
      n = n.insert(e2, i), r = r.insert(e2, __PRIVATE_dbDocumentSize(t2));
    }).next(() => ({
      documents: n,
      ar: r
    }));
  }
  sr(e, t, n) {
    if (t.isEmpty()) return PersistencePromise.resolve();
    let r = new SortedSet(__PRIVATE_dbKeyComparator);
    t.forEach((e2) => r = r.add(e2));
    const i = IDBKeyRange.bound(__PRIVATE_dbKey(r.first()), __PRIVATE_dbKey(r.last())), s = r.getIterator();
    let o = s.getNext();
    return __PRIVATE_remoteDocumentsStore(e).J({
      index: "documentKeyIndex",
      range: i
    }, (e2, t2, r2) => {
      const i2 = DocumentKey.fromSegments([...t2.prefixPath, t2.collectionGroup, t2.documentId]);
      for (; o && __PRIVATE_dbKeyComparator(o, i2) < 0; ) n(o, null), o = s.getNext();
      o && o.isEqual(i2) && // Key found in cache.
      (n(o, t2), o = s.hasNext() ? s.getNext() : null), // Skip to the next key (if there is one).
      o ? r2.$(__PRIVATE_dbKey(o)) : r2.done();
    }).next(() => {
      for (; o; ) n(o, null), o = s.hasNext() ? s.getNext() : null;
    });
  }
  getDocumentsMatchingQuery(e, t, n, r, i) {
    const s = t.path, o = [s.popLast().toArray(), s.lastSegment(), __PRIVATE_toDbTimestampKey(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()], _ = [s.popLast().toArray(), s.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
    return __PRIVATE_remoteDocumentsStore(e).U(IDBKeyRange.bound(o, _, true)).next((e2) => {
      null == i || i.incrementDocumentReadCount(e2.length);
      let n2 = __PRIVATE_mutableDocumentMap();
      for (const i2 of e2) {
        const e3 = this.rr(DocumentKey.fromSegments(i2.prefixPath.concat(i2.collectionGroup, i2.documentId)), i2);
        e3.isFoundDocument() && (__PRIVATE_queryMatches(t, e3) || r.has(e3.key)) && // Either the document matches the given query, or it is mutated.
        (n2 = n2.insert(e3.key, e3));
      }
      return n2;
    });
  }
  getAllFromCollectionGroup(e, t, n, r) {
    let i = __PRIVATE_mutableDocumentMap();
    const s = __PRIVATE_dbCollectionGroupKey(t, n), o = __PRIVATE_dbCollectionGroupKey(t, IndexOffset.max());
    return __PRIVATE_remoteDocumentsStore(e).J({
      index: "collectionGroupIndex",
      range: IDBKeyRange.bound(s, o, true)
    }, (e2, t2, n2) => {
      const s2 = this.rr(DocumentKey.fromSegments(t2.prefixPath.concat(t2.collectionGroup, t2.documentId)), t2);
      i = i.insert(s2.key, s2), i.size === r && n2.done();
    }).next(() => i);
  }
  newChangeBuffer(e) {
    return new __PRIVATE_IndexedDbRemoteDocumentChangeBuffer(this, !!e && e.trackRemovals);
  }
  getSize(e) {
    return this.getMetadata(e).next((e2) => e2.byteSize);
  }
  getMetadata(e) {
    return __PRIVATE_documentGlobalStore(e).get("remoteDocumentGlobalKey").next((e2) => (__PRIVATE_hardAssert(!!e2), e2));
  }
  nr(e, t) {
    return __PRIVATE_documentGlobalStore(e).put("remoteDocumentGlobalKey", t);
  }
  /**
   * Decodes `dbRemoteDoc` and returns the document (or an invalid document if
   * the document corresponds to the format used for sentinel deletes).
   */
  rr(e, t) {
    if (t) {
      const e2 = __PRIVATE_fromDbRemoteDocument(this.serializer, t);
      if (!(e2.isNoDocument() && e2.version.isEqual(SnapshotVersion.min()))) return e2;
    }
    return MutableDocument.newInvalidDocument(e);
  }
};
function __PRIVATE_newIndexedDbRemoteDocumentCache(e) {
  return new __PRIVATE_IndexedDbRemoteDocumentCacheImpl(e);
}
var __PRIVATE_IndexedDbRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
  /**
   * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
   * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
   * `getNewDocumentChanges()`.
   */
  constructor(e, t) {
    super(), this.ur = e, this.trackRemovals = t, // A map of document sizes and read times prior to applying the changes in
    // this buffer.
    this.cr = new ObjectMap((e2) => e2.toString(), (e2, t2) => e2.isEqual(t2));
  }
  applyChanges(e) {
    const t = [];
    let n = 0, r = new SortedSet((e2, t2) => __PRIVATE_primitiveComparator(e2.canonicalString(), t2.canonicalString()));
    return this.changes.forEach((i, s) => {
      const o = this.cr.get(i);
      if (t.push(this.ur.removeEntry(e, i, o.readTime)), s.isValidDocument()) {
        const _ = __PRIVATE_toDbRemoteDocument(this.ur.serializer, s);
        r = r.add(i.path.popLast());
        const a = __PRIVATE_dbDocumentSize(_);
        n += a - o.size, t.push(this.ur.addEntry(e, i, _));
      } else if (n -= o.size, this.trackRemovals) {
        const n2 = __PRIVATE_toDbRemoteDocument(this.ur.serializer, s.convertToNoDocument(SnapshotVersion.min()));
        t.push(this.ur.addEntry(e, i, n2));
      }
    }), r.forEach((n2) => {
      t.push(this.ur.indexManager.addToCollectionParentIndex(e, n2));
    }), t.push(this.ur.updateMetadata(e, n)), PersistencePromise.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ur.ir(e, t).next((e2) => (this.cr.set(t, {
      size: e2.size,
      readTime: e2.document.readTime
    }), e2.document));
  }
  getAllFromCache(e, t) {
    return this.ur._r(e, t).next(({
      documents: e2,
      ar: t2
    }) => (
      // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `MutableDocumentMap` directly, without a conversion.
      (t2.forEach((t3, n) => {
        this.cr.set(t3, {
          size: n,
          readTime: e2.get(t3).readTime
        });
      }), e2)
    ));
  }
};
function __PRIVATE_documentGlobalStore(e) {
  return __PRIVATE_getStore(e, "remoteDocumentGlobal");
}
function __PRIVATE_remoteDocumentsStore(e) {
  return __PRIVATE_getStore(e, "remoteDocumentsV14");
}
function __PRIVATE_dbKey(e) {
  const t = e.path.toArray();
  return [
    /* prefix path */
    t.slice(0, t.length - 2),
    /* collection id */
    t[t.length - 2],
    /* document id */
    t[t.length - 1]
  ];
}
function __PRIVATE_dbCollectionGroupKey(e, t) {
  const n = t.documentKey.path.toArray();
  return [
    /* collection id */
    e,
    __PRIVATE_toDbTimestampKey(t.readTime),
    /* prefix path */
    n.slice(0, n.length - 2),
    /* document id */
    n.length > 0 ? n[n.length - 1] : ""
  ];
}
function __PRIVATE_dbKeyComparator(e, t) {
  const n = e.path.toArray(), r = t.path.toArray();
  let i = 0;
  for (let e2 = 0; e2 < n.length - 2 && e2 < r.length - 2; ++e2) if (i = __PRIVATE_primitiveComparator(n[e2], r[e2]), i) return i;
  return i = __PRIVATE_primitiveComparator(n.length, r.length), i || (i = __PRIVATE_primitiveComparator(n[n.length - 2], r[r.length - 2]), i || __PRIVATE_primitiveComparator(n[n.length - 1], r[r.length - 1]));
}
var OverlayedDocument = class {
  constructor(e, t) {
    this.overlayedDocument = e, this.mutatedFields = t;
  }
};
var LocalDocumentsView = class {
  constructor(e, t, n, r) {
    this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(e, t) {
    let n = null;
    return this.documentOverlayCache.getOverlay(e, t).next((r) => (n = r, this.remoteDocumentCache.getEntry(e, t))).next((e2) => (null !== n && __PRIVATE_mutationApplyToLocalView(n.mutation, e2, FieldMask.empty(), Timestamp.now()), e2));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.getLocalViewOfDocuments(e, t2, __PRIVATE_documentKeySet()).next(() => t2));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(e, t, n = __PRIVATE_documentKeySet()) {
    const r = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, n).next((e2) => {
      let t2 = documentMap();
      return e2.forEach((e3, n2) => {
        t2 = t2.insert(e3, n2.overlayedDocument);
      }), t2;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(e, t) {
    const n = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, n, t).next(() => this.computeViews(e, t, n, __PRIVATE_documentKeySet()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(e, t, n) {
    const r = [];
    return n.forEach((e2) => {
      t.has(e2) || r.push(e2);
    }), this.documentOverlayCache.getOverlays(e, r).next((e2) => {
      e2.forEach((e3, n2) => {
        t.set(e3, n2);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(e, t, n, r) {
    let i = __PRIVATE_mutableDocumentMap();
    const s = __PRIVATE_newDocumentKeyMap(), o = function __PRIVATE_newOverlayedDocumentMap() {
      return __PRIVATE_newDocumentKeyMap();
    }();
    return t.forEach((e2, t2) => {
      const o2 = n.get(t2.key);
      r.has(t2.key) && (void 0 === o2 || o2.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t2.key, t2) : void 0 !== o2 ? (s.set(t2.key, o2.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o2.mutation, t2, o2.mutation.getFieldMask(), Timestamp.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        s.set(t2.key, FieldMask.empty())
      );
    }), this.recalculateAndSaveOverlays(e, i).next((e2) => (e2.forEach((e3, t2) => s.set(e3, t2)), t.forEach((e3, t2) => {
      var n2;
      return o.set(e3, new OverlayedDocument(t2, null !== (n2 = s.get(e3)) && void 0 !== n2 ? n2 : null));
    }), o));
  }
  recalculateAndSaveOverlays(e, t) {
    const n = __PRIVATE_newDocumentKeyMap();
    let r = new SortedMap((e2, t2) => e2 - t2), i = __PRIVATE_documentKeySet();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e2) => {
      for (const i2 of e2) i2.keys().forEach((e3) => {
        const s = t.get(e3);
        if (null === s) return;
        let o = n.get(e3) || FieldMask.empty();
        o = i2.applyToLocalView(s, o), n.set(e3, o);
        const _ = (r.get(i2.batchId) || __PRIVATE_documentKeySet()).add(e3);
        r = r.insert(i2.batchId, _);
      });
    }).next(() => {
      const s = [], o = r.getReverseIterator();
      for (; o.hasNext(); ) {
        const r2 = o.getNext(), _ = r2.key, a = r2.value, u = __PRIVATE_newMutationMap();
        a.forEach((e2) => {
          if (!i.has(e2)) {
            const r3 = __PRIVATE_calculateOverlayMutation(t.get(e2), n.get(e2));
            null !== r3 && u.set(e2, r3), i = i.add(e2);
          }
        }), s.push(this.documentOverlayCache.saveOverlays(e, _, u));
      }
      return PersistencePromise.waitFor(s);
    }).next(() => n);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.recalculateAndSaveOverlays(e, t2));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(e, t, n, r) {
    return function __PRIVATE_isDocumentQuery$1(e2) {
      return DocumentKey.isDocumentKey(e2.path) && null === e2.collectionGroup && 0 === e2.filters.length;
    }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : __PRIVATE_isCollectionGroupQuery(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(e, t, n, r) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((i) => {
      const s = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
      let o = -1, _ = i;
      return s.next((t2) => PersistencePromise.forEach(t2, (t3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(t3) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t3).next((e2) => {
        _ = _.insert(t3, e2);
      }))).next(() => this.populateOverlays(e, t2, i)).next(() => this.computeViews(e, _, t2, __PRIVATE_documentKeySet())).next((e2) => ({
        batchId: o,
        changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e2)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new DocumentKey(t)).next((e2) => {
      let t2 = documentMap();
      return e2.isFoundDocument() && (t2 = t2.insert(e2.key, e2)), t2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
    const i = t.collectionGroup;
    let s = documentMap();
    return this.indexManager.getCollectionParents(e, i).next((o) => PersistencePromise.forEach(o, (o2) => {
      const _ = function __PRIVATE_asCollectionQueryAtPath(e2, t2) {
        return new __PRIVATE_QueryImpl(
          t2,
          /*collectionGroup=*/
          null,
          e2.explicitOrderBy.slice(),
          e2.filters.slice(),
          e2.limit,
          e2.limitType,
          e2.startAt,
          e2.endAt
        );
      }(t, o2.child(i));
      return this.getDocumentsMatchingCollectionQuery(e, _, n, r).next((e2) => {
        e2.forEach((e3, t2) => {
          s = s.insert(e3, t2);
        });
      });
    }).next(() => s));
  }
  getDocumentsMatchingCollectionQuery(e, t, n, r) {
    let i;
    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((s) => (i = s, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r))).next((e2) => {
      i.forEach((t2, n3) => {
        const r2 = n3.getKey();
        null === e2.get(r2) && (e2 = e2.insert(r2, MutableDocument.newInvalidDocument(r2)));
      });
      let n2 = documentMap();
      return e2.forEach((e3, r2) => {
        const s = i.get(e3);
        void 0 !== s && __PRIVATE_mutationApplyToLocalView(s.mutation, r2, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
        __PRIVATE_queryMatches(t, r2) && (n2 = n2.insert(e3, r2));
      }), n2;
    });
  }
};
var __PRIVATE_MemoryBundleCache = class {
  constructor(e) {
    this.serializer = e, this.lr = /* @__PURE__ */ new Map(), this.hr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(e, t) {
    return PersistencePromise.resolve(this.lr.get(t));
  }
  saveBundleMetadata(e, t) {
    return this.lr.set(
      t.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function __PRIVATE_fromBundleMetadata(e2) {
        return {
          id: e2.id,
          version: e2.version,
          createTime: __PRIVATE_fromVersion(e2.createTime)
        };
      }(t)
    ), PersistencePromise.resolve();
  }
  getNamedQuery(e, t) {
    return PersistencePromise.resolve(this.hr.get(t));
  }
  saveNamedQuery(e, t) {
    return this.hr.set(t.name, function __PRIVATE_fromProtoNamedQuery(e2) {
      return {
        name: e2.name,
        query: __PRIVATE_fromBundledQuery(e2.bundledQuery),
        readTime: __PRIVATE_fromVersion(e2.readTime)
      };
    }(t)), PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryDocumentOverlayCache = class {
  constructor() {
    this.overlays = new SortedMap(DocumentKey.comparator), this.Pr = /* @__PURE__ */ new Map();
  }
  getOverlay(e, t) {
    return PersistencePromise.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const n = __PRIVATE_newOverlayMap();
    return PersistencePromise.forEach(t, (t2) => this.getOverlay(e, t2).next((e2) => {
      null !== e2 && n.set(t2, e2);
    })).next(() => n);
  }
  saveOverlays(e, t, n) {
    return n.forEach((n2, r) => {
      this.ht(e, t, r);
    }), PersistencePromise.resolve();
  }
  removeOverlaysForBatchId(e, t, n) {
    const r = this.Pr.get(n);
    return void 0 !== r && (r.forEach((e2) => this.overlays = this.overlays.remove(e2)), this.Pr.delete(n)), PersistencePromise.resolve();
  }
  getOverlaysForCollection(e, t, n) {
    const r = __PRIVATE_newOverlayMap(), i = t.length + 1, s = new DocumentKey(t.child("")), o = this.overlays.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const e2 = o.getNext().value, s2 = e2.getKey();
      if (!t.isPrefixOf(s2.path)) break;
      s2.path.length === i && e2.largestBatchId > n && r.set(e2.getKey(), e2);
    }
    return PersistencePromise.resolve(r);
  }
  getOverlaysForCollectionGroup(e, t, n, r) {
    let i = new SortedMap((e2, t2) => e2 - t2);
    const s = this.overlays.getIterator();
    for (; s.hasNext(); ) {
      const e2 = s.getNext().value;
      if (e2.getKey().getCollectionGroup() === t && e2.largestBatchId > n) {
        let t2 = i.get(e2.largestBatchId);
        null === t2 && (t2 = __PRIVATE_newOverlayMap(), i = i.insert(e2.largestBatchId, t2)), t2.set(e2.getKey(), e2);
      }
    }
    const o = __PRIVATE_newOverlayMap(), _ = i.getIterator();
    for (; _.hasNext(); ) {
      if (_.getNext().value.forEach((e2, t2) => o.set(e2, t2)), o.size() >= r) break;
    }
    return PersistencePromise.resolve(o);
  }
  ht(e, t, n) {
    const r = this.overlays.get(n.key);
    if (null !== r) {
      const e2 = this.Pr.get(r.largestBatchId).delete(n.key);
      this.Pr.set(r.largestBatchId, e2);
    }
    this.overlays = this.overlays.insert(n.key, new Overlay(t, n));
    let i = this.Pr.get(t);
    void 0 === i && (i = __PRIVATE_documentKeySet(), this.Pr.set(t, i)), this.Pr.set(t, i.add(n.key));
  }
};
var __PRIVATE_MemoryGlobalsCache = class {
  constructor() {
    this.sessionToken = ByteString.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return PersistencePromise.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return this.sessionToken = t, PersistencePromise.resolve();
  }
};
var __PRIVATE_ReferenceSet = class {
  constructor() {
    this.Ir = new SortedSet(__PRIVATE_DocReference.Tr), // A set of outstanding references to a document sorted by target id.
    this.Er = new SortedSet(__PRIVATE_DocReference.dr);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Ir.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(e, t) {
    const n = new __PRIVATE_DocReference(e, t);
    this.Ir = this.Ir.add(n), this.Er = this.Er.add(n);
  }
  /** Add references to the given document keys for the given ID. */
  Ar(e, t) {
    e.forEach((e2) => this.addReference(e2, t));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(e, t) {
    this.Rr(new __PRIVATE_DocReference(e, t));
  }
  Vr(e, t) {
    e.forEach((e2) => this.removeReference(e2, t));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  mr(e) {
    const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1), i = [];
    return this.Er.forEachInRange([n, r], (e2) => {
      this.Rr(e2), i.push(e2.key);
    }), i;
  }
  gr() {
    this.Ir.forEach((e) => this.Rr(e));
  }
  Rr(e) {
    this.Ir = this.Ir.delete(e), this.Er = this.Er.delete(e);
  }
  pr(e) {
    const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1);
    let i = __PRIVATE_documentKeySet();
    return this.Er.forEachInRange([n, r], (e2) => {
      i = i.add(e2.key);
    }), i;
  }
  containsKey(e) {
    const t = new __PRIVATE_DocReference(e, 0), n = this.Ir.firstAfterOrEqual(t);
    return null !== n && e.isEqual(n.key);
  }
};
var __PRIVATE_DocReference = class {
  constructor(e, t) {
    this.key = e, this.yr = t;
  }
  /** Compare by key then by ID */
  static Tr(e, t) {
    return DocumentKey.comparator(e.key, t.key) || __PRIVATE_primitiveComparator(e.yr, t.yr);
  }
  /** Compare by ID then by key */
  static dr(e, t) {
    return __PRIVATE_primitiveComparator(e.yr, t.yr) || DocumentKey.comparator(e.key, t.key);
  }
};
var __PRIVATE_MemoryMutationQueue = class {
  constructor(e, t) {
    this.indexManager = e, this.referenceDelegate = t, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.wr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.Sr = new SortedSet(__PRIVATE_DocReference.Tr);
  }
  checkEmpty(e) {
    return PersistencePromise.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(e, t, n, r) {
    const i = this.wr;
    this.wr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const s = new MutationBatch(i, t, n, r);
    this.mutationQueue.push(s);
    for (const t2 of r) this.Sr = this.Sr.add(new __PRIVATE_DocReference(t2.key, i)), this.indexManager.addToCollectionParentIndex(e, t2.key.path.popLast());
    return PersistencePromise.resolve(s);
  }
  lookupMutationBatch(e, t) {
    return PersistencePromise.resolve(this.br(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const n = t + 1, r = this.Dr(n), i = r < 0 ? 0 : r;
    return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return PersistencePromise.resolve(0 === this.mutationQueue.length ? -1 : this.wr - 1);
  }
  getAllMutationBatches(e) {
    return PersistencePromise.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const n = new __PRIVATE_DocReference(t, 0), r = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY), i = [];
    return this.Sr.forEachInRange([n, r], (e2) => {
      const t2 = this.br(e2.yr);
      i.push(t2);
    }), PersistencePromise.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let n = new SortedSet(__PRIVATE_primitiveComparator);
    return t.forEach((e2) => {
      const t2 = new __PRIVATE_DocReference(e2, 0), r = new __PRIVATE_DocReference(e2, Number.POSITIVE_INFINITY);
      this.Sr.forEachInRange([t2, r], (e3) => {
        n = n.add(e3.yr);
      });
    }), PersistencePromise.resolve(this.Cr(n));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const n = t.path, r = n.length + 1;
    let i = n;
    DocumentKey.isDocumentKey(i) || (i = i.child(""));
    const s = new __PRIVATE_DocReference(new DocumentKey(i), 0);
    let o = new SortedSet(__PRIVATE_primitiveComparator);
    return this.Sr.forEachWhile((e2) => {
      const t2 = e2.key.path;
      return !!n.isPrefixOf(t2) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (t2.length === r && (o = o.add(e2.yr)), true);
    }, s), PersistencePromise.resolve(this.Cr(o));
  }
  Cr(e) {
    const t = [];
    return e.forEach((e2) => {
      const n = this.br(e2);
      null !== n && t.push(n);
    }), t;
  }
  removeMutationBatch(e, t) {
    __PRIVATE_hardAssert(0 === this.vr(t.batchId, "removed")), this.mutationQueue.shift();
    let n = this.Sr;
    return PersistencePromise.forEach(t.mutations, (r) => {
      const i = new __PRIVATE_DocReference(r.key, t.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
    }).next(() => {
      this.Sr = n;
    });
  }
  xn(e) {
  }
  containsKey(e, t) {
    const n = new __PRIVATE_DocReference(t, 0), r = this.Sr.firstAfterOrEqual(n);
    return PersistencePromise.resolve(t.isEqual(r && r.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, PersistencePromise.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  vr(e, t) {
    return this.Dr(e);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  Dr(e) {
    if (0 === this.mutationQueue.length)
      return 0;
    return e - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  br(e) {
    const t = this.Dr(e);
    if (t < 0 || t >= this.mutationQueue.length) return null;
    return this.mutationQueue[t];
  }
};
var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(e) {
    this.Fr = e, /** Underlying cache of documents and their read times. */
    this.docs = function __PRIVATE_documentEntryMap() {
      return new SortedMap(DocumentKey.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(e, t) {
    const n = t.key, r = this.docs.get(n), i = r ? r.size : 0, s = this.Fr(t);
    return this.docs = this.docs.insert(n, {
      document: t.mutableCopy(),
      size: s
    }), this.size += s - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(e) {
    const t = this.docs.get(e);
    t && (this.docs = this.docs.remove(e), this.size -= t.size);
  }
  getEntry(e, t) {
    const n = this.docs.get(t);
    return PersistencePromise.resolve(n ? n.document.mutableCopy() : MutableDocument.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let n = __PRIVATE_mutableDocumentMap();
    return t.forEach((e2) => {
      const t2 = this.docs.get(e2);
      n = n.insert(e2, t2 ? t2.document.mutableCopy() : MutableDocument.newInvalidDocument(e2));
    }), PersistencePromise.resolve(n);
  }
  getDocumentsMatchingQuery(e, t, n, r) {
    let i = __PRIVATE_mutableDocumentMap();
    const s = t.path, o = new DocumentKey(s.child("")), _ = this.docs.getIteratorFrom(o);
    for (; _.hasNext(); ) {
      const {
        key: e2,
        value: {
          document: o2
        }
      } = _.getNext();
      if (!s.isPrefixOf(e2.path)) break;
      e2.path.length > s.length + 1 || __PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o2), n) <= 0 || (r.has(o2.key) || __PRIVATE_queryMatches(t, o2)) && (i = i.insert(o2.key, o2.mutableCopy()));
    }
    return PersistencePromise.resolve(i);
  }
  getAllFromCollectionGroup(e, t, n, r) {
    fail();
  }
  Mr(e, t) {
    return PersistencePromise.forEach(this.docs, (e2) => t(e2));
  }
  newChangeBuffer(e) {
    return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
  }
  getSize(e) {
    return PersistencePromise.resolve(this.size);
  }
};
var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
  constructor(e) {
    super(), this.ur = e;
  }
  applyChanges(e) {
    const t = [];
    return this.changes.forEach((n, r) => {
      r.isValidDocument() ? t.push(this.ur.addEntry(e, r)) : this.ur.removeEntry(n);
    }), PersistencePromise.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ur.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.ur.getEntries(e, t);
  }
};
var __PRIVATE_MemoryTargetCache = class {
  constructor(e) {
    this.persistence = e, /**
     * Maps a target to the data about that target
     */
    this.Or = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Nr = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Lr = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.Br = __PRIVATE_TargetIdGenerator.Ln();
  }
  forEachTarget(e, t) {
    return this.Or.forEach((e2, n) => t(n)), PersistencePromise.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return PersistencePromise.resolve(this.Nr);
  }
  allocateTargetId(e) {
    return this.highestTargetId = this.Br.next(), PersistencePromise.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t, n) {
    return n && (this.lastRemoteSnapshotVersion = n), t > this.Nr && (this.Nr = t), PersistencePromise.resolve();
  }
  Qn(e) {
    this.Or.set(e.target, e);
    const t = e.targetId;
    t > this.highestTargetId && (this.Br = new __PRIVATE_TargetIdGenerator(t), this.highestTargetId = t), e.sequenceNumber > this.Nr && (this.Nr = e.sequenceNumber);
  }
  addTargetData(e, t) {
    return this.Qn(t), this.targetCount += 1, PersistencePromise.resolve();
  }
  updateTargetData(e, t) {
    return this.Qn(t), PersistencePromise.resolve();
  }
  removeTargetData(e, t) {
    return this.Or.delete(t.target), this.Lr.mr(t.targetId), this.targetCount -= 1, PersistencePromise.resolve();
  }
  removeTargets(e, t, n) {
    let r = 0;
    const i = [];
    return this.Or.forEach((s, o) => {
      o.sequenceNumber <= t && null === n.get(o.targetId) && (this.Or.delete(s), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++);
    }), PersistencePromise.waitFor(i).next(() => r);
  }
  getTargetCount(e) {
    return PersistencePromise.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const n = this.Or.get(t) || null;
    return PersistencePromise.resolve(n);
  }
  addMatchingKeys(e, t, n) {
    return this.Lr.Ar(t, n), PersistencePromise.resolve();
  }
  removeMatchingKeys(e, t, n) {
    this.Lr.Vr(t, n);
    const r = this.persistence.referenceDelegate, i = [];
    return r && t.forEach((t2) => {
      i.push(r.markPotentiallyOrphaned(e, t2));
    }), PersistencePromise.waitFor(i);
  }
  removeMatchingKeysForTargetId(e, t) {
    return this.Lr.mr(t), PersistencePromise.resolve();
  }
  getMatchingKeysForTargetId(e, t) {
    const n = this.Lr.pr(t);
    return PersistencePromise.resolve(n);
  }
  containsKey(e, t) {
    return PersistencePromise.resolve(this.Lr.containsKey(t));
  }
};
var __PRIVATE_MemoryPersistence = class {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(e, t) {
    this.kr = {}, this.overlays = {}, this.qr = new __PRIVATE_ListenSequence(0), this.Qr = false, this.Qr = true, this.Kr = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e(this), this.$r = new __PRIVATE_MemoryTargetCache(this);
    this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = function __PRIVATE_newMemoryRemoteDocumentCache(e2) {
      return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e2);
    }((e2) => this.referenceDelegate.Ur(e2)), this.serializer = new __PRIVATE_LocalSerializer(t), this.Wr = new __PRIVATE_MemoryBundleCache(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Qr = false, Promise.resolve();
  }
  get started() {
    return this.Qr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return t || (t = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t), t;
  }
  getMutationQueue(e, t) {
    let n = this.kr[e.toKey()];
    return n || (n = new __PRIVATE_MemoryMutationQueue(t, this.referenceDelegate), this.kr[e.toKey()] = n), n;
  }
  getGlobalsCache() {
    return this.Kr;
  }
  getTargetCache() {
    return this.$r;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Wr;
  }
  runTransaction(e, t, n) {
    __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
    const r = new __PRIVATE_MemoryTransaction(this.qr.next());
    return this.referenceDelegate.Gr(), n(r).next((e2) => this.referenceDelegate.zr(r).next(() => e2)).toPromise().then((e2) => (r.raiseOnCommittedEvent(), e2));
  }
  jr(e, t) {
    return PersistencePromise.or(Object.values(this.kr).map((n) => () => n.containsKey(e, t)));
  }
};
var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
  constructor(e) {
    super(), this.currentSequenceNumber = e;
  }
};
var __PRIVATE_MemoryEagerDelegate = class ___PRIVATE_MemoryEagerDelegate {
  constructor(e) {
    this.persistence = e, /** Tracks all documents that are active in Query views. */
    this.Hr = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
    this.Jr = null;
  }
  static Yr(e) {
    return new ___PRIVATE_MemoryEagerDelegate(e);
  }
  get Zr() {
    if (this.Jr) return this.Jr;
    throw fail();
  }
  addReference(e, t, n) {
    return this.Hr.addReference(n, t), this.Zr.delete(n.toString()), PersistencePromise.resolve();
  }
  removeReference(e, t, n) {
    return this.Hr.removeReference(n, t), this.Zr.add(n.toString()), PersistencePromise.resolve();
  }
  markPotentiallyOrphaned(e, t) {
    return this.Zr.add(t.toString()), PersistencePromise.resolve();
  }
  removeTarget(e, t) {
    this.Hr.mr(t.targetId).forEach((e2) => this.Zr.add(e2.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(e, t.targetId).next((e2) => {
      e2.forEach((e3) => this.Zr.add(e3.toString()));
    }).next(() => n.removeTargetData(e, t));
  }
  Gr() {
    this.Jr = /* @__PURE__ */ new Set();
  }
  zr(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return PersistencePromise.forEach(this.Zr, (n) => {
      const r = DocumentKey.fromPath(n);
      return this.Xr(e, r).next((e2) => {
        e2 || t.removeEntry(r, SnapshotVersion.min());
      });
    }).next(() => (this.Jr = null, t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.Xr(e, t).next((e2) => {
      e2 ? this.Zr.delete(t.toString()) : this.Zr.add(t.toString());
    });
  }
  Ur(e) {
    return 0;
  }
  Xr(e, t) {
    return PersistencePromise.or([() => PersistencePromise.resolve(this.Hr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.jr(e, t)]);
  }
};
var __PRIVATE_MemoryLruDelegate = class ___PRIVATE_MemoryLruDelegate {
  constructor(e, t) {
    this.persistence = e, this.ei = new ObjectMap((e2) => __PRIVATE_encodeResourcePath(e2.path), (e2, t2) => e2.isEqual(t2)), this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t);
  }
  static Yr(e, t) {
    return new ___PRIVATE_MemoryLruDelegate(e, t);
  }
  // No-ops, present so memory persistence doesn't have to care which delegate
  // it has.
  Gr() {
  }
  zr(e) {
    return PersistencePromise.resolve();
  }
  forEachTarget(e, t) {
    return this.persistence.getTargetCache().forEachTarget(e, t);
  }
  Jn(e) {
    const t = this.Xn(e);
    return this.persistence.getTargetCache().getTargetCount(e).next((e2) => t.next((t2) => e2 + t2));
  }
  Xn(e) {
    let t = 0;
    return this.Yn(e, (e2) => {
      t++;
    }).next(() => t);
  }
  Yn(e, t) {
    return PersistencePromise.forEach(this.ei, (n, r) => this.tr(e, n, r).next((e2) => e2 ? PersistencePromise.resolve() : t(r)));
  }
  removeTargets(e, t, n) {
    return this.persistence.getTargetCache().removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    let n = 0;
    const r = this.persistence.getRemoteDocumentCache(), i = r.newChangeBuffer();
    return r.Mr(e, (r2) => this.tr(e, r2, t).next((e2) => {
      e2 || (n++, i.removeEntry(r2, SnapshotVersion.min()));
    })).next(() => i.apply(e)).next(() => n);
  }
  markPotentiallyOrphaned(e, t) {
    return this.ei.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  removeTarget(e, t) {
    const n = t.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, n);
  }
  addReference(e, t, n) {
    return this.ei.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  removeReference(e, t, n) {
    return this.ei.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  updateLimboDocument(e, t) {
    return this.ei.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  Ur(e) {
    let t = e.key.toString().length;
    return e.isFoundDocument() && (t += __PRIVATE_estimateByteSize(e.data.value)), t;
  }
  tr(e, t, n) {
    return PersistencePromise.or([() => this.persistence.jr(e, t), () => this.persistence.getTargetCache().containsKey(e, t), () => {
      const e2 = this.ei.get(t);
      return PersistencePromise.resolve(void 0 !== e2 && e2 > n);
    }]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
};
var __PRIVATE_SchemaConverter = class {
  constructor(e) {
    this.serializer = e;
  }
  /**
   * Performs database creation and schema upgrades.
   *
   * Note that in production, this method is only ever used to upgrade the schema
   * to SCHEMA_VERSION. Different values of toVersion are only used for testing
   * and local feature development.
   */
  O(e, t, n, r) {
    const i = new __PRIVATE_SimpleDbTransaction("createOrUpgrade", t);
    n < 1 && r >= 1 && (!function __PRIVATE_createPrimaryClientStore(e2) {
      e2.createObjectStore("owner");
    }(e), function __PRIVATE_createMutationQueue(e2) {
      e2.createObjectStore("mutationQueues", {
        keyPath: "userId"
      });
      e2.createObjectStore("mutations", {
        keyPath: "batchId",
        autoIncrement: true
      }).createIndex("userMutationsIndex", x, {
        unique: true
      }), e2.createObjectStore("documentMutations");
    }(e), __PRIVATE_createQueryCache(e), function __PRIVATE_createLegacyRemoteDocumentCache(e2) {
      e2.createObjectStore("remoteDocuments");
    }(e));
    let s = PersistencePromise.resolve();
    return n < 3 && r >= 3 && // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    (0 !== n && (!function __PRIVATE_dropQueryCache(e2) {
      e2.deleteObjectStore("targetDocuments"), e2.deleteObjectStore("targets"), e2.deleteObjectStore("targetGlobal");
    }(e), __PRIVATE_createQueryCache(e)), s = s.next(() => (
      /**
      * Creates the target global singleton row.
      *
      * @param txn - The version upgrade transaction for indexeddb
      */
      function __PRIVATE_writeEmptyTargetGlobalEntry(e2) {
        const t2 = e2.store("targetGlobal"), n2 = {
          highestTargetId: 0,
          highestListenSequenceNumber: 0,
          lastRemoteSnapshotVersion: SnapshotVersion.min().toTimestamp(),
          targetCount: 0
        };
        return t2.put("targetGlobalKey", n2);
      }(i)
    ))), n < 4 && r >= 4 && (0 !== n && // Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    (s = s.next(() => function __PRIVATE_upgradeMutationBatchSchemaAndMigrateData(e2, t2) {
      return t2.store("mutations").U().next((n2) => {
        e2.deleteObjectStore("mutations");
        e2.createObjectStore("mutations", {
          keyPath: "batchId",
          autoIncrement: true
        }).createIndex("userMutationsIndex", x, {
          unique: true
        });
        const r2 = t2.store("mutations"), i2 = n2.map((e3) => r2.put(e3));
        return PersistencePromise.waitFor(i2);
      });
    }(e, i))), s = s.next(() => {
      !function __PRIVATE_createClientMetadataStore(e2) {
        e2.createObjectStore("clientMetadata", {
          keyPath: "clientId"
        });
      }(e);
    })), n < 5 && r >= 5 && (s = s.next(() => this.ti(i))), n < 6 && r >= 6 && (s = s.next(() => (function __PRIVATE_createDocumentGlobalStore(e2) {
      e2.createObjectStore("remoteDocumentGlobal");
    }(e), this.ni(i)))), n < 7 && r >= 7 && (s = s.next(() => this.ri(i))), n < 8 && r >= 8 && (s = s.next(() => this.ii(e, i))), n < 9 && r >= 9 && (s = s.next(() => {
      !function __PRIVATE_dropRemoteDocumentChangesStore(e2) {
        e2.objectStoreNames.contains("remoteDocumentChanges") && e2.deleteObjectStore("remoteDocumentChanges");
      }(e);
    })), n < 10 && r >= 10 && (s = s.next(() => this.si(i))), n < 11 && r >= 11 && (s = s.next(() => {
      !function __PRIVATE_createBundlesStore(e2) {
        e2.createObjectStore("bundles", {
          keyPath: "bundleId"
        });
      }(e), function __PRIVATE_createNamedQueriesStore(e2) {
        e2.createObjectStore("namedQueries", {
          keyPath: "name"
        });
      }(e);
    })), n < 12 && r >= 12 && (s = s.next(() => {
      !function __PRIVATE_createDocumentOverlayStore(e2) {
        const t2 = e2.createObjectStore("documentOverlays", {
          keyPath: z
        });
        t2.createIndex("collectionPathOverlayIndex", j, {
          unique: false
        }), t2.createIndex("collectionGroupOverlayIndex", H, {
          unique: false
        });
      }(e);
    })), n < 13 && r >= 13 && (s = s.next(() => function __PRIVATE_createRemoteDocumentCache(e2) {
      const t2 = e2.createObjectStore("remoteDocumentsV14", {
        keyPath: N
      });
      t2.createIndex("documentKeyIndex", L), t2.createIndex("collectionGroupIndex", B);
    }(e)).next(() => this.oi(e, i)).next(() => e.deleteObjectStore("remoteDocuments"))), n < 14 && r >= 14 && (s = s.next(() => this._i(e, i))), n < 15 && r >= 15 && (s = s.next(() => function __PRIVATE_createFieldIndex(e2) {
      e2.createObjectStore("indexConfiguration", {
        keyPath: "indexId",
        autoIncrement: true
      }).createIndex("collectionGroupIndex", "collectionGroup", {
        unique: false
      });
      e2.createObjectStore("indexState", {
        keyPath: $
      }).createIndex("sequenceNumberIndex", U, {
        unique: false
      });
      e2.createObjectStore("indexEntries", {
        keyPath: W
      }).createIndex("documentKeyIndex", G, {
        unique: false
      });
    }(e))), n < 16 && r >= 16 && // Clear the object stores to remove possibly corrupted index entries
    (s = s.next(() => {
      t.objectStore("indexState").clear();
    }).next(() => {
      t.objectStore("indexEntries").clear();
    })), n < 17 && r >= 17 && (s = s.next(() => {
      !function __PRIVATE_createGlobalsStore(e2) {
        e2.createObjectStore("globals", {
          keyPath: "name"
        });
      }(e);
    })), s;
  }
  ni(e) {
    let t = 0;
    return e.store("remoteDocuments").J((e2, n) => {
      t += __PRIVATE_dbDocumentSize(n);
    }).next(() => {
      const n = {
        byteSize: t
      };
      return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n);
    });
  }
  ti(e) {
    const t = e.store("mutationQueues"), n = e.store("mutations");
    return t.U().next((t2) => PersistencePromise.forEach(t2, (t3) => {
      const r = IDBKeyRange.bound([t3.userId, -1], [t3.userId, t3.lastAcknowledgedBatchId]);
      return n.U("userMutationsIndex", r).next((n2) => PersistencePromise.forEach(n2, (n3) => {
        __PRIVATE_hardAssert(n3.userId === t3.userId);
        const r2 = __PRIVATE_fromDbMutationBatch(this.serializer, n3);
        return removeMutationBatch(e, t3.userId, r2).next(() => {
        });
      }));
    }));
  }
  /**
   * Ensures that every document in the remote document cache has a corresponding sentinel row
   * with a sequence number. Missing rows are given the most recently used sequence number.
   */
  ri(e) {
    const t = e.store("targetDocuments"), n = e.store("remoteDocuments");
    return e.store("targetGlobal").get("targetGlobalKey").next((e2) => {
      const r = [];
      return n.J((n2, i) => {
        const s = new ResourcePath(n2), o = function __PRIVATE_sentinelKey(e3) {
          return [0, __PRIVATE_encodeResourcePath(e3)];
        }(s);
        r.push(t.get(o).next((n3) => n3 ? PersistencePromise.resolve() : ((n4) => t.put({
          targetId: 0,
          path: __PRIVATE_encodeResourcePath(n4),
          sequenceNumber: e2.highestListenSequenceNumber
        }))(s)));
      }).next(() => PersistencePromise.waitFor(r));
    });
  }
  ii(e, t) {
    e.createObjectStore("collectionParents", {
      keyPath: K
    });
    const n = t.store("collectionParents"), r = new __PRIVATE_MemoryCollectionParentIndex(), addEntry = (e2) => {
      if (r.add(e2)) {
        const t2 = e2.lastSegment(), r2 = e2.popLast();
        return n.put({
          collectionId: t2,
          parent: __PRIVATE_encodeResourcePath(r2)
        });
      }
    };
    return t.store("remoteDocuments").J({
      H: true
    }, (e2, t2) => {
      const n2 = new ResourcePath(e2);
      return addEntry(n2.popLast());
    }).next(() => t.store("documentMutations").J({
      H: true
    }, ([e2, t2, n2], r2) => {
      const i = __PRIVATE_decodeResourcePath(t2);
      return addEntry(i.popLast());
    }));
  }
  si(e) {
    const t = e.store("targets");
    return t.J((e2, n) => {
      const r = __PRIVATE_fromDbTarget(n), i = __PRIVATE_toDbTarget(this.serializer, r);
      return t.put(i);
    });
  }
  oi(e, t) {
    const n = t.store("remoteDocuments"), r = [];
    return n.J((e2, n2) => {
      const i = t.store("remoteDocumentsV14"), s = function __PRIVATE_extractKey(e3) {
        return e3.document ? new DocumentKey(ResourcePath.fromString(e3.document.name).popFirst(5)) : e3.noDocument ? DocumentKey.fromSegments(e3.noDocument.path) : e3.unknownDocument ? DocumentKey.fromSegments(e3.unknownDocument.path) : fail();
      }(n2).path.toArray(), o = {
        prefixPath: s.slice(0, s.length - 2),
        collectionGroup: s[s.length - 2],
        documentId: s[s.length - 1],
        readTime: n2.readTime || [0, 0],
        unknownDocument: n2.unknownDocument,
        noDocument: n2.noDocument,
        document: n2.document,
        hasCommittedMutations: !!n2.hasCommittedMutations
      };
      r.push(i.put(o));
    }).next(() => PersistencePromise.waitFor(r));
  }
  _i(e, t) {
    const n = t.store("mutations"), r = __PRIVATE_newIndexedDbRemoteDocumentCache(this.serializer), i = new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Yr, this.serializer.ct);
    return n.U().next((e2) => {
      const n2 = /* @__PURE__ */ new Map();
      return e2.forEach((e3) => {
        var t2;
        let r2 = null !== (t2 = n2.get(e3.userId)) && void 0 !== t2 ? t2 : __PRIVATE_documentKeySet();
        __PRIVATE_fromDbMutationBatch(this.serializer, e3).keys().forEach((e4) => r2 = r2.add(e4)), n2.set(e3.userId, r2);
      }), PersistencePromise.forEach(n2, (e3, n3) => {
        const s = new User(n3), o = __PRIVATE_IndexedDbDocumentOverlayCache.lt(this.serializer, s), _ = i.getIndexManager(s), a = __PRIVATE_IndexedDbMutationQueue.lt(s, this.serializer, _, i.referenceDelegate);
        return new LocalDocumentsView(r, a, o, _).recalculateAndSaveOverlaysForDocumentKeys(new __PRIVATE_IndexedDbTransaction(t, __PRIVATE_ListenSequence.oe), e3).next();
      });
    });
  }
};
function __PRIVATE_createQueryCache(e) {
  e.createObjectStore("targetDocuments", {
    keyPath: q
  }).createIndex("documentTargetsIndex", Q, {
    unique: true
  });
  e.createObjectStore("targets", {
    keyPath: "targetId"
  }).createIndex("queryTargetsIndex", k, {
    unique: true
  }), e.createObjectStore("targetGlobal");
}
var Ve = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
var __PRIVATE_IndexedDbPersistence = class ___PRIVATE_IndexedDbPersistence {
  constructor(e, t, n, r, i, s, o, _, a, u, c = 17) {
    if (this.allowTabSynchronization = e, this.persistenceKey = t, this.clientId = n, this.ai = i, this.window = s, this.document = o, this.ui = a, this.ci = u, this.li = c, this.qr = null, this.Qr = false, this.isPrimary = false, this.networkEnabled = true, /** Our window.unload handler, if registered. */
    this.hi = null, this.inForeground = false, /** Our 'visibilitychange' listener if registered. */
    this.Pi = null, /** The client metadata refresh task. */
    this.Ii = null, /** The last time we garbage collected the client metadata object store. */
    this.Ti = Number.NEGATIVE_INFINITY, /** A listener to notify on primary state changes. */
    this.Ei = (e2) => Promise.resolve(), !___PRIVATE_IndexedDbPersistence.D()) throw new FirestoreError(C.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new __PRIVATE_IndexedDbLruDelegateImpl(this, r), this.di = t + "main", this.serializer = new __PRIVATE_LocalSerializer(_), this.Ai = new __PRIVATE_SimpleDb(this.di, this.li, new __PRIVATE_SchemaConverter(this.serializer)), this.Kr = new __PRIVATE_IndexedDbGlobalsCache(), this.$r = new __PRIVATE_IndexedDbTargetCache(this.referenceDelegate, this.serializer), this.remoteDocumentCache = __PRIVATE_newIndexedDbRemoteDocumentCache(this.serializer), this.Wr = new __PRIVATE_IndexedDbBundleCache(), this.window && this.window.localStorage ? this.Ri = this.window.localStorage : (this.Ri = null, false === u && __PRIVATE_logError("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  /**
   * Attempt to start IndexedDb persistence.
   *
   * @returns Whether persistence was enabled.
   */
  start() {
    return this.Vi().then(() => {
      if (!this.isPrimary && !this.allowTabSynchronization)
        throw new FirestoreError(C.FAILED_PRECONDITION, Ve);
      return this.mi(), this.fi(), this.gi(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (e) => this.$r.getHighestSequenceNumber(e));
    }).then((e) => {
      this.qr = new __PRIVATE_ListenSequence(e, this.ui);
    }).then(() => {
      this.Qr = true;
    }).catch((e) => (this.Ai && this.Ai.close(), Promise.reject(e)));
  }
  /**
   * Registers a listener that gets called when the primary state of the
   * instance changes. Upon registering, this listener is invoked immediately
   * with the current primary state.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  pi(e) {
    return this.Ei = (t) => __async(this, null, function* () {
      if (this.started) return e(t);
    }), e(this.isPrimary);
  }
  /**
   * Registers a listener that gets called when the database receives a
   * version change event indicating that it has deleted.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setDatabaseDeletedListener(e) {
    this.Ai.L((t) => __async(this, null, function* () {
      null === t.newVersion && (yield e());
    }));
  }
  /**
   * Adjusts the current network state in the client's metadata, potentially
   * affecting the primary lease.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  setNetworkEnabled(e) {
    this.networkEnabled !== e && (this.networkEnabled = e, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.ai.enqueueAndForget(() => __async(this, null, function* () {
      this.started && (yield this.Vi());
    })));
  }
  /**
   * Updates the client metadata in IndexedDb and attempts to either obtain or
   * extend the primary lease for the local client. Asynchronously notifies the
   * primary state listener if the client either newly obtained or released its
   * primary lease.
   */
  Vi() {
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (e) => __PRIVATE_clientMetadataStore(e).put({
      clientId: this.clientId,
      updateTimeMs: Date.now(),
      networkEnabled: this.networkEnabled,
      inForeground: this.inForeground
    }).next(() => {
      if (this.isPrimary) return this.yi(e).next((e2) => {
        e2 || (this.isPrimary = false, this.ai.enqueueRetryable(() => this.Ei(false)));
      });
    }).next(() => this.wi(e)).next((t) => this.isPrimary && !t ? this.Si(e).next(() => false) : !!t && this.bi(e).next(() => true))).catch((e) => {
      if (__PRIVATE_isIndexedDbTransactionError(e))
        return __PRIVATE_logDebug("IndexedDbPersistence", "Failed to extend owner lease: ", e), this.isPrimary;
      if (!this.allowTabSynchronization) throw e;
      return __PRIVATE_logDebug("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), /* isPrimary= */
      false;
    }).then((e) => {
      this.isPrimary !== e && this.ai.enqueueRetryable(() => this.Ei(e)), this.isPrimary = e;
    });
  }
  yi(e) {
    return __PRIVATE_primaryClientStore(e).get("owner").next((e2) => PersistencePromise.resolve(this.Di(e2)));
  }
  Ci(e) {
    return __PRIVATE_clientMetadataStore(e).delete(this.clientId);
  }
  /**
   * If the garbage collection threshold has passed, prunes the
   * RemoteDocumentChanges and the ClientMetadata store based on the last update
   * time of all clients.
   */
  vi() {
    return __async(this, null, function* () {
      if (this.isPrimary && !this.Fi(this.Ti, 18e5)) {
        this.Ti = Date.now();
        const e = yield this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (e2) => {
          const t = __PRIVATE_getStore(e2, "clientMetadata");
          return t.U().next((e3) => {
            const n = this.Mi(e3, 18e5), r = e3.filter((e4) => -1 === n.indexOf(e4));
            return PersistencePromise.forEach(r, (e4) => t.delete(e4.clientId)).next(() => r);
          });
        }).catch(() => []);
        if (this.Ri) for (const t of e) this.Ri.removeItem(this.xi(t.clientId));
      }
    });
  }
  /**
   * Schedules a recurring timer to update the client metadata and to either
   * extend or acquire the primary lease if the client is eligible.
   */
  gi() {
    this.Ii = this.ai.enqueueAfterDelay("client_metadata_refresh", 4e3, () => this.Vi().then(() => this.vi()).then(() => this.gi()));
  }
  /** Checks whether `client` is the local client. */
  Di(e) {
    return !!e && e.ownerId === this.clientId;
  }
  /**
   * Evaluate the state of all active clients and determine whether the local
   * client is or can act as the holder of the primary lease. Returns whether
   * the client is eligible for the lease, but does not actually acquire it.
   * May return 'false' even if there is no active leaseholder and another
   * (foreground) client should become leaseholder instead.
   */
  wi(e) {
    if (this.ci) return PersistencePromise.resolve(true);
    return __PRIVATE_primaryClientStore(e).get("owner").next((t) => {
      if (null !== t && this.Fi(t.leaseTimestampMs, 5e3) && !this.Oi(t.ownerId)) {
        if (this.Di(t) && this.networkEnabled) return true;
        if (!this.Di(t)) {
          if (!t.allowTabSynchronization)
            throw new FirestoreError(C.FAILED_PRECONDITION, Ve);
          return false;
        }
      }
      return !(!this.networkEnabled || !this.inForeground) || __PRIVATE_clientMetadataStore(e).U().next((e2) => void 0 === this.Mi(e2, 5e3).find((e3) => {
        if (this.clientId !== e3.clientId) {
          const t2 = !this.networkEnabled && e3.networkEnabled, n = !this.inForeground && e3.inForeground, r = this.networkEnabled === e3.networkEnabled;
          if (t2 || n && r) return true;
        }
        return false;
      }));
    }).next((e2) => (this.isPrimary !== e2 && __PRIVATE_logDebug("IndexedDbPersistence", `Client ${e2 ? "is" : "is not"} eligible for a primary lease.`), e2));
  }
  shutdown() {
    return __async(this, null, function* () {
      this.Qr = false, this.Ni(), this.Ii && (this.Ii.cancel(), this.Ii = null), this.Li(), this.Bi(), // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
      // has obtained the primary lease.
      yield this.Ai.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (e) => {
        const t = new __PRIVATE_IndexedDbTransaction(e, __PRIVATE_ListenSequence.oe);
        return this.Si(t).next(() => this.Ci(t));
      }), this.Ai.close(), // Remove the entry marking the client as zombied from LocalStorage since
      // we successfully deleted its metadata from IndexedDb.
      this.ki();
    });
  }
  /**
   * Returns clients that are not zombied and have an updateTime within the
   * provided threshold.
   */
  Mi(e, t) {
    return e.filter((e2) => this.Fi(e2.updateTimeMs, t) && !this.Oi(e2.clientId));
  }
  /**
   * Returns the IDs of the clients that are currently active. If multi-tab
   * is not supported, returns an array that only contains the local client's
   * ID.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  qi() {
    return this.runTransaction("getActiveClients", "readonly", (e) => __PRIVATE_clientMetadataStore(e).U().next((e2) => this.Mi(e2, 18e5).map((e3) => e3.clientId)));
  }
  get started() {
    return this.Qr;
  }
  getGlobalsCache() {
    return this.Kr;
  }
  getMutationQueue(e, t) {
    return __PRIVATE_IndexedDbMutationQueue.lt(e, this.serializer, t, this.referenceDelegate);
  }
  getTargetCache() {
    return this.$r;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getIndexManager(e) {
    return new __PRIVATE_IndexedDbIndexManager(e, this.serializer.ct.databaseId);
  }
  getDocumentOverlayCache(e) {
    return __PRIVATE_IndexedDbDocumentOverlayCache.lt(this.serializer, e);
  }
  getBundleCache() {
    return this.Wr;
  }
  runTransaction(e, t, n) {
    __PRIVATE_logDebug("IndexedDbPersistence", "Starting transaction:", e);
    const r = "readonly" === t ? "readonly" : "readwrite", i = (
      /** Returns the object stores for the provided schema. */
      function __PRIVATE_getObjectStores(e2) {
        return 17 === e2 ? ne : 16 === e2 ? te : 15 === e2 ? ee : 14 === e2 ? X : 13 === e2 ? Z : 12 === e2 ? Y : 11 === e2 ? J : void fail();
      }(this.li)
    );
    let s;
    return this.Ai.runTransaction(e, r, i, (r2) => (s = new __PRIVATE_IndexedDbTransaction(r2, this.qr ? this.qr.next() : __PRIVATE_ListenSequence.oe), "readwrite-primary" === t ? this.yi(s).next((e2) => !!e2 || this.wi(s)).next((t2) => {
      if (!t2) throw __PRIVATE_logError(`Failed to obtain primary lease for action '${e}'.`), this.isPrimary = false, this.ai.enqueueRetryable(() => this.Ei(false)), new FirestoreError(C.FAILED_PRECONDITION, F);
      return n(s);
    }).next((e2) => this.bi(s).next(() => e2)) : this.Qi(s).next(() => n(s)))).then((e2) => (s.raiseOnCommittedEvent(), e2));
  }
  /**
   * Verifies that the current tab is the primary leaseholder or alternatively
   * that the leaseholder has opted into multi-tab synchronization.
   */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  Qi(e) {
    return __PRIVATE_primaryClientStore(e).get("owner").next((e2) => {
      if (null !== e2 && this.Fi(e2.leaseTimestampMs, 5e3) && !this.Oi(e2.ownerId) && !this.Di(e2) && !(this.ci || this.allowTabSynchronization && e2.allowTabSynchronization)) throw new FirestoreError(C.FAILED_PRECONDITION, Ve);
    });
  }
  /**
   * Obtains or extends the new primary lease for the local client. This
   * method does not verify that the client is eligible for this lease.
   */
  bi(e) {
    const t = {
      ownerId: this.clientId,
      allowTabSynchronization: this.allowTabSynchronization,
      leaseTimestampMs: Date.now()
    };
    return __PRIVATE_primaryClientStore(e).put("owner", t);
  }
  static D() {
    return __PRIVATE_SimpleDb.D();
  }
  /** Checks the primary lease and removes it if we are the current primary. */
  Si(e) {
    const t = __PRIVATE_primaryClientStore(e);
    return t.get("owner").next((e2) => this.Di(e2) ? (__PRIVATE_logDebug("IndexedDbPersistence", "Releasing primary lease."), t.delete("owner")) : PersistencePromise.resolve());
  }
  /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
  Fi(e, t) {
    const n = Date.now();
    return !(e < n - t) && (!(e > n) || (__PRIVATE_logError(`Detected an update time that is in the future: ${e} > ${n}`), false));
  }
  mi() {
    null !== this.document && "function" == typeof this.document.addEventListener && (this.Pi = () => {
      this.ai.enqueueAndForget(() => (this.inForeground = "visible" === this.document.visibilityState, this.Vi()));
    }, this.document.addEventListener("visibilitychange", this.Pi), this.inForeground = "visible" === this.document.visibilityState);
  }
  Li() {
    this.Pi && (this.document.removeEventListener("visibilitychange", this.Pi), this.Pi = null);
  }
  /**
   * Attaches a window.unload handler that will synchronously write our
   * clientId to a "zombie client id" location in LocalStorage. This can be used
   * by tabs trying to acquire the primary lease to determine that the lease
   * is no longer valid even if the timestamp is recent. This is particularly
   * important for the refresh case (so the tab correctly re-acquires the
   * primary lease). LocalStorage is used for this rather than IndexedDb because
   * it is a synchronous API and so can be used reliably from  an unload
   * handler.
   */
  fi() {
    var e;
    "function" == typeof (null === (e = this.window) || void 0 === e ? void 0 : e.addEventListener) && (this.hi = () => {
      this.Ni();
      const e2 = /(?:Version|Mobile)\/1[456]/;
      isSafari() && (navigator.appVersion.match(e2) || navigator.userAgent.match(e2)) && // On Safari 14, 15, and 16, we do not run any cleanup actions as it might
      // trigger a bug that prevents Safari from re-opening IndexedDB during
      // the next page load.
      // See https://bugs.webkit.org/show_bug.cgi?id=226547
      this.ai.enterRestrictedMode(
        /* purgeExistingTasks= */
        true
      ), this.ai.enqueueAndForget(() => this.shutdown());
    }, this.window.addEventListener("pagehide", this.hi));
  }
  Bi() {
    this.hi && (this.window.removeEventListener("pagehide", this.hi), this.hi = null);
  }
  /**
   * Returns whether a client is "zombied" based on its LocalStorage entry.
   * Clients become zombied when their tab closes without running all of the
   * cleanup logic in `shutdown()`.
   */
  Oi(e) {
    var t;
    try {
      const n = null !== (null === (t = this.Ri) || void 0 === t ? void 0 : t.getItem(this.xi(e)));
      return __PRIVATE_logDebug("IndexedDbPersistence", `Client '${e}' ${n ? "is" : "is not"} zombied in LocalStorage`), n;
    } catch (e2) {
      return __PRIVATE_logError("IndexedDbPersistence", "Failed to get zombied client id.", e2), false;
    }
  }
  /**
   * Record client as zombied (a client that had its tab closed). Zombied
   * clients are ignored during primary tab selection.
   */
  Ni() {
    if (this.Ri) try {
      this.Ri.setItem(this.xi(this.clientId), String(Date.now()));
    } catch (e) {
      __PRIVATE_logError("Failed to set zombie client id.", e);
    }
  }
  /** Removes the zombied client entry if it exists. */
  ki() {
    if (this.Ri) try {
      this.Ri.removeItem(this.xi(this.clientId));
    } catch (e) {
    }
  }
  xi(e) {
    return `firestore_zombie_${this.persistenceKey}_${e}`;
  }
};
function __PRIVATE_primaryClientStore(e) {
  return __PRIVATE_getStore(e, "owner");
}
function __PRIVATE_clientMetadataStore(e) {
  return __PRIVATE_getStore(e, "clientMetadata");
}
function __PRIVATE_indexedDbStoragePrefix(e, t) {
  let n = e.projectId;
  return e.isDefaultDatabase || (n += "." + e.database), "firestore/" + t + "/" + n + "/";
}
var __PRIVATE_LocalViewChanges = class ___PRIVATE_LocalViewChanges {
  constructor(e, t, n, r) {
    this.targetId = e, this.fromCache = t, this.Ki = n, this.$i = r;
  }
  static Ui(e, t) {
    let n = __PRIVATE_documentKeySet(), r = __PRIVATE_documentKeySet();
    for (const e2 of t.docChanges) switch (e2.type) {
      case 0:
        n = n.add(e2.doc.key);
        break;
      case 1:
        r = r.add(e2.doc.key);
    }
    return new ___PRIVATE_LocalViewChanges(e, t.fromCache, n, r);
  }
};
var QueryContext = class {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
};
var __PRIVATE_QueryEngine = class {
  constructor() {
    this.Wi = false, this.Gi = false, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.zi = 100, this.ji = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
      return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(e, t) {
    this.Hi = e, this.indexManager = t, this.Wi = true;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(e, t, n, r) {
    const i = {
      result: null
    };
    return this.Ji(e, t).next((e2) => {
      i.result = e2;
    }).next(() => {
      if (!i.result) return this.Yi(e, t, r, n).next((e2) => {
        i.result = e2;
      });
    }).next(() => {
      if (i.result) return;
      const n2 = new QueryContext();
      return this.Zi(e, t, n2).next((r2) => {
        if (i.result = r2, this.Gi) return this.Xi(e, t, n2, r2.size);
      });
    }).next(() => i.result);
  }
  Xi(e, t, n, r) {
    return n.documentReadCount < this.zi ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.zi, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.ji * r ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t))) : PersistencePromise.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Ji(e, t) {
    if (__PRIVATE_queryMatchesAllDocuments(t))
      return PersistencePromise.resolve(null);
    let n = __PRIVATE_queryToTarget(t);
    return this.indexManager.getIndexType(e, n).next((r) => 0 === r ? null : (null !== t.limit && 1 === r && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (t = __PRIVATE_queryWithLimit(
      t,
      null,
      "F"
      /* LimitType.First */
    ), n = __PRIVATE_queryToTarget(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r2) => {
      const i = __PRIVATE_documentKeySet(...r2);
      return this.Hi.getDocuments(e, i).next((r3) => this.indexManager.getMinOffset(e, n).next((n2) => {
        const s = this.es(t, r3);
        return this.ts(t, s, i, n2.readTime) ? this.Ji(e, __PRIVATE_queryWithLimit(
          t,
          null,
          "F"
          /* LimitType.First */
        )) : this.ns(e, s, t, n2);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Yi(e, t, n, r) {
    return __PRIVATE_queryMatchesAllDocuments(t) || r.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.Hi.getDocuments(e, n).next((i) => {
      const s = this.es(t, i);
      return this.ts(t, s, n, r) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), __PRIVATE_stringifyQuery(t)), this.ns(e, s, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, -1)).next((e2) => e2));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  es(e, t) {
    let n = new SortedSet(__PRIVATE_newQueryComparator(e));
    return t.forEach((t2, r) => {
      __PRIVATE_queryMatches(e, r) && (n = n.add(r));
    }), n;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  ts(e, t, n, r) {
    if (null === e.limit)
      return false;
    if (n.size !== t.size)
      return true;
    const i = "F" === e.limitType ? t.last() : t.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
  }
  Zi(e, t, n) {
    return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t)), this.Hi.getDocumentsMatchingQuery(e, t, IndexOffset.min(), n);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  ns(e, t, n, r) {
    return this.Hi.getDocumentsMatchingQuery(e, n, r).next((e2) => (
      // Merge with existing results
      (t.forEach((t2) => {
        e2 = e2.insert(t2.key, t2);
      }), e2)
    ));
  }
};
var __PRIVATE_LocalStoreImpl = class {
  constructor(e, t, n, r) {
    this.persistence = e, this.rs = t, this.serializer = r, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.ss = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.os = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this._s = /* @__PURE__ */ new Map(), this.us = e.getRemoteDocumentCache(), this.$r = e.getTargetCache(), this.Wr = e.getBundleCache(), this.cs(n);
  }
  cs(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.us, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.us.setIndexManager(this.indexManager), this.rs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.ss));
  }
};
function __PRIVATE_newLocalStore(e, t, n, r) {
  return new __PRIVATE_LocalStoreImpl(e, t, n, r);
}
function __PRIVATE_localStoreHandleUserChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    return yield n.persistence.runTransaction("Handle user change", "readonly", (e2) => {
      let r;
      return n.mutationQueue.getAllMutationBatches(e2).next((i) => (r = i, n.cs(t), n.mutationQueue.getAllMutationBatches(e2))).next((t2) => {
        const i = [], s = [];
        let o = __PRIVATE_documentKeySet();
        for (const e3 of r) {
          i.push(e3.batchId);
          for (const t3 of e3.mutations) o = o.add(t3.key);
        }
        for (const e3 of t2) {
          s.push(e3.batchId);
          for (const t3 of e3.mutations) o = o.add(t3.key);
        }
        return n.localDocuments.getDocuments(e2, o).next((e3) => ({
          ls: e3,
          removedBatchIds: i,
          addedBatchIds: s
        }));
      });
    });
  });
}
function __PRIVATE_localStoreAcknowledgeBatch(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e2) => {
    const r = t.batch.keys(), i = n.us.newChangeBuffer({
      trackRemovals: true
    });
    return function __PRIVATE_applyWriteToRemoteDocuments(e3, t2, n2, r2) {
      const i2 = n2.batch, s = i2.keys();
      let o = PersistencePromise.resolve();
      return s.forEach((e4) => {
        o = o.next(() => r2.getEntry(t2, e4)).next((t3) => {
          const s2 = n2.docVersions.get(e4);
          __PRIVATE_hardAssert(null !== s2), t3.version.compareTo(s2) < 0 && (i2.applyToRemoteDocument(t3, n2), t3.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (t3.setReadTime(n2.commitVersion), r2.addEntry(t3)));
        });
      }), o.next(() => e3.mutationQueue.removeMutationBatch(t2, i2));
    }(n, e2, t, i).next(() => i.apply(e2)).next(() => n.mutationQueue.performConsistencyCheck(e2)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(e2, r, t.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e2, function __PRIVATE_getKeysWithTransformResults(e3) {
      let t2 = __PRIVATE_documentKeySet();
      for (let n2 = 0; n2 < e3.mutationResults.length; ++n2) {
        e3.mutationResults[n2].transformResults.length > 0 && (t2 = t2.add(e3.batch.mutations[n2].key));
      }
      return t2;
    }(t))).next(() => n.localDocuments.getDocuments(e2, r));
  });
}
function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e) {
  const t = __PRIVATE_debugCast(e);
  return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e2) => t.$r.getLastRemoteSnapshotVersion(e2));
}
function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e, t) {
  const n = __PRIVATE_debugCast(e), r = t.snapshotVersion;
  let i = n.ss;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (e2) => {
    const s = n.us.newChangeBuffer({
      trackRemovals: true
    });
    i = n.ss;
    const o = [];
    t.targetChanges.forEach((s2, _2) => {
      const a2 = i.get(_2);
      if (!a2) return;
      o.push(n.$r.removeMatchingKeys(e2, s2.removedDocuments, _2).next(() => n.$r.addMatchingKeys(e2, s2.addedDocuments, _2)));
      let u = a2.withSequenceNumber(e2.currentSequenceNumber);
      null !== t.targetMismatches.get(_2) ? u = u.withResumeToken(ByteString.EMPTY_BYTE_STRING, SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()) : s2.resumeToken.approximateByteSize() > 0 && (u = u.withResumeToken(s2.resumeToken, r)), i = i.insert(_2, u), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function __PRIVATE_shouldPersistTargetData(e3, t2, n2) {
        if (0 === e3.resumeToken.approximateByteSize()) return true;
        if (t2.snapshotVersion.toMicroseconds() - e3.snapshotVersion.toMicroseconds() >= 3e8) return true;
        return n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size > 0;
      }(a2, u, s2) && o.push(n.$r.updateTargetData(e2, u));
    });
    let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
    if (t.documentUpdates.forEach((r2) => {
      t.resolvedLimboDocuments.has(r2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e2, r2));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    o.push(__PRIVATE_populateDocumentChangeBuffer(e2, s, t.documentUpdates).next((e3) => {
      _ = e3.hs, a = e3.Ps;
    })), !r.isEqual(SnapshotVersion.min())) {
      const t2 = n.$r.getLastRemoteSnapshotVersion(e2).next((t3) => n.$r.setTargetsMetadata(e2, e2.currentSequenceNumber, r));
      o.push(t2);
    }
    return PersistencePromise.waitFor(o).next(() => s.apply(e2)).next(() => n.localDocuments.getLocalViewOfDocuments(e2, _, a)).next(() => _);
  }).then((e2) => (n.ss = i, e2));
}
function __PRIVATE_populateDocumentChangeBuffer(e, t, n) {
  let r = __PRIVATE_documentKeySet(), i = __PRIVATE_documentKeySet();
  return n.forEach((e2) => r = r.add(e2)), t.getEntries(e, r).next((e2) => {
    let r2 = __PRIVATE_mutableDocumentMap();
    return n.forEach((n2, s) => {
      const o = e2.get(n2);
      s.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      s.isNoDocument() && s.version.isEqual(SnapshotVersion.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (t.removeEntry(n2, s.readTime), r2 = r2.insert(n2, s))
      ) : !o.isValidDocument() || s.version.compareTo(o.version) > 0 || 0 === s.version.compareTo(o.version) && o.hasPendingWrites ? (t.addEntry(s), r2 = r2.insert(n2, s)) : __PRIVATE_logDebug("LocalStore", "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", s.version);
    }), {
      hs: r2,
      Ps: i
    };
  });
}
function __PRIVATE_localStoreGetNextMutationBatch(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (e2) => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e2, t)));
}
function __PRIVATE_localStoreAllocateTarget(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Allocate target", "readwrite", (e2) => {
    let r;
    return n.$r.getTargetData(e2, t).next((i) => i ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (r = i, PersistencePromise.resolve(r))
    ) : n.$r.allocateTargetId(e2).next((i2) => (r = new TargetData(t, i2, "TargetPurposeListen", e2.currentSequenceNumber), n.$r.addTargetData(e2, r).next(() => r))));
  }).then((e2) => {
    const r = n.ss.get(e2.targetId);
    return (null === r || e2.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.ss = n.ss.insert(e2.targetId, e2), n.os.set(t, e2.targetId)), e2;
  });
}
function __PRIVATE_localStoreReleaseTarget(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = r.ss.get(t), s = n ? "readwrite" : "readwrite-primary";
    try {
      n || (yield r.persistence.runTransaction("Release target", s, (e2) => r.persistence.referenceDelegate.removeTarget(e2, i)));
    } catch (e2) {
      if (!__PRIVATE_isIndexedDbTransactionError(e2)) throw e2;
      __PRIVATE_logDebug("LocalStore", `Failed to update sequence numbers for target ${t}: ${e2}`);
    }
    r.ss = r.ss.remove(t), r.os.delete(i.target);
  });
}
function __PRIVATE_localStoreExecuteQuery(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  let i = SnapshotVersion.min(), s = __PRIVATE_documentKeySet();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (e2) => function __PRIVATE_localStoreGetTargetData(e3, t2, n2) {
      const r2 = __PRIVATE_debugCast(e3), i2 = r2.os.get(n2);
      return void 0 !== i2 ? PersistencePromise.resolve(r2.ss.get(i2)) : r2.$r.getTargetData(t2, n2);
    }(r, e2, __PRIVATE_queryToTarget(t)).next((t2) => {
      if (t2) return i = t2.lastLimboFreeSnapshotVersion, r.$r.getMatchingKeysForTargetId(e2, t2.targetId).next((e3) => {
        s = e3;
      });
    }).next(() => r.rs.getDocumentsMatchingQuery(e2, t, n ? i : SnapshotVersion.min(), n ? s : __PRIVATE_documentKeySet())).next((e3) => (__PRIVATE_setMaxReadTime(r, __PRIVATE_queryCollectionGroup(t), e3), {
      documents: e3,
      Is: s
    }))
  );
}
function __PRIVATE_localStoreGetCachedTarget(e, t) {
  const n = __PRIVATE_debugCast(e), r = __PRIVATE_debugCast(n.$r), i = n.ss.get(t);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (e2) => r.ot(e2, t).next((e3) => e3 ? e3.target : null));
}
function __PRIVATE_localStoreGetNewDocumentChanges(e, t) {
  const n = __PRIVATE_debugCast(e), r = n._s.get(t) || SnapshotVersion.min();
  return n.persistence.runTransaction("Get new document changes", "readonly", (e2) => n.us.getAllFromCollectionGroup(
    e2,
    t,
    __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, -1),
    /* limit= */
    Number.MAX_SAFE_INTEGER
  )).then((e2) => (__PRIVATE_setMaxReadTime(n, t, e2), e2));
}
function __PRIVATE_setMaxReadTime(e, t, n) {
  let r = e._s.get(t) || SnapshotVersion.min();
  n.forEach((e2, t2) => {
    t2.readTime.compareTo(r) > 0 && (r = t2.readTime);
  }), e._s.set(t, r);
}
function __PRIVATE_localStoreApplyBundledDocuments(e, t, n, r) {
  return __async(this, null, function* () {
    const i = __PRIVATE_debugCast(e);
    let s = __PRIVATE_documentKeySet(), o = __PRIVATE_mutableDocumentMap();
    for (const e2 of n) {
      const n2 = t.Ts(e2.metadata.name);
      e2.document && (s = s.add(n2));
      const r2 = t.Es(e2);
      r2.setReadTime(t.ds(e2.metadata.readTime)), o = o.insert(n2, r2);
    }
    const _ = i.us.newChangeBuffer({
      trackRemovals: true
    }), a = yield __PRIVATE_localStoreAllocateTarget(i, function __PRIVATE_umbrellaTarget(e2) {
      return __PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(ResourcePath.fromString(`__bundle__/docs/${e2}`)));
    }(r));
    return i.persistence.runTransaction("Apply bundle documents", "readwrite", (e2) => __PRIVATE_populateDocumentChangeBuffer(e2, _, o).next((t2) => (_.apply(e2), t2)).next((t2) => i.$r.removeMatchingKeysForTargetId(e2, a.targetId).next(() => i.$r.addMatchingKeys(e2, s, a.targetId)).next(() => i.localDocuments.getLocalViewOfDocuments(e2, t2.hs, t2.Ps)).next(() => t2.hs)));
  });
}
function __PRIVATE_localStoreSaveNamedQuery(_0, _1) {
  return __async(this, arguments, function* (e, t, n = __PRIVATE_documentKeySet()) {
    const r = yield __PRIVATE_localStoreAllocateTarget(e, __PRIVATE_queryToTarget(__PRIVATE_fromBundledQuery(t.bundledQuery))), i = __PRIVATE_debugCast(e);
    return i.persistence.runTransaction("Save named query", "readwrite", (e2) => {
      const s = __PRIVATE_fromVersion(t.readTime);
      if (r.snapshotVersion.compareTo(s) >= 0) return i.Wr.saveNamedQuery(e2, t);
      const o = r.withResumeToken(ByteString.EMPTY_BYTE_STRING, s);
      return i.ss = i.ss.insert(o.targetId, o), i.$r.updateTargetData(e2, o).next(() => i.$r.removeMatchingKeysForTargetId(e2, r.targetId)).next(() => i.$r.addMatchingKeys(e2, n, r.targetId)).next(() => i.Wr.saveNamedQuery(e2, t));
    });
  });
}
function createWebStorageClientStateKey(e, t) {
  return `firestore_clients_${e}_${t}`;
}
function createWebStorageMutationBatchKey(e, t, n) {
  let r = `firestore_mutations_${e}_${n}`;
  return t.isAuthenticated() && (r += `_${t.uid}`), r;
}
function createWebStorageQueryTargetMetadataKey(e, t) {
  return `firestore_targets_${e}_${t}`;
}
var __PRIVATE_MutationMetadata = class ___PRIVATE_MutationMetadata {
  constructor(e, t, n, r) {
    this.user = e, this.batchId = t, this.state = n, this.error = r;
  }
  /**
   * Parses a MutationMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static As(e, t, n) {
    const r = JSON.parse(n);
    let i, s = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error);
    return s && r.error && (s = "string" == typeof r.error.message && "string" == typeof r.error.code, s && (i = new FirestoreError(r.error.code, r.error.message))), s ? new ___PRIVATE_MutationMetadata(e, t, r.state, i) : (__PRIVATE_logError("SharedClientState", `Failed to parse mutation state for ID '${t}': ${n}`), null);
  }
  Rs() {
    const e = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (e.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(e);
  }
};
var __PRIVATE_QueryTargetMetadata = class ___PRIVATE_QueryTargetMetadata {
  constructor(e, t, n) {
    this.targetId = e, this.state = t, this.error = n;
  }
  /**
   * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static As(e, t) {
    const n = JSON.parse(t);
    let r, i = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
    return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, i && (r = new FirestoreError(n.error.code, n.error.message))), i ? new ___PRIVATE_QueryTargetMetadata(e, n.state, r) : (__PRIVATE_logError("SharedClientState", `Failed to parse target state for ID '${e}': ${t}`), null);
  }
  Rs() {
    const e = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (e.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(e);
  }
};
var __PRIVATE_RemoteClientState = class ___PRIVATE_RemoteClientState {
  constructor(e, t) {
    this.clientId = e, this.activeTargetIds = t;
  }
  /**
   * Parses a RemoteClientState from the JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static As(e, t) {
    const n = JSON.parse(t);
    let r = "object" == typeof n && n.activeTargetIds instanceof Array, i = __PRIVATE_targetIdSet();
    for (let e2 = 0; r && e2 < n.activeTargetIds.length; ++e2) r = isSafeInteger(n.activeTargetIds[e2]), i = i.add(n.activeTargetIds[e2]);
    return r ? new ___PRIVATE_RemoteClientState(e, i) : (__PRIVATE_logError("SharedClientState", `Failed to parse client data for instance '${e}': ${t}`), null);
  }
};
var __PRIVATE_SharedOnlineState = class ___PRIVATE_SharedOnlineState {
  constructor(e, t) {
    this.clientId = e, this.onlineState = t;
  }
  /**
   * Parses a SharedOnlineState from its JSON representation in WebStorage.
   * Logs a warning and returns null if the format of the data is not valid.
   */
  static As(e) {
    const t = JSON.parse(e);
    return "object" == typeof t && -1 !== ["Unknown", "Online", "Offline"].indexOf(t.onlineState) && "string" == typeof t.clientId ? new ___PRIVATE_SharedOnlineState(t.clientId, t.onlineState) : (__PRIVATE_logError("SharedClientState", `Failed to parse online state: ${e}`), null);
  }
};
var __PRIVATE_LocalClientState = class {
  constructor() {
    this.activeTargetIds = __PRIVATE_targetIdSet();
  }
  Vs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Rs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
};
var __PRIVATE_WebStorageSharedClientState = class {
  constructor(e, t, n, r, i) {
    this.window = e, this.ai = t, this.persistenceKey = n, this.gs = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.ps = this.ys.bind(this), this.ws = new SortedMap(__PRIVATE_primitiveComparator), this.started = false, /**
     * Captures WebStorage events that occur before `start()` is called. These
     * events are replayed once `WebStorageSharedClientState` is started.
     */
    this.Ss = [];
    const s = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.bs = createWebStorageClientStateKey(this.persistenceKey, this.gs), this.Ds = /** Assembles the key for the current sequence number. */
    function createWebStorageSequenceNumberKey(e2) {
      return `firestore_sequence_number_${e2}`;
    }(this.persistenceKey), this.ws = this.ws.insert(this.gs, new __PRIVATE_LocalClientState()), this.Cs = new RegExp(`^firestore_clients_${s}_([^_]*)$`), this.vs = new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`), this.Fs = new RegExp(`^firestore_targets_${s}_(\\d+)$`), this.Ms = /** Assembles the key for the online state of the primary tab. */
    function createWebStorageOnlineStateKey(e2) {
      return `firestore_online_state_${e2}`;
    }(this.persistenceKey), this.xs = function createBundleLoadedKey(e2) {
      return `firestore_bundle_loaded_v2_${e2}`;
    }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this.ps);
  }
  /** Returns 'true' if WebStorage is available in the current environment. */
  static D(e) {
    return !(!e || !e.localStorage);
  }
  start() {
    return __async(this, null, function* () {
      const e = yield this.syncEngine.qi();
      for (const t2 of e) {
        if (t2 === this.gs) continue;
        const e2 = this.getItem(createWebStorageClientStateKey(this.persistenceKey, t2));
        if (e2) {
          const n = __PRIVATE_RemoteClientState.As(t2, e2);
          n && (this.ws = this.ws.insert(n.clientId, n));
        }
      }
      this.Os();
      const t = this.storage.getItem(this.Ms);
      if (t) {
        const e2 = this.Ns(t);
        e2 && this.Ls(e2);
      }
      for (const e2 of this.Ss) this.ys(e2);
      this.Ss = [], // Register a window unload hook to remove the client metadata entry from
      // WebStorage even if `shutdown()` was not called.
      this.window.addEventListener("pagehide", () => this.shutdown()), this.started = true;
    });
  }
  writeSequenceNumber(e) {
    this.setItem(this.Ds, JSON.stringify(e));
  }
  getAllActiveQueryTargets() {
    return this.Bs(this.ws);
  }
  isActiveQueryTarget(e) {
    let t = false;
    return this.ws.forEach((n, r) => {
      r.activeTargetIds.has(e) && (t = true);
    }), t;
  }
  addPendingMutation(e) {
    this.ks(e, "pending");
  }
  updateMutationState(e, t, n) {
    this.ks(e, t, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.qs(e);
  }
  addLocalQueryTarget(e) {
    let t = "not-current";
    if (this.isActiveQueryTarget(e)) {
      const n = this.storage.getItem(createWebStorageQueryTargetMetadataKey(this.persistenceKey, e));
      if (n) {
        const r = __PRIVATE_QueryTargetMetadata.As(e, n);
        r && (t = r.state);
      }
    }
    return this.Qs.Vs(e), this.Os(), t;
  }
  removeLocalQueryTarget(e) {
    this.Qs.fs(e), this.Os();
  }
  isLocalQueryTarget(e) {
    return this.Qs.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    this.removeItem(createWebStorageQueryTargetMetadataKey(this.persistenceKey, e));
  }
  updateQueryState(e, t, n) {
    this.Ks(e, t, n);
  }
  handleUserChange(e, t, n) {
    t.forEach((e2) => {
      this.qs(e2);
    }), this.currentUser = e, n.forEach((e2) => {
      this.addPendingMutation(e2);
    });
  }
  setOnlineState(e) {
    this.$s(e);
  }
  notifyBundleLoaded(e) {
    this.Us(e);
  }
  shutdown() {
    this.started && (this.window.removeEventListener("storage", this.ps), this.removeItem(this.bs), this.started = false);
  }
  getItem(e) {
    const t = this.storage.getItem(e);
    return __PRIVATE_logDebug("SharedClientState", "READ", e, t), t;
  }
  setItem(e, t) {
    __PRIVATE_logDebug("SharedClientState", "SET", e, t), this.storage.setItem(e, t);
  }
  removeItem(e) {
    __PRIVATE_logDebug("SharedClientState", "REMOVE", e), this.storage.removeItem(e);
  }
  ys(e) {
    const t = e;
    if (t.storageArea === this.storage) {
      if (__PRIVATE_logDebug("SharedClientState", "EVENT", t.key, t.newValue), t.key === this.bs) return void __PRIVATE_logError("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.ai.enqueueRetryable(() => __async(this, null, function* () {
        if (this.started) {
          if (null !== t.key) {
            if (this.Cs.test(t.key)) {
              if (null == t.newValue) {
                const e2 = this.Ws(t.key);
                return this.Gs(e2, null);
              }
              {
                const e2 = this.zs(t.key, t.newValue);
                if (e2) return this.Gs(e2.clientId, e2);
              }
            } else if (this.vs.test(t.key)) {
              if (null !== t.newValue) {
                const e2 = this.js(t.key, t.newValue);
                if (e2) return this.Hs(e2);
              }
            } else if (this.Fs.test(t.key)) {
              if (null !== t.newValue) {
                const e2 = this.Js(t.key, t.newValue);
                if (e2) return this.Ys(e2);
              }
            } else if (t.key === this.Ms) {
              if (null !== t.newValue) {
                const e2 = this.Ns(t.newValue);
                if (e2) return this.Ls(e2);
              }
            } else if (t.key === this.Ds) {
              const e2 = function __PRIVATE_fromWebStorageSequenceNumber(e3) {
                let t2 = __PRIVATE_ListenSequence.oe;
                if (null != e3) try {
                  const n = JSON.parse(e3);
                  __PRIVATE_hardAssert("number" == typeof n), t2 = n;
                } catch (e4) {
                  __PRIVATE_logError("SharedClientState", "Failed to read sequence number from WebStorage", e4);
                }
                return t2;
              }(t.newValue);
              e2 !== __PRIVATE_ListenSequence.oe && this.sequenceNumberHandler(e2);
            } else if (t.key === this.xs) {
              const e2 = this.Zs(t.newValue);
              yield Promise.all(e2.map((e3) => this.syncEngine.Xs(e3)));
            }
          }
        } else this.Ss.push(t);
      }));
    }
  }
  get Qs() {
    return this.ws.get(this.gs);
  }
  Os() {
    this.setItem(this.bs, this.Qs.Rs());
  }
  ks(e, t, n) {
    const r = new __PRIVATE_MutationMetadata(this.currentUser, e, t, n), i = createWebStorageMutationBatchKey(this.persistenceKey, this.currentUser, e);
    this.setItem(i, r.Rs());
  }
  qs(e) {
    const t = createWebStorageMutationBatchKey(this.persistenceKey, this.currentUser, e);
    this.removeItem(t);
  }
  $s(e) {
    const t = {
      clientId: this.gs,
      onlineState: e
    };
    this.storage.setItem(this.Ms, JSON.stringify(t));
  }
  Ks(e, t, n) {
    const r = createWebStorageQueryTargetMetadataKey(this.persistenceKey, e), i = new __PRIVATE_QueryTargetMetadata(e, t, n);
    this.setItem(r, i.Rs());
  }
  Us(e) {
    const t = JSON.stringify(Array.from(e));
    this.setItem(this.xs, t);
  }
  /**
   * Parses a client state key in WebStorage. Returns null if the key does not
   * match the expected key format.
   */
  Ws(e) {
    const t = this.Cs.exec(e);
    return t ? t[1] : null;
  }
  /**
   * Parses a client state in WebStorage. Returns 'null' if the value could not
   * be parsed.
   */
  zs(e, t) {
    const n = this.Ws(e);
    return __PRIVATE_RemoteClientState.As(n, t);
  }
  /**
   * Parses a mutation batch state in WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  js(e, t) {
    const n = this.vs.exec(e), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
    return __PRIVATE_MutationMetadata.As(new User(i), r, t);
  }
  /**
   * Parses a query target state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Js(e, t) {
    const n = this.Fs.exec(e), r = Number(n[1]);
    return __PRIVATE_QueryTargetMetadata.As(r, t);
  }
  /**
   * Parses an online state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  Ns(e) {
    return __PRIVATE_SharedOnlineState.As(e);
  }
  Zs(e) {
    return JSON.parse(e);
  }
  Hs(e) {
    return __async(this, null, function* () {
      if (e.user.uid === this.currentUser.uid) return this.syncEngine.eo(e.batchId, e.state, e.error);
      __PRIVATE_logDebug("SharedClientState", `Ignoring mutation for non-active user ${e.user.uid}`);
    });
  }
  Ys(e) {
    return this.syncEngine.no(e.targetId, e.state, e.error);
  }
  Gs(e, t) {
    const n = t ? this.ws.insert(e, t) : this.ws.remove(e), r = this.Bs(this.ws), i = this.Bs(n), s = [], o = [];
    return i.forEach((e2) => {
      r.has(e2) || s.push(e2);
    }), r.forEach((e2) => {
      i.has(e2) || o.push(e2);
    }), this.syncEngine.ro(s, o).then(() => {
      this.ws = n;
    });
  }
  Ls(e) {
    this.ws.get(e.clientId) && this.onlineStateHandler(e.onlineState);
  }
  Bs(e) {
    let t = __PRIVATE_targetIdSet();
    return e.forEach((e2, n) => {
      t = t.unionWith(n.activeTargetIds);
    }), t;
  }
};
var __PRIVATE_MemorySharedClientState = class {
  constructor() {
    this.io = new __PRIVATE_LocalClientState(), this.so = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {
  }
  updateMutationState(e, t, n) {
  }
  addLocalQueryTarget(e) {
    return this.io.Vs(e), this.so[e] || "not-current";
  }
  updateQueryState(e, t, n) {
    this.so[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.io.fs(e);
  }
  isLocalQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.so[e];
  }
  getAllActiveQueryTargets() {
    return this.io.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  start() {
    return this.io = new __PRIVATE_LocalClientState(), Promise.resolve();
  }
  handleUserChange(e, t, n) {
  }
  setOnlineState(e) {
  }
  shutdown() {
  }
  writeSequenceNumber(e) {
  }
  notifyBundleLoaded(e) {
  }
};
var __PRIVATE_NoopConnectivityMonitor = class {
  oo(e) {
  }
  shutdown() {
  }
};
var __PRIVATE_BrowserConnectivityMonitor = class {
  constructor() {
    this._o = () => this.ao(), this.uo = () => this.co(), this.lo = [], this.ho();
  }
  oo(e) {
    this.lo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this._o), window.removeEventListener("offline", this.uo);
  }
  ho() {
    window.addEventListener("online", this._o), window.addEventListener("offline", this.uo);
  }
  ao() {
    __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.lo) e(
      0
      /* NetworkStatus.AVAILABLE */
    );
  }
  co() {
    __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.lo) e(
      1
      /* NetworkStatus.UNAVAILABLE */
    );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var me = null;
function __PRIVATE_generateUniqueDebugId() {
  return null === me ? me = function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : me++, "0x" + me.toString(16);
}
var fe = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var __PRIVATE_StreamBridge = class {
  constructor(e) {
    this.Po = e.Po, this.Io = e.Io;
  }
  To(e) {
    this.Eo = e;
  }
  Ao(e) {
    this.Ro = e;
  }
  Vo(e) {
    this.mo = e;
  }
  onMessage(e) {
    this.fo = e;
  }
  close() {
    this.Io();
  }
  send(e) {
    this.Po(e);
  }
  po() {
    this.Eo();
  }
  yo() {
    this.Ro();
  }
  wo(e) {
    this.mo(e);
  }
  So(e) {
    this.fo(e);
  }
};
var ge = "WebChannelConnection";
var __PRIVATE_WebChannelConnection = class extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class __PRIVATE_RestConnection {
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database);
    this.bo = t + "://" + e.host, this.Do = `projects/${n}/databases/${r}`, this.Co = "(default)" === this.databaseId.database ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
  }
  get vo() {
    return false;
  }
  Fo(e, t, n, r, i) {
    const s = __PRIVATE_generateUniqueDebugId(), o = this.Mo(e, t.toUriEncodedString());
    __PRIVATE_logDebug("RestConnection", `Sending RPC '${e}' ${s}:`, o, n);
    const _ = {
      "google-cloud-resource-prefix": this.Do,
      "x-goog-request-params": this.Co
    };
    return this.xo(_, r, i), this.Oo(e, o, _, n).then((t2) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${e}' ${s}: `, t2), t2), (t2) => {
      throw __PRIVATE_logWarn("RestConnection", `RPC '${e}' ${s} failed with error: `, t2, "url: ", o, "request:", n), t2;
    });
  }
  No(e, t, n, r, i, s) {
    return this.Fo(e, t, n, r, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  xo(e, t, n) {
    e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + b;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach((t2, n2) => e[n2] = t2), n && n.headers.forEach((t2, n2) => e[n2] = t2);
  }
  Mo(e, t) {
    const n = fe[e];
    return `${this.bo}/v1/${t}:${n}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(e) {
    super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
  }
  Oo(e, t, n, r) {
    const i = __PRIVATE_generateUniqueDebugId();
    return new Promise((s, o) => {
      const _ = new XhrIo();
      _.setWithCredentials(true), _.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (_.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const t2 = _.getResponseJson();
              __PRIVATE_logDebug(ge, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t2)), s(t2);
              break;
            case ErrorCode.TIMEOUT:
              __PRIVATE_logDebug(ge, `RPC '${e}' ${i} timed out`), o(new FirestoreError(C.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = _.getStatus();
              if (__PRIVATE_logDebug(ge, `RPC '${e}' ${i} failed with status:`, n2, "response text:", _.getResponseText()), n2 > 0) {
                let e2 = _.getResponseJson();
                Array.isArray(e2) && (e2 = e2[0]);
                const t3 = null == e2 ? void 0 : e2.error;
                if (t3 && t3.status && t3.message) {
                  const e3 = function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e4) {
                    const t4 = e4.toLowerCase().replace(/_/g, "-");
                    return Object.values(C).indexOf(t4) >= 0 ? t4 : C.UNKNOWN;
                  }(t3.status);
                  o(new FirestoreError(e3, t3.message));
                } else o(new FirestoreError(C.UNKNOWN, "Server responded with status " + _.getStatus()));
              } else
                o(new FirestoreError(C.UNAVAILABLE, "Connection failed."));
              break;
            default:
              fail();
          }
        } finally {
          __PRIVATE_logDebug(ge, `RPC '${e}' ${i} completed.`);
        }
      });
      const a = JSON.stringify(r);
      __PRIVATE_logDebug(ge, `RPC '${e}' ${i} sending request:`, r), _.send(t, "POST", a, n, 15);
    });
  }
  Lo(e, t, n) {
    const r = __PRIVATE_generateUniqueDebugId(), i = [this.bo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], s = createWebChannelTransport(), o = getStatEventTarget(), _ = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, a = this.longPollingOptions.timeoutSeconds;
    void 0 !== a && (_.longPollingTimeout = Math.round(1e3 * a)), this.useFetchStreams && (_.xmlHttpFactory = new FetchXmlHttpFactory({})), this.xo(_.initMessageHeaders, t, n), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    _.encodeInitMessageHeaders = true;
    const u = i.join("");
    __PRIVATE_logDebug(ge, `Creating RPC '${e}' stream ${r}: ${u}`, _);
    const c = s.createWebChannel(u, _);
    let l = false, h = false;
    const P = new __PRIVATE_StreamBridge({
      Po: (t2) => {
        h ? __PRIVATE_logDebug(ge, `Not sending because RPC '${e}' stream ${r} is closed:`, t2) : (l || (__PRIVATE_logDebug(ge, `Opening RPC '${e}' stream ${r} transport.`), c.open(), l = true), __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} sending:`, t2), c.send(t2));
      },
      Io: () => c.close()
    }), __PRIVATE_unguardedEventListen = (e2, t2, n2) => {
      e2.listen(t2, (e3) => {
        try {
          n2(e3);
        } catch (e4) {
          setTimeout(() => {
            throw e4;
          }, 0);
        }
      });
    };
    return __PRIVATE_unguardedEventListen(c, WebChannel.EventType.OPEN, () => {
      h || (__PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport opened.`), P.po());
    }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.CLOSE, () => {
      h || (h = true, __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} transport closed`), P.wo());
    }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.ERROR, (t2) => {
      h || (h = true, __PRIVATE_logWarn(ge, `RPC '${e}' stream ${r} transport errored:`, t2), P.wo(new FirestoreError(C.UNAVAILABLE, "The operation could not be completed")));
    }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.MESSAGE, (t2) => {
      var n2;
      if (!h) {
        const i2 = t2.data[0];
        __PRIVATE_hardAssert(!!i2);
        const s2 = i2, o2 = s2.error || (null === (n2 = s2[0]) || void 0 === n2 ? void 0 : n2.error);
        if (o2) {
          __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received error:`, o2);
          const t3 = o2.status;
          let n3 = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function __PRIVATE_mapCodeFromRpcStatus(e2) {
              const t4 = le[e2];
              if (void 0 !== t4) return __PRIVATE_mapCodeFromRpcCode(t4);
            }(t3)
          ), i3 = o2.message;
          void 0 === n3 && (n3 = C.INTERNAL, i3 = "Unknown error status: " + t3 + " with message " + o2.message), // Mark closed so no further events are propagated
          h = true, P.wo(new FirestoreError(n3, i3)), c.close();
        } else __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} received:`, i2), P.So(i2);
      }
    }), __PRIVATE_unguardedEventListen(o, Event.STAT_EVENT, (t2) => {
      t2.stat === Stat.PROXY ? __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected buffering proxy`) : t2.stat === Stat.NOPROXY && __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r} detected no buffering proxy`);
    }), setTimeout(() => {
      P.yo();
    }, 0), P;
  }
};
function __PRIVATE_getWindow() {
  return "undefined" != typeof window ? window : null;
}
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
function __PRIVATE_newSerializer(e) {
  return new JsonProtoSerializer(
    e,
    /* useProto3Json= */
    true
  );
}
var __PRIVATE_ExponentialBackoff = class {
  constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
    this.ai = e, this.timerId = t, this.Bo = n, this.ko = r, this.qo = i, this.Qo = 0, this.Ko = null, /** The last backoff attempt, as epoch milliseconds. */
    this.$o = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Qo = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Uo() {
    this.Qo = this.qo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  Wo(e) {
    this.cancel();
    const t = Math.floor(this.Qo + this.Go()), n = Math.max(0, Date.now() - this.$o), r = Math.max(0, t - n);
    r > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.Ko = this.ai.enqueueAfterDelay(this.timerId, r, () => (this.$o = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Qo *= this.ko, this.Qo < this.Bo && (this.Qo = this.Bo), this.Qo > this.qo && (this.Qo = this.qo);
  }
  zo() {
    null !== this.Ko && (this.Ko.skipDelay(), this.Ko = null);
  }
  cancel() {
    null !== this.Ko && (this.Ko.cancel(), this.Ko = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  Go() {
    return (Math.random() - 0.5) * this.Qo;
  }
};
var __PRIVATE_PersistentStream = class {
  constructor(e, t, n, r, i, s, o, _) {
    this.ai = e, this.jo = n, this.Ho = r, this.connection = i, this.authCredentialsProvider = s, this.appCheckCredentialsProvider = o, this.listener = _, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Jo = 0, this.Yo = null, this.Zo = null, this.stream = null, /**
     * Count of response messages received.
     */
    this.Xo = 0, this.e_ = new __PRIVATE_ExponentialBackoff(e, t);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  t_() {
    return 1 === this.state || 5 === this.state || this.n_();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  n_() {
    return 2 === this.state || 3 === this.state;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.Xo = 0, 4 !== this.state ? this.auth() : this.r_();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  stop() {
    return __async(this, null, function* () {
      this.t_() && (yield this.close(
        0
        /* PersistentStreamState.Initial */
      ));
    });
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  i_() {
    this.state = 0, this.e_.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  s_() {
    this.n_() && null === this.Yo && (this.Yo = this.ai.enqueueAfterDelay(this.jo, 6e4, () => this.o_()));
  }
  /** Sends a message to the underlying stream. */
  __(e) {
    this.a_(), this.stream.send(e);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  o_() {
    return __async(this, null, function* () {
      if (this.n_())
        return this.close(
          0
          /* PersistentStreamState.Initial */
        );
    });
  }
  /** Marks the stream as active again. */
  a_() {
    this.Yo && (this.Yo.cancel(), this.Yo = null);
  }
  /** Cancels the health check delayed operation. */
  u_() {
    this.Zo && (this.Zo.cancel(), this.Zo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  close(e, t) {
    return __async(this, null, function* () {
      this.a_(), this.u_(), this.e_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
      // underlying stream), guaranteeing they won't execute.
      this.Jo++, 4 !== e ? (
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.e_.reset()
      ) : t && t.code === C.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        (__PRIVATE_logError(t.toString()), __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."), this.e_.Uo())
      ) : t && t.code === C.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
      // happen since both Auth and AppCheck ensure a sufficient TTL when we
      // request a token. If a user manually resets their system clock this can
      // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
      // before we received the first message and we need to invalidate the token
      // to ensure that we fetch a new token.
      (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
      null !== this.stream && (this.c_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
      // inhibit backoff or otherwise manipulate the state in its non-started state.
      this.state = e, // Notify the listener that the stream closed.
      yield this.listener.Vo(t);
    });
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  c_() {
  }
  auth() {
    this.state = 1;
    const e = this.l_(this.Jo), t = this.Jo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([e2, n]) => {
      this.Jo === t && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.h_(e2, n);
    }, (t2) => {
      e(() => {
        const e2 = new FirestoreError(C.UNKNOWN, "Fetching auth token failed: " + t2.message);
        return this.P_(e2);
      });
    });
  }
  h_(e, t) {
    const n = this.l_(this.Jo);
    this.stream = this.I_(e, t), this.stream.To(() => {
      n(() => this.listener.To());
    }), this.stream.Ao(() => {
      n(() => (this.state = 2, this.Zo = this.ai.enqueueAfterDelay(this.Ho, 1e4, () => (this.n_() && (this.state = 3), Promise.resolve())), this.listener.Ao()));
    }), this.stream.Vo((e2) => {
      n(() => this.P_(e2));
    }), this.stream.onMessage((e2) => {
      n(() => 1 == ++this.Xo ? this.T_(e2) : this.onNext(e2));
    });
  }
  r_() {
    this.state = 5, this.e_.Wo(() => __async(this, null, function* () {
      this.state = 0, this.start();
    }));
  }
  // Visible for tests
  P_(e) {
    return __PRIVATE_logDebug("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  l_(e) {
    return (t) => {
      this.ai.enqueueAndForget(() => this.Jo === e ? t() : (__PRIVATE_logDebug("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var __PRIVATE_PersistentListenStream = class extends __PRIVATE_PersistentStream {
  constructor(e, t, n, r, i, s) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
  }
  I_(e, t) {
    return this.connection.Lo("Listen", e, t);
  }
  T_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.e_.reset();
    const t = __PRIVATE_fromWatchChange(this.serializer, e), n = function __PRIVATE_versionFromListenResponse(e2) {
      if (!("targetChange" in e2)) return SnapshotVersion.min();
      const t2 = e2.targetChange;
      return t2.targetIds && t2.targetIds.length ? SnapshotVersion.min() : t2.readTime ? __PRIVATE_fromVersion(t2.readTime) : SnapshotVersion.min();
    }(e);
    return this.listener.E_(t, n);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  d_(e) {
    const t = {};
    t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.addTarget = function __PRIVATE_toTarget(e2, t2) {
      let n2;
      const r = t2.target;
      if (n2 = __PRIVATE_targetIsDocumentTarget(r) ? {
        documents: __PRIVATE_toDocumentsTarget(e2, r)
      } : {
        query: __PRIVATE_toQueryTarget(e2, r)._t
      }, n2.targetId = t2.targetId, t2.resumeToken.approximateByteSize() > 0) {
        n2.resumeToken = __PRIVATE_toBytes(e2, t2.resumeToken);
        const r2 = __PRIVATE_toInt32Proto(e2, t2.expectedCount);
        null !== r2 && (n2.expectedCount = r2);
      } else if (t2.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
        n2.readTime = toTimestamp(e2, t2.snapshotVersion.toTimestamp());
        const r2 = __PRIVATE_toInt32Proto(e2, t2.expectedCount);
        null !== r2 && (n2.expectedCount = r2);
      }
      return n2;
    }(this.serializer, e);
    const n = __PRIVATE_toListenRequestLabels(this.serializer, e);
    n && (t.labels = n), this.__(t);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  A_(e) {
    const t = {};
    t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.removeTarget = e, this.__(t);
  }
};
var __PRIVATE_PersistentWriteStream = class extends __PRIVATE_PersistentStream {
  constructor(e, t, n, r, i, s) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get R_() {
    return this.Xo > 0;
  }
  // Override of PersistentStream.start
  start() {
    this.lastStreamToken = void 0, super.start();
  }
  c_() {
    this.R_ && this.V_([]);
  }
  I_(e, t) {
    return this.connection.Lo("Write", e, t);
  }
  T_(e) {
    return __PRIVATE_hardAssert(!!e.streamToken), this.lastStreamToken = e.streamToken, // The first response is always the handshake response
    __PRIVATE_hardAssert(!e.writeResults || 0 === e.writeResults.length), this.listener.m_();
  }
  onNext(e) {
    __PRIVATE_hardAssert(!!e.streamToken), this.lastStreamToken = e.streamToken, // A successful first write response means the stream is healthy,
    // Note, that we could consider a successful handshake healthy, however,
    // the write itself might be causing an error we want to back off from.
    this.e_.reset();
    const t = __PRIVATE_fromWriteResults(e.writeResults, e.commitTime), n = __PRIVATE_fromVersion(e.commitTime);
    return this.listener.f_(n, t);
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  g_() {
    const e = {};
    e.database = __PRIVATE_getEncodedDatabaseId(this.serializer), this.__(e);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  V_(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((e2) => toMutation(this.serializer, e2))
    };
    this.__(t);
  }
};
var __PRIVATE_DatastoreImpl = class extends class Datastore {
} {
  constructor(e, t, n, r) {
    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.p_ = false;
  }
  y_() {
    if (this.p_) throw new FirestoreError(C.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Fo(e, t, n, r) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s]) => this.connection.Fo(e, __PRIVATE_toResourcePath(t, n), r, i, s)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === C.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(C.UNKNOWN, e2.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  No(e, t, n, r, i) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.No(e, __PRIVATE_toResourcePath(t, n), r, s, o, i)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === C.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(C.UNKNOWN, e2.toString());
    });
  }
  terminate() {
    this.p_ = true, this.connection.terminate();
  }
};
var __PRIVATE_OnlineStateTracker = class {
  constructor(e, t) {
    this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.w_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.S_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.b_ = true;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  D_() {
    0 === this.w_ && (this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.S_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.S_ = null, this.v_("Backend didn't respond within 10 seconds."), this.C_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  F_(e) {
    "Online" === this.state ? this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.w_++, this.w_ >= 1 && (this.M_(), this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.C_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(e) {
    this.M_(), this.w_ = 0, "Online" === e && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.b_ = false), this.C_(e);
  }
  C_(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e));
  }
  v_(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.b_ ? (__PRIVATE_logError(t), this.b_ = false) : __PRIVATE_logDebug("OnlineStateTracker", t);
  }
  M_() {
    null !== this.S_ && (this.S_.cancel(), this.S_ = null);
  }
};
var __PRIVATE_RemoteStoreImpl = class {
  constructor(e, t, n, r, i) {
    this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.x_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.O_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.N_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.L_ = [], this.B_ = i, this.B_.oo((e2) => {
      n.enqueueAndForget(() => __async(this, null, function* () {
        __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug("RemoteStore", "Restarting streams for network reachability change."), yield function __PRIVATE_restartNetwork(e3) {
          return __async(this, null, function* () {
            const t2 = __PRIVATE_debugCast(e3);
            t2.N_.add(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield __PRIVATE_disableNetworkInternal(t2), t2.k_.set(
              "Unknown"
              /* OnlineState.Unknown */
            ), t2.N_.delete(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield __PRIVATE_enableNetworkInternal(t2);
          });
        }(this));
      }));
    }), this.k_ = new __PRIVATE_OnlineStateTracker(n, r);
  }
};
function __PRIVATE_enableNetworkInternal(e) {
  return __async(this, null, function* () {
    if (__PRIVATE_canUseNetwork(e)) for (const t of e.L_) yield t(
      /* enabled= */
      true
    );
  });
}
function __PRIVATE_disableNetworkInternal(e) {
  return __async(this, null, function* () {
    for (const t of e.L_) yield t(
      /* enabled= */
      false
    );
  });
}
function __PRIVATE_remoteStoreListen(e, t) {
  const n = __PRIVATE_debugCast(e);
  n.O_.has(t.targetId) || // Mark this as something the client is currently listening for.
  (n.O_.set(t.targetId, t), __PRIVATE_shouldStartWatchStream(n) ? (
    // The listen will be sent in onWatchStreamOpen
    __PRIVATE_startWatchStream(n)
  ) : __PRIVATE_ensureWatchStream(n).n_() && __PRIVATE_sendWatchRequest(n, t));
}
function __PRIVATE_remoteStoreUnlisten(e, t) {
  const n = __PRIVATE_debugCast(e), r = __PRIVATE_ensureWatchStream(n);
  n.O_.delete(t), r.n_() && __PRIVATE_sendUnwatchRequest(n, t), 0 === n.O_.size && (r.n_() ? r.s_() : __PRIVATE_canUseNetwork(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function __PRIVATE_sendWatchRequest(e, t) {
  if (e.q_.xe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
    const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(n);
  }
  __PRIVATE_ensureWatchStream(e).d_(t);
}
function __PRIVATE_sendUnwatchRequest(e, t) {
  e.q_.xe(t), __PRIVATE_ensureWatchStream(e).A_(t);
}
function __PRIVATE_startWatchStream(e) {
  e.q_ = new __PRIVATE_WatchChangeAggregator({
    getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
    ot: (t) => e.O_.get(t) || null,
    tt: () => e.datastore.serializer.databaseId
  }), __PRIVATE_ensureWatchStream(e).start(), e.k_.D_();
}
function __PRIVATE_shouldStartWatchStream(e) {
  return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWatchStream(e).t_() && e.O_.size > 0;
}
function __PRIVATE_canUseNetwork(e) {
  return 0 === __PRIVATE_debugCast(e).N_.size;
}
function __PRIVATE_cleanUpWatchStreamState(e) {
  e.q_ = void 0;
}
function __PRIVATE_onWatchStreamConnected(e) {
  return __async(this, null, function* () {
    e.k_.set(
      "Online"
      /* OnlineState.Online */
    );
  });
}
function __PRIVATE_onWatchStreamOpen(e) {
  return __async(this, null, function* () {
    e.O_.forEach((t, n) => {
      __PRIVATE_sendWatchRequest(e, t);
    });
  });
}
function __PRIVATE_onWatchStreamClose(e, t) {
  return __async(this, null, function* () {
    __PRIVATE_cleanUpWatchStreamState(e), // If we still need the watch stream, retry the connection.
    __PRIVATE_shouldStartWatchStream(e) ? (e.k_.F_(t), __PRIVATE_startWatchStream(e)) : (
      // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      e.k_.set(
        "Unknown"
        /* OnlineState.Unknown */
      )
    );
  });
}
function __PRIVATE_onWatchStreamChange(e, t, n) {
  return __async(this, null, function* () {
    if (
      // Mark the client as online since we got a message from the server
      e.k_.set(
        "Online"
        /* OnlineState.Online */
      ), t instanceof __PRIVATE_WatchTargetChange && 2 === t.state && t.cause
    )
      try {
        yield (
          /** Handles an error on a target */
          function __PRIVATE_handleTargetError(e2, t2) {
            return __async(this, null, function* () {
              const n2 = t2.cause;
              for (const r of t2.targetIds)
                e2.O_.has(r) && (yield e2.remoteSyncer.rejectListen(r, n2), e2.O_.delete(r), e2.q_.removeTarget(r));
            });
          }(e, t)
        );
      } catch (n2) {
        __PRIVATE_logDebug("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n2), yield __PRIVATE_disableNetworkUntilRecovery(e, n2);
      }
    else if (t instanceof __PRIVATE_DocumentWatchChange ? e.q_.Ke(t) : t instanceof __PRIVATE_ExistenceFilterChange ? e.q_.He(t) : e.q_.We(t), !n.isEqual(SnapshotVersion.min())) try {
      const t2 = yield __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);
      n.compareTo(t2) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      (yield (
        /**
        * Takes a batch of changes from the Datastore, repackages them as a
        * RemoteEvent, and passes that on to the listener, which is typically the
        * SyncEngine.
        */
        function __PRIVATE_raiseWatchSnapshot(e2, t3) {
          const n2 = e2.q_.rt(t3);
          return n2.targetChanges.forEach((n3, r) => {
            if (n3.resumeToken.approximateByteSize() > 0) {
              const i = e2.O_.get(r);
              i && e2.O_.set(r, i.withResumeToken(n3.resumeToken, t3));
            }
          }), // Re-establish listens for the targets that have been invalidated by
          // existence filter mismatches.
          n2.targetMismatches.forEach((t4, n3) => {
            const r = e2.O_.get(t4);
            if (!r)
              return;
            e2.O_.set(t4, r.withResumeToken(ByteString.EMPTY_BYTE_STRING, r.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
            // deliberately don't send a resume token so that we get a full update.
            __PRIVATE_sendUnwatchRequest(e2, t4);
            const i = new TargetData(r.target, t4, n3, r.sequenceNumber);
            __PRIVATE_sendWatchRequest(e2, i);
          }), e2.remoteSyncer.applyRemoteEvent(n2);
        }(e, n)
      ));
    } catch (t2) {
      __PRIVATE_logDebug("RemoteStore", "Failed to raise snapshot:", t2), yield __PRIVATE_disableNetworkUntilRecovery(e, t2);
    }
  });
}
function __PRIVATE_disableNetworkUntilRecovery(e, t, n) {
  return __async(this, null, function* () {
    if (!__PRIVATE_isIndexedDbTransactionError(t)) throw t;
    e.N_.add(
      1
      /* OfflineCause.IndexedDbFailed */
    ), // Disable network and raise offline snapshots
    yield __PRIVATE_disableNetworkInternal(e), e.k_.set(
      "Offline"
      /* OnlineState.Offline */
    ), n || // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    (n = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)), // Probe IndexedDB periodically and re-enable network
    e.asyncQueue.enqueueRetryable(() => __async(this, null, function* () {
      __PRIVATE_logDebug("RemoteStore", "Retrying IndexedDB access"), yield n(), e.N_.delete(
        1
        /* OfflineCause.IndexedDbFailed */
      ), yield __PRIVATE_enableNetworkInternal(e);
    }));
  });
}
function __PRIVATE_executeWithRecovery(e, t) {
  return t().catch((n) => __PRIVATE_disableNetworkUntilRecovery(e, n, t));
}
function __PRIVATE_fillWritePipeline(e) {
  return __async(this, null, function* () {
    const t = __PRIVATE_debugCast(e), n = __PRIVATE_ensureWriteStream(t);
    let r = t.x_.length > 0 ? t.x_[t.x_.length - 1].batchId : -1;
    for (; __PRIVATE_canAddToWritePipeline(t); ) try {
      const e2 = yield __PRIVATE_localStoreGetNextMutationBatch(t.localStore, r);
      if (null === e2) {
        0 === t.x_.length && n.s_();
        break;
      }
      r = e2.batchId, __PRIVATE_addToWritePipeline(t, e2);
    } catch (e2) {
      yield __PRIVATE_disableNetworkUntilRecovery(t, e2);
    }
    __PRIVATE_shouldStartWriteStream(t) && __PRIVATE_startWriteStream(t);
  });
}
function __PRIVATE_canAddToWritePipeline(e) {
  return __PRIVATE_canUseNetwork(e) && e.x_.length < 10;
}
function __PRIVATE_addToWritePipeline(e, t) {
  e.x_.push(t);
  const n = __PRIVATE_ensureWriteStream(e);
  n.n_() && n.R_ && n.V_(t.mutations);
}
function __PRIVATE_shouldStartWriteStream(e) {
  return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWriteStream(e).t_() && e.x_.length > 0;
}
function __PRIVATE_startWriteStream(e) {
  __PRIVATE_ensureWriteStream(e).start();
}
function __PRIVATE_onWriteStreamOpen(e) {
  return __async(this, null, function* () {
    __PRIVATE_ensureWriteStream(e).g_();
  });
}
function __PRIVATE_onWriteHandshakeComplete(e) {
  return __async(this, null, function* () {
    const t = __PRIVATE_ensureWriteStream(e);
    for (const n of e.x_) t.V_(n.mutations);
  });
}
function __PRIVATE_onMutationResult(e, t, n) {
  return __async(this, null, function* () {
    const r = e.x_.shift(), i = MutationBatchResult.from(r, t, n);
    yield __PRIVATE_executeWithRecovery(e, () => e.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
    // slot has freed up.
    yield __PRIVATE_fillWritePipeline(e);
  });
}
function __PRIVATE_onWriteStreamClose(e, t) {
  return __async(this, null, function* () {
    t && __PRIVATE_ensureWriteStream(e).R_ && // This error affects the actual write.
    (yield function __PRIVATE_handleWriteError(e2, t2) {
      return __async(this, null, function* () {
        if (function __PRIVATE_isPermanentWriteError(e3) {
          return __PRIVATE_isPermanentError(e3) && e3 !== C.ABORTED;
        }(t2.code)) {
          const n = e2.x_.shift();
          __PRIVATE_ensureWriteStream(e2).i_(), yield __PRIVATE_executeWithRecovery(e2, () => e2.remoteSyncer.rejectFailedWrite(n.batchId, t2)), // It's possible that with the completion of this mutation
          // another slot has freed up.
          yield __PRIVATE_fillWritePipeline(e2);
        }
      });
    }(e, t)), // The write stream might have been started by refilling the write
    // pipeline for failed writes
    __PRIVATE_shouldStartWriteStream(e) && __PRIVATE_startWriteStream(e);
  });
}
function __PRIVATE_remoteStoreHandleCredentialChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    n.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("RemoteStore", "RemoteStore received new credentials");
    const r = __PRIVATE_canUseNetwork(n);
    n.N_.add(
      3
      /* OfflineCause.CredentialChange */
    ), yield __PRIVATE_disableNetworkInternal(n), r && // Don't set the network status to Unknown if we are offline.
    n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    ), yield n.remoteSyncer.handleCredentialChange(t), n.N_.delete(
      3
      /* OfflineCause.CredentialChange */
    ), yield __PRIVATE_enableNetworkInternal(n);
  });
}
function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    t ? (n.N_.delete(
      2
      /* OfflineCause.IsSecondary */
    ), yield __PRIVATE_enableNetworkInternal(n)) : t || (n.N_.add(
      2
      /* OfflineCause.IsSecondary */
    ), yield __PRIVATE_disableNetworkInternal(n), n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  });
}
function __PRIVATE_ensureWatchStream(e) {
  return e.Q_ || // Create stream (but note that it is not started yet).
  (e.Q_ = function __PRIVATE_newPersistentWatchStream(e2, t, n) {
    const r = __PRIVATE_debugCast(e2);
    return r.y_(), new __PRIVATE_PersistentListenStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
  }(e.datastore, e.asyncQueue, {
    To: __PRIVATE_onWatchStreamConnected.bind(null, e),
    Ao: __PRIVATE_onWatchStreamOpen.bind(null, e),
    Vo: __PRIVATE_onWatchStreamClose.bind(null, e),
    E_: __PRIVATE_onWatchStreamChange.bind(null, e)
  }), e.L_.push((t) => __async(this, null, function* () {
    t ? (e.Q_.i_(), __PRIVATE_shouldStartWatchStream(e) ? __PRIVATE_startWatchStream(e) : e.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (yield e.Q_.stop(), __PRIVATE_cleanUpWatchStreamState(e));
  }))), e.Q_;
}
function __PRIVATE_ensureWriteStream(e) {
  return e.K_ || // Create stream (but note that it is not started yet).
  (e.K_ = function __PRIVATE_newPersistentWriteStream(e2, t, n) {
    const r = __PRIVATE_debugCast(e2);
    return r.y_(), new __PRIVATE_PersistentWriteStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
  }(e.datastore, e.asyncQueue, {
    To: () => Promise.resolve(),
    Ao: __PRIVATE_onWriteStreamOpen.bind(null, e),
    Vo: __PRIVATE_onWriteStreamClose.bind(null, e),
    m_: __PRIVATE_onWriteHandshakeComplete.bind(null, e),
    f_: __PRIVATE_onMutationResult.bind(null, e)
  }), e.L_.push((t) => __async(this, null, function* () {
    t ? (e.K_.i_(), // This will start the write stream if necessary.
    yield __PRIVATE_fillWritePipeline(e)) : (yield e.K_.stop(), e.x_.length > 0 && (__PRIVATE_logDebug("RemoteStore", `Stopping write stream with ${e.x_.length} pending writes`), e.x_ = []));
  }))), e.K_;
}
var DelayedOperation = class _DelayedOperation {
  constructor(e, t, n, r, i) {
    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((e2) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(e, t, n, r, i) {
    const s = Date.now() + n, o = new _DelayedOperation(e, t, s, r, i);
    return o.start(n), o;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(e) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(C.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
function __PRIVATE_wrapInUserErrorIfRecoverable(e, t) {
  if (__PRIVATE_logError("AsyncQueue", `${t}: ${e}`), __PRIVATE_isIndexedDbTransactionError(e)) return new FirestoreError(C.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
var DocumentSet = class _DocumentSet {
  /** The default ordering is by key if the comparator is omitted */
  constructor(e) {
    this.comparator = e ? (t, n) => e(t, n) || DocumentKey.comparator(t.key, n.key) : (e2, t) => DocumentKey.comparator(e2.key, t.key), this.keyedMap = documentMap(), this.sortedSet = new SortedMap(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(e) {
    return new _DocumentSet(e.comparator);
  }
  has(e) {
    return null != this.keyedMap.get(e);
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(e) {
    this.sortedSet.inorderTraversal((t, n) => (e(t), false));
  }
  /** Inserts or updates a document with the same key */
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  /** Deletes a document with a given key */
  delete(e) {
    const t = this.get(e);
    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
  }
  isEqual(e) {
    if (!(e instanceof _DocumentSet)) return false;
    if (this.size !== e.size) return false;
    const t = this.sortedSet.getIterator(), n = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const e2 = t.getNext().key, r = n.getNext().key;
      if (!e2.isEqual(r)) return false;
    }
    return true;
  }
  toString() {
    const e = [];
    return this.forEach((t) => {
      e.push(t.toString());
    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)";
  }
  copy(e, t) {
    const n = new _DocumentSet();
    return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n;
  }
};
var __PRIVATE_DocumentChangeSet = class {
  constructor() {
    this.U_ = new SortedMap(DocumentKey.comparator);
  }
  track(e) {
    const t = e.doc.key, n = this.U_.get(t);
    n ? (
      // Merge the new change with the existing change.
      0 !== e.type && 3 === n.type ? this.U_ = this.U_.insert(t, e) : 3 === e.type && 1 !== n.type ? this.U_ = this.U_.insert(t, {
        type: n.type,
        doc: e.doc
      }) : 2 === e.type && 2 === n.type ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : 2 === e.type && 0 === n.type ? this.U_ = this.U_.insert(t, {
        type: 0,
        doc: e.doc
      }) : 1 === e.type && 0 === n.type ? this.U_ = this.U_.remove(t) : 1 === e.type && 2 === n.type ? this.U_ = this.U_.insert(t, {
        type: 1,
        doc: n.doc
      }) : 0 === e.type && 1 === n.type ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        fail()
      )
    ) : this.U_ = this.U_.insert(t, e);
  }
  W_() {
    const e = [];
    return this.U_.inorderTraversal((t, n) => {
      e.push(n);
    }), e;
  }
};
var ViewSnapshot = class _ViewSnapshot {
  constructor(e, t, n, r, i, s, o, _, a) {
    this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = s, this.syncStateChanged = o, this.excludesMetadataChanges = _, this.hasCachedResults = a;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(e, t, n, r, i) {
    const s = [];
    return t.forEach((e2) => {
      s.push({
        type: 0,
        doc: e2
      });
    }), new _ViewSnapshot(
      e,
      t,
      DocumentSet.emptySet(t),
      s,
      n,
      r,
      /* syncStateChanged= */
      true,
      /* excludesMetadataChanges= */
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && __PRIVATE_queryEquals(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return false;
    const t = this.docChanges, n = e.docChanges;
    if (t.length !== n.length) return false;
    for (let e2 = 0; e2 < t.length; e2++) if (t[e2].type !== n[e2].type || !t[e2].doc.isEqual(n[e2].doc)) return false;
    return true;
  }
};
var __PRIVATE_QueryListenersInfo = class {
  constructor() {
    this.G_ = void 0, this.z_ = [];
  }
  // Helper methods that checks if the query has listeners that listening to remote store
  j_() {
    return this.z_.some((e) => e.H_());
  }
};
var __PRIVATE_EventManagerImpl = class {
  constructor() {
    this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.J_ = /* @__PURE__ */ new Set();
  }
  terminate() {
    !function __PRIVATE_errorAllTargets(e, t) {
      const n = __PRIVATE_debugCast(e), r = n.queries;
      n.queries = __PRIVATE_newQueriesObjectMap(), r.forEach((e2, n2) => {
        for (const e3 of n2.z_) e3.onError(t);
      });
    }(this, new FirestoreError(C.ABORTED, "Firestore shutting down"));
  }
};
function __PRIVATE_newQueriesObjectMap() {
  return new ObjectMap((e) => __PRIVATE_canonifyQuery(e), __PRIVATE_queryEquals);
}
function __PRIVATE_eventManagerListen(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    let r = 3;
    const i = t.query;
    let s = n.queries.get(i);
    s ? !s.j_() && t.H_() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
    (r = 2) : (s = new __PRIVATE_QueryListenersInfo(), r = t.H_() ? 0 : 1);
    try {
      switch (r) {
        case 0:
          s.G_ = yield n.onListen(
            i,
            /** enableRemoteListen= */
            true
          );
          break;
        case 1:
          s.G_ = yield n.onListen(
            i,
            /** enableRemoteListen= */
            false
          );
          break;
        case 2:
          yield n.onFirstRemoteStoreListen(i);
      }
    } catch (e2) {
      const n2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, `Initialization of query '${__PRIVATE_stringifyQuery(t.query)}' failed`);
      return void t.onError(n2);
    }
    if (n.queries.set(i, s), s.z_.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
    t.Y_(n.onlineState), s.G_) {
      t.Z_(s.G_) && __PRIVATE_raiseSnapshotsInSyncEvent(n);
    }
  });
}
function __PRIVATE_eventManagerUnlisten(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = t.query;
    let i = 3;
    const s = n.queries.get(r);
    if (s) {
      const e2 = s.z_.indexOf(t);
      e2 >= 0 && (s.z_.splice(e2, 1), 0 === s.z_.length ? i = t.H_() ? 0 : 1 : !s.j_() && t.H_() && // The removed listener is the last one that sourced from watch.
      (i = 2));
    }
    switch (i) {
      case 0:
        return n.queries.delete(r), n.onUnlisten(
          r,
          /** disableRemoteListen= */
          true
        );
      case 1:
        return n.queries.delete(r), n.onUnlisten(
          r,
          /** disableRemoteListen= */
          false
        );
      case 2:
        return n.onLastRemoteStoreUnlisten(r);
      default:
        return;
    }
  });
}
function __PRIVATE_eventManagerOnWatchChange(e, t) {
  const n = __PRIVATE_debugCast(e);
  let r = false;
  for (const e2 of t) {
    const t2 = e2.query, i = n.queries.get(t2);
    if (i) {
      for (const t3 of i.z_) t3.Z_(e2) && (r = true);
      i.G_ = e2;
    }
  }
  r && __PRIVATE_raiseSnapshotsInSyncEvent(n);
}
function __PRIVATE_eventManagerOnWatchError(e, t, n) {
  const r = __PRIVATE_debugCast(e), i = r.queries.get(t);
  if (i) for (const e2 of i.z_) e2.onError(n);
  r.queries.delete(t);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
  e.J_.forEach((e2) => {
    e2.next();
  });
}
var pe;
var ye;
(ye = pe || (pe = {})).X_ = "default", /** Listen to changes in cache only */
ye.Cache = "cache";
var __PRIVATE_QueryListener = class {
  constructor(e, t, n) {
    this.query = e, this.ea = t, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.ta = false, this.na = null, this.onlineState = "Unknown", this.options = n || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  Z_(e) {
    if (!this.options.includeMetadataChanges) {
      const t2 = [];
      for (const n of e.docChanges) 3 !== n.type && t2.push(n);
      e = new ViewSnapshot(
        e.query,
        e.docs,
        e.oldDocs,
        t2,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        /* excludesMetadataChanges= */
        true,
        e.hasCachedResults
      );
    }
    let t = false;
    return this.ta ? this.ra(e) && (this.ea.next(e), t = true) : this.ia(e, this.onlineState) && (this.sa(e), t = true), this.na = e, t;
  }
  onError(e) {
    this.ea.error(e);
  }
  /** Returns whether a snapshot was raised. */
  Y_(e) {
    this.onlineState = e;
    let t = false;
    return this.na && !this.ta && this.ia(this.na, e) && (this.sa(this.na), t = true), t;
  }
  ia(e, t) {
    if (!e.fromCache) return true;
    if (!this.H_()) return true;
    const n = "Offline" !== t;
    return (!this.options.oa || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t);
  }
  ra(e) {
    if (e.docChanges.length > 0) return true;
    const t = this.na && this.na.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !t) && true === this.options.includeMetadataChanges;
  }
  sa(e) {
    e = ViewSnapshot.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.ta = true, this.ea.next(e);
  }
  H_() {
    return this.options.source !== pe.Cache;
  }
};
var __PRIVATE_SizedBundleElement = class {
  constructor(e, t) {
    this._a = e, this.byteLength = t;
  }
  aa() {
    return "metadata" in this._a;
  }
};
var __PRIVATE_BundleConverterImpl = class {
  constructor(e) {
    this.serializer = e;
  }
  Ts(e) {
    return fromName(this.serializer, e);
  }
  /**
   * Converts a BundleDocument to a MutableDocument.
   */
  Es(e) {
    return e.metadata.exists ? __PRIVATE_fromDocument(this.serializer, e.document, false) : MutableDocument.newNoDocument(this.Ts(e.metadata.name), this.ds(e.metadata.readTime));
  }
  ds(e) {
    return __PRIVATE_fromVersion(e);
  }
};
var __PRIVATE_BundleLoader = class {
  constructor(e, t, n) {
    this.ua = e, this.localStore = t, this.serializer = n, /** Batched queries to be saved into storage */
    this.queries = [], /** Batched documents to be saved into storage */
    this.documents = [], /** The collection groups affected by this bundle. */
    this.collectionGroups = /* @__PURE__ */ new Set(), this.progress = __PRIVATE_bundleInitialProgress(e);
  }
  /**
   * Adds an element from the bundle to the loader.
   *
   * Returns a new progress if adding the element leads to a new progress,
   * otherwise returns null.
   */
  ca(e) {
    this.progress.bytesLoaded += e.byteLength;
    let t = this.progress.documentsLoaded;
    if (e._a.namedQuery) this.queries.push(e._a.namedQuery);
    else if (e._a.documentMetadata) {
      this.documents.push({
        metadata: e._a.documentMetadata
      }), e._a.documentMetadata.exists || ++t;
      const n = ResourcePath.fromString(e._a.documentMetadata.name);
      this.collectionGroups.add(n.get(n.length - 2));
    } else e._a.document && (this.documents[this.documents.length - 1].document = e._a.document, ++t);
    return t !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = t, Object.assign({}, this.progress)) : null;
  }
  la(e) {
    const t = /* @__PURE__ */ new Map(), n = new __PRIVATE_BundleConverterImpl(this.serializer);
    for (const r of e) if (r.metadata.queries) {
      const e2 = n.Ts(r.metadata.name);
      for (const n2 of r.metadata.queries) {
        const r2 = (t.get(n2) || __PRIVATE_documentKeySet()).add(e2);
        t.set(n2, r2);
      }
    }
    return t;
  }
  /**
   * Update the progress to 'Success' and return the updated progress.
   */
  complete() {
    return __async(this, null, function* () {
      const e = yield __PRIVATE_localStoreApplyBundledDocuments(this.localStore, new __PRIVATE_BundleConverterImpl(this.serializer), this.documents, this.ua.id), t = this.la(this.documents);
      for (const e2 of this.queries) yield __PRIVATE_localStoreSaveNamedQuery(this.localStore, e2, t.get(e2.name));
      return this.progress.taskState = "Success", {
        progress: this.progress,
        ha: this.collectionGroups,
        Pa: e
      };
    });
  }
};
function __PRIVATE_bundleInitialProgress(e) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: e.totalDocuments,
    totalBytes: e.totalBytes
  };
}
var __PRIVATE_AddedLimboDocument = class {
  constructor(e) {
    this.key = e;
  }
};
var __PRIVATE_RemovedLimboDocument = class {
  constructor(e) {
    this.key = e;
  }
};
var __PRIVATE_View = class {
  constructor(e, t) {
    this.query = e, this.Ia = t, this.Ta = null, this.hasCachedResults = false, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = false, /** Documents in the view but not in the remote target */
    this.Ea = __PRIVATE_documentKeySet(), /** Document Keys that have local changes */
    this.mutatedKeys = __PRIVATE_documentKeySet(), this.da = __PRIVATE_newQueryComparator(e), this.Aa = new DocumentSet(this.da);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get Ra() {
    return this.Ia;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  Va(e, t) {
    const n = t ? t.ma : new __PRIVATE_DocumentChangeSet(), r = t ? t.Aa : this.Aa;
    let i = t ? t.mutatedKeys : this.mutatedKeys, s = r, o = false;
    const _ = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null, a = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
    if (e.inorderTraversal((e2, t2) => {
      const u = r.get(e2), c = __PRIVATE_queryMatches(this.query, t2) ? t2 : null, l = !!u && this.mutatedKeys.has(u.key), h = !!c && (c.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(c.key) && c.hasCommittedMutations);
      let P = false;
      if (u && c) {
        u.data.isEqual(c.data) ? l !== h && (n.track({
          type: 3,
          doc: c
        }), P = true) : this.fa(u, c) || (n.track({
          type: 2,
          doc: c
        }), P = true, (_ && this.da(c, _) > 0 || a && this.da(c, a) < 0) && // This doc moved from inside the limit to outside the limit.
        // That means there may be some other doc in the local cache
        // that should be included instead.
        (o = true));
      } else !u && c ? (n.track({
        type: 0,
        doc: c
      }), P = true) : u && !c && (n.track({
        type: 1,
        doc: u
      }), P = true, (_ || a) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (o = true));
      P && (c ? (s = s.add(c), i = h ? i.add(e2) : i.delete(e2)) : (s = s.delete(e2), i = i.delete(e2)));
    }), null !== this.query.limit) for (; s.size > this.query.limit; ) {
      const e2 = "F" === this.query.limitType ? s.last() : s.first();
      s = s.delete(e2.key), i = i.delete(e2.key), n.track({
        type: 1,
        doc: e2
      });
    }
    return {
      Aa: s,
      ma: n,
      ts: o,
      mutatedKeys: i
    };
  }
  fa(e, t) {
    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(e, t, n, r) {
    const i = this.Aa;
    this.Aa = e.Aa, this.mutatedKeys = e.mutatedKeys;
    const s = e.ma.W_();
    s.sort((e2, t2) => function __PRIVATE_compareChangeType(e3, t3) {
      const order = (e4) => {
        switch (e4) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return fail();
        }
      };
      return order(e3) - order(t3);
    }(e2.type, t2.type) || this.da(e2.doc, t2.doc)), this.ga(n), r = null != r && r;
    const o = t && !r ? this.pa() : [], _ = 0 === this.Ea.size && this.current && !r ? 1 : 0, a = _ !== this.Ta;
    if (this.Ta = _, 0 !== s.length || a) {
      return {
        snapshot: new ViewSnapshot(
          this.query,
          e.Aa,
          i,
          s,
          e.mutatedKeys,
          0 === _,
          a,
          /* excludesMetadataChanges= */
          false,
          !!n && n.resumeToken.approximateByteSize() > 0
        ),
        ya: o
      };
    }
    return {
      ya: o
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Y_(e) {
    return this.current && "Offline" === e ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = false, this.applyChanges(
        {
          Aa: this.Aa,
          ma: new __PRIVATE_DocumentChangeSet(),
          mutatedKeys: this.mutatedKeys,
          ts: false
        },
        /* limboResolutionEnabled= */
        false
      ))
    ) : {
      ya: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  wa(e) {
    return !this.Ia.has(e) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.Aa.has(e) && !this.Aa.get(e).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  ga(e) {
    e && (e.addedDocuments.forEach((e2) => this.Ia = this.Ia.add(e2)), e.modifiedDocuments.forEach((e2) => {
    }), e.removedDocuments.forEach((e2) => this.Ia = this.Ia.delete(e2)), this.current = e.current);
  }
  pa() {
    if (!this.current) return [];
    const e = this.Ea;
    this.Ea = __PRIVATE_documentKeySet(), this.Aa.forEach((e2) => {
      this.wa(e2.key) && (this.Ea = this.Ea.add(e2.key));
    });
    const t = [];
    return e.forEach((e2) => {
      this.Ea.has(e2) || t.push(new __PRIVATE_RemovedLimboDocument(e2));
    }), this.Ea.forEach((n) => {
      e.has(n) || t.push(new __PRIVATE_AddedLimboDocument(n));
    }), t;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  Sa(e) {
    this.Ia = e.Is, this.Ea = __PRIVATE_documentKeySet();
    const t = this.Va(e.documents);
    return this.applyChanges(
      t,
      /* limboResolutionEnabled= */
      true
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  ba() {
    return ViewSnapshot.fromInitialDocuments(this.query, this.Aa, this.mutatedKeys, 0 === this.Ta, this.hasCachedResults);
  }
};
var __PRIVATE_QueryView = class {
  constructor(e, t, n) {
    this.query = e, this.targetId = t, this.view = n;
  }
};
var LimboResolution = class {
  constructor(e) {
    this.key = e, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.Da = false;
  }
};
var __PRIVATE_SyncEngineImpl = class {
  constructor(e, t, n, r, i, s) {
    this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = s, this.Ca = {}, this.va = new ObjectMap((e2) => __PRIVATE_canonifyQuery(e2), __PRIVATE_queryEquals), this.Fa = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.Ma = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.xa = new SortedMap(DocumentKey.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Oa = /* @__PURE__ */ new Map(), this.Na = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.La = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Ba = /* @__PURE__ */ new Map(), this.ka = __PRIVATE_TargetIdGenerator.Bn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.qa = void 0;
  }
  get isPrimaryClient() {
    return true === this.qa;
  }
};
function __PRIVATE_syncEngineListen(e, t, n = true) {
  return __async(this, null, function* () {
    const r = __PRIVATE_ensureWatchCallbacks(e);
    let i;
    const s = r.va.get(t);
    return s ? (
      // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
      // already exists when EventManager calls us for the first time. This
      // happens when the primary tab is already listening to this query on
      // behalf of another tab and the user of the primary also starts listening
      // to the query. EventManager will not have an assigned target ID in this
      // case and calls `listen` to obtain this ID.
      (r.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.ba())
    ) : i = yield __PRIVATE_allocateTargetAndMaybeListen(
      r,
      t,
      n,
      /** shouldInitializeView= */
      true
    ), i;
  });
}
function __PRIVATE_triggerRemoteStoreListen(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_ensureWatchCallbacks(e);
    yield __PRIVATE_allocateTargetAndMaybeListen(
      n,
      t,
      /** shouldListenToRemote= */
      true,
      /** shouldInitializeView= */
      false
    );
  });
}
function __PRIVATE_allocateTargetAndMaybeListen(e, t, n, r) {
  return __async(this, null, function* () {
    const i = yield __PRIVATE_localStoreAllocateTarget(e.localStore, __PRIVATE_queryToTarget(t)), s = i.targetId, o = n ? e.sharedClientState.addLocalQueryTarget(s) : "not-current";
    let _;
    return r && (_ = yield __PRIVATE_initializeViewAndComputeSnapshot(e, t, s, "current" === o, i.resumeToken)), e.isPrimaryClient && n && __PRIVATE_remoteStoreListen(e.remoteStore, i), _;
  });
}
function __PRIVATE_initializeViewAndComputeSnapshot(e, t, n, r, i) {
  return __async(this, null, function* () {
    e.Qa = (t2, n2, r2) => function __PRIVATE_applyDocChanges(e2, t3, n3, r3) {
      return __async(this, null, function* () {
        let i2 = t3.view.Va(n3);
        i2.ts && // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        (i2 = yield __PRIVATE_localStoreExecuteQuery(
          e2.localStore,
          t3.query,
          /* usePreviousResults= */
          false
        ).then(({
          documents: e3
        }) => t3.view.Va(e3, i2)));
        const s2 = r3 && r3.targetChanges.get(t3.targetId), o2 = r3 && null != r3.targetMismatches.get(t3.targetId), _2 = t3.view.applyChanges(
          i2,
          /* limboResolutionEnabled= */
          e2.isPrimaryClient,
          s2,
          o2
        );
        return __PRIVATE_updateTrackedLimbos(e2, t3.targetId, _2.ya), _2.snapshot;
      });
    }(e, t2, n2, r2);
    const s = yield __PRIVATE_localStoreExecuteQuery(
      e.localStore,
      t,
      /* usePreviousResults= */
      true
    ), o = new __PRIVATE_View(t, s.Is), _ = o.Va(s.documents), a = TargetChange.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i), u = o.applyChanges(
      _,
      /* limboResolutionEnabled= */
      e.isPrimaryClient,
      a
    );
    __PRIVATE_updateTrackedLimbos(e, n, u.ya);
    const c = new __PRIVATE_QueryView(t, n, o);
    return e.va.set(t, c), e.Fa.has(n) ? e.Fa.get(n).push(t) : e.Fa.set(n, [t]), u.snapshot;
  });
}
function __PRIVATE_syncEngineUnlisten(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = r.va.get(t), s = r.Fa.get(i.targetId);
    if (s.length > 1) return r.Fa.set(i.targetId, s.filter((e2) => !__PRIVATE_queryEquals(e2, t))), void r.va.delete(t);
    if (r.isPrimaryClient) {
      r.sharedClientState.removeLocalQueryTarget(i.targetId);
      r.sharedClientState.isActiveQueryTarget(i.targetId) || (yield __PRIVATE_localStoreReleaseTarget(
        r.localStore,
        i.targetId,
        /*keepPersistedTargetData=*/
        false
      ).then(() => {
        r.sharedClientState.clearQueryState(i.targetId), n && __PRIVATE_remoteStoreUnlisten(r.remoteStore, i.targetId), __PRIVATE_removeAndCleanupTarget(r, i.targetId);
      }).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss));
    } else __PRIVATE_removeAndCleanupTarget(r, i.targetId), yield __PRIVATE_localStoreReleaseTarget(
      r.localStore,
      i.targetId,
      /*keepPersistedTargetData=*/
      true
    );
  });
}
function __PRIVATE_triggerRemoteStoreUnlisten(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = n.va.get(t), i = n.Fa.get(r.targetId);
    n.isPrimaryClient && 1 === i.length && // PORTING NOTE: Unregister the target ID with local Firestore client as
    // watch target.
    (n.sharedClientState.removeLocalQueryTarget(r.targetId), __PRIVATE_remoteStoreUnlisten(n.remoteStore, r.targetId));
  });
}
function __PRIVATE_syncEngineWrite(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_syncEngineEnsureWriteCallbacks(e);
    try {
      const e2 = yield function __PRIVATE_localStoreWriteLocally(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3), r2 = Timestamp.now(), i = t2.reduce((e4, t3) => e4.add(t3.key), __PRIVATE_documentKeySet());
        let s, o;
        return n2.persistence.runTransaction("Locally write mutations", "readwrite", (e4) => {
          let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
          return n2.us.getEntries(e4, i).next((e5) => {
            _ = e5, _.forEach((e6, t3) => {
              t3.isValidDocument() || (a = a.add(e6));
            });
          }).next(() => n2.localDocuments.getOverlayedDocuments(e4, _)).next((i2) => {
            s = i2;
            const o2 = [];
            for (const e5 of t2) {
              const t3 = __PRIVATE_mutationExtractBaseValue(e5, s.get(e5.key).overlayedDocument);
              null != t3 && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              o2.push(new __PRIVATE_PatchMutation(e5.key, t3, __PRIVATE_extractFieldMask(t3.value.mapValue), Precondition.exists(true)));
            }
            return n2.mutationQueue.addMutationBatch(e4, r2, o2, t2);
          }).next((t3) => {
            o = t3;
            const r3 = t3.applyToLocalDocumentSet(s, a);
            return n2.documentOverlayCache.saveOverlays(e4, t3.batchId, r3);
          });
        }).then(() => ({
          batchId: o.batchId,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(s)
        }));
      }(r.localStore, t);
      r.sharedClientState.addPendingMutation(e2.batchId), function __PRIVATE_addMutationCallback(e3, t2, n2) {
        let r2 = e3.La[e3.currentUser.toKey()];
        r2 || (r2 = new SortedMap(__PRIVATE_primitiveComparator));
        r2 = r2.insert(t2, n2), e3.La[e3.currentUser.toKey()] = r2;
      }(r, e2.batchId, n), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e2.changes), yield __PRIVATE_fillWritePipeline(r.remoteStore);
    } catch (e2) {
      const t2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, "Failed to persist write");
      n.reject(t2);
    }
  });
}
function __PRIVATE_syncEngineApplyRemoteEvent(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    try {
      const e2 = yield __PRIVATE_localStoreApplyRemoteEventToLocalCache(n.localStore, t);
      t.targetChanges.forEach((e3, t2) => {
        const r = n.Oa.get(t2);
        r && // Since this is a limbo resolution lookup, it's for a single document
        // and it could be added, modified, or removed, but not a combination.
        (__PRIVATE_hardAssert(e3.addedDocuments.size + e3.modifiedDocuments.size + e3.removedDocuments.size <= 1), e3.addedDocuments.size > 0 ? r.Da = true : e3.modifiedDocuments.size > 0 ? __PRIVATE_hardAssert(r.Da) : e3.removedDocuments.size > 0 && (__PRIVATE_hardAssert(r.Da), r.Da = false));
      }), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2, t);
    } catch (e2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
    }
  });
}
function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
    const e2 = [];
    r.va.forEach((n2, r2) => {
      const i = r2.view.Y_(t);
      i.snapshot && e2.push(i.snapshot);
    }), function __PRIVATE_eventManagerOnOnlineStateChange(e3, t2) {
      const n2 = __PRIVATE_debugCast(e3);
      n2.onlineState = t2;
      let r2 = false;
      n2.queries.forEach((e4, n3) => {
        for (const e5 of n3.z_)
          e5.Y_(t2) && (r2 = true);
      }), r2 && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
    }(r.eventManager, t), e2.length && r.Ca.E_(e2), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
function __PRIVATE_syncEngineRejectListen(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e);
    r.sharedClientState.updateQueryState(t, "rejected", n);
    const i = r.Oa.get(t), s = i && i.key;
    if (s) {
      let e2 = new SortedMap(DocumentKey.comparator);
      e2 = e2.insert(s, MutableDocument.newNoDocument(s, SnapshotVersion.min()));
      const n2 = __PRIVATE_documentKeySet().add(s), i2 = new RemoteEvent(
        SnapshotVersion.min(),
        /* targetChanges= */
        /* @__PURE__ */ new Map(),
        /* targetMismatches= */
        new SortedMap(__PRIVATE_primitiveComparator),
        e2,
        n2
      );
      yield __PRIVATE_syncEngineApplyRemoteEvent(r, i2), // Since this query failed, we won't want to manually unlisten to it.
      // We only remove it from bookkeeping after we successfully applied the
      // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
      // this query when the RemoteStore restarts the Watch stream, which should
      // re-trigger the target failure.
      r.xa = r.xa.remove(s), r.Oa.delete(t), __PRIVATE_pumpEnqueuedLimboResolutions(r);
    } else yield __PRIVATE_localStoreReleaseTarget(
      r.localStore,
      t,
      /* keepPersistedTargetData */
      false
    ).then(() => __PRIVATE_removeAndCleanupTarget(r, t, n)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
  });
}
function __PRIVATE_syncEngineApplySuccessfulWrite(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = t.batch.batchId;
    try {
      const e2 = yield __PRIVATE_localStoreAcknowledgeBatch(n.localStore, t);
      __PRIVATE_processUserCallback(
        n,
        r,
        /*error=*/
        null
      ), __PRIVATE_triggerPendingWritesCallbacks(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2);
    } catch (e2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
    }
  });
}
function __PRIVATE_syncEngineRejectFailedWrite(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e);
    try {
      const e2 = yield function __PRIVATE_localStoreRejectBatch(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3);
        return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (e4) => {
          let r2;
          return n2.mutationQueue.lookupMutationBatch(e4, t2).next((t3) => (__PRIVATE_hardAssert(null !== t3), r2 = t3.keys(), n2.mutationQueue.removeMutationBatch(e4, t3))).next(() => n2.mutationQueue.performConsistencyCheck(e4)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(e4, r2, t2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e4, r2)).next(() => n2.localDocuments.getDocuments(e4, r2));
        });
      }(r.localStore, t);
      __PRIVATE_processUserCallback(r, t, n), __PRIVATE_triggerPendingWritesCallbacks(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e2);
    } catch (n2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(n2);
    }
  });
}
function __PRIVATE_syncEngineRegisterPendingWritesCallback(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    __PRIVATE_canUseNetwork(n.remoteStore) || __PRIVATE_logDebug("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
      const e2 = yield function __PRIVATE_localStoreGetHighestUnacknowledgedBatchId(e3) {
        const t2 = __PRIVATE_debugCast(e3);
        return t2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (e4) => t2.mutationQueue.getHighestUnacknowledgedBatchId(e4));
      }(n.localStore);
      if (-1 === e2)
        return void t.resolve();
      const r = n.Ba.get(e2) || [];
      r.push(t), n.Ba.set(e2, r);
    } catch (e2) {
      const n2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, "Initialization of waitForPendingWrites() operation failed");
      t.reject(n2);
    }
  });
}
function __PRIVATE_triggerPendingWritesCallbacks(e, t) {
  (e.Ba.get(t) || []).forEach((e2) => {
    e2.resolve();
  }), e.Ba.delete(t);
}
function __PRIVATE_processUserCallback(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  let i = r.La[r.currentUser.toKey()];
  if (i) {
    const e2 = i.get(t);
    e2 && (n ? e2.reject(n) : e2.resolve(), i = i.remove(t)), r.La[r.currentUser.toKey()] = i;
  }
}
function __PRIVATE_removeAndCleanupTarget(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (const r of e.Fa.get(t)) e.va.delete(r), n && e.Ca.Ka(r, n);
  if (e.Fa.delete(t), e.isPrimaryClient) {
    e.Na.mr(t).forEach((t2) => {
      e.Na.containsKey(t2) || // We removed the last reference for this key
      __PRIVATE_removeLimboTarget(e, t2);
    });
  }
}
function __PRIVATE_removeLimboTarget(e, t) {
  e.Ma.delete(t.path.canonicalString());
  const n = e.xa.get(t);
  null !== n && (__PRIVATE_remoteStoreUnlisten(e.remoteStore, n), e.xa = e.xa.remove(t), e.Oa.delete(n), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
function __PRIVATE_updateTrackedLimbos(e, t, n) {
  for (const r of n) if (r instanceof __PRIVATE_AddedLimboDocument) e.Na.addReference(r.key, t), __PRIVATE_trackLimboChange(e, r);
  else if (r instanceof __PRIVATE_RemovedLimboDocument) {
    __PRIVATE_logDebug("SyncEngine", "Document no longer in limbo: " + r.key), e.Na.removeReference(r.key, t);
    e.Na.containsKey(r.key) || // We removed the last reference for this key
    __PRIVATE_removeLimboTarget(e, r.key);
  } else fail();
}
function __PRIVATE_trackLimboChange(e, t) {
  const n = t.key, r = n.path.canonicalString();
  e.xa.get(n) || e.Ma.has(r) || (__PRIVATE_logDebug("SyncEngine", "New document in limbo: " + n), e.Ma.add(r), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
function __PRIVATE_pumpEnqueuedLimboResolutions(e) {
  for (; e.Ma.size > 0 && e.xa.size < e.maxConcurrentLimboResolutions; ) {
    const t = e.Ma.values().next().value;
    e.Ma.delete(t);
    const n = new DocumentKey(ResourcePath.fromString(t)), r = e.ka.next();
    e.Oa.set(r, new LimboResolution(n)), e.xa = e.xa.insert(n, r), __PRIVATE_remoteStoreListen(e.remoteStore, new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(n.path)), r, "TargetPurposeLimboResolution", __PRIVATE_ListenSequence.oe));
  }
}
function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = [], s = [], o = [];
    r.va.isEmpty() || (r.va.forEach((e2, _) => {
      o.push(r.Qa(_, t, n).then((e3) => {
        var t2;
        if ((e3 || n) && r.isPrimaryClient) {
          const i2 = e3 ? !e3.fromCache : null === (t2 = null == n ? void 0 : n.targetChanges.get(_.targetId)) || void 0 === t2 ? void 0 : t2.current;
          r.sharedClientState.updateQueryState(_.targetId, i2 ? "current" : "not-current");
        }
        if (e3) {
          i.push(e3);
          const t3 = __PRIVATE_LocalViewChanges.Ui(_.targetId, e3);
          s.push(t3);
        }
      }));
    }), yield Promise.all(o), r.Ca.E_(i), yield function __PRIVATE_localStoreNotifyLocalViewChanges(e2, t2) {
      return __async(this, null, function* () {
        const n2 = __PRIVATE_debugCast(e2);
        try {
          yield n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e3) => PersistencePromise.forEach(t2, (t3) => PersistencePromise.forEach(t3.Ki, (r2) => n2.persistence.referenceDelegate.addReference(e3, t3.targetId, r2)).next(() => PersistencePromise.forEach(t3.$i, (r2) => n2.persistence.referenceDelegate.removeReference(e3, t3.targetId, r2)))));
        } catch (e3) {
          if (!__PRIVATE_isIndexedDbTransactionError(e3)) throw e3;
          __PRIVATE_logDebug("LocalStore", "Failed to update sequence numbers: " + e3);
        }
        for (const e3 of t2) {
          const t3 = e3.targetId;
          if (!e3.fromCache) {
            const e4 = n2.ss.get(t3), r2 = e4.snapshotVersion, i2 = e4.withLastLimboFreeSnapshotVersion(r2);
            n2.ss = n2.ss.insert(t3, i2);
          }
        }
      });
    }(r.localStore, s));
  });
}
function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    if (!n.currentUser.isEqual(t)) {
      __PRIVATE_logDebug("SyncEngine", "User change. New user:", t.toKey());
      const e2 = yield __PRIVATE_localStoreHandleUserChange(n.localStore, t);
      n.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
      function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e3, t2) {
        e3.Ba.forEach((e4) => {
          e4.forEach((e5) => {
            e5.reject(new FirestoreError(C.CANCELLED, t2));
          });
        }), e3.Ba.clear();
      }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
      n.sharedClientState.handleUserChange(t, e2.removedBatchIds, e2.addedBatchIds), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2.ls);
    }
  });
}
function __PRIVATE_syncEngineGetRemoteKeysForTarget(e, t) {
  const n = __PRIVATE_debugCast(e), r = n.Oa.get(t);
  if (r && r.Da) return __PRIVATE_documentKeySet().add(r.key);
  {
    let e2 = __PRIVATE_documentKeySet();
    const r2 = n.Fa.get(t);
    if (!r2) return e2;
    for (const t2 of r2) {
      const r3 = n.va.get(t2);
      e2 = e2.unionWith(r3.view.Ra);
    }
    return e2;
  }
}
function __PRIVATE_synchronizeViewAndComputeSnapshot(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = yield __PRIVATE_localStoreExecuteQuery(
      n.localStore,
      t.query,
      /* usePreviousResults= */
      true
    ), i = t.view.Sa(r);
    return n.isPrimaryClient && __PRIVATE_updateTrackedLimbos(n, t.targetId, i.ya), i;
  });
}
function __PRIVATE_syncEngineSynchronizeWithChangedDocuments(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    return __PRIVATE_localStoreGetNewDocumentChanges(n.localStore, t).then((e2) => __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2));
  });
}
function __PRIVATE_syncEngineApplyBatchState(e, t, n, r) {
  return __async(this, null, function* () {
    const i = __PRIVATE_debugCast(e), s = yield function __PRIVATE_localStoreLookupMutationDocuments(e2, t2) {
      const n2 = __PRIVATE_debugCast(e2), r2 = __PRIVATE_debugCast(n2.mutationQueue);
      return n2.persistence.runTransaction("Lookup mutation documents", "readonly", (e3) => r2.Fn(e3, t2).next((t3) => t3 ? n2.localDocuments.getDocuments(e3, t3) : PersistencePromise.resolve(null)));
    }(i.localStore, t);
    null !== s ? ("pending" === n ? (
      // If we are the primary client, we need to send this write to the
      // backend. Secondary clients will ignore these writes since their remote
      // connection is disabled.
      yield __PRIVATE_fillWritePipeline(i.remoteStore)
    ) : "acknowledged" === n || "rejected" === n ? (
      // NOTE: Both these methods are no-ops for batches that originated from
      // other clients.
      (__PRIVATE_processUserCallback(i, t, r || null), __PRIVATE_triggerPendingWritesCallbacks(i, t), function __PRIVATE_localStoreRemoveCachedMutationBatchMetadata(e2, t2) {
        __PRIVATE_debugCast(__PRIVATE_debugCast(e2).mutationQueue).xn(t2);
      }(i.localStore, t))
    ) : fail(), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(i, s)) : (
      // A throttled tab may not have seen the mutation before it was completed
      // and removed from the mutation queue, in which case we won't have cached
      // the affected documents. In this case we can safely ignore the update
      // since that means we didn't apply the mutation locally at all (if we
      // had, we would have cached the affected documents), and so we will just
      // see any resulting document changes via normal remote document updates
      // as applicable.
      __PRIVATE_logDebug("SyncEngine", "Cannot apply mutation batch with id: " + t)
    );
  });
}
function __PRIVATE_syncEngineApplyPrimaryState(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    if (__PRIVATE_ensureWatchCallbacks(n), __PRIVATE_syncEngineEnsureWriteCallbacks(n), true === t && true !== n.qa) {
      const e2 = n.sharedClientState.getAllActiveQueryTargets(), t2 = yield __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(n, e2.toArray());
      n.qa = true, yield __PRIVATE_remoteStoreApplyPrimaryState(n.remoteStore, true);
      for (const e3 of t2) __PRIVATE_remoteStoreListen(n.remoteStore, e3);
    } else if (false === t && false !== n.qa) {
      const e2 = [];
      let t2 = Promise.resolve();
      n.Fa.forEach((r, i) => {
        n.sharedClientState.isLocalQueryTarget(i) ? e2.push(i) : t2 = t2.then(() => (__PRIVATE_removeAndCleanupTarget(n, i), __PRIVATE_localStoreReleaseTarget(
          n.localStore,
          i,
          /*keepPersistedTargetData=*/
          true
        ))), __PRIVATE_remoteStoreUnlisten(n.remoteStore, i);
      }), yield t2, yield __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(n, e2), // PORTING NOTE: Multi-Tab only.
      function __PRIVATE_resetLimboDocuments(e3) {
        const t3 = __PRIVATE_debugCast(e3);
        t3.Oa.forEach((e4, n2) => {
          __PRIVATE_remoteStoreUnlisten(t3.remoteStore, n2);
        }), t3.Na.gr(), t3.Oa = /* @__PURE__ */ new Map(), t3.xa = new SortedMap(DocumentKey.comparator);
      }(n), n.qa = false, yield __PRIVATE_remoteStoreApplyPrimaryState(n.remoteStore, false);
    }
  });
}
function __PRIVATE_synchronizeQueryViewsAndRaiseSnapshots(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = [], s = [];
    for (const e2 of t) {
      let t2;
      const n2 = r.Fa.get(e2);
      if (n2 && 0 !== n2.length) {
        t2 = yield __PRIVATE_localStoreAllocateTarget(r.localStore, __PRIVATE_queryToTarget(n2[0]));
        for (const e3 of n2) {
          const t3 = r.va.get(e3), n3 = yield __PRIVATE_synchronizeViewAndComputeSnapshot(r, t3);
          n3.snapshot && s.push(n3.snapshot);
        }
      } else {
        const n3 = yield __PRIVATE_localStoreGetCachedTarget(r.localStore, e2);
        t2 = yield __PRIVATE_localStoreAllocateTarget(r.localStore, n3), yield __PRIVATE_initializeViewAndComputeSnapshot(
          r,
          __PRIVATE_synthesizeTargetToQuery(n3),
          e2,
          /*current=*/
          false,
          t2.resumeToken
        );
      }
      i.push(t2);
    }
    return r.Ca.E_(s), i;
  });
}
function __PRIVATE_synthesizeTargetToQuery(e) {
  return __PRIVATE_newQuery(e.path, e.collectionGroup, e.orderBy, e.filters, e.limit, "F", e.startAt, e.endAt);
}
function __PRIVATE_syncEngineGetActiveClients(e) {
  return function __PRIVATE_localStoreGetActiveClients(e2) {
    return __PRIVATE_debugCast(__PRIVATE_debugCast(e2).persistence).qi();
  }(__PRIVATE_debugCast(e).localStore);
}
function __PRIVATE_syncEngineApplyTargetState(e, t, n, r) {
  return __async(this, null, function* () {
    const i = __PRIVATE_debugCast(e);
    if (i.qa)
      return void __PRIVATE_logDebug("SyncEngine", "Ignoring unexpected query state notification.");
    const s = i.Fa.get(t);
    if (s && s.length > 0) switch (n) {
      case "current":
      case "not-current": {
        const e2 = yield __PRIVATE_localStoreGetNewDocumentChanges(i.localStore, __PRIVATE_queryCollectionGroup(s[0])), r2 = RemoteEvent.createSynthesizedRemoteEventForCurrentChange(t, "current" === n, ByteString.EMPTY_BYTE_STRING);
        yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(i, e2, r2);
        break;
      }
      case "rejected":
        yield __PRIVATE_localStoreReleaseTarget(
          i.localStore,
          t,
          /* keepPersistedTargetData */
          true
        ), __PRIVATE_removeAndCleanupTarget(i, t, r);
        break;
      default:
        fail();
    }
  });
}
function __PRIVATE_syncEngineApplyActiveTargetsChange(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_ensureWatchCallbacks(e);
    if (r.qa) {
      for (const e2 of t) {
        if (r.Fa.has(e2) && r.sharedClientState.isActiveQueryTarget(e2)) {
          __PRIVATE_logDebug("SyncEngine", "Adding an already active target " + e2);
          continue;
        }
        const t2 = yield __PRIVATE_localStoreGetCachedTarget(r.localStore, e2), n2 = yield __PRIVATE_localStoreAllocateTarget(r.localStore, t2);
        yield __PRIVATE_initializeViewAndComputeSnapshot(
          r,
          __PRIVATE_synthesizeTargetToQuery(t2),
          n2.targetId,
          /*current=*/
          false,
          n2.resumeToken
        ), __PRIVATE_remoteStoreListen(r.remoteStore, n2);
      }
      for (const e2 of n)
        r.Fa.has(e2) && // Release queries that are still active.
        (yield __PRIVATE_localStoreReleaseTarget(
          r.localStore,
          e2,
          /* keepPersistedTargetData */
          false
        ).then(() => {
          __PRIVATE_remoteStoreUnlisten(r.remoteStore, e2), __PRIVATE_removeAndCleanupTarget(r, e2);
        }).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss));
    }
  });
}
function __PRIVATE_ensureWatchCallbacks(e) {
  const t = __PRIVATE_debugCast(e);
  return t.remoteStore.remoteSyncer.applyRemoteEvent = __PRIVATE_syncEngineApplyRemoteEvent.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = __PRIVATE_syncEngineRejectListen.bind(null, t), t.Ca.E_ = __PRIVATE_eventManagerOnWatchChange.bind(null, t.eventManager), t.Ca.Ka = __PRIVATE_eventManagerOnWatchError.bind(null, t.eventManager), t;
}
function __PRIVATE_syncEngineEnsureWriteCallbacks(e) {
  const t = __PRIVATE_debugCast(e);
  return t.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, t), t;
}
function __PRIVATE_syncEngineLoadBundle(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  /** Loads a bundle and returns the list of affected collection groups. */
  (function __PRIVATE_loadBundleImpl(e2, t2, n2) {
    return __async(this, null, function* () {
      try {
        const r2 = yield t2.getMetadata();
        if (yield function __PRIVATE_localStoreHasNewerBundle(e3, t3) {
          const n3 = __PRIVATE_debugCast(e3), r3 = __PRIVATE_fromVersion(t3.createTime);
          return n3.persistence.runTransaction("hasNewerBundle", "readonly", (e4) => n3.Wr.getBundleMetadata(e4, t3.id)).then((e4) => !!e4 && e4.createTime.compareTo(r3) >= 0);
        }(e2.localStore, r2)) return yield t2.close(), n2._completeWith(function __PRIVATE_bundleSuccessProgress(e3) {
          return {
            taskState: "Success",
            documentsLoaded: e3.totalDocuments,
            bytesLoaded: e3.totalBytes,
            totalDocuments: e3.totalDocuments,
            totalBytes: e3.totalBytes
          };
        }(r2)), Promise.resolve(/* @__PURE__ */ new Set());
        n2._updateProgress(__PRIVATE_bundleInitialProgress(r2));
        const i = new __PRIVATE_BundleLoader(r2, e2.localStore, t2.serializer);
        let s = yield t2.$a();
        for (; s; ) {
          const e3 = yield i.ca(s);
          e3 && n2._updateProgress(e3), s = yield t2.$a();
        }
        const o = yield i.complete();
        return yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(
          e2,
          o.Pa,
          /* remoteEvent */
          void 0
        ), // Save metadata, so loading the same bundle will skip.
        yield function __PRIVATE_localStoreSaveBundle(e3, t3) {
          const n3 = __PRIVATE_debugCast(e3);
          return n3.persistence.runTransaction("Save bundle", "readwrite", (e4) => n3.Wr.saveBundleMetadata(e4, t3));
        }(e2.localStore, r2), n2._completeWith(o.progress), Promise.resolve(o.ha);
      } catch (e3) {
        return __PRIVATE_logWarn("SyncEngine", `Loading bundle failed with ${e3}`), n2._failWith(e3), Promise.resolve(/* @__PURE__ */ new Set());
      }
    });
  })(r, t, n).then((e2) => {
    r.sharedClientState.notifyBundleLoaded(e2);
  });
}
var MemoryOfflineComponentProvider = class {
  constructor() {
    this.synchronizeTabs = false;
  }
  initialize(e) {
    return __async(this, null, function* () {
      this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), yield this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore);
    });
  }
  createGarbageCollectionScheduler(e, t) {
    return null;
  }
  createIndexBackfillerScheduler(e, t) {
    return null;
  }
  createLocalStore(e) {
    return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Yr, this.serializer);
  }
  createSharedClientState(e) {
    return new __PRIVATE_MemorySharedClientState();
  }
  terminate() {
    return __async(this, null, function* () {
      var e, t;
      null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), yield this.persistence.shutdown();
    });
  }
};
var __PRIVATE_LruGcMemoryOfflineComponentProvider = class extends MemoryOfflineComponentProvider {
  constructor(e) {
    super(), this.cacheSizeBytes = e;
  }
  createGarbageCollectionScheduler(e, t) {
    __PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate);
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new __PRIVATE_LruScheduler(n, e.asyncQueue, t);
  }
  createPersistence(e) {
    const t = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
    return new __PRIVATE_MemoryPersistence((e2) => __PRIVATE_MemoryLruDelegate.Yr(e2, t), this.serializer);
  }
};
var __PRIVATE_IndexedDbOfflineComponentProvider = class ___PRIVATE_IndexedDbOfflineComponentProvider extends MemoryOfflineComponentProvider {
  constructor(e, t, n) {
    super(), this.Ua = e, this.cacheSizeBytes = t, this.forceOwnership = n, this.synchronizeTabs = false;
  }
  initialize(e) {
    return __async(this, null, function* () {
      yield __superGet(___PRIVATE_IndexedDbOfflineComponentProvider.prototype, this, "initialize").call(this, e), yield this.Ua.initialize(this, e), // Enqueue writes from a previous session
      yield __PRIVATE_syncEngineEnsureWriteCallbacks(this.Ua.syncEngine), yield __PRIVATE_fillWritePipeline(this.Ua.remoteStore), // NOTE: This will immediately call the listener, so we make sure to
      // set it after localStore / remoteStore are started.
      yield this.persistence.pi(() => (this.gcScheduler && !this.gcScheduler.started && this.gcScheduler.start(), this.indexBackfillerScheduler && !this.indexBackfillerScheduler.started && this.indexBackfillerScheduler.start(), Promise.resolve()));
    });
  }
  createLocalStore(e) {
    return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
  }
  createGarbageCollectionScheduler(e, t) {
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new __PRIVATE_LruScheduler(n, e.asyncQueue, t);
  }
  createIndexBackfillerScheduler(e, t) {
    const n = new __PRIVATE_IndexBackfiller(t, this.persistence);
    return new __PRIVATE_IndexBackfillerScheduler(e.asyncQueue, n);
  }
  createPersistence(e) {
    const t = __PRIVATE_indexedDbStoragePrefix(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
    return new __PRIVATE_IndexedDbPersistence(this.synchronizeTabs, t, e.clientId, n, e.asyncQueue, __PRIVATE_getWindow(), getDocument(), this.serializer, this.sharedClientState, !!this.forceOwnership);
  }
  createSharedClientState(e) {
    return new __PRIVATE_MemorySharedClientState();
  }
};
var __PRIVATE_MultiTabOfflineComponentProvider = class ___PRIVATE_MultiTabOfflineComponentProvider extends __PRIVATE_IndexedDbOfflineComponentProvider {
  constructor(e, t) {
    super(
      e,
      t,
      /* forceOwnership= */
      false
    ), this.Ua = e, this.cacheSizeBytes = t, this.synchronizeTabs = true;
  }
  initialize(e) {
    return __async(this, null, function* () {
      yield __superGet(___PRIVATE_MultiTabOfflineComponentProvider.prototype, this, "initialize").call(this, e);
      const t = this.Ua.syncEngine;
      this.sharedClientState instanceof __PRIVATE_WebStorageSharedClientState && (this.sharedClientState.syncEngine = {
        eo: __PRIVATE_syncEngineApplyBatchState.bind(null, t),
        no: __PRIVATE_syncEngineApplyTargetState.bind(null, t),
        ro: __PRIVATE_syncEngineApplyActiveTargetsChange.bind(null, t),
        qi: __PRIVATE_syncEngineGetActiveClients.bind(null, t),
        Xs: __PRIVATE_syncEngineSynchronizeWithChangedDocuments.bind(null, t)
      }, yield this.sharedClientState.start()), // NOTE: This will immediately call the listener, so we make sure to
      // set it after localStore / remoteStore are started.
      yield this.persistence.pi((e2) => __async(this, null, function* () {
        yield __PRIVATE_syncEngineApplyPrimaryState(this.Ua.syncEngine, e2), this.gcScheduler && (e2 && !this.gcScheduler.started ? this.gcScheduler.start() : e2 || this.gcScheduler.stop()), this.indexBackfillerScheduler && (e2 && !this.indexBackfillerScheduler.started ? this.indexBackfillerScheduler.start() : e2 || this.indexBackfillerScheduler.stop());
      }));
    });
  }
  createSharedClientState(e) {
    const t = __PRIVATE_getWindow();
    if (!__PRIVATE_WebStorageSharedClientState.D(t)) throw new FirestoreError(C.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    const n = __PRIVATE_indexedDbStoragePrefix(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
    return new __PRIVATE_WebStorageSharedClientState(t, e.asyncQueue, n, e.clientId, e.initialUser);
  }
};
var OnlineComponentProvider = class {
  initialize(e, t) {
    return __async(this, null, function* () {
      this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
        t,
        /* startAsPrimary=*/
        !e.synchronizeTabs
      ), this.sharedClientState.onlineStateHandler = (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e2,
        1
        /* OnlineStateSource.SharedClientState */
      ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), yield __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
    });
  }
  createEventManager(e) {
    return function __PRIVATE_newEventManager() {
      return new __PRIVATE_EventManagerImpl();
    }();
  }
  createDatastore(e) {
    const t = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n = function __PRIVATE_newConnection(e2) {
      return new __PRIVATE_WebChannelConnection(e2);
    }(e.databaseInfo);
    return function __PRIVATE_newDatastore(e2, t2, n2, r) {
      return new __PRIVATE_DatastoreImpl(e2, t2, n2, r);
    }(e.authCredentials, e.appCheckCredentials, n, t);
  }
  createRemoteStore(e) {
    return function __PRIVATE_newRemoteStore(e2, t, n, r, i) {
      return new __PRIVATE_RemoteStoreImpl(e2, t, n, r, i);
    }(this.localStore, this.datastore, e.asyncQueue, (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
      this.syncEngine,
      e2,
      0
      /* OnlineStateSource.RemoteStore */
    ), function __PRIVATE_newConnectivityMonitor() {
      return __PRIVATE_BrowserConnectivityMonitor.D() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
    }());
  }
  createSyncEngine(e, t) {
    return function __PRIVATE_newSyncEngine(e2, t2, n, r, i, s, o) {
      const _ = new __PRIVATE_SyncEngineImpl(e2, t2, n, r, i, s);
      return o && (_.qa = true), _;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
  }
  terminate() {
    return __async(this, null, function* () {
      var e, t;
      yield function __PRIVATE_remoteStoreShutdown(e2) {
        return __async(this, null, function* () {
          const t2 = __PRIVATE_debugCast(e2);
          __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."), t2.N_.add(
            5
            /* OfflineCause.Shutdown */
          ), yield __PRIVATE_disableNetworkInternal(t2), t2.B_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
          // triggering spurious listener events with cached data, etc.
          t2.k_.set(
            "Unknown"
            /* OnlineState.Unknown */
          );
        });
      }(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate(), null === (t = this.eventManager) || void 0 === t || t.terminate();
    });
  }
};
function __PRIVATE_toByteStreamReaderHelper(e, t = 10240) {
  let n = 0;
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    read() {
      return __async(this, null, function* () {
        if (n < e.byteLength) {
          const r = {
            value: e.slice(n, n + t),
            done: false
          };
          return n += t, r;
        }
        return {
          done: true
        };
      });
    },
    cancel() {
      return __async(this, null, function* () {
      });
    },
    releaseLock() {
    },
    closed: Promise.resolve()
  };
}
var __PRIVATE_AsyncObserver = class {
  constructor(e) {
    this.observer = e, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = false;
  }
  next(e) {
    this.observer.next && this.Wa(this.observer.next, e);
  }
  error(e) {
    this.observer.error ? this.Wa(this.observer.error, e) : __PRIVATE_logError("Uncaught Error in snapshot listener:", e.toString());
  }
  Ga() {
    this.muted = true;
  }
  Wa(e, t) {
    this.muted || setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
};
var __PRIVATE_BundleReaderImpl = class {
  constructor(e, t) {
    this.za = e, this.serializer = t, /** Cached bundle metadata. */
    this.metadata = new __PRIVATE_Deferred(), /**
     * Internal buffer to hold bundle content, accumulating incomplete element
     * content.
     */
    this.buffer = new Uint8Array(), this.ja = function __PRIVATE_newTextDecoder() {
      return new TextDecoder("utf-8");
    }(), // Read the metadata (which is the first element).
    this.Ha().then((e2) => {
      e2 && e2.aa() ? this.metadata.resolve(e2._a.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null == e2 ? void 0 : e2._a)}`));
    }, (e2) => this.metadata.reject(e2));
  }
  close() {
    return this.za.cancel();
  }
  getMetadata() {
    return __async(this, null, function* () {
      return this.metadata.promise;
    });
  }
  $a() {
    return __async(this, null, function* () {
      return yield this.getMetadata(), this.Ha();
    });
  }
  /**
   * Reads from the head of internal buffer, and pulling more data from
   * underlying stream if a complete element cannot be found, until an
   * element(including the prefixed length and the JSON string) is found.
   *
   * Once a complete element is read, it is dropped from internal buffer.
   *
   * Returns either the bundled element, or null if we have reached the end of
   * the stream.
   */
  Ha() {
    return __async(this, null, function* () {
      const e = yield this.Ja();
      if (null === e) return null;
      const t = this.ja.decode(e), n = Number(t);
      isNaN(n) && this.Ya(`length string (${t}) is not valid number`);
      const r = yield this.Za(n);
      return new __PRIVATE_SizedBundleElement(JSON.parse(r), e.length + n);
    });
  }
  /** First index of '{' from the underlying buffer. */
  Xa() {
    return this.buffer.findIndex((e) => e === "{".charCodeAt(0));
  }
  /**
   * Reads from the beginning of the internal buffer, until the first '{', and
   * return the content.
   *
   * If reached end of the stream, returns a null.
   */
  Ja() {
    return __async(this, null, function* () {
      for (; this.Xa() < 0; ) {
        if (yield this.eu()) break;
      }
      if (0 === this.buffer.length) return null;
      const e = this.Xa();
      e < 0 && this.Ya("Reached the end of bundle when a length string is expected.");
      const t = this.buffer.slice(0, e);
      return this.buffer = this.buffer.slice(e), t;
    });
  }
  /**
   * Reads from a specified position from the internal buffer, for a specified
   * number of bytes, pulling more data from the underlying stream if needed.
   *
   * Returns a string decoded from the read bytes.
   */
  Za(e) {
    return __async(this, null, function* () {
      for (; this.buffer.length < e; ) {
        (yield this.eu()) && this.Ya("Reached the end of bundle when more is expected.");
      }
      const t = this.ja.decode(this.buffer.slice(0, e));
      return this.buffer = this.buffer.slice(e), t;
    });
  }
  Ya(e) {
    throw this.za.cancel(), new Error(`Invalid bundle format: ${e}`);
  }
  /**
   * Pulls more data from underlying stream to internal buffer.
   * Returns a boolean indicating whether the stream is finished.
   */
  eu() {
    return __async(this, null, function* () {
      const e = yield this.za.read();
      if (!e.done) {
        const t = new Uint8Array(this.buffer.length + e.value.length);
        t.set(this.buffer), t.set(e.value, this.buffer.length), this.buffer = t;
      }
      return e.done;
    });
  }
};
var Transaction$2 = class {
  constructor(e) {
    this.datastore = e, // The version of each document that was read during this transaction.
    this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
     * A deferred usage error that occurred previously in this transaction that
     * will cause the transaction to fail once it actually commits.
     */
    this.lastTransactionError = null, /**
     * Set of documents that have been written in the transaction.
     *
     * When there's more than one write to the same key in a transaction, any
     * writes after the first are handled differently.
     */
    this.writtenDocs = /* @__PURE__ */ new Set();
  }
  lookup(e) {
    return __async(this, null, function* () {
      if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw this.lastTransactionError = new FirestoreError(C.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError;
      const t = yield function __PRIVATE_invokeBatchGetDocumentsRpc(e2, t2) {
        return __async(this, null, function* () {
          const n = __PRIVATE_debugCast(e2), r = {
            documents: t2.map((e3) => __PRIVATE_toName(n.serializer, e3))
          }, i = yield n.No("BatchGetDocuments", n.serializer.databaseId, ResourcePath.emptyPath(), r, t2.length), s = /* @__PURE__ */ new Map();
          i.forEach((e3) => {
            const t3 = __PRIVATE_fromBatchGetDocumentsResponse(n.serializer, e3);
            s.set(t3.key.toString(), t3);
          });
          const o = [];
          return t2.forEach((e3) => {
            const t3 = s.get(e3.toString());
            __PRIVATE_hardAssert(!!t3), o.push(t3);
          }), o;
        });
      }(this.datastore, e);
      return t.forEach((e2) => this.recordVersion(e2)), t;
    });
  }
  set(e, t) {
    this.write(t.toMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString());
  }
  update(e, t) {
    try {
      this.write(t.toMutation(e, this.preconditionForUpdate(e)));
    } catch (e2) {
      this.lastTransactionError = e2;
    }
    this.writtenDocs.add(e.toString());
  }
  delete(e) {
    this.write(new __PRIVATE_DeleteMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString());
  }
  commit() {
    return __async(this, null, function* () {
      if (this.ensureCommitNotCalled(), this.lastTransactionError) throw this.lastTransactionError;
      const e = this.readVersions;
      this.mutations.forEach((t) => {
        e.delete(t.key.toString());
      }), // For each document that was read but not written to, we want to perform
      // a `verify` operation.
      e.forEach((e2, t) => {
        const n = DocumentKey.fromPath(t);
        this.mutations.push(new __PRIVATE_VerifyMutation(n, this.precondition(n)));
      }), yield function __PRIVATE_invokeCommitRpc(e2, t) {
        return __async(this, null, function* () {
          const n = __PRIVATE_debugCast(e2), r = {
            writes: t.map((e3) => toMutation(n.serializer, e3))
          };
          yield n.Fo("Commit", n.serializer.databaseId, ResourcePath.emptyPath(), r);
        });
      }(this.datastore, this.mutations), this.committed = true;
    });
  }
  recordVersion(e) {
    let t;
    if (e.isFoundDocument()) t = e.version;
    else {
      if (!e.isNoDocument()) throw fail();
      t = SnapshotVersion.min();
    }
    const n = this.readVersions.get(e.key.toString());
    if (n) {
      if (!t.isEqual(n))
        throw new FirestoreError(C.ABORTED, "Document version changed between two reads.");
    } else this.readVersions.set(e.key.toString(), t);
  }
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  precondition(e) {
    const t = this.readVersions.get(e.toString());
    return !this.writtenDocs.has(e.toString()) && t ? t.isEqual(SnapshotVersion.min()) ? Precondition.exists(false) : Precondition.updateTime(t) : Precondition.none();
  }
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  preconditionForUpdate(e) {
    const t = this.readVersions.get(e.toString());
    if (!this.writtenDocs.has(e.toString()) && t) {
      if (t.isEqual(SnapshotVersion.min()))
        throw new FirestoreError(C.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return Precondition.updateTime(t);
    }
    return Precondition.exists(true);
  }
  write(e) {
    this.ensureCommitNotCalled(), this.mutations.push(e);
  }
  ensureCommitNotCalled() {
  }
};
var __PRIVATE_TransactionRunner = class {
  constructor(e, t, n, r, i) {
    this.asyncQueue = e, this.datastore = t, this.options = n, this.updateFunction = r, this.deferred = i, this.tu = n.maxAttempts, this.e_ = new __PRIVATE_ExponentialBackoff(
      this.asyncQueue,
      "transaction_retry"
      /* TimerId.TransactionRetry */
    );
  }
  /** Runs the transaction and sets the result on deferred. */
  nu() {
    this.tu -= 1, this.ru();
  }
  ru() {
    this.e_.Wo(() => __async(this, null, function* () {
      const e = new Transaction$2(this.datastore), t = this.iu(e);
      t && t.then((t2) => {
        this.asyncQueue.enqueueAndForget(() => e.commit().then(() => {
          this.deferred.resolve(t2);
        }).catch((e2) => {
          this.su(e2);
        }));
      }).catch((e2) => {
        this.su(e2);
      });
    }));
  }
  iu(e) {
    try {
      const t = this.updateFunction(e);
      return !__PRIVATE_isNullOrUndefined(t) && t.catch && t.then ? t : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (e2) {
      return this.deferred.reject(e2), null;
    }
  }
  su(e) {
    this.tu > 0 && this.ou(e) ? (this.tu -= 1, this.asyncQueue.enqueueAndForget(() => (this.ru(), Promise.resolve()))) : this.deferred.reject(e);
  }
  ou(e) {
    if ("FirebaseError" === e.name) {
      const t = e.code;
      return "aborted" === t || "failed-precondition" === t || "already-exists" === t || !__PRIVATE_isPermanentError(t);
    }
    return false;
  }
};
var FirestoreClient = class {
  constructor(e, t, n, r) {
    this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r, this.user = User.UNAUTHENTICATED, this.clientId = __PRIVATE_AutoId.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, (e2) => __async(this, null, function* () {
      __PRIVATE_logDebug("FirestoreClient", "Received user=", e2.uid), yield this.authCredentialListener(e2), this.user = e2;
    })), this.appCheckCredentials.start(n, (e2) => (__PRIVATE_logDebug("FirestoreClient", "Received new app check token=", e2), this.appCheckCredentialListener(e2, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on //
   * this class cannot be called after the client is terminated. //
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown) throw new FirestoreError(C.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new __PRIVATE_Deferred();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(() => __async(this, null, function* () {
      try {
        this._onlineComponents && (yield this._onlineComponents.terminate()), this._offlineComponents && (yield this._offlineComponents.terminate()), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
      } catch (t) {
        const n = __PRIVATE_wrapInUserErrorIfRecoverable(t, "Failed to shutdown persistence");
        e.reject(n);
      }
    })), e.promise;
  }
};
function __PRIVATE_setOfflineComponentProvider(e, t) {
  return __async(this, null, function* () {
    e.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = e.configuration;
    yield t.initialize(n);
    let r = n.initialUser;
    e.setCredentialChangeListener((e2) => __async(this, null, function* () {
      r.isEqual(e2) || (yield __PRIVATE_localStoreHandleUserChange(t.localStore, e2), r = e2);
    })), // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    t.persistence.setDatabaseDeletedListener(() => e.terminate()), e._offlineComponents = t;
  });
}
function __PRIVATE_setOnlineComponentProvider(e, t) {
  return __async(this, null, function* () {
    e.asyncQueue.verifyOperationInProgress();
    const n = yield __PRIVATE_ensureOfflineComponents(e);
    __PRIVATE_logDebug("FirestoreClient", "Initializing OnlineComponentProvider"), yield t.initialize(n, e.configuration), // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    e.setCredentialChangeListener((e2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, e2)), e.setAppCheckTokenChangeListener((e2, n2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, n2)), e._onlineComponents = t;
  });
}
function __PRIVATE_canFallbackFromIndexedDbError(e) {
  return "FirebaseError" === e.name ? e.code === C.FAILED_PRECONDITION || e.code === C.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
  // or an aborted error depending on whether the error happened during
  // schema migration.
  22 === e.code || 20 === e.code || // Firefox Private Browsing mode disables IndexedDb and returns
  // INVALID_STATE for any usage.
  11 === e.code;
}
function __PRIVATE_ensureOfflineComponents(e) {
  return __async(this, null, function* () {
    if (!e._offlineComponents) if (e._uninitializedComponentsProvider) {
      __PRIVATE_logDebug("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        yield __PRIVATE_setOfflineComponentProvider(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (!__PRIVATE_canFallbackFromIndexedDbError(n)) throw n;
        __PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + n), yield __PRIVATE_setOfflineComponentProvider(e, new MemoryOfflineComponentProvider());
      }
    } else __PRIVATE_logDebug("FirestoreClient", "Using default OfflineComponentProvider"), yield __PRIVATE_setOfflineComponentProvider(e, new MemoryOfflineComponentProvider());
    return e._offlineComponents;
  });
}
function __PRIVATE_ensureOnlineComponents(e) {
  return __async(this, null, function* () {
    return e._onlineComponents || (e._uninitializedComponentsProvider ? (__PRIVATE_logDebug("FirestoreClient", "Using user provided OnlineComponentProvider"), yield __PRIVATE_setOnlineComponentProvider(e, e._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug("FirestoreClient", "Using default OnlineComponentProvider"), yield __PRIVATE_setOnlineComponentProvider(e, new OnlineComponentProvider()))), e._onlineComponents;
  });
}
function __PRIVATE_getPersistence(e) {
  return __PRIVATE_ensureOfflineComponents(e).then((e2) => e2.persistence);
}
function __PRIVATE_getLocalStore(e) {
  return __PRIVATE_ensureOfflineComponents(e).then((e2) => e2.localStore);
}
function __PRIVATE_getRemoteStore(e) {
  return __PRIVATE_ensureOnlineComponents(e).then((e2) => e2.remoteStore);
}
function __PRIVATE_getSyncEngine(e) {
  return __PRIVATE_ensureOnlineComponents(e).then((e2) => e2.syncEngine);
}
function __PRIVATE_getDatastore(e) {
  return __PRIVATE_ensureOnlineComponents(e).then((e2) => e2.datastore);
}
function __PRIVATE_getEventManager(e) {
  return __async(this, null, function* () {
    const t = yield __PRIVATE_ensureOnlineComponents(e), n = t.eventManager;
    return n.onListen = __PRIVATE_syncEngineListen.bind(null, t.syncEngine), n.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(null, t.syncEngine), n;
  });
}
function __PRIVATE_firestoreClientEnableNetwork(e) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    const t = yield __PRIVATE_getPersistence(e), n = yield __PRIVATE_getRemoteStore(e);
    return t.setNetworkEnabled(true), function __PRIVATE_remoteStoreEnableNetwork(e2) {
      const t2 = __PRIVATE_debugCast(e2);
      return t2.N_.delete(
        0
        /* OfflineCause.UserDisabled */
      ), __PRIVATE_enableNetworkInternal(t2);
    }(n);
  }));
}
function __PRIVATE_firestoreClientDisableNetwork(e) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    const t = yield __PRIVATE_getPersistence(e), n = yield __PRIVATE_getRemoteStore(e);
    return t.setNetworkEnabled(false), function __PRIVATE_remoteStoreDisableNetwork(e2) {
      return __async(this, null, function* () {
        const t2 = __PRIVATE_debugCast(e2);
        t2.N_.add(
          0
          /* OfflineCause.UserDisabled */
        ), yield __PRIVATE_disableNetworkInternal(t2), // Set the OnlineState to Offline so get()s return from cache, etc.
        t2.k_.set(
          "Offline"
          /* OnlineState.Offline */
        );
      });
    }(n);
  }));
}
function __PRIVATE_firestoreClientGetDocumentFromLocalCache(e, t) {
  const n = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function __PRIVATE_readDocumentFromCache(e2, t2, n2) {
      return __async(this, null, function* () {
        try {
          const r = yield function __PRIVATE_localStoreReadDocument(e3, t3) {
            const n3 = __PRIVATE_debugCast(e3);
            return n3.persistence.runTransaction("read document", "readonly", (e4) => n3.localDocuments.getDocument(e4, t3));
          }(e2, t2);
          r.isFoundDocument() ? n2.resolve(r) : r.isNoDocument() ? n2.resolve(null) : n2.reject(new FirestoreError(C.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
        } catch (e3) {
          const r = __PRIVATE_wrapInUserErrorIfRecoverable(e3, `Failed to get document '${t2} from cache`);
          n2.reject(r);
        }
      });
    }(yield __PRIVATE_getLocalStore(e), t, n);
  })), n.promise;
}
function __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(e, t, n = {}) {
  const r = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function __PRIVATE_readDocumentViaSnapshotListener(e2, t2, n2, r2, i) {
      const s = new __PRIVATE_AsyncObserver({
        next: (s2) => {
          t2.enqueueAndForget(() => __PRIVATE_eventManagerUnlisten(e2, o));
          const _ = s2.docs.has(n2);
          !_ && s2.fromCache ? (
            // TODO(dimond): If we're online and the document doesn't
            // exist then we resolve with a doc.exists set to false. If
            // we're offline however, we reject the Promise in this
            // case. Two options: 1) Cache the negative response from
            // the server so we can deliver that even when you're
            // offline 2) Actually reject the Promise in the online case
            // if the document doesn't exist.
            i.reject(new FirestoreError(C.UNAVAILABLE, "Failed to get document because the client is offline."))
          ) : _ && s2.fromCache && r2 && "server" === r2.source ? i.reject(new FirestoreError(C.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(s2);
        },
        error: (e3) => i.reject(e3)
      }), o = new __PRIVATE_QueryListener(__PRIVATE_newQueryForPath(n2.path), s, {
        includeMetadataChanges: true,
        oa: true
      });
      return __PRIVATE_eventManagerListen(e2, o);
    }(yield __PRIVATE_getEventManager(e), e.asyncQueue, t, n, r);
  })), r.promise;
}
function __PRIVATE_firestoreClientGetDocumentsFromLocalCache(e, t) {
  const n = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function __PRIVATE_executeQueryFromCache(e2, t2, n2) {
      return __async(this, null, function* () {
        try {
          const r = yield __PRIVATE_localStoreExecuteQuery(
            e2,
            t2,
            /* usePreviousResults= */
            true
          ), i = new __PRIVATE_View(t2, r.Is), s = i.Va(r.documents), o = i.applyChanges(
            s,
            /* limboResolutionEnabled= */
            false
          );
          n2.resolve(o.snapshot);
        } catch (e3) {
          const r = __PRIVATE_wrapInUserErrorIfRecoverable(e3, `Failed to execute query '${t2} against cache`);
          n2.reject(r);
        }
      });
    }(yield __PRIVATE_getLocalStore(e), t, n);
  })), n.promise;
}
function __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(e, t, n = {}) {
  const r = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function __PRIVATE_executeQueryViaSnapshotListener(e2, t2, n2, r2, i) {
      const s = new __PRIVATE_AsyncObserver({
        next: (n3) => {
          t2.enqueueAndForget(() => __PRIVATE_eventManagerUnlisten(e2, o)), n3.fromCache && "server" === r2.source ? i.reject(new FirestoreError(C.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n3);
        },
        error: (e3) => i.reject(e3)
      }), o = new __PRIVATE_QueryListener(n2, s, {
        includeMetadataChanges: true,
        oa: true
      });
      return __PRIVATE_eventManagerListen(e2, o);
    }(yield __PRIVATE_getEventManager(e), e.asyncQueue, t, n, r);
  })), r.promise;
}
function __PRIVATE_firestoreClientRunAggregateQuery(e, t, n) {
  const r = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    try {
      const i = yield __PRIVATE_getDatastore(e);
      r.resolve(function __PRIVATE_invokeRunAggregationQueryRpc(e2, t2, n2) {
        return __async(this, null, function* () {
          var r2;
          const i2 = __PRIVATE_debugCast(e2), {
            request: s,
            ut: o,
            parent: _
          } = __PRIVATE_toRunAggregationQueryRequest(i2.serializer, __PRIVATE_queryToAggregateTarget(t2), n2);
          i2.connection.vo || delete s.parent;
          const a = (yield i2.No(
            "RunAggregationQuery",
            i2.serializer.databaseId,
            _,
            s,
            /*expectedResponseCount=*/
            1
          )).filter((e3) => !!e3.result);
          __PRIVATE_hardAssert(1 === a.length);
          const u = null === (r2 = a[0].result) || void 0 === r2 ? void 0 : r2.aggregateFields;
          return Object.keys(u).reduce((e3, t3) => (e3[o[t3]] = u[t3], e3), {});
        });
      }(i, t, n));
    } catch (e2) {
      r.reject(e2);
    }
  })), r.promise;
}
function __PRIVATE_firestoreClientAddSnapshotsInSyncListener(e, t) {
  const n = new __PRIVATE_AsyncObserver(t);
  return e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    return function __PRIVATE_addSnapshotsInSyncListener(e2, t2) {
      __PRIVATE_debugCast(e2).J_.add(t2), // Immediately fire an initial event, indicating all existing listeners
      // are in-sync.
      t2.next();
    }(yield __PRIVATE_getEventManager(e), n);
  })), () => {
    n.Ga(), e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return function __PRIVATE_removeSnapshotsInSyncListener(e2, t2) {
        __PRIVATE_debugCast(e2).J_.delete(t2);
      }(yield __PRIVATE_getEventManager(e), n);
    }));
  };
}
function __PRIVATE_firestoreClientLoadBundle(e, t, n, r) {
  const i = function __PRIVATE_createBundleReader(e2, t2) {
    let n2;
    n2 = "string" == typeof e2 ? __PRIVATE_newTextEncoder().encode(e2) : e2;
    return function __PRIVATE_newBundleReader(e3, t3) {
      return new __PRIVATE_BundleReaderImpl(e3, t3);
    }(function __PRIVATE_toByteStreamReader(e3, t3) {
      if (e3 instanceof Uint8Array) return __PRIVATE_toByteStreamReaderHelper(e3, t3);
      if (e3 instanceof ArrayBuffer) return __PRIVATE_toByteStreamReaderHelper(new Uint8Array(e3), t3);
      if (e3 instanceof ReadableStream) return e3.getReader();
      throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
    }(n2), t2);
  }(n, __PRIVATE_newSerializer(t));
  e.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
    __PRIVATE_syncEngineLoadBundle(yield __PRIVATE_getSyncEngine(e), i, r);
  }));
}
function __PRIVATE_firestoreClientGetNamedQuery(e, t) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function __PRIVATE_localStoreGetNamedQuery(e2, t2) {
      const n = __PRIVATE_debugCast(e2);
      return n.persistence.runTransaction("Get named query", "readonly", (e3) => n.Wr.getNamedQuery(e3, t2));
    }(yield __PRIVATE_getLocalStore(e), t);
  }));
}
function __PRIVATE_firestoreClientSetIndexConfiguration(e, t) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function __PRIVATE_localStoreConfigureFieldIndexes(e2, t2) {
      return __async(this, null, function* () {
        const n = __PRIVATE_debugCast(e2), r = n.indexManager, i = [];
        return n.persistence.runTransaction("Configure indexes", "readwrite", (e3) => r.getFieldIndexes(e3).next((n2) => (
          /**
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
          */
          /**
          * Compares two array for equality using comparator. The method computes the
          * intersection and invokes `onAdd` for every element that is in `after` but not
          * `before`. `onRemove` is invoked for every element in `before` but missing
          * from `after`.
          *
          * The method creates a copy of both `before` and `after` and runs in O(n log
          * n), where n is the size of the two lists.
          *
          * @param before - The elements that exist in the original array.
          * @param after - The elements to diff against the original array.
          * @param comparator - The comparator for the elements in before and after.
          * @param onAdd - A function to invoke for every element that is part of `
          * after` but not `before`.
          * @param onRemove - A function to invoke for every element that is part of
          * `before` but not `after`.
          */
          function __PRIVATE_diffArrays(e4, t3, n3, r2, i2) {
            e4 = [...e4], t3 = [...t3], e4.sort(n3), t3.sort(n3);
            const s = e4.length, o = t3.length;
            let _ = 0, a = 0;
            for (; _ < o && a < s; ) {
              const s2 = n3(e4[a], t3[_]);
              s2 < 0 ? (
                // The element was removed if the next element in our ordered
                // walkthrough is only in `before`.
                i2(e4[a++])
              ) : s2 > 0 ? (
                // The element was added if the next element in our ordered walkthrough
                // is only in `after`.
                r2(t3[_++])
              ) : (_++, a++);
            }
            for (; _ < o; ) r2(t3[_++]);
            for (; a < s; ) i2(e4[a++]);
          }(n2, t2, __PRIVATE_fieldIndexSemanticComparator, (t3) => {
            i.push(r.addFieldIndex(e3, t3));
          }, (t3) => {
            i.push(r.deleteFieldIndex(e3, t3));
          })
        )).next(() => PersistencePromise.waitFor(i)));
      });
    }(yield __PRIVATE_getLocalStore(e), t);
  }));
}
function __PRIVATE_firestoreClientSetPersistentCacheIndexAutoCreationEnabled(e, t) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function __PRIVATE_localStoreSetIndexAutoCreationEnabled(e2, t2) {
      __PRIVATE_debugCast(e2).rs.Gi = t2;
    }(yield __PRIVATE_getLocalStore(e), t);
  }));
}
function __PRIVATE_firestoreClientDeleteAllFieldIndexes(e) {
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    return function __PRIVATE_localStoreDeleteAllFieldIndexes(e2) {
      const t = __PRIVATE_debugCast(e2), n = t.indexManager;
      return t.persistence.runTransaction("Delete All Indexes", "readwrite", (e3) => n.deleteAllFieldIndexes(e3));
    }(yield __PRIVATE_getLocalStore(e));
  }));
}
function __PRIVATE_cloneLongPollingOptions(e) {
  const t = {};
  return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
}
var we = /* @__PURE__ */ new Map();
function __PRIVATE_validateNonEmptyArgument(e, t, n) {
  if (!n) throw new FirestoreError(C.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function __PRIVATE_validateIsNotUsedTogether(e, t, n, r) {
  if (true === t && true === r) throw new FirestoreError(C.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function __PRIVATE_validateDocumentPath(e) {
  if (!DocumentKey.isDocumentKey(e)) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_validateCollectionPath(e) {
  if (DocumentKey.isDocumentKey(e)) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_valueDescription(e) {
  if (void 0 === e) return "undefined";
  if (null === e) return "null";
  if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if ("number" == typeof e || "boolean" == typeof e) return "" + e;
  if ("object" == typeof e) {
    if (e instanceof Array) return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        function __PRIVATE_tryGetCustomObjectType(e2) {
          if (e2.constructor) return e2.constructor.name;
          return null;
        }(e)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return "function" == typeof e ? "a function" : fail();
}
function __PRIVATE_cast(e, t) {
  if ("_delegate" in e && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e = e._delegate), !(e instanceof t)) {
    if (t.name === e.constructor.name) throw new FirestoreError(C.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = __PRIVATE_valueDescription(e);
      throw new FirestoreError(C.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
function __PRIVATE_validatePositiveNumber(e, t) {
  if (t <= 0) throw new FirestoreError(C.INVALID_ARGUMENT, `Function ${e}() requires a positive number, but it was: ${t}.`);
}
var FirestoreSettingsImpl = class {
  constructor(e) {
    var t, n;
    if (void 0 === e.host) {
      if (void 0 !== e.ssl) throw new FirestoreError(C.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576) throw new FirestoreError(C.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function __PRIVATE_validateLongPollingOptions(e2) {
      if (void 0 !== e2.timeoutSeconds) {
        if (isNaN(e2.timeoutSeconds)) throw new FirestoreError(C.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
        if (e2.timeoutSeconds < 5) throw new FirestoreError(C.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
        if (e2.timeoutSeconds > 30) throw new FirestoreError(C.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(e2, t) {
      return e2.timeoutSeconds === t.timeoutSeconds;
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
};
var Firestore$1 = class {
  /** @hideconstructor */
  constructor(e, t, n, r) {
    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new FirestoreError(C.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return void 0 !== this._terminateTask;
  }
  _setSettings(e) {
    if (this._settingsFrozen) throw new FirestoreError(C.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new FirestoreSettingsImpl(e), void 0 !== e.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(e2) {
      if (!e2) return new __PRIVATE_EmptyAuthCredentialsProvider();
      switch (e2.type) {
        case "firstParty":
          return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
        case "provider":
          return e2.client;
        default:
          throw new FirestoreError(C.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function __PRIVATE_removeComponents(e) {
      const t = we.get(e);
      t && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), we.delete(e), t.terminate());
    }(this), Promise.resolve();
  }
};
function connectFirestoreEmulator(e, t, n, r = {}) {
  var i;
  const s = (e = __PRIVATE_cast(e, Firestore$1))._getSettings(), o = `${t}:${n}`;
  if ("firestore.googleapis.com" !== s.host && s.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, s), {
    host: o,
    ssl: false
  })), r.mockUserToken) {
    let t2, n2;
    if ("string" == typeof r.mockUserToken) t2 = r.mockUserToken, n2 = User.MOCK_USER;
    else {
      t2 = createMockUserToken(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
      const s2 = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!s2) throw new FirestoreError(C.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new User(s2);
    }
    e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t2, n2));
  }
}
var Query = class _Query {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, t, n) {
    this.converter = t, this._query = n, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new _Query(this.firestore, e, this._query);
  }
};
var DocumentReference = class _DocumentReference {
  /** @hideconstructor */
  constructor(e, t, n) {
    this.converter = t, this._key = n, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new _DocumentReference(this.firestore, e, this._key);
  }
};
var CollectionReference = class _CollectionReference extends Query {
  /** @hideconstructor */
  constructor(e, t, n) {
    super(e, t, __PRIVATE_newQueryForPath(n)), this._path = n, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      new DocumentKey(e)
    );
  }
  withConverter(e) {
    return new _CollectionReference(this.firestore, e, this._path);
  }
};
function collection(e, t, ...n) {
  if (e = getModularInstance(e), __PRIVATE_validateNonEmptyArgument("collection", "path", t), e instanceof Firestore$1) {
    const r = ResourcePath.fromString(t, ...n);
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ResourcePath.fromString(t, ...n));
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function collectionGroup(e, t) {
  if (e = __PRIVATE_cast(e, Firestore$1), __PRIVATE_validateNonEmptyArgument("collectionGroup", "collection id", t), t.indexOf("/") >= 0) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Query(
    e,
    /* converter= */
    null,
    function __PRIVATE_newQueryForCollectionGroup(e2) {
      return new __PRIVATE_QueryImpl(ResourcePath.emptyPath(), e2);
    }(t)
  );
}
function doc(e, t, ...n) {
  if (e = getModularInstance(e), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (t = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t), e instanceof Firestore$1) {
    const r = ResourcePath.fromString(t, ...n);
    return __PRIVATE_validateDocumentPath(r), new DocumentReference(
      e,
      /* converter= */
      null,
      new DocumentKey(r)
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(C.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ResourcePath.fromString(t, ...n));
    return __PRIVATE_validateDocumentPath(r), new DocumentReference(e.firestore, e instanceof CollectionReference ? e.converter : null, new DocumentKey(r));
  }
}
function refEqual(e, t) {
  return e = getModularInstance(e), t = getModularInstance(t), (e instanceof DocumentReference || e instanceof CollectionReference) && (t instanceof DocumentReference || t instanceof CollectionReference) && e.firestore === t.firestore && e.path === t.path && e.converter === t.converter;
}
function queryEqual(e, t) {
  return e = getModularInstance(e), t = getModularInstance(t), e instanceof Query && t instanceof Query && e.firestore === t.firestore && __PRIVATE_queryEquals(e._query, t._query) && e.converter === t.converter;
}
var __PRIVATE_AsyncQueueImpl = class {
  constructor() {
    this._u = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.au = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.uu = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.cu = [], // visible for testing
    this.lu = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.hu = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Pu = false, // List of TimerIds to fast-forward delays for.
    this.Iu = [], // Backoff timer used to schedule retries for retryable operations
    this.e_ = new __PRIVATE_ExponentialBackoff(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Tu = () => {
      const e2 = getDocument();
      e2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + e2.visibilityState), this.e_.zo();
    };
    const e = getDocument();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Tu);
  }
  get isShuttingDown() {
    return this.uu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Eu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.du(e);
  }
  enterRestrictedMode(e) {
    if (!this.uu) {
      this.uu = true, this.Pu = e || false;
      const t = getDocument();
      t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Tu);
    }
  }
  enqueue(e) {
    if (this.Eu(), this.uu)
      return new Promise(() => {
      });
    const t = new __PRIVATE_Deferred();
    return this.du(() => this.uu && this.Pu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.au.push(e), this.Au()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  Au() {
    return __async(this, null, function* () {
      if (0 !== this.au.length) {
        try {
          yield this.au[0](), this.au.shift(), this.e_.reset();
        } catch (e) {
          if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
          __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + e);
        }
        this.au.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
        // This is necessary to run retryable operations that failed during
        // their initial attempt since we don't know whether they are already
        // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
        // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
        // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
        // call scheduled here.
        // Since `backoffAndRun()` cancels an existing backoff and schedules a
        // new backoff on every call, there is only ever a single additional
        // operation in the queue.
        this.e_.Wo(() => this.Au());
      }
    });
  }
  du(e) {
    const t = this._u.then(() => (this.hu = true, e().catch((e2) => {
      this.lu = e2, this.hu = false;
      const t2 = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function __PRIVATE_getMessageOrStack(e3) {
          let t3 = e3.message || "";
          e3.stack && (t3 = e3.stack.includes(e3.message) ? e3.stack : e3.message + "\n" + e3.stack);
          return t3;
        }(e2)
      );
      throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", t2), e2;
    }).then((e2) => (this.hu = false, e2))));
    return this._u = t, t;
  }
  enqueueAfterDelay(e, t, n) {
    this.Eu(), // Fast-forward delays for timerIds that have been overridden.
    this.Iu.indexOf(e) > -1 && (t = 0);
    const r = DelayedOperation.createAndSchedule(this, e, t, n, (e2) => this.Ru(e2));
    return this.cu.push(r), r;
  }
  Eu() {
    this.lu && fail();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  Vu() {
    return __async(this, null, function* () {
      let e;
      do {
        e = this._u, yield e;
      } while (e !== this._u);
    });
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  mu(e) {
    for (const t of this.cu) if (t.timerId === e) return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  fu(e) {
    return this.Vu().then(() => {
      this.cu.sort((e2, t) => e2.targetTimeMs - t.targetTimeMs);
      for (const t of this.cu) if (t.skipDelay(), "all" !== e && t.timerId === e) break;
      return this.Vu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  gu(e) {
    this.Iu.push(e);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Ru(e) {
    const t = this.cu.indexOf(e);
    this.cu.splice(t, 1);
  }
};
function __PRIVATE_isPartialObserver(e) {
  return function __PRIVATE_implementsAnyMethods(e2, t) {
    if ("object" != typeof e2 || null === e2) return false;
    const n = e2;
    for (const e3 of t) if (e3 in n && "function" == typeof n[e3]) return true;
    return false;
  }(e, ["next", "error", "complete"]);
}
var LoadBundleTask = class {
  constructor() {
    this._progressObserver = {}, this._taskCompletionResolver = new __PRIVATE_Deferred(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    };
  }
  /**
   * Registers functions to listen to bundle loading progress events.
   * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
   *   each time a Firestore document is loaded from the bundle.
   * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
   *   error, and there should be no more updates after this.
   * @param complete - Called when the loading task is complete.
   */
  onProgress(e, t, n) {
    this._progressObserver = {
      next: e,
      error: t,
      complete: n
    };
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
   *
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  catch(e) {
    return this._taskCompletionResolver.promise.catch(e);
  }
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
   *
   * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
   *   The update will always have its `taskState` set to `"Success"`.
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  then(e, t) {
    return this._taskCompletionResolver.promise.then(e, t);
  }
  /**
   * Notifies all observers that bundle loading has completed, with a provided
   * `LoadBundleTaskProgress` object.
   *
   * @private
   */
  _completeWith(e) {
    this._updateProgress(e), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(e);
  }
  /**
   * Notifies all observers that bundle loading has failed, with a provided
   * `Error` as the reason.
   *
   * @private
   */
  _failWith(e) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(e), this._taskCompletionResolver.reject(e);
  }
  /**
   * Notifies a progress update of loading a bundle.
   * @param progress - The new progress.
   *
   * @private
   */
  _updateProgress(e) {
    this._lastProgress = e, this._progressObserver.next && this._progressObserver.next(e);
  }
};
var Se = -1;
var Firestore = class extends Firestore$1 {
  /** @hideconstructor */
  constructor(e, t, n, r) {
    super(e, t, n, r), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = function __PRIVATE_newAsyncQueue() {
      return new __PRIVATE_AsyncQueueImpl();
    }(), this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    __PRIVATE_configureFirestore(this), this._firestoreClient.terminate();
  }
};
function initializeFirestore(e, t, n) {
  n || (n = "(default)");
  const r = _getProvider(e, "firestore");
  if (r.isInitialized(n)) {
    const e2 = r.getImmediate({
      identifier: n
    }), i = r.getOptions(n);
    if (deepEqual(i, t)) return e2;
    throw new FirestoreError(C.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== t.cacheSizeBytes && void 0 !== t.localCache) throw new FirestoreError(C.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
  if (void 0 !== t.cacheSizeBytes && -1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new FirestoreError(C.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return r.initialize({
    options: t,
    instanceIdentifier: n
  });
}
function getFirestore(t, n) {
  const r = "object" == typeof t ? t : getApp(), i = "string" == typeof t ? t : n || "(default)", s = _getProvider(r, "firestore").getImmediate({
    identifier: i
  });
  if (!s._initialized) {
    const e = getDefaultEmulatorHostnameAndPort("firestore");
    e && connectFirestoreEmulator(s, ...e);
  }
  return s;
}
function ensureFirestoreConfigured(e) {
  return e._firestoreClient || __PRIVATE_configureFirestore(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient;
}
function __PRIVATE_configureFirestore(e) {
  var t, n, r;
  const i = e._freezeSettings(), s = function __PRIVATE_makeDatabaseInfo(e2, t2, n2, r2) {
    return new DatabaseInfo(e2, t2, n2, r2.host, r2.ssl, r2.experimentalForceLongPolling, r2.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(r2.experimentalLongPollingOptions), r2.useFetchStreams);
  }(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, i);
  e._firestoreClient = new FirestoreClient(e._authCredentials, e._appCheckCredentials, e._queue, s), (null === (n = i.localCache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (r = i.localCache) || void 0 === r ? void 0 : r._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
    _offlineKind: i.localCache.kind,
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  });
}
function enableIndexedDbPersistence(e, t) {
  __PRIVATE_verifyNotInitialized(e = __PRIVATE_cast(e, Firestore));
  const n = ensureFirestoreConfigured(e);
  if (n._uninitializedComponentsProvider) throw new FirestoreError(C.FAILED_PRECONDITION, "SDK cache is already specified.");
  __PRIVATE_logWarn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
  const r = e._freezeSettings(), i = new OnlineComponentProvider();
  return __PRIVATE_setPersistenceProviders(n, i, new __PRIVATE_IndexedDbOfflineComponentProvider(i, r.cacheSizeBytes, null == t ? void 0 : t.forceOwnership));
}
function enableMultiTabIndexedDbPersistence(e) {
  __PRIVATE_verifyNotInitialized(e = __PRIVATE_cast(e, Firestore));
  const t = ensureFirestoreConfigured(e);
  if (t._uninitializedComponentsProvider) throw new FirestoreError(C.FAILED_PRECONDITION, "SDK cache is already specified.");
  __PRIVATE_logWarn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");
  const n = e._freezeSettings(), r = new OnlineComponentProvider();
  return __PRIVATE_setPersistenceProviders(t, r, new __PRIVATE_MultiTabOfflineComponentProvider(r, n.cacheSizeBytes));
}
function __PRIVATE_setPersistenceProviders(e, t, n) {
  const r = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueue(() => __async(this, null, function* () {
    try {
      yield __PRIVATE_setOfflineComponentProvider(e, n), yield __PRIVATE_setOnlineComponentProvider(e, t), r.resolve();
    } catch (e2) {
      const t2 = e2;
      if (!__PRIVATE_canFallbackFromIndexedDbError(t2)) throw t2;
      __PRIVATE_logWarn("Error enabling indexeddb cache. Falling back to memory cache: " + t2), r.reject(t2);
    }
  })).then(() => r.promise);
}
function clearIndexedDbPersistence(e) {
  if (e._initialized && !e._terminated) throw new FirestoreError(C.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
  const t = new __PRIVATE_Deferred();
  return e._queue.enqueueAndForgetEvenWhileRestricted(() => __async(this, null, function* () {
    try {
      yield function __PRIVATE_indexedDbClearPersistence(e2) {
        return __async(this, null, function* () {
          if (!__PRIVATE_SimpleDb.D()) return Promise.resolve();
          const t2 = e2 + "main";
          yield __PRIVATE_SimpleDb.delete(t2);
        });
      }(__PRIVATE_indexedDbStoragePrefix(e._databaseId, e._persistenceKey)), t.resolve();
    } catch (e2) {
      t.reject(e2);
    }
  })), t.promise;
}
function waitForPendingWrites(e) {
  return function __PRIVATE_firestoreClientWaitForPendingWrites(e2) {
    const t = new __PRIVATE_Deferred();
    return e2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return __PRIVATE_syncEngineRegisterPendingWritesCallback(yield __PRIVATE_getSyncEngine(e2), t);
    })), t.promise;
  }(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
function enableNetwork(e) {
  return __PRIVATE_firestoreClientEnableNetwork(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
function disableNetwork(e) {
  return __PRIVATE_firestoreClientDisableNetwork(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)));
}
function terminate(e) {
  return _removeServiceInstance(e.app, "firestore", e._databaseId.database), e._delete();
}
function loadBundle(e, t) {
  const n = ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), r = new LoadBundleTask();
  return __PRIVATE_firestoreClientLoadBundle(n, e._databaseId, t, r), r;
}
function namedQuery(e, t) {
  return __PRIVATE_firestoreClientGetNamedQuery(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), t).then((t2) => t2 ? new Query(e, null, t2.query) : null);
}
function __PRIVATE_verifyNotInitialized(e) {
  if (e._initialized || e._terminated) throw new FirestoreError(C.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
var AggregateField = class {
  /**
   * Create a new AggregateField<T>
   * @param aggregateType Specifies the type of aggregation operation to perform.
   * @param _internalFieldPath Optionally specifies the field that is aggregated.
   * @internal
   */
  constructor(e = "count", t) {
    this._internalFieldPath = t, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateField", this.aggregateType = e;
  }
};
var AggregateQuerySnapshot = class {
  /** @hideconstructor */
  constructor(e, t, n) {
    this._userDataWriter = t, this._data = n, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateQuerySnapshot", this.query = e;
  }
  /**
   * Returns the results of the aggregations performed over the underlying
   * query.
   *
   * The keys of the returned object will be the same as those of the
   * `AggregateSpec` object specified to the aggregation method, and the values
   * will be the corresponding aggregation result.
   *
   * @returns The results of the aggregations performed over the underlying
   * query.
   */
  data() {
    return this._userDataWriter.convertObjectMap(this._data);
  }
};
var Bytes = class _Bytes {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new _Bytes(ByteString.fromBase64String(e));
    } catch (e2) {
      throw new FirestoreError(C.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e2);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new _Bytes(ByteString.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
};
var FieldPath = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let t = 0; t < e.length; ++t) if (0 === e[t].length) throw new FirestoreError(C.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new FieldPath$1(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
};
function documentId() {
  return new FieldPath("__name__");
}
var FieldValue = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
};
var GeoPoint = class {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90) throw new FirestoreError(C.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(t) || t < -180 || t > 180) throw new FirestoreError(C.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    this._lat = e, this._long = t;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return __PRIVATE_primitiveComparator(this._lat, e._lat) || __PRIVATE_primitiveComparator(this._long, e._long);
  }
};
var be = /^__.*__$/;
var ParsedSetData = class {
  constructor(e, t, n) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = n;
  }
  toMutation(e, t) {
    return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms) : new __PRIVATE_SetMutation(e, this.data, t, this.fieldTransforms);
  }
};
var ParsedUpdateData = class {
  constructor(e, t, n) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = n;
  }
  toMutation(e, t) {
    return new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms);
  }
};
function __PRIVATE_isWrite(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw fail();
  }
}
var __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, t, n, r, i, s) {
    this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.pu(), this.fieldTransforms = i || [], this.fieldMask = s || [];
  }
  get path() {
    return this.settings.path;
  }
  get yu() {
    return this.settings.yu;
  }
  /** Returns a new context with the specified settings overwritten. */
  wu(e) {
    return new ___PRIVATE_ParseContextImpl(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  Su(e) {
    var t;
    const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.wu({
      path: n,
      bu: false
    });
    return r.Du(e), r;
  }
  Cu(e) {
    var t;
    const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.wu({
      path: n,
      bu: false
    });
    return r.pu(), r;
  }
  vu(e) {
    return this.wu({
      path: void 0,
      bu: true
    });
  }
  Fu(e) {
    return __PRIVATE_createError(e, this.settings.methodName, this.settings.Mu || false, this.path, this.settings.xu);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) || void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field));
  }
  pu() {
    if (this.path) for (let e = 0; e < this.path.length; e++) this.Du(this.path.get(e));
  }
  Du(e) {
    if (0 === e.length) throw this.Fu("Document fields must not be empty");
    if (__PRIVATE_isWrite(this.yu) && be.test(e)) throw this.Fu('Document fields cannot begin and end with "__"');
  }
};
var __PRIVATE_UserDataReader = class {
  constructor(e, t, n) {
    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || __PRIVATE_newSerializer(e);
  }
  /** Creates a new top-level parse context. */
  Ou(e, t, n, r = false) {
    return new __PRIVATE_ParseContextImpl({
      yu: e,
      methodName: t,
      xu: n,
      path: FieldPath$1.emptyPath(),
      bu: false,
      Mu: r
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function __PRIVATE_newUserDataReader(e) {
  const t = e._freezeSettings(), n = __PRIVATE_newSerializer(e._databaseId);
  return new __PRIVATE_UserDataReader(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function __PRIVATE_parseSetData(e, t, n, r, i, s = {}) {
  const o = e.Ou(s.merge || s.mergeFields ? 2 : 0, t, n, i);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", o, r);
  const _ = __PRIVATE_parseObject(r, o);
  let a, u;
  if (s.merge) a = new FieldMask(o.fieldMask), u = o.fieldTransforms;
  else if (s.mergeFields) {
    const e2 = [];
    for (const r2 of s.mergeFields) {
      const i2 = __PRIVATE_fieldPathFromArgument$1(t, r2, n);
      if (!o.contains(i2)) throw new FirestoreError(C.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      __PRIVATE_fieldMaskContains(e2, i2) || e2.push(i2);
    }
    a = new FieldMask(e2), u = o.fieldTransforms.filter((e3) => a.covers(e3.field));
  } else a = null, u = o.fieldTransforms;
  return new ParsedSetData(new ObjectValue(_), a, u);
}
var __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
  _toFieldTransform(e) {
    if (2 !== e.yu) throw 1 === e.yu ? e.Fu(`${this._methodName}() can only appear at the top level of your update data`) : e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_DeleteFieldValueImpl;
  }
};
function __PRIVATE_createSentinelChildContext(e, t, n) {
  return new __PRIVATE_ParseContextImpl({
    yu: 3,
    xu: t.settings.xu,
    methodName: e._methodName,
    bu: n
  }, t.databaseId, t.serializer, t.ignoreUndefinedProperties);
}
var __PRIVATE_ServerTimestampFieldValueImpl = class ___PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
  _toFieldTransform(e) {
    return new FieldTransform(e.path, new __PRIVATE_ServerTimestampTransform());
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ServerTimestampFieldValueImpl;
  }
};
var __PRIVATE_ArrayUnionFieldValueImpl = class ___PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Nu = t;
  }
  _toFieldTransform(e) {
    const t = __PRIVATE_createSentinelChildContext(
      this,
      e,
      /*array=*/
      true
    ), n = this.Nu.map((e2) => __PRIVATE_parseData(e2, t)), r = new __PRIVATE_ArrayUnionTransformOperation(n);
    return new FieldTransform(e.path, r);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.Nu, e.Nu);
  }
};
var __PRIVATE_ArrayRemoveFieldValueImpl = class ___PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Nu = t;
  }
  _toFieldTransform(e) {
    const t = __PRIVATE_createSentinelChildContext(
      this,
      e,
      /*array=*/
      true
    ), n = this.Nu.map((e2) => __PRIVATE_parseData(e2, t)), r = new __PRIVATE_ArrayRemoveTransformOperation(n);
    return new FieldTransform(e.path, r);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.Nu, e.Nu);
  }
};
var __PRIVATE_NumericIncrementFieldValueImpl = class ___PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Lu = t;
  }
  _toFieldTransform(e) {
    const t = new __PRIVATE_NumericIncrementTransformOperation(e.serializer, toNumber(e.serializer, this.Lu));
    return new FieldTransform(e.path, t);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_NumericIncrementFieldValueImpl && this.Lu === e.Lu;
  }
};
function __PRIVATE_parseUpdateData(e, t, n, r) {
  const i = e.Ou(1, t, n);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", i, r);
  const s = [], o = ObjectValue.empty();
  forEach(r, (e2, r2) => {
    const _2 = __PRIVATE_fieldPathFromDotSeparatedString(t, e2, n);
    r2 = getModularInstance(r2);
    const a = i.Cu(_2);
    if (r2 instanceof __PRIVATE_DeleteFieldValueImpl)
      s.push(_2);
    else {
      const e3 = __PRIVATE_parseData(r2, a);
      null != e3 && (s.push(_2), o.set(_2, e3));
    }
  });
  const _ = new FieldMask(s);
  return new ParsedUpdateData(o, _, i.fieldTransforms);
}
function __PRIVATE_parseUpdateVarargs(e, t, n, r, i, s) {
  const o = e.Ou(1, t, n), _ = [__PRIVATE_fieldPathFromArgument$1(t, r, n)], a = [i];
  if (s.length % 2 != 0) throw new FirestoreError(C.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let e2 = 0; e2 < s.length; e2 += 2) _.push(__PRIVATE_fieldPathFromArgument$1(t, s[e2])), a.push(s[e2 + 1]);
  const u = [], c = ObjectValue.empty();
  for (let e2 = _.length - 1; e2 >= 0; --e2) if (!__PRIVATE_fieldMaskContains(u, _[e2])) {
    const t2 = _[e2];
    let n2 = a[e2];
    n2 = getModularInstance(n2);
    const r2 = o.Cu(t2);
    if (n2 instanceof __PRIVATE_DeleteFieldValueImpl)
      u.push(t2);
    else {
      const e3 = __PRIVATE_parseData(n2, r2);
      null != e3 && (u.push(t2), c.set(t2, e3));
    }
  }
  const l = new FieldMask(u);
  return new ParsedUpdateData(c, l, o.fieldTransforms);
}
function __PRIVATE_parseQueryValue(e, t, n, r = false) {
  return __PRIVATE_parseData(n, e.Ou(r ? 4 : 3, t));
}
function __PRIVATE_parseData(e, t) {
  if (__PRIVATE_looksLikeJsonObject(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    e = getModularInstance(e)
  )) return __PRIVATE_validatePlainObject("Unsupported field value:", t, e), __PRIVATE_parseObject(e, t);
  if (e instanceof FieldValue)
    return function __PRIVATE_parseSentinelFieldValue(e2, t2) {
      if (!__PRIVATE_isWrite(t2.yu)) throw t2.Fu(`${e2._methodName}() can only be used with update() and set()`);
      if (!t2.path) throw t2.Fu(`${e2._methodName}() is not currently supported inside arrays`);
      const n = e2._toFieldTransform(t2);
      n && t2.fieldTransforms.push(n);
    }(e, t), null;
  if (void 0 === e && t.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    t.path && t.fieldMask.push(t.path), e instanceof Array
  ) {
    if (t.settings.bu && 4 !== t.yu) throw t.Fu("Nested arrays are not supported");
    return function __PRIVATE_parseArray(e2, t2) {
      const n = [];
      let r = 0;
      for (const i of e2) {
        let e3 = __PRIVATE_parseData(i, t2.vu(r));
        null == e3 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (e3 = {
          nullValue: "NULL_VALUE"
        }), n.push(e3), r++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    }(e, t);
  }
  return function __PRIVATE_parseScalarValue(e2, t2) {
    if (null === (e2 = getModularInstance(e2))) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof e2) return toNumber(t2.serializer, e2);
    if ("boolean" == typeof e2) return {
      booleanValue: e2
    };
    if ("string" == typeof e2) return {
      stringValue: e2
    };
    if (e2 instanceof Date) {
      const n = Timestamp.fromDate(e2);
      return {
        timestampValue: toTimestamp(t2.serializer, n)
      };
    }
    if (e2 instanceof Timestamp) {
      const n = new Timestamp(e2.seconds, 1e3 * Math.floor(e2.nanoseconds / 1e3));
      return {
        timestampValue: toTimestamp(t2.serializer, n)
      };
    }
    if (e2 instanceof GeoPoint) return {
      geoPointValue: {
        latitude: e2.latitude,
        longitude: e2.longitude
      }
    };
    if (e2 instanceof Bytes) return {
      bytesValue: __PRIVATE_toBytes(t2.serializer, e2._byteString)
    };
    if (e2 instanceof DocumentReference) {
      const n = t2.databaseId, r = e2.firestore._databaseId;
      if (!r.isEqual(n)) throw t2.Fu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: __PRIVATE_toResourceName(e2.firestore._databaseId || t2.databaseId, e2._key.path)
      };
    }
    throw t2.Fu(`Unsupported field value: ${__PRIVATE_valueDescription(e2)}`);
  }(e, t);
}
function __PRIVATE_parseObject(e, t) {
  const n = {};
  return isEmpty(e) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    t.path && t.path.length > 0 && t.fieldMask.push(t.path)
  ) : forEach(e, (e2, r) => {
    const i = __PRIVATE_parseData(r, t.Su(e2));
    null != i && (n[e2] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function __PRIVATE_looksLikeJsonObject(e) {
  return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Bytes || e instanceof DocumentReference || e instanceof FieldValue);
}
function __PRIVATE_validatePlainObject(e, t, n) {
  if (!__PRIVATE_looksLikeJsonObject(n) || !function __PRIVATE_isPlainObject(e2) {
    return "object" == typeof e2 && null !== e2 && (Object.getPrototypeOf(e2) === Object.prototype || null === Object.getPrototypeOf(e2));
  }(n)) {
    const r = __PRIVATE_valueDescription(n);
    throw "an object" === r ? t.Fu(e + " a custom object") : t.Fu(e + " " + r);
  }
}
function __PRIVATE_fieldPathFromArgument$1(e, t, n) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (t = getModularInstance(t)) instanceof FieldPath
  ) return t._internalPath;
  if ("string" == typeof t) return __PRIVATE_fieldPathFromDotSeparatedString(e, t);
  throw __PRIVATE_createError(
    "Field path arguments must be of type string or ",
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
}
var De = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(e, t, n) {
  if (t.search(De) >= 0) throw __PRIVATE_createError(
    `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
  try {
    return new FieldPath(...t.split("."))._internalPath;
  } catch (r) {
    throw __PRIVATE_createError(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  }
}
function __PRIVATE_createError(e, t, n, r, i) {
  const s = r && !r.isEmpty(), o = void 0 !== i;
  let _ = `Function ${t}() called with invalid data`;
  n && (_ += " (via `toFirestore()`)"), _ += ". ";
  let a = "";
  return (s || o) && (a += " (found", s && (a += ` in field ${r}`), o && (a += ` in document ${i}`), a += ")"), new FirestoreError(C.INVALID_ARGUMENT, _ + e + a);
}
function __PRIVATE_fieldMaskContains(e, t) {
  return e.some((e2) => e2.isEqual(t));
}
var DocumentSnapshot$1 = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(e, t, n, r, i) {
    this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new DocumentReference(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new QueryDocumentSnapshot$1(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e) {
    if (this._document) {
      const t = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e));
      if (null !== t) return this._userDataWriter.convertValue(t);
    }
  }
};
var QueryDocumentSnapshot$1 = class extends DocumentSnapshot$1 {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
function __PRIVATE_fieldPathFromArgument(e, t) {
  return "string" == typeof t ? __PRIVATE_fieldPathFromDotSeparatedString(e, t) : t instanceof FieldPath ? t._internalPath : t._delegate._internalPath;
}
function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e) {
  if ("L" === e.limitType && 0 === e.explicitOrderBy.length) throw new FirestoreError(C.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var AppliableConstraint = class {
};
var QueryConstraint = class extends AppliableConstraint {
};
function query(e, t, ...n) {
  let r = [];
  t instanceof AppliableConstraint && r.push(t), r = r.concat(n), function __PRIVATE_validateQueryConstraintArray(e2) {
    const t2 = e2.filter((e3) => e3 instanceof QueryCompositeFilterConstraint).length, n2 = e2.filter((e3) => e3 instanceof QueryFieldFilterConstraint).length;
    if (t2 > 1 || t2 > 0 && n2 > 0) throw new FirestoreError(C.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(r);
  for (const t2 of r) e = t2._apply(e);
  return e;
}
var QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, n) {
    super(), this._field = e, this._op = t, this._value = n, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(e, t, n) {
    return new _QueryFieldFilterConstraint(e, t, n);
  }
  _apply(e) {
    const t = this._parse(e);
    return __PRIVATE_validateNewFieldFilter(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t));
  }
  _parse(e) {
    const t = __PRIVATE_newUserDataReader(e.firestore), n = function __PRIVATE_newQueryFilter(e2, t2, n2, r, i, s, o) {
      let _;
      if (i.isKeyField()) {
        if ("array-contains" === s || "array-contains-any" === s) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid Query. You can't perform '${s}' queries on documentId().`);
        if ("in" === s || "not-in" === s) {
          __PRIVATE_validateDisjunctiveFilterElements(o, s);
          const t3 = [];
          for (const n3 of o) t3.push(__PRIVATE_parseDocumentIdValue(r, e2, n3));
          _ = {
            arrayValue: {
              values: t3
            }
          };
        } else _ = __PRIVATE_parseDocumentIdValue(r, e2, o);
      } else "in" !== s && "not-in" !== s && "array-contains-any" !== s || __PRIVATE_validateDisjunctiveFilterElements(o, s), _ = __PRIVATE_parseQueryValue(
        n2,
        t2,
        o,
        /* allowArrays= */
        "in" === s || "not-in" === s
      );
      return FieldFilter.create(i, s, _);
    }(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
    return n;
  }
};
function where(e, t, n) {
  const r = t, i = __PRIVATE_fieldPathFromArgument("where", e);
  return QueryFieldFilterConstraint._create(i, r, n);
}
var QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
  /**
   * @internal
   */
  constructor(e, t) {
    super(), this.type = e, this._queryConstraints = t;
  }
  static _create(e, t) {
    return new _QueryCompositeFilterConstraint(e, t);
  }
  _parse(e) {
    const t = this._queryConstraints.map((t2) => t2._parse(e)).filter((e2) => e2.getFilters().length > 0);
    return 1 === t.length ? t[0] : CompositeFilter.create(t, this._getOperator());
  }
  _apply(e) {
    const t = this._parse(e);
    return 0 === t.getFilters().length ? e : (function __PRIVATE_validateNewFilter(e2, t2) {
      let n = e2;
      const r = t2.getFlattenedFilters();
      for (const e3 of r) __PRIVATE_validateNewFieldFilter(n, e3), n = __PRIVATE_queryWithAddedFilter(n, e3);
    }(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
function or(...e) {
  return e.forEach((e2) => __PRIVATE_validateQueryFilterConstraint("or", e2)), QueryCompositeFilterConstraint._create("or", e);
}
function and(...e) {
  return e.forEach((e2) => __PRIVATE_validateQueryFilterConstraint("and", e2)), QueryCompositeFilterConstraint._create("and", e);
}
var QueryOrderByConstraint = class _QueryOrderByConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t) {
    super(), this._field = e, this._direction = t, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(e, t) {
    return new _QueryOrderByConstraint(e, t);
  }
  _apply(e) {
    const t = function __PRIVATE_newQueryOrderBy(e2, t2, n) {
      if (null !== e2.startAt) throw new FirestoreError(C.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== e2.endAt) throw new FirestoreError(C.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      return new OrderBy(t2, n);
    }(e._query, this._field, this._direction);
    return new Query(e.firestore, e.converter, function __PRIVATE_queryWithAddedOrderBy(e2, t2) {
      const n = e2.explicitOrderBy.concat([t2]);
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, n, e2.filters.slice(), e2.limit, e2.limitType, e2.startAt, e2.endAt);
    }(e._query, t));
  }
};
function orderBy(e, t = "asc") {
  const n = t, r = __PRIVATE_fieldPathFromArgument("orderBy", e);
  return QueryOrderByConstraint._create(r, n);
}
var QueryLimitConstraint = class _QueryLimitConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, n) {
    super(), this.type = e, this._limit = t, this._limitType = n;
  }
  static _create(e, t, n) {
    return new _QueryLimitConstraint(e, t, n);
  }
  _apply(e) {
    return new Query(e.firestore, e.converter, __PRIVATE_queryWithLimit(e._query, this._limit, this._limitType));
  }
};
function limit(e) {
  return __PRIVATE_validatePositiveNumber("limit", e), QueryLimitConstraint._create(
    "limit",
    e,
    "F"
    /* LimitType.First */
  );
}
function limitToLast(e) {
  return __PRIVATE_validatePositiveNumber("limitToLast", e), QueryLimitConstraint._create(
    "limitToLast",
    e,
    "L"
    /* LimitType.Last */
  );
}
var QueryStartAtConstraint = class _QueryStartAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, n) {
    super(), this.type = e, this._docOrFields = t, this._inclusive = n;
  }
  static _create(e, t, n) {
    return new _QueryStartAtConstraint(e, t, n);
  }
  _apply(e) {
    const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
    return new Query(e.firestore, e.converter, function __PRIVATE_queryWithStartAt(e2, t2) {
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, e2.explicitOrderBy.slice(), e2.filters.slice(), e2.limit, e2.limitType, t2, e2.endAt);
    }(e._query, t));
  }
};
function startAt(...e) {
  return QueryStartAtConstraint._create(
    "startAt",
    e,
    /*inclusive=*/
    true
  );
}
function startAfter(...e) {
  return QueryStartAtConstraint._create(
    "startAfter",
    e,
    /*inclusive=*/
    false
  );
}
var QueryEndAtConstraint = class _QueryEndAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, n) {
    super(), this.type = e, this._docOrFields = t, this._inclusive = n;
  }
  static _create(e, t, n) {
    return new _QueryEndAtConstraint(e, t, n);
  }
  _apply(e) {
    const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
    return new Query(e.firestore, e.converter, function __PRIVATE_queryWithEndAt(e2, t2) {
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, e2.explicitOrderBy.slice(), e2.filters.slice(), e2.limit, e2.limitType, e2.startAt, t2);
    }(e._query, t));
  }
};
function endBefore(...e) {
  return QueryEndAtConstraint._create(
    "endBefore",
    e,
    /*inclusive=*/
    false
  );
}
function endAt(...e) {
  return QueryEndAtConstraint._create(
    "endAt",
    e,
    /*inclusive=*/
    true
  );
}
function __PRIVATE_newQueryBoundFromDocOrFields(e, t, n, r) {
  if (n[0] = getModularInstance(n[0]), n[0] instanceof DocumentSnapshot$1) return function __PRIVATE_newQueryBoundFromDocument(e2, t2, n2, r2, i) {
    if (!r2) throw new FirestoreError(C.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n2}().`);
    const s = [];
    for (const n3 of __PRIVATE_queryNormalizedOrderBy(e2)) if (n3.field.isKeyField()) s.push(__PRIVATE_refValue(t2, r2.key));
    else {
      const e3 = r2.data.field(n3.field);
      if (__PRIVATE_isServerTimestamp(e3)) throw new FirestoreError(C.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n3.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
      if (null === e3) {
        const e4 = n3.field.canonicalString();
        throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${e4}' (used as the orderBy) does not exist.`);
      }
      s.push(e3);
    }
    return new Bound(s, i);
  }(e._query, e.firestore._databaseId, t, n[0]._document, r);
  {
    const i = __PRIVATE_newUserDataReader(e.firestore);
    return function __PRIVATE_newQueryBoundFromFields(e2, t2, n2, r2, i2, s) {
      const o = e2.explicitOrderBy;
      if (i2.length > o.length) throw new FirestoreError(C.INVALID_ARGUMENT, `Too many arguments provided to ${r2}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const _ = [];
      for (let s2 = 0; s2 < i2.length; s2++) {
        const a = i2[s2];
        if (o[s2].field.isKeyField()) {
          if ("string" != typeof a) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${r2}(), but got a ${typeof a}`);
          if (!__PRIVATE_isCollectionGroupQuery(e2) && -1 !== a.indexOf("/")) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r2}() must be a plain document ID, but '${a}' contains a slash.`);
          const n3 = e2.path.child(ResourcePath.fromString(a));
          if (!DocumentKey.isDocumentKey(n3)) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r2}() must result in a valid document path, but '${n3}' is not because it contains an odd number of segments.`);
          const i3 = new DocumentKey(n3);
          _.push(__PRIVATE_refValue(t2, i3));
        } else {
          const e3 = __PRIVATE_parseQueryValue(n2, r2, a);
          _.push(e3);
        }
      }
      return new Bound(_, s);
    }(e._query, e.firestore._databaseId, i, t, n, r);
  }
}
function __PRIVATE_parseDocumentIdValue(e, t, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n) throw new FirestoreError(C.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!__PRIVATE_isCollectionGroupQuery(t) && -1 !== n.indexOf("/")) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const r = t.path.child(ResourcePath.fromString(n));
    if (!DocumentKey.isDocumentKey(r)) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return __PRIVATE_refValue(e, new DocumentKey(r));
  }
  if (n instanceof DocumentReference) return __PRIVATE_refValue(e, n._key);
  throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(n)}.`);
}
function __PRIVATE_validateDisjunctiveFilterElements(e, t) {
  if (!Array.isArray(e) || 0 === e.length) throw new FirestoreError(C.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
function __PRIVATE_validateNewFieldFilter(e, t) {
  const n = function __PRIVATE_findOpInsideFilters(e2, t2) {
    for (const n2 of e2) for (const e3 of n2.getFlattenedFilters()) if (t2.indexOf(e3.op) >= 0) return e3.op;
    return null;
  }(e.filters, function __PRIVATE_conflictingOps(e2) {
    switch (e2) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(t.op));
  if (null !== n)
    throw n === t.op ? new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new FirestoreError(C.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);
}
function __PRIVATE_validateQueryFilterConstraint(e, t) {
  if (!(t instanceof QueryFieldFilterConstraint || t instanceof QueryCompositeFilterConstraint)) throw new FirestoreError(C.INVALID_ARGUMENT, `Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
var AbstractUserDataWriter = class {
  convertValue(e, t = "none") {
    switch (__PRIVATE_typeOrder(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 10:
        return this.convertObject(e.mapValue, t);
      default:
        throw fail();
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  /**
   * @internal
   */
  convertObjectMap(e, t = "none") {
    const n = {};
    return forEach(e, (e2, r) => {
      n[e2] = this.convertValue(r, t);
    }), n;
  }
  convertGeoPoint(e) {
    return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude), __PRIVATE_normalizeNumber(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((e2) => this.convertValue(e2, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const n = __PRIVATE_getPreviousValue(e);
        return null == n ? null : this.convertValue(n, t);
      case "estimate":
        return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = __PRIVATE_normalizeTimestamp(e);
    return new Timestamp(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const n = ResourcePath.fromString(e);
    __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(n));
    const r = new DatabaseId(n.get(1), n.get(3)), i = new DocumentKey(n.popFirst(5));
    return r.isEqual(t) || // TODO(b/64130202): Somehow support foreign references.
    __PRIVATE_logError(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), i;
  }
};
function __PRIVATE_applyFirestoreDataConverter(e, t, n) {
  let r;
  return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r;
}
var __PRIVATE_LiteUserDataWriter = class extends AbstractUserDataWriter {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new Bytes(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
};
function sum(e) {
  return new AggregateField("sum", __PRIVATE_fieldPathFromArgument$1("sum", e));
}
function average(e) {
  return new AggregateField("avg", __PRIVATE_fieldPathFromArgument$1("average", e));
}
function count() {
  return new AggregateField("count");
}
function aggregateFieldEqual(e, t) {
  var n, r;
  return e instanceof AggregateField && t instanceof AggregateField && e.aggregateType === t.aggregateType && (null === (n = e._internalFieldPath) || void 0 === n ? void 0 : n.canonicalString()) === (null === (r = t._internalFieldPath) || void 0 === r ? void 0 : r.canonicalString());
}
function aggregateQuerySnapshotEqual(e, t) {
  return queryEqual(e.query, t.query) && deepEqual(e.data(), t.data());
}
var SnapshotMetadata = class {
  /** @hideconstructor */
  constructor(e, t) {
    this.hasPendingWrites = e, this.fromCache = t;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
};
var DocumentSnapshot = class extends DocumentSnapshot$1 {
  /** @hideconstructor protected */
  constructor(e, t, n, r, i, s) {
    super(e, t, n, r, s), this._firestore = e, this._firestoreImpl = e, this.metadata = i;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e, t = {}) {
    if (this._document) {
      const n = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", e));
      if (null !== n) return this._userDataWriter.convertValue(n, t.serverTimestamps);
    }
  }
};
var QueryDocumentSnapshot = class extends DocumentSnapshot {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(e = {}) {
    return super.data(e);
  }
};
var QuerySnapshot = class {
  /** @hideconstructor */
  constructor(e, t, n, r) {
    this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new SnapshotMetadata(r.hasPendingWrites, r.fromCache), this.query = n;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const e = [];
    return this.forEach((t) => e.push(t)), e;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.size;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(e, t) {
    this._snapshot.docs.forEach((n) => {
      e.call(t, new QueryDocumentSnapshot(this._firestore, this._userDataWriter, n.key, n, new SnapshotMetadata(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges) throw new FirestoreError(C.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function __PRIVATE_changesFromSnapshot(e2, t2) {
      if (e2._snapshot.oldDocs.isEmpty()) {
        let t3 = 0;
        return e2._snapshot.docChanges.map((n) => {
          const r = new QueryDocumentSnapshot(e2._firestore, e2._userDataWriter, n.doc.key, n.doc, new SnapshotMetadata(e2._snapshot.mutatedKeys.has(n.doc.key), e2._snapshot.fromCache), e2.query.converter);
          return n.doc, {
            type: "added",
            doc: r,
            oldIndex: -1,
            newIndex: t3++
          };
        });
      }
      {
        let n = e2._snapshot.oldDocs;
        return e2._snapshot.docChanges.filter((e3) => t2 || 3 !== e3.type).map((t3) => {
          const r = new QueryDocumentSnapshot(e2._firestore, e2._userDataWriter, t3.doc.key, t3.doc, new SnapshotMetadata(e2._snapshot.mutatedKeys.has(t3.doc.key), e2._snapshot.fromCache), e2.query.converter);
          let i = -1, s = -1;
          return 0 !== t3.type && (i = n.indexOf(t3.doc.key), n = n.delete(t3.doc.key)), 1 !== t3.type && (n = n.add(t3.doc), s = n.indexOf(t3.doc.key)), {
            type: __PRIVATE_resultChangeType(t3.type),
            doc: r,
            oldIndex: i,
            newIndex: s
          };
        });
      }
    }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges;
  }
};
function __PRIVATE_resultChangeType(e) {
  switch (e) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return fail();
  }
}
function snapshotEqual(e, t) {
  return e instanceof DocumentSnapshot && t instanceof DocumentSnapshot ? e._firestore === t._firestore && e._key.isEqual(t._key) && (null === e._document ? null === t._document : e._document.isEqual(t._document)) && e._converter === t._converter : e instanceof QuerySnapshot && t instanceof QuerySnapshot && e._firestore === t._firestore && queryEqual(e.query, t.query) && e.metadata.isEqual(t.metadata) && e._snapshot.isEqual(t._snapshot);
}
function getDoc(e) {
  e = __PRIVATE_cast(e, DocumentReference);
  const t = __PRIVATE_cast(e.firestore, Firestore);
  return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(t), e._key).then((n) => __PRIVATE_convertToDocSnapshot(t, e, n));
}
var __PRIVATE_ExpUserDataWriter = class extends AbstractUserDataWriter {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new Bytes(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
};
function getDocFromCache(e) {
  e = __PRIVATE_cast(e, DocumentReference);
  const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
  return __PRIVATE_firestoreClientGetDocumentFromLocalCache(n, e._key).then((n2) => new DocumentSnapshot(t, r, e._key, n2, new SnapshotMetadata(
    null !== n2 && n2.hasLocalMutations,
    /* fromCache= */
    true
  ), e.converter));
}
function getDocFromServer(e) {
  e = __PRIVATE_cast(e, DocumentReference);
  const t = __PRIVATE_cast(e.firestore, Firestore);
  return __PRIVATE_firestoreClientGetDocumentViaSnapshotListener(ensureFirestoreConfigured(t), e._key, {
    source: "server"
  }).then((n) => __PRIVATE_convertToDocSnapshot(t, e, n));
}
function getDocs(e) {
  e = __PRIVATE_cast(e, Query);
  const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
  return __PRIVATE_validateHasExplicitOrderByForLimitToLast(e._query), __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n, e._query).then((n2) => new QuerySnapshot(t, r, e, n2));
}
function getDocsFromCache(e) {
  e = __PRIVATE_cast(e, Query);
  const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
  return __PRIVATE_firestoreClientGetDocumentsFromLocalCache(n, e._query).then((n2) => new QuerySnapshot(t, r, e, n2));
}
function getDocsFromServer(e) {
  e = __PRIVATE_cast(e, Query);
  const t = __PRIVATE_cast(e.firestore, Firestore), n = ensureFirestoreConfigured(t), r = new __PRIVATE_ExpUserDataWriter(t);
  return __PRIVATE_firestoreClientGetDocumentsViaSnapshotListener(n, e._query, {
    source: "server"
  }).then((n2) => new QuerySnapshot(t, r, e, n2));
}
function setDoc(e, t, n) {
  e = __PRIVATE_cast(e, DocumentReference);
  const r = __PRIVATE_cast(e.firestore, Firestore), i = __PRIVATE_applyFirestoreDataConverter(e.converter, t, n);
  return executeWrite(r, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(r), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, Precondition.none())]);
}
function updateDoc(e, t, n, ...r) {
  e = __PRIVATE_cast(e, DocumentReference);
  const i = __PRIVATE_cast(e.firestore, Firestore), s = __PRIVATE_newUserDataReader(i);
  let o;
  o = "string" == typeof // For Compat types, we have to "extract" the underlying types before
  // performing validation.
  (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(s, "updateDoc", e._key, t, n, r) : __PRIVATE_parseUpdateData(s, "updateDoc", e._key, t);
  return executeWrite(i, [o.toMutation(e._key, Precondition.exists(true))]);
}
function deleteDoc(e) {
  return executeWrite(__PRIVATE_cast(e.firestore, Firestore), [new __PRIVATE_DeleteMutation(e._key, Precondition.none())]);
}
function addDoc(e, t) {
  const n = __PRIVATE_cast(e.firestore, Firestore), r = doc(e), i = __PRIVATE_applyFirestoreDataConverter(e.converter, t);
  return executeWrite(n, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, Precondition.exists(false))]).then(() => r);
}
function onSnapshot(e, ...t) {
  var n, r, i;
  e = getModularInstance(e);
  let s = {
    includeMetadataChanges: false,
    source: "default"
  }, o = 0;
  "object" != typeof t[o] || __PRIVATE_isPartialObserver(t[o]) || (s = t[o], o++);
  const _ = {
    includeMetadataChanges: s.includeMetadataChanges,
    source: s.source
  };
  if (__PRIVATE_isPartialObserver(t[o])) {
    const e2 = t[o];
    t[o] = null === (n = e2.next) || void 0 === n ? void 0 : n.bind(e2), t[o + 1] = null === (r = e2.error) || void 0 === r ? void 0 : r.bind(e2), t[o + 2] = null === (i = e2.complete) || void 0 === i ? void 0 : i.bind(e2);
  }
  let a, u, c;
  if (e instanceof DocumentReference) u = __PRIVATE_cast(e.firestore, Firestore), c = __PRIVATE_newQueryForPath(e._key.path), a = {
    next: (n2) => {
      t[o] && t[o](__PRIVATE_convertToDocSnapshot(u, e, n2));
    },
    error: t[o + 1],
    complete: t[o + 2]
  };
  else {
    const n2 = __PRIVATE_cast(e, Query);
    u = __PRIVATE_cast(n2.firestore, Firestore), c = n2._query;
    const r2 = new __PRIVATE_ExpUserDataWriter(u);
    a = {
      next: (e2) => {
        t[o] && t[o](new QuerySnapshot(u, r2, n2, e2));
      },
      error: t[o + 1],
      complete: t[o + 2]
    }, __PRIVATE_validateHasExplicitOrderByForLimitToLast(e._query);
  }
  return function __PRIVATE_firestoreClientListen(e2, t2, n2, r2) {
    const i2 = new __PRIVATE_AsyncObserver(r2), s2 = new __PRIVATE_QueryListener(t2, i2, n2);
    return e2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return __PRIVATE_eventManagerListen(yield __PRIVATE_getEventManager(e2), s2);
    })), () => {
      i2.Ga(), e2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
        return __PRIVATE_eventManagerUnlisten(yield __PRIVATE_getEventManager(e2), s2);
      }));
    };
  }(ensureFirestoreConfigured(u), c, _, a);
}
function onSnapshotsInSync(e, t) {
  return __PRIVATE_firestoreClientAddSnapshotsInSyncListener(ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), __PRIVATE_isPartialObserver(t) ? t : {
    next: t
  });
}
function executeWrite(e, t) {
  return function __PRIVATE_firestoreClientWrite(e2, t2) {
    const n = new __PRIVATE_Deferred();
    return e2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      return __PRIVATE_syncEngineWrite(yield __PRIVATE_getSyncEngine(e2), t2, n);
    })), n.promise;
  }(ensureFirestoreConfigured(e), t);
}
function __PRIVATE_convertToDocSnapshot(e, t, n) {
  const r = n.docs.get(t._key), i = new __PRIVATE_ExpUserDataWriter(e);
  return new DocumentSnapshot(e, i, t._key, r, new SnapshotMetadata(n.hasPendingWrites, n.fromCache), t.converter);
}
function getCountFromServer(e) {
  return getAggregateFromServer(e, {
    count: count()
  });
}
function getAggregateFromServer(e, t) {
  const n = __PRIVATE_cast(e.firestore, Firestore), r = ensureFirestoreConfigured(n), i = __PRIVATE_mapToArray(t, (e2, t2) => new __PRIVATE_AggregateImpl(t2, e2.aggregateType, e2._internalFieldPath));
  return __PRIVATE_firestoreClientRunAggregateQuery(r, e._query, i).then((t2) => (
    /**
    * Converts the core aggregation result to an `AggregateQuerySnapshot`
    * that can be returned to the consumer.
    * @param query
    * @param aggregateResult Core aggregation result
    * @internal
    */
    function __PRIVATE_convertToAggregateQuerySnapshot(e2, t3, n2) {
      const r2 = new __PRIVATE_ExpUserDataWriter(e2);
      return new AggregateQuerySnapshot(t3, r2, n2);
    }(n, e, t2)
  ));
}
var __PRIVATE_MemoryLocalCacheImpl = class {
  constructor(e) {
    this.kind = "memory", this._onlineComponentProvider = new OnlineComponentProvider(), (null == e ? void 0 : e.garbageCollector) ? this._offlineComponentProvider = e.garbageCollector._offlineComponentProvider : this._offlineComponentProvider = new MemoryOfflineComponentProvider();
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var __PRIVATE_PersistentLocalCacheImpl = class {
  constructor(e) {
    let t;
    this.kind = "persistent", (null == e ? void 0 : e.tabManager) ? (e.tabManager._initialize(e), t = e.tabManager) : (t = persistentSingleTabManager(void 0), t._initialize(e)), this._onlineComponentProvider = t._onlineComponentProvider, this._offlineComponentProvider = t._offlineComponentProvider;
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var __PRIVATE_MemoryEagerGarbageCollectorImpl = class {
  constructor() {
    this.kind = "memoryEager", this._offlineComponentProvider = new MemoryOfflineComponentProvider();
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
var __PRIVATE_MemoryLruGarbageCollectorImpl = class {
  constructor(e) {
    this.kind = "memoryLru", this._offlineComponentProvider = new __PRIVATE_LruGcMemoryOfflineComponentProvider(e);
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
};
function memoryEagerGarbageCollector() {
  return new __PRIVATE_MemoryEagerGarbageCollectorImpl();
}
function memoryLruGarbageCollector(e) {
  return new __PRIVATE_MemoryLruGarbageCollectorImpl(null == e ? void 0 : e.cacheSizeBytes);
}
function memoryLocalCache(e) {
  return new __PRIVATE_MemoryLocalCacheImpl(e);
}
function persistentLocalCache(e) {
  return new __PRIVATE_PersistentLocalCacheImpl(e);
}
var __PRIVATE_SingleTabManagerImpl = class {
  constructor(e) {
    this.forceOwnership = e, this.kind = "persistentSingleTab";
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
  /**
   * @internal
   */
  _initialize(e) {
    this._onlineComponentProvider = new OnlineComponentProvider(), this._offlineComponentProvider = new __PRIVATE_IndexedDbOfflineComponentProvider(this._onlineComponentProvider, null == e ? void 0 : e.cacheSizeBytes, this.forceOwnership);
  }
};
var __PRIVATE_MultiTabManagerImpl = class {
  constructor() {
    this.kind = "PersistentMultipleTab";
  }
  toJSON() {
    return {
      kind: this.kind
    };
  }
  /**
   * @internal
   */
  _initialize(e) {
    this._onlineComponentProvider = new OnlineComponentProvider(), this._offlineComponentProvider = new __PRIVATE_MultiTabOfflineComponentProvider(this._onlineComponentProvider, null == e ? void 0 : e.cacheSizeBytes);
  }
};
function persistentSingleTabManager(e) {
  return new __PRIVATE_SingleTabManagerImpl(null == e ? void 0 : e.forceOwnership);
}
function persistentMultipleTabManager() {
  return new __PRIVATE_MultiTabManagerImpl();
}
var Ce = {
  maxAttempts: 5
};
var WriteBatch = class {
  /** @hideconstructor */
  constructor(e, t) {
    this._firestore = e, this._commitHandler = t, this._mutations = [], this._committed = false, this._dataReader = __PRIVATE_newUserDataReader(e);
  }
  set(e, t, n) {
    this._verifyNotCommitted();
    const r = __PRIVATE_validateReference(e, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(r.converter, t, n), s = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", r._key, i, null !== r.converter, n);
    return this._mutations.push(s.toMutation(r._key, Precondition.none())), this;
  }
  update(e, t, n, ...r) {
    this._verifyNotCommitted();
    const i = __PRIVATE_validateReference(e, this._firestore);
    let s;
    return s = "string" == typeof (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", i._key, t, n, r) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", i._key, t), this._mutations.push(s.toMutation(i._key, Precondition.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(e) {
    this._verifyNotCommitted();
    const t = __PRIVATE_validateReference(e, this._firestore);
    return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(t._key, Precondition.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed) throw new FirestoreError(C.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function __PRIVATE_validateReference(e, t) {
  if ((e = getModularInstance(e)).firestore !== t) throw new FirestoreError(C.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return e;
}
var Transaction = class extends class Transaction$1 {
  /** @hideconstructor */
  constructor(e, t) {
    this._firestore = e, this._transaction = t, this._dataReader = __PRIVATE_newUserDataReader(e);
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(e) {
    const t = __PRIVATE_validateReference(e, this._firestore), n = new __PRIVATE_LiteUserDataWriter(this._firestore);
    return this._transaction.lookup([t._key]).then((e2) => {
      if (!e2 || 1 !== e2.length) return fail();
      const r = e2[0];
      if (r.isFoundDocument()) return new DocumentSnapshot$1(this._firestore, n, r.key, r, t.converter);
      if (r.isNoDocument()) return new DocumentSnapshot$1(this._firestore, n, t._key, null, t.converter);
      throw fail();
    });
  }
  set(e, t, n) {
    const r = __PRIVATE_validateReference(e, this._firestore), i = __PRIVATE_applyFirestoreDataConverter(r.converter, t, n), s = __PRIVATE_parseSetData(this._dataReader, "Transaction.set", r._key, i, null !== r.converter, n);
    return this._transaction.set(r._key, s), this;
  }
  update(e, t, n, ...r) {
    const i = __PRIVATE_validateReference(e, this._firestore);
    let s;
    return s = "string" == typeof (t = getModularInstance(t)) || t instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "Transaction.update", i._key, t, n, r) : __PRIVATE_parseUpdateData(this._dataReader, "Transaction.update", i._key, t), this._transaction.update(i._key, s), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  delete(e) {
    const t = __PRIVATE_validateReference(e, this._firestore);
    return this._transaction.delete(t._key), this;
  }
} {
  // This class implements the same logic as the Transaction API in the Lite SDK
  // but is subclassed in order to return its own DocumentSnapshot types.
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this._firestore = e;
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(e) {
    const t = __PRIVATE_validateReference(e, this._firestore), n = new __PRIVATE_ExpUserDataWriter(this._firestore);
    return super.get(e).then((e2) => new DocumentSnapshot(this._firestore, n, t._key, e2._document, new SnapshotMetadata(
      /* hasPendingWrites= */
      false,
      /* fromCache= */
      false
    ), t.converter));
  }
};
function runTransaction(e, t, n) {
  e = __PRIVATE_cast(e, Firestore);
  const r = Object.assign(Object.assign({}, Ce), n);
  !function __PRIVATE_validateTransactionOptions(e2) {
    if (e2.maxAttempts < 1) throw new FirestoreError(C.INVALID_ARGUMENT, "Max attempts must be at least 1");
  }(r);
  return function __PRIVATE_firestoreClientTransaction(e2, t2, n2) {
    const r2 = new __PRIVATE_Deferred();
    return e2.asyncQueue.enqueueAndForget(() => __async(this, null, function* () {
      const i = yield __PRIVATE_getDatastore(e2);
      new __PRIVATE_TransactionRunner(e2.asyncQueue, i, n2, t2, r2).nu();
    })), r2.promise;
  }(ensureFirestoreConfigured(e), (n2) => t(new Transaction(e, n2)), r);
}
function deleteField() {
  return new __PRIVATE_DeleteFieldValueImpl("deleteField");
}
function serverTimestamp() {
  return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
}
function arrayUnion(...e) {
  return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", e);
}
function arrayRemove(...e) {
  return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", e);
}
function increment(e) {
  return new __PRIVATE_NumericIncrementFieldValueImpl("increment", e);
}
function writeBatch(e) {
  return ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore)), new WriteBatch(e, (t) => executeWrite(e, t));
}
function setIndexConfiguration(e, t) {
  var n;
  const r = ensureFirestoreConfigured(e = __PRIVATE_cast(e, Firestore));
  if (!r._uninitializedComponentsProvider || "memory" === (null === (n = r._uninitializedComponentsProvider) || void 0 === n ? void 0 : n._offlineKind))
    return __PRIVATE_logWarn("Cannot enable indexes when persistence is disabled"), Promise.resolve();
  const i = function __PRIVATE_parseIndexes(e2) {
    const t2 = "string" == typeof e2 ? function __PRIVATE_tryParseJson(e3) {
      try {
        return JSON.parse(e3);
      } catch (e4) {
        throw new FirestoreError(C.INVALID_ARGUMENT, "Failed to parse JSON: " + (null == e4 ? void 0 : e4.message));
      }
    }(e2) : e2, n2 = [];
    if (Array.isArray(t2.indexes)) for (const e3 of t2.indexes) {
      const t3 = __PRIVATE_tryGetString(e3, "collectionGroup"), r2 = [];
      if (Array.isArray(e3.fields)) for (const t4 of e3.fields) {
        const e4 = __PRIVATE_fieldPathFromDotSeparatedString("setIndexConfiguration", __PRIVATE_tryGetString(t4, "fieldPath"));
        "CONTAINS" === t4.arrayConfig ? r2.push(new IndexSegment(
          e4,
          2
          /* IndexKind.CONTAINS */
        )) : "ASCENDING" === t4.order ? r2.push(new IndexSegment(
          e4,
          0
          /* IndexKind.ASCENDING */
        )) : "DESCENDING" === t4.order && r2.push(new IndexSegment(
          e4,
          1
          /* IndexKind.DESCENDING */
        ));
      }
      n2.push(new FieldIndex(FieldIndex.UNKNOWN_ID, t3, r2, IndexState.empty()));
    }
    return n2;
  }(t);
  return __PRIVATE_firestoreClientSetIndexConfiguration(r, i);
}
function __PRIVATE_tryGetString(e, t) {
  if ("string" != typeof e[t]) throw new FirestoreError(C.INVALID_ARGUMENT, "Missing string value for: " + t);
  return e[t];
}
var PersistentCacheIndexManager = class {
  /** @hideconstructor */
  constructor(e) {
    this._client = e, /** A type string to uniquely identify instances of this class. */
    this.type = "PersistentCacheIndexManager";
  }
};
function getPersistentCacheIndexManager(e) {
  var t;
  e = __PRIVATE_cast(e, Firestore);
  const n = ve.get(e);
  if (n) return n;
  const r = ensureFirestoreConfigured(e);
  if ("persistent" !== (null === (t = r._uninitializedComponentsProvider) || void 0 === t ? void 0 : t._offlineKind)) return null;
  const i = new PersistentCacheIndexManager(r);
  return ve.set(e, i), i;
}
function enablePersistentCacheIndexAutoCreation(e) {
  __PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, true);
}
function disablePersistentCacheIndexAutoCreation(e) {
  __PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, false);
}
function deleteAllPersistentCacheIndexes(e) {
  e._client.verifyNotTerminated();
  __PRIVATE_firestoreClientDeleteAllFieldIndexes(e._client).then((e2) => __PRIVATE_logDebug("deleting all persistent cache indexes succeeded")).catch((e2) => __PRIVATE_logWarn("deleting all persistent cache indexes failed", e2));
}
function __PRIVATE_setPersistentCacheIndexAutoCreationEnabled(e, t) {
  e._client.verifyNotTerminated();
  __PRIVATE_firestoreClientSetPersistentCacheIndexAutoCreationEnabled(e._client, t).then((e2) => __PRIVATE_logDebug(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch((e2) => __PRIVATE_logWarn(`setting persistent cache index auto creation isEnabled=${t} failed`, e2));
}
var ve = /* @__PURE__ */ new WeakMap();
function _internalQueryToProtoQueryTarget(e) {
  var t;
  const n = null === (t = ensureFirestoreConfigured(__PRIVATE_cast(e.firestore, Firestore))._onlineComponents) || void 0 === t ? void 0 : t.datastore.serializer;
  return void 0 === n ? null : __PRIVATE_toQueryTarget(n, __PRIVATE_queryToTarget(e._query))._t;
}
function _internalAggregationQueryToProtoRunAggregationQueryRequest(e, t) {
  var n;
  const r = __PRIVATE_mapToArray(t, (e2, t2) => new __PRIVATE_AggregateImpl(t2, e2.aggregateType, e2._internalFieldPath)), i = null === (n = ensureFirestoreConfigured(__PRIVATE_cast(e.firestore, Firestore))._onlineComponents) || void 0 === n ? void 0 : n.datastore.serializer;
  return void 0 === i ? null : __PRIVATE_toRunAggregationQueryRequest(
    i,
    __PRIVATE_queryToAggregateTarget(e._query),
    r,
    /* skipAliasing= */
    true
  ).request;
}
var TestingHooks = class {
  constructor() {
    throw new Error("instances of this class should not be created");
  }
  /**
   * Registers a callback to be notified when an existence filter mismatch
   * occurs in the Watch listen stream.
   *
   * The relative order in which callbacks are notified is unspecified; do not
   * rely on any particular ordering. If a given callback is registered multiple
   * times then it will be notified multiple times, once per registration.
   *
   * @param callback the callback to invoke upon existence filter mismatch.
   *
   * @return a function that, when called, unregisters the given callback; only
   * the first invocation of the returned function does anything; all subsequent
   * invocations do nothing.
   */
  static onExistenceFilterMismatch(e) {
    return __PRIVATE_TestingHooksSpiImpl.instance.onExistenceFilterMismatch(e);
  }
};
var __PRIVATE_TestingHooksSpiImpl = class ___PRIVATE_TestingHooksSpiImpl {
  constructor() {
    this.Bu = /* @__PURE__ */ new Map();
  }
  static get instance() {
    return Fe || (Fe = new ___PRIVATE_TestingHooksSpiImpl(), function __PRIVATE_setTestingHooksSpi(e) {
      if (Pe) throw new Error("a TestingHooksSpi instance is already set");
      Pe = e;
    }(Fe)), Fe;
  }
  et(e) {
    this.Bu.forEach((t) => t(e));
  }
  onExistenceFilterMismatch(e) {
    const t = Symbol(), n = this.Bu;
    return n.set(t, e), () => n.delete(t);
  }
};
var Fe = null;
!function __PRIVATE_registerFirestore(e, t = true) {
  !function __PRIVATE_setSDKVersion(e2) {
    b = e2;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (e2, {
    instanceIdentifier: n,
    options: r
  }) => {
    const i = e2.getProvider("app").getImmediate(), s = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e2.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(e2.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(e3, t2) {
      if (!Object.prototype.hasOwnProperty.apply(e3.options, ["projectId"])) throw new FirestoreError(C.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new DatabaseId(e3.options.projectId, t2);
    }(i, n), i);
    return r = Object.assign({
      useFetchStreams: t
    }, r), s._setSettings(r), s;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(S, "4.6.5", e), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  registerVersion(S, "4.6.5", "esm2017");
}();

export {
  setLogLevel,
  __PRIVATE_logWarn,
  __PRIVATE_debugAssert,
  FirestoreError,
  __PRIVATE_EmptyAuthCredentialsProvider,
  __PRIVATE_EmptyAppCheckTokenProvider,
  __PRIVATE_AutoId,
  Timestamp,
  FieldPath$1,
  DocumentKey,
  __PRIVATE_isBase64Available,
  ByteString,
  DatabaseId,
  __PRIVATE_validateIsNotUsedTogether,
  __PRIVATE_cast,
  connectFirestoreEmulator,
  Query,
  DocumentReference,
  CollectionReference,
  collection,
  collectionGroup,
  doc,
  refEqual,
  queryEqual,
  LoadBundleTask,
  Se,
  initializeFirestore,
  getFirestore,
  ensureFirestoreConfigured,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  clearIndexedDbPersistence,
  waitForPendingWrites,
  enableNetwork,
  disableNetwork,
  terminate,
  loadBundle,
  namedQuery,
  AggregateField,
  AggregateQuerySnapshot,
  Bytes,
  FieldPath,
  documentId,
  FieldValue,
  GeoPoint,
  QueryConstraint,
  query,
  QueryFieldFilterConstraint,
  where,
  QueryCompositeFilterConstraint,
  or,
  and,
  QueryOrderByConstraint,
  orderBy,
  QueryLimitConstraint,
  limit,
  limitToLast,
  QueryStartAtConstraint,
  startAt,
  startAfter,
  QueryEndAtConstraint,
  endBefore,
  endAt,
  AbstractUserDataWriter,
  sum,
  average,
  count,
  aggregateFieldEqual,
  aggregateQuerySnapshotEqual,
  SnapshotMetadata,
  DocumentSnapshot,
  QueryDocumentSnapshot,
  QuerySnapshot,
  snapshotEqual,
  getDoc,
  getDocFromCache,
  getDocFromServer,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  onSnapshot,
  onSnapshotsInSync,
  executeWrite,
  getCountFromServer,
  getAggregateFromServer,
  memoryEagerGarbageCollector,
  memoryLruGarbageCollector,
  memoryLocalCache,
  persistentLocalCache,
  persistentSingleTabManager,
  persistentMultipleTabManager,
  WriteBatch,
  Transaction,
  runTransaction,
  deleteField,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  writeBatch,
  setIndexConfiguration,
  PersistentCacheIndexManager,
  getPersistentCacheIndexManager,
  enablePersistentCacheIndexAutoCreation,
  disablePersistentCacheIndexAutoCreation,
  deleteAllPersistentCacheIndexes,
  _internalQueryToProtoQueryTarget,
  _internalAggregationQueryToProtoRunAggregationQueryRequest,
  TestingHooks
};
/*! Bundled license information:

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
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
   * Copyright 2022 Google LLC
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
  (**
   * @license
   * Copyright 2024 Google LLC
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
//# sourceMappingURL=chunk-FB6SVY76.js.map
