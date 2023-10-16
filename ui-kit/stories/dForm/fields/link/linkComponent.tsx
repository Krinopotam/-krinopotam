import React from 'react';
import {DForm} from '@src/dForm';
import {ILinkFieldProps, LinkField} from '@src/dForm/fields/link/linkField';

type IComponent = ILinkFieldProps;

/** DForm Link field */
export const LinkComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: LinkField}}} />;

export default LinkComponent;