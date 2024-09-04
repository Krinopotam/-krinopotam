import React, {useCallback} from 'react';
import {DropdownRender} from '@src/treeSelect/renders/dropdownRender';
import {ITreeSelectApi} from "@src/treeSelect";
import '@src/treeSelect/css/index.scss'

export const useDefaultDropdownRender = ({api}: { api: ITreeSelectApi, }) => {
    const fetchError = api.getFetchError()
    const fetching = api.getIsFetching()
    const minSymbols = api.getMinSymbols()
    const plainList = api.isDataPlainList()

    return useCallback(
        (menu: React.ReactNode) => (
            <div className={plainList ? 'tree-select-plain' : undefined}>
                <DropdownRender menu={menu} fetching={fetching} error={fetchError} minSymbols={minSymbols}
                                plainList={plainList}/>
            </div>
        ),
        [fetchError, fetching, minSymbols, plainList]
    );
};
