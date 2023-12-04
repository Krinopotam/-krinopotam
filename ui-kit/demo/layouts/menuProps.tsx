
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
    getItem("DForm", "Iteme61b5aed-8c79-49d3-8209-d36bd688e66a", <FolderOutlined />, [
        getItem("Validation", "Item7ebbccdb-eb00-48e5-9f83-0d89cc3561ea", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemee0a1dd5-3516-4e2a-9e94-53bf6d915dbd"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item5b7c1237-e56d-4928-b7b5-ffbd4090fb7f"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item08a29a4a-f133-4faa-aa43-67d59b1615ed"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemfa159bae-5e21-4c3a-bf51-b4fbc48d700c"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item2532bf14-035a-472c-98f3-12d0f96f419d"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemde8aeb70-2b47-437e-b340-41381cbaab58"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itema6ed82ad-3942-4a0d-962e-0efc640d4ae2"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item9b7d8278-59fa-493a-9d41-6cf87b5d52e7"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item70a71307-c377-40f1-b542-c1e268526113"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item703c1c31-6d05-4eee-9ec0-efd87a68b979"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemc0ff3edf-0d85-4ad9-a571-318a9f993ccf"),]),
    getItem("DForm Modal", "Item330b53ba-1cfd-4232-906f-66dd771b7fe8", <FolderOutlined />, [
        getItem("Async", "Item2bca556c-aa08-4330-9394-03687efc0944", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item38bf65f8-79b5-4154-9b55-6b35b3b0ee0d"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itema34a8634-ad2a-4b91-9fdb-9f937e7800f5"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4e3198c9-11ba-4c52-959b-85d2d1fb0d76"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item455d6fab-367a-46f1-a1af-b989f019de46"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item9479a793-6d82-4bb2-bf21-f9771f4dc040"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item04c6d4bb-7c46-4a70-a7ca-4f72042f3f93"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itema85feba8-3d51-4679-94d7-e57a2e9b5ab0"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemdf737979-9956-4ae5-9d00-190cab35d914"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema3df8051-2c6f-4201-a04c-dc1587c92d5a"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item53163469-100e-4efe-ba5f-abf4bb95d655"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item3db12c3c-86aa-4bff-88f4-ab298ca7b23f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item84176b80-8c45-4daa-bb0c-921df07a529c"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2182091a-f580-4f25-b66f-384d3fb0c1d1"),]),
    getItem("Tabulator Grid", "Itembbd3fe97-84a4-4538-a2ef-14dce428285e", <FolderOutlined />, [
        getItem("Async", "Item68ca47b4-083f-4b2e-8086-340faae02b1c", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item98ad80fc-00fe-4a49-9566-60c18211e9c1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemd3a06a90-8ca5-48bd-871b-8bf03b705163"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item1bf42f4e-2b01-4d7e-bdad-e1fc4df79fcf"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item408ebf71-27f4-4f22-8bff-f8ac3a4d527f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemfee1dfd8-95b3-4663-9c63-9593610bb7dd"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item27d137d2-10e6-4536-ac90-73dd8779b55d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itembbac228f-a8b5-4870-864b-4ec723718d5d"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemdec7d7c0-dc02-46f0-be98-03280774442e"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemd07f18d8-7d54-4e3e-9acf-6bbdd103c833"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Iteme70bb339-9627-4cd9-aba3-0341e942104d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Itemb7efc469-0c10-41c0-83be-6c64969e95ff"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item32002d79-e1e9-45bf-821e-03e8fe924394"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Iteme9c44387-0633-45bd-a412-5857446ca829"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item4563a8c5-0f1b-4478-82b3-f133be3cf59d"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemf3a5672f-cdb4-4f8d-a7e9-b50fa20aba6b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemab88ee39-0eb9-4c90-8571-c3d1549d08a7"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item6e374e11-3130-4456-b929-34bb9e0af9c8"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5c9bb853-5192-4405-ad5d-dbefa12a5abe"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemebd6df11-5675-4f1c-b9ff-c47fd6c72f1a"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itema03e771e-29c2-4586-a673-69d96335a493"),]),
    getItem("Tools", "Item583c368c-9f42-47d4-8f57-7186fd8e185f", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item54cca197-c2be-4df4-b0a7-13674045fe05"),]),
    getItem("Tree Select", "Item2bcc0342-911c-4879-86de-d9f5abaf6954", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item6d7ab08c-7c01-4e1d-8c6c-1850f8545f2b"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item7a6ab336-7ba6-4fa0-bbce-d25036557968"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item4b1b97f4-9a03-405a-951e-0551128dd8d0"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemf1def339-0820-468f-9d33-892d91a0496b"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item4ceed7c0-8b57-492c-bb85-bb1e4ac11266"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item6249458d-3946-426d-b159-02af69b22471"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itemf4ade066-9e3d-40a9-b630-087bdef458ac"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item9627ea25-31d1-4ced-bfce-c708134516db"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itema17106a4-43ba-46a5-9470-06a2db044591"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item8d31bb25-c0a2-49ab-9737-31adf5b21b5d"),]