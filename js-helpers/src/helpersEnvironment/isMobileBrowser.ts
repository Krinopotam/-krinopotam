/** Check if browser is mobile */
export const isMobileBrowser = () => {
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