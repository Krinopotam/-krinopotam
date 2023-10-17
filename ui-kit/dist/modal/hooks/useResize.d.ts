import React from 'react';
export declare const useResize: (width: number, bodyHeight: number, onResize: (args: {
    width: number;
    bodyHeight: number;
}) => void, minWidth: number, maxWidth: number, bodyMinHeight: number, bodyMaxHeight: number) => (e: React.MouseEvent) => void;
