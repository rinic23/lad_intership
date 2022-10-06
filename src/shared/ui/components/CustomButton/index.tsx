import React from 'react';
import { Button } from 'antd';
// import style from './CustomButton.module.scss';
import { buttonSize, buttonColor } from './constants';

type TProps = {
  children?: string;
  buttonStyleClasses?: string;
  customSize?: 'large' | 'medium' | 'small' | 'rectangular';
  customType?: 'default' |'light' | 'transparent' ;
}

export const CustomButton = ({
  children,
  customSize = 'medium',
  customType = 'default',
  ...props
}: TProps) => (
  <Button className={`${buttonSize[customSize]} ${buttonColor[customType]}`} {...props}>{children}</Button>
);
