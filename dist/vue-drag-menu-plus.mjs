import { resolveComponent as he, openBlock as p, createBlock as _, resolveDynamicComponent as ce, normalizeProps as fe, mergeProps as G, withCtx as pe, createElementBlock as A, toDisplayString as ge, ref as a, onBeforeUnmount as ye, watch as Te, normalizeClass as Ee, unref as Y, Fragment as me, renderList as be, normalizeStyle as ke, createCommentVNode as Ie, nextTick as Oe, onMounted as He } from "vue";
const Le = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(c) {
    return (N, I) => {
      const f = he("el-icon");
      return c.iconObj.type === "custom" ? (p(), _(ce(c.iconObj.icon), fe(G({ key: 0 }, c.iconObj.attrs)), null, 16)) : c.iconObj.type === "el" ? (p(), _(f, fe(G({ key: 1 }, c.iconObj.attrs)), {
        default: pe(() => [
          (p(), _(ce(c.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : c.iconObj.type === "iconfont" ? (p(), A("i", G({
        key: 2,
        class: ["icon iconfont", "icon-" + c.iconObj.icon]
      }, c.iconObj.attrs), null, 16)) : (p(), A("i", G({
        key: 3,
        class: c.iconObj.type
      }, c.iconObj.attrs), ge(c.iconObj.icon), 17));
    };
  }
};
const We = ["title", "onMousedown", "onTouchstart", "onClick"], Me = {
  __name: "index",
  props: {
    // 按钮数据
    list: {
      type: Array,
      default: () => [
        {
          icon: {
            type: "icon-insert icon-setting"
          },
          title: "菜单",
          style: {
            background: "#fff",
            color: ""
          }
        },
        {
          icon: {
            type: "icon-insert icon-myCenter"
          },
          style: {
            background: "rgb(255, 92, 92)"
          }
        },
        {
          icon: {
            type: "icon-insert icon-notice"
          },
          style: {
            background: "rgb(92, 209, 255)"
          }
        },
        {
          icon: {
            type: "icon-insert icon-expression"
          },
          style: {
            background: "rgb(255, 241, 92)"
          }
        },
        {
          icon: {
            type: "icon-insert icon-collection"
          },
          style: {
            background: "rgb(100, 245, 146)"
          }
        }
      ]
    },
    // 非第一个的按钮点击时是否需要收起菜单
    closeOnClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  setup(c, { emit: N }) {
    const I = c;
    let f = a([]), M = a(null), h = a(null), g = a(null), y = a(null), B = a(null), S = a(6), o = a(10), E = a(null), m = a(null), O = a(null), H = a(null), R = a(null), P = a(null), b = a(null), k = a(null), x = a(!1), V = a(null), $ = a(null), C = a(null), j = a(null), D = a(null), J = a(null), K = a(null), X = a(null), Q = a(null), Z = a(null), r = a(!1), T = a(!0), s = a([]), w = a(null), d = a(null);
    const re = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), we = (e, l) => {
      let t = [], n = (v) => {
        v.forEach((i) => {
          re(i, l) && t.push(i), i.childNodes && i.childNodes.length > 0 && n(i.childNodes);
        });
      };
      return n(e.childNodes), t;
    }, u = (e, l, t) => new Promise((n, v) => {
      setTimeout(() => {
        for (const i in l)
          e[i] = l[i];
        n();
      }, t);
    }), ee = () => {
      f.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { top: d.value + o.value },
          40
        ), await u(
          e,
          { top: d.value - o.value },
          80
        ), await u(e, { top: d.value }, 50)) : (await u(
          e,
          {
            top: d.value - (l * (y.value + o.value) + o.value)
          },
          40
        ), await u(
          e,
          {
            top: d.value - l * (y.value + o.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, le = () => {
      f.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { top: d.value - o.value },
          40
        ), await u(
          e,
          { top: d.value + o.value },
          80
        ), await u(e, { top: d.value }, 50)) : (await u(
          e,
          {
            top: d.value + (l * (y.value + o.value) + o.value)
          },
          40
        ), await u(
          e,
          {
            top: d.value + l * (y.value + o.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, ae = () => {
      f.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { left: w.value + o.value },
          40
        ), await u(
          e,
          { left: w.value - o.value },
          80
        ), await u(e, { left: w.value }, 50)) : (await u(
          e,
          {
            left: w.value - (l * (g.value + o.value) + o.value)
          },
          40
        ), await u(
          e,
          {
            left: w.value - l * (g.value + o.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, te = () => {
      f.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { left: w.value - o.value },
          40
        ), await u(
          e,
          { left: w.value + o.value },
          80
        ), await u(e, { left: w.value }, 50)) : (await u(
          e,
          {
            left: w.value + (l * (g.value + o.value) + o.value)
          },
          40
        ), await u(
          e,
          {
            left: w.value + l * (g.value + o.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, q = (e = 0) => {
      if (N("click", I.list[e], e), e === 0 || I.closeOnClick) {
        let l, t, n, v;
        l = h.value.offsetLeft, t = h.value.offsetTop, l > 0 ? t < 0 ? (n = E.value / 2 - l - g.value, v = m.value / 2 + t, n + 10 < v ? ae() : le()) : (n = E.value / 2 - l - g.value, v = m.value / 2 - t - y.value, n + 10 < v ? ae() : ee()) : t < 0 ? (n = E.value / 2 + l, v = m.value / 2 + t, n + 10 < v ? te() : le()) : (n = E.value / 2 + l, v = m.value / 2 - t - y.value, n + 10 < v ? te() : ee());
      }
    }, ue = () => {
      r.value && q(0);
    }, U = () => {
      ue(), E.value = window.innerWidth, m.value = window.innerHeight, R.value = E.value - g.value, P.value = m.value - y.value, O.value = M.value.offsetLeft, H.value = M.value.offsetTop, b.value = R.value - O.value - 10, k.value = P.value - H.value - 10, f.value.forEach((e) => {
        e.left = b.value, e.top = k.value;
      });
    }, de = () => {
      if (s.value.length > 1) {
        let e, l, t = s.value[s.value.length - 2].x, n = s.value[s.value.length - 2].y, v = s.value[s.value.length - 1].x, i = s.value[s.value.length - 1].y, z = Math.abs(v - t), se = Math.abs(i - n);
        z === 0 ? (e = 0, l = o.value) : (e = Math.sqrt(
          Math.pow(o.value, 2) * Math.pow(z, 2) / (Math.pow(z, 2) + Math.pow(se, 2))
        ), l = e * se / z), f.value.forEach((F, ie) => {
          ie > 0 && setTimeout(async () => {
            await u(F, { left: t, top: n }, 50), await u(
              F,
              {
                left: v > t ? v + e : v - e,
                top: i > n ? i + l : i - l
              },
              50
            ), await u(
              F,
              {
                left: v > t ? v - e : v + e,
                top: i > n ? i - l : i + l
              },
              100
            ), await u(F, { left: v, top: i }, 50);
          }, ie * 120);
        });
      }
      s = [];
    }, ne = () => {
      T.value ? (C.value = event.offsetX, j.value = event.offsetY) : (C.value = event.changedTouches[0].clientX - E.value / 2 - h.value.offsetLeft, j.value = event.changedTouches[0].clientY - m.value / 2 - h.value.offsetTop), V.value = h.value.offsetLeft, $.value = h.value.offsetTop, J.value = C.value, K.value = R.value + C.value, Q.value = j.value, Z.value = P.value + j.value, s.value = [], b.value = V.value - O.value, k.value = $.value - H.value, x.value = !0, T.value ? (window.addEventListener("mousemove", L), window.addEventListener("mouseup", W)) : (window.addEventListener("touchmove", L), window.addEventListener("touchend", W));
    }, L = () => {
      ue(), T.value ? (D.value = event.clientX, X.value = event.clientY) : (D.value = event.changedTouches[0].clientX, X.value = event.changedTouches[0].clientY), D.value < J.value ? b.value = 0 - O.value : D.value > K.value ? b.value = R.value - O.value : b.value = D.value - O.value - C.value, X.value < Q.value ? k.value = 0 - H.value : X.value > Z.value ? k.value = P.value - H.value : k.value = X.value - H.value - j.value, s.value.push({ x: b.value, y: k.value }), f.value.forEach((e, l) => {
        s.value.length > 1 && s.value.length > l * S.value && (e.left = s.value[s.value.length - 1 - S.value * l].x, e.top = s.value[s.value.length - 1 - S.value * l].y);
      }), s.value.length > S.value * (f.value.length - 1) + 1 && s.value.shift(), (B.value !== null || B.value !== void 0) && clearTimeout(B.value), B.value = setTimeout(de, 500);
    }, W = () => {
      w.value = h.value.offsetLeft, d.value = h.value.offsetTop, T.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W)), V.value === w.value && $.value === d.value && q(), setTimeout(() => {
        x.value = !1;
      }, 600);
    };
    ye(() => {
      window.removeEventListener("resize", U), T.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W));
    });
    const ve = () => {
      f.value.length > 0 && (h.value = we(M.value, "menu-item")[0], g.value = h.value.offsetWidth, y.value = h.value.offsetHeight, U(), window.addEventListener("resize", U));
    }, oe = () => {
      f.value = I.list.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = I.list.length + 1 - l, { ...e })), M.value ? Oe(() => {
        ve();
      }) : He(() => {
        ve();
      });
    };
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (T.value = !1), Te(
      () => I.list,
      () => {
        oe();
      }
    ), oe(), (e, l) => (p(), A("div", {
      class: Ee(["vue-drag-menu-plus", Y(x) ? "move-ing" : ""]),
      ref_key: "parentRef",
      ref: M
    }, [
      (p(!0), A(me, null, be(Y(f), (t, n) => (p(), A("div", {
        class: "menu-item",
        title: t.title,
        style: ke({
          ...t.style,
          left: t.left + "px",
          top: t.top + "px"
        }),
        key: n,
        onMousedown: (v) => n === 0 && Y(T) ? ne() : null,
        onTouchstart: (v) => n === 0 && !Y(T) ? ne() : null,
        onClick: (v) => n !== 0 && !Y(x) ? q(n) : null
      }, [
        t.icon && (t.icon.icon || t.icon.type) ? (p(), _(Le, {
          key: 0,
          iconObj: t.icon
        }, null, 8, ["iconObj"])) : Ie("", !0)
      ], 44, We))), 128))
    ], 2));
  }
}, Ce = [Me], je = {
  install(c) {
    Ce.forEach((N) => {
      c.component("vueDragMenuPlus", N);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(je);
export {
  je as default
};
