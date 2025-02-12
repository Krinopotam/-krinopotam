import { useRef as f, useCallback as i, useEffect as u } from "react";
const h = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, m = (n, c, d) => {
  const r = (t) => {
    c == null || c(t.matches);
  }, x = f(r);
  x.current = r;
  const s = i((t) => x.current(t), []);
  u(() => {
    const t = { ...h, ...d };
    let e;
    if (n && typeof window < "u") {
      const { matchMedia: a } = window;
      if (a && n in t) {
        e = a(`screen and (max-width: ${t[n]})`);
        try {
          e.addEventListener("change", s);
        } catch {
          e.addListener(s);
        }
        s(e);
      }
    }
    return () => {
      try {
        e == null || e.removeEventListener("change", s);
      } catch {
        e == null || e.removeListener(s);
      }
    };
  }, [n, d, s]);
};
export {
  m as useResponsive
};
//# sourceMappingURL=useResponsive.js.map
