
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page4ce7fc94fcc64fc293ec92f008c9f4db = lazy(() => import('./../pages/Page4ce7fc94fcc64fc293ec92f008c9f4db'))
    const Page250523db78dc4e1caf5d9580b6607073 = lazy(() => import('./../pages/Page250523db78dc4e1caf5d9580b6607073'))

    const Page5183869473094463855d9ae8859ca982 = lazy(() => import('./../pages/Page5183869473094463855d9ae8859ca982'))
    const Page3619cd392c7d40ca88b3bd72f898982c = lazy(() => import('./../pages/Page3619cd392c7d40ca88b3bd72f898982c'))
    const Paged486e929ddb447c2a70002a5a1d6ae86 = lazy(() => import('./../pages/Paged486e929ddb447c2a70002a5a1d6ae86'))
    const Page2a2898386b434ec5b3dc0883fc4afed3 = lazy(() => import('./../pages/Page2a2898386b434ec5b3dc0883fc4afed3'))
    const Pagec83f9fc0fbce41dc9c32da0b14cd5a6b = lazy(() => import('./../pages/Pagec83f9fc0fbce41dc9c32da0b14cd5a6b'))
    const Pageab3a25135e514dabb684863b4ded02da = lazy(() => import('./../pages/Pageab3a25135e514dabb684863b4ded02da'))
    const Page0170fe0b7f3242438ae557c1f0255904 = lazy(() => import('./../pages/Page0170fe0b7f3242438ae557c1f0255904'))
    const Pagea9b4e3721bab418ca0742caff01269fa = lazy(() => import('./../pages/Pagea9b4e3721bab418ca0742caff01269fa'))
    const Page4815beb7e879447287641497d47954d3 = lazy(() => import('./../pages/Page4815beb7e879447287641497d47954d3'))

    const Pagefd085ba4c6464a7ca65f0cde1d0ad7d7 = lazy(() => import('./../pages/Pagefd085ba4c6464a7ca65f0cde1d0ad7d7'))
    const Page76b87710c19d489f955beff17871f699 = lazy(() => import('./../pages/Page76b87710c19d489f955beff17871f699'))
    const Page8f53738bb07145bb97f8375240343685 = lazy(() => import('./../pages/Page8f53738bb07145bb97f8375240343685'))

    const Page1dafc171dc704f21829283a7ad2a52ba = lazy(() => import('./../pages/Page1dafc171dc704f21829283a7ad2a52ba'))
    const Page5362a57803184488ae9a194289d44392 = lazy(() => import('./../pages/Page5362a57803184488ae9a194289d44392'))
    const Pagee0dda13d177a495e9f0cb36c58257872 = lazy(() => import('./../pages/Pagee0dda13d177a495e9f0cb36c58257872'))
    const Page6c520ec4c30a48d0916a74f8e79f9c95 = lazy(() => import('./../pages/Page6c520ec4c30a48d0916a74f8e79f9c95'))
    const Page4b3da60d04b7406688263195b5f6bf7f = lazy(() => import('./../pages/Page4b3da60d04b7406688263195b5f6bf7f'))
    const Page12930fec00e8479ab042c67fbbca30ca = lazy(() => import('./../pages/Page12930fec00e8479ab042c67fbbca30ca'))
    const Pagead9c504678ac431cb93c737669fd0b31 = lazy(() => import('./../pages/Pagead9c504678ac431cb93c737669fd0b31'))
    const Pageb963540bfba94d239313f52c91544d32 = lazy(() => import('./../pages/Pageb963540bfba94d239313f52c91544d32'))
    const Pageea00795434904ba49b75b70dec993604 = lazy(() => import('./../pages/Pageea00795434904ba49b75b70dec993604'))
    const Page7263a6a607614760ad587bf2fafddac7 = lazy(() => import('./../pages/Page7263a6a607614760ad587bf2fafddac7'))
    const Page05749a9fbebb4044a73c4e6a923efe3e = lazy(() => import('./../pages/Page05749a9fbebb4044a73c4e6a923efe3e'))
    const Pagef0755cd9fd9849a4bfc7ff538870928c = lazy(() => import('./../pages/Pagef0755cd9fd9849a4bfc7ff538870928c'))
    const Pagefa99f14b26444132b332b8ef50119aa4 = lazy(() => import('./../pages/Pagefa99f14b26444132b332b8ef50119aa4'))
    const Page5d79ff559a9f486c8601601dc9823c46 = lazy(() => import('./../pages/Page5d79ff559a9f486c8601601dc9823c46'))

    const Pagefc7b04b3697e459b8c310d50b1943a83 = lazy(() => import('./../pages/Pagefc7b04b3697e459b8c310d50b1943a83'))

    const Pageaee8549b7d134b60a5ae4d4ac186cf47 = lazy(() => import('./../pages/Pageaee8549b7d134b60a5ae4d4ac186cf47'))
    const Page70b830c1575045c193f063aebcf6677e = lazy(() => import('./../pages/Page70b830c1575045c193f063aebcf6677e'))
    const Pageec4d51126bfa4abd958a31fe83ebaf55 = lazy(() => import('./../pages/Pageec4d51126bfa4abd958a31fe83ebaf55'))
    const Pagef31faa9f4080487192b9a47a3447bca1 = lazy(() => import('./../pages/Pagef31faa9f4080487192b9a47a3447bca1'))
    const Page30b1cfdabf4a4a6bbf70462bc0ff5ce1 = lazy(() => import('./../pages/Page30b1cfdabf4a4a6bbf70462bc0ff5ce1'))
    const Page3d65850037da4b0a94729392d41b89be = lazy(() => import('./../pages/Page3d65850037da4b0a94729392d41b89be'))
    const Paged8b85428189d431abc1f6ae0f56604f7 = lazy(() => import('./../pages/Paged8b85428189d431abc1f6ae0f56604f7'))
    const Page9b8c2b6eda394c0aa89fbee42e756bf3 = lazy(() => import('./../pages/Page9b8c2b6eda394c0aa89fbee42e756bf3'))

    const Page5a7bc59803e949d0bdd703823b4a331d = lazy(() => import('./../pages/Page5a7bc59803e949d0bdd703823b4a331d'))
    const Page9364a34e2f7b4bbdb6d1a93debca15d3 = lazy(() => import('./../pages/Page9364a34e2f7b4bbdb6d1a93debca15d3'))
    const Page20afeb0755dd4831a1fef84bf94e57bd = lazy(() => import('./../pages/Page20afeb0755dd4831a1fef84bf94e57bd'))
    const Pagedd34dc3963c04d4cbc1bb2d668bf1132 = lazy(() => import('./../pages/Pagedd34dc3963c04d4cbc1bb2d668bf1132'))
    const Pagef68ce55a37814e53a3b330fdc811f5f7 = lazy(() => import('./../pages/Pagef68ce55a37814e53a3b330fdc811f5f7'))
    const Page3766ca7b26d14c948d4e34e243d0f2ea = lazy(() => import('./../pages/Page3766ca7b26d14c948d4e34e243d0f2ea'))
    const Page720756853a6348f491bde8e011213eda = lazy(() => import('./../pages/Page720756853a6348f491bde8e011213eda'))
    const Page448c81b45f8d42a8a1f941f8ac1b9ccf = lazy(() => import('./../pages/Page448c81b45f8d42a8a1f941f8ac1b9ccf'))
    const Page9f81acf00c59470fac5eb11ce6c82a79 = lazy(() => import('./../pages/Page9f81acf00c59470fac5eb11ce6c82a79'))
    const Pageb9b1c9f020c04de99803d11f41dffd84 = lazy(() => import('./../pages/Pageb9b1c9f020c04de99803d11f41dffd84'))
    const Page290079a1a425473bb6fe5604f13953e8 = lazy(() => import('./../pages/Page290079a1a425473bb6fe5604f13953e8'))
    const Pagee248dd1132af4a728258b296289ca19c = lazy(() => import('./../pages/Pagee248dd1132af4a728258b296289ca19c'))
    const Page3bbc4e12e6a946969850b7f644276bd7 = lazy(() => import('./../pages/Page3bbc4e12e6a946969850b7f644276bd7'))
    const Page1253481f6ba34f8fa283a14c8e02c24e = lazy(() => import('./../pages/Page1253481f6ba34f8fa283a14c8e02c24e'))
    const Page7e70767e82034eb28aa6cc0ab3c3cbeb = lazy(() => import('./../pages/Page7e70767e82034eb28aa6cc0ab3c3cbeb'))

    const Page7ac24d4b0ad346cea7812dedaf08c2c7 = lazy(() => import('./../pages/Page7ac24d4b0ad346cea7812dedaf08c2c7'))

    const Page7f248f4e8c9f498ea182eef0b95cbd22 = lazy(() => import('./../pages/Page7f248f4e8c9f498ea182eef0b95cbd22'))
    const Pagec8384b70f15649b6ad7e70b91811d0dd = lazy(() => import('./../pages/Pagec8384b70f15649b6ad7e70b91811d0dd'))
    const Pageeea95f3149814fc9ba8c10f4d2635393 = lazy(() => import('./../pages/Pageeea95f3149814fc9ba8c10f4d2635393'))
    const Page57115521af0b4a2ab10c032d3530d9a7 = lazy(() => import('./../pages/Page57115521af0b4a2ab10c032d3530d9a7'))
    const Pagea4fcfb0d26e24b02a174a4a5c4abe196 = lazy(() => import('./../pages/Pagea4fcfb0d26e24b02a174a4a5c4abe196'))
    const Page5f80463030494d60ad11a0c48c62e076 = lazy(() => import('./../pages/Page5f80463030494d60ad11a0c48c62e076'))
    const Page61b6362c21c7406fb28d48e0f60c44da = lazy(() => import('./../pages/Page61b6362c21c7406fb28d48e0f60c44da'))
    const Pagedd90185af13b447a97b260ccd74f0e2d = lazy(() => import('./../pages/Pagedd90185af13b447a97b260ccd74f0e2d'))
    const Page3c24560f6c8446869936f3e78a10d361 = lazy(() => import('./../pages/Page3c24560f6c8446869936f3e78a10d361'))

    const Page5e240d16bcfd42fc817bff66168356a3 = lazy(() => import('./../pages/Page5e240d16bcfd42fc817bff66168356a3'))


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
                        {path:"FormSubmitting", element:<Page4ce7fc94fcc64fc293ec92f008c9f4db darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page250523db78dc4e1caf5d9580b6607073 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page5183869473094463855d9ae8859ca982 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page3619cd392c7d40ca88b3bd72f898982c darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Paged486e929ddb447c2a70002a5a1d6ae86 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page2a2898386b434ec5b3dc0883fc4afed3 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagec83f9fc0fbce41dc9c32da0b14cd5a6b darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pageab3a25135e514dabb684863b4ded02da darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page0170fe0b7f3242438ae557c1f0255904 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagea9b4e3721bab418ca0742caff01269fa darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page4815beb7e879447287641497d47954d3 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagefd085ba4c6464a7ca65f0cde1d0ad7d7 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page76b87710c19d489f955beff17871f699 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page8f53738bb07145bb97f8375240343685 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page1dafc171dc704f21829283a7ad2a52ba darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page5362a57803184488ae9a194289d44392 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagee0dda13d177a495e9f0cb36c58257872 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page6c520ec4c30a48d0916a74f8e79f9c95 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page4b3da60d04b7406688263195b5f6bf7f darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page12930fec00e8479ab042c67fbbca30ca darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pagead9c504678ac431cb93c737669fd0b31 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pageb963540bfba94d239313f52c91544d32 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Pageea00795434904ba49b75b70dec993604 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page7263a6a607614760ad587bf2fafddac7 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page05749a9fbebb4044a73c4e6a923efe3e darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Pagef0755cd9fd9849a4bfc7ff538870928c darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagefa99f14b26444132b332b8ef50119aa4 darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page5d79ff559a9f486c8601601dc9823c46 darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Pagefc7b04b3697e459b8c310d50b1943a83 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pageaee8549b7d134b60a5ae4d4ac186cf47 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page70b830c1575045c193f063aebcf6677e darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pageec4d51126bfa4abd958a31fe83ebaf55 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Pagef31faa9f4080487192b9a47a3447bca1 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page30b1cfdabf4a4a6bbf70462bc0ff5ce1 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page3d65850037da4b0a94729392d41b89be darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Paged8b85428189d431abc1f6ae0f56604f7 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page9b8c2b6eda394c0aa89fbee42e756bf3 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page5a7bc59803e949d0bdd703823b4a331d darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page9364a34e2f7b4bbdb6d1a93debca15d3 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page20afeb0755dd4831a1fef84bf94e57bd darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Pagedd34dc3963c04d4cbc1bb2d668bf1132 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pagef68ce55a37814e53a3b330fdc811f5f7 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page3766ca7b26d14c948d4e34e243d0f2ea darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page720756853a6348f491bde8e011213eda darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page448c81b45f8d42a8a1f941f8ac1b9ccf darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page9f81acf00c59470fac5eb11ce6c82a79 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageb9b1c9f020c04de99803d11f41dffd84 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Page290079a1a425473bb6fe5604f13953e8 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagee248dd1132af4a728258b296289ca19c darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page3bbc4e12e6a946969850b7f644276bd7 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page1253481f6ba34f8fa283a14c8e02c24e darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page7e70767e82034eb28aa6cc0ab3c3cbeb darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page7ac24d4b0ad346cea7812dedaf08c2c7 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page7f248f4e8c9f498ea182eef0b95cbd22 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pagec8384b70f15649b6ad7e70b91811d0dd darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pageeea95f3149814fc9ba8c10f4d2635393 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page57115521af0b4a2ab10c032d3530d9a7 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagea4fcfb0d26e24b02a174a4a5c4abe196 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page5f80463030494d60ad11a0c48c62e076 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page61b6362c21c7406fb28d48e0f60c44da darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pagedd90185af13b447a97b260ccd74f0e2d darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page3c24560f6c8446869936f3e78a10d361 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page5e240d16bcfd42fc817bff66168356a3 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

