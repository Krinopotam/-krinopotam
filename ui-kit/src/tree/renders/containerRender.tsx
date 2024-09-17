import React from 'react';
import {usePrepareEditFormProps} from '../hooks/prepareEditForm';
import {MenuRow} from './menuRow';
import {ButtonsRowWrapper} from '@src/buttonsRow/components/buttonsRowWrapper';
import {TreeRender} from '@src/tree/renders/treeRender';
import {IExtTreeApi, IExtTreeNode, IExtTreeProps} from '@src/tree/types/types';
import {LoadingContainer} from '@src/loadingContainer/loadingContainer';
import {DFormModal} from '@src/dFormModal/dFormModal';
import {TreeProps} from 'antd/es/tree/Tree';
import StickyBox from 'react-sticky-box';

export const ContainerRender = ({
    treeApi,
    allProps,
    antdTreeProps,
}: {
    treeApi: IExtTreeApi;
    allProps: IExtTreeProps;
    antdTreeProps: TreeProps<IExtTreeNode>;
}): React.JSX.Element => {
    const editFormProps = usePrepareEditFormProps(treeApi, allProps, false);
    const editGroupFormProps = usePrepareEditFormProps(treeApi, allProps, true);
    return (
        <div className="extended-tree-container">
            <LoadingContainer isLoading={treeApi.getIsLoading()} notHideContent={true} spinStyle={{height: '100%'}}>
                <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column', ...allProps.buttonsRowWrapperStyle}}>
                    <StickyBox style={{zIndex: 15}}>
                        <MenuRow treeApi={treeApi} treeProps={allProps} />
                    </StickyBox>
                    <TreeRender treeApi={treeApi} allProps={allProps} antdTreeProps={antdTreeProps} />
                </ButtonsRowWrapper>
            </LoadingContainer>
            {editFormProps && !allProps.readOnly ? <DFormModal {...editFormProps} apiRef={treeApi.editFormApi} /> : null}
            {editGroupFormProps && !allProps.readOnly ? <DFormModal {...editGroupFormProps} apiRef={treeApi.editGroupFormApi} /> : null}
        </div>
    );
};
