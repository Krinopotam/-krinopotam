import React, {Component, ErrorInfo} from 'react';
import {ErrorMessage} from '@src/dFormConstructor/renders/formPreview/errorMessage';

interface IErrorBoundaryProps {
    children: React.ReactNode;
    clearError: object | undefined;
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
        console.warn('Component error:', error, errorInfo);
        this.setState({errorInfo});
    }

    componentDidUpdate(prevProps: IErrorBoundaryProps) {
        if (this.props.clearError && prevProps.clearError !== this.props.clearError && this.state.hasError) {
            this.setState({hasError: false, error: null, errorInfo: null});
        }
    }

    render() {
        if (!this.state.hasError) return this.props.children;
        return <ErrorMessage error={this.state.error} errorInfo={this.state.errorInfo} />;
    }
}
