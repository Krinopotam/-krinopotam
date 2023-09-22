rem normal mode
rem call node ./configGenerator/configGenerator.js true
rem call npx ts-node --project ../../tsconfig.json ./configGenerator/configGenerator.ts true
call npx tsx ./configGenerator/configGenerator.ts
pause