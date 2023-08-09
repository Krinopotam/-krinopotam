import React from 'react';
import { IDFormApi } from '../hooks/api';
interface IFieldGroupRenderProps {
    tabName: string;
    groupName: string;
    formApi: IDFormApi;
}
export declare const FieldGroupRender: ({ tabName, groupName, formApi }: IFieldGroupRenderProps) => React.JSX.Element | null;
export {};
