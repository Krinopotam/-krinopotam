
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page9e36ca299dfc4a85b9b6ec8a3a40dfa0 = lazy(() => import('./../pages/Page9e36ca299dfc4a85b9b6ec8a3a40dfa0'))

    const Pagef124440ecf964794a1eb7bde54ce7ca0 = lazy(() => import('./../pages/Pagef124440ecf964794a1eb7bde54ce7ca0'))
    const Pageb417e5f3d924483b889e6044e274f7fe = lazy(() => import('./../pages/Pageb417e5f3d924483b889e6044e274f7fe'))

    const Page05056bc3288a4c37a39564eda4db88ef = lazy(() => import('./../pages/Page05056bc3288a4c37a39564eda4db88ef'))
    const Pagefe296efc8ddf4e4ab83f867ff6f65b07 = lazy(() => import('./../pages/Pagefe296efc8ddf4e4ab83f867ff6f65b07'))
    const Page473e48e77c674377b01b64e68f7208bf = lazy(() => import('./../pages/Page473e48e77c674377b01b64e68f7208bf'))
    const Page18f47e9f15884825a408b4ecfe680502 = lazy(() => import('./../pages/Page18f47e9f15884825a408b4ecfe680502'))
    const Pageb2aef1f2e6974dd3b3468c61b1feee96 = lazy(() => import('./../pages/Pageb2aef1f2e6974dd3b3468c61b1feee96'))
    const Page6992a6e44e6c4275a724a4e4c184a456 = lazy(() => import('./../pages/Page6992a6e44e6c4275a724a4e4c184a456'))
    const Page3a38778613144a719b8c68c891f45361 = lazy(() => import('./../pages/Page3a38778613144a719b8c68c891f45361'))
    const Page654cefb961ed4ea0ab852874469519b1 = lazy(() => import('./../pages/Page654cefb961ed4ea0ab852874469519b1'))
    const Paged72dba0237b54687a7f7aff9b18eed56 = lazy(() => import('./../pages/Paged72dba0237b54687a7f7aff9b18eed56'))
    const Page37d18faabc77475cb25ff48c07863231 = lazy(() => import('./../pages/Page37d18faabc77475cb25ff48c07863231'))

    const Page03466a8671854c98a3c9c1e327edddb7 = lazy(() => import('./../pages/Page03466a8671854c98a3c9c1e327edddb7'))
    const Page3c1ee19c80aa4aed9daaa0009b3665e6 = lazy(() => import('./../pages/Page3c1ee19c80aa4aed9daaa0009b3665e6'))
    const Page87f1a2d987fb4b0f8d3fddce113c02d6 = lazy(() => import('./../pages/Page87f1a2d987fb4b0f8d3fddce113c02d6'))

    const Page74a3f955ea5e4bf69f4e7d3fe92439c5 = lazy(() => import('./../pages/Page74a3f955ea5e4bf69f4e7d3fe92439c5'))
    const Pagea73645d40e0043fbad6e73a83fbda83f = lazy(() => import('./../pages/Pagea73645d40e0043fbad6e73a83fbda83f'))
    const Pagee2c60b9c6cf148adbede67a718d5fe2d = lazy(() => import('./../pages/Pagee2c60b9c6cf148adbede67a718d5fe2d'))
    const Pageb43556fce0f44d879c83ae7312ded21d = lazy(() => import('./../pages/Pageb43556fce0f44d879c83ae7312ded21d'))
    const Page1fbc10bf8fee4fe49ee847ebb269a2d5 = lazy(() => import('./../pages/Page1fbc10bf8fee4fe49ee847ebb269a2d5'))
    const Page7b81f8ba86414f5697c1c54e2db1960d = lazy(() => import('./../pages/Page7b81f8ba86414f5697c1c54e2db1960d'))
    const Pagebe47312c7d8449ae91f92aaced0f9d89 = lazy(() => import('./../pages/Pagebe47312c7d8449ae91f92aaced0f9d89'))
    const Pagef803cae7eb034488bcb1ed9bb65a7839 = lazy(() => import('./../pages/Pagef803cae7eb034488bcb1ed9bb65a7839'))
    const Page8cf95087e542407d957906d3723a23af = lazy(() => import('./../pages/Page8cf95087e542407d957906d3723a23af'))
    const Pagea7865670ee3343d7a03ac4f4dc793b71 = lazy(() => import('./../pages/Pagea7865670ee3343d7a03ac4f4dc793b71'))
    const Page1d4fe59ea7d444a2aa5b0b454259009b = lazy(() => import('./../pages/Page1d4fe59ea7d444a2aa5b0b454259009b'))
    const Pagee95c54f51f2549848841e3fccb97b9ad = lazy(() => import('./../pages/Pagee95c54f51f2549848841e3fccb97b9ad'))
    const Page8ab82964e7264da4a1bc65c18f452a9f = lazy(() => import('./../pages/Page8ab82964e7264da4a1bc65c18f452a9f'))
    const Page4439228ebdac4e06a8410406e0166719 = lazy(() => import('./../pages/Page4439228ebdac4e06a8410406e0166719'))

    const Page058038cc794a4ed5b8c5d9de207dae74 = lazy(() => import('./../pages/Page058038cc794a4ed5b8c5d9de207dae74'))

    const Page49893c77e2834f2480d9f2877da5cc0f = lazy(() => import('./../pages/Page49893c77e2834f2480d9f2877da5cc0f'))
    const Page89cc2e9707df4ea3bdb947e7c72611a9 = lazy(() => import('./../pages/Page89cc2e9707df4ea3bdb947e7c72611a9'))
    const Page65161bf029814b37aeb3379a07754731 = lazy(() => import('./../pages/Page65161bf029814b37aeb3379a07754731'))
    const Page663d4bce47524775a2eb80b371c1a7e0 = lazy(() => import('./../pages/Page663d4bce47524775a2eb80b371c1a7e0'))
    const Page2d312448c5fa4dc395036c78fd1eb6c6 = lazy(() => import('./../pages/Page2d312448c5fa4dc395036c78fd1eb6c6'))
    const Page56027921832448c3b98b04633e47ee21 = lazy(() => import('./../pages/Page56027921832448c3b98b04633e47ee21'))
    const Pagec9a4c96552e84904a5ccab1d189bdd89 = lazy(() => import('./../pages/Pagec9a4c96552e84904a5ccab1d189bdd89'))
    const Pageff7f919c00dc436baae5e9b13fbf108a = lazy(() => import('./../pages/Pageff7f919c00dc436baae5e9b13fbf108a'))

    const Page1bc90a9df10c414bb5bb26f72b5940ba = lazy(() => import('./../pages/Page1bc90a9df10c414bb5bb26f72b5940ba'))
    const Page47e3c24d1a3f4c3b89b9b1033deecbdc = lazy(() => import('./../pages/Page47e3c24d1a3f4c3b89b9b1033deecbdc'))
    const Pageddf5348fbd914deaa915cbcbb684423d = lazy(() => import('./../pages/Pageddf5348fbd914deaa915cbcbb684423d'))
    const Page81a024d2d3794f67b0168cf0e77e2ebc = lazy(() => import('./../pages/Page81a024d2d3794f67b0168cf0e77e2ebc'))
    const Pagecc17fb5577a54d279bf9f539f175c7fd = lazy(() => import('./../pages/Pagecc17fb5577a54d279bf9f539f175c7fd'))
    const Page46b5391901b04a4fad24bb7fa1eec215 = lazy(() => import('./../pages/Page46b5391901b04a4fad24bb7fa1eec215'))
    const Page3d6be3eb83664d9cae7e8e9b46a4fe47 = lazy(() => import('./../pages/Page3d6be3eb83664d9cae7e8e9b46a4fe47'))
    const Pagee5725803d4bd47aabd9321a1745110e7 = lazy(() => import('./../pages/Pagee5725803d4bd47aabd9321a1745110e7'))
    const Page8d3e104809934025a8db5ae71ff9b002 = lazy(() => import('./../pages/Page8d3e104809934025a8db5ae71ff9b002'))
    const Pagea423a5703e03461bb5c8fffa7d6c08fd = lazy(() => import('./../pages/Pagea423a5703e03461bb5c8fffa7d6c08fd'))
    const Page6e071177849646cf8069b83bbaaa5353 = lazy(() => import('./../pages/Page6e071177849646cf8069b83bbaaa5353'))
    const Pagee1e9e82ff015457289ba1b8326e5cf1c = lazy(() => import('./../pages/Pagee1e9e82ff015457289ba1b8326e5cf1c'))
    const Pageab608c8cf29b4d189e62e37301a91c31 = lazy(() => import('./../pages/Pageab608c8cf29b4d189e62e37301a91c31'))
    const Page788fb036243b4b5f9f1f4c5c093cf0f1 = lazy(() => import('./../pages/Page788fb036243b4b5f9f1f4c5c093cf0f1'))
    const Pageb9fe7b34468f49488452884db1a4d0dc = lazy(() => import('./../pages/Pageb9fe7b34468f49488452884db1a4d0dc'))

    const Page9eb46757d61040cdacbc6e0ab3ef0c75 = lazy(() => import('./../pages/Page9eb46757d61040cdacbc6e0ab3ef0c75'))

    const Pagebd2108a8562e417fbd7307c9ea4222d0 = lazy(() => import('./../pages/Pagebd2108a8562e417fbd7307c9ea4222d0'))
    const Page4562279b659847d3810db9596c0700cf = lazy(() => import('./../pages/Page4562279b659847d3810db9596c0700cf'))
    const Page1784e4b27d4548dea3ea95dddb4ab075 = lazy(() => import('./../pages/Page1784e4b27d4548dea3ea95dddb4ab075'))
    const Pagefb27c8e5d90b4120b35085091f87668a = lazy(() => import('./../pages/Pagefb27c8e5d90b4120b35085091f87668a'))
    const Page8a0a687069a248969aa264d09bc7f9bd = lazy(() => import('./../pages/Page8a0a687069a248969aa264d09bc7f9bd'))
    const Page82e8469994c3420084d2e4292dcfd0c8 = lazy(() => import('./../pages/Page82e8469994c3420084d2e4292dcfd0c8'))
    const Page35407ab874a145d6a27b215e29868b77 = lazy(() => import('./../pages/Page35407ab874a145d6a27b215e29868b77'))
    const Page23dcbcb30ca942469acb5c3e02b1fbe1 = lazy(() => import('./../pages/Page23dcbcb30ca942469acb5c3e02b1fbe1'))
    const Pageb55411bf15554cd486a46cfac7395057 = lazy(() => import('./../pages/Pageb55411bf15554cd486a46cfac7395057'))

    const Page72b511c40bae4180b83a5a2384881e03 = lazy(() => import('./../pages/Page72b511c40bae4180b83a5a2384881e03'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page9e36ca299dfc4a85b9b6ec8a3a40dfa0 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagef124440ecf964794a1eb7bde54ce7ca0 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pageb417e5f3d924483b889e6044e274f7fe darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page05056bc3288a4c37a39564eda4db88ef darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Pagefe296efc8ddf4e4ab83f867ff6f65b07 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page473e48e77c674377b01b64e68f7208bf darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page18f47e9f15884825a408b4ecfe680502 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageb2aef1f2e6974dd3b3468c61b1feee96 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page6992a6e44e6c4275a724a4e4c184a456 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page3a38778613144a719b8c68c891f45361 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page654cefb961ed4ea0ab852874469519b1 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Paged72dba0237b54687a7f7aff9b18eed56 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page37d18faabc77475cb25ff48c07863231 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page03466a8671854c98a3c9c1e327edddb7 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page3c1ee19c80aa4aed9daaa0009b3665e6 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page87f1a2d987fb4b0f8d3fddce113c02d6 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page74a3f955ea5e4bf69f4e7d3fe92439c5 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagea73645d40e0043fbad6e73a83fbda83f darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagee2c60b9c6cf148adbede67a718d5fe2d darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pageb43556fce0f44d879c83ae7312ded21d darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page1fbc10bf8fee4fe49ee847ebb269a2d5 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page7b81f8ba86414f5697c1c54e2db1960d darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagebe47312c7d8449ae91f92aaced0f9d89 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagef803cae7eb034488bcb1ed9bb65a7839 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page8cf95087e542407d957906d3723a23af darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagea7865670ee3343d7a03ac4f4dc793b71 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page1d4fe59ea7d444a2aa5b0b454259009b darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagee95c54f51f2549848841e3fccb97b9ad darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page8ab82964e7264da4a1bc65c18f452a9f darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page4439228ebdac4e06a8410406e0166719 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page058038cc794a4ed5b8c5d9de207dae74 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page49893c77e2834f2480d9f2877da5cc0f darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page89cc2e9707df4ea3bdb947e7c72611a9 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page65161bf029814b37aeb3379a07754731 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page663d4bce47524775a2eb80b371c1a7e0 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page2d312448c5fa4dc395036c78fd1eb6c6 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page56027921832448c3b98b04633e47ee21 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagec9a4c96552e84904a5ccab1d189bdd89 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pageff7f919c00dc436baae5e9b13fbf108a darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page1bc90a9df10c414bb5bb26f72b5940ba darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page47e3c24d1a3f4c3b89b9b1033deecbdc darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pageddf5348fbd914deaa915cbcbb684423d darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page81a024d2d3794f67b0168cf0e77e2ebc darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagecc17fb5577a54d279bf9f539f175c7fd darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page46b5391901b04a4fad24bb7fa1eec215 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page3d6be3eb83664d9cae7e8e9b46a4fe47 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagee5725803d4bd47aabd9321a1745110e7 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page8d3e104809934025a8db5ae71ff9b002 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagea423a5703e03461bb5c8fffa7d6c08fd darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page6e071177849646cf8069b83bbaaa5353 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagee1e9e82ff015457289ba1b8326e5cf1c darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pageab608c8cf29b4d189e62e37301a91c31 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page788fb036243b4b5f9f1f4c5c093cf0f1 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pageb9fe7b34468f49488452884db1a4d0dc darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page9eb46757d61040cdacbc6e0ab3ef0c75 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagebd2108a8562e417fbd7307c9ea4222d0 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page4562279b659847d3810db9596c0700cf darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page1784e4b27d4548dea3ea95dddb4ab075 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagefb27c8e5d90b4120b35085091f87668a darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page8a0a687069a248969aa264d09bc7f9bd darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page82e8469994c3420084d2e4292dcfd0c8 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page35407ab874a145d6a27b215e29868b77 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page23dcbcb30ca942469acb5c3e02b1fbe1 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pageb55411bf15554cd486a46cfac7395057 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page72b511c40bae4180b83a5a2384881e03 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

