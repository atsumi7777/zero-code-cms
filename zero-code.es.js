var Xr = Object.defineProperty;
var Yr = (e, o, t) => o in e ? Xr(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var _t = (e, o, t) => Yr(e, typeof o != "symbol" ? o + "" : o, t);
import { defineComponent as _e, computed as de, toRefs as fr, unref as G, ref as ne, reactive as ao, h as Kr, getCurrentInstance as Io, watch as We, onMounted as To, nextTick as qt, onUnmounted as Do, isRef as po, createElementBlock as N, openBlock as D, createElementVNode as g, Fragment as ee, renderList as ae, normalizeClass as Fe, toDisplayString as H, createCommentVNode as Y, createVNode as ht, withCtx as mr, withModifiers as He, createBlock as Be, withDirectives as Oe, vModelText as Xe, vModelSelect as gr, createTextVNode as jt, onBeforeUnmount as Jr, renderSlot as qr, normalizeStyle as Gr, defineCustomElement as Qr } from "vue";
var en = Object.defineProperty, Gt = Object.getOwnPropertySymbols, hr = Object.prototype.hasOwnProperty, vr = Object.prototype.propertyIsEnumerable, Vo = (e, o, t) => o in e ? en(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, $t = (e, o) => {
  for (var t in o || (o = {}))
    hr.call(o, t) && Vo(e, t, o[t]);
  if (Gt)
    for (var t of Gt(o))
      vr.call(o, t) && Vo(e, t, o[t]);
  return e;
}, yr = (e, o) => {
  var t = {};
  for (var r in e)
    hr.call(e, r) && o.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Gt)
    for (var r of Gt(e))
      o.indexOf(r) < 0 && vr.call(e, r) && (t[r] = e[r]);
  return t;
};
function Zo(e, o, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(o, 1)[0]), e;
}
function tn(e) {
  return e.replace(/-(\w)/g, (o, t) => t ? t.toUpperCase() : "");
}
function on(e) {
  return Object.keys(e).reduce((o, t) => (typeof e[t] < "u" && (o[tn(t)] = e[t]), o), {});
}
function jo(e, o) {
  return Array.isArray(e) && e.splice(o, 1), e;
}
function Uo(e, o, t) {
  return Array.isArray(e) && e.splice(o, 0, t), e;
}
function rn(e) {
  return typeof e > "u";
}
function nn(e) {
  return typeof e == "string";
}
function Wo(e, o, t) {
  const r = e.children[t];
  e.insertBefore(o, r);
}
function fo(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function an(e, o = document) {
  var t;
  let r = null;
  return typeof (o == null ? void 0 : o.querySelector) == "function" ? r = (t = o == null ? void 0 : o.querySelector) == null ? void 0 : t.call(o, e) : r = document.querySelector(e), r || (`${e}`, void 0), r;
}
function sn(e, o, t = null) {
  return function(...r) {
    return e.apply(t, r), o.apply(t, r);
  };
}
function ln(e, o) {
  const t = $t({}, e);
  return Object.keys(o).forEach((r) => {
    t[r] ? t[r] = sn(e[r], o[r]) : t[r] = o[r];
  }), t;
}
function dn(e) {
  return e instanceof HTMLElement;
}
function Xo(e, o) {
  Object.keys(e).forEach((t) => {
    o(t, e[t]);
  });
}
function cn(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const un = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Yo(e, o) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    o && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ke(e) {
  for (var o = 1; o < arguments.length; o++) {
    var t = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Yo(Object(t), !0).forEach(function(r) {
      pn(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yo(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ut(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ut = function(o) {
    return typeof o;
  } : Ut = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Ut(e);
}
function pn(e, o, t) {
  return o in e ? Object.defineProperty(e, o, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[o] = t, e;
}
function rt() {
  return rt = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
      var t = arguments[o];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, rt.apply(this, arguments);
}
function fn(e, o) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), n, m;
  for (m = 0; m < r.length; m++)
    n = r[m], !(o.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
function mn(e, o) {
  if (e == null)
    return {};
  var t = fn(e, o), r, n;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(e);
    for (n = 0; n < m.length; n++)
      r = m[n], !(o.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
var gn = "1.15.2";
function ot(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var nt = ot(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ft = ot(/Edge/i), Ko = ot(/firefox/i), Tt = ot(/safari/i) && !ot(/chrome/i) && !ot(/android/i), br = ot(/iP(ad|od|hone)/i), $r = ot(/chrome/i) && ot(/android/i), wr = {
  capture: !1,
  passive: !1
};
function se(e, o, t) {
  e.addEventListener(o, t, !nt && wr);
}
function re(e, o, t) {
  e.removeEventListener(o, t, !nt && wr);
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
function hn(e) {
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
    } while (e = hn(e));
  }
  return null;
}
var Jo = /\s+/g;
function Ne(e, o, t) {
  if (e && o)
    if (e.classList)
      e.classList[t ? "add" : "remove"](o);
    else {
      var r = (" " + e.className + " ").replace(Jo, " ").replace(" " + o + " ", " ");
      e.className = (r + (t ? " " + o : "")).replace(Jo, " ");
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
function zr(e, o, t) {
  if (e) {
    var r = e.getElementsByTagName(o), n = 0, m = r.length;
    if (t)
      for (; n < m; n++)
        t(r[n], n);
    return r;
  }
  return [];
}
function Ye() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function ze(e, o, t, r, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var m, v, l, h, E, A, w;
    if (e !== window && e.parentNode && e !== Ye() ? (m = e.getBoundingClientRect(), v = m.top, l = m.left, h = m.bottom, E = m.right, A = m.height, w = m.width) : (v = 0, l = 0, h = window.innerHeight, E = window.innerWidth, A = window.innerHeight, w = window.innerWidth), (o || t) && e !== window && (n = n || e.parentNode, !nt))
      do
        if (n && n.getBoundingClientRect && (W(n, "transform") !== "none" || t && W(n, "position") !== "static")) {
          var P = n.getBoundingClientRect();
          v -= P.top + parseInt(W(n, "border-top-width")), l -= P.left + parseInt(W(n, "border-left-width")), h = v + m.height, E = l + m.width;
          break;
        }
      while (n = n.parentNode);
    if (r && e !== window) {
      var b = zt(n || e), d = b && b.a, s = b && b.d;
      b && (v /= s, l /= d, w /= d, A /= s, h = v + A, E = l + w);
    }
    return {
      top: v,
      left: l,
      bottom: h,
      right: E,
      width: w,
      height: A
    };
  }
}
function qo(e, o, t) {
  for (var r = lt(e, !0), n = ze(e)[o]; r; ) {
    var m = ze(r)[t], v = void 0;
    if (v = n >= m, !v)
      return r;
    if (r === Ye())
      break;
    r = lt(r, !1);
  }
  return !1;
}
function At(e, o, t, r) {
  for (var n = 0, m = 0, v = e.children; m < v.length; ) {
    if (v[m].style.display !== "none" && v[m] !== X.ghost && (r || v[m] !== X.dragged) && Ue(v[m], t.draggable, e, !1)) {
      if (n === o)
        return v[m];
      n++;
    }
    m++;
  }
  return null;
}
function No(e, o) {
  for (var t = e.lastElementChild; t && (t === X.ghost || W(t, "display") === "none" || o && !Qt(t, o)); )
    t = t.previousElementSibling;
  return t || null;
}
function xe(e, o) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== X.clone && (!o || Qt(e, o)) && t++;
  return t;
}
function Go(e) {
  var o = 0, t = 0, r = Ye();
  if (e)
    do {
      var n = zt(e), m = n.a, v = n.d;
      o += e.scrollLeft * m, t += e.scrollTop * v;
    } while (e !== r && (e = e.parentNode));
  return [o, t];
}
function vn(e, o) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var r in o)
        if (o.hasOwnProperty(r) && o[r] === e[t][r])
          return Number(t);
    }
  return -1;
}
function lt(e, o) {
  if (!e || !e.getBoundingClientRect)
    return Ye();
  var t = e, r = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var n = W(t);
      if (t.clientWidth < t.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return Ye();
        if (r || o)
          return t;
        r = !0;
      }
    }
  while (t = t.parentNode);
  return Ye();
}
function yn(e, o) {
  if (e && o)
    for (var t in o)
      o.hasOwnProperty(t) && (e[t] = o[t]);
  return e;
}
function mo(e, o) {
  return Math.round(e.top) === Math.round(o.top) && Math.round(e.left) === Math.round(o.left) && Math.round(e.height) === Math.round(o.height) && Math.round(e.width) === Math.round(o.width);
}
var Dt;
function Ar(e, o) {
  return function() {
    if (!Dt) {
      var t = arguments, r = this;
      t.length === 1 ? e.call(r, t[0]) : e.apply(r, t), Dt = setTimeout(function() {
        Dt = void 0;
      }, o);
    }
  };
}
function bn() {
  clearTimeout(Dt), Dt = void 0;
}
function Pr(e, o, t) {
  e.scrollLeft += o, e.scrollTop += t;
}
function Er(e) {
  var o = window.Polymer, t = window.jQuery || window.Zepto;
  return o && o.dom ? o.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function _r(e, o, t) {
  var r = {};
  return Array.from(e.children).forEach(function(n) {
    var m, v, l, h;
    if (!(!Ue(n, o.draggable, e, !1) || n.animated || n === t)) {
      var E = ze(n);
      r.left = Math.min((m = r.left) !== null && m !== void 0 ? m : 1 / 0, E.left), r.top = Math.min((v = r.top) !== null && v !== void 0 ? v : 1 / 0, E.top), r.right = Math.max((l = r.right) !== null && l !== void 0 ? l : -1 / 0, E.right), r.bottom = Math.max((h = r.bottom) !== null && h !== void 0 ? h : -1 / 0, E.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var Me = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function $n() {
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
            var n = Ke({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var m = zt(r, !0);
              m && (n.top -= m.f, n.left -= m.e);
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
      e.splice(vn(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(o), typeof t == "function" && t();
        return;
      }
      var n = !1, m = 0;
      e.forEach(function(v) {
        var l = 0, h = v.target, E = h.fromRect, A = ze(h), w = h.prevFromRect, P = h.prevToRect, b = v.rect, d = zt(h, !0);
        d && (A.top -= d.f, A.left -= d.e), h.toRect = A, h.thisAnimationDuration && mo(w, A) && !mo(E, A) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - A.top) / (b.left - A.left) === (E.top - A.top) / (E.left - A.left) && (l = zn(b, w, P, r.options)), mo(A, E) || (h.prevFromRect = E, h.prevToRect = A, l || (l = r.options.animation), r.animate(h, b, A, l)), l && (n = !0, m = Math.max(m, l), clearTimeout(h.animationResetTimer), h.animationResetTimer = setTimeout(function() {
          h.animationTime = 0, h.prevFromRect = null, h.fromRect = null, h.prevToRect = null, h.thisAnimationDuration = null;
        }, l), h.thisAnimationDuration = l);
      }), clearTimeout(o), n ? o = setTimeout(function() {
        typeof t == "function" && t();
      }, m) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, r, n, m) {
      if (m) {
        W(t, "transition", ""), W(t, "transform", "");
        var v = zt(this.el), l = v && v.a, h = v && v.d, E = (r.left - n.left) / (l || 1), A = (r.top - n.top) / (h || 1);
        t.animatingX = !!E, t.animatingY = !!A, W(t, "transform", "translate3d(" + E + "px," + A + "px,0)"), this.forRepaintDummy = wn(t), W(t, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), W(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          W(t, "transition", ""), W(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, m);
      }
    }
  };
}
function wn(e) {
  return e.offsetWidth;
}
function zn(e, o, t, r) {
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
    vt.forEach(function(m) {
      o[m.pluginName] && (o[m.pluginName][n] && o[m.pluginName][n](Ke({
        sortable: o
      }, t)), o.options[m.pluginName] && o[m.pluginName][e] && o[m.pluginName][e](Ke({
        sortable: o
      }, t)));
    });
  },
  initializePlugins: function(e, o, t, r) {
    vt.forEach(function(v) {
      var l = v.pluginName;
      if (!(!e.options[l] && !v.initializeByDefault)) {
        var h = new v(e, o, e.options);
        h.sortable = e, h.options = e.options, e[l] = h, rt(t, h.defaults);
      }
    });
    for (var n in e.options)
      if (e.options.hasOwnProperty(n)) {
        var m = this.modifyOption(e, n, e.options[n]);
        typeof m < "u" && (e.options[n] = m);
      }
  },
  getEventProperties: function(e, o) {
    var t = {};
    return vt.forEach(function(r) {
      typeof r.eventProperties == "function" && rt(t, r.eventProperties.call(o[r.pluginName], e));
    }), t;
  },
  modifyOption: function(e, o, t) {
    var r;
    return vt.forEach(function(n) {
      e[n.pluginName] && n.optionListeners && typeof n.optionListeners[o] == "function" && (r = n.optionListeners[o].call(e[n.pluginName], t));
    }), r;
  }
};
function An(e) {
  var o = e.sortable, t = e.rootEl, r = e.name, n = e.targetEl, m = e.cloneEl, v = e.toEl, l = e.fromEl, h = e.oldIndex, E = e.newIndex, A = e.oldDraggableIndex, w = e.newDraggableIndex, P = e.originalEvent, b = e.putSortable, d = e.extraEventProperties;
  if (o = o || t && t[Me], !!o) {
    var s, f = o.options, a = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !nt && !Ft ? s = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (s = document.createEvent("Event"), s.initEvent(r, !0, !0)), s.to = v || t, s.from = l || t, s.item = n || t, s.clone = m, s.oldIndex = h, s.newIndex = E, s.oldDraggableIndex = A, s.newDraggableIndex = w, s.originalEvent = P, s.pullMode = b ? b.lastPutMode : void 0;
    var i = Ke(Ke({}, d), Rt.getEventProperties(r, o));
    for (var c in i)
      s[c] = i[c];
    t && t.dispatchEvent(s), f[a] && f[a].call(o, s);
  }
}
var Pn = ["evt"], De = function(e, o) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.evt, n = mn(t, Pn);
  Rt.pluginEvent.bind(X)(e, o, Ke({
    dragEl: R,
    parentEl: ye,
    ghostEl: K,
    rootEl: fe,
    nextEl: mt,
    lastDownEl: Wt,
    cloneEl: he,
    cloneHidden: it,
    dragStarted: Ct,
    putSortable: Ce,
    activeSortable: X.active,
    originalEvent: r,
    oldIndex: wt,
    oldDraggableIndex: Nt,
    newIndex: ke,
    newDraggableIndex: st,
    hideGhostForTarget: Tr,
    unhideGhostForTarget: Dr,
    cloneNowHidden: function() {
      it = !0;
    },
    cloneNowShown: function() {
      it = !1;
    },
    dispatchSortableEvent: function(m) {
      Ie({
        sortable: o,
        name: m,
        originalEvent: r
      });
    }
  }, n));
};
function Ie(e) {
  An(Ke({
    putSortable: Ce,
    cloneEl: he,
    targetEl: R,
    rootEl: fe,
    oldIndex: wt,
    oldDraggableIndex: Nt,
    newIndex: ke,
    newDraggableIndex: st
  }, e));
}
var R, ye, K, fe, mt, Wt, he, it, wt, ke, Nt, st, Bt, Ce, bt = !1, eo = !1, to = [], pt, je, ho, vo, Qo, er, Ct, yt, kt, Mt = !1, Ht = !1, Xt, Se, yo = [], Po = !1, oo = [], so = typeof document < "u", Vt = br, tr = Ft || nt ? "cssFloat" : "float", En = so && !$r && !br && "draggable" in document.createElement("div"), Cr = function() {
  if (so) {
    if (nt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Sr = function(e, o) {
  var t = W(e), r = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), n = At(e, 0, o), m = At(e, 1, o), v = n && W(n), l = m && W(m), h = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + ze(n).width, E = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ze(m).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (n && v.float && v.float !== "none") {
    var A = v.float === "left" ? "left" : "right";
    return m && (l.clear === "both" || l.clear === A) ? "vertical" : "horizontal";
  }
  return n && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || h >= r && t[tr] === "none" || m && t[tr] === "none" && h + E > r) ? "vertical" : "horizontal";
}, _n = function(e, o, t) {
  var r = t ? e.left : e.top, n = t ? e.right : e.bottom, m = t ? e.width : e.height, v = t ? o.left : o.top, l = t ? o.right : o.bottom, h = t ? o.width : o.height;
  return r === v || n === l || r + m / 2 === v + h / 2;
}, Cn = function(e, o) {
  var t;
  return to.some(function(r) {
    var n = r[Me].options.emptyInsertThreshold;
    if (!(!n || No(r))) {
      var m = ze(r), v = e >= m.left - n && e <= m.right + n, l = o >= m.top - n && o <= m.bottom + n;
      if (v && l)
        return t = r;
    }
  }), t;
}, Ir = function(e) {
  function o(n, m) {
    return function(v, l, h, E) {
      var A = v.options.group.name && l.options.group.name && v.options.group.name === l.options.group.name;
      if (n == null && (m || A))
        return !0;
      if (n == null || n === !1)
        return !1;
      if (m && n === "clone")
        return n;
      if (typeof n == "function")
        return o(n(v, l, h, E), m)(v, l, h, E);
      var w = (m ? v : l).options.group.name;
      return n === !0 || typeof n == "string" && n === w || n.join && n.indexOf(w) > -1;
    };
  }
  var t = {}, r = e.group;
  (!r || Ut(r) != "object") && (r = {
    name: r
  }), t.name = r.name, t.checkPull = o(r.pull, !0), t.checkPut = o(r.put), t.revertClone = r.revertClone, e.group = t;
}, Tr = function() {
  !Cr && K && W(K, "display", "none");
}, Dr = function() {
  !Cr && K && W(K, "display", "");
};
so && !$r && document.addEventListener("click", function(e) {
  if (eo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), eo = !1, !1;
}, !0);
var ft = function(e) {
  if (R) {
    e = e.touches ? e.touches[0] : e;
    var o = Cn(e.clientX, e.clientY);
    if (o) {
      var t = {};
      for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
      t.target = t.rootEl = o, t.preventDefault = void 0, t.stopPropagation = void 0, o[Me]._onDragOver(t);
    }
  }
}, Sn = function(e) {
  R && R.parentNode[Me]._isOutsideThisEl(e.target);
};
function X(e, o) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = o = rt({}, o), e[Me] = this;
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
      return Sr(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(m, v) {
      m.setData("Text", v.textContent);
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
  Ir(o);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = o.forceFallback ? !1 : En, this.nativeDraggable && (this.options.touchStartThreshold = 1), o.supportPointer ? se(e, "pointerdown", this._onTapStart) : (se(e, "mousedown", this._onTapStart), se(e, "touchstart", this._onTapStart)), this.nativeDraggable && (se(e, "dragover", this), se(e, "dragenter", this)), to.push(this.el), o.store && o.store.get && this.sort(o.store.get(this) || []), rt(this, $n());
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
      var o = this, t = this.el, r = this.options, n = r.preventOnFilter, m = e.type, v = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (v || e).target, h = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, E = r.filter;
      if (Fn(t), !R && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || r.disabled) && !h.isContentEditable && !(!this.nativeDraggable && Tt && l && l.tagName.toUpperCase() === "SELECT") && (l = Ue(l, r.draggable, t, !1), !(l && l.animated) && Wt !== l)) {
        if (wt = xe(l), Nt = xe(l, r.draggable), typeof E == "function") {
          if (E.call(this, e, l, this)) {
            Ie({
              sortable: o,
              rootEl: h,
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
          if (A = Ue(h, A.trim(), t, !1), A)
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
        r.handle && !Ue(h, r.handle, t, !1) || this._prepareDragStart(e, v, l);
      }
    }
  },
  _prepareDragStart: function(e, o, t) {
    var r = this, n = r.el, m = r.options, v = n.ownerDocument, l;
    if (t && !R && t.parentNode === n) {
      var h = ze(t);
      if (fe = n, R = t, ye = R.parentNode, mt = R.nextSibling, Wt = t, Bt = m.group, X.dragged = R, pt = {
        target: R,
        clientX: (o || e).clientX,
        clientY: (o || e).clientY
      }, Qo = pt.clientX - h.left, er = pt.clientY - h.top, this._lastX = (o || e).clientX, this._lastY = (o || e).clientY, R.style["will-change"] = "all", l = function() {
        if (De("delayEnded", r, {
          evt: e
        }), X.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !Ko && r.nativeDraggable && (R.draggable = !0), r._triggerDragStart(e, o), Ie({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), Ne(R, m.chosenClass, !0);
      }, m.ignore.split(",").forEach(function(E) {
        zr(R, E.trim(), bo);
      }), se(v, "dragover", ft), se(v, "mousemove", ft), se(v, "touchmove", ft), se(v, "mouseup", r._onDrop), se(v, "touchend", r._onDrop), se(v, "touchcancel", r._onDrop), Ko && this.nativeDraggable && (this.options.touchStartThreshold = 4, R.draggable = !0), De("delayStart", this, {
        evt: e
      }), m.delay && (!m.delayOnTouchOnly || o) && (!this.nativeDraggable || !(Ft || nt))) {
        if (X.eventCanceled) {
          this._onDrop();
          return;
        }
        se(v, "mouseup", r._disableDelayedDrag), se(v, "touchend", r._disableDelayedDrag), se(v, "touchcancel", r._disableDelayedDrag), se(v, "mousemove", r._delayedDragTouchMoveHandler), se(v, "touchmove", r._delayedDragTouchMoveHandler), m.supportPointer && se(v, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, m.delay);
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
    re(e, "mouseup", this._disableDelayedDrag), re(e, "touchend", this._disableDelayedDrag), re(e, "touchcancel", this._disableDelayedDrag), re(e, "mousemove", this._delayedDragTouchMoveHandler), re(e, "touchmove", this._delayedDragTouchMoveHandler), re(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, o) {
    o = o || e.pointerType == "touch" && e, !this.nativeDraggable || o ? this.options.supportPointer ? se(document, "pointermove", this._onTouchMove) : o ? se(document, "touchmove", this._onTouchMove) : se(document, "mousemove", this._onTouchMove) : (se(R, "dragend", this), se(fe, "dragstart", this._onDragStart));
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
      }), this.nativeDraggable && se(document, "dragover", Sn);
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
    if (je) {
      this._lastX = je.clientX, this._lastY = je.clientY, Tr();
      for (var e = document.elementFromPoint(je.clientX, je.clientY), o = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(je.clientX, je.clientY), e !== o); )
        o = e;
      if (R.parentNode[Me]._isOutsideThisEl(e), o)
        do {
          if (o[Me]) {
            var t = void 0;
            if (t = o[Me]._onDragOver({
              clientX: je.clientX,
              clientY: je.clientY,
              target: e,
              rootEl: o
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = o;
        } while (o = o.parentNode);
      Dr();
    }
  },
  _onTouchMove: function(e) {
    if (pt) {
      var o = this.options, t = o.fallbackTolerance, r = o.fallbackOffset, n = e.touches ? e.touches[0] : e, m = K && zt(K, !0), v = K && m && m.a, l = K && m && m.d, h = Vt && Se && Go(Se), E = (n.clientX - pt.clientX + r.x) / (v || 1) + (h ? h[0] - yo[0] : 0) / (v || 1), A = (n.clientY - pt.clientY + r.y) / (l || 1) + (h ? h[1] - yo[1] : 0) / (l || 1);
      if (!X.active && !bt) {
        if (t && Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (K) {
        m ? (m.e += E - (ho || 0), m.f += A - (vo || 0)) : m = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: E,
          f: A
        };
        var w = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
        W(K, "webkitTransform", w), W(K, "mozTransform", w), W(K, "msTransform", w), W(K, "transform", w), ho = E, vo = A, je = n;
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
        Se !== document.body && Se !== document.documentElement ? (Se === document && (Se = Ye()), o.top += Se.scrollTop, o.left += Se.scrollLeft) : Se = Ye(), yo = Go(Se);
      }
      K = R.cloneNode(!0), Ne(K, t.ghostClass, !1), Ne(K, t.fallbackClass, !0), Ne(K, t.dragClass, !0), W(K, "transition", ""), W(K, "transform", ""), W(K, "box-sizing", "border-box"), W(K, "margin", 0), W(K, "top", o.top), W(K, "left", o.left), W(K, "width", o.width), W(K, "height", o.height), W(K, "opacity", "0.8"), W(K, "position", Vt ? "absolute" : "fixed"), W(K, "zIndex", "100000"), W(K, "pointerEvents", "none"), X.ghost = K, e.appendChild(K), W(K, "transform-origin", Qo / parseInt(K.style.width) * 100 + "% " + er / parseInt(K.style.height) * 100 + "%");
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
    De("setupClone", this), X.eventCanceled || (he = Er(R), he.removeAttribute("id"), he.draggable = !1, he.style["will-change"] = "", this._hideClone(), Ne(he, this.options.chosenClass, !1), X.clone = he), t.cloneId = Yt(function() {
      De("clone", t), !X.eventCanceled && (t.options.removeCloneOnHide || fe.insertBefore(he, R), t._hideClone(), Ie({
        sortable: t,
        name: "clone"
      }));
    }), !o && Ne(R, n.dragClass, !0), o ? (eo = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (re(document, "mouseup", t._onDrop), re(document, "touchend", t._onDrop), re(document, "touchcancel", t._onDrop), r && (r.effectAllowed = "move", n.setData && n.setData.call(t, r, R)), se(document, "drop", t), W(R, "transform", "translateZ(0)")), bt = !0, t._dragStartId = Yt(t._dragStarted.bind(t, o, e)), se(document, "selectstart", t), Ct = !0, Tt && W(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var o = this.el, t = e.target, r, n, m, v = this.options, l = v.group, h = X.active, E = Bt === l, A = v.sort, w = Ce || h, P, b = this, d = !1;
    if (Po)
      return;
    function s(U, x) {
      De(U, b, Ke({
        evt: e,
        isOwner: E,
        axis: P ? "vertical" : "horizontal",
        revert: m,
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
    function f() {
      s("dragOverAnimationCapture"), b.captureAnimationState(), b !== w && w.captureAnimationState();
    }
    function a(U) {
      return s("dragOverCompleted", {
        insertion: U
      }), U && (E ? h._hideClone() : h._showClone(b), b !== w && (Ne(R, Ce ? Ce.options.ghostClass : h.options.ghostClass, !1), Ne(R, v.ghostClass, !0)), Ce !== b && b !== X.active ? Ce = b : b === X.active && Ce && (Ce = null), w === b && (b._ignoreWhileAnimating = t), b.animateAll(function() {
        s("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== w && (w.animateAll(), w._ignoreWhileAnimating = null)), (t === R && !R.animated || t === o && !t.animated) && (yt = null), !v.dragoverBubble && !e.rootEl && t !== document && (R.parentNode[Me]._isOutsideThisEl(e.target), !U && ft(e)), !v.dragoverBubble && e.stopPropagation && e.stopPropagation(), d = !0;
    }
    function i() {
      ke = xe(R), st = xe(R, v.draggable), Ie({
        sortable: b,
        name: "change",
        toEl: o,
        newIndex: ke,
        newDraggableIndex: st,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = Ue(t, v.draggable, o, !0), s("dragOver"), X.eventCanceled)
      return d;
    if (R.contains(e.target) || t.animated && t.animatingX && t.animatingY || b._ignoreWhileAnimating === t)
      return a(!1);
    if (eo = !1, h && !v.disabled && (E ? A || (m = ye !== fe) : Ce === this || (this.lastPutMode = Bt.checkPull(this, h, R, e)) && l.checkPut(this, h, R, e))) {
      if (P = this._getDirection(e, t) === "vertical", r = ze(R), s("dragOverValid"), X.eventCanceled)
        return d;
      if (m)
        return ye = fe, f(), this._hideClone(), s("revert"), X.eventCanceled || (mt ? fe.insertBefore(R, mt) : fe.appendChild(R)), a(!0);
      var c = No(o, v.draggable);
      if (!c || Nn(e, P, this) && !c.animated) {
        if (c === R)
          return a(!1);
        if (c && o === e.target && (t = c), t && (n = ze(t)), Zt(fe, o, R, r, t, n, e, !!t) !== !1)
          return f(), c && c.nextSibling ? o.insertBefore(R, c.nextSibling) : o.appendChild(R), ye = o, i(), a(!0);
      } else if (c && Dn(e, P, this)) {
        var p = At(o, 0, v, !0);
        if (p === R)
          return a(!1);
        if (t = p, n = ze(t), Zt(fe, o, R, r, t, n, e, !1) !== !1)
          return f(), o.insertBefore(R, p), ye = o, i(), a(!0);
      } else if (t.parentNode === o) {
        n = ze(t);
        var $ = 0, z, C = R.parentNode !== o, u = !_n(R.animated && R.toRect || r, t.animated && t.toRect || n, P), y = P ? "top" : "left", _ = qo(t, "top", "top") || qo(R, "top", "top"), S = _ ? _.scrollTop : void 0;
        yt !== t && (z = n[y], Mt = !1, Ht = !u && v.invertSwap || C), $ = kn(e, t, n, P, u ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, Ht, yt === t);
        var T;
        if ($ !== 0) {
          var M = xe(R);
          do
            M -= $, T = ye.children[M];
          while (T && (W(T, "display") === "none" || T === K));
        }
        if ($ === 0 || T === t)
          return a(!1);
        yt = t, kt = $;
        var L = t.nextElementSibling, k = !1;
        k = $ === 1;
        var F = Zt(fe, o, R, r, t, n, e, k);
        if (F !== !1)
          return (F === 1 || F === -1) && (k = F === 1), Po = !0, setTimeout(Tn, 30), f(), k && !L ? o.appendChild(R) : t.parentNode.insertBefore(R, k ? L : t), _ && Pr(_, 0, S - _.scrollTop), ye = R.parentNode, z !== void 0 && !Ht && (Xt = Math.abs(z - ze(t)[y])), i(), a(!0);
      }
      if (o.contains(R))
        return a(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    re(document, "mousemove", this._onTouchMove), re(document, "touchmove", this._onTouchMove), re(document, "pointermove", this._onTouchMove), re(document, "dragover", ft), re(document, "mousemove", ft), re(document, "touchmove", ft);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    re(e, "mouseup", this._onDrop), re(e, "touchend", this._onDrop), re(e, "pointerup", this._onDrop), re(e, "touchcancel", this._onDrop), re(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var o = this.el, t = this.options;
    if (ke = xe(R), st = xe(R, t.draggable), De("drop", this, {
      evt: e
    }), ye = R && R.parentNode, ke = xe(R), st = xe(R, t.draggable), X.eventCanceled) {
      this._nulling();
      return;
    }
    bt = !1, Ht = !1, Mt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Eo(this.cloneId), Eo(this._dragStartId), this.nativeDraggable && (re(document, "drop", this), re(o, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Tt && W(document.body, "user-select", ""), W(R, "transform", ""), e && (Ct && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), K && K.parentNode && K.parentNode.removeChild(K), (fe === ye || Ce && Ce.lastPutMode !== "clone") && he && he.parentNode && he.parentNode.removeChild(he), R && (this.nativeDraggable && re(R, "dragend", this), bo(R), R.style["will-change"] = "", Ct && !bt && Ne(R, Ce ? Ce.options.ghostClass : this.options.ghostClass, !1), Ne(R, this.options.chosenClass, !1), Ie({
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
    })), X.active && ((ke == null || ke === -1) && (ke = wt, st = Nt), Ie({
      sortable: this,
      name: "end",
      toEl: ye,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    De("nulling", this), fe = R = ye = K = mt = he = Wt = it = pt = je = Ct = ke = st = wt = Nt = yt = kt = Ce = Bt = X.dragged = X.ghost = X.clone = X.active = null, oo.forEach(function(e) {
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
        R && (this._onDragOver(e), In(e));
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
    for (var e = [], o, t = this.el.children, r = 0, n = t.length, m = this.options; r < n; r++)
      o = t[r], Ue(o, m.draggable, this.el, !1) && e.push(o.getAttribute(m.dataIdAttr) || On(o));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, o) {
    var t = {}, r = this.el;
    this.toArray().forEach(function(n, m) {
      var v = r.children[m];
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
    typeof r < "u" ? t[e] = r : t[e] = o, e === "group" && Ir(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    De("destroy", this);
    var e = this.el;
    e[Me] = null, re(e, "mousedown", this._onTapStart), re(e, "touchstart", this._onTapStart), re(e, "pointerdown", this._onTapStart), this.nativeDraggable && (re(e, "dragover", this), re(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(o) {
      o.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), to.splice(to.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!it) {
      if (De("hideClone", this), X.eventCanceled)
        return;
      W(he, "display", "none"), this.options.removeCloneOnHide && he.parentNode && he.parentNode.removeChild(he), it = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (it) {
      if (De("showClone", this), X.eventCanceled)
        return;
      R.parentNode == fe && !this.options.group.revertClone ? fe.insertBefore(he, R) : mt ? fe.insertBefore(he, mt) : fe.appendChild(he), this.options.group.revertClone && this.animate(R, he), W(he, "display", ""), it = !1;
    }
  }
};
function In(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Zt(e, o, t, r, n, m, v, l) {
  var h, E = e[Me], A = E.options.onMove, w;
  return window.CustomEvent && !nt && !Ft ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = o, h.from = e, h.dragged = t, h.draggedRect = r, h.related = n || o, h.relatedRect = m || ze(o), h.willInsertAfter = l, h.originalEvent = v, e.dispatchEvent(h), A && (w = A.call(E, h, v)), w;
}
function bo(e) {
  e.draggable = !1;
}
function Tn() {
  Po = !1;
}
function Dn(e, o, t) {
  var r = ze(At(t.el, 0, t.options, !0)), n = _r(t.el, t.options, K), m = 10;
  return o ? e.clientX < n.left - m || e.clientY < r.top && e.clientX < r.right : e.clientY < n.top - m || e.clientY < r.bottom && e.clientX < r.left;
}
function Nn(e, o, t) {
  var r = ze(No(t.el, t.options.draggable)), n = _r(t.el, t.options, K), m = 10;
  return o ? e.clientX > n.right + m || e.clientY > r.bottom && e.clientX > r.left : e.clientY > n.bottom + m || e.clientX > r.right && e.clientY > r.top;
}
function kn(e, o, t, r, n, m, v, l) {
  var h = r ? e.clientY : e.clientX, E = r ? t.height : t.width, A = r ? t.top : t.left, w = r ? t.bottom : t.right, P = !1;
  if (!v) {
    if (l && Xt < E * n) {
      if (!Mt && (kt === 1 ? h > A + E * m / 2 : h < w - E * m / 2) && (Mt = !0), Mt)
        P = !0;
      else if (kt === 1 ? h < A + Xt : h > w - Xt)
        return -kt;
    } else if (h > A + E * (1 - n) / 2 && h < w - E * (1 - n) / 2)
      return Mn(o);
  }
  return P = P || v, P && (h < A + E * m / 2 || h > w - E * m / 2) ? h > A + E / 2 ? 1 : -1 : 0;
}
function Mn(e) {
  return xe(R) < xe(e) ? 1 : -1;
}
function On(e) {
  for (var o = e.tagName + e.className + e.src + e.href + e.textContent, t = o.length, r = 0; t--; )
    r += o.charCodeAt(t);
  return r.toString(36);
}
function Fn(e) {
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
so && se(document, "touchmove", function(e) {
  (X.active || bt) && e.cancelable && e.preventDefault();
});
X.utils = {
  on: se,
  off: re,
  css: W,
  find: zr,
  is: function(e, o) {
    return !!Ue(e, o, e, !1);
  },
  extend: yn,
  throttle: Ar,
  closest: Ue,
  toggleClass: Ne,
  clone: Er,
  index: xe,
  nextTick: Yt,
  cancelNextTick: Eo,
  detectDirection: Sr,
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
    r.utils && (X.utils = Ke(Ke({}, X.utils), r.utils)), Rt.mount(r);
  });
};
X.create = function(e, o) {
  return new X(e, o);
};
X.version = gn;
var $e = [], St, _o, Co = !1, $o, wo, ro, It;
function Rn() {
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
      this.sortable.nativeDraggable ? se(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? se(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? se(document, "touchmove", this._handleFallbackAutoScroll) : se(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(o) {
      var t = o.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? re(document, "dragover", this._handleAutoScroll) : (re(document, "pointermove", this._handleFallbackAutoScroll), re(document, "touchmove", this._handleFallbackAutoScroll), re(document, "mousemove", this._handleFallbackAutoScroll)), or(), Kt(), bn();
    },
    nulling: function() {
      ro = _o = St = Co = It = $o = wo = null, $e.length = 0;
    },
    _handleFallbackAutoScroll: function(o) {
      this._handleAutoScroll(o, !0);
    },
    _handleAutoScroll: function(o, t) {
      var r = this, n = (o.touches ? o.touches[0] : o).clientX, m = (o.touches ? o.touches[0] : o).clientY, v = document.elementFromPoint(n, m);
      if (ro = o, t || this.options.forceAutoScrollFallback || Ft || nt || Tt) {
        zo(o, this.options, v, t);
        var l = lt(v, !0);
        Co && (!It || n !== $o || m !== wo) && (It && or(), It = setInterval(function() {
          var h = lt(document.elementFromPoint(n, m), !0);
          h !== l && (l = h, Kt()), zo(o, r.options, h, t);
        }, 10), $o = n, wo = m);
      } else {
        if (!this.options.bubbleScroll || lt(v, !0) === Ye()) {
          Kt();
          return;
        }
        zo(o, this.options, lt(v, !1), !1);
      }
    }
  }, rt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Kt() {
  $e.forEach(function(e) {
    clearInterval(e.pid);
  }), $e = [];
}
function or() {
  clearInterval(It);
}
var zo = Ar(function(e, o, t, r) {
  if (o.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, m = (e.touches ? e.touches[0] : e).clientY, v = o.scrollSensitivity, l = o.scrollSpeed, h = Ye(), E = !1, A;
    _o !== t && (_o = t, Kt(), St = o.scroll, A = o.scrollFn, St === !0 && (St = lt(t, !0)));
    var w = 0, P = St;
    do {
      var b = P, d = ze(b), s = d.top, f = d.bottom, a = d.left, i = d.right, c = d.width, p = d.height, $ = void 0, z = void 0, C = b.scrollWidth, u = b.scrollHeight, y = W(b), _ = b.scrollLeft, S = b.scrollTop;
      b === h ? ($ = c < C && (y.overflowX === "auto" || y.overflowX === "scroll" || y.overflowX === "visible"), z = p < u && (y.overflowY === "auto" || y.overflowY === "scroll" || y.overflowY === "visible")) : ($ = c < C && (y.overflowX === "auto" || y.overflowX === "scroll"), z = p < u && (y.overflowY === "auto" || y.overflowY === "scroll"));
      var T = $ && (Math.abs(i - n) <= v && _ + c < C) - (Math.abs(a - n) <= v && !!_), M = z && (Math.abs(f - m) <= v && S + p < u) - (Math.abs(s - m) <= v && !!S);
      if (!$e[w])
        for (var L = 0; L <= w; L++)
          $e[L] || ($e[L] = {});
      ($e[w].vx != T || $e[w].vy != M || $e[w].el !== b) && ($e[w].el = b, $e[w].vx = T, $e[w].vy = M, clearInterval($e[w].pid), (T != 0 || M != 0) && (E = !0, $e[w].pid = setInterval((function() {
        r && this.layer === 0 && X.active._onTouchMove(ro);
        var k = $e[this.layer].vy ? $e[this.layer].vy * l : 0, F = $e[this.layer].vx ? $e[this.layer].vx * l : 0;
        typeof A == "function" && A.call(X.dragged.parentNode[Me], F, k, e, ro, $e[this.layer].el) !== "continue" || Pr($e[this.layer].el, F, k);
      }).bind({
        layer: w
      }), 24))), w++;
    } while (o.bubbleScroll && P !== h && (P = lt(P, !1)));
    Co = E;
  }
}, 30), Nr = function(e) {
  var o = e.originalEvent, t = e.putSortable, r = e.dragEl, n = e.activeSortable, m = e.dispatchSortableEvent, v = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (o) {
    var h = t || n;
    v();
    var E = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : o, A = document.elementFromPoint(E.clientX, E.clientY);
    l(), h && !h.el.contains(A) && (m("spill"), this.onSpill({
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
  drop: Nr
};
rt(ko, {
  pluginName: "revertOnSpill"
});
function Mo() {
}
Mo.prototype = {
  onSpill: function(e) {
    var o = e.dragEl, t = e.putSortable, r = t || this.sortable;
    r.captureAnimationState(), o.parentNode && o.parentNode.removeChild(o), r.animateAll();
  },
  drop: Nr
};
rt(Mo, {
  pluginName: "removeOnSpill"
});
X.mount(new Rn());
X.mount(Mo, ko);
function Ln(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function xn(e) {
  Io() && Do(e);
}
function Bn(e) {
  Io() ? To(e) : qt(e);
}
let kr = null, Mr = null;
function rr(e = null, o = null) {
  kr = e, Mr = o;
}
function Hn() {
  return {
    data: kr,
    clonedData: Mr
  };
}
const nr = Symbol("cloneElement");
function Vn(...e) {
  var o, t;
  const r = (o = Io()) == null ? void 0 : o.proxy;
  let n = null;
  const m = e[0];
  let [, v, l] = e;
  Array.isArray(G(v)) || (l = v, v = null);
  let h = null;
  const {
    immediate: E = !0,
    clone: A = Ln,
    customUpdate: w
  } = (t = G(l)) != null ? t : {};
  function P(u) {
    var y;
    const { from: _, oldIndex: S, item: T } = u;
    n = Array.from(_.childNodes);
    const M = G((y = G(v)) == null ? void 0 : y[S]), L = A(M);
    rr(M, L), T[nr] = L;
  }
  function b(u) {
    const y = u.item[nr];
    if (!rn(y)) {
      if (fo(u.item), po(v)) {
        const _ = [...G(v)];
        v.value = Uo(_, u.newDraggableIndex, y);
        return;
      }
      Uo(G(v), u.newDraggableIndex, y);
    }
  }
  function d(u) {
    const { from: y, item: _, oldIndex: S, oldDraggableIndex: T, pullMode: M, clone: L } = u;
    if (Wo(y, _, S), M === "clone") {
      fo(L);
      return;
    }
    if (po(v)) {
      const k = [...G(v)];
      v.value = jo(k, T);
      return;
    }
    jo(G(v), T);
  }
  function s(u) {
    if (w) {
      w(u);
      return;
    }
    const { from: y, item: _, oldIndex: S, oldDraggableIndex: T, newDraggableIndex: M } = u;
    if (fo(_), Wo(y, _, S), po(v)) {
      const L = [...G(v)];
      v.value = Zo(
        L,
        T,
        M
      );
      return;
    }
    Zo(G(v), T, M);
  }
  function f(u) {
    const { newIndex: y, oldIndex: _, from: S, to: T } = u;
    let M = null;
    const L = y === _ && S === T;
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
      if (rr(), M)
        throw M;
    });
  }
  const a = {
    onUpdate: s,
    onStart: P,
    onAdd: b,
    onRemove: d,
    onEnd: f
  };
  function i(u) {
    const y = G(m);
    return u || (u = nn(y) ? an(y, r == null ? void 0 : r.$el) : y), u && !dn(u) && (u = u.$el), u || void 0, u;
  }
  function c() {
    var u;
    const y = (u = G(l)) != null ? u : {}, { immediate: _, clone: S } = y, T = yr(y, ["immediate", "clone"]);
    return Xo(T, (M, L) => {
      cn(M) && (T[M] = (k, ...F) => {
        const U = Hn();
        return un(k, U), L(k, ...F);
      });
    }), ln(
      v === null ? {} : a,
      T
    );
  }
  const p = (u) => {
    u = i(u), h && $.destroy(), h = new X(u, c());
  };
  We(
    () => l,
    () => {
      h && Xo(c(), (u, y) => {
        h == null || h.option(u, y);
      });
    },
    { deep: !0 }
  );
  const $ = {
    option: (u, y) => h == null ? void 0 : h.option(u, y),
    destroy: () => {
      h == null || h.destroy(), h = null;
    },
    save: () => h == null ? void 0 : h.save(),
    toArray: () => h == null ? void 0 : h.toArray(),
    closest: (...u) => h == null ? void 0 : h.closest(...u)
  }, z = () => $ == null ? void 0 : $.option("disabled", !0), C = () => $ == null ? void 0 : $.option("disabled", !1);
  return Bn(() => {
    E && p();
  }), xn($.destroy), $t({ start: p, pause: z, resume: C }, $);
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
], Zn = [
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
], jn = _e({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Zn,
  emits: ["update:modelValue", ...So],
  setup(e, { slots: o, emit: t, expose: r, attrs: n }) {
    const m = So.reduce((A, w) => {
      const P = `on${w.replace(/^\S/, (b) => b.toUpperCase())}`;
      return A[P] = (...b) => t(w, ...b), A;
    }, {}), v = de(() => {
      const A = fr(e), { modelValue: w } = A, P = yr(A, ["modelValue"]), b = Object.entries(P).reduce((d, [s, f]) => {
        const a = G(f);
        return a !== void 0 && (d[s] = a), d;
      }, {});
      return $t($t({}, m), on($t($t({}, n), b)));
    }), l = de({
      get: () => e.modelValue,
      set: (A) => t("update:modelValue", A)
    }), h = ne(), E = ao(
      Vn(e.target || h, l, v)
    );
    return r(E), () => {
      var A;
      return Kr(e.tag || "div", { ref: h }, (A = o == null ? void 0 : o.default) == null ? void 0 : A.call(o, E));
    };
  }
}), Un = { class: "zero-code-data-display" }, Wn = { class: "zero-code-data-tabs" }, Xn = ["onClick"], Yn = { class: "zero-code-data-content" }, Kn = {
  key: 0,
  class: "zero-code-data-section"
}, Jn = {
  key: 0,
  class: "zero-code-rendered-content"
}, qn = { class: "zero-code-add-part-button-container" }, Gn = { class: "zero-code-component-header" }, Qn = { class: "zero-code-header-actions" }, ea = ["onClick"], ta = ["onClick"], oa = ["innerHTML"], ra = { class: "zero-code-add-part-button-container" }, na = ["onClick"], aa = {
  key: 1,
  class: "zero-code-no-data"
}, sa = { class: "zero-code-empty-state" }, ia = { class: "zero-code-add-part-button-container" }, la = {
  key: 1,
  class: "zero-code-data-section"
}, da = { class: "zero-code-data-display-section" }, ca = { class: "zero-code-parts-sub-content" }, ua = { class: "zero-code-parts-sub-section" }, pa = { class: "zero-code-data-display-pre" }, fa = /* @__PURE__ */ _e({
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
    }), m = () => {
    }, v = () => {
    }, l = ["rendered", "page"], h = (w) => ({
      rendered: "レンダリング結果",
      source: "HTMLソース",
      page: "データ表示"
    })[w], E = de(() => A(t.pageData)), A = (w) => {
      const P = (b, d = 0) => {
        const s = "  ".repeat(d), f = "  ".repeat(d + 1);
        if (Array.isArray(b))
          return b.length === 0 ? "[]" : `[
${b.map((i) => f + P(i, d + 1)).join(`,
`)}
${s}]`;
        if (typeof b == "object" && b !== null) {
          const a = Object.entries(b);
          return a.length === 0 ? "{}" : `{
${a.map(([c, p]) => {
            let $;
            if (typeof p == "string") {
              const z = p.replace(/\\n/g, `
`).replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
              if (z.includes(`
`)) {
                const C = z.split(`
`);
                $ = C.map((y, _) => _ === 0 ? `\`${y}` : _ === C.length - 1 ? `${f}${y}\`` : `${f}${y}`).join(`
`);
              } else
                $ = `"${z}"`;
            } else
              $ = P(p, d + 1);
            return `${f}"${c}": ${$}`;
          }).join(`,
`)}
${s}}`;
        }
        return typeof b == "string" ? `"${b.replace(/"/g, '\\"')}"` : JSON.stringify(b);
      };
      return P(w);
    };
    return (w, P) => (D(), N("div", Un, [
      g("div", Wn, [
        (D(), N(ee, null, ae(l, (b) => g("button", {
          key: b,
          class: Fe(["zero-code-data-tab-button", { active: w.modelValue === b }]),
          onClick: (d) => w.$emit("update:modelValue", b)
        }, H(h(b)), 11, Xn)), 64))
      ]),
      g("div", Yn, [
        w.modelValue === "rendered" ? (D(), N("div", Kn, [
          Array.isArray(w.pageData) && w.pageData.length > 0 ? (D(), N("div", Jn, [
            g("div", qn, [
              g("button", {
                class: "zero-code-add-part-button",
                onClick: P[0] || (P[0] = (b) => w.$emit("add-part", 0))
              }, P[3] || (P[3] = [
                g("span", { class: "zero-code-plus-icon" }, "＋", -1),
                g("span", { class: "zero-code-button-text" }, "パーツを追加", -1)
              ]))
            ]),
            ht(G(jn), {
              modelValue: n.value,
              "onUpdate:modelValue": P[1] || (P[1] = (b) => n.value = b),
              animation: 200,
              disabled: w.isTextEditing,
              "ghost-class": "ghost",
              "chosen-class": "chosen",
              "drag-class": "drag",
              onStart: m,
              onEnd: v
            }, {
              default: mr(() => [
                (D(!0), N(ee, null, ae(w.pageData, (b, d) => (D(), N("div", {
                  key: b.id || d,
                  class: "zero-code-rendered-component zero-code-draggable-item"
                }, [
                  g("div", Gn, [
                    P[4] || (P[4] = g("div", { class: "zero-code-drag-handle" }, [
                      g("span", { class: "zero-code-drag-icon" }, "⠿")
                    ], -1)),
                    g("div", Qn, [
                      g("button", {
                        class: "zero-code-edit-btn",
                        onClick: (s) => w.$emit("edit-part", d)
                      }, "編集", 8, ea),
                      g("button", {
                        class: "zero-code-delete-btn",
                        onClick: (s) => w.$emit("delete-part", d)
                      }, "削除", 8, ta)
                    ])
                  ]),
                  g("div", {
                    class: "zero-code-component-preview",
                    innerHTML: w.renderComponentWithNested(b, d)
                  }, null, 8, oa),
                  g("div", ra, [
                    g("button", {
                      class: "zero-code-add-part-button",
                      onClick: (s) => w.$emit("add-part", d + 1)
                    }, P[5] || (P[5] = [
                      g("span", { class: "zero-code-plus-icon" }, "＋", -1),
                      g("span", { class: "zero-code-button-text" }, "パーツを追加", -1)
                    ]), 8, na)
                  ])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "disabled"])
          ])) : (D(), N("div", aa, [
            g("div", sa, [
              P[7] || (P[7] = g("p", { class: "zero-code-empty-message" }, "パーツがありません", -1)),
              g("div", ia, [
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
        w.modelValue === "page" ? (D(), N("div", la, [
          g("div", da, [
            g("div", ca, [
              g("div", ua, [
                P[8] || (P[8] = g("h4", { style: { margin: "0 0 16px 0", color: "#374151", "font-size": "1.1rem" } }, "Pageデータ（リアルタイム更新）", -1)),
                g("pre", pa, H(E.value), 1)
              ])
            ])
          ])
        ])) : Y("", !0)
      ])
    ]));
  }
}), ma = { class: "zero-code-modal-header" }, ga = { class: "zero-code-data-tabs" }, ha = ["onClick"], va = { class: "zero-code-modal-body" }, ya = {
  key: 0,
  class: "zero-code-parts-section"
}, ba = {
  key: 0,
  class: "zero-code-parts-list"
}, $a = { class: "zero-code-part-section-title" }, wa = { class: "zero-code-modules-grid" }, za = ["onClick"], Aa = { class: "zero-code-module-title" }, Pa = ["innerHTML"], Ea = {
  key: 1,
  class: "zero-code-empty-state"
}, _a = {
  key: 1,
  class: "zero-code-parts-section"
}, Ca = {
  key: 0,
  class: "zero-code-parts-list"
}, Sa = { class: "zero-code-part-section-title" }, Ia = { class: "zero-code-modules-grid" }, Ta = ["onClick"], Da = { class: "zero-code-module-title" }, Na = ["innerHTML"], ka = {
  key: 1,
  class: "zero-code-empty-state"
}, ar = /* @__PURE__ */ _e({
  __name: "PartSelector",
  props: {
    parts: { type: Array },
    isNested: { type: Boolean, default: !1 }
  },
  emits: ["close", "select-part"],
  setup(e, { emit: o }) {
    const t = e, r = ne("common"), n = ["common", "individual"], m = (w) => ({
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
    })).filter((w) => w.module.length > 0)), h = o, E = (w, P) => {
      h("select-part", w, P);
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
        onClick: P[1] || (P[1] = He(() => {
        }, ["stop"]))
      }, [
        g("div", ma, [
          g("h4", null, H(t.isNested ? "ネストパーツを選択" : "パーツを選択"), 1),
          g("button", {
            class: "zero-code-close-button",
            onClick: P[0] || (P[0] = (b) => w.$emit("close"))
          }, "✖️")
        ]),
        g("div", ga, [
          (D(), N(ee, null, ae(n, (b) => g("button", {
            key: b,
            class: Fe(["zero-code-data-tab-button", { active: r.value === b }]),
            onClick: (d) => r.value = b
          }, H(m(b)), 11, ha)), 64))
        ]),
        g("div", va, [
          r.value === "common" ? (D(), N("div", ya, [
            v.value.length > 0 ? (D(), N("div", ba, [
              (D(!0), N(ee, null, ae(v.value, (b, d) => (D(), N("div", {
                key: d,
                class: "zero-code-part-section"
              }, [
                g("h5", $a, H(b.type), 1),
                g("div", wa, [
                  (D(!0), N(ee, null, ae(b.module, (s, f) => (D(), N("div", {
                    key: f,
                    class: "zero-code-module-card",
                    onClick: (a) => E(b.type, s)
                  }, [
                    g("div", Aa, H(s.title), 1),
                    g("div", {
                      class: "zero-code-module-preview",
                      innerHTML: A(s.body)
                    }, null, 8, Pa)
                  ], 8, za))), 128))
                ])
              ]))), 128))
            ])) : (D(), N("div", Ea, P[3] || (P[3] = [
              g("p", null, "共通パーツが登録されていません。", -1)
            ])))
          ])) : Y("", !0),
          r.value === "individual" ? (D(), N("div", _a, [
            l.value.length > 0 ? (D(), N("div", Ca, [
              (D(!0), N(ee, null, ae(l.value, (b, d) => (D(), N("div", {
                key: d,
                class: "zero-code-part-section"
              }, [
                g("h5", Sa, H(b.type), 1),
                g("div", Ia, [
                  (D(!0), N(ee, null, ae(b.module, (s, f) => (D(), N("div", {
                    key: f,
                    class: "zero-code-module-card",
                    onClick: (a) => E(b.type, s)
                  }, [
                    g("div", Da, H(s.title), 1),
                    g("div", {
                      class: "zero-code-module-preview",
                      innerHTML: A(s.body)
                    }, null, 8, Na)
                  ], 8, Ta))), 128))
                ])
              ]))), 128))
            ])) : (D(), N("div", ka, P[4] || (P[4] = [
              g("p", null, "個別パーツが登録されていません。", -1)
            ])))
          ])) : Y("", !0)
        ])
      ])
    ]));
  }
}), Ma = { class: "zero-code-array-field" }, Oa = { class: "zero-code-array-header" }, Fa = {
  key: 0,
  class: "zero-code-empty-array-message"
}, Ra = { class: "zero-code-empty-message-content" }, La = { class: "zero-code-empty-text" }, xa = { class: "zero-code-button-text" }, Ba = ["onDragstart", "onDrop"], Ha = { class: "zero-code-array-item-header" }, Va = { class: "zero-code-array-item-controls" }, Za = ["onClick"], ja = { class: "zero-code-array-item-fields" }, Ua = ["for"], Wa = {
  key: 0,
  class: "zero-code-radio-group"
}, Xa = ["id", "value", "name", "checked", "onChange"], Ya = ["for"], Ka = {
  key: 1,
  class: "zero-code-checkbox-group"
}, Ja = ["id", "checked", "onChange"], qa = ["for"], Ga = ["id", "value", "onInput"], Qa = ["value"], es = ["id", "value", "onChange"], ts = ["value", "selected"], os = ["id", "value", "onInput"], rs = ["id", "value", "type", "onInput"], ns = {
  key: 0,
  class: "zero-code-nested-array-field"
}, as = { class: "zero-code-nested-array-label" }, ss = { class: "zero-code-nested-array-info" }, is = { class: "zero-code-array-count" }, ls = ["onClick"], ds = /* @__PURE__ */ _e({
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
    }, m = (b, d, s) => {
      const f = b[d];
      return Array.isArray(f) && f.includes(s);
    }, v = (b, d, s, f) => {
      let i = t.items[b][d] || [];
      Array.isArray(i) || (i = []), f ? i.includes(s) || (i = [...i, s]) : i = i.filter((c) => c !== s), r("update", b, d, i);
    };
    let l = null;
    const h = (b, d) => {
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
    return (b, d) => (D(), N("div", Ma, [
      g("div", Oa, [
        g("h5", null, H(b.label), 1),
        g("button", {
          class: "zero-code-btn zero-code-add-array-item",
          onClick: d[0] || (d[0] = (s) => b.$emit("add"))
        }, "+ 追加")
      ]),
      b.items.length === 0 ? (D(), N("div", Fa, [
        g("div", Ra, [
          g("p", La, H(b.label) + "はまだ追加されていません", 1),
          g("button", {
            class: "zero-code-btn zero-code-add-array-item-empty",
            onClick: d[1] || (d[1] = (s) => b.$emit("add"))
          }, [
            d[2] || (d[2] = g("span", { class: "zero-code-plus-icon" }, "＋", -1)),
            g("span", xa, "最初の" + H(b.label) + "を追加", 1)
          ])
        ])
      ])) : Y("", !0),
      (D(!0), N(ee, null, ae(b.items, (s, f) => (D(), N("div", {
        key: (s == null ? void 0 : s.id) || f,
        class: "zero-code-array-item",
        draggable: "true",
        onDragstart: (a) => h(a, f),
        onDragover: E,
        onDrop: (a) => A(a, f),
        onDragend: w
      }, [
        g("div", Ha, [
          g("div", Va, [
            d[3] || (d[3] = g("span", { class: "zero-code-drag-handle" }, "⠿", -1)),
            g("h6", null, H(b.itemLabel) + " " + H(f + 1), 1)
          ]),
          g("button", {
            class: "zero-code-btn zero-code-remove-array-item",
            onClick: (a) => b.$emit("remove", f)
          }, "削除", 8, Za)
        ]),
        g("div", ja, [
          (D(!0), N(ee, null, ae(b.fields, (a, i) => (D(), N("div", {
            key: i,
            class: "zero-code-field-group"
          }, [
            g("label", {
              for: `${b.componentId}_${b.arrayKey}_${f}_${i}`
            }, H(a.label) + ": ", 9, Ua),
            a.type === "radio" && a.options && a.options.length > 0 ? (D(), N("div", Wa, [
              (D(!0), N(ee, null, ae(a.options, (c) => (D(), N("div", {
                key: c,
                class: "zero-code-radio-item"
              }, [
                g("input", {
                  id: `${b.componentId}_${b.arrayKey}_${f}_${i}_${c}`,
                  value: c,
                  type: "radio",
                  name: `${b.componentId}_${b.arrayKey}_${f}_${i}`,
                  class: "zero-code-radio-input",
                  checked: s[i] === c || c === "指定なし" && !s[i],
                  onChange: (p) => n(f, i, c === "指定なし" ? "" : c)
                }, null, 40, Xa),
                g("label", {
                  for: `${b.componentId}_${b.arrayKey}_${f}_${i}_${c}`,
                  class: "zero-code-radio-label"
                }, H(c), 9, Ya)
              ]))), 128))
            ])) : Y("", !0),
            a.type === "checkbox" && a.options && a.options.length > 0 ? (D(), N("div", Ka, [
              (D(!0), N(ee, null, ae(a.options, (c) => (D(), N("div", {
                key: c,
                class: "zero-code-checkbox-item"
              }, [
                g("input", {
                  id: `${b.componentId}_${b.arrayKey}_${f}_${i}_${c}`,
                  checked: m(s, i, c),
                  type: "checkbox",
                  class: "zero-code-checkbox-input",
                  onChange: (p) => {
                    const $ = p.target;
                    v(f, i, c, $.checked);
                  }
                }, null, 40, Ja),
                g("label", {
                  for: `${b.componentId}_${b.arrayKey}_${f}_${i}_${c}`,
                  class: "zero-code-checkbox-label"
                }, H(c), 9, qa)
              ]))), 128))
            ])) : a.type === "select" ? (D(), N("select", {
              key: 2,
              id: `${b.componentId}_${b.arrayKey}_${f}_${i}`,
              value: s[i],
              class: "zero-code-field-input zero-code-select-input",
              onInput: (c) => {
                const p = c.target;
                n(f, i, p.value);
              }
            }, [
              (D(!0), N(ee, null, ae(a.options, (c) => (D(), N("option", {
                key: c,
                value: c
              }, H(c), 9, Qa))), 128))
            ], 40, Ga)) : a.type === "select-multiple" ? (D(), N("select", {
              key: 3,
              id: `${b.componentId}_${b.arrayKey}_${f}_${i}`,
              value: s[i] || a.defaultValue,
              multiple: "",
              class: "zero-code-field-input zero-code-select-multiple",
              onChange: (c) => {
                const p = c.target, $ = Array.from(p.selectedOptions).map(
                  (z) => z.value
                );
                n(f, i, $);
              }
            }, [
              (D(!0), N(ee, null, ae(a.options, (c) => (D(), N("option", {
                key: c,
                value: c,
                selected: Array.isArray(s[i]) && s[i].includes(c)
              }, H(c), 9, ts))), 128))
            ], 40, es)) : a.type === "textarea" ? (D(), N("textarea", {
              key: 4,
              id: `${b.componentId}_${b.arrayKey}_${f}_${i}`,
              value: s[i],
              class: "zero-code-field-input zero-code-field-textarea",
              onInput: (c) => {
                const p = c.target;
                n(f, i, p.value);
              }
            }, null, 40, os)) : a.type === "text" || a.type === "number" ? (D(), N("input", {
              key: 5,
              id: `${b.componentId}_${b.arrayKey}_${f}_${i}`,
              value: s[i],
              type: a.type === "text" ? "text" : a.type,
              class: "zero-code-field-input",
              onInput: (c) => {
                const p = c.target;
                n(f, i, p.value);
              }
            }, null, 40, rs)) : Y("", !0)
          ]))), 128)),
          (D(!0), N(ee, null, ae(s, (a, i) => (D(), N(ee, {
            key: `nested_${i}`
          }, [
            Array.isArray(a) && i !== "id" && P(i, a) ? (D(), N("div", ns, [
              g("h6", as, H(i) + " (ネスト配列)", 1),
              g("div", ss, [
                g("span", is, H(a.length) + "個の要素", 1),
                g("button", {
                  class: "zero-code-btn zero-code-edit-nested-array-btn",
                  title: "ネスト配列を編集",
                  onClick: (c) => b.$emit("edit-nested", f, i)
                }, " 編集 ", 8, ls)
              ])
            ])) : Y("", !0)
          ], 64))), 128))
        ])
      ], 40, Ba))), 128))
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
class cs {
  constructor() {
    _t(this, "errorHistory", []);
    _t(this, "maxHistorySize", 100);
  }
  /**
   * エラーを記録・処理する
   */
  handleError(o, t, r, n, m) {
    const v = {
      type: o,
      message: t,
      details: r,
      componentId: n,
      action: m,
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
function Je(e, o, t, r = "UNKNOWN") {
  try {
    return e();
  } catch (n) {
    return o.handleError(r, t, n), null;
  }
}
const qe = new cs(), us = ["content", "nested_parts"], sr = [
  "_isZForItem",
  "_parentComponentId",
  "_arrayName",
  "_arrayIndex",
  "_zForTemplate"
];
function no(e) {
  const o = (u, y) => {
    if (y.length === 0 || y[0] >= u.length) return null;
    let _ = u[y[0]];
    for (let S = 1; S < y.length; S++) {
      if (!_.nested_parts || !Array.isArray(_.nested_parts) || y[S] >= _.nested_parts.length)
        return null;
      _ = _.nested_parts[y[S]];
    }
    return _;
  }, t = (u, y) => {
    if (y.length === 1) return u;
    let _ = u[y[0]];
    for (let S = 1; S < y.length - 1; S++) {
      if (!_.nested_parts || !Array.isArray(_.nested_parts)) return [];
      _ = _.nested_parts[y[S]];
    }
    return _.nested_parts || [];
  }, r = (u) => u.split("-").map(Number), n = (u) => u.join("-"), m = (u, y, _ = []) => {
    if (I.debug(`findComponentRecursively: 検索開始 - componentId=${y}, depth=${_.length}`), !u || !Array.isArray(u))
      return I.debug(`findComponentRecursively: 無効なデータ - data=${u}, isArray=${Array.isArray(u)}`), null;
    I.debug(`findComponentRecursively: ${u.length}個のコンポーネントを検索中`);
    for (let S = 0; S < u.length; S++) {
      const T = u[S], M = [..._, S];
      if (I.debug(`findComponentRecursively: [${S}] チェック中 - id=${T.id}, type=${T.type}`), T.id === y)
        return I.success(`findComponentRecursively: 発見！ - ${y} at path=${M.join("-")}`), T;
      if (T.nested_parts && Array.isArray(T.nested_parts)) {
        I.debug(`findComponentRecursively: nested_parts検索 - ${T.id} (${T.nested_parts.length}個)`);
        const k = m(T.nested_parts, y, M);
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
              if (I.debug(`findComponentRecursively: z-for配列アイテム - ${x.id} in ${T.id}.${k}[${U}]`), x.id === y)
                return I.success(`findComponentRecursively: z-for配列アイテムで発見！ - ${y}`), x;
              if (x.nested_parts && Array.isArray(x.nested_parts)) {
                I.debug(`findComponentRecursively: z-for配列アイテムのネストパーツ検索 - ${x.id}.nested_parts (${x.nested_parts.length}個)`);
                const q = m(x.nested_parts, y, [...M, U]);
                if (q)
                  return I.success(`findComponentRecursively: z-for配列内のネストパーツで発見！ - ${y}`), q;
              }
            }
          }
        }
      }
    }
    return I.debug(`findComponentRecursively: 未発見 - ${y}`), null;
  }, v = (u, y) => Je(
    () => {
      if (!Array.isArray(e))
        throw new Error("Parts配列が無効です");
      if (!u || !y)
        throw new Error("Type または ModuleName が指定されていません");
      const _ = e.find((T) => T.type === u);
      if (!_)
        throw new Error(`パーツタイプ "${u}" が見つかりません`);
      const S = _.module.find((T) => T.title === y);
      if (!S)
        throw new Error(`モジュール "${y}" が見つかりません (type: ${u})`);
      return S.body;
    },
    qe,
    `テンプレート取得エラー: ${u}/${y}`,
    ue.TEMPLATE
  ) || "", l = /* @__PURE__ */ new Set(), h = (u, y) => {
    I.debug(`extractZForTemplate開始: arrayName=${y}`);
    const _ = new RegExp(`<div[^>]*z-for="${y}"[^>]*>`), S = u.match(_);
    if (!S)
      return I.warn(`z-for="${y}" 開始タグが見つかりません`), I.debug("親テンプレート内容:", u.substring(0, 500)), "";
    const T = u.indexOf(S[0]);
    let M = 0, L = T, k = T;
    for (; k < u.length; )
      if (u.substring(k, k + 4) === "<div") {
        const U = u.indexOf(">", k);
        U !== -1 ? (M++, k = U + 1) : k++;
      } else if (u.substring(k, k + 6) === "</div>") {
        if (M--, M === 0) {
          L = k + 6;
          break;
        }
        k += 6;
      } else
        k++;
    if (M !== 0)
      return I.warn(`z-for="${y}" の対応する終了タグが見つかりません（深度: ${M}）`), "";
    const F = u.substring(T, L).trim();
    return I.debug(`z-for内テンプレート抽出成功: ${y}`, {
      extractedContent: F.substring(0, 200),
      fullContent: F,
      startIndex: T,
      endIndex: L,
      depth: 0
    }), F;
  }, E = () => "comp_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36), A = (u) => {
    const y = `${u.id}_${u.type}_${u.module_name}`;
    if (l.has(y))
      return I.warn(`getFieldInfo: 無限ループを検出、処理をスキップ: ${y}`), [];
    l.add(y);
    try {
      let _ = v(u.type, u.module_name);
      if (!_)
        return [];
      if (I.debug(
        `getFieldInfo: component.id=${u.id}, type=${u.type}, module=${u.module_name}`
      ), I.debug(`getFieldInfo: _isZForItem=${u._isZForItem}`), u._isZForItem) {
        const k = u._arrayName;
        if (I.debug(`getFieldInfo: z-for配列要素を検出, arrayName=${k}`), I.debug("getFieldInfo: componentプロパティ:", Object.keys(u)), k) {
          I.debug("getFieldInfo: 元のテンプレート:", _.substring(0, 300));
          const F = h(_, k);
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
              const Ve = Re.match(/\(\$([^:]+):(.*?)\)/);
              if (Ve) {
                const Ae = Ve[1].replace("?", "");
                M.push(Ae);
              }
            });
          }
        }
      }
      M.length > 0 && I.debug("z-for配列内のフィールドを除外:", M);
      let L;
      return u._isZForItem ? L = T.filter((k) => {
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
      return I.error(`getFieldInfo: エラーが発生しました: ${y}`, _), [];
    } finally {
      l.delete(y);
    }
  }, w = (u, y) => {
    try {
      const _ = v(u.type, u.module_name);
      if (!_) return !1;
      let S = _;
      if (u._isZForItem) {
        const k = u._arrayName, F = h(_, k);
        F && (S = F);
      }
      const T = new RegExp(`\\{\\$${y}:[^}]*\\}`), M = new RegExp(`\\(\\$${y}:[^)]*\\)`), L = new RegExp(`\\(\\$${y}\\?:[^)]*\\)`);
      return T.test(S) || M.test(S) || L.test(S);
    } catch (_) {
      return I.warn(`isTemplateField error for ${y}:`, _), !1;
    }
  }, P = (u, y) => !!(["content", "nested_parts"].includes(u) || Array.isArray(y) || typeof y == "object" && y !== null);
  return {
    findComponentByPath: o,
    getParentContainer: t,
    parseHierarchyPath: r,
    stringifyHierarchyPath: n,
    findComponentRecursively: m,
    getTemplate: v,
    generateUniqueId: E,
    getFieldInfo: A,
    isTemplateField: w,
    shouldExcludeField: P,
    shouldShowBasicField: (u, y, _) => u === "id" || u === "type" || u === "module_name" || _._isZForItem || sr.includes(u) || P(u, y) || w(_, u) || y === "" || y === null || y === void 0 || typeof y == "string" && y.trim() === "" || typeof y == "number" && y === 0 ? !1 : typeof y == "string" && y.trim() !== "" || typeof y == "number" && y !== 0 || typeof y == "boolean",
    shouldShowArrayField: (u, y, _) => {
      const S = `${_.id}_${_.type}_${_.module_name}_array_${u}`;
      if (l.has(S))
        return I.warn(`shouldShowArrayField: 無限ループを検出、処理をスキップ: ${S}`), !1;
      l.add(S);
      try {
        if (I.debug(
          `shouldShowArrayField開始: key=${u}, component: ${_.id} (${_.type}/${_.module_name})`,
          { key: u, value: y, componentId: _.id }
        ), us.includes(String(u)))
          return I.debug(`shouldShowArrayField: ${u} はシステム内部フィールドのため除外`), !1;
        if (_._isZForItem && sr.includes(String(u)))
          return I.debug(`shouldShowArrayField: ${u} はz-forシステムフィールドのため除外`), !1;
        if (w(_, u))
          return I.debug(`shouldShowArrayField: ${u} はテンプレート記法フィールドのため除外`), !1;
        const T = v(_.type, _.module_name);
        if (T) {
          if (I.debug("shouldShowArrayField: テンプレート取得成功:", T.substring(0, 200)), new RegExp(`z-for="${u}"`).test(T))
            return I.success(
              `shouldShowArrayField: ${u}はz-for記法で使用されているため編集パネルでは非表示（プレビュー側で編集）`
            ), Array.isArray(y) || (I.debug(
              `shouldShowArrayField: ${u}は配列でないが、記法で使用されているため空配列で初期化`
            ), _[u] = []), !1;
          I.debug(`shouldShowArrayField: ${u}は配列記法で使用されていない`);
        } else
          I.debug("shouldShowArrayField: テンプレート取得失敗");
        return Array.isArray(y) || I.debug(`shouldShowArrayField: ${u}は配列でなく、記法でも使用されていない`), !1;
      } catch (T) {
        return I.error(`shouldShowArrayField: エラーが発生しました: ${S}`, T), !1;
      } finally {
        l.delete(S);
      }
    },
    shouldShowArrayItemField: (u, y, _, S, T) => u === "id" || Array.isArray(y) || typeof y == "object" && y !== null || y === "" || y === null || y === void 0 || typeof y == "string" && y.trim() === "" || typeof y == "number" && y === 0 ? !1 : (v(_.type, _.module_name), typeof y == "string" && y.trim() !== "" || typeof y == "number" && y !== 0 || typeof y == "boolean"),
    getInputType: (u) => u.includes("url") || u.includes("src") ? "url" : u.includes("email") ? "email" : u.includes("number") || u.includes("count") ? "number" : "text",
    updateCheckboxValue: (u, y, _, S) => {
      u[y] || (u[y] = []);
      const T = u[y];
      S ? T.includes(_) || T.push(_) : u[y] = T.filter((M) => M !== _);
    },
    isCheckboxChecked: (u, y, _) => {
      const S = u[y];
      return Array.isArray(S) && S.includes(_);
    },
    addArrayItem: (u, y) => {
      u[y] || (u[y] = []);
      const _ = {
        id: `${y}_${Date.now()}`
      }, S = u[y];
      if (S.length > 0) {
        const T = S[0];
        Object.keys(T).forEach((M) => {
          M !== "id" && (_[M] = typeof T[M] == "string" ? "" : T[M]);
        });
      }
      S.push(_);
    },
    removeArrayItem: (u, y, _) => {
      const S = u[y];
      S && S.length > _ && S.splice(_, 1);
    },
    createNewComponent: (u, y) => Je(
      () => {
        if (!u || !y)
          throw new Error("partType または module が指定されていません");
        if (!y.title || !y.body)
          throw new Error("module.title または module.body が無効です");
        const _ = E();
        I.debug(`createNewComponent開始: partType=${u}, module=${y.title}`);
        const S = {
          id: _,
          type: u,
          module_name: y.title
        }, T = y.body;
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
      qe,
      `コンポーネント作成エラー: ${u}/${y == null ? void 0 : y.title}`,
      ue.COMPONENT
    ) || {
      id: E(),
      type: u || "unknown",
      module_name: (y == null ? void 0 : y.title) || "unknown"
    },
    createArrayItem: (u) => {
      const y = {
        id: E()
      }, _ = u.match(/\{\$([^:}]+):([^}]+)\}/g);
      _ && _.forEach((T) => {
        const M = T.match(/\{\$([^:}]+):([^}]+)\}/);
        if (M) {
          const [, L, k] = M;
          y[L] = String(k);
        }
      });
      const S = u.match(/\(\$([^:?]+):(.*?)\)/g);
      return S && S.forEach((T) => {
        const M = T.match(/\(\$([^:?]+):(.*?)\)/);
        if (M) {
          const [, L, k] = M, F = k.split("|").filter((U) => U.trim() !== "");
          F.length > 0 && (y[L] = String(F[0]));
        }
      }), y;
    },
    getArrayItemFieldInfo: (u, y) => {
      const _ = v(u.type, u.module_name);
      if (!_) return [];
      const S = [];
      let T = "";
      const M = h(_, y);
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
const ps = { class: "zero-code-content-sidebar" }, fs = {
  key: 0,
  class: "zero-code-editable-component"
}, ms = { class: "zero-code-component-info" }, gs = { class: "zero-code-component-type" }, hs = { class: "zero-code-component-module" }, vs = { class: "zero-code-component-id" }, ys = { class: "zero-code-fields" }, bs = { class: "zero-code-field-label" }, $s = {
  key: 0,
  class: "zero-code-text-group"
}, ws = ["value", "onInput"], zs = {
  key: 1,
  class: "zero-code-radio-group"
}, As = ["id", "value", "name", "checked", "onChange"], Ps = ["for"], Es = {
  key: 2,
  class: "zero-code-checkbox-group"
}, _s = ["id", "checked", "onChange"], Cs = ["for"], Ss = {
  key: 3,
  class: "zero-code-select-group"
}, Is = ["value", "onChange"], Ts = ["value"], Ds = {
  key: 4,
  class: "zero-code-select-multiple-group"
}, Ns = ["value", "onChange"], ks = ["value", "selected"], Ms = {
  key: 0,
  class: "zero-code-field-group"
}, Os = ["for"], Fs = ["id", "value", "type", "readonly", "onInput"], Rs = /* @__PURE__ */ _e({
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
    }, m = (s, f) => {
      r("update:value", s, f);
    }, v = () => {
      if (!t.selectedComponent) return;
      t.getFieldInfo(t.selectedComponent).forEach((f) => {
        f.defaultValue && !t.selectedComponent[f.propKey] && ((f.type === "checkbox" || f.type === "select-multiple") && Array.isArray(f.defaultValue) ? m(f.propKey, [...f.defaultValue]) : m(f.propKey, f.defaultValue));
      });
    };
    We(
      () => t.selectedComponent,
      (s) => {
        s && v();
      },
      { immediate: !0 }
    );
    const l = (s, f, a, i) => {
      if (!t.selectedComponent) return;
      const c = t.selectedComponent[s];
      if (!Array.isArray(c)) return;
      const p = { ...c[f], [a]: i };
      r("update:array-item", s, f, p);
    }, h = (s, f, a) => {
      r("update:checkbox", s, f, a);
    }, E = (s, f) => {
      s && r("add:array-item", f);
    }, A = (s, f, a) => {
      s && r("remove:array-item", f, a);
    }, w = (s, f, a) => {
      if (!t.selectedComponent) return;
      const i = t.selectedComponent[s];
      if (!Array.isArray(i)) return;
      const c = [...i], [p] = c.splice(f, 1);
      c.splice(a, 0, p), t.selectedComponent[s] = c, r("reorder:array-item", s, f, a);
    }, P = (s) => {
      if (!t.selectedComponent) return {};
      const f = {};
      if (t.partsData) {
        const c = no(t.partsData).getArrayItemFieldInfo(t.selectedComponent, s);
        if (c.forEach((p) => {
          f[p.propKey] = {
            label: p.label,
            type: p.type,
            options: p.options,
            defaultValue: p.defaultValue
          };
        }), c.length > 0)
          return f;
      }
      const a = t.selectedComponent[s];
      if (Array.isArray(a) && a.length > 0) {
        const i = a[0];
        typeof i == "object" && i !== null && Object.keys(i).forEach((c) => {
          c !== "id" && (i[c], f[c] = {
            label: c.replace(/_/g, " ").replace(/\b\w/g, (p) => p.toUpperCase()),
            type: c.includes("desc") || c.includes("content") ? "textarea" : "text"
          });
        });
      }
      return Object.keys(f).length === 0 ? {
        title: {
          label: "タイトル",
          type: "text"
        },
        content: {
          label: "内容",
          type: "textarea"
        }
      } : f;
    }, b = (s) => s.replace(/_/g, " ").replace(/\b\w/g, (f) => f.toUpperCase()).concat(" 一覧"), d = (s) => {
      let f = s;
      return s.endsWith("s") && (f = s.slice(0, -1)), f.replace(/_/g, " ").replace(/\b\w/g, (a) => a.toUpperCase());
    };
    return (s, f) => s.showEditor && s.selectedComponent ? (D(), N("div", {
      key: 0,
      class: "zero-code-overlay",
      onClick: n
    }, [
      g("div", {
        class: "zero-code-sidebar",
        onClick: f[0] || (f[0] = He(() => {
        }, ["stop"]))
      }, [
        g("div", { class: "zero-code-header" }, [
          f[1] || (f[1] = g("h4", null, "コンポーネント編集", -1)),
          g("div", { class: "zero-code-header-buttons" }, [
            g("button", {
              class: "zero-code-btn zero-code-close-button",
              onClick: n
            }, "✖️")
          ])
        ]),
        g("div", ps, [
          s.selectedComponent ? (D(), N("div", fs, [
            g("div", ms, [
              g("span", gs, H(s.selectedComponent.type), 1),
              g("span", hs, H(s.selectedComponent.module_name), 1),
              g("span", vs, "ID: " + H(s.selectedComponent.id), 1)
            ]),
            g("div", ys, [
              (D(!0), N(ee, null, ae(s.getFieldInfo(s.selectedComponent), (a) => (D(), N("div", {
                key: a.propKey,
                class: "zero-code-template-field"
              }, [
                g("label", bs, H(a.label) + ":", 1),
                a.type === "text" ? (D(), N("div", $s, [
                  g("input", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    type: "text",
                    class: "zero-code-field-input",
                    onInput: (i) => {
                      const c = i.target;
                      m(a.propKey, c.value);
                    }
                  }, null, 40, ws)
                ])) : Y("", !0),
                a.type === "radio" ? (D(), N("div", zs, [
                  (D(!0), N(ee, null, ae(a.options, (i) => (D(), N("div", {
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
                      onChange: (c) => m(a.propKey, i === "指定なし" ? "" : i)
                    }, null, 40, As),
                    g("label", {
                      for: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      class: "zero-code-radio-label"
                    }, H(i), 9, Ps)
                  ]))), 128))
                ])) : Y("", !0),
                a.type === "checkbox" ? (D(), N("div", Es, [
                  (D(!0), N(ee, null, ae(a.options, (i) => (D(), N("div", {
                    key: i,
                    class: "zero-code-checkbox-item"
                  }, [
                    g("input", {
                      id: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      checked: s.isCheckboxChecked(s.selectedComponent, a.propKey, i) || Array.isArray(a.defaultValue) && a.defaultValue.includes(i) && !s.selectedComponent[a.propKey],
                      type: "checkbox",
                      class: "zero-code-checkbox-input",
                      onChange: (c) => {
                        const p = c.target;
                        h(a.propKey, i, p.checked);
                      }
                    }, null, 40, _s),
                    g("label", {
                      for: `${s.selectedComponent.id}_${a.propKey}_${i}`,
                      class: "zero-code-checkbox-label"
                    }, H(i), 9, Cs)
                  ]))), 128))
                ])) : Y("", !0),
                a.type === "select" ? (D(), N("div", Ss, [
                  g("select", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    class: "zero-code-field-input zero-code-select-input",
                    onChange: (i) => {
                      const c = i.target;
                      m(a.propKey, c.value);
                    }
                  }, [
                    (D(!0), N(ee, null, ae(a.options, (i) => (D(), N("option", {
                      key: i,
                      value: i
                    }, H(i), 9, Ts))), 128))
                  ], 40, Is)
                ])) : Y("", !0),
                a.type === "select-multiple" ? (D(), N("div", Ds, [
                  g("select", {
                    value: s.selectedComponent[a.propKey] || a.defaultValue,
                    multiple: "",
                    class: "zero-code-field-input zero-code-select-multiple",
                    onChange: (i) => {
                      const c = i.target, p = Array.from(c.selectedOptions).map(
                        ($) => $.value
                      );
                      m(a.propKey, p);
                    }
                  }, [
                    (D(!0), N(ee, null, ae(a.options, (i) => (D(), N("option", {
                      key: i,
                      value: i,
                      selected: Array.isArray(s.selectedComponent[a.propKey]) && s.selectedComponent[a.propKey].includes(i)
                    }, H(i), 9, ks))), 128))
                  ], 40, Ns)
                ])) : Y("", !0)
              ]))), 128)),
              (D(!0), N(ee, null, ae(s.selectedComponent, (a, i) => (D(), N(ee, {
                key: String(i)
              }, [
                s.shouldShowBasicField(String(i), a, s.selectedComponent) ? (D(), N("div", Ms, [
                  g("label", {
                    for: `${s.selectedComponent.id}_${String(i)}`
                  }, H(i) + ":", 9, Os),
                  g("input", {
                    id: `${s.selectedComponent.id}_${String(i)}`,
                    value: a,
                    type: s.getInputType(String(i)),
                    class: "zero-code-field-input",
                    readonly: String(i) === "id",
                    onInput: (c) => {
                      const p = c.target;
                      m(String(i), p.value);
                    }
                  }, null, 40, Fs)
                ])) : Y("", !0)
              ], 64))), 128)),
              (D(!0), N(ee, null, ae(s.selectedComponent, (a, i) => (D(), N(ee, {
                key: String(i)
              }, [
                s.shouldShowArrayField(String(i), a, s.selectedComponent) ? (D(), Be(ds, {
                  key: 0,
                  "component-id": s.selectedComponent.id,
                  "array-key": String(i),
                  items: Array.isArray(a) ? a : [],
                  fields: P(String(i)),
                  label: b(String(i)),
                  "item-label": d(String(i)),
                  onAdd: () => E(s.selectedComponent, String(i)),
                  onRemove: (c) => A(s.selectedComponent, String(i), c),
                  onReorder: (c, p) => w(String(i), c, p),
                  onUpdate: (c, p, $) => l(String(i), c, p, $)
                }, null, 8, ["component-id", "array-key", "items", "fields", "label", "item-label", "onAdd", "onRemove", "onReorder", "onUpdate"])) : Y("", !0)
              ], 64))), 128))
            ])
          ])) : Y("", !0)
        ])
      ])
    ])) : Y("", !0);
  }
}), Ls = { class: "zero-code-tab-content" }, xs = /* @__PURE__ */ _e({
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
    return (t, r) => (D(), N("div", Ls, [
      ht(fa, {
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
      t.showPartSelector ? (D(), Be(ar, {
        key: 0,
        parts: t.localParts && t.localParts.length > 0 ? t.localParts : t.parts || [],
        onClose: r[5] || (r[5] = (n) => t.$emit("close-part-selector")),
        onSelectPart: r[6] || (r[6] = (n, m) => t.$emit("select-part", n, m))
      }, null, 8, ["parts"])) : Y("", !0),
      t.showNestedPartSelector ? (D(), Be(ar, {
        key: 1,
        parts: t.localParts && t.localParts.length > 0 ? t.localParts : t.parts || [],
        "is-nested": !0,
        onClose: r[7] || (r[7] = (n) => t.$emit("close-nested-part-selector")),
        onSelectPart: r[8] || (r[8] = (n, m) => t.$emit("select-nested-part", n, m))
      }, null, 8, ["parts"])) : Y("", !0),
      (D(), Be(Rs, {
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
        "onUpdate:value": r[10] || (r[10] = (n, m) => t.$emit("update-editor-value", n, m)),
        "onAdd:arrayItem": r[11] || (r[11] = (n) => t.$emit("add-array-item", n)),
        "onRemove:arrayItem": r[12] || (r[12] = (n, m) => t.$emit("remove-array-item", n, m)),
        "onUpdate:arrayItem": r[13] || (r[13] = (n) => t.$emit("update-array-item", n)),
        "onUpdate:checkbox": r[14] || (r[14] = (n) => t.$emit("update-checkbox", n))
      }, null, 8, ["show-editor", "selected-component", "get-field-info", "should-show-basic-field", "should-show-array-field", "should-show-array-item-field", "get-input-type", "is-checkbox-checked"]))
    ]));
  }
}), Bs = { class: "zero-code-data-display" }, Hs = { class: "zero-code-component-header" }, Vs = { class: "zero-code-data-tabs" }, Zs = { class: "zero-code-form-group" }, js = { class: "zero-code-form-group" }, Us = ["value"], Ws = { class: "zero-code-data-content" }, Xs = {
  key: 0,
  class: "zero-code-rendered-content"
}, Ys = { class: "zero-code-component-header" }, Ks = { class: "zero-code-component-id" }, Js = { class: "zero-code-rendered-component" }, qs = { class: "zero-code-component-header" }, Gs = { class: "zero-code-header-actions" }, Qs = ["onClick"], ei = ["onClick"], ti = ["innerHTML"], oi = {
  key: 1,
  class: "zero-code-no-parts"
}, ir = /* @__PURE__ */ _e({
  __name: "PartsManager",
  props: {
    parts: { type: Array },
    renderPartPreview: { type: Function }
  },
  emits: ["show-registration", "edit-part", "delete-part", "search", "filter"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = ne(""), m = ne(""), v = de(() => Array.from(new Set(t.parts.map((A) => A.type)))), l = de(() => {
      let A = [...t.parts];
      if (m.value && (A = A.filter((w) => w.type === m.value)), n.value) {
        const w = n.value.toLowerCase();
        A = A.map((P) => ({
          ...P,
          module: P.module.filter(
            (b) => b.title.toLowerCase().includes(w) || b.body.toLowerCase().includes(w)
          )
        })).filter((P) => P.module.length > 0);
      }
      return A;
    }), h = () => {
      r("search", n.value);
    }, E = () => {
      r("filter", m.value);
    };
    return (A, w) => (D(), N("div", Bs, [
      g("div", Hs, [
        w[3] || (w[3] = g("h4", null, "パーツ管理", -1)),
        g("button", {
          class: "zero-code-add-part-button",
          onClick: w[0] || (w[0] = (P) => A.$emit("show-registration"))
        }, "＋ 新規パーツ登録")
      ]),
      g("div", Vs, [
        g("div", Zs, [
          Oe(g("input", {
            "onUpdate:modelValue": w[1] || (w[1] = (P) => n.value = P),
            placeholder: "パーツ名で検索...",
            class: "zero-code-form-input",
            onInput: h
          }, null, 544), [
            [Xe, n.value]
          ])
        ]),
        g("div", js, [
          Oe(g("select", {
            "onUpdate:modelValue": w[2] || (w[2] = (P) => m.value = P),
            class: "zero-code-form-select",
            onChange: E
          }, [
            w[4] || (w[4] = g("option", { value: "" }, "すべてのType", -1)),
            (D(!0), N(ee, null, ae(v.value, (P) => (D(), N("option", {
              key: P,
              value: P
            }, H(P), 9, Us))), 128))
          ], 544), [
            [gr, m.value]
          ])
        ])
      ]),
      g("div", Ws, [
        Array.isArray(l.value) && l.value.length > 0 ? (D(), N("div", Xs, [
          (D(!0), N(ee, null, ae(l.value, (P, b) => (D(), N("div", {
            key: b,
            class: "zero-code-data-section"
          }, [
            g("div", Ys, [
              g("h5", null, H(P.type), 1),
              g("span", Ks, H(P.module.length) + "個のパーツ", 1)
            ]),
            g("div", Js, [
              (D(!0), N(ee, null, ae(P.module, (d, s) => (D(), N("div", {
                key: s,
                class: "zero-code-draggable-item"
              }, [
                g("div", qs, [
                  g("h6", null, H(d.title), 1),
                  g("div", Gs, [
                    g("button", {
                      class: "zero-code-edit-btn",
                      onClick: (f) => A.$emit("edit-part", { type: P.type, module: d })
                    }, " 編集 ", 8, Qs),
                    g("button", {
                      class: "zero-code-delete-btn",
                      onClick: (f) => A.$emit("delete-part", { type: P.type, title: d.title })
                    }, " 削除 ", 8, ei)
                  ])
                ]),
                g("div", {
                  class: "zero-code-module-preview",
                  innerHTML: t.renderPartPreview(d.body)
                }, null, 8, ti)
              ]))), 128))
            ])
          ]))), 128))
        ])) : (D(), N("div", oi, w[5] || (w[5] = [
          g("p", null, "登録されたパーツがありません。", -1)
        ])))
      ])
    ]));
  }
}), ri = { class: "zero-code-modal-header" }, ni = { class: "zero-code-modal-title" }, ai = { class: "zero-code-modal-subtitle" }, si = { class: "zero-code-category-badge" }, ii = { class: "zero-code-modal-body" }, li = { class: "zero-code-form-layout" }, di = { class: "zero-code-form-section" }, ci = {
  key: 0,
  class: "zero-code-form-group"
}, ui = { class: "zero-code-type-input-group" }, pi = ["value"], fi = {
  key: 1,
  class: "zero-code-form-group"
}, mi = { class: "zero-code-form-group" }, gi = { class: "zero-code-body-editor-container" }, hi = { class: "zero-code-preview-section" }, vi = { class: "zero-code-preview-container" }, yi = ["innerHTML"], bi = { class: "zero-code-modal-footer" }, $i = { class: "zero-code-modal-actions" }, wi = ["disabled"], zi = /* @__PURE__ */ _e({
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
    const t = e, r = o, m = ne(t.isEditing && t.editingPart ? {
      type: t.editingPart.type,
      title: t.editingPart.module.title,
      body: t.editingPart.module.body
    } : {
      type: t.initialData.type,
      title: t.initialData.title,
      body: t.initialData.body
    }), v = de(() => (t.isEditing || m.value.type.trim() !== "" && m.value.title.trim() !== "") && m.value.body.trim() !== ""), l = () => {
    }, h = () => {
      v.value && r("save", {
        type: m.value.type,
        title: m.value.title,
        body: m.value.body,
        category: t.partCategory || "common"
      });
    };
    return (E, A) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: A[7] || (A[7] = (w) => E.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-part-modal",
        onClick: A[6] || (A[6] = He(() => {
        }, ["stop"]))
      }, [
        g("div", ri, [
          g("div", ni, [
            g("h3", null, H(E.isEditing ? "パーツ編集" : "新規パーツ登録"), 1),
            g("p", ai, H(E.isEditing ? "パーツの内容を編集できます" : "新しいパーツを作成します"), 1),
            g("div", si, [
              g("span", {
                class: Fe(["zero-code-badge", E.partCategory])
              }, H(E.partCategory === "common" ? "共通パーツ" : "個別パーツ"), 3)
            ])
          ]),
          g("button", {
            class: "zero-code-modal-close-btn",
            onClick: A[0] || (A[0] = (w) => E.$emit("close"))
          }, A[8] || (A[8] = [
            g("span", null, "✖️", -1)
          ]))
        ]),
        g("div", ii, [
          g("div", li, [
            g("div", di, [
              E.isEditing ? Y("", !0) : (D(), N("div", ci, [
                A[10] || (A[10] = g("label", {
                  for: "part-type",
                  class: "zero-code-form-label"
                }, "Type", -1)),
                g("div", ui, [
                  Oe(g("select", {
                    id: "part-type",
                    "onUpdate:modelValue": A[1] || (A[1] = (w) => m.value.type = w),
                    class: "zero-code-form-select"
                  }, [
                    A[9] || (A[9] = g("option", { value: "" }, "新しいTypeを選択", -1)),
                    (D(!0), N(ee, null, ae(E.existingTypes, (w) => (D(), N("option", {
                      key: w,
                      value: w
                    }, H(w), 9, pi))), 128))
                  ], 512), [
                    [gr, m.value.type]
                  ]),
                  !m.value.type || !E.existingTypes.includes(m.value.type) ? Oe((D(), N("input", {
                    key: 0,
                    "onUpdate:modelValue": A[2] || (A[2] = (w) => m.value.type = w),
                    placeholder: "新しいType名を入力",
                    class: "zero-code-form-input"
                  }, null, 512)), [
                    [Xe, m.value.type]
                  ]) : Y("", !0)
                ])
              ])),
              E.isEditing ? Y("", !0) : (D(), N("div", fi, [
                A[11] || (A[11] = g("label", {
                  for: "part-title",
                  class: "zero-code-form-label"
                }, "Title", -1)),
                Oe(g("input", {
                  id: "part-title",
                  "onUpdate:modelValue": A[3] || (A[3] = (w) => m.value.title = w),
                  placeholder: "パーツのタイトルを入力",
                  class: "zero-code-form-input"
                }, null, 512), [
                  [Xe, m.value.title]
                ])
              ])),
              g("div", mi, [
                A[12] || (A[12] = g("label", {
                  for: "part-body",
                  class: "zero-code-form-label"
                }, "HTML Template", -1)),
                g("div", gi, [
                  Oe(g("textarea", {
                    id: "part-body",
                    "onUpdate:modelValue": A[4] || (A[4] = (w) => m.value.body = w),
                    class: "zero-code-body-editor",
                    placeholder: "HTMLソースを直接編集してください...",
                    onInput: l
                  }, null, 544), [
                    [Xe, m.value.body]
                  ])
                ])
              ])
            ]),
            g("div", hi, [
              A[13] || (A[13] = g("div", { class: "zero-code-preview-header" }, [
                g("h4", null, "プレビュー"),
                g("span", { class: "zero-code-preview-info" }, "リアルタイムで表示を確認")
              ], -1)),
              g("div", vi, [
                g("div", {
                  class: "zero-code-preview-content",
                  innerHTML: E.renderPartPreview(m.value.body)
                }, null, 8, yi)
              ])
            ])
          ])
        ]),
        g("div", bi, [
          g("div", $i, [
            g("button", {
              class: "zero-code-btn zero-code-btn-secondary",
              onClick: A[5] || (A[5] = (w) => E.$emit("close"))
            }, " キャンセル "),
            g("button", {
              class: "zero-code-btn zero-code-btn-primary",
              disabled: !v.value,
              onClick: h
            }, H(E.isEditing ? "更新" : "登録"), 9, wi)
          ])
        ])
      ])
    ]));
  }
}), Ai = { class: "zero-code-tab-content" }, Pi = { class: "zero-code-data-tabs" }, Ei = ["onClick"], _i = { class: "zero-code-parts-content" }, Ci = {
  key: 0,
  class: "zero-code-parts-section"
}, Si = { class: "zero-code-section-header" }, Ii = {
  key: 1,
  class: "zero-code-parts-section"
}, Ti = { class: "zero-code-section-header" }, Di = {
  key: 2,
  class: "zero-code-parts-section"
}, Ni = { class: "zero-code-data-display-section" }, ki = { class: "zero-code-parts-sub-tabs" }, Mi = { class: "zero-code-parts-sub-content" }, Oi = {
  key: 0,
  class: "zero-code-parts-sub-section"
}, Fi = { key: 0 }, Ri = { class: "zero-code-data-display-pre" }, Li = { key: 1 }, xi = {
  key: 1,
  class: "zero-code-parts-sub-section"
}, Bi = { key: 0 }, Hi = { class: "zero-code-data-display-pre" }, Vi = { key: 1 }, Zi = /* @__PURE__ */ _e({
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
    const t = e, r = o, n = ne("common"), m = ne("common"), v = ne("common"), l = ["common", "individual", "data"], h = (a) => ({
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
      m.value = a, r("show-registration");
    }, P = () => {
      r("close-registration");
    }, b = (a) => {
      const i = a.module;
      m.value = i.category || "common", r("edit-part", a);
    }, d = (a) => {
      r("delete-part", a.type, a.title);
    }, s = (a) => {
      const i = {
        ...a,
        category: m.value
      };
      r("save-part", i);
    }, f = (a) => {
      const i = (c, p = 0) => {
        const $ = "  ".repeat(p), z = "  ".repeat(p + 1);
        if (Array.isArray(c))
          return c.length === 0 ? "[]" : `[
${c.map((u) => z + i(u, p + 1)).join(`,
`)}
${$}]`;
        if (typeof c == "object" && c !== null) {
          const C = Object.entries(c);
          return C.length === 0 ? "{}" : `{
${C.map(([y, _]) => {
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
              S = i(_, p + 1);
            return `${z}"${y}": ${S}`;
          }).join(`,
`)}
${$}}`;
        }
        return typeof c == "string" ? `"${c.replace(/"/g, '\\"')}"` : JSON.stringify(c);
      };
      return i(a);
    };
    return (a, i) => (D(), N("div", Ai, [
      g("div", Pi, [
        (D(), N(ee, null, ae(l, (c) => g("button", {
          key: c,
          class: Fe(["zero-code-data-tab-button", { active: n.value === c }]),
          onClick: (p) => n.value = c
        }, H(h(c)), 11, Ei)), 64))
      ]),
      g("div", _i, [
        n.value === "common" ? (D(), N("div", Ci, [
          g("div", Si, [
            g("h4", null, "共通パーツ (" + H(E.value.length) + "件)", 1),
            g("button", {
              class: "zero-code-add-part-btn",
              onClick: i[0] || (i[0] = (c) => w("common"))
            }, " ＋ 共通パーツ登録 ")
          ]),
          ht(ir, {
            parts: E.value,
            "render-part-preview": a.renderPartPreview,
            onShowRegistration: i[1] || (i[1] = () => w("common")),
            onEditPart: b,
            onDeletePart: d
          }, null, 8, ["parts", "render-part-preview"])
        ])) : Y("", !0),
        n.value === "individual" ? (D(), N("div", Ii, [
          g("div", Ti, [
            g("h4", null, "個別パーツ (" + H(A.value.length) + "件)", 1),
            g("button", {
              class: "zero-code-add-part-btn",
              onClick: i[2] || (i[2] = (c) => w("individual"))
            }, " ＋ 個別パーツ登録 ")
          ]),
          ht(ir, {
            parts: A.value,
            "render-part-preview": a.renderPartPreview,
            onShowRegistration: i[3] || (i[3] = () => w("individual")),
            onEditPart: b,
            onDeletePart: d
          }, null, 8, ["parts", "render-part-preview"])
        ])) : Y("", !0),
        n.value === "data" ? (D(), N("div", Di, [
          g("div", Ni, [
            g("div", ki, [
              g("button", {
                class: Fe(["zero-code-parts-sub-tab-button", { active: v.value === "common" }]),
                onClick: i[4] || (i[4] = (c) => v.value = "common")
              }, " 共通Partsデータ ", 2),
              g("button", {
                class: Fe(["zero-code-parts-sub-tab-button", { active: v.value === "individual" }]),
                onClick: i[5] || (i[5] = (c) => v.value = "individual")
              }, " 個別Partsデータ ", 2)
            ]),
            g("div", Mi, [
              v.value === "common" ? (D(), N("div", Oi, [
                a.localCommonParts && a.localCommonParts.length > 0 ? (D(), N("div", Fi, [
                  g("pre", Ri, H(f(a.localCommonParts)), 1)
                ])) : (D(), N("div", Li, i[6] || (i[6] = [
                  g("p", null, "共通パーツデータがありません", -1)
                ])))
              ])) : Y("", !0),
              v.value === "individual" ? (D(), N("div", xi, [
                a.localIndividualParts && a.localIndividualParts.length > 0 ? (D(), N("div", Bi, [
                  g("pre", Hi, H(f(a.localIndividualParts)), 1)
                ])) : (D(), N("div", Vi, i[7] || (i[7] = [
                  g("p", null, "個別パーツデータがありません", -1)
                ])))
              ])) : Y("", !0)
            ])
          ])
        ])) : Y("", !0)
      ]),
      a.showPartRegistration ? (D(), Be(zi, {
        key: 0,
        "existing-types": a.existingPartTypes,
        "render-part-preview": a.renderPartPreview,
        "editing-part": a.editingPart,
        "is-editing": !!a.editingPart,
        "part-category": m.value,
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
function lr(e, o) {
  return we !== null && we.slotName === o;
}
let Ot, tt;
function ji(e, o) {
  Ot = e, tt = o;
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
      const m = o[n];
      I.debug(`z-for-wrapper処理: ${n}`, {
        arrayData: m,
        length: Array.isArray(m) ? m.length : "not array"
      }), !Array.isArray(m) || m.length === 0 ? (I.debug(`z-for-wrapper空配列: ${n} - wrapper要素は保持、属性のみ除去`), r.removeAttribute("z-for-wrapper")) : (I.success(`z-for-wrapper配列あり: ${n} - 属性除去`), r.removeAttribute("z-for-wrapper"));
    }
  });
}
function Wi(e, o) {
  return `
    <div class="zero-code-add-array-item-button-container">
      <button class="zero-code-add-array-item-button" onclick="window.addArrayItem('${ie(e)}', '${ie(o)}')">
        <span class="zero-code-plus-icon">＋</span>
        <span class="zero-code-button-text">${o}を追加</span>
      </button>
    </div>
  `;
}
function Or(e, o, t, r, n) {
  const m = e.querySelectorAll("[z-for]");
  I.debug("=== processZForElements(DOM版)開始 ==="), I.debug(`z-for要素検索結果: ${m.length}個発見`), I.debug("コンポーネントデータ:", o), m.forEach((v) => {
    const l = v.getAttribute("z-for");
    if (l) {
      const h = o[l];
      if (I.debug(`z-for処理: ${l}`, {
        arrayData: h,
        length: Array.isArray(h) ? h.length : "not array"
      }), Array.isArray(h) && h.length > 0) {
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
          const s = E.substring(P, d), f = [s];
          if (f && f[0]) {
            let a = "";
            const i = s.match(/<div([^>]*z-for="[^"]*"[^>]*)>/);
            let c = "";
            i && i[1] && (c = i[1].replace(/\s*z-for="[^"]*"\s*/, "").trim());
            const p = s.indexOf(">") + 1, $ = s.lastIndexOf("</div>"), z = s.substring(p, $).trim();
            if (z) {
              const C = z;
              I.debug(`z-for処理開始: ${l}`, {
                arrayLength: h.length,
                template: C,
                arrayData: h
              }), h.forEach((_, S) => {
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
                ), I.debug("テキスト置換後:", { itemHtml: T })), tt && (T = tt(T, _)), T.includes("z-if") || T.includes("z-slot") || T.includes("z-for")) {
                  const V = new DOMParser().parseFromString(
                    `<div>${T}</div>`,
                    "text/html"
                  ), Z = `${o.id}_${l}_${S}`, te = {
                    ..._,
                    type: o.type,
                    module_name: o.module_name,
                    id: Z
                  };
                  Oo(V, te), V.querySelectorAll("[z-slot]").forEach((Ve) => {
                    const Ae = Ve.getAttribute("z-slot");
                    if (Ae && te[Ae]) {
                      const Ze = te[Ae];
                      if (Array.isArray(Ze) && Ze.length > 0) {
                        let Ge = '<div class="zero-code-z-for-nested-parts">';
                        Ze.forEach((Pt, dt) => {
                          const xt = `${o.id}.${l}[${S}].${Ae}`;
                          Ge += `
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(xt)}', ${dt})">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">上にパーツを追加</span>
                              </button>
                            </div>
                          `;
                          const io = we;
                          we = null;
                          const Qe = r(
                            Pt,
                            n,
                            t + 2
                          );
                          we = io;
                          const Le = `${o.id}.${l}[${S}].${Ae}[${dt}]`, lo = t + 2;
                          Ge += `
                            <div class="zero-code-nested-component zero-code-nested-depth-${lo} zero-code-z-for-nested-part" 
                                 draggable="true"
                                 data-component-id="${Pt.id}" 
                                 data-path="${Le}" 
                                 data-parent-path="${o.id}.${l}[${S}].${Ae}"
                                 data-index="${dt}"
                                 data-nested-path="${Le}"
                                 data-slot-name="${Ae}"
                                 data-part-index="${dt}"
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
                                  <button class="zero-code-edit-button" onclick="window.openNestedEditor('${ie(Le)}')">編集</button>
                                  <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${ie(Le)}')">削除</button>
                                </div>
                              </div>
                              <div class="zero-code-nested-component-content" 
                                   ondragover="window.handleNestedPartDragOver && window.handleNestedPartDragOver(event)"
                                   ondrop="window.handleNestedPartDrop && window.handleNestedPartDrop(event)"
                                   data-slot-name="${Ae}" 
                                   data-part-index="${dt}" 
                                   data-parent-path="${o.id}.${l}[${S}].${Ae}">${Qe}</div>
                            </div>
                          `;
                        });
                        const Lt = `${o.id}.${l}[${S}].${Ae}`;
                        Ge += `
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(Lt)}', ${Ze.length})">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">下にパーツを追加</span>
                            </button>
                          </div>
                        `, Ge += "</div>", Ve.innerHTML = Ge;
                      } else {
                        const Ge = `${o.id}.${l}[${S}].${Ae}`;
                        Ve.innerHTML = `
                          <div class="zero-code-z-for-empty-slot">
                            スロット "${Ae}" は空です
                            <div class="zero-code-add-nested-part-button-container">
                              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(Ge)}', 0)">
                                <span class="zero-code-plus-icon">＋</span>
                                <span class="zero-code-button-text">パーツを追加</span>
                              </button>
                            </div>
                          </div>
                        `;
                      }
                      Ve.removeAttribute("z-slot");
                    } else if (Ae) {
                      const Ze = `${o.id}.${l}[${S}].${Ae}`;
                      Ve.innerHTML = `
                        <div class="zero-code-z-for-empty-slot">
                          スロット "${Ae}" にデータがありません
                          <div class="zero-code-add-nested-part-button-container">
                            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(Ze)}', 0)">
                              <span class="zero-code-plus-icon">＋</span>
                              <span class="zero-code-button-text">パーツを追加</span>
                            </button>
                          </div>
                        </div>
                      `, Ve.removeAttribute("z-slot");
                    }
                  }), V.querySelectorAll("[z-for]").length > 0 && Or(
                    V,
                    te,
                    t + 1,
                    r,
                    n
                  ), T = V.body.innerHTML.replace(/^<div>|<\/div>$/g, "");
                }
                let L = c;
                L.includes("($") && tt && (L = tt(
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
              const u = `
                <div class="zero-code-z-for-add-last-button">
                  <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${o.id}', '${l}', ${h.length})" title="最後に追加">
                    <span class="zero-code-control-icon">＋</span>
                    <span class="zero-code-button-text">追加</span>
                  </button>
                </div>
              `;
              a += u, I.debug(`z-for最終結果: ${l}`, {
                itemsHtml: a,
                itemCount: h.length
              });
              const y = v.parentNode;
              if (y) {
                const _ = document.createElement("div");
                _.innerHTML = a;
                const S = document.createDocumentFragment();
                for (; _.firstChild; )
                  S.appendChild(_.firstChild);
                y.replaceChild(S, v);
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
function Xi(e, o, t) {
  let r = e;
  const n = /<div([^>]*z-for="([^"]*)"[^>]*)>([\s\S]*?)<\/div>/g;
  let m;
  for (; (m = n.exec(e)) !== null; ) {
    const [v, l, h, E] = m, A = o[h];
    if (I.debug(`=== processZForWithRegex(正規表現版)処理: ${h}`, {
      arrayData: A,
      length: Array.isArray(A) ? A.length : "not array"
    }), Array.isArray(A) && A.length > 0) {
      let w = "";
      A.forEach((b, d) => {
        let s = E;
        if (`${ie(o.id)}${ie(h)}${d}`, Ot && (s = Ot(
          s,
          b,
          o,
          e,
          h
        )), tt && (s = tt(s, b)), s.includes("z-if") || s.includes("z-slot") || s.includes("z-for")) {
          const C = new DOMParser().parseFromString(`<div>${s}</div>`, "text/html"), u = `${o.id}_${h}_0`, y = {
            ...b,
            type: o.type,
            module_name: o.module_name,
            id: u
          };
          Oo(C, y), C.querySelectorAll("[z-slot]").forEach((S) => {
            const T = S.getAttribute("z-slot");
            if (T && y[T]) {
              const M = y[T];
              if (Array.isArray(M) && M.length > 0) {
                let L = '<div class="zero-code-z-for-nested-parts">';
                M.forEach((F, U) => {
                  const x = `${o.id}.${h}[0].${T}`;
                  L += `
                    <div class="zero-code-add-nested-part-button-container">
                      <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(x)}', ${U})">
                        <span class="zero-code-plus-icon">＋</span>
                        <span class="zero-code-button-text">上にパーツを追加</span>
                      </button>
                    </div>
                  `;
                  let q = F.content || F.title || F.name || "(内容なし)";
                  const V = `${o.id}.${h}[0].${T}[${U}]`;
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
                const k = `${o.id}.${h}[0].${T}`;
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
        let f = l.replace(/\s*z-for="[^"]*"\s*/, "").trim();
        f.includes("($") && tt && (f = tt(f, b));
        let a = "", i = f;
        if (f) {
          const C = f.match(/class="([^"]*)"/);
          C && (a = C[1], i = f.replace(/\s*class="[^"]*"\s*/, "").trim());
        }
        const c = a ? `zero-code-z-for-item-wrapper ${a}` : "zero-code-z-for-item-wrapper", p = `
          <div class="zero-code-z-for-controls" data-component-id="${o.id}" data-array-name="${h}" data-index="${d}">
            <div class="zero-code-z-for-controls-inner">
              <button class="zero-code-z-for-btn zero-code-z-for-add-btn" onclick="window.addZForArrayItem('${ie(o.id)}', '${ie(h)}', ${d})" title="上に追加">
                <span class="zero-code-control-icon">＋</span>
              </button>
              <span class="zero-code-z-for-drag-handle" 
                    style="pointer-events: none; cursor: grab;"
                    title="ドラッグして並び替え">⠿</span>
              <button class="zero-code-z-for-btn zero-code-z-for-edit-btn" onclick="window.editZForArrayItem('${ie(o.id)}', '${ie(h)}', ${d})" title="編集">
                <span class="control-icon">✎</span>
              </button>
              <button class="zero-code-z-for-btn zero-code-z-for-delete-btn" onclick="window.removeZForArrayItem('${ie(o.id)}', '${ie(h)}', ${d})" title="削除">
                <span class="control-icon">✕</span>
              </button>
            </div>
          </div>
        `;
        let $ = `class="${c}" 
               draggable="true"
               data-component-id="${o.id}"
               data-array-name="${h}"
               data-item-index="${d}"
               ondragstart="window.handleZForDragStart && window.handleZForDragStart(event, '${o.id}', '${h}', ${d})"
               ondragend="window.handleZForDragEnd && window.handleZForDragEnd(event)"
               ondragover="window.handleZForArrayItemDragOver && window.handleZForArrayItemDragOver(event)"
               ondrop="window.handleZForArrayItemDrop && window.handleZForArrayItemDrop(event)"
               style="cursor: grab; position: relative; transition: all 0.3s ease;"
               onmousedown="this.style.cursor = 'grabbing'"
               onmouseup="this.style.cursor = 'grab'"`;
        i && ($ += ` ${i}`);
        const z = `
          <div ${$}>
            ${p}
            <div class="zero-code-z-for-item-content">${s}</div>
          </div>
        `;
        w += z;
      });
      const P = `
        <div class="zero-code-z-for-add-last-button">
          <button class="zero-code-z-for-btn zero-code-z-for-add-last-btn" onclick="window.addZForArrayItem('${o.id}', '${h}', ${A.length})" title="最後に追加">
            <span class="zero-code-control-icon">＋</span>
            <span class="zero-code-button-text">追加</span>
          </button>
        </div>
      `;
      w += P, r = r.replace(v, w);
    } else
      I.debug(`正規表現z-for空配列: ${h}に追加ボタンを設置`), r = r.replace(
        v,
        Wi(o.id, h)
      );
  }
  return r;
}
function Yi(e, o, t, r, n) {
  const m = e.querySelectorAll("[z-slot]");
  I.debug(`z-slot要素発見: ${m.length}個`), m.forEach((v) => {
    const l = v.getAttribute("z-slot");
    if (I.debug(`z-slot処理: ${l}`), l) {
      const h = o[l], E = Array.isArray(h) ? h : [];
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
          const d = P.id, s = we && lr(o, l) ? `${we.parentId}.${we.arrayName}[${we.arrayIndex}].${we.slotName}` : o.id, f = t + 1;
          A += `
            <div class="zero-code-add-nested-part-button-container">
              <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${ie(s)}', ${b})">
                <span class="zero-code-plus-icon">＋</span>
                <span class="zero-code-button-text">上にパーツを追加（${f}階層目）</span>
              </button>
            </div>
          `, A += `
            <div class="nested-component nested-depth-${f} draggable-nested" 
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
                ${r(P, n, f)}
              </div>
            </div>
          `;
        });
        const w = we && lr(o, l) ? `${we.parentId}.${we.arrayName}[${we.arrayIndex}].${we.slotName}` : o.id;
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
const Ki = [
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
], Ji = [
  // {{ variable }}
  /\{\{[^}]+\}\}/g,
  // v-text, v-html の内容
  /v-text="[^"]*"/g,
  /v-html="[^"]*"/g
];
function qi(e) {
  return Je(
    () => {
      const o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
      let r = e;
      return I.debug("Vue.jsディレクティブ保護開始", {
        htmlLength: e.length
      }), Ki.forEach((n, m) => {
        r = r.replace(n, (v) => {
          const l = `__VUE_DIR_${m}_${o.size}__`;
          return o.set(l, v), I.debug(`ディレクティブ保護: ${v} → ${l}`), l;
        });
      }), Ji.forEach((n, m) => {
        r = r.replace(n, (v) => {
          const l = `__VUE_INT_${m}_${t.size}__`;
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
    qe,
    "Vue.jsディレクティブ保護中にエラーが発生しました",
    ue.TEMPLATE
  ) || {
    html: e,
    directives: /* @__PURE__ */ new Map(),
    interpolations: /* @__PURE__ */ new Map()
  };
}
function dr(e, o) {
  return Je(
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
    qe,
    "Vue.jsディレクティブ復元中にエラーが発生しました",
    ue.TEMPLATE
  ) || e;
}
function Gi(e) {
  return Je(
    () => {
      const o = qi(e), r = new DOMParser().parseFromString(o.html, "text/html");
      return I.debug("安全DOMパース完了", {
        originalLength: e.length,
        protectedLength: o.html.length,
        parsedElementCount: r.body.children.length
      }), { doc: r, preservation: o };
    },
    qe,
    "安全DOMパース中にエラーが発生しました",
    ue.TEMPLATE
  ) || {
    doc: new DOMParser().parseFromString("<div></div>", "text/html"),
    preservation: { html: e, directives: /* @__PURE__ */ new Map(), interpolations: /* @__PURE__ */ new Map() }
  };
}
function cr(e) {
  return e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ") : "";
}
function Qi(e, o, t) {
  return Je(
    () => {
      I.debug("統合テンプレート処理開始", {
        componentId: o.id,
        htmlLength: e.length
      });
      let r = e;
      return r = r.replace(
        /(\(\$[^:)]+\?:[^)]*\)|\(\$[^:)]+:[^)]*\)|\{\$[^:}]+:[^}]*\})/g,
        (n) => n.includes("?:") ? el(n, o) : n.startsWith("(") && n.includes(":") ? tl(n, o) : n.startsWith("{") && n.includes(":") ? ol(n, o, t) : n
      ), I.success("統合テンプレート処理完了", {
        componentId: o.id,
        resultLength: r.length
      }), r;
    },
    qe,
    `統合テンプレート処理中にエラーが発生しました (componentId: ${o.id})`,
    ue.TEMPLATE
  ) || e;
}
function el(e, o) {
  const t = e.match(/\(\$([^:?]+)\?:([^)]*)\)/);
  if (!t) return e;
  const [, r, n] = t, m = n.split("|"), v = o[r];
  return Array.isArray(v) ? v.join(" ") : v && m.includes(String(v)) ? String(v) : m[0] || "";
}
function tl(e, o) {
  const t = e.match(/\(\$([^:]+):([^)]*)\)/);
  if (!t) return e;
  const [, r, n] = t, m = n.split("|"), v = o[r];
  return v && m.includes(String(v)) ? String(v) : m[0] || "";
}
function ol(e, o, t) {
  const r = e.match(/\{\$([^:]+):([^}]*)\}/);
  if (!r) return e;
  const [, n, m] = r, v = o[n], l = cr(v ? String(v) : m);
  return rl(t, n) ? `<div class="tiptap-content" data-component-id="${o.id}" data-param-name="${n}">${l}</div>` : l;
}
function rl(e, o) {
  const t = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), r = new RegExp(
    `\\{\\$${t}:[^}]*\\}`,
    "g"
  );
  let n;
  for (; (n = r.exec(e)) !== null; ) {
    const m = n.index, v = e.substring(0, m), l = v.lastIndexOf("<"), h = v.lastIndexOf(">");
    if (l > h)
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
      (d) => m >= d.start && m <= d.end
    ))
      return !0;
  }
  return !1;
}
const Jt = /* @__PURE__ */ new Map();
function nl(e, o, t) {
  const r = `${e}:${o}`;
  if (Jt.has(r))
    return Jt.get(r);
  const n = t(e, o);
  return Jt.set(r, n), n;
}
function al() {
  Jt.clear(), I.debug("テンプレートキャッシュをクリアしました");
}
function sl(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "";
}
const ur = new DOMParser(), gt = /* @__PURE__ */ new Map(), il = 50;
function ll(e) {
  return Je(
    () => {
      if (gt.has(e)) {
        const t = gt.get(e);
        if (t)
          return I.debug("DOMParser: キャッシュからヒット"), t.cloneNode(!0);
      }
      const o = ur.parseFromString(e, "text/html");
      if (gt.size >= il) {
        const t = gt.keys().next().value;
        t && gt.delete(t);
      }
      return gt.set(e, o.cloneNode(!0)), I.debug("DOMParser: 新規パース＆キャッシュ保存"), o;
    },
    qe,
    "HTML解析中にエラーが発生しました",
    ue.TEMPLATE
  ) || ur.parseFromString("<div></div>", "text/html");
}
function dl(e, o, t, r = 1) {
  return Je(
    () => {
      I.debug("最適化z-directive処理開始", {
        componentId: o.id,
        currentDepth: r
      });
      let n = e;
      return n = cl(n, o), n = ul(n, o, t), n = pl(n, o, r, t), I.success("最適化z-directive処理完了", {
        componentId: o.id,
        resultLength: n.length
      }), n;
    },
    qe,
    `z-directive処理中にエラーが発生しました (componentId: ${o.id})`,
    ue.TEMPLATE
  ) || e;
}
function cl(e, o) {
  return e.replace(
    /<([^>]*z-if="([^"]*)"[^>]*)>([\\s\\S]*?)<\/[^>]*>/g,
    (t, r, n, m) => {
      if (!o[n])
        return I.debug(`z-if要素を非表示: ${n}`), "";
      const l = r.replace(/\s*z-if="[^"]*"\s*/, " ").trim();
      return I.debug(`z-if要素を表示: ${n}`), `<div ${l}>${m}</div>`;
    }
  );
}
function ul(e, o, t) {
  return e.replace(
    /<div([^>]*z-for="([^"]*)"[^>]*)>([\\s\\S]*?)<\/div>/g,
    (r, n, m, v) => {
      const l = o[m];
      return I.debug(`z-for処理: ${m}`, {
        length: Array.isArray(l) ? l.length : "not array"
      }), !Array.isArray(l) || l.length === 0 ? `
          <div class="add-array-item-button-container">
            <button class="add-array-item-button" onclick="window.addArrayItem('${o.id}', '${m}')">
              <span class="zero-code-plus-icon">＋</span>
              <span class="zero-code-button-text">${m}を追加</span>
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
function pl(e, o, t, r) {
  const n = ll(e), m = n.querySelectorAll("[z-slot]");
  return I.debug(`z-slot要素発見: ${m.length}個`), m.forEach((v) => {
    const l = v.getAttribute("z-slot");
    if (l) {
      const h = o[l], E = Array.isArray(h) ? h : [];
      if (E.length === 0)
        v.innerHTML = `
          <div class="zero-code-add-nested-part-button-container">
            <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${sl(o.id)}', 0)">
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
function fl() {
  gt.clear(), I.debug("DOMキャッシュをクリアしました");
}
function Ao(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "";
}
function pr(e) {
  return e ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ") : "";
}
function Fr() {
  const e = ne(null);
  let o = !1;
  const t = (a, i) => {
    const c = `\\{\\$${i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:[^}]*\\}`, p = new RegExp(c, "g");
    let $;
    for (; ($ = p.exec(a)) !== null; ) {
      const z = $.index, C = a.substring(0, z), u = C.lastIndexOf("<"), y = C.lastIndexOf(">");
      if (u > y)
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
  }, r = (a, i, c) => a.replace(/\{\$([^:]+):(.*?)\}/g, (p, $, z) => {
    const C = String(i[$] || z), u = pr(C);
    return t(c, $) ? $ === "content" ? `<div class="zero-code-rich-editable-text block-editable" data-component-id="${i.id}" data-param="${$}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${$}', this.innerHTML, this);">${u}</div>` : `<span class="zero-code-rich-editable-text inline-editable" data-component-id="${i.id}" data-param="${$}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${i.id}', '${$}', this.innerHTML, this);">${u}</span>` : u;
  }), n = (a, i, c, p, $) => a.replace(
    /\{\$([^:]+):(.*?)\}/g,
    (z, C, u) => {
      const y = String(i[C] || u), _ = pr(y);
      if (t(p, C)) {
        const M = c[$].indexOf(i), L = `${c.id}_${$}_${M}_${C}`;
        return C === "content" ? `<div class="zero-code-rich-editable-text array-item-text block-editable" data-component-id="${L}" data-param="${C}" data-array-name="${$}" data-item-index="${M}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${L}', '${C}', this.innerHTML, this);">${_}</div>` : `<span class="zero-code-rich-editable-text array-item-text inline-editable" data-component-id="${L}" data-param="${C}" data-array-name="${$}" data-item-index="${M}" onclick="event.stopPropagation(); if(window.getSelection && window.getSelection().toString().length > 0) return; if(window.startRichTextEdit) window.startRichTextEdit('${L}', '${C}', this.innerHTML, this);">${_}</span>`;
      }
      return _;
    }
  ), m = (a, i) => a.replace(
    /\(\$([^:]+):(.*?)\)/g,
    (c, p, $) => {
      if (i[p]) {
        let u = i[p];
        return u === "指定無し" && (u = ""), Array.isArray(u) ? u.join(" ") : String(u);
      }
      const z = p;
      if (i[z]) {
        let u = i[z];
        return u === "指定無し" && (u = ""), Array.isArray(u) ? u.join(" ") : String(u);
      }
      return $.split("|").filter((u) => u.trim())[0] || "";
    }
  ), v = (a, i) => a.replace(/\(\$([^:?]+):(.*?)\)/g, (c, p, $) => {
    let z = i[p];
    return z === "指定無し" && (z = ""), Array.isArray(z) ? z.join(" ") : z ? String(z) : $.split("|").filter((u) => u.trim())[0] || "";
  }), l = (a, i) => a.replace(
    /\(\$([^:?]+)\?:(.*?)\)/g,
    (c, p, $) => {
      const z = i[p];
      return Array.isArray(z) ? z.join(" ") : String(z || "");
    }
  ), h = (a, i, c, p, $) => a.replace(/@slot\(\$([^)]+)\)@/g, (z, C) => {
    const u = i[C], y = Array.isArray(u) ? u : [];
    return c(
      y,
      [p],
      (_) => _.join("-"),
      $
    );
  }), E = (a, i, c, p) => {
    const $ = c(a.type, a.module_name);
    if (!$)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let z = $;
    return z = v(z, a), z = l(z, a), z = r(z, a, $), z = h(
      z,
      a,
      p,
      i,
      c
    ), z = b(z, a, c, i, 1), z;
  }, A = (a, i, c = 0) => {
    const p = i(a.type, a.module_name);
    if (!p)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let $ = p;
    return $ = v($, a), $ = l($, a), $ = r($, a, p), $ = $.replace(/@slot\(\$([^)]+)\)@/g, ""), $ = b($, a, i, c, 1), $;
  }, w = (a, i, c, p) => {
    const $ = i(a.type, a.module_name);
    if (!$)
      return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
    let z = $;
    return z = v(z, a), z = l(z, a), z = r(z, a, $), z = z.replace(/@slot\(\$([^)]+)\)@/g, ""), z = b(z, a, i, 0, c), z;
  }, P = (a, i = [], c, p) => {
    if (!a || a.length === 0)
      return `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', 0)">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">ネストパーツを追加（${i.length + 1}階層目）</span>
          </button>
        </div>
      `;
    let $ = "";
    return a.forEach((z, C) => {
      const u = [...i, C], y = c(u), _ = u.length;
      $ += `
        <div class="zero-code-add-nested-part-button-container">
          <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', ${C})">
            <span class="zero-code-plus-icon">＋</span>
            <span class="zero-code-button-text">上にパーツを追加（${i.length + 1}階層目）</span>
          </button>
        </div>
      `, $ += `
        <div class="zero-code-nested-component zero-code-nested-depth-${_} zero-code-draggable-nested" 
             draggable="true" 
             data-component-id="${z.id}" 
             data-path="${y}" 
             data-parent-path="${c(i)}"
             data-index="${C}"
>
          <div class="zero-code-component-header zero-code-nested-header">
            <!-- ドラッグハンドル -->
            <div class="zero-code-drag-handle-nested">
              ⠿
            </div>
            <div class="zero-code-header-actions">
              <button class="zero-code-edit-button" onclick="window.openNestedEditor('${y}')">編集</button>
              <button class="zero-code-delete-button" onclick="window.deleteNestedPart('${y}')">削除</button>
            </div>
          </div>
          <div class="zero-code-nested-component-content">
            ${p ? A(z, p) : `<div>テンプレートが見つかりません: ${z.type}/${z.module_name}</div>`}
          </div>
        </div>
      `, z.nested_parts && Array.isArray(z.nested_parts) && z.nested_parts.length > 0 && ($ += P(
        z.nested_parts,
        u,
        c,
        p
      ));
    }), $ += `
      <div class="zero-code-add-nested-part-button-container">
        <button class="zero-code-add-nested-part-button" onclick="window.openNestedPartSelector('${Ao(c(i))}', ${a.length})">
          <span class="zero-code-plus-icon">＋</span>
          <span class="zero-code-button-text">下にパーツを追加（${i.length + 1}階層目）</span>
        </button>
      </div>
    `, $;
  }, b = (a, i, c, p = 0, $ = 1) => Je(
    () => {
      I.debug("processZDirectives開始", {
        componentId: i.id,
        type: i.type,
        htmlLength: a.length,
        currentDepth: $
      }), o || (ji(
        n,
        m
      ), o = !0);
      const { doc: z, preservation: C } = Gi(a), u = (M, L, k) => w(M, L, k);
      Oo(z, i), Ui(z, i), Or(z, i, $, u, c);
      const y = C.html.match(/z-for="[^"]*"/g), _ = z.querySelectorAll("[z-for]");
      if (I.debug(
        `元のHTML内z-for: ${y ? y.length : 0}個、DOM処理後: ${_.length}個`
      ), y && y.length > 0 && _.length === 0)
        I.debug("DOM処理でz-forが処理された - 正規表現フォールバックをスキップ");
      else if (_.length > 0) {
        I.debug("DOM処理で未処理のz-for要素あり - 正規表現フォールバック実行");
        const M = Xi(C.html, i);
        if (M !== C.html)
          return I.debug("正規表現処理で変更あり - Vue.js復元して終了"), dr(M, C);
      }
      Yi(z, i, $, u, c);
      const S = z.body.innerHTML, T = dr(S, C);
      return I.success("processZDirectives完了（Vue.jsディレクティブ復元済み）", {
        componentId: i.id,
        resultLength: T.length,
        directiveCount: C.directives.size,
        interpolationCount: C.interpolations.size
      }), T;
    },
    qe,
    `Z-Directive処理中にエラーが発生しました (componentId: ${i.id})`,
    ue.TEMPLATE
  ) || a;
  return {
    editingText: e,
    shouldApplyTiptap: t,
    processTextReplacementWithTemplate: r,
    processArrayItemTextReplacement: n,
    processArrayItemParameterReplacement: m,
    processSelectionSyntax: v,
    processConditionalClassSyntax: l,
    processSlotSyntax: h,
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
    renderComponentOptimized: (a, i) => Je(
      () => {
        I.debug("最適化レンダリング開始", {
          componentId: a.id,
          type: a.type
        });
        const c = nl(a.type, a.module_name, i);
        if (!c)
          return `<div>テンプレートが見つかりません: ${a.type}/${a.module_name}</div>`;
        let p = Qi(c, a, c);
        return p = dl(p, a, i, 1), I.success("最適化レンダリング完了", {
          componentId: a.id,
          resultLength: p.length
        }), p;
      },
      qe,
      `最適化レンダリング中にエラーが発生しました (componentId: ${a.id})`,
      ue.TEMPLATE
    ) || `<div>レンダリングエラー: ${a.id}</div>`,
    clearAllCaches: () => {
      al(), fl(), I.debug("全ての最適化キャッシュをクリアしました");
    }
  };
}
const ml = { class: "zero-code-page-preview" }, gl = { class: "zero-code-data-tabs" }, hl = { class: "zero-code-page-preview-content" }, vl = ["innerHTML"], yl = {
  key: 1,
  class: "zero-code-html-source"
}, bl = { class: "zero-code-html-source-pre" }, $l = /* @__PURE__ */ _e({
  __name: "PagePreview",
  props: {
    pageData: { type: Array },
    parts: { type: Array }
  },
  setup(e) {
    const o = e;
    Fr();
    const t = ne("rendered"), r = (P) => {
      if (!P) return "";
      try {
        const s = new globalThis.DOMParser().parseFromString(`<root>${P}</root>`, "text/html").body.firstChild;
        if (!s) return P;
        const f = /* @__PURE__ */ new Set([
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
        ]), i = (p, $ = 0, z = !1) => {
          var U;
          const C = p.tagName.toLowerCase(), u = z ? "" : "  ".repeat($), y = f.has(C), _ = a.has(C);
          let S = `<${C}`;
          for (let x = 0; x < p.attributes.length; x++) {
            const q = p.attributes[x];
            S += ` ${q.name}="${q.value}"`;
          }
          S += ">";
          let T = u + S;
          if (y)
            return T;
          let M = !1, L = !1;
          const k = [];
          let F = "";
          for (let x = 0; x < p.childNodes.length; x++) {
            const q = p.childNodes[x];
            if (q.nodeType === 1) {
              M = !0;
              const Z = i(
                q,
                $ + 1,
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
` + u)) : M ? _ || z ? T += k.join("") : (T += `
` + k.join(`
`), k.length > 0 && (T += `
` + u)) : L && (T += F), T += `</${C}>`, T;
        };
        let c = "";
        for (let p = 0; p < s.childNodes.length; p++) {
          const $ = s.childNodes[p];
          $.nodeType === 1 && (c += i($) + `
`);
        }
        return c.replace(/\n{3,}/g, `

`).replace(/\n\s*\n\s*</g, `
<`).trim();
      } catch {
        return P.replace(/>\s*</g, `>
<`).split(`
`).filter((d) => d.trim()).map((d, s, f) => {
          const a = d.trim();
          if (!a) return "";
          let i = 0;
          for (let c = 0; c < s; c++) {
            const p = f[c].trim();
            p.match(/<[^\/!][^>]*[^\/]>$/) && i++, p.match(/<\/[^>]+>$/) && i--;
          }
          return a.startsWith("</") && i--, "  ".repeat(Math.max(0, i)) + a;
        }).join(`
`);
      }
    }, n = (P, b) => {
      if (!Array.isArray(o.parts)) return "";
      const d = o.parts.find((f) => f.type === P);
      if (!d) return "";
      const s = d.module.find((f) => f.title === b);
      return s ? s.body : "";
    }, m = () => {
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
      return s.querySelectorAll("[z-if]").forEach((p) => {
        const $ = p.getAttribute("z-if");
        $ && (b[$] ? p.removeAttribute("z-if") : p.remove());
      }), s.querySelectorAll("[z-for-wrapper]").forEach((p) => {
        const $ = p.getAttribute("z-for-wrapper");
        if ($) {
          const z = b[$];
          !Array.isArray(z) || z.length === 0 ? p.remove() : p.removeAttribute("z-for-wrapper");
        }
      }), s.querySelectorAll("[z-for]").forEach((p) => {
        const $ = p.getAttribute("z-for");
        if ($) {
          const z = b[$];
          if (Array.isArray(z) && z.length > 0) {
            const C = n(b.type, b.module_name), u = h(C, $);
            if (u) {
              const y = z.map((_) => {
                let S = u;
                return S = l(S, _), S = E(S, _), S = A(S, _), S;
              }).join("");
              p.outerHTML = y;
            } else
              p.remove();
          } else
            p.remove();
        }
      }), s.querySelectorAll("[z-slot]").forEach((p) => {
        const $ = p.getAttribute("z-slot");
        if ($)
          if (b[$] && Array.isArray(b[$])) {
            const z = w(b[$]);
            p.outerHTML = z;
          } else
            p.remove();
      }), s.body.innerHTML;
    }, h = (P, b) => {
      const d = new RegExp(`<div[^>]*z-for="${b}"[^>]*>`), s = P.match(d);
      if (!s) return "";
      const f = P.indexOf(s[0]);
      if (f === -1) return "";
      let a = 0, i = f;
      for (let u = f; u < P.length; u++)
        if (P.substring(u, u + 4) === "<div")
          a++;
        else if (P.substring(u, u + 6) === "</div>" && (a--, a === 0)) {
          i = u + 6;
          break;
        }
      if (a !== 0) return "";
      const c = P.substring(f, i), p = s[0].replace(/\s*z-for="[^"]*"\s*/, " ").replace(/\s+>/, ">"), $ = c.indexOf(">") + 1, z = c.lastIndexOf("</div>"), C = c.substring($, z);
      return p + C + "</div>";
    }, E = (P, b) => (P = P.replace(
      /\(\$([^:?]+)\?:(.*?)\)/g,
      (d, s, f) => {
        const a = b[s];
        return Array.isArray(a) ? a.join(" ") : a || "";
      }
    ), P = P.replace(
      /\(\$([^:]+):(.*?)\)/g,
      (d, s, f) => {
        let a = b[s];
        return (a === "指定なし" || a === "") && (a = ""), a ? Array.isArray(a) ? a.join(" ") : a : f.includes("|") ? f.split("|").filter((c) => c.trim() !== "")[0] || "" : f.includes(",") ? f.split(",").map((c) => c.trim()).filter((c) => c !== "")[0] || "" : f;
      }
    ), P), A = (P, b) => P.replace(
      /\{\$([^:]+):(.*?)\}/g,
      (d, s, f) => String(b[s] || f)
    ), w = (P) => {
      if (!P || P.length === 0)
        return "";
      let b = "";
      return P.forEach((d) => {
        const s = v(d);
        s && s.trim() !== "" && (b += s);
      }), b;
    };
    return (P, b) => (D(), N("div", ml, [
      g("div", gl, [
        g("button", {
          class: Fe(["zero-code-data-tab-button", { active: t.value === "rendered" }]),
          onClick: b[0] || (b[0] = (d) => t.value = "rendered")
        }, " レンダリング結果 ", 2),
        g("button", {
          class: Fe(["zero-code-data-tab-button", { active: t.value === "source" }]),
          onClick: b[1] || (b[1] = (d) => t.value = "source")
        }, " HTMLソース ", 2)
      ]),
      g("div", hl, [
        t.value === "rendered" ? (D(), N("div", {
          key: 0,
          innerHTML: m()
        }, null, 8, vl)) : Y("", !0),
        t.value === "source" ? (D(), N("div", yl, [
          b[2] || (b[2] = g("div", { class: "zero-code-source-header" }, [
            g("p", { class: "zero-code-source-description" }, "パーツごとに改行・インデントされたHTMLソース")
          ], -1)),
          g("pre", bl, [
            g("code", null, H(r(m())), 1)
          ])
        ])) : Y("", !0)
      ])
    ]));
  }
}), wl = { class: "zero-code-tab-content" }, zl = /* @__PURE__ */ _e({
  __name: "PreviewPanel",
  props: {
    editablePageData: { type: Array },
    localParts: { type: Array },
    parts: { type: Array }
  },
  setup(e) {
    return (o, t) => (D(), N("div", wl, [
      ht($l, {
        "page-data": o.editablePageData,
        parts: o.localParts && o.localParts.length > 0 ? o.localParts : o.parts || []
      }, null, 8, ["page-data", "parts"])
    ]));
  }
}), Al = { class: "zero-code-modal-header" }, Pl = { class: "zero-code-modal-body" }, El = { class: "zero-code-img-file-input-section" }, _l = {
  key: 0,
  class: "zero-code-img-file-info"
}, Cl = { class: "zero-code-img-file-preview" }, Sl = ["src"], Il = { class: "zero-code-img-file-details" }, Tl = { class: "zero-code-form-section" }, Dl = { class: "zero-code-form-group" }, Nl = ["disabled"], kl = { class: "zero-code-form-group" }, Ml = ["disabled"], Ol = {
  key: 0,
  class: "zero-code-form-group"
}, Fl = ["disabled"], Rl = { class: "zero-code-modal-footer" }, Ll = ["disabled"], xl = /* @__PURE__ */ _e({
  __name: "ImageUploadModal",
  props: {
    category: { type: String },
    componentId: { type: String }
  },
  emits: ["close", "upload"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = ne(null), m = ne(""), v = ne(""), l = ne(""), h = ne(t.componentId || ""), E = de(() => n.value && v.value.trim() && l.value.trim()), A = (i) => {
      const c = i.target;
      c.files && c.files[0] && P(c.files[0]);
    }, w = (i) => {
      i.preventDefault(), i.dataTransfer && i.dataTransfer.files[0] && P(i.dataTransfer.files[0]);
    }, P = (i) => {
      n.value = i, v.value = i.name.replace(/\.[^/.]+$/, ""), l.value = i.name, m.value && URL.revokeObjectURL(m.value), m.value = URL.createObjectURL(i);
    }, b = (i) => new Promise((c, p) => {
      const $ = new FileReader();
      $.readAsDataURL(i), $.onload = () => c($.result), $.onerror = (z) => p(z);
    }), d = () => Date.now().toString(36) + Math.random().toString(36).substr(2), s = (i) => {
      if (i === 0) return "0 Bytes";
      const c = 1024, p = ["Bytes", "KB", "MB", "GB"], $ = Math.floor(Math.log(i) / Math.log(c));
      return parseFloat((i / Math.pow(c, $)).toFixed(2)) + " " + p[$];
    }, f = async () => {
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
            componentId: t.category === "individual" ? h.value : void 0,
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
      m.value && URL.revokeObjectURL(m.value);
    }), (i, c) => (D(), N("div", {
      class: "zero-code-modal-overlay",
      onClick: c[8] || (c[8] = (p) => i.$emit("close"))
    }, [
      g("div", {
        class: "zero-code-modal-content",
        onClick: c[7] || (c[7] = He(() => {
        }, ["stop"]))
      }, [
        g("div", Al, [
          g("h4", null, "画像アップロード（" + H(i.category === "common" ? "共通" : "個別") + "）", 1),
          g("button", {
            class: "zero-code-img-close-btn",
            onClick: c[0] || (c[0] = (p) => i.$emit("close"))
          }, "×")
        ]),
        g("div", Pl, [
          g("div", El, [
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
              onDragover: c[1] || (c[1] = He(() => {
              }, ["prevent"])),
              onDragenter: c[2] || (c[2] = He(() => {
              }, ["prevent"]))
            }, null, 32)
          ]),
          n.value ? (D(), N("div", _l, [
            g("div", Cl, [
              g("img", {
                src: m.value,
                alt: "プレビュー"
              }, null, 8, Sl)
            ]),
            g("div", Il, [
              g("p", null, [
                c[10] || (c[10] = g("strong", null, "ファイル名:", -1)),
                jt(" " + H(n.value.name), 1)
              ]),
              g("p", null, [
                c[11] || (c[11] = g("strong", null, "サイズ:", -1)),
                jt(" " + H(s(n.value.size)), 1)
              ]),
              g("p", null, [
                c[12] || (c[12] = g("strong", null, "タイプ:", -1)),
                jt(" " + H(n.value.type), 1)
              ])
            ])
          ])) : Y("", !0),
          g("div", Tl, [
            g("div", Dl, [
              c[13] || (c[13] = g("label", { for: "image-name" }, "保存名:", -1)),
              Oe(g("input", {
                id: "image-name",
                "onUpdate:modelValue": c[3] || (c[3] = (p) => v.value = p),
                type: "text",
                placeholder: "画像の保存名を入力",
                disabled: !n.value
              }, null, 8, Nl), [
                [Xe, v.value]
              ])
            ]),
            g("div", kl, [
              c[14] || (c[14] = g("label", { for: "image-alt" }, "alt属性:", -1)),
              Oe(g("input", {
                id: "image-alt",
                "onUpdate:modelValue": c[4] || (c[4] = (p) => l.value = p),
                type: "text",
                placeholder: "画像の説明を入力",
                disabled: !n.value
              }, null, 8, Ml), [
                [Xe, l.value]
              ])
            ]),
            i.category === "individual" ? (D(), N("div", Ol, [
              c[15] || (c[15] = g("label", { for: "component-id" }, "コンポーネントID:", -1)),
              Oe(g("input", {
                id: "component-id",
                "onUpdate:modelValue": c[5] || (c[5] = (p) => h.value = p),
                type: "text",
                placeholder: "コンポーネントIDを入力",
                disabled: !n.value
              }, null, 8, Fl), [
                [Xe, h.value]
              ])
            ])) : Y("", !0)
          ])
        ]),
        g("div", Rl, [
          g("button", {
            class: "zero-code-img-btn zero-code-img-btn-secondary",
            onClick: c[6] || (c[6] = (p) => i.$emit("close"))
          }, "キャンセル"),
          g("button", {
            class: "zero-code-img-btn zero-code-img-btn-primary",
            disabled: !E.value,
            onClick: f
          }, " アップロード ", 8, Ll)
        ])
      ])
    ]));
  }
}), Bl = { class: "zero-code-modal-header" }, Hl = { class: "zero-code-modal-body" }, Vl = { class: "zero-code-img-detail-preview" }, Zl = ["src", "alt"], jl = { class: "zero-code-form-section" }, Ul = { class: "zero-code-form-group" }, Wl = { class: "zero-code-form-group" }, Xl = {
  key: 0,
  class: "zero-code-form-group"
}, Yl = { class: "zero-code-img-detail-info" }, Kl = { class: "zero-code-img-detail-info-group" }, Jl = { class: "zero-code-img-detail-info-group" }, ql = { class: "zero-code-img-detail-info-group" }, Gl = { class: "zero-code-img-detail-info-group" }, Ql = { class: "zero-code-img-detail-info-group" }, ed = { class: "zero-code-img-detail-url-group" }, td = { class: "zero-code-modal-footer" }, od = { class: "zero-code-modal-footer-right" }, rd = /* @__PURE__ */ _e({
  __name: "ImageDetailModal",
  props: {
    image: { type: Object }
  },
  emits: ["close", "delete", "replace"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = ao({ ...t.image }), m = ne(null), v = () => {
      confirm("この画像を削除しますか？この操作は取り消せません。") && r("delete", n.id);
    }, l = () => {
      m.value && m.value.click();
    }, h = async (b) => {
      const d = b.target;
      if (!d.files || !d.files[0]) return;
      const s = d.files[0];
      if (!confirm(`画像を "${s.name}" に差し替えますか？この操作は取り消せません。`)) {
        d.value = "";
        return;
      }
      try {
        const f = await E(s), a = {
          ...n,
          originalName: s.name,
          url: f,
          size: s.size,
          type: s.type,
          uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
          fileData: {
            base64: f
          }
        };
        r("replace", n.id, a);
      } catch {
        alert("画像の差し替えに失敗しました。");
      } finally {
        d.value = "";
      }
    }, E = (b) => new Promise((d, s) => {
      const f = new FileReader();
      f.readAsDataURL(b), f.onload = () => d(f.result), f.onerror = (a) => s(a);
    }), A = async (b) => {
      try {
        await navigator.clipboard.writeText(b), alert("URLをクリップボードにコピーしました");
      } catch {
        const s = document.createElement("textarea");
        s.value = b, document.body.appendChild(s), s.select(), document.execCommand("copy"), document.body.removeChild(s), alert("URLをクリップボードにコピーしました");
      }
    }, w = (b) => {
      if (b === 0) return "0 Bytes";
      const d = 1024, s = ["Bytes", "KB", "MB", "GB"], f = Math.floor(Math.log(b) / Math.log(d));
      return parseFloat((b / Math.pow(d, f)).toFixed(2)) + " " + s[f];
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
        onClick: d[7] || (d[7] = He(() => {
        }, ["stop"]))
      }, [
        g("div", Bl, [
          d[9] || (d[9] = g("h4", null, "画像詳細", -1)),
          g("button", {
            class: "zero-code-close-button",
            onClick: d[0] || (d[0] = (s) => b.$emit("close"))
          }, "✖️")
        ]),
        g("div", Hl, [
          g("div", Vl, [
            g("img", {
              src: n.url,
              alt: n.alt
            }, null, 8, Zl)
          ]),
          g("div", jl, [
            g("div", Ul, [
              d[10] || (d[10] = g("label", { for: "detail-image-name" }, "ファイル名:", -1)),
              Oe(g("input", {
                id: "detail-image-name",
                "onUpdate:modelValue": d[1] || (d[1] = (s) => n.name = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [Xe, n.name]
              ])
            ]),
            g("div", Wl, [
              d[11] || (d[11] = g("label", { for: "detail-image-alt" }, "alt属性:", -1)),
              Oe(g("input", {
                id: "detail-image-alt",
                "onUpdate:modelValue": d[2] || (d[2] = (s) => n.alt = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [Xe, n.alt]
              ])
            ]),
            n.componentId ? (D(), N("div", Xl, [
              d[12] || (d[12] = g("label", { for: "detail-component-id" }, "コンポーネントID:", -1)),
              Oe(g("input", {
                id: "detail-component-id",
                "onUpdate:modelValue": d[3] || (d[3] = (s) => n.componentId = s),
                type: "text",
                readonly: ""
              }, null, 512), [
                [Xe, n.componentId]
              ])
            ])) : Y("", !0),
            g("div", Yl, [
              g("div", Kl, [
                d[13] || (d[13] = g("label", null, "カテゴリ:", -1)),
                g("span", {
                  class: Fe(["zero-code-img-detail-category", n.category])
                }, H(n.category === "common" ? "共通画像" : "個別画像"), 3)
              ]),
              g("div", Jl, [
                d[14] || (d[14] = g("label", null, "ファイルサイズ:", -1)),
                g("span", null, H(w(n.size)), 1)
              ]),
              g("div", ql, [
                d[15] || (d[15] = g("label", null, "ファイルタイプ:", -1)),
                g("span", null, H(n.type), 1)
              ]),
              g("div", Gl, [
                d[16] || (d[16] = g("label", null, "アップロード日時:", -1)),
                g("span", null, H(P(n.uploadedAt)), 1)
              ]),
              g("div", Ql, [
                d[17] || (d[17] = g("label", null, "画像URL:", -1)),
                g("div", ed, [
                  Oe(g("input", {
                    "onUpdate:modelValue": d[4] || (d[4] = (s) => n.url = s),
                    type: "text",
                    readonly: "",
                    class: "zero-code-img-detail-url-input"
                  }, null, 512), [
                    [Xe, n.url]
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
        g("div", td, [
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
          g("div", od, [
            g("button", {
              class: "zero-code-btn zero-code-btn-secondary",
              onClick: d[6] || (d[6] = (s) => b.$emit("close"))
            }, " 閉じる ")
          ]),
          g("input", {
            ref_key: "fileInputRef",
            ref: m,
            type: "file",
            accept: "image/*",
            style: { display: "none" },
            onChange: h
          }, null, 544)
        ])
      ])
    ]));
  }
}), nd = { class: "zero-code-tab-content" }, ad = { class: "zero-code-data-tabs" }, sd = ["onClick"], id = { class: "zero-code-image-content" }, ld = {
  key: 0,
  class: "zero-code-image-section"
}, dd = { class: "zero-code-section-header" }, cd = { class: "zero-code-img-grid" }, ud = ["onClick"], pd = ["src", "alt"], fd = { class: "zero-code-img-info" }, md = { class: "zero-code-img-name" }, gd = { class: "zero-code-img-size" }, hd = ["onClick"], vd = {
  key: 0,
  class: "zero-code-empty-state"
}, yd = {
  key: 1,
  class: "zero-code-image-section"
}, bd = { class: "zero-code-section-header" }, $d = { class: "zero-code-img-grid" }, wd = ["onClick"], zd = ["src", "alt"], Ad = { class: "zero-code-img-info" }, Pd = { class: "zero-code-img-name" }, Ed = { class: "zero-code-img-size" }, _d = ["onClick"], Cd = {
  key: 0,
  class: "zero-code-empty-state"
}, Sd = { class: "zero-code-debug-info" }, Id = /* @__PURE__ */ _e({
  __name: "ImageManagementPanel",
  props: {
    commonImages: { type: Array },
    individualImages: { type: Array }
  },
  emits: ["updateCommonImages", "updateIndividualImages", "sendCommonImagesData", "sendIndividualImagesData", "initializeSampleImages"],
  setup(e, { emit: o }) {
    const t = e, r = o, n = ne("common"), m = ne(!1), v = ne(!1), l = ne("common"), h = ne(null), E = de(() => t.commonImages.length + t.individualImages.length), A = ["common", "individual"], w = (z) => ({
      common: "共通画像",
      individual: "個別画像"
    })[z], P = (z) => {
      if (z === 0) return "0 Bytes";
      const C = 1024, u = ["Bytes", "KB", "MB", "GB"], y = Math.floor(Math.log(z) / Math.log(C));
      return parseFloat((z / Math.pow(C, y)).toFixed(2)) + " " + u[y];
    }, b = (z) => {
      l.value = z, m.value = !0;
    }, d = () => {
      m.value = !1;
    }, s = (z) => {
      h.value = z, v.value = !0;
    }, f = () => {
      v.value = !1, h.value = null;
    }, a = (z) => {
      if (l.value === "common") {
        const C = [...t.commonImages, z];
        r("updateCommonImages", C);
      } else {
        const C = [...t.individualImages, z];
        r("updateIndividualImages", C);
      }
      d();
    }, i = (z) => {
      if (!h.value) return;
      if (h.value.category === "common") {
        const u = t.commonImages.filter((y) => y.id !== z);
        r("updateCommonImages", u);
      } else {
        const u = t.individualImages.filter((y) => y.id !== z);
        r("updateIndividualImages", u);
      }
      f();
    }, c = (z, C) => {
      if (C.category === "common") {
        const y = t.commonImages.map(
          (_) => _.id === z ? C : _
        );
        r("updateCommonImages", y);
      } else {
        const y = t.individualImages.map(
          (_) => _.id === z ? C : _
        );
        r("updateIndividualImages", y);
      }
      f();
    }, p = (z, C) => {
      if (confirm("この画像を削除しますか？"))
        if (C === "common") {
          const u = t.commonImages.filter((y) => y.id !== z);
          r("updateCommonImages", u);
        } else {
          const u = t.individualImages.filter((y) => y.id !== z);
          r("updateIndividualImages", u);
        }
    }, $ = () => r("initializeSampleImages");
    return (z, C) => (D(), N("div", nd, [
      g("div", ad, [
        (D(), N(ee, null, ae(A, (u) => g("button", {
          key: u,
          class: Fe(["zero-code-data-tab-button", { active: n.value === u }]),
          onClick: (y) => n.value = u
        }, H(w(u)), 11, sd)), 64))
      ]),
      g("div", id, [
        n.value === "common" ? (D(), N("div", ld, [
          g("div", dd, [
            g("h4", null, "共通画像 (" + H(z.commonImages.length) + "件)", 1),
            g("button", {
              class: "zero-code-img-upload-btn common",
              onClick: C[0] || (C[0] = (u) => b("common"))
            }, " 共通画像をアップロード ")
          ]),
          g("div", cd, [
            (D(!0), N(ee, null, ae(z.commonImages, (u) => (D(), N("div", {
              key: u.id,
              class: "zero-code-img-item",
              onClick: (y) => s(u)
            }, [
              g("img", {
                src: u.url,
                alt: u.alt
              }, null, 8, pd),
              g("div", fd, [
                g("p", md, H(u.name), 1),
                g("p", gd, H(P(u.size)), 1)
              ]),
              g("button", {
                class: "zero-code-img-delete-btn",
                onClick: He((y) => p(u.id, "common"), ["stop"])
              }, " 削除 ", 8, hd)
            ], 8, ud))), 128))
          ]),
          z.commonImages.length === 0 ? (D(), N("div", vd, C[2] || (C[2] = [
            g("p", null, "共通画像が登録されていません。", -1)
          ]))) : Y("", !0)
        ])) : Y("", !0),
        n.value === "individual" ? (D(), N("div", yd, [
          g("div", bd, [
            g("h4", null, "個別画像 (" + H(z.individualImages.length) + "件)", 1),
            g("button", {
              class: "zero-code-img-upload-btn individual",
              onClick: C[1] || (C[1] = (u) => b("individual"))
            }, " 個別画像をアップロード ")
          ]),
          g("div", $d, [
            (D(!0), N(ee, null, ae(z.individualImages, (u) => (D(), N("div", {
              key: u.id,
              class: "zero-code-img-item",
              onClick: (y) => s(u)
            }, [
              g("img", {
                src: u.url,
                alt: u.alt
              }, null, 8, zd),
              g("div", Ad, [
                g("p", Pd, H(u.name), 1),
                g("p", Ed, H(P(u.size)), 1)
              ]),
              g("button", {
                class: "zero-code-img-delete-btn",
                onClick: He((y) => p(u.id, "individual"), ["stop"])
              }, " 削除 ", 8, _d)
            ], 8, wd))), 128))
          ]),
          z.individualImages.length === 0 ? (D(), N("div", Cd, C[3] || (C[3] = [
            g("p", null, "個別画像が登録されていません。", -1)
          ]))) : Y("", !0)
        ])) : Y("", !0)
      ]),
      g("div", Sd, [
        C[4] || (C[4] = g("strong", null, "🔍 デバッグ情報:", -1)),
        jt(" 共通画像: " + H(z.commonImages.length) + "件, 個別画像: " + H(z.individualImages.length) + "件, 合計: " + H(E.value) + "件 ", 1),
        C[5] || (C[5] = g("br", null, null, -1)),
        g("button", { onClick: $ }, "画像データを再読み込み")
      ]),
      m.value ? (D(), Be(xl, {
        key: 0,
        category: l.value,
        onClose: d,
        onUpload: a
      }, null, 8, ["category"])) : Y("", !0),
      v.value && h.value ? (D(), Be(rd, {
        key: 1,
        image: h.value,
        onClose: f,
        onDelete: i,
        onReplace: c
      }, null, 8, ["image"])) : Y("", !0)
    ]));
  }
});
function Td() {
  const e = ne("editor"), o = (h) => {
    e.value !== h && (I.info(`🔄 タブ切り替え: ${e.value} → ${h}`), e.value = h);
  };
  return {
    // 状態
    activeTab: e,
    availableTabs: ["editor", "parts", "preview", "images"],
    // メソッド
    switchToTab: o,
    isActiveTab: (h) => e.value === h,
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
function Dd(e) {
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
    openEditor: (l, h) => {
      o.selectedComponent = l, o.selectedComponentIndex = h, o.showEditor = !0;
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
    openNestedPartSelector: (l, h) => {
      o.nestedInsertPath = l, o.nestedInsertPosition = h, o.showNestedPartSelector = !0;
    },
    closeNestedPartSelector: () => {
      o.showNestedPartSelector = !1;
    }
  }, m = {
    startTiptapEdit: (l, h, E = [], A = 0, w, P) => {
      o.editingText = {
        componentId: l,
        paramName: h,
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
  return We(
    () => e.page,
    (l) => {
      Array.isArray(l) && (o.editablePageData = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), We(
    () => e.parts,
    (l) => {
      Array.isArray(l) && (o.localParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), We(
    () => e.commonParts,
    (l) => {
      Array.isArray(l) && (o.localCommonParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), We(
    () => e.individualParts,
    (l) => {
      Array.isArray(l) && (o.localIndividualParts = [...l]);
    },
    { deep: !0, immediate: !0 }
  ), v(), {
    // 状態
    ...fr(o),
    // 計算プロパティ
    ...t,
    // アクション
    ...r,
    ...n,
    ...m,
    // 初期化
    initializeData: v
  };
}
function Nd() {
  const e = (l) => l.includes("url") || l.includes("src") || l.includes("link") ? "url" : l.includes("email") ? "email" : l.includes("number") || l.includes("count") ? "number" : l.includes("date") ? "date" : l.includes("time") ? "time" : l.includes("password") ? "password" : l.includes("tel") || l.includes("phone") ? "tel" : "text";
  return {
    // 基本ユーティリティ
    getInputType: e,
    formatFileSize: (l) => {
      if (l === 0) return "0 Bytes";
      const h = 1024, E = ["Bytes", "KB", "MB", "GB"], A = Math.floor(Math.log(l) / Math.log(h));
      return parseFloat((l / Math.pow(h, A)).toFixed(2)) + " " + E[A];
    },
    // 各種操作
    component: {
      // 階層パスでコンポーネントを検索
      findComponentByPath: (l, h) => {
        let E = l, A = null;
        for (let w = 0; w < h.length; w++) {
          const P = h[w];
          if (P >= 0 && P < E.length)
            A = E[P], w < h.length - 1 && (E = A.nested_parts || []);
          else
            return null;
        }
        return A;
      },
      // 新規コンポーネント作成
      createNewComponent: (l, h) => ({
        id: `comp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        type: l,
        module_name: h,
        nested_parts: []
      }),
      // コンポーネント削除
      deleteComponent: (l, h) => l.filter((E, A) => A !== h),
      // コンポーネント複製
      duplicateComponent: (l) => {
        const h = `comp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        return {
          ...JSON.parse(JSON.stringify(l)),
          id: h
        };
      },
      // 配列アイテム追加
      addArrayItem: (l, h) => {
        l[h] || (l[h] = []);
        const E = l[h], A = { id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 11)}` };
        E.push(A);
      },
      // 配列アイテム削除
      removeArrayItem: (l, h, E) => {
        const A = l[h];
        Array.isArray(A) && E >= 0 && E < A.length && A.splice(E, 1);
      }
    },
    template: {
      // テンプレート取得
      getTemplate: (l, h, E) => {
        const A = E.find((P) => P.type === l);
        if (!A) return "";
        const w = A.module.find((P) => P.title === h);
        return (w == null ? void 0 : w.body) || "";
      },
      // テンプレート内のフィールド抽出
      extractFields: (l) => {
        const h = [];
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
            h.includes(P) || h.push(P);
          }
        }), h;
      },
      // テンプレート内のスロット抽出
      extractSlots: (l) => {
        const h = [], E = /@slot\(\$([^)]+)\)@/g;
        let A;
        for (; (A = E.exec(l)) !== null; ) {
          const w = A[1];
          h.includes(w) || h.push(w);
        }
        return h;
      }
    },
    array: {
      // 配列アイテム追加
      addArrayItem: (l, h) => [...l, h],
      // 配列アイテム削除
      removeArrayItem: (l, h) => l.filter((E, A) => A !== h),
      // 配列アイテム更新
      updateArrayItem: (l, h, E) => l.map((A, w) => w === h ? E : A),
      // 配列アイテム移動
      moveArrayItem: (l, h, E) => {
        const A = [...l], [w] = A.splice(h, 1);
        return A.splice(E, 0, w), A;
      }
    },
    field: {
      // フィールド値取得
      getFieldValue: (l, h) => l[h] || "",
      // フィールド値設定
      setFieldValue: (l, h, E) => ({
        ...l,
        [h]: E
      }),
      // フィールド値検証
      validateField: (l, h) => {
        switch (e(l)) {
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
          const h = l.split("."), E = [];
          for (const A of h) {
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
      kebabToCamel: (l) => l.replace(/-([a-z])/g, (h, E) => E.toUpperCase())
    }
  };
}
function kd() {
  let e = null;
  const o = (p) => {
    if (!p || typeof p != "string" || p.trim() === "")
      return "<p></p>";
    const $ = ["p", "strong", "em", "u", "s", "a", "span", "br"], z = ["href", "target", "style"], C = document.createElement("div");
    C.innerHTML = p;
    const u = (_) => {
      const S = _.tagName.toLowerCase();
      if (!$.includes(S)) {
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
        u(T);
      });
    };
    Array.from(C.children).forEach((_) => {
      u(_);
    });
    let y = C.innerHTML;
    return y = y.replace(/<p>\s*<\/p>/g, "<p><br></p>").replace(/<p>\s*<br>\s*<\/p>/g, "<p><br></p>").replace(/(<\w+>)\s*(<\/\w+>)/g, "$1<br>$2"), y.includes("<") || (y = `<p>${y}</p>`), (!y || y.trim() === "") && (y = "<p><br></p>"), y;
  }, t = () => {
    const p = window.getSelection();
    if (!p || p.rangeCount === 0) return { selection: null, range: null };
    const $ = p.getRangeAt(0);
    return e != null && e.contains($.commonAncestorContainer) ? { selection: p, range: $ } : { selection: null, range: null };
  }, r = (p, $) => {
    const z = document.createElement(p);
    return $ && Object.entries($).forEach(([C, u]) => {
      z.setAttribute(C, u);
    }), z;
  }, n = (p, $) => {
    try {
      p.surroundContents($);
    } catch {
      const z = p.extractContents();
      $.appendChild(z), p.insertNode($);
    }
  }, m = (p, $, z) => {
    const C = r($, z);
    n(p, C);
  }, v = (p, $) => {
    const z = document.createElement("span");
    Object.assign(z.style, $), n(p, z);
  }, l = (p, $) => {
    if (!p.collapsed) return;
    const z = document.createTextNode("テキスト");
    p.insertNode(z), p.selectNodeContents(z), $.removeAllRanges(), $.addRange(p);
  }, h = (p) => {
    const { selection: $, range: z } = t();
    if (!$ || !z) return;
    let C = z.commonAncestorContainer;
    C.nodeType === Node.TEXT_NODE && (C = C.parentElement || C);
    const u = C.closest("p");
    if (u) {
      const y = {
        left: "left",
        center: "center",
        right: "right"
      };
      u.style.textAlign = y[p];
    }
  }, E = (p, $) => {
    if (!e)
      return;
    e.focus();
    const { selection: z, range: C } = t();
    if (!z || !C)
      return;
    l(C, z);
    const u = {
      bold: () => m(C, "strong"),
      italic: () => m(C, "em"),
      underline: () => m(C, "u"),
      strikeThrough: () => m(C, "s"),
      justifyLeft: () => h("left"),
      justifyCenter: () => h("center"),
      justifyRight: () => h("right"),
      createLink: () => $ && m(C, "a", { href: $, target: "_blank" }),
      backColor: () => $ && v(C, { backgroundColor: $ })
    };
    try {
      const y = u[p];
      y && y();
    } catch {
      try {
        document.execCommand(p, !1, $);
      } catch {
      }
    }
  }, A = (p, $) => {
    if (!e) return;
    e.focus();
    const z = window.getSelection();
    if (z != null && z.rangeCount && e.contains(z.getRangeAt(0).commonAncestorContainer)) {
      const C = z.getRangeAt(0);
      z.removeAllRanges(), z.addRange(C);
    }
    E(p, $);
  }, w = {
    toggleBold: () => A("bold"),
    toggleItalic: () => A("italic"),
    toggleUnderline: () => A("underline"),
    toggleStrike: () => A("strikeThrough"),
    alignLeft: () => A("justifyLeft"),
    alignCenter: () => A("justifyCenter"),
    alignRight: () => A("justifyRight"),
    setLink: () => {
      const p = window.prompt("URLを入力してください:");
      p && A("createLink", p);
    },
    isActive: (p) => {
      var u;
      if (!e) return !1;
      const $ = window.getSelection();
      if (!($ != null && $.rangeCount)) return !1;
      const z = $.getRangeAt(0);
      if (!e.contains(z.commonAncestorContainer)) return !1;
      const C = {
        bold: () => P("strong"),
        italic: () => P("em"),
        underline: () => P("u"),
        strike: () => P("s")
      };
      return ((u = C[p]) == null ? void 0 : u.call(C)) ?? !1;
    }
  }, P = (p) => {
    const { selection: $, range: z } = t();
    if (!$ || !z) return !1;
    let C = z.commonAncestorContainer;
    for (C.nodeType === window.Node.TEXT_NODE && (C = C.parentElement || C); C && C !== e; ) {
      if (C.nodeType === window.Node.ELEMENT_NODE && C.tagName.toLowerCase() === p.toLowerCase())
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
  `, d = (p) => {
    Object.entries({
      "data-gramm": "false",
      spellcheck: "false",
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off"
    }).forEach(([z, C]) => {
      p.setAttribute(z, C);
    });
  }, s = (p, $) => {
    let z = null, C = null;
    p.addEventListener("focus", () => {
      p.style.borderColor = "#3b82f6", p.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1), 0 1px 3px rgba(0,0,0,0.1)";
    }), p.addEventListener("blur", () => {
      p.style.borderColor = "#3b82f6", p.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)";
    }), p.addEventListener("keydown", (y) => {
      var _;
      if (y.key === "Enter" && !y.shiftKey) {
        y.preventDefault();
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
        p.dispatchEvent(new Event("input", { bubbles: !0 }));
      }
    }), p.addEventListener("input", () => {
      z && window.clearTimeout(z), z = window.setTimeout(() => {
        const y = o(p.innerHTML);
        if (y !== p.innerHTML) {
          const _ = window.getSelection();
          let S = null;
          if (_ && _.rangeCount > 0 && (S = _.getRangeAt(0).cloneRange()), p.innerHTML = y, S && _)
            try {
              _.removeAllRanges(), _.addRange(S);
            } catch {
              const M = document.createRange();
              M.selectNodeContents(p), M.collapse(!1), _.removeAllRanges(), _.addRange(M);
            }
        }
        $ == null || $(p.innerHTML);
      }, 300);
    }), p.addEventListener("selectionchange", () => {
      try {
        p.dispatchEvent(new CustomEvent("selectionchange"));
      } catch {
      }
    });
    const u = new globalThis.MutationObserver(() => {
      C && window.clearTimeout(C), C = window.setTimeout(() => {
        $ == null || $(p.innerHTML);
      }, 100);
    });
    return u.observe(p, { childList: !0, subtree: !0, characterData: !0 }), { saveTimeout: z, updateTimeout: C, observer: u };
  }, f = (p, $, z) => {
    const C = $.querySelector(".simple-editor-content");
    C && C.remove();
    const u = document.createElement("div");
    u.className = "simple-editor-content", u.contentEditable = "true";
    const y = o(p);
    u.innerHTML = y, u.style.cssText = b(), d(u);
    const { saveTimeout: _, updateTimeout: S, observer: T } = s(u, z);
    return $.appendChild(u), e = u, {
      element: u,
      getHTML: () => u.innerHTML,
      setContent: (M) => u.innerHTML = M,
      destroy: () => {
        window.clearTimeout(_), window.clearTimeout(S), T.disconnect(), u.remove(), e = null;
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
  }, a = (p, $, z) => {
    try {
      return $.innerHTML = "", f(p, $, z);
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
  return Jr(() => i()), {
    initEditor: a,
    destroyEditor: i,
    getEditor: () => e,
    isEditorReady: c
  };
}
class Md {
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
    r.forEach((m) => {
      try {
        const v = m(t);
        v instanceof Promise && n.push(v);
      } catch (v) {
        I.error(`EventBus: ${o} イベントリスナーでエラー`, v);
      }
    }), n.length > 0 && Promise.allSettled(n).then((m) => {
      m.forEach((v, l) => {
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
const Ee = new Md(), et = {
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
function Od(e, o) {
  const t = Dd(e), r = Nd(), n = Fr(), m = kd(), v = (d, s) => {
    for (const f of d) {
      if (f.id === s)
        return f;
      if (f.nested_parts && Array.isArray(f.nested_parts)) {
        const a = v(f.nested_parts, s);
        if (a) return a;
      }
      for (const [a, i] of Object.entries(f))
        if (Array.isArray(i) && a !== "nested_parts") {
          for (const c of i)
            if (c && typeof c == "object") {
              for (const [p, $] of Object.entries(c))
                if (Array.isArray($)) {
                  const z = v($, s);
                  if (z) return z;
                }
            }
        }
    }
    return null;
  }, l = (d, s, f) => {
    for (let a = 0; a < d.length; a++) {
      const i = d[a];
      if (i.id === s)
        return d[a] = f, !0;
      if (i.nested_parts && Array.isArray(i.nested_parts) && l(i.nested_parts, s, f))
        return !0;
      for (const [c, p] of Object.entries(i))
        if (Array.isArray(p) && c !== "nested_parts") {
          for (const $ of p)
            if ($ && typeof $ == "object") {
              for (const [z, C] of Object.entries($))
                if (Array.isArray(C) && l(C, s, f))
                  return !0;
            }
        }
    }
    return !1;
  }, h = (d, s) => {
    for (let f = 0; f < d.length; f++) {
      if (d[f].id === s)
        return d.splice(f, 1), !0;
      if (d[f].nested_parts && Array.isArray(d[f].nested_parts) && h(d[f].nested_parts, s))
        return !0;
      for (const [a, i] of Object.entries(d[f]))
        if (Array.isArray(i) && a !== "nested_parts") {
          for (const c of i)
            if (c && typeof c == "object") {
              for (const [p, $] of Object.entries(c))
                if (Array.isArray($) && h($, s))
                  return !0;
            }
        }
    }
    return !1;
  }, E = {
    // パーツ操作
    addPart: (d, s) => {
      const f = [...t.editablePageData.value];
      f.splice(s, 0, d), t.editablePageData.value = f, o("update:page", f);
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
        const f = r.component.duplicateComponent(s), a = [...t.editablePageData.value];
        a.splice(d + 1, 0, f), t.editablePageData.value = a, o("update:page", a);
      }
    },
    // 並べ替え操作
    reorderParts: (d) => {
      t.editablePageData.value = d, o("update:page", d);
    },
    movePart: (d, s) => {
      const f = [...t.editablePageData.value], [a] = f.splice(d, 1);
      f.splice(s, 0, a), t.editablePageData.value = f, o("update:page", f);
    },
    // ネストパーツの並べ替え操作（リアクティブ対応）
    reorderNestedParts: (d, s) => {
      const f = r.string.parseHierarchyPath(d), a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = r.component.findComponentByPath(a, f);
      i && (i.nested_parts = [...s], t.editablePageData.value = a, o("update:page", a));
    },
    moveNestedPart: (d, s, f) => {
      const a = r.string.parseHierarchyPath(d), i = JSON.parse(JSON.stringify(t.editablePageData.value)), c = r.component.findComponentByPath(i, a);
      if (c != null && c.nested_parts && c.nested_parts.length > Math.max(s, f)) {
        const p = [...c.nested_parts];
        if (s >= 0 && s < p.length && f >= 0 && f < p.length && s !== f) {
          const [$] = p.splice(s, 1);
          p.splice(f, 0, $), c.nested_parts = p, t.editablePageData.value = i, o("update:page", i);
        }
      }
    },
    // 異なる階層間でのネストパーツ移動
    moveNestedPartBetweenLevels: (d, s, f, a) => {
      const i = r.string.parseHierarchyPath(d), c = r.string.parseHierarchyPath(f), p = [...t.editablePageData.value], $ = r.component.findComponentByPath(p, i);
      if (!($ != null && $.nested_parts)) return;
      const [z] = $.nested_parts.splice(s, 1), C = r.component.findComponentByPath(p, c);
      C && (C.nested_parts || (C.nested_parts = []), C.nested_parts.splice(a, 0, z), t.editablePageData.value = p, o("update:page", p));
    },
    // コンポーネントIDベースのネストパーツ並べ替え
    moveNestedPartById: (d, s, f) => {
      const a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = v(a, d);
      if (i != null && i.nested_parts && i.nested_parts.length > Math.max(s, f)) {
        const c = [...i.nested_parts];
        if (s >= 0 && s < c.length && f >= 0 && f < c.length && s !== f) {
          const [p] = c.splice(s, 1);
          c.splice(f, 0, p), i.nested_parts = c, t.editablePageData.value = a, o("update:page", a);
        }
      }
    },
    // コンポーネントIDベースの異なる階層間移動
    moveNestedPartBetweenLevelsById: (d, s, f, a) => {
      const i = JSON.parse(JSON.stringify(t.editablePageData.value)), c = v(i, d);
      if (!(c != null && c.nested_parts))
        return;
      const [p] = c.nested_parts.splice(s, 1), $ = v(i, f);
      $ && ($.nested_parts || ($.nested_parts = []), $.nested_parts.splice(a, 0, p), t.editablePageData.value = i, o("update:page", i));
    },
    // z-for内のネストパーツ並べ替え
    moveZForNestedPart: (d, s, f) => {
      const a = d.match(/^(\w+)\.(\w+)\[(\d+)\]\.(\w+)$/);
      if (!a)
        return;
      const [, i, c, p, $] = a, z = parseInt(p), C = JSON.parse(JSON.stringify(t.editablePageData.value)), u = v(C, i);
      if (!u)
        return;
      const y = u[c];
      if (!Array.isArray(y) || z >= y.length)
        return;
      const _ = y[z];
      if (!_ || !_[$] || !Array.isArray(_[$]))
        return;
      const S = _[$];
      if (s < 0 || s >= S.length || f < 0 || f >= S.length || s === f)
        return;
      const [T] = S.splice(s, 1);
      S.splice(f, 0, T), t.editablePageData.value = C, o("update:page", C);
    },
    // 編集操作
    openEditor: (d) => {
      const s = t.editablePageData.value[d];
      s && t.openEditor(s, d);
    },
    saveComponent: (d) => {
      const s = t.selectedComponentIndex.value;
      if (d._isZForItem) {
        const f = d._parentComponentId, a = d._arrayName, i = d._arrayIndex, c = JSON.parse(JSON.stringify(t.editablePageData.value)), p = v(c, f);
        if (p && Array.isArray(p[a])) {
          const $ = p[a];
          if (i >= 0 && i < $.length) {
            const {
              _isZForItem: z,
              _parentComponentId: C,
              _arrayName: u,
              _arrayIndex: y,
              _zForTemplate: _,
              ...S
            } = d;
            $[i] = { ...$[i], ...S }, t.editablePageData.value = c, o("update:page", c);
          }
        }
        t.closeEditor();
        return;
      }
      if (typeof s == "number" && s >= 0) {
        const f = [...t.editablePageData.value];
        f[s] = d, t.editablePageData.value = f, o("update:page", f);
      } else if (typeof s == "string") {
        const f = JSON.parse(JSON.stringify(t.editablePageData.value));
        l(f, s, d) && (t.editablePageData.value = f, o("update:page", f));
      }
      t.closeEditor();
    },
    // ネストコンポーネント操作
    addNestedPart: (d, s, f) => {
      const a = JSON.parse(JSON.stringify(t.editablePageData.value)), i = /^(.+)\.(.+)\[(\d+)\]\.(.+)$/, c = d.match(i);
      let p = !1;
      if (c) {
        const [, $, z, C, u] = c, y = v(a, $);
        if (y && y[z] && Array.isArray(y[z])) {
          const _ = y[z][parseInt(C)];
          _ && (_[u] || (_[u] = []), _[u].splice(s, 0, f), p = !0);
        }
      } else {
        const $ = v(a, d);
        $ && ($.nested_parts || ($.nested_parts = []), $.nested_parts.splice(s, 0, f), p = !0);
      }
      p && (t.editablePageData.value = a, o("update:page", a));
    },
    deleteNestedPart: (d) => {
      if (window.confirm("このネストパーツを削除しますか？")) {
        const s = JSON.parse(JSON.stringify(t.editablePageData.value)), f = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/, a = d.match(f);
        let i = !1;
        if (a) {
          const [, c, p, $, z, C] = a, u = v(s, c);
          if (u && u[p] && Array.isArray(u[p])) {
            const y = u[p][parseInt($)];
            y && y[z] && Array.isArray(y[z]) && (y[z].splice(parseInt(C), 1), i = !0);
          }
        } else
          i = h(s, d);
        i && (t.editablePageData.value = s, o("update:page", s));
      }
    },
    // Tiptap編集
    startTiptapEdit: (d, s, f = [], a = 0) => {
      t.startTiptapEdit(d, s, f, a);
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
    removeArrayItem: (d, s, f) => {
      r.component.removeArrayItem(d, s, f), o("update:page", t.editablePageData.value);
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
      (s, f) => r.template.getTemplate(s, f, t.localParts.value)
    ),
    // パーツ管理用プレビュー
    renderPartPreview: (d) => {
      if (!d) return "";
      try {
        let s = d;
        return s = s.replace(/\{\$([^:]+):([^}]*)\}/g, (f, a, i) => ({
          title: "サンプルタイトル",
          text: "サンプルテキスト",
          content: "サンプルコンテンツ",
          heading: "見出し",
          description: "説明文",
          label: "ラベル",
          source: "情報源",
          tooltip: "ツールチップ"
        })[a] || i || `[${a}]`), s = s.replace(/\(\$([^:]+):([^)]+)\)/g, (f, a, i) => i.split("|").filter((p) => p.trim())[0] || ""), s = s.replace(/\(\$([^:?]+)\?:([^)]*)\)/g, (f, a, i) => i || ""), s = s.replace(/z-slot="[^"]*"/g, ""), s = s.replace(/z-for="[^"]*"/g, ""), s = s.replace(/z-for-wrapper="[^"]*"/g, ""), s;
      } catch {
        return d;
      }
    }
  }, w = () => {
    Ee.on("addArrayItem", ({ componentId: d, arrayKey: s }) => {
      try {
        if (I.debug(`EventBus: addArrayItem - componentId=${d}, arrayKey=${s}`), !d || !s)
          throw new Error("componentId または arrayKey が指定されていません");
        const f = v(t.editablePageData.value, d);
        if (!f)
          throw new Error(`Component not found: ${d}`);
        I.success(`Component found: ${f.id}, adding array item to ${s}`);
        const a = t.localParts.value && t.localParts.value.length > 0 ? t.localParts.value : [];
        a.length > 0 ? no(a).addArrayItem(f, s) : E.addArrayItem(f, s), o("update:page", t.editablePageData.value);
      } catch (f) {
        I.error(`配列アイテム追加エラー: ${f}`, { componentId: d, arrayKey: s });
      }
    }), Ee.on("addZForArrayItem", ({ componentId: d, arrayName: s, insertIndex: f }) => {
      try {
        I.debug(
          `EventBus: addZForArrayItem - componentId=${d}, arrayName=${s}, insertIndex=${f}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        Array.isArray(a[s]) || (a[s] = []);
        const i = t.localParts.value && t.localParts.value.length > 0 ? t.localParts.value : [], c = no(i), p = c.getTemplate(a.type, a.module_name), $ = {
          id: c.generateUniqueId()
        };
        if (p) {
          const C = p.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/g);
          C && C.forEach((y) => {
            const [, _, S, T] = y.match(/\(\$([^:?]+)(:|\?:)([^)]*)\)/) || [];
            if (_ && !$[_])
              if (S === ":") {
                const M = T.split("|").filter(Boolean);
                $[_] = M[0] || "";
              } else S === "?:" && ($[_] = []);
          });
          const u = p.match(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g);
          u && u.forEach((y) => {
            const _ = y.substring(1);
            !$[_] && !_.includes("(") && ($[_] = `デフォルト${_}`);
          });
        }
        a[s].splice(f, 0, $), I.success(`z-for配列アイテム追加完了: ${s}[${f}]`), o("update:page", t.editablePageData.value);
      } catch (a) {
        I.error(`z-for配列アイテム追加エラー: ${a}`, {
          componentId: d,
          arrayName: s,
          insertIndex: f
        });
      }
    }), Ee.on("removeZForArrayItem", ({ componentId: d, arrayName: s, index: f }) => {
      try {
        I.debug(
          `EventBus: removeZForArrayItem - componentId=${d}, arrayName=${s}, index=${f}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        const i = a[s];
        if (!Array.isArray(i) || f < 0 || f >= i.length)
          throw new Error(`Invalid array or index: ${s}[${f}]`);
        i.splice(f, 1), I.success(`z-for配列アイテム削除完了: ${s}[${f}]`), o("update:page", t.editablePageData.value);
      } catch (a) {
        I.error(`z-for配列アイテム削除エラー: ${a}`, { componentId: d, arrayName: s, index: f });
      }
    }), Ee.on("reorderZForArrayItem", ({ componentId: d, arrayName: s, fromIndex: f, toIndex: a }) => {
      try {
        I.debug(
          `EventBus: reorderZForArrayItem - componentId=${d}, arrayName=${s}, fromIndex=${f}, toIndex=${a}`
        );
        const i = v(t.editablePageData.value, d);
        if (!i)
          throw new Error(`Component not found: ${d}`);
        const c = i[s];
        if (!Array.isArray(c) || f < 0 || f >= c.length || a < 0 || a >= c.length)
          throw new Error(`Invalid array or indices: ${s}[${f}] -> [${a}]`);
        const p = JSON.parse(JSON.stringify(t.editablePageData.value)), $ = v(p, d);
        if ($) {
          const z = $[s], C = z.splice(f, 1)[0];
          z.splice(a, 0, C), t.editablePageData.value = p, o("update:page", p), I.success(`z-for配列アイテム並び替え完了: ${s}[${f}] -> [${a}]`);
        } else
          throw new Error(`Component not found in new data: ${d}`);
      } catch (i) {
        I.error(`z-for配列アイテム並び替えエラー: ${i}`, {
          componentId: d,
          arrayName: s,
          fromIndex: f,
          toIndex: a
        });
      }
    }), Ee.on("editZForArrayItem", ({ componentId: d, arrayName: s, index: f }) => {
      try {
        I.debug(
          `EventBus: editZForArrayItem - componentId=${d}, arrayName=${s}, index=${f}`
        );
        const a = v(t.editablePageData.value, d);
        if (!a)
          throw new Error(`Component not found: ${d}`);
        const i = a[s];
        if (!Array.isArray(i) || f < 0 || f >= i.length)
          throw new Error(`Invalid array or index: ${s}[${f}]`);
        const c = i[f], p = {
          ...c,
          id: `${d}_${s}_${f}`,
          // 配列アイテム自体のtype/module_nameを使用（親のものではなく）
          type: c.type || a.type,
          // アイテム自体にtypeがない場合は親を使用
          module_name: c.module_name || a.module_name,
          // アイテム自体にmodule_nameがない場合は親を使用
          _isZForItem: !0,
          _parentComponentId: d,
          _arrayName: s,
          _arrayIndex: f,
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
          index: f,
          itemKeys: Object.keys(c),
          tempComponentId: p.id
        }), t.openEditor(p, `${d}_${s}_${f}`), I.success(`z-for配列アイテム編集開始: ${s}[${f}]`);
      } catch (a) {
        I.error(`z-for配列アイテム編集エラー: ${a}`, { componentId: d, arrayName: s, index: f });
      }
    }), Ee.on("deleteNestedPart", ({ pathString: d }) => {
      I.debug(`EventBus: deleteNestedPart - path=${d}`), E.deleteNestedPart(d);
    }), Ee.on("openNestedEditor", ({ pathString: d }) => {
      if (I.debug(`EventBus: openNestedEditor - path=${d}`), !d || typeof d != "string") {
        I.error("Invalid pathString:", d);
        return;
      }
      const s = /^(.+)\.(.+)\[(\d+)\]\.(.+)\[(\d+)\]$/, f = d.match(s);
      let a = null;
      if (f) {
        const [, i, c, p, $, z] = f;
        I.debug("z-for内パス解析:", { parentId: i, arrayName: c, arrayIndex: p, slotName: $, partIndex: z });
        const C = v(t.editablePageData.value, i);
        if (C && C[c] && Array.isArray(C[c])) {
          const u = C[c][parseInt(p)];
          u && u[$] && Array.isArray(u[$]) && (a = u[$][parseInt(z)], I.debug("z-for内ネストパーツを発見:", a));
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
    }), window.startTiptapEdit = d || E.startSimpleTiptapEdit, window.stopTiptapEdit = E.stopTiptapEdit, window.openPartSelector = (i) => t.openPartSelector(i), window.openNestedPartSelector = et.openNestedPartSelector, window.openNestedEditor = et.openNestedEditor, window.deleteNestedPart = et.deleteNestedPart, window.addArrayItem = et.addArrayItem, window.addZForArrayItem = et.addZForArrayItem, window.removeZForArrayItem = et.removeZForArrayItem, window.reorderZForArrayItem = et.reorderZForArrayItem, window.editZForArrayItem = et.editZForArrayItem;
    let f = null, a = null;
    window.handleZForDragStart = (i, c, p, $) => {
      const z = i.target;
      if (z.tagName === "BUTTON" || z.tagName === "A" || z.closest("button, a")) {
        i.preventDefault();
        return;
      }
      i.stopPropagation(), f = { componentId: c, arrayName: p, index: $ };
      const C = z.closest(".zero-code-z-for-item-wrapper");
      C ? (C.style.opacity = "0.5", C.style.transform = "scale(0.95)", C.classList.add("dragging")) : z.style.opacity = "0.5", i.dataTransfer.effectAllowed = "move", i.dataTransfer.setData("text/html", z.outerHTML), I.debug("z-for drag start", { componentId: c, arrayName: p, index: $ });
    }, window.handleZForDragEnd = (i) => {
      const c = i.target, p = c.closest(".zero-code-z-for-item-wrapper");
      p ? (p.style.opacity = "1", p.style.transform = "scale(1)", p.classList.remove("dragging")) : c.style.opacity = "1", document.querySelectorAll(".z-for-item-wrapper.drag-over").forEach(($) => {
        $.classList.remove("drag-over");
      }), setTimeout(() => {
        f = null, I.debug("z-for drag end - draggedItem reset");
      }, 50), I.debug("z-for drag end");
    }, window.handleZForArrayItemDragOver = (i) => {
      i.preventDefault(), i.dataTransfer.dropEffect = "move";
      const p = i.currentTarget.closest(".zero-code-z-for-item-wrapper");
      p && !p.classList.contains("dragging") && (document.querySelectorAll(".z-for-item-wrapper.drag-over").forEach(($) => {
        $.classList.remove("drag-over");
      }), p.classList.add("drag-over"));
    }, window.handleZForArrayItemDrop = (i) => {
      i.preventDefault(), i.stopPropagation();
      const c = i.currentTarget, p = c.closest(".zero-code-z-for-item-wrapper");
      if (p && p.classList.remove("drag-over"), !f) {
        I.warn("No dragged item found");
        return;
      }
      const $ = (p == null ? void 0 : p.getAttribute("data-component-id")) || c.getAttribute("data-component-id"), z = (p == null ? void 0 : p.getAttribute("data-array-name")) || c.getAttribute("data-array-name"), C = (p == null ? void 0 : p.getAttribute("data-item-index")) || c.getAttribute("data-item-index"), u = parseInt(C || "0");
      f.componentId === $ && f.arrayName === z && f.index !== u && (et.reorderZForArrayItem(
        f.componentId,
        f.arrayName,
        f.index,
        u
      ), I.success("z-for array item reordered", {
        from: f.index,
        to: u
      })), f = null;
    }, window.handleNestedPartDragStart = (i) => {
      const c = i.target;
      if (c.tagName === "BUTTON" || c.tagName === "A" || c.closest("button, a")) {
        i.preventDefault();
        return;
      }
      const p = c.closest(".z-for-nested-part");
      if (p) {
        const $ = p.getAttribute("data-nested-path"), z = p.getAttribute("data-slot-name"), C = p.getAttribute("data-part-index");
        $ && z && C !== null && (a = {
          path: $,
          slotName: z,
          index: parseInt(C)
        }, p.classList.add("dragging"), p.style.opacity = "0.5", i.dataTransfer.effectAllowed = "move", i.dataTransfer.setData("text/html", p.outerHTML), I.debug("z-for nested part drag start", a));
      }
    }, window.handleNestedPartDragEnd = (i) => {
      const p = i.target.closest(".z-for-nested-part");
      p && (p.classList.remove("dragging"), p.style.opacity = "1"), document.querySelectorAll(".z-for-nested-part.drag-over").forEach(($) => {
        $.classList.remove("drag-over");
      }), a = null, I.debug("z-for nested part drag end");
    }, window.handleNestedPartDragOver = (i) => {
      i.preventDefault(), i.dataTransfer.dropEffect = "move";
      const p = i.currentTarget.closest(".z-for-nested-part");
      p && !p.classList.contains("dragging") && (document.querySelectorAll(".z-for-nested-part.drag-over").forEach(($) => {
        $.classList.remove("drag-over");
      }), p.classList.add("drag-over"));
    }, window.handleNestedPartDrop = (i) => {
      i.preventDefault();
      const c = i.currentTarget, p = c.closest(".z-for-nested-part") || c.closest(".nested-component");
      if (p && p.classList.remove("drag-over"), !a) {
        I.warn("No dragged nested part found");
        return;
      }
      const $ = c.getAttribute("data-slot-name"), z = c.getAttribute("data-part-index");
      if ($ && z !== null) {
        const C = parseInt(z);
        if ($ === a.slotName) {
          const u = a.path.match(/^(.+\.\w+\[\d+\]\.\w+)\[\d+\]$/);
          if (u) {
            const y = u[1];
            I.debug("z-for nested part reorder", {
              parentPath: y,
              fromIndex: a.index,
              toIndex: C
            }), E.moveZForNestedPart(y, a.index, C);
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
    simpleEditor: m,
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
const Fd = { class: "zero-code-tab-navigation" }, Rd = ["onClick"], Ld = /* @__PURE__ */ _e({
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
    return (r, n) => (D(), N("div", Fd, [
      (D(), N(ee, null, ae(o, (m) => g("button", {
        key: m,
        class: Fe(["zero-code-tab-button", { active: r.activeTab === m }]),
        onClick: (v) => r.$emit("update:active-tab", m)
      }, H(t(m)), 11, Rd)), 64))
    ]));
  }
});
function xd() {
  const e = ne([]), o = de(() => e.value.length > 0), t = (l, h = ue.UNKNOWN, E) => {
    const A = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: h,
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
    const h = e.value.findIndex((E) => E.id === l);
    h !== -1 && e.value.splice(h, 1);
  }, m = (l) => e.value.filter((h) => h.type === l), v = (l, h = ue.UNKNOWN) => {
    t(l, h);
  };
  return {
    errors: e.value,
    hasErrors: o.value,
    handleError: t,
    clearErrors: r,
    clearError: n,
    getErrorsByType: m,
    showErrorNotification: v
  };
}
const Bd = { class: "zero-code-error-boundary" }, Hd = {
  key: 0,
  class: "zero-code-error-notifications"
}, Vd = { class: "zero-code-error-content" }, Zd = { class: "zero-code-error-message" }, jd = { class: "zero-code-error-icon" }, Ud = { class: "zero-code-error-text" }, Wd = ["onClick"], Xd = {
  key: 0,
  class: "zero-code-error-details"
}, Yd = { class: "zero-code-error-details-pre" }, Kd = { class: "zero-code-error-boundary-content" }, Jd = /* @__PURE__ */ _e({
  __name: "ErrorBoundary",
  props: {
    showDetails: { type: Boolean, default: !1 }
  },
  setup(e) {
    const { errors: o, hasErrors: t, clearError: r } = xd(), n = (v) => {
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
    }, m = (v) => {
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
    return (v, l) => (D(), N("div", Bd, [
      G(t) ? (D(), N("div", Hd, [
        (D(!0), N(ee, null, ae(G(o), (h) => (D(), N("div", {
          key: h.id,
          class: Fe(["zero-code-error-notification", n(h.type)])
        }, [
          g("div", Vd, [
            g("div", Zd, [
              g("span", jd, H(m(h.type)), 1),
              g("span", Ud, H(h.message), 1)
            ]),
            g("button", {
              class: "zero-code-error-close",
              title: "エラーを閉じる",
              onClick: (E) => G(r)(h.id)
            }, " × ", 8, Wd)
          ]),
          h.details && v.showDetails ? (D(), N("div", Xd, [
            g("pre", Yd, H(h.details), 1)
          ])) : Y("", !0)
        ], 2))), 128))
      ])) : Y("", !0),
      g("div", Kd, [
        qr(v.$slots, "default")
      ])
    ]));
  }
}), qd = { class: "zero-code-toolbar-content" }, Gd = { class: "zero-code-toolbar-section" }, Qd = {
  key: 0,
  class: "zero-code-toolbar-separator"
}, ec = ["title", "disabled", "onClick"], tc = { class: "zero-code-toolbar-section" }, oc = /* @__PURE__ */ _e({
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
    }), We(
      () => t.show,
      (l) => {
      },
      { immediate: !0 }
    ), We(
      () => t.position,
      (l) => {
      },
      { deep: !0, immediate: !0 }
    ), We(
      () => t.actions,
      (l) => {
      },
      { immediate: !0 }
    );
    const r = o, n = (l) => {
      r("executeCommand", l);
    }, m = () => {
      r("save");
    }, v = () => {
      r("cancel");
    };
    return (l, h) => l.show ? (D(), N("div", {
      key: 0,
      class: "zero-code-rich-text-toolbar",
      style: Gr({
        top: l.position.top + "px",
        left: l.position.left + "px"
      })
    }, [
      g("div", qd, [
        g("div", Gd, [
          (D(!0), N(ee, null, ae(l.actions, (E, A) => (D(), N(ee, { key: A }, [
            E && E.name === "separator" ? (D(), N("div", Qd)) : E ? (D(), N("button", {
              key: 1,
              class: Fe(["zero-code-toolbar-btn", { active: E.active, disabled: !l.isEditing }]),
              title: E.title || "",
              disabled: !l.isEditing,
              tabindex: "-1",
              onClick: (w) => n(E.command || ""),
              onMousedown: h[0] || (h[0] = He(() => {
              }, ["prevent", "stop"]))
            }, H(E.icon || ""), 43, ec)) : Y("", !0)
          ], 64))), 128))
        ]),
        h[3] || (h[3] = g("div", { class: "zero-code-toolbar-separator" }, null, -1)),
        g("div", tc, [
          g("button", {
            class: "zero-code-toolbar-btn zero-code-save-btn",
            title: "保存 (Ctrl+S)",
            tabindex: "-1",
            onClick: m,
            onMousedown: h[1] || (h[1] = He(() => {
            }, ["prevent", "stop"]))
          }, " ✓ ", 32),
          g("button", {
            class: "zero-code-toolbar-btn zero-code-cancel-btn",
            title: "キャンセル (Esc)",
            tabindex: "-1",
            onClick: v,
            onMousedown: h[2] || (h[2] = He(() => {
            }, ["prevent", "stop"]))
          }, " ✕ ", 32)
        ])
      ])
    ], 4)) : Y("", !0);
  }
}), rc = { class: "zero-code editor-container" }, nc = { class: "zero-code-editor-content" }, ac = /* @__PURE__ */ _e({
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
    const t = e, r = o, n = Od(t, r), m = n.state.selectedComponent;
    n.state.selectedComponentIndex;
    const v = n.state.editablePageData, l = n.state.localParts, h = n.state.dataTab, E = ne(!1), A = ne({ top: 0, left: 0 }), w = ne(null), P = ne(""), b = ne(""), d = ne(""), s = de(() => w.value !== null), f = ao({
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
        p(O);
      }
    }), a = (O) => {
      if (w.value)
        try {
          if (O === "link") {
            const B = prompt("リンクのURLを入力してください:", "https://");
            if (B && B.trim()) {
              const j = document.execCommand("createLink", !1, B);
            }
          } else {
            const B = document.execCommand(O, !1, void 0);
          }
        } catch {
        }
    }, i = (O) => {
      if (!O) return O;
      let B = O.replace(/(<br\s*\/?>)+$/gi, "");
      return B = B.replace(/\s+$/, ""), B;
    }, c = () => {
      if (!w.value || !b.value || !d.value) return;
      const O = w.value.innerHTML, B = i(O), j = (oe) => {
        const J = b.value.match(/^(.+)_(.+)_(\d+)_(.+)$/);
        if (J) {
          const [me, ve, ce, Q, be] = J, pe = (Pe, Te) => {
            for (const ct of Pe) {
              if (ct.id === Te)
                return ct;
              if (ct.nested_parts && Array.isArray(ct.nested_parts)) {
                const ut = pe(ct.nested_parts, Te);
                if (ut) return ut;
              }
              for (const [ut, Et] of Object.entries(ct))
                if (Array.isArray(Et) && ut !== "nested_parts") {
                  for (const uo of Et)
                    if (uo && typeof uo == "object") {
                      for (const [ic, Bo] of Object.entries(uo))
                        if (Array.isArray(Bo)) {
                          const Ho = pe(Bo, Te);
                          if (Ho) return Ho;
                        }
                    }
                }
            }
            return null;
          }, ge = pe(oe, ve);
          if (ge && Array.isArray(ge[ce])) {
            const Pe = ge[ce][parseInt(Q)];
            if (Pe && typeof Pe == "object")
              return Pe[be] = B, !0;
          }
          return !1;
        }
        for (const me of oe) {
          if (me.id === b.value)
            return me[d.value] = B, !0;
          if (me.nested_parts && Array.isArray(me.nested_parts) && j(me.nested_parts))
            return !0;
          for (const [ve, ce] of Object.entries(me))
            if (Array.isArray(ce) && ve !== "nested_parts") {
              for (const Q of ce)
                if (Q && typeof Q == "object") {
                  if (Q.id === b.value)
                    return Q[d.value] = B, !0;
                  for (const [be, pe] of Object.entries(Q))
                    if (Array.isArray(pe) && j(pe))
                      return !0;
                }
            }
        }
        return !1;
      };
      j(v.value) && (w.value && O !== B && (w.value.innerHTML = B), r("update:page", v.value));
    }, p = (O) => {
      w.value && (O ? c() : w.value.innerHTML = P.value, w.value.contentEditable = "false", w.value.classList.remove("editing"), w.value.style.userSelect = "", w.value.style.webkitUserSelect = "", w.value._cleanup && (w.value._cleanup(), delete w.value._cleanup), w.value = null, P.value = "", b.value = "", d.value = "", E.value = !1);
    }, $ = (O) => {
      n.actions.openEditor(O);
    }, z = () => {
      n.closeEditor();
    }, C = (O) => {
      n.actions.deletePart(O);
    }, u = (O) => {
      n.actions.reorderParts(O);
    }, y = () => {
      const O = document.querySelector(".zero-code");
      if (!O) return;
      let B = null, j = null;
      const oe = (ce) => {
        const Q = ce, be = Q.target;
        if (be.classList.contains("draggable-nested")) {
          if (w.value) {
            Q.preventDefault();
            return;
          }
          if (be.classList.contains("z-for-nested-part"))
            return;
          B = be;
          const pe = be.dataset.componentId || "", ge = be.dataset.path || "", Pe = be.dataset.parentPath || "", Te = parseInt(be.dataset.index || "0");
          j = { componentId: pe, path: ge, parentPath: Pe, index: Te }, Q.dataTransfer && (Q.dataTransfer.effectAllowed = "move", Q.dataTransfer.setData("text/plain", "nested-component")), be.style.opacity = "0.5";
        }
      }, J = (ce) => {
        const Q = ce;
        Q.preventDefault(), Q.dataTransfer && (Q.dataTransfer.dropEffect = "move");
      }, me = (ce) => {
        const Q = ce;
        if (Q.preventDefault(), !B || !j) return;
        const pe = Q.target.closest(".draggable-nested");
        if (pe && pe !== B) {
          const ge = pe.dataset.parentPath || "", Pe = parseInt(pe.dataset.index || "0");
          j.parentPath === ge && n.actions.moveNestedPartById(j.parentPath, j.index, Pe);
        }
        B && (B.style.opacity = "1"), B = null, j = null;
      }, ve = (ce) => {
        const Q = ce.target;
        Q.classList.contains("draggable-nested") && (Q.style.opacity = "1"), B = null, j = null;
      };
      return O.addEventListener("dragstart", oe), O.addEventListener("dragover", J), O.addEventListener("drop", me), O.addEventListener("dragend", ve), () => {
        O.removeEventListener("dragstart", oe), O.removeEventListener("dragover", J), O.removeEventListener("drop", me), O.removeEventListener("dragend", ve);
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
    }, k = ne(null), F = de(() => {
      const O = /* @__PURE__ */ new Set();
      return l.value && l.value.forEach((B) => {
        B.parts && B.parts.forEach((j) => {
          O.add(j.type);
        });
      }), Array.from(O);
    }), U = (O, B) => {
      let j = B;
      return j === void 0 && (j = v.value.findIndex((oe) => oe.id === O.id), j === -1 && (j = 0)), n.templateProcessor.renderComponentWithNested(
        O,
        j,
        // 実際のコンポーネントインデックスを渡す
        (oe, J) => n.utils.template.getTemplate(oe, J, l.value),
        // ネストコンポーネントレンダリング用ラッパー関数
        (oe, J, me, ve) => n.templateProcessor.renderNestedComponentsWithUI(
          oe,
          J,
          (ce) => ce.join("-"),
          // パス配列を文字列に変換
          ve || ((ce, Q) => n.utils.template.getTemplate(ce, Q, l.value))
        )
      );
    }, x = (O) => {
      r("update:parts", O);
    }, q = (O) => {
      k.value = O, Ze.value = !0;
    }, V = (O, B) => {
      if (confirm(`パーツ「${B}」を削除しますか？`)) {
        const j = l.value.map((oe) => oe.type === O ? {
          ...oe,
          module: oe.module.filter((J) => J.title !== B)
        } : oe).filter((oe) => oe.module.length > 0);
        l.value = j, r("update:parts", j);
      }
    }, Z = (O) => {
      const B = typeof O == "string" ? O : O.body || "";
      return n.computed.renderPartPreview(B);
    }, te = (O) => {
      const { type: B, title: j, body: oe, category: J = "common" } = O, me = [...l.value];
      let ve = me.find((Q) => Q.type === B);
      ve || (ve = { type: B, module: [] }, me.push(ve));
      const ce = { title: j, body: oe, category: J };
      if (k.value) {
        const Q = ve.module.findIndex(
          (be) => be.title === k.value.module.title
        );
        Q !== -1 && (ve.module[Q] = ce);
      } else
        ve.module.push(ce);
      l.value = me, r("update:parts", me), xt();
    }, { activeTab: le, switchToTab: Re } = Td(), Ve = n.state.showPartSelector, Ae = n.state.showNestedPartSelector, Ze = ne(!1), Ge = (O) => {
      n.openPartSelector(O);
    }, Lt = () => {
      n.closePartSelector();
    }, Pt = () => {
      n.closeNestedPartSelector();
    }, dt = () => {
      Ze.value = !0;
    }, xt = () => {
      Ze.value = !1, k.value = null;
    }, io = n.state.showEditor, Qe = ne([]), Le = ne([]), lo = (O) => {
      Qe.value = O, r("update:commonImages", O);
    }, Rr = (O) => {
      Le.value = O, r("update:individualImages", O);
    }, Fo = () => {
      r("update:commonImages", Qe.value);
    }, Ro = () => {
      r("update:individualImages", Le.value);
    }, Lo = async () => {
      try {
        const [O, B] = await Promise.all([
          fetch("/sample-common-images.json"),
          fetch("/sample-individual-images.json")
        ]);
        if (O.ok && B.ok) {
          const [j, oe] = await Promise.all([
            O.json(),
            B.json()
          ]);
          Qe.value = Array.isArray(j) ? j : [], Le.value = Array.isArray(oe) ? oe : [];
        } else
          Qe.value = [], Le.value = [];
      } catch {
        Qe.value = [], Le.value = [];
      }
    }, Lr = (O, B, j) => {
      const oe = at.value.createNewComponent(O, B), J = j !== void 0 ? j : n.state.insertPosition.value;
      n.actions.addPart(oe, J), Lt();
    }, xr = (O, B) => {
      const j = n.state.nestedInsertPath.value, oe = n.state.nestedInsertPosition.value, J = at.value.createNewComponent(O, B);
      n.actions.addNestedPart(j, oe, J), Pt();
    }, at = de(() => {
      const O = l.value && l.value.length > 0 ? l.value : t.parts || [];
      return no(O);
    }), Br = (O) => at.value.getFieldInfo(O), Hr = (O, B, j) => at.value.shouldShowBasicField(O, B, j), Vr = (O, B, j) => at.value.shouldShowArrayField(O, B, j), Zr = (O, B, j, oe, J) => at.value.shouldShowArrayItemField(O, B, j, oe, J), jr = (O) => at.value.getInputType(O), Ur = (O, B, j) => at.value.isCheckboxChecked(O, B, j), Wr = (O, B) => {
      const j = m.value;
      if (j) {
        if (j[O] = B, j._isZForItem) {
          const oe = j._parentComponentId, J = j._arrayName, me = j._arrayIndex, ve = (Q, be) => {
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
                      for (const [ct, ut] of Object.entries(Te))
                        if (Array.isArray(ut)) {
                          const Et = ve(ut, be);
                          if (Et) return Et;
                        }
                    }
                }
            }
            return null;
          }, ce = ve(v.value, oe);
          if (ce && Array.isArray(ce[J])) {
            const Q = ce[J];
            me >= 0 && me < Q.length && (Q[me][O] = B);
          }
        }
        r("update:page", v.value);
      }
    };
    We(
      () => t.commonImages,
      (O) => {
        Array.isArray(O) && (Qe.value = JSON.parse(JSON.stringify(O)));
      },
      { immediate: !0 }
    ), We(
      () => t.individualImages,
      (O) => {
        Array.isArray(O) && (Le.value = JSON.parse(JSON.stringify(O)));
      },
      { immediate: !0 }
    );
    const xo = (O) => {
      if (!w.value || !E.value) return;
      const B = O.target;
      B.closest(".zero-code-rich-text-toolbar") || B === w.value || w.value.contains(B) || p(!0);
    };
    let co = null;
    return To(async () => {
      await Lo(), document.addEventListener("click", xo), n.setupEventListeners(), n.exposeGlobalFunctions((O, B) => {
        E.value = !0, n.actions.startTiptapEdit(O, B, [], 0);
      }), co = y() || null, window.startRichTextEdit = async (O, B, j, oe) => {
        var me;
        const J = oe || ((me = window.event) == null ? void 0 : me.target);
        if (w.value !== J && J) {
          w.value && p(!1), w.value = J, P.value = J.innerHTML, b.value = O, d.value = B, await qt(), J.contentEditable = "true", J.style.userSelect = "text", J.style.webkitUserSelect = "text", J.classList.add("editing");
          const ve = (pe) => {
            const ge = pe.relatedTarget;
            ge && ge.closest(".zero-code-rich-text-toolbar") || setTimeout(() => {
              w.value === J && p(!0);
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
      document.removeEventListener("click", xo), co && co();
    }), (O, B) => (D(), Be(Jd, null, {
      default: mr(() => [
        g("div", rc, [
          ht(Ld, {
            "active-tab": G(le),
            "onUpdate:activeTab": G(Re)
          }, null, 8, ["active-tab", "onUpdate:activeTab"]),
          ht(oc, {
            show: E.value,
            position: A.value,
            actions: f.actions,
            "editing-state": f.editingState,
            "is-editing": E.value,
            onExecuteCommand: f.executeCommand,
            onSave: B[0] || (B[0] = (j) => f.stopEdit(!0)),
            onCancel: B[1] || (B[1] = (j) => f.stopEdit(!1))
          }, null, 8, ["show", "position", "actions", "editing-state", "is-editing", "onExecuteCommand"]),
          g("div", nc, [
            G(le) === "editor" ? (D(), Be(xs, {
              key: 0,
              "data-tab": G(h),
              "editable-page-data": G(v),
              "local-parts": G(l),
              "local-common-parts": G(n).state.localCommonParts.value,
              "local-individual-parts": G(n).state.localIndividualParts.value,
              parts: t.parts || [],
              "show-part-selector": G(Ve),
              "show-nested-part-selector": G(Ae),
              "show-editor": G(io),
              "selected-component": G(m),
              "render-component-with-nested": U,
              "get-field-info": Br,
              "should-show-basic-field": Hr,
              "should-show-array-field": Vr,
              "should-show-array-item-field": Zr,
              "get-input-type": jr,
              "is-checkbox-checked": Ur,
              "parts-data": G(l) && G(l).length > 0 ? G(l) : t.parts || [],
              "is-text-editing": s.value,
              "onUpdate:dataTab": B[2] || (B[2] = (j) => h.value = j),
              onAddPart: Ge,
              onEditPart: $,
              onDeletePart: C,
              onReorderParts: u,
              onClosePartSelector: Lt,
              onSelectPart: Lr,
              onCloseNestedPartSelector: Pt,
              onSelectNestedPart: xr,
              onCloseEditor: z,
              onUpdateEditorValue: Wr
            }, null, 8, ["data-tab", "editable-page-data", "local-parts", "local-common-parts", "local-individual-parts", "parts", "show-part-selector", "show-nested-part-selector", "show-editor", "selected-component", "parts-data", "is-text-editing"])) : Y("", !0),
            G(le) === "parts" ? (D(), Be(Zi, {
              key: 1,
              "local-parts": G(l),
              "local-common-parts": G(n).state.localCommonParts.value,
              "local-individual-parts": G(n).state.localIndividualParts.value,
              "show-part-registration": Ze.value,
              "existing-part-types": F.value,
              "editing-part": k.value,
              "render-part-preview": Z,
              onUpdateParts: x,
              onShowRegistration: dt,
              onEditPart: q,
              onDeletePart: V,
              onCloseRegistration: xt,
              onSavePart: te
            }, null, 8, ["local-parts", "local-common-parts", "local-individual-parts", "show-part-registration", "existing-part-types", "editing-part"])) : Y("", !0),
            G(le) === "preview" ? (D(), Be(zl, {
              key: 2,
              "editable-page-data": G(v),
              "local-parts": G(l),
              parts: t.parts || []
            }, null, 8, ["editable-page-data", "local-parts", "parts"])) : Y("", !0),
            G(le) === "images" ? (D(), Be(Id, {
              key: 3,
              "common-images": Qe.value,
              "individual-images": Le.value,
              onUpdateCommonImages: lo,
              onUpdateIndividualImages: Rr,
              onSendCommonImagesData: Fo,
              onSendIndividualImagesData: Ro,
              onInitializeSampleImages: Lo
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
}), sc = Qr(ac, {
  shadowRoot: !1
});
customElements.define("zero-code", sc);
export {
  sc as ZeroCode,
  sc as default
};
