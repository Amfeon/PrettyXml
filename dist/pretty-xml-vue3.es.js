import { openBlock as e, createElementBlock as n, createElementVNode as c, toDisplayString as h, createCommentVNode as v, Fragment as d, renderList as g, createBlock as y, computed as r, ref as x, resolveComponent as E, normalizeClass as O, createVNode as X, unref as $, createTextVNode as S, watch as A } from "vue";
const P = { class: "element" }, D = /* @__PURE__ */ c("span", { class: "element__bracket" }, "</", -1), L = { class: "element__name" }, w = /* @__PURE__ */ c("span", { class: "element__bracket" }, ">", -1), F = {
  __name: "CloseTag",
  props: {
    name: {
      type: String
    }
  },
  setup(t) {
    return (a, o) => (e(), n("div", P, [
      D,
      c("span", L, h(t.name), 1),
      w
    ]));
  }
}, j = { class: "attribute" }, z = { class: "attribute__name" }, J = { class: "attribute__value" }, M = {
  key: 0,
  class: "element__bracket--close"
}, R = {
  __name: "AttributesComponent",
  props: {
    value: { type: String },
    name: { type: String },
    isLast: { type: Boolean }
  },
  setup(t) {
    return (a, o) => (e(), n("div", j, [
      c("span", z, h(t.name) + "= ", 1),
      c("span", J, ' "' + h(t.value) + '" ', 1),
      t.isLast ? (e(), n("span", M, ">")) : v("", !0)
    ]));
  }
}, q = { class: "element" }, G = /* @__PURE__ */ c("span", { class: "element__bracket" }, "<", -1), H = { class: "element__attributes" }, I = {
  key: 0,
  class: "element__bracket"
}, K = {
  key: 1,
  class: "element__bracket--close"
}, Q = {
  __name: "OpenTag",
  props: {
    attribures: {
      type: Array
    },
    isSelfClosing: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String
    }
  },
  emits: ["openClose"],
  setup(t) {
    return (a, o) => (e(), n("div", q, [
      G,
      c("span", {
        class: "element__name",
        onClick: o[0] || (o[0] = (s) => a.$emit("openClose"))
      }, h(t.name), 1),
      c("div", H, [
        (e(!0), n(d, null, g(t.attribures, (s, l) => (e(), y(R, {
          name: s.name,
          value: s.value,
          key: "attr" + l,
          "is-last": l === t.attribures.length - 1,
          "is-self-closing": t.isSelfClosing
        }, null, 8, ["name", "value", "is-last", "is-self-closing"]))), 128))
      ]),
      t.isSelfClosing ? (e(), n("span", I, "/")) : v("", !0),
      t.attribures.length ? v("", !0) : (e(), n("span", K, ">"))
    ]));
  }
}, U = {
  key: 0,
  class: "tag__content"
}, W = {
  key: 0,
  class: "tag__child"
}, Y = { class: "remark__content" }, Z = {
  key: 0,
  class: "tag__content"
}, ee = {
  __name: "XmlTag",
  props: {
    node: Element,
    isShort: Boolean
  },
  setup(t) {
    const a = t, o = r(() => a.node.nodeName), s = r(() => Array.from(a.node.childNodes)), l = r(
      () => s.value && s.value.filter((u) => u.nodeType === 1)
    ), i = r(
      () => s.value && s.value.filter((u) => u.nodeType === 3)
    ), k = r(
      () => s.value && s.value.filter((u) => u.nodeType === 4)
    ), _ = r(
      () => s.value && s.value.filter((u) => u.nodeType === 8)
    ), T = r(
      () => a.node.attributes && Array.from(a.node.attributes) || []
    ), f = x(!0), N = r(() => !l.value.length && i.value.length), b = !l.value.length && !i.value.length && !k.value.length && !_.value.length, B = r(() => a.isShort && N.value);
    return (u, C) => {
      const V = E("XmlTag", !0);
      return e(), n("div", {
        class: O(["tag", { "tag--short": B.value }])
      }, [
        X(Q, {
          name: o.value,
          "is-self-closing": $(b),
          attribures: T.value,
          onOpenClose: C[0] || (C[0] = (m) => f.value = !f.value)
        }, null, 8, ["name", "is-self-closing", "attribures"]),
        f.value ? (e(), n(d, { key: 0 }, [
          (e(!0), n(d, null, g(i.value, (m, p) => (e(), n(d, {
            key: "content" + p
          }, [
            m.nodeValue ? (e(), n("div", U, h(m.nodeValue), 1)) : v("", !0)
          ], 64))), 128)),
          l.value.length ? (e(), n("div", W, [
            (e(!0), n(d, null, g(l.value, (m, p) => (e(), y(V, {
              key: `e${p}`,
              node: m,
              "is-short": t.isShort
            }, null, 8, ["node", "is-short"]))), 128)),
            (e(!0), n(d, null, g(_.value, (m, p) => (e(), n("div", {
              class: "remark",
              key: "rem" + p
            }, [
              S(" <!-- "),
              c("pre", Y, h(m.textContent), 1),
              S(" --> ")
            ]))), 128))
          ])) : v("", !0)
        ], 64)) : (e(), n(d, { key: 1 }, [
          $(b) ? v("", !0) : (e(), n("div", Z, "..."))
        ], 64)),
        $(b) ? v("", !0) : (e(), y(F, {
          key: 2,
          name: o.value
        }, null, 8, ["name"]))
      ], 2);
    };
  }
}, ne = {
  __name: "PrettyXml",
  props: {
    xml: {
      type: String
    },
    options: {
      type: Object
    }
  },
  setup(t) {
    const a = t, o = new DOMParser(), s = x(), l = (i) => {
      const _ = o.parseFromString(i, "application/xml").childNodes[0];
      s.value = _;
    };
    return A(
      () => a.xml,
      (i) => {
        l(i);
      }
    ), l(a.xml), (i, k) => {
      var _;
      return e(), y(ee, {
        node: s.value,
        "is-short": (_ = t.options) == null ? void 0 : _.shortRecord
      }, null, 8, ["node", "is-short"]);
    };
  }
};
export {
  ne as PrettyXml
};
