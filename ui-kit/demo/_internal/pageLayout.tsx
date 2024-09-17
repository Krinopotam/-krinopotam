import React from 'react';

export const PageLayout = (props: {children: React.ReactNode}): React.JSX.Element => {
    return <div>{props.children}</div>;
};
