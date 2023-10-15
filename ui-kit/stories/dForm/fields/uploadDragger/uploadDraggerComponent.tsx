import React from 'react';
import {DForm} from '@src/dForm';
import {IUploadDraggerFieldProps, UploadDraggerField} from '@src/dForm/fields/fileDrop/uploadDraggerField';

type IComponent = IUploadDraggerFieldProps;

/** DForm Input component */
export const UploadDraggerComponent = (props: IComponent): React.JSX.Element => (
    <DForm buttons={null} fieldsProps={{field1: {...props, component: UploadDraggerField}}} />
);

export default UploadDraggerComponent;
