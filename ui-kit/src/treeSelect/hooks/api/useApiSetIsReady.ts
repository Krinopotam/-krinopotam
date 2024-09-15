export const useApiSetIsReady = (setIsReady: (value: boolean) => void) => {
    return (isReady: boolean) => {
        setIsReady(isReady);
    };
};
