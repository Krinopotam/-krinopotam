import React from 'react';
import {DropdownStatus} from '@src/treeSelect/renders/dropdownStatus';

export const DropdownRender = ({
    menu,
    fetching,
    error,
    minSymbols,
    plainList,
}: {
    menu: React.ReactNode;
    fetching: boolean;
    error: string;
    minSymbols: number;
    plainList?: boolean;
}): React.JSX.Element => (
    <>
        {menu}
        <DropdownStatus fetching={fetching} error={error} minSymbols={minSymbols} plainList={plainList} />
    </>
);
