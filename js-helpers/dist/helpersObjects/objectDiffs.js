import { addedDiff as t, deletedDiff as i, updatedDiff as r, detailedDiff as l, diff as u } from "deep-object-diff";
const n = (e, f, d) => d === "added" ? t(e, f) : d === "deleted" ? i(e, f) : d === "updated" ? r(e, f) : d === "detailed" ? l(e, f) : u(e, f);
export {
  n as ObjectDiffs
};
