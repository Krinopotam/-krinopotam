
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
    getItem("DForm", "Itemf20f89a1-781c-4210-a470-a87888f33ceb", <FolderOutlined />, [
        getItem("Validation", "Itemfc8e0d2d-32de-417f-8a6b-164eb35b0834", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item84098c5c-4b35-4c6a-85b4-b72eddff4a55"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item9312a854-140f-4a66-b2c5-51b64496bb8e"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemc3168189-d37a-4f0e-91f8-d5565772cf1d"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item7d6acbb6-2d7c-4456-99ea-8986e85c6849"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item04609619-bc0a-49bb-ad5b-f472ace479d1"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemcc8bbb7f-8765-4d7b-981d-1a26d6cd81d4"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item506e9c46-4616-41ab-8cc1-eee3eaa9a6c2"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item892020c1-f98c-4a52-9408-bf737dd6e89f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item354255a8-93e3-474f-8093-6b0d8fd09cdb"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemb81006c6-dc89-4da2-aa7c-745393463cd1"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Iteme04e45c0-bcd5-4d5e-bc41-d9a2fbf30872"),]),
    getItem("DForm Modal", "Item87cc6129-0ef5-49c3-ad55-f8f8886172df", <FolderOutlined />, [
        getItem("Async", "Item5437c05e-3cb6-4d6b-bde2-c1a9cb4bff56", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemb9b99aaa-4f26-4d81-9529-577f4701f089"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item7d855630-bb39-44de-858c-af32d83fbe4b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item305bbf9a-cee4-4ef4-965b-ba75783d1663"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item2ebab06a-5ebf-4728-adbc-5997de8f62a1"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itema4f44f4b-805f-4152-ba7d-5b6a08532be1"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item94e8c87b-654e-43a1-a0be-295043eecc56"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itembc0254b2-e136-4e7e-9848-172260b72a7b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item1ce2db28-93ca-4480-96c3-2b3188485505"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item242773fc-6b16-4b45-830c-99898d4adfdf"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Iteme3c42a01-fb78-4da1-ae6a-b7fe1f97d9c2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf0cf0047-3156-4106-924b-7360243bb448"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemfb274e49-da84-4ae7-878d-98ad5667eb6a"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema1ef8226-d40f-4907-89d2-98e81450c365"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item47930e7e-1c12-4f39-bfac-821d7547ed56"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemc9e569e5-8a19-4c22-9aca-d90bcf3a1d01"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemd687fb3b-0af1-4982-9008-a4cd01dc62a4"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item4d3e9aa5-0f38-4d86-a4b1-35ed2e1da642"),]),
    getItem("Modal", "Item526ee88f-3191-4190-bfd1-7533f8105314", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Itema786a2a0-5441-4cad-8f84-e8bc6a70431d"),]),
    getItem("Tabulator Grid", "Item71b646c9-f86c-447c-9aca-eb9ab7072eef", <FolderOutlined />, [
        getItem("Async", "Itemaca67f7b-c502-4c3c-b5f7-06c67ea99f0e", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemf2214fc3-58b8-4ce7-a631-a3af2d5848c2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item55ad3f91-1ff9-4757-8763-80bb36fdbc22"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item9219b23c-03ba-4239-a3fd-0693e0d5fa2a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemc1524243-48d1-4a84-afb4-329f3a2a2a92"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Iteme5730b54-f71e-47ba-95d7-9998c447af14"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemcf52fa88-ad27-4cbc-a0c8-575cfd1c8343"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item4551f3b3-234a-46a4-94f9-96487aeff3d7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemf744c45f-e969-4d38-8090-e0222e73f020"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item15fe3d3a-3735-4317-8af6-4bc8c5e83629"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item4d02d1b0-4339-4b6c-b9b1-f82c3aabecdf"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item70a898d2-6099-4f28-ad5e-86652a1a57e5"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemb8d1957b-8966-47ac-b1d1-5c1d4e6dab0d"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item13991ff7-f78a-4587-99f4-eda85e30b013"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb853d83a-f49b-4aa3-8ef2-c51f1656fa71"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemfeba9781-0421-4dff-a063-4ae97f472a1a"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9a96cde5-f927-42d9-b68c-d211d79a3400"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item7e079fd9-22ba-4d7a-b35e-8c493c57376e"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item6c4487e4-0a7c-46ee-abd0-4330fc9cd774"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemaeb569ad-7b80-4805-9b65-13dfbec00bbd"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item4ce78216-babd-4a96-9584-eb1c3cee02eb"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemfa9864ac-7b38-4d16-afd4-59c9a7e39967"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item60208256-2a93-4605-8ddf-dcfe42240a18"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item56c156d4-0739-4257-8131-661b19ed2770"),]),
    getItem("Tools", "Itembd72f4b2-62dc-46e3-9f2d-afdb44744764", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item8e897680-6375-4a6c-b86c-5fd46799024c"),]),
    getItem("Tree Select", "Item83277ab0-4759-4c34-aa1d-2bd473ebba61", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item04fdd9e3-e70b-498c-9a24-dac4696f54f5"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item0b119a45-e27e-4dbf-a3b6-3c315dbf3ccb"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item9e46bd56-3d54-4241-a864-a9fa60a92595"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemd58f3257-3803-44dd-99d4-3d70dcf1b6e8"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemf08ffb09-7a85-4784-aa08-9e02e85e0509"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item79102e1e-2153-4be2-945b-9742bfe02965"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemd9597414-407b-4356-ae0a-d1b08fca1ed6"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemdfe9eb7d-6919-424f-9188-b5e027fce0a6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item328268c2-f024-44cf-889b-3915ca339c2f"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item231b615e-8ad2-44e0-80a8-8107c2d28882"),]