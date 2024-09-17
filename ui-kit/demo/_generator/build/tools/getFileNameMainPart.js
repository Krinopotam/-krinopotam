export const getFileNameMainPart = (fileName) => {
    const parts = fileName.split('.');
    return parts[0];
};
