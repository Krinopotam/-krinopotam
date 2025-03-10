import {TableOutlined} from '@ant-design/icons';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid';

export class TabulatorGridInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Tabulator Grid';
    public override readonly CODE = 'tabulatorGrid';
    public override readonly CLASS = TabulatorGridField;
    public override readonly INTERFACE_NAME = 'ITabulatorGridFieldProps';
    public override readonly ICON = (<TableOutlined />);

    constructor(params?: {id: string; label?: React.ReactNode | string}) {
        super(params);
        this.props['columns'] = [
            {field: 'num', title: '№', formatter: 'rownum', accessor: 'rownum',headerSort: false, vertAlign: 'middle'},
        ];
    }

    override getPropsInfo() {
        const {placeholder, id, label, ...baseProps} = super.getPropsInfo();
        return {
            id,
            label,

            fetchInCreateMode: 'boolean',
            gridMode: ['local', 'remote'],
            headerLabel: 'string',
            buttonsSize: ['large', 'middle', 'small'],
            buttonsIconsOnly: 'boolean',
            buttonsPosition: ['center', 'left', 'right'],
            systemButtonsPosition: ['center', 'left', 'right'],
            appendSelection: 'boolean',
            noHover: 'boolean',
            rowDeleteMessage: 'string',
            confirmDelete: 'boolean',
            placeholder: 'string',
            allowTextSelection: 'boolean',
            //TODO: implement all props
            ...baseProps,
        } satisfies IComponentPropsInfo<ITabulatorGridFieldProps>;
    }
}
