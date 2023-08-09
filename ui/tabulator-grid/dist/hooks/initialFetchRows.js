import { useEffect } from "react";
export const useInitialFetchData = (gridApi) => {
    useEffect(() => {
        gridApi.fetchData();
    }, [gridApi]);
};
