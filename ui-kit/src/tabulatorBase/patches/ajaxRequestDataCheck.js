/** In Tabulator 5.5.2 ajax request will be executed only if the dataSet is empty and the url for the request is specified,
 * or if the dataSet contains an url string instead of data
 * In this case, the ajaxRequestFunc property is ignored.
 * We need the request to be executed even if the ajaxRequestFunc property is specified
 */

export const setAjaxRequestDataCheckPatch = tableApi => {
    tableApi.modules.ajax.requestDataCheck = requestDataCheck;
};

const requestDataCheck = function (data) {
    if (Array.isArray(data) && data.length>0) return false;
    return !!((!data && this.url) || typeof data === "string" || this.table.options.ajaxRequestFunc);
}