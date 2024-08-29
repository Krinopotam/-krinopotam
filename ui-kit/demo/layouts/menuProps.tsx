
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
    getItem("DForm", "Item9f9548ec-1673-4ef7-b92c-01d2327f2666", <FolderOutlined />, [
        getItem("Validation", "Itema2ed267f-4ffa-4284-9b86-51e8b48f4e3e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemc1b799ba-26d3-4e4b-80a9-9b2fda9724f9"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item51900f50-8f40-406d-9867-1e02c11f60b9"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item76fd6caa-b3e8-43f1-a818-21be5503959c"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item4b9e1f52-ff20-494d-ae41-7c969a5951e1"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemf514f139-5cc0-4436-bbe2-4a3bda509c9c"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item481bb4a8-6474-4d9a-b945-bbfbb11588e6"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item156d0f0e-dcde-4559-8284-c62adb01766f"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Iteme857b70d-2d01-46ee-9326-d1173f95c791"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item980fab94-0c39-4743-9f09-5ad80201653f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemca4407e9-1577-45ae-be8a-15018a39c149"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item461f9dc5-76ae-41c5-a349-3b37c47e835c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item0337a0f8-b6a4-4846-bce3-3aee9f08e05b"),]),
    getItem("DForm Modal", "Item89e9a87b-2377-4388-b707-1e58b58854fb", <FolderOutlined />, [
        getItem("Async", "Item5b572a23-247c-49ce-a471-8dbaf5355db0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item5e8a6306-5b1e-4b3f-95b5-2f8103b1a0a1"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item69ac4162-5301-41e6-9215-853c4df4483f"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itembdd60e25-2008-46c4-9981-46874438d572"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemd0507686-7b29-4f0c-8649-3b53ef01ed89"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item9a36aa9d-9775-45c2-8157-2b19ec51107c"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item22b131ca-f813-4f7c-9119-0c229b6a97a6"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item2fd00092-5395-48f6-b9a7-05ab3cec1445"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemc410e9a5-c416-4802-b413-c1c17152992b"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item4a3969a5-e534-4b13-a82a-b5f6c3e96a0f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itema803ebc4-4c2c-4e8a-acef-772c1976acb6"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf2e7573e-966e-4d43-a003-603597620335"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item70930e59-3d3c-4837-9a81-b57ce5015beb"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemcf50742e-ad67-40fc-b554-7b40b5c4a2a0"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7570ddbd-639b-4056-ae26-4c1b3b6c3c2c"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemd7d5288b-b621-4079-bdc4-96b5fef939c5"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item413d6262-ab81-407d-a1bc-45db10d32a0b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemb61d9c7a-6284-4ae7-be2f-f81bfbd572cc"),]),
    getItem("Modal", "Item29a4c0b6-52e1-4a8b-a6d6-e5c54b23efc2", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itemfaca1787-b9f4-4a5a-830f-e2e01df5ae24"),]),
    getItem("Tabulator Grid", "Itemc6805acf-60d3-48a5-b5fd-0132e4ccba2d", <FolderOutlined />, [
        getItem("Async", "Itemf287d3cb-2cc4-4dad-9f6d-db9d08d70e58", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item0f514bfb-5b9a-4c58-af17-19164a30f26a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema5ed6d9a-8045-4566-831a-4ac0ff914c04"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item61901477-e7b3-4a76-b12e-b1e04adb6696"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item222f0b07-c45a-428e-a72e-826c266da019"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item1da5621a-b3f0-441b-9a32-0427913650ce"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item9d4c9081-c794-49b0-9772-502929208507"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item9423ebaf-8b68-4377-8961-08f481f0ee3e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item3379d164-43b8-4c33-b763-776ba2a1bc98"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item4ad40504-eabe-456e-9bb6-279023634756"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item3b041e6a-79d4-4554-8545-1d68b8dba880"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item4dce916f-9de2-472e-96e9-4909cdb179d6"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemcaf5c7f1-f2b3-4807-b3e6-8e425d17cbde"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item71f5a978-0d9b-4091-b5b1-eeecaa085adf"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item52db918d-6caf-47e0-bff7-6bc0a7539b6d"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item3b999094-1748-4741-81f0-656d776bd72e"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd2edb811-fbcb-4887-91d7-dd8e6809d432"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemf4377fbf-f83f-40af-9db9-f1c0792eb80d"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item84630d2c-dd28-4102-8cfd-24a540c7548b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item6da4d0eb-7860-4171-8f13-4b95fc9e3a4d"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item0cd3c943-b694-4d28-891a-fa02072ab822"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item292d27d4-33af-4a3e-b9bb-5c79167d2e15"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item2c34f32b-b8f6-4ed8-b990-aa69ed07ac7e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item59128f75-65ed-42e0-8ce9-3e82d3db63da"),]),
    getItem("Tools", "Item70e0093c-6cb9-4bb0-bf95-6b0e3b2250a7", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemcc43501f-203e-4448-9355-84d183446307"),]),
    getItem("Tree Select", "Item26feea5d-59d7-4063-95cb-235d70d582e9", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemb2985c38-c6fe-4674-b65c-670eab7019a5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item275b10f4-cc19-4e0c-968b-f0b1ef5db885"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemf3256601-5b6c-4c48-b39c-942f68dd11cb"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemdc1559c8-91a2-4db0-9ec9-b0c5ed29f215"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itembb9c2c84-35c8-4cb9-b9ae-0f641b005c78"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item524b982d-f40a-4803-8db2-c3c717970352"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item9e806b52-8ff3-4fa6-9afe-0c91ea3d8734"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item675444c6-e9e5-4d93-9ac4-956884faac4b"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item4b0d7fa3-53ac-465b-a6e3-c6591ddecded"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item146893d4-c4c8-4bd7-913d-7ba9570a96da"),]