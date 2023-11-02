
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
    getItem("D Form", "Item1", <FolderOutlined />, [
        getItem("Validation", "Item2", <FolderOutlined />, [
            getItem(<Link to="FormSubmitting">Form Submitting</Link>, "Item3"),
            getItem(<Link to="FormValidation">Form Validation</Link>, "Item4"),]),
        getItem(<Link to="DependedFields">Depended Fields</Link>, "Item5"),
        getItem(<Link to="FormBetweenFields">Form Between Fields</Link>, "Item6"),
        getItem(<Link to="FormDependedField">Form Depended Field</Link>, "Item7"),
        getItem(<Link to="FormFetching">Form Fetching</Link>, "Item8"),
        getItem(<Link to="FormSimple">Form Simple</Link>, "Item9"),
        getItem(<Link to="FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item10"),
        getItem(<Link to="FormWithTemplatedFields">Form With Templated Fields</Link>, "Item11"),
        getItem(<Link to="NewFormSimple">New Form Simple</Link>, "Item12"),
        getItem(<Link to="NewFormWithTabs">New Form With Tabs</Link>, "Item13"),]),
    getItem("D Form Modal", "Item14", <FolderOutlined />, [
        getItem("Async", "Item15", <FolderOutlined />, [
            getItem(<Link to="EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item16"),
            getItem(<Link to="FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item17"),]),
        getItem(<Link to="AutoHeightTabulator">Auto Height Tabulator</Link>, "Item18"),
        getItem(<Link to="AutoHeightTabulatorInTab">Auto Height Tabulator In Tab</Link>, "Item19"),
        getItem(<Link to="FormFetching">Form Fetching</Link>, "Item20"),
        getItem(<Link to="FormWithGrid">Form With Grid</Link>, "Item21"),
        getItem(<Link to="FormWithTabs">Form With Tabs</Link>, "Item22"),
        getItem(<Link to="ModalFormSubmitting">Modal Form Submitting</Link>, "Item23"),
        getItem(<Link to="ModalFormWithGroups">Modal Form With Groups</Link>, "Item24"),
        getItem(<Link to="SeveralTabs">Several Tabs</Link>, "Item25"),
        getItem(<Link to="Simple">Simple</Link>, "Item26"),
        getItem(<Link to="TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item27"),]),
    getItem("Tabulator Grid", "Item28", <FolderOutlined />, [
        getItem("Async", "Item29", <FolderOutlined />, [
            getItem(<Link to="Loading">Loading</Link>, "Item30"),
            getItem(<Link to="ManualFetch">Manual Fetch</Link>, "Item31"),
            getItem(<Link to="Pages">Pages</Link>, "Item32"),
            getItem(<Link to="PagesManualFetch">Pages Manual Fetch</Link>, "Item33"),
            getItem(<Link to="Progressive">Progressive</Link>, "Item34"),
            getItem(<Link to="WithForm">With Form</Link>, "Item35"),
            getItem(<Link to="WithSelectionForm">With Selection Form</Link>, "Item36"),]),
        getItem(<Link to="CellFormat">Cell Format</Link>, "Item37"),
        getItem(<Link to="ChangeDataSet">Change Data Set</Link>, "Item38"),
        getItem(<Link to="ColumnsGroups">Columns Groups</Link>, "Item39"),
        getItem(<Link to="MultiSelect">Multi Select</Link>, "Item40"),
        getItem(<Link to="SelectionMode">Selection Mode</Link>, "Item41"),
        getItem(<Link to="Simple">Simple</Link>, "Item42"),
        getItem(<Link to="Tree">Tree</Link>, "Item43"),
        getItem(<Link to="TreeCellFormat">Tree Cell Format</Link>, "Item44"),
        getItem(<Link to="TreeWithForm">Tree With Form</Link>, "Item45"),
        getItem(<Link to="WithComplexForm">With Complex Form</Link>, "Item46"),
        getItem(<Link to="WithForm">With Form</Link>, "Item47"),
        getItem(<Link to="WithSelectionForm">With Selection Form</Link>, "Item48"),]),
    getItem("Tools", "Item49", <FolderOutlined />, [
        getItem(<Link to="PropsToArgs">Props To Args</Link>, "Item50"),]),
    getItem("Tree Select", "Item51", <FolderOutlined />, [
        getItem(<Link to="TreeSelectAsync">Tree Select Async</Link>, "Item52"),
        getItem(<Link to="TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item53"),
        getItem(<Link to="TreeSelectBasic">Tree Select Basic</Link>, "Item54"),
        getItem(<Link to="TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item55"),
        getItem(<Link to="TreeSelectDepended">Tree Select Depended</Link>, "Item56"),
        getItem(<Link to="TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item57"),
        getItem(<Link to="TreeSelectNodeRender">Tree Select Node Render</Link>, "Item58"),
        getItem(<Link to="TreeSelectWithForm">Tree Select With Form</Link>, "Item59"),
        getItem(<Link to="TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item60"),]),
    getItem(<Link to="PlayGround">Play Ground</Link>, "Item61"),]