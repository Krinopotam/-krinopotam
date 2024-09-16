export const trimExtension = (fileName: string) => {
    return fileName.replace(/\.[^/.]+$/, '');
}