import { useRef as u, useEffect as n, useCallback as s } from "react";
const o = (e) => {
  const r = u(e);
  return r.current = e, n(() => {
    r.current = e;
  }, [e]), s((...t) => r.current(...t), []);
};
export {
  o as useEvent
};
