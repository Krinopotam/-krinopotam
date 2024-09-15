export const useApiSetIsFetching = (setIsFetching: (value: boolean) => void) => {
    return (isFetching: boolean) => {
        setIsFetching(isFetching);
    };
};
