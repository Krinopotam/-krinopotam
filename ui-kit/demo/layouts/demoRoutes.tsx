
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page763b83f3602c4881ab579fde19398248 = lazy(() => import('./../pages/Page763b83f3602c4881ab579fde19398248'))

    const Page1f863d2c23564312be82060b223f8dfc = lazy(() => import('./../pages/Page1f863d2c23564312be82060b223f8dfc'))
    const Paged2e6c1399f9a421598548ad2fc46f521 = lazy(() => import('./../pages/Paged2e6c1399f9a421598548ad2fc46f521'))

    const Page0d624ee9d8ad4983a91d660abfd8226b = lazy(() => import('./../pages/Page0d624ee9d8ad4983a91d660abfd8226b'))
    const Page4f58753e70bc484092ff0af85b5b7565 = lazy(() => import('./../pages/Page4f58753e70bc484092ff0af85b5b7565'))
    const Page3418e357d4ae4ad4883e2fe6a0f84e5a = lazy(() => import('./../pages/Page3418e357d4ae4ad4883e2fe6a0f84e5a'))
    const Page96f71bd5e34f46dd9bc2d8669325567e = lazy(() => import('./../pages/Page96f71bd5e34f46dd9bc2d8669325567e'))
    const Paged160557c4b574a24abc58e0c4b52d1ea = lazy(() => import('./../pages/Paged160557c4b574a24abc58e0c4b52d1ea'))
    const Page54f42dcca5e44b1884063fe2179961d5 = lazy(() => import('./../pages/Page54f42dcca5e44b1884063fe2179961d5'))
    const Pagec96a6b8a2ab743f79282c85c6c32af55 = lazy(() => import('./../pages/Pagec96a6b8a2ab743f79282c85c6c32af55'))
    const Page00970117b74c4075b613c4755968c2d6 = lazy(() => import('./../pages/Page00970117b74c4075b613c4755968c2d6'))
    const Pageb26cc734697a4386bd36451c68df7853 = lazy(() => import('./../pages/Pageb26cc734697a4386bd36451c68df7853'))
    const Page01b9ea283f2c4868a7a2091fa2e44712 = lazy(() => import('./../pages/Page01b9ea283f2c4868a7a2091fa2e44712'))

    const Page985d44abdde244b7aab65d06c30a304d = lazy(() => import('./../pages/Page985d44abdde244b7aab65d06c30a304d'))
    const Page6b890fa8af014bfd8a0602eb964b0bf3 = lazy(() => import('./../pages/Page6b890fa8af014bfd8a0602eb964b0bf3'))
    const Page1bc11ef8133d450b982b96ea620b3a5e = lazy(() => import('./../pages/Page1bc11ef8133d450b982b96ea620b3a5e'))

    const Page6d4b73c1510b4461adf689a9bcc47f81 = lazy(() => import('./../pages/Page6d4b73c1510b4461adf689a9bcc47f81'))
    const Pagecb0f9e3e2f524786948d1198f9360cbb = lazy(() => import('./../pages/Pagecb0f9e3e2f524786948d1198f9360cbb'))
    const Page9639d44b586e43879d549c0f2727bfa4 = lazy(() => import('./../pages/Page9639d44b586e43879d549c0f2727bfa4'))
    const Page32301773a4ef4ba793dcd4f920bce012 = lazy(() => import('./../pages/Page32301773a4ef4ba793dcd4f920bce012'))
    const Page78143b41cd6e46889f5aad47c769144d = lazy(() => import('./../pages/Page78143b41cd6e46889f5aad47c769144d'))
    const Page82527b9eb2e2483aa31ca7b5dafcd295 = lazy(() => import('./../pages/Page82527b9eb2e2483aa31ca7b5dafcd295'))
    const Pagea9bdab6cdd6d4dc9959c9834e72cbd4c = lazy(() => import('./../pages/Pagea9bdab6cdd6d4dc9959c9834e72cbd4c'))
    const Page6eca249053d043f18a34f5b18fb66420 = lazy(() => import('./../pages/Page6eca249053d043f18a34f5b18fb66420'))
    const Page156aae2b2de04aac84f4ea2ce656cd27 = lazy(() => import('./../pages/Page156aae2b2de04aac84f4ea2ce656cd27'))
    const Page3b23b3963ce5425a9e43722fa275230f = lazy(() => import('./../pages/Page3b23b3963ce5425a9e43722fa275230f'))
    const Page7024e05a357a420f8af21ad0273c7956 = lazy(() => import('./../pages/Page7024e05a357a420f8af21ad0273c7956'))
    const Page9dab7b987b7d41c4a7a9953cc89b2e19 = lazy(() => import('./../pages/Page9dab7b987b7d41c4a7a9953cc89b2e19'))
    const Page4a7a9ba261884b838bd5fba89932fb26 = lazy(() => import('./../pages/Page4a7a9ba261884b838bd5fba89932fb26'))
    const Paged3d5f45d77a14a069262d8e09eba80a2 = lazy(() => import('./../pages/Paged3d5f45d77a14a069262d8e09eba80a2'))

    const Pagec6bd6e5f8ede4e05a98e0b602d1e1698 = lazy(() => import('./../pages/Pagec6bd6e5f8ede4e05a98e0b602d1e1698'))

    const Page1d540379ac8f41acb904be7099b1dd42 = lazy(() => import('./../pages/Page1d540379ac8f41acb904be7099b1dd42'))
    const Page566382d6b13543c7bf816fb5766efeb4 = lazy(() => import('./../pages/Page566382d6b13543c7bf816fb5766efeb4'))
    const Page930c77b70ae34d9088ec6f84b2dc8adf = lazy(() => import('./../pages/Page930c77b70ae34d9088ec6f84b2dc8adf'))
    const Page773bf333b8f24dfa8101d028c46a1e34 = lazy(() => import('./../pages/Page773bf333b8f24dfa8101d028c46a1e34'))
    const Page40fcc72d41714eeaad0437facb7c667e = lazy(() => import('./../pages/Page40fcc72d41714eeaad0437facb7c667e'))
    const Page9bc2ed50602a4c3e83e702690765b509 = lazy(() => import('./../pages/Page9bc2ed50602a4c3e83e702690765b509'))
    const Pagecd810d226d57460bbacd48133527c800 = lazy(() => import('./../pages/Pagecd810d226d57460bbacd48133527c800'))
    const Page37ad7fc4d4134eebaced48abfac0cdb4 = lazy(() => import('./../pages/Page37ad7fc4d4134eebaced48abfac0cdb4'))

    const Page5242ee103090468f8dc18884c402e7fb = lazy(() => import('./../pages/Page5242ee103090468f8dc18884c402e7fb'))
    const Pageb64b08c7e1ac4667ae6b5918bba8a1d7 = lazy(() => import('./../pages/Pageb64b08c7e1ac4667ae6b5918bba8a1d7'))
    const Pagef9799ba0773f43e08ab3275fdf894e3c = lazy(() => import('./../pages/Pagef9799ba0773f43e08ab3275fdf894e3c'))
    const Pagea0f8fc5f1746467494f96ef17e3c7588 = lazy(() => import('./../pages/Pagea0f8fc5f1746467494f96ef17e3c7588'))
    const Pageb082486d09664f5a850da8cfec4ee89a = lazy(() => import('./../pages/Pageb082486d09664f5a850da8cfec4ee89a'))
    const Pagef3802f5500c84ed08a3b4b82774d77d1 = lazy(() => import('./../pages/Pagef3802f5500c84ed08a3b4b82774d77d1'))
    const Page5199cf0888ba4e9a8a6fa1367af583ca = lazy(() => import('./../pages/Page5199cf0888ba4e9a8a6fa1367af583ca'))
    const Pagea78795c1da104e5390a873f9ef0873ac = lazy(() => import('./../pages/Pagea78795c1da104e5390a873f9ef0873ac'))
    const Page87f0ce0e903b44a1b5a607acedf21142 = lazy(() => import('./../pages/Page87f0ce0e903b44a1b5a607acedf21142'))
    const Pageb1861c9ebd2c4ca8aed06d7ba63cb03e = lazy(() => import('./../pages/Pageb1861c9ebd2c4ca8aed06d7ba63cb03e'))
    const Page7308bb15d9564a9487795ac307db37eb = lazy(() => import('./../pages/Page7308bb15d9564a9487795ac307db37eb'))
    const Pageb74970c0616b44909f66e186325b8a62 = lazy(() => import('./../pages/Pageb74970c0616b44909f66e186325b8a62'))
    const Page2b1f8ceeb9d1492fa4438257affb1e05 = lazy(() => import('./../pages/Page2b1f8ceeb9d1492fa4438257affb1e05'))
    const Page0fb07720a9e84ee1adca1cb7d71b4ff8 = lazy(() => import('./../pages/Page0fb07720a9e84ee1adca1cb7d71b4ff8'))
    const Pagebeb40dd39acf43a48602862982188ae0 = lazy(() => import('./../pages/Pagebeb40dd39acf43a48602862982188ae0'))

    const Page4413eed2e7514fb894a47f1c35661387 = lazy(() => import('./../pages/Page4413eed2e7514fb894a47f1c35661387'))

    const Page70a586cc42fb4ea4b1743c631193d1c2 = lazy(() => import('./../pages/Page70a586cc42fb4ea4b1743c631193d1c2'))
    const Page10c466e1667d4f84be3446880b8530f4 = lazy(() => import('./../pages/Page10c466e1667d4f84be3446880b8530f4'))
    const Page97ade8d8c5254994acf2e4f6722a331a = lazy(() => import('./../pages/Page97ade8d8c5254994acf2e4f6722a331a'))
    const Pagecd95579b2c7f4ca6bd030ab5c6f2fcd9 = lazy(() => import('./../pages/Pagecd95579b2c7f4ca6bd030ab5c6f2fcd9'))
    const Pagec349045086d84c04871862615c1f90a1 = lazy(() => import('./../pages/Pagec349045086d84c04871862615c1f90a1'))
    const Pageef2dd2ff9b344d9d8fde9c09615fb0cf = lazy(() => import('./../pages/Pageef2dd2ff9b344d9d8fde9c09615fb0cf'))
    const Pagef4edd0048ba84b04a6da3bc8f8c02f8f = lazy(() => import('./../pages/Pagef4edd0048ba84b04a6da3bc8f8c02f8f'))
    const Pagec6d53e53e2794626b70ce502337b5a15 = lazy(() => import('./../pages/Pagec6d53e53e2794626b70ce502337b5a15'))
    const Page3c661a9588bf43d190a4b1b87b830f27 = lazy(() => import('./../pages/Page3c661a9588bf43d190a4b1b87b830f27'))

    const Pageb451c5d30a224d41ac77861c355f38e5 = lazy(() => import('./../pages/Pageb451c5d30a224d41ac77861c355f38e5'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page763b83f3602c4881ab579fde19398248 darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page1f863d2c23564312be82060b223f8dfc darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Paged2e6c1399f9a421598548ad2fc46f521 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page0d624ee9d8ad4983a91d660abfd8226b darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page4f58753e70bc484092ff0af85b5b7565 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page3418e357d4ae4ad4883e2fe6a0f84e5a darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page96f71bd5e34f46dd9bc2d8669325567e darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Paged160557c4b574a24abc58e0c4b52d1ea darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page54f42dcca5e44b1884063fe2179961d5 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagec96a6b8a2ab743f79282c85c6c32af55 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page00970117b74c4075b613c4755968c2d6 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pageb26cc734697a4386bd36451c68df7853 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page01b9ea283f2c4868a7a2091fa2e44712 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page985d44abdde244b7aab65d06c30a304d darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page6b890fa8af014bfd8a0602eb964b0bf3 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page1bc11ef8133d450b982b96ea620b3a5e darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page6d4b73c1510b4461adf689a9bcc47f81 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagecb0f9e3e2f524786948d1198f9360cbb darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page9639d44b586e43879d549c0f2727bfa4 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page32301773a4ef4ba793dcd4f920bce012 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page78143b41cd6e46889f5aad47c769144d darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page82527b9eb2e2483aa31ca7b5dafcd295 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagea9bdab6cdd6d4dc9959c9834e72cbd4c darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page6eca249053d043f18a34f5b18fb66420 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page156aae2b2de04aac84f4ea2ce656cd27 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page3b23b3963ce5425a9e43722fa275230f darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page7024e05a357a420f8af21ad0273c7956 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page9dab7b987b7d41c4a7a9953cc89b2e19 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page4a7a9ba261884b838bd5fba89932fb26 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Paged3d5f45d77a14a069262d8e09eba80a2 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagec6bd6e5f8ede4e05a98e0b602d1e1698 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page1d540379ac8f41acb904be7099b1dd42 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page566382d6b13543c7bf816fb5766efeb4 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page930c77b70ae34d9088ec6f84b2dc8adf darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page773bf333b8f24dfa8101d028c46a1e34 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page40fcc72d41714eeaad0437facb7c667e darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page9bc2ed50602a4c3e83e702690765b509 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagecd810d226d57460bbacd48133527c800 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page37ad7fc4d4134eebaced48abfac0cdb4 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page5242ee103090468f8dc18884c402e7fb darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Pageb64b08c7e1ac4667ae6b5918bba8a1d7 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pagef9799ba0773f43e08ab3275fdf894e3c darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagea0f8fc5f1746467494f96ef17e3c7588 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageb082486d09664f5a850da8cfec4ee89a darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Pagef3802f5500c84ed08a3b4b82774d77d1 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page5199cf0888ba4e9a8a6fa1367af583ca darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagea78795c1da104e5390a873f9ef0873ac darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page87f0ce0e903b44a1b5a607acedf21142 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb1861c9ebd2c4ca8aed06d7ba63cb03e darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page7308bb15d9564a9487795ac307db37eb darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pageb74970c0616b44909f66e186325b8a62 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page2b1f8ceeb9d1492fa4438257affb1e05 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page0fb07720a9e84ee1adca1cb7d71b4ff8 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagebeb40dd39acf43a48602862982188ae0 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page4413eed2e7514fb894a47f1c35661387 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page70a586cc42fb4ea4b1743c631193d1c2 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page10c466e1667d4f84be3446880b8530f4 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page97ade8d8c5254994acf2e4f6722a331a darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Pagecd95579b2c7f4ca6bd030ab5c6f2fcd9 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagec349045086d84c04871862615c1f90a1 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pageef2dd2ff9b344d9d8fde9c09615fb0cf darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagef4edd0048ba84b04a6da3bc8f8c02f8f darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagec6d53e53e2794626b70ce502337b5a15 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page3c661a9588bf43d190a4b1b87b830f27 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pageb451c5d30a224d41ac77861c355f38e5 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

