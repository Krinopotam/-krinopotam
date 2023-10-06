import React from "react";
import {Divider, Tooltip} from "antd";
import {IButtonRowProps, IFormButton} from "@src/buttonsRow";
import {ButtonSimple} from "@src/buttonsRow/components/buttonSimple";
import {ButtonDropdown} from "@src/buttonsRow/components/buttonDropdown";

export const ButtonRender = ({
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

    if (button.type === 'element') {
        if (button.tooltip) return <Tooltip title={button.tooltip}>button.title</Tooltip>
        else return <>button.title</>;
    } else if (button.type === 'divider') return <Divider type='vertical' plain={true}/>;


    if (button.children && Object.keys(button.children).length) {
        return <ButtonDropdown id={id} button={button} context={context} componentProps={componentProps}/>
    }

    if (!button.tooltip) return <ButtonSimple id={id} button={button} context={context} componentProps={componentProps}/>;

    return (
        <Tooltip title={button.tooltip}>
            <>
                {/*Popover and tooltip has a bug: they are not displayed for custom components if they are not in a frame (<></>) */}
                <ButtonSimple id={id} button={button} context={context} componentProps={componentProps}/>
            </>
        </Tooltip>
    );

};

