export const useApiSetMinSymbols = (setMinSymbols: (value: number) => void) => {
    return (isAllFetched: number) => {
        setMinSymbols(isAllFetched);
    };
};
