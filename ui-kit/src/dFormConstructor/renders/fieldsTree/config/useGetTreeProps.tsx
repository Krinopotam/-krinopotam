import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {IExtTreeNode, IExtTreeProps, INodePosition} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import {useContext} from 'react';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {FormSourceContext} from "@src/dFormConstructor/context/formSourceProvider";
import {formPropsToSource} from "@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource";

export const useGetTreeProps = (treeApi: ITreeSelectApi, formInfo: FormInfo, editFormProps: IDFormModalProps, dataSet: IExtTreeNode[]) => {
    const {setFormProps} = useContext(FormPropsContext);
    const {setSource} = useContext(FormSourceContext);

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

            const formProps = formInfo.toFormProps()
            setFormProps(formInfo.toFormProps(), 'fieldsTree');
            setSource(formPropsToSource(formProps), 'fieldsTree')
        },
        allowDrop: info => {
            const dragNode = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropNode = info.dropNode['fieldInfo'] as BaseComponentInfo;
            const dropPosition = info.dropPosition; //1 - below the drop node, 0 - inside drop node, -1 - above the drop node (only for root)

            const targetNode = dropPosition === 0 ? dropNode : dropNode.getParent();

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

            const formProps = formInfo.toFormProps()
            setFormProps(formInfo.toFormProps(), 'fieldsTree');
            setSource(formPropsToSource(formProps), 'fieldsTree')
        },
    } satisfies IExtTreeProps;
};
