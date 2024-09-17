
import React, { lazy, Suspense } from 'react';

const componentsMap: Record<string, React.LazyExoticComponent<React.ComponentType<{darkMode:boolean}>>> = {
    'Page20923841a53b473e86585175d47a89a7': lazy(() => import('./../pages/Page20923841a53b473e86585175d47a89a7')),
    'Pageaba7dadd5b664a18a7b169fdd1517704': lazy(() => import('./../pages/Pageaba7dadd5b664a18a7b169fdd1517704')),

    'Page2d81adaaf152441aa187aaaf779a6d60': lazy(() => import('./../pages/Page2d81adaaf152441aa187aaaf779a6d60')),
    'Page005edfcb8e314118a4a868297950c2ec': lazy(() => import('./../pages/Page005edfcb8e314118a4a868297950c2ec')),

    'Page1e9f76a83142484e84b3331441751224': lazy(() => import('./../pages/Page1e9f76a83142484e84b3331441751224')),
    'Page255f98be80f944e5a18b894b67459520': lazy(() => import('./../pages/Page255f98be80f944e5a18b894b67459520')),
    'Pageafb45be3952647658049e1b3c9163a43': lazy(() => import('./../pages/Pageafb45be3952647658049e1b3c9163a43')),
    'Page6770dc6ccf594e08ba733c5e118de932': lazy(() => import('./../pages/Page6770dc6ccf594e08ba733c5e118de932')),
    'Page92046eadc6d74989aa7e8c0555293260': lazy(() => import('./../pages/Page92046eadc6d74989aa7e8c0555293260')),
    'Page0cb4f93ac810440ab3182dae7cb0a756': lazy(() => import('./../pages/Page0cb4f93ac810440ab3182dae7cb0a756')),
    'Page4a91a0b54ef44b9694a2c4b7ba215882': lazy(() => import('./../pages/Page4a91a0b54ef44b9694a2c4b7ba215882')),
    'Pageaeca4fd63b494694ba5050a19e261a69': lazy(() => import('./../pages/Pageaeca4fd63b494694ba5050a19e261a69')),
    'Page0f4094015bb1439b86f67f60a06faf5d': lazy(() => import('./../pages/Page0f4094015bb1439b86f67f60a06faf5d')),
    'Pagee65bc2d2b4204affbff13f48f6c9730b': lazy(() => import('./../pages/Pagee65bc2d2b4204affbff13f48f6c9730b')),

    'Page9f892da5ed7c4c7188f17e063b655d6b': lazy(() => import('./../pages/Page9f892da5ed7c4c7188f17e063b655d6b')),
    'Page40c261f9c3dc410a94e1457a1163169c': lazy(() => import('./../pages/Page40c261f9c3dc410a94e1457a1163169c')),
    'Paged7284de45e244e28bba8bbf73c10b366': lazy(() => import('./../pages/Paged7284de45e244e28bba8bbf73c10b366')),

    'Page1ac19a3ea3824594bf9390de1aa0ef56': lazy(() => import('./../pages/Page1ac19a3ea3824594bf9390de1aa0ef56')),
    'Pagef9f5777c865a4c758466775586882b7a': lazy(() => import('./../pages/Pagef9f5777c865a4c758466775586882b7a')),
    'Page5c320295617248d38ecb2e55450af1d9': lazy(() => import('./../pages/Page5c320295617248d38ecb2e55450af1d9')),
    'Page2fc9ef3f6834475bb54d74080c707201': lazy(() => import('./../pages/Page2fc9ef3f6834475bb54d74080c707201')),
    'Pagea7aa0b6e991a4156bef13a15d84b4a6e': lazy(() => import('./../pages/Pagea7aa0b6e991a4156bef13a15d84b4a6e')),
    'Page1e28b52f48ef4d2891f3fc15a9c3a992': lazy(() => import('./../pages/Page1e28b52f48ef4d2891f3fc15a9c3a992')),
    'Pagefbfea61b76d94538900fe1a4d4061fa8': lazy(() => import('./../pages/Pagefbfea61b76d94538900fe1a4d4061fa8')),
    'Page21d4f17ba3b6471abb15007bed3f289b': lazy(() => import('./../pages/Page21d4f17ba3b6471abb15007bed3f289b')),
    'Page54ab819fb6de4f87b021733f3e1e07a0': lazy(() => import('./../pages/Page54ab819fb6de4f87b021733f3e1e07a0')),
    'Page1171192772d24d1fbf91bd44c8dc7a3e': lazy(() => import('./../pages/Page1171192772d24d1fbf91bd44c8dc7a3e')),
    'Pageddc60800fd7046069c792617b02ec003': lazy(() => import('./../pages/Pageddc60800fd7046069c792617b02ec003')),
    'Page733b3abede634e4189da11d7eb917bda': lazy(() => import('./../pages/Page733b3abede634e4189da11d7eb917bda')),
    'Pageb8ac928e47f245d8ad9522bd2fa94f18': lazy(() => import('./../pages/Pageb8ac928e47f245d8ad9522bd2fa94f18')),
    'Pagefa7e5f9c76ac4c0bb6b7b0f99d8f9958': lazy(() => import('./../pages/Pagefa7e5f9c76ac4c0bb6b7b0f99d8f9958')),

    'Pagef20a6363dab7418a8c610736382c4ff3': lazy(() => import('./../pages/Pagef20a6363dab7418a8c610736382c4ff3')),

    'Page43098f8e5940460ab0cbcdf0a66f9cbf': lazy(() => import('./../pages/Page43098f8e5940460ab0cbcdf0a66f9cbf')),
    'Page75212b6256ae45bf98f3dae76ea6a181': lazy(() => import('./../pages/Page75212b6256ae45bf98f3dae76ea6a181')),
    'Page5cbc9329ef844923a33997f64eb500b7': lazy(() => import('./../pages/Page5cbc9329ef844923a33997f64eb500b7')),
    'Page9616f31edc3d4e07be2f2d7f276f7a50': lazy(() => import('./../pages/Page9616f31edc3d4e07be2f2d7f276f7a50')),
    'Page2a65434284284261ac092e70bf02502f': lazy(() => import('./../pages/Page2a65434284284261ac092e70bf02502f')),
    'Page7cc613f385894baab1d8dbfc2debaf10': lazy(() => import('./../pages/Page7cc613f385894baab1d8dbfc2debaf10')),
    'Page4c38a236e5e1400983a68976a55d3609': lazy(() => import('./../pages/Page4c38a236e5e1400983a68976a55d3609')),
    'Page60b015a51d5b41d4b44f951ccfb2b625': lazy(() => import('./../pages/Page60b015a51d5b41d4b44f951ccfb2b625')),

    'Page2f33c44975c74cb2ad6568953b52f354': lazy(() => import('./../pages/Page2f33c44975c74cb2ad6568953b52f354')),
    'Page72dd30e619d94b22bb958c8be9a8801f': lazy(() => import('./../pages/Page72dd30e619d94b22bb958c8be9a8801f')),
    'Page3b61001b73554257a2f4d52aff794f73': lazy(() => import('./../pages/Page3b61001b73554257a2f4d52aff794f73')),
    'Pageb6ecc0cb0d634b1eb956a5aca24b5b77': lazy(() => import('./../pages/Pageb6ecc0cb0d634b1eb956a5aca24b5b77')),
    'Page69c7ef1676174a9f9222fc2da0490262': lazy(() => import('./../pages/Page69c7ef1676174a9f9222fc2da0490262')),
    'Page73125b06c76148ee84c77ec4467a96a8': lazy(() => import('./../pages/Page73125b06c76148ee84c77ec4467a96a8')),
    'Page01f6f5d7c05d467c9b7be64cff1e48b9': lazy(() => import('./../pages/Page01f6f5d7c05d467c9b7be64cff1e48b9')),
    'Paged980cb44a3d545b08fe691d75cd4d03c': lazy(() => import('./../pages/Paged980cb44a3d545b08fe691d75cd4d03c')),
    'Page84537c63c819427ab45189db8d42b699': lazy(() => import('./../pages/Page84537c63c819427ab45189db8d42b699')),
    'Pagef50c805e8fd64123b8d51d5a2dea2fbb': lazy(() => import('./../pages/Pagef50c805e8fd64123b8d51d5a2dea2fbb')),
    'Page938a3cdfc60a4037b6866dfa3bdc8b19': lazy(() => import('./../pages/Page938a3cdfc60a4037b6866dfa3bdc8b19')),
    'Page3d36068c29a740e9891620c32efdb2b8': lazy(() => import('./../pages/Page3d36068c29a740e9891620c32efdb2b8')),
    'Page6d58c5a44cf84773bbbb04284b5bbc3d': lazy(() => import('./../pages/Page6d58c5a44cf84773bbbb04284b5bbc3d')),
    'Page620ed894be784becbddea7c5ae0ce146': lazy(() => import('./../pages/Page620ed894be784becbddea7c5ae0ce146')),
    'Page6392b9c328fb4d34b5b695cb1019dd89': lazy(() => import('./../pages/Page6392b9c328fb4d34b5b695cb1019dd89')),

    'Pageef70422b4d154026a57d80be99e74a43': lazy(() => import('./../pages/Pageef70422b4d154026a57d80be99e74a43')),

    'Page621f60d468414d2d8571b0f5c42f3655': lazy(() => import('./../pages/Page621f60d468414d2d8571b0f5c42f3655')),
    'Page11455ae002314381be99a9f87f64c03d': lazy(() => import('./../pages/Page11455ae002314381be99a9f87f64c03d')),
    'Page33f9e4b82cf343589bd08445d41c2e70': lazy(() => import('./../pages/Page33f9e4b82cf343589bd08445d41c2e70')),
    'Page5f51474b9b4e4a9ab4f474704cdf6ec8': lazy(() => import('./../pages/Page5f51474b9b4e4a9ab4f474704cdf6ec8')),
    'Page443d6d2d86aa4df4b452c6e0dce4cbdf': lazy(() => import('./../pages/Page443d6d2d86aa4df4b452c6e0dce4cbdf')),
    'Pagefd219be5ca3940d9b3dfe28f323a9c1a': lazy(() => import('./../pages/Pagefd219be5ca3940d9b3dfe28f323a9c1a')),
    'Pagef9e2967ad1d541ba852f30bf4b57efc7': lazy(() => import('./../pages/Pagef9e2967ad1d541ba852f30bf4b57efc7')),
    'Pageb65b45514a304ed9874e8bb2c1398539': lazy(() => import('./../pages/Pageb65b45514a304ed9874e8bb2c1398539')),
    'Page7737086f3deb4bd4884574f03c151b04': lazy(() => import('./../pages/Page7737086f3deb4bd4884574f03c151b04')),
    'Page6b362d94e44642b295107f2ed3f4f5d1': lazy(() => import('./../pages/Page6b362d94e44642b295107f2ed3f4f5d1')),
    'Pagea12b5b389c6b4572aad38931930e9ff9': lazy(() => import('./../pages/Pagea12b5b389c6b4572aad38931930e9ff9')),

    'Page6f45eab33def4bf0b003321d3835d5f1': lazy(() => import('./../pages/Page6f45eab33def4bf0b003321d3835d5f1')),

};


export const ComponentLoader = ({ pageName, darkMode }: { pageName: string, darkMode: boolean}) :React.JSX.Element => {
    const Component = componentsMap[pageName];

    if (!Component) {
        return <div>Page not found</div>;
    }

    return (
        <Suspense fallback={<div>Loading........</div>}>
            <Component darkMode={darkMode} />
        </Suspense>
    );
};

