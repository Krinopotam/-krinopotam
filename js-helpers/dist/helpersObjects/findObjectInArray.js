import { IsArray as f } from "./isArray.js";
const o = (r, e, t) => {
  if (f(r)) {
    for (const n of r)
      if (n[e] === t) return n;
  }
};
export {
  o as FindObjectInArray
};
