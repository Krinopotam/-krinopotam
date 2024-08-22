
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page8a1104184c024682a98ebd767076ed0e = lazy(() => import('./../pages/Page8a1104184c024682a98ebd767076ed0e'))
    const Page16a27400e454428a802dbb36cf5a1fc7 = lazy(() => import('./../pages/Page16a27400e454428a802dbb36cf5a1fc7'))

    const Pagef79a9b6317b348aa9838851bfef7831b = lazy(() => import('./../pages/Pagef79a9b6317b348aa9838851bfef7831b'))
    const Page98a26da628c94353a7ad27c380b52197 = lazy(() => import('./../pages/Page98a26da628c94353a7ad27c380b52197'))
    const Page4d67ecad9e4142ffa27fec8e4e815032 = lazy(() => import('./../pages/Page4d67ecad9e4142ffa27fec8e4e815032'))
    const Page826d5b1b35724f8196e866cc5f8320f4 = lazy(() => import('./../pages/Page826d5b1b35724f8196e866cc5f8320f4'))
    const Page0120da090ff24327974364aac7244a43 = lazy(() => import('./../pages/Page0120da090ff24327974364aac7244a43'))
    const Pageea06e1c87ffa4efc9539a747ff64982a = lazy(() => import('./../pages/Pageea06e1c87ffa4efc9539a747ff64982a'))
    const Pagecec367d8d6a94237befa348feebfbc47 = lazy(() => import('./../pages/Pagecec367d8d6a94237befa348feebfbc47'))
    const Paged259d06280344cb9bddee4d52093b503 = lazy(() => import('./../pages/Paged259d06280344cb9bddee4d52093b503'))
    const Pagedc411073e4074755a3225a2e4f36b9d7 = lazy(() => import('./../pages/Pagedc411073e4074755a3225a2e4f36b9d7'))

    const Page8b474a460b59485690f076f8e7c1bd05 = lazy(() => import('./../pages/Page8b474a460b59485690f076f8e7c1bd05'))
    const Page1375100ce1df4b46bb2983066b961c36 = lazy(() => import('./../pages/Page1375100ce1df4b46bb2983066b961c36'))
    const Page73af887cb0804add803cdc4643b396f1 = lazy(() => import('./../pages/Page73af887cb0804add803cdc4643b396f1'))

    const Pagebf66bf88784847b7ab565d6d377331e5 = lazy(() => import('./../pages/Pagebf66bf88784847b7ab565d6d377331e5'))
    const Pagec688e37b22c047f19e300ec85d773345 = lazy(() => import('./../pages/Pagec688e37b22c047f19e300ec85d773345'))
    const Page8c41ba092d12404c93dcaeb0d4ebcb3b = lazy(() => import('./../pages/Page8c41ba092d12404c93dcaeb0d4ebcb3b'))
    const Pagef392a9147e10404bb9268a4a0dcd763f = lazy(() => import('./../pages/Pagef392a9147e10404bb9268a4a0dcd763f'))
    const Page9d5b7064ed464847ad511272c81f199c = lazy(() => import('./../pages/Page9d5b7064ed464847ad511272c81f199c'))
    const Page51e7ea97429e415bb607c5e8f7e58ea8 = lazy(() => import('./../pages/Page51e7ea97429e415bb607c5e8f7e58ea8'))
    const Page58ab9903a45648a5a3b69beb723557a4 = lazy(() => import('./../pages/Page58ab9903a45648a5a3b69beb723557a4'))
    const Page48d3904ba51d4baeb466e0b59a82b593 = lazy(() => import('./../pages/Page48d3904ba51d4baeb466e0b59a82b593'))
    const Page98d49f0985b24766893f1ab82174f228 = lazy(() => import('./../pages/Page98d49f0985b24766893f1ab82174f228'))
    const Page76d29812bc964cfbabc82dcd57994f0d = lazy(() => import('./../pages/Page76d29812bc964cfbabc82dcd57994f0d'))
    const Pagecbecd9836bd045da932fc0114b0ae2a3 = lazy(() => import('./../pages/Pagecbecd9836bd045da932fc0114b0ae2a3'))
    const Pagec21b7066a78d4d3b844738baa0364a17 = lazy(() => import('./../pages/Pagec21b7066a78d4d3b844738baa0364a17'))
    const Page45da299f5c9c4b909fa82912e6887444 = lazy(() => import('./../pages/Page45da299f5c9c4b909fa82912e6887444'))
    const Page84b0e4904bf6409080aab76afd802535 = lazy(() => import('./../pages/Page84b0e4904bf6409080aab76afd802535'))

    const Pagefae0e11a9a3a4268bd7592c01c882a42 = lazy(() => import('./../pages/Pagefae0e11a9a3a4268bd7592c01c882a42'))

    const Page2c96f12235d04e4b947dfcce1c7952da = lazy(() => import('./../pages/Page2c96f12235d04e4b947dfcce1c7952da'))
    const Page7c32191e2ebd471799a0419223e491f7 = lazy(() => import('./../pages/Page7c32191e2ebd471799a0419223e491f7'))
    const Page3d9e4965fd00488e845da497e1b65468 = lazy(() => import('./../pages/Page3d9e4965fd00488e845da497e1b65468'))
    const Page52c813fac74642bdb68144c10b3d3281 = lazy(() => import('./../pages/Page52c813fac74642bdb68144c10b3d3281'))
    const Page18210237866341d48acbed9d416df61f = lazy(() => import('./../pages/Page18210237866341d48acbed9d416df61f'))
    const Page90b4cec2d0904fd080923c7d70fc3420 = lazy(() => import('./../pages/Page90b4cec2d0904fd080923c7d70fc3420'))
    const Pagec71ea65be13e4819bfde9284e6b5c8cf = lazy(() => import('./../pages/Pagec71ea65be13e4819bfde9284e6b5c8cf'))
    const Pagea23faacf074d4a8dbcbc99a4bbf3dead = lazy(() => import('./../pages/Pagea23faacf074d4a8dbcbc99a4bbf3dead'))

    const Page2c84ea4a964b4423828637fa60d6b8ec = lazy(() => import('./../pages/Page2c84ea4a964b4423828637fa60d6b8ec'))
    const Page4ae8fd507fad4d2d80c89f76e684b92d = lazy(() => import('./../pages/Page4ae8fd507fad4d2d80c89f76e684b92d'))
    const Page66ef06986e514adc9895baeff08c1523 = lazy(() => import('./../pages/Page66ef06986e514adc9895baeff08c1523'))
    const Pagecbb7db3e3191442ea657f907bf72feae = lazy(() => import('./../pages/Pagecbb7db3e3191442ea657f907bf72feae'))
    const Page7cd9f84db1b14dc5a2edf25814cce2ae = lazy(() => import('./../pages/Page7cd9f84db1b14dc5a2edf25814cce2ae'))
    const Page11876b648ada45848de885fcd4c4debd = lazy(() => import('./../pages/Page11876b648ada45848de885fcd4c4debd'))
    const Page9bd43b1b34104feeabf5cd8736420879 = lazy(() => import('./../pages/Page9bd43b1b34104feeabf5cd8736420879'))
    const Page4c84b444032445afb71af62d83ea9251 = lazy(() => import('./../pages/Page4c84b444032445afb71af62d83ea9251'))
    const Page1909520a4bde464bba2c600de5f99fcd = lazy(() => import('./../pages/Page1909520a4bde464bba2c600de5f99fcd'))
    const Page2b83209d6d434b7cae1077676b093d98 = lazy(() => import('./../pages/Page2b83209d6d434b7cae1077676b093d98'))
    const Pagecd3552610ac44e97a551886dc788dd3d = lazy(() => import('./../pages/Pagecd3552610ac44e97a551886dc788dd3d'))
    const Pageb421ece5dd4149fb90a8a1686eb55d55 = lazy(() => import('./../pages/Pageb421ece5dd4149fb90a8a1686eb55d55'))
    const Paged9ce2410f70048f98c93467b87915e88 = lazy(() => import('./../pages/Paged9ce2410f70048f98c93467b87915e88'))
    const Page8e8ef344ecfe47dda921490cf2f2b1e2 = lazy(() => import('./../pages/Page8e8ef344ecfe47dda921490cf2f2b1e2'))
    const Page1fbc50ac6a134571b3aa83950035eabf = lazy(() => import('./../pages/Page1fbc50ac6a134571b3aa83950035eabf'))

    const Page2c2022f50f1a4b929f5d0ea4b6acb0c7 = lazy(() => import('./../pages/Page2c2022f50f1a4b929f5d0ea4b6acb0c7'))

    const Page2b3f523bc3b6468e91b4f1cb126d0fc6 = lazy(() => import('./../pages/Page2b3f523bc3b6468e91b4f1cb126d0fc6'))
    const Page2ffaff5a7f3b403db4581c2b48e00324 = lazy(() => import('./../pages/Page2ffaff5a7f3b403db4581c2b48e00324'))
    const Page397b88553c2547138092019ed645518b = lazy(() => import('./../pages/Page397b88553c2547138092019ed645518b'))
    const Pagea0374e69f60541989d51c7b5347406f4 = lazy(() => import('./../pages/Pagea0374e69f60541989d51c7b5347406f4'))
    const Page8e1fdd924c064fa9b8f1d519e82c4975 = lazy(() => import('./../pages/Page8e1fdd924c064fa9b8f1d519e82c4975'))
    const Pagee4f1ecf56a76460890f11d6e637815d4 = lazy(() => import('./../pages/Pagee4f1ecf56a76460890f11d6e637815d4'))
    const Page90127896a3384f47b4bc74babb8ac3c3 = lazy(() => import('./../pages/Page90127896a3384f47b4bc74babb8ac3c3'))
    const Pageade680374fa4431eb244ef04f3ce75d4 = lazy(() => import('./../pages/Pageade680374fa4431eb244ef04f3ce75d4'))
    const Pagec2ac1691d117406b8257834f5ad8557f = lazy(() => import('./../pages/Pagec2ac1691d117406b8257834f5ad8557f'))

    const Page4285585543bb435a9f28e591d2bc9cf8 = lazy(() => import('./../pages/Page4285585543bb435a9f28e591d2bc9cf8'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page8a1104184c024682a98ebd767076ed0e darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page16a27400e454428a802dbb36cf5a1fc7 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pagef79a9b6317b348aa9838851bfef7831b darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page98a26da628c94353a7ad27c380b52197 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page4d67ecad9e4142ffa27fec8e4e815032 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page826d5b1b35724f8196e866cc5f8320f4 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page0120da090ff24327974364aac7244a43 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pageea06e1c87ffa4efc9539a747ff64982a darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pagecec367d8d6a94237befa348feebfbc47 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Paged259d06280344cb9bddee4d52093b503 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagedc411073e4074755a3225a2e4f36b9d7 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page8b474a460b59485690f076f8e7c1bd05 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page1375100ce1df4b46bb2983066b961c36 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page73af887cb0804add803cdc4643b396f1 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagebf66bf88784847b7ab565d6d377331e5 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagec688e37b22c047f19e300ec85d773345 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page8c41ba092d12404c93dcaeb0d4ebcb3b darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pagef392a9147e10404bb9268a4a0dcd763f darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page9d5b7064ed464847ad511272c81f199c darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page51e7ea97429e415bb607c5e8f7e58ea8 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page58ab9903a45648a5a3b69beb723557a4 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page48d3904ba51d4baeb466e0b59a82b593 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page98d49f0985b24766893f1ab82174f228 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page76d29812bc964cfbabc82dcd57994f0d darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagecbecd9836bd045da932fc0114b0ae2a3 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagec21b7066a78d4d3b844738baa0364a17 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page45da299f5c9c4b909fa82912e6887444 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page84b0e4904bf6409080aab76afd802535 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagefae0e11a9a3a4268bd7592c01c882a42 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page2c96f12235d04e4b947dfcce1c7952da darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page7c32191e2ebd471799a0419223e491f7 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page3d9e4965fd00488e845da497e1b65468 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page52c813fac74642bdb68144c10b3d3281 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page18210237866341d48acbed9d416df61f darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page90b4cec2d0904fd080923c7d70fc3420 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagec71ea65be13e4819bfde9284e6b5c8cf darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagea23faacf074d4a8dbcbc99a4bbf3dead darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page2c84ea4a964b4423828637fa60d6b8ec darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page4ae8fd507fad4d2d80c89f76e684b92d darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page66ef06986e514adc9895baeff08c1523 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagecbb7db3e3191442ea657f907bf72feae darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page7cd9f84db1b14dc5a2edf25814cce2ae darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page11876b648ada45848de885fcd4c4debd darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page9bd43b1b34104feeabf5cd8736420879 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page4c84b444032445afb71af62d83ea9251 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page1909520a4bde464bba2c600de5f99fcd darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page2b83209d6d434b7cae1077676b093d98 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagecd3552610ac44e97a551886dc788dd3d darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pageb421ece5dd4149fb90a8a1686eb55d55 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Paged9ce2410f70048f98c93467b87915e88 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page8e8ef344ecfe47dda921490cf2f2b1e2 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page1fbc50ac6a134571b3aa83950035eabf darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page2c2022f50f1a4b929f5d0ea4b6acb0c7 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page2b3f523bc3b6468e91b4f1cb126d0fc6 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page2ffaff5a7f3b403db4581c2b48e00324 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page397b88553c2547138092019ed645518b darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagea0374e69f60541989d51c7b5347406f4 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page8e1fdd924c064fa9b8f1d519e82c4975 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagee4f1ecf56a76460890f11d6e637815d4 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page90127896a3384f47b4bc74babb8ac3c3 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageade680374fa4431eb244ef04f3ce75d4 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagec2ac1691d117406b8257834f5ad8557f darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page4285585543bb435a9f28e591d2bc9cf8 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

