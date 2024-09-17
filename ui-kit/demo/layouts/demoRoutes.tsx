
    import React, {useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    import {ComponentLoader} from './componentLoader';

export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<ComponentLoader pageName="Page20923841a53b473e86585175d47a89a7" darkMode={props.darkMode} />},
                        {path:"Test2", element:<ComponentLoader pageName="Pageaba7dadd5b664a18a7b169fdd1517704" darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<ComponentLoader pageName="Page2d81adaaf152441aa187aaaf779a6d60" darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<ComponentLoader pageName="Page005edfcb8e314118a4a868297950c2ec" darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<ComponentLoader pageName="Page1e9f76a83142484e84b3331441751224" darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<ComponentLoader pageName="Page255f98be80f944e5a18b894b67459520" darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<ComponentLoader pageName="Pageafb45be3952647658049e1b3c9163a43" darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<ComponentLoader pageName="Page6770dc6ccf594e08ba733c5e118de932" darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<ComponentLoader pageName="Page92046eadc6d74989aa7e8c0555293260" darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<ComponentLoader pageName="Page0cb4f93ac810440ab3182dae7cb0a756" darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<ComponentLoader pageName="Page4a91a0b54ef44b9694a2c4b7ba215882" darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<ComponentLoader pageName="Pageaeca4fd63b494694ba5050a19e261a69" darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<ComponentLoader pageName="Page0f4094015bb1439b86f67f60a06faf5d" darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<ComponentLoader pageName="Pagee65bc2d2b4204affbff13f48f6c9730b" darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<ComponentLoader pageName="Page9f892da5ed7c4c7188f17e063b655d6b" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<ComponentLoader pageName="Page40c261f9c3dc410a94e1457a1163169c" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Paged7284de45e244e28bba8bbf73c10b366" darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<ComponentLoader pageName="Page1ac19a3ea3824594bf9390de1aa0ef56" darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<ComponentLoader pageName="Pagef9f5777c865a4c758466775586882b7a" darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<ComponentLoader pageName="Page5c320295617248d38ecb2e55450af1d9" darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<ComponentLoader pageName="Page2fc9ef3f6834475bb54d74080c707201" darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<ComponentLoader pageName="Pagea7aa0b6e991a4156bef13a15d84b4a6e" darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<ComponentLoader pageName="Page1e28b52f48ef4d2891f3fc15a9c3a992" darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<ComponentLoader pageName="Pagefbfea61b76d94538900fe1a4d4061fa8" darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<ComponentLoader pageName="Page21d4f17ba3b6471abb15007bed3f289b" darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<ComponentLoader pageName="Page54ab819fb6de4f87b021733f3e1e07a0" darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<ComponentLoader pageName="Page1171192772d24d1fbf91bd44c8dc7a3e" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Pageddc60800fd7046069c792617b02ec003" darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<ComponentLoader pageName="Page733b3abede634e4189da11d7eb917bda" darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<ComponentLoader pageName="Pageb8ac928e47f245d8ad9522bd2fa94f18" darkMode={props.darkMode} />},
                        {path:"Validation", element:<ComponentLoader pageName="Pagefa7e5f9c76ac4c0bb6b7b0f99d8f9958" darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<ComponentLoader pageName="Pagef20a6363dab7418a8c610736382c4ff3" darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<ComponentLoader pageName="Page43098f8e5940460ab0cbcdf0a66f9cbf" darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<ComponentLoader pageName="Page75212b6256ae45bf98f3dae76ea6a181" darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<ComponentLoader pageName="Page5cbc9329ef844923a33997f64eb500b7" darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<ComponentLoader pageName="Page9616f31edc3d4e07be2f2d7f276f7a50" darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<ComponentLoader pageName="Page2a65434284284261ac092e70bf02502f" darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<ComponentLoader pageName="Page7cc613f385894baab1d8dbfc2debaf10" darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<ComponentLoader pageName="Page4c38a236e5e1400983a68976a55d3609" darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Page60b015a51d5b41d4b44f951ccfb2b625" darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<ComponentLoader pageName="Page2f33c44975c74cb2ad6568953b52f354" darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<ComponentLoader pageName="Page72dd30e619d94b22bb958c8be9a8801f" darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<ComponentLoader pageName="Page3b61001b73554257a2f4d52aff794f73" darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<ComponentLoader pageName="Pageb6ecc0cb0d634b1eb956a5aca24b5b77" darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<ComponentLoader pageName="Page69c7ef1676174a9f9222fc2da0490262" darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<ComponentLoader pageName="Page73125b06c76148ee84c77ec4467a96a8" darkMode={props.darkMode} />},
                        {path:"Persistence", element:<ComponentLoader pageName="Page01f6f5d7c05d467c9b7be64cff1e48b9" darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<ComponentLoader pageName="Paged980cb44a3d545b08fe691d75cd4d03c" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Page84537c63c819427ab45189db8d42b699" darkMode={props.darkMode} />},
                        {path:"Tree", element:<ComponentLoader pageName="Pagef50c805e8fd64123b8d51d5a2dea2fbb" darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<ComponentLoader pageName="Page938a3cdfc60a4037b6866dfa3bdc8b19" darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<ComponentLoader pageName="Page3d36068c29a740e9891620c32efdb2b8" darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<ComponentLoader pageName="Page6d58c5a44cf84773bbbb04284b5bbc3d" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Page620ed894be784becbddea7c5ae0ce146" darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<ComponentLoader pageName="Page6392b9c328fb4d34b5b695cb1019dd89" darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<ComponentLoader pageName="Pageef70422b4d154026a57d80be99e74a43" darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"Async", element:<ComponentLoader pageName="Page621f60d468414d2d8571b0f5c42f3655" darkMode={props.darkMode} />},
                        {path:"AsyncSearch", element:<ComponentLoader pageName="Page11455ae002314381be99a9f87f64c03d" darkMode={props.darkMode} />},
                        {path:"Basic", element:<ComponentLoader pageName="Page33f9e4b82cf343589bd08445d41c2e70" darkMode={props.darkMode} />},
                        {path:"DefaultValue", element:<ComponentLoader pageName="Page5f51474b9b4e4a9ab4f474704cdf6ec8" darkMode={props.darkMode} />},
                        {path:"Depended", element:<ComponentLoader pageName="Page443d6d2d86aa4df4b452c6e0dce4cbdf" darkMode={props.darkMode} />},
                        {path:"DependedAsync", element:<ComponentLoader pageName="Pagefd219be5ca3940d9b3dfe28f323a9c1a" darkMode={props.darkMode} />},
                        {path:"NodeRender", element:<ComponentLoader pageName="Pagef9e2967ad1d541ba852f30bf4b57efc7" darkMode={props.darkMode} />},
                        {path:"ReadOnly", element:<ComponentLoader pageName="Pageb65b45514a304ed9874e8bb2c1398539" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Page7737086f3deb4bd4884574f03c151b04" darkMode={props.darkMode} />},
                        {path:"WithFormAndNodeRenderers", element:<ComponentLoader pageName="Page6b362d94e44642b295107f2ed3f4f5d1" darkMode={props.darkMode} />},
                        {path:"WithFormAsync", element:<ComponentLoader pageName="Pagea12b5b389c6b4572aad38931930e9ff9" darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<ComponentLoader pageName="Page6f45eab33def4bf0b003321d3835d5f1" darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

