
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page6e0d56d43d504d9db20832b42c781cc4 = lazy(() => import('./../pages/Page6e0d56d43d504d9db20832b42c781cc4'))

    const Pagea19e38d254424f74952df915717f2fc7 = lazy(() => import('./../pages/Pagea19e38d254424f74952df915717f2fc7'))
    const Page48f1f6d0e98d4eaa8e8920157f822160 = lazy(() => import('./../pages/Page48f1f6d0e98d4eaa8e8920157f822160'))

    const Page18c1ff37d9284731afd5a2a332541647 = lazy(() => import('./../pages/Page18c1ff37d9284731afd5a2a332541647'))
    const Page89c320d328284bbcae996c37d062f4e2 = lazy(() => import('./../pages/Page89c320d328284bbcae996c37d062f4e2'))
    const Page02344d65d4bc4177bdd2ac64a3dc7c6c = lazy(() => import('./../pages/Page02344d65d4bc4177bdd2ac64a3dc7c6c'))
    const Page8934eb77c1f44436bb6e8285c9d9763c = lazy(() => import('./../pages/Page8934eb77c1f44436bb6e8285c9d9763c'))
    const Page1c3cc05b88634b4895b6413d780b58e6 = lazy(() => import('./../pages/Page1c3cc05b88634b4895b6413d780b58e6'))
    const Pagef4238a11a15c4f6c9971c152ccb842d8 = lazy(() => import('./../pages/Pagef4238a11a15c4f6c9971c152ccb842d8'))
    const Page8af0360be508421b867cc7d2c6d0fd08 = lazy(() => import('./../pages/Page8af0360be508421b867cc7d2c6d0fd08'))
    const Paged33321ab8b8146f99d53a7ca514fa163 = lazy(() => import('./../pages/Paged33321ab8b8146f99d53a7ca514fa163'))
    const Pagec2f80c346a6e4df58e51b3ff19930c06 = lazy(() => import('./../pages/Pagec2f80c346a6e4df58e51b3ff19930c06'))
    const Page3ee5a378b409431db69679395dfef8b6 = lazy(() => import('./../pages/Page3ee5a378b409431db69679395dfef8b6'))

    const Pagee3fce1dafe414d44ad249ee4d41fcc9a = lazy(() => import('./../pages/Pagee3fce1dafe414d44ad249ee4d41fcc9a'))
    const Page1dbb2bda0a024db687848bfff4ad9adb = lazy(() => import('./../pages/Page1dbb2bda0a024db687848bfff4ad9adb'))
    const Page18344f0c90b542d885788d918cd14e1b = lazy(() => import('./../pages/Page18344f0c90b542d885788d918cd14e1b'))

    const Pagef8b8ccd9c90a45e0afa5a3dd66e84537 = lazy(() => import('./../pages/Pagef8b8ccd9c90a45e0afa5a3dd66e84537'))
    const Page5fab61641a484f20957a06fbbf3d7797 = lazy(() => import('./../pages/Page5fab61641a484f20957a06fbbf3d7797'))
    const Pagefc385b08f783427686e6a2fd19689855 = lazy(() => import('./../pages/Pagefc385b08f783427686e6a2fd19689855'))
    const Pageaa25b886c0564994aec4bb1a9f478e78 = lazy(() => import('./../pages/Pageaa25b886c0564994aec4bb1a9f478e78'))
    const Page3f83df11b39445d1a5686fee4130cc85 = lazy(() => import('./../pages/Page3f83df11b39445d1a5686fee4130cc85'))
    const Page3011c68e068543a4b4ee2d7dd7f0d47a = lazy(() => import('./../pages/Page3011c68e068543a4b4ee2d7dd7f0d47a'))
    const Page95ddc65dedbb409cbb2a652ef77fd710 = lazy(() => import('./../pages/Page95ddc65dedbb409cbb2a652ef77fd710'))
    const Pagebe72f52447d8460bbbdfd13f67756005 = lazy(() => import('./../pages/Pagebe72f52447d8460bbbdfd13f67756005'))
    const Page74c540759cd54d1faac4e2fdf42b3311 = lazy(() => import('./../pages/Page74c540759cd54d1faac4e2fdf42b3311'))
    const Page7770054de6604e549b26c03866f2d31a = lazy(() => import('./../pages/Page7770054de6604e549b26c03866f2d31a'))
    const Pagec0009f7012ad47caa6b9cdd115e4910c = lazy(() => import('./../pages/Pagec0009f7012ad47caa6b9cdd115e4910c'))
    const Pageba1306f670c540c5bc221649c13a464a = lazy(() => import('./../pages/Pageba1306f670c540c5bc221649c13a464a'))
    const Page051c613fb10843a78d1d8c97c8fc2aab = lazy(() => import('./../pages/Page051c613fb10843a78d1d8c97c8fc2aab'))
    const Page69997caaef17495d8e2aeb8a9f8ffa12 = lazy(() => import('./../pages/Page69997caaef17495d8e2aeb8a9f8ffa12'))

    const Page4d314fb360fb41039661b89dcf64bc9d = lazy(() => import('./../pages/Page4d314fb360fb41039661b89dcf64bc9d'))

    const Pageda1ccff385904d3ebefe056e8adaf1a7 = lazy(() => import('./../pages/Pageda1ccff385904d3ebefe056e8adaf1a7'))
    const Page56a8784eeb1b40d4a4696ee55e0723f7 = lazy(() => import('./../pages/Page56a8784eeb1b40d4a4696ee55e0723f7'))
    const Page69c138a7bfe9490eb8bed04a076f6675 = lazy(() => import('./../pages/Page69c138a7bfe9490eb8bed04a076f6675'))
    const Page7e7f55344f5c4e1681b7184a2c34e366 = lazy(() => import('./../pages/Page7e7f55344f5c4e1681b7184a2c34e366'))
    const Page74cde8667d244c44a343ff974e6d5129 = lazy(() => import('./../pages/Page74cde8667d244c44a343ff974e6d5129'))
    const Page3618a9ce701346638a453e722e481fa6 = lazy(() => import('./../pages/Page3618a9ce701346638a453e722e481fa6'))
    const Page841119db2d0d4f5cb9fcae6bc0d7dd92 = lazy(() => import('./../pages/Page841119db2d0d4f5cb9fcae6bc0d7dd92'))
    const Pagecff1ee6ca6a145d19a81ec9917bafc9c = lazy(() => import('./../pages/Pagecff1ee6ca6a145d19a81ec9917bafc9c'))

    const Pagec313adc1e5ae4303aa2165b3388b7403 = lazy(() => import('./../pages/Pagec313adc1e5ae4303aa2165b3388b7403'))
    const Pagec7078873aa7b435fb947f83ccaf243f2 = lazy(() => import('./../pages/Pagec7078873aa7b435fb947f83ccaf243f2'))
    const Page44056dac1e6d494da179fd463cd5fdf2 = lazy(() => import('./../pages/Page44056dac1e6d494da179fd463cd5fdf2'))
    const Page0e3c170232614fa5a115bb7f9bbab80f = lazy(() => import('./../pages/Page0e3c170232614fa5a115bb7f9bbab80f'))
    const Pagee193f595e302473ba2b001c0ab1bc148 = lazy(() => import('./../pages/Pagee193f595e302473ba2b001c0ab1bc148'))
    const Page6715853f8d854988afbf69ffc67aa8db = lazy(() => import('./../pages/Page6715853f8d854988afbf69ffc67aa8db'))
    const Page03a4cd58e5134566b850bb71fa53c8e7 = lazy(() => import('./../pages/Page03a4cd58e5134566b850bb71fa53c8e7'))
    const Page900b9d4ce56a474aae5c4e3abdbc45ba = lazy(() => import('./../pages/Page900b9d4ce56a474aae5c4e3abdbc45ba'))
    const Page272c7aa3cb1d4957825c528cb08d0602 = lazy(() => import('./../pages/Page272c7aa3cb1d4957825c528cb08d0602'))
    const Pageab0c1ff382814e2296184e990f63e238 = lazy(() => import('./../pages/Pageab0c1ff382814e2296184e990f63e238'))
    const Page98fe2bef064d40e4b74de0e53ecc605b = lazy(() => import('./../pages/Page98fe2bef064d40e4b74de0e53ecc605b'))
    const Page9bb708c80335450e98aea4ae83c5f69e = lazy(() => import('./../pages/Page9bb708c80335450e98aea4ae83c5f69e'))
    const Page4f8d45dcb4244a3396b7b3ba434489f6 = lazy(() => import('./../pages/Page4f8d45dcb4244a3396b7b3ba434489f6'))
    const Pagef410e61b0cec407bbb114414006d597f = lazy(() => import('./../pages/Pagef410e61b0cec407bbb114414006d597f'))
    const Pagea2afb2a52132427c89a6147b90437145 = lazy(() => import('./../pages/Pagea2afb2a52132427c89a6147b90437145'))

    const Page0ce1ca6489654bd5976f3a48c95fc6f3 = lazy(() => import('./../pages/Page0ce1ca6489654bd5976f3a48c95fc6f3'))

    const Pagea03ebf1f6b034ff58034ee89b4a72af6 = lazy(() => import('./../pages/Pagea03ebf1f6b034ff58034ee89b4a72af6'))
    const Page496803ff4a4d492db5bc1a7523ab98be = lazy(() => import('./../pages/Page496803ff4a4d492db5bc1a7523ab98be'))
    const Pagec8f3961d023847da96a1034c26c39ff1 = lazy(() => import('./../pages/Pagec8f3961d023847da96a1034c26c39ff1'))
    const Pagece98b1a4220845388869b5c6399316bd = lazy(() => import('./../pages/Pagece98b1a4220845388869b5c6399316bd'))
    const Pagee7a66db25f074275adb089daedb250a2 = lazy(() => import('./../pages/Pagee7a66db25f074275adb089daedb250a2'))
    const Pagef5118ff0ac754247b9c82f160c4a7b2f = lazy(() => import('./../pages/Pagef5118ff0ac754247b9c82f160c4a7b2f'))
    const Page9165dc4cacc841be886ba2abb7dfd58a = lazy(() => import('./../pages/Page9165dc4cacc841be886ba2abb7dfd58a'))
    const Page0dde36d8a499413794c541e0eb8ea628 = lazy(() => import('./../pages/Page0dde36d8a499413794c541e0eb8ea628'))
    const Pagebe5b655db7fc43bf9c207012cee97ae4 = lazy(() => import('./../pages/Pagebe5b655db7fc43bf9c207012cee97ae4'))

    const Page659ffc766861404e8946b65ad20af5d7 = lazy(() => import('./../pages/Page659ffc766861404e8946b65ad20af5d7'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page6e0d56d43d504d9db20832b42c781cc4 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagea19e38d254424f74952df915717f2fc7 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page48f1f6d0e98d4eaa8e8920157f822160 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page18c1ff37d9284731afd5a2a332541647 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page89c320d328284bbcae996c37d062f4e2 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page02344d65d4bc4177bdd2ac64a3dc7c6c darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page8934eb77c1f44436bb6e8285c9d9763c darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page1c3cc05b88634b4895b6413d780b58e6 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagef4238a11a15c4f6c9971c152ccb842d8 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page8af0360be508421b867cc7d2c6d0fd08 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Paged33321ab8b8146f99d53a7ca514fa163 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagec2f80c346a6e4df58e51b3ff19930c06 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page3ee5a378b409431db69679395dfef8b6 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagee3fce1dafe414d44ad249ee4d41fcc9a darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page1dbb2bda0a024db687848bfff4ad9adb darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page18344f0c90b542d885788d918cd14e1b darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagef8b8ccd9c90a45e0afa5a3dd66e84537 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page5fab61641a484f20957a06fbbf3d7797 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagefc385b08f783427686e6a2fd19689855 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pageaa25b886c0564994aec4bb1a9f478e78 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page3f83df11b39445d1a5686fee4130cc85 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page3011c68e068543a4b4ee2d7dd7f0d47a darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page95ddc65dedbb409cbb2a652ef77fd710 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagebe72f52447d8460bbbdfd13f67756005 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page74c540759cd54d1faac4e2fdf42b3311 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page7770054de6604e549b26c03866f2d31a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagec0009f7012ad47caa6b9cdd115e4910c darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pageba1306f670c540c5bc221649c13a464a darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page051c613fb10843a78d1d8c97c8fc2aab darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page69997caaef17495d8e2aeb8a9f8ffa12 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page4d314fb360fb41039661b89dcf64bc9d darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageda1ccff385904d3ebefe056e8adaf1a7 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page56a8784eeb1b40d4a4696ee55e0723f7 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page69c138a7bfe9490eb8bed04a076f6675 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page7e7f55344f5c4e1681b7184a2c34e366 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page74cde8667d244c44a343ff974e6d5129 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page3618a9ce701346638a453e722e481fa6 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page841119db2d0d4f5cb9fcae6bc0d7dd92 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagecff1ee6ca6a145d19a81ec9917bafc9c darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagec313adc1e5ae4303aa2165b3388b7403 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagec7078873aa7b435fb947f83ccaf243f2 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page44056dac1e6d494da179fd463cd5fdf2 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page0e3c170232614fa5a115bb7f9bbab80f darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagee193f595e302473ba2b001c0ab1bc148 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page6715853f8d854988afbf69ffc67aa8db darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page03a4cd58e5134566b850bb71fa53c8e7 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page900b9d4ce56a474aae5c4e3abdbc45ba darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page272c7aa3cb1d4957825c528cb08d0602 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageab0c1ff382814e2296184e990f63e238 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page98fe2bef064d40e4b74de0e53ecc605b darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page9bb708c80335450e98aea4ae83c5f69e darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page4f8d45dcb4244a3396b7b3ba434489f6 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagef410e61b0cec407bbb114414006d597f darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagea2afb2a52132427c89a6147b90437145 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page0ce1ca6489654bd5976f3a48c95fc6f3 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagea03ebf1f6b034ff58034ee89b4a72af6 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page496803ff4a4d492db5bc1a7523ab98be darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagec8f3961d023847da96a1034c26c39ff1 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagece98b1a4220845388869b5c6399316bd darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagee7a66db25f074275adb089daedb250a2 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagef5118ff0ac754247b9c82f160c4a7b2f darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page9165dc4cacc841be886ba2abb7dfd58a darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page0dde36d8a499413794c541e0eb8ea628 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagebe5b655db7fc43bf9c207012cee97ae4 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page659ffc766861404e8946b65ad20af5d7 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

