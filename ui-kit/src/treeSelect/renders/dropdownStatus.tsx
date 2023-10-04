import {Spin} from 'antd';
import React from 'react';

export const DropdownStatus = ({fetching, error, minSymbols}: {fetching: boolean; error: string; minSymbols: number}): React.JSX.Element => {
    if (minSymbols) return <MinSymbols minSymbols={minSymbols} />;
    if (fetching) return <Fetching />;
    if (error) return <Error error={error} />;
    return <></>;
};

export const MinSymbols = ({minSymbols}: {minSymbols: number}): React.JSX.Element => {
    return <div style={{paddingLeft: '30px', fontSize: '12px'}}>Введите как минимум {minSymbols} симв.</div>;
};

const Fetching = (): React.JSX.Element => {
    return (
        <div style={{paddingLeft: '30px', fontSize: '12px'}}>
            <Spin size="small" /> загрузка...
        </div>
    );
};

const Error = ({error}: {error: string}): React.JSX.Element => {
    return (
        <div role="alert" style={{paddingLeft: '30px', fontSize: '12px', color: '#ff4d4f'}}>
            {error}
        </div>
    );
};
