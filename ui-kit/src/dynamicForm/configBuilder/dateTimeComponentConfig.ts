import {IDFormFieldProps} from '@src/dynamicForm/components/baseComponent';
import {BaseComponentConfig} from './baseComponentConfig';
import {IDFormFieldDateTimeProps, DateTimeComponent} from '@src/dynamicForm/components/dateTimeComponent';


export class DateTimeComponentConfig<T>  extends BaseComponentConfig<T> {

    constructor(id: keyof T) {
        super(id);
        this._config.component = DateTimeComponent; 
    }


    /** Help class */
    helpClass(value: IDFormFieldProps['helpClass']) {
        this._config.helpClass = value;
        return this;
    }

    /** Field label */
    label(value: IDFormFieldProps['label']) {
        this._config.label = value;
        return this;
    }

    /** Field placeholder*/
    placeholder(value: IDFormFieldProps['placeholder']) {
        this._config.placeholder = value;
        return this;
    }

    /** tab name */
    tab(value: IDFormFieldProps['tab']) {
        this._config.tab = value;
        return this;
    }

    /** inline group name */
    inlineGroup(value: IDFormFieldProps['inlineGroup']) {
        this._config.inlineGroup = value;
        return this;
    }

    /** Default value. If start time or end time is null or undefined, the date range will be an open interval */
    value(value: IDFormFieldDateTimeProps['value']) {
        this._config.value = value;
        return this;
    }

    /** If field default state is hidden */
    hidden(value: IDFormFieldProps['hidden']) {
        this._config.hidden = value;
        return this;
    }

    /** If field default state is disabled */
    disabled(value: IDFormFieldProps['disabled']) {
        this._config.disabled = value;
        return this;
    }

    /** If field default state is readonly */
    readOnly(value: IDFormFieldProps['readOnly']) {
        this._config.readOnly = value;
        return this;
    }

    /** List of fields that must be filled in order to display this field */
    dependsOn(value: IDFormFieldProps['dependsOn']) {
        this._config.dependsOn = value;
        return this;
    }

    /** Field width */
    width(value: IDFormFieldProps['width']) {
        this._config.width = value;
        return this;
    }

    /** Get focus by default */
    autoFocus(value: IDFormFieldProps['autoFocus']) {
        this._config.autoFocus = value;
        return this;
    }

    /** Mark Field Label as Required */
    requiredMark(value: IDFormFieldProps['requiredMark']) {
        this._config.requiredMark = value;
        return this;
    }

    /** Field CSS style */
    style(value: IDFormFieldProps['style']) {
        this._config.style = value;
        return this;
    }

    /** Row field container CSS style */
    rowStyle(value: IDFormFieldProps['rowStyle']) {
        this._config.rowStyle = value;
        return this;
    }

    /** fires when the value of a field changed */
    onValueChanged(value: IDFormFieldProps['onValueChanged']) {
        this._config.onValueChanged = value;
        return this;
    }

    /** fires when the touched state of a field changed */
    onTouchedStateChanged(value: IDFormFieldProps['onTouchedStateChanged']) {
        this._config.onTouchedStateChanged = value;
        return this;
    }

    /** fires when the dirty state of a field changed */
    onDirtyStateChanged(value: IDFormFieldProps['onDirtyStateChanged']) {
        this._config.onDirtyStateChanged = value;
        return this;
    }

    /** fires when the error of a field changed */
    onErrorChanged(value: IDFormFieldProps['onErrorChanged']) {
        this._config.onErrorChanged = value;
        return this;
    }

    /** fires when the hidden state of a field changed */
    onHiddenStateChanged(value: IDFormFieldProps['onHiddenStateChanged']) {
        this._config.onHiddenStateChanged = value;
        return this;
    }

    /** fires when read only state of a field changed */
    onReadOnlyStateChanged(value: IDFormFieldProps['onReadOnlyStateChanged']) {
        this._config.onReadOnlyStateChanged = value;
        return this;
    }

    /** fires when label of a field changed */
    onLabelChanged(value: IDFormFieldProps['onLabelChanged']) {
        this._config.onLabelChanged = value;
        return this;
    }

    /** fires when the disable state of a field changes  */
    onDisabledStateChanged(value: IDFormFieldProps['onDisabledStateChanged']) {
        this._config.onDisabledStateChanged = value;
        return this;
    }

    /** fires when a field is completely initialized, its data is loaded */
    onReady(value: IDFormFieldProps['onReady']) {
        this._config.onReady = value;
        return this;
    }

    /** fires when a field validated */
    onValidated(value: IDFormFieldProps['onValidated']) {
        this._config.onValidated = value;
        return this;
    }

    /** Whether to show clear button */
    allowClear(value: IDFormFieldDateTimeProps['allowClear']) {
        this._config.allowClear = value;
        return this;
    }

    /** The custom clear icon */
    clearIcon(value: IDFormFieldDateTimeProps['clearIcon']) {
        this._config.clearIcon = value;
        return this;
    }

    /** Custom rendering function for date cells */
    dateRender(value: IDFormFieldDateTimeProps['dateRender']) {
        this._config.dateRender = value;
        return this;
    }

    /** To set default picker date */
    defaultPickerValue(value: IDFormFieldDateTimeProps['defaultPickerValue']) {
        this._config.defaultPickerValue = value;
        return this;
    }

    /** Specify the date that cannot be selected */
    disabledDate(value: IDFormFieldDateTimeProps['disabledDate']) {
        this._config.disabledDate = value;
        return this;
    }

    /** To specify the time that cannot be selected */
    disabledTime(value: IDFormFieldDateTimeProps['disabledTime']) {
        this._config.disabledTime = value;
        return this;
    }

    /** To set the date format, refer to dayjs. Default DD.MM.YYYY HH:mm:ss */
    format(value: IDFormFieldDateTimeProps['format']) {
        this._config.format = value;
        return this;
    }

    /** The DatePicker mode */
    mode(value: IDFormFieldDateTimeProps['mode']) {
        this._config.mode = value;
        return this;
    }

    /** The DatePicker time mode */
    timeMode(value: IDFormFieldDateTimeProps['timeMode']) {
        this._config.timeMode = value;
        return this;
    }

    /** To customize the className of the popup calendar */
    popupClassName(value: IDFormFieldDateTimeProps['popupClassName']) {
        this._config.popupClassName = value;
        return this;
    }

    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly(value: IDFormFieldDateTimeProps['inputReadOnly']) {
        this._config.inputReadOnly = value;
        return this;
    }

    /** The custom next icon */
    nextIcon(value: IDFormFieldDateTimeProps['nextIcon']) {
        this._config.nextIcon = value;
        return this;
    }

    /** Customize panel render */
    panelRender(value: IDFormFieldDateTimeProps['panelRender']) {
        this._config.panelRender = value;
        return this;
    }

    /** The position where the selection box pops up (default bottomLeft) */
    placement(value: IDFormFieldDateTimeProps['placement']) {
        this._config.placement = value;
        return this;
    }

    /** To customize the style of the popup calendar */
    popupStyle(value: IDFormFieldDateTimeProps['popupStyle']) {
        this._config.popupStyle = value;
        return this;
    }

    /** The preset ranges for quick selection */
    presets(value: IDFormFieldDateTimeProps['presets']) {
        this._config.presets = value;
        return this;
    }

    /** The custom prev icon */
    prevIcon(value: IDFormFieldDateTimeProps['prevIcon']) {
        this._config.prevIcon = value;
        return this;
    }

    /** Render extra footer in panel */
    renderExtraFooter(value: IDFormFieldDateTimeProps['renderExtraFooter']) {
        this._config.renderExtraFooter = value;
        return this;
    }

    /** Whether to show 'Now' button on panel when showTime is set */
    showNow(value: IDFormFieldDateTimeProps['showNow']) {
        this._config.showNow = value;
        return this;
    }

    /** Whether to show Today button (default true) */
    showToday(value: IDFormFieldDateTimeProps['showToday']) {
        this._config.showToday = value;
        return this;
    }

    /** The custom super next icon */
    superNextIcon(value: IDFormFieldDateTimeProps['superNextIcon']) {
        this._config.superNextIcon = value;
        return this;
    }

    /** The custom super prev icon */
    superPrevIcon(value: IDFormFieldDateTimeProps['superPrevIcon']) {
        this._config.superPrevIcon = value;
        return this;
    }

    /** Callback when click ok button */
    onOk(value: IDFormFieldDateTimeProps['onOk']) {
        this._config.onOk = value;
        return this;
    }

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange(value: IDFormFieldDateTimeProps['onOpenChange']) {
        this._config.onOpenChange = value;
        return this;
    }


    /** Get field config */
    getConfig() {
        return this._config as unknown as IDFormFieldDateTimeProps
    }
}