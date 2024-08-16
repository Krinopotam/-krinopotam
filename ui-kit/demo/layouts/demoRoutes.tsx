
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagebfd549815dba4869b9726e544891b051 = lazy(() => import('./../pages/Pagebfd549815dba4869b9726e544891b051'))
    const Page461da2fae954400baac45c655fac7631 = lazy(() => import('./../pages/Page461da2fae954400baac45c655fac7631'))

    const Page71c8cda14656445b9a5cf0b5f2f9f92d = lazy(() => import('./../pages/Page71c8cda14656445b9a5cf0b5f2f9f92d'))
    const Pagecec2dc4deda24ac1beb04c13e540d80a = lazy(() => import('./../pages/Pagecec2dc4deda24ac1beb04c13e540d80a'))
    const Page6070adbb4aa74b9f97f18bfd6dab124a = lazy(() => import('./../pages/Page6070adbb4aa74b9f97f18bfd6dab124a'))
    const Pagef6df3e5f23c7427a87d8806a223358cb = lazy(() => import('./../pages/Pagef6df3e5f23c7427a87d8806a223358cb'))
    const Page439d4db095d5457ab8dd0f4ab1cbc4cd = lazy(() => import('./../pages/Page439d4db095d5457ab8dd0f4ab1cbc4cd'))
    const Pagef3143b6d0e1d40058792a98f3603c2c2 = lazy(() => import('./../pages/Pagef3143b6d0e1d40058792a98f3603c2c2'))
    const Page7c17a5f1aa5249f29a9472f4ccab3f1e = lazy(() => import('./../pages/Page7c17a5f1aa5249f29a9472f4ccab3f1e'))
    const Page9a06273f1536483dbda54fac62d4238e = lazy(() => import('./../pages/Page9a06273f1536483dbda54fac62d4238e'))
    const Page474b2b63f13d45619c56b1d7a29aaf76 = lazy(() => import('./../pages/Page474b2b63f13d45619c56b1d7a29aaf76'))

    const Paged597ef0b7c3e453e88f82c71622e515b = lazy(() => import('./../pages/Paged597ef0b7c3e453e88f82c71622e515b'))
    const Page4876bde87d734ff284e59435e4776ee0 = lazy(() => import('./../pages/Page4876bde87d734ff284e59435e4776ee0'))
    const Pageaded3c838709402ab6a7868166d12795 = lazy(() => import('./../pages/Pageaded3c838709402ab6a7868166d12795'))

    const Page77308a5e130d47fdb1657bec132b4628 = lazy(() => import('./../pages/Page77308a5e130d47fdb1657bec132b4628'))
    const Page4848b496b8844b329d19b6f905a3291b = lazy(() => import('./../pages/Page4848b496b8844b329d19b6f905a3291b'))
    const Pageed91d4fde2f04f02956a428bd7c40346 = lazy(() => import('./../pages/Pageed91d4fde2f04f02956a428bd7c40346'))
    const Page01a6f2cf149043afb5cfdfd6379a688c = lazy(() => import('./../pages/Page01a6f2cf149043afb5cfdfd6379a688c'))
    const Page0f7be6537cb448c2aeab610b01198233 = lazy(() => import('./../pages/Page0f7be6537cb448c2aeab610b01198233'))
    const Pagea404aa2c4a734ba4a2d7f444e2b55cc0 = lazy(() => import('./../pages/Pagea404aa2c4a734ba4a2d7f444e2b55cc0'))
    const Pagee5b32860c3cc436bbbfd126ada744fdd = lazy(() => import('./../pages/Pagee5b32860c3cc436bbbfd126ada744fdd'))
    const Pagefca0d6af912a46099b46ad5087408b77 = lazy(() => import('./../pages/Pagefca0d6af912a46099b46ad5087408b77'))
    const Pagee20e4f77e64c4f89b4b966b712cb55fb = lazy(() => import('./../pages/Pagee20e4f77e64c4f89b4b966b712cb55fb'))
    const Page90534dd002054db999eaaaad234ab3ab = lazy(() => import('./../pages/Page90534dd002054db999eaaaad234ab3ab'))
    const Page258e11c05a8b404a886240f49a23c855 = lazy(() => import('./../pages/Page258e11c05a8b404a886240f49a23c855'))
    const Paged618ecd15b0149fcb38fe09d1b153c16 = lazy(() => import('./../pages/Paged618ecd15b0149fcb38fe09d1b153c16'))
    const Pageed6df4c55f124ad2ae1ceb4bd3f88713 = lazy(() => import('./../pages/Pageed6df4c55f124ad2ae1ceb4bd3f88713'))
    const Page9e08fb63ad0442508cb3e87ee672168b = lazy(() => import('./../pages/Page9e08fb63ad0442508cb3e87ee672168b'))

    const Page6d14d0444e854494b7e12cd2d58c0d33 = lazy(() => import('./../pages/Page6d14d0444e854494b7e12cd2d58c0d33'))

    const Pageb09fff743d91411c9e86c013c71cc289 = lazy(() => import('./../pages/Pageb09fff743d91411c9e86c013c71cc289'))
    const Pagecfcb18da504e407fbc8695fb2036bf38 = lazy(() => import('./../pages/Pagecfcb18da504e407fbc8695fb2036bf38'))
    const Pagea8c2f377cbd345f587c2a6dfbfa1dc18 = lazy(() => import('./../pages/Pagea8c2f377cbd345f587c2a6dfbfa1dc18'))
    const Page2220794e961546d2869fd7306dc58903 = lazy(() => import('./../pages/Page2220794e961546d2869fd7306dc58903'))
    const Page514134d37cb746f89a0fe2db61579b82 = lazy(() => import('./../pages/Page514134d37cb746f89a0fe2db61579b82'))
    const Paged8045ea2e87f4bc393e1ca573f987236 = lazy(() => import('./../pages/Paged8045ea2e87f4bc393e1ca573f987236'))
    const Page8f27893b624747ad8457dea3e7714d90 = lazy(() => import('./../pages/Page8f27893b624747ad8457dea3e7714d90'))
    const Pagedfca6d61807f40038969a32ecf0a8cb3 = lazy(() => import('./../pages/Pagedfca6d61807f40038969a32ecf0a8cb3'))

    const Page3d5df096db304c90a80d4ef7c96ca49c = lazy(() => import('./../pages/Page3d5df096db304c90a80d4ef7c96ca49c'))
    const Page982d041faaeb40809cb07d83b81fcfcb = lazy(() => import('./../pages/Page982d041faaeb40809cb07d83b81fcfcb'))
    const Page479e5986f87341dcba5b98a69fc924f0 = lazy(() => import('./../pages/Page479e5986f87341dcba5b98a69fc924f0'))
    const Pageed26bc0b2aeb4521addb18c54cd35d43 = lazy(() => import('./../pages/Pageed26bc0b2aeb4521addb18c54cd35d43'))
    const Page61b618a236d24553b11b25fe041a7abc = lazy(() => import('./../pages/Page61b618a236d24553b11b25fe041a7abc'))
    const Pageb73740ef37044190aaf4f4cf6ecb9888 = lazy(() => import('./../pages/Pageb73740ef37044190aaf4f4cf6ecb9888'))
    const Pageb7a78d3aa54a491bbc9ddfed4518475a = lazy(() => import('./../pages/Pageb7a78d3aa54a491bbc9ddfed4518475a'))
    const Pagee62e32723c9b41b0879627775d1bcbc2 = lazy(() => import('./../pages/Pagee62e32723c9b41b0879627775d1bcbc2'))
    const Page00b0100fe3be425883dd05a294a3235c = lazy(() => import('./../pages/Page00b0100fe3be425883dd05a294a3235c'))
    const Page86cbbc15ea1c4aaaba93d82574458fbc = lazy(() => import('./../pages/Page86cbbc15ea1c4aaaba93d82574458fbc'))
    const Pageda25bd51d03f4026a3dd2590fd7a4fdd = lazy(() => import('./../pages/Pageda25bd51d03f4026a3dd2590fd7a4fdd'))
    const Page1980819c2789419e9c0a2fa2e1df73ff = lazy(() => import('./../pages/Page1980819c2789419e9c0a2fa2e1df73ff'))
    const Page0b27f7f8df5d4931a0d2befa3463a21e = lazy(() => import('./../pages/Page0b27f7f8df5d4931a0d2befa3463a21e'))
    const Page5596d63a21e44242854e98d84316ba76 = lazy(() => import('./../pages/Page5596d63a21e44242854e98d84316ba76'))
    const Page6fc0596bf4cd4176b51cb6348432c702 = lazy(() => import('./../pages/Page6fc0596bf4cd4176b51cb6348432c702'))

    const Pagee52c74f408fc4802b56b56434f70db11 = lazy(() => import('./../pages/Pagee52c74f408fc4802b56b56434f70db11'))

    const Page55dd90f20bde43269835b38d43029747 = lazy(() => import('./../pages/Page55dd90f20bde43269835b38d43029747'))
    const Page86c8e58323e14e268dc9a9458d0cd883 = lazy(() => import('./../pages/Page86c8e58323e14e268dc9a9458d0cd883'))
    const Pagebf8c5a9097e7445bbffce114c9fa90c3 = lazy(() => import('./../pages/Pagebf8c5a9097e7445bbffce114c9fa90c3'))
    const Page42f5c217bd0b405992fecdbfe12fe282 = lazy(() => import('./../pages/Page42f5c217bd0b405992fecdbfe12fe282'))
    const Page43e9127bb04c45c7a61a65bdc4aacc71 = lazy(() => import('./../pages/Page43e9127bb04c45c7a61a65bdc4aacc71'))
    const Pageb7831424f6964c89815faeaa2eee2485 = lazy(() => import('./../pages/Pageb7831424f6964c89815faeaa2eee2485'))
    const Page222da684e22a4aaaa2fac884860f696e = lazy(() => import('./../pages/Page222da684e22a4aaaa2fac884860f696e'))
    const Page271f81ec899a441fb06ac8e5699129bd = lazy(() => import('./../pages/Page271f81ec899a441fb06ac8e5699129bd'))
    const Paged39026c52f8a4019a051310e6f6d8ccb = lazy(() => import('./../pages/Paged39026c52f8a4019a051310e6f6d8ccb'))

    const Page27cd5e54f2e5408e862f3e4bb78ce7c2 = lazy(() => import('./../pages/Page27cd5e54f2e5408e862f3e4bb78ce7c2'))


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
                        {path:"FormSubmitting", element:<Pagebfd549815dba4869b9726e544891b051 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page461da2fae954400baac45c655fac7631 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page71c8cda14656445b9a5cf0b5f2f9f92d darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagecec2dc4deda24ac1beb04c13e540d80a darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page6070adbb4aa74b9f97f18bfd6dab124a darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagef6df3e5f23c7427a87d8806a223358cb darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page439d4db095d5457ab8dd0f4ab1cbc4cd darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagef3143b6d0e1d40058792a98f3603c2c2 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page7c17a5f1aa5249f29a9472f4ccab3f1e darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page9a06273f1536483dbda54fac62d4238e darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page474b2b63f13d45619c56b1d7a29aaf76 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Paged597ef0b7c3e453e88f82c71622e515b darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page4876bde87d734ff284e59435e4776ee0 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pageaded3c838709402ab6a7868166d12795 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page77308a5e130d47fdb1657bec132b4628 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page4848b496b8844b329d19b6f905a3291b darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pageed91d4fde2f04f02956a428bd7c40346 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page01a6f2cf149043afb5cfdfd6379a688c darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page0f7be6537cb448c2aeab610b01198233 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagea404aa2c4a734ba4a2d7f444e2b55cc0 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagee5b32860c3cc436bbbfd126ada744fdd darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagefca0d6af912a46099b46ad5087408b77 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pagee20e4f77e64c4f89b4b966b712cb55fb darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page90534dd002054db999eaaaad234ab3ab darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page258e11c05a8b404a886240f49a23c855 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Paged618ecd15b0149fcb38fe09d1b153c16 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pageed6df4c55f124ad2ae1ceb4bd3f88713 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page9e08fb63ad0442508cb3e87ee672168b darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page6d14d0444e854494b7e12cd2d58c0d33 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageb09fff743d91411c9e86c013c71cc289 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagecfcb18da504e407fbc8695fb2036bf38 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pagea8c2f377cbd345f587c2a6dfbfa1dc18 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page2220794e961546d2869fd7306dc58903 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page514134d37cb746f89a0fe2db61579b82 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Paged8045ea2e87f4bc393e1ca573f987236 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page8f27893b624747ad8457dea3e7714d90 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagedfca6d61807f40038969a32ecf0a8cb3 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page3d5df096db304c90a80d4ef7c96ca49c darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page982d041faaeb40809cb07d83b81fcfcb darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page479e5986f87341dcba5b98a69fc924f0 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pageed26bc0b2aeb4521addb18c54cd35d43 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page61b618a236d24553b11b25fe041a7abc darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pageb73740ef37044190aaf4f4cf6ecb9888 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pageb7a78d3aa54a491bbc9ddfed4518475a darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagee62e32723c9b41b0879627775d1bcbc2 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page00b0100fe3be425883dd05a294a3235c darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page86cbbc15ea1c4aaaba93d82574458fbc darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pageda25bd51d03f4026a3dd2590fd7a4fdd darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page1980819c2789419e9c0a2fa2e1df73ff darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page0b27f7f8df5d4931a0d2befa3463a21e darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page5596d63a21e44242854e98d84316ba76 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page6fc0596bf4cd4176b51cb6348432c702 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagee52c74f408fc4802b56b56434f70db11 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page55dd90f20bde43269835b38d43029747 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page86c8e58323e14e268dc9a9458d0cd883 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagebf8c5a9097e7445bbffce114c9fa90c3 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page42f5c217bd0b405992fecdbfe12fe282 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page43e9127bb04c45c7a61a65bdc4aacc71 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pageb7831424f6964c89815faeaa2eee2485 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page222da684e22a4aaaa2fac884860f696e darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page271f81ec899a441fb06ac8e5699129bd darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Paged39026c52f8a4019a051310e6f6d8ccb darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page27cd5e54f2e5408e862f3e4bb78ce7c2 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

