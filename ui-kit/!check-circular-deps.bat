set CURRENT_DRIVE=%~d0
call madge --circular --extensions js,jsx,ts,tsx  %CURRENT_DRIVE%\Projects\@krinopotam\ui-kit\src
pause