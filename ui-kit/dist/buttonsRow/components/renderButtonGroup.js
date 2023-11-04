import React from "react";
import { Space } from "antd";
import { RenderButton } from "../../buttonsRow/components/renderButton";
export const RenderButtonGroup = ({ buttons, position, context, componentProps, }) => {
    if (!buttons)
        return null;
    return (React.createElement(Space, { wrap: true }, Object.keys(buttons).map((id) => {
        const button = buttons === null || buttons === void 0 ? void 0 : buttons[id];
        if (!button || (position && button.position !== position))
            return null;
        return React.createElement(RenderButton, { key: id, id: id, button: button, context: context, componentProps: componentProps });
    })));
};
export default RenderButtonGroup;
//# sourceMappingURL=renderButtonGroup.js.map