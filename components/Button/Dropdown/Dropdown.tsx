import React from 'react';

export interface ButtonProps {
  label: string;
}

const DropdownButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default DropdownButton;
