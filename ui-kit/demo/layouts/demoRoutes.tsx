
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagecacfa40e8ec14ec984c99d68a9d96a1f = lazy(() => import('./../pages/Pagecacfa40e8ec14ec984c99d68a9d96a1f'))
    const Pagec91ce4f222c54f81ae556c39115a8b66 = lazy(() => import('./../pages/Pagec91ce4f222c54f81ae556c39115a8b66'))

    const Page74d41271d21f464298add87d45e0475e = lazy(() => import('./../pages/Page74d41271d21f464298add87d45e0475e'))
    const Page79640430d46447ea8e44993d7af2b419 = lazy(() => import('./../pages/Page79640430d46447ea8e44993d7af2b419'))
    const Page5675771cd43d45d383192427d330a616 = lazy(() => import('./../pages/Page5675771cd43d45d383192427d330a616'))
    const Page229a9ef28bf84b25a9428f39da784ee5 = lazy(() => import('./../pages/Page229a9ef28bf84b25a9428f39da784ee5'))
    const Page5c8f493134894a3ba142cb9404c25382 = lazy(() => import('./../pages/Page5c8f493134894a3ba142cb9404c25382'))
    const Page936963f6c6fa4905a45eb6027a243d3a = lazy(() => import('./../pages/Page936963f6c6fa4905a45eb6027a243d3a'))
    const Pageef4f678df9ce48508c538bbba0b795e0 = lazy(() => import('./../pages/Pageef4f678df9ce48508c538bbba0b795e0'))
    const Page34582fc46a5e464d956afb650849e27b = lazy(() => import('./../pages/Page34582fc46a5e464d956afb650849e27b'))
    const Page50d7fbddb20f4d1b84096db7ba6a6616 = lazy(() => import('./../pages/Page50d7fbddb20f4d1b84096db7ba6a6616'))

    const Page837c1cba945f4cfb8fa30b14589e858f = lazy(() => import('./../pages/Page837c1cba945f4cfb8fa30b14589e858f'))
    const Pageada2a387fe2847b28b8018124073da56 = lazy(() => import('./../pages/Pageada2a387fe2847b28b8018124073da56'))

    const Pagede39f30fd4084f8c9dde612283f4a1a8 = lazy(() => import('./../pages/Pagede39f30fd4084f8c9dde612283f4a1a8'))
    const Page5609fa412bc24359bb1a40e2648b0a19 = lazy(() => import('./../pages/Page5609fa412bc24359bb1a40e2648b0a19'))
    const Page753feb1a56354810ae4d6ed47c6c657a = lazy(() => import('./../pages/Page753feb1a56354810ae4d6ed47c6c657a'))
    const Page97e1f93ced014ecda01bf002f75ae4ee = lazy(() => import('./../pages/Page97e1f93ced014ecda01bf002f75ae4ee'))
    const Pageb944b18db7264b4f8c0de9b0b9fc919f = lazy(() => import('./../pages/Pageb944b18db7264b4f8c0de9b0b9fc919f'))
    const Pageec019202cf2c48e7a1a4ede5104943f7 = lazy(() => import('./../pages/Pageec019202cf2c48e7a1a4ede5104943f7'))
    const Page3d4bbd5439ad4100932eff278a35d7ed = lazy(() => import('./../pages/Page3d4bbd5439ad4100932eff278a35d7ed'))
    const Page345dc8ab67db4f2788c1bec5c75dc8dd = lazy(() => import('./../pages/Page345dc8ab67db4f2788c1bec5c75dc8dd'))
    const Page979b1f4a493a43cba8099696daeff7cd = lazy(() => import('./../pages/Page979b1f4a493a43cba8099696daeff7cd'))
    const Pagea7a17bef912842c7a524024926403b44 = lazy(() => import('./../pages/Pagea7a17bef912842c7a524024926403b44'))
    const Pagebf5da33ab2a149a9b13efcd6a394684b = lazy(() => import('./../pages/Pagebf5da33ab2a149a9b13efcd6a394684b'))

    const Page6a69804e3ce04f07b54227f270da72f9 = lazy(() => import('./../pages/Page6a69804e3ce04f07b54227f270da72f9'))
    const Pageebd210529f344234bd5f98985ee62a62 = lazy(() => import('./../pages/Pageebd210529f344234bd5f98985ee62a62'))
    const Page75a8ec5d912d4968951c5d55713832cf = lazy(() => import('./../pages/Page75a8ec5d912d4968951c5d55713832cf'))
    const Page8927adc968fa459f97faf95a790e85d1 = lazy(() => import('./../pages/Page8927adc968fa459f97faf95a790e85d1'))
    const Page4fb08b19ff924cada0e20d23db255433 = lazy(() => import('./../pages/Page4fb08b19ff924cada0e20d23db255433'))
    const Page2985f74655ba4ed39f75852ab8abffc6 = lazy(() => import('./../pages/Page2985f74655ba4ed39f75852ab8abffc6'))
    const Page782a23a22da04978a18bb2000b18d5f6 = lazy(() => import('./../pages/Page782a23a22da04978a18bb2000b18d5f6'))

    const Page1628015e290e46ad8ee8f8a47c9447f1 = lazy(() => import('./../pages/Page1628015e290e46ad8ee8f8a47c9447f1'))
    const Page29662fabe196440481854a6fd36a6fcd = lazy(() => import('./../pages/Page29662fabe196440481854a6fd36a6fcd'))
    const Page0a023ffaa3324860945e006c42bc2e58 = lazy(() => import('./../pages/Page0a023ffaa3324860945e006c42bc2e58'))
    const Page0d06773a32244f5d88cb5822ac55d532 = lazy(() => import('./../pages/Page0d06773a32244f5d88cb5822ac55d532'))
    const Pagee3b10516e17040518dc2f5fd75732bd0 = lazy(() => import('./../pages/Pagee3b10516e17040518dc2f5fd75732bd0'))
    const Page9c2a8d5e7edf438583944db9a1748260 = lazy(() => import('./../pages/Page9c2a8d5e7edf438583944db9a1748260'))
    const Page161d9f26257749939a1f144291026a0e = lazy(() => import('./../pages/Page161d9f26257749939a1f144291026a0e'))
    const Pagee94b56cfb6914feab43c58a79c1da5a4 = lazy(() => import('./../pages/Pagee94b56cfb6914feab43c58a79c1da5a4'))
    const Pagea6ecb63be9b949dfa0022502416f15a7 = lazy(() => import('./../pages/Pagea6ecb63be9b949dfa0022502416f15a7'))
    const Pagecca9933aa47a43118372f4c44ea4929a = lazy(() => import('./../pages/Pagecca9933aa47a43118372f4c44ea4929a'))
    const Page9f1d46358b2a47fba06b612f95c42abc = lazy(() => import('./../pages/Page9f1d46358b2a47fba06b612f95c42abc'))
    const Pagefa05358286554ed3953146085f70be52 = lazy(() => import('./../pages/Pagefa05358286554ed3953146085f70be52'))
    const Page529a19c6d09144599e3b2af0c3440d5f = lazy(() => import('./../pages/Page529a19c6d09144599e3b2af0c3440d5f'))

    const Pagea32b67f310914036bb5a4e4dc03e12ab = lazy(() => import('./../pages/Pagea32b67f310914036bb5a4e4dc03e12ab'))

    const Page033e52c5de3643c99ca3de7322630dbf = lazy(() => import('./../pages/Page033e52c5de3643c99ca3de7322630dbf'))
    const Page309c774b64dd41d985290cb531d2b2a5 = lazy(() => import('./../pages/Page309c774b64dd41d985290cb531d2b2a5'))
    const Page3a367cfe0db84ce498178e84c2bad30d = lazy(() => import('./../pages/Page3a367cfe0db84ce498178e84c2bad30d'))
    const Page7354b6ccfbba473782bbcfebfa00c18b = lazy(() => import('./../pages/Page7354b6ccfbba473782bbcfebfa00c18b'))
    const Page14f6e36971104b12a9a9217932366705 = lazy(() => import('./../pages/Page14f6e36971104b12a9a9217932366705'))
    const Pagee6b90af632194420841d61c15046399c = lazy(() => import('./../pages/Pagee6b90af632194420841d61c15046399c'))
    const Pagefe8eb5ee9e6641bb83d89382340175a0 = lazy(() => import('./../pages/Pagefe8eb5ee9e6641bb83d89382340175a0'))
    const Page4ff67c15916a44389db4f85e255230ba = lazy(() => import('./../pages/Page4ff67c15916a44389db4f85e255230ba'))
    const Page5490ed3f386a4010b8288d5a896dc5c1 = lazy(() => import('./../pages/Page5490ed3f386a4010b8288d5a896dc5c1'))

    const Page70ab6b413f3741149870be0e67e3f81a = lazy(() => import('./../pages/Page70ab6b413f3741149870be0e67e3f81a'))


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
                        {path:"FormSubmitting", element:<Pagecacfa40e8ec14ec984c99d68a9d96a1f darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagec91ce4f222c54f81ae556c39115a8b66 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Page74d41271d21f464298add87d45e0475e darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page79640430d46447ea8e44993d7af2b419 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page5675771cd43d45d383192427d330a616 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page229a9ef28bf84b25a9428f39da784ee5 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page5c8f493134894a3ba142cb9404c25382 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page936963f6c6fa4905a45eb6027a243d3a darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pageef4f678df9ce48508c538bbba0b795e0 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page34582fc46a5e464d956afb650849e27b darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page50d7fbddb20f4d1b84096db7ba6a6616 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page837c1cba945f4cfb8fa30b14589e858f darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pageada2a387fe2847b28b8018124073da56 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pagede39f30fd4084f8c9dde612283f4a1a8 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page5609fa412bc24359bb1a40e2648b0a19 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page753feb1a56354810ae4d6ed47c6c657a darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page97e1f93ced014ecda01bf002f75ae4ee darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageb944b18db7264b4f8c0de9b0b9fc919f darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageec019202cf2c48e7a1a4ede5104943f7 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page3d4bbd5439ad4100932eff278a35d7ed darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page345dc8ab67db4f2788c1bec5c75dc8dd darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page979b1f4a493a43cba8099696daeff7cd darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagea7a17bef912842c7a524024926403b44 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Pagebf5da33ab2a149a9b13efcd6a394684b darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page6a69804e3ce04f07b54227f270da72f9 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pageebd210529f344234bd5f98985ee62a62 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page75a8ec5d912d4968951c5d55713832cf darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page8927adc968fa459f97faf95a790e85d1 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page4fb08b19ff924cada0e20d23db255433 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page2985f74655ba4ed39f75852ab8abffc6 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page782a23a22da04978a18bb2000b18d5f6 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page1628015e290e46ad8ee8f8a47c9447f1 darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page29662fabe196440481854a6fd36a6fcd darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page0a023ffaa3324860945e006c42bc2e58 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page0d06773a32244f5d88cb5822ac55d532 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Pagee3b10516e17040518dc2f5fd75732bd0 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page9c2a8d5e7edf438583944db9a1748260 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page161d9f26257749939a1f144291026a0e darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagee94b56cfb6914feab43c58a79c1da5a4 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagea6ecb63be9b949dfa0022502416f15a7 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Pagecca9933aa47a43118372f4c44ea4929a darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page9f1d46358b2a47fba06b612f95c42abc darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Pagefa05358286554ed3953146085f70be52 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page529a19c6d09144599e3b2af0c3440d5f darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagea32b67f310914036bb5a4e4dc03e12ab darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page033e52c5de3643c99ca3de7322630dbf darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page309c774b64dd41d985290cb531d2b2a5 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page3a367cfe0db84ce498178e84c2bad30d darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page7354b6ccfbba473782bbcfebfa00c18b darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page14f6e36971104b12a9a9217932366705 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Pagee6b90af632194420841d61c15046399c darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagefe8eb5ee9e6641bb83d89382340175a0 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page4ff67c15916a44389db4f85e255230ba darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page5490ed3f386a4010b8288d5a896dc5c1 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page70ab6b413f3741149870be0e67e3f81a darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

