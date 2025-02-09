import { isInstanceOfClass as y } from "./isInstanceOfClass.js";
import { IsArray as i } from "./isArray.js";
import { IsObjectHasOwnProperty as a } from "./isObjectHasOwnProperty.js";
const d = (s, o) => {
  const f = /* @__PURE__ */ new Map(), u = (r, c) => {
    if (!r) return r;
    if (f.has(r)) return f.get(r);
    const e = {};
    f.set(r, e), c++;
    for (const n in r) {
      if (!a(r, n)) continue;
      const t = r[n];
      !t || typeof t != "object" || !i(t) && y(t) || o && c > o ? e[n] = t : e[n] = i(t) ? p(t, c) : u(t, c);
    }
    return e;
  }, p = (r, c) => {
    const e = [];
    c++;
    for (let n = 0; n < r.length; n++) {
      const t = r[n];
      !t || typeof t != "object" || !i(t) && y(t) || o && c > o ? e[n] = t : e[n] = i(t) ? p(t, c) : u(t, c);
    }
    return e;
  };
  return typeof s != "object" || s === null || !i(s) && y(s) ? s : i(s) ? p(s, 0) : u(s, 0);
};
export {
  d as CloneObject
};
