
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
    getItem("DForm", "Itemdb40c6a5-bd97-432d-800f-a607c1b3cd02", <FolderOutlined />, [
        getItem("Validation", "Item62d5a460-8b75-4ee2-974f-1f1c810f7b9b", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemcfcd4368-b610-48d1-a3dc-46f610df567b"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item6ee1d3c3-8d7e-46d8-9392-4a06d0f15750"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item91c872c4-6ad2-44c2-9cb3-de64131a0315"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item4d9e3c56-7144-44af-9859-1a278b57a053"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item39bffadd-ffd1-40b8-8d3c-d8689a77075b"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemd4f1b163-aaf9-45f7-8f70-b5f60e9b05f8"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item27c2794d-a3ec-45e9-a2e8-50716382559a"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemc4c4a56d-6f34-447e-868d-1d16599526db"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itembfc0dc0f-7aae-4110-aedd-042499958c6d"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item201306e6-a7f4-41f9-9d45-2388dda00e5e"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item4fb0ffda-5dac-4597-b3d5-21d9d380cf4c"),]),
    getItem("DForm Modal", "Item1134238c-a21a-4ca3-9a93-26d54b93a126", <FolderOutlined />, [
        getItem("Async", "Item00828fd6-8654-4f35-b99c-4d6805517830", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item3a2344d0-5ae8-4247-a824-2a374ddb41ce"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemce2dbf41-eab5-45f7-b37c-ce26026d5271"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item16941f2e-e19d-4db9-90e2-16a97a520d49"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item3a4492e4-95b9-4069-98f1-9d592d72fbec"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item6970e352-9ec6-4354-9265-2f54ba5a6b12"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemfc79be13-e5cd-4cf6-94a7-d2c597984e36"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item4ae60d52-df58-456a-8e1c-8a19fa9bfc53"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itema0a824de-8de5-4434-8534-1d99d6ffe473"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemf22b9f0a-b031-4379-85a2-83c99c3f4690"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Iteme2ccbaeb-8d04-4ed4-80a9-35bedd71afc2"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item654fc903-a3ce-413a-987f-3b629fad29af"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item467ee096-4f5c-484d-9854-99283108d61f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itemeea2ffeb-cb69-4be7-8b3c-36168663635a"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item75e595d3-ac5e-469b-8e54-11dc92c9d623"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item026cea30-2792-4b04-8ec5-2fbba26944df"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemaf407c0f-6749-48eb-ab8b-b64062776d29"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Itemc949cf0e-65b7-485b-9a50-da7823bb21c9"),]),
    getItem("Modal", "Item5cad9989-c416-4695-93d7-7354df018037", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item9da0b5df-7111-432e-bdb3-c0d2d794335e"),]),
    getItem("Tabulator Grid", "Item49907688-9b92-4c13-b185-c2d8589b5898", <FolderOutlined />, [
        getItem("Async", "Itemd386f885-0051-4316-b62e-6ba4daabca41", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item54a05be4-a9ef-4413-9e00-1a9485f377db"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item34a68aa8-7cfb-42eb-9473-b5fc716f77f9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item94d72c3b-c428-45f5-88a7-b40b732309e2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item36f0e45b-be92-4b0c-bd0a-be7ffcc79711"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item508826e9-6e23-42de-8f4b-b13b3a3b610d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item9bb5991b-914f-4f96-a226-fde832bdd7b8"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item19bb1981-eca7-48bf-875c-16d8feea61b0"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemd1c2a699-006a-48c2-b420-51143619a2d3"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item37e7e99c-a27e-4eee-b92c-737b172cbaf6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemdaa2c20f-ee9c-498b-8519-881ca5921c10"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Iteme9398cb1-c028-4954-99e3-c6e8eb157d63"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item5520f5f4-8496-4ad7-a6d2-4ff9c227d0d6"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item2ee100b9-3367-45fc-a41a-41940ff3a372"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item32b92bc9-c309-402f-af70-f31ce3d53617"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd8c6a730-adc4-47a3-8273-48d806089b48"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item3ef10935-7081-4dcf-9ba0-f82e809de91f"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itembbf660ac-55d0-4bd0-9a64-a1cfaf56abb5"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema69deb60-f5c8-4c02-b842-4e03dd1b82f4"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc2b03c51-74b7-42d3-b591-4e0c8265cc55"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item369bd093-c7c2-4b1b-bb13-9fa7f0fc9a04"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemaba4dbe1-9e3a-448a-a387-a2c880aed04b"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item88749586-8ce1-4c6a-8732-8d397f6fc55a"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item113ac002-ba24-47f5-93fb-d2223f522395"),]),
    getItem("Tools", "Itemf013fd57-f685-413f-a943-512976f3e9a6", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item9457a636-6ded-4a5e-8bfb-b50aeae5166b"),]),
    getItem("Tree Select", "Item5197d526-2ce3-4c43-aaa1-72c997e49cf5", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itemd28bf7ad-7fe3-4950-8d51-ceaefe671135"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemd45f3cc2-2bd9-4211-b31e-beb4af36bf93"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item45c01ec7-4704-4895-895c-07bb091601da"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemfc9696b8-d132-40a0-b30b-ca7c4af9cd32"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item3b23fd1a-9266-4950-82bf-68c54237f4fb"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item5917e638-7ec1-450b-97ee-d75039533056"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item3d16f56e-ede8-4383-84c2-dc532a15df07"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item9faf7f8e-db1d-455e-91aa-a69bef3043a6"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item4eb05dbe-e1dc-4c23-8089-9422bf68d896"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item3a0d9c15-66df-4f0c-a4fb-d437339a1309"),]