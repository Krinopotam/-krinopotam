
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
    getItem("Other", "Item6a853e99-2592-41e9-9604-dba1c95b27b6", <FolderOutlined />, [
        getItem(<Link to="/Other/Test">Test</Link>, "Itema5f84450-eac3-4e31-85ef-29ebc5283c4d"),
        getItem(<Link to="/Other/Test2">Test2</Link>, "Item286f12e6-0568-4471-a9f6-2e134dccd5ef"),]),
    getItem("DForm", "Itemd03b0f97-a0af-49c8-b624-eddca71a2a6c", <FolderOutlined />, [
        getItem("Validation", "Itemc8df37b5-dd60-48f5-bf52-b2bca16176f5", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Item9d4b1dd7-b883-4ebc-a00d-6187f847203e"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Item86502641-a953-4e22-bae6-faf9b8770edd"),]),
        getItem(<Link to="/dForm/ChangePropsViaApi">Change Props ViaApi</Link>, "Itemd5f94348-f310-49dc-84cc-4b74ff68b259"),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Item2985a978-c127-4802-8088-e5721a135ff9"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Itemcbff9e71-288e-4ff1-b347-7d5b3db9234e"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Iteme73f0f62-444b-4c19-948a-0c037e07cfa4"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Itemef30b985-06e7-4b4c-b8f8-3b1849d364e3"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Item2c85688b-fbc9-4bbb-bb7e-3ca00a0ef895"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item2d5d0650-9fd9-4c8c-840a-198b1e9c040c"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item2b4115f3-3e6d-4d41-a5b8-57fd8afd1b7e"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item11dfe08c-51e1-4b4c-a5de-9750662d80f2"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item2d30d23b-c9cc-4cc2-8fd3-0a62d51ba72f"),]),
    getItem("DForm Modal", "Itema40c361e-bf31-40a9-a7f6-a842be4a9cfc", <FolderOutlined />, [
        getItem("Async", "Itemcc6d631c-d7e3-46c4-9546-7407711d2712", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Itembb3502f8-a87e-4ab8-aae7-2941b2ff4478"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Item00160823-4dbe-4a38-9d9b-f02ee2df3306"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item347a4c07-caf7-4142-a2ef-fca0cd44bd31"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item4e54cf07-4594-4665-ae7a-be51c171c5bb"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item8aca2f5d-4a42-43ff-a938-a7694aa987a0"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item23a494a8-1201-4d8a-8914-842f86860cec"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item7e8c6039-f805-4d65-80e0-1581e6fcf63b"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Iteme083ef27-b857-4eb7-ab16-2ae63cf8c0d4"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item8bec240e-cd0e-4a35-96c2-51bcbd6190f7"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item47081836-da1b-4f02-9e26-c905308b3327"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itema74950ad-09b5-4154-b584-ebac5165cf26"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemd331255b-39af-49af-9c34-d5c88a22508c"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item6706b711-a8e5-4340-af7a-96e1bf956956"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item90f73e09-8f32-475a-ad2f-a908f9d93719"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemacbf3258-0e2b-45a9-99e2-71c19238a34b"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item614b9893-82dd-435b-95a7-5a2a2f4ed43b"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item036d6cc5-8f5e-4194-9ed2-ac490ac721ba"),]),
    getItem("Modal", "Item293e1148-28d7-4258-83f5-84aa26135624", <FolderOutlined />, [
        getItem(<Link to="/modal/Simple">Simple</Link>, "Item7fc92924-84b2-4279-ac33-8949741d1160"),]),
    getItem("Tabulator Grid", "Itemec1de8a3-503f-4d79-a50f-492c7a8624c8", <FolderOutlined />, [
        getItem("Async", "Itemaa03f5ec-657e-4e99-857b-c41d60dce08d", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemcb38a884-51be-47f4-acbe-c7303d6e3cb9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item7d549f39-7818-4617-95dc-3906330f6102"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itemec55acd1-3424-4ced-93e3-6c0ad0f95478"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item843e7dfb-bd72-467f-ab16-3b3343bc8647"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Itemf0691b9f-fbbf-435d-9ff6-d517b39bb8a2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemb3e96ec2-ccc4-46e5-bc0f-a17229223148"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Item8bff5025-911e-4183-8591-fa5a3feb7779"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Iteme3254b48-365c-4cb5-b41a-d340c561e123"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item446cf6d6-6815-4109-8b9c-d299ea03c3b4"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itembbdabeb7-eb65-4c3c-be17-1983026ca90f"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemd0889939-a6a3-4e9f-9077-ba97807eb11e"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Itemc5e96aa4-d84f-471d-8dda-eb08b35967d1"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item217f31ef-3da7-4786-a1fa-e2f1dfb17fe1"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item170ad958-7132-40d5-b18a-0d4be3598163"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item0fb4c3d7-b9ac-4feb-9b10-722906407261"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Iteme98540a7-b4c5-41c0-ae0e-3571d2e2ccf6"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item4bd7859b-52e3-4b93-90d8-822303489fb1"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item28b5c62b-167b-48a0-b689-f75c9246ffbf"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc06531bb-a1de-4d41-ba2f-cd67d34edcdc"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item79ac19cd-3083-454a-9f3f-fc1e3e7d272f"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item0f6d0d4f-b642-417c-b111-d5180b41cfaa"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Item3e32ce27-1779-4987-94a8-eb04be8b10a0"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item9ae35220-a166-4e8c-9b1d-c4c472b163fa"),]),
    getItem("Tools", "Itemc9f4f577-8bc3-489a-a227-b46791d582df", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Itemfb0b666f-c931-483e-9db1-feddb60dfdf2"),]),
    getItem("Tree Select", "Item0039fae6-88a7-4df9-9a63-65e53ce858c2", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/Async">Async</Link>, "Item124a7e8e-d7a7-420f-a14b-8bb61c7d8ed0"),
        getItem(<Link to="/treeSelect/AsyncSearch">Async Search</Link>, "Item9fec5ef9-ff83-4e69-8bc4-07be68159d9a"),
        getItem(<Link to="/treeSelect/Basic">Basic</Link>, "Itemf2cd7d43-55d2-4d4a-a620-1eba074cd9b1"),
        getItem(<Link to="/treeSelect/DefaultValue">Default Value</Link>, "Item2fae8d76-2e76-4442-a15d-0830e721ebd9"),
        getItem(<Link to="/treeSelect/Depended">Depended</Link>, "Itemb8d1cc11-4a3f-48ff-b733-16c76ebfef01"),
        getItem(<Link to="/treeSelect/DependedAsync">Depended Async</Link>, "Item9db6542e-f400-4199-8893-8c49367f66ee"),
        getItem(<Link to="/treeSelect/NodeRender">Node Render</Link>, "Item7f42859e-0a7b-4b7b-9273-5cdd710bd0c6"),
        getItem(<Link to="/treeSelect/ReadOnly">Read Only</Link>, "Item5bea1886-baf4-41fd-8f91-19ba2e3ac510"),
        getItem(<Link to="/treeSelect/WithForm">With Form</Link>, "Item9c98c8e9-a3c7-44b9-8025-28a28399d072"),
        getItem(<Link to="/treeSelect/WithFormAndNodeRenderers">With Form AndNode Renderers</Link>, "Itemfacaf38a-9f76-4f4b-8d2d-b1db1878d546"),
        getItem(<Link to="/treeSelect/WithFormAsync">With Form Async</Link>, "Item141bb381-9972-49e6-9e5f-b61d6f314e20"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item47673209-50d8-4295-84c8-f444b35cc9aa"),]