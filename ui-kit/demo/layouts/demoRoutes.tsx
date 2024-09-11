
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1578a78b7efd4157b8758e48c5c1c1f3 = lazy(() => import('./../pages/Page1578a78b7efd4157b8758e48c5c1c1f3'))
    const Pagea1caadc15b43467388d35c083214b522 = lazy(() => import('./../pages/Pagea1caadc15b43467388d35c083214b522'))

    const Page3f65ce34c7d04ed4a689bc91fd48510c = lazy(() => import('./../pages/Page3f65ce34c7d04ed4a689bc91fd48510c'))
    const Page7f901aa8b1604019b85fdc8b5a5a0a94 = lazy(() => import('./../pages/Page7f901aa8b1604019b85fdc8b5a5a0a94'))

    const Page6117c543458c4ded81873cf7edae6114 = lazy(() => import('./../pages/Page6117c543458c4ded81873cf7edae6114'))
    const Page697a116205bf4c41a0782cb4f8bf93e4 = lazy(() => import('./../pages/Page697a116205bf4c41a0782cb4f8bf93e4'))
    const Page80711188b8a14e00ba0cef91e788a36b = lazy(() => import('./../pages/Page80711188b8a14e00ba0cef91e788a36b'))
    const Pagea6cea95eff7f4ba9a4950038455cf058 = lazy(() => import('./../pages/Pagea6cea95eff7f4ba9a4950038455cf058'))
    const Pageb19c27e766b94ed7b4ffcbb11d9ad630 = lazy(() => import('./../pages/Pageb19c27e766b94ed7b4ffcbb11d9ad630'))
    const Page8b6f9078b929413dbbee2d9089bab104 = lazy(() => import('./../pages/Page8b6f9078b929413dbbee2d9089bab104'))
    const Page1222f4609e1942589affe3e58b114d79 = lazy(() => import('./../pages/Page1222f4609e1942589affe3e58b114d79'))
    const Page776426e47c434e0a95f75f569daff1fd = lazy(() => import('./../pages/Page776426e47c434e0a95f75f569daff1fd'))
    const Pagea09658326856402c92f05983a5e268c2 = lazy(() => import('./../pages/Pagea09658326856402c92f05983a5e268c2'))
    const Pagee23e349206954da2846c709435927f19 = lazy(() => import('./../pages/Pagee23e349206954da2846c709435927f19'))

    const Pagedb363ce832e445b38c465cdd1b4b5852 = lazy(() => import('./../pages/Pagedb363ce832e445b38c465cdd1b4b5852'))
    const Page2b31ed8d645a45e1ab9da63fbf416f05 = lazy(() => import('./../pages/Page2b31ed8d645a45e1ab9da63fbf416f05'))
    const Page3fa4db85ef454b9aa05275b21b6a6642 = lazy(() => import('./../pages/Page3fa4db85ef454b9aa05275b21b6a6642'))

    const Pageaa0c03dfa0ab41db9c8c5f85c661c8c6 = lazy(() => import('./../pages/Pageaa0c03dfa0ab41db9c8c5f85c661c8c6'))
    const Pagee2414bafde18408486b4b576f494ff75 = lazy(() => import('./../pages/Pagee2414bafde18408486b4b576f494ff75'))
    const Page53f31b7710544c1586f528ee5d52cc37 = lazy(() => import('./../pages/Page53f31b7710544c1586f528ee5d52cc37'))
    const Page529f985af59141f18fbc24022febccf9 = lazy(() => import('./../pages/Page529f985af59141f18fbc24022febccf9'))
    const Paged0e39208da3a41d2896ab8e11ff193ec = lazy(() => import('./../pages/Paged0e39208da3a41d2896ab8e11ff193ec'))
    const Page7b9ce512d5684b8f9616959277c74f1b = lazy(() => import('./../pages/Page7b9ce512d5684b8f9616959277c74f1b'))
    const Page9ff7a11a0a8343539efd213eda23e9f5 = lazy(() => import('./../pages/Page9ff7a11a0a8343539efd213eda23e9f5'))
    const Page57049c7f42e040b18e2438320685e37a = lazy(() => import('./../pages/Page57049c7f42e040b18e2438320685e37a'))
    const Paged0c7caac6dd2449c947d435a3c213f03 = lazy(() => import('./../pages/Paged0c7caac6dd2449c947d435a3c213f03'))
    const Pageb1db4a524be04b01bd6d4f004e8a76a3 = lazy(() => import('./../pages/Pageb1db4a524be04b01bd6d4f004e8a76a3'))
    const Pagef39377c51eca4156800b1b0540529866 = lazy(() => import('./../pages/Pagef39377c51eca4156800b1b0540529866'))
    const Page1ce0bb84d3b14089b1975dbc5475eb3f = lazy(() => import('./../pages/Page1ce0bb84d3b14089b1975dbc5475eb3f'))
    const Page34346211eac3450b9e71e04436877678 = lazy(() => import('./../pages/Page34346211eac3450b9e71e04436877678'))
    const Pageecf7f7d0767d4523aec840f2c2c25e27 = lazy(() => import('./../pages/Pageecf7f7d0767d4523aec840f2c2c25e27'))

    const Paged2ae62afead04e979555f434642cc8db = lazy(() => import('./../pages/Paged2ae62afead04e979555f434642cc8db'))

    const Pageeddc7cf9a48a469487ac0925308f41b6 = lazy(() => import('./../pages/Pageeddc7cf9a48a469487ac0925308f41b6'))
    const Pagea7b2ef50cf51424cb8a71176f79f76bf = lazy(() => import('./../pages/Pagea7b2ef50cf51424cb8a71176f79f76bf'))
    const Page01080d229b4e4759a999ce8312be2901 = lazy(() => import('./../pages/Page01080d229b4e4759a999ce8312be2901'))
    const Page93cba8c8ccfb4d11b98d9570c45a2ed2 = lazy(() => import('./../pages/Page93cba8c8ccfb4d11b98d9570c45a2ed2'))
    const Page638220c8f82346e0a659b270a5704881 = lazy(() => import('./../pages/Page638220c8f82346e0a659b270a5704881'))
    const Page579347b9d4b8408699c8e994a83f35c2 = lazy(() => import('./../pages/Page579347b9d4b8408699c8e994a83f35c2'))
    const Pagedd266d1addd641c3a275bec808853958 = lazy(() => import('./../pages/Pagedd266d1addd641c3a275bec808853958'))
    const Pageff835880e1e6459aaabc8e253cf248f5 = lazy(() => import('./../pages/Pageff835880e1e6459aaabc8e253cf248f5'))

    const Pagefa155da613d34e008805e0549fb18958 = lazy(() => import('./../pages/Pagefa155da613d34e008805e0549fb18958'))
    const Page26eb569a2002463fa21237dd410a172d = lazy(() => import('./../pages/Page26eb569a2002463fa21237dd410a172d'))
    const Pagefe1d224bc5954a2db13acceca7bdc963 = lazy(() => import('./../pages/Pagefe1d224bc5954a2db13acceca7bdc963'))
    const Pagea671aec211684ffda5f999b1656b64ec = lazy(() => import('./../pages/Pagea671aec211684ffda5f999b1656b64ec'))
    const Page8d0e1fbf407348cc81f37bcc50071d4a = lazy(() => import('./../pages/Page8d0e1fbf407348cc81f37bcc50071d4a'))
    const Pageef740d82ca8345f08435e711dafb4330 = lazy(() => import('./../pages/Pageef740d82ca8345f08435e711dafb4330'))
    const Pagec0646c6295404a46a129067d24b230af = lazy(() => import('./../pages/Pagec0646c6295404a46a129067d24b230af'))
    const Pageda43d8c284f44a949d9a57308465d963 = lazy(() => import('./../pages/Pageda43d8c284f44a949d9a57308465d963'))
    const Page91394a02abde43ddbe6872c8173de9ce = lazy(() => import('./../pages/Page91394a02abde43ddbe6872c8173de9ce'))
    const Pageb5e43a9780dc41b9b311f836973272f2 = lazy(() => import('./../pages/Pageb5e43a9780dc41b9b311f836973272f2'))
    const Pageb568acd4b2fc4f408e02a40aa77e8b32 = lazy(() => import('./../pages/Pageb568acd4b2fc4f408e02a40aa77e8b32'))
    const Page9aafc64100db464d8fb6d920d8a28484 = lazy(() => import('./../pages/Page9aafc64100db464d8fb6d920d8a28484'))
    const Pagec1e3f2ed24df4d4d817e6b18fca6cb11 = lazy(() => import('./../pages/Pagec1e3f2ed24df4d4d817e6b18fca6cb11'))
    const Pagee4448640e0f44badb28d78d43d02455a = lazy(() => import('./../pages/Pagee4448640e0f44badb28d78d43d02455a'))
    const Pagef95061a3c83f4f4c88de7dc3b71c0fba = lazy(() => import('./../pages/Pagef95061a3c83f4f4c88de7dc3b71c0fba'))

    const Page5037af4dfc2c4312a5a0cb0594784910 = lazy(() => import('./../pages/Page5037af4dfc2c4312a5a0cb0594784910'))

    const Page4dd623c256dd4a5c946ff77685d5f5e6 = lazy(() => import('./../pages/Page4dd623c256dd4a5c946ff77685d5f5e6'))
    const Page17df823fb289429bab4cc480a8bb5f4a = lazy(() => import('./../pages/Page17df823fb289429bab4cc480a8bb5f4a'))
    const Page2f9f067d7e8842c3a92b85bff2f2f0e6 = lazy(() => import('./../pages/Page2f9f067d7e8842c3a92b85bff2f2f0e6'))
    const Page274676f195e743638d0e25fadff0eb68 = lazy(() => import('./../pages/Page274676f195e743638d0e25fadff0eb68'))
    const Page97556c920d5c4cd182c45dde56a4adff = lazy(() => import('./../pages/Page97556c920d5c4cd182c45dde56a4adff'))
    const Page8a81ffda5c2148699b98dae01125fa1e = lazy(() => import('./../pages/Page8a81ffda5c2148699b98dae01125fa1e'))
    const Pagef973aa83dcdc4319858845ca3461bbca = lazy(() => import('./../pages/Pagef973aa83dcdc4319858845ca3461bbca'))
    const Page857b5295d1aa46389025abb4b86e19ea = lazy(() => import('./../pages/Page857b5295d1aa46389025abb4b86e19ea'))
    const Page5e6b319055264c2c83b35a6909891e6a = lazy(() => import('./../pages/Page5e6b319055264c2c83b35a6909891e6a'))

    const Page05009b0eedc54ed981b9d0383f00742c = lazy(() => import('./../pages/Page05009b0eedc54ed981b9d0383f00742c'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page1578a78b7efd4157b8758e48c5c1c1f3 darkMode={props.darkMode} />},
                        {path:"Test2", element:<Pagea1caadc15b43467388d35c083214b522 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page3f65ce34c7d04ed4a689bc91fd48510c darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page7f901aa8b1604019b85fdc8b5a5a0a94 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page6117c543458c4ded81873cf7edae6114 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page697a116205bf4c41a0782cb4f8bf93e4 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page80711188b8a14e00ba0cef91e788a36b darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagea6cea95eff7f4ba9a4950038455cf058 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageb19c27e766b94ed7b4ffcbb11d9ad630 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page8b6f9078b929413dbbee2d9089bab104 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page1222f4609e1942589affe3e58b114d79 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page776426e47c434e0a95f75f569daff1fd darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagea09658326856402c92f05983a5e268c2 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagee23e349206954da2846c709435927f19 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagedb363ce832e445b38c465cdd1b4b5852 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page2b31ed8d645a45e1ab9da63fbf416f05 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page3fa4db85ef454b9aa05275b21b6a6642 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pageaa0c03dfa0ab41db9c8c5f85c661c8c6 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagee2414bafde18408486b4b576f494ff75 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page53f31b7710544c1586f528ee5d52cc37 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page529f985af59141f18fbc24022febccf9 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Paged0e39208da3a41d2896ab8e11ff193ec darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page7b9ce512d5684b8f9616959277c74f1b darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page9ff7a11a0a8343539efd213eda23e9f5 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page57049c7f42e040b18e2438320685e37a darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Paged0c7caac6dd2449c947d435a3c213f03 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pageb1db4a524be04b01bd6d4f004e8a76a3 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagef39377c51eca4156800b1b0540529866 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page1ce0bb84d3b14089b1975dbc5475eb3f darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page34346211eac3450b9e71e04436877678 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pageecf7f7d0767d4523aec840f2c2c25e27 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Paged2ae62afead04e979555f434642cc8db darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageeddc7cf9a48a469487ac0925308f41b6 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagea7b2ef50cf51424cb8a71176f79f76bf darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page01080d229b4e4759a999ce8312be2901 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page93cba8c8ccfb4d11b98d9570c45a2ed2 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page638220c8f82346e0a659b270a5704881 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page579347b9d4b8408699c8e994a83f35c2 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagedd266d1addd641c3a275bec808853958 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pageff835880e1e6459aaabc8e253cf248f5 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagefa155da613d34e008805e0549fb18958 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page26eb569a2002463fa21237dd410a172d darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pagefe1d224bc5954a2db13acceca7bdc963 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagea671aec211684ffda5f999b1656b64ec darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page8d0e1fbf407348cc81f37bcc50071d4a darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pageef740d82ca8345f08435e711dafb4330 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pagec0646c6295404a46a129067d24b230af darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pageda43d8c284f44a949d9a57308465d963 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page91394a02abde43ddbe6872c8173de9ce darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb5e43a9780dc41b9b311f836973272f2 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pageb568acd4b2fc4f408e02a40aa77e8b32 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page9aafc64100db464d8fb6d920d8a28484 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagec1e3f2ed24df4d4d817e6b18fca6cb11 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagee4448640e0f44badb28d78d43d02455a darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagef95061a3c83f4f4c88de7dc3b71c0fba darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page5037af4dfc2c4312a5a0cb0594784910 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page4dd623c256dd4a5c946ff77685d5f5e6 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page17df823fb289429bab4cc480a8bb5f4a darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page2f9f067d7e8842c3a92b85bff2f2f0e6 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page274676f195e743638d0e25fadff0eb68 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page97556c920d5c4cd182c45dde56a4adff darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page8a81ffda5c2148699b98dae01125fa1e darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagef973aa83dcdc4319858845ca3461bbca darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page857b5295d1aa46389025abb4b86e19ea darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page5e6b319055264c2c83b35a6909891e6a darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page05009b0eedc54ed981b9d0383f00742c darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

