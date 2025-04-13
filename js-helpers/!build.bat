@echo off
setlocal

call npm run test run

:: Check the exit code of the tests
if %ERRORLEVEL% NEQ 0 (
    echo Tests failed! Aborting build.
	pause
    exit /b %ERRORLEVEL%
)

:: If tests passed, proceed with the build
echo Tests passed! Proceeding with build...
call npm run build

pause
endlocal
