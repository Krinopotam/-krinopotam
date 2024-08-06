
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
    getItem("DForm", "Item2519bef1-94fc-424f-965e-827657acb299", <FolderOutlined />, [
        getItem("Validation", "Itemfe4808bf-c1cc-41a7-8e81-a0470be9e7d5", <FolderOutlined />, [
            getItem(<Link to="/dForm/validation/FormSubmitting">Form Submitting</Link>, "Itemf671d732-5aa7-4a90-9122-0f1580f3e1e4"),
            getItem(<Link to="/dForm/validation/FormValidation">Form Validation</Link>, "Itemf3cdbcc4-7c3f-4738-982a-c229c31b70d6"),]),
        getItem(<Link to="/dForm/DependedFields">Depended Fields</Link>, "Itema3c458ee-06bd-4aff-b914-fafe431c4426"),
        getItem(<Link to="/dForm/FormBetweenFields">Form Between Fields</Link>, "Item0e0abb3b-a025-4dc5-822f-d954738880e2"),
        getItem(<Link to="/dForm/FormDependedField">Form Depended Field</Link>, "Item366036f1-ab8e-40d8-8011-63e0a349b5df"),
        getItem(<Link to="/dForm/FormFetching">Form Fetching</Link>, "Item588cf82a-b009-4d40-adcf-d76953249294"),
        getItem(<Link to="/dForm/FormSimple">Form Simple</Link>, "Itemee944892-b008-4f68-81d7-b8146d8ee411"),
        getItem(<Link to="/dForm/FormSimpleHorizontal">Form Simple Horizontal</Link>, "Item402deda7-b869-4c25-8337-1a5077817d4f"),
        getItem(<Link to="/dForm/FormWithTemplatedFields">Form With Templated Fields</Link>, "Item466a6059-6e5e-463f-b673-5e349a4e4f98"),
        getItem(<Link to="/dForm/NewFormSimple">New Form Simple</Link>, "Item956c8ba4-a749-4841-a6de-c2402d1c18ec"),
        getItem(<Link to="/dForm/NewFormWithTabs">New Form With Tabs</Link>, "Itemaba10fa8-11c4-486a-a153-f5ca6da6f73c"),]),
    getItem("DForm Modal", "Itemef040485-0b16-4b21-9ff4-c09adcff8592", <FolderOutlined />, [
        getItem("Async", "Item62b5df0e-8222-4472-951a-3dfaef9471f0", <FolderOutlined />, [
            getItem(<Link to="/dFormModal/async/FormFetching">Form Fetching</Link>, "Item1704757a-7da8-4023-8221-fb45b7b67029"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncGridWithSelectionForm">Form With Async Grid With Selection Form</Link>, "Itemdb072c98-065c-45fb-a6cc-2c1579f499a5"),
            getItem(<Link to="/dFormModal/async/FormWithAsyncTabulatorGrid">Form With Async Tabulator Grid</Link>, "Itemca386534-29ea-41e4-b5f0-5d0a8a944d45"),]),
        getItem(<Link to="/dFormModal/AutoHeightTabulator">Auto Height Tabulator</Link>, "Item15464977-f5dd-43a6-8c31-0a42ac3e46e2"),
        getItem(<Link to="/dFormModal/AutoHeightTabulatorInTab">Auto Height Tabulator InTab</Link>, "Item953fc0ee-3b42-4c6c-b731-16dfdf7b2a5c"),
        getItem(<Link to="/dFormModal/FormWithGrid">Form With Grid</Link>, "Item6d5d9bde-b0bf-4577-afd6-00ec26ff37fe"),
        getItem(<Link to="/dFormModal/FormWithGridChangeDataSet">Form With Grid Change Data Set</Link>, "Itemca02adea-5151-4811-9ed4-2eb5fc095221"),
        getItem(<Link to="/dFormModal/FormWithGridInTabs">Form With Grid InTabs</Link>, "Item9f59f040-9246-45c3-bd0d-f9f4aeea375f"),
        getItem(<Link to="/dFormModal/FormWithGridWithSelectionForm">Form With Grid With Selection Form</Link>, "Item792ed6c3-f369-47a9-a612-16e6671e8866"),
        getItem(<Link to="/dFormModal/FormWithTabs">Form With Tabs</Link>, "Item0a1441e3-3221-4689-965e-cb130f1e7d31"),
        getItem(<Link to="/dFormModal/ModalFormSubmitting">Modal Form Submitting</Link>, "Item9707cb13-a57e-4d31-909c-ea4a21555d41"),
        getItem(<Link to="/dFormModal/ModalFormWithGroups">Modal Form With Groups</Link>, "Itemf57edd2b-0231-4564-acdc-f50f42174e44"),
        getItem(<Link to="/dFormModal/SeveralTabs">Several Tabs</Link>, "Item40b29019-0bd4-4627-bfc4-407865aa3ccf"),
        getItem(<Link to="/dFormModal/Simple">Simple</Link>, "Itemed3e8bf7-992c-4af7-9947-055d3fb03473"),
        getItem(<Link to="/dFormModal/SimpleNotDraggable">Simple NotDraggable</Link>, "Itemeed65cbe-8037-4f26-8633-75204a5a8e66"),
        getItem(<Link to="/dFormModal/TabsWithSimpleInlineGroups">Tabs With Simple Inline Groups</Link>, "Item0d133bd4-192f-4968-ab19-fb09be670e05"),
        getItem(<Link to="/dFormModal/Validation">Validation</Link>, "Item56ff7d66-0911-4c3a-a908-c6f3b8ced50d"),]),
    getItem("Tabulator Grid", "Itemfd899c83-0ec2-4065-959f-51978ffdd6ce", <FolderOutlined />, [
        getItem("Async", "Item91410c2d-c8bd-4203-9bfa-d4011a78fa29", <FolderOutlined />, [
            getItem(<Link to="/tabulatorGrid/async/AsyncLoading">Async Loading</Link>, "Itemb92b23d7-8e56-475c-b1f7-94310232f0d3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncManualFetch">Async Manual Fetch</Link>, "Item5d681075-f8cc-4410-9a30-90473b448e8f"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPages">Async Pages</Link>, "Item23665534-eb77-43cf-8f0c-a12ca3e52ab9"),
            getItem(<Link to="/tabulatorGrid/async/AsyncPagesManualFetch">Async Pages Manual Fetch</Link>, "Iteme21b1045-17b2-46d5-8c16-d73f755cf2d2"),
            getItem(<Link to="/tabulatorGrid/async/AsyncProgressive">Async Progressive</Link>, "Item1fadb4d9-39c3-47aa-a4b5-b1d2c1c37df1"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithForm">Async With Form</Link>, "Itemf822aa79-09cd-4c85-b601-8880a21ecce3"),
            getItem(<Link to="/tabulatorGrid/async/AsyncWithSelectionForm">Async With Selection Form</Link>, "Itemcd25347d-70f2-40cc-b7b5-5887cd6c4639"),
            getItem(<Link to="/tabulatorGrid/async/EditableGridWithAsyncTabulatorGrid">Editable Grid With Async Tabulator Grid</Link>, "Item59c2196a-b862-46e4-80e5-680ee593edff"),]),
        getItem(<Link to="/tabulatorGrid/CellFormat">Cell Format</Link>, "Item5bc04118-f1cc-4f04-8c09-c938251c7cf6"),
        getItem(<Link to="/tabulatorGrid/ChangeDataSet">Change Data Set</Link>, "Itemc4f7d383-995e-4cd0-a609-68e96c9e19c6"),
        getItem(<Link to="/tabulatorGrid/ColumnsGroups">Columns Groups</Link>, "Item5d58417b-2594-4feb-a1b3-b653844b80d6"),
        getItem(<Link to="/tabulatorGrid/DataRangeHeaderFilterExample">Data Range Header Filter Example</Link>, "Iteme696209b-7a9c-4093-9298-644f3667e7cd"),
        getItem(<Link to="/tabulatorGrid/FixedColumns">Fixed Columns</Link>, "Iteme9268889-f814-4631-889a-237af261b7f0"),
        getItem(<Link to="/tabulatorGrid/MultiSelect">Multi Select</Link>, "Item4f4ff878-9649-45ec-b408-effc9d370160"),
        getItem(<Link to="/tabulatorGrid/Persistence">Persistence</Link>, "Item62bd5252-0c14-4cab-b609-9878ae597cf4"),
        getItem(<Link to="/tabulatorGrid/SelectionMode">Selection Mode</Link>, "Item1b1c63ef-bcdb-45af-8ec5-012ca166ec14"),
        getItem(<Link to="/tabulatorGrid/Simple">Simple</Link>, "Item03d50d0e-4557-445a-bc3b-67ac1a649a11"),
        getItem(<Link to="/tabulatorGrid/Tree">Tree</Link>, "Itema7b24672-c59a-4222-ae87-c4c9984796a8"),
        getItem(<Link to="/tabulatorGrid/TreeCellFormat">Tree Cell Format</Link>, "Itemc6a86580-2201-4677-a271-67c5fa06040c"),
        getItem(<Link to="/tabulatorGrid/TreeWithForm">Tree With Form</Link>, "Item78c4be36-c2d2-41f3-9852-ef63e5fd004c"),
        getItem(<Link to="/tabulatorGrid/WithComplexForm">With Complex Form</Link>, "Item5dc2927d-d0d9-4ede-96b2-9eb7e489e35a"),
        getItem(<Link to="/tabulatorGrid/WithForm">With Form</Link>, "Itembf58fc94-8d87-42c8-91f3-e04d2c8cb151"),
        getItem(<Link to="/tabulatorGrid/WithSelectionForm">With Selection Form</Link>, "Itemde727af6-39fb-49e5-959c-929b77a5d709"),]),
    getItem("Tools", "Itemc2387c70-d147-4114-9c89-e24dc2b82e41", <FolderOutlined />, [
        getItem(<Link to="/tools/PropsToArgs">Props ToArgs</Link>, "Item1bd18154-34e6-4567-9375-43d1dde6b646"),]),
    getItem("Tree Select", "Itemf2aa4a49-b5cd-4f72-a090-384528e753f3", <FolderOutlined />, [
        getItem(<Link to="/treeSelect/TreeSelectAsync">Tree Select Async</Link>, "Item6c3b3aa7-72b0-40d3-b2cf-478febd7f584"),
        getItem(<Link to="/treeSelect/TreeSelectAsyncSearch">Tree Select Async Search</Link>, "Item0569702e-f3cd-4e30-b566-403339cc8f5a"),
        getItem(<Link to="/treeSelect/TreeSelectBasic">Tree Select Basic</Link>, "Item5bee0c1a-a3ea-4181-a5ed-07cd64ab30c6"),
        getItem(<Link to="/treeSelect/TreeSelectDefaultValue">Tree Select Default Value</Link>, "Itemef07825f-9518-4514-8c89-6c01f63aaadd"),
        getItem(<Link to="/treeSelect/TreeSelectDepended">Tree Select Depended</Link>, "Itemb6eb6561-74a1-4f8e-aad1-e267c75bb5f0"),
        getItem(<Link to="/treeSelect/TreeSelectDependedAsync">Tree Select Depended Async</Link>, "Item1208bdec-2e54-47c1-9d6e-a1e1f97f638d"),
        getItem(<Link to="/treeSelect/TreeSelectNodeRender">Tree Select Node Render</Link>, "Item6aee498f-6d15-4fe2-95f9-6b3f7fe55f0e"),
        getItem(<Link to="/treeSelect/TreeSelectWithForm">Tree Select With Form</Link>, "Item198a1412-8bc5-4c00-8f7c-2b45199bd78f"),
        getItem(<Link to="/treeSelect/TreeSelectWithFormAsync">Tree Select With Form Async</Link>, "Iteme0fcdd4b-f15f-4b00-9e08-ccc4bce47344"),]),
    getItem(<Link to="/PlayGround">Play Ground</Link>, "Item68c2b88b-7943-45da-b642-98a21152b3cc"),]