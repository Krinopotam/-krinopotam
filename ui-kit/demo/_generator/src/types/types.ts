export interface IFileInfo {
    /** File or directory unique id*/
    fileGuid: string;
    /** File name without extension or directory name */
    fileName: string;
    /** File extension */
    fileExt?: string;
    /** file directory from app root */
    fileDir: string;
    /** full file path from app root */
    fullFilePath: string;
    /** file source content */
    source?: string;
    /** component name */
    componentName?: string;
    /** unique component page name */
    componentPage?: string;
    /** item name for menu */
    menuItemName?: string;
    /** link name for menu item */
    menuItemLink?: string;
    /** item title */
    title?: string;
    /** item description */
    description?: string;

    /** children files (for directory)*/
    children?: IFileInfo[];
}