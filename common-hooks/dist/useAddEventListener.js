import { useEffect as o } from "react";
import { useEvent as E } from "./useEvent.js";
const u = (e, s, n, t) => {
  const r = E(s);
  o(() => {
    const c = n ?? document;
    return c.addEventListener(e, r, t), () => {
      c.removeEventListener(e, r, t);
    };
  }, [r, e, t, n]);
};
export {
  u as useAddEventListener
};
