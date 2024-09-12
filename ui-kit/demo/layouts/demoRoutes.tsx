
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page50db33feb7444da48fa6aa96f4826201 = lazy(() => import('./../pages/Page50db33feb7444da48fa6aa96f4826201'))
    const Pagecd0ae53d128144f6952ea9891ed081a6 = lazy(() => import('./../pages/Pagecd0ae53d128144f6952ea9891ed081a6'))

    const Pageba6c5c49401a4d649c340d33f420e1f8 = lazy(() => import('./../pages/Pageba6c5c49401a4d649c340d33f420e1f8'))
    const Pagee4a3799302b34cf1a8df6081a690be61 = lazy(() => import('./../pages/Pagee4a3799302b34cf1a8df6081a690be61'))

    const Pagea79fa3b53a4a46339f9c3cde7e99d289 = lazy(() => import('./../pages/Pagea79fa3b53a4a46339f9c3cde7e99d289'))
    const Page3989ed1a650341e493db8c3dda941db7 = lazy(() => import('./../pages/Page3989ed1a650341e493db8c3dda941db7'))
    const Pagecdd73c6170754d94a025f508bf28e989 = lazy(() => import('./../pages/Pagecdd73c6170754d94a025f508bf28e989'))
    const Page1711174fae2746aa964c55dc81406c1f = lazy(() => import('./../pages/Page1711174fae2746aa964c55dc81406c1f'))
    const Page39c700bcf249445b8ea0e4782bd2a128 = lazy(() => import('./../pages/Page39c700bcf249445b8ea0e4782bd2a128'))
    const Page28ccf49328e84f30852635c899d44417 = lazy(() => import('./../pages/Page28ccf49328e84f30852635c899d44417'))
    const Page902cde525c864b1b936a1e9555b7aeb1 = lazy(() => import('./../pages/Page902cde525c864b1b936a1e9555b7aeb1'))
    const Page1198db8ef5934929a2d1a6199e6663ea = lazy(() => import('./../pages/Page1198db8ef5934929a2d1a6199e6663ea'))
    const Page8940db8076cd4ffbbd7f603ec2f8e282 = lazy(() => import('./../pages/Page8940db8076cd4ffbbd7f603ec2f8e282'))
    const Page508f45d30a8c4d0e80dbb7ff34a1cf76 = lazy(() => import('./../pages/Page508f45d30a8c4d0e80dbb7ff34a1cf76'))

    const Page76bb7299af3f4f9c9c75b847ca1cac49 = lazy(() => import('./../pages/Page76bb7299af3f4f9c9c75b847ca1cac49'))
    const Page42bd76cf24404f5a9919fdf8a43ec8f3 = lazy(() => import('./../pages/Page42bd76cf24404f5a9919fdf8a43ec8f3'))
    const Pagef5d5f8381a234369a08c62869bbf13f9 = lazy(() => import('./../pages/Pagef5d5f8381a234369a08c62869bbf13f9'))

    const Page11f67f211d794467b214b185d31c1e22 = lazy(() => import('./../pages/Page11f67f211d794467b214b185d31c1e22'))
    const Page87102680b0524cf9b9f3ca93cfc5df97 = lazy(() => import('./../pages/Page87102680b0524cf9b9f3ca93cfc5df97'))
    const Page07b05f5f4b724221b46dc9a4af7f1a5f = lazy(() => import('./../pages/Page07b05f5f4b724221b46dc9a4af7f1a5f'))
    const Page76f7afd1bc71410281b8c52a8ac2cc34 = lazy(() => import('./../pages/Page76f7afd1bc71410281b8c52a8ac2cc34'))
    const Page08859c36d2c9465191e1dd7ab33179a3 = lazy(() => import('./../pages/Page08859c36d2c9465191e1dd7ab33179a3'))
    const Pageb7cf0152d5b94860b1e57b568720c8df = lazy(() => import('./../pages/Pageb7cf0152d5b94860b1e57b568720c8df'))
    const Page493474b554204495bd5f0768f1d9c7d6 = lazy(() => import('./../pages/Page493474b554204495bd5f0768f1d9c7d6'))
    const Page6666ae703d4448e8a796f3ef64f28963 = lazy(() => import('./../pages/Page6666ae703d4448e8a796f3ef64f28963'))
    const Page54b6210103894d779e227ae5296def8c = lazy(() => import('./../pages/Page54b6210103894d779e227ae5296def8c'))
    const Page3f14d1d4650a4bb186b5a3ac9980e75e = lazy(() => import('./../pages/Page3f14d1d4650a4bb186b5a3ac9980e75e'))
    const Page79e7a89582f54fb1bcc28dd95f19ec20 = lazy(() => import('./../pages/Page79e7a89582f54fb1bcc28dd95f19ec20'))
    const Pageb4cf5c37f6024c23ac958ec6a41d2aab = lazy(() => import('./../pages/Pageb4cf5c37f6024c23ac958ec6a41d2aab'))
    const Pagec30d06b12be44a4ca81d2bf06d4a0ede = lazy(() => import('./../pages/Pagec30d06b12be44a4ca81d2bf06d4a0ede'))
    const Page418419b4adbd4987b8a6fc878012678a = lazy(() => import('./../pages/Page418419b4adbd4987b8a6fc878012678a'))

    const Paged567d457b3e44980a685a2383b8b7fb1 = lazy(() => import('./../pages/Paged567d457b3e44980a685a2383b8b7fb1'))

    const Pagebd94bcd8cbd24038af8af3996d1bdcc6 = lazy(() => import('./../pages/Pagebd94bcd8cbd24038af8af3996d1bdcc6'))
    const Pageff062bc9aeb149baa7f8679c3a846d87 = lazy(() => import('./../pages/Pageff062bc9aeb149baa7f8679c3a846d87'))
    const Pagec2857bcc40864a4ea92199f7ec14c390 = lazy(() => import('./../pages/Pagec2857bcc40864a4ea92199f7ec14c390'))
    const Pageab5cac7959d34cf59e781fb7e50d4d35 = lazy(() => import('./../pages/Pageab5cac7959d34cf59e781fb7e50d4d35'))
    const Page9f74a3b0e7c542bdbca2fb2535147be5 = lazy(() => import('./../pages/Page9f74a3b0e7c542bdbca2fb2535147be5'))
    const Page0b91c641990c4617879c268077ea5fc3 = lazy(() => import('./../pages/Page0b91c641990c4617879c268077ea5fc3'))
    const Paged67a736c87094f7292267eb7ceddf135 = lazy(() => import('./../pages/Paged67a736c87094f7292267eb7ceddf135'))
    const Pagec6924df11f334546ad4825f99f17cca6 = lazy(() => import('./../pages/Pagec6924df11f334546ad4825f99f17cca6'))

    const Page93fae63ffa6148368c07f3e00c6e4f86 = lazy(() => import('./../pages/Page93fae63ffa6148368c07f3e00c6e4f86'))
    const Page402186e8d60b43288552dba0acfef81f = lazy(() => import('./../pages/Page402186e8d60b43288552dba0acfef81f'))
    const Page555d83e4477040d093c1d09947593249 = lazy(() => import('./../pages/Page555d83e4477040d093c1d09947593249'))
    const Pagebe37b60917284912a1dc4f66e1652af0 = lazy(() => import('./../pages/Pagebe37b60917284912a1dc4f66e1652af0'))
    const Page060108b581974d8a82386300b71c8fa2 = lazy(() => import('./../pages/Page060108b581974d8a82386300b71c8fa2'))
    const Page82a2382747614f849733e2c975f3b7f2 = lazy(() => import('./../pages/Page82a2382747614f849733e2c975f3b7f2'))
    const Page883d9fc207ea477bae00e21c67581cd4 = lazy(() => import('./../pages/Page883d9fc207ea477bae00e21c67581cd4'))
    const Page7e310d71978e4a40b4dcaaee9c962965 = lazy(() => import('./../pages/Page7e310d71978e4a40b4dcaaee9c962965'))
    const Page20ee63a546764639bf0dbe25d4b3aef3 = lazy(() => import('./../pages/Page20ee63a546764639bf0dbe25d4b3aef3'))
    const Pagedb13c140845244e88e7dbb2adedc71d0 = lazy(() => import('./../pages/Pagedb13c140845244e88e7dbb2adedc71d0'))
    const Pagea89037ce8bae46cb9650b8292590fdb4 = lazy(() => import('./../pages/Pagea89037ce8bae46cb9650b8292590fdb4'))
    const Page77ddab8ac7d44ea8b6ac2821bf9fd5d7 = lazy(() => import('./../pages/Page77ddab8ac7d44ea8b6ac2821bf9fd5d7'))
    const Pagef3b1fc9538e14d72bd2ca61df9a8cf38 = lazy(() => import('./../pages/Pagef3b1fc9538e14d72bd2ca61df9a8cf38'))
    const Page8884aa79eac249768373d3b44a4cf54c = lazy(() => import('./../pages/Page8884aa79eac249768373d3b44a4cf54c'))
    const Page2a41f53dd4214eaabcb26acbaa9666e9 = lazy(() => import('./../pages/Page2a41f53dd4214eaabcb26acbaa9666e9'))

    const Pagedbaf107ff3be4aee9f186363d307ef06 = lazy(() => import('./../pages/Pagedbaf107ff3be4aee9f186363d307ef06'))

    const Pagefce7ea0fa657446193a9ea2c8dd87ac0 = lazy(() => import('./../pages/Pagefce7ea0fa657446193a9ea2c8dd87ac0'))
    const Page6065570ba9dc48afb57bd33e91940f43 = lazy(() => import('./../pages/Page6065570ba9dc48afb57bd33e91940f43'))
    const Page8d39b34289e24c18940e343b4a2a9659 = lazy(() => import('./../pages/Page8d39b34289e24c18940e343b4a2a9659'))
    const Page1e1a17acbac549a49fadea29e31cf321 = lazy(() => import('./../pages/Page1e1a17acbac549a49fadea29e31cf321'))
    const Page1cc12d64768243f281b56358d658754e = lazy(() => import('./../pages/Page1cc12d64768243f281b56358d658754e'))
    const Page342c151f87114e739ba25b27b65892e9 = lazy(() => import('./../pages/Page342c151f87114e739ba25b27b65892e9'))
    const Pagec78f1522a3ee43eb8a29ea0b98150afc = lazy(() => import('./../pages/Pagec78f1522a3ee43eb8a29ea0b98150afc'))
    const Page353cbb03418d45b189360a0e28874e55 = lazy(() => import('./../pages/Page353cbb03418d45b189360a0e28874e55'))
    const Page0c5cd7e7c06c4b8bb0cfc72323e33c78 = lazy(() => import('./../pages/Page0c5cd7e7c06c4b8bb0cfc72323e33c78'))

    const Pagebb282c58409349c2b42722537d6b8a3d = lazy(() => import('./../pages/Pagebb282c58409349c2b42722537d6b8a3d'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page50db33feb7444da48fa6aa96f4826201 darkMode={props.darkMode} />},
                        {path:"Test2", element:<Pagecd0ae53d128144f6952ea9891ed081a6 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pageba6c5c49401a4d649c340d33f420e1f8 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagee4a3799302b34cf1a8df6081a690be61 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Pagea79fa3b53a4a46339f9c3cde7e99d289 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page3989ed1a650341e493db8c3dda941db7 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagecdd73c6170754d94a025f508bf28e989 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page1711174fae2746aa964c55dc81406c1f darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page39c700bcf249445b8ea0e4782bd2a128 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page28ccf49328e84f30852635c899d44417 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page902cde525c864b1b936a1e9555b7aeb1 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page1198db8ef5934929a2d1a6199e6663ea darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page8940db8076cd4ffbbd7f603ec2f8e282 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page508f45d30a8c4d0e80dbb7ff34a1cf76 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page76bb7299af3f4f9c9c75b847ca1cac49 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page42bd76cf24404f5a9919fdf8a43ec8f3 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagef5d5f8381a234369a08c62869bbf13f9 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page11f67f211d794467b214b185d31c1e22 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page87102680b0524cf9b9f3ca93cfc5df97 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page07b05f5f4b724221b46dc9a4af7f1a5f darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page76f7afd1bc71410281b8c52a8ac2cc34 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page08859c36d2c9465191e1dd7ab33179a3 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageb7cf0152d5b94860b1e57b568720c8df darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page493474b554204495bd5f0768f1d9c7d6 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page6666ae703d4448e8a796f3ef64f28963 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page54b6210103894d779e227ae5296def8c darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page3f14d1d4650a4bb186b5a3ac9980e75e darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page79e7a89582f54fb1bcc28dd95f19ec20 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pageb4cf5c37f6024c23ac958ec6a41d2aab darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagec30d06b12be44a4ca81d2bf06d4a0ede darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page418419b4adbd4987b8a6fc878012678a darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Paged567d457b3e44980a685a2383b8b7fb1 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagebd94bcd8cbd24038af8af3996d1bdcc6 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pageff062bc9aeb149baa7f8679c3a846d87 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pagec2857bcc40864a4ea92199f7ec14c390 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pageab5cac7959d34cf59e781fb7e50d4d35 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page9f74a3b0e7c542bdbca2fb2535147be5 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page0b91c641990c4617879c268077ea5fc3 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Paged67a736c87094f7292267eb7ceddf135 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagec6924df11f334546ad4825f99f17cca6 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page93fae63ffa6148368c07f3e00c6e4f86 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page402186e8d60b43288552dba0acfef81f darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page555d83e4477040d093c1d09947593249 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagebe37b60917284912a1dc4f66e1652af0 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page060108b581974d8a82386300b71c8fa2 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page82a2382747614f849733e2c975f3b7f2 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page883d9fc207ea477bae00e21c67581cd4 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page7e310d71978e4a40b4dcaaee9c962965 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page20ee63a546764639bf0dbe25d4b3aef3 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagedb13c140845244e88e7dbb2adedc71d0 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagea89037ce8bae46cb9650b8292590fdb4 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page77ddab8ac7d44ea8b6ac2821bf9fd5d7 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagef3b1fc9538e14d72bd2ca61df9a8cf38 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page8884aa79eac249768373d3b44a4cf54c darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page2a41f53dd4214eaabcb26acbaa9666e9 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagedbaf107ff3be4aee9f186363d307ef06 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagefce7ea0fa657446193a9ea2c8dd87ac0 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page6065570ba9dc48afb57bd33e91940f43 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page8d39b34289e24c18940e343b4a2a9659 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page1e1a17acbac549a49fadea29e31cf321 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page1cc12d64768243f281b56358d658754e darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page342c151f87114e739ba25b27b65892e9 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagec78f1522a3ee43eb8a29ea0b98150afc darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page353cbb03418d45b189360a0e28874e55 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page0c5cd7e7c06c4b8bb0cfc72323e33c78 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagebb282c58409349c2b42722537d6b8a3d darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

