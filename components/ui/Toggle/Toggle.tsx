import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  initial: boolean;
  disabled?: boolean;
  onClick?: any;
}

const Toggle: React.FC<Props> = ({ initial, disabled, onClick }) => {
  const [isOn, setIsOn] = useState(!disabled ? initial : false);

  const toogleEvent = (e: any) => {
    if (!disabled) {
      setIsOn(!isOn);
    }
    onClick(isOn);
  };

  return (
    <div
      className={`flex w-12 h-6 pt-1.2 pl-1 pr-1 pb-1 cursor-pointer rounded-sm ${
        !isOn ? 'justify-start bg-gray bg-opacity-30' : 'justify-end bg-primary bg-opacity-70'
      } ${disabled ? 'bg-opacity-30' : ''}`}
      onClick={toogleEvent}
    >
      <motion.div
        className="w-3 h-3 bg-gray rounded-sm shadow-sm"
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
};

export default Toggle;
