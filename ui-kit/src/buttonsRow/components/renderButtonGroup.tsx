import React from "react";
import {Space} from "antd";
import {IButtonRowProps, IFormButtons} from "@src/buttonsRow";
import {RenderButton} from "@src/buttonsRow/components/renderButton";

export const RenderButtonGroup = ({
                                 buttons,
                                 position,
                                 context,
                                 componentProps,
                             }: {
    buttons?: IFormButtons;
    position: 'left' | 'center' | 'right' | undefined;
    context?: unknown;
    componentProps: IButtonRowProps,
}): React.JSX.Element | null => {
    if (!buttons) return null;

    return (
        <Space wrap>
            {Object.keys(buttons).map((id) => {
                const button = buttons?.[id];
                if (!button || (position && button.position !== position)) return null;
                return <RenderButton key={id} id={id} button={button} context={context} componentProps={componentProps}/>;
            })}
        </Space>
    );
};

export default RenderButtonGroup