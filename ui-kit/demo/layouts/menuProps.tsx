
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
    getItem("DForm", "Item910603df-16d6-4736-b6b7-bb9c6f0f050f", <FolderOutlined />, [
        getItem("Validation", "Item225699c2-0cd5-460a-ac3a-5ea1f32d798b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item2cf90368-e7fc-4c58-accf-64c3edd97cca"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item0ab5b91f-a249-420a-9a2f-c4694f55f514"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item42078d47-36ed-4af2-b284-8753075ae32b"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item356d0cbb-8a20-4fc8-b535-ff3716a56610"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item540b79aa-70eb-4914-8544-5c3fae16a4f5"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item082005f5-5c8a-4985-b996-a0de86ceecbe"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item99de6eef-ac76-4c94-9203-1ae8ee9f7a41"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item50f0eed7-f6ea-424f-bd5c-599f54ea8606"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item58b4e6d7-a6b1-4fd3-ab5e-79139d511fcc"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemfd5d53f1-d44d-49a8-9893-7fd6850430a8"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item24ae2d9a-7c44-4de0-b251-a4fa44406084"),]),
    getItem("DForm Modal", "Item886ad8e4-9dca-4a41-898a-839cd6711126", <FolderOutlined />, [
        getItem("Async", "Item92039aaf-5f7c-4b42-aab3-f46336e00265", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item07c7d52e-e2e3-465e-b94d-1344a92a9bad"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemb0c56cfe-7b2f-4049-bd35-2d1f4c34d7f1"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item74fd9b42-40b7-4bc1-9b53-3646fe09346f"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemba9c8088-1af4-4a3b-bea4-f0b4a39cd500"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Iteme3b616da-9652-48b9-bf0e-e9fb457a9ccb"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item9f66d5c5-5a3d-4325-a5d1-fce2fc811e7e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item8a3ad3c4-e5d6-493d-b382-1a8677c3e784"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item70e0f566-8308-4040-adaa-4a8012c06ea1"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item1f9fd760-8ffa-4113-9a24-7f6ca07e663e"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item7fb08837-d6d8-4852-aad1-2a33e4f94b1b"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item24feda31-1744-4e08-84d2-e78b6d1072f4"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemb0d02932-9196-41a5-a670-dd8244a165b2"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemf4785d9d-92e0-483f-9f4d-5d1bbe543183"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7c438e28-b620-4ac4-8ad5-6b5c5c5a58a1"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item5a5936f5-1243-44a3-93b7-a41ac85073cf"),]),
    getItem("Tabulator Grid", "Itemfa1114b2-a332-4dbf-91a7-e1f1b93a09ad", <FolderOutlined />, [
        getItem("Async", "Item95771186-2053-494f-8081-a2d5fa93d8da", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemcf90ab79-a7c4-4c9c-88dc-889ab36f3b4d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item1331748a-6350-4819-a8b7-ce44931ce921"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemfaed29ba-be07-48b1-a453-8a61c828ee97"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item03cba456-a38e-4fa4-8b1b-2b0d007d359a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item1e7bfdd6-4cdf-4916-adb0-95e6797b70c2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item1807ae07-c8a6-4abe-b09c-9d998f265bf1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item07323020-5dd1-4840-83c6-08801323f948"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item7b65d65a-2d01-4002-80f6-46c6b33a37a9"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemf8d68e72-f666-4031-83f9-2de1f3e7dcd8"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item1768daa9-8598-4f13-a36d-6808902bbd9e"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item4339041e-22d7-4a57-9343-b318782f66b1"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item934f04b9-ab01-4fba-bf6e-cfbdcecb2434"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item3743302a-b0b9-4663-a3ec-2620cc19a477"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item6d62c218-ecc4-4575-94f5-56c14c8f19f9"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item51118a04-064f-4c74-8f5b-e1c0d112f3f7"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item006c8d33-6fa2-44f7-ae18-3860464c86eb"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item3f8906cd-6f72-4b77-9742-a53623fde1ea"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item9e770a57-1e7c-4831-975b-10ed8af87a54"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itema14f0f7f-c8d5-4ba3-af62-832e0d662360"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item67ca39c1-baa6-4e26-bb34-8061546d6dea"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Iteme559949c-4201-42dc-a873-ae21305e0d78"),]),
    getItem("Tools", "Item6d7b1075-e34b-4c3c-a551-6728e5cb10df", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item765d3e9f-e69e-468e-a3ad-dbe84c98c273"),]),
    getItem("Tree Select", "Item78b1d3bc-9902-4606-a72c-a2e126beaf95", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item41b6d111-2674-472a-92f4-76209e09f28f"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item834d8aa9-1862-414b-91db-441f36e5acd0"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemb27d4dd5-a034-4765-8a22-e97d0b444c03"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item4b01ca4d-a84a-4c26-a936-c5067f2e45ce"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item2381657c-e873-4981-93e7-bb6d89146c80"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item75f9e898-ca21-4e28-944b-c9c20935480e"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item09399c86-c02e-4d2c-a7c2-c5abfed8ad73"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item631a0f83-6bb1-4af1-b0e1-c510b8c31375"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item09e2e1db-90f6-4399-bec3-8d1bbde15a46"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itema87fdc36-d293-44a7-98f7-afa7a67307bb"),]