
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
    getItem("DForm", "Item51660986-708c-4895-8eaa-4db604908aa1", <FolderOutlined />, [
        getItem("Validation", "Itemc66cd146-e9c0-4b33-aace-42e29d24121f", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item017bb7c5-68ea-48ad-88e6-ff787fcc452c"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item6ba77859-7360-4797-a2d6-f0a6c19efcdf"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item94dc33d0-97fb-40fe-8993-10e02bcde33e"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item40bf754c-4d80-4380-a2cd-f079504e8c41"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item15635698-1a96-454c-bd4a-0377096a741e"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item1b79440a-f4c1-48be-94ae-bb7d88ad8258"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Iteme97797a2-0e93-42ba-b4c7-47ff936b8cd1"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item25d961ca-0b7c-4dd5-b1a2-157672ffa159"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item184a3b2c-2811-47dc-a927-69c5f963805b"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item37420bf8-204d-459b-bd10-59f98b45836a"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5812740b-5421-4744-80f0-40644e7f62f2"),]),
    getItem("DForm Modal", "Item120cd7ea-0578-45bb-a914-1ad66f2c13f9", <FolderOutlined />, [
        getItem("Async", "Item1e731391-e32e-4d72-bee4-c1fc1b5ab168", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemf3a6b651-aedb-4442-94f9-b497525e6442"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item8fe619dd-4e34-4a97-ab84-0feae4156e54"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itemf96a35bf-111e-4344-876d-4ba534f6bb22"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item543c02cd-b2f1-4c65-a353-d9702f552fc3"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Itema4ad1417-ef3b-45ed-bd07-400b236e0d57"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemf262ba8d-6c29-40d4-a930-9b2492363d88"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item0d970ac7-97aa-40ea-b0f9-782447c0ec8f"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item092f6b2d-e3d7-4b0b-9779-b0172f6a7ff6"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item67325968-9b44-4c28-b5db-548b1b654f96"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item7b76466f-b663-4fc9-807d-3de56808cda4"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item6c7fa5e1-c31c-4661-84de-33b86013ad66"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itembba5aebe-4c37-471c-9061-4ae9a4e2da57"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemc6badd63-94a7-45ef-b775-aaf9fdd84eb7"),]),
    getItem("Tabulator Grid", "Item0b314960-acae-4d5a-99e9-2bfd1d4c0860", <FolderOutlined />, [
        getItem("Async", "Itemb391f995-3c65-4a5b-900e-4ab76b6895ac", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item24cf84f9-6e76-48cd-89d0-940f451c92b0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item8bfa0aca-6945-4963-98ad-f854117c948b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemd48bcd34-63fb-4f96-ab3a-a9e5e2434a33"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemd89a6d64-06e0-485e-ac72-f4c3cb0beee4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item226ff345-cca4-46f3-b945-9b493c6b13d0"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item78af1f60-78b5-4761-9ad4-4ca883510e24"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item32041448-875f-4828-b6bd-0477a03fbb5d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item7ab6c3b4-edd5-44f4-a9bc-23ebe7c5a784"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemb2552d9d-4101-4d53-911a-44c2fea5e639"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemeccc47e6-a4cd-4b5f-85aa-48eba60c9979"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3ecc4f2d-6c80-4c94-bfb4-3e30646d7f2b"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemc6986ee5-38d9-4a92-95ca-0d848e80a070"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item53dfa58a-9c53-43e5-9cbd-6cdefe0a71e5"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item2010c53f-b98e-43e3-8d73-bb8f9c3b3f39"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item58b27baa-1b47-48eb-824d-5dc3006fca85"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemb8261831-093c-48a4-a309-1e4c7514c793"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item0543fcb4-f2f7-49dd-90e0-5ecd30ab0a7b"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item6ee3d74c-c265-438c-b0f5-7841296afdec"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemacb1018f-832a-4e73-bae6-a82197caf1c3"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemb85a0d1e-af15-429e-8e12-aa926e67b263"),]),
    getItem("Tools", "Itemb2325ba2-b354-42be-bd65-4551cc6fa0c2", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item2ae16009-2182-4b46-8010-55eca0546cfd"),]),
    getItem("Tree Select", "Item5dcabaef-b03a-44ea-907e-b2110509ad9f", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemf6f7a8b7-8e2b-4afb-b98c-3e554ee04a0f"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd46f0eab-d28e-4545-bf6c-279d327d9d1e"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item0b9a0fb7-691b-404f-a1a0-2b18446cbeab"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemd0f85011-c70c-4988-916e-01fea93dc0d6"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item76297208-c03e-4e87-a6f2-9eb0d7eb7ac6"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itema8473696-2f76-4794-a781-f9b9fbfa3d29"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item951e773a-3ef8-4cd8-9a6b-09a17c185f08"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemb35fa852-0cbd-4613-8e35-9cb9b3442534"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemeaff0591-3063-4ea8-a680-fea09e1925e2"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item8335e88f-3a18-4bad-804c-674219a257b2"),]