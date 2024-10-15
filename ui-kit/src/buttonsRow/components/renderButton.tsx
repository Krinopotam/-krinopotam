import React, {useState} from 'react';
import {Divider, Tooltip} from 'antd';
import {IButtonRowProps, IFormButton} from '@src/buttonsRow';
import {ButtonSimple} from '@src/buttonsRow/components/buttonSimple';
import {RenderDropdown} from '@src/buttonsRow/components/renderDropdown';
import {useResponsive} from '@krinopotam/common-hooks';
import {RenderLink} from '@src/buttonsRow/components/renderLink';

export const RenderButton = ({
    id,
    button,
    context,
    rowProps,
}: {
    id: string;
    button: IFormButton;
    context?: unknown;
    rowProps: IButtonRowProps;
}): React.JSX.Element | null => {
    const [collapseMode, setCollapseMode] = useState(false);
    useResponsive(rowProps.responsiveBreakpoint, broken => setCollapseMode(broken));

    if (!button || button.hidden || button.type === 'hotkey') return null;

    const iconOnly = !!button.icon && (!!rowProps.iconsOnly || collapseMode);
    const tooltip = button.tooltip ?? (iconOnly ? button.title : undefined);

    /******** Custom element *******/
    if (button.type === 'element') {
        if (tooltip) return <Tooltip title={tooltip}>{button.title}</Tooltip>;
        else return <>{button.title}</>;
    }

    /******** Divider **************/
    if (button.type === 'divider') return <Divider type="vertical" plain={true} />;

    /******** Dropdown button ******/
    if (button.children && Object.keys(button.children).length) {
        if (tooltip)
            return (
                <Tooltip title={tooltip}>
                    <>
                        {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                        <RenderDropdown id={id} button={button} context={context} rowProps={rowProps} iconOnly={iconOnly} />
                    </>
                </Tooltip>
            );
        else return <RenderDropdown id={id} button={button} context={context} rowProps={rowProps} iconOnly={iconOnly} />;
    }

    /******** Link element *********/
    if (button.type === 'link') {
        if (tooltip)
            return (
                <Tooltip title={tooltip}>
                    <RenderLink {...button} />
                </Tooltip>
            );
        return <RenderLink {...button} />;
    }

    /******** Simple button ********/
    if (!tooltip) return <ButtonSimple id={id} button={button} context={context} rowProps={rowProps} iconOnly={iconOnly} />;

    return (
        <Tooltip title={tooltip}>
            <>
                {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                <ButtonSimple id={id} button={button} context={context} rowProps={rowProps} iconOnly={iconOnly} />
            </>
        </Tooltip>
    );
};
