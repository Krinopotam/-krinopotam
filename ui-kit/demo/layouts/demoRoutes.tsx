
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page3b890f0bb93442cd89d249164353a032 = lazy(() => import('./../pages/Page3b890f0bb93442cd89d249164353a032'))
    const Page7862aaa91dd2430fbecca25459a6d47e = lazy(() => import('./../pages/Page7862aaa91dd2430fbecca25459a6d47e'))

    const Pagede7a5034c7c84bc6800b37595cf9dcef = lazy(() => import('./../pages/Pagede7a5034c7c84bc6800b37595cf9dcef'))
    const Pagebf8e0770244440728ac5f89747055c65 = lazy(() => import('./../pages/Pagebf8e0770244440728ac5f89747055c65'))
    const Page9f02fd5035324851a0fccd80186c46ec = lazy(() => import('./../pages/Page9f02fd5035324851a0fccd80186c46ec'))
    const Pageab38628bac4b42449e0f0d7a4b0f1fd7 = lazy(() => import('./../pages/Pageab38628bac4b42449e0f0d7a4b0f1fd7'))
    const Page3a2a0791884945d3af03f32c6865adad = lazy(() => import('./../pages/Page3a2a0791884945d3af03f32c6865adad'))
    const Page92ac01c822a1401daa1c4a61458233fe = lazy(() => import('./../pages/Page92ac01c822a1401daa1c4a61458233fe'))
    const Page1e760c79954d4de0ad86a5db3f38c9a8 = lazy(() => import('./../pages/Page1e760c79954d4de0ad86a5db3f38c9a8'))
    const Pagec66d1a5b064e4be391ddf312937b365f = lazy(() => import('./../pages/Pagec66d1a5b064e4be391ddf312937b365f'))
    const Paged2cad4a96e224981a3be474bf03d92f9 = lazy(() => import('./../pages/Paged2cad4a96e224981a3be474bf03d92f9'))

    const Page6dc6e61baace455aaac8d0f5db7bb152 = lazy(() => import('./../pages/Page6dc6e61baace455aaac8d0f5db7bb152'))
    const Page8fb8ff36143940369e3f5f945cd4f10b = lazy(() => import('./../pages/Page8fb8ff36143940369e3f5f945cd4f10b'))
    const Pagead0137993c2f4551bdcc752d6dac7636 = lazy(() => import('./../pages/Pagead0137993c2f4551bdcc752d6dac7636'))

    const Page3d9f5ed990d04b9090037542896bbc8d = lazy(() => import('./../pages/Page3d9f5ed990d04b9090037542896bbc8d'))
    const Page82b49251878245c8bc4f9e34ad353eb9 = lazy(() => import('./../pages/Page82b49251878245c8bc4f9e34ad353eb9'))
    const Page06144e7fb7f948c6a617d8252f66da76 = lazy(() => import('./../pages/Page06144e7fb7f948c6a617d8252f66da76'))
    const Page21a69f01e58345dd96281046bb93ce58 = lazy(() => import('./../pages/Page21a69f01e58345dd96281046bb93ce58'))
    const Page360fb4bfc30c4dd8a09d17c399dba169 = lazy(() => import('./../pages/Page360fb4bfc30c4dd8a09d17c399dba169'))
    const Pagec2f60afd12844deba171e49fb9c9892d = lazy(() => import('./../pages/Pagec2f60afd12844deba171e49fb9c9892d'))
    const Page792dd87b4e444fd1aae60eebb03eff66 = lazy(() => import('./../pages/Page792dd87b4e444fd1aae60eebb03eff66'))
    const Page5fdf1320e6064552ad0b2e76e2219700 = lazy(() => import('./../pages/Page5fdf1320e6064552ad0b2e76e2219700'))
    const Page80894591e6d5400f8e165879c4b4107c = lazy(() => import('./../pages/Page80894591e6d5400f8e165879c4b4107c'))
    const Page453cf42a669d426797521bc0bff6b985 = lazy(() => import('./../pages/Page453cf42a669d426797521bc0bff6b985'))
    const Page6f0a7cd115064e3d82c716510125f9fd = lazy(() => import('./../pages/Page6f0a7cd115064e3d82c716510125f9fd'))
    const Pageeee371242de24b1bbf2e45b115fac574 = lazy(() => import('./../pages/Pageeee371242de24b1bbf2e45b115fac574'))
    const Pageff5e3ee9bd3e4cd8a5e236620af4aa9e = lazy(() => import('./../pages/Pageff5e3ee9bd3e4cd8a5e236620af4aa9e'))
    const Page8f4b347509cf4915a9fef9712a37b5e9 = lazy(() => import('./../pages/Page8f4b347509cf4915a9fef9712a37b5e9'))

    const Page25d4e08dda1a47a99ec99787034a9d95 = lazy(() => import('./../pages/Page25d4e08dda1a47a99ec99787034a9d95'))
    const Page42af3268de8f480788e3e8e347e0596a = lazy(() => import('./../pages/Page42af3268de8f480788e3e8e347e0596a'))
    const Page51781f001f864a669fe18c35dee9157b = lazy(() => import('./../pages/Page51781f001f864a669fe18c35dee9157b'))
    const Page565d038f2cbe478aabe615b3ddfa9ba0 = lazy(() => import('./../pages/Page565d038f2cbe478aabe615b3ddfa9ba0'))
    const Pageaeb50b6ea1af4e9187f277c1128f30be = lazy(() => import('./../pages/Pageaeb50b6ea1af4e9187f277c1128f30be'))
    const Page8823f70745ee41b184ff5c014d4a27f1 = lazy(() => import('./../pages/Page8823f70745ee41b184ff5c014d4a27f1'))
    const Page43d85aeeec834571bb7b96bd707fb05e = lazy(() => import('./../pages/Page43d85aeeec834571bb7b96bd707fb05e'))
    const Page6c20ea1a1a024f2aa3f7fba7d1cab720 = lazy(() => import('./../pages/Page6c20ea1a1a024f2aa3f7fba7d1cab720'))

    const Pageb9114f22c2b640f8bfd4b37310426316 = lazy(() => import('./../pages/Pageb9114f22c2b640f8bfd4b37310426316'))
    const Pagefa354882b9074b70b94670aa32751973 = lazy(() => import('./../pages/Pagefa354882b9074b70b94670aa32751973'))
    const Page81c5471f94644d48becbf9135d3ff0bf = lazy(() => import('./../pages/Page81c5471f94644d48becbf9135d3ff0bf'))
    const Pagef822868ec5664377a46739a2cf976714 = lazy(() => import('./../pages/Pagef822868ec5664377a46739a2cf976714'))
    const Page76288cb9b255492eb119c9f41ee40428 = lazy(() => import('./../pages/Page76288cb9b255492eb119c9f41ee40428'))
    const Pagef8391a898818483c9659a06eeba546a9 = lazy(() => import('./../pages/Pagef8391a898818483c9659a06eeba546a9'))
    const Page7e953b661226459399487d29aef82954 = lazy(() => import('./../pages/Page7e953b661226459399487d29aef82954'))
    const Paged6239f5dbb8e4f329a34e36717d6ccd6 = lazy(() => import('./../pages/Paged6239f5dbb8e4f329a34e36717d6ccd6'))
    const Page7696f954287546cc9b13c1b4e7cff3d1 = lazy(() => import('./../pages/Page7696f954287546cc9b13c1b4e7cff3d1'))
    const Pageb6e26d037ccc4c42937e22f7e4a454b2 = lazy(() => import('./../pages/Pageb6e26d037ccc4c42937e22f7e4a454b2'))
    const Page67ff0aea364d4998bf9949097b03eb05 = lazy(() => import('./../pages/Page67ff0aea364d4998bf9949097b03eb05'))
    const Pagead2524d5b494423ca064ef89cc1968ff = lazy(() => import('./../pages/Pagead2524d5b494423ca064ef89cc1968ff'))
    const Page78b09589f866413289ea3f402b7a70c9 = lazy(() => import('./../pages/Page78b09589f866413289ea3f402b7a70c9'))
    const Page432154caf4984a1792af006785d1a88d = lazy(() => import('./../pages/Page432154caf4984a1792af006785d1a88d'))
    const Paged6d7e6ceea104c9fba1e0b352811e9c7 = lazy(() => import('./../pages/Paged6d7e6ceea104c9fba1e0b352811e9c7'))

    const Page8210fd2988214693bce40c5c321baedc = lazy(() => import('./../pages/Page8210fd2988214693bce40c5c321baedc'))

    const Pagef414237ff196489894ceb02f05626c83 = lazy(() => import('./../pages/Pagef414237ff196489894ceb02f05626c83'))
    const Pageb69773d3a7814fe3ba240c5287de64f1 = lazy(() => import('./../pages/Pageb69773d3a7814fe3ba240c5287de64f1'))
    const Pagecca2d517eb6e4af9957028efaa0fe2d1 = lazy(() => import('./../pages/Pagecca2d517eb6e4af9957028efaa0fe2d1'))
    const Page1d8a5a3e3dc04a3cb36bd89289e26f6c = lazy(() => import('./../pages/Page1d8a5a3e3dc04a3cb36bd89289e26f6c'))
    const Page245f949405134db29b8866c856658a03 = lazy(() => import('./../pages/Page245f949405134db29b8866c856658a03'))
    const Page5bc8b81c39e143cd82288e1edb753005 = lazy(() => import('./../pages/Page5bc8b81c39e143cd82288e1edb753005'))
    const Pagee47f4a1f8b484fabbf22978c7c555f6b = lazy(() => import('./../pages/Pagee47f4a1f8b484fabbf22978c7c555f6b'))
    const Page95f835fb2bf1494bb203418384d55d0f = lazy(() => import('./../pages/Page95f835fb2bf1494bb203418384d55d0f'))
    const Page8265559557c546659b544712c7d7ada6 = lazy(() => import('./../pages/Page8265559557c546659b544712c7d7ada6'))

    const Page76ecac9a4b534aa488ea0e252d2570c5 = lazy(() => import('./../pages/Page76ecac9a4b534aa488ea0e252d2570c5'))


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
                        {path:"FormSubmitting", element:<Page3b890f0bb93442cd89d249164353a032 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page7862aaa91dd2430fbecca25459a6d47e darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pagede7a5034c7c84bc6800b37595cf9dcef darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagebf8e0770244440728ac5f89747055c65 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page9f02fd5035324851a0fccd80186c46ec darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageab38628bac4b42449e0f0d7a4b0f1fd7 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page3a2a0791884945d3af03f32c6865adad darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page92ac01c822a1401daa1c4a61458233fe darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page1e760c79954d4de0ad86a5db3f38c9a8 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagec66d1a5b064e4be391ddf312937b365f darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Paged2cad4a96e224981a3be474bf03d92f9 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page6dc6e61baace455aaac8d0f5db7bb152 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page8fb8ff36143940369e3f5f945cd4f10b darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagead0137993c2f4551bdcc752d6dac7636 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page3d9f5ed990d04b9090037542896bbc8d darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page82b49251878245c8bc4f9e34ad353eb9 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page06144e7fb7f948c6a617d8252f66da76 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page21a69f01e58345dd96281046bb93ce58 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page360fb4bfc30c4dd8a09d17c399dba169 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagec2f60afd12844deba171e49fb9c9892d darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page792dd87b4e444fd1aae60eebb03eff66 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page5fdf1320e6064552ad0b2e76e2219700 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page80894591e6d5400f8e165879c4b4107c darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page453cf42a669d426797521bc0bff6b985 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page6f0a7cd115064e3d82c716510125f9fd darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pageeee371242de24b1bbf2e45b115fac574 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pageff5e3ee9bd3e4cd8a5e236620af4aa9e darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page8f4b347509cf4915a9fef9712a37b5e9 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page25d4e08dda1a47a99ec99787034a9d95 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page42af3268de8f480788e3e8e347e0596a darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page51781f001f864a669fe18c35dee9157b darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page565d038f2cbe478aabe615b3ddfa9ba0 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pageaeb50b6ea1af4e9187f277c1128f30be darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page8823f70745ee41b184ff5c014d4a27f1 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page43d85aeeec834571bb7b96bd707fb05e darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page6c20ea1a1a024f2aa3f7fba7d1cab720 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pageb9114f22c2b640f8bfd4b37310426316 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagefa354882b9074b70b94670aa32751973 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page81c5471f94644d48becbf9135d3ff0bf darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagef822868ec5664377a46739a2cf976714 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page76288cb9b255492eb119c9f41ee40428 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagef8391a898818483c9659a06eeba546a9 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page7e953b661226459399487d29aef82954 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Paged6239f5dbb8e4f329a34e36717d6ccd6 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page7696f954287546cc9b13c1b4e7cff3d1 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb6e26d037ccc4c42937e22f7e4a454b2 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page67ff0aea364d4998bf9949097b03eb05 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagead2524d5b494423ca064ef89cc1968ff darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page78b09589f866413289ea3f402b7a70c9 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page432154caf4984a1792af006785d1a88d darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Paged6d7e6ceea104c9fba1e0b352811e9c7 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page8210fd2988214693bce40c5c321baedc darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagef414237ff196489894ceb02f05626c83 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageb69773d3a7814fe3ba240c5287de64f1 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagecca2d517eb6e4af9957028efaa0fe2d1 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page1d8a5a3e3dc04a3cb36bd89289e26f6c darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page245f949405134db29b8866c856658a03 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page5bc8b81c39e143cd82288e1edb753005 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagee47f4a1f8b484fabbf22978c7c555f6b darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page95f835fb2bf1494bb203418384d55d0f darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page8265559557c546659b544712c7d7ada6 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page76ecac9a4b534aa488ea0e252d2570c5 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

