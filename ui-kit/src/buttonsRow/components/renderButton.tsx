import React from 'react';
import {Divider, Tooltip} from 'antd';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import {ButtonSimple} from '@src/buttonsRow/components/buttonSimple';
import {RenderDropdown} from '@src/buttonsRow/components/renderDropdown';

export const RenderButton = ({
    id,
    button,
    context,
    componentProps,
}: {
    id: string;
    button: IFormButton;
    context?: unknown;
    componentProps: IButtonRowProps;
}): React.JSX.Element | null => {
    if (!button || button.hidden) return null;

    /******** Custom element *******/
    if (button.type === 'element') {
        if (button.tooltip) return <Tooltip title={button.tooltip}>{button.title}</Tooltip>;
        else return <>{button.title}</>;
    }

    /******** Divider **************/
    if (button.type === 'divider') return <Divider type="vertical" plain={true} />;

    /******** Dropdown button ******/
    if (button.children && Object.keys(button.children).length) {
        if (button.tooltip)
            return (
                <Tooltip title={button.tooltip}>
                    <>
                        {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                        <RenderDropdown id={id} button={button} context={context} componentProps={componentProps} />
                    </>
                </Tooltip>
            );
        else return <RenderDropdown id={id} button={button} context={context} componentProps={componentProps} />;
    }

    /******** Simple button ********/
    if (!button.tooltip) return <ButtonSimple id={id} button={button} context={context} componentProps={componentProps} />;

    return (
        <Tooltip title={button.tooltip}>
            <>
                {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                <ButtonSimple id={id} button={button} context={context} componentProps={componentProps} />
            </>
        </Tooltip>
    );
};
