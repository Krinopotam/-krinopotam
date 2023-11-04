import { useEffect } from 'react';
import dispatcher from '../../formsDispatcher';
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
//# sourceMappingURL=useInitFormDispatcher.js.map