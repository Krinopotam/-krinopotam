import hash from "object-hash";
export const HashObjectContent = (object, options) => {
    return hash(object, options);
};
