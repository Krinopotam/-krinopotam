import React from 'react';
import ButtonsRowWrapper from '../../buttonsRow/components/buttonsRowWrapper';
import {MenuRow} from '@src/treeSelect/renders/menuRow';
import {DropdownStatus} from '@src/treeSelect/renders/dropdownStatus';
import {ITreeSelectApi} from '@src/treeSelect';

/** There is no point in memoizing, since children is constantly updated, even when you hover over the dropdown */
export const DefaultDropdownRender = ({treeApi, children}: {treeApi: ITreeSelectApi; children: React.ReactNode}): React.JSX.Element => {
    const plainList = treeApi.isDataPlainList();
    const allProps = treeApi.getProps();

    return (
        <div className={plainList ? 'tree-select-plain' : undefined}>
            {allProps.editFormProps || allProps.editGroupFormProps ? <ButtonsWrapper treeApi={treeApi}>{children}</ButtonsWrapper> : children}
        </div>
    );
};

const ButtonsWrapper = ({treeApi, children}: {treeApi: ITreeSelectApi; children: React.ReactNode}): React.JSX.Element => {
    const fetchError = treeApi.getFetchError();
    const fetching = treeApi.getIsFetching();
    const minSymbols = treeApi.getMinSymbols();
    const plainList = treeApi.isDataPlainList();
    const allProps = treeApi.getProps();
    return (
        <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column', ...allProps.buttonsRowWrapperStyle}} noKeepFocus>
            <MenuRow treeApi={treeApi} treeProps={allProps} />
            {children}
            <DropdownStatus fetching={fetching} error={fetchError} minSymbols={minSymbols} plainList={plainList} />
        </ButtonsRowWrapper>
    );
};
