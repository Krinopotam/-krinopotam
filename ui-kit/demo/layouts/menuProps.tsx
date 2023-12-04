
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
    getItem("DForm", "Iteme8d34934-d797-4b23-b2d9-0b463941055b", <FolderOutlined />, [
        getItem("Validation", "Itemda38288c-dbfd-4b4e-a8c1-a8fdeb32f45e", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme4769037-2386-42e0-b92c-104b4cb87874"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item9de1f36e-0b88-4898-807a-4d7cdda9bcfc"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item502e76fa-6450-44f8-8df3-a09eb148f1dd"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item3c080b93-91a7-48ce-a396-1f9d8f90c5cb"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemb76c30f1-cd7b-40d3-8d6f-2659d402729e"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item3b4786bd-fbec-4513-b3a6-3c9a3a61193a"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item8452aaa5-adde-4f73-9b88-0ec28e708d23"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemfb165577-895e-4826-99eb-7b0942ba1d56"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item21356a66-f6bd-40c1-bc0a-3fb1274f1d84"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item80e0c162-dcc2-40ba-8037-153fd6db3533"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item8aaa38cf-cdc9-4e16-8323-25b56a285ba7"),]),
    getItem("DForm Modal", "Itemf2830e71-6ea2-4864-8651-7adeaec0582d", <FolderOutlined />, [
        getItem("Async", "Itemaa5c30ff-a8ae-4d8e-a877-0cc36e1df79e", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item802f74aa-1e07-441f-983f-8dd3929401cb"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemd3c84b0a-032a-40a3-a8e3-e0c07f53336c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item82b01b35-1531-420a-96de-9b1558888880"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item4edc84a8-a62c-4b01-b502-0d365fe0ec9a"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item5159de51-10ba-427a-82fe-6adb58343d7c"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item3091b672-4f58-4eaa-be68-b1fbfeeebc52"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemafe57ffa-e658-4145-9cd5-6ac1cb814689"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemcaa55c86-9790-4399-b68e-aa09de1c71f2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item1f7e59d3-2891-4bef-8a6b-58d5557eea94"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item6eb61e2a-3b27-44e5-a234-eb255e63e223"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemb4fb8fc1-409b-49f5-b711-4df7262733f8"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item856fb0e1-1207-41b7-8843-57108f90e422"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2d07f697-607f-491c-afbe-421c934255f1"),]),
    getItem("Tabulator Grid", "Item4a4dafa3-6ea0-4e42-bc52-7b731e2ccd67", <FolderOutlined />, [
        getItem("Async", "Itemf05ccb5a-d5b0-40da-bc35-3a278d851724", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item7e074799-d3e2-4d3d-9f44-97c91a2d5a8c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7d2a3419-8c99-4a13-8472-7322284c56e4"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item969ebeca-bba2-4a34-b24a-11901f1b5f45"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item6131bf13-880e-4653-9268-429250ff1ec5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item429ab411-3091-4f0c-89ec-dd59495e0f1d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Iteme1597cc0-8853-4a35-800e-637fa8095424"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item34b14c6b-7203-44fb-b4bc-98a4e6b724e3"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemd1a66ee9-7826-4d3a-8130-5a893d3dbf9e"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemd8281d07-d8e1-41ec-8ecb-4c0f11fe9378"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd7b09f22-bb14-4581-8d80-8475987fa38d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item70fad276-69b2-4852-8d5d-098d7b0278ad"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemb34ee17b-2847-483b-872b-f3ac22e4781d"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item3898a8b3-df50-420b-b435-ad94ec4152c8"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemd9e49706-7bf2-4a43-bfc6-0e7e9e6f1aef"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemd9d6284b-befc-490c-9222-86695d54823e"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item1da6be9d-eb72-42bf-898a-f038143295cd"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Itemadf5d114-16c9-44f3-b4f9-044a33a07f39"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item0b01a88e-4022-42f1-b4fb-495233a130a1"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemfce04808-2a1d-49e9-89b5-50785a248e27"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item0c2d8ace-1435-418e-a8ca-d40c2fe0776c"),]),
    getItem("Tools", "Itemc9c92a23-3320-435e-b249-d0c18a48d483", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item877b5f15-1e5a-4d9c-bba3-d570f5104dbe"),]),
    getItem("Tree Select", "Itemad513477-5cf8-4fa8-82e2-c1d576808ffe", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item87396ad8-5756-4113-ba87-812417dd4eaf"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Iteme0f361a7-c89b-4877-9629-b1e2ac5734a6"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item56ede43d-a581-4b1c-b10b-00eb70293af0"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item2289baf9-0a4d-475c-b6be-1764883c5faa"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemce423bf9-9c40-4441-8828-9a01d4f3aa37"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item83a63681-64ab-425b-b933-2a6b32bdf02b"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item08be671a-5cec-47a8-9b70-3e17fe3f6cd0"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item31e9adb0-f362-4a0f-935e-1cd14664a5b2"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemcd1385d3-4033-4ae5-858c-f6942bc7ee51"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item3dd1a3bc-7949-4340-9a2a-71caa742aea4"),]