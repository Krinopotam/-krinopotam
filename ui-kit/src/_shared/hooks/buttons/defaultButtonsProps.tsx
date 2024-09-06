import React from 'react';
import {IFormButton} from '@src/buttonsRow';
import {CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FolderAddOutlined, PlusOutlined, PlusSquareOutlined} from '@ant-design/icons';

export const defaultHeaderLabel: IFormButton = {
    weight: 1,
    type: 'element',
    position: 'left',
};

export const defaultButtonSelect: IFormButton = {
    weight: 90,
    icon: <PlusSquareOutlined />,
    position: 'right',
    hotKeys: [{key: 'Insert'}],
};

export const defaultButtonView: IFormButton = {
    weight: 100,
    icon: <EyeOutlined />,
    position: 'right',
    hotKeys: [{key: 'Enter'}],
};

export const defaultButtonCreate: IFormButton = {
    weight: 110,
    icon: <PlusOutlined />,
    position: 'right',
    hotKeys: [{key: 'Insert'}],
};

export const defaultButtonCreateGroup: IFormButton = {
    weight: 115,
    icon: <FolderAddOutlined />,
    position: 'right',
};

export const defaultButtonClone: IFormButton = {
    weight: 120,
    icon: <CopyOutlined />,
    position: 'right',
    hotKeys: [{key: 'F9'}],
};

export const defaultButtonUpdate: IFormButton = {
    weight: 130,
    icon: <EditOutlined />,
    position: 'right',
    hotKeys: [{key: 'Enter'}, {key: 'F2'}],
};

export const defaultButtonDelete: IFormButton = {
    weight: 140,
    icon: <DeleteOutlined />,
    position: 'right',
    colorType: 'danger',
    hotKeys: [{key: 'Delete', ctrl: true}],
};
