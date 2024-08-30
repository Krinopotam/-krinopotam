/** Converts the first letter of a string to lowercase */
export const LowerFirstLetter = (val: string) => {
    return val.charAt(0).toLowerCase() + val.slice(1);
};