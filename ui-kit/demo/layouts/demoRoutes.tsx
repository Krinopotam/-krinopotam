
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page631cc12536514a1ca556f9d6128c3050 = lazy(() => import('./../pages/Page631cc12536514a1ca556f9d6128c3050'))
    const Page38a7d2acd7f044e7a2926236c810748a = lazy(() => import('./../pages/Page38a7d2acd7f044e7a2926236c810748a'))

    const Page14f7bd96e7ef40eeb3b3bb193788d4c0 = lazy(() => import('./../pages/Page14f7bd96e7ef40eeb3b3bb193788d4c0'))
    const Pagee1a7877c1d5b4b7a9c942c4a1f5593d0 = lazy(() => import('./../pages/Pagee1a7877c1d5b4b7a9c942c4a1f5593d0'))

    const Page91c60603187a49c49fedb407bf27bf00 = lazy(() => import('./../pages/Page91c60603187a49c49fedb407bf27bf00'))
    const Page427908e091bd47449636766d9b3dcbd0 = lazy(() => import('./../pages/Page427908e091bd47449636766d9b3dcbd0'))
    const Pageb98550f2bbe84c2abbd599f4379620cc = lazy(() => import('./../pages/Pageb98550f2bbe84c2abbd599f4379620cc'))
    const Pagebb7db6df46764ae1b44979f4c6096c73 = lazy(() => import('./../pages/Pagebb7db6df46764ae1b44979f4c6096c73'))
    const Pagea4d321ab9b11477f8081b9c72a44a1d1 = lazy(() => import('./../pages/Pagea4d321ab9b11477f8081b9c72a44a1d1'))
    const Page15b8e6c262f041f1b1e9da9845a49950 = lazy(() => import('./../pages/Page15b8e6c262f041f1b1e9da9845a49950'))
    const Page26963c21ec7144d9b8e1ef0509363470 = lazy(() => import('./../pages/Page26963c21ec7144d9b8e1ef0509363470'))
    const Page165f406a6f6c4b24b5ed6be7cfe61f89 = lazy(() => import('./../pages/Page165f406a6f6c4b24b5ed6be7cfe61f89'))
    const Page26f803d6c8a84a58914308c972065013 = lazy(() => import('./../pages/Page26f803d6c8a84a58914308c972065013'))
    const Page3f0252cca4e74f149b17b60c4591c22d = lazy(() => import('./../pages/Page3f0252cca4e74f149b17b60c4591c22d'))

    const Pagef43278bf332e437cb011a192beca9c86 = lazy(() => import('./../pages/Pagef43278bf332e437cb011a192beca9c86'))
    const Paged810de8c166f4f1abd9de3ebed560d20 = lazy(() => import('./../pages/Paged810de8c166f4f1abd9de3ebed560d20'))
    const Page5a4aa46645314cadae7fca20ce02bb72 = lazy(() => import('./../pages/Page5a4aa46645314cadae7fca20ce02bb72'))

    const Page2454365b48224c25a1b6aae5b6b2260e = lazy(() => import('./../pages/Page2454365b48224c25a1b6aae5b6b2260e'))
    const Page55094aa06f6044ccbf738efd561e1022 = lazy(() => import('./../pages/Page55094aa06f6044ccbf738efd561e1022'))
    const Page887cd696cabc4095a026ae56f601b005 = lazy(() => import('./../pages/Page887cd696cabc4095a026ae56f601b005'))
    const Page3a8e73b9718442aeafbfaa3f46cbd50b = lazy(() => import('./../pages/Page3a8e73b9718442aeafbfaa3f46cbd50b'))
    const Pagee2ae6b0a6511438cab29930af86ec5e2 = lazy(() => import('./../pages/Pagee2ae6b0a6511438cab29930af86ec5e2'))
    const Pagee746728f7a264d2d9087099ad0673fe5 = lazy(() => import('./../pages/Pagee746728f7a264d2d9087099ad0673fe5'))
    const Page1301859c26b94352a18442c741c0a0f1 = lazy(() => import('./../pages/Page1301859c26b94352a18442c741c0a0f1'))
    const Page2182910c3d4343888b7de07fcd13d39d = lazy(() => import('./../pages/Page2182910c3d4343888b7de07fcd13d39d'))
    const Page7dd5de381d24427dab72f92809c3e962 = lazy(() => import('./../pages/Page7dd5de381d24427dab72f92809c3e962'))
    const Pagefe8dea351e18495aab9f2aa9d4f85818 = lazy(() => import('./../pages/Pagefe8dea351e18495aab9f2aa9d4f85818'))
    const Page09896daacdae4d0ab678038d928bf4b0 = lazy(() => import('./../pages/Page09896daacdae4d0ab678038d928bf4b0'))
    const Pagec3a9062cc6224258aae4fc3e027525a6 = lazy(() => import('./../pages/Pagec3a9062cc6224258aae4fc3e027525a6'))
    const Page8b07390799b54b4d89aeea2282020743 = lazy(() => import('./../pages/Page8b07390799b54b4d89aeea2282020743'))
    const Pageae059fa194c6487caf58aeac988b53d6 = lazy(() => import('./../pages/Pageae059fa194c6487caf58aeac988b53d6'))

    const Pagea3389659c16c451f8e8f2fa67c71ee14 = lazy(() => import('./../pages/Pagea3389659c16c451f8e8f2fa67c71ee14'))

    const Page560c9ae0dfca48bc9cb6f4a78ee4dc45 = lazy(() => import('./../pages/Page560c9ae0dfca48bc9cb6f4a78ee4dc45'))
    const Page264ad8ec79be4c0d8264f5c074f29264 = lazy(() => import('./../pages/Page264ad8ec79be4c0d8264f5c074f29264'))
    const Page27d7ec7456af4a47bafeea8bd994072b = lazy(() => import('./../pages/Page27d7ec7456af4a47bafeea8bd994072b'))
    const Page910c4d6ec99248f29fdd70319c9e57a5 = lazy(() => import('./../pages/Page910c4d6ec99248f29fdd70319c9e57a5'))
    const Page8bd96c9e8f1344a9a98fb8d9c25bca32 = lazy(() => import('./../pages/Page8bd96c9e8f1344a9a98fb8d9c25bca32'))
    const Page6d537296c6c94c61aa5393ca37d3f15d = lazy(() => import('./../pages/Page6d537296c6c94c61aa5393ca37d3f15d'))
    const Page9544395ee96146d59005d0df68ad69da = lazy(() => import('./../pages/Page9544395ee96146d59005d0df68ad69da'))
    const Pagec42a342bcb2c44ee81b4ac391e9506bc = lazy(() => import('./../pages/Pagec42a342bcb2c44ee81b4ac391e9506bc'))

    const Page9fbfde7a25cc4a6cb0ccb158db3504b6 = lazy(() => import('./../pages/Page9fbfde7a25cc4a6cb0ccb158db3504b6'))
    const Page75d2d11f9f2c4e4ebcf5c96692014edc = lazy(() => import('./../pages/Page75d2d11f9f2c4e4ebcf5c96692014edc'))
    const Page294c0ac4cce54f9abc2a0c183625092b = lazy(() => import('./../pages/Page294c0ac4cce54f9abc2a0c183625092b'))
    const Page065d1c90b3b8413e956952f047e2cd05 = lazy(() => import('./../pages/Page065d1c90b3b8413e956952f047e2cd05'))
    const Page16db1a92c1a742a0beb470442076fd09 = lazy(() => import('./../pages/Page16db1a92c1a742a0beb470442076fd09'))
    const Page6449c38c24164ff88ea299930e3b36d5 = lazy(() => import('./../pages/Page6449c38c24164ff88ea299930e3b36d5'))
    const Page434e2dbea49747a592213706e2c40491 = lazy(() => import('./../pages/Page434e2dbea49747a592213706e2c40491'))
    const Page58eaa79ff57f4048a390cc1deb58b034 = lazy(() => import('./../pages/Page58eaa79ff57f4048a390cc1deb58b034'))
    const Paged6d52eea723f44e8a39d9577bf083d8f = lazy(() => import('./../pages/Paged6d52eea723f44e8a39d9577bf083d8f'))
    const Page6464674853c243fabc152a2559e253d1 = lazy(() => import('./../pages/Page6464674853c243fabc152a2559e253d1'))
    const Page366f0407af8543418a4220a47b71e64d = lazy(() => import('./../pages/Page366f0407af8543418a4220a47b71e64d'))
    const Pagea0625ad2a94243589d1ad81d188660f6 = lazy(() => import('./../pages/Pagea0625ad2a94243589d1ad81d188660f6'))
    const Page6500511fed6d40b8b31921967899f5c1 = lazy(() => import('./../pages/Page6500511fed6d40b8b31921967899f5c1'))
    const Pagee9c40501087940cc9e415657b1e343cc = lazy(() => import('./../pages/Pagee9c40501087940cc9e415657b1e343cc'))
    const Page6c46556538a843539a1368fc5292cfa5 = lazy(() => import('./../pages/Page6c46556538a843539a1368fc5292cfa5'))

    const Page1ba306700a4f461db0f3d2351ad72fa1 = lazy(() => import('./../pages/Page1ba306700a4f461db0f3d2351ad72fa1'))

    const Pagedecec9fd4bcd4313ae70eb837335ffdd = lazy(() => import('./../pages/Pagedecec9fd4bcd4313ae70eb837335ffdd'))
    const Page66b8a02b51ba471bb0108540d91fe0f6 = lazy(() => import('./../pages/Page66b8a02b51ba471bb0108540d91fe0f6'))
    const Page77936e0ff0f74805ab079d0c0d1b9593 = lazy(() => import('./../pages/Page77936e0ff0f74805ab079d0c0d1b9593'))
    const Page0d9ce4e0909846169bd2c009266d1d7d = lazy(() => import('./../pages/Page0d9ce4e0909846169bd2c009266d1d7d'))
    const Page13261024131b4ab6a926bd9dfa2ea6ba = lazy(() => import('./../pages/Page13261024131b4ab6a926bd9dfa2ea6ba'))
    const Page25739c17ddc04a95a512cfc2a60942d5 = lazy(() => import('./../pages/Page25739c17ddc04a95a512cfc2a60942d5'))
    const Page2730c7c7cac3455592a148bc99cc229c = lazy(() => import('./../pages/Page2730c7c7cac3455592a148bc99cc229c'))
    const Pageee15ad7f124c49d188053f9701f84baa = lazy(() => import('./../pages/Pageee15ad7f124c49d188053f9701f84baa'))
    const Page8a73466809dc4563bf7f5d7e3c01bd0e = lazy(() => import('./../pages/Page8a73466809dc4563bf7f5d7e3c01bd0e'))

    const Page4b91a2d255e348b79d775e1451e43d67 = lazy(() => import('./../pages/Page4b91a2d255e348b79d775e1451e43d67'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page631cc12536514a1ca556f9d6128c3050 darkMode={props.darkMode} />},
                        {path:"Test2", element:<Page38a7d2acd7f044e7a2926236c810748a darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page14f7bd96e7ef40eeb3b3bb193788d4c0 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagee1a7877c1d5b4b7a9c942c4a1f5593d0 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page91c60603187a49c49fedb407bf27bf00 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page427908e091bd47449636766d9b3dcbd0 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageb98550f2bbe84c2abbd599f4379620cc darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagebb7db6df46764ae1b44979f4c6096c73 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagea4d321ab9b11477f8081b9c72a44a1d1 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page15b8e6c262f041f1b1e9da9845a49950 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page26963c21ec7144d9b8e1ef0509363470 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page165f406a6f6c4b24b5ed6be7cfe61f89 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page26f803d6c8a84a58914308c972065013 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page3f0252cca4e74f149b17b60c4591c22d darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagef43278bf332e437cb011a192beca9c86 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Paged810de8c166f4f1abd9de3ebed560d20 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page5a4aa46645314cadae7fca20ce02bb72 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page2454365b48224c25a1b6aae5b6b2260e darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page55094aa06f6044ccbf738efd561e1022 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page887cd696cabc4095a026ae56f601b005 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page3a8e73b9718442aeafbfaa3f46cbd50b darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pagee2ae6b0a6511438cab29930af86ec5e2 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagee746728f7a264d2d9087099ad0673fe5 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page1301859c26b94352a18442c741c0a0f1 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page2182910c3d4343888b7de07fcd13d39d darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page7dd5de381d24427dab72f92809c3e962 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagefe8dea351e18495aab9f2aa9d4f85818 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page09896daacdae4d0ab678038d928bf4b0 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagec3a9062cc6224258aae4fc3e027525a6 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page8b07390799b54b4d89aeea2282020743 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pageae059fa194c6487caf58aeac988b53d6 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagea3389659c16c451f8e8f2fa67c71ee14 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page560c9ae0dfca48bc9cb6f4a78ee4dc45 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page264ad8ec79be4c0d8264f5c074f29264 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page27d7ec7456af4a47bafeea8bd994072b darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page910c4d6ec99248f29fdd70319c9e57a5 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page8bd96c9e8f1344a9a98fb8d9c25bca32 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page6d537296c6c94c61aa5393ca37d3f15d darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page9544395ee96146d59005d0df68ad69da darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagec42a342bcb2c44ee81b4ac391e9506bc darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page9fbfde7a25cc4a6cb0ccb158db3504b6 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page75d2d11f9f2c4e4ebcf5c96692014edc darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page294c0ac4cce54f9abc2a0c183625092b darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page065d1c90b3b8413e956952f047e2cd05 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page16db1a92c1a742a0beb470442076fd09 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page6449c38c24164ff88ea299930e3b36d5 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page434e2dbea49747a592213706e2c40491 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page58eaa79ff57f4048a390cc1deb58b034 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Paged6d52eea723f44e8a39d9577bf083d8f darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page6464674853c243fabc152a2559e253d1 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page366f0407af8543418a4220a47b71e64d darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagea0625ad2a94243589d1ad81d188660f6 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page6500511fed6d40b8b31921967899f5c1 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagee9c40501087940cc9e415657b1e343cc darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page6c46556538a843539a1368fc5292cfa5 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page1ba306700a4f461db0f3d2351ad72fa1 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagedecec9fd4bcd4313ae70eb837335ffdd darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page66b8a02b51ba471bb0108540d91fe0f6 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page77936e0ff0f74805ab079d0c0d1b9593 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page0d9ce4e0909846169bd2c009266d1d7d darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page13261024131b4ab6a926bd9dfa2ea6ba darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page25739c17ddc04a95a512cfc2a60942d5 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page2730c7c7cac3455592a148bc99cc229c darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageee15ad7f124c49d188053f9701f84baa darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page8a73466809dc4563bf7f5d7e3c01bd0e darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page4b91a2d255e348b79d775e1451e43d67 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

