import fs from 'fs';

export const generateComponentLoader = (folderPath: string, componentsMapStr: string,  ) => {
    // language=text
    const result = `
import React, { lazy, Suspense } from 'react';

const componentsMap: Record<string, React.LazyExoticComponent<React.ComponentType<{darkMode:boolean}>>> = {
${componentsMapStr}
};


export const ComponentLoader = ({ pageName, darkMode }: { pageName: string, darkMode: boolean}) :React.JSX.Element => {
    const Component = componentsMap[pageName];

    if (!Component) {
        return <div>Page not found</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component darkMode={darkMode} />
        </Suspense>
    );
};

`;
    fs.writeFileSync(folderPath + '/componentLoader.tsx', result, {encoding: 'utf8', flag: 'w'});
};