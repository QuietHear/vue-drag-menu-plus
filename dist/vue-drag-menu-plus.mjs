import { ref as a, onMounted as re, onBeforeUnmount as we, resolveComponent as de, openBlock as I, createElementBlock as X, normalizeClass as q, unref as N, Fragment as pe, renderList as he, normalizeStyle as ge, createBlock as oe, withCtx as Te, resolveDynamicComponent as Ee, toDisplayString as ye } from "vue";
const me = ["title", "onMousedown", "onTouchstart", "onClick"], Ie = {
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
    const Y = P;
    let w = a([]), A = a(null), d = a(null), p = a(null), h = a(null), b = a(null), O = a(6), n = a(10), T = a(null), E = a(null), k = a(null), L = a(null), B = a(null), S = a(null), y = a(null), m = a(null), R = a(!1), G = a(null), V = a(null), W = a(null), _ = a(null), C = a(null), U = a(null), j = a(null), D = a(null), K = a(null), Q = a(null), c = a(!1), g = a(!0), o = a([]), f = a(null), r = a(null);
    const se = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), ie = (e, l) => {
      let i = [], u = (t) => {
        t.forEach((s) => {
          se(s, l) && i.push(s), s.childNodes && s.childNodes.length > 0 && u(s.childNodes);
        });
      };
      return u(e.childNodes), i;
    }, v = (e, l, i) => new Promise((u, t) => {
      setTimeout(() => {
        for (const s in l)
          e[s] = l[s];
        u();
      }, i);
    }), Z = () => {
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
            top: r.value - (l * (h.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value - l * (h.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ee = () => {
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
            top: r.value + (l * (h.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            top: r.value + l * (h.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, le = () => {
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
            left: f.value - (l * (p.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            left: f.value - l * (p.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, ae = () => {
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
            left: f.value + (l * (p.value + n.value) + n.value)
          },
          40
        ), await v(
          e,
          {
            left: f.value + l * (p.value + n.value)
          },
          100
        )));
      }), c.value = !c.value;
    }, $ = (e = 0) => {
      if (z("click", Y.list[e]), e === 0 || Y.closeOnClick) {
        let l, i, u, t;
        l = d.value.offsetLeft, i = d.value.offsetTop, l > 0 ? i < 0 ? (u = T.value / 2 - l - p.value, t = E.value / 2 + i, u + 10 < t ? le() : ee()) : (u = T.value / 2 - l - p.value, t = E.value / 2 - i - h.value, u + 10 < t ? le() : Z()) : i < 0 ? (u = T.value / 2 + l, t = E.value / 2 + i, u + 10 < t ? ae() : ee()) : (u = T.value / 2 + l, t = E.value / 2 - i - h.value, u + 10 < t ? ae() : Z());
      }
    }, ue = () => {
      c.value && $(0);
    }, J = () => {
      ue(), T.value = window.innerWidth, E.value = window.innerHeight, B.value = T.value - p.value, S.value = E.value - h.value, k.value = A.value.offsetLeft, L.value = A.value.offsetTop, y.value = B.value - k.value - 10, m.value = S.value - L.value - 10, w.value.forEach((e) => {
        e.left = y.value, e.top = m.value;
      });
    }, ce = () => {
      if (o.value.length > 1) {
        let e, l, i = o.value[o.value.length - 2].x, u = o.value[o.value.length - 2].y, t = o.value[o.value.length - 1].x, s = o.value[o.value.length - 1].y, x = Math.abs(t - i), ve = Math.abs(s - u);
        x === 0 ? (e = 0, l = n.value) : (e = Math.sqrt(
          Math.pow(n.value, 2) * Math.pow(x, 2) / (Math.pow(x, 2) + Math.pow(ve, 2))
        ), l = e * ve / x), w.value.forEach((F, ne) => {
          ne > 0 && setTimeout(async () => {
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
          }, ne * 120);
        });
      }
      o = [];
    }, te = () => {
      g.value ? (W.value = event.offsetX, _.value = event.offsetY) : (W.value = event.changedTouches[0].clientX - T.value / 2 - d.value.offsetLeft, _.value = event.changedTouches[0].clientY - E.value / 2 - d.value.offsetTop), G.value = d.value.offsetLeft, V.value = d.value.offsetTop, U.value = W.value, j.value = B.value + W.value, K.value = _.value, Q.value = S.value + _.value, o.value = [], y.value = G.value - k.value, m.value = V.value - L.value, R.value = !0, g.value ? (window.addEventListener("mousemove", H), window.addEventListener("mouseup", M)) : (window.addEventListener("touchmove", H), window.addEventListener("touchend", M));
    }, H = () => {
      ue(), g.value ? (C.value = event.clientX, D.value = event.clientY) : (C.value = event.changedTouches[0].clientX, D.value = event.changedTouches[0].clientY), C.value < U.value ? y.value = 0 - k.value : C.value > j.value ? y.value = B.value - k.value : y.value = C.value - k.value - W.value, D.value < K.value ? m.value = 0 - L.value : D.value > Q.value ? m.value = S.value - L.value : m.value = D.value - L.value - _.value, o.value.push({ x: y.value, y: m.value }), w.value.forEach((e, l) => {
        o.value.length > 1 && o.value.length > l * O.value && (e.left = o.value[o.value.length - 1 - O.value * l].x, e.top = o.value[o.value.length - 1 - O.value * l].y);
      }), o.value.length > O.value * (w.value.length - 1) + 1 && o.value.shift(), (b.value !== null || b.value !== void 0) && clearTimeout(b.value), b.value = setTimeout(ce, 500);
    }, M = () => {
      f.value = d.value.offsetLeft, r.value = d.value.offsetTop, g.value ? (window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", M)) : (window.removeEventListener("touchmove", H), window.removeEventListener("touchend", M)), G.value === f.value && V.value === r.value && $(), setTimeout(() => {
        R.value = !1;
      }, 600);
    };
    re(() => {
      w.value.length > 0 && (d.value = ie(A.value, "menu-item")[0], p.value = d.value.offsetWidth, h.value = d.value.offsetHeight, J(), window.addEventListener("resize", J));
    }), we(() => {
      window.removeEventListener("resize", J), g.value ? (window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", M)) : (window.removeEventListener("touchmove", H), window.removeEventListener("touchend", M));
    });
    let fe = JSON.parse(JSON.stringify(Y.list));
    return w.value = fe.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = Y.list.length + 1 - l, { ...e })), /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (g.value = !1), (e, l) => {
      const i = de("el-icon");
      return I(), X("div", {
        class: q(["vue-drag-menu-plus", N(R) ? "move-ing" : ""]),
        ref_key: "parentRef",
        ref: A
      }, [
        (I(!0), X(pe, null, he(N(w), (u, t) => (I(), X("div", {
          class: "menu-item",
          title: u.title,
          style: ge({
            ...u.style,
            left: u.left + "px",
            top: u.top + "px"
          }),
          key: t,
          onMousedown: (s) => t === 0 && N(g) ? te() : null,
          onTouchstart: (s) => t === 0 && !N(g) ? te() : null,
          onClick: (s) => t !== 0 && !N(R) ? $(t) : null
        }, [
          u.icon.split("/")[0] === "el" ? (I(), oe(i, { key: 0 }, {
            default: Te(() => [
              (I(), oe(Ee(u.icon.split("/")[1])))
            ]),
            _: 2
          }, 1024)) : u.icon.split("/")[0] === "iconfont" ? (I(), X("i", {
            key: 1,
            class: q(["icon iconfont", "icon-" + u.icon.split("/")[1]])
          }, null, 2)) : (I(), X("i", {
            key: 2,
            class: q(u.icon.split("/")[0])
          }, ye(u.icon.split("/")[1]), 3))
        ], 44, me))), 128))
      ], 2);
    };
  }
}, ke = [Ie], Le = {
  install(P) {
    ke.forEach((z) => {
      P.component("vueDragMenuPlus", z);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Le);
export {
  Le as default
};
