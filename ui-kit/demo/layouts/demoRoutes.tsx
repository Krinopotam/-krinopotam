
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1ecffa6fe2f84834ab266f83ab12d06d = lazy(() => import('./../pages/Page1ecffa6fe2f84834ab266f83ab12d06d'))

    const Page3f23cc502bfb473686a8e775c36af95a = lazy(() => import('./../pages/Page3f23cc502bfb473686a8e775c36af95a'))
    const Page534ae104af3946818b4d6bf038074edc = lazy(() => import('./../pages/Page534ae104af3946818b4d6bf038074edc'))

    const Pageaa678955432047748d48af7b56612a82 = lazy(() => import('./../pages/Pageaa678955432047748d48af7b56612a82'))
    const Pageb0123669cbb24c73aa48496671257aab = lazy(() => import('./../pages/Pageb0123669cbb24c73aa48496671257aab'))
    const Pagee6354d254a1c49429ba9205d82dc126c = lazy(() => import('./../pages/Pagee6354d254a1c49429ba9205d82dc126c'))
    const Pagea9a20ae2492642fc921b972182fd72ff = lazy(() => import('./../pages/Pagea9a20ae2492642fc921b972182fd72ff'))
    const Pagec9c35b9488784da48f48a12d21264330 = lazy(() => import('./../pages/Pagec9c35b9488784da48f48a12d21264330'))
    const Page5b441aac17014a0eb048d280b9eb53fb = lazy(() => import('./../pages/Page5b441aac17014a0eb048d280b9eb53fb'))
    const Page5c16319d740c4657928894ae5e78863b = lazy(() => import('./../pages/Page5c16319d740c4657928894ae5e78863b'))
    const Pageda6ba201d1ed4fee9ba291a3eff034c3 = lazy(() => import('./../pages/Pageda6ba201d1ed4fee9ba291a3eff034c3'))
    const Page24820c455dde4090979d165501d3bd5a = lazy(() => import('./../pages/Page24820c455dde4090979d165501d3bd5a'))
    const Page51395367a89d4d2ea2bd7d72761cc31a = lazy(() => import('./../pages/Page51395367a89d4d2ea2bd7d72761cc31a'))

    const Page70793bd6a219413192192feef1fb6d58 = lazy(() => import('./../pages/Page70793bd6a219413192192feef1fb6d58'))
    const Page15c9e660178e46e5b3319c1549b7b390 = lazy(() => import('./../pages/Page15c9e660178e46e5b3319c1549b7b390'))
    const Page0392b01947bc400cbafb88f3de78f267 = lazy(() => import('./../pages/Page0392b01947bc400cbafb88f3de78f267'))

    const Page6b2e975fc0d347d092379eca05d5fd8b = lazy(() => import('./../pages/Page6b2e975fc0d347d092379eca05d5fd8b'))
    const Pagee20b9c1fe7a14d13bfd73ec5c2977a77 = lazy(() => import('./../pages/Pagee20b9c1fe7a14d13bfd73ec5c2977a77'))
    const Page1f6ec1fd5a234e5fb7a7d68c9a1c43cb = lazy(() => import('./../pages/Page1f6ec1fd5a234e5fb7a7d68c9a1c43cb'))
    const Page71b494f2f01e4177a163cffba1f8ac7d = lazy(() => import('./../pages/Page71b494f2f01e4177a163cffba1f8ac7d'))
    const Pagea85abf5beae8402eaa8ccf3a36c616a2 = lazy(() => import('./../pages/Pagea85abf5beae8402eaa8ccf3a36c616a2'))
    const Pageb1e94a1e6e214c41a75180d2fda4c681 = lazy(() => import('./../pages/Pageb1e94a1e6e214c41a75180d2fda4c681'))
    const Page2656ff80ad644f759e3b3f2250db0a2e = lazy(() => import('./../pages/Page2656ff80ad644f759e3b3f2250db0a2e'))
    const Page617eec943dac4290bd34106a412e0644 = lazy(() => import('./../pages/Page617eec943dac4290bd34106a412e0644'))
    const Pagee7f6d69e45a04e70baed1421300b891e = lazy(() => import('./../pages/Pagee7f6d69e45a04e70baed1421300b891e'))
    const Pagecb59843a96ff4030bf03118d0f8b662f = lazy(() => import('./../pages/Pagecb59843a96ff4030bf03118d0f8b662f'))
    const Page95aa1f4535b341509b6d5713764cdea1 = lazy(() => import('./../pages/Page95aa1f4535b341509b6d5713764cdea1'))
    const Page5f73b33f97a449799d1f0825621f3309 = lazy(() => import('./../pages/Page5f73b33f97a449799d1f0825621f3309'))
    const Paged9fd3bf99d9149dabf977e77a8a138ec = lazy(() => import('./../pages/Paged9fd3bf99d9149dabf977e77a8a138ec'))
    const Page914eb30e0cf9438ebbcb20287ba875da = lazy(() => import('./../pages/Page914eb30e0cf9438ebbcb20287ba875da'))

    const Pagea1b405582f864493be785a0e16386afb = lazy(() => import('./../pages/Pagea1b405582f864493be785a0e16386afb'))

    const Pagec177e33fd975422793ca7a5531b4f864 = lazy(() => import('./../pages/Pagec177e33fd975422793ca7a5531b4f864'))
    const Pagea18e7a73fdfc40e9852f0b611c49b840 = lazy(() => import('./../pages/Pagea18e7a73fdfc40e9852f0b611c49b840'))
    const Page4d61a885a2aa45b3b5d712f3557c9296 = lazy(() => import('./../pages/Page4d61a885a2aa45b3b5d712f3557c9296'))
    const Page64200b33f02a47d480b6e1b5edd787c0 = lazy(() => import('./../pages/Page64200b33f02a47d480b6e1b5edd787c0'))
    const Page4d0f0cfe0f5346b89e0a99319c71a614 = lazy(() => import('./../pages/Page4d0f0cfe0f5346b89e0a99319c71a614'))
    const Page8af2699e0a5b4d1abd2b7d3006a1be30 = lazy(() => import('./../pages/Page8af2699e0a5b4d1abd2b7d3006a1be30'))
    const Page50f46d0469b648848f009390639b9d1b = lazy(() => import('./../pages/Page50f46d0469b648848f009390639b9d1b'))
    const Pageaf97b0cc6c93443aa64c574f5f42d4f0 = lazy(() => import('./../pages/Pageaf97b0cc6c93443aa64c574f5f42d4f0'))

    const Page3f5d20465259477b8dd16a8b4cf21eda = lazy(() => import('./../pages/Page3f5d20465259477b8dd16a8b4cf21eda'))
    const Pagec7d4233f1b324cdb8f31bb3c68599e41 = lazy(() => import('./../pages/Pagec7d4233f1b324cdb8f31bb3c68599e41'))
    const Page517afda1ba5647ff9d2673e3952a82d9 = lazy(() => import('./../pages/Page517afda1ba5647ff9d2673e3952a82d9'))
    const Pagecd630760202e4b4e89e7817838d0064c = lazy(() => import('./../pages/Pagecd630760202e4b4e89e7817838d0064c'))
    const Pageea3f3c87462c40fd95aa4af001718826 = lazy(() => import('./../pages/Pageea3f3c87462c40fd95aa4af001718826'))
    const Pagecbe408fc75e54cc5883f8f3db76821a3 = lazy(() => import('./../pages/Pagecbe408fc75e54cc5883f8f3db76821a3'))
    const Page816ee2a31f544caea14db0bee9dc7256 = lazy(() => import('./../pages/Page816ee2a31f544caea14db0bee9dc7256'))
    const Page2426f21c53484961a2fde9e8c2164c3a = lazy(() => import('./../pages/Page2426f21c53484961a2fde9e8c2164c3a'))
    const Page27f5d040ec354d6da7056b36dd49d404 = lazy(() => import('./../pages/Page27f5d040ec354d6da7056b36dd49d404'))
    const Page18a72af44cee4487a0d5b5e427577213 = lazy(() => import('./../pages/Page18a72af44cee4487a0d5b5e427577213'))
    const Paged1a47418df1c4b42abb2c669a432e979 = lazy(() => import('./../pages/Paged1a47418df1c4b42abb2c669a432e979'))
    const Pagee640d17636874044beb49d8b89c0d1aa = lazy(() => import('./../pages/Pagee640d17636874044beb49d8b89c0d1aa'))
    const Page38a0193eabbc4ece8198582b840d5b67 = lazy(() => import('./../pages/Page38a0193eabbc4ece8198582b840d5b67'))
    const Page87e5354ce4984d59a294f29b24c0f13f = lazy(() => import('./../pages/Page87e5354ce4984d59a294f29b24c0f13f'))
    const Pagede0113a6a6914310a62b2ca8cd65bb6d = lazy(() => import('./../pages/Pagede0113a6a6914310a62b2ca8cd65bb6d'))

    const Pagea179aa6c41c7422dbd3afc3d0d460a6c = lazy(() => import('./../pages/Pagea179aa6c41c7422dbd3afc3d0d460a6c'))

    const Page76c5fcdbdf224426ba2d0798499a020e = lazy(() => import('./../pages/Page76c5fcdbdf224426ba2d0798499a020e'))
    const Pagea5069aa5a79e4591b88bad30b13c54c3 = lazy(() => import('./../pages/Pagea5069aa5a79e4591b88bad30b13c54c3'))
    const Page01f75288545941059ec7276f3ccc19cc = lazy(() => import('./../pages/Page01f75288545941059ec7276f3ccc19cc'))
    const Pageb2dd8488d38b45b7a3b43f224867ae47 = lazy(() => import('./../pages/Pageb2dd8488d38b45b7a3b43f224867ae47'))
    const Page220b2d27625747a1b79c756350fe9d72 = lazy(() => import('./../pages/Page220b2d27625747a1b79c756350fe9d72'))
    const Page7e888b539f8e43eca61eb58cbb7eb079 = lazy(() => import('./../pages/Page7e888b539f8e43eca61eb58cbb7eb079'))
    const Page5434b5aac48744e495b033962632526a = lazy(() => import('./../pages/Page5434b5aac48744e495b033962632526a'))
    const Page2aa5e786ba9e4f2e897a4693a004bbb1 = lazy(() => import('./../pages/Page2aa5e786ba9e4f2e897a4693a004bbb1'))
    const Page5d2b3d5f6bf043789f7ac2d41a966c53 = lazy(() => import('./../pages/Page5d2b3d5f6bf043789f7ac2d41a966c53'))

    const Pagebe3902c4f1674abba79d8bf79fbe0cd1 = lazy(() => import('./../pages/Pagebe3902c4f1674abba79d8bf79fbe0cd1'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page1ecffa6fe2f84834ab266f83ab12d06d darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page3f23cc502bfb473686a8e775c36af95a darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page534ae104af3946818b4d6bf038074edc darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Pageaa678955432047748d48af7b56612a82 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Pageb0123669cbb24c73aa48496671257aab darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagee6354d254a1c49429ba9205d82dc126c darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagea9a20ae2492642fc921b972182fd72ff darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagec9c35b9488784da48f48a12d21264330 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page5b441aac17014a0eb048d280b9eb53fb darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page5c16319d740c4657928894ae5e78863b darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageda6ba201d1ed4fee9ba291a3eff034c3 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page24820c455dde4090979d165501d3bd5a darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page51395367a89d4d2ea2bd7d72761cc31a darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page70793bd6a219413192192feef1fb6d58 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page15c9e660178e46e5b3319c1549b7b390 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page0392b01947bc400cbafb88f3de78f267 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page6b2e975fc0d347d092379eca05d5fd8b darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagee20b9c1fe7a14d13bfd73ec5c2977a77 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page1f6ec1fd5a234e5fb7a7d68c9a1c43cb darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page71b494f2f01e4177a163cffba1f8ac7d darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pagea85abf5beae8402eaa8ccf3a36c616a2 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageb1e94a1e6e214c41a75180d2fda4c681 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page2656ff80ad644f759e3b3f2250db0a2e darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page617eec943dac4290bd34106a412e0644 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pagee7f6d69e45a04e70baed1421300b891e darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagecb59843a96ff4030bf03118d0f8b662f darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page95aa1f4535b341509b6d5713764cdea1 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page5f73b33f97a449799d1f0825621f3309 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Paged9fd3bf99d9149dabf977e77a8a138ec darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page914eb30e0cf9438ebbcb20287ba875da darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagea1b405582f864493be785a0e16386afb darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagec177e33fd975422793ca7a5531b4f864 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagea18e7a73fdfc40e9852f0b611c49b840 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page4d61a885a2aa45b3b5d712f3557c9296 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page64200b33f02a47d480b6e1b5edd787c0 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page4d0f0cfe0f5346b89e0a99319c71a614 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page8af2699e0a5b4d1abd2b7d3006a1be30 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page50f46d0469b648848f009390639b9d1b darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pageaf97b0cc6c93443aa64c574f5f42d4f0 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page3f5d20465259477b8dd16a8b4cf21eda darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagec7d4233f1b324cdb8f31bb3c68599e41 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page517afda1ba5647ff9d2673e3952a82d9 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagecd630760202e4b4e89e7817838d0064c darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageea3f3c87462c40fd95aa4af001718826 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagecbe408fc75e54cc5883f8f3db76821a3 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page816ee2a31f544caea14db0bee9dc7256 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page2426f21c53484961a2fde9e8c2164c3a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page27f5d040ec354d6da7056b36dd49d404 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page18a72af44cee4487a0d5b5e427577213 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Paged1a47418df1c4b42abb2c669a432e979 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagee640d17636874044beb49d8b89c0d1aa darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page38a0193eabbc4ece8198582b840d5b67 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page87e5354ce4984d59a294f29b24c0f13f darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagede0113a6a6914310a62b2ca8cd65bb6d darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagea179aa6c41c7422dbd3afc3d0d460a6c darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page76c5fcdbdf224426ba2d0798499a020e darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pagea5069aa5a79e4591b88bad30b13c54c3 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page01f75288545941059ec7276f3ccc19cc darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pageb2dd8488d38b45b7a3b43f224867ae47 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page220b2d27625747a1b79c756350fe9d72 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page7e888b539f8e43eca61eb58cbb7eb079 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page5434b5aac48744e495b033962632526a darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page2aa5e786ba9e4f2e897a4693a004bbb1 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page5d2b3d5f6bf043789f7ac2d41a966c53 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagebe3902c4f1674abba79d8bf79fbe0cd1 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

