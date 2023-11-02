
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
    getItem("DForm", "Item13", <FolderOutlined />, [
        getItem("Validation", "Item4", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item3"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item4"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item5"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item6"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item7"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item8"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item9"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item10"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item11"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item12"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item13"),]),
    getItem("DForm Modal", "Item27", <FolderOutlined />, [
        getItem("Async", "Item17", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item16"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item17"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item18"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item19"),
        getItem(<Link to="/dFormModal/FormFetching">Form Fetching</Link>, "Item20"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item21"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item22"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item23"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item24"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item25"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item26"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item27"),]),
    getItem("Tabulator Grid", "Item48", <FolderOutlined />, [
        getItem("Async", "Item36", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item30"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item31"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item32"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item33"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item34"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item35"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item36"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item37"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item38"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item39"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item40"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item41"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item42"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item43"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item44"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item45"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item46"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item47"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item48"),]),
    getItem("Tools", "Item50", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item50"),]),
    getItem("Tree Select", "Item60", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item52"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item53"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item54"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item55"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Item56"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item57"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item58"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item59"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item60"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item61"),]