import { IsArray as n } from "./isArray.js";
const f = (r, o, i) => {
  if (n(r)) {
    for (const t of r)
      if (t[o] === i) return t;
  }
};
export {
  f as FindObjectInArray
};
