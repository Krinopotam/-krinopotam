/** Check if is debug mode */
export const IsDebugMode = () => {
    // @ts-ignore
    return import.meta.env.MODE === "development" || import.meta.env.MODE === "demo";
};
