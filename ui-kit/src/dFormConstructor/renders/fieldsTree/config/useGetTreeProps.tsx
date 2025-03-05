import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {IDFormModalProps} from '@src/dFormModal';
import {IExtTreeApi, IExtTreeNode, IExtTreeProps, INodePosition} from '@src/tree';
import {useContext, useEffect, useRef} from 'react';
import {FormPropsContext} from '@src/dFormConstructor/context/formPropsProvider';
import {formPropsToSource} from '@src/dFormConstructor/renders/sourceEditor/tools/formPropsToSource';
import {FormInfoContext} from '@src/dFormConstructor/context/formInfoProvider';
import {SelectedFieldContext} from '@src/dFormConstructor/context/selectedFieldProvider';
import {getNodeByFieldId} from '@src/dFormConstructor/renders/fieldsTree/tools/getFieldNode';
import {IKey} from '@krinopotam/service-types';

export const useGetTreeProps = (treeApi: IExtTreeApi, editFormProps: IDFormModalProps, dataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]) => {
    const {setFormProps} = useContext(FormPropsContext);
    const {formInfo} = useContext(FormInfoContext);
    const {setSelectedField} = useContext(SelectedFieldContext);

    const prevDataSetRef = useRef(dataSet);
    useTransferNodesState(treeApi, prevDataSetRef.current, dataSet);
    if (prevDataSetRef.current !== dataSet) prevDataSetRef.current = dataSet;

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

            const formProps = formInfo.getProps();
            setFormProps(formProps, formPropsToSource(formProps), 'fieldsTree');
        },
        allowDrop: info => {
            const dragField = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropField = info.dropNode['fieldInfo'] as BaseComponentInfo;
            const dropPosition = info.dropPosition; //1 - below the drop node, 0 - inside drop node, -1 - above the drop node (only for root)

            const targetNode = dropPosition === 0 ? dropField : dropField.getParent();

            return !!targetNode && targetNode.canHaveChild(dragField) && dragField.canHaveParent(targetNode);
        },
        onDrop: info => {
            let pos: INodePosition = 'insideTop';
            if (info.dropToGap) pos = info.dropPosition < 0 ? 'above' : 'below';
            const dragField = info.dragNode['fieldInfo'] as BaseComponentInfo;
            const dropField = info.node['fieldInfo'] as BaseComponentInfo;

            if (!dropField || !dragField.getParent()) return;

            dragField.removeFromTree();
            if (pos === 'insideTop') dropField.addChild(dragField, undefined, 'top');
            else if (pos === 'below') dropField.getParent()?.addChild(dragField, dropField, 'below');
            else if (pos === 'above') dropField.getParent()?.addChild(dragField, dropField, 'above');

            const formProps = formInfo.getProps();
            setFormProps(formProps, formPropsToSource(formProps), 'fieldsTree');
        },
        onSelect: selected => {
            const key = selected?.[0] as IKey;
            const node = treeApi.getNode(key) as IExtTreeNode<{fieldInfo: BaseComponentInfo}> | undefined;
            setSelectedField(node?.fieldInfo);
        },
    } satisfies IExtTreeProps;
};

/** Trying to keep nodes state
 * Usually DataSet populated by new nodes with new NODE_ID.
 * We need to get old node state in new dataSet (by field id and code) and reset it
 */
const useTransferNodesState = (
    treeApi: IExtTreeApi,
    oldDataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[],
    newDataSet: IExtTreeNode<{fieldInfo: BaseComponentInfo}>[]
) => {
    const {setSelectedField} = useContext(SelectedFieldContext);
    useEffect(() => {
        /* transfer selection */
        // check if new data set already has selected node (for example, it happens when new node create)
        const alreadySelNode = treeApi.getSelectedNodes(newDataSet)?.[0] as IExtTreeNode<{fieldInfo: BaseComponentInfo}> | undefined;
        if (!alreadySelNode) {
            const oldSelNode = treeApi.getSelectedNodes(oldDataSet)?.[0] as IExtTreeNode<{fieldInfo: BaseComponentInfo}> | undefined;
            const newSelNode = oldSelNode ? getNodeByFieldId(newDataSet, oldSelNode.fieldInfo.getId(), oldSelNode.fieldInfo.CODE) : undefined;
            treeApi.selectNode(newSelNode ? newSelNode.id : undefined);
            setSelectedField(newSelNode ? newSelNode.fieldInfo : undefined);
        }

        /* transfer expanded state */
        const oldExpandedNodes = treeApi.getExpandedNodes(oldDataSet) as IExtTreeNode<{fieldInfo: BaseComponentInfo}>[] | undefined;
        const newExpandedKeys: IKey[] = [];
        if (!oldExpandedNodes) return;
        for (const node of oldExpandedNodes) {
            const newNode = getNodeByFieldId(newDataSet, node.fieldInfo.getId(), node.fieldInfo.CODE);
            if (newNode && newNode.id) newExpandedKeys.push(newNode.id);
        }
        treeApi.setExpandedKeys(newExpandedKeys);
    }, [newDataSet, oldDataSet, setSelectedField, treeApi]);
};
