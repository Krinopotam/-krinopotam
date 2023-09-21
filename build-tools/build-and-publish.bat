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

if exist src\dynamicForm\css (
	@echo src\dynamicForm\css
	robocopy src\dynamicForm\css dist\dynamicForm\css /E /NJH /NJS /NFL /NDL
)

if exist src\messageBox\css (
	@echo src\messageBox\css
	robocopy src\messageBox\css dist\messageBox\css /E /NJH /NJS /NFL /NDL
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