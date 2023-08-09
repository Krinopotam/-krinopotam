import React from 'react';
import { IDFormApi } from "../hooks/api";
interface IFieldsRenderProps {
    tabName: string;
    formApi: IDFormApi;
}
export declare const TabContentRender: ({ tabName, formApi }: IFieldsRenderProps) => React.JSX.Element;
export {};
