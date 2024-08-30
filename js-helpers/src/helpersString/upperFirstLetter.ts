/** Converts the first letter of a string to uppercase */
export const UpperFirstLetter = (val: string) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
};