export const getFileExtension = (fileName) => {
    const parts = fileName.split('.');
    if (parts.length === 1)
        return '';
    return parts[parts.length - 1];
};
