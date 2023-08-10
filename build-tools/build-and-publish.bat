@echo:
@echo --------------- Update package.json version ---------------------
node c:\nginx\www\@krinopotam\build-tools\update-package-version.js package.json

@echo:
@echo --------------- Copy package.json to dist folder ----------------
copy package.json dist\package.json

@echo:
@echo --------------- Package building --------------------------------
call npm run build

@echo:
@echo --------------- Package publishing ------------------------------
cd dist
call npm publish --access public

@echo:
@echo --------------- Publishing complete -----------------------------
@echo:
pause