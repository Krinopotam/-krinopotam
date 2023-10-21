import React from 'react';
import { ITreeSelectNode, ITreeSelectProps } from '../../treeSelect';
export declare const useDataSet: (titleRender: ITreeSelectProps['titleRender'], labelRender: ITreeSelectProps['labelRender'], isMountedRef: React.MutableRefObject<boolean>) => [ITreeSelectNode[] | undefined, (newDataSet: ITreeSelectProps['dataSet']) => void];
