/** Removes extension from file name*/
export const TrimFileExtension = (fileName: string) => {
    return fileName.replace(/\.[^/.]+$/, '');
};