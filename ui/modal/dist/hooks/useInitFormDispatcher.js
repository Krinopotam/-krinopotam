import { useEffect } from 'react';
import dispatcher from '@krinopotam/ui-forms-dispatcher';
export const useInitFormDispatcher = (formId, isFormOpen) => {
    useEffect(() => {
        if (isFormOpen)
            dispatcher.pushToStack(formId);
        else
            dispatcher.removeFromStack(formId);
        return () => {
            dispatcher.removeFromStack(formId);
        };
    }, [isFormOpen, formId]);
};
