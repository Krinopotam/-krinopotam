import { useRef as r, useEffect as t } from "react";
const n = () => {
  const e = r(!0);
  return t(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
export {
  n as useIsMountedRef
};
