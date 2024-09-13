/** Extracts the extension from a file name */
export const ExtractFileExtension = (fileName) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    // No extension found or file starts with a dot but has no other dots
    if (lastDotIndex === -1 || lastDotIndex === 0)
        return '';
    return fileName.slice(lastDotIndex);
};
