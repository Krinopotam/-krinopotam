const t = (r) => r.startsWith(".") && r.indexOf(".", 1) === -1 ? r : r.replace(/\.[^/.]+$/, "");
export {
  t as TrimFileExtension
};
