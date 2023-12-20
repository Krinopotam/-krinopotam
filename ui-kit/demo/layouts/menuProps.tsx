
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
    getItem("DForm", "Item671391f5-dcc5-4469-b159-ad8361018e1e", <FolderOutlined />, [
        getItem("Validation", "Itemd022a422-3c09-4df0-a4b0-5e9e0467873d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item558d0730-7f19-47d5-a2bd-b3e60d67564b"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item3bfbc07e-aad4-49fb-bcbd-fb142bf117c3"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Iteme16098f4-3e1a-4eae-9384-0fb2d217cfbf"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemef369391-6f7e-481a-bd19-25a1d673fff2"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemc7cde35b-8317-404e-b894-9d553a5751e0"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item992613ce-9a33-4c1f-8627-27cb23376dae"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item5120bdcd-440a-435a-8281-de11da0f03af"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item648b59a1-6da0-4f4e-ad4c-a6da4f8daddb"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item99cc30ba-203a-4521-ad20-5a5e7e23d04a"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf449c1c7-d70c-4e42-ad53-11b69d240e61"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item92c3af30-1bef-47aa-86da-25b1a3aa1113"),]),
    getItem("DForm Modal", "Item099a0d6f-c4c8-4570-8f49-cbc0a3abd39f", <FolderOutlined />, [
        getItem("Async", "Iteme889a90b-ce31-485d-b637-e3b4e65254c4", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item5ee092c1-8e62-4b38-9e35-83aa341132fb"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item3d85f511-2086-43f2-a3cc-bc3d3ac14098"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4853d46b-1055-4286-8370-bdeef2bbee64"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item40233b21-5683-4b72-8b32-819fbf424a99"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item6e837ddb-d42a-4fd2-bd40-19961cd98ea3"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item482aecae-06c7-49bf-809e-91f3a5ebaa67"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item14f453fa-0106-4f3f-b88d-ca526e2a3bcd"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item996497d9-8d6a-40da-b506-9c194e1bf652"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item1ce6a52e-7dc4-44dc-9bca-ce3ec497eaea"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item43375e0d-4f68-4694-a3b6-abd6398306aa"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemfdb63df5-2955-471a-9ffc-54eaec37e299"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemfab532ce-90c2-4a5a-a0c8-71c34a108e3d"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item28611767-842e-4b9c-9ab0-b8a9c296fba9"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itema0453708-7d52-4275-9984-614c9b6afa11"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itema7381c2d-ff8b-4ad6-ab49-dd95cea1b12a"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item9aeea8e9-f774-40f9-ac71-786b093b792a"),]),
    getItem("Tabulator Grid", "Iteme5284918-dd8a-450e-bb62-5efdb3b9a244", <FolderOutlined />, [
        getItem("Async", "Item91e8e988-3dc2-4285-a4a6-966c16e6ca31", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item5d27c8c3-34a7-465b-b4d1-42def49da33d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemc59db9de-19d8-485d-9ba9-c084d6878f3e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item80e44fae-b766-422d-8606-ee545f60b5e0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemadb1d74a-2f39-412a-b3f7-a9d90587f56c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2b3771b8-9275-4eba-bb00-b2bf0d007be2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itema6ea64d1-8692-4fcc-9962-95dd5f008aa3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item6b724b5d-04a2-43e6-8ce3-92939111f0d0"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item83d0d72c-50f2-4f24-9c75-af83d0ccbc1d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item7ef8c0ba-331e-494c-8b03-a56540e26d8f"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item7e7288a3-003a-4658-95ec-2f6ba9f45a8b"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd33394a6-8092-4e98-aa41-e6414dcda9aa"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemec1c861c-6957-479c-90a4-a70704519033"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemad708c33-c4a0-4e32-b2b1-e3baa8f492a2"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item163f5b04-18e3-4c2e-ba8c-351d8b509ed6"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item66bec7ed-979d-4dd7-82ac-f4817625700e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item3bd50a2d-e25a-45e6-86ec-1fa76a15bf41"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item630721b3-0487-4ac4-a4bd-a32ab1979b71"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item5fe2b889-ea40-4d61-b5cc-14d6e85c3600"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemcc71f992-525b-4ea7-ada5-f472da12b118"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item9248e287-cec4-444b-ac9d-32bdb43d5549"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemde6d6e69-51f5-4f2d-b3ec-82230512326f"),]),
    getItem("Tools", "Itemcb419bc9-e6d9-4327-8fef-d063cb449f82", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemd4d53cfd-25c2-4372-a50a-f35f7847ddbf"),]),
    getItem("Tree Select", "Item0ba6d4f5-07b3-44b3-8662-38ede1ff90ca", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item8f18bf86-91d9-47ac-b975-1a27ab8eab57"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Iteme2e062a9-2abf-42f2-a550-47a82fb6a89a"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item786391ad-5730-4656-88a5-edd83ca688fe"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item84bfe0ea-86b9-4546-b37a-810424a3cdfb"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemc43a291e-5867-4d10-8579-48deccc63264"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item25c56021-3eab-4472-9546-382a1d8ddb01"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item5d4e54b3-e08f-4aa3-aa4c-43df77255324"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item7704a4c8-9999-4140-a5c4-06c122ab0edc"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item5bf867cf-d948-4ca0-85a2-3603239c37af"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9fbd536b-6e29-4fd8-8d71-41954ac0b45a"),]