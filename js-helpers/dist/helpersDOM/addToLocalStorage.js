const r = (o, e) => {
  if (typeof Storage > "u") {
    console.error("Local storage is not supported in this browser.");
    return;
  }
  const t = JSON.stringify(e);
  localStorage.setItem(o, t);
};
export {
  r as AddToLocalStorage
};
