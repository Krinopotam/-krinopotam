import React from 'react';
import {GlobalToken, theme} from 'antd';
import {IColorType} from '@src/button/button';

const {useToken} = theme;

interface IFooterRenderProps {
    onMouseResize: React.MouseEventHandler<HTMLDivElement> | undefined;
    resizable?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    colorType?: IColorType;
}

export const FooterRender = ({onMouseResize, resizable, children, style, colorType}: IFooterRenderProps): React.JSX.Element => {
    const {token} = useToken();
    const color = useGetColor(token, colorType);
    return (
        <div>
            <div style={{borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: color, ...style}}>{children}</div>
            {resizable ? <ResizeHandle onMouseDown={onMouseResize} /> : null}
        </div>
    );
};

const ResizeHandle = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.ReactElement => (
    <div className="resize-handle" {...props}>
        <div className="resize-handle-inner" />
    </div>
);

const useGetColor = (token: GlobalToken, colorType: IColorType | undefined) => {
    let color = token.colorFillSecondary;

    if (colorType === 'info') color = token.colorInfoHover;
    else if (colorType === 'success') color = token.colorSuccessHover;
    else if (colorType === 'warning') color = token.colorWarningHover;
    else if (colorType === 'danger') color = token.colorErrorHover;
    return color;
};
