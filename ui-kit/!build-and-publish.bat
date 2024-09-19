@echo off
setlocal

:: Run tests using PowerShell
:: call powershell -Command "Invoke-Expression 'npm run test'"
powershell -Command "npm run test --mode run; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }"

:: Check the exit code of the tests
if %ERRORLEVEL% NEQ 0 (
    echo Tests failed! Aborting build.
	pause
    exit /b 1
)

:: If tests passed, proceed with the build
echo Tests passed! Proceeding with build and publish...
call d:\projects\@krinopotam\build-tools\build-and-publish.bat

endlocal

