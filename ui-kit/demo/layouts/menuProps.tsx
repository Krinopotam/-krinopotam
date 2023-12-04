
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
    getItem("DForm", "Item84bace28-495c-4e9e-979f-9b122aa2d4e0", <FolderOutlined />, [
        getItem("Validation", "Itemc2e624c8-4db6-454f-af2b-3d0f951d448e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item8d85d208-8dce-4568-ac24-e8c5ba70f80f"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item201c1480-3628-4e0d-852b-8a0b89a9f652"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item90f6b671-7c4e-4761-a025-f5d4367ccfa5"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item7db64cd2-cc2c-450f-996b-65cfe8c94ab2"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Iteme3668b13-604b-4217-8f38-ab99e621953e"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemda1419b8-890c-4e81-93de-b9d4baea1d61"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item8343aaaf-c9eb-490c-a990-daff4f525821"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item3c7c29b6-d591-41a5-be17-83b421725304"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item5dd0feab-e8de-4d4b-b1b6-e5e282ca2d19"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itema0d19e11-f882-4510-807c-97586c2fa73e"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1a678369-1fae-4994-8822-b7c38fbdbff6"),]),
    getItem("DForm Modal", "Itemb6af72c3-349a-4e04-a950-d16416a1f13f", <FolderOutlined />, [
        getItem("Async", "Item4c2e64d4-7e83-4682-80c8-72d485788cfb", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itema1154954-15f2-4681-a95c-eaaa601705d7"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item2702f2b8-cc7c-464c-91b4-28adae8585f8"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item371a63ce-65d5-4160-87e7-2087946f2483"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemda772256-efc9-436b-831e-914d171709ec"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item41609067-4173-49e2-bcd6-7fc02425bfce"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemfaeb88c4-295f-4097-86ae-b333b09606e5"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item2a66a023-0f35-4209-82c3-5d20717aeb09"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item3b8e7543-014c-4aec-9620-ad81d89e292e"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemef3710cd-da92-4203-a40d-40e7bcffd1c6"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item5f187412-3253-49ca-a753-434590946ab0"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item92cd5815-3882-4241-9127-e75b0a0b1a81"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item9b65821e-5aad-4ecf-be16-3fcedade0d1e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item400aaa92-10e8-4c66-bdb8-5becac12539a"),]),
    getItem("Tabulator Grid", "Item7ff04eeb-bb13-4d14-aea0-da60c111be35", <FolderOutlined />, [
        getItem("Async", "Item971a80c5-007e-464f-a2c9-f4787389cf0a", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item3088bde8-78f3-48f0-8e8f-d61e1258c629"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema59ca587-759a-442a-a0cb-4939cbf58f79"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item12706ed1-939d-40c7-92ce-9c297ba65ddf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item15c425b8-6a72-4c18-a1a1-9fa4dc98b92d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item004ce95b-b295-4ef3-98e0-24823afeb1f1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item4a7f8ed4-66f7-4dfa-9c2a-b15f037b9661"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item4a1e7c72-dd4f-4ac2-8553-e8812bb565b7"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemac202e58-bd94-44c0-8f67-a641b97ff1e9"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item0cb82985-84ed-4303-821d-c6dade966a8a"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item2d2bddc2-75b6-4ea1-9672-3762ed9fd0bb"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item8cdd337d-499d-4ca6-b212-5e0d3297db87"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item1cc80914-565d-4f0b-82a7-11e6c8e5efe8"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item5bf7a4e5-9779-4f25-8960-90abf6cdd64d"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item24a43c5b-022e-402d-a0be-5e59dcc149a6"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemeba8b5ae-fdf0-4584-9d83-b50aefa6b9dc"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item891baccf-2f35-4920-8b2a-ba8d6dddbb51"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item6b8a5857-48d7-450f-be0a-e1db5fb8b74b"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itema0c027e6-42bf-4293-8d56-2c5dbdd06a8c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item65f94111-17c3-4e59-b2ee-fffcfb22eda2"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item4f8d72b5-d26f-48df-bdf8-8b55d87e354a"),]),
    getItem("Tools", "Item0281e2f8-1c20-434f-8a2b-0be778b335ff", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Iteme4069e5b-f035-49c6-a46a-19985d4b6c8c"),]),
    getItem("Tree Select", "Item50fb9b96-80d0-456e-96cb-50640a34e296", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item9f85ff71-945f-421f-af18-546bdafa61b2"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item64cafe4b-cb69-4d7e-92d3-81d6aaa07113"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item07caeec8-ca3a-4d4d-bba1-7f88cb6f923b"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Iteme6f73eb0-5c58-4523-a9c3-89f23d0e38fa"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item7ea8223f-db5e-49ca-be85-31625ddc6d01"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item7dfd6232-3742-46a3-a036-50680f10e9ec"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item67b1e46e-80f5-4453-b3ca-fd04baf0eb94"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemedb949d0-4206-4bfd-bb53-caf37c99ec73"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item4e974d6a-4102-4c09-b2c6-cfe712e6e167"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemdcbee31d-0e70-4f44-a174-ba1ad0ee19ee"),]