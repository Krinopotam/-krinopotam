
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
    getItem("Other", "Item08482468-8eb4-4d6c-8b2a-597404f1b62b", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itemab6c9c8a-80db-4900-a578-62dd7e1d5f0e"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item4e1806e9-f562-48fb-b7da-873919ddf828"),]),
    getItem("DForm", "Itemf278012a-1749-42ca-be2a-799914825094", <FolderOutlined />, [
        getItem("Validation", "Itemcdea82d6-e690-4c62-bdfa-452b1daf54c1", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemb951a020-15e5-4548-be0b-b909a2d90be3"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemc1eba195-f628-4c7a-a7df-37f799a1138a"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemdc53dee7-1d32-4269-b679-b408671f56b2"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemf2b28a63-88df-49a9-8474-1bdd29d4eb16"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Iteme9cc6c28-1ee5-4902-b21b-6e8ef2f9dd19"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item374a743b-8081-481b-b9b9-f540392cabd4"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item52d91657-49d0-4660-b8c4-1f73663e26b5"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemc1548721-10cc-40a9-af70-80ff189c6284"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item7ea248e1-47e9-4909-b34e-36311d759014"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemc06fe732-9209-421e-ae4c-8b5a50220369"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item169b584a-ef04-46ec-b615-f9d4b43ca87c"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item5870c2a8-7a34-4ae7-8835-51409fd90b43"),]),
    getItem("DForm Modal", "Iteme83b8a00-b875-4228-83b9-a3875b6d886f", <FolderOutlined />, [
        getItem("Async", "Item7d5a1b95-aace-41fe-9a36-efbcf76b7430", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itemd588ee89-5480-4614-a348-580335abc91b"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemdb2fbca5-27a8-4cc2-880c-7f97781c3df6"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemaad97c5c-0548-46d8-81a4-5886e3eb80ee"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item278dea2a-44d4-42af-819b-0568c4bcfe5c"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemfe7c4260-e432-4611-b025-3eac9d682c82"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item2e6e1f38-9c12-4a27-a3a6-e0e36d9b00fb"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item70c3666c-7316-4769-b3f0-7b330a3226e4"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item17148405-3c86-48ae-948d-3f2554bc4560"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item9bca8e51-a16f-4928-b14b-1b5bca920be1"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item5b53d94f-b3c2-46fc-b15c-54515b1d1b5a"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema261cf3a-1427-4dd2-ac0e-ac19337cd94d"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item943df6f1-e529-408b-a1ba-c5eb841ea85c"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Itema78265fb-7a49-416c-91df-137ff0ef99c5"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item0bd537c3-933b-4e3d-9446-410f402ac4da"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itembdedbead-e6c0-4739-911b-1ffa5f91268c"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item2447dfd8-3d61-4641-a0b7-327598827976"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item3782a920-3d83-44eb-b6d9-802929e49141"),]),
    getItem("Modal", "Item472c6977-04cd-48d3-8dd1-a0470b8705ad", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item04247f85-1fa0-40a1-ad31-c8bd074dc3dc"),]),
    getItem("Tabulator Grid", "Itemb3fdd9a9-2d6c-4905-a499-7de697e3f8ad", <FolderOutlined />, [
        getItem("Async", "Item4dd39014-54d2-4f2b-9aae-1dc6f87ade93", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemd19fa244-0e14-4d90-8153-aa44eae25c29"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item208fa9a9-ace1-4db8-a7a7-045f5eb7cb92"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itembf1da3b4-6b57-48f0-bb30-2d73845d14fb"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item17635935-8a97-42e8-a101-a565564e7ed2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemb04fa2a7-dbcb-4587-9c48-1fce77f2ac22"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item36662031-9f54-46c3-b0d1-28f26d87de2f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item56ffa97e-3250-451e-9aea-81858fe908ad"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Itemc462406d-a802-4702-be6c-19431708a21c"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemd3d901ab-b55c-4cc6-8cc2-e5baafc6875b"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item50bea34c-a623-44e2-b63b-c63cf003636d"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item4c03c467-9469-4ba8-acc0-007eac780555"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item4b15f891-0aad-48fd-9aec-8e985ecc9c15"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item47260989-8e23-4639-9eed-c01dae575d24"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item7969da9f-9a93-4872-85ca-3e172668351b"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemc2f6d483-f52e-4868-93c2-1e25792564a6"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item891c8596-e133-49be-9953-f7398c070757"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item9371aa83-60af-419a-a38b-6dab9392e72a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item2204885b-5139-4fa4-bce7-c5a5701ce18b"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item9974d595-19cd-4a01-8d36-9e37aaff7552"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item4e649bb1-ce7e-4941-92dc-c35f415441ed"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemb057d748-faee-4435-ae59-a67c8dda896c"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item31bae39d-0424-4dd3-adb5-e54c2764c359"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item5ad4762e-12ee-47f3-a73e-a946414d4c9f"),]),
    getItem("Tools", "Item1a6f1b06-0bca-4482-8f80-5cbfdad9a85a", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Iteme8982fe0-36c6-4b97-b31a-5a9368f4e23a"),]),
    getItem("Tree Select", "Item684aa581-8da7-4ae9-8aa4-8b5d737565c5", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item97bdfb78-2770-4c06-8c30-3fa49f469fe6"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Itemfc1b8ce2-c9a0-4b73-a794-2112c8042389"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item2931e657-007f-4866-bd92-28a1f7a754f7"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item64ab1293-16b4-4571-b782-a7e44dc49a75"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item21b2307c-c210-4aa8-9320-8069f6804604"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item24104346-0cbd-4420-8a54-3bef1de90d71"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item196c55ee-f48c-435a-b343-7be82fab1467"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item57cafba4-cd3e-4d57-a604-33e365c31fc1"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Itemffe99054-05a4-4ae8-a9b1-6d5f2f3c3a27"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Item6d67e96c-2ec4-40b3-8a24-f84cf37ccec6"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item0b15fcb1-7b47-4e9f-933a-621aca0ca240"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Iteme18ff4f5-4448-4cc3-bfc8-f8443507d1f1"),]