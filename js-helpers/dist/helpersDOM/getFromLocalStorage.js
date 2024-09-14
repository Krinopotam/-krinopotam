const r = (e) => {
  if (typeof Storage > "u") {
    console.error("Local storage is not supported in this browser.");
    return;
  }
  const o = localStorage.getItem(e);
  return o ? JSON.parse(o) : void 0;
};
export {
  r as GetFromLocalStorage
};
