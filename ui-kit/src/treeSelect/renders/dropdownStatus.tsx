import {Spin} from 'antd';
import React from 'react';

export const DropdownStatus = ({
    fetching,
    error,
    minSymbols,
    plainList,
}: {
    fetching: boolean;
    error: string;
    minSymbols: number;
    plainList?: boolean;
}): React.JSX.Element => {
    if (minSymbols) return <MinSymbolsStatus minSymbols={minSymbols} plainList={plainList} />;
    if (fetching) return <FetchingStatus plainList={plainList} />;
    if (error) return <ErrorStatus error={error} plainList={plainList} />;
    return <></>;
};

export const MinSymbolsStatus = ({minSymbols, plainList}: {minSymbols: number; plainList?: boolean}): React.JSX.Element => {
    return <div style={{paddingLeft: !plainList ? '30px' : '8px', fontSize: '12px'}}>Введите как минимум {minSymbols} симв.</div>;
};

const FetchingStatus = ({plainList}: {plainList?: boolean}): React.JSX.Element => {
    return (
        <div style={{paddingLeft: !plainList ? '30px' : '8px', fontSize: '12px'}}>
            <Spin size="small" /> загрузка...
        </div>
    );
};

const ErrorStatus = ({error, plainList}: {error: string; plainList?: boolean}): React.JSX.Element => {
    return (
        <div role="alert" style={{paddingLeft: !plainList ? '30px' : '8px', fontSize: '12px', color: '#ff4d4f'}}>
            {error}
        </div>
    );
};

export const NotFound = ({
    fetching,
    error,
    minSymbols,
    plainList,
}: {
    fetching: boolean;
    error: string;
    minSymbols: number;
    plainList?: boolean;
}): React.JSX.Element => {
    if (minSymbols || fetching || error) return <></>;
    return <div style={{paddingLeft: !plainList ? '30px' : '8px', fontSize: '12px'}}>Данные отсутствуют</div>;
};
