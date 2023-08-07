import React from 'react';
interface IFooterRenderProps {
    onMouseResize: React.MouseEventHandler<HTMLDivElement> | undefined;
    resizable?: boolean;
    children?: React.ReactNode;
    containerStyle?: React.CSSProperties;
}
export declare const FooterRender: ({ onMouseResize, resizable, children, containerStyle }: IFooterRenderProps) => JSX.Element;
export {};
