export const IsDebugMode = () => {
    return import.meta.env.MODE === "development" || import.meta.env.MODE === "demo" || import.meta.env.MODE === "test";
};