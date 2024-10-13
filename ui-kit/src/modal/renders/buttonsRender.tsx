/**
 * @RenderFormFooter
 * @version 0.0.28.83
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import {IButtonProps} from "@src/button/button";
import {IButtonsRowApi, IFormButtons} from "@src/buttonsRow";
import {ButtonsRow} from '@src/buttonsRow/buttonsRow';

import React from 'react';

interface IFormButtonsRenderProps {
    /** form buttons collection */
    buttons?: IFormButtons;

    /** Form buttons api */
    buttonsApi?: IButtonsRowApi;

    /** form type */
    colorType?: IButtonProps['color'];

    /** buttons container style */
    containerStyle?: React.CSSProperties;

    /** allow select buttons using arrows keys */
    arrowsSelection?: boolean;

    /** Any context. Will use in buttons callbacks  */
    context?: unknown;
}

export const ButtonsRender = ({
    colorType,
    buttons,
    buttonsApi,
    containerStyle,
    arrowsSelection,
    context,
}: IFormButtonsRenderProps): React.JSX.Element | null => {
    if (!buttons || Object.keys(buttons).length === 0) return null;
    return (
        <div style={containerStyle}>
            <ButtonsRow buttons={buttons} apiRef={buttonsApi} color={colorType} arrowsSelection={arrowsSelection} context={context} />
        </div>
    );
};
