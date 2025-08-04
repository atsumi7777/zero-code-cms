var Wr = Object.defineProperty;
var Xr = (e, o, t) => o in e ? Wr(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var _t = (e, o, t) => Xr(e, typeof o != "symbol" ? o + "" : o, t);
import { defineComponent as _e, computed as de, toRefs as pr, unref as G, ref as re, reactive as ao, h as Yr, getCurrentInstance as Io, watch as je, onMounted as To, nextTick as qt, onUnmounted as Do, isRef as po, createElementBlock as N, openBlock as D, createElementVNode as g, Fragment as ee, renderList as ne, normalizeClass as Fe, toDisplayString as B, createCommentVNode as Y, createVNode as gt, withCtx as fr, withModifiers as Be, createBlock as xe, withDirectives as Oe, vModelText as We, vModelSelect as mr, createTextVNode as Ut, onBeforeUnmount as Kr, renderSlot as Jr, normalizeStyle as qr, defineCustomElement as Gr } from "vue";
var Qr = Object.defineProperty, Gt = Object.getOwnPropertySymbols, gr = Object.prototype.hasOwnProperty, hr = Object.prototype.propertyIsEnumerable, Ho = (e, o, t) => o in e ? Qr(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, $t = (e, o) => {
  for (var t in o || (o = {}))
    gr.call(o, t) && Ho(e, t, o[t]);
  if (Gt)
    for (var t of Gt(o))
      hr.call(o, t) && Ho(e, t, o[t]);
  return e;
}, vr = (e, o) => {
  var t = {};
  for (var r in e)
    gr.call(e, r) && o.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Gt)
    for (var r of Gt(e))
      o.indexOf(r) < 0 && hr.call(e, r) && (t[r] = e[r]);
  return t;
};
function Vo(e, o, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(o, 1)[0]), e;
}
function en(e) {
  return e.replace(/-(\w)/g, (o, t) => t ? t.toUpperCase() : "");
}
function tn(e) {
  return Object.keys(e).reduce((o, t) => (typeof e[t] < "u" && (o[en(t)] = e[t]), o), {});
}
function Zo(e, o) {
  return Array.isArray(e) && e.splice(o, 1), e;
}
function Uo(e, o, t) {
  return Array.isArray(e) && e.splice(o, 0, t), e;
}
function on(e) {
  return typeof e > "u";
}
function rn(e) {
  return typeof e == "string";
}
function jo(e, o, t) {
  const r = e.children[t];
  e.insertBefore(o, r);
}
function fo(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function nn(e, o = document) {
  var t;
  let r = null;
  return typeof (o == null ? void 0 : o.querySelector) == "function" ? r = (t = o == null ? void 0 : o.querySelector) == null ? void 0 : t.call(o, e) : r = document.querySelector(e), r || (`${e}`, void 0), r;
}
function an(e, o, t = null) {
  return function(...r) {
    return e.apply(t, r), o.apply(t, r);
  };
}
function sn(e, o) {
  const t = $t({}, e);
  return Object.keys(o).forEach((r) => {
    t[r] ? t[r] = an(e[r], o[r]) : t[r] = o[r];
  }), t;
}
function ln(e) {
  return e instanceof HTMLElement;
}
function Wo(e, o) {
  Object.keys(e).forEach((t) => {
    o(t, e[t]);
  });
}
function dn(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const cn = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Xo(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ye(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Xo(Object(t), !0).forEach(function(r) {
      un(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xo(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function jt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jt = function(o) {
    return typeof o;
  } : jt = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, jt(e);
}
function un(e, o, t) {
  return o in e ? Object.defineProperty(e, o, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[o] = t, e;
}
function ot() {
  return ot = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ot.apply(this, arguments);
}
function pn(e, o) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), n, f;
  for (f = 0; f < r.length; f++)
    n = r[f], !(o.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
function fn(e, o) {
  if (e == null)
    return {};
  var t = pn(e, o), r, n;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(e);
    for (n = 0; n < f.length; n++)
      r = f[n], !(o.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
var mn = "1.15.2";
function tt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var rt = tt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ft = tt(/Edge/i), Yo = tt(/firefox/i), Tt = tt(/safari/i) && !tt(/chrome/i) && !tt(/android/i), yr = tt(/iP(ad|od|hone)/i), br = tt(/chrome/i) && tt(/android/i), $r = {
  capture: !1,
  passive: !1
};
function ae(e, o, t) {
  e.addEventListener(o, t, !rt && $r);
}
function oe(e, o, t) {
  e.removeEventListener(o, t, !rt && $r);
}
function Qt(e, o) {
  if (o) {
    if (o[0] === ">" && (o = o.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(o);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(o);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(o);
      } catch {
        return !1;
      }
    return !1;
  }
}
function gn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Ue(e, o, t, r) {
  if (e) {
    t = t || document;
    do {
      if (o != null && (o[0] === ">" ? e.parentNode === t && Qt(e, o) : Qt(e, o)) || r && e === t)
        return e;
      if (e === t)
        break;
    } while (e = gn(e));
  }
  return null;
}
var Ko = /\s+/g;
function Ne(e, o, t) {
  if (e && o)
    if (e.classList)
      e.classList[t ? "add" : "remove"](o);
    else {
      var r = (" " + e.className + " ").replace(Ko, " ").replace(" " + o + " ", " ");
      e.className = (r + (t ? " " + o : "")).replace(Ko, " ");
    }
}
function W(e, o, t) {
  var r = e && e.style;
  if (r) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), o === void 0 ? t : t[o];
    !(o in r) && o.indexOf("webkit") === -1 && (o = "-webkit-" + o), r[o] = t + (typeof t == "string" ? "" : "px");
  }
}
function zt(e, o) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var r = W(e, "transform");
      r && r !== "none" && (t = r + " " + t);
    } while (!o && (e = e.parentNode));
  var n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(t);
}
function wr(e, o, t) {
  if (e) {
    var r = e.getElementsByTagName(o), n = 0, f = r.length;
    if (t)
      for (; n < f; n++)
        t(r[n], n);
    return r;
  }
  return [];
}
function Xe() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function ze(e, o, t, r, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var f, v, l, m, E, A, w;
    if (e !== window && e.parentNode && e !== Xe() ? (f = e.getBoundingClientRect(), v = f.top, l = f.left, m = f.bottom, E = f.right, A = f.height, w = f.width) : (v = 0, l = 0, m = window.innerHeight, E = window.innerWidth, A = window.innerHeight, w = window.innerWidth), (o || t) && e !== window && (n = n || e.parentNode, !rt))
      do
        if (n && n.getBoundingClientRect && (W(n, "transform") !== "none" || t && W(n, "position") !== "static")) {
          var P = n.getBoundingClientRect();
          v -= P.top + parseInt(W(n, "border-top-width")), l -= P.left + parseInt(W(n, "border-left-width")), m = v + f.height, E = l + f.width;
          break;
        }
      while (n = n.parentNode);
    if (r && e !== window) {
      var b = zt(n || e), d = b && b.a, s = b && b.d;
      b && (v /= s, l /= d, w /= d, A /= s, m = v + A, E = l + w);
    }
    return {
      top: v,
      left: l,
      bottom: m,
      right: E,
      width: w,
      height: A
    };
  }
}
function Jo(e, o, t) {
  for (var r = it(e, !0), n = ze(e)[o]; r; ) {
    var f = ze(r)[t], v = void 0;
    if (v = n >= f, !v)
      return r;
    if (r === Xe())
      break;
    r = it(r, !1);
  }
  return !1;
}
function At(e, o, t, r) {
  for (var n = 0, f = 0, v = e.children; f < v.length; ) {
    if (v[f].style.display !== "none" && v[f] !== X.ghost && (r || v[f] !== X.dragged) && Ue(v[f], t.draggable, e, !1)) {
      if (n === o)
        return v[f];
      n++;
    }
    f++;
  }
  return null;
}
function No(e, o) {
  for (var t = e.lastElementChild; t && (t === X.ghost || W(t, "display") === "none" || o && !Qt(t, o)); )
    t = t.previousElementSibling;
  return t || null;
}
function Le(e, o) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== X.clone && (!o || Qt(e, o)) && t++;
  return t;
}
function qo(e) {
  var o = 0, t = 0, r = Xe();
  if (e)
    do {
      var n = zt(e), f = n.a, v = n.d;
      o += e.scrollLeft * f, t += e.scrollTop * v;
    } while (e !== r && (e = e.parentNode));
  return [o, t];
}
function hn(e, o) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var r in o)
        if (o.hasOwnProperty(r) && o[r] === e[t][r])
          return Number(t);
    }
  return -1;
}
function it(e, o) {
  if (!e || !e.getBoundingClientRect)
    return Xe();
  var t = e, r = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var n = W(t);
      if (t.clientWidth < t.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return Xe();
        if (r || o)
          return t;
        r = !0;
      }
    }
  while (t = t.parentNode);
  return Xe();
}
function vn(e, o) {
  if (e && o)
    for (var t in o)
      o.hasOwnProperty(t) && (e[t] = o[t]);
  return e;
}
function mo(e, o) {
  return Math.round(e.top) === Math.round(o.top) && Math.round(e.left) === Math.round(o.left) && Math.round(e.height) === Math.round(o.height) && Math.round(e.width) === Math.round(o.width);
}
var Dt;
function zr(e, o) {
  return function() {
    if (!Dt) {
      var t = arguments, r = this;
      t.length === 1 ? e.call(r, t[0]) : e.apply(r, t), Dt = setTimeout(function() {
        Dt = void 0;
      }, o);
    }
  };
}
function yn() {
  clearTimeout(Dt), Dt = void 0;
}
function Ar(e, o, t) {
  e.scrollLeft += o, e.scrollTop += t;
}
function Pr(e) {
  var o = window.Polymer, t = window.jQuery || window.Zepto;
  return o && o.dom ? o.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function Er(e, o, t) {
  var r = {};
  return Array.from(e.children).forEach(function(n) {
    var f, v, l, m;
    if (!(!Ue(n, o.draggable, e, !1) || n.animated || n === t)) {
      var E = ze(n);
      r.left = Math.min((f = r.left) !== null && f !== void 0 ? f : 1 / 0, E.left), r.top = Math.min((v = r.top) !== null && v !== void 0 ? v : 1 / 0, E.top), r.right = Math.max((l = r.right) !== null && l !== void 0 ? l : -1 / 0, E.right), r.bottom = Math.max((m = r.bottom) !== null && m !== void 0 ? m : -1 / 0, E.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var Me = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function bn() {
  var e = [], o;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(r) {
          if (!(W(r, "display") === "none" || r === X.ghost)) {
            e.push({
              target: r,
              rect: ze(r)
            });
            var n = Ye({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var f = zt(r, !0);
              f && (n.top -= f.f, n.left -= f.e);
            }
            r.fromRect = n;
          }
        });
      }
    },
    addAnimationState: function(t) {
      e.push(t);
    },
    removeAnimationState: function(t) {
      e.splice(hn(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(o), typeof t == "function" && t();
        return;
      }
      var n = !1, f = 0;
      e.forEach(function(v) {
        var l = 0, m = v.target, E = m.fromRect, A = ze(m), w = m.prevFromRect, P = m.prevToRect, b = v.rect, d = zt(m, !0);
        d && (A.top -= d.f, A.left -= d.e), m.toRect = A, m.thisAnimationDuration && mo(w, A) && !mo(E, A) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - A.top) / (b.left - A.left) === (E.top - A.top) / (E.left - A.left) && (l = wn(b, w, P, r.options)), mo(A, E) || (m.prevFromRect = E, m.prevToRect = A, l || (l = r.options.animation), r.animate(m, b, A, l)), l && (n = !0, f = Math.max(f, l), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, l), m.thisAnimationDuration = l);
      }), clearTimeout(o), n ? o = setTimeout(function() {
        typeof t == "function" && t();
      }, f) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, r, n, f) {
      if (f) {
        W(t, "transition", ""), W(t, "transform", "");
        var v = zt(this.el), l = v && v.a, m = v && v.d, E = (r.left - n.left) / (l || 1), A = (r.top - n.top) / (m || 1);
        t.animatingX = !!E, t.animatingY = !!A, W(t, "transform", "translate3d(" + E + "px," + A + "px,0)"), this.forRepaintDummy = $n(t), W(t, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), W(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          W(t, "transition", ""), W(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, f);
      }
    }
  };
}
function $n(e) {
  return e.offsetWidth;
}
function wn(e, o, t, r) {
  return Math.sqrt(Math.pow(o.top - e.top, 2) + Math.pow(o.left - e.left, 2)) / Math.sqrt(Math.pow(o.top - t.top, 2) + Math.pow(o.left - t.left, 2)) * r.animation;
}
var vt = [], go = {
  initializeByDefault: !0
}, Rt = {
  mount: function(e) {
    for (var o in go)
      go.hasOwnProperty(o) && !(o in e) && (e[o] = go[o]);
    vt.forEach(function(t) {
      if (t.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), vt.push(e);
  },
  pluginEvent: function(e, o, t) {
    var r = this;
    this.eventCanceled = !1, t.cancel = function() {
      r.eventCanceled = !0;
    };
    var n = e + "Global";
    vt.forEach(function(f) {
      o[f.pluginName] && (o[f.pluginName][n] && o[f.pluginName][n](Ye({
        sortable: o
      }, t)), o.options[f.pluginName] && o[f.pluginName][e] && o[f.pluginName][e](Ye({
        sortable: o
      }, t)));
    });
  },
  initializePlugins: function(e, o, t, r) {
    vt.forEach(function(v) {
      var l = v.pluginName;
      if (!(!e.options[l] && !v.initializeByDefault)) {
        var m = new v(e, o, e.options);
        m.sortable = e, m.options = e.options, e[l] = m, ot(t, m.defaults);
      }
    });
    for (var n in e.options)
      if (e.options.hasOwnProperty(n)) {
        var f = this.modifyOption(e, n, e.options[n]);
        typeof f < "u" && (e.options[n] = f);
      }
  },
  getEventProperties: function(e, o) {
    var t = {};
    return vt.forEach(function(r) {
      typeof r.eventProperties == "function" && ot(t, r.eventProperties.call(o[r.pluginName], e));
    }), t;
  },
  modifyOption: function(e, o, t) {
    var r;
    return vt.forEach(function(n) {
      e[n.pluginName] && n.optionListeners && typeof n.optionListeners[o] == "function" && (r = n.optionListeners[o].call(e[n.pluginName], t));
    }), r;
  }
};
function zn(e) {
  var o = e.sortable, t = e.rootEl, r = e.name, n = e.targetEl, f = e.cloneEl, v = e.toEl, l = e.fromEl, m = e.oldIndex, E = e.newIndex, A = e.oldDraggableIndex, w = e.newDraggableIndex, P = e.originalEvent, b = e.putSortable, d = e.extraEventProperties;
  if (o = o || t && t[Me], !!o) {
    var s, p = o.options, a = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !rt && !Ft ? s = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (s = document.createEvent("Event"), s.initEvent(r, !0, !0)), s.to = v || t, s.from = l || t, s.item = n || t, s.clone = f, s.oldIndex = m, s.newIndex = E, s.oldDraggableIndex = A, s.newDraggableIndex = w, s.originalEvent = P, s.pullMode = b ? b.lastPutMode : void 0;
    var i = Ye(Ye({}, d), Rt.getEventProperties(r, o));
    for (var c in i)
      s[c] = i[c];
    t && t.dispatchEvent(s), p[a] && p[a].call(o, s);
  }
}
var An = ["evt"], De = function(e, o) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.evt, n = fn(t, An);
  Rt.pluginEvent.bind(X)(e, o, Ye({
    dragEl: R,
    parentEl: ye,
    ghostEl: K,
    rootEl: fe,
    nextEl: ft,
    lastDownEl: Wt,
    cloneEl: he,
    cloneHidden: st,
    dragStarted: Ct,
    putSortable: Ce,
    activeSortable: X.active,
    originalEvent: r,
    oldIndex: wt,
    oldDraggableIndex: Nt,
    newIndex: ke,
    newDraggableIndex: at,
    hideGhostForTarget: Ir,
    unhideGhostForTarget: Tr,
    cloneNowHidden: function() {
      st = !0;
    },
    cloneNowShown: function() {
      st = !1;
    },
    dispatchSortableEvent: function(f) {
      Ie({
        sortable: o,
        name: f,
        originalEvent: r
      });
    }
  }, n));
};
function Ie(e) {
  zn(Ye({
    putSortable: Ce,
    cloneEl: he,
    targetEl: R,
    rootEl: fe,
    oldIndex: wt,
    oldDraggableIndex: Nt,
    newIndex: ke,
    newDraggableIndex: at
  }, e));
}
var R, ye, K, fe, ft, Wt, he, st, wt, ke, Nt, at, Bt, Ce, bt = !1, eo = !1, to = [], ut, Ze, ho, vo, Go, Qo, Ct, yt, kt, Mt = !1, Ht = !1, Xt, Se, yo = [], Po = !1, oo = [], so = typeof document < "u", Vt = yr, er = Ft || rt ? "cssFloat" : "float", Pn = so && !br && !yr && "draggable" in document.createElement("div"), _r = function() {
  if (so) {
    if (rt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Cr = function(e, o) {
  var t = W(e), r = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), n = At(e, 0, o), f = At(e, 1, o), v = n && W(n), l = f && W(f), m = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + ze(n).width, E = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ze(f).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (n && v.float && v.float !== "none") {
    var A = v.float === "left" ? "left" : "right";
    return f && (l.clear === "both" || l.clear === A) ? "vertical" : "horizontal";
  }
  return n && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || m >= r && t[er] === "none" || f && t[er] === "none" && m + E > r) ? "vertical" : "horizontal";
}, En = function(e, o, t) {
  var r = t ? e.left : e.top, n = t ? e.right : e.bottom, f = t ? e.width : e.height, v = t ? o.left : o.top, l = t ? o.right : o.bottom, m = t ? o.width : o.height;
  return r === v || n === l || r + f / 2 === v + m / 2;
}, _n = function(e, o) {
  var t;
  return to.some(function(r) {
    var n = r[Me].options.emptyInsertThreshold;
    if (!(!n || No(r))) {
      var f = ze(r), v = e >= f.left - n && e <= f.right + n, l = o >= f.top - n && o <= f.bottom + n;
      if (v && l)
        return t = r;
    }
  }), t;
}, Sr = function(e) {
  function o(n, f) {
    return function(v, l, m, E) {
      var A = v.options.group.name && l.options.group.name && v.options.group.name === l.options.group.name;
      if (n == null && (f || A))
        return !0;
      if (n == null || n === !1)
        return !1;
      if (f && n === "clone")
        return n;
      if (typeof n == "function")
        return o(n(v, l, m, E), f)(v, l, m, E);
      var w = (f ? v : l).options.group.name;
      return n === !0 || typeof n == "string" && n === w || n.join && n.indexOf(w) > -1;
    };
  }
  var t = {}, r = e.group;
  (!r || jt(r) != "object") && (r = {
    name: r
  }), t.name = r.name, t.checkPull = o(r.pull, !0), t.checkPut = o(r.put), t.revertClone = r.revertClone, e.group = t;
}, Ir = function() {
  !_r && K && W(K, "display", "none");
}, Tr = function() {
  !_r && K && W(K, "display", "");
};
so && !br && document.addEventListener("click", function(e) {
  if (eo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), eo = !1, !1;
}, !0);
var pt = function(e) {
  if (R) {
    e = e.touches ? e.touches[0] : e;
    var o = _n(e.clientX, e.clientY);
    if (o) {
      var t = {};
      for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
      t.target = t.rootEl = o, t.preventDefault = void 0, t.stopPropagation = void 0, o[Me]._onDragOver(t);
    }
  }
}, Cn = function(e) {
  R && R.parentNode[Me]._isOutsideThisEl(e.target);
};
function X(e, o) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = o = ot({}, o), e[Me] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Cr(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, v) {
      f.setData("Text", v.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: X.supportPointer !== !1 && "PointerEvent" in window && !Tt,
    emptyInsertThreshold: 5
  };
  Rt.initializePlugins(this, e, t);
  for (var r in t)
    !(r in o) && (o[r] = t[r]);
  Sr(o);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = o.forceFallback ? !1 : Pn, this.nativeDraggable && (this.options.touchStartThreshold = 1), o.supportPointer ? ae(e, "pointerdown", this._onTapStart) : (ae(e, "mousedown", this._onTapStart), ae(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ae(e, "dragover", this), ae(e, "dragenter", this)), to.push(this.el), o.store && o.store.get && this.sort(o.store.get(this) || []), ot(this, bn());
}
X.prototype = /** @lends Sortable.prototype */
{
  constructor: X,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (yt = null);
  },
  _getDirection: function(e, o) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, o, R) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var o = this, t = this.el, r = this.options, n = r.preventOnFilter, f = e.type, v = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (v || e).target, m = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, E = r.filter;
      if (On(t), !R && !(/mousedown|pointerdown/.test(f) && e.button !== 0 || r.disabled) && !m.isContentEditable && !(!this.nativeDraggable && Tt && l && l.tagName.toUpperCase() === "SELECT") && (l = Ue(l, r.draggable, t, !1), !(l && l.animated) && Wt !== l)) {
        if (wt = Le(l), Nt = Le(l, r.draggable), typeof E == "function") {
          if (E.call(this, e, l, this)) {
            Ie({
              sortable: o,
              rootEl: m,
              name: "filter",
              targetEl: l,
              toEl: t,
              fromEl: t
            }), De("filter", o, {
              evt: e
            }), n && e.cancelable && e.preventDefault();
            return;
          }
        } else if (E && (E = E.split(",").some(function(A) {
          if (A = Ue(m, A.trim(), t, !1), A)
            return Ie({
              sortable: o,
              rootEl: A,
              name: "filter",
              targetEl: l,
              fromEl: t,
              toEl: t
            }), De("filter", o, {
              evt: e
            }), !0;
        }), E)) {
          n && e.cancelable && e.preventDefault();
          return;
        }
        r.handle && !Ue(m, r.handle, t, !1) || this._prepareDragStart(e, v, l);
      }
    }
  },
  _prepareDragStart: function(e, o, t) {
    var r = this, n = r.el, f = r.options, v = n.ownerDocument, l;
    if (t && !R && t.parentNode === n) {
      var m = ze(t);
      if (fe = n, R = t, ye = R.parentNode, ft = R.nextSibling, Wt = t, Bt = f.group, X.dragged = R, ut = {
        target: R,
        clientX: (o || e).clientX,
        clientY: (o || e).clientY
      }, Go = ut.clientX - m.left, Qo = ut.clientY - m.top, this._lastX = (o || e).clientX, this._lastY = (o || e).clientY, R.style["will-change"] = "all", l = function() {
        if (De("delayEnded", r, {
          evt: e
        }), X.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !Yo && r.nativeDraggable && (R.draggable = !0), r._triggerDragStart(e, o), Ie({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), Ne(R, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(E) {
        wr(R, E.trim(), bo);
      }), ae(v, "dragover", pt), ae(v, "mousemove", pt), ae(v, "touchmove", pt), ae(v, "mouseup", r._onDrop), ae(v, "touchend", r._onDrop), ae(v, "touchcancel", r._onDrop), Yo && this.nativeDraggable && (this.options.touchStartThreshold = 4, R.draggable = !0), De("delayStart", this, {
        evt: e
      }), f.delay && (!f.delayOnTouchOnly || o) && (!this.nativeDraggable || !(Ft || rt))) {
        if (X.eventCanceled) {
          this._onDrop();
          return;
        }
        ae(v, "mouseup", r._disableDelayedDrag), ae(v, "touchend", r._disableDelayedDrag), ae(v, "touchcancel", r._disableDelayedDrag), ae(v, "mousemove", r._delayedDragTouchMoveHandler), ae(v, "touchmove", r._delayedDragTouchMoveHandler), f.supportPointer && ae(v, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, f.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var o = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    R && bo(R), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    oe(e, "mouseup", this._disableDelayedDrag), oe(e, "touchend", this._disableDelayedDrag), oe(e, "touchcancel", this._disableDelayedDrag), oe(e, "mousemove", this._delayedDragTouchMoveHandler), oe(e, "touchmove", this._delayedDragTouchMoveHandler), oe(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, o) {
    o = o || e.pointerType == "touch" && e, !this.nativeDraggable || o ? this.options.supportPointer ? ae(document, "pointermove", this._onTouchMove) : o ? ae(document, "touchmove", this._onTouchMove) : ae(document, "mousemove", this._onTouchMove) : (ae(R, "dragend", this), ae(fe, "dragstart", this._onDragStart));
    try {
      document.selection ? Yt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, o) {
    if (bt = !1, fe && R) {
      De("dragStarted", this, {
        evt: o
      }), this.nativeDraggable && ae(document, "dragover", Cn);
      var t = this.options;
      !e && Ne(R, t.dragClass, !1), Ne(R, t.ghostClass, !0), X.active = this, e && this._appendGhost(), Ie({
        sortable: this,
        name: "start",
        originalEvent: o
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ze) {
      this._lastX = Ze.clientX, this._lastY = Ze.clientY, Ir();
      for (var e = document.elementFromPoint(Ze.clientX, Ze.clientY), o = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Ze.clientX, Ze.clientY), e !== o); )
        o = e;
      if (R.parentNode[Me]._isOutsideThisEl(e), o)
        do {
          if (o[Me]) {
            var t = void 0;
            if (t = o[Me]._onDragOver({
              clientX: Ze.clientX,
              clientY: Ze.clientY,
              target: e,
              rootEl: o
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = o;
        } while (o = o.parentNode);
      Tr();
    }
  },
  _onTouchMove: function(e) {
    if (ut) {
      var o = this.options, t = o.fallbackTolerance, r = o.fallbackOffset, n = e.touches ? e.touches[0] : e, f = K && zt(K, !0), v = K && f && f.a, l = K && f && f.d, m = Vt && Se && qo(Se), E = (n.clientX - ut.clientX + r.x) / (v || 1) + (m ? m[0] - yo[0] : 0) / (v || 1), A = (n.clientY - ut.clientY + r.y) / (l || 1) + (m ? m[1] - yo[1] : 0) / (l || 1);
      if (!X.active && !bt) {
        if (t && Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (K) {
        f ? (f.e += E - (ho || 0), f.f += A - (vo || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: E,
          f: A
        };
        var w = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        W(K, "webkitTransform", w), W(K, "mozTransform", w), W(K, "msTransform", w), W(K, "transform", w), ho = E, vo = A, Ze = n;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!K) {
      var e = this.options.fallbackOnBody ? document.body : fe, o = ze(R, !0, Vt, !0, e), t = this.options;
      if (Vt) {
        for (Se = e; W(Se, "position") === "static" && W(Se, "transform") === "none" && Se !== document; )
          Se = Se.parentNode;
        Se !== document.body && Se !== document.documentElement ? (Se === document && (Se = Xe()), o.top += Se.scrollTop, o.left += Se.scrollLeft) : Se = Xe(), yo = qo(Se);
      }
      K = R.cloneNode(!0), Ne(K, t.ghostClass, !1), Ne(K, t.fallbackClass, !0), Ne(K, t.dragClass, !0), W(K, "transition", ""), W(K, "transform", ""), W(K, "box-sizing", "border-box"), W(K, "margin", 0), W(K, "top", o.top), W(K, "left", o.left), W(K, "width", o.width), W(K, "height", o.height), W(K, "opacity", "0.8"), W(K, "position", Vt ? "absolute" : "fixed"), W(K, "zIndex", "100000"), W(K, "pointerEvents", "none"), X.ghost = K, e.appendChild(K), W(K, "transform-origin", Go / parseInt(K.style.width) * 100 + "% " + Qo / parseInt(K.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, o) {
    var t = this, r = e.dataTransfer, n = t.options;
    if (De("dragStart", this, {
      evt: e
    }), X.eventCanceled) {
      this._onDrop();
      return;
    }
    De("setupClone", this), X.eventCanceled || (he = Pr(R), he.removeAttribute("id"), he.draggable = !1, he.style["will-change"] = "", this._hideClone(), Ne(he, this.options.chosenClass, !1), X.clone = he), t.cloneId = Yt(function() {
      De("clone", t), !X.eventCanceled && (t.options.removeCloneOnHide || fe.insertBefore(he, R), t._hideClone(), Ie({
        sortable: t,
        name: "clone"
      }));
    }), !o && Ne(R, n.dragClass, !0), o ? (eo = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (oe(document, "mouseup", t._onDrop), oe(document, "touchend", t._onDrop), oe(document, "touchcancel", t._onDrop), r && (r.effectAllowed = "move", n.setData && n.setData.call(t, r, R)), ae(document, "drop", t), W(R, "transform", "translateZ(0)")), bt = !0, t._dragStartId = Yt(t._dragStarted.bind(t, o, e)), ae(document, "selectstart", t), Ct = !0, Tt && W(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var o = this.el, t = e.target, r, n, f, v = this.options, l = v.group, m = X.active, E = Bt === l, A = v.sort, w = Ce || m, P, b = this, d = !1;
    if (Po)
      return;
    function s(U, x) {
      De(U, b, Ye({
        evt: e,
        isOwner: E,
        axis: P ? "vertical" : "horizontal",
        revert: f,
        dragRect: r,
        targetRect: n,
        canSort: A,
        fromSortable: w,
        target: t,
        completed: a,
        onMove: function(q, V) {
          return Zt(fe, o, R, r, q, ze(q), e, V);
        },
        changed: i
      }, x));
    }
    function p() {
      s("dragOverAnimationCapture"), b.captureAnimationState(), b !== w && w.captureAnimationState();
    }
    function a(U) {
      return s("dragOverCompleted", {
        insertion: U
      }), U && (E ? m._hideClone() : m._showClone(b), b !== w && (Ne(R, Ce ? Ce.options.ghostClass : m.options.ghostClass, !1), Ne(R, v.ghostClass, !0)), Ce !== b && b !== X.active ? Ce = b : b === X.active && Ce && (Ce = null), w === b && (b._ignoreWhileAnimating = t), b.animateAll(function() {
        s("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== w && (w.animateAll(), w._ignoreWhileAnimating = null)), (t === R && !R.animated || t === o && !t.animated) && (yt = null), !v.dragoverBubble && !e.rootEl && t !== document && (R.parentNode[Me]._isOutsideThisEl(e.target), !U && pt(e)), !v.dragoverBubble && e.stopPropagation && e.stopPropagation(), d = !0;
    }
    function i() {
      ke = Le(R), at = Le(R, v.draggable), Ie({
        sortable: b,
        name: "change",
        toEl: o,
        newIndex: ke,
        newDraggableIndex: at,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = Ue(t, v.draggable, o, !0), s("dragOver"), X.eventCanceled)
      return d;
    if (R.contains(e.target) || t.animated && t.animatingX && t.animatingY || b._ignoreWhileAnimating === t)
      return a(!1);
    if (eo = !1, m && !v.disabled && (E ? A || (f = ye !== fe) : Ce === this || (this.lastPutMode = Bt.checkPull(this, m, R, e)) && l.checkPut(this, m, R, e))) {
      if (P = this._getDirection(e, t) === "vertical", r = ze(R), s("dragOverValid"), X.eventCanceled)
        return d;
      if (f)
        return ye = fe, p(), this._hideClone(), s("revert"), X.eventCanceled || (ft ? fe.insertBefore(R, ft) : fe.appendChild(R)), a(!0);
      var c = No(o, v.draggable);
      if (!c || Dn(e, P, this) && !c.animated) {
        if (c === R)
          return a(!1);
        if (c && o === e.target && (t = c), t && (n = ze(t)), Zt(fe, o, R, r, t, n, e, !!t) !== !1)
          return p(), c && c.nextSibling ? o.insertBefore(R, c.nextSibling) : o.appendChild(R), ye = o, i(), a(!0);
      } else if (c && Tn(e, P, this)) {
        var u = At(o, 0, v, !0);
        if (u === R)
          return a(!1);
        if (t = u, n = ze(t), Zt(fe, o, R, r, t, n, e, !1) !== !1)
          return p(), o.insertBefore(R, u), ye = o, i(), a(!0);
      } else if (t.parentNode === o) {
        n = ze(t);
        var y = 0, z, C = R.parentNode !== o, h = !En(R.animated && R.toRect || r, t.animated && t.toRect || n, P), $ = P ? "top" : "left", _ = Jo(t, "top", "top") || Jo(R, "top", "top"), S = _ ? _.scrollTop : void 0;
        yt !== t && (z = n[$], Mt = !1, Ht = !h && v.invertSwap || C), y = Nn(e, t, n, P, h ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, Ht, yt === t);
        var T;
        if (y !== 0) {
          var M = Le(R);
          do
            M -= y, T = ye.children[M];
          while (T && (W(T, "display") === "none" || T === K));
        }
        if (y === 0 || T === t)
          return a(!1);
        yt = t, kt = y;
        var L = t.nextElementSibling, k = !1;
        k = y === 1;
        var F = Zt(fe, o, R, r, t, n, e, k);
        if (F !== !1)
          return (F === 1 || F === -1) && (k = F === 1), Po = !0, setTimeout(In, 30), p(), k && !L ? o.appendChild(R) : t.parentNode.insertBefore(R, k ? L : t), _ && Ar(_, 0, S - _.scrollTop), ye = R.parentNode, z !== void 0 && !Ht && (Xt = Math.abs(z - ze(t)[$])), i(), a(!0);
      }
      if (o.contains(R))
        return a(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    oe(document, "mousemove", this._onTouchMove), oe(document, "touchmove", this._onTouchMove), oe(document, "pointermove", this._onTouchMove), oe(document, "dragover", pt), oe(document, "mousemove", pt), oe(document, "touchmove", pt);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    oe(e, "mouseup", this._onDrop), oe(e, "touchend", this._onDrop), oe(e, "pointerup", this._onDrop), oe(e, "touchcancel", this._onDrop), oe(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var o = this.el, t = this.options;
    if (ke = Le(R), at = Le(R, t.draggable), De("drop", this, {
      evt: e
    }), ye = R && R.parentNode, ke = Le(R), at = Le(R, t.draggable), X.eventCanceled) {
      this._nulling();
      return;
    }
    bt = !1, Ht = !1, Mt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Eo(this.cloneId), Eo(this._dragStartId), this.nativeDraggable && (oe(document, "drop", this), oe(o, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Tt && W(document.body, "user-select", ""), W(R, "transform", ""), e && (Ct && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), K && K.parentNode && K.parentNode.removeChild(K), (fe === ye || Ce && Ce.lastPutMode !== "clone") && he && he.parentNode && he.parentNode.removeChild(he), R && (this.nativeDraggable && oe(R, "dragend", this), bo(R), R.style["will-change"] = "", Ct && !bt && Ne(R, Ce ? Ce.options.ghostClass : this.options.ghostClass, !1), Ne(R, this.options.chosenClass, !1), Ie({
      sortable: this,
      name: "unchoose",
      toEl: ye,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), fe !== ye ? (ke >= 0 && (Ie({
      rootEl: ye,
      name: "add",
      toEl: ye,
      fromEl: fe,
      originalEvent: e
    }), Ie({
      sortable: this,
      name: "remove",
      toEl: ye,
      originalEvent: e
    }), Ie({
      rootEl: ye,
      name: "sort",
      toEl: ye,
      fromEl: fe,
      originalEvent: e
    }), Ie({
      sortable: this,
      name: "sort",
      toEl: ye,
      originalEvent: e
    })), Ce && Ce.save()) : ke !== wt && ke >= 0 && (Ie({
      sortable: this,
      name: "update",
      toEl: ye,
      originalEvent: e
    }), Ie({
      sortable: this,
      name: "sort",
      toEl: ye,
      originalEvent: e
    })), X.active && ((ke == null || ke === -1) && (ke = wt, at = Nt), Ie({
      sortable: this,
      name: "end",
      toEl: ye,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    De("nulling", this), fe = R = ye = K = ft = he = Wt = st = ut = Ze = Ct = ke = at = wt = Nt = yt = kt = Ce = Bt = X.dragged = X.ghost = X.clone = X.active = null, oo.forEach(function(e) {
      e.checked = !0;
    }), oo.length = ho = vo = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        R && (this._onDragOver(e), Sn(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], o, t = this.el.children, r = 0, n = t.length, f = this.options; r < n; r++)
      o = t[r], Ue(o, f.draggable, this.el, !1) && e.push(o.getAttribute(f.dataIdAttr) || Mn(o));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, o) {
    var t = {}, r = this.el;
    this.toArray().forEach(function(n, f) {
      var v = r.children[f];
      Ue(v, this.options.draggable, r, !1) && (t[n] = v);
    }, this), o && this.captureAnimationState(), e.forEach(function(n) {
      t[n] && (r.removeChild(t[n]), r.appendChild(t[n]));
    }), o && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, o) {
    return Ue(e, o || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, o) {
    var t = this.options;
    if (o === void 0)
      return t[e];
    var r = Rt.modifyOption(this, e, o);
    typeof r < "u" ? t[e] = r : t[e] = o, e === "group" && Sr(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    De("destroy", this);
    var e = this.el;
    e[Me] = null, oe(e, "mousedown", this._onTapStart), oe(e, "touchstart", this._onTapStart), oe(e, "pointerdown", this._onTapStart), this.nativeDraggable && (oe(e, "dragover", this), oe(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(o) {
      o.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), to.splice(to.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!st) {
      if (De("hideClone", this), X.eventCanceled)
        return;
      W(he, "display", "none"), this.options.removeCloneOnHide && he.parentNode && he.parentNode.removeChild(he), st = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (st) {
      if (De("showClone", this), X.eventCanceled)
        return;
      R.parentNode == fe && !this.options.group.revertClone ? fe.insertBefore(he, R) : ft ? fe.insertBefore(he, ft) : fe.appendChild(he), this.options.group.revertClone && this.animate(R, he), W(he, "display", ""), st = !1;
    }
  }
};
function Sn(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Zt(e, o, t, r, n, f, v, l) {
  var m, E = e[Me], A = E.options.onMove, w;
  return window.CustomEvent && !rt && !Ft ? m = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (m = document.createEvent("Event"), m.initEvent("move", !0, !0)), m.to = o, m.from = e, m.dragged = t, m.draggedRect = r, m.related = n || o, m.relatedRect = f || ze(o), m.willInsertAfter = l, m.originalEvent = v, e.dispatchEvent(m), A && (w = A.call(E, m, v)), w;
}
function bo(e) {
  e.draggable = !1;
}
function In() {
  Po = !1;
}
function Tn(e, o, t) {
  var r = ze(At(t.el, 0, t.options, !0)), n = Er(t.el, t.options, K), f = 10;
  return o ? e.clientX < n.left - f || e.clientY < r.top && e.clientX < r.right : e.clientY < n.top - f || e.clientY < r.bottom && e.clientX < r.left;
}
function Dn(e, o, t) {
  var r = ze(No(t.el, t.options.draggable)), n = Er(t.el, t.options, K), f = 10;
  return o ? e.clientX > n.right + f || e.clientY > r.bottom && e.clientX > r.left : e.clientY > n.bottom + f || e.clientX > r.right && e.clientY > r.top;
}
function Nn(e, o, t, r, n, f, v, l) {
  var m = r ? e.clientY : e.clientX, E = r ? t.height : t.width, A = r ? t.top : t.left, w = r ? t.bottom : t.right, P = !1;
  if (!v) {
    if (l && Xt < E * n) {
      if (!Mt && (kt === 1 ? m > A + E * f / 2 : m < w - E * f / 2) && (Mt = !0), Mt)
        P = !0;
      else if (kt === 1 ? m < A + Xt : m > w - Xt)
        return -kt;
    } else if (m > A + E * (1 - n) / 2 && m < w - E * (1 - n) / 2)
      return kn(o);
  }
  return P = P || v, P && (m < A + E * f / 2 || m > w - E * f / 2) ? m > A + E / 2 ? 1 : -1 : 0;
}
function kn(e) {
  return Le(R) < Le(e) ? 1 : -1;
}
function Mn(e) {
  for (var o = e.tagName + e.className + e.src + e.href + e.textContent, t = o.length, r = 0; t--; )
    r += o.charCodeAt(t);
  return r.toString(36);
}
function On(e) {
  oo.length = 0;
  for (var o = e.getElementsByTagName("input"), t = o.length; t--; ) {
    var r = o[t];
    r.checked && oo.push(r);
  }
}
function Yt(e) {
  return setTimeout(e, 0);
}
function Eo(e) {
  return clearTimeout(e);
}
so && ae(document, "touchmove", function(e) {
  (X.active || bt) && e.cancelable && e.preventDefault();
});
X.utils = {
  on: ae,
  off: oe,
  css: W,
  find: wr,
  is: function(e, o) {
    return !!Ue(e, o, e, !1);
  },
  extend: vn,
  throttle: zr,
  closest: Ue,
  toggleClass: Ne,
  clone: Pr,
  index: Le,
  nextTick: Yt,
  cancelNextTick: Eo,
  detectDirection: Cr,
  getChild: At
};
X.get = function(e) {
  return e[Me];
};
X.mount = function() {
  for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++)
    o[t] = arguments[t];
  o[0].constructor === Array && (o = o[0]), o.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (X.utils = Ye(Ye({}, X.utils), r.utils)), Rt.mount(r);
  });
};
X.create = function(e, o) {
  return new X(e, o);
};
X.version = mn;
var $e = [], St, _o, Co = !1, $o, wo, ro, It;
function Fn() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var o in this)
      o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  }
  return e.prototype = {
    dragStarted: function(o) {
      var t = o.originalEvent;
      this.sortable.nativeDraggable ? ae(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ae(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? ae(document, "touchmove", this._handleFallbackAutoScroll) : ae(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(o) {
      var t = o.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? oe(document, "dragover", this._handleAutoScroll) : (oe(document, "pointermove", this._handleFallbackAutoScroll), oe(document, "touchmove", this._handleFallbackAutoScroll), oe(document, "mousemove", this._handleFallbackAutoScroll)), tr(), Kt(), yn();
    },
    nulling: function() {
      ro = _o = St = Co = It = $o = wo = null, $e.length = 0;
    },
    _handleFallbackAutoScroll: function(o) {
      this._handleAutoScroll(o, !0);
    },
    _handleAutoScroll: function(o, t) {
      var r = this, n = (o.touches ? o.touches[0] : o).clientX, f = (o.touches ? o.touches[0] : o).clientY, v = document.elementFromPoint(n, f);
      if (ro = o, t || this.options.forceAutoScrollFallback || Ft || rt || Tt) {
        zo(o, this.options, v, t);
        var l = it(v, !0);
        Co && (!It || n !== $o || f !== wo) && (It && tr(), It = setInterval(function() {
          var m = it(document.elementFromPoint(n, f), !0);
          m !== l && (l = m, Kt()), zo(o, r.options, m, t);
        }, 10), $o = n, wo = f);
      } else {
        if (!this.options.bubbleScroll || it(v, !0) === Xe()) {
          Kt();
          return;
        }
        zo(o, this.options, it(v, !1), !1);
      }
    }
  }, ot(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Kt() {
  $e.forEach(function(e) {
    clearInterval(e.pid);
  }), $e = [];
}
function tr() {
  clearInterval(It);
}
var zo = zr(function(e, o, t, r) {
  if (o.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, f = (e.touches ? e.touches[0] : e).clientY, v = o.scrollSensitivity, l = o.scrollSpeed, m = Xe(), E = !1, A;
    _o !== t && (_o = t, Kt(), St = o.scroll, A = o.scrollFn, St === !0 && (St = it(t, !0)));
    var w = 0, P = St;
    do {
      var b = P, d = ze(b), s = d.top, p = d.bottom, a = d.left, i = d.right, c = d.width, u = d.height, y = void 0, z = void 0, C = b.scrollWidth, h = b.scrollHeight, $ = W(b), _ = b.scrollLeft, S = b.scrollTop;
      b === m ? (y = c < C && ($.overflowX === "auto" || $.overflowX === "scroll" || $.overflowX === "visible"), z = u < h && ($.overflowY === "auto" || $.overflowY === "scroll" || $.overflowY === "visible")) : (y = c < C && ($.overflowX === "auto" || $.overflowX === "scroll"), z = u < h && ($.overflowY === "auto" || $.overflowY === "scroll"));
      var T = y && (Math.abs(i - n) <= v && _ + c < C) - (Math.abs(a - n) <= v && !!_), M = z && (Math.abs(p - f) <= v && S + u < h) - (Math.abs(s - f) <= v && !!S);
      if (!$e[w])
        for (var L = 0; L <= w; L++)
          $e[L] || ($e[L] = {});
      ($e[w].vx != T || $e[w].vy != M || $e[w].el !== b) && ($e[w].el = b, $e[w].vx = T, $e[w].vy = M, clearInterval($e[w].pid), (T != 0 || M != 0) && (E = !0, $e[w].pid = setInterval((function() {
        r && this.layer === 0 && X.active._onTouchMove(ro);
        var k = $e[this.layer].vy ? $e[this.layer].vy * l : 0, F = $e[this.layer].vx ? $e[this.layer].vx * l : 0;
        typeof A == "function" && A.call(X.dragged.parentNode[Me], F, k, e, ro, $e[this.layer].el) !== "continue" || Ar($e[this.layer].el, F, k);
      }).bind({
        layer: w
      }), 24))), w++;
    } while (o.bubbleScroll && P !== m && (P = it(P, !1)));
    Co = E;
  }
}, 30), Dr = function(e) {
  var o = e.originalEvent, t = e.putSortable, r = e.dragEl, n = e.activeSortable, f = e.dispatchSortableEvent, v = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (o) {
    var m = t || n;
    v();
    var E = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : o, A = document.elementFromPoint(E.clientX, E.clientY);
    l(), m && !m.el.contains(A) && (f("spill"), this.onSpill({
      dragEl: r,
      putSortable: t
    }));
  }
};
function ko() {
}
ko.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var o = e.oldDraggableIndex;
    this.startIndex = o;
  },
  onSpill: function(e) {
    var o = e.dragEl, t = e.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var r = At(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(o, r) : this.sortable.el.appendChild(o), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: Dr
};
ot(ko, {
  pluginName: "revertOnSpill"
});
function Mo() {
}
Mo.prototype = {
  onSpill: function(e) {
    var o = e.dragEl, t = e.putSortable, r = t || this.sortable;
    r.captureAnimationState(), o.parentNode && o.parentNode.removeChild(o), r.animateAll();
  },
  drop: Dr
};
ot(Mo, {
  pluginName: "removeOnSpill"
});
X.mount(new Fn());
X.mount(Mo, ko);
function Rn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Ln(e) {
  Io() && Do(e);
}
function xn(e) {
  Io() ? To(e) : qt(e);
}
let Nr = null, kr = null;
function or(e = null, o = null) {
  Nr = e, kr = o;
}
function Bn() {
  return {
    data: Nr,
    clonedData: kr
  };
}
const rr = Symbol("cloneElement");
function Hn(...e) {
  var o, t;
  const r = (o = Io()) == null ? void 0 : o.proxy;
  let n = null;
  const f = e[0];
  let [, v, l] = e;
  Array.isArray(G(v)) || (l = v, v = null);
  let m = null;
  const {
    immediate: E = !0,
    clone: A = Rn,
    customUpdate: w
  } = (t = G(l)) != null ? t : {};
  function P(h) {
    var $;
    const { from: _, oldIndex: S, item: T } = h;
    n = Array.from(_.childNodes);
    const M = G(($ = G(v)) == null ? void 0 : $[S]), L = A(M);
    or(M, L), T[rr] = L;
  }
  function b(h) {
    const $ = h.item[rr];
    if (!on($)) {
      if (fo(h.item), po(v)) {
        const _ = [...G(v)];
        v.value = Uo(_, h.newDraggableIndex, $);
        return;
      }
      Uo(G(v), h.newDraggableIndex, $);
    }
  }
  function d(h) {
    const { from: $, item: _, oldIndex: S, oldDraggableIndex: T, pullMode: M, clone: L } = h;
    if (jo($, _, S), M === "clone") {
      fo(L);
      return;
    }
    if (po(v)) {
      const k = [...G(v)];
      v.value = Zo(k, T);
      return;
    }
    Zo(G(v), T);
  }
  function s(h) {
    if (w) {
      w(h);
      return;
    }
    const { from: $, item: _, oldIndex: S, oldDraggableIndex: T, newDraggableIndex: M } = h;
    if (fo(_), jo($, _, S), po(v)) {
      const L = [...G(v)];
      v.value = Vo(
        L,
        T,
        M
      );
      return;
    }
    Vo(G(v), T, M);
  }
  function p(h) {
    const { newIndex: $, oldIndex: _, from: S, to: T } = h;
    let M = null;
    const L = $ === _ && S === T;
    try {
      if (L) {
        let k = null;
        n == null || n.some((F, U) => {
          if (k && (n == null ? void 0 : n.length) !== T.childNodes.length)
            return S.insertBefore(k, F.nextSibling), !0;
          const x = T.childNodes[U];
          k = T == null ? void 0 : T.replaceChild(F, x);
        });
      }
    } catch (k) {
      M = k;
    } finally {
      n = null;
    }
    qt(() => {
      if (or(), M)
        throw M;
    });
  }
  const a = {
    onUpdate: s,
    onStart: P,
    onAdd: b,
    onRemove: d,
    onEnd: p
  };
  function i(h) {
    const $ = G(f);
    return h || (h = rn($) ? nn($, r == null ? void 0 : r.$el) : $), h && !ln(h) && (h = h.$el), h || void 0, h;
  }
  function c() {
    var h;
    const $ = (h = G(l)) != null ? h : {}, { immediate: _, clone: S } = $, T = vr($, ["immediate", "clone"]);
    return Wo(T, (M, L) => {
      dn(M) && (T[M] = (k, ...F) => {
        const U = Bn();
        return cn(k, U), L(k, ...F);
      });
    }), sn(
      v === null ? {} : a,
      T
    );
  }
  const u = (h) => {
    h = i(h), m && y.destroy(), m = new X(h, c());
  };
  je(
    () => l,
    () => {
      m && Wo(c(), (h, $) => {
        m == null || m.option(h, $);
      });
    },
    { deep: !0 }
  );
  const y = {
    option: (h, $) => m == null ? void 0 : m.option(h, $),
    destroy: () => {
      m == null || m.destroy(), m = null;
    },
    save: () => m == null ? void 0 : m.save(),
    toArray: () => m == null ? void 0 : m.toArray(),
    closest: (...h) => m == null ? void 0 : m.closest(...h)
  }, z = () => y == null ? void 0 : y.option("disabled", !0), C = () => y == null ? void 0 : y.option("disabled", !1);
  return xn(() => {
    E && u();
  }), Ln(y.destroy), $t({ start: u, pause: z, resume: C }, y);
}
const So = [
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
  "change"
], Vn = [
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
  ...So.map((e) => `on${e.replace(/^\S/, (o) => o.toUpperCase())}`)
], Zn = _e({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Vn,
  emits: ["update:modelValue", ...So],
  setup(e, { slots: o, emit: t, expose: r, attrs: n }) {
    const f = So.reduce((A, w) => {
      const P = `on${w.replace(/^\S/, (b) => b.toUpperCase())}`;
      return A[P] = (...b) => t(w, ...b), A;
    }, {}), v = de(() => {
      const A = pr(e), { modelValue: w } = A, P = vr(A, ["modelValue"]), b = Object.entries(P).reduce((d, [s, p]) => {
        const a = G(p);
        return a !== void 0 && (d[s] = a), d;
      }, {});
      return $t($t({}, f), tn($t($t({}, n), b)));
    }), l = de({
      get: () => e.modelValue,
      set: (A) => t("update:modelValue", A)
    }), m = re(), E = ao(
      Hn(e.target || m, l, v)
    );
    return r(E), () => {
      var A;
      return Yr(e.tag || "div", { ref: m }, (A = o == null ? void 0 : o.default) == null ? void 0 : A.call(o, E));
    };
  }
}), Un = { class: "zero-code-data-display" }, jn = { class: "zero-code-data-tabs" }, Wn = ["onClick"], Xn = { class: "zero-code-data-content" }, Yn = {
  key: 0,
  class: "zero-code-data-section"
}, Kn = {
  key: 0,
  class: "zero-code-rendered-content"
}, Jn = { class: "zero-code-add-part-button-container" }, qn = { class: "zero-code-component-header" }, Gn = { class: "zero-code-header-actions" }, Qn = ["onClick"], ea = ["onClick"], ta = ["innerHTML"], oa = { class: "zero-code-add-part-button-container" }, ra = ["onClick"], na = {
  key: 1,
  class: "zero-code-no-data"
}, aa = { class: "zero-code-empty-state" }, sa = { class: "zero-code-add-part-button-container" }, ia = {
  key: 1,
  class: "zero-code-data-section"
}, la = { class: "zero-code-data-display-section" }, da = { class: "zero-code-parts-sub-content" }, ca = { class: "zero-code-parts-sub-section" }, ua = { class: "zero-code-data-display-pre" }, pa = /* @__PURE__ */ _e({
  __name: "DataDisplay",
  props: {
    modelValue: { type: String },
    pageData: { type: Array },
    parts: { type: Array },
    commonParts: { type: Array },
    individualParts: { type: Array },
    renderComponentWithNested: { type: Function },
    isTextEditing: { type: Boolean }
  },
  emits: ["update:modelValue", "add-part", "edit-part", "delete-part", "reorder-parts"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = de({
      get: () => t.pageData,
      set: (w) => {
        r("reorder-parts", w);
      }
    }), f = () => {
    }, v = () => {
    }, l = ["rendered", "page"], m = (w) => ({
      rendered: "レンダリング結果",
      source: "HTMLソース",
      page: "データ表示"
    })[w], E = de(() => A(t.pageData)), A = (w) => {
      const P = (b, d = 0) => {
        const s = "  ".repeat(d), p = "  ".repeat(d + 1);
        if (Array.isArray(b))
          return b.length === 0 ? "[]" : `[
${b.map((i) => p + P(i, d + 1)).join(`,
`)}
${s}]`;
        if (typeof b == "object" && b !== null) {
          const a = Object.entries(b);
          return a.length === 0 ? "{}" : `{
${a.map(([c, u]) => {
            let y;
            if (typeof u == "string") {
              const z = u.replace(/\\n/g, `
`).replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
              if (z.includes(`
`)) {
                const C = z.split(`
`);
                y = C.map(($, _) => _ === 0 ? `\`${$}` : _ === C.length - 1 ? `${p}${$}\`` : `${p}${$}`).join(`
`);
              } else
                y = `"${z}"`;
            } else
              y = P(u, d + 1);
            return `${p}"${c}": ${y}`;
          }).join(`,
`)}
${s}}`;
        }
        return typeof b == "string" ? `"${b.replace(/"/g, '\\"')}"` : JSON.stringify(b);
      };
      return P(w);
    };
    return (w, P) => (D(), N("div", Un, [
      g("div", jn, [
        (D(), N(ee, null, ne(l, (b) => g("button", {
          key: b,
          class: Fe(["zero-code-data-tab-button", { active: w.modelValue === b }]),
          onClick: (d) => w.$emit("update:modelValue", b)
        }, B(m(b)), 11, Wn)), 64))
      ]),
      g("div", Xn, [
        w.modelValue === "rendered" ? (D(), N("div", Yn, [
          Array.isArray(w.pageData) && w.pageData.length > 0 ? (D(), N("div", Kn, [
            g("div", Jn, [
              g("button", {
                class: "zero-code-add-part-button",
                onClick: P[0] || (P[0] = (b) => w.$emit("add-part", 0))
              }, P[3] || (P[3] = [
                g("span", { class: "zero-code-plus-icon" }, "＋", -1),
                g("span", { class: "zero-code-button-text" }, "パーツを追加", -1)
              ]))
            ]),
            gt(G(Zn), {
              modelValue: n.value,
              "onUpdate:modelValue": P[1] || (P[1] = (b) => n.value = b),
              animation: 200,
              disabled: w.isTextEditing,
              "ghost-class": "ghost",
              "chosen-class": "chosen",
              "drag-class": "drag",
              onStart: f,
              onEnd: v
            }, {
              default: fr(() => [
                (D(!0), N(ee, null, ne(w.pageData, (b, d) => (D(), N("div", {
                  key: b.id || d,
                  class: "zero-code-rendered-component zero-code-draggable-item"
                }, [
                  g("div", qn, [
                    P[4] || (P[4] = g("div", { class: "zero-code-drag-handle" }, [
                      g("span", { class: "zero-code-drag-icon" }, "⠿")
                    ], -1)),
                    g("div", Gn, [
                      g("button", {
                        class: "zero-code-edit-btn",
                        onClick: (s) => w.$emit("edit-part", d)
                      }, "編集", 8, Qn),
                      g("button", {
                        class: "zero-code-delete-btn",
                        onClick: (s) => w.$emit("delete-part", d)
                      }, "削除", 8, ea)
                    ])
                  ]),
                  g("div", {
                    class: "zero-code-component-preview",
                    innerHTML: w.renderComponentWithNested(b, d)
                  }, null, 8, ta),
                  g("div", oa, [
                    g("button", {
                      class: "zero-code-add-part-button",
                      onClick: (s) => w.$emit("add-part", d + 1)
                    }, P[5] || (P[5] = [
                      g("span", { class: "zero-code-plus-icon" }, "＋", -1),
                      g("span", { class: "zero-code-button-text" }, "パーツを追加", -1)
                    ]), 8, ra)
                  ])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "disabled"])
          ])) : (D(), N("div", na, [
            g("div", aa, [
              P[7] || (P[7] = g("p", { class: "zero-code-empty-message" }, "パーツがありません", -1)),
              g("div", sa, [
                g("button", {
                  class: "zero-code-add-part-button",
                  onClick: P[2] || (P[2] = (b) => w.$emit("add-part", 0))
                }, P[6] || (P[6] = [
                  g("span", { class: "zero-code-plus-icon" }, "＋", -1),
                  g("span", { class: "zero-code-button-text" }, "最初のパーツを追加", -1)
                ]))
              ])
            ])
          ]))
        ])) : Y("", !0),
        w.modelValue === "page" ? (D(), N("div", ia, [
          g("div", la, [
            g("div", da, [
              g("div", ca, [
                P[8] || (P[8] = g("h4", { style: { margin: "0 0 16px 0", color: "#374151", "font-size": "1.1rem" } }, "Pageデータ（リアルタイム更新）", -1)),
                g("pre", ua, B(E.value), 1)
              ])
            ])
          ])
        ])) : Y("", !0)
      ])
    ]));
  }
}), fa = { class: "zero-code-modal-header" }, ma = { class: "zero-code-data-tabs" }, ga = ["onClick"], ha = { class: "zero-code-modal-body" }, va = {
  key: 0,
  class: "zero-code-parts-section"
}, ya = {
  key: 0,
  class: "zero-code-parts-list"
}, ba = { class: "zero-code-part-section-title" }, $a = { class: "zero-code-modules-grid" }, wa = ["onClick"], za = { class: "zero-code-module-title" }, Aa = ["innerHTML"], Pa = {
  key: 1,
  class: "zero-code-empty-state"
}, Ea = {
  key: 1,
  class: "zero-code-parts-section"
}, _a = {
  key: 0,
  class: "zero-code-parts-list"
}, Ca = { class: "zero-code-part-section-title" }, Sa = { class: "zero-code-modules-grid" }, Ia = ["onClick"], Ta = { class: "zero-code-module-title" }, Da = ["innerHTML"], Na = {
  key: 1,
  class: "zero-code-empty-state"
}, nr = /* @__PURE__ */ _e({
  __name: "PartSelector",
  props: {
    parts: { type: Array },
    isNested: { type: Boolean, default: !1 }
  },
  emits: ["close", "select-part"],
  setup(e, { emit: o }) {
    const t = e, r = re("common"), n = ["common", "individual"], f = (w) => ({
      common: "共通パーツ",
      individual: "個別パーツ"
    })[w], v = de(() => t.parts.map((w) => ({
      ...w,
      module: w.module.filter((P) => {
        const b = P;
        return !b.category || b.category === "common";
      })
    })).filter((w) => w.module.length > 0)), l = de(() => t.parts.map((w) => ({
      ...w,
      module: w.module.filter((P) => P.category === "individual")
    })).filter((w) => w.module.length > 0)), m = o, E = (w, P) => {
      m("select-part", w, P);
    }, A = (w) => {
      if (!w) return "";
      try {
        let P = w;
        return P = P.replace(
          /@slot\(\$[^)]+\)@/g,
          '<div class="zero-code-slot-placeholder">ネストコンテンツ</div>'
        ), P = P.replace(/\{\$([^:]+):([^}]*)\}/g, (b, d, s) => ({
          title: "サンプルタイトル",
          text: "サンプルテキストです。",
          image: "/sample-image.jpg",
          link: "#",
          url: "https://example.com",
          alt: "サンプル画像",
          content: "サンプルコンテンツ",
          description: "サンプル説明文です。"
        })[d] || s || `[${d}]`), P = P.replace(/\(\$([^:]+):([^)]+)\)/g, (b, d, s) => s.split("|").filter((a) => a.trim())[0] || ""), P = P.replace(/\(\$([^:?]+)\?:([^)]*)\)/g, (b, d, s) => s || ""), P = P.replace(
          /z-for-wrapper="[^"]*"/g,
          ""
        ), P = P.replace(
          /z-for="[^"]*"/g,
          ""
        ), P = P.replace(
          /z-slot="[^"]*"/g,
          ""
        ), P = P.replace(/\$(\w+)/g, (b, d) => ({
          title: "タイトル",
          text: "テキスト",
          content: "コンテンツ"
        })[d] || `[${d}]`), P;
      } catch {
        return w;
      }
    };
    return (w, P) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: P[2] || (P[2] = (b) => w.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-modal-content",
        onClick: P[1] || (P[1] = Be(() => {
        }, ["stop"]))
      }, [
        g("div", fa, [
          g("h4", null, B(t.isNested ? "ネストパーツを選択" : "パーツを選択"), 1),
          g("button", {
            class: "zero-code-close-button",
            onClick: P[0] || (P[0] = (b) => w.$emit("close"))
          }, "✖️")
        ]),
        g("div", ma, [
          (D(), N(ee, null, ne(n, (b) => g("button", {
            key: b,
            class: Fe(["zero-code-data-tab-button", { active: r.value === b }]),
            onClick: (d) => r.value = b
          }, B(f(b)), 11, ga)), 64))
        ]),
        g("div", ha, [
          r.value === "common" ? (D(), N("div", va, [
            v.value.length > 0 ? (D(), N("div", ya, [
              (D(!0), N(ee, null, ne(v.value, (b, d) => (D(), N("div", {
                key: d,
                class: "zero-code-part-section"
              }, [
                g("h5", ba, B(b.type), 1),
                g("div", $a, [
                  (D(!0), N(ee, null, ne(b.module, (s, p) => (D(), N("div", {
                    key: p,
                    class: "zero-code-module-card",
                    onClick: (a) => E(b.type, s)
                  }, [
                    g("div", za, B(s.title), 1),
                    g("div", {
                      class: "zero-code-module-preview",
                      innerHTML: A(s.body)
                    }, null, 8, Aa)
                  ], 8, wa))), 128))
                ])
              ]))), 128))
            ])) : (D(), N("div", Pa, P[3] || (P[3] = [
              g("p", null, "共通パーツが登録されていません。", -1)
            ])))
          ])) : Y("", !0),
          r.value === "individual" ? (D(), N("div", Ea, [
            l.value.length > 0 ? (D(), N("div", _a, [
              (D(!0), N(ee, null, ne(l.value, (b, d) => (D(), N("div", {
                key: d,
                class: "zero-code-part-section"
              }, [
                g("h5", Ca, B(b.type), 1),
                g("div", Sa, [
                  (D(!0), N(ee, null, ne(b.module, (s, p) => (D(), N("div", {
                    key: p,
                    class: "zero-code-module-card",
                    onClick: (a) => E(b.type, s)
                  }, [
                    g("div", Ta, B(s.title), 1),
                    g("div", {
                      class: "zero-code-module-preview",
                      innerHTML: A(s.body)
                    }, null, 8, Da)
                  ], 8, Ia))), 128))
                ])
              ]))), 128))
            ])) : (D(), N("div", Na, P[4] || (P[4] = [
              g("p", null, "個別パーツが登録されていません。", -1)
            ])))
          ])) : Y("", !0)
        ])
      ])
    ]));
  }
}), ka = { class: "zero-code-array-field" }, Ma = { class: "zero-code-array-header" }, Oa = {
  key: 0,
  class: "zero-code-empty-array-message"
}, Fa = { class: "zero-code-empty-message-content" }, Ra = { class: "zero-code-empty-text" }, La = { class: "zero-code-button-text" }, xa = ["onDragstart", "onDrop"], Ba = { class: "zero-code-array-item-header" }, Ha = { class: "zero-code-array-item-controls" }, Va = ["onClick"], Za = { class: "zero-code-array-item-fields" }, Ua = ["for"], ja = {
  key: 0,
  class: "zero-code-radio-group"
}, Wa = ["id", "value", "name", "checked", "onChange"], Xa = ["for"], Ya = {
  key: 1,
  class: "zero-code-checkbox-group"
}, Ka = ["id", "checked", "onChange"], Ja = ["for"], qa = ["id", "value", "onInput"], Ga = ["value"], Qa = ["id", "value", "onChange"], es = ["value", "selected"], ts = ["id", "value", "onInput"], os = ["id", "value", "type", "onInput"], rs = {
  key: 0,
  class: "zero-code-nested-array-field"
}, ns = { class: "zero-code-nested-array-label" }, as = { class: "zero-code-nested-array-info" }, ss = { class: "zero-code-array-count" }, is = ["onClick"], ls = /* @__PURE__ */ _e({
  __name: "ArrayFieldEditor",
  props: {
    componentId: { type: String },
    arrayKey: { type: String },
    items: { type: Array },
    fields: { type: Object },
    label: { type: String },
    itemLabel: { type: String }
  },
  emits: ["add", "remove", "update", "reorder", "edit-nested"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = (b, d, s) => {
      r("update", b, d, s);
    }, f = (b, d, s) => {
      const p = b[d];
      return Array.isArray(p) && p.includes(s);
    }, v = (b, d, s, p) => {
      let i = t.items[b][d] || [];
      Array.isArray(i) || (i = []), p ? i.includes(s) || (i = [...i, s]) : i = i.filter((c) => c !== s), r("update", b, d, i);
    };
    let l = null;
    const m = (b, d) => {
      l = d, b.dataTransfer && (b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", d.toString()));
      const s = b.target;
      s.style.opacity = "0.5";
    }, E = (b) => {
      b.preventDefault(), b.dataTransfer && (b.dataTransfer.dropEffect = "move");
    }, A = (b, d) => {
      b.preventDefault(), l !== null && l !== d && r("reorder", l, d), l = null;
    }, w = (b) => {
      const d = b.target;
      d.style.opacity = "1", l = null;
    }, P = (b, d) => !Array.isArray(d) || b === "id" || ["nested_parts", "content"].includes(b) ? !1 : d.length > 0 && typeof d[0] == "object" && d[0] !== null;
    return (b, d) => (D(), N("div", ka, [
      g("div", Ma, [
        g("h5", null, B(b.label), 1),
        g("button", {
          class: "zero-code-btn zero-code-add-array-item",
          onClick: d[0] || (d[0] = (s) => b.$emit("add"))
        }, "+ 追加")
      ]),
      b.items.length === 0 ? (D(), N("div", Oa, [
        g("div", Fa, [
          g("p", Ra, B(b.label) + "はまだ追加されていません", 1),
          g("button", {
            class: "zero-code-btn zero-code-add-array-item-empty",
            onClick: d[1] || (d[1] = (s) => b.$emit("add"))
          }, [
            d[2] || (d[2] = g("span", { class: "zero-code-plus-icon" }, "＋", -1)),
            g("span", La, "最初の" + B(b.label) + "を追加", 1)
          ])
        ])
      ])) : Y("", !0),
      (D(!0), N(ee, null, ne(b.items, (s, p) => (D(), N("div", {
        key: (s == null ? void 0 : s.id) || p,
        class: "zero-code-array-item",
        draggable: "true",
        onDragstart: (a) => m(a, p),
        onDragover: E,
        onDrop: (a) => A(a, p),
        onDragend: w
      }, [
        g("div", Ba, [
          g("div", Ha, [
            d[3] || (d[3] = g("span", { class: "zero-code-drag-handle" }, "⠿", -1)),
            g("h6", null, B(b.itemLabel) + " " + B(p + 1), 1)
          ]),
          g("button", {
            class: "zero-code-btn zero-code-remove-array-item",
            onClick: (a) => b.$emit("remove", p)
          }, "削除", 8, Va)
        ]),
        g("div", Za, [
          (D(!0), N(ee, null, ne(b.fields, (a, i) => (D(), N("div", {
            key: i,
            class: "zero-code-field-group"
          }, [
            g("label", {
              for: `${b.componentId}_${b.arrayKey}_${p}_${i}`
            }, B(a.label) + ": ", 9, Ua),
            a.type === "radio" && a.options && a.options.length > 0 ? (D(), N("div", ja, [
              (D(!0), N(ee, null, ne(a.options, (c) => (D(), N("div", {
                key: c,
                class: "zero-code-radio-item"
              }, [
                g("input", {
                  id: `${b.componentId}_${b.arrayKey}_${p}_${i}_${c}`,
                  value: c,
                  type: "radio",
                  name: `${b.componentId}_${b.arrayKey}_${p}_${i}`,
                  class: "zero-code-radio-input",
                  checked: s[i] === c || c === "指定なし" && !s[i],
                  onChange: (u) => n(p, i, c === "指定なし" ? "" : c)
                }, null, 40, Wa),
                g("label", {
                  for: `${b.componentId}_${b.arrayKey}_${p}_${i}_${c}`,
                  class: "zero-code-radio-label"
                }, B(c), 9, Xa)
              ]))), 128))
            ])) : Y("", !0),
            a.type === "checkbox" && a.options && a.options.length > 0 ? (D(), N("div", Ya, [
              (D(!0), N(ee, null, ne(a.options, (c) => (D(), N("div", {
                key: c,
                class: "zero-code-checkbox-item"
              }, [
                g("input", {
                  id: `${b.componentId}_${b.arrayKey}_${p}_${i}_${c}`,
                  checked: f(s, i, c),
                  type: "checkbox",
                  class: "zero-code-checkbox-input",
                  onChange: (u) => {
                    const y = u.target;
                    v(p, i, c, y.checked);
                  }
                }, null, 40, Ka),
                g("label", {
                  for: `${b.componentId}_${b.arrayKey}_${p}_${i}_${c}`,
                  class: "zero-code-checkbox-label"
                }, B(c), 9, Ja)
              ]))), 128))
            ])) : a.type === "select" ? (D(), N("select", {
              key: 2,
              id: `${b.componentId}_${b.arrayKey}_${p}_${i}`,
              value: s[i],
              class: "zero-code-field-input zero-code-select-input",
              onInput: (c) => {
                const u = c.target;
                n(p, i, u.value);
              }
            }, [
              (D(!0), N(ee, null, ne(a.options, (c) => (D(), N("option", {
                key: c,
                value: c
              }, B(c), 9, Ga))), 128))
            ], 40, qa)) : a.type === "select-multiple" ? (D(), N("select", {
              key: 3,
              id: `${b.componentId}_${b.arrayKey}_${p}_${i}`,
              value: s[i] || a.defaultValue,
              multiple: "",
              class: "zero-code-field-input zero-code-select-multiple",
              onChange: (c) => {
                const u = c.target, y = Array.from(u.selectedOptions).map(
                  (z) => z.value
                );
                n(p, i, y);
              }
            }, [
              (D(!0), N(ee, null, ne(a.options, (c) => (D(), N("option", {
                key: c,
                value: c,
                selected: Array.isArray(s[i]) && s[i].includes(c)
              }, B(c), 9, es))), 128))
            ], 40, Qa)) : a.type === "textarea" ? (D(), N("textarea", {
              key: 4,
              id: `${b.componentId}_${b.arrayKey}_${p}_${i}`,
              value: s[i],
              class: "zero-code-field-input zero-code-field-textarea",
              onInput: (c) => {
                const u = c.target;
                n(p, i, u.value);
              }
            }, null, 40, ts)) : a.type === "text" || a.type === "number" ? (D(), N("input", {
              key: 5,
              id: `${b.componentId}_${b.arrayKey}_${p}_${i}`,
              value: s[i],
              type: a.type === "text" ? "text" : a.type,
              class: "zero-code-field-input",
              onInput: (c) => {
                const u = c.target;
                n(p, i, u.value);
              }
            }, null, 40, os)) : Y("", !0)
          ]))), 128)),
          (D(!0), N(ee, null, ne(s, (a, i) => (D(), N(ee, {
            key: `nested_${i}`
          }, [
            Array.isArray(a) && i !== "id" && P(i, a) ? (D(), N("div", rs, [
              g("h6", ns, B(i) + " (ネスト配列)", 1),
              g("div", as, [
                g("span", ss, B(a.length) + "個の要素", 1),
                g("button", {
                  class: "zero-code-btn zero-code-edit-nested-array-btn",
                  title: "ネスト配列を編集",
                  onClick: (c) => b.$emit("edit-nested", p, i)
                }, " 編集 ", 8, is)
              ])
            ])) : Y("", !0)
          ], 64))), 128))
        ])
      ], 40, xa))), 128))
    ]));
  }
}), I = {
  /**
   * デバッグログ（開発環境のみ）
   */
  debug: (e, ...o) => {
  },
  /**
   * 情報ログ（開発環境のみ）
   */
  info: (e, ...o) => {
  },
  /**
   * 警告ログ（常に出力）
   */
  warn: (e, ...o) => {
  },
  /**
   * エラーログ（常に出力）
   */
  error: (e, ...o) => {
  },
  /**
   * 成功ログ（開発環境のみ）
   */
  success: (e, ...o) => {
  },
  /**
   * プロセスログ（開発環境のみ）
   */
  process: (e, ...o) => {
  },
  /**
   * パフォーマンス測定開始
   */
  time: (e) => {
  },
  /**
   * パフォーマンス測定終了
   */
  timeEnd: (e) => {
  },
  /**
   * グループ化ログ開始
   */
  group: (e) => {
  },
  /**
   * グループ化ログ終了
   */
  groupEnd: () => {
  }
};
var ue = /* @__PURE__ */ ((e) => (e.VALIDATION = "VALIDATION", e.NETWORK = "NETWORK", e.COMPONENT = "COMPONENT", e.TEMPLATE = "TEMPLATE", e.FILE = "FILE", e.PERMISSION = "PERMISSION", e.IMAGE_LOAD_FAILED = "IMAGE_LOAD_FAILED", e.UNKNOWN = "UNKNOWN", e.NETWORK_ERROR = "NETWORK", e.VALIDATION_ERROR = "VALIDATION", e.PERMISSION_ERROR = "PERMISSION", e.COMPONENT_ERROR = "COMPONENT", e.TEMPLATE_PARSE_ERROR = "TEMPLATE", e.UNKNOWN_ERROR = "UNKNOWN", e))(ue || {});
class ds {
  constructor() {
    _t(this, "errorHistory", []);
    _t(this, "maxHistorySize", 100);
  }
  /**
   * エラーを記録・処理する
   */
  handleError(o, t, r, n, f) {
    const v = {
      type: o,
      message: t,
      details: r,
      componentId: n,
      action: f,
      timestamp: Date.now()
    };
    return this.errorHistory.unshift(v), this.errorHistory.length > this.maxHistorySize && (this.errorHistory = this.errorHistory.slice(0, this.maxHistorySize)), o === "VALIDATION" || o === "PERMISSION" ? I.warn(`[${o}] ${t}`, r) : I.error(`[${o}] ${t}`, r), v;
  }
  /**
   * コンポーネント関連エラー
   */
  componentError(o, t, r) {
    return this.handleError(
      "COMPONENT",
      o,
      r,
      t,
      "component_operation"
    );
  }
  /**
   * テンプレート関連エラー
   */
  templateError(o, t) {
    return this.handleError("TEMPLATE", o, t, void 0, "template_processing");
  }
  /**
   * バリデーションエラー
   */
  validationError(o, t) {
    return this.handleError("VALIDATION", o, t, void 0, "validation");
  }
  /**
   * ファイル関連エラー
   */
  fileError(o, t) {
    return this.handleError("FILE", o, t, void 0, "file_operation");
  }
  /**
   * ネットワークエラー
   */
  networkError(o, t) {
    return this.handleError("NETWORK", o, t, void 0, "network_request");
  }
  /**
   * 権限エラー
   */
  permissionError(o, t) {
    return this.handleError("PERMISSION", o, t, void 0, "permission_check");
  }
  /**
   * 未知のエラー
   */
  unknownError(o, t) {
    return this.handleError("UNKNOWN", o, t, void 0, "unknown");
  }
  /**
   * エラー履歴を取得
   */
  getErrorHistory() {
    return [...this.errorHistory];
  }
  /**
   * 特定の種類のエラーを取得
   */
  getErrorsByType(o) {
    return this.errorHistory.filter((t) => t.type === o);
  }
  /**
   * エラー履歴をクリア
   */
  clearHistory() {
    this.errorHistory = [], I.debug("エラー履歴をクリアしました");
  }
  /**
   * エラー統計を取得
   */
  getErrorStats() {
    const o = Object.values(ue).reduce(
      (t, r) => (t[r] = 0, t),
      {}
    );
    return this.errorHistory.forEach((t) => {
      o[t.type]++;
    }), o;
  }
}
function Ke(e, o, t, r = "UNKNOWN") {
  try {
    return e();
  } catch (n) {
    return o.handleError(r, t, n), null;
  }
}
const Je = new ds(), cs = ["content", "nested_parts"], ar = [
  "_isZForItem",
  "_parentComponentId",
  "_arrayName",
  "_arrayIndex",
  "_zForTemplate"
];
function no(e) {
  const o = (h, $) => {
    if ($.length === 0 || $[0] >= h.length) return null;
    let _ = h[$[0]];
    for (let S = 1; S < $.length; S++) {
      if (!_.nested_parts || !Array.isArray(_.nested_parts) || $[S] >= _.nested_parts.length)
        return null;
      _ = _.nested_parts[$[S]];
    }
    return _;
  }, t = (h, $) => {
    if ($.length === 1) return h;
    let _ = h[$[0]];
    for (let S = 1; S < $.length - 1; S++) {
      if (!_.nested_parts || !Array.isArray(_.nested_parts)) return [];
      _ = _.nested_parts[$[S]];
    }
    return _.nested_parts || [];
  }, r = (h) => h.split("-").map(Number), n = (h) => h.join("-"), f = (h, $, _ = []) => {
    if (I.debug(`findComponentRecursively: 検索開始 - componentId=${$}, depth=${_.length}`), !h || !Array.isArray(h))
      return I.debug(`findComponentRecursively: 無効なデータ - data=${h}, isArray=${Array.isArray(h)}`), null;
    I.debug(`findComponentRecursively: ${h.length}個のコンポーネントを検索中`);
    for (let S = 0; S < h.length; S++) {
      const T = h[S], M = [..._, S];
      if (I.debug(`findComponentRecursively: [${S}] チェック中 - id=${T.id}, type=${T.type}`), T.id === $)
        return I.success(`findComponentRecursively: 発見！ - ${$} at path=${M.join("-")}`), T;
      if (T.nested_parts && Array.isArray(T.nested_parts)) {
        I.debug(`findComponentRecursively: nested_parts検索 - ${T.id} (${T.nested_parts.length}個)`);
        const k = f(T.nested_parts, $, M);
        if (k) return k;
      }
      const L = Object.keys(T);
      for (const k of L) {
        const F = T[k];
        if (Array.isArray(F) && k !== "nested_parts") {
          I.debug(`findComponentRecursively: z-for配列検索 - ${T.id}.${k} (${F.length}個)`);
          for (let U = 0; U < F.length; U++) {
            const x = F[U];
            if (x && typeof x == "object" && x.id) {
              if (I.debug(`findComponentRecursively: z-for配列アイテム - ${x.id} in ${T.id}.${k}[${U}]`), x.id === $)
                return I.success(`findComponentRecursively: z-for配列アイテムで発見！ - ${$}`), x;
              if (x.nested_parts && Array.isArray(x.nested_parts)) {
                I.debug(`findComponentRecursively: z-for配列アイテムのネストパーツ検索 - ${x.id}.nested_parts (${x.nested_parts.length}個)`);
                const q = f(x.nested_parts, $, [...M, U]);
                if (q)
                  return I.success(`findComponentRecursively: z-for配列内のネストパーツで発見！ - ${$}`), q;
              }
            }
          }
        }
      }
    }
    return I.debug(`findComponentRecursively: 未発見 - ${$}`), null;
  }, v = (h, $) => Ke(
    () => {
      if (!Array.isArray(e))
        throw new Error("Parts配列が無効です");
      if (!h || !$)
        throw new Error("Type または ModuleName が指定されていません");
      const _ = e.find((T) => T.type === h);
      if (!_)
        throw new Error(`パーツタイプ "${h}" が見つかりません`);
      const S = _.module.find((T) => T.title === $);
      if (!S)
        throw new Error(`モジュール "${$}" が見つかりません (type: ${h})`);
      return S.body;
    },
    Je,
    `テンプレート取得エラー: ${h}/${$}`,
    ue.TEMPLATE
  ) || "", l = /* @__PURE__ */ new Set(), m = (h, $) => {
    I.debug(`extractZForTemplate開始: arrayName=${$}`);
    const _ = new RegExp(`<div[^>]*z-for="${$}"[^>]*>`), S = h.match(_);
    if (!S)
      return I.warn(`z-for="${$}" 開始タグが見つかりません`), I.debug("親テンプレート内容:", h.substring(0, 500)), "";
    const T = h.indexOf(S[0]);
    let M = 0, L = T, k = T;
    for (; k < h.length; )
      if (h.substring(k, k + 4) === "<div") {
        const U = h.indexOf(">", k);
        U !== -1 ? (M++, k = U + 1) : k++;
      } else if (h.substring(k, k + 6) === "</div>") {
        if (M--, M === 0) {
          L = k + 6;
          break;
        }
        k += 6;
      } else
        k++;
    if (M !== 0)
      return I.warn(`z-for="${$}" の対応する終了タグが見つかりません（深度: ${M}）`), "";
    const F = h.substring(T, L).trim();
    return I.debug(`z-for内テンプレート抽出成功: ${$}`, {
      extractedContent: F.substring(0, 200),
      fullContent: F,
      startIndex: T,
      endIndex: L,
      depth: 0
    }), F;
  }, E = () => "comp_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), A = (h) => {
    const $ = `${h.id}_${h.type}_${h.module_name}`;
    if (l.has($))
      return I.warn(`getFieldInfo: 無限ループを検出、処理をスキップ: ${$}`), [];
    l.add($);
    try {
      let _ = v(h.type, h.module_name);
      if (!_)
        return [];
      if (I.debug(
        `getFieldInfo: component.id=${h.id}, type=${h.type}, module=${h.module_name}`
      ), I.debug(`getFieldInfo: _isZForItem=${h._isZForItem}`), h._isZForItem) {
        const k = h._arrayName;
        if (I.debug(`getFieldInfo: z-for配列要素を検出, arrayName=${k}`), I.debug("getFieldInfo: componentプロパティ:", Object.keys(h)), k) {
          I.debug("getFieldInfo: 元のテンプレート:", _.substring(0, 300));
          const F = m(_, k);
          F ? (_ = F, I.debug("getFieldInfo: z-for内テンプレート抽出完了:", _)) : I.warn(`getFieldInfo: z-for内テンプレートの抽出に失敗: arrayName=${k}`);
        }
      } else
        I.debug("getFieldInfo: 通常のコンポーネント処理");
      const S = [], T = _.match(/\(\$([^:]+):(.*?)\)/g) || [], M = [];
      if (_.includes("z-for=")) {
        const k = /<div[^>]*z-for="([^"]+)"[^>]*>/g;
        let F;
        for (; (F = k.exec(_)) !== null; ) {
          const U = F[1], x = F.index;
          let q = 0, V = x, Z = x;
          for (; Z < _.length; ) {
            if (_.substring(Z, Z + 4) === "<div")
              q++;
            else if (_.substring(Z, Z + 6) === "</div>" && (q--, q === 0)) {
              V = Z + 6;
              break;
            }
            Z++;
          }
          if (q === 0) {
            const le = _.substring(x, V).match(/\(\$([^:]+):(.*?)\)/g);
            le && le.forEach((Re) => {
              const He = Re.match(/\(\$([^:]+):(.*?)\)/);
              if (He) {
                const Ae = He[1].replace("?", "");
                M.push(Ae);
              }
            });
          }
        }
      }
      M.length > 0 && I.debug("z-for配列内のフィールドを除外:", M);
      let L;
      return h._isZForItem ? L = T.filter((k) => {
        const F = k.match(/\(\$([^:]+):(.*?)\)/);
        if (F) {
          const U = F[1].replace("?", ""), x = M.includes(U);
          return x && I.debug(`z-for配列アイテム編集: フィールド ${U} を表示`), x;
        }
        return !1;
      }) : L = T.filter((k) => {
        const F = k.match(/\(\$([^:]+):(.*?)\)/);
        if (F) {
          const U = F[1].replace("?", ""), x = M.includes(U);
          return x && I.debug(`フィールド ${U} を z-for内フィールドとして除外`), !x;
        }
        return !0;
      }), L.forEach((k) => {
        const F = k.match(/\(\$([^:]+):(.*?)\)/);
        if (F) {
          const [, U, x] = F, q = U.includes("?"), V = U.replace("?", "");
          if (x.includes("|")) {
            let Z = x.split("|"), te = !1;
            if ((x.includes("||") || x.startsWith("|") || x.endsWith("|")) && (te = !0), Z = Z.filter((le) => le.trim() !== ""), te && Z.unshift("指定なし"), q) {
              const le = Z.length > 0 ? [Z[0]] : [], Re = {
                type: "checkbox",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: le,
                label: `${V} (チェックボックス)`
              };
              S.push(Re);
            } else {
              const le = Z[0] || "", Re = {
                type: "radio",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: le,
                label: `${V} (ラジオボタン)`
              };
              S.push(Re);
            }
          } else if (x.includes(",")) {
            const Z = x.split(",").map((te) => te.trim()).filter((te) => te !== "");
            if (q) {
              const te = Z.length > 0 ? [Z[0]] : [], le = {
                type: "select-multiple",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: te,
                label: `${V} (セレクトボックス・複数選択)`
              };
              S.push(le);
            } else {
              const te = Z[0] || "", le = {
                type: "select",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: te,
                label: `${V} (セレクトボックス)`
              };
              S.push(le);
            }
          } else {
            const Z = {
              type: "text",
              paramName: V,
              propKey: V,
              options: [],
              defaultValue: x,
              label: `${V} (テキストボックス)`
            };
            S.push(Z);
          }
        }
      }), I.debug(
        `getFieldInfo: 抽出されたフィールド数=${S.length}`,
        S.map((k) => ({ paramName: k.paramName, type: k.type }))
      ), S;
    } catch (_) {
      return I.error(`getFieldInfo: エラーが発生しました: ${$}`, _), [];
    } finally {
      l.delete($);
    }
  }, w = (h, $) => {
    try {
      const _ = v(h.type, h.module_name);
      if (!_) return !1;
      let S = _;
      if (h._isZForItem) {
        const k = h._arrayName, F = m(_, k);
        F && (S = F);
      }
      const T = new RegExp(`\\{\\$${$}:[^}]*\\}`), M = new RegExp(`\\(\\$${$}:[^)]*\\)`), L = new RegExp(`\\(\\$${$}\\?:[^)]*\\)`);
      return T.test(S) || M.test(S) || L.test(S);
    } catch (_) {
      return I.warn(`isTemplateField error for ${$}:`, _), !1;
    }
  }, P = (h, $) => !!(["content", "nested_parts"].includes(h) || Array.isArray($) || typeof $ == "object" && $ !== null);
  return {
    findComponentByPath: o,
    getParentContainer: t,
    parseHierarchyPath: r,
    stringifyHierarchyPath: n,
    findComponentRecursively: f,
    getTemplate: v,
    generateUniqueId: E,
    getFieldInfo: A,
    isTemplateField: w,
    shouldExcludeField: P,
    shouldShowBasicField: (h, $, _) => h === "id" || h === "type" || h === "module_name" || _._isZForItem || ar.includes(h) || P(h, $) || w(_, h) || $ === "" || $ === null || $ === void 0 || typeof $ == "string" && $.trim() === "" || typeof $ == "number" && $ === 0 ? !1 : typeof $ == "string" && $.trim() !== "" || typeof $ == "number" && $ !== 0 || typeof $ == "boolean",
    shouldShowArrayField: (h, $, _) => {
      const S = `${_.id}_${_.type}_${_.module_name}_array_${h}`;
      if (l.has(S))
        return I.warn(`shouldShowArrayField: 無限ループを検出、処理をスキップ: ${S}`), !1;
      l.add(S);
      try {
        if (I.debug(
          `shouldShowArrayField開始: key=${h}, component: ${_.id} (${_.type}/${_.module_name})`,
          { key: h, value: $, componentId: _.id }
        ), cs.includes(String(h)))
          return I.debug(`shouldShowArrayField: ${h} はシステム内部フィールドのため除外`), !1;
        if (_._isZForItem && ar.includes(String(h)))
          return I.debug(`shouldShowArrayField: ${h} はz-forシステムフィールドのため除外`), !1;
        if (w(_, h))
          return I.debug(`shouldShowArrayField: ${h} はテンプレート記法フィールドのため除外`), !1;
        const T = v(_.type, _.module_name);
        if (T) {
          if (I.debug("shouldShowArrayField: テンプレート取得成功:", T.substring(0, 200)), new RegExp(`z-for="${h}"`).test(T))
            return I.success(
              `shouldShowArrayField: ${h}はz-for記法で使用されているため編集パネルでは非表示（プレビュー側で編集）`
            ), Array.isArray($) || (I.debug(
              `shouldShowArrayField: ${h}は配列でないが、記法で使用されているため空配列で初期化`
            ), _[h] = []), !1;
          I.debug(`shouldShowArrayField: ${h}は配列記法で使用されていない`);
        } else
          I.debug("shouldShowArrayField: テンプレート取得失敗");
        return Array.isArray($) || I.debug(`shouldShowArrayField: ${h}は配列でなく、記法でも使用されていない`), !1;
      } catch (T) {
        return I.error(`shouldShowArrayField: エラーが発生しました: ${S}`, T), !1;
      } finally {
        l.delete(S);
      }
    },
    shouldShowArrayItemField: (h, $, _, S, T) => h === "id" || Array.isArray($) || typeof $ == "object" && $ !== null || $ === "" || $ === null || $ === void 0 || typeof $ == "string" && $.trim() === "" || typeof $ == "number" && $ === 0 ? !1 : (v(_.type, _.module_name), typeof $ == "string" && $.trim() !== "" || typeof $ == "number" && $ !== 0 || typeof $ == "boolean"),
    getInputType: (h) => h.includes("url") || h.includes("src") ? "url" : h.includes("email") ? "email" : h.includes("number") || h.includes("count") ? "number" : "text",
    updateCheckboxValue: (h, $, _, S) => {
      h[$] || (h[$] = []);
      const T = h[$];
      S ? T.includes(_) || T.push(_) : h[$] = T.filter((M) => M !== _);
    },
    isCheckboxChecked: (h, $, _) => {
      const S = h[$];
      return Array.isArray(S) && S.includes(_);
    },
    addArrayItem: (h, $) => {
      h[$] || (h[$] = []);
      const _ = {
        id: `${$}_${Date.now()}`
      }, S = h[$];
      if (S.length > 0) {
        const T = S[0];
        Object.keys(T).forEach((M) => {
          M !== "id" && (_[M] = typeof T[M] == "string" ? "" : T[M]);
        });
      }
      S.push(_);
    },
    removeArrayItem: (h, $, _) => {
      const S = h[$];
      S && S.length > _ && S.splice(_, 1);
    },
    createNewComponent: (h, $) => Ke(
      () => {
        if (!h || !$)
          throw new Error("partType または module が指定されていません");
        if (!$.title || !$.body)
          throw new Error("module.title または module.body が無効です");
        const _ = E();
        I.debug(`createNewComponent開始: partType=${h}, module=${$.title}`);
        const S = {
          id: _,
          type: h,
          module_name: $.title
        }, T = $.body;
        I.debug("createNewComponent テンプレート:", T.substring(0, 300));
        const M = T.match(/\{\$([^:}]+):([^}]+)\}/g);
        M && M.forEach((U) => {
          const x = U.match(/\{\$([^:}]+):([^}]+)\}/);
          if (x) {
            const [, q, V] = x;
            q !== "input" && (S[q] = String(V));
          }
        });
        const L = T.match(/\(\$([^:?]+):(.*?)\)/g);
        L && L.forEach((U) => {
          const x = U.match(/\(\$([^:?]+):(.*?)\)/);
          if (x) {
            const [, q, V] = x, Z = V.split("|").filter((te) => te.trim() !== "");
            Z.length > 0 && (S[q] = String(Z[0]));
          }
        });
        const k = T.match(/\(\$([^:?]+)\?:(.*?)\)/g);
        k && k.forEach((U) => {
          const x = U.match(/\(\$([^:?]+)\?:(.*?)\)/);
          if (x) {
            const [, q, V] = x, Z = V.split("|").filter((te) => te.trim() !== "");
            S[q] = Z.length > 0 ? [Z[0]] : [];
          }
        });
        const F = T.match(/z-for="([^"]+)"/g);
        return F ? (I.debug("createNewComponent: z-for記法発見:", F), F.forEach((U) => {
          const x = U.match(/z-for="([^"]+)"/);
          if (x) {
            const [, q] = x;
            S[q] ? I.debug(`createNewComponent: z-for配列 ${q} は既に初期化済み`) : (I.debug(`createNewComponent: z-for配列 ${q} を空配列で初期化`), S[q] = []);
          }
        })) : I.debug("createNewComponent: z-for記法が見つかりませんでした"), I.debug("createNewComponent完了: newComponent=", S), S;
      },
      Je,
      `コンポーネント作成エラー: ${h}/${$ == null ? void 0 : $.title}`,
      ue.COMPONENT
    ) || {
      id: E(),
      type: h || "unknown",
      module_name: ($ == null ? void 0 : $.title) || "unknown"
    },
    createArrayItem: (h) => {
      const $ = {
        id: E()
      }, _ = h.match(/\{\$([^:}]+):([^}]+)\}/g);
      _ && _.forEach((T) => {
        const M = T.match(/\{\$([^:}]+):([^}]+)\}/);
        if (M) {
          const [, L, k] = M;
          $[L] = String(k);
        }
      });
      const S = h.match(/\(\$([^:?]+):(.*?)\)/g);
      return S && S.forEach((T) => {
        const M = T.match(/\(\$([^:?]+):(.*?)\)/);
        if (M) {
          const [, L, k] = M, F = k.split("|").filter((U) => U.trim() !== "");
          F.length > 0 && ($[L] = String(F[0]));
        }
      }), $;
    },
    getArrayItemFieldInfo: (h, $) => {
      const _ = v(h.type, h.module_name);
      if (!_) return [];
      const S = [];
      let T = "";
      const M = m(_, $);
      return M && (T = M), T && (T.match(/\(\$([^:]+):(.*?)\)/g) || []).forEach((k) => {
        const F = k.match(/\(\$([^:]+):(.*?)\)/);
        if (F) {
          const [, U, x] = F, q = U.includes("?"), V = U.replace("?", "");
          if (x.includes("|")) {
            let Z = x.split("|"), te = !1;
            if ((x.includes("||") || x.startsWith("|") || x.endsWith("|")) && (te = !0), Z = Z.filter((le) => le.trim() !== ""), te && Z.unshift("指定なし"), q) {
              const le = Z.length > 0 ? [Z[0]] : [], Re = {
                type: "checkbox",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: le,
                label: `${V} (チェックボックス)`
              };
              S.push(Re);
            } else {
              const le = Z[0] || "", Re = {
                type: "radio",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: le,
                label: `${V} (ラジオボタン)`
              };
              S.push(Re);
            }
          } else if (x.includes(",")) {
            const Z = x.split(",").map((te) => te.trim()).filter((te) => te !== "");
            if (q) {
              const te = Z.length > 0 ? [Z[0]] : [], le = {
                type: "select-multiple",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: te,
                label: `${V} (セレクトボックス・複数選択)`
              };
              S.push(le);
            } else {
              const te = Z[0] || "", le = {
                type: "select",
                paramName: V,
                propKey: V,
                options: Z,
                defaultValue: te,
                label: `${V} (セレクトボックス)`
              };
              S.push(le);
            }
          } else {
            const Z = {
              type: "text",
              paramName: V,
              propKey: V,
              options: [],
              defaultValue: x,
              label: `${V} (テキストボックス)`
            };
            S.push(Z);
          }
        }
      }), S;
    }
  };
}
const us = { class: "zero-code-content-sidebar" }, ps = {
  key: 0,
  class: "zero-code-editable-component"
}, fs = { class: "zero-code-component-info" }, ms = { class: "zero-code-component-type" }, gs = { class: "zero-code-component-module" }, hs = { class: "zero-code-component-id" }, vs = { class: "zero-code-fields" }, ys = { class: "zero-code-field-label" }, bs = {
  key: 0,
  class: "zero-code-text-group"
}, $s = ["value", "onInput"], ws = {
  key: 1,
  class: "zero-code-radio-group"
}, zs = ["id", "value", "name", "checked", "onChange"], As = ["for"], Ps = {
  key: 2,
  class: "zero-code-checkbox-group"
}, Es = ["id", "checked", "onChange"], _s = ["for"], Cs = {
  key: 3,
  class: "zero-code-select-group"
}, Ss = ["value", "onChange"], Is = ["value"], Ts = {
  key: 4,
  class: "zero-code-select-multiple-group"
}, Ds = ["value", "onChange"], Ns = ["value", "selected"], ks = {
  key: 0,
  class: "zero-code-field-group"
}, Ms = ["for"], Os = ["id", "value", "type", "readonly", "onInput"], Fs = /* @__PURE__ */ _e({
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
    partsData: { type: Array }
  },
  emits: ["close", "update:value", "update:array-item", "update:checkbox", "add:array-item", "remove:array-item", "reorder:array-item"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = () => {
      r("close");
    }, f = (s, p) => {
      r("update:value", s, p);
    }, v = () => {
      if (!t.selectedComponent) return;
      t.getFieldInfo(t.selectedComponent).forEach((p) => {
        p.defaultValue && !t.selectedComponent[p.propKey] && ((p.type === "checkbox" || p.type === "select-multiple") && Array.isArray(p.defaultValue) ? f(p.propKey, [...p.defaultValue]) : f(p.propKey, p.defaultValue));
      });
    };
    je(
      () => t.selectedComponent,
      (s) => {
        s && v();
      },
      { immediate: !0 }
    );
    const l = (s, p, a, i) => {
      if (!t.selectedComponent) return;
      const c = t.selectedComponent[s];
      if (!Array.isArray(c)) return;
      const u = { ...c[p], [a]: i };
      r("update:array-item", s, p, u);
    }, m = (s, p, a) => {
      r("update:checkbox", s, p, a);
    }, E = (s, p) => {
      s && r("add:array-item", p);
    }, A = (s, p, a) => {
      s && r("remove:array-item", p, a);
    }, w = (s, p, a) => {
      if (!t.selectedComponent) return;
      const i = t.selectedComponent[s];
      if (!Array.isArray(i)) return;
      const c = [...i], [u] = c.splice(p, 1);
      c.splice(a, 0, u), t.selectedComponent[s] = c, r("reorder:array-item", s, p, a);
    }, P = (s) => {
      if (!t.selectedComponent) return {};
      const p = {};
      if (t.partsData) {
        const c = no(t.partsData).getArrayItemFieldInfo(t.selectedComponent, s);
        if (c.forEach((u) => {
          p[u.propKey] = {
            label: u.label,
            type: u.type,
            options: u.options,
            defaultValue: u.defaultValue
          };
        }), c.length > 0)
          return p;
      }
      const a = t.selectedComponent[s];
      if (Array.isArray(a) && a.length > 0) {
        const i = a[0];
        typeof i == "object" && i !== null && Object.keys(i).forEach((c) => {
          c !== "id" && (i[c], p[c] = {
            label: c.replace(/_/g, " ").replace(/\b\w/g, (u) => u.toUpperCase()),
            type: c.includes("desc") || c.includes("content") ? "textarea" : "text"
          });
        });
      }
      return Object.keys(p).length === 0 ? {
        title: {
          label: "タイトル",
          type: "text"
        },
        content: {
          label: "内容",
          type: "textarea"
        }
      } : p;
    }, b = (s) => s.replace(/_/g, " ").replace(/\b\w/g, (p) => p.toUpperCase()).concat(" 一覧"), d = (s) => {
      let p = s;
      return s.endsWith("s") && (p = s.slice(0, -1)), p.replace(/_/g, " ").replace(/\b\w/g, (a) => a.toUpperCase());
    };
    return (s, p) => s.showEditor && s.selectedComponent ? (D(), N("div", {
      key: 0,
      class: "zero-code-overlay",
      onClick: n
    }, [
      g("div", {
        class: "zero-code-sidebar",
        onClick: p[0] || (p[0] = Be(() => {
        }, ["stop"]))
      }, [
        g("div", { class: "zero-code-header" }, [
          p[1] || (p[1] = g("h4", null, "コンポーネント編集", -1)),
          g("div", { class: "zero-code-header-buttons" }, [
            g("button", {
              class: "zero-code-btn zero-code-close-button",
              onClick: n
            }, "✖️")
          ])
        ]),
        g("div", us, [
          s.selectedComponent ? (D(), N("div", ps, [
            g("div", fs, [
              g("span", ms, B(s.selectedComponent.type), 1),
              g("span", gs, B(s.selectedComponent.module_name), 1),
              g("span", hs, "ID: " + B(s.selectedComponent.id), 1)
            ]),
            g("div", vs, [
              (D(!0), N(ee, null, ne(s.getFieldInfo(s.selectedComponent), (a) => (D(), N("div", {
                key: a.propKey,
                class: "zero-code-template-field"
              }, [
                g("label", ys, B(a.label) + ":", 1),
                a.type === "text" ? (D(), N("div", bs, [
                  g("input", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    type: "text",
                    class: "zero-code-field-input",
                    onInput: (i) => {
                      const c = i.target;
                      f(a.propKey, c.value);
                    }
                  }, null, 40, $s)
                ])) : Y("", !0),
                a.type === "radio" ? (D(), N("div", ws, [
                  (D(!0), N(ee, null, ne(a.options, (i) => (D(), N("div", {
                    key: i,
                    class: "zero-code-radio-item"
                  }, [
                    g("input", {
                      id: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      value: i,
                      type: "radio",
                      name: `${s.selectedComponent.id}_${a.propKey}`,
                      class: "zero-code-radio-input",
                      checked: s.selectedComponent[a.propKey] === i || i === "指定なし" && !s.selectedComponent[a.propKey],
                      onChange: (c) => f(a.propKey, i === "指定なし" ? "" : i)
                    }, null, 40, zs),
                    g("label", {
                      for: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      class: "zero-code-radio-label"
                    }, B(i), 9, As)
                  ]))), 128))
                ])) : Y("", !0),
                a.type === "checkbox" ? (D(), N("div", Ps, [
                  (D(!0), N(ee, null, ne(a.options, (i) => (D(), N("div", {
                    key: i,
                    class: "zero-code-checkbox-item"
                  }, [
                    g("input", {
                      id: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      checked: s.isCheckboxChecked(s.selectedComponent, a.propKey, i) || Array.isArray(a.defaultValue) && a.defaultValue.includes(i) && !s.selectedComponent[a.propKey],
                      type: "checkbox",
                      class: "zero-code-checkbox-input",
                      onChange: (c) => {
                        const u = c.target;
                        m(a.propKey, i, u.checked);
                      }
                    }, null, 40, Es),
                    g("label", {
                      for: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      class: "zero-code-checkbox-label"
                    }, B(i), 9, _s)
                  ]))), 128))
                ])) : Y("", !0),
                a.type === "select" ? (D(), N("div", Cs, [
                  g("select", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    class: "zero-code-field-input zero-code-select-input",
                    onChange: (i) => {
                      const c = i.target;
                      f(a.propKey, c.value);
                    }
                  }, [
                    (D(!0), N(ee, null, ne(a.options, (i) => (D(), N("option", {
                      key: i,
                      value: i
                    }, B(i), 9, Is))), 128))
                  ], 40, Ss)
                ])) : Y("", !0),
                a.type === "select-multiple" ? (D(), N("div", Ts, [
                  g("select", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    multiple: "",
                    class: "zero-code-field-input zero-code-select-multiple",
                    onChange: (i) => {
                      const c = i.target, u = Array.from(c.selectedOptions).map(
                        (y) => y.value
                      );
                      f(a.propKey, u);
                    }
                  }, [
                    (D(!0), N(ee, null, ne(a.options, (i) => (D(), N("option", {
                      key: i,
                      value: i,
                      selected: Array.isArray(s.selectedComponent[a.propKey]) && s.selectedComponent[a.propKey].includes(i)
                    }, B(i), 9, Ns))), 128))
                  ], 40, Ds)
                ])) : Y("", !0)
              ]))), 128)),
              (D(!0), N(ee, null, ne(s.selectedComponent, (a, i) => (D(), N(ee, {
                key: String(i)
              }, [
                s.shouldShowBasicField(String(i), a, s.selectedComponent) ? (D(), N("div", ks, [
                  g("label", {
                    for: `${s.selectedComponent.id}_${String(i)}`
                  }, B(i) + ":", 9, Ms),
                  g("input", {
                    id: `${s.selectedComponent.id}_${String(i)}`,
                    value: a,
                    type: s.getInputType(String(i)),
                    class: "zero-code-field-input",
                    readonly: String(i) === "id",
                    onInput: (c) => {
                      const u = c.target;
                      f(String(i), u.value);
                    }
                  }, null, 40, Os)
                ])) : Y("", !0)
              ], 64))), 128)),
              (D(!0), N(ee, null, ne(s.selectedComponent, (a, i) => (D(), N(ee, {
                key: String(i)
              }, [
                s.shouldShowArrayField(String(i), a, s.selectedComponent) ? (D(), xe(ls, {
                  key: 0,
                  "component-id": s.selectedComponent.id,
                  "array-key": String(i),
                  items: Array.isArray(a) ? a : [],
                  fields: P(String(i)),
                  label: b(String(i)),
                  "item-label": d(String(i)),
                  onAdd: () => E(s.selectedComponent, String(i)),
                  onRemove: (c) => A(s.selectedComponent, String(i), c),
                  onReorder: (c, u) => w(String(i), c, u),
                  onUpdate: (c, u, y) => l(String(i), c, u, y)
                }, null, 8, ["component-id", "array-key", "items", "fields", "label", "item-label", "onAdd", "onRemove", "onReorder", "onUpdate"])) : Y("", !0)
              ], 64))), 128))
            ])
          ])) : Y("", !0)
        ])
      ])
    ])) : Y("", !0);
  }
}), Rs = { class: "zero-code-tab-content" }, Ls = /* @__PURE__ */ _e({
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
    isTextEditing: { type: Boolean }
  },
  emits: ["update:data-tab", "add-part", "edit-part", "delete-part", "reorder-parts", "close-part-selector", "select-part", "close-nested-part-selector", "select-nested-part", "close-editor", "update-editor-value", "add-array-item", "remove-array-item", "update-array-item", "update-checkbox"],
  setup(e, { emit: o }) {
    return (t, r) => (D(), N("div", Rs, [
      gt(pa, {
        "model-value": t.dataTab,
        "page-data": t.editablePageData,
        parts: t.localParts && t.localParts.length > 0 ? t.localParts : t.parts || [],
        "common-parts": t.localCommonParts,
        "individual-parts": t.localIndividualParts,
        "render-component-with-nested": t.renderComponentWithNested,
        "is-text-editing": t.isTextEditing,
        "onUpdate:modelValue": r[0] || (r[0] = (n) => t.$emit("update:data-tab", n)),
        onAddPart: r[1] || (r[1] = (n) => t.$emit("add-part", n)),
        onEditPart: r[2] || (r[2] = (n) => t.$emit("edit-part", n)),
        onDeletePart: r[3] || (r[3] = (n) => t.$emit("delete-part", n)),
        onReorderParts: r[4] || (r[4] = (n) => t.$emit("reorder-parts", n))
      }, null, 8, ["model-value", "page-data", "parts", "common-parts", "individual-parts", "render-component-with-nested", "is-text-editing"]),
      t.showPartSelector ? (D(), xe(nr, {
        key: 0,
        parts: t.localParts && t.localParts.length > 0 ? t.localParts : t.parts || [],
        onClose: r[5] || (r[5] = (n) => t.$emit("close-part-selector")),
        onSelectPart: r[6] || (r[6] = (n, f) => t.$emit("select-part", n, f))
      }, null, 8, ["parts"])) : Y("", !0),
      t.showNestedPartSelector ? (D(), xe(nr, {
        key: 1,
        parts: t.localParts && t.localParts.length > 0 ? t.localParts : t.parts || [],
        "is-nested": !0,
        onClose: r[7] || (r[7] = (n) => t.$emit("close-nested-part-selector")),
        onSelectPart: r[8] || (r[8] = (n, f) => t.$emit("select-nested-part", n, f))
      }, null, 8, ["parts"])) : Y("", !0),
      (D(), xe(Fs, {
        key: 2,
        "show-editor": t.showEditor,
        "selected-component": t.selectedComponent,
        "get-field-info": t.getFieldInfo,
        "should-show-basic-field": t.shouldShowBasicField,
        "should-show-array-field": t.shouldShowArrayField,
        "should-show-array-item-field": t.shouldShowArrayItemField,
        "get-input-type": t.getInputType,
        "is-checkbox-checked": t.isCheckboxChecked,
        onClose: r[9] || (r[9] = (n) => t.$emit("close-editor")),
        "onUpdate:value": r[10] || (r[10] = (n, f) => t.$emit("update-editor-value", n, f)),
        "onAdd:arrayItem": r[11] || (r[11] = (n) => t.$emit("add-array-item", n)),
        "onRemove:arrayItem": r[12] || (r[12] = (n, f) => t.$emit("remove-array-item", n, f)),
        "onUpdate:arrayItem": r[13] || (r[13] = (n) => t.$emit("update-array-item", n)),
        "onUpdate:checkbox": r[14] || (r[14] = (n) => t.$emit("update-checkbox", n))
      }, null, 8, ["show-editor", "selected-component", "get-field-info", "should-show-basic-field", "should-show-array-field", "should-show-array-item-field", "get-input-type", "is-checkbox-checked"]))
    ]));
  }
}), xs = { class: "zero-code-data-display" }, Bs = { class: "zero-code-component-header" }, Hs = { class: "zero-code-data-tabs" }, Vs = { class: "zero-code-form-group" }, Zs = { class: "zero-code-form-group" }, Us = ["value"], js = { class: "zero-code-data-content" }, Ws = {
  key: 0,
  class: "zero-code-rendered-content"
}, Xs = { class: "zero-code-component-header" }, Ys = { class: "zero-code-component-id" }, Ks = { class: "zero-code-rendered-component" }, Js = { class: "zero-code-component-header" }, qs = { class: "zero-code-header-actions" }, Gs = ["onClick"], Qs = ["onClick"], ei = ["innerHTML"], ti = {
  key: 1,
  class: "zero-code-no-parts"
}, sr = /* @__PURE__ */ _e({
  __name: "PartsManager",
  props: {
    parts: { type: Array },
    renderPartPreview: { type: Function }
  },
  emits: ["show-registration", "edit-part", "delete-part", "search", "filter"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = re(""), f = re(""), v = de(() => Array.from(new Set(t.parts.map((A) => A.type)))), l = de(() => {
      let A = [...t.parts];
      if (f.value && (A = A.filter((w) => w.type === f.value)), n.value) {
        const w = n.value.toLowerCase();
        A = A.map((P) => ({
          ...P,
          module: P.module.filter(
            (b) => b.title.toLowerCase().includes(w) || b.body.toLowerCase().includes(w)
          )
        })).filter((P) => P.module.length > 0);
      }
      return A;
    }), m = () => {
      r("search", n.value);
    }, E = () => {
      r("filter", f.value);
    };
    return (A, w) => (D(), N("div", xs, [
      g("div", Bs, [
        w[3] || (w[3] = g("h4", null, "パーツ管理", -1)),
        g("button", {
          class: "zero-code-add-part-button",
          onClick: w[0] || (w[0] = (P) => A.$emit("show-registration"))
        }, "＋ 新規パーツ登録")
      ]),
      g("div", Hs, [
        g("div", Vs, [
          Oe(g("input", {
            "onUpdate:modelValue": w[1] || (w[1] = (P) => n.value = P),
            placeholder: "パーツ名で検索...",
            class: "zero-code-form-input",
            onInput: m
          }, null, 544), [
            [We, n.value]
          ])
        ]),
        g("div", Zs, [
          Oe(g("select", {
            "onUpdate:modelValue": w[2] || (w[2] = (P) => f.value = P),
            class: "zero-code-form-select",
            onChange: E
          }, [
            w[4] || (w[4] = g("option", { value: "" }, "すべてのType", -1)),
            (D(!0), N(ee, null, ne(v.value, (P) => (D(), N("option", {
              key: P,
              value: P
            }, B(P), 9, Us))), 128))
          ], 544), [
            [mr, f.value]
          ])
        ])
      ]),
      g("div", js, [
        Array.isArray(l.value) && l.value.length > 0 ? (D(), N("div", Ws, [
          (D(!0), N(ee, null, ne(l.value, (P, b) => (D(), N("div", {
            key: b,
            class: "zero-code-data-section"
          }, [
            g("div", Xs, [
              g("h5", null, B(P.type), 1),
              g("span", Ys, B(P.module.length) + "個のパーツ", 1)
            ]),
            g("div", Ks, [
              (D(!0), N(ee, null, ne(P.module, (d, s) => (D(), N("div", {
                key: s,
                class: "zero-code-draggable-item"
              }, [
                g("div", Js, [
                  g("h6", null, B(d.title), 1),
                  g("div", qs, [
                    g("button", {
                      class: "zero-code-edit-btn",
                      onClick: (p) => A.$emit("edit-part", { type: P.type, module: d })
                    }, " 編集 ", 8, Gs),
                    g("button", {
                      class: "zero-code-delete-btn",
                      onClick: (p) => A.$emit("delete-part", { type: P.type, title: d.title })
                    }, " 削除 ", 8, Qs)
                  ])
                ]),
                g("div", {
                  class: "zero-code-module-preview",
                  innerHTML: t.renderPartPreview(d.body)
                }, null, 8, ei)
              ]))), 128))
            ])
          ]))), 128))
        ])) : (D(), N("div", ti, w[5] || (w[5] = [
          g("p", null, "登録されたパーツがありません。", -1)
        ])))
      ])
    ]));
  }
}), oi = { class: "zero-code-modal-header" }, ri = { class: "zero-code-modal-title" }, ni = { class: "zero-code-title-main" }, ai = { class: "zero-code-modal-subtitle" }, si = { class: "zero-code-modal-body" }, ii = { class: "zero-code-form-layout" }, li = { class: "zero-code-form-section" }, di = {
  key: 0,
  class: "zero-code-form-group"
}, ci = { class: "zero-code-type-input-group" }, ui = ["value"], pi = {
  key: 1,
  class: "zero-code-form-group"
}, fi = { class: "zero-code-form-group" }, mi = { class: "zero-code-body-editor-container" }, gi = { class: "zero-code-preview-section" }, hi = { class: "zero-code-preview-container" }, vi = ["innerHTML"], yi = { class: "zero-code-modal-footer" }, bi = { class: "zero-code-modal-actions" }, $i = ["disabled"], wi = /* @__PURE__ */ _e({
  __name: "PartRegistrationModal",
  props: {
    isEditing: { type: Boolean, default: !1 },
    existingTypes: { type: Array },
    partCategory: { default: "common", type: String },
    editingPart: { default: null, type: [Object, null] },
    initialData: { default: () => ({
      type: "",
      title: "",
      body: ""
    }), type: Object },
    renderPartPreview: { type: Function }
  },
  emits: ["close", "save"],
  setup(e, { emit: o }) {
    const t = e, r = o, f = re(t.isEditing && t.editingPart ? {
      type: t.editingPart.type,
      title: t.editingPart.module.title,
      body: t.editingPart.module.body
    } : {
      type: t.initialData.type,
      title: t.initialData.title,
      body: t.initialData.body
    }), v = de(() => (t.isEditing || f.value.type.trim() !== "" && f.value.title.trim() !== "") && f.value.body.trim() !== ""), l = () => {
    }, m = () => {
      v.value && r("save", {
        type: f.value.type,
        title: f.value.title,
        body: f.value.body,
        category: t.partCategory || "common"
      });
    };
    return (E, A) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: A[7] || (A[7] = (w) => E.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-part-modal",
        onClick: A[6] || (A[6] = Be(() => {
        }, ["stop"]))
      }, [
        g("div", oi, [
          g("div", ri, [
            g("div", ni, [
              g("h3", null, B(E.isEditing ? "パーツ編集" : "新規パーツ登録"), 1),
              g("span", {
                class: Fe(["zero-code-badge", E.partCategory])
              }, B(E.partCategory === "common" ? "共通パーツ" : "個別パーツ"), 3)
            ]),
            g("p", ai, B(E.isEditing ? "パーツの内容を編集できます" : "新しいパーツを作成します"), 1)
          ]),
          g("button", {
            class: "zero-code-modal-close-btn",
            onClick: A[0] || (A[0] = (w) => E.$emit("close"))
          }, A[8] || (A[8] = [
            g("span", null, "✖️", -1)
          ]))
        ]),
        g("div", si, [
          g("div", ii, [
            g("div", li, [
              E.isEditing ? Y("", !0) : (D(), N("div", di, [
                A[10] || (A[10] = g("label", {
                  for: "part-type",
                  class: "zero-code-form-label"
                }, "Type", -1)),
                g("div", ci, [
                  Oe(g("select", {
                    id: "part-type",
                    "onUpdate:modelValue": A[1] || (A[1] = (w) => f.value.type = w),
                    class: "zero-code-form-select"
                  }, [
                    A[9] || (A[9] = g("option", { value: "" }, "新しいTypeを選択", -1)),
                    (D(!0), N(ee, null, ne(E.existingTypes, (w) => (D(), N("option", {
                      key: w,
                      value: w
                    }, B(w), 9, ui))), 128))
                  ], 512), [
                    [mr, f.value.type]
                  ]),
                  !f.value.type || !E.existingTypes.includes(f.value.type) ? Oe((D(), N("input", {
                    key: 0,
                    "onUpdate:modelValue": A[2] || (A[2] = (w) => f.value.type = w),
                    placeholder: "新しいType名を入力",
                    class: "zero-code-form-input"
                  }, null, 512)), [
                    [We, f.value.type]
                  ]) : Y("", !0)
                ])
              ])),
              E.isEditing ? Y("", !0) : (D(), N("div", pi, [
                A[11] || (A[11] = g("label", {
                  for: "part-title",
                  class: "zero-code-form-label"
                }, "Title", -1)),
                Oe(g("input", {
                  id: "part-title",
                  "onUpdate:modelValue": A[3] || (A[3] = (w) => f.value.title = w),
                  placeholder: "パーツのタイトルを入力",
                  class: "zero-code-form-input"
                }, null, 512), [
                  [We, f.value.title]
                ])
              ])),
              g("div", fi, [
                A[12] || (A[12] = g("label", {
                  for: "part-body",
                  class: "zero-code-form-label"
                }, "HTML Template", -1)),
                g("div", mi, [
                  Oe(g("textarea", {
                    id: "part-body",
                    "onUpdate:modelValue": A[4] || (A[4] = (w) => f.value.body = w),
                    class: "zero-code-body-editor",
                    placeholder: "HTMLソースを直接編集してください...",
                    onInput: l
                  }, null, 544), [
                    [We, f.value.body]
                  ])
                ])
              ])
            ]),
            g("div", gi, [
              A[13] || (A[13] = g("div", { class: "zero-code-preview-header" }, [
                g("h4", null, "プレビュー"),
                g("span", { class: "zero-code-preview-info" }, "リアルタイムで表示を確認")
              ], -1)),
              g("div", hi, [
                g("div", {
                  class: "zero-code-preview-content",
                  innerHTML: E.renderPartPreview(f.value.body)
                }, null, 8, vi)
              ])
            ])
          ])
        ]),
        g("div", yi, [
          g("div", bi, [
            g("button", {
              class: "zero-code-btn zero-code-btn-secondary",
              onClick: A[5] || (A[5] = (w) => E.$emit("close"))
            }, " キャンセル "),
            g("button", {
              class: "zero-code-btn zero-code-btn-primary",
              disabled: !v.value,
              onClick: m
            }, B(E.isEditing ? "更新" : "登録"), 9, $i)
          ])
        ])
      ])
    ]));
  }
}), zi = { class: "zero-code-tab-content" }, Ai = { class: "zero-code-data-tabs" }, Pi = ["onClick"], Ei = { class: "zero-code-parts-content" }, _i = {
  key: 0,
  class: "zero-code-parts-section"
}, Ci = { class: "zero-code-section-header" }, Si = {
  key: 1,
  class: "zero-code-parts-section"
}, Ii = { class: "zero-code-section-header" }, Ti = {
  key: 2,
  class: "zero-code-parts-section"
}, Di = { class: "zero-code-data-display-section" }, Ni = { class: "zero-code-parts-sub-tabs" }, ki = { class: "zero-code-parts-sub-content" }, Mi = {
  key: 0,
  class: "zero-code-parts-sub-section"
}, Oi = { key: 0 }, Fi = { class: "zero-code-data-display-pre" }, Ri = { key: 1 }, Li = {
  key: 1,
  class: "zero-code-parts-sub-section"
}, xi = { key: 0 }, Bi = { class: "zero-code-data-display-pre" }, Hi = { key: 1 }, Vi = /* @__PURE__ */ _e({
  __name: "PartsManagementPanel",
  props: {
    localParts: { type: Array },
    localCommonParts: { type: Array },
    localIndividualParts: { type: Array },
    showPartRegistration: { type: Boolean },
    existingPartTypes: { type: Array },
    editingPart: { type: null },
    renderPartPreview: { type: Function }
  },
  emits: ["update-parts", "show-registration", "edit-part", "delete-part", "close-registration", "save-part"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = re("common"), f = re("common"), v = re("common"), l = ["common", "individual", "data"], m = (a) => ({
      common: "共通パーツ",
      individual: "個別パーツ",
      data: "データ表示"
    })[a], E = de(() => t.localCommonParts && t.localCommonParts.length > 0 ? t.localCommonParts : t.localParts.map((a) => ({
      ...a,
      module: a.module.filter((i) => {
        const c = i;
        return !c.category || c.category === "common";
      })
    })).filter((a) => a.module.length > 0)), A = de(() => t.localIndividualParts && t.localIndividualParts.length > 0 ? t.localIndividualParts : t.localParts.map((a) => ({
      ...a,
      module: a.module.filter((i) => i.category === "individual")
    })).filter((a) => a.module.length > 0)), w = (a) => {
      f.value = a, r("show-registration");
    }, P = () => {
      r("close-registration");
    }, b = (a) => {
      const i = a.module;
      f.value = i.category || "common", r("edit-part", a);
    }, d = (a) => {
      r("delete-part", a.type, a.title);
    }, s = (a) => {
      const i = {
        ...a,
        category: f.value
      };
      r("save-part", i);
    }, p = (a) => {
      const i = (c, u = 0) => {
        const y = "  ".repeat(u), z = "  ".repeat(u + 1);
        if (Array.isArray(c))
          return c.length === 0 ? "[]" : `[
${c.map((h) => z + i(h, u + 1)).join(`,
`)}
${y}]`;
        if (typeof c == "object" && c !== null) {
          const C = Object.entries(c);
          return C.length === 0 ? "{}" : `{
${C.map(([$, _]) => {
            let S;
            if (typeof _ == "string") {
              const T = _.replace(/\\n/g, `
`).replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
              if (T.includes(`
`)) {
                const M = T.split(`
`);
                S = M.map((k, F) => F === 0 ? `\`${k}` : F === M.length - 1 ? `${z}${k}\`` : `${z}${k}`).join(`
`);
              } else
                S = `"${T}"`;
            } else
              S = i(_, u + 1);
            return `${z}"${$}": ${S}`;
          }).join(`,
`)}
${y}}`;
        }
        return typeof c == "string" ? `"${c.replace(/"/g, '\\"')}"` : JSON.stringify(c);
      };
      return i(a);
    };
    return (a, i) => (D(), N("div", zi, [
      g("div", Ai, [
        (D(), N(ee, null, ne(l, (c) => g("button", {
          key: c,
          class: Fe(["zero-code-data-tab-button", { active: n.value === c }]),
          onClick: (u) => n.value = c
        }, B(m(c)), 11, Pi)), 64))
      ]),
      g("div", Ei, [
        n.value === "common" ? (D(), N("div", _i, [
          g("div", Ci, [
            g("h4", null, "共通パーツ (" + B(E.value.length) + "件)", 1),
            g("button", {
              class: "zero-code-add-part-btn",
              onClick: i[0] || (i[0] = (c) => w("common"))
            }, " ＋ 共通パーツ登録 ")
          ]),
          gt(sr, {
            parts: E.value,
            "render-part-preview": a.renderPartPreview,
            onShowRegistration: i[1] || (i[1] = () => w("common")),
            onEditPart: b,
            onDeletePart: d
          }, null, 8, ["parts", "render-part-preview"])
        ])) : Y("", !0),
        n.value === "individual" ? (D(), N("div", Si, [
          g("div", Ii, [
            g("h4", null, "個別パーツ (" + B(A.value.length) + "件)", 1),
            g("button", {
              class: "zero-code-add-part-btn",
              onClick: i[2] || (i[2] = (c) => w("individual"))
            }, " ＋ 個別パーツ登録 ")
          ]),
          gt(sr, {
            parts: A.value,
            "render-part-preview": a.renderPartPreview,
            onShowRegistration: i[3] || (i[3] = () => w("individual")),
            onEditPart: b,
            onDeletePart: d
          }, null, 8, ["parts", "render-part-preview"])
        ])) : Y("", !0),
        n.value === "data" ? (D(), N("div", Ti, [
          g("div", Di, [
            g("div", Ni, [
              g("button", {
                class: Fe(["zero-code-parts-sub-tab-button", { active: v.value === "common" }]),
                onClick: i[4] || (i[4] = (c) => v.value = "common")
              }, " 共通Partsデータ ", 2),
              g("button", {
                class: Fe(["zero-code-parts-sub-tab-button", { active: v.value === "individual" }]),
                onClick: i[5] || (i[5] = (c) => v.value = "individual")
              }, " 個別Partsデータ ", 2)
            ]),
            g("div", ki, [
              v.value === "common" ? (D(), N("div", Mi, [
                a.localCommonParts && a.localCommonParts.length > 0 ? (D(), N("div", Oi, [
                  g("pre", Fi, B(p(a.localCommonParts)), 1)
                ])) : (D(), N("div", Ri, i[6] || (i[6] = [
                  g("p", null, "共通パーツデータがありません", -1)
                ])))
              ])) : Y("", !0),
              v.value === "individual" ? (D(), N("div", Li, [
                a.localIndividualParts && a.localIndividualParts.length > 0 ? (D(), N("div", xi, [
                  g("pre", Bi, B(p(a.localIndividualParts)), 1)
                ])) : (D(), N("div", Hi, i[7] || (i[7] = [
                  g("p", null, "個別パーツデータがありません", -1)
                ])))
              ])) : Y("", !0)
            ])
          ])
        ])) : Y("", !0)
      ]),
      a.showPartRegistration ? (D(), xe(wi, {
        key: 0,
        "existing-types": a.existingPartTypes,
        "render-part-preview": a.renderPartPreview,
        "editing-part": a.editingPart,
        "is-editing": !!a.editingPart,
        "part-category": f.value,
        onClose: P,
        onSave: s
      }, null, 8, ["existing-types", "render-part-preview", "editing-part", "is-editing", "part-category"])) : Y("", !0)
    ]));
  }
});
function ie(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "";
}
let we = null;
function ir(e, o) {
  return we !== null && we.slotName === o;
}
let Ot, et;
function Zi(e, o) {
  Ot = e, et = o;
}
function Oo(e, o) {
  e.querySelectorAll("[z-if]").forEach((r) => {
    const n = r.getAttribute("z-if");
    n && (o[n] ? (r.removeAttribute("z-if"), I.debug(`z-if要素を表示: ${n}`)) : (r.remove(), I.debug(`z-if要素を非表示: ${n}`)));
  });
}
function Ui(e, o) {
  const t = e.querySelectorAll("[z-for-wrapper]");
  I.debug(`z-for-wrapper要素検索結果: ${t.length}個発見`), t.forEach((r) => {
    const n = r.getAttribute("z-for-wrapper");
    if (n) {
      const f = o[n];
      I.debug(`z-for-wrapper処理: ${n}`, {
        arrayData: f,
        length: Array.isArray(f) ? f.length : "not array"
      }), !Array.isArray(f) || f.length === 0 ? (I.debug(`z-for-wrapper空配列: ${n} - wrapper要素は保持、属性のみ除去`), r.removeAttribute("z-for-wrapper")) : (I.success(`z-for-wrapper配列あり: ${n} - 属性除去`), r.removeAttribute("z-for-wrapper"));
    }
  });
}
function ji(e, o) {
  return `
    <div class="zero-code-add-array-item-button-container">
      <button class="zero-code-add-array-item-button" onclick="window.addArrayItem('${ie(e)}', '${ie(o)}')">
        <span class="zero-code-plus-icon">＋</span>
        <span class="zero-code-button-text">${o}を追加</span>
      </button>
    </div>
  `;
}
function Mr(e, o, t, r, n) {
  const f = e.querySelectorAll("[z-for]");
  I.debug("=== processZForElements(DOM版)開始 ==="), I.debug(`z-for要素検索結果: ${f.length}個発見`), I.debug("コンポーネントデータ:", o), f.forEach((v) => {
    const l = v.getAttribute("z-for");
    if (l) {
      const m = o[l];
      if (I.debug(`z-for処理: ${l}`, {
        arrayData: m,
        length: Array.isArray(m) ? m.length : "not array"
      }), Array.isArray(m) && m.length > 0) {
        const E = n(o.type, o.module_name), A = new RegExp(`<div[^>]*z-for="${l}"[^>]*>`), w = E.match(A), P = w ? E.indexOf(w[0]) : -1;
        if (P !== -1) {
          let b = 0, d = P;
          for (let a = P; a < E.length; a++)
            if (E.substring(a, a + 4) === "<div")
              b++;
            else if (E.substring(a, a + 6) === "</div>" && (b--, b === 0)) {
              d = a + 6;
              break;
            }
          const s = E.substring(P, d), p = [s];
          if (p && p[0]) {
            let a = "";
            const i = s.match(/<div([^>]*z-for="[^"]*"[^>]*)>/);
            let c = "";
            i && i[1] && (c = i[1].replace(/\s*z-for="[^"]*"\s*/, "").trim());
            const u = s.indexOf(">") + 1, y = s.lastIndexOf("</div>"), z = s.substring(u, y).trim();
            if (z) {
              const C = z;
              I.debug(`z-for処理開始: ${l}`, {
                arrayLength: m.length,
                template: C,
                arrayData: m
              }), m.forEach((_, S) => {
                I.debug(`z-forアイテム処理: ${S}`, _);
                let T = C;
                const M = `
                  <div class="zero-code-z-for-controls" data-component-id="${o.id}" data-array-name="${l}" data-index="${S}">
                    <div class="zero-code-z-for-controls-inner">
                      <button class="zero-code-z-for-btn zero-code-z-for-add-btn" onclick="window.addZForArrayItem('${ie(o.id)}', '${ie(l)}', ${S})" title="上に追加">
                        <span class="zero-code-control-icon">＋</span>
                      </button>
                      <span class="zero-code-z-for-drag-handle" 
                            class="zero-code-drag-disabled"
                            title="ドラッグして並び替え">⠿</span>
                      <button class="zero-code-z-for-btn zero-code-z-for-edit-btn" onclick="window.editZForArrayItem('${ie(o.id)}', '${ie(l)}', ${S})" title="編集">
                        <span class="zero-code-control-icon">✎</span>
                      </button>
                      <button class="zero-code-z-for-btn zero-code-z-for-delete-btn" onclick="window.removeZForArrayItem('${ie(o.id)}', '${ie(l)}', ${S})" title="削除">
                        <span class="zero-code-control-icon">✕</span>
                      </button>
                    </div>
                  </div>
                `;
                if (Ot && (I.debug("テキスト置換前:", { itemHtml: T, item: _ }), T = Ot(
                  T,
                  _,
                  o,
                  E,
                  l
                ), I.debug("テキスト置換後:", { itemHtml: T })), et && (T = et(T, _)), T.includes("z-if") || T.includes("z-slot") || T.includes("z-for")) {
                  const V = new DOMParser().parseFromString(
                    `<div>${T}</div>`,
                    "text/html"
                  ), Z = `${o.id}_${l}_${S}`, te = {
                    ..._,
                    type: o.type,
                    module_name: o.module_name,
                    id: Z
                  };
                  Oo(V, te), V.querySelectorAll("[z-slot]").forEach((He) => {
                    const Ae = He.getAttribute("z-slot");
                    if (Ae && te[Ae]) {
                      const Ve = te[Ae];
                      if (Array.isArray(Ve) && Ve.length > 0) {
                        let qe = '<div class="zero-code-z-for-nested-parts">';
                        Ve.forEach((Pt, lt) => {
                          const xt = `${o.id}.${l}[${S}].${Ae}`;
                          qe += `
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(xt)}', ${lt})">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">上にパーツを追加</span>
                              </button>
                            </div>
                          `;
                          const io = we;
                          we = null;
                          const ht = r(
                            Pt,
                            n,
                            t + 2
                          );
                          we = io;
                          const Ge = `${o.id}.${l}[${S}].${Ae}[${lt}]`, lo = t + 2;
                          qe += `
                            <div class="zero-code-nested-component zero-code-nested-depth-${lo} zero-code-z-for-nested-part" 
                                 draggable="true"
                                 data-component-id="${Pt.id}" 
                                 data-path="${Ge}" 
                                 data-parent-path="${o.id}.${l}[${S}].${Ae}"
                                 data-index="${lt}"
                                 data-nested-path="${Ge}"
                                 data-slot-name="${Ae}"
                                 data-part-index="${lt}"
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
                                  <button class="zero-code-edit-button" onclick="window.openNestedEditor('${ie(Ge)}')">編集</button>
                                  <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${ie(Ge)}')">削除</button>
                                </div>
                              </div>
                              <div class="zero-code-nested-component-content" 
                                   ondragover="window.handleNestedPartDragOver && window.handleNestedPartDragOver(event)"
                                   ondrop="window.handleNestedPartDrop && window.handleNestedPartDrop(event)"
                                   data-slot-name="${Ae}" 
                                   data-part-index="${lt}" 
                                   data-parent-path="${o.id}.${l}[${S}].${Ae}">${ht}</div>
                            </div>
                          `;
                        });
                        const Lt = `${o.id}.${l}[${S}].${Ae}`;
                        qe += `
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(Lt)}', ${Ve.length})">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">下にパーツを追加</span>
                            </button>
                          </div>
                        `, qe += "</div>", He.innerHTML = qe;
                      } else {
                        const qe = `${o.id}.${l}[${S}].${Ae}`;
                        He.innerHTML = `
                          <div class="zero-code-z-for-empty-slot">
                            スロット "${Ae}" は空です
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(qe)}', 0)">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">パーツを追加</span>
                              </button>
                            </div>
                          </div>
                        `;
                      }
                      He.removeAttribute("z-slot");
                    } else if (Ae) {
                      const Ve = `${o.id}.${l}[${S}].${Ae}`;
                      He.innerHTML = `
                        <div class="zero-code-z-for-empty-slot">
                          スロット "${Ae}" にデータがありません
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(Ve)}', 0)">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">パーツを追加</span>
                            </button>
                          </div>
                        </div>
                      `, He.removeAttribute("z-slot");
                    }
                  }), V.querySelectorAll("[z-for]").length > 0 && Mr(
                    V,
                    te,
                    t + 1,
                    r,
                    n
                  ), T = V.body.innerHTML.replace(/^<div>|<\/div>$/g, "");
                }
                let L = c;
                L.includes("($") && et && (L = et(
                  L,
                  _
                ));
                let k = "", F = L;
                if (L) {
                  const V = L.match(/class="([^"]*)"/);
                  V && (k = V[1], F = L.replace(/\s*class="[^"]*"\s*/, "").trim());
                }
                let x = `class="${k ? `zero-code-z-for-item-wrapper ${k}` : "zero-code-z-for-item-wrapper"}" 
                       draggable="true"
                       data-component-id="${o.id}"
                       data-array-name="${l}"
                       data-item-index="${S}"
                       ondragstart="window.handleZForDragStart && window.handleZForDragStart(event, '${o.id}', '${l}', ${S})"
                       ondragend="window.handleZForDragEnd && window.handleZForDragEnd(event)"
                       ondragover="window.handleZForArrayItemDragOver && window.handleZForArrayItemDragOver(event)"
                       ondrop="window.handleZForArrayItemDrop && window.handleZForArrayItemDrop(event)"
                       class="zero-code-draggable-item"
                       onmousedown="this.style.cursor = 'grabbing'"
                       onmouseup="this.style.cursor = 'grab'"`;
                F && (x += ` ${F}`);
                const q = `
                  <div ${x}>
                    ${M}
                    <div class="zero-code-z-for-item-content">${T}</div>
                  </div>
                `;
                a += q;
              });
              const h = `
                <div class="zero-code-z-for-add-last-button">
                  <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${o.id}', '${l}', ${m.length})" title="最後に追加">
                    <span class="zero-code-control-icon">＋</span>
                    <span class="zero-code-button-text">追加</span>
                  </button>
                </div>
              `;
              a += h, I.debug(`z-for最終結果: ${l}`, {
                itemsHtml: a,
                itemCount: m.length
              });
              const $ = v.parentNode;
              if ($) {
                const _ = document.createElement("div");
                _.innerHTML = a;
                const S = document.createDocumentFragment();
                for (; _.firstChild; )
                  S.appendChild(_.firstChild);
                $.replaceChild(S, v);
              } else
                v.outerHTML = a;
            }
          }
        }
      } else {
        I.debug(`z-for空配列: ${l}に追加ボタンを設置`);
        const E = `
          <div class="zero-code-z-for-empty-array">
            <div class="zero-code-z-for-empty-message">
              <p class="zero-code-empty-text">${l}はまだ追加されていません</p>
              <button class="zero-code-z-for-btn zero-code-z-for-add-first-btn" onclick="window.addZForArrayItem('${o.id}', '${l}', 0)" title="最初の要素を追加">
                <span class="zero-code-control-icon">＋</span>
                <span class="zero-code-button-text">最初の${l}を追加</span>
              </button>
            </div>
          </div>
        `;
        v.innerHTML = E, v.removeAttribute("z-for");
      }
    }
  });
}
function Wi(e, o, t) {
  let r = e;
  const n = /<div([^>]*z-for="([^"]*)"[^>]*)>([\s\S]*?)<\/div>/g;
  let f;
  for (; (f = n.exec(e)) !== null; ) {
    const [v, l, m, E] = f, A = o[m];
    if (I.debug(`=== processZForWithRegex(正規表現版)処理: ${m}`, {
      arrayData: A,
      length: Array.isArray(A) ? A.length : "not array"
    }), Array.isArray(A) && A.length > 0) {
      let w = "";
      A.forEach((b, d) => {
        let s = E;
        if (`${ie(o.id)}${ie(m)}${d}`, Ot && (s = Ot(
          s,
          b,
          o,
          e,
          m
        )), et && (s = et(s, b)), s.includes("z-if") || s.includes("z-slot") || s.includes("z-for")) {
          const C = new DOMParser().parseFromString(`<div>${s}</div>`, "text/html"), h = `${o.id}_${m}_0`, $ = {
            ...b,
            type: o.type,
            module_name: o.module_name,
            id: h
          };
          Oo(C, $), C.querySelectorAll("[z-slot]").forEach((S) => {
            const T = S.getAttribute("z-slot");
            if (T && $[T]) {
              const M = $[T];
              if (Array.isArray(M) && M.length > 0) {
                let L = '<div class="zero-code-z-for-nested-parts">';
                M.forEach((F, U) => {
                  const x = `${o.id}.${m}[0].${T}`;
                  L += `
                    <div class="zero-code-add-nested-part-button-container">
                      <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(x)}', ${U})">
                        <span class="zero-code-plus-icon">＋</span>
                        <span class="zero-code-button-text">上にパーツを追加</span>
                      </button>
                    </div>
                  `;
                  let q = F.content || F.title || F.name || "(内容なし)";
                  const V = `${o.id}.${m}[0].${T}[${U}]`;
                  L += `
                    <div class="zero-code-z-for-nested-part">
                      <div class="zero-code-z-for-part-header">
                        <small>${F.type || "unknown"} (ID: ${F.id}) [z-for内]</small>
                        <div class="zero-code-z-for-part-actions">
                          <button class="zero-code-edit-button" onclick="window.openNestedEditor('${ie(V)}')">編集</button>
                          <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${ie(V)}')">削除</button>
                        </div>
                      </div>
                      <div>${q}</div>
                    </div>
                  `;
                });
                const k = `${o.id}.${m}[0].${T}`;
                L += `
                  <div class="zero-code-add-nested-part-button-container">
                    <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(k)}', ${M.length})">
                      <span class="zero-code-plus-icon">＋</span>
                      <span class="zero-code-button-text">ネストパーツを追加</span>
                    </button>
                  </div>
                `, L += "</div>", S.innerHTML = L;
              } else
                S.innerHTML = `
                  <div class="zero-code-z-for-empty-slot">
                    スロット "${T}" は空です
                    <div class="zero-code-add-nested-part-button-container">
                      <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(o.id)}', 0)">
                        <span class="zero-code-plus-icon">＋</span>
                        <span class="zero-code-button-text">ネストパーツを追加</span>
                      </button>
                    </div>
                  </div>
                `;
              S.removeAttribute("z-slot");
            } else T && (S.innerHTML = `
                <div class="zero-code-z-for-empty-slot">
                  スロット "${T}" にデータがありません
                  <div class="zero-code-add-nested-part-button-container">
                    <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(o.id)}', 0)">
                      <span class="zero-code-plus-icon">＋</span>
                      <span class="zero-code-button-text">ネストパーツを追加</span>
                    </button>
                  </div>
                </div>
              `, S.removeAttribute("z-slot"));
          }), s = C.body.innerHTML.replace(/^<div>|<\/div>$/g, "");
        }
        let p = l.replace(/\s*z-for="[^"]*"\s*/, "").trim();
        p.includes("($") && et && (p = et(p, b));
        let a = "", i = p;
        if (p) {
          const C = p.match(/class="([^"]*)"/);
          C && (a = C[1], i = p.replace(/\s*class="[^"]*"\s*/, "").trim());
        }
        const c = a ? `zero-code-z-for-item-wrapper ${a}` : "zero-code-z-for-item-wrapper", u = `
          <div class="zero-code-z-for-controls" data-component-id="${o.id}" data-array-name="${m}" data-index="${d}">
            <div class="zero-code-z-for-controls-inner">
              <button class="zero-code-z-for-btn zero-code-z-for-add-btn" onclick="window.addZForArrayItem('${ie(o.id)}', '${ie(m)}', ${d})" title="上に追加">
                <span class="zero-code-control-icon">＋</span>
              </button>
              <span class="zero-code-z-for-drag-handle" 
                    style="pointer-events: none; cursor: grab;"
                    title="ドラッグして並び替え">⠿</span>
              <button class="zero-code-z-for-btn zero-code-z-for-edit-btn" onclick="window.editZForArrayItem('${ie(o.id)}', '${ie(m)}', ${d})" title="編集">
                <span class="control-icon">✎</span>
              </button>
              <button class="zero-code-z-for-btn zero-code-z-for-delete-btn" onclick="window.removeZForArrayItem('${ie(o.id)}', '${ie(m)}', ${d})" title="削除">
                <span class="control-icon">✕</span>
              </button>
            </div>
          </div>
        `;
        let y = `class="${c}" 
               draggable="true"
               data-component-id="${o.id}"
               data-array-name="${m}"
               data-item-index="${d}"
               ondragstart="window.handleZForDragStart && window.handleZForDragStart(event, '${o.id}', '${m}', ${d})"
               ondragend="window.handleZForDragEnd && window.handleZForDragEnd(event)"
               ondragover="window.handleZForArrayItemDragOver && window.handleZForArrayItemDragOver(event)"
               ondrop="window.handleZForArrayItemDrop && window.handleZForArrayItemDrop(event)"
               style="cursor: grab; position: relative; transition: all 0.3s ease;"
               onmousedown="this.style.cursor = 'grabbing'"
               onmouseup="this.style.cursor = 'grab'"`;
        i && (y += ` ${i}`);
        const z = `
          <div ${y}>
            ${u}
            <div class="zero-code-z-for-item-content">${s}</div>
          </div>
        `;
        w += z;
      });
      const P = `
        <div class="zero-code-z-for-add-last-button">
          <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${o.id}', '${m}', ${A.length})" title="最後に追加">
            <span class="zero-code-control-icon">＋</span>
            <span class="zero-code-button-text">追加</span>
          </button>
        </div>
      `;
      w += P, r = r.replace(v, w);
    } else
      I.debug(`正規表現z-for空配列: ${m}に追加ボタンを設置`), r = r.replace(
        v,
        ji(o.id, m)
      );
  }
  return r;
}
function Xi(e, o, t, r, n) {
  const f = e.querySelectorAll("[z-slot]");
  I.debug(`z-slot要素発見: ${f.length}個`), f.forEach((v) => {
    const l = v.getAttribute("z-slot");
    if (I.debug(`z-slot処理: ${l}`), l) {
      const m = o[l], E = Array.isArray(m) ? m : [];
      if (I.debug(`ネストパーツ数: ${E.length}個`), E.length === 0) {
        const A = we ? `${we.parentId}.${we.arrayName}[${we.arrayIndex}].${we.slotName}` : o.id;
        v.innerHTML = `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${A}', 0)">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">パーツを追加</span>
            </button>
          </div>
        `, I.debug(`空のネストパーツに追加ボタンを設置 - パス: ${A}`);
      } else {
        let A = "";
        E.forEach((P, b) => {
          const d = P.id, s = we && ir(o, l) ? `${we.parentId}.${we.arrayName}[${we.arrayIndex}].${we.slotName}` : o.id, p = t + 1;
          A += `
            <div class="zero-code-add-nested-part-button-container">
              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(s)}', ${b})">
                <span class="zero-code-plus-icon">＋</span>
                <span class="zero-code-button-text">上にパーツを追加（${p}階層目）</span>
              </button>
            </div>
          `, A += `
            <div class="nested-component nested-depth-${p} draggable-nested" 
                 draggable="true" 
                 data-component-id="${P.id}" 
                 data-path="${d}" 
                 data-parent-path="${s}"
                 data-index="${b}"
                 class="zero-code-nested-component">
              <div class="zero-code-component-header zero-code-nested-header">
                <!-- ドラッグハンドル -->
                <div class="zero-code-drag-handle-nested">
                  ⠿
                </div>
                <div class="zero-code-header-actions">
                  <button class="zero-code-edit-button" onclick="window.openNestedEditor('${d}')">編集</button>
                  <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${d}')">削除</button>
                </div>
              </div>
              <div class="zero-code-nested-component-content">
                ${r(P, n, p)}
              </div>
            </div>
          `;
        });
        const w = we && ir(o, l) ? `${we.parentId}.${we.arrayName}[${we.arrayIndex}].${we.slotName}` : o.id;
        A += `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(w)}', ${E.length})">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">下にパーツを追加（${t + 1}階層目）</span>
            </button>
          </div>
        `, v.innerHTML = A, I.debug(`ネストパーツを編集UI付きで表示（重複防止版）: ${E.length}個`);
      }
      v.removeAttribute("z-slot"), I.success(`z-slot属性を除去: ${l}`);
    }
  });
}
const Yi = [
  // v-if, v-show, v-for, v-model等
  /v-[a-zA-Z-]+(?::[a-zA-Z-\.]+)?="[^"]*"/g,
  // @click, @input等のイベントハンドラ
  /@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*="[^"]*"/g,
  // :class, :style等のバインディング
  /:[a-zA-Z-]+(?:\.[a-zA-Z-]+)*="[^"]*"/g,
  // v-slot記法
  /v-slot:[a-zA-Z-]+="[^"]*"/g,
  // #slotName記法
  /#[a-zA-Z-]+="[^"]*"/g
], Ki = [
  // {{ variable }}
  /\{\{[^}]+\}\}/g,
  // v-text, v-html の内容
  /v-text="[^"]*"/g,
  /v-html="[^"]*"/g
];
function Ji(e) {
  return Ke(
    () => {
      const o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
      let r = e;
      return I.debug("Vue.jsディレクティブ保護開始", {
        htmlLength: e.length
      }), Yi.forEach((n, f) => {
        r = r.replace(n, (v) => {
          const l = `__VUE_DIR_${f}_${o.size}__`;
          return o.set(l, v), I.debug(`ディレクティブ保護: ${v} → ${l}`), l;
        });
      }), Ki.forEach((n, f) => {
        r = r.replace(n, (v) => {
          const l = `__VUE_INT_${f}_${t.size}__`;
          return t.set(l, v), I.debug(`補間記法保護: ${v} → ${l}`), l;
        });
      }), I.success("Vue.jsディレクティブ保護完了", {
        directiveCount: o.size,
        interpolationCount: t.size,
        resultLength: r.length
      }), {
        html: r,
        directives: o,
        interpolations: t
      };
    },
    Je,
    "Vue.jsディレクティブ保護中にエラーが発生しました",
    ue.TEMPLATE
  ) || {
    html: e,
    directives: /* @__PURE__ */ new Map(),
    interpolations: /* @__PURE__ */ new Map()
  };
}
function lr(e, o) {
  return Ke(
    () => {
      let t = e;
      return I.debug("Vue.jsディレクティブ復元開始", {
        directiveCount: o.directives.size,
        interpolationCount: o.interpolations.size
      }), o.directives.forEach((r, n) => {
        t = t.replace(new RegExp(n, "g"), r), I.debug(`ディレクティブ復元: ${n} → ${r}`);
      }), o.interpolations.forEach((r, n) => {
        t = t.replace(new RegExp(n, "g"), r), I.debug(`補間記法復元: ${n} → ${r}`);
      }), I.success("Vue.jsディレクティブ復元完了", {
        resultLength: t.length
      }), t;
    },
    Je,
    "Vue.jsディレクティブ復元中にエラーが発生しました",
    ue.TEMPLATE
  ) || e;
}
function qi(e) {
  return Ke(
    () => {
      const o = Ji(e), r = new DOMParser().parseFromString(o.html, "text/html");
      return I.debug("安全DOMパース完了", {
        originalLength: e.length,
        protectedLength: o.html.length,
        parsedElementCount: r.body.children.length
      }), { doc: r, preservation: o };
    },
    Je,
    "安全DOMパース中にエラーが発生しました",
    ue.TEMPLATE
  ) || {
    doc: new DOMParser().parseFromString("<div></div>", "text/html"),
    preservation: { html: e, directives: /* @__PURE__ */ new Map(), interpolations: /* @__PURE__ */ new Map() }
  };
}
function dr(e) {
  return e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ") : "";
}
function Gi(e, o, t) {
  return Ke(
    () => {
      I.debug("統合テンプレート処理開始", {
        componentId: o.id,
        htmlLength: e.length
      });
      let r = e;
      return r = r.replace(
        /(\(\$[^:)]+\?:[^)]*\)|\(\$[^:)]+:[^)]*\)|\{\$[^:}]+:[^}]*\})/g,
        (n) => n.includes("?:") ? Qi(n, o) : n.startsWith("(") && n.includes(":") ? el(n, o) : n.startsWith("{") && n.includes(":") ? tl(n, o, t) : n
      ), I.success("統合テンプレート処理完了", {
        componentId: o.id,
        resultLength: r.length
      }), r;
    },
    Je,
    `統合テンプレート処理中にエラーが発生しました (componentId: ${o.id})`,
    ue.TEMPLATE
  ) || e;
}
function Qi(e, o) {
  const t = e.match(/\(\$([^:?]+)\?:([^)]*)\)/);
  if (!t) return e;
  const [, r, n] = t, f = n.split("|"), v = o[r];
  return Array.isArray(v) ? v.join(" ") : v && f.includes(String(v)) ? String(v) : f[0] || "";
}
function el(e, o) {
  const t = e.match(/\(\$([^:]+):([^)]*)\)/);
  if (!t) return e;
  const [, r, n] = t, f = n.split("|"), v = o[r];
  return v && f.includes(String(v)) ? String(v) : f[0] || "";
}
function tl(e, o, t) {
  const r = e.match(/\{\$([^:]+):([^}]*)\}/);
  if (!r) return e;
  const [, n, f] = r, v = o[n], l = dr(v ? String(v) : f);
  return ol(t, n) ? `<div class="tiptap-content" data-component-id="${o.id}" data-param-name="${n}">${l}</div>` : l;
}
function ol(e, o) {
  const t = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), r = new RegExp(
    `\\{\\$${t}:[^}]*\\}`,
    "g"
  );
  let n;
  for (; (n = r.exec(e)) !== null; ) {
    const f = n.index, v = e.substring(0, f), l = v.lastIndexOf("<"), m = v.lastIndexOf(">");
    if (l > m)
      continue;
    const E = [];
    if ([/<(pre|code)[^>]*>[\s\S]*?<\/(pre|code)>/gi, /<div[^>]*class="[^"]*code-block[^"]*"[^>]*>[\s\S]*?<\/div>/gi].forEach((d) => {
      d.lastIndex = 0;
      let s;
      for (; (s = d.exec(e)) !== null; )
        E.push({
          start: s.index,
          end: s.index + s[0].length
        });
    }), !E.some(
      (d) => f >= d.start && f <= d.end
    ))
      return !0;
  }
  return !1;
}
const Jt = /* @__PURE__ */ new Map();
function rl(e, o, t) {
  const r = `${e}:${o}`;
  if (Jt.has(r))
    return Jt.get(r);
  const n = t(e, o);
  return Jt.set(r, n), n;
}
function nl() {
  Jt.clear(), I.debug("テンプレートキャッシュをクリアしました");
}
function al(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "";
}
const cr = new DOMParser(), mt = /* @__PURE__ */ new Map(), sl = 50;
function il(e) {
  return Ke(
    () => {
      if (mt.has(e)) {
        const t = mt.get(e);
        if (t)
          return I.debug("DOMParser: キャッシュからヒット"), t.cloneNode(!0);
      }
      const o = cr.parseFromString(e, "text/html");
      if (mt.size >= sl) {
        const t = mt.keys().next().value;
        t && mt.delete(t);
      }
      return mt.set(e, o.cloneNode(!0)), I.debug("DOMParser: 新規パース＆キャッシュ保存"), o;
    },
    Je,
    "HTML解析中にエラーが発生しました",
    ue.TEMPLATE
  ) || cr.parseFromString("<div></div>", "text/html");
}
function ll(e, o, t, r = 1) {
  return Ke(
    () => {
      I.debug("最適化z-directive処理開始", {
        componentId: o.id,
        currentDepth: r
      });
      let n = e;
      return n = dl(n, o), n = cl(n, o, t), n = ul(n, o, r, t), I.success("最適化z-directive処理完了", {
        componentId: o.id,
        resultLength: n.length
      }), n;
    },
    Je,
    `z-directive処理中にエラーが発生しました (componentId: ${o.id})`,
    ue.TEMPLATE
  ) || e;
}
function dl(e, o) {
  return e.replace(
    /<([^>]*z-if="([^"]*)"[^>]*)>([\\s\\S]*?)<\/[^>]*>/g,
    (t, r, n, f) => {
      if (!o[n])
        return I.debug(`z-if要素を非表示: ${n}`), "";
      const l = r.replace(/\s*z-if="[^"]*"\s*/, " ").trim();
      return I.debug(`z-if要素を表示: ${n}`), `<div ${l}>${f}</div>`;
    }
  );
}
function cl(e, o, t) {
  return e.replace(
    /<div([^>]*z-for="([^"]*)"[^>]*)>([\\s\\S]*?)<\/div>/g,
    (r, n, f, v) => {
      const l = o[f];
      return I.debug(`z-for処理: ${f}`, {
        length: Array.isArray(l) ? l.length : "not array"
      }), !Array.isArray(l) || l.length === 0 ? `
          <div class="add-array-item-button-container">
            <button class="add-array-item-button" onclick="window.addArrayItem('${o.id}', '${f}')">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">${f}を追加</span>
            </button>
          </div>
        ` : l.map((E) => {
        let A = v;
        return Object.keys(E).forEach((w) => {
          if (w !== "id") {
            const P = E[w];
            if (typeof P == "string")
              [
                new RegExp(`\\{\\$${w}:([^}]+)\\}`, "g"),
                new RegExp(`\\(\\$${w}:([^)]+)\\)`, "g")
              ].forEach((d) => {
                A = A.replace(d, P);
              });
            else if (Array.isArray(P)) {
              const b = new RegExp(`\\(\\$${w}\\?:([^)]+)\\)`, "g");
              A = A.replace(b, P.join(" "));
            }
          }
        }), A;
      }).join("");
    }
  );
}
function ul(e, o, t, r) {
  const n = il(e), f = n.querySelectorAll("[z-slot]");
  return I.debug(`z-slot要素発見: ${f.length}個`), f.forEach((v) => {
    const l = v.getAttribute("z-slot");
    if (l) {
      const m = o[l], E = Array.isArray(m) ? m : [];
      if (E.length === 0)
        v.innerHTML = `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${al(o.id)}', 0)">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">ネストパーツを追加</span>
            </button>
          </div>
        `;
      else {
        const A = E.map((w, P) => {
          const b = t + 1, d = Math.max(0, b - 1) * 20;
          return `
            <div class="nested-component nested-depth-${b}" style="margin-left: ${d}px;">
              <div class="component-header">
                <span class="component-type">${w.type}</span>
                <span class="component-module">${w.module_name}</span>
                <button onclick="window.openNestedEditor('${w.id}')">編集</button>
                <button onclick="window.deleteNestedPart('${w.id}')">削除</button>
              </div>
            </div>
          `;
        }).join("");
        v.innerHTML = A;
      }
      v.removeAttribute("z-slot");
    }
  }), n.body.innerHTML;
}
function pl() {
  mt.clear(), I.debug("DOMキャッシュをクリアしました");
}
function Ao(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "";
}
function ur(e) {
  return e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ") : "";
}
function Or() {
  const e = re(null);
  let o = !1;
  const t = (a, i) => {
    const c = `\\{\\$${i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:[^}]*\\}`, u = new RegExp(c, "g");
    let y;
    for (; (y = u.exec(a)) !== null; ) {
      const z = y.index, C = a.substring(0, z), h = C.lastIndexOf("<"), $ = C.lastIndexOf(">");
      if (h > $)
        continue;
      const _ = [];
      if ([/<(pre|code)[^>]*>[\s\S]*?<\/(pre|code)>/gi, /<div[^>]*class="[^"]*code-block[^"]*"[^>]*>[\s\S]*?<\/div>/gi].forEach((k) => {
        k.lastIndex = 0;
        let F;
        for (; (F = k.exec(a)) !== null; )
          _.push({
            start: F.index,
            end: F.index + F[0].length
          });
      }), !_.some(
        (k) => z >= k.start && z <= k.end
      ))
        return !0;
    }
    return !1;
  }, r = (a, i, c) => a.replace(/\{\$([^:]+):(.*?)\}/g, (u, y, z) => {
    const C = String(i[y] || z), h = ur(C);
    return t(c, y) ? y === "content" ? `<div class="zero-code-rich-editable-text block-editable" data-component-id="${i.id}" data-param="${y}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${y}', this.innerHTML, this);">${h}</div>` : `<span class="zero-code-rich-editable-text inline-editable" data-component-id="${i.id}" data-param="${y}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${y}', this.innerHTML, this);">${h}</span>` : h;
  }), n = (a, i, c, u, y) => a.replace(
    /\{\$([^:]+):(.*?)\}/g,
    (z, C, h) => {
      const $ = String(i[C] || h), _ = ur($);
      if (t(u, C)) {
        const M = c[y].indexOf(i), L = `${c.id}_${y}_${M}_${C}`;
        return C === "content" ? `<div class="zero-code-rich-editable-text array-item-text block-editable" data-component-id="${L}" data-param="${C}" data-array-name="${y}" data-item-index="${M}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${L}', '${C}', this.innerHTML, this);">${_}</div>` : `<span class="zero-code-rich-editable-text array-item-text inline-editable" data-component-id="${L}" data-param="${C}" data-array-name="${y}" data-item-index="${M}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${L}', '${C}', this.innerHTML, this);">${_}</span>`;
      }
      return _;
    }
  ), f = (a, i) => a.replace(
    /\(\$([^:]+):(.*?)\)/g,
    (c, u, y) => {
      if (i[u]) {
        let h = i[u];
        return h === "指定無し" && (h = ""), Array.isArray(h) ? h.join(" ") : String(h);
      }
      const z = u;
      if (i[z]) {
        let h = i[z];
        return h === "指定無し" && (h = ""), Array.isArray(h) ? h.join(" ") : String(h);
      }
      return y.split("|").filter((h) => h.trim())[0] || "";
    }
  ), v = (a, i) => a.replace(/\(\$([^:?]+):(.*?)\)/g, (c, u, y) => {
    let z = i[u];
    return z === "指定無し" && (z = ""), Array.isArray(z) ? z.join(" ") : z ? String(z) : y.split("|").filter((h) => h.trim())[0] || "";
  }), l = (a, i) => a.replace(
    /\(\$([^:?]+)\?:(.*?)\)/g,
    (c, u, y) => {
      const z = i[u];
      return Array.isArray(z) ? z.join(" ") : String(z || "");
    }
  ), m = (a, i, c, u, y) => a.replace(/@slot\(\$([^)]+)\)@/g, (z, C) => {
    const h = i[C], $ = Array.isArray(h) ? h : [];
    return c(
      $,
      [u],
      (_) => _.join("-"),
      y
    );
  }), E = (a, i, c, u) => {
    const y = c(a.type, a.module_name);
    if (!y)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let z = y;
    return z = v(z, a), z = l(z, a), z = r(z, a, y), z = m(
      z,
      a,
      u,
      i,
      c
    ), z = b(z, a, c, i, 1), z;
  }, A = (a, i, c = 0) => {
    const u = i(a.type, a.module_name);
    if (!u)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let y = u;
    return y = v(y, a), y = l(y, a), y = r(y, a, u), y = y.replace(/@slot\(\$([^)]+)\)@/g, ""), y = b(y, a, i, c, 1), y;
  }, w = (a, i, c, u) => {
    const y = i(a.type, a.module_name);
    if (!y)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let z = y;
    return z = v(z, a), z = l(z, a), z = r(z, a, y), z = z.replace(/@slot\(\$([^)]+)\)@/g, ""), z = b(z, a, i, 0, c), z;
  }, P = (a, i = [], c, u) => {
    if (!a || a.length === 0)
      return `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', 0)">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">ネストパーツを追加（${i.length + 1}階層目）</span>
          </button>
        </div>
      `;
    let y = "";
    return a.forEach((z, C) => {
      const h = [...i, C], $ = c(h), _ = h.length;
      y += `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', ${C})">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">上にパーツを追加（${i.length + 1}階層目）</span>
          </button>
        </div>
      `, y += `
        <div class="zero-code-nested-component zero-code-nested-depth-${_} zero-code-draggable-nested" 
             draggable="true" 
             data-component-id="${z.id}" 
             data-path="${$}" 
             data-parent-path="${c(i)}"
             data-index="${C}"
>
          <div class="zero-code-component-header zero-code-nested-header">
            <!-- ドラッグハンドル -->
            <div class="zero-code-drag-handle-nested">
              ⠿
            </div>
            <div class="zero-code-header-actions">
              <button class="zero-code-edit-button" onclick="window.openNestedEditor('${$}')">編集</button>
              <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${$}')">削除</button>
            </div>
          </div>
          <div class="zero-code-nested-component-content">
            ${u ? A(z, u) : `<div>テンプレートが見つかりません: ${z.type}/${z.module_name}</div>`}
          </div>
        </div>
      `, z.nested_parts && Array.isArray(z.nested_parts) && z.nested_parts.length > 0 && (y += P(
        z.nested_parts,
        h,
        c,
        u
      ));
    }), y += `
      <div class="zero-code-add-nested-part-button-container">
        <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', ${a.length})">
          <span class="zero-code-plus-icon">＋</span>
          <span class="zero-code-button-text">下にパーツを追加（${i.length + 1}階層目）</span>
        </button>
      </div>
    `, y;
  }, b = (a, i, c, u = 0, y = 1) => Ke(
    () => {
      I.debug("processZDirectives開始", {
        componentId: i.id,
        type: i.type,
        htmlLength: a.length,
        currentDepth: y
      }), o || (Zi(
        n,
        f
      ), o = !0);
      const { doc: z, preservation: C } = qi(a), h = (M, L, k) => w(M, L, k);
      Oo(z, i), Ui(z, i), Mr(z, i, y, h, c);
      const $ = C.html.match(/z-for="[^"]*"/g), _ = z.querySelectorAll("[z-for]");
      if (I.debug(
        `元のHTML内z-for: ${$ ? $.length : 0}個、DOM処理後: ${_.length}個`
      ), $ && $.length > 0 && _.length === 0)
        I.debug("DOM処理でz-forが処理された - 正規表現フォールバックをスキップ");
      else if (_.length > 0) {
        I.debug("DOM処理で未処理のz-for要素あり - 正規表現フォールバック実行");
        const M = Wi(C.html, i);
        if (M !== C.html)
          return I.debug("正規表現処理で変更あり - Vue.js復元して終了"), lr(M, C);
      }
      Xi(z, i, y, h, c);
      const S = z.body.innerHTML, T = lr(S, C);
      return I.success("processZDirectives完了（Vue.jsディレクティブ復元済み）", {
        componentId: i.id,
        resultLength: T.length,
        directiveCount: C.directives.size,
        interpolationCount: C.interpolations.size
      }), T;
    },
    Je,
    `Z-Directive処理中にエラーが発生しました (componentId: ${i.id})`,
    ue.TEMPLATE
  ) || a;
  return {
    editingText: e,
    shouldApplyTiptap: t,
    processTextReplacementWithTemplate: r,
    processArrayItemTextReplacement: n,
    processArrayItemParameterReplacement: f,
    processSelectionSyntax: v,
    processConditionalClassSyntax: l,
    processSlotSyntax: m,
    processZDirectives: b,
    renderComponentWithNested: E,
    renderComponentWithoutSlot: A,
    renderNestedComponentWithDepth: w,
    renderNestedComponentsWithUI: P,
    hasNestedSlot: (a, i) => {
      const c = i(a.type, a.module_name);
      return c ? c.includes("@slot($nested_parts)@") : !1;
    },
    // 最適化版関数
    renderComponentOptimized: (a, i) => Ke(
      () => {
        I.debug("最適化レンダリング開始", {
          componentId: a.id,
          type: a.type
        });
        const c = rl(a.type, a.module_name, i);
        if (!c)
          return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
        let u = Gi(c, a, c);
        return u = ll(u, a, i, 1), I.success("最適化レンダリング完了", {
          componentId: a.id,
          resultLength: u.length
        }), u;
      },
      Je,
      `最適化レンダリング中にエラーが発生しました (componentId: ${a.id})`,
      ue.TEMPLATE
    ) || `<div>レンダリングエラー: ${a.id}</div>`,
    clearAllCaches: () => {
      nl(), pl(), I.debug("全ての最適化キャッシュをクリアしました");
    }
  };
}
const fl = { class: "zero-code-page-preview" }, ml = { class: "zero-code-data-tabs" }, gl = { class: "zero-code-page-preview-content" }, hl = ["innerHTML"], vl = {
  key: 1,
  class: "zero-code-html-source"
}, yl = { class: "zero-code-html-source-pre" }, bl = /* @__PURE__ */ _e({
  __name: "PagePreview",
  props: {
    pageData: { type: Array },
    parts: { type: Array }
  },
  setup(e) {
    const o = e;
    Or();
    const t = re("rendered"), r = (P) => {
      if (!P) return "";
      try {
        const s = new globalThis.DOMParser().parseFromString(`<root>${P}</root>`, "text/html").body.firstChild;
        if (!s) return P;
        const p = /* @__PURE__ */ new Set([
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
          "wbr"
        ]), a = /* @__PURE__ */ new Set([
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
          "b"
        ]), i = (u, y = 0, z = !1) => {
          var U;
          const C = u.tagName.toLowerCase(), h = z ? "" : "  ".repeat(y), $ = p.has(C), _ = a.has(C);
          let S = `<${C}`;
          for (let x = 0; x < u.attributes.length; x++) {
            const q = u.attributes[x];
            S += ` ${q.name}="${q.value}"`;
          }
          S += ">";
          let T = h + S;
          if ($)
            return T;
          let M = !1, L = !1;
          const k = [];
          let F = "";
          for (let x = 0; x < u.childNodes.length; x++) {
            const q = u.childNodes[x];
            if (q.nodeType === 1) {
              M = !0;
              const Z = i(
                q,
                y + 1,
                _ || z
              );
              k.push(Z);
            } else if (q.nodeType === 3) {
              const V = (U = q.textContent) == null ? void 0 : U.replace(/\s+/g, " ").trim();
              V && (L = !0, F += V);
            }
          }
          return M && L ? _ || z ? T += F + k.join("") : (T += F + `
` + k.join(`
`), k.length > 0 && (T += `
` + h)) : M ? _ || z ? T += k.join("") : (T += `
` + k.join(`
`), k.length > 0 && (T += `
` + h)) : L && (T += F), T += `</${C}>`, T;
        };
        let c = "";
        for (let u = 0; u < s.childNodes.length; u++) {
          const y = s.childNodes[u];
          y.nodeType === 1 && (c += i(y) + `
`);
        }
        return c.replace(/\n{3,}/g, `

`).replace(/\n\s*\n\s*</g, `
<`).trim();
      } catch {
        return P.replace(/>\s*</g, `>
<`).split(`
`).filter((d) => d.trim()).map((d, s, p) => {
          const a = d.trim();
          if (!a) return "";
          let i = 0;
          for (let c = 0; c < s; c++) {
            const u = p[c].trim();
            u.match(/<[^\/!][^>]*[^\/]>$/) && i++, u.match(/<\/[^>]+>$/) && i--;
          }
          return a.startsWith("</") && i--, "  ".repeat(Math.max(0, i)) + a;
        }).join(`
`);
      }
    }, n = (P, b) => {
      if (!Array.isArray(o.parts)) return "";
      const d = o.parts.find((p) => p.type === P);
      if (!d) return "";
      const s = d.module.find((p) => p.title === b);
      return s ? s.body : "";
    }, f = () => {
      if (!Array.isArray(o.pageData) || o.pageData.length === 0)
        return '<div class="zero-code-no-content">ページにコンテンツがありません</div>';
      let P = '<div class="zero-code-page-container">';
      return o.pageData.forEach((b, d) => {
        const s = v(b);
        !s || s.trim() === "" ? P += `<div class="zero-code-error-component">テンプレートが見つかりません: ${b.type}/${b.module_name}</div>` : P += s;
      }), P += "</div>", P;
    }, v = (P) => {
      const b = n(P.type, P.module_name);
      if (!b) return "";
      let d = b;
      return d = l(d, P), d = E(d, P), d = A(d, P), d;
    }, l = (P, b) => {
      const s = new globalThis.DOMParser().parseFromString(P, "text/html");
      return s.querySelectorAll("[z-if]").forEach((u) => {
        const y = u.getAttribute("z-if");
        y && (b[y] ? u.removeAttribute("z-if") : u.remove());
      }), s.querySelectorAll("[z-for-wrapper]").forEach((u) => {
        const y = u.getAttribute("z-for-wrapper");
        if (y) {
          const z = b[y];
          !Array.isArray(z) || z.length === 0 ? u.remove() : u.removeAttribute("z-for-wrapper");
        }
      }), s.querySelectorAll("[z-for]").forEach((u) => {
        const y = u.getAttribute("z-for");
        if (y) {
          const z = b[y];
          if (Array.isArray(z) && z.length > 0) {
            const C = n(b.type, b.module_name), h = m(C, y);
            if (h) {
              const $ = z.map((_) => {
                let S = h;
                return S = l(S, _), S = E(S, _), S = A(S, _), S;
              }).join("");
              u.outerHTML = $;
            } else
              u.remove();
          } else
            u.remove();
        }
      }), s.querySelectorAll("[z-slot]").forEach((u) => {
        const y = u.getAttribute("z-slot");
        if (y)
          if (b[y] && Array.isArray(b[y])) {
            const z = w(b[y]);
            u.outerHTML = z;
          } else
            u.remove();
      }), s.body.innerHTML;
    }, m = (P, b) => {
      const d = new RegExp(`<div[^>]*z-for="${b}"[^>]*>`), s = P.match(d);
      if (!s) return "";
      const p = P.indexOf(s[0]);
      if (p === -1) return "";
      let a = 0, i = p;
      for (let h = p; h < P.length; h++)
        if (P.substring(h, h + 4) === "<div")
          a++;
        else if (P.substring(h, h + 6) === "</div>" && (a--, a === 0)) {
          i = h + 6;
          break;
        }
      if (a !== 0) return "";
      const c = P.substring(p, i), u = s[0].replace(/\s*z-for="[^"]*"\s*/, " ").replace(/\s+>/, ">"), y = c.indexOf(">") + 1, z = c.lastIndexOf("</div>"), C = c.substring(y, z);
      return u + C + "</div>";
    }, E = (P, b) => (P = P.replace(
      /\(\$([^:?]+)\?:(.*?)\)/g,
      (d, s, p) => {
        const a = b[s];
        return Array.isArray(a) ? a.join(" ") : a || "";
      }
    ), P = P.replace(
      /\(\$([^:]+):(.*?)\)/g,
      (d, s, p) => {
        let a = b[s];
        return (a === "指定なし" || a === "") && (a = ""), a ? Array.isArray(a) ? a.join(" ") : a : p.includes("|") ? p.split("|").filter((c) => c.trim() !== "")[0] || "" : p.includes(",") ? p.split(",").map((c) => c.trim()).filter((c) => c !== "")[0] || "" : p;
      }
    ), P), A = (P, b) => P.replace(
      /\{\$([^:]+):(.*?)\}/g,
      (d, s, p) => String(b[s] || p)
    ), w = (P) => {
      if (!P || P.length === 0)
        return "";
      let b = "";
      return P.forEach((d) => {
        const s = v(d);
        s && s.trim() !== "" && (b += s);
      }), b;
    };
    return (P, b) => (D(), N("div", fl, [
      g("div", ml, [
        g("button", {
          class: Fe(["zero-code-data-tab-button", { active: t.value === "rendered" }]),
          onClick: b[0] || (b[0] = (d) => t.value = "rendered")
        }, " レンダリング結果 ", 2),
        g("button", {
          class: Fe(["zero-code-data-tab-button", { active: t.value === "source" }]),
          onClick: b[1] || (b[1] = (d) => t.value = "source")
        }, " HTMLソース ", 2)
      ]),
      g("div", gl, [
        t.value === "rendered" ? (D(), N("div", {
          key: 0,
          innerHTML: f()
        }, null, 8, hl)) : Y("", !0),
        t.value === "source" ? (D(), N("div", vl, [
          b[2] || (b[2] = g("div", { class: "zero-code-source-header" }, [
            g("p", { class: "zero-code-source-description" }, "パーツごとに改行・インデントされたHTMLソース")
          ], -1)),
          g("pre", yl, [
            g("code", null, B(r(f())), 1)
          ])
        ])) : Y("", !0)
      ])
    ]));
  }
}), $l = { class: "zero-code-tab-content" }, wl = /* @__PURE__ */ _e({
  __name: "PreviewPanel",
  props: {
    editablePageData: { type: Array },
    localParts: { type: Array },
    parts: { type: Array }
  },
  setup(e) {
    return (o, t) => (D(), N("div", $l, [
      gt(bl, {
        "page-data": o.editablePageData,
        parts: o.localParts && o.localParts.length > 0 ? o.localParts : o.parts || []
      }, null, 8, ["page-data", "parts"])
    ]));
  }
}), zl = { class: "zero-code-modal-header" }, Al = { class: "zero-code-modal-body" }, Pl = { class: "zero-code-img-file-input-section" }, El = {
  key: 0,
  class: "zero-code-img-file-info"
}, _l = { class: "zero-code-img-file-preview" }, Cl = ["src"], Sl = { class: "zero-code-img-file-details" }, Il = { class: "zero-code-form-section" }, Tl = { class: "zero-code-form-group" }, Dl = ["disabled"], Nl = { class: "zero-code-form-group" }, kl = ["disabled"], Ml = {
  key: 0,
  class: "zero-code-form-group"
}, Ol = ["disabled"], Fl = { class: "zero-code-modal-footer" }, Rl = ["disabled"], Ll = /* @__PURE__ */ _e({
  __name: "ImageUploadModal",
  props: {
    category: { type: String },
    componentId: { type: String }
  },
  emits: ["close", "upload"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = re(null), f = re(""), v = re(""), l = re(""), m = re(t.componentId || ""), E = de(() => n.value && v.value.trim() && l.value.trim()), A = (i) => {
      const c = i.target;
      c.files && c.files[0] && P(c.files[0]);
    }, w = (i) => {
      i.preventDefault(), i.dataTransfer && i.dataTransfer.files[0] && P(i.dataTransfer.files[0]);
    }, P = (i) => {
      n.value = i, v.value = i.name.replace(/\.[^/.]+$/, ""), l.value = i.name, f.value && URL.revokeObjectURL(f.value), f.value = URL.createObjectURL(i);
    }, b = (i) => new Promise((c, u) => {
      const y = new FileReader();
      y.readAsDataURL(i), y.onload = () => c(y.result), y.onerror = (z) => u(z);
    }), d = () => Date.now().toString(36) + Math.random().toString(36).substr(2), s = (i) => {
      if (i === 0) return "0 Bytes";
      const c = 1024, u = ["Bytes", "KB", "MB", "GB"], y = Math.floor(Math.log(i) / Math.log(c));
      return parseFloat((i / Math.pow(c, y)).toFixed(2)) + " " + u[y];
    }, p = async () => {
      if (!(!n.value || !E.value))
        try {
          const i = await b(n.value), c = {
            id: d(),
            name: v.value,
            originalName: n.value.name,
            url: i,
            // Base64データをURLとして使用
            alt: l.value,
            size: n.value.size,
            type: n.value.type,
            uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
            category: t.category,
            componentId: t.category === "individual" ? m.value : void 0,
            fileData: {
              base64: i
            }
          };
          r("upload", c);
        } catch {
          alert("画像のアップロードに失敗しました。");
        }
    };
    return Do(() => {
      f.value && URL.revokeObjectURL(f.value);
    }), (i, c) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: c[8] || (c[8] = (u) => i.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-modal-content",
        onClick: c[7] || (c[7] = Be(() => {
        }, ["stop"]))
      }, [
        g("div", zl, [
          g("h4", null, "画像アップロード（" + B(i.category === "common" ? "共通" : "個別") + "）", 1),
          g("button", {
            class: "zero-code-img-close-btn",
            onClick: c[0] || (c[0] = (u) => i.$emit("close"))
          }, "×")
        ]),
        g("div", Al, [
          g("div", Pl, [
            c[9] || (c[9] = g("label", {
              for: "file-input",
              class: "zero-code-img-file-input-label"
            }, [
              g("div", { class: "zero-code-img-file-input-area" }, [
                g("span", { class: "zero-code-img-file-input-text" }, "クリックしてファイルを選択"),
                g("span", { class: "zero-code-img-file-input-hint" }, "またはドラッグ&ドロップ")
              ])
            ], -1)),
            g("input", {
              id: "file-input",
              type: "file",
              accept: "image/*",
              style: { display: "none" },
              onChange: A,
              onDrop: w,
              onDragover: c[1] || (c[1] = Be(() => {
              }, ["prevent"])),
              onDragenter: c[2] || (c[2] = Be(() => {
              }, ["prevent"]))
            }, null, 32)
          ]),
          n.value ? (D(), N("div", El, [
            g("div", _l, [
              g("img", {
                src: f.value,
                alt: "プレビュー"
              }, null, 8, Cl)
            ]),
            g("div", Sl, [
              g("p", null, [
                c[10] || (c[10] = g("strong", null, "ファイル名:", -1)),
                Ut(" " + B(n.value.name), 1)
              ]),
              g("p", null, [
                c[11] || (c[11] = g("strong", null, "サイズ:", -1)),
                Ut(" " + B(s(n.value.size)), 1)
              ]),
              g("p", null, [
                c[12] || (c[12] = g("strong", null, "タイプ:", -1)),
                Ut(" " + B(n.value.type), 1)
              ])
            ])
          ])) : Y("", !0),
          g("div", Il, [
            g("div", Tl, [
              c[13] || (c[13] = g("label", { for: "image-name" }, "保存名:", -1)),
              Oe(g("input", {
                id: "image-name",
                "onUpdate:modelValue": c[3] || (c[3] = (u) => v.value = u),
                type: "text",
                placeholder: "画像の保存名を入力",
                disabled: !n.value
              }, null, 8, Dl), [
                [We, v.value]
              ])
            ]),
            g("div", Nl, [
              c[14] || (c[14] = g("label", { for: "image-alt" }, "alt属性:", -1)),
              Oe(g("input", {
                id: "image-alt",
                "onUpdate:modelValue": c[4] || (c[4] = (u) => l.value = u),
                type: "text",
                placeholder: "画像の説明を入力",
                disabled: !n.value
              }, null, 8, kl), [
                [We, l.value]
              ])
            ]),
            i.category === "individual" ? (D(), N("div", Ml, [
              c[15] || (c[15] = g("label", { for: "component-id" }, "コンポーネントID:", -1)),
              Oe(g("input", {
                id: "component-id",
                "onUpdate:modelValue": c[5] || (c[5] = (u) => m.value = u),
                type: "text",
                placeholder: "コンポーネントIDを入力",
                disabled: !n.value
              }, null, 8, Ol), [
                [We, m.value]
              ])
            ])) : Y("", !0)
          ])
        ]),
        g("div", Fl, [
          g("button", {
            class: "zero-code-img-btn zero-code-img-btn-secondary",
            onClick: c[6] || (c[6] = (u) => i.$emit("close"))
          }, "キャンセル"),
          g("button", {
            class: "zero-code-img-btn zero-code-img-btn-primary",
            disabled: !E.value,
            onClick: p
          }, " アップロード ", 8, Rl)
        ])
      ])
    ]));
  }
}), xl = { class: "zero-code-modal-header" }, Bl = { class: "zero-code-modal-body" }, Hl = { class: "zero-code-img-detail-preview" }, Vl = ["src", "alt"], Zl = { class: "zero-code-form-section" }, Ul = { class: "zero-code-form-group" }, jl = { class: "zero-code-form-group" }, Wl = {
  key: 0,
  class: "zero-code-form-group"
}, Xl = { class: "zero-code-img-detail-info" }, Yl = { class: "zero-code-img-detail-info-group" }, Kl = { class: "zero-code-img-detail-info-group" }, Jl = { class: "zero-code-img-detail-info-group" }, ql = { class: "zero-code-img-detail-info-group" }, Gl = { class: "zero-code-img-detail-info-group" }, Ql = { class: "zero-code-img-detail-url-group" }, ed = { class: "zero-code-modal-footer" }, td = { class: "zero-code-modal-footer-right" }, od = /* @__PURE__ */ _e({
  __name: "ImageDetailModal",
  props: {
    image: { type: Object }
  },
  emits: ["close", "delete", "replace"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = ao({ ...t.image }), f = re(null), v = () => {
      confirm("この画像を削除しますか？この操作は取り消せません。") && r("delete", n.id);
    }, l = () => {
      f.value && f.value.click();
    }, m = async (b) => {
      const d = b.target;
      if (!d.files || !d.files[0]) return;
      const s = d.files[0];
      if (!confirm(`画像を "${s.name}" に差し替えますか？この操作は取り消せません。`)) {
        d.value = "";
        return;
      }
      try {
        const p = await E(s), a = {
          ...n,
          originalName: s.name,
          url: p,
          size: s.size,
          type: s.type,
          uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          fileData: {
            base64: p
          }
        };
        r("replace", n.id, a);
      } catch {
        alert("画像の差し替えに失敗しました。");
      } finally {
        d.value = "";
      }
    }, E = (b) => new Promise((d, s) => {
      const p = new FileReader();
      p.readAsDataURL(b), p.onload = () => d(p.result), p.onerror = (a) => s(a);
    }), A = async (b) => {
      try {
        await navigator.clipboard.writeText(b), alert("URLをクリップボードにコピーしました");
      } catch {
        const s = document.createElement("textarea");
        s.value = b, document.body.appendChild(s), s.select(), document.execCommand("copy"), document.body.removeChild(s), alert("URLをクリップボードにコピーしました");
      }
    }, w = (b) => {
      if (b === 0) return "0 Bytes";
      const d = 1024, s = ["Bytes", "KB", "MB", "GB"], p = Math.floor(Math.log(b) / Math.log(d));
      return parseFloat((b / Math.pow(d, p)).toFixed(2)) + " " + s[p];
    }, P = (b) => new Date(b).toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    return (b, d) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: d[8] || (d[8] = (s) => b.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-modal-content",
        onClick: d[7] || (d[7] = Be(() => {
        }, ["stop"]))
      }, [
        g("div", xl, [
          d[9] || (d[9] = g("h4", null, "画像詳細", -1)),
          g("button", {
            class: "zero-code-close-button",
            onClick: d[0] || (d[0] = (s) => b.$emit("close"))
          }, "✖️")
        ]),
        g("div", Bl, [
          g("div", Hl, [
            g("img", {
              src: n.url,
              alt: n.alt
            }, null, 8, Vl)
          ]),
          g("div", Zl, [
            g("div", Ul, [
              d[10] || (d[10] = g("label", { for: "detail-image-name" }, "ファイル名:", -1)),
              Oe(g("input", {
                id: "detail-image-name",
                "onUpdate:modelValue": d[1] || (d[1] = (s) => n.name = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [We, n.name]
              ])
            ]),
            g("div", jl, [
              d[11] || (d[11] = g("label", { for: "detail-image-alt" }, "alt属性:", -1)),
              Oe(g("input", {
                id: "detail-image-alt",
                "onUpdate:modelValue": d[2] || (d[2] = (s) => n.alt = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [We, n.alt]
              ])
            ]),
            n.componentId ? (D(), N("div", Wl, [
              d[12] || (d[12] = g("label", { for: "detail-component-id" }, "コンポーネントID:", -1)),
              Oe(g("input", {
                id: "detail-component-id",
                "onUpdate:modelValue": d[3] || (d[3] = (s) => n.componentId = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [We, n.componentId]
              ])
            ])) : Y("", !0),
            g("div", Xl, [
              g("div", Yl, [
                d[13] || (d[13] = g("label", null, "カテゴリ:", -1)),
                g("span", {
                  class: Fe(["zero-code-img-detail-category", n.category])
                }, B(n.category === "common" ? "共通画像" : "個別画像"), 3)
              ]),
              g("div", Kl, [
                d[14] || (d[14] = g("label", null, "ファイルサイズ:", -1)),
                g("span", null, B(w(n.size)), 1)
              ]),
              g("div", Jl, [
                d[15] || (d[15] = g("label", null, "ファイルタイプ:", -1)),
                g("span", null, B(n.type), 1)
              ]),
              g("div", ql, [
                d[16] || (d[16] = g("label", null, "アップロード日時:", -1)),
                g("span", null, B(P(n.uploadedAt)), 1)
              ]),
              g("div", Gl, [
                d[17] || (d[17] = g("label", null, "画像URL:", -1)),
                g("div", Ql, [
                  Oe(g("input", {
                    "onUpdate:modelValue": d[4] || (d[4] = (s) => n.url = s),
                    type: "text",
                    readonly: "",
                    class: "zero-code-img-detail-url-input"
                  }, null, 512), [
                    [We, n.url]
                  ]),
                  g("button", {
                    class: "zero-code-btn zero-code-btn-secondary zero-code-copy-btn",
                    title: "URLをコピー",
                    onClick: d[5] || (d[5] = (s) => A(n.url))
                  }, " 📋 ")
                ])
              ])
            ])
          ])
        ]),
        g("div", ed, [
          g("div", { class: "zero-code-modal-footer-left" }, [
            g("button", {
              class: "zero-code-btn zero-code-btn-danger",
              onClick: v
            }, " 削除 "),
            g("button", {
              class: "zero-code-btn zero-code-btn-primary",
              onClick: l
            }, " 差し替え ")
          ]),
          g("div", td, [
            g("button", {
              class: "zero-code-btn zero-code-btn-secondary",
              onClick: d[6] || (d[6] = (s) => b.$emit("close"))
            }, " 閉じる ")
          ]),
          g("input", {
            ref_key: "fileInputRef",
            ref: f,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: m
          }, null, 544)
        ])
      ])
    ]));
  }
}), rd = { class: "zero-code-tab-content" }, nd = { class: "zero-code-data-tabs" }, ad = ["onClick"], sd = { class: "zero-code-image-content" }, id = {
  key: 0,
  class: "zero-code-image-section"
}, ld = { class: "zero-code-section-header" }, dd = { class: "zero-code-img-grid" }, cd = ["onClick"], ud = ["src", "alt"], pd = { class: "zero-code-img-info" }, fd = { class: "zero-code-img-name" }, md = { class: "zero-code-img-size" }, gd = ["onClick"], hd = {
  key: 0,
  class: "zero-code-empty-state"
}, vd = {
  key: 1,
  class: "zero-code-image-section"
}, yd = { class: "zero-code-section-header" }, bd = { class: "zero-code-img-grid" }, $d = ["onClick"], wd = ["src", "alt"], zd = { class: "zero-code-img-info" }, Ad = { class: "zero-code-img-name" }, Pd = { class: "zero-code-img-size" }, Ed = ["onClick"], _d = {
  key: 0,
  class: "zero-code-empty-state"
}, Cd = { class: "zero-code-debug-info" }, Sd = /* @__PURE__ */ _e({
  __name: "ImageManagementPanel",
  props: {
    commonImages: { type: Array },
    individualImages: { type: Array }
  },
  emits: ["updateCommonImages", "updateIndividualImages", "sendCommonImagesData", "sendIndividualImagesData"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = re("common"), f = re(!1), v = re(!1), l = re("common"), m = re(null), E = de(() => t.commonImages.length + t.individualImages.length), A = ["common", "individual"], w = (y) => ({
      common: "共通画像",
      individual: "個別画像"
    })[y], P = (y) => {
      if (y === 0) return "0 Bytes";
      const z = 1024, C = ["Bytes", "KB", "MB", "GB"], h = Math.floor(Math.log(y) / Math.log(z));
      return parseFloat((y / Math.pow(z, h)).toFixed(2)) + " " + C[h];
    }, b = (y) => {
      l.value = y, f.value = !0;
    }, d = () => {
      f.value = !1;
    }, s = (y) => {
      m.value = y, v.value = !0;
    }, p = () => {
      v.value = !1, m.value = null;
    }, a = (y) => {
      if (l.value === "common") {
        const z = [...t.commonImages, y];
        r("updateCommonImages", z);
      } else {
        const z = [...t.individualImages, y];
        r("updateIndividualImages", z);
      }
      d();
    }, i = (y) => {
      if (!m.value) return;
      if (m.value.category === "common") {
        const C = t.commonImages.filter((h) => h.id !== y);
        r("updateCommonImages", C);
      } else {
        const C = t.individualImages.filter((h) => h.id !== y);
        r("updateIndividualImages", C);
      }
      p();
    }, c = (y, z) => {
      if (z.category === "common") {
        const h = t.commonImages.map(
          ($) => $.id === y ? z : $
        );
        r("updateCommonImages", h);
      } else {
        const h = t.individualImages.map(
          ($) => $.id === y ? z : $
        );
        r("updateIndividualImages", h);
      }
      p();
    }, u = (y, z) => {
      if (confirm("この画像を削除しますか？"))
        if (z === "common") {
          const C = t.commonImages.filter((h) => h.id !== y);
          r("updateCommonImages", C);
        } else {
          const C = t.individualImages.filter((h) => h.id !== y);
          r("updateIndividualImages", C);
        }
    };
    return (y, z) => (D(), N("div", rd, [
      g("div", nd, [
        (D(), N(ee, null, ne(A, (C) => g("button", {
          key: C,
          class: Fe(["zero-code-data-tab-button", { active: n.value === C }]),
          onClick: (h) => n.value = C
        }, B(w(C)), 11, ad)), 64))
      ]),
      g("div", sd, [
        n.value === "common" ? (D(), N("div", id, [
          g("div", ld, [
            g("h4", null, "共通画像 (" + B(y.commonImages.length) + "件)", 1),
            g("button", {
              class: "zero-code-img-upload-btn common",
              onClick: z[0] || (z[0] = (C) => b("common"))
            }, " 共通画像をアップロード ")
          ]),
          g("div", dd, [
            (D(!0), N(ee, null, ne(y.commonImages, (C) => (D(), N("div", {
              key: C.id,
              class: "zero-code-img-item",
              onClick: (h) => s(C)
            }, [
              g("img", {
                src: C.url,
                alt: C.alt
              }, null, 8, ud),
              g("div", pd, [
                g("p", fd, B(C.name), 1),
                g("p", md, B(P(C.size)), 1)
              ]),
              g("button", {
                class: "zero-code-img-delete-btn",
                onClick: Be((h) => u(C.id, "common"), ["stop"])
              }, " 削除 ", 8, gd)
            ], 8, cd))), 128))
          ]),
          y.commonImages.length === 0 ? (D(), N("div", hd, z[2] || (z[2] = [
            g("p", null, "共通画像が登録されていません。", -1)
          ]))) : Y("", !0)
        ])) : Y("", !0),
        n.value === "individual" ? (D(), N("div", vd, [
          g("div", yd, [
            g("h4", null, "個別画像 (" + B(y.individualImages.length) + "件)", 1),
            g("button", {
              class: "zero-code-img-upload-btn individual",
              onClick: z[1] || (z[1] = (C) => b("individual"))
            }, " 個別画像をアップロード ")
          ]),
          g("div", bd, [
            (D(!0), N(ee, null, ne(y.individualImages, (C) => (D(), N("div", {
              key: C.id,
              class: "zero-code-img-item",
              onClick: (h) => s(C)
            }, [
              g("img", {
                src: C.url,
                alt: C.alt
              }, null, 8, wd),
              g("div", zd, [
                g("p", Ad, B(C.name), 1),
                g("p", Pd, B(P(C.size)), 1)
              ]),
              g("button", {
                class: "zero-code-img-delete-btn",
                onClick: Be((h) => u(C.id, "individual"), ["stop"])
              }, " 削除 ", 8, Ed)
            ], 8, $d))), 128))
          ]),
          y.individualImages.length === 0 ? (D(), N("div", _d, z[3] || (z[3] = [
            g("p", null, "個別画像が登録されていません。", -1)
          ]))) : Y("", !0)
        ])) : Y("", !0)
      ]),
      g("div", Cd, [
        z[4] || (z[4] = g("strong", null, "🔍 デバッグ情報:", -1)),
        Ut(" 共通画像: " + B(y.commonImages.length) + "件, 個別画像: " + B(y.individualImages.length) + "件, 合計: " + B(E.value) + "件 ", 1),
        z[5] || (z[5] = g("br", null, null, -1))
      ]),
      f.value ? (D(), xe(Ll, {
        key: 0,
        category: l.value,
        onClose: d,
        onUpload: a
      }, null, 8, ["category"])) : Y("", !0),
      v.value && m.value ? (D(), xe(od, {
        key: 1,
        image: m.value,
        onClose: p,
        onDelete: i,
        onReplace: c
      }, null, 8, ["image"])) : Y("", !0)
    ]));
  }
});
function Id() {
  const e = re("editor"), o = (m) => {
    e.value !== m && (I.info(`🔄 タブ切り替え: ${e.value} → ${m}`), e.value = m);
  };
  return {
    // 状態
    activeTab: e,
    availableTabs: ["editor", "parts", "preview", "images"],
    // メソッド
    switchToTab: o,
    isActiveTab: (m) => e.value === m,
    showEditor: () => {
      o("editor");
    },
    showPartsManager: () => {
      o("parts");
    },
    showPreview: () => {
      o("preview");
    },
    showImageManager: () => {
      o("images");
    }
  };
}
function Td(e) {
  const o = ao({
    // データ管理
    editablePageData: [],
    localParts: [],
    localCommonParts: [],
    localIndividualParts: [],
    // UI状態
    activeTab: "editor",
    dataTab: "rendered",
    showEditor: !1,
    showPartSelector: !1,
    showNestedPartSelector: !1,
    // 編集状態
    selectedComponent: null,
    selectedComponentIndex: null,
    editingText: null,
    // 位置情報
    insertPosition: 0,
    nestedInsertPath: "",
    nestedInsertPosition: 0
  }), t = {
    // 現在選択されているコンポーネントのインデックス
    currentComponentIndex: de(() => o.selectedComponentIndex === null ? -1 : typeof o.selectedComponentIndex == "number" ? o.selectedComponentIndex : parseInt(o.selectedComponentIndex.toString())),
    // 編集可能なページデータの長さ
    pageDataLength: de(() => o.editablePageData.length),
    // 選択されたコンポーネントが存在するかどうか
    hasSelectedComponent: de(() => o.selectedComponent !== null),
    // 現在編集中かどうか
    isEditing: de(() => o.showEditor && o.selectedComponent !== null),
    // Tiptap編集中かどうか
    isTiptapEditing: de(() => o.editingText !== null)
  }, r = {
    switchToTab: (l) => {
      o.activeTab = l, o.dataTab = "rendered";
    },
    setDataTab: (l) => {
      o.dataTab = l;
    }
  }, n = {
    openEditor: (l, m) => {
      o.selectedComponent = l, o.selectedComponentIndex = m, o.showEditor = !0;
    },
    closeEditor: () => {
      o.showEditor = !1, o.selectedComponent = null, o.selectedComponentIndex = null;
    },
    openPartSelector: (l) => {
      o.insertPosition = l, o.showPartSelector = !0;
    },
    closePartSelector: () => {
      o.showPartSelector = !1;
    },
    openNestedPartSelector: (l, m) => {
      o.nestedInsertPath = l, o.nestedInsertPosition = m, o.showNestedPartSelector = !0;
    },
    closeNestedPartSelector: () => {
      o.showNestedPartSelector = !1;
    }
  }, f = {
    startTiptapEdit: (l, m, E = [], A = 0, w, P) => {
      o.editingText = {
        componentId: l,
        paramName: m,
        hierarchyPath: E,
        depth: A,
        arrayName: w,
        itemIndex: P
      };
    },
    stopTiptapEdit: () => {
      o.editingText = null;
    }
  }, v = () => {
    o.editablePageData = Array.isArray(e.page) ? [...e.page] : [], o.localParts = Array.isArray(e.parts) ? [...e.parts] : [], o.localCommonParts = Array.isArray(e.commonParts) ? [...e.commonParts] : [], o.localIndividualParts = Array.isArray(e.individualParts) ? [...e.individualParts] : [];
  };
  return je(
    () => e.page,
    (l) => {
      Array.isArray(l) && (o.editablePageData = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), je(
    () => e.parts,
    (l) => {
      Array.isArray(l) && (o.localParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), je(
    () => e.commonParts,
    (l) => {
      Array.isArray(l) && (o.localCommonParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), je(
    () => e.individualParts,
    (l) => {
      Array.isArray(l) && (o.localIndividualParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), v(), {
    // 状態
    ...pr(o),
    // 計算プロパティ
    ...t,
    // アクション
    ...r,
    ...n,
    ...f,
    // 初期化
    initializeData: v
  };
}
function Dd() {
  const e = (l) => l.includes("url") || l.includes("src") || l.includes("link") ? "url" : l.includes("email") ? "email" : l.includes("number") || l.includes("count") ? "number" : l.includes("date") ? "date" : l.includes("time") ? "time" : l.includes("password") ? "password" : l.includes("tel") || l.includes("phone") ? "tel" : "text";
  return {
    // 基本ユーティリティ
    getInputType: e,
    formatFileSize: (l) => {
      if (l === 0) return "0 Bytes";
      const m = 1024, E = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(l) / Math.log(m));
      return parseFloat((l / Math.pow(m, A)).toFixed(2)) + " " + E[A];
    },
    // 各種操作
    component: {
      // 階層パスでコンポーネントを検索
      findComponentByPath: (l, m) => {
        let E = l, A = null;
        for (let w = 0; w < m.length; w++) {
          const P = m[w];
          if (P >= 0 && P < E.length)
            A = E[P], w < m.length - 1 && (E = A.nested_parts || []);
          else
            return null;
        }
        return A;
      },
      // 新規コンポーネント作成
      createNewComponent: (l, m) => ({
        id: `comp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        type: l,
        module_name: m,
        nested_parts: []
      }),
      // コンポーネント削除
      deleteComponent: (l, m) => l.filter((E, A) => A !== m),
      // コンポーネント複製
      duplicateComponent: (l) => {
        const m = `comp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        return {
          ...JSON.parse(JSON.stringify(l)),
          id: m
        };
      },
      // 配列アイテム追加
      addArrayItem: (l, m) => {
        l[m] || (l[m] = []);
        const E = l[m], A = { id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 11)}` };
        E.push(A);
      },
      // 配列アイテム削除
      removeArrayItem: (l, m, E) => {
        const A = l[m];
        Array.isArray(A) && E >= 0 && E < A.length && A.splice(E, 1);
      }
    },
    template: {
      // テンプレート取得
      getTemplate: (l, m, E) => {
        const A = E.find((P) => P.type === l);
        if (!A) return "";
        const w = A.module.find((P) => P.title === m);
        return (w == null ? void 0 : w.body) || "";
      },
      // テンプレート内のフィールド抽出
      extractFields: (l) => {
        const m = [];
        return [
          /\{\$([^:}]+):/g,
          // {$field:default}
          /\(\$([^:}]+):/g,
          // ($field:option1|option2)
          /\(\$([^?}]+)\?:/g
          // ($field?:option1|option2)
        ].forEach((A) => {
          let w;
          for (; (w = A.exec(l)) !== null; ) {
            const P = w[1];
            m.includes(P) || m.push(P);
          }
        }), m;
      },
      // テンプレート内のスロット抽出
      extractSlots: (l) => {
        const m = [], E = /@slot\(\$([^)]+)\)@/g;
        let A;
        for (; (A = E.exec(l)) !== null; ) {
          const w = A[1];
          m.includes(w) || m.push(w);
        }
        return m;
      }
    },
    array: {
      // 配列アイテム追加
      addArrayItem: (l, m) => [...l, m],
      // 配列アイテム削除
      removeArrayItem: (l, m) => l.filter((E, A) => A !== m),
      // 配列アイテム更新
      updateArrayItem: (l, m, E) => l.map((A, w) => w === m ? E : A),
      // 配列アイテム移動
      moveArrayItem: (l, m, E) => {
        const A = [...l], [w] = A.splice(m, 1);
        return A.splice(E, 0, w), A;
      }
    },
    field: {
      // フィールド値取得
      getFieldValue: (l, m) => l[m] || "",
      // フィールド値設定
      setFieldValue: (l, m, E) => ({
        ...l,
        [m]: E
      }),
      // フィールド値検証
      validateField: (l, m) => {
        switch (e(l)) {
          case "email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
          case "url":
            try {
              return new URL(m), !0;
            } catch {
              return !1;
            }
          case "number":
            return !isNaN(Number(m));
          default:
            return !0;
        }
      }
    },
    string: {
      // 階層パスを文字列に変換
      stringifyHierarchyPath: (l) => l.join("."),
      // 文字列を階層パスに変換（エラーハンドリング強化）
      parseHierarchyPath: (l) => {
        if (!l || typeof l != "string")
          return [];
        try {
          const m = l.split("."), E = [];
          for (const A of m) {
            const w = A.trim();
            if (w === "") continue;
            const P = parseInt(w, 10);
            if (!isNaN(P) && P >= 0)
              E.push(P);
            else
              return [];
          }
          return E;
        } catch {
          return [];
        }
      },
      // キャメルケースをケバブケースに変換
      camelToKebab: (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
      // ケバブケースをキャメルケースに変換
      kebabToCamel: (l) => l.replace(/-([a-z])/g, (m, E) => E.toUpperCase())
    }
  };
}
function Nd() {
  let e = null;
  const o = (u) => {
    if (!u || typeof u != "string" || u.trim() === "")
      return "<p></p>";
    const y = ["p", "strong", "em", "u", "s", "a", "span", "br"], z = ["href", "target", "style"], C = document.createElement("div");
    C.innerHTML = u;
    const h = (_) => {
      const S = _.tagName.toLowerCase();
      if (!y.includes(S)) {
        const T = _.parentNode;
        if (T) {
          for (; _.firstChild; )
            T.insertBefore(_.firstChild, _);
          T.removeChild(_);
        }
        return;
      }
      Array.from(_.attributes).forEach((T) => {
        z.includes(T.name.toLowerCase()) || _.removeAttribute(T.name);
      }), Array.from(_.children).forEach((T) => {
        h(T);
      });
    };
    Array.from(C.children).forEach((_) => {
      h(_);
    });
    let $ = C.innerHTML;
    return $ = $.replace(/<p>\s*<\/p>/g, "<p><br></p>").replace(/<p>\s*<br>\s*<\/p>/g, "<p><br></p>").replace(/(<\w+>)\s*(<\/\w+>)/g, "$1<br>$2"), $.includes("<") || ($ = `<p>${$}</p>`), (!$ || $.trim() === "") && ($ = "<p><br></p>"), $;
  }, t = () => {
    const u = window.getSelection();
    if (!u || u.rangeCount === 0) return { selection: null, range: null };
    const y = u.getRangeAt(0);
    return e != null && e.contains(y.commonAncestorContainer) ? { selection: u, range: y } : { selection: null, range: null };
  }, r = (u, y) => {
    const z = document.createElement(u);
    return y && Object.entries(y).forEach(([C, h]) => {
      z.setAttribute(C, h);
    }), z;
  }, n = (u, y) => {
    try {
      u.surroundContents(y);
    } catch {
      const z = u.extractContents();
      y.appendChild(z), u.insertNode(y);
    }
  }, f = (u, y, z) => {
    const C = r(y, z);
    n(u, C);
  }, v = (u, y) => {
    const z = document.createElement("span");
    Object.assign(z.style, y), n(u, z);
  }, l = (u, y) => {
    if (!u.collapsed) return;
    const z = document.createTextNode("テキスト");
    u.insertNode(z), u.selectNodeContents(z), y.removeAllRanges(), y.addRange(u);
  }, m = (u) => {
    const { selection: y, range: z } = t();
    if (!y || !z) return;
    let C = z.commonAncestorContainer;
    C.nodeType === Node.TEXT_NODE && (C = C.parentElement || C);
    const h = C.closest("p");
    if (h) {
      const $ = {
        left: "left",
        center: "center",
        right: "right"
      };
      h.style.textAlign = $[u];
    }
  }, E = (u, y) => {
    if (!e)
      return;
    e.focus();
    const { selection: z, range: C } = t();
    if (!z || !C)
      return;
    l(C, z);
    const h = {
      bold: () => f(C, "strong"),
      italic: () => f(C, "em"),
      underline: () => f(C, "u"),
      strikeThrough: () => f(C, "s"),
      justifyLeft: () => m("left"),
      justifyCenter: () => m("center"),
      justifyRight: () => m("right"),
      createLink: () => y && f(C, "a", { href: y, target: "_blank" }),
      backColor: () => y && v(C, { backgroundColor: y })
    };
    try {
      const $ = h[u];
      $ && $();
    } catch {
      try {
        document.execCommand(u, !1, y);
      } catch {
      }
    }
  }, A = (u, y) => {
    if (!e) return;
    e.focus();
    const z = window.getSelection();
    if (z != null && z.rangeCount && e.contains(z.getRangeAt(0).commonAncestorContainer)) {
      const C = z.getRangeAt(0);
      z.removeAllRanges(), z.addRange(C);
    }
    E(u, y);
  }, w = {
    toggleBold: () => A("bold"),
    toggleItalic: () => A("italic"),
    toggleUnderline: () => A("underline"),
    toggleStrike: () => A("strikeThrough"),
    alignLeft: () => A("justifyLeft"),
    alignCenter: () => A("justifyCenter"),
    alignRight: () => A("justifyRight"),
    setLink: () => {
      const u = window.prompt("URLを入力してください:");
      u && A("createLink", u);
    },
    isActive: (u) => {
      var h;
      if (!e) return !1;
      const y = window.getSelection();
      if (!(y != null && y.rangeCount)) return !1;
      const z = y.getRangeAt(0);
      if (!e.contains(z.commonAncestorContainer)) return !1;
      const C = {
        bold: () => P("strong"),
        italic: () => P("em"),
        underline: () => P("u"),
        strike: () => P("s")
      };
      return ((h = C[u]) == null ? void 0 : h.call(C)) ?? !1;
    }
  }, P = (u) => {
    const { selection: y, range: z } = t();
    if (!y || !z) return !1;
    let C = z.commonAncestorContainer;
    for (C.nodeType === window.Node.TEXT_NODE && (C = C.parentElement || C); C && C !== e; ) {
      if (C.nodeType === window.Node.ELEMENT_NODE && C.tagName.toLowerCase() === u.toLowerCase())
        return !0;
      C = C.parentElement;
    }
    return !1;
  }, b = () => `
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
  `, d = (u) => {
    Object.entries({
      "data-gramm": "false",
      spellcheck: "false",
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off"
    }).forEach(([z, C]) => {
      u.setAttribute(z, C);
    });
  }, s = (u, y) => {
    let z = null, C = null;
    u.addEventListener("focus", () => {
      u.style.borderColor = "#3b82f6", u.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1), 0 1px 3px rgba(0,0,0,0.1)";
    }), u.addEventListener("blur", () => {
      u.style.borderColor = "#3b82f6", u.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)";
    }), u.addEventListener("keydown", ($) => {
      var _;
      if ($.key === "Enter" && !$.shiftKey) {
        $.preventDefault();
        const S = window.getSelection();
        if (!(S != null && S.rangeCount)) return;
        const T = S.getRangeAt(0), M = T.startContainer;
        let L = null;
        if (M.nodeType === window.Node.TEXT_NODE ? L = ((_ = M.parentElement) == null ? void 0 : _.closest("p")) || null : M.nodeType === window.Node.ELEMENT_NODE && (L = M.closest("p") || null), L) {
          const k = document.createElement("p");
          k.innerHTML = "<br>", L.insertAdjacentElement("afterend", k);
          const F = document.createRange();
          F.setStart(k, 0), F.setEnd(k, 0), S.removeAllRanges(), S.addRange(F);
        } else {
          const k = document.createElement("p");
          k.innerHTML = "<br>", T.deleteContents(), T.insertNode(k);
          const F = document.createRange();
          F.setStart(k, 0), F.setEnd(k, 0), S.removeAllRanges(), S.addRange(F);
        }
        u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }
    }), u.addEventListener("input", () => {
      z && window.clearTimeout(z), z = window.setTimeout(() => {
        const $ = o(u.innerHTML);
        if ($ !== u.innerHTML) {
          const _ = window.getSelection();
          let S = null;
          if (_ && _.rangeCount > 0 && (S = _.getRangeAt(0).cloneRange()), u.innerHTML = $, S && _)
            try {
              _.removeAllRanges(), _.addRange(S);
            } catch {
              const M = document.createRange();
              M.selectNodeContents(u), M.collapse(!1), _.removeAllRanges(), _.addRange(M);
            }
        }
        y == null || y(u.innerHTML);
      }, 300);
    }), u.addEventListener("selectionchange", () => {
      try {
        u.dispatchEvent(new CustomEvent("selectionchange"));
      } catch {
      }
    });
    const h = new globalThis.MutationObserver(() => {
      C && window.clearTimeout(C), C = window.setTimeout(() => {
        y == null || y(u.innerHTML);
      }, 100);
    });
    return h.observe(u, { childList: !0, subtree: !0, characterData: !0 }), { saveTimeout: z, updateTimeout: C, observer: h };
  }, p = (u, y, z) => {
    const C = y.querySelector(".simple-editor-content");
    C && C.remove();
    const h = document.createElement("div");
    h.className = "simple-editor-content", h.contentEditable = "true";
    const $ = o(u);
    h.innerHTML = $, h.style.cssText = b(), d(h);
    const { saveTimeout: _, updateTimeout: S, observer: T } = s(h, z);
    return y.appendChild(h), e = h, {
      element: h,
      getHTML: () => h.innerHTML,
      setContent: (M) => h.innerHTML = M,
      destroy: () => {
        window.clearTimeout(_), window.clearTimeout(S), T.disconnect(), h.remove(), e = null;
      },
      isActive: (M) => w.isActive(M),
      isInitialized: !0,
      isDestroyed: !1,
      isFocused: !1,
      chain: () => ({
        focus: () => ({
          toggleMark: (M) => ({
            run: () => {
              var k;
              const L = {
                bold: w.toggleBold,
                italic: w.toggleItalic,
                underline: w.toggleUnderline,
                strike: w.toggleStrike
              };
              (k = L[M]) == null || k.call(L);
            }
          }),
          setTextAlign: (M) => ({
            run: () => {
              var k;
              const L = {
                left: w.alignLeft,
                center: w.alignCenter,
                right: w.alignRight
              };
              (k = L[M]) == null || k.call(L);
            }
          })
        })
      })
    };
  }, a = (u, y, z) => {
    try {
      return y.innerHTML = "", p(u, y, z);
    } catch (C) {
      throw C;
    }
  }, i = () => {
    if (e)
      try {
        e.remove(), e = null;
      } catch {
      }
  }, c = () => !!e;
  return Kr(() => i()), {
    initEditor: a,
    destroyEditor: i,
    getEditor: () => e,
    isEditorReady: c
  };
}
class kd {
  constructor() {
    _t(this, "events", /* @__PURE__ */ new Map());
    _t(this, "isEnabled", !0);
  }
  /**
   * イベントリスナーを登録
   */
  on(o, t) {
    this.events.has(o) || this.events.set(o, /* @__PURE__ */ new Set());
    const r = this.events.get(o);
    return r.add(t), I.debug(`EventBus: イベントリスナー登録 - ${o}`), () => {
      r.delete(t), I.debug(`EventBus: イベントリスナー削除 - ${o}`);
    };
  }
  /**
   * イベントを発火
   */
  emit(o, t) {
    if (!this.isEnabled) {
      I.warn(`EventBus: 無効化されているため ${o} イベントを無視`);
      return;
    }
    const r = this.events.get(o);
    if (!r || r.size === 0) {
      I.warn(`EventBus: ${o} イベントのリスナーが見つかりません`);
      return;
    }
    I.debug(`EventBus: ${o} イベントを発火`, t);
    const n = [];
    r.forEach((f) => {
      try {
        const v = f(t);
        v instanceof Promise && n.push(v);
      } catch (v) {
        I.error(`EventBus: ${o} イベントリスナーでエラー`, v);
      }
    }), n.length > 0 && Promise.allSettled(n).then((f) => {
      f.forEach((v, l) => {
        v.status === "rejected" && I.error(`EventBus: ${o} 非同期リスナー[${l}]でエラー`, v.reason);
      });
    });
  }
  /**
   * 特定イベントの全リスナーを削除
   */
  off(o) {
    this.events.delete(o), I.debug(`EventBus: ${o} の全リスナーを削除`);
  }
  /**
   * 全イベントリスナーをクリア
   */
  clear() {
    this.events.clear(), I.debug("EventBus: 全イベントリスナーをクリア");
  }
  /**
   * イベントバスを無効化（テスト時など）
   */
  disable() {
    this.isEnabled = !1, I.debug("EventBus: 無効化");
  }
  /**
   * イベントバスを有効化
   */
  enable() {
    this.isEnabled = !0, I.debug("EventBus: 有効化");
  }
  /**
   * 登録されているイベント数を取得（デバッグ用）
   */
  getListenerCount(o) {
    var r;
    if (o)
      return ((r = this.events.get(o)) == null ? void 0 : r.size) || 0;
    let t = 0;
    return this.events.forEach((n) => {
      t += n.size;
    }), t;
  }
}
const Ee = new kd(), Qe = {
  /**
   * 配列アイテム追加（レガシー）
   */
  addArrayItem: (e, o) => {
    Ee.emit("addArrayItem", { componentId: e, arrayKey: o });
  },
  /**
   * z-for配列アイテム追加
   */
  addZForArrayItem: (e, o, t) => {
    Ee.emit("addZForArrayItem", { componentId: e, arrayName: o, insertIndex: t });
  },
  /**
   * z-for配列アイテム削除
   */
  removeZForArrayItem: (e, o, t) => {
    Ee.emit("removeZForArrayItem", { componentId: e, arrayName: o, index: t });
  },
  /**
   * z-for配列アイテム並び替え
   */
  reorderZForArrayItem: (e, o, t, r) => {
    Ee.emit("reorderZForArrayItem", { componentId: e, arrayName: o, fromIndex: t, toIndex: r });
  },
  /**
   * z-for配列アイテム編集
   */
  editZForArrayItem: (e, o, t) => {
    Ee.emit("editZForArrayItem", { componentId: e, arrayName: o, index: t });
  },
  /**
   * ネストパーツ削除（レガシー）
   */
  deleteNestedPart: (e) => {
    Ee.emit("deleteNestedPart", { pathString: e });
  },
  /**
   * ネストエディター開く（レガシー）
   */
  openNestedEditor: (e) => {
    Ee.emit("openNestedEditor", { pathString: e });
  },
  /**
   * ネストパーツセレクター開く（レガシー）
   */
  openNestedPartSelector: (e, o) => {
    Ee.emit("openNestedPartSelector", { pathString: e, position: o });
  },
  /**
   * リッチテキスト編集開始（レガシー）
   */
  startRichTextEdit: (e, o, t) => Ee.emit("startRichTextEdit", { componentId: e, paramName: o, currentValue: t }),
  /**
   * 画像選択（レガシー）
   */
  selectImage: (e, o) => {
    Ee.emit("selectImage", { componentId: e, paramName: o });
  },
  /**
   * 画像アップロード（レガシー）
   */
  uploadImage: (e, o, t) => {
    Ee.emit("uploadImage", { file: e, category: o, componentId: t });
  }
};
function Md(e, o) {
  const t = Td(e), r = Dd(), n = Or(), f = Nd(), v = (d, s) => {
    for (const p of d) {
      if (p.id === s)
        return p;
      if (p.nested_parts && Array.isArray(p.nested_parts)) {
        const a = v(p.nested_parts, s);
        if (a) return a;
      }
      for (const [a, i] of Object.entries(p))
        if (Array.isArray(i) && a !== "nested_parts") {
          for (const c of i)
            if (c && typeof c == "object") {
              for (const [u, y] of Object.entries(c))
                if (Array.isArray(y)) {
                  const z = v(y, s);
                  if (z) return z;
                }
            }
        }
    }
    return null;
  }, l = (d, s, p) => {
    for (let a = 0; a < d.length; a++) {
      const i = d[a];
      if (i.id === s)
        return d[a] = p, !0;
      if (i.nested_parts && Array.isArray(i.nested_parts) && l(i.nested_parts, s, p))
        return !0;
      for (const [c, u] of Object.entries(i))
        if (Array.isArray(u) && c !== "nested_parts") {
          for (const y of u)
            if (y && typeof y == "object") {
              for (const [z, C] of Object.entries(y))
                if (Array.isArray(C) && l(C, s, p))
                  return !0;
            }
        }
    }
    return !1;
  }, m = (d, s) => {
    for (let p = 0; p < d.length; p++) {
      if (d[p].id === s)
        return d.splice(p, 1), !0;
      if (d[p].nested_parts && Array.isArray(d[p].nested_parts) && m(d[p].nested_parts, s))
        return !0;
      for (const [a, i] of Object.entries(d[p]))
        if (Array.isArray(i) && a !== "nested_parts") {
          for (const c of i)
            if (c && typeof c == "object") {
              for (const [u, y] of Object.entries(c))
                if (Array.isArray(y) && m(y, s))
                  return !0;
            }
        }
    }
    return !1;
  }, E = {
    // パーツ操作
    addPart: (d, s) => {
      const p = [...t.editablePageData.value];
      p.splice(s, 0, d), t.editablePageData.value = p, o("update:page", p);
    },
    deletePart: (d) => {
      if (window.confirm("このパーツを削除しますか？")) {
        const s = r.component.deleteComponent(t.editablePageData.value, d);
        t.editablePageData.value = s, o("update:page", s);
      }
    },
    duplicatePart: (d) => {
      const s = t.editablePageData.value[d];
      if (s) {
        const p = r.component.duplicateComponent(s), a = [...t.editablePageData.value];
        a.splice(d + 1, 0, p), t.editablePageData.value = a, o("update:page", a);
      }
    },
    // 並べ替え操作
    reorderParts: (d) => {
      t.editablePageData.value = d, o("update:page", d);
    },
    movePart: (d, s) => {
      const p = [...t.editablePageData.value], [a] = p.splice(d, 1);
      p.splice(s, 0, a), t.editablePageData.value = p, o("update:page", p);
    },
    // ネストパーツの並べ替え操作（リアクティブ対応）
    reorderNestedParts: (d, s) => {
      const p = r.string.parseHierarchyPath(d), a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = r.component.findComponentByPath(a, p);
      i && (i.nested_parts = [...s], t.editablePageData.value = a, o("update:page", a));
    },
    moveNestedPart: (d, s, p) => {
      const a = r.string.parseHierarchyPath(d), i = JSON.parse(JSON.stringify(t.editablePageData.value)), c = r.component.findComponentByPath(i, a);
      if (c != null && c.nested_parts && c.nested_parts.length > Math.max(s, p)) {
        const u = [...c.nested_parts];
        if (s >= 0 && s < u.length && p >= 0 && p < u.length && s !== p) {
          const [y] = u.splice(s, 1);
          u.splice(p, 0, y), c.nested_parts = u, t.editablePageData.value = i, o("update:page", i);
        }
      }
    },
    // 異なる階層間でのネストパーツ移動
    moveNestedPartBetweenLevels: (d, s, p, a) => {
      const i = r.string.parseHierarchyPath(d), c = r.string.parseHierarchyPath(p), u = [...t.editablePageData.value], y = r.component.findComponentByPath(u, i);
      if (!(y != null && y.nested_parts)) return;
      const [z] = y.nested_parts.splice(s, 1), C = r.component.findComponentByPath(u, c);
      C && (C.nested_parts || (C.nested_parts = []), C.nested_parts.splice(a, 0, z), t.editablePageData.value = u, o("update:page", u));
    },
    // コンポーネントIDベースのネストパーツ並べ替え
    moveNestedPartById: (d, s, p) => {
      const a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = v(a, d);
      if (i != null && i.nested_parts && i.nested_parts.length > Math.max(s, p)) {
        const c = [...i.nested_parts];
        if (s >= 0 && s < c.length && p >= 0 && p < c.length && s !== p) {
          const [u] = c.splice(s, 1);
          c.splice(p, 0, u), i.nested_parts = c, t.editablePageData.value = a, o("update:page", a);
        }
      }
    },
    // コンポーネントIDベースの異なる階層間移動
    moveNestedPartBetweenLevelsById: (d, s, p, a) => {
      const i = JSON.parse(JSON.stringify(t.editablePageData.value)), c = v(i, d);
      if (!(c != null && c.nested_parts))
        return;
      const [u] = c.nested_parts.splice(s, 1), y = v(i, p);
      y && (y.nested_parts || (y.nested_parts = []), y.nested_parts.splice(a, 0, u), t.editablePageData.value = i, o("update:page", i));
    },
    // z-for内のネストパーツ並べ替え
    moveZForNestedPart: (d, s, p) => {
      const a = d.match(/^(\w+)\.(\w+)\[(\d+)\]\.(\w+)$/);
      if (!a)
        return;
      const [, i, c, u, y] = a, z = parseInt(u), C = JSON.parse(JSON.stringify(t.editablePageData.value)), h = v(C, i);
      if (!h)
        return;
      const $ = h[c];
      if (!Array.isArray($) || z >= $.length)
        return;
      const _ = $[z];
      if (!_ || !_[y] || !Array.isArray(_[y]))
        return;
      const S = _[y];
      if (s < 0 || s >= S.length || p < 0 || p >= S.length || s === p)
        return;
      const [T] = S.splice(s, 1);
      S.splice(p, 0, T), t.editablePageData.value = C, o("update:page", C);
    },
    // 編集操作
    openEditor: (d) => {
      const s = t.editablePageData.value[d];
      s && t.openEditor(s, d);
    },
    saveComponent: (d) => {
      const s = t.selectedComponentIndex.value;
      if (d._isZForItem) {
        const p = d._parentComponentId, a = d._arrayName, i = d._arrayIndex, c = JSON.parse(JSON.stringify(t.editablePageData.value)), u = v(c, p);
        if (u && Array.isArray(u[a])) {
          const y = u[a];
          if (i >= 0 && i < y.length) {
            const {
              _isZForItem: z,
              _parentComponentId: C,
              _arrayName: h,
              _arrayIndex: $,
              _zForTemplate: _,
              ...S
            } = d;
            y[i] = { ...y[i], ...S }, t.editablePageData.value = c, o("update:page", c);
          }
        }
        t.closeEditor();
        return;
      }
      if (typeof s == "number" && s >= 0) {
        const p = [...t.editablePageData.value];
        p[s] = d, t.editablePageData.value = p, o("update:page", p);
      } else if (typeof s == "string") {
        const p = JSON.parse(JSON.stringify(t.editablePageData.value));
        l(p, s, d) && (t.editablePageData.value = p, o("update:page", p));
      }
      t.closeEditor();
    },
    // ネストコンポーネント操作
    addNestedPart: (d, s, p) => {
      const a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = /^(.+)\.(.+)\[(\d+)\]\.(.+)$/, c = d.match(i);
      let u = !1;
      if (c) {
        const [, y, z, C, h] = c, $ = v(a, y);
        if ($ && $[z] && Array.isArray($[z])) {
          const _ = $[z][parseInt(C)];
          _ && (_[h] || (_[h] = []), _[h].splice(s, 0, p), u = !0);
        }
      } else {
        const y = v(a, d);
        y && (y.nested_parts || (y.nested_parts = []), y.nested_parts.splice(s, 0, p), u = !0);
      }
      u && (t.editablePageData.value = a, o("update:page", a));
    },
    deleteNestedPart: (d) => {
      if (window.confirm("このネストパーツを削除しますか？")) {
        const s = JSON.parse(JSON.stringify(t.editablePageData.value)), p = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/, a = d.match(p);
        let i = !1;
        if (a) {
          const [, c, u, y, z, C] = a, h = v(s, c);
          if (h && h[u] && Array.isArray(h[u])) {
            const $ = h[u][parseInt(y)];
            $ && $[z] && Array.isArray($[z]) && ($[z].splice(parseInt(C), 1), i = !0);
          }
        } else
          i = m(s, d);
        i && (t.editablePageData.value = s, o("update:page", s));
      }
    },
    // Tiptap編集
    startTiptapEdit: (d, s, p = [], a = 0) => {
      t.startTiptapEdit(d, s, p, a);
    },
    // 簡単なTiptap編集（後方互換性用）
    startSimpleTiptapEdit: (d, s) => {
      t.startTiptapEdit(d, s, [], 0);
    },
    stopTiptapEdit: () => {
      t.stopTiptapEdit();
    },
    // データ送信
    sendPageData: () => {
      o("update:page", t.editablePageData.value);
    },
    sendPartsData: () => {
      o("update:parts", t.localParts.value);
    },
    sendCommonPartsData: () => {
      o("update:commonParts", t.localCommonParts.value);
    },
    sendIndividualPartsData: () => {
      o("update:individualParts", t.localIndividualParts.value);
    },
    // 配列操作
    addArrayItem: (d, s) => {
      r.component.addArrayItem(d, s), o("update:page", t.editablePageData.value);
    },
    removeArrayItem: (d, s, p) => {
      r.component.removeArrayItem(d, s, p), o("update:page", t.editablePageData.value);
    },
    // データリセット
    resetPageData: () => {
      t.editablePageData.value = Array.isArray(e.page) ? [...e.page] : [], o("update:page", t.editablePageData.value);
    },
    resetPartsData: () => {
      t.localParts.value = Array.isArray(e.parts) ? [...e.parts] : [], o("update:parts", t.localParts.value);
    }
  }, A = {
    // 現在選択されているコンポーネント
    currentComponent: de(() => t.selectedComponent.value),
    // 現在のテンプレート
    currentTemplate: de(() => {
      const d = t.selectedComponent.value;
      return d ? r.template.getTemplate(
        d.type,
        d.module_name,
        t.localParts.value
      ) : "";
    }),
    // 現在のフィールド一覧
    currentFields: de(() => {
      const d = A.currentTemplate.value;
      return r.template.extractFields(d);
    }),
    // 現在のスロット一覧
    currentSlots: de(() => {
      const d = A.currentTemplate.value;
      return r.template.extractSlots(d);
    }),
    // レンダリング関数
    renderComponent: (d) => n.renderComponentWithoutSlot(
      d,
      (s, p) => r.template.getTemplate(s, p, t.localParts.value)
    ),
    // パーツ管理用プレビュー
    renderPartPreview: (d) => {
      if (!d) return "";
      try {
        let s = d;
        return s = s.replace(/\{\$([^:]+):([^}]*)\}/g, (p, a, i) => ({
          title: "サンプルタイトル",
          text: "サンプルテキスト",
          content: "サンプルコンテンツ",
          heading: "見出し",
          description: "説明文",
          label: "ラベル",
          source: "情報源",
          tooltip: "ツールチップ"
        })[a] || i || `[${a}]`), s = s.replace(/\(\$([^:]+):([^)]+)\)/g, (p, a, i) => i.split("|").filter((u) => u.trim())[0] || ""), s = s.replace(/\(\$([^:?]+)\?:([^)]*)\)/g, (p, a, i) => i || ""), s = s.replace(/z-slot="[^"]*"/g, ""), s = s.replace(/z-for="[^"]*"/g, ""), s = s.replace(/z-for-wrapper="[^"]*"/g, ""), s;
      } catch {
        return d;
      }
    }
  }, w = () => {
    Ee.on("addArrayItem", ({ componentId: d, arrayKey: s }) => {
      try {
        if (I.debug(`EventBus: addArrayItem - componentId=${d}, arrayKey=${s}`), !d || !s)
          throw new Error("componentId または arrayKey が指定されていません");
        const p = v(t.editablePageData.value, d);
        if (!p)
          throw new Error(`Component not found: ${d}`);
        I.success(`Component found: ${p.id}, adding array item to ${s}`);
        const a = t.localParts.value && t.localParts.value.length > 0 ? t.localParts.value : [];
        a.length > 0 ? no(a).addArrayItem(p, s) : E.addArrayItem(p, s), o("update:page", t.editablePageData.value);
      } catch (p) {
        I.error(`配列アイテム追加エラー: ${p}`, { componentId: d, arrayKey: s });
      }
    }), Ee.on("addZForArrayItem", ({ componentId: d, arrayName: s, insertIndex: p }) => {
      try {
        I.debug(
          `EventBus: addZForArrayItem - componentId=${d}, arrayName=${s}, insertIndex=${p}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        Array.isArray(a[s]) || (a[s] = []);
        const i = t.localParts.value && t.localParts.value.length > 0 ? t.localParts.value : [], c = no(i), u = c.getTemplate(a.type, a.module_name), y = {
          id: c.generateUniqueId()
        };
        if (u) {
          const C = u.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/g);
          C && C.forEach(($) => {
            const [, _, S, T] = $.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/) || [];
            if (_ && !y[_])
              if (S === ":") {
                const M = T.split("|").filter(Boolean);
                y[_] = M[0] || "";
              } else S === "?:" && (y[_] = []);
          });
          const h = u.match(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g);
          h && h.forEach(($) => {
            const _ = $.substring(1);
            !y[_] && !_.includes("(") && (y[_] = `デフォルト${_}`);
          });
        }
        a[s].splice(p, 0, y), I.success(`z-for配列アイテム追加完了: ${s}[${p}]`), o("update:page", t.editablePageData.value);
      } catch (a) {
        I.error(`z-for配列アイテム追加エラー: ${a}`, {
          componentId: d,
          arrayName: s,
          insertIndex: p
        });
      }
    }), Ee.on("removeZForArrayItem", ({ componentId: d, arrayName: s, index: p }) => {
      try {
        I.debug(
          `EventBus: removeZForArrayItem - componentId=${d}, arrayName=${s}, index=${p}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        const i = a[s];
        if (!Array.isArray(i) || p < 0 || p >= i.length)
          throw new Error(`Invalid array or index: ${s}[${p}]`);
        i.splice(p, 1), I.success(`z-for配列アイテム削除完了: ${s}[${p}]`), o("update:page", t.editablePageData.value);
      } catch (a) {
        I.error(`z-for配列アイテム削除エラー: ${a}`, { componentId: d, arrayName: s, index: p });
      }
    }), Ee.on("reorderZForArrayItem", ({ componentId: d, arrayName: s, fromIndex: p, toIndex: a }) => {
      try {
        I.debug(
          `EventBus: reorderZForArrayItem - componentId=${d}, arrayName=${s}, fromIndex=${p}, toIndex=${a}`
        );
        const i = v(t.editablePageData.value, d);
        if (!i)
          throw new Error(`Component not found: ${d}`);
        const c = i[s];
        if (!Array.isArray(c) || p < 0 || p >= c.length || a < 0 || a >= c.length)
          throw new Error(`Invalid array or indices: ${s}[${p}] -> [${a}]`);
        const u = JSON.parse(JSON.stringify(t.editablePageData.value)), y = v(u, d);
        if (y) {
          const z = y[s], C = z.splice(p, 1)[0];
          z.splice(a, 0, C), t.editablePageData.value = u, o("update:page", u), I.success(`z-for配列アイテム並び替え完了: ${s}[${p}] -> [${a}]`);
        } else
          throw new Error(`Component not found in new data: ${d}`);
      } catch (i) {
        I.error(`z-for配列アイテム並び替えエラー: ${i}`, {
          componentId: d,
          arrayName: s,
          fromIndex: p,
          toIndex: a
        });
      }
    }), Ee.on("editZForArrayItem", ({ componentId: d, arrayName: s, index: p }) => {
      try {
        I.debug(
          `EventBus: editZForArrayItem - componentId=${d}, arrayName=${s}, index=${p}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        const i = a[s];
        if (!Array.isArray(i) || p < 0 || p >= i.length)
          throw new Error(`Invalid array or index: ${s}[${p}]`);
        const c = i[p], u = {
          ...c,
          id: `${d}_${s}_${p}`,
          // 配列アイテム自体のtype/module_nameを使用（親のものではなく）
          type: c.type || a.type,
          // アイテム自体にtypeがない場合は親を使用
          module_name: c.module_name || a.module_name,
          // アイテム自体にmodule_nameがない場合は親を使用
          _isZForItem: !0,
          _parentComponentId: d,
          _arrayName: s,
          _arrayIndex: p,
          _zForTemplate: null
          // z-for内のテンプレートは getFieldInfo 時に動的取得される
        };
        I.debug("z-for配列アイテム編集: コンポーネント検索結果", {
          componentId: d,
          componentFound: !!a,
          componentType: a.type,
          componentModuleName: a.module_name,
          arrayName: s,
          arrayLength: i.length,
          index: p,
          itemKeys: Object.keys(c),
          tempComponentId: u.id
        }), t.openEditor(u, `${d}_${s}_${p}`), I.success(`z-for配列アイテム編集開始: ${s}[${p}]`);
      } catch (a) {
        I.error(`z-for配列アイテム編集エラー: ${a}`, { componentId: d, arrayName: s, index: p });
      }
    }), Ee.on("deleteNestedPart", ({ pathString: d }) => {
      I.debug(`EventBus: deleteNestedPart - path=${d}`), E.deleteNestedPart(d);
    }), Ee.on("openNestedEditor", ({ pathString: d }) => {
      if (I.debug(`EventBus: openNestedEditor - path=${d}`), !d || typeof d != "string") {
        I.error("Invalid pathString:", d);
        return;
      }
      const s = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/, p = d.match(s);
      let a = null;
      if (p) {
        const [, i, c, u, y, z] = p;
        I.debug("z-for内パス解析:", { parentId: i, arrayName: c, arrayIndex: u, slotName: y, partIndex: z });
        const C = v(t.editablePageData.value, i);
        if (C && C[c] && Array.isArray(C[c])) {
          const h = C[c][parseInt(u)];
          h && h[y] && Array.isArray(h[y]) && (a = h[y][parseInt(z)], I.debug("z-for内ネストパーツを発見:", a));
        }
      } else
        a = v(t.editablePageData.value, d);
      a ? (I.debug("Found component:", {
        id: a.id,
        type: a.type,
        module: a.module_name
      }), t.openEditor(a, d)) : I.error(`Component not found with ID: ${d}`);
    }), Ee.on("openNestedPartSelector", ({ pathString: d, position: s }) => {
      I.debug(`EventBus: openNestedPartSelector - path=${d}, position=${s}`), t.openNestedPartSelector(d, s);
    });
  }, P = (d) => {
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
      "handleZForArrayItemDrop"
    ].forEach((i) => {
      delete window[i];
    }), window.startTiptapEdit = d || E.startSimpleTiptapEdit, window.stopTiptapEdit = E.stopTiptapEdit, window.openPartSelector = (i) => t.openPartSelector(i), window.openNestedPartSelector = Qe.openNestedPartSelector, window.openNestedEditor = Qe.openNestedEditor, window.deleteNestedPart = Qe.deleteNestedPart, window.addArrayItem = Qe.addArrayItem, window.addZForArrayItem = Qe.addZForArrayItem, window.removeZForArrayItem = Qe.removeZForArrayItem, window.reorderZForArrayItem = Qe.reorderZForArrayItem, window.editZForArrayItem = Qe.editZForArrayItem;
    let p = null, a = null;
    window.handleZForDragStart = (i, c, u, y) => {
      const z = i.target;
      if (z.tagName === "BUTTON" || z.tagName === "A" || z.closest("button, a")) {
        i.preventDefault();
        return;
      }
      i.stopPropagation(), p = { componentId: c, arrayName: u, index: y };
      const C = z.closest(".zero-code-z-for-item-wrapper");
      C ? (C.style.opacity = "0.5", C.style.transform = "scale(0.95)", C.classList.add("dragging")) : z.style.opacity = "0.5", i.dataTransfer.effectAllowed = "move", i.dataTransfer.setData("text/html", z.outerHTML), I.debug("z-for drag start", { componentId: c, arrayName: u, index: y });
    }, window.handleZForDragEnd = (i) => {
      const c = i.target, u = c.closest(".zero-code-z-for-item-wrapper");
      u ? (u.style.opacity = "1", u.style.transform = "scale(1)", u.classList.remove("dragging")) : c.style.opacity = "1", document.querySelectorAll(".z-for-item-wrapper.drag-over").forEach((y) => {
        y.classList.remove("drag-over");
      }), setTimeout(() => {
        p = null, I.debug("z-for drag end - draggedItem reset");
      }, 50), I.debug("z-for drag end");
    }, window.handleZForArrayItemDragOver = (i) => {
      i.preventDefault(), i.dataTransfer.dropEffect = "move";
      const u = i.currentTarget.closest(".zero-code-z-for-item-wrapper");
      u && !u.classList.contains("dragging") && (document.querySelectorAll(".z-for-item-wrapper.drag-over").forEach((y) => {
        y.classList.remove("drag-over");
      }), u.classList.add("drag-over"));
    }, window.handleZForArrayItemDrop = (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, u = c.closest(".zero-code-z-for-item-wrapper");
      if (u && u.classList.remove("drag-over"), !p) {
        I.warn("No dragged item found");
        return;
      }
      const y = (u == null ? void 0 : u.getAttribute("data-component-id")) || c.getAttribute("data-component-id"), z = (u == null ? void 0 : u.getAttribute("data-array-name")) || c.getAttribute("data-array-name"), C = (u == null ? void 0 : u.getAttribute("data-item-index")) || c.getAttribute("data-item-index"), h = parseInt(C || "0");
      p.componentId === y && p.arrayName === z && p.index !== h && (Qe.reorderZForArrayItem(
        p.componentId,
        p.arrayName,
        p.index,
        h
      ), I.success("z-for array item reordered", {
        from: p.index,
        to: h
      })), p = null;
    }, window.handleNestedPartDragStart = (i) => {
      const c = i.target;
      if (c.tagName === "BUTTON" || c.tagName === "A" || c.closest("button, a")) {
        i.preventDefault();
        return;
      }
      const u = c.closest(".z-for-nested-part");
      if (u) {
        const y = u.getAttribute("data-nested-path"), z = u.getAttribute("data-slot-name"), C = u.getAttribute("data-part-index");
        y && z && C !== null && (a = {
          path: y,
          slotName: z,
          index: parseInt(C)
        }, u.classList.add("dragging"), u.style.opacity = "0.5", i.dataTransfer.effectAllowed = "move", i.dataTransfer.setData("text/html", u.outerHTML), I.debug("z-for nested part drag start", a));
      }
    }, window.handleNestedPartDragEnd = (i) => {
      const u = i.target.closest(".z-for-nested-part");
      u && (u.classList.remove("dragging"), u.style.opacity = "1"), document.querySelectorAll(".z-for-nested-part.drag-over").forEach((y) => {
        y.classList.remove("drag-over");
      }), a = null, I.debug("z-for nested part drag end");
    }, window.handleNestedPartDragOver = (i) => {
      i.preventDefault(), i.dataTransfer.dropEffect = "move";
      const u = i.currentTarget.closest(".z-for-nested-part");
      u && !u.classList.contains("dragging") && (document.querySelectorAll(".z-for-nested-part.drag-over").forEach((y) => {
        y.classList.remove("drag-over");
      }), u.classList.add("drag-over"));
    }, window.handleNestedPartDrop = (i) => {
      i.preventDefault();
      const c = i.currentTarget, u = c.closest(".z-for-nested-part") || c.closest(".nested-component");
      if (u && u.classList.remove("drag-over"), !a) {
        I.warn("No dragged nested part found");
        return;
      }
      const y = c.getAttribute("data-slot-name"), z = c.getAttribute("data-part-index");
      if (y && z !== null) {
        const C = parseInt(z);
        if (y === a.slotName) {
          const h = a.path.match(/^(.+\.\w+\[\d+\]\.\w+)\[\d+\]$/);
          if (h) {
            const $ = h[1];
            I.debug("z-for nested part reorder", {
              parentPath: $,
              fromIndex: a.index,
              toIndex: C
            }), E.moveZForNestedPart($, a.index, C);
          }
        }
      }
      a = null;
    }, I.debug("グローバル関数を安全に公開完了");
  }, b = () => {
  };
  return {
    // 状態（readonly）
    state: {
      editablePageData: t.editablePageData,
      localParts: t.localParts,
      localCommonParts: t.localCommonParts,
      localIndividualParts: t.localIndividualParts,
      activeTab: t.activeTab,
      dataTab: t.dataTab,
      showEditor: t.showEditor,
      showPartSelector: t.showPartSelector,
      showNestedPartSelector: t.showNestedPartSelector,
      selectedComponent: t.selectedComponent,
      selectedComponentIndex: t.selectedComponentIndex,
      editingText: t.editingText,
      insertPosition: t.insertPosition,
      nestedInsertPath: t.nestedInsertPath,
      nestedInsertPosition: t.nestedInsertPosition
    },
    // 計算プロパティ
    computed: {
      currentComponentIndex: t.currentComponentIndex,
      pageDataLength: t.pageDataLength,
      hasSelectedComponent: t.hasSelectedComponent,
      isEditing: t.isEditing,
      isTiptapEditing: t.isTiptapEditing,
      ...A
    },
    // アクション
    actions: E,
    // ユーティリティ
    utils: r,
    // テンプレート処理
    templateProcessor: n,
    // シンプルエディター
    simpleEditor: f,
    // タブ操作
    switchToTab: t.switchToTab,
    setDataTab: t.setDataTab,
    // エディター操作
    openEditor: t.openEditor,
    closeEditor: t.closeEditor,
    openPartSelector: t.openPartSelector,
    closePartSelector: t.closePartSelector,
    openNestedPartSelector: t.openNestedPartSelector,
    closeNestedPartSelector: t.closeNestedPartSelector,
    // イベントバス設定
    setupEventListeners: w,
    // グローバル関数公開
    exposeGlobalFunctions: P,
    // クリーンアップ
    cleanup: b
  };
}
const Od = { class: "zero-code-tab-navigation" }, Fd = ["onClick"], Rd = /* @__PURE__ */ _e({
  __name: "TabNavigation",
  props: {
    activeTab: { type: String }
  },
  emits: ["update:active-tab"],
  setup(e) {
    const o = ["editor", "preview", "parts", "images"], t = (r) => ({
      editor: "エディタ",
      preview: "ページプレビュー",
      parts: "パーツ管理",
      images: "画像管理"
    })[r];
    return (r, n) => (D(), N("div", Od, [
      (D(), N(ee, null, ne(o, (f) => g("button", {
        key: f,
        class: Fe(["zero-code-tab-button", { active: r.activeTab === f }]),
        onClick: (v) => r.$emit("update:active-tab", f)
      }, B(t(f)), 11, Fd)), 64))
    ]));
  }
});
function Ld() {
  const e = re([]), o = de(() => e.value.length > 0), t = (l, m = ue.UNKNOWN, E) => {
    const A = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: m,
      message: l instanceof Error ? l.message : l,
      details: l instanceof Error ? l.stack : void 0,
      timestamp: /* @__PURE__ */ new Date(),
      context: E
    };
    e.value.push(A), setTimeout(() => {
      n(A.id);
    }, 1e4);
  }, r = () => {
    e.value = [];
  }, n = (l) => {
    const m = e.value.findIndex((E) => E.id === l);
    m !== -1 && e.value.splice(m, 1);
  }, f = (l) => e.value.filter((m) => m.type === l), v = (l, m = ue.UNKNOWN) => {
    t(l, m);
  };
  return {
    errors: e.value,
    hasErrors: o.value,
    handleError: t,
    clearErrors: r,
    clearError: n,
    getErrorsByType: f,
    showErrorNotification: v
  };
}
const xd = { class: "zero-code-error-boundary" }, Bd = {
  key: 0,
  class: "zero-code-error-notifications"
}, Hd = { class: "zero-code-error-content" }, Vd = { class: "zero-code-error-message" }, Zd = { class: "zero-code-error-icon" }, Ud = { class: "zero-code-error-text" }, jd = ["onClick"], Wd = {
  key: 0,
  class: "zero-code-error-details"
}, Xd = { class: "zero-code-error-details-pre" }, Yd = { class: "zero-code-error-boundary-content" }, Kd = /* @__PURE__ */ _e({
  __name: "ErrorBoundary",
  props: {
    showDetails: { type: Boolean, default: !1 }
  },
  setup(e) {
    const { errors: o, hasErrors: t, clearError: r } = Ld(), n = (v) => {
      switch (v) {
        case ue.NETWORK_ERROR:
          return "error-network";
        case ue.VALIDATION_ERROR:
          return "error-validation";
        case ue.PERMISSION_ERROR:
          return "error-permission";
        case ue.COMPONENT_ERROR:
          return "error-component";
        case ue.IMAGE_LOAD_FAILED:
          return "error-image";
        case ue.TEMPLATE_PARSE_ERROR:
          return "error-template";
        default:
          return "error-unknown";
      }
    }, f = (v) => {
      switch (v) {
        case ue.NETWORK_ERROR:
          return "🌐";
        case ue.VALIDATION_ERROR:
          return "⚠️";
        case ue.PERMISSION_ERROR:
          return "🔒";
        case ue.COMPONENT_ERROR:
          return "🧩";
        case ue.IMAGE_LOAD_FAILED:
          return "🖼️";
        case ue.TEMPLATE_PARSE_ERROR:
          return "📄";
        default:
          return "❌";
      }
    };
    return (v, l) => (D(), N("div", xd, [
      G(t) ? (D(), N("div", Bd, [
        (D(!0), N(ee, null, ne(G(o), (m) => (D(), N("div", {
          key: m.id,
          class: Fe(["zero-code-error-notification", n(m.type)])
        }, [
          g("div", Hd, [
            g("div", Vd, [
              g("span", Zd, B(f(m.type)), 1),
              g("span", Ud, B(m.message), 1)
            ]),
            g("button", {
              class: "zero-code-error-close",
              title: "エラーを閉じる",
              onClick: (E) => G(r)(m.id)
            }, " × ", 8, jd)
          ]),
          m.details && v.showDetails ? (D(), N("div", Wd, [
            g("pre", Xd, B(m.details), 1)
          ])) : Y("", !0)
        ], 2))), 128))
      ])) : Y("", !0),
      g("div", Yd, [
        Jr(v.$slots, "default")
      ])
    ]));
  }
}), Jd = { class: "zero-code-toolbar-content" }, qd = { class: "zero-code-toolbar-section" }, Gd = {
  key: 0,
  class: "zero-code-toolbar-separator"
}, Qd = ["title", "disabled", "onClick"], ec = { class: "zero-code-toolbar-section" }, tc = /* @__PURE__ */ _e({
  __name: "RichTextToolbar",
  props: {
    show: { type: Boolean },
    position: { type: Object },
    actions: { type: Array },
    editingState: { type: null },
    isEditing: { type: Boolean }
  },
  emits: ["executeCommand", "save", "cancel"],
  setup(e, { emit: o }) {
    const t = e;
    To(() => {
    }), je(
      () => t.show,
      (l) => {
      },
      { immediate: !0 }
    ), je(
      () => t.position,
      (l) => {
      },
      { deep: !0, immediate: !0 }
    ), je(
      () => t.actions,
      (l) => {
      },
      { immediate: !0 }
    );
    const r = o, n = (l) => {
      r("executeCommand", l);
    }, f = () => {
      r("save");
    }, v = () => {
      r("cancel");
    };
    return (l, m) => l.show ? (D(), N("div", {
      key: 0,
      class: "zero-code-rich-text-toolbar",
      style: qr({
        top: l.position.top + "px",
        left: l.position.left + "px"
      })
    }, [
      g("div", Jd, [
        g("div", qd, [
          (D(!0), N(ee, null, ne(l.actions, (E, A) => (D(), N(ee, { key: A }, [
            E && E.name === "separator" ? (D(), N("div", Gd)) : E ? (D(), N("button", {
              key: 1,
              class: Fe(["zero-code-toolbar-btn", { active: E.active, disabled: !l.isEditing }]),
              title: E.title || "",
              disabled: !l.isEditing,
              tabindex: "-1",
              onClick: (w) => n(E.command || ""),
              onMousedown: m[0] || (m[0] = Be(() => {
              }, ["prevent", "stop"]))
            }, B(E.icon || ""), 43, Qd)) : Y("", !0)
          ], 64))), 128))
        ]),
        m[3] || (m[3] = g("div", { class: "zero-code-toolbar-separator" }, null, -1)),
        g("div", ec, [
          g("button", {
            class: "zero-code-toolbar-btn zero-code-save-btn",
            title: "保存 (Ctrl+S)",
            tabindex: "-1",
            onClick: f,
            onMousedown: m[1] || (m[1] = Be(() => {
            }, ["prevent", "stop"]))
          }, " ✓ ", 32),
          g("button", {
            class: "zero-code-toolbar-btn zero-code-cancel-btn",
            title: "キャンセル (Esc)",
            tabindex: "-1",
            onClick: v,
            onMousedown: m[2] || (m[2] = Be(() => {
            }, ["prevent", "stop"]))
          }, " ✕ ", 32)
        ])
      ])
    ], 4)) : Y("", !0);
  }
}), oc = { class: "zero-code editor-container" }, rc = { class: "zero-code-editor-content" }, nc = /* @__PURE__ */ _e({
  __name: "ZeroCode.ce",
  props: {
    parts: { default: () => [], type: Array },
    commonParts: { default: () => [], type: Array },
    individualParts: { default: () => [], type: Array },
    page: { default: () => [], type: Array },
    commonImages: { default: () => [], type: Array },
    individualImages: { default: () => [], type: Array }
  },
  emits: ["update:parts", "update:commonParts", "update:individualParts", "update:page", "update:commonImages", "update:individualImages"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = Md(t, r), f = n.state.selectedComponent;
    n.state.selectedComponentIndex;
    const v = n.state.editablePageData, l = n.state.localParts, m = n.state.dataTab, E = re(!1), A = re({ top: 0, left: 0 }), w = re(null), P = re(""), b = re(""), d = re(""), s = de(() => w.value !== null), p = ao({
      showToolbar: de(() => E.value),
      position: de(() => A.value),
      actions: [
        { name: "bold", icon: "B", title: "太字", command: "bold" },
        { name: "italic", icon: "I", title: "斜体", command: "italic" },
        { name: "underline", icon: "U", title: "下線", command: "underline" },
        { name: "separator" },
        { name: "link", icon: "🔗", title: "リンク", command: "link" }
      ],
      editingState: {},
      executeCommand: (O) => {
        a(O);
      },
      stopEdit: (O) => {
        u(O);
      }
    }), a = (O) => {
      if (w.value)
        try {
          if (O === "link") {
            const H = prompt("リンクのURLを入力してください:", "https://");
            if (H && H.trim()) {
              const j = document.execCommand("createLink", !1, H);
            }
          } else {
            const H = document.execCommand(O, !1, void 0);
          }
        } catch {
        }
    }, i = (O) => {
      if (!O) return O;
      let H = O.replace(/(<br\s*\/?>)+$/gi, "");
      return H = H.replace(/\s+$/, ""), H;
    }, c = () => {
      if (!w.value || !b.value || !d.value) return;
      const O = w.value.innerHTML, H = i(O), j = (se) => {
        const J = b.value.match(/^(.+)_(.+)_(\d+)_(.+)$/);
        if (J) {
          const [me, ve, ce, Q, be] = J, pe = (Pe, Te) => {
            for (const dt of Pe) {
              if (dt.id === Te)
                return dt;
              if (dt.nested_parts && Array.isArray(dt.nested_parts)) {
                const ct = pe(dt.nested_parts, Te);
                if (ct) return ct;
              }
              for (const [ct, Et] of Object.entries(dt))
                if (Array.isArray(Et) && ct !== "nested_parts") {
                  for (const uo of Et)
                    if (uo && typeof uo == "object") {
                      for (const [sc, xo] of Object.entries(uo))
                        if (Array.isArray(xo)) {
                          const Bo = pe(xo, Te);
                          if (Bo) return Bo;
                        }
                    }
                }
            }
            return null;
          }, ge = pe(se, ve);
          if (ge && Array.isArray(ge[ce])) {
            const Pe = ge[ce][parseInt(Q)];
            if (Pe && typeof Pe == "object")
              return Pe[be] = H, !0;
          }
          return !1;
        }
        for (const me of se) {
          if (me.id === b.value)
            return me[d.value] = H, !0;
          if (me.nested_parts && Array.isArray(me.nested_parts) && j(me.nested_parts))
            return !0;
          for (const [ve, ce] of Object.entries(me))
            if (Array.isArray(ce) && ve !== "nested_parts") {
              for (const Q of ce)
                if (Q && typeof Q == "object") {
                  if (Q.id === b.value)
                    return Q[d.value] = H, !0;
                  for (const [be, pe] of Object.entries(Q))
                    if (Array.isArray(pe) && j(pe))
                      return !0;
                }
            }
        }
        return !1;
      };
      j(v.value) && (w.value && O !== H && (w.value.innerHTML = H), r("update:page", v.value));
    }, u = (O) => {
      w.value && (O ? c() : w.value.innerHTML = P.value, w.value.contentEditable = "false", w.value.classList.remove("editing"), w.value.style.userSelect = "", w.value.style.webkitUserSelect = "", w.value._cleanup && (w.value._cleanup(), delete w.value._cleanup), w.value = null, P.value = "", b.value = "", d.value = "", E.value = !1);
    }, y = (O) => {
      n.actions.openEditor(O);
    }, z = () => {
      n.closeEditor();
    }, C = (O) => {
      n.actions.deletePart(O);
    }, h = (O) => {
      n.actions.reorderParts(O);
    }, $ = () => {
      const O = document.querySelector(".zero-code");
      if (!O) return;
      let H = null, j = null;
      const se = (ce) => {
        const Q = ce, be = Q.target;
        if (be.classList.contains("draggable-nested")) {
          if (w.value) {
            Q.preventDefault();
            return;
          }
          if (be.classList.contains("z-for-nested-part"))
            return;
          H = be;
          const pe = be.dataset.componentId || "", ge = be.dataset.path || "", Pe = be.dataset.parentPath || "", Te = parseInt(be.dataset.index || "0");
          j = { componentId: pe, path: ge, parentPath: Pe, index: Te }, Q.dataTransfer && (Q.dataTransfer.effectAllowed = "move", Q.dataTransfer.setData("text/plain", "nested-component")), be.style.opacity = "0.5";
        }
      }, J = (ce) => {
        const Q = ce;
        Q.preventDefault(), Q.dataTransfer && (Q.dataTransfer.dropEffect = "move");
      }, me = (ce) => {
        const Q = ce;
        if (Q.preventDefault(), !H || !j) return;
        const pe = Q.target.closest(".draggable-nested");
        if (pe && pe !== H) {
          const ge = pe.dataset.parentPath || "", Pe = parseInt(pe.dataset.index || "0");
          j.parentPath === ge && n.actions.moveNestedPartById(j.parentPath, j.index, Pe);
        }
        H && (H.style.opacity = "1"), H = null, j = null;
      }, ve = (ce) => {
        const Q = ce.target;
        Q.classList.contains("draggable-nested") && (Q.style.opacity = "1"), H = null, j = null;
      };
      return O.addEventListener("dragstart", se), O.addEventListener("dragover", J), O.addEventListener("drop", me), O.addEventListener("dragend", ve), () => {
        O.removeEventListener("dragstart", se), O.removeEventListener("dragover", J), O.removeEventListener("drop", me), O.removeEventListener("dragend", ve);
      };
    }, _ = () => {
      n.actions.sendPageData();
    }, S = () => {
      n.actions.sendPartsData();
    }, T = () => {
      n.actions.sendCommonPartsData();
    }, M = () => {
      n.actions.sendIndividualPartsData();
    }, L = () => {
      n.actions.resetPageData();
    }, k = re(null), F = de(() => {
      const O = /* @__PURE__ */ new Set();
      return l.value && l.value.forEach((H) => {
        H.parts && H.parts.forEach((j) => {
          O.add(j.type);
        });
      }), Array.from(O);
    }), U = (O, H) => {
      let j = H;
      return j === void 0 && (j = v.value.findIndex((se) => se.id === O.id), j === -1 && (j = 0)), n.templateProcessor.renderComponentWithNested(
        O,
        j,
        // 実際のコンポーネントインデックスを渡す
        (se, J) => n.utils.template.getTemplate(se, J, l.value),
        // ネストコンポーネントレンダリング用ラッパー関数
        (se, J, me, ve) => n.templateProcessor.renderNestedComponentsWithUI(
          se,
          J,
          (ce) => ce.join("-"),
          // パス配列を文字列に変換
          ve || ((ce, Q) => n.utils.template.getTemplate(ce, Q, l.value))
        )
      );
    }, x = (O) => {
      r("update:parts", O);
    }, q = (O) => {
      k.value = O, Ve.value = !0;
    }, V = (O, H) => {
      if (confirm(`パーツ「${H}」を削除しますか？`)) {
        const j = l.value.map((se) => se.type === O ? {
          ...se,
          module: se.module.filter((J) => J.title !== H)
        } : se).filter((se) => se.module.length > 0);
        l.value = j, r("update:parts", j);
      }
    }, Z = (O) => {
      const H = typeof O == "string" ? O : O.body || "";
      return n.computed.renderPartPreview(H);
    }, te = (O) => {
      const { type: H, title: j, body: se, category: J = "common" } = O, me = [...l.value];
      let ve = me.find((Q) => Q.type === H);
      ve || (ve = { type: H, module: [] }, me.push(ve));
      const ce = { title: j, body: se, category: J };
      if (k.value) {
        const Q = ve.module.findIndex(
          (be) => be.title === k.value.module.title
        );
        Q !== -1 && (ve.module[Q] = ce);
      } else
        ve.module.push(ce);
      l.value = me, r("update:parts", me), xt();
    }, { activeTab: le, switchToTab: Re } = Id(), He = n.state.showPartSelector, Ae = n.state.showNestedPartSelector, Ve = re(!1), qe = (O) => {
      n.openPartSelector(O);
    }, Lt = () => {
      n.closePartSelector();
    }, Pt = () => {
      n.closeNestedPartSelector();
    }, lt = () => {
      Ve.value = !0;
    }, xt = () => {
      Ve.value = !1, k.value = null;
    }, io = n.state.showEditor, ht = re([]), Ge = re([]), lo = (O) => {
      ht.value = O, r("update:commonImages", O);
    }, Fr = (O) => {
      Ge.value = O, r("update:individualImages", O);
    }, Fo = () => {
      r("update:commonImages", ht.value);
    }, Ro = () => {
      r("update:individualImages", Ge.value);
    }, Rr = (O, H, j) => {
      const se = nt.value.createNewComponent(O, H), J = j !== void 0 ? j : n.state.insertPosition.value;
      n.actions.addPart(se, J), Lt();
    }, Lr = (O, H) => {
      const j = n.state.nestedInsertPath.value, se = n.state.nestedInsertPosition.value, J = nt.value.createNewComponent(O, H);
      n.actions.addNestedPart(j, se, J), Pt();
    }, nt = de(() => {
      const O = l.value && l.value.length > 0 ? l.value : t.parts || [];
      return no(O);
    }), xr = (O) => nt.value.getFieldInfo(O), Br = (O, H, j) => nt.value.shouldShowBasicField(O, H, j), Hr = (O, H, j) => nt.value.shouldShowArrayField(O, H, j), Vr = (O, H, j, se, J) => nt.value.shouldShowArrayItemField(O, H, j, se, J), Zr = (O) => nt.value.getInputType(O), Ur = (O, H, j) => nt.value.isCheckboxChecked(O, H, j), jr = (O, H) => {
      const j = f.value;
      if (j) {
        if (j[O] = H, j._isZForItem) {
          const se = j._parentComponentId, J = j._arrayName, me = j._arrayIndex, ve = (Q, be) => {
            for (const pe of Q) {
              if (pe.id === be)
                return pe;
              if (pe.nested_parts && Array.isArray(pe.nested_parts)) {
                const ge = ve(pe.nested_parts, be);
                if (ge) return ge;
              }
              for (const [ge, Pe] of Object.entries(pe))
                if (Array.isArray(Pe) && ge !== "nested_parts") {
                  for (const Te of Pe)
                    if (Te && typeof Te == "object") {
                      for (const [dt, ct] of Object.entries(Te))
                        if (Array.isArray(ct)) {
                          const Et = ve(ct, be);
                          if (Et) return Et;
                        }
                    }
                }
            }
            return null;
          }, ce = ve(v.value, se);
          if (ce && Array.isArray(ce[J])) {
            const Q = ce[J];
            me >= 0 && me < Q.length && (Q[me][O] = H);
          }
        }
        r("update:page", v.value);
      }
    };
    je(
      () => t.commonImages,
      (O) => {
        Array.isArray(O) && (ht.value = JSON.parse(JSON.stringify(O)));
      },
      { immediate: !0 }
    ), je(
      () => t.individualImages,
      (O) => {
        Array.isArray(O) && (Ge.value = JSON.parse(JSON.stringify(O)));
      },
      { immediate: !0 }
    );
    const Lo = (O) => {
      if (!w.value || !E.value) return;
      const H = O.target;
      H.closest(".zero-code-rich-text-toolbar") || H === w.value || w.value.contains(H) || u(!0);
    };
    let co = null;
    return To(async () => {
      document.addEventListener("click", Lo), n.setupEventListeners(), n.exposeGlobalFunctions((O, H) => {
        E.value = !0, n.actions.startTiptapEdit(O, H, [], 0);
      }), co = $() || null, window.startRichTextEdit = async (O, H, j, se) => {
        var me;
        const J = se || ((me = window.event) == null ? void 0 : me.target);
        if (w.value !== J && J) {
          w.value && u(!1), w.value = J, P.value = J.innerHTML, b.value = O, d.value = H, await qt(), J.contentEditable = "true", J.style.userSelect = "text", J.style.webkitUserSelect = "text", J.classList.add("editing");
          const ve = (pe) => {
            const ge = pe.relatedTarget;
            ge && ge.closest(".zero-code-rich-text-toolbar") || setTimeout(() => {
              w.value === J && u(!0);
            }, 150);
          };
          J.addEventListener("blur", ve), J._cleanup = () => {
            J.removeEventListener("blur", ve);
          };
          const ce = J.getBoundingClientRect(), Q = window.pageYOffset || document.documentElement.scrollTop, be = window.pageXOffset || document.documentElement.scrollLeft;
          A.value = {
            top: ce.top + Q - 50,
            left: ce.left + be
          }, E.value = !0, await qt(), setTimeout(() => {
            var pe;
            if (J && w.value === J) {
              J.focus();
              const ge = document.createRange(), Pe = window.getSelection();
              if (Pe && J.childNodes.length > 0) {
                const Te = J.childNodes[J.childNodes.length - 1];
                Te.nodeType === Node.TEXT_NODE ? ge.setStart(Te, ((pe = Te.textContent) == null ? void 0 : pe.length) || 0) : ge.setStartAfter(Te), ge.collapse(!0), Pe.removeAllRanges(), Pe.addRange(ge);
              } else Pe && (ge.selectNodeContents(J), ge.collapse(!1), Pe.removeAllRanges(), Pe.addRange(ge));
            }
          }, 10);
        }
      };
    }), Do(() => {
      document.removeEventListener("click", Lo), co && co();
    }), (O, H) => (D(), xe(Kd, null, {
      default: fr(() => [
        g("div", oc, [
          gt(Rd, {
            "active-tab": G(le),
            "onUpdate:activeTab": G(Re)
          }, null, 8, ["active-tab", "onUpdate:activeTab"]),
          gt(tc, {
            show: E.value,
            position: A.value,
            actions: p.actions,
            "editing-state": p.editingState,
            "is-editing": E.value,
            onExecuteCommand: p.executeCommand,
            onSave: H[0] || (H[0] = (j) => p.stopEdit(!0)),
            onCancel: H[1] || (H[1] = (j) => p.stopEdit(!1))
          }, null, 8, ["show", "position", "actions", "editing-state", "is-editing", "onExecuteCommand"]),
          g("div", rc, [
            G(le) === "editor" ? (D(), xe(Ls, {
              key: 0,
              "data-tab": G(m),
              "editable-page-data": G(v),
              "local-parts": G(l),
              "local-common-parts": G(n).state.localCommonParts.value,
              "local-individual-parts": G(n).state.localIndividualParts.value,
              parts: t.parts || [],
              "show-part-selector": G(He),
              "show-nested-part-selector": G(Ae),
              "show-editor": G(io),
              "selected-component": G(f),
              "render-component-with-nested": U,
              "get-field-info": xr,
              "should-show-basic-field": Br,
              "should-show-array-field": Hr,
              "should-show-array-item-field": Vr,
              "get-input-type": Zr,
              "is-checkbox-checked": Ur,
              "parts-data": G(l) && G(l).length > 0 ? G(l) : t.parts || [],
              "is-text-editing": s.value,
              "onUpdate:dataTab": H[2] || (H[2] = (j) => m.value = j),
              onAddPart: qe,
              onEditPart: y,
              onDeletePart: C,
              onReorderParts: h,
              onClosePartSelector: Lt,
              onSelectPart: Rr,
              onCloseNestedPartSelector: Pt,
              onSelectNestedPart: Lr,
              onCloseEditor: z,
              onUpdateEditorValue: jr
            }, null, 8, ["data-tab", "editable-page-data", "local-parts", "local-common-parts", "local-individual-parts", "parts", "show-part-selector", "show-nested-part-selector", "show-editor", "selected-component", "parts-data", "is-text-editing"])) : Y("", !0),
            G(le) === "parts" ? (D(), xe(Vi, {
              key: 1,
              "local-parts": G(l),
              "local-common-parts": G(n).state.localCommonParts.value,
              "local-individual-parts": G(n).state.localIndividualParts.value,
              "show-part-registration": Ve.value,
              "existing-part-types": F.value,
              "editing-part": k.value,
              "render-part-preview": Z,
              onUpdateParts: x,
              onShowRegistration: lt,
              onEditPart: q,
              onDeletePart: V,
              onCloseRegistration: xt,
              onSavePart: te
            }, null, 8, ["local-parts", "local-common-parts", "local-individual-parts", "show-part-registration", "existing-part-types", "editing-part"])) : Y("", !0),
            G(le) === "preview" ? (D(), xe(wl, {
              key: 2,
              "editable-page-data": G(v),
              "local-parts": G(l),
              parts: t.parts || []
            }, null, 8, ["editable-page-data", "local-parts", "parts"])) : Y("", !0),
            G(le) === "images" ? (D(), xe(Sd, {
              key: 3,
              "common-images": ht.value,
              "individual-images": Ge.value,
              onUpdateCommonImages: lo,
              onUpdateIndividualImages: Fr,
              onSendCommonImagesData: Fo,
              onSendIndividualImagesData: Ro
            }, null, 8, ["common-images", "individual-images"])) : Y("", !0)
          ]),
          g("div", { class: "zero-code-button-section" }, [
            g("button", {
              class: "zero-code-send-btn zero-code-page-btn",
              onClick: _
            }, "Pageデータを送信"),
            g("button", {
              class: "zero-code-send-btn zero-code-parts-btn",
              onClick: S
            }, "Partsデータを送信"),
            g("button", {
              class: "zero-code-send-btn zero-code-common-parts-btn",
              onClick: T
            }, "共通Partsデータを送信"),
            g("button", {
              class: "zero-code-send-btn zero-code-individual-parts-btn",
              onClick: M
            }, "個別Partsデータを送信"),
            g("button", {
              class: "zero-code-send-btn zero-code-common-images-btn",
              onClick: Fo
            }, " 共通画像データを送信 "),
            g("button", {
              class: "zero-code-send-btn zero-code-individual-images-btn",
              onClick: Ro
            }, " 個別画像データを送信 "),
            g("button", {
              class: "zero-code-send-btn zero-code-reset-btn",
              onClick: L
            }, "リセット")
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ac = Gr(nc, {
  shadowRoot: !1
});
customElements.define("zero-code", ac);
export {
  ac as ZeroCode,
  ac as default
};
