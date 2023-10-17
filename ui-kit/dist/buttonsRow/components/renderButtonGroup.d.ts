import React from "react";
import { IButtonRowProps, IFormButtons } from "../../buttonsRow";
export declare const RenderButtonGroup: ({ buttons, position, context, componentProps, }: {
    buttons?: IFormButtons | undefined;
    position: 'left' | 'center' | 'right' | undefined;
    context?: unknown;
    componentProps: IButtonRowProps;
}) => React.JSX.Element | null;
export default RenderButtonGroup;
