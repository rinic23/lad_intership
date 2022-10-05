import React from 'react';
import { Button } from 'antd';
import style from './CustomButton.module.scss';

type TProps = {
  children?: string;
  buttonStyleClasses?: string;
  customSize?: any;
  customType?: any;
}

const stylesObj = {
  size: {
    large: style.large,
    medium: style.medium,
    small: style.small,
    rectangular: style.rectangular,
  },
  color: {
    light: style.light,
    transparent: style.transparent,
  },
};

export const CustomButton = ({
  children,
  customSize = 'medium',
  customType,
  ...props
}: TProps) => (
  // @ts-ignore
  <Button className={`${stylesObj.size[customSize]} ${stylesObj.color[customType]}`} {...props}>{children}</Button>
);
