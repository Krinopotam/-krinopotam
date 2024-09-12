
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page94191ca0a43843dea2182e1469008b88 = lazy(() => import('./../pages/Page94191ca0a43843dea2182e1469008b88'))
    const Page0a9752c8e982470f9fad4cbc16ad4d36 = lazy(() => import('./../pages/Page0a9752c8e982470f9fad4cbc16ad4d36'))

    const Page48e93051ae9a4b5c85c4e838e946ab9f = lazy(() => import('./../pages/Page48e93051ae9a4b5c85c4e838e946ab9f'))
    const Pageaf494e1d8af04c7cb1dc32fe86e65024 = lazy(() => import('./../pages/Pageaf494e1d8af04c7cb1dc32fe86e65024'))

    const Page9f5a95ece005485f93115a9a8addd174 = lazy(() => import('./../pages/Page9f5a95ece005485f93115a9a8addd174'))
    const Page3420f53385cf44fa9f51d3044e3e955d = lazy(() => import('./../pages/Page3420f53385cf44fa9f51d3044e3e955d'))
    const Pageff70cf7da01948149b6c8753ce1764a6 = lazy(() => import('./../pages/Pageff70cf7da01948149b6c8753ce1764a6'))
    const Pageab94d2b4a4854e349f59b935832b8dbc = lazy(() => import('./../pages/Pageab94d2b4a4854e349f59b935832b8dbc'))
    const Pagef43381dc36604b7197fad803ff5f82ed = lazy(() => import('./../pages/Pagef43381dc36604b7197fad803ff5f82ed'))
    const Page98e2895025fc4d1cb98fc67a437efdcd = lazy(() => import('./../pages/Page98e2895025fc4d1cb98fc67a437efdcd'))
    const Pagec436c5bf2887448dbc56ecac1c847285 = lazy(() => import('./../pages/Pagec436c5bf2887448dbc56ecac1c847285'))
    const Page60fc60826bbe466bb288231d4e98dbec = lazy(() => import('./../pages/Page60fc60826bbe466bb288231d4e98dbec'))
    const Page7a342dac098043fda338789481d4ded5 = lazy(() => import('./../pages/Page7a342dac098043fda338789481d4ded5'))
    const Page437aa8579243433986aa5a5e9fd990bd = lazy(() => import('./../pages/Page437aa8579243433986aa5a5e9fd990bd'))

    const Page0367c20960094010827773e5db579fe5 = lazy(() => import('./../pages/Page0367c20960094010827773e5db579fe5'))
    const Page08677e136c5e406d8f773d099d8dda59 = lazy(() => import('./../pages/Page08677e136c5e406d8f773d099d8dda59'))
    const Pagee1f478b83456468fbf70636330f12b24 = lazy(() => import('./../pages/Pagee1f478b83456468fbf70636330f12b24'))

    const Page4c8b6e89f1844cf88ee657b8441eb038 = lazy(() => import('./../pages/Page4c8b6e89f1844cf88ee657b8441eb038'))
    const Page86dfd07064264208a4125f79f12978b9 = lazy(() => import('./../pages/Page86dfd07064264208a4125f79f12978b9'))
    const Page0aa87dc6c1a94dc0aae8a7554ed5befe = lazy(() => import('./../pages/Page0aa87dc6c1a94dc0aae8a7554ed5befe'))
    const Page626ef12999584a21984c2038b3199a0f = lazy(() => import('./../pages/Page626ef12999584a21984c2038b3199a0f'))
    const Page27da33a0773641f3951a4828306c45fc = lazy(() => import('./../pages/Page27da33a0773641f3951a4828306c45fc'))
    const Page586061b9df97447ca1c7efb990fe190d = lazy(() => import('./../pages/Page586061b9df97447ca1c7efb990fe190d'))
    const Page052121c1fc8d4ab7a2b655dc33b8709c = lazy(() => import('./../pages/Page052121c1fc8d4ab7a2b655dc33b8709c'))
    const Paged4070017ba734e729d172773495287bb = lazy(() => import('./../pages/Paged4070017ba734e729d172773495287bb'))
    const Page0bc77cab6c434a3eb80e3b2e9f839a09 = lazy(() => import('./../pages/Page0bc77cab6c434a3eb80e3b2e9f839a09'))
    const Page07fee179f3fd439caf18202e39d98453 = lazy(() => import('./../pages/Page07fee179f3fd439caf18202e39d98453'))
    const Page818e35b0d96941f2be719405de21fc4d = lazy(() => import('./../pages/Page818e35b0d96941f2be719405de21fc4d'))
    const Page6c07a5c621b34dfca59e446e80bd4dd2 = lazy(() => import('./../pages/Page6c07a5c621b34dfca59e446e80bd4dd2'))
    const Page31534f6209d74dc0b6fcad8e574c0d84 = lazy(() => import('./../pages/Page31534f6209d74dc0b6fcad8e574c0d84'))
    const Pageea57f8652b3f4ddeb10d979c376803a9 = lazy(() => import('./../pages/Pageea57f8652b3f4ddeb10d979c376803a9'))

    const Pagebbf821f4b6b44a70a00dae87aa1ce72a = lazy(() => import('./../pages/Pagebbf821f4b6b44a70a00dae87aa1ce72a'))

    const Paged4553f509d9f49b0b7d1079bd28b0677 = lazy(() => import('./../pages/Paged4553f509d9f49b0b7d1079bd28b0677'))
    const Pageff35cacf2d8a442ea40ac4b6e02495ae = lazy(() => import('./../pages/Pageff35cacf2d8a442ea40ac4b6e02495ae'))
    const Page556fe7da0a9e4c28b5474cc9216ce4e6 = lazy(() => import('./../pages/Page556fe7da0a9e4c28b5474cc9216ce4e6'))
    const Page9362681459254c8f81c52f4666eb25a0 = lazy(() => import('./../pages/Page9362681459254c8f81c52f4666eb25a0'))
    const Pagea04e3fdb397a4df99ae14cac5a18ae52 = lazy(() => import('./../pages/Pagea04e3fdb397a4df99ae14cac5a18ae52'))
    const Page1b0cb072d5104b31984d6f7f7bd03f75 = lazy(() => import('./../pages/Page1b0cb072d5104b31984d6f7f7bd03f75'))
    const Page22646caf77584b748bcd2a87d6144506 = lazy(() => import('./../pages/Page22646caf77584b748bcd2a87d6144506'))
    const Page3c45a9e1ae404b5b90bfb1b96d688efb = lazy(() => import('./../pages/Page3c45a9e1ae404b5b90bfb1b96d688efb'))

    const Pagea3923b7e46a3470a81a73c03aba418c8 = lazy(() => import('./../pages/Pagea3923b7e46a3470a81a73c03aba418c8'))
    const Page6746257b981249c597de6fee3308d55c = lazy(() => import('./../pages/Page6746257b981249c597de6fee3308d55c'))
    const Page7608c96a2dd4429788a2f45b2a9aaa2f = lazy(() => import('./../pages/Page7608c96a2dd4429788a2f45b2a9aaa2f'))
    const Page0a669a76b07c42448b94b21290828a10 = lazy(() => import('./../pages/Page0a669a76b07c42448b94b21290828a10'))
    const Pagedce7d27ae2c34c1f96b50b2909e57b0b = lazy(() => import('./../pages/Pagedce7d27ae2c34c1f96b50b2909e57b0b'))
    const Page9a1253d8c5fd4905ac6188d6ba452d2d = lazy(() => import('./../pages/Page9a1253d8c5fd4905ac6188d6ba452d2d'))
    const Page2a894a1ceb6d4a66b82084d8746aa541 = lazy(() => import('./../pages/Page2a894a1ceb6d4a66b82084d8746aa541'))
    const Pageaf6597e88f84405bbaa696f2b60dcf08 = lazy(() => import('./../pages/Pageaf6597e88f84405bbaa696f2b60dcf08'))
    const Page99593e8585ad45a09df23a4dce2e18d8 = lazy(() => import('./../pages/Page99593e8585ad45a09df23a4dce2e18d8'))
    const Pagea58384b5f92342abb6127385295e68fa = lazy(() => import('./../pages/Pagea58384b5f92342abb6127385295e68fa'))
    const Page4963cf6e069b4c6ca761498513479f78 = lazy(() => import('./../pages/Page4963cf6e069b4c6ca761498513479f78'))
    const Page32a83b7acb3348bd922f1e4aa307135a = lazy(() => import('./../pages/Page32a83b7acb3348bd922f1e4aa307135a'))
    const Pagef643aa6568b14177b1e8acf088ea6560 = lazy(() => import('./../pages/Pagef643aa6568b14177b1e8acf088ea6560'))
    const Pagebf44336677ce4aae9cb5ec7059560407 = lazy(() => import('./../pages/Pagebf44336677ce4aae9cb5ec7059560407'))
    const Page4554683f551c4cf9a1d08df6737e3b89 = lazy(() => import('./../pages/Page4554683f551c4cf9a1d08df6737e3b89'))

    const Page5f9487aaaef34a448ced1b4f828ef960 = lazy(() => import('./../pages/Page5f9487aaaef34a448ced1b4f828ef960'))

    const Page4dcdd1d0650d43bfa120ac03355cc020 = lazy(() => import('./../pages/Page4dcdd1d0650d43bfa120ac03355cc020'))
    const Page4fa0ab9045c941f7862ab3b83806d4dc = lazy(() => import('./../pages/Page4fa0ab9045c941f7862ab3b83806d4dc'))
    const Pagef65876c2da0a4d3d8945ab44da9f7fe6 = lazy(() => import('./../pages/Pagef65876c2da0a4d3d8945ab44da9f7fe6'))
    const Page04481d8cda6d449eb0a95afda12aa964 = lazy(() => import('./../pages/Page04481d8cda6d449eb0a95afda12aa964'))
    const Page1e09b50624ab4ae791e88b2a71c3de87 = lazy(() => import('./../pages/Page1e09b50624ab4ae791e88b2a71c3de87'))
    const Page8f4cc6d3ebb84f48a7cbdfd1696c46e1 = lazy(() => import('./../pages/Page8f4cc6d3ebb84f48a7cbdfd1696c46e1'))
    const Pageeeb5859e64894e8aabe9a0fee728e556 = lazy(() => import('./../pages/Pageeeb5859e64894e8aabe9a0fee728e556'))
    const Page8262f9c41efe4eb8bb2c2f751fbab084 = lazy(() => import('./../pages/Page8262f9c41efe4eb8bb2c2f751fbab084'))
    const Page82c95d632b7b4e87b4e3ca42149901b2 = lazy(() => import('./../pages/Page82c95d632b7b4e87b4e3ca42149901b2'))

    const Page7529aebe401b4be79025dfcbbe648ff5 = lazy(() => import('./../pages/Page7529aebe401b4be79025dfcbbe648ff5'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page94191ca0a43843dea2182e1469008b88 darkMode={props.darkMode} />},
                        {path:"Test2", element:<Page0a9752c8e982470f9fad4cbc16ad4d36 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page48e93051ae9a4b5c85c4e838e946ab9f darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pageaf494e1d8af04c7cb1dc32fe86e65024 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page9f5a95ece005485f93115a9a8addd174 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page3420f53385cf44fa9f51d3044e3e955d darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageff70cf7da01948149b6c8753ce1764a6 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pageab94d2b4a4854e349f59b935832b8dbc darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagef43381dc36604b7197fad803ff5f82ed darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page98e2895025fc4d1cb98fc67a437efdcd darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagec436c5bf2887448dbc56ecac1c847285 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page60fc60826bbe466bb288231d4e98dbec darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page7a342dac098043fda338789481d4ded5 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page437aa8579243433986aa5a5e9fd990bd darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page0367c20960094010827773e5db579fe5 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page08677e136c5e406d8f773d099d8dda59 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagee1f478b83456468fbf70636330f12b24 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page4c8b6e89f1844cf88ee657b8441eb038 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page86dfd07064264208a4125f79f12978b9 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page0aa87dc6c1a94dc0aae8a7554ed5befe darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page626ef12999584a21984c2038b3199a0f darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page27da33a0773641f3951a4828306c45fc darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page586061b9df97447ca1c7efb990fe190d darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page052121c1fc8d4ab7a2b655dc33b8709c darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Paged4070017ba734e729d172773495287bb darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page0bc77cab6c434a3eb80e3b2e9f839a09 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page07fee179f3fd439caf18202e39d98453 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page818e35b0d96941f2be719405de21fc4d darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page6c07a5c621b34dfca59e446e80bd4dd2 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page31534f6209d74dc0b6fcad8e574c0d84 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pageea57f8652b3f4ddeb10d979c376803a9 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagebbf821f4b6b44a70a00dae87aa1ce72a darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Paged4553f509d9f49b0b7d1079bd28b0677 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pageff35cacf2d8a442ea40ac4b6e02495ae darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page556fe7da0a9e4c28b5474cc9216ce4e6 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page9362681459254c8f81c52f4666eb25a0 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pagea04e3fdb397a4df99ae14cac5a18ae52 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page1b0cb072d5104b31984d6f7f7bd03f75 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page22646caf77584b748bcd2a87d6144506 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page3c45a9e1ae404b5b90bfb1b96d688efb darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagea3923b7e46a3470a81a73c03aba418c8 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page6746257b981249c597de6fee3308d55c darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page7608c96a2dd4429788a2f45b2a9aaa2f darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page0a669a76b07c42448b94b21290828a10 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagedce7d27ae2c34c1f96b50b2909e57b0b darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page9a1253d8c5fd4905ac6188d6ba452d2d darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page2a894a1ceb6d4a66b82084d8746aa541 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pageaf6597e88f84405bbaa696f2b60dcf08 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page99593e8585ad45a09df23a4dce2e18d8 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagea58384b5f92342abb6127385295e68fa darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page4963cf6e069b4c6ca761498513479f78 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page32a83b7acb3348bd922f1e4aa307135a darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagef643aa6568b14177b1e8acf088ea6560 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagebf44336677ce4aae9cb5ec7059560407 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page4554683f551c4cf9a1d08df6737e3b89 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page5f9487aaaef34a448ced1b4f828ef960 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page4dcdd1d0650d43bfa120ac03355cc020 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page4fa0ab9045c941f7862ab3b83806d4dc darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagef65876c2da0a4d3d8945ab44da9f7fe6 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page04481d8cda6d449eb0a95afda12aa964 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page1e09b50624ab4ae791e88b2a71c3de87 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page8f4cc6d3ebb84f48a7cbdfd1696c46e1 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pageeeb5859e64894e8aabe9a0fee728e556 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page8262f9c41efe4eb8bb2c2f751fbab084 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page82c95d632b7b4e87b4e3ca42149901b2 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page7529aebe401b4be79025dfcbbe648ff5 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

