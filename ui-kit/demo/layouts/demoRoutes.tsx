
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Pagedb19b18115cf4affb4577142ada72dc2 = lazy(() => import('./../pages/Pagedb19b18115cf4affb4577142ada72dc2'))
    const Paged93ec4f1e80947f7841b137a0f2884df = lazy(() => import('./../pages/Paged93ec4f1e80947f7841b137a0f2884df'))

    const Pagea5427d3fd7be492c9b9c119d07a87e89 = lazy(() => import('./../pages/Pagea5427d3fd7be492c9b9c119d07a87e89'))
    const Pagea460e55d0c89456d9b1ad95730d639bd = lazy(() => import('./../pages/Pagea460e55d0c89456d9b1ad95730d639bd'))

    const Page92e6e2bd01dc4feb82f3725b935832ed = lazy(() => import('./../pages/Page92e6e2bd01dc4feb82f3725b935832ed'))
    const Page5c5d4d786e684c4d83d48038b4a79d74 = lazy(() => import('./../pages/Page5c5d4d786e684c4d83d48038b4a79d74'))
    const Pagee34de7e21f314af38665431295f90596 = lazy(() => import('./../pages/Pagee34de7e21f314af38665431295f90596'))
    const Page97cf67cd93954b5a9cd46c120292077d = lazy(() => import('./../pages/Page97cf67cd93954b5a9cd46c120292077d'))
    const Pagee140fd24c8b04d5384ce4240c88fa9d6 = lazy(() => import('./../pages/Pagee140fd24c8b04d5384ce4240c88fa9d6'))
    const Pagef1d5db2e86a54f18b718e70505287bb3 = lazy(() => import('./../pages/Pagef1d5db2e86a54f18b718e70505287bb3'))
    const Page401f568b284843caa1cdb0061244d40a = lazy(() => import('./../pages/Page401f568b284843caa1cdb0061244d40a'))
    const Page0dc196c192634e1c9831b6144e197ffc = lazy(() => import('./../pages/Page0dc196c192634e1c9831b6144e197ffc'))
    const Page34a59ea5e52d412d8579a9520d895eac = lazy(() => import('./../pages/Page34a59ea5e52d412d8579a9520d895eac'))
    const Pageb0c75a32da6649d8afe44db8690f99ff = lazy(() => import('./../pages/Pageb0c75a32da6649d8afe44db8690f99ff'))

    const Page60ac79c8b6554d50bce9d4373617de0b = lazy(() => import('./../pages/Page60ac79c8b6554d50bce9d4373617de0b'))
    const Page34655f7092ed4bbd838856b2b5d2c356 = lazy(() => import('./../pages/Page34655f7092ed4bbd838856b2b5d2c356'))
    const Pagef6355821ccd0419ea699435d2168f530 = lazy(() => import('./../pages/Pagef6355821ccd0419ea699435d2168f530'))

    const Page49c03b7967be45d78fc5a4f7e0ee2ac7 = lazy(() => import('./../pages/Page49c03b7967be45d78fc5a4f7e0ee2ac7'))
    const Page2cb2d7020cef4df08dcb21f9be77cd33 = lazy(() => import('./../pages/Page2cb2d7020cef4df08dcb21f9be77cd33'))
    const Pagec1307be3383844e2b491a0560e9b43a6 = lazy(() => import('./../pages/Pagec1307be3383844e2b491a0560e9b43a6'))
    const Page04a98c2f5321406bb203a6036fa07537 = lazy(() => import('./../pages/Page04a98c2f5321406bb203a6036fa07537'))
    const Page2bf4f59561944dfb99345159d1eb4613 = lazy(() => import('./../pages/Page2bf4f59561944dfb99345159d1eb4613'))
    const Pagec7cdf75abde54fb68efb1a670c2bdad2 = lazy(() => import('./../pages/Pagec7cdf75abde54fb68efb1a670c2bdad2'))
    const Page057e66e4f71f460b9b083dd3151cb0b5 = lazy(() => import('./../pages/Page057e66e4f71f460b9b083dd3151cb0b5'))
    const Pageab149eeb1c6b4a5587ce2a41b6e7d94e = lazy(() => import('./../pages/Pageab149eeb1c6b4a5587ce2a41b6e7d94e'))
    const Page43b5bdbd42f243838cd50a0667348eb0 = lazy(() => import('./../pages/Page43b5bdbd42f243838cd50a0667348eb0'))
    const Pagec5ef3d46b5fa4ae79f34d830497bf827 = lazy(() => import('./../pages/Pagec5ef3d46b5fa4ae79f34d830497bf827'))
    const Page85585a191a8d4b6d96bd43ffab0bfbb2 = lazy(() => import('./../pages/Page85585a191a8d4b6d96bd43ffab0bfbb2'))
    const Paged4f88e1379d244bbb87f2b32ba20b423 = lazy(() => import('./../pages/Paged4f88e1379d244bbb87f2b32ba20b423'))
    const Page562980eb130e4304a61636fa027f3daf = lazy(() => import('./../pages/Page562980eb130e4304a61636fa027f3daf'))
    const Page5fb5975125c043b6bd7bb3cba0a14e5f = lazy(() => import('./../pages/Page5fb5975125c043b6bd7bb3cba0a14e5f'))

    const Page4166dad1244343d993e55933f7f7541a = lazy(() => import('./../pages/Page4166dad1244343d993e55933f7f7541a'))

    const Paged8885c2448a44bf1bcd5f2551cc3cf08 = lazy(() => import('./../pages/Paged8885c2448a44bf1bcd5f2551cc3cf08'))
    const Page4a5bf7b315ab4a7c88676b801f0799fc = lazy(() => import('./../pages/Page4a5bf7b315ab4a7c88676b801f0799fc'))
    const Page8efcc5756f20496f957a85b5268798bd = lazy(() => import('./../pages/Page8efcc5756f20496f957a85b5268798bd'))
    const Page71e6734dc7d94318a63c9b32dc12770e = lazy(() => import('./../pages/Page71e6734dc7d94318a63c9b32dc12770e'))
    const Page8b7066600ee243cc88394dd52e943650 = lazy(() => import('./../pages/Page8b7066600ee243cc88394dd52e943650'))
    const Pagefe2db6b9b63144fd9be42fdcd2512828 = lazy(() => import('./../pages/Pagefe2db6b9b63144fd9be42fdcd2512828'))
    const Pageb5a962774e0e4deebf44f9630b52dbd7 = lazy(() => import('./../pages/Pageb5a962774e0e4deebf44f9630b52dbd7'))
    const Page57328e80ada541b18915c2a5d34f3e6c = lazy(() => import('./../pages/Page57328e80ada541b18915c2a5d34f3e6c'))

    const Page39d5cbbd62e0446493ee457b9da53c6f = lazy(() => import('./../pages/Page39d5cbbd62e0446493ee457b9da53c6f'))
    const Page90381619f182482dbb244001e2f60782 = lazy(() => import('./../pages/Page90381619f182482dbb244001e2f60782'))
    const Pagecedf4671c7cb4413a2fc2da420696bda = lazy(() => import('./../pages/Pagecedf4671c7cb4413a2fc2da420696bda'))
    const Page2edeaafcc8a84593967471ab4c1f738d = lazy(() => import('./../pages/Page2edeaafcc8a84593967471ab4c1f738d'))
    const Pageefc00bf114fd4beab883f7f86df4d004 = lazy(() => import('./../pages/Pageefc00bf114fd4beab883f7f86df4d004'))
    const Page38d4e49279c24c2987b8341cd1d32e69 = lazy(() => import('./../pages/Page38d4e49279c24c2987b8341cd1d32e69'))
    const Paged81467ffff404a36a8ea7e733359ceea = lazy(() => import('./../pages/Paged81467ffff404a36a8ea7e733359ceea'))
    const Paged916aa5fbfdb4c14954739bc7cf81ef2 = lazy(() => import('./../pages/Paged916aa5fbfdb4c14954739bc7cf81ef2'))
    const Page7e7dbcac3ec047e2a40ba09dc331864a = lazy(() => import('./../pages/Page7e7dbcac3ec047e2a40ba09dc331864a'))
    const Pageaf1011d72bb64510a872de194cde0b7a = lazy(() => import('./../pages/Pageaf1011d72bb64510a872de194cde0b7a'))
    const Pagef6f786cddc624dd389129caf3deeeca1 = lazy(() => import('./../pages/Pagef6f786cddc624dd389129caf3deeeca1'))
    const Paged3672a1025bf4949962562f4a60dad3d = lazy(() => import('./../pages/Paged3672a1025bf4949962562f4a60dad3d'))
    const Pagec6797abd755149579534983cf789d1fc = lazy(() => import('./../pages/Pagec6797abd755149579534983cf789d1fc'))
    const Page6306f217b05146839911c7b091bb7e59 = lazy(() => import('./../pages/Page6306f217b05146839911c7b091bb7e59'))
    const Page2d7ddf82b9ad4f29877e3ae7f55ba888 = lazy(() => import('./../pages/Page2d7ddf82b9ad4f29877e3ae7f55ba888'))

    const Pagea0bacd26c9b24a4e993319a48ebfd040 = lazy(() => import('./../pages/Pagea0bacd26c9b24a4e993319a48ebfd040'))

    const Page3e9d16b5abb146ea96001c753479b659 = lazy(() => import('./../pages/Page3e9d16b5abb146ea96001c753479b659'))
    const Page16d37a8538d74350b0843c41f314d6c0 = lazy(() => import('./../pages/Page16d37a8538d74350b0843c41f314d6c0'))
    const Pagefda9fcc5f60f4f43a08dae54e2b10f24 = lazy(() => import('./../pages/Pagefda9fcc5f60f4f43a08dae54e2b10f24'))
    const Page22948a00bcee4aefbdc499380a22c23e = lazy(() => import('./../pages/Page22948a00bcee4aefbdc499380a22c23e'))
    const Pagee3636a005bcf4b49b5c9118ae8b6d578 = lazy(() => import('./../pages/Pagee3636a005bcf4b49b5c9118ae8b6d578'))
    const Page90112fde270643b8adae75533dfcb223 = lazy(() => import('./../pages/Page90112fde270643b8adae75533dfcb223'))
    const Page6d60cae3379e417ba4ce68d5d97f53e1 = lazy(() => import('./../pages/Page6d60cae3379e417ba4ce68d5d97f53e1'))
    const Pageb16aca6ded67439f962615809f57594d = lazy(() => import('./../pages/Pageb16aca6ded67439f962615809f57594d'))
    const Pagef34783b8f3204c3fa3316e098b5a6462 = lazy(() => import('./../pages/Pagef34783b8f3204c3fa3316e098b5a6462'))

    const Pagedf66f9c0a53c4a8fa042a716a7853db4 = lazy(() => import('./../pages/Pagedf66f9c0a53c4a8fa042a716a7853db4'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Pagedb19b18115cf4affb4577142ada72dc2 darkMode={props.darkMode} />},
                        {path:"Test2", element:<Paged93ec4f1e80947f7841b137a0f2884df darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Pagea5427d3fd7be492c9b9c119d07a87e89 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Pagea460e55d0c89456d9b1ad95730d639bd darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Page92e6e2bd01dc4feb82f3725b935832ed darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page5c5d4d786e684c4d83d48038b4a79d74 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Pagee34de7e21f314af38665431295f90596 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page97cf67cd93954b5a9cd46c120292077d darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagee140fd24c8b04d5384ce4240c88fa9d6 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pagef1d5db2e86a54f18b718e70505287bb3 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Page401f568b284843caa1cdb0061244d40a darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page0dc196c192634e1c9831b6144e197ffc darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page34a59ea5e52d412d8579a9520d895eac darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pageb0c75a32da6649d8afe44db8690f99ff darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Page60ac79c8b6554d50bce9d4373617de0b darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page34655f7092ed4bbd838856b2b5d2c356 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagef6355821ccd0419ea699435d2168f530 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page49c03b7967be45d78fc5a4f7e0ee2ac7 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page2cb2d7020cef4df08dcb21f9be77cd33 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagec1307be3383844e2b491a0560e9b43a6 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page04a98c2f5321406bb203a6036fa07537 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page2bf4f59561944dfb99345159d1eb4613 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pagec7cdf75abde54fb68efb1a670c2bdad2 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page057e66e4f71f460b9b083dd3151cb0b5 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Pageab149eeb1c6b4a5587ce2a41b6e7d94e darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page43b5bdbd42f243838cd50a0667348eb0 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pagec5ef3d46b5fa4ae79f34d830497bf827 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page85585a191a8d4b6d96bd43ffab0bfbb2 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Paged4f88e1379d244bbb87f2b32ba20b423 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page562980eb130e4304a61636fa027f3daf darkMode={props.darkMode} />},
                        {path:"Validation", element:<Page5fb5975125c043b6bd7bb3cba0a14e5f darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page4166dad1244343d993e55933f7f7541a darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Paged8885c2448a44bf1bcd5f2551cc3cf08 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page4a5bf7b315ab4a7c88676b801f0799fc darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page8efcc5756f20496f957a85b5268798bd darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page71e6734dc7d94318a63c9b32dc12770e darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page8b7066600ee243cc88394dd52e943650 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagefe2db6b9b63144fd9be42fdcd2512828 darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pageb5a962774e0e4deebf44f9630b52dbd7 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page57328e80ada541b18915c2a5d34f3e6c darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page39d5cbbd62e0446493ee457b9da53c6f darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page90381619f182482dbb244001e2f60782 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Pagecedf4671c7cb4413a2fc2da420696bda darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page2edeaafcc8a84593967471ab4c1f738d darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Pageefc00bf114fd4beab883f7f86df4d004 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page38d4e49279c24c2987b8341cd1d32e69 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Paged81467ffff404a36a8ea7e733359ceea darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Paged916aa5fbfdb4c14954739bc7cf81ef2 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page7e7dbcac3ec047e2a40ba09dc331864a darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pageaf1011d72bb64510a872de194cde0b7a darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagef6f786cddc624dd389129caf3deeeca1 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Paged3672a1025bf4949962562f4a60dad3d darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagec6797abd755149579534983cf789d1fc darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page6306f217b05146839911c7b091bb7e59 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Page2d7ddf82b9ad4f29877e3ae7f55ba888 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Pagea0bacd26c9b24a4e993319a48ebfd040 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Page3e9d16b5abb146ea96001c753479b659 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page16d37a8538d74350b0843c41f314d6c0 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Pagefda9fcc5f60f4f43a08dae54e2b10f24 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page22948a00bcee4aefbdc499380a22c23e darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagee3636a005bcf4b49b5c9118ae8b6d578 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page90112fde270643b8adae75533dfcb223 darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page6d60cae3379e417ba4ce68d5d97f53e1 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageb16aca6ded67439f962615809f57594d darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pagef34783b8f3204c3fa3316e098b5a6462 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Pagedf66f9c0a53c4a8fa042a716a7853db4 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

