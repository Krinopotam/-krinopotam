import React from 'react';
import { IColorType } from '../../button/button';
interface IFooterRenderProps {
    onMouseResize: React.MouseEventHandler<HTMLDivElement> | undefined;
    resizable?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    colorType?: IColorType;
}
export declare const FooterRender: ({ onMouseResize, resizable, children, style, colorType }: IFooterRenderProps) => React.JSX.Element;
export {};
