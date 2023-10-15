import React from 'react';
import {DForm} from '@src/dForm';
import {ISwitchFieldProps, SwitchField} from '@src/dForm/fields/switch/switchField';

type IComponent = ISwitchFieldProps;

/** DForm Switch component */
export const SwitchComponent = (props: IComponent): React.JSX.Element => <DForm buttons={null} fieldsProps={{field1: {...props, component: SwitchField}}} />;
export default SwitchComponent;
