
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page114aa86bedfd4a75bcfd029e4ede86f3 = lazy(() => import('./../pages/Page114aa86bedfd4a75bcfd029e4ede86f3'))
    const Pagea6c45a3b1b834b9e91091c5afc6b2d2d = lazy(() => import('./../pages/Pagea6c45a3b1b834b9e91091c5afc6b2d2d'))

    const Pageba349f9987fb4d4992194abc299e7bac = lazy(() => import('./../pages/Pageba349f9987fb4d4992194abc299e7bac'))
    const Page310f9f9c20a741cca80b754f650c5de7 = lazy(() => import('./../pages/Page310f9f9c20a741cca80b754f650c5de7'))
    const Page86a020d6bb1a4596bcd51dc47559ecb5 = lazy(() => import('./../pages/Page86a020d6bb1a4596bcd51dc47559ecb5'))
    const Page59e33f08c4ea425b90be5cb9fb1fb017 = lazy(() => import('./../pages/Page59e33f08c4ea425b90be5cb9fb1fb017'))
    const Pagee874847ca1054e0c9ccd37eb8628bb4e = lazy(() => import('./../pages/Pagee874847ca1054e0c9ccd37eb8628bb4e'))
    const Page472111ad69cd4530979c608078be8ac0 = lazy(() => import('./../pages/Page472111ad69cd4530979c608078be8ac0'))
    const Paged49d6d3f13424f9eadad18a45c7ebde4 = lazy(() => import('./../pages/Paged49d6d3f13424f9eadad18a45c7ebde4'))
    const Page82e6ed8d017849d98a50695702b98587 = lazy(() => import('./../pages/Page82e6ed8d017849d98a50695702b98587'))
    const Pageed06c11a5f394a7c9bca8afaae8bb199 = lazy(() => import('./../pages/Pageed06c11a5f394a7c9bca8afaae8bb199'))

    const Page0e260023fe5f446a8600cea124f62665 = lazy(() => import('./../pages/Page0e260023fe5f446a8600cea124f62665'))
    const Page7f88614824cf4e9583b87f22af037372 = lazy(() => import('./../pages/Page7f88614824cf4e9583b87f22af037372'))
    const Pagec33057ca4a5644159250906fe90617f8 = lazy(() => import('./../pages/Pagec33057ca4a5644159250906fe90617f8'))

    const Pagec761141fe3834e75a76dd9f348bb5672 = lazy(() => import('./../pages/Pagec761141fe3834e75a76dd9f348bb5672'))
    const Page04e10eb01bcc4fe4877c63337ad839f5 = lazy(() => import('./../pages/Page04e10eb01bcc4fe4877c63337ad839f5'))
    const Page59f27e45b2d5492183b738e7f2239ab7 = lazy(() => import('./../pages/Page59f27e45b2d5492183b738e7f2239ab7'))
    const Page75da207bebba4cbfb3e6660ef1a433e2 = lazy(() => import('./../pages/Page75da207bebba4cbfb3e6660ef1a433e2'))
    const Page37d77850a30146588277240b104abc1f = lazy(() => import('./../pages/Page37d77850a30146588277240b104abc1f'))
    const Page1a83d8bf71814eeebfbbbc112cd42970 = lazy(() => import('./../pages/Page1a83d8bf71814eeebfbbbc112cd42970'))
    const Page04af7937e7204543af868da7cfcf4a8d = lazy(() => import('./../pages/Page04af7937e7204543af868da7cfcf4a8d'))
    const Page7fd4648b8ed04b74ab0381fac233efdb = lazy(() => import('./../pages/Page7fd4648b8ed04b74ab0381fac233efdb'))
    const Page69a4dc1db1374e7f8ea8d93ab038bd3f = lazy(() => import('./../pages/Page69a4dc1db1374e7f8ea8d93ab038bd3f'))
    const Page4a976406b0974ff9a69d85610dc3e4d9 = lazy(() => import('./../pages/Page4a976406b0974ff9a69d85610dc3e4d9'))
    const Page4948c606e9864757b530d1fcd4d1258e = lazy(() => import('./../pages/Page4948c606e9864757b530d1fcd4d1258e'))
    const Paged11fe0aaf50a4ef2af9048334c7d1a29 = lazy(() => import('./../pages/Paged11fe0aaf50a4ef2af9048334c7d1a29'))
    const Pagef1c4ccc696fc418ca5d4f88d072fc8e3 = lazy(() => import('./../pages/Pagef1c4ccc696fc418ca5d4f88d072fc8e3'))
    const Page2ad4f19ad7bc417daef457bb49f62232 = lazy(() => import('./../pages/Page2ad4f19ad7bc417daef457bb49f62232'))

    const Page4f10beb09aff45c7b68e3f206587b8d4 = lazy(() => import('./../pages/Page4f10beb09aff45c7b68e3f206587b8d4'))

    const Page76e2f568ef8040aea8f3489ce4ffa931 = lazy(() => import('./../pages/Page76e2f568ef8040aea8f3489ce4ffa931'))
    const Page9db16b0b76724ce692ce6e8f4d1a8c55 = lazy(() => import('./../pages/Page9db16b0b76724ce692ce6e8f4d1a8c55'))
    const Page52bea9681a624c6a933ac1c25daaa480 = lazy(() => import('./../pages/Page52bea9681a624c6a933ac1c25daaa480'))
    const Page25a5213d743940f0b75731242e91c044 = lazy(() => import('./../pages/Page25a5213d743940f0b75731242e91c044'))
    const Page699e8cd5ea054974ba66d637db9f425b = lazy(() => import('./../pages/Page699e8cd5ea054974ba66d637db9f425b'))
    const Pageb801745c18d34927a73f4a4edf9324af = lazy(() => import('./../pages/Pageb801745c18d34927a73f4a4edf9324af'))
    const Page48381b394f62489ca9154d543a23b96b = lazy(() => import('./../pages/Page48381b394f62489ca9154d543a23b96b'))
    const Pageccfae394af6a4d09b6704159b1cdcee9 = lazy(() => import('./../pages/Pageccfae394af6a4d09b6704159b1cdcee9'))

    const Page952d3b35d3ed4d9ba3628cbd625ebdc9 = lazy(() => import('./../pages/Page952d3b35d3ed4d9ba3628cbd625ebdc9'))
    const Page7c315c6dea604823a32f3b174d631d56 = lazy(() => import('./../pages/Page7c315c6dea604823a32f3b174d631d56'))
    const Page28fdd9e4bff54570bbad33ba9f1d8b35 = lazy(() => import('./../pages/Page28fdd9e4bff54570bbad33ba9f1d8b35'))
    const Pageec4415d6d5524c9ab5c88f124e20dbd2 = lazy(() => import('./../pages/Pageec4415d6d5524c9ab5c88f124e20dbd2'))
    const Page3ad670623e8b42c1a6c3ca780a896fe8 = lazy(() => import('./../pages/Page3ad670623e8b42c1a6c3ca780a896fe8'))
    const Page35ed4e6c4b1d4458a148372abc5674de = lazy(() => import('./../pages/Page35ed4e6c4b1d4458a148372abc5674de'))
    const Page8ac4d05e40e94491ad875b6489b35863 = lazy(() => import('./../pages/Page8ac4d05e40e94491ad875b6489b35863'))
    const Pagea3aa6c1bcf654781bc5bf8cfdac9d37e = lazy(() => import('./../pages/Pagea3aa6c1bcf654781bc5bf8cfdac9d37e'))
    const Page6764d64f636d42f7b13823186c2e55e7 = lazy(() => import('./../pages/Page6764d64f636d42f7b13823186c2e55e7'))
    const Pagee735ab07277f4980bb461fb6cb3b43b2 = lazy(() => import('./../pages/Pagee735ab07277f4980bb461fb6cb3b43b2'))
    const Page175878be2ad84d83a45aa2776da834ab = lazy(() => import('./../pages/Page175878be2ad84d83a45aa2776da834ab'))
    const Page3baa08d2e5354464a832534214bb6f62 = lazy(() => import('./../pages/Page3baa08d2e5354464a832534214bb6f62'))
    const Page0b42b695cf824d8cb2cec8404113115a = lazy(() => import('./../pages/Page0b42b695cf824d8cb2cec8404113115a'))
    const Page894523758ab04f44b00b0cef5d2e5566 = lazy(() => import('./../pages/Page894523758ab04f44b00b0cef5d2e5566'))
    const Page1c5ed218b50b423a89e2a618bafb925f = lazy(() => import('./../pages/Page1c5ed218b50b423a89e2a618bafb925f'))

    const Page5e5c49f88fcc4253b2604415df9c41ee = lazy(() => import('./../pages/Page5e5c49f88fcc4253b2604415df9c41ee'))

    const Page1ffe60b3e67549759872ab5429ba4868 = lazy(() => import('./../pages/Page1ffe60b3e67549759872ab5429ba4868'))
    const Page9a87af6b82f44c01b1f9288f12457c78 = lazy(() => import('./../pages/Page9a87af6b82f44c01b1f9288f12457c78'))
    const Pagea5365fbad0974c2c91b603377c30668c = lazy(() => import('./../pages/Pagea5365fbad0974c2c91b603377c30668c'))
    const Pagea9288f985b724131b9e89ffb499a5a1d = lazy(() => import('./../pages/Pagea9288f985b724131b9e89ffb499a5a1d'))
    const Page611f1e8e951244c2a58b9505d690c7fa = lazy(() => import('./../pages/Page611f1e8e951244c2a58b9505d690c7fa'))
    const Page283cd4cded7d48c8b877c36363ef6fc4 = lazy(() => import('./../pages/Page283cd4cded7d48c8b877c36363ef6fc4'))
    const Page6018338503ea4f61b639569f4a220d9b = lazy(() => import('./../pages/Page6018338503ea4f61b639569f4a220d9b'))
    const Page9c216c94d2a646e492e9b7e8012c4bc8 = lazy(() => import('./../pages/Page9c216c94d2a646e492e9b7e8012c4bc8'))
    const Pagee53b79f0bd844ca4b16dfc7ae920dd64 = lazy(() => import('./../pages/Pagee53b79f0bd844ca4b16dfc7ae920dd64'))

    const Pagebfc89677553a4bf5ad8f26cab4a6df6f = lazy(() => import('./../pages/Pagebfc89677553a4bf5ad8f26cab4a6df6f'))


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
                        {path:"FormSubmitting", element:<Page114aa86bedfd4a75bcfd029e4ede86f3 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagea6c45a3b1b834b9e91091c5afc6b2d2d darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pageba349f9987fb4d4992194abc299e7bac darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page310f9f9c20a741cca80b754f650c5de7 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page86a020d6bb1a4596bcd51dc47559ecb5 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page59e33f08c4ea425b90be5cb9fb1fb017 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagee874847ca1054e0c9ccd37eb8628bb4e darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page472111ad69cd4530979c608078be8ac0 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Paged49d6d3f13424f9eadad18a45c7ebde4 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page82e6ed8d017849d98a50695702b98587 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pageed06c11a5f394a7c9bca8afaae8bb199 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page0e260023fe5f446a8600cea124f62665 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page7f88614824cf4e9583b87f22af037372 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagec33057ca4a5644159250906fe90617f8 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagec761141fe3834e75a76dd9f348bb5672 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page04e10eb01bcc4fe4877c63337ad839f5 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page59f27e45b2d5492183b738e7f2239ab7 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page75da207bebba4cbfb3e6660ef1a433e2 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page37d77850a30146588277240b104abc1f darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page1a83d8bf71814eeebfbbbc112cd42970 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page04af7937e7204543af868da7cfcf4a8d darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page7fd4648b8ed04b74ab0381fac233efdb darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page69a4dc1db1374e7f8ea8d93ab038bd3f darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page4a976406b0974ff9a69d85610dc3e4d9 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page4948c606e9864757b530d1fcd4d1258e darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Paged11fe0aaf50a4ef2af9048334c7d1a29 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagef1c4ccc696fc418ca5d4f88d072fc8e3 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page2ad4f19ad7bc417daef457bb49f62232 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page4f10beb09aff45c7b68e3f206587b8d4 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page76e2f568ef8040aea8f3489ce4ffa931 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page9db16b0b76724ce692ce6e8f4d1a8c55 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page52bea9681a624c6a933ac1c25daaa480 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page25a5213d743940f0b75731242e91c044 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page699e8cd5ea054974ba66d637db9f425b darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pageb801745c18d34927a73f4a4edf9324af darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page48381b394f62489ca9154d543a23b96b darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pageccfae394af6a4d09b6704159b1cdcee9 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page952d3b35d3ed4d9ba3628cbd625ebdc9 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page7c315c6dea604823a32f3b174d631d56 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page28fdd9e4bff54570bbad33ba9f1d8b35 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pageec4415d6d5524c9ab5c88f124e20dbd2 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page3ad670623e8b42c1a6c3ca780a896fe8 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page35ed4e6c4b1d4458a148372abc5674de darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page8ac4d05e40e94491ad875b6489b35863 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagea3aa6c1bcf654781bc5bf8cfdac9d37e darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page6764d64f636d42f7b13823186c2e55e7 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagee735ab07277f4980bb461fb6cb3b43b2 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page175878be2ad84d83a45aa2776da834ab darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page3baa08d2e5354464a832534214bb6f62 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page0b42b695cf824d8cb2cec8404113115a darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page894523758ab04f44b00b0cef5d2e5566 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page1c5ed218b50b423a89e2a618bafb925f darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page5e5c49f88fcc4253b2604415df9c41ee darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page1ffe60b3e67549759872ab5429ba4868 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page9a87af6b82f44c01b1f9288f12457c78 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagea5365fbad0974c2c91b603377c30668c darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagea9288f985b724131b9e89ffb499a5a1d darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page611f1e8e951244c2a58b9505d690c7fa darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page283cd4cded7d48c8b877c36363ef6fc4 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page6018338503ea4f61b639569f4a220d9b darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page9c216c94d2a646e492e9b7e8012c4bc8 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagee53b79f0bd844ca4b16dfc7ae920dd64 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagebfc89677553a4bf5ad8f26cab4a6df6f darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

