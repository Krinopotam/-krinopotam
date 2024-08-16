
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
    getItem("DForm", "Iteme1553a9b-8b72-4d5d-be4e-6884a14f7f1e", <FolderOutlined />, [
        getItem("Validation", "Itema41ac5f3-689a-4600-933b-7fe9c347eef3", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item565efe32-f739-4b50-a85c-b9a348704e12"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemb00c9ec4-7f5a-487b-a87b-98bd47861c7c"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item1b7b339c-f26c-40de-94fc-f296efe411cb"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemf33a3f58-1a1b-4ecf-9f1c-4aa5a99d2183"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1a2de231-3f40-40b0-971a-0abfa1ad7602"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item515a0dba-7299-4a73-82b0-70ef2e361c14"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item7d920d6d-653b-436e-8cf5-a71a39112e55"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item66285474-0ff0-47b8-b5d2-7bda68b5aad2"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item37678c02-9bba-46c2-b818-f5f11f886fa1"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemf70ced54-1820-487b-af12-bd4ab03290b1"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item775b0b01-ad01-4fd6-b0eb-98a2c6c327a9"),]),
    getItem("DForm Modal", "Item832d8d1a-34e0-4642-b548-3fc2371cbfc4", <FolderOutlined />, [
        getItem("Async", "Item7a4f631e-8f08-41ab-90d4-247d39c12d6f", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item476b1c35-3300-4a76-9006-f10f35394470"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itembb522ddd-561f-4957-96e1-bd26dfce3fc4"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item0b097f0c-56d3-4f3d-87b3-c5a60208ec3e"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4f4c6bf7-3e9d-4b70-86f4-5fea2030dc6e"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item575bc149-e738-4e85-89be-342e071160c4"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item9c7f65db-449c-44a6-93b1-e6441054ee9a"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item714ff681-952e-41b0-a6b2-4249032bae00"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemcd671c8d-9b8e-4f12-9c98-c7dac7b66648"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item223bd1f2-7b79-43b6-b233-4c70aa706b1e"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item9576e8da-e9fe-41c3-bc3e-a300486babfc"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item57353cc5-d39e-4b8b-b978-7f53ae5a378c"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item6269a299-ed6a-4c36-9677-3ce5afac4f72"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemda48a727-9765-4c7f-9b6d-b72023912e61"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item82cb4a52-1b76-440c-9296-fdddcb6c29e7"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item8d4c25f9-c8f5-4666-a01a-97b64c0fda79"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item6e609802-7b0c-4079-b69b-b14efed24476"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme5c87c49-4d95-4443-81ed-b16285bd245f"),]),
    getItem("Modal", "Item519508f6-2dec-421a-8cf1-79b502babf91", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item7723fefe-9ce0-4865-a828-412b5e952f8e"),]),
    getItem("Tabulator Grid", "Item6165e27e-c0f4-4af3-a0d8-e3036cce1ccb", <FolderOutlined />, [
        getItem("Async", "Item9f43eb28-8ec8-4435-aaea-0f4bba6b6132", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb4605c9f-663c-4c70-9aa2-6289b9bafcc2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itembbab38d3-ed84-4697-b94f-99264bb6482f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item05b25aa8-625a-4c1c-8062-6c0ad0a50025"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itema31cc642-bc1e-4924-a09f-2d511c9f64c7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item9fe06420-8797-4b66-a195-238a66561551"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemedb0a66c-5ee0-4254-9241-7d41198617fd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itema8e1032b-1779-4754-a0bc-3b4c1525ccfb"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item4f893dd2-3ead-4e86-bdee-f4a9d30cb10d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemad7d2e2b-e98a-4c58-bb30-8a01b342cdd0"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itema416a78c-3255-460c-9712-568ea4ae87df"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2bf26e28-efb0-4851-aa65-20d2868f02f7"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item46644e86-3750-4a13-9acb-9aa622752dce"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item2285e890-b942-4333-a504-f195e93959ce"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item178fec61-1dbe-43b7-b428-50974bafb1b2"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item9da66421-70d8-439a-8db0-072e593a2013"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item80132e78-61b3-42b0-8d35-54867fd10a3d"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item9630cabf-108e-4d76-93d8-2230eb4121f5"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itembf161fc8-3bcd-4a8d-bc79-1fcc614c823d"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item0ab55a6e-7fea-4997-bd47-e5c270bf9fae"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item5d6b7106-1584-4f1e-be21-edf4cb9d2b7c"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item12b0dcc5-6fa4-41f0-9b1d-c297134e292a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemfb0ab833-a184-40ab-b1dc-4915b3ec8122"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item15496931-6568-472d-b948-db1d89863aa3"),]),
    getItem("Tools", "Itemc2a4caf2-0d51-4a6f-8cff-cb6c338ef9f5", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item7a18c572-391f-47ce-9d0f-6b96fca2a501"),]),
    getItem("Tree Select", "Item3bb4615a-6382-4e16-ba43-297e60e25153", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item7492b268-f91a-43c7-b4c2-662864f74a53"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item90286358-d0ac-4171-8eb2-e85a38d21080"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item798c1466-4902-45d8-a342-30dfc7575578"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemdeb2eec9-8ff6-4b7e-b342-bd4e13b330a3"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item9583ee99-a512-4bb0-8803-97aded0cccf7"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item2682bfd4-a390-428c-ab48-ec82b02e794f"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemb7751267-6d50-40c4-aa20-e23c5ceaa28c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemd776349f-11b2-4611-addc-aea9b22005ee"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemd9b165ab-e483-41a5-8e7a-6d22302b0621"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item90e8acf2-e63e-46e1-8452-2b905d9e7799"),]