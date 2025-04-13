import { useEffect as i } from "react";
import { useEvent as o } from "./useEvent.js";
const d = (e, c, u, n, f) => {
  const r = o(c);
  i(() => {
    if (f) return;
    const t = s(u);
    if (t)
      return t.addEventListener(e, r, n), () => {
        t.removeEventListener(e, r, n);
      };
  }, [r, e, n, u]);
}, s = (e) => e instanceof EventTarget ? e : typeof e == "function" ? e() : (e == null ? void 0 : e.current) instanceof EventTarget ? e.current : document;
export {
  s as getTarget,
  d as useAddEventListener
};
//# sourceMappingURL=useAddEventListener.js.map
