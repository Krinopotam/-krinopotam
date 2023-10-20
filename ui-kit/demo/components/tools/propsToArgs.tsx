import React, {useCallback, useState} from 'react';
import {Input, Typography} from 'antd';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from "react-syntax-highlighter";

const {Title} = Typography;

const {TextArea} = Input;
export const PropsToArgs = (): React.JSX.Element => {
    const [propsText, setPropsText] = useState('');
    const [argsText, setArgsText] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPropsText(e.target.value);

        // noinspection RegExpUnnecessaryNonCapturingGroup
        const pattern = /(?:([a-zA-Z_]+)\s?=\s?{([а-яА-Яa-zA-Z0-9~'`"!?%@#$№^&*|[\]\\/_\-+,.:;<>=()\s\n{}]*?)}(?:\s|\/?>\s?[^{]))|(?:\s([a-zA-Z_]+)(?:\s|\/?>\s?[^{])[^=])/gim;

        let argsResult = '';
        let match: RegExpExecArray | null;
        while ((match = pattern.exec(e.target.value))) {
            if (match[1] && match[2]) {
                argsResult = argsResult + (argsResult ? ',\n' : '') + `    ${match[1]}: ${match[2]}`;
            } else if (match[3]) {
                argsResult = argsResult + (argsResult ? ',\n' : '') + `    ${match[3]}: true`;
            }
        }
        setArgsText('{\n' + argsResult + '\n}');
    }, []);

    return (
        <div>
            <Title level={3}>Преобразование пропсов React компонента в объект</Title>
            <div style={{display: 'flex', flexDirection: 'row', minHeight:'500px', maxWidth: '1600px'}}>
                <div style={{flexGrow: 1, flexShrink: 1, width:'50%'}}>
                    <p>Вставьте код компонента React</p>
                    <TextArea style={{width: '100%', height:'100%'}}  onChange={onChange} value={propsText} />
                </div>
                <div style={{flexGrow: 1, flexShrink: 1, width:'50%'}}>
                    <p>Результат</p>
                    <SyntaxHighlighter language="javascript" style={docco} showLineNumbers={true}>{argsText}</SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};
