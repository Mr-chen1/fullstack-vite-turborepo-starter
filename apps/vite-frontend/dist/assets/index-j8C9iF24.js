var RC = Object.defineProperty;
var Ev = (t) => {
  throw TypeError(t);
};
var AC = (t, a, r) => (a in t ? RC(t, a, {enumerable: !0, configurable: !0, writable: !0, value: r}) : (t[a] = r));
var ar = (t, a, r) => AC(t, typeof a != 'symbol' ? a + '' : a, r),
  Gd = (t, a, r) => a.has(t) || Ev('Cannot ' + r);
var W = (t, a, r) => (Gd(t, a, 'read from private field'), r ? r.call(t) : a.get(t)),
  We = (t, a, r) =>
    a.has(t) ? Ev('Cannot add the same private member more than once') : a instanceof WeakSet ? a.add(t) : a.set(t, r),
  je = (t, a, r, l) => (Gd(t, a, 'write to private field'), l ? l.call(t, r) : a.set(t, r), r),
  tn = (t, a, r) => (Gd(t, a, 'access private method'), r);
var zu = (t, a, r, l) => ({
  set _(s) {
    je(t, a, s, r);
  },
  get _() {
    return W(t, a, l);
  },
});
function DC(t, a) {
  for (var r = 0; r < a.length; r++) {
    const l = a[r];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const s in l)
        if (s !== 'default' && !(s in t)) {
          const u = Object.getOwnPropertyDescriptor(l, s);
          u && Object.defineProperty(t, s, u.get ? u : {enumerable: !0, get: () => l[s]});
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}));
}
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === 'childList')
        for (const c of u.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && l(c);
  }).observe(document, {childList: !0, subtree: !0});
  function r(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = r(s);
    fetch(s.href, u);
  }
})();
var lz =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function gs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var Kd = {exports: {}},
  $o = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cv;
function MC() {
  if (Cv) return $o;
  Cv = 1;
  var t = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
  function r(l, s, u) {
    var c = null;
    if ((u !== void 0 && (c = '' + u), s.key !== void 0 && (c = '' + s.key), 'key' in s)) {
      u = {};
      for (var d in s) d !== 'key' && (u[d] = s[d]);
    } else u = s;
    return ((s = u.ref), {$$typeof: t, type: l, key: c, ref: s !== void 0 ? s : null, props: u});
  }
  return (($o.Fragment = a), ($o.jsx = r), ($o.jsxs = r), $o);
}
var Tv;
function NC() {
  return (Tv || ((Tv = 1), (Kd.exports = MC())), Kd.exports);
}
var j = NC(),
  Xd = {exports: {}},
  Be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ov;
function _C() {
  if (Ov) return Be;
  Ov = 1;
  var t = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    g = Symbol.for('react.activity'),
    S = Symbol.iterator;
  function x(D) {
    return D === null || typeof D != 'object'
      ? null
      : ((D = (S && D[S]) || D['@@iterator']), typeof D == 'function' ? D : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    T = {};
  function R(D, K, X) {
    ((this.props = D), (this.context = K), (this.refs = T), (this.updater = X || C));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (D, K) {
      if (typeof D != 'object' && typeof D != 'function' && D != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, D, K, 'setState');
    }),
    (R.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, 'forceUpdate');
    }));
  function A() {}
  A.prototype = R.prototype;
  function _(D, K, X) {
    ((this.props = D), (this.context = K), (this.refs = T), (this.updater = X || C));
  }
  var z = (_.prototype = new A());
  ((z.constructor = _), w(z, R.prototype), (z.isPureReactComponent = !0));
  var $ = Array.isArray;
  function I() {}
  var O = {H: null, A: null, T: null, S: null},
    P = Object.prototype.hasOwnProperty;
  function Z(D, K, X) {
    var ee = X.ref;
    return {$$typeof: t, type: D, key: K, ref: ee !== void 0 ? ee : null, props: X};
  }
  function se(D, K) {
    return Z(D.type, K, D.props);
  }
  function pe(D) {
    return typeof D == 'object' && D !== null && D.$$typeof === t;
  }
  function le(D) {
    var K = {'=': '=0', ':': '=2'};
    return (
      '$' +
      D.replace(/[=:]/g, function (X) {
        return K[X];
      })
    );
  }
  var ce = /\/+/g;
  function ie(D, K) {
    return typeof D == 'object' && D !== null && D.key != null ? le('' + D.key) : K.toString(36);
  }
  function he(D) {
    switch (D.status) {
      case 'fulfilled':
        return D.value;
      case 'rejected':
        throw D.reason;
      default:
        switch (
          (typeof D.status == 'string'
            ? D.then(I, I)
            : ((D.status = 'pending'),
              D.then(
                function (K) {
                  D.status === 'pending' && ((D.status = 'fulfilled'), (D.value = K));
                },
                function (K) {
                  D.status === 'pending' && ((D.status = 'rejected'), (D.reason = K));
                },
              )),
          D.status)
        ) {
          case 'fulfilled':
            return D.value;
          case 'rejected':
            throw D.reason;
        }
    }
    throw D;
  }
  function N(D, K, X, ee, ue) {
    var be = typeof D;
    (be === 'undefined' || be === 'boolean') && (D = null);
    var re = !1;
    if (D === null) re = !0;
    else
      switch (be) {
        case 'bigint':
        case 'string':
        case 'number':
          re = !0;
          break;
        case 'object':
          switch (D.$$typeof) {
            case t:
            case a:
              re = !0;
              break;
            case y:
              return ((re = D._init), N(re(D._payload), K, X, ee, ue));
          }
      }
    if (re)
      return (
        (ue = ue(D)),
        (re = ee === '' ? '.' + ie(D, 0) : ee),
        $(ue)
          ? ((X = ''),
            re != null && (X = re.replace(ce, '$&/') + '/'),
            N(ue, K, X, '', function (Ue) {
              return Ue;
            }))
          : ue != null &&
            (pe(ue) &&
              (ue = se(
                ue,
                X + (ue.key == null || (D && D.key === ue.key) ? '' : ('' + ue.key).replace(ce, '$&/') + '/') + re,
              )),
            K.push(ue)),
        1
      );
    re = 0;
    var ye = ee === '' ? '.' : ee + ':';
    if ($(D)) for (var Me = 0; Me < D.length; Me++) ((ee = D[Me]), (be = ye + ie(ee, Me)), (re += N(ee, K, X, be, ue)));
    else if (((Me = x(D)), typeof Me == 'function'))
      for (D = Me.call(D), Me = 0; !(ee = D.next()).done; )
        ((ee = ee.value), (be = ye + ie(ee, Me++)), (re += N(ee, K, X, be, ue)));
    else if (be === 'object') {
      if (typeof D.then == 'function') return N(he(D), K, X, ee, ue);
      throw (
        (K = String(D)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (K === '[object Object]' ? 'object with keys {' + Object.keys(D).join(', ') + '}' : K) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return re;
  }
  function V(D, K, X) {
    if (D == null) return D;
    var ee = [],
      ue = 0;
    return (
      N(D, ee, '', '', function (be) {
        return K.call(X, be, ue++);
      }),
      ee
    );
  }
  function B(D) {
    if (D._status === -1) {
      var K = D._result;
      ((K = K()),
        K.then(
          function (X) {
            (D._status === 0 || D._status === -1) && ((D._status = 1), (D._result = X));
          },
          function (X) {
            (D._status === 0 || D._status === -1) && ((D._status = 2), (D._result = X));
          },
        ),
        D._status === -1 && ((D._status = 0), (D._result = K)));
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var fe =
      typeof reportError == 'function'
        ? reportError
        : function (D) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var K = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof D == 'object' && D !== null && typeof D.message == 'string' ? String(D.message) : String(D),
                error: D,
              });
              if (!window.dispatchEvent(K)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', D);
              return;
            }
            console.error(D);
          },
    ge = {
      map: V,
      forEach: function (D, K, X) {
        V(
          D,
          function () {
            K.apply(this, arguments);
          },
          X,
        );
      },
      count: function (D) {
        var K = 0;
        return (
          V(D, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (D) {
        return (
          V(D, function (K) {
            return K;
          }) || []
        );
      },
      only: function (D) {
        if (!pe(D)) throw Error('React.Children.only expected to receive a single React element child.');
        return D;
      },
    };
  return (
    (Be.Activity = g),
    (Be.Children = ge),
    (Be.Component = R),
    (Be.Fragment = r),
    (Be.Profiler = s),
    (Be.PureComponent = _),
    (Be.StrictMode = l),
    (Be.Suspense = m),
    (Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (D) {
        return O.H.useMemoCache(D);
      },
    }),
    (Be.cache = function (D) {
      return function () {
        return D.apply(null, arguments);
      };
    }),
    (Be.cacheSignal = function () {
      return null;
    }),
    (Be.cloneElement = function (D, K, X) {
      if (D == null) throw Error('The argument must be a React element, but you passed ' + D + '.');
      var ee = w({}, D.props),
        ue = D.key;
      if (K != null)
        for (be in (K.key !== void 0 && (ue = '' + K.key), K))
          !P.call(K, be) ||
            be === 'key' ||
            be === '__self' ||
            be === '__source' ||
            (be === 'ref' && K.ref === void 0) ||
            (ee[be] = K[be]);
      var be = arguments.length - 2;
      if (be === 1) ee.children = X;
      else if (1 < be) {
        for (var re = Array(be), ye = 0; ye < be; ye++) re[ye] = arguments[ye + 2];
        ee.children = re;
      }
      return Z(D.type, ue, ee);
    }),
    (Be.createContext = function (D) {
      return (
        (D = {$$typeof: c, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null}),
        (D.Provider = D),
        (D.Consumer = {$$typeof: u, _context: D}),
        D
      );
    }),
    (Be.createElement = function (D, K, X) {
      var ee,
        ue = {},
        be = null;
      if (K != null)
        for (ee in (K.key !== void 0 && (be = '' + K.key), K))
          P.call(K, ee) && ee !== 'key' && ee !== '__self' && ee !== '__source' && (ue[ee] = K[ee]);
      var re = arguments.length - 2;
      if (re === 1) ue.children = X;
      else if (1 < re) {
        for (var ye = Array(re), Me = 0; Me < re; Me++) ye[Me] = arguments[Me + 2];
        ue.children = ye;
      }
      if (D && D.defaultProps) for (ee in ((re = D.defaultProps), re)) ue[ee] === void 0 && (ue[ee] = re[ee]);
      return Z(D, be, ue);
    }),
    (Be.createRef = function () {
      return {current: null};
    }),
    (Be.forwardRef = function (D) {
      return {$$typeof: d, render: D};
    }),
    (Be.isValidElement = pe),
    (Be.lazy = function (D) {
      return {$$typeof: y, _payload: {_status: -1, _result: D}, _init: B};
    }),
    (Be.memo = function (D, K) {
      return {$$typeof: h, type: D, compare: K === void 0 ? null : K};
    }),
    (Be.startTransition = function (D) {
      var K = O.T,
        X = {};
      O.T = X;
      try {
        var ee = D(),
          ue = O.S;
        (ue !== null && ue(X, ee),
          typeof ee == 'object' && ee !== null && typeof ee.then == 'function' && ee.then(I, fe));
      } catch (be) {
        fe(be);
      } finally {
        (K !== null && X.types !== null && (K.types = X.types), (O.T = K));
      }
    }),
    (Be.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Be.use = function (D) {
      return O.H.use(D);
    }),
    (Be.useActionState = function (D, K, X) {
      return O.H.useActionState(D, K, X);
    }),
    (Be.useCallback = function (D, K) {
      return O.H.useCallback(D, K);
    }),
    (Be.useContext = function (D) {
      return O.H.useContext(D);
    }),
    (Be.useDebugValue = function () {}),
    (Be.useDeferredValue = function (D, K) {
      return O.H.useDeferredValue(D, K);
    }),
    (Be.useEffect = function (D, K) {
      return O.H.useEffect(D, K);
    }),
    (Be.useEffectEvent = function (D) {
      return O.H.useEffectEvent(D);
    }),
    (Be.useId = function () {
      return O.H.useId();
    }),
    (Be.useImperativeHandle = function (D, K, X) {
      return O.H.useImperativeHandle(D, K, X);
    }),
    (Be.useInsertionEffect = function (D, K) {
      return O.H.useInsertionEffect(D, K);
    }),
    (Be.useLayoutEffect = function (D, K) {
      return O.H.useLayoutEffect(D, K);
    }),
    (Be.useMemo = function (D, K) {
      return O.H.useMemo(D, K);
    }),
    (Be.useOptimistic = function (D, K) {
      return O.H.useOptimistic(D, K);
    }),
    (Be.useReducer = function (D, K, X) {
      return O.H.useReducer(D, K, X);
    }),
    (Be.useRef = function (D) {
      return O.H.useRef(D);
    }),
    (Be.useState = function (D) {
      return O.H.useState(D);
    }),
    (Be.useSyncExternalStore = function (D, K, X) {
      return O.H.useSyncExternalStore(D, K, X);
    }),
    (Be.useTransition = function () {
      return O.H.useTransition();
    }),
    (Be.version = '19.2.4'),
    Be
  );
}
var Rv;
function bc() {
  return (Rv || ((Rv = 1), (Xd.exports = _C())), Xd.exports);
}
var b = bc();
const oe = gs(b),
  Sc = DC({__proto__: null, default: oe}, [b]);
var Qd = {exports: {}},
  Fo = {},
  Id = {exports: {}},
  Zd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Av;
function LC() {
  return (
    Av ||
      ((Av = 1),
      (function (t) {
        function a(N, V) {
          var B = N.length;
          N.push(V);
          e: for (; 0 < B; ) {
            var fe = (B - 1) >>> 1,
              ge = N[fe];
            if (0 < s(ge, V)) ((N[fe] = V), (N[B] = ge), (B = fe));
            else break e;
          }
        }
        function r(N) {
          return N.length === 0 ? null : N[0];
        }
        function l(N) {
          if (N.length === 0) return null;
          var V = N[0],
            B = N.pop();
          if (B !== V) {
            N[0] = B;
            e: for (var fe = 0, ge = N.length, D = ge >>> 1; fe < D; ) {
              var K = 2 * (fe + 1) - 1,
                X = N[K],
                ee = K + 1,
                ue = N[ee];
              if (0 > s(X, B))
                ee < ge && 0 > s(ue, X) ? ((N[fe] = ue), (N[ee] = B), (fe = ee)) : ((N[fe] = X), (N[K] = B), (fe = K));
              else if (ee < ge && 0 > s(ue, B)) ((N[fe] = ue), (N[ee] = B), (fe = ee));
              else break e;
            }
          }
          return V;
        }
        function s(N, V) {
          var B = N.sortIndex - V.sortIndex;
          return B !== 0 ? B : N.id - V.id;
        }
        if (((t.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          t.unstable_now = function () {
            return c.now() - d;
          };
        }
        var m = [],
          h = [],
          y = 1,
          g = null,
          S = 3,
          x = !1,
          C = !1,
          w = !1,
          T = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          A = typeof clearTimeout == 'function' ? clearTimeout : null,
          _ = typeof setImmediate < 'u' ? setImmediate : null;
        function z(N) {
          for (var V = r(h); V !== null; ) {
            if (V.callback === null) l(h);
            else if (V.startTime <= N) (l(h), (V.sortIndex = V.expirationTime), a(m, V));
            else break;
            V = r(h);
          }
        }
        function $(N) {
          if (((w = !1), z(N), !C))
            if (r(m) !== null) ((C = !0), I || ((I = !0), le()));
            else {
              var V = r(h);
              V !== null && he($, V.startTime - N);
            }
        }
        var I = !1,
          O = -1,
          P = 5,
          Z = -1;
        function se() {
          return T ? !0 : !(t.unstable_now() - Z < P);
        }
        function pe() {
          if (((T = !1), I)) {
            var N = t.unstable_now();
            Z = N;
            var V = !0;
            try {
              e: {
                ((C = !1), w && ((w = !1), A(O), (O = -1)), (x = !0));
                var B = S;
                try {
                  t: {
                    for (z(N), g = r(m); g !== null && !(g.expirationTime > N && se()); ) {
                      var fe = g.callback;
                      if (typeof fe == 'function') {
                        ((g.callback = null), (S = g.priorityLevel));
                        var ge = fe(g.expirationTime <= N);
                        if (((N = t.unstable_now()), typeof ge == 'function')) {
                          ((g.callback = ge), z(N), (V = !0));
                          break t;
                        }
                        (g === r(m) && l(m), z(N));
                      } else l(m);
                      g = r(m);
                    }
                    if (g !== null) V = !0;
                    else {
                      var D = r(h);
                      (D !== null && he($, D.startTime - N), (V = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (S = B), (x = !1));
                }
                V = void 0;
              }
            } finally {
              V ? le() : (I = !1);
            }
          }
        }
        var le;
        if (typeof _ == 'function')
          le = function () {
            _(pe);
          };
        else if (typeof MessageChannel < 'u') {
          var ce = new MessageChannel(),
            ie = ce.port2;
          ((ce.port1.onmessage = pe),
            (le = function () {
              ie.postMessage(null);
            }));
        } else
          le = function () {
            R(pe, 0);
          };
        function he(N, V) {
          O = R(function () {
            N(t.unstable_now());
          }, V);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (t.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (P = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (t.unstable_next = function (N) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = S;
            }
            var B = S;
            S = V;
            try {
              return N();
            } finally {
              S = B;
            }
          }),
          (t.unstable_requestPaint = function () {
            T = !0;
          }),
          (t.unstable_runWithPriority = function (N, V) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var B = S;
            S = N;
            try {
              return V();
            } finally {
              S = B;
            }
          }),
          (t.unstable_scheduleCallback = function (N, V, B) {
            var fe = t.unstable_now();
            switch (
              (typeof B == 'object' && B !== null
                ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? fe + B : fe))
                : (B = fe),
              N)
            ) {
              case 1:
                var ge = -1;
                break;
              case 2:
                ge = 250;
                break;
              case 5:
                ge = 1073741823;
                break;
              case 4:
                ge = 1e4;
                break;
              default:
                ge = 5e3;
            }
            return (
              (ge = B + ge),
              (N = {id: y++, callback: V, priorityLevel: N, startTime: B, expirationTime: ge, sortIndex: -1}),
              B > fe
                ? ((N.sortIndex = B),
                  a(h, N),
                  r(m) === null && N === r(h) && (w ? (A(O), (O = -1)) : (w = !0), he($, B - fe)))
                : ((N.sortIndex = ge), a(m, N), C || x || ((C = !0), I || ((I = !0), le()))),
              N
            );
          }),
          (t.unstable_shouldYield = se),
          (t.unstable_wrapCallback = function (N) {
            var V = S;
            return function () {
              var B = S;
              S = V;
              try {
                return N.apply(this, arguments);
              } finally {
                S = B;
              }
            };
          }));
      })(Zd)),
    Zd
  );
}
var Dv;
function jC() {
  return (Dv || ((Dv = 1), (Id.exports = LC())), Id.exports);
}
var Jd = {exports: {}},
  nn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mv;
function zC() {
  if (Mv) return nn;
  Mv = 1;
  var t = bc();
  function a(m) {
    var h = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      h += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) h += '&args[]=' + encodeURIComponent(arguments[y]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      h +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var l = {
      d: {
        f: r,
        r: function () {
          throw Error(a(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for('react.portal');
  function u(m, h, y) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: s, key: g == null ? null : '' + g, children: m, containerInfo: h, implementation: y};
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(m, h) {
    if (m === 'font') return '';
    if (typeof h == 'string') return h === 'use-credentials' ? h : '';
  }
  return (
    (nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (nn.createPortal = function (m, h) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)) throw Error(a(299));
      return u(m, h, null, y);
    }),
    (nn.flushSync = function (m) {
      var h = c.T,
        y = l.p;
      try {
        if (((c.T = null), (l.p = 2), m)) return m();
      } finally {
        ((c.T = h), (l.p = y), l.d.f());
      }
    }),
    (nn.preconnect = function (m, h) {
      typeof m == 'string' &&
        (h
          ? ((h = h.crossOrigin), (h = typeof h == 'string' ? (h === 'use-credentials' ? h : '') : void 0))
          : (h = null),
        l.d.C(m, h));
    }),
    (nn.prefetchDNS = function (m) {
      typeof m == 'string' && l.d.D(m);
    }),
    (nn.preinit = function (m, h) {
      if (typeof m == 'string' && h && typeof h.as == 'string') {
        var y = h.as,
          g = d(y, h.crossOrigin),
          S = typeof h.integrity == 'string' ? h.integrity : void 0,
          x = typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0;
        y === 'style'
          ? l.d.S(m, typeof h.precedence == 'string' ? h.precedence : void 0, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: x,
            })
          : y === 'script' &&
            l.d.X(m, {
              crossOrigin: g,
              integrity: S,
              fetchPriority: x,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
      }
    }),
    (nn.preinitModule = function (m, h) {
      if (typeof m == 'string')
        if (typeof h == 'object' && h !== null) {
          if (h.as == null || h.as === 'script') {
            var y = d(h.as, h.crossOrigin);
            l.d.M(m, {
              crossOrigin: y,
              integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
              nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
            });
          }
        } else h == null && l.d.M(m);
    }),
    (nn.preload = function (m, h) {
      if (typeof m == 'string' && typeof h == 'object' && h !== null && typeof h.as == 'string') {
        var y = h.as,
          g = d(y, h.crossOrigin);
        l.d.L(m, y, {
          crossOrigin: g,
          integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          nonce: typeof h.nonce == 'string' ? h.nonce : void 0,
          type: typeof h.type == 'string' ? h.type : void 0,
          fetchPriority: typeof h.fetchPriority == 'string' ? h.fetchPriority : void 0,
          referrerPolicy: typeof h.referrerPolicy == 'string' ? h.referrerPolicy : void 0,
          imageSrcSet: typeof h.imageSrcSet == 'string' ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == 'string' ? h.imageSizes : void 0,
          media: typeof h.media == 'string' ? h.media : void 0,
        });
      }
    }),
    (nn.preloadModule = function (m, h) {
      if (typeof m == 'string')
        if (h) {
          var y = d(h.as, h.crossOrigin);
          l.d.m(m, {
            as: typeof h.as == 'string' && h.as !== 'script' ? h.as : void 0,
            crossOrigin: y,
            integrity: typeof h.integrity == 'string' ? h.integrity : void 0,
          });
        } else l.d.m(m);
    }),
    (nn.requestFormReset = function (m) {
      l.d.r(m);
    }),
    (nn.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (nn.useFormState = function (m, h, y) {
      return c.H.useFormState(m, h, y);
    }),
    (nn.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (nn.version = '19.2.4'),
    nn
  );
}
var Nv;
function q0() {
  if (Nv) return Jd.exports;
  Nv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return (t(), (Jd.exports = zC()), Jd.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _v;
function UC() {
  if (_v) return Fo;
  _v = 1;
  var t = jC(),
    a = bc(),
    r = q0();
  function l(e) {
    var n = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) n += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (u(e) !== e) throw Error(l(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = u(e)), n === null)) throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var i = e, o = n; ; ) {
      var f = i.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((o = f.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === i) return (m(f), e);
          if (p === o) return (m(f), n);
          p = p.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== o.return) ((i = f), (o = p));
      else {
        for (var v = !1, E = f.child; E; ) {
          if (E === i) {
            ((v = !0), (i = f), (o = p));
            break;
          }
          if (E === o) {
            ((v = !0), (o = f), (i = p));
            break;
          }
          E = E.sibling;
        }
        if (!v) {
          for (E = p.child; E; ) {
            if (E === i) {
              ((v = !0), (i = p), (o = f));
              break;
            }
            if (E === o) {
              ((v = !0), (o = p), (i = f));
              break;
            }
            E = E.sibling;
          }
          if (!v) throw Error(l(189));
        }
      }
      if (i.alternate !== o) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : n;
  }
  function y(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = y(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    S = Symbol.for('react.element'),
    x = Symbol.for('react.transitional.element'),
    C = Symbol.for('react.portal'),
    w = Symbol.for('react.fragment'),
    T = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    A = Symbol.for('react.consumer'),
    _ = Symbol.for('react.context'),
    z = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    I = Symbol.for('react.suspense_list'),
    O = Symbol.for('react.memo'),
    P = Symbol.for('react.lazy'),
    Z = Symbol.for('react.activity'),
    se = Symbol.for('react.memo_cache_sentinel'),
    pe = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (pe && e[pe]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var ce = Symbol.for('react.client.reference');
  function ie(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === ce ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case w:
        return 'Fragment';
      case R:
        return 'Profiler';
      case T:
        return 'StrictMode';
      case $:
        return 'Suspense';
      case I:
        return 'SuspenseList';
      case Z:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case C:
          return 'Portal';
        case _:
          return e.displayName || 'Context';
        case A:
          return (e._context.displayName || 'Context') + '.Consumer';
        case z:
          var n = e.render;
          return (
            (e = e.displayName),
            e || ((e = n.displayName || n.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case O:
          return ((n = e.displayName || null), n !== null ? n : ie(e.type) || 'Memo');
        case P:
          ((n = e._payload), (e = e._init));
          try {
            return ie(e(n));
          } catch {}
      }
    return null;
  }
  var he = Array.isArray,
    N = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = {pending: !1, data: null, method: null, action: null},
    fe = [],
    ge = -1;
  function D(e) {
    return {current: e};
  }
  function K(e) {
    0 > ge || ((e.current = fe[ge]), (fe[ge] = null), ge--);
  }
  function X(e, n) {
    (ge++, (fe[ge] = e.current), (e.current = n));
  }
  var ee = D(null),
    ue = D(null),
    be = D(null),
    re = D(null);
  function ye(e, n) {
    switch ((X(be, n), X(ue, e), X(ee, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Gy(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI))) ((n = Gy(n)), (e = Ky(n, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (K(ee), X(ee, e));
  }
  function Me() {
    (K(ee), K(ue), K(be));
  }
  function Ue(e) {
    e.memoizedState !== null && X(re, e);
    var n = ee.current,
      i = Ky(n, e.type);
    n !== i && (X(ue, e), X(ee, i));
  }
  function He(e) {
    (ue.current === e && (K(ee), K(ue)), re.current === e && (K(re), (Po._currentValue = B)));
  }
  var Te, ht;
  function mt(e) {
    if (Te === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        ((Te = (n && n[1]) || ''),
          (ht =
            -1 <
            i.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < i.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Te +
      e +
      ht
    );
  }
  var xn = !1;
  function zt(e, n) {
    if (!e || xn) return '';
    xn = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var ne = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ne.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ne, []);
                } catch (Q) {
                  var G = Q;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (Q) {
                  G = Q;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                G = Q;
              }
              (ne = e()) && typeof ne.catch == 'function' && ne.catch(function () {});
            }
          } catch (Q) {
            if (Q && G && typeof Q.stack == 'string') return [Q.stack, G.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var f = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, 'name');
      f &&
        f.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, 'name', {value: 'DetermineComponentFrameRoot'});
      var p = o.DetermineComponentFrameRoot(),
        v = p[0],
        E = p[1];
      if (v && E) {
        var L = v.split(`
`),
          Y = E.split(`
`);
        for (f = o = 0; o < L.length && !L[o].includes('DetermineComponentFrameRoot'); ) o++;
        for (; f < Y.length && !Y[f].includes('DetermineComponentFrameRoot'); ) f++;
        if (o === L.length || f === Y.length)
          for (o = L.length - 1, f = Y.length - 1; 1 <= o && 0 <= f && L[o] !== Y[f]; ) f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (L[o] !== Y[f]) {
            if (o !== 1 || f !== 1)
              do
                if ((o--, f--, 0 > f || L[o] !== Y[f])) {
                  var J =
                    `
` + L[o].replace(' at new ', ' at ');
                  return (
                    e.displayName && J.includes('<anonymous>') && (J = J.replace('<anonymous>', e.displayName)),
                    J
                  );
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      ((xn = !1), (Error.prepareStackTrace = i));
    }
    return (i = e ? e.displayName || e.name : '') ? mt(i) : '';
  }
  function sn(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return mt(e.type);
      case 16:
        return mt('Lazy');
      case 13:
        return e.child !== n && n !== null ? mt('Suspense Fallback') : mt('Suspense');
      case 19:
        return mt('SuspenseList');
      case 0:
      case 15:
        return zt(e.type, !1);
      case 11:
        return zt(e.type.render, !1);
      case 1:
        return zt(e.type, !0);
      case 31:
        return mt('Activity');
      default:
        return '';
    }
  }
  function ja(e) {
    try {
      var n = '',
        i = null;
      do ((n += sn(e, i)), (i = e), (e = e.return));
      while (e);
      return n;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var At = Object.prototype.hasOwnProperty,
    ti = t.unstable_scheduleCallback,
    ni = t.unstable_cancelCallback,
    Gt = t.unstable_shouldYield,
    ga = t.unstable_requestPaint,
    St = t.unstable_now,
    za = t.unstable_getCurrentPriorityLevel,
    ya = t.unstable_ImmediatePriority,
    hr = t.unstable_UserBlockingPriority,
    Kt = t.unstable_NormalPriority,
    un = t.unstable_LowPriority,
    Un = t.unstable_IdlePriority,
    Pi = t.log,
    Hn = t.unstable_setDisableYieldValue,
    Ua = null,
    pt = null;
  function dn(e) {
    if ((typeof Pi == 'function' && Hn(e), pt && typeof pt.setStrictMode == 'function'))
      try {
        pt.setStrictMode(Ua, e);
      } catch {}
  }
  var Pt = Math.clz32 ? Math.clz32 : wn,
    Vi = Math.log,
    ai = Math.LN2;
  function wn(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vi(e) / ai) | 0)) | 0);
  }
  var ea = 256,
    Ha = 262144,
    ta = 4194304;
  function Bn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function _e(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var f = 0,
      p = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var E = o & 134217727;
    return (
      E !== 0
        ? ((o = E & ~p),
          o !== 0 ? (f = Bn(o)) : ((v &= E), v !== 0 ? (f = Bn(v)) : i || ((i = E & ~e), i !== 0 && (f = Bn(i)))))
        : ((E = o & ~p), E !== 0 ? (f = Bn(E)) : v !== 0 ? (f = Bn(v)) : i || ((i = o & ~e), i !== 0 && (f = Bn(i)))),
      f === 0
        ? 0
        : n !== 0 &&
            n !== f &&
            (n & p) === 0 &&
            ((p = f & -f), (i = n & -n), p >= i || (p === 32 && (i & 4194048) !== 0))
          ? n
          : f
    );
  }
  function ut(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Dt(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mt() {
    var e = ta;
    return ((ta <<= 1), (ta & 62914560) === 0 && (ta = 4194304), e);
  }
  function En(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function ct(e, n) {
    ((e.pendingLanes |= n), n !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function en(e, n, i, o, f, p) {
    var v = e.pendingLanes;
    ((e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0));
    var E = e.entanglements,
      L = e.expirationTimes,
      Y = e.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var J = 31 - Pt(i),
        ne = 1 << J;
      ((E[J] = 0), (L[J] = -1));
      var G = Y[J];
      if (G !== null)
        for (Y[J] = null, J = 0; J < G.length; J++) {
          var Q = G[J];
          Q !== null && (Q.lane &= -536870913);
        }
      i &= ~ne;
    }
    (o !== 0 && Ba(e, o, 0), p !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(v & ~n)));
  }
  function Ba(e, n, i) {
    ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
    var o = 31 - Pt(n);
    ((e.entangledLanes |= n), (e.entanglements[o] = e.entanglements[o] | 1073741824 | (i & 261930)));
  }
  function M(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var o = 31 - Pt(i),
        f = 1 << o;
      ((f & n) | (e[o] & n) && (e[o] |= n), (i &= ~f));
    }
  }
  function H(e, n) {
    var i = n & -n;
    return ((i = (i & 42) !== 0 ? 1 : F(i)), (i & (e.suspendedLanes | n)) !== 0 ? 0 : i);
  }
  function F(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ae(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function de() {
    var e = V.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : gv(e.type));
  }
  function Re(e, n) {
    var i = V.p;
    try {
      return ((V.p = e), n());
    } finally {
      V.p = i;
    }
  }
  var Ee = Math.random().toString(36).slice(2),
    me = '__reactFiber$' + Ee,
    ve = '__reactProps$' + Ee,
    Ce = '__reactContainer$' + Ee,
    Le = '__reactEvents$' + Ee,
    Ae = '__reactListeners$' + Ee,
    ke = '__reactHandles$' + Ee,
    $e = '__reactResources$' + Ee,
    xt = '__reactMarker$' + Ee;
  function Et(e) {
    (delete e[me], delete e[ve], delete e[Le], delete e[Ae], delete e[ke]);
  }
  function Ct(e) {
    var n = e[me];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[Ce] || i[me])) {
        if (((i = n.alternate), n.child !== null || (i !== null && i.child !== null)))
          for (e = ev(e); e !== null; ) {
            if ((i = e[me])) return i;
            e = ev(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Qe(e) {
    if ((e = e[me] || e[Ce])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return e;
    }
    return null;
  }
  function Yt(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(l(33));
  }
  function hn(e) {
    var n = e[$e];
    return (n || (n = e[$e] = {hoistableStyles: new Map(), hoistableScripts: new Map()}), n);
  }
  function vt(e) {
    e[xt] = !0;
  }
  var na = new Set(),
    Cn = {};
  function aa(e, n) {
    (kn(e, n), kn(e + 'Capture', n));
  }
  function kn(e, n) {
    for (Cn[e] = n, e = 0; e < n.length; e++) na.add(n[e]);
  }
  var ka = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    ri = {},
    ii = {};
  function Ie(e) {
    return At.call(ii, e) ? !0 : At.call(ri, e) ? !1 : ka.test(e) ? (ii[e] = !0) : ((ri[e] = !0), !1);
  }
  function Nt(e, n, i) {
    if (Ie(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(n);
            return;
          case 'boolean':
            var o = n.toLowerCase().slice(0, 5);
            if (o !== 'data-' && o !== 'aria-') {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, '' + i);
      }
  }
  function ra(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, '' + i);
    }
  }
  function Xt(e, n, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, '' + o);
    }
  }
  function Ze(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function li(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (n === 'checkbox' || n === 'radio');
  }
  function Cs(e, n, i) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (!e.hasOwnProperty(n) && typeof o < 'u' && typeof o.get == 'function' && typeof o.set == 'function') {
      var f = o.get,
        p = o.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (v) {
            ((i = '' + v), p.call(this, v));
          },
        }),
        Object.defineProperty(e, n, {enumerable: o.enumerable}),
        {
          getValue: function () {
            return i;
          },
          setValue: function (v) {
            i = '' + v;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function to(e) {
    if (!e._valueTracker) {
      var n = li(e) ? 'checked' : 'value';
      e._valueTracker = Cs(e, n, '' + e[n]);
    }
  }
  function km(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      o = '';
    return (e && (o = li(e) ? (e.checked ? 'true' : 'false') : e.value), (e = o), e !== i ? (n.setValue(e), !0) : !1);
  }
  function Ts(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var x1 = /[\n"\\]/g;
  function Pn(e) {
    return e.replace(x1, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' ';
    });
  }
  function kc(e, n, i, o, f, p, v, E) {
    ((e.name = ''),
      v != null && typeof v != 'function' && typeof v != 'symbol' && typeof v != 'boolean'
        ? (e.type = v)
        : e.removeAttribute('type'),
      n != null
        ? v === 'number'
          ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + Ze(n))
          : e.value !== '' + Ze(n) && (e.value = '' + Ze(n))
        : (v !== 'submit' && v !== 'reset') || e.removeAttribute('value'),
      n != null ? Pc(e, v, Ze(n)) : i != null ? Pc(e, v, Ze(i)) : o != null && e.removeAttribute('value'),
      f == null && p != null && (e.defaultChecked = !!p),
      f != null && (e.checked = f && typeof f != 'function' && typeof f != 'symbol'),
      E != null && typeof E != 'function' && typeof E != 'symbol' && typeof E != 'boolean'
        ? (e.name = '' + Ze(E))
        : e.removeAttribute('name'));
  }
  function Pm(e, n, i, o, f, p, v, E) {
    if (
      (p != null && typeof p != 'function' && typeof p != 'symbol' && typeof p != 'boolean' && (e.type = p),
      n != null || i != null)
    ) {
      if (!((p !== 'submit' && p !== 'reset') || n != null)) {
        to(e);
        return;
      }
      ((i = i != null ? '' + Ze(i) : ''),
        (n = n != null ? '' + Ze(n) : i),
        E || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((o = o ?? f),
      (o = typeof o != 'function' && typeof o != 'symbol' && !!o),
      (e.checked = E ? e.checked : !!o),
      (e.defaultChecked = !!o),
      v != null && typeof v != 'function' && typeof v != 'symbol' && typeof v != 'boolean' && (e.name = v),
      to(e));
  }
  function Pc(e, n, i) {
    (n === 'number' && Ts(e.ownerDocument) === e) || e.defaultValue === '' + i || (e.defaultValue = '' + i);
  }
  function qi(e, n, i, o) {
    if (((e = e.options), n)) {
      n = {};
      for (var f = 0; f < i.length; f++) n['$' + i[f]] = !0;
      for (i = 0; i < e.length; i++)
        ((f = n.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== f && (e[i].selected = f),
          f && o && (e[i].defaultSelected = !0));
    } else {
      for (i = '' + Ze(i), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === i) {
          ((e[f].selected = !0), o && (e[f].defaultSelected = !0));
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Vm(e, n, i) {
    if (n != null && ((n = '' + Ze(n)), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? '' + Ze(i) : '';
  }
  function qm(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(l(92));
        if (he(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        i = o;
      }
      (i == null && (i = ''), (n = i));
    }
    ((i = Ze(n)), (e.defaultValue = i), (o = e.textContent), o === i && o !== '' && o !== null && (e.value = o), to(e));
  }
  function Yi(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var w1 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Ym(e, n, i) {
    var o = n.indexOf('--') === 0;
    i == null || typeof i == 'boolean' || i === ''
      ? o
        ? e.setProperty(n, '')
        : n === 'float'
          ? (e.cssFloat = '')
          : (e[n] = '')
      : o
        ? e.setProperty(n, i)
        : typeof i != 'number' || i === 0 || w1.has(n)
          ? n === 'float'
            ? (e.cssFloat = i)
            : (e[n] = ('' + i).trim())
          : (e[n] = i + 'px');
  }
  function $m(e, n, i) {
    if (n != null && typeof n != 'object') throw Error(l(62));
    if (((e = e.style), i != null)) {
      for (var o in i)
        !i.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf('--') === 0 ? e.setProperty(o, '') : o === 'float' ? (e.cssFloat = '') : (e[o] = ''));
      for (var f in n) ((o = n[f]), n.hasOwnProperty(f) && i[f] !== o && Ym(e, f, o));
    } else for (var p in n) n.hasOwnProperty(p) && Ym(e, p, n[p]);
  }
  function Vc(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var E1 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    C1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Os(e) {
    return C1.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Pa() {}
  var qc = null;
  function Yc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $i = null,
    Fi = null;
  function Fm(e) {
    var n = Qe(e);
    if (n && (e = n.stateNode)) {
      var i = e[ve] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case 'input':
          if (
            (kc(e, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name),
            (n = i.name),
            i.type === 'radio' && n != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + Pn('' + n) + '"][type="radio"]'), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var f = o[ve] || null;
                if (!f) throw Error(l(90));
                kc(o, f.value, f.defaultValue, f.defaultValue, f.checked, f.defaultChecked, f.type, f.name);
              }
            }
            for (n = 0; n < i.length; n++) ((o = i[n]), o.form === e.form && km(o));
          }
          break e;
        case 'textarea':
          Vm(e, i.value, i.defaultValue);
          break e;
        case 'select':
          ((n = i.value), n != null && qi(e, !!i.multiple, n, !1));
      }
    }
  }
  var $c = !1;
  function Gm(e, n, i) {
    if ($c) return e(n, i);
    $c = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if ((($c = !1), ($i !== null || Fi !== null) && (hu(), $i && ((n = $i), (e = Fi), (Fi = $i = null), Fm(n), e))))
        for (n = 0; n < e.length; n++) Fm(e[n]);
    }
  }
  function no(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[ve] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((o = !o.disabled) ||
          ((e = e.type), (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(l(231, n, typeof i));
    return i;
  }
  var Va = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    Fc = !1;
  if (Va)
    try {
      var ao = {};
      (Object.defineProperty(ao, 'passive', {
        get: function () {
          Fc = !0;
        },
      }),
        window.addEventListener('test', ao, ao),
        window.removeEventListener('test', ao, ao));
    } catch {
      Fc = !1;
    }
  var mr = null,
    Gc = null,
    Rs = null;
  function Km() {
    if (Rs) return Rs;
    var e,
      n = Gc,
      i = n.length,
      o,
      f = 'value' in mr ? mr.value : mr.textContent,
      p = f.length;
    for (e = 0; e < i && n[e] === f[e]; e++);
    var v = i - e;
    for (o = 1; o <= v && n[i - o] === f[p - o]; o++);
    return (Rs = f.slice(e, 1 < o ? 1 - o : void 0));
  }
  function As(e) {
    var n = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ds() {
    return !0;
  }
  function Xm() {
    return !1;
  }
  function mn(e) {
    function n(i, o, f, p, v) {
      ((this._reactName = i),
        (this._targetInst = f),
        (this.type = o),
        (this.nativeEvent = p),
        (this.target = v),
        (this.currentTarget = null));
      for (var E in e) e.hasOwnProperty(E) && ((i = e[E]), (this[E] = i ? i(p) : p[E]));
      return (
        (this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ds : Xm),
        (this.isPropagationStopped = Xm),
        this
      );
    }
    return (
      g(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault ? i.preventDefault() : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Ds));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ds));
        },
        persist: function () {},
        isPersistent: Ds,
      }),
      n
    );
  }
  var oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ms = mn(oi),
    ro = g({}, oi, {view: 0, detail: 0}),
    T1 = mn(ro),
    Kc,
    Xc,
    io,
    Ns = g({}, ro, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ic,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== io &&
              (io && e.type === 'mousemove'
                ? ((Kc = e.screenX - io.screenX), (Xc = e.screenY - io.screenY))
                : (Xc = Kc = 0),
              (io = e)),
            Kc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Xc;
      },
    }),
    Qm = mn(Ns),
    O1 = g({}, Ns, {dataTransfer: 0}),
    R1 = mn(O1),
    A1 = g({}, ro, {relatedTarget: 0}),
    Qc = mn(A1),
    D1 = g({}, oi, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
    M1 = mn(D1),
    N1 = g({}, oi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _1 = mn(N1),
    L1 = g({}, oi, {data: 0}),
    Im = mn(L1),
    j1 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    z1 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    U1 = {Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'};
  function H1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = U1[e]) ? !!n[e] : !1;
  }
  function Ic() {
    return H1;
  }
  var B1 = g({}, ro, {
      key: function (e) {
        if (e.key) {
          var n = j1[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = As(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? z1[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ic,
      charCode: function (e) {
        return e.type === 'keypress' ? As(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? As(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    k1 = mn(B1),
    P1 = g({}, Ns, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Zm = mn(P1),
    V1 = g({}, ro, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ic,
    }),
    q1 = mn(V1),
    Y1 = g({}, oi, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
    $1 = mn(Y1),
    F1 = g({}, Ns, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    G1 = mn(F1),
    K1 = g({}, oi, {newState: 0, oldState: 0}),
    X1 = mn(K1),
    Q1 = [9, 13, 27, 32],
    Zc = Va && 'CompositionEvent' in window,
    lo = null;
  Va && 'documentMode' in document && (lo = document.documentMode);
  var I1 = Va && 'TextEvent' in window && !lo,
    Jm = Va && (!Zc || (lo && 8 < lo && 11 >= lo)),
    Wm = ' ',
    ep = !1;
  function tp(e, n) {
    switch (e) {
      case 'keyup':
        return Q1.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function np(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  var Gi = !1;
  function Z1(e, n) {
    switch (e) {
      case 'compositionend':
        return np(n);
      case 'keypress':
        return n.which !== 32 ? null : ((ep = !0), Wm);
      case 'textInput':
        return ((e = n.data), e === Wm && ep ? null : e);
      default:
        return null;
    }
  }
  function J1(e, n) {
    if (Gi)
      return e === 'compositionend' || (!Zc && tp(e, n)) ? ((e = Km()), (Rs = Gc = mr = null), (Gi = !1), e) : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return Jm && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var W1 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ap(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!W1[e.type] : n === 'textarea';
  }
  function rp(e, n, i, o) {
    ($i ? (Fi ? Fi.push(o) : (Fi = [o])) : ($i = o),
      (n = Su(n, 'onChange')),
      0 < n.length && ((i = new Ms('onChange', 'change', null, i, o)), e.push({event: i, listeners: n})));
  }
  var oo = null,
    so = null;
  function eE(e) {
    Py(e, 0);
  }
  function _s(e) {
    var n = Yt(e);
    if (km(n)) return e;
  }
  function ip(e, n) {
    if (e === 'change') return n;
  }
  var lp = !1;
  if (Va) {
    var Jc;
    if (Va) {
      var Wc = 'oninput' in document;
      if (!Wc) {
        var op = document.createElement('div');
        (op.setAttribute('oninput', 'return;'), (Wc = typeof op.oninput == 'function'));
      }
      Jc = Wc;
    } else Jc = !1;
    lp = Jc && (!document.documentMode || 9 < document.documentMode);
  }
  function sp() {
    oo && (oo.detachEvent('onpropertychange', up), (so = oo = null));
  }
  function up(e) {
    if (e.propertyName === 'value' && _s(so)) {
      var n = [];
      (rp(n, so, e, Yc(e)), Gm(eE, n));
    }
  }
  function tE(e, n, i) {
    e === 'focusin' ? (sp(), (oo = n), (so = i), oo.attachEvent('onpropertychange', up)) : e === 'focusout' && sp();
  }
  function nE(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return _s(so);
  }
  function aE(e, n) {
    if (e === 'click') return _s(n);
  }
  function rE(e, n) {
    if (e === 'input' || e === 'change') return _s(n);
  }
  function iE(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Tn = typeof Object.is == 'function' ? Object.is : iE;
  function uo(e, n) {
    if (Tn(e, n)) return !0;
    if (typeof e != 'object' || e === null || typeof n != 'object' || n === null) return !1;
    var i = Object.keys(e),
      o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var f = i[o];
      if (!At.call(n, f) || !Tn(e[f], n[f])) return !1;
    }
    return !0;
  }
  function cp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fp(e, n) {
    var i = cp(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = e + i.textContent.length), e <= n && o >= n)) return {node: i, offset: n - e};
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = cp(i);
    }
  }
  function dp(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? dp(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function hp(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = Ts(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Ts(e.document);
    }
    return n;
  }
  function ef(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var lE = Va && 'documentMode' in document && 11 >= document.documentMode,
    Ki = null,
    tf = null,
    co = null,
    nf = !1;
  function mp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    nf ||
      Ki == null ||
      Ki !== Ts(o) ||
      ((o = Ki),
      'selectionStart' in o && ef(o)
        ? (o = {start: o.selectionStart, end: o.selectionEnd})
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (co && uo(co, o)) ||
        ((co = o),
        (o = Su(tf, 'onSelect')),
        0 < o.length &&
          ((n = new Ms('onSelect', 'select', null, n, i)), e.push({event: n, listeners: o}), (n.target = Ki))));
  }
  function si(e, n) {
    var i = {};
    return ((i[e.toLowerCase()] = n.toLowerCase()), (i['Webkit' + e] = 'webkit' + n), (i['Moz' + e] = 'moz' + n), i);
  }
  var Xi = {
      animationend: si('Animation', 'AnimationEnd'),
      animationiteration: si('Animation', 'AnimationIteration'),
      animationstart: si('Animation', 'AnimationStart'),
      transitionrun: si('Transition', 'TransitionRun'),
      transitionstart: si('Transition', 'TransitionStart'),
      transitioncancel: si('Transition', 'TransitionCancel'),
      transitionend: si('Transition', 'TransitionEnd'),
    },
    af = {},
    pp = {};
  Va &&
    ((pp = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Xi.animationend.animation, delete Xi.animationiteration.animation, delete Xi.animationstart.animation),
    'TransitionEvent' in window || delete Xi.transitionend.transition);
  function ui(e) {
    if (af[e]) return af[e];
    if (!Xi[e]) return e;
    var n = Xi[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in pp) return (af[e] = n[i]);
    return e;
  }
  var gp = ui('animationend'),
    yp = ui('animationiteration'),
    vp = ui('animationstart'),
    oE = ui('transitionrun'),
    sE = ui('transitionstart'),
    uE = ui('transitioncancel'),
    bp = ui('transitionend'),
    Sp = new Map(),
    rf =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  rf.push('scrollEnd');
  function ia(e, n) {
    (Sp.set(e, n), aa(n, [e]));
  }
  var Ls =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var n = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' && e !== null && typeof e.message == 'string' ? String(e.message) : String(e),
                error: e,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    Vn = [],
    Qi = 0,
    lf = 0;
  function js() {
    for (var e = Qi, n = (lf = Qi = 0); n < e; ) {
      var i = Vn[n];
      Vn[n++] = null;
      var o = Vn[n];
      Vn[n++] = null;
      var f = Vn[n];
      Vn[n++] = null;
      var p = Vn[n];
      if (((Vn[n++] = null), o !== null && f !== null)) {
        var v = o.pending;
        (v === null ? (f.next = f) : ((f.next = v.next), (v.next = f)), (o.pending = f));
      }
      p !== 0 && xp(i, f, p);
    }
  }
  function zs(e, n, i, o) {
    ((Vn[Qi++] = e),
      (Vn[Qi++] = n),
      (Vn[Qi++] = i),
      (Vn[Qi++] = o),
      (lf |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o));
  }
  function of(e, n, i, o) {
    return (zs(e, n, i, o), Us(e));
  }
  function ci(e, n) {
    return (zs(e, null, null, n), Us(e));
  }
  function xp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var f = !1, p = e.return; p !== null; )
      ((p.childLanes |= i),
        (o = p.alternate),
        o !== null && (o.childLanes |= i),
        p.tag === 22 && ((e = p.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = p),
        (p = p.return));
    return e.tag === 3
      ? ((p = e.stateNode),
        f &&
          n !== null &&
          ((f = 31 - Pt(i)),
          (e = p.hiddenUpdates),
          (o = e[f]),
          o === null ? (e[f] = [n]) : o.push(n),
          (n.lane = i | 536870912)),
        p)
      : null;
  }
  function Us(e) {
    if (50 < Lo) throw ((Lo = 0), (gd = null), Error(l(185)));
    for (var n = e.return; n !== null; ) ((e = n), (n = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ii = {};
  function cE(e, n, i, o) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function On(e, n, i, o) {
    return new cE(e, n, i, o);
  }
  function sf(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function qa(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = On(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n), (i.type = e.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies = n === null ? null : {lanes: n.lanes, firstContext: n.firstContext}),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function wp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (n = i.dependencies),
          (e.dependencies = n === null ? null : {lanes: n.lanes, firstContext: n.firstContext})),
      e
    );
  }
  function Hs(e, n, i, o, f, p) {
    var v = 0;
    if (((o = e), typeof e == 'function')) sf(e) && (v = 1);
    else if (typeof e == 'string')
      v = pC(e, i, ee.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
    else
      e: switch (e) {
        case Z:
          return ((e = On(31, i, n, f)), (e.elementType = Z), (e.lanes = p), e);
        case w:
          return fi(i.children, f, p, n);
        case T:
          ((v = 8), (f |= 24));
          break;
        case R:
          return ((e = On(12, i, n, f | 2)), (e.elementType = R), (e.lanes = p), e);
        case $:
          return ((e = On(13, i, n, f)), (e.elementType = $), (e.lanes = p), e);
        case I:
          return ((e = On(19, i, n, f)), (e.elementType = I), (e.lanes = p), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case _:
                v = 10;
                break e;
              case A:
                v = 9;
                break e;
              case z:
                v = 11;
                break e;
              case O:
                v = 14;
                break e;
              case P:
                ((v = 16), (o = null));
                break e;
            }
          ((v = 29), (i = Error(l(130, e === null ? 'null' : typeof e, ''))), (o = null));
      }
    return ((n = On(v, i, n, f)), (n.elementType = e), (n.type = o), (n.lanes = p), n);
  }
  function fi(e, n, i, o) {
    return ((e = On(7, e, o, n)), (e.lanes = i), e);
  }
  function uf(e, n, i) {
    return ((e = On(6, e, null, n)), (e.lanes = i), e);
  }
  function Ep(e) {
    var n = On(18, null, null, 0);
    return ((n.stateNode = e), n);
  }
  function cf(e, n, i) {
    return (
      (n = On(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}),
      n
    );
  }
  var Cp = new WeakMap();
  function qn(e, n) {
    if (typeof e == 'object' && e !== null) {
      var i = Cp.get(e);
      return i !== void 0 ? i : ((n = {value: e, source: n, stack: ja(n)}), Cp.set(e, n), n);
    }
    return {value: e, source: n, stack: ja(n)};
  }
  var Zi = [],
    Ji = 0,
    Bs = null,
    fo = 0,
    Yn = [],
    $n = 0,
    pr = null,
    va = 1,
    ba = '';
  function Ya(e, n) {
    ((Zi[Ji++] = fo), (Zi[Ji++] = Bs), (Bs = e), (fo = n));
  }
  function Tp(e, n, i) {
    ((Yn[$n++] = va), (Yn[$n++] = ba), (Yn[$n++] = pr), (pr = e));
    var o = va;
    e = ba;
    var f = 32 - Pt(o) - 1;
    ((o &= ~(1 << f)), (i += 1));
    var p = 32 - Pt(n) + f;
    if (30 < p) {
      var v = f - (f % 5);
      ((p = (o & ((1 << v) - 1)).toString(32)),
        (o >>= v),
        (f -= v),
        (va = (1 << (32 - Pt(n) + f)) | (i << f) | o),
        (ba = p + e));
    } else ((va = (1 << p) | (i << f) | o), (ba = e));
  }
  function ff(e) {
    e.return !== null && (Ya(e, 1), Tp(e, 1, 0));
  }
  function df(e) {
    for (; e === Bs; ) ((Bs = Zi[--Ji]), (Zi[Ji] = null), (fo = Zi[--Ji]), (Zi[Ji] = null));
    for (; e === pr; )
      ((pr = Yn[--$n]), (Yn[$n] = null), (ba = Yn[--$n]), (Yn[$n] = null), (va = Yn[--$n]), (Yn[$n] = null));
  }
  function Op(e, n) {
    ((Yn[$n++] = va), (Yn[$n++] = ba), (Yn[$n++] = pr), (va = n.id), (ba = n.overflow), (pr = e));
  }
  var Qt = null,
    gt = null,
    Je = !1,
    gr = null,
    Fn = !1,
    hf = Error(l(519));
  function yr(e) {
    var n = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
    throw (ho(qn(n, e)), hf);
  }
  function Rp(e) {
    var n = e.stateNode,
      i = e.type,
      o = e.memoizedProps;
    switch (((n[me] = e), (n[ve] = o), i)) {
      case 'dialog':
        (Ge('cancel', n), Ge('close', n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ge('load', n);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < zo.length; i++) Ge(zo[i], n);
        break;
      case 'source':
        Ge('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ge('error', n), Ge('load', n));
        break;
      case 'details':
        Ge('toggle', n);
        break;
      case 'input':
        (Ge('invalid', n), Pm(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0));
        break;
      case 'select':
        Ge('invalid', n);
        break;
      case 'textarea':
        (Ge('invalid', n), qm(n, o.value, o.defaultValue, o.children));
    }
    ((i = o.children),
      (typeof i != 'string' && typeof i != 'number' && typeof i != 'bigint') ||
      n.textContent === '' + i ||
      o.suppressHydrationWarning === !0 ||
      $y(n.textContent, i)
        ? (o.popover != null && (Ge('beforetoggle', n), Ge('toggle', n)),
          o.onScroll != null && Ge('scroll', n),
          o.onScrollEnd != null && Ge('scrollend', n),
          o.onClick != null && (n.onclick = Pa),
          (n = !0))
        : (n = !1),
      n || yr(e, !0));
  }
  function Ap(e) {
    for (Qt = e.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          Fn = !1;
          return;
        case 27:
        case 3:
          Fn = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function Wi(e) {
    if (e !== Qt) return !1;
    if (!Je) return (Ap(e), (Je = !0), !1);
    var n = e.tag,
      i;
    if (
      ((i = n !== 3 && n !== 27) &&
        ((i = n === 5) && ((i = e.type), (i = !(i !== 'form' && i !== 'button') || Nd(e.type, e.memoizedProps))),
        (i = !i)),
      i && gt && yr(e),
      Ap(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      gt = Wy(e);
    } else if (n === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(317));
      gt = Wy(e);
    } else
      n === 27
        ? ((n = gt), Nr(e.type) ? ((e = Ud), (Ud = null), (gt = e)) : (gt = n))
        : (gt = Qt ? Kn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function di() {
    ((gt = Qt = null), (Je = !1));
  }
  function mf() {
    var e = gr;
    return (e !== null && (vn === null ? (vn = e) : vn.push.apply(vn, e), (gr = null)), e);
  }
  function ho(e) {
    gr === null ? (gr = [e]) : gr.push(e);
  }
  var pf = D(null),
    hi = null,
    $a = null;
  function vr(e, n, i) {
    (X(pf, n._currentValue), (n._currentValue = i));
  }
  function Fa(e) {
    ((e._currentValue = pf.current), K(pf));
  }
  function gf(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function yf(e, n, i, o) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var v = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var E = p;
          p = f;
          for (var L = 0; L < n.length; L++)
            if (E.context === n[L]) {
              ((p.lanes |= i), (E = p.alternate), E !== null && (E.lanes |= i), gf(p.return, i, e), o || (v = null));
              break e;
            }
          p = E.next;
        }
      } else if (f.tag === 18) {
        if (((v = f.return), v === null)) throw Error(l(341));
        ((v.lanes |= i), (p = v.alternate), p !== null && (p.lanes |= i), gf(v, i, e), (v = null));
      } else v = f.child;
      if (v !== null) v.return = f;
      else
        for (v = f; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (((f = v.sibling), f !== null)) {
            ((f.return = v.return), (v = f));
            break;
          }
          v = v.return;
        }
      f = v;
    }
  }
  function el(e, n, i, o) {
    e = null;
    for (var f = n, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var v = f.alternate;
        if (v === null) throw Error(l(387));
        if (((v = v.memoizedProps), v !== null)) {
          var E = f.type;
          Tn(f.pendingProps.value, v.value) || (e !== null ? e.push(E) : (e = [E]));
        }
      } else if (f === re.current) {
        if (((v = f.alternate), v === null)) throw Error(l(387));
        v.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(Po) : (e = [Po]));
      }
      f = f.return;
    }
    (e !== null && yf(n, e, i, o), (n.flags |= 262144));
  }
  function ks(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function mi(e) {
    ((hi = e), ($a = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function It(e) {
    return Dp(hi, e);
  }
  function Ps(e, n) {
    return (hi === null && mi(e), Dp(e, n));
  }
  function Dp(e, n) {
    var i = n._currentValue;
    if (((n = {context: n, memoizedValue: i, next: null}), $a === null)) {
      if (e === null) throw Error(l(308));
      (($a = n), (e.dependencies = {lanes: 0, firstContext: n}), (e.flags |= 524288));
    } else $a = $a.next = n;
    return i;
  }
  var fE =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (i, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                e.forEach(function (i) {
                  return i();
                }));
            };
          },
    dE = t.unstable_scheduleCallback,
    hE = t.unstable_NormalPriority,
    Ut = {$$typeof: _, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};
  function vf() {
    return {controller: new fE(), data: new Map(), refCount: 0};
  }
  function mo(e) {
    (e.refCount--,
      e.refCount === 0 &&
        dE(hE, function () {
          e.controller.abort();
        }));
  }
  var po = null,
    bf = 0,
    tl = 0,
    nl = null;
  function mE(e, n) {
    if (po === null) {
      var i = (po = []);
      ((bf = 0),
        (tl = wd()),
        (nl = {
          status: 'pending',
          value: void 0,
          then: function (o) {
            i.push(o);
          },
        }));
    }
    return (bf++, n.then(Mp, Mp), n);
  }
  function Mp() {
    if (--bf === 0 && po !== null) {
      nl !== null && (nl.status = 'fulfilled');
      var e = po;
      ((po = null), (tl = 0), (nl = null));
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function pE(e, n) {
    var i = [],
      o = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (f) {
          i.push(f);
        },
      };
    return (
      e.then(
        function () {
          ((o.status = 'fulfilled'), (o.value = n));
          for (var f = 0; f < i.length; f++) (0, i[f])(n);
        },
        function (f) {
          for (o.status = 'rejected', o.reason = f, f = 0; f < i.length; f++) (0, i[f])(void 0);
        },
      ),
      o
    );
  }
  var Np = N.S;
  N.S = function (e, n) {
    ((my = St()),
      typeof n == 'object' && n !== null && typeof n.then == 'function' && mE(e, n),
      Np !== null && Np(e, n));
  };
  var pi = D(null);
  function Sf() {
    var e = pi.current;
    return e !== null ? e : st.pooledCache;
  }
  function Vs(e, n) {
    n === null ? X(pi, pi.current) : X(pi, n.pool);
  }
  function _p() {
    var e = Sf();
    return e === null ? null : {parent: Ut._currentValue, pool: e};
  }
  var al = Error(l(460)),
    xf = Error(l(474)),
    qs = Error(l(542)),
    Ys = {then: function () {}};
  function Lp(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function jp(e, n, i) {
    switch (((i = e[i]), i === void 0 ? e.push(n) : i !== n && (n.then(Pa, Pa), (n = i)), n.status)) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((e = n.reason), Up(e), e);
      default:
        if (typeof n.status == 'string') n.then(Pa, Pa);
        else {
          if (((e = st), e !== null && 100 < e.shellSuspendCounter)) throw Error(l(482));
          ((e = n),
            (e.status = 'pending'),
            e.then(
              function (o) {
                if (n.status === 'pending') {
                  var f = n;
                  ((f.status = 'fulfilled'), (f.value = o));
                }
              },
              function (o) {
                if (n.status === 'pending') {
                  var f = n;
                  ((f.status = 'rejected'), (f.reason = o));
                }
              },
            ));
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((e = n.reason), Up(e), e);
        }
        throw ((yi = n), al);
    }
  }
  function gi(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (i) {
      throw i !== null && typeof i == 'object' && typeof i.then == 'function' ? ((yi = i), al) : i;
    }
  }
  var yi = null;
  function zp() {
    if (yi === null) throw Error(l(459));
    var e = yi;
    return ((yi = null), e);
  }
  function Up(e) {
    if (e === al || e === qs) throw Error(l(483));
  }
  var rl = null,
    go = 0;
  function $s(e) {
    var n = go;
    return ((go += 1), rl === null && (rl = []), jp(rl, e, n));
  }
  function yo(e, n) {
    ((n = n.props.ref), (e.ref = n !== void 0 ? n : null));
  }
  function Fs(e, n) {
    throw n.$$typeof === S
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(l(31, e === '[object Object]' ? 'object with keys {' + Object.keys(n).join(', ') + '}' : e)));
  }
  function Hp(e) {
    function n(k, U) {
      if (e) {
        var q = k.deletions;
        q === null ? ((k.deletions = [U]), (k.flags |= 16)) : q.push(U);
      }
    }
    function i(k, U) {
      if (!e) return null;
      for (; U !== null; ) (n(k, U), (U = U.sibling));
      return null;
    }
    function o(k) {
      for (var U = new Map(); k !== null; ) (k.key !== null ? U.set(k.key, k) : U.set(k.index, k), (k = k.sibling));
      return U;
    }
    function f(k, U) {
      return ((k = qa(k, U)), (k.index = 0), (k.sibling = null), k);
    }
    function p(k, U, q) {
      return (
        (k.index = q),
        e
          ? ((q = k.alternate),
            q !== null ? ((q = q.index), q < U ? ((k.flags |= 67108866), U) : q) : ((k.flags |= 67108866), U))
          : ((k.flags |= 1048576), U)
      );
    }
    function v(k) {
      return (e && k.alternate === null && (k.flags |= 67108866), k);
    }
    function E(k, U, q, te) {
      return U === null || U.tag !== 6
        ? ((U = uf(q, k.mode, te)), (U.return = k), U)
        : ((U = f(U, q)), (U.return = k), U);
    }
    function L(k, U, q, te) {
      var De = q.type;
      return De === w
        ? J(k, U, q.props.children, te, q.key)
        : U !== null &&
            (U.elementType === De || (typeof De == 'object' && De !== null && De.$$typeof === P && gi(De) === U.type))
          ? ((U = f(U, q.props)), yo(U, q), (U.return = k), U)
          : ((U = Hs(q.type, q.key, q.props, null, k.mode, te)), yo(U, q), (U.return = k), U);
    }
    function Y(k, U, q, te) {
      return U === null ||
        U.tag !== 4 ||
        U.stateNode.containerInfo !== q.containerInfo ||
        U.stateNode.implementation !== q.implementation
        ? ((U = cf(q, k.mode, te)), (U.return = k), U)
        : ((U = f(U, q.children || [])), (U.return = k), U);
    }
    function J(k, U, q, te, De) {
      return U === null || U.tag !== 7
        ? ((U = fi(q, k.mode, te, De)), (U.return = k), U)
        : ((U = f(U, q)), (U.return = k), U);
    }
    function ne(k, U, q) {
      if ((typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint')
        return ((U = uf('' + U, k.mode, q)), (U.return = k), U);
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case x:
            return ((q = Hs(U.type, U.key, U.props, null, k.mode, q)), yo(q, U), (q.return = k), q);
          case C:
            return ((U = cf(U, k.mode, q)), (U.return = k), U);
          case P:
            return ((U = gi(U)), ne(k, U, q));
        }
        if (he(U) || le(U)) return ((U = fi(U, k.mode, q, null)), (U.return = k), U);
        if (typeof U.then == 'function') return ne(k, $s(U), q);
        if (U.$$typeof === _) return ne(k, Ps(k, U), q);
        Fs(k, U);
      }
      return null;
    }
    function G(k, U, q, te) {
      var De = U !== null ? U.key : null;
      if ((typeof q == 'string' && q !== '') || typeof q == 'number' || typeof q == 'bigint')
        return De !== null ? null : E(k, U, '' + q, te);
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case x:
            return q.key === De ? L(k, U, q, te) : null;
          case C:
            return q.key === De ? Y(k, U, q, te) : null;
          case P:
            return ((q = gi(q)), G(k, U, q, te));
        }
        if (he(q) || le(q)) return De !== null ? null : J(k, U, q, te, null);
        if (typeof q.then == 'function') return G(k, U, $s(q), te);
        if (q.$$typeof === _) return G(k, U, Ps(k, q), te);
        Fs(k, q);
      }
      return null;
    }
    function Q(k, U, q, te, De) {
      if ((typeof te == 'string' && te !== '') || typeof te == 'number' || typeof te == 'bigint')
        return ((k = k.get(q) || null), E(U, k, '' + te, De));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case x:
            return ((k = k.get(te.key === null ? q : te.key) || null), L(U, k, te, De));
          case C:
            return ((k = k.get(te.key === null ? q : te.key) || null), Y(U, k, te, De));
          case P:
            return ((te = gi(te)), Q(k, U, q, te, De));
        }
        if (he(te) || le(te)) return ((k = k.get(q) || null), J(U, k, te, De, null));
        if (typeof te.then == 'function') return Q(k, U, q, $s(te), De);
        if (te.$$typeof === _) return Q(k, U, q, Ps(U, te), De);
        Fs(U, te);
      }
      return null;
    }
    function Se(k, U, q, te) {
      for (var De = null, et = null, Oe = U, Ve = (U = 0), Xe = null; Oe !== null && Ve < q.length; Ve++) {
        Oe.index > Ve ? ((Xe = Oe), (Oe = null)) : (Xe = Oe.sibling);
        var tt = G(k, Oe, q[Ve], te);
        if (tt === null) {
          Oe === null && (Oe = Xe);
          break;
        }
        (e && Oe && tt.alternate === null && n(k, Oe),
          (U = p(tt, U, Ve)),
          et === null ? (De = tt) : (et.sibling = tt),
          (et = tt),
          (Oe = Xe));
      }
      if (Ve === q.length) return (i(k, Oe), Je && Ya(k, Ve), De);
      if (Oe === null) {
        for (; Ve < q.length; Ve++)
          ((Oe = ne(k, q[Ve], te)),
            Oe !== null && ((U = p(Oe, U, Ve)), et === null ? (De = Oe) : (et.sibling = Oe), (et = Oe)));
        return (Je && Ya(k, Ve), De);
      }
      for (Oe = o(Oe); Ve < q.length; Ve++)
        ((Xe = Q(Oe, k, Ve, q[Ve], te)),
          Xe !== null &&
            (e && Xe.alternate !== null && Oe.delete(Xe.key === null ? Ve : Xe.key),
            (U = p(Xe, U, Ve)),
            et === null ? (De = Xe) : (et.sibling = Xe),
            (et = Xe)));
      return (
        e &&
          Oe.forEach(function (Ur) {
            return n(k, Ur);
          }),
        Je && Ya(k, Ve),
        De
      );
    }
    function Ne(k, U, q, te) {
      if (q == null) throw Error(l(151));
      for (
        var De = null, et = null, Oe = U, Ve = (U = 0), Xe = null, tt = q.next();
        Oe !== null && !tt.done;
        Ve++, tt = q.next()
      ) {
        Oe.index > Ve ? ((Xe = Oe), (Oe = null)) : (Xe = Oe.sibling);
        var Ur = G(k, Oe, tt.value, te);
        if (Ur === null) {
          Oe === null && (Oe = Xe);
          break;
        }
        (e && Oe && Ur.alternate === null && n(k, Oe),
          (U = p(Ur, U, Ve)),
          et === null ? (De = Ur) : (et.sibling = Ur),
          (et = Ur),
          (Oe = Xe));
      }
      if (tt.done) return (i(k, Oe), Je && Ya(k, Ve), De);
      if (Oe === null) {
        for (; !tt.done; Ve++, tt = q.next())
          ((tt = ne(k, tt.value, te)),
            tt !== null && ((U = p(tt, U, Ve)), et === null ? (De = tt) : (et.sibling = tt), (et = tt)));
        return (Je && Ya(k, Ve), De);
      }
      for (Oe = o(Oe); !tt.done; Ve++, tt = q.next())
        ((tt = Q(Oe, k, Ve, tt.value, te)),
          tt !== null &&
            (e && tt.alternate !== null && Oe.delete(tt.key === null ? Ve : tt.key),
            (U = p(tt, U, Ve)),
            et === null ? (De = tt) : (et.sibling = tt),
            (et = tt)));
      return (
        e &&
          Oe.forEach(function (OC) {
            return n(k, OC);
          }),
        Je && Ya(k, Ve),
        De
      );
    }
    function ot(k, U, q, te) {
      if (
        (typeof q == 'object' && q !== null && q.type === w && q.key === null && (q = q.props.children),
        typeof q == 'object' && q !== null)
      ) {
        switch (q.$$typeof) {
          case x:
            e: {
              for (var De = q.key; U !== null; ) {
                if (U.key === De) {
                  if (((De = q.type), De === w)) {
                    if (U.tag === 7) {
                      (i(k, U.sibling), (te = f(U, q.props.children)), (te.return = k), (k = te));
                      break e;
                    }
                  } else if (
                    U.elementType === De ||
                    (typeof De == 'object' && De !== null && De.$$typeof === P && gi(De) === U.type)
                  ) {
                    (i(k, U.sibling), (te = f(U, q.props)), yo(te, q), (te.return = k), (k = te));
                    break e;
                  }
                  i(k, U);
                  break;
                } else n(k, U);
                U = U.sibling;
              }
              q.type === w
                ? ((te = fi(q.props.children, k.mode, te, q.key)), (te.return = k), (k = te))
                : ((te = Hs(q.type, q.key, q.props, null, k.mode, te)), yo(te, q), (te.return = k), (k = te));
            }
            return v(k);
          case C:
            e: {
              for (De = q.key; U !== null; ) {
                if (U.key === De)
                  if (
                    U.tag === 4 &&
                    U.stateNode.containerInfo === q.containerInfo &&
                    U.stateNode.implementation === q.implementation
                  ) {
                    (i(k, U.sibling), (te = f(U, q.children || [])), (te.return = k), (k = te));
                    break e;
                  } else {
                    i(k, U);
                    break;
                  }
                else n(k, U);
                U = U.sibling;
              }
              ((te = cf(q, k.mode, te)), (te.return = k), (k = te));
            }
            return v(k);
          case P:
            return ((q = gi(q)), ot(k, U, q, te));
        }
        if (he(q)) return Se(k, U, q, te);
        if (le(q)) {
          if (((De = le(q)), typeof De != 'function')) throw Error(l(150));
          return ((q = De.call(q)), Ne(k, U, q, te));
        }
        if (typeof q.then == 'function') return ot(k, U, $s(q), te);
        if (q.$$typeof === _) return ot(k, U, Ps(k, q), te);
        Fs(k, q);
      }
      return (typeof q == 'string' && q !== '') || typeof q == 'number' || typeof q == 'bigint'
        ? ((q = '' + q),
          U !== null && U.tag === 6
            ? (i(k, U.sibling), (te = f(U, q)), (te.return = k), (k = te))
            : (i(k, U), (te = uf(q, k.mode, te)), (te.return = k), (k = te)),
          v(k))
        : i(k, U);
    }
    return function (k, U, q, te) {
      try {
        go = 0;
        var De = ot(k, U, q, te);
        return ((rl = null), De);
      } catch (Oe) {
        if (Oe === al || Oe === qs) throw Oe;
        var et = On(29, Oe, null, k.mode);
        return ((et.lanes = te), (et.return = k), et);
      } finally {
      }
    };
  }
  var vi = Hp(!0),
    Bp = Hp(!1),
    br = !1;
  function wf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {pending: null, lanes: 0, hiddenCallbacks: null},
      callbacks: null,
    };
  }
  function Ef(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Sr(e) {
    return {lane: e, tag: 0, payload: null, callback: null, next: null};
  }
  function xr(e, n, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (nt & 2) !== 0)) {
      var f = o.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (o.pending = n),
        (n = Us(e)),
        xp(e, null, i),
        n
      );
    }
    return (zs(e, o, n, i), Us(e));
  }
  function vo(e, n, i) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194048) !== 0))) {
      var o = n.lanes;
      ((o &= e.pendingLanes), (i |= o), (n.lanes = i), M(e, i));
    }
  }
  function Cf(e, n) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var f = null,
        p = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = {lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null};
          (p === null ? (f = p = v) : (p = p.next = v), (i = i.next));
        } while (i !== null);
        p === null ? (f = p = n) : (p = p.next = n);
      } else f = p = n;
      ((i = {baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: o.shared, callbacks: o.callbacks}),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate), e === null ? (i.firstBaseUpdate = n) : (e.next = n), (i.lastBaseUpdate = n));
  }
  var Tf = !1;
  function bo() {
    if (Tf) {
      var e = nl;
      if (e !== null) throw e;
    }
  }
  function So(e, n, i, o) {
    Tf = !1;
    var f = e.updateQueue;
    br = !1;
    var p = f.firstBaseUpdate,
      v = f.lastBaseUpdate,
      E = f.shared.pending;
    if (E !== null) {
      f.shared.pending = null;
      var L = E,
        Y = L.next;
      ((L.next = null), v === null ? (p = Y) : (v.next = Y), (v = L));
      var J = e.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (E = J.lastBaseUpdate),
        E !== v && (E === null ? (J.firstBaseUpdate = Y) : (E.next = Y), (J.lastBaseUpdate = L)));
    }
    if (p !== null) {
      var ne = f.baseState;
      ((v = 0), (J = Y = L = null), (E = p));
      do {
        var G = E.lane & -536870913,
          Q = G !== E.lane;
        if (Q ? (Ke & G) === G : (o & G) === G) {
          (G !== 0 && G === tl && (Tf = !0),
            J !== null && (J = J.next = {lane: 0, tag: E.tag, payload: E.payload, callback: null, next: null}));
          e: {
            var Se = e,
              Ne = E;
            G = n;
            var ot = i;
            switch (Ne.tag) {
              case 1:
                if (((Se = Ne.payload), typeof Se == 'function')) {
                  ne = Se.call(ot, ne, G);
                  break e;
                }
                ne = Se;
                break e;
              case 3:
                Se.flags = (Se.flags & -65537) | 128;
              case 0:
                if (((Se = Ne.payload), (G = typeof Se == 'function' ? Se.call(ot, ne, G) : Se), G == null)) break e;
                ne = g({}, ne, G);
                break e;
              case 2:
                br = !0;
            }
          }
          ((G = E.callback),
            G !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = f.callbacks),
              Q === null ? (f.callbacks = [G]) : Q.push(G)));
        } else
          ((Q = {lane: G, tag: E.tag, payload: E.payload, callback: E.callback, next: null}),
            J === null ? ((Y = J = Q), (L = ne)) : (J = J.next = Q),
            (v |= G));
        if (((E = E.next), E === null)) {
          if (((E = f.shared.pending), E === null)) break;
          ((Q = E), (E = Q.next), (Q.next = null), (f.lastBaseUpdate = Q), (f.shared.pending = null));
        }
      } while (!0);
      (J === null && (L = ne),
        (f.baseState = L),
        (f.firstBaseUpdate = Y),
        (f.lastBaseUpdate = J),
        p === null && (f.shared.lanes = 0),
        (Or |= v),
        (e.lanes = v),
        (e.memoizedState = ne));
    }
  }
  function kp(e, n) {
    if (typeof e != 'function') throw Error(l(191, e));
    e.call(n);
  }
  function Pp(e, n) {
    var i = e.callbacks;
    if (i !== null) for (e.callbacks = null, e = 0; e < i.length; e++) kp(i[e], n);
  }
  var il = D(null),
    Gs = D(0);
  function Vp(e, n) {
    ((e = er), X(Gs, e), X(il, n), (er = e | n.baseLanes));
  }
  function Of() {
    (X(Gs, er), X(il, il.current));
  }
  function Rf() {
    ((er = Gs.current), K(il), K(Gs));
  }
  var Rn = D(null),
    Gn = null;
  function wr(e) {
    var n = e.alternate;
    (X(_t, _t.current & 1),
      X(Rn, e),
      Gn === null && (n === null || il.current !== null || n.memoizedState !== null) && (Gn = e));
  }
  function Af(e) {
    (X(_t, _t.current), X(Rn, e), Gn === null && (Gn = e));
  }
  function qp(e) {
    e.tag === 22 ? (X(_t, _t.current), X(Rn, e), Gn === null && (Gn = e)) : Er();
  }
  function Er() {
    (X(_t, _t.current), X(Rn, Rn.current));
  }
  function An(e) {
    (K(Rn), Gn === e && (Gn = null), K(_t));
  }
  var _t = D(0);
  function Ks(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || jd(i) || zd(i))) return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === 'forwards' ||
          n.memoizedProps.revealOrder === 'backwards' ||
          n.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          n.memoizedProps.revealOrder === 'together')
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Ga = 0,
    Pe = null,
    it = null,
    Ht = null,
    Xs = !1,
    ll = !1,
    bi = !1,
    Qs = 0,
    xo = 0,
    ol = null,
    gE = 0;
  function Tt() {
    throw Error(l(321));
  }
  function Df(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++) if (!Tn(e[i], n[i])) return !1;
    return !0;
  }
  function Mf(e, n, i, o, f, p) {
    return (
      (Ga = p),
      (Pe = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? Tg : Ff),
      (bi = !1),
      (p = i(o, f)),
      (bi = !1),
      ll && (p = $p(n, i, o, f)),
      Yp(e),
      p
    );
  }
  function Yp(e) {
    N.H = Co;
    var n = it !== null && it.next !== null;
    if (((Ga = 0), (Ht = it = Pe = null), (Xs = !1), (xo = 0), (ol = null), n)) throw Error(l(300));
    e === null || Bt || ((e = e.dependencies), e !== null && ks(e) && (Bt = !0));
  }
  function $p(e, n, i, o) {
    Pe = e;
    var f = 0;
    do {
      if ((ll && (ol = null), (xo = 0), (ll = !1), 25 <= f)) throw Error(l(301));
      if (((f += 1), (Ht = it = null), e.updateQueue != null)) {
        var p = e.updateQueue;
        ((p.lastEffect = null), (p.events = null), (p.stores = null), p.memoCache != null && (p.memoCache.index = 0));
      }
      ((N.H = Og), (p = n(i, o)));
    } while (ll);
    return p;
  }
  function yE() {
    var e = N.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == 'function' ? wo(n) : n),
      (e = e.useState()[0]),
      (it !== null ? it.memoizedState : null) !== e && (Pe.flags |= 1024),
      n
    );
  }
  function Nf() {
    var e = Qs !== 0;
    return ((Qs = 0), e);
  }
  function _f(e, n, i) {
    ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i));
  }
  function Lf(e) {
    if (Xs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        (n !== null && (n.pending = null), (e = e.next));
      }
      Xs = !1;
    }
    ((Ga = 0), (Ht = it = Pe = null), (ll = !1), (xo = Qs = 0), (ol = null));
  }
  function cn() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return (Ht === null ? (Pe.memoizedState = Ht = e) : (Ht = Ht.next = e), Ht);
  }
  function Lt() {
    if (it === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var n = Ht === null ? Pe.memoizedState : Ht.next;
    if (n !== null) ((Ht = n), (it = e));
    else {
      if (e === null) throw Pe.alternate === null ? Error(l(467)) : Error(l(310));
      ((it = e),
        (e = {
          memoizedState: it.memoizedState,
          baseState: it.baseState,
          baseQueue: it.baseQueue,
          queue: it.queue,
          next: null,
        }),
        Ht === null ? (Pe.memoizedState = Ht = e) : (Ht = Ht.next = e));
    }
    return Ht;
  }
  function Is() {
    return {lastEffect: null, events: null, stores: null, memoCache: null};
  }
  function wo(e) {
    var n = xo;
    return (
      (xo += 1),
      ol === null && (ol = []),
      (e = jp(ol, e, n)),
      (n = Pe),
      (Ht === null ? n.memoizedState : Ht.next) === null &&
        ((n = n.alternate), (N.H = n === null || n.memoizedState === null ? Tg : Ff)),
      e
    );
  }
  function Zs(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return wo(e);
      if (e.$$typeof === _) return It(e);
    }
    throw Error(l(438, String(e)));
  }
  function jf(e) {
    var n = null,
      i = Pe.updateQueue;
    if ((i !== null && (n = i.memoCache), n == null)) {
      var o = Pe.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = {data: [], index: 0}),
      i === null && ((i = Is()), (Pe.updateQueue = i)),
      (i.memoCache = n),
      (i = n.data[n.index]),
      i === void 0)
    )
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++) i[o] = se;
    return (n.index++, i);
  }
  function Ka(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function Js(e) {
    var n = Lt();
    return zf(n, it, e);
  }
  function zf(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = i;
    var f = e.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var v = f.next;
        ((f.next = p.next), (p.next = v));
      }
      ((n.baseQueue = f = p), (o.pending = null));
    }
    if (((p = e.baseState), f === null)) e.memoizedState = p;
    else {
      n = f.next;
      var E = (v = null),
        L = null,
        Y = n,
        J = !1;
      do {
        var ne = Y.lane & -536870913;
        if (ne !== Y.lane ? (Ke & ne) === ne : (Ga & ne) === ne) {
          var G = Y.revertLane;
          if (G === 0)
            (L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null,
                }),
              ne === tl && (J = !0));
          else if ((Ga & G) === G) {
            ((Y = Y.next), G === tl && (J = !0));
            continue;
          } else
            ((ne = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null,
            }),
              L === null ? ((E = L = ne), (v = p)) : (L = L.next = ne),
              (Pe.lanes |= G),
              (Or |= G));
          ((ne = Y.action), bi && i(p, ne), (p = Y.hasEagerState ? Y.eagerState : i(p, ne)));
        } else
          ((G = {
            lane: ne,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null,
          }),
            L === null ? ((E = L = G), (v = p)) : (L = L.next = G),
            (Pe.lanes |= ne),
            (Or |= ne));
        Y = Y.next;
      } while (Y !== null && Y !== n);
      if ((L === null ? (v = p) : (L.next = E), !Tn(p, e.memoizedState) && ((Bt = !0), J && ((i = nl), i !== null))))
        throw i;
      ((e.memoizedState = p), (e.baseState = v), (e.baseQueue = L), (o.lastRenderedState = p));
    }
    return (f === null && (o.lanes = 0), [e.memoizedState, o.dispatch]);
  }
  function Uf(e) {
    var n = Lt(),
      i = n.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      f = i.pending,
      p = n.memoizedState;
    if (f !== null) {
      i.pending = null;
      var v = (f = f.next);
      do ((p = e(p, v.action)), (v = v.next));
      while (v !== f);
      (Tn(p, n.memoizedState) || (Bt = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (i.lastRenderedState = p));
    }
    return [p, o];
  }
  function Fp(e, n, i) {
    var o = Pe,
      f = Lt(),
      p = Je;
    if (p) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = n();
    var v = !Tn((it || f).memoizedState, i);
    if (
      (v && ((f.memoizedState = i), (Bt = !0)),
      (f = f.queue),
      kf(Xp.bind(null, o, f, e), [e]),
      f.getSnapshot !== n || v || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (((o.flags |= 2048), sl(9, {destroy: void 0}, Kp.bind(null, o, f, i, n), null), st === null))
        throw Error(l(349));
      p || (Ga & 127) !== 0 || Gp(o, n, i);
    }
    return i;
  }
  function Gp(e, n, i) {
    ((e.flags |= 16384),
      (e = {getSnapshot: n, value: i}),
      (n = Pe.updateQueue),
      n === null
        ? ((n = Is()), (Pe.updateQueue = n), (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function Kp(e, n, i, o) {
    ((n.value = i), (n.getSnapshot = o), Qp(n) && Ip(e));
  }
  function Xp(e, n, i) {
    return i(function () {
      Qp(n) && Ip(e);
    });
  }
  function Qp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Tn(e, i);
    } catch {
      return !0;
    }
  }
  function Ip(e) {
    var n = ci(e, 2);
    n !== null && bn(n, e, 2);
  }
  function Hf(e) {
    var n = cn();
    if (typeof e == 'function') {
      var i = e;
      if (((e = i()), bi)) {
        dn(!0);
        try {
          i();
        } finally {
          dn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ka, lastRenderedState: e}),
      n
    );
  }
  function Zp(e, n, i, o) {
    return ((e.baseState = i), zf(e, it, typeof o == 'function' ? o : Ka));
  }
  function vE(e, n, i, o, f) {
    if (tu(e)) throw Error(l(485));
    if (((e = n.action), e !== null)) {
      var p = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          p.listeners.push(v);
        },
      };
      (N.T !== null ? i(!0) : (p.isTransition = !1),
        o(p),
        (i = n.pending),
        i === null ? ((p.next = n.pending = p), Jp(n, p)) : ((p.next = i.next), (n.pending = i.next = p)));
    }
  }
  function Jp(e, n) {
    var i = n.action,
      o = n.payload,
      f = e.state;
    if (n.isTransition) {
      var p = N.T,
        v = {};
      N.T = v;
      try {
        var E = i(f, o),
          L = N.S;
        (L !== null && L(v, E), Wp(e, n, E));
      } catch (Y) {
        Bf(e, n, Y);
      } finally {
        (p !== null && v.types !== null && (p.types = v.types), (N.T = p));
      }
    } else
      try {
        ((p = i(f, o)), Wp(e, n, p));
      } catch (Y) {
        Bf(e, n, Y);
      }
  }
  function Wp(e, n, i) {
    i !== null && typeof i == 'object' && typeof i.then == 'function'
      ? i.then(
          function (o) {
            eg(e, n, o);
          },
          function (o) {
            return Bf(e, n, o);
          },
        )
      : eg(e, n, i);
  }
  function eg(e, n, i) {
    ((n.status = 'fulfilled'),
      (n.value = i),
      tg(n),
      (e.state = i),
      (n = e.pending),
      n !== null && ((i = n.next), i === n ? (e.pending = null) : ((i = i.next), (n.next = i), Jp(e, i))));
  }
  function Bf(e, n, i) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do ((n.status = 'rejected'), (n.reason = i), tg(n), (n = n.next));
      while (n !== o);
    }
    e.action = null;
  }
  function tg(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function ng(e, n) {
    return n;
  }
  function ag(e, n) {
    if (Je) {
      var i = st.formState;
      if (i !== null) {
        e: {
          var o = Pe;
          if (Je) {
            if (gt) {
              t: {
                for (var f = gt, p = Fn; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (((f = Kn(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((p = f.data), (f = p === 'F!' || p === 'F' ? f : null));
              }
              if (f) {
                ((gt = Kn(f.nextSibling)), (o = f.data === 'F!'));
                break e;
              }
            }
            yr(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return (
      (i = cn()),
      (i.memoizedState = i.baseState = n),
      (o = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ng, lastRenderedState: n}),
      (i.queue = o),
      (i = wg.bind(null, Pe, o)),
      (o.dispatch = i),
      (o = Hf(!1)),
      (p = $f.bind(null, Pe, !1, o.queue)),
      (o = cn()),
      (f = {state: n, dispatch: null, action: e, pending: null}),
      (o.queue = f),
      (i = vE.bind(null, Pe, f, p, i)),
      (f.dispatch = i),
      (o.memoizedState = e),
      [n, i, !1]
    );
  }
  function rg(e) {
    var n = Lt();
    return ig(n, it, e);
  }
  function ig(e, n, i) {
    if (((n = zf(e, n, ng)[0]), (e = Js(Ka)[0]), typeof n == 'object' && n !== null && typeof n.then == 'function'))
      try {
        var o = wo(n);
      } catch (v) {
        throw v === al ? qs : v;
      }
    else o = n;
    n = Lt();
    var f = n.queue,
      p = f.dispatch;
    return (
      i !== n.memoizedState && ((Pe.flags |= 2048), sl(9, {destroy: void 0}, bE.bind(null, f, i), null)),
      [o, p, e]
    );
  }
  function bE(e, n) {
    e.action = n;
  }
  function lg(e) {
    var n = Lt(),
      i = it;
    if (i !== null) return ig(n, i, e);
    (Lt(), (n = n.memoizedState), (i = Lt()));
    var o = i.queue.dispatch;
    return ((i.memoizedState = e), [n, o, !1]);
  }
  function sl(e, n, i, o) {
    return (
      (e = {tag: e, create: i, deps: o, inst: n, next: null}),
      (n = Pe.updateQueue),
      n === null && ((n = Is()), (Pe.updateQueue = n)),
      (i = n.lastEffect),
      i === null ? (n.lastEffect = e.next = e) : ((o = i.next), (i.next = e), (e.next = o), (n.lastEffect = e)),
      e
    );
  }
  function og() {
    return Lt().memoizedState;
  }
  function Ws(e, n, i, o) {
    var f = cn();
    ((Pe.flags |= e), (f.memoizedState = sl(1 | n, {destroy: void 0}, i, o === void 0 ? null : o)));
  }
  function eu(e, n, i, o) {
    var f = Lt();
    o = o === void 0 ? null : o;
    var p = f.memoizedState.inst;
    it !== null && o !== null && Df(o, it.memoizedState.deps)
      ? (f.memoizedState = sl(n, p, i, o))
      : ((Pe.flags |= e), (f.memoizedState = sl(1 | n, p, i, o)));
  }
  function sg(e, n) {
    Ws(8390656, 8, e, n);
  }
  function kf(e, n) {
    eu(2048, 8, e, n);
  }
  function SE(e) {
    Pe.flags |= 4;
    var n = Pe.updateQueue;
    if (n === null) ((n = Is()), (Pe.updateQueue = n), (n.events = [e]));
    else {
      var i = n.events;
      i === null ? (n.events = [e]) : i.push(e);
    }
  }
  function ug(e) {
    var n = Lt().memoizedState;
    return (
      SE({ref: n, nextImpl: e}),
      function () {
        if ((nt & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function cg(e, n) {
    return eu(4, 2, e, n);
  }
  function fg(e, n) {
    return eu(4, 4, e, n);
  }
  function dg(e, n) {
    if (typeof n == 'function') {
      e = e();
      var i = n(e);
      return function () {
        typeof i == 'function' ? i() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function hg(e, n, i) {
    ((i = i != null ? i.concat([e]) : null), eu(4, 4, dg.bind(null, n, e), i));
  }
  function Pf() {}
  function mg(e, n) {
    var i = Lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Df(n, o[1]) ? o[0] : ((i.memoizedState = [e, n]), e);
  }
  function pg(e, n) {
    var i = Lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Df(n, o[1])) return o[0];
    if (((o = e()), bi)) {
      dn(!0);
      try {
        e();
      } finally {
        dn(!1);
      }
    }
    return ((i.memoizedState = [o, n]), o);
  }
  function Vf(e, n, i) {
    return i === void 0 || ((Ga & 1073741824) !== 0 && (Ke & 261930) === 0)
      ? (e.memoizedState = n)
      : ((e.memoizedState = i), (e = gy()), (Pe.lanes |= e), (Or |= e), i);
  }
  function gg(e, n, i, o) {
    return Tn(i, n)
      ? i
      : il.current !== null
        ? ((e = Vf(e, i, o)), Tn(e, n) || (Bt = !0), e)
        : (Ga & 42) === 0 || ((Ga & 1073741824) !== 0 && (Ke & 261930) === 0)
          ? ((Bt = !0), (e.memoizedState = i))
          : ((e = gy()), (Pe.lanes |= e), (Or |= e), n);
  }
  function yg(e, n, i, o, f) {
    var p = V.p;
    V.p = p !== 0 && 8 > p ? p : 8;
    var v = N.T,
      E = {};
    ((N.T = E), $f(e, !1, n, i));
    try {
      var L = f(),
        Y = N.S;
      if ((Y !== null && Y(E, L), L !== null && typeof L == 'object' && typeof L.then == 'function')) {
        var J = pE(L, o);
        Eo(e, n, J, Nn(e));
      } else Eo(e, n, o, Nn(e));
    } catch (ne) {
      Eo(e, n, {then: function () {}, status: 'rejected', reason: ne}, Nn());
    } finally {
      ((V.p = p), v !== null && E.types !== null && (v.types = E.types), (N.T = v));
    }
  }
  function xE() {}
  function qf(e, n, i, o) {
    if (e.tag !== 5) throw Error(l(476));
    var f = vg(e).queue;
    yg(
      e,
      f,
      n,
      B,
      i === null
        ? xE
        : function () {
            return (bg(e), i(o));
          },
    );
  }
  function vg(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ka, lastRenderedState: B},
      next: null,
    };
    var i = {};
    return (
      (n.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ka, lastRenderedState: i},
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function bg(e) {
    var n = vg(e);
    (n.next === null && (n = e.alternate.memoizedState), Eo(e, n.next.queue, {}, Nn()));
  }
  function Yf() {
    return It(Po);
  }
  function Sg() {
    return Lt().memoizedState;
  }
  function xg() {
    return Lt().memoizedState;
  }
  function wE(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = Nn();
          e = Sr(i);
          var o = xr(n, e, i);
          (o !== null && (bn(o, n, i), vo(o, n, i)), (n = {cache: vf()}), (e.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function EE(e, n, i) {
    var o = Nn();
    ((i = {lane: o, revertLane: 0, gesture: null, action: i, hasEagerState: !1, eagerState: null, next: null}),
      tu(e) ? Eg(n, i) : ((i = of(e, n, i, o)), i !== null && (bn(i, e, o), Cg(i, n, o))));
  }
  function wg(e, n, i) {
    var o = Nn();
    Eo(e, n, i, o);
  }
  function Eo(e, n, i, o) {
    var f = {lane: o, revertLane: 0, gesture: null, action: i, hasEagerState: !1, eagerState: null, next: null};
    if (tu(e)) Eg(n, f);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && ((p = n.lastRenderedReducer), p !== null))
        try {
          var v = n.lastRenderedState,
            E = p(v, i);
          if (((f.hasEagerState = !0), (f.eagerState = E), Tn(E, v))) return (zs(e, n, f, 0), st === null && js(), !1);
        } catch {
        } finally {
        }
      if (((i = of(e, n, f, o)), i !== null)) return (bn(i, e, o), Cg(i, n, o), !0);
    }
    return !1;
  }
  function $f(e, n, i, o) {
    if (
      ((o = {lane: 2, revertLane: wd(), gesture: null, action: o, hasEagerState: !1, eagerState: null, next: null}),
      tu(e))
    ) {
      if (n) throw Error(l(479));
    } else ((n = of(e, i, o, 2)), n !== null && bn(n, e, 2));
  }
  function tu(e) {
    var n = e.alternate;
    return e === Pe || (n !== null && n === Pe);
  }
  function Eg(e, n) {
    ll = Xs = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)), (e.pending = n));
  }
  function Cg(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      ((o &= e.pendingLanes), (i |= o), (n.lanes = i), M(e, i));
    }
  }
  var Co = {
    readContext: It,
    use: Zs,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useLayoutEffect: Tt,
    useInsertionEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    useHostTransitionStatus: Tt,
    useFormState: Tt,
    useActionState: Tt,
    useOptimistic: Tt,
    useMemoCache: Tt,
    useCacheRefresh: Tt,
  };
  Co.useEffectEvent = Tt;
  var Tg = {
      readContext: It,
      use: Zs,
      useCallback: function (e, n) {
        return ((cn().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: It,
      useEffect: sg,
      useImperativeHandle: function (e, n, i) {
        ((i = i != null ? i.concat([e]) : null), Ws(4194308, 4, dg.bind(null, n, e), i));
      },
      useLayoutEffect: function (e, n) {
        return Ws(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        Ws(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = cn();
        n = n === void 0 ? null : n;
        var o = e();
        if (bi) {
          dn(!0);
          try {
            e();
          } finally {
            dn(!1);
          }
        }
        return ((i.memoizedState = [o, n]), o);
      },
      useReducer: function (e, n, i) {
        var o = cn();
        if (i !== void 0) {
          var f = i(n);
          if (bi) {
            dn(!0);
            try {
              i(n);
            } finally {
              dn(!1);
            }
          }
        } else f = n;
        return (
          (o.memoizedState = o.baseState = f),
          (e = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: f}),
          (o.queue = e),
          (e = e.dispatch = EE.bind(null, Pe, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = cn();
        return ((e = {current: e}), (n.memoizedState = e));
      },
      useState: function (e) {
        e = Hf(e);
        var n = e.queue,
          i = wg.bind(null, Pe, n);
        return ((n.dispatch = i), [e.memoizedState, i]);
      },
      useDebugValue: Pf,
      useDeferredValue: function (e, n) {
        var i = cn();
        return Vf(i, e, n);
      },
      useTransition: function () {
        var e = Hf(!1);
        return ((e = yg.bind(null, Pe, e.queue, !0, !1)), (cn().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, n, i) {
        var o = Pe,
          f = cn();
        if (Je) {
          if (i === void 0) throw Error(l(407));
          i = i();
        } else {
          if (((i = n()), st === null)) throw Error(l(349));
          (Ke & 127) !== 0 || Gp(o, n, i);
        }
        f.memoizedState = i;
        var p = {value: i, getSnapshot: n};
        return (
          (f.queue = p),
          sg(Xp.bind(null, o, p, e), [e]),
          (o.flags |= 2048),
          sl(9, {destroy: void 0}, Kp.bind(null, o, p, i, n), null),
          i
        );
      },
      useId: function () {
        var e = cn(),
          n = st.identifierPrefix;
        if (Je) {
          var i = ba,
            o = va;
          ((i = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + i),
            (n = '_' + n + 'R_' + i),
            (i = Qs++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += '_'));
        } else ((i = gE++), (n = '_' + n + 'r_' + i.toString(32) + '_'));
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: Yf,
      useFormState: ag,
      useActionState: ag,
      useOptimistic: function (e) {
        var n = cn();
        n.memoizedState = n.baseState = e;
        var i = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
        return ((n.queue = i), (n = $f.bind(null, Pe, !0, i)), (i.dispatch = n), [e, n]);
      },
      useMemoCache: jf,
      useCacheRefresh: function () {
        return (cn().memoizedState = wE.bind(null, Pe));
      },
      useEffectEvent: function (e) {
        var n = cn(),
          i = {impl: e};
        return (
          (n.memoizedState = i),
          function () {
            if ((nt & 2) !== 0) throw Error(l(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ff = {
      readContext: It,
      use: Zs,
      useCallback: mg,
      useContext: It,
      useEffect: kf,
      useImperativeHandle: hg,
      useInsertionEffect: cg,
      useLayoutEffect: fg,
      useMemo: pg,
      useReducer: Js,
      useRef: og,
      useState: function () {
        return Js(Ka);
      },
      useDebugValue: Pf,
      useDeferredValue: function (e, n) {
        var i = Lt();
        return gg(i, it.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Js(Ka)[0],
          n = Lt().memoizedState;
        return [typeof e == 'boolean' ? e : wo(e), n];
      },
      useSyncExternalStore: Fp,
      useId: Sg,
      useHostTransitionStatus: Yf,
      useFormState: rg,
      useActionState: rg,
      useOptimistic: function (e, n) {
        var i = Lt();
        return Zp(i, it, e, n);
      },
      useMemoCache: jf,
      useCacheRefresh: xg,
    };
  Ff.useEffectEvent = ug;
  var Og = {
    readContext: It,
    use: Zs,
    useCallback: mg,
    useContext: It,
    useEffect: kf,
    useImperativeHandle: hg,
    useInsertionEffect: cg,
    useLayoutEffect: fg,
    useMemo: pg,
    useReducer: Uf,
    useRef: og,
    useState: function () {
      return Uf(Ka);
    },
    useDebugValue: Pf,
    useDeferredValue: function (e, n) {
      var i = Lt();
      return it === null ? Vf(i, e, n) : gg(i, it.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Uf(Ka)[0],
        n = Lt().memoizedState;
      return [typeof e == 'boolean' ? e : wo(e), n];
    },
    useSyncExternalStore: Fp,
    useId: Sg,
    useHostTransitionStatus: Yf,
    useFormState: lg,
    useActionState: lg,
    useOptimistic: function (e, n) {
      var i = Lt();
      return it !== null ? Zp(i, it, e, n) : ((i.baseState = e), [e, i.queue.dispatch]);
    },
    useMemoCache: jf,
    useCacheRefresh: xg,
  };
  Og.useEffectEvent = ug;
  function Gf(e, n, i, o) {
    ((n = e.memoizedState),
      (i = i(o, n)),
      (i = i == null ? n : g({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Kf = {
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var o = Nn(),
        f = Sr(o);
      ((f.payload = n), i != null && (f.callback = i), (n = xr(e, f, o)), n !== null && (bn(n, e, o), vo(n, e, o)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var o = Nn(),
        f = Sr(o);
      ((f.tag = 1),
        (f.payload = n),
        i != null && (f.callback = i),
        (n = xr(e, f, o)),
        n !== null && (bn(n, e, o), vo(n, e, o)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = Nn(),
        o = Sr(i);
      ((o.tag = 2), n != null && (o.callback = n), (n = xr(e, o, i)), n !== null && (bn(n, e, i), vo(n, e, i)));
    },
  };
  function Rg(e, n, i, o, f, p, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, p, v)
        : n.prototype && n.prototype.isPureReactComponent
          ? !uo(i, o) || !uo(f, p)
          : !0
    );
  }
  function Ag(e, n, i, o) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' && n.componentWillReceiveProps(i, o),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' && n.UNSAFE_componentWillReceiveProps(i, o),
      n.state !== e && Kf.enqueueReplaceState(n, n.state, null));
  }
  function Si(e, n) {
    var i = n;
    if ('ref' in n) {
      i = {};
      for (var o in n) o !== 'ref' && (i[o] = n[o]);
    }
    if ((e = e.defaultProps)) {
      i === n && (i = g({}, i));
      for (var f in e) i[f] === void 0 && (i[f] = e[f]);
    }
    return i;
  }
  function Dg(e) {
    Ls(e);
  }
  function Mg(e) {
    console.error(e);
  }
  function Ng(e) {
    Ls(e);
  }
  function nu(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, {componentStack: n.stack});
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function _g(e, n, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {componentStack: i.stack, errorBoundary: n.tag === 1 ? n.stateNode : null});
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function Xf(e, n, i) {
    return (
      (i = Sr(i)),
      (i.tag = 3),
      (i.payload = {element: null}),
      (i.callback = function () {
        nu(e, n);
      }),
      i
    );
  }
  function Lg(e) {
    return ((e = Sr(e)), (e.tag = 3), e);
  }
  function jg(e, n, i, o) {
    var f = i.type.getDerivedStateFromError;
    if (typeof f == 'function') {
      var p = o.value;
      ((e.payload = function () {
        return f(p);
      }),
        (e.callback = function () {
          _g(n, i, o);
        }));
    }
    var v = i.stateNode;
    v !== null &&
      typeof v.componentDidCatch == 'function' &&
      (e.callback = function () {
        (_g(n, i, o), typeof f != 'function' && (Rr === null ? (Rr = new Set([this])) : Rr.add(this)));
        var E = o.stack;
        this.componentDidCatch(o.value, {componentStack: E !== null ? E : ''});
      });
  }
  function CE(e, n, i, o, f) {
    if (((i.flags |= 32768), o !== null && typeof o == 'object' && typeof o.then == 'function')) {
      if (((n = i.alternate), n !== null && el(n, i, f, !0), (i = Rn.current), i !== null)) {
        switch (i.tag) {
          case 31:
          case 13:
            return (
              Gn === null ? mu() : i.alternate === null && Ot === 0 && (Ot = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = f),
              o === Ys
                ? (i.flags |= 16384)
                : ((n = i.updateQueue), n === null ? (i.updateQueue = new Set([o])) : n.add(o), bd(e, o, f)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              o === Ys
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null
                    ? ((n = {transitions: null, markerInstances: null, retryQueue: new Set([o])}), (i.updateQueue = n))
                    : ((i = n.retryQueue), i === null ? (n.retryQueue = new Set([o])) : i.add(o)),
                  bd(e, o, f)),
              !1
            );
        }
        throw Error(l(435, i.tag));
      }
      return (bd(e, o, f), mu(), !1);
    }
    if (Je)
      return (
        (n = Rn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            o !== hf && ((e = Error(l(422), {cause: o})), ho(qn(e, i))))
          : (o !== hf && ((n = Error(l(423), {cause: o})), ho(qn(n, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (o = qn(o, i)),
            (f = Xf(e.stateNode, o, f)),
            Cf(e, f),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var p = Error(l(520), {cause: o});
    if (((p = qn(p, i)), _o === null ? (_o = [p]) : _o.push(p), Ot !== 4 && (Ot = 2), n === null)) return !0;
    ((o = qn(o, i)), (i = n));
    do {
      switch (i.tag) {
        case 3:
          return ((i.flags |= 65536), (e = f & -f), (i.lanes |= e), (e = Xf(i.stateNode, o, e)), Cf(i, e), !1);
        case 1:
          if (
            ((n = i.type),
            (p = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (p !== null && typeof p.componentDidCatch == 'function' && (Rr === null || !Rr.has(p)))))
          )
            return ((i.flags |= 65536), (f &= -f), (i.lanes |= f), (f = Lg(f)), jg(f, e, i, o), Cf(i, f), !1);
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Qf = Error(l(461)),
    Bt = !1;
  function Zt(e, n, i, o) {
    n.child = e === null ? Bp(n, null, i, o) : vi(n, e.child, i, o);
  }
  function zg(e, n, i, o, f) {
    i = i.render;
    var p = n.ref;
    if ('ref' in o) {
      var v = {};
      for (var E in o) E !== 'ref' && (v[E] = o[E]);
    } else v = o;
    return (
      mi(n),
      (o = Mf(e, n, i, v, p, f)),
      (E = Nf()),
      e !== null && !Bt ? (_f(e, n, f), Xa(e, n, f)) : (Je && E && ff(n), (n.flags |= 1), Zt(e, n, o, f), n.child)
    );
  }
  function Ug(e, n, i, o, f) {
    if (e === null) {
      var p = i.type;
      return typeof p == 'function' && !sf(p) && p.defaultProps === void 0 && i.compare === null
        ? ((n.tag = 15), (n.type = p), Hg(e, n, p, o, f))
        : ((e = Hs(i.type, null, o, n, n.mode, f)), (e.ref = n.ref), (e.return = n), (n.child = e));
    }
    if (((p = e.child), !ad(e, f))) {
      var v = p.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : uo), i(v, o) && e.ref === n.ref)) return Xa(e, n, f);
    }
    return ((n.flags |= 1), (e = qa(p, o)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  function Hg(e, n, i, o, f) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (uo(p, o) && e.ref === n.ref)
        if (((Bt = !1), (n.pendingProps = o = p), ad(e, f))) (e.flags & 131072) !== 0 && (Bt = !0);
        else return ((n.lanes = e.lanes), Xa(e, n, f));
    }
    return If(e, n, i, o, f);
  }
  function Bg(e, n, i, o) {
    var f = o.children,
      p = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        n.stateNode === null &&
        (n.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}),
      o.mode === 'hidden')
    ) {
      if ((n.flags & 128) !== 0) {
        if (((p = p !== null ? p.baseLanes | i : i), e !== null)) {
          for (o = n.child = e.child, f = 0; o !== null; ) ((f = f | o.lanes | o.childLanes), (o = o.sibling));
          o = f & ~p;
        } else ((o = 0), (n.child = null));
        return kg(e, n, p, i, o);
      }
      if ((i & 536870912) !== 0)
        ((n.memoizedState = {baseLanes: 0, cachePool: null}),
          e !== null && Vs(n, p !== null ? p.cachePool : null),
          p !== null ? Vp(n, p) : Of(),
          qp(n));
      else return ((o = n.lanes = 536870912), kg(e, n, p !== null ? p.baseLanes | i : i, i, o));
    } else
      p !== null
        ? (Vs(n, p.cachePool), Vp(n, p), Er(), (n.memoizedState = null))
        : (e !== null && Vs(n, null), Of(), Er());
    return (Zt(e, n, f, i), n.child);
  }
  function To(e, n) {
    return (
      (e !== null && e.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}),
      n.sibling
    );
  }
  function kg(e, n, i, o, f) {
    var p = Sf();
    return (
      (p = p === null ? null : {parent: Ut._currentValue, pool: p}),
      (n.memoizedState = {baseLanes: i, cachePool: p}),
      e !== null && Vs(n, null),
      Of(),
      qp(n),
      e !== null && el(e, n, o, !0),
      (n.childLanes = f),
      null
    );
  }
  function au(e, n) {
    return ((n = iu({mode: n.mode, children: n.children}, e.mode)), (n.ref = e.ref), (e.child = n), (n.return = e), n);
  }
  function Pg(e, n, i) {
    return (vi(n, e.child, null, i), (e = au(n, n.pendingProps)), (e.flags |= 2), An(n), (n.memoizedState = null), e);
  }
  function TE(e, n, i) {
    var o = n.pendingProps,
      f = (n.flags & 128) !== 0;
    if (((n.flags &= -129), e === null)) {
      if (Je) {
        if (o.mode === 'hidden') return ((e = au(n, o)), (n.lanes = 536870912), To(null, e));
        if (
          (Af(n),
          (e = gt)
            ? ((e = Jy(e, Fn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: pr !== null ? {id: va, overflow: ba} : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Ep(e)),
                (i.return = n),
                (n.child = i),
                (Qt = n),
                (gt = null)))
            : (e = null),
          e === null)
        )
          throw yr(n);
        return ((n.lanes = 536870912), null);
      }
      return au(n, o);
    }
    var p = e.memoizedState;
    if (p !== null) {
      var v = p.dehydrated;
      if ((Af(n), f))
        if (n.flags & 256) ((n.flags &= -257), (n = Pg(e, n, i)));
        else if (n.memoizedState !== null) ((n.child = e.child), (n.flags |= 128), (n = null));
        else throw Error(l(558));
      else if ((Bt || el(e, n, i, !1), (f = (i & e.childLanes) !== 0), Bt || f)) {
        if (((o = st), o !== null && ((v = H(o, i)), v !== 0 && v !== p.retryLane)))
          throw ((p.retryLane = v), ci(e, v), bn(o, e, v), Qf);
        (mu(), (n = Pg(e, n, i)));
      } else
        ((e = p.treeContext),
          (gt = Kn(v.nextSibling)),
          (Qt = n),
          (Je = !0),
          (gr = null),
          (Fn = !1),
          e !== null && Op(n, e),
          (n = au(n, o)),
          (n.flags |= 4096));
      return n;
    }
    return ((e = qa(e.child, {mode: o.mode, children: o.children})), (e.ref = n.ref), (n.child = e), (e.return = n), e);
  }
  function ru(e, n) {
    var i = n.ref;
    if (i === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != 'function' && typeof i != 'object') throw Error(l(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function If(e, n, i, o, f) {
    return (
      mi(n),
      (i = Mf(e, n, i, o, void 0, f)),
      (o = Nf()),
      e !== null && !Bt ? (_f(e, n, f), Xa(e, n, f)) : (Je && o && ff(n), (n.flags |= 1), Zt(e, n, i, f), n.child)
    );
  }
  function Vg(e, n, i, o, f, p) {
    return (
      mi(n),
      (n.updateQueue = null),
      (i = $p(n, o, i, f)),
      Yp(e),
      (o = Nf()),
      e !== null && !Bt ? (_f(e, n, p), Xa(e, n, p)) : (Je && o && ff(n), (n.flags |= 1), Zt(e, n, i, p), n.child)
    );
  }
  function qg(e, n, i, o, f) {
    if ((mi(n), n.stateNode === null)) {
      var p = Ii,
        v = i.contextType;
      (typeof v == 'object' && v !== null && (p = It(v)),
        (p = new i(o, p)),
        (n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = Kf),
        (n.stateNode = p),
        (p._reactInternals = n),
        (p = n.stateNode),
        (p.props = o),
        (p.state = n.memoizedState),
        (p.refs = {}),
        wf(n),
        (v = i.contextType),
        (p.context = typeof v == 'object' && v !== null ? It(v) : Ii),
        (p.state = n.memoizedState),
        (v = i.getDerivedStateFromProps),
        typeof v == 'function' && (Gf(n, i, v, o), (p.state = n.memoizedState)),
        typeof i.getDerivedStateFromProps == 'function' ||
          typeof p.getSnapshotBeforeUpdate == 'function' ||
          (typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
          ((v = p.state),
          typeof p.componentWillMount == 'function' && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount(),
          v !== p.state && Kf.enqueueReplaceState(p, p.state, null),
          So(n, o, p, f),
          bo(),
          (p.state = n.memoizedState)),
        typeof p.componentDidMount == 'function' && (n.flags |= 4194308),
        (o = !0));
    } else if (e === null) {
      p = n.stateNode;
      var E = n.memoizedProps,
        L = Si(i, E);
      p.props = L;
      var Y = p.context,
        J = i.contextType;
      ((v = Ii), typeof J == 'object' && J !== null && (v = It(J)));
      var ne = i.getDerivedStateFromProps;
      ((J = typeof ne == 'function' || typeof p.getSnapshotBeforeUpdate == 'function'),
        (E = n.pendingProps !== E),
        J ||
          (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof p.componentWillReceiveProps != 'function') ||
          ((E || Y !== v) && Ag(n, p, o, v)),
        (br = !1));
      var G = n.memoizedState;
      ((p.state = G),
        So(n, o, p, f),
        bo(),
        (Y = n.memoizedState),
        E || G !== Y || br
          ? (typeof ne == 'function' && (Gf(n, i, ne, o), (Y = n.memoizedState)),
            (L = br || Rg(n, i, L, o, G, Y, v))
              ? (J ||
                  (typeof p.UNSAFE_componentWillMount != 'function' && typeof p.componentWillMount != 'function') ||
                  (typeof p.componentWillMount == 'function' && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == 'function' && p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == 'function' && (n.flags |= 4194308))
              : (typeof p.componentDidMount == 'function' && (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = Y)),
            (p.props = o),
            (p.state = Y),
            (p.context = v),
            (o = L))
          : (typeof p.componentDidMount == 'function' && (n.flags |= 4194308), (o = !1)));
    } else {
      ((p = n.stateNode),
        Ef(e, n),
        (v = n.memoizedProps),
        (J = Si(i, v)),
        (p.props = J),
        (ne = n.pendingProps),
        (G = p.context),
        (Y = i.contextType),
        (L = Ii),
        typeof Y == 'object' && Y !== null && (L = It(Y)),
        (E = i.getDerivedStateFromProps),
        (Y = typeof E == 'function' || typeof p.getSnapshotBeforeUpdate == 'function') ||
          (typeof p.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof p.componentWillReceiveProps != 'function') ||
          ((v !== ne || G !== L) && Ag(n, p, o, L)),
        (br = !1),
        (G = n.memoizedState),
        (p.state = G),
        So(n, o, p, f),
        bo());
      var Q = n.memoizedState;
      v !== ne || G !== Q || br || (e !== null && e.dependencies !== null && ks(e.dependencies))
        ? (typeof E == 'function' && (Gf(n, i, E, o), (Q = n.memoizedState)),
          (J = br || Rg(n, i, J, o, G, Q, L) || (e !== null && e.dependencies !== null && ks(e.dependencies)))
            ? (Y ||
                (typeof p.UNSAFE_componentWillUpdate != 'function' && typeof p.componentWillUpdate != 'function') ||
                (typeof p.componentWillUpdate == 'function' && p.componentWillUpdate(o, Q, L),
                typeof p.UNSAFE_componentWillUpdate == 'function' && p.UNSAFE_componentWillUpdate(o, Q, L)),
              typeof p.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
            : (typeof p.componentDidUpdate != 'function' ||
                (v === e.memoizedProps && G === e.memoizedState) ||
                (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != 'function' ||
                (v === e.memoizedProps && G === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = Q)),
          (p.props = o),
          (p.state = Q),
          (p.context = L),
          (o = J))
        : (typeof p.componentDidUpdate != 'function' ||
            (v === e.memoizedProps && G === e.memoizedState) ||
            (n.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != 'function' ||
            (v === e.memoizedProps && G === e.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (p = o),
      ru(e, n),
      (o = (n.flags & 128) !== 0),
      p || o
        ? ((p = n.stateNode),
          (i = o && typeof i.getDerivedStateFromError != 'function' ? null : p.render()),
          (n.flags |= 1),
          e !== null && o ? ((n.child = vi(n, e.child, null, f)), (n.child = vi(n, null, i, f))) : Zt(e, n, i, f),
          (n.memoizedState = p.state),
          (e = n.child))
        : (e = Xa(e, n, f)),
      e
    );
  }
  function Yg(e, n, i, o) {
    return (di(), (n.flags |= 256), Zt(e, n, i, o), n.child);
  }
  var Zf = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};
  function Jf(e) {
    return {baseLanes: e, cachePool: _p()};
  }
  function Wf(e, n, i) {
    return ((e = e !== null ? e.childLanes & ~i : 0), n && (e |= Mn), e);
  }
  function $g(e, n, i) {
    var o = n.pendingProps,
      f = !1,
      p = (n.flags & 128) !== 0,
      v;
    if (
      ((v = p) || (v = e !== null && e.memoizedState === null ? !1 : (_t.current & 2) !== 0),
      v && ((f = !0), (n.flags &= -129)),
      (v = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Je) {
        if (
          (f ? wr(n) : Er(),
          (e = gt)
            ? ((e = Jy(e, Fn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: pr !== null ? {id: va, overflow: ba} : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Ep(e)),
                (i.return = n),
                (n.child = i),
                (Qt = n),
                (gt = null)))
            : (e = null),
          e === null)
        )
          throw yr(n);
        return (zd(e) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var E = o.children;
      return (
        (o = o.fallback),
        f
          ? (Er(),
            (f = n.mode),
            (E = iu({mode: 'hidden', children: E}, f)),
            (o = fi(o, f, i, null)),
            (E.return = n),
            (o.return = n),
            (E.sibling = o),
            (n.child = E),
            (o = n.child),
            (o.memoizedState = Jf(i)),
            (o.childLanes = Wf(e, v, i)),
            (n.memoizedState = Zf),
            To(null, o))
          : (wr(n), ed(n, E))
      );
    }
    var L = e.memoizedState;
    if (L !== null && ((E = L.dehydrated), E !== null)) {
      if (p)
        n.flags & 256
          ? (wr(n), (n.flags &= -257), (n = td(e, n, i)))
          : n.memoizedState !== null
            ? (Er(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (Er(),
              (E = o.fallback),
              (f = n.mode),
              (o = iu({mode: 'visible', children: o.children}, f)),
              (E = fi(E, f, i, null)),
              (E.flags |= 2),
              (o.return = n),
              (E.return = n),
              (o.sibling = E),
              (n.child = o),
              vi(n, e.child, null, i),
              (o = n.child),
              (o.memoizedState = Jf(i)),
              (o.childLanes = Wf(e, v, i)),
              (n.memoizedState = Zf),
              (n = To(null, o)));
      else if ((wr(n), zd(E))) {
        if (((v = E.nextSibling && E.nextSibling.dataset), v)) var Y = v.dgst;
        ((v = Y),
          (o = Error(l(419))),
          (o.stack = ''),
          (o.digest = v),
          ho({value: o, source: null, stack: null}),
          (n = td(e, n, i)));
      } else if ((Bt || el(e, n, i, !1), (v = (i & e.childLanes) !== 0), Bt || v)) {
        if (((v = st), v !== null && ((o = H(v, i)), o !== 0 && o !== L.retryLane)))
          throw ((L.retryLane = o), ci(e, o), bn(v, e, o), Qf);
        (jd(E) || mu(), (n = td(e, n, i)));
      } else
        jd(E)
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = L.treeContext),
            (gt = Kn(E.nextSibling)),
            (Qt = n),
            (Je = !0),
            (gr = null),
            (Fn = !1),
            e !== null && Op(n, e),
            (n = ed(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (Er(),
        (E = o.fallback),
        (f = n.mode),
        (L = e.child),
        (Y = L.sibling),
        (o = qa(L, {mode: 'hidden', children: o.children})),
        (o.subtreeFlags = L.subtreeFlags & 65011712),
        Y !== null ? (E = qa(Y, E)) : ((E = fi(E, f, i, null)), (E.flags |= 2)),
        (E.return = n),
        (o.return = n),
        (o.sibling = E),
        (n.child = o),
        To(null, o),
        (o = n.child),
        (E = e.child.memoizedState),
        E === null
          ? (E = Jf(i))
          : ((f = E.cachePool),
            f !== null ? ((L = Ut._currentValue), (f = f.parent !== L ? {parent: L, pool: L} : f)) : (f = _p()),
            (E = {baseLanes: E.baseLanes | i, cachePool: f})),
        (o.memoizedState = E),
        (o.childLanes = Wf(e, v, i)),
        (n.memoizedState = Zf),
        To(e.child, o))
      : (wr(n),
        (i = e.child),
        (e = i.sibling),
        (i = qa(i, {mode: 'visible', children: o.children})),
        (i.return = n),
        (i.sibling = null),
        e !== null && ((v = n.deletions), v === null ? ((n.deletions = [e]), (n.flags |= 16)) : v.push(e)),
        (n.child = i),
        (n.memoizedState = null),
        i);
  }
  function ed(e, n) {
    return ((n = iu({mode: 'visible', children: n}, e.mode)), (n.return = e), (e.child = n));
  }
  function iu(e, n) {
    return ((e = On(22, e, null, n)), (e.lanes = 0), e);
  }
  function td(e, n, i) {
    return (vi(n, e.child, null, i), (e = ed(n, n.pendingProps.children)), (e.flags |= 2), (n.memoizedState = null), e);
  }
  function Fg(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    (o !== null && (o.lanes |= n), gf(e.return, n, i));
  }
  function nd(e, n, i, o, f, p) {
    var v = e.memoizedState;
    v === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: f,
          treeForkCount: p,
        })
      : ((v.isBackwards = n),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = o),
        (v.tail = i),
        (v.tailMode = f),
        (v.treeForkCount = p));
  }
  function Gg(e, n, i) {
    var o = n.pendingProps,
      f = o.revealOrder,
      p = o.tail;
    o = o.children;
    var v = _t.current,
      E = (v & 2) !== 0;
    if (
      (E ? ((v = (v & 1) | 2), (n.flags |= 128)) : (v &= 1),
      X(_t, v),
      Zt(e, n, o, i),
      (o = Je ? fo : 0),
      !E && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fg(e, i, n);
        else if (e.tag === 19) Fg(e, i, n);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (f) {
      case 'forwards':
        for (i = n.child, f = null; i !== null; )
          ((e = i.alternate), e !== null && Ks(e) === null && (f = i), (i = i.sibling));
        ((i = f),
          i === null ? ((f = n.child), (n.child = null)) : ((f = i.sibling), (i.sibling = null)),
          nd(n, !1, f, i, p, o));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (i = null, f = n.child, n.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && Ks(e) === null)) {
            n.child = f;
            break;
          }
          ((e = f.sibling), (f.sibling = i), (i = f), (f = e));
        }
        nd(n, !0, i, null, p, o);
        break;
      case 'together':
        nd(n, !1, null, null, void 0, o);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Xa(e, n, i) {
    if ((e !== null && (n.dependencies = e.dependencies), (Or |= n.lanes), (i & n.childLanes) === 0))
      if (e !== null) {
        if ((el(e, n, i, !1), (i & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(l(153));
    if (n.child !== null) {
      for (e = n.child, i = qa(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        ((e = e.sibling), (i = i.sibling = qa(e, e.pendingProps)), (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function ad(e, n) {
    return (e.lanes & n) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && ks(e)));
  }
  function OE(e, n, i) {
    switch (n.tag) {
      case 3:
        (ye(n, n.stateNode.containerInfo), vr(n, Ut, e.memoizedState.cache), di());
        break;
      case 27:
      case 5:
        Ue(n);
        break;
      case 4:
        ye(n, n.stateNode.containerInfo);
        break;
      case 10:
        vr(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Af(n), null);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (wr(n), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
              ? $g(e, n, i)
              : (wr(n), (e = Xa(e, n, i)), e !== null ? e.sibling : null);
        wr(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (((o = (i & n.childLanes) !== 0), o || (el(e, n, i, !1), (o = (i & n.childLanes) !== 0)), f)) {
          if (o) return Gg(e, n, i);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null && ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          X(_t, _t.current),
          o)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), Bg(e, n, i, n.pendingProps));
      case 24:
        vr(n, Ut, e.memoizedState.cache);
    }
    return Xa(e, n, i);
  }
  function Kg(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Bt = !0;
      else {
        if (!ad(e, i) && (n.flags & 128) === 0) return ((Bt = !1), OE(e, n, i));
        Bt = (e.flags & 131072) !== 0;
      }
    else ((Bt = !1), Je && (n.flags & 1048576) !== 0 && Tp(n, fo, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var o = n.pendingProps;
          if (((e = gi(n.elementType)), (n.type = e), typeof e == 'function'))
            sf(e)
              ? ((o = Si(e, o)), (n.tag = 1), (n = qg(null, n, e, o, i)))
              : ((n.tag = 0), (n = If(null, n, e, o, i)));
          else {
            if (e != null) {
              var f = e.$$typeof;
              if (f === z) {
                ((n.tag = 11), (n = zg(null, n, e, o, i)));
                break e;
              } else if (f === O) {
                ((n.tag = 14), (n = Ug(null, n, e, o, i)));
                break e;
              }
            }
            throw ((n = ie(e) || e), Error(l(306, n, '')));
          }
        }
        return n;
      case 0:
        return If(e, n, n.type, n.pendingProps, i);
      case 1:
        return ((o = n.type), (f = Si(o, n.pendingProps)), qg(e, n, o, f, i));
      case 3:
        e: {
          if ((ye(n, n.stateNode.containerInfo), e === null)) throw Error(l(387));
          o = n.pendingProps;
          var p = n.memoizedState;
          ((f = p.element), Ef(e, n), So(n, o, null, i));
          var v = n.memoizedState;
          if (((o = v.cache), vr(n, Ut, o), o !== p.cache && yf(n, [Ut], i, !0), bo(), (o = v.element), p.isDehydrated))
            if (
              ((p = {element: o, isDehydrated: !1, cache: v.cache}),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              n = Yg(e, n, o, i);
              break e;
            } else if (o !== f) {
              ((f = qn(Error(l(424)), n)), ho(f), (n = Yg(e, n, o, i)));
              break e;
            } else {
              switch (((e = n.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (gt = Kn(e.firstChild), Qt = n, Je = !0, gr = null, Fn = !0, i = Bp(n, null, o, i), n.child = i; i; )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
            }
          else {
            if ((di(), o === f)) {
              n = Xa(e, n, i);
              break e;
            }
            Zt(e, n, o, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          ru(e, n),
          e === null
            ? (i = rv(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = i)
              : Je ||
                ((i = n.type),
                (e = n.pendingProps),
                (o = xu(be.current).createElement(i)),
                (o[me] = n),
                (o[ve] = e),
                Jt(o, i, e),
                vt(o),
                (n.stateNode = o))
            : (n.memoizedState = rv(n.type, e.memoizedProps, n.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          Ue(n),
          e === null &&
            Je &&
            ((o = n.stateNode = tv(n.type, n.pendingProps, be.current)),
            (Qt = n),
            (Fn = !0),
            (f = gt),
            Nr(n.type) ? ((Ud = f), (gt = Kn(o.firstChild))) : (gt = f)),
          Zt(e, n, n.pendingProps.children, i),
          ru(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            Je &&
            ((f = o = gt) &&
              ((o = nC(o, n.type, n.pendingProps, Fn)),
              o !== null ? ((n.stateNode = o), (Qt = n), (gt = Kn(o.firstChild)), (Fn = !1), (f = !0)) : (f = !1)),
            f || yr(n)),
          Ue(n),
          (f = n.type),
          (p = n.pendingProps),
          (v = e !== null ? e.memoizedProps : null),
          (o = p.children),
          Nd(f, p) ? (o = null) : v !== null && Nd(f, v) && (n.flags |= 32),
          n.memoizedState !== null && ((f = Mf(e, n, yE, null, null, i)), (Po._currentValue = f)),
          ru(e, n),
          Zt(e, n, o, i),
          n.child
        );
      case 6:
        return (
          e === null &&
            Je &&
            ((e = i = gt) &&
              ((i = aC(i, n.pendingProps, Fn)),
              i !== null ? ((n.stateNode = i), (Qt = n), (gt = null), (e = !0)) : (e = !1)),
            e || yr(n)),
          null
        );
      case 13:
        return $g(e, n, i);
      case 4:
        return (
          ye(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          e === null ? (n.child = vi(n, null, o, i)) : Zt(e, n, o, i),
          n.child
        );
      case 11:
        return zg(e, n, n.type, n.pendingProps, i);
      case 7:
        return (Zt(e, n, n.pendingProps, i), n.child);
      case 8:
        return (Zt(e, n, n.pendingProps.children, i), n.child);
      case 12:
        return (Zt(e, n, n.pendingProps.children, i), n.child);
      case 10:
        return ((o = n.pendingProps), vr(n, n.type, o.value), Zt(e, n, o.children, i), n.child);
      case 9:
        return (
          (f = n.type._context),
          (o = n.pendingProps.children),
          mi(n),
          (f = It(f)),
          (o = o(f)),
          (n.flags |= 1),
          Zt(e, n, o, i),
          n.child
        );
      case 14:
        return Ug(e, n, n.type, n.pendingProps, i);
      case 15:
        return Hg(e, n, n.type, n.pendingProps, i);
      case 19:
        return Gg(e, n, i);
      case 31:
        return TE(e, n, i);
      case 22:
        return Bg(e, n, i, n.pendingProps);
      case 24:
        return (
          mi(n),
          (o = It(Ut)),
          e === null
            ? ((f = Sf()),
              f === null &&
                ((f = st),
                (p = vf()),
                (f.pooledCache = p),
                p.refCount++,
                p !== null && (f.pooledCacheLanes |= i),
                (f = p)),
              (n.memoizedState = {parent: o, cache: f}),
              wf(n),
              vr(n, Ut, f))
            : ((e.lanes & i) !== 0 && (Ef(e, n), So(n, null, null, i), bo()),
              (f = e.memoizedState),
              (p = n.memoizedState),
              f.parent !== o
                ? ((f = {parent: o, cache: o}),
                  (n.memoizedState = f),
                  n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f),
                  vr(n, Ut, o))
                : ((o = p.cache), vr(n, Ut, o), o !== f.cache && yf(n, [Ut], i, !0))),
          Zt(e, n, n.pendingProps.children, i),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function Qa(e) {
    e.flags |= 4;
  }
  function rd(e, n, i, o, f) {
    if (((n = (e.mode & 32) !== 0) && (n = !1), n)) {
      if (((e.flags |= 16777216), (f & 335544128) === f))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Sy()) e.flags |= 8192;
        else throw ((yi = Ys), xf);
    } else e.flags &= -16777217;
  }
  function Xg(e, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !uv(n)))
      if (Sy()) e.flags |= 8192;
      else throw ((yi = Ys), xf);
  }
  function lu(e, n) {
    (n !== null && (e.flags |= 4),
      e.flags & 16384 && ((n = e.tag !== 22 ? Mt() : 536870912), (e.lanes |= n), (dl |= n)));
  }
  function Oo(e, n) {
    if (!Je)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var i = null; n !== null; ) (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var o = null; i !== null; ) (i.alternate !== null && (o = i), (i = i.sibling));
          o === null ? (n || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (o.sibling = null);
      }
  }
  function yt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (n)
      for (var f = e.child; f !== null; )
        ((i |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags & 65011712),
          (o |= f.flags & 65011712),
          (f.return = e),
          (f = f.sibling));
    else
      for (f = e.child; f !== null; )
        ((i |= f.lanes | f.childLanes), (o |= f.subtreeFlags), (o |= f.flags), (f.return = e), (f = f.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = i), n);
  }
  function RE(e, n, i) {
    var o = n.pendingProps;
    switch ((df(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (yt(n), null);
      case 1:
        return (yt(n), null);
      case 3:
        return (
          (i = n.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Fa(Ut),
          Me(),
          i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Wi(n)
              ? Qa(n)
              : e === null || (e.memoizedState.isDehydrated && (n.flags & 256) === 0) || ((n.flags |= 1024), mf())),
          yt(n),
          null
        );
      case 26:
        var f = n.type,
          p = n.memoizedState;
        return (
          e === null
            ? (Qa(n), p !== null ? (yt(n), Xg(n, p)) : (yt(n), rd(n, f, null, o, i)))
            : p
              ? p !== e.memoizedState
                ? (Qa(n), yt(n), Xg(n, p))
                : (yt(n), (n.flags &= -16777217))
              : ((e = e.memoizedProps), e !== o && Qa(n), yt(n), rd(n, f, e, o, i)),
          null
        );
      case 27:
        if ((He(n), (i = be.current), (f = n.type), e !== null && n.stateNode != null)) e.memoizedProps !== o && Qa(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return (yt(n), null);
          }
          ((e = ee.current), Wi(n) ? Rp(n) : ((e = tv(f, o, i)), (n.stateNode = e), Qa(n)));
        }
        return (yt(n), null);
      case 5:
        if ((He(n), (f = n.type), e !== null && n.stateNode != null)) e.memoizedProps !== o && Qa(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return (yt(n), null);
          }
          if (((p = ee.current), Wi(n))) Rp(n);
          else {
            var v = xu(be.current);
            switch (p) {
              case 1:
                p = v.createElementNS('http://www.w3.org/2000/svg', f);
                break;
              case 2:
                p = v.createElementNS('http://www.w3.org/1998/Math/MathML', f);
                break;
              default:
                switch (f) {
                  case 'svg':
                    p = v.createElementNS('http://www.w3.org/2000/svg', f);
                    break;
                  case 'math':
                    p = v.createElementNS('http://www.w3.org/1998/Math/MathML', f);
                    break;
                  case 'script':
                    ((p = v.createElement('div')),
                      (p.innerHTML = '<script><\/script>'),
                      (p = p.removeChild(p.firstChild)));
                    break;
                  case 'select':
                    ((p = typeof o.is == 'string' ? v.createElement('select', {is: o.is}) : v.createElement('select')),
                      o.multiple ? (p.multiple = !0) : o.size && (p.size = o.size));
                    break;
                  default:
                    p = typeof o.is == 'string' ? v.createElement(f, {is: o.is}) : v.createElement(f);
                }
            }
            ((p[me] = n), (p[ve] = o));
            e: for (v = n.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) p.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                ((v.child.return = v), (v = v.child));
                continue;
              }
              if (v === n) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === n) break e;
                v = v.return;
              }
              ((v.sibling.return = v.return), (v = v.sibling));
            }
            n.stateNode = p;
            e: switch ((Jt(p, f, o), f)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                o = !!o.autoFocus;
                break e;
              case 'img':
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Qa(n);
          }
        }
        return (yt(n), rd(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, i), null);
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== o && Qa(n);
        else {
          if (typeof o != 'string' && n.stateNode === null) throw Error(l(166));
          if (((e = be.current), Wi(n))) {
            if (((e = n.stateNode), (i = n.memoizedProps), (o = null), (f = Qt), f !== null))
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            ((e[me] = n),
              (e = !!(e.nodeValue === i || (o !== null && o.suppressHydrationWarning === !0) || $y(e.nodeValue, i))),
              e || yr(n, !0));
          } else ((e = xu(e).createTextNode(o)), (e[me] = n), (n.stateNode = e));
        }
        return (yt(n), null);
      case 31:
        if (((i = n.memoizedState), e === null || e.memoizedState !== null)) {
          if (((o = Wi(n)), i !== null)) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (((e = n.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(l(557));
              e[me] = n;
            } else (di(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (yt(n), (e = !1));
          } else
            ((i = mf()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), (e = !0));
          if (!e) return n.flags & 256 ? (An(n), n) : (An(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return (yt(n), null);
      case 13:
        if (((o = n.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
          if (((f = Wi(n)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (((f = n.memoizedState), (f = f !== null ? f.dehydrated : null), !f)) throw Error(l(317));
              f[me] = n;
            } else (di(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (yt(n), (f = !1));
          } else
            ((f = mf()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), (f = !0));
          if (!f) return n.flags & 256 ? (An(n), n) : (An(n), null);
        }
        return (
          An(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = i), n)
            : ((i = o !== null),
              (e = e !== null && e.memoizedState !== null),
              i &&
                ((o = n.child),
                (f = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (f = o.alternate.memoizedState.cachePool.pool),
                (p = null),
                o.memoizedState !== null && o.memoizedState.cachePool !== null && (p = o.memoizedState.cachePool.pool),
                p !== f && (o.flags |= 2048)),
              i !== e && i && (n.child.flags |= 8192),
              lu(n, n.updateQueue),
              yt(n),
              null)
        );
      case 4:
        return (Me(), e === null && Od(n.stateNode.containerInfo), yt(n), null);
      case 10:
        return (Fa(n.type), yt(n), null);
      case 19:
        if ((K(_t), (o = n.memoizedState), o === null)) return (yt(n), null);
        if (((f = (n.flags & 128) !== 0), (p = o.rendering), p === null))
          if (f) Oo(o, !1);
          else {
            if (Ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((p = Ks(e)), p !== null)) {
                  for (
                    n.flags |= 128,
                      Oo(o, !1),
                      e = p.updateQueue,
                      n.updateQueue = e,
                      lu(n, e),
                      n.subtreeFlags = 0,
                      e = i,
                      i = n.child;
                    i !== null;
                  )
                    (wp(i, e), (i = i.sibling));
                  return (X(_t, (_t.current & 1) | 2), Je && Ya(n, o.treeForkCount), n.child);
                }
                e = e.sibling;
              }
            o.tail !== null && St() > fu && ((n.flags |= 128), (f = !0), Oo(o, !1), (n.lanes = 4194304));
          }
        else {
          if (!f)
            if (((e = Ks(p)), e !== null)) {
              if (
                ((n.flags |= 128),
                (f = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                lu(n, e),
                Oo(o, !0),
                o.tail === null && o.tailMode === 'hidden' && !p.alternate && !Je)
              )
                return (yt(n), null);
            } else
              2 * St() - o.renderingStartTime > fu &&
                i !== 536870912 &&
                ((n.flags |= 128), (f = !0), Oo(o, !1), (n.lanes = 4194304));
          o.isBackwards
            ? ((p.sibling = n.child), (n.child = p))
            : ((e = o.last), e !== null ? (e.sibling = p) : (n.child = p), (o.last = p));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = St()),
            (e.sibling = null),
            (i = _t.current),
            X(_t, f ? (i & 1) | 2 : i & 1),
            Je && Ya(n, o.treeForkCount),
            e)
          : (yt(n), null);
      case 22:
      case 23:
        return (
          An(n),
          Rf(),
          (o = n.memoizedState !== null),
          e !== null ? (e.memoizedState !== null) !== o && (n.flags |= 8192) : o && (n.flags |= 8192),
          o
            ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : yt(n),
          (i = n.updateQueue),
          i !== null && lu(n, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool),
          o !== i && (n.flags |= 2048),
          e !== null && K(pi),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          Fa(Ut),
          yt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function AE(e, n) {
    switch ((df(n), n.tag)) {
      case 1:
        return ((e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null);
      case 3:
        return (
          Fa(Ut),
          Me(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 26:
      case 27:
      case 5:
        return (He(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((An(n), n.alternate === null)) throw Error(l(340));
          di();
        }
        return ((e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null);
      case 13:
        if ((An(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
          if (n.alternate === null) throw Error(l(340));
          di();
        }
        return ((e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null);
      case 19:
        return (K(_t), null);
      case 4:
        return (Me(), null);
      case 10:
        return (Fa(n.type), null);
      case 22:
      case 23:
        return (
          An(n),
          Rf(),
          e !== null && K(pi),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return (Fa(Ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qg(e, n) {
    switch ((df(n), n.tag)) {
      case 3:
        (Fa(Ut), Me());
        break;
      case 26:
      case 27:
      case 5:
        He(n);
        break;
      case 4:
        Me();
        break;
      case 31:
        n.memoizedState !== null && An(n);
        break;
      case 13:
        An(n);
        break;
      case 19:
        K(_t);
        break;
      case 10:
        Fa(n.type);
        break;
      case 22:
      case 23:
        (An(n), Rf(), e !== null && K(pi));
        break;
      case 24:
        Fa(Ut);
    }
  }
  function Ro(e, n) {
    try {
      var i = n.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var p = i.create,
              v = i.inst;
            ((o = p()), (v.destroy = o));
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (E) {
      rt(n, n.return, E);
    }
  }
  function Cr(e, n, i) {
    try {
      var o = n.updateQueue,
        f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var v = o.inst,
              E = v.destroy;
            if (E !== void 0) {
              ((v.destroy = void 0), (f = n));
              var L = i,
                Y = E;
              try {
                Y();
              } catch (J) {
                rt(f, L, J);
              }
            }
          }
          o = o.next;
        } while (o !== p);
      }
    } catch (J) {
      rt(n, n.return, J);
    }
  }
  function Ig(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Pp(n, i);
      } catch (o) {
        rt(e, e.return, o);
      }
    }
  }
  function Zg(e, n, i) {
    ((i.props = Si(e.type, e.memoizedProps)), (i.state = e.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (o) {
      rt(e, n, o);
    }
  }
  function Ao(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == 'function' ? (e.refCleanup = i(o)) : (i.current = o);
      }
    } catch (f) {
      rt(e, n, f);
    }
  }
  function Sa(e, n) {
    var i = e.ref,
      o = e.refCleanup;
    if (i !== null)
      if (typeof o == 'function')
        try {
          o();
        } catch (f) {
          rt(e, n, f);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof i == 'function')
        try {
          i(null);
        } catch (f) {
          rt(e, n, f);
        }
      else i.current = null;
  }
  function Jg(e) {
    var n = e.type,
      i = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          i.autoFocus && o.focus();
          break e;
        case 'img':
          i.src ? (o.src = i.src) : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (f) {
      rt(e, e.return, f);
    }
  }
  function id(e, n, i) {
    try {
      var o = e.stateNode;
      (IE(o, e.type, i, n), (o[ve] = n));
    } catch (f) {
      rt(e, e.return, f);
    }
  }
  function Wg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Nr(e.type)) || e.tag === 4;
  }
  function ld(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if ((e.tag === 27 && Nr(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function od(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        n
          ? (i.nodeType === 9 ? i.body : i.nodeName === 'HTML' ? i.ownerDocument.body : i).insertBefore(e, n)
          : ((n = i.nodeType === 9 ? i.body : i.nodeName === 'HTML' ? i.ownerDocument.body : i),
            n.appendChild(e),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = Pa)));
    else if (o !== 4 && (o === 27 && Nr(e.type) && ((i = e.stateNode), (n = null)), (e = e.child), e !== null))
      for (od(e, n, i), e = e.sibling; e !== null; ) (od(e, n, i), (e = e.sibling));
  }
  function ou(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (o !== 4 && (o === 27 && Nr(e.type) && (i = e.stateNode), (e = e.child), e !== null))
      for (ou(e, n, i), e = e.sibling; e !== null; ) (ou(e, n, i), (e = e.sibling));
  }
  function ey(e) {
    var n = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var o = e.type, f = n.attributes; f.length; ) n.removeAttributeNode(f[0]);
      (Jt(n, o, i), (n[me] = e), (n[ve] = i));
    } catch (p) {
      rt(e, e.return, p);
    }
  }
  var Ia = !1,
    kt = !1,
    sd = !1,
    ty = typeof WeakSet == 'function' ? WeakSet : Set,
    $t = null;
  function DE(e, n) {
    if (((e = e.containerInfo), (Dd = Au), (e = hp(e)), ef(e))) {
      if ('selectionStart' in e) var i = {start: e.selectionStart, end: e.selectionEnd};
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var f = o.anchorOffset,
              p = o.focusNode;
            o = o.focusOffset;
            try {
              (i.nodeType, p.nodeType);
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              E = -1,
              L = -1,
              Y = 0,
              J = 0,
              ne = e,
              G = null;
            t: for (;;) {
              for (
                var Q;
                ne !== i || (f !== 0 && ne.nodeType !== 3) || (E = v + f),
                  ne !== p || (o !== 0 && ne.nodeType !== 3) || (L = v + o),
                  ne.nodeType === 3 && (v += ne.nodeValue.length),
                  (Q = ne.firstChild) !== null;
              )
                ((G = ne), (ne = Q));
              for (;;) {
                if (ne === e) break t;
                if ((G === i && ++Y === f && (E = v), G === p && ++J === o && (L = v), (Q = ne.nextSibling) !== null))
                  break;
                ((ne = G), (G = ne.parentNode));
              }
              ne = Q;
            }
            i = E === -1 || L === -1 ? null : {start: E, end: L};
          } else i = null;
        }
      i = i || {start: 0, end: 0};
    } else i = null;
    for (Md = {focusedElem: e, selectionRange: i}, Au = !1, $t = n; $t !== null; )
      if (((n = $t), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = n), ($t = e));
      else
        for (; $t !== null; ) {
          switch (((n = $t), (p = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              if ((e & 4) !== 0 && ((e = n.updateQueue), (e = e !== null ? e.events : null), e !== null))
                for (i = 0; i < e.length; i++) ((f = e[i]), (f.ref.impl = f.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                ((e = void 0), (i = n), (f = p.memoizedProps), (p = p.memoizedState), (o = i.stateNode));
                try {
                  var Se = Si(i.type, f);
                  ((e = o.getSnapshotBeforeUpdate(Se, p)), (o.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ne) {
                  rt(i, i.return, Ne);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = n.stateNode.containerInfo), (i = e.nodeType), i === 9)) Ld(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Ld(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), ($t = e));
            break;
          }
          $t = n.return;
        }
  }
  function ny(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Ja(e, i), o & 4 && Ro(5, i));
        break;
      case 1:
        if ((Ja(e, i), o & 4))
          if (((e = i.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (v) {
              rt(i, i.return, v);
            }
          else {
            var f = Si(i.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(f, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              rt(i, i.return, v);
            }
          }
        (o & 64 && Ig(i), o & 512 && Ao(i, i.return));
        break;
      case 3:
        if ((Ja(e, i), o & 64 && ((e = i.updateQueue), e !== null))) {
          if (((n = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            Pp(e, n);
          } catch (v) {
            rt(i, i.return, v);
          }
        }
        break;
      case 27:
        n === null && o & 4 && ey(i);
      case 26:
      case 5:
        (Ja(e, i), n === null && o & 4 && Jg(i), o & 512 && Ao(i, i.return));
        break;
      case 12:
        Ja(e, i);
        break;
      case 31:
        (Ja(e, i), o & 4 && iy(e, i));
        break;
      case 13:
        (Ja(e, i),
          o & 4 && ly(e, i),
          o & 64 &&
            ((e = i.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((i = BE.bind(null, i)), rC(e, i)))));
        break;
      case 22:
        if (((o = i.memoizedState !== null || Ia), !o)) {
          ((n = (n !== null && n.memoizedState !== null) || kt), (f = Ia));
          var p = kt;
          ((Ia = o), (kt = n) && !p ? Wa(e, i, (i.subtreeFlags & 8772) !== 0) : Ja(e, i), (Ia = f), (kt = p));
        }
        break;
      case 30:
        break;
      default:
        Ja(e, i);
    }
  }
  function ay(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), ay(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Et(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var bt = null,
    pn = !1;
  function Za(e, n, i) {
    for (i = i.child; i !== null; ) (ry(e, n, i), (i = i.sibling));
  }
  function ry(e, n, i) {
    if (pt && typeof pt.onCommitFiberUnmount == 'function')
      try {
        pt.onCommitFiberUnmount(Ua, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (kt || Sa(i, n),
          Za(e, n, i),
          i.memoizedState ? i.memoizedState.count-- : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        kt || Sa(i, n);
        var o = bt,
          f = pn;
        (Nr(i.type) && ((bt = i.stateNode), (pn = !1)), Za(e, n, i), Ho(i.stateNode), (bt = o), (pn = f));
        break;
      case 5:
        kt || Sa(i, n);
      case 6:
        if (((o = bt), (f = pn), (bt = null), Za(e, n, i), (bt = o), (pn = f), bt !== null))
          if (pn)
            try {
              (bt.nodeType === 9 ? bt.body : bt.nodeName === 'HTML' ? bt.ownerDocument.body : bt).removeChild(
                i.stateNode,
              );
            } catch (p) {
              rt(i, n, p);
            }
          else
            try {
              bt.removeChild(i.stateNode);
            } catch (p) {
              rt(i, n, p);
            }
        break;
      case 18:
        bt !== null &&
          (pn
            ? ((e = bt),
              Iy(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, i.stateNode),
              Sl(e))
            : Iy(bt, i.stateNode));
        break;
      case 4:
        ((o = bt), (f = pn), (bt = i.stateNode.containerInfo), (pn = !0), Za(e, n, i), (bt = o), (pn = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Cr(2, i, n), kt || Cr(4, i, n), Za(e, n, i));
        break;
      case 1:
        (kt || (Sa(i, n), (o = i.stateNode), typeof o.componentWillUnmount == 'function' && Zg(i, n, o)), Za(e, n, i));
        break;
      case 21:
        Za(e, n, i);
        break;
      case 22:
        ((kt = (o = kt) || i.memoizedState !== null), Za(e, n, i), (kt = o));
        break;
      default:
        Za(e, n, i);
    }
  }
  function iy(e, n) {
    if (n.memoizedState === null && ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
      e = e.dehydrated;
      try {
        Sl(e);
      } catch (i) {
        rt(n, n.return, i);
      }
    }
  }
  function ly(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Sl(e);
      } catch (i) {
        rt(n, n.return, i);
      }
  }
  function ME(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return (n === null && (n = e.stateNode = new ty()), n);
      case 22:
        return ((e = e.stateNode), (n = e._retryCache), n === null && (n = e._retryCache = new ty()), n);
      default:
        throw Error(l(435, e.tag));
    }
  }
  function su(e, n) {
    var i = ME(e);
    n.forEach(function (o) {
      if (!i.has(o)) {
        i.add(o);
        var f = kE.bind(null, e, o);
        o.then(f, f);
      }
    });
  }
  function gn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var f = i[o],
          p = e,
          v = n,
          E = v;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (Nr(E.type)) {
                ((bt = E.stateNode), (pn = !1));
                break e;
              }
              break;
            case 5:
              ((bt = E.stateNode), (pn = !1));
              break e;
            case 3:
            case 4:
              ((bt = E.stateNode.containerInfo), (pn = !0));
              break e;
          }
          E = E.return;
        }
        if (bt === null) throw Error(l(160));
        (ry(p, v, f), (bt = null), (pn = !1), (p = f.alternate), p !== null && (p.return = null), (f.return = null));
      }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) (oy(n, e), (n = n.sibling));
  }
  var la = null;
  function oy(e, n) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (gn(n, e), yn(e), o & 4 && (Cr(3, e, e.return), Ro(3, e), Cr(5, e, e.return)));
        break;
      case 1:
        (gn(n, e),
          yn(e),
          o & 512 && (kt || i === null || Sa(i, i.return)),
          o & 64 &&
            Ia &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((i = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = i === null ? o : i.concat(o))))));
        break;
      case 26:
        var f = la;
        if ((gn(n, e), yn(e), o & 512 && (kt || i === null || Sa(i, i.return)), o & 4)) {
          var p = i !== null ? i.memoizedState : null;
          if (((o = e.memoizedState), i === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  ((o = e.type), (i = e.memoizedProps), (f = f.ownerDocument || f));
                  t: switch (o) {
                    case 'title':
                      ((p = f.getElementsByTagName('title')[0]),
                        (!p ||
                          p[xt] ||
                          p[me] ||
                          p.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          p.hasAttribute('itemprop')) &&
                          ((p = f.createElement(o)), f.head.insertBefore(p, f.querySelector('head > title'))),
                        Jt(p, o, i),
                        (p[me] = e),
                        vt(p),
                        (o = p));
                      break e;
                    case 'link':
                      var v = ov('link', 'href', f).get(o + (i.href || ''));
                      if (v) {
                        for (var E = 0; E < v.length; E++)
                          if (
                            ((p = v[E]),
                            p.getAttribute('href') === (i.href == null || i.href === '' ? null : i.href) &&
                              p.getAttribute('rel') === (i.rel == null ? null : i.rel) &&
                              p.getAttribute('title') === (i.title == null ? null : i.title) &&
                              p.getAttribute('crossorigin') === (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            v.splice(E, 1);
                            break t;
                          }
                      }
                      ((p = f.createElement(o)), Jt(p, o, i), f.head.appendChild(p));
                      break;
                    case 'meta':
                      if ((v = ov('meta', 'content', f).get(o + (i.content || '')))) {
                        for (E = 0; E < v.length; E++)
                          if (
                            ((p = v[E]),
                            p.getAttribute('content') === (i.content == null ? null : '' + i.content) &&
                              p.getAttribute('name') === (i.name == null ? null : i.name) &&
                              p.getAttribute('property') === (i.property == null ? null : i.property) &&
                              p.getAttribute('http-equiv') === (i.httpEquiv == null ? null : i.httpEquiv) &&
                              p.getAttribute('charset') === (i.charSet == null ? null : i.charSet))
                          ) {
                            v.splice(E, 1);
                            break t;
                          }
                      }
                      ((p = f.createElement(o)), Jt(p, o, i), f.head.appendChild(p));
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  ((p[me] = e), vt(p), (o = p));
                }
                e.stateNode = o;
              } else sv(f, e.type, e.stateNode);
            else e.stateNode = lv(f, o, e.memoizedProps);
          else
            p !== o
              ? (p === null ? i.stateNode !== null && ((i = i.stateNode), i.parentNode.removeChild(i)) : p.count--,
                o === null ? sv(f, e.type, e.stateNode) : lv(f, o, e.memoizedProps))
              : o === null && e.stateNode !== null && id(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        (gn(n, e),
          yn(e),
          o & 512 && (kt || i === null || Sa(i, i.return)),
          i !== null && o & 4 && id(e, e.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if ((gn(n, e), yn(e), o & 512 && (kt || i === null || Sa(i, i.return)), e.flags & 32)) {
          f = e.stateNode;
          try {
            Yi(f, '');
          } catch (Se) {
            rt(e, e.return, Se);
          }
        }
        (o & 4 && e.stateNode != null && ((f = e.memoizedProps), id(e, f, i !== null ? i.memoizedProps : f)),
          o & 1024 && (sd = !0));
        break;
      case 6:
        if ((gn(n, e), yn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((o = e.memoizedProps), (i = e.stateNode));
          try {
            i.nodeValue = o;
          } catch (Se) {
            rt(e, e.return, Se);
          }
        }
        break;
      case 3:
        if (
          ((Cu = null),
          (f = la),
          (la = wu(n.containerInfo)),
          gn(n, e),
          (la = f),
          yn(e),
          o & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Sl(n.containerInfo);
          } catch (Se) {
            rt(e, e.return, Se);
          }
        sd && ((sd = !1), sy(e));
        break;
      case 4:
        ((o = la), (la = wu(e.stateNode.containerInfo)), gn(n, e), yn(e), (la = o));
        break;
      case 12:
        (gn(n, e), yn(e));
        break;
      case 31:
        (gn(n, e), yn(e), o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), su(e, o))));
        break;
      case 13:
        (gn(n, e),
          yn(e),
          e.child.flags & 8192 && (e.memoizedState !== null) != (i !== null && i.memoizedState !== null) && (cu = St()),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), su(e, o))));
        break;
      case 22:
        f = e.memoizedState !== null;
        var L = i !== null && i.memoizedState !== null,
          Y = Ia,
          J = kt;
        if (((Ia = Y || f), (kt = J || L), gn(n, e), (kt = J), (Ia = Y), yn(e), o & 8192))
          e: for (
            n = e.stateNode,
              n._visibility = f ? n._visibility & -2 : n._visibility | 1,
              f && (i === null || L || Ia || kt || xi(e)),
              i = null,
              n = e;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                L = i = n;
                try {
                  if (((p = L.stateNode), f))
                    ((v = p.style),
                      typeof v.setProperty == 'function'
                        ? v.setProperty('display', 'none', 'important')
                        : (v.display = 'none'));
                  else {
                    E = L.stateNode;
                    var ne = L.memoizedProps.style,
                      G = ne != null && ne.hasOwnProperty('display') ? ne.display : null;
                    E.style.display = G == null || typeof G == 'boolean' ? '' : ('' + G).trim();
                  }
                } catch (Se) {
                  rt(L, L.return, Se);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                L = n;
                try {
                  L.stateNode.nodeValue = f ? '' : L.memoizedProps;
                } catch (Se) {
                  rt(L, L.return, Se);
                }
              }
            } else if (n.tag === 18) {
              if (i === null) {
                L = n;
                try {
                  var Q = L.stateNode;
                  f ? Zy(Q, !0) : Zy(L.stateNode, !1);
                } catch (Se) {
                  rt(L, L.return, Se);
                }
              }
            } else if (((n.tag !== 22 && n.tag !== 23) || n.memoizedState === null || n === e) && n.child !== null) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              (i === n && (i = null), (n = n.return));
            }
            (i === n && (i = null), (n.sibling.return = n.return), (n = n.sibling));
          }
        o & 4 &&
          ((o = e.updateQueue), o !== null && ((i = o.retryQueue), i !== null && ((o.retryQueue = null), su(e, i))));
        break;
      case 19:
        (gn(n, e), yn(e), o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), su(e, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (gn(n, e), yn(e));
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Wg(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(l(160));
        switch (i.tag) {
          case 27:
            var f = i.stateNode,
              p = ld(e);
            ou(e, p, f);
            break;
          case 5:
            var v = i.stateNode;
            i.flags & 32 && (Yi(v, ''), (i.flags &= -33));
            var E = ld(e);
            ou(e, E, v);
            break;
          case 3:
          case 4:
            var L = i.stateNode.containerInfo,
              Y = ld(e);
            od(e, Y, L);
            break;
          default:
            throw Error(l(161));
        }
      } catch (J) {
        rt(e, e.return, J);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function sy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        (sy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), (e = e.sibling));
      }
  }
  function Ja(e, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) (ny(e, n.alternate, n), (n = n.sibling));
  }
  function xi(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Cr(4, n, n.return), xi(n));
          break;
        case 1:
          Sa(n, n.return);
          var i = n.stateNode;
          (typeof i.componentWillUnmount == 'function' && Zg(n, n.return, i), xi(n));
          break;
        case 27:
          Ho(n.stateNode);
        case 26:
        case 5:
          (Sa(n, n.return), xi(n));
          break;
        case 22:
          n.memoizedState === null && xi(n);
          break;
        case 30:
          xi(n);
          break;
        default:
          xi(n);
      }
      e = e.sibling;
    }
  }
  function Wa(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        f = e,
        p = n,
        v = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Wa(f, p, i), Ro(4, p));
          break;
        case 1:
          if ((Wa(f, p, i), (o = p), (f = o.stateNode), typeof f.componentDidMount == 'function'))
            try {
              f.componentDidMount();
            } catch (Y) {
              rt(o, o.return, Y);
            }
          if (((o = p), (f = o.updateQueue), f !== null)) {
            var E = o.stateNode;
            try {
              var L = f.shared.hiddenCallbacks;
              if (L !== null) for (f.shared.hiddenCallbacks = null, f = 0; f < L.length; f++) kp(L[f], E);
            } catch (Y) {
              rt(o, o.return, Y);
            }
          }
          (i && v & 64 && Ig(p), Ao(p, p.return));
          break;
        case 27:
          ey(p);
        case 26:
        case 5:
          (Wa(f, p, i), i && o === null && v & 4 && Jg(p), Ao(p, p.return));
          break;
        case 12:
          Wa(f, p, i);
          break;
        case 31:
          (Wa(f, p, i), i && v & 4 && iy(f, p));
          break;
        case 13:
          (Wa(f, p, i), i && v & 4 && ly(f, p));
          break;
        case 22:
          (p.memoizedState === null && Wa(f, p, i), Ao(p, p.return));
          break;
        case 30:
          break;
        default:
          Wa(f, p, i);
      }
      n = n.sibling;
    }
  }
  function ud(e, n) {
    var i = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && mo(i)));
  }
  function cd(e, n) {
    ((e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && mo(e)));
  }
  function oa(e, n, i, o) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) (uy(e, n, i, o), (n = n.sibling));
  }
  function uy(e, n, i, o) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (oa(e, n, i, o), f & 2048 && Ro(9, n));
        break;
      case 1:
        oa(e, n, i, o);
        break;
      case 3:
        (oa(e, n, i, o),
          f & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && mo(e))));
        break;
      case 12:
        if (f & 2048) {
          (oa(e, n, i, o), (e = n.stateNode));
          try {
            var p = n.memoizedProps,
              v = p.id,
              E = p.onPostCommit;
            typeof E == 'function' && E(v, n.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
          } catch (L) {
            rt(n, n.return, L);
          }
        } else oa(e, n, i, o);
        break;
      case 31:
        oa(e, n, i, o);
        break;
      case 13:
        oa(e, n, i, o);
        break;
      case 23:
        break;
      case 22:
        ((p = n.stateNode),
          (v = n.alternate),
          n.memoizedState !== null
            ? p._visibility & 2
              ? oa(e, n, i, o)
              : Do(e, n)
            : p._visibility & 2
              ? oa(e, n, i, o)
              : ((p._visibility |= 2), ul(e, n, i, o, (n.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && ud(v, n));
        break;
      case 24:
        (oa(e, n, i, o), f & 2048 && cd(n.alternate, n));
        break;
      default:
        oa(e, n, i, o);
    }
  }
  function ul(e, n, i, o, f) {
    for (f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var p = e,
        v = n,
        E = i,
        L = o,
        Y = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (ul(p, v, E, L, f), Ro(8, v));
          break;
        case 23:
          break;
        case 22:
          var J = v.stateNode;
          (v.memoizedState !== null
            ? J._visibility & 2
              ? ul(p, v, E, L, f)
              : Do(p, v)
            : ((J._visibility |= 2), ul(p, v, E, L, f)),
            f && Y & 2048 && ud(v.alternate, v));
          break;
        case 24:
          (ul(p, v, E, L, f), f && Y & 2048 && cd(v.alternate, v));
          break;
        default:
          ul(p, v, E, L, f);
      }
      n = n.sibling;
    }
  }
  function Do(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e,
          o = n,
          f = o.flags;
        switch (o.tag) {
          case 22:
            (Do(i, o), f & 2048 && ud(o.alternate, o));
            break;
          case 24:
            (Do(i, o), f & 2048 && cd(o.alternate, o));
            break;
          default:
            Do(i, o);
        }
        n = n.sibling;
      }
  }
  var Mo = 8192;
  function cl(e, n, i) {
    if (e.subtreeFlags & Mo) for (e = e.child; e !== null; ) (cy(e, n, i), (e = e.sibling));
  }
  function cy(e, n, i) {
    switch (e.tag) {
      case 26:
        (cl(e, n, i), e.flags & Mo && e.memoizedState !== null && gC(i, la, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        cl(e, n, i);
        break;
      case 3:
      case 4:
        var o = la;
        ((la = wu(e.stateNode.containerInfo)), cl(e, n, i), (la = o));
        break;
      case 22:
        e.memoizedState === null &&
          ((o = e.alternate),
          o !== null && o.memoizedState !== null ? ((o = Mo), (Mo = 16777216), cl(e, n, i), (Mo = o)) : cl(e, n, i));
        break;
      default:
        cl(e, n, i);
    }
  }
  function fy(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do ((n = e.sibling), (e.sibling = null), (e = n));
      while (e !== null);
    }
  }
  function No(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (($t = o), hy(o, e));
        }
      fy(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (dy(e), (e = e.sibling));
  }
  function dy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (No(e), e.flags & 2048 && Cr(9, e, e.return));
        break;
      case 3:
        No(e);
        break;
      case 12:
        No(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), uu(e))
          : No(e);
        break;
      default:
        No(e);
    }
  }
  function uu(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (($t = o), hy(o, e));
        }
      fy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          (Cr(8, n, n.return), uu(n));
          break;
        case 22:
          ((i = n.stateNode), i._visibility & 2 && ((i._visibility &= -3), uu(n)));
          break;
        default:
          uu(n);
      }
      e = e.sibling;
    }
  }
  function hy(e, n) {
    for (; $t !== null; ) {
      var i = $t;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Cr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          mo(i.memoizedState.cache);
      }
      if (((o = i.child), o !== null)) ((o.return = i), ($t = o));
      else
        e: for (i = e; $t !== null; ) {
          o = $t;
          var f = o.sibling,
            p = o.return;
          if ((ay(o), o === i)) {
            $t = null;
            break e;
          }
          if (f !== null) {
            ((f.return = p), ($t = f));
            break e;
          }
          $t = p;
        }
    }
  }
  var NE = {
      getCacheForType: function (e) {
        var n = It(Ut),
          i = n.data.get(e);
        return (i === void 0 && ((i = e()), n.data.set(e, i)), i);
      },
      cacheSignal: function () {
        return It(Ut).controller.signal;
      },
    },
    _E = typeof WeakMap == 'function' ? WeakMap : Map,
    nt = 0,
    st = null,
    Fe = null,
    Ke = 0,
    at = 0,
    Dn = null,
    Tr = !1,
    fl = !1,
    fd = !1,
    er = 0,
    Ot = 0,
    Or = 0,
    wi = 0,
    dd = 0,
    Mn = 0,
    dl = 0,
    _o = null,
    vn = null,
    hd = !1,
    cu = 0,
    my = 0,
    fu = 1 / 0,
    du = null,
    Rr = null,
    Vt = 0,
    Ar = null,
    hl = null,
    tr = 0,
    md = 0,
    pd = null,
    py = null,
    Lo = 0,
    gd = null;
  function Nn() {
    return (nt & 2) !== 0 && Ke !== 0 ? Ke & -Ke : N.T !== null ? wd() : de();
  }
  function gy() {
    if (Mn === 0)
      if ((Ke & 536870912) === 0 || Je) {
        var e = Ha;
        ((Ha <<= 1), (Ha & 3932160) === 0 && (Ha = 262144), (Mn = e));
      } else Mn = 536870912;
    return ((e = Rn.current), e !== null && (e.flags |= 32), Mn);
  }
  function bn(e, n, i) {
    (((e === st && (at === 2 || at === 9)) || e.cancelPendingCommit !== null) && (ml(e, 0), Dr(e, Ke, Mn, !1)),
      ct(e, i),
      ((nt & 2) === 0 || e !== st) &&
        (e === st && ((nt & 2) === 0 && (wi |= i), Ot === 4 && Dr(e, Ke, Mn, !1)), xa(e)));
  }
  function yy(e, n, i) {
    if ((nt & 6) !== 0) throw Error(l(327));
    var o = (!i && (n & 127) === 0 && (n & e.expiredLanes) === 0) || ut(e, n),
      f = o ? zE(e, n) : vd(e, n, !0),
      p = o;
    do {
      if (f === 0) {
        fl && !o && Dr(e, n, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), p && !LE(i))) {
          ((f = vd(e, n, !1)), (p = !1));
          continue;
        }
        if (f === 2) {
          if (((p = n), e.errorRecoveryDisabledLanes & p)) var v = 0;
          else ((v = e.pendingLanes & -536870913), (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            n = v;
            e: {
              var E = e;
              f = _o;
              var L = E.current.memoizedState.isDehydrated;
              if ((L && (ml(E, v).flags |= 256), (v = vd(E, v, !1)), v !== 2)) {
                if (fd && !L) {
                  ((E.errorRecoveryDisabledLanes |= p), (wi |= p), (f = 4));
                  break e;
                }
                ((p = vn), (vn = f), p !== null && (vn === null ? (vn = p) : vn.push.apply(vn, p)));
              }
              f = v;
            }
            if (((p = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (ml(e, 0), Dr(e, n, 0, !0));
          break;
        }
        e: {
          switch (((o = e), (p = f), p)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Dr(o, n, Mn, !Tr);
              break e;
            case 2:
              vn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((f = cu + 300 - St()), 10 < f)) {
            if ((Dr(o, n, Mn, !Tr), _e(o, 0, !0) !== 0)) break e;
            ((tr = n),
              (o.timeoutHandle = Xy(vy.bind(null, o, i, vn, du, hd, n, Mn, wi, dl, Tr, p, 'Throttled', -0, 0), f)));
            break e;
          }
          vy(o, i, vn, du, hd, n, Mn, wi, dl, Tr, p, null, -0, 0);
        }
      }
      break;
    } while (!0);
    xa(e);
  }
  function vy(e, n, i, o, f, p, v, E, L, Y, J, ne, G, Q) {
    if (((e.timeoutHandle = -1), (ne = n.subtreeFlags), ne & 8192 || (ne & 16785408) === 16785408)) {
      ((ne = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Pa,
      }),
        cy(n, p, ne));
      var Se = (p & 62914560) === p ? cu - St() : (p & 4194048) === p ? my - St() : 0;
      if (((Se = yC(ne, Se)), Se !== null)) {
        ((tr = p),
          (e.cancelPendingCommit = Se(Oy.bind(null, e, n, p, i, o, f, v, E, L, J, ne, null, G, Q))),
          Dr(e, p, v, !Y));
        return;
      }
    }
    Oy(e, n, p, i, o, f, v, E, L);
  }
  function LE(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        n.flags & 16384 &&
        ((i = n.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var o = 0; o < i.length; o++) {
          var f = i[o],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!Tn(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null)) ((i.return = n), (n = i));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Dr(e, n, i, o) {
    ((n &= ~dd),
      (n &= ~wi),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      o && (e.warmLanes |= n),
      (o = e.expirationTimes));
    for (var f = n; 0 < f; ) {
      var p = 31 - Pt(f),
        v = 1 << p;
      ((o[p] = -1), (f &= ~v));
    }
    i !== 0 && Ba(e, i, n);
  }
  function hu() {
    return (nt & 6) === 0 ? (jo(0), !1) : !0;
  }
  function yd() {
    if (Fe !== null) {
      if (at === 0) var e = Fe.return;
      else ((e = Fe), ($a = hi = null), Lf(e), (rl = null), (go = 0), (e = Fe));
      for (; e !== null; ) (Qg(e.alternate, e), (e = e.return));
      Fe = null;
    }
  }
  function ml(e, n) {
    var i = e.timeoutHandle;
    (i !== -1 && ((e.timeoutHandle = -1), WE(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      (tr = 0),
      yd(),
      (st = e),
      (Fe = i = qa(e.current, null)),
      (Ke = n),
      (at = 0),
      (Dn = null),
      (Tr = !1),
      (fl = ut(e, n)),
      (fd = !1),
      (dl = Mn = dd = wi = Or = Ot = 0),
      (vn = _o = null),
      (hd = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var f = 31 - Pt(o),
          p = 1 << f;
        ((n |= e[f]), (o &= ~p));
      }
    return ((er = n), js(), i);
  }
  function by(e, n) {
    ((Pe = null),
      (N.H = Co),
      n === al || n === qs
        ? ((n = zp()), (at = 3))
        : n === xf
          ? ((n = zp()), (at = 4))
          : (at = n === Qf ? 8 : n !== null && typeof n == 'object' && typeof n.then == 'function' ? 6 : 1),
      (Dn = n),
      Fe === null && ((Ot = 1), nu(e, qn(n, e.current))));
  }
  function Sy() {
    var e = Rn.current;
    return e === null
      ? !0
      : (Ke & 4194048) === Ke
        ? Gn === null
        : (Ke & 62914560) === Ke || (Ke & 536870912) !== 0
          ? e === Gn
          : !1;
  }
  function xy() {
    var e = N.H;
    return ((N.H = Co), e === null ? Co : e);
  }
  function wy() {
    var e = N.A;
    return ((N.A = NE), e);
  }
  function mu() {
    ((Ot = 4),
      Tr || ((Ke & 4194048) !== Ke && Rn.current !== null) || (fl = !0),
      ((Or & 134217727) === 0 && (wi & 134217727) === 0) || st === null || Dr(st, Ke, Mn, !1));
  }
  function vd(e, n, i) {
    var o = nt;
    nt |= 2;
    var f = xy(),
      p = wy();
    ((st !== e || Ke !== n) && ((du = null), ml(e, n)), (n = !1));
    var v = Ot;
    e: do
      try {
        if (at !== 0 && Fe !== null) {
          var E = Fe,
            L = Dn;
          switch (at) {
            case 8:
              (yd(), (v = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rn.current === null && (n = !0);
              var Y = at;
              if (((at = 0), (Dn = null), pl(e, E, L, Y), i && fl)) {
                v = 0;
                break e;
              }
              break;
            default:
              ((Y = at), (at = 0), (Dn = null), pl(e, E, L, Y));
          }
        }
        (jE(), (v = Ot));
        break;
      } catch (J) {
        by(e, J);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      ($a = hi = null),
      (nt = o),
      (N.H = f),
      (N.A = p),
      Fe === null && ((st = null), (Ke = 0), js()),
      v
    );
  }
  function jE() {
    for (; Fe !== null; ) Ey(Fe);
  }
  function zE(e, n) {
    var i = nt;
    nt |= 2;
    var o = xy(),
      f = wy();
    st !== e || Ke !== n ? ((du = null), (fu = St() + 500), ml(e, n)) : (fl = ut(e, n));
    e: do
      try {
        if (at !== 0 && Fe !== null) {
          n = Fe;
          var p = Dn;
          t: switch (at) {
            case 1:
              ((at = 0), (Dn = null), pl(e, n, p, 1));
              break;
            case 2:
            case 9:
              if (Lp(p)) {
                ((at = 0), (Dn = null), Cy(n));
                break;
              }
              ((n = function () {
                ((at !== 2 && at !== 9) || st !== e || (at = 7), xa(e));
              }),
                p.then(n, n));
              break e;
            case 3:
              at = 7;
              break e;
            case 4:
              at = 5;
              break e;
            case 7:
              Lp(p) ? ((at = 0), (Dn = null), Cy(n)) : ((at = 0), (Dn = null), pl(e, n, p, 7));
              break;
            case 5:
              var v = null;
              switch (Fe.tag) {
                case 26:
                  v = Fe.memoizedState;
                case 5:
                case 27:
                  var E = Fe;
                  if (v ? uv(v) : E.stateNode.complete) {
                    ((at = 0), (Dn = null));
                    var L = E.sibling;
                    if (L !== null) Fe = L;
                    else {
                      var Y = E.return;
                      Y !== null ? ((Fe = Y), pu(Y)) : (Fe = null);
                    }
                    break t;
                  }
              }
              ((at = 0), (Dn = null), pl(e, n, p, 5));
              break;
            case 6:
              ((at = 0), (Dn = null), pl(e, n, p, 6));
              break;
            case 8:
              (yd(), (Ot = 6));
              break e;
            default:
              throw Error(l(462));
          }
        }
        UE();
        break;
      } catch (J) {
        by(e, J);
      }
    while (!0);
    return (($a = hi = null), (N.H = o), (N.A = f), (nt = i), Fe !== null ? 0 : ((st = null), (Ke = 0), js(), Ot));
  }
  function UE() {
    for (; Fe !== null && !Gt(); ) Ey(Fe);
  }
  function Ey(e) {
    var n = Kg(e.alternate, e, er);
    ((e.memoizedProps = e.pendingProps), n === null ? pu(e) : (Fe = n));
  }
  function Cy(e) {
    var n = e,
      i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Vg(i, n, n.pendingProps, n.type, void 0, Ke);
        break;
      case 11:
        n = Vg(i, n, n.pendingProps, n.type.render, n.ref, Ke);
        break;
      case 5:
        Lf(n);
      default:
        (Qg(i, n), (n = Fe = wp(n, er)), (n = Kg(i, n, er)));
    }
    ((e.memoizedProps = e.pendingProps), n === null ? pu(e) : (Fe = n));
  }
  function pl(e, n, i, o) {
    (($a = hi = null), Lf(n), (rl = null), (go = 0));
    var f = n.return;
    try {
      if (CE(e, f, n, i, Ke)) {
        ((Ot = 1), nu(e, qn(i, e.current)), (Fe = null));
        return;
      }
    } catch (p) {
      if (f !== null) throw ((Fe = f), p);
      ((Ot = 1), nu(e, qn(i, e.current)), (Fe = null));
      return;
    }
    n.flags & 32768
      ? (Je || o === 1
          ? (e = !0)
          : fl || (Ke & 536870912) !== 0
            ? (e = !1)
            : ((Tr = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = Rn.current), o !== null && o.tag === 13 && (o.flags |= 16384))),
        Ty(n, e))
      : pu(n);
  }
  function pu(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Ty(n, Tr);
        return;
      }
      e = n.return;
      var i = RE(n.alternate, n, er);
      if (i !== null) {
        Fe = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Fe = n;
        return;
      }
      Fe = n = e;
    } while (n !== null);
    Ot === 0 && (Ot = 5);
  }
  function Ty(e, n) {
    do {
      var i = AE(e.alternate, e);
      if (i !== null) {
        ((i.flags &= 32767), (Fe = i));
        return;
      }
      if (
        ((i = e.return),
        i !== null && ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Fe = e;
        return;
      }
      Fe = e = i;
    } while (e !== null);
    ((Ot = 6), (Fe = null));
  }
  function Oy(e, n, i, o, f, p, v, E, L) {
    e.cancelPendingCommit = null;
    do gu();
    while (Vt !== 0);
    if ((nt & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === e.current) throw Error(l(177));
      if (
        ((p = n.lanes | n.childLanes),
        (p |= lf),
        en(e, i, p, v, E, L),
        e === st && ((Fe = st = null), (Ke = 0)),
        (hl = n),
        (Ar = e),
        (tr = i),
        (md = p),
        (pd = f),
        (py = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            PE(Kt, function () {
              return (Ny(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = N.T), (N.T = null), (f = V.p), (V.p = 2), (v = nt), (nt |= 4));
        try {
          DE(e, n, i);
        } finally {
          ((nt = v), (V.p = f), (N.T = o));
        }
      }
      ((Vt = 1), Ry(), Ay(), Dy());
    }
  }
  function Ry() {
    if (Vt === 1) {
      Vt = 0;
      var e = Ar,
        n = hl,
        i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        ((i = N.T), (N.T = null));
        var o = V.p;
        V.p = 2;
        var f = nt;
        nt |= 4;
        try {
          oy(n, e);
          var p = Md,
            v = hp(e.containerInfo),
            E = p.focusedElem,
            L = p.selectionRange;
          if (v !== E && E && E.ownerDocument && dp(E.ownerDocument.documentElement, E)) {
            if (L !== null && ef(E)) {
              var Y = L.start,
                J = L.end;
              if ((J === void 0 && (J = Y), 'selectionStart' in E))
                ((E.selectionStart = Y), (E.selectionEnd = Math.min(J, E.value.length)));
              else {
                var ne = E.ownerDocument || document,
                  G = (ne && ne.defaultView) || window;
                if (G.getSelection) {
                  var Q = G.getSelection(),
                    Se = E.textContent.length,
                    Ne = Math.min(L.start, Se),
                    ot = L.end === void 0 ? Ne : Math.min(L.end, Se);
                  !Q.extend && Ne > ot && ((v = ot), (ot = Ne), (Ne = v));
                  var k = fp(E, Ne),
                    U = fp(E, ot);
                  if (
                    k &&
                    U &&
                    (Q.rangeCount !== 1 ||
                      Q.anchorNode !== k.node ||
                      Q.anchorOffset !== k.offset ||
                      Q.focusNode !== U.node ||
                      Q.focusOffset !== U.offset)
                  ) {
                    var q = ne.createRange();
                    (q.setStart(k.node, k.offset),
                      Q.removeAllRanges(),
                      Ne > ot
                        ? (Q.addRange(q), Q.extend(U.node, U.offset))
                        : (q.setEnd(U.node, U.offset), Q.addRange(q)));
                  }
                }
              }
            }
            for (ne = [], Q = E; (Q = Q.parentNode); )
              Q.nodeType === 1 && ne.push({element: Q, left: Q.scrollLeft, top: Q.scrollTop});
            for (typeof E.focus == 'function' && E.focus(), E = 0; E < ne.length; E++) {
              var te = ne[E];
              ((te.element.scrollLeft = te.left), (te.element.scrollTop = te.top));
            }
          }
          ((Au = !!Dd), (Md = Dd = null));
        } finally {
          ((nt = f), (V.p = o), (N.T = i));
        }
      }
      ((e.current = n), (Vt = 2));
    }
  }
  function Ay() {
    if (Vt === 2) {
      Vt = 0;
      var e = Ar,
        n = hl,
        i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        ((i = N.T), (N.T = null));
        var o = V.p;
        V.p = 2;
        var f = nt;
        nt |= 4;
        try {
          ny(e, n.alternate, n);
        } finally {
          ((nt = f), (V.p = o), (N.T = i));
        }
      }
      Vt = 3;
    }
  }
  function Dy() {
    if (Vt === 4 || Vt === 3) {
      ((Vt = 0), ga());
      var e = Ar,
        n = hl,
        i = tr,
        o = py;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Vt = 5)
        : ((Vt = 0), (hl = Ar = null), My(e, e.pendingLanes));
      var f = e.pendingLanes;
      if ((f === 0 && (Rr = null), ae(i), (n = n.stateNode), pt && typeof pt.onCommitFiberRoot == 'function'))
        try {
          pt.onCommitFiberRoot(Ua, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((n = N.T), (f = V.p), (V.p = 2), (N.T = null));
        try {
          for (var p = e.onRecoverableError, v = 0; v < o.length; v++) {
            var E = o[v];
            p(E.value, {componentStack: E.stack});
          }
        } finally {
          ((N.T = n), (V.p = f));
        }
      }
      ((tr & 3) !== 0 && gu(),
        xa(e),
        (f = e.pendingLanes),
        (i & 261930) !== 0 && (f & 42) !== 0 ? (e === gd ? Lo++ : ((Lo = 0), (gd = e))) : (Lo = 0),
        jo(0));
    }
  }
  function My(e, n) {
    (e.pooledCacheLanes &= n) === 0 && ((n = e.pooledCache), n != null && ((e.pooledCache = null), mo(n)));
  }
  function gu() {
    return (Ry(), Ay(), Dy(), Ny());
  }
  function Ny() {
    if (Vt !== 5) return !1;
    var e = Ar,
      n = md;
    md = 0;
    var i = ae(tr),
      o = N.T,
      f = V.p;
    try {
      ((V.p = 32 > i ? 32 : i), (N.T = null), (i = pd), (pd = null));
      var p = Ar,
        v = tr;
      if (((Vt = 0), (hl = Ar = null), (tr = 0), (nt & 6) !== 0)) throw Error(l(331));
      var E = nt;
      if (
        ((nt |= 4),
        dy(p.current),
        uy(p, p.current, v, i),
        (nt = E),
        jo(0, !1),
        pt && typeof pt.onPostCommitFiberRoot == 'function')
      )
        try {
          pt.onPostCommitFiberRoot(Ua, p);
        } catch {}
      return !0;
    } finally {
      ((V.p = f), (N.T = o), My(e, n));
    }
  }
  function _y(e, n, i) {
    ((n = qn(i, n)), (n = Xf(e.stateNode, n, 2)), (e = xr(e, n, 2)), e !== null && (ct(e, 2), xa(e)));
  }
  function rt(e, n, i) {
    if (e.tag === 3) _y(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          _y(n, e, i);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (Rr === null || !Rr.has(o)))
          ) {
            ((e = qn(i, e)), (i = Lg(2)), (o = xr(n, i, 2)), o !== null && (jg(i, o, n, e), ct(o, 2), xa(o)));
            break;
          }
        }
        n = n.return;
      }
  }
  function bd(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new _E();
      var f = new Set();
      o.set(n, f);
    } else ((f = o.get(n)), f === void 0 && ((f = new Set()), o.set(n, f)));
    f.has(i) || ((fd = !0), f.add(i), (e = HE.bind(null, e, n, i)), n.then(e, e));
  }
  function HE(e, n, i) {
    var o = e.pingCache;
    (o !== null && o.delete(n),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      st === e &&
        (Ke & i) === i &&
        (Ot === 4 || (Ot === 3 && (Ke & 62914560) === Ke && 300 > St() - cu) ? (nt & 2) === 0 && ml(e, 0) : (dd |= i),
        dl === Ke && (dl = 0)),
      xa(e));
  }
  function Ly(e, n) {
    (n === 0 && (n = Mt()), (e = ci(e, n)), e !== null && (ct(e, n), xa(e)));
  }
  function BE(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), Ly(e, i));
  }
  function kE(e, n) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode,
          f = e.memoizedState;
        f !== null && (i = f.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    (o !== null && o.delete(n), Ly(e, i));
  }
  function PE(e, n) {
    return ti(e, n);
  }
  var yu = null,
    gl = null,
    Sd = !1,
    vu = !1,
    xd = !1,
    Mr = 0;
  function xa(e) {
    (e !== gl && e.next === null && (gl === null ? (yu = gl = e) : (gl = gl.next = e)),
      (vu = !0),
      Sd || ((Sd = !0), qE()));
  }
  function jo(e, n) {
    if (!xd && vu) {
      xd = !0;
      do
        for (var i = !1, o = yu; o !== null; ) {
          if (e !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var v = o.suspendedLanes,
                E = o.pingedLanes;
              ((p = (1 << (31 - Pt(42 | e) + 1)) - 1),
                (p &= f & ~(v & ~E)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0));
            }
            p !== 0 && ((i = !0), Hy(o, p));
          } else
            ((p = Ke),
              (p = _e(o, o === st ? p : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1)),
              (p & 3) === 0 || ut(o, p) || ((i = !0), Hy(o, p)));
          o = o.next;
        }
      while (i);
      xd = !1;
    }
  }
  function VE() {
    jy();
  }
  function jy() {
    vu = Sd = !1;
    var e = 0;
    Mr !== 0 && JE() && (e = Mr);
    for (var n = St(), i = null, o = yu; o !== null; ) {
      var f = o.next,
        p = zy(o, n);
      (p === 0
        ? ((o.next = null), i === null ? (yu = f) : (i.next = f), f === null && (gl = i))
        : ((i = o), (e !== 0 || (p & 3) !== 0) && (vu = !0)),
        (o = f));
    }
    ((Vt !== 0 && Vt !== 5) || jo(e), Mr !== 0 && (Mr = 0));
  }
  function zy(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, f = e.expirationTimes, p = e.pendingLanes & -62914561; 0 < p; ) {
      var v = 31 - Pt(p),
        E = 1 << v,
        L = f[v];
      (L === -1 ? ((E & i) === 0 || (E & o) !== 0) && (f[v] = Dt(E, n)) : L <= n && (e.expiredLanes |= E), (p &= ~E));
    }
    if (
      ((n = st),
      (i = Ke),
      (i = _e(e, e === n ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (o = e.callbackNode),
      i === 0 || (e === n && (at === 2 || at === 9)) || e.cancelPendingCommit !== null)
    )
      return (o !== null && o !== null && ni(o), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((i & 3) === 0 || ut(e, i)) {
      if (((n = i & -i), n === e.callbackPriority)) return n;
      switch ((o !== null && ni(o), ae(i))) {
        case 2:
        case 8:
          i = hr;
          break;
        case 32:
          i = Kt;
          break;
        case 268435456:
          i = Un;
          break;
        default:
          i = Kt;
      }
      return ((o = Uy.bind(null, e)), (i = ti(i, o)), (e.callbackPriority = n), (e.callbackNode = i), n);
    }
    return (o !== null && o !== null && ni(o), (e.callbackPriority = 2), (e.callbackNode = null), 2);
  }
  function Uy(e, n) {
    if (Vt !== 0 && Vt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var i = e.callbackNode;
    if (gu() && e.callbackNode !== i) return null;
    var o = Ke;
    return (
      (o = _e(e, e === st ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      o === 0
        ? null
        : (yy(e, o, n), zy(e, St()), e.callbackNode != null && e.callbackNode === i ? Uy.bind(null, e) : null)
    );
  }
  function Hy(e, n) {
    if (gu()) return null;
    yy(e, n, !0);
  }
  function qE() {
    eC(function () {
      (nt & 6) !== 0 ? ti(ya, VE) : jy();
    });
  }
  function wd() {
    if (Mr === 0) {
      var e = tl;
      (e === 0 && ((e = ea), (ea <<= 1), (ea & 261888) === 0 && (ea = 256)), (Mr = e));
    }
    return Mr;
  }
  function By(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : Os('' + e);
  }
  function ky(e, n) {
    var i = n.ownerDocument.createElement('input');
    return (
      (i.name = n.name),
      (i.value = n.value),
      e.id && i.setAttribute('form', e.id),
      n.parentNode.insertBefore(i, n),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function YE(e, n, i, o, f) {
    if (n === 'submit' && i && i.stateNode === f) {
      var p = By((f[ve] || null).action),
        v = o.submitter;
      v &&
        ((n = (n = v[ve] || null) ? By(n.formAction) : v.getAttribute('formAction')),
        n !== null && ((p = n), (v = null)));
      var E = new Ms('action', 'action', null, o, f);
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Mr !== 0) {
                  var L = v ? ky(f, v) : new FormData(f);
                  qf(i, {pending: !0, data: L, method: f.method, action: p}, null, L);
                }
              } else
                typeof p == 'function' &&
                  (E.preventDefault(),
                  (L = v ? ky(f, v) : new FormData(f)),
                  qf(i, {pending: !0, data: L, method: f.method, action: p}, p, L));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Ed = 0; Ed < rf.length; Ed++) {
    var Cd = rf[Ed],
      $E = Cd.toLowerCase(),
      FE = Cd[0].toUpperCase() + Cd.slice(1);
    ia($E, 'on' + FE);
  }
  (ia(gp, 'onAnimationEnd'),
    ia(yp, 'onAnimationIteration'),
    ia(vp, 'onAnimationStart'),
    ia('dblclick', 'onDoubleClick'),
    ia('focusin', 'onFocus'),
    ia('focusout', 'onBlur'),
    ia(oE, 'onTransitionRun'),
    ia(sE, 'onTransitionStart'),
    ia(uE, 'onTransitionCancel'),
    ia(bp, 'onTransitionEnd'),
    kn('onMouseEnter', ['mouseout', 'mouseover']),
    kn('onMouseLeave', ['mouseout', 'mouseover']),
    kn('onPointerEnter', ['pointerout', 'pointerover']),
    kn('onPointerLeave', ['pointerout', 'pointerover']),
    aa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    aa('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    aa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    aa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    aa('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    aa('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
  var zo =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    GE = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(zo));
  function Py(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var v = o.length - 1; 0 <= v; v--) {
            var E = o[v],
              L = E.instance,
              Y = E.currentTarget;
            if (((E = E.listener), L !== p && f.isPropagationStopped())) break e;
            ((p = E), (f.currentTarget = Y));
            try {
              p(f);
            } catch (J) {
              Ls(J);
            }
            ((f.currentTarget = null), (p = L));
          }
        else
          for (v = 0; v < o.length; v++) {
            if (
              ((E = o[v]),
              (L = E.instance),
              (Y = E.currentTarget),
              (E = E.listener),
              L !== p && f.isPropagationStopped())
            )
              break e;
            ((p = E), (f.currentTarget = Y));
            try {
              p(f);
            } catch (J) {
              Ls(J);
            }
            ((f.currentTarget = null), (p = L));
          }
      }
    }
  }
  function Ge(e, n) {
    var i = n[Le];
    i === void 0 && (i = n[Le] = new Set());
    var o = e + '__bubble';
    i.has(o) || (Vy(n, e, 2, !1), i.add(o));
  }
  function Td(e, n, i) {
    var o = 0;
    (n && (o |= 4), Vy(i, e, o, n));
  }
  var bu = '_reactListening' + Math.random().toString(36).slice(2);
  function Od(e) {
    if (!e[bu]) {
      ((e[bu] = !0),
        na.forEach(function (i) {
          i !== 'selectionchange' && (GE.has(i) || Td(i, !1, e), Td(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[bu] || ((n[bu] = !0), Td('selectionchange', !1, n));
    }
  }
  function Vy(e, n, i, o) {
    switch (gv(n)) {
      case 2:
        var f = SC;
        break;
      case 8:
        f = xC;
        break;
      default:
        f = Vd;
    }
    ((i = f.bind(null, n, i, e)),
      (f = void 0),
      !Fc || (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') || (f = !0),
      o
        ? f !== void 0
          ? e.addEventListener(n, i, {capture: !0, passive: f})
          : e.addEventListener(n, i, !0)
        : f !== void 0
          ? e.addEventListener(n, i, {passive: f})
          : e.addEventListener(n, i, !1));
  }
  function Rd(e, n, i, o, f) {
    var p = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var E = o.stateNode.containerInfo;
          if (E === f) break;
          if (v === 4)
            for (v = o.return; v !== null; ) {
              var L = v.tag;
              if ((L === 3 || L === 4) && v.stateNode.containerInfo === f) return;
              v = v.return;
            }
          for (; E !== null; ) {
            if (((v = Ct(E)), v === null)) return;
            if (((L = v.tag), L === 5 || L === 6 || L === 26 || L === 27)) {
              o = p = v;
              continue e;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    Gm(function () {
      var Y = p,
        J = Yc(i),
        ne = [];
      e: {
        var G = Sp.get(e);
        if (G !== void 0) {
          var Q = Ms,
            Se = e;
          switch (e) {
            case 'keypress':
              if (As(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              Q = k1;
              break;
            case 'focusin':
              ((Se = 'focus'), (Q = Qc));
              break;
            case 'focusout':
              ((Se = 'blur'), (Q = Qc));
              break;
            case 'beforeblur':
            case 'afterblur':
              Q = Qc;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Q = Qm;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Q = R1;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Q = q1;
              break;
            case gp:
            case yp:
            case vp:
              Q = M1;
              break;
            case bp:
              Q = $1;
              break;
            case 'scroll':
            case 'scrollend':
              Q = T1;
              break;
            case 'wheel':
              Q = G1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Q = _1;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Q = Zm;
              break;
            case 'toggle':
            case 'beforetoggle':
              Q = X1;
          }
          var Ne = (n & 4) !== 0,
            ot = !Ne && (e === 'scroll' || e === 'scrollend'),
            k = Ne ? (G !== null ? G + 'Capture' : null) : G;
          Ne = [];
          for (var U = Y, q; U !== null; ) {
            var te = U;
            if (
              ((q = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                q === null ||
                k === null ||
                ((te = no(U, k)), te != null && Ne.push(Uo(U, te, q))),
              ot)
            )
              break;
            U = U.return;
          }
          0 < Ne.length && ((G = new Q(G, Se, null, i, J)), ne.push({event: G, listeners: Ne}));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((G = e === 'mouseover' || e === 'pointerover'),
            (Q = e === 'mouseout' || e === 'pointerout'),
            G && i !== qc && (Se = i.relatedTarget || i.fromElement) && (Ct(Se) || Se[Ce]))
          )
            break e;
          if (
            (Q || G) &&
            ((G = J.window === J ? J : (G = J.ownerDocument) ? G.defaultView || G.parentWindow : window),
            Q
              ? ((Se = i.relatedTarget || i.toElement),
                (Q = Y),
                (Se = Se ? Ct(Se) : null),
                Se !== null &&
                  ((ot = u(Se)), (Ne = Se.tag), Se !== ot || (Ne !== 5 && Ne !== 27 && Ne !== 6)) &&
                  (Se = null))
              : ((Q = null), (Se = Y)),
            Q !== Se)
          ) {
            if (
              ((Ne = Qm),
              (te = 'onMouseLeave'),
              (k = 'onMouseEnter'),
              (U = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Ne = Zm), (te = 'onPointerLeave'), (k = 'onPointerEnter'), (U = 'pointer')),
              (ot = Q == null ? G : Yt(Q)),
              (q = Se == null ? G : Yt(Se)),
              (G = new Ne(te, U + 'leave', Q, i, J)),
              (G.target = ot),
              (G.relatedTarget = q),
              (te = null),
              Ct(J) === Y &&
                ((Ne = new Ne(k, U + 'enter', Se, i, J)), (Ne.target = q), (Ne.relatedTarget = ot), (te = Ne)),
              (ot = te),
              Q && Se)
            )
              t: {
                for (Ne = KE, k = Q, U = Se, q = 0, te = k; te; te = Ne(te)) q++;
                te = 0;
                for (var De = U; De; De = Ne(De)) te++;
                for (; 0 < q - te; ) ((k = Ne(k)), q--);
                for (; 0 < te - q; ) ((U = Ne(U)), te--);
                for (; q--; ) {
                  if (k === U || (U !== null && k === U.alternate)) {
                    Ne = k;
                    break t;
                  }
                  ((k = Ne(k)), (U = Ne(U)));
                }
                Ne = null;
              }
            else Ne = null;
            (Q !== null && qy(ne, G, Q, Ne, !1), Se !== null && ot !== null && qy(ne, ot, Se, Ne, !0));
          }
        }
        e: {
          if (
            ((G = Y ? Yt(Y) : window),
            (Q = G.nodeName && G.nodeName.toLowerCase()),
            Q === 'select' || (Q === 'input' && G.type === 'file'))
          )
            var et = ip;
          else if (ap(G))
            if (lp) et = rE;
            else {
              et = nE;
              var Oe = tE;
            }
          else
            ((Q = G.nodeName),
              !Q || Q.toLowerCase() !== 'input' || (G.type !== 'checkbox' && G.type !== 'radio')
                ? Y && Vc(Y.elementType) && (et = ip)
                : (et = aE));
          if (et && (et = et(e, Y))) {
            rp(ne, et, i, J);
            break e;
          }
          (Oe && Oe(e, G, Y),
            e === 'focusout' && Y && G.type === 'number' && Y.memoizedProps.value != null && Pc(G, 'number', G.value));
        }
        switch (((Oe = Y ? Yt(Y) : window), e)) {
          case 'focusin':
            (ap(Oe) || Oe.contentEditable === 'true') && ((Ki = Oe), (tf = Y), (co = null));
            break;
          case 'focusout':
            co = tf = Ki = null;
            break;
          case 'mousedown':
            nf = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((nf = !1), mp(ne, i, J));
            break;
          case 'selectionchange':
            if (lE) break;
          case 'keydown':
          case 'keyup':
            mp(ne, i, J);
        }
        var Ve;
        if (Zc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Xe = 'onCompositionStart';
                break e;
              case 'compositionend':
                Xe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Xe = 'onCompositionUpdate';
                break e;
            }
            Xe = void 0;
          }
        else
          Gi
            ? tp(e, i) && (Xe = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (Xe = 'onCompositionStart');
        (Xe &&
          (Jm &&
            i.locale !== 'ko' &&
            (Gi || Xe !== 'onCompositionStart'
              ? Xe === 'onCompositionEnd' && Gi && (Ve = Km())
              : ((mr = J), (Gc = 'value' in mr ? mr.value : mr.textContent), (Gi = !0))),
          (Oe = Su(Y, Xe)),
          0 < Oe.length &&
            ((Xe = new Im(Xe, e, null, i, J)),
            ne.push({event: Xe, listeners: Oe}),
            Ve ? (Xe.data = Ve) : ((Ve = np(i)), Ve !== null && (Xe.data = Ve)))),
          (Ve = I1 ? Z1(e, i) : J1(e, i)) &&
            ((Xe = Su(Y, 'onBeforeInput')),
            0 < Xe.length &&
              ((Oe = new Im('onBeforeInput', 'beforeinput', null, i, J)),
              ne.push({event: Oe, listeners: Xe}),
              (Oe.data = Ve))),
          YE(ne, e, Y, i, J));
      }
      Py(ne, n);
    });
  }
  function Uo(e, n, i) {
    return {instance: e, listener: n, currentTarget: i};
  }
  function Su(e, n) {
    for (var i = n + 'Capture', o = []; e !== null; ) {
      var f = e,
        p = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          p === null ||
          ((f = no(e, i)), f != null && o.unshift(Uo(e, f, p)), (f = no(e, n)), f != null && o.push(Uo(e, f, p))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function KE(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qy(e, n, i, o, f) {
    for (var p = n._reactName, v = []; i !== null && i !== o; ) {
      var E = i,
        L = E.alternate,
        Y = E.stateNode;
      if (((E = E.tag), L !== null && L === o)) break;
      ((E !== 5 && E !== 26 && E !== 27) ||
        Y === null ||
        ((L = Y),
        f
          ? ((Y = no(i, p)), Y != null && v.unshift(Uo(i, Y, L)))
          : f || ((Y = no(i, p)), Y != null && v.push(Uo(i, Y, L)))),
        (i = i.return));
    }
    v.length !== 0 && e.push({event: n, listeners: v});
  }
  var XE = /\r\n?/g,
    QE = /\u0000|\uFFFD/g;
  function Yy(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        XE,
        `
`,
      )
      .replace(QE, '');
  }
  function $y(e, n) {
    return ((n = Yy(n)), Yy(e) === n);
  }
  function lt(e, n, i, o, f, p) {
    switch (i) {
      case 'children':
        typeof o == 'string'
          ? n === 'body' || (n === 'textarea' && o === '') || Yi(e, o)
          : (typeof o == 'number' || typeof o == 'bigint') && n !== 'body' && Yi(e, '' + o);
        break;
      case 'className':
        ra(e, 'class', o);
        break;
      case 'tabIndex':
        ra(e, 'tabindex', o);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ra(e, i, o);
        break;
      case 'style':
        $m(e, o, p);
        break;
      case 'data':
        if (n !== 'object') {
          ra(e, 'data', o);
          break;
        }
      case 'src':
      case 'href':
        if (o === '' && (n !== 'a' || i !== 'href')) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == 'function' || typeof o == 'symbol' || typeof o == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        ((o = Os('' + o)), e.setAttribute(i, o));
        break;
      case 'action':
      case 'formAction':
        if (typeof o == 'function') {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == 'function' &&
            (i === 'formAction'
              ? (n !== 'input' && lt(e, n, 'name', f.name, f, null),
                lt(e, n, 'formEncType', f.formEncType, f, null),
                lt(e, n, 'formMethod', f.formMethod, f, null),
                lt(e, n, 'formTarget', f.formTarget, f, null))
              : (lt(e, n, 'encType', f.encType, f, null),
                lt(e, n, 'method', f.method, f, null),
                lt(e, n, 'target', f.target, f, null)));
        if (o == null || typeof o == 'symbol' || typeof o == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        ((o = Os('' + o)), e.setAttribute(i, o));
        break;
      case 'onClick':
        o != null && (e.onclick = Pa);
        break;
      case 'onScroll':
        o != null && Ge('scroll', e);
        break;
      case 'onScrollEnd':
        o != null && Ge('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (o != null) {
          if (typeof o != 'object' || !('__html' in o)) throw Error(l(61));
          if (((i = o.__html), i != null)) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'multiple':
        e.multiple = o && typeof o != 'function' && typeof o != 'symbol';
        break;
      case 'muted':
        e.muted = o && typeof o != 'function' && typeof o != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (o == null || typeof o == 'function' || typeof o == 'boolean' || typeof o == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        ((i = Os('' + o)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', i));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        o != null && typeof o != 'function' && typeof o != 'symbol' ? e.setAttribute(i, '' + o) : e.removeAttribute(i);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        o && typeof o != 'function' && typeof o != 'symbol' ? e.setAttribute(i, '') : e.removeAttribute(i);
        break;
      case 'capture':
      case 'download':
        o === !0
          ? e.setAttribute(i, '')
          : o !== !1 && o != null && typeof o != 'function' && typeof o != 'symbol'
            ? e.setAttribute(i, o)
            : e.removeAttribute(i);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        o != null && typeof o != 'function' && typeof o != 'symbol' && !isNaN(o) && 1 <= o
          ? e.setAttribute(i, o)
          : e.removeAttribute(i);
        break;
      case 'rowSpan':
      case 'start':
        o == null || typeof o == 'function' || typeof o == 'symbol' || isNaN(o)
          ? e.removeAttribute(i)
          : e.setAttribute(i, o);
        break;
      case 'popover':
        (Ge('beforetoggle', e), Ge('toggle', e), Nt(e, 'popover', o));
        break;
      case 'xlinkActuate':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', o);
        break;
      case 'xlinkArcrole':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', o);
        break;
      case 'xlinkRole':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', o);
        break;
      case 'xlinkShow':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', o);
        break;
      case 'xlinkTitle':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', o);
        break;
      case 'xlinkType':
        Xt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', o);
        break;
      case 'xmlBase':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', o);
        break;
      case 'xmlLang':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', o);
        break;
      case 'xmlSpace':
        Xt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', o);
        break;
      case 'is':
        Nt(e, 'is', o);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < i.length) || (i[0] !== 'o' && i[0] !== 'O') || (i[1] !== 'n' && i[1] !== 'N')) &&
          ((i = E1.get(i) || i), Nt(e, i, o));
    }
  }
  function Ad(e, n, i, o, f, p) {
    switch (i) {
      case 'style':
        $m(e, o, p);
        break;
      case 'dangerouslySetInnerHTML':
        if (o != null) {
          if (typeof o != 'object' || !('__html' in o)) throw Error(l(61));
          if (((i = o.__html), i != null)) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'children':
        typeof o == 'string' ? Yi(e, o) : (typeof o == 'number' || typeof o == 'bigint') && Yi(e, '' + o);
        break;
      case 'onScroll':
        o != null && Ge('scroll', e);
        break;
      case 'onScrollEnd':
        o != null && Ge('scrollend', e);
        break;
      case 'onClick':
        o != null && (e.onclick = Pa);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Cn.hasOwnProperty(i))
          e: {
            if (
              i[0] === 'o' &&
              i[1] === 'n' &&
              ((f = i.endsWith('Capture')),
              (n = i.slice(2, f ? i.length - 7 : void 0)),
              (p = e[ve] || null),
              (p = p != null ? p[i] : null),
              typeof p == 'function' && e.removeEventListener(n, p, f),
              typeof o == 'function')
            ) {
              (typeof p != 'function' &&
                p !== null &&
                (i in e ? (e[i] = null) : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(n, o, f));
              break e;
            }
            i in e ? (e[i] = o) : o === !0 ? e.setAttribute(i, '') : Nt(e, i, o);
          }
    }
  }
  function Jt(e, n, i) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (Ge('error', e), Ge('load', e));
        var o = !1,
          f = !1,
          p;
        for (p in i)
          if (i.hasOwnProperty(p)) {
            var v = i[p];
            if (v != null)
              switch (p) {
                case 'src':
                  o = !0;
                  break;
                case 'srcSet':
                  f = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(l(137, n));
                default:
                  lt(e, n, p, v, i, null);
              }
          }
        (f && lt(e, n, 'srcSet', i.srcSet, i, null), o && lt(e, n, 'src', i.src, i, null));
        return;
      case 'input':
        Ge('invalid', e);
        var E = (p = v = f = null),
          L = null,
          Y = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var J = i[o];
            if (J != null)
              switch (o) {
                case 'name':
                  f = J;
                  break;
                case 'type':
                  v = J;
                  break;
                case 'checked':
                  L = J;
                  break;
                case 'defaultChecked':
                  Y = J;
                  break;
                case 'value':
                  p = J;
                  break;
                case 'defaultValue':
                  E = J;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (J != null) throw Error(l(137, n));
                  break;
                default:
                  lt(e, n, o, J, i, null);
              }
          }
        Pm(e, p, E, L, Y, v, f, !1);
        return;
      case 'select':
        (Ge('invalid', e), (o = v = p = null));
        for (f in i)
          if (i.hasOwnProperty(f) && ((E = i[f]), E != null))
            switch (f) {
              case 'value':
                p = E;
                break;
              case 'defaultValue':
                v = E;
                break;
              case 'multiple':
                o = E;
              default:
                lt(e, n, f, E, i, null);
            }
        ((n = p), (i = v), (e.multiple = !!o), n != null ? qi(e, !!o, n, !1) : i != null && qi(e, !!o, i, !0));
        return;
      case 'textarea':
        (Ge('invalid', e), (p = f = o = null));
        for (v in i)
          if (i.hasOwnProperty(v) && ((E = i[v]), E != null))
            switch (v) {
              case 'value':
                o = E;
                break;
              case 'defaultValue':
                f = E;
                break;
              case 'children':
                p = E;
                break;
              case 'dangerouslySetInnerHTML':
                if (E != null) throw Error(l(91));
                break;
              default:
                lt(e, n, v, E, i, null);
            }
        qm(e, o, f, p);
        return;
      case 'option':
        for (L in i)
          if (i.hasOwnProperty(L) && ((o = i[L]), o != null))
            switch (L) {
              case 'selected':
                e.selected = o && typeof o != 'function' && typeof o != 'symbol';
                break;
              default:
                lt(e, n, L, o, i, null);
            }
        return;
      case 'dialog':
        (Ge('beforetoggle', e), Ge('toggle', e), Ge('cancel', e), Ge('close', e));
        break;
      case 'iframe':
      case 'object':
        Ge('load', e);
        break;
      case 'video':
      case 'audio':
        for (o = 0; o < zo.length; o++) Ge(zo[o], e);
        break;
      case 'image':
        (Ge('error', e), Ge('load', e));
        break;
      case 'details':
        Ge('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ge('error', e), Ge('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (Y in i)
          if (i.hasOwnProperty(Y) && ((o = i[Y]), o != null))
            switch (Y) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(l(137, n));
              default:
                lt(e, n, Y, o, i, null);
            }
        return;
      default:
        if (Vc(n)) {
          for (J in i) i.hasOwnProperty(J) && ((o = i[J]), o !== void 0 && Ad(e, n, J, o, i, void 0));
          return;
        }
    }
    for (E in i) i.hasOwnProperty(E) && ((o = i[E]), o != null && lt(e, n, E, o, i, null));
  }
  function IE(e, n, i, o) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var f = null,
          p = null,
          v = null,
          E = null,
          L = null,
          Y = null,
          J = null;
        for (Q in i) {
          var ne = i[Q];
          if (i.hasOwnProperty(Q) && ne != null)
            switch (Q) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                L = ne;
              default:
                o.hasOwnProperty(Q) || lt(e, n, Q, null, o, ne);
            }
        }
        for (var G in o) {
          var Q = o[G];
          if (((ne = i[G]), o.hasOwnProperty(G) && (Q != null || ne != null)))
            switch (G) {
              case 'type':
                p = Q;
                break;
              case 'name':
                f = Q;
                break;
              case 'checked':
                Y = Q;
                break;
              case 'defaultChecked':
                J = Q;
                break;
              case 'value':
                v = Q;
                break;
              case 'defaultValue':
                E = Q;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Q != null) throw Error(l(137, n));
                break;
              default:
                Q !== ne && lt(e, n, G, Q, o, ne);
            }
        }
        kc(e, v, E, L, Y, J, p, f);
        return;
      case 'select':
        Q = v = E = G = null;
        for (p in i)
          if (((L = i[p]), i.hasOwnProperty(p) && L != null))
            switch (p) {
              case 'value':
                break;
              case 'multiple':
                Q = L;
              default:
                o.hasOwnProperty(p) || lt(e, n, p, null, o, L);
            }
        for (f in o)
          if (((p = o[f]), (L = i[f]), o.hasOwnProperty(f) && (p != null || L != null)))
            switch (f) {
              case 'value':
                G = p;
                break;
              case 'defaultValue':
                E = p;
                break;
              case 'multiple':
                v = p;
              default:
                p !== L && lt(e, n, f, p, o, L);
            }
        ((n = E),
          (i = v),
          (o = Q),
          G != null ? qi(e, !!i, G, !1) : !!o != !!i && (n != null ? qi(e, !!i, n, !0) : qi(e, !!i, i ? [] : '', !1)));
        return;
      case 'textarea':
        Q = G = null;
        for (E in i)
          if (((f = i[E]), i.hasOwnProperty(E) && f != null && !o.hasOwnProperty(E)))
            switch (E) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                lt(e, n, E, null, o, f);
            }
        for (v in o)
          if (((f = o[v]), (p = i[v]), o.hasOwnProperty(v) && (f != null || p != null)))
            switch (v) {
              case 'value':
                G = f;
                break;
              case 'defaultValue':
                Q = f;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== p && lt(e, n, v, f, o, p);
            }
        Vm(e, G, Q);
        return;
      case 'option':
        for (var Se in i)
          if (((G = i[Se]), i.hasOwnProperty(Se) && G != null && !o.hasOwnProperty(Se)))
            switch (Se) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                lt(e, n, Se, null, o, G);
            }
        for (L in o)
          if (((G = o[L]), (Q = i[L]), o.hasOwnProperty(L) && G !== Q && (G != null || Q != null)))
            switch (L) {
              case 'selected':
                e.selected = G && typeof G != 'function' && typeof G != 'symbol';
                break;
              default:
                lt(e, n, L, G, o, Q);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Ne in i)
          ((G = i[Ne]), i.hasOwnProperty(Ne) && G != null && !o.hasOwnProperty(Ne) && lt(e, n, Ne, null, o, G));
        for (Y in o)
          if (((G = o[Y]), (Q = i[Y]), o.hasOwnProperty(Y) && G !== Q && (G != null || Q != null)))
            switch (Y) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (G != null) throw Error(l(137, n));
                break;
              default:
                lt(e, n, Y, G, o, Q);
            }
        return;
      default:
        if (Vc(n)) {
          for (var ot in i)
            ((G = i[ot]), i.hasOwnProperty(ot) && G !== void 0 && !o.hasOwnProperty(ot) && Ad(e, n, ot, void 0, o, G));
          for (J in o)
            ((G = o[J]),
              (Q = i[J]),
              !o.hasOwnProperty(J) || G === Q || (G === void 0 && Q === void 0) || Ad(e, n, J, G, o, Q));
          return;
        }
    }
    for (var k in i) ((G = i[k]), i.hasOwnProperty(k) && G != null && !o.hasOwnProperty(k) && lt(e, n, k, null, o, G));
    for (ne in o)
      ((G = o[ne]), (Q = i[ne]), !o.hasOwnProperty(ne) || G === Q || (G == null && Q == null) || lt(e, n, ne, G, o, Q));
  }
  function Fy(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function ZE() {
    if (typeof performance.getEntriesByType == 'function') {
      for (var e = 0, n = 0, i = performance.getEntriesByType('resource'), o = 0; o < i.length; o++) {
        var f = i[o],
          p = f.transferSize,
          v = f.initiatorType,
          E = f.duration;
        if (p && E && Fy(v)) {
          for (v = 0, E = f.responseEnd, o += 1; o < i.length; o++) {
            var L = i[o],
              Y = L.startTime;
            if (Y > E) break;
            var J = L.transferSize,
              ne = L.initiatorType;
            J && Fy(ne) && ((L = L.responseEnd), (v += J * (L < E ? 1 : (E - Y) / (L - Y))));
          }
          if ((--o, (n += (8 * (p + v)) / (f.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
  }
  var Dd = null,
    Md = null;
  function xu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Gy(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Ky(e, n) {
    if (e === 0)
      switch (n) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === 'foreignObject' ? 0 : e;
  }
  function Nd(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _d = null;
  function JE() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === _d ? !1 : ((_d = e), !0)) : ((_d = null), !1);
  }
  var Xy = typeof setTimeout == 'function' ? setTimeout : void 0,
    WE = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Qy = typeof Promise == 'function' ? Promise : void 0,
    eC =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Qy < 'u'
          ? function (e) {
              return Qy.resolve(null).then(e).catch(tC);
            }
          : Xy;
  function tC(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Nr(e) {
    return e === 'head';
  }
  function Iy(e, n) {
    var i = n,
      o = 0;
    do {
      var f = i.nextSibling;
      if ((e.removeChild(i), f && f.nodeType === 8))
        if (((i = f.data), i === '/$' || i === '/&')) {
          if (o === 0) {
            (e.removeChild(f), Sl(n));
            return;
          }
          o--;
        } else if (i === '$' || i === '$?' || i === '$~' || i === '$!' || i === '&') o++;
        else if (i === 'html') Ho(e.ownerDocument.documentElement);
        else if (i === 'head') {
          ((i = e.ownerDocument.head), Ho(i));
          for (var p = i.firstChild; p; ) {
            var v = p.nextSibling,
              E = p.nodeName;
            (p[xt] ||
              E === 'SCRIPT' ||
              E === 'STYLE' ||
              (E === 'LINK' && p.rel.toLowerCase() === 'stylesheet') ||
              i.removeChild(p),
              (p = v));
          }
        } else i === 'body' && Ho(e.ownerDocument.body);
      i = f;
    } while (i);
    Sl(n);
  }
  function Zy(e, n) {
    var i = e;
    e = 0;
    do {
      var o = i.nextSibling;
      if (
        (i.nodeType === 1
          ? n
            ? ((i._stashedDisplay = i.style.display), (i.style.display = 'none'))
            : ((i.style.display = i._stashedDisplay || ''),
              i.getAttribute('style') === '' && i.removeAttribute('style'))
          : i.nodeType === 3 &&
            (n ? ((i._stashedText = i.nodeValue), (i.nodeValue = '')) : (i.nodeValue = i._stashedText || '')),
        o && o.nodeType === 8)
      )
        if (((i = o.data), i === '/$')) {
          if (e === 0) break;
          e--;
        } else (i !== '$' && i !== '$?' && i !== '$~' && i !== '$!') || e++;
      i = o;
    } while (i);
  }
  function Ld(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (((n = n.nextSibling), i.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Ld(i), Et(i));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (i.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(i);
    }
  }
  function nC(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var f = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (o) {
        if (!e[xt])
          switch (n) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (((p = e.getAttribute('rel')), p === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
              if (
                p !== f.rel ||
                e.getAttribute('href') !== (f.href == null || f.href === '' ? null : f.href) ||
                e.getAttribute('crossorigin') !== (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute('title') !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((p = e.getAttribute('src')),
                (p !== (f.src == null ? null : f.src) ||
                  e.getAttribute('type') !== (f.type == null ? null : f.type) ||
                  e.getAttribute('crossorigin') !== (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  p &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === 'input' && e.type === 'hidden') {
        var p = f.name == null ? null : '' + f.name;
        if (f.type === 'hidden' && e.getAttribute('name') === p) return e;
      } else return e;
      if (((e = Kn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function aC(e, n, i) {
    if (n === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !i) ||
        ((e = Kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jy(e, n) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = Kn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function jd(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function zd(e) {
    return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
  }
  function rC(e, n) {
    var i = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = n;
    else if (e.data !== '$?' || i.readyState !== 'loading') n();
    else {
      var o = function () {
        (n(), i.removeEventListener('DOMContentLoaded', o));
      };
      (i.addEventListener('DOMContentLoaded', o), (e._reactRetry = o));
    }
  }
  function Kn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&' || n === 'F!' || n === 'F'))
          break;
        if (n === '/$' || n === '/&') return null;
      }
    }
    return e;
  }
  var Ud = null;
  function Wy(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '/$' || i === '/&') {
          if (n === 0) return Kn(e.nextSibling);
          n--;
        } else (i !== '$' && i !== '$!' && i !== '$?' && i !== '$~' && i !== '&') || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ev(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?' || i === '$~' || i === '&') {
          if (n === 0) return e;
          n--;
        } else (i !== '/$' && i !== '/&') || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function tv(e, n, i) {
    switch (((n = xu(i)), e)) {
      case 'html':
        if (((e = n.documentElement), !e)) throw Error(l(452));
        return e;
      case 'head':
        if (((e = n.head), !e)) throw Error(l(453));
        return e;
      case 'body':
        if (((e = n.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Ho(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Et(e);
  }
  var Xn = new Map(),
    nv = new Set();
  function wu(e) {
    return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var nr = V.d;
  V.d = {f: iC, r: lC, D: oC, C: sC, L: uC, m: cC, X: dC, S: fC, M: hC};
  function iC() {
    var e = nr.f(),
      n = hu();
    return e || n;
  }
  function lC(e) {
    var n = Qe(e);
    n !== null && n.tag === 5 && n.type === 'form' ? bg(n) : nr.r(e);
  }
  var yl = typeof document > 'u' ? null : document;
  function av(e, n, i) {
    var o = yl;
    if (o && typeof n == 'string' && n) {
      var f = Pn(n);
      ((f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof i == 'string' && (f += '[crossorigin="' + i + '"]'),
        nv.has(f) ||
          (nv.add(f),
          (e = {rel: e, crossOrigin: i, href: n}),
          o.querySelector(f) === null &&
            ((n = o.createElement('link')), Jt(n, 'link', e), vt(n), o.head.appendChild(n))));
    }
  }
  function oC(e) {
    (nr.D(e), av('dns-prefetch', e, null));
  }
  function sC(e, n) {
    (nr.C(e, n), av('preconnect', e, n));
  }
  function uC(e, n, i) {
    nr.L(e, n, i);
    var o = yl;
    if (o && e && n) {
      var f = 'link[rel="preload"][as="' + Pn(n) + '"]';
      n === 'image' && i && i.imageSrcSet
        ? ((f += '[imagesrcset="' + Pn(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == 'string' && (f += '[imagesizes="' + Pn(i.imageSizes) + '"]'))
        : (f += '[href="' + Pn(e) + '"]');
      var p = f;
      switch (n) {
        case 'style':
          p = vl(e);
          break;
        case 'script':
          p = bl(e);
      }
      Xn.has(p) ||
        ((e = g({rel: 'preload', href: n === 'image' && i && i.imageSrcSet ? void 0 : e, as: n}, i)),
        Xn.set(p, e),
        o.querySelector(f) !== null ||
          (n === 'style' && o.querySelector(Bo(p))) ||
          (n === 'script' && o.querySelector(ko(p))) ||
          ((n = o.createElement('link')), Jt(n, 'link', e), vt(n), o.head.appendChild(n)));
    }
  }
  function cC(e, n) {
    nr.m(e, n);
    var i = yl;
    if (i && e) {
      var o = n && typeof n.as == 'string' ? n.as : 'script',
        f = 'link[rel="modulepreload"][as="' + Pn(o) + '"][href="' + Pn(e) + '"]',
        p = f;
      switch (o) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          p = bl(e);
      }
      if (!Xn.has(p) && ((e = g({rel: 'modulepreload', href: e}, n)), Xn.set(p, e), i.querySelector(f) === null)) {
        switch (o) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (i.querySelector(ko(p))) return;
        }
        ((o = i.createElement('link')), Jt(o, 'link', e), vt(o), i.head.appendChild(o));
      }
    }
  }
  function fC(e, n, i) {
    nr.S(e, n, i);
    var o = yl;
    if (o && e) {
      var f = hn(o).hoistableStyles,
        p = vl(e);
      n = n || 'default';
      var v = f.get(p);
      if (!v) {
        var E = {loading: 0, preload: null};
        if ((v = o.querySelector(Bo(p)))) E.loading = 5;
        else {
          ((e = g({rel: 'stylesheet', href: e, 'data-precedence': n}, i)), (i = Xn.get(p)) && Hd(e, i));
          var L = (v = o.createElement('link'));
          (vt(L),
            Jt(L, 'link', e),
            (L._p = new Promise(function (Y, J) {
              ((L.onload = Y), (L.onerror = J));
            })),
            L.addEventListener('load', function () {
              E.loading |= 1;
            }),
            L.addEventListener('error', function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            Eu(v, n, o));
        }
        ((v = {type: 'stylesheet', instance: v, count: 1, state: E}), f.set(p, v));
      }
    }
  }
  function dC(e, n) {
    nr.X(e, n);
    var i = yl;
    if (i && e) {
      var o = hn(i).hoistableScripts,
        f = bl(e),
        p = o.get(f);
      p ||
        ((p = i.querySelector(ko(f))),
        p ||
          ((e = g({src: e, async: !0}, n)),
          (n = Xn.get(f)) && Bd(e, n),
          (p = i.createElement('script')),
          vt(p),
          Jt(p, 'link', e),
          i.head.appendChild(p)),
        (p = {type: 'script', instance: p, count: 1, state: null}),
        o.set(f, p));
    }
  }
  function hC(e, n) {
    nr.M(e, n);
    var i = yl;
    if (i && e) {
      var o = hn(i).hoistableScripts,
        f = bl(e),
        p = o.get(f);
      p ||
        ((p = i.querySelector(ko(f))),
        p ||
          ((e = g({src: e, async: !0, type: 'module'}, n)),
          (n = Xn.get(f)) && Bd(e, n),
          (p = i.createElement('script')),
          vt(p),
          Jt(p, 'link', e),
          i.head.appendChild(p)),
        (p = {type: 'script', instance: p, count: 1, state: null}),
        o.set(f, p));
    }
  }
  function rv(e, n, i, o) {
    var f = (f = be.current) ? wu(f) : null;
    if (!f) throw Error(l(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof i.precedence == 'string' && typeof i.href == 'string'
          ? ((n = vl(i.href)),
            (i = hn(f).hoistableStyles),
            (o = i.get(n)),
            o || ((o = {type: 'style', instance: null, count: 0, state: null}), i.set(n, o)),
            o)
          : {type: 'void', instance: null, count: 0, state: null};
      case 'link':
        if (i.rel === 'stylesheet' && typeof i.href == 'string' && typeof i.precedence == 'string') {
          e = vl(i.href);
          var p = hn(f).hoistableStyles,
            v = p.get(e);
          if (
            (v ||
              ((f = f.ownerDocument || f),
              (v = {type: 'stylesheet', instance: null, count: 0, state: {loading: 0, preload: null}}),
              p.set(e, v),
              (p = f.querySelector(Bo(e))) && !p._p && ((v.instance = p), (v.state.loading = 5)),
              Xn.has(e) ||
                ((i = {
                  rel: 'preload',
                  as: 'style',
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Xn.set(e, i),
                p || mC(f, e, i, v.state))),
            n && o === null)
          )
            throw Error(l(528, ''));
          return v;
        }
        if (n && o !== null) throw Error(l(529, ''));
        return null;
      case 'script':
        return (
          (n = i.async),
          (i = i.src),
          typeof i == 'string' && n && typeof n != 'function' && typeof n != 'symbol'
            ? ((n = bl(i)),
              (i = hn(f).hoistableScripts),
              (o = i.get(n)),
              o || ((o = {type: 'script', instance: null, count: 0, state: null}), i.set(n, o)),
              o)
            : {type: 'void', instance: null, count: 0, state: null}
        );
      default:
        throw Error(l(444, e));
    }
  }
  function vl(e) {
    return 'href="' + Pn(e) + '"';
  }
  function Bo(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function iv(e) {
    return g({}, e, {'data-precedence': e.precedence, precedence: null});
  }
  function mC(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (o.loading = 1)
      : ((n = e.createElement('link')),
        (o.preload = n),
        n.addEventListener('load', function () {
          return (o.loading |= 1);
        }),
        n.addEventListener('error', function () {
          return (o.loading |= 2);
        }),
        Jt(n, 'link', i),
        vt(n),
        e.head.appendChild(n));
  }
  function bl(e) {
    return '[src="' + Pn(e) + '"]';
  }
  function ko(e) {
    return 'script[async]' + e;
  }
  function lv(e, n, i) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var o = e.querySelector('style[data-href~="' + Pn(i.href) + '"]');
          if (o) return ((n.instance = o), vt(o), o);
          var f = g({}, i, {'data-href': i.href, 'data-precedence': i.precedence, href: null, precedence: null});
          return (
            (o = (e.ownerDocument || e).createElement('style')),
            vt(o),
            Jt(o, 'style', f),
            Eu(o, i.precedence, e),
            (n.instance = o)
          );
        case 'stylesheet':
          f = vl(i.href);
          var p = e.querySelector(Bo(f));
          if (p) return ((n.state.loading |= 4), (n.instance = p), vt(p), p);
          ((o = iv(i)), (f = Xn.get(f)) && Hd(o, f), (p = (e.ownerDocument || e).createElement('link')), vt(p));
          var v = p;
          return (
            (v._p = new Promise(function (E, L) {
              ((v.onload = E), (v.onerror = L));
            })),
            Jt(p, 'link', o),
            (n.state.loading |= 4),
            Eu(p, i.precedence, e),
            (n.instance = p)
          );
        case 'script':
          return (
            (p = bl(i.src)),
            (f = e.querySelector(ko(p)))
              ? ((n.instance = f), vt(f), f)
              : ((o = i),
                (f = Xn.get(p)) && ((o = g({}, i)), Bd(o, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement('script')),
                vt(f),
                Jt(f, 'link', o),
                e.head.appendChild(f),
                (n.instance = f))
          );
        case 'void':
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), Eu(o, i.precedence, e));
    return n.instance;
  }
  function Eu(e, n, i) {
    for (
      var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        f = o.length ? o[o.length - 1] : null,
        p = f,
        v = 0;
      v < o.length;
      v++
    ) {
      var E = o[v];
      if (E.dataset.precedence === n) p = E;
      else if (p !== f) break;
    }
    p
      ? p.parentNode.insertBefore(e, p.nextSibling)
      : ((n = i.nodeType === 9 ? i.head : i), n.insertBefore(e, n.firstChild));
  }
  function Hd(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title));
  }
  function Bd(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity));
  }
  var Cu = null;
  function ov(e, n, i) {
    if (Cu === null) {
      var o = new Map(),
        f = (Cu = new Map());
      f.set(i, o);
    } else ((f = Cu), (o = f.get(i)), o || ((o = new Map()), f.set(i, o)));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), f = 0; f < i.length; f++) {
      var p = i[f];
      if (
        !(p[xt] || p[me] || (e === 'link' && p.getAttribute('rel') === 'stylesheet')) &&
        p.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var v = p.getAttribute(n) || '';
        v = e + v;
        var E = o.get(v);
        E ? E.push(p) : o.set(v, [p]);
      }
    }
    return o;
  }
  function sv(e, n, i) {
    ((e = e.ownerDocument || e), e.head.insertBefore(i, n === 'title' ? e.querySelector('head > title') : null));
  }
  function pC(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof n.precedence != 'string' || typeof n.href != 'string' || n.href === '') break;
        return !0;
      case 'link':
        if (typeof n.rel != 'string' || typeof n.href != 'string' || n.href === '' || n.onLoad || n.onError) break;
        switch (n.rel) {
          case 'stylesheet':
            return ((e = n.disabled), typeof n.precedence == 'string' && e == null);
          default:
            return !0;
        }
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function uv(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function gC(e, n, i, o) {
    if (
      i.type === 'stylesheet' &&
      (typeof o.media != 'string' || matchMedia(o.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var f = vl(o.href),
          p = n.querySelector(Bo(f));
        if (p) {
          ((n = p._p),
            n !== null &&
              typeof n == 'object' &&
              typeof n.then == 'function' &&
              (e.count++, (e = Tu.bind(e)), n.then(e, e)),
            (i.state.loading |= 4),
            (i.instance = p),
            vt(p));
          return;
        }
        ((p = n.ownerDocument || n), (o = iv(o)), (f = Xn.get(f)) && Hd(o, f), (p = p.createElement('link')), vt(p));
        var v = p;
        ((v._p = new Promise(function (E, L) {
          ((v.onload = E), (v.onerror = L));
        })),
          Jt(p, 'link', o),
          (i.instance = p));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(i, n),
        (n = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (e.count++, (i = Tu.bind(e)), n.addEventListener('load', i), n.addEventListener('error', i)));
    }
  }
  var kd = 0;
  function yC(e, n) {
    return (
      e.stylesheets && e.count === 0 && Ru(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (i) {
            var o = setTimeout(function () {
              if ((e.stylesheets && Ru(e, e.stylesheets), e.unsuspend)) {
                var p = e.unsuspend;
                ((e.unsuspend = null), p());
              }
            }, 6e4 + n);
            0 < e.imgBytes && kd === 0 && (kd = 62500 * ZE());
            var f = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && Ru(e, e.stylesheets), e.unsuspend))
                ) {
                  var p = e.unsuspend;
                  ((e.unsuspend = null), p());
                }
              },
              (e.imgBytes > kd ? 50 : 800) + n,
            );
            return (
              (e.unsuspend = i),
              function () {
                ((e.unsuspend = null), clearTimeout(o), clearTimeout(f));
              }
            );
          }
        : null
    );
  }
  function Tu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Ru(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ou = null;
  function Ru(e, n) {
    ((e.stylesheets = null),
      e.unsuspend !== null && (e.count++, (Ou = new Map()), n.forEach(vC, e), (Ou = null), Tu.call(e)));
  }
  function vC(e, n) {
    if (!(n.state.loading & 4)) {
      var i = Ou.get(e);
      if (i) var o = i.get(null);
      else {
        ((i = new Map()), Ou.set(e, i));
        for (var f = e.querySelectorAll('link[data-precedence],style[data-precedence]'), p = 0; p < f.length; p++) {
          var v = f[p];
          (v.nodeName === 'LINK' || v.getAttribute('media') !== 'not all') && (i.set(v.dataset.precedence, v), (o = v));
        }
        o && i.set(null, o);
      }
      ((f = n.instance),
        (v = f.getAttribute('data-precedence')),
        (p = i.get(v) || o),
        p === o && i.set(null, f),
        i.set(v, f),
        this.count++,
        (o = Tu.bind(this)),
        f.addEventListener('load', o),
        f.addEventListener('error', o),
        p
          ? p.parentNode.insertBefore(f, p.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(f, e.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Po = {$$typeof: _, Provider: null, Consumer: null, _currentValue: B, _currentValue2: B, _threadCount: 0};
  function bC(e, n, i, o, f, p, v, E, L) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
      (this.callbackPriority = 0),
      (this.expirationTimes = En(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = En(0)),
      (this.hiddenUpdates = En(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = f),
      (this.onCaughtError = p),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = L),
      (this.incompleteTransitions = new Map()));
  }
  function cv(e, n, i, o, f, p, v, E, L, Y, J, ne) {
    return (
      (e = new bC(e, n, i, v, L, Y, J, ne, E)),
      (n = 1),
      p === !0 && (n |= 24),
      (p = On(3, null, null, n)),
      (e.current = p),
      (p.stateNode = e),
      (n = vf()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (p.memoizedState = {element: o, isDehydrated: i, cache: n}),
      wf(p),
      e
    );
  }
  function fv(e) {
    return e ? ((e = Ii), e) : Ii;
  }
  function dv(e, n, i, o, f, p) {
    ((f = fv(f)),
      o.context === null ? (o.context = f) : (o.pendingContext = f),
      (o = Sr(n)),
      (o.payload = {element: i}),
      (p = p === void 0 ? null : p),
      p !== null && (o.callback = p),
      (i = xr(e, o, n)),
      i !== null && (bn(i, e, n), vo(i, e, n)));
  }
  function hv(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Pd(e, n) {
    (hv(e, n), (e = e.alternate) && hv(e, n));
  }
  function mv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = ci(e, 67108864);
      (n !== null && bn(n, e, 67108864), Pd(e, 67108864));
    }
  }
  function pv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Nn();
      n = F(n);
      var i = ci(e, n);
      (i !== null && bn(i, e, n), Pd(e, n));
    }
  }
  var Au = !0;
  function SC(e, n, i, o) {
    var f = N.T;
    N.T = null;
    var p = V.p;
    try {
      ((V.p = 2), Vd(e, n, i, o));
    } finally {
      ((V.p = p), (N.T = f));
    }
  }
  function xC(e, n, i, o) {
    var f = N.T;
    N.T = null;
    var p = V.p;
    try {
      ((V.p = 8), Vd(e, n, i, o));
    } finally {
      ((V.p = p), (N.T = f));
    }
  }
  function Vd(e, n, i, o) {
    if (Au) {
      var f = qd(o);
      if (f === null) (Rd(e, n, o, Du, i), yv(e, o));
      else if (EC(f, e, n, i, o)) o.stopPropagation();
      else if ((yv(e, o), n & 4 && -1 < wC.indexOf(e))) {
        for (; f !== null; ) {
          var p = Qe(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var v = Bn(p.pendingLanes);
                  if (v !== 0) {
                    var E = p;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; v; ) {
                      var L = 1 << (31 - Pt(v));
                      ((E.entanglements[1] |= L), (v &= ~L));
                    }
                    (xa(p), (nt & 6) === 0 && ((fu = St() + 500), jo(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((E = ci(p, 2)), E !== null && bn(E, p, 2), hu(), Pd(p, 2));
            }
          if (((p = qd(o)), p === null && Rd(e, n, o, Du, i), p === f)) break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else Rd(e, n, o, null, i);
    }
  }
  function qd(e) {
    return ((e = Yc(e)), Yd(e));
  }
  var Du = null;
  function Yd(e) {
    if (((Du = null), (e = Ct(e)), e !== null)) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (((e = c(n)), e !== null)) return e;
          e = null;
        } else if (i === 31) {
          if (((e = d(n)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ((Du = e), null);
  }
  function gv(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (za()) {
          case ya:
            return 2;
          case hr:
            return 8;
          case Kt:
          case un:
            return 32;
          case Un:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $d = !1,
    _r = null,
    Lr = null,
    jr = null,
    Vo = new Map(),
    qo = new Map(),
    zr = [],
    wC =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function yv(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        _r = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Lr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        jr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Vo.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        qo.delete(n.pointerId);
    }
  }
  function Yo(e, n, i, o, f, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {blockedOn: n, domEventName: i, eventSystemFlags: o, nativeEvent: p, targetContainers: [f]}),
        n !== null && ((n = Qe(n)), n !== null && mv(n)),
        e)
      : ((e.eventSystemFlags |= o), (n = e.targetContainers), f !== null && n.indexOf(f) === -1 && n.push(f), e);
  }
  function EC(e, n, i, o, f) {
    switch (n) {
      case 'focusin':
        return ((_r = Yo(_r, e, n, i, o, f)), !0);
      case 'dragenter':
        return ((Lr = Yo(Lr, e, n, i, o, f)), !0);
      case 'mouseover':
        return ((jr = Yo(jr, e, n, i, o, f)), !0);
      case 'pointerover':
        var p = f.pointerId;
        return (Vo.set(p, Yo(Vo.get(p) || null, e, n, i, o, f)), !0);
      case 'gotpointercapture':
        return ((p = f.pointerId), qo.set(p, Yo(qo.get(p) || null, e, n, i, o, f)), !0);
    }
    return !1;
  }
  function vv(e) {
    var n = Ct(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = c(i)), n !== null)) {
            ((e.blockedOn = n),
              Re(e.priority, function () {
                pv(i);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = d(i)), n !== null)) {
            ((e.blockedOn = n),
              Re(e.priority, function () {
                pv(i);
              }));
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = qd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((qc = o), i.target.dispatchEvent(o), (qc = null));
      } else return ((n = Qe(i)), n !== null && mv(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function bv(e, n, i) {
    Mu(e) && i.delete(n);
  }
  function CC() {
    (($d = !1),
      _r !== null && Mu(_r) && (_r = null),
      Lr !== null && Mu(Lr) && (Lr = null),
      jr !== null && Mu(jr) && (jr = null),
      Vo.forEach(bv),
      qo.forEach(bv));
  }
  function Nu(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null), $d || (($d = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, CC)));
  }
  var _u = null;
  function Sv(e) {
    _u !== e &&
      ((_u = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        _u === e && (_u = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n],
            o = e[n + 1],
            f = e[n + 2];
          if (typeof o != 'function') {
            if (Yd(o || i) === null) continue;
            break;
          }
          var p = Qe(i);
          p !== null && (e.splice(n, 3), (n -= 3), qf(p, {pending: !0, data: f, method: i.method, action: o}, o, f));
        }
      }));
  }
  function Sl(e) {
    function n(L) {
      return Nu(L, e);
    }
    (_r !== null && Nu(_r, e), Lr !== null && Nu(Lr, e), jr !== null && Nu(jr, e), Vo.forEach(n), qo.forEach(n));
    for (var i = 0; i < zr.length; i++) {
      var o = zr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < zr.length && ((i = zr[0]), i.blockedOn === null); ) (vv(i), i.blockedOn === null && zr.shift());
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (o = 0; o < i.length; o += 3) {
        var f = i[o],
          p = i[o + 1],
          v = f[ve] || null;
        if (typeof p == 'function') v || Sv(i);
        else if (v) {
          var E = null;
          if (p && p.hasAttribute('formAction')) {
            if (((f = p), (v = p[ve] || null))) E = v.formAction;
            else if (Yd(f) !== null) continue;
          } else E = v.action;
          (typeof E == 'function' ? (i[o + 1] = E) : (i.splice(o, 3), (o -= 3)), Sv(i));
        }
      }
  }
  function xv() {
    function e(p) {
      p.canIntercept &&
        p.info === 'react-transition' &&
        p.intercept({
          handler: function () {
            return new Promise(function (v) {
              return (f = v);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function n() {
      (f !== null && (f(), (f = null)), o || setTimeout(i, 20));
    }
    function i() {
      if (!o && !navigation.transition) {
        var p = navigation.currentEntry;
        p &&
          p.url != null &&
          navigation.navigate(p.url, {state: p.getState(), info: 'react-transition', history: 'replace'});
      }
    }
    if (typeof navigation == 'object') {
      var o = !1,
        f = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', n),
        navigation.addEventListener('navigateerror', n),
        setTimeout(i, 100),
        function () {
          ((o = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', n),
            navigation.removeEventListener('navigateerror', n),
            f !== null && (f(), (f = null)));
        }
      );
    }
  }
  function Fd(e) {
    this._internalRoot = e;
  }
  ((Lu.prototype.render = Fd.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var i = n.current,
        o = Nn();
      dv(i, o, e, n, null, null);
    }),
    (Lu.prototype.unmount = Fd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (dv(e.current, 2, null, e, null, null), hu(), (n[Ce] = null));
        }
      }));
  function Lu(e) {
    this._internalRoot = e;
  }
  Lu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = de();
      e = {blockedOn: null, target: e, priority: n};
      for (var i = 0; i < zr.length && n !== 0 && n < zr[i].priority; i++);
      (zr.splice(i, 0, e), i === 0 && vv(e));
    }
  };
  var wv = a.version;
  if (wv !== '19.2.4') throw Error(l(527, wv, '19.2.4'));
  V.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == 'function' ? Error(l(188)) : ((e = Object.keys(e).join(',')), Error(l(268, e)));
    return ((e = h(n)), (e = e !== null ? y(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var TC = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ju.isDisabled && ju.supportsFiber)
      try {
        ((Ua = ju.inject(TC)), (pt = ju));
      } catch {}
  }
  return (
    (Fo.createRoot = function (e, n) {
      if (!s(e)) throw Error(l(299));
      var i = !1,
        o = '',
        f = Dg,
        p = Mg,
        v = Ng;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError)),
        (n = cv(e, 1, !1, null, null, i, o, null, f, p, v, xv)),
        (e[Ce] = n.current),
        Od(e),
        new Fd(n)
      );
    }),
    (Fo.hydrateRoot = function (e, n, i) {
      if (!s(e)) throw Error(l(299));
      var o = !1,
        f = '',
        p = Dg,
        v = Mg,
        E = Ng,
        L = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (o = !0),
          i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (p = i.onUncaughtError),
          i.onCaughtError !== void 0 && (v = i.onCaughtError),
          i.onRecoverableError !== void 0 && (E = i.onRecoverableError),
          i.formState !== void 0 && (L = i.formState)),
        (n = cv(e, 1, !0, n, i ?? null, o, f, L, p, v, E, xv)),
        (n.context = fv(null)),
        (i = n.current),
        (o = Nn()),
        (o = F(o)),
        (f = Sr(o)),
        (f.callback = null),
        xr(i, f, o),
        (i = o),
        (n.current.lanes = i),
        ct(n, i),
        xa(n),
        (e[Ce] = n.current),
        Od(e),
        new Lu(n)
      );
    }),
    (Fo.version = '19.2.4'),
    Fo
  );
}
var Lv;
function HC() {
  if (Lv) return Qd.exports;
  Lv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return (t(), (Qd.exports = UC()), Qd.exports);
}
var BC = HC();
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Y0 = (t) => {
    throw TypeError(t);
  },
  kC = (t, a, r) => a.has(t) || Y0('Cannot ' + r),
  Wd = (t, a, r) => (kC(t, a, 'read from private field'), r ? r.call(t) : a.get(t)),
  PC = (t, a, r) =>
    a.has(t) ? Y0('Cannot add the same private member more than once') : a instanceof WeakSet ? a.add(t) : a.set(t, r),
  jv = 'popstate';
function VC(t = {}) {
  function a(l, s) {
    let {pathname: u, search: c, hash: d} = l.location;
    return is(
      '',
      {pathname: u, search: c, hash: d},
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default',
    );
  }
  function r(l, s) {
    return typeof s == 'string' ? s : Na(s);
  }
  return YC(a, r, null, t);
}
function Ye(t, a) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(a);
}
function jt(t, a) {
  if (!t) {
    typeof console < 'u' && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function qC() {
  return Math.random().toString(36).substring(2, 10);
}
function zv(t, a) {
  return {usr: t.state, key: t.key, idx: a};
}
function is(t, a, r = null, l) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof a == 'string' ? Jr(a) : a),
    state: r,
    key: (a && a.key) || l || qC(),
  };
}
function Na({pathname: t = '/', search: a = '', hash: r = ''}) {
  return (
    a && a !== '?' && (t += a.charAt(0) === '?' ? a : '?' + a),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Jr(t) {
  let a = {};
  if (t) {
    let r = t.indexOf('#');
    r >= 0 && ((a.hash = t.substring(r)), (t = t.substring(0, r)));
    let l = t.indexOf('?');
    (l >= 0 && ((a.search = t.substring(l)), (t = t.substring(0, l))), t && (a.pathname = t));
  }
  return a;
}
function YC(t, a, r, l = {}) {
  let {window: s = document.defaultView, v5Compat: u = !1} = l,
    c = s.history,
    d = 'POP',
    m = null,
    h = y();
  h == null && ((h = 0), c.replaceState({...c.state, idx: h}, ''));
  function y() {
    return (c.state || {idx: null}).idx;
  }
  function g() {
    d = 'POP';
    let T = y(),
      R = T == null ? null : T - h;
    ((h = T), m && m({action: d, location: w.location, delta: R}));
  }
  function S(T, R) {
    d = 'PUSH';
    let A = is(w.location, T, R);
    h = y() + 1;
    let _ = zv(A, h),
      z = w.createHref(A);
    try {
      c.pushState(_, '', z);
    } catch ($) {
      if ($ instanceof DOMException && $.name === 'DataCloneError') throw $;
      s.location.assign(z);
    }
    u && m && m({action: d, location: w.location, delta: 1});
  }
  function x(T, R) {
    d = 'REPLACE';
    let A = is(w.location, T, R);
    h = y();
    let _ = zv(A, h),
      z = w.createHref(A);
    (c.replaceState(_, '', z), u && m && m({action: d, location: w.location, delta: 0}));
  }
  function C(T) {
    return $0(T);
  }
  let w = {
    get action() {
      return d;
    },
    get location() {
      return t(s, c);
    },
    listen(T) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        s.addEventListener(jv, g),
        (m = T),
        () => {
          (s.removeEventListener(jv, g), (m = null));
        }
      );
    },
    createHref(T) {
      return a(s, T);
    },
    createURL: C,
    encodeLocation(T) {
      let R = C(T);
      return {pathname: R.pathname, search: R.search, hash: R.hash};
    },
    push: S,
    replace: x,
    go(T) {
      return c.go(T);
    },
  };
  return w;
}
function $0(t, a = !1) {
  let r = 'http://localhost';
  (typeof window < 'u' && (r = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    Ye(r, 'No window.location.(origin|href) available to create URL'));
  let l = typeof t == 'string' ? t : Na(t);
  return ((l = l.replace(/ $/, '%20')), !a && l.startsWith('//') && (l = r + l), new URL(l, r));
}
var Wo,
  Uv = class {
    constructor(t) {
      if ((PC(this, Wo, new Map()), t)) for (let [a, r] of t) this.set(a, r);
    }
    get(t) {
      if (Wd(this, Wo).has(t)) return Wd(this, Wo).get(t);
      if (t.defaultValue !== void 0) return t.defaultValue;
      throw new Error('No value found for context');
    }
    set(t, a) {
      Wd(this, Wo).set(t, a);
    }
  };
Wo = new WeakMap();
var $C = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function FC(t) {
  return $C.has(t);
}
var GC = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'middleware', 'children']);
function KC(t) {
  return GC.has(t);
}
function XC(t) {
  return t.index === !0;
}
function ls(t, a, r = [], l = {}, s = !1) {
  return t.map((u, c) => {
    let d = [...r, String(c)],
      m = typeof u.id == 'string' ? u.id : d.join('-');
    if (
      (Ye(u.index !== !0 || !u.children, 'Cannot specify children on an index route'),
      Ye(
        s || !l[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`,
      ),
      XC(u))
    ) {
      let h = {...u, id: m};
      return ((l[m] = Hv(h, a(h))), h);
    } else {
      let h = {...u, id: m, children: void 0};
      return ((l[m] = Hv(h, a(h))), u.children && (h.children = ls(u.children, a, d, l, s)), h);
    }
  });
}
function Hv(t, a) {
  return Object.assign(t, {
    ...a,
    ...(typeof a.lazy == 'object' && a.lazy != null ? {lazy: {...t.lazy, ...a.lazy}} : {}),
  });
}
function Pr(t, a, r = '/') {
  return es(t, a, r, !1);
}
function es(t, a, r, l) {
  let s = typeof a == 'string' ? Jr(a) : a,
    u = Jn(s.pathname || '/', r);
  if (u == null) return null;
  let c = F0(t);
  IC(c);
  let d = null;
  for (let m = 0; d == null && m < c.length; ++m) {
    let h = oT(u);
    d = iT(c[m], h, l);
  }
  return d;
}
function QC(t, a) {
  let {route: r, pathname: l, params: s} = t;
  return {id: r.id, pathname: l, params: s, data: a[r.id], loaderData: a[r.id], handle: r.handle};
}
function F0(t, a = [], r = [], l = '', s = !1) {
  let u = (c, d, m = s, h) => {
    let y = {
      relativePath: h === void 0 ? c.path || '' : h,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    if (y.relativePath.startsWith('/')) {
      if (!y.relativePath.startsWith(l) && m) return;
      (Ye(
        y.relativePath.startsWith(l),
        `Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(l.length)));
    }
    let g = Da([l, y.relativePath]),
      S = r.concat(y);
    (c.children &&
      c.children.length > 0 &&
      (Ye(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      F0(c.children, a, S, g, m)),
      !(c.path == null && !c.index) && a.push({path: g, score: aT(g, c.index), routesMeta: S}));
  };
  return (
    t.forEach((c, d) => {
      var m;
      if (c.path === '' || !((m = c.path) != null && m.includes('?'))) u(c, d);
      else for (let h of G0(c.path)) u(c, d, !0, h);
    }),
    a
  );
}
function G0(t) {
  let a = t.split('/');
  if (a.length === 0) return [];
  let [r, ...l] = a,
    s = r.endsWith('?'),
    u = r.replace(/\?$/, '');
  if (l.length === 0) return s ? [u, ''] : [u];
  let c = G0(l.join('/')),
    d = [];
  return (
    d.push(...c.map((m) => (m === '' ? u : [u, m].join('/')))),
    s && d.push(...c),
    d.map((m) => (t.startsWith('/') && m === '' ? '/' : m))
  );
}
function IC(t) {
  t.sort((a, r) =>
    a.score !== r.score
      ? r.score - a.score
      : rT(
          a.routesMeta.map((l) => l.childrenIndex),
          r.routesMeta.map((l) => l.childrenIndex),
        ),
  );
}
var ZC = /^:[\w-]+$/,
  JC = 3,
  WC = 2,
  eT = 1,
  tT = 10,
  nT = -2,
  Bv = (t) => t === '*';
function aT(t, a) {
  let r = t.split('/'),
    l = r.length;
  return (
    r.some(Bv) && (l += nT),
    a && (l += WC),
    r.filter((s) => !Bv(s)).reduce((s, u) => s + (ZC.test(u) ? JC : u === '' ? eT : tT), l)
  );
}
function rT(t, a) {
  return t.length === a.length && t.slice(0, -1).every((l, s) => l === a[s]) ? t[t.length - 1] - a[a.length - 1] : 0;
}
function iT(t, a, r = !1) {
  let {routesMeta: l} = t,
    s = {},
    u = '/',
    c = [];
  for (let d = 0; d < l.length; ++d) {
    let m = l[d],
      h = d === l.length - 1,
      y = u === '/' ? a : a.slice(u.length) || '/',
      g = ic({path: m.relativePath, caseSensitive: m.caseSensitive, end: h}, y),
      S = m.route;
    if (
      (!g &&
        h &&
        r &&
        !l[l.length - 1].route.index &&
        (g = ic({path: m.relativePath, caseSensitive: m.caseSensitive, end: !1}, y)),
      !g)
    )
      return null;
    (Object.assign(s, g.params),
      c.push({params: s, pathname: Da([u, g.pathname]), pathnameBase: cT(Da([u, g.pathnameBase])), route: S}),
      g.pathnameBase !== '/' && (u = Da([u, g.pathnameBase])));
  }
  return c;
}
function ic(t, a) {
  typeof t == 'string' && (t = {path: t, caseSensitive: !1, end: !0});
  let [r, l] = lT(t.path, t.caseSensitive, t.end),
    s = a.match(r);
  if (!s) return null;
  let u = s[0],
    c = u.replace(/(.)\/+$/, '$1'),
    d = s.slice(1);
  return {
    params: l.reduce((h, {paramName: y, isOptional: g}, S) => {
      if (y === '*') {
        let C = d[S] || '';
        c = u.slice(0, u.length - C.length).replace(/(.)\/+$/, '$1');
      }
      const x = d[S];
      return (g && !x ? (h[y] = void 0) : (h[y] = (x || '').replace(/%2F/g, '/')), h);
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: t,
  };
}
function lT(t, a = !1, r = !0) {
  jt(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`,
  );
  let l = [],
    s =
      '^' +
      t
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, m) => (l.push({paramName: d, isOptional: m != null}), m ? '/?([^\\/]+)?' : '/([^\\/]+)'),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    t.endsWith('*')
      ? (l.push({paramName: '*'}), (s += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (s += '\\/*$')
        : t !== '' && t !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, a ? void 0 : 'i'), l]
  );
}
function oT(t) {
  try {
    return t
      .split('/')
      .map((a) => decodeURIComponent(a).replace(/\//g, '%2F'))
      .join('/');
  } catch (a) {
    return (
      jt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`,
      ),
      t
    );
  }
}
function Jn(t, a) {
  if (a === '/') return t;
  if (!t.toLowerCase().startsWith(a.toLowerCase())) return null;
  let r = a.endsWith('/') ? a.length - 1 : a.length,
    l = t.charAt(r);
  return l && l !== '/' ? null : t.slice(r) || '/';
}
function sT({basename: t, pathname: a}) {
  return a === '/' ? t : Da([t, a]);
}
var K0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  om = (t) => K0.test(t);
function uT(t, a = '/') {
  let {pathname: r, search: l = '', hash: s = ''} = typeof t == 'string' ? Jr(t) : t,
    u;
  return (
    r ? ((r = r.replace(/\/\/+/g, '/')), r.startsWith('/') ? (u = kv(r.substring(1), '/')) : (u = kv(r, a))) : (u = a),
    {pathname: u, search: fT(l), hash: dT(s)}
  );
}
function kv(t, a) {
  let r = a.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((s) => {
      s === '..' ? r.length > 1 && r.pop() : s !== '.' && r.push(s);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function eh(t, a, r, l) {
  return `Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function X0(t) {
  return t.filter((a, r) => r === 0 || (a.route.path && a.route.path.length > 0));
}
function xc(t) {
  let a = X0(t);
  return a.map((r, l) => (l === a.length - 1 ? r.pathname : r.pathnameBase));
}
function wc(t, a, r, l = !1) {
  let s;
  typeof t == 'string'
    ? (s = Jr(t))
    : ((s = {...t}),
      Ye(!s.pathname || !s.pathname.includes('?'), eh('?', 'pathname', 'search', s)),
      Ye(!s.pathname || !s.pathname.includes('#'), eh('#', 'pathname', 'hash', s)),
      Ye(!s.search || !s.search.includes('#'), eh('#', 'search', 'hash', s)));
  let u = t === '' || s.pathname === '',
    c = u ? '/' : s.pathname,
    d;
  if (c == null) d = r;
  else {
    let g = a.length - 1;
    if (!l && c.startsWith('..')) {
      let S = c.split('/');
      for (; S[0] === '..'; ) (S.shift(), (g -= 1));
      s.pathname = S.join('/');
    }
    d = g >= 0 ? a[g] : '/';
  }
  let m = uT(s, d),
    h = c && c !== '/' && c.endsWith('/'),
    y = (u || c === '.') && r.endsWith('/');
  return (!m.pathname.endsWith('/') && (h || y) && (m.pathname += '/'), m);
}
var Da = (t) => t.join('/').replace(/\/\/+/g, '/'),
  cT = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  fT = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  dT = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t),
  ys = class {
    constructor(t, a, r, l = !1) {
      ((this.status = t),
        (this.statusText = a || ''),
        (this.internal = l),
        r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r));
    }
  };
function os(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
function vs(t) {
  return (
    t
      .map((a) => a.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Q0 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function I0(t, a) {
  let r = t;
  if (typeof r != 'string' || !K0.test(r)) return {absoluteURL: void 0, isExternal: !1, to: r};
  let l = r,
    s = !1;
  if (Q0)
    try {
      let u = new URL(window.location.href),
        c = r.startsWith('//') ? new URL(u.protocol + r) : new URL(r),
        d = Jn(c.pathname, a);
      c.origin === u.origin && d != null ? (r = d + c.search + c.hash) : (s = !0);
    } catch {
      jt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return {absoluteURL: l, isExternal: s, to: r};
}
var Xr = Symbol('Uninstrumented');
function hT(t, a) {
  let r = {
    lazy: [],
    'lazy.loader': [],
    'lazy.action': [],
    'lazy.middleware': [],
    middleware: [],
    loader: [],
    action: [],
  };
  t.forEach((s) =>
    s({
      id: a.id,
      index: a.index,
      path: a.path,
      instrument(u) {
        let c = Object.keys(r);
        for (let d of c) u[d] && r[d].push(u[d]);
      },
    }),
  );
  let l = {};
  if (typeof a.lazy == 'function' && r.lazy.length > 0) {
    let s = Al(r.lazy, a.lazy, () => {});
    s && (l.lazy = s);
  }
  if (typeof a.lazy == 'object') {
    let s = a.lazy;
    ['middleware', 'loader', 'action'].forEach((u) => {
      let c = s[u],
        d = r[`lazy.${u}`];
      if (typeof c == 'function' && d.length > 0) {
        let m = Al(d, c, () => {});
        m && (l.lazy = Object.assign(l.lazy || {}, {[u]: m}));
      }
    });
  }
  return (
    ['loader', 'action'].forEach((s) => {
      let u = a[s];
      if (typeof u == 'function' && r[s].length > 0) {
        let c = u[Xr] ?? u,
          d = Al(r[s], c, (...m) => Pv(m[0]));
        d && (s === 'loader' && c.hydrate === !0 && (d.hydrate = !0), (d[Xr] = c), (l[s] = d));
      }
    }),
    a.middleware &&
      a.middleware.length > 0 &&
      r.middleware.length > 0 &&
      (l.middleware = a.middleware.map((s) => {
        let u = s[Xr] ?? s,
          c = Al(r.middleware, u, (...d) => Pv(d[0]));
        return c ? ((c[Xr] = u), c) : s;
      })),
    l
  );
}
function mT(t, a) {
  let r = {navigate: [], fetch: []};
  if (
    (a.forEach((l) =>
      l({
        instrument(s) {
          let u = Object.keys(s);
          for (let c of u) s[c] && r[c].push(s[c]);
        },
      }),
    ),
    r.navigate.length > 0)
  ) {
    let l = t.navigate[Xr] ?? t.navigate,
      s = Al(r.navigate, l, (...u) => {
        let [c, d] = u;
        return {to: typeof c == 'number' || typeof c == 'string' ? c : c ? Na(c) : '.', ...Vv(t, d ?? {})};
      });
    s && ((s[Xr] = l), (t.navigate = s));
  }
  if (r.fetch.length > 0) {
    let l = t.fetch[Xr] ?? t.fetch,
      s = Al(r.fetch, l, (...u) => {
        let [c, , d, m] = u;
        return {href: d ?? '.', fetcherKey: c, ...Vv(t, m ?? {})};
      });
    s && ((s[Xr] = l), (t.fetch = s));
  }
  return t;
}
function Al(t, a, r) {
  return t.length === 0
    ? null
    : async (...l) => {
        let s = await Z0(t, r(...l), () => a(...l), t.length - 1);
        if (s.type === 'error') throw s.value;
        return s.value;
      };
}
async function Z0(t, a, r, l) {
  let s = t[l],
    u;
  if (s) {
    let c,
      d = async () => (
        c ? console.error('You cannot call instrumented handlers more than once') : (c = Z0(t, a, r, l - 1)),
        (u = await c),
        Ye(u, 'Expected a result'),
        u.type === 'error' && u.value instanceof Error
          ? {status: 'error', error: u.value}
          : {status: 'success', error: void 0}
      );
    try {
      await s(d, a);
    } catch (m) {
      console.error('An instrumentation function threw an error:', m);
    }
    (c || (await d()), await c);
  } else
    try {
      u = {type: 'success', value: await r()};
    } catch (c) {
      u = {type: 'error', value: c};
    }
  return u || {type: 'error', value: new Error('No result assigned in instrumentation chain.')};
}
function Pv(t) {
  let {request: a, context: r, params: l, unstable_pattern: s} = t;
  return {request: pT(a), params: {...l}, unstable_pattern: s, context: gT(r)};
}
function Vv(t, a) {
  return {
    currentUrl: Na(t.state.location),
    ...('formMethod' in a ? {formMethod: a.formMethod} : {}),
    ...('formEncType' in a ? {formEncType: a.formEncType} : {}),
    ...('formData' in a ? {formData: a.formData} : {}),
    ...('body' in a ? {body: a.body} : {}),
  };
}
function pT(t) {
  return {method: t.method, url: t.url, headers: {get: (...a) => t.headers.get(...a)}};
}
function gT(t) {
  if (vT(t)) {
    let a = {...t};
    return (Object.freeze(a), a);
  } else return {get: (a) => t.get(a)};
}
var yT = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function vT(t) {
  if (t === null || typeof t != 'object') return !1;
  const a = Object.getPrototypeOf(t);
  return a === Object.prototype || a === null || Object.getOwnPropertyNames(a).sort().join('\0') === yT;
}
var J0 = ['POST', 'PUT', 'PATCH', 'DELETE'],
  bT = new Set(J0),
  ST = ['GET', ...J0],
  xT = new Set(ST),
  W0 = new Set([301, 302, 303, 307, 308]),
  wT = new Set([307, 308]),
  th = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ET = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Go = {state: 'unblocked', proceed: void 0, reset: void 0, location: void 0},
  CT = (t) => ({hasErrorBoundary: !!t.hasErrorBoundary}),
  eS = 'remix-router-transitions',
  tS = Symbol('ResetLoaderData');
function TT(t) {
  const a = t.window ? t.window : typeof window < 'u' ? window : void 0,
    r = typeof a < 'u' && typeof a.document < 'u' && typeof a.document.createElement < 'u';
  Ye(t.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let l = t.hydrationRouteProperties || [],
    s = t.mapRouteProperties || CT,
    u = s;
  if (t.unstable_instrumentations) {
    let M = t.unstable_instrumentations;
    u = (H) => ({...s(H), ...hT(M.map((F) => F.route).filter(Boolean), H)});
  }
  let c = {},
    d = ls(t.routes, u, void 0, c),
    m,
    h = t.basename || '/';
  h.startsWith('/') || (h = `/${h}`);
  let y = t.dataStrategy || MT,
    g = {...t.future},
    S = null,
    x = new Set(),
    C = null,
    w = null,
    T = null,
    R = t.hydrationData != null,
    A = Pr(d, t.history.location, h),
    _ = !1,
    z = null,
    $;
  if (A == null && !t.patchRoutesOnNavigation) {
    let M = Zn(404, {pathname: t.history.location.pathname}),
      {matches: H, route: F} = Uu(d);
    (($ = !0), (A = H), (z = {[F.id]: M}));
  } else if ((A && !t.hydrationData && Mt(A, d, t.history.location.pathname).active && (A = null), A))
    if (A.some((M) => M.route.lazy)) $ = !1;
    else if (!A.some((M) => sm(M.route))) $ = !0;
    else {
      let M = t.hydrationData ? t.hydrationData.loaderData : null,
        H = t.hydrationData ? t.hydrationData.errors : null;
      if (H) {
        let F = A.findIndex((ae) => H[ae.route.id] !== void 0);
        $ = A.slice(0, F + 1).every((ae) => !Mh(ae.route, M, H));
      } else $ = A.every((F) => !Mh(F.route, M, H));
    }
  else {
    (($ = !1), (A = []));
    let M = Mt(null, d, t.history.location.pathname);
    M.active && M.matches && ((_ = !0), (A = M.matches));
  }
  let I,
    O = {
      historyAction: t.history.action,
      location: t.history.location,
      matches: A,
      initialized: $,
      navigation: th,
      restoreScrollPosition: t.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
      actionData: (t.hydrationData && t.hydrationData.actionData) || null,
      errors: (t.hydrationData && t.hydrationData.errors) || z,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = 'POP',
    Z = null,
    se = !1,
    pe,
    le = !1,
    ce = new Map(),
    ie = null,
    he = !1,
    N = !1,
    V = new Set(),
    B = new Map(),
    fe = 0,
    ge = -1,
    D = new Map(),
    K = new Set(),
    X = new Map(),
    ee = new Map(),
    ue = new Set(),
    be = new Map(),
    re,
    ye = null;
  function Me() {
    if (
      ((S = t.history.listen(({action: M, location: H, delta: F}) => {
        if (re) {
          (re(), (re = void 0));
          return;
        }
        jt(
          be.size === 0 || F != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let ae = Ha({currentLocation: O.location, nextLocation: H, historyAction: M});
        if (ae && F != null) {
          let de = new Promise((Re) => {
            re = Re;
          });
          (t.history.go(F * -1),
            ea(ae, {
              state: 'blocked',
              location: H,
              proceed() {
                (ea(ae, {state: 'proceeding', proceed: void 0, reset: void 0, location: H}),
                  de.then(() => t.history.go(F)));
              },
              reset() {
                let Re = new Map(O.blockers);
                (Re.set(ae, Go), Te({blockers: Re}));
              },
            }),
            Z == null || Z.resolve(),
            (Z = null));
          return;
        }
        return zt(M, H);
      })),
      r)
    ) {
      XT(a, ce);
      let M = () => QT(a, ce);
      (a.addEventListener('pagehide', M), (ie = () => a.removeEventListener('pagehide', M)));
    }
    return (O.initialized || zt('POP', O.location, {initialHydration: !0}), I);
  }
  function Ue() {
    (S && S(),
      ie && ie(),
      x.clear(),
      pe && pe.abort(),
      O.fetchers.forEach((M, H) => Hn(H)),
      O.blockers.forEach((M, H) => wn(H)));
  }
  function He(M) {
    return (x.add(M), () => x.delete(M));
  }
  function Te(M, H = {}) {
    (M.matches &&
      (M.matches = M.matches.map((de) => {
        let Re = c[de.route.id],
          Ee = de.route;
        return Ee.element !== Re.element ||
          Ee.errorElement !== Re.errorElement ||
          Ee.hydrateFallbackElement !== Re.hydrateFallbackElement
          ? {...de, route: Re}
          : de;
      })),
      (O = {...O, ...M}));
    let F = [],
      ae = [];
    (O.fetchers.forEach((de, Re) => {
      de.state === 'idle' && (ue.has(Re) ? F.push(Re) : ae.push(Re));
    }),
      ue.forEach((de) => {
        !O.fetchers.has(de) && !B.has(de) && F.push(de);
      }),
      [...x].forEach((de) =>
        de(O, {
          deletedFetchers: F,
          newErrors: M.errors ?? null,
          viewTransitionOpts: H.viewTransitionOpts,
          flushSync: H.flushSync === !0,
        }),
      ),
      F.forEach((de) => Hn(de)),
      ae.forEach((de) => O.fetchers.delete(de)));
  }
  function ht(M, H, {flushSync: F} = {}) {
    var Le, Ae;
    let ae =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        rn(O.navigation.formMethod) &&
        O.navigation.state === 'loading' &&
        ((Le = M.state) == null ? void 0 : Le._isRedirect) !== !0,
      de;
    H.actionData
      ? Object.keys(H.actionData).length > 0
        ? (de = H.actionData)
        : (de = null)
      : ae
        ? (de = O.actionData)
        : (de = null);
    let Re = H.loaderData ? Zv(O.loaderData, H.loaderData, H.matches || [], H.errors) : O.loaderData,
      Ee = O.blockers;
    Ee.size > 0 && ((Ee = new Map(Ee)), Ee.forEach((ke, $e) => Ee.set($e, Go)));
    let me = he ? !1 : Dt(M, H.matches || O.matches),
      ve =
        se === !0 ||
        (O.navigation.formMethod != null &&
          rn(O.navigation.formMethod) &&
          ((Ae = M.state) == null ? void 0 : Ae._isRedirect) !== !0);
    (m && ((d = m), (m = void 0)),
      he ||
        P === 'POP' ||
        (P === 'PUSH' ? t.history.push(M, M.state) : P === 'REPLACE' && t.history.replace(M, M.state)));
    let Ce;
    if (P === 'POP') {
      let ke = ce.get(O.location.pathname);
      ke && ke.has(M.pathname)
        ? (Ce = {currentLocation: O.location, nextLocation: M})
        : ce.has(M.pathname) && (Ce = {currentLocation: M, nextLocation: O.location});
    } else if (le) {
      let ke = ce.get(O.location.pathname);
      (ke ? ke.add(M.pathname) : ((ke = new Set([M.pathname])), ce.set(O.location.pathname, ke)),
        (Ce = {currentLocation: O.location, nextLocation: M}));
    }
    (Te(
      {
        ...H,
        actionData: de,
        loaderData: Re,
        historyAction: P,
        location: M,
        initialized: !0,
        navigation: th,
        revalidation: 'idle',
        restoreScrollPosition: me,
        preventScrollReset: ve,
        blockers: Ee,
      },
      {viewTransitionOpts: Ce, flushSync: F === !0},
    ),
      (P = 'POP'),
      (se = !1),
      (le = !1),
      (he = !1),
      (N = !1),
      Z == null || Z.resolve(),
      (Z = null),
      ye == null || ye.resolve(),
      (ye = null));
  }
  async function mt(M, H) {
    if ((Z == null || Z.resolve(), (Z = null), typeof M == 'number')) {
      Z || (Z = tb());
      let $e = Z.promise;
      return (t.history.go(M), $e);
    }
    let F = Dh(O.location, O.matches, h, M, H == null ? void 0 : H.fromRouteId, H == null ? void 0 : H.relative),
      {path: ae, submission: de, error: Re} = qv(!1, F, H),
      Ee = O.location,
      me = is(O.location, ae, H && H.state);
    me = {...me, ...t.history.encodeLocation(me)};
    let ve = H && H.replace != null ? H.replace : void 0,
      Ce = 'PUSH';
    ve === !0
      ? (Ce = 'REPLACE')
      : ve === !1 ||
        (de != null &&
          rn(de.formMethod) &&
          de.formAction === O.location.pathname + O.location.search &&
          (Ce = 'REPLACE'));
    let Le = H && 'preventScrollReset' in H ? H.preventScrollReset === !0 : void 0,
      Ae = (H && H.flushSync) === !0,
      ke = Ha({currentLocation: Ee, nextLocation: me, historyAction: Ce});
    if (ke) {
      ea(ke, {
        state: 'blocked',
        location: me,
        proceed() {
          (ea(ke, {state: 'proceeding', proceed: void 0, reset: void 0, location: me}), mt(M, H));
        },
        reset() {
          let $e = new Map(O.blockers);
          ($e.set(ke, Go), Te({blockers: $e}));
        },
      });
      return;
    }
    await zt(Ce, me, {
      submission: de,
      pendingError: Re,
      preventScrollReset: Le,
      replace: H && H.replace,
      enableViewTransition: H && H.viewTransition,
      flushSync: Ae,
      callSiteDefaultShouldRevalidate: H && H.unstable_defaultShouldRevalidate,
    });
  }
  function xn() {
    (ye || (ye = tb()), hr(), Te({revalidation: 'loading'}));
    let M = ye.promise;
    return O.navigation.state === 'submitting'
      ? M
      : O.navigation.state === 'idle'
        ? (zt(O.historyAction, O.location, {startUninterruptedRevalidation: !0}), M)
        : (zt(P || O.historyAction, O.navigation.location, {
            overrideNavigation: O.navigation,
            enableViewTransition: le === !0,
          }),
          M);
  }
  async function zt(M, H, F) {
    (pe && pe.abort(),
      (pe = null),
      (P = M),
      (he = (F && F.startUninterruptedRevalidation) === !0),
      ut(O.location, O.matches),
      (se = (F && F.preventScrollReset) === !0),
      (le = (F && F.enableViewTransition) === !0));
    let ae = m || d,
      de = F && F.overrideNavigation,
      Re = F != null && F.initialHydration && O.matches && O.matches.length > 0 && !_ ? O.matches : Pr(ae, H, h),
      Ee = (F && F.flushSync) === !0;
    if (Re && O.initialized && !N && BT(O.location, H) && !(F && F.submission && rn(F.submission.formMethod))) {
      ht(H, {matches: Re}, {flushSync: Ee});
      return;
    }
    let me = Mt(Re, ae, H.pathname);
    if ((me.active && me.matches && (Re = me.matches), !Re)) {
      let {error: Et, notFoundMatches: Ct, route: Qe} = ta(H.pathname);
      ht(H, {matches: Ct, loaderData: {}, errors: {[Qe.id]: Et}}, {flushSync: Ee});
      return;
    }
    pe = new AbortController();
    let ve = Rl(t.history, H, pe.signal, F && F.submission),
      Ce = t.getContext ? await t.getContext() : new Uv(),
      Le;
    if (F && F.pendingError) Le = [Vr(Re).route.id, {type: 'error', error: F.pendingError}];
    else if (F && F.submission && rn(F.submission.formMethod)) {
      let Et = await sn(ve, H, F.submission, Re, Ce, me.active, F && F.initialHydration === !0, {
        replace: F.replace,
        flushSync: Ee,
      });
      if (Et.shortCircuited) return;
      if (Et.pendingActionResult) {
        let [Ct, Qe] = Et.pendingActionResult;
        if (_n(Qe) && os(Qe.error) && Qe.error.status === 404) {
          ((pe = null), ht(H, {matches: Et.matches, loaderData: {}, errors: {[Ct]: Qe.error}}));
          return;
        }
      }
      ((Re = Et.matches || Re),
        (Le = Et.pendingActionResult),
        (de = nh(H, F.submission)),
        (Ee = !1),
        (me.active = !1),
        (ve = Rl(t.history, ve.url, ve.signal)));
    }
    let {
      shortCircuited: Ae,
      matches: ke,
      loaderData: $e,
      errors: xt,
    } = await ja(
      ve,
      H,
      Re,
      Ce,
      me.active,
      de,
      F && F.submission,
      F && F.fetcherSubmission,
      F && F.replace,
      F && F.initialHydration === !0,
      Ee,
      Le,
      F && F.callSiteDefaultShouldRevalidate,
    );
    Ae || ((pe = null), ht(H, {matches: ke || Re, ...Jv(Le), loaderData: $e, errors: xt}));
  }
  async function sn(M, H, F, ae, de, Re, Ee, me = {}) {
    hr();
    let ve = GT(H, F);
    if ((Te({navigation: ve}, {flushSync: me.flushSync === !0}), Re)) {
      let Ae = await En(ae, H.pathname, M.signal);
      if (Ae.type === 'aborted') return {shortCircuited: !0};
      if (Ae.type === 'error') {
        if (Ae.partialMatches.length === 0) {
          let {matches: $e, route: xt} = Uu(d);
          return {matches: $e, pendingActionResult: [xt.id, {type: 'error', error: Ae.error}]};
        }
        let ke = Vr(Ae.partialMatches).route.id;
        return {matches: Ae.partialMatches, pendingActionResult: [ke, {type: 'error', error: Ae.error}]};
      } else if (Ae.matches) ae = Ae.matches;
      else {
        let {notFoundMatches: ke, error: $e, route: xt} = ta(H.pathname);
        return {matches: ke, pendingActionResult: [xt.id, {type: 'error', error: $e}]};
      }
    }
    let Ce,
      Le = Ju(ae, H);
    if (!Le.route.action && !Le.route.lazy)
      Ce = {type: 'error', error: Zn(405, {method: M.method, pathname: H.pathname, routeId: Le.route.id})};
    else {
      let Ae = Dl(u, c, M, ae, Le, Ee ? [] : l, de),
        ke = await za(M, Ae, de, null);
      if (((Ce = ke[Le.route.id]), !Ce)) {
        for (let $e of ae)
          if (ke[$e.route.id]) {
            Ce = ke[$e.route.id];
            break;
          }
      }
      if (M.signal.aborted) return {shortCircuited: !0};
    }
    if (Ci(Ce)) {
      let Ae;
      return (
        me && me.replace != null
          ? (Ae = me.replace)
          : (Ae =
              Xv(Ce.response.headers.get('Location'), new URL(M.url), h, t.history) ===
              O.location.pathname + O.location.search),
        await St(M, Ce, !0, {submission: F, replace: Ae}),
        {shortCircuited: !0}
      );
    }
    if (_n(Ce)) {
      let Ae = Vr(ae, Le.route.id);
      return (
        (me && me.replace) !== !0 && (P = 'PUSH'),
        {matches: ae, pendingActionResult: [Ae.route.id, Ce, Le.route.id]}
      );
    }
    return {matches: ae, pendingActionResult: [Le.route.id, Ce]};
  }
  async function ja(M, H, F, ae, de, Re, Ee, me, ve, Ce, Le, Ae, ke) {
    let $e = Re || nh(H, Ee),
      xt = Ee || me || eb($e),
      Et = !he && !Ce;
    if (de) {
      if (Et) {
        let Nt = At(Ae);
        Te({navigation: $e, ...(Nt !== void 0 ? {actionData: Nt} : {})}, {flushSync: Le});
      }
      let Ie = await En(F, H.pathname, M.signal);
      if (Ie.type === 'aborted') return {shortCircuited: !0};
      if (Ie.type === 'error') {
        if (Ie.partialMatches.length === 0) {
          let {matches: ra, route: Xt} = Uu(d);
          return {matches: ra, loaderData: {}, errors: {[Xt.id]: Ie.error}};
        }
        let Nt = Vr(Ie.partialMatches).route.id;
        return {matches: Ie.partialMatches, loaderData: {}, errors: {[Nt]: Ie.error}};
      } else if (Ie.matches) F = Ie.matches;
      else {
        let {error: Nt, notFoundMatches: ra, route: Xt} = ta(H.pathname);
        return {matches: ra, loaderData: {}, errors: {[Xt.id]: Nt}};
      }
    }
    let Ct = m || d,
      {dsMatches: Qe, revalidatingFetchers: Yt} = Yv(
        M,
        ae,
        u,
        c,
        t.history,
        O,
        F,
        xt,
        H,
        Ce ? [] : l,
        Ce === !0,
        N,
        V,
        ue,
        X,
        K,
        Ct,
        h,
        t.patchRoutesOnNavigation != null,
        Ae,
        ke,
      );
    if (
      ((ge = ++fe),
      !t.dataStrategy &&
        !Qe.some((Ie) => Ie.shouldLoad) &&
        !Qe.some((Ie) => Ie.route.middleware && Ie.route.middleware.length > 0) &&
        Yt.length === 0)
    ) {
      let Ie = Pt();
      return (
        ht(
          H,
          {
            matches: F,
            loaderData: {},
            errors: Ae && _n(Ae[1]) ? {[Ae[0]]: Ae[1].error} : null,
            ...Jv(Ae),
            ...(Ie ? {fetchers: new Map(O.fetchers)} : {}),
          },
          {flushSync: Le},
        ),
        {shortCircuited: !0}
      );
    }
    if (Et) {
      let Ie = {};
      if (!de) {
        Ie.navigation = $e;
        let Nt = At(Ae);
        Nt !== void 0 && (Ie.actionData = Nt);
      }
      (Yt.length > 0 && (Ie.fetchers = ti(Yt)), Te(Ie, {flushSync: Le}));
    }
    Yt.forEach((Ie) => {
      (pt(Ie.key), Ie.controller && B.set(Ie.key, Ie.controller));
    });
    let hn = () => Yt.forEach((Ie) => pt(Ie.key));
    pe && pe.signal.addEventListener('abort', hn);
    let {loaderResults: vt, fetcherResults: na} = await ya(Qe, Yt, M, ae);
    if (M.signal.aborted) return {shortCircuited: !0};
    (pe && pe.signal.removeEventListener('abort', hn), Yt.forEach((Ie) => B.delete(Ie.key)));
    let Cn = Hu(vt);
    if (Cn) return (await St(M, Cn.result, !0, {replace: ve}), {shortCircuited: !0});
    if (((Cn = Hu(na)), Cn)) return (K.add(Cn.key), await St(M, Cn.result, !0, {replace: ve}), {shortCircuited: !0});
    let {loaderData: aa, errors: kn} = Iv(O, F, vt, Ae, Yt, na);
    Ce && O.errors && (kn = {...O.errors, ...kn});
    let ka = Pt(),
      ri = Vi(ge),
      ii = ka || ri || Yt.length > 0;
    return {matches: F, loaderData: aa, errors: kn, ...(ii ? {fetchers: new Map(O.fetchers)} : {})};
  }
  function At(M) {
    if (M && !_n(M[1])) return {[M[0]]: M[1].data};
    if (O.actionData) return Object.keys(O.actionData).length === 0 ? null : O.actionData;
  }
  function ti(M) {
    return (
      M.forEach((H) => {
        let F = O.fetchers.get(H.key),
          ae = Ko(void 0, F ? F.data : void 0);
        O.fetchers.set(H.key, ae);
      }),
      new Map(O.fetchers)
    );
  }
  async function ni(M, H, F, ae) {
    pt(M);
    let de = (ae && ae.flushSync) === !0,
      Re = m || d,
      Ee = Dh(O.location, O.matches, h, F, H, ae == null ? void 0 : ae.relative),
      me = Pr(Re, Ee, h),
      ve = Mt(me, Re, Ee);
    if ((ve.active && ve.matches && (me = ve.matches), !me)) {
      un(M, H, Zn(404, {pathname: Ee}), {flushSync: de});
      return;
    }
    let {path: Ce, submission: Le, error: Ae} = qv(!0, Ee, ae);
    if (Ae) {
      un(M, H, Ae, {flushSync: de});
      return;
    }
    let ke = t.getContext ? await t.getContext() : new Uv(),
      $e = (ae && ae.preventScrollReset) === !0;
    if (Le && rn(Le.formMethod)) {
      await Gt(M, H, Ce, me, ke, ve.active, de, $e, Le, ae && ae.unstable_defaultShouldRevalidate);
      return;
    }
    (X.set(M, {routeId: H, path: Ce}), await ga(M, H, Ce, me, ke, ve.active, de, $e, Le));
  }
  async function Gt(M, H, F, ae, de, Re, Ee, me, ve, Ce) {
    (hr(), X.delete(M));
    let Le = O.fetchers.get(M);
    Kt(M, KT(ve, Le), {flushSync: Ee});
    let Ae = new AbortController(),
      ke = Rl(t.history, F, Ae.signal, ve);
    if (Re) {
      let Ze = await En(ae, new URL(ke.url).pathname, ke.signal, M);
      if (Ze.type === 'aborted') return;
      if (Ze.type === 'error') {
        un(M, H, Ze.error, {flushSync: Ee});
        return;
      } else if (Ze.matches) ae = Ze.matches;
      else {
        un(M, H, Zn(404, {pathname: F}), {flushSync: Ee});
        return;
      }
    }
    let $e = Ju(ae, F);
    if (!$e.route.action && !$e.route.lazy) {
      let Ze = Zn(405, {method: ve.formMethod, pathname: F, routeId: H});
      un(M, H, Ze, {flushSync: Ee});
      return;
    }
    B.set(M, Ae);
    let xt = fe,
      Et = Dl(u, c, ke, ae, $e, l, de),
      Ct = await za(ke, Et, de, M),
      Qe = Ct[$e.route.id];
    if (!Qe) {
      for (let Ze of Et)
        if (Ct[Ze.route.id]) {
          Qe = Ct[Ze.route.id];
          break;
        }
    }
    if (ke.signal.aborted) {
      B.get(M) === Ae && B.delete(M);
      return;
    }
    if (ue.has(M)) {
      if (Ci(Qe) || _n(Qe)) {
        Kt(M, ir(void 0));
        return;
      }
    } else {
      if (Ci(Qe))
        if ((B.delete(M), ge > xt)) {
          Kt(M, ir(void 0));
          return;
        } else return (K.add(M), Kt(M, Ko(ve)), St(ke, Qe, !1, {fetcherSubmission: ve, preventScrollReset: me}));
      if (_n(Qe)) {
        un(M, H, Qe.error);
        return;
      }
    }
    let Yt = O.navigation.location || O.location,
      hn = Rl(t.history, Yt, Ae.signal),
      vt = m || d,
      na = O.navigation.state !== 'idle' ? Pr(vt, O.navigation.location, h) : O.matches;
    Ye(na, "Didn't find any matches after fetcher action");
    let Cn = ++fe;
    D.set(M, Cn);
    let aa = Ko(ve, Qe.data);
    O.fetchers.set(M, aa);
    let {dsMatches: kn, revalidatingFetchers: ka} = Yv(
      hn,
      de,
      u,
      c,
      t.history,
      O,
      na,
      ve,
      Yt,
      l,
      !1,
      N,
      V,
      ue,
      X,
      K,
      vt,
      h,
      t.patchRoutesOnNavigation != null,
      [$e.route.id, Qe],
      Ce,
    );
    (ka
      .filter((Ze) => Ze.key !== M)
      .forEach((Ze) => {
        let li = Ze.key,
          Cs = O.fetchers.get(li),
          to = Ko(void 0, Cs ? Cs.data : void 0);
        (O.fetchers.set(li, to), pt(li), Ze.controller && B.set(li, Ze.controller));
      }),
      Te({fetchers: new Map(O.fetchers)}));
    let ri = () => ka.forEach((Ze) => pt(Ze.key));
    Ae.signal.addEventListener('abort', ri);
    let {loaderResults: ii, fetcherResults: Ie} = await ya(kn, ka, hn, de);
    if (Ae.signal.aborted) return;
    if (
      (Ae.signal.removeEventListener('abort', ri),
      D.delete(M),
      B.delete(M),
      ka.forEach((Ze) => B.delete(Ze.key)),
      O.fetchers.has(M))
    ) {
      let Ze = ir(Qe.data);
      O.fetchers.set(M, Ze);
    }
    let Nt = Hu(ii);
    if (Nt) return St(hn, Nt.result, !1, {preventScrollReset: me});
    if (((Nt = Hu(Ie)), Nt)) return (K.add(Nt.key), St(hn, Nt.result, !1, {preventScrollReset: me}));
    let {loaderData: ra, errors: Xt} = Iv(O, na, ii, void 0, ka, Ie);
    (Vi(Cn),
      O.navigation.state === 'loading' && Cn > ge
        ? (Ye(P, 'Expected pending action'),
          pe && pe.abort(),
          ht(O.navigation.location, {matches: na, loaderData: ra, errors: Xt, fetchers: new Map(O.fetchers)}))
        : (Te({errors: Xt, loaderData: Zv(O.loaderData, ra, na, Xt), fetchers: new Map(O.fetchers)}), (N = !1)));
  }
  async function ga(M, H, F, ae, de, Re, Ee, me, ve) {
    let Ce = O.fetchers.get(M);
    Kt(M, Ko(ve, Ce ? Ce.data : void 0), {flushSync: Ee});
    let Le = new AbortController(),
      Ae = Rl(t.history, F, Le.signal);
    if (Re) {
      let Qe = await En(ae, new URL(Ae.url).pathname, Ae.signal, M);
      if (Qe.type === 'aborted') return;
      if (Qe.type === 'error') {
        un(M, H, Qe.error, {flushSync: Ee});
        return;
      } else if (Qe.matches) ae = Qe.matches;
      else {
        un(M, H, Zn(404, {pathname: F}), {flushSync: Ee});
        return;
      }
    }
    let ke = Ju(ae, F);
    B.set(M, Le);
    let $e = fe,
      xt = Dl(u, c, Ae, ae, ke, l, de),
      Ct = (await za(Ae, xt, de, M))[ke.route.id];
    if ((B.get(M) === Le && B.delete(M), !Ae.signal.aborted)) {
      if (ue.has(M)) {
        Kt(M, ir(void 0));
        return;
      }
      if (Ci(Ct))
        if (ge > $e) {
          Kt(M, ir(void 0));
          return;
        } else {
          (K.add(M), await St(Ae, Ct, !1, {preventScrollReset: me}));
          return;
        }
      if (_n(Ct)) {
        un(M, H, Ct.error);
        return;
      }
      Kt(M, ir(Ct.data));
    }
  }
  async function St(M, H, F, {submission: ae, fetcherSubmission: de, preventScrollReset: Re, replace: Ee} = {}) {
    (F || (Z == null || Z.resolve(), (Z = null)), H.response.headers.has('X-Remix-Revalidate') && (N = !0));
    let me = H.response.headers.get('Location');
    (Ye(me, 'Expected a Location header on the redirect Response'), (me = Xv(me, new URL(M.url), h, t.history)));
    let ve = is(O.location, me, {_isRedirect: !0});
    if (r) {
      let xt = !1;
      if (H.response.headers.has('X-Remix-Reload-Document')) xt = !0;
      else if (om(me)) {
        const Et = $0(me, !0);
        xt = Et.origin !== a.location.origin || Jn(Et.pathname, h) == null;
      }
      if (xt) {
        Ee ? a.location.replace(me) : a.location.assign(me);
        return;
      }
    }
    pe = null;
    let Ce = Ee === !0 || H.response.headers.has('X-Remix-Replace') ? 'REPLACE' : 'PUSH',
      {formMethod: Le, formAction: Ae, formEncType: ke} = O.navigation;
    !ae && !de && Le && Ae && ke && (ae = eb(O.navigation));
    let $e = ae || de;
    if (wT.has(H.response.status) && $e && rn($e.formMethod))
      await zt(Ce, ve, {
        submission: {...$e, formAction: me},
        preventScrollReset: Re || se,
        enableViewTransition: F ? le : void 0,
      });
    else {
      let xt = nh(ve, ae);
      await zt(Ce, ve, {
        overrideNavigation: xt,
        fetcherSubmission: de,
        preventScrollReset: Re || se,
        enableViewTransition: F ? le : void 0,
      });
    }
  }
  async function za(M, H, F, ae) {
    var Ee;
    let de,
      Re = {};
    try {
      de = await _T(y, M, H, ae, F, !1);
    } catch (me) {
      return (
        H.filter((ve) => ve.shouldLoad).forEach((ve) => {
          Re[ve.route.id] = {type: 'error', error: me};
        }),
        Re
      );
    }
    if (M.signal.aborted) return Re;
    if (!rn(M.method))
      for (let me of H) {
        if (((Ee = de[me.route.id]) == null ? void 0 : Ee.type) === 'error') break;
        !de.hasOwnProperty(me.route.id) &&
          !O.loaderData.hasOwnProperty(me.route.id) &&
          (!O.errors || !O.errors.hasOwnProperty(me.route.id)) &&
          me.shouldCallHandler() &&
          (de[me.route.id] = {
            type: 'error',
            result: new Error(`No result returned from dataStrategy for route ${me.route.id}`),
          });
      }
    for (let [me, ve] of Object.entries(de))
      if (qT(ve)) {
        let Ce = ve.result;
        Re[me] = {type: 'redirect', response: UT(Ce, M, me, H, h)};
      } else Re[me] = await zT(ve);
    return Re;
  }
  async function ya(M, H, F, ae) {
    let de = za(F, M, ae, null),
      Re = Promise.all(
        H.map(async (ve) => {
          if (ve.matches && ve.match && ve.request && ve.controller) {
            let Le = (await za(ve.request, ve.matches, ae, ve.key))[ve.match.route.id];
            return {[ve.key]: Le};
          } else return Promise.resolve({[ve.key]: {type: 'error', error: Zn(404, {pathname: ve.path})}});
        }),
      ),
      Ee = await de,
      me = (await Re).reduce((ve, Ce) => Object.assign(ve, Ce), {});
    return {loaderResults: Ee, fetcherResults: me};
  }
  function hr() {
    ((N = !0),
      X.forEach((M, H) => {
        (B.has(H) && V.add(H), pt(H));
      }));
  }
  function Kt(M, H, F = {}) {
    (O.fetchers.set(M, H), Te({fetchers: new Map(O.fetchers)}, {flushSync: (F && F.flushSync) === !0}));
  }
  function un(M, H, F, ae = {}) {
    let de = Vr(O.matches, H);
    (Hn(M), Te({errors: {[de.route.id]: F}, fetchers: new Map(O.fetchers)}, {flushSync: (ae && ae.flushSync) === !0}));
  }
  function Un(M) {
    return (ee.set(M, (ee.get(M) || 0) + 1), ue.has(M) && ue.delete(M), O.fetchers.get(M) || ET);
  }
  function Pi(M, H) {
    (pt(M, H == null ? void 0 : H.reason), Kt(M, ir(null)));
  }
  function Hn(M) {
    let H = O.fetchers.get(M);
    (B.has(M) && !(H && H.state === 'loading' && D.has(M)) && pt(M),
      X.delete(M),
      D.delete(M),
      K.delete(M),
      ue.delete(M),
      V.delete(M),
      O.fetchers.delete(M));
  }
  function Ua(M) {
    let H = (ee.get(M) || 0) - 1;
    (H <= 0 ? (ee.delete(M), ue.add(M)) : ee.set(M, H), Te({fetchers: new Map(O.fetchers)}));
  }
  function pt(M, H) {
    let F = B.get(M);
    F && (F.abort(H), B.delete(M));
  }
  function dn(M) {
    for (let H of M) {
      let F = Un(H),
        ae = ir(F.data);
      O.fetchers.set(H, ae);
    }
  }
  function Pt() {
    let M = [],
      H = !1;
    for (let F of K) {
      let ae = O.fetchers.get(F);
      (Ye(ae, `Expected fetcher: ${F}`), ae.state === 'loading' && (K.delete(F), M.push(F), (H = !0)));
    }
    return (dn(M), H);
  }
  function Vi(M) {
    let H = [];
    for (let [F, ae] of D)
      if (ae < M) {
        let de = O.fetchers.get(F);
        (Ye(de, `Expected fetcher: ${F}`), de.state === 'loading' && (pt(F), D.delete(F), H.push(F)));
      }
    return (dn(H), H.length > 0);
  }
  function ai(M, H) {
    let F = O.blockers.get(M) || Go;
    return (be.get(M) !== H && be.set(M, H), F);
  }
  function wn(M) {
    (O.blockers.delete(M), be.delete(M));
  }
  function ea(M, H) {
    let F = O.blockers.get(M) || Go;
    Ye(
      (F.state === 'unblocked' && H.state === 'blocked') ||
        (F.state === 'blocked' && H.state === 'blocked') ||
        (F.state === 'blocked' && H.state === 'proceeding') ||
        (F.state === 'blocked' && H.state === 'unblocked') ||
        (F.state === 'proceeding' && H.state === 'unblocked'),
      `Invalid blocker state transition: ${F.state} -> ${H.state}`,
    );
    let ae = new Map(O.blockers);
    (ae.set(M, H), Te({blockers: ae}));
  }
  function Ha({currentLocation: M, nextLocation: H, historyAction: F}) {
    if (be.size === 0) return;
    be.size > 1 && jt(!1, 'A router only supports one blocker at a time');
    let ae = Array.from(be.entries()),
      [de, Re] = ae[ae.length - 1],
      Ee = O.blockers.get(de);
    if (!(Ee && Ee.state === 'proceeding') && Re({currentLocation: M, nextLocation: H, historyAction: F})) return de;
  }
  function ta(M) {
    let H = Zn(404, {pathname: M}),
      F = m || d,
      {matches: ae, route: de} = Uu(F);
    return {notFoundMatches: ae, route: de, error: H};
  }
  function Bn(M, H, F) {
    if (((C = M), (T = H), (w = F || null), !R && O.navigation === th)) {
      R = !0;
      let ae = Dt(O.location, O.matches);
      ae != null && Te({restoreScrollPosition: ae});
    }
    return () => {
      ((C = null), (T = null), (w = null));
    };
  }
  function _e(M, H) {
    return (
      (w &&
        w(
          M,
          H.map((ae) => QC(ae, O.loaderData)),
        )) ||
      M.key
    );
  }
  function ut(M, H) {
    if (C && T) {
      let F = _e(M, H);
      C[F] = T();
    }
  }
  function Dt(M, H) {
    if (C) {
      let F = _e(M, H),
        ae = C[F];
      if (typeof ae == 'number') return ae;
    }
    return null;
  }
  function Mt(M, H, F) {
    if (t.patchRoutesOnNavigation)
      if (M) {
        if (Object.keys(M[0].params).length > 0) return {active: !0, matches: es(H, F, h, !0)};
      } else return {active: !0, matches: es(H, F, h, !0) || []};
    return {active: !1, matches: null};
  }
  async function En(M, H, F, ae) {
    if (!t.patchRoutesOnNavigation) return {type: 'success', matches: M};
    let de = M;
    for (;;) {
      let Re = m == null,
        Ee = m || d,
        me = c;
      try {
        await t.patchRoutesOnNavigation({
          signal: F,
          path: H,
          matches: de,
          fetcherKey: ae,
          patch: (Le, Ae) => {
            F.aborted || $v(Le, Ae, Ee, me, u, !1);
          },
        });
      } catch (Le) {
        return {type: 'error', error: Le, partialMatches: de};
      } finally {
        Re && !F.aborted && (d = [...d]);
      }
      if (F.aborted) return {type: 'aborted'};
      let ve = Pr(Ee, H, h),
        Ce = null;
      if (ve) {
        if (Object.keys(ve[0].params).length === 0) return {type: 'success', matches: ve};
        if (((Ce = es(Ee, H, h, !0)), !(Ce && de.length < Ce.length && ct(de, Ce.slice(0, de.length)))))
          return {type: 'success', matches: ve};
      }
      if ((Ce || (Ce = es(Ee, H, h, !0)), !Ce || ct(de, Ce))) return {type: 'success', matches: null};
      de = Ce;
    }
  }
  function ct(M, H) {
    return M.length === H.length && M.every((F, ae) => F.route.id === H[ae].route.id);
  }
  function en(M) {
    ((c = {}), (m = ls(M, u, void 0, c)));
  }
  function Ba(M, H, F = !1) {
    let ae = m == null;
    ($v(M, H, m || d, c, u, F), ae && ((d = [...d]), Te({})));
  }
  return (
    (I = {
      get basename() {
        return h;
      },
      get future() {
        return g;
      },
      get state() {
        return O;
      },
      get routes() {
        return d;
      },
      get window() {
        return a;
      },
      initialize: Me,
      subscribe: He,
      enableScrollRestoration: Bn,
      navigate: mt,
      fetch: ni,
      revalidate: xn,
      createHref: (M) => t.history.createHref(M),
      encodeLocation: (M) => t.history.encodeLocation(M),
      getFetcher: Un,
      resetFetcher: Pi,
      deleteFetcher: Ua,
      dispose: Ue,
      getBlocker: ai,
      deleteBlocker: wn,
      patchRoutes: Ba,
      _internalFetchControllers: B,
      _internalSetRoutes: en,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(M) {
        Te(M);
      },
    }),
    t.unstable_instrumentations && (I = mT(I, t.unstable_instrumentations.map((M) => M.router).filter(Boolean))),
    I
  );
}
function OT(t) {
  return t != null && (('formData' in t && t.formData != null) || ('body' in t && t.body !== void 0));
}
function Dh(t, a, r, l, s, u) {
  let c, d;
  if (s) {
    c = [];
    for (let h of a)
      if ((c.push(h), h.route.id === s)) {
        d = h;
        break;
      }
  } else ((c = a), (d = a[a.length - 1]));
  let m = wc(l || '.', xc(c), Jn(t.pathname, r) || t.pathname, u === 'path');
  if ((l == null && ((m.search = t.search), (m.hash = t.hash)), (l == null || l === '' || l === '.') && d)) {
    let h = cm(m.search);
    if (d.route.index && !h) m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index';
    else if (!d.route.index && h) {
      let y = new URLSearchParams(m.search),
        g = y.getAll('index');
      (y.delete('index'), g.filter((x) => x).forEach((x) => y.append('index', x)));
      let S = y.toString();
      m.search = S ? `?${S}` : '';
    }
  }
  return (r !== '/' && (m.pathname = sT({basename: r, pathname: m.pathname})), Na(m));
}
function qv(t, a, r) {
  if (!r || !OT(r)) return {path: a};
  if (r.formMethod && !FT(r.formMethod)) return {path: a, error: Zn(405, {method: r.formMethod})};
  let l = () => ({path: a, error: Zn(400, {type: 'invalid-body'})}),
    u = (r.formMethod || 'get').toUpperCase(),
    c = oS(a);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!rn(u)) return l();
      let g =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (S, [x, C]) => `${S}${x}=${C}
`,
                '',
              )
            : String(r.body);
      return {
        path: a,
        submission: {formMethod: u, formAction: c, formEncType: r.formEncType, formData: void 0, json: void 0, text: g},
      };
    } else if (r.formEncType === 'application/json') {
      if (!rn(u)) return l();
      try {
        let g = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: a,
          submission: {
            formMethod: u,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Ye(typeof FormData == 'function', 'FormData is not available in this environment');
  let d, m;
  if (r.formData) ((d = _h(r.formData)), (m = r.formData));
  else if (r.body instanceof FormData) ((d = _h(r.body)), (m = r.body));
  else if (r.body instanceof URLSearchParams) ((d = r.body), (m = Qv(d)));
  else if (r.body == null) ((d = new URLSearchParams()), (m = new FormData()));
  else
    try {
      ((d = new URLSearchParams(r.body)), (m = Qv(d)));
    } catch {
      return l();
    }
  let h = {
    formMethod: u,
    formAction: c,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (rn(h.formMethod)) return {path: a, submission: h};
  let y = Jr(a);
  return (t && y.search && cm(y.search) && d.append('index', ''), (y.search = `?${d}`), {path: Na(y), submission: h});
}
function Yv(t, a, r, l, s, u, c, d, m, h, y, g, S, x, C, w, T, R, A, _, z) {
  var he;
  let $ = _ ? (_n(_[1]) ? _[1].error : _[1].data) : void 0,
    I = s.createURL(u.location),
    O = s.createURL(m),
    P;
  if (y && u.errors) {
    let N = Object.keys(u.errors)[0];
    P = c.findIndex((V) => V.route.id === N);
  } else if (_ && _n(_[1])) {
    let N = _[0];
    P = c.findIndex((V) => V.route.id === N) - 1;
  }
  let Z = _ ? _[1].statusCode : void 0,
    se = Z && Z >= 400,
    pe = {
      currentUrl: I,
      currentParams: ((he = u.matches[0]) == null ? void 0 : he.params) || {},
      nextUrl: O,
      nextParams: c[0].params,
      ...d,
      actionResult: $,
      actionStatus: Z,
    },
    le = vs(c),
    ce = c.map((N, V) => {
      let {route: B} = N,
        fe = null;
      if (
        (P != null && V > P
          ? (fe = !1)
          : B.lazy
            ? (fe = !0)
            : sm(B)
              ? y
                ? (fe = Mh(B, u.loaderData, u.errors))
                : RT(u.loaderData, u.matches[V], N) && (fe = !0)
              : (fe = !1),
        fe !== null)
      )
        return Nh(r, l, t, le, N, h, a, fe);
      let ge = !1;
      typeof z == 'boolean'
        ? (ge = z)
        : se
          ? (ge = !1)
          : (g || I.pathname + I.search === O.pathname + O.search || I.search !== O.search || AT(u.matches[V], N)) &&
            (ge = !0);
      let D = {...pe, defaultShouldRevalidate: ge},
        K = ns(N, D);
      return Nh(r, l, t, le, N, h, a, K, D, z);
    }),
    ie = [];
  return (
    C.forEach((N, V) => {
      if (y || !c.some((ue) => ue.route.id === N.routeId) || x.has(V)) return;
      let B = u.fetchers.get(V),
        fe = B && B.state !== 'idle' && B.data === void 0,
        ge = Pr(T, N.path, R);
      if (!ge) {
        if (A && fe) return;
        ie.push({
          key: V,
          routeId: N.routeId,
          path: N.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (w.has(V)) return;
      let D = Ju(ge, N.path),
        K = new AbortController(),
        X = Rl(s, N.path, K.signal),
        ee = null;
      if (S.has(V)) (S.delete(V), (ee = Dl(r, l, X, ge, D, h, a)));
      else if (fe) g && (ee = Dl(r, l, X, ge, D, h, a));
      else {
        let ue;
        typeof z == 'boolean' ? (ue = z) : se ? (ue = !1) : (ue = g);
        let be = {...pe, defaultShouldRevalidate: ue};
        ns(D, be) && (ee = Dl(r, l, X, ge, D, h, a, be));
      }
      ee && ie.push({key: V, routeId: N.routeId, path: N.path, matches: ee, match: D, request: X, controller: K});
    }),
    {dsMatches: ce, revalidatingFetchers: ie}
  );
}
function sm(t) {
  return t.loader != null || (t.middleware != null && t.middleware.length > 0);
}
function Mh(t, a, r) {
  if (t.lazy) return !0;
  if (!sm(t)) return !1;
  let l = a != null && t.id in a,
    s = r != null && r[t.id] !== void 0;
  return !l && s ? !1 : typeof t.loader == 'function' && t.loader.hydrate === !0 ? !0 : !l && !s;
}
function RT(t, a, r) {
  let l = !a || r.route.id !== a.route.id,
    s = !t.hasOwnProperty(r.route.id);
  return l || s;
}
function AT(t, a) {
  let r = t.route.path;
  return t.pathname !== a.pathname || (r != null && r.endsWith('*') && t.params['*'] !== a.params['*']);
}
function ns(t, a) {
  if (t.route.shouldRevalidate) {
    let r = t.route.shouldRevalidate(a);
    if (typeof r == 'boolean') return r;
  }
  return a.defaultShouldRevalidate;
}
function $v(t, a, r, l, s, u) {
  let c;
  if (t) {
    let h = l[t];
    (Ye(h, `No route found to patch children into: routeId = ${t}`), h.children || (h.children = []), (c = h.children));
  } else c = r;
  let d = [],
    m = [];
  if (
    (a.forEach((h) => {
      let y = c.find((g) => nS(h, g));
      y ? m.push({existingRoute: y, newRoute: h}) : d.push(h);
    }),
    d.length > 0)
  ) {
    let h = ls(d, s, [t || '_', 'patch', String((c == null ? void 0 : c.length) || '0')], l);
    c.push(...h);
  }
  if (u && m.length > 0)
    for (let h = 0; h < m.length; h++) {
      let {existingRoute: y, newRoute: g} = m[h],
        S = y,
        [x] = ls([g], s, [], {}, !0);
      Object.assign(S, {
        element: x.element ? x.element : S.element,
        errorElement: x.errorElement ? x.errorElement : S.errorElement,
        hydrateFallbackElement: x.hydrateFallbackElement ? x.hydrateFallbackElement : S.hydrateFallbackElement,
      });
    }
}
function nS(t, a) {
  return 'id' in t && 'id' in a && t.id === a.id
    ? !0
    : t.index === a.index && t.path === a.path && t.caseSensitive === a.caseSensitive
      ? (!t.children || t.children.length === 0) && (!a.children || a.children.length === 0)
        ? !0
        : t.children.every((r, l) => {
            var s;
            return (s = a.children) == null ? void 0 : s.some((u) => nS(r, u));
          })
      : !1;
}
var Fv = new WeakMap(),
  aS = ({key: t, route: a, manifest: r, mapRouteProperties: l}) => {
    let s = r[a.id];
    if ((Ye(s, 'No route found in manifest'), !s.lazy || typeof s.lazy != 'object')) return;
    let u = s.lazy[t];
    if (!u) return;
    let c = Fv.get(s);
    c || ((c = {}), Fv.set(s, c));
    let d = c[t];
    if (d) return d;
    let m = (async () => {
      let h = FC(t),
        g = s[t] !== void 0 && t !== 'hasErrorBoundary';
      if (h)
        (jt(!h, 'Route property ' + t + ' is not a supported lazy route property. This property will be ignored.'),
          (c[t] = Promise.resolve()));
      else if (g) jt(!1, `Route "${s.id}" has a static property "${t}" defined. The lazy property will be ignored.`);
      else {
        let S = await u();
        S != null && (Object.assign(s, {[t]: S}), Object.assign(s, l(s)));
      }
      typeof s.lazy == 'object' &&
        ((s.lazy[t] = void 0), Object.values(s.lazy).every((S) => S === void 0) && (s.lazy = void 0));
    })();
    return ((c[t] = m), m);
  },
  Gv = new WeakMap();
function DT(t, a, r, l, s) {
  let u = r[t.id];
  if ((Ye(u, 'No route found in manifest'), !t.lazy)) return {lazyRoutePromise: void 0, lazyHandlerPromise: void 0};
  if (typeof t.lazy == 'function') {
    let y = Gv.get(u);
    if (y) return {lazyRoutePromise: y, lazyHandlerPromise: y};
    let g = (async () => {
      Ye(typeof t.lazy == 'function', 'No lazy route function found');
      let S = await t.lazy(),
        x = {};
      for (let C in S) {
        let w = S[C];
        if (w === void 0) continue;
        let T = KC(C),
          A = u[C] !== void 0 && C !== 'hasErrorBoundary';
        T
          ? jt(
              !T,
              'Route property ' +
                C +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.',
            )
          : A
            ? jt(
                !A,
                `Route "${u.id}" has a static property "${C}" defined but its lazy function is also returning a value for this property. The lazy route property "${C}" will be ignored.`,
              )
            : (x[C] = w);
      }
      (Object.assign(u, x), Object.assign(u, {...l(u), lazy: void 0}));
    })();
    return (Gv.set(u, g), g.catch(() => {}), {lazyRoutePromise: g, lazyHandlerPromise: g});
  }
  let c = Object.keys(t.lazy),
    d = [],
    m;
  for (let y of c) {
    if (s && s.includes(y)) continue;
    let g = aS({key: y, route: t, manifest: r, mapRouteProperties: l});
    g && (d.push(g), y === a && (m = g));
  }
  let h = d.length > 0 ? Promise.all(d).then(() => {}) : void 0;
  return (h == null || h.catch(() => {}), m == null || m.catch(() => {}), {lazyRoutePromise: h, lazyHandlerPromise: m});
}
async function Kv(t) {
  let a = t.matches.filter((s) => s.shouldLoad),
    r = {};
  return (
    (await Promise.all(a.map((s) => s.resolve()))).forEach((s, u) => {
      r[a[u].route.id] = s;
    }),
    r
  );
}
async function MT(t) {
  return t.matches.some((a) => a.route.middleware) ? rS(t, () => Kv(t)) : Kv(t);
}
function rS(t, a) {
  return NT(
    t,
    a,
    (l) => {
      if ($T(l)) throw l;
      return l;
    },
    PT,
    r,
  );
  function r(l, s, u) {
    if (u) return Promise.resolve(Object.assign(u.value, {[s]: {type: 'error', result: l}}));
    {
      let {matches: c} = t,
        d = Math.min(
          Math.max(
            c.findIndex((h) => h.route.id === s),
            0,
          ),
          Math.max(
            c.findIndex((h) => h.shouldCallHandler()),
            0,
          ),
        ),
        m = Vr(c, c[d].route.id).route.id;
      return Promise.resolve({[m]: {type: 'error', result: l}});
    }
  }
}
async function NT(t, a, r, l, s) {
  let {matches: u, request: c, params: d, context: m, unstable_pattern: h} = t,
    y = u.flatMap((S) => (S.route.middleware ? S.route.middleware.map((x) => [S.route.id, x]) : []));
  return await iS({request: c, params: d, context: m, unstable_pattern: h}, y, a, r, l, s);
}
async function iS(t, a, r, l, s, u, c = 0) {
  let {request: d} = t;
  if (d.signal.aborted) throw d.signal.reason ?? new Error(`Request aborted: ${d.method} ${d.url}`);
  let m = a[c];
  if (!m) return await r();
  let [h, y] = m,
    g,
    S = async () => {
      if (g) throw new Error('You may only call `next()` once per middleware');
      try {
        return ((g = {value: await iS(t, a, r, l, s, u, c + 1)}), g.value);
      } catch (x) {
        return ((g = {value: await u(x, h, g)}), g.value);
      }
    };
  try {
    let x = await y(t, S),
      C = x != null ? l(x) : void 0;
    return s(C) ? C : g ? (C ?? g.value) : ((g = {value: await S()}), g.value);
  } catch (x) {
    return await u(x, h, g);
  }
}
function lS(t, a, r, l, s) {
  let u = aS({key: 'middleware', route: l.route, manifest: a, mapRouteProperties: t}),
    c = DT(l.route, rn(r.method) ? 'action' : 'loader', a, t, s);
  return {middleware: u, route: c.lazyRoutePromise, handler: c.lazyHandlerPromise};
}
function Nh(t, a, r, l, s, u, c, d, m = null, h) {
  let y = !1,
    g = lS(t, a, r, s, u);
  return {
    ...s,
    _lazyPromises: g,
    shouldLoad: d,
    shouldRevalidateArgs: m,
    shouldCallHandler(S) {
      return (
        (y = !0),
        m
          ? typeof h == 'boolean'
            ? ns(s, {...m, defaultShouldRevalidate: h})
            : typeof S == 'boolean'
              ? ns(s, {...m, defaultShouldRevalidate: S})
              : ns(s, m)
          : d
      );
    },
    resolve(S) {
      let {lazy: x, loader: C, middleware: w} = s.route,
        T = y || d || (S && !rn(r.method) && (x || C)),
        R = w && w.length > 0 && !C && !x;
      return T && (rn(r.method) || !R)
        ? LT({
            request: r,
            unstable_pattern: l,
            match: s,
            lazyHandlerPromise: g == null ? void 0 : g.handler,
            lazyRoutePromise: g == null ? void 0 : g.route,
            handlerOverride: S,
            scopedContext: c,
          })
        : Promise.resolve({type: 'data', result: void 0});
    },
  };
}
function Dl(t, a, r, l, s, u, c, d = null) {
  return l.map((m) =>
    m.route.id !== s.route.id
      ? {
          ...m,
          shouldLoad: !1,
          shouldRevalidateArgs: d,
          shouldCallHandler: () => !1,
          _lazyPromises: lS(t, a, r, m, u),
          resolve: () => Promise.resolve({type: 'data', result: void 0}),
        }
      : Nh(t, a, r, vs(l), m, u, c, !0, d),
  );
}
async function _T(t, a, r, l, s, u) {
  r.some((h) => {
    var y;
    return (y = h._lazyPromises) == null ? void 0 : y.middleware;
  }) &&
    (await Promise.all(
      r.map((h) => {
        var y;
        return (y = h._lazyPromises) == null ? void 0 : y.middleware;
      }),
    ));
  let c = {request: a, unstable_pattern: vs(r), params: r[0].params, context: s, matches: r},
    m = await t({
      ...c,
      fetcherKey: l,
      runClientMiddleware: (h) => {
        let y = c;
        return rS(y, () =>
          h({
            ...y,
            fetcherKey: l,
            runClientMiddleware: () => {
              throw new Error('Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler');
            },
          }),
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((h) => {
        var y, g;
        return [(y = h._lazyPromises) == null ? void 0 : y.handler, (g = h._lazyPromises) == null ? void 0 : g.route];
      }),
    );
  } catch {}
  return m;
}
async function LT({
  request: t,
  unstable_pattern: a,
  match: r,
  lazyHandlerPromise: l,
  lazyRoutePromise: s,
  handlerOverride: u,
  scopedContext: c,
}) {
  let d,
    m,
    h = rn(t.method),
    y = h ? 'action' : 'loader',
    g = (S) => {
      let x,
        C = new Promise((R, A) => (x = A));
      ((m = () => x()), t.signal.addEventListener('abort', m));
      let w = (R) =>
          typeof S != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${r.route.id}]`,
                ),
              )
            : S({request: t, unstable_pattern: a, params: r.params, context: c}, ...(R !== void 0 ? [R] : [])),
        T = (async () => {
          try {
            return {type: 'data', result: await (u ? u((A) => w(A)) : w())};
          } catch (R) {
            return {type: 'error', result: R};
          }
        })();
      return Promise.race([T, C]);
    };
  try {
    let S = h ? r.route.action : r.route.loader;
    if (l || s)
      if (S) {
        let x,
          [C] = await Promise.all([
            g(S).catch((w) => {
              x = w;
            }),
            l,
            s,
          ]);
        if (x !== void 0) throw x;
        d = C;
      } else {
        await l;
        let x = h ? r.route.action : r.route.loader;
        if (x) [d] = await Promise.all([g(x), s]);
        else if (y === 'action') {
          let C = new URL(t.url),
            w = C.pathname + C.search;
          throw Zn(405, {method: t.method, pathname: w, routeId: r.route.id});
        } else return {type: 'data', result: void 0};
      }
    else if (S) d = await g(S);
    else {
      let x = new URL(t.url),
        C = x.pathname + x.search;
      throw Zn(404, {pathname: C});
    }
  } catch (S) {
    return {type: 'error', result: S};
  } finally {
    m && t.signal.removeEventListener('abort', m);
  }
  return d;
}
async function jT(t) {
  let a = t.headers.get('Content-Type');
  return a && /\bapplication\/json\b/.test(a) ? (t.body == null ? null : t.json()) : t.text();
}
async function zT(t) {
  var l, s, u, c, d;
  let {result: a, type: r} = t;
  if (um(a)) {
    let m;
    try {
      m = await jT(a);
    } catch (h) {
      return {type: 'error', error: h};
    }
    return r === 'error'
      ? {type: 'error', error: new ys(a.status, a.statusText, m), statusCode: a.status, headers: a.headers}
      : {type: 'data', data: m, statusCode: a.status, headers: a.headers};
  }
  return r === 'error'
    ? Wv(a)
      ? a.data instanceof Error
        ? {
            type: 'error',
            error: a.data,
            statusCode: (l = a.init) == null ? void 0 : l.status,
            headers: (s = a.init) != null && s.headers ? new Headers(a.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: kT(a),
            statusCode: os(a) ? a.status : void 0,
            headers: (u = a.init) != null && u.headers ? new Headers(a.init.headers) : void 0,
          }
      : {type: 'error', error: a, statusCode: os(a) ? a.status : void 0}
    : Wv(a)
      ? {
          type: 'data',
          data: a.data,
          statusCode: (c = a.init) == null ? void 0 : c.status,
          headers: (d = a.init) != null && d.headers ? new Headers(a.init.headers) : void 0,
        }
      : {type: 'data', data: a};
}
function UT(t, a, r, l, s) {
  let u = t.headers.get('Location');
  if ((Ye(u, 'Redirects returned/thrown from loaders/actions must have a Location header'), !om(u))) {
    let c = l.slice(0, l.findIndex((d) => d.route.id === r) + 1);
    ((u = Dh(new URL(a.url), c, s, u)), t.headers.set('Location', u));
  }
  return t;
}
function Xv(t, a, r, l) {
  let s = [
    'about:',
    'blob:',
    'chrome:',
    'chrome-untrusted:',
    'content:',
    'data:',
    'devtools:',
    'file:',
    'filesystem:',
    'javascript:',
  ];
  if (om(t)) {
    let u = t,
      c = u.startsWith('//') ? new URL(a.protocol + u) : new URL(u);
    if (s.includes(c.protocol)) throw new Error('Invalid redirect location');
    let d = Jn(c.pathname, r) != null;
    if (c.origin === a.origin && d) return c.pathname + c.search + c.hash;
  }
  try {
    let u = l.createURL(t);
    if (s.includes(u.protocol)) throw new Error('Invalid redirect location');
  } catch {}
  return t;
}
function Rl(t, a, r, l) {
  let s = t.createURL(oS(a)).toString(),
    u = {signal: r};
  if (l && rn(l.formMethod)) {
    let {formMethod: c, formEncType: d} = l;
    ((u.method = c.toUpperCase()),
      d === 'application/json'
        ? ((u.headers = new Headers({'Content-Type': d})), (u.body = JSON.stringify(l.json)))
        : d === 'text/plain'
          ? (u.body = l.text)
          : d === 'application/x-www-form-urlencoded' && l.formData
            ? (u.body = _h(l.formData))
            : (u.body = l.formData));
  }
  return new Request(s, u);
}
function _h(t) {
  let a = new URLSearchParams();
  for (let [r, l] of t.entries()) a.append(r, typeof l == 'string' ? l : l.name);
  return a;
}
function Qv(t) {
  let a = new FormData();
  for (let [r, l] of t.entries()) a.append(r, l);
  return a;
}
function HT(t, a, r, l = !1, s = !1) {
  let u = {},
    c = null,
    d,
    m = !1,
    h = {},
    y = r && _n(r[1]) ? r[1].error : void 0;
  return (
    t.forEach((g) => {
      if (!(g.route.id in a)) return;
      let S = g.route.id,
        x = a[S];
      if ((Ye(!Ci(x), 'Cannot handle redirect results in processLoaderData'), _n(x))) {
        let C = x.error;
        if ((y !== void 0 && ((C = y), (y = void 0)), (c = c || {}), s)) c[S] = C;
        else {
          let w = Vr(t, S);
          c[w.route.id] == null && (c[w.route.id] = C);
        }
        (l || (u[S] = tS), m || ((m = !0), (d = os(x.error) ? x.error.status : 500)), x.headers && (h[S] = x.headers));
      } else
        ((u[S] = x.data),
          x.statusCode && x.statusCode !== 200 && !m && (d = x.statusCode),
          x.headers && (h[S] = x.headers));
    }),
    y !== void 0 && r && ((c = {[r[0]]: y}), r[2] && (u[r[2]] = void 0)),
    {loaderData: u, errors: c, statusCode: d || 200, loaderHeaders: h}
  );
}
function Iv(t, a, r, l, s, u) {
  let {loaderData: c, errors: d} = HT(a, r, l);
  return (
    s
      .filter((m) => !m.matches || m.matches.some((h) => h.shouldLoad))
      .forEach((m) => {
        let {key: h, match: y, controller: g} = m;
        if (g && g.signal.aborted) return;
        let S = u[h];
        if ((Ye(S, 'Did not find corresponding fetcher result'), _n(S))) {
          let x = Vr(t.matches, y == null ? void 0 : y.route.id);
          ((d && d[x.route.id]) || (d = {...d, [x.route.id]: S.error}), t.fetchers.delete(h));
        } else if (Ci(S)) Ye(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let x = ir(S.data);
          t.fetchers.set(h, x);
        }
      }),
    {loaderData: c, errors: d}
  );
}
function Zv(t, a, r, l) {
  let s = Object.entries(a)
    .filter(([, u]) => u !== tS)
    .reduce((u, [c, d]) => ((u[c] = d), u), {});
  for (let u of r) {
    let c = u.route.id;
    if ((!a.hasOwnProperty(c) && t.hasOwnProperty(c) && u.route.loader && (s[c] = t[c]), l && l.hasOwnProperty(c)))
      break;
  }
  return s;
}
function Jv(t) {
  return t ? (_n(t[1]) ? {actionData: {}} : {actionData: {[t[0]]: t[1].data}}) : {};
}
function Vr(t, a) {
  return (
    (a ? t.slice(0, t.findIndex((l) => l.route.id === a) + 1) : [...t])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || t[0]
  );
}
function Uu(t) {
  let a = t.length === 1 ? t[0] : t.find((r) => r.index || !r.path || r.path === '/') || {id: '__shim-error-route__'};
  return {matches: [{params: {}, pathname: '', pathnameBase: '', route: a}], route: a};
}
function Zn(t, {pathname: a, routeId: r, method: l, type: s, message: u} = {}) {
  let c = 'Unknown Server Error',
    d = 'Unknown @remix-run/router error';
  return (
    t === 400
      ? ((c = 'Bad Request'),
        l && a && r
          ? (d = `You made a ${l} request to "${a}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : s === 'invalid-body' && (d = 'Unable to encode submission body'))
      : t === 403
        ? ((c = 'Forbidden'), (d = `Route "${r}" does not match URL "${a}"`))
        : t === 404
          ? ((c = 'Not Found'), (d = `No route matches URL "${a}"`))
          : t === 405 &&
            ((c = 'Method Not Allowed'),
            l && a && r
              ? (d = `You made a ${l.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : l && (d = `Invalid request method "${l.toUpperCase()}"`)),
    new ys(t || 500, c, new Error(d), !0)
  );
}
function Hu(t) {
  let a = Object.entries(t);
  for (let r = a.length - 1; r >= 0; r--) {
    let [l, s] = a[r];
    if (Ci(s)) return {key: l, result: s};
  }
}
function oS(t) {
  let a = typeof t == 'string' ? Jr(t) : t;
  return Na({...a, hash: ''});
}
function BT(t, a) {
  return t.pathname !== a.pathname || t.search !== a.search
    ? !1
    : t.hash === ''
      ? a.hash !== ''
      : t.hash === a.hash
        ? !0
        : a.hash !== '';
}
function kT(t) {
  var a, r;
  return new ys(
    ((a = t.init) == null ? void 0 : a.status) ?? 500,
    ((r = t.init) == null ? void 0 : r.statusText) ?? 'Internal Server Error',
    t.data,
  );
}
function PT(t) {
  return t != null && typeof t == 'object' && Object.entries(t).every(([a, r]) => typeof a == 'string' && VT(r));
}
function VT(t) {
  return t != null && typeof t == 'object' && 'type' in t && 'result' in t && (t.type === 'data' || t.type === 'error');
}
function qT(t) {
  return um(t.result) && W0.has(t.result.status);
}
function _n(t) {
  return t.type === 'error';
}
function Ci(t) {
  return (t && t.type) === 'redirect';
}
function Wv(t) {
  return (
    typeof t == 'object' && t != null && 'type' in t && 'data' in t && 'init' in t && t.type === 'DataWithResponseInit'
  );
}
function um(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.headers == 'object' &&
    typeof t.body < 'u'
  );
}
function YT(t) {
  return W0.has(t);
}
function $T(t) {
  return um(t) && YT(t.status) && t.headers.has('Location');
}
function FT(t) {
  return xT.has(t.toUpperCase());
}
function rn(t) {
  return bT.has(t.toUpperCase());
}
function cm(t) {
  return new URLSearchParams(t).getAll('index').some((a) => a === '');
}
function Ju(t, a) {
  let r = typeof a == 'string' ? Jr(a).search : a.search;
  if (t[t.length - 1].route.index && cm(r || '')) return t[t.length - 1];
  let l = X0(t);
  return l[l.length - 1];
}
function eb(t) {
  let {formMethod: a, formAction: r, formEncType: l, text: s, formData: u, json: c} = t;
  if (!(!a || !r || !l)) {
    if (s != null) return {formMethod: a, formAction: r, formEncType: l, formData: void 0, json: void 0, text: s};
    if (u != null) return {formMethod: a, formAction: r, formEncType: l, formData: u, json: void 0, text: void 0};
    if (c !== void 0) return {formMethod: a, formAction: r, formEncType: l, formData: void 0, json: c, text: void 0};
  }
}
function nh(t, a) {
  return a
    ? {
        state: 'loading',
        location: t,
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
      }
    : {
        state: 'loading',
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function GT(t, a) {
  return {
    state: 'submitting',
    location: t,
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
  };
}
function Ko(t, a) {
  return t
    ? {
        state: 'loading',
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: a,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: a,
      };
}
function KT(t, a) {
  return {
    state: 'submitting',
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: a ? a.data : void 0,
  };
}
function ir(t) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
  };
}
function XT(t, a) {
  try {
    let r = t.sessionStorage.getItem(eS);
    if (r) {
      let l = JSON.parse(r);
      for (let [s, u] of Object.entries(l || {})) u && Array.isArray(u) && a.set(s, new Set(u || []));
    }
  } catch {}
}
function QT(t, a) {
  if (a.size > 0) {
    let r = {};
    for (let [l, s] of a) r[l] = [...s];
    try {
      t.sessionStorage.setItem(eS, JSON.stringify(r));
    } catch (l) {
      jt(!1, `Failed to save applied view transitions in sessionStorage (${l}).`);
    }
  }
}
function tb() {
  let t,
    a,
    r = new Promise((l, s) => {
      ((t = async (u) => {
        l(u);
        try {
          await r;
        } catch {}
      }),
        (a = async (u) => {
          s(u);
          try {
            await r;
          } catch {}
        }));
    });
  return {promise: r, resolve: t, reject: a};
}
var ki = b.createContext(null);
ki.displayName = 'DataRouter';
var bs = b.createContext(null);
bs.displayName = 'DataRouterState';
var sS = b.createContext(!1);
function IT() {
  return b.useContext(sS);
}
var fm = b.createContext({isTransitioning: !1});
fm.displayName = 'ViewTransition';
var uS = b.createContext(new Map());
uS.displayName = 'Fetchers';
var ZT = b.createContext(null);
ZT.displayName = 'Await';
var zn = b.createContext(null);
zn.displayName = 'Navigation';
var Ec = b.createContext(null);
Ec.displayName = 'Location';
var Wn = b.createContext({outlet: null, matches: [], isDataRoute: !1});
Wn.displayName = 'Route';
var dm = b.createContext(null);
dm.displayName = 'RouteError';
var cS = 'REACT_ROUTER_ERROR',
  JT = 'REDIRECT',
  WT = 'ROUTE_ERROR_RESPONSE';
function eO(t) {
  if (t.startsWith(`${cS}:${JT}:{`))
    try {
      let a = JSON.parse(t.slice(28));
      if (
        typeof a == 'object' &&
        a &&
        typeof a.status == 'number' &&
        typeof a.statusText == 'string' &&
        typeof a.location == 'string' &&
        typeof a.reloadDocument == 'boolean' &&
        typeof a.replace == 'boolean'
      )
        return a;
    } catch {}
}
function tO(t) {
  if (t.startsWith(`${cS}:${WT}:{`))
    try {
      let a = JSON.parse(t.slice(40));
      if (typeof a == 'object' && a && typeof a.status == 'number' && typeof a.statusText == 'string')
        return new ys(a.status, a.statusText, a.data);
    } catch {}
}
function nO(t, {relative: a} = {}) {
  Ye(Gl(), 'useHref() may be used only in the context of a <Router> component.');
  let {basename: r, navigator: l} = b.useContext(zn),
    {hash: s, pathname: u, search: c} = xs(t, {relative: a}),
    d = u;
  return (r !== '/' && (d = u === '/' ? r : Da([r, u])), l.createHref({pathname: d, search: c, hash: s}));
}
function Gl() {
  return b.useContext(Ec) != null;
}
function cr() {
  return (
    Ye(Gl(), 'useLocation() may be used only in the context of a <Router> component.'),
    b.useContext(Ec).location
  );
}
var fS = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function dS(t) {
  b.useContext(zn).static || b.useLayoutEffect(t);
}
function Ss() {
  let {isDataRoute: t} = b.useContext(Wn);
  return t ? gO() : aO();
}
function aO() {
  Ye(Gl(), 'useNavigate() may be used only in the context of a <Router> component.');
  let t = b.useContext(ki),
    {basename: a, navigator: r} = b.useContext(zn),
    {matches: l} = b.useContext(Wn),
    {pathname: s} = cr(),
    u = JSON.stringify(xc(l)),
    c = b.useRef(!1);
  return (
    dS(() => {
      c.current = !0;
    }),
    b.useCallback(
      (m, h = {}) => {
        if ((jt(c.current, fS), !c.current)) return;
        if (typeof m == 'number') {
          r.go(m);
          return;
        }
        let y = wc(m, JSON.parse(u), s, h.relative === 'path');
        (t == null && a !== '/' && (y.pathname = y.pathname === '/' ? a : Da([a, y.pathname])),
          (h.replace ? r.replace : r.push)(y, h.state, h));
      },
      [a, r, u, s, t],
    )
  );
}
var rO = b.createContext(null);
function iO(t) {
  let a = b.useContext(Wn).outlet;
  return b.useMemo(() => a && b.createElement(rO.Provider, {value: t}, a), [a, t]);
}
function hm() {
  let {matches: t} = b.useContext(Wn),
    a = t[t.length - 1];
  return a ? a.params : {};
}
function xs(t, {relative: a} = {}) {
  let {matches: r} = b.useContext(Wn),
    {pathname: l} = cr(),
    s = JSON.stringify(xc(r));
  return b.useMemo(() => wc(t, JSON.parse(s), l, a === 'path'), [t, s, l, a]);
}
function lO(t, a, r, l, s) {
  Ye(Gl(), 'useRoutes() may be used only in the context of a <Router> component.');
  let {navigator: u} = b.useContext(zn),
    {matches: c} = b.useContext(Wn),
    d = c[c.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : '/',
    y = d ? d.pathnameBase : '/',
    g = d && d.route;
  {
    let A = (g && g.path) || '';
    pS(
      h,
      !g || A.endsWith('*') || A.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A === '/' ? '*' : `${A}/*`}">.`,
    );
  }
  let S = cr(),
    x;
  x = S;
  let C = x.pathname || '/',
    w = C;
  if (y !== '/') {
    let A = y.replace(/^\//, '').split('/');
    w = '/' + C.replace(/^\//, '').split('/').slice(A.length).join('/');
  }
  let T = Pr(t, {pathname: w});
  return (
    jt(g || T != null, `No routes matched location "${x.pathname}${x.search}${x.hash}" `),
    jt(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    fO(
      T &&
        T.map((A) =>
          Object.assign({}, A, {
            params: Object.assign({}, m, A.params),
            pathname: Da([
              y,
              u.encodeLocation
                ? u.encodeLocation(A.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
                : A.pathname,
            ]),
            pathnameBase:
              A.pathnameBase === '/'
                ? y
                : Da([
                    y,
                    u.encodeLocation
                      ? u.encodeLocation(A.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
                      : A.pathnameBase,
                  ]),
          }),
        ),
      c,
      r,
      l,
      s,
    )
  );
}
function oO() {
  let t = mS(),
    a = os(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    l = 'rgba(200,200,200, 0.5)',
    s = {padding: '0.5rem', backgroundColor: l},
    u = {padding: '2px 4px', backgroundColor: l},
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (c = b.createElement(
      b.Fragment,
      null,
      b.createElement('p', null, '💿 Hey developer 👋'),
      b.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        b.createElement('code', {style: u}, 'ErrorBoundary'),
        ' or',
        ' ',
        b.createElement('code', {style: u}, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    b.createElement(
      b.Fragment,
      null,
      b.createElement('h2', null, 'Unexpected Application Error!'),
      b.createElement('h3', {style: {fontStyle: 'italic'}}, a),
      r ? b.createElement('pre', {style: s}, r) : null,
      c,
    )
  );
}
var sO = b.createElement(oO, null),
  hS = class extends b.Component {
    constructor(t) {
      (super(t), (this.state = {location: t.location, revalidation: t.revalidation, error: t.error}));
    }
    static getDerivedStateFromError(t) {
      return {error: t};
    }
    static getDerivedStateFromProps(t, a) {
      return a.location !== t.location || (a.revalidation !== 'idle' && t.revalidation === 'idle')
        ? {error: t.error, location: t.location, revalidation: t.revalidation}
        : {
            error: t.error !== void 0 ? t.error : a.error,
            location: a.location,
            revalidation: t.revalidation || a.revalidation,
          };
    }
    componentDidCatch(t, a) {
      this.props.onError
        ? this.props.onError(t, a)
        : console.error('React Router caught the following error during render', t);
    }
    render() {
      let t = this.state.error;
      if (this.context && typeof t == 'object' && t && 'digest' in t && typeof t.digest == 'string') {
        const r = tO(t.digest);
        r && (t = r);
      }
      let a =
        t !== void 0
          ? b.createElement(
              Wn.Provider,
              {value: this.props.routeContext},
              b.createElement(dm.Provider, {value: t, children: this.props.component}),
            )
          : this.props.children;
      return this.context ? b.createElement(uO, {error: t}, a) : a;
    }
  };
hS.contextType = sS;
var ah = new WeakMap();
function uO({children: t, error: a}) {
  let {basename: r} = b.useContext(zn);
  if (typeof a == 'object' && a && 'digest' in a && typeof a.digest == 'string') {
    let l = eO(a.digest);
    if (l) {
      let s = ah.get(a);
      if (s) throw s;
      let u = I0(l.location, r);
      if (Q0 && !ah.get(a))
        if (u.isExternal || l.reloadDocument) window.location.href = u.absoluteURL || u.to;
        else {
          const c = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(u.to, {replace: l.replace}));
          throw (ah.set(a, c), c);
        }
      return b.createElement('meta', {httpEquiv: 'refresh', content: `0;url=${u.absoluteURL || u.to}`});
    }
  }
  return t;
}
function cO({routeContext: t, match: a, children: r}) {
  let l = b.useContext(ki);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = a.route.id),
    b.createElement(Wn.Provider, {value: t}, r)
  );
}
function fO(t, a = [], r = null, l = null, s = null) {
  if (t == null) {
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (a.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
    else return null;
  }
  let u = t,
    c = r == null ? void 0 : r.errors;
  if (c != null) {
    let y = u.findIndex((g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0);
    (Ye(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(',')}`),
      (u = u.slice(0, Math.min(u.length, y + 1))));
  }
  let d = !1,
    m = -1;
  if (r)
    for (let y = 0; y < u.length; y++) {
      let g = u[y];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = y), g.route.id)) {
        let {loaderData: S, errors: x} = r,
          C = g.route.loader && !S.hasOwnProperty(g.route.id) && (!x || x[g.route.id] === void 0);
        if (g.route.lazy || C) {
          ((d = !0), m >= 0 ? (u = u.slice(0, m + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  let h =
    r && l
      ? (y, g) => {
          var S, x;
          l(y, {
            location: r.location,
            params: ((x = (S = r.matches) == null ? void 0 : S[0]) == null ? void 0 : x.params) ?? {},
            unstable_pattern: vs(r.matches),
            errorInfo: g,
          });
        }
      : void 0;
  return u.reduceRight((y, g, S) => {
    let x,
      C = !1,
      w = null,
      T = null;
    r &&
      ((x = c && g.route.id ? c[g.route.id] : void 0),
      (w = g.route.errorElement || sO),
      d &&
        (m < 0 && S === 0
          ? (pS('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (C = !0),
            (T = null))
          : m === S && ((C = !0), (T = g.route.hydrateFallbackElement || null))));
    let R = a.concat(u.slice(0, S + 1)),
      A = () => {
        let _;
        return (
          x
            ? (_ = w)
            : C
              ? (_ = T)
              : g.route.Component
                ? (_ = b.createElement(g.route.Component, null))
                : g.route.element
                  ? (_ = g.route.element)
                  : (_ = y),
          b.createElement(cO, {match: g, routeContext: {outlet: y, matches: R, isDataRoute: r != null}, children: _})
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || S === 0)
      ? b.createElement(hS, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: x,
          children: A(),
          routeContext: {outlet: null, matches: R, isDataRoute: !0},
          onError: h,
        })
      : A();
  }, null);
}
function mm(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dO(t) {
  let a = b.useContext(ki);
  return (Ye(a, mm(t)), a);
}
function hO(t) {
  let a = b.useContext(bs);
  return (Ye(a, mm(t)), a);
}
function mO(t) {
  let a = b.useContext(Wn);
  return (Ye(a, mm(t)), a);
}
function pm(t) {
  let a = mO(t),
    r = a.matches[a.matches.length - 1];
  return (Ye(r.route.id, `${t} can only be used on routes that contain a unique "id"`), r.route.id);
}
function pO() {
  return pm('useRouteId');
}
function mS() {
  var l;
  let t = b.useContext(dm),
    a = hO('useRouteError'),
    r = pm('useRouteError');
  return t !== void 0 ? t : (l = a.errors) == null ? void 0 : l[r];
}
function gO() {
  let {router: t} = dO('useNavigate'),
    a = pm('useNavigate'),
    r = b.useRef(!1);
  return (
    dS(() => {
      r.current = !0;
    }),
    b.useCallback(
      async (s, u = {}) => {
        (jt(r.current, fS),
          r.current && (typeof s == 'number' ? await t.navigate(s) : await t.navigate(s, {fromRouteId: a, ...u})));
      },
      [t, a],
    )
  );
}
var nb = {};
function pS(t, a, r) {
  !a && !nb[t] && ((nb[t] = !0), jt(!1, r));
}
var ab = {};
function rb(t, a) {
  !t && !ab[a] && ((ab[a] = !0), console.warn(a));
}
var yO = 'useOptimistic',
  ib = Sc[yO],
  vO = () => {};
function bO(t) {
  return ib ? ib(t) : [t, vO];
}
function SO(t) {
  let a = {hasErrorBoundary: t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null};
  return (
    t.Component &&
      (t.element &&
        jt(!1, 'You should not include both `Component` and `element` on your route - `Component` will be used.'),
      Object.assign(a, {element: b.createElement(t.Component), Component: void 0})),
    t.HydrateFallback &&
      (t.hydrateFallbackElement &&
        jt(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
        ),
      Object.assign(a, {hydrateFallbackElement: b.createElement(t.HydrateFallback), HydrateFallback: void 0})),
    t.ErrorBoundary &&
      (t.errorElement &&
        jt(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
        ),
      Object.assign(a, {errorElement: b.createElement(t.ErrorBoundary), ErrorBoundary: void 0})),
    a
  );
}
var xO = ['HydrateFallback', 'hydrateFallbackElement'],
  wO = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((t, a) => {
          ((this.resolve = (r) => {
            this.status === 'pending' && ((this.status = 'resolved'), t(r));
          }),
            (this.reject = (r) => {
              this.status === 'pending' && ((this.status = 'rejected'), a(r));
            }));
        })));
    }
  };
function EO({router: t, flushSync: a, onError: r, unstable_useTransitions: l}) {
  l = IT() || l;
  let [u, c] = b.useState(t.state),
    [d, m] = bO(u),
    [h, y] = b.useState(),
    [g, S] = b.useState({isTransitioning: !1}),
    [x, C] = b.useState(),
    [w, T] = b.useState(),
    [R, A] = b.useState(),
    _ = b.useRef(new Map()),
    z = b.useCallback(
      (P, {deletedFetchers: Z, newErrors: se, flushSync: pe, viewTransitionOpts: le}) => {
        (se &&
          r &&
          Object.values(se).forEach((ie) => {
            var he;
            return r(ie, {
              location: P.location,
              params: ((he = P.matches[0]) == null ? void 0 : he.params) ?? {},
              unstable_pattern: vs(P.matches),
            });
          }),
          P.fetchers.forEach((ie, he) => {
            ie.data !== void 0 && _.current.set(he, ie.data);
          }),
          Z.forEach((ie) => _.current.delete(ie)),
          rb(
            pe === !1 || a != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let ce =
          t.window != null && t.window.document != null && typeof t.window.document.startViewTransition == 'function';
        if (
          (rb(
            le == null || ce,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
          ),
          !le || !ce)
        ) {
          a && pe
            ? a(() => c(P))
            : l === !1
              ? c(P)
              : b.startTransition(() => {
                  (l === !0 && m((ie) => lb(ie, P)), c(P));
                });
          return;
        }
        if (a && pe) {
          a(() => {
            (w && (x == null || x.resolve(), w.skipTransition()),
              S({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: le.currentLocation,
                nextLocation: le.nextLocation,
              }));
          });
          let ie = t.window.document.startViewTransition(() => {
            a(() => c(P));
          });
          (ie.finished.finally(() => {
            a(() => {
              (C(void 0), T(void 0), y(void 0), S({isTransitioning: !1}));
            });
          }),
            a(() => T(ie)));
          return;
        }
        w
          ? (x == null || x.resolve(),
            w.skipTransition(),
            A({state: P, currentLocation: le.currentLocation, nextLocation: le.nextLocation}))
          : (y(P),
            S({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: le.currentLocation,
              nextLocation: le.nextLocation,
            }));
      },
      [t.window, a, w, x, l, m, r],
    );
  (b.useLayoutEffect(() => t.subscribe(z), [t, z]),
    b.useEffect(() => {
      g.isTransitioning && !g.flushSync && C(new wO());
    }, [g]),
    b.useEffect(() => {
      if (x && h && t.window) {
        let P = h,
          Z = x.promise,
          se = t.window.document.startViewTransition(async () => {
            (l === !1
              ? c(P)
              : b.startTransition(() => {
                  (l === !0 && m((pe) => lb(pe, P)), c(P));
                }),
              await Z);
          });
        (se.finished.finally(() => {
          (C(void 0), T(void 0), y(void 0), S({isTransitioning: !1}));
        }),
          T(se));
      }
    }, [h, x, t.window, l, m]),
    b.useEffect(() => {
      x && h && d.location.key === h.location.key && x.resolve();
    }, [x, w, d.location, h]),
    b.useEffect(() => {
      !g.isTransitioning &&
        R &&
        (y(R.state),
        S({isTransitioning: !0, flushSync: !1, currentLocation: R.currentLocation, nextLocation: R.nextLocation}),
        A(void 0));
    }, [g.isTransitioning, R]));
  let $ = b.useMemo(
      () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: (P) => t.navigate(P),
        push: (P, Z, se) => t.navigate(P, {state: Z, preventScrollReset: se == null ? void 0 : se.preventScrollReset}),
        replace: (P, Z, se) =>
          t.navigate(P, {replace: !0, state: Z, preventScrollReset: se == null ? void 0 : se.preventScrollReset}),
      }),
      [t],
    ),
    I = t.basename || '/',
    O = b.useMemo(() => ({router: t, navigator: $, static: !1, basename: I, onError: r}), [t, $, I, r]);
  return b.createElement(
    b.Fragment,
    null,
    b.createElement(
      ki.Provider,
      {value: O},
      b.createElement(
        bs.Provider,
        {value: d},
        b.createElement(
          uS.Provider,
          {value: _.current},
          b.createElement(
            fm.Provider,
            {value: g},
            b.createElement(
              AO,
              {
                basename: I,
                location: d.location,
                navigationType: d.historyAction,
                navigator: $,
                unstable_useTransitions: l,
              },
              b.createElement(CO, {routes: t.routes, future: t.future, state: d, onError: r}),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function lb(t, a) {
  return {
    ...t,
    navigation: a.navigation.state !== 'idle' ? a.navigation : t.navigation,
    revalidation: a.revalidation !== 'idle' ? a.revalidation : t.revalidation,
    actionData: a.navigation.state !== 'submitting' ? a.actionData : t.actionData,
    fetchers: a.fetchers,
  };
}
var CO = b.memo(TO);
function TO({routes: t, future: a, state: r, onError: l}) {
  return lO(t, void 0, r, l, a);
}
function OO({to: t, replace: a, state: r, relative: l}) {
  Ye(Gl(), '<Navigate> may be used only in the context of a <Router> component.');
  let {static: s} = b.useContext(zn);
  jt(
    !s,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.',
  );
  let {matches: u} = b.useContext(Wn),
    {pathname: c} = cr(),
    d = Ss(),
    m = wc(t, xc(u), c, l === 'path'),
    h = JSON.stringify(m);
  return (
    b.useEffect(() => {
      d(JSON.parse(h), {replace: a, state: r, relative: l});
    }, [d, h, l, a, r]),
    null
  );
}
function RO(t) {
  return iO(t.context);
}
function AO({
  basename: t = '/',
  children: a = null,
  location: r,
  navigationType: l = 'POP',
  navigator: s,
  static: u = !1,
  unstable_useTransitions: c,
}) {
  Ye(!Gl(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
  let d = t.replace(/^\/*/, '/'),
    m = b.useMemo(() => ({basename: d, navigator: s, static: u, unstable_useTransitions: c, future: {}}), [d, s, u, c]);
  typeof r == 'string' && (r = Jr(r));
  let {pathname: h = '/', search: y = '', hash: g = '', state: S = null, key: x = 'default'} = r,
    C = b.useMemo(() => {
      let w = Jn(h, d);
      return w == null ? null : {location: {pathname: w, search: y, hash: g, state: S, key: x}, navigationType: l};
    }, [d, h, y, g, S, x, l]);
  return (
    jt(
      C != null,
      `<Router basename="${d}"> is not able to match the URL "${h}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    C == null ? null : b.createElement(zn.Provider, {value: m}, b.createElement(Ec.Provider, {children: a, value: C}))
  );
}
var Wu = 'get',
  ec = 'application/x-www-form-urlencoded';
function Cc(t) {
  return typeof HTMLElement < 'u' && t instanceof HTMLElement;
}
function DO(t) {
  return Cc(t) && t.tagName.toLowerCase() === 'button';
}
function MO(t) {
  return Cc(t) && t.tagName.toLowerCase() === 'form';
}
function NO(t) {
  return Cc(t) && t.tagName.toLowerCase() === 'input';
}
function _O(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function LO(t, a) {
  return t.button === 0 && (!a || a === '_self') && !_O(t);
}
var Bu = null;
function jO() {
  if (Bu === null)
    try {
      (new FormData(document.createElement('form'), 0), (Bu = !1));
    } catch {
      Bu = !0;
    }
  return Bu;
}
var zO = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function rh(t) {
  return t != null && !zO.has(t)
    ? (jt(!1, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`), null)
    : t;
}
function UO(t, a) {
  let r, l, s, u, c;
  if (MO(t)) {
    let d = t.getAttribute('action');
    ((l = d ? Jn(d, a) : null),
      (r = t.getAttribute('method') || Wu),
      (s = rh(t.getAttribute('enctype')) || ec),
      (u = new FormData(t)));
  } else if (DO(t) || (NO(t) && (t.type === 'submit' || t.type === 'image'))) {
    let d = t.form;
    if (d == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let m = t.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((l = m ? Jn(m, a) : null),
      (r = t.getAttribute('formmethod') || d.getAttribute('method') || Wu),
      (s = rh(t.getAttribute('formenctype')) || rh(d.getAttribute('enctype')) || ec),
      (u = new FormData(d, t)),
      !jO())
    ) {
      let {name: h, type: y, value: g} = t;
      if (y === 'image') {
        let S = h ? `${h}.` : '';
        (u.append(`${S}x`, '0'), u.append(`${S}y`, '0'));
      } else h && u.append(h, g);
    }
  } else {
    if (Cc(t)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    ((r = Wu), (l = null), (s = ec), (c = t));
  }
  return (
    u && s === 'text/plain' && ((c = u), (u = void 0)),
    {action: l, method: r.toLowerCase(), encType: s, formData: u, body: c}
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function gm(t, a) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(a);
}
function HO(t, a, r, l) {
  let s = typeof t == 'string' ? new URL(t, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : t;
  return (
    r
      ? s.pathname.endsWith('/')
        ? (s.pathname = `${s.pathname}_.${l}`)
        : (s.pathname = `${s.pathname}.${l}`)
      : s.pathname === '/'
        ? (s.pathname = `_root.${l}`)
        : a && Jn(s.pathname, a) === '/'
          ? (s.pathname = `${a.replace(/\/$/, '')}/_root.${l}`)
          : (s.pathname = `${s.pathname.replace(/\/$/, '')}.${l}`),
    s
  );
}
async function BO(t, a) {
  if (t.id in a) return a[t.id];
  try {
    let r = await import(t.module);
    return ((a[t.id] = r), r);
  } catch (r) {
    return (
      console.error(`Error loading route module \`${t.module}\`, reloading page...`),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function kO(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === 'preload' && typeof t.imageSrcSet == 'string' && typeof t.imageSizes == 'string'
      : typeof t.rel == 'string' && typeof t.href == 'string';
}
async function PO(t, a, r) {
  let l = await Promise.all(
    t.map(async (s) => {
      let u = a.routes[s.route.id];
      if (u) {
        let c = await BO(u, r);
        return c.links ? c.links() : [];
      }
      return [];
    }),
  );
  return $O(
    l
      .flat(1)
      .filter(kO)
      .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
      .map((s) => (s.rel === 'stylesheet' ? {...s, rel: 'prefetch', as: 'style'} : {...s, rel: 'prefetch'})),
  );
}
function ob(t, a, r, l, s, u) {
  let c = (m, h) => (r[h] ? m.route.id !== r[h].route.id : !0),
    d = (m, h) => {
      var y;
      return (
        r[h].pathname !== m.pathname ||
        (((y = r[h].route.path) == null ? void 0 : y.endsWith('*')) && r[h].params['*'] !== m.params['*'])
      );
    };
  return u === 'assets'
    ? a.filter((m, h) => c(m, h) || d(m, h))
    : u === 'data'
      ? a.filter((m, h) => {
          var g;
          let y = l.routes[m.route.id];
          if (!y || !y.hasLoader) return !1;
          if (c(m, h) || d(m, h)) return !0;
          if (m.route.shouldRevalidate) {
            let S = m.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: ((g = r[0]) == null ? void 0 : g.params) || {},
              nextUrl: new URL(t, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function VO(t, a, {includeHydrateFallback: r} = {}) {
  return qO(
    t
      .map((l) => {
        let s = a.routes[l.route.id];
        if (!s) return [];
        let u = [s.module];
        return (
          s.clientActionModule && (u = u.concat(s.clientActionModule)),
          s.clientLoaderModule && (u = u.concat(s.clientLoaderModule)),
          r && s.hydrateFallbackModule && (u = u.concat(s.hydrateFallbackModule)),
          s.imports && (u = u.concat(s.imports)),
          u
        );
      })
      .flat(1),
  );
}
function qO(t) {
  return [...new Set(t)];
}
function YO(t) {
  let a = {},
    r = Object.keys(t).sort();
  for (let l of r) a[l] = t[l];
  return a;
}
function $O(t, a) {
  let r = new Set();
  return (
    new Set(a),
    t.reduce((l, s) => {
      let u = JSON.stringify(YO(s));
      return (r.has(u) || (r.add(u), l.push({key: u, link: s})), l);
    }, [])
  );
}
function gS() {
  let t = b.useContext(ki);
  return (gm(t, 'You must render this element inside a <DataRouterContext.Provider> element'), t);
}
function FO() {
  let t = b.useContext(bs);
  return (gm(t, 'You must render this element inside a <DataRouterStateContext.Provider> element'), t);
}
var ym = b.createContext(void 0);
ym.displayName = 'FrameworkContext';
function yS() {
  let t = b.useContext(ym);
  return (gm(t, 'You must render this element inside a <HydratedRouter> element'), t);
}
function GO(t, a) {
  let r = b.useContext(ym),
    [l, s] = b.useState(!1),
    [u, c] = b.useState(!1),
    {onFocus: d, onBlur: m, onMouseEnter: h, onMouseLeave: y, onTouchStart: g} = a,
    S = b.useRef(null);
  (b.useEffect(() => {
    if ((t === 'render' && c(!0), t === 'viewport')) {
      let w = (R) => {
          R.forEach((A) => {
            c(A.isIntersecting);
          });
        },
        T = new IntersectionObserver(w, {threshold: 0.5});
      return (
        S.current && T.observe(S.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [t]),
    b.useEffect(() => {
      if (l) {
        let w = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [l]));
  let x = () => {
      s(!0);
    },
    C = () => {
      (s(!1), c(!1));
    };
  return r
    ? t !== 'intent'
      ? [u, S, {}]
      : [
          u,
          S,
          {onFocus: Xo(d, x), onBlur: Xo(m, C), onMouseEnter: Xo(h, x), onMouseLeave: Xo(y, C), onTouchStart: Xo(g, x)},
        ]
    : [!1, S, {}];
}
function Xo(t, a) {
  return (r) => {
    (t && t(r), r.defaultPrevented || a(r));
  };
}
function KO({page: t, ...a}) {
  let {router: r} = gS(),
    l = b.useMemo(() => Pr(r.routes, t, r.basename), [r.routes, t, r.basename]);
  return l ? b.createElement(QO, {page: t, matches: l, ...a}) : null;
}
function XO(t) {
  let {manifest: a, routeModules: r} = yS(),
    [l, s] = b.useState([]);
  return (
    b.useEffect(() => {
      let u = !1;
      return (
        PO(t, a, r).then((c) => {
          u || s(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [t, a, r]),
    l
  );
}
function QO({page: t, matches: a, ...r}) {
  let l = cr(),
    {future: s, manifest: u, routeModules: c} = yS(),
    {basename: d} = gS(),
    {loaderData: m, matches: h} = FO(),
    y = b.useMemo(() => ob(t, a, h, u, l, 'data'), [t, a, h, u, l]),
    g = b.useMemo(() => ob(t, a, h, u, l, 'assets'), [t, a, h, u, l]),
    S = b.useMemo(() => {
      if (t === l.pathname + l.search + l.hash) return [];
      let w = new Set(),
        T = !1;
      if (
        (a.forEach((A) => {
          var z;
          let _ = u.routes[A.route.id];
          !_ ||
            !_.hasLoader ||
            ((!y.some(($) => $.route.id === A.route.id) &&
              A.route.id in m &&
              (z = c[A.route.id]) != null &&
              z.shouldRevalidate) ||
            _.hasClientLoader
              ? (T = !0)
              : w.add(A.route.id));
        }),
        w.size === 0)
      )
        return [];
      let R = HO(t, d, s.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        T &&
          w.size > 0 &&
          R.searchParams.set(
            '_routes',
            a
              .filter((A) => w.has(A.route.id))
              .map((A) => A.route.id)
              .join(','),
          ),
        [R.pathname + R.search]
      );
    }, [d, s.unstable_trailingSlashAwareDataRequests, m, l, u, y, a, t, c]),
    x = b.useMemo(() => VO(g, u), [g, u]),
    C = XO(g);
  return b.createElement(
    b.Fragment,
    null,
    S.map((w) => b.createElement('link', {key: w, rel: 'prefetch', as: 'fetch', href: w, ...r})),
    x.map((w) => b.createElement('link', {key: w, rel: 'modulepreload', href: w, ...r})),
    C.map(({key: w, link: T}) =>
      b.createElement('link', {key: w, nonce: r.nonce, ...T, crossOrigin: T.crossOrigin ?? r.crossOrigin}),
    ),
  );
}
function IO(...t) {
  return (a) => {
    t.forEach((r) => {
      typeof r == 'function' ? r(a) : r != null && (r.current = a);
    });
  };
}
var ZO = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  ZO && (window.__reactRouterVersion = '7.13.0');
} catch {}
function JO(t, a) {
  return TT({
    basename: a == null ? void 0 : a.basename,
    getContext: a == null ? void 0 : a.getContext,
    future: a == null ? void 0 : a.future,
    history: VC({window: a == null ? void 0 : a.window}),
    hydrationData: WO(),
    routes: t,
    mapRouteProperties: SO,
    hydrationRouteProperties: xO,
    dataStrategy: a == null ? void 0 : a.dataStrategy,
    patchRoutesOnNavigation: a == null ? void 0 : a.patchRoutesOnNavigation,
    window: a == null ? void 0 : a.window,
    unstable_instrumentations: a == null ? void 0 : a.unstable_instrumentations,
  }).initialize();
}
function WO() {
  let t = window == null ? void 0 : window.__staticRouterHydrationData;
  return (t && t.errors && (t = {...t, errors: eR(t.errors)}), t);
}
function eR(t) {
  if (!t) return null;
  let a = Object.entries(t),
    r = {};
  for (let [l, s] of a)
    if (s && s.__type === 'RouteErrorResponse') r[l] = new ys(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === 'Error') {
      if (s.__subType) {
        let u = window[s.__subType];
        if (typeof u == 'function')
          try {
            let c = new u(s.message);
            ((c.stack = ''), (r[l] = c));
          } catch {}
      }
      if (r[l] == null) {
        let u = new Error(s.message);
        ((u.stack = ''), (r[l] = u));
      }
    } else r[l] = s;
  return r;
}
var vS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tc = b.forwardRef(function (
    {
      onClick: a,
      discover: r = 'render',
      prefetch: l = 'none',
      relative: s,
      reloadDocument: u,
      replace: c,
      state: d,
      target: m,
      to: h,
      preventScrollReset: y,
      viewTransition: g,
      unstable_defaultShouldRevalidate: S,
      ...x
    },
    C,
  ) {
    let {basename: w, unstable_useTransitions: T} = b.useContext(zn),
      R = typeof h == 'string' && vS.test(h),
      A = I0(h, w);
    h = A.to;
    let _ = nO(h, {relative: s}),
      [z, $, I] = GO(l, x),
      O = rR(h, {
        replace: c,
        state: d,
        target: m,
        preventScrollReset: y,
        relative: s,
        viewTransition: g,
        unstable_defaultShouldRevalidate: S,
        unstable_useTransitions: T,
      });
    function P(se) {
      (a && a(se), se.defaultPrevented || O(se));
    }
    let Z = b.createElement('a', {
      ...x,
      ...I,
      href: A.absoluteURL || _,
      onClick: A.isExternal || u ? a : P,
      ref: IO(C, $),
      target: m,
      'data-discover': !R && r === 'render' ? 'true' : void 0,
    });
    return z && !R ? b.createElement(b.Fragment, null, Z, b.createElement(KO, {page: _})) : Z;
  });
Tc.displayName = 'Link';
var tR = b.forwardRef(function (
  {
    'aria-current': a = 'page',
    caseSensitive: r = !1,
    className: l = '',
    end: s = !1,
    style: u,
    to: c,
    viewTransition: d,
    children: m,
    ...h
  },
  y,
) {
  let g = xs(c, {relative: h.relative}),
    S = cr(),
    x = b.useContext(bs),
    {navigator: C, basename: w} = b.useContext(zn),
    T = x != null && uR(g) && d === !0,
    R = C.encodeLocation ? C.encodeLocation(g).pathname : g.pathname,
    A = S.pathname,
    _ = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
  (r || ((A = A.toLowerCase()), (_ = _ ? _.toLowerCase() : null), (R = R.toLowerCase())),
    _ && w && (_ = Jn(_, w) || _));
  const z = R !== '/' && R.endsWith('/') ? R.length - 1 : R.length;
  let $ = A === R || (!s && A.startsWith(R) && A.charAt(z) === '/'),
    I = _ != null && (_ === R || (!s && _.startsWith(R) && _.charAt(R.length) === '/')),
    O = {isActive: $, isPending: I, isTransitioning: T},
    P = $ ? a : void 0,
    Z;
  typeof l == 'function'
    ? (Z = l(O))
    : (Z = [l, $ ? 'active' : null, I ? 'pending' : null, T ? 'transitioning' : null].filter(Boolean).join(' '));
  let se = typeof u == 'function' ? u(O) : u;
  return b.createElement(
    Tc,
    {...h, 'aria-current': P, className: Z, ref: y, style: se, to: c, viewTransition: d},
    typeof m == 'function' ? m(O) : m,
  );
});
tR.displayName = 'NavLink';
var nR = b.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: a,
      navigate: r,
      reloadDocument: l,
      replace: s,
      state: u,
      method: c = Wu,
      action: d,
      onSubmit: m,
      relative: h,
      preventScrollReset: y,
      viewTransition: g,
      unstable_defaultShouldRevalidate: S,
      ...x
    },
    C,
  ) => {
    let {unstable_useTransitions: w} = b.useContext(zn),
      T = oR(),
      R = sR(d, {relative: h}),
      A = c.toLowerCase() === 'get' ? 'get' : 'post',
      _ = typeof d == 'string' && vS.test(d),
      z = ($) => {
        if ((m && m($), $.defaultPrevented)) return;
        $.preventDefault();
        let I = $.nativeEvent.submitter,
          O = (I == null ? void 0 : I.getAttribute('formmethod')) || c,
          P = () =>
            T(I || $.currentTarget, {
              fetcherKey: a,
              method: O,
              navigate: r,
              replace: s,
              state: u,
              relative: h,
              preventScrollReset: y,
              viewTransition: g,
              unstable_defaultShouldRevalidate: S,
            });
        w && r !== !1 ? b.startTransition(() => P()) : P();
      };
    return b.createElement('form', {
      ref: C,
      method: A,
      action: R,
      onSubmit: l ? m : z,
      ...x,
      'data-discover': !_ && t === 'render' ? 'true' : void 0,
    });
  },
);
nR.displayName = 'Form';
function aR(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bS(t) {
  let a = b.useContext(ki);
  return (Ye(a, aR(t)), a);
}
function rR(
  t,
  {
    target: a,
    replace: r,
    state: l,
    preventScrollReset: s,
    relative: u,
    viewTransition: c,
    unstable_defaultShouldRevalidate: d,
    unstable_useTransitions: m,
  } = {},
) {
  let h = Ss(),
    y = cr(),
    g = xs(t, {relative: u});
  return b.useCallback(
    (S) => {
      if (LO(S, a)) {
        S.preventDefault();
        let x = r !== void 0 ? r : Na(y) === Na(g),
          C = () =>
            h(t, {
              replace: x,
              state: l,
              preventScrollReset: s,
              relative: u,
              viewTransition: c,
              unstable_defaultShouldRevalidate: d,
            });
        m ? b.startTransition(() => C()) : C();
      }
    },
    [y, h, g, r, l, a, t, s, u, c, d, m],
  );
}
var iR = 0,
  lR = () => `__${String(++iR)}__`;
function oR() {
  let {router: t} = bS('useSubmit'),
    {basename: a} = b.useContext(zn),
    r = pO(),
    l = t.fetch,
    s = t.navigate;
  return b.useCallback(
    async (u, c = {}) => {
      let {action: d, method: m, encType: h, formData: y, body: g} = UO(u, a);
      if (c.navigate === !1) {
        let S = c.fetcherKey || lR();
        await l(S, r, c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: g,
          formMethod: c.method || m,
          formEncType: c.encType || h,
          flushSync: c.flushSync,
        });
      } else
        await s(c.action || d, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: y,
          body: g,
          formMethod: c.method || m,
          formEncType: c.encType || h,
          replace: c.replace,
          state: c.state,
          fromRouteId: r,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [l, s, a, r],
  );
}
function sR(t, {relative: a} = {}) {
  let {basename: r} = b.useContext(zn),
    l = b.useContext(Wn);
  Ye(l, 'useFormAction must be used inside a RouteContext');
  let [s] = l.matches.slice(-1),
    u = {...xs(t || '.', {relative: a})},
    c = cr();
  if (t == null) {
    u.search = c.search;
    let d = new URLSearchParams(u.search),
      m = d.getAll('index');
    if (m.some((y) => y === '')) {
      (d.delete('index'), m.filter((g) => g).forEach((g) => d.append('index', g)));
      let y = d.toString();
      u.search = y ? `?${y}` : '';
    }
  }
  return (
    (!t || t === '.') && s.route.index && (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (u.pathname = u.pathname === '/' ? r : Da([r, u.pathname])),
    Na(u)
  );
}
function uR(t, {relative: a} = {}) {
  let r = b.useContext(fm);
  Ye(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let {basename: l} = bS('useViewTransitionState'),
    s = xs(t, {relative: a});
  if (!r.isTransitioning) return !1;
  let u = Jn(r.currentLocation.pathname, l) || r.currentLocation.pathname,
    c = Jn(r.nextLocation.pathname, l) || r.nextLocation.pathname;
  return ic(s.pathname, c) != null || ic(s.pathname, u) != null;
}
var Kl = q0();
const SS = gs(Kl);
function cR(t) {
  return b.createElement(EO, {flushSync: Kl.flushSync, ...t});
}
const ze = (t) => typeof t == 'string',
  Qo = () => {
    let t, a;
    const r = new Promise((l, s) => {
      ((t = l), (a = s));
    });
    return ((r.resolve = t), (r.reject = a), r);
  },
  sb = (t) => (t == null ? '' : '' + t),
  fR = (t, a, r) => {
    t.forEach((l) => {
      a[l] && (r[l] = a[l]);
    });
  },
  dR = /###/g,
  ub = (t) => (t && t.indexOf('###') > -1 ? t.replace(dR, '.') : t),
  cb = (t) => !t || ze(t),
  as = (t, a, r) => {
    const l = ze(a) ? a.split('.') : a;
    let s = 0;
    for (; s < l.length - 1; ) {
      if (cb(t)) return {};
      const u = ub(l[s]);
      (!t[u] && r && (t[u] = new r()), Object.prototype.hasOwnProperty.call(t, u) ? (t = t[u]) : (t = {}), ++s);
    }
    return cb(t) ? {} : {obj: t, k: ub(l[s])};
  },
  fb = (t, a, r) => {
    const {obj: l, k: s} = as(t, a, Object);
    if (l !== void 0 || a.length === 1) {
      l[s] = r;
      return;
    }
    let u = a[a.length - 1],
      c = a.slice(0, a.length - 1),
      d = as(t, c, Object);
    for (; d.obj === void 0 && c.length; )
      ((u = `${c[c.length - 1]}.${u}`),
        (c = c.slice(0, c.length - 1)),
        (d = as(t, c, Object)),
        d != null && d.obj && typeof d.obj[`${d.k}.${u}`] < 'u' && (d.obj = void 0));
    d.obj[`${d.k}.${u}`] = r;
  },
  hR = (t, a, r, l) => {
    const {obj: s, k: u} = as(t, a, Object);
    ((s[u] = s[u] || []), s[u].push(r));
  },
  lc = (t, a) => {
    const {obj: r, k: l} = as(t, a);
    if (r && Object.prototype.hasOwnProperty.call(r, l)) return r[l];
  },
  mR = (t, a, r) => {
    const l = lc(t, r);
    return l !== void 0 ? l : lc(a, r);
  },
  xS = (t, a, r) => {
    for (const l in a)
      l !== '__proto__' &&
        l !== 'constructor' &&
        (l in t
          ? ze(t[l]) || t[l] instanceof String || ze(a[l]) || a[l] instanceof String
            ? r && (t[l] = a[l])
            : xS(t[l], a[l], r)
          : (t[l] = a[l]));
    return t;
  },
  xl = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var pR = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;'};
const gR = (t) => (ze(t) ? t.replace(/[&<>"'\/]/g, (a) => pR[a]) : t);
class yR {
  constructor(a) {
    ((this.capacity = a), (this.regExpMap = new Map()), (this.regExpQueue = []));
  }
  getRegExp(a) {
    const r = this.regExpMap.get(a);
    if (r !== void 0) return r;
    const l = new RegExp(a);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(a, l),
      this.regExpQueue.push(a),
      l
    );
  }
}
const vR = [' ', ',', '?', '!', ';'],
  bR = new yR(20),
  SR = (t, a, r) => {
    ((a = a || ''), (r = r || ''));
    const l = vR.filter((c) => a.indexOf(c) < 0 && r.indexOf(c) < 0);
    if (l.length === 0) return !0;
    const s = bR.getRegExp(`(${l.map((c) => (c === '?' ? '\\?' : c)).join('|')})`);
    let u = !s.test(t);
    if (!u) {
      const c = t.indexOf(r);
      c > 0 && !s.test(t.substring(0, c)) && (u = !0);
    }
    return u;
  },
  Lh = (t, a, r = '.') => {
    if (!t) return;
    if (t[a]) return Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    const l = a.split(r);
    let s = t;
    for (let u = 0; u < l.length; ) {
      if (!s || typeof s != 'object') return;
      let c,
        d = '';
      for (let m = u; m < l.length; ++m)
        if ((m !== u && (d += r), (d += l[m]), (c = s[d]), c !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof c) > -1 && m < l.length - 1) continue;
          u += m - u + 1;
          break;
        }
      s = c;
    }
    return s;
  },
  ss = (t) => (t == null ? void 0 : t.replace('_', '-')),
  xR = {
    type: 'logger',
    log(t) {
      this.output('log', t);
    },
    warn(t) {
      this.output('warn', t);
    },
    error(t) {
      this.output('error', t);
    },
    output(t, a) {
      var r, l;
      (l = (r = console == null ? void 0 : console[t]) == null ? void 0 : r.apply) == null || l.call(r, console, a);
    },
  };
class oc {
  constructor(a, r = {}) {
    this.init(a, r);
  }
  init(a, r = {}) {
    ((this.prefix = r.prefix || 'i18next:'), (this.logger = a || xR), (this.options = r), (this.debug = r.debug));
  }
  log(...a) {
    return this.forward(a, 'log', '', !0);
  }
  warn(...a) {
    return this.forward(a, 'warn', '', !0);
  }
  error(...a) {
    return this.forward(a, 'error', '');
  }
  deprecate(...a) {
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(a, r, l, s) {
    return s && !this.debug ? null : (ze(a[0]) && (a[0] = `${l}${this.prefix} ${a[0]}`), this.logger[r](a));
  }
  create(a) {
    return new oc(this.logger, {prefix: `${this.prefix}:${a}:`, ...this.options});
  }
  clone(a) {
    return ((a = a || this.options), (a.prefix = a.prefix || this.prefix), new oc(this.logger, a));
  }
}
var Ra = new oc();
class Oc {
  constructor() {
    this.observers = {};
  }
  on(a, r) {
    return (
      a.split(' ').forEach((l) => {
        this.observers[l] || (this.observers[l] = new Map());
        const s = this.observers[l].get(r) || 0;
        this.observers[l].set(r, s + 1);
      }),
      this
    );
  }
  off(a, r) {
    if (this.observers[a]) {
      if (!r) {
        delete this.observers[a];
        return;
      }
      this.observers[a].delete(r);
    }
  }
  emit(a, ...r) {
    (this.observers[a] &&
      Array.from(this.observers[a].entries()).forEach(([s, u]) => {
        for (let c = 0; c < u; c++) s(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([s, u]) => {
          for (let c = 0; c < u; c++) s.apply(s, [a, ...r]);
        }));
  }
}
class db extends Oc {
  constructor(a, r = {ns: ['translation'], defaultNS: 'translation'}) {
    (super(),
      (this.data = a || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(a) {
    this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
  }
  removeNamespaces(a) {
    const r = this.options.ns.indexOf(a);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(a, r, l, s = {}) {
    var h, y;
    const u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      c = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    a.indexOf('.') > -1
      ? (d = a.split('.'))
      : ((d = [a, r]), l && (Array.isArray(l) ? d.push(...l) : ze(l) && u ? d.push(...l.split(u)) : d.push(l)));
    const m = lc(this.data, d);
    return (
      !m && !r && !l && a.indexOf('.') > -1 && ((a = d[0]), (r = d[1]), (l = d.slice(2).join('.'))),
      m || !c || !ze(l) ? m : Lh((y = (h = this.data) == null ? void 0 : h[a]) == null ? void 0 : y[r], l, u)
    );
  }
  addResource(a, r, l, s, u = {silent: !1}) {
    const c = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let d = [a, r];
    (l && (d = d.concat(c ? l.split(c) : l)),
      a.indexOf('.') > -1 && ((d = a.split('.')), (s = r), (r = d[1])),
      this.addNamespaces(r),
      fb(this.data, d, s),
      u.silent || this.emit('added', a, r, l, s));
  }
  addResources(a, r, l, s = {silent: !1}) {
    for (const u in l) (ze(l[u]) || Array.isArray(l[u])) && this.addResource(a, r, u, l[u], {silent: !0});
    s.silent || this.emit('added', a, r, l);
  }
  addResourceBundle(a, r, l, s, u, c = {silent: !1, skipCopy: !1}) {
    let d = [a, r];
    (a.indexOf('.') > -1 && ((d = a.split('.')), (s = l), (l = r), (r = d[1])), this.addNamespaces(r));
    let m = lc(this.data, d) || {};
    (c.skipCopy || (l = JSON.parse(JSON.stringify(l))),
      s ? xS(m, l, u) : (m = {...m, ...l}),
      fb(this.data, d, m),
      c.silent || this.emit('added', a, r, l));
  }
  removeResourceBundle(a, r) {
    (this.hasResourceBundle(a, r) && delete this.data[a][r], this.removeNamespaces(r), this.emit('removed', a, r));
  }
  hasResourceBundle(a, r) {
    return this.getResource(a, r) !== void 0;
  }
  getResourceBundle(a, r) {
    return (r || (r = this.options.defaultNS), this.getResource(a, r));
  }
  getDataByLanguage(a) {
    return this.data[a];
  }
  hasLanguageSomeTranslations(a) {
    const r = this.getDataByLanguage(a);
    return !!((r && Object.keys(r)) || []).find((s) => r[s] && Object.keys(r[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var wS = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, a, r, l, s) {
    return (
      t.forEach((u) => {
        var c;
        a = ((c = this.processors[u]) == null ? void 0 : c.process(a, r, l, s)) ?? a;
      }),
      a
    );
  },
};
const ES = Symbol('i18next/PATH_KEY');
function wR() {
  const t = [],
    a = Object.create(null);
  let r;
  return (
    (a.get = (l, s) => {
      var u;
      return (
        (u = r == null ? void 0 : r.revoke) == null || u.call(r),
        s === ES ? t : (t.push(s), (r = Proxy.revocable(l, a)), r.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), a).proxy
  );
}
function jh(t, a) {
  const {[ES]: r} = t(wR());
  return r.join((a == null ? void 0 : a.keySeparator) ?? '.');
}
const hb = {},
  ih = (t) => !ze(t) && typeof t != 'boolean' && typeof t != 'number';
class sc extends Oc {
  constructor(a, r = {}) {
    (super(),
      fR(
        ['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'],
        a,
        this,
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Ra.create('translator')));
  }
  changeLanguage(a) {
    a && (this.language = a);
  }
  exists(a, r = {interpolation: {}}) {
    const l = {...r};
    if (a == null) return !1;
    const s = this.resolve(a, l);
    if ((s == null ? void 0 : s.res) === void 0) return !1;
    const u = ih(s.res);
    return !(l.returnObjects === !1 && u);
  }
  extractFromKey(a, r) {
    let l = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ':');
    const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let u = r.ns || this.options.defaultNS || [];
    const c = l && a.indexOf(l) > -1,
      d =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !SR(a, l, s);
    if (c && !d) {
      const m = a.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return {key: a, namespaces: ze(u) ? [u] : u};
      const h = a.split(l);
      ((l !== s || (l === s && this.options.ns.indexOf(h[0]) > -1)) && (u = h.shift()), (a = h.join(s)));
    }
    return {key: a, namespaces: ze(u) ? [u] : u};
  }
  translate(a, r, l) {
    let s = typeof r == 'object' ? {...r} : r;
    if (
      (typeof s != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (s = this.options.overloadTranslationOptionHandler(arguments)),
      typeof s == 'object' && (s = {...s}),
      s || (s = {}),
      a == null)
    )
      return '';
    (typeof a == 'function' && (a = jh(a, {...this.options, ...s})), Array.isArray(a) || (a = [String(a)]));
    const u = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails,
      c = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      {key: d, namespaces: m} = this.extractFromKey(a[a.length - 1], s),
      h = m[m.length - 1];
    let y = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    y === void 0 && (y = ':');
    const g = s.lng || this.language,
      S = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((g == null ? void 0 : g.toLowerCase()) === 'cimode')
      return S
        ? u
          ? {
              res: `${h}${y}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: g,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(s),
            }
          : `${h}${y}${d}`
        : u
          ? {res: d, usedKey: d, exactUsedKey: d, usedLng: g, usedNS: h, usedParams: this.getUsedParamsDetails(s)}
          : d;
    const x = this.resolve(a, s);
    let C = x == null ? void 0 : x.res;
    const w = (x == null ? void 0 : x.usedKey) || d,
      T = (x == null ? void 0 : x.exactUsedKey) || d,
      R = ['[object Number]', '[object Function]', '[object RegExp]'],
      A = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays,
      _ = !this.i18nFormat || this.i18nFormat.handleAsObject,
      z = s.count !== void 0 && !ze(s.count),
      $ = sc.hasDefaultValue(s),
      I = z ? this.pluralResolver.getSuffix(g, s.count, s) : '',
      O = s.ordinal && z ? this.pluralResolver.getSuffix(g, s.count, {ordinal: !1}) : '',
      P = z && !s.ordinal && s.count === 0,
      Z =
        (P && s[`defaultValue${this.options.pluralSeparator}zero`]) ||
        s[`defaultValue${I}`] ||
        s[`defaultValue${O}`] ||
        s.defaultValue;
    let se = C;
    _ && !C && $ && (se = Z);
    const pe = ih(se),
      le = Object.prototype.toString.apply(se);
    if (_ && se && pe && R.indexOf(le) < 0 && !(ze(A) && Array.isArray(se))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const ce = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, se, {...s, ns: m})
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return u ? ((x.res = ce), (x.usedParams = this.getUsedParamsDetails(s)), x) : ce;
      }
      if (c) {
        const ce = Array.isArray(se),
          ie = ce ? [] : {},
          he = ce ? T : w;
        for (const N in se)
          if (Object.prototype.hasOwnProperty.call(se, N)) {
            const V = `${he}${c}${N}`;
            ($ && !C
              ? (ie[N] = this.translate(V, {...s, defaultValue: ih(Z) ? Z[N] : void 0, joinArrays: !1, ns: m}))
              : (ie[N] = this.translate(V, {...s, joinArrays: !1, ns: m})),
              ie[N] === V && (ie[N] = se[N]));
          }
        C = ie;
      }
    } else if (_ && ze(A) && Array.isArray(C)) ((C = C.join(A)), C && (C = this.extendTranslation(C, a, s, l)));
    else {
      let ce = !1,
        ie = !1;
      (!this.isValidLookup(C) && $ && ((ce = !0), (C = Z)), this.isValidLookup(C) || ((ie = !0), (C = d)));
      const N = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ie ? void 0 : C,
        V = $ && Z !== C && this.options.updateMissing;
      if (ie || ce || V) {
        if ((this.logger.log(V ? 'updateKey' : 'missingKey', g, h, d, V ? Z : C), c)) {
          const D = this.resolve(d, {...s, keySeparator: !1});
          D &&
            D.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let B = [];
        const fe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fe && fe[0]) for (let D = 0; D < fe.length; D++) B.push(fe[D]);
        else
          this.options.saveMissingTo === 'all'
            ? (B = this.languageUtils.toResolveHierarchy(s.lng || this.language))
            : B.push(s.lng || this.language);
        const ge = (D, K, X) => {
          var ue;
          const ee = $ && X !== C ? X : N;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(D, h, K, ee, V, s)
            : (ue = this.backendConnector) != null &&
              ue.saveMissing &&
              this.backendConnector.saveMissing(D, h, K, ee, V, s),
            this.emit('missingKey', D, h, K, C));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && z
            ? B.forEach((D) => {
                const K = this.pluralResolver.getSuffixes(D, s);
                (P &&
                  s[`defaultValue${this.options.pluralSeparator}zero`] &&
                  K.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  K.push(`${this.options.pluralSeparator}zero`),
                  K.forEach((X) => {
                    ge([D], d + X, s[`defaultValue${X}`] || Z);
                  }));
              })
            : ge(B, d, Z));
      }
      ((C = this.extendTranslation(C, a, s, x, l)),
        ie && C === d && this.options.appendNamespaceToMissingKey && (C = `${h}${y}${d}`),
        (ie || ce) &&
          this.options.parseMissingKeyHandler &&
          (C = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${h}${y}${d}` : d,
            ce ? C : void 0,
            s,
          )));
    }
    return u ? ((x.res = C), (x.usedParams = this.getUsedParamsDetails(s)), x) : C;
  }
  extendTranslation(a, r, l, s, u) {
    var m, h;
    if ((m = this.i18nFormat) != null && m.parse)
      a = this.i18nFormat.parse(
        a,
        {...this.options.interpolation.defaultVariables, ...l},
        l.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        {resolved: s},
      );
    else if (!l.skipInterpolation) {
      l.interpolation &&
        this.interpolator.init({...l, interpolation: {...this.options.interpolation, ...l.interpolation}});
      const y =
        ze(a) &&
        (((h = l == null ? void 0 : l.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let g;
      if (y) {
        const x = a.match(this.interpolator.nestingRegexp);
        g = x && x.length;
      }
      let S = l.replace && !ze(l.replace) ? l.replace : l;
      if (
        (this.options.interpolation.defaultVariables && (S = {...this.options.interpolation.defaultVariables, ...S}),
        (a = this.interpolator.interpolate(a, S, l.lng || this.language || s.usedLng, l)),
        y)
      ) {
        const x = a.match(this.interpolator.nestingRegexp),
          C = x && x.length;
        g < C && (l.nest = !1);
      }
      (!l.lng && s && s.res && (l.lng = this.language || s.usedLng),
        l.nest !== !1 &&
          (a = this.interpolator.nest(
            a,
            (...x) =>
              (u == null ? void 0 : u[0]) === x[0] && !l.context
                ? (this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${r[0]}`), null)
                : this.translate(...x, r),
            l,
          )),
        l.interpolation && this.interpolator.reset());
    }
    const c = l.postProcess || this.options.postProcess,
      d = ze(c) ? [c] : c;
    return (
      a != null &&
        d != null &&
        d.length &&
        l.applyPostProcessor !== !1 &&
        (a = wS.handle(
          d,
          a,
          r,
          this.options && this.options.postProcessPassResolved
            ? {i18nResolved: {...s, usedParams: this.getUsedParamsDetails(l)}, ...l}
            : l,
          this,
        )),
      a
    );
  }
  resolve(a, r = {}) {
    let l, s, u, c, d;
    return (
      ze(a) && (a = [a]),
      a.forEach((m) => {
        if (this.isValidLookup(l)) return;
        const h = this.extractFromKey(m, r),
          y = h.key;
        s = y;
        let g = h.namespaces;
        this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
        const S = r.count !== void 0 && !ze(r.count),
          x = S && !r.ordinal && r.count === 0,
          C = r.context !== void 0 && (ze(r.context) || typeof r.context == 'number') && r.context !== '',
          w = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
        g.forEach((T) => {
          var R, A;
          this.isValidLookup(l) ||
            ((d = T),
            !hb[`${w[0]}-${T}`] &&
              (R = this.utils) != null &&
              R.hasLoadedNamespace &&
              !((A = this.utils) != null && A.hasLoadedNamespace(d)) &&
              ((hb[`${w[0]}-${T}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${w.join(', ')}" won't get resolved as namespace "${d}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            w.forEach((_) => {
              var I;
              if (this.isValidLookup(l)) return;
              c = _;
              const z = [y];
              if ((I = this.i18nFormat) != null && I.addLookupKeys) this.i18nFormat.addLookupKeys(z, y, _, T, r);
              else {
                let O;
                S && (O = this.pluralResolver.getSuffix(_, r.count, r));
                const P = `${this.options.pluralSeparator}zero`,
                  Z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (S &&
                    (r.ordinal && O.indexOf(Z) === 0 && z.push(y + O.replace(Z, this.options.pluralSeparator)),
                    z.push(y + O),
                    x && z.push(y + P)),
                  C)
                ) {
                  const se = `${y}${this.options.contextSeparator || '_'}${r.context}`;
                  (z.push(se),
                    S &&
                      (r.ordinal && O.indexOf(Z) === 0 && z.push(se + O.replace(Z, this.options.pluralSeparator)),
                      z.push(se + O),
                      x && z.push(se + P)));
                }
              }
              let $;
              for (; ($ = z.pop()); ) this.isValidLookup(l) || ((u = $), (l = this.getResource(_, T, $, r)));
            }));
        });
      }),
      {res: l, usedKey: s, exactUsedKey: u, usedLng: c, usedNS: d}
    );
  }
  isValidLookup(a) {
    return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === '');
  }
  getResource(a, r, l, s = {}) {
    var u;
    return (u = this.i18nFormat) != null && u.getResource
      ? this.i18nFormat.getResource(a, r, l, s)
      : this.resourceStore.getResource(a, r, l, s);
  }
  getUsedParamsDetails(a = {}) {
    const r = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      l = a.replace && !ze(a.replace);
    let s = l ? a.replace : a;
    if (
      (l && typeof a.count < 'u' && (s.count = a.count),
      this.options.interpolation.defaultVariables && (s = {...this.options.interpolation.defaultVariables, ...s}),
      !l)
    ) {
      s = {...s};
      for (const u of r) delete s[u];
    }
    return s;
  }
  static hasDefaultValue(a) {
    const r = 'defaultValue';
    for (const l in a)
      if (Object.prototype.hasOwnProperty.call(a, l) && r === l.substring(0, r.length) && a[l] !== void 0) return !0;
    return !1;
  }
}
class mb {
  constructor(a) {
    ((this.options = a),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ra.create('languageUtils')));
  }
  getScriptPartFromCode(a) {
    if (((a = ss(a)), !a || a.indexOf('-') < 0)) return null;
    const r = a.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(a) {
    if (((a = ss(a)), !a || a.indexOf('-') < 0)) return a;
    const r = a.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(a) {
    if (ze(a) && a.indexOf('-') > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(a)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? a.toLowerCase() : a)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? a.toLowerCase() : a;
  }
  isSupportedCode(a) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (a = this.getLanguagePartFromCode(a)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(a) > -1
    );
  }
  getBestMatchFromCodes(a) {
    if (!a) return null;
    let r;
    return (
      a.forEach((l) => {
        if (r) return;
        const s = this.formatLanguageCode(l);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (r = s);
      }),
      !r &&
        this.options.supportedLngs &&
        a.forEach((l) => {
          if (r) return;
          const s = this.getScriptPartFromCode(l);
          if (this.isSupportedCode(s)) return (r = s);
          const u = this.getLanguagePartFromCode(l);
          if (this.isSupportedCode(u)) return (r = u);
          r = this.options.supportedLngs.find((c) => {
            if (c === u) return c;
            if (
              !(c.indexOf('-') < 0 && u.indexOf('-') < 0) &&
              ((c.indexOf('-') > 0 && u.indexOf('-') < 0 && c.substring(0, c.indexOf('-')) === u) ||
                (c.indexOf(u) === 0 && u.length > 1))
            )
              return c;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(a, r) {
    if (!a) return [];
    if ((typeof a == 'function' && (a = a(r)), ze(a) && (a = [a]), Array.isArray(a))) return a;
    if (!r) return a.default || [];
    let l = a[r];
    return (
      l || (l = a[this.getScriptPartFromCode(r)]),
      l || (l = a[this.formatLanguageCode(r)]),
      l || (l = a[this.getLanguagePartFromCode(r)]),
      l || (l = a.default),
      l || []
    );
  }
  toResolveHierarchy(a, r) {
    const l = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], a),
      s = [],
      u = (c) => {
        c &&
          (this.isSupportedCode(c)
            ? s.push(c)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
      };
    return (
      ze(a) && (a.indexOf('-') > -1 || a.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && u(this.formatLanguageCode(a)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            u(this.getScriptPartFromCode(a)),
          this.options.load !== 'currentOnly' && u(this.getLanguagePartFromCode(a)))
        : ze(a) && u(this.formatLanguageCode(a)),
      l.forEach((c) => {
        s.indexOf(c) < 0 && u(this.formatLanguageCode(c));
      }),
      s
    );
  }
}
const pb = {zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5},
  gb = {select: (t) => (t === 1 ? 'one' : 'other'), resolvedOptions: () => ({pluralCategories: ['one', 'other']})};
class ER {
  constructor(a, r = {}) {
    ((this.languageUtils = a),
      (this.options = r),
      (this.logger = Ra.create('pluralResolver')),
      (this.pluralRulesCache = {}));
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(a, r = {}) {
    const l = ss(a === 'dev' ? 'en' : a),
      s = r.ordinal ? 'ordinal' : 'cardinal',
      u = JSON.stringify({cleanedCode: l, type: s});
    if (u in this.pluralRulesCache) return this.pluralRulesCache[u];
    let c;
    try {
      c = new Intl.PluralRules(l, {type: s});
    } catch {
      if (!Intl) return (this.logger.error('No Intl support, please use an Intl polyfill!'), gb);
      if (!a.match(/-|_/)) return gb;
      const m = this.languageUtils.getLanguagePartFromCode(a);
      c = this.getRule(m, r);
    }
    return ((this.pluralRulesCache[u] = c), c);
  }
  needsPlural(a, r = {}) {
    let l = this.getRule(a, r);
    return (l || (l = this.getRule('dev', r)), (l == null ? void 0 : l.resolvedOptions().pluralCategories.length) > 1);
  }
  getPluralFormsOfKey(a, r, l = {}) {
    return this.getSuffixes(a, l).map((s) => `${r}${s}`);
  }
  getSuffixes(a, r = {}) {
    let l = this.getRule(a, r);
    return (
      l || (l = this.getRule('dev', r)),
      l
        ? l
            .resolvedOptions()
            .pluralCategories.sort((s, u) => pb[s] - pb[u])
            .map((s) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${s}`)
        : []
    );
  }
  getSuffix(a, r, l = {}) {
    const s = this.getRule(a, l);
    return s
      ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ''}${s.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${a}`), this.getSuffix('dev', r, l));
  }
}
const yb = (t, a, r, l = '.', s = !0) => {
    let u = mR(t, a, r);
    return (!u && s && ze(r) && ((u = Lh(t, r, l)), u === void 0 && (u = Lh(a, r, l))), u);
  },
  lh = (t) => t.replace(/\$/g, '$$$$');
class vb {
  constructor(a = {}) {
    var r;
    ((this.logger = Ra.create('interpolator')),
      (this.options = a),
      (this.format = ((r = a == null ? void 0 : a.interpolation) == null ? void 0 : r.format) || ((l) => l)),
      this.init(a));
  }
  init(a = {}) {
    a.interpolation || (a.interpolation = {escapeValue: !0});
    const {
      escape: r,
      escapeValue: l,
      useRawValueToEscape: s,
      prefix: u,
      prefixEscaped: c,
      suffix: d,
      suffixEscaped: m,
      formatSeparator: h,
      unescapeSuffix: y,
      unescapePrefix: g,
      nestingPrefix: S,
      nestingPrefixEscaped: x,
      nestingSuffix: C,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: T,
      maxReplaces: R,
      alwaysFormat: A,
    } = a.interpolation;
    ((this.escape = r !== void 0 ? r : gR),
      (this.escapeValue = l !== void 0 ? l : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = u ? xl(u) : c || '{{'),
      (this.suffix = d ? xl(d) : m || '}}'),
      (this.formatSeparator = h || ','),
      (this.unescapePrefix = y ? '' : g || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : y || ''),
      (this.nestingPrefix = S ? xl(S) : x || xl('$t(')),
      (this.nestingSuffix = C ? xl(C) : w || xl(')')),
      (this.nestingOptionsSeparator = T || ','),
      (this.maxReplaces = R || 1e3),
      (this.alwaysFormat = A !== void 0 ? A : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const a = (r, l) => ((r == null ? void 0 : r.source) === l ? ((r.lastIndex = 0), r) : new RegExp(l, 'g'));
    ((this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = a(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = a(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      )));
  }
  interpolate(a, r, l, s) {
    var x;
    let u, c, d;
    const m = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {},
      h = (C) => {
        if (C.indexOf(this.formatSeparator) < 0) {
          const A = yb(r, m, C, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(A, void 0, l, {...s, ...r, interpolationkey: C}) : A;
        }
        const w = C.split(this.formatSeparator),
          T = w.shift().trim(),
          R = w.join(this.formatSeparator).trim();
        return this.format(yb(r, m, T, this.options.keySeparator, this.options.ignoreJSONStructure), R, l, {
          ...s,
          ...r,
          interpolationkey: T,
        });
      };
    this.resetRegExp();
    const y = (s == null ? void 0 : s.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      g =
        ((x = s == null ? void 0 : s.interpolation) == null ? void 0 : x.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        {regex: this.regexpUnescape, safeValue: (C) => lh(C)},
        {regex: this.regexp, safeValue: (C) => (this.escapeValue ? lh(this.escape(C)) : lh(C))},
      ].forEach((C) => {
        for (d = 0; (u = C.regex.exec(a)); ) {
          const w = u[1].trim();
          if (((c = h(w)), c === void 0))
            if (typeof y == 'function') {
              const R = y(a, u, s);
              c = ze(R) ? R : '';
            } else if (s && Object.prototype.hasOwnProperty.call(s, w)) c = '';
            else if (g) {
              c = u[0];
              continue;
            } else (this.logger.warn(`missed to pass in variable ${w} for interpolating ${a}`), (c = ''));
          else !ze(c) && !this.useRawValueToEscape && (c = sb(c));
          const T = C.safeValue(c);
          if (
            ((a = a.replace(u[0], T)),
            g ? ((C.regex.lastIndex += c.length), (C.regex.lastIndex -= u[0].length)) : (C.regex.lastIndex = 0),
            d++,
            d >= this.maxReplaces)
          )
            break;
        }
      }),
      a
    );
  }
  nest(a, r, l = {}) {
    let s, u, c;
    const d = (m, h) => {
      const y = this.nestingOptionsSeparator;
      if (m.indexOf(y) < 0) return m;
      const g = m.split(new RegExp(`${y}[ ]*{`));
      let S = `{${g[1]}`;
      ((m = g[0]), (S = this.interpolate(S, c)));
      const x = S.match(/'/g),
        C = S.match(/"/g);
      ((((x == null ? void 0 : x.length) ?? 0) % 2 === 0 && !C) || C.length % 2 !== 0) && (S = S.replace(/'/g, '"'));
      try {
        ((c = JSON.parse(S)), h && (c = {...h, ...c}));
      } catch (w) {
        return (this.logger.warn(`failed parsing options string in nesting for key ${m}`, w), `${m}${y}${S}`);
      }
      return (c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, m);
    };
    for (; (s = this.nestingRegexp.exec(a)); ) {
      let m = [];
      ((c = {...l}),
        (c = c.replace && !ze(c.replace) ? c.replace : c),
        (c.applyPostProcessor = !1),
        delete c.defaultValue);
      const h = /{.*}/.test(s[1]) ? s[1].lastIndexOf('}') + 1 : s[1].indexOf(this.formatSeparator);
      if (
        (h !== -1 &&
          ((m = s[1]
            .slice(h)
            .split(this.formatSeparator)
            .map((y) => y.trim())
            .filter(Boolean)),
          (s[1] = s[1].slice(0, h))),
        (u = r(d.call(this, s[1].trim(), c), c)),
        u && s[0] === a && !ze(u))
      )
        return u;
      (ze(u) || (u = sb(u)),
        u || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${a}`), (u = '')),
        m.length && (u = m.reduce((y, g) => this.format(y, g, l.lng, {...l, interpolationkey: s[1].trim()}), u.trim())),
        (a = a.replace(s[0], u)),
        (this.regexp.lastIndex = 0));
    }
    return a;
  }
}
const CR = (t) => {
    let a = t.toLowerCase().trim();
    const r = {};
    if (t.indexOf('(') > -1) {
      const l = t.split('(');
      a = l[0].toLowerCase().trim();
      const s = l[1].substring(0, l[1].length - 1);
      a === 'currency' && s.indexOf(':') < 0
        ? r.currency || (r.currency = s.trim())
        : a === 'relativetime' && s.indexOf(':') < 0
          ? r.range || (r.range = s.trim())
          : s.split(';').forEach((c) => {
              if (c) {
                const [d, ...m] = c.split(':'),
                  h = m
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  y = d.trim();
                (r[y] || (r[y] = h),
                  h === 'false' && (r[y] = !1),
                  h === 'true' && (r[y] = !0),
                  isNaN(h) || (r[y] = parseInt(h, 10)));
              }
            });
    }
    return {formatName: a, formatOptions: r};
  },
  bb = (t) => {
    const a = {};
    return (r, l, s) => {
      let u = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (u = {...u, [s.interpolationkey]: void 0});
      const c = l + JSON.stringify(u);
      let d = a[c];
      return (d || ((d = t(ss(l), s)), (a[c] = d)), d(r));
    };
  },
  TR = (t) => (a, r, l) => t(ss(r), l)(a);
class OR {
  constructor(a = {}) {
    ((this.logger = Ra.create('formatter')), (this.options = a), this.init(a));
  }
  init(a, r = {interpolation: {}}) {
    this.formatSeparator = r.interpolation.formatSeparator || ',';
    const l = r.cacheInBuiltFormats ? bb : TR;
    this.formats = {
      number: l((s, u) => {
        const c = new Intl.NumberFormat(s, {...u});
        return (d) => c.format(d);
      }),
      currency: l((s, u) => {
        const c = new Intl.NumberFormat(s, {...u, style: 'currency'});
        return (d) => c.format(d);
      }),
      datetime: l((s, u) => {
        const c = new Intl.DateTimeFormat(s, {...u});
        return (d) => c.format(d);
      }),
      relativetime: l((s, u) => {
        const c = new Intl.RelativeTimeFormat(s, {...u});
        return (d) => c.format(d, u.range || 'day');
      }),
      list: l((s, u) => {
        const c = new Intl.ListFormat(s, {...u});
        return (d) => c.format(d);
      }),
    };
  }
  add(a, r) {
    this.formats[a.toLowerCase().trim()] = r;
  }
  addCached(a, r) {
    this.formats[a.toLowerCase().trim()] = bb(r);
  }
  format(a, r, l, s = {}) {
    const u = r.split(this.formatSeparator);
    if (u.length > 1 && u[0].indexOf('(') > 1 && u[0].indexOf(')') < 0 && u.find((d) => d.indexOf(')') > -1)) {
      const d = u.findIndex((m) => m.indexOf(')') > -1);
      u[0] = [u[0], ...u.splice(1, d)].join(this.formatSeparator);
    }
    return u.reduce((d, m) => {
      var g;
      const {formatName: h, formatOptions: y} = CR(m);
      if (this.formats[h]) {
        let S = d;
        try {
          const x = ((g = s == null ? void 0 : s.formatParams) == null ? void 0 : g[s.interpolationkey]) || {},
            C = x.locale || x.lng || s.locale || s.lng || l;
          S = this.formats[h](d, C, {...y, ...s, ...x});
        } catch (x) {
          this.logger.warn(x);
        }
        return S;
      } else this.logger.warn(`there was no format function for ${h}`);
      return d;
    }, a);
  }
}
const RR = (t, a) => {
  t.pending[a] !== void 0 && (delete t.pending[a], t.pendingCount--);
};
class AR extends Oc {
  constructor(a, r, l, s = {}) {
    var u, c;
    (super(),
      (this.backend = a),
      (this.store = r),
      (this.services = l),
      (this.languageUtils = l.languageUtils),
      (this.options = s),
      (this.logger = Ra.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (c = (u = this.backend) == null ? void 0 : u.init) == null || c.call(u, l, s.backend, s));
  }
  queueLoad(a, r, l, s) {
    const u = {},
      c = {},
      d = {},
      m = {};
    return (
      a.forEach((h) => {
        let y = !0;
        (r.forEach((g) => {
          const S = `${h}|${g}`;
          !l.reload && this.store.hasResourceBundle(h, g)
            ? (this.state[S] = 2)
            : this.state[S] < 0 ||
              (this.state[S] === 1
                ? c[S] === void 0 && (c[S] = !0)
                : ((this.state[S] = 1),
                  (y = !1),
                  c[S] === void 0 && (c[S] = !0),
                  u[S] === void 0 && (u[S] = !0),
                  m[g] === void 0 && (m[g] = !0)));
        }),
          y || (d[h] = !0));
      }),
      (Object.keys(u).length || Object.keys(c).length) &&
        this.queue.push({pending: c, pendingCount: Object.keys(c).length, loaded: {}, errors: [], callback: s}),
      {
        toLoad: Object.keys(u),
        pending: Object.keys(c),
        toLoadLanguages: Object.keys(d),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(a, r, l) {
    const s = a.split('|'),
      u = s[0],
      c = s[1];
    (r && this.emit('failedLoading', u, c, r),
      !r && l && this.store.addResourceBundle(u, c, l, void 0, void 0, {skipCopy: !0}),
      (this.state[a] = r ? -1 : 2),
      r && l && (this.state[a] = 0));
    const d = {};
    (this.queue.forEach((m) => {
      (hR(m.loaded, [u], c),
        RR(m, a),
        r && m.errors.push(r),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((h) => {
            d[h] || (d[h] = {});
            const y = m.loaded[h];
            y.length &&
              y.forEach((g) => {
                d[h][g] === void 0 && (d[h][g] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback()));
    }),
      this.emit('loaded', d),
      (this.queue = this.queue.filter((m) => !m.done)));
  }
  read(a, r, l, s = 0, u = this.retryTimeout, c) {
    if (!a.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({lng: a, ns: r, fcName: l, tried: s, wait: u, callback: c});
      return;
    }
    this.readingCalls++;
    const d = (h, y) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const g = this.waitingReads.shift();
          this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (h && y && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, a, r, l, s + 1, u * 2, c);
          }, u);
          return;
        }
        c(h, y);
      },
      m = this.backend[l].bind(this.backend);
    if (m.length === 2) {
      try {
        const h = m(a, r);
        h && typeof h.then == 'function' ? h.then((y) => d(null, y)).catch(d) : d(null, h);
      } catch (h) {
        d(h);
      }
      return;
    }
    return m(a, r, d);
  }
  prepareLoading(a, r, l = {}, s) {
    if (!this.backend)
      return (this.logger.warn('No backend was added via i18next.use. Will not load resources.'), s && s());
    (ze(a) && (a = this.languageUtils.toResolveHierarchy(a)), ze(r) && (r = [r]));
    const u = this.queueLoad(a, r, l, s);
    if (!u.toLoad.length) return (u.pending.length || s(), null);
    u.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(a, r, l) {
    this.prepareLoading(a, r, {}, l);
  }
  reload(a, r, l) {
    this.prepareLoading(a, r, {reload: !0}, l);
  }
  loadOne(a, r = '') {
    const l = a.split('|'),
      s = l[0],
      u = l[1];
    this.read(s, u, 'read', void 0, void 0, (c, d) => {
      (c && this.logger.warn(`${r}loading namespace ${u} for language ${s} failed`, c),
        !c && d && this.logger.log(`${r}loaded namespace ${u} for language ${s}`, d),
        this.loaded(a, c, d));
    });
  }
  saveMissing(a, r, l, s, u, c = {}, d = () => {}) {
    var m, h, y, g, S;
    if (
      (h = (m = this.services) == null ? void 0 : m.utils) != null &&
      h.hasLoadedNamespace &&
      !((g = (y = this.services) == null ? void 0 : y.utils) != null && g.hasLoadedNamespace(r))
    ) {
      this.logger.warn(
        `did not save key "${l}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(l == null || l === '')) {
      if ((S = this.backend) != null && S.create) {
        const x = {...c, isUpdate: u},
          C = this.backend.create.bind(this.backend);
        if (C.length < 6)
          try {
            let w;
            (C.length === 5 ? (w = C(a, r, l, s, x)) : (w = C(a, r, l, s)),
              w && typeof w.then == 'function' ? w.then((T) => d(null, T)).catch(d) : d(null, w));
          } catch (w) {
            d(w);
          }
        else C(a, r, l, s, d, x);
      }
      !a || !a[0] || this.store.addResource(a[0], r, l, s);
    }
  }
}
const oh = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (t) => {
      let a = {};
      if (
        (typeof t[1] == 'object' && (a = t[1]),
        ze(t[1]) && (a.defaultValue = t[1]),
        ze(t[2]) && (a.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((l) => {
          a[l] = r[l];
        });
      }
      return a;
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  Sb = (t) => {
    var a, r;
    return (
      ze(t.ns) && (t.ns = [t.ns]),
      ze(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]),
      ze(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]),
      ((r = (a = t.supportedLngs) == null ? void 0 : a.indexOf) == null ? void 0 : r.call(a, 'cimode')) < 0 &&
        (t.supportedLngs = t.supportedLngs.concat(['cimode'])),
      typeof t.initImmediate == 'boolean' && (t.initAsync = t.initImmediate),
      t
    );
  },
  ku = () => {},
  DR = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((r) => {
      typeof t[r] == 'function' && (t[r] = t[r].bind(t));
    });
  };
let xb = !1;
const MR = (t) => {
  var a, r, l, s, u, c, d, m, h;
  return !!(
    ((l = (r = (a = t == null ? void 0 : t.modules) == null ? void 0 : a.backend) == null ? void 0 : r.name) == null
      ? void 0
      : l.indexOf('Locize')) > 0 ||
    ((d =
      (c = (u = (s = t == null ? void 0 : t.modules) == null ? void 0 : s.backend) == null ? void 0 : u.constructor) ==
      null
        ? void 0
        : c.name) == null
      ? void 0
      : d.indexOf('Locize')) > 0 ||
    ((h = (m = t == null ? void 0 : t.options) == null ? void 0 : m.backend) != null &&
      h.backends &&
      t.options.backend.backends.some((y) => {
        var g, S, x;
        return (
          ((g = y == null ? void 0 : y.name) == null ? void 0 : g.indexOf('Locize')) > 0 ||
          ((x = (S = y == null ? void 0 : y.constructor) == null ? void 0 : S.name) == null
            ? void 0
            : x.indexOf('Locize')) > 0
        );
      }))
  );
};
class rs extends Oc {
  constructor(a = {}, r) {
    if (
      (super(),
      (this.options = Sb(a)),
      (this.services = {}),
      (this.logger = Ra),
      (this.modules = {external: []}),
      DR(this),
      r && !this.isInitialized && !a.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(a, r), this);
      setTimeout(() => {
        this.init(a, r);
      }, 0);
    }
  }
  init(a = {}, r) {
    ((this.isInitializing = !0),
      typeof a == 'function' && ((r = a), (a = {})),
      a.defaultNS == null &&
        a.ns &&
        (ze(a.ns) ? (a.defaultNS = a.ns) : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0])));
    const l = oh();
    ((this.options = {...l, ...this.options, ...Sb(a)}),
      (this.options.interpolation = {...l.interpolation, ...this.options.interpolation}),
      a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator),
      typeof this.options.overloadTranslationOptionHandler != 'function' &&
        (this.options.overloadTranslationOptionHandler = l.overloadTranslationOptionHandler),
      this.options.showSupportNotice !== !1 &&
        !MR(this) &&
        !xb &&
        (typeof console < 'u' &&
          typeof console.info < 'u' &&
          console.info(
            '🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙',
          ),
        (xb = !0)));
    const s = (h) => (h ? (typeof h == 'function' ? new h() : h) : null);
    if (!this.options.isClone) {
      this.modules.logger ? Ra.init(s(this.modules.logger), this.options) : Ra.init(null, this.options);
      let h;
      this.modules.formatter ? (h = this.modules.formatter) : (h = OR);
      const y = new mb(this.options);
      this.store = new db(this.options.resources, this.options);
      const g = this.services;
      ((g.logger = Ra),
        (g.resourceStore = this.store),
        (g.languageUtils = y),
        (g.pluralResolver = new ER(y, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== l.interpolation.format &&
          this.logger.deprecate(
            'init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting',
          ),
        h &&
          (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) &&
          ((g.formatter = s(h)),
          g.formatter.init && g.formatter.init(g, this.options),
          (this.options.interpolation.format = g.formatter.format.bind(g.formatter))),
        (g.interpolator = new vb(this.options)),
        (g.utils = {hasLoadedNamespace: this.hasLoadedNamespace.bind(this)}),
        (g.backendConnector = new AR(s(this.modules.backend), g.resourceStore, g, this.options)),
        g.backendConnector.on('*', (x, ...C) => {
          this.emit(x, ...C);
        }),
        this.modules.languageDetector &&
          ((g.languageDetector = s(this.modules.languageDetector)),
          g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((g.i18nFormat = s(this.modules.i18nFormat)), g.i18nFormat.init && g.i18nFormat.init(this)),
        (this.translator = new sc(this.services, this.options)),
        this.translator.on('*', (x, ...C) => {
          this.emit(x, ...C);
        }),
        this.modules.external.forEach((x) => {
          x.init && x.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ku),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      h.length > 0 && h[0] !== 'dev' && (this.options.lng = h[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach((h) => {
        this[h] = (...y) => this.store[h](...y);
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((h) => {
        this[h] = (...y) => (this.store[h](...y), this);
      }));
    const d = Qo(),
      m = () => {
        const h = (y, g) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            d.resolve(g),
            r(y, g));
        };
        if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return (this.options.resources || !this.options.initAsync ? m() : setTimeout(m, 0), d);
  }
  loadResources(a, r = ku) {
    var u, c;
    let l = r;
    const s = ze(a) ? a : this.language;
    if ((typeof a == 'function' && (l = a), !this.options.resources || this.options.partialBundledLanguages)) {
      if (
        (s == null ? void 0 : s.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return l();
      const d = [],
        m = (h) => {
          if (!h || h === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(h).forEach((g) => {
            g !== 'cimode' && d.indexOf(g) < 0 && d.push(g);
          });
        };
      (s ? m(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((y) => m(y)),
        (c = (u = this.options.preload) == null ? void 0 : u.forEach) == null || c.call(u, (h) => m(h)),
        this.services.backendConnector.load(d, this.options.ns, (h) => {
          (!h && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), l(h));
        }));
    } else l(null);
  }
  reloadResources(a, r, l) {
    const s = Qo();
    return (
      typeof a == 'function' && ((l = a), (a = void 0)),
      typeof r == 'function' && ((l = r), (r = void 0)),
      a || (a = this.languages),
      r || (r = this.options.ns),
      l || (l = ku),
      this.services.backendConnector.reload(a, r, (u) => {
        (s.resolve(), l(u));
      }),
      s
    );
  }
  use(a) {
    if (!a)
      throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!a.type)
      throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      a.type === 'backend' && (this.modules.backend = a),
      (a.type === 'logger' || (a.log && a.warn && a.error)) && (this.modules.logger = a),
      a.type === 'languageDetector' && (this.modules.languageDetector = a),
      a.type === 'i18nFormat' && (this.modules.i18nFormat = a),
      a.type === 'postProcessor' && wS.addPostProcessor(a),
      a.type === 'formatter' && (this.modules.formatter = a),
      a.type === '3rdParty' && this.modules.external.push(a),
      this
    );
  }
  setResolvedLanguage(a) {
    if (!(!a || !this.languages) && !(['cimode', 'dev'].indexOf(a) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const l = this.languages[r];
        if (!(['cimode', 'dev'].indexOf(l) > -1) && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(a) < 0 &&
        this.store.hasLanguageSomeTranslations(a) &&
        ((this.resolvedLanguage = a), this.languages.unshift(a));
    }
  }
  changeLanguage(a, r) {
    this.isLanguageChangingTo = a;
    const l = Qo();
    this.emit('languageChanging', a);
    const s = (d) => {
        ((this.language = d),
          (this.languages = this.services.languageUtils.toResolveHierarchy(d)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(d));
      },
      u = (d, m) => {
        (m
          ? this.isLanguageChangingTo === a &&
            (s(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', m),
            this.logger.log('languageChanged', m))
          : (this.isLanguageChangingTo = void 0),
          l.resolve((...h) => this.t(...h)),
          r && r(d, (...h) => this.t(...h)));
      },
      c = (d) => {
        var y, g;
        !a && !d && this.services.languageDetector && (d = []);
        const m = ze(d) ? d : d && d[0],
          h = this.store.hasLanguageSomeTranslations(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(ze(d) ? [d] : d);
        (h &&
          (this.language || s(h),
          this.translator.language || this.translator.changeLanguage(h),
          (g = (y = this.services.languageDetector) == null ? void 0 : y.cacheUserLanguage) == null || g.call(y, h)),
          this.loadResources(h, (S) => {
            u(S, h);
          }));
      };
    return (
      !a && this.services.languageDetector && !this.services.languageDetector.async
        ? c(this.services.languageDetector.detect())
        : !a && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(c)
            : this.services.languageDetector.detect(c)
          : c(a),
      l
    );
  }
  getFixedT(a, r, l) {
    const s = (u, c, ...d) => {
      let m;
      (typeof c != 'object' ? (m = this.options.overloadTranslationOptionHandler([u, c].concat(d))) : (m = {...c}),
        (m.lng = m.lng || s.lng),
        (m.lngs = m.lngs || s.lngs),
        (m.ns = m.ns || s.ns),
        m.keyPrefix !== '' && (m.keyPrefix = m.keyPrefix || l || s.keyPrefix));
      const h = this.options.keySeparator || '.';
      let y;
      return (
        m.keyPrefix && Array.isArray(u)
          ? (y = u.map(
              (g) => (typeof g == 'function' && (g = jh(g, {...this.options, ...c})), `${m.keyPrefix}${h}${g}`),
            ))
          : (typeof u == 'function' && (u = jh(u, {...this.options, ...c})),
            (y = m.keyPrefix ? `${m.keyPrefix}${h}${u}` : u)),
        this.t(y, m)
      );
    };
    return (ze(a) ? (s.lng = a) : (s.lngs = a), (s.ns = r), (s.keyPrefix = l), s);
  }
  t(...a) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...a);
  }
  exists(...a) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...a);
  }
  setDefaultNamespace(a) {
    this.options.defaultNS = a;
  }
  hasLoadedNamespace(a, r = {}) {
    if (!this.isInitialized)
      return (this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1);
    if (!this.languages || !this.languages.length)
      return (this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1);
    const l = r.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      u = this.languages[this.languages.length - 1];
    if (l.toLowerCase() === 'cimode') return !0;
    const c = (d, m) => {
      const h = this.services.backendConnector.state[`${d}|${m}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (r.precheck) {
      const d = r.precheck(this, c);
      if (d !== void 0) return d;
    }
    return !!(
      this.hasResourceBundle(l, a) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (c(l, a) && (!s || c(u, a)))
    );
  }
  loadNamespaces(a, r) {
    const l = Qo();
    return this.options.ns
      ? (ze(a) && (a = [a]),
        a.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          (l.resolve(), r && r(s));
        }),
        l)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(a, r) {
    const l = Qo();
    ze(a) && (a = [a]);
    const s = this.options.preload || [],
      u = a.filter((c) => s.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return u.length
      ? ((this.options.preload = s.concat(u)),
        this.loadResources((c) => {
          (l.resolve(), r && r(c));
        }),
        l)
      : (r && r(), Promise.resolve());
  }
  dir(a) {
    var s, u;
    if (
      (a ||
        (a =
          this.resolvedLanguage ||
          (((s = this.languages) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)),
      !a)
    )
      return 'rtl';
    try {
      const c = new Intl.Locale(a);
      if (c && c.getTextInfo) {
        const d = c.getTextInfo();
        if (d && d.direction) return d.direction;
      }
    } catch {}
    const r = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      l = ((u = this.services) == null ? void 0 : u.languageUtils) || new mb(oh());
    return a.toLowerCase().indexOf('-latn') > 1
      ? 'ltr'
      : r.indexOf(l.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf('-arab') > 1
        ? 'rtl'
        : 'ltr';
  }
  static createInstance(a = {}, r) {
    const l = new rs(a, r);
    return ((l.createInstance = rs.createInstance), l);
  }
  cloneInstance(a = {}, r = ku) {
    const l = a.forkResourceStore;
    l && delete a.forkResourceStore;
    const s = {...this.options, ...a, isClone: !0},
      u = new rs(s);
    if (
      ((a.debug !== void 0 || a.prefix !== void 0) && (u.logger = u.logger.clone(a)),
      ['store', 'services', 'language'].forEach((d) => {
        u[d] = this[d];
      }),
      (u.services = {...this.services}),
      (u.services.utils = {hasLoadedNamespace: u.hasLoadedNamespace.bind(u)}),
      l)
    ) {
      const d = Object.keys(this.store.data).reduce(
        (m, h) => (
          (m[h] = {...this.store.data[h]}),
          (m[h] = Object.keys(m[h]).reduce((y, g) => ((y[g] = {...m[h][g]}), y), m[h])),
          m
        ),
        {},
      );
      ((u.store = new db(d, s)), (u.services.resourceStore = u.store));
    }
    if (a.interpolation) {
      const m = {...oh().interpolation, ...this.options.interpolation, ...a.interpolation},
        h = {...s, interpolation: m};
      u.services.interpolator = new vb(h);
    }
    return (
      (u.translator = new sc(u.services, s)),
      u.translator.on('*', (d, ...m) => {
        u.emit(d, ...m);
      }),
      u.init(s, r),
      (u.translator.options = s),
      (u.translator.backendConnector.services.utils = {hasLoadedNamespace: u.hasLoadedNamespace.bind(u)}),
      u
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const on = rs.createInstance();
on.createInstance;
on.dir;
on.init;
on.loadResources;
on.reloadResources;
on.use;
on.changeLanguage;
on.getFixedT;
on.t;
on.exists;
on.setDefaultNamespace;
on.hasLoadedNamespace;
on.loadNamespaces;
on.loadLanguages;
const NR = (t, a, r, l) => {
    var u, c, d, m;
    const s = [r, {code: a, ...(l || {})}];
    if ((c = (u = t == null ? void 0 : t.services) == null ? void 0 : u.logger) != null && c.forward)
      return t.services.logger.forward(s, 'warn', 'react-i18next::', !0);
    (_i(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (m = (d = t == null ? void 0 : t.services) == null ? void 0 : d.logger) != null && m.warn
        ? t.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s));
  },
  wb = {},
  CS = (t, a, r, l) => {
    (_i(r) && wb[r]) || (_i(r) && (wb[r] = new Date()), NR(t, a, r, l));
  },
  TS = (t, a) => () => {
    if (t.isInitialized) a();
    else {
      const r = () => {
        (setTimeout(() => {
          t.off('initialized', r);
        }, 0),
          a());
      };
      t.on('initialized', r);
    }
  },
  zh = (t, a, r) => {
    t.loadNamespaces(a, TS(t, r));
  },
  Eb = (t, a, r, l) => {
    if ((_i(r) && (r = [r]), t.options.preload && t.options.preload.indexOf(a) > -1)) return zh(t, r, l);
    (r.forEach((s) => {
      t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
    }),
      t.loadLanguages(a, TS(t, l)));
  },
  _R = (t, a, r = {}) =>
    !a.languages || !a.languages.length
      ? (CS(a, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {languages: a.languages}), !0)
      : a.hasLoadedNamespace(t, {
          lng: r.lng,
          precheck: (l, s) => {
            if (
              r.bindI18n &&
              r.bindI18n.indexOf('languageChanging') > -1 &&
              l.services.backendConnector.backend &&
              l.isLanguageChangingTo &&
              !s(l.isLanguageChangingTo, t)
            )
              return !1;
          },
        }),
  _i = (t) => typeof t == 'string',
  LR = (t) => typeof t == 'object' && t !== null,
  jR = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  zR = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  UR = (t) => zR[t],
  HR = (t) => t.replace(jR, UR);
let Uh = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: HR,
  transDefaultProps: void 0,
};
const BR = (t = {}) => {
    Uh = {...Uh, ...t};
  },
  kR = () => Uh;
let OS;
const PR = (t) => {
    OS = t;
  },
  VR = () => OS,
  qR = {
    type: '3rdParty',
    init(t) {
      (BR(t.options.react), PR(t));
    },
  },
  RS = b.createContext();
class YR {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(a) {
    a.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var sh = {exports: {}},
  uh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cb;
function $R() {
  if (Cb) return uh;
  Cb = 1;
  var t = bc();
  function a(g, S) {
    return (g === S && (g !== 0 || 1 / g === 1 / S)) || (g !== g && S !== S);
  }
  var r = typeof Object.is == 'function' ? Object.is : a,
    l = t.useState,
    s = t.useEffect,
    u = t.useLayoutEffect,
    c = t.useDebugValue;
  function d(g, S) {
    var x = S(),
      C = l({inst: {value: x, getSnapshot: S}}),
      w = C[0].inst,
      T = C[1];
    return (
      u(
        function () {
          ((w.value = x), (w.getSnapshot = S), m(w) && T({inst: w}));
        },
        [g, x, S],
      ),
      s(
        function () {
          return (
            m(w) && T({inst: w}),
            g(function () {
              m(w) && T({inst: w});
            })
          );
        },
        [g],
      ),
      c(x),
      x
    );
  }
  function m(g) {
    var S = g.getSnapshot;
    g = g.value;
    try {
      var x = S();
      return !r(g, x);
    } catch {
      return !0;
    }
  }
  function h(g, S) {
    return S();
  }
  var y = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? h : d;
  return ((uh.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : y), uh);
}
var Tb;
function FR() {
  return (Tb || ((Tb = 1), (sh.exports = $R())), sh.exports);
}
var GR = FR();
const KR = (t, a) =>
    _i(a) ? a : LR(a) && _i(a.defaultValue) ? a.defaultValue : Array.isArray(t) ? t[t.length - 1] : t,
  XR = {t: KR, ready: !1},
  QR = () => () => {},
  Xl = (t, a = {}) => {
    var Z, se, pe;
    const {i18n: r} = a,
      {i18n: l, defaultNS: s} = b.useContext(RS) || {},
      u = r || l || VR();
    (u && !u.reportNamespaces && (u.reportNamespaces = new YR()),
      u ||
        CS(
          u,
          'NO_I18NEXT_INSTANCE',
          'useTranslation: You will need to pass in an i18next instance by using initReactI18next',
        ));
    const c = b.useMemo(() => {
        var le;
        return {...kR(), ...((le = u == null ? void 0 : u.options) == null ? void 0 : le.react), ...a};
      }, [u, a]),
      {useSuspense: d, keyPrefix: m} = c,
      h = s || ((Z = u == null ? void 0 : u.options) == null ? void 0 : Z.defaultNS),
      y = _i(h) ? [h] : h || ['translation'],
      g = b.useMemo(() => y, y);
    (pe = (se = u == null ? void 0 : u.reportNamespaces) == null ? void 0 : se.addUsedNamespaces) == null ||
      pe.call(se, g);
    const S = b.useRef(0),
      x = b.useCallback(
        (le) => {
          if (!u) return QR;
          const {bindI18n: ce, bindI18nStore: ie} = c,
            he = () => {
              ((S.current += 1), le());
            };
          return (
            ce && u.on(ce, he),
            ie && u.store.on(ie, he),
            () => {
              (ce && ce.split(' ').forEach((N) => u.off(N, he)),
                ie && ie.split(' ').forEach((N) => u.store.off(N, he)));
            }
          );
        },
        [u, c],
      ),
      C = b.useRef(),
      w = b.useCallback(() => {
        if (!u) return XR;
        const le = !!(u.isInitialized || u.initializedStoreOnce) && g.every((B) => _R(B, u, c)),
          ce = a.lng || u.language,
          ie = S.current,
          he = C.current;
        if (he && he.ready === le && he.lng === ce && he.keyPrefix === m && he.revision === ie) return he;
        const V = {
          t: u.getFixedT(ce, c.nsMode === 'fallback' ? g : g[0], m),
          ready: le,
          lng: ce,
          keyPrefix: m,
          revision: ie,
        };
        return ((C.current = V), V);
      }, [u, g, m, c, a.lng]),
      [T, R] = b.useState(0),
      {t: A, ready: _} = GR.useSyncExternalStore(x, w, w);
    b.useEffect(() => {
      if (u && !_ && !d) {
        const le = () => R((ce) => ce + 1);
        a.lng ? Eb(u, a.lng, g, le) : zh(u, g, le);
      }
    }, [u, a.lng, g, _, d, T]);
    const z = u || {},
      $ = b.useRef(null),
      I = b.useRef(),
      O = (le) => {
        const ce = Object.getOwnPropertyDescriptors(le);
        ce.__original && delete ce.__original;
        const ie = Object.create(Object.getPrototypeOf(le), ce);
        if (!Object.prototype.hasOwnProperty.call(ie, '__original'))
          try {
            Object.defineProperty(ie, '__original', {value: le, writable: !1, enumerable: !1, configurable: !1});
          } catch {}
        return ie;
      },
      P = b.useMemo(() => {
        const le = z,
          ce = le == null ? void 0 : le.language;
        let ie = le;
        le &&
          ($.current && $.current.__original === le
            ? I.current !== ce
              ? ((ie = O(le)), ($.current = ie), (I.current = ce))
              : (ie = $.current)
            : ((ie = O(le)), ($.current = ie), (I.current = ce)));
        const he = [A, ie, _];
        return ((he.t = A), (he.i18n = ie), (he.ready = _), he);
      }, [A, z, _, z.resolvedLanguage, z.language, z.languages]);
    if (u && d && !_)
      throw new Promise((le) => {
        const ce = () => le();
        a.lng ? Eb(u, a.lng, g, ce) : zh(u, g, ce);
      });
    return P;
  };
function IR({i18n: t, defaultNS: a, children: r}) {
  const l = b.useMemo(() => ({i18n: t, defaultNS: a}), [t, a]);
  return b.createElement(RS.Provider, {value: l}, r);
}
function Hh(t) {
  '@babel/helpers - typeof';
  return (
    (Hh =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a && typeof Symbol == 'function' && a.constructor === Symbol && a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    Hh(t)
  );
}
function AS() {
  return (
    typeof XMLHttpRequest == 'function' || (typeof XMLHttpRequest > 'u' ? 'undefined' : Hh(XMLHttpRequest)) === 'object'
  );
}
function ZR(t) {
  return !!t && typeof t.then == 'function';
}
function JR(t) {
  return ZR(t) ? t : Promise.resolve(t);
}
const WR = 'modulepreload',
  eA = function (t) {
    return '/' + t;
  },
  Ob = {},
  tA = function (a, r, l) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
      let c = function (h) {
        return Promise.all(
          h.map((y) =>
            Promise.resolve(y).then(
              (g) => ({status: 'fulfilled', value: g}),
              (g) => ({status: 'rejected', reason: g}),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const d = document.querySelector('meta[property=csp-nonce]'),
        m = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute('nonce'));
      s = c(
        r.map((h) => {
          if (((h = eA(h)), h in Ob)) return;
          Ob[h] = !0;
          const y = h.endsWith('.css'),
            g = y ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${h}"]${g}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = y ? 'stylesheet' : WR),
            y || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = h),
            m && S.setAttribute('nonce', m),
            document.head.appendChild(S),
            y)
          )
            return new Promise((x, C) => {
              (S.addEventListener('load', x),
                S.addEventListener('error', () => C(new Error(`Unable to preload CSS for ${h}`))));
            });
        }),
      );
    }
    function u(c) {
      const d = new Event('vite:preloadError', {cancelable: !0});
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented)) throw c;
    }
    return s.then((c) => {
      for (const d of c || []) d.status === 'rejected' && u(d.reason);
      return a().catch(u);
    });
  };
function Rb(t, a) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    (a &&
      (l = l.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      r.push.apply(r, l));
  }
  return r;
}
function Ab(t) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Rb(Object(r), !0).forEach(function (l) {
          nA(t, l, r[l]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Rb(Object(r)).forEach(function (l) {
            Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(r, l));
          });
  }
  return t;
}
function nA(t, a, r) {
  return (
    (a = aA(a)) in t
      ? Object.defineProperty(t, a, {value: r, enumerable: !0, configurable: !0, writable: !0})
      : (t[a] = r),
    t
  );
}
function aA(t) {
  var a = rA(t, 'string');
  return Li(a) == 'symbol' ? a : a + '';
}
function rA(t, a) {
  if (Li(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(t, a);
    if (Li(l) != 'object') return l;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (a === 'string' ? String : Number)(t);
}
function Li(t) {
  '@babel/helpers - typeof';
  return (
    (Li =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a && typeof Symbol == 'function' && a.constructor === Symbol && a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    Li(t)
  );
}
var Qr = typeof fetch == 'function' ? fetch : void 0;
typeof global < 'u' && global.fetch ? (Qr = global.fetch) : typeof window < 'u' && window.fetch && (Qr = window.fetch);
var us;
AS() &&
  (typeof global < 'u' && global.XMLHttpRequest
    ? (us = global.XMLHttpRequest)
    : typeof window < 'u' && window.XMLHttpRequest && (us = window.XMLHttpRequest));
var uc;
typeof ActiveXObject == 'function' &&
  (typeof global < 'u' && global.ActiveXObject
    ? (uc = global.ActiveXObject)
    : typeof window < 'u' && window.ActiveXObject && (uc = window.ActiveXObject));
typeof Qr != 'function' && (Qr = void 0);
if (!Qr && !us && !uc)
  try {
    tA(() => import('./browser-ponyfill-Bn8c9Fr1.js').then((t) => t.b), [])
      .then(function (t) {
        Qr = t.default;
      })
      .catch(function () {});
  } catch {}
var Bh = function (a, r) {
    if (r && Li(r) === 'object') {
      var l = '';
      for (var s in r) l += '&' + encodeURIComponent(s) + '=' + encodeURIComponent(r[s]);
      if (!l) return a;
      a = a + (a.indexOf('?') !== -1 ? '&' : '?') + l.slice(1);
    }
    return a;
  },
  Db = function (a, r, l, s) {
    var u = function (m) {
      if (!m.ok) return l(m.statusText || 'Error', {status: m.status});
      m.text()
        .then(function (h) {
          l(null, {status: m.status, data: h});
        })
        .catch(l);
    };
    if (s) {
      var c = s(a, r);
      if (c instanceof Promise) {
        c.then(u).catch(l);
        return;
      }
    }
    typeof fetch == 'function' ? fetch(a, r).then(u).catch(l) : Qr(a, r).then(u).catch(l);
  },
  Mb = !1,
  iA = function (a, r, l, s) {
    a.queryStringParams && (r = Bh(r, a.queryStringParams));
    var u = Ab({}, typeof a.customHeaders == 'function' ? a.customHeaders() : a.customHeaders);
    (typeof window > 'u' &&
      typeof global < 'u' &&
      typeof global.process < 'u' &&
      global.process.versions &&
      global.process.versions.node &&
      (u['User-Agent'] = 'i18next-http-backend (node/'
        .concat(global.process.version, '; ')
        .concat(global.process.platform, ' ')
        .concat(global.process.arch, ')')),
      l && (u['Content-Type'] = 'application/json'));
    var c = typeof a.requestOptions == 'function' ? a.requestOptions(l) : a.requestOptions,
      d = Ab({method: l ? 'POST' : 'GET', body: l ? a.stringify(l) : void 0, headers: u}, Mb ? {} : c),
      m = typeof a.alternateFetch == 'function' && a.alternateFetch.length >= 1 ? a.alternateFetch : void 0;
    try {
      Db(r, d, s, m);
    } catch (h) {
      if (!c || Object.keys(c).length === 0 || !h.message || h.message.indexOf('not implemented') < 0) return s(h);
      try {
        (Object.keys(c).forEach(function (y) {
          delete d[y];
        }),
          Db(r, d, s, m),
          (Mb = !0));
      } catch (y) {
        s(y);
      }
    }
  },
  lA = function (a, r, l, s) {
    (l && Li(l) === 'object' && (l = Bh('', l).slice(1)), a.queryStringParams && (r = Bh(r, a.queryStringParams)));
    try {
      var u = us ? new us() : new uc('MSXML2.XMLHTTP.3.0');
      (u.open(l ? 'POST' : 'GET', r, 1),
        a.crossDomain || u.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
        (u.withCredentials = !!a.withCredentials),
        l && u.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
        u.overrideMimeType && u.overrideMimeType('application/json'));
      var c = a.customHeaders;
      if (((c = typeof c == 'function' ? c() : c), c)) for (var d in c) u.setRequestHeader(d, c[d]);
      ((u.onreadystatechange = function () {
        u.readyState > 3 && s(u.status >= 400 ? u.statusText : null, {status: u.status, data: u.responseText});
      }),
        u.send(l));
    } catch (m) {
      console && console.log(m);
    }
  },
  oA = function (a, r, l, s) {
    if ((typeof l == 'function' && ((s = l), (l = void 0)), (s = s || function () {}), Qr && r.indexOf('file:') !== 0))
      return iA(a, r, l, s);
    if (AS() || typeof ActiveXObject == 'function') return lA(a, r, l, s);
    s(new Error('No fetch and no xhr implementation found!'));
  };
function $l(t) {
  '@babel/helpers - typeof';
  return (
    ($l =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a && typeof Symbol == 'function' && a.constructor === Symbol && a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    $l(t)
  );
}
function Nb(t, a) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    (a &&
      (l = l.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      r.push.apply(r, l));
  }
  return r;
}
function ch(t) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Nb(Object(r), !0).forEach(function (l) {
          DS(t, l, r[l]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Nb(Object(r)).forEach(function (l) {
            Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(r, l));
          });
  }
  return t;
}
function sA(t, a) {
  if (!(t instanceof a)) throw new TypeError('Cannot call a class as a function');
}
function uA(t, a) {
  for (var r = 0; r < a.length; r++) {
    var l = a[r];
    ((l.enumerable = l.enumerable || !1),
      (l.configurable = !0),
      'value' in l && (l.writable = !0),
      Object.defineProperty(t, MS(l.key), l));
  }
}
function cA(t, a, r) {
  return (a && uA(t.prototype, a), Object.defineProperty(t, 'prototype', {writable: !1}), t);
}
function DS(t, a, r) {
  return (
    (a = MS(a)) in t
      ? Object.defineProperty(t, a, {value: r, enumerable: !0, configurable: !0, writable: !0})
      : (t[a] = r),
    t
  );
}
function MS(t) {
  var a = fA(t, 'string');
  return $l(a) == 'symbol' ? a : a + '';
}
function fA(t, a) {
  if ($l(t) != 'object' || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(t, a);
    if ($l(l) != 'object') return l;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(t);
}
var dA = function () {
    return {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      parse: function (r) {
        return JSON.parse(r);
      },
      stringify: JSON.stringify,
      parsePayload: function (r, l, s) {
        return DS({}, l, s || '');
      },
      parseLoadPayload: function (r, l) {},
      request: oA,
      reloadInterval: typeof window < 'u' ? !1 : 3600 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {mode: 'cors', credentials: 'same-origin', cache: 'default'},
    };
  },
  NS = (function () {
    function t(a) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      (sA(this, t),
        (this.services = a),
        (this.options = r),
        (this.allOptions = l),
        (this.type = 'backend'),
        this.init(a, r, l));
    }
    return cA(t, [
      {
        key: 'init',
        value: function (r) {
          var l = this,
            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (
            ((this.services = r),
            (this.options = ch(ch(ch({}, dA()), this.options || {}), s)),
            (this.allOptions = u),
            this.services && this.options.reloadInterval)
          ) {
            var c = setInterval(function () {
              return l.reload();
            }, this.options.reloadInterval);
            $l(c) === 'object' && typeof c.unref == 'function' && c.unref();
          }
        },
      },
      {
        key: 'readMulti',
        value: function (r, l, s) {
          this._readAny(r, r, l, l, s);
        },
      },
      {
        key: 'read',
        value: function (r, l, s) {
          this._readAny([r], r, [l], l, s);
        },
      },
      {
        key: '_readAny',
        value: function (r, l, s, u, c) {
          var d = this,
            m = this.options.loadPath;
          (typeof this.options.loadPath == 'function' && (m = this.options.loadPath(r, s)),
            (m = JR(m)),
            m.then(function (h) {
              if (!h) return c(null, {});
              var y = d.services.interpolator.interpolate(h, {lng: r.join('+'), ns: s.join('+')});
              d.loadUrl(y, c, l, u);
            }));
        },
      },
      {
        key: 'loadUrl',
        value: function (r, l, s, u) {
          var c = this,
            d = typeof s == 'string' ? [s] : s,
            m = typeof u == 'string' ? [u] : u,
            h = this.options.parseLoadPayload(d, m);
          this.options.request(this.options, r, h, function (y, g) {
            if (g && ((g.status >= 500 && g.status < 600) || !g.status))
              return l('failed loading ' + r + '; status code: ' + g.status, !0);
            if (g && g.status >= 400 && g.status < 500)
              return l('failed loading ' + r + '; status code: ' + g.status, !1);
            if (!g && y && y.message) {
              var S = y.message.toLowerCase(),
                x = ['failed', 'fetch', 'network', 'load'].find(function (T) {
                  return S.indexOf(T) > -1;
                });
              if (x) return l('failed loading ' + r + ': ' + y.message, !0);
            }
            if (y) return l(y, !1);
            var C, w;
            try {
              typeof g.data == 'string' ? (C = c.options.parse(g.data, s, u)) : (C = g.data);
            } catch {
              w = 'failed parsing ' + r + ' to json';
            }
            if (w) return l(w, !1);
            l(null, C);
          });
        },
      },
      {
        key: 'create',
        value: function (r, l, s, u, c) {
          var d = this;
          if (this.options.addPath) {
            typeof r == 'string' && (r = [r]);
            var m = this.options.parsePayload(l, s, u),
              h = 0,
              y = [],
              g = [];
            r.forEach(function (S) {
              var x = d.options.addPath;
              typeof d.options.addPath == 'function' && (x = d.options.addPath(S, l));
              var C = d.services.interpolator.interpolate(x, {lng: S, ns: l});
              d.options.request(d.options, C, m, function (w, T) {
                ((h += 1), y.push(w), g.push(T), h === r.length && typeof c == 'function' && c(y, g));
              });
            });
          }
        },
      },
      {
        key: 'reload',
        value: function () {
          var r = this,
            l = this.services,
            s = l.backendConnector,
            u = l.languageUtils,
            c = l.logger,
            d = s.language;
          if (!(d && d.toLowerCase() === 'cimode')) {
            var m = [],
              h = function (g) {
                var S = u.toResolveHierarchy(g);
                S.forEach(function (x) {
                  m.indexOf(x) < 0 && m.push(x);
                });
              };
            (h(d),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (y) {
                  return h(y);
                }),
              m.forEach(function (y) {
                r.allOptions.ns.forEach(function (g) {
                  s.read(y, g, 'read', null, null, function (S, x) {
                    (S && c.warn('loading namespace '.concat(g, ' for language ').concat(y, ' failed'), S),
                      !S && x && c.log('loaded namespace '.concat(g, ' for language ').concat(y), x),
                      s.loaded(''.concat(y, '|').concat(g), S, x));
                  });
                });
              }));
          }
        },
      },
    ]);
  })();
NS.type = 'backend';
on.use(NS)
  .use(qR)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    defaultNS: 'translation',
    debug: !1,
    interpolation: {escapeValue: !1},
    backend: {loadPath: '/locales/{{lng}}.json'},
  });
var fh, _b;
function hA() {
  if (_b) return fh;
  _b = 1;
  var t = typeof Element < 'u',
    a = typeof Map == 'function',
    r = typeof Set == 'function',
    l = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
  function s(u, c) {
    if (u === c) return !0;
    if (u && c && typeof u == 'object' && typeof c == 'object') {
      if (u.constructor !== c.constructor) return !1;
      var d, m, h;
      if (Array.isArray(u)) {
        if (((d = u.length), d != c.length)) return !1;
        for (m = d; m-- !== 0; ) if (!s(u[m], c[m])) return !1;
        return !0;
      }
      var y;
      if (a && u instanceof Map && c instanceof Map) {
        if (u.size !== c.size) return !1;
        for (y = u.entries(); !(m = y.next()).done; ) if (!c.has(m.value[0])) return !1;
        for (y = u.entries(); !(m = y.next()).done; ) if (!s(m.value[1], c.get(m.value[0]))) return !1;
        return !0;
      }
      if (r && u instanceof Set && c instanceof Set) {
        if (u.size !== c.size) return !1;
        for (y = u.entries(); !(m = y.next()).done; ) if (!c.has(m.value[0])) return !1;
        return !0;
      }
      if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(c)) {
        if (((d = u.length), d != c.length)) return !1;
        for (m = d; m-- !== 0; ) if (u[m] !== c[m]) return !1;
        return !0;
      }
      if (u.constructor === RegExp) return u.source === c.source && u.flags === c.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == 'function' && typeof c.valueOf == 'function')
        return u.valueOf() === c.valueOf();
      if (
        u.toString !== Object.prototype.toString &&
        typeof u.toString == 'function' &&
        typeof c.toString == 'function'
      )
        return u.toString() === c.toString();
      if (((h = Object.keys(u)), (d = h.length), d !== Object.keys(c).length)) return !1;
      for (m = d; m-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(c, h[m])) return !1;
      if (t && u instanceof Element) return !1;
      for (m = d; m-- !== 0; )
        if (!((h[m] === '_owner' || h[m] === '__v' || h[m] === '__o') && u.$$typeof) && !s(u[h[m]], c[h[m]])) return !1;
      return !0;
    }
    return u !== u && c !== c;
  }
  return (
    (fh = function (c, d) {
      try {
        return s(c, d);
      } catch (m) {
        if ((m.message || '').match(/stack|recursion/i))
          return (console.warn('react-fast-compare cannot handle circular refs'), !1);
        throw m;
      }
    }),
    fh
  );
}
var mA = hA();
const pA = gs(mA);
var dh, Lb;
function gA() {
  if (Lb) return dh;
  Lb = 1;
  var t = function (a, r, l, s, u, c, d, m) {
    if (!a) {
      var h;
      if (r === void 0)
        h = new Error(
          'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
        );
      else {
        var y = [l, s, u, c, d, m],
          g = 0;
        ((h = new Error(
          r.replace(/%s/g, function () {
            return y[g++];
          }),
        )),
          (h.name = 'Invariant Violation'));
      }
      throw ((h.framesToPop = 1), h);
    }
  };
  return ((dh = t), dh);
}
var yA = gA();
const jb = gs(yA);
var hh, zb;
function vA() {
  return (
    zb ||
      ((zb = 1),
      (hh = function (a, r, l, s) {
        var u = l ? l.call(s, a, r) : void 0;
        if (u !== void 0) return !!u;
        if (a === r) return !0;
        if (typeof a != 'object' || !a || typeof r != 'object' || !r) return !1;
        var c = Object.keys(a),
          d = Object.keys(r);
        if (c.length !== d.length) return !1;
        for (var m = Object.prototype.hasOwnProperty.bind(r), h = 0; h < c.length; h++) {
          var y = c[h];
          if (!m(y)) return !1;
          var g = a[y],
            S = r[y];
          if (((u = l ? l.call(s, g, S, y) : void 0), u === !1 || (u === void 0 && g !== S))) return !1;
        }
        return !0;
      })),
    hh
  );
}
var bA = vA();
const SA = gs(bA);
var _S = ((t) => (
    (t.BASE = 'base'),
    (t.BODY = 'body'),
    (t.HEAD = 'head'),
    (t.HTML = 'html'),
    (t.LINK = 'link'),
    (t.META = 'meta'),
    (t.NOSCRIPT = 'noscript'),
    (t.SCRIPT = 'script'),
    (t.STYLE = 'style'),
    (t.TITLE = 'title'),
    (t.FRAGMENT = 'Symbol(react.fragment)'),
    t
  ))(_S || {}),
  mh = {
    link: {rel: ['amphtml', 'canonical', 'alternate']},
    script: {type: ['application/ld+json']},
    meta: {
      charset: '',
      name: ['generator', 'robots', 'description'],
      property: [
        'og:type',
        'og:title',
        'og:url',
        'og:image',
        'og:image:alt',
        'og:description',
        'twitter:url',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:card',
        'twitter:site',
      ],
    },
  },
  Ub = Object.values(_S),
  vm = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  xA = Object.entries(vm).reduce((t, [a, r]) => ((t[r] = a), t), {}),
  da = 'data-rh',
  Ml = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
    PRIORITIZE_SEO_TAGS: 'prioritizeSeoTags',
  },
  Nl = (t, a) => {
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const l = t[r];
      if (Object.prototype.hasOwnProperty.call(l, a)) return l[a];
    }
    return null;
  },
  wA = (t) => {
    let a = Nl(t, 'title');
    const r = Nl(t, Ml.TITLE_TEMPLATE);
    if ((Array.isArray(a) && (a = a.join('')), r && a)) return r.replace(/%s/g, () => a);
    const l = Nl(t, Ml.DEFAULT_TITLE);
    return a || l || void 0;
  },
  EA = (t) => Nl(t, Ml.ON_CHANGE_CLIENT_STATE) || (() => {}),
  ph = (t, a) =>
    a
      .filter((r) => typeof r[t] < 'u')
      .map((r) => r[t])
      .reduce((r, l) => ({...r, ...l}), {}),
  CA = (t, a) =>
    a
      .filter((r) => typeof r.base < 'u')
      .map((r) => r.base)
      .reverse()
      .reduce((r, l) => {
        if (!r.length) {
          const s = Object.keys(l);
          for (let u = 0; u < s.length; u += 1) {
            const d = s[u].toLowerCase();
            if (t.indexOf(d) !== -1 && l[d]) return r.concat(l);
          }
        }
        return r;
      }, []),
  TA = (t) => console && typeof console.warn == 'function' && console.warn(t),
  Io = (t, a, r) => {
    const l = {};
    return r
      .filter((s) =>
        Array.isArray(s[t])
          ? !0
          : (typeof s[t] < 'u' && TA(`Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`),
            !1),
      )
      .map((s) => s[t])
      .reverse()
      .reduce((s, u) => {
        const c = {};
        u.filter((m) => {
          let h;
          const y = Object.keys(m);
          for (let S = 0; S < y.length; S += 1) {
            const x = y[S],
              C = x.toLowerCase();
            (a.indexOf(C) !== -1 &&
              !(h === 'rel' && m[h].toLowerCase() === 'canonical') &&
              !(C === 'rel' && m[C].toLowerCase() === 'stylesheet') &&
              (h = C),
              a.indexOf(x) !== -1 && (x === 'innerHTML' || x === 'cssText' || x === 'itemprop') && (h = x));
          }
          if (!h || !m[h]) return !1;
          const g = m[h].toLowerCase();
          return (l[h] || (l[h] = {}), c[h] || (c[h] = {}), l[h][g] ? !1 : ((c[h][g] = !0), !0));
        })
          .reverse()
          .forEach((m) => s.push(m));
        const d = Object.keys(c);
        for (let m = 0; m < d.length; m += 1) {
          const h = d[m],
            y = {...l[h], ...c[h]};
          l[h] = y;
        }
        return s;
      }, [])
      .reverse();
  },
  OA = (t, a) => {
    if (Array.isArray(t) && t.length) {
      for (let r = 0; r < t.length; r += 1) if (t[r][a]) return !0;
    }
    return !1;
  },
  RA = (t) => ({
    baseTag: CA(['href'], t),
    bodyAttributes: ph('bodyAttributes', t),
    defer: Nl(t, Ml.DEFER),
    encode: Nl(t, Ml.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: ph('htmlAttributes', t),
    linkTags: Io('link', ['rel', 'href'], t),
    metaTags: Io('meta', ['name', 'charset', 'http-equiv', 'property', 'itemprop'], t),
    noscriptTags: Io('noscript', ['innerHTML'], t),
    onChangeClientState: EA(t),
    scriptTags: Io('script', ['src', 'innerHTML'], t),
    styleTags: Io('style', ['cssText'], t),
    title: wA(t),
    titleAttributes: ph('titleAttributes', t),
    prioritizeSeoTags: OA(t, Ml.PRIORITIZE_SEO_TAGS),
  }),
  LS = (t) => (Array.isArray(t) ? t.join('') : t),
  AA = (t, a) => {
    const r = Object.keys(t);
    for (let l = 0; l < r.length; l += 1) if (a[r[l]] && a[r[l]].includes(t[r[l]])) return !0;
    return !1;
  },
  gh = (t, a) =>
    Array.isArray(t)
      ? t.reduce((r, l) => (AA(l, a) ? r.priority.push(l) : r.default.push(l), r), {priority: [], default: []})
      : {default: t, priority: []},
  Hb = (t, a) => ({...t, [a]: void 0}),
  DA = ['noscript', 'script', 'style'],
  kh = (t, a = !0) =>
    a === !1
      ? String(t)
      : String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;'),
  jS = (t) =>
    Object.keys(t).reduce((a, r) => {
      const l = typeof t[r] < 'u' ? `${r}="${t[r]}"` : `${r}`;
      return a ? `${a} ${l}` : l;
    }, ''),
  MA = (t, a, r, l) => {
    const s = jS(r),
      u = LS(a);
    return s ? `<${t} ${da}="true" ${s}>${kh(u, l)}</${t}>` : `<${t} ${da}="true">${kh(u, l)}</${t}>`;
  },
  NA = (t, a, r = !0) =>
    a.reduce((l, s) => {
      const u = s,
        c = Object.keys(u)
          .filter((h) => !(h === 'innerHTML' || h === 'cssText'))
          .reduce((h, y) => {
            const g = typeof u[y] > 'u' ? y : `${y}="${kh(u[y], r)}"`;
            return h ? `${h} ${g}` : g;
          }, ''),
        d = u.innerHTML || u.cssText || '',
        m = DA.indexOf(t) === -1;
      return `${l}<${t} ${da}="true" ${c}${m ? '/>' : `>${d}</${t}>`}`;
    }, ''),
  zS = (t, a = {}) =>
    Object.keys(t).reduce((r, l) => {
      const s = vm[l];
      return ((r[s || l] = t[l]), r);
    }, a),
  _A = (t, a, r) => {
    const l = {key: a, [da]: !0},
      s = zS(r, l);
    return [oe.createElement('title', s, a)];
  },
  tc = (t, a) =>
    a.map((r, l) => {
      const s = {key: l, [da]: !0};
      return (
        Object.keys(r).forEach((u) => {
          const d = vm[u] || u;
          if (d === 'innerHTML' || d === 'cssText') {
            const m = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = {__html: m};
          } else s[d] = r[u];
        }),
        oe.createElement(t, s)
      );
    }),
  Qn = (t, a, r = !0) => {
    switch (t) {
      case 'title':
        return {
          toComponent: () => _A(t, a.title, a.titleAttributes),
          toString: () => MA(t, a.title, a.titleAttributes, r),
        };
      case 'bodyAttributes':
      case 'htmlAttributes':
        return {toComponent: () => zS(a), toString: () => jS(a)};
      default:
        return {toComponent: () => tc(t, a), toString: () => NA(t, a, r)};
    }
  },
  LA = ({metaTags: t, linkTags: a, scriptTags: r, encode: l}) => {
    const s = gh(t, mh.meta),
      u = gh(a, mh.link),
      c = gh(r, mh.script);
    return {
      priorityMethods: {
        toComponent: () => [...tc('meta', s.priority), ...tc('link', u.priority), ...tc('script', c.priority)],
        toString: () => `${Qn('meta', s.priority, l)} ${Qn('link', u.priority, l)} ${Qn('script', c.priority, l)}`,
      },
      metaTags: s.default,
      linkTags: u.default,
      scriptTags: c.default,
    };
  },
  jA = (t) => {
    const {
      baseTag: a,
      bodyAttributes: r,
      encode: l = !0,
      htmlAttributes: s,
      noscriptTags: u,
      styleTags: c,
      title: d = '',
      titleAttributes: m,
      prioritizeSeoTags: h,
    } = t;
    let {linkTags: y, metaTags: g, scriptTags: S} = t,
      x = {toComponent: () => {}, toString: () => ''};
    return (
      h && ({priorityMethods: x, linkTags: y, metaTags: g, scriptTags: S} = LA(t)),
      {
        priority: x,
        base: Qn('base', a, l),
        bodyAttributes: Qn('bodyAttributes', r, l),
        htmlAttributes: Qn('htmlAttributes', s, l),
        link: Qn('link', y, l),
        meta: Qn('meta', g, l),
        noscript: Qn('noscript', u, l),
        script: Qn('script', S, l),
        style: Qn('style', c, l),
        title: Qn('title', {title: d, titleAttributes: m}, l),
      }
    );
  },
  Ph = jA,
  Pu = [],
  US = !!(typeof window < 'u' && window.document && window.document.createElement),
  Vh = class {
    constructor(t, a) {
      ar(this, 'instances', []);
      ar(this, 'canUseDOM', US);
      ar(this, 'context');
      ar(this, 'value', {
        setHelmet: (t) => {
          this.context.helmet = t;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Pu : this.instances),
          add: (t) => {
            (this.canUseDOM ? Pu : this.instances).push(t);
          },
          remove: (t) => {
            const a = (this.canUseDOM ? Pu : this.instances).indexOf(t);
            (this.canUseDOM ? Pu : this.instances).splice(a, 1);
          },
        },
      });
      ((this.context = t),
        (this.canUseDOM = a || !1),
        a ||
          (t.helmet = Ph({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: '',
            titleAttributes: {},
          })));
    }
  },
  zA = {},
  HS = oe.createContext(zA),
  Ti,
  BS =
    ((Ti = class extends b.Component {
      constructor(r) {
        super(r);
        ar(this, 'helmetData');
        this.helmetData = new Vh(this.props.context || {}, Ti.canUseDOM);
      }
      render() {
        return oe.createElement(HS.Provider, {value: this.helmetData.value}, this.props.children);
      }
    }),
    ar(Ti, 'canUseDOM', US),
    Ti),
  wl = (t, a) => {
    const r = document.head || document.querySelector('head'),
      l = r.querySelectorAll(`${t}[${da}]`),
      s = [].slice.call(l),
      u = [];
    let c;
    return (
      a &&
        a.length &&
        a.forEach((d) => {
          const m = document.createElement(t);
          for (const h in d)
            if (Object.prototype.hasOwnProperty.call(d, h))
              if (h === 'innerHTML') m.innerHTML = d.innerHTML;
              else if (h === 'cssText')
                m.styleSheet ? (m.styleSheet.cssText = d.cssText) : m.appendChild(document.createTextNode(d.cssText));
              else {
                const y = h,
                  g = typeof d[y] > 'u' ? '' : d[y];
                m.setAttribute(h, g);
              }
          (m.setAttribute(da, 'true'), s.some((h, y) => ((c = y), m.isEqualNode(h))) ? s.splice(c, 1) : u.push(m));
        }),
      s.forEach((d) => {
        var m;
        return (m = d.parentNode) == null ? void 0 : m.removeChild(d);
      }),
      u.forEach((d) => r.appendChild(d)),
      {oldTags: s, newTags: u}
    );
  },
  qh = (t, a) => {
    const r = document.getElementsByTagName(t)[0];
    if (!r) return;
    const l = r.getAttribute(da),
      s = l ? l.split(',') : [],
      u = [...s],
      c = Object.keys(a);
    for (const d of c) {
      const m = a[d] || '';
      (r.getAttribute(d) !== m && r.setAttribute(d, m), s.indexOf(d) === -1 && s.push(d));
      const h = u.indexOf(d);
      h !== -1 && u.splice(h, 1);
    }
    for (let d = u.length - 1; d >= 0; d -= 1) r.removeAttribute(u[d]);
    s.length === u.length
      ? r.removeAttribute(da)
      : r.getAttribute(da) !== c.join(',') && r.setAttribute(da, c.join(','));
  },
  UA = (t, a) => {
    (typeof t < 'u' && document.title !== t && (document.title = LS(t)), qh('title', a));
  },
  Bb = (t, a) => {
    const {
      baseTag: r,
      bodyAttributes: l,
      htmlAttributes: s,
      linkTags: u,
      metaTags: c,
      noscriptTags: d,
      onChangeClientState: m,
      scriptTags: h,
      styleTags: y,
      title: g,
      titleAttributes: S,
    } = t;
    (qh('body', l), qh('html', s), UA(g, S));
    const x = {
        baseTag: wl('base', r),
        linkTags: wl('link', u),
        metaTags: wl('meta', c),
        noscriptTags: wl('noscript', d),
        scriptTags: wl('script', h),
        styleTags: wl('style', y),
      },
      C = {},
      w = {};
    (Object.keys(x).forEach((T) => {
      const {newTags: R, oldTags: A} = x[T];
      (R.length && (C[T] = R), A.length && (w[T] = x[T].oldTags));
    }),
      a && a(),
      m(t, C, w));
  },
  Zo = null,
  HA = (t) => {
    (Zo && cancelAnimationFrame(Zo),
      t.defer
        ? (Zo = requestAnimationFrame(() => {
            Bb(t, () => {
              Zo = null;
            });
          }))
        : (Bb(t), (Zo = null)));
  },
  BA = HA,
  kb = class extends b.Component {
    constructor() {
      super(...arguments);
      ar(this, 'rendered', !1);
    }
    shouldComponentUpdate(a) {
      return !SA(a, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const {helmetInstances: a} = this.props.context;
      (a.remove(this), this.emitChange());
    }
    emitChange() {
      const {helmetInstances: a, setHelmet: r} = this.props.context;
      let l = null;
      const s = RA(
        a.get().map((u) => {
          const c = {...u.props};
          return (delete c.context, c);
        }),
      );
      (BS.canUseDOM ? BA(s) : Ph && (l = Ph(s)), r(l));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const {helmetInstances: a} = this.props.context;
      (a.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  Ah,
  kA =
    ((Ah = class extends b.Component {
      shouldComponentUpdate(t) {
        return !pA(Hb(this.props, 'helmetData'), Hb(t, 'helmetData'));
      }
      mapNestedChildrenToProps(t, a) {
        if (!a) return null;
        switch (t.type) {
          case 'script':
          case 'noscript':
            return {innerHTML: a};
          case 'style':
            return {cssText: a};
          default:
            throw new Error(
              `<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(t, a, r, l) {
        return {...a, [t.type]: [...(a[t.type] || []), {...r, ...this.mapNestedChildrenToProps(t, l)}]};
      }
      mapObjectTypeChildren(t, a, r, l) {
        switch (t.type) {
          case 'title':
            return {...a, [t.type]: l, titleAttributes: {...r}};
          case 'body':
            return {...a, bodyAttributes: {...r}};
          case 'html':
            return {...a, htmlAttributes: {...r}};
          default:
            return {...a, [t.type]: {...r}};
        }
      }
      mapArrayTypeChildrenToProps(t, a) {
        let r = {...a};
        return (
          Object.keys(t).forEach((l) => {
            r = {...r, [l]: t[l]};
          }),
          r
        );
      }
      warnOnInvalidChildren(t, a) {
        return (
          jb(
            Ub.some((r) => t.type === r),
            typeof t.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : `Only elements types ${Ub.join(', ')} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`,
          ),
          jb(
            !a || typeof a == 'string' || (Array.isArray(a) && !a.some((r) => typeof r != 'string')),
            `Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(t, a) {
        let r = {};
        return (
          oe.Children.forEach(t, (l) => {
            if (!l || !l.props) return;
            const {children: s, ...u} = l.props,
              c = Object.keys(u).reduce((m, h) => ((m[xA[h] || h] = u[h]), m), {});
            let {type: d} = l;
            switch ((typeof d == 'symbol' ? (d = d.toString()) : this.warnOnInvalidChildren(l, s), d)) {
              case 'Symbol(react.fragment)':
                a = this.mapChildrenToProps(s, a);
                break;
              case 'link':
              case 'meta':
              case 'noscript':
              case 'script':
              case 'style':
                r = this.flattenArrayTypeChildren(l, r, c, s);
                break;
              default:
                a = this.mapObjectTypeChildren(l, a, c, s);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(r, a)
        );
      }
      render() {
        const {children: t, ...a} = this.props;
        let r = {...a},
          {helmetData: l} = a;
        if ((t && (r = this.mapChildrenToProps(t, r)), l && !(l instanceof Vh))) {
          const s = l;
          ((l = new Vh(s.context, !0)), delete r.helmetData);
        }
        return l
          ? oe.createElement(kb, {...r, context: l.value})
          : oe.createElement(HS.Consumer, null, (s) => oe.createElement(kb, {...r, context: s}));
      }
    }),
    ar(Ah, 'defaultProps', {defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1}),
    Ah);
const PA = ['en', 'zh'];
function VA() {
  const {locale: t} = hm(),
    a = Ss(),
    {i18n: r} = Xl();
  return (
    b.useEffect(() => {
      if (!t || !PA.includes(t)) {
        a('/en', {replace: !0});
        return;
      }
      r.language !== t && r.changeLanguage(t);
    }, [t, r, a]),
    null
  );
}
var Rc = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(t), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  qA = {
    setTimeout: (t, a) => setTimeout(t, a),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, a) => setInterval(t, a),
    clearInterval: (t) => clearInterval(t),
  },
  qr,
  lm,
  L0,
  YA =
    ((L0 = class {
      constructor() {
        We(this, qr, qA);
        We(this, lm, !1);
      }
      setTimeoutProvider(t) {
        je(this, qr, t);
      }
      setTimeout(t, a) {
        return W(this, qr).setTimeout(t, a);
      }
      clearTimeout(t) {
        W(this, qr).clearTimeout(t);
      }
      setInterval(t, a) {
        return W(this, qr).setInterval(t, a);
      }
      clearInterval(t) {
        W(this, qr).clearInterval(t);
      }
    }),
    (qr = new WeakMap()),
    (lm = new WeakMap()),
    L0),
  Yh = new YA();
function $A(t) {
  setTimeout(t, 0);
}
var Ac = typeof window > 'u' || 'Deno' in globalThis;
function ua() {}
function FA(t, a) {
  return typeof t == 'function' ? t(a) : t;
}
function GA(t) {
  return typeof t == 'number' && t >= 0 && t !== 1 / 0;
}
function KA(t, a) {
  return Math.max(t + (a || 0) - Date.now(), 0);
}
function $h(t, a) {
  return typeof t == 'function' ? t(a) : t;
}
function XA(t, a) {
  return typeof t == 'function' ? t(a) : t;
}
function Pb(t, a) {
  const {type: r = 'all', exact: l, fetchStatus: s, predicate: u, queryKey: c, stale: d} = t;
  if (c) {
    if (l) {
      if (a.queryHash !== bm(c, a.options)) return !1;
    } else if (!fs(a.queryKey, c)) return !1;
  }
  if (r !== 'all') {
    const m = a.isActive();
    if ((r === 'active' && !m) || (r === 'inactive' && m)) return !1;
  }
  return !((typeof d == 'boolean' && a.isStale() !== d) || (s && s !== a.state.fetchStatus) || (u && !u(a)));
}
function Vb(t, a) {
  const {exact: r, status: l, predicate: s, mutationKey: u} = t;
  if (u) {
    if (!a.options.mutationKey) return !1;
    if (r) {
      if (cs(a.options.mutationKey) !== cs(u)) return !1;
    } else if (!fs(a.options.mutationKey, u)) return !1;
  }
  return !((l && a.state.status !== l) || (s && !s(a)));
}
function bm(t, a) {
  return ((a == null ? void 0 : a.queryKeyHashFn) || cs)(t);
}
function cs(t) {
  return JSON.stringify(t, (a, r) =>
    Fh(r)
      ? Object.keys(r)
          .sort()
          .reduce((l, s) => ((l[s] = r[s]), l), {})
      : r,
  );
}
function fs(t, a) {
  return t === a
    ? !0
    : typeof t != typeof a
      ? !1
      : t && a && typeof t == 'object' && typeof a == 'object'
        ? Object.keys(a).every((r) => fs(t[r], a[r]))
        : !1;
}
var QA = Object.prototype.hasOwnProperty;
function kS(t, a, r = 0) {
  if (t === a) return t;
  if (r > 500) return a;
  const l = qb(t) && qb(a);
  if (!l && !(Fh(t) && Fh(a))) return a;
  const u = (l ? t : Object.keys(t)).length,
    c = l ? a : Object.keys(a),
    d = c.length,
    m = l ? new Array(d) : {};
  let h = 0;
  for (let y = 0; y < d; y++) {
    const g = l ? y : c[y],
      S = t[g],
      x = a[g];
    if (S === x) {
      ((m[g] = S), (l ? y < u : QA.call(t, g)) && h++);
      continue;
    }
    if (S === null || x === null || typeof S != 'object' || typeof x != 'object') {
      m[g] = x;
      continue;
    }
    const C = kS(S, x, r + 1);
    ((m[g] = C), C === S && h++);
  }
  return u === d && h === u ? t : m;
}
function qb(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Fh(t) {
  if (!Yb(t)) return !1;
  const a = t.constructor;
  if (a === void 0) return !0;
  const r = a.prototype;
  return !(!Yb(r) || !r.hasOwnProperty('isPrototypeOf') || Object.getPrototypeOf(t) !== Object.prototype);
}
function Yb(t) {
  return Object.prototype.toString.call(t) === '[object Object]';
}
function IA(t) {
  return new Promise((a) => {
    Yh.setTimeout(a, t);
  });
}
function ZA(t, a, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(t, a)
    : r.structuralSharing !== !1
      ? kS(t, a)
      : a;
}
function JA(t, a, r = 0) {
  const l = [...t, a];
  return r && l.length > r ? l.slice(1) : l;
}
function WA(t, a, r = 0) {
  const l = [a, ...t];
  return r && l.length > r ? l.slice(0, -1) : l;
}
var Sm = Symbol();
function PS(t, a) {
  return !t.queryFn && a != null && a.initialPromise
    ? () => a.initialPromise
    : !t.queryFn || t.queryFn === Sm
      ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
      : t.queryFn;
}
function e2(t, a, r) {
  let l = !1,
    s;
  return (
    Object.defineProperty(t, 'signal', {
      enumerable: !0,
      get: () => (s ?? (s = a()), l || ((l = !0), s.aborted ? r() : s.addEventListener('abort', r, {once: !0})), s),
    }),
    t
  );
}
var Oi,
  Yr,
  Ul,
  j0,
  t2 =
    ((j0 = class extends Rc {
      constructor() {
        super();
        We(this, Oi);
        We(this, Yr);
        We(this, Ul);
        je(this, Ul, (a) => {
          if (!Ac && window.addEventListener) {
            const r = () => a();
            return (
              window.addEventListener('visibilitychange', r, !1),
              () => {
                window.removeEventListener('visibilitychange', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        W(this, Yr) || this.setEventListener(W(this, Ul));
      }
      onUnsubscribe() {
        var a;
        this.hasListeners() || ((a = W(this, Yr)) == null || a.call(this), je(this, Yr, void 0));
      }
      setEventListener(a) {
        var r;
        (je(this, Ul, a),
          (r = W(this, Yr)) == null || r.call(this),
          je(
            this,
            Yr,
            a((l) => {
              typeof l == 'boolean' ? this.setFocused(l) : this.onFocus();
            }),
          ));
      }
      setFocused(a) {
        W(this, Oi) !== a && (je(this, Oi, a), this.onFocus());
      }
      onFocus() {
        const a = this.isFocused();
        this.listeners.forEach((r) => {
          r(a);
        });
      }
      isFocused() {
        var a;
        return typeof W(this, Oi) == 'boolean'
          ? W(this, Oi)
          : ((a = globalThis.document) == null ? void 0 : a.visibilityState) !== 'hidden';
      }
    }),
    (Oi = new WeakMap()),
    (Yr = new WeakMap()),
    (Ul = new WeakMap()),
    j0),
  VS = new t2();
function n2() {
  let t, a;
  const r = new Promise((s, u) => {
    ((t = s), (a = u));
  });
  ((r.status = 'pending'), r.catch(() => {}));
  function l(s) {
    (Object.assign(r, s), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (s) => {
      (l({status: 'fulfilled', value: s}), t(s));
    }),
    (r.reject = (s) => {
      (l({status: 'rejected', reason: s}), a(s));
    }),
    r
  );
}
var a2 = $A;
function r2() {
  let t = [],
    a = 0,
    r = (d) => {
      d();
    },
    l = (d) => {
      d();
    },
    s = a2;
  const u = (d) => {
      a
        ? t.push(d)
        : s(() => {
            r(d);
          });
    },
    c = () => {
      const d = t;
      ((t = []),
        d.length &&
          s(() => {
            l(() => {
              d.forEach((m) => {
                r(m);
              });
            });
          }));
    };
  return {
    batch: (d) => {
      let m;
      a++;
      try {
        m = d();
      } finally {
        (a--, a || c());
      }
      return m;
    },
    batchCalls:
      (d) =>
      (...m) => {
        u(() => {
          d(...m);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      r = d;
    },
    setBatchNotifyFunction: (d) => {
      l = d;
    },
    setScheduler: (d) => {
      s = d;
    },
  };
}
var fn = r2(),
  Hl,
  $r,
  Bl,
  z0,
  i2 =
    ((z0 = class extends Rc {
      constructor() {
        super();
        We(this, Hl, !0);
        We(this, $r);
        We(this, Bl);
        je(this, Bl, (a) => {
          if (!Ac && window.addEventListener) {
            const r = () => a(!0),
              l = () => a(!1);
            return (
              window.addEventListener('online', r, !1),
              window.addEventListener('offline', l, !1),
              () => {
                (window.removeEventListener('online', r), window.removeEventListener('offline', l));
              }
            );
          }
        });
      }
      onSubscribe() {
        W(this, $r) || this.setEventListener(W(this, Bl));
      }
      onUnsubscribe() {
        var a;
        this.hasListeners() || ((a = W(this, $r)) == null || a.call(this), je(this, $r, void 0));
      }
      setEventListener(a) {
        var r;
        (je(this, Bl, a), (r = W(this, $r)) == null || r.call(this), je(this, $r, a(this.setOnline.bind(this))));
      }
      setOnline(a) {
        W(this, Hl) !== a &&
          (je(this, Hl, a),
          this.listeners.forEach((l) => {
            l(a);
          }));
      }
      isOnline() {
        return W(this, Hl);
      }
    }),
    (Hl = new WeakMap()),
    ($r = new WeakMap()),
    (Bl = new WeakMap()),
    z0),
  cc = new i2();
function l2(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function qS(t) {
  return (t ?? 'online') === 'online' ? cc.isOnline() : !0;
}
var Gh = class extends Error {
  constructor(t) {
    (super('CancelledError'),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent));
  }
};
function YS(t) {
  let a = !1,
    r = 0,
    l;
  const s = n2(),
    u = () => s.status !== 'pending',
    c = (w) => {
      var T;
      if (!u()) {
        const R = new Gh(w);
        (S(R), (T = t.onCancel) == null || T.call(t, R));
      }
    },
    d = () => {
      a = !0;
    },
    m = () => {
      a = !1;
    },
    h = () => VS.isFocused() && (t.networkMode === 'always' || cc.isOnline()) && t.canRun(),
    y = () => qS(t.networkMode) && t.canRun(),
    g = (w) => {
      u() || (l == null || l(), s.resolve(w));
    },
    S = (w) => {
      u() || (l == null || l(), s.reject(w));
    },
    x = () =>
      new Promise((w) => {
        var T;
        ((l = (R) => {
          (u() || h()) && w(R);
        }),
          (T = t.onPause) == null || T.call(t));
      }).then(() => {
        var w;
        ((l = void 0), u() || (w = t.onContinue) == null || w.call(t));
      }),
    C = () => {
      if (u()) return;
      let w;
      const T = r === 0 ? t.initialPromise : void 0;
      try {
        w = T ?? t.fn();
      } catch (R) {
        w = Promise.reject(R);
      }
      Promise.resolve(w)
        .then(g)
        .catch((R) => {
          var I;
          if (u()) return;
          const A = t.retry ?? (Ac ? 0 : 3),
            _ = t.retryDelay ?? l2,
            z = typeof _ == 'function' ? _(r, R) : _,
            $ = A === !0 || (typeof A == 'number' && r < A) || (typeof A == 'function' && A(r, R));
          if (a || !$) {
            S(R);
            return;
          }
          (r++,
            (I = t.onFail) == null || I.call(t, r, R),
            IA(z)
              .then(() => (h() ? void 0 : x()))
              .then(() => {
                a ? S(R) : C();
              }));
        });
    };
  return {
    promise: s,
    status: () => s.status,
    cancel: c,
    continue: () => (l == null || l(), s),
    cancelRetry: d,
    continueRetry: m,
    canStart: y,
    start: () => (y() ? C() : x().then(C), s),
  };
}
var Ri,
  U0,
  $S =
    ((U0 = class {
      constructor() {
        We(this, Ri);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          GA(this.gcTime) &&
            je(
              this,
              Ri,
              Yh.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Ac ? 1 / 0 : 300 * 1e3));
      }
      clearGcTimeout() {
        W(this, Ri) && (Yh.clearTimeout(W(this, Ri)), je(this, Ri, void 0));
      }
    }),
    (Ri = new WeakMap()),
    U0),
  Ai,
  kl,
  In,
  Di,
  Ft,
  hs,
  Mi,
  ca,
  lr,
  H0,
  o2 =
    ((H0 = class extends $S {
      constructor(a) {
        super();
        We(this, ca);
        We(this, Ai);
        We(this, kl);
        We(this, In);
        We(this, Di);
        We(this, Ft);
        We(this, hs);
        We(this, Mi);
        (je(this, Mi, !1),
          je(this, hs, a.defaultOptions),
          this.setOptions(a.options),
          (this.observers = []),
          je(this, Di, a.client),
          je(this, In, W(this, Di).getQueryCache()),
          (this.queryKey = a.queryKey),
          (this.queryHash = a.queryHash),
          je(this, Ai, Fb(this.options)),
          (this.state = a.state ?? W(this, Ai)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var a;
        return (a = W(this, Ft)) == null ? void 0 : a.promise;
      }
      setOptions(a) {
        if (
          ((this.options = {...W(this, hs), ...a}),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const r = Fb(this.options);
          r.data !== void 0 && (this.setState($b(r.data, r.dataUpdatedAt)), je(this, Ai, r));
        }
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === 'idle' && W(this, In).remove(this);
      }
      setData(a, r) {
        const l = ZA(this.state.data, a, this.options);
        return (
          tn(this, ca, lr).call(this, {
            data: l,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          l
        );
      }
      setState(a, r) {
        tn(this, ca, lr).call(this, {type: 'setState', state: a, setStateOptions: r});
      }
      cancel(a) {
        var l, s;
        const r = (l = W(this, Ft)) == null ? void 0 : l.promise;
        return ((s = W(this, Ft)) == null || s.cancel(a), r ? r.then(ua).catch(ua) : Promise.resolve());
      }
      destroy() {
        (super.destroy(), this.cancel({silent: !0}));
      }
      reset() {
        (this.destroy(), this.setState(W(this, Ai)));
      }
      isActive() {
        return this.observers.some((a) => XA(a.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Sm || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some((a) => $h(a.options.staleTime, this) === 'static')
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((a) => a.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(a = 0) {
        return this.state.data === void 0
          ? !0
          : a === 'static'
            ? !1
            : this.state.isInvalidated
              ? !0
              : !KA(this.state.dataUpdatedAt, a);
      }
      onFocus() {
        var r;
        const a = this.observers.find((l) => l.shouldFetchOnWindowFocus());
        (a == null || a.refetch({cancelRefetch: !1}), (r = W(this, Ft)) == null || r.continue());
      }
      onOnline() {
        var r;
        const a = this.observers.find((l) => l.shouldFetchOnReconnect());
        (a == null || a.refetch({cancelRefetch: !1}), (r = W(this, Ft)) == null || r.continue());
      }
      addObserver(a) {
        this.observers.includes(a) ||
          (this.observers.push(a),
          this.clearGcTimeout(),
          W(this, In).notify({type: 'observerAdded', query: this, observer: a}));
      }
      removeObserver(a) {
        this.observers.includes(a) &&
          ((this.observers = this.observers.filter((r) => r !== a)),
          this.observers.length ||
            (W(this, Ft) && (W(this, Mi) ? W(this, Ft).cancel({revert: !0}) : W(this, Ft).cancelRetry()),
            this.scheduleGc()),
          W(this, In).notify({type: 'observerRemoved', query: this, observer: a}));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || tn(this, ca, lr).call(this, {type: 'invalidate'});
      }
      async fetch(a, r) {
        var m, h, y, g, S, x, C, w, T, R, A, _;
        if (this.state.fetchStatus !== 'idle' && ((m = W(this, Ft)) == null ? void 0 : m.status()) !== 'rejected') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch) this.cancel({silent: !0});
          else if (W(this, Ft)) return (W(this, Ft).continueRetry(), W(this, Ft).promise);
        }
        if ((a && this.setOptions(a), !this.options.queryFn)) {
          const z = this.observers.find(($) => $.options.queryFn);
          z && this.setOptions(z.options);
        }
        const l = new AbortController(),
          s = (z) => {
            Object.defineProperty(z, 'signal', {enumerable: !0, get: () => (je(this, Mi, !0), l.signal)});
          },
          u = () => {
            const z = PS(this.options, r),
              I = (() => {
                const O = {client: W(this, Di), queryKey: this.queryKey, meta: this.meta};
                return (s(O), O);
              })();
            return (je(this, Mi, !1), this.options.persister ? this.options.persister(z, I, this) : z(I));
          },
          d = (() => {
            const z = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: W(this, Di),
              state: this.state,
              fetchFn: u,
            };
            return (s(z), z);
          })();
        ((h = this.options.behavior) == null || h.onFetch(d, this),
          je(this, kl, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !== ((y = d.fetchOptions) == null ? void 0 : y.meta)) &&
            tn(this, ca, lr).call(this, {type: 'fetch', meta: (g = d.fetchOptions) == null ? void 0 : g.meta}),
          je(
            this,
            Ft,
            YS({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: d.fetchFn,
              onCancel: (z) => {
                (z instanceof Gh && z.revert && this.setState({...W(this, kl), fetchStatus: 'idle'}), l.abort());
              },
              onFail: (z, $) => {
                tn(this, ca, lr).call(this, {type: 'failed', failureCount: z, error: $});
              },
              onPause: () => {
                tn(this, ca, lr).call(this, {type: 'pause'});
              },
              onContinue: () => {
                tn(this, ca, lr).call(this, {type: 'continue'});
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            }),
          ));
        try {
          const z = await W(this, Ft).start();
          if (z === void 0) throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(z),
            (x = (S = W(this, In).config).onSuccess) == null || x.call(S, z, this),
            (w = (C = W(this, In).config).onSettled) == null || w.call(C, z, this.state.error, this),
            z
          );
        } catch (z) {
          if (z instanceof Gh) {
            if (z.silent) return W(this, Ft).promise;
            if (z.revert) {
              if (this.state.data === void 0) throw z;
              return this.state.data;
            }
          }
          throw (
            tn(this, ca, lr).call(this, {type: 'error', error: z}),
            (R = (T = W(this, In).config).onError) == null || R.call(T, z, this),
            (_ = (A = W(this, In).config).onSettled) == null || _.call(A, this.state.data, z, this),
            z
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (Ai = new WeakMap()),
    (kl = new WeakMap()),
    (In = new WeakMap()),
    (Di = new WeakMap()),
    (Ft = new WeakMap()),
    (hs = new WeakMap()),
    (Mi = new WeakMap()),
    (ca = new WeakSet()),
    (lr = function (a) {
      const r = (l) => {
        switch (a.type) {
          case 'failed':
            return {...l, fetchFailureCount: a.failureCount, fetchFailureReason: a.error};
          case 'pause':
            return {...l, fetchStatus: 'paused'};
          case 'continue':
            return {...l, fetchStatus: 'fetching'};
          case 'fetch':
            return {...l, ...s2(l.data, this.options), fetchMeta: a.meta ?? null};
          case 'success':
            const s = {
              ...l,
              ...$b(a.data, a.dataUpdatedAt),
              dataUpdateCount: l.dataUpdateCount + 1,
              ...(!a.manual && {fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null}),
            };
            return (je(this, kl, a.manual ? s : void 0), s);
          case 'error':
            const u = a.error;
            return {
              ...l,
              error: u,
              errorUpdateCount: l.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: l.fetchFailureCount + 1,
              fetchFailureReason: u,
              fetchStatus: 'idle',
              status: 'error',
              isInvalidated: !0,
            };
          case 'invalidate':
            return {...l, isInvalidated: !0};
          case 'setState':
            return {...l, ...a.state};
        }
      };
      ((this.state = r(this.state)),
        fn.batch(() => {
          (this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            W(this, In).notify({query: this, type: 'updated', action: a}));
        }));
    }),
    H0);
function s2(t, a) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qS(a.networkMode) ? 'fetching' : 'paused',
    ...(t === void 0 && {error: null, status: 'pending'}),
  };
}
function $b(t, a) {
  return {data: t, dataUpdatedAt: a ?? Date.now(), error: null, isInvalidated: !1, status: 'success'};
}
function Fb(t) {
  const a = typeof t.initialData == 'function' ? t.initialData() : t.initialData,
    r = a !== void 0,
    l = r ? (typeof t.initialDataUpdatedAt == 'function' ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt) : 0;
  return {
    data: a,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (l ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
function Gb(t) {
  return {
    onFetch: (a, r) => {
      var y, g, S, x, C;
      const l = a.options,
        s =
          (S = (g = (y = a.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : g.fetchMore) == null
            ? void 0
            : S.direction,
        u = ((x = a.state.data) == null ? void 0 : x.pages) || [],
        c = ((C = a.state.data) == null ? void 0 : C.pageParams) || [];
      let d = {pages: [], pageParams: []},
        m = 0;
      const h = async () => {
        let w = !1;
        const T = (_) => {
            e2(
              _,
              () => a.signal,
              () => (w = !0),
            );
          },
          R = PS(a.options, a.fetchOptions),
          A = async (_, z, $) => {
            if (w) return Promise.reject();
            if (z == null && _.pages.length) return Promise.resolve(_);
            const O = (() => {
                const pe = {
                  client: a.client,
                  queryKey: a.queryKey,
                  pageParam: z,
                  direction: $ ? 'backward' : 'forward',
                  meta: a.options.meta,
                };
                return (T(pe), pe);
              })(),
              P = await R(O),
              {maxPages: Z} = a.options,
              se = $ ? WA : JA;
            return {pages: se(_.pages, P, Z), pageParams: se(_.pageParams, z, Z)};
          };
        if (s && u.length) {
          const _ = s === 'backward',
            z = _ ? u2 : Kb,
            $ = {pages: u, pageParams: c},
            I = z(l, $);
          d = await A($, I, _);
        } else {
          const _ = t ?? u.length;
          do {
            const z = m === 0 ? (c[0] ?? l.initialPageParam) : Kb(l, d);
            if (m > 0 && z == null) break;
            ((d = await A(d, z)), m++);
          } while (m < _);
        }
        return d;
      };
      a.options.persister
        ? (a.fetchFn = () => {
            var w, T;
            return (T = (w = a.options).persister) == null
              ? void 0
              : T.call(w, h, {client: a.client, queryKey: a.queryKey, meta: a.options.meta, signal: a.signal}, r);
          })
        : (a.fetchFn = h);
    },
  };
}
function Kb(t, {pages: a, pageParams: r}) {
  const l = a.length - 1;
  return a.length > 0 ? t.getNextPageParam(a[l], a, r[l], r) : void 0;
}
function u2(t, {pages: a, pageParams: r}) {
  var l;
  return a.length > 0 ? ((l = t.getPreviousPageParam) == null ? void 0 : l.call(t, a[0], a, r[0], r)) : void 0;
}
var ms,
  Ea,
  an,
  Ni,
  Ca,
  Br,
  B0,
  c2 =
    ((B0 = class extends $S {
      constructor(a) {
        super();
        We(this, Ca);
        We(this, ms);
        We(this, Ea);
        We(this, an);
        We(this, Ni);
        (je(this, ms, a.client),
          (this.mutationId = a.mutationId),
          je(this, an, a.mutationCache),
          je(this, Ea, []),
          (this.state = a.state || f2()),
          this.setOptions(a.options),
          this.scheduleGc());
      }
      setOptions(a) {
        ((this.options = a), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(a) {
        W(this, Ea).includes(a) ||
          (W(this, Ea).push(a),
          this.clearGcTimeout(),
          W(this, an).notify({type: 'observerAdded', mutation: this, observer: a}));
      }
      removeObserver(a) {
        (je(
          this,
          Ea,
          W(this, Ea).filter((r) => r !== a),
        ),
          this.scheduleGc(),
          W(this, an).notify({type: 'observerRemoved', mutation: this, observer: a}));
      }
      optionalRemove() {
        W(this, Ea).length || (this.state.status === 'pending' ? this.scheduleGc() : W(this, an).remove(this));
      }
      continue() {
        var a;
        return ((a = W(this, Ni)) == null ? void 0 : a.continue()) ?? this.execute(this.state.variables);
      }
      async execute(a) {
        var c, d, m, h, y, g, S, x, C, w, T, R, A, _, z, $, I, O;
        const r = () => {
            tn(this, Ca, Br).call(this, {type: 'continue'});
          },
          l = {client: W(this, ms), meta: this.options.meta, mutationKey: this.options.mutationKey};
        je(
          this,
          Ni,
          YS({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(a, l)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (P, Z) => {
              tn(this, Ca, Br).call(this, {type: 'failed', failureCount: P, error: Z});
            },
            onPause: () => {
              tn(this, Ca, Br).call(this, {type: 'pause'});
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => W(this, an).canRun(this),
          }),
        );
        const s = this.state.status === 'pending',
          u = !W(this, Ni).canStart();
        try {
          if (s) r();
          else {
            (tn(this, Ca, Br).call(this, {type: 'pending', variables: a, isPaused: u}),
              W(this, an).config.onMutate && (await W(this, an).config.onMutate(a, this, l)));
            const Z = await ((d = (c = this.options).onMutate) == null ? void 0 : d.call(c, a, l));
            Z !== this.state.context &&
              tn(this, Ca, Br).call(this, {type: 'pending', context: Z, variables: a, isPaused: u});
          }
          const P = await W(this, Ni).start();
          return (
            await ((h = (m = W(this, an).config).onSuccess) == null
              ? void 0
              : h.call(m, P, a, this.state.context, this, l)),
            await ((g = (y = this.options).onSuccess) == null ? void 0 : g.call(y, P, a, this.state.context, l)),
            await ((x = (S = W(this, an).config).onSettled) == null
              ? void 0
              : x.call(S, P, null, this.state.variables, this.state.context, this, l)),
            await ((w = (C = this.options).onSettled) == null ? void 0 : w.call(C, P, null, a, this.state.context, l)),
            tn(this, Ca, Br).call(this, {type: 'success', data: P}),
            P
          );
        } catch (P) {
          try {
            await ((R = (T = W(this, an).config).onError) == null
              ? void 0
              : R.call(T, P, a, this.state.context, this, l));
          } catch (Z) {
            Promise.reject(Z);
          }
          try {
            await ((_ = (A = this.options).onError) == null ? void 0 : _.call(A, P, a, this.state.context, l));
          } catch (Z) {
            Promise.reject(Z);
          }
          try {
            await (($ = (z = W(this, an).config).onSettled) == null
              ? void 0
              : $.call(z, void 0, P, this.state.variables, this.state.context, this, l));
          } catch (Z) {
            Promise.reject(Z);
          }
          try {
            await ((O = (I = this.options).onSettled) == null
              ? void 0
              : O.call(I, void 0, P, a, this.state.context, l));
          } catch (Z) {
            Promise.reject(Z);
          }
          throw (tn(this, Ca, Br).call(this, {type: 'error', error: P}), P);
        } finally {
          W(this, an).runNext(this);
        }
      }
    }),
    (ms = new WeakMap()),
    (Ea = new WeakMap()),
    (an = new WeakMap()),
    (Ni = new WeakMap()),
    (Ca = new WeakSet()),
    (Br = function (a) {
      const r = (l) => {
        switch (a.type) {
          case 'failed':
            return {...l, failureCount: a.failureCount, failureReason: a.error};
          case 'pause':
            return {...l, isPaused: !0};
          case 'continue':
            return {...l, isPaused: !1};
          case 'pending':
            return {
              ...l,
              context: a.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: a.isPaused,
              status: 'pending',
              variables: a.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...l,
              data: a.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...l,
              data: void 0,
              error: a.error,
              failureCount: l.failureCount + 1,
              failureReason: a.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      ((this.state = r(this.state)),
        fn.batch(() => {
          (W(this, Ea).forEach((l) => {
            l.onMutationUpdate(a);
          }),
            W(this, an).notify({mutation: this, type: 'updated', action: a}));
        }));
    }),
    B0);
function f2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var or,
  fa,
  ps,
  k0,
  d2 =
    ((k0 = class extends Rc {
      constructor(a = {}) {
        super();
        We(this, or);
        We(this, fa);
        We(this, ps);
        ((this.config = a), je(this, or, new Set()), je(this, fa, new Map()), je(this, ps, 0));
      }
      build(a, r, l) {
        const s = new c2({
          client: a,
          mutationCache: this,
          mutationId: ++zu(this, ps)._,
          options: a.defaultMutationOptions(r),
          state: l,
        });
        return (this.add(s), s);
      }
      add(a) {
        W(this, or).add(a);
        const r = Vu(a);
        if (typeof r == 'string') {
          const l = W(this, fa).get(r);
          l ? l.push(a) : W(this, fa).set(r, [a]);
        }
        this.notify({type: 'added', mutation: a});
      }
      remove(a) {
        if (W(this, or).delete(a)) {
          const r = Vu(a);
          if (typeof r == 'string') {
            const l = W(this, fa).get(r);
            if (l)
              if (l.length > 1) {
                const s = l.indexOf(a);
                s !== -1 && l.splice(s, 1);
              } else l[0] === a && W(this, fa).delete(r);
          }
        }
        this.notify({type: 'removed', mutation: a});
      }
      canRun(a) {
        const r = Vu(a);
        if (typeof r == 'string') {
          const l = W(this, fa).get(r),
            s = l == null ? void 0 : l.find((u) => u.state.status === 'pending');
          return !s || s === a;
        } else return !0;
      }
      runNext(a) {
        var l;
        const r = Vu(a);
        if (typeof r == 'string') {
          const s = (l = W(this, fa).get(r)) == null ? void 0 : l.find((u) => u !== a && u.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        fn.batch(() => {
          (W(this, or).forEach((a) => {
            this.notify({type: 'removed', mutation: a});
          }),
            W(this, or).clear(),
            W(this, fa).clear());
        });
      }
      getAll() {
        return Array.from(W(this, or));
      }
      find(a) {
        const r = {exact: !0, ...a};
        return this.getAll().find((l) => Vb(r, l));
      }
      findAll(a = {}) {
        return this.getAll().filter((r) => Vb(a, r));
      }
      notify(a) {
        fn.batch(() => {
          this.listeners.forEach((r) => {
            r(a);
          });
        });
      }
      resumePausedMutations() {
        const a = this.getAll().filter((r) => r.state.isPaused);
        return fn.batch(() => Promise.all(a.map((r) => r.continue().catch(ua))));
      }
    }),
    (or = new WeakMap()),
    (fa = new WeakMap()),
    (ps = new WeakMap()),
    k0);
function Vu(t) {
  var a;
  return (a = t.options.scope) == null ? void 0 : a.id;
}
var Ta,
  P0,
  h2 =
    ((P0 = class extends Rc {
      constructor(a = {}) {
        super();
        We(this, Ta);
        ((this.config = a), je(this, Ta, new Map()));
      }
      build(a, r, l) {
        const s = r.queryKey,
          u = r.queryHash ?? bm(s, r);
        let c = this.get(u);
        return (
          c ||
            ((c = new o2({
              client: a,
              queryKey: s,
              queryHash: u,
              options: a.defaultQueryOptions(r),
              state: l,
              defaultOptions: a.getQueryDefaults(s),
            })),
            this.add(c)),
          c
        );
      }
      add(a) {
        W(this, Ta).has(a.queryHash) || (W(this, Ta).set(a.queryHash, a), this.notify({type: 'added', query: a}));
      }
      remove(a) {
        const r = W(this, Ta).get(a.queryHash);
        r && (a.destroy(), r === a && W(this, Ta).delete(a.queryHash), this.notify({type: 'removed', query: a}));
      }
      clear() {
        fn.batch(() => {
          this.getAll().forEach((a) => {
            this.remove(a);
          });
        });
      }
      get(a) {
        return W(this, Ta).get(a);
      }
      getAll() {
        return [...W(this, Ta).values()];
      }
      find(a) {
        const r = {exact: !0, ...a};
        return this.getAll().find((l) => Pb(r, l));
      }
      findAll(a = {}) {
        const r = this.getAll();
        return Object.keys(a).length > 0 ? r.filter((l) => Pb(a, l)) : r;
      }
      notify(a) {
        fn.batch(() => {
          this.listeners.forEach((r) => {
            r(a);
          });
        });
      }
      onFocus() {
        fn.batch(() => {
          this.getAll().forEach((a) => {
            a.onFocus();
          });
        });
      }
      onOnline() {
        fn.batch(() => {
          this.getAll().forEach((a) => {
            a.onOnline();
          });
        });
      }
    }),
    (Ta = new WeakMap()),
    P0),
  Rt,
  Fr,
  Gr,
  Pl,
  Vl,
  Kr,
  ql,
  Yl,
  V0,
  m2 =
    ((V0 = class {
      constructor(t = {}) {
        We(this, Rt);
        We(this, Fr);
        We(this, Gr);
        We(this, Pl);
        We(this, Vl);
        We(this, Kr);
        We(this, ql);
        We(this, Yl);
        (je(this, Rt, t.queryCache || new h2()),
          je(this, Fr, t.mutationCache || new d2()),
          je(this, Gr, t.defaultOptions || {}),
          je(this, Pl, new Map()),
          je(this, Vl, new Map()),
          je(this, Kr, 0));
      }
      mount() {
        (zu(this, Kr)._++,
          W(this, Kr) === 1 &&
            (je(
              this,
              ql,
              VS.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), W(this, Rt).onFocus());
              }),
            ),
            je(
              this,
              Yl,
              cc.subscribe(async (t) => {
                t && (await this.resumePausedMutations(), W(this, Rt).onOnline());
              }),
            )));
      }
      unmount() {
        var t, a;
        (zu(this, Kr)._--,
          W(this, Kr) === 0 &&
            ((t = W(this, ql)) == null || t.call(this),
            je(this, ql, void 0),
            (a = W(this, Yl)) == null || a.call(this),
            je(this, Yl, void 0)));
      }
      isFetching(t) {
        return W(this, Rt).findAll({...t, fetchStatus: 'fetching'}).length;
      }
      isMutating(t) {
        return W(this, Fr).findAll({...t, status: 'pending'}).length;
      }
      getQueryData(t) {
        var r;
        const a = this.defaultQueryOptions({queryKey: t});
        return (r = W(this, Rt).get(a.queryHash)) == null ? void 0 : r.state.data;
      }
      ensureQueryData(t) {
        const a = this.defaultQueryOptions(t),
          r = W(this, Rt).build(this, a),
          l = r.state.data;
        return l === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale && r.isStaleByTime($h(a.staleTime, r)) && this.prefetchQuery(a), Promise.resolve(l));
      }
      getQueriesData(t) {
        return W(this, Rt)
          .findAll(t)
          .map(({queryKey: a, state: r}) => {
            const l = r.data;
            return [a, l];
          });
      }
      setQueryData(t, a, r) {
        const l = this.defaultQueryOptions({queryKey: t}),
          s = W(this, Rt).get(l.queryHash),
          u = s == null ? void 0 : s.state.data,
          c = FA(a, u);
        if (c !== void 0)
          return W(this, Rt)
            .build(this, l)
            .setData(c, {...r, manual: !0});
      }
      setQueriesData(t, a, r) {
        return fn.batch(() =>
          W(this, Rt)
            .findAll(t)
            .map(({queryKey: l}) => [l, this.setQueryData(l, a, r)]),
        );
      }
      getQueryState(t) {
        var r;
        const a = this.defaultQueryOptions({queryKey: t});
        return (r = W(this, Rt).get(a.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(t) {
        const a = W(this, Rt);
        fn.batch(() => {
          a.findAll(t).forEach((r) => {
            a.remove(r);
          });
        });
      }
      resetQueries(t, a) {
        const r = W(this, Rt);
        return fn.batch(
          () => (
            r.findAll(t).forEach((l) => {
              l.reset();
            }),
            this.refetchQueries({type: 'active', ...t}, a)
          ),
        );
      }
      cancelQueries(t, a = {}) {
        const r = {revert: !0, ...a},
          l = fn.batch(() =>
            W(this, Rt)
              .findAll(t)
              .map((s) => s.cancel(r)),
          );
        return Promise.all(l).then(ua).catch(ua);
      }
      invalidateQueries(t, a = {}) {
        return fn.batch(
          () => (
            W(this, Rt)
              .findAll(t)
              .forEach((r) => {
                r.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {...t, type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? 'active'},
                  a,
                )
          ),
        );
      }
      refetchQueries(t, a = {}) {
        const r = {...a, cancelRefetch: a.cancelRefetch ?? !0},
          l = fn.batch(() =>
            W(this, Rt)
              .findAll(t)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let u = s.fetch(void 0, r);
                return (r.throwOnError || (u = u.catch(ua)), s.state.fetchStatus === 'paused' ? Promise.resolve() : u);
              }),
          );
        return Promise.all(l).then(ua);
      }
      fetchQuery(t) {
        const a = this.defaultQueryOptions(t);
        a.retry === void 0 && (a.retry = !1);
        const r = W(this, Rt).build(this, a);
        return r.isStaleByTime($h(a.staleTime, r)) ? r.fetch(a) : Promise.resolve(r.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(ua).catch(ua);
      }
      fetchInfiniteQuery(t) {
        return ((t.behavior = Gb(t.pages)), this.fetchQuery(t));
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(ua).catch(ua);
      }
      ensureInfiniteQueryData(t) {
        return ((t.behavior = Gb(t.pages)), this.ensureQueryData(t));
      }
      resumePausedMutations() {
        return cc.isOnline() ? W(this, Fr).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return W(this, Rt);
      }
      getMutationCache() {
        return W(this, Fr);
      }
      getDefaultOptions() {
        return W(this, Gr);
      }
      setDefaultOptions(t) {
        je(this, Gr, t);
      }
      setQueryDefaults(t, a) {
        W(this, Pl).set(cs(t), {queryKey: t, defaultOptions: a});
      }
      getQueryDefaults(t) {
        const a = [...W(this, Pl).values()],
          r = {};
        return (
          a.forEach((l) => {
            fs(t, l.queryKey) && Object.assign(r, l.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(t, a) {
        W(this, Vl).set(cs(t), {mutationKey: t, defaultOptions: a});
      }
      getMutationDefaults(t) {
        const a = [...W(this, Vl).values()],
          r = {};
        return (
          a.forEach((l) => {
            fs(t, l.mutationKey) && Object.assign(r, l.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const a = {...W(this, Gr).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: !0};
        return (
          a.queryHash || (a.queryHash = bm(a.queryKey, a)),
          a.refetchOnReconnect === void 0 && (a.refetchOnReconnect = a.networkMode !== 'always'),
          a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
          !a.networkMode && a.persister && (a.networkMode = 'offlineFirst'),
          a.queryFn === Sm && (a.enabled = !1),
          a
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...W(this, Gr).mutations,
              ...((t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        (W(this, Rt).clear(), W(this, Fr).clear());
      }
    }),
    (Rt = new WeakMap()),
    (Fr = new WeakMap()),
    (Gr = new WeakMap()),
    (Pl = new WeakMap()),
    (Vl = new WeakMap()),
    (Kr = new WeakMap()),
    (ql = new WeakMap()),
    (Yl = new WeakMap()),
    V0),
  p2 = b.createContext(void 0),
  g2 = ({client: t, children: a}) => (
    b.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t],
    ),
    j.jsx(p2.Provider, {value: t, children: a})
  ),
  y2 = function () {
    return null;
  };
function v2({children: t}) {
  const a = b.useMemo(() => new m2(), []);
  return j.jsxs(g2, {client: a, children: [j.jsx(y2, {initialIsOpen: !1}), ' ', t]});
}
function b2(t) {
  if (typeof document > 'u') return;
  let a = document.head || document.getElementsByTagName('head')[0],
    r = document.createElement('style');
  ((r.type = 'text/css'),
    a.appendChild(r),
    r.styleSheet ? (r.styleSheet.cssText = t) : r.appendChild(document.createTextNode(t)));
}
const S2 = (t) => {
    switch (t) {
      case 'success':
        return E2;
      case 'info':
        return T2;
      case 'warning':
        return C2;
      case 'error':
        return O2;
      default:
        return null;
    }
  },
  x2 = Array(12).fill(0),
  w2 = ({visible: t, className: a}) =>
    oe.createElement(
      'div',
      {className: ['sonner-loading-wrapper', a].filter(Boolean).join(' '), 'data-visible': t},
      oe.createElement(
        'div',
        {className: 'sonner-spinner'},
        x2.map((r, l) => oe.createElement('div', {className: 'sonner-loading-bar', key: `spinner-bar-${l}`})),
      ),
    ),
  E2 = oe.createElement(
    'svg',
    {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20'},
    oe.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
      clipRule: 'evenodd',
    }),
  ),
  C2 = oe.createElement(
    'svg',
    {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor', height: '20', width: '20'},
    oe.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
      clipRule: 'evenodd',
    }),
  ),
  T2 = oe.createElement(
    'svg',
    {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20'},
    oe.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
      clipRule: 'evenodd',
    }),
  ),
  O2 = oe.createElement(
    'svg',
    {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20'},
    oe.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
      clipRule: 'evenodd',
    }),
  ),
  R2 = oe.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '12',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    oe.createElement('line', {x1: '18', y1: '6', x2: '6', y2: '18'}),
    oe.createElement('line', {x1: '6', y1: '6', x2: '18', y2: '18'}),
  ),
  A2 = () => {
    const [t, a] = oe.useState(document.hidden);
    return (
      oe.useEffect(() => {
        const r = () => {
          a(document.hidden);
        };
        return (
          document.addEventListener('visibilitychange', r),
          () => window.removeEventListener('visibilitychange', r)
        );
      }, []),
      t
    );
  };
let Kh = 1;
class D2 {
  constructor() {
    ((this.subscribe = (a) => (
      this.subscribers.push(a),
      () => {
        const r = this.subscribers.indexOf(a);
        this.subscribers.splice(r, 1);
      }
    )),
      (this.publish = (a) => {
        this.subscribers.forEach((r) => r(a));
      }),
      (this.addToast = (a) => {
        (this.publish(a), (this.toasts = [...this.toasts, a]));
      }),
      (this.create = (a) => {
        var r;
        const {message: l, ...s} = a,
          u =
            typeof (a == null ? void 0 : a.id) == 'number' || ((r = a.id) == null ? void 0 : r.length) > 0
              ? a.id
              : Kh++,
          c = this.toasts.find((m) => m.id === u),
          d = a.dismissible === void 0 ? !0 : a.dismissible;
        return (
          this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
          c
            ? (this.toasts = this.toasts.map((m) =>
                m.id === u
                  ? (this.publish({...m, ...a, id: u, title: l}), {...m, ...a, id: u, dismissible: d, title: l})
                  : m,
              ))
            : this.addToast({title: l, ...s, dismissible: d, id: u}),
          u
        );
      }),
      (this.dismiss = (a) => (
        a
          ? (this.dismissedToasts.add(a),
            requestAnimationFrame(() => this.subscribers.forEach((r) => r({id: a, dismiss: !0}))))
          : this.toasts.forEach((r) => {
              this.subscribers.forEach((l) => l({id: r.id, dismiss: !0}));
            }),
        a
      )),
      (this.message = (a, r) => this.create({...r, message: a})),
      (this.error = (a, r) => this.create({...r, message: a, type: 'error'})),
      (this.success = (a, r) => this.create({...r, type: 'success', message: a})),
      (this.info = (a, r) => this.create({...r, type: 'info', message: a})),
      (this.warning = (a, r) => this.create({...r, type: 'warning', message: a})),
      (this.loading = (a, r) => this.create({...r, type: 'loading', message: a})),
      (this.promise = (a, r) => {
        if (!r) return;
        let l;
        r.loading !== void 0 &&
          (l = this.create({
            ...r,
            promise: a,
            type: 'loading',
            message: r.loading,
            description: typeof r.description != 'function' ? r.description : void 0,
          }));
        const s = Promise.resolve(a instanceof Function ? a() : a);
        let u = l !== void 0,
          c;
        const d = s
            .then(async (h) => {
              if (((c = ['resolve', h]), oe.isValidElement(h)))
                ((u = !1), this.create({id: l, type: 'default', message: h}));
              else if (N2(h) && !h.ok) {
                u = !1;
                const g = typeof r.error == 'function' ? await r.error(`HTTP error! status: ${h.status}`) : r.error,
                  S =
                    typeof r.description == 'function'
                      ? await r.description(`HTTP error! status: ${h.status}`)
                      : r.description,
                  C = typeof g == 'object' && !oe.isValidElement(g) ? g : {message: g};
                this.create({id: l, type: 'error', description: S, ...C});
              } else if (h instanceof Error) {
                u = !1;
                const g = typeof r.error == 'function' ? await r.error(h) : r.error,
                  S = typeof r.description == 'function' ? await r.description(h) : r.description,
                  C = typeof g == 'object' && !oe.isValidElement(g) ? g : {message: g};
                this.create({id: l, type: 'error', description: S, ...C});
              } else if (r.success !== void 0) {
                u = !1;
                const g = typeof r.success == 'function' ? await r.success(h) : r.success,
                  S = typeof r.description == 'function' ? await r.description(h) : r.description,
                  C = typeof g == 'object' && !oe.isValidElement(g) ? g : {message: g};
                this.create({id: l, type: 'success', description: S, ...C});
              }
            })
            .catch(async (h) => {
              if (((c = ['reject', h]), r.error !== void 0)) {
                u = !1;
                const y = typeof r.error == 'function' ? await r.error(h) : r.error,
                  g = typeof r.description == 'function' ? await r.description(h) : r.description,
                  x = typeof y == 'object' && !oe.isValidElement(y) ? y : {message: y};
                this.create({id: l, type: 'error', description: g, ...x});
              }
            })
            .finally(() => {
              (u && (this.dismiss(l), (l = void 0)), r.finally == null || r.finally.call(r));
            }),
          m = () => new Promise((h, y) => d.then(() => (c[0] === 'reject' ? y(c[1]) : h(c[1]))).catch(y));
        return typeof l != 'string' && typeof l != 'number' ? {unwrap: m} : Object.assign(l, {unwrap: m});
      }),
      (this.custom = (a, r) => {
        const l = (r == null ? void 0 : r.id) || Kh++;
        return (this.create({jsx: a(l), id: l, ...r}), l);
      }),
      (this.getActiveToasts = () => this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Sn = new D2(),
  M2 = (t, a) => {
    const r = (a == null ? void 0 : a.id) || Kh++;
    return (Sn.addToast({title: t, ...a, id: r}), r);
  },
  N2 = (t) =>
    t && typeof t == 'object' && 'ok' in t && typeof t.ok == 'boolean' && 'status' in t && typeof t.status == 'number',
  _2 = M2,
  L2 = () => Sn.toasts,
  j2 = () => Sn.getActiveToasts(),
  qu = Object.assign(
    _2,
    {
      success: Sn.success,
      info: Sn.info,
      warning: Sn.warning,
      error: Sn.error,
      custom: Sn.custom,
      message: Sn.message,
      promise: Sn.promise,
      dismiss: Sn.dismiss,
      loading: Sn.loading,
    },
    {getHistory: L2, getToasts: j2},
  );
b2(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Yu(t) {
  return t.label !== void 0;
}
const z2 = 3,
  U2 = '24px',
  H2 = '16px',
  Xb = 4e3,
  B2 = 356,
  k2 = 14,
  P2 = 45,
  V2 = 200;
function wa(...t) {
  return t.filter(Boolean).join(' ');
}
function q2(t) {
  const [a, r] = t.split('-'),
    l = [];
  return (a && l.push(a), r && l.push(r), l);
}
const Y2 = (t) => {
  var a, r, l, s, u, c, d, m, h;
  const {
      invert: y,
      toast: g,
      unstyled: S,
      interacting: x,
      setHeights: C,
      visibleToasts: w,
      heights: T,
      index: R,
      toasts: A,
      expanded: _,
      removeToast: z,
      defaultRichColors: $,
      closeButton: I,
      style: O,
      cancelButtonStyle: P,
      actionButtonStyle: Z,
      className: se = '',
      descriptionClassName: pe = '',
      duration: le,
      position: ce,
      gap: ie,
      expandByDefault: he,
      classNames: N,
      icons: V,
      closeButtonAriaLabel: B = 'Close toast',
    } = t,
    [fe, ge] = oe.useState(null),
    [D, K] = oe.useState(null),
    [X, ee] = oe.useState(!1),
    [ue, be] = oe.useState(!1),
    [re, ye] = oe.useState(!1),
    [Me, Ue] = oe.useState(!1),
    [He, Te] = oe.useState(!1),
    [ht, mt] = oe.useState(0),
    [xn, zt] = oe.useState(0),
    sn = oe.useRef(g.duration || le || Xb),
    ja = oe.useRef(null),
    At = oe.useRef(null),
    ti = R === 0,
    ni = R + 1 <= w,
    Gt = g.type,
    ga = g.dismissible !== !1,
    St = g.className || '',
    za = g.descriptionClassName || '',
    ya = oe.useMemo(() => T.findIndex((_e) => _e.toastId === g.id) || 0, [T, g.id]),
    hr = oe.useMemo(() => {
      var _e;
      return (_e = g.closeButton) != null ? _e : I;
    }, [g.closeButton, I]),
    Kt = oe.useMemo(() => g.duration || le || Xb, [g.duration, le]),
    un = oe.useRef(0),
    Un = oe.useRef(0),
    Pi = oe.useRef(0),
    Hn = oe.useRef(null),
    [Ua, pt] = ce.split('-'),
    dn = oe.useMemo(() => T.reduce((_e, ut, Dt) => (Dt >= ya ? _e : _e + ut.height), 0), [T, ya]),
    Pt = A2(),
    Vi = g.invert || y,
    ai = Gt === 'loading';
  ((Un.current = oe.useMemo(() => ya * ie + dn, [ya, dn])),
    oe.useEffect(() => {
      sn.current = Kt;
    }, [Kt]),
    oe.useEffect(() => {
      ee(!0);
    }, []),
    oe.useEffect(() => {
      const _e = At.current;
      if (_e) {
        const ut = _e.getBoundingClientRect().height;
        return (
          zt(ut),
          C((Dt) => [{toastId: g.id, height: ut, position: g.position}, ...Dt]),
          () => C((Dt) => Dt.filter((Mt) => Mt.toastId !== g.id))
        );
      }
    }, [C, g.id]),
    oe.useLayoutEffect(() => {
      if (!X) return;
      const _e = At.current,
        ut = _e.style.height;
      _e.style.height = 'auto';
      const Dt = _e.getBoundingClientRect().height;
      ((_e.style.height = ut),
        zt(Dt),
        C((Mt) =>
          Mt.find((ct) => ct.toastId === g.id)
            ? Mt.map((ct) => (ct.toastId === g.id ? {...ct, height: Dt} : ct))
            : [{toastId: g.id, height: Dt, position: g.position}, ...Mt],
        ));
    }, [X, g.title, g.description, C, g.id, g.jsx, g.action, g.cancel]));
  const wn = oe.useCallback(() => {
    (be(!0),
      mt(Un.current),
      C((_e) => _e.filter((ut) => ut.toastId !== g.id)),
      setTimeout(() => {
        z(g);
      }, V2));
  }, [g, z, C, Un]);
  (oe.useEffect(() => {
    if ((g.promise && Gt === 'loading') || g.duration === 1 / 0 || g.type === 'loading') return;
    let _e;
    return (
      _ || x || Pt
        ? (() => {
            if (Pi.current < un.current) {
              const Mt = new Date().getTime() - un.current;
              sn.current = sn.current - Mt;
            }
            Pi.current = new Date().getTime();
          })()
        : (() => {
            sn.current !== 1 / 0 &&
              ((un.current = new Date().getTime()),
              (_e = setTimeout(() => {
                (g.onAutoClose == null || g.onAutoClose.call(g, g), wn());
              }, sn.current)));
          })(),
      () => clearTimeout(_e)
    );
  }, [_, x, g, Gt, Pt, wn]),
    oe.useEffect(() => {
      g.delete && (wn(), g.onDismiss == null || g.onDismiss.call(g, g));
    }, [wn, g.delete]));
  function ea() {
    var _e;
    if (V != null && V.loading) {
      var ut;
      return oe.createElement(
        'div',
        {
          className: wa(
            N == null ? void 0 : N.loader,
            g == null || (ut = g.classNames) == null ? void 0 : ut.loader,
            'sonner-loader',
          ),
          'data-visible': Gt === 'loading',
        },
        V.loading,
      );
    }
    return oe.createElement(w2, {
      className: wa(N == null ? void 0 : N.loader, g == null || (_e = g.classNames) == null ? void 0 : _e.loader),
      visible: Gt === 'loading',
    });
  }
  const Ha = g.icon || (V == null ? void 0 : V[Gt]) || S2(Gt);
  var ta, Bn;
  return oe.createElement(
    'li',
    {
      tabIndex: 0,
      ref: At,
      className: wa(
        se,
        St,
        N == null ? void 0 : N.toast,
        g == null || (a = g.classNames) == null ? void 0 : a.toast,
        N == null ? void 0 : N.default,
        N == null ? void 0 : N[Gt],
        g == null || (r = g.classNames) == null ? void 0 : r[Gt],
      ),
      'data-sonner-toast': '',
      'data-rich-colors': (ta = g.richColors) != null ? ta : $,
      'data-styled': !(g.jsx || g.unstyled || S),
      'data-mounted': X,
      'data-promise': !!g.promise,
      'data-swiped': He,
      'data-removed': ue,
      'data-visible': ni,
      'data-y-position': Ua,
      'data-x-position': pt,
      'data-index': R,
      'data-front': ti,
      'data-swiping': re,
      'data-dismissible': ga,
      'data-type': Gt,
      'data-invert': Vi,
      'data-swipe-out': Me,
      'data-swipe-direction': D,
      'data-expanded': !!(_ || (he && X)),
      'data-testid': g.testId,
      style: {
        '--index': R,
        '--toasts-before': R,
        '--z-index': A.length - R,
        '--offset': `${ue ? ht : Un.current}px`,
        '--initial-height': he ? 'auto' : `${xn}px`,
        ...O,
        ...g.style,
      },
      onDragEnd: () => {
        (ye(!1), ge(null), (Hn.current = null));
      },
      onPointerDown: (_e) => {
        _e.button !== 2 &&
          (ai ||
            !ga ||
            ((ja.current = new Date()),
            mt(Un.current),
            _e.target.setPointerCapture(_e.pointerId),
            _e.target.tagName !== 'BUTTON' && (ye(!0), (Hn.current = {x: _e.clientX, y: _e.clientY}))));
      },
      onPointerUp: () => {
        var _e, ut, Dt;
        if (Me || !ga) return;
        Hn.current = null;
        const Mt = Number(
            ((_e = At.current) == null ? void 0 : _e.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0,
          ),
          En = Number(
            ((ut = At.current) == null ? void 0 : ut.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0,
          ),
          ct = new Date().getTime() - ((Dt = ja.current) == null ? void 0 : Dt.getTime()),
          en = fe === 'x' ? Mt : En,
          Ba = Math.abs(en) / ct;
        if (Math.abs(en) >= P2 || Ba > 0.11) {
          (mt(Un.current),
            g.onDismiss == null || g.onDismiss.call(g, g),
            K(fe === 'x' ? (Mt > 0 ? 'right' : 'left') : En > 0 ? 'down' : 'up'),
            wn(),
            Ue(!0));
          return;
        } else {
          var M, H;
          ((M = At.current) == null || M.style.setProperty('--swipe-amount-x', '0px'),
            (H = At.current) == null || H.style.setProperty('--swipe-amount-y', '0px'));
        }
        (Te(!1), ye(!1), ge(null));
      },
      onPointerMove: (_e) => {
        var ut, Dt, Mt;
        if (!Hn.current || !ga || ((ut = window.getSelection()) == null ? void 0 : ut.toString().length) > 0) return;
        const ct = _e.clientY - Hn.current.y,
          en = _e.clientX - Hn.current.x;
        var Ba;
        const M = (Ba = t.swipeDirections) != null ? Ba : q2(ce);
        !fe && (Math.abs(en) > 1 || Math.abs(ct) > 1) && ge(Math.abs(en) > Math.abs(ct) ? 'x' : 'y');
        let H = {x: 0, y: 0};
        const F = (ae) => 1 / (1.5 + Math.abs(ae) / 20);
        if (fe === 'y') {
          if (M.includes('top') || M.includes('bottom'))
            if ((M.includes('top') && ct < 0) || (M.includes('bottom') && ct > 0)) H.y = ct;
            else {
              const ae = ct * F(ct);
              H.y = Math.abs(ae) < Math.abs(ct) ? ae : ct;
            }
        } else if (fe === 'x' && (M.includes('left') || M.includes('right')))
          if ((M.includes('left') && en < 0) || (M.includes('right') && en > 0)) H.x = en;
          else {
            const ae = en * F(en);
            H.x = Math.abs(ae) < Math.abs(en) ? ae : en;
          }
        ((Math.abs(H.x) > 0 || Math.abs(H.y) > 0) && Te(!0),
          (Dt = At.current) == null || Dt.style.setProperty('--swipe-amount-x', `${H.x}px`),
          (Mt = At.current) == null || Mt.style.setProperty('--swipe-amount-y', `${H.y}px`));
      },
    },
    hr && !g.jsx && Gt !== 'loading'
      ? oe.createElement(
          'button',
          {
            'aria-label': B,
            'data-disabled': ai,
            'data-close-button': !0,
            onClick:
              ai || !ga
                ? () => {}
                : () => {
                    (wn(), g.onDismiss == null || g.onDismiss.call(g, g));
                  },
            className: wa(
              N == null ? void 0 : N.closeButton,
              g == null || (l = g.classNames) == null ? void 0 : l.closeButton,
            ),
          },
          (Bn = V == null ? void 0 : V.close) != null ? Bn : R2,
        )
      : null,
    (Gt || g.icon || g.promise) && g.icon !== null && ((V == null ? void 0 : V[Gt]) !== null || g.icon)
      ? oe.createElement(
          'div',
          {
            'data-icon': '',
            className: wa(N == null ? void 0 : N.icon, g == null || (s = g.classNames) == null ? void 0 : s.icon),
          },
          g.promise || (g.type === 'loading' && !g.icon) ? g.icon || ea() : null,
          g.type !== 'loading' ? Ha : null,
        )
      : null,
    oe.createElement(
      'div',
      {
        'data-content': '',
        className: wa(N == null ? void 0 : N.content, g == null || (u = g.classNames) == null ? void 0 : u.content),
      },
      oe.createElement(
        'div',
        {
          'data-title': '',
          className: wa(N == null ? void 0 : N.title, g == null || (c = g.classNames) == null ? void 0 : c.title),
        },
        g.jsx ? g.jsx : typeof g.title == 'function' ? g.title() : g.title,
      ),
      g.description
        ? oe.createElement(
            'div',
            {
              'data-description': '',
              className: wa(
                pe,
                za,
                N == null ? void 0 : N.description,
                g == null || (d = g.classNames) == null ? void 0 : d.description,
              ),
            },
            typeof g.description == 'function' ? g.description() : g.description,
          )
        : null,
    ),
    oe.isValidElement(g.cancel)
      ? g.cancel
      : g.cancel && Yu(g.cancel)
        ? oe.createElement(
            'button',
            {
              'data-button': !0,
              'data-cancel': !0,
              style: g.cancelButtonStyle || P,
              onClick: (_e) => {
                Yu(g.cancel) && ga && (g.cancel.onClick == null || g.cancel.onClick.call(g.cancel, _e), wn());
              },
              className: wa(
                N == null ? void 0 : N.cancelButton,
                g == null || (m = g.classNames) == null ? void 0 : m.cancelButton,
              ),
            },
            g.cancel.label,
          )
        : null,
    oe.isValidElement(g.action)
      ? g.action
      : g.action && Yu(g.action)
        ? oe.createElement(
            'button',
            {
              'data-button': !0,
              'data-action': !0,
              style: g.actionButtonStyle || Z,
              onClick: (_e) => {
                Yu(g.action) &&
                  (g.action.onClick == null || g.action.onClick.call(g.action, _e), !_e.defaultPrevented && wn());
              },
              className: wa(
                N == null ? void 0 : N.actionButton,
                g == null || (h = g.classNames) == null ? void 0 : h.actionButton,
              ),
            },
            g.action.label,
          )
        : null,
  );
};
function Qb() {
  if (typeof window > 'u' || typeof document > 'u') return 'ltr';
  const t = document.documentElement.getAttribute('dir');
  return t === 'auto' || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
function $2(t, a) {
  const r = {};
  return (
    [t, a].forEach((l, s) => {
      const u = s === 1,
        c = u ? '--mobile-offset' : '--offset',
        d = u ? H2 : U2;
      function m(h) {
        ['top', 'right', 'bottom', 'left'].forEach((y) => {
          r[`${c}-${y}`] = typeof h == 'number' ? `${h}px` : h;
        });
      }
      typeof l == 'number' || typeof l == 'string'
        ? m(l)
        : typeof l == 'object'
          ? ['top', 'right', 'bottom', 'left'].forEach((h) => {
              l[h] === void 0 ? (r[`${c}-${h}`] = d) : (r[`${c}-${h}`] = typeof l[h] == 'number' ? `${l[h]}px` : l[h]);
            })
          : m(d);
    }),
    r
  );
}
const F2 = oe.forwardRef(function (a, r) {
  const {
      id: l,
      invert: s,
      position: u = 'bottom-right',
      hotkey: c = ['altKey', 'KeyT'],
      expand: d,
      closeButton: m,
      className: h,
      offset: y,
      mobileOffset: g,
      theme: S = 'light',
      richColors: x,
      duration: C,
      style: w,
      visibleToasts: T = z2,
      toastOptions: R,
      dir: A = Qb(),
      gap: _ = k2,
      icons: z,
      containerAriaLabel: $ = 'Notifications',
    } = a,
    [I, O] = oe.useState([]),
    P = oe.useMemo(() => (l ? I.filter((X) => X.toasterId === l) : I.filter((X) => !X.toasterId)), [I, l]),
    Z = oe.useMemo(() => Array.from(new Set([u].concat(P.filter((X) => X.position).map((X) => X.position)))), [P, u]),
    [se, pe] = oe.useState([]),
    [le, ce] = oe.useState(!1),
    [ie, he] = oe.useState(!1),
    [N, V] = oe.useState(
      S !== 'system'
        ? S
        : typeof window < 'u' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
    ),
    B = oe.useRef(null),
    fe = c.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
    ge = oe.useRef(null),
    D = oe.useRef(!1),
    K = oe.useCallback((X) => {
      O((ee) => {
        var ue;
        return (
          ((ue = ee.find((be) => be.id === X.id)) != null && ue.delete) || Sn.dismiss(X.id),
          ee.filter(({id: be}) => be !== X.id)
        );
      });
    }, []);
  return (
    oe.useEffect(
      () =>
        Sn.subscribe((X) => {
          if (X.dismiss) {
            requestAnimationFrame(() => {
              O((ee) => ee.map((ue) => (ue.id === X.id ? {...ue, delete: !0} : ue)));
            });
            return;
          }
          setTimeout(() => {
            SS.flushSync(() => {
              O((ee) => {
                const ue = ee.findIndex((be) => be.id === X.id);
                return ue !== -1 ? [...ee.slice(0, ue), {...ee[ue], ...X}, ...ee.slice(ue + 1)] : [X, ...ee];
              });
            });
          });
        }),
      [I],
    ),
    oe.useEffect(() => {
      if (S !== 'system') {
        V(S);
        return;
      }
      if (
        (S === 'system' &&
          (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? V('dark') : V('light')),
        typeof window > 'u')
      )
        return;
      const X = window.matchMedia('(prefers-color-scheme: dark)');
      try {
        X.addEventListener('change', ({matches: ee}) => {
          V(ee ? 'dark' : 'light');
        });
      } catch {
        X.addListener(({matches: ue}) => {
          try {
            V(ue ? 'dark' : 'light');
          } catch (be) {
            console.error(be);
          }
        });
      }
    }, [S]),
    oe.useEffect(() => {
      I.length <= 1 && ce(!1);
    }, [I]),
    oe.useEffect(() => {
      const X = (ee) => {
        var ue;
        if (c.every((ye) => ee[ye] || ee.code === ye)) {
          var re;
          (ce(!0), (re = B.current) == null || re.focus());
        }
        ee.code === 'Escape' &&
          (document.activeElement === B.current || ((ue = B.current) != null && ue.contains(document.activeElement))) &&
          ce(!1);
      };
      return (document.addEventListener('keydown', X), () => document.removeEventListener('keydown', X));
    }, [c]),
    oe.useEffect(() => {
      if (B.current)
        return () => {
          ge.current && (ge.current.focus({preventScroll: !0}), (ge.current = null), (D.current = !1));
        };
    }, [B.current]),
    oe.createElement(
      'section',
      {
        ref: r,
        'aria-label': `${$} ${fe}`,
        tabIndex: -1,
        'aria-live': 'polite',
        'aria-relevant': 'additions text',
        'aria-atomic': 'false',
        suppressHydrationWarning: !0,
      },
      Z.map((X, ee) => {
        var ue;
        const [be, re] = X.split('-');
        return P.length
          ? oe.createElement(
              'ol',
              {
                key: X,
                dir: A === 'auto' ? Qb() : A,
                tabIndex: -1,
                ref: B,
                className: h,
                'data-sonner-toaster': !0,
                'data-sonner-theme': N,
                'data-y-position': be,
                'data-x-position': re,
                style: {
                  '--front-toast-height': `${((ue = se[0]) == null ? void 0 : ue.height) || 0}px`,
                  '--width': `${B2}px`,
                  '--gap': `${_}px`,
                  ...w,
                  ...$2(y, g),
                },
                onBlur: (ye) => {
                  D.current &&
                    !ye.currentTarget.contains(ye.relatedTarget) &&
                    ((D.current = !1), ge.current && (ge.current.focus({preventScroll: !0}), (ge.current = null)));
                },
                onFocus: (ye) => {
                  (ye.target instanceof HTMLElement && ye.target.dataset.dismissible === 'false') ||
                    D.current ||
                    ((D.current = !0), (ge.current = ye.relatedTarget));
                },
                onMouseEnter: () => ce(!0),
                onMouseMove: () => ce(!0),
                onMouseLeave: () => {
                  ie || ce(!1);
                },
                onDragEnd: () => ce(!1),
                onPointerDown: (ye) => {
                  (ye.target instanceof HTMLElement && ye.target.dataset.dismissible === 'false') || he(!0);
                },
                onPointerUp: () => he(!1),
              },
              P.filter((ye) => (!ye.position && ee === 0) || ye.position === X).map((ye, Me) => {
                var Ue, He;
                return oe.createElement(Y2, {
                  key: ye.id,
                  icons: z,
                  index: Me,
                  toast: ye,
                  defaultRichColors: x,
                  duration: (Ue = R == null ? void 0 : R.duration) != null ? Ue : C,
                  className: R == null ? void 0 : R.className,
                  descriptionClassName: R == null ? void 0 : R.descriptionClassName,
                  invert: s,
                  visibleToasts: T,
                  closeButton: (He = R == null ? void 0 : R.closeButton) != null ? He : m,
                  interacting: ie,
                  position: X,
                  style: R == null ? void 0 : R.style,
                  unstyled: R == null ? void 0 : R.unstyled,
                  classNames: R == null ? void 0 : R.classNames,
                  cancelButtonStyle: R == null ? void 0 : R.cancelButtonStyle,
                  actionButtonStyle: R == null ? void 0 : R.actionButtonStyle,
                  closeButtonAriaLabel: R == null ? void 0 : R.closeButtonAriaLabel,
                  removeToast: K,
                  toasts: P.filter((Te) => Te.position == ye.position),
                  heights: se.filter((Te) => Te.position == ye.position),
                  setHeights: pe,
                  expandByDefault: d,
                  gap: _,
                  expanded: le,
                  swipeDirections: a.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FS = (...t) =>
  t
    .filter((a, r, l) => !!a && a.trim() !== '' && l.indexOf(a) === r)
    .join(' ')
    .trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G2 = (t) => t.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K2 = (t) => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, r, l) => (l ? l.toUpperCase() : r.toLowerCase()));
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ib = (t) => {
  const a = K2(t);
  return a.charAt(0).toUpperCase() + a.slice(1);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var X2 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q2 = (t) => {
  for (const a in t) if (a.startsWith('aria-') || a === 'role' || a === 'title') return !0;
  return !1;
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I2 = b.forwardRef(
  (
    {
      color: t = 'currentColor',
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: l,
      className: s = '',
      children: u,
      iconNode: c,
      ...d
    },
    m,
  ) =>
    b.createElement(
      'svg',
      {
        ref: m,
        ...X2,
        width: a,
        height: a,
        stroke: t,
        strokeWidth: l ? (Number(r) * 24) / Number(a) : r,
        className: FS('lucide', s),
        ...(!u && !Q2(d) && {'aria-hidden': 'true'}),
        ...d,
      },
      [...c.map(([h, y]) => b.createElement(h, y)), ...(Array.isArray(u) ? u : [u])],
    ),
);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fr = (t, a) => {
  const r = b.forwardRef(({className: l, ...s}, u) =>
    b.createElement(I2, {ref: u, iconNode: a, className: FS(`lucide-${G2(Ib(t))}`, `lucide-${t}`, l), ...s}),
  );
  return ((r.displayName = Ib(t)), r);
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z2 = [['path', {d: 'M20 6 9 17l-5-5', key: '1gmf2c'}]],
  J2 = fr('check', Z2);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W2 = [['path', {d: 'm6 9 6 6 6-6', key: 'qrunsl'}]],
  GS = fr('chevron-down', W2);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eD = [['path', {d: 'm18 15-6-6-6 6', key: '153udz'}]],
  tD = fr('chevron-up', eD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nD = [
    ['circle', {cx: '12', cy: '12', r: '10', key: '1mglay'}],
    ['path', {d: 'm9 12 2 2 4-4', key: 'dzmm74'}],
  ],
  aD = fr('circle-check', nD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rD = [
    ['circle', {cx: '12', cy: '12', r: '10', key: '1mglay'}],
    ['path', {d: 'M12 16v-4', key: '1dtifu'}],
    ['path', {d: 'M12 8h.01', key: 'e9boi3'}],
  ],
  iD = fr('info', rD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lD = [
    ['path', {d: 'm5 8 6 6', key: '1wu5hv'}],
    ['path', {d: 'm4 14 6-6 2-3', key: '1k1g8d'}],
    ['path', {d: 'M2 5h12', key: 'or177f'}],
    ['path', {d: 'M7 2h1', key: '1t2jsx'}],
    ['path', {d: 'm22 22-5-10-5 10', key: 'don7ne'}],
    ['path', {d: 'M14 18h6', key: '1m8k6r'}],
  ],
  oD = fr('languages', lD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sD = [['path', {d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald'}]],
  KS = fr('loader-circle', sD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uD = [
    ['path', {d: 'm15 9-6 6', key: '1uzhvr'}],
    [
      'path',
      {
        d: 'M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z',
        key: '2d38gg',
      },
    ],
    ['path', {d: 'm9 9 6 6', key: 'z0biqf'}],
  ],
  cD = fr('octagon-x', uD);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fD = [
    ['path', {d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', key: 'wmoenq'}],
    ['path', {d: 'M12 9v4', key: 'juzpu7'}],
    ['path', {d: 'M12 17h.01', key: 'p32p05'}],
  ],
  dD = fr('triangle-alert', fD),
  hD = ({...t}) =>
    j.jsx(F2, {
      theme: 'system',
      className: 'toaster group',
      icons: {
        success: j.jsx(aD, {className: 'h-4 w-4'}),
        info: j.jsx(iD, {className: 'h-4 w-4'}),
        warning: j.jsx(dD, {className: 'h-4 w-4'}),
        error: j.jsx(cD, {className: 'h-4 w-4'}),
        loading: j.jsx(KS, {className: 'h-4 w-4 animate-spin'}),
      },
      toastOptions: {
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      },
      ...t,
    }),
  mD = 3e3,
  pD = b.createContext(() => {});
function gD({children: t}) {
  const a = b.useCallback((r) => {
    const {severity: l = 'info', summary: s, detail: u, life: c, closable: d = !0, sticky: m = !1} = r,
      h = m ? 1 / 0 : (c ?? mD),
      y = s ?? '',
      S = {description: u, duration: h, closeButton: d};
    switch (l) {
      case 'success': {
        qu.success(y, S);
        break;
      }
      case 'error': {
        qu.error(y, S);
        break;
      }
      case 'warn': {
        qu.warning(y, S);
        break;
      }
      case 'info': {
        qu.info(y, S);
        break;
      }
    }
  }, []);
  return j.jsxs(pD, {value: a, children: [j.jsx(hD, {}), t]});
}
function yD(t, a) {
  const r = b.createContext(a),
    l = (u) => {
      const {children: c, ...d} = u,
        m = b.useMemo(() => d, Object.values(d));
      return j.jsx(r.Provider, {value: m, children: c});
    };
  l.displayName = t + 'Provider';
  function s(u) {
    const c = b.useContext(r);
    if (c) return c;
    if (a !== void 0) return a;
    throw new Error(`\`${u}\` must be used within \`${t}\``);
  }
  return [l, s];
}
function ws(t, a = []) {
  let r = [];
  function l(u, c) {
    const d = b.createContext(c),
      m = r.length;
    r = [...r, c];
    const h = (g) => {
      var R;
      const {scope: S, children: x, ...C} = g,
        w = ((R = S == null ? void 0 : S[t]) == null ? void 0 : R[m]) || d,
        T = b.useMemo(() => C, Object.values(C));
      return j.jsx(w.Provider, {value: T, children: x});
    };
    h.displayName = u + 'Provider';
    function y(g, S) {
      var w;
      const x = ((w = S == null ? void 0 : S[t]) == null ? void 0 : w[m]) || d,
        C = b.useContext(x);
      if (C) return C;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${u}\``);
    }
    return [h, y];
  }
  const s = () => {
    const u = r.map((c) => b.createContext(c));
    return function (d) {
      const m = (d == null ? void 0 : d[t]) || u;
      return b.useMemo(() => ({[`__scope${t}`]: {...d, [t]: m}}), [d, m]);
    };
  };
  return ((s.scopeName = t), [l, vD(s, ...a)]);
}
function vD(...t) {
  const a = t[0];
  if (t.length === 1) return a;
  const r = () => {
    const l = t.map((s) => ({useScope: s(), scopeName: s.scopeName}));
    return function (u) {
      const c = l.reduce((d, {useScope: m, scopeName: h}) => {
        const g = m(u)[`__scope${h}`];
        return {...d, ...g};
      }, {});
      return b.useMemo(() => ({[`__scope${a.scopeName}`]: c}), [c]);
    };
  };
  return ((r.scopeName = a.scopeName), r);
}
function Zb(t, a) {
  if (typeof t == 'function') return t(a);
  t != null && (t.current = a);
}
function Ql(...t) {
  return (a) => {
    let r = !1;
    const l = t.map((s) => {
      const u = Zb(s, a);
      return (!r && typeof u == 'function' && (r = !0), u);
    });
    if (r)
      return () => {
        for (let s = 0; s < l.length; s++) {
          const u = l[s];
          typeof u == 'function' ? u() : Zb(t[s], null);
        }
      };
  };
}
function wt(...t) {
  return b.useCallback(Ql(...t), t);
}
function ft(t, a, {checkForDefaultPrevented: r = !0} = {}) {
  return function (s) {
    if ((t == null || t(s), r === !1 || !s.defaultPrevented)) return a == null ? void 0 : a(s);
  };
}
var ln = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {},
  bD = Sc[' useId '.trim().toString()] || (() => {}),
  SD = 0;
function _l(t) {
  const [a, r] = b.useState(bD());
  return (
    ln(() => {
      r((l) => l ?? String(SD++));
    }, [t]),
    a ? `radix-${a}` : ''
  );
}
var xD = Sc[' useInsertionEffect '.trim().toString()] || ln;
function Xh({prop: t, defaultProp: a, onChange: r = () => {}, caller: l}) {
  const [s, u, c] = wD({defaultProp: a, onChange: r}),
    d = t !== void 0,
    m = d ? t : s;
  {
    const y = b.useRef(t !== void 0);
    b.useEffect(() => {
      const g = y.current;
      (g !== d &&
        console.warn(
          `${l} is changing from ${g ? 'controlled' : 'uncontrolled'} to ${d ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (y.current = d));
    }, [d, l]);
  }
  const h = b.useCallback(
    (y) => {
      var g;
      if (d) {
        const S = ED(y) ? y(t) : y;
        S !== t && ((g = c.current) == null || g.call(c, S));
      } else u(y);
    },
    [d, t, u, c],
  );
  return [m, h];
}
function wD({defaultProp: t, onChange: a}) {
  const [r, l] = b.useState(t),
    s = b.useRef(r),
    u = b.useRef(a);
  return (
    xD(() => {
      u.current = a;
    }, [a]),
    b.useEffect(() => {
      var c;
      s.current !== r && ((c = u.current) == null || c.call(u, r), (s.current = r));
    }, [r, s]),
    [r, l, u]
  );
}
function ED(t) {
  return typeof t == 'function';
}
function CD(t) {
  const a = TD(t),
    r = b.forwardRef((l, s) => {
      const {children: u, ...c} = l,
        d = b.Children.toArray(u),
        m = d.find(RD);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? b.Children.count(h) > 1
                ? b.Children.only(null)
                : b.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(a, {...c, ref: s, children: b.isValidElement(h) ? b.cloneElement(h, void 0, y) : null});
      }
      return j.jsx(a, {...c, ref: s, children: u});
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function TD(t) {
  const a = b.forwardRef((r, l) => {
    const {children: s, ...u} = r;
    if (b.isValidElement(s)) {
      const c = DD(s),
        d = AD(u, s.props);
      return (s.type !== b.Fragment && (d.ref = l ? Ql(l, c) : c), b.cloneElement(s, d));
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((a.displayName = `${t}.SlotClone`), a);
}
var OD = Symbol('radix.slottable');
function RD(t) {
  return b.isValidElement(t) && typeof t.type == 'function' && '__radixId' in t.type && t.type.__radixId === OD;
}
function AD(t, a) {
  const r = {...a};
  for (const l in a) {
    const s = t[l],
      u = a[l];
    /^on[A-Z]/.test(l)
      ? s && u
        ? (r[l] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (r[l] = s)
      : l === 'style'
        ? (r[l] = {...s, ...u})
        : l === 'className' && (r[l] = [s, u].filter(Boolean).join(' '));
  }
  return {...t, ...r};
}
function DD(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var MD = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  dt = MD.reduce((t, a) => {
    const r = CD(`Primitive.${a}`),
      l = b.forwardRef((s, u) => {
        const {asChild: c, ...d} = s,
          m = c ? r : a;
        return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), j.jsx(m, {...d, ref: u}));
      });
    return ((l.displayName = `Primitive.${a}`), {...t, [a]: l});
  }, {});
function ND(t, a) {
  t && Kl.flushSync(() => t.dispatchEvent(a));
}
function ji(t) {
  const a = b.useRef(t);
  return (
    b.useEffect(() => {
      a.current = t;
    }),
    b.useMemo(
      () =>
        (...r) => {
          var l;
          return (l = a.current) == null ? void 0 : l.call(a, ...r);
        },
      [],
    )
  );
}
function _D(t, a = globalThis == null ? void 0 : globalThis.document) {
  const r = ji(t);
  b.useEffect(() => {
    const l = (s) => {
      s.key === 'Escape' && r(s);
    };
    return (a.addEventListener('keydown', l, {capture: !0}), () => a.removeEventListener('keydown', l, {capture: !0}));
  }, [r, a]);
}
var LD = 'DismissableLayer',
  Qh = 'dismissableLayer.update',
  jD = 'dismissableLayer.pointerDownOutside',
  zD = 'dismissableLayer.focusOutside',
  Jb,
  XS = b.createContext({layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set()}),
  xm = b.forwardRef((t, a) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: s,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: d,
        ...m
      } = t,
      h = b.useContext(XS),
      [y, g] = b.useState(null),
      S = (y == null ? void 0 : y.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
      [, x] = b.useState({}),
      C = wt(a, (O) => g(O)),
      w = Array.from(h.layers),
      [T] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = w.indexOf(T),
      A = y ? w.indexOf(y) : -1,
      _ = h.layersWithOutsidePointerEventsDisabled.size > 0,
      z = A >= R,
      $ = BD((O) => {
        const P = O.target,
          Z = [...h.branches].some((se) => se.contains(P));
        !z || Z || (s == null || s(O), c == null || c(O), O.defaultPrevented || d == null || d());
      }, S),
      I = kD((O) => {
        const P = O.target;
        [...h.branches].some((se) => se.contains(P)) ||
          (u == null || u(O), c == null || c(O), O.defaultPrevented || d == null || d());
      }, S);
    return (
      _D((O) => {
        A === h.layers.size - 1 && (l == null || l(O), !O.defaultPrevented && d && (O.preventDefault(), d()));
      }, S),
      b.useEffect(() => {
        if (y)
          return (
            r &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Jb = S.body.style.pointerEvents), (S.body.style.pointerEvents = 'none')),
              h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            Wb(),
            () => {
              r && h.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Jb);
            }
          );
      }, [y, S, r, h]),
      b.useEffect(
        () => () => {
          y && (h.layers.delete(y), h.layersWithOutsidePointerEventsDisabled.delete(y), Wb());
        },
        [y, h],
      ),
      b.useEffect(() => {
        const O = () => x({});
        return (document.addEventListener(Qh, O), () => document.removeEventListener(Qh, O));
      }, []),
      j.jsx(dt.div, {
        ...m,
        ref: C,
        style: {pointerEvents: _ ? (z ? 'auto' : 'none') : void 0, ...t.style},
        onFocusCapture: ft(t.onFocusCapture, I.onFocusCapture),
        onBlurCapture: ft(t.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: ft(t.onPointerDownCapture, $.onPointerDownCapture),
      })
    );
  });
xm.displayName = LD;
var UD = 'DismissableLayerBranch',
  HD = b.forwardRef((t, a) => {
    const r = b.useContext(XS),
      l = b.useRef(null),
      s = wt(a, l);
    return (
      b.useEffect(() => {
        const u = l.current;
        if (u)
          return (
            r.branches.add(u),
            () => {
              r.branches.delete(u);
            }
          );
      }, [r.branches]),
      j.jsx(dt.div, {...t, ref: s})
    );
  });
HD.displayName = UD;
function BD(t, a = globalThis == null ? void 0 : globalThis.document) {
  const r = ji(t),
    l = b.useRef(!1),
    s = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const u = (d) => {
          if (d.target && !l.current) {
            let m = function () {
              QS(jD, r, h, {discrete: !0});
            };
            const h = {originalEvent: d};
            d.pointerType === 'touch'
              ? (a.removeEventListener('click', s.current),
                (s.current = m),
                a.addEventListener('click', s.current, {once: !0}))
              : m();
          } else a.removeEventListener('click', s.current);
          l.current = !1;
        },
        c = window.setTimeout(() => {
          a.addEventListener('pointerdown', u);
        }, 0);
      return () => {
        (window.clearTimeout(c), a.removeEventListener('pointerdown', u), a.removeEventListener('click', s.current));
      };
    }, [a, r]),
    {onPointerDownCapture: () => (l.current = !0)}
  );
}
function kD(t, a = globalThis == null ? void 0 : globalThis.document) {
  const r = ji(t),
    l = b.useRef(!1);
  return (
    b.useEffect(() => {
      const s = (u) => {
        u.target && !l.current && QS(zD, r, {originalEvent: u}, {discrete: !1});
      };
      return (a.addEventListener('focusin', s), () => a.removeEventListener('focusin', s));
    }, [a, r]),
    {onFocusCapture: () => (l.current = !0), onBlurCapture: () => (l.current = !1)}
  );
}
function Wb() {
  const t = new CustomEvent(Qh);
  document.dispatchEvent(t);
}
function QS(t, a, r, {discrete: l}) {
  const s = r.originalEvent.target,
    u = new CustomEvent(t, {bubbles: !1, cancelable: !0, detail: r});
  (a && s.addEventListener(t, a, {once: !0}), l ? ND(s, u) : s.dispatchEvent(u));
}
var yh = 'focusScope.autoFocusOnMount',
  vh = 'focusScope.autoFocusOnUnmount',
  e0 = {bubbles: !1, cancelable: !0},
  PD = 'FocusScope',
  wm = b.forwardRef((t, a) => {
    const {loop: r = !1, trapped: l = !1, onMountAutoFocus: s, onUnmountAutoFocus: u, ...c} = t,
      [d, m] = b.useState(null),
      h = ji(s),
      y = ji(u),
      g = b.useRef(null),
      S = wt(a, (w) => m(w)),
      x = b.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (b.useEffect(() => {
      if (l) {
        let w = function (_) {
            if (x.paused || !d) return;
            const z = _.target;
            d.contains(z) ? (g.current = z) : kr(g.current, {select: !0});
          },
          T = function (_) {
            if (x.paused || !d) return;
            const z = _.relatedTarget;
            z !== null && (d.contains(z) || kr(g.current, {select: !0}));
          },
          R = function (_) {
            if (document.activeElement === document.body) for (const $ of _) $.removedNodes.length > 0 && kr(d);
          };
        (document.addEventListener('focusin', w), document.addEventListener('focusout', T));
        const A = new MutationObserver(R);
        return (
          d && A.observe(d, {childList: !0, subtree: !0}),
          () => {
            (document.removeEventListener('focusin', w), document.removeEventListener('focusout', T), A.disconnect());
          }
        );
      }
    }, [l, d, x.paused]),
      b.useEffect(() => {
        if (d) {
          n0.add(x);
          const w = document.activeElement;
          if (!d.contains(w)) {
            const R = new CustomEvent(yh, e0);
            (d.addEventListener(yh, h),
              d.dispatchEvent(R),
              R.defaultPrevented || (VD(GD(IS(d)), {select: !0}), document.activeElement === w && kr(d)));
          }
          return () => {
            (d.removeEventListener(yh, h),
              setTimeout(() => {
                const R = new CustomEvent(vh, e0);
                (d.addEventListener(vh, y),
                  d.dispatchEvent(R),
                  R.defaultPrevented || kr(w ?? document.body, {select: !0}),
                  d.removeEventListener(vh, y),
                  n0.remove(x));
              }, 0));
          };
        }
      }, [d, h, y, x]));
    const C = b.useCallback(
      (w) => {
        if ((!r && !l) || x.paused) return;
        const T = w.key === 'Tab' && !w.altKey && !w.ctrlKey && !w.metaKey,
          R = document.activeElement;
        if (T && R) {
          const A = w.currentTarget,
            [_, z] = qD(A);
          _ && z
            ? !w.shiftKey && R === z
              ? (w.preventDefault(), r && kr(_, {select: !0}))
              : w.shiftKey && R === _ && (w.preventDefault(), r && kr(z, {select: !0}))
            : R === A && w.preventDefault();
        }
      },
      [r, l, x.paused],
    );
    return j.jsx(dt.div, {tabIndex: -1, ...c, ref: S, onKeyDown: C});
  });
wm.displayName = PD;
function VD(t, {select: a = !1} = {}) {
  const r = document.activeElement;
  for (const l of t) if ((kr(l, {select: a}), document.activeElement !== r)) return;
}
function qD(t) {
  const a = IS(t),
    r = t0(a, t),
    l = t0(a.reverse(), t);
  return [r, l];
}
function IS(t) {
  const a = [],
    r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const s = l.tagName === 'INPUT' && l.type === 'hidden';
        return l.disabled || l.hidden || s
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) a.push(r.currentNode);
  return a;
}
function t0(t, a) {
  for (const r of t) if (!YD(r, {upTo: a})) return r;
}
function YD(t, {upTo: a}) {
  if (getComputedStyle(t).visibility === 'hidden') return !0;
  for (; t; ) {
    if (a !== void 0 && t === a) return !1;
    if (getComputedStyle(t).display === 'none') return !0;
    t = t.parentElement;
  }
  return !1;
}
function $D(t) {
  return t instanceof HTMLInputElement && 'select' in t;
}
function kr(t, {select: a = !1} = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    (t.focus({preventScroll: !0}), t !== r && $D(t) && a && t.select());
  }
}
var n0 = FD();
function FD() {
  let t = [];
  return {
    add(a) {
      const r = t[0];
      (a !== r && (r == null || r.pause()), (t = a0(t, a)), t.unshift(a));
    },
    remove(a) {
      var r;
      ((t = a0(t, a)), (r = t[0]) == null || r.resume());
    },
  };
}
function a0(t, a) {
  const r = [...t],
    l = r.indexOf(a);
  return (l !== -1 && r.splice(l, 1), r);
}
function GD(t) {
  return t.filter((a) => a.tagName !== 'A');
}
var KD = 'Portal',
  Em = b.forwardRef((t, a) => {
    var d;
    const {container: r, ...l} = t,
      [s, u] = b.useState(!1);
    ln(() => u(!0), []);
    const c = r || (s && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body));
    return c ? SS.createPortal(j.jsx(dt.div, {...l, ref: a}), c) : null;
  });
Em.displayName = KD;
function XD(t, a) {
  return b.useReducer((r, l) => a[r][l] ?? r, t);
}
var Dc = (t) => {
  const {present: a, children: r} = t,
    l = QD(a),
    s = typeof r == 'function' ? r({present: l.isPresent}) : b.Children.only(r),
    u = wt(l.ref, ID(s));
  return typeof r == 'function' || l.isPresent ? b.cloneElement(s, {ref: u}) : null;
};
Dc.displayName = 'Presence';
function QD(t) {
  const [a, r] = b.useState(),
    l = b.useRef(null),
    s = b.useRef(t),
    u = b.useRef('none'),
    c = t ? 'mounted' : 'unmounted',
    [d, m] = XD(c, {
      mounted: {UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended'},
      unmountSuspended: {MOUNT: 'mounted', ANIMATION_END: 'unmounted'},
      unmounted: {MOUNT: 'mounted'},
    });
  return (
    b.useEffect(() => {
      const h = $u(l.current);
      u.current = d === 'mounted' ? h : 'none';
    }, [d]),
    ln(() => {
      const h = l.current,
        y = s.current;
      if (y !== t) {
        const S = u.current,
          x = $u(h);
        (t
          ? m('MOUNT')
          : x === 'none' || (h == null ? void 0 : h.display) === 'none'
            ? m('UNMOUNT')
            : m(y && S !== x ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (s.current = t));
      }
    }, [t, m]),
    ln(() => {
      if (a) {
        let h;
        const y = a.ownerDocument.defaultView ?? window,
          g = (x) => {
            const w = $u(l.current).includes(CSS.escape(x.animationName));
            if (x.target === a && w && (m('ANIMATION_END'), !s.current)) {
              const T = a.style.animationFillMode;
              ((a.style.animationFillMode = 'forwards'),
                (h = y.setTimeout(() => {
                  a.style.animationFillMode === 'forwards' && (a.style.animationFillMode = T);
                })));
            }
          },
          S = (x) => {
            x.target === a && (u.current = $u(l.current));
          };
        return (
          a.addEventListener('animationstart', S),
          a.addEventListener('animationcancel', g),
          a.addEventListener('animationend', g),
          () => {
            (y.clearTimeout(h),
              a.removeEventListener('animationstart', S),
              a.removeEventListener('animationcancel', g),
              a.removeEventListener('animationend', g));
          }
        );
      } else m('ANIMATION_END');
    }, [a, m]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(d),
      ref: b.useCallback((h) => {
        ((l.current = h ? getComputedStyle(h) : null), r(h));
      }, []),
    }
  );
}
function $u(t) {
  return (t == null ? void 0 : t.animationName) || 'none';
}
function ID(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var bh = 0;
function ZS() {
  b.useEffect(() => {
    const t = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', t[0] ?? r0()),
      document.body.insertAdjacentElement('beforeend', t[1] ?? r0()),
      bh++,
      () => {
        (bh === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach((a) => a.remove()), bh--);
      }
    );
  }, []);
}
function r0() {
  const t = document.createElement('span');
  return (
    t.setAttribute('data-radix-focus-guard', ''),
    (t.tabIndex = 0),
    (t.style.outline = 'none'),
    (t.style.opacity = '0'),
    (t.style.position = 'fixed'),
    (t.style.pointerEvents = 'none'),
    t
  );
}
var Oa = function () {
  return (
    (Oa =
      Object.assign ||
      function (a) {
        for (var r, l = 1, s = arguments.length; l < s; l++) {
          r = arguments[l];
          for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u]);
        }
        return a;
      }),
    Oa.apply(this, arguments)
  );
};
function JS(t, a) {
  var r = {};
  for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && a.indexOf(l) < 0 && (r[l] = t[l]);
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var s = 0, l = Object.getOwnPropertySymbols(t); s < l.length; s++)
      a.indexOf(l[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, l[s]) && (r[l[s]] = t[l[s]]);
  return r;
}
function ZD(t, a, r) {
  if (r || arguments.length === 2)
    for (var l = 0, s = a.length, u; l < s; l++)
      (u || !(l in a)) && (u || (u = Array.prototype.slice.call(a, 0, l)), (u[l] = a[l]));
  return t.concat(u || Array.prototype.slice.call(a));
}
var nc = 'right-scroll-bar-position',
  ac = 'width-before-scroll-bar',
  JD = 'with-scroll-bars-hidden',
  WD = '--removed-body-scroll-bar-size';
function Sh(t, a) {
  return (typeof t == 'function' ? t(a) : t && (t.current = a), t);
}
function eM(t, a) {
  var r = b.useState(function () {
    return {
      value: t,
      callback: a,
      facade: {
        get current() {
          return r.value;
        },
        set current(l) {
          var s = r.value;
          s !== l && ((r.value = l), r.callback(l, s));
        },
      },
    };
  })[0];
  return ((r.callback = a), r.facade);
}
var tM = typeof window < 'u' ? b.useLayoutEffect : b.useEffect,
  i0 = new WeakMap();
function nM(t, a) {
  var r = eM(null, function (l) {
    return t.forEach(function (s) {
      return Sh(s, l);
    });
  });
  return (
    tM(
      function () {
        var l = i0.get(r);
        if (l) {
          var s = new Set(l),
            u = new Set(t),
            c = r.current;
          (s.forEach(function (d) {
            u.has(d) || Sh(d, null);
          }),
            u.forEach(function (d) {
              s.has(d) || Sh(d, c);
            }));
        }
        i0.set(r, t);
      },
      [t],
    ),
    r
  );
}
function aM(t) {
  return t;
}
function rM(t, a) {
  a === void 0 && (a = aM);
  var r = [],
    l = !1,
    s = {
      read: function () {
        if (l)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return r.length ? r[r.length - 1] : t;
      },
      useMedium: function (u) {
        var c = a(u, l);
        return (
          r.push(c),
          function () {
            r = r.filter(function (d) {
              return d !== c;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (l = !0; r.length; ) {
          var c = r;
          ((r = []), c.forEach(u));
        }
        r = {
          push: function (d) {
            return u(d);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (u) {
        l = !0;
        var c = [];
        if (r.length) {
          var d = r;
          ((r = []), d.forEach(u), (c = r));
        }
        var m = function () {
            var y = c;
            ((c = []), y.forEach(u));
          },
          h = function () {
            return Promise.resolve().then(m);
          };
        (h(),
          (r = {
            push: function (y) {
              (c.push(y), h());
            },
            filter: function (y) {
              return ((c = c.filter(y)), r);
            },
          }));
      },
    };
  return s;
}
function iM(t) {
  t === void 0 && (t = {});
  var a = rM(null);
  return ((a.options = Oa({async: !0, ssr: !1}, t)), a);
}
var WS = function (t) {
  var a = t.sideCar,
    r = JS(t, ['sideCar']);
  if (!a) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var l = a.read();
  if (!l) throw new Error('Sidecar medium not found');
  return b.createElement(l, Oa({}, r));
};
WS.isSideCarExport = !0;
function lM(t, a) {
  return (t.useMedium(a), WS);
}
var ex = iM(),
  xh = function () {},
  Mc = b.forwardRef(function (t, a) {
    var r = b.useRef(null),
      l = b.useState({onScrollCapture: xh, onWheelCapture: xh, onTouchMoveCapture: xh}),
      s = l[0],
      u = l[1],
      c = t.forwardProps,
      d = t.children,
      m = t.className,
      h = t.removeScrollBar,
      y = t.enabled,
      g = t.shards,
      S = t.sideCar,
      x = t.noRelative,
      C = t.noIsolation,
      w = t.inert,
      T = t.allowPinchZoom,
      R = t.as,
      A = R === void 0 ? 'div' : R,
      _ = t.gapMode,
      z = JS(t, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      $ = S,
      I = nM([r, a]),
      O = Oa(Oa({}, z), s);
    return b.createElement(
      b.Fragment,
      null,
      y &&
        b.createElement($, {
          sideCar: ex,
          removeScrollBar: h,
          shards: g,
          noRelative: x,
          noIsolation: C,
          inert: w,
          setCallbacks: u,
          allowPinchZoom: !!T,
          lockRef: r,
          gapMode: _,
        }),
      c
        ? b.cloneElement(b.Children.only(d), Oa(Oa({}, O), {ref: I}))
        : b.createElement(A, Oa({}, O, {className: m, ref: I}), d),
    );
  });
Mc.defaultProps = {enabled: !0, removeScrollBar: !0, inert: !1};
Mc.classNames = {fullWidth: ac, zeroRight: nc};
var oM = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function sM() {
  if (!document) return null;
  var t = document.createElement('style');
  t.type = 'text/css';
  var a = oM();
  return (a && t.setAttribute('nonce', a), t);
}
function uM(t, a) {
  t.styleSheet ? (t.styleSheet.cssText = a) : t.appendChild(document.createTextNode(a));
}
function cM(t) {
  var a = document.head || document.getElementsByTagName('head')[0];
  a.appendChild(t);
}
var fM = function () {
    var t = 0,
      a = null;
    return {
      add: function (r) {
        (t == 0 && (a = sM()) && (uM(a, r), cM(a)), t++);
      },
      remove: function () {
        (t--, !t && a && (a.parentNode && a.parentNode.removeChild(a), (a = null)));
      },
    };
  },
  dM = function () {
    var t = fM();
    return function (a, r) {
      b.useEffect(
        function () {
          return (
            t.add(a),
            function () {
              t.remove();
            }
          );
        },
        [a && r],
      );
    };
  },
  tx = function () {
    var t = dM(),
      a = function (r) {
        var l = r.styles,
          s = r.dynamic;
        return (t(l, s), null);
      };
    return a;
  },
  hM = {left: 0, top: 0, right: 0, gap: 0},
  wh = function (t) {
    return parseInt(t || '', 10) || 0;
  },
  mM = function (t) {
    var a = window.getComputedStyle(document.body),
      r = a[t === 'padding' ? 'paddingLeft' : 'marginLeft'],
      l = a[t === 'padding' ? 'paddingTop' : 'marginTop'],
      s = a[t === 'padding' ? 'paddingRight' : 'marginRight'];
    return [wh(r), wh(l), wh(s)];
  },
  pM = function (t) {
    if ((t === void 0 && (t = 'margin'), typeof window > 'u')) return hM;
    var a = mM(t),
      r = document.documentElement.clientWidth,
      l = window.innerWidth;
    return {left: a[0], top: a[1], right: a[2], gap: Math.max(0, l - r + a[2] - a[0])};
  },
  gM = tx(),
  Ll = 'data-scroll-locked',
  yM = function (t, a, r, l) {
    var s = t.left,
      u = t.top,
      c = t.right,
      d = t.gap;
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          JD,
          ` {
   overflow: hidden `,
        )
        .concat(
          l,
          `;
   padding-right: `,
        )
        .concat(d, 'px ')
        .concat(
          l,
          `;
  }
  body[`,
        )
        .concat(
          Ll,
          `] {
    overflow: hidden `,
        )
        .concat(
          l,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            a && 'position: relative '.concat(l, ';'),
            r === 'margin' &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  u,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(d, 'px ')
                .concat(
                  l,
                  `;
    `,
                ),
            r === 'padding' && 'padding-right: '.concat(d, 'px ').concat(l, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          nc,
          ` {
    right: `,
        )
        .concat(d, 'px ')
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(
          ac,
          ` {
    margin-right: `,
        )
        .concat(d, 'px ')
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(nc, ' .')
        .concat(
          nc,
          ` {
    right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(ac, ' .')
        .concat(
          ac,
          ` {
    margin-right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  body[`,
        )
        .concat(
          Ll,
          `] {
    `,
        )
        .concat(WD, ': ')
        .concat(
          d,
          `px;
  }
`,
        )
    );
  },
  l0 = function () {
    var t = parseInt(document.body.getAttribute(Ll) || '0', 10);
    return isFinite(t) ? t : 0;
  },
  vM = function () {
    b.useEffect(function () {
      return (
        document.body.setAttribute(Ll, (l0() + 1).toString()),
        function () {
          var t = l0() - 1;
          t <= 0 ? document.body.removeAttribute(Ll) : document.body.setAttribute(Ll, t.toString());
        }
      );
    }, []);
  },
  bM = function (t) {
    var a = t.noRelative,
      r = t.noImportant,
      l = t.gapMode,
      s = l === void 0 ? 'margin' : l;
    vM();
    var u = b.useMemo(
      function () {
        return pM(s);
      },
      [s],
    );
    return b.createElement(gM, {styles: yM(u, !a, s, r ? '' : '!important')});
  },
  Ih = !1;
if (typeof window < 'u')
  try {
    var Fu = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((Ih = !0), !0);
      },
    });
    (window.addEventListener('test', Fu, Fu), window.removeEventListener('test', Fu, Fu));
  } catch {
    Ih = !1;
  }
var El = Ih ? {passive: !1} : !1,
  SM = function (t) {
    return t.tagName === 'TEXTAREA';
  },
  nx = function (t, a) {
    if (!(t instanceof Element)) return !1;
    var r = window.getComputedStyle(t);
    return r[a] !== 'hidden' && !(r.overflowY === r.overflowX && !SM(t) && r[a] === 'visible');
  },
  xM = function (t) {
    return nx(t, 'overflowY');
  },
  wM = function (t) {
    return nx(t, 'overflowX');
  },
  o0 = function (t, a) {
    var r = a.ownerDocument,
      l = a;
    do {
      typeof ShadowRoot < 'u' && l instanceof ShadowRoot && (l = l.host);
      var s = ax(t, l);
      if (s) {
        var u = rx(t, l),
          c = u[1],
          d = u[2];
        if (c > d) return !0;
      }
      l = l.parentNode;
    } while (l && l !== r.body);
    return !1;
  },
  EM = function (t) {
    var a = t.scrollTop,
      r = t.scrollHeight,
      l = t.clientHeight;
    return [a, r, l];
  },
  CM = function (t) {
    var a = t.scrollLeft,
      r = t.scrollWidth,
      l = t.clientWidth;
    return [a, r, l];
  },
  ax = function (t, a) {
    return t === 'v' ? xM(a) : wM(a);
  },
  rx = function (t, a) {
    return t === 'v' ? EM(a) : CM(a);
  },
  TM = function (t, a) {
    return t === 'h' && a === 'rtl' ? -1 : 1;
  },
  OM = function (t, a, r, l, s) {
    var u = TM(t, window.getComputedStyle(a).direction),
      c = u * l,
      d = r.target,
      m = a.contains(d),
      h = !1,
      y = c > 0,
      g = 0,
      S = 0;
    do {
      if (!d) break;
      var x = rx(t, d),
        C = x[0],
        w = x[1],
        T = x[2],
        R = w - T - u * C;
      (C || R) && ax(t, d) && ((g += R), (S += C));
      var A = d.parentNode;
      d = A && A.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? A.host : A;
    } while ((!m && d !== document.body) || (m && (a.contains(d) || a === d)));
    return (((y && Math.abs(g) < 1) || (!y && Math.abs(S) < 1)) && (h = !0), h);
  },
  Gu = function (t) {
    return 'changedTouches' in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
  },
  s0 = function (t) {
    return [t.deltaX, t.deltaY];
  },
  u0 = function (t) {
    return t && 'current' in t ? t.current : t;
  },
  RM = function (t, a) {
    return t[0] === a[0] && t[1] === a[1];
  },
  AM = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        t,
        ` {pointer-events: all;}
`,
      );
  },
  DM = 0,
  Cl = [];
function MM(t) {
  var a = b.useRef([]),
    r = b.useRef([0, 0]),
    l = b.useRef(),
    s = b.useState(DM++)[0],
    u = b.useState(tx)[0],
    c = b.useRef(t);
  (b.useEffect(
    function () {
      c.current = t;
    },
    [t],
  ),
    b.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add('block-interactivity-'.concat(s));
          var w = ZD([t.lockRef.current], (t.shards || []).map(u0), !0).filter(Boolean);
          return (
            w.forEach(function (T) {
              return T.classList.add('allow-interactivity-'.concat(s));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(s)),
                w.forEach(function (T) {
                  return T.classList.remove('allow-interactivity-'.concat(s));
                }));
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards],
    ));
  var d = b.useCallback(function (w, T) {
      if (('touches' in w && w.touches.length === 2) || (w.type === 'wheel' && w.ctrlKey))
        return !c.current.allowPinchZoom;
      var R = Gu(w),
        A = r.current,
        _ = 'deltaX' in w ? w.deltaX : A[0] - R[0],
        z = 'deltaY' in w ? w.deltaY : A[1] - R[1],
        $,
        I = w.target,
        O = Math.abs(_) > Math.abs(z) ? 'h' : 'v';
      if ('touches' in w && O === 'h' && I.type === 'range') return !1;
      var P = window.getSelection(),
        Z = P && P.anchorNode,
        se = Z ? Z === I || Z.contains(I) : !1;
      if (se) return !1;
      var pe = o0(O, I);
      if (!pe) return !0;
      if ((pe ? ($ = O) : (($ = O === 'v' ? 'h' : 'v'), (pe = o0(O, I))), !pe)) return !1;
      if ((!l.current && 'changedTouches' in w && (_ || z) && (l.current = $), !$)) return !0;
      var le = l.current || $;
      return OM(le, T, w, le === 'h' ? _ : z);
    }, []),
    m = b.useCallback(function (w) {
      var T = w;
      if (!(!Cl.length || Cl[Cl.length - 1] !== u)) {
        var R = 'deltaY' in T ? s0(T) : Gu(T),
          A = a.current.filter(function ($) {
            return $.name === T.type && ($.target === T.target || T.target === $.shadowParent) && RM($.delta, R);
          })[0];
        if (A && A.should) {
          T.cancelable && T.preventDefault();
          return;
        }
        if (!A) {
          var _ = (c.current.shards || [])
              .map(u0)
              .filter(Boolean)
              .filter(function ($) {
                return $.contains(T.target);
              }),
            z = _.length > 0 ? d(T, _[0]) : !c.current.noIsolation;
          z && T.cancelable && T.preventDefault();
        }
      }
    }, []),
    h = b.useCallback(function (w, T, R, A) {
      var _ = {name: w, delta: T, target: R, should: A, shadowParent: NM(R)};
      (a.current.push(_),
        setTimeout(function () {
          a.current = a.current.filter(function (z) {
            return z !== _;
          });
        }, 1));
    }, []),
    y = b.useCallback(function (w) {
      ((r.current = Gu(w)), (l.current = void 0));
    }, []),
    g = b.useCallback(function (w) {
      h(w.type, s0(w), w.target, d(w, t.lockRef.current));
    }, []),
    S = b.useCallback(function (w) {
      h(w.type, Gu(w), w.target, d(w, t.lockRef.current));
    }, []);
  b.useEffect(function () {
    return (
      Cl.push(u),
      t.setCallbacks({onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: S}),
      document.addEventListener('wheel', m, El),
      document.addEventListener('touchmove', m, El),
      document.addEventListener('touchstart', y, El),
      function () {
        ((Cl = Cl.filter(function (w) {
          return w !== u;
        })),
          document.removeEventListener('wheel', m, El),
          document.removeEventListener('touchmove', m, El),
          document.removeEventListener('touchstart', y, El));
      }
    );
  }, []);
  var x = t.removeScrollBar,
    C = t.inert;
  return b.createElement(
    b.Fragment,
    null,
    C ? b.createElement(u, {styles: AM(s)}) : null,
    x ? b.createElement(bM, {noRelative: t.noRelative, gapMode: t.gapMode}) : null,
  );
}
function NM(t) {
  for (var a = null; t !== null; ) (t instanceof ShadowRoot && ((a = t.host), (t = t.host)), (t = t.parentNode));
  return a;
}
const _M = lM(ex, MM);
var Cm = b.forwardRef(function (t, a) {
  return b.createElement(Mc, Oa({}, t, {ref: a, sideCar: _M}));
});
Cm.classNames = Mc.classNames;
var LM = function (t) {
    if (typeof document > 'u') return null;
    var a = Array.isArray(t) ? t[0] : t;
    return a.ownerDocument.body;
  },
  Tl = new WeakMap(),
  Ku = new WeakMap(),
  Xu = {},
  Eh = 0,
  ix = function (t) {
    return t && (t.host || ix(t.parentNode));
  },
  jM = function (t, a) {
    return a
      .map(function (r) {
        if (t.contains(r)) return r;
        var l = ix(r);
        return l && t.contains(l)
          ? l
          : (console.error('aria-hidden', r, 'in not contained inside', t, '. Doing nothing'), null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  zM = function (t, a, r, l) {
    var s = jM(a, Array.isArray(t) ? t : [t]);
    Xu[r] || (Xu[r] = new WeakMap());
    var u = Xu[r],
      c = [],
      d = new Set(),
      m = new Set(s),
      h = function (g) {
        !g || d.has(g) || (d.add(g), h(g.parentNode));
      };
    s.forEach(h);
    var y = function (g) {
      !g ||
        m.has(g) ||
        Array.prototype.forEach.call(g.children, function (S) {
          if (d.has(S)) y(S);
          else
            try {
              var x = S.getAttribute(l),
                C = x !== null && x !== 'false',
                w = (Tl.get(S) || 0) + 1,
                T = (u.get(S) || 0) + 1;
              (Tl.set(S, w),
                u.set(S, T),
                c.push(S),
                w === 1 && C && Ku.set(S, !0),
                T === 1 && S.setAttribute(r, 'true'),
                C || S.setAttribute(l, 'true'));
            } catch (R) {
              console.error('aria-hidden: cannot operate on ', S, R);
            }
        });
    };
    return (
      y(a),
      d.clear(),
      Eh++,
      function () {
        (c.forEach(function (g) {
          var S = Tl.get(g) - 1,
            x = u.get(g) - 1;
          (Tl.set(g, S),
            u.set(g, x),
            S || (Ku.has(g) || g.removeAttribute(l), Ku.delete(g)),
            x || g.removeAttribute(r));
        }),
          Eh--,
          Eh || ((Tl = new WeakMap()), (Tl = new WeakMap()), (Ku = new WeakMap()), (Xu = {})));
      }
    );
  },
  lx = function (t, a, r) {
    r === void 0 && (r = 'data-aria-hidden');
    var l = Array.from(Array.isArray(t) ? t : [t]),
      s = LM(t);
    return s
      ? (l.push.apply(l, Array.from(s.querySelectorAll('[aria-live], script'))), zM(l, s, r, 'aria-hidden'))
      : function () {
          return null;
        };
  };
function UM(t) {
  const a = HM(t),
    r = b.forwardRef((l, s) => {
      const {children: u, ...c} = l,
        d = b.Children.toArray(u),
        m = d.find(kM);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? b.Children.count(h) > 1
                ? b.Children.only(null)
                : b.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(a, {...c, ref: s, children: b.isValidElement(h) ? b.cloneElement(h, void 0, y) : null});
      }
      return j.jsx(a, {...c, ref: s, children: u});
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function HM(t) {
  const a = b.forwardRef((r, l) => {
    const {children: s, ...u} = r;
    if (b.isValidElement(s)) {
      const c = VM(s),
        d = PM(u, s.props);
      return (s.type !== b.Fragment && (d.ref = l ? Ql(l, c) : c), b.cloneElement(s, d));
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((a.displayName = `${t}.SlotClone`), a);
}
var BM = Symbol('radix.slottable');
function kM(t) {
  return b.isValidElement(t) && typeof t.type == 'function' && '__radixId' in t.type && t.type.__radixId === BM;
}
function PM(t, a) {
  const r = {...a};
  for (const l in a) {
    const s = t[l],
      u = a[l];
    /^on[A-Z]/.test(l)
      ? s && u
        ? (r[l] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (r[l] = s)
      : l === 'style'
        ? (r[l] = {...s, ...u})
        : l === 'className' && (r[l] = [s, u].filter(Boolean).join(' '));
  }
  return {...t, ...r};
}
function VM(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var Nc = 'Dialog',
  [ox, sx] = ws(Nc),
  [qM, pa] = ox(Nc),
  ux = (t) => {
    const {__scopeDialog: a, children: r, open: l, defaultOpen: s, onOpenChange: u, modal: c = !0} = t,
      d = b.useRef(null),
      m = b.useRef(null),
      [h, y] = Xh({prop: l, defaultProp: s ?? !1, onChange: u, caller: Nc});
    return j.jsx(qM, {
      scope: a,
      triggerRef: d,
      contentRef: m,
      contentId: _l(),
      titleId: _l(),
      descriptionId: _l(),
      open: h,
      onOpenChange: y,
      onOpenToggle: b.useCallback(() => y((g) => !g), [y]),
      modal: c,
      children: r,
    });
  };
ux.displayName = Nc;
var cx = 'DialogTrigger',
  fx = b.forwardRef((t, a) => {
    const {__scopeDialog: r, ...l} = t,
      s = pa(cx, r),
      u = wt(a, s.triggerRef);
    return j.jsx(dt.button, {
      type: 'button',
      'aria-haspopup': 'dialog',
      'aria-expanded': s.open,
      'aria-controls': s.contentId,
      'data-state': Rm(s.open),
      ...l,
      ref: u,
      onClick: ft(t.onClick, s.onOpenToggle),
    });
  });
fx.displayName = cx;
var Tm = 'DialogPortal',
  [YM, dx] = ox(Tm, {forceMount: void 0}),
  hx = (t) => {
    const {__scopeDialog: a, forceMount: r, children: l, container: s} = t,
      u = pa(Tm, a);
    return j.jsx(YM, {
      scope: a,
      forceMount: r,
      children: b.Children.map(l, (c) =>
        j.jsx(Dc, {present: r || u.open, children: j.jsx(Em, {asChild: !0, container: s, children: c})}),
      ),
    });
  };
hx.displayName = Tm;
var fc = 'DialogOverlay',
  mx = b.forwardRef((t, a) => {
    const r = dx(fc, t.__scopeDialog),
      {forceMount: l = r.forceMount, ...s} = t,
      u = pa(fc, t.__scopeDialog);
    return u.modal ? j.jsx(Dc, {present: l || u.open, children: j.jsx(FM, {...s, ref: a})}) : null;
  });
mx.displayName = fc;
var $M = UM('DialogOverlay.RemoveScroll'),
  FM = b.forwardRef((t, a) => {
    const {__scopeDialog: r, ...l} = t,
      s = pa(fc, r);
    return j.jsx(Cm, {
      as: $M,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: j.jsx(dt.div, {'data-state': Rm(s.open), ...l, ref: a, style: {pointerEvents: 'auto', ...l.style}}),
    });
  }),
  zi = 'DialogContent',
  px = b.forwardRef((t, a) => {
    const r = dx(zi, t.__scopeDialog),
      {forceMount: l = r.forceMount, ...s} = t,
      u = pa(zi, t.__scopeDialog);
    return j.jsx(Dc, {present: l || u.open, children: u.modal ? j.jsx(GM, {...s, ref: a}) : j.jsx(KM, {...s, ref: a})});
  });
px.displayName = zi;
var GM = b.forwardRef((t, a) => {
    const r = pa(zi, t.__scopeDialog),
      l = b.useRef(null),
      s = wt(a, r.contentRef, l);
    return (
      b.useEffect(() => {
        const u = l.current;
        if (u) return lx(u);
      }, []),
      j.jsx(gx, {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ft(t.onCloseAutoFocus, (u) => {
          var c;
          (u.preventDefault(), (c = r.triggerRef.current) == null || c.focus());
        }),
        onPointerDownOutside: ft(t.onPointerDownOutside, (u) => {
          const c = u.detail.originalEvent,
            d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && u.preventDefault();
        }),
        onFocusOutside: ft(t.onFocusOutside, (u) => u.preventDefault()),
      })
    );
  }),
  KM = b.forwardRef((t, a) => {
    const r = pa(zi, t.__scopeDialog),
      l = b.useRef(!1),
      s = b.useRef(!1);
    return j.jsx(gx, {
      ...t,
      ref: a,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (u) => {
        var c, d;
        ((c = t.onCloseAutoFocus) == null || c.call(t, u),
          u.defaultPrevented || (l.current || (d = r.triggerRef.current) == null || d.focus(), u.preventDefault()),
          (l.current = !1),
          (s.current = !1));
      },
      onInteractOutside: (u) => {
        var m, h;
        ((m = t.onInteractOutside) == null || m.call(t, u),
          u.defaultPrevented || ((l.current = !0), u.detail.originalEvent.type === 'pointerdown' && (s.current = !0)));
        const c = u.target;
        (((h = r.triggerRef.current) == null ? void 0 : h.contains(c)) && u.preventDefault(),
          u.detail.originalEvent.type === 'focusin' && s.current && u.preventDefault());
      },
    });
  }),
  gx = b.forwardRef((t, a) => {
    const {__scopeDialog: r, trapFocus: l, onOpenAutoFocus: s, onCloseAutoFocus: u, ...c} = t,
      d = pa(zi, r),
      m = b.useRef(null),
      h = wt(a, m);
    return (
      ZS(),
      j.jsxs(j.Fragment, {
        children: [
          j.jsx(wm, {
            asChild: !0,
            loop: !0,
            trapped: l,
            onMountAutoFocus: s,
            onUnmountAutoFocus: u,
            children: j.jsx(xm, {
              role: 'dialog',
              id: d.contentId,
              'aria-describedby': d.descriptionId,
              'aria-labelledby': d.titleId,
              'data-state': Rm(d.open),
              ...c,
              ref: h,
              onDismiss: () => d.onOpenChange(!1),
            }),
          }),
          j.jsxs(j.Fragment, {
            children: [j.jsx(QM, {titleId: d.titleId}), j.jsx(ZM, {contentRef: m, descriptionId: d.descriptionId})],
          }),
        ],
      })
    );
  }),
  Om = 'DialogTitle',
  yx = b.forwardRef((t, a) => {
    const {__scopeDialog: r, ...l} = t,
      s = pa(Om, r);
    return j.jsx(dt.h2, {id: s.titleId, ...l, ref: a});
  });
yx.displayName = Om;
var vx = 'DialogDescription',
  bx = b.forwardRef((t, a) => {
    const {__scopeDialog: r, ...l} = t,
      s = pa(vx, r);
    return j.jsx(dt.p, {id: s.descriptionId, ...l, ref: a});
  });
bx.displayName = vx;
var Sx = 'DialogClose',
  xx = b.forwardRef((t, a) => {
    const {__scopeDialog: r, ...l} = t,
      s = pa(Sx, r);
    return j.jsx(dt.button, {type: 'button', ...l, ref: a, onClick: ft(t.onClick, () => s.onOpenChange(!1))});
  });
xx.displayName = Sx;
function Rm(t) {
  return t ? 'open' : 'closed';
}
var wx = 'DialogTitleWarning',
  [XM, Ex] = yD(wx, {contentName: zi, titleName: Om, docsSlug: 'dialog'}),
  QM = ({titleId: t}) => {
    const a = Ex(wx),
      r = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
    return (
      b.useEffect(() => {
        t && (document.getElementById(t) || console.error(r));
      }, [r, t]),
      null
    );
  },
  IM = 'DialogDescriptionWarning',
  ZM = ({contentRef: t, descriptionId: a}) => {
    const l = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ex(IM).contentName}}.`;
    return (
      b.useEffect(() => {
        var u;
        const s = (u = t.current) == null ? void 0 : u.getAttribute('aria-describedby');
        a && s && (document.getElementById(a) || console.warn(l));
      }, [l, t, a]),
      null
    );
  },
  JM = ux,
  WM = fx,
  eN = hx,
  tN = mx,
  nN = px,
  aN = yx,
  rN = bx,
  Cx = xx,
  iN = Symbol('radix.slottable');
function lN(t) {
  const a = ({children: r}) => j.jsx(j.Fragment, {children: r});
  return ((a.displayName = `${t}.Slottable`), (a.__radixId = iN), a);
}
var Tx = 'AlertDialog',
  [oN] = ws(Tx, [sx]),
  dr = sx(),
  Ox = (t) => {
    const {__scopeAlertDialog: a, ...r} = t,
      l = dr(a);
    return j.jsx(JM, {...l, ...r, modal: !0});
  };
Ox.displayName = Tx;
var sN = 'AlertDialogTrigger',
  uN = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      s = dr(r);
    return j.jsx(WM, {...s, ...l, ref: a});
  });
uN.displayName = sN;
var cN = 'AlertDialogPortal',
  Rx = (t) => {
    const {__scopeAlertDialog: a, ...r} = t,
      l = dr(a);
    return j.jsx(eN, {...l, ...r});
  };
Rx.displayName = cN;
var fN = 'AlertDialogOverlay',
  Ax = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      s = dr(r);
    return j.jsx(tN, {...s, ...l, ref: a});
  });
Ax.displayName = fN;
var jl = 'AlertDialogContent',
  [dN, hN] = oN(jl),
  mN = lN('AlertDialogContent'),
  Dx = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, children: l, ...s} = t,
      u = dr(r),
      c = b.useRef(null),
      d = wt(a, c),
      m = b.useRef(null);
    return j.jsx(XM, {
      contentName: jl,
      titleName: Mx,
      docsSlug: 'alert-dialog',
      children: j.jsx(dN, {
        scope: r,
        cancelRef: m,
        children: j.jsxs(nN, {
          role: 'alertdialog',
          ...u,
          ...s,
          ref: d,
          onOpenAutoFocus: ft(s.onOpenAutoFocus, (h) => {
            var y;
            (h.preventDefault(), (y = m.current) == null || y.focus({preventScroll: !0}));
          }),
          onPointerDownOutside: (h) => h.preventDefault(),
          onInteractOutside: (h) => h.preventDefault(),
          children: [j.jsx(mN, {children: l}), j.jsx(gN, {contentRef: c})],
        }),
      }),
    });
  });
Dx.displayName = jl;
var Mx = 'AlertDialogTitle',
  Nx = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      s = dr(r);
    return j.jsx(aN, {...s, ...l, ref: a});
  });
Nx.displayName = Mx;
var _x = 'AlertDialogDescription',
  Lx = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      s = dr(r);
    return j.jsx(rN, {...s, ...l, ref: a});
  });
Lx.displayName = _x;
var pN = 'AlertDialogAction',
  jx = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      s = dr(r);
    return j.jsx(Cx, {...s, ...l, ref: a});
  });
jx.displayName = pN;
var zx = 'AlertDialogCancel',
  Ux = b.forwardRef((t, a) => {
    const {__scopeAlertDialog: r, ...l} = t,
      {cancelRef: s} = hN(zx, r),
      u = dr(r),
      c = wt(a, s);
    return j.jsx(Cx, {...u, ...l, ref: c});
  });
Ux.displayName = zx;
var gN = ({contentRef: t}) => {
    const a = `\`${jl}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${jl}\` by passing a \`${_x}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${jl}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      b.useEffect(() => {
        var l;
        document.getElementById((l = t.current) == null ? void 0 : l.getAttribute('aria-describedby')) ||
          console.warn(a);
      }, [a, t]),
      null
    );
  },
  yN = Ox,
  vN = Rx,
  Hx = Ax,
  Bx = Dx,
  kx = jx,
  Px = Ux,
  Vx = Nx,
  qx = Lx;
function Yx(t) {
  var a,
    r,
    l = '';
  if (typeof t == 'string' || typeof t == 'number') l += t;
  else if (typeof t == 'object')
    if (Array.isArray(t)) {
      var s = t.length;
      for (a = 0; a < s; a++) t[a] && (r = Yx(t[a])) && (l && (l += ' '), (l += r));
    } else for (r in t) t[r] && (l && (l += ' '), (l += r));
  return l;
}
function $x() {
  for (var t, a, r = 0, l = '', s = arguments.length; r < s; r++)
    (t = arguments[r]) && (a = Yx(t)) && (l && (l += ' '), (l += a));
  return l;
}
const bN = (t, a) => {
    const r = new Array(t.length + a.length);
    for (let l = 0; l < t.length; l++) r[l] = t[l];
    for (let l = 0; l < a.length; l++) r[t.length + l] = a[l];
    return r;
  },
  SN = (t, a) => ({classGroupId: t, validator: a}),
  Fx = (t = new Map(), a = null, r) => ({nextPart: t, validators: a, classGroupId: r}),
  dc = '-',
  c0 = [],
  xN = 'arbitrary..',
  wN = (t) => {
    const a = CN(t),
      {conflictingClassGroups: r, conflictingClassGroupModifiers: l} = t;
    return {
      getClassGroupId: (c) => {
        if (c.startsWith('[') && c.endsWith(']')) return EN(c);
        const d = c.split(dc),
          m = d[0] === '' && d.length > 1 ? 1 : 0;
        return Gx(d, m, a);
      },
      getConflictingClassGroupIds: (c, d) => {
        if (d) {
          const m = l[c],
            h = r[c];
          return m ? (h ? bN(h, m) : m) : h || c0;
        }
        return r[c] || c0;
      },
    };
  },
  Gx = (t, a, r) => {
    if (t.length - a === 0) return r.classGroupId;
    const s = t[a],
      u = r.nextPart.get(s);
    if (u) {
      const h = Gx(t, a + 1, u);
      if (h) return h;
    }
    const c = r.validators;
    if (c === null) return;
    const d = a === 0 ? t.join(dc) : t.slice(a).join(dc),
      m = c.length;
    for (let h = 0; h < m; h++) {
      const y = c[h];
      if (y.validator(d)) return y.classGroupId;
    }
  },
  EN = (t) =>
    t.slice(1, -1).indexOf(':') === -1
      ? void 0
      : (() => {
          const a = t.slice(1, -1),
            r = a.indexOf(':'),
            l = a.slice(0, r);
          return l ? xN + l : void 0;
        })(),
  CN = (t) => {
    const {theme: a, classGroups: r} = t;
    return TN(r, a);
  },
  TN = (t, a) => {
    const r = Fx();
    for (const l in t) {
      const s = t[l];
      Am(s, r, l, a);
    }
    return r;
  },
  Am = (t, a, r, l) => {
    const s = t.length;
    for (let u = 0; u < s; u++) {
      const c = t[u];
      ON(c, a, r, l);
    }
  },
  ON = (t, a, r, l) => {
    if (typeof t == 'string') {
      RN(t, a, r);
      return;
    }
    if (typeof t == 'function') {
      AN(t, a, r, l);
      return;
    }
    DN(t, a, r, l);
  },
  RN = (t, a, r) => {
    const l = t === '' ? a : Kx(a, t);
    l.classGroupId = r;
  },
  AN = (t, a, r, l) => {
    if (MN(t)) {
      Am(t(l), a, r, l);
      return;
    }
    (a.validators === null && (a.validators = []), a.validators.push(SN(r, t)));
  },
  DN = (t, a, r, l) => {
    const s = Object.entries(t),
      u = s.length;
    for (let c = 0; c < u; c++) {
      const [d, m] = s[c];
      Am(m, Kx(a, d), r, l);
    }
  },
  Kx = (t, a) => {
    let r = t;
    const l = a.split(dc),
      s = l.length;
    for (let u = 0; u < s; u++) {
      const c = l[u];
      let d = r.nextPart.get(c);
      (d || ((d = Fx()), r.nextPart.set(c, d)), (r = d));
    }
    return r;
  },
  MN = (t) => 'isThemeGetter' in t && t.isThemeGetter === !0,
  NN = (t) => {
    if (t < 1) return {get: () => {}, set: () => {}};
    let a = 0,
      r = Object.create(null),
      l = Object.create(null);
    const s = (u, c) => {
      ((r[u] = c), a++, a > t && ((a = 0), (l = r), (r = Object.create(null))));
    };
    return {
      get(u) {
        let c = r[u];
        if (c !== void 0) return c;
        if ((c = l[u]) !== void 0) return (s(u, c), c);
      },
      set(u, c) {
        u in r ? (r[u] = c) : s(u, c);
      },
    };
  },
  Zh = '!',
  f0 = ':',
  _N = [],
  d0 = (t, a, r, l, s) => ({
    modifiers: t,
    hasImportantModifier: a,
    baseClassName: r,
    maybePostfixModifierPosition: l,
    isExternal: s,
  }),
  LN = (t) => {
    const {prefix: a, experimentalParseClassName: r} = t;
    let l = (s) => {
      const u = [];
      let c = 0,
        d = 0,
        m = 0,
        h;
      const y = s.length;
      for (let w = 0; w < y; w++) {
        const T = s[w];
        if (c === 0 && d === 0) {
          if (T === f0) {
            (u.push(s.slice(m, w)), (m = w + 1));
            continue;
          }
          if (T === '/') {
            h = w;
            continue;
          }
        }
        T === '[' ? c++ : T === ']' ? c-- : T === '(' ? d++ : T === ')' && d--;
      }
      const g = u.length === 0 ? s : s.slice(m);
      let S = g,
        x = !1;
      g.endsWith(Zh) ? ((S = g.slice(0, -1)), (x = !0)) : g.startsWith(Zh) && ((S = g.slice(1)), (x = !0));
      const C = h && h > m ? h - m : void 0;
      return d0(u, x, S, C);
    };
    if (a) {
      const s = a + f0,
        u = l;
      l = (c) => (c.startsWith(s) ? u(c.slice(s.length)) : d0(_N, !1, c, void 0, !0));
    }
    if (r) {
      const s = l;
      l = (u) => r({className: u, parseClassName: s});
    }
    return l;
  },
  jN = (t) => {
    const a = new Map();
    return (
      t.orderSensitiveModifiers.forEach((r, l) => {
        a.set(r, 1e6 + l);
      }),
      (r) => {
        const l = [];
        let s = [];
        for (let u = 0; u < r.length; u++) {
          const c = r[u],
            d = c[0] === '[',
            m = a.has(c);
          d || m ? (s.length > 0 && (s.sort(), l.push(...s), (s = [])), l.push(c)) : s.push(c);
        }
        return (s.length > 0 && (s.sort(), l.push(...s)), l);
      }
    );
  },
  zN = (t) => ({cache: NN(t.cacheSize), parseClassName: LN(t), sortModifiers: jN(t), ...wN(t)}),
  UN = /\s+/,
  HN = (t, a) => {
    const {parseClassName: r, getClassGroupId: l, getConflictingClassGroupIds: s, sortModifiers: u} = a,
      c = [],
      d = t.trim().split(UN);
    let m = '';
    for (let h = d.length - 1; h >= 0; h -= 1) {
      const y = d[h],
        {
          isExternal: g,
          modifiers: S,
          hasImportantModifier: x,
          baseClassName: C,
          maybePostfixModifierPosition: w,
        } = r(y);
      if (g) {
        m = y + (m.length > 0 ? ' ' + m : m);
        continue;
      }
      let T = !!w,
        R = l(T ? C.substring(0, w) : C);
      if (!R) {
        if (!T) {
          m = y + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        if (((R = l(C)), !R)) {
          m = y + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        T = !1;
      }
      const A = S.length === 0 ? '' : S.length === 1 ? S[0] : u(S).join(':'),
        _ = x ? A + Zh : A,
        z = _ + R;
      if (c.indexOf(z) > -1) continue;
      c.push(z);
      const $ = s(R, T);
      for (let I = 0; I < $.length; ++I) {
        const O = $[I];
        c.push(_ + O);
      }
      m = y + (m.length > 0 ? ' ' + m : m);
    }
    return m;
  },
  BN = (...t) => {
    let a = 0,
      r,
      l,
      s = '';
    for (; a < t.length; ) (r = t[a++]) && (l = Xx(r)) && (s && (s += ' '), (s += l));
    return s;
  },
  Xx = (t) => {
    if (typeof t == 'string') return t;
    let a,
      r = '';
    for (let l = 0; l < t.length; l++) t[l] && (a = Xx(t[l])) && (r && (r += ' '), (r += a));
    return r;
  },
  kN = (t, ...a) => {
    let r, l, s, u;
    const c = (m) => {
        const h = a.reduce((y, g) => g(y), t());
        return ((r = zN(h)), (l = r.cache.get), (s = r.cache.set), (u = d), d(m));
      },
      d = (m) => {
        const h = l(m);
        if (h) return h;
        const y = HN(m, r);
        return (s(m, y), y);
      };
    return ((u = c), (...m) => u(BN(...m)));
  },
  PN = [],
  qt = (t) => {
    const a = (r) => r[t] || PN;
    return ((a.isThemeGetter = !0), a);
  },
  Qx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ix = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  VN = /^\d+\/\d+$/,
  qN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  YN =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $N = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  FN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  GN = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ol = (t) => VN.test(t),
  qe = (t) => !!t && !Number.isNaN(Number(t)),
  Hr = (t) => !!t && Number.isInteger(Number(t)),
  Ch = (t) => t.endsWith('%') && qe(t.slice(0, -1)),
  rr = (t) => qN.test(t),
  KN = () => !0,
  XN = (t) => YN.test(t) && !$N.test(t),
  Zx = () => !1,
  QN = (t) => FN.test(t),
  IN = (t) => GN.test(t),
  ZN = (t) => !xe(t) && !we(t),
  JN = (t) => Il(t, ew, Zx),
  xe = (t) => Qx.test(t),
  Ei = (t) => Il(t, tw, XN),
  Th = (t) => Il(t, a_, qe),
  h0 = (t) => Il(t, Jx, Zx),
  WN = (t) => Il(t, Wx, IN),
  Qu = (t) => Il(t, nw, QN),
  we = (t) => Ix.test(t),
  Jo = (t) => Zl(t, tw),
  e_ = (t) => Zl(t, r_),
  m0 = (t) => Zl(t, Jx),
  t_ = (t) => Zl(t, ew),
  n_ = (t) => Zl(t, Wx),
  Iu = (t) => Zl(t, nw, !0),
  Il = (t, a, r) => {
    const l = Qx.exec(t);
    return l ? (l[1] ? a(l[1]) : r(l[2])) : !1;
  },
  Zl = (t, a, r = !1) => {
    const l = Ix.exec(t);
    return l ? (l[1] ? a(l[1]) : r) : !1;
  },
  Jx = (t) => t === 'position' || t === 'percentage',
  Wx = (t) => t === 'image' || t === 'url',
  ew = (t) => t === 'length' || t === 'size' || t === 'bg-size',
  tw = (t) => t === 'length',
  a_ = (t) => t === 'number',
  r_ = (t) => t === 'family-name',
  nw = (t) => t === 'shadow',
  i_ = () => {
    const t = qt('color'),
      a = qt('font'),
      r = qt('text'),
      l = qt('font-weight'),
      s = qt('tracking'),
      u = qt('leading'),
      c = qt('breakpoint'),
      d = qt('container'),
      m = qt('spacing'),
      h = qt('radius'),
      y = qt('shadow'),
      g = qt('inset-shadow'),
      S = qt('text-shadow'),
      x = qt('drop-shadow'),
      C = qt('blur'),
      w = qt('perspective'),
      T = qt('aspect'),
      R = qt('ease'),
      A = qt('animate'),
      _ = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      z = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      $ = () => [...z(), we, xe],
      I = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      O = () => ['auto', 'contain', 'none'],
      P = () => [we, xe, m],
      Z = () => [Ol, 'full', 'auto', ...P()],
      se = () => [Hr, 'none', 'subgrid', we, xe],
      pe = () => ['auto', {span: ['full', Hr, we, xe]}, Hr, we, xe],
      le = () => [Hr, 'auto', we, xe],
      ce = () => ['auto', 'min', 'max', 'fr', we, xe],
      ie = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      he = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      N = () => ['auto', ...P()],
      V = () => [Ol, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...P()],
      B = () => [t, we, xe],
      fe = () => [...z(), m0, h0, {position: [we, xe]}],
      ge = () => ['no-repeat', {repeat: ['', 'x', 'y', 'space', 'round']}],
      D = () => ['auto', 'cover', 'contain', t_, JN, {size: [we, xe]}],
      K = () => [Ch, Jo, Ei],
      X = () => ['', 'none', 'full', h, we, xe],
      ee = () => ['', qe, Jo, Ei],
      ue = () => ['solid', 'dashed', 'dotted', 'double'],
      be = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      re = () => [qe, Ch, m0, h0],
      ye = () => ['', 'none', C, we, xe],
      Me = () => ['none', qe, we, xe],
      Ue = () => ['none', qe, we, xe],
      He = () => [qe, we, xe],
      Te = () => [Ol, 'full', ...P()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [rr],
        breakpoint: [rr],
        color: [KN],
        container: [rr],
        'drop-shadow': [rr],
        ease: ['in', 'out', 'in-out'],
        font: [ZN],
        'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
        'inset-shadow': [rr],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [rr],
        shadow: [rr],
        spacing: ['px', qe],
        text: [rr],
        'text-shadow': [rr],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{aspect: ['auto', 'square', Ol, xe, we, T]}],
        container: ['container'],
        columns: [{columns: [qe, xe, we, d]}],
        'break-after': [{'break-after': _()}],
        'break-before': [{'break-before': _()}],
        'break-inside': [{'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']}],
        'box-decoration': [{'box-decoration': ['slice', 'clone']}],
        box: [{box: ['border', 'content']}],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{float: ['right', 'left', 'none', 'start', 'end']}],
        clear: [{clear: ['left', 'right', 'both', 'none', 'start', 'end']}],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{object: ['contain', 'cover', 'fill', 'none', 'scale-down']}],
        'object-position': [{object: $()}],
        overflow: [{overflow: I()}],
        'overflow-x': [{'overflow-x': I()}],
        'overflow-y': [{'overflow-y': I()}],
        overscroll: [{overscroll: O()}],
        'overscroll-x': [{'overscroll-x': O()}],
        'overscroll-y': [{'overscroll-y': O()}],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{inset: Z()}],
        'inset-x': [{'inset-x': Z()}],
        'inset-y': [{'inset-y': Z()}],
        start: [{start: Z()}],
        end: [{end: Z()}],
        top: [{top: Z()}],
        right: [{right: Z()}],
        bottom: [{bottom: Z()}],
        left: [{left: Z()}],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{z: [Hr, 'auto', we, xe]}],
        basis: [{basis: [Ol, 'full', 'auto', d, ...P()]}],
        'flex-direction': [{flex: ['row', 'row-reverse', 'col', 'col-reverse']}],
        'flex-wrap': [{flex: ['nowrap', 'wrap', 'wrap-reverse']}],
        flex: [{flex: [qe, Ol, 'auto', 'initial', 'none', xe]}],
        grow: [{grow: ['', qe, we, xe]}],
        shrink: [{shrink: ['', qe, we, xe]}],
        order: [{order: [Hr, 'first', 'last', 'none', we, xe]}],
        'grid-cols': [{'grid-cols': se()}],
        'col-start-end': [{col: pe()}],
        'col-start': [{'col-start': le()}],
        'col-end': [{'col-end': le()}],
        'grid-rows': [{'grid-rows': se()}],
        'row-start-end': [{row: pe()}],
        'row-start': [{'row-start': le()}],
        'row-end': [{'row-end': le()}],
        'grid-flow': [{'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']}],
        'auto-cols': [{'auto-cols': ce()}],
        'auto-rows': [{'auto-rows': ce()}],
        gap: [{gap: P()}],
        'gap-x': [{'gap-x': P()}],
        'gap-y': [{'gap-y': P()}],
        'justify-content': [{justify: [...ie(), 'normal']}],
        'justify-items': [{'justify-items': [...he(), 'normal']}],
        'justify-self': [{'justify-self': ['auto', ...he()]}],
        'align-content': [{content: ['normal', ...ie()]}],
        'align-items': [{items: [...he(), {baseline: ['', 'last']}]}],
        'align-self': [{self: ['auto', ...he(), {baseline: ['', 'last']}]}],
        'place-content': [{'place-content': ie()}],
        'place-items': [{'place-items': [...he(), 'baseline']}],
        'place-self': [{'place-self': ['auto', ...he()]}],
        p: [{p: P()}],
        px: [{px: P()}],
        py: [{py: P()}],
        ps: [{ps: P()}],
        pe: [{pe: P()}],
        pt: [{pt: P()}],
        pr: [{pr: P()}],
        pb: [{pb: P()}],
        pl: [{pl: P()}],
        m: [{m: N()}],
        mx: [{mx: N()}],
        my: [{my: N()}],
        ms: [{ms: N()}],
        me: [{me: N()}],
        mt: [{mt: N()}],
        mr: [{mr: N()}],
        mb: [{mb: N()}],
        ml: [{ml: N()}],
        'space-x': [{'space-x': P()}],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{'space-y': P()}],
        'space-y-reverse': ['space-y-reverse'],
        size: [{size: V()}],
        w: [{w: [d, 'screen', ...V()]}],
        'min-w': [{'min-w': [d, 'screen', 'none', ...V()]}],
        'max-w': [{'max-w': [d, 'screen', 'none', 'prose', {screen: [c]}, ...V()]}],
        h: [{h: ['screen', 'lh', ...V()]}],
        'min-h': [{'min-h': ['screen', 'lh', 'none', ...V()]}],
        'max-h': [{'max-h': ['screen', 'lh', ...V()]}],
        'font-size': [{text: ['base', r, Jo, Ei]}],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{font: [l, we, Th]}],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Ch,
              xe,
            ],
          },
        ],
        'font-family': [{font: [e_, xe, a]}],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{tracking: [s, we, xe]}],
        'line-clamp': [{'line-clamp': [qe, 'none', we, Th]}],
        leading: [{leading: [u, ...P()]}],
        'list-image': [{'list-image': ['none', we, xe]}],
        'list-style-position': [{list: ['inside', 'outside']}],
        'list-style-type': [{list: ['disc', 'decimal', 'none', we, xe]}],
        'text-alignment': [{text: ['left', 'center', 'right', 'justify', 'start', 'end']}],
        'placeholder-color': [{placeholder: B()}],
        'text-color': [{text: B()}],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{decoration: [...ue(), 'wavy']}],
        'text-decoration-thickness': [{decoration: [qe, 'from-font', 'auto', we, Ei]}],
        'text-decoration-color': [{decoration: B()}],
        'underline-offset': [{'underline-offset': [qe, 'auto', we, xe]}],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{text: ['wrap', 'nowrap', 'balance', 'pretty']}],
        indent: [{indent: P()}],
        'vertical-align': [
          {align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', we, xe]},
        ],
        whitespace: [{whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']}],
        break: [{break: ['normal', 'words', 'all', 'keep']}],
        wrap: [{wrap: ['break-word', 'anywhere', 'normal']}],
        hyphens: [{hyphens: ['none', 'manual', 'auto']}],
        content: [{content: ['none', we, xe]}],
        'bg-attachment': [{bg: ['fixed', 'local', 'scroll']}],
        'bg-clip': [{'bg-clip': ['border', 'padding', 'content', 'text']}],
        'bg-origin': [{'bg-origin': ['border', 'padding', 'content']}],
        'bg-position': [{bg: fe()}],
        'bg-repeat': [{bg: ge()}],
        'bg-size': [{bg: D()}],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']}, Hr, we, xe],
                radial: ['', we, xe],
                conic: [Hr, we, xe],
              },
              n_,
              WN,
            ],
          },
        ],
        'bg-color': [{bg: B()}],
        'gradient-from-pos': [{from: K()}],
        'gradient-via-pos': [{via: K()}],
        'gradient-to-pos': [{to: K()}],
        'gradient-from': [{from: B()}],
        'gradient-via': [{via: B()}],
        'gradient-to': [{to: B()}],
        rounded: [{rounded: X()}],
        'rounded-s': [{'rounded-s': X()}],
        'rounded-e': [{'rounded-e': X()}],
        'rounded-t': [{'rounded-t': X()}],
        'rounded-r': [{'rounded-r': X()}],
        'rounded-b': [{'rounded-b': X()}],
        'rounded-l': [{'rounded-l': X()}],
        'rounded-ss': [{'rounded-ss': X()}],
        'rounded-se': [{'rounded-se': X()}],
        'rounded-ee': [{'rounded-ee': X()}],
        'rounded-es': [{'rounded-es': X()}],
        'rounded-tl': [{'rounded-tl': X()}],
        'rounded-tr': [{'rounded-tr': X()}],
        'rounded-br': [{'rounded-br': X()}],
        'rounded-bl': [{'rounded-bl': X()}],
        'border-w': [{border: ee()}],
        'border-w-x': [{'border-x': ee()}],
        'border-w-y': [{'border-y': ee()}],
        'border-w-s': [{'border-s': ee()}],
        'border-w-e': [{'border-e': ee()}],
        'border-w-t': [{'border-t': ee()}],
        'border-w-r': [{'border-r': ee()}],
        'border-w-b': [{'border-b': ee()}],
        'border-w-l': [{'border-l': ee()}],
        'divide-x': [{'divide-x': ee()}],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{'divide-y': ee()}],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{border: [...ue(), 'hidden', 'none']}],
        'divide-style': [{divide: [...ue(), 'hidden', 'none']}],
        'border-color': [{border: B()}],
        'border-color-x': [{'border-x': B()}],
        'border-color-y': [{'border-y': B()}],
        'border-color-s': [{'border-s': B()}],
        'border-color-e': [{'border-e': B()}],
        'border-color-t': [{'border-t': B()}],
        'border-color-r': [{'border-r': B()}],
        'border-color-b': [{'border-b': B()}],
        'border-color-l': [{'border-l': B()}],
        'divide-color': [{divide: B()}],
        'outline-style': [{outline: [...ue(), 'none', 'hidden']}],
        'outline-offset': [{'outline-offset': [qe, we, xe]}],
        'outline-w': [{outline: ['', qe, Jo, Ei]}],
        'outline-color': [{outline: B()}],
        shadow: [{shadow: ['', 'none', y, Iu, Qu]}],
        'shadow-color': [{shadow: B()}],
        'inset-shadow': [{'inset-shadow': ['none', g, Iu, Qu]}],
        'inset-shadow-color': [{'inset-shadow': B()}],
        'ring-w': [{ring: ee()}],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ring: B()}],
        'ring-offset-w': [{'ring-offset': [qe, Ei]}],
        'ring-offset-color': [{'ring-offset': B()}],
        'inset-ring-w': [{'inset-ring': ee()}],
        'inset-ring-color': [{'inset-ring': B()}],
        'text-shadow': [{'text-shadow': ['none', S, Iu, Qu]}],
        'text-shadow-color': [{'text-shadow': B()}],
        opacity: [{opacity: [qe, we, xe]}],
        'mix-blend': [{'mix-blend': [...be(), 'plus-darker', 'plus-lighter']}],
        'bg-blend': [{'bg-blend': be()}],
        'mask-clip': [{'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view']}, 'mask-no-clip'],
        'mask-composite': [{mask: ['add', 'subtract', 'intersect', 'exclude']}],
        'mask-image-linear-pos': [{'mask-linear': [qe]}],
        'mask-image-linear-from-pos': [{'mask-linear-from': re()}],
        'mask-image-linear-to-pos': [{'mask-linear-to': re()}],
        'mask-image-linear-from-color': [{'mask-linear-from': B()}],
        'mask-image-linear-to-color': [{'mask-linear-to': B()}],
        'mask-image-t-from-pos': [{'mask-t-from': re()}],
        'mask-image-t-to-pos': [{'mask-t-to': re()}],
        'mask-image-t-from-color': [{'mask-t-from': B()}],
        'mask-image-t-to-color': [{'mask-t-to': B()}],
        'mask-image-r-from-pos': [{'mask-r-from': re()}],
        'mask-image-r-to-pos': [{'mask-r-to': re()}],
        'mask-image-r-from-color': [{'mask-r-from': B()}],
        'mask-image-r-to-color': [{'mask-r-to': B()}],
        'mask-image-b-from-pos': [{'mask-b-from': re()}],
        'mask-image-b-to-pos': [{'mask-b-to': re()}],
        'mask-image-b-from-color': [{'mask-b-from': B()}],
        'mask-image-b-to-color': [{'mask-b-to': B()}],
        'mask-image-l-from-pos': [{'mask-l-from': re()}],
        'mask-image-l-to-pos': [{'mask-l-to': re()}],
        'mask-image-l-from-color': [{'mask-l-from': B()}],
        'mask-image-l-to-color': [{'mask-l-to': B()}],
        'mask-image-x-from-pos': [{'mask-x-from': re()}],
        'mask-image-x-to-pos': [{'mask-x-to': re()}],
        'mask-image-x-from-color': [{'mask-x-from': B()}],
        'mask-image-x-to-color': [{'mask-x-to': B()}],
        'mask-image-y-from-pos': [{'mask-y-from': re()}],
        'mask-image-y-to-pos': [{'mask-y-to': re()}],
        'mask-image-y-from-color': [{'mask-y-from': B()}],
        'mask-image-y-to-color': [{'mask-y-to': B()}],
        'mask-image-radial': [{'mask-radial': [we, xe]}],
        'mask-image-radial-from-pos': [{'mask-radial-from': re()}],
        'mask-image-radial-to-pos': [{'mask-radial-to': re()}],
        'mask-image-radial-from-color': [{'mask-radial-from': B()}],
        'mask-image-radial-to-color': [{'mask-radial-to': B()}],
        'mask-image-radial-shape': [{'mask-radial': ['circle', 'ellipse']}],
        'mask-image-radial-size': [{'mask-radial': [{closest: ['side', 'corner'], farthest: ['side', 'corner']}]}],
        'mask-image-radial-pos': [{'mask-radial-at': z()}],
        'mask-image-conic-pos': [{'mask-conic': [qe]}],
        'mask-image-conic-from-pos': [{'mask-conic-from': re()}],
        'mask-image-conic-to-pos': [{'mask-conic-to': re()}],
        'mask-image-conic-from-color': [{'mask-conic-from': B()}],
        'mask-image-conic-to-color': [{'mask-conic-to': B()}],
        'mask-mode': [{mask: ['alpha', 'luminance', 'match']}],
        'mask-origin': [{'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view']}],
        'mask-position': [{mask: fe()}],
        'mask-repeat': [{mask: ge()}],
        'mask-size': [{mask: D()}],
        'mask-type': [{'mask-type': ['alpha', 'luminance']}],
        'mask-image': [{mask: ['none', we, xe]}],
        filter: [{filter: ['', 'none', we, xe]}],
        blur: [{blur: ye()}],
        brightness: [{brightness: [qe, we, xe]}],
        contrast: [{contrast: [qe, we, xe]}],
        'drop-shadow': [{'drop-shadow': ['', 'none', x, Iu, Qu]}],
        'drop-shadow-color': [{'drop-shadow': B()}],
        grayscale: [{grayscale: ['', qe, we, xe]}],
        'hue-rotate': [{'hue-rotate': [qe, we, xe]}],
        invert: [{invert: ['', qe, we, xe]}],
        saturate: [{saturate: [qe, we, xe]}],
        sepia: [{sepia: ['', qe, we, xe]}],
        'backdrop-filter': [{'backdrop-filter': ['', 'none', we, xe]}],
        'backdrop-blur': [{'backdrop-blur': ye()}],
        'backdrop-brightness': [{'backdrop-brightness': [qe, we, xe]}],
        'backdrop-contrast': [{'backdrop-contrast': [qe, we, xe]}],
        'backdrop-grayscale': [{'backdrop-grayscale': ['', qe, we, xe]}],
        'backdrop-hue-rotate': [{'backdrop-hue-rotate': [qe, we, xe]}],
        'backdrop-invert': [{'backdrop-invert': ['', qe, we, xe]}],
        'backdrop-opacity': [{'backdrop-opacity': [qe, we, xe]}],
        'backdrop-saturate': [{'backdrop-saturate': [qe, we, xe]}],
        'backdrop-sepia': [{'backdrop-sepia': ['', qe, we, xe]}],
        'border-collapse': [{border: ['collapse', 'separate']}],
        'border-spacing': [{'border-spacing': P()}],
        'border-spacing-x': [{'border-spacing-x': P()}],
        'border-spacing-y': [{'border-spacing-y': P()}],
        'table-layout': [{table: ['auto', 'fixed']}],
        caption: [{caption: ['top', 'bottom']}],
        transition: [{transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', we, xe]}],
        'transition-behavior': [{transition: ['normal', 'discrete']}],
        duration: [{duration: [qe, 'initial', we, xe]}],
        ease: [{ease: ['linear', 'initial', R, we, xe]}],
        delay: [{delay: [qe, we, xe]}],
        animate: [{animate: ['none', A, we, xe]}],
        backface: [{backface: ['hidden', 'visible']}],
        perspective: [{perspective: [w, we, xe]}],
        'perspective-origin': [{'perspective-origin': $()}],
        rotate: [{rotate: Me()}],
        'rotate-x': [{'rotate-x': Me()}],
        'rotate-y': [{'rotate-y': Me()}],
        'rotate-z': [{'rotate-z': Me()}],
        scale: [{scale: Ue()}],
        'scale-x': [{'scale-x': Ue()}],
        'scale-y': [{'scale-y': Ue()}],
        'scale-z': [{'scale-z': Ue()}],
        'scale-3d': ['scale-3d'],
        skew: [{skew: He()}],
        'skew-x': [{'skew-x': He()}],
        'skew-y': [{'skew-y': He()}],
        transform: [{transform: [we, xe, '', 'none', 'gpu', 'cpu']}],
        'transform-origin': [{origin: $()}],
        'transform-style': [{transform: ['3d', 'flat']}],
        translate: [{translate: Te()}],
        'translate-x': [{'translate-x': Te()}],
        'translate-y': [{'translate-y': Te()}],
        'translate-z': [{'translate-z': Te()}],
        'translate-none': ['translate-none'],
        accent: [{accent: B()}],
        appearance: [{appearance: ['none', 'auto']}],
        'caret-color': [{caret: B()}],
        'color-scheme': [{scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light']}],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              we,
              xe,
            ],
          },
        ],
        'field-sizing': [{'field-sizing': ['fixed', 'content']}],
        'pointer-events': [{'pointer-events': ['auto', 'none']}],
        resize: [{resize: ['none', '', 'y', 'x']}],
        'scroll-behavior': [{scroll: ['auto', 'smooth']}],
        'scroll-m': [{'scroll-m': P()}],
        'scroll-mx': [{'scroll-mx': P()}],
        'scroll-my': [{'scroll-my': P()}],
        'scroll-ms': [{'scroll-ms': P()}],
        'scroll-me': [{'scroll-me': P()}],
        'scroll-mt': [{'scroll-mt': P()}],
        'scroll-mr': [{'scroll-mr': P()}],
        'scroll-mb': [{'scroll-mb': P()}],
        'scroll-ml': [{'scroll-ml': P()}],
        'scroll-p': [{'scroll-p': P()}],
        'scroll-px': [{'scroll-px': P()}],
        'scroll-py': [{'scroll-py': P()}],
        'scroll-ps': [{'scroll-ps': P()}],
        'scroll-pe': [{'scroll-pe': P()}],
        'scroll-pt': [{'scroll-pt': P()}],
        'scroll-pr': [{'scroll-pr': P()}],
        'scroll-pb': [{'scroll-pb': P()}],
        'scroll-pl': [{'scroll-pl': P()}],
        'snap-align': [{snap: ['start', 'end', 'center', 'align-none']}],
        'snap-stop': [{snap: ['normal', 'always']}],
        'snap-type': [{snap: ['none', 'x', 'y', 'both']}],
        'snap-strictness': [{snap: ['mandatory', 'proximity']}],
        touch: [{touch: ['auto', 'none', 'manipulation']}],
        'touch-x': [{'touch-pan': ['x', 'left', 'right']}],
        'touch-y': [{'touch-pan': ['y', 'up', 'down']}],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{select: ['none', 'text', 'all', 'auto']}],
        'will-change': [{'will-change': ['auto', 'scroll', 'contents', 'transform', we, xe]}],
        fill: [{fill: ['none', ...B()]}],
        'stroke-w': [{stroke: [qe, Jo, Ei, Th]}],
        stroke: [{stroke: ['none', ...B()]}],
        'forced-color-adjust': [{'forced-color-adjust': ['auto', 'none']}],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: {'font-size': ['leading']},
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  l_ = kN(i_);
function Wt(...t) {
  return l_($x(t));
}
var o_ = Symbol.for('react.lazy'),
  hc = Sc[' use '.trim().toString()];
function s_(t) {
  return typeof t == 'object' && t !== null && 'then' in t;
}
function aw(t) {
  return t != null && typeof t == 'object' && '$$typeof' in t && t.$$typeof === o_ && '_payload' in t && s_(t._payload);
}
function u_(t) {
  const a = f_(t),
    r = b.forwardRef((l, s) => {
      let {children: u, ...c} = l;
      aw(u) && typeof hc == 'function' && (u = hc(u._payload));
      const d = b.Children.toArray(u),
        m = d.find(h_);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? b.Children.count(h) > 1
                ? b.Children.only(null)
                : b.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(a, {...c, ref: s, children: b.isValidElement(h) ? b.cloneElement(h, void 0, y) : null});
      }
      return j.jsx(a, {...c, ref: s, children: u});
    });
  return ((r.displayName = `${t}.Slot`), r);
}
var c_ = u_('Slot');
function f_(t) {
  const a = b.forwardRef((r, l) => {
    let {children: s, ...u} = r;
    if ((aw(s) && typeof hc == 'function' && (s = hc(s._payload)), b.isValidElement(s))) {
      const c = p_(s),
        d = m_(u, s.props);
      return (s.type !== b.Fragment && (d.ref = l ? Ql(l, c) : c), b.cloneElement(s, d));
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((a.displayName = `${t}.SlotClone`), a);
}
var d_ = Symbol('radix.slottable');
function h_(t) {
  return b.isValidElement(t) && typeof t.type == 'function' && '__radixId' in t.type && t.type.__radixId === d_;
}
function m_(t, a) {
  const r = {...a};
  for (const l in a) {
    const s = t[l],
      u = a[l];
    /^on[A-Z]/.test(l)
      ? s && u
        ? (r[l] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (r[l] = s)
      : l === 'style'
        ? (r[l] = {...s, ...u})
        : l === 'className' && (r[l] = [s, u].filter(Boolean).join(' '));
  }
  return {...t, ...r};
}
function p_(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
const p0 = (t) => (typeof t == 'boolean' ? `${t}` : t === 0 ? '0' : t),
  g0 = $x,
  g_ = (t, a) => (r) => {
    var l;
    if ((a == null ? void 0 : a.variants) == null)
      return g0(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: s, defaultVariants: u} = a,
      c = Object.keys(s).map((h) => {
        const y = r == null ? void 0 : r[h],
          g = u == null ? void 0 : u[h];
        if (y === null) return null;
        const S = p0(y) || p0(g);
        return s[h][S];
      }),
      d =
        r &&
        Object.entries(r).reduce((h, y) => {
          let [g, S] = y;
          return (S === void 0 || (h[g] = S), h);
        }, {}),
      m =
        a == null || (l = a.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((h, y) => {
              let {class: g, className: S, ...x} = y;
              return Object.entries(x).every((C) => {
                let [w, T] = C;
                return Array.isArray(T) ? T.includes({...u, ...d}[w]) : {...u, ...d}[w] === T;
              })
                ? [...h, g, S]
                : h;
            }, []);
    return g0(t, c, m, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  },
  Dm = g_(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {default: 'h-10 px-4 py-2', sm: 'h-9 rounded-md px-3', lg: 'h-11 rounded-md px-8', icon: 'h-10 w-10'},
      },
      defaultVariants: {variant: 'default', size: 'default'},
    },
  ),
  y_ = b.forwardRef(({className: t, variant: a, size: r, asChild: l = !1, ...s}, u) => {
    const c = l ? c_ : 'button';
    return j.jsx(c, {className: Wt(Dm({variant: a, size: r, className: t})), ref: u, ...s});
  });
y_.displayName = 'Button';
const v_ = yN,
  b_ = vN,
  rw = b.forwardRef(({className: t, ...a}, r) =>
    j.jsx(Hx, {
      className: Wt(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        t,
      ),
      ...a,
      ref: r,
    }),
  );
rw.displayName = Hx.displayName;
const iw = b.forwardRef(({className: t, ...a}, r) =>
  j.jsxs(b_, {
    children: [
      j.jsx(rw, {}),
      j.jsx(Bx, {
        ref: r,
        className: Wt(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          t,
        ),
        ...a,
      }),
    ],
  }),
);
iw.displayName = Bx.displayName;
const lw = ({className: t, ...a}) =>
  j.jsx('div', {className: Wt('flex flex-col space-y-2 text-center sm:text-left', t), ...a});
lw.displayName = 'AlertDialogHeader';
const ow = ({className: t, ...a}) =>
  j.jsx('div', {className: Wt('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', t), ...a});
ow.displayName = 'AlertDialogFooter';
const sw = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(Vx, {ref: r, className: Wt('text-lg font-semibold', t), ...a}),
);
sw.displayName = Vx.displayName;
const uw = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(qx, {ref: r, className: Wt('text-sm text-muted-foreground', t), ...a}),
);
uw.displayName = qx.displayName;
const cw = b.forwardRef(({className: t, ...a}, r) => j.jsx(kx, {ref: r, className: Wt(Dm(), t), ...a}));
cw.displayName = kx.displayName;
const fw = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(Px, {ref: r, className: Wt(Dm({variant: 'outline'}), 'mt-2 sm:mt-0', t), ...a}),
);
fw.displayName = Px.displayName;
const S_ = b.createContext(async () => !1);
function x_({children: t}) {
  const {t: a} = Xl(),
    [r, l] = b.useState({open: !1, header: '', message: '', acceptLabel: '', rejectLabel: ''}),
    s = b.useCallback(
      async (m) =>
        new Promise((h) => {
          if (r.open) {
            (console.warn('ConfirmDialog: Cannot open multiple confirm dialogs simultaneously'), h(!1));
            return;
          }
          const y = (m == null ? void 0 : m.header) ?? a('components.confirmDialog.header'),
            g = (m == null ? void 0 : m.message) ?? a('components.confirmDialog.message'),
            S = (m == null ? void 0 : m.acceptLabel) ?? a('components.confirmDialog.buttons.accept'),
            x = (m == null ? void 0 : m.rejectLabel) ?? a('components.confirmDialog.buttons.reject');
          l({open: !0, header: y, message: g, acceptLabel: S, rejectLabel: x, resolve: h});
        }),
      [r.open, a],
    ),
    u = b.useCallback(() => {
      var m;
      ((m = r.resolve) == null || m.call(r, !0), l({...r, open: !1, resolve: void 0}));
    }, [r]),
    c = b.useCallback(() => {
      var m;
      ((m = r.resolve) == null || m.call(r, !1), l({...r, open: !1, resolve: void 0}));
    }, [r]),
    d = b.useCallback(
      (m) => {
        var h;
        m || ((h = r.resolve) == null || h.call(r, !1), l({...r, open: !1, resolve: void 0}));
      },
      [r],
    );
  return j.jsxs(S_, {
    value: s,
    children: [
      j.jsx(v_, {
        open: r.open,
        onOpenChange: d,
        children: j.jsxs(iw, {
          children: [
            j.jsxs(lw, {children: [j.jsx(sw, {children: r.header}), j.jsx(uw, {children: r.message})]}),
            j.jsxs(ow, {
              children: [
                j.jsx(fw, {onClick: c, children: r.rejectLabel}),
                j.jsx(cw, {onClick: u, children: r.acceptLabel}),
              ],
            }),
          ],
        }),
      }),
      t,
    ],
  });
}
const y0 = {};
function w_(t) {
  return (t && Object.assign(y0, t), y0);
}
const E_ = (t) => (r) => {
  switch (r.code) {
    case 'invalid_type':
      return r.received === 'undefined' || r.received === 'null'
        ? t('validation.required')
        : t('validation.invalidType', {expected: String(r.expected), received: String(r.received)});
    case 'invalid_format':
      return r.format === 'email'
        ? t('validation.invalidEmail')
        : r.format === 'url'
          ? t('validation.invalidUrl')
          : t('validation.invalidFormat');
    case 'too_small':
      return r.type === 'string'
        ? t('validation.tooShort', {minimum: String(r.minimum)})
        : r.type === 'number'
          ? t('validation.numberTooSmall', {minimum: Number(r.minimum)})
          : void 0;
    case 'too_big':
      return r.type === 'string'
        ? t('validation.tooLong', {maximum: String(r.maximum)})
        : r.type === 'number'
          ? t('validation.numberTooLarge', {maximum: Number(r.maximum)})
          : void 0;
    case 'invalid_value':
      return t('validation.invalidValue');
    case 'unrecognized_keys':
      return t('validation.unrecognizedKeys', {keys: r.keys.join(', ')});
    case 'invalid_union':
      return t('validation.invalidUnion');
    case 'not_multiple_of':
      return t('validation.notMultipleOf', {multipleOf: Number(r.multipleOf)});
    case 'custom':
      return r.message ?? t('validation.customError');
    case 'invalid_key':
    case 'invalid_element':
      return;
  }
};
function C_({children: t}) {
  const {t: a, i18n: r} = Xl();
  return (
    b.useEffect(() => {
      const l = E_(a);
      w_({customError: l});
    }, [a, r.language]),
    t
  );
}
function T_() {
  return j.jsx('header', {
    className: 'border-b',
    children: j.jsx('div', {className: 'mx-auto flex h-16 max-w-7xl items-center px-4'}),
  });
}
function v0(t, [a, r]) {
  return Math.min(r, Math.max(a, t));
}
function b0(t) {
  const a = O_(t),
    r = b.forwardRef((l, s) => {
      const {children: u, ...c} = l,
        d = b.Children.toArray(u),
        m = d.find(A_);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? b.Children.count(h) > 1
                ? b.Children.only(null)
                : b.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(a, {...c, ref: s, children: b.isValidElement(h) ? b.cloneElement(h, void 0, y) : null});
      }
      return j.jsx(a, {...c, ref: s, children: u});
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function O_(t) {
  const a = b.forwardRef((r, l) => {
    const {children: s, ...u} = r;
    if (b.isValidElement(s)) {
      const c = M_(s),
        d = D_(u, s.props);
      return (s.type !== b.Fragment && (d.ref = l ? Ql(l, c) : c), b.cloneElement(s, d));
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((a.displayName = `${t}.SlotClone`), a);
}
var R_ = Symbol('radix.slottable');
function A_(t) {
  return b.isValidElement(t) && typeof t.type == 'function' && '__radixId' in t.type && t.type.__radixId === R_;
}
function D_(t, a) {
  const r = {...a};
  for (const l in a) {
    const s = t[l],
      u = a[l];
    /^on[A-Z]/.test(l)
      ? s && u
        ? (r[l] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (r[l] = s)
      : l === 'style'
        ? (r[l] = {...s, ...u})
        : l === 'className' && (r[l] = [s, u].filter(Boolean).join(' '));
  }
  return {...t, ...r};
}
function M_(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
function N_(t) {
  const a = t + 'CollectionProvider',
    [r, l] = ws(a),
    [s, u] = r(a, {collectionRef: {current: null}, itemMap: new Map()}),
    c = (w) => {
      const {scope: T, children: R} = w,
        A = oe.useRef(null),
        _ = oe.useRef(new Map()).current;
      return j.jsx(s, {scope: T, itemMap: _, collectionRef: A, children: R});
    };
  c.displayName = a;
  const d = t + 'CollectionSlot',
    m = b0(d),
    h = oe.forwardRef((w, T) => {
      const {scope: R, children: A} = w,
        _ = u(d, R),
        z = wt(T, _.collectionRef);
      return j.jsx(m, {ref: z, children: A});
    });
  h.displayName = d;
  const y = t + 'CollectionItemSlot',
    g = 'data-radix-collection-item',
    S = b0(y),
    x = oe.forwardRef((w, T) => {
      const {scope: R, children: A, ..._} = w,
        z = oe.useRef(null),
        $ = wt(T, z),
        I = u(y, R);
      return (
        oe.useEffect(() => (I.itemMap.set(z, {ref: z, ..._}), () => void I.itemMap.delete(z))),
        j.jsx(S, {[g]: '', ref: $, children: A})
      );
    });
  x.displayName = y;
  function C(w) {
    const T = u(t + 'CollectionConsumer', w);
    return oe.useCallback(() => {
      const A = T.collectionRef.current;
      if (!A) return [];
      const _ = Array.from(A.querySelectorAll(`[${g}]`));
      return Array.from(T.itemMap.values()).sort((I, O) => _.indexOf(I.ref.current) - _.indexOf(O.ref.current));
    }, [T.collectionRef, T.itemMap]);
  }
  return [{Provider: c, Slot: h, ItemSlot: x}, C, l];
}
var __ = b.createContext(void 0);
function L_(t) {
  const a = b.useContext(__);
  return t || a || 'ltr';
}
const j_ = ['top', 'right', 'bottom', 'left'],
  Ir = Math.min,
  Ln = Math.max,
  mc = Math.round,
  Zu = Math.floor,
  Ma = (t) => ({x: t, y: t}),
  z_ = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'},
  U_ = {start: 'end', end: 'start'};
function Jh(t, a, r) {
  return Ln(t, Ir(a, r));
}
function sr(t, a) {
  return typeof t == 'function' ? t(a) : t;
}
function ur(t) {
  return t.split('-')[0];
}
function Jl(t) {
  return t.split('-')[1];
}
function Mm(t) {
  return t === 'x' ? 'y' : 'x';
}
function Nm(t) {
  return t === 'y' ? 'height' : 'width';
}
const H_ = new Set(['top', 'bottom']);
function Aa(t) {
  return H_.has(ur(t)) ? 'y' : 'x';
}
function _m(t) {
  return Mm(Aa(t));
}
function B_(t, a, r) {
  r === void 0 && (r = !1);
  const l = Jl(t),
    s = _m(t),
    u = Nm(s);
  let c = s === 'x' ? (l === (r ? 'end' : 'start') ? 'right' : 'left') : l === 'start' ? 'bottom' : 'top';
  return (a.reference[u] > a.floating[u] && (c = pc(c)), [c, pc(c)]);
}
function k_(t) {
  const a = pc(t);
  return [Wh(t), a, Wh(a)];
}
function Wh(t) {
  return t.replace(/start|end/g, (a) => U_[a]);
}
const S0 = ['left', 'right'],
  x0 = ['right', 'left'],
  P_ = ['top', 'bottom'],
  V_ = ['bottom', 'top'];
function q_(t, a, r) {
  switch (t) {
    case 'top':
    case 'bottom':
      return r ? (a ? x0 : S0) : a ? S0 : x0;
    case 'left':
    case 'right':
      return a ? P_ : V_;
    default:
      return [];
  }
}
function Y_(t, a, r, l) {
  const s = Jl(t);
  let u = q_(ur(t), r === 'start', l);
  return (s && ((u = u.map((c) => c + '-' + s)), a && (u = u.concat(u.map(Wh)))), u);
}
function pc(t) {
  return t.replace(/left|right|bottom|top/g, (a) => z_[a]);
}
function $_(t) {
  return {top: 0, right: 0, bottom: 0, left: 0, ...t};
}
function dw(t) {
  return typeof t != 'number' ? $_(t) : {top: t, right: t, bottom: t, left: t};
}
function gc(t) {
  const {x: a, y: r, width: l, height: s} = t;
  return {width: l, height: s, top: r, left: a, right: a + l, bottom: r + s, x: a, y: r};
}
function w0(t, a, r) {
  let {reference: l, floating: s} = t;
  const u = Aa(a),
    c = _m(a),
    d = Nm(c),
    m = ur(a),
    h = u === 'y',
    y = l.x + l.width / 2 - s.width / 2,
    g = l.y + l.height / 2 - s.height / 2,
    S = l[d] / 2 - s[d] / 2;
  let x;
  switch (m) {
    case 'top':
      x = {x: y, y: l.y - s.height};
      break;
    case 'bottom':
      x = {x: y, y: l.y + l.height};
      break;
    case 'right':
      x = {x: l.x + l.width, y: g};
      break;
    case 'left':
      x = {x: l.x - s.width, y: g};
      break;
    default:
      x = {x: l.x, y: l.y};
  }
  switch (Jl(a)) {
    case 'start':
      x[c] -= S * (r && h ? -1 : 1);
      break;
    case 'end':
      x[c] += S * (r && h ? -1 : 1);
      break;
  }
  return x;
}
async function F_(t, a) {
  var r;
  a === void 0 && (a = {});
  const {x: l, y: s, platform: u, rects: c, elements: d, strategy: m} = t,
    {
      boundary: h = 'clippingAncestors',
      rootBoundary: y = 'viewport',
      elementContext: g = 'floating',
      altBoundary: S = !1,
      padding: x = 0,
    } = sr(a, t),
    C = dw(x),
    T = d[S ? (g === 'floating' ? 'reference' : 'floating') : g],
    R = gc(
      await u.getClippingRect({
        element:
          (r = await (u.isElement == null ? void 0 : u.isElement(T))) == null || r
            ? T
            : T.contextElement || (await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating))),
        boundary: h,
        rootBoundary: y,
        strategy: m,
      }),
    ),
    A = g === 'floating' ? {x: l, y: s, width: c.floating.width, height: c.floating.height} : c.reference,
    _ = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)),
    z = (await (u.isElement == null ? void 0 : u.isElement(_)))
      ? (await (u.getScale == null ? void 0 : u.getScale(_))) || {x: 1, y: 1}
      : {x: 1, y: 1},
    $ = gc(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: A,
            offsetParent: _,
            strategy: m,
          })
        : A,
    );
  return {
    top: (R.top - $.top + C.top) / z.y,
    bottom: ($.bottom - R.bottom + C.bottom) / z.y,
    left: (R.left - $.left + C.left) / z.x,
    right: ($.right - R.right + C.right) / z.x,
  };
}
const G_ = async (t, a, r) => {
    const {placement: l = 'bottom', strategy: s = 'absolute', middleware: u = [], platform: c} = r,
      d = u.filter(Boolean),
      m = await (c.isRTL == null ? void 0 : c.isRTL(a));
    let h = await c.getElementRects({reference: t, floating: a, strategy: s}),
      {x: y, y: g} = w0(h, l, m),
      S = l,
      x = {},
      C = 0;
    for (let T = 0; T < d.length; T++) {
      var w;
      const {name: R, fn: A} = d[T],
        {
          x: _,
          y: z,
          data: $,
          reset: I,
        } = await A({
          x: y,
          y: g,
          initialPlacement: l,
          placement: S,
          strategy: s,
          middlewareData: x,
          rects: h,
          platform: {...c, detectOverflow: (w = c.detectOverflow) != null ? w : F_},
          elements: {reference: t, floating: a},
        });
      ((y = _ ?? y),
        (g = z ?? g),
        (x = {...x, [R]: {...x[R], ...$}}),
        I &&
          C <= 50 &&
          (C++,
          typeof I == 'object' &&
            (I.placement && (S = I.placement),
            I.rects &&
              (h = I.rects === !0 ? await c.getElementRects({reference: t, floating: a, strategy: s}) : I.rects),
            ({x: y, y: g} = w0(h, S, m))),
          (T = -1)));
    }
    return {x: y, y: g, placement: S, strategy: s, middlewareData: x};
  },
  K_ = (t) => ({
    name: 'arrow',
    options: t,
    async fn(a) {
      const {x: r, y: l, placement: s, rects: u, platform: c, elements: d, middlewareData: m} = a,
        {element: h, padding: y = 0} = sr(t, a) || {};
      if (h == null) return {};
      const g = dw(y),
        S = {x: r, y: l},
        x = _m(s),
        C = Nm(x),
        w = await c.getDimensions(h),
        T = x === 'y',
        R = T ? 'top' : 'left',
        A = T ? 'bottom' : 'right',
        _ = T ? 'clientHeight' : 'clientWidth',
        z = u.reference[C] + u.reference[x] - S[x] - u.floating[C],
        $ = S[x] - u.reference[x],
        I = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h));
      let O = I ? I[_] : 0;
      (!O || !(await (c.isElement == null ? void 0 : c.isElement(I)))) && (O = d.floating[_] || u.floating[C]);
      const P = z / 2 - $ / 2,
        Z = O / 2 - w[C] / 2 - 1,
        se = Ir(g[R], Z),
        pe = Ir(g[A], Z),
        le = se,
        ce = O - w[C] - pe,
        ie = O / 2 - w[C] / 2 + P,
        he = Jh(le, ie, ce),
        N = !m.arrow && Jl(s) != null && ie !== he && u.reference[C] / 2 - (ie < le ? se : pe) - w[C] / 2 < 0,
        V = N ? (ie < le ? ie - le : ie - ce) : 0;
      return {[x]: S[x] + V, data: {[x]: he, centerOffset: ie - he - V, ...(N && {alignmentOffset: V})}, reset: N};
    },
  }),
  X_ = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'flip',
        options: t,
        async fn(a) {
          var r, l;
          const {placement: s, middlewareData: u, rects: c, initialPlacement: d, platform: m, elements: h} = a,
            {
              mainAxis: y = !0,
              crossAxis: g = !0,
              fallbackPlacements: S,
              fallbackStrategy: x = 'bestFit',
              fallbackAxisSideDirection: C = 'none',
              flipAlignment: w = !0,
              ...T
            } = sr(t, a);
          if ((r = u.arrow) != null && r.alignmentOffset) return {};
          const R = ur(s),
            A = Aa(d),
            _ = ur(d) === d,
            z = await (m.isRTL == null ? void 0 : m.isRTL(h.floating)),
            $ = S || (_ || !w ? [pc(d)] : k_(d)),
            I = C !== 'none';
          !S && I && $.push(...Y_(d, w, C, z));
          const O = [d, ...$],
            P = await m.detectOverflow(a, T),
            Z = [];
          let se = ((l = u.flip) == null ? void 0 : l.overflows) || [];
          if ((y && Z.push(P[R]), g)) {
            const ie = B_(s, c, z);
            Z.push(P[ie[0]], P[ie[1]]);
          }
          if (((se = [...se, {placement: s, overflows: Z}]), !Z.every((ie) => ie <= 0))) {
            var pe, le;
            const ie = (((pe = u.flip) == null ? void 0 : pe.index) || 0) + 1,
              he = O[ie];
            if (
              he &&
              (!(g === 'alignment' ? A !== Aa(he) : !1) ||
                se.every((B) => (Aa(B.placement) === A ? B.overflows[0] > 0 : !0)))
            )
              return {data: {index: ie, overflows: se}, reset: {placement: he}};
            let N =
              (le = se.filter((V) => V.overflows[0] <= 0).sort((V, B) => V.overflows[1] - B.overflows[1])[0]) == null
                ? void 0
                : le.placement;
            if (!N)
              switch (x) {
                case 'bestFit': {
                  var ce;
                  const V =
                    (ce = se
                      .filter((B) => {
                        if (I) {
                          const fe = Aa(B.placement);
                          return fe === A || fe === 'y';
                        }
                        return !0;
                      })
                      .map((B) => [B.placement, B.overflows.filter((fe) => fe > 0).reduce((fe, ge) => fe + ge, 0)])
                      .sort((B, fe) => B[1] - fe[1])[0]) == null
                      ? void 0
                      : ce[0];
                  V && (N = V);
                  break;
                }
                case 'initialPlacement':
                  N = d;
                  break;
              }
            if (s !== N) return {reset: {placement: N}};
          }
          return {};
        },
      }
    );
  };
function E0(t, a) {
  return {top: t.top - a.height, right: t.right - a.width, bottom: t.bottom - a.height, left: t.left - a.width};
}
function C0(t) {
  return j_.some((a) => t[a] >= 0);
}
const Q_ = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'hide',
        options: t,
        async fn(a) {
          const {rects: r, platform: l} = a,
            {strategy: s = 'referenceHidden', ...u} = sr(t, a);
          switch (s) {
            case 'referenceHidden': {
              const c = await l.detectOverflow(a, {...u, elementContext: 'reference'}),
                d = E0(c, r.reference);
              return {data: {referenceHiddenOffsets: d, referenceHidden: C0(d)}};
            }
            case 'escaped': {
              const c = await l.detectOverflow(a, {...u, altBoundary: !0}),
                d = E0(c, r.floating);
              return {data: {escapedOffsets: d, escaped: C0(d)}};
            }
            default:
              return {};
          }
        },
      }
    );
  },
  hw = new Set(['left', 'top']);
async function I_(t, a) {
  const {placement: r, platform: l, elements: s} = t,
    u = await (l.isRTL == null ? void 0 : l.isRTL(s.floating)),
    c = ur(r),
    d = Jl(r),
    m = Aa(r) === 'y',
    h = hw.has(c) ? -1 : 1,
    y = u && m ? -1 : 1,
    g = sr(a, t);
  let {
    mainAxis: S,
    crossAxis: x,
    alignmentAxis: C,
  } = typeof g == 'number'
    ? {mainAxis: g, crossAxis: 0, alignmentAxis: null}
    : {mainAxis: g.mainAxis || 0, crossAxis: g.crossAxis || 0, alignmentAxis: g.alignmentAxis};
  return (d && typeof C == 'number' && (x = d === 'end' ? C * -1 : C), m ? {x: x * y, y: S * h} : {x: S * h, y: x * y});
}
const Z_ = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: 'offset',
        options: t,
        async fn(a) {
          var r, l;
          const {x: s, y: u, placement: c, middlewareData: d} = a,
            m = await I_(a, t);
          return c === ((r = d.offset) == null ? void 0 : r.placement) && (l = d.arrow) != null && l.alignmentOffset
            ? {}
            : {x: s + m.x, y: u + m.y, data: {...m, placement: c}};
        },
      }
    );
  },
  J_ = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'shift',
        options: t,
        async fn(a) {
          const {x: r, y: l, placement: s, platform: u} = a,
            {
              mainAxis: c = !0,
              crossAxis: d = !1,
              limiter: m = {
                fn: (R) => {
                  let {x: A, y: _} = R;
                  return {x: A, y: _};
                },
              },
              ...h
            } = sr(t, a),
            y = {x: r, y: l},
            g = await u.detectOverflow(a, h),
            S = Aa(ur(s)),
            x = Mm(S);
          let C = y[x],
            w = y[S];
          if (c) {
            const R = x === 'y' ? 'top' : 'left',
              A = x === 'y' ? 'bottom' : 'right',
              _ = C + g[R],
              z = C - g[A];
            C = Jh(_, C, z);
          }
          if (d) {
            const R = S === 'y' ? 'top' : 'left',
              A = S === 'y' ? 'bottom' : 'right',
              _ = w + g[R],
              z = w - g[A];
            w = Jh(_, w, z);
          }
          const T = m.fn({...a, [x]: C, [S]: w});
          return {...T, data: {x: T.x - r, y: T.y - l, enabled: {[x]: c, [S]: d}}};
        },
      }
    );
  },
  W_ = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(a) {
          const {x: r, y: l, placement: s, rects: u, middlewareData: c} = a,
            {offset: d = 0, mainAxis: m = !0, crossAxis: h = !0} = sr(t, a),
            y = {x: r, y: l},
            g = Aa(s),
            S = Mm(g);
          let x = y[S],
            C = y[g];
          const w = sr(d, a),
            T = typeof w == 'number' ? {mainAxis: w, crossAxis: 0} : {mainAxis: 0, crossAxis: 0, ...w};
          if (m) {
            const _ = S === 'y' ? 'height' : 'width',
              z = u.reference[S] - u.floating[_] + T.mainAxis,
              $ = u.reference[S] + u.reference[_] - T.mainAxis;
            x < z ? (x = z) : x > $ && (x = $);
          }
          if (h) {
            var R, A;
            const _ = S === 'y' ? 'width' : 'height',
              z = hw.has(ur(s)),
              $ =
                u.reference[g] -
                u.floating[_] +
                ((z && ((R = c.offset) == null ? void 0 : R[g])) || 0) +
                (z ? 0 : T.crossAxis),
              I =
                u.reference[g] +
                u.reference[_] +
                (z ? 0 : ((A = c.offset) == null ? void 0 : A[g]) || 0) -
                (z ? T.crossAxis : 0);
            C < $ ? (C = $) : C > I && (C = I);
          }
          return {[S]: x, [g]: C};
        },
      }
    );
  },
  eL = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'size',
        options: t,
        async fn(a) {
          var r, l;
          const {placement: s, rects: u, platform: c, elements: d} = a,
            {apply: m = () => {}, ...h} = sr(t, a),
            y = await c.detectOverflow(a, h),
            g = ur(s),
            S = Jl(s),
            x = Aa(s) === 'y',
            {width: C, height: w} = u.floating;
          let T, R;
          g === 'top' || g === 'bottom'
            ? ((T = g),
              (R =
                S === ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating))) ? 'start' : 'end') ? 'left' : 'right'))
            : ((R = g), (T = S === 'end' ? 'top' : 'bottom'));
          const A = w - y.top - y.bottom,
            _ = C - y.left - y.right,
            z = Ir(w - y[T], A),
            $ = Ir(C - y[R], _),
            I = !a.middlewareData.shift;
          let O = z,
            P = $;
          if (
            ((r = a.middlewareData.shift) != null && r.enabled.x && (P = _),
            (l = a.middlewareData.shift) != null && l.enabled.y && (O = A),
            I && !S)
          ) {
            const se = Ln(y.left, 0),
              pe = Ln(y.right, 0),
              le = Ln(y.top, 0),
              ce = Ln(y.bottom, 0);
            x
              ? (P = C - 2 * (se !== 0 || pe !== 0 ? se + pe : Ln(y.left, y.right)))
              : (O = w - 2 * (le !== 0 || ce !== 0 ? le + ce : Ln(y.top, y.bottom)));
          }
          await m({...a, availableWidth: P, availableHeight: O});
          const Z = await c.getDimensions(d.floating);
          return C !== Z.width || w !== Z.height ? {reset: {rects: !0}} : {};
        },
      }
    );
  };
function _c() {
  return typeof window < 'u';
}
function Wl(t) {
  return mw(t) ? (t.nodeName || '').toLowerCase() : '#document';
}
function jn(t) {
  var a;
  return (t == null || (a = t.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function La(t) {
  var a;
  return (a = (mw(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : a.documentElement;
}
function mw(t) {
  return _c() ? t instanceof Node || t instanceof jn(t).Node : !1;
}
function ha(t) {
  return _c() ? t instanceof Element || t instanceof jn(t).Element : !1;
}
function _a(t) {
  return _c() ? t instanceof HTMLElement || t instanceof jn(t).HTMLElement : !1;
}
function T0(t) {
  return !_c() || typeof ShadowRoot > 'u' ? !1 : t instanceof ShadowRoot || t instanceof jn(t).ShadowRoot;
}
const tL = new Set(['inline', 'contents']);
function Es(t) {
  const {overflow: a, overflowX: r, overflowY: l, display: s} = ma(t);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + r) && !tL.has(s);
}
const nL = new Set(['table', 'td', 'th']);
function aL(t) {
  return nL.has(Wl(t));
}
const rL = [':popover-open', ':modal'];
function Lc(t) {
  return rL.some((a) => {
    try {
      return t.matches(a);
    } catch {
      return !1;
    }
  });
}
const iL = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  lL = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  oL = ['paint', 'layout', 'strict', 'content'];
function Lm(t) {
  const a = jm(),
    r = ha(t) ? ma(t) : t;
  return (
    iL.some((l) => (r[l] ? r[l] !== 'none' : !1)) ||
    (r.containerType ? r.containerType !== 'normal' : !1) ||
    (!a && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
    (!a && (r.filter ? r.filter !== 'none' : !1)) ||
    lL.some((l) => (r.willChange || '').includes(l)) ||
    oL.some((l) => (r.contain || '').includes(l))
  );
}
function sL(t) {
  let a = Zr(t);
  for (; _a(a) && !Fl(a); ) {
    if (Lm(a)) return a;
    if (Lc(a)) return null;
    a = Zr(a);
  }
  return null;
}
function jm() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const uL = new Set(['html', 'body', '#document']);
function Fl(t) {
  return uL.has(Wl(t));
}
function ma(t) {
  return jn(t).getComputedStyle(t);
}
function jc(t) {
  return ha(t) ? {scrollLeft: t.scrollLeft, scrollTop: t.scrollTop} : {scrollLeft: t.scrollX, scrollTop: t.scrollY};
}
function Zr(t) {
  if (Wl(t) === 'html') return t;
  const a = t.assignedSlot || t.parentNode || (T0(t) && t.host) || La(t);
  return T0(a) ? a.host : a;
}
function pw(t) {
  const a = Zr(t);
  return Fl(a) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : _a(a) && Es(a) ? a : pw(a);
}
function ds(t, a, r) {
  var l;
  (a === void 0 && (a = []), r === void 0 && (r = !0));
  const s = pw(t),
    u = s === ((l = t.ownerDocument) == null ? void 0 : l.body),
    c = jn(s);
  if (u) {
    const d = em(c);
    return a.concat(c, c.visualViewport || [], Es(s) ? s : [], d && r ? ds(d) : []);
  }
  return a.concat(s, ds(s, [], r));
}
function em(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function gw(t) {
  const a = ma(t);
  let r = parseFloat(a.width) || 0,
    l = parseFloat(a.height) || 0;
  const s = _a(t),
    u = s ? t.offsetWidth : r,
    c = s ? t.offsetHeight : l,
    d = mc(r) !== u || mc(l) !== c;
  return (d && ((r = u), (l = c)), {width: r, height: l, $: d});
}
function zm(t) {
  return ha(t) ? t : t.contextElement;
}
function zl(t) {
  const a = zm(t);
  if (!_a(a)) return Ma(1);
  const r = a.getBoundingClientRect(),
    {width: l, height: s, $: u} = gw(a);
  let c = (u ? mc(r.width) : r.width) / l,
    d = (u ? mc(r.height) : r.height) / s;
  return ((!c || !Number.isFinite(c)) && (c = 1), (!d || !Number.isFinite(d)) && (d = 1), {x: c, y: d});
}
const cL = Ma(0);
function yw(t) {
  const a = jn(t);
  return !jm() || !a.visualViewport ? cL : {x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop};
}
function fL(t, a, r) {
  return (a === void 0 && (a = !1), !r || (a && r !== jn(t)) ? !1 : a);
}
function Ui(t, a, r, l) {
  (a === void 0 && (a = !1), r === void 0 && (r = !1));
  const s = t.getBoundingClientRect(),
    u = zm(t);
  let c = Ma(1);
  a && (l ? ha(l) && (c = zl(l)) : (c = zl(t)));
  const d = fL(u, r, l) ? yw(u) : Ma(0);
  let m = (s.left + d.x) / c.x,
    h = (s.top + d.y) / c.y,
    y = s.width / c.x,
    g = s.height / c.y;
  if (u) {
    const S = jn(u),
      x = l && ha(l) ? jn(l) : l;
    let C = S,
      w = em(C);
    for (; w && l && x !== C; ) {
      const T = zl(w),
        R = w.getBoundingClientRect(),
        A = ma(w),
        _ = R.left + (w.clientLeft + parseFloat(A.paddingLeft)) * T.x,
        z = R.top + (w.clientTop + parseFloat(A.paddingTop)) * T.y;
      ((m *= T.x), (h *= T.y), (y *= T.x), (g *= T.y), (m += _), (h += z), (C = jn(w)), (w = em(C)));
    }
  }
  return gc({width: y, height: g, x: m, y: h});
}
function zc(t, a) {
  const r = jc(t).scrollLeft;
  return a ? a.left + r : Ui(La(t)).left + r;
}
function vw(t, a) {
  const r = t.getBoundingClientRect(),
    l = r.left + a.scrollLeft - zc(t, r),
    s = r.top + a.scrollTop;
  return {x: l, y: s};
}
function dL(t) {
  let {elements: a, rect: r, offsetParent: l, strategy: s} = t;
  const u = s === 'fixed',
    c = La(l),
    d = a ? Lc(a.floating) : !1;
  if (l === c || (d && u)) return r;
  let m = {scrollLeft: 0, scrollTop: 0},
    h = Ma(1);
  const y = Ma(0),
    g = _a(l);
  if ((g || (!g && !u)) && ((Wl(l) !== 'body' || Es(c)) && (m = jc(l)), _a(l))) {
    const x = Ui(l);
    ((h = zl(l)), (y.x = x.x + l.clientLeft), (y.y = x.y + l.clientTop));
  }
  const S = c && !g && !u ? vw(c, m) : Ma(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - m.scrollLeft * h.x + y.x + S.x,
    y: r.y * h.y - m.scrollTop * h.y + y.y + S.y,
  };
}
function hL(t) {
  return Array.from(t.getClientRects());
}
function mL(t) {
  const a = La(t),
    r = jc(t),
    l = t.ownerDocument.body,
    s = Ln(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth),
    u = Ln(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let c = -r.scrollLeft + zc(t);
  const d = -r.scrollTop;
  return (ma(l).direction === 'rtl' && (c += Ln(a.clientWidth, l.clientWidth) - s), {width: s, height: u, x: c, y: d});
}
const O0 = 25;
function pL(t, a) {
  const r = jn(t),
    l = La(t),
    s = r.visualViewport;
  let u = l.clientWidth,
    c = l.clientHeight,
    d = 0,
    m = 0;
  if (s) {
    ((u = s.width), (c = s.height));
    const y = jm();
    (!y || (y && a === 'fixed')) && ((d = s.offsetLeft), (m = s.offsetTop));
  }
  const h = zc(l);
  if (h <= 0) {
    const y = l.ownerDocument,
      g = y.body,
      S = getComputedStyle(g),
      x = (y.compatMode === 'CSS1Compat' && parseFloat(S.marginLeft) + parseFloat(S.marginRight)) || 0,
      C = Math.abs(l.clientWidth - g.clientWidth - x);
    C <= O0 && (u -= C);
  } else h <= O0 && (u += h);
  return {width: u, height: c, x: d, y: m};
}
const gL = new Set(['absolute', 'fixed']);
function yL(t, a) {
  const r = Ui(t, !0, a === 'fixed'),
    l = r.top + t.clientTop,
    s = r.left + t.clientLeft,
    u = _a(t) ? zl(t) : Ma(1),
    c = t.clientWidth * u.x,
    d = t.clientHeight * u.y,
    m = s * u.x,
    h = l * u.y;
  return {width: c, height: d, x: m, y: h};
}
function R0(t, a, r) {
  let l;
  if (a === 'viewport') l = pL(t, r);
  else if (a === 'document') l = mL(La(t));
  else if (ha(a)) l = yL(a, r);
  else {
    const s = yw(t);
    l = {x: a.x - s.x, y: a.y - s.y, width: a.width, height: a.height};
  }
  return gc(l);
}
function bw(t, a) {
  const r = Zr(t);
  return r === a || !ha(r) || Fl(r) ? !1 : ma(r).position === 'fixed' || bw(r, a);
}
function vL(t, a) {
  const r = a.get(t);
  if (r) return r;
  let l = ds(t, [], !1).filter((d) => ha(d) && Wl(d) !== 'body'),
    s = null;
  const u = ma(t).position === 'fixed';
  let c = u ? Zr(t) : t;
  for (; ha(c) && !Fl(c); ) {
    const d = ma(c),
      m = Lm(c);
    (!m && d.position === 'fixed' && (s = null),
      (u ? !m && !s : (!m && d.position === 'static' && !!s && gL.has(s.position)) || (Es(c) && !m && bw(t, c)))
        ? (l = l.filter((y) => y !== c))
        : (s = d),
      (c = Zr(c)));
  }
  return (a.set(t, l), l);
}
function bL(t) {
  let {element: a, boundary: r, rootBoundary: l, strategy: s} = t;
  const c = [...(r === 'clippingAncestors' ? (Lc(a) ? [] : vL(a, this._c)) : [].concat(r)), l],
    d = c[0],
    m = c.reduce(
      (h, y) => {
        const g = R0(a, y, s);
        return (
          (h.top = Ln(g.top, h.top)),
          (h.right = Ir(g.right, h.right)),
          (h.bottom = Ir(g.bottom, h.bottom)),
          (h.left = Ln(g.left, h.left)),
          h
        );
      },
      R0(a, d, s),
    );
  return {width: m.right - m.left, height: m.bottom - m.top, x: m.left, y: m.top};
}
function SL(t) {
  const {width: a, height: r} = gw(t);
  return {width: a, height: r};
}
function xL(t, a, r) {
  const l = _a(a),
    s = La(a),
    u = r === 'fixed',
    c = Ui(t, !0, u, a);
  let d = {scrollLeft: 0, scrollTop: 0};
  const m = Ma(0);
  function h() {
    m.x = zc(s);
  }
  if (l || (!l && !u))
    if (((Wl(a) !== 'body' || Es(s)) && (d = jc(a)), l)) {
      const x = Ui(a, !0, u, a);
      ((m.x = x.x + a.clientLeft), (m.y = x.y + a.clientTop));
    } else s && h();
  u && !l && s && h();
  const y = s && !l && !u ? vw(s, d) : Ma(0),
    g = c.left + d.scrollLeft - m.x - y.x,
    S = c.top + d.scrollTop - m.y - y.y;
  return {x: g, y: S, width: c.width, height: c.height};
}
function Oh(t) {
  return ma(t).position === 'static';
}
function A0(t, a) {
  if (!_a(t) || ma(t).position === 'fixed') return null;
  if (a) return a(t);
  let r = t.offsetParent;
  return (La(t) === r && (r = r.ownerDocument.body), r);
}
function Sw(t, a) {
  const r = jn(t);
  if (Lc(t)) return r;
  if (!_a(t)) {
    let s = Zr(t);
    for (; s && !Fl(s); ) {
      if (ha(s) && !Oh(s)) return s;
      s = Zr(s);
    }
    return r;
  }
  let l = A0(t, a);
  for (; l && aL(l) && Oh(l); ) l = A0(l, a);
  return l && Fl(l) && Oh(l) && !Lm(l) ? r : l || sL(t) || r;
}
const wL = async function (t) {
  const a = this.getOffsetParent || Sw,
    r = this.getDimensions,
    l = await r(t.floating);
  return {
    reference: xL(t.reference, await a(t.floating), t.strategy),
    floating: {x: 0, y: 0, width: l.width, height: l.height},
  };
};
function EL(t) {
  return ma(t).direction === 'rtl';
}
const CL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dL,
  getDocumentElement: La,
  getClippingRect: bL,
  getOffsetParent: Sw,
  getElementRects: wL,
  getClientRects: hL,
  getDimensions: SL,
  getScale: zl,
  isElement: ha,
  isRTL: EL,
};
function xw(t, a) {
  return t.x === a.x && t.y === a.y && t.width === a.width && t.height === a.height;
}
function TL(t, a) {
  let r = null,
    l;
  const s = La(t);
  function u() {
    var d;
    (clearTimeout(l), (d = r) == null || d.disconnect(), (r = null));
  }
  function c(d, m) {
    (d === void 0 && (d = !1), m === void 0 && (m = 1), u());
    const h = t.getBoundingClientRect(),
      {left: y, top: g, width: S, height: x} = h;
    if ((d || a(), !S || !x)) return;
    const C = Zu(g),
      w = Zu(s.clientWidth - (y + S)),
      T = Zu(s.clientHeight - (g + x)),
      R = Zu(y),
      _ = {rootMargin: -C + 'px ' + -w + 'px ' + -T + 'px ' + -R + 'px', threshold: Ln(0, Ir(1, m)) || 1};
    let z = !0;
    function $(I) {
      const O = I[0].intersectionRatio;
      if (O !== m) {
        if (!z) return c();
        O
          ? c(!1, O)
          : (l = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      (O === 1 && !xw(h, t.getBoundingClientRect()) && c(), (z = !1));
    }
    try {
      r = new IntersectionObserver($, {..._, root: s.ownerDocument});
    } catch {
      r = new IntersectionObserver($, _);
    }
    r.observe(t);
  }
  return (c(!0), u);
}
function OL(t, a, r, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == 'function',
      layoutShift: d = typeof IntersectionObserver == 'function',
      animationFrame: m = !1,
    } = l,
    h = zm(t),
    y = s || u ? [...(h ? ds(h) : []), ...ds(a)] : [];
  y.forEach((R) => {
    (s && R.addEventListener('scroll', r, {passive: !0}), u && R.addEventListener('resize', r));
  });
  const g = h && d ? TL(h, r) : null;
  let S = -1,
    x = null;
  c &&
    ((x = new ResizeObserver((R) => {
      let [A] = R;
      (A &&
        A.target === h &&
        x &&
        (x.unobserve(a),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var _;
          (_ = x) == null || _.observe(a);
        }))),
        r());
    })),
    h && !m && x.observe(h),
    x.observe(a));
  let C,
    w = m ? Ui(t) : null;
  m && T();
  function T() {
    const R = Ui(t);
    (w && !xw(w, R) && r(), (w = R), (C = requestAnimationFrame(T)));
  }
  return (
    r(),
    () => {
      var R;
      (y.forEach((A) => {
        (s && A.removeEventListener('scroll', r), u && A.removeEventListener('resize', r));
      }),
        g == null || g(),
        (R = x) == null || R.disconnect(),
        (x = null),
        m && cancelAnimationFrame(C));
    }
  );
}
const RL = Z_,
  AL = J_,
  DL = X_,
  ML = eL,
  NL = Q_,
  D0 = K_,
  _L = W_,
  LL = (t, a, r) => {
    const l = new Map(),
      s = {platform: CL, ...r},
      u = {...s.platform, _c: l};
    return G_(t, a, {...s, platform: u});
  };
var jL = typeof document < 'u',
  zL = function () {},
  rc = jL ? b.useLayoutEffect : zL;
function yc(t, a) {
  if (t === a) return !0;
  if (typeof t != typeof a) return !1;
  if (typeof t == 'function' && t.toString() === a.toString()) return !0;
  let r, l, s;
  if (t && a && typeof t == 'object') {
    if (Array.isArray(t)) {
      if (((r = t.length), r !== a.length)) return !1;
      for (l = r; l-- !== 0; ) if (!yc(t[l], a[l])) return !1;
      return !0;
    }
    if (((s = Object.keys(t)), (r = s.length), r !== Object.keys(a).length)) return !1;
    for (l = r; l-- !== 0; ) if (!{}.hasOwnProperty.call(a, s[l])) return !1;
    for (l = r; l-- !== 0; ) {
      const u = s[l];
      if (!(u === '_owner' && t.$$typeof) && !yc(t[u], a[u])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
}
function ww(t) {
  return typeof window > 'u' ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function M0(t, a) {
  const r = ww(t);
  return Math.round(a * r) / r;
}
function Rh(t) {
  const a = b.useRef(t);
  return (
    rc(() => {
      a.current = t;
    }),
    a
  );
}
function UL(t) {
  t === void 0 && (t = {});
  const {
      placement: a = 'bottom',
      strategy: r = 'absolute',
      middleware: l = [],
      platform: s,
      elements: {reference: u, floating: c} = {},
      transform: d = !0,
      whileElementsMounted: m,
      open: h,
    } = t,
    [y, g] = b.useState({x: 0, y: 0, strategy: r, placement: a, middlewareData: {}, isPositioned: !1}),
    [S, x] = b.useState(l);
  yc(S, l) || x(l);
  const [C, w] = b.useState(null),
    [T, R] = b.useState(null),
    A = b.useCallback((B) => {
      B !== I.current && ((I.current = B), w(B));
    }, []),
    _ = b.useCallback((B) => {
      B !== O.current && ((O.current = B), R(B));
    }, []),
    z = u || C,
    $ = c || T,
    I = b.useRef(null),
    O = b.useRef(null),
    P = b.useRef(y),
    Z = m != null,
    se = Rh(m),
    pe = Rh(s),
    le = Rh(h),
    ce = b.useCallback(() => {
      if (!I.current || !O.current) return;
      const B = {placement: a, strategy: r, middleware: S};
      (pe.current && (B.platform = pe.current),
        LL(I.current, O.current, B).then((fe) => {
          const ge = {...fe, isPositioned: le.current !== !1};
          ie.current &&
            !yc(P.current, ge) &&
            ((P.current = ge),
            Kl.flushSync(() => {
              g(ge);
            }));
        }));
    }, [S, a, r, pe, le]);
  rc(() => {
    h === !1 && P.current.isPositioned && ((P.current.isPositioned = !1), g((B) => ({...B, isPositioned: !1})));
  }, [h]);
  const ie = b.useRef(!1);
  (rc(
    () => (
      (ie.current = !0),
      () => {
        ie.current = !1;
      }
    ),
    [],
  ),
    rc(() => {
      if ((z && (I.current = z), $ && (O.current = $), z && $)) {
        if (se.current) return se.current(z, $, ce);
        ce();
      }
    }, [z, $, ce, se, Z]));
  const he = b.useMemo(() => ({reference: I, floating: O, setReference: A, setFloating: _}), [A, _]),
    N = b.useMemo(() => ({reference: z, floating: $}), [z, $]),
    V = b.useMemo(() => {
      const B = {position: r, left: 0, top: 0};
      if (!N.floating) return B;
      const fe = M0(N.floating, y.x),
        ge = M0(N.floating, y.y);
      return d
        ? {
            ...B,
            transform: 'translate(' + fe + 'px, ' + ge + 'px)',
            ...(ww(N.floating) >= 1.5 && {willChange: 'transform'}),
          }
        : {position: r, left: fe, top: ge};
    }, [r, d, N.floating, y.x, y.y]);
  return b.useMemo(() => ({...y, update: ce, refs: he, elements: N, floatingStyles: V}), [y, ce, he, N, V]);
}
const HL = (t) => {
    function a(r) {
      return {}.hasOwnProperty.call(r, 'current');
    }
    return {
      name: 'arrow',
      options: t,
      fn(r) {
        const {element: l, padding: s} = typeof t == 'function' ? t(r) : t;
        return l && a(l)
          ? l.current != null
            ? D0({element: l.current, padding: s}).fn(r)
            : {}
          : l
            ? D0({element: l, padding: s}).fn(r)
            : {};
      },
    };
  },
  BL = (t, a) => ({...RL(t), options: [t, a]}),
  kL = (t, a) => ({...AL(t), options: [t, a]}),
  PL = (t, a) => ({..._L(t), options: [t, a]}),
  VL = (t, a) => ({...DL(t), options: [t, a]}),
  qL = (t, a) => ({...ML(t), options: [t, a]}),
  YL = (t, a) => ({...NL(t), options: [t, a]}),
  $L = (t, a) => ({...HL(t), options: [t, a]});
var FL = 'Arrow',
  Ew = b.forwardRef((t, a) => {
    const {children: r, width: l = 10, height: s = 5, ...u} = t;
    return j.jsx(dt.svg, {
      ...u,
      ref: a,
      width: l,
      height: s,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: t.asChild ? r : j.jsx('polygon', {points: '0,0 30,0 15,10'}),
    });
  });
Ew.displayName = FL;
var GL = Ew;
function KL(t) {
  const [a, r] = b.useState(void 0);
  return (
    ln(() => {
      if (t) {
        r({width: t.offsetWidth, height: t.offsetHeight});
        const l = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const u = s[0];
          let c, d;
          if ('borderBoxSize' in u) {
            const m = u.borderBoxSize,
              h = Array.isArray(m) ? m[0] : m;
            ((c = h.inlineSize), (d = h.blockSize));
          } else ((c = t.offsetWidth), (d = t.offsetHeight));
          r({width: c, height: d});
        });
        return (l.observe(t, {box: 'border-box'}), () => l.unobserve(t));
      } else r(void 0);
    }, [t]),
    a
  );
}
var Um = 'Popper',
  [Cw, Tw] = ws(Um),
  [XL, Ow] = Cw(Um),
  Rw = (t) => {
    const {__scopePopper: a, children: r} = t,
      [l, s] = b.useState(null);
    return j.jsx(XL, {scope: a, anchor: l, onAnchorChange: s, children: r});
  };
Rw.displayName = Um;
var Aw = 'PopperAnchor',
  Dw = b.forwardRef((t, a) => {
    const {__scopePopper: r, virtualRef: l, ...s} = t,
      u = Ow(Aw, r),
      c = b.useRef(null),
      d = wt(a, c),
      m = b.useRef(null);
    return (
      b.useEffect(() => {
        const h = m.current;
        ((m.current = (l == null ? void 0 : l.current) || c.current), h !== m.current && u.onAnchorChange(m.current));
      }),
      l ? null : j.jsx(dt.div, {...s, ref: d})
    );
  });
Dw.displayName = Aw;
var Hm = 'PopperContent',
  [QL, IL] = Cw(Hm),
  Mw = b.forwardRef((t, a) => {
    var re, ye, Me, Ue, He, Te;
    const {
        __scopePopper: r,
        side: l = 'bottom',
        sideOffset: s = 0,
        align: u = 'center',
        alignOffset: c = 0,
        arrowPadding: d = 0,
        avoidCollisions: m = !0,
        collisionBoundary: h = [],
        collisionPadding: y = 0,
        sticky: g = 'partial',
        hideWhenDetached: S = !1,
        updatePositionStrategy: x = 'optimized',
        onPlaced: C,
        ...w
      } = t,
      T = Ow(Hm, r),
      [R, A] = b.useState(null),
      _ = wt(a, (ht) => A(ht)),
      [z, $] = b.useState(null),
      I = KL(z),
      O = (I == null ? void 0 : I.width) ?? 0,
      P = (I == null ? void 0 : I.height) ?? 0,
      Z = l + (u !== 'center' ? '-' + u : ''),
      se = typeof y == 'number' ? y : {top: 0, right: 0, bottom: 0, left: 0, ...y},
      pe = Array.isArray(h) ? h : [h],
      le = pe.length > 0,
      ce = {padding: se, boundary: pe.filter(JL), altBoundary: le},
      {
        refs: ie,
        floatingStyles: he,
        placement: N,
        isPositioned: V,
        middlewareData: B,
      } = UL({
        strategy: 'fixed',
        placement: Z,
        whileElementsMounted: (...ht) => OL(...ht, {animationFrame: x === 'always'}),
        elements: {reference: T.anchor},
        middleware: [
          BL({mainAxis: s + P, alignmentAxis: c}),
          m && kL({mainAxis: !0, crossAxis: !1, limiter: g === 'partial' ? PL() : void 0, ...ce}),
          m && VL({...ce}),
          qL({
            ...ce,
            apply: ({elements: ht, rects: mt, availableWidth: xn, availableHeight: zt}) => {
              const {width: sn, height: ja} = mt.reference,
                At = ht.floating.style;
              (At.setProperty('--radix-popper-available-width', `${xn}px`),
                At.setProperty('--radix-popper-available-height', `${zt}px`),
                At.setProperty('--radix-popper-anchor-width', `${sn}px`),
                At.setProperty('--radix-popper-anchor-height', `${ja}px`));
            },
          }),
          z && $L({element: z, padding: d}),
          WL({arrowWidth: O, arrowHeight: P}),
          S && YL({strategy: 'referenceHidden', ...ce}),
        ],
      }),
      [fe, ge] = Lw(N),
      D = ji(C);
    ln(() => {
      V && (D == null || D());
    }, [V, D]);
    const K = (re = B.arrow) == null ? void 0 : re.x,
      X = (ye = B.arrow) == null ? void 0 : ye.y,
      ee = ((Me = B.arrow) == null ? void 0 : Me.centerOffset) !== 0,
      [ue, be] = b.useState();
    return (
      ln(() => {
        R && be(window.getComputedStyle(R).zIndex);
      }, [R]),
      j.jsx('div', {
        ref: ie.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...he,
          transform: V ? he.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: ue,
          '--radix-popper-transform-origin': [
            (Ue = B.transformOrigin) == null ? void 0 : Ue.x,
            (He = B.transformOrigin) == null ? void 0 : He.y,
          ].join(' '),
          ...(((Te = B.hide) == null ? void 0 : Te.referenceHidden) && {visibility: 'hidden', pointerEvents: 'none'}),
        },
        dir: t.dir,
        children: j.jsx(QL, {
          scope: r,
          placedSide: fe,
          onArrowChange: $,
          arrowX: K,
          arrowY: X,
          shouldHideArrow: ee,
          children: j.jsx(dt.div, {
            'data-side': fe,
            'data-align': ge,
            ...w,
            ref: _,
            style: {...w.style, animation: V ? void 0 : 'none'},
          }),
        }),
      })
    );
  });
Mw.displayName = Hm;
var Nw = 'PopperArrow',
  ZL = {top: 'bottom', right: 'left', bottom: 'top', left: 'right'},
  _w = b.forwardRef(function (a, r) {
    const {__scopePopper: l, ...s} = a,
      u = IL(Nw, l),
      c = ZL[u.placedSide];
    return j.jsx('span', {
      ref: u.onArrowChange,
      style: {
        position: 'absolute',
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {top: '', right: '0 0', bottom: 'center 0', left: '100% 0'}[u.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[u.placedSide],
        visibility: u.shouldHideArrow ? 'hidden' : void 0,
      },
      children: j.jsx(GL, {...s, ref: r, style: {...s.style, display: 'block'}}),
    });
  });
_w.displayName = Nw;
function JL(t) {
  return t !== null;
}
var WL = (t) => ({
  name: 'transformOrigin',
  options: t,
  fn(a) {
    var T, R, A;
    const {placement: r, rects: l, middlewareData: s} = a,
      c = ((T = s.arrow) == null ? void 0 : T.centerOffset) !== 0,
      d = c ? 0 : t.arrowWidth,
      m = c ? 0 : t.arrowHeight,
      [h, y] = Lw(r),
      g = {start: '0%', center: '50%', end: '100%'}[y],
      S = (((R = s.arrow) == null ? void 0 : R.x) ?? 0) + d / 2,
      x = (((A = s.arrow) == null ? void 0 : A.y) ?? 0) + m / 2;
    let C = '',
      w = '';
    return (
      h === 'bottom'
        ? ((C = c ? g : `${S}px`), (w = `${-m}px`))
        : h === 'top'
          ? ((C = c ? g : `${S}px`), (w = `${l.floating.height + m}px`))
          : h === 'right'
            ? ((C = `${-m}px`), (w = c ? g : `${x}px`))
            : h === 'left' && ((C = `${l.floating.width + m}px`), (w = c ? g : `${x}px`)),
      {data: {x: C, y: w}}
    );
  },
});
function Lw(t) {
  const [a, r = 'center'] = t.split('-');
  return [a, r];
}
var ej = Rw,
  tj = Dw,
  nj = Mw,
  aj = _w;
function rj(t) {
  const a = ij(t),
    r = b.forwardRef((l, s) => {
      const {children: u, ...c} = l,
        d = b.Children.toArray(u),
        m = d.find(oj);
      if (m) {
        const h = m.props.children,
          y = d.map((g) =>
            g === m
              ? b.Children.count(h) > 1
                ? b.Children.only(null)
                : b.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return j.jsx(a, {...c, ref: s, children: b.isValidElement(h) ? b.cloneElement(h, void 0, y) : null});
      }
      return j.jsx(a, {...c, ref: s, children: u});
    });
  return ((r.displayName = `${t}.Slot`), r);
}
function ij(t) {
  const a = b.forwardRef((r, l) => {
    const {children: s, ...u} = r;
    if (b.isValidElement(s)) {
      const c = uj(s),
        d = sj(u, s.props);
      return (s.type !== b.Fragment && (d.ref = l ? Ql(l, c) : c), b.cloneElement(s, d));
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return ((a.displayName = `${t}.SlotClone`), a);
}
var lj = Symbol('radix.slottable');
function oj(t) {
  return b.isValidElement(t) && typeof t.type == 'function' && '__radixId' in t.type && t.type.__radixId === lj;
}
function sj(t, a) {
  const r = {...a};
  for (const l in a) {
    const s = t[l],
      u = a[l];
    /^on[A-Z]/.test(l)
      ? s && u
        ? (r[l] = (...d) => {
            const m = u(...d);
            return (s(...d), m);
          })
        : s && (r[l] = s)
      : l === 'style'
        ? (r[l] = {...s, ...u})
        : l === 'className' && (r[l] = [s, u].filter(Boolean).join(' '));
  }
  return {...t, ...r};
}
function uj(t) {
  var l, s;
  let a = (l = Object.getOwnPropertyDescriptor(t.props, 'ref')) == null ? void 0 : l.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? t.ref
    : ((a = (s = Object.getOwnPropertyDescriptor(t, 'ref')) == null ? void 0 : s.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
function cj(t) {
  const a = b.useRef({value: t, previous: t});
  return b.useMemo(
    () => (
      a.current.value !== t && ((a.current.previous = a.current.value), (a.current.value = t)),
      a.current.previous
    ),
    [t],
  );
}
var jw = Object.freeze({
    position: 'absolute',
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }),
  fj = 'VisuallyHidden',
  dj = b.forwardRef((t, a) => j.jsx(dt.span, {...t, ref: a, style: {...jw, ...t.style}}));
dj.displayName = fj;
var hj = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  mj = [' ', 'Enter'],
  Hi = 'Select',
  [Uc, Hc, pj] = N_(Hi),
  [eo] = ws(Hi, [pj, Tw]),
  Bc = Tw(),
  [gj, Wr] = eo(Hi),
  [yj, vj] = eo(Hi),
  zw = (t) => {
    const {
        __scopeSelect: a,
        children: r,
        open: l,
        defaultOpen: s,
        onOpenChange: u,
        value: c,
        defaultValue: d,
        onValueChange: m,
        dir: h,
        name: y,
        autoComplete: g,
        disabled: S,
        required: x,
        form: C,
      } = t,
      w = Bc(a),
      [T, R] = b.useState(null),
      [A, _] = b.useState(null),
      [z, $] = b.useState(!1),
      I = L_(h),
      [O, P] = Xh({prop: l, defaultProp: s ?? !1, onChange: u, caller: Hi}),
      [Z, se] = Xh({prop: c, defaultProp: d, onChange: m, caller: Hi}),
      pe = b.useRef(null),
      le = T ? C || !!T.closest('form') : !0,
      [ce, ie] = b.useState(new Set()),
      he = Array.from(ce)
        .map((N) => N.props.value)
        .join(';');
    return j.jsx(ej, {
      ...w,
      children: j.jsxs(gj, {
        required: x,
        scope: a,
        trigger: T,
        onTriggerChange: R,
        valueNode: A,
        onValueNodeChange: _,
        valueNodeHasChildren: z,
        onValueNodeHasChildrenChange: $,
        contentId: _l(),
        value: Z,
        onValueChange: se,
        open: O,
        onOpenChange: P,
        dir: I,
        triggerPointerDownPosRef: pe,
        disabled: S,
        children: [
          j.jsx(Uc.Provider, {
            scope: a,
            children: j.jsx(yj, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: b.useCallback((N) => {
                ie((V) => new Set(V).add(N));
              }, []),
              onNativeOptionRemove: b.useCallback((N) => {
                ie((V) => {
                  const B = new Set(V);
                  return (B.delete(N), B);
                });
              }, []),
              children: r,
            }),
          }),
          le
            ? j.jsxs(
                i1,
                {
                  'aria-hidden': !0,
                  required: x,
                  tabIndex: -1,
                  name: y,
                  autoComplete: g,
                  value: Z,
                  onChange: (N) => se(N.target.value),
                  disabled: S,
                  form: C,
                  children: [Z === void 0 ? j.jsx('option', {value: ''}) : null, Array.from(ce)],
                },
                he,
              )
            : null,
        ],
      }),
    });
  };
zw.displayName = Hi;
var Uw = 'SelectTrigger',
  Hw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, disabled: l = !1, ...s} = t,
      u = Bc(r),
      c = Wr(Uw, r),
      d = c.disabled || l,
      m = wt(a, c.onTriggerChange),
      h = Hc(r),
      y = b.useRef('touch'),
      [g, S, x] = o1((w) => {
        const T = h().filter((_) => !_.disabled),
          R = T.find((_) => _.value === c.value),
          A = s1(T, w, R);
        A !== void 0 && c.onValueChange(A.value);
      }),
      C = (w) => {
        (d || (c.onOpenChange(!0), x()),
          w && (c.triggerPointerDownPosRef.current = {x: Math.round(w.pageX), y: Math.round(w.pageY)}));
      };
    return j.jsx(tj, {
      asChild: !0,
      ...u,
      children: j.jsx(dt.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': c.contentId,
        'aria-expanded': c.open,
        'aria-required': c.required,
        'aria-autocomplete': 'none',
        dir: c.dir,
        'data-state': c.open ? 'open' : 'closed',
        disabled: d,
        'data-disabled': d ? '' : void 0,
        'data-placeholder': l1(c.value) ? '' : void 0,
        ...s,
        ref: m,
        onClick: ft(s.onClick, (w) => {
          (w.currentTarget.focus(), y.current !== 'mouse' && C(w));
        }),
        onPointerDown: ft(s.onPointerDown, (w) => {
          y.current = w.pointerType;
          const T = w.target;
          (T.hasPointerCapture(w.pointerId) && T.releasePointerCapture(w.pointerId),
            w.button === 0 && w.ctrlKey === !1 && w.pointerType === 'mouse' && (C(w), w.preventDefault()));
        }),
        onKeyDown: ft(s.onKeyDown, (w) => {
          const T = g.current !== '';
          (!(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && S(w.key),
            !(T && w.key === ' ') && hj.includes(w.key) && (C(), w.preventDefault()));
        }),
      }),
    });
  });
Hw.displayName = Uw;
var Bw = 'SelectValue',
  kw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, className: l, style: s, children: u, placeholder: c = '', ...d} = t,
      m = Wr(Bw, r),
      {onValueNodeHasChildrenChange: h} = m,
      y = u !== void 0,
      g = wt(a, m.onValueNodeChange);
    return (
      ln(() => {
        h(y);
      }, [h, y]),
      j.jsx(dt.span, {
        ...d,
        ref: g,
        style: {pointerEvents: 'none'},
        children: l1(m.value) ? j.jsx(j.Fragment, {children: c}) : u,
      })
    );
  });
kw.displayName = Bw;
var bj = 'SelectIcon',
  Pw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, children: l, ...s} = t;
    return j.jsx(dt.span, {'aria-hidden': !0, ...s, ref: a, children: l || '▼'});
  });
Pw.displayName = bj;
var Sj = 'SelectPortal',
  Vw = (t) => j.jsx(Em, {asChild: !0, ...t});
Vw.displayName = Sj;
var Bi = 'SelectContent',
  qw = b.forwardRef((t, a) => {
    const r = Wr(Bi, t.__scopeSelect),
      [l, s] = b.useState();
    if (
      (ln(() => {
        s(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const u = l;
      return u
        ? Kl.createPortal(
            j.jsx(Yw, {
              scope: t.__scopeSelect,
              children: j.jsx(Uc.Slot, {scope: t.__scopeSelect, children: j.jsx('div', {children: t.children})}),
            }),
            u,
          )
        : null;
    }
    return j.jsx($w, {...t, ref: a});
  });
qw.displayName = Bi;
var sa = 10,
  [Yw, ei] = eo(Bi),
  xj = 'SelectContentImpl',
  wj = rj('SelectContent.RemoveScroll'),
  $w = b.forwardRef((t, a) => {
    const {
        __scopeSelect: r,
        position: l = 'item-aligned',
        onCloseAutoFocus: s,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        side: d,
        sideOffset: m,
        align: h,
        alignOffset: y,
        arrowPadding: g,
        collisionBoundary: S,
        collisionPadding: x,
        sticky: C,
        hideWhenDetached: w,
        avoidCollisions: T,
        ...R
      } = t,
      A = Wr(Bi, r),
      [_, z] = b.useState(null),
      [$, I] = b.useState(null),
      O = wt(a, (re) => z(re)),
      [P, Z] = b.useState(null),
      [se, pe] = b.useState(null),
      le = Hc(r),
      [ce, ie] = b.useState(!1),
      he = b.useRef(!1);
    (b.useEffect(() => {
      if (_) return lx(_);
    }, [_]),
      ZS());
    const N = b.useCallback(
        (re) => {
          const [ye, ...Me] = le().map((Te) => Te.ref.current),
            [Ue] = Me.slice(-1),
            He = document.activeElement;
          for (const Te of re)
            if (
              Te === He ||
              (Te == null || Te.scrollIntoView({block: 'nearest'}),
              Te === ye && $ && ($.scrollTop = 0),
              Te === Ue && $ && ($.scrollTop = $.scrollHeight),
              Te == null || Te.focus(),
              document.activeElement !== He)
            )
              return;
        },
        [le, $],
      ),
      V = b.useCallback(() => N([P, _]), [N, P, _]);
    b.useEffect(() => {
      ce && V();
    }, [ce, V]);
    const {onOpenChange: B, triggerPointerDownPosRef: fe} = A;
    (b.useEffect(() => {
      if (_) {
        let re = {x: 0, y: 0};
        const ye = (Ue) => {
            var He, Te;
            re = {
              x: Math.abs(Math.round(Ue.pageX) - (((He = fe.current) == null ? void 0 : He.x) ?? 0)),
              y: Math.abs(Math.round(Ue.pageY) - (((Te = fe.current) == null ? void 0 : Te.y) ?? 0)),
            };
          },
          Me = (Ue) => {
            (re.x <= 10 && re.y <= 10 ? Ue.preventDefault() : _.contains(Ue.target) || B(!1),
              document.removeEventListener('pointermove', ye),
              (fe.current = null));
          };
        return (
          fe.current !== null &&
            (document.addEventListener('pointermove', ye),
            document.addEventListener('pointerup', Me, {capture: !0, once: !0})),
          () => {
            (document.removeEventListener('pointermove', ye),
              document.removeEventListener('pointerup', Me, {capture: !0}));
          }
        );
      }
    }, [_, B, fe]),
      b.useEffect(() => {
        const re = () => B(!1);
        return (
          window.addEventListener('blur', re),
          window.addEventListener('resize', re),
          () => {
            (window.removeEventListener('blur', re), window.removeEventListener('resize', re));
          }
        );
      }, [B]));
    const [ge, D] = o1((re) => {
        const ye = le().filter((He) => !He.disabled),
          Me = ye.find((He) => He.ref.current === document.activeElement),
          Ue = s1(ye, re, Me);
        Ue && setTimeout(() => Ue.ref.current.focus());
      }),
      K = b.useCallback(
        (re, ye, Me) => {
          const Ue = !he.current && !Me;
          ((A.value !== void 0 && A.value === ye) || Ue) && (Z(re), Ue && (he.current = !0));
        },
        [A.value],
      ),
      X = b.useCallback(() => (_ == null ? void 0 : _.focus()), [_]),
      ee = b.useCallback(
        (re, ye, Me) => {
          const Ue = !he.current && !Me;
          ((A.value !== void 0 && A.value === ye) || Ue) && pe(re);
        },
        [A.value],
      ),
      ue = l === 'popper' ? tm : Fw,
      be =
        ue === tm
          ? {
              side: d,
              sideOffset: m,
              align: h,
              alignOffset: y,
              arrowPadding: g,
              collisionBoundary: S,
              collisionPadding: x,
              sticky: C,
              hideWhenDetached: w,
              avoidCollisions: T,
            }
          : {};
    return j.jsx(Yw, {
      scope: r,
      content: _,
      viewport: $,
      onViewportChange: I,
      itemRefCallback: K,
      selectedItem: P,
      onItemLeave: X,
      itemTextRefCallback: ee,
      focusSelectedItem: V,
      selectedItemText: se,
      position: l,
      isPositioned: ce,
      searchRef: ge,
      children: j.jsx(Cm, {
        as: wj,
        allowPinchZoom: !0,
        children: j.jsx(wm, {
          asChild: !0,
          trapped: A.open,
          onMountAutoFocus: (re) => {
            re.preventDefault();
          },
          onUnmountAutoFocus: ft(s, (re) => {
            var ye;
            ((ye = A.trigger) == null || ye.focus({preventScroll: !0}), re.preventDefault());
          }),
          children: j.jsx(xm, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: (re) => re.preventDefault(),
            onDismiss: () => A.onOpenChange(!1),
            children: j.jsx(ue, {
              role: 'listbox',
              id: A.contentId,
              'data-state': A.open ? 'open' : 'closed',
              dir: A.dir,
              onContextMenu: (re) => re.preventDefault(),
              ...R,
              ...be,
              onPlaced: () => ie(!0),
              ref: O,
              style: {display: 'flex', flexDirection: 'column', outline: 'none', ...R.style},
              onKeyDown: ft(R.onKeyDown, (re) => {
                const ye = re.ctrlKey || re.altKey || re.metaKey;
                if (
                  (re.key === 'Tab' && re.preventDefault(),
                  !ye && re.key.length === 1 && D(re.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(re.key))
                ) {
                  let Ue = le()
                    .filter((He) => !He.disabled)
                    .map((He) => He.ref.current);
                  if (
                    (['ArrowUp', 'End'].includes(re.key) && (Ue = Ue.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes(re.key))
                  ) {
                    const He = re.target,
                      Te = Ue.indexOf(He);
                    Ue = Ue.slice(Te + 1);
                  }
                  (setTimeout(() => N(Ue)), re.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
$w.displayName = xj;
var Ej = 'SelectItemAlignedPosition',
  Fw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, onPlaced: l, ...s} = t,
      u = Wr(Bi, r),
      c = ei(Bi, r),
      [d, m] = b.useState(null),
      [h, y] = b.useState(null),
      g = wt(a, (O) => y(O)),
      S = Hc(r),
      x = b.useRef(!1),
      C = b.useRef(!0),
      {viewport: w, selectedItem: T, selectedItemText: R, focusSelectedItem: A} = c,
      _ = b.useCallback(() => {
        if (u.trigger && u.valueNode && d && h && w && T && R) {
          const O = u.trigger.getBoundingClientRect(),
            P = h.getBoundingClientRect(),
            Z = u.valueNode.getBoundingClientRect(),
            se = R.getBoundingClientRect();
          if (u.dir !== 'rtl') {
            const He = se.left - P.left,
              Te = Z.left - He,
              ht = O.left - Te,
              mt = O.width + ht,
              xn = Math.max(mt, P.width),
              zt = window.innerWidth - sa,
              sn = v0(Te, [sa, Math.max(sa, zt - xn)]);
            ((d.style.minWidth = mt + 'px'), (d.style.left = sn + 'px'));
          } else {
            const He = P.right - se.right,
              Te = window.innerWidth - Z.right - He,
              ht = window.innerWidth - O.right - Te,
              mt = O.width + ht,
              xn = Math.max(mt, P.width),
              zt = window.innerWidth - sa,
              sn = v0(Te, [sa, Math.max(sa, zt - xn)]);
            ((d.style.minWidth = mt + 'px'), (d.style.right = sn + 'px'));
          }
          const pe = S(),
            le = window.innerHeight - sa * 2,
            ce = w.scrollHeight,
            ie = window.getComputedStyle(h),
            he = parseInt(ie.borderTopWidth, 10),
            N = parseInt(ie.paddingTop, 10),
            V = parseInt(ie.borderBottomWidth, 10),
            B = parseInt(ie.paddingBottom, 10),
            fe = he + N + ce + B + V,
            ge = Math.min(T.offsetHeight * 5, fe),
            D = window.getComputedStyle(w),
            K = parseInt(D.paddingTop, 10),
            X = parseInt(D.paddingBottom, 10),
            ee = O.top + O.height / 2 - sa,
            ue = le - ee,
            be = T.offsetHeight / 2,
            re = T.offsetTop + be,
            ye = he + N + re,
            Me = fe - ye;
          if (ye <= ee) {
            const He = pe.length > 0 && T === pe[pe.length - 1].ref.current;
            d.style.bottom = '0px';
            const Te = h.clientHeight - w.offsetTop - w.offsetHeight,
              ht = Math.max(ue, be + (He ? X : 0) + Te + V),
              mt = ye + ht;
            d.style.height = mt + 'px';
          } else {
            const He = pe.length > 0 && T === pe[0].ref.current;
            d.style.top = '0px';
            const ht = Math.max(ee, he + w.offsetTop + (He ? K : 0) + be) + Me;
            ((d.style.height = ht + 'px'), (w.scrollTop = ye - ee + w.offsetTop));
          }
          ((d.style.margin = `${sa}px 0`),
            (d.style.minHeight = ge + 'px'),
            (d.style.maxHeight = le + 'px'),
            l == null || l(),
            requestAnimationFrame(() => (x.current = !0)));
        }
      }, [S, u.trigger, u.valueNode, d, h, w, T, R, u.dir, l]);
    ln(() => _(), [_]);
    const [z, $] = b.useState();
    ln(() => {
      h && $(window.getComputedStyle(h).zIndex);
    }, [h]);
    const I = b.useCallback(
      (O) => {
        O && C.current === !0 && (_(), A == null || A(), (C.current = !1));
      },
      [_, A],
    );
    return j.jsx(Tj, {
      scope: r,
      contentWrapper: d,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: I,
      children: j.jsx('div', {
        ref: m,
        style: {display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: z},
        children: j.jsx(dt.div, {...s, ref: g, style: {boxSizing: 'border-box', maxHeight: '100%', ...s.style}}),
      }),
    });
  });
Fw.displayName = Ej;
var Cj = 'SelectPopperPosition',
  tm = b.forwardRef((t, a) => {
    const {__scopeSelect: r, align: l = 'start', collisionPadding: s = sa, ...u} = t,
      c = Bc(r);
    return j.jsx(nj, {
      ...c,
      ...u,
      ref: a,
      align: l,
      collisionPadding: s,
      style: {
        boxSizing: 'border-box',
        ...u.style,
        '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
        '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    });
  });
tm.displayName = Cj;
var [Tj, Bm] = eo(Bi, {}),
  nm = 'SelectViewport',
  Gw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, nonce: l, ...s} = t,
      u = ei(nm, r),
      c = Bm(nm, r),
      d = wt(a, u.onViewportChange),
      m = b.useRef(0);
    return j.jsxs(j.Fragment, {
      children: [
        j.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: l,
        }),
        j.jsx(Uc.Slot, {
          scope: r,
          children: j.jsx(dt.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...s,
            ref: d,
            style: {position: 'relative', flex: 1, overflow: 'hidden auto', ...s.style},
            onScroll: ft(s.onScroll, (h) => {
              const y = h.currentTarget,
                {contentWrapper: g, shouldExpandOnScrollRef: S} = c;
              if (S != null && S.current && g) {
                const x = Math.abs(m.current - y.scrollTop);
                if (x > 0) {
                  const C = window.innerHeight - sa * 2,
                    w = parseFloat(g.style.minHeight),
                    T = parseFloat(g.style.height),
                    R = Math.max(w, T);
                  if (R < C) {
                    const A = R + x,
                      _ = Math.min(C, A),
                      z = A - _;
                    ((g.style.height = _ + 'px'),
                      g.style.bottom === '0px' &&
                        ((y.scrollTop = z > 0 ? z : 0), (g.style.justifyContent = 'flex-end')));
                  }
                }
              }
              m.current = y.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Gw.displayName = nm;
var Kw = 'SelectGroup',
  [Oj, Rj] = eo(Kw),
  Aj = b.forwardRef((t, a) => {
    const {__scopeSelect: r, ...l} = t,
      s = _l();
    return j.jsx(Oj, {scope: r, id: s, children: j.jsx(dt.div, {role: 'group', 'aria-labelledby': s, ...l, ref: a})});
  });
Aj.displayName = Kw;
var Xw = 'SelectLabel',
  Qw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, ...l} = t,
      s = Rj(Xw, r);
    return j.jsx(dt.div, {id: s.id, ...l, ref: a});
  });
Qw.displayName = Xw;
var vc = 'SelectItem',
  [Dj, Iw] = eo(vc),
  Zw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, value: l, disabled: s = !1, textValue: u, ...c} = t,
      d = Wr(vc, r),
      m = ei(vc, r),
      h = d.value === l,
      [y, g] = b.useState(u ?? ''),
      [S, x] = b.useState(!1),
      C = wt(a, (A) => {
        var _;
        return (_ = m.itemRefCallback) == null ? void 0 : _.call(m, A, l, s);
      }),
      w = _l(),
      T = b.useRef('touch'),
      R = () => {
        s || (d.onValueChange(l), d.onOpenChange(!1));
      };
    if (l === '')
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
      );
    return j.jsx(Dj, {
      scope: r,
      value: l,
      disabled: s,
      textId: w,
      isSelected: h,
      onItemTextChange: b.useCallback((A) => {
        g((_) => _ || ((A == null ? void 0 : A.textContent) ?? '').trim());
      }, []),
      children: j.jsx(Uc.ItemSlot, {
        scope: r,
        value: l,
        disabled: s,
        textValue: y,
        children: j.jsx(dt.div, {
          role: 'option',
          'aria-labelledby': w,
          'data-highlighted': S ? '' : void 0,
          'aria-selected': h && S,
          'data-state': h ? 'checked' : 'unchecked',
          'aria-disabled': s || void 0,
          'data-disabled': s ? '' : void 0,
          tabIndex: s ? void 0 : -1,
          ...c,
          ref: C,
          onFocus: ft(c.onFocus, () => x(!0)),
          onBlur: ft(c.onBlur, () => x(!1)),
          onClick: ft(c.onClick, () => {
            T.current !== 'mouse' && R();
          }),
          onPointerUp: ft(c.onPointerUp, () => {
            T.current === 'mouse' && R();
          }),
          onPointerDown: ft(c.onPointerDown, (A) => {
            T.current = A.pointerType;
          }),
          onPointerMove: ft(c.onPointerMove, (A) => {
            var _;
            ((T.current = A.pointerType),
              s
                ? (_ = m.onItemLeave) == null || _.call(m)
                : T.current === 'mouse' && A.currentTarget.focus({preventScroll: !0}));
          }),
          onPointerLeave: ft(c.onPointerLeave, (A) => {
            var _;
            A.currentTarget === document.activeElement && ((_ = m.onItemLeave) == null || _.call(m));
          }),
          onKeyDown: ft(c.onKeyDown, (A) => {
            var z;
            (((z = m.searchRef) == null ? void 0 : z.current) !== '' && A.key === ' ') ||
              (mj.includes(A.key) && R(), A.key === ' ' && A.preventDefault());
          }),
        }),
      }),
    });
  });
Zw.displayName = vc;
var ts = 'SelectItemText',
  Jw = b.forwardRef((t, a) => {
    const {__scopeSelect: r, className: l, style: s, ...u} = t,
      c = Wr(ts, r),
      d = ei(ts, r),
      m = Iw(ts, r),
      h = vj(ts, r),
      [y, g] = b.useState(null),
      S = wt(
        a,
        (R) => g(R),
        m.onItemTextChange,
        (R) => {
          var A;
          return (A = d.itemTextRefCallback) == null ? void 0 : A.call(d, R, m.value, m.disabled);
        },
      ),
      x = y == null ? void 0 : y.textContent,
      C = b.useMemo(
        () => j.jsx('option', {value: m.value, disabled: m.disabled, children: x}, m.value),
        [m.disabled, m.value, x],
      ),
      {onNativeOptionAdd: w, onNativeOptionRemove: T} = h;
    return (
      ln(() => (w(C), () => T(C)), [w, T, C]),
      j.jsxs(j.Fragment, {
        children: [
          j.jsx(dt.span, {id: m.textId, ...u, ref: S}),
          m.isSelected && c.valueNode && !c.valueNodeHasChildren ? Kl.createPortal(u.children, c.valueNode) : null,
        ],
      })
    );
  });
Jw.displayName = ts;
var Ww = 'SelectItemIndicator',
  e1 = b.forwardRef((t, a) => {
    const {__scopeSelect: r, ...l} = t;
    return Iw(Ww, r).isSelected ? j.jsx(dt.span, {'aria-hidden': !0, ...l, ref: a}) : null;
  });
e1.displayName = Ww;
var am = 'SelectScrollUpButton',
  t1 = b.forwardRef((t, a) => {
    const r = ei(am, t.__scopeSelect),
      l = Bm(am, t.__scopeSelect),
      [s, u] = b.useState(!1),
      c = wt(a, l.onScrollButtonChange);
    return (
      ln(() => {
        if (r.viewport && r.isPositioned) {
          let d = function () {
            const h = m.scrollTop > 0;
            u(h);
          };
          const m = r.viewport;
          return (d(), m.addEventListener('scroll', d), () => m.removeEventListener('scroll', d));
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? j.jsx(a1, {
            ...t,
            ref: c,
            onAutoScroll: () => {
              const {viewport: d, selectedItem: m} = r;
              d && m && (d.scrollTop = d.scrollTop - m.offsetHeight);
            },
          })
        : null
    );
  });
t1.displayName = am;
var rm = 'SelectScrollDownButton',
  n1 = b.forwardRef((t, a) => {
    const r = ei(rm, t.__scopeSelect),
      l = Bm(rm, t.__scopeSelect),
      [s, u] = b.useState(!1),
      c = wt(a, l.onScrollButtonChange);
    return (
      ln(() => {
        if (r.viewport && r.isPositioned) {
          let d = function () {
            const h = m.scrollHeight - m.clientHeight,
              y = Math.ceil(m.scrollTop) < h;
            u(y);
          };
          const m = r.viewport;
          return (d(), m.addEventListener('scroll', d), () => m.removeEventListener('scroll', d));
        }
      }, [r.viewport, r.isPositioned]),
      s
        ? j.jsx(a1, {
            ...t,
            ref: c,
            onAutoScroll: () => {
              const {viewport: d, selectedItem: m} = r;
              d && m && (d.scrollTop = d.scrollTop + m.offsetHeight);
            },
          })
        : null
    );
  });
n1.displayName = rm;
var a1 = b.forwardRef((t, a) => {
    const {__scopeSelect: r, onAutoScroll: l, ...s} = t,
      u = ei('SelectScrollButton', r),
      c = b.useRef(null),
      d = Hc(r),
      m = b.useCallback(() => {
        c.current !== null && (window.clearInterval(c.current), (c.current = null));
      }, []);
    return (
      b.useEffect(() => () => m(), [m]),
      ln(() => {
        var y;
        const h = d().find((g) => g.ref.current === document.activeElement);
        (y = h == null ? void 0 : h.ref.current) == null || y.scrollIntoView({block: 'nearest'});
      }, [d]),
      j.jsx(dt.div, {
        'aria-hidden': !0,
        ...s,
        ref: a,
        style: {flexShrink: 0, ...s.style},
        onPointerDown: ft(s.onPointerDown, () => {
          c.current === null && (c.current = window.setInterval(l, 50));
        }),
        onPointerMove: ft(s.onPointerMove, () => {
          var h;
          ((h = u.onItemLeave) == null || h.call(u), c.current === null && (c.current = window.setInterval(l, 50)));
        }),
        onPointerLeave: ft(s.onPointerLeave, () => {
          m();
        }),
      })
    );
  }),
  Mj = 'SelectSeparator',
  r1 = b.forwardRef((t, a) => {
    const {__scopeSelect: r, ...l} = t;
    return j.jsx(dt.div, {'aria-hidden': !0, ...l, ref: a});
  });
r1.displayName = Mj;
var im = 'SelectArrow',
  Nj = b.forwardRef((t, a) => {
    const {__scopeSelect: r, ...l} = t,
      s = Bc(r),
      u = Wr(im, r),
      c = ei(im, r);
    return u.open && c.position === 'popper' ? j.jsx(aj, {...s, ...l, ref: a}) : null;
  });
Nj.displayName = im;
var _j = 'SelectBubbleInput',
  i1 = b.forwardRef(({__scopeSelect: t, value: a, ...r}, l) => {
    const s = b.useRef(null),
      u = wt(l, s),
      c = cj(a);
    return (
      b.useEffect(() => {
        const d = s.current;
        if (!d) return;
        const m = window.HTMLSelectElement.prototype,
          y = Object.getOwnPropertyDescriptor(m, 'value').set;
        if (c !== a && y) {
          const g = new Event('change', {bubbles: !0});
          (y.call(d, a), d.dispatchEvent(g));
        }
      }, [c, a]),
      j.jsx(dt.select, {...r, style: {...jw, ...r.style}, ref: u, defaultValue: a})
    );
  });
i1.displayName = _j;
function l1(t) {
  return t === '' || t === void 0;
}
function o1(t) {
  const a = ji(t),
    r = b.useRef(''),
    l = b.useRef(0),
    s = b.useCallback(
      (c) => {
        const d = r.current + c;
        (a(d),
          (function m(h) {
            ((r.current = h),
              window.clearTimeout(l.current),
              h !== '' && (l.current = window.setTimeout(() => m(''), 1e3)));
          })(d));
      },
      [a],
    ),
    u = b.useCallback(() => {
      ((r.current = ''), window.clearTimeout(l.current));
    }, []);
  return (b.useEffect(() => () => window.clearTimeout(l.current), []), [r, s, u]);
}
function s1(t, a, r) {
  const s = a.length > 1 && Array.from(a).every((h) => h === a[0]) ? a[0] : a,
    u = r ? t.indexOf(r) : -1;
  let c = Lj(t, Math.max(u, 0));
  s.length === 1 && (c = c.filter((h) => h !== r));
  const m = c.find((h) => h.textValue.toLowerCase().startsWith(s.toLowerCase()));
  return m !== r ? m : void 0;
}
function Lj(t, a) {
  return t.map((r, l) => t[(a + l) % t.length]);
}
var jj = zw,
  u1 = Hw,
  zj = kw,
  Uj = Pw,
  Hj = Vw,
  c1 = qw,
  Bj = Gw,
  f1 = Qw,
  d1 = Zw,
  kj = Jw,
  Pj = e1,
  h1 = t1,
  m1 = n1,
  p1 = r1;
const Vj = jj,
  qj = zj,
  g1 = b.forwardRef(({className: t, children: a, ...r}, l) =>
    j.jsxs(u1, {
      ref: l,
      className: Wt(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        t,
      ),
      ...r,
      children: [a, j.jsx(Uj, {asChild: !0, children: j.jsx(GS, {className: 'h-4 w-4 opacity-50'})})],
    }),
  );
g1.displayName = u1.displayName;
const y1 = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(h1, {
    ref: r,
    className: Wt('flex cursor-default items-center justify-center py-1', t),
    ...a,
    children: j.jsx(tD, {className: 'h-4 w-4'}),
  }),
);
y1.displayName = h1.displayName;
const v1 = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(m1, {
    ref: r,
    className: Wt('flex cursor-default items-center justify-center py-1', t),
    ...a,
    children: j.jsx(GS, {className: 'h-4 w-4'}),
  }),
);
v1.displayName = m1.displayName;
const b1 = b.forwardRef(({className: t, children: a, position: r = 'popper', ...l}, s) =>
  j.jsx(Hj, {
    children: j.jsxs(c1, {
      ref: s,
      className: Wt(
        'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
        r === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        t,
      ),
      position: r,
      ...l,
      children: [
        j.jsx(y1, {}),
        j.jsx(Bj, {
          className: Wt(
            'p-1',
            r === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          ),
          children: a,
        }),
        j.jsx(v1, {}),
      ],
    }),
  }),
);
b1.displayName = c1.displayName;
const Yj = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(f1, {ref: r, className: Wt('py-1.5 pl-8 pr-2 text-sm font-semibold', t), ...a}),
);
Yj.displayName = f1.displayName;
const S1 = b.forwardRef(({className: t, children: a, ...r}, l) =>
  j.jsxs(d1, {
    ref: l,
    className: Wt(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      t,
    ),
    ...r,
    children: [
      j.jsx('span', {
        className: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: j.jsx(Pj, {children: j.jsx(J2, {className: 'h-4 w-4'})}),
      }),
      j.jsx(kj, {children: a}),
    ],
  }),
);
S1.displayName = d1.displayName;
const $j = b.forwardRef(({className: t, ...a}, r) =>
  j.jsx(p1, {ref: r, className: Wt('-mx-1 my-1 h-px bg-muted', t), ...a}),
);
$j.displayName = p1.displayName;
const Fj = ['en', 'zh'];
function Gj() {
  const {t} = Xl(),
    {locale: a} = hm(),
    r = Ss(),
    l = cr(),
    [s, u] = b.useState(!1),
    c = (d) => {
      u(!0);
      const m = l.pathname.replace(/^\/[^/]+/, `/${d}`);
      (r(m),
        setTimeout(() => {
          u(!1);
        }, 100));
    };
  return j.jsxs(Vj, {
    disabled: s,
    value: a || 'en',
    onValueChange: c,
    children: [
      j.jsxs(g1, {className: 'w-[180px]', children: [j.jsx(oD, {className: 'mr-2 h-4 w-4'}), j.jsx(qj, {})]}),
      j.jsx(b1, {
        children: Fj.map((d) => j.jsx(S1, {value: d, children: t(`components.footer.localeSelect.languages.${d}`)}, d)),
      }),
    ],
  });
}
function Kj() {
  const {t} = Xl(),
    a = [
      {
        label: t('components.footer.groups.company'),
        items: [
          {label: t('components.footer.links.aboutUs'), href: '/about'},
          {label: t('components.footer.links.contact'), href: '/contact'},
        ],
      },
      {
        label: t('components.footer.groups.legal'),
        items: [
          {label: t('components.footer.links.imprint'), href: '/imprint'},
          {label: t('components.footer.links.privacyPolicy'), href: '/privacy'},
          {label: t('components.footer.links.termsOfService'), href: '/terms'},
        ],
      },
    ];
  return j.jsx('footer', {
    className: 'px-2 md:px-4 py-4 bg-gray-200 text-gray-700 max-w-full',
    children: j.jsxs('div', {
      className: 'mx-auto max-w-7xl text-center divide-y-1 divide-gray-300',
      children: [
        j.jsx('nav', {
          className: 'mb-4 pb-4',
          children: j.jsx('ul', {
            className: 'flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16',
            children: a.map((r) =>
              j.jsxs(
                'li',
                {
                  className: 'mb-2 text-sm',
                  children: [
                    j.jsx('p', {className: 'tracking-widest text-gray-400 mb-1', children: r.label}),
                    j.jsx('ul', {
                      children: r.items.map((l) =>
                        j.jsx(
                          'li',
                          {
                            children: j.jsx(Tc, {
                              to: l.href,
                              className: 'text-gray-600 hover:text-gray-800 transition-colors duration-200',
                              children: l.label,
                            }),
                          },
                          l.label,
                        ),
                      ),
                    }),
                  ],
                },
                r.label,
              ),
            ),
          }),
        }),
        j.jsxs('div', {
          className: 'flex flex-col items-center gap-4 w-full',
          children: [
            j.jsx('div', {className: 'flex justify-end w-full', children: j.jsx(Gj, {})}),
            j.jsxs('p', {
              className: 'text-sm text-gray-400',
              children: ['© ', new Date().getFullYear(), ' ', t('components.footer.copyrightNotice')],
            }),
          ],
        }),
      ],
    }),
  });
}
const N0 = (t) => {
    let a;
    const r = new Set(),
      l = (h, y) => {
        const g = typeof h == 'function' ? h(a) : h;
        if (!Object.is(g, a)) {
          const S = a;
          ((a = (y ?? (typeof g != 'object' || g === null)) ? g : Object.assign({}, a, g)), r.forEach((x) => x(a, S)));
        }
      },
      s = () => a,
      d = {setState: l, getState: s, getInitialState: () => m, subscribe: (h) => (r.add(h), () => r.delete(h))},
      m = (a = t(l, s, d));
    return d;
  },
  Xj = (t) => (t ? N0(t) : N0),
  Qj = (t) => t;
function Ij(t, a = Qj) {
  const r = oe.useSyncExternalStore(
    t.subscribe,
    oe.useCallback(() => a(t.getState()), [t, a]),
    oe.useCallback(() => a(t.getInitialState()), [t, a]),
  );
  return (oe.useDebugValue(r), r);
}
const _0 = (t) => {
    const a = Xj(t),
      r = (l) => Ij(a, l);
    return (Object.assign(r, a), r);
  },
  Zj = (t) => (t ? _0(t) : _0),
  Jj = Zj((t) => ({
    isLoading: !1,
    setIsLoading(a) {
      t({isLoading: a});
    },
  }));
function Wj() {
  const {isLoading: t} = Jj();
  if (t)
    return j.jsx('div', {
      className: 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-gray-800/10',
      children: j.jsx(KS, {className: 'h-16 w-16 animate-spin text-primary'}),
    });
}
function ez() {
  return j.jsx(BS, {
    children: j.jsxs(IR, {
      i18n: on,
      children: [
        j.jsx(VA, {}),
        j.jsx(C_, {
          children: j.jsx(gD, {
            children: j.jsx(x_, {
              children: j.jsxs(v2, {
                children: [
                  j.jsx(Wj, {}),
                  j.jsx(T_, {}),
                  j.jsx('main', {
                    className: 'mx-auto my-6 flex w-full max-w-7xl flex-col px-2 md:my-8 md:px-4 lg:my-12 min-h-screen',
                    children: j.jsx(RO, {}),
                  }),
                  j.jsx(Kj, {}),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function tz() {
  const {t} = Xl(),
    {locale: a} = hm();
  return j.jsxs(j.Fragment, {
    children: [
      j.jsxs(kA, {
        children: [
          j.jsx('title', {children: 'Vite Frontend'}),
          j.jsx('meta', {name: 'description', content: 'Frontend powered by Vite'}),
          j.jsx('html', {lang: a || 'en'}),
        ],
      }),
      j.jsx('h2', {children: t('pages.home.title')}),
    ],
  });
}
function nz() {
  const t = mS(),
    a = Ss();
  return j.jsxs('div', {
    children: [
      j.jsx('h2', {children: 'Something went wrong!'}),
      j.jsx('p', {children: (t == null ? void 0 : t.message) || 'An unexpected error occurred'}),
      j.jsx('button', {
        type: 'button',
        onClick: () => {
          a(-1);
        },
        children: 'Go back',
      }),
    ],
  });
}
function az() {
  return j.jsxs('div', {
    children: [
      j.jsx('h2', {children: '404 - Page Not Found'}),
      j.jsx('p', {children: 'The page you are looking for does not exist.'}),
      j.jsx(Tc, {to: '/en', children: 'Go to Home'}),
    ],
  });
}
const rz = JO([
  {path: '/', element: j.jsx(OO, {to: '/en', replace: !0})},
  {
    path: '/:locale',
    element: j.jsx(ez, {}),
    errorElement: j.jsx(nz, {}),
    children: [{index: !0, element: j.jsx(tz, {})}],
  },
  {path: '*', element: j.jsx(az, {})},
]);
BC.createRoot(document.getElementById('root')).render(j.jsx(b.StrictMode, {children: j.jsx(cR, {router: rz})}));
export {lz as c, gs as g};
