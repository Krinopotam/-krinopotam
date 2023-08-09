import React from 'react';
import { ITreeSelectProps, IAntTreeSelectProps } from '../treeSelect';
import { ITreeSelectApi } from '../hooks/api';
export declare const TreeSelectRender: ({ api, antProps, }: ITreeSelectProps & {
    api: ITreeSelectApi;
    antProps: IAntTreeSelectProps;
}) => React.JSX.Element;
