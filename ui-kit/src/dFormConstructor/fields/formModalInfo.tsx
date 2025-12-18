import {FormOutlined} from '@ant-design/icons';
import {IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from '@src/dFormConstructor/fields/formInfo';
import {IDFormModalProps} from '@src/dFormModal';
import React from 'react';

export class FormModalInfo extends FormInfo {
    public override readonly TITLE = 'Modal Form';
    public override readonly CODE = 'formModal';
    public override readonly CLASS = null;
    public override readonly INTERFACE_NAME = 'IDFormModalProps';
    public override readonly ICON = (<FormOutlined />);

    override getPropsInfo() {
        const baseProp = super.getPropsInfo();
        return {
            ...baseProp,
            open: 'boolean',
            title: 'string',
            height: 'string',
            maxHeight: 'string',
            minHeight: 'string',
            width: 'string',
            maxWidth: 'string',
            minWidth: 'string',
            closeFormConfirmMessage: 'string',
            modalProps: {
                modalId: 'string',
                notScrollable: 'boolean',
                resizable: 'boolean',
                isDraggable: 'boolean',
                confirmLoading: 'boolean',
                title: 'string',
                centered: 'boolean',
                maskClosable: 'boolean',
                forceRender: 'boolean',
                destroyOnClose: 'boolean',
                wrapClassName: 'string',
                maskTransitionName: 'string',
                transitionName: 'string',
                className: 'string',
                rootClassName: 'string',
                zIndex: 'number',
                mask: 'boolean',
                keyboard: 'boolean',
                prefixCls: 'string',
                focusTriggerAfterClose: 'boolean',
                loading: 'boolean',
            },
        } satisfies IComponentPropsInfo<IDFormModalProps>;
    }
}
