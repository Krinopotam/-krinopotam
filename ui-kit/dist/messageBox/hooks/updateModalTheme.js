import { App } from 'antd';
import messageBox from '../messageBox';
export const useUpdateMessageBoxTheme = () => {
    const { modal } = App.useApp();
    messageBox.updateThemedModal(modal);
};
