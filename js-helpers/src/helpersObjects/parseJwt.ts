/**
 * Parse JWT token
 * @param token
 * @constructor
 */
export const ParseJwt = <T extends object = { [key: string]: unknown }>(token: string | undefined): T | undefined => {
    if (!token) return undefined
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split('')
                .map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        return undefined
    }
};
