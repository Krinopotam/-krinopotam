import { useRef as f, useEffect as s } from "react";
const n = (r, t) => {
  const e = f(!0);
  s(() => {
    if (e.current) {
      e.current = !1;
      return;
    }
    return r();
  }, t);
};
export {
  n as useUpdateEffect
};
//# sourceMappingURL=useUpdateEffect.js.map
