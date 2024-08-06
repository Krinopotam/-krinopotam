/** Check if browser is mobile */
export const isMobileBrowser=()=> {
    // @ts-ignore
    // noinspection JSDeprecatedSymbols
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const tokens = [
        'android',
        'webos',
        'iphone',
        'ipad',
        'ipod',
        'blackberry',
        'ieMobile',
        'opera mini',
        'avantgo',
        'bada',
        'blazer',
        'elaine',
        'fennec',
        'hipTop',
        'iris',
        'kindle',
        'lge',
        'maemo',
        'midp',
        'mmp',
        'symbian',
        'pocket',
        'webOs',
        'nexus',
        'compal'
    ];

    const mobileRegex = new RegExp(tokens.join('|'), 'i');
    return mobileRegex.test(userAgent);
}

/** Check if is debug mode */
export const IsDebugMode = () => {
    // @ts-ignore
    return import.meta.env.MODE === "development" || import.meta.env.MODE === "demo";
};