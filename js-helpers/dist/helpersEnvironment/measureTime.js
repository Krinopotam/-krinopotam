const s = (e, o) => {
  const n = performance.now(), r = o(), t = performance.now();
  return console.log(`${e} time: ${t - n} ms`), r;
};
export {
  s as measureTime
};
