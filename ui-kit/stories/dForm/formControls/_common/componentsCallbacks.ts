import {IDFormFieldProps} from "@src/dynamic-form/components/baseComponent";

export const componentsCallbacks: Omit<IDFormFieldProps, 'component'> ={
    onValueChanged: (...args) => {
        console.log('onValueChanged',args)
    },
    onDirtyStateChanged: (...args) => {
        console.log('onDirtyStateChanged',args)
    },
    onDisabledStateChanged: (...args) => {
        console.log('onDisabledStateChanged',args)
    },
    onReadOnlyStateChanged: (...args) => {
        console.log('onReadOnlyStateChanged',args)
    },
    onHiddenStateChanged: (...args) => {
        console.log('onHiddenStateChanged',args)
    },
    onTouchedStateChanged: (...args) => {
        console.log('onTouchedStateChanged',args)
    },
    onLabelChanged: (...args) => {
        console.log('onLabelChanged',args)
    },
    onReady: () => {
        console.log('onReady')
    },
    onErrorChanged: (...args) => {
        console.log('onErrorChanged',args)
    },
    onValidated: (...args) => {
        console.log('onValidated',args)
    }
}