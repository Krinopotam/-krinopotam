/** Removes extension from file name*/
export const TrimFileExtension = (fileName) => {
    return fileName.replace(/\.[^/.]+$/, '');
};
