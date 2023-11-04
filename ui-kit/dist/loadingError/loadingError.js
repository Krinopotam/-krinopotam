import { Card, Col, Row, Typography } from 'antd';
import React, { useCallback } from 'react';
import { Button } from '../button';
const { Text } = Typography;
export const LoadingError = ({ errorMessage, children, retryHandler, style }) => {
    const onRetryHandler = useCallback(() => {
        if (retryHandler)
            retryHandler();
    }, [retryHandler]);
    if (!errorMessage)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(Row, { justify: "center", align: "middle", style: Object.assign({ height: '100%' }, style) },
        React.createElement(Col, null,
            React.createElement(Card, { role: "alert", title: React.createElement("div", null, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445"), headStyle: { backgroundColor: '#ff7875', textAlign: 'center' } },
                React.createElement(Row, { justify: "center", align: "middle" },
                    React.createElement(Col, null,
                        React.createElement(Text, { type: "danger" }, errorMessage))),
                React.createElement(Row, { justify: "center", align: "middle", style: { paddingTop: '20px' } },
                    React.createElement(Col, null, retryHandler ? (React.createElement(Button, { type: 'primary', onClick: onRetryHandler }, "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437")) : (React.createElement(Text, null, "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 (F5)"))))))));
};
//# sourceMappingURL=loadingError.js.map