
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page0fd298258d9c40f7a9ef071527ed468f = lazy(() => import('./../pages/Page0fd298258d9c40f7a9ef071527ed468f'))
    const Page1088426bd70d4688a63b76faf39b89db = lazy(() => import('./../pages/Page1088426bd70d4688a63b76faf39b89db'))

    const Page306f8fbb06b74c80bf3cde27e77aa5df = lazy(() => import('./../pages/Page306f8fbb06b74c80bf3cde27e77aa5df'))
    const Page97ac34ff16684bd79f3844e246b73a63 = lazy(() => import('./../pages/Page97ac34ff16684bd79f3844e246b73a63'))

    const Pagede4005e5f52a4c63955a5cb161477abe = lazy(() => import('./../pages/Pagede4005e5f52a4c63955a5cb161477abe'))
    const Page8e651d89fde049919fb8fce40873c186 = lazy(() => import('./../pages/Page8e651d89fde049919fb8fce40873c186'))
    const Page4ff6cff02fb4487b89380d2210902b88 = lazy(() => import('./../pages/Page4ff6cff02fb4487b89380d2210902b88'))
    const Page7b910eac14ad4e1291544b3c61625fe9 = lazy(() => import('./../pages/Page7b910eac14ad4e1291544b3c61625fe9'))
    const Page0833c75a33e54cbcb3128ecae24865bc = lazy(() => import('./../pages/Page0833c75a33e54cbcb3128ecae24865bc'))
    const Pageb9b66a01fb28447a99473b7a58bce344 = lazy(() => import('./../pages/Pageb9b66a01fb28447a99473b7a58bce344'))
    const Pagec6306969754044698f7b2ba0352fc110 = lazy(() => import('./../pages/Pagec6306969754044698f7b2ba0352fc110'))
    const Pagebd139fb816a246a886abd8311d6d1e4a = lazy(() => import('./../pages/Pagebd139fb816a246a886abd8311d6d1e4a'))
    const Page4440934040ab4ac7b5f2c84857844b0c = lazy(() => import('./../pages/Page4440934040ab4ac7b5f2c84857844b0c'))
    const Pagef3a3ace018d04866bea7ed33962e4969 = lazy(() => import('./../pages/Pagef3a3ace018d04866bea7ed33962e4969'))

    const Pagefbdcf9952d9b4d979ee313df25130285 = lazy(() => import('./../pages/Pagefbdcf9952d9b4d979ee313df25130285'))
    const Page92f2b946ca4b4515a04d82ea83c6a490 = lazy(() => import('./../pages/Page92f2b946ca4b4515a04d82ea83c6a490'))
    const Page7662b81cf90140daa937fdb6e41f8c56 = lazy(() => import('./../pages/Page7662b81cf90140daa937fdb6e41f8c56'))

    const Page05753660f6624643b259b78a3f02d226 = lazy(() => import('./../pages/Page05753660f6624643b259b78a3f02d226'))
    const Pagec09be6e36ff54439b373fce48ec8304b = lazy(() => import('./../pages/Pagec09be6e36ff54439b373fce48ec8304b'))
    const Pagefb9a550a784f4539acf0ae6828dd4da0 = lazy(() => import('./../pages/Pagefb9a550a784f4539acf0ae6828dd4da0'))
    const Page53cd17344ffc41faa0a2e7243fb84391 = lazy(() => import('./../pages/Page53cd17344ffc41faa0a2e7243fb84391'))
    const Page62675bda9dc8487ebc025950803c1e6f = lazy(() => import('./../pages/Page62675bda9dc8487ebc025950803c1e6f'))
    const Pageee10044a92ea46ebae3045080ec13500 = lazy(() => import('./../pages/Pageee10044a92ea46ebae3045080ec13500'))
    const Pageb7ba3de9d3554fc5a855801d0de01995 = lazy(() => import('./../pages/Pageb7ba3de9d3554fc5a855801d0de01995'))
    const Page71265f050227499db4b7efa715598c34 = lazy(() => import('./../pages/Page71265f050227499db4b7efa715598c34'))
    const Page570629269bea4132af5984791c0ef402 = lazy(() => import('./../pages/Page570629269bea4132af5984791c0ef402'))
    const Pageb3321aef1daa4649bb5cd994bfd9d02a = lazy(() => import('./../pages/Pageb3321aef1daa4649bb5cd994bfd9d02a'))
    const Pagecd586fe8deb64b8bb2d474791296fbb5 = lazy(() => import('./../pages/Pagecd586fe8deb64b8bb2d474791296fbb5'))
    const Page94e7facec51447d9879215e8f5bb70f4 = lazy(() => import('./../pages/Page94e7facec51447d9879215e8f5bb70f4'))
    const Page3147ed714e444150bb0470e7d277b59b = lazy(() => import('./../pages/Page3147ed714e444150bb0470e7d277b59b'))
    const Pagedf0236061fa8449c9afcfedff3c42dfb = lazy(() => import('./../pages/Pagedf0236061fa8449c9afcfedff3c42dfb'))

    const Page3e30606a46df44d5888a95e50f55e2cb = lazy(() => import('./../pages/Page3e30606a46df44d5888a95e50f55e2cb'))

    const Pagededbf4b59af146e3a192990ab9fc1843 = lazy(() => import('./../pages/Pagededbf4b59af146e3a192990ab9fc1843'))
    const Page6c840bfc92f840eea1f8423c43904169 = lazy(() => import('./../pages/Page6c840bfc92f840eea1f8423c43904169'))
    const Pagee86695ced42348d8ae5eb8d74d7cfa43 = lazy(() => import('./../pages/Pagee86695ced42348d8ae5eb8d74d7cfa43'))
    const Page0c05a5baab0c433995eeee7cc96f48f8 = lazy(() => import('./../pages/Page0c05a5baab0c433995eeee7cc96f48f8'))
    const Page6e06cf91924448c68aef3e86529aa534 = lazy(() => import('./../pages/Page6e06cf91924448c68aef3e86529aa534'))
    const Page9635eed95aa14f4dbd6c252645f5071a = lazy(() => import('./../pages/Page9635eed95aa14f4dbd6c252645f5071a'))
    const Page77a832cfe68346c4a7487f35c4859617 = lazy(() => import('./../pages/Page77a832cfe68346c4a7487f35c4859617'))
    const Pagedd83fe372aeb4cb0a76ceb77297e323a = lazy(() => import('./../pages/Pagedd83fe372aeb4cb0a76ceb77297e323a'))

    const Pagec35b007185924b2e8fcc3e947a09826b = lazy(() => import('./../pages/Pagec35b007185924b2e8fcc3e947a09826b'))
    const Page6fd22bfc498946f5a47684eaf54d94fa = lazy(() => import('./../pages/Page6fd22bfc498946f5a47684eaf54d94fa'))
    const Page5eb8ef3f67f241d49a453c0a98b5c8c3 = lazy(() => import('./../pages/Page5eb8ef3f67f241d49a453c0a98b5c8c3'))
    const Page1b2b90c56ec04091a7a4a058574d6569 = lazy(() => import('./../pages/Page1b2b90c56ec04091a7a4a058574d6569'))
    const Page77cad261ea4b4d798695d012c8e7fdac = lazy(() => import('./../pages/Page77cad261ea4b4d798695d012c8e7fdac'))
    const Page3b3771bb645b4b01a5fa3aa2c87b64fb = lazy(() => import('./../pages/Page3b3771bb645b4b01a5fa3aa2c87b64fb'))
    const Page3e5f6948410443349c894c75cbcfd649 = lazy(() => import('./../pages/Page3e5f6948410443349c894c75cbcfd649'))
    const Pagee75fafb115064b7ab766381fb4e7f311 = lazy(() => import('./../pages/Pagee75fafb115064b7ab766381fb4e7f311'))
    const Page0b9f0b974a5f4d67afef9dab010e8b77 = lazy(() => import('./../pages/Page0b9f0b974a5f4d67afef9dab010e8b77'))
    const Pagede86f056e18f46f898b2674327e8c2ef = lazy(() => import('./../pages/Pagede86f056e18f46f898b2674327e8c2ef'))
    const Paged1ffb0885c7c4c8dafd5598560a118b6 = lazy(() => import('./../pages/Paged1ffb0885c7c4c8dafd5598560a118b6'))
    const Page47e8c391baf34d6ead7e8947915b2fd9 = lazy(() => import('./../pages/Page47e8c391baf34d6ead7e8947915b2fd9'))
    const Pagecf05116416c54e21947eae817277840c = lazy(() => import('./../pages/Pagecf05116416c54e21947eae817277840c'))
    const Page36b6e76e53b849df87e47aef1abe056a = lazy(() => import('./../pages/Page36b6e76e53b849df87e47aef1abe056a'))
    const Pagecbf7f19283f04fe1800d126b799e69d5 = lazy(() => import('./../pages/Pagecbf7f19283f04fe1800d126b799e69d5'))

    const Page68217802927c44acb0e4d2f14857e55c = lazy(() => import('./../pages/Page68217802927c44acb0e4d2f14857e55c'))

    const Pagefc26759e40424847a4e0353ba38f32a3 = lazy(() => import('./../pages/Pagefc26759e40424847a4e0353ba38f32a3'))
    const Page57d8d0d21525441ea445524156c49c17 = lazy(() => import('./../pages/Page57d8d0d21525441ea445524156c49c17'))
    const Page62f951bb469e4213978c5ae22349d326 = lazy(() => import('./../pages/Page62f951bb469e4213978c5ae22349d326'))
    const Page97a787467a3f44d493c406d63396aef6 = lazy(() => import('./../pages/Page97a787467a3f44d493c406d63396aef6'))
    const Page84f1df02f7784c41883f3aee1aa39d75 = lazy(() => import('./../pages/Page84f1df02f7784c41883f3aee1aa39d75'))
    const Page44d313cb7b544d0c88b7fcb3b908d66f = lazy(() => import('./../pages/Page44d313cb7b544d0c88b7fcb3b908d66f'))
    const Pagefcb793b6e1ff4ea0957ab4ed6cb72a9e = lazy(() => import('./../pages/Pagefcb793b6e1ff4ea0957ab4ed6cb72a9e'))
    const Page463185a64c5f4ef5bab6f017bf31ef09 = lazy(() => import('./../pages/Page463185a64c5f4ef5bab6f017bf31ef09'))
    const Pageec0a836b841f428e8d18048425f79ebf = lazy(() => import('./../pages/Pageec0a836b841f428e8d18048425f79ebf'))

    const Paged38936cdda1f4fe1bf049379c3930742 = lazy(() => import('./../pages/Paged38936cdda1f4fe1bf049379c3930742'))


export const useDemoRoutes = (props: {darkMode: boolean; setDarkMode: (mode: boolean) => void}) => {
        return useMemo(() => {
            return createHashRouter([
                {
                    path: '/',
                    element: <DemoLayout setDarkMode={props.setDarkMode} />,
                    children: [
                        {index: true, element: <Home />},
                        {path:"Other", children: [
                        {path:"Test", element:<Page0fd298258d9c40f7a9ef071527ed468f darkMode={props.darkMode} />},
                        {path:"Test2", element:<Page1088426bd70d4688a63b76faf39b89db darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<Page306f8fbb06b74c80bf3cde27e77aa5df darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Page97ac34ff16684bd79f3844e246b73a63 darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<Pagede4005e5f52a4c63955a5cb161477abe darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<Page8e651d89fde049919fb8fce40873c186 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page4ff6cff02fb4487b89380d2210902b88 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Page7b910eac14ad4e1291544b3c61625fe9 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page0833c75a33e54cbcb3128ecae24865bc darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Pageb9b66a01fb28447a99473b7a58bce344 darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagec6306969754044698f7b2ba0352fc110 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Pagebd139fb816a246a886abd8311d6d1e4a darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Page4440934040ab4ac7b5f2c84857844b0c darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Pagef3a3ace018d04866bea7ed33962e4969 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<Pagefbdcf9952d9b4d979ee313df25130285 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<Page92f2b946ca4b4515a04d82ea83c6a490 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Page7662b81cf90140daa937fdb6e41f8c56 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Page05753660f6624643b259b78a3f02d226 darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Pagec09be6e36ff54439b373fce48ec8304b darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Pagefb9a550a784f4539acf0ae6828dd4da0 darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<Page53cd17344ffc41faa0a2e7243fb84391 darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<Page62675bda9dc8487ebc025950803c1e6f darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Pageee10044a92ea46ebae3045080ec13500 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Pageb7ba3de9d3554fc5a855801d0de01995 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page71265f050227499db4b7efa715598c34 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page570629269bea4132af5984791c0ef402 darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Pageb3321aef1daa4649bb5cd994bfd9d02a darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagecd586fe8deb64b8bb2d474791296fbb5 darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<Page94e7facec51447d9879215e8f5bb70f4 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page3147ed714e444150bb0470e7d277b59b darkMode={props.darkMode} />},
                        {path:"Validation", element:<Pagedf0236061fa8449c9afcfedff3c42dfb darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<Page3e30606a46df44d5888a95e50f55e2cb darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Pagededbf4b59af146e3a192990ab9fc1843 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page6c840bfc92f840eea1f8423c43904169 darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Pagee86695ced42348d8ae5eb8d74d7cfa43 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page0c05a5baab0c433995eeee7cc96f48f8 darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page6e06cf91924448c68aef3e86529aa534 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Page9635eed95aa14f4dbd6c252645f5071a darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Page77a832cfe68346c4a7487f35c4859617 darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Pagedd83fe372aeb4cb0a76ceb77297e323a darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Pagec35b007185924b2e8fcc3e947a09826b darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page6fd22bfc498946f5a47684eaf54d94fa darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page5eb8ef3f67f241d49a453c0a98b5c8c3 darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<Page1b2b90c56ec04091a7a4a058574d6569 darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<Page77cad261ea4b4d798695d012c8e7fdac darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page3b3771bb645b4b01a5fa3aa2c87b64fb darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page3e5f6948410443349c894c75cbcfd649 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Pagee75fafb115064b7ab766381fb4e7f311 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Page0b9f0b974a5f4d67afef9dab010e8b77 darkMode={props.darkMode} />},
                        {path:"Tree", element:<Pagede86f056e18f46f898b2674327e8c2ef darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Paged1ffb0885c7c4c8dafd5598560a118b6 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page47e8c391baf34d6ead7e8947915b2fd9 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pagecf05116416c54e21947eae817277840c darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page36b6e76e53b849df87e47aef1abe056a darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pagecbf7f19283f04fe1800d126b799e69d5 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page68217802927c44acb0e4d2f14857e55c darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pagefc26759e40424847a4e0353ba38f32a3 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Page57d8d0d21525441ea445524156c49c17 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page62f951bb469e4213978c5ae22349d326 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page97a787467a3f44d493c406d63396aef6 darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Page84f1df02f7784c41883f3aee1aa39d75 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Page44d313cb7b544d0c88b7fcb3b908d66f darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Pagefcb793b6e1ff4ea0957ab4ed6cb72a9e darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Page463185a64c5f4ef5bab6f017bf31ef09 darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Pageec0a836b841f428e8d18048425f79ebf darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Paged38936cdda1f4fe1bf049379c3930742 darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

