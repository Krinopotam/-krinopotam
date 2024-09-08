import {Card, Col, Row, Typography} from 'antd';
import React, {CSSProperties, useCallback} from 'react';
import {Button} from '../button';

const {Text} = Typography;

export interface ILoadingErrorProps {
    errorMessage?: string;
    retryHandler?: () => void;
    style?: CSSProperties;
    children: React.ReactNode;
}

export const LoadingError = ({errorMessage, children, retryHandler, style}: ILoadingErrorProps): React.JSX.Element => {
    const onRetryHandler = useCallback(() => {
        if (retryHandler) retryHandler();
    }, [retryHandler]);

    if (!errorMessage) return <>{children}</>;

    return (
        <Row justify="center" align="middle" style={{height: '100%', ...style}}>
            <Col>
                <Card role="alert" title={<div>Error loading data</div>}
                      styles={{header: {backgroundColor: '#ff7875', textAlign: 'center'}}}>
                    <Row justify="center" align="middle">
                        <Col>
                            <Text type="danger">{errorMessage}</Text>
                        </Col>
                    </Row>
                    <Row justify="center" align="middle" style={{paddingTop: '20px'}}>
                        <Col>
                            {retryHandler ? (
                                <Button type={'primary'} onClick={onRetryHandler}>
                                    Try again
                                </Button>
                            ) : (
                                <Text>Try reloading the page (F5)</Text>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};
