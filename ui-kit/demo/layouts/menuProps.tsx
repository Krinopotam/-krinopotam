
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
    getItem("Other", "Item315e7900-df9e-449b-abaa-1d9a4a817ee0", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item5aee05f9-de48-4ac0-9b36-18bf57faa749"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Itemecdf2ca0-9674-4840-84b1-1a1c059f00ad"),]),
    getItem("DForm", "Item6b2140b4-0910-47e9-a525-2638ac52be9e", <FolderOutlined />, [
        getItem("Validation", "Item718a2c62-cb00-4582-afdb-a9ccec67e51f", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item3c972267-9924-4f8d-8f3e-e4d19645f5f6"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itema9c0267c-9b05-482f-a57c-7ff60d068263"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item2acf5205-d149-48cf-962e-362ae65e9a3b"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item9370feac-73fc-4448-9ac8-700192242bd4"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemb935a249-8131-43aa-8765-3ac4131dd2f1"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item6d3a34bf-58c0-4eb9-a232-b11de9e95340"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item9b9d2b57-27cc-4daa-954f-53490446cf1c"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itema5c28715-963a-4d6e-b1c3-8ea57ca45b51"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item15bb5490-7323-4e05-b5e5-fa84c6438aef"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item3c59b173-12a0-451d-9c1b-21eebf0da533"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemaadd8923-636f-4e2c-bcf3-0d37d756a24f"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5356e5ef-7ad9-458e-8506-a277089d13ef"),]),
    getItem("DForm Modal", "Item1e24c1ea-1391-4a6b-9e89-bb3b6386a572", <FolderOutlined />, [
        getItem("Async", "Itemb2924ee4-deed-4ec5-83e1-17025be184c0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item0dc6ae0b-8ead-4157-a9a5-a94c97d9728f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Iteme30c73ee-57e2-4e7e-bdb8-ee7af8f08a18"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemb9442fb4-fdc8-4cb5-9f62-c392edd21e4f"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4ed3195a-9a3c-4971-acf1-d88cee2b4249"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item67639d80-5d94-43fd-ba4d-2b34c6696851"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemba80f239-fb74-40e4-92f3-99b6be2d4cad"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item8f02e5d0-3dc7-4bd4-aac5-86075c3e7b0a"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itema7b53ece-7be4-4b9b-8aa6-bbd819b80309"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item789ac8ba-8a22-4111-b003-62d3799ba9d3"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item3c05c7f6-fff9-49ce-a9c0-eb709e191475"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item3916dfbe-b48b-4bbb-b277-6c6a8e9b8b0e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item7d7b0469-bb2b-4b37-9d5d-208ad4f08bc6"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item937c6027-89d7-44d0-adc9-953d84fd4b27"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemf4b992a2-f93a-4ded-8f5a-efa7daf0d57b"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item7510109d-ff84-4a45-bffc-cf34eefa76d9"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemf8013599-38c9-4948-b5d0-98cc91c035b9"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemd953f21a-a8db-4179-bb1e-233e33391280"),]),
    getItem("Modal", "Itembaae3b88-8f17-4bd9-9e4e-1f62f6475dd9", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item4988f4aa-dd40-4ab8-937a-c1f24fd342eb"),]),
    getItem("Tabulator Grid", "Item0c01d5af-0dfe-428b-9cc1-38a1ae1abc18", <FolderOutlined />, [
        getItem("Async", "Itema8a60b0e-0532-4356-9a32-ef642abd2301", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemca1c1978-b281-49bf-b445-545741c6e8ea"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item4eba2549-8fba-4f45-b352-c00c631b93be"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item59cc7fd7-9b08-4137-b15f-2c7986e0b11b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc196b38e-9f60-4004-8039-a65c9a7a598a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item13885f3d-887b-43ab-809e-fa6ea12f5eee"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item264e6fa1-4d6e-4f4a-9e82-bbe289e754a5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item49924bcc-9db1-4a9c-8c36-231d36c1b944"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item6d19690d-5629-4c01-b095-ceffcdd5f991"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemcfb8e543-096d-4c36-961f-666111081faf"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3601d2dd-bbd0-49bd-bd0c-b3b48256dca4"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemfa49a981-c440-42e0-abb5-fdf949785b56"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item459a5b38-8c71-45cc-88e5-312090b0a03a"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Itemfd619364-90db-4a59-88f9-4ba95eb3109b"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item09d5bbe9-5f60-49d5-b800-fb167f2f9238"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item1fc94945-9607-4bd1-bba9-979971d95508"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9cd7a7ca-6246-426b-b193-f0e3e1e0a85c"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item3bb0172a-7d56-4bed-b7b0-6f435e0f3be6"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item7dde5524-7df9-4f68-9b44-ace252b8e800"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itema49911ea-ab7f-43ee-9b73-78b000f93f2a"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itema4144734-5935-4ff4-b1f5-c6fc64b4b651"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5b1a5b7e-97ca-4337-b12d-64574e64e4e7"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item8d446f4a-e287-41ad-a49a-199fc3286488"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item1bc16312-53f1-4c89-9edc-3b4d537ae2ac"),]),
    getItem("Tools", "Itema58166a3-ad29-43cf-8180-2c254ba0098c", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemc4c0d04b-e8b9-46d8-a466-355762597243"),]),
    getItem("Tree Select", "Iteme2182485-816b-4257-ad18-949c8194efa9", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd2b2bbef-8d1b-4d65-ba7e-c9d445f86588"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item8ffb692b-577b-4f9a-bc51-f76abca6bee7"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item1e2ce265-24b5-429f-ae5c-8b781135bb3c"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemdfc2714f-d898-4444-897c-f94af7dab7f5"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itema2a4de8d-255d-4db3-bb0c-8f7b7771c498"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemfcc8ee3f-239e-436f-990c-74d05df7274e"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item077713a0-fbe2-42b1-9b6c-5030927572ae"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Iteme29455f3-9129-4766-949b-1041745846bd"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemd589f52c-a1c9-4a03-ac6e-c466f10a91da"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemfca92f4a-23d2-43a3-bb56-e53f0993d760"),]