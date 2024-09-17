import {IFileInfo} from '../types/types';

export const sortByFileName = (items: IFileInfo[]) => {
    items.sort((a, b) => {
        if (a.children?.length) sortByFileName(a.children);
        if (b.children?.length) sortByFileName(b.children);

        if (a.children?.length && b.children?.length) {
            if (a.fileName === b.fileName) return 0;
            else return a.fileName > b.fileName ? 1 : -1;
        } else if (a.children?.length) return -1;
        else return 1;
    });
};