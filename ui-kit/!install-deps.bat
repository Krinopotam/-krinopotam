set CURRENT_DRIVE=%~d0
call %CURRENT_DRIVE%\projects\@krinopotam\build-tools\install-dependencies.bat
call npm install @krinopotam/common-hooks @krinopotam/js-helpers @krinopotam/service-types
pause