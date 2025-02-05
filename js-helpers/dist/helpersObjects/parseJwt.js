const a = (e) => {
  if (e)
    try {
      const t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(
        window.atob(t).split("").map((o) => "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2)).join("")
      );
      return JSON.parse(n);
    } catch {
      return;
    }
};
export {
  a as ParseJwt
};
