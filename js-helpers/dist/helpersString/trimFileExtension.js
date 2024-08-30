export const TrimFileExtension = (fileName) => {
    return fileName.replace(/\.[^/.]+$/, '');
};
