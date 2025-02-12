import { useRef as u, useState as s } from "react";
const P = (e) => {
  const r = u(e), t = u(e), o = f(), c = (n) => {
    typeof n == "function" ? t.current = n(t.current) : t.current = n, o();
  };
  return r.current !== e ? (r.current = e, t.current = e, [r.current, c]) : [t.current, c];
}, f = () => {
  const [, e] = s({});
  return () => e({});
};
export {
  P as useGetActualProps
};
//# sourceMappingURL=useGetActualProps.js.map
