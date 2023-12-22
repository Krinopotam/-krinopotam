import React, {useCallback} from 'react';
import {DropdownRender} from '@src/treeSelect/renders/dropdownRender';

export const useDefaultDropdownRender = ({
    fetchError,
    fetching,
    minSymbols,
    plainList,
}: {
    fetchError: string;
    fetching: boolean;
    minSymbols: number;
    plainList?: boolean;
}) => {
    return useCallback(
        (menu: React.ReactNode) => (
            <div className={plainList ? 'tree-select-plain' : undefined}>
                <DropdownRender menu={menu} fetching={fetching} error={fetchError} minSymbols={minSymbols} plainList={plainList} />
            </div>
        ),
        [fetchError, fetching, minSymbols, plainList]
    );
};
