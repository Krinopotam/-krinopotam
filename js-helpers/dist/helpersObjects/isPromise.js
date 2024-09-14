const t = (o) => !!o && (o instanceof Promise || o.constructor === Promise || Object.prototype.toString.call(o) === "[object Promise]" || typeof o.then == "function");
export {
  t as IsPromise
};
