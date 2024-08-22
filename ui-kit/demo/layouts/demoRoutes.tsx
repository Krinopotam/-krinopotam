
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page086603debb0e42d9936900ba6752faaf = lazy(() => import('./../pages/Page086603debb0e42d9936900ba6752faaf'))
    const Page12e623f3d31440a8914c6925b4d105d1 = lazy(() => import('./../pages/Page12e623f3d31440a8914c6925b4d105d1'))

    const Pagef9912b89e96d4509a3eba1719fab8fbd = lazy(() => import('./../pages/Pagef9912b89e96d4509a3eba1719fab8fbd'))
    const Page7a7e8746462740ae94b9fea00ce77622 = lazy(() => import('./../pages/Page7a7e8746462740ae94b9fea00ce77622'))
    const Pagec44e5c1bf56340e2ad8811caac9a3eb3 = lazy(() => import('./../pages/Pagec44e5c1bf56340e2ad8811caac9a3eb3'))
    const Page935641e1099349f2ba4eab115808d9a8 = lazy(() => import('./../pages/Page935641e1099349f2ba4eab115808d9a8'))
    const Page6adbbfac9bc3452c9911ed45a638b49b = lazy(() => import('./../pages/Page6adbbfac9bc3452c9911ed45a638b49b'))
    const Paged9da2f15c54b49b4abb21b012492a384 = lazy(() => import('./../pages/Paged9da2f15c54b49b4abb21b012492a384'))
    const Page427c6626b6b34e69830ad59e16ae6429 = lazy(() => import('./../pages/Page427c6626b6b34e69830ad59e16ae6429'))
    const Page2172bbc7c96e43a3aa0ccc76e77ba4a3 = lazy(() => import('./../pages/Page2172bbc7c96e43a3aa0ccc76e77ba4a3'))
    const Page1c29b71f2ffe43d9bd7815f2773c98db = lazy(() => import('./../pages/Page1c29b71f2ffe43d9bd7815f2773c98db'))

    const Pagefa7402fff48a49ac8b63eba204beb995 = lazy(() => import('./../pages/Pagefa7402fff48a49ac8b63eba204beb995'))
    const Pagef9e1185bc83d43dca02e40665ea7473d = lazy(() => import('./../pages/Pagef9e1185bc83d43dca02e40665ea7473d'))
    const Pageaa54573db4a24d43a97c057a77d9ad9e = lazy(() => import('./../pages/Pageaa54573db4a24d43a97c057a77d9ad9e'))

    const Pagecfa766f2e78b48f2a6b65edc83c781d6 = lazy(() => import('./../pages/Pagecfa766f2e78b48f2a6b65edc83c781d6'))
    const Page3582aaa80e3c4320bf8e8079fe3b87db = lazy(() => import('./../pages/Page3582aaa80e3c4320bf8e8079fe3b87db'))
    const Page6a07ca711610457383e52a37a7fa3143 = lazy(() => import('./../pages/Page6a07ca711610457383e52a37a7fa3143'))
    const Page2738682054ba4ce79cabd54e966f73f4 = lazy(() => import('./../pages/Page2738682054ba4ce79cabd54e966f73f4'))
    const Pageda6cf218dc4d43e9b59da0dc6cf76633 = lazy(() => import('./../pages/Pageda6cf218dc4d43e9b59da0dc6cf76633'))
    const Pagee56bf65362f2438582879076f5a67a9e = lazy(() => import('./../pages/Pagee56bf65362f2438582879076f5a67a9e'))
    const Page919a4f526e264c18a75b26785cd26d45 = lazy(() => import('./../pages/Page919a4f526e264c18a75b26785cd26d45'))
    const Pagefa7df0e07991451eb1332589a68707e5 = lazy(() => import('./../pages/Pagefa7df0e07991451eb1332589a68707e5'))
    const Page319eefdb9c1b4cb792b9623b36771b8f = lazy(() => import('./../pages/Page319eefdb9c1b4cb792b9623b36771b8f'))
    const Pagea7bc792e7e0d4d0ab0843b3b3fff759a = lazy(() => import('./../pages/Pagea7bc792e7e0d4d0ab0843b3b3fff759a'))
    const Page6c3b99cafeb24046a68f800869064356 = lazy(() => import('./../pages/Page6c3b99cafeb24046a68f800869064356'))
    const Pageddadf82460f14ebb911e8d8a576fd0d5 = lazy(() => import('./../pages/Pageddadf82460f14ebb911e8d8a576fd0d5'))
    const Page8ae05de13ef746b5b3a7cfa95e22a37b = lazy(() => import('./../pages/Page8ae05de13ef746b5b3a7cfa95e22a37b'))
    const Page8f9fc5f28746489aad35edacad6328ea = lazy(() => import('./../pages/Page8f9fc5f28746489aad35edacad6328ea'))

    const Pagec1c6842cdc0945ba8001e61d516bb0ec = lazy(() => import('./../pages/Pagec1c6842cdc0945ba8001e61d516bb0ec'))

    const Page053dc0b71c9f49df91eee0c5bfc2edc2 = lazy(() => import('./../pages/Page053dc0b71c9f49df91eee0c5bfc2edc2'))
    const Page781a8e85bf5f4925b44a5b9277728f06 = lazy(() => import('./../pages/Page781a8e85bf5f4925b44a5b9277728f06'))
    const Page5f144c55438748079aa079352f9eac65 = lazy(() => import('./../pages/Page5f144c55438748079aa079352f9eac65'))
    const Page5bc2e0ffe39642ff838d32458bf5f591 = lazy(() => import('./../pages/Page5bc2e0ffe39642ff838d32458bf5f591'))
    const Page3eed1fb022ff4894ac44839dba71bbd8 = lazy(() => import('./../pages/Page3eed1fb022ff4894ac44839dba71bbd8'))
    const Page66f64f6e53d34bc083ac92b01925937b = lazy(() => import('./../pages/Page66f64f6e53d34bc083ac92b01925937b'))
    const Pageade5d7b720fc4e758b9080e9fca4ea2d = lazy(() => import('./../pages/Pageade5d7b720fc4e758b9080e9fca4ea2d'))
    const Page0d3fcd1fd47c467e83e27420ae915f63 = lazy(() => import('./../pages/Page0d3fcd1fd47c467e83e27420ae915f63'))

    const Page05c3d8146b0d40008d2cf750c08711a0 = lazy(() => import('./../pages/Page05c3d8146b0d40008d2cf750c08711a0'))
    const Page68908b9131504c4dbb71041b907589c3 = lazy(() => import('./../pages/Page68908b9131504c4dbb71041b907589c3'))
    const Page77a49a6eaea6410a8abcdaece6be7875 = lazy(() => import('./../pages/Page77a49a6eaea6410a8abcdaece6be7875'))
    const Page6db2540752f44ab2b8f4492341beb050 = lazy(() => import('./../pages/Page6db2540752f44ab2b8f4492341beb050'))
    const Page3f9479ed1d184413999123d5c319df19 = lazy(() => import('./../pages/Page3f9479ed1d184413999123d5c319df19'))
    const Page07906f003dc147f6aaa1b272eeb2de6e = lazy(() => import('./../pages/Page07906f003dc147f6aaa1b272eeb2de6e'))
    const Page9d7d48c4892047a4b3ba58a15cbdbcbe = lazy(() => import('./../pages/Page9d7d48c4892047a4b3ba58a15cbdbcbe'))
    const Page82643957184b4fb3b1d1b71d8df67c5c = lazy(() => import('./../pages/Page82643957184b4fb3b1d1b71d8df67c5c'))
    const Page521cb36fac8944d5852db53b74fdbbf0 = lazy(() => import('./../pages/Page521cb36fac8944d5852db53b74fdbbf0'))
    const Page4b8aab11847a4f518e86ace7b339fd85 = lazy(() => import('./../pages/Page4b8aab11847a4f518e86ace7b339fd85'))
    const Pagead96fd0cfd2a4e868a3294151c87d997 = lazy(() => import('./../pages/Pagead96fd0cfd2a4e868a3294151c87d997'))
    const Page1b67d0f75a8647c2bc28af302d1f7b45 = lazy(() => import('./../pages/Page1b67d0f75a8647c2bc28af302d1f7b45'))
    const Pagebc4751f3c58e4973b71ae9ef35385a08 = lazy(() => import('./../pages/Pagebc4751f3c58e4973b71ae9ef35385a08'))
    const Page06c62477fe1442fe84736f26d3e3ebfc = lazy(() => import('./../pages/Page06c62477fe1442fe84736f26d3e3ebfc'))
    const Page177307ddab5c4fd4a4186d626409f895 = lazy(() => import('./../pages/Page177307ddab5c4fd4a4186d626409f895'))

    const Page74256cf8f92d416884ab2059cc924805 = lazy(() => import('./../pages/Page74256cf8f92d416884ab2059cc924805'))

    const Pageb938000f91a3486598535a248f21dfc5 = lazy(() => import('./../pages/Pageb938000f91a3486598535a248f21dfc5'))
    const Page15c2b43cbc9a4e2398feca86d7f730bf = lazy(() => import('./../pages/Page15c2b43cbc9a4e2398feca86d7f730bf'))
    const Pagee86015c7adc4448aa5b1a3a7092c3b55 = lazy(() => import('./../pages/Pagee86015c7adc4448aa5b1a3a7092c3b55'))
    const Paged5a4f8a81cf44df3b9687b22f0063736 = lazy(() => import('./../pages/Paged5a4f8a81cf44df3b9687b22f0063736'))
    const Page9d166a1a05e547bca5766ca762c98c33 = lazy(() => import('./../pages/Page9d166a1a05e547bca5766ca762c98c33'))
    const Page6e50987a1a13490ea52481d8778e3df3 = lazy(() => import('./../pages/Page6e50987a1a13490ea52481d8778e3df3'))
    const Page5c49e107ccdf44cf988f8407c0822bb7 = lazy(() => import('./../pages/Page5c49e107ccdf44cf988f8407c0822bb7'))
    const Page9dde95371c904af0a4d2f3221caf517b = lazy(() => import('./../pages/Page9dde95371c904af0a4d2f3221caf517b'))
    const Pagee07516c8a99f46939aacf34d289a343a = lazy(() => import('./../pages/Pagee07516c8a99f46939aacf34d289a343a'))

    const Pagefa57bef43cd943afbf83c84d9fb6af13 = lazy(() => import('./../pages/Pagefa57bef43cd943afbf83c84d9fb6af13'))


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
                        {path:"FormSubmitting", element:<Page086603debb0e42d9936900ba6752faaf darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page12e623f3d31440a8914c6925b4d105d1 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pagef9912b89e96d4509a3eba1719fab8fbd darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page7a7e8746462740ae94b9fea00ce77622 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagec44e5c1bf56340e2ad8811caac9a3eb3 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page935641e1099349f2ba4eab115808d9a8 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page6adbbfac9bc3452c9911ed45a638b49b darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Paged9da2f15c54b49b4abb21b012492a384 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page427c6626b6b34e69830ad59e16ae6429 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page2172bbc7c96e43a3aa0ccc76e77ba4a3 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page1c29b71f2ffe43d9bd7815f2773c98db darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagefa7402fff48a49ac8b63eba204beb995 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagef9e1185bc83d43dca02e40665ea7473d darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pageaa54573db4a24d43a97c057a77d9ad9e darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagecfa766f2e78b48f2a6b65edc83c781d6 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page3582aaa80e3c4320bf8e8079fe3b87db darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page6a07ca711610457383e52a37a7fa3143 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page2738682054ba4ce79cabd54e966f73f4 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pageda6cf218dc4d43e9b59da0dc6cf76633 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagee56bf65362f2438582879076f5a67a9e darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page919a4f526e264c18a75b26785cd26d45 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagefa7df0e07991451eb1332589a68707e5 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page319eefdb9c1b4cb792b9623b36771b8f darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagea7bc792e7e0d4d0ab0843b3b3fff759a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page6c3b99cafeb24046a68f800869064356 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pageddadf82460f14ebb911e8d8a576fd0d5 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page8ae05de13ef746b5b3a7cfa95e22a37b darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page8f9fc5f28746489aad35edacad6328ea darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagec1c6842cdc0945ba8001e61d516bb0ec darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page053dc0b71c9f49df91eee0c5bfc2edc2 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page781a8e85bf5f4925b44a5b9277728f06 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page5f144c55438748079aa079352f9eac65 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page5bc2e0ffe39642ff838d32458bf5f591 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page3eed1fb022ff4894ac44839dba71bbd8 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page66f64f6e53d34bc083ac92b01925937b darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pageade5d7b720fc4e758b9080e9fca4ea2d darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page0d3fcd1fd47c467e83e27420ae915f63 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page05c3d8146b0d40008d2cf750c08711a0 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page68908b9131504c4dbb71041b907589c3 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page77a49a6eaea6410a8abcdaece6be7875 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page6db2540752f44ab2b8f4492341beb050 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page3f9479ed1d184413999123d5c319df19 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page07906f003dc147f6aaa1b272eeb2de6e darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page9d7d48c4892047a4b3ba58a15cbdbcbe darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page82643957184b4fb3b1d1b71d8df67c5c darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page521cb36fac8944d5852db53b74fdbbf0 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page4b8aab11847a4f518e86ace7b339fd85 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagead96fd0cfd2a4e868a3294151c87d997 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page1b67d0f75a8647c2bc28af302d1f7b45 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagebc4751f3c58e4973b71ae9ef35385a08 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page06c62477fe1442fe84736f26d3e3ebfc darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page177307ddab5c4fd4a4186d626409f895 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page74256cf8f92d416884ab2059cc924805 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pageb938000f91a3486598535a248f21dfc5 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page15c2b43cbc9a4e2398feca86d7f730bf darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagee86015c7adc4448aa5b1a3a7092c3b55 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Paged5a4f8a81cf44df3b9687b22f0063736 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page9d166a1a05e547bca5766ca762c98c33 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page6e50987a1a13490ea52481d8778e3df3 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page5c49e107ccdf44cf988f8407c0822bb7 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page9dde95371c904af0a4d2f3221caf517b darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagee07516c8a99f46939aacf34d289a343a darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagefa57bef43cd943afbf83c84d9fb6af13 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

