
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
    getItem("DForm", "Item8bc62e13-8ed3-4a38-878d-baca95597db9", <FolderOutlined />, [
        getItem("Validation", "Item8cd0b742-a15c-44a7-8a01-efbb799c4287", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item7fbf4d22-4790-49f6-85cd-855882461b86"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Iteme3de6008-ffc5-4bbb-a137-b3ddde315f9c"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemaef78a3c-da7a-47b0-8c01-8e95c859e8ef"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemd8a14089-33b3-497d-b79f-afd2720e78e8"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item6518bdab-95d5-4f2a-a734-5a04ffee0e4e"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemcb778151-61bd-43e6-99b9-3bd4878a23bd"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item7920ba19-cfae-41bc-80c4-36e179292bcf"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemed752738-e1ef-4113-a72b-27d1c9496992"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item47fe0dd5-8b07-4538-93cc-98ce7efd3921"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemae5b99e8-a660-453e-9a04-9324ba9dd162"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5f7c3e81-972f-47c7-b758-ead83924e9d4"),]),
    getItem("DForm Modal", "Itema13027ba-358f-4b80-9d35-e8fe118490fe", <FolderOutlined />, [
        getItem("Async", "Item093e714b-f7d2-4c6c-bdca-15aac9b4a359", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item9cd34e2a-d53e-4ecd-98be-22fffd6854b7"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item80543153-1eb1-4fd6-a192-2b7855ea59f9"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item2095cb0f-c3ee-4120-bf1d-7132054ccdf6"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item931d958b-4d22-4c6f-bf09-14fb66bd00d0"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Itemb65c9e30-6866-4eb0-a771-e11f700961ba"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemcf884b11-d271-4439-b7f3-302613b58c1f"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item9ebd475b-59e8-4fc4-82d3-348fbe026f0f"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itemc3d4853a-19c6-4c37-8738-67076b8ddeff"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemdd6c13b3-21eb-47ad-9385-2dc79a3adee4"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item31420670-92bd-4502-9d4b-6e6aa0a8fb94"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemf1d7663a-5f6b-40fe-9021-ed79512bb7c7"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item973bf18c-98f9-49ec-9d45-04c1abece970"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item4ef1aaf1-7860-477e-8f40-719d49b52a4e"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item5322c38c-e760-4e0c-a817-625bbe5431c4"),]),
    getItem("Tabulator Grid", "Item97926b78-39e5-4275-b732-ee61746d6b35", <FolderOutlined />, [
        getItem("Async", "Itemd696c694-34c3-4e3a-8e2e-c3f57637b2d3", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item4b8aee2e-4123-4137-bebd-878872993404"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item09a5fff3-e045-4dba-89a7-9aea48ed3152"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item463d5a07-72ec-4a48-9404-58c52b4d2fad"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item82a45907-a262-4c9c-b1ef-f55d507c18e1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemad85bf8b-da60-4892-b47e-05165388d01a"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item331c1e40-7c11-43a4-a217-4b8eabbce1ad"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemf3c85cfd-33ae-408a-bf86-ddf891bdbe3e"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemc5f3dc6f-fa9c-41ef-93bd-424ee0a93f39"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item5bd231ee-9c84-4ca8-a78f-8bf2a6ec4cb6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item0f69cc11-5435-4dd6-a7ba-901099f476e9"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemcb4491f2-b21f-448b-8420-bb1266ecc376"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item2f1a4438-f4e9-45d8-a37b-13eefcc27583"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item9e385a2b-7e74-472c-9afc-f77a7d1b896c"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item428bf473-1f6f-4d08-a689-0889957cab26"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item8a1d8e3a-85bc-49d8-934d-4f5c2e4e5dcf"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itemde33abf7-0fe4-460f-9f6e-25e07bba6956"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemef5ab143-4571-4ba7-add9-ad619aa0e441"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item5c25665d-1ebd-4bc8-9cf1-915585eb68c6"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item837f68b9-03cd-4510-aaf1-d4b8816e5f7b"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item7f96e9e4-de41-47e4-9f82-e324a7e50430"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item294032d9-3e3f-496d-a432-253e94eb9264"),]),
    getItem("Tools", "Iteme2a8bd1f-b0ab-4432-9afd-284f63c1eaf6", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemca496629-83aa-4177-9628-d7bc4ea2a556"),]),
    getItem("Tree Select", "Item736a3fde-42c6-4330-b14e-401e9a2c58e5", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Itema7c99ba3-f806-4a28-8bf0-25a70e1b33bd"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item9b2b5239-50a0-4af6-90b2-21449f9f9089"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemf114e515-13c1-4c6b-9d67-3d1bdfdbceea"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item6d0a5699-fa49-429b-b866-22235c167789"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item3a83795f-aa8b-47ee-8c0d-92333d6d4dd4"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemb77549c4-0c15-482f-a92a-d9e2dc20d9ec"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item64cfad2a-6210-4bf5-8e7d-09006d6a5585"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Itemb322a335-47de-4f95-82e8-8cb136c93cc0"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item5d69e6cd-c9cf-41ba-bc81-acbd432cf593"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme65de603-3278-4198-8e55-61e5eb87aa2d"),]