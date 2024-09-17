
    import React, {useMemo} from 'react';
    import {createHashRouter} from 'react-router-dom';
    import {DemoLayout} from '../demoLayout';
    import {Home} from '../home';
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
                        {path:"Test", element:<ComponentLoader pageName="Page821a2003c5a842c2ac8383651a88fd74" darkMode={props.darkMode} />},
                        {path:"Test2", element:<ComponentLoader pageName="Pageb9ed05b16d2146da8221ec94536a9ce4" darkMode={props.darkMode} />},

]},
                        {path:"dForm", children: [
                        {path:"validation", children: [
                        {path:"FormSubmitting", element:<ComponentLoader pageName="Page547b2a62fae74db78b7bedda7a98a741" darkMode={props.darkMode} />},
                        {path:"FormValidation", element:<ComponentLoader pageName="Page448c175d4ec94310a0ec6d8bbc54e652" darkMode={props.darkMode} />},

]},
                        {path:"ChangePropsViaApi", element:<ComponentLoader pageName="Page3a2056f1015a4f70b6aafaf83d1064a2" darkMode={props.darkMode} />},
                        {path:"DependedFields", element:<ComponentLoader pageName="Page227c9369b4b44f548b9c98dcbf68520a" darkMode={props.darkMode} />},
                        {path:"FormBetweenFields", element:<ComponentLoader pageName="Pagea631138f104f4445a11610c5bb722541" darkMode={props.darkMode} />},
                        {path:"FormDependedField", element:<ComponentLoader pageName="Pageef5abc85ca82402fb0052f3553784435" darkMode={props.darkMode} />},
                        {path:"FormFetching", element:<ComponentLoader pageName="Page7e5feca659834dbb9c225ad5b55a46ee" darkMode={props.darkMode} />},
                        {path:"FormSimple", element:<ComponentLoader pageName="Page22c2cc0a5dbf435196cb5b1632214d5e" darkMode={props.darkMode} />},
                        {path:"FormSimpleHorizontal", element:<ComponentLoader pageName="Page35eab6d1397441d4b5967b7d388ae0c2" darkMode={props.darkMode} />},
                        {path:"FormWithTemplatedFields", element:<ComponentLoader pageName="Page70c7bbfa32e74fa8ba3e8f11f50eabbf" darkMode={props.darkMode} />},
                        {path:"NewFormSimple", element:<ComponentLoader pageName="Pagec0a20fdc04aa435486e3eae1a21a38ee" darkMode={props.darkMode} />},
                        {path:"NewFormWithTabs", element:<ComponentLoader pageName="Page528bc86c698b4961a569891d0127b732" darkMode={props.darkMode} />},

]},
                        {path:"dFormModal", children: [
                        {path:"async", children: [
                        {path:"FormFetching", element:<ComponentLoader pageName="Page3ad3fc3088254b6987ab6c7cab6e607d" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncGridWithSelectionForm", element:<ComponentLoader pageName="Pageab9fb652c0234be7b4e8bc13f2b36268" darkMode={props.darkMode} />},
                        {path:"FormWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Page08c1c424a17f45ab9ca2d27e29b69f9b" darkMode={props.darkMode} />},

]},
                        {path:"AutoHeightTabulator", element:<ComponentLoader pageName="Page5f42fcfe0efe4015a431f99229227b0e" darkMode={props.darkMode} />},
                        {path:"AutoHeightTabulatorInTab", element:<ComponentLoader pageName="Page6a2568b7e3be4b6c89f058d03d63c003" darkMode={props.darkMode} />},
                        {path:"FormWithGrid", element:<ComponentLoader pageName="Page3bc4d4781744481c9983dd477bee4265" darkMode={props.darkMode} />},
                        {path:"FormWithGridChangeDataSet", element:<ComponentLoader pageName="Page5e454fc69f264110a77f05cd2118408f" darkMode={props.darkMode} />},
                        {path:"FormWithGridInTabs", element:<ComponentLoader pageName="Pagef07f9ec9864040898325769b9a32d14d" darkMode={props.darkMode} />},
                        {path:"FormWithGridWithSelectionForm", element:<ComponentLoader pageName="Page6173cbc2ea2f464cab2622808595370e" darkMode={props.darkMode} />},
                        {path:"FormWithTabs", element:<ComponentLoader pageName="Pagedc5398b0a3324d7d98641ec2f42a018c" darkMode={props.darkMode} />},
                        {path:"ModalFormSubmitting", element:<ComponentLoader pageName="Paged2c40295a6c44338895a82c15d7d3dc4" darkMode={props.darkMode} />},
                        {path:"ModalFormWithGroups", element:<ComponentLoader pageName="Page9de0918d8e88446ca387a0333e470963" darkMode={props.darkMode} />},
                        {path:"SeveralTabs", element:<ComponentLoader pageName="Paged35baf9d91894f339a64337247531bb9" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Page31fd249b6de3478eb8181d714f894503" darkMode={props.darkMode} />},
                        {path:"SimpleNotDraggable", element:<ComponentLoader pageName="Page6410382668ba4ca0b73f1b6ff57c7bb0" darkMode={props.darkMode} />},
                        {path:"TabsWithSimpleInlineGroups", element:<ComponentLoader pageName="Page33f386ccc65a44cbb38441d424f9dd7b" darkMode={props.darkMode} />},
                        {path:"Validation", element:<ComponentLoader pageName="Page72375e7eb0bb445a895b837d8cdf845c" darkMode={props.darkMode} />},

]},
                        {path:"modal", children: [
                        {path:"Simple", element:<ComponentLoader pageName="Pagef002c6cd68264c708bef42f28f432e72" darkMode={props.darkMode} />},

]},
                        {path:"tabulatorGrid", children: [
                        {path:"async", children: [
                        {path:"AsyncLoading", element:<ComponentLoader pageName="Page2e2eff1072974ae284f22fea4667369c" darkMode={props.darkMode} />},
                        {path:"AsyncManualFetch", element:<ComponentLoader pageName="Page14a5dfbb77c24be7807470ee8cfbeeee" darkMode={props.darkMode} />},
                        {path:"AsyncPages", element:<ComponentLoader pageName="Paged91e69e3ef3e400282223f3b8f049f3e" darkMode={props.darkMode} />},
                        {path:"AsyncPagesManualFetch", element:<ComponentLoader pageName="Page6250c8734305420c9d50d9c6a568dda1" darkMode={props.darkMode} />},
                        {path:"AsyncProgressive", element:<ComponentLoader pageName="Page7ffacfe3b51d48c39b4de514025b9256" darkMode={props.darkMode} />},
                        {path:"AsyncWithForm", element:<ComponentLoader pageName="Page648d590370774e0db5cfc9e031b239bc" darkMode={props.darkMode} />},
                        {path:"AsyncWithSelectionForm", element:<ComponentLoader pageName="Page4e77fde91095451da58b9fa49213cb3e" darkMode={props.darkMode} />},
                        {path:"EditableGridWithAsyncTabulatorGrid", element:<ComponentLoader pageName="Pagefb6d20658f5b4bb98a04a92dc636f14c" darkMode={props.darkMode} />},

]},
                        {path:"CellFormat", element:<ComponentLoader pageName="Page81489abecce649cea476b985ac277c2c" darkMode={props.darkMode} />},
                        {path:"ChangeDataSet", element:<ComponentLoader pageName="Page0c2e9abb18ca4895bf5c8f09a2a65e6e" darkMode={props.darkMode} />},
                        {path:"ColumnsGroups", element:<ComponentLoader pageName="Page0e889c5750ee42779afc673fb12a473e" darkMode={props.darkMode} />},
                        {path:"DataRangeHeaderFilterExample", element:<ComponentLoader pageName="Page7d6cae0246394bf8b38f41ba3a3949ca" darkMode={props.darkMode} />},
                        {path:"FixedColumns", element:<ComponentLoader pageName="Pagecc1e5da70da0495ba900bed88e5eb639" darkMode={props.darkMode} />},
                        {path:"MultiSelect", element:<ComponentLoader pageName="Pagedcd81a0ee24641788b602495fe9bc4a4" darkMode={props.darkMode} />},
                        {path:"Persistence", element:<ComponentLoader pageName="Paged1403dd7954d4068aee2f49f278f406f" darkMode={props.darkMode} />},
                        {path:"SelectionMode", element:<ComponentLoader pageName="Page110dc5ee30c9411093d469ed27ce72ad" darkMode={props.darkMode} />},
                        {path:"Simple", element:<ComponentLoader pageName="Page07d6fbccb5b649d58747f571be5aeaa1" darkMode={props.darkMode} />},
                        {path:"Tree", element:<ComponentLoader pageName="Page86b712f79a5a4a4ca8a5fdb483466893" darkMode={props.darkMode} />},
                        {path:"TreeCellFormat", element:<ComponentLoader pageName="Page203bf3c8598f4d5fa81f1e70d35953f3" darkMode={props.darkMode} />},
                        {path:"TreeWithForm", element:<ComponentLoader pageName="Page2f61c08290584c97b175893c150bed65" darkMode={props.darkMode} />},
                        {path:"WithComplexForm", element:<ComponentLoader pageName="Pageac306098145c4f7fb566571e331469df" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Page985d0e1d1f534ae4a0262e1f1029b570" darkMode={props.darkMode} />},
                        {path:"WithSelectionForm", element:<ComponentLoader pageName="Page8331b584f382417eaf83e967778742df" darkMode={props.darkMode} />},

]},
                        {path:"tools", children: [
                        {path:"PropsToArgs", element:<ComponentLoader pageName="Page009d896be7e746f59bb550513c9d715c" darkMode={props.darkMode} />},

]},
                        {path:"treeSelect", children: [
                        {path:"Async", element:<ComponentLoader pageName="Pagef7f80bfdb1a145689b5792931bfc3a05" darkMode={props.darkMode} />},
                        {path:"AsyncSearch", element:<ComponentLoader pageName="Pageeee47bc408b34857af6239c347d87e98" darkMode={props.darkMode} />},
                        {path:"Basic", element:<ComponentLoader pageName="Page1f40039f61554ebb9cdbbb32afea44e9" darkMode={props.darkMode} />},
                        {path:"DefaultValue", element:<ComponentLoader pageName="Pagedfaf3e2f9c4d4ab5bbd105fb30fa56bf" darkMode={props.darkMode} />},
                        {path:"Depended", element:<ComponentLoader pageName="Pagea7faffa7eb174e819b634483aa61ff13" darkMode={props.darkMode} />},
                        {path:"DependedAsync", element:<ComponentLoader pageName="Page55caf14f99f243a4924671840a352343" darkMode={props.darkMode} />},
                        {path:"NodeRender", element:<ComponentLoader pageName="Pagee17cd433deab4f24b19425b6305d7341" darkMode={props.darkMode} />},
                        {path:"ReadOnly", element:<ComponentLoader pageName="Page1b52456eea7f4d318ec8511fb59c5dde" darkMode={props.darkMode} />},
                        {path:"WithForm", element:<ComponentLoader pageName="Pagef897abdc3d1c4895a3987b7c7d7b816a" darkMode={props.darkMode} />},
                        {path:"WithFormAndNodeRenderers", element:<ComponentLoader pageName="Pagedb82cc22be4f48eaaad72d348dc0c850" darkMode={props.darkMode} />},
                        {path:"WithFormAsync", element:<ComponentLoader pageName="Page0705fab0146b42679a885dd6ab5cf1a7" darkMode={props.darkMode} />},

]},
                        {path:"PlayGround", element:<ComponentLoader pageName="Pageccd659aedf6145b59e6893e99d6878f7" darkMode={props.darkMode} />},

                        {path: '*', element: <Home />},
                    ],
                },
            ]);
        }, [props.darkMode, props.setDarkMode]);
    };

