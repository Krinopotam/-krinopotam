@echo:
@echo --------------- Update package.json version ---------------------
node d:\Projects\@krinopotam\build-tools\update-package-version.js package.json

@echo:
@echo --------------- Clear dist folder -------------------------------
if exist dist (
	rmdir /s /q dist
)

mkdir dist

@echo:
@echo --------------- Package building --------------------------------
call npm run build

@echo:
@echo --------------- Copy CSS folder ---------------------------------
if exist src\css (
	@echo src\css
	robocopy src\css dist\css /E /NJH /NJS /NFL /NDL
)
if exist !copyCssToDist.bat (
	call !copyCssToDist.bat
)

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