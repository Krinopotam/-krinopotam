
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page5ae964951e3c4dc08442c186c8503eb2 = lazy(() => import('./../pages/Page5ae964951e3c4dc08442c186c8503eb2'))

    const Pagef4a7d6576c584394a9c5818c8222e946 = lazy(() => import('./../pages/Pagef4a7d6576c584394a9c5818c8222e946'))
    const Pagea6791fd501574062b722f44628128cc1 = lazy(() => import('./../pages/Pagea6791fd501574062b722f44628128cc1'))

    const Page208a816765f84a12b75442c4984af353 = lazy(() => import('./../pages/Page208a816765f84a12b75442c4984af353'))
    const Pageb58299c69636450284a74d349d5e71a5 = lazy(() => import('./../pages/Pageb58299c69636450284a74d349d5e71a5'))
    const Pagec24e714361f844c4b4b91b65833760ef = lazy(() => import('./../pages/Pagec24e714361f844c4b4b91b65833760ef'))
    const Pagef2f3c038d20441848d1e347c2ff2fb1d = lazy(() => import('./../pages/Pagef2f3c038d20441848d1e347c2ff2fb1d'))
    const Page669ca43bf5c04e38bde5117114c026b5 = lazy(() => import('./../pages/Page669ca43bf5c04e38bde5117114c026b5'))
    const Page473f4bfa2d1542d9b343a48ca28184e4 = lazy(() => import('./../pages/Page473f4bfa2d1542d9b343a48ca28184e4'))
    const Page64a742a1acd04f22afaa4631ccabc2d9 = lazy(() => import('./../pages/Page64a742a1acd04f22afaa4631ccabc2d9'))
    const Page7b08fb0863994731af8b238019385c57 = lazy(() => import('./../pages/Page7b08fb0863994731af8b238019385c57'))
    const Pageec4a16d139784136a1bf1296c5e7f9ec = lazy(() => import('./../pages/Pageec4a16d139784136a1bf1296c5e7f9ec'))
    const Page3a06e2370f7943f59a1ff1f7a4be3420 = lazy(() => import('./../pages/Page3a06e2370f7943f59a1ff1f7a4be3420'))

    const Paged1858275d8a8446f960ef3a7af50b77b = lazy(() => import('./../pages/Paged1858275d8a8446f960ef3a7af50b77b'))
    const Page8a5d393985b44bb8ab36e5e9816ab439 = lazy(() => import('./../pages/Page8a5d393985b44bb8ab36e5e9816ab439'))
    const Pagedee58e00845a4c06b084013d88563e49 = lazy(() => import('./../pages/Pagedee58e00845a4c06b084013d88563e49'))

    const Page2a7b6d07bc784d498bb2ce1cde571c6b = lazy(() => import('./../pages/Page2a7b6d07bc784d498bb2ce1cde571c6b'))
    const Page2be271ed99094936acbfb5f1c607383c = lazy(() => import('./../pages/Page2be271ed99094936acbfb5f1c607383c'))
    const Pagecd943df369b84e3c8eab68567804e286 = lazy(() => import('./../pages/Pagecd943df369b84e3c8eab68567804e286'))
    const Page4a6a1a86ac8740b29b5e00d435400281 = lazy(() => import('./../pages/Page4a6a1a86ac8740b29b5e00d435400281'))
    const Page21bf9f19fb0247809ff5e714772820f5 = lazy(() => import('./../pages/Page21bf9f19fb0247809ff5e714772820f5'))
    const Pageef18546a088346a09dbc965f3b6f6c74 = lazy(() => import('./../pages/Pageef18546a088346a09dbc965f3b6f6c74'))
    const Pagee0ec6f3b31f04f8cbeea27d36237ce3a = lazy(() => import('./../pages/Pagee0ec6f3b31f04f8cbeea27d36237ce3a'))
    const Page0cd50334f0924962a9f820ad8534c631 = lazy(() => import('./../pages/Page0cd50334f0924962a9f820ad8534c631'))
    const Page51d4928705674d70a346795dd346f16a = lazy(() => import('./../pages/Page51d4928705674d70a346795dd346f16a'))
    const Pagea162c970d3724ceb9f107897d2871e3f = lazy(() => import('./../pages/Pagea162c970d3724ceb9f107897d2871e3f'))
    const Page764a837da96143bd8b580bcaf3021288 = lazy(() => import('./../pages/Page764a837da96143bd8b580bcaf3021288'))
    const Page76bc42c6b6364f86a799e7709ceea166 = lazy(() => import('./../pages/Page76bc42c6b6364f86a799e7709ceea166'))
    const Page328f27a8d1ea4a7db62d20b4f79ca4bb = lazy(() => import('./../pages/Page328f27a8d1ea4a7db62d20b4f79ca4bb'))
    const Paged7c7fd8757da4e4898ec938f6e461330 = lazy(() => import('./../pages/Paged7c7fd8757da4e4898ec938f6e461330'))

    const Page89ad3264188248e19e7c30a68a277411 = lazy(() => import('./../pages/Page89ad3264188248e19e7c30a68a277411'))

    const Page8f5b7a4fc36043c7b25e1fea77ebae17 = lazy(() => import('./../pages/Page8f5b7a4fc36043c7b25e1fea77ebae17'))
    const Page83f7e53e4bb1455b9b5e6c49c68f07b7 = lazy(() => import('./../pages/Page83f7e53e4bb1455b9b5e6c49c68f07b7'))
    const Page2413a7c087994b59b0de1d00d2e2487f = lazy(() => import('./../pages/Page2413a7c087994b59b0de1d00d2e2487f'))
    const Page82ab955343c04dc9b3789bbea6b9d196 = lazy(() => import('./../pages/Page82ab955343c04dc9b3789bbea6b9d196'))
    const Page277b7bbb09a1490cb85bd3af155ef695 = lazy(() => import('./../pages/Page277b7bbb09a1490cb85bd3af155ef695'))
    const Page11211728efd243129596cb52102b8c19 = lazy(() => import('./../pages/Page11211728efd243129596cb52102b8c19'))
    const Page9b6d287f55e54dc1803d1e55cf781c09 = lazy(() => import('./../pages/Page9b6d287f55e54dc1803d1e55cf781c09'))
    const Page7f82742123574df2b6fc32c5e151cc7b = lazy(() => import('./../pages/Page7f82742123574df2b6fc32c5e151cc7b'))

    const Pagef33c188d5414449dace83ae6ae34a4ca = lazy(() => import('./../pages/Pagef33c188d5414449dace83ae6ae34a4ca'))
    const Pagecf20c71d88ba4961bd120696a5a3158a = lazy(() => import('./../pages/Pagecf20c71d88ba4961bd120696a5a3158a'))
    const Page3239812c2c224bf5b9d97d6478a95513 = lazy(() => import('./../pages/Page3239812c2c224bf5b9d97d6478a95513'))
    const Page5a89db0f6ceb4f5d871357524c5a77ad = lazy(() => import('./../pages/Page5a89db0f6ceb4f5d871357524c5a77ad'))
    const Page40cdc9ba1ca14ca481b4af158513fc9e = lazy(() => import('./../pages/Page40cdc9ba1ca14ca481b4af158513fc9e'))
    const Pagead56a5508ef04579bbe3a43aa2edc2d6 = lazy(() => import('./../pages/Pagead56a5508ef04579bbe3a43aa2edc2d6'))
    const Page30f8823450a14c6aa772df418a9747a0 = lazy(() => import('./../pages/Page30f8823450a14c6aa772df418a9747a0'))
    const Pagecb7ea806c1244c47940ce221d64a7009 = lazy(() => import('./../pages/Pagecb7ea806c1244c47940ce221d64a7009'))
    const Page82ebd2ad17d247fa8d754db8e670cb6c = lazy(() => import('./../pages/Page82ebd2ad17d247fa8d754db8e670cb6c'))
    const Paged69ddad5a2234bb4bc3b888ee792a26a = lazy(() => import('./../pages/Paged69ddad5a2234bb4bc3b888ee792a26a'))
    const Page31f4024c056040f186a11972eb276e2b = lazy(() => import('./../pages/Page31f4024c056040f186a11972eb276e2b'))
    const Page7aaca2d8862b48d9934172769c790ed1 = lazy(() => import('./../pages/Page7aaca2d8862b48d9934172769c790ed1'))
    const Page90bdef051eb94d1d9f417817ab0b22fb = lazy(() => import('./../pages/Page90bdef051eb94d1d9f417817ab0b22fb'))
    const Page7c89e8a6f5234d9b86c7887597fdbabc = lazy(() => import('./../pages/Page7c89e8a6f5234d9b86c7887597fdbabc'))
    const Pagec8df6c0dcb80409e87321a5ef8bd6b0f = lazy(() => import('./../pages/Pagec8df6c0dcb80409e87321a5ef8bd6b0f'))

    const Paged48ccd7f25644781bde694b12a19c908 = lazy(() => import('./../pages/Paged48ccd7f25644781bde694b12a19c908'))

    const Page607f2564708d46f3b5f89c3ae25eabfe = lazy(() => import('./../pages/Page607f2564708d46f3b5f89c3ae25eabfe'))
    const Pagef93e44be680d472eaa08226acf621272 = lazy(() => import('./../pages/Pagef93e44be680d472eaa08226acf621272'))
    const Pagefa1bbf847fb847bbb2dcd08e3a583cae = lazy(() => import('./../pages/Pagefa1bbf847fb847bbb2dcd08e3a583cae'))
    const Page868d973deb2f45bf90f178b9ec1b997c = lazy(() => import('./../pages/Page868d973deb2f45bf90f178b9ec1b997c'))
    const Page5bd5282a4a434d5396d6fede3cd47932 = lazy(() => import('./../pages/Page5bd5282a4a434d5396d6fede3cd47932'))
    const Page0d9047b19b4842f287e2ab9e99450347 = lazy(() => import('./../pages/Page0d9047b19b4842f287e2ab9e99450347'))
    const Pageb1f3510b796c41fda878877b1d15fbd2 = lazy(() => import('./../pages/Pageb1f3510b796c41fda878877b1d15fbd2'))
    const Page41e6edc00c08461c8b7cca0dff1263c6 = lazy(() => import('./../pages/Page41e6edc00c08461c8b7cca0dff1263c6'))
    const Page0df6762047d44cd58acc51685adf243a = lazy(() => import('./../pages/Page0df6762047d44cd58acc51685adf243a'))

    const Page6589ffd44b384715b51c50d7039e7354 = lazy(() => import('./../pages/Page6589ffd44b384715b51c50d7039e7354'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page5ae964951e3c4dc08442c186c8503eb2 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagef4a7d6576c584394a9c5818c8222e946 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagea6791fd501574062b722f44628128cc1 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page208a816765f84a12b75442c4984af353 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Pageb58299c69636450284a74d349d5e71a5 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagec24e714361f844c4b4b91b65833760ef darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagef2f3c038d20441848d1e347c2ff2fb1d darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page669ca43bf5c04e38bde5117114c026b5 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page473f4bfa2d1542d9b343a48ca28184e4 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page64a742a1acd04f22afaa4631ccabc2d9 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page7b08fb0863994731af8b238019385c57 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pageec4a16d139784136a1bf1296c5e7f9ec darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page3a06e2370f7943f59a1ff1f7a4be3420 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Paged1858275d8a8446f960ef3a7af50b77b darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page8a5d393985b44bb8ab36e5e9816ab439 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagedee58e00845a4c06b084013d88563e49 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page2a7b6d07bc784d498bb2ce1cde571c6b darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page2be271ed99094936acbfb5f1c607383c darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagecd943df369b84e3c8eab68567804e286 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page4a6a1a86ac8740b29b5e00d435400281 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page21bf9f19fb0247809ff5e714772820f5 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageef18546a088346a09dbc965f3b6f6c74 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagee0ec6f3b31f04f8cbeea27d36237ce3a darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page0cd50334f0924962a9f820ad8534c631 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page51d4928705674d70a346795dd346f16a darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagea162c970d3724ceb9f107897d2871e3f darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page764a837da96143bd8b580bcaf3021288 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page76bc42c6b6364f86a799e7709ceea166 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page328f27a8d1ea4a7db62d20b4f79ca4bb darkMode={props.darkMode} />},
                        {path:"Validation", element:<Paged7c7fd8757da4e4898ec938f6e461330 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page89ad3264188248e19e7c30a68a277411 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page8f5b7a4fc36043c7b25e1fea77ebae17 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page83f7e53e4bb1455b9b5e6c49c68f07b7 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page2413a7c087994b59b0de1d00d2e2487f darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page82ab955343c04dc9b3789bbea6b9d196 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page277b7bbb09a1490cb85bd3af155ef695 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page11211728efd243129596cb52102b8c19 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page9b6d287f55e54dc1803d1e55cf781c09 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page7f82742123574df2b6fc32c5e151cc7b darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagef33c188d5414449dace83ae6ae34a4ca darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagecf20c71d88ba4961bd120696a5a3158a darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page3239812c2c224bf5b9d97d6478a95513 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page5a89db0f6ceb4f5d871357524c5a77ad darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page40cdc9ba1ca14ca481b4af158513fc9e darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagead56a5508ef04579bbe3a43aa2edc2d6 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page30f8823450a14c6aa772df418a9747a0 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagecb7ea806c1244c47940ce221d64a7009 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page82ebd2ad17d247fa8d754db8e670cb6c darkMode={props.darkMode} />},
                        {path:"Tree", element:<Paged69ddad5a2234bb4bc3b888ee792a26a darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page31f4024c056040f186a11972eb276e2b darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page7aaca2d8862b48d9934172769c790ed1 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page90bdef051eb94d1d9f417817ab0b22fb darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page7c89e8a6f5234d9b86c7887597fdbabc darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagec8df6c0dcb80409e87321a5ef8bd6b0f darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Paged48ccd7f25644781bde694b12a19c908 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page607f2564708d46f3b5f89c3ae25eabfe darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pagef93e44be680d472eaa08226acf621272 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagefa1bbf847fb847bbb2dcd08e3a583cae darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page868d973deb2f45bf90f178b9ec1b997c darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page5bd5282a4a434d5396d6fede3cd47932 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page0d9047b19b4842f287e2ab9e99450347 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pageb1f3510b796c41fda878877b1d15fbd2 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page41e6edc00c08461c8b7cca0dff1263c6 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page0df6762047d44cd58acc51685adf243a darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page6589ffd44b384715b51c50d7039e7354 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

