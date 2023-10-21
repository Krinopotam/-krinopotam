import React from 'react';
import { IColorType } from '../../button/button';
interface IHeaderRenderProps {
    draggableId: string;
    title: string | React.ReactNode;
    colorType?: IColorType;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}
export declare const HeaderRender: (props: IHeaderRenderProps) => React.JSX.Element;
export {};
