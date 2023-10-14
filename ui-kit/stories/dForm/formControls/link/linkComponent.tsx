import React from 'react';
import {DForm} from '@src/dForm';
import {IDFormFieldProps} from '@src/dForm';
import {LinkField} from '@src/dForm/fields/link/linkField';

type IComponent = IDFormFieldProps;

/** DForm Link component */
export const LinkComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: LinkField}}} />;

export default LinkComponent;