
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
    getItem("Other", "Item1cceec08-8955-4763-adaf-f2812cb0d60f", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item3c090bda-3f7c-4d13-860b-974a5ef281a7"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemf40e852e-c52f-4eb4-936b-067aa87977cd"),]),
    getItem("DForm", "Item8faa8a6d-1005-47d0-8ce2-18a2c48e3b91", <FolderOutlined />, [
        getItem("Validation", "Item083aab71-5251-4f06-b1e4-9c32c4e18042", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item7d458dcf-88ec-4aee-8462-ea96e023c74c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item130483af-d5d2-4dd7-9902-7d19ce4f1a1f"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item09048722-d9c2-4311-a45c-8c89f24716f4"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema03c39c9-b7c6-4bb7-8cf7-7fb550ed5d4f"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item6ea7ac05-be60-46c3-bbd5-2d6310c61c85"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item9ebec7ab-25ae-426c-8f37-f794af7f5022"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9ea56d6f-d541-431e-8026-65fa6eeea8d2"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item83ee03b4-5130-4e65-8017-7c7da0758c87"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item3c189e6b-c634-49c2-83e5-ad01911af13d"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5f7238b6-6c22-4864-8d24-a4c6658552f7"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item7f271f00-7af2-4ad4-a91b-5498de64c751"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemf1701e28-6d15-4923-a54d-a48e038bcd0e"),]),
    getItem("DForm Modal", "Item45cadc69-b3c2-4095-9f7d-36c1ddd26b63", <FolderOutlined />, [
        getItem("Async", "Item71c69586-69e9-4317-b487-61c22bdedf0b", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item22712156-bdd8-4d21-9c4a-58444e94b2d2"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item81c8b04f-ba62-4d38-856e-0fba84635a8f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemffba4cad-cf9b-4fda-a613-4286a50ca1b3"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Iteme380a5bc-51a1-4e1f-bf83-2246313b6e2b"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemdb562a57-cb03-419f-a601-13fa223157d5"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item357111af-fe41-4978-93e7-199ff4481119"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemd0756802-e1ec-42da-9198-846acab70664"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme5257c0e-cf30-4d63-982c-325c1a81900f"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itema1f81990-614a-4e1c-8d73-effb52a2fd63"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item5faf57c0-ebb6-4c1c-b848-2307ab00ea9d"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item3bf797ed-44cc-4081-83eb-1200ac428a2c"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemd69bd513-5529-4e73-9a26-cc81fe82df21"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item81f491d5-6592-4c48-a47e-a72aaa646cd3"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Iteme44425bf-1ae8-4cf3-b2b7-5ff47ee67051"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item94d4801f-bc68-4d6d-8723-5f5ef8708e4f"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item4f87c2be-6339-4d9f-aa65-3278e5c9753f"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item6cd36bc4-994a-4f0a-ab31-2c1f2b184d59"),]),
    getItem("Modal", "Item4e247404-5fdc-4a4c-8c5d-437c9abdb781", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemd7d67ce1-79c1-4433-a0ab-997e7557a77c"),]),
    getItem("Tabulator Grid", "Itemeb93a0b2-9448-482b-9475-c71569a582a2", <FolderOutlined />, [
        getItem("Async", "Itema1c514b4-1784-4eb7-bff0-edef12b78051", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item110b9e29-1050-4c95-b5dc-b97ece86abfd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item1906bbba-9f24-48dd-9598-608a4ccbd81e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemcf05e7ac-24b2-4120-95a9-4f93b2582b3c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6da2eb96-2bf1-496a-a7b0-af6ddec92fe7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item059ab017-194b-4dcd-b608-b830ce56a554"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item220a4fe8-9018-4763-96fa-e31bfb8138e2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item36b26db8-684c-4b1b-926a-231840b963e3"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item27a2e6a4-dd43-471f-94bf-662fa1330850"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemae6b842c-c828-48b8-bf50-20c848b714eb"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema036bf69-9236-4731-a00d-e81f3865e5a7"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item5d585fcf-1d23-4640-871d-ed52c2a76b49"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item4bd16736-8069-4237-a25e-fa1228e30e53"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemce28dcab-b376-4daf-9c92-eb2c4f9e8bb5"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb959f25c-3da4-4fd0-bd77-19248e0a0df5"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item66eea5b6-b886-4bad-ab56-796eda3425ff"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item176c7e31-0eb2-4862-b50f-22b5807847f1"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item4800fd3f-e73f-43e6-9924-5f7b21358490"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item717608f0-6f14-4318-88d7-4af24bca6406"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item313e9f12-abb3-43af-a0d8-64862878e1e8"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemce5d6d0a-d9bf-4179-83de-bbe2b0323bc8"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item06444fea-576c-4677-ba4e-2b84caa4063f"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemeaecfc4d-5e87-4db2-9f33-2784ac3dabad"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item9cea44ae-9cdf-4eb1-bdf2-c89e8a87522b"),]),
    getItem("Tools", "Item6ae451c7-2942-466c-a20a-b5931e068b7f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item018bc584-341f-49bc-bdec-61d1a784acae"),]),
    getItem("Tree Select", "Item365d58ab-4d25-4f60-bc5d-b0fa1ba69b2f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itema37b9d1d-5c37-4209-82f9-1d5c88c77aa2"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item35ab4eb1-728a-4bf9-8320-0ef9de6b0e6f"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item2b05b327-5fd2-4ee0-9bed-b2401e4d1982"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item427e0aef-55f5-4e56-a00d-8e6e9366c76e"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemdfb698de-3f73-4297-86b4-a4b134688371"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemf6b8446a-7493-4d69-bd91-db3ac69aabb7"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item1ac5e0dc-4d6e-4f5b-a730-a50e00d776a2"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item14d61dcc-48d9-49d0-b488-ab03bfc7653f"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item535967b1-81d7-4e5b-bb72-32486838fc2b"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item9740ce5a-f5b5-4c2b-947c-6702374f5193"),]