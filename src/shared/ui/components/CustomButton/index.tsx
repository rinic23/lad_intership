import React from 'react';
import { Button } from 'antd';
import style from './CustomButton.module.scss';

type TProps = {
  children?: string;
  buttonStyleClasses?: string;
  customSize?: 'large' | 'medium' | 'small' | 'rectangular';
  customType?: 'default' |'light' | 'transparent' ;
}

const stylesObj = {
  size: {
    large: style.large,
    medium: style.medium,
    small: style.small,
    rectangular: style.rectangular,
  },
  color: {
    default: style.default,
    light: style.light,
    transparent: style.transparent,
  },
};

export const CustomButton = ({
  children,
  customSize = 'medium',
  customType = 'default',
  ...props
}: TProps) => (
  <Button className={`${stylesObj.size[customSize]} ${stylesObj.color[customType]}`} {...props}>{children}</Button>
);
