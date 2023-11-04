import { useCallback, useRef, useState } from 'react';
import { isArray } from "@krinopotam/js-helpers";
export const useValueConvertor = (fieldNames, labelRender, titleRender, multiple) => {
    const selectedNodesRef = useRef([]);
    const [internalValue, _setInternalValue] = useState(!multiple ? null : []);
    const [, _setSelectedNode] = useState([]);
    const nodeToInternalValue = useNodeToInternalValue(fieldNames, labelRender, titleRender);
    const setSelectedNodes = useCallback((nodes) => {
        if (!nodes) {
            selectedNodesRef.current = [];
            _setSelectedNode([]);
            _setInternalValue(!multiple ? null : []);
            return;
        }
        if (!isArray(nodes)) {
            const _nodes = Object.assign({}, nodes);
            const value = nodeToInternalValue(_nodes);
            selectedNodesRef.current = [_nodes];
            _setSelectedNode([_nodes]);
            if (!multiple)
                _setInternalValue(value !== null && value !== void 0 ? value : null);
            else
                _setInternalValue(value ? [value] : []);
            return;
        }
        const resultInternalValues = [];
        const resultSelectedNodes = [];
        const _nodes = [...nodes];
        for (const node of _nodes) {
            const _node = Object.assign({}, node);
            const value = nodeToInternalValue(_node);
            if (!value)
                continue;
            resultSelectedNodes.push(_node);
            resultInternalValues.push(value);
        }
        if (!multiple) {
            _setInternalValue(resultInternalValues.length > 0 ? resultInternalValues[0] : null);
            selectedNodesRef.current = resultSelectedNodes.length > 0 ? [resultSelectedNodes[0]] : [];
            _setSelectedNode(selectedNodesRef.current);
        }
        else {
            _setInternalValue(resultInternalValues);
            selectedNodesRef.current = resultSelectedNodes;
            _setSelectedNode(selectedNodesRef.current);
        }
    }, [nodeToInternalValue, multiple, selectedNodesRef]);
    return [internalValue, selectedNodesRef, setSelectedNodes];
};
const useNodeToInternalValue = (fieldNames, labelRender, titleRender) => {
    return useCallback((node) => {
        var _a, _b, _c;
        if (!node)
            return null;
        const keyField = (_a = fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value) !== null && _a !== void 0 ? _a : 'id';
        const id = node[keyField];
        let label;
        if (labelRender)
            label = labelRender(node);
        else {
            const titleField = (_b = fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.title) !== null && _b !== void 0 ? _b : 'title';
            const renderedTitleField = titleRender ? '__title' : '';
            label = (_c = node.label) !== null && _c !== void 0 ? _c : undefined;
            if (!label && renderedTitleField)
                label = node[renderedTitleField];
            if (!label)
                label = node[titleField];
        }
        return { value: id, label: label !== null && label !== void 0 ? label : undefined };
    }, [fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.title, fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value, labelRender, titleRender]);
};
const usePlainValueToNode = (fieldNames, getNodeByIdFromDataSet, getNodeByIdFromSelectedNodes) => {
    return useCallback((plainValue) => {
        var _a;
        if (!plainValue)
            return undefined;
        const keyField = (_a = fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value) !== null && _a !== void 0 ? _a : 'id';
        const id = plainValue;
        let node = getNodeByIdFromDataSet(id);
        if (node)
            return node;
        node = getNodeByIdFromSelectedNodes(id);
        if (node)
            return node;
        const result = {};
        result[keyField] = plainValue;
        return result;
    }, [fieldNames, getNodeByIdFromDataSet, getNodeByIdFromSelectedNodes]);
};
export const usePlainValuesToNodes = (api) => {
    const treeProps = api.getProps();
    const getNodeByIdFromDataSet = useGetNodeByIdFromDataSet(api.getDataSet());
    const getNodeByIdFromSelectedNodes = useGetNodeByIdFromSelectedNodes(api.getValues());
    const plainValueToNode = usePlainValueToNode(treeProps.fieldNames, getNodeByIdFromDataSet, getNodeByIdFromSelectedNodes);
    return useCallback((plainValues) => {
        if (!plainValues)
            return undefined;
        const values = isArray(plainValues) ? plainValues : [plainValues];
        const result = [];
        for (const value of values) {
            const node = plainValueToNode(value);
            if (!node)
                continue;
            result.push(node);
        }
        return result;
    }, [plainValueToNode]);
};
const useGetNodeByIdFromDataSet = (nodes) => {
    const nodesRef = useRef();
    nodesRef.current = nodes;
    return useCallback((id) => {
        if (!nodesRef.current || !id)
            return undefined;
        const recursive = (_nodes, _id) => {
            for (const _node of _nodes) {
                if (_node.id === _id)
                    return _node;
                if (!_node.children)
                    continue;
                const _result = recursive(_node.children, _id);
                if (_result)
                    return _result;
            }
            return undefined;
        };
        return recursive(nodesRef.current, id);
    }, []);
};
const useGetNodeByIdFromSelectedNodes = (nodes) => {
    const nodesRef = useRef();
    nodesRef.current = nodes;
    return useCallback((id) => {
        if (!nodesRef.current || !id)
            return undefined;
        for (const node of nodesRef.current) {
            if (node.id === id)
                return node;
        }
        return undefined;
    }, []);
};
//# sourceMappingURL=valueConvertor.js.map