
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page03c16b7eb2e34b50a16d9bef24c9f79c = lazy(() => import('./../pages/Page03c16b7eb2e34b50a16d9bef24c9f79c'))

    const Pagec319ba2e0a6b499ba0d5145b4f577c42 = lazy(() => import('./../pages/Pagec319ba2e0a6b499ba0d5145b4f577c42'))
    const Pagede45a59d12f84dcda46d8b8399115203 = lazy(() => import('./../pages/Pagede45a59d12f84dcda46d8b8399115203'))

    const Page1a334065666042b397f0fc3ab4ebc050 = lazy(() => import('./../pages/Page1a334065666042b397f0fc3ab4ebc050'))
    const Page934a189a4ac9420485b792887cd0a3aa = lazy(() => import('./../pages/Page934a189a4ac9420485b792887cd0a3aa'))
    const Page7e7e6dda4ce142d9a4c38130f91bcd29 = lazy(() => import('./../pages/Page7e7e6dda4ce142d9a4c38130f91bcd29'))
    const Page327717d7e46d47f0866a20b173126df3 = lazy(() => import('./../pages/Page327717d7e46d47f0866a20b173126df3'))
    const Page716e04816ea64924a2a3da74b8952bea = lazy(() => import('./../pages/Page716e04816ea64924a2a3da74b8952bea'))
    const Page20749135007247beb3719d83d6d17e52 = lazy(() => import('./../pages/Page20749135007247beb3719d83d6d17e52'))
    const Pageabe4413f7688415cb1cb8cbcb6b899c9 = lazy(() => import('./../pages/Pageabe4413f7688415cb1cb8cbcb6b899c9'))
    const Page6c96cfb96a3b484988cccb54cdad349d = lazy(() => import('./../pages/Page6c96cfb96a3b484988cccb54cdad349d'))
    const Page770015650461492f9335a49e7c8cbf3c = lazy(() => import('./../pages/Page770015650461492f9335a49e7c8cbf3c'))
    const Page1a6edf8cde804e2f9bb27e4fb4b5aa90 = lazy(() => import('./../pages/Page1a6edf8cde804e2f9bb27e4fb4b5aa90'))

    const Page0b1a5efd54ce4ef1a9ad390e4db21711 = lazy(() => import('./../pages/Page0b1a5efd54ce4ef1a9ad390e4db21711'))
    const Page2a91e0fbe49c49a09a27e9308b88f26a = lazy(() => import('./../pages/Page2a91e0fbe49c49a09a27e9308b88f26a'))
    const Pagef994db41a0a54d9a95cddffd6aa0d46c = lazy(() => import('./../pages/Pagef994db41a0a54d9a95cddffd6aa0d46c'))

    const Pagef6fd3aa3d79d4ee6ad4f6886c348806e = lazy(() => import('./../pages/Pagef6fd3aa3d79d4ee6ad4f6886c348806e'))
    const Pageecb6a67de5a342ddbad2f8dcabc3b625 = lazy(() => import('./../pages/Pageecb6a67de5a342ddbad2f8dcabc3b625'))
    const Pageec92938f710d47f292e1ab7ac2abb6dc = lazy(() => import('./../pages/Pageec92938f710d47f292e1ab7ac2abb6dc'))
    const Page955f6edbf67c471ea7a969be33782e98 = lazy(() => import('./../pages/Page955f6edbf67c471ea7a969be33782e98'))
    const Pagee449804504c8468dad416912c31bc497 = lazy(() => import('./../pages/Pagee449804504c8468dad416912c31bc497'))
    const Pagee4c1a36fe7924180aea097b652c9a470 = lazy(() => import('./../pages/Pagee4c1a36fe7924180aea097b652c9a470'))
    const Pagee9f5842b439d4b83b287f4f0fa24d3c9 = lazy(() => import('./../pages/Pagee9f5842b439d4b83b287f4f0fa24d3c9'))
    const Page8f9309b7f54f494abb49e40366251869 = lazy(() => import('./../pages/Page8f9309b7f54f494abb49e40366251869'))
    const Pagee1ffdafd15a84c338885eee8899edded = lazy(() => import('./../pages/Pagee1ffdafd15a84c338885eee8899edded'))
    const Page6383be6adcb74cbeb2792d3a3188f083 = lazy(() => import('./../pages/Page6383be6adcb74cbeb2792d3a3188f083'))
    const Page189912dc12694cd591e994840d403a87 = lazy(() => import('./../pages/Page189912dc12694cd591e994840d403a87'))
    const Page8054eb80131048a995157cf63d1e95d7 = lazy(() => import('./../pages/Page8054eb80131048a995157cf63d1e95d7'))
    const Page1ba03b1b0ba74d4595c0ed7ab147c3f6 = lazy(() => import('./../pages/Page1ba03b1b0ba74d4595c0ed7ab147c3f6'))
    const Page678aac367e6146ed8dee18569dcc15f8 = lazy(() => import('./../pages/Page678aac367e6146ed8dee18569dcc15f8'))

    const Page939db94cf2074aba9753afe17de372e0 = lazy(() => import('./../pages/Page939db94cf2074aba9753afe17de372e0'))

    const Pagef7ef5a2367744087847cdd8ff75db269 = lazy(() => import('./../pages/Pagef7ef5a2367744087847cdd8ff75db269'))
    const Page722d75beee864e09b32005fb018d6cf8 = lazy(() => import('./../pages/Page722d75beee864e09b32005fb018d6cf8'))
    const Pagef45f2a53e6da41d882c8e1f7cdbf330a = lazy(() => import('./../pages/Pagef45f2a53e6da41d882c8e1f7cdbf330a'))
    const Page09447a90b9d847f08b30511adf0cf736 = lazy(() => import('./../pages/Page09447a90b9d847f08b30511adf0cf736'))
    const Page609e1ce8647846d2852fa0011a169363 = lazy(() => import('./../pages/Page609e1ce8647846d2852fa0011a169363'))
    const Page274b57ab6a77409786de1731d88ff86f = lazy(() => import('./../pages/Page274b57ab6a77409786de1731d88ff86f'))
    const Page8e45db27f50a49e695eae7dce1cc5301 = lazy(() => import('./../pages/Page8e45db27f50a49e695eae7dce1cc5301'))
    const Page2e99fde7ca0f4d45a0220163e6fcf872 = lazy(() => import('./../pages/Page2e99fde7ca0f4d45a0220163e6fcf872'))

    const Page004b5bcc3e7949ce9d9dc0a239f7538f = lazy(() => import('./../pages/Page004b5bcc3e7949ce9d9dc0a239f7538f'))
    const Pagea35d8fd5ccd246c8a73eb988431602c5 = lazy(() => import('./../pages/Pagea35d8fd5ccd246c8a73eb988431602c5'))
    const Page86657ce4af3b49c5892a6a97dd181d4f = lazy(() => import('./../pages/Page86657ce4af3b49c5892a6a97dd181d4f'))
    const Pagebfafe98ae5e949fa91273266be5906c5 = lazy(() => import('./../pages/Pagebfafe98ae5e949fa91273266be5906c5'))
    const Page694ffa7149e149e3aa3243a53a5c30b8 = lazy(() => import('./../pages/Page694ffa7149e149e3aa3243a53a5c30b8'))
    const Page39bfe86d9d5a4127ad65e83dbf30a3a0 = lazy(() => import('./../pages/Page39bfe86d9d5a4127ad65e83dbf30a3a0'))
    const Page4c00107f9f3d4e5c972029063ab6db58 = lazy(() => import('./../pages/Page4c00107f9f3d4e5c972029063ab6db58'))
    const Page12b0ab27bbf34b548b112066dd13aceb = lazy(() => import('./../pages/Page12b0ab27bbf34b548b112066dd13aceb'))
    const Paged423ca96dc3a453c8a0cc0562bb7753c = lazy(() => import('./../pages/Paged423ca96dc3a453c8a0cc0562bb7753c'))
    const Page539b89dafaaf42bba9cb2aae641d1a66 = lazy(() => import('./../pages/Page539b89dafaaf42bba9cb2aae641d1a66'))
    const Pagefa4103ac7e0d4a6ea3615206e1335484 = lazy(() => import('./../pages/Pagefa4103ac7e0d4a6ea3615206e1335484'))
    const Page48bdc83ccb5f459c96de7e63868fe8be = lazy(() => import('./../pages/Page48bdc83ccb5f459c96de7e63868fe8be'))
    const Page0cb1becfed904fddadb42c75f51dc5ce = lazy(() => import('./../pages/Page0cb1becfed904fddadb42c75f51dc5ce'))
    const Page4c639358089e464b9f539296a7979ccd = lazy(() => import('./../pages/Page4c639358089e464b9f539296a7979ccd'))
    const Pagec3092d8357d842a5bf6f203728038e63 = lazy(() => import('./../pages/Pagec3092d8357d842a5bf6f203728038e63'))

    const Pagee09004072eae4f87b8e8717cbcb8b82e = lazy(() => import('./../pages/Pagee09004072eae4f87b8e8717cbcb8b82e'))

    const Page9be3a258251c42d0b4eca6f6c681d300 = lazy(() => import('./../pages/Page9be3a258251c42d0b4eca6f6c681d300'))
    const Page3ec46b382b7d45b598ee7c4858887f56 = lazy(() => import('./../pages/Page3ec46b382b7d45b598ee7c4858887f56'))
    const Page63926e164f5a4ae8b4c599a5be56895a = lazy(() => import('./../pages/Page63926e164f5a4ae8b4c599a5be56895a'))
    const Pagee3719c02183648589cf8cfffa6eaa482 = lazy(() => import('./../pages/Pagee3719c02183648589cf8cfffa6eaa482'))
    const Page25d1cd2867564692affafc2183614416 = lazy(() => import('./../pages/Page25d1cd2867564692affafc2183614416'))
    const Page1b3faf1bea214cb98e731339b730ac8c = lazy(() => import('./../pages/Page1b3faf1bea214cb98e731339b730ac8c'))
    const Page485b3ac889c440a1b07a34bd616e803b = lazy(() => import('./../pages/Page485b3ac889c440a1b07a34bd616e803b'))
    const Page0383ddd50c4e4af8b1c313551964f068 = lazy(() => import('./../pages/Page0383ddd50c4e4af8b1c313551964f068'))
    const Paged6386c31cfbc4e7c855c1389181ddd83 = lazy(() => import('./../pages/Paged6386c31cfbc4e7c855c1389181ddd83'))

    const Pagef5001f7fd8734790af6f849fbc099715 = lazy(() => import('./../pages/Pagef5001f7fd8734790af6f849fbc099715'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page03c16b7eb2e34b50a16d9bef24c9f79c darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagec319ba2e0a6b499ba0d5145b4f577c42 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagede45a59d12f84dcda46d8b8399115203 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page1a334065666042b397f0fc3ab4ebc050 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page934a189a4ac9420485b792887cd0a3aa darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page7e7e6dda4ce142d9a4c38130f91bcd29 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page327717d7e46d47f0866a20b173126df3 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page716e04816ea64924a2a3da74b8952bea darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page20749135007247beb3719d83d6d17e52 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pageabe4413f7688415cb1cb8cbcb6b899c9 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page6c96cfb96a3b484988cccb54cdad349d darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page770015650461492f9335a49e7c8cbf3c darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page1a6edf8cde804e2f9bb27e4fb4b5aa90 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page0b1a5efd54ce4ef1a9ad390e4db21711 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page2a91e0fbe49c49a09a27e9308b88f26a darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagef994db41a0a54d9a95cddffd6aa0d46c darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagef6fd3aa3d79d4ee6ad4f6886c348806e darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pageecb6a67de5a342ddbad2f8dcabc3b625 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pageec92938f710d47f292e1ab7ac2abb6dc darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page955f6edbf67c471ea7a969be33782e98 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pagee449804504c8468dad416912c31bc497 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagee4c1a36fe7924180aea097b652c9a470 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagee9f5842b439d4b83b287f4f0fa24d3c9 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page8f9309b7f54f494abb49e40366251869 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pagee1ffdafd15a84c338885eee8899edded darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page6383be6adcb74cbeb2792d3a3188f083 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page189912dc12694cd591e994840d403a87 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page8054eb80131048a995157cf63d1e95d7 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page1ba03b1b0ba74d4595c0ed7ab147c3f6 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page678aac367e6146ed8dee18569dcc15f8 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page939db94cf2074aba9753afe17de372e0 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagef7ef5a2367744087847cdd8ff75db269 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page722d75beee864e09b32005fb018d6cf8 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pagef45f2a53e6da41d882c8e1f7cdbf330a darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page09447a90b9d847f08b30511adf0cf736 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page609e1ce8647846d2852fa0011a169363 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page274b57ab6a77409786de1731d88ff86f darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page8e45db27f50a49e695eae7dce1cc5301 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page2e99fde7ca0f4d45a0220163e6fcf872 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page004b5bcc3e7949ce9d9dc0a239f7538f darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagea35d8fd5ccd246c8a73eb988431602c5 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page86657ce4af3b49c5892a6a97dd181d4f darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagebfafe98ae5e949fa91273266be5906c5 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page694ffa7149e149e3aa3243a53a5c30b8 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page39bfe86d9d5a4127ad65e83dbf30a3a0 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page4c00107f9f3d4e5c972029063ab6db58 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page12b0ab27bbf34b548b112066dd13aceb darkMode={props.darkMode} />},
                        {path:"Simple", element:<Paged423ca96dc3a453c8a0cc0562bb7753c darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page539b89dafaaf42bba9cb2aae641d1a66 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagefa4103ac7e0d4a6ea3615206e1335484 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page48bdc83ccb5f459c96de7e63868fe8be darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page0cb1becfed904fddadb42c75f51dc5ce darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page4c639358089e464b9f539296a7979ccd darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagec3092d8357d842a5bf6f203728038e63 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagee09004072eae4f87b8e8717cbcb8b82e darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page9be3a258251c42d0b4eca6f6c681d300 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page3ec46b382b7d45b598ee7c4858887f56 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page63926e164f5a4ae8b4c599a5be56895a darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagee3719c02183648589cf8cfffa6eaa482 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page25d1cd2867564692affafc2183614416 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page1b3faf1bea214cb98e731339b730ac8c darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page485b3ac889c440a1b07a34bd616e803b darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page0383ddd50c4e4af8b1c313551964f068 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Paged6386c31cfbc4e7c855c1389181ddd83 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagef5001f7fd8734790af6f849fbc099715 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

