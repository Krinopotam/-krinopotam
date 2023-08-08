import dispatcher from '@krinopotam/ui-forms-dispatcher';
import { HelpersObjects } from '@krinopotam/js-helpers';
export class MessageBoxApi {
    constructor(id, modal, config, modalConfigGenerator) {
        this._modal = modal;
        this._currentConfig = config;
        this._formsDispatcher = dispatcher;
        this._modalConfigGenerator = modalConfigGenerator;
        this._id = id;
    }
    get id() {
        return this._id;
    }
    destroy() {
        if (this._formsDispatcher)
            this._formsDispatcher.removeFromStack(this._id);
        this._modal.destroy();
    }
    update(newConfig) {
        const resultConfig = HelpersObjects.mergeObjects(this._currentConfig, newConfig) || {};
        const generatedConfig = this._modalConfigGenerator(resultConfig);
        this._modal.update(generatedConfig);
        this._currentConfig = resultConfig;
    }
    updateButton(buttonName, buttonConfig) {
        const currentConfig = Object.assign({}, this._currentConfig);
        const currentButtons = currentConfig.buttons || {};
        if (buttonConfig.active) {
            for (const key in currentButtons) {
                const button = currentButtons[key];
                if (!button)
                    continue;
                button.active = false;
            }
        }
        if (!currentButtons[buttonName])
            currentButtons[buttonName] = buttonConfig;
        else
            currentButtons[buttonName] = Object.assign(Object.assign({}, currentButtons[buttonName]), buttonConfig);
        currentConfig.buttons = currentButtons;
        this.update(currentConfig);
    }
    removeButton(buttonName) {
        const currentConfig = Object.assign({}, this._currentConfig);
        const currentButtons = currentConfig.buttons || {};
        delete currentButtons[buttonName];
        currentConfig.buttons = currentButtons;
        this.update(currentConfig);
    }
    getCurrentConfig() {
        return this._currentConfig;
    }
    getCurrentButtons() {
        return this._currentConfig.buttons || {};
    }
}
