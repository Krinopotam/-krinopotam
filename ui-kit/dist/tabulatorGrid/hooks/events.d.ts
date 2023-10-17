import { IGridApi } from './api';
import { ITabulatorProps } from '../../tabulatorBase';
import { ITabulatorEvents } from "../../tabulatorBase/tabulatorBase";
export declare const useEvents: (gridApi: IGridApi, events: ITabulatorEvents | undefined) => ITabulatorProps['events'];
