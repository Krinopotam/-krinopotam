import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {IExtTreeNode, IExtTreeProps, INodePosition} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import React from 'react';

export const useGetTreeProps = (
    treeApi: ITreeSelectApi,
    formInfo: FormInfo,
    editFormProps: IDFormModalProps,
    dataSet: IExtTreeNode[],
    setRerenderTree: React.Dispatch<React.SetStateAction<object>>,
    setFormProps: React.Dispatch<React.SetStateAction<object>>
) => {
    return {
        apiRef: treeApi,
        defaultExpandAll: true,
        buttonsIconsOnly: true,
        draggableOrder: true,
        buttons: {update: null, clone: null, create: {tooltip: 'Добавить поле'}},
        onDelete: () => {},
        confirmDelete: false,
        editFormProps: editFormProps,
        dataSet: dataSet,
        allowDrop: info => {
            const dragNode = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropNode = info.dropNode['fieldInfo'] as BaseComponentInfo;
            const dropPosition = info.dropPosition; //1 - below the drop node, 0 - inside drop node, -1 - above the drop node (only for root)

            const targetNode = dropPosition === 0 ? dropNode : dropNode.getParent();

            console.log(dragNode.mustHaveParent() === true || dragNode.mustHaveParent() === targetNode?.CODE, dragNode, targetNode)
            return (
                !!targetNode &&
                (targetNode.canHaveChildren() === true || targetNode.canHaveChildren() === dragNode.CODE) &&
                (dragNode.mustHaveParent() === true || dragNode.mustHaveParent() === targetNode.CODE)
            );
        },
        onDrop: info => {
            let pos: INodePosition = 'insideTop';
            if (info.dropToGap) pos = info.dropPosition < 0 ? 'above' : 'below';
            const dragNode = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropNode = info.node['fieldInfo'] as BaseComponentInfo;

            if (!dropNode || !dragNode.getParent()) return;

            dragNode.removeFromTree();
            if (pos === 'insideTop') dropNode.addChild(dragNode, undefined, 'top');
            else if (pos === 'below') dropNode.getParent()?.addChild(dragNode, dropNode, 'below');
            else if (pos === 'above') dropNode.getParent()?.addChild(dragNode, dropNode, 'above');
            setRerenderTree({});
            setFormProps(formInfo.toFormProps());
        },
    } satisfies IExtTreeProps;
};
