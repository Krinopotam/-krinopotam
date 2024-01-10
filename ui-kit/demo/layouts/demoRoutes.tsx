
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagef82f4dad0263456ea66f744331d02ad1 = lazy(() => import('./../pages/Pagef82f4dad0263456ea66f744331d02ad1'))
    const Page80f31644854a498885f476fdc2538257 = lazy(() => import('./../pages/Page80f31644854a498885f476fdc2538257'))

    const Pagea7d55b919a4a46aa85b51ffc4f770080 = lazy(() => import('./../pages/Pagea7d55b919a4a46aa85b51ffc4f770080'))
    const Page24b69d61454d4ffa927da82a7d471849 = lazy(() => import('./../pages/Page24b69d61454d4ffa927da82a7d471849'))
    const Page3f169469c22a412a80bf6ab3f973496e = lazy(() => import('./../pages/Page3f169469c22a412a80bf6ab3f973496e'))
    const Page50175dc71cf74b7a8dfde7b6f3696a61 = lazy(() => import('./../pages/Page50175dc71cf74b7a8dfde7b6f3696a61'))
    const Pagea3849f469ca94d3f8d58d25081331256 = lazy(() => import('./../pages/Pagea3849f469ca94d3f8d58d25081331256'))
    const Pagef24bcbd8d1a84709b38e09c0ffc0af8b = lazy(() => import('./../pages/Pagef24bcbd8d1a84709b38e09c0ffc0af8b'))
    const Page89852a0147174972b2fd5c8e7a7e8025 = lazy(() => import('./../pages/Page89852a0147174972b2fd5c8e7a7e8025'))
    const Pagee5503d9593fb410cbd2db04a6abec07e = lazy(() => import('./../pages/Pagee5503d9593fb410cbd2db04a6abec07e'))
    const Page57892cb4ab7a4fddb39c54cf0f592b66 = lazy(() => import('./../pages/Page57892cb4ab7a4fddb39c54cf0f592b66'))

    const Pageb0712a0094a04d39b3d297890c4ebb70 = lazy(() => import('./../pages/Pageb0712a0094a04d39b3d297890c4ebb70'))
    const Page19d205737cc549e290db6fc8d42d3566 = lazy(() => import('./../pages/Page19d205737cc549e290db6fc8d42d3566'))

    const Page4766903bdc8b4ff6bbf32fc03984f255 = lazy(() => import('./../pages/Page4766903bdc8b4ff6bbf32fc03984f255'))
    const Page9b54d58656244692bc5544780393e861 = lazy(() => import('./../pages/Page9b54d58656244692bc5544780393e861'))
    const Pageefd8dacb2cee4b95ac34e0ee51747f9c = lazy(() => import('./../pages/Pageefd8dacb2cee4b95ac34e0ee51747f9c'))
    const Page79322b4380cd478a9b38ce4a72fa3f0e = lazy(() => import('./../pages/Page79322b4380cd478a9b38ce4a72fa3f0e'))
    const Page53f7c4096e434e62b2a235ceffc8cfc2 = lazy(() => import('./../pages/Page53f7c4096e434e62b2a235ceffc8cfc2'))
    const Page3595c2bfe263474eba274eb52c75db9d = lazy(() => import('./../pages/Page3595c2bfe263474eba274eb52c75db9d'))
    const Page6ec461f64c88428fbaa84a2c6139aa42 = lazy(() => import('./../pages/Page6ec461f64c88428fbaa84a2c6139aa42'))
    const Pageb459687869814251b6a848d19548f1b5 = lazy(() => import('./../pages/Pageb459687869814251b6a848d19548f1b5'))
    const Page59e8b6edf53c4e85987973acbae42852 = lazy(() => import('./../pages/Page59e8b6edf53c4e85987973acbae42852'))
    const Pagef07a520c6f664bb28bd9e9e6003f5a49 = lazy(() => import('./../pages/Pagef07a520c6f664bb28bd9e9e6003f5a49'))
    const Page748c9c0988b1453d8b13355480bf8fe5 = lazy(() => import('./../pages/Page748c9c0988b1453d8b13355480bf8fe5'))
    const Pageebb356d026b2445a8a8c0fd37695aa99 = lazy(() => import('./../pages/Pageebb356d026b2445a8a8c0fd37695aa99'))
    const Pageefea7f5be02b47bfb7a12401cb17763c = lazy(() => import('./../pages/Pageefea7f5be02b47bfb7a12401cb17763c'))
    const Page4dc932f2d02a4b89a1e4277bc83413df = lazy(() => import('./../pages/Page4dc932f2d02a4b89a1e4277bc83413df'))

    const Pagefaf2508f8fdb48498a2d1719d7ae0ca6 = lazy(() => import('./../pages/Pagefaf2508f8fdb48498a2d1719d7ae0ca6'))
    const Paged8e7ac49ac5146fc9441c25a23121e5f = lazy(() => import('./../pages/Paged8e7ac49ac5146fc9441c25a23121e5f'))
    const Page8bed72444cdd4059ada21093b74e484a = lazy(() => import('./../pages/Page8bed72444cdd4059ada21093b74e484a'))
    const Pagef3f937317f2f4957ac4c142f3b5f283a = lazy(() => import('./../pages/Pagef3f937317f2f4957ac4c142f3b5f283a'))
    const Pageebd407f194484b6ca2f8b3e23d6da0dd = lazy(() => import('./../pages/Pageebd407f194484b6ca2f8b3e23d6da0dd'))
    const Page5db7e0f2a8cc413da33add5bc5d111e3 = lazy(() => import('./../pages/Page5db7e0f2a8cc413da33add5bc5d111e3'))
    const Page6a88b67ba91e489b9e877e912d9569ca = lazy(() => import('./../pages/Page6a88b67ba91e489b9e877e912d9569ca'))
    const Pagedd0086864bcf4144a70792861ab6f3d8 = lazy(() => import('./../pages/Pagedd0086864bcf4144a70792861ab6f3d8'))

    const Pageea3970566c4e4bf18ced8110ead28085 = lazy(() => import('./../pages/Pageea3970566c4e4bf18ced8110ead28085'))
    const Page7b2d1c470b234904978ed3fc22ff621b = lazy(() => import('./../pages/Page7b2d1c470b234904978ed3fc22ff621b'))
    const Page15fca4dc42ce4e49b15d19f09dec041a = lazy(() => import('./../pages/Page15fca4dc42ce4e49b15d19f09dec041a'))
    const Pagec749bcb9eb1b4be0be33898f7c2001ce = lazy(() => import('./../pages/Pagec749bcb9eb1b4be0be33898f7c2001ce'))
    const Page8e54875bf0494e40b09be5c18d3c4ab6 = lazy(() => import('./../pages/Page8e54875bf0494e40b09be5c18d3c4ab6'))
    const Page55170685b2054d6cbaa5bd28646a1867 = lazy(() => import('./../pages/Page55170685b2054d6cbaa5bd28646a1867'))
    const Page707eee6a469d41f29728b03cff2aa27d = lazy(() => import('./../pages/Page707eee6a469d41f29728b03cff2aa27d'))
    const Page62251c37dec54898b871be0f00e9dce8 = lazy(() => import('./../pages/Page62251c37dec54898b871be0f00e9dce8'))
    const Pageb2c0b11b39024a90988e49477f89bde6 = lazy(() => import('./../pages/Pageb2c0b11b39024a90988e49477f89bde6'))
    const Page9d1f282cddb94917b544ea5e32c14953 = lazy(() => import('./../pages/Page9d1f282cddb94917b544ea5e32c14953'))
    const Page16b674a98ec946489b2f323e6a688f5f = lazy(() => import('./../pages/Page16b674a98ec946489b2f323e6a688f5f'))
    const Page7362a30bea7944bd97e5218cb8f766e3 = lazy(() => import('./../pages/Page7362a30bea7944bd97e5218cb8f766e3'))
    const Paged732fc58ddf44fe4a756d10e766197e6 = lazy(() => import('./../pages/Paged732fc58ddf44fe4a756d10e766197e6'))

    const Page235ca4cf757444fab97817cc4c6d1f57 = lazy(() => import('./../pages/Page235ca4cf757444fab97817cc4c6d1f57'))

    const Page613566d9c0cf4e8ead55d768b40799c2 = lazy(() => import('./../pages/Page613566d9c0cf4e8ead55d768b40799c2'))
    const Page8c773c3136be4cd6b47808fa0d036ffa = lazy(() => import('./../pages/Page8c773c3136be4cd6b47808fa0d036ffa'))
    const Page375b0d929b8a4168bbd4712dd147061a = lazy(() => import('./../pages/Page375b0d929b8a4168bbd4712dd147061a'))
    const Page60cbd599ee2f4faf855a411999311ed6 = lazy(() => import('./../pages/Page60cbd599ee2f4faf855a411999311ed6'))
    const Pageec405febdbe64739b92fa99840e26c8b = lazy(() => import('./../pages/Pageec405febdbe64739b92fa99840e26c8b'))
    const Page3d643eaeda7e4bd7bb3606467d400fde = lazy(() => import('./../pages/Page3d643eaeda7e4bd7bb3606467d400fde'))
    const Page015d664ad956471f854c229affc86266 = lazy(() => import('./../pages/Page015d664ad956471f854c229affc86266'))
    const Pagef2b0b9738de34b77b92c8f074b379bdc = lazy(() => import('./../pages/Pagef2b0b9738de34b77b92c8f074b379bdc'))
    const Pagece94c4f1731b41e98fff31a3c1f02901 = lazy(() => import('./../pages/Pagece94c4f1731b41e98fff31a3c1f02901'))

    const Page3085b385cee14a94a5b62b6bb3fecaf9 = lazy(() => import('./../pages/Page3085b385cee14a94a5b62b6bb3fecaf9'))


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
                        {path:"FormSubmitting", element:<Pagef82f4dad0263456ea66f744331d02ad1 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page80f31644854a498885f476fdc2538257 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pagea7d55b919a4a46aa85b51ffc4f770080 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page24b69d61454d4ffa927da82a7d471849 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page3f169469c22a412a80bf6ab3f973496e darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page50175dc71cf74b7a8dfde7b6f3696a61 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagea3849f469ca94d3f8d58d25081331256 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagef24bcbd8d1a84709b38e09c0ffc0af8b darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page89852a0147174972b2fd5c8e7a7e8025 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagee5503d9593fb410cbd2db04a6abec07e darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page57892cb4ab7a4fddb39c54cf0f592b66 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pageb0712a0094a04d39b3d297890c4ebb70 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page19d205737cc549e290db6fc8d42d3566 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page4766903bdc8b4ff6bbf32fc03984f255 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page9b54d58656244692bc5544780393e861 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageefd8dacb2cee4b95ac34e0ee51747f9c darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page79322b4380cd478a9b38ce4a72fa3f0e darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page53f7c4096e434e62b2a235ceffc8cfc2 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page3595c2bfe263474eba274eb52c75db9d darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page6ec461f64c88428fbaa84a2c6139aa42 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageb459687869814251b6a848d19548f1b5 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page59e8b6edf53c4e85987973acbae42852 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pagef07a520c6f664bb28bd9e9e6003f5a49 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page748c9c0988b1453d8b13355480bf8fe5 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pageebb356d026b2445a8a8c0fd37695aa99 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pageefea7f5be02b47bfb7a12401cb17763c darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page4dc932f2d02a4b89a1e4277bc83413df darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagefaf2508f8fdb48498a2d1719d7ae0ca6 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Paged8e7ac49ac5146fc9441c25a23121e5f darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page8bed72444cdd4059ada21093b74e484a darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagef3f937317f2f4957ac4c142f3b5f283a darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pageebd407f194484b6ca2f8b3e23d6da0dd darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page5db7e0f2a8cc413da33add5bc5d111e3 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page6a88b67ba91e489b9e877e912d9569ca darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagedd0086864bcf4144a70792861ab6f3d8 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pageea3970566c4e4bf18ced8110ead28085 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page7b2d1c470b234904978ed3fc22ff621b darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page15fca4dc42ce4e49b15d19f09dec041a darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagec749bcb9eb1b4be0be33898f7c2001ce darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page8e54875bf0494e40b09be5c18d3c4ab6 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page55170685b2054d6cbaa5bd28646a1867 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page707eee6a469d41f29728b03cff2aa27d darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page62251c37dec54898b871be0f00e9dce8 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pageb2c0b11b39024a90988e49477f89bde6 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page9d1f282cddb94917b544ea5e32c14953 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page16b674a98ec946489b2f323e6a688f5f darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page7362a30bea7944bd97e5218cb8f766e3 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Paged732fc58ddf44fe4a756d10e766197e6 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page235ca4cf757444fab97817cc4c6d1f57 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page613566d9c0cf4e8ead55d768b40799c2 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page8c773c3136be4cd6b47808fa0d036ffa darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page375b0d929b8a4168bbd4712dd147061a darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page60cbd599ee2f4faf855a411999311ed6 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pageec405febdbe64739b92fa99840e26c8b darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page3d643eaeda7e4bd7bb3606467d400fde darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page015d664ad956471f854c229affc86266 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagef2b0b9738de34b77b92c8f074b379bdc darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagece94c4f1731b41e98fff31a3c1f02901 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page3085b385cee14a94a5b62b6bb3fecaf9 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

