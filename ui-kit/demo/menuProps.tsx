
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
        getItem(<Link to="NewFormSimple">New Form Simple</Link>, "Item2"),]),
    getItem("Dynamic Form", "Item3", <FolderOutlined />, [
        getItem("Validation", "Item4", <FolderOutlined />, [
            getItem(<Link to="FormSubmitting">Form Submitting</Link>, "Item5"),
            getItem(<Link to="FormValidation">Form Validation</Link>, "Item6"),]),
        getItem(<Link to="FormBetweenFields">Form Between Fields</Link>, "Item7"),
        getItem(<Link to="FormDependedField">Form Depended Field</Link>, "Item8"),
        getItem(<Link to="FormFetching">Form Fetching</Link>, "Item9"),
        getItem(<Link to="FormSimple">Form Simple</Link>, "Item10"),
        getItem(<Link to="FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item11"),
        getItem(<Link to="FormWithTemplatedFields">Form With Templated Fields</Link>, "Item12"),]),
    getItem("Dynamic Form Modal", "Item13", <FolderOutlined />, [
        getItem(<Link to="ModalFormFetching">Modal Form Fetching</Link>, "Item14"),
        getItem(<Link to="ModalFormSimple">Modal Form Simple</Link>, "Item15"),
        getItem(<Link to="ModalFormSubmitting">Modal Form Submitting</Link>, "Item16"),
        getItem(<Link to="ModalFormWithAsyncGrid">Modal Form With Async Grid</Link>, "Item17"),
        getItem(<Link to="ModalFormWithGrid">Modal Form With Grid</Link>, "Item18"),
        getItem(<Link to="ModalFormWithGroups">Modal Form With Groups</Link>, "Item19"),
        getItem(<Link to="ModalFormWithTabs">Modal Form With Tabs</Link>, "Item20"),
        getItem(<Link to="ModalFormWithTabsGroups">Modal Form With Tabs Groups</Link>, "Item21"),]),
    getItem("Tabulator", "Item22", <FolderOutlined />, [
        getItem(<Link to="TabulatorGridCellFormat">Tabulator Grid Cell Format</Link>, "Item23"),
        getItem(<Link to="TabulatorGridChangeDataSet">Tabulator Grid Change Data Set</Link>, "Item24"),
        getItem(<Link to="TabulatorGridMultiSelect">Tabulator Grid Multi Select</Link>, "Item25"),
        getItem(<Link to="TabulatorGridSimple">Tabulator Grid Simple</Link>, "Item26"),
        getItem(<Link to="TabulatorGridTree">Tabulator Grid Tree</Link>, "Item27"),
        getItem(<Link to="TabulatorGridTreeCellFormat">Tabulator Grid Tree Cell Format</Link>, "Item28"),
        getItem(<Link to="TabulatorGridTreeWithForm">Tabulator Grid Tree With Form</Link>, "Item29"),
        getItem(<Link to="TabulatorGridWithForm">Tabulator Grid With Form</Link>, "Item30"),
        getItem(<Link to="TabulatorGridWithFormAsync">Tabulator Grid With Form Async</Link>, "Item31"),]),
    getItem("Tree Select", "Item32", <FolderOutlined />, [
        getItem(<Link to="TreeSelectAsync">Tree Select Async</Link>, "Item33"),
        getItem(<Link to="TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item34"),
        getItem(<Link to="TreeSelectBasic">Tree Select Basic</Link>, "Item35"),
        getItem(<Link to="TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item36"),
        getItem(<Link to="TreeSelectDepended">Tree Select Depended</Link>, "Item37"),
        getItem(<Link to="TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item38"),
        getItem(<Link to="TreeSelectNodeRender">Tree Select Node Render</Link>, "Item39"),
        getItem(<Link to="TreeSelectWithForm">Tree Select With Form</Link>, "Item40"),
        getItem(<Link to="TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item41"),]),
    getItem(<Link to="PlayGround">Play Ground</Link>, "Item42"),]