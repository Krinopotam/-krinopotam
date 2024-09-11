
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Paged5dd4790bffc4a4ba318f4451f56786d = lazy(() => import('./../pages/Paged5dd4790bffc4a4ba318f4451f56786d'))
    const Pageb417a44632254037b6b57eee94a6f46e = lazy(() => import('./../pages/Pageb417a44632254037b6b57eee94a6f46e'))

    const Page3589641e806240f4b733e48224c40391 = lazy(() => import('./../pages/Page3589641e806240f4b733e48224c40391'))
    const Page76fd218030364237a1752b3d36580603 = lazy(() => import('./../pages/Page76fd218030364237a1752b3d36580603'))

    const Page6f471740bab44a509b1e4e306da42873 = lazy(() => import('./../pages/Page6f471740bab44a509b1e4e306da42873'))
    const Pagea5430602eb074d4fae5563ccbcd2dc98 = lazy(() => import('./../pages/Pagea5430602eb074d4fae5563ccbcd2dc98'))
    const Page0a06258ba5124224bd5d9854ede52c1d = lazy(() => import('./../pages/Page0a06258ba5124224bd5d9854ede52c1d'))
    const Page01894d243bcf4170a9cd41a732fc3a32 = lazy(() => import('./../pages/Page01894d243bcf4170a9cd41a732fc3a32'))
    const Page9307bce8cf1c4bff81876d0d555cfa37 = lazy(() => import('./../pages/Page9307bce8cf1c4bff81876d0d555cfa37'))
    const Page7b00233b086a4bee92d46516b486862b = lazy(() => import('./../pages/Page7b00233b086a4bee92d46516b486862b'))
    const Page10a0a70b26e44f458c2dac4d8a404586 = lazy(() => import('./../pages/Page10a0a70b26e44f458c2dac4d8a404586'))
    const Page7d8d4c1cac3b4f96b80c2e79fa9dbd85 = lazy(() => import('./../pages/Page7d8d4c1cac3b4f96b80c2e79fa9dbd85'))
    const Page010884ba86d14c6591578420fbd76c01 = lazy(() => import('./../pages/Page010884ba86d14c6591578420fbd76c01'))
    const Page870ef5d7092c42bcae210c92c6ad3bf1 = lazy(() => import('./../pages/Page870ef5d7092c42bcae210c92c6ad3bf1'))

    const Page9cb9641be439409ea1ee334655ea0c33 = lazy(() => import('./../pages/Page9cb9641be439409ea1ee334655ea0c33'))
    const Pagecb8e25e1c2914659897dcf5576382640 = lazy(() => import('./../pages/Pagecb8e25e1c2914659897dcf5576382640'))
    const Pagee56b1f0f85f443399187a1e2de0eb895 = lazy(() => import('./../pages/Pagee56b1f0f85f443399187a1e2de0eb895'))

    const Page4d78ea4854964fa1ab265bee3574d8bf = lazy(() => import('./../pages/Page4d78ea4854964fa1ab265bee3574d8bf'))
    const Page11d4345abc5b447d91fc5ff99e549aa9 = lazy(() => import('./../pages/Page11d4345abc5b447d91fc5ff99e549aa9'))
    const Page17065a6da0454dc692c006344656649b = lazy(() => import('./../pages/Page17065a6da0454dc692c006344656649b'))
    const Page85ced94b651b49019c65772ae608718b = lazy(() => import('./../pages/Page85ced94b651b49019c65772ae608718b'))
    const Page41c5dc60d2eb408290a303a82957c49e = lazy(() => import('./../pages/Page41c5dc60d2eb408290a303a82957c49e'))
    const Pagea88296cb655f452f8c94928e3170a1d1 = lazy(() => import('./../pages/Pagea88296cb655f452f8c94928e3170a1d1'))
    const Page7dd6bad255be4ba3921e8d56bc07497c = lazy(() => import('./../pages/Page7dd6bad255be4ba3921e8d56bc07497c'))
    const Page330c492a9b57467c96e2ef52319c3a9c = lazy(() => import('./../pages/Page330c492a9b57467c96e2ef52319c3a9c'))
    const Pageb991c5b0b9644f64b4e352711a5b9b37 = lazy(() => import('./../pages/Pageb991c5b0b9644f64b4e352711a5b9b37'))
    const Page81da5a7754cd4e3aa4f3a03bf35a81fa = lazy(() => import('./../pages/Page81da5a7754cd4e3aa4f3a03bf35a81fa'))
    const Page75dee77f54034dbeb9d5e04054dbac0a = lazy(() => import('./../pages/Page75dee77f54034dbeb9d5e04054dbac0a'))
    const Page77a69354fff14a04a021b5768c84586c = lazy(() => import('./../pages/Page77a69354fff14a04a021b5768c84586c'))
    const Pageee5f8ad6bcc54d1d82bcb7f0a2fc288e = lazy(() => import('./../pages/Pageee5f8ad6bcc54d1d82bcb7f0a2fc288e'))
    const Page81e8c3fee5b943eeb3c71538482666dd = lazy(() => import('./../pages/Page81e8c3fee5b943eeb3c71538482666dd'))

    const Page15cf4af039c74b35a3c8607c1561c61f = lazy(() => import('./../pages/Page15cf4af039c74b35a3c8607c1561c61f'))

    const Page20fb93bc5d234e61bed158a217f6dce5 = lazy(() => import('./../pages/Page20fb93bc5d234e61bed158a217f6dce5'))
    const Page44b600f2b8b84ff1ad02206341d4d833 = lazy(() => import('./../pages/Page44b600f2b8b84ff1ad02206341d4d833'))
    const Page4b297e9374c3488288cf1f557f18574e = lazy(() => import('./../pages/Page4b297e9374c3488288cf1f557f18574e'))
    const Pagea059174d154e4c09ae94f04653fe14da = lazy(() => import('./../pages/Pagea059174d154e4c09ae94f04653fe14da'))
    const Page4e80b166a8ec4f56944adcef4ec24e4f = lazy(() => import('./../pages/Page4e80b166a8ec4f56944adcef4ec24e4f'))
    const Pagec1a907493a1842aa91b0687ab3c2f765 = lazy(() => import('./../pages/Pagec1a907493a1842aa91b0687ab3c2f765'))
    const Page7938a931d3b6454fbc9b8c9df8ad8613 = lazy(() => import('./../pages/Page7938a931d3b6454fbc9b8c9df8ad8613'))
    const Page60b60251ce544ea683d0fb3831ed0a98 = lazy(() => import('./../pages/Page60b60251ce544ea683d0fb3831ed0a98'))

    const Pagec47737910bfd45acb7ebb3c438ea108d = lazy(() => import('./../pages/Pagec47737910bfd45acb7ebb3c438ea108d'))
    const Page21c3a21fde44480a9e26390d26028f32 = lazy(() => import('./../pages/Page21c3a21fde44480a9e26390d26028f32'))
    const Page39df7a06c4a4467c9aee5a2270b93006 = lazy(() => import('./../pages/Page39df7a06c4a4467c9aee5a2270b93006'))
    const Pagea4e16cb82aac40f59b640b3b9a1acce1 = lazy(() => import('./../pages/Pagea4e16cb82aac40f59b640b3b9a1acce1'))
    const Page45490bcae3ad4516ad23d12903611531 = lazy(() => import('./../pages/Page45490bcae3ad4516ad23d12903611531'))
    const Pagee68b7444196d4b6aad0ce4a8cfacbd89 = lazy(() => import('./../pages/Pagee68b7444196d4b6aad0ce4a8cfacbd89'))
    const Pageee7a072ce5684090a5dcf41af93dde73 = lazy(() => import('./../pages/Pageee7a072ce5684090a5dcf41af93dde73'))
    const Page1cf567a282ee49689b47a1204a0bc357 = lazy(() => import('./../pages/Page1cf567a282ee49689b47a1204a0bc357'))
    const Page493b5c4a854848289b9fe807a0b58f9b = lazy(() => import('./../pages/Page493b5c4a854848289b9fe807a0b58f9b'))
    const Paged4e9e488f18642a8930da2074fedfe4d = lazy(() => import('./../pages/Paged4e9e488f18642a8930da2074fedfe4d'))
    const Pageaf28ba433d5847e7864207c433b835ce = lazy(() => import('./../pages/Pageaf28ba433d5847e7864207c433b835ce'))
    const Page5532b105a7a0446489d3f937105fd8d9 = lazy(() => import('./../pages/Page5532b105a7a0446489d3f937105fd8d9'))
    const Page0b76fa0b7bb64706a4b759b4c77953fb = lazy(() => import('./../pages/Page0b76fa0b7bb64706a4b759b4c77953fb'))
    const Page5440d91838664ad2a759ebfbdc9571b3 = lazy(() => import('./../pages/Page5440d91838664ad2a759ebfbdc9571b3'))
    const Page9268691cbab0436391d12e524ac0384a = lazy(() => import('./../pages/Page9268691cbab0436391d12e524ac0384a'))

    const Page8e3dea78107f4b929a1c602531fb6e12 = lazy(() => import('./../pages/Page8e3dea78107f4b929a1c602531fb6e12'))

    const Pageb5cfc9b9a3244ce0b45ae951f5657eb4 = lazy(() => import('./../pages/Pageb5cfc9b9a3244ce0b45ae951f5657eb4'))
    const Pagee4d20fb08ca346e49b11b33ac568c3ff = lazy(() => import('./../pages/Pagee4d20fb08ca346e49b11b33ac568c3ff'))
    const Page0bff21cb9556419798d12622afc8295c = lazy(() => import('./../pages/Page0bff21cb9556419798d12622afc8295c'))
    const Page9f852bdd2e4b40e6aeb9c5c60cff55ea = lazy(() => import('./../pages/Page9f852bdd2e4b40e6aeb9c5c60cff55ea'))
    const Pagec5228604c3b147db892c4291c533d8ec = lazy(() => import('./../pages/Pagec5228604c3b147db892c4291c533d8ec'))
    const Page58e84312f6d14ded8d1ee3ce055a7c08 = lazy(() => import('./../pages/Page58e84312f6d14ded8d1ee3ce055a7c08'))
    const Page8ca9014668f74791adf2edb344cf71da = lazy(() => import('./../pages/Page8ca9014668f74791adf2edb344cf71da'))
    const Page0adcefbf92f24ca3a3663c68f1e045be = lazy(() => import('./../pages/Page0adcefbf92f24ca3a3663c68f1e045be'))
    const Page5141a604e3e6411ca2d0533c18f67105 = lazy(() => import('./../pages/Page5141a604e3e6411ca2d0533c18f67105'))

    const Pageede8153981e941c7a6bf7ab613757adb = lazy(() => import('./../pages/Pageede8153981e941c7a6bf7ab613757adb'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Paged5dd4790bffc4a4ba318f4451f56786d darkMode={props.darkMode} />},
                        {path:"Test2", element:<Pageb417a44632254037b6b57eee94a6f46e darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page3589641e806240f4b733e48224c40391 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page76fd218030364237a1752b3d36580603 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page6f471740bab44a509b1e4e306da42873 darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Pagea5430602eb074d4fae5563ccbcd2dc98 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page0a06258ba5124224bd5d9854ede52c1d darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page01894d243bcf4170a9cd41a732fc3a32 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page9307bce8cf1c4bff81876d0d555cfa37 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page7b00233b086a4bee92d46516b486862b darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page10a0a70b26e44f458c2dac4d8a404586 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page7d8d4c1cac3b4f96b80c2e79fa9dbd85 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page010884ba86d14c6591578420fbd76c01 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page870ef5d7092c42bcae210c92c6ad3bf1 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page9cb9641be439409ea1ee334655ea0c33 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagecb8e25e1c2914659897dcf5576382640 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagee56b1f0f85f443399187a1e2de0eb895 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page4d78ea4854964fa1ab265bee3574d8bf darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page11d4345abc5b447d91fc5ff99e549aa9 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page17065a6da0454dc692c006344656649b darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page85ced94b651b49019c65772ae608718b darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page41c5dc60d2eb408290a303a82957c49e darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagea88296cb655f452f8c94928e3170a1d1 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page7dd6bad255be4ba3921e8d56bc07497c darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page330c492a9b57467c96e2ef52319c3a9c darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pageb991c5b0b9644f64b4e352711a5b9b37 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page81da5a7754cd4e3aa4f3a03bf35a81fa darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page75dee77f54034dbeb9d5e04054dbac0a darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page77a69354fff14a04a021b5768c84586c darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pageee5f8ad6bcc54d1d82bcb7f0a2fc288e darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page81e8c3fee5b943eeb3c71538482666dd darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page15cf4af039c74b35a3c8607c1561c61f darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page20fb93bc5d234e61bed158a217f6dce5 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page44b600f2b8b84ff1ad02206341d4d833 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page4b297e9374c3488288cf1f557f18574e darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagea059174d154e4c09ae94f04653fe14da darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page4e80b166a8ec4f56944adcef4ec24e4f darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagec1a907493a1842aa91b0687ab3c2f765 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page7938a931d3b6454fbc9b8c9df8ad8613 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page60b60251ce544ea683d0fb3831ed0a98 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagec47737910bfd45acb7ebb3c438ea108d darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page21c3a21fde44480a9e26390d26028f32 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page39df7a06c4a4467c9aee5a2270b93006 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagea4e16cb82aac40f59b640b3b9a1acce1 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page45490bcae3ad4516ad23d12903611531 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagee68b7444196d4b6aad0ce4a8cfacbd89 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pageee7a072ce5684090a5dcf41af93dde73 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page1cf567a282ee49689b47a1204a0bc357 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page493b5c4a854848289b9fe807a0b58f9b darkMode={props.darkMode} />},
                        {path:"Tree", element:<Paged4e9e488f18642a8930da2074fedfe4d darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pageaf28ba433d5847e7864207c433b835ce darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page5532b105a7a0446489d3f937105fd8d9 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page0b76fa0b7bb64706a4b759b4c77953fb darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page5440d91838664ad2a759ebfbdc9571b3 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page9268691cbab0436391d12e524ac0384a darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page8e3dea78107f4b929a1c602531fb6e12 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pageb5cfc9b9a3244ce0b45ae951f5657eb4 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pagee4d20fb08ca346e49b11b33ac568c3ff darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page0bff21cb9556419798d12622afc8295c darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page9f852bdd2e4b40e6aeb9c5c60cff55ea darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagec5228604c3b147db892c4291c533d8ec darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page58e84312f6d14ded8d1ee3ce055a7c08 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page8ca9014668f74791adf2edb344cf71da darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page0adcefbf92f24ca3a3663c68f1e045be darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page5141a604e3e6411ca2d0533c18f67105 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pageede8153981e941c7a6bf7ab613757adb darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

