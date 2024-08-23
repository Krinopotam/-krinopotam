import {IFormButton} from '@src/buttonsRow/buttonsRow';
import {ModalFuncProps} from 'antd';
import {MergeObjects} from '@krinopotam/js-helpers';
import {IAnyModalConfig, IModalBaseConfig} from "@src/messageBox/types/messageBoxTypes";

export class MessageBoxApi {
    private _modal: {destroy: () => void; update: (configUpdate: ModalFuncProps) => void};

    private readonly _draggableId;
    private readonly _modalConfigGenerator;
    private _currentConfig: IModalBaseConfig;
    private readonly _id: string;
    private readonly _prevFocusedElement: Element | null;

    constructor(
        id: string,
        draggableId: string,
        modal: {destroy: () => void; update: (configUpdate: ModalFuncProps) => void},
        config: IModalBaseConfig,
        modalConfigGenerator: (config: IModalBaseConfig, draggableClass: string) => ModalFuncProps,
        prevFocusedElement: Element | null
    ) {
        this._modal = modal;
        this._currentConfig = config;
        this._modalConfigGenerator = modalConfigGenerator;
        this._id = id;
        this._draggableId = draggableId;
        this._prevFocusedElement = prevFocusedElement;
    }

    public get id() {
        return this._id;
    }

    public destroy() {
        this._modal.destroy();
    }

    public update(newConfig: Omit<IAnyModalConfig, 'formId'>) {
        const resultConfig = MergeObjects(this._currentConfig, newConfig) || {};
        const generatedConfig = this._modalConfigGenerator(resultConfig, this._draggableId);
        this._modal.update(generatedConfig);
        this._currentConfig = resultConfig;
    }

    public updateButton(buttonName: string, buttonConfig: IFormButton) {
        const currentConfig = {...this._currentConfig};
        const currentButtons = currentConfig.buttons || {};

        if (buttonConfig.active) {
            for (const key in currentButtons) {
                const button = currentButtons[key];
                if (!button) continue;
                button.active = false;
            }
        }

        if (!currentButtons[buttonName]) currentButtons[buttonName] = buttonConfig;
        else currentButtons[buttonName] = {...currentButtons[buttonName], ...buttonConfig};

        currentConfig.buttons = currentButtons;
        this.update(currentConfig);
    }

    public removeButton(buttonName: string) {
        const currentConfig = {...this._currentConfig};
        const currentButtons = currentConfig.buttons || {};
        delete currentButtons[buttonName];
        currentConfig.buttons = currentButtons;
        this.update(currentConfig);
    }

    public getCurrentConfig() {
        return this._currentConfig;
    }

    public getCurrentButtons() {
        return this._currentConfig.buttons || {};
    }
}
