
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagebc820a82c2ad408c91eb80d9d25c856b = lazy(() => import('./../pages/Pagebc820a82c2ad408c91eb80d9d25c856b'))
    const Page231c028175f649d099e72954c8f1f832 = lazy(() => import('./../pages/Page231c028175f649d099e72954c8f1f832'))

    const Page3d4a1e191b804714b08d7fc4bb0a488b = lazy(() => import('./../pages/Page3d4a1e191b804714b08d7fc4bb0a488b'))
    const Paged637ae3fa1d74d369a9a275853fb12c0 = lazy(() => import('./../pages/Paged637ae3fa1d74d369a9a275853fb12c0'))
    const Paged163922c45d840208169fcb1820bcd10 = lazy(() => import('./../pages/Paged163922c45d840208169fcb1820bcd10'))
    const Pagea7b0b7d12e1b4414b7a5ddb53c606d27 = lazy(() => import('./../pages/Pagea7b0b7d12e1b4414b7a5ddb53c606d27'))
    const Page2c3f38072c064667b4362d93c365f845 = lazy(() => import('./../pages/Page2c3f38072c064667b4362d93c365f845'))
    const Pagee17f967e5f8d4920b800461f90282512 = lazy(() => import('./../pages/Pagee17f967e5f8d4920b800461f90282512'))
    const Page05fc22b8f6334def87f30a9574bf9614 = lazy(() => import('./../pages/Page05fc22b8f6334def87f30a9574bf9614'))
    const Page422e79fd67f04b34997f8893df5a891a = lazy(() => import('./../pages/Page422e79fd67f04b34997f8893df5a891a'))
    const Page6ca0a4323ba242b0809f8985e31a7602 = lazy(() => import('./../pages/Page6ca0a4323ba242b0809f8985e31a7602'))

    const Page32865d29b74a4355be995bcaa8b843a4 = lazy(() => import('./../pages/Page32865d29b74a4355be995bcaa8b843a4'))
    const Pagef6a2847b418742008d82c80b965ebc16 = lazy(() => import('./../pages/Pagef6a2847b418742008d82c80b965ebc16'))
    const Page6089522a7f094dcc9304eb44eb44dbb7 = lazy(() => import('./../pages/Page6089522a7f094dcc9304eb44eb44dbb7'))

    const Pageb8624b4cde4c40dcb9f0756e9b808a4f = lazy(() => import('./../pages/Pageb8624b4cde4c40dcb9f0756e9b808a4f'))
    const Page736c9d07d7a049af9c9713418e930d7e = lazy(() => import('./../pages/Page736c9d07d7a049af9c9713418e930d7e'))
    const Page426998c16bd3405ebe216e46681ba84a = lazy(() => import('./../pages/Page426998c16bd3405ebe216e46681ba84a'))
    const Pagee4ef0b6587fd4aa4b6c134155eff1e9e = lazy(() => import('./../pages/Pagee4ef0b6587fd4aa4b6c134155eff1e9e'))
    const Page526cb0e9a47c40379572ec42bf7c38a1 = lazy(() => import('./../pages/Page526cb0e9a47c40379572ec42bf7c38a1'))
    const Pageece37ecdc6a345d3bd9a94fc6d30d5e5 = lazy(() => import('./../pages/Pageece37ecdc6a345d3bd9a94fc6d30d5e5'))
    const Pagec843069330f34f3499f9cddee1bd0d40 = lazy(() => import('./../pages/Pagec843069330f34f3499f9cddee1bd0d40'))
    const Page74d14e55cc5f4809aba88fd67e00189a = lazy(() => import('./../pages/Page74d14e55cc5f4809aba88fd67e00189a'))
    const Page3e321080c85a43f68b527dafe937d00b = lazy(() => import('./../pages/Page3e321080c85a43f68b527dafe937d00b'))
    const Page2fa13a67e1e1404dacf8024072022060 = lazy(() => import('./../pages/Page2fa13a67e1e1404dacf8024072022060'))
    const Page318ad00004d147c6a28f36c0d5e6f9e8 = lazy(() => import('./../pages/Page318ad00004d147c6a28f36c0d5e6f9e8'))
    const Pagef0e851fc9b864527836358c9ad342b43 = lazy(() => import('./../pages/Pagef0e851fc9b864527836358c9ad342b43'))
    const Pagefb5db4323d43467394c4c23e96b73553 = lazy(() => import('./../pages/Pagefb5db4323d43467394c4c23e96b73553'))
    const Page86eec517092f44f5bf272e3aa06eff38 = lazy(() => import('./../pages/Page86eec517092f44f5bf272e3aa06eff38'))

    const Pagef5cc668228a74d648b5292a320562e79 = lazy(() => import('./../pages/Pagef5cc668228a74d648b5292a320562e79'))

    const Page2727e84a11df49ccbff8cec58cfafc36 = lazy(() => import('./../pages/Page2727e84a11df49ccbff8cec58cfafc36'))
    const Page2b23e118d4944817b7769c0f1662b2e2 = lazy(() => import('./../pages/Page2b23e118d4944817b7769c0f1662b2e2'))
    const Page208d204051ca405bba26e9db67307265 = lazy(() => import('./../pages/Page208d204051ca405bba26e9db67307265'))
    const Pagececd757f8e0e411e8b48fe7fdda50683 = lazy(() => import('./../pages/Pagececd757f8e0e411e8b48fe7fdda50683'))
    const Page34b334db05d249209cf63ebd767f5769 = lazy(() => import('./../pages/Page34b334db05d249209cf63ebd767f5769'))
    const Page339b9fa8f16c4fd183b0c8e7bf2f190d = lazy(() => import('./../pages/Page339b9fa8f16c4fd183b0c8e7bf2f190d'))
    const Page04860c149a964529b764ac76d32d034a = lazy(() => import('./../pages/Page04860c149a964529b764ac76d32d034a'))
    const Page0c75833208a54f9aa4108def39cd9a0e = lazy(() => import('./../pages/Page0c75833208a54f9aa4108def39cd9a0e'))

    const Page5a5db341e18b4749bcfb84331da3807a = lazy(() => import('./../pages/Page5a5db341e18b4749bcfb84331da3807a'))
    const Page7fe5fde38e0e418da51b05fa6268402c = lazy(() => import('./../pages/Page7fe5fde38e0e418da51b05fa6268402c'))
    const Page8949dbe5cfa14a669d4547eacfb1d430 = lazy(() => import('./../pages/Page8949dbe5cfa14a669d4547eacfb1d430'))
    const Page1543744946664595bee9ba0bd58e4c5c = lazy(() => import('./../pages/Page1543744946664595bee9ba0bd58e4c5c'))
    const Page6eceea39521945208edff51d73061796 = lazy(() => import('./../pages/Page6eceea39521945208edff51d73061796'))
    const Page1ed1fa9201604b22a3e0ba945019d5a8 = lazy(() => import('./../pages/Page1ed1fa9201604b22a3e0ba945019d5a8'))
    const Page5b6432b7dacb4eda8018a78da634802b = lazy(() => import('./../pages/Page5b6432b7dacb4eda8018a78da634802b'))
    const Page283fe2f6ba584025931161076087cd9e = lazy(() => import('./../pages/Page283fe2f6ba584025931161076087cd9e'))
    const Page8ec0428a0cf64df1b4477603fd8d2eda = lazy(() => import('./../pages/Page8ec0428a0cf64df1b4477603fd8d2eda'))
    const Pageb2a3c226235d4acdb5e4bea0191f5ad7 = lazy(() => import('./../pages/Pageb2a3c226235d4acdb5e4bea0191f5ad7'))
    const Pageaed4150057a64a3eae22d8bf7fa795fd = lazy(() => import('./../pages/Pageaed4150057a64a3eae22d8bf7fa795fd'))
    const Page9e09fd9f36b44f4ba6ef132162b93411 = lazy(() => import('./../pages/Page9e09fd9f36b44f4ba6ef132162b93411'))
    const Pagee408a1941f084945a4e6da945466d415 = lazy(() => import('./../pages/Pagee408a1941f084945a4e6da945466d415'))
    const Page76a25bdae4a740a48d182e1782ca15da = lazy(() => import('./../pages/Page76a25bdae4a740a48d182e1782ca15da'))
    const Pagef2566626067a4843947dcd7623819659 = lazy(() => import('./../pages/Pagef2566626067a4843947dcd7623819659'))

    const Page87342191e2794c31bcdf23e86d7a8f8a = lazy(() => import('./../pages/Page87342191e2794c31bcdf23e86d7a8f8a'))

    const Page43dcfe62bddd405b8c7308b1973a42e3 = lazy(() => import('./../pages/Page43dcfe62bddd405b8c7308b1973a42e3'))
    const Page4b4dead6a5864e369cbde69c6e331c25 = lazy(() => import('./../pages/Page4b4dead6a5864e369cbde69c6e331c25'))
    const Page74a88f8528ba4bae9a7074ff465a4d5a = lazy(() => import('./../pages/Page74a88f8528ba4bae9a7074ff465a4d5a'))
    const Page09d8695b1a4e4edbb609a89a92d51158 = lazy(() => import('./../pages/Page09d8695b1a4e4edbb609a89a92d51158'))
    const Page7bad229a54ee4971bf208a3694d801ad = lazy(() => import('./../pages/Page7bad229a54ee4971bf208a3694d801ad'))
    const Pagebc8a40bf37bd4c189bc10521286d49fe = lazy(() => import('./../pages/Pagebc8a40bf37bd4c189bc10521286d49fe'))
    const Page0e14ed377c1140cdafe8c72024f3920a = lazy(() => import('./../pages/Page0e14ed377c1140cdafe8c72024f3920a'))
    const Pageed94b2efbb66460fa8750f4b4a508bb0 = lazy(() => import('./../pages/Pageed94b2efbb66460fa8750f4b4a508bb0'))
    const Pageb1705fd3e76f490898ac2f94b8ea4035 = lazy(() => import('./../pages/Pageb1705fd3e76f490898ac2f94b8ea4035'))

    const Page4dcca880080244c592b483003eeb5fbb = lazy(() => import('./../pages/Page4dcca880080244c592b483003eeb5fbb'))


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
                        {path:"FormSubmitting", element:<Pagebc820a82c2ad408c91eb80d9d25c856b darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page231c028175f649d099e72954c8f1f832 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page3d4a1e191b804714b08d7fc4bb0a488b darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Paged637ae3fa1d74d369a9a275853fb12c0 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Paged163922c45d840208169fcb1820bcd10 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagea7b0b7d12e1b4414b7a5ddb53c606d27 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page2c3f38072c064667b4362d93c365f845 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagee17f967e5f8d4920b800461f90282512 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page05fc22b8f6334def87f30a9574bf9614 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page422e79fd67f04b34997f8893df5a891a darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page6ca0a4323ba242b0809f8985e31a7602 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page32865d29b74a4355be995bcaa8b843a4 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagef6a2847b418742008d82c80b965ebc16 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page6089522a7f094dcc9304eb44eb44dbb7 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pageb8624b4cde4c40dcb9f0756e9b808a4f darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page736c9d07d7a049af9c9713418e930d7e darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page426998c16bd3405ebe216e46681ba84a darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Pagee4ef0b6587fd4aa4b6c134155eff1e9e darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page526cb0e9a47c40379572ec42bf7c38a1 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageece37ecdc6a345d3bd9a94fc6d30d5e5 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagec843069330f34f3499f9cddee1bd0d40 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page74d14e55cc5f4809aba88fd67e00189a darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page3e321080c85a43f68b527dafe937d00b darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page2fa13a67e1e1404dacf8024072022060 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page318ad00004d147c6a28f36c0d5e6f9e8 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagef0e851fc9b864527836358c9ad342b43 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagefb5db4323d43467394c4c23e96b73553 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page86eec517092f44f5bf272e3aa06eff38 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagef5cc668228a74d648b5292a320562e79 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page2727e84a11df49ccbff8cec58cfafc36 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page2b23e118d4944817b7769c0f1662b2e2 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page208d204051ca405bba26e9db67307265 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagececd757f8e0e411e8b48fe7fdda50683 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page34b334db05d249209cf63ebd767f5769 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page339b9fa8f16c4fd183b0c8e7bf2f190d darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page04860c149a964529b764ac76d32d034a darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page0c75833208a54f9aa4108def39cd9a0e darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page5a5db341e18b4749bcfb84331da3807a darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page7fe5fde38e0e418da51b05fa6268402c darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page8949dbe5cfa14a669d4547eacfb1d430 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page1543744946664595bee9ba0bd58e4c5c darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page6eceea39521945208edff51d73061796 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page1ed1fa9201604b22a3e0ba945019d5a8 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page5b6432b7dacb4eda8018a78da634802b darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page283fe2f6ba584025931161076087cd9e darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page8ec0428a0cf64df1b4477603fd8d2eda darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb2a3c226235d4acdb5e4bea0191f5ad7 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pageaed4150057a64a3eae22d8bf7fa795fd darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page9e09fd9f36b44f4ba6ef132162b93411 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagee408a1941f084945a4e6da945466d415 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page76a25bdae4a740a48d182e1782ca15da darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagef2566626067a4843947dcd7623819659 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page87342191e2794c31bcdf23e86d7a8f8a darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page43dcfe62bddd405b8c7308b1973a42e3 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page4b4dead6a5864e369cbde69c6e331c25 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page74a88f8528ba4bae9a7074ff465a4d5a darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page09d8695b1a4e4edbb609a89a92d51158 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page7bad229a54ee4971bf208a3694d801ad darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagebc8a40bf37bd4c189bc10521286d49fe darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page0e14ed377c1140cdafe8c72024f3920a darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageed94b2efbb66460fa8750f4b4a508bb0 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pageb1705fd3e76f490898ac2f94b8ea4035 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page4dcca880080244c592b483003eeb5fbb darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

