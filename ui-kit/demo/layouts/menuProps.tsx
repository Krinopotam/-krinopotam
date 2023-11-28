
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
    getItem("DForm", "Item29c88e60-02ec-4b56-9eba-47595e47b5ba", <FolderOutlined />, [
        getItem("Validation", "Iteme1734c78-07e0-4a82-922d-535551401211", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Iteme603e501-6f92-4c59-9383-7b0dbb84ab1f"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item312cef96-3ed1-4ae6-84c8-0492492dcc06"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item18ab3f48-b7a4-4224-9a20-dc74d9efa6bc"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item930a6f16-27e8-41e2-8b71-b84bf0d3a755"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemb8a60c53-8716-449b-b040-11ecd2853994"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item771a68fe-838a-4f94-8d48-b9f91e21ea01"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item6c678adb-c675-49c9-aeff-79d23270a3fe"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item80317cb9-3f1c-4857-8365-420ddd20d30c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item30cfd82e-1a8f-49f3-ae40-c2942d319891"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item7c9ebd3b-ed7b-4560-9269-6beaa1c7c889"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemabf6f293-bfdf-45bc-ab2e-b3532b0435a3"),]),
    getItem("DForm Modal", "Item8d875f08-259c-45db-a080-f6732991e92a", <FolderOutlined />, [
        getItem("Async", "Itemeb16ef89-9358-4554-8375-579916d6ce89", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item921087d1-4949-49eb-969b-218b26286a93"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item87c6312f-3729-4eb9-b74c-14d6dba0867c"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item03272f64-089e-4b42-b376-8d148a94ee87"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itembce22df2-4e66-4e71-9452-0ab43bc2d218"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item298b0e5c-98b6-425d-b351-eefbfce3e46f"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item06d894ae-e052-4b83-b95a-8a2921379191"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Iteme5b2aef8-2bcc-48d1-bed3-4398c0c223c0"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item4de17133-856d-4a4c-9ad7-0d9f320938af"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemc52475ab-1ed9-4f0b-aa74-27729bcbe12e"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item3e5b496f-1384-43b4-9436-a0284cc51d8f"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema154ed92-9e07-449b-8c24-71a2edfdcd76"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemf325ea71-4e01-4d1b-91ff-0cf6983ba555"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item308d4c8b-05ab-4ef7-84d2-ed0ce1568442"),]),
    getItem("Tabulator Grid", "Itemf6073d97-e25c-483a-a1be-58ed357c2cea", <FolderOutlined />, [
        getItem("Async", "Item65610584-2abe-42ef-94a8-2768f42da516", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item69b16499-157e-46c2-b6dd-45af0405eb5c"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itema3be0056-856a-4a97-b316-c7253470373b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item6abbb7bd-a042-4474-95f0-1ad4948db8b1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item5c884fd6-0e6d-41ee-bc37-2dc49b97f252"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item54f14297-2750-40ce-a5c9-5301d535dc3b"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item76155f98-30bd-4601-9cd2-a8ad256b944e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemeaec0999-73fd-4347-871b-b8236413781b"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item8f48b6fa-250e-4fb1-b5f3-ca2d07115104"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item6b70a179-7431-419c-b1ea-bbd06760474c"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item194aed98-2407-4e80-bd65-58413a4eea7d"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item977afa78-cb8c-4435-a759-e48f4faef3be"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemc2d123f9-ddfb-432b-9371-a3f326c238bb"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item165716a5-f371-4545-bdaa-a27d7880eddf"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item0771b3e2-edeb-41d7-9f38-22eace740e27"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item57453cde-60b6-4fa7-8755-ddf1bbc69dd7"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Iteme0409e05-1c89-4f64-a9be-453a0473bb29"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5ff7090f-f833-4148-b16d-7fab96c8986b"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item04cd89ec-f381-4928-b647-7a65666d6a47"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemc68be2ba-b82a-4a7f-8311-299693ac7f71"),]),
    getItem("Tools", "Item8d01f08c-1574-4f53-b7df-2b8f426b80f0", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item717ce2c7-f799-4f57-bcc3-44ea9cc8f72a"),]),
    getItem("Tree Select", "Itemc25d41f4-6fbc-4d37-8ed2-d40a47caac17", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item21d90add-a55a-452a-9d48-57c9eb0a2040"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item04566882-8664-4313-93f6-789db3ee3062"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme6bc6065-8635-4eeb-8180-20569e1e4d9a"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemb65ccd0f-f8c4-4fa8-bc3a-02f293cdb671"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Iteme1165c5b-6e65-4f3b-af96-c442a18e761d"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item73e11526-6c01-427f-b7ad-b22143c96ca2"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item8197d32c-d574-477f-8873-f80dc605953c"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item3c9b5924-88ca-4590-97e1-7f400874eac5"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itembfe2a8ec-3a63-43ef-bee0-a48b450a2a08"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Itemd0688ac4-c277-43f3-902b-2043052c1966"),]