import React, { createContext } from 'react';
import dispatcher from './formsDispatcher';
export const FormsDispatcherContext = createContext(undefined);
export const ModalFormsProvider = ({ children }) => {
    return React.createElement(FormsDispatcherContext.Provider, { value: dispatcher }, children);
};
//# sourceMappingURL=modalFormdProvider.js.map