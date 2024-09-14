const e = (o) => {
  if (typeof Storage > "u") {
    console.error("Local storage is not supported in this browser.");
    return;
  }
  localStorage.removeItem(o);
};
export {
  e as RemoveFromLocalStorage
};
