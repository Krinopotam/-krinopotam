const o = () => {
  if (typeof Storage > "u") {
    console.error("Local storage is not supported in this browser.");
    return;
  }
  localStorage.clear();
};
export {
  o as ClearLocalStorage
};
