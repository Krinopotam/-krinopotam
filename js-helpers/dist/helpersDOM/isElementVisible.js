const r = (i) => {
  if (!i) return !1;
  const n = (e) => {
    if (!e) return !0;
    const t = window.getComputedStyle(e).display, s = window.getComputedStyle(e).visibility;
    return t === "none" || s === "hidden" ? !1 : n(e.parentElement);
  };
  return n(i);
};
export {
  r as IsElementVisible
};
