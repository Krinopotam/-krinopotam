import hash from "object-hash";
/** Get object content hash */
export const HashObjectContent = (object, options) => {
    return hash(object, options);
};
