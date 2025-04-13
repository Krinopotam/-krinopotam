set CURRENT_DRIVE=%~d0

call npm update

call %CURRENT_DRIVE%\Projects\@krinopotam\build-tools\build-and-publish.bat