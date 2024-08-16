
import React from "react";
import {MenuProps} from "antd";
import {FolderOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const menuItems: MenuProps["items"] =[
    getItem("DForm", "Item1129e548-4dd6-4f4a-a5dd-a8cfaf74f281", <FolderOutlined />, [
        getItem("Validation", "Itemf16af3c4-2223-4b9b-b89b-b7d909c124c9", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item920105fd-2a15-43e3-bfcf-ed216e82fcd7"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item772cd5c1-e055-47eb-a40e-0cb224de31c0"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc8d697a7-44a5-48df-b28d-edd120b5d4cd"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item01407b1e-c54a-41bb-8d13-a5a811eee7aa"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemd31dfa35-dc2b-453f-a159-5fd01d7869b5"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item0c582c63-07f6-4be7-a552-ae6a0dee621f"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item5d7dd7d3-fd4b-4cf4-ab15-f45ed139b686"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item993dc80b-ce21-4249-8b1e-1da932e98eaa"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2fd41abb-67b8-476f-9bc5-24c08382b5c3"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item1017eaad-1765-4c85-97f7-7078fbef7fea"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item9c66deac-9905-40d8-8efe-57f54630f91d"),]),
    getItem("DForm Modal", "Item1d48b217-ccab-4dc9-8d4d-f09914998a8a", <FolderOutlined />, [
        getItem("Async", "Item98dfc4d0-acf3-4a7d-aa7f-347dee04447d", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item9e67c263-17b3-4b08-9ebb-723174c75fc7"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itema946ca74-8c90-4152-94e8-bffd8342b7d0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd4dce338-9c77-4bf9-b307-b2ae92be9f7d"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item7d63b767-0f1c-4c85-ade2-17482ba76bf2"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item348a2e5a-da19-4524-ab64-1cb5332eb473"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemaeec7b56-7be8-4b8a-a727-8b8678b63598"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemcb546a7a-011e-44b0-9268-fdacef5b6b75"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemaff2d8df-ff0b-47eb-af7d-c5eac5b82732"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9331c984-9374-44ab-b864-53f98465c56c"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item08347b2e-23a4-4244-99f2-dc45e8419fab"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item5c70ecad-63b2-4201-b286-acc611790cb1"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemc8dc2cb6-4f03-4d4b-be4c-b18a93e9b9c6"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item2f367f0a-38a0-4a76-b195-bedf9706c5ea"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item01ecb662-4991-468f-ab86-8d1485e383eb"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd110b59c-ad8d-471a-be5b-6b26025be7e1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2c5cac5a-3f4e-4448-8047-70476352c93a"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item0fc4fdf0-4acb-4345-8e29-27004859634d"),]),
    getItem("Modal", "Item92c9ab50-fcd8-4d8c-bcf3-71b7f42a48c8", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item88bf2d40-6834-4a70-9189-9bc95eb60a8b"),]),
    getItem("Tabulator Grid", "Item99c04a92-e99d-4628-a43d-d1ca2efe8518", <FolderOutlined />, [
        getItem("Async", "Itemdf1ad3d2-06b5-4144-a4eb-0db80ea57bf4", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item85029f7a-7c13-44cb-b263-226b72877265"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item63c10c5d-33a3-450e-85bb-cf5d282f9c5a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Iteme7c6ce12-d80e-4048-a84a-acd78f7ecfcf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemf0291ceb-3613-42be-9963-225748a62707"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item30604a23-6754-4da7-8d1c-49ecc5926969"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item63ace78a-8410-48f2-9aa2-ddbb8080d8ad"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item810460a4-b6c2-4107-b016-8f974103f1c5"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item7fb09056-2ae8-44fe-9fb3-dfbc274c4096"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item7d872204-ce8e-42eb-94a0-f5e315b70936"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3ac055b1-89e0-427a-a398-4036fbb1eb31"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item26326db7-80a6-452f-98c7-e26e0f5e7106"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemc50e639a-ec9e-434e-8afd-3acf9b3bf8ae"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itembce8323b-86de-4cef-b807-1c12a66c0e69"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item2dc13770-2084-4b1c-ab2e-acf88a03e617"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item7c535476-4988-4017-b9fd-6644a1d5ad9e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item2c71db2a-0d57-49dd-95ca-6fc3b38f0bf7"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item7ba8478c-cda0-4367-a4b9-a5808d9b43b8"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item79d64916-087b-42b0-8473-45ebe65e1a1f"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item38b719d8-c3dd-4bab-a4e9-ffab829d4d3d"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item1c1fdbf9-755d-4348-89f4-46aa263f134d"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itembd99500c-fd45-4a09-bb07-d76d0d44fb73"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item4bb9d719-f1c5-4834-91d4-803eace55cf7"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item66b38459-cf7f-49da-a9d4-7faebf81eb55"),]),
    getItem("Tools", "Item38098170-2f37-4026-a646-2a448160d24c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item12bc7d36-8c9b-4ab9-a37a-159ea09d7e6b"),]),
    getItem("Tree Select", "Itemd890c375-6ec9-4832-b95c-5afabe85b91a", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Iteme97b8fe7-fc21-4107-ada9-d8a45a0f6402"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemaea00a12-bb4d-4337-80fc-40c8d03b3968"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item458624d1-96d3-43dd-bef7-0e193ff459ba"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item8d2503b7-2db9-4644-a26f-0eb6b4dfef99"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item8d5e2fe0-e0d2-4bbb-869a-6808a836b7ed"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item66ed9e87-7d59-4ebc-8381-d0ed3ffe5e36"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item3b302125-e9ac-4222-a317-594c8089514f"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item7df4d3c9-7f4a-4fe1-9622-d7947f5abcca"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item0ed70e25-c2b8-42a8-ae8f-9e799fb2d8f4"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item62b18490-e3c4-421a-805c-b9f2e400f717"),]