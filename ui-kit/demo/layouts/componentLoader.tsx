
import React, { lazy, Suspense } from 'react';

const componentsMap: Record<string, React.LazyExoticComponent<React.ComponentType<{darkMode:boolean}>>> = {
    'Pagef6b8a16b658d4e54beda059b211dd3d5': lazy(() => import('./../pages/Pagef6b8a16b658d4e54beda059b211dd3d5')),
    'Page0ee03373dd574c9d99e23ec172f766bb': lazy(() => import('./../pages/Page0ee03373dd574c9d99e23ec172f766bb')),

    'Page97a3ec084efe408ca2137536d535e889': lazy(() => import('./../pages/Page97a3ec084efe408ca2137536d535e889')),
    'Pagea432b821eb904c6f9cdc1df2fd14ec4c': lazy(() => import('./../pages/Pagea432b821eb904c6f9cdc1df2fd14ec4c')),

    'Paged8398a97f6da4eaa823c8d73490cf073': lazy(() => import('./../pages/Paged8398a97f6da4eaa823c8d73490cf073')),
    'Pagebde6cd705f3b40438c11774f6a70b61d': lazy(() => import('./../pages/Pagebde6cd705f3b40438c11774f6a70b61d')),
    'Pageba207705e7a240189256743c754eb774': lazy(() => import('./../pages/Pageba207705e7a240189256743c754eb774')),
    'Page1b1719b4822b468dbe9a15a1e148c63f': lazy(() => import('./../pages/Page1b1719b4822b468dbe9a15a1e148c63f')),
    'Pagedf71f1f5e19243408776b859ef924363': lazy(() => import('./../pages/Pagedf71f1f5e19243408776b859ef924363')),
    'Pagedc70ef94492d4bacb1dc7bb826cdda09': lazy(() => import('./../pages/Pagedc70ef94492d4bacb1dc7bb826cdda09')),
    'Pagee7571f063b2f4fb89db8ce0e0f943af1': lazy(() => import('./../pages/Pagee7571f063b2f4fb89db8ce0e0f943af1')),
    'Page0d2383f4759d4099bf2f7d0d9d54e8c0': lazy(() => import('./../pages/Page0d2383f4759d4099bf2f7d0d9d54e8c0')),
    'Page259093d129b449d2b6d22c111e593578': lazy(() => import('./../pages/Page259093d129b449d2b6d22c111e593578')),
    'Pageb4e2a43fcd124410b3cc0a91800946d7': lazy(() => import('./../pages/Pageb4e2a43fcd124410b3cc0a91800946d7')),

    'Pagee8143a6bb93a48b9a0ee30009dab05d0': lazy(() => import('./../pages/Pagee8143a6bb93a48b9a0ee30009dab05d0')),
    'Pagea8f78ea1e65547f4b6810dab1e61702f': lazy(() => import('./../pages/Pagea8f78ea1e65547f4b6810dab1e61702f')),
    'Page83c3d5bf7aa24675b0b6ef62106cc611': lazy(() => import('./../pages/Page83c3d5bf7aa24675b0b6ef62106cc611')),

    'Pagea7b1c2d23e4945bea6466837f14600e9': lazy(() => import('./../pages/Pagea7b1c2d23e4945bea6466837f14600e9')),
    'Pageebc3a113906f4db8b090cfadc092d393': lazy(() => import('./../pages/Pageebc3a113906f4db8b090cfadc092d393')),
    'Page54ec99c3097c4af29bc5d5acfe350536': lazy(() => import('./../pages/Page54ec99c3097c4af29bc5d5acfe350536')),
    'Page4b39ae337496487297e9faa0d76ac092': lazy(() => import('./../pages/Page4b39ae337496487297e9faa0d76ac092')),
    'Page6fe456226a6c4e169ed8cc2082888a3a': lazy(() => import('./../pages/Page6fe456226a6c4e169ed8cc2082888a3a')),
    'Page7c25addb8f7247a888b1802b6b607ac8': lazy(() => import('./../pages/Page7c25addb8f7247a888b1802b6b607ac8')),
    'Pagec6a27a15e600422996580c9a675f0402': lazy(() => import('./../pages/Pagec6a27a15e600422996580c9a675f0402')),
    'Page1673bdf6d548491a97a1b47e19ee2522': lazy(() => import('./../pages/Page1673bdf6d548491a97a1b47e19ee2522')),
    'Page54c9997ee66548f0a4735f6f8b2efcf4': lazy(() => import('./../pages/Page54c9997ee66548f0a4735f6f8b2efcf4')),
    'Page5255393a2c254b1aa5ff196600ed7c7a': lazy(() => import('./../pages/Page5255393a2c254b1aa5ff196600ed7c7a')),
    'Page5832c541fd744bc693ed895c3666f295': lazy(() => import('./../pages/Page5832c541fd744bc693ed895c3666f295')),
    'Page6af7e372c3db4b27ade2c7618c9deeef': lazy(() => import('./../pages/Page6af7e372c3db4b27ade2c7618c9deeef')),
    'Pagedbec1870aa5e4b32b5c457bea3031c18': lazy(() => import('./../pages/Pagedbec1870aa5e4b32b5c457bea3031c18')),
    'Page19df1a53ac4342a085e6ae8ea4527ab1': lazy(() => import('./../pages/Page19df1a53ac4342a085e6ae8ea4527ab1')),

    'Pageb20c01ea969546b3bfc412570f933e4c': lazy(() => import('./../pages/Pageb20c01ea969546b3bfc412570f933e4c')),

    'Page0d9a146543944d6484eaf5c631b59aef': lazy(() => import('./../pages/Page0d9a146543944d6484eaf5c631b59aef')),
    'Page0a0e6c7b02bd497e99781033383cdb5e': lazy(() => import('./../pages/Page0a0e6c7b02bd497e99781033383cdb5e')),
    'Page0033f27c91164d3c8b3b99a2b558ac9a': lazy(() => import('./../pages/Page0033f27c91164d3c8b3b99a2b558ac9a')),
    'Page1914d4b844be4456a2b2a4a59da89dff': lazy(() => import('./../pages/Page1914d4b844be4456a2b2a4a59da89dff')),
    'Page744ac444af0c43ad97320773f70e79f0': lazy(() => import('./../pages/Page744ac444af0c43ad97320773f70e79f0')),
    'Page383dd9824229425d897b5e63d450589b': lazy(() => import('./../pages/Page383dd9824229425d897b5e63d450589b')),
    'Page8ada1b1b853c47b78a1ff08c7d21d423': lazy(() => import('./../pages/Page8ada1b1b853c47b78a1ff08c7d21d423')),
    'Pagecdaccb80531a410691605d3323b02b62': lazy(() => import('./../pages/Pagecdaccb80531a410691605d3323b02b62')),

    'Pagec7e63298af4f4e02bb152efec16fba9a': lazy(() => import('./../pages/Pagec7e63298af4f4e02bb152efec16fba9a')),
    'Page1df9d5a68f474a98ad5e3196d30610d1': lazy(() => import('./../pages/Page1df9d5a68f474a98ad5e3196d30610d1')),
    'Pageb375227a3165428194fca337f334339f': lazy(() => import('./../pages/Pageb375227a3165428194fca337f334339f')),
    'Page65f989ef6873436c9b7bf8a8179333bc': lazy(() => import('./../pages/Page65f989ef6873436c9b7bf8a8179333bc')),
    'Pagea6efe5c4c1d34816a0f2d411bd70bba3': lazy(() => import('./../pages/Pagea6efe5c4c1d34816a0f2d411bd70bba3')),
    'Page2ea86d5a47064f6e8b014bcb88c6e026': lazy(() => import('./../pages/Page2ea86d5a47064f6e8b014bcb88c6e026')),
    'Page1f503e3aa62042f0b651dd397231d819': lazy(() => import('./../pages/Page1f503e3aa62042f0b651dd397231d819')),
    'Page7f7186f0b89b4a2294a3281597b57100': lazy(() => import('./../pages/Page7f7186f0b89b4a2294a3281597b57100')),
    'Page47199f32a24b4b0c93f4a3335cb5e13e': lazy(() => import('./../pages/Page47199f32a24b4b0c93f4a3335cb5e13e')),
    'Pagee26b65b6439044989de599d60ab1cc49': lazy(() => import('./../pages/Pagee26b65b6439044989de599d60ab1cc49')),
    'Page73ffe2f7c2194e8bbc4aa28bc5abb3ef': lazy(() => import('./../pages/Page73ffe2f7c2194e8bbc4aa28bc5abb3ef')),
    'Pagea3726c30e5ae48cfbb00566943800f1e': lazy(() => import('./../pages/Pagea3726c30e5ae48cfbb00566943800f1e')),
    'Pagee4b30b294b744c9885c24c8488b92a18': lazy(() => import('./../pages/Pagee4b30b294b744c9885c24c8488b92a18')),
    'Page995bd0e2164d4521a9a0f2a8e1fddae4': lazy(() => import('./../pages/Page995bd0e2164d4521a9a0f2a8e1fddae4')),
    'Page3926c1e8edc24072a71b583cb7aa3d35': lazy(() => import('./../pages/Page3926c1e8edc24072a71b583cb7aa3d35')),

    'Page19b76e57fea04ae0b39d44467a9ff014': lazy(() => import('./../pages/Page19b76e57fea04ae0b39d44467a9ff014')),

    'Page559a781c3470489b94353eea559ee677': lazy(() => import('./../pages/Page559a781c3470489b94353eea559ee677')),
    'Page3d1d015356bf4d998eb90a5e74f63929': lazy(() => import('./../pages/Page3d1d015356bf4d998eb90a5e74f63929')),
    'Page5371536da06e47d79212527be96580e7': lazy(() => import('./../pages/Page5371536da06e47d79212527be96580e7')),
    'Pagecfdc9e5339e6468a8190b1b301a44315': lazy(() => import('./../pages/Pagecfdc9e5339e6468a8190b1b301a44315')),
    'Page6f238acf73bd4ba89d85d5ab2ff4ac98': lazy(() => import('./../pages/Page6f238acf73bd4ba89d85d5ab2ff4ac98')),
    'Pagef7b2906a9cfa4660978e6f3286d41d58': lazy(() => import('./../pages/Pagef7b2906a9cfa4660978e6f3286d41d58')),
    'Page514d297042924d43900aa136f353cb2a': lazy(() => import('./../pages/Page514d297042924d43900aa136f353cb2a')),
    'Page0b08b94c68fe4ce5bc58f37970cd938d': lazy(() => import('./../pages/Page0b08b94c68fe4ce5bc58f37970cd938d')),
    'Page3284acfea72f4a59830f0031db608d44': lazy(() => import('./../pages/Page3284acfea72f4a59830f0031db608d44')),
    'Page3c343e67624d4db8ae73b005c3bbdb6a': lazy(() => import('./../pages/Page3c343e67624d4db8ae73b005c3bbdb6a')),
    'Page036dd26bb6c64afba13018c15c8863bd': lazy(() => import('./../pages/Page036dd26bb6c64afba13018c15c8863bd')),

    'Page80538504b7684f40bd125dde311e42e7': lazy(() => import('./../pages/Page80538504b7684f40bd125dde311e42e7')),

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

