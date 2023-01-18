import { ref as u, onBeforeUnmount as pe, watch as he, resolveComponent as ge, openBlock as p, createElementBlock as M, normalizeClass as U, unref as N, Fragment as ce, renderList as ye, normalizeStyle as Te, createBlock as j, resolveDynamicComponent as fe, withCtx as Ee, toDisplayString as ke, createCommentVNode as me, nextTick as Ie, onMounted as He } from "vue";
const Le = ["title", "onMousedown", "onTouchstart", "onClick"], We = {
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
  setup(P, { emit: z }) {
    const _ = P;
    let w = u([]), C = u(null), d = u(null), h = u(null), g = u(null), b = u(null), B = u(6), n = u(10), T = u(null), E = u(null), I = u(null), H = u(null), O = u(null), S = u(null), k = u(null), m = u(null), R = u(!1), G = u(null), V = u(null), D = u(null), X = u(null), Y = u(null), J = u(null), K = u(null), A = u(null), Q = u(null), Z = u(null), c = u(!1), y = u(!0), o = u([]), f = u(null), r = u(null);
    const re = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), we = (e, l) => {
      let i = [], a = (t) => {
        t.forEach((s) => {
          re(s, l) && i.push(s), s.childNodes && s.childNodes.length > 0 && a(s.childNodes);
        });
      };
      return a(e.childNodes), i;
    }, v = (e, l, i) => new Promise((a, t) => {
      setTimeout(() => {
        for (const s in l)
          e[s] = l[s];
        a();
      }, i);
    }), ee = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await v(
          e,
          { top: r.value + n.value },
          40
        ), await v(
          e,
          { top: r.value - n.value },
          80
        ), await v(e, { top: r.value }, 50)) : (await v(
          e,
          {
            top: r.value - (l * (g.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value - l * (g.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, le = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await v(
          e,
          { top: r.value - n.value },
          40
        ), await v(
          e,
          { top: r.value + n.value },
          80
        ), await v(e, { top: r.value }, 50)) : (await v(
          e,
          {
            top: r.value + (l * (g.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value + l * (g.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ae = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await v(
          e,
          { left: f.value + n.value },
          40
        ), await v(
          e,
          { left: f.value - n.value },
          80
        ), await v(e, { left: f.value }, 50)) : (await v(
          e,
          {
            left: f.value - (l * (h.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            left: f.value - l * (h.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ue = () => {
      w.value.forEach(async (e, l) => {
        l > 0 && (c.value ? (await v(
          e,
          { left: f.value - n.value },
          40
        ), await v(
          e,
          { left: f.value + n.value },
          80
        ), await v(e, { left: f.value }, 50)) : (await v(
          e,
          {
            left: f.value + (l * (h.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            left: f.value + l * (h.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, $ = (e = 0) => {
      if (z("click", _.list[e], e), e === 0 || _.closeOnClick) {
        let l, i, a, t;
        l = d.value.offsetLeft, i = d.value.offsetTop, l > 0 ? i < 0 ? (a = T.value / 2 - l - h.value, t = E.value / 2 + i, a + 10 < t ? ae() : le()) : (a = T.value / 2 - l - h.value, t = E.value / 2 - i - g.value, a + 10 < t ? ae() : ee()) : i < 0 ? (a = T.value / 2 + l, t = E.value / 2 + i, a + 10 < t ? ue() : le()) : (a = T.value / 2 + l, t = E.value / 2 - i - g.value, a + 10 < t ? ue() : ee());
      }
    }, te = () => {
      c.value && $(0);
    }, q = () => {
      te(), T.value = window.innerWidth, E.value = window.innerHeight, O.value = T.value - h.value, S.value = E.value - g.value, I.value = C.value.offsetLeft, H.value = C.value.offsetTop, k.value = O.value - I.value - 10, m.value = S.value - H.value - 10, w.value.forEach((e) => {
        e.left = k.value, e.top = m.value;
      });
    }, de = () => {
      if (o.value.length > 1) {
        let e, l, i = o.value[o.value.length - 2].x, a = o.value[o.value.length - 2].y, t = o.value[o.value.length - 1].x, s = o.value[o.value.length - 1].y, x = Math.abs(t - i), se = Math.abs(s - a);
        x === 0 ? (e = 0, l = n.value) : (e = Math.sqrt(
          Math.pow(n.value, 2) * Math.pow(x, 2) / (Math.pow(x, 2) + Math.pow(se, 2))
        ), l = e * se / x), w.value.forEach((F, ie) => {
          ie > 0 && setTimeout(async () => {
            await v(F, { left: i, top: a }, 50), await v(
              F,
              {
                left: t > i ? t + e : t - e,
                top: s > a ? s + l : s - l
              },
              50
            ), await v(
              F,
              {
                left: t > i ? t - e : t + e,
                top: s > a ? s - l : s + l
              },
              100
            ), await v(F, { left: t, top: s }, 50);
          }, ie * 120);
        });
      }
      o = [];
    }, ve = () => {
      y.value ? (D.value = event.offsetX, X.value = event.offsetY) : (D.value = event.changedTouches[0].clientX - T.value / 2 - d.value.offsetLeft, X.value = event.changedTouches[0].clientY - E.value / 2 - d.value.offsetTop), G.value = d.value.offsetLeft, V.value = d.value.offsetTop, J.value = D.value, K.value = O.value + D.value, Q.value = X.value, Z.value = S.value + X.value, o.value = [], k.value = G.value - I.value, m.value = V.value - H.value, R.value = !0, y.value ? (window.addEventListener("mousemove", L), window.addEventListener("mouseup", W)) : (window.addEventListener("touchmove", L), window.addEventListener("touchend", W));
    }, L = () => {
      te(), y.value ? (Y.value = event.clientX, A.value = event.clientY) : (Y.value = event.changedTouches[0].clientX, A.value = event.changedTouches[0].clientY), Y.value < J.value ? k.value = 0 - I.value : Y.value > K.value ? k.value = O.value - I.value : k.value = Y.value - I.value - D.value, A.value < Q.value ? m.value = 0 - H.value : A.value > Z.value ? m.value = S.value - H.value : m.value = A.value - H.value - X.value, o.value.push({ x: k.value, y: m.value }), w.value.forEach((e, l) => {
        o.value.length > 1 && o.value.length > l * B.value && (e.left = o.value[o.value.length - 1 - B.value * l].x, e.top = o.value[o.value.length - 1 - B.value * l].y);
      }), o.value.length > B.value * (w.value.length - 1) + 1 && o.value.shift(), (b.value !== null || b.value !== void 0) && clearTimeout(b.value), b.value = setTimeout(de, 500);
    }, W = () => {
      f.value = d.value.offsetLeft, r.value = d.value.offsetTop, y.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W)), G.value === f.value && V.value === r.value && $(), setTimeout(() => {
        R.value = !1;
      }, 600);
    };
    pe(() => {
      window.removeEventListener("resize", q), y.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W));
    });
    const ne = () => {
      w.value.length > 0 && (d.value = we(C.value, "menu-item")[0], h.value = d.value.offsetWidth, g.value = d.value.offsetHeight, q(), window.addEventListener("resize", q));
    }, oe = () => {
      w.value = _.list.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = _.list.length + 1 - l, { ...e })), C.value ? Ie(() => {
        ne();
      }) : He(() => {
        ne();
      });
    };
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (y.value = !1), he(
      () => _.list,
      () => {
        oe();
      }
    ), oe(), (e, l) => {
      const i = ge("el-icon");
      return p(), M("div", {
        class: U(["vue-drag-menu-plus", N(R) ? "move-ing" : ""]),
        ref_key: "parentRef",
        ref: C
      }, [
        (p(!0), M(ce, null, ye(N(w), (a, t) => (p(), M("div", {
          class: "menu-item",
          title: a.title,
          style: Te({
            ...a.style,
            left: a.left + "px",
            top: a.top + "px"
          }),
          key: t,
          onMousedown: (s) => t === 0 && N(y) ? ve() : null,
          onTouchstart: (s) => t === 0 && !N(y) ? ve() : null,
          onClick: (s) => t !== 0 && !N(R) ? $(t) : null
        }, [
          a.icon && (a.icon.icon || a.icon.type) ? (p(), M(ce, { key: 0 }, [
            a.icon.type === "custom" ? (p(), j(fe(a.icon.icon), { key: 0 })) : a.icon.type === "el" ? (p(), j(i, { key: 1 }, {
              default: Ee(() => [
                (p(), j(fe(a.icon.icon)))
              ]),
              _: 2
            }, 1024)) : a.icon.type === "iconfont" ? (p(), M("i", {
              key: 2,
              class: U(["icon iconfont", "icon-" + a.icon.icon])
            }, null, 2)) : (p(), M("i", {
              key: 3,
              class: U(a.icon.type)
            }, ke(a.icon.icon), 3))
          ], 64)) : me("", !0)
        ], 44, Le))), 128))
      ], 2);
    };
  }
}, Me = [We], _e = {
  install(P) {
    Me.forEach((z) => {
      P.component("vueDragMenuPlus", z);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(_e);
export {
  _e as default
};
