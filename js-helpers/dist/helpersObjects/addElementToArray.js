const b = function(a, o, c, t, s = !0) {
  const e = s ? [...a] : a, r = c ? e.indexOf(c) : -1;
  switch (t !== "top" && (typeof t > "u" || r === -1) && (t = "bottom"), t) {
    case "top":
      e.unshift(o);
      break;
    case "bottom":
      e.push(o);
      break;
    case "above":
      e.splice(r, 0, o);
      break;
    case "below":
      e.splice(r + 1, 0, o);
      break;
    default:
      throw new Error("Invalid position. Use: bottom| top | before | after");
  }
  return e;
};
export {
  b as AddElementToArray
};
