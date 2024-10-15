import React from 'react';
import ButtonsRowWrapper from '../../buttonsRow/components/buttonsRowWrapper';
import {MenuRow} from '@src/treeSelect/renders/menuRow';
import {DropdownStatus} from '@src/treeSelect/renders/dropdownStatus';
import {ITreeSelectApi} from '@src/treeSelect';

/** There is no point in memoizing, since children is constantly updated, even when you hover over the dropdown */
export const DefaultDropdownRender = ({api, children}: {api: ITreeSelectApi; children: React.ReactNode}): React.JSX.Element => {
    const plainList = api.isDataPlainList();
    const treeProps = api.getProps();

    return (
        <div className={plainList ? 'tree-select-plain' : undefined}>
            {treeProps.editFormProps || treeProps.editGroupFormProps ? (
                <ButtonsWrapper api={api}>{children}</ButtonsWrapper>
            ) : (
                <>
                    {children}
                    <DropdownStatus api={api} />
                </>
            )}
        </div>
    );
};


const ButtonsWrapper = ({api, children}: {api: ITreeSelectApi; children: React.ReactNode}): React.JSX.Element => {
    const allProps = api.getProps();
    return (
        <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column', ...allProps.buttonsRowWrapperStyle}} keepFocus={false}>
            <MenuRow treeApi={api} treeProps={allProps} />
            {children}
            <DropdownStatus api={api} />
        </ButtonsRowWrapper>
    );
};
