
    import React, {useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    import {ComponentLoader} from './componentLoader';

export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<ComponentLoader pageName="Pagef6b8a16b658d4e54beda059b211dd3d5" darkMode={props.darkMode} />},
                        {path:"Test2", element:<ComponentLoader pageName="Page0ee03373dd574c9d99e23ec172f766bb" darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<ComponentLoader pageName="Page97a3ec084efe408ca2137536d535e889" darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<ComponentLoader pageName="Pagea432b821eb904c6f9cdc1df2fd14ec4c" darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<ComponentLoader pageName="Paged8398a97f6da4eaa823c8d73490cf073" darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<ComponentLoader pageName="Pagebde6cd705f3b40438c11774f6a70b61d" darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<ComponentLoader pageName="Pageba207705e7a240189256743c754eb774" darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<ComponentLoader pageName="Page1b1719b4822b468dbe9a15a1e148c63f" darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<ComponentLoader pageName="Pagedf71f1f5e19243408776b859ef924363" darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<ComponentLoader pageName="Pagedc70ef94492d4bacb1dc7bb826cdda09" darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<ComponentLoader pageName="Pagee7571f063b2f4fb89db8ce0e0f943af1" darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<ComponentLoader pageName="Page0d2383f4759d4099bf2f7d0d9d54e8c0" darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<ComponentLoader pageName="Page259093d129b449d2b6d22c111e593578" darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<ComponentLoader pageName="Pageb4e2a43fcd124410b3cc0a91800946d7" darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<ComponentLoader pageName="Pagee8143a6bb93a48b9a0ee30009dab05d0" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<ComponentLoader pageName="Pagea8f78ea1e65547f4b6810dab1e61702f" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Page83c3d5bf7aa24675b0b6ef62106cc611" darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<ComponentLoader pageName="Pagea7b1c2d23e4945bea6466837f14600e9" darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<ComponentLoader pageName="Pageebc3a113906f4db8b090cfadc092d393" darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<ComponentLoader pageName="Page54ec99c3097c4af29bc5d5acfe350536" darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<ComponentLoader pageName="Page4b39ae337496487297e9faa0d76ac092" darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<ComponentLoader pageName="Page6fe456226a6c4e169ed8cc2082888a3a" darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<ComponentLoader pageName="Page7c25addb8f7247a888b1802b6b607ac8" darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<ComponentLoader pageName="Pagec6a27a15e600422996580c9a675f0402" darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<ComponentLoader pageName="Page1673bdf6d548491a97a1b47e19ee2522" darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<ComponentLoader pageName="Page54c9997ee66548f0a4735f6f8b2efcf4" darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<ComponentLoader pageName="Page5255393a2c254b1aa5ff196600ed7c7a" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Page5832c541fd744bc693ed895c3666f295" darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<ComponentLoader pageName="Page6af7e372c3db4b27ade2c7618c9deeef" darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<ComponentLoader pageName="Pagedbec1870aa5e4b32b5c457bea3031c18" darkMode={props.darkMode} />},
                        {path:"Validation", element:<ComponentLoader pageName="Page19df1a53ac4342a085e6ae8ea4527ab1" darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<ComponentLoader pageName="Pageb20c01ea969546b3bfc412570f933e4c" darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<ComponentLoader pageName="Page0d9a146543944d6484eaf5c631b59aef" darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<ComponentLoader pageName="Page0a0e6c7b02bd497e99781033383cdb5e" darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<ComponentLoader pageName="Page0033f27c91164d3c8b3b99a2b558ac9a" darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<ComponentLoader pageName="Page1914d4b844be4456a2b2a4a59da89dff" darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<ComponentLoader pageName="Page744ac444af0c43ad97320773f70e79f0" darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<ComponentLoader pageName="Page383dd9824229425d897b5e63d450589b" darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<ComponentLoader pageName="Page8ada1b1b853c47b78a1ff08c7d21d423" darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Pagecdaccb80531a410691605d3323b02b62" darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<ComponentLoader pageName="Pagec7e63298af4f4e02bb152efec16fba9a" darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<ComponentLoader pageName="Page1df9d5a68f474a98ad5e3196d30610d1" darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<ComponentLoader pageName="Pageb375227a3165428194fca337f334339f" darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<ComponentLoader pageName="Page65f989ef6873436c9b7bf8a8179333bc" darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<ComponentLoader pageName="Pagea6efe5c4c1d34816a0f2d411bd70bba3" darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<ComponentLoader pageName="Page2ea86d5a47064f6e8b014bcb88c6e026" darkMode={props.darkMode} />},
                        {path:"Persistence", element:<ComponentLoader pageName="Page1f503e3aa62042f0b651dd397231d819" darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<ComponentLoader pageName="Page7f7186f0b89b4a2294a3281597b57100" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Page47199f32a24b4b0c93f4a3335cb5e13e" darkMode={props.darkMode} />},
                        {path:"Tree", element:<ComponentLoader pageName="Pagee26b65b6439044989de599d60ab1cc49" darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<ComponentLoader pageName="Page73ffe2f7c2194e8bbc4aa28bc5abb3ef" darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<ComponentLoader pageName="Pagea3726c30e5ae48cfbb00566943800f1e" darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<ComponentLoader pageName="Pagee4b30b294b744c9885c24c8488b92a18" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Page995bd0e2164d4521a9a0f2a8e1fddae4" darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<ComponentLoader pageName="Page3926c1e8edc24072a71b583cb7aa3d35" darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<ComponentLoader pageName="Page19b76e57fea04ae0b39d44467a9ff014" darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"Async", element:<ComponentLoader pageName="Page559a781c3470489b94353eea559ee677" darkMode={props.darkMode} />},
                        {path:"AsyncSearch", element:<ComponentLoader pageName="Page3d1d015356bf4d998eb90a5e74f63929" darkMode={props.darkMode} />},
                        {path:"Basic", element:<ComponentLoader pageName="Page5371536da06e47d79212527be96580e7" darkMode={props.darkMode} />},
                        {path:"DefaultValue", element:<ComponentLoader pageName="Pagecfdc9e5339e6468a8190b1b301a44315" darkMode={props.darkMode} />},
                        {path:"Depended", element:<ComponentLoader pageName="Page6f238acf73bd4ba89d85d5ab2ff4ac98" darkMode={props.darkMode} />},
                        {path:"DependedAsync", element:<ComponentLoader pageName="Pagef7b2906a9cfa4660978e6f3286d41d58" darkMode={props.darkMode} />},
                        {path:"NodeRender", element:<ComponentLoader pageName="Page514d297042924d43900aa136f353cb2a" darkMode={props.darkMode} />},
                        {path:"ReadOnly", element:<ComponentLoader pageName="Page0b08b94c68fe4ce5bc58f37970cd938d" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Page3284acfea72f4a59830f0031db608d44" darkMode={props.darkMode} />},
                        {path:"WithFormAndNodeRenderers", element:<ComponentLoader pageName="Page3c343e67624d4db8ae73b005c3bbdb6a" darkMode={props.darkMode} />},
                        {path:"WithFormAsync", element:<ComponentLoader pageName="Page036dd26bb6c64afba13018c15c8863bd" darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<ComponentLoader pageName="Page80538504b7684f40bd125dde311e42e7" darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

