
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
    getItem("DForm", "Item85151351-8321-4863-b32c-511955e51780", <FolderOutlined />, [
        getItem("Validation", "Itemd867d02c-4063-4bf2-bd1b-dfa4b734aac3", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemd6699f0c-8f68-4c8b-913d-3990fa9bd3dc"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itema075f5a8-d00c-4468-8375-c27f03e47364"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itemeca68d86-9d69-4496-a3c1-eb318e14ae51"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item92a8f12f-bfac-4dc2-9fe6-07b59a1e734a"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item6e19c8cd-3114-4bb0-9aea-d9acac33d0ad"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item4019b783-801f-4eab-ab29-64a048b549d8"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemee2af037-728e-4f5e-b436-c080c4d197b0"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Itemcd95032c-ce48-4f40-9bd7-96c3e7af88e0"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Itemcb0a7d33-c721-4c4d-ab71-1e858ec46be8"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item5e41ff8e-f64c-49ee-9977-d5ee786a51cb"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Item1f9b62c5-0863-42c7-ba16-486d54741057"),]),
    getItem("DForm Modal", "Item6f3aedb7-9999-4fca-882f-94bbcb2d3f01", <FolderOutlined />, [
        getItem("Async", "Item9569ffff-91d8-4bd0-9919-c44a2bdb82ef", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item7eb7a922-4ed5-4598-87ff-aee96df1c18e"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemde7d2352-6c81-48d8-9f3a-2bead9d587f0"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Item8ab050fd-9f0f-4622-9c21-b5b79d5f9c0f"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item266549f3-d8ed-43e4-8e18-e130f0be03d9"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item8691c43e-6041-4f65-aa07-47b45dbffdba"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item3c2b6a41-831b-4042-a282-770ae58800dc"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Item295768ae-bda3-48dd-bacb-517141ab3bfd"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item1d5fb58d-ffc2-4925-a8b1-b0cc08b5efb1"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item5af4e6e9-b687-456e-b569-fe086f2e73fe"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Itemc466b99e-dbe5-48af-9b5d-1a2df7cc63d5"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Itemf9e2a796-87c9-4ee2-bf3c-1b7d483fb1f8"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Item5aee450b-4656-418a-8cb5-508ab678e76b"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item834f3270-c712-4848-85e9-aba14d48225f"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Item3657bd50-7b8d-4bed-b46b-dde6094f609b"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Item279161af-cf91-421f-8958-b51b7b3d7b84"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Itemaa58da03-ad1e-4493-a1f3-d579abd5e1a6"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item2466c0d4-c43a-4058-9a32-e97a8373e4cc"),]),
    getItem("Tabulator Grid", "Itemef824f01-79c3-42e4-a2c4-3816b2bf6627", <FolderOutlined />, [
        getItem("Async", "Item502662b0-f96e-4eac-a78a-308e3c696c1a", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemc37bf374-dcb8-4ac7-8236-69dbdf5b0227"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item8cc1f83c-e421-4b0a-a329-6fb33a1431d5"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Itembceee036-3f28-470f-8a73-76cc261523d7"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Item96bcfeca-87c5-44c0-bb77-5a769337e120"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item2289ac2c-0e53-4419-807c-0806a6b88f12"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Item1ad8011f-48a2-4d0f-bbee-7812902c382d"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Iteme96c06db-e365-4cac-8273-a72dfea44f7d"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item933be187-fc2b-40e1-ad7b-ef3e579aa2b5"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item334152a9-e046-47db-86d7-e8a20500a7a3"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Item92908826-980f-41c2-b010-354785247d31"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Itemdef2ca2b-60e0-45ea-8652-64756149c8ff"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Item207d8117-8899-4f4f-9f32-b80f35860d04"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Item1cedd2d5-e0d9-478b-be90-7b6eac1afac6"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item0e5c8bd8-68fc-4633-89ed-d28ce120fb3c"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Itemd26db1ba-51b3-4e40-b14f-6490a830c9d2"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item2ea66a05-3c9d-458c-8f45-a1d6b174436d"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Itemd6ed96b6-f05b-483a-b0e2-a14ba9f039aa"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Item01001f23-69cb-4546-a5c6-8f758f229fae"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Item6092eae8-acf9-47f5-ad5e-87f21f743815"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item306b3ee3-542c-47bd-ae1f-a53f9d3b4aa5"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Itemae0291ad-a3d3-40de-af3f-3bd85b2958a9"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itembdbf3a28-c735-4363-afa3-4c2995409739"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Item427ebb0c-0f9d-4e03-b1a3-65806635f3fc"),]),
    getItem("Tools", "Item9824ee2b-3ce9-4bd7-9615-1c5b7aed2596", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item06137eb5-a752-4522-9289-1f49db93fa56"),]),
    getItem("Tree Select", "Itemb88537f4-c420-41a8-8bac-b0fa1a128e6b", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item2056c3f0-6d28-4b05-88ad-bb2ba057296d"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Itemffdc1713-4b07-48b4-9cd4-d43c0d2f4839"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Iteme12d6f92-3d71-4c7e-b1cf-8c1d90121190"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemb9ae251d-c257-4638-8a9c-5403636260b5"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemb5c0fa6c-b768-453a-9ee1-ea48aeaf00bb"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item300a5486-590f-4c76-910e-78514260d244"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Itema4244468-bcbd-4a28-ac45-df943378c075"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item8e2b467f-9db2-4091-aed1-9b9841c95c54"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Itemb2f012fc-8f2c-47c2-a249-9c14da5e80ca"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item60e72177-0a5e-49ea-a4d7-40ac2154080b"),]