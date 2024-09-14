const t = (e) => {
  if (!(!e || typeof e != "object"))
    return Object.keys(e);
};
export {
  t as ObjectKeys
};
