/** In Tabulator 5.5.2 we can disable loading overlay by setting dataLoader option to false, but can't disable error overlay */

export const setDisableErrorOverlayPatch = tableApi => {
    tableApi.dataLoader.alertError = alertErrorPatch;
};

export const alertErrorPatch = function () {
        if(!this.table.options.dataLoader === false){
            this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error");
        }
};
