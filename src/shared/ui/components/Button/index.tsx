import React from 'react';
import { Button as ButtonAntd, ButtonProps as AntButtonProps } from 'antd';
import { buttonSize, buttonType } from './constants';

type AntButtonPropsOmit = Omit<AntButtonProps, 'size' | 'type'>;

type TProps = AntButtonPropsOmit & {
  children?: string;
  buttonStyleClasses?: string;
  size?: 'large' | 'medium' | 'small' | 'rectangular';
  type?: 'default' |'light' | 'transparent';
}

export const Button = ({
  children,
  size = 'medium',
  type = 'default',
  ...props
}: TProps) => (
  <ButtonAntd className={`${buttonSize[size]} ${buttonType[type]}`} {...props}>{children}</ButtonAntd>
);
