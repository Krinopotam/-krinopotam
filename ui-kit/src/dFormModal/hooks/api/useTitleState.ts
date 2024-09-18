import React, { useEffect, useMemo, useState} from 'react';
import {IDFormModalApi, IDFormModalProps} from '@src/dFormModal/types/dFormModalTypes';

export const useTitleState = (props: IDFormModalProps, api: IDFormModalApi): [React.ReactNode, React.Dispatch<React.SetStateAction<React.ReactNode>>] => {
    const curTitle = useGetDefaultTitle(props, api);
    const [title, setTitle] = useState(curTitle);
    useEffect(() => {
        setTitle(curTitle);
    }, [curTitle]);

    return [title, setTitle];
};

const useGetDefaultTitle = (props: IDFormModalProps, api: IDFormModalApi) => {
    return useMemo(():IDFormModalProps['title'] => {
        const formMode = props.formMode ?? 'create';
        const title = props.title;
        if (title) return title;
        if (formMode === 'view') return api.t('viewing');
        if (formMode === 'create') return api.t('creating');
        if (formMode === 'clone') return api.t('cloning');
        if (formMode === 'update') return api.t('editing');
        return '&nbsp;';
    }, [api, props.formMode, props.title]);
};