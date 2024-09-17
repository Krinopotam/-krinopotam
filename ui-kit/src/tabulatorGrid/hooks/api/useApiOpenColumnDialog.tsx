import React from 'react';

export const useApiOpenColumnDialog = (openColumnsDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
    return (open: boolean) => {
        openColumnsDialog(open);
    };
};