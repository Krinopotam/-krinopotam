export const formPropsToSource = (props: unknown) => {
    let result = JSON.stringify(props, (_key, value) => (typeof value === 'function' ? '|#-' + value.name + '-#|' : value), 2);

    result = stripQuotesFromClassName(result);
    return stripQuotesFromFieldsNames(result)
};

const stripQuotesFromClassName = (input: string): string => {
    return input.replace(/"\|#-(.*?)-#\|"/g, '$1');
};

const stripQuotesFromFieldsNames = (input: string): string =>{
    return input.replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
}
