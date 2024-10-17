import {IGridApi, IGridProps, IGridRowData} from '@src/tabulatorGrid';
import {IsArray} from '@krinopotam/js-helpers/helpersObjects/isArray';
import {MessageBox, MessageBoxApi} from '@src/messageBox';
import {IsPromise} from '@krinopotam/js-helpers/helpersObjects/isPromise';
import {IError} from '@krinopotam/service-types';
import {ErrorMessage} from '@src/errorMessage';
import React from 'react';

export const useApiDeleteRows = (api: IGridApi, gridProps: IGridProps): IGridApi['deleteRows'] => {
    return (rows: IGridRowData | IGridRowData[] | undefined) => {
        if (!rows) return;
        const rowsData = IsArray(rows) ? rows : [rows];
        let messageBox: MessageBoxApi;
        const removeRows = () => {
            const deletePromise = gridProps?.onDelete?.(rowsData, api);

            if (IsPromise(deletePromise)) {
                if (!gridProps.confirmDelete) api.setIsLoading(true);
                deletePromise
                    .then(() => {
                        if (!api.getIsMounted()) return;
                        api.removeRows(rowsData);
                        if (!gridProps.confirmDelete) api.setIsLoading(false);
                        else messageBox?.destroy();
                    })
                    .catch((error: IError) => {
                        if (!api.getIsMounted()) return;
                        if (!gridProps.confirmDelete) api.setIsLoading(false);
                        else messageBox?.destroy();
                        MessageBox.alert({
                            language: gridProps.language,
                            title: api.t('error'),
                            content: <ErrorMessage error={error}/>,
                            colorType: 'danger',
                        });
                    });
                return;
            }

            api.removeRows(rowsData);
            if (messageBox) messageBox.destroy();
        };

        if (gridProps.confirmDelete) {
            MessageBox.destroyAll();
            messageBox = MessageBox.confirmWaiter({
                language: gridProps.language,
                content: gridProps.rowDeleteMessage ?? api.t('deleteSelectedRecordsQt'),
                colorType: 'danger',
                onOk: removeRows,
            });
        } else {
            removeRows();
        }
    };
};