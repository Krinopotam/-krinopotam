@echo off
setlocal

call npm run test run

:: Check the exit code of the tests
if %ERRORLEVEL% NEQ 0 (
    echo Tests failed! Aborting build.
	pause
    exit /b %ERRORLEVEL%
)

set CURRENT_DRIVE=%~d0

:: If tests passed, proceed with the build
echo Tests passed! Proceeding with build and publish...
call %CURRENT_DRIVE%\projects\@krinopotam\build-tools\build-and-publish.bat

endlocal

