(function ($e, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], e)
    : (($e = typeof globalThis < "u" ? globalThis : $e || self),
      e(($e.ZeroCode = {}), $e.Vue));
})(this, function ($e, e) {
  "use strict";
  var Pd = Object.defineProperty;
  var Sd = ($e, e, tt) =>
    e in $e
      ? Pd($e, e, { enumerable: !0, configurable: !0, writable: !0, value: tt })
      : ($e[e] = tt);
  var zt = ($e, e, tt) => Sd($e, typeof e != "symbol" ? e + "" : e, tt);
  var tt = Object.defineProperty,
    vt = Object.getOwnPropertySymbols,
    go = Object.prototype.hasOwnProperty,
    ho = Object.prototype.propertyIsEnumerable,
    yo = (t, r, o) =>
      r in t
        ? tt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
        : (t[r] = o),
    ot = (t, r) => {
      for (var o in r || (r = {})) go.call(r, o) && yo(t, o, r[o]);
      if (vt) for (var o of vt(r)) ho.call(r, o) && yo(t, o, r[o]);
      return t;
    },
    bo = (t, r) => {
      var o = {};
      for (var n in t) go.call(t, n) && r.indexOf(n) < 0 && (o[n] = t[n]);
      if (t != null && vt)
        for (var n of vt(t)) r.indexOf(n) < 0 && ho.call(t, n) && (o[n] = t[n]);
      return o;
    };
  const _d = "[vue-draggable-plus]: ";
  function Id(t) {}
  function Dd(t) {}
  function Eo(t, r, o) {
    return o >= 0 && o < t.length && t.splice(o, 0, t.splice(r, 1)[0]), t;
  }
  function mr(t) {
    return t.replace(/-(\w)/g, (r, o) => (o ? o.toUpperCase() : ""));
  }
  function fr(t) {
    return Object.keys(t).reduce(
      (r, o) => (typeof t[o] < "u" && (r[mr(o)] = t[o]), r),
      {}
    );
  }
  function $o(t, r) {
    return Array.isArray(t) && t.splice(r, 1), t;
  }
  function wo(t, r, o) {
    return Array.isArray(t) && t.splice(r, 0, o), t;
  }
  function gr(t) {
    return typeof t > "u";
  }
  function hr(t) {
    return typeof t == "string";
  }
  function zo(t, r, o) {
    const n = t.children[o];
    t.insertBefore(r, n);
  }
  function Zt(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function yr(t, r = document) {
    var o;
    let n = null;
    return (
      typeof (r == null ? void 0 : r.querySelector) == "function"
        ? (n =
            (o = r == null ? void 0 : r.querySelector) == null
              ? void 0
              : o.call(r, t))
        : (n = document.querySelector(t)),
      n || (`${t}`, void 0),
      n
    );
  }
  function br(t, r, o = null) {
    return function (...n) {
      return t.apply(o, n), r.apply(o, n);
    };
  }
  function Er(t, r) {
    const o = ot({}, t);
    return (
      Object.keys(r).forEach((n) => {
        o[n] ? (o[n] = br(t[n], r[n])) : (o[n] = r[n]);
      }),
      o
    );
  }
  function $r(t) {
    return t instanceof HTMLElement;
  }
  function vo(t, r) {
    Object.keys(t).forEach((o) => {
      r(o, t[o]);
    });
  }
  function wr(t) {
    return (
      t.charCodeAt(0) === 111 &&
      t.charCodeAt(1) === 110 &&
      (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97)
    );
  }
  const zr = Object.assign;
  /**!
   * Sortable 1.15.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   */ function No(t, r) {
    var o = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r &&
        (n = n.filter(function (a) {
          return Object.getOwnPropertyDescriptor(t, a).enumerable;
        })),
        o.push.apply(o, n);
    }
    return o;
  }
  function Te(t) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r] != null ? arguments[r] : {};
      r % 2
        ? No(Object(o), !0).forEach(function (n) {
            vr(t, n, o[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
        : No(Object(o)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
          });
    }
    return t;
  }
  function Nt(t) {
    "@babel/helpers - typeof";
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (Nt = function (r) {
            return typeof r;
          })
        : (Nt = function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
      Nt(t)
    );
  }
  function vr(t, r, o) {
    return (
      r in t
        ? Object.defineProperty(t, r, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[r] = o),
      t
    );
  }
  function Fe() {
    return (
      (Fe =
        Object.assign ||
        function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var n in o)
              Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
      Fe.apply(this, arguments)
    );
  }
  function Nr(t, r) {
    if (t == null) return {};
    var o = {},
      n = Object.keys(t),
      a,
      g;
    for (g = 0; g < n.length; g++)
      (a = n[g]), !(r.indexOf(a) >= 0) && (o[a] = t[a]);
    return o;
  }
  function Cr(t, r) {
    if (t == null) return {};
    var o = Nr(t, r),
      n,
      a;
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(t);
      for (a = 0; a < g.length; a++)
        (n = g[a]),
          !(r.indexOf(n) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(t, n) &&
            (o[n] = t[n]);
    }
    return o;
  }
  var kr = "1.15.2";
  function Oe(t) {
    if (typeof window < "u" && window.navigator)
      return !!navigator.userAgent.match(t);
  }
  var Le = Oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    dt = Oe(/Edge/i),
    Co = Oe(/firefox/i),
    ct = Oe(/safari/i) && !Oe(/chrome/i) && !Oe(/android/i),
    ko = Oe(/iP(ad|od|hone)/i),
    Ao = Oe(/chrome/i) && Oe(/android/i),
    Po = { capture: !1, passive: !1 };
  function G(t, r, o) {
    t.addEventListener(r, o, !Le && Po);
  }
  function K(t, r, o) {
    t.removeEventListener(r, o, !Le && Po);
  }
  function Ct(t, r) {
    if (r) {
      if ((r[0] === ">" && (r = r.substring(1)), t))
        try {
          if (t.matches) return t.matches(r);
          if (t.msMatchesSelector) return t.msMatchesSelector(r);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(r);
        } catch {
          return !1;
        }
      return !1;
    }
  }
  function Ar(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
  }
  function Se(t, r, o, n) {
    if (t) {
      o = o || document;
      do {
        if (
          (r != null &&
            (r[0] === ">" ? t.parentNode === o && Ct(t, r) : Ct(t, r))) ||
          (n && t === o)
        )
          return t;
        if (t === o) break;
      } while ((t = Ar(t)));
    }
    return null;
  }
  var So = /\s+/g;
  function ve(t, r, o) {
    if (t && r)
      if (t.classList) t.classList[o ? "add" : "remove"](r);
      else {
        var n = (" " + t.className + " ")
          .replace(So, " ")
          .replace(" " + r + " ", " ");
        t.className = (n + (o ? " " + r : "")).replace(So, " ");
      }
  }
  function Z(t, r, o) {
    var n = t && t.style;
    if (n) {
      if (o === void 0)
        return (
          document.defaultView && document.defaultView.getComputedStyle
            ? (o = document.defaultView.getComputedStyle(t, ""))
            : t.currentStyle && (o = t.currentStyle),
          r === void 0 ? o : o[r]
        );
      !(r in n) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r),
        (n[r] = o + (typeof o == "string" ? "" : "px"));
    }
  }
  function rt(t, r) {
    var o = "";
    if (typeof t == "string") o = t;
    else
      do {
        var n = Z(t, "transform");
        n && n !== "none" && (o = n + " " + o);
      } while (!r && (t = t.parentNode));
    var a =
      window.DOMMatrix ||
      window.WebKitCSSMatrix ||
      window.CSSMatrix ||
      window.MSCSSMatrix;
    return a && new a(o);
  }
  function _o(t, r, o) {
    if (t) {
      var n = t.getElementsByTagName(r),
        a = 0,
        g = n.length;
      if (o) for (; a < g; a++) o(n[a], a);
      return n;
    }
    return [];
  }
  function Ve() {
    var t = document.scrollingElement;
    return t || document.documentElement;
  }
  function ce(t, r, o, n, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
      var g, y, d, h, C, v, w;
      if (
        (t !== window && t.parentNode && t !== Ve()
          ? ((g = t.getBoundingClientRect()),
            (y = g.top),
            (d = g.left),
            (h = g.bottom),
            (C = g.right),
            (v = g.height),
            (w = g.width))
          : ((y = 0),
            (d = 0),
            (h = window.innerHeight),
            (C = window.innerWidth),
            (v = window.innerHeight),
            (w = window.innerWidth)),
        (r || o) && t !== window && ((a = a || t.parentNode), !Le))
      )
        do
          if (
            a &&
            a.getBoundingClientRect &&
            (Z(a, "transform") !== "none" ||
              (o && Z(a, "position") !== "static"))
          ) {
            var N = a.getBoundingClientRect();
            (y -= N.top + parseInt(Z(a, "border-top-width"))),
              (d -= N.left + parseInt(Z(a, "border-left-width"))),
              (h = y + g.height),
              (C = d + g.width);
            break;
          }
        while ((a = a.parentNode));
      if (n && t !== window) {
        var E = rt(a || t),
          c = E && E.a,
          l = E && E.d;
        E && ((y /= l), (d /= c), (w /= c), (v /= l), (h = y + v), (C = d + w));
      }
      return { top: y, left: d, bottom: h, right: C, width: w, height: v };
    }
  }
  function Io(t, r, o) {
    for (var n = je(t, !0), a = ce(t)[r]; n; ) {
      var g = ce(n)[o],
        y = void 0;
      if (((y = a >= g), !y)) return n;
      if (n === Ve()) break;
      n = je(n, !1);
    }
    return !1;
  }
  function nt(t, r, o, n) {
    for (var a = 0, g = 0, y = t.children; g < y.length; ) {
      if (
        y[g].style.display !== "none" &&
        y[g] !== j.ghost &&
        (n || y[g] !== j.dragged) &&
        Se(y[g], o.draggable, t, !1)
      ) {
        if (a === r) return y[g];
        a++;
      }
      g++;
    }
    return null;
  }
  function jt(t, r) {
    for (
      var o = t.lastElementChild;
      o && (o === j.ghost || Z(o, "display") === "none" || (r && !Ct(o, r)));

    )
      o = o.previousElementSibling;
    return o || null;
  }
  function ke(t, r) {
    var o = 0;
    if (!t || !t.parentNode) return -1;
    for (; (t = t.previousElementSibling); )
      t.nodeName.toUpperCase() !== "TEMPLATE" &&
        t !== j.clone &&
        (!r || Ct(t, r)) &&
        o++;
    return o;
  }
  function Do(t) {
    var r = 0,
      o = 0,
      n = Ve();
    if (t)
      do {
        var a = rt(t),
          g = a.a,
          y = a.d;
        (r += t.scrollLeft * g), (o += t.scrollTop * y);
      } while (t !== n && (t = t.parentNode));
    return [r, o];
  }
  function Pr(t, r) {
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        for (var n in r)
          if (r.hasOwnProperty(n) && r[n] === t[o][n]) return Number(o);
      }
    return -1;
  }
  function je(t, r) {
    if (!t || !t.getBoundingClientRect) return Ve();
    var o = t,
      n = !1;
    do
      if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
        var a = Z(o);
        if (
          (o.clientWidth < o.scrollWidth &&
            (a.overflowX == "auto" || a.overflowX == "scroll")) ||
          (o.clientHeight < o.scrollHeight &&
            (a.overflowY == "auto" || a.overflowY == "scroll"))
        ) {
          if (!o.getBoundingClientRect || o === document.body) return Ve();
          if (n || r) return o;
          n = !0;
        }
      }
    while ((o = o.parentNode));
    return Ve();
  }
  function Sr(t, r) {
    if (t && r) for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o]);
    return t;
  }
  function Ut(t, r) {
    return (
      Math.round(t.top) === Math.round(r.top) &&
      Math.round(t.left) === Math.round(r.left) &&
      Math.round(t.height) === Math.round(r.height) &&
      Math.round(t.width) === Math.round(r.width)
    );
  }
  var pt;
  function To(t, r) {
    return function () {
      if (!pt) {
        var o = arguments,
          n = this;
        o.length === 1 ? t.call(n, o[0]) : t.apply(n, o),
          (pt = setTimeout(function () {
            pt = void 0;
          }, r));
      }
    };
  }
  function _r() {
    clearTimeout(pt), (pt = void 0);
  }
  function Vo(t, r, o) {
    (t.scrollLeft += r), (t.scrollTop += o);
  }
  function Bo(t) {
    var r = window.Polymer,
      o = window.jQuery || window.Zepto;
    return r && r.dom
      ? r.dom(t).cloneNode(!0)
      : o
      ? o(t).clone(!0)[0]
      : t.cloneNode(!0);
  }
  function Mo(t, r, o) {
    var n = {};
    return (
      Array.from(t.children).forEach(function (a) {
        var g, y, d, h;
        if (!(!Se(a, r.draggable, t, !1) || a.animated || a === o)) {
          var C = ce(a);
          (n.left = Math.min(
            (g = n.left) !== null && g !== void 0 ? g : 1 / 0,
            C.left
          )),
            (n.top = Math.min(
              (y = n.top) !== null && y !== void 0 ? y : 1 / 0,
              C.top
            )),
            (n.right = Math.max(
              (d = n.right) !== null && d !== void 0 ? d : -1 / 0,
              C.right
            )),
            (n.bottom = Math.max(
              (h = n.bottom) !== null && h !== void 0 ? h : -1 / 0,
              C.bottom
            ));
        }
      }),
      (n.width = n.right - n.left),
      (n.height = n.bottom - n.top),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  var Ne = "Sortable" + new Date().getTime();
  function Ir() {
    var t = [],
      r;
    return {
      captureAnimationState: function () {
        if (((t = []), !!this.options.animation)) {
          var o = [].slice.call(this.el.children);
          o.forEach(function (n) {
            if (!(Z(n, "display") === "none" || n === j.ghost)) {
              t.push({ target: n, rect: ce(n) });
              var a = Te({}, t[t.length - 1].rect);
              if (n.thisAnimationDuration) {
                var g = rt(n, !0);
                g && ((a.top -= g.f), (a.left -= g.e));
              }
              n.fromRect = a;
            }
          });
        }
      },
      addAnimationState: function (o) {
        t.push(o);
      },
      removeAnimationState: function (o) {
        t.splice(Pr(t, { target: o }), 1);
      },
      animateAll: function (o) {
        var n = this;
        if (!this.options.animation) {
          clearTimeout(r), typeof o == "function" && o();
          return;
        }
        var a = !1,
          g = 0;
        t.forEach(function (y) {
          var d = 0,
            h = y.target,
            C = h.fromRect,
            v = ce(h),
            w = h.prevFromRect,
            N = h.prevToRect,
            E = y.rect,
            c = rt(h, !0);
          c && ((v.top -= c.f), (v.left -= c.e)),
            (h.toRect = v),
            h.thisAnimationDuration &&
              Ut(w, v) &&
              !Ut(C, v) &&
              (E.top - v.top) / (E.left - v.left) ===
                (C.top - v.top) / (C.left - v.left) &&
              (d = Tr(E, w, N, n.options)),
            Ut(v, C) ||
              ((h.prevFromRect = C),
              (h.prevToRect = v),
              d || (d = n.options.animation),
              n.animate(h, E, v, d)),
            d &&
              ((a = !0),
              (g = Math.max(g, d)),
              clearTimeout(h.animationResetTimer),
              (h.animationResetTimer = setTimeout(function () {
                (h.animationTime = 0),
                  (h.prevFromRect = null),
                  (h.fromRect = null),
                  (h.prevToRect = null),
                  (h.thisAnimationDuration = null);
              }, d)),
              (h.thisAnimationDuration = d));
        }),
          clearTimeout(r),
          a
            ? (r = setTimeout(function () {
                typeof o == "function" && o();
              }, g))
            : typeof o == "function" && o(),
          (t = []);
      },
      animate: function (o, n, a, g) {
        if (g) {
          Z(o, "transition", ""), Z(o, "transform", "");
          var y = rt(this.el),
            d = y && y.a,
            h = y && y.d,
            C = (n.left - a.left) / (d || 1),
            v = (n.top - a.top) / (h || 1);
          (o.animatingX = !!C),
            (o.animatingY = !!v),
            Z(o, "transform", "translate3d(" + C + "px," + v + "px,0)"),
            (this.forRepaintDummy = Dr(o)),
            Z(
              o,
              "transition",
              "transform " +
                g +
                "ms" +
                (this.options.easing ? " " + this.options.easing : "")
            ),
            Z(o, "transform", "translate3d(0,0,0)"),
            typeof o.animated == "number" && clearTimeout(o.animated),
            (o.animated = setTimeout(function () {
              Z(o, "transition", ""),
                Z(o, "transform", ""),
                (o.animated = !1),
                (o.animatingX = !1),
                (o.animatingY = !1);
            }, g));
        }
      },
    };
  }
  function Dr(t) {
    return t.offsetWidth;
  }
  function Tr(t, r, o, n) {
    return (
      (Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) /
        Math.sqrt(Math.pow(r.top - o.top, 2) + Math.pow(r.left - o.left, 2))) *
      n.animation
    );
  }
  var at = [],
    Wt = { initializeByDefault: !0 },
    ut = {
      mount: function (t) {
        for (var r in Wt) Wt.hasOwnProperty(r) && !(r in t) && (t[r] = Wt[r]);
        at.forEach(function (o) {
          if (o.pluginName === t.pluginName)
            throw "Sortable: Cannot mount plugin ".concat(
              t.pluginName,
              " more than once"
            );
        }),
          at.push(t);
      },
      pluginEvent: function (t, r, o) {
        var n = this;
        (this.eventCanceled = !1),
          (o.cancel = function () {
            n.eventCanceled = !0;
          });
        var a = t + "Global";
        at.forEach(function (g) {
          r[g.pluginName] &&
            (r[g.pluginName][a] && r[g.pluginName][a](Te({ sortable: r }, o)),
            r.options[g.pluginName] &&
              r[g.pluginName][t] &&
              r[g.pluginName][t](Te({ sortable: r }, o)));
        });
      },
      initializePlugins: function (t, r, o, n) {
        at.forEach(function (y) {
          var d = y.pluginName;
          if (!(!t.options[d] && !y.initializeByDefault)) {
            var h = new y(t, r, t.options);
            (h.sortable = t),
              (h.options = t.options),
              (t[d] = h),
              Fe(o, h.defaults);
          }
        });
        for (var a in t.options)
          if (t.options.hasOwnProperty(a)) {
            var g = this.modifyOption(t, a, t.options[a]);
            typeof g < "u" && (t.options[a] = g);
          }
      },
      getEventProperties: function (t, r) {
        var o = {};
        return (
          at.forEach(function (n) {
            typeof n.eventProperties == "function" &&
              Fe(o, n.eventProperties.call(r[n.pluginName], t));
          }),
          o
        );
      },
      modifyOption: function (t, r, o) {
        var n;
        return (
          at.forEach(function (a) {
            t[a.pluginName] &&
              a.optionListeners &&
              typeof a.optionListeners[r] == "function" &&
              (n = a.optionListeners[r].call(t[a.pluginName], o));
          }),
          n
        );
      },
    };
  function Vr(t) {
    var r = t.sortable,
      o = t.rootEl,
      n = t.name,
      a = t.targetEl,
      g = t.cloneEl,
      y = t.toEl,
      d = t.fromEl,
      h = t.oldIndex,
      C = t.newIndex,
      v = t.oldDraggableIndex,
      w = t.newDraggableIndex,
      N = t.originalEvent,
      E = t.putSortable,
      c = t.extraEventProperties;
    if (((r = r || (o && o[Ne])), !!r)) {
      var l,
        f = r.options,
        s = "on" + n.charAt(0).toUpperCase() + n.substr(1);
      window.CustomEvent && !Le && !dt
        ? (l = new CustomEvent(n, { bubbles: !0, cancelable: !0 }))
        : ((l = document.createEvent("Event")), l.initEvent(n, !0, !0)),
        (l.to = y || o),
        (l.from = d || o),
        (l.item = a || o),
        (l.clone = g),
        (l.oldIndex = h),
        (l.newIndex = C),
        (l.oldDraggableIndex = v),
        (l.newDraggableIndex = w),
        (l.originalEvent = N),
        (l.pullMode = E ? E.lastPutMode : void 0);
      var i = Te(Te({}, c), ut.getEventProperties(n, r));
      for (var p in i) l[p] = i[p];
      o && o.dispatchEvent(l), f[s] && f[s].call(r, l);
    }
  }
  var Br = ["evt"],
    we = function (t, r) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        n = o.evt,
        a = Cr(o, Br);
      ut.pluginEvent.bind(j)(
        t,
        r,
        Te(
          {
            dragEl: B,
            parentEl: ie,
            ghostEl: U,
            rootEl: ne,
            nextEl: Ye,
            lastDownEl: kt,
            cloneEl: ae,
            cloneHidden: Ue,
            dragStarted: ft,
            putSortable: ye,
            activeSortable: j.active,
            originalEvent: n,
            oldIndex: st,
            oldDraggableIndex: mt,
            newIndex: Ce,
            newDraggableIndex: We,
            hideGhostForTarget: Zo,
            unhideGhostForTarget: jo,
            cloneNowHidden: function () {
              Ue = !0;
            },
            cloneNowShown: function () {
              Ue = !1;
            },
            dispatchSortableEvent: function (g) {
              Ee({ sortable: r, name: g, originalEvent: n });
            },
          },
          a
        )
      );
    };
  function Ee(t) {
    Vr(
      Te(
        {
          putSortable: ye,
          cloneEl: ae,
          targetEl: B,
          rootEl: ne,
          oldIndex: st,
          oldDraggableIndex: mt,
          newIndex: Ce,
          newDraggableIndex: We,
        },
        t
      )
    );
  }
  var B,
    ie,
    U,
    ne,
    Ye,
    kt,
    ae,
    Ue,
    st,
    Ce,
    mt,
    We,
    At,
    ye,
    lt = !1,
    Pt = !1,
    St = [],
    Ke,
    _e,
    Xt,
    Yt,
    Fo,
    Oo,
    ft,
    it,
    gt,
    ht = !1,
    _t = !1,
    It,
    be,
    Kt = [],
    Jt = !1,
    Dt = [],
    Tt = typeof document < "u",
    Vt = ko,
    Lo = dt || Le ? "cssFloat" : "float",
    Mr = Tt && !Ao && !ko && "draggable" in document.createElement("div"),
    xo = (function () {
      if (Tt) {
        if (Le) return !1;
        var t = document.createElement("x");
        return (
          (t.style.cssText = "pointer-events:auto"),
          t.style.pointerEvents === "auto"
        );
      }
    })(),
    Ro = function (t, r) {
      var o = Z(t),
        n =
          parseInt(o.width) -
          parseInt(o.paddingLeft) -
          parseInt(o.paddingRight) -
          parseInt(o.borderLeftWidth) -
          parseInt(o.borderRightWidth),
        a = nt(t, 0, r),
        g = nt(t, 1, r),
        y = a && Z(a),
        d = g && Z(g),
        h = y && parseInt(y.marginLeft) + parseInt(y.marginRight) + ce(a).width,
        C = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + ce(g).width;
      if (o.display === "flex")
        return o.flexDirection === "column" ||
          o.flexDirection === "column-reverse"
          ? "vertical"
          : "horizontal";
      if (o.display === "grid")
        return o.gridTemplateColumns.split(" ").length <= 1
          ? "vertical"
          : "horizontal";
      if (a && y.float && y.float !== "none") {
        var v = y.float === "left" ? "left" : "right";
        return g && (d.clear === "both" || d.clear === v)
          ? "vertical"
          : "horizontal";
      }
      return a &&
        (y.display === "block" ||
          y.display === "flex" ||
          y.display === "table" ||
          y.display === "grid" ||
          (h >= n && o[Lo] === "none") ||
          (g && o[Lo] === "none" && h + C > n))
        ? "vertical"
        : "horizontal";
    },
    Fr = function (t, r, o) {
      var n = o ? t.left : t.top,
        a = o ? t.right : t.bottom,
        g = o ? t.width : t.height,
        y = o ? r.left : r.top,
        d = o ? r.right : r.bottom,
        h = o ? r.width : r.height;
      return n === y || a === d || n + g / 2 === y + h / 2;
    },
    Or = function (t, r) {
      var o;
      return (
        St.some(function (n) {
          var a = n[Ne].options.emptyInsertThreshold;
          if (!(!a || jt(n))) {
            var g = ce(n),
              y = t >= g.left - a && t <= g.right + a,
              d = r >= g.top - a && r <= g.bottom + a;
            if (y && d) return (o = n);
          }
        }),
        o
      );
    },
    Ho = function (t) {
      function r(a, g) {
        return function (y, d, h, C) {
          var v =
            y.options.group.name &&
            d.options.group.name &&
            y.options.group.name === d.options.group.name;
          if (a == null && (g || v)) return !0;
          if (a == null || a === !1) return !1;
          if (g && a === "clone") return a;
          if (typeof a == "function") return r(a(y, d, h, C), g)(y, d, h, C);
          var w = (g ? y : d).options.group.name;
          return (
            a === !0 ||
            (typeof a == "string" && a === w) ||
            (a.join && a.indexOf(w) > -1)
          );
        };
      }
      var o = {},
        n = t.group;
      (!n || Nt(n) != "object") && (n = { name: n }),
        (o.name = n.name),
        (o.checkPull = r(n.pull, !0)),
        (o.checkPut = r(n.put)),
        (o.revertClone = n.revertClone),
        (t.group = o);
    },
    Zo = function () {
      !xo && U && Z(U, "display", "none");
    },
    jo = function () {
      !xo && U && Z(U, "display", "");
    };
  Tt &&
    !Ao &&
    document.addEventListener(
      "click",
      function (t) {
        if (Pt)
          return (
            t.preventDefault(),
            t.stopPropagation && t.stopPropagation(),
            t.stopImmediatePropagation && t.stopImmediatePropagation(),
            (Pt = !1),
            !1
          );
      },
      !0
    );
  var Je = function (t) {
      if (B) {
        t = t.touches ? t.touches[0] : t;
        var r = Or(t.clientX, t.clientY);
        if (r) {
          var o = {};
          for (var n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
          (o.target = o.rootEl = r),
            (o.preventDefault = void 0),
            (o.stopPropagation = void 0),
            r[Ne]._onDragOver(o);
        }
      }
    },
    Lr = function (t) {
      B && B.parentNode[Ne]._isOutsideThisEl(t.target);
    };
  function j(t, r) {
    if (!(t && t.nodeType && t.nodeType === 1))
      throw "Sortable: `el` must be an HTMLElement, not ".concat(
        {}.toString.call(t)
      );
    (this.el = t), (this.options = r = Fe({}, r)), (t[Ne] = this);
    var o = {
      group: null,
      sort: !0,
      disabled: !1,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
      swapThreshold: 1,
      invertSwap: !1,
      invertedSwapThreshold: null,
      removeCloneOnHide: !0,
      direction: function () {
        return Ro(t, this.options);
      },
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      ignore: "a, img",
      filter: null,
      preventOnFilter: !0,
      animation: 0,
      easing: null,
      setData: function (g, y) {
        g.setData("Text", y.textContent);
      },
      dropBubble: !1,
      dragoverBubble: !1,
      dataIdAttr: "data-id",
      delay: 0,
      delayOnTouchOnly: !1,
      touchStartThreshold:
        (Number.parseInt ? Number : window).parseInt(
          window.devicePixelRatio,
          10
        ) || 1,
      forceFallback: !1,
      fallbackClass: "sortable-fallback",
      fallbackOnBody: !1,
      fallbackTolerance: 0,
      fallbackOffset: { x: 0, y: 0 },
      supportPointer:
        j.supportPointer !== !1 && "PointerEvent" in window && !ct,
      emptyInsertThreshold: 5,
    };
    ut.initializePlugins(this, t, o);
    for (var n in o) !(n in r) && (r[n] = o[n]);
    Ho(r);
    for (var a in this)
      a.charAt(0) === "_" &&
        typeof this[a] == "function" &&
        (this[a] = this[a].bind(this));
    (this.nativeDraggable = r.forceFallback ? !1 : Mr),
      this.nativeDraggable && (this.options.touchStartThreshold = 1),
      r.supportPointer
        ? G(t, "pointerdown", this._onTapStart)
        : (G(t, "mousedown", this._onTapStart),
          G(t, "touchstart", this._onTapStart)),
      this.nativeDraggable && (G(t, "dragover", this), G(t, "dragenter", this)),
      St.push(this.el),
      r.store && r.store.get && this.sort(r.store.get(this) || []),
      Fe(this, Ir());
  }
  j.prototype = {
    constructor: j,
    _isOutsideThisEl: function (t) {
      !this.el.contains(t) && t !== this.el && (it = null);
    },
    _getDirection: function (t, r) {
      return typeof this.options.direction == "function"
        ? this.options.direction.call(this, t, r, B)
        : this.options.direction;
    },
    _onTapStart: function (t) {
      if (t.cancelable) {
        var r = this,
          o = this.el,
          n = this.options,
          a = n.preventOnFilter,
          g = t.type,
          y =
            (t.touches && t.touches[0]) ||
            (t.pointerType && t.pointerType === "touch" && t),
          d = (y || t).target,
          h =
            (t.target.shadowRoot &&
              ((t.path && t.path[0]) ||
                (t.composedPath && t.composedPath()[0]))) ||
            d,
          C = n.filter;
        if (
          (Xr(o),
          !B &&
            !(
              (/mousedown|pointerdown/.test(g) && t.button !== 0) ||
              n.disabled
            ) &&
            !h.isContentEditable &&
            !(
              !this.nativeDraggable &&
              ct &&
              d &&
              d.tagName.toUpperCase() === "SELECT"
            ) &&
            ((d = Se(d, n.draggable, o, !1)), !(d && d.animated) && kt !== d))
        ) {
          if (
            ((st = ke(d)), (mt = ke(d, n.draggable)), typeof C == "function")
          ) {
            if (C.call(this, t, d, this)) {
              Ee({
                sortable: r,
                rootEl: h,
                name: "filter",
                targetEl: d,
                toEl: o,
                fromEl: o,
              }),
                we("filter", r, { evt: t }),
                a && t.cancelable && t.preventDefault();
              return;
            }
          } else if (
            C &&
            ((C = C.split(",").some(function (v) {
              if (((v = Se(h, v.trim(), o, !1)), v))
                return (
                  Ee({
                    sortable: r,
                    rootEl: v,
                    name: "filter",
                    targetEl: d,
                    fromEl: o,
                    toEl: o,
                  }),
                  we("filter", r, { evt: t }),
                  !0
                );
            })),
            C)
          ) {
            a && t.cancelable && t.preventDefault();
            return;
          }
          (n.handle && !Se(h, n.handle, o, !1)) ||
            this._prepareDragStart(t, y, d);
        }
      }
    },
    _prepareDragStart: function (t, r, o) {
      var n = this,
        a = n.el,
        g = n.options,
        y = a.ownerDocument,
        d;
      if (o && !B && o.parentNode === a) {
        var h = ce(o);
        if (
          ((ne = a),
          (B = o),
          (ie = B.parentNode),
          (Ye = B.nextSibling),
          (kt = o),
          (At = g.group),
          (j.dragged = B),
          (Ke = {
            target: B,
            clientX: (r || t).clientX,
            clientY: (r || t).clientY,
          }),
          (Fo = Ke.clientX - h.left),
          (Oo = Ke.clientY - h.top),
          (this._lastX = (r || t).clientX),
          (this._lastY = (r || t).clientY),
          (B.style["will-change"] = "all"),
          (d = function () {
            if ((we("delayEnded", n, { evt: t }), j.eventCanceled)) {
              n._onDrop();
              return;
            }
            n._disableDelayedDragEvents(),
              !Co && n.nativeDraggable && (B.draggable = !0),
              n._triggerDragStart(t, r),
              Ee({ sortable: n, name: "choose", originalEvent: t }),
              ve(B, g.chosenClass, !0);
          }),
          g.ignore.split(",").forEach(function (C) {
            _o(B, C.trim(), qt);
          }),
          G(y, "dragover", Je),
          G(y, "mousemove", Je),
          G(y, "touchmove", Je),
          G(y, "mouseup", n._onDrop),
          G(y, "touchend", n._onDrop),
          G(y, "touchcancel", n._onDrop),
          Co &&
            this.nativeDraggable &&
            ((this.options.touchStartThreshold = 4), (B.draggable = !0)),
          we("delayStart", this, { evt: t }),
          g.delay &&
            (!g.delayOnTouchOnly || r) &&
            (!this.nativeDraggable || !(dt || Le)))
        ) {
          if (j.eventCanceled) {
            this._onDrop();
            return;
          }
          G(y, "mouseup", n._disableDelayedDrag),
            G(y, "touchend", n._disableDelayedDrag),
            G(y, "touchcancel", n._disableDelayedDrag),
            G(y, "mousemove", n._delayedDragTouchMoveHandler),
            G(y, "touchmove", n._delayedDragTouchMoveHandler),
            g.supportPointer &&
              G(y, "pointermove", n._delayedDragTouchMoveHandler),
            (n._dragStartTimer = setTimeout(d, g.delay));
        } else d();
      }
    },
    _delayedDragTouchMoveHandler: function (t) {
      var r = t.touches ? t.touches[0] : t;
      Math.max(
        Math.abs(r.clientX - this._lastX),
        Math.abs(r.clientY - this._lastY)
      ) >=
        Math.floor(
          this.options.touchStartThreshold /
            ((this.nativeDraggable && window.devicePixelRatio) || 1)
        ) && this._disableDelayedDrag();
    },
    _disableDelayedDrag: function () {
      B && qt(B),
        clearTimeout(this._dragStartTimer),
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function () {
      var t = this.el.ownerDocument;
      K(t, "mouseup", this._disableDelayedDrag),
        K(t, "touchend", this._disableDelayedDrag),
        K(t, "touchcancel", this._disableDelayedDrag),
        K(t, "mousemove", this._delayedDragTouchMoveHandler),
        K(t, "touchmove", this._delayedDragTouchMoveHandler),
        K(t, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function (t, r) {
      (r = r || (t.pointerType == "touch" && t)),
        !this.nativeDraggable || r
          ? this.options.supportPointer
            ? G(document, "pointermove", this._onTouchMove)
            : r
            ? G(document, "touchmove", this._onTouchMove)
            : G(document, "mousemove", this._onTouchMove)
          : (G(B, "dragend", this), G(ne, "dragstart", this._onDragStart));
      try {
        document.selection
          ? Mt(function () {
              document.selection.empty();
            })
          : window.getSelection().removeAllRanges();
      } catch {}
    },
    _dragStarted: function (t, r) {
      if (((lt = !1), ne && B)) {
        we("dragStarted", this, { evt: r }),
          this.nativeDraggable && G(document, "dragover", Lr);
        var o = this.options;
        !t && ve(B, o.dragClass, !1),
          ve(B, o.ghostClass, !0),
          (j.active = this),
          t && this._appendGhost(),
          Ee({ sortable: this, name: "start", originalEvent: r });
      } else this._nulling();
    },
    _emulateDragOver: function () {
      if (_e) {
        (this._lastX = _e.clientX), (this._lastY = _e.clientY), Zo();
        for (
          var t = document.elementFromPoint(_e.clientX, _e.clientY), r = t;
          t &&
          t.shadowRoot &&
          ((t = t.shadowRoot.elementFromPoint(_e.clientX, _e.clientY)),
          t !== r);

        )
          r = t;
        if ((B.parentNode[Ne]._isOutsideThisEl(t), r))
          do {
            if (r[Ne]) {
              var o = void 0;
              if (
                ((o = r[Ne]._onDragOver({
                  clientX: _e.clientX,
                  clientY: _e.clientY,
                  target: t,
                  rootEl: r,
                })),
                o && !this.options.dragoverBubble)
              )
                break;
            }
            t = r;
          } while ((r = r.parentNode));
        jo();
      }
    },
    _onTouchMove: function (t) {
      if (Ke) {
        var r = this.options,
          o = r.fallbackTolerance,
          n = r.fallbackOffset,
          a = t.touches ? t.touches[0] : t,
          g = U && rt(U, !0),
          y = U && g && g.a,
          d = U && g && g.d,
          h = Vt && be && Do(be),
          C =
            (a.clientX - Ke.clientX + n.x) / (y || 1) +
            (h ? h[0] - Kt[0] : 0) / (y || 1),
          v =
            (a.clientY - Ke.clientY + n.y) / (d || 1) +
            (h ? h[1] - Kt[1] : 0) / (d || 1);
        if (!j.active && !lt) {
          if (
            o &&
            Math.max(
              Math.abs(a.clientX - this._lastX),
              Math.abs(a.clientY - this._lastY)
            ) < o
          )
            return;
          this._onDragStart(t, !0);
        }
        if (U) {
          g
            ? ((g.e += C - (Xt || 0)), (g.f += v - (Yt || 0)))
            : (g = { a: 1, b: 0, c: 0, d: 1, e: C, f: v });
          var w = "matrix("
            .concat(g.a, ",")
            .concat(g.b, ",")
            .concat(g.c, ",")
            .concat(g.d, ",")
            .concat(g.e, ",")
            .concat(g.f, ")");
          Z(U, "webkitTransform", w),
            Z(U, "mozTransform", w),
            Z(U, "msTransform", w),
            Z(U, "transform", w),
            (Xt = C),
            (Yt = v),
            (_e = a);
        }
        t.cancelable && t.preventDefault();
      }
    },
    _appendGhost: function () {
      if (!U) {
        var t = this.options.fallbackOnBody ? document.body : ne,
          r = ce(B, !0, Vt, !0, t),
          o = this.options;
        if (Vt) {
          for (
            be = t;
            Z(be, "position") === "static" &&
            Z(be, "transform") === "none" &&
            be !== document;

          )
            be = be.parentNode;
          be !== document.body && be !== document.documentElement
            ? (be === document && (be = Ve()),
              (r.top += be.scrollTop),
              (r.left += be.scrollLeft))
            : (be = Ve()),
            (Kt = Do(be));
        }
        (U = B.cloneNode(!0)),
          ve(U, o.ghostClass, !1),
          ve(U, o.fallbackClass, !0),
          ve(U, o.dragClass, !0),
          Z(U, "transition", ""),
          Z(U, "transform", ""),
          Z(U, "box-sizing", "border-box"),
          Z(U, "margin", 0),
          Z(U, "top", r.top),
          Z(U, "left", r.left),
          Z(U, "width", r.width),
          Z(U, "height", r.height),
          Z(U, "opacity", "0.8"),
          Z(U, "position", Vt ? "absolute" : "fixed"),
          Z(U, "zIndex", "100000"),
          Z(U, "pointerEvents", "none"),
          (j.ghost = U),
          t.appendChild(U),
          Z(
            U,
            "transform-origin",
            (Fo / parseInt(U.style.width)) * 100 +
              "% " +
              (Oo / parseInt(U.style.height)) * 100 +
              "%"
          );
      }
    },
    _onDragStart: function (t, r) {
      var o = this,
        n = t.dataTransfer,
        a = o.options;
      if ((we("dragStart", this, { evt: t }), j.eventCanceled)) {
        this._onDrop();
        return;
      }
      we("setupClone", this),
        j.eventCanceled ||
          ((ae = Bo(B)),
          ae.removeAttribute("id"),
          (ae.draggable = !1),
          (ae.style["will-change"] = ""),
          this._hideClone(),
          ve(ae, this.options.chosenClass, !1),
          (j.clone = ae)),
        (o.cloneId = Mt(function () {
          we("clone", o),
            !j.eventCanceled &&
              (o.options.removeCloneOnHide || ne.insertBefore(ae, B),
              o._hideClone(),
              Ee({ sortable: o, name: "clone" }));
        })),
        !r && ve(B, a.dragClass, !0),
        r
          ? ((Pt = !0), (o._loopId = setInterval(o._emulateDragOver, 50)))
          : (K(document, "mouseup", o._onDrop),
            K(document, "touchend", o._onDrop),
            K(document, "touchcancel", o._onDrop),
            n &&
              ((n.effectAllowed = "move"),
              a.setData && a.setData.call(o, n, B)),
            G(document, "drop", o),
            Z(B, "transform", "translateZ(0)")),
        (lt = !0),
        (o._dragStartId = Mt(o._dragStarted.bind(o, r, t))),
        G(document, "selectstart", o),
        (ft = !0),
        ct && Z(document.body, "user-select", "none");
    },
    _onDragOver: function (t) {
      var r = this.el,
        o = t.target,
        n,
        a,
        g,
        y = this.options,
        d = y.group,
        h = j.active,
        C = At === d,
        v = y.sort,
        w = ye || h,
        N,
        E = this,
        c = !1;
      if (Jt) return;
      function l(H, F) {
        we(
          H,
          E,
          Te(
            {
              evt: t,
              isOwner: C,
              axis: N ? "vertical" : "horizontal",
              revert: g,
              dragRect: n,
              targetRect: a,
              canSort: v,
              fromSortable: w,
              target: o,
              completed: s,
              onMove: function (X, L) {
                return Bt(ne, r, B, n, X, ce(X), t, L);
              },
              changed: i,
            },
            F
          )
        );
      }
      function f() {
        l("dragOverAnimationCapture"),
          E.captureAnimationState(),
          E !== w && w.captureAnimationState();
      }
      function s(H) {
        return (
          l("dragOverCompleted", { insertion: H }),
          H &&
            (C ? h._hideClone() : h._showClone(E),
            E !== w &&
              (ve(B, ye ? ye.options.ghostClass : h.options.ghostClass, !1),
              ve(B, y.ghostClass, !0)),
            ye !== E && E !== j.active
              ? (ye = E)
              : E === j.active && ye && (ye = null),
            w === E && (E._ignoreWhileAnimating = o),
            E.animateAll(function () {
              l("dragOverAnimationComplete"), (E._ignoreWhileAnimating = null);
            }),
            E !== w && (w.animateAll(), (w._ignoreWhileAnimating = null))),
          ((o === B && !B.animated) || (o === r && !o.animated)) && (it = null),
          !y.dragoverBubble &&
            !t.rootEl &&
            o !== document &&
            (B.parentNode[Ne]._isOutsideThisEl(t.target), !H && Je(t)),
          !y.dragoverBubble && t.stopPropagation && t.stopPropagation(),
          (c = !0)
        );
      }
      function i() {
        (Ce = ke(B)),
          (We = ke(B, y.draggable)),
          Ee({
            sortable: E,
            name: "change",
            toEl: r,
            newIndex: Ce,
            newDraggableIndex: We,
            originalEvent: t,
          });
      }
      if (
        (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(),
        (o = Se(o, y.draggable, r, !0)),
        l("dragOver"),
        j.eventCanceled)
      )
        return c;
      if (
        B.contains(t.target) ||
        (o.animated && o.animatingX && o.animatingY) ||
        E._ignoreWhileAnimating === o
      )
        return s(!1);
      if (
        ((Pt = !1),
        h &&
          !y.disabled &&
          (C
            ? v || (g = ie !== ne)
            : ye === this ||
              ((this.lastPutMode = At.checkPull(this, h, B, t)) &&
                d.checkPut(this, h, B, t))))
      ) {
        if (
          ((N = this._getDirection(t, o) === "vertical"),
          (n = ce(B)),
          l("dragOverValid"),
          j.eventCanceled)
        )
          return c;
        if (g)
          return (
            (ie = ne),
            f(),
            this._hideClone(),
            l("revert"),
            j.eventCanceled ||
              (Ye ? ne.insertBefore(B, Ye) : ne.appendChild(B)),
            s(!0)
          );
        var p = jt(r, y.draggable);
        if (!p || (Zr(t, N, this) && !p.animated)) {
          if (p === B) return s(!1);
          if (
            (p && r === t.target && (o = p),
            o && (a = ce(o)),
            Bt(ne, r, B, n, o, a, t, !!o) !== !1)
          )
            return (
              f(),
              p && p.nextSibling
                ? r.insertBefore(B, p.nextSibling)
                : r.appendChild(B),
              (ie = r),
              i(),
              s(!0)
            );
        } else if (p && Hr(t, N, this)) {
          var m = nt(r, 0, y, !0);
          if (m === B) return s(!1);
          if (((o = m), (a = ce(o)), Bt(ne, r, B, n, o, a, t, !1) !== !1))
            return f(), r.insertBefore(B, m), (ie = r), i(), s(!0);
        } else if (o.parentNode === r) {
          a = ce(o);
          var $ = 0,
            z,
            A = B.parentNode !== r,
            u = !Fr(
              (B.animated && B.toRect) || n,
              (o.animated && o.toRect) || a,
              N
            ),
            b = N ? "top" : "left",
            k = Io(o, "top", "top") || Io(B, "top", "top"),
            P = k ? k.scrollTop : void 0;
          it !== o && ((z = a[b]), (ht = !1), (_t = (!u && y.invertSwap) || A)),
            ($ = jr(
              t,
              o,
              a,
              N,
              u ? 1 : y.swapThreshold,
              y.invertedSwapThreshold == null
                ? y.swapThreshold
                : y.invertedSwapThreshold,
              _t,
              it === o
            ));
          var _;
          if ($ !== 0) {
            var D = ke(B);
            do (D -= $), (_ = ie.children[D]);
            while (_ && (Z(_, "display") === "none" || _ === U));
          }
          if ($ === 0 || _ === o) return s(!1);
          (it = o), (gt = $);
          var M = o.nextElementSibling,
            I = !1;
          I = $ === 1;
          var V = Bt(ne, r, B, n, o, a, t, I);
          if (V !== !1)
            return (
              (V === 1 || V === -1) && (I = V === 1),
              (Jt = !0),
              setTimeout(Rr, 30),
              f(),
              I && !M
                ? r.appendChild(B)
                : o.parentNode.insertBefore(B, I ? M : o),
              k && Vo(k, 0, P - k.scrollTop),
              (ie = B.parentNode),
              z !== void 0 && !_t && (It = Math.abs(z - ce(o)[b])),
              i(),
              s(!0)
            );
        }
        if (r.contains(B)) return s(!1);
      }
      return !1;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function () {
      K(document, "mousemove", this._onTouchMove),
        K(document, "touchmove", this._onTouchMove),
        K(document, "pointermove", this._onTouchMove),
        K(document, "dragover", Je),
        K(document, "mousemove", Je),
        K(document, "touchmove", Je);
    },
    _offUpEvents: function () {
      var t = this.el.ownerDocument;
      K(t, "mouseup", this._onDrop),
        K(t, "touchend", this._onDrop),
        K(t, "pointerup", this._onDrop),
        K(t, "touchcancel", this._onDrop),
        K(document, "selectstart", this);
    },
    _onDrop: function (t) {
      var r = this.el,
        o = this.options;
      if (
        ((Ce = ke(B)),
        (We = ke(B, o.draggable)),
        we("drop", this, { evt: t }),
        (ie = B && B.parentNode),
        (Ce = ke(B)),
        (We = ke(B, o.draggable)),
        j.eventCanceled)
      ) {
        this._nulling();
        return;
      }
      (lt = !1),
        (_t = !1),
        (ht = !1),
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Gt(this.cloneId),
        Gt(this._dragStartId),
        this.nativeDraggable &&
          (K(document, "drop", this), K(r, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        ct && Z(document.body, "user-select", ""),
        Z(B, "transform", ""),
        t &&
          (ft &&
            (t.cancelable && t.preventDefault(),
            !o.dropBubble && t.stopPropagation()),
          U && U.parentNode && U.parentNode.removeChild(U),
          (ne === ie || (ye && ye.lastPutMode !== "clone")) &&
            ae &&
            ae.parentNode &&
            ae.parentNode.removeChild(ae),
          B &&
            (this.nativeDraggable && K(B, "dragend", this),
            qt(B),
            (B.style["will-change"] = ""),
            ft &&
              !lt &&
              ve(B, ye ? ye.options.ghostClass : this.options.ghostClass, !1),
            ve(B, this.options.chosenClass, !1),
            Ee({
              sortable: this,
              name: "unchoose",
              toEl: ie,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: t,
            }),
            ne !== ie
              ? (Ce >= 0 &&
                  (Ee({
                    rootEl: ie,
                    name: "add",
                    toEl: ie,
                    fromEl: ne,
                    originalEvent: t,
                  }),
                  Ee({
                    sortable: this,
                    name: "remove",
                    toEl: ie,
                    originalEvent: t,
                  }),
                  Ee({
                    rootEl: ie,
                    name: "sort",
                    toEl: ie,
                    fromEl: ne,
                    originalEvent: t,
                  }),
                  Ee({
                    sortable: this,
                    name: "sort",
                    toEl: ie,
                    originalEvent: t,
                  })),
                ye && ye.save())
              : Ce !== st &&
                Ce >= 0 &&
                (Ee({
                  sortable: this,
                  name: "update",
                  toEl: ie,
                  originalEvent: t,
                }),
                Ee({
                  sortable: this,
                  name: "sort",
                  toEl: ie,
                  originalEvent: t,
                })),
            j.active &&
              ((Ce == null || Ce === -1) && ((Ce = st), (We = mt)),
              Ee({ sortable: this, name: "end", toEl: ie, originalEvent: t }),
              this.save()))),
        this._nulling();
    },
    _nulling: function () {
      we("nulling", this),
        (ne =
          B =
          ie =
          U =
          Ye =
          ae =
          kt =
          Ue =
          Ke =
          _e =
          ft =
          Ce =
          We =
          st =
          mt =
          it =
          gt =
          ye =
          At =
          j.dragged =
          j.ghost =
          j.clone =
          j.active =
            null),
        Dt.forEach(function (t) {
          t.checked = !0;
        }),
        (Dt.length = Xt = Yt = 0);
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "drop":
        case "dragend":
          this._onDrop(t);
          break;
        case "dragenter":
        case "dragover":
          B && (this._onDragOver(t), xr(t));
          break;
        case "selectstart":
          t.preventDefault();
          break;
      }
    },
    toArray: function () {
      for (
        var t = [],
          r,
          o = this.el.children,
          n = 0,
          a = o.length,
          g = this.options;
        n < a;
        n++
      )
        (r = o[n]),
          Se(r, g.draggable, this.el, !1) &&
            t.push(r.getAttribute(g.dataIdAttr) || Wr(r));
      return t;
    },
    sort: function (t, r) {
      var o = {},
        n = this.el;
      this.toArray().forEach(function (a, g) {
        var y = n.children[g];
        Se(y, this.options.draggable, n, !1) && (o[a] = y);
      }, this),
        r && this.captureAnimationState(),
        t.forEach(function (a) {
          o[a] && (n.removeChild(o[a]), n.appendChild(o[a]));
        }),
        r && this.animateAll();
    },
    save: function () {
      var t = this.options.store;
      t && t.set && t.set(this);
    },
    closest: function (t, r) {
      return Se(t, r || this.options.draggable, this.el, !1);
    },
    option: function (t, r) {
      var o = this.options;
      if (r === void 0) return o[t];
      var n = ut.modifyOption(this, t, r);
      typeof n < "u" ? (o[t] = n) : (o[t] = r), t === "group" && Ho(o);
    },
    destroy: function () {
      we("destroy", this);
      var t = this.el;
      (t[Ne] = null),
        K(t, "mousedown", this._onTapStart),
        K(t, "touchstart", this._onTapStart),
        K(t, "pointerdown", this._onTapStart),
        this.nativeDraggable &&
          (K(t, "dragover", this), K(t, "dragenter", this)),
        Array.prototype.forEach.call(
          t.querySelectorAll("[draggable]"),
          function (r) {
            r.removeAttribute("draggable");
          }
        ),
        this._onDrop(),
        this._disableDelayedDragEvents(),
        St.splice(St.indexOf(this.el), 1),
        (this.el = t = null);
    },
    _hideClone: function () {
      if (!Ue) {
        if ((we("hideClone", this), j.eventCanceled)) return;
        Z(ae, "display", "none"),
          this.options.removeCloneOnHide &&
            ae.parentNode &&
            ae.parentNode.removeChild(ae),
          (Ue = !0);
      }
    },
    _showClone: function (t) {
      if (t.lastPutMode !== "clone") {
        this._hideClone();
        return;
      }
      if (Ue) {
        if ((we("showClone", this), j.eventCanceled)) return;
        B.parentNode == ne && !this.options.group.revertClone
          ? ne.insertBefore(ae, B)
          : Ye
          ? ne.insertBefore(ae, Ye)
          : ne.appendChild(ae),
          this.options.group.revertClone && this.animate(B, ae),
          Z(ae, "display", ""),
          (Ue = !1);
      }
    },
  };
  function xr(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
      t.cancelable && t.preventDefault();
  }
  function Bt(t, r, o, n, a, g, y, d) {
    var h,
      C = t[Ne],
      v = C.options.onMove,
      w;
    return (
      window.CustomEvent && !Le && !dt
        ? (h = new CustomEvent("move", { bubbles: !0, cancelable: !0 }))
        : ((h = document.createEvent("Event")), h.initEvent("move", !0, !0)),
      (h.to = r),
      (h.from = t),
      (h.dragged = o),
      (h.draggedRect = n),
      (h.related = a || r),
      (h.relatedRect = g || ce(r)),
      (h.willInsertAfter = d),
      (h.originalEvent = y),
      t.dispatchEvent(h),
      v && (w = v.call(C, h, y)),
      w
    );
  }
  function qt(t) {
    t.draggable = !1;
  }
  function Rr() {
    Jt = !1;
  }
  function Hr(t, r, o) {
    var n = ce(nt(o.el, 0, o.options, !0)),
      a = Mo(o.el, o.options, U),
      g = 10;
    return r
      ? t.clientX < a.left - g || (t.clientY < n.top && t.clientX < n.right)
      : t.clientY < a.top - g || (t.clientY < n.bottom && t.clientX < n.left);
  }
  function Zr(t, r, o) {
    var n = ce(jt(o.el, o.options.draggable)),
      a = Mo(o.el, o.options, U),
      g = 10;
    return r
      ? t.clientX > a.right + g || (t.clientY > n.bottom && t.clientX > n.left)
      : t.clientY > a.bottom + g || (t.clientX > n.right && t.clientY > n.top);
  }
  function jr(t, r, o, n, a, g, y, d) {
    var h = n ? t.clientY : t.clientX,
      C = n ? o.height : o.width,
      v = n ? o.top : o.left,
      w = n ? o.bottom : o.right,
      N = !1;
    if (!y) {
      if (d && It < C * a) {
        if (
          (!ht &&
            (gt === 1 ? h > v + (C * g) / 2 : h < w - (C * g) / 2) &&
            (ht = !0),
          ht)
        )
          N = !0;
        else if (gt === 1 ? h < v + It : h > w - It) return -gt;
      } else if (h > v + (C * (1 - a)) / 2 && h < w - (C * (1 - a)) / 2)
        return Ur(r);
    }
    return (
      (N = N || y),
      N && (h < v + (C * g) / 2 || h > w - (C * g) / 2)
        ? h > v + C / 2
          ? 1
          : -1
        : 0
    );
  }
  function Ur(t) {
    return ke(B) < ke(t) ? 1 : -1;
  }
  function Wr(t) {
    for (
      var r = t.tagName + t.className + t.src + t.href + t.textContent,
        o = r.length,
        n = 0;
      o--;

    )
      n += r.charCodeAt(o);
    return n.toString(36);
  }
  function Xr(t) {
    Dt.length = 0;
    for (var r = t.getElementsByTagName("input"), o = r.length; o--; ) {
      var n = r[o];
      n.checked && Dt.push(n);
    }
  }
  function Mt(t) {
    return setTimeout(t, 0);
  }
  function Gt(t) {
    return clearTimeout(t);
  }
  Tt &&
    G(document, "touchmove", function (t) {
      (j.active || lt) && t.cancelable && t.preventDefault();
    }),
    (j.utils = {
      on: G,
      off: K,
      css: Z,
      find: _o,
      is: function (t, r) {
        return !!Se(t, r, t, !1);
      },
      extend: Sr,
      throttle: To,
      closest: Se,
      toggleClass: ve,
      clone: Bo,
      index: ke,
      nextTick: Mt,
      cancelNextTick: Gt,
      detectDirection: Ro,
      getChild: nt,
    }),
    (j.get = function (t) {
      return t[Ne];
    }),
    (j.mount = function () {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      r[0].constructor === Array && (r = r[0]),
        r.forEach(function (n) {
          if (!n.prototype || !n.prototype.constructor)
            throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
              {}.toString.call(n)
            );
          n.utils && (j.utils = Te(Te({}, j.utils), n.utils)), ut.mount(n);
        });
    }),
    (j.create = function (t, r) {
      return new j(t, r);
    }),
    (j.version = kr);
  var pe = [],
    yt,
    Qt,
    eo = !1,
    to,
    oo,
    Ft,
    bt;
  function Yr() {
    function t() {
      this.defaults = {
        scroll: !0,
        forceAutoScrollFallback: !1,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: !0,
      };
      for (var r in this)
        r.charAt(0) === "_" &&
          typeof this[r] == "function" &&
          (this[r] = this[r].bind(this));
    }
    return (
      (t.prototype = {
        dragStarted: function (r) {
          var o = r.originalEvent;
          this.sortable.nativeDraggable
            ? G(document, "dragover", this._handleAutoScroll)
            : this.options.supportPointer
            ? G(document, "pointermove", this._handleFallbackAutoScroll)
            : o.touches
            ? G(document, "touchmove", this._handleFallbackAutoScroll)
            : G(document, "mousemove", this._handleFallbackAutoScroll);
        },
        dragOverCompleted: function (r) {
          var o = r.originalEvent;
          !this.options.dragOverBubble &&
            !o.rootEl &&
            this._handleAutoScroll(o);
        },
        drop: function () {
          this.sortable.nativeDraggable
            ? K(document, "dragover", this._handleAutoScroll)
            : (K(document, "pointermove", this._handleFallbackAutoScroll),
              K(document, "touchmove", this._handleFallbackAutoScroll),
              K(document, "mousemove", this._handleFallbackAutoScroll)),
            Uo(),
            Ot(),
            _r();
        },
        nulling: function () {
          (Ft = Qt = yt = eo = bt = to = oo = null), (pe.length = 0);
        },
        _handleFallbackAutoScroll: function (r) {
          this._handleAutoScroll(r, !0);
        },
        _handleAutoScroll: function (r, o) {
          var n = this,
            a = (r.touches ? r.touches[0] : r).clientX,
            g = (r.touches ? r.touches[0] : r).clientY,
            y = document.elementFromPoint(a, g);
          if (
            ((Ft = r),
            o || this.options.forceAutoScrollFallback || dt || Le || ct)
          ) {
            ro(r, this.options, y, o);
            var d = je(y, !0);
            eo &&
              (!bt || a !== to || g !== oo) &&
              (bt && Uo(),
              (bt = setInterval(function () {
                var h = je(document.elementFromPoint(a, g), !0);
                h !== d && ((d = h), Ot()), ro(r, n.options, h, o);
              }, 10)),
              (to = a),
              (oo = g));
          } else {
            if (!this.options.bubbleScroll || je(y, !0) === Ve()) {
              Ot();
              return;
            }
            ro(r, this.options, je(y, !1), !1);
          }
        },
      }),
      Fe(t, { pluginName: "scroll", initializeByDefault: !0 })
    );
  }
  function Ot() {
    pe.forEach(function (t) {
      clearInterval(t.pid);
    }),
      (pe = []);
  }
  function Uo() {
    clearInterval(bt);
  }
  var ro = To(function (t, r, o, n) {
      if (r.scroll) {
        var a = (t.touches ? t.touches[0] : t).clientX,
          g = (t.touches ? t.touches[0] : t).clientY,
          y = r.scrollSensitivity,
          d = r.scrollSpeed,
          h = Ve(),
          C = !1,
          v;
        Qt !== o &&
          ((Qt = o),
          Ot(),
          (yt = r.scroll),
          (v = r.scrollFn),
          yt === !0 && (yt = je(o, !0)));
        var w = 0,
          N = yt;
        do {
          var E = N,
            c = ce(E),
            l = c.top,
            f = c.bottom,
            s = c.left,
            i = c.right,
            p = c.width,
            m = c.height,
            $ = void 0,
            z = void 0,
            A = E.scrollWidth,
            u = E.scrollHeight,
            b = Z(E),
            k = E.scrollLeft,
            P = E.scrollTop;
          E === h
            ? (($ =
                p < A &&
                (b.overflowX === "auto" ||
                  b.overflowX === "scroll" ||
                  b.overflowX === "visible")),
              (z =
                m < u &&
                (b.overflowY === "auto" ||
                  b.overflowY === "scroll" ||
                  b.overflowY === "visible")))
            : (($ =
                p < A && (b.overflowX === "auto" || b.overflowX === "scroll")),
              (z =
                m < u && (b.overflowY === "auto" || b.overflowY === "scroll")));
          var _ =
              $ &&
              (Math.abs(i - a) <= y && k + p < A) -
                (Math.abs(s - a) <= y && !!k),
            D =
              z &&
              (Math.abs(f - g) <= y && P + m < u) -
                (Math.abs(l - g) <= y && !!P);
          if (!pe[w]) for (var M = 0; M <= w; M++) pe[M] || (pe[M] = {});
          (pe[w].vx != _ || pe[w].vy != D || pe[w].el !== E) &&
            ((pe[w].el = E),
            (pe[w].vx = _),
            (pe[w].vy = D),
            clearInterval(pe[w].pid),
            (_ != 0 || D != 0) &&
              ((C = !0),
              (pe[w].pid = setInterval(
                function () {
                  n && this.layer === 0 && j.active._onTouchMove(Ft);
                  var I = pe[this.layer].vy ? pe[this.layer].vy * d : 0,
                    V = pe[this.layer].vx ? pe[this.layer].vx * d : 0;
                  (typeof v == "function" &&
                    v.call(
                      j.dragged.parentNode[Ne],
                      V,
                      I,
                      t,
                      Ft,
                      pe[this.layer].el
                    ) !== "continue") ||
                    Vo(pe[this.layer].el, V, I);
                }.bind({ layer: w }),
                24
              )))),
            w++;
        } while (r.bubbleScroll && N !== h && (N = je(N, !1)));
        eo = C;
      }
    }, 30),
    Wo = function (t) {
      var r = t.originalEvent,
        o = t.putSortable,
        n = t.dragEl,
        a = t.activeSortable,
        g = t.dispatchSortableEvent,
        y = t.hideGhostForTarget,
        d = t.unhideGhostForTarget;
      if (r) {
        var h = o || a;
        y();
        var C =
            r.changedTouches && r.changedTouches.length
              ? r.changedTouches[0]
              : r,
          v = document.elementFromPoint(C.clientX, C.clientY);
        d(),
          h &&
            !h.el.contains(v) &&
            (g("spill"), this.onSpill({ dragEl: n, putSortable: o }));
      }
    };
  function no() {}
  (no.prototype = {
    startIndex: null,
    dragStart: function (t) {
      var r = t.oldDraggableIndex;
      this.startIndex = r;
    },
    onSpill: function (t) {
      var r = t.dragEl,
        o = t.putSortable;
      this.sortable.captureAnimationState(), o && o.captureAnimationState();
      var n = nt(this.sortable.el, this.startIndex, this.options);
      n ? this.sortable.el.insertBefore(r, n) : this.sortable.el.appendChild(r),
        this.sortable.animateAll(),
        o && o.animateAll();
    },
    drop: Wo,
  }),
    Fe(no, { pluginName: "revertOnSpill" });
  function ao() {}
  (ao.prototype = {
    onSpill: function (t) {
      var r = t.dragEl,
        o = t.putSortable,
        n = o || this.sortable;
      n.captureAnimationState(),
        r.parentNode && r.parentNode.removeChild(r),
        n.animateAll();
    },
    drop: Wo,
  }),
    Fe(ao, { pluginName: "removeOnSpill" }),
    j.mount(new Yr()),
    j.mount(ao, no);
  function Kr(t) {
    return t == null ? t : JSON.parse(JSON.stringify(t));
  }
  function Jr(t) {
    e.getCurrentInstance() && e.onUnmounted(t);
  }
  function qr(t) {
    e.getCurrentInstance() ? e.onMounted(t) : e.nextTick(t);
  }
  let Xo = null,
    Yo = null;
  function Ko(t = null, r = null) {
    (Xo = t), (Yo = r);
  }
  function Gr() {
    return { data: Xo, clonedData: Yo };
  }
  const Jo = Symbol("cloneElement");
  function Qr(...t) {
    var r, o;
    const n = (r = e.getCurrentInstance()) == null ? void 0 : r.proxy;
    let a = null;
    const g = t[0];
    let [, y, d] = t;
    Array.isArray(e.unref(y)) || ((d = y), (y = null));
    let h = null;
    const {
      immediate: C = !0,
      clone: v = Kr,
      customUpdate: w,
    } = (o = e.unref(d)) != null ? o : {};
    function N(u) {
      var b;
      const { from: k, oldIndex: P, item: _ } = u;
      a = Array.from(k.childNodes);
      const D = e.unref((b = e.unref(y)) == null ? void 0 : b[P]),
        M = v(D);
      Ko(D, M), (_[Jo] = M);
    }
    function E(u) {
      const b = u.item[Jo];
      if (!gr(b)) {
        if ((Zt(u.item), e.isRef(y))) {
          const k = [...e.unref(y)];
          y.value = wo(k, u.newDraggableIndex, b);
          return;
        }
        wo(e.unref(y), u.newDraggableIndex, b);
      }
    }
    function c(u) {
      const {
        from: b,
        item: k,
        oldIndex: P,
        oldDraggableIndex: _,
        pullMode: D,
        clone: M,
      } = u;
      if ((zo(b, k, P), D === "clone")) {
        Zt(M);
        return;
      }
      if (e.isRef(y)) {
        const I = [...e.unref(y)];
        y.value = $o(I, _);
        return;
      }
      $o(e.unref(y), _);
    }
    function l(u) {
      if (w) {
        w(u);
        return;
      }
      const {
        from: b,
        item: k,
        oldIndex: P,
        oldDraggableIndex: _,
        newDraggableIndex: D,
      } = u;
      if ((Zt(k), zo(b, k, P), e.isRef(y))) {
        const M = [...e.unref(y)];
        y.value = Eo(M, _, D);
        return;
      }
      Eo(e.unref(y), _, D);
    }
    function f(u) {
      const { newIndex: b, oldIndex: k, from: P, to: _ } = u;
      let D = null;
      const M = b === k && P === _;
      try {
        if (M) {
          let I = null;
          a == null ||
            a.some((V, H) => {
              if (I && (a == null ? void 0 : a.length) !== _.childNodes.length)
                return P.insertBefore(I, V.nextSibling), !0;
              const F = _.childNodes[H];
              I = _ == null ? void 0 : _.replaceChild(V, F);
            });
        }
      } catch (I) {
        D = I;
      } finally {
        a = null;
      }
      e.nextTick(() => {
        if ((Ko(), D)) throw D;
      });
    }
    const s = { onUpdate: l, onStart: N, onAdd: E, onRemove: c, onEnd: f };
    function i(u) {
      const b = e.unref(g);
      return (
        u || (u = hr(b) ? yr(b, n == null ? void 0 : n.$el) : b),
        u && !$r(u) && (u = u.$el),
        u || void 0,
        u
      );
    }
    function p() {
      var u;
      const b = (u = e.unref(d)) != null ? u : {},
        { immediate: k, clone: P } = b,
        _ = bo(b, ["immediate", "clone"]);
      return (
        vo(_, (D, M) => {
          wr(D) &&
            (_[D] = (I, ...V) => {
              const H = Gr();
              return zr(I, H), M(I, ...V);
            });
        }),
        Er(y === null ? {} : s, _)
      );
    }
    const m = (u) => {
      (u = i(u)), h && $.destroy(), (h = new j(u, p()));
    };
    e.watch(
      () => d,
      () => {
        h &&
          vo(p(), (u, b) => {
            h == null || h.option(u, b);
          });
      },
      { deep: !0 }
    );
    const $ = {
        option: (u, b) => (h == null ? void 0 : h.option(u, b)),
        destroy: () => {
          h == null || h.destroy(), (h = null);
        },
        save: () => (h == null ? void 0 : h.save()),
        toArray: () => (h == null ? void 0 : h.toArray()),
        closest: (...u) => (h == null ? void 0 : h.closest(...u)),
      },
      z = () => ($ == null ? void 0 : $.option("disabled", !0)),
      A = () => ($ == null ? void 0 : $.option("disabled", !1));
    return (
      qr(() => {
        C && m();
      }),
      Jr($.destroy),
      ot({ start: m, pause: z, resume: A }, $)
    );
  }
  const so = [
      "update",
      "start",
      "add",
      "remove",
      "choose",
      "unchoose",
      "end",
      "sort",
      "filter",
      "clone",
      "move",
      "change",
    ],
    en = [
      "clone",
      "animation",
      "ghostClass",
      "group",
      "sort",
      "disabled",
      "store",
      "handle",
      "draggable",
      "swapThreshold",
      "invertSwap",
      "invertedSwapThreshold",
      "removeCloneOnHide",
      "direction",
      "chosenClass",
      "dragClass",
      "ignore",
      "filter",
      "preventOnFilter",
      "easing",
      "setData",
      "dropBubble",
      "dragoverBubble",
      "dataIdAttr",
      "delay",
      "delayOnTouchOnly",
      "touchStartThreshold",
      "forceFallback",
      "fallbackClass",
      "fallbackOnBody",
      "fallbackTolerance",
      "fallbackOffset",
      "supportPointer",
      "emptyInsertThreshold",
      "scroll",
      "forceAutoScrollFallback",
      "scrollSensitivity",
      "scrollSpeed",
      "bubbleScroll",
      "modelValue",
      "tag",
      "target",
      "customUpdate",
      ...so.map((t) => `on${t.replace(/^\S/, (r) => r.toUpperCase())}`),
    ],
    tn = e.defineComponent({
      name: "VueDraggable",
      model: { prop: "modelValue", event: "update:modelValue" },
      props: en,
      emits: ["update:modelValue", ...so],
      setup(t, { slots: r, emit: o, expose: n, attrs: a }) {
        const g = so.reduce((v, w) => {
            const N = `on${w.replace(/^\S/, (E) => E.toUpperCase())}`;
            return (v[N] = (...E) => o(w, ...E)), v;
          }, {}),
          y = e.computed(() => {
            const v = e.toRefs(t),
              { modelValue: w } = v,
              N = bo(v, ["modelValue"]),
              E = Object.entries(N).reduce((c, [l, f]) => {
                const s = e.unref(f);
                return s !== void 0 && (c[l] = s), c;
              }, {});
            return ot(ot({}, g), fr(ot(ot({}, a), E)));
          }),
          d = e.computed({
            get: () => t.modelValue,
            set: (v) => o("update:modelValue", v),
          }),
          h = e.ref(),
          C = e.reactive(Qr(t.target || h, d, y));
        return (
          n(C),
          () => {
            var v;
            return e.h(
              t.tag || "div",
              { ref: h },
              (v = r == null ? void 0 : r.default) == null
                ? void 0
                : v.call(r, C)
            );
          }
        );
      },
    }),
    on = { class: "zero-code-data-display" },
    rn = { class: "zero-code-data-tabs" },
    nn = ["onClick"],
    an = { class: "zero-code-data-content" },
    sn = { key: 0, class: "zero-code-data-section" },
    ln = { key: 0, class: "zero-code-rendered-content" },
    dn = { class: "zero-code-add-part-button-container" },
    cn = { class: "zero-code-component-header" },
    pn = { class: "zero-code-header-actions" },
    un = ["onClick"],
    mn = ["onClick"],
    fn = ["innerHTML"],
    gn = { class: "zero-code-add-part-button-container" },
    hn = ["onClick"],
    yn = { key: 1, class: "zero-code-no-data" },
    bn = { class: "zero-code-empty-state" },
    En = { class: "zero-code-add-part-button-container" },
    $n = { key: 1, class: "zero-code-data-section" },
    wn = { class: "zero-code-data-display-section" },
    zn = { class: "zero-code-parts-sub-content" },
    vn = { class: "zero-code-parts-sub-section" },
    Nn = { class: "zero-code-data-display-pre" },
    Cn = e.defineComponent({
      __name: "DataDisplay",
      props: {
        modelValue: { type: String },
        pageData: { type: Array },
        parts: { type: Array },
        commonParts: { type: Array },
        individualParts: { type: Array },
        renderComponentWithNested: { type: Function },
        isTextEditing: { type: Boolean },
      },
      emits: [
        "update:modelValue",
        "add-part",
        "edit-part",
        "delete-part",
        "reorder-parts",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.computed({
            get: () => o.pageData,
            set: (w) => {
              n("reorder-parts", w);
            },
          }),
          g = () => {},
          y = () => {},
          d = ["rendered", "page"],
          h = (w) =>
            ({
              rendered: "レンダリング結果",
              source: "HTMLソース",
              page: "データ表示",
            }[w]),
          C = e.computed(() => v(o.pageData)),
          v = (w) => {
            const N = (E, c = 0) => {
              const l = "  ".repeat(c),
                f = "  ".repeat(c + 1);
              if (Array.isArray(E))
                return E.length === 0
                  ? "[]"
                  : `[
${E.map((i) => f + N(i, c + 1)).join(`,
`)}
${l}]`;
              if (typeof E == "object" && E !== null) {
                const s = Object.entries(E);
                return s.length === 0
                  ? "{}"
                  : `{
${s.map(([p, m]) => {
  let $;
  if (typeof m == "string") {
    const z = m
      .replace(
        /\\n/g,
        `
`
      )
      .replace(/\\t/g, "	")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\");
    if (
      z.includes(`
`)
    ) {
      const A = z.split(`
`);
      $ = A.map((b, k) =>
        k === 0 ? `\`${b}` : k === A.length - 1 ? `${f}${b}\`` : `${f}${b}`
      ).join(`
`);
    } else $ = `"${z}"`;
  } else $ = N(m, c + 1);
  return `${f}"${p}": ${$}`;
}).join(`,
`)}
${l}}`;
              }
              return typeof E == "string"
                ? `"${E.replace(/"/g, '\\"')}"`
                : JSON.stringify(E);
            };
            return N(w);
          };
        return (w, N) => (
          e.openBlock(),
          e.createElementBlock("div", on, [
            e.createElementVNode("div", rn, [
              (e.openBlock(),
              e.createElementBlock(
                e.Fragment,
                null,
                e.renderList(d, (E) =>
                  e.createElementVNode(
                    "button",
                    {
                      key: E,
                      class: e.normalizeClass([
                        "zero-code-data-tab-button",
                        { active: w.modelValue === E },
                      ]),
                      onClick: (c) => w.$emit("update:modelValue", E),
                    },
                    e.toDisplayString(h(E)),
                    11,
                    nn
                  )
                ),
                64
              )),
            ]),
            e.createElementVNode("div", an, [
              w.modelValue === "rendered"
                ? (e.openBlock(),
                  e.createElementBlock("div", sn, [
                    Array.isArray(w.pageData) && w.pageData.length > 0
                      ? (e.openBlock(),
                        e.createElementBlock("div", ln, [
                          e.createElementVNode("div", dn, [
                            e.createElementVNode(
                              "button",
                              {
                                class: "zero-code-add-part-button",
                                onClick:
                                  N[0] ||
                                  (N[0] = (E) => w.$emit("add-part", 0)),
                              },
                              N[3] ||
                                (N[3] = [
                                  e.createElementVNode(
                                    "span",
                                    { class: "zero-code-plus-icon" },
                                    "＋",
                                    -1
                                  ),
                                  e.createElementVNode(
                                    "span",
                                    { class: "zero-code-button-text" },
                                    "パーツを追加",
                                    -1
                                  ),
                                ])
                            ),
                          ]),
                          e.createVNode(
                            e.unref(tn),
                            {
                              modelValue: a.value,
                              "onUpdate:modelValue":
                                N[1] || (N[1] = (E) => (a.value = E)),
                              animation: 200,
                              disabled: w.isTextEditing,
                              "ghost-class": "ghost",
                              "chosen-class": "chosen",
                              "drag-class": "drag",
                              onStart: g,
                              onEnd: y,
                            },
                            {
                              default: e.withCtx(() => [
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    w.pageData,
                                    (E, c) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "div",
                                        {
                                          key: E.id || c,
                                          class:
                                            "zero-code-rendered-component zero-code-draggable-item",
                                        },
                                        [
                                          e.createElementVNode("div", cn, [
                                            N[4] ||
                                              (N[4] = e.createElementVNode(
                                                "div",
                                                {
                                                  class:
                                                    "zero-code-drag-handle",
                                                },
                                                [
                                                  e.createElementVNode(
                                                    "span",
                                                    {
                                                      class:
                                                        "zero-code-drag-icon",
                                                    },
                                                    "⠿"
                                                  ),
                                                ],
                                                -1
                                              )),
                                            e.createElementVNode("div", pn, [
                                              e.createElementVNode(
                                                "button",
                                                {
                                                  class: "zero-code-edit-btn",
                                                  onClick: (l) =>
                                                    w.$emit("edit-part", c),
                                                },
                                                "編集",
                                                8,
                                                un
                                              ),
                                              e.createElementVNode(
                                                "button",
                                                {
                                                  class: "zero-code-delete-btn",
                                                  onClick: (l) =>
                                                    w.$emit("delete-part", c),
                                                },
                                                "削除",
                                                8,
                                                mn
                                              ),
                                            ]),
                                          ]),
                                          e.createElementVNode(
                                            "div",
                                            {
                                              class:
                                                "zero-code-component-preview",
                                              innerHTML:
                                                w.renderComponentWithNested(
                                                  E,
                                                  c
                                                ),
                                            },
                                            null,
                                            8,
                                            fn
                                          ),
                                          e.createElementVNode("div", gn, [
                                            e.createElementVNode(
                                              "button",
                                              {
                                                class:
                                                  "zero-code-add-part-button",
                                                onClick: (l) =>
                                                  w.$emit("add-part", c + 1),
                                              },
                                              N[5] ||
                                                (N[5] = [
                                                  e.createElementVNode(
                                                    "span",
                                                    {
                                                      class:
                                                        "zero-code-plus-icon",
                                                    },
                                                    "＋",
                                                    -1
                                                  ),
                                                  e.createElementVNode(
                                                    "span",
                                                    {
                                                      class:
                                                        "zero-code-button-text",
                                                    },
                                                    "パーツを追加",
                                                    -1
                                                  ),
                                                ]),
                                              8,
                                              hn
                                            ),
                                          ]),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue", "disabled"]
                          ),
                        ]))
                      : (e.openBlock(),
                        e.createElementBlock("div", yn, [
                          e.createElementVNode("div", bn, [
                            N[7] ||
                              (N[7] = e.createElementVNode(
                                "p",
                                { class: "zero-code-empty-message" },
                                "パーツがありません",
                                -1
                              )),
                            e.createElementVNode("div", En, [
                              e.createElementVNode(
                                "button",
                                {
                                  class: "zero-code-add-part-button",
                                  onClick:
                                    N[2] ||
                                    (N[2] = (E) => w.$emit("add-part", 0)),
                                },
                                N[6] ||
                                  (N[6] = [
                                    e.createElementVNode(
                                      "span",
                                      { class: "zero-code-plus-icon" },
                                      "＋",
                                      -1
                                    ),
                                    e.createElementVNode(
                                      "span",
                                      { class: "zero-code-button-text" },
                                      "最初のパーツを追加",
                                      -1
                                    ),
                                  ])
                              ),
                            ]),
                          ]),
                        ])),
                  ]))
                : e.createCommentVNode("", !0),
              w.modelValue === "page"
                ? (e.openBlock(),
                  e.createElementBlock("div", $n, [
                    e.createElementVNode("div", wn, [
                      e.createElementVNode("div", zn, [
                        e.createElementVNode("div", vn, [
                          N[8] ||
                            (N[8] = e.createElementVNode(
                              "h4",
                              {
                                style: {
                                  margin: "0 0 16px 0",
                                  color: "#374151",
                                  "font-size": "1.1rem",
                                },
                              },
                              "Pageデータ（リアルタイム更新）",
                              -1
                            )),
                          e.createElementVNode(
                            "pre",
                            Nn,
                            e.toDisplayString(C.value),
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]))
                : e.createCommentVNode("", !0),
            ]),
          ])
        );
      },
    }),
    kn = { class: "zero-code-modal-header" },
    An = { class: "zero-code-data-tabs" },
    Pn = ["onClick"],
    Sn = { class: "zero-code-modal-body" },
    _n = { key: 0, class: "zero-code-parts-section" },
    In = { key: 0, class: "zero-code-parts-list" },
    Dn = { class: "zero-code-part-section-title" },
    Tn = { class: "zero-code-modules-grid" },
    Vn = ["onClick"],
    Bn = { class: "zero-code-module-title" },
    Mn = ["innerHTML"],
    Fn = { key: 1, class: "zero-code-empty-state" },
    On = { key: 1, class: "zero-code-parts-section" },
    Ln = { key: 0, class: "zero-code-parts-list" },
    xn = { class: "zero-code-part-section-title" },
    Rn = { class: "zero-code-modules-grid" },
    Hn = ["onClick"],
    Zn = { class: "zero-code-module-title" },
    jn = ["innerHTML"],
    Un = { key: 1, class: "zero-code-empty-state" },
    qo = e.defineComponent({
      __name: "PartSelector",
      props: {
        parts: { type: Array },
        isNested: { type: Boolean, default: !1 },
      },
      emits: ["close", "select-part"],
      setup(t, { emit: r }) {
        const o = t,
          n = e.ref("common"),
          a = ["common", "individual"],
          g = (w) => ({ common: "共通パーツ", individual: "個別パーツ" }[w]),
          y = e.computed(() =>
            o.parts
              .map((w) => ({
                ...w,
                module: w.module.filter((N) => {
                  const E = N;
                  return !E.category || E.category === "common";
                }),
              }))
              .filter((w) => w.module.length > 0)
          ),
          d = e.computed(() =>
            o.parts
              .map((w) => ({
                ...w,
                module: w.module.filter((N) => N.category === "individual"),
              }))
              .filter((w) => w.module.length > 0)
          ),
          h = r,
          C = (w, N) => {
            h("select-part", w, N);
          },
          v = (w) => {
            if (!w) return "";
            try {
              let N = w;
              return (
                (N = N.replace(
                  /@slot\(\$[^)]+\)@/g,
                  '<div class="zero-code-slot-placeholder">ネストコンテンツ</div>'
                )),
                (N = N.replace(
                  /\{\$([^:]+):([^}]*)\}/g,
                  (E, c, l) =>
                    ({
                      title: "サンプルタイトル",
                      text: "サンプルテキストです。",
                      image: "/sample-image.jpg",
                      link: "#",
                      url: "https://example.com",
                      alt: "サンプル画像",
                      content: "サンプルコンテンツ",
                      description: "サンプル説明文です。",
                    }[c] ||
                    l ||
                    `[${c}]`)
                )),
                (N = N.replace(
                  /\(\$([^:]+):([^)]+)\)/g,
                  (E, c, l) => l.split("|").filter((s) => s.trim())[0] || ""
                )),
                (N = N.replace(
                  /\(\$([^:?]+)\?:([^)]*)\)/g,
                  (E, c, l) => l || ""
                )),
                (N = N.replace(/z-for-wrapper="[^"]*"/g, "")),
                (N = N.replace(/z-for="[^"]*"/g, "")),
                (N = N.replace(/z-slot="[^"]*"/g, "")),
                (N = N.replace(
                  /\$(\w+)/g,
                  (E, c) =>
                    ({
                      title: "タイトル",
                      text: "テキスト",
                      content: "コンテンツ",
                    }[c] || `[${c}]`)
                )),
                N
              );
            } catch {
              return w;
            }
          };
        return (w, N) => (
          e.openBlock(),
          e.createElementBlock(
            "div",
            {
              class: "zero-code-modal-overlay",
              onClick: N[2] || (N[2] = (E) => w.$emit("close")),
            },
            [
              e.createElementVNode(
                "div",
                {
                  class: "zero-code-modal-content",
                  onClick: N[1] || (N[1] = e.withModifiers(() => {}, ["stop"])),
                },
                [
                  e.createElementVNode("div", kn, [
                    e.createElementVNode(
                      "h4",
                      null,
                      e.toDisplayString(
                        o.isNested ? "ネストパーツを選択" : "パーツを選択"
                      ),
                      1
                    ),
                    e.createElementVNode(
                      "button",
                      {
                        class: "zero-code-close-button",
                        onClick: N[0] || (N[0] = (E) => w.$emit("close")),
                      },
                      "✖️"
                    ),
                  ]),
                  e.createElementVNode("div", An, [
                    (e.openBlock(),
                    e.createElementBlock(
                      e.Fragment,
                      null,
                      e.renderList(a, (E) =>
                        e.createElementVNode(
                          "button",
                          {
                            key: E,
                            class: e.normalizeClass([
                              "zero-code-data-tab-button",
                              { active: n.value === E },
                            ]),
                            onClick: (c) => (n.value = E),
                          },
                          e.toDisplayString(g(E)),
                          11,
                          Pn
                        )
                      ),
                      64
                    )),
                  ]),
                  e.createElementVNode("div", Sn, [
                    n.value === "common"
                      ? (e.openBlock(),
                        e.createElementBlock("div", _n, [
                          y.value.length > 0
                            ? (e.openBlock(),
                              e.createElementBlock("div", In, [
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    y.value,
                                    (E, c) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "div",
                                        {
                                          key: c,
                                          class: "zero-code-part-section",
                                        },
                                        [
                                          e.createElementVNode(
                                            "h5",
                                            Dn,
                                            e.toDisplayString(E.type),
                                            1
                                          ),
                                          e.createElementVNode("div", Tn, [
                                            (e.openBlock(!0),
                                            e.createElementBlock(
                                              e.Fragment,
                                              null,
                                              e.renderList(
                                                E.module,
                                                (l, f) => (
                                                  e.openBlock(),
                                                  e.createElementBlock(
                                                    "div",
                                                    {
                                                      key: f,
                                                      class:
                                                        "zero-code-module-card",
                                                      onClick: (s) =>
                                                        C(E.type, l),
                                                    },
                                                    [
                                                      e.createElementVNode(
                                                        "div",
                                                        Bn,
                                                        e.toDisplayString(
                                                          l.title
                                                        ),
                                                        1
                                                      ),
                                                      e.createElementVNode(
                                                        "div",
                                                        {
                                                          class:
                                                            "zero-code-module-preview",
                                                          innerHTML: v(l.body),
                                                        },
                                                        null,
                                                        8,
                                                        Mn
                                                      ),
                                                    ],
                                                    8,
                                                    Vn
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]))
                            : (e.openBlock(),
                              e.createElementBlock(
                                "div",
                                Fn,
                                N[3] ||
                                  (N[3] = [
                                    e.createElementVNode(
                                      "p",
                                      null,
                                      "共通パーツが登録されていません。",
                                      -1
                                    ),
                                  ])
                              )),
                        ]))
                      : e.createCommentVNode("", !0),
                    n.value === "individual"
                      ? (e.openBlock(),
                        e.createElementBlock("div", On, [
                          d.value.length > 0
                            ? (e.openBlock(),
                              e.createElementBlock("div", Ln, [
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    d.value,
                                    (E, c) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "div",
                                        {
                                          key: c,
                                          class: "zero-code-part-section",
                                        },
                                        [
                                          e.createElementVNode(
                                            "h5",
                                            xn,
                                            e.toDisplayString(E.type),
                                            1
                                          ),
                                          e.createElementVNode("div", Rn, [
                                            (e.openBlock(!0),
                                            e.createElementBlock(
                                              e.Fragment,
                                              null,
                                              e.renderList(
                                                E.module,
                                                (l, f) => (
                                                  e.openBlock(),
                                                  e.createElementBlock(
                                                    "div",
                                                    {
                                                      key: f,
                                                      class:
                                                        "zero-code-module-card",
                                                      onClick: (s) =>
                                                        C(E.type, l),
                                                    },
                                                    [
                                                      e.createElementVNode(
                                                        "div",
                                                        Zn,
                                                        e.toDisplayString(
                                                          l.title
                                                        ),
                                                        1
                                                      ),
                                                      e.createElementVNode(
                                                        "div",
                                                        {
                                                          class:
                                                            "zero-code-module-preview",
                                                          innerHTML: v(l.body),
                                                        },
                                                        null,
                                                        8,
                                                        jn
                                                      ),
                                                    ],
                                                    8,
                                                    Hn
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]))
                            : (e.openBlock(),
                              e.createElementBlock(
                                "div",
                                Un,
                                N[4] ||
                                  (N[4] = [
                                    e.createElementVNode(
                                      "p",
                                      null,
                                      "個別パーツが登録されていません。",
                                      -1
                                    ),
                                  ])
                              )),
                        ]))
                      : e.createCommentVNode("", !0),
                  ]),
                ]
              ),
            ]
          )
        );
      },
    }),
    Wn = { class: "zero-code-array-field" },
    Xn = { class: "zero-code-array-header" },
    Yn = { key: 0, class: "zero-code-empty-array-message" },
    Kn = { class: "zero-code-empty-message-content" },
    Jn = { class: "zero-code-empty-text" },
    qn = { class: "zero-code-button-text" },
    Gn = ["onDragstart", "onDrop"],
    Qn = { class: "zero-code-array-item-header" },
    ea = { class: "zero-code-array-item-controls" },
    ta = ["onClick"],
    oa = { class: "zero-code-array-item-fields" },
    ra = ["for"],
    na = { key: 0, class: "zero-code-radio-group" },
    aa = ["id", "value", "name", "checked", "onChange"],
    sa = ["for"],
    la = { key: 1, class: "zero-code-checkbox-group" },
    ia = ["id", "checked", "onChange"],
    da = ["for"],
    ca = ["id", "value", "onInput"],
    pa = ["value"],
    ua = ["id", "value", "onChange"],
    ma = ["value", "selected"],
    fa = ["id", "value", "onInput"],
    ga = ["id", "value", "type", "onInput"],
    ha = { key: 0, class: "zero-code-nested-array-field" },
    ya = { class: "zero-code-nested-array-label" },
    ba = { class: "zero-code-nested-array-info" },
    Ea = { class: "zero-code-array-count" },
    $a = ["onClick"],
    wa = e.defineComponent({
      __name: "ArrayFieldEditor",
      props: {
        componentId: { type: String },
        arrayKey: { type: String },
        items: { type: Array },
        fields: { type: Object },
        label: { type: String },
        itemLabel: { type: String },
      },
      emits: ["add", "remove", "update", "reorder", "edit-nested"],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = (E, c, l) => {
            n("update", E, c, l);
          },
          g = (E, c, l) => {
            const f = E[c];
            return Array.isArray(f) && f.includes(l);
          },
          y = (E, c, l, f) => {
            let i = o.items[E][c] || [];
            Array.isArray(i) || (i = []),
              f
                ? i.includes(l) || (i = [...i, l])
                : (i = i.filter((p) => p !== l)),
              n("update", E, c, i);
          };
        let d = null;
        const h = (E, c) => {
            (d = c),
              E.dataTransfer &&
                ((E.dataTransfer.effectAllowed = "move"),
                E.dataTransfer.setData("text/plain", c.toString()));
            const l = E.target;
            l.style.opacity = "0.5";
          },
          C = (E) => {
            E.preventDefault(),
              E.dataTransfer && (E.dataTransfer.dropEffect = "move");
          },
          v = (E, c) => {
            E.preventDefault(),
              d !== null && d !== c && n("reorder", d, c),
              (d = null);
          },
          w = (E) => {
            const c = E.target;
            (c.style.opacity = "1"), (d = null);
          },
          N = (E, c) =>
            !Array.isArray(c) ||
            E === "id" ||
            ["nested_parts", "content"].includes(E)
              ? !1
              : c.length > 0 && typeof c[0] == "object" && c[0] !== null;
        return (E, c) => (
          e.openBlock(),
          e.createElementBlock("div", Wn, [
            e.createElementVNode("div", Xn, [
              e.createElementVNode("h5", null, e.toDisplayString(E.label), 1),
              e.createElementVNode(
                "button",
                {
                  class: "zero-code-btn zero-code-add-array-item",
                  onClick: c[0] || (c[0] = (l) => E.$emit("add")),
                },
                "+ 追加"
              ),
            ]),
            E.items.length === 0
              ? (e.openBlock(),
                e.createElementBlock("div", Yn, [
                  e.createElementVNode("div", Kn, [
                    e.createElementVNode(
                      "p",
                      Jn,
                      e.toDisplayString(E.label) + "はまだ追加されていません",
                      1
                    ),
                    e.createElementVNode(
                      "button",
                      {
                        class: "zero-code-btn zero-code-add-array-item-empty",
                        onClick: c[1] || (c[1] = (l) => E.$emit("add")),
                      },
                      [
                        c[2] ||
                          (c[2] = e.createElementVNode(
                            "span",
                            { class: "zero-code-plus-icon" },
                            "＋",
                            -1
                          )),
                        e.createElementVNode(
                          "span",
                          qn,
                          "最初の" + e.toDisplayString(E.label) + "を追加",
                          1
                        ),
                      ]
                    ),
                  ]),
                ]))
              : e.createCommentVNode("", !0),
            (e.openBlock(!0),
            e.createElementBlock(
              e.Fragment,
              null,
              e.renderList(
                E.items,
                (l, f) => (
                  e.openBlock(),
                  e.createElementBlock(
                    "div",
                    {
                      key: (l == null ? void 0 : l.id) || f,
                      class: "zero-code-array-item",
                      draggable: "true",
                      onDragstart: (s) => h(s, f),
                      onDragover: C,
                      onDrop: (s) => v(s, f),
                      onDragend: w,
                    },
                    [
                      e.createElementVNode("div", Qn, [
                        e.createElementVNode("div", ea, [
                          c[3] ||
                            (c[3] = e.createElementVNode(
                              "span",
                              { class: "zero-code-drag-handle" },
                              "⠿",
                              -1
                            )),
                          e.createElementVNode(
                            "h6",
                            null,
                            e.toDisplayString(E.itemLabel) +
                              " " +
                              e.toDisplayString(f + 1),
                            1
                          ),
                        ]),
                        e.createElementVNode(
                          "button",
                          {
                            class: "zero-code-btn zero-code-remove-array-item",
                            onClick: (s) => E.$emit("remove", f),
                          },
                          "削除",
                          8,
                          ta
                        ),
                      ]),
                      e.createElementVNode("div", oa, [
                        (e.openBlock(!0),
                        e.createElementBlock(
                          e.Fragment,
                          null,
                          e.renderList(
                            E.fields,
                            (s, i) => (
                              e.openBlock(),
                              e.createElementBlock(
                                "div",
                                { key: i, class: "zero-code-field-group" },
                                [
                                  e.createElementVNode(
                                    "label",
                                    {
                                      for: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                    },
                                    e.toDisplayString(s.label) + ": ",
                                    9,
                                    ra
                                  ),
                                  s.type === "radio" &&
                                  s.options &&
                                  s.options.length > 0
                                    ? (e.openBlock(),
                                      e.createElementBlock("div", na, [
                                        (e.openBlock(!0),
                                        e.createElementBlock(
                                          e.Fragment,
                                          null,
                                          e.renderList(
                                            s.options,
                                            (p) => (
                                              e.openBlock(),
                                              e.createElementBlock(
                                                "div",
                                                {
                                                  key: p,
                                                  class: "zero-code-radio-item",
                                                },
                                                [
                                                  e.createElementVNode(
                                                    "input",
                                                    {
                                                      id: `${E.componentId}_${E.arrayKey}_${f}_${i}_${p}`,
                                                      value: p,
                                                      type: "radio",
                                                      name: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                                      class:
                                                        "zero-code-radio-input",
                                                      checked:
                                                        l[i] === p ||
                                                        (p === "指定なし" &&
                                                          !l[i]),
                                                      onChange: (m) =>
                                                        a(
                                                          f,
                                                          i,
                                                          p === "指定なし"
                                                            ? ""
                                                            : p
                                                        ),
                                                    },
                                                    null,
                                                    40,
                                                    aa
                                                  ),
                                                  e.createElementVNode(
                                                    "label",
                                                    {
                                                      for: `${E.componentId}_${E.arrayKey}_${f}_${i}_${p}`,
                                                      class:
                                                        "zero-code-radio-label",
                                                    },
                                                    e.toDisplayString(p),
                                                    9,
                                                    sa
                                                  ),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]))
                                    : e.createCommentVNode("", !0),
                                  s.type === "checkbox" &&
                                  s.options &&
                                  s.options.length > 0
                                    ? (e.openBlock(),
                                      e.createElementBlock("div", la, [
                                        (e.openBlock(!0),
                                        e.createElementBlock(
                                          e.Fragment,
                                          null,
                                          e.renderList(
                                            s.options,
                                            (p) => (
                                              e.openBlock(),
                                              e.createElementBlock(
                                                "div",
                                                {
                                                  key: p,
                                                  class:
                                                    "zero-code-checkbox-item",
                                                },
                                                [
                                                  e.createElementVNode(
                                                    "input",
                                                    {
                                                      id: `${E.componentId}_${E.arrayKey}_${f}_${i}_${p}`,
                                                      checked: g(l, i, p),
                                                      type: "checkbox",
                                                      class:
                                                        "zero-code-checkbox-input",
                                                      onChange: (m) => {
                                                        const $ = m.target;
                                                        y(f, i, p, $.checked);
                                                      },
                                                    },
                                                    null,
                                                    40,
                                                    ia
                                                  ),
                                                  e.createElementVNode(
                                                    "label",
                                                    {
                                                      for: `${E.componentId}_${E.arrayKey}_${f}_${i}_${p}`,
                                                      class:
                                                        "zero-code-checkbox-label",
                                                    },
                                                    e.toDisplayString(p),
                                                    9,
                                                    da
                                                  ),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]))
                                    : s.type === "select"
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        "select",
                                        {
                                          key: 2,
                                          id: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                          value: l[i],
                                          class:
                                            "zero-code-field-input zero-code-select-input",
                                          onInput: (p) => {
                                            const m = p.target;
                                            a(f, i, m.value);
                                          },
                                        },
                                        [
                                          (e.openBlock(!0),
                                          e.createElementBlock(
                                            e.Fragment,
                                            null,
                                            e.renderList(
                                              s.options,
                                              (p) => (
                                                e.openBlock(),
                                                e.createElementBlock(
                                                  "option",
                                                  { key: p, value: p },
                                                  e.toDisplayString(p),
                                                  9,
                                                  pa
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        40,
                                        ca
                                      ))
                                    : s.type === "select-multiple"
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        "select",
                                        {
                                          key: 3,
                                          id: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                          value: l[i] || s.defaultValue,
                                          multiple: "",
                                          class:
                                            "zero-code-field-input zero-code-select-multiple",
                                          onChange: (p) => {
                                            const m = p.target,
                                              $ = Array.from(
                                                m.selectedOptions
                                              ).map((z) => z.value);
                                            a(f, i, $);
                                          },
                                        },
                                        [
                                          (e.openBlock(!0),
                                          e.createElementBlock(
                                            e.Fragment,
                                            null,
                                            e.renderList(
                                              s.options,
                                              (p) => (
                                                e.openBlock(),
                                                e.createElementBlock(
                                                  "option",
                                                  {
                                                    key: p,
                                                    value: p,
                                                    selected:
                                                      Array.isArray(l[i]) &&
                                                      l[i].includes(p),
                                                  },
                                                  e.toDisplayString(p),
                                                  9,
                                                  ma
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        40,
                                        ua
                                      ))
                                    : s.type === "textarea"
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        "textarea",
                                        {
                                          key: 4,
                                          id: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                          value: l[i],
                                          class:
                                            "zero-code-field-input zero-code-field-textarea",
                                          onInput: (p) => {
                                            const m = p.target;
                                            a(f, i, m.value);
                                          },
                                        },
                                        null,
                                        40,
                                        fa
                                      ))
                                    : s.type === "text" || s.type === "number"
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        "input",
                                        {
                                          key: 5,
                                          id: `${E.componentId}_${E.arrayKey}_${f}_${i}`,
                                          value: l[i],
                                          type:
                                            s.type === "text" ? "text" : s.type,
                                          class: "zero-code-field-input",
                                          onInput: (p) => {
                                            const m = p.target;
                                            a(f, i, m.value);
                                          },
                                        },
                                        null,
                                        40,
                                        ga
                                      ))
                                    : e.createCommentVNode("", !0),
                                ]
                              )
                            )
                          ),
                          128
                        )),
                        (e.openBlock(!0),
                        e.createElementBlock(
                          e.Fragment,
                          null,
                          e.renderList(
                            l,
                            (s, i) => (
                              e.openBlock(),
                              e.createElementBlock(
                                e.Fragment,
                                { key: `nested_${i}` },
                                [
                                  Array.isArray(s) && i !== "id" && N(i, s)
                                    ? (e.openBlock(),
                                      e.createElementBlock("div", ha, [
                                        e.createElementVNode(
                                          "h6",
                                          ya,
                                          e.toDisplayString(i) +
                                            " (ネスト配列)",
                                          1
                                        ),
                                        e.createElementVNode("div", ba, [
                                          e.createElementVNode(
                                            "span",
                                            Ea,
                                            e.toDisplayString(s.length) +
                                              "個の要素",
                                            1
                                          ),
                                          e.createElementVNode(
                                            "button",
                                            {
                                              class:
                                                "zero-code-btn zero-code-edit-nested-array-btn",
                                              title: "ネスト配列を編集",
                                              onClick: (p) =>
                                                E.$emit("edit-nested", f, i),
                                            },
                                            " 編集 ",
                                            8,
                                            $a
                                          ),
                                        ]),
                                      ]))
                                    : e.createCommentVNode("", !0),
                                ],
                                64
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ],
                    40,
                    Gn
                  )
                )
              ),
              128
            )),
          ])
        );
      },
    }),
    S = {
      debug: (t, ...r) => {},
      info: (t, ...r) => {},
      warn: (t, ...r) => {},
      error: (t, ...r) => {},
      success: (t, ...r) => {},
      process: (t, ...r) => {},
      time: (t) => {},
      timeEnd: (t) => {},
      group: (t) => {},
      groupEnd: () => {},
    };
  var oe = ((t) => (
    (t.VALIDATION = "VALIDATION"),
    (t.NETWORK = "NETWORK"),
    (t.COMPONENT = "COMPONENT"),
    (t.TEMPLATE = "TEMPLATE"),
    (t.FILE = "FILE"),
    (t.PERMISSION = "PERMISSION"),
    (t.IMAGE_LOAD_FAILED = "IMAGE_LOAD_FAILED"),
    (t.UNKNOWN = "UNKNOWN"),
    (t.NETWORK_ERROR = "NETWORK"),
    (t.VALIDATION_ERROR = "VALIDATION"),
    (t.PERMISSION_ERROR = "PERMISSION"),
    (t.COMPONENT_ERROR = "COMPONENT"),
    (t.TEMPLATE_PARSE_ERROR = "TEMPLATE"),
    (t.UNKNOWN_ERROR = "UNKNOWN"),
    t
  ))(oe || {});
  class za {
    constructor() {
      zt(this, "errorHistory", []);
      zt(this, "maxHistorySize", 100);
    }
    handleError(r, o, n, a, g) {
      const y = {
        type: r,
        message: o,
        details: n,
        componentId: a,
        action: g,
        timestamp: Date.now(),
      };
      return (
        this.errorHistory.unshift(y),
        this.errorHistory.length > this.maxHistorySize &&
          (this.errorHistory = this.errorHistory.slice(0, this.maxHistorySize)),
        r === "VALIDATION" || r === "PERMISSION"
          ? S.warn(`[${r}] ${o}`, n)
          : S.error(`[${r}] ${o}`, n),
        y
      );
    }
    componentError(r, o, n) {
      return this.handleError("COMPONENT", r, n, o, "component_operation");
    }
    templateError(r, o) {
      return this.handleError("TEMPLATE", r, o, void 0, "template_processing");
    }
    validationError(r, o) {
      return this.handleError("VALIDATION", r, o, void 0, "validation");
    }
    fileError(r, o) {
      return this.handleError("FILE", r, o, void 0, "file_operation");
    }
    networkError(r, o) {
      return this.handleError("NETWORK", r, o, void 0, "network_request");
    }
    permissionError(r, o) {
      return this.handleError("PERMISSION", r, o, void 0, "permission_check");
    }
    unknownError(r, o) {
      return this.handleError("UNKNOWN", r, o, void 0, "unknown");
    }
    getErrorHistory() {
      return [...this.errorHistory];
    }
    getErrorsByType(r) {
      return this.errorHistory.filter((o) => o.type === r);
    }
    clearHistory() {
      (this.errorHistory = []), S.debug("エラー履歴をクリアしました");
    }
    getErrorStats() {
      const r = Object.values(oe).reduce((o, n) => ((o[n] = 0), o), {});
      return (
        this.errorHistory.forEach((o) => {
          r[o.type]++;
        }),
        r
      );
    }
  }
  function Be(t, r, o, n = "UNKNOWN") {
    try {
      return t();
    } catch (a) {
      return r.handleError(n, o, a), null;
    }
  }
  const Me = new za(),
    va = ["content", "nested_parts"],
    Go = [
      "_isZForItem",
      "_parentComponentId",
      "_arrayName",
      "_arrayIndex",
      "_zForTemplate",
    ];
  function Lt(t) {
    const r = (u, b) => {
        if (b.length === 0 || b[0] >= u.length) return null;
        let k = u[b[0]];
        for (let P = 1; P < b.length; P++) {
          if (
            !k.nested_parts ||
            !Array.isArray(k.nested_parts) ||
            b[P] >= k.nested_parts.length
          )
            return null;
          k = k.nested_parts[b[P]];
        }
        return k;
      },
      o = (u, b) => {
        if (b.length === 1) return u;
        let k = u[b[0]];
        for (let P = 1; P < b.length - 1; P++) {
          if (!k.nested_parts || !Array.isArray(k.nested_parts)) return [];
          k = k.nested_parts[b[P]];
        }
        return k.nested_parts || [];
      },
      n = (u) => u.split("-").map(Number),
      a = (u) => u.join("-"),
      g = (u, b, k = []) => {
        if (
          (S.debug(
            `findComponentRecursively: 検索開始 - componentId=${b}, depth=${k.length}`
          ),
          !u || !Array.isArray(u))
        )
          return (
            S.debug(
              `findComponentRecursively: 無効なデータ - data=${u}, isArray=${Array.isArray(
                u
              )}`
            ),
            null
          );
        S.debug(
          `findComponentRecursively: ${u.length}個のコンポーネントを検索中`
        );
        for (let P = 0; P < u.length; P++) {
          const _ = u[P],
            D = [...k, P];
          if (
            (S.debug(
              `findComponentRecursively: [${P}] チェック中 - id=${_.id}, type=${_.type}`
            ),
            _.id === b)
          )
            return (
              S.success(
                `findComponentRecursively: 発見！ - ${b} at path=${D.join("-")}`
              ),
              _
            );
          if (_.nested_parts && Array.isArray(_.nested_parts)) {
            S.debug(
              `findComponentRecursively: nested_parts検索 - ${_.id} (${_.nested_parts.length}個)`
            );
            const I = g(_.nested_parts, b, D);
            if (I) return I;
          }
          const M = Object.keys(_);
          for (const I of M) {
            const V = _[I];
            if (Array.isArray(V) && I !== "nested_parts") {
              S.debug(
                `findComponentRecursively: z-for配列検索 - ${_.id}.${I} (${V.length}個)`
              );
              for (let H = 0; H < V.length; H++) {
                const F = V[H];
                if (F && typeof F == "object" && F.id) {
                  if (
                    (S.debug(
                      `findComponentRecursively: z-for配列アイテム - ${F.id} in ${_.id}.${I}[${H}]`
                    ),
                    F.id === b)
                  )
                    return (
                      S.success(
                        `findComponentRecursively: z-for配列アイテムで発見！ - ${b}`
                      ),
                      F
                    );
                  if (F.nested_parts && Array.isArray(F.nested_parts)) {
                    S.debug(
                      `findComponentRecursively: z-for配列アイテムのネストパーツ検索 - ${F.id}.nested_parts (${F.nested_parts.length}個)`
                    );
                    const X = g(F.nested_parts, b, [...D, H]);
                    if (X)
                      return (
                        S.success(
                          `findComponentRecursively: z-for配列内のネストパーツで発見！ - ${b}`
                        ),
                        X
                      );
                  }
                }
              }
            }
          }
        }
        return S.debug(`findComponentRecursively: 未発見 - ${b}`), null;
      },
      y = (u, b) =>
        Be(
          () => {
            if (!Array.isArray(t)) throw new Error("Parts配列が無効です");
            if (!u || !b)
              throw new Error("Type または ModuleName が指定されていません");
            const k = t.find((_) => _.type === u);
            if (!k) throw new Error(`パーツタイプ "${u}" が見つかりません`);
            const P = k.module.find((_) => _.title === b);
            if (!P)
              throw new Error(
                `モジュール "${b}" が見つかりません (type: ${u})`
              );
            return P.body;
          },
          Me,
          `テンプレート取得エラー: ${u}/${b}`,
          oe.TEMPLATE
        ) || "",
      d = new Set(),
      h = (u, b) => {
        S.debug(`extractZForTemplate開始: arrayName=${b}`);
        const k = new RegExp(`<div[^>]*z-for="${b}"[^>]*>`),
          P = u.match(k);
        if (!P)
          return (
            S.warn(`z-for="${b}" 開始タグが見つかりません`),
            S.debug("親テンプレート内容:", u.substring(0, 500)),
            ""
          );
        const _ = u.indexOf(P[0]);
        let D = 0,
          M = _,
          I = _;
        for (; I < u.length; )
          if (u.substring(I, I + 4) === "<div") {
            const H = u.indexOf(">", I);
            H !== -1 ? (D++, (I = H + 1)) : I++;
          } else if (u.substring(I, I + 6) === "</div>") {
            if ((D--, D === 0)) {
              M = I + 6;
              break;
            }
            I += 6;
          } else I++;
        if (D !== 0)
          return (
            S.warn(
              `z-for="${b}" の対応する終了タグが見つかりません（深度: ${D}）`
            ),
            ""
          );
        const V = u.substring(_, M).trim();
        return (
          S.debug(`z-for内テンプレート抽出成功: ${b}`, {
            extractedContent: V.substring(0, 200),
            fullContent: V,
            startIndex: _,
            endIndex: M,
            depth: 0,
          }),
          V
        );
      },
      C = () =>
        "comp_" +
        Math.random().toString(36).substring(2, 11) +
        Date.now().toString(36),
      v = (u) => {
        const b = `${u.id}_${u.type}_${u.module_name}`;
        if (d.has(b))
          return (
            S.warn(`getFieldInfo: 無限ループを検出、処理をスキップ: ${b}`), []
          );
        d.add(b);
        try {
          let k = y(u.type, u.module_name);
          if (!k) return [];
          if (
            (S.debug(
              `getFieldInfo: component.id=${u.id}, type=${u.type}, module=${u.module_name}`
            ),
            S.debug(`getFieldInfo: _isZForItem=${u._isZForItem}`),
            u._isZForItem)
          ) {
            const I = u._arrayName;
            if (
              (S.debug(`getFieldInfo: z-for配列要素を検出, arrayName=${I}`),
              S.debug("getFieldInfo: componentプロパティ:", Object.keys(u)),
              I)
            ) {
              S.debug("getFieldInfo: 元のテンプレート:", k.substring(0, 300));
              const V = h(k, I);
              V
                ? ((k = V),
                  S.debug("getFieldInfo: z-for内テンプレート抽出完了:", k))
                : S.warn(
                    `getFieldInfo: z-for内テンプレートの抽出に失敗: arrayName=${I}`
                  );
            }
          } else S.debug("getFieldInfo: 通常のコンポーネント処理");
          const P = [],
            _ = k.match(/\(\$([^:]+):(.*?)\)/g) || [],
            D = [];
          if (k.includes("z-for=")) {
            const I = /<div[^>]*z-for="([^"]+)"[^>]*>/g;
            let V;
            for (; (V = I.exec(k)) !== null; ) {
              const H = V[1],
                F = V.index;
              let X = 0,
                L = F,
                x = F;
              for (; x < k.length; ) {
                if (k.substring(x, x + 4) === "<div") X++;
                else if (k.substring(x, x + 6) === "</div>" && (X--, X === 0)) {
                  L = x + 6;
                  break;
                }
                x++;
              }
              if (X === 0) {
                const ee = k.substring(F, L).match(/\(\$([^:]+):(.*?)\)/g);
                ee &&
                  ee.forEach((Ae) => {
                    const Ie = Ae.match(/\(\$([^:]+):(.*?)\)/);
                    if (Ie) {
                      const ge = Ie[1].replace("?", "");
                      D.push(ge);
                    }
                  });
              }
            }
          }
          D.length > 0 && S.debug("z-for配列内のフィールドを除外:", D);
          let M;
          return (
            u._isZForItem
              ? (M = _.filter((I) => {
                  const V = I.match(/\(\$([^:]+):(.*?)\)/);
                  if (V) {
                    const H = V[1].replace("?", ""),
                      F = D.includes(H);
                    return (
                      F &&
                        S.debug(
                          `z-for配列アイテム編集: フィールド ${H} を表示`
                        ),
                      F
                    );
                  }
                  return !1;
                }))
              : (M = _.filter((I) => {
                  const V = I.match(/\(\$([^:]+):(.*?)\)/);
                  if (V) {
                    const H = V[1].replace("?", ""),
                      F = D.includes(H);
                    return (
                      F &&
                        S.debug(
                          `フィールド ${H} を z-for内フィールドとして除外`
                        ),
                      !F
                    );
                  }
                  return !0;
                })),
            M.forEach((I) => {
              const V = I.match(/\(\$([^:]+):(.*?)\)/);
              if (V) {
                const [, H, F] = V,
                  X = H.includes("?"),
                  L = H.replace("?", "");
                if (F.includes("|")) {
                  let x = F.split("|"),
                    J = !1;
                  if (
                    ((F.includes("||") ||
                      F.startsWith("|") ||
                      F.endsWith("|")) &&
                      (J = !0),
                    (x = x.filter((ee) => ee.trim() !== "")),
                    J && x.unshift("指定なし"),
                    X)
                  ) {
                    const ee = x.length > 0 ? [x[0]] : [],
                      Ae = {
                        type: "checkbox",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: ee,
                        label: `${L} (チェックボックス)`,
                      };
                    P.push(Ae);
                  } else {
                    const ee = x[0] || "",
                      Ae = {
                        type: "radio",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: ee,
                        label: `${L} (ラジオボタン)`,
                      };
                    P.push(Ae);
                  }
                } else if (F.includes(",")) {
                  const x = F.split(",")
                    .map((J) => J.trim())
                    .filter((J) => J !== "");
                  if (X) {
                    const J = x.length > 0 ? [x[0]] : [],
                      ee = {
                        type: "select-multiple",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: J,
                        label: `${L} (セレクトボックス・複数選択)`,
                      };
                    P.push(ee);
                  } else {
                    const J = x[0] || "",
                      ee = {
                        type: "select",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: J,
                        label: `${L} (セレクトボックス)`,
                      };
                    P.push(ee);
                  }
                } else {
                  const x = {
                    type: "text",
                    paramName: L,
                    propKey: L,
                    options: [],
                    defaultValue: F,
                    label: `${L} (テキストボックス)`,
                  };
                  P.push(x);
                }
              }
            }),
            S.debug(
              `getFieldInfo: 抽出されたフィールド数=${P.length}`,
              P.map((I) => ({ paramName: I.paramName, type: I.type }))
            ),
            P
          );
        } catch (k) {
          return S.error(`getFieldInfo: エラーが発生しました: ${b}`, k), [];
        } finally {
          d.delete(b);
        }
      },
      w = (u, b) => {
        try {
          const k = y(u.type, u.module_name);
          if (!k) return !1;
          let P = k;
          if (u._isZForItem) {
            const I = u._arrayName,
              V = h(k, I);
            V && (P = V);
          }
          const _ = new RegExp(`\\{\\$${b}:[^}]*\\}`),
            D = new RegExp(`\\(\\$${b}:[^)]*\\)`),
            M = new RegExp(`\\(\\$${b}\\?:[^)]*\\)`);
          return _.test(P) || D.test(P) || M.test(P);
        } catch (k) {
          return S.warn(`isTemplateField error for ${b}:`, k), !1;
        }
      },
      N = (u, b) =>
        !!(
          ["content", "nested_parts"].includes(u) ||
          Array.isArray(b) ||
          (typeof b == "object" && b !== null)
        );
    return {
      findComponentByPath: r,
      getParentContainer: o,
      parseHierarchyPath: n,
      stringifyHierarchyPath: a,
      findComponentRecursively: g,
      getTemplate: y,
      generateUniqueId: C,
      getFieldInfo: v,
      isTemplateField: w,
      shouldExcludeField: N,
      shouldShowBasicField: (u, b, k) =>
        u === "id" ||
        u === "type" ||
        u === "module_name" ||
        k._isZForItem ||
        Go.includes(u) ||
        N(u, b) ||
        w(k, u) ||
        b === "" ||
        b === null ||
        b === void 0 ||
        (typeof b == "string" && b.trim() === "") ||
        (typeof b == "number" && b === 0)
          ? !1
          : (typeof b == "string" && b.trim() !== "") ||
            (typeof b == "number" && b !== 0) ||
            typeof b == "boolean",
      shouldShowArrayField: (u, b, k) => {
        const P = `${k.id}_${k.type}_${k.module_name}_array_${u}`;
        if (d.has(P))
          return (
            S.warn(
              `shouldShowArrayField: 無限ループを検出、処理をスキップ: ${P}`
            ),
            !1
          );
        d.add(P);
        try {
          if (
            (S.debug(
              `shouldShowArrayField開始: key=${u}, component: ${k.id} (${k.type}/${k.module_name})`,
              { key: u, value: b, componentId: k.id }
            ),
            va.includes(String(u)))
          )
            return (
              S.debug(
                `shouldShowArrayField: ${u} はシステム内部フィールドのため除外`
              ),
              !1
            );
          if (k._isZForItem && Go.includes(String(u)))
            return (
              S.debug(
                `shouldShowArrayField: ${u} はz-forシステムフィールドのため除外`
              ),
              !1
            );
          if (w(k, u))
            return (
              S.debug(
                `shouldShowArrayField: ${u} はテンプレート記法フィールドのため除外`
              ),
              !1
            );
          const _ = y(k.type, k.module_name);
          if (_) {
            if (
              (S.debug(
                "shouldShowArrayField: テンプレート取得成功:",
                _.substring(0, 200)
              ),
              new RegExp(`z-for="${u}"`).test(_))
            )
              return (
                S.success(
                  `shouldShowArrayField: ${u}はz-for記法で使用されているため編集パネルでは非表示（プレビュー側で編集）`
                ),
                Array.isArray(b) ||
                  (S.debug(
                    `shouldShowArrayField: ${u}は配列でないが、記法で使用されているため空配列で初期化`
                  ),
                  (k[u] = [])),
                !1
              );
            S.debug(`shouldShowArrayField: ${u}は配列記法で使用されていない`);
          } else S.debug("shouldShowArrayField: テンプレート取得失敗");
          return (
            Array.isArray(b) ||
              S.debug(
                `shouldShowArrayField: ${u}は配列でなく、記法でも使用されていない`
              ),
            !1
          );
        } catch (_) {
          return (
            S.error(`shouldShowArrayField: エラーが発生しました: ${P}`, _), !1
          );
        } finally {
          d.delete(P);
        }
      },
      shouldShowArrayItemField: (u, b, k, P, _) =>
        u === "id" ||
        Array.isArray(b) ||
        (typeof b == "object" && b !== null) ||
        b === "" ||
        b === null ||
        b === void 0 ||
        (typeof b == "string" && b.trim() === "") ||
        (typeof b == "number" && b === 0)
          ? !1
          : (y(k.type, k.module_name),
            (typeof b == "string" && b.trim() !== "") ||
              (typeof b == "number" && b !== 0) ||
              typeof b == "boolean"),
      getInputType: (u) =>
        u.includes("url") || u.includes("src")
          ? "url"
          : u.includes("email")
          ? "email"
          : u.includes("number") || u.includes("count")
          ? "number"
          : "text",
      updateCheckboxValue: (u, b, k, P) => {
        u[b] || (u[b] = []);
        const _ = u[b];
        P ? _.includes(k) || _.push(k) : (u[b] = _.filter((D) => D !== k));
      },
      isCheckboxChecked: (u, b, k) => {
        const P = u[b];
        return Array.isArray(P) && P.includes(k);
      },
      addArrayItem: (u, b) => {
        u[b] || (u[b] = []);
        const k = { id: `${b}_${Date.now()}` },
          P = u[b];
        if (P.length > 0) {
          const _ = P[0];
          Object.keys(_).forEach((D) => {
            D !== "id" && (k[D] = typeof _[D] == "string" ? "" : _[D]);
          });
        }
        P.push(k);
      },
      removeArrayItem: (u, b, k) => {
        const P = u[b];
        P && P.length > k && P.splice(k, 1);
      },
      createNewComponent: (u, b) =>
        Be(
          () => {
            if (!u || !b)
              throw new Error("partType または module が指定されていません");
            if (!b.title || !b.body)
              throw new Error("module.title または module.body が無効です");
            const k = C();
            S.debug(`createNewComponent開始: partType=${u}, module=${b.title}`);
            const P = { id: k, type: u, module_name: b.title },
              _ = b.body;
            S.debug("createNewComponent テンプレート:", _.substring(0, 300));
            const D = _.match(/\{\$([^:}]+):([^}]+)\}/g);
            D &&
              D.forEach((H) => {
                const F = H.match(/\{\$([^:}]+):([^}]+)\}/);
                if (F) {
                  const [, X, L] = F;
                  X !== "input" && (P[X] = String(L));
                }
              });
            const M = _.match(/\(\$([^:?]+):(.*?)\)/g);
            M &&
              M.forEach((H) => {
                const F = H.match(/\(\$([^:?]+):(.*?)\)/);
                if (F) {
                  const [, X, L] = F,
                    x = L.split("|").filter((J) => J.trim() !== "");
                  x.length > 0 && (P[X] = String(x[0]));
                }
              });
            const I = _.match(/\(\$([^:?]+)\?:(.*?)\)/g);
            I &&
              I.forEach((H) => {
                const F = H.match(/\(\$([^:?]+)\?:(.*?)\)/);
                if (F) {
                  const [, X, L] = F,
                    x = L.split("|").filter((J) => J.trim() !== "");
                  P[X] = x.length > 0 ? [x[0]] : [];
                }
              });
            const V = _.match(/z-for="([^"]+)"/g);
            return (
              V
                ? (S.debug("createNewComponent: z-for記法発見:", V),
                  V.forEach((H) => {
                    const F = H.match(/z-for="([^"]+)"/);
                    if (F) {
                      const [, X] = F;
                      P[X]
                        ? S.debug(
                            `createNewComponent: z-for配列 ${X} は既に初期化済み`
                          )
                        : (S.debug(
                            `createNewComponent: z-for配列 ${X} を空配列で初期化`
                          ),
                          (P[X] = []));
                    }
                  }))
                : S.debug(
                    "createNewComponent: z-for記法が見つかりませんでした"
                  ),
              S.debug("createNewComponent完了: newComponent=", P),
              P
            );
          },
          Me,
          `コンポーネント作成エラー: ${u}/${b == null ? void 0 : b.title}`,
          oe.COMPONENT
        ) || {
          id: C(),
          type: u || "unknown",
          module_name: (b == null ? void 0 : b.title) || "unknown",
        },
      createArrayItem: (u) => {
        const b = { id: C() },
          k = u.match(/\{\$([^:}]+):([^}]+)\}/g);
        k &&
          k.forEach((_) => {
            const D = _.match(/\{\$([^:}]+):([^}]+)\}/);
            if (D) {
              const [, M, I] = D;
              b[M] = String(I);
            }
          });
        const P = u.match(/\(\$([^:?]+):(.*?)\)/g);
        return (
          P &&
            P.forEach((_) => {
              const D = _.match(/\(\$([^:?]+):(.*?)\)/);
              if (D) {
                const [, M, I] = D,
                  V = I.split("|").filter((H) => H.trim() !== "");
                V.length > 0 && (b[M] = String(V[0]));
              }
            }),
          b
        );
      },
      getArrayItemFieldInfo: (u, b) => {
        const k = y(u.type, u.module_name);
        if (!k) return [];
        const P = [];
        let _ = "";
        const D = h(k, b);
        return (
          D && (_ = D),
          _ &&
            (_.match(/\(\$([^:]+):(.*?)\)/g) || []).forEach((I) => {
              const V = I.match(/\(\$([^:]+):(.*?)\)/);
              if (V) {
                const [, H, F] = V,
                  X = H.includes("?"),
                  L = H.replace("?", "");
                if (F.includes("|")) {
                  let x = F.split("|"),
                    J = !1;
                  if (
                    ((F.includes("||") ||
                      F.startsWith("|") ||
                      F.endsWith("|")) &&
                      (J = !0),
                    (x = x.filter((ee) => ee.trim() !== "")),
                    J && x.unshift("指定なし"),
                    X)
                  ) {
                    const ee = x.length > 0 ? [x[0]] : [],
                      Ae = {
                        type: "checkbox",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: ee,
                        label: `${L} (チェックボックス)`,
                      };
                    P.push(Ae);
                  } else {
                    const ee = x[0] || "",
                      Ae = {
                        type: "radio",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: ee,
                        label: `${L} (ラジオボタン)`,
                      };
                    P.push(Ae);
                  }
                } else if (F.includes(",")) {
                  const x = F.split(",")
                    .map((J) => J.trim())
                    .filter((J) => J !== "");
                  if (X) {
                    const J = x.length > 0 ? [x[0]] : [],
                      ee = {
                        type: "select-multiple",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: J,
                        label: `${L} (セレクトボックス・複数選択)`,
                      };
                    P.push(ee);
                  } else {
                    const J = x[0] || "",
                      ee = {
                        type: "select",
                        paramName: L,
                        propKey: L,
                        options: x,
                        defaultValue: J,
                        label: `${L} (セレクトボックス)`,
                      };
                    P.push(ee);
                  }
                } else {
                  const x = {
                    type: "text",
                    paramName: L,
                    propKey: L,
                    options: [],
                    defaultValue: F,
                    label: `${L} (テキストボックス)`,
                  };
                  P.push(x);
                }
              }
            }),
          P
        );
      },
    };
  }
  const Na = { class: "zero-code-content-sidebar" },
    Ca = { key: 0, class: "zero-code-editable-component" },
    ka = { class: "zero-code-component-info" },
    Aa = { class: "zero-code-component-type" },
    Pa = { class: "zero-code-component-module" },
    Sa = { class: "zero-code-component-id" },
    _a = { class: "zero-code-fields" },
    Ia = { class: "zero-code-field-label" },
    Da = { key: 0, class: "zero-code-text-group" },
    Ta = ["value", "onInput"],
    Va = { key: 1, class: "zero-code-radio-group" },
    Ba = ["id", "value", "name", "checked", "onChange"],
    Ma = ["for"],
    Fa = { key: 2, class: "zero-code-checkbox-group" },
    Oa = ["id", "checked", "onChange"],
    La = ["for"],
    xa = { key: 3, class: "zero-code-select-group" },
    Ra = ["value", "onChange"],
    Ha = ["value"],
    Za = { key: 4, class: "zero-code-select-multiple-group" },
    ja = ["value", "onChange"],
    Ua = ["value", "selected"],
    Wa = { key: 0, class: "zero-code-field-group" },
    Xa = ["for"],
    Ya = ["id", "value", "type", "readonly", "onInput"],
    Ka = e.defineComponent({
      __name: "EditorPanel",
      props: {
        showEditor: { type: Boolean },
        selectedComponent: { type: [Object, null] },
        getFieldInfo: { type: Function },
        shouldShowBasicField: { type: Function },
        shouldShowArrayField: { type: Function },
        shouldShowArrayItemField: { type: Function },
        getInputType: { type: Function },
        isCheckboxChecked: { type: Function },
        partsData: { type: Array },
      },
      emits: [
        "close",
        "update:value",
        "update:array-item",
        "update:checkbox",
        "add:array-item",
        "remove:array-item",
        "reorder:array-item",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = () => {
            n("close");
          },
          g = (l, f) => {
            n("update:value", l, f);
          },
          y = () => {
            if (!o.selectedComponent) return;
            o.getFieldInfo(o.selectedComponent).forEach((f) => {
              f.defaultValue &&
                !o.selectedComponent[f.propKey] &&
                ((f.type === "checkbox" || f.type === "select-multiple") &&
                Array.isArray(f.defaultValue)
                  ? g(f.propKey, [...f.defaultValue])
                  : g(f.propKey, f.defaultValue));
            });
          };
        e.watch(
          () => o.selectedComponent,
          (l) => {
            l && y();
          },
          { immediate: !0 }
        );
        const d = (l, f, s, i) => {
            if (!o.selectedComponent) return;
            const p = o.selectedComponent[l];
            if (!Array.isArray(p)) return;
            const m = { ...p[f], [s]: i };
            n("update:array-item", l, f, m);
          },
          h = (l, f, s) => {
            n("update:checkbox", l, f, s);
          },
          C = (l, f) => {
            l && n("add:array-item", f);
          },
          v = (l, f, s) => {
            l && n("remove:array-item", f, s);
          },
          w = (l, f, s) => {
            if (!o.selectedComponent) return;
            const i = o.selectedComponent[l];
            if (!Array.isArray(i)) return;
            const p = [...i],
              [m] = p.splice(f, 1);
            p.splice(s, 0, m),
              (o.selectedComponent[l] = p),
              n("reorder:array-item", l, f, s);
          },
          N = (l) => {
            if (!o.selectedComponent) return {};
            const f = {};
            if (o.partsData) {
              const p = Lt(o.partsData).getArrayItemFieldInfo(
                o.selectedComponent,
                l
              );
              if (
                (p.forEach((m) => {
                  f[m.propKey] = {
                    label: m.label,
                    type: m.type,
                    options: m.options,
                    defaultValue: m.defaultValue,
                  };
                }),
                p.length > 0)
              )
                return f;
            }
            const s = o.selectedComponent[l];
            if (Array.isArray(s) && s.length > 0) {
              const i = s[0];
              typeof i == "object" &&
                i !== null &&
                Object.keys(i).forEach((p) => {
                  p !== "id" &&
                    (i[p],
                    (f[p] = {
                      label: p
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (m) => m.toUpperCase()),
                      type:
                        p.includes("desc") || p.includes("content")
                          ? "textarea"
                          : "text",
                    }));
                });
            }
            return Object.keys(f).length === 0
              ? {
                  title: { label: "タイトル", type: "text" },
                  content: { label: "内容", type: "textarea" },
                }
              : f;
          },
          E = (l) =>
            l
              .replace(/_/g, " ")
              .replace(/\b\w/g, (f) => f.toUpperCase())
              .concat(" 一覧"),
          c = (l) => {
            let f = l;
            return (
              l.endsWith("s") && (f = l.slice(0, -1)),
              f.replace(/_/g, " ").replace(/\b\w/g, (s) => s.toUpperCase())
            );
          };
        return (l, f) =>
          l.showEditor && l.selectedComponent
            ? (e.openBlock(),
              e.createElementBlock(
                "div",
                { key: 0, class: "zero-code-overlay", onClick: a },
                [
                  e.createElementVNode(
                    "div",
                    {
                      class: "zero-code-sidebar",
                      onClick:
                        f[0] || (f[0] = e.withModifiers(() => {}, ["stop"])),
                    },
                    [
                      e.createElementVNode(
                        "div",
                        { class: "zero-code-header" },
                        [
                          f[1] ||
                            (f[1] = e.createElementVNode(
                              "h4",
                              null,
                              "コンポーネント編集",
                              -1
                            )),
                          e.createElementVNode(
                            "div",
                            { class: "zero-code-header-buttons" },
                            [
                              e.createElementVNode(
                                "button",
                                {
                                  class: "zero-code-btn zero-code-close-button",
                                  onClick: a,
                                },
                                "✖️"
                              ),
                            ]
                          ),
                        ]
                      ),
                      e.createElementVNode("div", Na, [
                        l.selectedComponent
                          ? (e.openBlock(),
                            e.createElementBlock("div", Ca, [
                              e.createElementVNode("div", ka, [
                                e.createElementVNode(
                                  "span",
                                  Aa,
                                  e.toDisplayString(l.selectedComponent.type),
                                  1
                                ),
                                e.createElementVNode(
                                  "span",
                                  Pa,
                                  e.toDisplayString(
                                    l.selectedComponent.module_name
                                  ),
                                  1
                                ),
                                e.createElementVNode(
                                  "span",
                                  Sa,
                                  "ID: " +
                                    e.toDisplayString(l.selectedComponent.id),
                                  1
                                ),
                              ]),
                              e.createElementVNode("div", _a, [
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    l.getFieldInfo(l.selectedComponent),
                                    (s) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "div",
                                        {
                                          key: s.propKey,
                                          class: "zero-code-template-field",
                                        },
                                        [
                                          e.createElementVNode(
                                            "label",
                                            Ia,
                                            e.toDisplayString(s.label) + ":",
                                            1
                                          ),
                                          s.type === "text"
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", Da, [
                                                e.createElementVNode(
                                                  "input",
                                                  {
                                                    value:
                                                      l.selectedComponent[
                                                        s.propKey
                                                      ] || s.defaultValue,
                                                    type: "text",
                                                    class:
                                                      "zero-code-field-input",
                                                    onInput: (i) => {
                                                      const p = i.target;
                                                      g(s.propKey, p.value);
                                                    },
                                                  },
                                                  null,
                                                  40,
                                                  Ta
                                                ),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                          s.type === "radio"
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", Va, [
                                                (e.openBlock(!0),
                                                e.createElementBlock(
                                                  e.Fragment,
                                                  null,
                                                  e.renderList(
                                                    s.options,
                                                    (i) => (
                                                      e.openBlock(),
                                                      e.createElementBlock(
                                                        "div",
                                                        {
                                                          key: i,
                                                          class:
                                                            "zero-code-radio-item",
                                                        },
                                                        [
                                                          e.createElementVNode(
                                                            "input",
                                                            {
                                                              id: `${l.selectedComponent.id}_${s.propKey}_${i}`,
                                                              value: i,
                                                              type: "radio",
                                                              name: `${l.selectedComponent.id}_${s.propKey}`,
                                                              class:
                                                                "zero-code-radio-input",
                                                              checked:
                                                                l
                                                                  .selectedComponent[
                                                                  s.propKey
                                                                ] === i ||
                                                                (i ===
                                                                  "指定なし" &&
                                                                  !l
                                                                    .selectedComponent[
                                                                    s.propKey
                                                                  ]),
                                                              onChange: (p) =>
                                                                g(
                                                                  s.propKey,
                                                                  i ===
                                                                    "指定なし"
                                                                    ? ""
                                                                    : i
                                                                ),
                                                            },
                                                            null,
                                                            40,
                                                            Ba
                                                          ),
                                                          e.createElementVNode(
                                                            "label",
                                                            {
                                                              for: `${l.selectedComponent.id}_${s.propKey}_${i}`,
                                                              class:
                                                                "zero-code-radio-label",
                                                            },
                                                            e.toDisplayString(
                                                              i
                                                            ),
                                                            9,
                                                            Ma
                                                          ),
                                                        ]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                          s.type === "checkbox"
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", Fa, [
                                                (e.openBlock(!0),
                                                e.createElementBlock(
                                                  e.Fragment,
                                                  null,
                                                  e.renderList(
                                                    s.options,
                                                    (i) => (
                                                      e.openBlock(),
                                                      e.createElementBlock(
                                                        "div",
                                                        {
                                                          key: i,
                                                          class:
                                                            "zero-code-checkbox-item",
                                                        },
                                                        [
                                                          e.createElementVNode(
                                                            "input",
                                                            {
                                                              id: `${l.selectedComponent.id}_${s.propKey}_${i}`,
                                                              checked:
                                                                l.isCheckboxChecked(
                                                                  l.selectedComponent,
                                                                  s.propKey,
                                                                  i
                                                                ) ||
                                                                (Array.isArray(
                                                                  s.defaultValue
                                                                ) &&
                                                                  s.defaultValue.includes(
                                                                    i
                                                                  ) &&
                                                                  !l
                                                                    .selectedComponent[
                                                                    s.propKey
                                                                  ]),
                                                              type: "checkbox",
                                                              class:
                                                                "zero-code-checkbox-input",
                                                              onChange: (p) => {
                                                                const m =
                                                                  p.target;
                                                                h(
                                                                  s.propKey,
                                                                  i,
                                                                  m.checked
                                                                );
                                                              },
                                                            },
                                                            null,
                                                            40,
                                                            Oa
                                                          ),
                                                          e.createElementVNode(
                                                            "label",
                                                            {
                                                              for: `${l.selectedComponent.id}_${s.propKey}_${i}`,
                                                              class:
                                                                "zero-code-checkbox-label",
                                                            },
                                                            e.toDisplayString(
                                                              i
                                                            ),
                                                            9,
                                                            La
                                                          ),
                                                        ]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                          s.type === "select"
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", xa, [
                                                e.createElementVNode(
                                                  "select",
                                                  {
                                                    value:
                                                      l.selectedComponent[
                                                        s.propKey
                                                      ] || s.defaultValue,
                                                    class:
                                                      "zero-code-field-input zero-code-select-input",
                                                    onChange: (i) => {
                                                      const p = i.target;
                                                      g(s.propKey, p.value);
                                                    },
                                                  },
                                                  [
                                                    (e.openBlock(!0),
                                                    e.createElementBlock(
                                                      e.Fragment,
                                                      null,
                                                      e.renderList(
                                                        s.options,
                                                        (i) => (
                                                          e.openBlock(),
                                                          e.createElementBlock(
                                                            "option",
                                                            {
                                                              key: i,
                                                              value: i,
                                                            },
                                                            e.toDisplayString(
                                                              i
                                                            ),
                                                            9,
                                                            Ha
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ],
                                                  40,
                                                  Ra
                                                ),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                          s.type === "select-multiple"
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", Za, [
                                                e.createElementVNode(
                                                  "select",
                                                  {
                                                    value:
                                                      l.selectedComponent[
                                                        s.propKey
                                                      ] || s.defaultValue,
                                                    multiple: "",
                                                    class:
                                                      "zero-code-field-input zero-code-select-multiple",
                                                    onChange: (i) => {
                                                      const p = i.target,
                                                        m = Array.from(
                                                          p.selectedOptions
                                                        ).map(($) => $.value);
                                                      g(s.propKey, m);
                                                    },
                                                  },
                                                  [
                                                    (e.openBlock(!0),
                                                    e.createElementBlock(
                                                      e.Fragment,
                                                      null,
                                                      e.renderList(
                                                        s.options,
                                                        (i) => (
                                                          e.openBlock(),
                                                          e.createElementBlock(
                                                            "option",
                                                            {
                                                              key: i,
                                                              value: i,
                                                              selected:
                                                                Array.isArray(
                                                                  l
                                                                    .selectedComponent[
                                                                    s.propKey
                                                                  ]
                                                                ) &&
                                                                l.selectedComponent[
                                                                  s.propKey
                                                                ].includes(i),
                                                            },
                                                            e.toDisplayString(
                                                              i
                                                            ),
                                                            9,
                                                            Ua
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ],
                                                  40,
                                                  ja
                                                ),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    l.selectedComponent,
                                    (s, i) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        e.Fragment,
                                        { key: String(i) },
                                        [
                                          l.shouldShowBasicField(
                                            String(i),
                                            s,
                                            l.selectedComponent
                                          )
                                            ? (e.openBlock(),
                                              e.createElementBlock("div", Wa, [
                                                e.createElementVNode(
                                                  "label",
                                                  {
                                                    for: `${
                                                      l.selectedComponent.id
                                                    }_${String(i)}`,
                                                  },
                                                  e.toDisplayString(i) + ":",
                                                  9,
                                                  Xa
                                                ),
                                                e.createElementVNode(
                                                  "input",
                                                  {
                                                    id: `${
                                                      l.selectedComponent.id
                                                    }_${String(i)}`,
                                                    value: s,
                                                    type: l.getInputType(
                                                      String(i)
                                                    ),
                                                    class:
                                                      "zero-code-field-input",
                                                    readonly:
                                                      String(i) === "id",
                                                    onInput: (p) => {
                                                      const m = p.target;
                                                      g(String(i), m.value);
                                                    },
                                                  },
                                                  null,
                                                  40,
                                                  Ya
                                                ),
                                              ]))
                                            : e.createCommentVNode("", !0),
                                        ],
                                        64
                                      )
                                    )
                                  ),
                                  128
                                )),
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    l.selectedComponent,
                                    (s, i) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        e.Fragment,
                                        { key: String(i) },
                                        [
                                          l.shouldShowArrayField(
                                            String(i),
                                            s,
                                            l.selectedComponent
                                          )
                                            ? (e.openBlock(),
                                              e.createBlock(
                                                wa,
                                                {
                                                  key: 0,
                                                  "component-id":
                                                    l.selectedComponent.id,
                                                  "array-key": String(i),
                                                  items: Array.isArray(s)
                                                    ? s
                                                    : [],
                                                  fields: N(String(i)),
                                                  label: E(String(i)),
                                                  "item-label": c(String(i)),
                                                  onAdd: () =>
                                                    C(
                                                      l.selectedComponent,
                                                      String(i)
                                                    ),
                                                  onRemove: (p) =>
                                                    v(
                                                      l.selectedComponent,
                                                      String(i),
                                                      p
                                                    ),
                                                  onReorder: (p, m) =>
                                                    w(String(i), p, m),
                                                  onUpdate: (p, m, $) =>
                                                    d(String(i), p, m, $),
                                                },
                                                null,
                                                8,
                                                [
                                                  "component-id",
                                                  "array-key",
                                                  "items",
                                                  "fields",
                                                  "label",
                                                  "item-label",
                                                  "onAdd",
                                                  "onRemove",
                                                  "onReorder",
                                                  "onUpdate",
                                                ]
                                              ))
                                            : e.createCommentVNode("", !0),
                                        ],
                                        64
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]))
                          : e.createCommentVNode("", !0),
                      ]),
                    ]
                  ),
                ]
              ))
            : e.createCommentVNode("", !0);
      },
    }),
    Ja = { class: "zero-code-tab-content" },
    qa = e.defineComponent({
      __name: "EditorMainPanel",
      props: {
        dataTab: { type: String },
        editablePageData: { type: Array },
        localParts: { type: Array },
        localCommonParts: { type: Array },
        localIndividualParts: { type: Array },
        parts: { type: Array },
        showPartSelector: { type: Boolean },
        showNestedPartSelector: { type: Boolean },
        showEditor: { type: Boolean },
        selectedComponent: { type: [Object, null] },
        renderComponentWithNested: { type: Function },
        getFieldInfo: { type: Function },
        shouldShowBasicField: { type: Function },
        shouldShowArrayField: { type: Function },
        shouldShowArrayItemField: { type: Function },
        getInputType: { type: Function },
        isCheckboxChecked: { type: Function },
        partsData: { type: Array },
        isTextEditing: { type: Boolean },
      },
      emits: [
        "update:data-tab",
        "add-part",
        "edit-part",
        "delete-part",
        "reorder-parts",
        "close-part-selector",
        "select-part",
        "close-nested-part-selector",
        "select-nested-part",
        "close-editor",
        "update-editor-value",
        "add-array-item",
        "remove-array-item",
        "update-array-item",
        "update-checkbox",
      ],
      setup(t, { emit: r }) {
        return (o, n) => (
          e.openBlock(),
          e.createElementBlock("div", Ja, [
            e.createVNode(
              Cn,
              {
                "model-value": o.dataTab,
                "page-data": o.editablePageData,
                parts:
                  o.localParts && o.localParts.length > 0
                    ? o.localParts
                    : o.parts || [],
                "common-parts": o.localCommonParts,
                "individual-parts": o.localIndividualParts,
                "render-component-with-nested": o.renderComponentWithNested,
                "is-text-editing": o.isTextEditing,
                "onUpdate:modelValue":
                  n[0] || (n[0] = (a) => o.$emit("update:data-tab", a)),
                onAddPart: n[1] || (n[1] = (a) => o.$emit("add-part", a)),
                onEditPart: n[2] || (n[2] = (a) => o.$emit("edit-part", a)),
                onDeletePart: n[3] || (n[3] = (a) => o.$emit("delete-part", a)),
                onReorderParts:
                  n[4] || (n[4] = (a) => o.$emit("reorder-parts", a)),
              },
              null,
              8,
              [
                "model-value",
                "page-data",
                "parts",
                "common-parts",
                "individual-parts",
                "render-component-with-nested",
                "is-text-editing",
              ]
            ),
            o.showPartSelector
              ? (e.openBlock(),
                e.createBlock(
                  qo,
                  {
                    key: 0,
                    parts:
                      o.localParts && o.localParts.length > 0
                        ? o.localParts
                        : o.parts || [],
                    onClose:
                      n[5] || (n[5] = (a) => o.$emit("close-part-selector")),
                    onSelectPart:
                      n[6] || (n[6] = (a, g) => o.$emit("select-part", a, g)),
                  },
                  null,
                  8,
                  ["parts"]
                ))
              : e.createCommentVNode("", !0),
            o.showNestedPartSelector
              ? (e.openBlock(),
                e.createBlock(
                  qo,
                  {
                    key: 1,
                    parts:
                      o.localParts && o.localParts.length > 0
                        ? o.localParts
                        : o.parts || [],
                    "is-nested": !0,
                    onClose:
                      n[7] ||
                      (n[7] = (a) => o.$emit("close-nested-part-selector")),
                    onSelectPart:
                      n[8] ||
                      (n[8] = (a, g) => o.$emit("select-nested-part", a, g)),
                  },
                  null,
                  8,
                  ["parts"]
                ))
              : e.createCommentVNode("", !0),
            (e.openBlock(),
            e.createBlock(
              Ka,
              {
                key: 2,
                "show-editor": o.showEditor,
                "selected-component": o.selectedComponent,
                "get-field-info": o.getFieldInfo,
                "should-show-basic-field": o.shouldShowBasicField,
                "should-show-array-field": o.shouldShowArrayField,
                "should-show-array-item-field": o.shouldShowArrayItemField,
                "get-input-type": o.getInputType,
                "is-checkbox-checked": o.isCheckboxChecked,
                onClose: n[9] || (n[9] = (a) => o.$emit("close-editor")),
                "onUpdate:value":
                  n[10] ||
                  (n[10] = (a, g) => o.$emit("update-editor-value", a, g)),
                "onAdd:arrayItem":
                  n[11] || (n[11] = (a) => o.$emit("add-array-item", a)),
                "onRemove:arrayItem":
                  n[12] ||
                  (n[12] = (a, g) => o.$emit("remove-array-item", a, g)),
                "onUpdate:arrayItem":
                  n[13] || (n[13] = (a) => o.$emit("update-array-item", a)),
                "onUpdate:checkbox":
                  n[14] || (n[14] = (a) => o.$emit("update-checkbox", a)),
              },
              null,
              8,
              [
                "show-editor",
                "selected-component",
                "get-field-info",
                "should-show-basic-field",
                "should-show-array-field",
                "should-show-array-item-field",
                "get-input-type",
                "is-checkbox-checked",
              ]
            )),
          ])
        );
      },
    }),
    Ga = { class: "zero-code-data-display" },
    Qa = { class: "zero-code-component-header" },
    es = { class: "zero-code-data-tabs" },
    ts = { class: "zero-code-form-group" },
    os = { class: "zero-code-form-group" },
    rs = ["value"],
    ns = { class: "zero-code-data-content" },
    as = { key: 0, class: "zero-code-rendered-content" },
    ss = { class: "zero-code-component-header" },
    ls = { class: "zero-code-component-id" },
    is = { class: "zero-code-rendered-component" },
    ds = { class: "zero-code-component-header" },
    cs = { class: "zero-code-header-actions" },
    ps = ["onClick"],
    us = ["onClick"],
    ms = ["innerHTML"],
    fs = { key: 1, class: "zero-code-no-parts" },
    Qo = e.defineComponent({
      __name: "PartsManager",
      props: { parts: { type: Array }, renderPartPreview: { type: Function } },
      emits: [
        "show-registration",
        "edit-part",
        "delete-part",
        "search",
        "filter",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.ref(""),
          g = e.ref(""),
          y = e.computed(() => Array.from(new Set(o.parts.map((v) => v.type)))),
          d = e.computed(() => {
            let v = [...o.parts];
            if (
              (g.value && (v = v.filter((w) => w.type === g.value)), a.value)
            ) {
              const w = a.value.toLowerCase();
              v = v
                .map((N) => ({
                  ...N,
                  module: N.module.filter(
                    (E) =>
                      E.title.toLowerCase().includes(w) ||
                      E.body.toLowerCase().includes(w)
                  ),
                }))
                .filter((N) => N.module.length > 0);
            }
            return v;
          }),
          h = () => {
            n("search", a.value);
          },
          C = () => {
            n("filter", g.value);
          };
        return (v, w) => (
          e.openBlock(),
          e.createElementBlock("div", Ga, [
            e.createElementVNode("div", Qa, [
              w[3] ||
                (w[3] = e.createElementVNode("h4", null, "パーツ管理", -1)),
              e.createElementVNode(
                "button",
                {
                  class: "zero-code-add-part-button",
                  onClick: w[0] || (w[0] = (N) => v.$emit("show-registration")),
                },
                "＋ 新規パーツ登録"
              ),
            ]),
            e.createElementVNode("div", es, [
              e.createElementVNode("div", ts, [
                e.withDirectives(
                  e.createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        w[1] || (w[1] = (N) => (a.value = N)),
                      placeholder: "パーツ名で検索...",
                      class: "zero-code-form-input",
                      onInput: h,
                    },
                    null,
                    544
                  ),
                  [[e.vModelText, a.value]]
                ),
              ]),
              e.createElementVNode("div", os, [
                e.withDirectives(
                  e.createElementVNode(
                    "select",
                    {
                      "onUpdate:modelValue":
                        w[2] || (w[2] = (N) => (g.value = N)),
                      class: "zero-code-form-select",
                      onChange: C,
                    },
                    [
                      w[4] ||
                        (w[4] = e.createElementVNode(
                          "option",
                          { value: "" },
                          "すべてのType",
                          -1
                        )),
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(
                          y.value,
                          (N) => (
                            e.openBlock(),
                            e.createElementBlock(
                              "option",
                              { key: N, value: N },
                              e.toDisplayString(N),
                              9,
                              rs
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    544
                  ),
                  [[e.vModelSelect, g.value]]
                ),
              ]),
            ]),
            e.createElementVNode("div", ns, [
              Array.isArray(d.value) && d.value.length > 0
                ? (e.openBlock(),
                  e.createElementBlock("div", as, [
                    (e.openBlock(!0),
                    e.createElementBlock(
                      e.Fragment,
                      null,
                      e.renderList(
                        d.value,
                        (N, E) => (
                          e.openBlock(),
                          e.createElementBlock(
                            "div",
                            { key: E, class: "zero-code-data-section" },
                            [
                              e.createElementVNode("div", ss, [
                                e.createElementVNode(
                                  "h5",
                                  null,
                                  e.toDisplayString(N.type),
                                  1
                                ),
                                e.createElementVNode(
                                  "span",
                                  ls,
                                  e.toDisplayString(N.module.length) +
                                    "個のパーツ",
                                  1
                                ),
                              ]),
                              e.createElementVNode("div", is, [
                                (e.openBlock(!0),
                                e.createElementBlock(
                                  e.Fragment,
                                  null,
                                  e.renderList(
                                    N.module,
                                    (c, l) => (
                                      e.openBlock(),
                                      e.createElementBlock(
                                        "div",
                                        {
                                          key: l,
                                          class: "zero-code-draggable-item",
                                        },
                                        [
                                          e.createElementVNode("div", ds, [
                                            e.createElementVNode(
                                              "h6",
                                              null,
                                              e.toDisplayString(c.title),
                                              1
                                            ),
                                            e.createElementVNode("div", cs, [
                                              e.createElementVNode(
                                                "button",
                                                {
                                                  class: "zero-code-edit-btn",
                                                  onClick: (f) =>
                                                    v.$emit("edit-part", {
                                                      type: N.type,
                                                      module: c,
                                                    }),
                                                },
                                                " 編集 ",
                                                8,
                                                ps
                                              ),
                                              e.createElementVNode(
                                                "button",
                                                {
                                                  class: "zero-code-delete-btn",
                                                  onClick: (f) =>
                                                    v.$emit("delete-part", {
                                                      type: N.type,
                                                      title: c.title,
                                                    }),
                                                },
                                                " 削除 ",
                                                8,
                                                us
                                              ),
                                            ]),
                                          ]),
                                          e.createElementVNode(
                                            "div",
                                            {
                                              class: "zero-code-module-preview",
                                              innerHTML: o.renderPartPreview(
                                                c.body
                                              ),
                                            },
                                            null,
                                            8,
                                            ms
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : (e.openBlock(),
                  e.createElementBlock(
                    "div",
                    fs,
                    w[5] ||
                      (w[5] = [
                        e.createElementVNode(
                          "p",
                          null,
                          "登録されたパーツがありません。",
                          -1
                        ),
                      ])
                  )),
            ]),
          ])
        );
      },
    }),
    gs = { class: "zero-code-modal-header" },
    hs = { class: "zero-code-modal-title" },
    ys = { class: "zero-code-modal-subtitle" },
    bs = { class: "zero-code-category-badge" },
    Es = { class: "zero-code-modal-body" },
    $s = { class: "zero-code-form-layout" },
    ws = { class: "zero-code-form-section" },
    zs = { key: 0, class: "zero-code-form-group" },
    vs = { class: "zero-code-type-input-group" },
    Ns = ["value"],
    Cs = { key: 1, class: "zero-code-form-group" },
    ks = { class: "zero-code-form-group" },
    As = { class: "zero-code-body-editor-container" },
    Ps = { class: "zero-code-preview-section" },
    Ss = { class: "zero-code-preview-container" },
    _s = ["innerHTML"],
    Is = { class: "zero-code-modal-footer" },
    Ds = { class: "zero-code-modal-actions" },
    Ts = ["disabled"],
    Vs = e.defineComponent({
      __name: "PartRegistrationModal",
      props: {
        isEditing: { type: Boolean, default: !1 },
        existingTypes: { type: Array },
        partCategory: { default: "common", type: String },
        editingPart: { default: null, type: [Object, null] },
        initialData: {
          default: () => ({ type: "", title: "", body: "" }),
          type: Object,
        },
        renderPartPreview: { type: Function },
      },
      emits: ["close", "save"],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = () =>
            o.isEditing && o.editingPart
              ? {
                  type: o.editingPart.type,
                  title: o.editingPart.module.title,
                  body: o.editingPart.module.body,
                }
              : {
                  type: o.initialData.type,
                  title: o.initialData.title,
                  body: o.initialData.body,
                },
          g = e.ref(a()),
          y = e.computed(
            () =>
              (o.isEditing ||
                (g.value.type.trim() !== "" && g.value.title.trim() !== "")) &&
              g.value.body.trim() !== ""
          ),
          d = () => {},
          h = () => {
            y.value &&
              n("save", {
                type: g.value.type,
                title: g.value.title,
                body: g.value.body,
                category: o.partCategory || "common",
              });
          };
        return (C, v) => (
          e.openBlock(),
          e.createElementBlock(
            "div",
            {
              class: "zero-code-modal-overlay",
              onClick: v[7] || (v[7] = (w) => C.$emit("close")),
            },
            [
              e.createElementVNode(
                "div",
                {
                  class: "zero-code-part-modal",
                  onClick: v[6] || (v[6] = e.withModifiers(() => {}, ["stop"])),
                },
                [
                  e.createElementVNode("div", gs, [
                    e.createElementVNode("div", hs, [
                      e.createElementVNode(
                        "h3",
                        null,
                        e.toDisplayString(
                          C.isEditing ? "パーツ編集" : "新規パーツ登録"
                        ),
                        1
                      ),
                      e.createElementVNode(
                        "p",
                        ys,
                        e.toDisplayString(
                          C.isEditing
                            ? "パーツの内容を編集できます"
                            : "新しいパーツを作成します"
                        ),
                        1
                      ),
                      e.createElementVNode("div", bs, [
                        e.createElementVNode(
                          "span",
                          {
                            class: e.normalizeClass([
                              "zero-code-badge",
                              C.partCategory,
                            ]),
                          },
                          e.toDisplayString(
                            C.partCategory === "common"
                              ? "共通パーツ"
                              : "個別パーツ"
                          ),
                          3
                        ),
                      ]),
                    ]),
                    e.createElementVNode(
                      "button",
                      {
                        class: "zero-code-modal-close-btn",
                        onClick: v[0] || (v[0] = (w) => C.$emit("close")),
                      },
                      v[8] ||
                        (v[8] = [e.createElementVNode("span", null, "✖️", -1)])
                    ),
                  ]),
                  e.createElementVNode("div", Es, [
                    e.createElementVNode("div", $s, [
                      e.createElementVNode("div", ws, [
                        C.isEditing
                          ? e.createCommentVNode("", !0)
                          : (e.openBlock(),
                            e.createElementBlock("div", zs, [
                              v[10] ||
                                (v[10] = e.createElementVNode(
                                  "label",
                                  {
                                    for: "part-type",
                                    class: "zero-code-form-label",
                                  },
                                  "Type",
                                  -1
                                )),
                              e.createElementVNode("div", vs, [
                                e.withDirectives(
                                  e.createElementVNode(
                                    "select",
                                    {
                                      id: "part-type",
                                      "onUpdate:modelValue":
                                        v[1] ||
                                        (v[1] = (w) => (g.value.type = w)),
                                      class: "zero-code-form-select",
                                    },
                                    [
                                      v[9] ||
                                        (v[9] = e.createElementVNode(
                                          "option",
                                          { value: "" },
                                          "新しいTypeを選択",
                                          -1
                                        )),
                                      (e.openBlock(!0),
                                      e.createElementBlock(
                                        e.Fragment,
                                        null,
                                        e.renderList(
                                          C.existingTypes,
                                          (w) => (
                                            e.openBlock(),
                                            e.createElementBlock(
                                              "option",
                                              { key: w, value: w },
                                              e.toDisplayString(w),
                                              9,
                                              Ns
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ],
                                    512
                                  ),
                                  [[e.vModelSelect, g.value.type]]
                                ),
                                !g.value.type ||
                                !C.existingTypes.includes(g.value.type)
                                  ? e.withDirectives(
                                      (e.openBlock(),
                                      e.createElementBlock(
                                        "input",
                                        {
                                          key: 0,
                                          "onUpdate:modelValue":
                                            v[2] ||
                                            (v[2] = (w) => (g.value.type = w)),
                                          placeholder: "新しいType名を入力",
                                          class: "zero-code-form-input",
                                        },
                                        null,
                                        512
                                      )),
                                      [[e.vModelText, g.value.type]]
                                    )
                                  : e.createCommentVNode("", !0),
                              ]),
                            ])),
                        C.isEditing
                          ? e.createCommentVNode("", !0)
                          : (e.openBlock(),
                            e.createElementBlock("div", Cs, [
                              v[11] ||
                                (v[11] = e.createElementVNode(
                                  "label",
                                  {
                                    for: "part-title",
                                    class: "zero-code-form-label",
                                  },
                                  "Title",
                                  -1
                                )),
                              e.withDirectives(
                                e.createElementVNode(
                                  "input",
                                  {
                                    id: "part-title",
                                    "onUpdate:modelValue":
                                      v[3] ||
                                      (v[3] = (w) => (g.value.title = w)),
                                    placeholder: "パーツのタイトルを入力",
                                    class: "zero-code-form-input",
                                  },
                                  null,
                                  512
                                ),
                                [[e.vModelText, g.value.title]]
                              ),
                            ])),
                        e.createElementVNode("div", ks, [
                          v[12] ||
                            (v[12] = e.createElementVNode(
                              "label",
                              {
                                for: "part-body",
                                class: "zero-code-form-label",
                              },
                              "HTML Template",
                              -1
                            )),
                          e.createElementVNode("div", As, [
                            e.withDirectives(
                              e.createElementVNode(
                                "textarea",
                                {
                                  id: "part-body",
                                  "onUpdate:modelValue":
                                    v[4] || (v[4] = (w) => (g.value.body = w)),
                                  class: "zero-code-body-editor",
                                  placeholder:
                                    "HTMLソースを直接編集してください...",
                                  onInput: d,
                                },
                                null,
                                544
                              ),
                              [[e.vModelText, g.value.body]]
                            ),
                          ]),
                        ]),
                      ]),
                      e.createElementVNode("div", Ps, [
                        v[13] ||
                          (v[13] = e.createElementVNode(
                            "div",
                            { class: "zero-code-preview-header" },
                            [
                              e.createElementVNode("h4", null, "プレビュー"),
                              e.createElementVNode(
                                "span",
                                { class: "zero-code-preview-info" },
                                "リアルタイムで表示を確認"
                              ),
                            ],
                            -1
                          )),
                        e.createElementVNode("div", Ss, [
                          e.createElementVNode(
                            "div",
                            {
                              class: "zero-code-preview-content",
                              innerHTML: C.renderPartPreview(g.value.body),
                            },
                            null,
                            8,
                            _s
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  e.createElementVNode("div", Is, [
                    e.createElementVNode("div", Ds, [
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-btn zero-code-btn-secondary",
                          onClick: v[5] || (v[5] = (w) => C.$emit("close")),
                        },
                        " キャンセル "
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-btn zero-code-btn-primary",
                          disabled: !y.value,
                          onClick: h,
                        },
                        e.toDisplayString(C.isEditing ? "更新" : "登録"),
                        9,
                        Ts
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        );
      },
    }),
    Bs = { class: "zero-code-tab-content" },
    Ms = { class: "zero-code-data-tabs" },
    Fs = ["onClick"],
    Os = { class: "zero-code-parts-content" },
    Ls = { key: 0, class: "zero-code-parts-section" },
    xs = { class: "zero-code-section-header" },
    Rs = { key: 1, class: "zero-code-parts-section" },
    Hs = { class: "zero-code-section-header" },
    Zs = { key: 2, class: "zero-code-parts-section" },
    js = { class: "zero-code-data-display-section" },
    Us = { class: "zero-code-parts-sub-tabs" },
    Ws = { class: "zero-code-parts-sub-content" },
    Xs = { key: 0, class: "zero-code-parts-sub-section" },
    Ys = { key: 0 },
    Ks = { class: "zero-code-data-display-pre" },
    Js = { key: 1 },
    qs = { key: 1, class: "zero-code-parts-sub-section" },
    Gs = { key: 0 },
    Qs = { class: "zero-code-data-display-pre" },
    el = { key: 1 },
    tl = e.defineComponent({
      __name: "PartsManagementPanel",
      props: {
        localParts: { type: Array },
        localCommonParts: { type: Array },
        localIndividualParts: { type: Array },
        showPartRegistration: { type: Boolean },
        existingPartTypes: { type: Array },
        editingPart: { type: null },
        renderPartPreview: { type: Function },
      },
      emits: [
        "update-parts",
        "show-registration",
        "edit-part",
        "delete-part",
        "close-registration",
        "save-part",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.ref("common"),
          g = e.ref("common"),
          y = e.ref("common"),
          d = ["common", "individual", "data"],
          h = (s) =>
            ({
              common: "共通パーツ",
              individual: "個別パーツ",
              data: "データ表示",
            }[s]),
          C = e.computed(() =>
            o.localCommonParts && o.localCommonParts.length > 0
              ? o.localCommonParts
              : o.localParts
                  .map((s) => ({
                    ...s,
                    module: s.module.filter((i) => {
                      const p = i;
                      return !p.category || p.category === "common";
                    }),
                  }))
                  .filter((s) => s.module.length > 0)
          ),
          v = e.computed(() =>
            o.localIndividualParts && o.localIndividualParts.length > 0
              ? o.localIndividualParts
              : o.localParts
                  .map((s) => ({
                    ...s,
                    module: s.module.filter((i) => i.category === "individual"),
                  }))
                  .filter((s) => s.module.length > 0)
          ),
          w = (s) => {
            (g.value = s), n("show-registration");
          },
          N = () => {
            n("close-registration");
          },
          E = (s) => {
            const i = s.module;
            (g.value = i.category || "common"), n("edit-part", s);
          },
          c = (s) => {
            n("delete-part", s.type, s.title);
          },
          l = (s) => {
            const i = { ...s, category: g.value };
            n("save-part", i);
          },
          f = (s) => {
            const i = (p, m = 0) => {
              const $ = "  ".repeat(m),
                z = "  ".repeat(m + 1);
              if (Array.isArray(p))
                return p.length === 0
                  ? "[]"
                  : `[
${p.map((u) => z + i(u, m + 1)).join(`,
`)}
${$}]`;
              if (typeof p == "object" && p !== null) {
                const A = Object.entries(p);
                return A.length === 0
                  ? "{}"
                  : `{
${A.map(([b, k]) => {
  let P;
  if (typeof k == "string") {
    const _ = k
      .replace(
        /\\n/g,
        `
`
      )
      .replace(/\\t/g, "	")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\");
    if (
      _.includes(`
`)
    ) {
      const D = _.split(`
`);
      P = D.map((I, V) =>
        V === 0 ? `\`${I}` : V === D.length - 1 ? `${z}${I}\`` : `${z}${I}`
      ).join(`
`);
    } else P = `"${_}"`;
  } else P = i(k, m + 1);
  return `${z}"${b}": ${P}`;
}).join(`,
`)}
${$}}`;
              }
              return typeof p == "string"
                ? `"${p.replace(/"/g, '\\"')}"`
                : JSON.stringify(p);
            };
            return i(s);
          };
        return (s, i) => (
          e.openBlock(),
          e.createElementBlock("div", Bs, [
            e.createElementVNode("div", Ms, [
              (e.openBlock(),
              e.createElementBlock(
                e.Fragment,
                null,
                e.renderList(d, (p) =>
                  e.createElementVNode(
                    "button",
                    {
                      key: p,
                      class: e.normalizeClass([
                        "zero-code-data-tab-button",
                        { active: a.value === p },
                      ]),
                      onClick: (m) => (a.value = p),
                    },
                    e.toDisplayString(h(p)),
                    11,
                    Fs
                  )
                ),
                64
              )),
            ]),
            e.createElementVNode("div", Os, [
              a.value === "common"
                ? (e.openBlock(),
                  e.createElementBlock("div", Ls, [
                    e.createElementVNode("div", xs, [
                      e.createElementVNode(
                        "h4",
                        null,
                        "共通パーツ (" +
                          e.toDisplayString(C.value.length) +
                          "件)",
                        1
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-add-part-btn",
                          onClick: i[0] || (i[0] = (p) => w("common")),
                        },
                        " ＋ 共通パーツ登録 "
                      ),
                    ]),
                    e.createVNode(
                      Qo,
                      {
                        parts: C.value,
                        "render-part-preview": s.renderPartPreview,
                        onShowRegistration: i[1] || (i[1] = () => w("common")),
                        onEditPart: E,
                        onDeletePart: c,
                      },
                      null,
                      8,
                      ["parts", "render-part-preview"]
                    ),
                  ]))
                : e.createCommentVNode("", !0),
              a.value === "individual"
                ? (e.openBlock(),
                  e.createElementBlock("div", Rs, [
                    e.createElementVNode("div", Hs, [
                      e.createElementVNode(
                        "h4",
                        null,
                        "個別パーツ (" +
                          e.toDisplayString(v.value.length) +
                          "件)",
                        1
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-add-part-btn",
                          onClick: i[2] || (i[2] = (p) => w("individual")),
                        },
                        " ＋ 個別パーツ登録 "
                      ),
                    ]),
                    e.createVNode(
                      Qo,
                      {
                        parts: v.value,
                        "render-part-preview": s.renderPartPreview,
                        onShowRegistration:
                          i[3] || (i[3] = () => w("individual")),
                        onEditPart: E,
                        onDeletePart: c,
                      },
                      null,
                      8,
                      ["parts", "render-part-preview"]
                    ),
                  ]))
                : e.createCommentVNode("", !0),
              a.value === "data"
                ? (e.openBlock(),
                  e.createElementBlock("div", Zs, [
                    e.createElementVNode("div", js, [
                      e.createElementVNode("div", Us, [
                        e.createElementVNode(
                          "button",
                          {
                            class: e.normalizeClass([
                              "zero-code-parts-sub-tab-button",
                              { active: y.value === "common" },
                            ]),
                            onClick:
                              i[4] || (i[4] = (p) => (y.value = "common")),
                          },
                          " 共通Partsデータ ",
                          2
                        ),
                        e.createElementVNode(
                          "button",
                          {
                            class: e.normalizeClass([
                              "zero-code-parts-sub-tab-button",
                              { active: y.value === "individual" },
                            ]),
                            onClick:
                              i[5] || (i[5] = (p) => (y.value = "individual")),
                          },
                          " 個別Partsデータ ",
                          2
                        ),
                      ]),
                      e.createElementVNode("div", Ws, [
                        y.value === "common"
                          ? (e.openBlock(),
                            e.createElementBlock("div", Xs, [
                              s.localCommonParts &&
                              s.localCommonParts.length > 0
                                ? (e.openBlock(),
                                  e.createElementBlock("div", Ys, [
                                    e.createElementVNode(
                                      "pre",
                                      Ks,
                                      e.toDisplayString(f(s.localCommonParts)),
                                      1
                                    ),
                                  ]))
                                : (e.openBlock(),
                                  e.createElementBlock(
                                    "div",
                                    Js,
                                    i[6] ||
                                      (i[6] = [
                                        e.createElementVNode(
                                          "p",
                                          null,
                                          "共通パーツデータがありません",
                                          -1
                                        ),
                                      ])
                                  )),
                            ]))
                          : e.createCommentVNode("", !0),
                        y.value === "individual"
                          ? (e.openBlock(),
                            e.createElementBlock("div", qs, [
                              s.localIndividualParts &&
                              s.localIndividualParts.length > 0
                                ? (e.openBlock(),
                                  e.createElementBlock("div", Gs, [
                                    e.createElementVNode(
                                      "pre",
                                      Qs,
                                      e.toDisplayString(
                                        f(s.localIndividualParts)
                                      ),
                                      1
                                    ),
                                  ]))
                                : (e.openBlock(),
                                  e.createElementBlock(
                                    "div",
                                    el,
                                    i[7] ||
                                      (i[7] = [
                                        e.createElementVNode(
                                          "p",
                                          null,
                                          "個別パーツデータがありません",
                                          -1
                                        ),
                                      ])
                                  )),
                            ]))
                          : e.createCommentVNode("", !0),
                      ]),
                    ]),
                  ]))
                : e.createCommentVNode("", !0),
            ]),
            s.showPartRegistration
              ? (e.openBlock(),
                e.createBlock(
                  Vs,
                  {
                    key: 0,
                    "existing-types": s.existingPartTypes,
                    "render-part-preview": s.renderPartPreview,
                    "editing-part": s.editingPart,
                    "is-editing": !!s.editingPart,
                    "part-category": g.value,
                    onClose: N,
                    onSave: l,
                  },
                  null,
                  8,
                  [
                    "existing-types",
                    "render-part-preview",
                    "editing-part",
                    "is-editing",
                    "part-category",
                  ]
                ))
              : e.createCommentVNode("", !0),
          ])
        );
      },
    });
  function Q(t) {
    return t
      ? t
          .replace(/\\/g, "\\\\")
          .replace(/'/g, "\\'")
          .replace(/"/g, '\\"')
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\t/g, "\\t")
      : "";
  }
  let ue = null;
  function er(t, r) {
    return ue !== null && ue.slotName === r;
  }
  let Et, xe;
  function ol(t, r) {
    (Et = t), (xe = r);
  }
  function lo(t, r) {
    t.querySelectorAll("[z-if]").forEach((n) => {
      const a = n.getAttribute("z-if");
      a &&
        (r[a]
          ? (n.removeAttribute("z-if"), S.debug(`z-if要素を表示: ${a}`))
          : (n.remove(), S.debug(`z-if要素を非表示: ${a}`)));
    });
  }
  function rl(t, r) {
    const o = t.querySelectorAll("[z-for-wrapper]");
    S.debug(`z-for-wrapper要素検索結果: ${o.length}個発見`),
      o.forEach((n) => {
        const a = n.getAttribute("z-for-wrapper");
        if (a) {
          const g = r[a];
          S.debug(`z-for-wrapper処理: ${a}`, {
            arrayData: g,
            length: Array.isArray(g) ? g.length : "not array",
          }),
            !Array.isArray(g) || g.length === 0
              ? (S.debug(
                  `z-for-wrapper空配列: ${a} - wrapper要素は保持、属性のみ除去`
                ),
                n.removeAttribute("z-for-wrapper"))
              : (S.success(`z-for-wrapper配列あり: ${a} - 属性除去`),
                n.removeAttribute("z-for-wrapper"));
        }
      });
  }
  function nl(t, r) {
    return `
    <div class="zero-code-add-array-item-button-container">
      <button class="zero-code-add-array-item-button" onclick="window.addArrayItem('${Q(
        t
      )}', '${Q(r)}')">
        <span class="zero-code-plus-icon">＋</span>
        <span class="zero-code-button-text">${r}を追加</span>
      </button>
    </div>
  `;
  }
  function tr(t, r, o, n, a) {
    const g = t.querySelectorAll("[z-for]");
    S.debug("=== processZForElements(DOM版)開始 ==="),
      S.debug(`z-for要素検索結果: ${g.length}個発見`),
      S.debug("コンポーネントデータ:", r),
      g.forEach((y) => {
        const d = y.getAttribute("z-for");
        if (d) {
          const h = r[d];
          if (
            (S.debug(`z-for処理: ${d}`, {
              arrayData: h,
              length: Array.isArray(h) ? h.length : "not array",
            }),
            Array.isArray(h) && h.length > 0)
          ) {
            const C = a(r.type, r.module_name),
              v = new RegExp(`<div[^>]*z-for="${d}"[^>]*>`),
              w = C.match(v),
              N = w ? C.indexOf(w[0]) : -1;
            if (N !== -1) {
              let E = 0,
                c = N;
              for (let s = N; s < C.length; s++)
                if (C.substring(s, s + 4) === "<div") E++;
                else if (C.substring(s, s + 6) === "</div>" && (E--, E === 0)) {
                  c = s + 6;
                  break;
                }
              const l = C.substring(N, c),
                f = [l];
              if (f && f[0]) {
                let s = "";
                const i = l.match(/<div([^>]*z-for="[^"]*"[^>]*)>/);
                let p = "";
                i &&
                  i[1] &&
                  (p = i[1].replace(/\s*z-for="[^"]*"\s*/, "").trim());
                const m = l.indexOf(">") + 1,
                  $ = l.lastIndexOf("</div>"),
                  z = l.substring(m, $).trim();
                if (z) {
                  const A = z;
                  S.debug(`z-for処理開始: ${d}`, {
                    arrayLength: h.length,
                    template: A,
                    arrayData: h,
                  }),
                    h.forEach((k, P) => {
                      S.debug(`z-forアイテム処理: ${P}`, k);
                      let _ = A;
                      const D = `
                  <div class="zero-code-z-for-controls" data-component-id="${
                    r.id
                  }" data-array-name="${d}" data-index="${P}">
                    <div class="zero-code-z-for-controls-inner">
                      <button class="zero-code-z-for-btn zero-code-z-for-add-btn" onclick="window.addZForArrayItem('${Q(
                        r.id
                      )}', '${Q(d)}', ${P})" title="上に追加">
                        <span class="zero-code-control-icon">＋</span>
                      </button>
                      <span class="zero-code-z-for-drag-handle" 
                            class="zero-code-drag-disabled"
                            title="ドラッグして並び替え">⠿</span>
                      <button class="zero-code-z-for-btn zero-code-z-for-edit-btn" onclick="window.editZForArrayItem('${Q(
                        r.id
                      )}', '${Q(d)}', ${P})" title="編集">
                        <span class="zero-code-control-icon">✎</span>
                      </button>
                      <button class="zero-code-z-for-btn zero-code-z-for-delete-btn" onclick="window.removeZForArrayItem('${Q(
                        r.id
                      )}', '${Q(d)}', ${P})" title="削除">
                        <span class="zero-code-control-icon">✕</span>
                      </button>
                    </div>
                  </div>
                `;
                      if (
                        (Et &&
                          (S.debug("テキスト置換前:", { itemHtml: _, item: k }),
                          (_ = Et(_, k, r, C, d)),
                          S.debug("テキスト置換後:", { itemHtml: _ })),
                        xe && (_ = xe(_, k)),
                        _.includes("z-if") ||
                          _.includes("z-slot") ||
                          _.includes("z-for"))
                      ) {
                        const L = new DOMParser().parseFromString(
                            `<div>${_}</div>`,
                            "text/html"
                          ),
                          x = `${r.id}_${d}_${P}`,
                          J = {
                            ...k,
                            type: r.type,
                            module_name: r.module_name,
                            id: x,
                          };
                        lo(L, J),
                          L.querySelectorAll("[z-slot]").forEach((Ie) => {
                            const ge = Ie.getAttribute("z-slot");
                            if (ge && J[ge]) {
                              const De = J[ge];
                              if (Array.isArray(De) && De.length > 0) {
                                let He =
                                  '<div class="zero-code-z-for-nested-parts">';
                                De.forEach(($t, Ge) => {
                                  const Ht = `${r.id}.${d}[${P}].${ge}`;
                                  He += `
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                                Ht
                              )}', ${Ge})">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">上にパーツを追加</span>
                              </button>
                            </div>
                          `;
                                  const po = ue;
                                  ue = null;
                                  const Ze = n($t, a, o + 2);
                                  ue = po;
                                  const Pe = `${r.id}.${d}[${P}].${ge}[${Ge}]`,
                                    uo = o + 2;
                                  He += `
                            <div class="zero-code-nested-component zero-code-nested-depth-${uo} zero-code-z-for-nested-part" 
                                 draggable="true"
                                 data-component-id="${$t.id}" 
                                 data-path="${Pe}" 
                                 data-parent-path="${r.id}.${d}[${P}].${ge}"
                                 data-index="${Ge}"
                                 data-nested-path="${Pe}"
                                 data-slot-name="${ge}"
                                 data-part-index="${Ge}"
                                 ondragstart="window.handleNestedPartDragStart && window.handleNestedPartDragStart(event)"
                                 ondragend="window.handleNestedPartDragEnd && window.handleNestedPartDragEnd(event)"
                                 class="zero-code-nested-component"
                                 onmousedown="this.style.cursor = 'grabbing'"
                                 onmouseup="this.style.cursor = 'grab'">
                              <div class="zero-code-component-header zero-code-nested-header">
                                <!-- ドラッグハンドル（視覚的インジケーター） -->
                                <div class="zero-code-drag-handle-nested" title="ドラッグして並び替え">
                                  ⠿
                                </div>
                                <div class="zero-code-header-actions">
                                  <button class="zero-code-edit-button" onclick="window.openNestedEditor('${Q(
                                    Pe
                                  )}')">編集</button>
                                  <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${Q(
                                    Pe
                                  )}')">削除</button>
                                </div>
                              </div>
                              <div class="zero-code-nested-component-content" 
                                   ondragover="window.handleNestedPartDragOver && window.handleNestedPartDragOver(event)"
                                   ondrop="window.handleNestedPartDrop && window.handleNestedPartDrop(event)"
                                   data-slot-name="${ge}" 
                                   data-part-index="${Ge}" 
                                   data-parent-path="${
                                     r.id
                                   }.${d}[${P}].${ge}">${Ze}</div>
                            </div>
                          `;
                                });
                                const Rt = `${r.id}.${d}[${P}].${ge}`;
                                (He += `
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                              Rt
                            )}', ${De.length})">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">下にパーツを追加</span>
                            </button>
                          </div>
                        `),
                                  (He += "</div>"),
                                  (Ie.innerHTML = He);
                              } else {
                                const He = `${r.id}.${d}[${P}].${ge}`;
                                Ie.innerHTML = `
                          <div class="zero-code-z-for-empty-slot">
                            スロット "${ge}" は空です
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                                He
                              )}', 0)">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">パーツを追加</span>
                              </button>
                            </div>
                          </div>
                        `;
                              }
                              Ie.removeAttribute("z-slot");
                            } else if (ge) {
                              const De = `${r.id}.${d}[${P}].${ge}`;
                              (Ie.innerHTML = `
                        <div class="zero-code-z-for-empty-slot">
                          スロット "${ge}" にデータがありません
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                              De
                            )}', 0)">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">パーツを追加</span>
                            </button>
                          </div>
                        </div>
                      `),
                                Ie.removeAttribute("z-slot");
                            }
                          }),
                          L.querySelectorAll("[z-for]").length > 0 &&
                            tr(L, J, o + 1, n, a),
                          (_ = L.body.innerHTML.replace(
                            /^<div>|<\/div>$/g,
                            ""
                          ));
                      }
                      let M = p;
                      M.includes("($") && xe && (M = xe(M, k));
                      let I = "",
                        V = M;
                      if (M) {
                        const L = M.match(/class="([^"]*)"/);
                        L &&
                          ((I = L[1]),
                          (V = M.replace(/\s*class="[^"]*"\s*/, "").trim()));
                      }
                      let F = `class="${
                        I
                          ? `zero-code-z-for-item-wrapper ${I}`
                          : "zero-code-z-for-item-wrapper"
                      }" 
                       draggable="true"
                       data-component-id="${r.id}"
                       data-array-name="${d}"
                       data-item-index="${P}"
                       ondragstart="window.handleZForDragStart && window.handleZForDragStart(event, '${
                         r.id
                       }', '${d}', ${P})"
                       ondragend="window.handleZForDragEnd && window.handleZForDragEnd(event)"
                       ondragover="window.handleZForArrayItemDragOver && window.handleZForArrayItemDragOver(event)"
                       ondrop="window.handleZForArrayItemDrop && window.handleZForArrayItemDrop(event)"
                       class="zero-code-draggable-item"
                       onmousedown="this.style.cursor = 'grabbing'"
                       onmouseup="this.style.cursor = 'grab'"`;
                      V && (F += ` ${V}`);
                      const X = `
                  <div ${F}>
                    ${D}
                    <div class="zero-code-z-for-item-content">${_}</div>
                  </div>
                `;
                      s += X;
                    });
                  const u = `
                <div class="zero-code-z-for-add-last-button">
                  <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${r.id}', '${d}', ${h.length})" title="最後に追加">
                    <span class="zero-code-control-icon">＋</span>
                    <span class="zero-code-button-text">追加</span>
                  </button>
                </div>
              `;
                  (s += u),
                    S.debug(`z-for最終結果: ${d}`, {
                      itemsHtml: s,
                      itemCount: h.length,
                    });
                  const b = y.parentNode;
                  if (b) {
                    const k = document.createElement("div");
                    k.innerHTML = s;
                    const P = document.createDocumentFragment();
                    for (; k.firstChild; ) P.appendChild(k.firstChild);
                    b.replaceChild(P, y);
                  } else y.outerHTML = s;
                }
              }
            }
          } else {
            S.debug(`z-for空配列: ${d}に追加ボタンを設置`);
            const C = `
          <div class="zero-code-z-for-empty-array">
            <div class="zero-code-z-for-empty-message">
              <p class="zero-code-empty-text">${d}はまだ追加されていません</p>
              <button class="zero-code-z-for-btn zero-code-z-for-add-first-btn" onclick="window.addZForArrayItem('${r.id}', '${d}', 0)" title="最初の要素を追加">
                <span class="zero-code-control-icon">＋</span>
                <span class="zero-code-button-text">最初の${d}を追加</span>
              </button>
            </div>
          </div>
        `;
            (y.innerHTML = C), y.removeAttribute("z-for");
          }
        }
      });
  }
  function al(t, r, o) {
    let n = t;
    const a = /<div([^>]*z-for="([^"]*)"[^>]*)>([\s\S]*?)<\/div>/g;
    let g;
    for (; (g = a.exec(t)) !== null; ) {
      const [y, d, h, C] = g,
        v = r[h];
      if (
        (S.debug(`=== processZForWithRegex(正規表現版)処理: ${h}`, {
          arrayData: v,
          length: Array.isArray(v) ? v.length : "not array",
        }),
        Array.isArray(v) && v.length > 0)
      ) {
        let w = "";
        v.forEach((E, c) => {
          let l = C;
          if (
            (`${Q(r.id)}${Q(h)}${c}`,
            Et && (l = Et(l, E, r, t, h)),
            xe && (l = xe(l, E)),
            l.includes("z-if") || l.includes("z-slot") || l.includes("z-for"))
          ) {
            const A = new DOMParser().parseFromString(
                `<div>${l}</div>`,
                "text/html"
              ),
              u = `${r.id}_${h}_0`,
              b = { ...E, type: r.type, module_name: r.module_name, id: u };
            lo(A, b),
              A.querySelectorAll("[z-slot]").forEach((P) => {
                const _ = P.getAttribute("z-slot");
                if (_ && b[_]) {
                  const D = b[_];
                  if (Array.isArray(D) && D.length > 0) {
                    let M = '<div class="zero-code-z-for-nested-parts">';
                    D.forEach((V, H) => {
                      const F = `${r.id}.${h}[0].${_}`;
                      M += `
                    <div class="zero-code-add-nested-part-button-container">
                      <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                        F
                      )}', ${H})">
                        <span class="zero-code-plus-icon">＋</span>
                        <span class="zero-code-button-text">上にパーツを追加</span>
                      </button>
                    </div>
                  `;
                      let X = V.content || V.title || V.name || "(内容なし)";
                      const L = `${r.id}.${h}[0].${_}[${H}]`;
                      M += `
                    <div class="zero-code-z-for-nested-part">
                      <div class="zero-code-z-for-part-header">
                        <small>${V.type || "unknown"} (ID: ${
                        V.id
                      }) [z-for内]</small>
                        <div class="zero-code-z-for-part-actions">
                          <button class="zero-code-edit-button" onclick="window.openNestedEditor('${Q(
                            L
                          )}')">編集</button>
                          <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${Q(
                            L
                          )}')">削除</button>
                        </div>
                      </div>
                      <div>${X}</div>
                    </div>
                  `;
                    });
                    const I = `${r.id}.${h}[0].${_}`;
                    (M += `
                  <div class="zero-code-add-nested-part-button-container">
                    <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                      I
                    )}', ${D.length})">
                      <span class="zero-code-plus-icon">＋</span>
                      <span class="zero-code-button-text">ネストパーツを追加</span>
                    </button>
                  </div>
                `),
                      (M += "</div>"),
                      (P.innerHTML = M);
                  } else
                    P.innerHTML = `
                  <div class="zero-code-z-for-empty-slot">
                    スロット "${_}" は空です
                    <div class="zero-code-add-nested-part-button-container">
                      <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                        r.id
                      )}', 0)">
                        <span class="zero-code-plus-icon">＋</span>
                        <span class="zero-code-button-text">ネストパーツを追加</span>
                      </button>
                    </div>
                  </div>
                `;
                  P.removeAttribute("z-slot");
                } else
                  _ &&
                    ((P.innerHTML = `
                <div class="zero-code-z-for-empty-slot">
                  スロット "${_}" にデータがありません
                  <div class="zero-code-add-nested-part-button-container">
                    <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                      r.id
                    )}', 0)">
                      <span class="zero-code-plus-icon">＋</span>
                      <span class="zero-code-button-text">ネストパーツを追加</span>
                    </button>
                  </div>
                </div>
              `),
                    P.removeAttribute("z-slot"));
              }),
              (l = A.body.innerHTML.replace(/^<div>|<\/div>$/g, ""));
          }
          let f = d.replace(/\s*z-for="[^"]*"\s*/, "").trim();
          f.includes("($") && xe && (f = xe(f, E));
          let s = "",
            i = f;
          if (f) {
            const A = f.match(/class="([^"]*)"/);
            A &&
              ((s = A[1]), (i = f.replace(/\s*class="[^"]*"\s*/, "").trim()));
          }
          const p = s
              ? `zero-code-z-for-item-wrapper ${s}`
              : "zero-code-z-for-item-wrapper",
            m = `
          <div class="zero-code-z-for-controls" data-component-id="${
            r.id
          }" data-array-name="${h}" data-index="${c}">
            <div class="zero-code-z-for-controls-inner">
              <button class="zero-code-z-for-btn zero-code-z-for-add-btn" onclick="window.addZForArrayItem('${Q(
                r.id
              )}', '${Q(h)}', ${c})" title="上に追加">
                <span class="zero-code-control-icon">＋</span>
              </button>
              <span class="zero-code-z-for-drag-handle" 
                    style="pointer-events: none; cursor: grab;"
                    title="ドラッグして並び替え">⠿</span>
              <button class="zero-code-z-for-btn zero-code-z-for-edit-btn" onclick="window.editZForArrayItem('${Q(
                r.id
              )}', '${Q(h)}', ${c})" title="編集">
                <span class="control-icon">✎</span>
              </button>
              <button class="zero-code-z-for-btn zero-code-z-for-delete-btn" onclick="window.removeZForArrayItem('${Q(
                r.id
              )}', '${Q(h)}', ${c})" title="削除">
                <span class="control-icon">✕</span>
              </button>
            </div>
          </div>
        `;
          let $ = `class="${p}" 
               draggable="true"
               data-component-id="${r.id}"
               data-array-name="${h}"
               data-item-index="${c}"
               ondragstart="window.handleZForDragStart && window.handleZForDragStart(event, '${r.id}', '${h}', ${c})"
               ondragend="window.handleZForDragEnd && window.handleZForDragEnd(event)"
               ondragover="window.handleZForArrayItemDragOver && window.handleZForArrayItemDragOver(event)"
               ondrop="window.handleZForArrayItemDrop && window.handleZForArrayItemDrop(event)"
               style="cursor: grab; position: relative; transition: all 0.3s ease;"
               onmousedown="this.style.cursor = 'grabbing'"
               onmouseup="this.style.cursor = 'grab'"`;
          i && ($ += ` ${i}`);
          const z = `
          <div ${$}>
            ${m}
            <div class="zero-code-z-for-item-content">${l}</div>
          </div>
        `;
          w += z;
        });
        const N = `
        <div class="zero-code-z-for-add-last-button">
          <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${r.id}', '${h}', ${v.length})" title="最後に追加">
            <span class="zero-code-control-icon">＋</span>
            <span class="zero-code-button-text">追加</span>
          </button>
        </div>
      `;
        (w += N), (n = n.replace(y, w));
      } else
        S.debug(`正規表現z-for空配列: ${h}に追加ボタンを設置`),
          (n = n.replace(y, nl(r.id, h)));
    }
    return n;
  }
  function sl(t, r, o, n, a) {
    const g = t.querySelectorAll("[z-slot]");
    S.debug(`z-slot要素発見: ${g.length}個`),
      g.forEach((y) => {
        const d = y.getAttribute("z-slot");
        if ((S.debug(`z-slot処理: ${d}`), d)) {
          const h = r[d],
            C = Array.isArray(h) ? h : [];
          if ((S.debug(`ネストパーツ数: ${C.length}個`), C.length === 0)) {
            const v = ue
              ? `${ue.parentId}.${ue.arrayName}[${ue.arrayIndex}].${ue.slotName}`
              : r.id;
            (y.innerHTML = `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${v}', 0)">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">パーツを追加</span>
            </button>
          </div>
        `),
              S.debug(`空のネストパーツに追加ボタンを設置 - パス: ${v}`);
          } else {
            let v = "";
            C.forEach((N, E) => {
              const c = N.id,
                l =
                  ue && er(r, d)
                    ? `${ue.parentId}.${ue.arrayName}[${ue.arrayIndex}].${ue.slotName}`
                    : r.id,
                f = o + 1;
              (v += `
            <div class="zero-code-add-nested-part-button-container">
              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
                l
              )}', ${E})">
                <span class="zero-code-plus-icon">＋</span>
                <span class="zero-code-button-text">上にパーツを追加（${f}階層目）</span>
              </button>
            </div>
          `),
                (v += `
            <div class="nested-component nested-depth-${f} draggable-nested" 
                 draggable="true" 
                 data-component-id="${N.id}" 
                 data-path="${c}" 
                 data-parent-path="${l}"
                 data-index="${E}"
                 class="zero-code-nested-component">
              <div class="zero-code-component-header zero-code-nested-header">
                <!-- ドラッグハンドル -->
                <div class="zero-code-drag-handle-nested">
                  ⠿
                </div>
                <div class="zero-code-header-actions">
                  <button class="zero-code-edit-button" onclick="window.openNestedEditor('${c}')">編集</button>
                  <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${c}')">削除</button>
                </div>
              </div>
              <div class="zero-code-nested-component-content">
                ${n(N, a, f)}
              </div>
            </div>
          `);
            });
            const w =
              ue && er(r, d)
                ? `${ue.parentId}.${ue.arrayName}[${ue.arrayIndex}].${ue.slotName}`
                : r.id;
            (v += `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Q(
              w
            )}', ${C.length})">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">下にパーツを追加（${
                o + 1
              }階層目）</span>
            </button>
          </div>
        `),
              (y.innerHTML = v),
              S.debug(
                `ネストパーツを編集UI付きで表示（重複防止版）: ${C.length}個`
              );
          }
          y.removeAttribute("z-slot"), S.success(`z-slot属性を除去: ${d}`);
        }
      });
  }
  const ll = [
      /v-[a-zA-Z-]+(?::[a-zA-Z-\.]+)?="[^"]*"/g,
      /@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*="[^"]*"/g,
      /:[a-zA-Z-]+(?:\.[a-zA-Z-]+)*="[^"]*"/g,
      /v-slot:[a-zA-Z-]+="[^"]*"/g,
      /#[a-zA-Z-]+="[^"]*"/g,
    ],
    il = [/\{\{[^}]+\}\}/g, /v-text="[^"]*"/g, /v-html="[^"]*"/g];
  function dl(t) {
    return (
      Be(
        () => {
          const r = new Map(),
            o = new Map();
          let n = t;
          return (
            S.debug("Vue.jsディレクティブ保護開始", { htmlLength: t.length }),
            ll.forEach((a, g) => {
              n = n.replace(a, (y) => {
                const d = `__VUE_DIR_${g}_${r.size}__`;
                return (
                  r.set(d, y), S.debug(`ディレクティブ保護: ${y} → ${d}`), d
                );
              });
            }),
            il.forEach((a, g) => {
              n = n.replace(a, (y) => {
                const d = `__VUE_INT_${g}_${o.size}__`;
                return o.set(d, y), S.debug(`補間記法保護: ${y} → ${d}`), d;
              });
            }),
            S.success("Vue.jsディレクティブ保護完了", {
              directiveCount: r.size,
              interpolationCount: o.size,
              resultLength: n.length,
            }),
            { html: n, directives: r, interpolations: o }
          );
        },
        Me,
        "Vue.jsディレクティブ保護中にエラーが発生しました",
        oe.TEMPLATE
      ) || { html: t, directives: new Map(), interpolations: new Map() }
    );
  }
  function or(t, r) {
    return (
      Be(
        () => {
          let o = t;
          return (
            S.debug("Vue.jsディレクティブ復元開始", {
              directiveCount: r.directives.size,
              interpolationCount: r.interpolations.size,
            }),
            r.directives.forEach((n, a) => {
              (o = o.replace(new RegExp(a, "g"), n)),
                S.debug(`ディレクティブ復元: ${a} → ${n}`);
            }),
            r.interpolations.forEach((n, a) => {
              (o = o.replace(new RegExp(a, "g"), n)),
                S.debug(`補間記法復元: ${a} → ${n}`);
            }),
            S.success("Vue.jsディレクティブ復元完了", {
              resultLength: o.length,
            }),
            o
          );
        },
        Me,
        "Vue.jsディレクティブ復元中にエラーが発生しました",
        oe.TEMPLATE
      ) || t
    );
  }
  function cl(t) {
    return (
      Be(
        () => {
          const r = dl(t),
            n = new DOMParser().parseFromString(r.html, "text/html");
          return (
            S.debug("安全DOMパース完了", {
              originalLength: t.length,
              protectedLength: r.html.length,
              parsedElementCount: n.body.children.length,
            }),
            { doc: n, preservation: r }
          );
        },
        Me,
        "安全DOMパース中にエラーが発生しました",
        oe.TEMPLATE
      ) || {
        doc: new DOMParser().parseFromString("<div></div>", "text/html"),
        preservation: {
          html: t,
          directives: new Map(),
          interpolations: new Map(),
        },
      }
    );
  }
  function rr(t) {
    return t
      ? t
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, " ")
      : "";
  }
  function pl(t, r, o) {
    return (
      Be(
        () => {
          S.debug("統合テンプレート処理開始", {
            componentId: r.id,
            htmlLength: t.length,
          });
          let n = t;
          return (
            (n = n.replace(
              /(\(\$[^:)]+\?:[^)]*\)|\(\$[^:)]+:[^)]*\)|\{\$[^:}]+:[^}]*\})/g,
              (a) =>
                a.includes("?:")
                  ? ul(a, r)
                  : a.startsWith("(") && a.includes(":")
                  ? ml(a, r)
                  : a.startsWith("{") && a.includes(":")
                  ? fl(a, r, o)
                  : a
            )),
            S.success("統合テンプレート処理完了", {
              componentId: r.id,
              resultLength: n.length,
            }),
            n
          );
        },
        Me,
        `統合テンプレート処理中にエラーが発生しました (componentId: ${r.id})`,
        oe.TEMPLATE
      ) || t
    );
  }
  function ul(t, r) {
    const o = t.match(/\(\$([^:?]+)\?:([^)]*)\)/);
    if (!o) return t;
    const [, n, a] = o,
      g = a.split("|"),
      y = r[n];
    return Array.isArray(y)
      ? y.join(" ")
      : y && g.includes(String(y))
      ? String(y)
      : g[0] || "";
  }
  function ml(t, r) {
    const o = t.match(/\(\$([^:]+):([^)]*)\)/);
    if (!o) return t;
    const [, n, a] = o,
      g = a.split("|"),
      y = r[n];
    return y && g.includes(String(y)) ? String(y) : g[0] || "";
  }
  function fl(t, r, o) {
    const n = t.match(/\{\$([^:]+):([^}]*)\}/);
    if (!n) return t;
    const [, a, g] = n,
      y = r[a],
      d = rr(y ? String(y) : g);
    return gl(o, a)
      ? `<div class="tiptap-content" data-component-id="${r.id}" data-param-name="${a}">${d}</div>`
      : d;
  }
  function gl(t, r) {
    const o = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      n = new RegExp(`\\{\\$${o}:[^}]*\\}`, "g");
    let a;
    for (; (a = n.exec(t)) !== null; ) {
      const g = a.index,
        y = t.substring(0, g),
        d = y.lastIndexOf("<"),
        h = y.lastIndexOf(">");
      if (d > h) continue;
      const C = [];
      if (
        ([
          /<(pre|code)[^>]*>[\s\S]*?<\/(pre|code)>/gi,
          /<div[^>]*class="[^"]*code-block[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
        ].forEach((c) => {
          c.lastIndex = 0;
          let l;
          for (; (l = c.exec(t)) !== null; )
            C.push({ start: l.index, end: l.index + l[0].length });
        }),
        !C.some((c) => g >= c.start && g <= c.end))
      )
        return !0;
    }
    return !1;
  }
  const xt = new Map();
  function hl(t, r, o) {
    const n = `${t}:${r}`;
    if (xt.has(n)) return xt.get(n);
    const a = o(t, r);
    return xt.set(n, a), a;
  }
  function yl() {
    xt.clear(), S.debug("テンプレートキャッシュをクリアしました");
  }
  function bl(t) {
    return t
      ? t
          .replace(/\\/g, "\\\\")
          .replace(/'/g, "\\'")
          .replace(/"/g, '\\"')
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\t/g, "\\t")
      : "";
  }
  const nr = new DOMParser(),
    qe = new Map(),
    El = 50;
  function $l(t) {
    return (
      Be(
        () => {
          if (qe.has(t)) {
            const o = qe.get(t);
            if (o)
              return (
                S.debug("DOMParser: キャッシュからヒット"), o.cloneNode(!0)
              );
          }
          const r = nr.parseFromString(t, "text/html");
          if (qe.size >= El) {
            const o = qe.keys().next().value;
            o && qe.delete(o);
          }
          return (
            qe.set(t, r.cloneNode(!0)),
            S.debug("DOMParser: 新規パース＆キャッシュ保存"),
            r
          );
        },
        Me,
        "HTML解析中にエラーが発生しました",
        oe.TEMPLATE
      ) || nr.parseFromString("<div></div>", "text/html")
    );
  }
  function wl(t, r, o, n = 1) {
    return (
      Be(
        () => {
          S.debug("最適化z-directive処理開始", {
            componentId: r.id,
            currentDepth: n,
          });
          let a = t;
          return (
            (a = zl(a, r)),
            (a = vl(a, r, o)),
            (a = Nl(a, r, n, o)),
            S.success("最適化z-directive処理完了", {
              componentId: r.id,
              resultLength: a.length,
            }),
            a
          );
        },
        Me,
        `z-directive処理中にエラーが発生しました (componentId: ${r.id})`,
        oe.TEMPLATE
      ) || t
    );
  }
  function zl(t, r) {
    return t.replace(
      /<([^>]*z-if="([^"]*)"[^>]*)>([\\s\\S]*?)<\/[^>]*>/g,
      (o, n, a, g) => {
        if (!r[a]) return S.debug(`z-if要素を非表示: ${a}`), "";
        const d = n.replace(/\s*z-if="[^"]*"\s*/, " ").trim();
        return S.debug(`z-if要素を表示: ${a}`), `<div ${d}>${g}</div>`;
      }
    );
  }
  function vl(t, r, o) {
    return t.replace(
      /<div([^>]*z-for="([^"]*)"[^>]*)>([\\s\\S]*?)<\/div>/g,
      (n, a, g, y) => {
        const d = r[g];
        return (
          S.debug(`z-for処理: ${g}`, {
            length: Array.isArray(d) ? d.length : "not array",
          }),
          !Array.isArray(d) || d.length === 0
            ? `
          <div class="add-array-item-button-container">
            <button class="add-array-item-button" onclick="window.addArrayItem('${r.id}', '${g}')">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">${g}を追加</span>
            </button>
          </div>
        `
            : d
                .map((C) => {
                  let v = y;
                  return (
                    Object.keys(C).forEach((w) => {
                      if (w !== "id") {
                        const N = C[w];
                        if (typeof N == "string")
                          [
                            new RegExp(`\\{\\$${w}:([^}]+)\\}`, "g"),
                            new RegExp(`\\(\\$${w}:([^)]+)\\)`, "g"),
                          ].forEach((c) => {
                            v = v.replace(c, N);
                          });
                        else if (Array.isArray(N)) {
                          const E = new RegExp(`\\(\\$${w}\\?:([^)]+)\\)`, "g");
                          v = v.replace(E, N.join(" "));
                        }
                      }
                    }),
                    v
                  );
                })
                .join("")
        );
      }
    );
  }
  function Nl(t, r, o, n) {
    const a = $l(t),
      g = a.querySelectorAll("[z-slot]");
    return (
      S.debug(`z-slot要素発見: ${g.length}個`),
      g.forEach((y) => {
        const d = y.getAttribute("z-slot");
        if (d) {
          const h = r[d],
            C = Array.isArray(h) ? h : [];
          if (C.length === 0)
            y.innerHTML = `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${bl(
              r.id
            )}', 0)">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">ネストパーツを追加</span>
            </button>
          </div>
        `;
          else {
            const v = C.map((w, N) => {
              const E = o + 1,
                c = Math.max(0, E - 1) * 20;
              return `
            <div class="nested-component nested-depth-${E}" style="margin-left: ${c}px;">
              <div class="component-header">
                <span class="component-type">${w.type}</span>
                <span class="component-module">${w.module_name}</span>
                <button onclick="window.openNestedEditor('${w.id}')">編集</button>
                <button onclick="window.deleteNestedPart('${w.id}')">削除</button>
              </div>
            </div>
          `;
            }).join("");
            y.innerHTML = v;
          }
          y.removeAttribute("z-slot");
        }
      }),
      a.body.innerHTML
    );
  }
  function Cl() {
    qe.clear(), S.debug("DOMキャッシュをクリアしました");
  }
  function io(t) {
    return t
      ? t
          .replace(/\\/g, "\\\\")
          .replace(/'/g, "\\'")
          .replace(/"/g, '\\"')
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\t/g, "\\t")
      : "";
  }
  function ar(t) {
    return t
      ? t
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, " ")
      : "";
  }
  function sr() {
    const t = e.ref(null);
    let r = !1;
    const o = (s, i) => {
        const p = `\\{\\$${i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:[^}]*\\}`,
          m = new RegExp(p, "g");
        let $;
        for (; ($ = m.exec(s)) !== null; ) {
          const z = $.index,
            A = s.substring(0, z),
            u = A.lastIndexOf("<"),
            b = A.lastIndexOf(">");
          if (u > b) continue;
          const k = [];
          if (
            ([
              /<(pre|code)[^>]*>[\s\S]*?<\/(pre|code)>/gi,
              /<div[^>]*class="[^"]*code-block[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
            ].forEach((I) => {
              I.lastIndex = 0;
              let V;
              for (; (V = I.exec(s)) !== null; )
                k.push({ start: V.index, end: V.index + V[0].length });
            }),
            !k.some((I) => z >= I.start && z <= I.end))
          )
            return !0;
        }
        return !1;
      },
      n = (s, i, p) =>
        s.replace(/\{\$([^:]+):(.*?)\}/g, (m, $, z) => {
          const A = String(i[$] || z),
            u = ar(A);
          return o(p, $)
            ? $ === "content"
              ? `<div class="zero-code-rich-editable-text block-editable" data-component-id="${i.id}" data-param="${$}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${$}', this.innerHTML, this);">${u}</div>`
              : `<span class="zero-code-rich-editable-text inline-editable" data-component-id="${i.id}" data-param="${$}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${$}', this.innerHTML, this);">${u}</span>`
            : u;
        }),
      a = (s, i, p, m, $) =>
        s.replace(/\{\$([^:]+):(.*?)\}/g, (z, A, u) => {
          const b = String(i[A] || u),
            k = ar(b);
          if (o(m, A)) {
            const D = p[$].indexOf(i),
              M = `${p.id}_${$}_${D}_${A}`;
            return A === "content"
              ? `<div class="zero-code-rich-editable-text array-item-text block-editable" data-component-id="${M}" data-param="${A}" data-array-name="${$}" data-item-index="${D}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${M}', '${A}', this.innerHTML, this);">${k}</div>`
              : `<span class="zero-code-rich-editable-text array-item-text inline-editable" data-component-id="${M}" data-param="${A}" data-array-name="${$}" data-item-index="${D}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${M}', '${A}', this.innerHTML, this);">${k}</span>`;
          }
          return k;
        }),
      g = (s, i) =>
        s.replace(/\(\$([^:]+):(.*?)\)/g, (p, m, $) => {
          if (i[m]) {
            let u = i[m];
            return (
              u === "指定無し" && (u = ""),
              Array.isArray(u) ? u.join(" ") : String(u)
            );
          }
          const z = m;
          if (i[z]) {
            let u = i[z];
            return (
              u === "指定無し" && (u = ""),
              Array.isArray(u) ? u.join(" ") : String(u)
            );
          }
          return $.split("|").filter((u) => u.trim())[0] || "";
        }),
      y = (s, i) =>
        s.replace(/\(\$([^:?]+):(.*?)\)/g, (p, m, $) => {
          let z = i[m];
          return (
            z === "指定無し" && (z = ""),
            Array.isArray(z)
              ? z.join(" ")
              : z
              ? String(z)
              : $.split("|").filter((u) => u.trim())[0] || ""
          );
        }),
      d = (s, i) =>
        s.replace(/\(\$([^:?]+)\?:(.*?)\)/g, (p, m, $) => {
          const z = i[m];
          return Array.isArray(z) ? z.join(" ") : String(z || "");
        }),
      h = (s, i, p, m, $) =>
        s.replace(/@slot\(\$([^)]+)\)@/g, (z, A) => {
          const u = i[A],
            b = Array.isArray(u) ? u : [];
          return p(b, [m], (k) => k.join("-"), $);
        }),
      C = (s, i, p, m) => {
        const $ = p(s.type, s.module_name);
        if (!$)
          return `<div>テンプレートが見つかりません: ${s.type}/${s.module_name}</div>`;
        let z = $;
        return (
          (z = y(z, s)),
          (z = d(z, s)),
          (z = n(z, s, $)),
          (z = h(z, s, m, i, p)),
          (z = E(z, s, p, i, 1)),
          z
        );
      },
      v = (s, i, p = 0) => {
        const m = i(s.type, s.module_name);
        if (!m)
          return `<div>テンプレートが見つかりません: ${s.type}/${s.module_name}</div>`;
        let $ = m;
        return (
          ($ = y($, s)),
          ($ = d($, s)),
          ($ = n($, s, m)),
          ($ = $.replace(/@slot\(\$([^)]+)\)@/g, "")),
          ($ = E($, s, i, p, 1)),
          $
        );
      },
      w = (s, i, p, m) => {
        const $ = i(s.type, s.module_name);
        if (!$)
          return `<div>テンプレートが見つかりません: ${s.type}/${s.module_name}</div>`;
        let z = $;
        return (
          (z = y(z, s)),
          (z = d(z, s)),
          (z = n(z, s, $)),
          (z = z.replace(/@slot\(\$([^)]+)\)@/g, "")),
          (z = E(z, s, i, 0, p)),
          z
        );
      },
      N = (s, i = [], p, m) => {
        if (!s || s.length === 0)
          return `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${io(
            p(i)
          )}', 0)">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">ネストパーツを追加（${
              i.length + 1
            }階層目）</span>
          </button>
        </div>
      `;
        let $ = "";
        return (
          s.forEach((z, A) => {
            const u = [...i, A],
              b = p(u),
              k = u.length;
            ($ += `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${io(
            p(i)
          )}', ${A})">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">上にパーツを追加（${
              i.length + 1
            }階層目）</span>
          </button>
        </div>
      `),
              ($ += `
        <div class="zero-code-nested-component zero-code-nested-depth-${k} zero-code-draggable-nested" 
             draggable="true" 
             data-component-id="${z.id}" 
             data-path="${b}" 
             data-parent-path="${p(i)}"
             data-index="${A}"
>
          <div class="zero-code-component-header zero-code-nested-header">
            <!-- ドラッグハンドル -->
            <div class="zero-code-drag-handle-nested">
              ⠿
            </div>
            <div class="zero-code-header-actions">
              <button class="zero-code-edit-button" onclick="window.openNestedEditor('${b}')">編集</button>
              <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${b}')">削除</button>
            </div>
          </div>
          <div class="zero-code-nested-component-content">
            ${
              m
                ? v(z, m)
                : `<div>テンプレートが見つかりません: ${z.type}/${z.module_name}</div>`
            }
          </div>
        </div>
      `),
              z.nested_parts &&
                Array.isArray(z.nested_parts) &&
                z.nested_parts.length > 0 &&
                ($ += N(z.nested_parts, u, p, m));
          }),
          ($ += `
      <div class="zero-code-add-nested-part-button-container">
        <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${io(
          p(i)
        )}', ${s.length})">
          <span class="zero-code-plus-icon">＋</span>
          <span class="zero-code-button-text">下にパーツを追加（${
            i.length + 1
          }階層目）</span>
        </button>
      </div>
    `),
          $
        );
      },
      E = (s, i, p, m = 0, $ = 1) =>
        Be(
          () => {
            S.debug("processZDirectives開始", {
              componentId: i.id,
              type: i.type,
              htmlLength: s.length,
              currentDepth: $,
            }),
              r || (ol(a, g), (r = !0));
            const { doc: z, preservation: A } = cl(s),
              u = (D, M, I) => w(D, M, I);
            lo(z, i), rl(z, i), tr(z, i, $, u, p);
            const b = A.html.match(/z-for="[^"]*"/g),
              k = z.querySelectorAll("[z-for]");
            if (
              (S.debug(
                `元のHTML内z-for: ${b ? b.length : 0}個、DOM処理後: ${
                  k.length
                }個`
              ),
              b && b.length > 0 && k.length === 0)
            )
              S.debug(
                "DOM処理でz-forが処理された - 正規表現フォールバックをスキップ"
              );
            else if (k.length > 0) {
              S.debug(
                "DOM処理で未処理のz-for要素あり - 正規表現フォールバック実行"
              );
              const D = al(A.html, i);
              if (D !== A.html)
                return (
                  S.debug("正規表現処理で変更あり - Vue.js復元して終了"),
                  or(D, A)
                );
            }
            sl(z, i, $, u, p);
            const P = z.body.innerHTML,
              _ = or(P, A);
            return (
              S.success(
                "processZDirectives完了（Vue.jsディレクティブ復元済み）",
                {
                  componentId: i.id,
                  resultLength: _.length,
                  directiveCount: A.directives.size,
                  interpolationCount: A.interpolations.size,
                }
              ),
              _
            );
          },
          Me,
          `Z-Directive処理中にエラーが発生しました (componentId: ${i.id})`,
          oe.TEMPLATE
        ) || s;
    return {
      editingText: t,
      shouldApplyTiptap: o,
      processTextReplacementWithTemplate: n,
      processArrayItemTextReplacement: a,
      processArrayItemParameterReplacement: g,
      processSelectionSyntax: y,
      processConditionalClassSyntax: d,
      processSlotSyntax: h,
      processZDirectives: E,
      renderComponentWithNested: C,
      renderComponentWithoutSlot: v,
      renderNestedComponentWithDepth: w,
      renderNestedComponentsWithUI: N,
      hasNestedSlot: (s, i) => {
        const p = i(s.type, s.module_name);
        return p ? p.includes("@slot($nested_parts)@") : !1;
      },
      renderComponentOptimized: (s, i) =>
        Be(
          () => {
            S.debug("最適化レンダリング開始", {
              componentId: s.id,
              type: s.type,
            });
            const p = hl(s.type, s.module_name, i);
            if (!p)
              return `<div>テンプレートが見つかりません: ${s.type}/${s.module_name}</div>`;
            let m = pl(p, s, p);
            return (
              (m = wl(m, s, i, 1)),
              S.success("最適化レンダリング完了", {
                componentId: s.id,
                resultLength: m.length,
              }),
              m
            );
          },
          Me,
          `最適化レンダリング中にエラーが発生しました (componentId: ${s.id})`,
          oe.TEMPLATE
        ) || `<div>レンダリングエラー: ${s.id}</div>`,
      clearAllCaches: () => {
        yl(), Cl(), S.debug("全ての最適化キャッシュをクリアしました");
      },
    };
  }
  const kl = { class: "zero-code-page-preview" },
    Al = { class: "zero-code-data-tabs" },
    Pl = { class: "zero-code-page-preview-content" },
    Sl = ["innerHTML"],
    _l = { key: 1, class: "zero-code-html-source" },
    Il = { class: "zero-code-html-source-pre" },
    Dl = e.defineComponent({
      __name: "PagePreview",
      props: { pageData: { type: Array }, parts: { type: Array } },
      setup(t) {
        const r = t;
        sr();
        const o = e.ref("rendered"),
          n = (N) => {
            if (!N) return "";
            try {
              const l = new globalThis.DOMParser().parseFromString(
                `<root>${N}</root>`,
                "text/html"
              ).body.firstChild;
              if (!l) return N;
              const f = new Set([
                  "img",
                  "br",
                  "hr",
                  "input",
                  "meta",
                  "link",
                  "area",
                  "base",
                  "col",
                  "embed",
                  "source",
                  "track",
                  "wbr",
                ]),
                s = new Set([
                  "span",
                  "a",
                  "strong",
                  "em",
                  "u",
                  "mark",
                  "code",
                  "small",
                  "sub",
                  "sup",
                  "i",
                  "b",
                ]),
                i = (m, $ = 0, z = !1) => {
                  var H;
                  const A = m.tagName.toLowerCase(),
                    u = z ? "" : "  ".repeat($),
                    b = f.has(A),
                    k = s.has(A);
                  let P = `<${A}`;
                  for (let F = 0; F < m.attributes.length; F++) {
                    const X = m.attributes[F];
                    P += ` ${X.name}="${X.value}"`;
                  }
                  P += ">";
                  let _ = u + P;
                  if (b) return _;
                  let D = !1,
                    M = !1;
                  const I = [];
                  let V = "";
                  for (let F = 0; F < m.childNodes.length; F++) {
                    const X = m.childNodes[F];
                    if (X.nodeType === 1) {
                      D = !0;
                      const x = i(X, $ + 1, k || z);
                      I.push(x);
                    } else if (X.nodeType === 3) {
                      const L =
                        (H = X.textContent) == null
                          ? void 0
                          : H.replace(/\s+/g, " ").trim();
                      L && ((M = !0), (V += L));
                    }
                  }
                  return (
                    D && M
                      ? k || z
                        ? (_ += V + I.join(""))
                        : ((_ +=
                            V +
                            `
` +
                            I.join(`
`)),
                          I.length > 0 &&
                            (_ +=
                              `
` + u))
                      : D
                      ? k || z
                        ? (_ += I.join(""))
                        : ((_ +=
                            `
` +
                            I.join(`
`)),
                          I.length > 0 &&
                            (_ +=
                              `
` + u))
                      : M && (_ += V),
                    (_ += `</${A}>`),
                    _
                  );
                };
              let p = "";
              for (let m = 0; m < l.childNodes.length; m++) {
                const $ = l.childNodes[m];
                $.nodeType === 1 &&
                  (p +=
                    i($) +
                    `
`);
              }
              return p
                .replace(
                  /\n{3,}/g,
                  `

`
                )
                .replace(
                  /\n\s*\n\s*</g,
                  `
<`
                )
                .trim();
            } catch {
              return N.replace(
                />\s*</g,
                `>
<`
              )
                .split(
                  `
`
                )
                .filter((c) => c.trim())
                .map((c, l, f) => {
                  const s = c.trim();
                  if (!s) return "";
                  let i = 0;
                  for (let p = 0; p < l; p++) {
                    const m = f[p].trim();
                    m.match(/<[^\/!][^>]*[^\/]>$/) && i++,
                      m.match(/<\/[^>]+>$/) && i--;
                  }
                  return (
                    s.startsWith("</") && i--, "  ".repeat(Math.max(0, i)) + s
                  );
                }).join(`
`);
            }
          },
          a = (N, E) => {
            if (!Array.isArray(r.parts)) return "";
            const c = r.parts.find((f) => f.type === N);
            if (!c) return "";
            const l = c.module.find((f) => f.title === E);
            return l ? l.body : "";
          },
          g = () => {
            if (!Array.isArray(r.pageData) || r.pageData.length === 0)
              return '<div class="zero-code-no-content">ページにコンテンツがありません</div>';
            let N = '<div class="zero-code-page-container">';
            return (
              r.pageData.forEach((E, c) => {
                const l = y(E);
                !l || l.trim() === ""
                  ? (N += `<div class="zero-code-error-component">テンプレートが見つかりません: ${E.type}/${E.module_name}</div>`)
                  : (N += l);
              }),
              (N += "</div>"),
              N
            );
          },
          y = (N) => {
            const E = a(N.type, N.module_name);
            if (!E) return "";
            let c = E;
            return (c = d(c, N)), (c = C(c, N)), (c = v(c, N)), c;
          },
          d = (N, E) => {
            const l = new globalThis.DOMParser().parseFromString(
              N,
              "text/html"
            );
            return (
              l.querySelectorAll("[z-if]").forEach((m) => {
                const $ = m.getAttribute("z-if");
                $ && (E[$] ? m.removeAttribute("z-if") : m.remove());
              }),
              l.querySelectorAll("[z-for-wrapper]").forEach((m) => {
                const $ = m.getAttribute("z-for-wrapper");
                if ($) {
                  const z = E[$];
                  !Array.isArray(z) || z.length === 0
                    ? m.remove()
                    : m.removeAttribute("z-for-wrapper");
                }
              }),
              l.querySelectorAll("[z-for]").forEach((m) => {
                const $ = m.getAttribute("z-for");
                if ($) {
                  const z = E[$];
                  if (Array.isArray(z) && z.length > 0) {
                    const A = a(E.type, E.module_name),
                      u = h(A, $);
                    if (u) {
                      const b = z
                        .map((k) => {
                          let P = u;
                          return (P = d(P, k)), (P = C(P, k)), (P = v(P, k)), P;
                        })
                        .join("");
                      m.outerHTML = b;
                    } else m.remove();
                  } else m.remove();
                }
              }),
              l.querySelectorAll("[z-slot]").forEach((m) => {
                const $ = m.getAttribute("z-slot");
                if ($)
                  if (E[$] && Array.isArray(E[$])) {
                    const z = w(E[$]);
                    m.outerHTML = z;
                  } else m.remove();
              }),
              l.body.innerHTML
            );
          },
          h = (N, E) => {
            const c = new RegExp(`<div[^>]*z-for="${E}"[^>]*>`),
              l = N.match(c);
            if (!l) return "";
            const f = N.indexOf(l[0]);
            if (f === -1) return "";
            let s = 0,
              i = f;
            for (let u = f; u < N.length; u++)
              if (N.substring(u, u + 4) === "<div") s++;
              else if (N.substring(u, u + 6) === "</div>" && (s--, s === 0)) {
                i = u + 6;
                break;
              }
            if (s !== 0) return "";
            const p = N.substring(f, i),
              m = l[0].replace(/\s*z-for="[^"]*"\s*/, " ").replace(/\s+>/, ">"),
              $ = p.indexOf(">") + 1,
              z = p.lastIndexOf("</div>"),
              A = p.substring($, z);
            return m + A + "</div>";
          },
          C = (N, E) => (
            (N = N.replace(/\(\$([^:?]+)\?:(.*?)\)/g, (c, l, f) => {
              const s = E[l];
              return Array.isArray(s) ? s.join(" ") : s || "";
            })),
            (N = N.replace(/\(\$([^:]+):(.*?)\)/g, (c, l, f) => {
              let s = E[l];
              return (
                (s === "指定なし" || s === "") && (s = ""),
                s
                  ? Array.isArray(s)
                    ? s.join(" ")
                    : s
                  : f.includes("|")
                  ? f.split("|").filter((p) => p.trim() !== "")[0] || ""
                  : f.includes(",")
                  ? f
                      .split(",")
                      .map((p) => p.trim())
                      .filter((p) => p !== "")[0] || ""
                  : f
              );
            })),
            N
          ),
          v = (N, E) =>
            N.replace(/\{\$([^:]+):(.*?)\}/g, (c, l, f) => String(E[l] || f)),
          w = (N) => {
            if (!N || N.length === 0) return "";
            let E = "";
            return (
              N.forEach((c) => {
                const l = y(c);
                l && l.trim() !== "" && (E += l);
              }),
              E
            );
          };
        return (N, E) => (
          e.openBlock(),
          e.createElementBlock("div", kl, [
            e.createElementVNode("div", Al, [
              e.createElementVNode(
                "button",
                {
                  class: e.normalizeClass([
                    "zero-code-data-tab-button",
                    { active: o.value === "rendered" },
                  ]),
                  onClick: E[0] || (E[0] = (c) => (o.value = "rendered")),
                },
                " レンダリング結果 ",
                2
              ),
              e.createElementVNode(
                "button",
                {
                  class: e.normalizeClass([
                    "zero-code-data-tab-button",
                    { active: o.value === "source" },
                  ]),
                  onClick: E[1] || (E[1] = (c) => (o.value = "source")),
                },
                " HTMLソース ",
                2
              ),
            ]),
            e.createElementVNode("div", Pl, [
              o.value === "rendered"
                ? (e.openBlock(),
                  e.createElementBlock(
                    "div",
                    { key: 0, innerHTML: g() },
                    null,
                    8,
                    Sl
                  ))
                : e.createCommentVNode("", !0),
              o.value === "source"
                ? (e.openBlock(),
                  e.createElementBlock("div", _l, [
                    E[2] ||
                      (E[2] = e.createElementVNode(
                        "div",
                        { class: "zero-code-source-header" },
                        [
                          e.createElementVNode(
                            "p",
                            { class: "zero-code-source-description" },
                            "パーツごとに改行・インデントされたHTMLソース"
                          ),
                        ],
                        -1
                      )),
                    e.createElementVNode("pre", Il, [
                      e.createElementVNode(
                        "code",
                        null,
                        e.toDisplayString(n(g())),
                        1
                      ),
                    ]),
                  ]))
                : e.createCommentVNode("", !0),
            ]),
          ])
        );
      },
    }),
    Tl = { class: "zero-code-tab-content" },
    Vl = e.defineComponent({
      __name: "PreviewPanel",
      props: {
        editablePageData: { type: Array },
        localParts: { type: Array },
        parts: { type: Array },
      },
      setup(t) {
        return (r, o) => (
          e.openBlock(),
          e.createElementBlock("div", Tl, [
            e.createVNode(
              Dl,
              {
                "page-data": r.editablePageData,
                parts:
                  r.localParts && r.localParts.length > 0
                    ? r.localParts
                    : r.parts || [],
              },
              null,
              8,
              ["page-data", "parts"]
            ),
          ])
        );
      },
    }),
    Bl = { class: "zero-code-modal-header" },
    Ml = { class: "zero-code-modal-body" },
    Fl = { class: "zero-code-img-file-input-section" },
    Ol = { key: 0, class: "zero-code-img-file-info" },
    Ll = { class: "zero-code-img-file-preview" },
    xl = ["src"],
    Rl = { class: "zero-code-img-file-details" },
    Hl = { class: "zero-code-form-section" },
    Zl = { class: "zero-code-form-group" },
    jl = ["disabled"],
    Ul = { class: "zero-code-form-group" },
    Wl = ["disabled"],
    Xl = { key: 0, class: "zero-code-form-group" },
    Yl = ["disabled"],
    Kl = { class: "zero-code-modal-footer" },
    Jl = ["disabled"],
    ql = e.defineComponent({
      __name: "ImageUploadModal",
      props: { category: { type: String }, componentId: { type: String } },
      emits: ["close", "upload"],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.ref(null),
          g = e.ref(""),
          y = e.ref(""),
          d = e.ref(""),
          h = e.ref(o.componentId || ""),
          C = e.computed(() => a.value && y.value.trim() && d.value.trim()),
          v = (i) => {
            const p = i.target;
            p.files && p.files[0] && N(p.files[0]);
          },
          w = (i) => {
            i.preventDefault(),
              i.dataTransfer &&
                i.dataTransfer.files[0] &&
                N(i.dataTransfer.files[0]);
          },
          N = (i) => {
            (a.value = i),
              (y.value = i.name.replace(/\.[^/.]+$/, "")),
              (d.value = i.name),
              g.value && URL.revokeObjectURL(g.value),
              (g.value = URL.createObjectURL(i));
          },
          E = (i) =>
            new Promise((p, m) => {
              const $ = new FileReader();
              $.readAsDataURL(i),
                ($.onload = () => p($.result)),
                ($.onerror = (z) => m(z));
            }),
          c = () =>
            Date.now().toString(36) + Math.random().toString(36).substr(2),
          l = (i) => {
            if (i === 0) return "0 Bytes";
            const p = 1024,
              m = ["Bytes", "KB", "MB", "GB"],
              $ = Math.floor(Math.log(i) / Math.log(p));
            return parseFloat((i / Math.pow(p, $)).toFixed(2)) + " " + m[$];
          },
          f = async () => {
            if (!(!a.value || !C.value))
              try {
                const i = await E(a.value),
                  p = {
                    id: c(),
                    name: y.value,
                    originalName: a.value.name,
                    url: i,
                    alt: d.value,
                    size: a.value.size,
                    type: a.value.type,
                    uploadedAt: new Date().toISOString(),
                    category: o.category,
                    componentId: o.category === "individual" ? h.value : void 0,
                    fileData: { base64: i },
                  };
                n("upload", p);
              } catch {
                alert("画像のアップロードに失敗しました。");
              }
          },
          s = () => {
            g.value && URL.revokeObjectURL(g.value);
          };
        return (
          e.onUnmounted(s),
          (i, p) => (
            e.openBlock(),
            e.createElementBlock(
              "div",
              {
                class: "zero-code-modal-overlay",
                onClick: p[8] || (p[8] = (m) => i.$emit("close")),
              },
              [
                e.createElementVNode(
                  "div",
                  {
                    class: "zero-code-modal-content",
                    onClick:
                      p[7] || (p[7] = e.withModifiers(() => {}, ["stop"])),
                  },
                  [
                    e.createElementVNode("div", Bl, [
                      e.createElementVNode(
                        "h4",
                        null,
                        "画像アップロード（" +
                          e.toDisplayString(
                            i.category === "common" ? "共通" : "個別"
                          ) +
                          "）",
                        1
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-img-close-btn",
                          onClick: p[0] || (p[0] = (m) => i.$emit("close")),
                        },
                        "×"
                      ),
                    ]),
                    e.createElementVNode("div", Ml, [
                      e.createElementVNode("div", Fl, [
                        p[9] ||
                          (p[9] = e.createElementVNode(
                            "label",
                            {
                              for: "file-input",
                              class: "zero-code-img-file-input-label",
                            },
                            [
                              e.createElementVNode(
                                "div",
                                { class: "zero-code-img-file-input-area" },
                                [
                                  e.createElementVNode(
                                    "span",
                                    { class: "zero-code-img-file-input-text" },
                                    "クリックしてファイルを選択"
                                  ),
                                  e.createElementVNode(
                                    "span",
                                    { class: "zero-code-img-file-input-hint" },
                                    "またはドラッグ&ドロップ"
                                  ),
                                ]
                              ),
                            ],
                            -1
                          )),
                        e.createElementVNode(
                          "input",
                          {
                            id: "file-input",
                            type: "file",
                            accept: "image/*",
                            style: { display: "none" },
                            onChange: v,
                            onDrop: w,
                            onDragover:
                              p[1] ||
                              (p[1] = e.withModifiers(() => {}, ["prevent"])),
                            onDragenter:
                              p[2] ||
                              (p[2] = e.withModifiers(() => {}, ["prevent"])),
                          },
                          null,
                          32
                        ),
                      ]),
                      a.value
                        ? (e.openBlock(),
                          e.createElementBlock("div", Ol, [
                            e.createElementVNode("div", Ll, [
                              e.createElementVNode(
                                "img",
                                { src: g.value, alt: "プレビュー" },
                                null,
                                8,
                                xl
                              ),
                            ]),
                            e.createElementVNode("div", Rl, [
                              e.createElementVNode("p", null, [
                                p[10] ||
                                  (p[10] = e.createElementVNode(
                                    "strong",
                                    null,
                                    "ファイル名:",
                                    -1
                                  )),
                                e.createTextVNode(
                                  " " + e.toDisplayString(a.value.name),
                                  1
                                ),
                              ]),
                              e.createElementVNode("p", null, [
                                p[11] ||
                                  (p[11] = e.createElementVNode(
                                    "strong",
                                    null,
                                    "サイズ:",
                                    -1
                                  )),
                                e.createTextVNode(
                                  " " + e.toDisplayString(l(a.value.size)),
                                  1
                                ),
                              ]),
                              e.createElementVNode("p", null, [
                                p[12] ||
                                  (p[12] = e.createElementVNode(
                                    "strong",
                                    null,
                                    "タイプ:",
                                    -1
                                  )),
                                e.createTextVNode(
                                  " " + e.toDisplayString(a.value.type),
                                  1
                                ),
                              ]),
                            ]),
                          ]))
                        : e.createCommentVNode("", !0),
                      e.createElementVNode("div", Hl, [
                        e.createElementVNode("div", Zl, [
                          p[13] ||
                            (p[13] = e.createElementVNode(
                              "label",
                              { for: "image-name" },
                              "保存名:",
                              -1
                            )),
                          e.withDirectives(
                            e.createElementVNode(
                              "input",
                              {
                                id: "image-name",
                                "onUpdate:modelValue":
                                  p[3] || (p[3] = (m) => (y.value = m)),
                                type: "text",
                                placeholder: "画像の保存名を入力",
                                disabled: !a.value,
                              },
                              null,
                              8,
                              jl
                            ),
                            [[e.vModelText, y.value]]
                          ),
                        ]),
                        e.createElementVNode("div", Ul, [
                          p[14] ||
                            (p[14] = e.createElementVNode(
                              "label",
                              { for: "image-alt" },
                              "alt属性:",
                              -1
                            )),
                          e.withDirectives(
                            e.createElementVNode(
                              "input",
                              {
                                id: "image-alt",
                                "onUpdate:modelValue":
                                  p[4] || (p[4] = (m) => (d.value = m)),
                                type: "text",
                                placeholder: "画像の説明を入力",
                                disabled: !a.value,
                              },
                              null,
                              8,
                              Wl
                            ),
                            [[e.vModelText, d.value]]
                          ),
                        ]),
                        i.category === "individual"
                          ? (e.openBlock(),
                            e.createElementBlock("div", Xl, [
                              p[15] ||
                                (p[15] = e.createElementVNode(
                                  "label",
                                  { for: "component-id" },
                                  "コンポーネントID:",
                                  -1
                                )),
                              e.withDirectives(
                                e.createElementVNode(
                                  "input",
                                  {
                                    id: "component-id",
                                    "onUpdate:modelValue":
                                      p[5] || (p[5] = (m) => (h.value = m)),
                                    type: "text",
                                    placeholder: "コンポーネントIDを入力",
                                    disabled: !a.value,
                                  },
                                  null,
                                  8,
                                  Yl
                                ),
                                [[e.vModelText, h.value]]
                              ),
                            ]))
                          : e.createCommentVNode("", !0),
                      ]),
                    ]),
                    e.createElementVNode("div", Kl, [
                      e.createElementVNode(
                        "button",
                        {
                          class:
                            "zero-code-img-btn zero-code-img-btn-secondary",
                          onClick: p[6] || (p[6] = (m) => i.$emit("close")),
                        },
                        "キャンセル"
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-img-btn zero-code-img-btn-primary",
                          disabled: !C.value,
                          onClick: f,
                        },
                        " アップロード ",
                        8,
                        Jl
                      ),
                    ]),
                  ]
                ),
              ]
            )
          )
        );
      },
    }),
    Gl = { class: "zero-code-modal-header" },
    Ql = { class: "zero-code-modal-body" },
    ei = { class: "zero-code-img-detail-preview" },
    ti = ["src", "alt"],
    oi = { class: "zero-code-form-section" },
    ri = { class: "zero-code-form-group" },
    ni = { class: "zero-code-form-group" },
    ai = { key: 0, class: "zero-code-form-group" },
    si = { class: "zero-code-img-detail-info" },
    li = { class: "zero-code-img-detail-info-group" },
    ii = { class: "zero-code-img-detail-info-group" },
    di = { class: "zero-code-img-detail-info-group" },
    ci = { class: "zero-code-img-detail-info-group" },
    pi = { class: "zero-code-img-detail-info-group" },
    ui = { class: "zero-code-img-detail-url-group" },
    mi = { class: "zero-code-modal-footer" },
    fi = { class: "zero-code-modal-footer-right" },
    gi = e.defineComponent({
      __name: "ImageDetailModal",
      props: { image: { type: Object } },
      emits: ["close", "delete", "replace"],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.reactive({ ...o.image }),
          g = e.ref(null),
          y = () => {
            confirm("この画像を削除しますか？この操作は取り消せません。") &&
              n("delete", a.id);
          },
          d = () => {
            g.value && g.value.click();
          },
          h = async (E) => {
            const c = E.target;
            if (!c.files || !c.files[0]) return;
            const l = c.files[0];
            if (
              !confirm(
                `画像を "${l.name}" に差し替えますか？この操作は取り消せません。`
              )
            ) {
              c.value = "";
              return;
            }
            try {
              const f = await C(l),
                s = {
                  ...a,
                  originalName: l.name,
                  url: f,
                  size: l.size,
                  type: l.type,
                  uploadedAt: new Date().toISOString(),
                  fileData: { base64: f },
                };
              n("replace", a.id, s);
            } catch {
              alert("画像の差し替えに失敗しました。");
            } finally {
              c.value = "";
            }
          },
          C = (E) =>
            new Promise((c, l) => {
              const f = new FileReader();
              f.readAsDataURL(E),
                (f.onload = () => c(f.result)),
                (f.onerror = (s) => l(s));
            }),
          v = async (E) => {
            try {
              await navigator.clipboard.writeText(E),
                alert("URLをクリップボードにコピーしました");
            } catch {
              const l = document.createElement("textarea");
              (l.value = E),
                document.body.appendChild(l),
                l.select(),
                document.execCommand("copy"),
                document.body.removeChild(l),
                alert("URLをクリップボードにコピーしました");
            }
          },
          w = (E) => {
            if (E === 0) return "0 Bytes";
            const c = 1024,
              l = ["Bytes", "KB", "MB", "GB"],
              f = Math.floor(Math.log(E) / Math.log(c));
            return parseFloat((E / Math.pow(c, f)).toFixed(2)) + " " + l[f];
          },
          N = (E) =>
            new Date(E).toLocaleString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
        return (E, c) => (
          e.openBlock(),
          e.createElementBlock(
            "div",
            {
              class: "zero-code-modal-overlay",
              onClick: c[8] || (c[8] = (l) => E.$emit("close")),
            },
            [
              e.createElementVNode(
                "div",
                {
                  class: "zero-code-modal-content",
                  onClick: c[7] || (c[7] = e.withModifiers(() => {}, ["stop"])),
                },
                [
                  e.createElementVNode("div", Gl, [
                    c[9] ||
                      (c[9] = e.createElementVNode("h4", null, "画像詳細", -1)),
                    e.createElementVNode(
                      "button",
                      {
                        class: "zero-code-close-button",
                        onClick: c[0] || (c[0] = (l) => E.$emit("close")),
                      },
                      "✖️"
                    ),
                  ]),
                  e.createElementVNode("div", Ql, [
                    e.createElementVNode("div", ei, [
                      e.createElementVNode(
                        "img",
                        { src: a.url, alt: a.alt },
                        null,
                        8,
                        ti
                      ),
                    ]),
                    e.createElementVNode("div", oi, [
                      e.createElementVNode("div", ri, [
                        c[10] ||
                          (c[10] = e.createElementVNode(
                            "label",
                            { for: "detail-image-name" },
                            "ファイル名:",
                            -1
                          )),
                        e.withDirectives(
                          e.createElementVNode(
                            "input",
                            {
                              id: "detail-image-name",
                              "onUpdate:modelValue":
                                c[1] || (c[1] = (l) => (a.name = l)),
                              type: "text",
                              readonly: "",
                            },
                            null,
                            512
                          ),
                          [[e.vModelText, a.name]]
                        ),
                      ]),
                      e.createElementVNode("div", ni, [
                        c[11] ||
                          (c[11] = e.createElementVNode(
                            "label",
                            { for: "detail-image-alt" },
                            "alt属性:",
                            -1
                          )),
                        e.withDirectives(
                          e.createElementVNode(
                            "input",
                            {
                              id: "detail-image-alt",
                              "onUpdate:modelValue":
                                c[2] || (c[2] = (l) => (a.alt = l)),
                              type: "text",
                              readonly: "",
                            },
                            null,
                            512
                          ),
                          [[e.vModelText, a.alt]]
                        ),
                      ]),
                      a.componentId
                        ? (e.openBlock(),
                          e.createElementBlock("div", ai, [
                            c[12] ||
                              (c[12] = e.createElementVNode(
                                "label",
                                { for: "detail-component-id" },
                                "コンポーネントID:",
                                -1
                              )),
                            e.withDirectives(
                              e.createElementVNode(
                                "input",
                                {
                                  id: "detail-component-id",
                                  "onUpdate:modelValue":
                                    c[3] || (c[3] = (l) => (a.componentId = l)),
                                  type: "text",
                                  readonly: "",
                                },
                                null,
                                512
                              ),
                              [[e.vModelText, a.componentId]]
                            ),
                          ]))
                        : e.createCommentVNode("", !0),
                      e.createElementVNode("div", si, [
                        e.createElementVNode("div", li, [
                          c[13] ||
                            (c[13] = e.createElementVNode(
                              "label",
                              null,
                              "カテゴリ:",
                              -1
                            )),
                          e.createElementVNode(
                            "span",
                            {
                              class: e.normalizeClass([
                                "zero-code-img-detail-category",
                                a.category,
                              ]),
                            },
                            e.toDisplayString(
                              a.category === "common" ? "共通画像" : "個別画像"
                            ),
                            3
                          ),
                        ]),
                        e.createElementVNode("div", ii, [
                          c[14] ||
                            (c[14] = e.createElementVNode(
                              "label",
                              null,
                              "ファイルサイズ:",
                              -1
                            )),
                          e.createElementVNode(
                            "span",
                            null,
                            e.toDisplayString(w(a.size)),
                            1
                          ),
                        ]),
                        e.createElementVNode("div", di, [
                          c[15] ||
                            (c[15] = e.createElementVNode(
                              "label",
                              null,
                              "ファイルタイプ:",
                              -1
                            )),
                          e.createElementVNode(
                            "span",
                            null,
                            e.toDisplayString(a.type),
                            1
                          ),
                        ]),
                        e.createElementVNode("div", ci, [
                          c[16] ||
                            (c[16] = e.createElementVNode(
                              "label",
                              null,
                              "アップロード日時:",
                              -1
                            )),
                          e.createElementVNode(
                            "span",
                            null,
                            e.toDisplayString(N(a.uploadedAt)),
                            1
                          ),
                        ]),
                        e.createElementVNode("div", pi, [
                          c[17] ||
                            (c[17] = e.createElementVNode(
                              "label",
                              null,
                              "画像URL:",
                              -1
                            )),
                          e.createElementVNode("div", ui, [
                            e.withDirectives(
                              e.createElementVNode(
                                "input",
                                {
                                  "onUpdate:modelValue":
                                    c[4] || (c[4] = (l) => (a.url = l)),
                                  type: "text",
                                  readonly: "",
                                  class: "zero-code-img-detail-url-input",
                                },
                                null,
                                512
                              ),
                              [[e.vModelText, a.url]]
                            ),
                            e.createElementVNode(
                              "button",
                              {
                                class:
                                  "zero-code-btn zero-code-btn-secondary zero-code-copy-btn",
                                title: "URLをコピー",
                                onClick: c[5] || (c[5] = (l) => v(a.url)),
                              },
                              " 📋 "
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  e.createElementVNode("div", mi, [
                    e.createElementVNode(
                      "div",
                      { class: "zero-code-modal-footer-left" },
                      [
                        e.createElementVNode(
                          "button",
                          {
                            class: "zero-code-btn zero-code-btn-danger",
                            onClick: y,
                          },
                          " 削除 "
                        ),
                        e.createElementVNode(
                          "button",
                          {
                            class: "zero-code-btn zero-code-btn-primary",
                            onClick: d,
                          },
                          " 差し替え "
                        ),
                      ]
                    ),
                    e.createElementVNode("div", fi, [
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-btn zero-code-btn-secondary",
                          onClick: c[6] || (c[6] = (l) => E.$emit("close")),
                        },
                        " 閉じる "
                      ),
                    ]),
                    e.createElementVNode(
                      "input",
                      {
                        ref_key: "fileInputRef",
                        ref: g,
                        type: "file",
                        accept: "image/*",
                        style: { display: "none" },
                        onChange: h,
                      },
                      null,
                      544
                    ),
                  ]),
                ]
              ),
            ]
          )
        );
      },
    }),
    hi = { class: "zero-code-tab-content" },
    yi = { class: "zero-code-data-tabs" },
    bi = ["onClick"],
    Ei = { class: "zero-code-image-content" },
    $i = { key: 0, class: "zero-code-image-section" },
    wi = { class: "zero-code-section-header" },
    zi = { class: "zero-code-img-grid" },
    vi = ["onClick"],
    Ni = ["src", "alt"],
    Ci = { class: "zero-code-img-info" },
    ki = { class: "zero-code-img-name" },
    Ai = { class: "zero-code-img-size" },
    Pi = ["onClick"],
    Si = { key: 0, class: "zero-code-empty-state" },
    _i = { key: 1, class: "zero-code-image-section" },
    Ii = { class: "zero-code-section-header" },
    Di = { class: "zero-code-img-grid" },
    Ti = ["onClick"],
    Vi = ["src", "alt"],
    Bi = { class: "zero-code-img-info" },
    Mi = { class: "zero-code-img-name" },
    Fi = { class: "zero-code-img-size" },
    Oi = ["onClick"],
    Li = { key: 0, class: "zero-code-empty-state" },
    xi = { class: "zero-code-debug-info" },
    Ri = e.defineComponent({
      __name: "ImageManagementPanel",
      props: {
        commonImages: { type: Array },
        individualImages: { type: Array },
      },
      emits: [
        "updateCommonImages",
        "updateIndividualImages",
        "sendCommonImagesData",
        "sendIndividualImagesData",
        "initializeSampleImages",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = e.ref("common"),
          g = e.ref(!1),
          y = e.ref(!1),
          d = e.ref("common"),
          h = e.ref(null),
          C = e.computed(
            () => o.commonImages.length + o.individualImages.length
          ),
          v = ["common", "individual"],
          w = (z) => ({ common: "共通画像", individual: "個別画像" }[z]),
          N = (z) => {
            if (z === 0) return "0 Bytes";
            const A = 1024,
              u = ["Bytes", "KB", "MB", "GB"],
              b = Math.floor(Math.log(z) / Math.log(A));
            return parseFloat((z / Math.pow(A, b)).toFixed(2)) + " " + u[b];
          },
          E = (z) => {
            (d.value = z), (g.value = !0);
          },
          c = () => {
            g.value = !1;
          },
          l = (z) => {
            (h.value = z), (y.value = !0);
          },
          f = () => {
            (y.value = !1), (h.value = null);
          },
          s = (z) => {
            if (d.value === "common") {
              const A = [...o.commonImages, z];
              n("updateCommonImages", A);
            } else {
              const A = [...o.individualImages, z];
              n("updateIndividualImages", A);
            }
            c();
          },
          i = (z) => {
            if (!h.value) return;
            if (h.value.category === "common") {
              const u = o.commonImages.filter((b) => b.id !== z);
              n("updateCommonImages", u);
            } else {
              const u = o.individualImages.filter((b) => b.id !== z);
              n("updateIndividualImages", u);
            }
            f();
          },
          p = (z, A) => {
            if (A.category === "common") {
              const b = o.commonImages.map((k) => (k.id === z ? A : k));
              n("updateCommonImages", b);
            } else {
              const b = o.individualImages.map((k) => (k.id === z ? A : k));
              n("updateIndividualImages", b);
            }
            f();
          },
          m = (z, A) => {
            if (confirm("この画像を削除しますか？"))
              if (A === "common") {
                const u = o.commonImages.filter((b) => b.id !== z);
                n("updateCommonImages", u);
              } else {
                const u = o.individualImages.filter((b) => b.id !== z);
                n("updateIndividualImages", u);
              }
          },
          $ = () => n("initializeSampleImages");
        return (z, A) => (
          e.openBlock(),
          e.createElementBlock("div", hi, [
            e.createElementVNode("div", yi, [
              (e.openBlock(),
              e.createElementBlock(
                e.Fragment,
                null,
                e.renderList(v, (u) =>
                  e.createElementVNode(
                    "button",
                    {
                      key: u,
                      class: e.normalizeClass([
                        "zero-code-data-tab-button",
                        { active: a.value === u },
                      ]),
                      onClick: (b) => (a.value = u),
                    },
                    e.toDisplayString(w(u)),
                    11,
                    bi
                  )
                ),
                64
              )),
            ]),
            e.createElementVNode("div", Ei, [
              a.value === "common"
                ? (e.openBlock(),
                  e.createElementBlock("div", $i, [
                    e.createElementVNode("div", wi, [
                      e.createElementVNode(
                        "h4",
                        null,
                        "共通画像 (" +
                          e.toDisplayString(z.commonImages.length) +
                          "件)",
                        1
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-img-upload-btn common",
                          onClick: A[0] || (A[0] = (u) => E("common")),
                        },
                        " 共通画像をアップロード "
                      ),
                    ]),
                    e.createElementVNode("div", zi, [
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(
                          z.commonImages,
                          (u) => (
                            e.openBlock(),
                            e.createElementBlock(
                              "div",
                              {
                                key: u.id,
                                class: "zero-code-img-item",
                                onClick: (b) => l(u),
                              },
                              [
                                e.createElementVNode(
                                  "img",
                                  { src: u.url, alt: u.alt },
                                  null,
                                  8,
                                  Ni
                                ),
                                e.createElementVNode("div", Ci, [
                                  e.createElementVNode(
                                    "p",
                                    ki,
                                    e.toDisplayString(u.name),
                                    1
                                  ),
                                  e.createElementVNode(
                                    "p",
                                    Ai,
                                    e.toDisplayString(N(u.size)),
                                    1
                                  ),
                                ]),
                                e.createElementVNode(
                                  "button",
                                  {
                                    class: "zero-code-img-delete-btn",
                                    onClick: e.withModifiers(
                                      (b) => m(u.id, "common"),
                                      ["stop"]
                                    ),
                                  },
                                  " 削除 ",
                                  8,
                                  Pi
                                ),
                              ],
                              8,
                              vi
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    z.commonImages.length === 0
                      ? (e.openBlock(),
                        e.createElementBlock(
                          "div",
                          Si,
                          A[2] ||
                            (A[2] = [
                              e.createElementVNode(
                                "p",
                                null,
                                "共通画像が登録されていません。",
                                -1
                              ),
                            ])
                        ))
                      : e.createCommentVNode("", !0),
                  ]))
                : e.createCommentVNode("", !0),
              a.value === "individual"
                ? (e.openBlock(),
                  e.createElementBlock("div", _i, [
                    e.createElementVNode("div", Ii, [
                      e.createElementVNode(
                        "h4",
                        null,
                        "個別画像 (" +
                          e.toDisplayString(z.individualImages.length) +
                          "件)",
                        1
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-img-upload-btn individual",
                          onClick: A[1] || (A[1] = (u) => E("individual")),
                        },
                        " 個別画像をアップロード "
                      ),
                    ]),
                    e.createElementVNode("div", Di, [
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(
                          z.individualImages,
                          (u) => (
                            e.openBlock(),
                            e.createElementBlock(
                              "div",
                              {
                                key: u.id,
                                class: "zero-code-img-item",
                                onClick: (b) => l(u),
                              },
                              [
                                e.createElementVNode(
                                  "img",
                                  { src: u.url, alt: u.alt },
                                  null,
                                  8,
                                  Vi
                                ),
                                e.createElementVNode("div", Bi, [
                                  e.createElementVNode(
                                    "p",
                                    Mi,
                                    e.toDisplayString(u.name),
                                    1
                                  ),
                                  e.createElementVNode(
                                    "p",
                                    Fi,
                                    e.toDisplayString(N(u.size)),
                                    1
                                  ),
                                ]),
                                e.createElementVNode(
                                  "button",
                                  {
                                    class: "zero-code-img-delete-btn",
                                    onClick: e.withModifiers(
                                      (b) => m(u.id, "individual"),
                                      ["stop"]
                                    ),
                                  },
                                  " 削除 ",
                                  8,
                                  Oi
                                ),
                              ],
                              8,
                              Ti
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    z.individualImages.length === 0
                      ? (e.openBlock(),
                        e.createElementBlock(
                          "div",
                          Li,
                          A[3] ||
                            (A[3] = [
                              e.createElementVNode(
                                "p",
                                null,
                                "個別画像が登録されていません。",
                                -1
                              ),
                            ])
                        ))
                      : e.createCommentVNode("", !0),
                  ]))
                : e.createCommentVNode("", !0),
            ]),
            e.createElementVNode("div", xi, [
              A[4] ||
                (A[4] = e.createElementVNode(
                  "strong",
                  null,
                  "🔍 デバッグ情報:",
                  -1
                )),
              e.createTextVNode(
                " 共通画像: " +
                  e.toDisplayString(z.commonImages.length) +
                  "件, 個別画像: " +
                  e.toDisplayString(z.individualImages.length) +
                  "件, 合計: " +
                  e.toDisplayString(C.value) +
                  "件 ",
                1
              ),
              A[5] || (A[5] = e.createElementVNode("br", null, null, -1)),
              e.createElementVNode(
                "button",
                { onClick: $ },
                "画像データを再読み込み"
              ),
            ]),
            g.value
              ? (e.openBlock(),
                e.createBlock(
                  ql,
                  { key: 0, category: d.value, onClose: c, onUpload: s },
                  null,
                  8,
                  ["category"]
                ))
              : e.createCommentVNode("", !0),
            y.value && h.value
              ? (e.openBlock(),
                e.createBlock(
                  gi,
                  {
                    key: 1,
                    image: h.value,
                    onClose: f,
                    onDelete: i,
                    onReplace: p,
                  },
                  null,
                  8,
                  ["image"]
                ))
              : e.createCommentVNode("", !0),
          ])
        );
      },
    });
  function Hi() {
    const t = e.ref("editor"),
      r = (h) => {
        t.value !== h &&
          (S.info(`🔄 タブ切り替え: ${t.value} → ${h}`), (t.value = h));
      };
    return {
      activeTab: t,
      availableTabs: ["editor", "parts", "preview", "images"],
      switchToTab: r,
      isActiveTab: (h) => t.value === h,
      showEditor: () => {
        r("editor");
      },
      showPartsManager: () => {
        r("parts");
      },
      showPreview: () => {
        r("preview");
      },
      showImageManager: () => {
        r("images");
      },
    };
  }
  function Zi(t) {
    const r = e.reactive({
        editablePageData: [],
        localParts: [],
        localCommonParts: [],
        localIndividualParts: [],
        activeTab: "editor",
        dataTab: "rendered",
        showEditor: !1,
        showPartSelector: !1,
        showNestedPartSelector: !1,
        selectedComponent: null,
        selectedComponentIndex: null,
        editingText: null,
        insertPosition: 0,
        nestedInsertPath: "",
        nestedInsertPosition: 0,
      }),
      o = {
        currentComponentIndex: e.computed(() =>
          r.selectedComponentIndex === null
            ? -1
            : typeof r.selectedComponentIndex == "number"
            ? r.selectedComponentIndex
            : parseInt(r.selectedComponentIndex.toString())
        ),
        pageDataLength: e.computed(() => r.editablePageData.length),
        hasSelectedComponent: e.computed(() => r.selectedComponent !== null),
        isEditing: e.computed(
          () => r.showEditor && r.selectedComponent !== null
        ),
        isTiptapEditing: e.computed(() => r.editingText !== null),
      },
      n = {
        switchToTab: (d) => {
          (r.activeTab = d), (r.dataTab = "rendered");
        },
        setDataTab: (d) => {
          r.dataTab = d;
        },
      },
      a = {
        openEditor: (d, h) => {
          (r.selectedComponent = d),
            (r.selectedComponentIndex = h),
            (r.showEditor = !0);
        },
        closeEditor: () => {
          (r.showEditor = !1),
            (r.selectedComponent = null),
            (r.selectedComponentIndex = null);
        },
        openPartSelector: (d) => {
          (r.insertPosition = d), (r.showPartSelector = !0);
        },
        closePartSelector: () => {
          r.showPartSelector = !1;
        },
        openNestedPartSelector: (d, h) => {
          (r.nestedInsertPath = d),
            (r.nestedInsertPosition = h),
            (r.showNestedPartSelector = !0);
        },
        closeNestedPartSelector: () => {
          r.showNestedPartSelector = !1;
        },
      },
      g = {
        startTiptapEdit: (d, h, C = [], v = 0, w, N) => {
          r.editingText = {
            componentId: d,
            paramName: h,
            hierarchyPath: C,
            depth: v,
            arrayName: w,
            itemIndex: N,
          };
        },
        stopTiptapEdit: () => {
          r.editingText = null;
        },
      },
      y = () => {
        (r.editablePageData = Array.isArray(t.page) ? [...t.page] : []),
          (r.localParts = Array.isArray(t.parts) ? [...t.parts] : []),
          (r.localCommonParts = Array.isArray(t.commonParts)
            ? [...t.commonParts]
            : []),
          (r.localIndividualParts = Array.isArray(t.individualParts)
            ? [...t.individualParts]
            : []);
      };
    return (
      e.watch(
        () => t.page,
        (d) => {
          Array.isArray(d) && (r.editablePageData = [...d]);
        },
        { deep: !0, immediate: !0 }
      ),
      e.watch(
        () => t.parts,
        (d) => {
          Array.isArray(d) && (r.localParts = [...d]);
        },
        { deep: !0, immediate: !0 }
      ),
      e.watch(
        () => t.commonParts,
        (d) => {
          Array.isArray(d) && (r.localCommonParts = [...d]);
        },
        { deep: !0, immediate: !0 }
      ),
      e.watch(
        () => t.individualParts,
        (d) => {
          Array.isArray(d) && (r.localIndividualParts = [...d]);
        },
        { deep: !0, immediate: !0 }
      ),
      y(),
      { ...e.toRefs(r), ...o, ...n, ...a, ...g, initializeData: y }
    );
  }
  function ji() {
    const t = (d) =>
      d.includes("url") || d.includes("src") || d.includes("link")
        ? "url"
        : d.includes("email")
        ? "email"
        : d.includes("number") || d.includes("count")
        ? "number"
        : d.includes("date")
        ? "date"
        : d.includes("time")
        ? "time"
        : d.includes("password")
        ? "password"
        : d.includes("tel") || d.includes("phone")
        ? "tel"
        : "text";
    return {
      getInputType: t,
      formatFileSize: (d) => {
        if (d === 0) return "0 Bytes";
        const h = 1024,
          C = ["Bytes", "KB", "MB", "GB"],
          v = Math.floor(Math.log(d) / Math.log(h));
        return parseFloat((d / Math.pow(h, v)).toFixed(2)) + " " + C[v];
      },
      component: {
        findComponentByPath: (d, h) => {
          let C = d,
            v = null;
          for (let w = 0; w < h.length; w++) {
            const N = h[w];
            if (N >= 0 && N < C.length)
              (v = C[N]), w < h.length - 1 && (C = v.nested_parts || []);
            else return null;
          }
          return v;
        },
        createNewComponent: (d, h) => ({
          id: `comp_${Date.now()}_${Math.random()
            .toString(36)
            .substring(2, 9)}`,
          type: d,
          module_name: h,
          nested_parts: [],
        }),
        deleteComponent: (d, h) => d.filter((C, v) => v !== h),
        duplicateComponent: (d) => {
          const h = `comp_${Date.now()}_${Math.random()
            .toString(36)
            .substring(2, 9)}`;
          return { ...JSON.parse(JSON.stringify(d)), id: h };
        },
        addArrayItem: (d, h) => {
          d[h] || (d[h] = []);
          const C = d[h],
            v = {
              id: `item_${Date.now()}_${Math.random()
                .toString(36)
                .substring(2, 11)}`,
            };
          C.push(v);
        },
        removeArrayItem: (d, h, C) => {
          const v = d[h];
          Array.isArray(v) && C >= 0 && C < v.length && v.splice(C, 1);
        },
      },
      template: {
        getTemplate: (d, h, C) => {
          const v = C.find((N) => N.type === d);
          if (!v) return "";
          const w = v.module.find((N) => N.title === h);
          return (w == null ? void 0 : w.body) || "";
        },
        extractFields: (d) => {
          const h = [];
          return (
            [/\{\$([^:}]+):/g, /\(\$([^:}]+):/g, /\(\$([^?}]+)\?:/g].forEach(
              (v) => {
                let w;
                for (; (w = v.exec(d)) !== null; ) {
                  const N = w[1];
                  h.includes(N) || h.push(N);
                }
              }
            ),
            h
          );
        },
        extractSlots: (d) => {
          const h = [],
            C = /@slot\(\$([^)]+)\)@/g;
          let v;
          for (; (v = C.exec(d)) !== null; ) {
            const w = v[1];
            h.includes(w) || h.push(w);
          }
          return h;
        },
      },
      array: {
        addArrayItem: (d, h) => [...d, h],
        removeArrayItem: (d, h) => d.filter((C, v) => v !== h),
        updateArrayItem: (d, h, C) => d.map((v, w) => (w === h ? C : v)),
        moveArrayItem: (d, h, C) => {
          const v = [...d],
            [w] = v.splice(h, 1);
          return v.splice(C, 0, w), v;
        },
      },
      field: {
        getFieldValue: (d, h) => d[h] || "",
        setFieldValue: (d, h, C) => ({ ...d, [h]: C }),
        validateField: (d, h) => {
          switch (t(d)) {
            case "email":
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h);
            case "url":
              try {
                return new URL(h), !0;
              } catch {
                return !1;
              }
            case "number":
              return !isNaN(Number(h));
            default:
              return !0;
          }
        },
      },
      string: {
        stringifyHierarchyPath: (d) => d.join("."),
        parseHierarchyPath: (d) => {
          if (!d || typeof d != "string") return [];
          try {
            const h = d.split("."),
              C = [];
            for (const v of h) {
              const w = v.trim();
              if (w === "") continue;
              const N = parseInt(w, 10);
              if (!isNaN(N) && N >= 0) C.push(N);
              else return [];
            }
            return C;
          } catch {
            return [];
          }
        },
        camelToKebab: (d) =>
          d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        kebabToCamel: (d) => d.replace(/-([a-z])/g, (h, C) => C.toUpperCase()),
      },
    };
  }
  function Ui() {
    let t = null;
    const r = (m) => {
        if (!m || typeof m != "string" || m.trim() === "") return "<p></p>";
        const $ = ["p", "strong", "em", "u", "s", "a", "span", "br"],
          z = ["href", "target", "style"],
          A = document.createElement("div");
        A.innerHTML = m;
        const u = (k) => {
          const P = k.tagName.toLowerCase();
          if (!$.includes(P)) {
            const _ = k.parentNode;
            if (_) {
              for (; k.firstChild; ) _.insertBefore(k.firstChild, k);
              _.removeChild(k);
            }
            return;
          }
          Array.from(k.attributes).forEach((_) => {
            z.includes(_.name.toLowerCase()) || k.removeAttribute(_.name);
          }),
            Array.from(k.children).forEach((_) => {
              u(_);
            });
        };
        Array.from(A.children).forEach((k) => {
          u(k);
        });
        let b = A.innerHTML;
        return (
          (b = b
            .replace(/<p>\s*<\/p>/g, "<p><br></p>")
            .replace(/<p>\s*<br>\s*<\/p>/g, "<p><br></p>")
            .replace(/(<\w+>)\s*(<\/\w+>)/g, "$1<br>$2")),
          b.includes("<") || (b = `<p>${b}</p>`),
          (!b || b.trim() === "") && (b = "<p><br></p>"),
          b
        );
      },
      o = () => {
        const m = window.getSelection();
        if (!m || m.rangeCount === 0) return { selection: null, range: null };
        const $ = m.getRangeAt(0);
        return t != null && t.contains($.commonAncestorContainer)
          ? { selection: m, range: $ }
          : { selection: null, range: null };
      },
      n = (m, $) => {
        const z = document.createElement(m);
        return (
          $ &&
            Object.entries($).forEach(([A, u]) => {
              z.setAttribute(A, u);
            }),
          z
        );
      },
      a = (m, $) => {
        try {
          m.surroundContents($);
        } catch {
          const z = m.extractContents();
          $.appendChild(z), m.insertNode($);
        }
      },
      g = (m, $, z) => {
        const A = n($, z);
        a(m, A);
      },
      y = (m, $) => {
        const z = document.createElement("span");
        Object.assign(z.style, $), a(m, z);
      },
      d = (m, $) => {
        if (!m.collapsed) return;
        const z = document.createTextNode("テキスト");
        m.insertNode(z),
          m.selectNodeContents(z),
          $.removeAllRanges(),
          $.addRange(m);
      },
      h = (m) => {
        const { selection: $, range: z } = o();
        if (!$ || !z) return;
        let A = z.commonAncestorContainer;
        A.nodeType === Node.TEXT_NODE && (A = A.parentElement || A);
        const u = A.closest("p");
        if (u) {
          const b = { left: "left", center: "center", right: "right" };
          u.style.textAlign = b[m];
        }
      },
      C = (m, $) => {
        if (!t) return;
        t.focus();
        const { selection: z, range: A } = o();
        if (!z || !A) return;
        d(A, z);
        const u = {
          bold: () => g(A, "strong"),
          italic: () => g(A, "em"),
          underline: () => g(A, "u"),
          strikeThrough: () => g(A, "s"),
          justifyLeft: () => h("left"),
          justifyCenter: () => h("center"),
          justifyRight: () => h("right"),
          createLink: () => $ && g(A, "a", { href: $, target: "_blank" }),
          backColor: () => $ && y(A, { backgroundColor: $ }),
        };
        try {
          const b = u[m];
          b && b();
        } catch {
          try {
            document.execCommand(m, !1, $);
          } catch {}
        }
      },
      v = (m, $) => {
        if (!t) return;
        t.focus();
        const z = window.getSelection();
        if (
          z != null &&
          z.rangeCount &&
          t.contains(z.getRangeAt(0).commonAncestorContainer)
        ) {
          const A = z.getRangeAt(0);
          z.removeAllRanges(), z.addRange(A);
        }
        C(m, $);
      },
      w = {
        toggleBold: () => v("bold"),
        toggleItalic: () => v("italic"),
        toggleUnderline: () => v("underline"),
        toggleStrike: () => v("strikeThrough"),
        alignLeft: () => v("justifyLeft"),
        alignCenter: () => v("justifyCenter"),
        alignRight: () => v("justifyRight"),
        setLink: () => {
          const m = window.prompt("URLを入力してください:");
          m && v("createLink", m);
        },
        isActive: (m) => {
          var u;
          if (!t) return !1;
          const $ = window.getSelection();
          if (!($ != null && $.rangeCount)) return !1;
          const z = $.getRangeAt(0);
          if (!t.contains(z.commonAncestorContainer)) return !1;
          const A = {
            bold: () => N("strong"),
            italic: () => N("em"),
            underline: () => N("u"),
            strike: () => N("s"),
          };
          return ((u = A[m]) == null ? void 0 : u.call(A)) ?? !1;
        },
      },
      N = (m) => {
        const { selection: $, range: z } = o();
        if (!$ || !z) return !1;
        let A = z.commonAncestorContainer;
        for (
          A.nodeType === window.Node.TEXT_NODE && (A = A.parentElement || A);
          A && A !== t;

        ) {
          if (
            A.nodeType === window.Node.ELEMENT_NODE &&
            A.tagName.toLowerCase() === m.toLowerCase()
          )
            return !0;
          A = A.parentElement;
        }
        return !1;
      },
      E = () => `
    border: 2px solid #3b82f6;
    border-radius: 8px;
    padding: 12px 16px;
    min-height: 60px;
    background: white;
    outline: none;
    line-height: 1.6;
    color: #1f2937;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
  `,
      c = (m) => {
        Object.entries({
          "data-gramm": "false",
          spellcheck: "false",
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
        }).forEach(([z, A]) => {
          m.setAttribute(z, A);
        });
      },
      l = (m, $) => {
        let z = null,
          A = null;
        m.addEventListener("focus", () => {
          (m.style.borderColor = "#3b82f6"),
            (m.style.boxShadow =
              "0 0 0 3px rgba(59,130,246,0.1), 0 1px 3px rgba(0,0,0,0.1)");
        }),
          m.addEventListener("blur", () => {
            (m.style.borderColor = "#3b82f6"),
              (m.style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)");
          }),
          m.addEventListener("keydown", (b) => {
            var k;
            if (b.key === "Enter" && !b.shiftKey) {
              b.preventDefault();
              const P = window.getSelection();
              if (!(P != null && P.rangeCount)) return;
              const _ = P.getRangeAt(0),
                D = _.startContainer;
              let M = null;
              if (
                (D.nodeType === window.Node.TEXT_NODE
                  ? (M =
                      ((k = D.parentElement) == null
                        ? void 0
                        : k.closest("p")) || null)
                  : D.nodeType === window.Node.ELEMENT_NODE &&
                    (M = D.closest("p") || null),
                M)
              ) {
                const I = document.createElement("p");
                (I.innerHTML = "<br>"), M.insertAdjacentElement("afterend", I);
                const V = document.createRange();
                V.setStart(I, 0),
                  V.setEnd(I, 0),
                  P.removeAllRanges(),
                  P.addRange(V);
              } else {
                const I = document.createElement("p");
                (I.innerHTML = "<br>"), _.deleteContents(), _.insertNode(I);
                const V = document.createRange();
                V.setStart(I, 0),
                  V.setEnd(I, 0),
                  P.removeAllRanges(),
                  P.addRange(V);
              }
              m.dispatchEvent(new Event("input", { bubbles: !0 }));
            }
          }),
          m.addEventListener("input", () => {
            z && window.clearTimeout(z),
              (z = window.setTimeout(() => {
                const b = r(m.innerHTML);
                if (b !== m.innerHTML) {
                  const k = window.getSelection();
                  let P = null;
                  if (
                    (k &&
                      k.rangeCount > 0 &&
                      (P = k.getRangeAt(0).cloneRange()),
                    (m.innerHTML = b),
                    P && k)
                  )
                    try {
                      k.removeAllRanges(), k.addRange(P);
                    } catch {
                      const D = document.createRange();
                      D.selectNodeContents(m),
                        D.collapse(!1),
                        k.removeAllRanges(),
                        k.addRange(D);
                    }
                }
                $ == null || $(m.innerHTML);
              }, 300));
          }),
          m.addEventListener("selectionchange", () => {
            try {
              m.dispatchEvent(new CustomEvent("selectionchange"));
            } catch {}
          });
        const u = new globalThis.MutationObserver(() => {
          A && window.clearTimeout(A),
            (A = window.setTimeout(() => {
              $ == null || $(m.innerHTML);
            }, 100));
        });
        return (
          u.observe(m, { childList: !0, subtree: !0, characterData: !0 }),
          { saveTimeout: z, updateTimeout: A, observer: u }
        );
      },
      f = (m, $, z) => {
        const A = $.querySelector(".simple-editor-content");
        A && A.remove();
        const u = document.createElement("div");
        (u.className = "simple-editor-content"), (u.contentEditable = "true");
        const b = r(m);
        (u.innerHTML = b), (u.style.cssText = E()), c(u);
        const { saveTimeout: k, updateTimeout: P, observer: _ } = l(u, z);
        return (
          $.appendChild(u),
          (t = u),
          {
            element: u,
            getHTML: () => u.innerHTML,
            setContent: (D) => (u.innerHTML = D),
            destroy: () => {
              window.clearTimeout(k),
                window.clearTimeout(P),
                _.disconnect(),
                u.remove(),
                (t = null);
            },
            isActive: (D) => w.isActive(D),
            isInitialized: !0,
            isDestroyed: !1,
            isFocused: !1,
            chain: () => ({
              focus: () => ({
                toggleMark: (D) => ({
                  run: () => {
                    var I;
                    const M = {
                      bold: w.toggleBold,
                      italic: w.toggleItalic,
                      underline: w.toggleUnderline,
                      strike: w.toggleStrike,
                    };
                    (I = M[D]) == null || I.call(M);
                  },
                }),
                setTextAlign: (D) => ({
                  run: () => {
                    var I;
                    const M = {
                      left: w.alignLeft,
                      center: w.alignCenter,
                      right: w.alignRight,
                    };
                    (I = M[D]) == null || I.call(M);
                  },
                }),
              }),
            }),
          }
        );
      },
      s = (m, $, z) => {
        try {
          return ($.innerHTML = ""), f(m, $, z);
        } catch (A) {
          throw A;
        }
      },
      i = () => {
        if (t)
          try {
            t.remove(), (t = null);
          } catch {}
      },
      p = () => !!t;
    return (
      e.onBeforeUnmount(() => i()),
      { initEditor: s, destroyEditor: i, getEditor: () => t, isEditorReady: p }
    );
  }
  class Wi {
    constructor() {
      zt(this, "events", new Map());
      zt(this, "isEnabled", !0);
    }
    on(r, o) {
      this.events.has(r) || this.events.set(r, new Set());
      const n = this.events.get(r);
      return (
        n.add(o),
        S.debug(`EventBus: イベントリスナー登録 - ${r}`),
        () => {
          n.delete(o), S.debug(`EventBus: イベントリスナー削除 - ${r}`);
        }
      );
    }
    emit(r, o) {
      if (!this.isEnabled) {
        S.warn(`EventBus: 無効化されているため ${r} イベントを無視`);
        return;
      }
      const n = this.events.get(r);
      if (!n || n.size === 0) {
        S.warn(`EventBus: ${r} イベントのリスナーが見つかりません`);
        return;
      }
      S.debug(`EventBus: ${r} イベントを発火`, o);
      const a = [];
      n.forEach((g) => {
        try {
          const y = g(o);
          y instanceof Promise && a.push(y);
        } catch (y) {
          S.error(`EventBus: ${r} イベントリスナーでエラー`, y);
        }
      }),
        a.length > 0 &&
          Promise.allSettled(a).then((g) => {
            g.forEach((y, d) => {
              y.status === "rejected" &&
                S.error(
                  `EventBus: ${r} 非同期リスナー[${d}]でエラー`,
                  y.reason
                );
            });
          });
    }
    off(r) {
      this.events.delete(r), S.debug(`EventBus: ${r} の全リスナーを削除`);
    }
    clear() {
      this.events.clear(), S.debug("EventBus: 全イベントリスナーをクリア");
    }
    disable() {
      (this.isEnabled = !1), S.debug("EventBus: 無効化");
    }
    enable() {
      (this.isEnabled = !0), S.debug("EventBus: 有効化");
    }
    getListenerCount(r) {
      var n;
      if (r) return ((n = this.events.get(r)) == null ? void 0 : n.size) || 0;
      let o = 0;
      return (
        this.events.forEach((a) => {
          o += a.size;
        }),
        o
      );
    }
  }
  const fe = new Wi(),
    Re = {
      addArrayItem: (t, r) => {
        fe.emit("addArrayItem", { componentId: t, arrayKey: r });
      },
      addZForArrayItem: (t, r, o) => {
        fe.emit("addZForArrayItem", {
          componentId: t,
          arrayName: r,
          insertIndex: o,
        });
      },
      removeZForArrayItem: (t, r, o) => {
        fe.emit("removeZForArrayItem", {
          componentId: t,
          arrayName: r,
          index: o,
        });
      },
      reorderZForArrayItem: (t, r, o, n) => {
        fe.emit("reorderZForArrayItem", {
          componentId: t,
          arrayName: r,
          fromIndex: o,
          toIndex: n,
        });
      },
      editZForArrayItem: (t, r, o) => {
        fe.emit("editZForArrayItem", {
          componentId: t,
          arrayName: r,
          index: o,
        });
      },
      deleteNestedPart: (t) => {
        fe.emit("deleteNestedPart", { pathString: t });
      },
      openNestedEditor: (t) => {
        fe.emit("openNestedEditor", { pathString: t });
      },
      openNestedPartSelector: (t, r) => {
        fe.emit("openNestedPartSelector", { pathString: t, position: r });
      },
      startRichTextEdit: (t, r, o) =>
        fe.emit("startRichTextEdit", {
          componentId: t,
          paramName: r,
          currentValue: o,
        }),
      selectImage: (t, r) => {
        fe.emit("selectImage", { componentId: t, paramName: r });
      },
      uploadImage: (t, r, o) => {
        fe.emit("uploadImage", { file: t, category: r, componentId: o });
      },
    };
  function Xi(t, r) {
    const o = Zi(t),
      n = ji(),
      a = sr(),
      g = Ui(),
      y = (c, l) => {
        for (const f of c) {
          if (f.id === l) return f;
          if (f.nested_parts && Array.isArray(f.nested_parts)) {
            const s = y(f.nested_parts, l);
            if (s) return s;
          }
          for (const [s, i] of Object.entries(f))
            if (Array.isArray(i) && s !== "nested_parts") {
              for (const p of i)
                if (p && typeof p == "object") {
                  for (const [m, $] of Object.entries(p))
                    if (Array.isArray($)) {
                      const z = y($, l);
                      if (z) return z;
                    }
                }
            }
        }
        return null;
      },
      d = (c, l, f) => {
        for (let s = 0; s < c.length; s++) {
          const i = c[s];
          if (i.id === l) return (c[s] = f), !0;
          if (
            i.nested_parts &&
            Array.isArray(i.nested_parts) &&
            d(i.nested_parts, l, f)
          )
            return !0;
          for (const [p, m] of Object.entries(i))
            if (Array.isArray(m) && p !== "nested_parts") {
              for (const $ of m)
                if ($ && typeof $ == "object") {
                  for (const [z, A] of Object.entries($))
                    if (Array.isArray(A) && d(A, l, f)) return !0;
                }
            }
        }
        return !1;
      },
      h = (c, l) => {
        for (let f = 0; f < c.length; f++) {
          if (c[f].id === l) return c.splice(f, 1), !0;
          if (
            c[f].nested_parts &&
            Array.isArray(c[f].nested_parts) &&
            h(c[f].nested_parts, l)
          )
            return !0;
          for (const [s, i] of Object.entries(c[f]))
            if (Array.isArray(i) && s !== "nested_parts") {
              for (const p of i)
                if (p && typeof p == "object") {
                  for (const [m, $] of Object.entries(p))
                    if (Array.isArray($) && h($, l)) return !0;
                }
            }
        }
        return !1;
      },
      C = {
        addPart: (c, l) => {
          const f = [...o.editablePageData.value];
          f.splice(l, 0, c),
            (o.editablePageData.value = f),
            r("update:page", f);
        },
        deletePart: (c) => {
          if (window.confirm("このパーツを削除しますか？")) {
            const l = n.component.deleteComponent(o.editablePageData.value, c);
            (o.editablePageData.value = l), r("update:page", l);
          }
        },
        duplicatePart: (c) => {
          const l = o.editablePageData.value[c];
          if (l) {
            const f = n.component.duplicateComponent(l),
              s = [...o.editablePageData.value];
            s.splice(c + 1, 0, f),
              (o.editablePageData.value = s),
              r("update:page", s);
          }
        },
        reorderParts: (c) => {
          (o.editablePageData.value = c), r("update:page", c);
        },
        movePart: (c, l) => {
          const f = [...o.editablePageData.value],
            [s] = f.splice(c, 1);
          f.splice(l, 0, s),
            (o.editablePageData.value = f),
            r("update:page", f);
        },
        reorderNestedParts: (c, l) => {
          const f = n.string.parseHierarchyPath(c),
            s = JSON.parse(JSON.stringify(o.editablePageData.value)),
            i = n.component.findComponentByPath(s, f);
          i &&
            ((i.nested_parts = [...l]),
            (o.editablePageData.value = s),
            r("update:page", s));
        },
        moveNestedPart: (c, l, f) => {
          const s = n.string.parseHierarchyPath(c),
            i = JSON.parse(JSON.stringify(o.editablePageData.value)),
            p = n.component.findComponentByPath(i, s);
          if (
            p != null &&
            p.nested_parts &&
            p.nested_parts.length > Math.max(l, f)
          ) {
            const m = [...p.nested_parts];
            if (l >= 0 && l < m.length && f >= 0 && f < m.length && l !== f) {
              const [$] = m.splice(l, 1);
              m.splice(f, 0, $),
                (p.nested_parts = m),
                (o.editablePageData.value = i),
                r("update:page", i);
            }
          }
        },
        moveNestedPartBetweenLevels: (c, l, f, s) => {
          const i = n.string.parseHierarchyPath(c),
            p = n.string.parseHierarchyPath(f),
            m = [...o.editablePageData.value],
            $ = n.component.findComponentByPath(m, i);
          if (!($ != null && $.nested_parts)) return;
          const [z] = $.nested_parts.splice(l, 1),
            A = n.component.findComponentByPath(m, p);
          A &&
            (A.nested_parts || (A.nested_parts = []),
            A.nested_parts.splice(s, 0, z),
            (o.editablePageData.value = m),
            r("update:page", m));
        },
        moveNestedPartById: (c, l, f) => {
          const s = JSON.parse(JSON.stringify(o.editablePageData.value)),
            i = y(s, c);
          if (
            i != null &&
            i.nested_parts &&
            i.nested_parts.length > Math.max(l, f)
          ) {
            const p = [...i.nested_parts];
            if (l >= 0 && l < p.length && f >= 0 && f < p.length && l !== f) {
              const [m] = p.splice(l, 1);
              p.splice(f, 0, m),
                (i.nested_parts = p),
                (o.editablePageData.value = s),
                r("update:page", s);
            }
          }
        },
        moveNestedPartBetweenLevelsById: (c, l, f, s) => {
          const i = JSON.parse(JSON.stringify(o.editablePageData.value)),
            p = y(i, c);
          if (!(p != null && p.nested_parts)) return;
          const [m] = p.nested_parts.splice(l, 1),
            $ = y(i, f);
          $ &&
            ($.nested_parts || ($.nested_parts = []),
            $.nested_parts.splice(s, 0, m),
            (o.editablePageData.value = i),
            r("update:page", i));
        },
        moveZForNestedPart: (c, l, f) => {
          const s = c.match(/^(\w+)\.(\w+)\[(\d+)\]\.(\w+)$/);
          if (!s) return;
          const [, i, p, m, $] = s,
            z = parseInt(m),
            A = JSON.parse(JSON.stringify(o.editablePageData.value)),
            u = y(A, i);
          if (!u) return;
          const b = u[p];
          if (!Array.isArray(b) || z >= b.length) return;
          const k = b[z];
          if (!k || !k[$] || !Array.isArray(k[$])) return;
          const P = k[$];
          if (l < 0 || l >= P.length || f < 0 || f >= P.length || l === f)
            return;
          const [_] = P.splice(l, 1);
          P.splice(f, 0, _),
            (o.editablePageData.value = A),
            r("update:page", A);
        },
        openEditor: (c) => {
          const l = o.editablePageData.value[c];
          l && o.openEditor(l, c);
        },
        saveComponent: (c) => {
          const l = o.selectedComponentIndex.value;
          if (c._isZForItem) {
            const f = c._parentComponentId,
              s = c._arrayName,
              i = c._arrayIndex,
              p = JSON.parse(JSON.stringify(o.editablePageData.value)),
              m = y(p, f);
            if (m && Array.isArray(m[s])) {
              const $ = m[s];
              if (i >= 0 && i < $.length) {
                const {
                  _isZForItem: z,
                  _parentComponentId: A,
                  _arrayName: u,
                  _arrayIndex: b,
                  _zForTemplate: k,
                  ...P
                } = c;
                ($[i] = { ...$[i], ...P }),
                  (o.editablePageData.value = p),
                  r("update:page", p);
              }
            }
            o.closeEditor();
            return;
          }
          if (typeof l == "number" && l >= 0) {
            const f = [...o.editablePageData.value];
            (f[l] = c), (o.editablePageData.value = f), r("update:page", f);
          } else if (typeof l == "string") {
            const f = JSON.parse(JSON.stringify(o.editablePageData.value));
            d(f, l, c) && ((o.editablePageData.value = f), r("update:page", f));
          }
          o.closeEditor();
        },
        addNestedPart: (c, l, f) => {
          const s = JSON.parse(JSON.stringify(o.editablePageData.value)),
            i = /^(.+)\.(.+)\[(\d+)\]\.(.+)$/,
            p = c.match(i);
          let m = !1;
          if (p) {
            const [, $, z, A, u] = p,
              b = y(s, $);
            if (b && b[z] && Array.isArray(b[z])) {
              const k = b[z][parseInt(A)];
              k && (k[u] || (k[u] = []), k[u].splice(l, 0, f), (m = !0));
            }
          } else {
            const $ = y(s, c);
            $ &&
              ($.nested_parts || ($.nested_parts = []),
              $.nested_parts.splice(l, 0, f),
              (m = !0));
          }
          m && ((o.editablePageData.value = s), r("update:page", s));
        },
        deleteNestedPart: (c) => {
          if (window.confirm("このネストパーツを削除しますか？")) {
            const l = JSON.parse(JSON.stringify(o.editablePageData.value)),
              f = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/,
              s = c.match(f);
            let i = !1;
            if (s) {
              const [, p, m, $, z, A] = s,
                u = y(l, p);
              if (u && u[m] && Array.isArray(u[m])) {
                const b = u[m][parseInt($)];
                b &&
                  b[z] &&
                  Array.isArray(b[z]) &&
                  (b[z].splice(parseInt(A), 1), (i = !0));
              }
            } else i = h(l, c);
            i && ((o.editablePageData.value = l), r("update:page", l));
          }
        },
        startTiptapEdit: (c, l, f = [], s = 0) => {
          o.startTiptapEdit(c, l, f, s);
        },
        startSimpleTiptapEdit: (c, l) => {
          o.startTiptapEdit(c, l, [], 0);
        },
        stopTiptapEdit: () => {
          o.stopTiptapEdit();
        },
        sendPageData: () => {
          r("update:page", o.editablePageData.value);
        },
        sendPartsData: () => {
          r("update:parts", o.localParts.value);
        },
        sendCommonPartsData: () => {
          r("update:commonParts", o.localCommonParts.value);
        },
        sendIndividualPartsData: () => {
          r("update:individualParts", o.localIndividualParts.value);
        },
        addArrayItem: (c, l) => {
          n.component.addArrayItem(c, l),
            r("update:page", o.editablePageData.value);
        },
        removeArrayItem: (c, l, f) => {
          n.component.removeArrayItem(c, l, f),
            r("update:page", o.editablePageData.value);
        },
        resetPageData: () => {
          (o.editablePageData.value = Array.isArray(t.page) ? [...t.page] : []),
            r("update:page", o.editablePageData.value);
        },
        resetPartsData: () => {
          (o.localParts.value = Array.isArray(t.parts) ? [...t.parts] : []),
            r("update:parts", o.localParts.value);
        },
      },
      v = {
        currentComponent: e.computed(() => o.selectedComponent.value),
        currentTemplate: e.computed(() => {
          const c = o.selectedComponent.value;
          return c
            ? n.template.getTemplate(c.type, c.module_name, o.localParts.value)
            : "";
        }),
        currentFields: e.computed(() => {
          const c = v.currentTemplate.value;
          return n.template.extractFields(c);
        }),
        currentSlots: e.computed(() => {
          const c = v.currentTemplate.value;
          return n.template.extractSlots(c);
        }),
        renderComponent: (c) =>
          a.renderComponentWithoutSlot(c, (l, f) =>
            n.template.getTemplate(l, f, o.localParts.value)
          ),
        renderPartPreview: (c) => {
          if (!c) return "";
          try {
            let l = c;
            return (
              (l = l.replace(
                /\{\$([^:]+):([^}]*)\}/g,
                (f, s, i) =>
                  ({
                    title: "サンプルタイトル",
                    text: "サンプルテキスト",
                    content: "サンプルコンテンツ",
                    heading: "見出し",
                    description: "説明文",
                    label: "ラベル",
                    source: "情報源",
                    tooltip: "ツールチップ",
                  }[s] ||
                  i ||
                  `[${s}]`)
              )),
              (l = l.replace(
                /\(\$([^:]+):([^)]+)\)/g,
                (f, s, i) => i.split("|").filter((m) => m.trim())[0] || ""
              )),
              (l = l.replace(
                /\(\$([^:?]+)\?:([^)]*)\)/g,
                (f, s, i) => i || ""
              )),
              (l = l.replace(/z-slot="[^"]*"/g, "")),
              (l = l.replace(/z-for="[^"]*"/g, "")),
              (l = l.replace(/z-for-wrapper="[^"]*"/g, "")),
              l
            );
          } catch {
            return c;
          }
        },
      },
      w = () => {
        fe.on("addArrayItem", ({ componentId: c, arrayKey: l }) => {
          try {
            if (
              (S.debug(
                `EventBus: addArrayItem - componentId=${c}, arrayKey=${l}`
              ),
              !c || !l)
            )
              throw new Error(
                "componentId または arrayKey が指定されていません"
              );
            const f = y(o.editablePageData.value, c);
            if (!f) throw new Error(`Component not found: ${c}`);
            S.success(`Component found: ${f.id}, adding array item to ${l}`);
            const s =
              o.localParts.value && o.localParts.value.length > 0
                ? o.localParts.value
                : [];
            s.length > 0 ? Lt(s).addArrayItem(f, l) : C.addArrayItem(f, l),
              r("update:page", o.editablePageData.value);
          } catch (f) {
            S.error(`配列アイテム追加エラー: ${f}`, {
              componentId: c,
              arrayKey: l,
            });
          }
        }),
          fe.on(
            "addZForArrayItem",
            ({ componentId: c, arrayName: l, insertIndex: f }) => {
              try {
                S.debug(
                  `EventBus: addZForArrayItem - componentId=${c}, arrayName=${l}, insertIndex=${f}`
                );
                const s = y(o.editablePageData.value, c);
                if (!s) throw new Error(`Component not found: ${c}`);
                Array.isArray(s[l]) || (s[l] = []);
                const i =
                    o.localParts.value && o.localParts.value.length > 0
                      ? o.localParts.value
                      : [],
                  p = Lt(i),
                  m = p.getTemplate(s.type, s.module_name),
                  $ = { id: p.generateUniqueId() };
                if (m) {
                  const A = m.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/g);
                  A &&
                    A.forEach((b) => {
                      const [, k, P, _] =
                        b.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/) || [];
                      if (k && !$[k])
                        if (P === ":") {
                          const D = _.split("|").filter(Boolean);
                          $[k] = D[0] || "";
                        } else P === "?:" && ($[k] = []);
                    });
                  const u = m.match(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g);
                  u &&
                    u.forEach((b) => {
                      const k = b.substring(1);
                      !$[k] && !k.includes("(") && ($[k] = `デフォルト${k}`);
                    });
                }
                s[l].splice(f, 0, $),
                  S.success(`z-for配列アイテム追加完了: ${l}[${f}]`),
                  r("update:page", o.editablePageData.value);
              } catch (s) {
                S.error(`z-for配列アイテム追加エラー: ${s}`, {
                  componentId: c,
                  arrayName: l,
                  insertIndex: f,
                });
              }
            }
          ),
          fe.on(
            "removeZForArrayItem",
            ({ componentId: c, arrayName: l, index: f }) => {
              try {
                S.debug(
                  `EventBus: removeZForArrayItem - componentId=${c}, arrayName=${l}, index=${f}`
                );
                const s = y(o.editablePageData.value, c);
                if (!s) throw new Error(`Component not found: ${c}`);
                const i = s[l];
                if (!Array.isArray(i) || f < 0 || f >= i.length)
                  throw new Error(`Invalid array or index: ${l}[${f}]`);
                i.splice(f, 1),
                  S.success(`z-for配列アイテム削除完了: ${l}[${f}]`),
                  r("update:page", o.editablePageData.value);
              } catch (s) {
                S.error(`z-for配列アイテム削除エラー: ${s}`, {
                  componentId: c,
                  arrayName: l,
                  index: f,
                });
              }
            }
          ),
          fe.on(
            "reorderZForArrayItem",
            ({ componentId: c, arrayName: l, fromIndex: f, toIndex: s }) => {
              try {
                S.debug(
                  `EventBus: reorderZForArrayItem - componentId=${c}, arrayName=${l}, fromIndex=${f}, toIndex=${s}`
                );
                const i = y(o.editablePageData.value, c);
                if (!i) throw new Error(`Component not found: ${c}`);
                const p = i[l];
                if (
                  !Array.isArray(p) ||
                  f < 0 ||
                  f >= p.length ||
                  s < 0 ||
                  s >= p.length
                )
                  throw new Error(
                    `Invalid array or indices: ${l}[${f}] -> [${s}]`
                  );
                const m = JSON.parse(JSON.stringify(o.editablePageData.value)),
                  $ = y(m, c);
                if ($) {
                  const z = $[l],
                    A = z.splice(f, 1)[0];
                  z.splice(s, 0, A),
                    (o.editablePageData.value = m),
                    r("update:page", m),
                    S.success(
                      `z-for配列アイテム並び替え完了: ${l}[${f}] -> [${s}]`
                    );
                } else throw new Error(`Component not found in new data: ${c}`);
              } catch (i) {
                S.error(`z-for配列アイテム並び替えエラー: ${i}`, {
                  componentId: c,
                  arrayName: l,
                  fromIndex: f,
                  toIndex: s,
                });
              }
            }
          ),
          fe.on(
            "editZForArrayItem",
            ({ componentId: c, arrayName: l, index: f }) => {
              try {
                S.debug(
                  `EventBus: editZForArrayItem - componentId=${c}, arrayName=${l}, index=${f}`
                );
                const s = y(o.editablePageData.value, c);
                if (!s) throw new Error(`Component not found: ${c}`);
                const i = s[l];
                if (!Array.isArray(i) || f < 0 || f >= i.length)
                  throw new Error(`Invalid array or index: ${l}[${f}]`);
                const p = i[f],
                  m = {
                    ...p,
                    id: `${c}_${l}_${f}`,
                    type: p.type || s.type,
                    module_name: p.module_name || s.module_name,
                    _isZForItem: !0,
                    _parentComponentId: c,
                    _arrayName: l,
                    _arrayIndex: f,
                    _zForTemplate: null,
                  };
                S.debug("z-for配列アイテム編集: コンポーネント検索結果", {
                  componentId: c,
                  componentFound: !!s,
                  componentType: s.type,
                  componentModuleName: s.module_name,
                  arrayName: l,
                  arrayLength: i.length,
                  index: f,
                  itemKeys: Object.keys(p),
                  tempComponentId: m.id,
                }),
                  o.openEditor(m, `${c}_${l}_${f}`),
                  S.success(`z-for配列アイテム編集開始: ${l}[${f}]`);
              } catch (s) {
                S.error(`z-for配列アイテム編集エラー: ${s}`, {
                  componentId: c,
                  arrayName: l,
                  index: f,
                });
              }
            }
          ),
          fe.on("deleteNestedPart", ({ pathString: c }) => {
            S.debug(`EventBus: deleteNestedPart - path=${c}`),
              C.deleteNestedPart(c);
          }),
          fe.on("openNestedEditor", ({ pathString: c }) => {
            if (
              (S.debug(`EventBus: openNestedEditor - path=${c}`),
              !c || typeof c != "string")
            ) {
              S.error("Invalid pathString:", c);
              return;
            }
            const l = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/,
              f = c.match(l);
            let s = null;
            if (f) {
              const [, i, p, m, $, z] = f;
              S.debug("z-for内パス解析:", {
                parentId: i,
                arrayName: p,
                arrayIndex: m,
                slotName: $,
                partIndex: z,
              });
              const A = y(o.editablePageData.value, i);
              if (A && A[p] && Array.isArray(A[p])) {
                const u = A[p][parseInt(m)];
                u &&
                  u[$] &&
                  Array.isArray(u[$]) &&
                  ((s = u[$][parseInt(z)]),
                  S.debug("z-for内ネストパーツを発見:", s));
              }
            } else s = y(o.editablePageData.value, c);
            s
              ? (S.debug("Found component:", {
                  id: s.id,
                  type: s.type,
                  module: s.module_name,
                }),
                o.openEditor(s, c))
              : S.error(`Component not found with ID: ${c}`);
          }),
          fe.on("openNestedPartSelector", ({ pathString: c, position: l }) => {
            S.debug(
              `EventBus: openNestedPartSelector - path=${c}, position=${l}`
            ),
              o.openNestedPartSelector(c, l);
          });
      },
      N = (c) => {
        [
          "startTiptapEdit",
          "stopTiptapEdit",
          "openPartSelector",
          "openNestedPartSelector",
          "openNestedEditor",
          "deleteNestedPart",
          "addArrayItem",
          "addZForArrayItem",
          "removeZForArrayItem",
          "reorderZForArrayItem",
          "editZForArrayItem",
          "handleZForDragStart",
          "handleZForDragEnd",
          "handleZForArrayItemDragOver",
          "handleZForArrayItemDrop",
        ].forEach((i) => {
          delete window[i];
        }),
          (window.startTiptapEdit = c || C.startSimpleTiptapEdit),
          (window.stopTiptapEdit = C.stopTiptapEdit),
          (window.openPartSelector = (i) => o.openPartSelector(i)),
          (window.openNestedPartSelector = Re.openNestedPartSelector),
          (window.openNestedEditor = Re.openNestedEditor),
          (window.deleteNestedPart = Re.deleteNestedPart),
          (window.addArrayItem = Re.addArrayItem),
          (window.addZForArrayItem = Re.addZForArrayItem),
          (window.removeZForArrayItem = Re.removeZForArrayItem),
          (window.reorderZForArrayItem = Re.reorderZForArrayItem),
          (window.editZForArrayItem = Re.editZForArrayItem);
        let f = null,
          s = null;
        (window.handleZForDragStart = (i, p, m, $) => {
          const z = i.target;
          if (
            z.tagName === "BUTTON" ||
            z.tagName === "A" ||
            z.closest("button, a")
          ) {
            i.preventDefault();
            return;
          }
          i.stopPropagation(), (f = { componentId: p, arrayName: m, index: $ });
          const A = z.closest(".zero-code-z-for-item-wrapper");
          A
            ? ((A.style.opacity = "0.5"),
              (A.style.transform = "scale(0.95)"),
              A.classList.add("dragging"))
            : (z.style.opacity = "0.5"),
            (i.dataTransfer.effectAllowed = "move"),
            i.dataTransfer.setData("text/html", z.outerHTML),
            S.debug("z-for drag start", {
              componentId: p,
              arrayName: m,
              index: $,
            });
        }),
          (window.handleZForDragEnd = (i) => {
            const p = i.target,
              m = p.closest(".zero-code-z-for-item-wrapper");
            m
              ? ((m.style.opacity = "1"),
                (m.style.transform = "scale(1)"),
                m.classList.remove("dragging"))
              : (p.style.opacity = "1"),
              document
                .querySelectorAll(".z-for-item-wrapper.drag-over")
                .forEach(($) => {
                  $.classList.remove("drag-over");
                }),
              setTimeout(() => {
                (f = null), S.debug("z-for drag end - draggedItem reset");
              }, 50),
              S.debug("z-for drag end");
          }),
          (window.handleZForArrayItemDragOver = (i) => {
            i.preventDefault(), (i.dataTransfer.dropEffect = "move");
            const m = i.currentTarget.closest(".zero-code-z-for-item-wrapper");
            m &&
              !m.classList.contains("dragging") &&
              (document
                .querySelectorAll(".z-for-item-wrapper.drag-over")
                .forEach(($) => {
                  $.classList.remove("drag-over");
                }),
              m.classList.add("drag-over"));
          }),
          (window.handleZForArrayItemDrop = (i) => {
            i.preventDefault(), i.stopPropagation();
            const p = i.currentTarget,
              m = p.closest(".zero-code-z-for-item-wrapper");
            if ((m && m.classList.remove("drag-over"), !f)) {
              S.warn("No dragged item found");
              return;
            }
            const $ =
                (m == null ? void 0 : m.getAttribute("data-component-id")) ||
                p.getAttribute("data-component-id"),
              z =
                (m == null ? void 0 : m.getAttribute("data-array-name")) ||
                p.getAttribute("data-array-name"),
              A =
                (m == null ? void 0 : m.getAttribute("data-item-index")) ||
                p.getAttribute("data-item-index"),
              u = parseInt(A || "0");
            f.componentId === $ &&
              f.arrayName === z &&
              f.index !== u &&
              (Re.reorderZForArrayItem(f.componentId, f.arrayName, f.index, u),
              S.success("z-for array item reordered", {
                from: f.index,
                to: u,
              })),
              (f = null);
          }),
          (window.handleNestedPartDragStart = (i) => {
            const p = i.target;
            if (
              p.tagName === "BUTTON" ||
              p.tagName === "A" ||
              p.closest("button, a")
            ) {
              i.preventDefault();
              return;
            }
            const m = p.closest(".z-for-nested-part");
            if (m) {
              const $ = m.getAttribute("data-nested-path"),
                z = m.getAttribute("data-slot-name"),
                A = m.getAttribute("data-part-index");
              $ &&
                z &&
                A !== null &&
                ((s = { path: $, slotName: z, index: parseInt(A) }),
                m.classList.add("dragging"),
                (m.style.opacity = "0.5"),
                (i.dataTransfer.effectAllowed = "move"),
                i.dataTransfer.setData("text/html", m.outerHTML),
                S.debug("z-for nested part drag start", s));
            }
          }),
          (window.handleNestedPartDragEnd = (i) => {
            const m = i.target.closest(".z-for-nested-part");
            m && (m.classList.remove("dragging"), (m.style.opacity = "1")),
              document
                .querySelectorAll(".z-for-nested-part.drag-over")
                .forEach(($) => {
                  $.classList.remove("drag-over");
                }),
              (s = null),
              S.debug("z-for nested part drag end");
          }),
          (window.handleNestedPartDragOver = (i) => {
            i.preventDefault(), (i.dataTransfer.dropEffect = "move");
            const m = i.currentTarget.closest(".z-for-nested-part");
            m &&
              !m.classList.contains("dragging") &&
              (document
                .querySelectorAll(".z-for-nested-part.drag-over")
                .forEach(($) => {
                  $.classList.remove("drag-over");
                }),
              m.classList.add("drag-over"));
          }),
          (window.handleNestedPartDrop = (i) => {
            i.preventDefault();
            const p = i.currentTarget,
              m =
                p.closest(".z-for-nested-part") ||
                p.closest(".nested-component");
            if ((m && m.classList.remove("drag-over"), !s)) {
              S.warn("No dragged nested part found");
              return;
            }
            const $ = p.getAttribute("data-slot-name"),
              z = p.getAttribute("data-part-index");
            if ($ && z !== null) {
              const A = parseInt(z);
              if ($ === s.slotName) {
                const u = s.path.match(/^(.+\.\w+\[\d+\]\.\w+)\[\d+\]$/);
                if (u) {
                  const b = u[1];
                  S.debug("z-for nested part reorder", {
                    parentPath: b,
                    fromIndex: s.index,
                    toIndex: A,
                  }),
                    C.moveZForNestedPart(b, s.index, A);
                }
              }
            }
            s = null;
          }),
          S.debug("グローバル関数を安全に公開完了");
      },
      E = () => {};
    return {
      state: {
        editablePageData: o.editablePageData,
        localParts: o.localParts,
        localCommonParts: o.localCommonParts,
        localIndividualParts: o.localIndividualParts,
        activeTab: o.activeTab,
        dataTab: o.dataTab,
        showEditor: o.showEditor,
        showPartSelector: o.showPartSelector,
        showNestedPartSelector: o.showNestedPartSelector,
        selectedComponent: o.selectedComponent,
        selectedComponentIndex: o.selectedComponentIndex,
        editingText: o.editingText,
        insertPosition: o.insertPosition,
        nestedInsertPath: o.nestedInsertPath,
        nestedInsertPosition: o.nestedInsertPosition,
      },
      computed: {
        currentComponentIndex: o.currentComponentIndex,
        pageDataLength: o.pageDataLength,
        hasSelectedComponent: o.hasSelectedComponent,
        isEditing: o.isEditing,
        isTiptapEditing: o.isTiptapEditing,
        ...v,
      },
      actions: C,
      utils: n,
      templateProcessor: a,
      simpleEditor: g,
      switchToTab: o.switchToTab,
      setDataTab: o.setDataTab,
      openEditor: o.openEditor,
      closeEditor: o.closeEditor,
      openPartSelector: o.openPartSelector,
      closePartSelector: o.closePartSelector,
      openNestedPartSelector: o.openNestedPartSelector,
      closeNestedPartSelector: o.closeNestedPartSelector,
      setupEventListeners: w,
      exposeGlobalFunctions: N,
      cleanup: E,
    };
  }
  const Yi = { class: "zero-code-tab-navigation" },
    Ki = ["onClick"],
    Ji = e.defineComponent({
      __name: "TabNavigation",
      props: { activeTab: { type: String } },
      emits: ["update:active-tab"],
      setup(t) {
        const r = ["editor", "preview", "parts", "images"],
          o = (n) =>
            ({
              editor: "エディタ",
              preview: "ページプレビュー",
              parts: "パーツ管理",
              images: "画像管理",
            }[n]);
        return (n, a) => (
          e.openBlock(),
          e.createElementBlock("div", Yi, [
            (e.openBlock(),
            e.createElementBlock(
              e.Fragment,
              null,
              e.renderList(r, (g) =>
                e.createElementVNode(
                  "button",
                  {
                    key: g,
                    class: e.normalizeClass([
                      "zero-code-tab-button",
                      { active: n.activeTab === g },
                    ]),
                    onClick: (y) => n.$emit("update:active-tab", g),
                  },
                  e.toDisplayString(o(g)),
                  11,
                  Ki
                )
              ),
              64
            )),
          ])
        );
      },
    });
  function qi() {
    const t = e.ref([]),
      r = e.computed(() => t.value.length > 0),
      o = (d, h = oe.UNKNOWN, C) => {
        const v = {
          id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: h,
          message: d instanceof Error ? d.message : d,
          details: d instanceof Error ? d.stack : void 0,
          timestamp: new Date(),
          context: C,
        };
        t.value.push(v),
          setTimeout(() => {
            a(v.id);
          }, 1e4);
      },
      n = () => {
        t.value = [];
      },
      a = (d) => {
        const h = t.value.findIndex((C) => C.id === d);
        h !== -1 && t.value.splice(h, 1);
      },
      g = (d) => t.value.filter((h) => h.type === d),
      y = (d, h = oe.UNKNOWN) => {
        o(d, h);
      };
    return {
      errors: t.value,
      hasErrors: r.value,
      handleError: o,
      clearErrors: n,
      clearError: a,
      getErrorsByType: g,
      showErrorNotification: y,
    };
  }
  const Gi = { class: "zero-code-error-boundary" },
    Qi = { key: 0, class: "zero-code-error-notifications" },
    ed = { class: "zero-code-error-content" },
    td = { class: "zero-code-error-message" },
    od = { class: "zero-code-error-icon" },
    rd = { class: "zero-code-error-text" },
    nd = ["onClick"],
    ad = { key: 0, class: "zero-code-error-details" },
    sd = { class: "zero-code-error-details-pre" },
    ld = { class: "zero-code-error-boundary-content" },
    id = e.defineComponent({
      __name: "ErrorBoundary",
      props: { showDetails: { type: Boolean, default: !1 } },
      setup(t) {
        const { errors: r, hasErrors: o, clearError: n } = qi(),
          a = (y) => {
            switch (y) {
              case oe.NETWORK_ERROR:
                return "error-network";
              case oe.VALIDATION_ERROR:
                return "error-validation";
              case oe.PERMISSION_ERROR:
                return "error-permission";
              case oe.COMPONENT_ERROR:
                return "error-component";
              case oe.IMAGE_LOAD_FAILED:
                return "error-image";
              case oe.TEMPLATE_PARSE_ERROR:
                return "error-template";
              default:
                return "error-unknown";
            }
          },
          g = (y) => {
            switch (y) {
              case oe.NETWORK_ERROR:
                return "🌐";
              case oe.VALIDATION_ERROR:
                return "⚠️";
              case oe.PERMISSION_ERROR:
                return "🔒";
              case oe.COMPONENT_ERROR:
                return "🧩";
              case oe.IMAGE_LOAD_FAILED:
                return "🖼️";
              case oe.TEMPLATE_PARSE_ERROR:
                return "📄";
              default:
                return "❌";
            }
          };
        return (y, d) => (
          e.openBlock(),
          e.createElementBlock("div", Gi, [
            e.unref(o)
              ? (e.openBlock(),
                e.createElementBlock("div", Qi, [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      e.unref(r),
                      (h) => (
                        e.openBlock(),
                        e.createElementBlock(
                          "div",
                          {
                            key: h.id,
                            class: e.normalizeClass([
                              "zero-code-error-notification",
                              a(h.type),
                            ]),
                          },
                          [
                            e.createElementVNode("div", ed, [
                              e.createElementVNode("div", td, [
                                e.createElementVNode(
                                  "span",
                                  od,
                                  e.toDisplayString(g(h.type)),
                                  1
                                ),
                                e.createElementVNode(
                                  "span",
                                  rd,
                                  e.toDisplayString(h.message),
                                  1
                                ),
                              ]),
                              e.createElementVNode(
                                "button",
                                {
                                  class: "zero-code-error-close",
                                  title: "エラーを閉じる",
                                  onClick: (C) => e.unref(n)(h.id),
                                },
                                " × ",
                                8,
                                nd
                              ),
                            ]),
                            h.details && y.showDetails
                              ? (e.openBlock(),
                                e.createElementBlock("div", ad, [
                                  e.createElementVNode(
                                    "pre",
                                    sd,
                                    e.toDisplayString(h.details),
                                    1
                                  ),
                                ]))
                              : e.createCommentVNode("", !0),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                ]))
              : e.createCommentVNode("", !0),
            e.createElementVNode("div", ld, [
              e.renderSlot(y.$slots, "default"),
            ]),
          ])
        );
      },
    }),
    dd = { class: "zero-code-toolbar-content" },
    cd = { class: "zero-code-toolbar-section" },
    pd = { key: 0, class: "zero-code-toolbar-separator" },
    ud = ["title", "disabled", "onClick"],
    md = { class: "zero-code-toolbar-section" },
    fd = e.defineComponent({
      __name: "RichTextToolbar",
      props: {
        show: { type: Boolean },
        position: { type: Object },
        actions: { type: Array },
        editingState: { type: null },
        isEditing: { type: Boolean },
      },
      emits: ["executeCommand", "save", "cancel"],
      setup(t, { emit: r }) {
        const o = t;
        e.onMounted(() => {}),
          e.watch(
            () => o.show,
            (d) => {},
            { immediate: !0 }
          ),
          e.watch(
            () => o.position,
            (d) => {},
            { deep: !0, immediate: !0 }
          ),
          e.watch(
            () => o.actions,
            (d) => {},
            { immediate: !0 }
          );
        const n = r,
          a = (d) => {
            n("executeCommand", d);
          },
          g = () => {
            n("save");
          },
          y = () => {
            n("cancel");
          };
        return (d, h) =>
          d.show
            ? (e.openBlock(),
              e.createElementBlock(
                "div",
                {
                  key: 0,
                  class: "zero-code-rich-text-toolbar",
                  style: e.normalizeStyle({
                    top: d.position.top + "px",
                    left: d.position.left + "px",
                  }),
                },
                [
                  e.createElementVNode("div", dd, [
                    e.createElementVNode("div", cd, [
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(
                          d.actions,
                          (C, v) => (
                            e.openBlock(),
                            e.createElementBlock(
                              e.Fragment,
                              { key: v },
                              [
                                C && C.name === "separator"
                                  ? (e.openBlock(),
                                    e.createElementBlock("div", pd))
                                  : C
                                  ? (e.openBlock(),
                                    e.createElementBlock(
                                      "button",
                                      {
                                        key: 1,
                                        class: e.normalizeClass([
                                          "zero-code-toolbar-btn",
                                          {
                                            active: C.active,
                                            disabled: !d.isEditing,
                                          },
                                        ]),
                                        title: C.title || "",
                                        disabled: !d.isEditing,
                                        tabindex: "-1",
                                        onClick: (w) => a(C.command || ""),
                                        onMousedown:
                                          h[0] ||
                                          (h[0] = e.withModifiers(() => {}, [
                                            "prevent",
                                            "stop",
                                          ])),
                                      },
                                      e.toDisplayString(C.icon || ""),
                                      43,
                                      ud
                                    ))
                                  : e.createCommentVNode("", !0),
                              ],
                              64
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    h[3] ||
                      (h[3] = e.createElementVNode(
                        "div",
                        { class: "zero-code-toolbar-separator" },
                        null,
                        -1
                      )),
                    e.createElementVNode("div", md, [
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-toolbar-btn zero-code-save-btn",
                          title: "保存 (Ctrl+S)",
                          tabindex: "-1",
                          onClick: g,
                          onMousedown:
                            h[1] ||
                            (h[1] = e.withModifiers(() => {}, [
                              "prevent",
                              "stop",
                            ])),
                        },
                        " ✓ ",
                        32
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-toolbar-btn zero-code-cancel-btn",
                          title: "キャンセル (Esc)",
                          tabindex: "-1",
                          onClick: y,
                          onMousedown:
                            h[2] ||
                            (h[2] = e.withModifiers(() => {}, [
                              "prevent",
                              "stop",
                            ])),
                        },
                        " ✕ ",
                        32
                      ),
                    ]),
                  ]),
                ],
                4
              ))
            : e.createCommentVNode("", !0);
      },
    }),
    gd = { class: "zero-code editor-container" },
    hd = { class: "zero-code-editor-content" },
    yd = e.defineComponent({
      __name: "ZeroCode.ce",
      props: {
        parts: { default: () => [], type: Array },
        commonParts: { default: () => [], type: Array },
        individualParts: { default: () => [], type: Array },
        page: { default: () => [], type: Array },
        commonImages: { default: () => [], type: Array },
        individualImages: { default: () => [], type: Array },
      },
      emits: [
        "update:parts",
        "update:commonParts",
        "update:individualParts",
        "update:page",
        "update:commonImages",
        "update:individualImages",
      ],
      setup(t, { emit: r }) {
        const o = t,
          n = r,
          a = Xi(o, n),
          g = a.state.selectedComponent;
        a.state.selectedComponentIndex;
        const y = a.state.editablePageData,
          d = a.state.localParts,
          h = a.state.dataTab,
          C = e.ref(!1),
          v = e.ref({ top: 0, left: 0 }),
          w = e.ref(null),
          N = e.ref(""),
          E = e.ref(""),
          c = e.ref(""),
          l = e.computed(() => w.value !== null),
          f = e.reactive({
            showToolbar: e.computed(() => C.value),
            position: e.computed(() => v.value),
            actions: [
              { name: "bold", icon: "B", title: "太字", command: "bold" },
              { name: "italic", icon: "I", title: "斜体", command: "italic" },
              {
                name: "underline",
                icon: "U",
                title: "下線",
                command: "underline",
              },
              { name: "separator" },
              { name: "link", icon: "🔗", title: "リンク", command: "link" },
            ],
            editingState: {},
            executeCommand: (T) => {
              s(T);
            },
            stopEdit: (T) => {
              m(T);
            },
          }),
          s = (T) => {
            if (w.value)
              try {
                if (T === "link") {
                  const O = prompt(
                    "リンクのURLを入力してください:",
                    "https://"
                  );
                  if (O && O.trim()) {
                    const R = document.execCommand("createLink", !1, O);
                  }
                } else {
                  const O = document.execCommand(T, !1, void 0);
                }
              } catch {}
          },
          i = (T) => {
            if (!T) return T;
            let O = T.replace(/(<br\s*\/?>)+$/gi, "");
            return (O = O.replace(/\s+$/, "")), O;
          },
          p = () => {
            if (!w.value || !E.value || !c.value) return;
            const T = w.value.innerHTML,
              O = i(T),
              R = (q) => {
                const W = E.value.match(/^(.+)_(.+)_(\d+)_(.+)$/);
                if (W) {
                  const [se, de, te, Y, me] = W,
                    re = (he, ze) => {
                      for (const Qe of he) {
                        if (Qe.id === ze) return Qe;
                        if (Qe.nested_parts && Array.isArray(Qe.nested_parts)) {
                          const et = re(Qe.nested_parts, ze);
                          if (et) return et;
                        }
                        for (const [et, wt] of Object.entries(Qe))
                          if (Array.isArray(wt) && et !== "nested_parts") {
                            for (const fo of wt)
                              if (fo && typeof fo == "object") {
                                for (const [Td, pr] of Object.entries(fo))
                                  if (Array.isArray(pr)) {
                                    const ur = re(pr, ze);
                                    if (ur) return ur;
                                  }
                              }
                          }
                      }
                      return null;
                    },
                    le = re(q, de);
                  if (le && Array.isArray(le[te])) {
                    const he = le[te][parseInt(Y)];
                    if (he && typeof he == "object") return (he[me] = O), !0;
                  }
                  return !1;
                }
                for (const se of q) {
                  if (se.id === E.value) return (se[c.value] = O), !0;
                  if (
                    se.nested_parts &&
                    Array.isArray(se.nested_parts) &&
                    R(se.nested_parts)
                  )
                    return !0;
                  for (const [de, te] of Object.entries(se))
                    if (Array.isArray(te) && de !== "nested_parts") {
                      for (const Y of te)
                        if (Y && typeof Y == "object") {
                          if (Y.id === E.value) return (Y[c.value] = O), !0;
                          for (const [me, re] of Object.entries(Y))
                            if (Array.isArray(re) && R(re)) return !0;
                        }
                    }
                }
                return !1;
              };
            R(y.value) &&
              (w.value && T !== O && (w.value.innerHTML = O),
              n("update:page", y.value));
          },
          m = (T) => {
            w.value &&
              (T ? p() : (w.value.innerHTML = N.value),
              (w.value.contentEditable = "false"),
              w.value.classList.remove("editing"),
              (w.value.style.userSelect = ""),
              (w.value.style.webkitUserSelect = ""),
              w.value._cleanup && (w.value._cleanup(), delete w.value._cleanup),
              (w.value = null),
              (N.value = ""),
              (E.value = ""),
              (c.value = ""),
              (C.value = !1));
          },
          $ = (T) => {
            a.actions.openEditor(T);
          },
          z = () => {
            a.closeEditor();
          },
          A = (T) => {
            a.actions.deletePart(T);
          },
          u = (T) => {
            a.actions.reorderParts(T);
          },
          b = () => {
            const T = document.querySelector(".zero-code");
            if (!T) return;
            let O = null,
              R = null;
            const q = (te) => {
                const Y = te,
                  me = Y.target;
                if (me.classList.contains("draggable-nested")) {
                  if (w.value) {
                    Y.preventDefault();
                    return;
                  }
                  if (me.classList.contains("z-for-nested-part")) return;
                  O = me;
                  const re = me.dataset.componentId || "",
                    le = me.dataset.path || "",
                    he = me.dataset.parentPath || "",
                    ze = parseInt(me.dataset.index || "0");
                  (R = {
                    componentId: re,
                    path: le,
                    parentPath: he,
                    index: ze,
                  }),
                    Y.dataTransfer &&
                      ((Y.dataTransfer.effectAllowed = "move"),
                      Y.dataTransfer.setData("text/plain", "nested-component")),
                    (me.style.opacity = "0.5");
                }
              },
              W = (te) => {
                const Y = te;
                Y.preventDefault(),
                  Y.dataTransfer && (Y.dataTransfer.dropEffect = "move");
              },
              se = (te) => {
                const Y = te;
                if ((Y.preventDefault(), !O || !R)) return;
                const re = Y.target.closest(".draggable-nested");
                if (re && re !== O) {
                  const le = re.dataset.parentPath || "",
                    he = parseInt(re.dataset.index || "0");
                  R.parentPath === le &&
                    a.actions.moveNestedPartById(R.parentPath, R.index, he);
                }
                O && (O.style.opacity = "1"), (O = null), (R = null);
              },
              de = (te) => {
                const Y = te.target;
                Y.classList.contains("draggable-nested") &&
                  (Y.style.opacity = "1"),
                  (O = null),
                  (R = null);
              };
            return (
              T.addEventListener("dragstart", q),
              T.addEventListener("dragover", W),
              T.addEventListener("drop", se),
              T.addEventListener("dragend", de),
              () => {
                T.removeEventListener("dragstart", q),
                  T.removeEventListener("dragover", W),
                  T.removeEventListener("drop", se),
                  T.removeEventListener("dragend", de);
              }
            );
          },
          k = () => {
            a.actions.sendPageData();
          },
          P = () => {
            a.actions.sendPartsData();
          },
          _ = () => {
            a.actions.sendCommonPartsData();
          },
          D = () => {
            a.actions.sendIndividualPartsData();
          },
          M = () => {
            a.actions.resetPageData();
          },
          I = e.ref(null),
          V = e.computed(() => {
            const T = new Set();
            return (
              d.value &&
                d.value.forEach((O) => {
                  O.parts &&
                    O.parts.forEach((R) => {
                      T.add(R.type);
                    });
                }),
              Array.from(T)
            );
          }),
          H = (T, O) => {
            let R = O;
            return (
              R === void 0 &&
                ((R = y.value.findIndex((q) => q.id === T.id)),
                R === -1 && (R = 0)),
              a.templateProcessor.renderComponentWithNested(
                T,
                R,
                (q, W) => a.utils.template.getTemplate(q, W, d.value),
                (q, W, se, de) =>
                  a.templateProcessor.renderNestedComponentsWithUI(
                    q,
                    W,
                    (te) => te.join("-"),
                    de ||
                      ((te, Y) => a.utils.template.getTemplate(te, Y, d.value))
                  )
              )
            );
          },
          F = (T) => {
            n("update:parts", T);
          },
          X = (T) => {
            (I.value = T), (De.value = !0);
          },
          L = (T, O) => {
            if (confirm(`パーツ「${O}」を削除しますか？`)) {
              const R = d.value
                .map((q) =>
                  q.type === T
                    ? { ...q, module: q.module.filter((W) => W.title !== O) }
                    : q
                )
                .filter((q) => q.module.length > 0);
              (d.value = R), n("update:parts", R);
            }
          },
          x = (T) => {
            const O = typeof T == "string" ? T : T.body || "";
            return a.computed.renderPartPreview(O);
          },
          J = (T) => {
            const { type: O, title: R, body: q, category: W = "common" } = T,
              se = [...d.value];
            let de = se.find((Y) => Y.type === O);
            de || ((de = { type: O, module: [] }), se.push(de));
            const te = { title: R, body: q, category: W };
            if (I.value) {
              const Y = de.module.findIndex(
                (me) => me.title === I.value.module.title
              );
              Y !== -1 && (de.module[Y] = te);
            } else de.module.push(te);
            (d.value = se), n("update:parts", se), Ht();
          },
          { activeTab: ee, switchToTab: Ae } = Hi(),
          Ie = a.state.showPartSelector,
          ge = a.state.showNestedPartSelector,
          De = e.ref(!1),
          He = (T) => {
            a.openPartSelector(T);
          },
          Rt = () => {
            a.closePartSelector();
          },
          $t = () => {
            a.closeNestedPartSelector();
          },
          Ge = () => {
            De.value = !0;
          },
          Ht = () => {
            (De.value = !1), (I.value = null);
          },
          po = a.state.showEditor,
          Ze = e.ref([]),
          Pe = e.ref([]),
          uo = (T) => {
            (Ze.value = T), n("update:commonImages", T);
          },
          bd = (T) => {
            (Pe.value = T), n("update:individualImages", T);
          },
          lr = () => {
            n("update:commonImages", Ze.value);
          },
          ir = () => {
            n("update:individualImages", Pe.value);
          },
          dr = async () => {
            try {
              const [T, O] = await Promise.all([
                fetch("../sample-common-images.json"),
                fetch("/sample-individual-images.json"),
              ]);
              if (T.ok && O.ok) {
                const [R, q] = await Promise.all([T.json(), O.json()]);
                (Ze.value = Array.isArray(R) ? R : []),
                  (Pe.value = Array.isArray(q) ? q : []);
              } else (Ze.value = []), (Pe.value = []);
            } catch {
              (Ze.value = []), (Pe.value = []);
            }
          },
          Ed = (T, O, R) => {
            const q = Xe.value.createNewComponent(T, O),
              W = R !== void 0 ? R : a.state.insertPosition.value;
            a.actions.addPart(q, W), Rt();
          },
          $d = (T, O) => {
            const R = a.state.nestedInsertPath.value,
              q = a.state.nestedInsertPosition.value,
              W = Xe.value.createNewComponent(T, O);
            a.actions.addNestedPart(R, q, W), $t();
          },
          Xe = e.computed(() => {
            const T = d.value && d.value.length > 0 ? d.value : o.parts || [];
            return Lt(T);
          }),
          wd = (T) => Xe.value.getFieldInfo(T),
          zd = (T, O, R) => Xe.value.shouldShowBasicField(T, O, R),
          vd = (T, O, R) => Xe.value.shouldShowArrayField(T, O, R),
          Nd = (T, O, R, q, W) =>
            Xe.value.shouldShowArrayItemField(T, O, R, q, W),
          Cd = (T) => Xe.value.getInputType(T),
          kd = (T, O, R) => Xe.value.isCheckboxChecked(T, O, R),
          Ad = (T, O) => {
            const R = g.value;
            if (R) {
              if (((R[T] = O), R._isZForItem)) {
                const q = R._parentComponentId,
                  W = R._arrayName,
                  se = R._arrayIndex,
                  de = (Y, me) => {
                    for (const re of Y) {
                      if (re.id === me) return re;
                      if (re.nested_parts && Array.isArray(re.nested_parts)) {
                        const le = de(re.nested_parts, me);
                        if (le) return le;
                      }
                      for (const [le, he] of Object.entries(re))
                        if (Array.isArray(he) && le !== "nested_parts") {
                          for (const ze of he)
                            if (ze && typeof ze == "object") {
                              for (const [Qe, et] of Object.entries(ze))
                                if (Array.isArray(et)) {
                                  const wt = de(et, me);
                                  if (wt) return wt;
                                }
                            }
                        }
                    }
                    return null;
                  },
                  te = de(y.value, q);
                if (te && Array.isArray(te[W])) {
                  const Y = te[W];
                  se >= 0 && se < Y.length && (Y[se][T] = O);
                }
              }
              n("update:page", y.value);
            }
          };
        e.watch(
          () => o.commonImages,
          (T) => {
            Array.isArray(T) && (Ze.value = JSON.parse(JSON.stringify(T)));
          },
          { immediate: !0 }
        ),
          e.watch(
            () => o.individualImages,
            (T) => {
              Array.isArray(T) && (Pe.value = JSON.parse(JSON.stringify(T)));
            },
            { immediate: !0 }
          );
        const cr = (T) => {
          if (!w.value || !C.value) return;
          const O = T.target;
          O.closest(".zero-code-rich-text-toolbar") ||
            O === w.value ||
            w.value.contains(O) ||
            m(!0);
        };
        let mo = null;
        return (
          e.onMounted(async () => {
            await dr(),
              document.addEventListener("click", cr),
              a.setupEventListeners(),
              a.exposeGlobalFunctions((T, O) => {
                (C.value = !0), a.actions.startTiptapEdit(T, O, [], 0);
              }),
              (mo = b() || null),
              (window.startRichTextEdit = async (T, O, R, q) => {
                var se;
                const W =
                  q || ((se = window.event) == null ? void 0 : se.target);
                if (w.value !== W && W) {
                  w.value && m(!1),
                    (w.value = W),
                    (N.value = W.innerHTML),
                    (E.value = T),
                    (c.value = O),
                    await e.nextTick(),
                    (W.contentEditable = "true"),
                    (W.style.userSelect = "text"),
                    (W.style.webkitUserSelect = "text"),
                    W.classList.add("editing");
                  const de = (re) => {
                    const le = re.relatedTarget;
                    (le && le.closest(".zero-code-rich-text-toolbar")) ||
                      setTimeout(() => {
                        w.value === W && m(!0);
                      }, 150);
                  };
                  W.addEventListener("blur", de),
                    (W._cleanup = () => {
                      W.removeEventListener("blur", de);
                    });
                  const te = W.getBoundingClientRect(),
                    Y =
                      window.pageYOffset || document.documentElement.scrollTop,
                    me =
                      window.pageXOffset || document.documentElement.scrollLeft;
                  (v.value = { top: te.top + Y - 50, left: te.left + me }),
                    (C.value = !0),
                    await e.nextTick(),
                    setTimeout(() => {
                      var re;
                      if (W && w.value === W) {
                        W.focus();
                        const le = document.createRange(),
                          he = window.getSelection();
                        if (he && W.childNodes.length > 0) {
                          const ze = W.childNodes[W.childNodes.length - 1];
                          ze.nodeType === Node.TEXT_NODE
                            ? le.setStart(
                                ze,
                                ((re = ze.textContent) == null
                                  ? void 0
                                  : re.length) || 0
                              )
                            : le.setStartAfter(ze),
                            le.collapse(!0),
                            he.removeAllRanges(),
                            he.addRange(le);
                        } else
                          he &&
                            (le.selectNodeContents(W),
                            le.collapse(!1),
                            he.removeAllRanges(),
                            he.addRange(le));
                      }
                    }, 10);
                }
              });
          }),
          e.onUnmounted(() => {
            document.removeEventListener("click", cr), mo && mo();
          }),
          (T, O) => (
            e.openBlock(),
            e.createBlock(id, null, {
              default: e.withCtx(() => [
                e.createElementVNode("div", gd, [
                  e.createVNode(
                    Ji,
                    {
                      "active-tab": e.unref(ee),
                      "onUpdate:activeTab": e.unref(Ae),
                    },
                    null,
                    8,
                    ["active-tab", "onUpdate:activeTab"]
                  ),
                  e.createVNode(
                    fd,
                    {
                      show: C.value,
                      position: v.value,
                      actions: f.actions,
                      "editing-state": f.editingState,
                      "is-editing": C.value,
                      onExecuteCommand: f.executeCommand,
                      onSave: O[0] || (O[0] = (R) => f.stopEdit(!0)),
                      onCancel: O[1] || (O[1] = (R) => f.stopEdit(!1)),
                    },
                    null,
                    8,
                    [
                      "show",
                      "position",
                      "actions",
                      "editing-state",
                      "is-editing",
                      "onExecuteCommand",
                    ]
                  ),
                  e.createElementVNode("div", hd, [
                    e.unref(ee) === "editor"
                      ? (e.openBlock(),
                        e.createBlock(
                          qa,
                          {
                            key: 0,
                            "data-tab": e.unref(h),
                            "editable-page-data": e.unref(y),
                            "local-parts": e.unref(d),
                            "local-common-parts":
                              e.unref(a).state.localCommonParts.value,
                            "local-individual-parts":
                              e.unref(a).state.localIndividualParts.value,
                            parts: o.parts || [],
                            "show-part-selector": e.unref(Ie),
                            "show-nested-part-selector": e.unref(ge),
                            "show-editor": e.unref(po),
                            "selected-component": e.unref(g),
                            "render-component-with-nested": H,
                            "get-field-info": wd,
                            "should-show-basic-field": zd,
                            "should-show-array-field": vd,
                            "should-show-array-item-field": Nd,
                            "get-input-type": Cd,
                            "is-checkbox-checked": kd,
                            "parts-data":
                              e.unref(d) && e.unref(d).length > 0
                                ? e.unref(d)
                                : o.parts || [],
                            "is-text-editing": l.value,
                            "onUpdate:dataTab":
                              O[2] || (O[2] = (R) => (h.value = R)),
                            onAddPart: He,
                            onEditPart: $,
                            onDeletePart: A,
                            onReorderParts: u,
                            onClosePartSelector: Rt,
                            onSelectPart: Ed,
                            onCloseNestedPartSelector: $t,
                            onSelectNestedPart: $d,
                            onCloseEditor: z,
                            onUpdateEditorValue: Ad,
                          },
                          null,
                          8,
                          [
                            "data-tab",
                            "editable-page-data",
                            "local-parts",
                            "local-common-parts",
                            "local-individual-parts",
                            "parts",
                            "show-part-selector",
                            "show-nested-part-selector",
                            "show-editor",
                            "selected-component",
                            "parts-data",
                            "is-text-editing",
                          ]
                        ))
                      : e.createCommentVNode("", !0),
                    e.unref(ee) === "parts"
                      ? (e.openBlock(),
                        e.createBlock(
                          tl,
                          {
                            key: 1,
                            "local-parts": e.unref(d),
                            "local-common-parts":
                              e.unref(a).state.localCommonParts.value,
                            "local-individual-parts":
                              e.unref(a).state.localIndividualParts.value,
                            "show-part-registration": De.value,
                            "existing-part-types": V.value,
                            "editing-part": I.value,
                            "render-part-preview": x,
                            onUpdateParts: F,
                            onShowRegistration: Ge,
                            onEditPart: X,
                            onDeletePart: L,
                            onCloseRegistration: Ht,
                            onSavePart: J,
                          },
                          null,
                          8,
                          [
                            "local-parts",
                            "local-common-parts",
                            "local-individual-parts",
                            "show-part-registration",
                            "existing-part-types",
                            "editing-part",
                          ]
                        ))
                      : e.createCommentVNode("", !0),
                    e.unref(ee) === "preview"
                      ? (e.openBlock(),
                        e.createBlock(
                          Vl,
                          {
                            key: 2,
                            "editable-page-data": e.unref(y),
                            "local-parts": e.unref(d),
                            parts: o.parts || [],
                          },
                          null,
                          8,
                          ["editable-page-data", "local-parts", "parts"]
                        ))
                      : e.createCommentVNode("", !0),
                    e.unref(ee) === "images"
                      ? (e.openBlock(),
                        e.createBlock(
                          Ri,
                          {
                            key: 3,
                            "common-images": Ze.value,
                            "individual-images": Pe.value,
                            onUpdateCommonImages: uo,
                            onUpdateIndividualImages: bd,
                            onSendCommonImagesData: lr,
                            onSendIndividualImagesData: ir,
                            onInitializeSampleImages: dr,
                          },
                          null,
                          8,
                          ["common-images", "individual-images"]
                        ))
                      : e.createCommentVNode("", !0),
                  ]),
                  e.createElementVNode(
                    "div",
                    { class: "zero-code-button-section" },
                    [
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-send-btn zero-code-page-btn",
                          onClick: k,
                        },
                        "Pageデータを送信"
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-send-btn zero-code-parts-btn",
                          onClick: P,
                        },
                        "Partsデータを送信"
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class:
                            "zero-code-send-btn zero-code-common-parts-btn",
                          onClick: _,
                        },
                        "共通Partsデータを送信"
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class:
                            "zero-code-send-btn zero-code-individual-parts-btn",
                          onClick: D,
                        },
                        "個別Partsデータを送信"
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class:
                            "zero-code-send-btn zero-code-common-images-btn",
                          onClick: lr,
                        },
                        " 共通画像データを送信 "
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class:
                            "zero-code-send-btn zero-code-individual-images-btn",
                          onClick: ir,
                        },
                        " 個別画像データを送信 "
                      ),
                      e.createElementVNode(
                        "button",
                        {
                          class: "zero-code-send-btn zero-code-reset-btn",
                          onClick: M,
                        },
                        "リセット"
                      ),
                    ]
                  ),
                ]),
              ]),
              _: 1,
            })
          )
        );
      },
    }),
    co = e.defineCustomElement(yd, { shadowRoot: !1 });
  customElements.define("zero-code", co),
    ($e.ZeroCode = co),
    ($e.default = co),
    Object.defineProperties($e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    });
});
