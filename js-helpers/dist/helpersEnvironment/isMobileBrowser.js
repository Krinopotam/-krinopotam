const n = () => {
  const e = navigator.userAgent || navigator.vendor || window.opera, o = [
    "android",
    "webos",
    "iphone",
    "ipad",
    "ipod",
    "blackberry",
    "ieMobile",
    "opera mini",
    "avantgo",
    "bada",
    "blazer",
    "elaine",
    "fennec",
    "hipTop",
    "iris",
    "kindle",
    "lge",
    "maemo",
    "midp",
    "mmp",
    "symbian",
    "pocket",
    "webOs",
    "nexus",
    "compal"
  ];
  return new RegExp(o.join("|"), "i").test(e);
};
export {
  n as isMobileBrowser
};
