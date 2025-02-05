const r = (o) => {
  if (typeof Storage > "u") {
    console.error("Local storage is not supported in this browser.");
    return;
  }
  const e = localStorage.getItem(o);
  return e ? JSON.parse(e) : void 0;
};
export {
  r as GetFromLocalStorage
};
