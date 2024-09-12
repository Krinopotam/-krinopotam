
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Paged26d913a83264d698063fca8163092fb = lazy(() => import('./../pages/Paged26d913a83264d698063fca8163092fb'))
    const Pagea8c65a9b1c074699b445631114c5335b = lazy(() => import('./../pages/Pagea8c65a9b1c074699b445631114c5335b'))

    const Page9d515fd1ad7848ddbece6ad03853f95d = lazy(() => import('./../pages/Page9d515fd1ad7848ddbece6ad03853f95d'))
    const Pagea03ae2ac48844246bf62e0a7632598f7 = lazy(() => import('./../pages/Pagea03ae2ac48844246bf62e0a7632598f7'))

    const Page43c40a9215bd4526a3b1b673b64c8c69 = lazy(() => import('./../pages/Page43c40a9215bd4526a3b1b673b64c8c69'))
    const Page3962c098b41f4b0b8ff456ff5b7c27ff = lazy(() => import('./../pages/Page3962c098b41f4b0b8ff456ff5b7c27ff'))
    const Page5f6622bc52f04123ad9da9c72595a2cb = lazy(() => import('./../pages/Page5f6622bc52f04123ad9da9c72595a2cb'))
    const Page9b3b6a80e2b74271941fbbe04e21f95c = lazy(() => import('./../pages/Page9b3b6a80e2b74271941fbbe04e21f95c'))
    const Page43a88a13852b4040bc2a9e0c0bd789e2 = lazy(() => import('./../pages/Page43a88a13852b4040bc2a9e0c0bd789e2'))
    const Page0bfcd0729c894bb8ab155f4d16b77972 = lazy(() => import('./../pages/Page0bfcd0729c894bb8ab155f4d16b77972'))
    const Page406c9ed8bcd9435abcdc3f87da86b990 = lazy(() => import('./../pages/Page406c9ed8bcd9435abcdc3f87da86b990'))
    const Page0445c5405bf84ceba45b5674353df025 = lazy(() => import('./../pages/Page0445c5405bf84ceba45b5674353df025'))
    const Page3835db2cea7a4b91b014c93a5a6fb375 = lazy(() => import('./../pages/Page3835db2cea7a4b91b014c93a5a6fb375'))
    const Page702dcd255a5543adb36c86b4619c4378 = lazy(() => import('./../pages/Page702dcd255a5543adb36c86b4619c4378'))

    const Page987944beff01421fab88cdbc021a83f0 = lazy(() => import('./../pages/Page987944beff01421fab88cdbc021a83f0'))
    const Page35501c503400480cab775675caf80a75 = lazy(() => import('./../pages/Page35501c503400480cab775675caf80a75'))
    const Page4fa5824a9f8c4b91b053e975f86b1ed2 = lazy(() => import('./../pages/Page4fa5824a9f8c4b91b053e975f86b1ed2'))

    const Pagec33ac39556a24b878aac6ca2a3a072e4 = lazy(() => import('./../pages/Pagec33ac39556a24b878aac6ca2a3a072e4'))
    const Page207be5a1af2c4d77b91e7c813692db9d = lazy(() => import('./../pages/Page207be5a1af2c4d77b91e7c813692db9d'))
    const Pagec7179079f7ce4e03bbfb2aabb231f82a = lazy(() => import('./../pages/Pagec7179079f7ce4e03bbfb2aabb231f82a'))
    const Pageb14abd7ed362407a91e3c7e34115cdd1 = lazy(() => import('./../pages/Pageb14abd7ed362407a91e3c7e34115cdd1'))
    const Page4c7a7d874476482293aa8638f3a2a49b = lazy(() => import('./../pages/Page4c7a7d874476482293aa8638f3a2a49b'))
    const Pageeb27ad031559425d8903f9575307e4f2 = lazy(() => import('./../pages/Pageeb27ad031559425d8903f9575307e4f2'))
    const Page473ce12809c3413b9232839a31fc858c = lazy(() => import('./../pages/Page473ce12809c3413b9232839a31fc858c'))
    const Page268769c68cb74126830761780e655ee0 = lazy(() => import('./../pages/Page268769c68cb74126830761780e655ee0'))
    const Pagee90b233bc8714150bda49e7d64a895b8 = lazy(() => import('./../pages/Pagee90b233bc8714150bda49e7d64a895b8'))
    const Pagefc4a6e43bd624bf8a68b3db929a085d4 = lazy(() => import('./../pages/Pagefc4a6e43bd624bf8a68b3db929a085d4'))
    const Page160a7cc974fa4adf91354d6a1ac41d9d = lazy(() => import('./../pages/Page160a7cc974fa4adf91354d6a1ac41d9d'))
    const Page221a0a8bb3a54a1f904e3ec81c0f6f0f = lazy(() => import('./../pages/Page221a0a8bb3a54a1f904e3ec81c0f6f0f'))
    const Page1abd738d5cbe4cab84db63ab37da6485 = lazy(() => import('./../pages/Page1abd738d5cbe4cab84db63ab37da6485'))
    const Pagec74649ae94034bb8bdbe4e531b4b80e9 = lazy(() => import('./../pages/Pagec74649ae94034bb8bdbe4e531b4b80e9'))

    const Page2c625bb2b24a4101a9e231dd4e564751 = lazy(() => import('./../pages/Page2c625bb2b24a4101a9e231dd4e564751'))

    const Page801627ae696b41f7a5508a82b70966d1 = lazy(() => import('./../pages/Page801627ae696b41f7a5508a82b70966d1'))
    const Pageead88153dd5c474090d0cb2649752ba1 = lazy(() => import('./../pages/Pageead88153dd5c474090d0cb2649752ba1'))
    const Page032f1b8746f54729b0e0df1932c6d988 = lazy(() => import('./../pages/Page032f1b8746f54729b0e0df1932c6d988'))
    const Pagee834d04189284a2d9b7d20809c330a54 = lazy(() => import('./../pages/Pagee834d04189284a2d9b7d20809c330a54'))
    const Page02a6a9aabf7a40e09450e0f716f751fb = lazy(() => import('./../pages/Page02a6a9aabf7a40e09450e0f716f751fb'))
    const Paged67c7db9f72a48c5b43362144bf8a3b5 = lazy(() => import('./../pages/Paged67c7db9f72a48c5b43362144bf8a3b5'))
    const Page0c4da621155247d6b90bdabfcb4e4996 = lazy(() => import('./../pages/Page0c4da621155247d6b90bdabfcb4e4996'))
    const Page6a911ae97ed1469cacdb3cb44bd69ca4 = lazy(() => import('./../pages/Page6a911ae97ed1469cacdb3cb44bd69ca4'))

    const Page891fe418b0f24088b5fb82dcc33903da = lazy(() => import('./../pages/Page891fe418b0f24088b5fb82dcc33903da'))
    const Pagec36b0de5da124b3d89b09f41aa34185e = lazy(() => import('./../pages/Pagec36b0de5da124b3d89b09f41aa34185e'))
    const Page1ae2798f85ea4ca1842bd732d09fbd86 = lazy(() => import('./../pages/Page1ae2798f85ea4ca1842bd732d09fbd86'))
    const Page36b1c0fe25294df99f600a7069a6a2a6 = lazy(() => import('./../pages/Page36b1c0fe25294df99f600a7069a6a2a6'))
    const Pagea902522d509c4dea84604973cbb2ab9e = lazy(() => import('./../pages/Pagea902522d509c4dea84604973cbb2ab9e'))
    const Page067407e0cd4f4d10b4d2b58bf906cf9f = lazy(() => import('./../pages/Page067407e0cd4f4d10b4d2b58bf906cf9f'))
    const Page676b7d4306794375afe8ebb6ea44165b = lazy(() => import('./../pages/Page676b7d4306794375afe8ebb6ea44165b'))
    const Page422adcc5412c4425be39f3000f219519 = lazy(() => import('./../pages/Page422adcc5412c4425be39f3000f219519'))
    const Pagecc151671ba7343e5b72bd4455fca9748 = lazy(() => import('./../pages/Pagecc151671ba7343e5b72bd4455fca9748'))
    const Page037dab47b0a14d32bba2e3ef856e5f7d = lazy(() => import('./../pages/Page037dab47b0a14d32bba2e3ef856e5f7d'))
    const Page7dd6c9cf3c7848cf8c5eb32a0828db0b = lazy(() => import('./../pages/Page7dd6c9cf3c7848cf8c5eb32a0828db0b'))
    const Page65e770dd36664db089e4367248209a8a = lazy(() => import('./../pages/Page65e770dd36664db089e4367248209a8a'))
    const Page1bbd158a0f2f49babd316b98edcb991b = lazy(() => import('./../pages/Page1bbd158a0f2f49babd316b98edcb991b'))
    const Page3697b28df952429287d37c295d7c0555 = lazy(() => import('./../pages/Page3697b28df952429287d37c295d7c0555'))
    const Pagea34f89f415504608a35535cedac3c8ae = lazy(() => import('./../pages/Pagea34f89f415504608a35535cedac3c8ae'))

    const Page74ed7d3d51ab4437bcf082267337002e = lazy(() => import('./../pages/Page74ed7d3d51ab4437bcf082267337002e'))

    const Page7205d65cfb284f1aad953dbbd99134ca = lazy(() => import('./../pages/Page7205d65cfb284f1aad953dbbd99134ca'))
    const Page1baa8445e0ae4e95adf1e9cfbaf47e8b = lazy(() => import('./../pages/Page1baa8445e0ae4e95adf1e9cfbaf47e8b'))
    const Page7d074de6325941a0ab0e61b1ba34c176 = lazy(() => import('./../pages/Page7d074de6325941a0ab0e61b1ba34c176'))
    const Page13976d45677e4ffa98c241e3aab6d188 = lazy(() => import('./../pages/Page13976d45677e4ffa98c241e3aab6d188'))
    const Page26d419f2da284f84bfa51cd91cf256f0 = lazy(() => import('./../pages/Page26d419f2da284f84bfa51cd91cf256f0'))
    const Page3794f53833904db1bec4563c6ac3d933 = lazy(() => import('./../pages/Page3794f53833904db1bec4563c6ac3d933'))
    const Page8231ae594dc148dcaa57717f992fe1c9 = lazy(() => import('./../pages/Page8231ae594dc148dcaa57717f992fe1c9'))
    const Paged4dbaf99e7484509b9ecb03b3eb74c0f = lazy(() => import('./../pages/Paged4dbaf99e7484509b9ecb03b3eb74c0f'))
    const Page248bf22b8e5e471da6d42f4924244561 = lazy(() => import('./../pages/Page248bf22b8e5e471da6d42f4924244561'))

    const Page867b86c188a349de9155642e6d077c99 = lazy(() => import('./../pages/Page867b86c188a349de9155642e6d077c99'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Paged26d913a83264d698063fca8163092fb darkMode={props.darkMode} />},
                        {path:"Test2", element:<Pagea8c65a9b1c074699b445631114c5335b darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page9d515fd1ad7848ddbece6ad03853f95d darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagea03ae2ac48844246bf62e0a7632598f7 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page43c40a9215bd4526a3b1b673b64c8c69 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page3962c098b41f4b0b8ff456ff5b7c27ff darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page5f6622bc52f04123ad9da9c72595a2cb darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page9b3b6a80e2b74271941fbbe04e21f95c darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page43a88a13852b4040bc2a9e0c0bd789e2 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page0bfcd0729c894bb8ab155f4d16b77972 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page406c9ed8bcd9435abcdc3f87da86b990 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page0445c5405bf84ceba45b5674353df025 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page3835db2cea7a4b91b014c93a5a6fb375 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page702dcd255a5543adb36c86b4619c4378 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page987944beff01421fab88cdbc021a83f0 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page35501c503400480cab775675caf80a75 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page4fa5824a9f8c4b91b053e975f86b1ed2 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagec33ac39556a24b878aac6ca2a3a072e4 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page207be5a1af2c4d77b91e7c813692db9d darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagec7179079f7ce4e03bbfb2aabb231f82a darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pageb14abd7ed362407a91e3c7e34115cdd1 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page4c7a7d874476482293aa8638f3a2a49b darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageeb27ad031559425d8903f9575307e4f2 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page473ce12809c3413b9232839a31fc858c darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page268769c68cb74126830761780e655ee0 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pagee90b233bc8714150bda49e7d64a895b8 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagefc4a6e43bd624bf8a68b3db929a085d4 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page160a7cc974fa4adf91354d6a1ac41d9d darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page221a0a8bb3a54a1f904e3ec81c0f6f0f darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page1abd738d5cbe4cab84db63ab37da6485 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pagec74649ae94034bb8bdbe4e531b4b80e9 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page2c625bb2b24a4101a9e231dd4e564751 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page801627ae696b41f7a5508a82b70966d1 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pageead88153dd5c474090d0cb2649752ba1 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page032f1b8746f54729b0e0df1932c6d988 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagee834d04189284a2d9b7d20809c330a54 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page02a6a9aabf7a40e09450e0f716f751fb darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Paged67c7db9f72a48c5b43362144bf8a3b5 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page0c4da621155247d6b90bdabfcb4e4996 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page6a911ae97ed1469cacdb3cb44bd69ca4 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page891fe418b0f24088b5fb82dcc33903da darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagec36b0de5da124b3d89b09f41aa34185e darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page1ae2798f85ea4ca1842bd732d09fbd86 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page36b1c0fe25294df99f600a7069a6a2a6 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagea902522d509c4dea84604973cbb2ab9e darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page067407e0cd4f4d10b4d2b58bf906cf9f darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page676b7d4306794375afe8ebb6ea44165b darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page422adcc5412c4425be39f3000f219519 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagecc151671ba7343e5b72bd4455fca9748 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page037dab47b0a14d32bba2e3ef856e5f7d darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page7dd6c9cf3c7848cf8c5eb32a0828db0b darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page65e770dd36664db089e4367248209a8a darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page1bbd158a0f2f49babd316b98edcb991b darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page3697b28df952429287d37c295d7c0555 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagea34f89f415504608a35535cedac3c8ae darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page74ed7d3d51ab4437bcf082267337002e darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page7205d65cfb284f1aad953dbbd99134ca darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page1baa8445e0ae4e95adf1e9cfbaf47e8b darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page7d074de6325941a0ab0e61b1ba34c176 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page13976d45677e4ffa98c241e3aab6d188 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page26d419f2da284f84bfa51cd91cf256f0 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page3794f53833904db1bec4563c6ac3d933 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page8231ae594dc148dcaa57717f992fe1c9 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Paged4dbaf99e7484509b9ecb03b3eb74c0f darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page248bf22b8e5e471da6d42f4924244561 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page867b86c188a349de9155642e6d077c99 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

