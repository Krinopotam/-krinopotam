import { useEffect as o } from "react";
import { useEvent as i } from "./useEvent.js";
const d = (e, u, t, n, f) => {
  const r = i(u);
  o(() => {
    if (f) return;
    const c = s(t);
    return c.addEventListener(e, r, n), () => {
      c.removeEventListener(e, r, n);
    };
  }, [r, e, n, t]);
}, s = (e) => e instanceof EventTarget ? e : typeof e == "function" ? e() : (e == null ? void 0 : e.current) instanceof EventTarget ? e.current : document;
export {
  s as getTarget,
  d as useAddEventListener
};
//# sourceMappingURL=useAddEventListener.js.map
