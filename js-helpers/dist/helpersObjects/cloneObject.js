import { IsArray as p } from "./isArray.js";
import { IsObjectHasOwnProperty as y } from "./isObjectHasOwnProperty.js";
const m = (c, i) => {
  const f = /* @__PURE__ */ new Map(), e = (n, s) => {
    if (!n) return n;
    if (f.has(n)) return f.get(n);
    const o = {};
    f.set(n, o), s++;
    for (const r in n) {
      if (!y(n, r)) continue;
      const t = n[r];
      !t || typeof t != "object" || i && s > i ? o[r] = t : o[r] = p(t) ? u(t, s) : e(t, s);
    }
    return o;
  }, u = (n, s) => {
    const o = [];
    s++;
    for (let r = 0; r < n.length; r++) {
      const t = n[r];
      !t || typeof t != "object" || i && s > i ? o[r] = t : o[r] = p(t) ? u(t, s) : e(t, s);
    }
    return o;
  };
  return typeof c != "object" || c === null ? c : p(c) ? u(c, 0) : e(c, 0);
};
export {
  m as CloneObject
};
