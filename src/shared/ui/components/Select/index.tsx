import { Select as SelectAnt, SelectProps } from 'antd';
import React from 'react';
import style from './SelectComponent.module.scss';

export const Select = ({ ...props }: SelectProps) => (
  <SelectAnt bordered={false} className={`${style.select}`} {...props} />
);
