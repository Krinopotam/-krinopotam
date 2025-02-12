import React, {Component, ErrorInfo} from 'react';
import {Result} from 'antd';

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        return {hasError: true, error: error, errorInfo: null};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Component error:', error, errorInfo);
        this.setState({errorInfo});
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        return (
            <Result status="error" title="Form preview failed" subTitle="Provided incorrect form properties or something goes wrong">
                <div className="desc">
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error?.toString()}
                        <br />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            </Result>
        );
    }
}
