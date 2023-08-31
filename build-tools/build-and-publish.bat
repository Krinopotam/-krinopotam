@echo:
@echo --------------- Update package.json version ---------------------
node c:\nginx\www\@krinopotam\build-tools\update-package-version.js package.json

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

if exist src\dynamic-form\css (
	@echo src\dynamic-form\css
	robocopy src\dynamic-form\css dist\dynamic-form\css /E /NJH /NJS /NFL /NDL
)

if exist src\message-box\css (
	@echo src\message-box\css
	robocopy src\message-box\css dist\message-box\css /E /NJH /NJS /NFL /NDL
)

if exist src\modal\css (
	@echo src\modal\css
	robocopy src\modal\css dist\modal\css /E /NJH /NJS /NFL /NDL
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