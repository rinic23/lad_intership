import React from 'react';
import { Button } from 'antd';

type TProps = {
  children?: string;
  buttonStyleClasses?: string;
}

export const CustomButton = ({
  children,
  buttonStyleClasses,
  ...props
}: TProps) => (
  <Button className={`button ${buttonStyleClasses}`} {...props}>{children}</Button>
);
