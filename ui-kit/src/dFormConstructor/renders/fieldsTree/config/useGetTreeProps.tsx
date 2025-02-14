import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {IExtTreeNode, IExtTreeProps, INodePosition} from '@src/tree';
import {ITreeSelectApi} from '@src/treeSelect';
import {useContext, useEffect} from 'react';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {getNodeByFieldId} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldNode';

export const useGetTreeProps = (treeApi: ITreeSelectApi, editFormProps: IDFormModalProps, dataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]) => {
    const {setFormProps} = useContext(FormPropsContext);
    const {formInfo} = useContext(FormInfoContext);
    const {setFieldId} = useContext(SelectedFieldContext);

    useTranferSelection(treeApi, dataSet);

    //useClearDeprecatedSelection(treeApi, dataSet);

    return {
        apiRef: treeApi,
        defaultExpandAll: true,
        autoExpandParent: true,
        defaultExpandParent: true,
        buttonsIconsOnly: true,
        draggableOrder: true,
        selectable: true,
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
        onSelect: selected => {
            const key = selected?.[0]?.toString();
            const node = treeApi.getNode(key);
            const field = node?.fieldInfo as BaseComponentInfo | undefined;
            setFieldId(field?.getId());
        },
    } satisfies IExtTreeProps;
};

/** After dataSet changed we should check, is selected node still exist in new dataSet and reselect or deselect it */
const useClearDeprecatedSelection = (treeApi: ITreeSelectApi, newDataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]) => {
    const {setFieldId} = useContext(SelectedFieldContext);
    useEffect(() => {
        const key = treeApi.getActiveNode()?.id;
        if (!key) return;
        const node = treeApi.getNode(key, newDataSet);
        const field = node?.fieldInfo as BaseComponentInfo | undefined;
        setFieldId(field?.getId());
    });
};

/** Trying to keep selection
 * Usually DataSet populated by new nodes with new NODE_ID.
 * We need to find old selected node in new dataSet (by field id and code) and reselect it
 */
const useTranferSelection = (treeApi: ITreeSelectApi, newDataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]) => {
    const {setFieldId} = useContext(SelectedFieldContext);
    useEffect(() => {
        const selNode = treeApi.getSelectedNodes()?.[0] as IExtTreeNode<{fieldInfo: BaseComponentInfo}> | undefined;
        if (!selNode) return;
        console.log(selNode);
        const nodeInNewDataSet = getNodeByFieldId(newDataSet, selNode.fieldInfo.getId(), selNode.fieldInfo.CODE);
        if (nodeInNewDataSet) {
            treeApi.selectNode(nodeInNewDataSet.id);
            setFieldId(nodeInNewDataSet.fieldInfo.getId());
        } else {
            treeApi.selectNode(undefined);
            setFieldId(undefined);
        }
    });
};
