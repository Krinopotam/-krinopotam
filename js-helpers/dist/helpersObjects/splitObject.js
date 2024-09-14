const s = (e, c) => {
  const n = {}, o = {};
  for (const t in e)
    c[t] ? n[t] = e[t] : o[t] = e[t];
  return [n, o];
};
export {
  s as SplitObject
};
