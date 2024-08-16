
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1dcb783322ab4b27b1da569e78908cfe = lazy(() => import('./../pages/Page1dcb783322ab4b27b1da569e78908cfe'))
    const Page6c43705527164e19a491e8e24a2d3349 = lazy(() => import('./../pages/Page6c43705527164e19a491e8e24a2d3349'))

    const Page76b44d0fc7f148c3955adfda2d4144cb = lazy(() => import('./../pages/Page76b44d0fc7f148c3955adfda2d4144cb'))
    const Paged19a20f39e564a9f8d97f6c3508e880c = lazy(() => import('./../pages/Paged19a20f39e564a9f8d97f6c3508e880c'))
    const Pagefef0fad28e7d4fbda8002a1063ce63bc = lazy(() => import('./../pages/Pagefef0fad28e7d4fbda8002a1063ce63bc'))
    const Page91871e6cbc4b4259a64a00c529e29cf1 = lazy(() => import('./../pages/Page91871e6cbc4b4259a64a00c529e29cf1'))
    const Pagee94691be48f74f8f934028215d40af32 = lazy(() => import('./../pages/Pagee94691be48f74f8f934028215d40af32'))
    const Page6e81c0b6214c43dfa8f0a47ea205ed64 = lazy(() => import('./../pages/Page6e81c0b6214c43dfa8f0a47ea205ed64'))
    const Pageeb071bd458b14c57b9080bd392fc0fad = lazy(() => import('./../pages/Pageeb071bd458b14c57b9080bd392fc0fad'))
    const Page0c50418c9d5741b9b7a3c75309ac5a21 = lazy(() => import('./../pages/Page0c50418c9d5741b9b7a3c75309ac5a21'))
    const Page35f85660b0d14a309711c708c51f137d = lazy(() => import('./../pages/Page35f85660b0d14a309711c708c51f137d'))

    const Pagea2370dadaac345d2be4e2c0f237b0add = lazy(() => import('./../pages/Pagea2370dadaac345d2be4e2c0f237b0add'))
    const Page51b073104c644844af390fc936e23fa7 = lazy(() => import('./../pages/Page51b073104c644844af390fc936e23fa7'))
    const Page2f9625e7fb5e49c28e73757342198649 = lazy(() => import('./../pages/Page2f9625e7fb5e49c28e73757342198649'))

    const Pagee2fdf0010b1f4ac49a3acdd2188943e7 = lazy(() => import('./../pages/Pagee2fdf0010b1f4ac49a3acdd2188943e7'))
    const Page6457ac3a793245b497417558445288a1 = lazy(() => import('./../pages/Page6457ac3a793245b497417558445288a1'))
    const Page730109be929642bda5955c38bca4ca01 = lazy(() => import('./../pages/Page730109be929642bda5955c38bca4ca01'))
    const Paged7faa3a934864c7a82e4c164b84571ef = lazy(() => import('./../pages/Paged7faa3a934864c7a82e4c164b84571ef'))
    const Page24acd2e567194e15b84a37de3549b650 = lazy(() => import('./../pages/Page24acd2e567194e15b84a37de3549b650'))
    const Page4991fb0d940c418bafe4046bd1e58a5b = lazy(() => import('./../pages/Page4991fb0d940c418bafe4046bd1e58a5b'))
    const Page7089baacdab3414e9b93efa232f2eba9 = lazy(() => import('./../pages/Page7089baacdab3414e9b93efa232f2eba9'))
    const Page71bfb9817a6f4aa1b169437a0d402a59 = lazy(() => import('./../pages/Page71bfb9817a6f4aa1b169437a0d402a59'))
    const Page232dee8d99674781a62e21f3033b79af = lazy(() => import('./../pages/Page232dee8d99674781a62e21f3033b79af'))
    const Pagef4f2474373be40d09e879517a318d78a = lazy(() => import('./../pages/Pagef4f2474373be40d09e879517a318d78a'))
    const Page8620f924209c4000a7bf54943029f521 = lazy(() => import('./../pages/Page8620f924209c4000a7bf54943029f521'))
    const Page9258e548e194438594d08fa87c0c6b14 = lazy(() => import('./../pages/Page9258e548e194438594d08fa87c0c6b14'))
    const Page38907eaf1d94423ead1b64fc627d8895 = lazy(() => import('./../pages/Page38907eaf1d94423ead1b64fc627d8895'))
    const Page2c5f7f5d15e14eb6b172ad66a8dc8ccc = lazy(() => import('./../pages/Page2c5f7f5d15e14eb6b172ad66a8dc8ccc'))

    const Pageb716a49e1c144b219e583ff6ced01e82 = lazy(() => import('./../pages/Pageb716a49e1c144b219e583ff6ced01e82'))

    const Pageb683e1e6abb54a9a8af989771472d801 = lazy(() => import('./../pages/Pageb683e1e6abb54a9a8af989771472d801'))
    const Pagedf4071aa50b0405ea9cad65e1d8b2092 = lazy(() => import('./../pages/Pagedf4071aa50b0405ea9cad65e1d8b2092'))
    const Page18ae21772b9d4545b098ec89e25a1d90 = lazy(() => import('./../pages/Page18ae21772b9d4545b098ec89e25a1d90'))
    const Page6e0f637de9fe420e8b0a20beace21510 = lazy(() => import('./../pages/Page6e0f637de9fe420e8b0a20beace21510'))
    const Page03ddb78abf4c484d860b994a59a9d879 = lazy(() => import('./../pages/Page03ddb78abf4c484d860b994a59a9d879'))
    const Pagef226edb1a10841ea8262d18c7af2cefe = lazy(() => import('./../pages/Pagef226edb1a10841ea8262d18c7af2cefe'))
    const Page98c0d4c669f84fb08f8cf76bf0bde329 = lazy(() => import('./../pages/Page98c0d4c669f84fb08f8cf76bf0bde329'))
    const Pagec24e051114a54788ad9d130cf992b30b = lazy(() => import('./../pages/Pagec24e051114a54788ad9d130cf992b30b'))

    const Page619d013b9c8d4ad89d995778fbba85db = lazy(() => import('./../pages/Page619d013b9c8d4ad89d995778fbba85db'))
    const Page75a27b707770499cb9e82e1d65bf44ac = lazy(() => import('./../pages/Page75a27b707770499cb9e82e1d65bf44ac'))
    const Page2eb9ee161ad648a9b99a39c1787319bf = lazy(() => import('./../pages/Page2eb9ee161ad648a9b99a39c1787319bf'))
    const Page3e19b4c3d44e4a1197cb26fd2d0eb1c6 = lazy(() => import('./../pages/Page3e19b4c3d44e4a1197cb26fd2d0eb1c6'))
    const Pagea0ce5aa6a52c4a37a092c0252dddb7b7 = lazy(() => import('./../pages/Pagea0ce5aa6a52c4a37a092c0252dddb7b7'))
    const Paged4c852f3b438408a84d41f16a29ccd3b = lazy(() => import('./../pages/Paged4c852f3b438408a84d41f16a29ccd3b'))
    const Pageb3dd13fee14847bb919f06a5f86639f5 = lazy(() => import('./../pages/Pageb3dd13fee14847bb919f06a5f86639f5'))
    const Pagefd16f8ce152c4fada9e9f6da9a293076 = lazy(() => import('./../pages/Pagefd16f8ce152c4fada9e9f6da9a293076'))
    const Page101ba8c83cbb47b3b20f1208496fda68 = lazy(() => import('./../pages/Page101ba8c83cbb47b3b20f1208496fda68'))
    const Page0bfc0fb80aff43bca49454311c1849eb = lazy(() => import('./../pages/Page0bfc0fb80aff43bca49454311c1849eb'))
    const Pagebdb305a5d75446f7a078d60a72905f2d = lazy(() => import('./../pages/Pagebdb305a5d75446f7a078d60a72905f2d'))
    const Pagea62f2d54a2b44bf8aa9d9ceeb2493174 = lazy(() => import('./../pages/Pagea62f2d54a2b44bf8aa9d9ceeb2493174'))
    const Pageea229cffcdec465c99bbcbc98fc88cbe = lazy(() => import('./../pages/Pageea229cffcdec465c99bbcbc98fc88cbe'))
    const Pageac50e8d5da644460b488f190b0455993 = lazy(() => import('./../pages/Pageac50e8d5da644460b488f190b0455993'))
    const Page05182d75a3904c41ba5f24c9c5dc2906 = lazy(() => import('./../pages/Page05182d75a3904c41ba5f24c9c5dc2906'))

    const Pageb9dd734459c34df1a9e376c03790828a = lazy(() => import('./../pages/Pageb9dd734459c34df1a9e376c03790828a'))

    const Page00be2d9f5cd14a12be1b09babbf0e78f = lazy(() => import('./../pages/Page00be2d9f5cd14a12be1b09babbf0e78f'))
    const Pageec105bb35429459d90549e66ab35e239 = lazy(() => import('./../pages/Pageec105bb35429459d90549e66ab35e239'))
    const Page3f0078e7c32b406baaae6b83c82f3df7 = lazy(() => import('./../pages/Page3f0078e7c32b406baaae6b83c82f3df7'))
    const Page24540245167b4805a58524e0b527a4aa = lazy(() => import('./../pages/Page24540245167b4805a58524e0b527a4aa'))
    const Page46b93e4818c140769c8d88a0059a6743 = lazy(() => import('./../pages/Page46b93e4818c140769c8d88a0059a6743'))
    const Pagec5001a08f44a49258c4cd3bc23040eb7 = lazy(() => import('./../pages/Pagec5001a08f44a49258c4cd3bc23040eb7'))
    const Page92daaa548d934f7e90e352bb5fbeda76 = lazy(() => import('./../pages/Page92daaa548d934f7e90e352bb5fbeda76'))
    const Page2c06b6f424cc4127896b532c259661f7 = lazy(() => import('./../pages/Page2c06b6f424cc4127896b532c259661f7'))
    const Page976ea59a19564f95af5084ba77e27f15 = lazy(() => import('./../pages/Page976ea59a19564f95af5084ba77e27f15'))

    const Page7bb32eec4a6c461ea6158c3011bc250d = lazy(() => import('./../pages/Page7bb32eec4a6c461ea6158c3011bc250d'))


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
                        {path:"FormSubmitting", element:<Page1dcb783322ab4b27b1da569e78908cfe darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page6c43705527164e19a491e8e24a2d3349 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page76b44d0fc7f148c3955adfda2d4144cb darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Paged19a20f39e564a9f8d97f6c3508e880c darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagefef0fad28e7d4fbda8002a1063ce63bc darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page91871e6cbc4b4259a64a00c529e29cf1 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagee94691be48f74f8f934028215d40af32 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page6e81c0b6214c43dfa8f0a47ea205ed64 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageeb071bd458b14c57b9080bd392fc0fad darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page0c50418c9d5741b9b7a3c75309ac5a21 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page35f85660b0d14a309711c708c51f137d darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagea2370dadaac345d2be4e2c0f237b0add darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page51b073104c644844af390fc936e23fa7 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page2f9625e7fb5e49c28e73757342198649 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagee2fdf0010b1f4ac49a3acdd2188943e7 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page6457ac3a793245b497417558445288a1 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page730109be929642bda5955c38bca4ca01 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Paged7faa3a934864c7a82e4c164b84571ef darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page24acd2e567194e15b84a37de3549b650 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page4991fb0d940c418bafe4046bd1e58a5b darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page7089baacdab3414e9b93efa232f2eba9 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page71bfb9817a6f4aa1b169437a0d402a59 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page232dee8d99674781a62e21f3033b79af darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagef4f2474373be40d09e879517a318d78a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page8620f924209c4000a7bf54943029f521 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page9258e548e194438594d08fa87c0c6b14 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page38907eaf1d94423ead1b64fc627d8895 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page2c5f7f5d15e14eb6b172ad66a8dc8ccc darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pageb716a49e1c144b219e583ff6ced01e82 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageb683e1e6abb54a9a8af989771472d801 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagedf4071aa50b0405ea9cad65e1d8b2092 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page18ae21772b9d4545b098ec89e25a1d90 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page6e0f637de9fe420e8b0a20beace21510 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page03ddb78abf4c484d860b994a59a9d879 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagef226edb1a10841ea8262d18c7af2cefe darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page98c0d4c669f84fb08f8cf76bf0bde329 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagec24e051114a54788ad9d130cf992b30b darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page619d013b9c8d4ad89d995778fbba85db darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page75a27b707770499cb9e82e1d65bf44ac darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page2eb9ee161ad648a9b99a39c1787319bf darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page3e19b4c3d44e4a1197cb26fd2d0eb1c6 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagea0ce5aa6a52c4a37a092c0252dddb7b7 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Paged4c852f3b438408a84d41f16a29ccd3b darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pageb3dd13fee14847bb919f06a5f86639f5 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagefd16f8ce152c4fada9e9f6da9a293076 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page101ba8c83cbb47b3b20f1208496fda68 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page0bfc0fb80aff43bca49454311c1849eb darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagebdb305a5d75446f7a078d60a72905f2d darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagea62f2d54a2b44bf8aa9d9ceeb2493174 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pageea229cffcdec465c99bbcbc98fc88cbe darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pageac50e8d5da644460b488f190b0455993 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page05182d75a3904c41ba5f24c9c5dc2906 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pageb9dd734459c34df1a9e376c03790828a darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page00be2d9f5cd14a12be1b09babbf0e78f darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageec105bb35429459d90549e66ab35e239 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page3f0078e7c32b406baaae6b83c82f3df7 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page24540245167b4805a58524e0b527a4aa darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page46b93e4818c140769c8d88a0059a6743 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagec5001a08f44a49258c4cd3bc23040eb7 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page92daaa548d934f7e90e352bb5fbeda76 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page2c06b6f424cc4127896b532c259661f7 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page976ea59a19564f95af5084ba77e27f15 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page7bb32eec4a6c461ea6158c3011bc250d darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

