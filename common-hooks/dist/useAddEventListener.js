import { useEffect as o } from "react";
import { useEvent as i } from "./useEvent.js";
const d = (e, u, c, n, f) => {
  const r = i(u);
  o(() => {
    if (f) return;
    const t = s(c);
    return t.addEventListener(e, r, n), () => {
      t.removeEventListener(e, r, n);
    };
  }, [r, e, n, c]);
}, s = (e) => e instanceof EventTarget ? e : typeof e == "function" ? e() : e != null && e.current && e instanceof EventTarget ? e.current : document;
export {
  d as useAddEventListener
};
