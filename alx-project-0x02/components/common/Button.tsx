import React from 'react';
import { type ButtonProps } from '@/interfaces/index';

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'medium',
    shape = 'rounded-md',
    onClick,
    className = '',
}) => {
    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    return (
        <button
            onClick={onClick}
            className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
