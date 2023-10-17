import React from 'react';
interface IFooterRenderProps {
    onMouseResize: React.MouseEventHandler<HTMLDivElement> | undefined;
    resizable?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const FooterRender: ({ onMouseResize, resizable, children, style }: IFooterRenderProps) => React.JSX.Element;
export {};
