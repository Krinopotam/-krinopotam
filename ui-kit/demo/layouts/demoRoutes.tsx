
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page5e81eb3211d2446aa5c7072910c965e0 = lazy(() => import('./../pages/Page5e81eb3211d2446aa5c7072910c965e0'))
    const Pagee4b634ee7ea443a9aa4dab8595c7f26f = lazy(() => import('./../pages/Pagee4b634ee7ea443a9aa4dab8595c7f26f'))

    const Page985dd957bcb64ef1b2e868f2948b5d37 = lazy(() => import('./../pages/Page985dd957bcb64ef1b2e868f2948b5d37'))
    const Pageb5f81919af024bd580927299c307f12d = lazy(() => import('./../pages/Pageb5f81919af024bd580927299c307f12d'))
    const Page9c56eafb52c94f38805c0bcd1c89ee49 = lazy(() => import('./../pages/Page9c56eafb52c94f38805c0bcd1c89ee49'))
    const Pagee5a7bfe3eb274437a406ea56dfeedac3 = lazy(() => import('./../pages/Pagee5a7bfe3eb274437a406ea56dfeedac3'))
    const Page5ddab9fbd5474ce8a7557e52fd0bd620 = lazy(() => import('./../pages/Page5ddab9fbd5474ce8a7557e52fd0bd620'))
    const Page78a88137b9f94cb3b5726e54527b41cf = lazy(() => import('./../pages/Page78a88137b9f94cb3b5726e54527b41cf'))
    const Pageb2d09928b0394d7588a3141bc235510c = lazy(() => import('./../pages/Pageb2d09928b0394d7588a3141bc235510c'))
    const Page38f72c77d7854cbc9fb90be4cbb89017 = lazy(() => import('./../pages/Page38f72c77d7854cbc9fb90be4cbb89017'))
    const Pageb6551634a2474f6fa6f2f8a4f97baad2 = lazy(() => import('./../pages/Pageb6551634a2474f6fa6f2f8a4f97baad2'))

    const Page8f1bd9cbc18244498a5e07c9689c1a41 = lazy(() => import('./../pages/Page8f1bd9cbc18244498a5e07c9689c1a41'))
    const Pageffd8b4ff60e849f8b565e5e3b2032faa = lazy(() => import('./../pages/Pageffd8b4ff60e849f8b565e5e3b2032faa'))
    const Page39292ff67cc24178a4cf5c1bf2b82482 = lazy(() => import('./../pages/Page39292ff67cc24178a4cf5c1bf2b82482'))

    const Paged0a2ba8d6d9e421bb713c3b012697765 = lazy(() => import('./../pages/Paged0a2ba8d6d9e421bb713c3b012697765'))
    const Pagee1eb8f0ced2b4dfc9831a100a1b07df3 = lazy(() => import('./../pages/Pagee1eb8f0ced2b4dfc9831a100a1b07df3'))
    const Page5f4784bf2d214b5a86f70d19412caa04 = lazy(() => import('./../pages/Page5f4784bf2d214b5a86f70d19412caa04'))
    const Page3cbaa1a289b74d81b09cc2ab6cf14233 = lazy(() => import('./../pages/Page3cbaa1a289b74d81b09cc2ab6cf14233'))
    const Page7f4010f5d3bd4be186e7111168796b42 = lazy(() => import('./../pages/Page7f4010f5d3bd4be186e7111168796b42'))
    const Page023544c82c1e476eba1c8a52cdfc3519 = lazy(() => import('./../pages/Page023544c82c1e476eba1c8a52cdfc3519'))
    const Page3922b569ff8043739dbf0df1a7852f3d = lazy(() => import('./../pages/Page3922b569ff8043739dbf0df1a7852f3d'))
    const Page616b49f4ea9444f59a21a302632e4f23 = lazy(() => import('./../pages/Page616b49f4ea9444f59a21a302632e4f23'))
    const Pageee63e60ddae3496c8865b227dd366d06 = lazy(() => import('./../pages/Pageee63e60ddae3496c8865b227dd366d06'))
    const Page42f697e1062d4479948dcb72770ee797 = lazy(() => import('./../pages/Page42f697e1062d4479948dcb72770ee797'))
    const Page82d6793730b64717b65a807459f94be9 = lazy(() => import('./../pages/Page82d6793730b64717b65a807459f94be9'))
    const Page797e7817444449fc9cd30da069a453c5 = lazy(() => import('./../pages/Page797e7817444449fc9cd30da069a453c5'))
    const Page3d9425278a404cb8919cd3aa8f17bbea = lazy(() => import('./../pages/Page3d9425278a404cb8919cd3aa8f17bbea'))
    const Page641c2e982eb74a579d06c76021a43fef = lazy(() => import('./../pages/Page641c2e982eb74a579d06c76021a43fef'))

    const Page81d61d057d474c3495ad98bc7c127121 = lazy(() => import('./../pages/Page81d61d057d474c3495ad98bc7c127121'))
    const Pagebb6ab3de8f4340eeb24b2b03c7b4895b = lazy(() => import('./../pages/Pagebb6ab3de8f4340eeb24b2b03c7b4895b'))
    const Page89db9e788c594fd1aa8e0299b3ba9585 = lazy(() => import('./../pages/Page89db9e788c594fd1aa8e0299b3ba9585'))
    const Pagea73237413ecd441bb9b71498d3488a52 = lazy(() => import('./../pages/Pagea73237413ecd441bb9b71498d3488a52'))
    const Pagebcc8fde6d1344680acd19ba296be85d2 = lazy(() => import('./../pages/Pagebcc8fde6d1344680acd19ba296be85d2'))
    const Pagee691e663e7674915b81a674c5334343a = lazy(() => import('./../pages/Pagee691e663e7674915b81a674c5334343a'))
    const Pagea94fbf057e46446385d59f9ab758c28e = lazy(() => import('./../pages/Pagea94fbf057e46446385d59f9ab758c28e'))
    const Page305cea6485f8476091b444a3de98b9f8 = lazy(() => import('./../pages/Page305cea6485f8476091b444a3de98b9f8'))

    const Page95d3648e20094b179f4c531b5a933eda = lazy(() => import('./../pages/Page95d3648e20094b179f4c531b5a933eda'))
    const Page42b47513c56d4c97ad2c03611aa868df = lazy(() => import('./../pages/Page42b47513c56d4c97ad2c03611aa868df'))
    const Page976b6cd5f98a4f42ab6bb8a5db9805ed = lazy(() => import('./../pages/Page976b6cd5f98a4f42ab6bb8a5db9805ed'))
    const Pageec8f2fadb69c4e91a3dd35ec0293adba = lazy(() => import('./../pages/Pageec8f2fadb69c4e91a3dd35ec0293adba'))
    const Page84c6c68a16f745858f159bd0e766fd63 = lazy(() => import('./../pages/Page84c6c68a16f745858f159bd0e766fd63'))
    const Page322d6f149caa4000b8f6aac7b032b10b = lazy(() => import('./../pages/Page322d6f149caa4000b8f6aac7b032b10b'))
    const Page1711b2f10d2a4feb85c0058846e5c2b5 = lazy(() => import('./../pages/Page1711b2f10d2a4feb85c0058846e5c2b5'))
    const Page5c14309d5b094ed4857152f103175196 = lazy(() => import('./../pages/Page5c14309d5b094ed4857152f103175196'))
    const Page895b809fe0b14b37bd19075e4d1173dd = lazy(() => import('./../pages/Page895b809fe0b14b37bd19075e4d1173dd'))
    const Page6d16c7dfb45146d5874f7e79e11cbf95 = lazy(() => import('./../pages/Page6d16c7dfb45146d5874f7e79e11cbf95'))
    const Page259e7f4c71f14ab98a3c71d7c4ae3478 = lazy(() => import('./../pages/Page259e7f4c71f14ab98a3c71d7c4ae3478'))
    const Pagea14af4e446184ed69693aa78d9493cf4 = lazy(() => import('./../pages/Pagea14af4e446184ed69693aa78d9493cf4'))
    const Pagefdd382c452d749008fcb6c35a735c904 = lazy(() => import('./../pages/Pagefdd382c452d749008fcb6c35a735c904'))
    const Pagec7c53b47f3e248ad95b1f3515e74d4b1 = lazy(() => import('./../pages/Pagec7c53b47f3e248ad95b1f3515e74d4b1'))
    const Page0c1b65c955e34125a792dddc53c333c6 = lazy(() => import('./../pages/Page0c1b65c955e34125a792dddc53c333c6'))

    const Page9eb7f63be32b42208633b7f326b83ca0 = lazy(() => import('./../pages/Page9eb7f63be32b42208633b7f326b83ca0'))

    const Pagedc6ff9bb180a48f0a364b916809beeb1 = lazy(() => import('./../pages/Pagedc6ff9bb180a48f0a364b916809beeb1'))
    const Pageb7312c7439bb43f08b9a22e26c11937b = lazy(() => import('./../pages/Pageb7312c7439bb43f08b9a22e26c11937b'))
    const Page087689132eb04e6d925a7687088d4ee9 = lazy(() => import('./../pages/Page087689132eb04e6d925a7687088d4ee9'))
    const Pageefddd6f4d7524025a5d679204a100715 = lazy(() => import('./../pages/Pageefddd6f4d7524025a5d679204a100715'))
    const Pagef7e1ad745c89446d9f0812c757cd91d2 = lazy(() => import('./../pages/Pagef7e1ad745c89446d9f0812c757cd91d2'))
    const Pageb901a9988eaa4585a0383c9b800904ee = lazy(() => import('./../pages/Pageb901a9988eaa4585a0383c9b800904ee'))
    const Page598c54a221b742699e1f4b48f3474a98 = lazy(() => import('./../pages/Page598c54a221b742699e1f4b48f3474a98'))
    const Page355e72cfc9934b8d8d55569b20f8cfad = lazy(() => import('./../pages/Page355e72cfc9934b8d8d55569b20f8cfad'))
    const Page515f0539e5bc406ba88ff36d2cda02aa = lazy(() => import('./../pages/Page515f0539e5bc406ba88ff36d2cda02aa'))

    const Pagea4ffdfca95684e44953de0d55f6fc288 = lazy(() => import('./../pages/Pagea4ffdfca95684e44953de0d55f6fc288'))


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
                        {path:"FormSubmitting", element:<Page5e81eb3211d2446aa5c7072910c965e0 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagee4b634ee7ea443a9aa4dab8595c7f26f darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page985dd957bcb64ef1b2e868f2948b5d37 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pageb5f81919af024bd580927299c307f12d darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page9c56eafb52c94f38805c0bcd1c89ee49 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagee5a7bfe3eb274437a406ea56dfeedac3 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page5ddab9fbd5474ce8a7557e52fd0bd620 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page78a88137b9f94cb3b5726e54527b41cf darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageb2d09928b0394d7588a3141bc235510c darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page38f72c77d7854cbc9fb90be4cbb89017 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pageb6551634a2474f6fa6f2f8a4f97baad2 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page8f1bd9cbc18244498a5e07c9689c1a41 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pageffd8b4ff60e849f8b565e5e3b2032faa darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page39292ff67cc24178a4cf5c1bf2b82482 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Paged0a2ba8d6d9e421bb713c3b012697765 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagee1eb8f0ced2b4dfc9831a100a1b07df3 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page5f4784bf2d214b5a86f70d19412caa04 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page3cbaa1a289b74d81b09cc2ab6cf14233 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page7f4010f5d3bd4be186e7111168796b42 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page023544c82c1e476eba1c8a52cdfc3519 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page3922b569ff8043739dbf0df1a7852f3d darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page616b49f4ea9444f59a21a302632e4f23 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pageee63e60ddae3496c8865b227dd366d06 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page42f697e1062d4479948dcb72770ee797 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page82d6793730b64717b65a807459f94be9 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page797e7817444449fc9cd30da069a453c5 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page3d9425278a404cb8919cd3aa8f17bbea darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page641c2e982eb74a579d06c76021a43fef darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page81d61d057d474c3495ad98bc7c127121 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagebb6ab3de8f4340eeb24b2b03c7b4895b darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page89db9e788c594fd1aa8e0299b3ba9585 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagea73237413ecd441bb9b71498d3488a52 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Pagebcc8fde6d1344680acd19ba296be85d2 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagee691e663e7674915b81a674c5334343a darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagea94fbf057e46446385d59f9ab758c28e darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page305cea6485f8476091b444a3de98b9f8 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page95d3648e20094b179f4c531b5a933eda darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page42b47513c56d4c97ad2c03611aa868df darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page976b6cd5f98a4f42ab6bb8a5db9805ed darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pageec8f2fadb69c4e91a3dd35ec0293adba darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page84c6c68a16f745858f159bd0e766fd63 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page322d6f149caa4000b8f6aac7b032b10b darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page1711b2f10d2a4feb85c0058846e5c2b5 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page5c14309d5b094ed4857152f103175196 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page895b809fe0b14b37bd19075e4d1173dd darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page6d16c7dfb45146d5874f7e79e11cbf95 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page259e7f4c71f14ab98a3c71d7c4ae3478 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagea14af4e446184ed69693aa78d9493cf4 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagefdd382c452d749008fcb6c35a735c904 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagec7c53b47f3e248ad95b1f3515e74d4b1 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page0c1b65c955e34125a792dddc53c333c6 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page9eb7f63be32b42208633b7f326b83ca0 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagedc6ff9bb180a48f0a364b916809beeb1 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageb7312c7439bb43f08b9a22e26c11937b darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page087689132eb04e6d925a7687088d4ee9 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pageefddd6f4d7524025a5d679204a100715 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagef7e1ad745c89446d9f0812c757cd91d2 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pageb901a9988eaa4585a0383c9b800904ee darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page598c54a221b742699e1f4b48f3474a98 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page355e72cfc9934b8d8d55569b20f8cfad darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page515f0539e5bc406ba88ff36d2cda02aa darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagea4ffdfca95684e44953de0d55f6fc288 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

