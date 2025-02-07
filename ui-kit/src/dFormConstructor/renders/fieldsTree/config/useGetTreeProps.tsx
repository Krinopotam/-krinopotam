import {IExtTreeNode, IExtTreeProps} from "@src/tree";
import {ITreeSelectApi} from "@src/treeSelect";
import {IDFormModalProps} from "@src/dFormModal";


export const useGetTreeProps = (treeApi:ITreeSelectApi, editFormProps: IDFormModalProps, dataSet: IExtTreeNode[])=>{
    return {
        apiRef: treeApi,
        defaultExpandAll: true,
        buttonsIconsOnly: true,
        draggableOrder:true,
        buttons: {update: null, clone: null, create: {tooltip: 'Добавить поле'}},
        onDelete: () => {},
        confirmDelete: false,
        editFormProps:editFormProps,
        dataSet:dataSet,
        allowDrop:(info)=>{
            console.log(info)
            return false
        }
    } satisfies IExtTreeProps;
}