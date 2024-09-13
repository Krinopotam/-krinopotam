import { addedDiff, deletedDiff, detailedDiff, diff, updatedDiff } from "deep-object-diff";
/**
 * Deep compares two JavaScript Objects, including nested structures of arrays and object
 * Uses deep-object-diff
 */
export const ObjectDiffs = (obj1, obj2, mode) => {
    if (mode === 'added')
        return addedDiff(obj1, obj2);
    else if (mode === 'deleted')
        return deletedDiff(obj1, obj2);
    else if (mode === 'updated')
        return updatedDiff(obj1, obj2);
    else if (mode === 'detailed')
        return detailedDiff(obj1, obj2);
    else
        return diff(obj1, obj2);
};
