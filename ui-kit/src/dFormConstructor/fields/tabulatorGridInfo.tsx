import {TableOutlined} from '@ant-design/icons';
import {ITabulatorGridFieldProps, TabulatorGridField} from '@src/dForm/fields/tabulatorGrid';
import {BaseComponentInfo, IComponentPropsInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import React from 'react';

export class TabulatorGridInfo extends BaseComponentInfo {
    public override readonly TITLE = 'Tabulator Grid';
    public override readonly CODE = 'tabulatorGrid';
    public override readonly CLASS = TabulatorGridField;
    public override readonly INTERFACE_NAME = 'ITabulatorGridFieldProps';
    public override readonly ICON = (<TableOutlined />);

    constructor(params?: {id: string; label?: React.ReactNode | string}) {
        super(params);
        this.props['columns'] = [
            {
                field: 'num',
                title: '№',
                formatter: 'rownum',
                accessor: 'rownum',
                headerSort: false,
                vertAlign: 'middle',
            },
        ];
    }

    override getPropsInfo() {
        const formatter = [
            'plaintext',
            'textarea',
            'html',
            'money',
            'image',
            'datetime',
            'datetimediff',
            'link',
            'tickCross',
            'color',
            'star',
            'traffic',
            'progress',
            'lookup',
            'buttonTick',
            'buttonCross',
            'rownum',
            'handle',
            'rowSelection',
            'responsiveCollapse',
            'toggle',
        ];

        const {placeholder, id, label, ...baseProps} = super.getPropsInfo();
        return {
            id,
            label,
            columns: [
                {
                    field: 'string',
                    title: 'string',
                    width: 'number',
                    minWidth: 'number',
                    maxWidth: 'number',
                    resizable: 'boolean',
                    formatter: formatter,
                    bottomCalc: ['avg', 'max', 'min', 'sum', 'concat', 'count', 'unique'],
                    cellPopup: 'string',
                    clipboard: 'boolean',
                    cssClass: 'string',
                    dblClickPopup: 'string',
                    download: 'boolean',
                    editable: 'boolean',
                    editableTitle: 'boolean',
                    frozen: 'boolean',
                    headerDblClickPopup: 'string',
                    headerFilter: ['input', 'textarea', 'number', 'range', 'tickCross', 'star', 'list', 'date', 'time', 'datetime'],
                    headerFilterFunc: ['=', '!=', 'like', '<', '>', '<=', '>=', 'in', 'regex', 'starts', 'ends'],
                    headerFilterLiveFilter: 'boolean',
                    headerFilterPlaceholder: 'string',
                    headerHozAlign: ['left', 'center', 'right'],
                    headerMenuIcon: 'string',
                    headerSort: 'boolean',
                    headerSortStartingDir: ['asc', 'desc'],
                    headerSortTristate: 'boolean',
                    headerTooltip: 'string',
                    headerVertical: 'boolean',
                    headerWordWrap: 'boolean',
                    hideInHtml: 'boolean',
                    hozAlign: ['left', 'center', 'right'],
                    htmlOutput: 'boolean',
                    print: 'boolean',
                    responsive: 'number',
                    rowHandle: 'boolean',
                    sorter: ['string', 'number', 'boolean', 'datetime', 'time', 'date', 'alphanum', 'exists', 'array'],
                    sorterParams: {
                        format: 'string',
                        locale: 'string',
                        alignEmptyValues: ['top', 'bottom'],
                        type: ['length', 'sum', 'max', 'min', 'avg'],
                    },
                    titleClipboard: 'string',
                    titleDownload: 'string',
                    titleHtmlOutput: 'string',
                    titleFormatter: formatter,
                    titlePrint: 'string',
                    tooltip: 'string',
                    topCalc: ['avg', 'max', 'min', 'sum', 'concat', 'count', 'unique'],
                    topCalcParams: {precision: 'number'},
                    validator: ['required', 'unique', 'integer', 'float', 'numeric', 'string', 'alphanumeric'],
                    variableHeight: 'boolean',
                    vertAlign: ['top', 'middle', 'bottom'],
                    visible: 'boolean',
                    widthGrow: 'number',
                    widthShrink: 'number',
                },
            ],
            ...baseProps,
            allowTextSelection: 'boolean',
            appendSelection: 'boolean',
            autoResize: 'boolean',
            buttonsIconsOnly: 'boolean',
            buttonsPosition: ['center', 'left', 'right'],
            buttonsSize: ['large', 'middle', 'small'],
            clipboard: 'boolean',
            clipboardCopyHeader: 'boolean',
            clipboardCopyRowRange: ['visible', 'active', 'selected', 'all', 'range'],
            clipboardCopyStyled: 'boolean',
            clipboardPasteAction: ['insert', 'update', 'replace', 'range'],
            columnCalcs: ['both', 'table', 'group'],
            columnHeaderSortMulti: 'boolean',
            columnHeaderVertAlign: ['top', 'middle', 'bottom'],
            confirmDelete: 'boolean',
            dataLoader: 'boolean',
            dataLoaderError: 'string',
            dataLoaderErrorTimeout: 'number',
            dataLoaderLoading: 'string',
            dataReceiveParams: {current_page: 'string', last_page: 'string', data: 'string'},
            dataSendParams: {page: 'string', size: 'string', sorters: 'string', filters: 'string'},
            dataTree: 'boolean',
            dataTreeBranchElement: 'boolean',
            dataTreeChildColumnCalcs: 'boolean',
            dataTreeChildField: 'string',
            dataTreeChildIndent: 'number',
            dataTreeCollapseElement: 'string',
            dataTreeElementColumn: 'string',
            dataTreeExpandElement: 'string',
            dataTreeFilter: 'boolean',
            dataTreeParentField: 'string',
            dataTreeSelectPropagate: 'boolean',
            dataTreeSort: 'boolean',
            dataTreeStartExpanded: 'boolean',
            downloadRowRange: ['visible', 'active', 'selected', 'all', 'range'],
            editTriggerEvent: ['click', 'dblclick', 'focus'],
            editFormProps:'formModal',
            fetchInCreateMode: 'boolean',
            filterMode: ['local', 'remote'],
            frozenRows: 'number',
            frozenRowsField: 'string',
            gridMode: ['local', 'remote'],
            groupBy: 'string',
            groupClickPopup: 'string',
            groupClosedShowCalcs: 'boolean',
            groupContextPopup: 'string',
            groupDblClickPopup: 'string',
            groupDblPopup: 'string',
            groupStartOpen: 'boolean',
            groupToggleElement: ['header', 'arrow'],
            groupUpdateOnCellEdit: 'boolean',
            headerFilterLiveFilterDelay: 'number',
            headerLabel: 'string',
            headerSort: 'boolean',
            headerSortClickElement: ['header', 'icon'],
            headerSortElement: 'string',
            headerVisible: 'boolean',
            height: 'string',
            history: 'boolean',
            importFormat: ['array', 'json', 'csv'],
            importReader: ['binary', 'buffer', 'text', 'url'],
            index: 'string',
            layout: ['fitData', 'fitColumns', 'fitDataFill', 'fitDataStretch', 'fitDataTable'],
            maxHeight: 'string',
            maxWidth: 'string',
            minHeight: 'string',
            minWidth: 'string',
            movableColumns: 'boolean',
            movableRows: 'boolean',
            multiSelect: 'boolean',
            nestedFieldSeparator: 'string',
            noHover: 'boolean',
            pagination: 'boolean',
            paginationAddRow: ['table', 'page'],
            paginationButtonCount: 'number',
            paginationCounter: ['rows', 'pages'],
            paginationInitialPage: 'number',
            paginationMode: ['local', 'remote'],
            paginationSize: 'number',
            persistence: 'boolean',
            persistenceID: 'string',
            persistenceMode: ['local', 'cookie'],
            persistentFilter: 'boolean',
            persistentLayout: 'boolean',
            persistentSort: 'boolean',
            placeholder: 'string',
            placeholderHeaderFilter: 'string',
            printFooter: 'string',
            printHeader: 'string',
            printRowRange: ['visible', 'active', 'selected', 'all', 'range'],
            printStyled: 'boolean',
            progressiveLoad: ['load', 'scroll'],
            progressiveLoadDelay: 'number',
            progressiveLoadScrollMargin: 'number',
            renderHorizontal: ['virtual', 'basic'],
            renderVertical: ['virtual', 'basic'],
            renderVerticalBuffer: 'number',
            resizableColumnFit: 'boolean',
            resizableColumnGuide: 'boolean',
            resizableRowGuide: 'boolean',
            resizeHeightWithForm: 'boolean',
            resizeHeightWithParent: 'string',
            responsiveBreakpoint: ['xl', 'md', 'sm', 'xs', 'lg', 'xxl'],
            responsiveLayout: ['hide', 'collapse'],
            responsiveLayoutCollapseStartOpen: 'boolean',
            responsiveLayoutCollapseUseFormatters: 'boolean',
            rowClickPopup: 'string',
            rowContextPopup: 'string',
            rowDblClickPopup: 'string',
            rowDeleteMessage: 'string',
            rowFormatterClipboard: 'boolean',
            rowHeader: {
                formatter: formatter,
                field: 'string',
                headerSort: 'boolean',
                hozAlign: ['left', 'center', 'right'],
                headerHozAlign: ['left', 'center', 'right'],
                resizable: 'boolean',
                frozen: 'boolean',
                titleFormatter: formatter,
                minWidth: 'number',
                width: 'number',
                rowHandle: 'boolean',
            },
            rowHeight: 'number',
            scrollToColumnIfVisible: 'boolean',
            scrollToColumnPosition: ['left', 'center', 'middle', 'right'],
            scrollToRowIfVisible: 'boolean',
            scrollToRowPosition: ['top', 'center', 'bottom', 'nearest'],
            selectableRange: 'boolean',
            selectableRangeClearCells: 'boolean',
            selectableRangeColumns: 'boolean',
            selectableRangeRows: 'boolean',
            selectableRows: 'boolean',
            selectableRowsPersistence: 'boolean',
            selectableRowsRollingSelection: 'boolean',
            selectionMode: 'boolean',
            showHeaderFilter: 'boolean',
            sortMode: ['local', 'remote'],
            sortOrderReverse: 'boolean',
            spreadsheet: 'boolean',
            spreadsheetColumns: 'number',
            spreadsheetOutputFull: 'boolean',
            spreadsheetRows: 'number',
            spreadsheetSheetTabs: 'boolean',
            systemButtonsPosition: ['center', 'left', 'right'],
            temp: {val1: 'string', val2: 'string'},
            textDirection: ['auto', 'ltr', 'rtl'],
            validationMode: ['blocking', 'highlight', 'manual'],
        } satisfies IComponentPropsInfo<ITabulatorGridFieldProps>;
    }
}
