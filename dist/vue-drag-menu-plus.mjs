import { ref as a, onBeforeUnmount as de, watch as he, resolveComponent as pe, openBlock as T, createElementBlock as A, normalizeClass as U, unref as b, Fragment as ge, renderList as Te, normalizeStyle as Ee, createBlock as j, resolveDynamicComponent as ce, withCtx as ye, toDisplayString as me, nextTick as Ie, onMounted as ke } from "vue";
const He = ["title", "onMousedown", "onTouchstart", "onClick"], Le = {
  __name: "index",
  props: {
    list: {
      type: Array,
      default: () => [
        {
          icon: "icon-insert icon-setting",
          title: "\u83DC\u5355",
          style: {
            background: "#fff",
            color: ""
          }
        },
        {
          icon: "icon-insert icon-myCenter",
          style: {
            background: "rgb(255, 92, 92)"
          }
        },
        {
          icon: "icon-insert icon-notice",
          style: {
            background: "rgb(92, 209, 255)"
          }
        },
        {
          icon: "icon-insert icon-expression",
          style: {
            background: "rgb(255, 241, 92)"
          }
        },
        {
          icon: "icon-insert icon-collection",
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
    const M = P;
    let w = a([]), _ = a(null), d = a(null), h = a(null), p = a(null), N = a(null), B = a(6), n = a(10), E = a(null), y = a(null), k = a(null), H = a(null), O = a(null), S = a(null), m = a(null), I = a(null), R = a(!1), G = a(null), V = a(null), C = a(null), D = a(null), X = a(null), J = a(null), K = a(null), Y = a(null), Q = a(null), Z = a(null), c = a(!1), g = a(!0), o = a([]), f = a(null), r = a(null);
    const fe = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), re = (e, l) => {
      let i = [], u = (t) => {
        t.forEach((s) => {
          fe(s, l) && i.push(s), s.childNodes && s.childNodes.length > 0 && u(s.childNodes);
        });
      };
      return u(e.childNodes), i;
    }, v = (e, l, i) => new Promise((u, t) => {
      setTimeout(() => {
        for (const s in l)
          e[s] = l[s];
        u();
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
            top: r.value - (l * (p.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value - l * (p.value + n.value)
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
            top: r.value + (l * (p.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value + l * (p.value + n.value)
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
      if (z("click", M.list[e], e), e === 0 || M.closeOnClick) {
        let l, i, u, t;
        l = d.value.offsetLeft, i = d.value.offsetTop, l > 0 ? i < 0 ? (u = E.value / 2 - l - h.value, t = y.value / 2 + i, u + 10 < t ? ae() : le()) : (u = E.value / 2 - l - h.value, t = y.value / 2 - i - p.value, u + 10 < t ? ae() : ee()) : i < 0 ? (u = E.value / 2 + l, t = y.value / 2 + i, u + 10 < t ? ue() : le()) : (u = E.value / 2 + l, t = y.value / 2 - i - p.value, u + 10 < t ? ue() : ee());
      }
    }, te = () => {
      c.value && $(0);
    }, q = () => {
      te(), E.value = window.innerWidth, y.value = window.innerHeight, O.value = E.value - h.value, S.value = y.value - p.value, k.value = _.value.offsetLeft, H.value = _.value.offsetTop, m.value = O.value - k.value - 10, I.value = S.value - H.value - 10, w.value.forEach((e) => {
        e.left = m.value, e.top = I.value;
      });
    }, we = () => {
      if (o.value.length > 1) {
        let e, l, i = o.value[o.value.length - 2].x, u = o.value[o.value.length - 2].y, t = o.value[o.value.length - 1].x, s = o.value[o.value.length - 1].y, x = Math.abs(t - i), se = Math.abs(s - u);
        x === 0 ? (e = 0, l = n.value) : (e = Math.sqrt(
          Math.pow(n.value, 2) * Math.pow(x, 2) / (Math.pow(x, 2) + Math.pow(se, 2))
        ), l = e * se / x), w.value.forEach((F, ie) => {
          ie > 0 && setTimeout(async () => {
            await v(F, { left: i, top: u }, 50), await v(
              F,
              {
                left: t > i ? t + e : t - e,
                top: s > u ? s + l : s - l
              },
              50
            ), await v(
              F,
              {
                left: t > i ? t - e : t + e,
                top: s > u ? s - l : s + l
              },
              100
            ), await v(F, { left: t, top: s }, 50);
          }, ie * 120);
        });
      }
      o = [];
    }, ve = () => {
      g.value ? (C.value = event.offsetX, D.value = event.offsetY) : (C.value = event.changedTouches[0].clientX - E.value / 2 - d.value.offsetLeft, D.value = event.changedTouches[0].clientY - y.value / 2 - d.value.offsetTop), G.value = d.value.offsetLeft, V.value = d.value.offsetTop, J.value = C.value, K.value = O.value + C.value, Q.value = D.value, Z.value = S.value + D.value, o.value = [], m.value = G.value - k.value, I.value = V.value - H.value, R.value = !0, g.value ? (window.addEventListener("mousemove", L), window.addEventListener("mouseup", W)) : (window.addEventListener("touchmove", L), window.addEventListener("touchend", W));
    }, L = () => {
      te(), g.value ? (X.value = event.clientX, Y.value = event.clientY) : (X.value = event.changedTouches[0].clientX, Y.value = event.changedTouches[0].clientY), X.value < J.value ? m.value = 0 - k.value : X.value > K.value ? m.value = O.value - k.value : m.value = X.value - k.value - C.value, Y.value < Q.value ? I.value = 0 - H.value : Y.value > Z.value ? I.value = S.value - H.value : I.value = Y.value - H.value - D.value, o.value.push({ x: m.value, y: I.value }), w.value.forEach((e, l) => {
        o.value.length > 1 && o.value.length > l * B.value && (e.left = o.value[o.value.length - 1 - B.value * l].x, e.top = o.value[o.value.length - 1 - B.value * l].y);
      }), o.value.length > B.value * (w.value.length - 1) + 1 && o.value.shift(), (N.value !== null || N.value !== void 0) && clearTimeout(N.value), N.value = setTimeout(we, 500);
    }, W = () => {
      f.value = d.value.offsetLeft, r.value = d.value.offsetTop, g.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W)), G.value === f.value && V.value === r.value && $(), setTimeout(() => {
        R.value = !1;
      }, 600);
    };
    de(() => {
      window.removeEventListener("resize", q), g.value ? (window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", W)) : (window.removeEventListener("touchmove", L), window.removeEventListener("touchend", W));
    });
    const ne = () => {
      w.value.length > 0 && (d.value = re(_.value, "menu-item")[0], h.value = d.value.offsetWidth, p.value = d.value.offsetHeight, q(), window.addEventListener("resize", q));
    }, oe = () => {
      w.value = M.list.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = M.list.length + 1 - l, { ...e })), _.value ? Ie(() => {
        ne();
      }) : ke(() => {
        ne();
      });
    };
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (g.value = !1), he(
      () => M.list,
      () => {
        oe();
      }
    ), oe(), (e, l) => {
      const i = pe("el-icon");
      return T(), A("div", {
        class: U(["vue-drag-menu-plus", b(R) ? "move-ing" : ""]),
        ref_key: "parentRef",
        ref: _
      }, [
        (T(!0), A(ge, null, Te(b(w), (u, t) => (T(), A("div", {
          class: "menu-item",
          title: u.title,
          style: Ee({
            ...u.style,
            left: u.left + "px",
            top: u.top + "px"
          }),
          key: t,
          onMousedown: (s) => t === 0 && b(g) ? ve() : null,
          onTouchstart: (s) => t === 0 && !b(g) ? ve() : null,
          onClick: (s) => t !== 0 && !b(R) ? $(t) : null
        }, [
          u.customIcon ? (T(), j(ce(u.customIcon), { key: 0 })) : u.icon.split("/")[0] === "el" ? (T(), j(i, { key: 1 }, {
            default: ye(() => [
              (T(), j(ce(u.icon.split("/")[1])))
            ]),
            _: 2
          }, 1024)) : u.icon.split("/")[0] === "iconfont" ? (T(), A("i", {
            key: 2,
            class: U(["icon iconfont", "icon-" + u.icon.split("/")[1]])
          }, null, 2)) : (T(), A("i", {
            key: 3,
            class: U(u.icon.split("/")[0])
          }, me(u.icon.split("/")[1]), 3))
        ], 44, He))), 128))
      ], 2);
    };
  }
}, We = [Le], Me = {
  install(P) {
    We.forEach((z) => {
      P.component("vueDragMenuPlus", z);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Me);
export {
  Me as default
};
