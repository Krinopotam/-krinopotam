
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
    getItem("DForm", "Itemee0c123e-8264-49bd-bf4e-1ee25db04548", <FolderOutlined />, [
        getItem("Validation", "Item5be3e619-c19a-49e5-ab96-e0d3f1b901ae", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item682aac45-6eed-4c69-a12d-64d537f96cdf"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item89736da2-3340-411e-b616-0405c086ee81"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item61a0a767-ae14-44ca-9e92-8bf47f3f5d0f"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item2dd4d2a8-944f-468b-96ae-f2edc3420127"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item1e231895-a4ba-44b0-9eb0-8b1801ebd998"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemdd3421e9-81be-49f8-8a62-bc4377d2545c"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemcd752611-e61a-43cb-a454-d765fd7de33a"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item53ddaf4d-aaab-4007-b2a3-b1c628a349f3"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemf5f535a1-ee01-4381-934b-1d5ffca23883"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Itemef2b780f-e6b6-475f-ad11-4c51e1a5afc7"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item28bce8a7-e633-4fc7-9bf9-adc4323a02b8"),]),
    getItem("DForm Modal", "Item5d45bb3a-ed1b-4601-90f8-371ef6fce605", <FolderOutlined />, [
        getItem("Async", "Item6d6cb893-4526-4391-b722-29afe059fb24", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemf01e6111-70a9-4f76-a644-caf06ca3c1df"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Itema1c5caee-d954-4eab-8231-e67ae43a767d"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item1968cf13-ff24-4c04-aa7a-61155b8c67e0"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item4534b4a4-81cb-4332-8823-4600e04ac907"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item8f964883-3c35-4ae0-b58b-88d70c81d13e"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemfc0b8dd9-dff5-4039-9041-9d9d4d6f1130"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme9224096-a854-4a97-9477-76a83638a467"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Itema87c0b49-de90-4340-b5c0-942a89226b63"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemb173dfd0-de9f-4fd2-abe4-425924af6727"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item16bcd392-1fb6-4393-8d96-8e0fd6d5855a"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Iteme2c3c5a1-cddc-45a8-86f2-9df2e1fc3b34"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item40c40128-ee30-40cf-a61c-0888db67e6f9"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item7b0a3a88-96bd-4474-a7f9-b55a26526bb4"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemc3e87f15-459a-4126-ab7a-094f0ff195db"),]),
    getItem("Tabulator Grid", "Item5079b6ac-a1c5-41e2-ae0b-effe2b53444e", <FolderOutlined />, [
        getItem("Async", "Itema66084de-9696-4f78-aff5-a06102bc5982", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item9c840820-a5e9-4269-9464-59bc272b7817"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Itemfa86f7c8-13ac-4346-9443-00ebd5d96ae1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itema0eee639-6546-499f-b21f-3d914a482686"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemde41ee67-fc1c-446a-9ccc-36a1c9a6f176"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item20fd70e3-3c69-4e6c-ab5a-48d66b20e539"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itembaa93568-9c83-4637-a3e1-4f6e60cc0945"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemd726b948-2500-428d-bd74-8ff4a6414cb4"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item369b52e1-1831-4e65-87d1-6867f1d00dd5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemf6b1adbe-6a33-4da7-8c03-f085b96cd081"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemd2f948fd-dc81-4cd2-a130-fd55a0bf0ff1"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item06911d45-70f7-4c83-9fb0-704b23620e39"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item38df562f-e939-4628-aea5-1018668a84c1"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item39651e92-17f0-4946-bb4c-8599b1daab4c"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item9c09c583-b214-479d-9b62-27863898b7b2"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item83cbdf5d-5d97-48cb-90fe-6c486b6df1e1"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Iteme521d7da-cc3b-4c2a-800e-b3dffdea6179"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item326abec6-79be-4348-b8d7-f8b2f62346e4"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item9fcce258-9a0f-4bac-90ed-fafdd313ee74"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemcb6b83fe-aeca-4e0f-aa22-d242db4aad3e"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itemc730f07c-4c7f-46c2-82a2-acd2d711f83b"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item8bfa6c9e-805e-4843-bdec-642a8ae0b2da"),]),
    getItem("Tools", "Item8fc193ff-3b58-4015-a7ae-cf2c09954e13", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item09ba3b6e-22e9-4cab-8ecf-f645f0d2a53f"),]),
    getItem("Tree Select", "Item3230fa5b-cc73-430b-acc3-8846bceb7002", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item26e2c1ea-09f4-4cfe-b20c-a7d8c7bca218"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item95dcd6f6-2e36-4171-aa32-b1a313924b69"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Itemd3f537a1-1074-45de-91c7-acf4356c7417"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item5f91d370-71dd-4c2b-86ea-a6676f8ee784"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item49fcfe42-926b-438d-aaff-cac82e53d5c0"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Itemd44c88cd-1cf9-4e54-b2ea-65b67c9bdd9c"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item70f75f91-e8f8-4544-9281-0721ce96569b"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item02bdf004-8e31-4953-970c-df259fff893f"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item84fec9f9-01a9-41bf-811a-5591563157f6"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item6f92247b-7289-4fee-84ff-edc8485f1c07"),]