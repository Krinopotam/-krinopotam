
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
    getItem("dynamicForm", "1e71cee5-e9f2-4242-8d04-df8efe2aa2cf", <FolderOutlined />, [
        getItem(<Link to="FormBetweenFields">Form Between Fields</Link>, "4b34da29-0fef-4380-bb13-339777f64eea"),
        getItem(<Link to="FormDependedField">Form Depended Field</Link>, "59717a30-4b7a-40f2-95da-a14ded1162ad"),
        getItem(<Link to="FormFetching">Form Fetching</Link>, "fbbda587-729a-4b58-a09a-81539115775f"),
        getItem(<Link to="FormSimple">Form Simple</Link>, "25faa0bd-9d5a-4989-ae33-bf7ba24b9283"),
        getItem(<Link to="FormSimpleHorizontal">Form Simple Horizontal</Link>, "49398e8c-0727-41b7-b34c-fea5955975bf"),
        getItem(<Link to="FormWithTemplatedFields">Form With Templated Fields</Link>, "afa7fe34-06b6-40a6-9d38-072146895f17"),
        getItem("Validation", "e59f5eed-0534-4602-afd8-5c3434ccb35b", <FolderOutlined />, [
            getItem(<Link to="FormSubmitting">Form Submitting</Link>, "a84cd909-c420-405e-961e-cda5c8a6247a"),
            getItem(<Link to="FormValidation">Form Validation</Link>, "bccd98ce-7cf1-4167-abda-85624317afd9"),]),]),
    getItem(<Link to="ModalFormFetching">Modal Form Fetching</Link>, "6784a464-00e4-4eb5-a729-06147a0400e4"),
    getItem(<Link to="ModalFormSimple">Modal Form Simple</Link>, "27047fa9-1dbc-4ad9-8613-ff6797a5e2d9"),
    getItem(<Link to="ModalFormSubmitting">Modal Form Submitting</Link>, "d9e09641-2df2-4108-a766-27cae78c1657"),
    getItem(<Link to="ModalFormWithAsyncGrid">Modal Form With Async Grid</Link>, "bbe52e06-395a-45f3-a3bb-602fbea99e5d"),
    getItem(<Link to="ModalFormWithGrid">Modal Form With Grid</Link>, "76158369-50eb-4a01-a27a-909a1fd7a7ef"),
    getItem(<Link to="ModalFormWithGroups">Modal Form With Groups</Link>, "e76f6c21-1141-4543-a2fd-63dbeed7f283"),
    getItem(<Link to="ModalFormWithTabs">Modal Form With Tabs</Link>, "1a69ba00-28c9-4d9c-9608-12c0d2b3cb93"),
    getItem(<Link to="ModalFormWithTabsGroups">Modal Form With Tabs Groups</Link>, "484d1c06-b4d1-4bb4-9eeb-0e863fcea4c1"),
    getItem(<Link to="PlayGround">Play Ground</Link>, "6fd29e05-a633-4b80-b0dd-802b49c9c1a6"),
    getItem(<Link to="TabulatorGridCellFormat">Tabulator Grid Cell Format</Link>, "e467a80a-9480-4bbe-9d85-2dfbdb869e31"),
    getItem(<Link to="TabulatorGridChangeDataSet">Tabulator Grid Change Data Set</Link>, "e5670322-ca74-4934-a38d-23bc8a8f4764"),
    getItem(<Link to="TabulatorGridMultiSelect">Tabulator Grid Multi Select</Link>, "6b88631f-d5bf-44fa-ae47-a2034feec853"),
    getItem(<Link to="TabulatorGridSimple">Tabulator Grid Simple</Link>, "7bf65963-27d6-4904-b0ca-20350b72ca42"),
    getItem(<Link to="TabulatorGridTree">Tabulator Grid Tree</Link>, "89ee651a-8ac2-4911-8ce3-7820fbdb14e9"),
    getItem(<Link to="TabulatorGridTreeCellFormat">Tabulator Grid Tree Cell Format</Link>, "6efba390-e10e-41e1-bdb9-51ffe714b626"),
    getItem(<Link to="TabulatorGridTreeWithForm">Tabulator Grid Tree With Form</Link>, "dfbf195a-40a1-4d12-b1b8-cff41befa4a9"),
    getItem(<Link to="TabulatorGridWithForm">Tabulator Grid With Form</Link>, "5e1c8c8d-eb42-4bd0-b5cf-4a1ecc77fe25"),
    getItem(<Link to="TabulatorGridWithFormAsync">Tabulator Grid With Form Async</Link>, "8cce3549-a5ce-497d-83e9-e196c42bfbec"),
    getItem(<Link to="TreeSelectAsync">Tree Select Async</Link>, "5f2b7669-2fb3-4141-a913-16fd84f40ae4"),
    getItem(<Link to="TreeSelectAsyncSearch">Tree Select Async Search</Link>, "5829a09b-e19a-46ed-a6df-6ad6c4936361"),
    getItem(<Link to="TreeSelectBasic">Tree Select Basic</Link>, "bbdbf3b6-64d3-43b5-a188-f600048e1d36"),
    getItem(<Link to="TreeSelectDefaultValue">Tree Select Default Value</Link>, "3b0b7aa7-b0f6-4eba-ac28-4793c355e159"),
    getItem(<Link to="TreeSelectDepended">Tree Select Depended</Link>, "0c32df4f-7f05-48b8-b3d6-e284ccb34ae1"),
    getItem(<Link to="TreeSelectDependedAsync">Tree Select Depended Async</Link>, "72455576-5a83-4894-a567-b05e38733a2f"),
    getItem(<Link to="TreeSelectNodeRender">Tree Select Node Render</Link>, "68ba6e17-5a75-421f-9230-a2b05f178e20"),
    getItem(<Link to="TreeSelectWithForm">Tree Select With Form</Link>, "8135641f-4240-4f41-abc8-d2031ca882cd"),
    getItem(<Link to="TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "2ddae9f4-6306-42d5-aa5a-bf8f48cfff1e"),]