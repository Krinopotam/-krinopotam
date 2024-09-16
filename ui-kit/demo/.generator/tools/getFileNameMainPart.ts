export const getFileNameMainPart = (fileName: string) => {
    const parts = fileName.split('.');
    return parts[0];
}