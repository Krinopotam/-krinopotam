
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagee953fcdd788f4ae6829027b5e3a8a2ce = lazy(() => import('./../pages/Pagee953fcdd788f4ae6829027b5e3a8a2ce'))
    const Page0750856eadd042b69887fd97f085e1be = lazy(() => import('./../pages/Page0750856eadd042b69887fd97f085e1be'))

    const Pageb1ab8a3b715a478b9880bf4102d65268 = lazy(() => import('./../pages/Pageb1ab8a3b715a478b9880bf4102d65268'))
    const Pagea608826d03af4c00a7f678004dbb7ce8 = lazy(() => import('./../pages/Pagea608826d03af4c00a7f678004dbb7ce8'))

    const Page12e2d66c218b431799ce1570877deccf = lazy(() => import('./../pages/Page12e2d66c218b431799ce1570877deccf'))
    const Page54e7f9c6c65f40878c0ce6cc552fed21 = lazy(() => import('./../pages/Page54e7f9c6c65f40878c0ce6cc552fed21'))
    const Page31602dbbeb424777be4c112b29ae1220 = lazy(() => import('./../pages/Page31602dbbeb424777be4c112b29ae1220'))
    const Paged8249a787c6549b0af0c10f495f7ffca = lazy(() => import('./../pages/Paged8249a787c6549b0af0c10f495f7ffca'))
    const Paged6f69140be6143b1b10e6926c88ca199 = lazy(() => import('./../pages/Paged6f69140be6143b1b10e6926c88ca199'))
    const Page654a5842fb91477d8b2fe69a9d741cdd = lazy(() => import('./../pages/Page654a5842fb91477d8b2fe69a9d741cdd'))
    const Page4271b9db50734b2ca2b848ad079f6e6e = lazy(() => import('./../pages/Page4271b9db50734b2ca2b848ad079f6e6e'))
    const Page0ff1a6cd2d334f34b640a23da932afd7 = lazy(() => import('./../pages/Page0ff1a6cd2d334f34b640a23da932afd7'))
    const Pageea4db843a1a04bef9c09bc00a27418d4 = lazy(() => import('./../pages/Pageea4db843a1a04bef9c09bc00a27418d4'))
    const Paged4a3336c0b904f538251282ad3b69372 = lazy(() => import('./../pages/Paged4a3336c0b904f538251282ad3b69372'))

    const Pagebade917dd417433fb76b6a115ea9192f = lazy(() => import('./../pages/Pagebade917dd417433fb76b6a115ea9192f'))
    const Pageb67ffbb3d5fe483183c0a21edce3d522 = lazy(() => import('./../pages/Pageb67ffbb3d5fe483183c0a21edce3d522'))
    const Pagec7530477aecc4ef6ace4b7f0d60ad35b = lazy(() => import('./../pages/Pagec7530477aecc4ef6ace4b7f0d60ad35b'))

    const Page96506f111ffd4c35a1abfa3ab4794227 = lazy(() => import('./../pages/Page96506f111ffd4c35a1abfa3ab4794227'))
    const Page9c3e372dddc146ba944a47d6fa11d3f1 = lazy(() => import('./../pages/Page9c3e372dddc146ba944a47d6fa11d3f1'))
    const Pagef3403bbe02fc4b8c926ddec4ce67ae7e = lazy(() => import('./../pages/Pagef3403bbe02fc4b8c926ddec4ce67ae7e'))
    const Page3608725c0daf4d1e8e73ad81a9bab5bb = lazy(() => import('./../pages/Page3608725c0daf4d1e8e73ad81a9bab5bb'))
    const Pagedc26dc8f06b44895b4702058ced1ab5e = lazy(() => import('./../pages/Pagedc26dc8f06b44895b4702058ced1ab5e'))
    const Page6a86c5cac702492c9f1a6f6a690b2935 = lazy(() => import('./../pages/Page6a86c5cac702492c9f1a6f6a690b2935'))
    const Page94878229d52e4c999803e808786b6535 = lazy(() => import('./../pages/Page94878229d52e4c999803e808786b6535'))
    const Page60b2471f5e084f5dad2cc712f65facb6 = lazy(() => import('./../pages/Page60b2471f5e084f5dad2cc712f65facb6'))
    const Page1801366c81094acd9514e5afb384b7f2 = lazy(() => import('./../pages/Page1801366c81094acd9514e5afb384b7f2'))
    const Page0e430b9c14ce46739c57ca0a18374117 = lazy(() => import('./../pages/Page0e430b9c14ce46739c57ca0a18374117'))
    const Page7ecb5f96d9144d37a15aaa034b0d7652 = lazy(() => import('./../pages/Page7ecb5f96d9144d37a15aaa034b0d7652'))
    const Page57e9033691204e8c96db44e4dad0bd2d = lazy(() => import('./../pages/Page57e9033691204e8c96db44e4dad0bd2d'))
    const Page2cacedc8d9e04486afa8c9637accb6e7 = lazy(() => import('./../pages/Page2cacedc8d9e04486afa8c9637accb6e7'))
    const Page8552b821e0de44728c3359520c9c0fab = lazy(() => import('./../pages/Page8552b821e0de44728c3359520c9c0fab'))

    const Pagecc8c553dc52b44b09d97132c70a17b1a = lazy(() => import('./../pages/Pagecc8c553dc52b44b09d97132c70a17b1a'))

    const Pageb7c5739bdac94a8d8f4e5b06cea3cf04 = lazy(() => import('./../pages/Pageb7c5739bdac94a8d8f4e5b06cea3cf04'))
    const Page58edceed29c4445aad67fbe0b7aa933f = lazy(() => import('./../pages/Page58edceed29c4445aad67fbe0b7aa933f'))
    const Page480c785bc4154022a165ca5bb5b531df = lazy(() => import('./../pages/Page480c785bc4154022a165ca5bb5b531df'))
    const Pageeac0ff4b5b8349d68050d19bb5d8ac64 = lazy(() => import('./../pages/Pageeac0ff4b5b8349d68050d19bb5d8ac64'))
    const Page9364d6a9754d4218a0373089a5225121 = lazy(() => import('./../pages/Page9364d6a9754d4218a0373089a5225121'))
    const Page31de891b37f9485daad851bd78b40a69 = lazy(() => import('./../pages/Page31de891b37f9485daad851bd78b40a69'))
    const Page6d1ce399bb8b4d958159e5f2ec6bb0c5 = lazy(() => import('./../pages/Page6d1ce399bb8b4d958159e5f2ec6bb0c5'))
    const Page63f43bcb39cd4a9d81efa08ea518bf2c = lazy(() => import('./../pages/Page63f43bcb39cd4a9d81efa08ea518bf2c'))

    const Page7681f75316364ecf8d191462c3e55859 = lazy(() => import('./../pages/Page7681f75316364ecf8d191462c3e55859'))
    const Pagebd414d333f9047849a19cda45f48cddb = lazy(() => import('./../pages/Pagebd414d333f9047849a19cda45f48cddb'))
    const Page35c35600ca314987a66c6d57cfefdd0d = lazy(() => import('./../pages/Page35c35600ca314987a66c6d57cfefdd0d'))
    const Page2fa87cad79c64bbead9298a25434a1e0 = lazy(() => import('./../pages/Page2fa87cad79c64bbead9298a25434a1e0'))
    const Pageabd9f097bb8b47f886e5e98337b444be = lazy(() => import('./../pages/Pageabd9f097bb8b47f886e5e98337b444be'))
    const Page3efffbbeeff342089eca7f2ab23766f5 = lazy(() => import('./../pages/Page3efffbbeeff342089eca7f2ab23766f5'))
    const Page8a84c073453d4a06b9783134b26e2d0e = lazy(() => import('./../pages/Page8a84c073453d4a06b9783134b26e2d0e'))
    const Page81b6b962f79646c6b7a0e4b9b24e4a57 = lazy(() => import('./../pages/Page81b6b962f79646c6b7a0e4b9b24e4a57'))
    const Page7edcdadb1517455d86485f943643ad89 = lazy(() => import('./../pages/Page7edcdadb1517455d86485f943643ad89'))
    const Pagefce96f7b9f50451c9643398208c7e229 = lazy(() => import('./../pages/Pagefce96f7b9f50451c9643398208c7e229'))
    const Pagec19bcf2073c4423089bd721be9b2c5d9 = lazy(() => import('./../pages/Pagec19bcf2073c4423089bd721be9b2c5d9'))
    const Page663a1edd3d7c436ab1742eaddc29f5c2 = lazy(() => import('./../pages/Page663a1edd3d7c436ab1742eaddc29f5c2'))
    const Page2acacaaf4abd485bafb45498483f102e = lazy(() => import('./../pages/Page2acacaaf4abd485bafb45498483f102e'))
    const Page96eeae4d7ebd46d08f010e96cd462526 = lazy(() => import('./../pages/Page96eeae4d7ebd46d08f010e96cd462526'))
    const Page45409d84af75469585da2c73808c201c = lazy(() => import('./../pages/Page45409d84af75469585da2c73808c201c'))

    const Page2d7db7f30198478982887acb3fd56b0a = lazy(() => import('./../pages/Page2d7db7f30198478982887acb3fd56b0a'))

    const Page40097371fdd645fcbcca8a12cced15c9 = lazy(() => import('./../pages/Page40097371fdd645fcbcca8a12cced15c9'))
    const Page8ea226ba3251485e9e84804cd15cd461 = lazy(() => import('./../pages/Page8ea226ba3251485e9e84804cd15cd461'))
    const Paged3fa8c0a0c5d4d4388b0c0bb72520c02 = lazy(() => import('./../pages/Paged3fa8c0a0c5d4d4388b0c0bb72520c02'))
    const Pagee74966971fcf4c19abbf6f0dfdf66188 = lazy(() => import('./../pages/Pagee74966971fcf4c19abbf6f0dfdf66188'))
    const Pagebd40edb81e72415bbbabc9a0add286c8 = lazy(() => import('./../pages/Pagebd40edb81e72415bbbabc9a0add286c8'))
    const Page1d868796141345b699a959af26e5e0ed = lazy(() => import('./../pages/Page1d868796141345b699a959af26e5e0ed'))
    const Page3ed0424a0d78445dbf5811db3c0c6a44 = lazy(() => import('./../pages/Page3ed0424a0d78445dbf5811db3c0c6a44'))
    const Pageed352210af9344ca90ef1f0daa0143d2 = lazy(() => import('./../pages/Pageed352210af9344ca90ef1f0daa0143d2'))
    const Pagea50668d2a11742028ae7d1fae959f064 = lazy(() => import('./../pages/Pagea50668d2a11742028ae7d1fae959f064'))

    const Page67d6514f0ebf4cb9abac1466d4a660f2 = lazy(() => import('./../pages/Page67d6514f0ebf4cb9abac1466d4a660f2'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Pagee953fcdd788f4ae6829027b5e3a8a2ce darkMode={props.darkMode} />},
                        {path:"Test2", element:<Page0750856eadd042b69887fd97f085e1be darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pageb1ab8a3b715a478b9880bf4102d65268 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagea608826d03af4c00a7f678004dbb7ce8 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page12e2d66c218b431799ce1570877deccf darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page54e7f9c6c65f40878c0ce6cc552fed21 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page31602dbbeb424777be4c112b29ae1220 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Paged8249a787c6549b0af0c10f495f7ffca darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Paged6f69140be6143b1b10e6926c88ca199 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page654a5842fb91477d8b2fe69a9d741cdd darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page4271b9db50734b2ca2b848ad079f6e6e darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page0ff1a6cd2d334f34b640a23da932afd7 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pageea4db843a1a04bef9c09bc00a27418d4 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Paged4a3336c0b904f538251282ad3b69372 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagebade917dd417433fb76b6a115ea9192f darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pageb67ffbb3d5fe483183c0a21edce3d522 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagec7530477aecc4ef6ace4b7f0d60ad35b darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page96506f111ffd4c35a1abfa3ab4794227 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page9c3e372dddc146ba944a47d6fa11d3f1 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagef3403bbe02fc4b8c926ddec4ce67ae7e darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page3608725c0daf4d1e8e73ad81a9bab5bb darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Pagedc26dc8f06b44895b4702058ced1ab5e darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page6a86c5cac702492c9f1a6f6a690b2935 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page94878229d52e4c999803e808786b6535 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page60b2471f5e084f5dad2cc712f65facb6 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page1801366c81094acd9514e5afb384b7f2 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page0e430b9c14ce46739c57ca0a18374117 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page7ecb5f96d9144d37a15aaa034b0d7652 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page57e9033691204e8c96db44e4dad0bd2d darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page2cacedc8d9e04486afa8c9637accb6e7 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page8552b821e0de44728c3359520c9c0fab darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagecc8c553dc52b44b09d97132c70a17b1a darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageb7c5739bdac94a8d8f4e5b06cea3cf04 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page58edceed29c4445aad67fbe0b7aa933f darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page480c785bc4154022a165ca5bb5b531df darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pageeac0ff4b5b8349d68050d19bb5d8ac64 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page9364d6a9754d4218a0373089a5225121 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page31de891b37f9485daad851bd78b40a69 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page6d1ce399bb8b4d958159e5f2ec6bb0c5 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page63f43bcb39cd4a9d81efa08ea518bf2c darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page7681f75316364ecf8d191462c3e55859 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pagebd414d333f9047849a19cda45f48cddb darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page35c35600ca314987a66c6d57cfefdd0d darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page2fa87cad79c64bbead9298a25434a1e0 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageabd9f097bb8b47f886e5e98337b444be darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page3efffbbeeff342089eca7f2ab23766f5 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page8a84c073453d4a06b9783134b26e2d0e darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page81b6b962f79646c6b7a0e4b9b24e4a57 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page7edcdadb1517455d86485f943643ad89 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagefce96f7b9f50451c9643398208c7e229 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagec19bcf2073c4423089bd721be9b2c5d9 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page663a1edd3d7c436ab1742eaddc29f5c2 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page2acacaaf4abd485bafb45498483f102e darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page96eeae4d7ebd46d08f010e96cd462526 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page45409d84af75469585da2c73808c201c darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page2d7db7f30198478982887acb3fd56b0a darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page40097371fdd645fcbcca8a12cced15c9 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page8ea226ba3251485e9e84804cd15cd461 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Paged3fa8c0a0c5d4d4388b0c0bb72520c02 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagee74966971fcf4c19abbf6f0dfdf66188 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagebd40edb81e72415bbbabc9a0add286c8 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page1d868796141345b699a959af26e5e0ed darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page3ed0424a0d78445dbf5811db3c0c6a44 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageed352210af9344ca90ef1f0daa0143d2 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagea50668d2a11742028ae7d1fae959f064 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page67d6514f0ebf4cb9abac1466d4a660f2 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

