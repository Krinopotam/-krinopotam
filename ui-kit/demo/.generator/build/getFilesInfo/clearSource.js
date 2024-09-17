export const clearSource = (source) => {
    source = source.replaceAll(/\s*\{\/\*Description Start\*\/}[\S\s]*?\{\/\*Description End\*\/}/gi, ''); //remove {/*Description Start/*} blocks
    source = source.replaceAll(/\s*\/\*Description Start\*\/[\S\s]*?\/\*Description End\*\//gi, ''); //remove /*Description End*/ blocks
    source = source.replaceAll(/\/\/ noinspection DuplicatedCode/gi, ''); //remove // noinspection DuplicatedCode
    source = source.replaceAll(/['"]@src\//gi, '@krinopotam/ui-kit/'); //replace @src to @krinopotam/ui-kit
    const sourceLines = source.split(/\r?\n/);
    let newSource = '';
    for (const line of sourceLines) {
        if (line.trim().length === 0)
            continue;
        newSource = newSource + '\n' + line;
    }
    return newSource + '\n';
};
