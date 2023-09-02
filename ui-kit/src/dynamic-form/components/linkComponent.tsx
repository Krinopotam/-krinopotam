/**
 * @LinkComponent
 * @version 0.0.29.7
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

import React, {useEffect} from 'react';

import {IDFormComponentProps, IDFormFieldProps} from './baseComponent';

// !used in configGenerator parsing. Don't use multi rows comments!
export interface IDFormFieldLinkProps extends IDFormFieldProps {
    /** Anchor url */
    href?: string;

    /** Anchor target */
    target?: '_blank' | '_self' | '_parent' | '_top';
}

interface IDFormLinkComponentProps extends IDFormComponentProps {
    fieldProps: IDFormFieldLinkProps
}

export const LinkComponent = ({formApi, fieldName, fieldProps}: IDFormLinkComponentProps): React.JSX.Element => {
    const value = formApi.model.getFieldValue(fieldName) as string | undefined;

    useEffect(() => {
        formApi.model.setFieldReady(fieldName, true);
    }, [fieldName, formApi.model]);

    return (
        <a href={fieldProps.href} target={fieldProps.target}>
            {value}
        </a>
    );
};