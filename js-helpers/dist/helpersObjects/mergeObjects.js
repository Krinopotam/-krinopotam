import { deepmerge as t } from "deepmerge-ts";
const m = (e, r) => t(e, r ?? {});
export {
  m as MergeObjects
};
