
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page4c6e2fd1573a4ca9bdba0ab6665eb20b = lazy(() => import('./../pages/Page4c6e2fd1573a4ca9bdba0ab6665eb20b'))
    const Page1c1fa505e16c46ad96e6da26c2f244f5 = lazy(() => import('./../pages/Page1c1fa505e16c46ad96e6da26c2f244f5'))

    const Page3daa4e6c045f4030ae6e5f3cec4462a8 = lazy(() => import('./../pages/Page3daa4e6c045f4030ae6e5f3cec4462a8'))
    const Page8cdffc1b2d8c4fc4ab4cd316b7c4a25e = lazy(() => import('./../pages/Page8cdffc1b2d8c4fc4ab4cd316b7c4a25e'))
    const Page4f13d8e56321415fbfffd9e655b1a36b = lazy(() => import('./../pages/Page4f13d8e56321415fbfffd9e655b1a36b'))
    const Pagec5948cf63a724eb58470d05c4a434842 = lazy(() => import('./../pages/Pagec5948cf63a724eb58470d05c4a434842'))
    const Page8768a9fb7b9a48e2ab33f649fd54f166 = lazy(() => import('./../pages/Page8768a9fb7b9a48e2ab33f649fd54f166'))
    const Paged38612d784dd4eacbecd0e846c2e47c3 = lazy(() => import('./../pages/Paged38612d784dd4eacbecd0e846c2e47c3'))
    const Pageac8e6a7f439743b9921ee47a40624edc = lazy(() => import('./../pages/Pageac8e6a7f439743b9921ee47a40624edc'))
    const Pagef44417271c944c9a85e6706d5663122a = lazy(() => import('./../pages/Pagef44417271c944c9a85e6706d5663122a'))
    const Paged1259a9408b54a5cb311937af9ae1f31 = lazy(() => import('./../pages/Paged1259a9408b54a5cb311937af9ae1f31'))

    const Page3410cbc8393b4e55b10f95e096414d1d = lazy(() => import('./../pages/Page3410cbc8393b4e55b10f95e096414d1d'))
    const Pagebe09a45160a24e228e16dbe5d8aab0db = lazy(() => import('./../pages/Pagebe09a45160a24e228e16dbe5d8aab0db'))
    const Page1dd5afe37dc64475b48344d108f6b684 = lazy(() => import('./../pages/Page1dd5afe37dc64475b48344d108f6b684'))

    const Page132597ba1adc46348ffbee5bb87c4116 = lazy(() => import('./../pages/Page132597ba1adc46348ffbee5bb87c4116'))
    const Page735e0614ddd044c1986142e0875ba5f5 = lazy(() => import('./../pages/Page735e0614ddd044c1986142e0875ba5f5'))
    const Page113a9fb615634808ba2107d92c47e23a = lazy(() => import('./../pages/Page113a9fb615634808ba2107d92c47e23a'))
    const Page3204d3201d4e43b489ad4827aff1ea1a = lazy(() => import('./../pages/Page3204d3201d4e43b489ad4827aff1ea1a'))
    const Page7c3f08a4657c4f198a648ae819ff1d43 = lazy(() => import('./../pages/Page7c3f08a4657c4f198a648ae819ff1d43'))
    const Page96aeaf721d4c4a0f8f86ed676e9dce85 = lazy(() => import('./../pages/Page96aeaf721d4c4a0f8f86ed676e9dce85'))
    const Page48864c35b95c470fa42a1bcc16a2ebc9 = lazy(() => import('./../pages/Page48864c35b95c470fa42a1bcc16a2ebc9'))
    const Page5a2ffdfb90504d778aa12c9e780c8562 = lazy(() => import('./../pages/Page5a2ffdfb90504d778aa12c9e780c8562'))
    const Page9b224f22972b49eb8022194ad307ec75 = lazy(() => import('./../pages/Page9b224f22972b49eb8022194ad307ec75'))
    const Pagec9137c306bc1494e831492a8316d0e58 = lazy(() => import('./../pages/Pagec9137c306bc1494e831492a8316d0e58'))
    const Page77bc989edda343f7b19487dd3179908f = lazy(() => import('./../pages/Page77bc989edda343f7b19487dd3179908f'))
    const Pagee4d5c04422934f2b8beb442ebc4403c8 = lazy(() => import('./../pages/Pagee4d5c04422934f2b8beb442ebc4403c8'))
    const Page53dc6687876b49d9bb0103a371cdbd14 = lazy(() => import('./../pages/Page53dc6687876b49d9bb0103a371cdbd14'))
    const Page1c4e4e49759848ed9aae2472c1c9963b = lazy(() => import('./../pages/Page1c4e4e49759848ed9aae2472c1c9963b'))

    const Page69fc4e1bad6d44368ca0872e20ade270 = lazy(() => import('./../pages/Page69fc4e1bad6d44368ca0872e20ade270'))

    const Paged77c5cea27c54832aa663bcfbf284779 = lazy(() => import('./../pages/Paged77c5cea27c54832aa663bcfbf284779'))
    const Pagea83c5735c7d84678b5e07dfff57e37c9 = lazy(() => import('./../pages/Pagea83c5735c7d84678b5e07dfff57e37c9'))
    const Page51c4d50a5dfc4ac696f02ac4b47c9305 = lazy(() => import('./../pages/Page51c4d50a5dfc4ac696f02ac4b47c9305'))
    const Page2f0b2fe53e5d4a6b83e07d9d1e0c8c95 = lazy(() => import('./../pages/Page2f0b2fe53e5d4a6b83e07d9d1e0c8c95'))
    const Pagea91c51425e7b48458135ac0ba43ccafc = lazy(() => import('./../pages/Pagea91c51425e7b48458135ac0ba43ccafc'))
    const Page9828f7bc5c88468e82da641a636095eb = lazy(() => import('./../pages/Page9828f7bc5c88468e82da641a636095eb'))
    const Paged040fe752fc344b18fb668a668cf8dda = lazy(() => import('./../pages/Paged040fe752fc344b18fb668a668cf8dda'))
    const Page89a4faf65f30487f9d8bc1e9b3ef9da0 = lazy(() => import('./../pages/Page89a4faf65f30487f9d8bc1e9b3ef9da0'))

    const Pagef9a9fc62870046d4b25816d965f1e18d = lazy(() => import('./../pages/Pagef9a9fc62870046d4b25816d965f1e18d'))
    const Pagef217cef358904414b0fd47c547d0d3a6 = lazy(() => import('./../pages/Pagef217cef358904414b0fd47c547d0d3a6'))
    const Pageec64f1530a994c328f82c8d7b0ebf8ce = lazy(() => import('./../pages/Pageec64f1530a994c328f82c8d7b0ebf8ce'))
    const Pagedfbd4f488c85400fb6a567f2c33ca1d1 = lazy(() => import('./../pages/Pagedfbd4f488c85400fb6a567f2c33ca1d1'))
    const Pageba8bd561bc584d22be99f5b0e71a6816 = lazy(() => import('./../pages/Pageba8bd561bc584d22be99f5b0e71a6816'))
    const Page9fbc76938a7d4a61a84f8a837049f51e = lazy(() => import('./../pages/Page9fbc76938a7d4a61a84f8a837049f51e'))
    const Pagea7499ba4ab5d4654a952339add59aff6 = lazy(() => import('./../pages/Pagea7499ba4ab5d4654a952339add59aff6'))
    const Pagefa776e6d7e5b436e9a3ad082d3d0f326 = lazy(() => import('./../pages/Pagefa776e6d7e5b436e9a3ad082d3d0f326'))
    const Pageb8030951429143668e236217e0085aec = lazy(() => import('./../pages/Pageb8030951429143668e236217e0085aec'))
    const Page7f45b83b032a4d609f6c1a18d3eba2ab = lazy(() => import('./../pages/Page7f45b83b032a4d609f6c1a18d3eba2ab'))
    const Page05226f41b2b04c80bba6b30a28a4f903 = lazy(() => import('./../pages/Page05226f41b2b04c80bba6b30a28a4f903'))
    const Page938d6bb972a64141bb18950359916a10 = lazy(() => import('./../pages/Page938d6bb972a64141bb18950359916a10'))
    const Page1040a4fcd7464097b5cada4d7b1b80c3 = lazy(() => import('./../pages/Page1040a4fcd7464097b5cada4d7b1b80c3'))
    const Pagee5b5db13578746cf8e267e4209fc9292 = lazy(() => import('./../pages/Pagee5b5db13578746cf8e267e4209fc9292'))
    const Page5372554706314b3c9752c50aa4c4d1ff = lazy(() => import('./../pages/Page5372554706314b3c9752c50aa4c4d1ff'))

    const Pagec01d739f988c4c10b4d6ad4be1bef36f = lazy(() => import('./../pages/Pagec01d739f988c4c10b4d6ad4be1bef36f'))

    const Paged20377be5c11407caf7a219e866ff9de = lazy(() => import('./../pages/Paged20377be5c11407caf7a219e866ff9de'))
    const Paged6ec73a91562484b91734bca12c03b9e = lazy(() => import('./../pages/Paged6ec73a91562484b91734bca12c03b9e'))
    const Page23dbf116f3a846f7a2b211ca5525d2c8 = lazy(() => import('./../pages/Page23dbf116f3a846f7a2b211ca5525d2c8'))
    const Page7ee26524361d409c8a2ad23941002e80 = lazy(() => import('./../pages/Page7ee26524361d409c8a2ad23941002e80'))
    const Pageeda15f85089d45819c07daffd2610ece = lazy(() => import('./../pages/Pageeda15f85089d45819c07daffd2610ece'))
    const Page42c5166568704a0fa98febbd84f4c670 = lazy(() => import('./../pages/Page42c5166568704a0fa98febbd84f4c670'))
    const Page5b264a2229de4d699c7350bf89dcfe13 = lazy(() => import('./../pages/Page5b264a2229de4d699c7350bf89dcfe13'))
    const Pagecf635173e6b54a5b9eef83dba0288ab9 = lazy(() => import('./../pages/Pagecf635173e6b54a5b9eef83dba0288ab9'))
    const Pagee7b5702c78a943648e204b883230839e = lazy(() => import('./../pages/Pagee7b5702c78a943648e204b883230839e'))

    const Page40e9e63a3bde4b8fb00e816b59a5a278 = lazy(() => import('./../pages/Page40e9e63a3bde4b8fb00e816b59a5a278'))


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
                        {path:"FormSubmitting", element:<Page4c6e2fd1573a4ca9bdba0ab6665eb20b darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page1c1fa505e16c46ad96e6da26c2f244f5 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page3daa4e6c045f4030ae6e5f3cec4462a8 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page8cdffc1b2d8c4fc4ab4cd316b7c4a25e darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page4f13d8e56321415fbfffd9e655b1a36b darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagec5948cf63a724eb58470d05c4a434842 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page8768a9fb7b9a48e2ab33f649fd54f166 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Paged38612d784dd4eacbecd0e846c2e47c3 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageac8e6a7f439743b9921ee47a40624edc darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagef44417271c944c9a85e6706d5663122a darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Paged1259a9408b54a5cb311937af9ae1f31 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page3410cbc8393b4e55b10f95e096414d1d darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagebe09a45160a24e228e16dbe5d8aab0db darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page1dd5afe37dc64475b48344d108f6b684 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page132597ba1adc46348ffbee5bb87c4116 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page735e0614ddd044c1986142e0875ba5f5 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page113a9fb615634808ba2107d92c47e23a darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page3204d3201d4e43b489ad4827aff1ea1a darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page7c3f08a4657c4f198a648ae819ff1d43 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page96aeaf721d4c4a0f8f86ed676e9dce85 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page48864c35b95c470fa42a1bcc16a2ebc9 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page5a2ffdfb90504d778aa12c9e780c8562 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page9b224f22972b49eb8022194ad307ec75 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagec9137c306bc1494e831492a8316d0e58 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page77bc989edda343f7b19487dd3179908f darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagee4d5c04422934f2b8beb442ebc4403c8 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page53dc6687876b49d9bb0103a371cdbd14 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page1c4e4e49759848ed9aae2472c1c9963b darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page69fc4e1bad6d44368ca0872e20ade270 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Paged77c5cea27c54832aa663bcfbf284779 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagea83c5735c7d84678b5e07dfff57e37c9 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page51c4d50a5dfc4ac696f02ac4b47c9305 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page2f0b2fe53e5d4a6b83e07d9d1e0c8c95 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pagea91c51425e7b48458135ac0ba43ccafc darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page9828f7bc5c88468e82da641a636095eb darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Paged040fe752fc344b18fb668a668cf8dda darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page89a4faf65f30487f9d8bc1e9b3ef9da0 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagef9a9fc62870046d4b25816d965f1e18d darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagef217cef358904414b0fd47c547d0d3a6 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pageec64f1530a994c328f82c8d7b0ebf8ce darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagedfbd4f488c85400fb6a567f2c33ca1d1 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageba8bd561bc584d22be99f5b0e71a6816 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page9fbc76938a7d4a61a84f8a837049f51e darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pagea7499ba4ab5d4654a952339add59aff6 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagefa776e6d7e5b436e9a3ad082d3d0f326 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pageb8030951429143668e236217e0085aec darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page7f45b83b032a4d609f6c1a18d3eba2ab darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page05226f41b2b04c80bba6b30a28a4f903 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page938d6bb972a64141bb18950359916a10 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page1040a4fcd7464097b5cada4d7b1b80c3 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagee5b5db13578746cf8e267e4209fc9292 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page5372554706314b3c9752c50aa4c4d1ff darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagec01d739f988c4c10b4d6ad4be1bef36f darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Paged20377be5c11407caf7a219e866ff9de darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Paged6ec73a91562484b91734bca12c03b9e darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page23dbf116f3a846f7a2b211ca5525d2c8 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page7ee26524361d409c8a2ad23941002e80 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pageeda15f85089d45819c07daffd2610ece darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page42c5166568704a0fa98febbd84f4c670 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page5b264a2229de4d699c7350bf89dcfe13 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagecf635173e6b54a5b9eef83dba0288ab9 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagee7b5702c78a943648e204b883230839e darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page40e9e63a3bde4b8fb00e816b59a5a278 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

