@echo:
@echo --------------- Clear dist folder -------------------------------
if exist dist (
	rmdir /s /q dist
)

mkdir dist

@echo:
@echo --------------- Package building --------------------------------
call npm run build

if %errorlevel% neq 0 (
  echo Package building error!
  pause
  exit /b 1
)

@echo:
@echo --------------- Update package.json version ---------------------
node d:\Projects\@krinopotam\build-tools\update-package-version.js package.json

@echo:
@echo --------------- Copy package.json to dist folder ----------------
copy /y package.json dist\package.json

@echo:
@echo --------------- Package publishing ------------------------------
cd dist
call npm publish --access public

@echo:
@echo --------------- Publishing complete -----------------------------
@echo:
pause