import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {IExtTreeNode, IExtTreeProps, INodePosition} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import {useContext} from 'react';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';

export const useGetTreeProps = (treeApi: ITreeSelectApi, editFormProps: IDFormModalProps, dataSet: IExtTreeNode[]) => {
    const {setFormProps} = useContext(FormPropsContext);
    const {formInfo} = useContext(FormInfoContext);

    return {
        apiRef: treeApi,
        defaultExpandAll: true,
        autoExpandParent: true,
        defaultExpandParent: true,
        buttonsIconsOnly: true,
        draggableOrder: true,
        buttons: {
            update: null,
            clone: null,
            create: {tooltip: 'Add field'},
            delete: {
                tooltip: 'Remove the field',
                onDisabledCheck: (_btName, _button, node) => {
                    const componentInfo = node?.['fieldInfo'] as BaseComponentInfo;
                    return !componentInfo?.getParent();
                },
            },
        },
        confirmDelete: false,
        editFormProps: editFormProps,
        dataSet: dataSet,
        onDelete: node => {
            const componentInfo = node['fieldInfo'] as BaseComponentInfo;
            if (!componentInfo.getParent()) return false;
            componentInfo.removeFromTree();

            const formProps = formInfo.toFormProps();
            setFormProps(formProps, formPropsToSource(formProps), 'fieldsTree');
        },
        allowDrop: info => {
            const dragNode = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropNode = info.dropNode['fieldInfo'] as BaseComponentInfo;
            const dropPosition = info.dropPosition; //1 - below the drop node, 0 - inside drop node, -1 - above the drop node (only for root)

            const targetNode = dropPosition === 0 ? dropNode : dropNode.getParent();

            return (
                !!targetNode &&
                (targetNode.canHaveChildren() === true || targetNode.canHaveChildren() === dragNode.CODE) &&
                (dragNode.shouldHaveParent() === true || dragNode.shouldHaveParent() === targetNode.CODE)
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

            const formProps = formInfo.toFormProps();
            setFormProps(formProps, formPropsToSource(formProps), 'fieldsTree');
        },
    } satisfies IExtTreeProps;
};
