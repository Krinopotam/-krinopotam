
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
        getItem(<Link to="ModalFormFetching">Modal Form Fetching</Link>, "Item15"),
        getItem(<Link to="ModalFormSimple">Modal Form Simple</Link>, "Item16"),
        getItem(<Link to="ModalFormSubmitting">Modal Form Submitting</Link>, "Item17"),
        getItem(<Link to="ModalFormWithAsyncGrid">Modal Form With Async Grid</Link>, "Item18"),
        getItem(<Link to="ModalFormWithGrid">Modal Form With Grid</Link>, "Item19"),
        getItem(<Link to="ModalFormWithGroups">Modal Form With Groups</Link>, "Item20"),
        getItem(<Link to="ModalFormWithSeveralTabs">Modal Form With Several Tabs</Link>, "Item21"),
        getItem(<Link to="ModalFormWithTabs">Modal Form With Tabs</Link>, "Item22"),
        getItem(<Link to="ModalFormWithTabsGroups">Modal Form With Tabs Groups</Link>, "Item23"),]),
    getItem("Tabulator", "Item24", <FolderOutlined />, [
        getItem(<Link to="TabulatorGridCellFormat">Tabulator Grid Cell Format</Link>, "Item25"),
        getItem(<Link to="TabulatorGridChangeDataSet">Tabulator Grid Change Data Set</Link>, "Item26"),
        getItem(<Link to="TabulatorGridMultiSelect">Tabulator Grid Multi Select</Link>, "Item27"),
        getItem(<Link to="TabulatorGridSimple">Tabulator Grid Simple</Link>, "Item28"),
        getItem(<Link to="TabulatorGridTree">Tabulator Grid Tree</Link>, "Item29"),
        getItem(<Link to="TabulatorGridTreeCellFormat">Tabulator Grid Tree Cell Format</Link>, "Item30"),
        getItem(<Link to="TabulatorGridTreeWithForm">Tabulator Grid Tree With Form</Link>, "Item31"),
        getItem(<Link to="TabulatorGridWithForm">Tabulator Grid With Form</Link>, "Item32"),
        getItem(<Link to="TabulatorGridWithFormAsync">Tabulator Grid With Form Async</Link>, "Item33"),]),
    getItem("Tree Select", "Item34", <FolderOutlined />, [
        getItem(<Link to="TreeSelectAsync">Tree Select Async</Link>, "Item35"),
        getItem(<Link to="TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item36"),
        getItem(<Link to="TreeSelectBasic">Tree Select Basic</Link>, "Item37"),
        getItem(<Link to="TreeSelectDefaultValue">Tree Select Default Value</Link>, "Item38"),
        getItem(<Link to="TreeSelectDepended">Tree Select Depended</Link>, "Item39"),
        getItem(<Link to="TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item40"),
        getItem(<Link to="TreeSelectNodeRender">Tree Select Node Render</Link>, "Item41"),
        getItem(<Link to="TreeSelectWithForm">Tree Select With Form</Link>, "Item42"),
        getItem(<Link to="TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Item43"),]),
    getItem(<Link to="PlayGround">Play Ground</Link>, "Item44"),]