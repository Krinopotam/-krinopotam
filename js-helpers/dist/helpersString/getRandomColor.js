const e = () => {
  const r = "0123456789ABCDEF";
  let o = "#";
  for (let t = 0; t < 6; t++)
    o += r[Math.floor(Math.random() * 16)];
  return o;
};
export {
  e as GetRandomColor
};
