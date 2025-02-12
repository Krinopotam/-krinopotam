import {Result} from 'antd';
import React, {ErrorInfo} from 'react';

export const ErrorMessage = (props: {error?: Error | null; errorInfo?: ErrorInfo | null}): React.JSX.Element => {
    return (
        <Result status="error" title="Form preview failed" subTitle="Provided incorrect form properties or something goes wrong">
            {props.error && props.errorInfo && (
                <div className="desc">
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {props.error?.toString()}
                        <br />
                        {props.errorInfo?.componentStack}
                    </details>
                </div>
            )}
        </Result>
    );
};
