import { ref as u, onBeforeUnmount as he, watch as ge, resolveComponent as ye, openBlock as d, createElementBlock as M, normalizeClass as Te, unref as N, Fragment as ce, renderList as Ee, normalizeStyle as ke, createBlock as j, resolveDynamicComponent as fe, normalizeProps as re, mergeProps as z, withCtx as Ie, toDisplayString as me, createCommentVNode as He, nextTick as Le, onMounted as We } from "vue";
const Me = ["title", "onMousedown", "onTouchstart", "onClick"], _e = {
  __name: "index",
  props: {
    list: {
      type: Array,
      default: () => [
        {
          icon: {
            type: "icon-insert icon-setting"
          },
          title: "\u83DC\u5355",
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
    closeOnClick: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  setup(F, { emit: G }) {
    const _ = F;
    let w = u([]), C = u(null), p = u(null), h = u(null), g = u(null), b = u(null), B = u(6), o = u(10), T = u(null), E = u(null), m = u(null), H = u(null), O = u(null), S = u(null), k = u(null), I = u(null), R = u(!1), V = u(null), $ = u(null), D = u(null), X = u(null), Y = u(null), J = u(null), K = u(null), A = u(null), Q = u(null), Z = u(null), c = u(!1), y = u(!0), v = u([]), f = u(null), r = u(null);
    const we = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), pe = (e, l) => {
      let i = [], a = (t) => {
        t.forEach((s) => {
          we(s, l) && i.push(s), s.childNodes && s.childNodes.length > 0 && a(s.childNodes);
        });
      };
      return a(e.childNodes), i;
    }, n = (e, l, i) => new Promise((a, t) => {
      setTimeout(() => {
        for (const s in l)
          e[s] = l[s];
        a();
      }, i);
    }), ee = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await n(
          e,
          { top: r.value + o.value },
          40
        ), await n(
          e,
          { top: r.value - o.value },
          80
        ), await n(e, { top: r.value }, 50)) : (await n(
          e,
          {
            top: r.value - (l * (g.value + o.value) + o.value)
          },
          40
        ), await n(
          e,
          {
            top: r.value - l * (g.value + o.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, le = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await n(
          e,
          { top: r.value - o.value },
          40
        ), await n(
          e,
          { top: r.value + o.value },
          80
        ), await n(e, { top: r.value }, 50)) : (await n(
          e,
          {
            top: r.value + (l * (g.value + o.value) + o.value)
          },
          40
        ), await n(
          e,
          {
            top: r.value + l * (g.value + o.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ae = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await n(
          e,
          { left: f.value + o.value },
          40
        ), await n(
          e,
          { left: f.value - o.value },
          80
        ), await n(e, { left: f.value }, 50)) : (await n(
          e,
          {
            left: f.value - (l * (h.value + o.value) + o.value)
          },
          40
        ), await n(
          e,
          {
            left: f.value - l * (h.value + o.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ue = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await n(
          e,
          { left: f.value - o.value },
          40
        ), await n(
          e,
          { left: f.value + o.value },
          80
        ), await n(e, { left: f.value }, 50)) : (await n(
          e,
          {
            left: f.value + (l * (h.value + o.value) + o.value)
          },
          40
        ), await n(
          e,
          {
            left: f.value + l * (h.value + o.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, q = (e = 0) => {
      if (G("click", _.list[e], e), e === 0 || _.closeOnClick) {
        let l, i, a, t;
        l = p.value.offsetLeft, i = p.value.offsetTop, l > 0 ? i < 0 ? (a = T.value / 2 - l - h.value, t = E.value / 2 + i, a + 10 < t ? ae() : le()) : (a = T.value / 2 - l - h.value, t = E.value / 2 - i - g.value, a + 10 < t ? ae() : ee()) : i < 0 ? (a = T.value / 2 + l, t = E.value / 2 + i, a + 10 < t ? ue() : le()) : (a = T.value / 2 + l, t = E.value / 2 - i - g.value, a + 10 < t ? ue() : ee());
      }
    }, te = () => {
      c.value && q(0);
    }, U = () => {
      te(), T.value = window.innerWidth, E.value = window.innerHeight, O.value = T.value - h.value, S.value = E.value - g.value, m.value = C.value.offsetLeft, H.value = C.value.offsetTop, k.value = O.value - m.value - 10, I.value = S.value - H.value - 10, w.value.forEach((e) => {
        e.left = k.value, e.top = I.value;
      });
    }, de = () => {
      if (v.value.length > 1) {
        let e, l, i = v.value[v.value.length - 2].x, a = v.value[v.value.length - 2].y, t = v.value[v.value.length - 1].x, s = v.value[v.value.length - 1].y, P = Math.abs(t - i), se = Math.abs(s - a);
        P === 0 ? (e = 0, l = o.value) : (e = Math.sqrt(
          Math.pow(o.value, 2) * Math.pow(P, 2) / (Math.pow(P, 2) + Math.pow(se, 2))
        ), l = e * se / P), w.value.forEach((x, ie) => {
          ie > 0 && setTimeout(async () => {
            await n(x, { left: i, top: a }, 50), await n(
              x,
              {
                left: t > i ? t + e : t - e,
                top: s > a ? s + l : s - l
              },
              50
            ), await n(
              x,
              {
                left: t > i ? t - e : t + e,
                top: s > a ? s - l : s + l
              },
              100
            ), await n(x, { left: t, top: s }, 50);
          }, ie * 120);
        });
      }
      v = [];
    }, ne = () => {
      y.value ? (D.value = event.offsetX, X.value = event.offsetY) : (D.value = event.changedTouches[0].clientX - T.value / 2 - p.value.offsetLeft, X.value = event.changedTouches[0].clientY - E.value / 2 - p.value.offsetTop), V.value = p.value.offsetLeft, $.value = p.value.offsetTop, J.value = D.value, K.value = O.value + D.value, Q.value = X.value, Z.value = S.value + X.value, v.value = [], k.value = V.value - m.value, I.value = $.value - H.value, R.value = !0, y.value ? (window.addEventListener("mousemove", L), window.addEventListener("mouseup", W)) : (window.addEventListener("touchmove", L), window.addEventListener("touchend", W));
    }, L = () => {
      te(), y.value ? (Y.value = event.clientX, A.value = event.clientY) : (Y.value = event.changedTouches[0].clientX, A.value = event.changedTouches[0].clientY), Y.value < J.value ? k.value = 0 - m.value : Y.value > K.value ? k.value = O.value - m.value : k.value = Y.value - m.value - D.value, A.value < Q.value ? I.value = 0 - H.value : A.value > Z.value ? I.value = S.value - H.value : I.value = A.value - H.value - X.value, v.value.push({ x: k.value, y: I.value }), w.value.forEach((e, l) => {
        v.value.length > 1 && v.value.length > l * B.value && (e.left = v.value[v.value.length - 1 - B.value * l].x, e.top = v.value[v.value.length - 1 - B.value * l].y);
      }), v.value.length > B.value * (w.value.length - 1) + 1 && v.value.shift(), (b.value !== null || b.value !== void 0) && clearTimeout(b.value), b.value = setTimeout(de, 500);
    }, W = () => {
      f.value = p.value.offsetLeft, r.value = p.value.offsetTop, y.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W)), V.value === f.value && $.value === r.value && q(), setTimeout(() => {
        R.value = !1;
      }, 600);
    };
    he(() => {
      window.removeEventListener("resize", U), y.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W));
    });
    const oe = () => {
      w.value.length > 0 && (p.value = pe(C.value, "menu-item")[0], h.value = p.value.offsetWidth, g.value = p.value.offsetHeight, U(), window.addEventListener("resize", U));
    }, ve = () => {
      w.value = _.list.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = _.list.length + 1 - l, { ...e })), C.value ? Le(() => {
        oe();
      }) : We(() => {
        oe();
      });
    };
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (y.value = !1), ge(
      () => _.list,
      () => {
        ve();
      }
    ), ve(), (e, l) => {
      const i = ye("el-icon");
      return d(), M("div", {
        class: Te(["vue-drag-menu-plus", N(R) ? "move-ing" : ""]),
        ref_key: "parentRef",
        ref: C
      }, [
        (d(!0), M(ce, null, Ee(N(w), (a, t) => (d(), M("div", {
          class: "menu-item",
          title: a.title,
          style: ke({
            ...a.style,
            left: a.left + "px",
            top: a.top + "px"
          }),
          key: t,
          onMousedown: (s) => t === 0 && N(y) ? ne() : null,
          onTouchstart: (s) => t === 0 && !N(y) ? ne() : null,
          onClick: (s) => t !== 0 && !N(R) ? q(t) : null
        }, [
          a.icon && (a.icon.icon || a.icon.type) ? (d(), M(ce, { key: 0 }, [
            a.icon.type === "custom" ? (d(), j(fe(a.icon.icon), re(z({ key: 0 }, a.icon.attrs)), null, 16)) : a.icon.type === "el" ? (d(), j(i, re(z({ key: 1 }, a.icon.attrs)), {
              default: Ie(() => [
                (d(), j(fe(a.icon.icon)))
              ]),
              _: 2
            }, 1040)) : a.icon.type === "iconfont" ? (d(), M("i", z({
              key: 2,
              class: ["icon iconfont", "icon-" + a.icon.icon]
            }, a.icon.attrs), null, 16)) : (d(), M("i", z({
              key: 3,
              class: a.icon.type
            }, a.icon.attrs), me(a.icon.icon), 17))
          ], 64)) : He("", !0)
        ], 44, Me))), 128))
      ], 2);
    };
  }
}, Ce = [_e], De = {
  install(F) {
    Ce.forEach((G) => {
      F.component("vueDragMenuPlus", G);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(De);
export {
  De as default
};
