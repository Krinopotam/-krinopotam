const o = (e) => {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return t && t !== Object.prototype && t.constructor && t.constructor !== Object;
};
export {
  o as isInstanceOfClass
};
