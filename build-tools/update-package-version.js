// noinspection ExceptionCaughtLocallyJS

/**
 * @UpdatePackageVersion
 * @version v1.0.0.1
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */

const fs = require('fs');

let filePath = process.argv[2];
let updateVersion = function () {
    try {
        if (!fs.existsSync(filePath)) throw new Error("File " + filePath +" does not found")

        let fileContent = fs.readFileSync(filePath, 'utf8').toString();
        if (!fileContent) throw new Error("File " + filePath +" content is empty");

        let matcher = /("?version"?:\s?")(\d+\.\d+\.\d+)/i;

        let matched = fileContent.match(matcher);
        if (!matched?.[0] || !matched?.[2]) throw new Error("Not found version record") ;

        let partsStr = matched[2].split('.', 3);
        let parts = [];
        parts[0] = +partsStr[0];
        parts[1] = +partsStr[1];
        parts[2] = +partsStr[2] + 1;

        let nextVersion = parts.join('.');

        fileContent = fileContent.replace(matcher, '$1' + nextVersion);

        fs.writeFileSync(filePath, fileContent, 'utf8');
        console.log("File " + filePath + " updated to version " + nextVersion)
    }
    catch (e){
        console.log(e.message)
    }

};

updateVersion()
