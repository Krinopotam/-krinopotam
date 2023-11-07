export const setDisableErrorOverlayPatch = tableApi => {
    tableApi.dataLoader.alertError = alertErrorPatch;
};
export const alertErrorPatch = function () {
    if (!this.table.options.dataLoader === false) {
        this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error");
    }
};
