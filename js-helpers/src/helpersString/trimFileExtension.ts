/** Removes extension from file name*/
export const TrimFileExtension = (fileName: string) => {
    // Return as is if the filename starts with a dot and has no other dots
    if (fileName.startsWith('.') && fileName.indexOf('.', 1) === -1) return fileName;

    return fileName.replace(/\.[^/.]+$/, '');
};