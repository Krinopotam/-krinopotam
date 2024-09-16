export const  getFileExtension = (fileName: string) => {
    const parts = fileName.split('.');
    if (parts.length === 1) return '';
    return parts[parts.length - 1];
}