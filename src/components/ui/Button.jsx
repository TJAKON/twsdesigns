import React from 'react';
import clsx from 'clsx'; // Optional: for cleaner className management

const variantClasses = {
  primary: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  secondary: 'bg-gray-800 hover:bg-gray-900 text-white',
  outline: 'border border-gray-800 text-gray-800 hover:bg-gray-100',
};

const sizeClasses = {
  sm: 'px-4 py-1 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 shadow-sm',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
