
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page447db56118a24b6c980c156d19f9e297 = lazy(() => import('./../pages/Page447db56118a24b6c980c156d19f9e297'))

    const Pagea80f5e1999714444a8da540976cba13c = lazy(() => import('./../pages/Pagea80f5e1999714444a8da540976cba13c'))
    const Pagef34e333b01ff4676a1ae6c0e78a8cab8 = lazy(() => import('./../pages/Pagef34e333b01ff4676a1ae6c0e78a8cab8'))

    const Page044471497ed442aea7415871761014e0 = lazy(() => import('./../pages/Page044471497ed442aea7415871761014e0'))
    const Pagecfde87b089f24e55a5344c9d46309d91 = lazy(() => import('./../pages/Pagecfde87b089f24e55a5344c9d46309d91'))
    const Pageaf7c4ca50c1f43d7bee64194db306307 = lazy(() => import('./../pages/Pageaf7c4ca50c1f43d7bee64194db306307'))
    const Page238c3f9be5c443d7b3886074a1f8b35f = lazy(() => import('./../pages/Page238c3f9be5c443d7b3886074a1f8b35f'))
    const Pageef7098b7c46c4ce991776f533213d657 = lazy(() => import('./../pages/Pageef7098b7c46c4ce991776f533213d657'))
    const Page042b58206e73469ebfb186ad203935d8 = lazy(() => import('./../pages/Page042b58206e73469ebfb186ad203935d8'))
    const Pageefe8123cfb8a4812a0940f62804d3619 = lazy(() => import('./../pages/Pageefe8123cfb8a4812a0940f62804d3619'))
    const Page44eb2fb73eeb4e1dbadae2fcf3a93311 = lazy(() => import('./../pages/Page44eb2fb73eeb4e1dbadae2fcf3a93311'))
    const Page6874036a7d884b3890dbe31dffec5ef7 = lazy(() => import('./../pages/Page6874036a7d884b3890dbe31dffec5ef7'))
    const Pagea7ffbd3636e248ec8ad0d28b40c9bf89 = lazy(() => import('./../pages/Pagea7ffbd3636e248ec8ad0d28b40c9bf89'))

    const Page8dc190502a16418a9c21b4dbf4fd0e77 = lazy(() => import('./../pages/Page8dc190502a16418a9c21b4dbf4fd0e77'))
    const Pageeb8f93a38fc24f0f81d22ce31a1fa171 = lazy(() => import('./../pages/Pageeb8f93a38fc24f0f81d22ce31a1fa171'))
    const Pagedfacbb78d2374196bbdeca7176cfb425 = lazy(() => import('./../pages/Pagedfacbb78d2374196bbdeca7176cfb425'))

    const Page32226fc828c848649798e40f3801be35 = lazy(() => import('./../pages/Page32226fc828c848649798e40f3801be35'))
    const Page56b29e5c6de541c8871e6603cbf2f1dd = lazy(() => import('./../pages/Page56b29e5c6de541c8871e6603cbf2f1dd'))
    const Pagea67751f2510546d5b5a19ea4c0ecd899 = lazy(() => import('./../pages/Pagea67751f2510546d5b5a19ea4c0ecd899'))
    const Pagee0001599df164fa7a1617f124d5e8c6c = lazy(() => import('./../pages/Pagee0001599df164fa7a1617f124d5e8c6c'))
    const Pageb08ae60f6bd5436b8a298bc0cb8c5a2a = lazy(() => import('./../pages/Pageb08ae60f6bd5436b8a298bc0cb8c5a2a'))
    const Pagebdf53ae2f21a46188f9ff9580c6e9944 = lazy(() => import('./../pages/Pagebdf53ae2f21a46188f9ff9580c6e9944'))
    const Pageacdabd8a0adf4679b96312fd982cb518 = lazy(() => import('./../pages/Pageacdabd8a0adf4679b96312fd982cb518'))
    const Pagea02bc5fc8552430a8e837f5adec146ef = lazy(() => import('./../pages/Pagea02bc5fc8552430a8e837f5adec146ef'))
    const Page6a6c018a4adf44e3a1bb78b55b33f28f = lazy(() => import('./../pages/Page6a6c018a4adf44e3a1bb78b55b33f28f'))
    const Page3d133dcd130246f48588ef7691a3ad3e = lazy(() => import('./../pages/Page3d133dcd130246f48588ef7691a3ad3e'))
    const Pagea791bf5cf6e141509702840eadd53f03 = lazy(() => import('./../pages/Pagea791bf5cf6e141509702840eadd53f03'))
    const Page002389d2b41243bfa09d9bf778ae0be8 = lazy(() => import('./../pages/Page002389d2b41243bfa09d9bf778ae0be8'))
    const Page0959f8c4dbc84cbea165678619dae4cc = lazy(() => import('./../pages/Page0959f8c4dbc84cbea165678619dae4cc'))
    const Page4f54be2af32c419e9b2dbce063e9258c = lazy(() => import('./../pages/Page4f54be2af32c419e9b2dbce063e9258c'))

    const Page455326d3188443c3b10c16512911b808 = lazy(() => import('./../pages/Page455326d3188443c3b10c16512911b808'))

    const Pageaf2e1a1390b4465187e3d701b2dfa00e = lazy(() => import('./../pages/Pageaf2e1a1390b4465187e3d701b2dfa00e'))
    const Page3e229f9b6a69491eb258bd54cc0ab957 = lazy(() => import('./../pages/Page3e229f9b6a69491eb258bd54cc0ab957'))
    const Page394d23ecb19c4d6882d279793a736511 = lazy(() => import('./../pages/Page394d23ecb19c4d6882d279793a736511'))
    const Page018a0ad1d9ed4925adc2c72e55020083 = lazy(() => import('./../pages/Page018a0ad1d9ed4925adc2c72e55020083'))
    const Pagef180beca6e0048948f77fba0102de6c3 = lazy(() => import('./../pages/Pagef180beca6e0048948f77fba0102de6c3'))
    const Page50198803995944498efbb115b82cb4d3 = lazy(() => import('./../pages/Page50198803995944498efbb115b82cb4d3'))
    const Page58e911d01f7a45e59660885dd86fa757 = lazy(() => import('./../pages/Page58e911d01f7a45e59660885dd86fa757'))
    const Page42e69c0fa6ee4a60a3499cfddb278b9d = lazy(() => import('./../pages/Page42e69c0fa6ee4a60a3499cfddb278b9d'))

    const Page75b8a87219ee44f4904edaa94885088a = lazy(() => import('./../pages/Page75b8a87219ee44f4904edaa94885088a'))
    const Pagecbf453cde5584d84b8650d94fe831ce3 = lazy(() => import('./../pages/Pagecbf453cde5584d84b8650d94fe831ce3'))
    const Page60d38be683d84b7e9162090c5f84f16f = lazy(() => import('./../pages/Page60d38be683d84b7e9162090c5f84f16f'))
    const Page76bdc8dbb14449b5a35fc96d9746e363 = lazy(() => import('./../pages/Page76bdc8dbb14449b5a35fc96d9746e363'))
    const Page7fac4a7665924a5e82051d82449bf861 = lazy(() => import('./../pages/Page7fac4a7665924a5e82051d82449bf861'))
    const Page45c84bc505d640e3b69841f38b7bf096 = lazy(() => import('./../pages/Page45c84bc505d640e3b69841f38b7bf096'))
    const Pageb15d5719b9d54298ae1934e9738e3b30 = lazy(() => import('./../pages/Pageb15d5719b9d54298ae1934e9738e3b30'))
    const Page7e176ec676e74270856706d5de052dd0 = lazy(() => import('./../pages/Page7e176ec676e74270856706d5de052dd0'))
    const Page10766dd1484c4c88985bb9d8f425b20b = lazy(() => import('./../pages/Page10766dd1484c4c88985bb9d8f425b20b'))
    const Page4ae76240f3bd4aafb803130b15bedf71 = lazy(() => import('./../pages/Page4ae76240f3bd4aafb803130b15bedf71'))
    const Pagea2c9245997164f8ca12992c7d2c63a3d = lazy(() => import('./../pages/Pagea2c9245997164f8ca12992c7d2c63a3d'))
    const Page0c39c1a8859a44dbb78df87627de1fba = lazy(() => import('./../pages/Page0c39c1a8859a44dbb78df87627de1fba'))
    const Page0625fa6b6a8d4fc8ac66203a950c4637 = lazy(() => import('./../pages/Page0625fa6b6a8d4fc8ac66203a950c4637'))
    const Pagef531de04a1bd4fa097e6a52e4e00d874 = lazy(() => import('./../pages/Pagef531de04a1bd4fa097e6a52e4e00d874'))
    const Pageb752d14f80ca45bda628d8d4552f2614 = lazy(() => import('./../pages/Pageb752d14f80ca45bda628d8d4552f2614'))

    const Page8bacbff8bb654f76aab164da6899a29a = lazy(() => import('./../pages/Page8bacbff8bb654f76aab164da6899a29a'))

    const Page03f0a7b41b7946aa9e1346dcfb01929a = lazy(() => import('./../pages/Page03f0a7b41b7946aa9e1346dcfb01929a'))
    const Pagef6d170a626484ad0833a261f7a4a91d0 = lazy(() => import('./../pages/Pagef6d170a626484ad0833a261f7a4a91d0'))
    const Page0fc2a40dbc884dd0a7f9a8f96b2aa934 = lazy(() => import('./../pages/Page0fc2a40dbc884dd0a7f9a8f96b2aa934'))
    const Page35379d130e86444a91d827caadf5d230 = lazy(() => import('./../pages/Page35379d130e86444a91d827caadf5d230'))
    const Page3966b4100bdf4d048471f812448ed821 = lazy(() => import('./../pages/Page3966b4100bdf4d048471f812448ed821'))
    const Pagec46a150b72ed4caaa2a95b5715727331 = lazy(() => import('./../pages/Pagec46a150b72ed4caaa2a95b5715727331'))
    const Page24decaf9863e4e00aaf24ac6785c76f2 = lazy(() => import('./../pages/Page24decaf9863e4e00aaf24ac6785c76f2'))
    const Pagef60ec7dac7594e2480276a42e0a200ca = lazy(() => import('./../pages/Pagef60ec7dac7594e2480276a42e0a200ca'))
    const Page4b75eddac16a4fa8933a14cbd2c1b5ef = lazy(() => import('./../pages/Page4b75eddac16a4fa8933a14cbd2c1b5ef'))

    const Page568998a7cd0f4725a8c6d6f1b323cb5d = lazy(() => import('./../pages/Page568998a7cd0f4725a8c6d6f1b323cb5d'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page447db56118a24b6c980c156d19f9e297 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagea80f5e1999714444a8da540976cba13c darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagef34e333b01ff4676a1ae6c0e78a8cab8 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page044471497ed442aea7415871761014e0 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Pagecfde87b089f24e55a5344c9d46309d91 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageaf7c4ca50c1f43d7bee64194db306307 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page238c3f9be5c443d7b3886074a1f8b35f darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageef7098b7c46c4ce991776f533213d657 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page042b58206e73469ebfb186ad203935d8 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pageefe8123cfb8a4812a0940f62804d3619 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page44eb2fb73eeb4e1dbadae2fcf3a93311 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page6874036a7d884b3890dbe31dffec5ef7 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagea7ffbd3636e248ec8ad0d28b40c9bf89 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page8dc190502a16418a9c21b4dbf4fd0e77 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pageeb8f93a38fc24f0f81d22ce31a1fa171 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagedfacbb78d2374196bbdeca7176cfb425 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page32226fc828c848649798e40f3801be35 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page56b29e5c6de541c8871e6603cbf2f1dd darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagea67751f2510546d5b5a19ea4c0ecd899 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pagee0001599df164fa7a1617f124d5e8c6c darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pageb08ae60f6bd5436b8a298bc0cb8c5a2a darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagebdf53ae2f21a46188f9ff9580c6e9944 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageacdabd8a0adf4679b96312fd982cb518 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagea02bc5fc8552430a8e837f5adec146ef darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page6a6c018a4adf44e3a1bb78b55b33f28f darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page3d133dcd130246f48588ef7691a3ad3e darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagea791bf5cf6e141509702840eadd53f03 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page002389d2b41243bfa09d9bf778ae0be8 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page0959f8c4dbc84cbea165678619dae4cc darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page4f54be2af32c419e9b2dbce063e9258c darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page455326d3188443c3b10c16512911b808 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageaf2e1a1390b4465187e3d701b2dfa00e darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page3e229f9b6a69491eb258bd54cc0ab957 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page394d23ecb19c4d6882d279793a736511 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page018a0ad1d9ed4925adc2c72e55020083 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pagef180beca6e0048948f77fba0102de6c3 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page50198803995944498efbb115b82cb4d3 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page58e911d01f7a45e59660885dd86fa757 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page42e69c0fa6ee4a60a3499cfddb278b9d darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page75b8a87219ee44f4904edaa94885088a darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagecbf453cde5584d84b8650d94fe831ce3 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page60d38be683d84b7e9162090c5f84f16f darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page76bdc8dbb14449b5a35fc96d9746e363 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page7fac4a7665924a5e82051d82449bf861 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page45c84bc505d640e3b69841f38b7bf096 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pageb15d5719b9d54298ae1934e9738e3b30 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page7e176ec676e74270856706d5de052dd0 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page10766dd1484c4c88985bb9d8f425b20b darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page4ae76240f3bd4aafb803130b15bedf71 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagea2c9245997164f8ca12992c7d2c63a3d darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page0c39c1a8859a44dbb78df87627de1fba darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page0625fa6b6a8d4fc8ac66203a950c4637 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagef531de04a1bd4fa097e6a52e4e00d874 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pageb752d14f80ca45bda628d8d4552f2614 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page8bacbff8bb654f76aab164da6899a29a darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page03f0a7b41b7946aa9e1346dcfb01929a darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pagef6d170a626484ad0833a261f7a4a91d0 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page0fc2a40dbc884dd0a7f9a8f96b2aa934 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page35379d130e86444a91d827caadf5d230 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page3966b4100bdf4d048471f812448ed821 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagec46a150b72ed4caaa2a95b5715727331 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page24decaf9863e4e00aaf24ac6785c76f2 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagef60ec7dac7594e2480276a42e0a200ca darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page4b75eddac16a4fa8933a14cbd2c1b5ef darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page568998a7cd0f4725a8c6d6f1b323cb5d darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

