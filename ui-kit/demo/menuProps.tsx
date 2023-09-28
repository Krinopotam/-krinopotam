
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
    getItem("Dynamic Form", "9925d28d-4055-4b68-96a5-5a1fe8f9a9a9", <FolderOutlined />, [
        getItem("Validation", "06b4b1ab-51ad-4e3e-98c6-9b8ffb3bf7fb", <FolderOutlined />, [
            getItem(<Link to="FormSubmitting">Form Submitting</Link>, "ffa43bc9-e90d-4884-a92b-68f6b1ce7fbc"),
            getItem(<Link to="FormValidation">Form Validation</Link>, "530a8da6-d5a2-4715-8176-bbf00d627ffd"),]),
        getItem(<Link to="FormBetweenFields">Form Between Fields</Link>, "8aa8c0d1-77b2-4e36-b9fa-59a5bb32c52d"),
        getItem(<Link to="FormDependedField">Form Depended Field</Link>, "f4469ac5-b942-424f-8d52-b0223d8b51e6"),
        getItem(<Link to="FormFetching">Form Fetching</Link>, "2c52d02b-d078-4fcf-9a72-587528dba933"),
        getItem(<Link to="FormSimple">Form Simple</Link>, "06e157a1-2dee-4558-9fa3-d5cd3b9881bb"),
        getItem(<Link to="FormSimpleHorizontal">Form Simple Horizontal</Link>, "9b30d578-ed4e-4f47-a6b5-a2f4430954e0"),
        getItem(<Link to="FormWithTemplatedFields">Form With Templated Fields</Link>, "75cfaea5-154a-48ae-9852-d0f5921ea6f1"),]),
    getItem("Dynamic Form Modal", "7f5bb050-af92-4c8c-9f61-ee8f6de3a8bb", <FolderOutlined />, [
        getItem(<Link to="ModalFormFetching">Modal Form Fetching</Link>, "1380fec4-3436-4f29-8bb2-c1684c52209d"),
        getItem(<Link to="ModalFormSimple">Modal Form Simple</Link>, "64e524d2-c5c1-4af6-84fc-894da1870baf"),
        getItem(<Link to="ModalFormSubmitting">Modal Form Submitting</Link>, "20074ecc-8536-44b8-9df6-0d3a0a906b97"),
        getItem(<Link to="ModalFormWithAsyncGrid">Modal Form With Async Grid</Link>, "3012d6cb-b965-4d6e-a267-a78b1cb7b7c7"),
        getItem(<Link to="ModalFormWithGrid">Modal Form With Grid</Link>, "84c4d974-0586-40b9-a1ed-898dd2385320"),
        getItem(<Link to="ModalFormWithGroups">Modal Form With Groups</Link>, "181f3625-2667-4174-9963-0f5a939cbccc"),
        getItem(<Link to="ModalFormWithTabs">Modal Form With Tabs</Link>, "6ee9ebe4-e3e5-435e-bbe0-e4d95799e754"),
        getItem(<Link to="ModalFormWithTabsGroups">Modal Form With Tabs Groups</Link>, "30100d3d-f5b6-439d-bad3-65d7f0155b28"),]),
    getItem("Tabulator", "9d8a3a19-fc35-4caf-860f-e47a94e65ebc", <FolderOutlined />, [
        getItem(<Link to="TabulatorGridCellFormat">Tabulator Grid Cell Format</Link>, "23dce372-a1da-4663-bdd9-511b651fa862"),
        getItem(<Link to="TabulatorGridChangeDataSet">Tabulator Grid Change Data Set</Link>, "a68fae8d-b68d-4acd-958f-3040152983d0"),
        getItem(<Link to="TabulatorGridMultiSelect">Tabulator Grid Multi Select</Link>, "4918a396-49a3-4b68-90c2-ee2c34ca37a2"),
        getItem(<Link to="TabulatorGridSimple">Tabulator Grid Simple</Link>, "f531a9b7-c7bc-471d-afb8-30b333f9520a"),
        getItem(<Link to="TabulatorGridTree">Tabulator Grid Tree</Link>, "4a062530-80f2-482c-8713-d94bba962740"),
        getItem(<Link to="TabulatorGridTreeCellFormat">Tabulator Grid Tree Cell Format</Link>, "a28d8f26-746c-4a2c-b479-31c11be00467"),
        getItem(<Link to="TabulatorGridTreeWithForm">Tabulator Grid Tree With Form</Link>, "3ff80cf8-22d6-49a2-8845-2a0971935ddf"),
        getItem(<Link to="TabulatorGridWithForm">Tabulator Grid With Form</Link>, "08fe4aec-c304-4c15-9224-69762b47ee0f"),
        getItem(<Link to="TabulatorGridWithFormAsync">Tabulator Grid With Form Async</Link>, "35e04076-5d30-4263-9552-c030d7827082"),]),
    getItem("Tree Select", "375081c4-c87b-439b-b131-a03fd066686d", <FolderOutlined />, [
        getItem(<Link to="TreeSelectAsync">Tree Select Async</Link>, "4409bd10-2a47-4b16-a26d-138435ea276f"),
        getItem(<Link to="TreeSelectAsyncSearch">Tree Select Async Search</Link>, "0f7c77fc-432f-4398-9c7a-adb4073e15b2"),
        getItem(<Link to="TreeSelectBasic">Tree Select Basic</Link>, "b7741240-7faf-437f-8bbc-a80ea7e3e868"),
        getItem(<Link to="TreeSelectDefaultValue">Tree Select Default Value</Link>, "4bc851a2-5744-4bde-ad1d-c8fe1eca3df1"),
        getItem(<Link to="TreeSelectDepended">Tree Select Depended</Link>, "3fde5f20-ebdd-4a9b-9031-5e60e927e34e"),
        getItem(<Link to="TreeSelectDependedAsync">Tree Select Depended Async</Link>, "c6e86c8d-41b9-4df1-b316-f02ad111dbd5"),
        getItem(<Link to="TreeSelectNodeRender">Tree Select Node Render</Link>, "e5b66c64-ccae-4bf2-bfe9-f25eced58f9a"),
        getItem(<Link to="TreeSelectWithForm">Tree Select With Form</Link>, "e5e942f0-6495-48d6-8c96-de0146efd0f0"),
        getItem(<Link to="TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "43a5980b-85f0-489a-ac43-7594888c6f30"),]),
    getItem(<Link to="PlayGround">Play Ground</Link>, "7942bcc0-da21-42d4-a14b-1e2740776358"),]