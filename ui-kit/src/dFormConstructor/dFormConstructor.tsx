import React, {useState} from 'react';
import {FieldsTree} from '@src/dFormConstructor/renders/fieldsTree/fieldsTree';
import {FormPreview} from '@src/dFormConstructor/renders/formPreview/formPreview';

export const DFormConstructor = (): React.JSX.Element => {
    const [formProps, setFormProps] = useState({});
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <FormPreview formProps={formProps} />
            <div style={{maxWidth: 300, minHeight: 500, border: 'solid 1px grey'}}>
                <FieldsTree setFormProps={setFormProps} />
            </div>
        </div>
    );
};
