
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page867e504d78f64a3f9623c62d46037e98 = lazy(() => import('./../pages/Page867e504d78f64a3f9623c62d46037e98'))
    const Pagedcf95120b5c545349be0ee64ae337884 = lazy(() => import('./../pages/Pagedcf95120b5c545349be0ee64ae337884'))

    const Pagef1eb1205663d4e3195916f03cd290228 = lazy(() => import('./../pages/Pagef1eb1205663d4e3195916f03cd290228'))
    const Page3a3f0d12f6c9478ebc2d35c780b1ced5 = lazy(() => import('./../pages/Page3a3f0d12f6c9478ebc2d35c780b1ced5'))
    const Page78c7c9824d154319a04d68f920f4aa60 = lazy(() => import('./../pages/Page78c7c9824d154319a04d68f920f4aa60'))
    const Page5a7366fedb2c4ad888d4a86367351185 = lazy(() => import('./../pages/Page5a7366fedb2c4ad888d4a86367351185'))
    const Page0fd4a6decfd04e9eb7c02c45dc6cfa41 = lazy(() => import('./../pages/Page0fd4a6decfd04e9eb7c02c45dc6cfa41'))
    const Pageb5599098e8f74170900fc466e6758caa = lazy(() => import('./../pages/Pageb5599098e8f74170900fc466e6758caa'))
    const Page7342f87413704428ba903b94c7e57cb1 = lazy(() => import('./../pages/Page7342f87413704428ba903b94c7e57cb1'))
    const Page7b623441bc75466d986bd7284aca9e49 = lazy(() => import('./../pages/Page7b623441bc75466d986bd7284aca9e49'))
    const Pagee533ae4433a04f04b43a7cd33548d001 = lazy(() => import('./../pages/Pagee533ae4433a04f04b43a7cd33548d001'))

    const Pagec7b9df7ef8b84f64bca3bfcfd8b94c33 = lazy(() => import('./../pages/Pagec7b9df7ef8b84f64bca3bfcfd8b94c33'))
    const Pagec44ca3b024dd48c2a2f3078f70c282ed = lazy(() => import('./../pages/Pagec44ca3b024dd48c2a2f3078f70c282ed'))
    const Pagedc608095f46b4aaab15ecb2ed2da7a8b = lazy(() => import('./../pages/Pagedc608095f46b4aaab15ecb2ed2da7a8b'))

    const Page4daf5d212c6b462883b48c4ddb328c05 = lazy(() => import('./../pages/Page4daf5d212c6b462883b48c4ddb328c05'))
    const Page6eb7a61f59904979ae450d27e3869fe8 = lazy(() => import('./../pages/Page6eb7a61f59904979ae450d27e3869fe8'))
    const Page9893d646d053483e8023d9795a1026fb = lazy(() => import('./../pages/Page9893d646d053483e8023d9795a1026fb'))
    const Page496de08efdc84f039f06817f682c16f3 = lazy(() => import('./../pages/Page496de08efdc84f039f06817f682c16f3'))
    const Page464649d64b5149ae9b1206da91c28773 = lazy(() => import('./../pages/Page464649d64b5149ae9b1206da91c28773'))
    const Page12f361172c97467596c4bb23a8864c49 = lazy(() => import('./../pages/Page12f361172c97467596c4bb23a8864c49'))
    const Pageff9fa2189c2d407694d636771003b9e8 = lazy(() => import('./../pages/Pageff9fa2189c2d407694d636771003b9e8'))
    const Page6ce06223a6154d5bbc3892eb55f21753 = lazy(() => import('./../pages/Page6ce06223a6154d5bbc3892eb55f21753'))
    const Page48f75d48b8904df4af87d686cafadd64 = lazy(() => import('./../pages/Page48f75d48b8904df4af87d686cafadd64'))
    const Page408d9ad2c2ec411baa137b4da21528fe = lazy(() => import('./../pages/Page408d9ad2c2ec411baa137b4da21528fe'))
    const Page1a0f058af04d48368d2e2e371f676d1f = lazy(() => import('./../pages/Page1a0f058af04d48368d2e2e371f676d1f'))
    const Page6b9d6ed0797343b6b8edcc7c7d681cca = lazy(() => import('./../pages/Page6b9d6ed0797343b6b8edcc7c7d681cca'))
    const Page8b3ffa81c1d243b184ed5db9815d0e6a = lazy(() => import('./../pages/Page8b3ffa81c1d243b184ed5db9815d0e6a'))
    const Page9e383c2c2654450585dcc215f46eaa27 = lazy(() => import('./../pages/Page9e383c2c2654450585dcc215f46eaa27'))

    const Paged26c9ae4a78148839f4a60abcb1fb414 = lazy(() => import('./../pages/Paged26c9ae4a78148839f4a60abcb1fb414'))
    const Pagecdabece942ce476d96257554d3f15eb2 = lazy(() => import('./../pages/Pagecdabece942ce476d96257554d3f15eb2'))
    const Page0ca722e9e4b04e2bba6e5708c4cde06c = lazy(() => import('./../pages/Page0ca722e9e4b04e2bba6e5708c4cde06c'))
    const Page6140d9b2a5f6427a9821e952fe4bb91d = lazy(() => import('./../pages/Page6140d9b2a5f6427a9821e952fe4bb91d'))
    const Page3060501362ef437789f765c1adbd4bdb = lazy(() => import('./../pages/Page3060501362ef437789f765c1adbd4bdb'))
    const Pagefab1868351e247a5ad89a2217ef0e92d = lazy(() => import('./../pages/Pagefab1868351e247a5ad89a2217ef0e92d'))
    const Pageb8764a883a154a37aae97ec810877102 = lazy(() => import('./../pages/Pageb8764a883a154a37aae97ec810877102'))
    const Page6c50ceee08624d60ba643ea2f0e5576d = lazy(() => import('./../pages/Page6c50ceee08624d60ba643ea2f0e5576d'))

    const Page9690c352a2334b8eb41e73cda0bb3d4b = lazy(() => import('./../pages/Page9690c352a2334b8eb41e73cda0bb3d4b'))
    const Page0c0c5fa83c124da596709e7fdbb0a0ab = lazy(() => import('./../pages/Page0c0c5fa83c124da596709e7fdbb0a0ab'))
    const Page45b77ea5d360423d81076b28a7dcb56d = lazy(() => import('./../pages/Page45b77ea5d360423d81076b28a7dcb56d'))
    const Page5a7503824c9e431985d19c18db37863d = lazy(() => import('./../pages/Page5a7503824c9e431985d19c18db37863d'))
    const Pageab305f5088f542ac96e61cc682b154f4 = lazy(() => import('./../pages/Pageab305f5088f542ac96e61cc682b154f4'))
    const Page83f94b04613e4119a43d323f4f6ec833 = lazy(() => import('./../pages/Page83f94b04613e4119a43d323f4f6ec833'))
    const Page3ae999fa68614b57aa9028acdbb881a5 = lazy(() => import('./../pages/Page3ae999fa68614b57aa9028acdbb881a5'))
    const Pagefd24329d3f3d4b64845cee28d4befd34 = lazy(() => import('./../pages/Pagefd24329d3f3d4b64845cee28d4befd34'))
    const Page49f902472b894f8eabf97e6aed30e44c = lazy(() => import('./../pages/Page49f902472b894f8eabf97e6aed30e44c'))
    const Page28195c6e6cb5448080ecdaba6d53a55f = lazy(() => import('./../pages/Page28195c6e6cb5448080ecdaba6d53a55f'))
    const Pagee953efb0a8044e35844a3545a0f17960 = lazy(() => import('./../pages/Pagee953efb0a8044e35844a3545a0f17960'))
    const Page82701c38db06440384d6c849246f8cb0 = lazy(() => import('./../pages/Page82701c38db06440384d6c849246f8cb0'))
    const Page79e1c5c160ca43c0a1b17eff5dc47231 = lazy(() => import('./../pages/Page79e1c5c160ca43c0a1b17eff5dc47231'))
    const Page205c88086343467e941dd9f15ae166b9 = lazy(() => import('./../pages/Page205c88086343467e941dd9f15ae166b9'))
    const Page5d4af465f58a4b078ff35d2f25ce48be = lazy(() => import('./../pages/Page5d4af465f58a4b078ff35d2f25ce48be'))

    const Page4decab5c09d441b6abc7e8249a3bfd1d = lazy(() => import('./../pages/Page4decab5c09d441b6abc7e8249a3bfd1d'))

    const Page604ec557cb844f308ae2132d0fa34c0b = lazy(() => import('./../pages/Page604ec557cb844f308ae2132d0fa34c0b'))
    const Pageb5eb818f5c6c4abbba2f85638e7278d0 = lazy(() => import('./../pages/Pageb5eb818f5c6c4abbba2f85638e7278d0'))
    const Page41dc047637c046fc8750e18e5e474780 = lazy(() => import('./../pages/Page41dc047637c046fc8750e18e5e474780'))
    const Page3fe0135336734bb8ae1d04dc09f5e263 = lazy(() => import('./../pages/Page3fe0135336734bb8ae1d04dc09f5e263'))
    const Page6cf5bb94a0b947afa705202629305a6f = lazy(() => import('./../pages/Page6cf5bb94a0b947afa705202629305a6f'))
    const Page39ab3ac91f384d34bd38e0c449028035 = lazy(() => import('./../pages/Page39ab3ac91f384d34bd38e0c449028035'))
    const Page15251e531fc24cd29a10d7aefb747002 = lazy(() => import('./../pages/Page15251e531fc24cd29a10d7aefb747002'))
    const Page5a8baff523464c3998ea110ba35893b1 = lazy(() => import('./../pages/Page5a8baff523464c3998ea110ba35893b1'))
    const Page0683e4de63bd43adb2cd58534109acfb = lazy(() => import('./../pages/Page0683e4de63bd43adb2cd58534109acfb'))

    const Pagef1b1bde091524e6585c0682a3567ebb1 = lazy(() => import('./../pages/Pagef1b1bde091524e6585c0682a3567ebb1'))


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
                        {path:"FormSubmitting", element:<Page867e504d78f64a3f9623c62d46037e98 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagedcf95120b5c545349be0ee64ae337884 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pagef1eb1205663d4e3195916f03cd290228 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page3a3f0d12f6c9478ebc2d35c780b1ced5 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page78c7c9824d154319a04d68f920f4aa60 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page5a7366fedb2c4ad888d4a86367351185 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page0fd4a6decfd04e9eb7c02c45dc6cfa41 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pageb5599098e8f74170900fc466e6758caa darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page7342f87413704428ba903b94c7e57cb1 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page7b623441bc75466d986bd7284aca9e49 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagee533ae4433a04f04b43a7cd33548d001 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagec7b9df7ef8b84f64bca3bfcfd8b94c33 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Pagec44ca3b024dd48c2a2f3078f70c282ed darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagedc608095f46b4aaab15ecb2ed2da7a8b darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page4daf5d212c6b462883b48c4ddb328c05 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page6eb7a61f59904979ae450d27e3869fe8 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page9893d646d053483e8023d9795a1026fb darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page496de08efdc84f039f06817f682c16f3 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page464649d64b5149ae9b1206da91c28773 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page12f361172c97467596c4bb23a8864c49 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageff9fa2189c2d407694d636771003b9e8 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page6ce06223a6154d5bbc3892eb55f21753 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page48f75d48b8904df4af87d686cafadd64 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page408d9ad2c2ec411baa137b4da21528fe darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page1a0f058af04d48368d2e2e371f676d1f darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page6b9d6ed0797343b6b8edcc7c7d681cca darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page8b3ffa81c1d243b184ed5db9815d0e6a darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page9e383c2c2654450585dcc215f46eaa27 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Paged26c9ae4a78148839f4a60abcb1fb414 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Pagecdabece942ce476d96257554d3f15eb2 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page0ca722e9e4b04e2bba6e5708c4cde06c darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page6140d9b2a5f6427a9821e952fe4bb91d darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page3060501362ef437789f765c1adbd4bdb darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagefab1868351e247a5ad89a2217ef0e92d darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pageb8764a883a154a37aae97ec810877102 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page6c50ceee08624d60ba643ea2f0e5576d darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page9690c352a2334b8eb41e73cda0bb3d4b darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page0c0c5fa83c124da596709e7fdbb0a0ab darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page45b77ea5d360423d81076b28a7dcb56d darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page5a7503824c9e431985d19c18db37863d darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageab305f5088f542ac96e61cc682b154f4 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page83f94b04613e4119a43d323f4f6ec833 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page3ae999fa68614b57aa9028acdbb881a5 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagefd24329d3f3d4b64845cee28d4befd34 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page49f902472b894f8eabf97e6aed30e44c darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page28195c6e6cb5448080ecdaba6d53a55f darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagee953efb0a8044e35844a3545a0f17960 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page82701c38db06440384d6c849246f8cb0 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Page79e1c5c160ca43c0a1b17eff5dc47231 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page205c88086343467e941dd9f15ae166b9 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page5d4af465f58a4b078ff35d2f25ce48be darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page4decab5c09d441b6abc7e8249a3bfd1d darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page604ec557cb844f308ae2132d0fa34c0b darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Pageb5eb818f5c6c4abbba2f85638e7278d0 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page41dc047637c046fc8750e18e5e474780 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page3fe0135336734bb8ae1d04dc09f5e263 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page6cf5bb94a0b947afa705202629305a6f darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page39ab3ac91f384d34bd38e0c449028035 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page15251e531fc24cd29a10d7aefb747002 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page5a8baff523464c3998ea110ba35893b1 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page0683e4de63bd43adb2cd58534109acfb darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagef1b1bde091524e6585c0682a3567ebb1 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

