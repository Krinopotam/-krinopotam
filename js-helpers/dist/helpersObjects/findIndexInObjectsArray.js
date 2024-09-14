import { IsArray as i } from "./isArray.js";
const o = (t, e, n) => {
  if (!i(t)) return -1;
  for (let r = 0; r < t.length; r++)
    if (t[r][e] === n) return r;
  return -1;
};
export {
  o as FindIndexInObjectsArray
};
