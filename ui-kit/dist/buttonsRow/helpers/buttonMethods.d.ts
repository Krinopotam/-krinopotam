import { IFormButton, IFormButtons } from '../../buttonsRow';
import { IColorType } from '../../button/button';
export declare const prepareButtons: (buttons: IFormButtons | undefined, rowColorType?: IColorType) => {
    [x: string]: IFormButton | null;
};
export declare const getNextButtonName: (currentName: string, buttons: IFormButtons, direction: 'forward' | 'backward') => string;
export declare const changeActiveButton: (buttons: IFormButtons, direction: 'backward' | 'forward') => {
    [x: string]: IFormButton | null;
};
export declare const setActiveButton: (buttons: IFormButtons, name: string, active?: boolean) => {
    [x: string]: IFormButton | null;
};
