import React from 'react';

export interface ButtonProps {
  label: string;
}

const ButtonWithIcon = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default ButtonWithIcon;
