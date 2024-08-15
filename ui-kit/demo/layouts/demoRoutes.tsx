
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page2b1441beedbe4182a9f61401d2a11079 = lazy(() => import('./../pages/Page2b1441beedbe4182a9f61401d2a11079'))
    const Pageb7f8744ed5604af0ba74cf4968056065 = lazy(() => import('./../pages/Pageb7f8744ed5604af0ba74cf4968056065'))

    const Page56435840461b4010a8c12f6d7cd0a053 = lazy(() => import('./../pages/Page56435840461b4010a8c12f6d7cd0a053'))
    const Pageaf411b98e2124d6f97c3da42a9ab6313 = lazy(() => import('./../pages/Pageaf411b98e2124d6f97c3da42a9ab6313'))
    const Pagee23501abcb26471b8775d2e623312c80 = lazy(() => import('./../pages/Pagee23501abcb26471b8775d2e623312c80'))
    const Page80631d9aa12b4f1385232227102bc762 = lazy(() => import('./../pages/Page80631d9aa12b4f1385232227102bc762'))
    const Pagec5f7d8a5e1c549a89ee632e6cf79bf5b = lazy(() => import('./../pages/Pagec5f7d8a5e1c549a89ee632e6cf79bf5b'))
    const Pagee37ba51e9527463f9187bee2e4e49c41 = lazy(() => import('./../pages/Pagee37ba51e9527463f9187bee2e4e49c41'))
    const Pageb5fa9c7466d24e24960ccebc68731b6c = lazy(() => import('./../pages/Pageb5fa9c7466d24e24960ccebc68731b6c'))
    const Page7b7e131a3e3b45c98c13ac240d32858d = lazy(() => import('./../pages/Page7b7e131a3e3b45c98c13ac240d32858d'))
    const Page5f0e1e4b19c14b848e38737a228a718b = lazy(() => import('./../pages/Page5f0e1e4b19c14b848e38737a228a718b'))

    const Page47db7c6c2e3a4663801365b76ab08b21 = lazy(() => import('./../pages/Page47db7c6c2e3a4663801365b76ab08b21'))
    const Page1e9e019184df47ba832bb6feb3752768 = lazy(() => import('./../pages/Page1e9e019184df47ba832bb6feb3752768'))
    const Pagef80cb57698e5455595f73cf44f7f843e = lazy(() => import('./../pages/Pagef80cb57698e5455595f73cf44f7f843e'))

    const Pagefc902fcaa6944a2f8a4479a7adbc57b8 = lazy(() => import('./../pages/Pagefc902fcaa6944a2f8a4479a7adbc57b8'))
    const Page4b1bd23313b749c398b3b404bb272e88 = lazy(() => import('./../pages/Page4b1bd23313b749c398b3b404bb272e88'))
    const Page1610e50f08934781b3ddb4a41c5f46cf = lazy(() => import('./../pages/Page1610e50f08934781b3ddb4a41c5f46cf'))
    const Page6416ff5d0f7e471ba842dd29b7892c4b = lazy(() => import('./../pages/Page6416ff5d0f7e471ba842dd29b7892c4b'))
    const Page9b4f2dca2a0b4d119835305de86c4a87 = lazy(() => import('./../pages/Page9b4f2dca2a0b4d119835305de86c4a87'))
    const Page27760fa0b89f4c07b79bae2f499af81d = lazy(() => import('./../pages/Page27760fa0b89f4c07b79bae2f499af81d'))
    const Page8b4790c4d28b44a8bedb385ce3dca739 = lazy(() => import('./../pages/Page8b4790c4d28b44a8bedb385ce3dca739'))
    const Page6a1a39fa6f3a4ec6bdf389faf5e26a0e = lazy(() => import('./../pages/Page6a1a39fa6f3a4ec6bdf389faf5e26a0e'))
    const Page96f6970f8fa94e71ba1d476e5f8cb415 = lazy(() => import('./../pages/Page96f6970f8fa94e71ba1d476e5f8cb415'))
    const Paged9650191c87d49eebc0051e89a4dfdd8 = lazy(() => import('./../pages/Paged9650191c87d49eebc0051e89a4dfdd8'))
    const Page28d4d24de6844c19b7175b080cb43af6 = lazy(() => import('./../pages/Page28d4d24de6844c19b7175b080cb43af6'))
    const Page1245134476d349a8bba38ac895c064d8 = lazy(() => import('./../pages/Page1245134476d349a8bba38ac895c064d8'))
    const Pagef779a5439c7c4997991b30721c1d32c3 = lazy(() => import('./../pages/Pagef779a5439c7c4997991b30721c1d32c3'))
    const Page5cc242e135ca40dcaccaa8f0e30ee2f0 = lazy(() => import('./../pages/Page5cc242e135ca40dcaccaa8f0e30ee2f0'))

    const Page7473cdb0d07e417f88414c4235294a7e = lazy(() => import('./../pages/Page7473cdb0d07e417f88414c4235294a7e'))

    const Page22570cc365d64a3281be28763e34fa0d = lazy(() => import('./../pages/Page22570cc365d64a3281be28763e34fa0d'))
    const Page6c3d6e28048545fcb8500a450bcfa654 = lazy(() => import('./../pages/Page6c3d6e28048545fcb8500a450bcfa654'))
    const Page03811119c111440790dcf1ce178c08ea = lazy(() => import('./../pages/Page03811119c111440790dcf1ce178c08ea'))
    const Pagef29ddbd1f2374051b976248c2ba702ee = lazy(() => import('./../pages/Pagef29ddbd1f2374051b976248c2ba702ee'))
    const Page4df01b385fd34c7fa1ef2203cd5b0c2f = lazy(() => import('./../pages/Page4df01b385fd34c7fa1ef2203cd5b0c2f'))
    const Page26f8f86b49614ac5ba0b4aac0f925919 = lazy(() => import('./../pages/Page26f8f86b49614ac5ba0b4aac0f925919'))
    const Page350f6203814641219c96344435eb8cda = lazy(() => import('./../pages/Page350f6203814641219c96344435eb8cda'))
    const Page14145d907a154685919bd31f5dd45e4c = lazy(() => import('./../pages/Page14145d907a154685919bd31f5dd45e4c'))

    const Page596de251057c4354be41b92f7e4a8c51 = lazy(() => import('./../pages/Page596de251057c4354be41b92f7e4a8c51'))
    const Pageb03464b745e74e948e2a6ffc4275bc2e = lazy(() => import('./../pages/Pageb03464b745e74e948e2a6ffc4275bc2e'))
    const Page1aca1501077a4c16b08c7dd3d36a283f = lazy(() => import('./../pages/Page1aca1501077a4c16b08c7dd3d36a283f'))
    const Page81d3e21b24f6465a8e417b428499c65f = lazy(() => import('./../pages/Page81d3e21b24f6465a8e417b428499c65f'))
    const Pageea2e664b61e24e4c93bc0046b140b30a = lazy(() => import('./../pages/Pageea2e664b61e24e4c93bc0046b140b30a'))
    const Page5143b3d3c8bf4d479c1ebd70d1d1d6c1 = lazy(() => import('./../pages/Page5143b3d3c8bf4d479c1ebd70d1d1d6c1'))
    const Page574ab93ecedf4211b8e2c68da113796a = lazy(() => import('./../pages/Page574ab93ecedf4211b8e2c68da113796a'))
    const Pagefcae106e389747a792321336572f3193 = lazy(() => import('./../pages/Pagefcae106e389747a792321336572f3193'))
    const Pageda94bf5df61848f19a549dd8ed199b86 = lazy(() => import('./../pages/Pageda94bf5df61848f19a549dd8ed199b86'))
    const Pagec6949fe6fd504939bd41f0b62676a82f = lazy(() => import('./../pages/Pagec6949fe6fd504939bd41f0b62676a82f'))
    const Page87135485a90b4016893e3fb71d00558c = lazy(() => import('./../pages/Page87135485a90b4016893e3fb71d00558c'))
    const Page494e8b90c0304c17945785f3513d32ad = lazy(() => import('./../pages/Page494e8b90c0304c17945785f3513d32ad'))
    const Page83ff3411c0844cc7a3e8dc17e0c2fdd5 = lazy(() => import('./../pages/Page83ff3411c0844cc7a3e8dc17e0c2fdd5'))
    const Pagea422343c6da24134a2338293fc917929 = lazy(() => import('./../pages/Pagea422343c6da24134a2338293fc917929'))
    const Page9d9d5ad815824685a402f38b174f5a76 = lazy(() => import('./../pages/Page9d9d5ad815824685a402f38b174f5a76'))

    const Pageb954f18c276440e8aeb9bbcdc9e941e4 = lazy(() => import('./../pages/Pageb954f18c276440e8aeb9bbcdc9e941e4'))

    const Page97f8f691c06a4c3b88d9329c71ea89f5 = lazy(() => import('./../pages/Page97f8f691c06a4c3b88d9329c71ea89f5'))
    const Page263fcd66572a41c0b9064d1a4fccf913 = lazy(() => import('./../pages/Page263fcd66572a41c0b9064d1a4fccf913'))
    const Pagef7d738bdb6784d07a71c0a6c1bdc1e56 = lazy(() => import('./../pages/Pagef7d738bdb6784d07a71c0a6c1bdc1e56'))
    const Page9e156c00ee724d1c88470568c29a8e84 = lazy(() => import('./../pages/Page9e156c00ee724d1c88470568c29a8e84'))
    const Page3443c3984252451f8dc851eb8af4bf91 = lazy(() => import('./../pages/Page3443c3984252451f8dc851eb8af4bf91'))
    const Pagef3243197682d4ecfa38d99d257da148c = lazy(() => import('./../pages/Pagef3243197682d4ecfa38d99d257da148c'))
    const Page438c21a124194ef0aae3eac0cfd3f8c5 = lazy(() => import('./../pages/Page438c21a124194ef0aae3eac0cfd3f8c5'))
    const Page2321379779fd48fead9a04067a103be2 = lazy(() => import('./../pages/Page2321379779fd48fead9a04067a103be2'))
    const Pagec98a7a9703eb424ba3980a37969fcf26 = lazy(() => import('./../pages/Pagec98a7a9703eb424ba3980a37969fcf26'))

    const Page6d173dc5a1de4a64b387b63744f8d6fa = lazy(() => import('./../pages/Page6d173dc5a1de4a64b387b63744f8d6fa'))


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
                        {path:"FormSubmitting", element:<Page2b1441beedbe4182a9f61401d2a11079 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pageb7f8744ed5604af0ba74cf4968056065 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page56435840461b4010a8c12f6d7cd0a053 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageaf411b98e2124d6f97c3da42a9ab6313 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagee23501abcb26471b8775d2e623312c80 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page80631d9aa12b4f1385232227102bc762 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagec5f7d8a5e1c549a89ee632e6cf79bf5b darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagee37ba51e9527463f9187bee2e4e49c41 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageb5fa9c7466d24e24960ccebc68731b6c darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page7b7e131a3e3b45c98c13ac240d32858d darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page5f0e1e4b19c14b848e38737a228a718b darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page47db7c6c2e3a4663801365b76ab08b21 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page1e9e019184df47ba832bb6feb3752768 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagef80cb57698e5455595f73cf44f7f843e darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagefc902fcaa6944a2f8a4479a7adbc57b8 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page4b1bd23313b749c398b3b404bb272e88 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page1610e50f08934781b3ddb4a41c5f46cf darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page6416ff5d0f7e471ba842dd29b7892c4b darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page9b4f2dca2a0b4d119835305de86c4a87 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page27760fa0b89f4c07b79bae2f499af81d darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page8b4790c4d28b44a8bedb385ce3dca739 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page6a1a39fa6f3a4ec6bdf389faf5e26a0e darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page96f6970f8fa94e71ba1d476e5f8cb415 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Paged9650191c87d49eebc0051e89a4dfdd8 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page28d4d24de6844c19b7175b080cb43af6 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page1245134476d349a8bba38ac895c064d8 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagef779a5439c7c4997991b30721c1d32c3 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page5cc242e135ca40dcaccaa8f0e30ee2f0 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page7473cdb0d07e417f88414c4235294a7e darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page22570cc365d64a3281be28763e34fa0d darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page6c3d6e28048545fcb8500a450bcfa654 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page03811119c111440790dcf1ce178c08ea darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagef29ddbd1f2374051b976248c2ba702ee darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page4df01b385fd34c7fa1ef2203cd5b0c2f darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page26f8f86b49614ac5ba0b4aac0f925919 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page350f6203814641219c96344435eb8cda darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page14145d907a154685919bd31f5dd45e4c darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page596de251057c4354be41b92f7e4a8c51 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pageb03464b745e74e948e2a6ffc4275bc2e darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page1aca1501077a4c16b08c7dd3d36a283f darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page81d3e21b24f6465a8e417b428499c65f darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageea2e664b61e24e4c93bc0046b140b30a darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page5143b3d3c8bf4d479c1ebd70d1d1d6c1 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page574ab93ecedf4211b8e2c68da113796a darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagefcae106e389747a792321336572f3193 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pageda94bf5df61848f19a549dd8ed199b86 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagec6949fe6fd504939bd41f0b62676a82f darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page87135485a90b4016893e3fb71d00558c darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page494e8b90c0304c17945785f3513d32ad darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page83ff3411c0844cc7a3e8dc17e0c2fdd5 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagea422343c6da24134a2338293fc917929 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page9d9d5ad815824685a402f38b174f5a76 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pageb954f18c276440e8aeb9bbcdc9e941e4 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page97f8f691c06a4c3b88d9329c71ea89f5 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page263fcd66572a41c0b9064d1a4fccf913 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagef7d738bdb6784d07a71c0a6c1bdc1e56 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page9e156c00ee724d1c88470568c29a8e84 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page3443c3984252451f8dc851eb8af4bf91 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagef3243197682d4ecfa38d99d257da148c darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page438c21a124194ef0aae3eac0cfd3f8c5 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page2321379779fd48fead9a04067a103be2 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagec98a7a9703eb424ba3980a37969fcf26 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page6d173dc5a1de4a64b387b63744f8d6fa darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

