
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
    getItem("Other", "Item2c47bec8-05bf-423a-9097-cb3a71045c99", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Item08806e06-5624-4114-9553-685030e30092"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item95fccc98-c138-49e2-b2f8-82fa055e972e"),]),
    getItem("DForm", "Item4178e952-b376-47e1-b8da-ffb829ca9279", <FolderOutlined />, [
        getItem("Validation", "Itemb17aacd4-1ecc-4b5e-8a8d-ac4e224d344d", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item751af84f-9ddf-4430-9e2d-3567d459ea4d"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item3bfcfafa-c5d6-4864-903c-71da69d0b864"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Item5dd22f93-b642-49ad-8571-98caa04d561d"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item782ee6bc-4576-4156-bc46-b7b12515ca50"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item4244e22c-8b6a-4d7d-9463-6f26888cd8a4"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Itemcabbf4f3-44bd-484a-8073-3ea30847d359"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item067d76a4-2644-4860-813b-fd805a89d674"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item46fb85a9-406d-47f2-b85e-8fa2c7e42eb0"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item3141f4e6-77c5-4de4-968c-87dc3236a834"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item80b98c60-4f40-4db9-84bc-bbc7fb94a844"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item3ec783e4-bee7-4e04-960d-023c753c90d1"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemd3e6083d-04e0-4c93-a702-d809680a2b8d"),]),
    getItem("DForm Modal", "Item0c88d869-393e-47a6-bdc7-4db14460274c", <FolderOutlined />, [
        getItem("Async", "Itemf86498fa-eacd-4277-9b13-bf86eb873669", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item7d4fd6a8-715a-4402-86bd-5c749a8bc9ae"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item1dc1ef4c-3a72-42c2-8131-760309377ab1"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemca03c46d-1937-4888-acb4-61c51a399618"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item76807274-45f6-4321-acc8-f53c49ed9deb"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Itemacfbf665-f917-42a2-b518-a26f231cfdf6"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item4536adb4-23eb-4975-9a34-9cc53ee7c4d0"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item90cc1fd4-3e90-4489-8048-dee17d425cf1"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Itemdeee0ce3-b96c-475d-8e68-a6708a7a110f"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item522fcd79-f708-4598-a3a5-c4b3b92ca270"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item3908d2d6-2d8f-4e0f-8dd6-e15abdecb0ea"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemfcbe3aca-c513-49f5-a9b9-b5be36d767a1"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item2a0d8b39-3b7e-461b-bce6-3778c28a1f6d"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item40019c41-07b1-4fe4-81fd-632dd8a2e879"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item533be8e8-a3e8-4cf4-a9d9-d33022ebc9ac"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item4a268f61-1648-4686-99c6-f4670c5d78ce"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item108a4c5c-b23f-41dc-a245-fade139bcb15"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Iteme0eb00a3-1207-4404-abd8-f3ff98913909"),]),
    getItem("Modal", "Item0c18a5c3-e5d8-4947-88ae-430289e89bff", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item274cbdf7-9b1f-4f51-9e5d-6099518dfb2e"),]),
    getItem("Tabulator Grid", "Itemf629f8af-a583-4b42-9594-627b49693166", <FolderOutlined />, [
        getItem("Async", "Itemc7847f75-e9bd-483e-95ff-61ef60c1efec", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Item9df82d61-b441-42b8-8c49-51d38f9747a3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item2847f594-2aeb-42a3-a704-17c4042ed22d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item92425d10-ef0e-40aa-8600-22ff4012eb4d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Itemba4c6e02-083c-4d44-aa7f-69b3dd83041e"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemda583047-1cc7-4626-925c-f8223da0cbb5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item399220e0-2d5b-4024-9a35-7610e9005047"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item30c9356d-e9a5-44c1-a2e2-552644aec7c7"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item1c8ad018-7541-4f56-9330-6e50bd0222f5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Itemd31a4f92-e40d-4dfc-b246-6b50ceceaa62"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item389c6e4d-696b-4851-966a-d6c8e77d6d05"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item7aaa576a-4f64-4946-a2d9-2bed066721a7"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item80211620-01d3-44f9-afe7-5f52baaf004d"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item006efd90-d289-4458-850a-7f479014b4cc"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item3dfc031c-fad2-4a80-a86d-a28f5a180f15"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item7c1914a8-cad0-440c-a39f-e4deb9b37b63"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Itemd367d43f-c8ea-46c2-855d-69c0782e5107"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item40c58db4-b316-4a15-a7c4-f8a539b6b97a"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item79ecc51f-63b1-4b1f-8cff-fdfe0f5943a0"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item63c22e8a-3c41-4fb3-aead-d73779948afb"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item8d4366de-f580-4439-ae84-f8d3cdc74a5d"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Iteme4e3010b-930a-488e-a683-4ca5f5762d9a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item030a4c9e-0e49-41f7-b1c6-555741efa91e"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item6f90f738-effe-40cf-8424-0417c186e0ef"),]),
    getItem("Tools", "Item3c992b36-072d-41e3-bfbd-5dae1bf19216", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item6d25aad0-1ac7-4e5b-b7ca-ddb266660790"),]),
    getItem("Tree Select", "Item2456d465-1a31-4cc1-94e0-006a7a01c795", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item76ff5a50-6c6d-4a6d-ac03-85d19b344022"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item9c205fe7-b917-41b1-b11a-c744ac9ffe28"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Item271ef759-31bd-4d1a-86c1-b71399487928"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item912e6725-b876-4aa0-b73d-abd5857095c1"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Item0cc729fe-915e-4c48-a225-ea768b3cb72f"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item202b4c25-9573-46f3-8a2f-21437924c272"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item67641597-a042-460e-aa9d-68e260626412"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item5b49c550-ea35-43a4-a645-a54814692972"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item5b7ad465-0d1a-49a0-ab4b-493b51d9219b"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Itemc8e75bc6-a1be-4b58-8b6b-d1eca4b4ddcb"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item097d7090-1e1a-49ae-bc74-c422996a58a7"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item2fed2935-c6a1-4b9e-9b11-8289ef36c276"),]