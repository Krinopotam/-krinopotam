import { ITreeSelectNode } from '../treeSelect';
import { ITreeSelectApi } from "./api";
export declare const useDefaultFilter: (api: ITreeSelectApi) => (inputValue: string, treeNode: ITreeSelectNode | unknown) => boolean;
