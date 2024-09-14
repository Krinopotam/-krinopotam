const u = (r, t, n) => {
  if (!r || !t) return !1;
  if (n && r === t) return !0;
  let e = t.parentNode;
  for (; e != null; ) {
    if (e == r) return !0;
    e = e.parentNode;
  }
  return !1;
};
export {
  u as IsDescendant
};
