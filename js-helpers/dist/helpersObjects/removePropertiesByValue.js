const i = (e, c) => {
  if (typeof e != "object" || e === null) return e;
  for (const n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    const t = e[n];
    if (t === c) {
      delete e[n];
      continue;
    }
    typeof t == "object" && t !== null && t !== c && (e[n] = i(t, c), Object.keys(t).length === 0 && delete e[n]);
  }
  return e;
};
export {
  i as RemovePropertiesByValue
};
