
    import React from 'react';
    import {Route, Routes} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    import {PageFormBetweenFields} from './pages/dynamicForm/PageFormBetweenFields';
    import {PageFormDependedField} from './pages/dynamicForm/PageFormDependedField';
    import {PageFormFetching} from './pages/dynamicForm/PageFormFetching';
    import {PageFormSimple} from './pages/dynamicForm/PageFormSimple';
    import {PageFormSimpleHorizontal} from './pages/dynamicForm/PageFormSimpleHorizontal';
    import {PageFormWithTemplatedFields} from './pages/dynamicForm/PageFormWithTemplatedFields';
    import {PageFormSubmitting} from './pages/dynamicForm/Validation/PageFormSubmitting';
    import {PageFormValidation} from './pages/dynamicForm/Validation/PageFormValidation';


    import {PageModalFormFetching} from './pages/PageModalFormFetching';
    import {PageModalFormSimple} from './pages/PageModalFormSimple';
    import {PageModalFormSubmitting} from './pages/PageModalFormSubmitting';
    import {PageModalFormWithAsyncGrid} from './pages/PageModalFormWithAsyncGrid';
    import {PageModalFormWithGrid} from './pages/PageModalFormWithGrid';
    import {PageModalFormWithGroups} from './pages/PageModalFormWithGroups';
    import {PageModalFormWithTabs} from './pages/PageModalFormWithTabs';
    import {PageModalFormWithTabsGroups} from './pages/PageModalFormWithTabsGroups';
    import {PagePlayGround} from './pages/PagePlayGround';
    import {PageTabulatorGridCellFormat} from './pages/PageTabulatorGridCellFormat';
    import {PageTabulatorGridChangeDataSet} from './pages/PageTabulatorGridChangeDataSet';
    import {PageTabulatorGridMultiSelect} from './pages/PageTabulatorGridMultiSelect';
    import {PageTabulatorGridSimple} from './pages/PageTabulatorGridSimple';
    import {PageTabulatorGridTree} from './pages/PageTabulatorGridTree';
    import {PageTabulatorGridTreeCellFormat} from './pages/PageTabulatorGridTreeCellFormat';
    import {PageTabulatorGridTreeWithForm} from './pages/PageTabulatorGridTreeWithForm';
    import {PageTabulatorGridWithForm} from './pages/PageTabulatorGridWithForm';
    import {PageTabulatorGridWithFormAsync} from './pages/PageTabulatorGridWithFormAsync';
    import {PageTreeSelectAsync} from './pages/PageTreeSelectAsync';
    import {PageTreeSelectAsyncSearch} from './pages/PageTreeSelectAsyncSearch';
    import {PageTreeSelectBasic} from './pages/PageTreeSelectBasic';
    import {PageTreeSelectDefaultValue} from './pages/PageTreeSelectDefaultValue';
    import {PageTreeSelectDepended} from './pages/PageTreeSelectDepended';
    import {PageTreeSelectDependedAsync} from './pages/PageTreeSelectDependedAsync';
    import {PageTreeSelectNodeRender} from './pages/PageTreeSelectNodeRender';
    import {PageTreeSelectWithForm} from './pages/PageTreeSelectWithForm';
    import {PageTreeSelectWithFormAsync} from './pages/PageTreeSelectWithFormAsync';


export const DemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode:boolean) => void}) => {
    return (
        <Routes>
            <Route path="/" element={<DemoLayout setDarkMode={props.setDarkMode} />}>
                <Route index element={<Home />} />
                <Route path="FormBetweenFields" element={<PageFormBetweenFields darkMode={props.darkMode} />} />;
                <Route path="FormDependedField" element={<PageFormDependedField darkMode={props.darkMode} />} />;
                <Route path="FormFetching" element={<PageFormFetching darkMode={props.darkMode} />} />;
                <Route path="FormSimple" element={<PageFormSimple darkMode={props.darkMode} />} />;
                <Route path="FormSimpleHorizontal" element={<PageFormSimpleHorizontal darkMode={props.darkMode} />} />;
                <Route path="FormWithTemplatedFields" element={<PageFormWithTemplatedFields darkMode={props.darkMode} />} />;
                <Route path="FormSubmitting" element={<PageFormSubmitting darkMode={props.darkMode} />} />;
                <Route path="FormValidation" element={<PageFormValidation darkMode={props.darkMode} />} />;


                <Route path="ModalFormFetching" element={<PageModalFormFetching darkMode={props.darkMode} />} />;
                <Route path="ModalFormSimple" element={<PageModalFormSimple darkMode={props.darkMode} />} />;
                <Route path="ModalFormSubmitting" element={<PageModalFormSubmitting darkMode={props.darkMode} />} />;
                <Route path="ModalFormWithAsyncGrid" element={<PageModalFormWithAsyncGrid darkMode={props.darkMode} />} />;
                <Route path="ModalFormWithGrid" element={<PageModalFormWithGrid darkMode={props.darkMode} />} />;
                <Route path="ModalFormWithGroups" element={<PageModalFormWithGroups darkMode={props.darkMode} />} />;
                <Route path="ModalFormWithTabs" element={<PageModalFormWithTabs darkMode={props.darkMode} />} />;
                <Route path="ModalFormWithTabsGroups" element={<PageModalFormWithTabsGroups darkMode={props.darkMode} />} />;
                <Route path="PlayGround" element={<PagePlayGround darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridCellFormat" element={<PageTabulatorGridCellFormat darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridChangeDataSet" element={<PageTabulatorGridChangeDataSet darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridMultiSelect" element={<PageTabulatorGridMultiSelect darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridSimple" element={<PageTabulatorGridSimple darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridTree" element={<PageTabulatorGridTree darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridTreeCellFormat" element={<PageTabulatorGridTreeCellFormat darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridTreeWithForm" element={<PageTabulatorGridTreeWithForm darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridWithForm" element={<PageTabulatorGridWithForm darkMode={props.darkMode} />} />;
                <Route path="TabulatorGridWithFormAsync" element={<PageTabulatorGridWithFormAsync darkMode={props.darkMode} />} />;
                <Route path="TreeSelectAsync" element={<PageTreeSelectAsync darkMode={props.darkMode} />} />;
                <Route path="TreeSelectAsyncSearch" element={<PageTreeSelectAsyncSearch darkMode={props.darkMode} />} />;
                <Route path="TreeSelectBasic" element={<PageTreeSelectBasic darkMode={props.darkMode} />} />;
                <Route path="TreeSelectDefaultValue" element={<PageTreeSelectDefaultValue darkMode={props.darkMode} />} />;
                <Route path="TreeSelectDepended" element={<PageTreeSelectDepended darkMode={props.darkMode} />} />;
                <Route path="TreeSelectDependedAsync" element={<PageTreeSelectDependedAsync darkMode={props.darkMode} />} />;
                <Route path="TreeSelectNodeRender" element={<PageTreeSelectNodeRender darkMode={props.darkMode} />} />;
                <Route path="TreeSelectWithForm" element={<PageTreeSelectWithForm darkMode={props.darkMode} />} />;
                <Route path="TreeSelectWithFormAsync" element={<PageTreeSelectWithFormAsync darkMode={props.darkMode} />} />;

                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};
