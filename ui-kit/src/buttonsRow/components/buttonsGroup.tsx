import React from "react";
import {Space} from "antd";
import {IFormButtons} from "@src/buttonsRow";
import {ButtonAdvanced} from "@src/buttonsRow/components/buttonAdvanced";

export const ButtonsGroup = ({
                                 buttons,
                                 position,
                                 context,
                             }: {
    buttons?: IFormButtons;
    position: 'left' | 'center' | 'right' | undefined;
    context?: unknown;
}): React.JSX.Element | null => {
    if (!buttons) return null;

    return (
        <Space wrap>
            {Object.keys(buttons).map((id) => {
                const button = buttons?.[id];
                if (!button || (position && button.position !== position)) return null;
                return <ButtonAdvanced key={id} id={id} button={button} context={context} />;
            })}
        </Space>
    );
};

export default ButtonsGroup