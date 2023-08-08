import { IAnyModalConfig, IModalBaseConfig } from './messageBox';
import { IFormButton } from '@krinopotam/ui-buttons-row';
import { ModalFuncProps } from 'antd';
export declare class MessageBoxApi {
    private _modal;
    private readonly _modalConfigGenerator;
    private _currentConfig;
    private readonly _formsDispatcher;
    private readonly _id;
    constructor(id: string, modal: {
        destroy: () => void;
        update: (configUpdate: ModalFuncProps) => void;
    }, config: IModalBaseConfig, modalConfigGenerator: (config: IModalBaseConfig) => ModalFuncProps);
    get id(): string;
    destroy(): void;
    update(newConfig: Omit<IAnyModalConfig, 'formId'>): void;
    updateButton(buttonName: string, buttonConfig: IFormButton): void;
    removeButton(buttonName: string): void;
    getCurrentConfig(): IModalBaseConfig;
    getCurrentButtons(): import("@krinopotam/ui-buttons-row").IFormButtons;
}
