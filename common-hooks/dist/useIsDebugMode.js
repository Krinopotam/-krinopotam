export const IsDebugMode = () => {
    // @ts-ignore
    return import.meta.env.MODE === "development" || import.meta.env.MODE === "demo";
};
export const useIsDebugMode = () => {
    return IsDebugMode();
};
