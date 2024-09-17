import fs from 'fs';
import crypto from 'crypto';

import {IFileInfo} from '../types/types';
import {getFileInfo} from './getFileInfo.js';
import {upperFirstLetter} from '../tools/upperFirstLetter.js';
import {camelCaseSplit} from '../tools/camelCaseSplit.js';

export const getDirFilesInfo = (curDir: string, curDirFromRoot: string, filesInfo?: IFileInfo[]): IFileInfo[] => {
    const fileList = fs.readdirSync(curDir, {withFileTypes: true});

    if (!filesInfo) filesInfo = [];
    for (const entity of fileList) {
        if (!entity.isDirectory()) {
            const fileInfo = getFileInfo(entity.name, curDir, curDirFromRoot + '/' + entity.name);
            if (fileInfo) filesInfo?.push(fileInfo);
            continue;
        }

        const folder: IFileInfo = {
            fileGuid: crypto.randomUUID(),
            fileName: entity.name,
            fileExt: '',
            fileDir: curDir,
            fullFilePath: curDirFromRoot,
            menuItemName: upperFirstLetter(camelCaseSplit(entity.name)),
        };
        folder.children = getDirFilesInfo(curDir + '/' + entity.name, curDirFromRoot + '/' + entity.name);
        filesInfo.push(folder);
    }

    return filesInfo;
};