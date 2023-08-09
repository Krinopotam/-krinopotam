import {useEffect} from "react";
import {IGridApi} from "./api";

export const useInitialFetchData = (gridApi: IGridApi) => {
    useEffect(() => {
        gridApi.fetchData()
    }, [gridApi]);
};
