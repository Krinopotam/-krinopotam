import React, {useCallback} from 'react';
import {DropdownRender} from '@src/treeSelect/renders/dropdownRender';
import {ITreeSelectApi} from "@src/treeSelect";
import styles from '@src/treeSelect/css/index.module.scss'

export const useDefaultDropdownRender = ({api}: { api: ITreeSelectApi, }) => {
    const fetchError = api.getFetchError()
    const fetching = api.getIsFetching()
    const minSymbols = api.getMinSymbols()
    const plainList = api.getProps().plainList

    return useCallback(
        (menu: React.ReactNode) => (
            <div className={plainList ? styles.treeSelectPlain : undefined}>
                <DropdownRender menu={menu} fetching={fetching} error={fetchError} minSymbols={minSymbols}
                                plainList={plainList}/>
            </div>
        ),
        [fetchError, fetching, minSymbols, plainList]
    );
};
