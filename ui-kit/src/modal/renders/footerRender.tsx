import React from 'react';

interface IFooterRenderProps {
    onMouseResize: React.MouseEventHandler<HTMLDivElement> | undefined;
    resizable?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export const FooterRender = ({onMouseResize, resizable, children, style}: IFooterRenderProps): React.JSX.Element => {
    return (
        <div>
            <div style={style}>{children}</div>
            {resizable ? <ResizeHandle onMouseDown={onMouseResize} /> : null}
        </div>
    );
};

const ResizeHandle = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.ReactElement => (
    <div className="resize-handle" {...props}>
        <div className="resize-handle-inner" />
    </div>
);
