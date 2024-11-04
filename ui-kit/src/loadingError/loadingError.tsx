import {CloseCircleFilled} from '@ant-design/icons';
import {useTranslate} from '@src/_shared/hooks/useTranslate';
import {translations} from '@src/loadingError/translations/translations';
import {Alert, Col, Row, Typography} from 'antd';
import React, {CSSProperties, useCallback} from 'react';
import {Button} from '../button';

const {Text} = Typography;

export interface ILoadingErrorProps {
    errorMessage?: string;
    retryHandler?: () => void;
    style?: CSSProperties;
    children: React.ReactNode;
    language?: keyof typeof translations;
}

export const LoadingError = ({errorMessage, children, retryHandler, style, language}: ILoadingErrorProps): React.JSX.Element => {
    const t = useTranslate(language, translations);

    const onRetryHandler = useCallback(() => {
        if (retryHandler) retryHandler();
    }, [retryHandler]);

    if (!errorMessage) return <>{children}</>;

    return (
        <Row justify="center" align="middle" style={{height: '100%', ...style}}>
            <Col>
                <Alert
                    message={t('loadingError')}
                    showIcon
                    icon={<CloseCircleFilled />}
                    description={
                        <>
                            {errorMessage}
                            <Row justify="center" align="middle" style={{marginTop: 16}}>
                                <Col style={{marginLeft: -24}}>
                                    {retryHandler ? (
                                        <Button color={'danger'} variant={'solid'} onClick={onRetryHandler}>
                                            {t('tryAgain')}
                                        </Button>
                                    ) : (
                                        <Text>{t('tryReload')}</Text>
                                    )}
                                </Col>
                            </Row>
                        </>
                    }
                    type="error"
                />
            </Col>
        </Row>
    );
};
/**



 * */
