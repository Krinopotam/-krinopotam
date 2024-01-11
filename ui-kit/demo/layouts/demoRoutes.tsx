
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1eb7abd71eab4ada9755031f2e5b20a0 = lazy(() => import('./../pages/Page1eb7abd71eab4ada9755031f2e5b20a0'))
    const Page8d43089d68a048659f71db073a084c62 = lazy(() => import('./../pages/Page8d43089d68a048659f71db073a084c62'))

    const Pageeaa1fe970e6f44debbb104eb19bd5691 = lazy(() => import('./../pages/Pageeaa1fe970e6f44debbb104eb19bd5691'))
    const Pageaa01d4aa9bcc4077a52a79c827fd614c = lazy(() => import('./../pages/Pageaa01d4aa9bcc4077a52a79c827fd614c'))
    const Pagefd69bccb0d174ebb8d79e12acf2f33ff = lazy(() => import('./../pages/Pagefd69bccb0d174ebb8d79e12acf2f33ff'))
    const Page95dcd5b4cf974ae787b8b1a21b537837 = lazy(() => import('./../pages/Page95dcd5b4cf974ae787b8b1a21b537837'))
    const Page41f2da9e832049689b133e377ac78d01 = lazy(() => import('./../pages/Page41f2da9e832049689b133e377ac78d01'))
    const Page6c9bd88d441447668500029cc78009b0 = lazy(() => import('./../pages/Page6c9bd88d441447668500029cc78009b0'))
    const Page604de49a04954bb0a9569cb90bddf4b8 = lazy(() => import('./../pages/Page604de49a04954bb0a9569cb90bddf4b8'))
    const Page0740ea4c023f48c9bcd9b673031708aa = lazy(() => import('./../pages/Page0740ea4c023f48c9bcd9b673031708aa'))
    const Page4bad8d55ddbc43a5aa6e1dfebe9433d0 = lazy(() => import('./../pages/Page4bad8d55ddbc43a5aa6e1dfebe9433d0'))

    const Pagec83ffb56b8054fce999d513bb192865f = lazy(() => import('./../pages/Pagec83ffb56b8054fce999d513bb192865f'))
    const Pageeb47e1457654430bab4939ca117381fb = lazy(() => import('./../pages/Pageeb47e1457654430bab4939ca117381fb'))

    const Page389dc494e86d4acd8168657e6c6e59be = lazy(() => import('./../pages/Page389dc494e86d4acd8168657e6c6e59be'))
    const Pagec97cd202d0984032871c86dd2e24524c = lazy(() => import('./../pages/Pagec97cd202d0984032871c86dd2e24524c'))
    const Page9877429e34fc4a5396597eb415741704 = lazy(() => import('./../pages/Page9877429e34fc4a5396597eb415741704'))
    const Pagee6b6759536b6458294369436b1c5a488 = lazy(() => import('./../pages/Pagee6b6759536b6458294369436b1c5a488'))
    const Page2cbcd1efa8c549ceb91cc117164121c5 = lazy(() => import('./../pages/Page2cbcd1efa8c549ceb91cc117164121c5'))
    const Page603ce83976a74949b41a9f84077fa551 = lazy(() => import('./../pages/Page603ce83976a74949b41a9f84077fa551'))
    const Page4f687a4545de4c41a912bd73a6e13e8a = lazy(() => import('./../pages/Page4f687a4545de4c41a912bd73a6e13e8a'))
    const Page531ebfc0314f49b4852e35d0e340ddcf = lazy(() => import('./../pages/Page531ebfc0314f49b4852e35d0e340ddcf'))
    const Page2cf906f27da94a5c94a88bec9016e71b = lazy(() => import('./../pages/Page2cf906f27da94a5c94a88bec9016e71b'))
    const Page61c3b6a4c7f54de0b5a453028d89aa63 = lazy(() => import('./../pages/Page61c3b6a4c7f54de0b5a453028d89aa63'))
    const Page9769c07b6eda49478b4ad99c32b3be2a = lazy(() => import('./../pages/Page9769c07b6eda49478b4ad99c32b3be2a'))
    const Paged5e63cf2947d4181a64ccff68acaa4db = lazy(() => import('./../pages/Paged5e63cf2947d4181a64ccff68acaa4db'))
    const Page9a8f85f1283a466085f5ff8ad6faf25a = lazy(() => import('./../pages/Page9a8f85f1283a466085f5ff8ad6faf25a'))
    const Page1e797c60e9e4413da6a4a0c44fe6cbc9 = lazy(() => import('./../pages/Page1e797c60e9e4413da6a4a0c44fe6cbc9'))

    const Page3b4986cc9856465f8c8ebed119f6c245 = lazy(() => import('./../pages/Page3b4986cc9856465f8c8ebed119f6c245'))
    const Pageae60e0a85b9d439cad740895ad21c804 = lazy(() => import('./../pages/Pageae60e0a85b9d439cad740895ad21c804'))
    const Pagef0d1fa2858ad4b9e900e434b61ebe558 = lazy(() => import('./../pages/Pagef0d1fa2858ad4b9e900e434b61ebe558'))
    const Page754e84b12fad4827b6dfc20bd233072e = lazy(() => import('./../pages/Page754e84b12fad4827b6dfc20bd233072e'))
    const Page261845b2506249a3b67e8dfa93265a71 = lazy(() => import('./../pages/Page261845b2506249a3b67e8dfa93265a71'))
    const Page0f9eb559b4a241818d8eade04a263873 = lazy(() => import('./../pages/Page0f9eb559b4a241818d8eade04a263873'))
    const Page6cbf202c88b44d84aa87cefcc5971171 = lazy(() => import('./../pages/Page6cbf202c88b44d84aa87cefcc5971171'))
    const Page646ebec869744ab9ad07500765ab709e = lazy(() => import('./../pages/Page646ebec869744ab9ad07500765ab709e'))

    const Page61c17a0a87be4370a0c03775352c3758 = lazy(() => import('./../pages/Page61c17a0a87be4370a0c03775352c3758'))
    const Page2229b4c58b994dfa94e449add2e2d768 = lazy(() => import('./../pages/Page2229b4c58b994dfa94e449add2e2d768'))
    const Page1116ff2a49fa46bdaa892a1e4e5dc48f = lazy(() => import('./../pages/Page1116ff2a49fa46bdaa892a1e4e5dc48f'))
    const Page404e5d3795144c619516f344bc20abd0 = lazy(() => import('./../pages/Page404e5d3795144c619516f344bc20abd0'))
    const Page57ddade166c44220b40306d3d471a6f9 = lazy(() => import('./../pages/Page57ddade166c44220b40306d3d471a6f9'))
    const Paged89551e670c7482c96bced58fc811efb = lazy(() => import('./../pages/Paged89551e670c7482c96bced58fc811efb'))
    const Pagebb81469ad3ba4a50a526d30b7d3ca401 = lazy(() => import('./../pages/Pagebb81469ad3ba4a50a526d30b7d3ca401'))
    const Page566f7d52c35f4babbf88fd5a715fef31 = lazy(() => import('./../pages/Page566f7d52c35f4babbf88fd5a715fef31'))
    const Pagecd1fd483758142469232f940ffbd09ab = lazy(() => import('./../pages/Pagecd1fd483758142469232f940ffbd09ab'))
    const Page739f75734c33447ba87b6835f7886faf = lazy(() => import('./../pages/Page739f75734c33447ba87b6835f7886faf'))
    const Pagedb8e0e5b33ae4a349d6e06a6b887ed85 = lazy(() => import('./../pages/Pagedb8e0e5b33ae4a349d6e06a6b887ed85'))
    const Page386719cbbbdf400ebb808aa2558e45a3 = lazy(() => import('./../pages/Page386719cbbbdf400ebb808aa2558e45a3'))
    const Pagedd0d59b68b1c423ea70ad4d519e0cd24 = lazy(() => import('./../pages/Pagedd0d59b68b1c423ea70ad4d519e0cd24'))

    const Pageeb37194f29a147029e65dc0349e2d6d3 = lazy(() => import('./../pages/Pageeb37194f29a147029e65dc0349e2d6d3'))

    const Page7acf0a626f294c9b945ae4b65561f9a4 = lazy(() => import('./../pages/Page7acf0a626f294c9b945ae4b65561f9a4'))
    const Pageba6d276ba0074c7896b9aba1ea48f487 = lazy(() => import('./../pages/Pageba6d276ba0074c7896b9aba1ea48f487'))
    const Pagef56786e5b15d439dbdaac0563f62a3f3 = lazy(() => import('./../pages/Pagef56786e5b15d439dbdaac0563f62a3f3'))
    const Page1d29d4d3eb15427b85ae742942997ff9 = lazy(() => import('./../pages/Page1d29d4d3eb15427b85ae742942997ff9'))
    const Page747f89cde0924693b81918b34c468842 = lazy(() => import('./../pages/Page747f89cde0924693b81918b34c468842'))
    const Pagec51ad3f4486f4ed38aee32a75ebe1fba = lazy(() => import('./../pages/Pagec51ad3f4486f4ed38aee32a75ebe1fba'))
    const Pageeca10b38ae6a4fd58ed20136cefd6eb8 = lazy(() => import('./../pages/Pageeca10b38ae6a4fd58ed20136cefd6eb8'))
    const Page41496db70c5141c6901bb046d31c4ecc = lazy(() => import('./../pages/Page41496db70c5141c6901bb046d31c4ecc'))
    const Pagee72f08eb29e24fcda3348acdd1dc08f6 = lazy(() => import('./../pages/Pagee72f08eb29e24fcda3348acdd1dc08f6'))

    const Page7d60fa76031e49c79a49ed2d9f8369fa = lazy(() => import('./../pages/Page7d60fa76031e49c79a49ed2d9f8369fa'))


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
                        {path:"FormSubmitting", element:<Page1eb7abd71eab4ada9755031f2e5b20a0 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page8d43089d68a048659f71db073a084c62 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pageeaa1fe970e6f44debbb104eb19bd5691 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageaa01d4aa9bcc4077a52a79c827fd614c darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagefd69bccb0d174ebb8d79e12acf2f33ff darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page95dcd5b4cf974ae787b8b1a21b537837 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page41f2da9e832049689b133e377ac78d01 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page6c9bd88d441447668500029cc78009b0 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page604de49a04954bb0a9569cb90bddf4b8 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page0740ea4c023f48c9bcd9b673031708aa darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page4bad8d55ddbc43a5aa6e1dfebe9433d0 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagec83ffb56b8054fce999d513bb192865f darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pageeb47e1457654430bab4939ca117381fb darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page389dc494e86d4acd8168657e6c6e59be darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagec97cd202d0984032871c86dd2e24524c darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page9877429e34fc4a5396597eb415741704 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagee6b6759536b6458294369436b1c5a488 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page2cbcd1efa8c549ceb91cc117164121c5 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page603ce83976a74949b41a9f84077fa551 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page4f687a4545de4c41a912bd73a6e13e8a darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page531ebfc0314f49b4852e35d0e340ddcf darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page2cf906f27da94a5c94a88bec9016e71b darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page61c3b6a4c7f54de0b5a453028d89aa63 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page9769c07b6eda49478b4ad99c32b3be2a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Paged5e63cf2947d4181a64ccff68acaa4db darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page9a8f85f1283a466085f5ff8ad6faf25a darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page1e797c60e9e4413da6a4a0c44fe6cbc9 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page3b4986cc9856465f8c8ebed119f6c245 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pageae60e0a85b9d439cad740895ad21c804 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pagef0d1fa2858ad4b9e900e434b61ebe558 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page754e84b12fad4827b6dfc20bd233072e darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page261845b2506249a3b67e8dfa93265a71 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page0f9eb559b4a241818d8eade04a263873 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page6cbf202c88b44d84aa87cefcc5971171 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page646ebec869744ab9ad07500765ab709e darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page61c17a0a87be4370a0c03775352c3758 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page2229b4c58b994dfa94e449add2e2d768 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page1116ff2a49fa46bdaa892a1e4e5dc48f darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page404e5d3795144c619516f344bc20abd0 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page57ddade166c44220b40306d3d471a6f9 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Paged89551e670c7482c96bced58fc811efb darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagebb81469ad3ba4a50a526d30b7d3ca401 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page566f7d52c35f4babbf88fd5a715fef31 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagecd1fd483758142469232f940ffbd09ab darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page739f75734c33447ba87b6835f7886faf darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagedb8e0e5b33ae4a349d6e06a6b887ed85 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page386719cbbbdf400ebb808aa2558e45a3 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagedd0d59b68b1c423ea70ad4d519e0cd24 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pageeb37194f29a147029e65dc0349e2d6d3 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page7acf0a626f294c9b945ae4b65561f9a4 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageba6d276ba0074c7896b9aba1ea48f487 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagef56786e5b15d439dbdaac0563f62a3f3 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page1d29d4d3eb15427b85ae742942997ff9 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page747f89cde0924693b81918b34c468842 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagec51ad3f4486f4ed38aee32a75ebe1fba darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pageeca10b38ae6a4fd58ed20136cefd6eb8 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page41496db70c5141c6901bb046d31c4ecc darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagee72f08eb29e24fcda3348acdd1dc08f6 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page7d60fa76031e49c79a49ed2d9f8369fa darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

