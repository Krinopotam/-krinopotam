
    import React from 'react';
    import {PageLayout} from '../layouts/pageLayout';
    import {Test} from '../../components/Other/test';
    import { Divider, Collapse } from 'antd';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {darcula, docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

    export const Page821a2003c5a842c2ac8383651a88fd74 = (props: {darkMode: boolean}): React.JSX.Element => {
    // language=text
    const source = `
import React, {useMemo, useState} from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
const treeData = [
    {
        key: 'parent 1',
        title: 'title parent 1',
        g:'1111',
        children: [
            {
                key: 'title parent 1-0',
                title: 'title parent 1-0',
                children: [
                    {
                        key: 'leaf1',
                        title: 'title leaf1',
                    },
                    {
                        key: 'leaf2',
                        title: 'title leaf2',
                    },
                    {
                        key: 'leaf3',
                        title: 'title leaf3',
                    },
                    {
                        key: 'leaf4',
                        title: 'title leaf4',
                    },
                    {
                        key: 'leaf5',
                        title: 'title leaf5',
                    },
                    {
                        key: 'leaf6',
                        title: 'title leaf6',
                    },
                ],
            },
            {
                key: 'parent 1-1',
                title: 'title parent 1-1',
                children: [
                    {
                        key: 'leaf11',
                        title: <b style={{ color: '#08c' }}>leaf11</b>,
                    },
                ],
            },
        ],
    },
];
export const Test: React.FC = () => {
    const [key, setkey] = useState<string>();
    const onChange = (newkey: string, labelList, extra) => {
        console.log('onChange', newkey, labelList, extra, extra.triggerNode.props)
        setkey(newkey);
    };
    const onSelect = (newkey: string, node) => {
        console.log('onSelect', newkey, node)
    };
    const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
        console.log('onPopupScroll', e);
    };
    console.log('Rernder')
    return (
        <TreeSelect
            //showSearch={true}
            style={{ width: '100%' }}
            value={key}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            dropdownRender={menu => <DropdownRender>{menu}</DropdownRender>}
            treeDefaultExpandAll
            fieldNames={{ label: 'title', value: 'key', children: 'children' }}
            onChange={onChange}
            onSelect={onSelect}
            onDeselect={onSelect}
            treeData={treeData}
            onPopupScroll={onPopupScroll}
            onTreeExpand={console.log}
        />
    );
};
const DropdownRender = ({children}:{children:React.ReactNode}) => {
    return useMemo(()=>{
        console.log( 'DropdownRender')
        return <div>{children}</div>;
    }, [children])
}
`
    return (
        <PageLayout>
            <div>
                <Test />
            </div>
            <Divider />
            <div>
                <Collapse 
                    items={[{key: 1, label: 'Show source', children: <SyntaxHighlighter language="javascript" style={props.darkMode ? darcula : docco} showLineNumbers={true}>{source}</SyntaxHighlighter>}]}>
                </Collapse>
            </div>
        </PageLayout>
    );
};

export default Page821a2003c5a842c2ac8383651a88fd74;
