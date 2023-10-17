import { IAnyModalConfig, IModalBaseConfig } from './messageBox';
import { IFormButton } from '../buttonsRow/buttonsRow';
import { ModalFuncProps } from 'antd';
export declare class MessageBoxApi {
    private _modal;
    private readonly _draggableId;
    private readonly _modalConfigGenerator;
    private _currentConfig;
    private readonly _formsDispatcher;
    private readonly _id;
    private readonly _prevFocusedElement;
    constructor(id: string, draggableId: string, modal: {
        destroy: () => void;
        update: (configUpdate: ModalFuncProps) => void;
    }, config: IModalBaseConfig, modalConfigGenerator: (config: IModalBaseConfig, draggableClass: string) => ModalFuncProps, prevFocusedElement: Element | null);
    get id(): string;
    destroy(): void;
    update(newConfig: Omit<IAnyModalConfig, 'formId'>): void;
    updateButton(buttonName: string, buttonConfig: IFormButton): void;
    removeButton(buttonName: string): void;
    getCurrentConfig(): IModalBaseConfig;
    getCurrentButtons(): import("../buttonsRow/buttonsRow").IFormButtons;
}
