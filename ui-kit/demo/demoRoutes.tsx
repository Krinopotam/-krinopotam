
    import React, {lazy, Suspense} from 'react';
    import {Route, Routes} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const PageFormSubmitting = lazy(() => import('./pages/dynamicForm/validation/PageFormSubmitting'))
    const PageFormValidation = lazy(() => import('./pages/dynamicForm/validation/PageFormValidation'))

    const PageFormBetweenFields = lazy(() => import('./pages/dynamicForm/PageFormBetweenFields'))
    const PageFormDependedField = lazy(() => import('./pages/dynamicForm/PageFormDependedField'))
    const PageFormFetching = lazy(() => import('./pages/dynamicForm/PageFormFetching'))
    const PageFormSimple = lazy(() => import('./pages/dynamicForm/PageFormSimple'))
    const PageFormSimpleHorizontal = lazy(() => import('./pages/dynamicForm/PageFormSimpleHorizontal'))
    const PageFormWithTemplatedFields = lazy(() => import('./pages/dynamicForm/PageFormWithTemplatedFields'))

    const PageModalFormFetching = lazy(() => import('./pages/dynamicFormModal/PageModalFormFetching'))
    const PageModalFormSimple = lazy(() => import('./pages/dynamicFormModal/PageModalFormSimple'))
    const PageModalFormSubmitting = lazy(() => import('./pages/dynamicFormModal/PageModalFormSubmitting'))
    const PageModalFormWithAsyncGrid = lazy(() => import('./pages/dynamicFormModal/PageModalFormWithAsyncGrid'))
    const PageModalFormWithGrid = lazy(() => import('./pages/dynamicFormModal/PageModalFormWithGrid'))
    const PageModalFormWithGroups = lazy(() => import('./pages/dynamicFormModal/PageModalFormWithGroups'))
    const PageModalFormWithTabs = lazy(() => import('./pages/dynamicFormModal/PageModalFormWithTabs'))
    const PageModalFormWithTabsGroups = lazy(() => import('./pages/dynamicFormModal/PageModalFormWithTabsGroups'))

    const PageTabulatorGridCellFormat = lazy(() => import('./pages/tabulator/PageTabulatorGridCellFormat'))
    const PageTabulatorGridChangeDataSet = lazy(() => import('./pages/tabulator/PageTabulatorGridChangeDataSet'))
    const PageTabulatorGridMultiSelect = lazy(() => import('./pages/tabulator/PageTabulatorGridMultiSelect'))
    const PageTabulatorGridSimple = lazy(() => import('./pages/tabulator/PageTabulatorGridSimple'))
    const PageTabulatorGridTree = lazy(() => import('./pages/tabulator/PageTabulatorGridTree'))
    const PageTabulatorGridTreeCellFormat = lazy(() => import('./pages/tabulator/PageTabulatorGridTreeCellFormat'))
    const PageTabulatorGridTreeWithForm = lazy(() => import('./pages/tabulator/PageTabulatorGridTreeWithForm'))
    const PageTabulatorGridWithForm = lazy(() => import('./pages/tabulator/PageTabulatorGridWithForm'))
    const PageTabulatorGridWithFormAsync = lazy(() => import('./pages/tabulator/PageTabulatorGridWithFormAsync'))

    const PageTreeSelectAsync = lazy(() => import('./pages/treeSelect/PageTreeSelectAsync'))
    const PageTreeSelectAsyncSearch = lazy(() => import('./pages/treeSelect/PageTreeSelectAsyncSearch'))
    const PageTreeSelectBasic = lazy(() => import('./pages/treeSelect/PageTreeSelectBasic'))
    const PageTreeSelectDefaultValue = lazy(() => import('./pages/treeSelect/PageTreeSelectDefaultValue'))
    const PageTreeSelectDepended = lazy(() => import('./pages/treeSelect/PageTreeSelectDepended'))
    const PageTreeSelectDependedAsync = lazy(() => import('./pages/treeSelect/PageTreeSelectDependedAsync'))
    const PageTreeSelectNodeRender = lazy(() => import('./pages/treeSelect/PageTreeSelectNodeRender'))
    const PageTreeSelectWithForm = lazy(() => import('./pages/treeSelect/PageTreeSelectWithForm'))
    const PageTreeSelectWithFormAsync = lazy(() => import('./pages/treeSelect/PageTreeSelectWithFormAsync'))

    const PagePlayGround = lazy(() => import('./pages/PagePlayGround'))


export const DemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode:boolean) => void}) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<DemoLayout setDarkMode={props.setDarkMode} />}>
                    <Route index element={<Home />} />
                    <Route path="FormSubmitting" element={<PageFormSubmitting darkMode={props.darkMode} />} />;
                    <Route path="FormValidation" element={<PageFormValidation darkMode={props.darkMode} />} />;

                    <Route path="FormBetweenFields" element={<PageFormBetweenFields darkMode={props.darkMode} />} />;
                    <Route path="FormDependedField" element={<PageFormDependedField darkMode={props.darkMode} />} />;
                    <Route path="FormFetching" element={<PageFormFetching darkMode={props.darkMode} />} />;
                    <Route path="FormSimple" element={<PageFormSimple darkMode={props.darkMode} />} />;
                    <Route path="FormSimpleHorizontal" element={<PageFormSimpleHorizontal darkMode={props.darkMode} />} />;
                    <Route path="FormWithTemplatedFields" element={<PageFormWithTemplatedFields darkMode={props.darkMode} />} />;

                    <Route path="ModalFormFetching" element={<PageModalFormFetching darkMode={props.darkMode} />} />;
                    <Route path="ModalFormSimple" element={<PageModalFormSimple darkMode={props.darkMode} />} />;
                    <Route path="ModalFormSubmitting" element={<PageModalFormSubmitting darkMode={props.darkMode} />} />;
                    <Route path="ModalFormWithAsyncGrid" element={<PageModalFormWithAsyncGrid darkMode={props.darkMode} />} />;
                    <Route path="ModalFormWithGrid" element={<PageModalFormWithGrid darkMode={props.darkMode} />} />;
                    <Route path="ModalFormWithGroups" element={<PageModalFormWithGroups darkMode={props.darkMode} />} />;
                    <Route path="ModalFormWithTabs" element={<PageModalFormWithTabs darkMode={props.darkMode} />} />;
                    <Route path="ModalFormWithTabsGroups" element={<PageModalFormWithTabsGroups darkMode={props.darkMode} />} />;

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

                    <Route path="PlayGround" element={<PagePlayGround darkMode={props.darkMode} />} />;

                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </Suspense>
    );
};
