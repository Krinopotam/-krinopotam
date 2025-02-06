import React from 'react';
import {FieldsTree} from '@src/dFormConstructor/renders/fieldsTree';

export const DFormConstructor = (): React.JSX.Element => {
    return <div style={{maxWidth:300, minHeight:500, border:'solid 1px grey'}}><FieldsTree /></div>;
};
