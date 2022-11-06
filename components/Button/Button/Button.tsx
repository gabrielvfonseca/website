import React from 'react';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline';
  size?: 'default' | 'small' | 'thin' | 'large';
  type?: 'button' | 'reset' | 'submit';
  formtarget?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

const Button = ({ label, variant, size, type, formtarget }: ButtonProps) => {
  switch (variant) {
    case 'secondary':
      return (
        <button
          type={type ? type : 'button'}
          className="cursor-pointer bg-white-gray rounded-th px-4 py-1.5 text-reisin-black font-semibold text-base hover:opacity-75 border-2 border-gray hover:border-opacity-80 transition ease-in-out delay-50 duration-200 shadow-sm"
        >
          {label}
        </button>
      );
    case 'outline':
      return (
        <button
          type={type ? type : 'button'}
          className="cursor-pointer bg-transparent rounded-th px-4 py-1.5 text-gray text-opacity-90 font-semibold text-base hover:opacity-75 border-2 border-gray border-opacity-30 transition ease-in-out delay-50 duration-200 shadow-sm"
        >
          {label}
        </button>
      );

    default:
      return <button></button>;
  }
};

export default Button;
