import React from 'react';
import {DForm} from '@src/dForm';
import {IUploadDraggerFieldProps, UploadDraggerField} from '@src/dForm/fields/uploadDragger';

type IComponent = IUploadDraggerFieldProps;

/** DForm Input field */
export const UploadDraggerComponent = (props: IComponent): React.JSX.Element => (
    <DForm buttons={null} fieldsProps={{field1: {...props, component: UploadDraggerField}}} />
);

export default UploadDraggerComponent;
