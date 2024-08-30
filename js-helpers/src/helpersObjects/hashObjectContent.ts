import hash from "object-hash";

/** Get object content hash */
export const HashObjectContent = (object: hash.NotUndefined, options?: hash.NormalOption): string => {
    return hash(object, options);
};