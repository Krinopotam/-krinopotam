import React, {useMemo} from 'react';
import ButtonsRowWrapper from '../../buttonsRow/components/buttonsRowWrapper';
import {MenuRow} from '@src/treeSelect/renders/menuRow';
import {DropdownStatus} from '@src/treeSelect/renders/dropdownStatus';
import {ITreeSelectApi} from '@src/treeSelect';

export const DefaultDropdownRender = ({treeApi, children}: {treeApi: ITreeSelectApi; children: React.ReactNode}): React.JSX.Element => {
    return useMemo(() => {
        const fetchError = treeApi.getFetchError();
        const fetching = treeApi.getIsFetching();
        const minSymbols = treeApi.getMinSymbols();
        const plainList = treeApi.isDataPlainList();
        const allProps = treeApi.getProps();

        return (
            <div className={plainList ? 'tree-select-plain' : undefined}>
                <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column', ...allProps.buttonsRowWrapperStyle}} noKeepFocus>
                    <MenuRow treeApi={treeApi} treeProps={allProps} />
                    {children}
                    <DropdownStatus fetching={fetching} error={fetchError} minSymbols={minSymbols} plainList={plainList} />
                </ButtonsRowWrapper>
            </div>
        );
    }, [treeApi, children]);
};
