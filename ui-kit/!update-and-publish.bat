set CURRENT_DRIVE=%~d0
call npm install @krinopotam/common-hooks @krinopotam/js-helpers @krinopotam/service-types
call %CURRENT_DRIVE%\projects\@krinopotam\build-tools\update-and-publish.bat