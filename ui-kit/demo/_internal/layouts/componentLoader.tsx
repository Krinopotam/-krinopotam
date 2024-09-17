
import React, { lazy, Suspense } from 'react';

const componentsMap: Record<string, React.LazyExoticComponent<React.ComponentType<{darkMode:boolean}>>> = {
    'Page821a2003c5a842c2ac8383651a88fd74': lazy(() => import('./../pages/Page821a2003c5a842c2ac8383651a88fd74')),
    'Pageb9ed05b16d2146da8221ec94536a9ce4': lazy(() => import('./../pages/Pageb9ed05b16d2146da8221ec94536a9ce4')),

    'Page547b2a62fae74db78b7bedda7a98a741': lazy(() => import('./../pages/Page547b2a62fae74db78b7bedda7a98a741')),
    'Page448c175d4ec94310a0ec6d8bbc54e652': lazy(() => import('./../pages/Page448c175d4ec94310a0ec6d8bbc54e652')),

    'Page3a2056f1015a4f70b6aafaf83d1064a2': lazy(() => import('./../pages/Page3a2056f1015a4f70b6aafaf83d1064a2')),
    'Page227c9369b4b44f548b9c98dcbf68520a': lazy(() => import('./../pages/Page227c9369b4b44f548b9c98dcbf68520a')),
    'Pagea631138f104f4445a11610c5bb722541': lazy(() => import('./../pages/Pagea631138f104f4445a11610c5bb722541')),
    'Pageef5abc85ca82402fb0052f3553784435': lazy(() => import('./../pages/Pageef5abc85ca82402fb0052f3553784435')),
    'Page7e5feca659834dbb9c225ad5b55a46ee': lazy(() => import('./../pages/Page7e5feca659834dbb9c225ad5b55a46ee')),
    'Page22c2cc0a5dbf435196cb5b1632214d5e': lazy(() => import('./../pages/Page22c2cc0a5dbf435196cb5b1632214d5e')),
    'Page35eab6d1397441d4b5967b7d388ae0c2': lazy(() => import('./../pages/Page35eab6d1397441d4b5967b7d388ae0c2')),
    'Page70c7bbfa32e74fa8ba3e8f11f50eabbf': lazy(() => import('./../pages/Page70c7bbfa32e74fa8ba3e8f11f50eabbf')),
    'Pagec0a20fdc04aa435486e3eae1a21a38ee': lazy(() => import('./../pages/Pagec0a20fdc04aa435486e3eae1a21a38ee')),
    'Page528bc86c698b4961a569891d0127b732': lazy(() => import('./../pages/Page528bc86c698b4961a569891d0127b732')),

    'Page3ad3fc3088254b6987ab6c7cab6e607d': lazy(() => import('./../pages/Page3ad3fc3088254b6987ab6c7cab6e607d')),
    'Pageab9fb652c0234be7b4e8bc13f2b36268': lazy(() => import('./../pages/Pageab9fb652c0234be7b4e8bc13f2b36268')),
    'Page08c1c424a17f45ab9ca2d27e29b69f9b': lazy(() => import('./../pages/Page08c1c424a17f45ab9ca2d27e29b69f9b')),

    'Page5f42fcfe0efe4015a431f99229227b0e': lazy(() => import('./../pages/Page5f42fcfe0efe4015a431f99229227b0e')),
    'Page6a2568b7e3be4b6c89f058d03d63c003': lazy(() => import('./../pages/Page6a2568b7e3be4b6c89f058d03d63c003')),
    'Page3bc4d4781744481c9983dd477bee4265': lazy(() => import('./../pages/Page3bc4d4781744481c9983dd477bee4265')),
    'Page5e454fc69f264110a77f05cd2118408f': lazy(() => import('./../pages/Page5e454fc69f264110a77f05cd2118408f')),
    'Pagef07f9ec9864040898325769b9a32d14d': lazy(() => import('./../pages/Pagef07f9ec9864040898325769b9a32d14d')),
    'Page6173cbc2ea2f464cab2622808595370e': lazy(() => import('./../pages/Page6173cbc2ea2f464cab2622808595370e')),
    'Pagedc5398b0a3324d7d98641ec2f42a018c': lazy(() => import('./../pages/Pagedc5398b0a3324d7d98641ec2f42a018c')),
    'Paged2c40295a6c44338895a82c15d7d3dc4': lazy(() => import('./../pages/Paged2c40295a6c44338895a82c15d7d3dc4')),
    'Page9de0918d8e88446ca387a0333e470963': lazy(() => import('./../pages/Page9de0918d8e88446ca387a0333e470963')),
    'Paged35baf9d91894f339a64337247531bb9': lazy(() => import('./../pages/Paged35baf9d91894f339a64337247531bb9')),
    'Page31fd249b6de3478eb8181d714f894503': lazy(() => import('./../pages/Page31fd249b6de3478eb8181d714f894503')),
    'Page6410382668ba4ca0b73f1b6ff57c7bb0': lazy(() => import('./../pages/Page6410382668ba4ca0b73f1b6ff57c7bb0')),
    'Page33f386ccc65a44cbb38441d424f9dd7b': lazy(() => import('./../pages/Page33f386ccc65a44cbb38441d424f9dd7b')),
    'Page72375e7eb0bb445a895b837d8cdf845c': lazy(() => import('./../pages/Page72375e7eb0bb445a895b837d8cdf845c')),

    'Pagef002c6cd68264c708bef42f28f432e72': lazy(() => import('./../pages/Pagef002c6cd68264c708bef42f28f432e72')),

    'Page2e2eff1072974ae284f22fea4667369c': lazy(() => import('./../pages/Page2e2eff1072974ae284f22fea4667369c')),
    'Page14a5dfbb77c24be7807470ee8cfbeeee': lazy(() => import('./../pages/Page14a5dfbb77c24be7807470ee8cfbeeee')),
    'Paged91e69e3ef3e400282223f3b8f049f3e': lazy(() => import('./../pages/Paged91e69e3ef3e400282223f3b8f049f3e')),
    'Page6250c8734305420c9d50d9c6a568dda1': lazy(() => import('./../pages/Page6250c8734305420c9d50d9c6a568dda1')),
    'Page7ffacfe3b51d48c39b4de514025b9256': lazy(() => import('./../pages/Page7ffacfe3b51d48c39b4de514025b9256')),
    'Page648d590370774e0db5cfc9e031b239bc': lazy(() => import('./../pages/Page648d590370774e0db5cfc9e031b239bc')),
    'Page4e77fde91095451da58b9fa49213cb3e': lazy(() => import('./../pages/Page4e77fde91095451da58b9fa49213cb3e')),
    'Pagefb6d20658f5b4bb98a04a92dc636f14c': lazy(() => import('./../pages/Pagefb6d20658f5b4bb98a04a92dc636f14c')),

    'Page81489abecce649cea476b985ac277c2c': lazy(() => import('./../pages/Page81489abecce649cea476b985ac277c2c')),
    'Page0c2e9abb18ca4895bf5c8f09a2a65e6e': lazy(() => import('./../pages/Page0c2e9abb18ca4895bf5c8f09a2a65e6e')),
    'Page0e889c5750ee42779afc673fb12a473e': lazy(() => import('./../pages/Page0e889c5750ee42779afc673fb12a473e')),
    'Page7d6cae0246394bf8b38f41ba3a3949ca': lazy(() => import('./../pages/Page7d6cae0246394bf8b38f41ba3a3949ca')),
    'Pagecc1e5da70da0495ba900bed88e5eb639': lazy(() => import('./../pages/Pagecc1e5da70da0495ba900bed88e5eb639')),
    'Pagedcd81a0ee24641788b602495fe9bc4a4': lazy(() => import('./../pages/Pagedcd81a0ee24641788b602495fe9bc4a4')),
    'Paged1403dd7954d4068aee2f49f278f406f': lazy(() => import('./../pages/Paged1403dd7954d4068aee2f49f278f406f')),
    'Page110dc5ee30c9411093d469ed27ce72ad': lazy(() => import('./../pages/Page110dc5ee30c9411093d469ed27ce72ad')),
    'Page07d6fbccb5b649d58747f571be5aeaa1': lazy(() => import('./../pages/Page07d6fbccb5b649d58747f571be5aeaa1')),
    'Page86b712f79a5a4a4ca8a5fdb483466893': lazy(() => import('./../pages/Page86b712f79a5a4a4ca8a5fdb483466893')),
    'Page203bf3c8598f4d5fa81f1e70d35953f3': lazy(() => import('./../pages/Page203bf3c8598f4d5fa81f1e70d35953f3')),
    'Page2f61c08290584c97b175893c150bed65': lazy(() => import('./../pages/Page2f61c08290584c97b175893c150bed65')),
    'Pageac306098145c4f7fb566571e331469df': lazy(() => import('./../pages/Pageac306098145c4f7fb566571e331469df')),
    'Page985d0e1d1f534ae4a0262e1f1029b570': lazy(() => import('./../pages/Page985d0e1d1f534ae4a0262e1f1029b570')),
    'Page8331b584f382417eaf83e967778742df': lazy(() => import('./../pages/Page8331b584f382417eaf83e967778742df')),

    'Page009d896be7e746f59bb550513c9d715c': lazy(() => import('./../pages/Page009d896be7e746f59bb550513c9d715c')),

    'Pagef7f80bfdb1a145689b5792931bfc3a05': lazy(() => import('./../pages/Pagef7f80bfdb1a145689b5792931bfc3a05')),
    'Pageeee47bc408b34857af6239c347d87e98': lazy(() => import('./../pages/Pageeee47bc408b34857af6239c347d87e98')),
    'Page1f40039f61554ebb9cdbbb32afea44e9': lazy(() => import('./../pages/Page1f40039f61554ebb9cdbbb32afea44e9')),
    'Pagedfaf3e2f9c4d4ab5bbd105fb30fa56bf': lazy(() => import('./../pages/Pagedfaf3e2f9c4d4ab5bbd105fb30fa56bf')),
    'Pagea7faffa7eb174e819b634483aa61ff13': lazy(() => import('./../pages/Pagea7faffa7eb174e819b634483aa61ff13')),
    'Page55caf14f99f243a4924671840a352343': lazy(() => import('./../pages/Page55caf14f99f243a4924671840a352343')),
    'Pagee17cd433deab4f24b19425b6305d7341': lazy(() => import('./../pages/Pagee17cd433deab4f24b19425b6305d7341')),
    'Page1b52456eea7f4d318ec8511fb59c5dde': lazy(() => import('./../pages/Page1b52456eea7f4d318ec8511fb59c5dde')),
    'Pagef897abdc3d1c4895a3987b7c7d7b816a': lazy(() => import('./../pages/Pagef897abdc3d1c4895a3987b7c7d7b816a')),
    'Pagedb82cc22be4f48eaaad72d348dc0c850': lazy(() => import('./../pages/Pagedb82cc22be4f48eaaad72d348dc0c850')),
    'Page0705fab0146b42679a885dd6ab5cf1a7': lazy(() => import('./../pages/Page0705fab0146b42679a885dd6ab5cf1a7')),

    'Pageccd659aedf6145b59e6893e99d6878f7': lazy(() => import('./../pages/Pageccd659aedf6145b59e6893e99d6878f7')),

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

