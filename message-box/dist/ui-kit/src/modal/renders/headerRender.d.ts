import { IFormType } from '../modal';
import React from 'react';
interface IHeaderRenderProps {
    title: string | React.ReactNode;
    type?: IFormType;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}
export declare const HeaderRender: ({ title, type, style, icon }: IHeaderRenderProps) => React.JSX.Element;
export {};
