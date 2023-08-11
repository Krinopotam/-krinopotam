@echo:
@echo --------------- Update package.json version ---------------------
node c:\nginx\www\@krinopotam\build-tools\update-package-version.js package.json

@echo:
@echo --------------- Clear dist folder -------------------------------
rmdir /s /q dist
mkdir dist

@echo:
@echo --------------- Package building --------------------------------
call npm run build

if exist src\css (
	@echo:
	@echo --------------- Copy CSS folder ---------------------------------
	robocopy src\css dist\css /E /NJH /NJS /NFL /NDL
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