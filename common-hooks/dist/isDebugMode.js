export const IsDebugMode = () => {
    return import.meta.env.MODE === "development" || import.meta.env.MODE === "demo";
};
export const useIsDebugMode = () => {
    return IsDebugMode();
};
