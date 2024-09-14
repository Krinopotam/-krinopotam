const n = (r) => {
  if (r)
    try {
      const t = r.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), o = decodeURIComponent(
        window.atob(t).split("").map((a) => "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)).join("")
      );
      return JSON.parse(o);
    } catch {
      return;
    }
};
export {
  n as ParseJwt
};
