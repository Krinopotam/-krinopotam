
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
    getItem("DForm", "Item60db8e56-7792-4bf6-9e04-08b24be7c94e", <FolderOutlined />, [
        getItem("Validation", "Item5d7cb3d5-5bd2-49d1-896f-4454fb59a70a", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item84ef8877-6219-4ed3-abcf-ed308e1400e3"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item5ceae125-502e-4ffd-93e6-ed434261aca7"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item4c9c1bcb-ec2b-4958-b460-7824e8e47dcd"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item6473a55a-7662-404b-b6e4-d34f58aef797"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item603f3f7a-9257-4847-ad36-d000fc874aa1"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item15f8a5a8-1c4a-4c2d-8133-83aac87605f3"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item8fabc791-82c7-466f-a4bb-7359260aa1ae"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item3c38ba97-8494-4798-ba36-ab1a6cf07c39"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item293c1249-c3ac-4842-adae-943334a56bed"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item16e80fdc-00db-47b2-8d9b-0c8410f2bb89"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemec48a72a-58c4-47c4-bae5-f1fd7f3e446a"),]),
    getItem("DForm Modal", "Item47f964f2-0cd2-4ab2-8921-cc80308d1991", <FolderOutlined />, [
        getItem("Async", "Item0524d5f9-c88c-48fd-91d3-a2c89aae122c", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item615c6bc0-2ec0-49f9-ac15-edccdbd09452"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item70533198-360e-4a31-bd3e-d557dcef548c"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemed6a3383-4829-4e99-be61-90c85b798f59"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item082e84d9-a092-4383-8cb8-f7323b70c8ca"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item9a43250b-efc8-4c9b-9a6e-00b4b5aed957"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item394da43d-6c49-40b3-aff5-91cdea2a83bf"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itema7175532-86db-4056-bd07-80a5b61427b9"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemde5dfff3-a411-4929-9036-2544ebd2f71e"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item53c0fe29-b0ae-4fdb-8454-3db32c97fb83"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item5a1ca217-1418-4ff3-98dd-8e642848481d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item49bf65a9-f95d-4431-9996-d47460972a6b"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemae7566a1-40be-4fe6-9b9f-fc098c6cf25b"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf7415b4c-ac16-4132-a1d6-a2d5a0bfed46"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemc1091bba-1aae-4d0c-9b5e-4abbd4458766"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item774a8e89-11f2-488b-aa68-2a7e11403329"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item1553d4ae-3caf-4ac6-b014-44e0cb6234d2"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item00d1aa94-1c6d-41ea-84cd-398db1e7658e"),]),
    getItem("Modal", "Item5f0c76fd-008f-4adc-93ad-daf0607c936d", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item15f4543c-1578-40a4-9c2a-a833db22168c"),]),
    getItem("Tabulator Grid", "Item8e5d4d7a-384e-4889-88f0-275adf878569", <FolderOutlined />, [
        getItem("Async", "Item399ce5b4-851d-4f2c-b447-3605bae821d2", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item71a3f20d-9237-4444-9991-7622a1fb52e5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item9fd8fa68-9d7d-4fa9-93ef-0ff2c6d86e7b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemc03306ff-d0e0-484d-a3ee-ec8b0f700950"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item904d72f8-7175-48ff-b703-277c339d8a5d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item727c2637-b020-46c7-93ac-ed2c86b5b1a4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item8811f758-0ef2-4190-bcf1-3bcafa8efb3f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd5bf6831-75f1-4202-b2ba-63a4a327be04"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Iteme2d7dfc3-9e52-45e4-bc47-6e67534f4dca"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item963ceb2e-b133-470f-aa8b-9e18409cfe7d"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemc5ccc810-f2d1-41b3-800b-bbfe9fd8f2b7"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item3478c46f-afc3-4c80-961b-a84d2f91fe82"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemce812492-99a9-433c-9852-bc3ad99be4f6"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item68a2e836-fce3-4dde-804a-30c6c8aea05f"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Iteme5fe1b67-cd1a-46b2-9dc8-86411ea98fa0"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item8eb31e88-4d7b-45d3-82bf-b84c82d63b07"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item10fc09ae-cb73-4276-809a-b07c85924022"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Iteme8f18899-9e81-4568-942e-723e733fa4d6"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item04187b92-8d63-491e-be42-f2aff13427f5"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item8b7c14db-c363-4a5c-b04b-53e1d20533d6"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item02fa1ff7-b541-48aa-aabd-a2e6122fe485"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5379f049-302d-4552-ba45-51e43e474716"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itembd9794ba-941f-46e0-b672-53768f2823b5"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item6b01426e-239c-4af5-83f4-969a6d4271ae"),]),
    getItem("Tools", "Item6802b587-e008-41e4-9268-e5d9316fa255", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item75014996-a511-4db6-8fe3-d6c58c8dbcea"),]),
    getItem("Tree Select", "Itemf1e4ae65-8859-4316-adf2-fa417f066ef9", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itembb1da318-76f3-4a3e-abec-36af514074ba"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemb8545331-ad2c-45a3-b664-b177dc7cd2b9"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item2698baff-9438-41ce-bfee-862f95b79d96"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item7de88385-4092-4863-bc5b-33a0f16dc430"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item5091fae9-91e7-49cf-8fc2-27fc123ae857"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item1e78158f-e617-417e-be8f-462fe1e0f3b6"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Iteme5ca974c-b95b-433a-839e-7be3bd0672c0"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item94936b36-c8e8-4423-b428-8a50c435d37e"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item216506de-ff47-447c-8eec-ca5650c90b3e"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item534a01db-6244-4218-93a0-4f24c8166028"),]