import React from 'react';

export const PageLayout = (props: {children: React.ReactNode}): React.JSX.Element => {
    return <div style={{maxWidth: 1200}}>{props.children}</div>;
};
