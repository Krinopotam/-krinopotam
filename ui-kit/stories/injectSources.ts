import fs from "fs";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storiesFolder = __dirname

function run() {
    recursiveDirectoriesRun(storiesFolder)
}

/**
 *
 * @param {string} curPath
 */
function recursiveDirectoriesRun(curPath: string) {
    const fileList = fs.readdirSync(curPath, {withFileTypes: true});
    //console.log(fileList)

    for (const entity of fileList) {
        if (entity.isDirectory()) recursiveDirectoriesRun(curPath + '/' + entity.name);
        else {
            processFile(entity.name, curPath)
        }
    }
}

function processFile(fileName: string, filePath: string) {
    const extensions = "ts|js|tsx|jsx";

    const fnPattern = new RegExp('^(.*)\\.stories\\.(' + extensions + ')$', 'gi');
    if (!fileName.match(fnPattern)) return;

    const storyFileContent = fs.readFileSync(filePath + '/' + fileName, {encoding: 'utf8', flag: 'r'});

    const pattern = /\/\* AUTO-SOURCE-INJECT-START \*\/([\s\S]*)\/\* AUTO-SOURCE-INJECT-END \*\//gi

    if (!storyFileContent.match(pattern)) return;

    const parts = fileName.split('.');
    const sourceFileName = parts[0];

    const extList = extensions.split('|')
    for (const ext of extList) {
        const sourceFn = filePath + '/' + sourceFileName + '.' + ext
        if (!fs.existsSync(sourceFn)) continue

        let fileSource = fs.readFileSync(sourceFn, {encoding: 'utf8', flag: 'r'});
        fileSource = clearSource(fileSource)

        const newStoryFileContent = storyFileContent.replace(pattern, '/* AUTO-SOURCE-INJECT-START */\n' +
            '            source: {\n' +
            '                language: \'' + ext + '\',\n' +
            '                format: true,\n' +
            '                // language=text\n' +
            '                code: `' + fileSource + '                `\n' +
            '            }\n' +
            '            /* AUTO-SOURCE-INJECT-END */')

        fs.writeFileSync(filePath + '/' + fileName, newStoryFileContent, {encoding: 'utf8', flag: 'w'});
        console.log('File content "' + sourceFileName + '.' + ext + '" injected to ', filePath + '/' + fileName)
        return;
    }

    console.log("No source file for stories ", filePath + '/' + fileName)
}

function clearSource(source: string) {
    source = source.replaceAll(/\s*\{\/\*Description Start\*\/}[\S\s]*?\{\/\*Description End\*\/}/gi, ''); //remove {/*Description Start/*} blocks
    source = source.replaceAll(/\s*\/\*Description Start\*\/[\S\s]*?\/\*Description End\*\//gi, ''); //remove /*Description Start*/ blocks
    source = source.replaceAll(/\/\/ noinspection DuplicatedCode/gi, ''); //remove // noinspection DuplicatedCode
    source = source.replaceAll(/['"]@src\//gi, '@krinopotam/ui-kit/'); //remove // noinspection DuplicatedCode

    const sourceLines = source.split(/\r?\n/);
    let newSource = ""
    for (const line of sourceLines) {
        if (line.trim().length === 0) continue
        newSource = newSource + '\n' + '                    ' + line
    }

    return newSource + '\n'
}

run();
