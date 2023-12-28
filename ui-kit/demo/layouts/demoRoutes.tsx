
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1a5ce3e784b1470dbfb4e7bcc85451a2 = lazy(() => import('./../pages/Page1a5ce3e784b1470dbfb4e7bcc85451a2'))
    const Page10b0db0031564d899654d5a3593938db = lazy(() => import('./../pages/Page10b0db0031564d899654d5a3593938db'))

    const Pageecaebd2bb7b74562ba5ed304b85d5d1c = lazy(() => import('./../pages/Pageecaebd2bb7b74562ba5ed304b85d5d1c'))
    const Page8694597d22c74c0ea8734b0eee056e86 = lazy(() => import('./../pages/Page8694597d22c74c0ea8734b0eee056e86'))
    const Page51a00d8e47b24a91825ebbc57cda7a94 = lazy(() => import('./../pages/Page51a00d8e47b24a91825ebbc57cda7a94'))
    const Page5dadaa2414334e5ebf616029c07e983f = lazy(() => import('./../pages/Page5dadaa2414334e5ebf616029c07e983f'))
    const Page80d4fa3c455447889d214a1874c2bf01 = lazy(() => import('./../pages/Page80d4fa3c455447889d214a1874c2bf01'))
    const Page0df03d9d8c0a4f638fb85d51fe2f0576 = lazy(() => import('./../pages/Page0df03d9d8c0a4f638fb85d51fe2f0576'))
    const Pagec68949babd0b4b0d8280dbf3879e6bef = lazy(() => import('./../pages/Pagec68949babd0b4b0d8280dbf3879e6bef'))
    const Page71b5e473b6d74b87846c0b7db4edd435 = lazy(() => import('./../pages/Page71b5e473b6d74b87846c0b7db4edd435'))
    const Pagee2f3bb7b0ffb497d8664ccf3184fee25 = lazy(() => import('./../pages/Pagee2f3bb7b0ffb497d8664ccf3184fee25'))

    const Page5d206848be5f4530bf913b04de6489d8 = lazy(() => import('./../pages/Page5d206848be5f4530bf913b04de6489d8'))
    const Page76f1a9842fa64951a4d8bf3d1bf96a85 = lazy(() => import('./../pages/Page76f1a9842fa64951a4d8bf3d1bf96a85'))

    const Page2b957140565f41e3a7f15aebd138eb86 = lazy(() => import('./../pages/Page2b957140565f41e3a7f15aebd138eb86'))
    const Pagefd7912bf5ee1480591c396bc1c7b33c4 = lazy(() => import('./../pages/Pagefd7912bf5ee1480591c396bc1c7b33c4'))
    const Pageff008946f4d64d41ae91a99768bdeb6f = lazy(() => import('./../pages/Pageff008946f4d64d41ae91a99768bdeb6f'))
    const Page5798af22d86e4226acca5a8955dc7fd4 = lazy(() => import('./../pages/Page5798af22d86e4226acca5a8955dc7fd4'))
    const Page27dd220af01b470c8f407cb2084d99a3 = lazy(() => import('./../pages/Page27dd220af01b470c8f407cb2084d99a3'))
    const Page83b2a116237444b3bd551083d7b357d3 = lazy(() => import('./../pages/Page83b2a116237444b3bd551083d7b357d3'))
    const Pagef1bb566263ed49e1a558227585a5ea5c = lazy(() => import('./../pages/Pagef1bb566263ed49e1a558227585a5ea5c'))
    const Page421ea6b6fc5b4a47be3dab11fa8dbfeb = lazy(() => import('./../pages/Page421ea6b6fc5b4a47be3dab11fa8dbfeb'))
    const Pagebd47e2bc764c4904b2b808289b6fed35 = lazy(() => import('./../pages/Pagebd47e2bc764c4904b2b808289b6fed35'))
    const Page4eec6584503d415093c02abccee9f7d1 = lazy(() => import('./../pages/Page4eec6584503d415093c02abccee9f7d1'))
    const Page6afb7416a2754da695623e272ffeadea = lazy(() => import('./../pages/Page6afb7416a2754da695623e272ffeadea'))
    const Pageadf4c72eff7645dd9a5e4fdf8f5910ce = lazy(() => import('./../pages/Pageadf4c72eff7645dd9a5e4fdf8f5910ce'))
    const Page1613bcd5ba9a4edd85617a6fbbe7a2f9 = lazy(() => import('./../pages/Page1613bcd5ba9a4edd85617a6fbbe7a2f9'))
    const Pagece6a909fe9b548e89216a78178bcbf49 = lazy(() => import('./../pages/Pagece6a909fe9b548e89216a78178bcbf49'))

    const Pageeae5b79556e94e10a3a1206069e0daf4 = lazy(() => import('./../pages/Pageeae5b79556e94e10a3a1206069e0daf4'))
    const Page99b32c5d06a744f8a0cda7dc19d989c2 = lazy(() => import('./../pages/Page99b32c5d06a744f8a0cda7dc19d989c2'))
    const Page50be64b473b04d6c8a353ea6eec30925 = lazy(() => import('./../pages/Page50be64b473b04d6c8a353ea6eec30925'))
    const Pagea024f23f5fcc4a65a43e469fb15b34e9 = lazy(() => import('./../pages/Pagea024f23f5fcc4a65a43e469fb15b34e9'))
    const Page8882037beae04392848be4a6c087de3b = lazy(() => import('./../pages/Page8882037beae04392848be4a6c087de3b'))
    const Page78ea92495a5044628359ee3a69202e10 = lazy(() => import('./../pages/Page78ea92495a5044628359ee3a69202e10'))
    const Page94a40ddf2a614784b7a7d602e493514c = lazy(() => import('./../pages/Page94a40ddf2a614784b7a7d602e493514c'))
    const Page1ab1a92aa4d94c6d938ce13f149146b1 = lazy(() => import('./../pages/Page1ab1a92aa4d94c6d938ce13f149146b1'))

    const Page1d1e19e955544753b67ee6c4401253d0 = lazy(() => import('./../pages/Page1d1e19e955544753b67ee6c4401253d0'))
    const Page59ee356890ce457c95ee73f53fdb6a55 = lazy(() => import('./../pages/Page59ee356890ce457c95ee73f53fdb6a55'))
    const Pagee0780049efeb40a0bdd41971255bb755 = lazy(() => import('./../pages/Pagee0780049efeb40a0bdd41971255bb755'))
    const Pagea696079a01634f24b607cb5df91896f2 = lazy(() => import('./../pages/Pagea696079a01634f24b607cb5df91896f2'))
    const Page1691c48f9d344536acd6f45309654992 = lazy(() => import('./../pages/Page1691c48f9d344536acd6f45309654992'))
    const Pagedd370586d0ec4f76acf7beba3a4d9251 = lazy(() => import('./../pages/Pagedd370586d0ec4f76acf7beba3a4d9251'))
    const Pagec7e9a01579e845dd8c9f4be0079511b2 = lazy(() => import('./../pages/Pagec7e9a01579e845dd8c9f4be0079511b2'))
    const Pagebcff3401dd9843248d0f760a43208641 = lazy(() => import('./../pages/Pagebcff3401dd9843248d0f760a43208641'))
    const Page5c0feec7682443969dbbaf5e1bb1ff11 = lazy(() => import('./../pages/Page5c0feec7682443969dbbaf5e1bb1ff11'))
    const Page3ebf9ba103b645d994815f9da9b7d8fd = lazy(() => import('./../pages/Page3ebf9ba103b645d994815f9da9b7d8fd'))
    const Page803786c9e2ed47ffb97f0b6ea3ef8ef7 = lazy(() => import('./../pages/Page803786c9e2ed47ffb97f0b6ea3ef8ef7'))
    const Page9024f410caf247a4bcd5913d4b98fe33 = lazy(() => import('./../pages/Page9024f410caf247a4bcd5913d4b98fe33'))
    const Paged6af057810a04b8690ab2f7e563ea227 = lazy(() => import('./../pages/Paged6af057810a04b8690ab2f7e563ea227'))

    const Page87cd4600f3aa474f817f6d69e985d02e = lazy(() => import('./../pages/Page87cd4600f3aa474f817f6d69e985d02e'))

    const Page0f872b3d83274af082f8990b1ecbafa0 = lazy(() => import('./../pages/Page0f872b3d83274af082f8990b1ecbafa0'))
    const Page433df3b8b2d940bfb4fceb013acc6463 = lazy(() => import('./../pages/Page433df3b8b2d940bfb4fceb013acc6463'))
    const Paged331230024f847ecb3211ed595695800 = lazy(() => import('./../pages/Paged331230024f847ecb3211ed595695800'))
    const Page539378b05882406a86cab566c1cae325 = lazy(() => import('./../pages/Page539378b05882406a86cab566c1cae325'))
    const Page6c4d10cd2b4747d0b060668399749e0f = lazy(() => import('./../pages/Page6c4d10cd2b4747d0b060668399749e0f'))
    const Page936064acbeda46d39787c40055b38350 = lazy(() => import('./../pages/Page936064acbeda46d39787c40055b38350'))
    const Page513c108505024f3e8e7d758938293c0a = lazy(() => import('./../pages/Page513c108505024f3e8e7d758938293c0a'))
    const Page9a4bc70a800d42d0aa2d639c829bc483 = lazy(() => import('./../pages/Page9a4bc70a800d42d0aa2d639c829bc483'))
    const Page02f2dfd8e6b5436e815e9857ebdef5e5 = lazy(() => import('./../pages/Page02f2dfd8e6b5436e815e9857ebdef5e5'))

    const Page5982c70c0df945a3a759c72b52d20ae0 = lazy(() => import('./../pages/Page5982c70c0df945a3a759c72b52d20ae0'))


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
                        {path:"FormSubmitting", element:<Page1a5ce3e784b1470dbfb4e7bcc85451a2 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page10b0db0031564d899654d5a3593938db darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pageecaebd2bb7b74562ba5ed304b85d5d1c darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page8694597d22c74c0ea8734b0eee056e86 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page51a00d8e47b24a91825ebbc57cda7a94 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page5dadaa2414334e5ebf616029c07e983f darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page80d4fa3c455447889d214a1874c2bf01 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page0df03d9d8c0a4f638fb85d51fe2f0576 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pagec68949babd0b4b0d8280dbf3879e6bef darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page71b5e473b6d74b87846c0b7db4edd435 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagee2f3bb7b0ffb497d8664ccf3184fee25 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page5d206848be5f4530bf913b04de6489d8 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page76f1a9842fa64951a4d8bf3d1bf96a85 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page2b957140565f41e3a7f15aebd138eb86 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagefd7912bf5ee1480591c396bc1c7b33c4 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pageff008946f4d64d41ae91a99768bdeb6f darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page5798af22d86e4226acca5a8955dc7fd4 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page27dd220af01b470c8f407cb2084d99a3 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page83b2a116237444b3bd551083d7b357d3 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagef1bb566263ed49e1a558227585a5ea5c darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page421ea6b6fc5b4a47be3dab11fa8dbfeb darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pagebd47e2bc764c4904b2b808289b6fed35 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page4eec6584503d415093c02abccee9f7d1 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page6afb7416a2754da695623e272ffeadea darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pageadf4c72eff7645dd9a5e4fdf8f5910ce darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page1613bcd5ba9a4edd85617a6fbbe7a2f9 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pagece6a909fe9b548e89216a78178bcbf49 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageeae5b79556e94e10a3a1206069e0daf4 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page99b32c5d06a744f8a0cda7dc19d989c2 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page50be64b473b04d6c8a353ea6eec30925 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagea024f23f5fcc4a65a43e469fb15b34e9 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page8882037beae04392848be4a6c087de3b darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page78ea92495a5044628359ee3a69202e10 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page94a40ddf2a614784b7a7d602e493514c darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page1ab1a92aa4d94c6d938ce13f149146b1 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page1d1e19e955544753b67ee6c4401253d0 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page59ee356890ce457c95ee73f53fdb6a55 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pagee0780049efeb40a0bdd41971255bb755 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagea696079a01634f24b607cb5df91896f2 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page1691c48f9d344536acd6f45309654992 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagedd370586d0ec4f76acf7beba3a4d9251 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagec7e9a01579e845dd8c9f4be0079511b2 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagebcff3401dd9843248d0f760a43208641 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page5c0feec7682443969dbbaf5e1bb1ff11 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page3ebf9ba103b645d994815f9da9b7d8fd darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page803786c9e2ed47ffb97f0b6ea3ef8ef7 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page9024f410caf247a4bcd5913d4b98fe33 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Paged6af057810a04b8690ab2f7e563ea227 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page87cd4600f3aa474f817f6d69e985d02e darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page0f872b3d83274af082f8990b1ecbafa0 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page433df3b8b2d940bfb4fceb013acc6463 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Paged331230024f847ecb3211ed595695800 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page539378b05882406a86cab566c1cae325 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page6c4d10cd2b4747d0b060668399749e0f darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page936064acbeda46d39787c40055b38350 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page513c108505024f3e8e7d758938293c0a darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page9a4bc70a800d42d0aa2d639c829bc483 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page02f2dfd8e6b5436e815e9857ebdef5e5 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page5982c70c0df945a3a759c72b52d20ae0 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

