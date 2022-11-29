import { ref as a, onMounted as we, onBeforeUnmount as de, resolveComponent as he, openBlock as M, createElementBlock as B, normalizeClass as j, Fragment as pe, renderList as ge, normalizeStyle as Te, createBlock as oe, withCtx as Ee, resolveDynamicComponent as ye, toDisplayString as me } from "vue";
const Ie = (T, k) => {
  const O = T.__vccOpts || T;
  for (const [w, z] of k)
    O[w] = z;
  return O;
}, Le = {
  name: "vueDragMenuPlus",
  emits: ["click"],
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
  setup(T, { attrs: k, slots: O, emit: w, expose: z }) {
    let d = a([]), H = a(null), t = a(null), f = a(null), g = a(null), b = a(null), S = a(6), v = a(10), E = a(null), y = a(null), _ = a(null), C = a(null), P = a(null), R = a(null), m = a(null), I = a(null), G = a(!1), V = a(null), J = a(null), X = a(null), N = a(null), Y = a(null), K = a(null), Q = a(null), A = a(null), Z = a(null), $ = a(null), r = a(!1), L = a(!0), n = a([]), h = a(null), p = a(null);
    const se = (e, l) => e.classList ? e.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + e.className + " "), ie = (e, l) => {
      let i = [], s = (o) => {
        o.forEach((c) => {
          se(c, l) && i.push(c), c.childNodes && c.childNodes.length > 0 && s(c.childNodes);
        });
      };
      return s(e.childNodes), i;
    }, u = (e, l, i) => new Promise((s, o) => {
      setTimeout(() => {
        for (const c in l)
          e[c] = l[c];
        s();
      }, i);
    }), ee = () => {
      d.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { top: p.value + v.value },
          40
        ), await u(
          e,
          { top: p.value - v.value },
          80
        ), await u(e, { top: p.value }, 50)) : (await u(
          e,
          {
            top: p.value - (l * (g.value + v.value) + v.value)
          },
          40
        ), await u(
          e,
          {
            top: p.value - l * (g.value + v.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, le = () => {
      d.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { top: p.value - v.value },
          40
        ), await u(
          e,
          { top: p.value + v.value },
          80
        ), await u(e, { top: p.value }, 50)) : (await u(
          e,
          {
            top: p.value + (l * (g.value + v.value) + v.value)
          },
          40
        ), await u(
          e,
          {
            top: p.value + l * (g.value + v.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, ae = () => {
      d.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { left: h.value + v.value },
          40
        ), await u(
          e,
          { left: h.value - v.value },
          80
        ), await u(e, { left: h.value }, 50)) : (await u(
          e,
          {
            left: h.value - (l * (f.value + v.value) + v.value)
          },
          40
        ), await u(
          e,
          {
            left: h.value - l * (f.value + v.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, ue = () => {
      d.value.forEach(async (e, l) => {
        l > 0 && (r.value ? (await u(
          e,
          { left: h.value - v.value },
          40
        ), await u(
          e,
          { left: h.value + v.value },
          80
        ), await u(e, { left: h.value }, 50)) : (await u(
          e,
          {
            left: h.value + (l * (f.value + v.value) + v.value)
          },
          40
        ), await u(
          e,
          {
            left: h.value + l * (f.value + v.value)
          },
          100
        )));
      }), r.value = !r.value;
    }, q = (e = 0) => {
      if (w("click", T.list[e]), e === 0 || T.closeOnClick) {
        let l, i, s, o;
        l = t.value.offsetLeft, i = t.value.offsetTop, l > 0 ? i < 0 ? (s = E.value / 2 - l - f.value, o = y.value / 2 + i, s + 10 < o ? ae() : le()) : (s = E.value / 2 - l - f.value, o = y.value / 2 - i - g.value, s + 10 < o ? ae() : ee()) : i < 0 ? (s = E.value / 2 + l, o = y.value / 2 + i, s + 10 < o ? ue() : le()) : (s = E.value / 2 + l, o = y.value / 2 - i - g.value, s + 10 < o ? ue() : ee());
      }
    }, te = () => {
      r.value && q(0);
    }, U = () => {
      te(), E.value = window.innerWidth, y.value = window.innerHeight, P.value = E.value - f.value, R.value = y.value - g.value, _.value = H.value.offsetLeft, C.value = H.value.offsetTop, m.value = P.value - _.value - 10, I.value = R.value - C.value - 10, d.value.forEach((e) => {
        e.left = m.value, e.top = I.value;
      });
    }, ce = () => {
      if (n.value.length > 1) {
        let e, l, i = n.value[n.value.length - 2].x, s = n.value[n.value.length - 2].y, o = n.value[n.value.length - 1].x, c = n.value[n.value.length - 1].y, x = Math.abs(o - i), ve = Math.abs(c - s);
        x === 0 ? (e = 0, l = v.value) : (e = Math.sqrt(
          Math.pow(v.value, 2) * Math.pow(x, 2) / (Math.pow(x, 2) + Math.pow(ve, 2))
        ), l = e * ve / x), d.value.forEach((F, ne) => {
          ne > 0 && setTimeout(async () => {
            await u(F, { left: i, top: s }, 50), await u(
              F,
              {
                left: o > i ? o + e : o - e,
                top: c > s ? c + l : c - l
              },
              50
            ), await u(
              F,
              {
                left: o > i ? o - e : o + e,
                top: c > s ? c - l : c + l
              },
              100
            ), await u(F, { left: o, top: c }, 50);
          }, ne * 120);
        });
      }
      n = [];
    }, fe = () => {
      L.value ? (X.value = event.offsetX, N.value = event.offsetY) : (X.value = event.changedTouches[0].clientX - E.value / 2 - t.value.offsetLeft, N.value = event.changedTouches[0].clientY - y.value / 2 - t.value.offsetTop), V.value = t.value.offsetLeft, J.value = t.value.offsetTop, K.value = X.value, Q.value = P.value + X.value, Z.value = N.value, $.value = R.value + N.value, n.value = [], m.value = V.value - _.value, I.value = J.value - C.value, G.value = !0, L.value ? (window.addEventListener("mousemove", W), window.addEventListener("mouseup", D)) : (window.addEventListener("touchmove", W), window.addEventListener("touchend", D));
    }, W = () => {
      te(), L.value ? (Y.value = event.clientX, A.value = event.clientY) : (Y.value = event.changedTouches[0].clientX, A.value = event.changedTouches[0].clientY), Y.value < K.value ? m.value = 0 - _.value : Y.value > Q.value ? m.value = P.value - _.value : m.value = Y.value - _.value - X.value, A.value < Z.value ? I.value = 0 - C.value : A.value > $.value ? I.value = R.value - C.value : I.value = A.value - C.value - N.value, n.value.push({ x: m.value, y: I.value }), d.value.forEach((e, l) => {
        n.value.length > 1 && n.value.length > l * S.value && (e.left = n.value[n.value.length - 1 - S.value * l].x, e.top = n.value[n.value.length - 1 - S.value * l].y);
      }), n.value.length > S.value * (d.value.length - 1) + 1 && n.value.shift(), (b.value !== null || b.value !== void 0) && clearTimeout(b.value), b.value = setTimeout(ce, 500);
    }, D = () => {
      h.value = t.value.offsetLeft, p.value = t.value.offsetTop, L.value ? (window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", D)) : (window.removeEventListener("touchmove", W), window.removeEventListener("touchend", D)), V.value === h.value && J.value === p.value && q(), setTimeout(() => {
        G.value = !1;
      }, 600);
    };
    we(() => {
      d.value.length > 0 && (t.value = ie(H.value, "menu-item")[0], f.value = t.value.offsetWidth, g.value = t.value.offsetHeight, U(), window.addEventListener("resize", U));
    }), de(() => {
      window.removeEventListener("resize", U), L.value ? (window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", D)) : (window.removeEventListener("touchmove", W), window.removeEventListener("touchend", D));
    });
    let re = JSON.parse(JSON.stringify(T.list));
    return d.value = re.map((e, l) => (e.left = 0, e.top = 0, e.style.zIndex = T.list.length + 1 - l, { ...e })), /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) && (L.value = !1), {
      menuList: d,
      parentRef: H,
      isPC: L,
      isMove: G,
      moveBegin: fe,
      showMenu: q
    };
  }
}, Me = ["title", "onMousedown", "onTouchstart", "onClick"];
function ke(T, k, O, w, z, d) {
  const H = he("el-icon");
  return M(), B("div", {
    class: j(["vue-drag-menu-plus", w.isMove ? "move-ing" : ""]),
    ref: "parentRef"
  }, [
    (M(!0), B(pe, null, ge(w.menuList, (t, f) => (M(), B("div", {
      class: "menu-item",
      title: t.title,
      style: Te({
        ...t.style,
        left: t.left + "px",
        top: t.top + "px"
      }),
      key: f,
      onMousedown: (g) => f === 0 && w.isPC ? w.moveBegin() : null,
      onTouchstart: (g) => f === 0 && !w.isPC ? w.moveBegin() : null,
      onClick: (g) => f !== 0 && !w.isMove ? w.showMenu(f) : null
    }, [
      t.icon.split("/")[0] === "el" ? (M(), oe(H, { key: 0 }, {
        default: Ee(() => [
          (M(), oe(ye(t.icon.split("/")[1])))
        ]),
        _: 2
      }, 1024)) : t.icon.split("/")[0] === "iconfont" ? (M(), B("i", {
        key: 1,
        class: j(["icon iconfont", "icon-" + t.icon.split("/")[1]])
      }, null, 2)) : (M(), B("i", {
        key: 2,
        class: j(t.icon.split("/")[0])
      }, me(t.icon.split("/")[1]), 3))
    ], 44, Me))), 128))
  ], 2);
}
const He = /* @__PURE__ */ Ie(Le, [["render", ke]]), _e = [He], Ce = {
  install(T) {
    _e.forEach((k) => {
      T.component(k.name, k);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ce);
export {
  Ce as default
};
