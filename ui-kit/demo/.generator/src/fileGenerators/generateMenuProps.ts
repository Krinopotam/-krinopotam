import {IFileInfo} from '../types/types';
import fs from 'fs';
import crypto from "crypto";

export const generateMenuProps = (filesInfo: IFileInfo[], layoutsPath: string) => {
    // language=text
    let content = `
import React from "react";
import {MenuProps} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

`;

    content = content + 'export const menuItems: MenuProps["items"] =' + prepareMenuProps(filesInfo);
    fs.writeFileSync(layoutsPath + '/menuProps.tsx', content, {encoding: 'utf8', flag: 'w'});
};

const prepareMenuProps = (filesInfo: IFileInfo[], level: number = 1, rootFolder = '/') => {
    if (filesInfo.length === 0) return '';
    let result = '[';
    for (const file of filesInfo) {
        if (file.children?.length) {
            const childrenItems = prepareMenuProps(file.children, level + 1, rootFolder + file.fileName + '/');
            result =
                result +
                // language=text
                `\n${' '.repeat(level * 4)}getItem("${file.menuItemName}", "Item${crypto.randomUUID()}", <FolderOutlined />, ${childrenItems}),`;
            continue;
        }

        // language=text
        result =
            result +
            `\n${' '.repeat(level * 4)}getItem(<Link to="${rootFolder + file.menuItemLink}">${file.menuItemName}</Link>, "Item${crypto.randomUUID()}"),`;
    }
    result = result + ']';

    return result;
};