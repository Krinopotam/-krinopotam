import React from 'react';
import { Divider, Tooltip } from 'antd';
import { ButtonSimple } from '../../buttonsRow/components/buttonSimple';
import { RenderDropdown } from '../../buttonsRow/components/renderDropdown';
export const RenderButton = ({ id, button, context, componentProps, }) => {
    if (!button || button.hidden)
        return null;
    if (button.type === 'element') {
        if (button.tooltip)
            return React.createElement(Tooltip, { title: button.tooltip }, button.title);
        else
            return React.createElement(React.Fragment, null, button.title);
    }
    if (button.type === 'divider')
        return React.createElement(Divider, { type: "vertical", plain: true });
    if (button.children && Object.keys(button.children).length) {
        if (button.tooltip)
            return (React.createElement(Tooltip, { title: button.tooltip },
                React.createElement(React.Fragment, null,
                    React.createElement(RenderDropdown, { id: id, button: button, context: context, componentProps: componentProps }))));
        else
            return React.createElement(RenderDropdown, { id: id, button: button, context: context, componentProps: componentProps });
    }
    if (!button.tooltip)
        return React.createElement(ButtonSimple, { id: id, button: button, context: context, componentProps: componentProps });
    return (React.createElement(Tooltip, { title: button.tooltip },
        React.createElement(React.Fragment, null,
            React.createElement(ButtonSimple, { id: id, button: button, context: context, componentProps: componentProps }))));
};
