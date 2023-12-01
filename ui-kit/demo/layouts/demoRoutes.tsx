
    import React, {lazy, useMemo} from 'react';
    import {createBrowserRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page35e880a1ecd641b78f117bf88dafc01b = lazy(() => import('./../pages/Page35e880a1ecd641b78f117bf88dafc01b'))
    const Page3dade87d7d9547cc940b4ffa80113005 = lazy(() => import('./../pages/Page3dade87d7d9547cc940b4ffa80113005'))

    const Page6553a52d36194456b31415238d76b201 = lazy(() => import('./../pages/Page6553a52d36194456b31415238d76b201'))
    const Paged93f9e95b67d49ad8e74b521755a1777 = lazy(() => import('./../pages/Paged93f9e95b67d49ad8e74b521755a1777'))
    const Pageffda3ca8d3ca446290abe783098cef05 = lazy(() => import('./../pages/Pageffda3ca8d3ca446290abe783098cef05'))
    const Pagecffbcbe1e85b4530831591de588f51d6 = lazy(() => import('./../pages/Pagecffbcbe1e85b4530831591de588f51d6'))
    const Pagee6becac057e2411187a3aeeba58a2eb5 = lazy(() => import('./../pages/Pagee6becac057e2411187a3aeeba58a2eb5'))
    const Page47fdc3829e0e4485aab2752dd352bfb0 = lazy(() => import('./../pages/Page47fdc3829e0e4485aab2752dd352bfb0'))
    const Page4662a291bfce477ca29043cdd6bb4cfd = lazy(() => import('./../pages/Page4662a291bfce477ca29043cdd6bb4cfd'))
    const Page158fbf5104fd4c42bbd455ed8f9157b8 = lazy(() => import('./../pages/Page158fbf5104fd4c42bbd455ed8f9157b8'))
    const Page762d5b1c60df411a8072d7f287730493 = lazy(() => import('./../pages/Page762d5b1c60df411a8072d7f287730493'))

    const Page069294e59c144ca296be2c062ef9812d = lazy(() => import('./../pages/Page069294e59c144ca296be2c062ef9812d'))
    const Page6583c03ed73741fab78db6b0a5c143fb = lazy(() => import('./../pages/Page6583c03ed73741fab78db6b0a5c143fb'))

    const Page9b43d4f6a0464a49b9b568b50aee8630 = lazy(() => import('./../pages/Page9b43d4f6a0464a49b9b568b50aee8630'))
    const Page570a84fb9f2e4716abd9af88d00f75c1 = lazy(() => import('./../pages/Page570a84fb9f2e4716abd9af88d00f75c1'))
    const Page6518880eb0364707a858c4a3726fda03 = lazy(() => import('./../pages/Page6518880eb0364707a858c4a3726fda03'))
    const Page7ec944bc219a40a9b32f38ead2df3de1 = lazy(() => import('./../pages/Page7ec944bc219a40a9b32f38ead2df3de1'))
    const Page63e3040b1be64841bf9332bb9dcf2e78 = lazy(() => import('./../pages/Page63e3040b1be64841bf9332bb9dcf2e78'))
    const Page0816ce3f28e343d3b2ccd9dcff3ac2f3 = lazy(() => import('./../pages/Page0816ce3f28e343d3b2ccd9dcff3ac2f3'))
    const Pageb552178630e74819926b8b97df648e3d = lazy(() => import('./../pages/Pageb552178630e74819926b8b97df648e3d'))
    const Pageecd5ccc03d6f42918aad95c962c88358 = lazy(() => import('./../pages/Pageecd5ccc03d6f42918aad95c962c88358'))
    const Pagee355244111b44891b04bd32347fc2781 = lazy(() => import('./../pages/Pagee355244111b44891b04bd32347fc2781'))
    const Page69de4f9f731c4b0f89417ac58627ad17 = lazy(() => import('./../pages/Page69de4f9f731c4b0f89417ac58627ad17'))
    const Page1bbcbc3ecf3941e5a524ba49bbd5986c = lazy(() => import('./../pages/Page1bbcbc3ecf3941e5a524ba49bbd5986c'))

    const Pageec1e7d5a23304bbf945cd9f92e031d89 = lazy(() => import('./../pages/Pageec1e7d5a23304bbf945cd9f92e031d89'))
    const Page237c1bafcfbf48eaab3cc2d64a3c4100 = lazy(() => import('./../pages/Page237c1bafcfbf48eaab3cc2d64a3c4100'))
    const Page0c9f79f296e945d09a3853d0f22e385d = lazy(() => import('./../pages/Page0c9f79f296e945d09a3853d0f22e385d'))
    const Pageb1d4f8b153bc4da2a1b2c90d596ece0e = lazy(() => import('./../pages/Pageb1d4f8b153bc4da2a1b2c90d596ece0e'))
    const Page88efa57a7f6a4fcebd530f199de1e699 = lazy(() => import('./../pages/Page88efa57a7f6a4fcebd530f199de1e699'))
    const Pagec5725d56656841c9930966d558ff1446 = lazy(() => import('./../pages/Pagec5725d56656841c9930966d558ff1446'))
    const Page48978e54a88d4d57950e286686271da9 = lazy(() => import('./../pages/Page48978e54a88d4d57950e286686271da9'))

    const Page3bf8b3c448b14ee1be64d06c005c2496 = lazy(() => import('./../pages/Page3bf8b3c448b14ee1be64d06c005c2496'))
    const Pageda053129e0014e2aa35b7d42bc0e0035 = lazy(() => import('./../pages/Pageda053129e0014e2aa35b7d42bc0e0035'))
    const Pagee4277d92c4cc41c5aafa99c58b1b5fec = lazy(() => import('./../pages/Pagee4277d92c4cc41c5aafa99c58b1b5fec'))
    const Pagee3beb4e70197479aa61896183d3a614f = lazy(() => import('./../pages/Pagee3beb4e70197479aa61896183d3a614f'))
    const Pagefa54aac7f19d4d3bad472c583a7cffda = lazy(() => import('./../pages/Pagefa54aac7f19d4d3bad472c583a7cffda'))
    const Pagedbf5aa9db52f4e14bb6cacf054b74431 = lazy(() => import('./../pages/Pagedbf5aa9db52f4e14bb6cacf054b74431'))
    const Page2fae0e3a9fc142a1a103e6c7b5a06a72 = lazy(() => import('./../pages/Page2fae0e3a9fc142a1a103e6c7b5a06a72'))
    const Page3abb18bbc939473f9373540702217a25 = lazy(() => import('./../pages/Page3abb18bbc939473f9373540702217a25'))
    const Paged6d70d94f16649e8bbdb08109e7d718e = lazy(() => import('./../pages/Paged6d70d94f16649e8bbdb08109e7d718e'))
    const Paged23ec987cf3b40f49f0c8b83446bef8f = lazy(() => import('./../pages/Paged23ec987cf3b40f49f0c8b83446bef8f'))
    const Page91d4746798d548a8a983b804c3f1df03 = lazy(() => import('./../pages/Page91d4746798d548a8a983b804c3f1df03'))
    const Page059f90ac2d2a48b6b61fe17c0adf09e6 = lazy(() => import('./../pages/Page059f90ac2d2a48b6b61fe17c0adf09e6'))
    const Page3eddf3a01a7241238e50dc4a100c52a8 = lazy(() => import('./../pages/Page3eddf3a01a7241238e50dc4a100c52a8'))

    const Pagec5bf646bb2e8495fb42fbd245186f322 = lazy(() => import('./../pages/Pagec5bf646bb2e8495fb42fbd245186f322'))

    const Page15c7ff19f7ab4ca986dbb079889f8261 = lazy(() => import('./../pages/Page15c7ff19f7ab4ca986dbb079889f8261'))
    const Paged59f37dbb8a643aeb6175291214dda6b = lazy(() => import('./../pages/Paged59f37dbb8a643aeb6175291214dda6b'))
    const Page403eb81dc09e47eaa8d1f91425f0c470 = lazy(() => import('./../pages/Page403eb81dc09e47eaa8d1f91425f0c470'))
    const Page8c246653122849c5b4bba365b192712c = lazy(() => import('./../pages/Page8c246653122849c5b4bba365b192712c'))
    const Pagebcdf41cda1284647b8ad3a6cd3622e91 = lazy(() => import('./../pages/Pagebcdf41cda1284647b8ad3a6cd3622e91'))
    const Page924cd46bce994d8484fe548e883c7d80 = lazy(() => import('./../pages/Page924cd46bce994d8484fe548e883c7d80'))
    const Page8868134efbe645e0ba30580170ee2630 = lazy(() => import('./../pages/Page8868134efbe645e0ba30580170ee2630'))
    const Page51a3f6908b7f417b8ad6b88699127c75 = lazy(() => import('./../pages/Page51a3f6908b7f417b8ad6b88699127c75'))
    const Page8d5b23e16ecc45b2b97aa3b0a326a762 = lazy(() => import('./../pages/Page8d5b23e16ecc45b2b97aa3b0a326a762'))

    const Page5a99c21090c944169cceeb470ee51ef2 = lazy(() => import('./../pages/Page5a99c21090c944169cceeb470ee51ef2'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createBrowserRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page35e880a1ecd641b78f117bf88dafc01b darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page3dade87d7d9547cc940b4ffa80113005 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page6553a52d36194456b31415238d76b201 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Paged93f9e95b67d49ad8e74b521755a1777 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pageffda3ca8d3ca446290abe783098cef05 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagecffbcbe1e85b4530831591de588f51d6 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagee6becac057e2411187a3aeeba58a2eb5 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page47fdc3829e0e4485aab2752dd352bfb0 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page4662a291bfce477ca29043cdd6bb4cfd darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page158fbf5104fd4c42bbd455ed8f9157b8 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page762d5b1c60df411a8072d7f287730493 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page069294e59c144ca296be2c062ef9812d darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page6583c03ed73741fab78db6b0a5c143fb darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page9b43d4f6a0464a49b9b568b50aee8630 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page570a84fb9f2e4716abd9af88d00f75c1 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page6518880eb0364707a858c4a3726fda03 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page7ec944bc219a40a9b32f38ead2df3de1 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page63e3040b1be64841bf9332bb9dcf2e78 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page0816ce3f28e343d3b2ccd9dcff3ac2f3 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pageb552178630e74819926b8b97df648e3d darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pageecd5ccc03d6f42918aad95c962c88358 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagee355244111b44891b04bd32347fc2781 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page69de4f9f731c4b0f89417ac58627ad17 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page1bbcbc3ecf3941e5a524ba49bbd5986c darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageec1e7d5a23304bbf945cd9f92e031d89 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page237c1bafcfbf48eaab3cc2d64a3c4100 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page0c9f79f296e945d09a3853d0f22e385d darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pageb1d4f8b153bc4da2a1b2c90d596ece0e darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page88efa57a7f6a4fcebd530f199de1e699 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagec5725d56656841c9930966d558ff1446 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page48978e54a88d4d57950e286686271da9 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page3bf8b3c448b14ee1be64d06c005c2496 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pageda053129e0014e2aa35b7d42bc0e0035 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pagee4277d92c4cc41c5aafa99c58b1b5fec darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagee3beb4e70197479aa61896183d3a614f darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pagefa54aac7f19d4d3bad472c583a7cffda darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagedbf5aa9db52f4e14bb6cacf054b74431 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page2fae0e3a9fc142a1a103e6c7b5a06a72 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page3abb18bbc939473f9373540702217a25 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Paged6d70d94f16649e8bbdb08109e7d718e darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Paged23ec987cf3b40f49f0c8b83446bef8f darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page91d4746798d548a8a983b804c3f1df03 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page059f90ac2d2a48b6b61fe17c0adf09e6 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page3eddf3a01a7241238e50dc4a100c52a8 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagec5bf646bb2e8495fb42fbd245186f322 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page15c7ff19f7ab4ca986dbb079889f8261 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Paged59f37dbb8a643aeb6175291214dda6b darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page403eb81dc09e47eaa8d1f91425f0c470 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page8c246653122849c5b4bba365b192712c darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagebcdf41cda1284647b8ad3a6cd3622e91 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page924cd46bce994d8484fe548e883c7d80 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page8868134efbe645e0ba30580170ee2630 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page51a3f6908b7f417b8ad6b88699127c75 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page8d5b23e16ecc45b2b97aa3b0a326a762 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page5a99c21090c944169cceeb470ee51ef2 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

