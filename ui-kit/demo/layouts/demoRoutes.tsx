
    import React, {lazy, useMemo} from 'react';
    import {createBrowserRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pageb532531b9c3549c5a66c12ca7deb232c = lazy(() => import('./../pages/Pageb532531b9c3549c5a66c12ca7deb232c'))
    const Page533e669c82cf4cae861e787250a853a6 = lazy(() => import('./../pages/Page533e669c82cf4cae861e787250a853a6'))

    const Page314ab067f6134dd196cedcedc9c59635 = lazy(() => import('./../pages/Page314ab067f6134dd196cedcedc9c59635'))
    const Page6540ad21e50f4adba5ca92f69f12efe7 = lazy(() => import('./../pages/Page6540ad21e50f4adba5ca92f69f12efe7'))
    const Page91b73358a5fb4f9a840cb969baffda54 = lazy(() => import('./../pages/Page91b73358a5fb4f9a840cb969baffda54'))
    const Pagef14409d654954303ba2a5a81954c4102 = lazy(() => import('./../pages/Pagef14409d654954303ba2a5a81954c4102'))
    const Page7cff3199f0f34badbbfe9bca0a9ad7db = lazy(() => import('./../pages/Page7cff3199f0f34badbbfe9bca0a9ad7db'))
    const Page1b34e56e121241cdb7c0236e96dfd11e = lazy(() => import('./../pages/Page1b34e56e121241cdb7c0236e96dfd11e'))
    const Page092f66647b67418aaa46ed123fe451d5 = lazy(() => import('./../pages/Page092f66647b67418aaa46ed123fe451d5'))
    const Page084d9d50e7c2471b9660cdcde8caeff9 = lazy(() => import('./../pages/Page084d9d50e7c2471b9660cdcde8caeff9'))
    const Page99fb8232f0164c1e981c0bbecf749e71 = lazy(() => import('./../pages/Page99fb8232f0164c1e981c0bbecf749e71'))

    const Pagea760d71604aa4764948172ac09a55ba5 = lazy(() => import('./../pages/Pagea760d71604aa4764948172ac09a55ba5'))
    const Page347cac20517047d68abb900b1a6860dc = lazy(() => import('./../pages/Page347cac20517047d68abb900b1a6860dc'))

    const Page7d477c27ed894c55869e9b63bada6b03 = lazy(() => import('./../pages/Page7d477c27ed894c55869e9b63bada6b03'))
    const Paged319ed3052b149cb9af1336f64c00517 = lazy(() => import('./../pages/Paged319ed3052b149cb9af1336f64c00517'))
    const Pageb88ae1ac9ebe4660a4910eda779070c9 = lazy(() => import('./../pages/Pageb88ae1ac9ebe4660a4910eda779070c9'))
    const Page5a850838536447e0b8c7dff0002cdfc4 = lazy(() => import('./../pages/Page5a850838536447e0b8c7dff0002cdfc4'))
    const Page72a17c52f9e0496a98626f60ca93c27a = lazy(() => import('./../pages/Page72a17c52f9e0496a98626f60ca93c27a'))
    const Page18cc931f61254ba1b4ce90ea6641d121 = lazy(() => import('./../pages/Page18cc931f61254ba1b4ce90ea6641d121'))
    const Page43811debc17a456b8d92c5a6db8cc5b4 = lazy(() => import('./../pages/Page43811debc17a456b8d92c5a6db8cc5b4'))
    const Page35fab96f16154366adf225b2ede01ac5 = lazy(() => import('./../pages/Page35fab96f16154366adf225b2ede01ac5'))
    const Page3dcaf77a18d946b78f9f82619bb4fbbd = lazy(() => import('./../pages/Page3dcaf77a18d946b78f9f82619bb4fbbd'))
    const Pageff5cd680540e4a7db62692779df870d8 = lazy(() => import('./../pages/Pageff5cd680540e4a7db62692779df870d8'))

    const Pagec8bddd07648040ba9e4a8d94439c65f3 = lazy(() => import('./../pages/Pagec8bddd07648040ba9e4a8d94439c65f3'))
    const Pagea6eb798ab5914ef2b60e0a2a9cab0330 = lazy(() => import('./../pages/Pagea6eb798ab5914ef2b60e0a2a9cab0330'))
    const Page46140b211b0b4860aa48a1a551e728b4 = lazy(() => import('./../pages/Page46140b211b0b4860aa48a1a551e728b4'))
    const Pagedab3edcd256043be82617bc541f31abf = lazy(() => import('./../pages/Pagedab3edcd256043be82617bc541f31abf'))
    const Pagef92375537449438c9f07eb8902bdba35 = lazy(() => import('./../pages/Pagef92375537449438c9f07eb8902bdba35'))
    const Pagef45915cefad245a0bc8c39100c3df0c8 = lazy(() => import('./../pages/Pagef45915cefad245a0bc8c39100c3df0c8'))
    const Pageafb44d75d790470a8f51dcd07851f23d = lazy(() => import('./../pages/Pageafb44d75d790470a8f51dcd07851f23d'))

    const Page90451a500f3743fdb76572d717911bdf = lazy(() => import('./../pages/Page90451a500f3743fdb76572d717911bdf'))
    const Page0f5b89476f534942be176f441fddb131 = lazy(() => import('./../pages/Page0f5b89476f534942be176f441fddb131'))
    const Page8fde0059beff4a8b8d5cc25abb812d8f = lazy(() => import('./../pages/Page8fde0059beff4a8b8d5cc25abb812d8f'))
    const Pagec797371ce3c947a5a639a83e50a85109 = lazy(() => import('./../pages/Pagec797371ce3c947a5a639a83e50a85109'))
    const Page341921a693654135a2e6fbb77d7c04b5 = lazy(() => import('./../pages/Page341921a693654135a2e6fbb77d7c04b5'))
    const Page9808042943d74d32ac70b58a8574c503 = lazy(() => import('./../pages/Page9808042943d74d32ac70b58a8574c503'))
    const Page93d6debf938449889cec47136738d1a6 = lazy(() => import('./../pages/Page93d6debf938449889cec47136738d1a6'))
    const Page02f8c437eea144daa1e2c74e53a668d9 = lazy(() => import('./../pages/Page02f8c437eea144daa1e2c74e53a668d9'))
    const Pagebff7c1625cb04e91826d2572a23c86e5 = lazy(() => import('./../pages/Pagebff7c1625cb04e91826d2572a23c86e5'))
    const Paged8cc238cca3e4066832aa184aaa42ee7 = lazy(() => import('./../pages/Paged8cc238cca3e4066832aa184aaa42ee7'))
    const Page32437792e8994f4f9c720676af092445 = lazy(() => import('./../pages/Page32437792e8994f4f9c720676af092445'))
    const Pagea41c698ed78c4eb8aa57936a02758788 = lazy(() => import('./../pages/Pagea41c698ed78c4eb8aa57936a02758788'))

    const Page77a978930e8b4fdbb0ff6425866a6f6c = lazy(() => import('./../pages/Page77a978930e8b4fdbb0ff6425866a6f6c'))

    const Page9e697b84d19c4c028b1e4a8813a9e06d = lazy(() => import('./../pages/Page9e697b84d19c4c028b1e4a8813a9e06d'))
    const Page5d8d67c9adcd4acf81018178e3b69b6c = lazy(() => import('./../pages/Page5d8d67c9adcd4acf81018178e3b69b6c'))
    const Page4e7897565dfa4a5c81fddf0fe29da0ea = lazy(() => import('./../pages/Page4e7897565dfa4a5c81fddf0fe29da0ea'))
    const Page627c62bf0b54432cb7e8c0c6bed7b7cd = lazy(() => import('./../pages/Page627c62bf0b54432cb7e8c0c6bed7b7cd'))
    const Pagede470a44697c40a9ad9d2021a0460169 = lazy(() => import('./../pages/Pagede470a44697c40a9ad9d2021a0460169'))
    const Page37bb01f1092949c891597fe7bfcd69da = lazy(() => import('./../pages/Page37bb01f1092949c891597fe7bfcd69da'))
    const Page4239b7a1ff9e4296ba223a990ee58d91 = lazy(() => import('./../pages/Page4239b7a1ff9e4296ba223a990ee58d91'))
    const Pagec5b3cb9f7abd4eb2ab3273e9371f2dc5 = lazy(() => import('./../pages/Pagec5b3cb9f7abd4eb2ab3273e9371f2dc5'))
    const Page9e098dd3c4474357b3e2027d2fc56839 = lazy(() => import('./../pages/Page9e098dd3c4474357b3e2027d2fc56839'))

    const Pagecc5ea7f97e1a443a9c733a8492430fd5 = lazy(() => import('./../pages/Pagecc5ea7f97e1a443a9c733a8492430fd5'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createBrowserRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pageb532531b9c3549c5a66c12ca7deb232c darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page533e669c82cf4cae861e787250a853a6 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page314ab067f6134dd196cedcedc9c59635 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page6540ad21e50f4adba5ca92f69f12efe7 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page91b73358a5fb4f9a840cb969baffda54 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagef14409d654954303ba2a5a81954c4102 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page7cff3199f0f34badbbfe9bca0a9ad7db darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page1b34e56e121241cdb7c0236e96dfd11e darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page092f66647b67418aaa46ed123fe451d5 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page084d9d50e7c2471b9660cdcde8caeff9 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page99fb8232f0164c1e981c0bbecf749e71 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagea760d71604aa4764948172ac09a55ba5 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page347cac20517047d68abb900b1a6860dc darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page7d477c27ed894c55869e9b63bada6b03 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Paged319ed3052b149cb9af1336f64c00517 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageb88ae1ac9ebe4660a4910eda779070c9 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page5a850838536447e0b8c7dff0002cdfc4 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page72a17c52f9e0496a98626f60ca93c27a darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page18cc931f61254ba1b4ce90ea6641d121 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page43811debc17a456b8d92c5a6db8cc5b4 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page35fab96f16154366adf225b2ede01ac5 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page3dcaf77a18d946b78f9f82619bb4fbbd darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pageff5cd680540e4a7db62692779df870d8 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagec8bddd07648040ba9e4a8d94439c65f3 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagea6eb798ab5914ef2b60e0a2a9cab0330 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page46140b211b0b4860aa48a1a551e728b4 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagedab3edcd256043be82617bc541f31abf darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pagef92375537449438c9f07eb8902bdba35 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagef45915cefad245a0bc8c39100c3df0c8 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pageafb44d75d790470a8f51dcd07851f23d darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page90451a500f3743fdb76572d717911bdf darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page0f5b89476f534942be176f441fddb131 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page8fde0059beff4a8b8d5cc25abb812d8f darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagec797371ce3c947a5a639a83e50a85109 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page341921a693654135a2e6fbb77d7c04b5 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page9808042943d74d32ac70b58a8574c503 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page93d6debf938449889cec47136738d1a6 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page02f8c437eea144daa1e2c74e53a668d9 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagebff7c1625cb04e91826d2572a23c86e5 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Paged8cc238cca3e4066832aa184aaa42ee7 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page32437792e8994f4f9c720676af092445 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagea41c698ed78c4eb8aa57936a02758788 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page77a978930e8b4fdbb0ff6425866a6f6c darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page9e697b84d19c4c028b1e4a8813a9e06d darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page5d8d67c9adcd4acf81018178e3b69b6c darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page4e7897565dfa4a5c81fddf0fe29da0ea darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page627c62bf0b54432cb7e8c0c6bed7b7cd darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagede470a44697c40a9ad9d2021a0460169 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page37bb01f1092949c891597fe7bfcd69da darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page4239b7a1ff9e4296ba223a990ee58d91 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagec5b3cb9f7abd4eb2ab3273e9371f2dc5 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page9e098dd3c4474357b3e2027d2fc56839 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagecc5ea7f97e1a443a9c733a8492430fd5 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

