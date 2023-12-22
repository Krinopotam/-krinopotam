@echo:
if exist src\dForm\css (
	@echo src\dForm\css
	robocopy src\dForm\css dist\dForm\css /E /NJH /NJS /NFL /NDL
)

if exist src\messageBox\css (
	@echo src\messageBox\css
	robocopy src\messageBox\css dist\messageBox\css /E /NJH /NJS /NFL /NDL
)

if exist src\modal\css (
	@echo src\modal\css
	robocopy src\modal\css dist\modal\css /E /NJH /NJS /NFL /NDL
)

if exist src\loadingContainer\css (
	@echo src\loadingContainer\css
	robocopy src\loadingContainer\css dist\loadingContainer\css /E /NJH /NJS /NFL /NDL
)

if exist src\treeSelect\css (
	@echo src\treeSelect\css
	robocopy src\treeSelect\css dist\treeSelect\css /E /NJH /NJS /NFL /NDL
)

