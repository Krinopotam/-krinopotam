
    import React, {lazy, useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from './demoLayout';
    import {Home} from './home';
    const Page1676d9e810a741408929f8352917c026 = lazy(() => import('./../pages/Page1676d9e810a741408929f8352917c026'))
    const Paged3a9ec5d3f2c49a681bd76d650b85664 = lazy(() => import('./../pages/Paged3a9ec5d3f2c49a681bd76d650b85664'))

    const Pageb613b0d0491746b1915bea759d781b24 = lazy(() => import('./../pages/Pageb613b0d0491746b1915bea759d781b24'))
    const Page9f5568c0d9a848cca36ad69177c784f8 = lazy(() => import('./../pages/Page9f5568c0d9a848cca36ad69177c784f8'))
    const Pagecd36fb320f184593b8ca46e4e8cf95ef = lazy(() => import('./../pages/Pagecd36fb320f184593b8ca46e4e8cf95ef'))
    const Pagea504b57621ce4611aa0a76f5044058d2 = lazy(() => import('./../pages/Pagea504b57621ce4611aa0a76f5044058d2'))
    const Page442c5c8172c049a88d34439fb514d7ad = lazy(() => import('./../pages/Page442c5c8172c049a88d34439fb514d7ad'))
    const Pagec0666b800c8541d1a807341275f38936 = lazy(() => import('./../pages/Pagec0666b800c8541d1a807341275f38936'))
    const Page1e01f4a53d4947cca16c7b1bc1ba8a23 = lazy(() => import('./../pages/Page1e01f4a53d4947cca16c7b1bc1ba8a23'))
    const Pagef1c06dba35124d4dbb34286f712997a1 = lazy(() => import('./../pages/Pagef1c06dba35124d4dbb34286f712997a1'))
    const Page227396d05be44ef0a99795b2f7edb041 = lazy(() => import('./../pages/Page227396d05be44ef0a99795b2f7edb041'))

    const Page7828be686d944a13bd1d7758f07f07c2 = lazy(() => import('./../pages/Page7828be686d944a13bd1d7758f07f07c2'))
    const Pagec9cc53183a9b495882b9c71542963c46 = lazy(() => import('./../pages/Pagec9cc53183a9b495882b9c71542963c46'))

    const Pageb419e610e2d2444aaa65e81076c47feb = lazy(() => import('./../pages/Pageb419e610e2d2444aaa65e81076c47feb'))
    const Page5ef371fd3c3d4795ba0c58a86ed2b445 = lazy(() => import('./../pages/Page5ef371fd3c3d4795ba0c58a86ed2b445'))
    const Page7e4948bd716f43b49bc076318d1ecd95 = lazy(() => import('./../pages/Page7e4948bd716f43b49bc076318d1ecd95'))
    const Page4e0ff37105b647b5ae7ac5b0f4877969 = lazy(() => import('./../pages/Page4e0ff37105b647b5ae7ac5b0f4877969'))
    const Page3e3ffd5d2e4d4251ba9485db12914382 = lazy(() => import('./../pages/Page3e3ffd5d2e4d4251ba9485db12914382'))
    const Page35d1813e1c294c6f872e775f3a561180 = lazy(() => import('./../pages/Page35d1813e1c294c6f872e775f3a561180'))
    const Page97b8dc6751ce44478f01eb254faf5a88 = lazy(() => import('./../pages/Page97b8dc6751ce44478f01eb254faf5a88'))
    const Page2c88c878e4bd4715aa13e0b17159873b = lazy(() => import('./../pages/Page2c88c878e4bd4715aa13e0b17159873b'))
    const Page30836e827ce843418e676a0f394c1989 = lazy(() => import('./../pages/Page30836e827ce843418e676a0f394c1989'))
    const Pagedce5627d5fbe48a09387c0a235f31c09 = lazy(() => import('./../pages/Pagedce5627d5fbe48a09387c0a235f31c09'))
    const Page0686ff9c9b594a39a4034d83c6b241e5 = lazy(() => import('./../pages/Page0686ff9c9b594a39a4034d83c6b241e5'))

    const Page27b6c215289d4f9b97c59e2163fd0990 = lazy(() => import('./../pages/Page27b6c215289d4f9b97c59e2163fd0990'))
    const Page87329f7757804ffb922b5cca00e0a97a = lazy(() => import('./../pages/Page87329f7757804ffb922b5cca00e0a97a'))
    const Page0fced2bf4b484cd3aec3dc8e33ec4278 = lazy(() => import('./../pages/Page0fced2bf4b484cd3aec3dc8e33ec4278'))
    const Page1eef14299d184ab3936695c6d9ae494e = lazy(() => import('./../pages/Page1eef14299d184ab3936695c6d9ae494e'))
    const Page7f87cbb0d1844760a2cb1aeccb2b9196 = lazy(() => import('./../pages/Page7f87cbb0d1844760a2cb1aeccb2b9196'))
    const Pagee7f9d008104c4cc987ac35d007cb5bfa = lazy(() => import('./../pages/Pagee7f9d008104c4cc987ac35d007cb5bfa'))
    const Pagee70823ea2ca14ed7a8ff891022bb8cf6 = lazy(() => import('./../pages/Pagee70823ea2ca14ed7a8ff891022bb8cf6'))

    const Page14fac9f1d3e842c4b3dd477d35b6f42a = lazy(() => import('./../pages/Page14fac9f1d3e842c4b3dd477d35b6f42a'))
    const Page7257e4bbfe1a4ff6bd2ebcfd6b4429d4 = lazy(() => import('./../pages/Page7257e4bbfe1a4ff6bd2ebcfd6b4429d4'))
    const Page1afa652365834deebb79658eccd054c3 = lazy(() => import('./../pages/Page1afa652365834deebb79658eccd054c3'))
    const Page210818a97f4d440b91c5032f93edcd95 = lazy(() => import('./../pages/Page210818a97f4d440b91c5032f93edcd95'))
    const Page2d5755f547a5406d86c1a46e4ae16bb4 = lazy(() => import('./../pages/Page2d5755f547a5406d86c1a46e4ae16bb4'))
    const Page1df12e1d70814ee0a7fdd2abf17adb7c = lazy(() => import('./../pages/Page1df12e1d70814ee0a7fdd2abf17adb7c'))
    const Pagec09fc6aa8e184edd9938f9767e6f19be = lazy(() => import('./../pages/Pagec09fc6aa8e184edd9938f9767e6f19be'))
    const Page2021c52fc00c4693b6462773cbbc6ad0 = lazy(() => import('./../pages/Page2021c52fc00c4693b6462773cbbc6ad0'))
    const Pagec4a3276515da49e49032b2ddf3d215a2 = lazy(() => import('./../pages/Pagec4a3276515da49e49032b2ddf3d215a2'))
    const Page191c02d1ad904f7ca5b165ae8588ba95 = lazy(() => import('./../pages/Page191c02d1ad904f7ca5b165ae8588ba95'))
    const Pageaa7afddcd9204c9cb0b187a8f5b70773 = lazy(() => import('./../pages/Pageaa7afddcd9204c9cb0b187a8f5b70773'))
    const Page129d12d9eedd4c999c726945c17e69e6 = lazy(() => import('./../pages/Page129d12d9eedd4c999c726945c17e69e6'))
    const Pageed51abd7442343d19a4c0603ec666788 = lazy(() => import('./../pages/Pageed51abd7442343d19a4c0603ec666788'))

    const Page9dd9f86570344822a62dcdf2c71fead0 = lazy(() => import('./../pages/Page9dd9f86570344822a62dcdf2c71fead0'))

    const Pageb5c5e33067a24ab592f8a74b3940ae45 = lazy(() => import('./../pages/Pageb5c5e33067a24ab592f8a74b3940ae45'))
    const Paged855ba3722d84203b6d41bd70bbac132 = lazy(() => import('./../pages/Paged855ba3722d84203b6d41bd70bbac132'))
    const Page42782621382f426aa03c0c28bd9c7eb3 = lazy(() => import('./../pages/Page42782621382f426aa03c0c28bd9c7eb3'))
    const Page7fe9e99762a844a78584e596ef75b0aa = lazy(() => import('./../pages/Page7fe9e99762a844a78584e596ef75b0aa'))
    const Pagead3ddfdb387243aeb4c151a47d8b80e4 = lazy(() => import('./../pages/Pagead3ddfdb387243aeb4c151a47d8b80e4'))
    const Paged2a370f818dd4edfa4e3e99edaa6e62e = lazy(() => import('./../pages/Paged2a370f818dd4edfa4e3e99edaa6e62e'))
    const Page19e6e4c9a2db453b8e73e31d43ac257a = lazy(() => import('./../pages/Page19e6e4c9a2db453b8e73e31d43ac257a'))
    const Pageac7a4a6dd6364a879e3e893359f3c2bf = lazy(() => import('./../pages/Pageac7a4a6dd6364a879e3e893359f3c2bf'))
    const Page9a593f18f8a24a63b21d28eb028c8d75 = lazy(() => import('./../pages/Page9a593f18f8a24a63b21d28eb028c8d75'))

    const Page8eec1feadab94d79b00c27770c96ef5e = lazy(() => import('./../pages/Page8eec1feadab94d79b00c27770c96ef5e'))


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
                        {path:"FormSubmitting", element:<Page1676d9e810a741408929f8352917c026 darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<Paged3a9ec5d3f2c49a681bd76d650b85664 darkMode={props.darkMode} />},

]},
                        {path:"DependedFields", element:<Pageb613b0d0491746b1915bea759d781b24 darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<Page9f5568c0d9a848cca36ad69177c784f8 darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<Pagecd36fb320f184593b8ca46e4e8cf95ef darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Pagea504b57621ce4611aa0a76f5044058d2 darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<Page442c5c8172c049a88d34439fb514d7ad darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<Pagec0666b800c8541d1a807341275f38936 darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<Page1e01f4a53d4947cca16c7b1bc1ba8a23 darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<Pagef1c06dba35124d4dbb34286f712997a1 darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<Page227396d05be44ef0a99795b2f7edb041 darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<Page7828be686d944a13bd1d7758f07f07c2 darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<Pagec9cc53183a9b495882b9c71542963c46 darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<Pageb419e610e2d2444aaa65e81076c47feb darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<Page5ef371fd3c3d4795ba0c58a86ed2b445 darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<Page7e4948bd716f43b49bc076318d1ecd95 darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<Page4e0ff37105b647b5ae7ac5b0f4877969 darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<Page3e3ffd5d2e4d4251ba9485db12914382 darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<Page35d1813e1c294c6f872e775f3a561180 darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<Page97b8dc6751ce44478f01eb254faf5a88 darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<Page2c88c878e4bd4715aa13e0b17159873b darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<Page30836e827ce843418e676a0f394c1989 darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagedce5627d5fbe48a09387c0a235f31c09 darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<Page0686ff9c9b594a39a4034d83c6b241e5 darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<Page27b6c215289d4f9b97c59e2163fd0990 darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<Page87329f7757804ffb922b5cca00e0a97a darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<Page0fced2bf4b484cd3aec3dc8e33ec4278 darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<Page1eef14299d184ab3936695c6d9ae494e darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<Page7f87cbb0d1844760a2cb1aeccb2b9196 darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<Pagee7f9d008104c4cc987ac35d007cb5bfa darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<Pagee70823ea2ca14ed7a8ff891022bb8cf6 darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<Page14fac9f1d3e842c4b3dd477d35b6f42a darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<Page7257e4bbfe1a4ff6bd2ebcfd6b4429d4 darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<Page1afa652365834deebb79658eccd054c3 darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<Page210818a97f4d440b91c5032f93edcd95 darkMode={props.darkMode} />},
                        {path:"Persistence", element:<Page2d5755f547a5406d86c1a46e4ae16bb4 darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<Page1df12e1d70814ee0a7fdd2abf17adb7c darkMode={props.darkMode} />},
                        {path:"Simple", element:<Pagec09fc6aa8e184edd9938f9767e6f19be darkMode={props.darkMode} />},
                        {path:"Tree", element:<Page2021c52fc00c4693b6462773cbbc6ad0 darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<Pagec4a3276515da49e49032b2ddf3d215a2 darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<Page191c02d1ad904f7ca5b165ae8588ba95 darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<Pageaa7afddcd9204c9cb0b187a8f5b70773 darkMode={props.darkMode} />},
                        {path:"WithForm", element:<Page129d12d9eedd4c999c726945c17e69e6 darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<Pageed51abd7442343d19a4c0603ec666788 darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<Page9dd9f86570344822a62dcdf2c71fead0 darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"TreeSelectAsync", element:<Pageb5c5e33067a24ab592f8a74b3940ae45 darkMode={props.darkMode} />},
                        {path:"TreeSelectAsyncSearch", element:<Paged855ba3722d84203b6d41bd70bbac132 darkMode={props.darkMode} />},
                        {path:"TreeSelectBasic", element:<Page42782621382f426aa03c0c28bd9c7eb3 darkMode={props.darkMode} />},
                        {path:"TreeSelectDefaultValue", element:<Page7fe9e99762a844a78584e596ef75b0aa darkMode={props.darkMode} />},
                        {path:"TreeSelectDepended", element:<Pagead3ddfdb387243aeb4c151a47d8b80e4 darkMode={props.darkMode} />},
                        {path:"TreeSelectDependedAsync", element:<Paged2a370f818dd4edfa4e3e99edaa6e62e darkMode={props.darkMode} />},
                        {path:"TreeSelectNodeRender", element:<Page19e6e4c9a2db453b8e73e31d43ac257a darkMode={props.darkMode} />},
                        {path:"TreeSelectWithForm", element:<Pageac7a4a6dd6364a879e3e893359f3c2bf darkMode={props.darkMode} />},
                        {path:"TreeSelectWithFormAsync", element:<Page9a593f18f8a24a63b21d28eb028c8d75 darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<Page8eec1feadab94d79b00c27770c96ef5e darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

