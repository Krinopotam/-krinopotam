export const useApiSetIsAllFetched = (setIsAllFetched: (value: boolean) => void) => {
    return (isAllFetched: boolean) => {
        setIsAllFetched(isAllFetched);
    };
};
