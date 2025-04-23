import { ButtonType } from '@/types/ButtonType';
import React, { FC } from 'react';

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extraStyle }) => {
  return (
    <button
      className={`bg-[#134E9B] text-white ${extraStyle} font-medium text-[16px] py-[15px] px-[25px] flex items-center justify-center gap-[20px] cursor-pointer hover:opacity-80 duration-300 rounded-[6px]`}
    >
      {icon && iconPosition === 'left' && icon}
      {title}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
