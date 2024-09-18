import {Collapse, Typography} from 'antd';
import React from 'react';
import {IError} from '@krinopotam/service-types';
import {IsDebugMode} from '@krinopotam/common-hooks';

const {Text} = Typography;

interface IErrorMessageProps {
    error: IError;
    extraMessage?:string
}

export const ErrorMessage = ({error, extraMessage}: IErrorMessageProps): React.JSX.Element => {
    return (
        <>
            <Text strong>{error.message}</Text>
            {extraMessage && <Text>{extraMessage}</Text>}
            {error.stack && IsDebugMode() && <Collapse items={[{key: '1', label: 'Stack', children: <p>{error.stack}</p>}]} />}
        </>
    );
};
