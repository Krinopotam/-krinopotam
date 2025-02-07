import {BaseComponentInfo} from '@src/dFormConstructor/fields/baseComponentInfo';
import {FormInfo} from "@src/dFormConstructor/fields/formInfo";

export const generateFieldId = (formInfo: FormInfo, prefix: string = 'Field'): string => {
    const recursiveSearch = (fields: BaseComponentInfo[], searchId: string) => {
        for (const fieldInfo of fields) {
            if (fieldInfo.getComponentId() === searchId) return true;
            if (fieldInfo.getChildren().length > 0) return recursiveSearch(fieldInfo.getChildren(), searchId);
        }

        return false;
    };

    let curNum = 1;
    let id: string;

    do {
        id = prefix + curNum;
        curNum++;
    } while (recursiveSearch([formInfo], id));

    return id;
};
