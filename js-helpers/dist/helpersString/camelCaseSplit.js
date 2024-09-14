const n = (a, e) => (typeof e > "u" && (e = " "), a.replace(/([a-z0-9])([A-Z])/g, "$1" + e + "$2"));
export {
  n as CamelCaseSplit
};
