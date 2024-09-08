
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1a2d03fd190741c5828863ca434f9392 = lazy(() => import('./../pages/Page1a2d03fd190741c5828863ca434f9392'))

    const Page599d57cdc78e426abb677a9beff67851 = lazy(() => import('./../pages/Page599d57cdc78e426abb677a9beff67851'))
    const Page6ce9ca74ac67468dbbeaf1080d868f63 = lazy(() => import('./../pages/Page6ce9ca74ac67468dbbeaf1080d868f63'))

    const Page74952ad5e2ef46199f750ce9cea8cd69 = lazy(() => import('./../pages/Page74952ad5e2ef46199f750ce9cea8cd69'))
    const Page09fae7f4e551439ebfc6bcca03ed74f7 = lazy(() => import('./../pages/Page09fae7f4e551439ebfc6bcca03ed74f7'))
    const Page8f16f0283d7a4e688241eaf01f4b3bb4 = lazy(() => import('./../pages/Page8f16f0283d7a4e688241eaf01f4b3bb4'))
    const Pageb68cd52311ae4616a5f468583a7a1399 = lazy(() => import('./../pages/Pageb68cd52311ae4616a5f468583a7a1399'))
    const Page2faf7e569df749b588b436d2bc5bb028 = lazy(() => import('./../pages/Page2faf7e569df749b588b436d2bc5bb028'))
    const Pagec7dac0e8610843a09580b3f624cf6750 = lazy(() => import('./../pages/Pagec7dac0e8610843a09580b3f624cf6750'))
    const Pagee8c81b976aeb47f29395df00c08b9c60 = lazy(() => import('./../pages/Pagee8c81b976aeb47f29395df00c08b9c60'))
    const Page3b0d2e4d67bb47b09f60ab31c8a7ac80 = lazy(() => import('./../pages/Page3b0d2e4d67bb47b09f60ab31c8a7ac80'))
    const Page4a2f454fa4b74b41b8031f2ca9ab757c = lazy(() => import('./../pages/Page4a2f454fa4b74b41b8031f2ca9ab757c'))
    const Page00a7c5702d8d4576aeac00881af0894d = lazy(() => import('./../pages/Page00a7c5702d8d4576aeac00881af0894d'))

    const Pagee0509f211de447f3a769cd4bfdf7f14d = lazy(() => import('./../pages/Pagee0509f211de447f3a769cd4bfdf7f14d'))
    const Page63e9a72ae442493c8f2007c93c2823b1 = lazy(() => import('./../pages/Page63e9a72ae442493c8f2007c93c2823b1'))
    const Pagebf95ed3d09e84bdbbaad3fd2939d3324 = lazy(() => import('./../pages/Pagebf95ed3d09e84bdbbaad3fd2939d3324'))

    const Page580d728aebe54d149c7d19a35421f1a5 = lazy(() => import('./../pages/Page580d728aebe54d149c7d19a35421f1a5'))
    const Page96a5e951fc934b489d5d45e34d057aec = lazy(() => import('./../pages/Page96a5e951fc934b489d5d45e34d057aec'))
    const Pagee6ba849b30074c559f7b0607ee6894e1 = lazy(() => import('./../pages/Pagee6ba849b30074c559f7b0607ee6894e1'))
    const Page9ab50259468f45df9c2f5ef1626bfb5a = lazy(() => import('./../pages/Page9ab50259468f45df9c2f5ef1626bfb5a'))
    const Page93dfe74e9ff74098a110cca3e17dd68c = lazy(() => import('./../pages/Page93dfe74e9ff74098a110cca3e17dd68c'))
    const Page24f0b52f84094fa6a571b133d6dbd5ef = lazy(() => import('./../pages/Page24f0b52f84094fa6a571b133d6dbd5ef'))
    const Pageb1c63825bf98498980eb652d2502585a = lazy(() => import('./../pages/Pageb1c63825bf98498980eb652d2502585a'))
    const Pageaf83ac1ad8ca4888b423c6d2a51652d4 = lazy(() => import('./../pages/Pageaf83ac1ad8ca4888b423c6d2a51652d4'))
    const Page8c0d4ce99b0b464fa247fa47842bd594 = lazy(() => import('./../pages/Page8c0d4ce99b0b464fa247fa47842bd594'))
    const Page57c5b5c310274e11a8d781232e4fad70 = lazy(() => import('./../pages/Page57c5b5c310274e11a8d781232e4fad70'))
    const Page289e2aad6c3c43878c16faa314b51f43 = lazy(() => import('./../pages/Page289e2aad6c3c43878c16faa314b51f43'))
    const Page4f2521f210ea4f62849a6f1e4447a260 = lazy(() => import('./../pages/Page4f2521f210ea4f62849a6f1e4447a260'))
    const Page658e041773f74e4897b2535be3d6c262 = lazy(() => import('./../pages/Page658e041773f74e4897b2535be3d6c262'))
    const Page6df2758321964dd78649635bc6abd3a9 = lazy(() => import('./../pages/Page6df2758321964dd78649635bc6abd3a9'))

    const Pageb0146ecc24c44356988a5521184221d7 = lazy(() => import('./../pages/Pageb0146ecc24c44356988a5521184221d7'))

    const Pagedbea4d64b3954e5f8925ba2f5e319ac6 = lazy(() => import('./../pages/Pagedbea4d64b3954e5f8925ba2f5e319ac6'))
    const Page005174bb644347ed98f7d387bddc8b94 = lazy(() => import('./../pages/Page005174bb644347ed98f7d387bddc8b94'))
    const Page30d133cd6d9c44e7b0f0effc66082908 = lazy(() => import('./../pages/Page30d133cd6d9c44e7b0f0effc66082908'))
    const Page4dc648dc77b04500927bcc3284bc32f1 = lazy(() => import('./../pages/Page4dc648dc77b04500927bcc3284bc32f1'))
    const Page0f54d16ead474d9db14083e60c04480d = lazy(() => import('./../pages/Page0f54d16ead474d9db14083e60c04480d'))
    const Page400c624bdd5344a98e8e9173cdbff809 = lazy(() => import('./../pages/Page400c624bdd5344a98e8e9173cdbff809'))
    const Page5c8e15dd502c46b7b3651f9d04d64ddf = lazy(() => import('./../pages/Page5c8e15dd502c46b7b3651f9d04d64ddf'))
    const Pageb8c078ac3f9c4e34af55f34322204104 = lazy(() => import('./../pages/Pageb8c078ac3f9c4e34af55f34322204104'))

    const Page8d12e2df484e44029987b41b59894cb2 = lazy(() => import('./../pages/Page8d12e2df484e44029987b41b59894cb2'))
    const Page9c3ffbe22ba04ed59f64928e626e5c24 = lazy(() => import('./../pages/Page9c3ffbe22ba04ed59f64928e626e5c24'))
    const Page53587eccb69c4ff9a39e481d2dd714fc = lazy(() => import('./../pages/Page53587eccb69c4ff9a39e481d2dd714fc'))
    const Pagefe1342eaf5d347699d2b671edb6fc3f4 = lazy(() => import('./../pages/Pagefe1342eaf5d347699d2b671edb6fc3f4'))
    const Page392f8b333993438cb32ff9d0c2b3f853 = lazy(() => import('./../pages/Page392f8b333993438cb32ff9d0c2b3f853'))
    const Paged600fc541f2344e6b9dd81362157023f = lazy(() => import('./../pages/Paged600fc541f2344e6b9dd81362157023f'))
    const Pagecd6f88b3ac8642a79bc81fb19dc44d0b = lazy(() => import('./../pages/Pagecd6f88b3ac8642a79bc81fb19dc44d0b'))
    const Paged6b5900e2515411d9309af1f48ec402e = lazy(() => import('./../pages/Paged6b5900e2515411d9309af1f48ec402e'))
    const Page4cae2eb161ef4eddb0235681cb9d335c = lazy(() => import('./../pages/Page4cae2eb161ef4eddb0235681cb9d335c'))
    const Pageb07f8648d85e484e84d29966164bf3d2 = lazy(() => import('./../pages/Pageb07f8648d85e484e84d29966164bf3d2'))
    const Page7b7f29bf4fb0473ba8a0b0956791c6c9 = lazy(() => import('./../pages/Page7b7f29bf4fb0473ba8a0b0956791c6c9'))
    const Page1eff736e681e4d759be9e8753287d1eb = lazy(() => import('./../pages/Page1eff736e681e4d759be9e8753287d1eb'))
    const Page6e50801696c1435f90db451703b89835 = lazy(() => import('./../pages/Page6e50801696c1435f90db451703b89835'))
    const Pagec52ce330f389471f9453e308d087a17e = lazy(() => import('./../pages/Pagec52ce330f389471f9453e308d087a17e'))
    const Page16c161c5b1394b3eb86df76de0feddf5 = lazy(() => import('./../pages/Page16c161c5b1394b3eb86df76de0feddf5'))

    const Page7c387edac0094059a18b9e29acc8b80c = lazy(() => import('./../pages/Page7c387edac0094059a18b9e29acc8b80c'))

    const Paged34aee5db0bb4825af6c3ed5d321a5a0 = lazy(() => import('./../pages/Paged34aee5db0bb4825af6c3ed5d321a5a0'))
    const Pageb5d553826a154ce7bcdfe143adc6ac3f = lazy(() => import('./../pages/Pageb5d553826a154ce7bcdfe143adc6ac3f'))
    const Page8375b587d31d4d35a4af233c01673b61 = lazy(() => import('./../pages/Page8375b587d31d4d35a4af233c01673b61'))
    const Pageed31b1ad75fe4cd28c2584e55feb8b46 = lazy(() => import('./../pages/Pageed31b1ad75fe4cd28c2584e55feb8b46'))
    const Pagef9c05fb57f3b445780e1a140cdd8fa93 = lazy(() => import('./../pages/Pagef9c05fb57f3b445780e1a140cdd8fa93'))
    const Pagee97ee2936207409e8e8919a51af3efac = lazy(() => import('./../pages/Pagee97ee2936207409e8e8919a51af3efac'))
    const Page643f88f7b5444791b166bf56d6b5dd41 = lazy(() => import('./../pages/Page643f88f7b5444791b166bf56d6b5dd41'))
    const Page15906c107ebc49de833bf1667614cc51 = lazy(() => import('./../pages/Page15906c107ebc49de833bf1667614cc51'))
    const Pagee8d2409670b44f82bdb20b7995796cf4 = lazy(() => import('./../pages/Pagee8d2409670b44f82bdb20b7995796cf4'))

    const Page2c792dd3abdb4e6f99ed546dff76cc7a = lazy(() => import('./../pages/Page2c792dd3abdb4e6f99ed546dff76cc7a'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page1a2d03fd190741c5828863ca434f9392 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page599d57cdc78e426abb677a9beff67851 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page6ce9ca74ac67468dbbeaf1080d868f63 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page74952ad5e2ef46199f750ce9cea8cd69 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page09fae7f4e551439ebfc6bcca03ed74f7 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page8f16f0283d7a4e688241eaf01f4b3bb4 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pageb68cd52311ae4616a5f468583a7a1399 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page2faf7e569df749b588b436d2bc5bb028 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagec7dac0e8610843a09580b3f624cf6750 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagee8c81b976aeb47f29395df00c08b9c60 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page3b0d2e4d67bb47b09f60ab31c8a7ac80 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page4a2f454fa4b74b41b8031f2ca9ab757c darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page00a7c5702d8d4576aeac00881af0894d darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagee0509f211de447f3a769cd4bfdf7f14d darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page63e9a72ae442493c8f2007c93c2823b1 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagebf95ed3d09e84bdbbaad3fd2939d3324 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page580d728aebe54d149c7d19a35421f1a5 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page96a5e951fc934b489d5d45e34d057aec darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagee6ba849b30074c559f7b0607ee6894e1 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page9ab50259468f45df9c2f5ef1626bfb5a darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page93dfe74e9ff74098a110cca3e17dd68c darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page24f0b52f84094fa6a571b133d6dbd5ef darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageb1c63825bf98498980eb652d2502585a darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pageaf83ac1ad8ca4888b423c6d2a51652d4 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page8c0d4ce99b0b464fa247fa47842bd594 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page57c5b5c310274e11a8d781232e4fad70 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page289e2aad6c3c43878c16faa314b51f43 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page4f2521f210ea4f62849a6f1e4447a260 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page658e041773f74e4897b2535be3d6c262 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page6df2758321964dd78649635bc6abd3a9 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pageb0146ecc24c44356988a5521184221d7 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagedbea4d64b3954e5f8925ba2f5e319ac6 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page005174bb644347ed98f7d387bddc8b94 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page30d133cd6d9c44e7b0f0effc66082908 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page4dc648dc77b04500927bcc3284bc32f1 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page0f54d16ead474d9db14083e60c04480d darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page400c624bdd5344a98e8e9173cdbff809 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page5c8e15dd502c46b7b3651f9d04d64ddf darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pageb8c078ac3f9c4e34af55f34322204104 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page8d12e2df484e44029987b41b59894cb2 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page9c3ffbe22ba04ed59f64928e626e5c24 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page53587eccb69c4ff9a39e481d2dd714fc darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagefe1342eaf5d347699d2b671edb6fc3f4 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page392f8b333993438cb32ff9d0c2b3f853 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Paged600fc541f2344e6b9dd81362157023f darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pagecd6f88b3ac8642a79bc81fb19dc44d0b darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Paged6b5900e2515411d9309af1f48ec402e darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page4cae2eb161ef4eddb0235681cb9d335c darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb07f8648d85e484e84d29966164bf3d2 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page7b7f29bf4fb0473ba8a0b0956791c6c9 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page1eff736e681e4d759be9e8753287d1eb darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page6e50801696c1435f90db451703b89835 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagec52ce330f389471f9453e308d087a17e darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page16c161c5b1394b3eb86df76de0feddf5 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page7c387edac0094059a18b9e29acc8b80c darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Paged34aee5db0bb4825af6c3ed5d321a5a0 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageb5d553826a154ce7bcdfe143adc6ac3f darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page8375b587d31d4d35a4af233c01673b61 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pageed31b1ad75fe4cd28c2584e55feb8b46 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagef9c05fb57f3b445780e1a140cdd8fa93 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagee97ee2936207409e8e8919a51af3efac darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page643f88f7b5444791b166bf56d6b5dd41 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page15906c107ebc49de833bf1667614cc51 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagee8d2409670b44f82bdb20b7995796cf4 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page2c792dd3abdb4e6f99ed546dff76cc7a darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

