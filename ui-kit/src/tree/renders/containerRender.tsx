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
    api,
    allProps,
    antdTreeProps,
}: {
    api: IExtTreeApi;
    allProps: IExtTreeProps;
    antdTreeProps: TreeProps<IExtTreeNode>;
}): React.JSX.Element => {
    const editFormProps = usePrepareEditFormProps(api, allProps, false);
    const editGroupFormProps = usePrepareEditFormProps(api, allProps, true);
    return (
        <div className="extended-tree-container">
            <LoadingContainer isLoading={api.getIsLoading()} notHideContent={true} spinStyle={{height: '100%'}}>
                <ButtonsRowWrapper style={{display: 'flex', flexDirection: 'column', ...allProps.buttonsRowWrapperStyle}}>
                    <StickyBox style={{zIndex: 15}}>
                        <MenuRow api={api} treeProps={allProps} />
                    </StickyBox>
                    <TreeRender treeApi={api} allProps={allProps} antdTreeProps={antdTreeProps} />
                </ButtonsRowWrapper>
            </LoadingContainer>
            {!allProps.readOnly && editFormProps ? <DFormModal {...editFormProps} apiRef={api.getEditFormApi()} /> : null}
            {!allProps.readOnly && editGroupFormProps ? <DFormModal {...editGroupFormProps} apiRef={api.getEditGroupFormApi()} /> : null}
        </div>
    );
};